import { app as Ft } from "../../scripts/app.js";
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
}, Vr = Object.prototype.hasOwnProperty, Ze = (e, s) => Vr.call(e, s), Ue = Array.isArray, uo = (e) => Qo(e) === "[object Map]", wo = (e) => Qo(e) === "[object Set]", al = (e) => Qo(e) === "[object Date]", We = (e) => typeof e == "function", dt = (e) => typeof e == "string", es = (e) => typeof e == "symbol", tt = (e) => e !== null && typeof e == "object", ei = (e) => (tt(e) || We(e)) && We(e.then) && We(e.catch), ti = Object.prototype.toString, Qo = (e) => ti.call(e), Wr = (e) => Qo(e).slice(8, -1), si = (e) => Qo(e) === "[object Object]", La = (e) => dt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Lo = /* @__PURE__ */ Ra(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ln = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, Gr = /-\w/g, Gt = Ln(
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
  const s = dt(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let ll;
const Nn = () => ll || (ll = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function jt(e) {
  if (Ue(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = dt(n) ? Jr(n) : jt(n);
      if (l)
        for (const i in l)
          s[i] = l[i];
    }
    return s;
  } else if (dt(e) || tt(e))
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
function Ee(e) {
  let s = "";
  if (dt(e))
    s = e;
  else if (Ue(e))
    for (let o = 0; o < e.length; o++) {
      const n = Ee(e[o]);
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
  if (o = es(e), n = es(s), o || n)
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
      const d = e.hasOwnProperty(c), u = s.hasOwnProperty(c);
      if (d && !u || !d && u || !Qs(e[c], s[c]))
        return !1;
    }
  }
  return String(e) === String(s);
}
function Oa(e, s) {
  return e.findIndex((o) => Qs(o, s));
}
const ai = (e) => !!(e && e.__v_isRef === !0), f = (e) => dt(e) ? e : e == null ? "" : Ue(e) || tt(e) && (e.toString === ti || !We(e.toString)) ? ai(e) ? f(e.value) : JSON.stringify(e, li, 2) : String(e), li = (e, s) => ai(s) ? li(e, s.value) : uo(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [n, l], i) => (o[Yn(n, i) + " =>"] = l, o),
    {}
  )
} : wo(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => Yn(o))
} : es(s) ? Yn(s) : tt(s) && !Ue(s) && !si(s) ? String(s) : s, Yn = (e, s = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    es(e) ? `Symbol(${(o = e.description) != null ? o : s})` : e
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
    this.flags |= 2, il(this), di(this);
    const s = nt, o = Xt;
    nt = this, Xt = !0;
    try {
      return this.fn();
    } finally {
      ui(this), nt = s, Xt = o, this.flags &= -3;
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
function di(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function ui(e) {
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
  const s = e.dep, o = nt, n = Xt;
  nt = e, Xt = !0;
  try {
    di(e);
    const l = e.fn(e._value);
    (s.version === 0 || As(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    nt = o, Xt = n, ui(e), e.flags &= -3;
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
let Xt = !0;
const mi = [];
function Cs() {
  mi.push(Xt), Xt = !1;
}
function xs() {
  const e = mi.pop();
  Xt = e === void 0 ? !0 : e;
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
    if (!nt || !Xt || nt === this.computed)
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
  if (Xt && nt) {
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
  const d = (u) => {
    u && u.trigger();
  };
  if (Aa(), s === "clear")
    c.forEach(d);
  else {
    const u = Ue(e), m = u && La(o);
    if (u && o === "length") {
      const v = Number(n);
      c.forEach((g, w) => {
        (w === "length" || w === jo || !es(w) && w >= v) && d(g);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && d(c.get(o)), m && d(c.get(jo)), s) {
        case "add":
          u ? m && d(c.get("length")) : (d(c.get(Js)), uo(e) && d(c.get(ga)));
          break;
        case "delete":
          u || (d(c.get(Js)), uo(e) && d(c.get(ga)));
          break;
        case "set":
          uo(e) && d(c.get(Js));
          break;
      }
  }
  Na();
}
function oo(e) {
  const s = Xe(e);
  return s === e ? s : (_t(s, "iterate", jo), Vt(e) ? s : s.map(ts));
}
function Un(e) {
  return _t(e = Xe(e), "iterate", jo), e;
}
function Ds(e, s) {
  return Ss(e) ? Xs(e) ? go(ts(s)) : go(s) : ts(s);
}
const nc = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xn(this, Symbol.iterator, (e) => Ds(this, e));
  },
  concat(...e) {
    return oo(this).concat(
      ...e.map((s) => Ue(s) ? oo(s) : s)
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
  return n !== e && !Vt(e) && (l._next = l.next, l.next = () => {
    const i = l._next();
    return i.done || (i.value = o(i.value)), i;
  }), l;
}
const ac = Array.prototype;
function ys(e, s, o, n, l, i) {
  const c = Un(e), d = c !== e && !Vt(e), u = c[s];
  if (u !== ac[s]) {
    const g = u.apply(e, i);
    return d ? ts(g) : g;
  }
  let m = o;
  c !== e && (d ? m = function(g, w) {
    return o.call(this, Ds(e, g), w, e);
  } : o.length > 2 && (m = function(g, w) {
    return o.call(this, g, w, e);
  }));
  const v = u.call(c, m, n);
  return d && l ? l(v) : v;
}
function rl(e, s, o, n) {
  const l = Un(e);
  let i = o;
  return l !== e && (Vt(e) ? o.length > 3 && (i = function(c, d, u) {
    return o.call(this, c, d, u, e);
  }) : i = function(c, d, u) {
    return o.call(this, c, Ds(e, d), u, e);
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
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(es)
);
function ic(e) {
  es(e) || (e = String(e));
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
    const c = Ue(s);
    if (!l) {
      let u;
      if (c && (u = nc[o]))
        return u;
      if (o === "hasOwnProperty")
        return ic;
    }
    const d = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      $t(s) ? s : n
    );
    if ((es(o) ? pi.has(o) : lc(o)) || (l || _t(s, "get", o), i))
      return d;
    if ($t(d)) {
      const u = c && La(o) ? d : d.value;
      return l && tt(u) ? bn(u) : u;
    }
    return tt(d) ? l ? bn(d) : Fs(d) : d;
  }
}
class hi extends gi {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, n, l) {
    let i = s[o];
    const c = Ue(s) && La(o);
    if (!this._isShallow) {
      const m = Ss(i);
      if (!Vt(n) && !Ss(n) && (i = Xe(i), n = Xe(n)), !c && $t(i) && !$t(n))
        return m || (i.value = n), !0;
    }
    const d = c ? Number(o) < s.length : Ze(s, o), u = Reflect.set(
      s,
      o,
      n,
      $t(s) ? s : l
    );
    return s === Xe(l) && (d ? As(n, i) && bs(s, "set", o, n) : bs(s, "add", o, n)), u;
  }
  deleteProperty(s, o) {
    const n = Ze(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && n && bs(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const n = Reflect.has(s, o);
    return (!es(o) || !pi.has(o)) && _t(s, "has", o), n;
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
const cc = /* @__PURE__ */ new hi(), dc = /* @__PURE__ */ new rc(), uc = /* @__PURE__ */ new hi(!0);
const ha = (e) => e, nn = (e) => Reflect.getPrototypeOf(e);
function fc(e, s, o) {
  return function(...n) {
    const l = this.__v_raw, i = Xe(l), c = uo(i), d = e === "entries" || e === Symbol.iterator && c, u = e === "keys" && c, m = l[e](...n), v = o ? ha : s ? go : ts;
    return !s && _t(
      i,
      "iterate",
      u ? ga : Js
    ), {
      // iterator protocol
      next() {
        const { value: g, done: w } = m.next();
        return w ? { value: g, done: w } : {
          value: d ? [v(g[0]), v(g[1])] : v(g),
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
      const i = this.__v_raw, c = Xe(i), d = Xe(l);
      e || (As(l, d) && _t(c, "get", l), _t(c, "get", d));
      const { has: u } = nn(c), m = s ? ha : e ? go : ts;
      if (u.call(c, l))
        return m(i.get(l));
      if (u.call(c, d))
        return m(i.get(d));
      i !== c && i.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && _t(Xe(l), "iterate", Js), l.size;
    },
    has(l) {
      const i = this.__v_raw, c = Xe(i), d = Xe(l);
      return e || (As(l, d) && _t(c, "has", l), _t(c, "has", d)), l === d ? i.has(l) : i.has(l) || i.has(d);
    },
    forEach(l, i) {
      const c = this, d = c.__v_raw, u = Xe(d), m = s ? ha : e ? go : ts;
      return !e && _t(u, "iterate", Js), d.forEach((v, g) => l.call(i, m(v), m(g), c));
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
        !s && !Vt(l) && !Ss(l) && (l = Xe(l));
        const i = Xe(this);
        return nn(i).has.call(i, l) || (i.add(l), bs(i, "add", l, l)), this;
      },
      set(l, i) {
        !s && !Vt(i) && !Ss(i) && (i = Xe(i));
        const c = Xe(this), { has: d, get: u } = nn(c);
        let m = d.call(c, l);
        m || (l = Xe(l), m = d.call(c, l));
        const v = u.call(c, l);
        return c.set(l, i), m ? As(i, v) && bs(c, "set", l, i) : bs(c, "add", l, i), this;
      },
      delete(l) {
        const i = Xe(this), { has: c, get: d } = nn(i);
        let u = c.call(i, l);
        u || (l = Xe(l), u = c.call(i, l)), d && d.call(i, l);
        const m = i.delete(l);
        return u && bs(i, "delete", l, void 0), m;
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
    uc,
    pc,
    wi
  );
}
function bn(e) {
  return Ba(
    e,
    !0,
    dc,
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
  const d = new Proxy(
    e,
    i === 2 ? n : o
  );
  return l.set(e, d), d;
}
function Xs(e) {
  return Ss(e) ? Xs(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ss(e) {
  return !!(e && e.__v_isReadonly);
}
function Vt(e) {
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
const ts = (e) => tt(e) ? Fs(e) : e, go = (e) => tt(e) ? bn(e) : e;
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
    this.dep = new za(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : Xe(s), this._value = o ? s : ts(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, n = this.__v_isShallow || Vt(s) || Ss(s);
    s = n ? s : Xe(s), As(s, o) && (this._rawValue = s, this._value = n ? s : ts(s), this.dep.trigger());
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
  const { immediate: n, deep: l, once: i, scheduler: c, augmentJob: d, call: u } = o, m = (x) => l ? x : Vt(x) || l === !1 || l === 0 ? ks(x, 1) : ks(x);
  let v, g, w, p, _ = !1, S = !1;
  if ($t(e) ? (g = () => e.value, _ = Vt(e)) : Xs(e) ? (g = () => m(e), _ = !0) : Ue(e) ? (S = !0, _ = e.some((x) => Xs(x) || Vt(x)), g = () => e.map((x) => {
    if ($t(x))
      return x.value;
    if (Xs(x))
      return m(x);
    if (We(x))
      return u ? u(x, 2) : x();
  })) : We(e) ? s ? g = u ? () => u(e, 2) : e : g = () => {
    if (w) {
      Cs();
      try {
        w();
      } finally {
        xs();
      }
    }
    const x = qs;
    qs = v;
    try {
      return u ? u(e, 3, [p]) : e(p);
    } finally {
      qs = x;
    }
  } : g = vs, s && l) {
    const x = g, q = l === !0 ? 1 / 0 : l;
    g = () => ks(x(), q);
  }
  const $ = tc(), P = () => {
    v.stop(), $ && $.active && Da($.effects, v);
  };
  if (i && s) {
    const x = s;
    s = (...q) => {
      x(...q), P();
    };
  }
  let M = S ? new Array(e.length).fill(ln) : ln;
  const E = (x) => {
    if (!(!(v.flags & 1) || !v.dirty && !x))
      if (s) {
        const q = v.run();
        if (l || _ || (S ? q.some((B, A) => As(B, M[A])) : As(q, M))) {
          w && w();
          const B = qs;
          qs = v;
          try {
            const A = [
              q,
              // pass undefined as the old value when it's changed for the first time
              M === ln ? void 0 : S && M[0] === ln ? [] : M,
              p
            ];
            M = q, u ? u(s, 3, A) : (
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
  return d && d(E), v = new ii(g), v.scheduler = c ? () => c(E, !1) : E, p = (x) => Ic(x, !1, v), w = v.onStop = () => {
    const x = kn.get(v);
    if (x) {
      if (u)
        u(x, 4);
      else
        for (const q of x) q();
      kn.delete(v);
    }
  }, s ? n ? E(!0) : M = v.run() : c ? c(E.bind(null, !0), !0) : v.run(), P.pause = v.pause.bind(v), P.resume = v.resume.bind(v), P.stop = P, P;
}
function ks(e, s = 1 / 0, o) {
  if (s <= 0 || !tt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, $t(e))
    ks(e.value, s, o);
  else if (Ue(e))
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
function ss(e, s, o, n) {
  if (We(e)) {
    const l = Zo(e, s, o, n);
    return l && ei(l) && l.catch((i) => {
      zn(i, s, o);
    }), l;
  }
  if (Ue(e)) {
    const l = [];
    for (let i = 0; i < e.length; i++)
      l.push(ss(e[i], s, o, n));
    return l;
  }
}
function zn(e, s, o, n = !0) {
  const l = s ? s.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: c } = s && s.appContext.config || st;
  if (s) {
    let d = s.parent;
    const u = s.proxy, m = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; d; ) {
      const v = d.ec;
      if (v) {
        for (let g = 0; g < v.length; g++)
          if (v[g](e, u, m) === !1)
            return;
      }
      d = d.parent;
    }
    if (i) {
      Cs(), Zo(i, null, 10, [
        e,
        u,
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
  Ue(e) ? fo.push(...e) : Ls && e.id === -1 ? Ls.splice(lo + 1, 0, e) : e.flags & 1 || (fo.push(e), e.flags |= 1), $i();
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
function h(e, s = yt, o) {
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
    let [i, c, d, u = st] = s[l];
    i && (We(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && ks(c), n.push({
      dir: i,
      instance: o,
      value: c,
      oldValue: void 0,
      arg: d,
      modifiers: u
    }));
  }
  return e;
}
function Gs(e, s, o, n) {
  const l = e.dirs, i = s && s.dirs;
  for (let c = 0; c < l.length; c++) {
    const d = l[c];
    i && (d.oldValue = i[c].value);
    let u = d.dir[n];
    u && (Cs(), ss(u, o, 8, [
      e.el,
      d,
      e,
      s
    ]), xs());
  }
}
const Ii = Symbol("_vte"), Ei = (e) => e.__isTeleport, No = (e) => e && (e.disabled || e.disabled === ""), dl = (e) => e && (e.defer || e.defer === ""), ul = (e) => typeof SVGElement < "u" && e instanceof SVGElement, fl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ya = (e, s) => {
  const o = e && e.to;
  return dt(o) ? s ? s(o) : null : o;
}, Ti = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, n, l, i, c, d, u, m) {
    const {
      mc: v,
      pc: g,
      pbc: w,
      o: { insert: p, querySelector: _, createText: S, createComment: $ }
    } = m, P = No(s.props);
    let { shapeFlag: M, children: E, dynamicChildren: x } = s;
    if (e == null) {
      const q = s.el = S(""), B = s.anchor = S("");
      p(q, o, n), p(B, o, n);
      const A = (T, O) => {
        M & 16 && v(
          E,
          T,
          O,
          l,
          i,
          c,
          d,
          u
        );
      }, I = () => {
        const T = s.target = ya(s.props, _), O = Pi(T, s, S, p);
        T && (c !== "svg" && ul(T) ? c = "svg" : c !== "mathml" && fl(T) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(T), P || (A(T, O), pn(s, !1)));
      };
      P && (A(o, B), pn(s, !0)), dl(s.props) ? (s.el.__isMounted = !1, St(() => {
        I(), delete s.el.__isMounted;
      }, i)) : I();
    } else {
      if (dl(s.props) && e.el.__isMounted === !1) {
        St(() => {
          Ti.process(
            e,
            s,
            o,
            n,
            l,
            i,
            c,
            d,
            u,
            m
          );
        }, i);
        return;
      }
      s.el = e.el, s.targetStart = e.targetStart;
      const q = s.anchor = e.anchor, B = s.target = e.target, A = s.targetAnchor = e.targetAnchor, I = No(e.props), T = I ? o : B, O = I ? q : A;
      if (c === "svg" || ul(B) ? c = "svg" : (c === "mathml" || fl(B)) && (c = "mathml"), x ? (w(
        e.dynamicChildren,
        x,
        T,
        l,
        i,
        c,
        d
      ), qa(e, s, !0)) : u || g(
        e,
        s,
        T,
        O,
        l,
        i,
        c,
        d,
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
        const ce = s.target = ya(
          s.props,
          _
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
      pn(s, P);
    }
  },
  remove(e, s, o, { um: n, o: { remove: l } }, i) {
    const {
      shapeFlag: c,
      children: d,
      anchor: u,
      targetStart: m,
      targetAnchor: v,
      target: g,
      props: w
    } = e;
    if (g && (l(m), l(v)), i && l(u), c & 16) {
      const p = i || !No(w);
      for (let _ = 0; _ < d.length; _++) {
        const S = d[_];
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
  move: rn,
  hydrate: Mc
};
function rn(e, s, o, { o: { insert: n }, m: l }, i = 2) {
  i === 0 && n(e.targetAnchor, s, o);
  const { el: c, anchor: d, shapeFlag: u, children: m, props: v } = e, g = i === 2;
  if (g && n(c, s, o), (!g || No(v)) && u & 16)
    for (let w = 0; w < m.length; w++)
      l(
        m[w],
        s,
        o,
        2
      );
  g && n(d, s, o);
}
function Mc(e, s, o, n, l, i, {
  o: { nextSibling: c, parentNode: d, querySelector: u, insert: m, createText: v }
}, g) {
  function w(S, $, P, M) {
    $.anchor = g(
      c(S),
      $,
      d(S),
      o,
      n,
      l,
      i
    ), $.targetStart = P, $.targetAnchor = M;
  }
  const p = s.target = ya(
    s.props,
    u
  ), _ = No(s.props);
  if (p) {
    const S = p._lpa || p.firstChild;
    if (s.shapeFlag & 16)
      if (_)
        w(
          e,
          s,
          S,
          S && c(S)
        );
      else {
        s.anchor = c(e);
        let $ = S;
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
        s.targetAnchor || Pi(p, s, v, m), g(
          S && c(S),
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
      const i = Li(l), c = Xe(e), { mode: d } = c;
      if (n.isLeaving)
        return Zn(i);
      const u = ml(i);
      if (!u)
        return Zn(i);
      let m = Ko(
        u,
        c,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (g) => m = g
      );
      u.type !== bt && Zs(u, m);
      let v = o.subTree && ml(o.subTree);
      if (v && v.type !== bt && !Ys(v, u) && Di(o).type !== bt) {
        let g = Ko(
          v,
          c,
          n,
          o
        );
        if (Zs(v, g), d === "out-in" && u.type !== bt)
          return n.isLeaving = !0, g.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete g.afterLeave, v = void 0;
          }, Zn(i);
        d === "in-out" && u.type !== bt ? g.delayLeave = (w, p, _) => {
          const S = Oi(
            n,
            v
          );
          S[String(v.key)] = v, w[_s] = () => {
            p(), w[_s] = void 0, delete m.delayedLeave, v = void 0;
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
function Ko(e, s, o, n, l) {
  const {
    appear: i,
    mode: c,
    persisted: d = !1,
    onBeforeEnter: u,
    onEnter: m,
    onAfterEnter: v,
    onEnterCancelled: g,
    onBeforeLeave: w,
    onLeave: p,
    onAfterLeave: _,
    onLeaveCancelled: S,
    onBeforeAppear: $,
    onAppear: P,
    onAfterAppear: M,
    onAppearCancelled: E
  } = s, x = String(e.key), q = Oi(o, e), B = (T, O) => {
    T && ss(
      T,
      n,
      9,
      O
    );
  }, A = (T, O) => {
    const ce = O[1];
    B(T, O), Ue(T) ? T.every((Y) => Y.length <= 1) && ce() : T.length <= 1 && ce();
  }, I = {
    mode: c,
    persisted: d,
    beforeEnter(T) {
      let O = u;
      if (!o.isMounted)
        if (i)
          O = $ || u;
        else
          return;
      T[_s] && T[_s](
        !0
        /* cancelled */
      );
      const ce = q[x];
      ce && Ys(e, ce) && ce.el[_s] && ce.el[_s](), B(O, [T]);
    },
    enter(T) {
      let O = m, ce = v, Y = g;
      if (!o.isMounted)
        if (i)
          O = P || m, ce = M || v, Y = E || g;
        else
          return;
      let j = !1;
      const se = T[cn] = (ee) => {
        j || (j = !0, ee ? B(Y, [T]) : B(ce, [T]), I.delayedLeave && I.delayedLeave(), T[cn] = void 0);
      };
      O ? A(O, [T, se]) : se();
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
      const j = T[_s] = (se) => {
        Y || (Y = !0, O(), se ? B(S, [T]) : B(_, [T]), T[_s] = void 0, q[ce] === e && delete q[ce]);
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
    const d = o == null ? c.key : String(o) + String(c.key != null ? c.key : i);
    c.type === G ? (c.patchFlag & 128 && l++, n = n.concat(
      Ga(c.children, s, d)
    )) : (s || c.type !== bt) && n.push(d != null ? Ns(c, { key: d }) : c);
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
  if (Ue(e)) {
    e.forEach(
      (_, S) => Uo(
        _,
        s && (Ue(s) ? s[S] : s),
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
  const i = n.shapeFlag & 4 ? Gn(n.component) : n.el, c = l ? null : i, { i: d, r: u } = e, m = s && s.r, v = d.refs === st ? d.refs = {} : d.refs, g = d.setupState, w = Xe(g), p = g === st ? Zl : (_) => Ze(w, _);
  if (m != null && m !== u) {
    if (vl(s), dt(m))
      v[m] = null, p(m) && (g[m] = null);
    else if ($t(m)) {
      m.value = null;
      const _ = s;
      _.k && (v[_.k] = null);
    }
  }
  if (We(u))
    Zo(u, d, 12, [c, v]);
  else {
    const _ = dt(u), S = $t(u);
    if (_ || S) {
      const $ = () => {
        if (e.f) {
          const P = _ ? p(u) ? g[u] : v[u] : u.value;
          if (l)
            Ue(P) && Da(P, i);
          else if (Ue(P))
            P.includes(i) || P.push(i);
          else if (_)
            v[u] = [i], p(u) && (g[u] = v[u]);
          else {
            const M = [i];
            u.value = M, e.k && (v[e.k] = M);
          }
        } else _ ? (v[u] = c, p(u) && (g[u] = c)) : S && (u.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const P = () => {
          $(), xn.delete(e);
        };
        P.id = -1, xn.set(e, P), St(P, o);
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
      const d = tn(o), u = ss(s, o, e, c);
      return d(), xs(), u;
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
  return dt(e) ? jc(Gc, e, !1) || e : e || Fi;
}
function jc(e, s, o = !0, n = !1) {
  const l = yt || kt;
  if (l) {
    const i = l.type;
    {
      const d = Dd(
        i,
        !1
      );
      if (d && (d === s || d === Gt(s) || d === On(Gt(s))))
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
  return e && (e[s] || e[Gt(s)] || e[On(Gt(s))]);
}
function ge(e, s, o, n) {
  let l;
  const i = o, c = Ue(e);
  if (c || dt(e)) {
    const d = c && Xs(e);
    let u = !1, m = !1;
    d && (u = !Vt(e), m = Ss(e), e = Un(e)), l = new Array(e.length);
    for (let v = 0, g = e.length; v < g; v++)
      l[v] = s(
        u ? m ? go(ts(e[v])) : ts(e[v]) : e[v],
        v,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let d = 0; d < e; d++)
      l[d] = s(d + 1, d, void 0, i);
  } else if (tt(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (d, u) => s(d, u, void 0, i)
      );
    else {
      const d = Object.keys(e);
      l = new Array(d.length);
      for (let u = 0, m = d.length; u < m; u++) {
        const v = d[u];
        l[u] = s(e[v], v, u, i);
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
function qe(e, s, o = {}, n, l) {
  if (yt.ce || yt.parent && mo(yt.parent) && yt.parent.ce) {
    const m = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), a(), R(
      G,
      null,
      [C("slot", o, n && n())],
      m ? -2 : 64
    );
  }
  let i = e[s];
  i && i._c && (i._d = !1), a();
  const c = i && Bi(i(o)), d = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, u = R(
    G,
    {
      key: (d && !es(d) ? d : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!c && n ? "_fb" : "")
    },
    c || (n ? n() : []),
    c && e._ === 1 ? 64 : -2
  );
  return i && i._c && (i._d = !0), u;
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
    $watch: (e) => od.bind(e)
  })
), ea = (e, s) => e !== st && !e.__isScriptSetup && Ze(e, s), Hc = {
  get({ _: e }, s) {
    if (s === "__v_skip")
      return !0;
    const { ctx: o, setupState: n, data: l, props: i, accessCache: c, type: d, appContext: u } = e;
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
    let v, g;
    if (m)
      return s === "$attrs" && _t(e.attrs, "get", ""), m(e);
    if (
      // css module (injected by vue-loader)
      (v = d.__cssModules) && (v = v[s])
    )
      return v;
    if (o !== st && Ze(o, s))
      return c[s] = 4, o[s];
    if (
      // global properties
      g = u.config.globalProperties, Ze(g, s)
    )
      return g[s];
  },
  set({ _: e }, s, o) {
    const { data: n, setupState: l, ctx: i } = e;
    return ea(l, s) ? (l[s] = o, !0) : n !== st && Ze(n, s) ? (n[s] = o, !0) : Ze(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (i[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: n, appContext: l, props: i, type: c }
  }, d) {
    let u;
    return !!(o[d] || e !== st && d[0] !== "$" && Ze(e, d) || ea(s, d) || Ze(i, d) || Ze(n, d) || Ze(zo, d) || Ze(l.config.globalProperties, d) || (u = c.__cssModules) && u[d]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : Ze(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function gl(e) {
  return Ue(e) ? e.reduce(
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
    watch: d,
    provide: u,
    inject: m,
    // lifecycle
    created: v,
    beforeMount: g,
    mounted: w,
    beforeUpdate: p,
    updated: _,
    activated: S,
    deactivated: $,
    beforeDestroy: P,
    beforeUnmount: M,
    destroyed: E,
    unmounted: x,
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
    filters: se
  } = s;
  if (m && qc(m, n, null), c)
    for (const N in c) {
      const D = c[N];
      We(D) && (n[N] = D.bind(o));
    }
  if (l) {
    const N = l.call(o, o);
    tt(N) && (e.data = Fs(N));
  }
  if (_a = !0, i)
    for (const N in i) {
      const D = i[N], Z = We(D) ? D.bind(o, o) : We(D.get) ? D.get.bind(o, o) : vs, X = !We(D) && We(D.set) ? D.set.bind(o) : vs, he = z({
        get: Z,
        set: X
      });
      Object.defineProperty(n, N, {
        enumerable: !0,
        configurable: !0,
        get: () => he.value,
        set: (Se) => he.value = Se
      });
    }
  if (d)
    for (const N in d)
      Vi(d[N], n, o, N);
  if (u) {
    const N = We(u) ? u.call(o) : u;
    Reflect.ownKeys(N).forEach((D) => {
      ed(D, N[D]);
    });
  }
  v && hl(v, e, "c");
  function U(N, D) {
    Ue(D) ? D.forEach((Z) => N(Z.bind(o))) : D && N(D.bind(o));
  }
  if (U(Uc, g), U(et, w), U(zc, p), U(Ui, _), U(Oc, S), U(Ac, $), U(Wc, I), U(Vc, B), U(Bc, A), U(zi, M), U(to, x), U(Fc, T), Ue(O))
    if (O.length) {
      const N = e.exposed || (e.exposed = {});
      O.forEach((D) => {
        Object.defineProperty(N, D, {
          get: () => o[D],
          set: (Z) => o[D] = Z,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  q && e.render === vs && (e.render = q), ce != null && (e.inheritAttrs = ce), Y && (e.components = Y), j && (e.directives = j), T && Ai(e);
}
function qc(e, s, o = vs) {
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
function hl(e, s, o) {
  ss(
    Ue(e) ? e.map((n) => n.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function Vi(e, s, o, n) {
  let l = n.includes(".") ? Hi(o, n) : () => o[n];
  if (dt(e)) {
    const i = s[e];
    We(i) && Ct(l, i);
  } else if (We(e))
    Ct(l, e.bind(o));
  else if (tt(e))
    if (Ue(e))
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
  } = e.appContext, d = i.get(s);
  let u;
  return d ? u = d : !l.length && !o && !n ? u = s : (u = {}, l.length && l.forEach(
    (m) => Sn(u, m, c, !0)
  ), Sn(u, s, c)), tt(s) && i.set(s, u), u;
}
function Sn(e, s, o, n = !1) {
  const { mixins: l, extends: i } = s;
  i && Sn(e, i, o, !0), l && l.forEach(
    (c) => Sn(e, c, o, !0)
  );
  for (const c in s)
    if (!(n && c === "expose")) {
      const d = Yc[c] || o && o[c];
      e[c] = d ? d(e[c], s[c]) : s[c];
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
function Do(e, s) {
  return e ? gt(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function wl(e, s) {
  return e ? Ue(e) && Ue(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : gt(
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
    const i = Gi(), c = /* @__PURE__ */ new WeakSet(), d = [];
    let u = !1;
    const m = i.app = {
      _uid: Qc++,
      _component: n,
      _props: l,
      _container: null,
      _context: i,
      _instance: null,
      version: Od,
      get config() {
        return i.config;
      },
      set config(v) {
      },
      use(v, ...g) {
        return c.has(v) || (v && We(v.install) ? (c.add(v), v.install(m, ...g)) : We(v) && (c.add(v), v(m, ...g))), m;
      },
      mixin(v) {
        return i.mixins.includes(v) || i.mixins.push(v), m;
      },
      component(v, g) {
        return g ? (i.components[v] = g, m) : i.components[v];
      },
      directive(v, g) {
        return g ? (i.directives[v] = g, m) : i.directives[v];
      },
      mount(v, g, w) {
        if (!u) {
          const p = m._ceVNode || C(n, l);
          return p.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(p, v, w), u = !0, m._container = v, v.__vue_app__ = m, Gn(p.component);
        }
      },
      onUnmount(v) {
        d.push(v);
      },
      unmount() {
        u && (ss(
          d,
          m._instance,
          16
        ), e(null, m._container), delete m._container.__vue_app__);
      },
      provide(v, g) {
        return i.provides[v] = g, m;
      },
      runWithContext(v) {
        const g = vo;
        vo = m;
        try {
          return v();
        } finally {
          vo = g;
        }
      }
    };
    return m;
  };
}
let vo = null;
function ed(e, s) {
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
const td = Symbol.for("v-scx"), sd = () => gn(td);
function Ct(e, s, o) {
  return ji(e, s, o);
}
function ji(e, s, o = st) {
  const { immediate: n, deep: l, flush: i, once: c } = o, d = gt({}, o), u = s && n || !s && i !== "post";
  let m;
  if (Jo) {
    if (i === "sync") {
      const p = sd();
      m = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!u) {
      const p = () => {
      };
      return p.stop = vs, p.resume = vs, p.pause = vs, p;
    }
  }
  const v = kt;
  d.call = (p, _, S) => ss(p, v, _, S);
  let g = !1;
  i === "post" ? d.scheduler = (p) => {
    St(p, v && v.suspense);
  } : i !== "sync" && (g = !0, d.scheduler = (p, _) => {
    _ ? p() : Wa(p);
  }), d.augmentJob = (p) => {
    s && (p.flags |= 4), g && (p.flags |= 2, v && (p.id = v.uid, p.i = v));
  };
  const w = Ec(e, s, d);
  return Jo && (m ? m.push(w) : u && w()), w;
}
function od(e, s, o) {
  const n = this.proxy, l = dt(e) ? e.includes(".") ? Hi(n, e) : () => n[e] : e.bind(n, n);
  let i;
  We(s) ? i = s : (i = s.handler, o = s);
  const c = tn(this), d = ji(l, i.bind(n), o);
  return c(), d;
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
const nd = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${Gt(s)}Modifiers`] || e[`${zs(s)}Modifiers`];
function ad(e, s, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || st;
  let l = o;
  const i = s.startsWith("update:"), c = i && nd(n, s.slice(7));
  c && (c.trim && (l = o.map((v) => dt(v) ? v.trim() : v)), c.number && (l = o.map(An)));
  let d, u = n[d = qn(s)] || // also try camelCase event handler (#2249)
  n[d = qn(Gt(s))];
  !u && i && (u = n[d = qn(zs(s))]), u && ss(
    u,
    e,
    6,
    l
  );
  const m = n[d + "Once"];
  if (m) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[d])
      return;
    e.emitted[d] = !0, ss(
      m,
      e,
      6,
      l
    );
  }
}
const ld = /* @__PURE__ */ new WeakMap();
function Ki(e, s, o = !1) {
  const n = o ? ld : s.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const i = e.emits;
  let c = {}, d = !1;
  if (!We(e)) {
    const u = (m) => {
      const v = Ki(m, s, !0);
      v && (d = !0, gt(c, v));
    };
    !o && s.mixins.length && s.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !i && !d ? (tt(e) && n.set(e, null), null) : (Ue(i) ? i.forEach((u) => c[u] = null) : gt(c, i), tt(e) && n.set(e, c), c);
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
    attrs: d,
    emit: u,
    render: m,
    renderCache: v,
    props: g,
    data: w,
    setupState: p,
    ctx: _,
    inheritAttrs: S
  } = e, $ = Cn(e);
  let P, M;
  try {
    if (o.shapeFlag & 4) {
      const x = l || n, q = x;
      P = ms(
        m.call(
          q,
          x,
          v,
          g,
          p,
          w,
          _
        )
      ), M = d;
    } else {
      const x = s;
      P = ms(
        x.length > 1 ? x(
          g,
          { attrs: d, slots: c, emit: u }
        ) : x(
          g,
          null
        )
      ), M = s.props ? d : id(d);
    }
  } catch (x) {
    Fo.length = 0, zn(x, e, 1), P = C(bt);
  }
  let E = P;
  if (M && S !== !1) {
    const x = Object.keys(M), { shapeFlag: q } = E;
    x.length && q & 7 && (i && x.some(Ma) && (M = rd(
      M,
      i
    )), E = Ns(E, M, !1, !0));
  }
  return o.dirs && (E = Ns(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(o.dirs) : o.dirs), o.transition && Zs(E, o.transition), P = E, Cn($), P;
}
const id = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Dn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, rd = (e, s) => {
  const o = {};
  for (const n in e)
    (!Ma(n) || !(n.slice(9) in s)) && (o[n] = e[n]);
  return o;
};
function cd(e, s, o) {
  const { props: n, children: l, component: i } = e, { props: c, children: d, patchFlag: u } = s, m = i.emitsOptions;
  if (s.dirs || s.transition)
    return !0;
  if (o && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return n ? bl(n, c, m) : !!c;
    if (u & 8) {
      const v = s.dynamicProps;
      for (let g = 0; g < v.length; g++) {
        const w = v[g];
        if (c[w] !== n[w] && !Vn(m, w))
          return !0;
      }
    }
  } else
    return (l || d) && (!d || !d.$stable) ? !0 : n === c ? !1 : n ? c ? bl(n, c, m) : !0 : !!c;
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
function dd({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const n = s.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const qi = {}, Yi = () => Object.create(qi), Ji = (e) => Object.getPrototypeOf(e) === qi;
function ud(e, s, o, n = !1) {
  const l = {}, i = Yi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Xi(e, s, l, i);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = n ? l : _c(l) : e.type.props ? e.props = l : e.props = i, e.attrs = i;
}
function fd(e, s, o, n) {
  const {
    props: l,
    attrs: i,
    vnode: { patchFlag: c }
  } = e, d = Xe(l), [u] = e.propsOptions;
  let m = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const v = e.vnode.dynamicProps;
      for (let g = 0; g < v.length; g++) {
        let w = v[g];
        if (Vn(e.emitsOptions, w))
          continue;
        const p = s[w];
        if (u)
          if (Ze(i, w))
            p !== i[w] && (i[w] = p, m = !0);
          else {
            const _ = Gt(w);
            l[_] = ka(
              u,
              d,
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
    for (const g in d)
      (!s || // for camelCase
      !Ze(s, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = zs(g)) === g || !Ze(s, v))) && (u ? o && // for camelCase
      (o[g] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[g] = ka(
        u,
        d,
        g,
        void 0,
        e,
        !0
      )) : delete l[g]);
    if (i !== d)
      for (const g in i)
        (!s || !Ze(s, g)) && (delete i[g], m = !0);
  }
  m && bs(e.attrs, "set", "");
}
function Xi(e, s, o, n) {
  const [l, i] = e.propsOptions;
  let c = !1, d;
  if (s)
    for (let u in s) {
      if (Lo(u))
        continue;
      const m = s[u];
      let v;
      l && Ze(l, v = Gt(u)) ? !i || !i.includes(v) ? o[v] = m : (d || (d = {}))[v] = m : Vn(e.emitsOptions, u) || (!(u in n) || m !== n[u]) && (n[u] = m, c = !0);
    }
  if (i) {
    const u = Xe(o), m = d || st;
    for (let v = 0; v < i.length; v++) {
      const g = i[v];
      o[g] = ka(
        l,
        u,
        g,
        m[g],
        e,
        !Ze(m, g)
      );
    }
  }
  return c;
}
function ka(e, s, o, n, l, i) {
  const c = e[o];
  if (c != null) {
    const d = Ze(c, "default");
    if (d && n === void 0) {
      const u = c.default;
      if (c.type !== Function && !c.skipFactory && We(u)) {
        const { propsDefaults: m } = l;
        if (o in m)
          n = m[o];
        else {
          const v = tn(l);
          n = m[o] = u.call(
            null,
            s
          ), v();
        }
      } else
        n = u;
      l.ce && l.ce._setProp(o, n);
    }
    c[
      0
      /* shouldCast */
    ] && (i && !d ? n = !1 : c[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === zs(o)) && (n = !0));
  }
  return n;
}
const md = /* @__PURE__ */ new WeakMap();
function Qi(e, s, o = !1) {
  const n = o ? md : s.propsCache, l = n.get(e);
  if (l)
    return l;
  const i = e.props, c = {}, d = [];
  let u = !1;
  if (!We(e)) {
    const v = (g) => {
      u = !0;
      const [w, p] = Qi(g, s, !0);
      gt(c, w), p && d.push(...p);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!i && !u)
    return tt(e) && n.set(e, co), co;
  if (Ue(i))
    for (let v = 0; v < i.length; v++) {
      const g = Gt(i[v]);
      kl(g) && (c[g] = st);
    }
  else if (i)
    for (const v in i) {
      const g = Gt(v);
      if (kl(g)) {
        const w = i[v], p = c[g] = Ue(w) || We(w) ? { type: w } : gt({}, w), _ = p.type;
        let S = !1, $ = !0;
        if (Ue(_))
          for (let P = 0; P < _.length; ++P) {
            const M = _[P], E = We(M) && M.name;
            if (E === "Boolean") {
              S = !0;
              break;
            } else E === "String" && ($ = !1);
          }
        else
          S = We(_) && _.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = S, p[
          1
          /* shouldCastTrue */
        ] = $, (S || Ze(p, "default")) && d.push(g);
      }
    }
  const m = [c, d];
  return tt(e) && n.set(e, m), m;
}
function kl(e) {
  return e[0] !== "$" && !Lo(e);
}
const Ha = (e) => e === "_" || e === "_ctx" || e === "$stable", Ka = (e) => Ue(e) ? e.map(ms) : [ms(e)], vd = (e, s, o) => {
  if (s._n)
    return s;
  const n = h((...l) => Ka(s(...l)), o);
  return n._c = !1, n;
}, Zi = (e, s, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (Ha(l)) continue;
    const i = e[l];
    if (We(i))
      s[l] = vd(l, i, n);
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
}, pd = (e, s, o) => {
  const n = e.slots = Yi();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (tr(n, s, o), o && oi(n, "_", l, !0)) : Zi(s, n);
  } else s && er(e, s);
}, gd = (e, s, o) => {
  const { vnode: n, slots: l } = e;
  let i = !0, c = st;
  if (n.shapeFlag & 32) {
    const d = s._;
    d ? o && d === 1 ? i = !1 : tr(l, s, o) : (i = !s.$stable, Zi(s, l)), c = s;
  } else s && (er(e, s), c = { default: 1 });
  if (i)
    for (const d in l)
      !Ha(d) && c[d] == null && delete l[d];
}, St = bd;
function hd(e) {
  return yd(e);
}
function yd(e, s) {
  const o = Nn();
  o.__VUE__ = !0;
  const {
    insert: n,
    remove: l,
    patchProp: i,
    createElement: c,
    createText: d,
    createComment: u,
    setText: m,
    setElementText: v,
    parentNode: g,
    nextSibling: w,
    setScopeId: p = vs,
    insertStaticContent: _
  } = e, S = (L, V, ne, le = null, fe = null, me = null, Ce = void 0, xe = null, ae = !!V.dynamicChildren) => {
    if (L === V)
      return;
    L && !Ys(L, V) && (le = He(L), Se(L, fe, me, !0), L = null), V.patchFlag === -2 && (ae = !1, V.dynamicChildren = null);
    const { type: ue, ref: Le, shapeFlag: Ie } = V;
    switch (ue) {
      case Wn:
        $(L, V, ne, le);
        break;
      case bt:
        P(L, V, ne, le);
        break;
      case sa:
        L == null && M(V, ne, le, Ce);
        break;
      case G:
        Y(
          L,
          V,
          ne,
          le,
          fe,
          me,
          Ce,
          xe,
          ae
        );
        break;
      default:
        Ie & 1 ? q(
          L,
          V,
          ne,
          le,
          fe,
          me,
          Ce,
          xe,
          ae
        ) : Ie & 6 ? j(
          L,
          V,
          ne,
          le,
          fe,
          me,
          Ce,
          xe,
          ae
        ) : (Ie & 64 || Ie & 128) && ue.process(
          L,
          V,
          ne,
          le,
          fe,
          me,
          Ce,
          xe,
          ae,
          Ge
        );
    }
    Le != null && fe ? Uo(Le, L && L.ref, me, V || L, !V) : Le == null && L && L.ref != null && Uo(L.ref, null, me, L, !0);
  }, $ = (L, V, ne, le) => {
    if (L == null)
      n(
        V.el = d(V.children),
        ne,
        le
      );
    else {
      const fe = V.el = L.el;
      V.children !== L.children && m(fe, V.children);
    }
  }, P = (L, V, ne, le) => {
    L == null ? n(
      V.el = u(V.children || ""),
      ne,
      le
    ) : V.el = L.el;
  }, M = (L, V, ne, le) => {
    [L.el, L.anchor] = _(
      L.children,
      V,
      ne,
      le,
      L.el,
      L.anchor
    );
  }, E = ({ el: L, anchor: V }, ne, le) => {
    let fe;
    for (; L && L !== V; )
      fe = w(L), n(L, ne, le), L = fe;
    n(V, ne, le);
  }, x = ({ el: L, anchor: V }) => {
    let ne;
    for (; L && L !== V; )
      ne = w(L), l(L), L = ne;
    l(V);
  }, q = (L, V, ne, le, fe, me, Ce, xe, ae) => {
    if (V.type === "svg" ? Ce = "svg" : V.type === "math" && (Ce = "mathml"), L == null)
      B(
        V,
        ne,
        le,
        fe,
        me,
        Ce,
        xe,
        ae
      );
    else {
      const ue = L.el && L.el._isVueCE ? L.el : null;
      try {
        ue && ue._beginPatch(), T(
          L,
          V,
          fe,
          me,
          Ce,
          xe,
          ae
        );
      } finally {
        ue && ue._endPatch();
      }
    }
  }, B = (L, V, ne, le, fe, me, Ce, xe) => {
    let ae, ue;
    const { props: Le, shapeFlag: Ie, transition: te, dirs: K } = L;
    if (ae = L.el = c(
      L.type,
      me,
      Le && Le.is,
      Le
    ), Ie & 8 ? v(ae, L.children) : Ie & 16 && I(
      L.children,
      ae,
      null,
      le,
      fe,
      ta(L, me),
      Ce,
      xe
    ), K && Gs(L, null, le, "created"), A(ae, L, L.scopeId, Ce, le), Le) {
      for (const we in Le)
        we !== "value" && !Lo(we) && i(ae, we, null, Le[we], me, le);
      "value" in Le && i(ae, "value", null, Le.value, me), (ue = Le.onVnodeBeforeMount) && rs(ue, le, L);
    }
    K && Gs(L, null, le, "beforeMount");
    const Me = wd(fe, te);
    Me && te.beforeEnter(ae), n(ae, V, ne), ((ue = Le && Le.onVnodeMounted) || Me || K) && St(() => {
      ue && rs(ue, le, L), Me && te.enter(ae), K && Gs(L, null, le, "mounted");
    }, fe);
  }, A = (L, V, ne, le, fe) => {
    if (ne && p(L, ne), le)
      for (let me = 0; me < le.length; me++)
        p(L, le[me]);
    if (fe) {
      let me = fe.subTree;
      if (V === me || or(me.type) && (me.ssContent === V || me.ssFallback === V)) {
        const Ce = fe.vnode;
        A(
          L,
          Ce,
          Ce.scopeId,
          Ce.slotScopeIds,
          fe.parent
        );
      }
    }
  }, I = (L, V, ne, le, fe, me, Ce, xe, ae = 0) => {
    for (let ue = ae; ue < L.length; ue++) {
      const Le = L[ue] = xe ? Os(L[ue]) : ms(L[ue]);
      S(
        null,
        Le,
        V,
        ne,
        le,
        fe,
        me,
        Ce,
        xe
      );
    }
  }, T = (L, V, ne, le, fe, me, Ce) => {
    const xe = V.el = L.el;
    let { patchFlag: ae, dynamicChildren: ue, dirs: Le } = V;
    ae |= L.patchFlag & 16;
    const Ie = L.props || st, te = V.props || st;
    let K;
    if (ne && js(ne, !1), (K = te.onVnodeBeforeUpdate) && rs(K, ne, V, L), Le && Gs(V, L, ne, "beforeUpdate"), ne && js(ne, !0), (Ie.innerHTML && te.innerHTML == null || Ie.textContent && te.textContent == null) && v(xe, ""), ue ? O(
      L.dynamicChildren,
      ue,
      xe,
      ne,
      le,
      ta(V, fe),
      me
    ) : Ce || D(
      L,
      V,
      xe,
      null,
      ne,
      le,
      ta(V, fe),
      me,
      !1
    ), ae > 0) {
      if (ae & 16)
        ce(xe, Ie, te, ne, fe);
      else if (ae & 2 && Ie.class !== te.class && i(xe, "class", null, te.class, fe), ae & 4 && i(xe, "style", Ie.style, te.style, fe), ae & 8) {
        const Me = V.dynamicProps;
        for (let we = 0; we < Me.length; we++) {
          const ye = Me[we], W = Ie[ye], F = te[ye];
          (F !== W || ye === "value") && i(xe, ye, W, F, fe, ne);
        }
      }
      ae & 1 && L.children !== V.children && v(xe, V.children);
    } else !Ce && ue == null && ce(xe, Ie, te, ne, fe);
    ((K = te.onVnodeUpdated) || Le) && St(() => {
      K && rs(K, ne, V, L), Le && Gs(V, L, ne, "updated");
    }, le);
  }, O = (L, V, ne, le, fe, me, Ce) => {
    for (let xe = 0; xe < V.length; xe++) {
      const ae = L[xe], ue = V[xe], Le = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ae.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ae.type === G || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ys(ae, ue) || // - In the case of a component, it could contain anything.
        ae.shapeFlag & 198) ? g(ae.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ne
        )
      );
      S(
        ae,
        ue,
        Le,
        null,
        le,
        fe,
        me,
        Ce,
        !0
      );
    }
  }, ce = (L, V, ne, le, fe) => {
    if (V !== ne) {
      if (V !== st)
        for (const me in V)
          !Lo(me) && !(me in ne) && i(
            L,
            me,
            V[me],
            null,
            fe,
            le
          );
      for (const me in ne) {
        if (Lo(me)) continue;
        const Ce = ne[me], xe = V[me];
        Ce !== xe && me !== "value" && i(L, me, xe, Ce, fe, le);
      }
      "value" in ne && i(L, "value", V.value, ne.value, fe);
    }
  }, Y = (L, V, ne, le, fe, me, Ce, xe, ae) => {
    const ue = V.el = L ? L.el : d(""), Le = V.anchor = L ? L.anchor : d("");
    let { patchFlag: Ie, dynamicChildren: te, slotScopeIds: K } = V;
    K && (xe = xe ? xe.concat(K) : K), L == null ? (n(ue, ne, le), n(Le, ne, le), I(
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
      ae
    )) : Ie > 0 && Ie & 64 && te && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    L.dynamicChildren ? (O(
      L.dynamicChildren,
      te,
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
      L,
      V,
      !0
      /* shallow */
    )) : D(
      L,
      V,
      ne,
      Le,
      fe,
      me,
      Ce,
      xe,
      ae
    );
  }, j = (L, V, ne, le, fe, me, Ce, xe, ae) => {
    V.slotScopeIds = xe, L == null ? V.shapeFlag & 512 ? fe.ctx.activate(
      V,
      ne,
      le,
      Ce,
      ae
    ) : se(
      V,
      ne,
      le,
      fe,
      me,
      Ce,
      ae
    ) : ee(L, V, ae);
  }, se = (L, V, ne, le, fe, me, Ce) => {
    const xe = L.component = Ed(
      L,
      le,
      fe
    );
    if (Fn(L) && (xe.ctx.renderer = Ge), Td(xe, !1, Ce), xe.asyncDep) {
      if (fe && fe.registerDep(xe, U, Ce), !L.el) {
        const ae = xe.subTree = C(bt);
        P(null, ae, V, ne), L.placeholder = ae.el;
      }
    } else
      U(
        xe,
        L,
        V,
        ne,
        fe,
        me,
        Ce
      );
  }, ee = (L, V, ne) => {
    const le = V.component = L.component;
    if (cd(L, V, ne))
      if (le.asyncDep && !le.asyncResolved) {
        N(le, V, ne);
        return;
      } else
        le.next = V, le.update();
    else
      V.el = L.el, le.vnode = V;
  }, U = (L, V, ne, le, fe, me, Ce) => {
    const xe = () => {
      if (L.isMounted) {
        let { next: Ie, bu: te, u: K, parent: Me, vnode: we } = L;
        {
          const Fe = sr(L);
          if (Fe) {
            Ie && (Ie.el = we.el, N(L, Ie, Ce)), Fe.asyncDep.then(() => {
              L.isUnmounted || xe();
            });
            return;
          }
        }
        let ye = Ie, W;
        js(L, !1), Ie ? (Ie.el = we.el, N(L, Ie, Ce)) : Ie = we, te && vn(te), (W = Ie.props && Ie.props.onVnodeBeforeUpdate) && rs(W, Me, Ie, we), js(L, !0);
        const F = _l(L), de = L.subTree;
        L.subTree = F, S(
          de,
          F,
          // parent may have changed if it's in a teleport
          g(de.el),
          // anchor may have changed if it's in a fragment
          He(de),
          L,
          fe,
          me
        ), Ie.el = F.el, ye === null && dd(L, F.el), K && St(K, fe), (W = Ie.props && Ie.props.onVnodeUpdated) && St(
          () => rs(W, Me, Ie, we),
          fe
        );
      } else {
        let Ie;
        const { el: te, props: K } = V, { bm: Me, m: we, parent: ye, root: W, type: F } = L, de = mo(V);
        js(L, !1), Me && vn(Me), !de && (Ie = K && K.onVnodeBeforeMount) && rs(Ie, ye, V), js(L, !0);
        {
          W.ce && // @ts-expect-error _def is private
          W.ce._def.shadowRoot !== !1 && W.ce._injectChildStyle(F);
          const Fe = L.subTree = _l(L);
          S(
            null,
            Fe,
            ne,
            le,
            L,
            fe,
            me
          ), V.el = Fe.el;
        }
        if (we && St(we, fe), !de && (Ie = K && K.onVnodeMounted)) {
          const Fe = V;
          St(
            () => rs(Ie, ye, Fe),
            fe
          );
        }
        (V.shapeFlag & 256 || ye && mo(ye.vnode) && ye.vnode.shapeFlag & 256) && L.a && St(L.a, fe), L.isMounted = !0, V = ne = le = null;
      }
    };
    L.scope.on();
    const ae = L.effect = new ii(xe);
    L.scope.off();
    const ue = L.update = ae.run.bind(ae), Le = L.job = ae.runIfDirty.bind(ae);
    Le.i = L, Le.id = L.uid, ae.scheduler = () => Wa(Le), js(L, !0), ue();
  }, N = (L, V, ne) => {
    V.component = L;
    const le = L.vnode.props;
    L.vnode = V, L.next = null, fd(L, V.props, le, ne), gd(L, V.children, ne), Cs(), cl(L), xs();
  }, D = (L, V, ne, le, fe, me, Ce, xe, ae = !1) => {
    const ue = L && L.children, Le = L ? L.shapeFlag : 0, Ie = V.children, { patchFlag: te, shapeFlag: K } = V;
    if (te > 0) {
      if (te & 128) {
        X(
          ue,
          Ie,
          ne,
          le,
          fe,
          me,
          Ce,
          xe,
          ae
        );
        return;
      } else if (te & 256) {
        Z(
          ue,
          Ie,
          ne,
          le,
          fe,
          me,
          Ce,
          xe,
          ae
        );
        return;
      }
    }
    K & 8 ? (Le & 16 && Te(ue, fe, me), Ie !== ue && v(ne, Ie)) : Le & 16 ? K & 16 ? X(
      ue,
      Ie,
      ne,
      le,
      fe,
      me,
      Ce,
      xe,
      ae
    ) : Te(ue, fe, me, !0) : (Le & 8 && v(ne, ""), K & 16 && I(
      Ie,
      ne,
      le,
      fe,
      me,
      Ce,
      xe,
      ae
    ));
  }, Z = (L, V, ne, le, fe, me, Ce, xe, ae) => {
    L = L || co, V = V || co;
    const ue = L.length, Le = V.length, Ie = Math.min(ue, Le);
    let te;
    for (te = 0; te < Ie; te++) {
      const K = V[te] = ae ? Os(V[te]) : ms(V[te]);
      S(
        L[te],
        K,
        ne,
        null,
        fe,
        me,
        Ce,
        xe,
        ae
      );
    }
    ue > Le ? Te(
      L,
      fe,
      me,
      !0,
      !1,
      Ie
    ) : I(
      V,
      ne,
      le,
      fe,
      me,
      Ce,
      xe,
      ae,
      Ie
    );
  }, X = (L, V, ne, le, fe, me, Ce, xe, ae) => {
    let ue = 0;
    const Le = V.length;
    let Ie = L.length - 1, te = Le - 1;
    for (; ue <= Ie && ue <= te; ) {
      const K = L[ue], Me = V[ue] = ae ? Os(V[ue]) : ms(V[ue]);
      if (Ys(K, Me))
        S(
          K,
          Me,
          ne,
          null,
          fe,
          me,
          Ce,
          xe,
          ae
        );
      else
        break;
      ue++;
    }
    for (; ue <= Ie && ue <= te; ) {
      const K = L[Ie], Me = V[te] = ae ? Os(V[te]) : ms(V[te]);
      if (Ys(K, Me))
        S(
          K,
          Me,
          ne,
          null,
          fe,
          me,
          Ce,
          xe,
          ae
        );
      else
        break;
      Ie--, te--;
    }
    if (ue > Ie) {
      if (ue <= te) {
        const K = te + 1, Me = K < Le ? V[K].el : le;
        for (; ue <= te; )
          S(
            null,
            V[ue] = ae ? Os(V[ue]) : ms(V[ue]),
            ne,
            Me,
            fe,
            me,
            Ce,
            xe,
            ae
          ), ue++;
      }
    } else if (ue > te)
      for (; ue <= Ie; )
        Se(L[ue], fe, me, !0), ue++;
    else {
      const K = ue, Me = ue, we = /* @__PURE__ */ new Map();
      for (ue = Me; ue <= te; ue++) {
        const lt = V[ue] = ae ? Os(V[ue]) : ms(V[ue]);
        lt.key != null && we.set(lt.key, ue);
      }
      let ye, W = 0;
      const F = te - Me + 1;
      let de = !1, Fe = 0;
      const Qe = new Array(F);
      for (ue = 0; ue < F; ue++) Qe[ue] = 0;
      for (ue = K; ue <= Ie; ue++) {
        const lt = L[ue];
        if (W >= F) {
          Se(lt, fe, me, !0);
          continue;
        }
        let ut;
        if (lt.key != null)
          ut = we.get(lt.key);
        else
          for (ye = Me; ye <= te; ye++)
            if (Qe[ye - Me] === 0 && Ys(lt, V[ye])) {
              ut = ye;
              break;
            }
        ut === void 0 ? Se(lt, fe, me, !0) : (Qe[ut - Me] = ue + 1, ut >= Fe ? Fe = ut : de = !0, S(
          lt,
          V[ut],
          ne,
          null,
          fe,
          me,
          Ce,
          xe,
          ae
        ), W++);
      }
      const vt = de ? _d(Qe) : co;
      for (ye = vt.length - 1, ue = F - 1; ue >= 0; ue--) {
        const lt = Me + ue, ut = V[lt], Rt = V[lt + 1], Ut = lt + 1 < Le ? (
          // #13559, fallback to el placeholder for unresolved async component
          Rt.el || Rt.placeholder
        ) : le;
        Qe[ue] === 0 ? S(
          null,
          ut,
          ne,
          Ut,
          fe,
          me,
          Ce,
          xe,
          ae
        ) : de && (ye < 0 || ue !== vt[ye] ? he(ut, ne, Ut, 2) : ye--);
      }
    }
  }, he = (L, V, ne, le, fe = null) => {
    const { el: me, type: Ce, transition: xe, children: ae, shapeFlag: ue } = L;
    if (ue & 6) {
      he(L.component.subTree, V, ne, le);
      return;
    }
    if (ue & 128) {
      L.suspense.move(V, ne, le);
      return;
    }
    if (ue & 64) {
      Ce.move(L, V, ne, Ge);
      return;
    }
    if (Ce === G) {
      n(me, V, ne);
      for (let Ie = 0; Ie < ae.length; Ie++)
        he(ae[Ie], V, ne, le);
      n(L.anchor, V, ne);
      return;
    }
    if (Ce === sa) {
      E(L, V, ne);
      return;
    }
    if (le !== 2 && ue & 1 && xe)
      if (le === 0)
        xe.beforeEnter(me), n(me, V, ne), St(() => xe.enter(me), fe);
      else {
        const { leave: Ie, delayLeave: te, afterLeave: K } = xe, Me = () => {
          L.ctx.isUnmounted ? l(me) : n(me, V, ne);
        }, we = () => {
          me._isLeaving && me[_s](
            !0
            /* cancelled */
          ), Ie(me, () => {
            Me(), K && K();
          });
        };
        te ? te(me, Me, we) : we();
      }
    else
      n(me, V, ne);
  }, Se = (L, V, ne, le = !1, fe = !1) => {
    const {
      type: me,
      props: Ce,
      ref: xe,
      children: ae,
      dynamicChildren: ue,
      shapeFlag: Le,
      patchFlag: Ie,
      dirs: te,
      cacheIndex: K
    } = L;
    if (Ie === -2 && (fe = !1), xe != null && (Cs(), Uo(xe, null, ne, L, !0), xs()), K != null && (V.renderCache[K] = void 0), Le & 256) {
      V.ctx.deactivate(L);
      return;
    }
    const Me = Le & 1 && te, we = !mo(L);
    let ye;
    if (we && (ye = Ce && Ce.onVnodeBeforeUnmount) && rs(ye, V, L), Le & 6)
      be(L.component, ne, le);
    else {
      if (Le & 128) {
        L.suspense.unmount(ne, le);
        return;
      }
      Me && Gs(L, null, V, "beforeUnmount"), Le & 64 ? L.type.remove(
        L,
        V,
        ne,
        Ge,
        le
      ) : ue && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ue.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (me !== G || Ie > 0 && Ie & 64) ? Te(
        ue,
        V,
        ne,
        !1,
        !0
      ) : (me === G && Ie & 384 || !fe && Le & 16) && Te(ae, V, ne), le && ze(L);
    }
    (we && (ye = Ce && Ce.onVnodeUnmounted) || Me) && St(() => {
      ye && rs(ye, V, L), Me && Gs(L, null, V, "unmounted");
    }, ne);
  }, ze = (L) => {
    const { type: V, el: ne, anchor: le, transition: fe } = L;
    if (V === G) {
      Ve(ne, le);
      return;
    }
    if (V === sa) {
      x(L);
      return;
    }
    const me = () => {
      l(ne), fe && !fe.persisted && fe.afterLeave && fe.afterLeave();
    };
    if (L.shapeFlag & 1 && fe && !fe.persisted) {
      const { leave: Ce, delayLeave: xe } = fe, ae = () => Ce(ne, me);
      xe ? xe(L.el, me, ae) : ae();
    } else
      me();
  }, Ve = (L, V) => {
    let ne;
    for (; L !== V; )
      ne = w(L), l(L), L = ne;
    l(V);
  }, be = (L, V, ne) => {
    const { bum: le, scope: fe, job: me, subTree: Ce, um: xe, m: ae, a: ue } = L;
    $l(ae), $l(ue), le && vn(le), fe.stop(), me && (me.flags |= 8, Se(Ce, L, V, ne)), xe && St(xe, V), St(() => {
      L.isUnmounted = !0;
    }, V);
  }, Te = (L, V, ne, le = !1, fe = !1, me = 0) => {
    for (let Ce = me; Ce < L.length; Ce++)
      Se(L[Ce], V, ne, le, fe);
  }, He = (L) => {
    if (L.shapeFlag & 6)
      return He(L.component.subTree);
    if (L.shapeFlag & 128)
      return L.suspense.next();
    const V = w(L.anchor || L.el), ne = V && V[Ii];
    return ne ? w(ne) : V;
  };
  let ke = !1;
  const ie = (L, V, ne) => {
    L == null ? V._vnode && Se(V._vnode, null, null, !0) : S(
      V._vnode || null,
      L,
      V,
      null,
      null,
      null,
      ne
    ), V._vnode = L, ke || (ke = !0, cl(), Ci(), ke = !1);
  }, Ge = {
    p: S,
    um: Se,
    m: he,
    r: ze,
    mt: se,
    mc: I,
    pc: D,
    pbc: O,
    n: He,
    o: e
  };
  return {
    render: ie,
    hydrate: void 0,
    createApp: Zc(ie)
  };
}
function ta({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function js({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function wd(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function qa(e, s, o = !1) {
  const n = e.children, l = s.children;
  if (Ue(n) && Ue(l))
    for (let i = 0; i < n.length; i++) {
      const c = n[i];
      let d = l[i];
      d.shapeFlag & 1 && !d.dynamicChildren && ((d.patchFlag <= 0 || d.patchFlag === 32) && (d = l[i] = Os(l[i]), d.el = c.el), !o && d.patchFlag !== -2 && qa(c, d)), d.type === Wn && // avoid cached text nodes retaining detached dom nodes
      d.patchFlag !== -1 && (d.el = c.el), d.type === bt && !d.el && (d.el = c.el);
    }
}
function _d(e) {
  const s = e.slice(), o = [0];
  let n, l, i, c, d;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const m = e[n];
    if (m !== 0) {
      if (l = o[o.length - 1], e[l] < m) {
        s[n] = l, o.push(n);
        continue;
      }
      for (i = 0, c = o.length - 1; i < c; )
        d = i + c >> 1, e[o[d]] < m ? i = d + 1 : c = d;
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
function bd(e, s) {
  s && s.pendingBranch ? Ue(e) ? s.effects.push(...e) : s.effects.push(e) : Rc(e);
}
const G = Symbol.for("v-fgt"), Wn = Symbol.for("v-txt"), bt = Symbol.for("v-cmt"), sa = Symbol.for("v-stc"), Fo = [];
let At = null;
function a(e = !1) {
  Fo.push(At = e ? null : []);
}
function kd() {
  Fo.pop(), At = Fo[Fo.length - 1] || null;
}
let qo = 1;
function In(e, s = !1) {
  qo += e, e < 0 && At && s && (At.hasOnce = !0);
}
function nr(e) {
  return e.dynamicChildren = qo > 0 ? At || co : null, kd(), qo > 0 && At && At.push(e), e;
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
}) => (typeof e == "number" && (e = "" + e), e != null ? dt(e) || $t(e) || We(e) ? { i: yt, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, n = 0, l = null, i = e === G ? 0 : 1, c = !1, d = !1) {
  const u = {
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
  return d ? (Ya(u, o), i & 128 && e.normalize(u)) : o && (u.shapeFlag |= dt(o) ? 8 : 16), qo > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  At && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && At.push(u), u;
}
const C = $d;
function $d(e, s = null, o = null, n = 0, l = null, i = !1) {
  if ((!e || e === Fi) && (e = bt), Yo(e)) {
    const d = Ns(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && Ya(d, o), qo > 0 && !i && At && (d.shapeFlag & 6 ? At[At.indexOf(e)] = d : At.push(d)), d.patchFlag = -2, d;
  }
  if (Ld(e) && (e = e.__vccOpts), s) {
    s = Cd(s);
    let { class: d, style: u } = s;
    d && !dt(d) && (s.class = Ee(d)), tt(u) && (Va(u) && !Ue(u) && (u = gt({}, u)), s.style = jt(u));
  }
  const c = dt(e) ? 1 : or(e) ? 128 : Ei(e) ? 64 : tt(e) ? 4 : We(e) ? 2 : 0;
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
function Cd(e) {
  return e ? Va(e) || Ji(e) ? gt({}, e) : e : null;
}
function Ns(e, s, o = !1, n = !1) {
  const { props: l, ref: i, patchFlag: c, children: d, transition: u } = e, m = s ? xd(l || {}, s) : l, v = {
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
    children: d,
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
    transition: u,
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
  return u && n && Zs(
    v,
    u.clone(v)
  ), v;
}
function b(e = " ", s = 0) {
  return C(Wn, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (a(), R(bt, null, e)) : C(bt, null, e);
}
function ms(e) {
  return e == null || typeof e == "boolean" ? C(bt) : Ue(e) ? C(
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
  else if (Ue(s))
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
  else We(s) ? (s = { default: s, _ctx: yt }, o = 32) : (s = String(s), n & 64 ? (o = 16, s = [b(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function xd(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        s.class !== n.class && (s.class = Ee([s.class, n.class]));
      else if (l === "style")
        s.style = jt([s.style, n.style]);
      else if (Dn(l)) {
        const i = s[l], c = n[l];
        c && i !== c && !(Ue(i) && i.includes(c)) && (s[l] = i ? [].concat(i, c) : c);
      } else l !== "" && (s[l] = n[l]);
  }
  return s;
}
function rs(e, s, o, n = null) {
  ss(e, s, 7, [
    o,
    n
  ]);
}
const Sd = Gi();
let Id = 0;
function Ed(e, s, o) {
  const n = e.type, l = (s ? s.appContext : e.appContext) || Sd, i = {
    uid: Id++,
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
  return i.ctx = { _: i }, i.root = s ? s.root : i, i.emit = ad.bind(null, i), e.ce && e.ce(i), i;
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
function Td(e, s = !1, o = !1) {
  s && $a(s);
  const { props: n, children: l } = e.vnode, i = lr(e);
  ud(e, n, i, s), pd(e, l, o || s);
  const c = i ? Pd(e, s) : void 0;
  return s && $a(!1), c;
}
function Pd(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Hc);
  const { setup: n } = o;
  if (n) {
    Cs();
    const l = e.setupContext = n.length > 1 ? Md(e) : null, i = tn(e), c = Zo(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), d = ei(c);
    if (xs(), i(), (d || e.sp) && !mo(e) && Ai(e), d) {
      if (c.then(Cl, Cl), s)
        return c.then((u) => {
          xl(e, u);
        }).catch((u) => {
          zn(u, e, 0);
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
const Rd = {
  get(e, s) {
    return _t(e, "get", ""), e[s];
  }
};
function Md(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Rd),
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
function Dd(e, s = !0) {
  return We(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function Ld(e) {
  return We(e) && "__vccOpts" in e;
}
const z = (e, s) => Sc(e, s, Jo);
function sn(e, s, o) {
  try {
    In(-1);
    const n = arguments.length;
    return n === 2 ? tt(s) && !Ue(s) ? Yo(s) ? C(e, null, [s]) : C(e, s) : C(e, null, s) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && Yo(o) && (o = [o]), C(e, s, o));
  } finally {
    In(1);
  }
}
const Od = "3.5.25";
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
const rr = Ca ? (e) => Ca.createHTML(e) : (e) => e, Ad = "http://www.w3.org/2000/svg", Nd = "http://www.w3.org/1998/Math/MathML", ws = typeof document < "u" ? document : null, Il = ws && /* @__PURE__ */ ws.createElement("template"), Ud = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, n) => {
    const l = s === "svg" ? ws.createElementNS(Ad, e) : s === "mathml" ? ws.createElementNS(Nd, e) : o ? ws.createElement(e, { is: o }) : ws.createElement(e);
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
      const d = Il.content;
      if (n === "svg" || n === "mathml") {
        const u = d.firstChild;
        for (; u.firstChild; )
          d.appendChild(u.firstChild);
        d.removeChild(u);
      }
      s.insertBefore(d, o);
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
}, dr = /* @__PURE__ */ gt(
  {},
  Mi,
  cr
), zd = (e) => (e.displayName = "Transition", e.props = dr, e), Fd = /* @__PURE__ */ zd(
  (e, { slots: s }) => sn(Lc, ur(e), s)
), Hs = (e, s = []) => {
  Ue(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, El = (e) => e ? Ue(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function ur(e) {
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
    enterToClass: d = `${o}-enter-to`,
    appearFromClass: u = i,
    appearActiveClass: m = c,
    appearToClass: v = d,
    leaveFromClass: g = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: p = `${o}-leave-to`
  } = e, _ = Bd(l), S = _ && _[0], $ = _ && _[1], {
    onBeforeEnter: P,
    onEnter: M,
    onEnterCancelled: E,
    onLeave: x,
    onLeaveCancelled: q,
    onBeforeAppear: B = P,
    onAppear: A = M,
    onAppearCancelled: I = E
  } = s, T = (Y, j, se, ee) => {
    Y._enterCancelled = ee, Ms(Y, j ? v : d), Ms(Y, j ? m : c), se && se();
  }, O = (Y, j) => {
    Y._isLeaving = !1, Ms(Y, g), Ms(Y, p), Ms(Y, w), j && j();
  }, ce = (Y) => (j, se) => {
    const ee = Y ? A : M, U = () => T(j, Y, se);
    Hs(ee, [j, U]), Tl(() => {
      Ms(j, Y ? u : i), ds(j, Y ? v : d), El(ee) || Pl(j, n, S, U);
    });
  };
  return gt(s, {
    onBeforeEnter(Y) {
      Hs(P, [Y]), ds(Y, i), ds(Y, c);
    },
    onBeforeAppear(Y) {
      Hs(B, [Y]), ds(Y, u), ds(Y, m);
    },
    onEnter: ce(!1),
    onAppear: ce(!0),
    onLeave(Y, j) {
      Y._isLeaving = !0;
      const se = () => O(Y, j);
      ds(Y, g), Y._enterCancelled ? (ds(Y, w), xa(Y)) : (xa(Y), ds(Y, w)), Tl(() => {
        Y._isLeaving && (Ms(Y, g), ds(Y, p), El(x) || Pl(Y, n, $, se));
      }), Hs(x, [Y, se]);
    },
    onEnterCancelled(Y) {
      T(Y, !1, void 0, !0), Hs(E, [Y]);
    },
    onAppearCancelled(Y) {
      T(Y, !0, void 0, !0), Hs(I, [Y]);
    },
    onLeaveCancelled(Y) {
      O(Y), Hs(q, [Y]);
    }
  });
}
function Bd(e) {
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
function ds(e, s) {
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
let Vd = 0;
function Pl(e, s, o, n) {
  const l = e._endId = ++Vd, i = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(i, o);
  const { type: c, timeout: d, propCount: u } = fr(e, s);
  if (!c)
    return n();
  const m = c + "end";
  let v = 0;
  const g = () => {
    e.removeEventListener(m, w), i();
  }, w = (p) => {
    p.target === e && ++v >= u && g();
  };
  setTimeout(() => {
    v < u && g();
  }, d + 1), e.addEventListener(m, w);
}
function fr(e, s) {
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${Rs}Delay`), i = n(`${Rs}Duration`), c = Rl(l, i), d = n(`${Io}Delay`), u = n(`${Io}Duration`), m = Rl(d, u);
  let v = null, g = 0, w = 0;
  s === Rs ? c > 0 && (v = Rs, g = c, w = i.length) : s === Io ? m > 0 && (v = Io, g = m, w = u.length) : (g = Math.max(c, m), v = g > 0 ? c > m ? Rs : Io : null, w = v ? v === Rs ? i.length : u.length : 0);
  const p = v === Rs && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Rs}Property`).toString()
  );
  return {
    type: v,
    timeout: g,
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
function Wd(e, s, o) {
  const n = e[ho];
  n && (s = (s ? [s, ...n] : [...n]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const Dl = Symbol("_vod"), Gd = Symbol("_vsh"), jd = Symbol(""), Hd = /(?:^|;)\s*display\s*:/;
function Kd(e, s, o) {
  const n = e.style, l = dt(o);
  let i = !1;
  if (o && !l) {
    if (s)
      if (dt(s))
        for (const c of s.split(";")) {
          const d = c.slice(0, c.indexOf(":")).trim();
          o[d] == null && yn(n, d, "");
        }
      else
        for (const c in s)
          o[c] == null && yn(n, c, "");
    for (const c in o)
      c === "display" && (i = !0), yn(n, c, o[c]);
  } else if (l) {
    if (s !== o) {
      const c = n[jd];
      c && (o += ";" + c), n.cssText = o, i = Hd.test(o);
    }
  } else s && e.removeAttribute("style");
  Dl in e && (e[Dl] = i ? n.display : "", e[Gd] && (n.display = "none"));
}
const Ll = /\s*!important$/;
function yn(e, s, o) {
  if (Ue(o))
    o.forEach((n) => yn(e, s, n));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const n = qd(e, s);
    Ll.test(o) ? e.setProperty(
      zs(n),
      o.replace(Ll, ""),
      "important"
    ) : e[n] = o;
  }
}
const Ol = ["Webkit", "Moz", "ms"], na = {};
function qd(e, s) {
  const o = na[s];
  if (o)
    return o;
  let n = Gt(s);
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
    i ? "" : es(o) ? String(o) : o
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
    const d = i === "OPTION" ? e.getAttribute("value") || "" : e.value, u = o == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(o);
    (d !== u || !("_value" in e)) && (e.value = u), o == null && e.removeAttribute(s), e._value = o;
    return;
  }
  let c = !1;
  if (o === "" || o == null) {
    const d = typeof e[s];
    d === "boolean" ? o = ni(o) : o == null && d === "string" ? (o = "", c = !0) : d === "number" && (o = 0, c = !0);
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
function Yd(e, s, o, n) {
  e.removeEventListener(s, o, n);
}
const zl = Symbol("_vei");
function Jd(e, s, o, n, l = null) {
  const i = e[zl] || (e[zl] = {}), c = i[s];
  if (n && c)
    c.value = n;
  else {
    const [d, u] = Xd(s);
    if (n) {
      const m = i[s] = eu(
        n,
        l
      );
      $s(e, d, m, u);
    } else c && (Yd(e, d, c, u), i[s] = void 0);
  }
}
const Fl = /(?:Once|Passive|Capture)$/;
function Xd(e) {
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
const Qd = /* @__PURE__ */ Promise.resolve(), Zd = () => aa || (Qd.then(() => aa = 0), aa = Date.now());
function eu(e, s) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    ss(
      tu(n, o.value),
      s,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = Zd(), o;
}
function tu(e, s) {
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
const Bl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, su = (e, s, o, n, l, i) => {
  const c = l === "svg";
  s === "class" ? Wd(e, n, c) : s === "style" ? Kd(e, o, n) : Dn(s) ? Ma(s) || Jd(e, s, o, n, i) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : ou(e, s, n, c)) ? (Ul(e, s, n), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Nl(e, s, n, c, i, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !dt(n)) ? Ul(e, Gt(s), n, i, s) : (s === "true-value" ? e._trueValue = n : s === "false-value" && (e._falseValue = n), Nl(e, s, n, c));
};
function ou(e, s, o, n) {
  if (n)
    return !!(s === "innerHTML" || s === "textContent" || s in e && Bl(s) && We(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return Bl(s) && dt(o) ? !1 : s in e;
}
const mr = /* @__PURE__ */ new WeakMap(), vr = /* @__PURE__ */ new WeakMap(), Tn = Symbol("_moveCb"), Vl = Symbol("_enterCb"), nu = (e) => (delete e.props.mode, e), au = /* @__PURE__ */ nu({
  name: "TransitionGroup",
  props: /* @__PURE__ */ gt({}, dr, {
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
      if (!du(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(iu), l.forEach(ru);
      const d = l.filter(cu);
      xa(o.vnode.el), d.forEach((u) => {
        const m = u.el, v = m.style;
        ds(m, c), v.transform = v.webkitTransform = v.transitionDuration = "";
        const g = m[Tn] = (w) => {
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", g), m[Tn] = null, Ms(m, c));
        };
        m.addEventListener("transitionend", g);
      }), l = [];
    }), () => {
      const c = Xe(e), d = ur(c);
      let u = c.tag || G;
      if (l = [], i)
        for (let m = 0; m < i.length; m++) {
          const v = i[m];
          v.el && v.el instanceof Element && (l.push(v), Zs(
            v,
            Ko(
              v,
              d,
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
          Ko(v, d, n, o)
        );
      }
      return C(u, null, i);
    };
  }
}), lu = au;
function iu(e) {
  const s = e.el;
  s[Tn] && s[Tn](), s[Vl] && s[Vl]();
}
function ru(e) {
  vr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function cu(e) {
  const s = mr.get(e), o = vr.get(e), n = s.left - o.left, l = s.top - o.top;
  if (n || l) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${n}px,${l}px)`, i.transitionDuration = "0s", e;
  }
}
function du(e, s, o) {
  const n = e.cloneNode(), l = e[ho];
  l && l.forEach((d) => {
    d.split(/\s+/).forEach((u) => u && n.classList.remove(u));
  }), o.split(/\s+/).forEach((d) => d && n.classList.add(d)), n.style.display = "none";
  const i = s.nodeType === 1 ? s : s.parentNode;
  i.appendChild(n);
  const { hasTransform: c } = fr(n);
  return i.removeChild(n), c;
}
const Us = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Ue(s) ? (o) => vn(s, o) : s;
};
function uu(e) {
  e.target.composing = !0;
}
function Wl(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const Wt = Symbol("_assign");
function Gl(e, s, o) {
  return s && (e = e.trim()), o && (e = An(e)), e;
}
const Nt = {
  created(e, { modifiers: { lazy: s, trim: o, number: n } }, l) {
    e[Wt] = Us(l);
    const i = n || l.props && l.props.type === "number";
    $s(e, s ? "change" : "input", (c) => {
      c.target.composing || e[Wt](Gl(e.value, o, i));
    }), (o || i) && $s(e, "change", () => {
      e.value = Gl(e.value, o, i);
    }), s || ($s(e, "compositionstart", uu), $s(e, "compositionend", Wl), $s(e, "change", Wl));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: n, trim: l, number: i } }, c) {
    if (e[Wt] = Us(c), e.composing) return;
    const d = (i || e.type === "number") && !/^0\d/.test(e.value) ? An(e.value) : e.value, u = s ?? "";
    d !== u && (document.activeElement === e && e.type !== "range" && (n && s === o || l && e.value.trim() === u) || (e.value = u));
  }
}, Xo = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[Wt] = Us(o), $s(e, "change", () => {
      const n = e._modelValue, l = yo(e), i = e.checked, c = e[Wt];
      if (Ue(n)) {
        const d = Oa(n, l), u = d !== -1;
        if (i && !u)
          c(n.concat(l));
        else if (!i && u) {
          const m = [...n];
          m.splice(d, 1), c(m);
        }
      } else if (wo(n)) {
        const d = new Set(n);
        i ? d.add(l) : d.delete(l), c(d);
      } else
        c(pr(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: jl,
  beforeUpdate(e, s, o) {
    e[Wt] = Us(o), jl(e, s, o);
  }
};
function jl(e, { value: s, oldValue: o }, n) {
  e._modelValue = s;
  let l;
  if (Ue(s))
    l = Oa(s, n.props.value) > -1;
  else if (wo(s))
    l = s.has(n.props.value);
  else {
    if (s === o) return;
    l = Qs(s, pr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Jt = {
  created(e, { value: s }, o) {
    e.checked = Qs(s, o.props.value), e[Wt] = Us(o), $s(e, "change", () => {
      e[Wt](yo(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, n) {
    e[Wt] = Us(n), s !== o && (e.checked = Qs(s, n.props.value));
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
      e[Wt](
        e.multiple ? l ? new Set(i) : i : i[0]
      ), e._assigning = !0, en(() => {
        e._assigning = !1;
      });
    }), e[Wt] = Us(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    Hl(e, s);
  },
  beforeUpdate(e, s, o) {
    e[Wt] = Us(o);
  },
  updated(e, { value: s }) {
    e._assigning || Hl(e, s);
  }
};
function Hl(e, s) {
  const o = e.multiple, n = Ue(s);
  if (!(o && !n && !wo(s))) {
    for (let l = 0, i = e.options.length; l < i; l++) {
      const c = e.options[l], d = yo(c);
      if (o)
        if (n) {
          const u = typeof d;
          u === "string" || u === "number" ? c.selected = s.some((m) => String(m) === String(d)) : c.selected = Oa(s, d) > -1;
        } else
          c.selected = s.has(d);
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
    dn(e, s, o, null, "created");
  },
  mounted(e, s, o) {
    dn(e, s, o, null, "mounted");
  },
  beforeUpdate(e, s, o, n) {
    dn(e, s, o, n, "beforeUpdate");
  },
  updated(e, s, o, n) {
    dn(e, s, o, n, "updated");
  }
};
function fu(e, s) {
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
          return Jt;
        default:
          return Nt;
      }
  }
}
function dn(e, s, o, n, l) {
  const c = fu(
    e.tagName,
    o.props && o.props.type
  )[l];
  c && c(e, s, o, n);
}
const mu = ["ctrl", "shift", "alt", "meta"], vu = {
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
  exact: (e, s) => mu.some((o) => e[`${o}Key`] && !s.includes(o))
}, rt = (e, s) => {
  const o = e._withMods || (e._withMods = {}), n = s.join(".");
  return o[n] || (o[n] = ((l, ...i) => {
    for (let c = 0; c < s.length; c++) {
      const d = vu[s[c]];
      if (d && d(l, s)) return;
    }
    return e(l, ...i);
  }));
}, pu = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Qt = (e, s) => {
  const o = e._withKeys || (e._withKeys = {}), n = s.join(".");
  return o[n] || (o[n] = ((l) => {
    if (!("key" in l))
      return;
    const i = zs(l.key);
    if (s.some(
      (c) => c === i || pu[c] === i
    ))
      return e(l);
  }));
}, gu = /* @__PURE__ */ gt({ patchProp: su }, Ud);
let Kl;
function hu() {
  return Kl || (Kl = hd(gu));
}
const Hn = ((...e) => {
  const s = hu().createApp(...e), { mount: o } = s;
  return s.mount = (n) => {
    const l = wu(n);
    if (!l) return;
    const i = s._component;
    !We(i) && !i.render && !i.template && (i.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, yu(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, s;
});
function yu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function wu(e) {
  return dt(e) ? document.querySelector(e) : e;
}
const _u = { class: "panel-layout" }, bu = {
  key: 0,
  class: "panel-layout-header"
}, ku = {
  key: 1,
  class: "panel-layout-search"
}, $u = { class: "panel-layout-content" }, Cu = {
  key: 2,
  class: "panel-layout-footer"
}, xu = /* @__PURE__ */ ve({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (a(), r("div", _u, [
      s.$slots.header ? (a(), r("div", bu, [
        qe(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (a(), r("div", ku, [
        qe(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", $u, [
        qe(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (a(), r("div", Cu, [
        qe(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), pe = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of s)
    o[n] = l;
  return o;
}, Tt = /* @__PURE__ */ pe(xu, [["__scopeId", "data-v-21565df9"]]), Su = {
  key: 0,
  class: "panel-title-prefix"
}, Iu = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Eu = /* @__PURE__ */ ve({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (a(), R(ja(`h${e.level}`), {
      class: Ee(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (a(), r("span", Su, f(e.prefix), 1)) : (a(), r("span", Iu)),
        qe(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Tu = /* @__PURE__ */ pe(Eu, [["__scopeId", "data-v-c3875efc"]]), Pu = ["title"], Ru = ["width", "height"], Mu = /* @__PURE__ */ ve({
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
      ])], 8, Ru))
    ], 8, Pu));
  }
}), gr = /* @__PURE__ */ pe(Mu, [["__scopeId", "data-v-6fc7f16d"]]), Du = { class: "header-left" }, Lu = {
  key: 0,
  class: "header-actions"
}, Ou = /* @__PURE__ */ ve({
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
      class: Ee(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", Du, [
        C(Tu, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            b(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), R(gr, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (a(), r("div", Lu, [
        qe(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Pt = /* @__PURE__ */ pe(Ou, [["__scopeId", "data-v-55a62cd6"]]), Au = {
  key: 0,
  class: "section-title-count"
}, Nu = {
  key: 1,
  class: "section-title-icon"
}, Uu = /* @__PURE__ */ ve({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), R(ja(`h${e.level}`), {
      class: Ee(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, {
      default: h(() => [
        qe(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), r("span", Au, "(" + f(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), r("span", Nu, f(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ot = /* @__PURE__ */ pe(Uu, [["__scopeId", "data-v-559361eb"]]), zu = { class: "status-grid" }, Fu = { class: "status-grid__columns" }, Bu = { class: "status-grid__column" }, Vu = { class: "status-grid__title" }, Wu = { class: "status-grid__column status-grid__column--right" }, Gu = { class: "status-grid__title" }, ju = {
  key: 0,
  class: "status-grid__footer"
}, Hu = /* @__PURE__ */ ve({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (a(), r("div", zu, [
      t("div", Fu, [
        t("div", Bu, [
          t("h4", Vu, f(e.leftTitle), 1),
          qe(s.$slots, "left", {}, void 0)
        ]),
        t("div", Wu, [
          t("h4", Gu, f(e.rightTitle), 1),
          qe(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (a(), r("div", ju, [
        qe(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Ku = /* @__PURE__ */ pe(Hu, [["__scopeId", "data-v-73b7ba3f"]]), qu = {
  key: 0,
  class: "status-item__icon"
}, Yu = {
  key: 1,
  class: "status-item__count"
}, Ju = { class: "status-item__label" }, Xu = /* @__PURE__ */ ve({
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
      class: Ee(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), r("span", qu, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), r("span", Yu, f(e.count), 1)) : y("", !0),
      t("span", Ju, f(e.label), 1)
    ], 2));
  }
}), cs = /* @__PURE__ */ pe(Xu, [["__scopeId", "data-v-6f929183"]]), Qu = { class: "issue-card__header" }, Zu = { class: "issue-card__icon" }, ef = { class: "issue-card__title" }, tf = {
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
      class: Ee(["issue-card", o.value])
    }, [
      t("div", Qu, [
        t("span", Zu, f(e.icon), 1),
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
}), qt = /* @__PURE__ */ pe(af, [["__scopeId", "data-v-df6aa348"]]), lf = ["type", "disabled"], rf = {
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
      class: Ee(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), r("span", rf)) : y("", !0),
      e.loading ? y("", !0) : qe(s.$slots, "default", { key: 1 }, void 0)
    ], 10, lf));
  }
}), re = /* @__PURE__ */ pe(cf, [["__scopeId", "data-v-772abe47"]]), df = { class: "empty-state" }, uf = {
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
    return (s, o) => (a(), r("div", df, [
      e.icon ? (a(), r("div", uf, f(e.icon), 1)) : y("", !0),
      t("p", ff, f(e.message), 1),
      e.actionLabel ? (a(), R(re, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => s.$emit("action"))
      }, {
        default: h(() => [
          b(f(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), os = /* @__PURE__ */ pe(mf, [["__scopeId", "data-v-4466284f"]]), vf = /* @__PURE__ */ ve({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (a(), r("span", {
      class: Ee(["detail-label"]),
      style: jt({ minWidth: e.minWidth })
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
      class: Ee(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
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
        default: h(() => [
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
        default: h(() => [
          b(f(e.value), 1)
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
}, cm = { class: "change-group-header" }, dm = { class: "change-group-title" }, um = { class: "change-list" }, fm = { class: "node-name" }, mm = {
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
    const s = e, o = k(!1);
    et(() => {
      console.log("StatusDetailModal mounted, initial show value:", s.show);
    }), Ct(() => s.show, (w, p) => {
      console.log("StatusDetailModal show prop changed from", p, "to", w);
    }, { immediate: !0 });
    const n = z(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (S) => S.status === "broken" && S.sync_state === "synced"
      )) || [];
    }), l = z(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (S) => S.status === "broken" && S.sync_state !== "synced"
      )) || [];
    }), i = z(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.synced) == null ? void 0 : _.filter((S) => {
        var P, M, E;
        const $ = (E = (M = (P = s.status) == null ? void 0 : P.workflows) == null ? void 0 : M.analyzed) == null ? void 0 : E.find((x) => x.name === S);
        return !$ || $.status !== "broken";
      })) || [];
    }), c = z(() => {
      var w, p, _, S, $;
      return (w = s.status) != null && w.workflows ? (((p = s.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((_ = s.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((S = s.status.workflows.deleted) == null ? void 0 : S.length) ?? 0) > 0 || ((($ = s.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), d = z(() => {
      var p, _, S;
      const w = (p = s.status) == null ? void 0 : p.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((S = w.nodes_removed) == null ? void 0 : S.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), u = z(() => {
      var w, p, _, S, $, P;
      return !c.value && !d.value && ((p = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : p.is_synced) && (((_ = s.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((P = ($ = (S = s.status) == null ? void 0 : S.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : P.length) ?? 0) === 0;
    }), m = z(() => {
      var p, _;
      const w = (_ = (p = s.status) == null ? void 0 : p.git_changes) == null ? void 0 : _.workflow_changes;
      return w ? typeof w == "number" ? w : Object.keys(w).length : 0;
    });
    function v(w) {
      return typeof w == "string" ? w : w.name;
    }
    function g(w) {
      return typeof w == "object" && w.is_development === !0;
    }
    return (w, p) => {
      var _, S, $, P, M, E, x, q, B, A, I, T, O, ce, Y, j, se, ee, U, N, D, Z;
      return a(), R(wt, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = (X) => w.$emit("close"))
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
                onClick: p[0] || (p[0] = (X) => w.$emit("close"))
              }, "✕")
            ]),
            t("div", wf, [
              t("div", _f, [
                C(Ot, { level: "4" }, {
                  default: h(() => [...p[9] || (p[9] = [
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
              c.value ? (a(), r("div", bf, [
                t("div", kf, [
                  C(Ot, { level: "4" }, {
                    default: h(() => [...p[10] || (p[10] = [
                      b("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[1] || (p[1] = (X) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                n.value.length ? (a(), r("div", $f, [
                  t("div", Cf, [
                    p[11] || (p[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", xf, "BROKEN (COMMITTED) (" + f(n.value.length) + ")", 1)
                  ]),
                  t("div", Sf, [
                    (a(!0), r(G, null, ge(n.value, (X) => (a(), r("div", {
                      key: X.name,
                      class: "workflow-item"
                    }, [
                      t("span", If, f(X.name), 1),
                      t("span", Ef, f(X.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), r("div", Tf, [
                  t("div", Pf, [
                    p[12] || (p[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Rf, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  t("div", Mf, [
                    (a(!0), r(G, null, ge(l.value, (X) => (a(), r("div", {
                      key: X.name,
                      class: "workflow-item"
                    }, [
                      t("span", Df, f(X.name), 1),
                      t("span", Lf, f(X.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (S = (_ = e.status.workflows) == null ? void 0 : _.new) != null && S.length ? (a(), r("div", Of, [
                  t("div", Af, [
                    p[13] || (p[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", Nf, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", Uf, [
                    (a(!0), r(G, null, ge(e.status.workflows.new, (X) => (a(), r("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      t("span", zf, f(X), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (P = ($ = e.status.workflows) == null ? void 0 : $.modified) != null && P.length ? (a(), r("div", Ff, [
                  t("div", Bf, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", Vf, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", Wf, [
                    (a(!0), r(G, null, ge(e.status.workflows.modified, (X) => (a(), r("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      t("span", Gf, f(X), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (E = (M = e.status.workflows) == null ? void 0 : M.deleted) != null && E.length ? (a(), r("div", jf, [
                  t("div", Hf, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", Kf, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", qf, [
                    (a(!0), r(G, null, ge(e.status.workflows.deleted, (X) => (a(), r("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      t("span", Yf, f(X), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                i.value.length ? (a(), r("div", Jf, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = (X) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", Xf, "SYNCED (" + f(i.value.length) + ")", 1),
                    t("span", Qf, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), r("div", Zf, [
                    (a(!0), r(G, null, ge(i.value, (X) => (a(), r("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      t("span", em, f(X), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              d.value ? (a(), r("div", tm, [
                C(Ot, { level: "4" }, {
                  default: h(() => [...p[17] || (p[17] = [
                    b("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (q = (x = e.status.git_changes) == null ? void 0 : x.nodes_added) != null && q.length ? (a(), r("div", sm, [
                  t("div", om, [
                    p[18] || (p[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", nm, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", am, [
                    (a(!0), r(G, null, ge(e.status.git_changes.nodes_added, (X) => (a(), r("div", {
                      key: v(X),
                      class: "change-item"
                    }, [
                      t("span", lm, f(v(X)), 1),
                      g(X) ? (a(), r("span", im, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (A = (B = e.status.git_changes) == null ? void 0 : B.nodes_removed) != null && A.length ? (a(), r("div", rm, [
                  t("div", cm, [
                    p[19] || (p[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", dm, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", um, [
                    (a(!0), r(G, null, ge(e.status.git_changes.nodes_removed, (X) => (a(), r("div", {
                      key: v(X),
                      class: "change-item"
                    }, [
                      t("span", fm, f(v(X)), 1),
                      g(X) ? (a(), r("span", mm, "dev")) : y("", !0)
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
                    default: h(() => [...p[22] || (p[22] = [
                      b("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[3] || (p[3] = (X) => w.$emit("navigate-nodes"))
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
                    (a(!0), r(G, null, ge(e.status.comparison.missing_nodes.slice(0, 10), (X) => (a(), r("div", {
                      key: X,
                      class: "drift-list-item"
                    }, " - " + f(X), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), r("div", $m, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (se = (j = e.status.comparison) == null ? void 0 : j.extra_nodes) != null && se.length ? (a(), r("div", Cm, [
                  C(ft, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", xm, [
                    (a(!0), r(G, null, ge(e.status.comparison.extra_nodes.slice(0, 10), (X) => (a(), r("div", {
                      key: X,
                      class: "drift-list-item"
                    }, " - " + f(X), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), r("div", Sm, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (U = (ee = e.status.comparison) == null ? void 0 : ee.version_mismatches) != null && U.length ? (a(), r("div", Im, [
                  C(ft, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", Em, [
                    (a(!0), r(G, null, ge(e.status.comparison.version_mismatches.slice(0, 10), (X) => (a(), r("div", {
                      key: X.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      b(f(X.name) + ": ", 1),
                      t("span", Tm, f(X.actual), 1),
                      p[23] || (p[23] = b(" → ", -1)),
                      t("span", Pm, f(X.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), r("div", Rm, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((N = e.status.comparison) == null ? void 0 : N.packages_in_sync) === !1 ? (a(), r("div", Mm, [
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
                    onClick: p[4] || (p[4] = (X) => w.$emit("repair"))
                  }, {
                    default: h(() => [...p[24] || (p[24] = [
                      b(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  p[25] || (p[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (Z = (D = e.status.comparison) == null ? void 0 : D.disabled_nodes) != null && Z.length ? (a(), r("div", Lm, [
                C(Ot, { level: "4" }, {
                  default: h(() => [...p[27] || (p[27] = [
                    b("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", Om, [
                  p[28] || (p[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", Am, [
                  (a(!0), r(G, null, ge(e.status.comparison.disabled_nodes.slice(0, 10), (X) => (a(), r("div", {
                    key: X,
                    class: "drift-list-item"
                  }, " • " + f(X), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), r("div", Nm, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), r("div", Um, [
                C(Ot, { level: "4" }, {
                  default: h(() => [...p[29] || (p[29] = [
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
              u.value ? (a(), r("div", Fm, [...p[32] || (p[32] = [
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
                onClick: p[5] || (p[5] = (X) => w.$emit("close"))
              }, {
                default: h(() => [...p[33] || (p[33] = [
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
    const n = e, l = k(!1), i = k(!1);
    function c() {
      l.value = !0;
    }
    function d() {
      l.value = !1, m("view-workflows");
    }
    function u() {
      l.value = !1, m("view-nodes");
    }
    const m = o, v = k(!1), g = k(!1);
    function w() {
      g.value = !0, m("repair-environment");
    }
    function p() {
      g.value = !1;
    }
    function _() {
      l.value = !1;
    }
    const S = z(() => {
      const ee = n.status.workflows.analyzed || [], U = ee.filter(
        (N) => N.unresolved_models_count > 0 || N.ambiguous_models_count > 0
      );
      return U.length === 0 && n.status.missing_models_count > 0 ? ee.filter((N) => N.sync_state === "synced") : U;
    });
    function $() {
      const ee = S.value;
      ee.length !== 0 && (v.value = !0, m("repair-missing-models", ee.map((U) => U.name)));
    }
    function P() {
      v.value = !1;
    }
    s({ resetRepairingState: P, resetRepairingEnvironmentState: p, closeDetailModal: _ });
    const M = z(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), E = z(() => n.status.has_changes), x = z(() => {
      const ee = n.status.git_changes;
      return ee.nodes_added.length > 0 || ee.nodes_removed.length > 0 || ee.workflow_changes;
    }), q = z(() => n.status.has_changes || M.value), B = z(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), A = z(() => n.status.git_changes.has_other_changes), I = z(() => {
      var ee;
      return ((ee = n.status.workflows.analyzed) == null ? void 0 : ee.filter((U) => U.status === "broken")) || [];
    }), T = z(() => {
      var ee;
      return ((ee = n.status.workflows.analyzed) == null ? void 0 : ee.filter(
        (U) => U.has_path_sync_issues && !U.has_issues
      )) || [];
    }), O = z(() => I.value.length > 0), ce = z(() => O.value || T.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), Y = z(() => {
      const ee = [];
      return n.status.workflows.new.length > 0 && ee.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && ee.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && ee.push(`${n.status.workflows.deleted.length} deleted`), ee.length > 0 ? `${ee.join(", ")} workflow${ee.length === 1 && !ee[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), j = z(() => {
      var N, D;
      const ee = [], U = n.status.comparison;
      return (N = U.missing_nodes) != null && N.length && ee.push(`${U.missing_nodes.length} missing node${U.missing_nodes.length === 1 ? "" : "s"}`), (D = U.extra_nodes) != null && D.length && ee.push(`${U.extra_nodes.length} untracked node${U.extra_nodes.length === 1 ? "" : "s"}`), ee.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${ee.join(" and ")}.`;
    }), se = z(() => {
      var N, D;
      const ee = [], U = n.status.comparison;
      return (N = U.extra_nodes) != null && N.length && (U.extra_nodes.slice(0, 3).forEach((Z) => {
        ee.push(`Untracked: ${Z}`);
      }), U.extra_nodes.length > 3 && ee.push(`...and ${U.extra_nodes.length - 3} more untracked`)), (D = U.missing_nodes) != null && D.length && (U.missing_nodes.slice(0, 3).forEach((Z) => {
        ee.push(`Missing: ${Z}`);
      }), U.missing_nodes.length > 3 && ee.push(`...and ${U.missing_nodes.length - 3} more missing`)), ee;
    });
    return (ee, U) => (a(), r(G, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, { title: "STATUS" })
        ]),
        content: h(() => [
          n.setupState === "no_workspace" ? (a(), R(qt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: h(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: U[0] || (U[0] = (N) => ee.$emit("start-setup"))
              }, {
                default: h(() => [...U[13] || (U[13] = [
                  b(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (a(), R(qt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: h(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: U[1] || (U[1] = (N) => ee.$emit("view-environments"))
              }, {
                default: h(() => [...U[14] || (U[14] = [
                  b(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (a(), R(qt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: h(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: U[2] || (U[2] = (N) => ee.$emit("create-environment"))
              }, {
                default: h(() => [...U[15] || (U[15] = [
                  b(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: U[4] || (U[4] = (N) => i.value = !0),
            onMouseleave: U[5] || (U[5] = (N) => i.value = !1)
          }, [
            t("div", Gm, [
              C(Ot, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...U[16] || (U[16] = [
                  b(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              C(Fd, { name: "fade" }, {
                default: h(() => [
                  i.value ? (a(), R(re, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: h(() => [...U[17] || (U[17] = [
                      b(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            C(Ku, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, eo({
              left: h(() => [
                e.status.workflows.new.length ? (a(), R(cs, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (a(), R(cs, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (a(), R(cs, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                C(cs, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: M.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (a(), R(cs, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), R(cs, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (a(), R(cs, {
                  key: 2,
                  icon: "●",
                  count: B.value,
                  label: B.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                A.value ? (a(), R(cs, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                E.value && !x.value && !A.value ? (a(), R(cs, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                E.value ? y("", !0) : (a(), R(cs, {
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
                fn: h(() => [
                  U[19] || (U[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", jm, [
                    t("span", Hm, f(Y.value), 1),
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: U[3] || (U[3] = (N) => ee.$emit("commit-changes"))
                    }, {
                      default: h(() => [...U[18] || (U[18] = [
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
          e.status.is_detached_head ? (a(), R(qt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: U[6] || (U[6] = (N) => ee.$emit("create-branch"))
              }, {
                default: h(() => [...U[20] || (U[20] = [
                  b(" Create Branch ", -1)
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
              default: h(() => [...U[21] || (U[21] = [
                b(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ce.value ? (a(), r(G, { key: 0 }, [
              I.value.length > 0 ? (a(), R(qt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${I.value.length} workflow${I.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: I.value.map((N) => `${N.name} — ${N.issue_summary}`)
              }, {
                actions: h(() => [
                  C(re, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[7] || (U[7] = (N) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...U[22] || (U[22] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              T.value.length > 0 ? (a(), R(qt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${T.value.length} workflow${T.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: T.value.map((N) => `${N.name} — ${N.models_needing_path_sync_count} model path${N.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  C(re, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[8] || (U[8] = (N) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...U[23] || (U[23] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !O.value ? (a(), R(qt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  C(re, {
                    variant: "primary",
                    size: "sm",
                    disabled: v.value,
                    onClick: $
                  }, {
                    default: h(() => [
                      b(f(v.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  C(re, {
                    variant: "secondary",
                    size: "sm",
                    onClick: U[9] || (U[9] = (N) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...U[24] || (U[24] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (a(), R(qt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: j.value,
                items: se.value
              }, {
                actions: h(() => [
                  C(re, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: h(() => [...U[25] || (U[25] = [
                      b(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  C(re, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[10] || (U[10] = (N) => ee.$emit("view-nodes"))
                  }, {
                    default: h(() => [...U[26] || (U[26] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (a(), R(qt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: h(() => [
                  C(re, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[11] || (U[11] = (N) => ee.$emit("view-nodes"))
                  }, {
                    default: h(() => [...U[27] || (U[27] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : q.value ? (a(), r("span", qm, "No issues")) : (a(), R(os, {
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
        "is-repairing": g.value,
        onClose: U[12] || (U[12] = (N) => l.value = !1),
        onNavigateWorkflows: d,
        onNavigateNodes: u,
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
    const n = e, l = o, i = k(null);
    function c(d) {
      const u = d.target.value;
      l("update:modelValue", u);
    }
    return et(() => {
      n.autoFocus && i.value && i.value.focus();
    }), s({
      focus: () => {
        var d;
        return (d = i.value) == null ? void 0 : d.focus();
      },
      blur: () => {
        var d;
        return (d = i.value) == null ? void 0 : d.blur();
      }
    }), (d, u) => (a(), r("input", {
      ref_key: "inputRef",
      ref: i,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: Ee(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        u[0] || (u[0] = Qt((m) => d.$emit("enter"), ["enter"])),
        u[1] || (u[1] = Qt((m) => d.$emit("escape"), ["escape"]))
      ],
      onFocus: u[2] || (u[2] = (m) => d.$emit("focus")),
      onBlur: u[3] || (u[3] = (m) => d.$emit("blur"))
    }, null, 42, Xm));
  }
}), Pn = /* @__PURE__ */ pe(Qm, [["__scopeId", "data-v-0380d08f"]]), Zm = { class: "branch-create-form" }, ev = { class: "form-actions" }, tv = /* @__PURE__ */ ve({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, n = k(""), l = z(() => {
      const d = n.value.trim();
      return d.length > 0 && !d.startsWith("-") && !d.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(d);
    });
    function i() {
      l.value && (o("create", n.value.trim()), n.value = "");
    }
    function c() {
      n.value = "", o("cancel");
    }
    return (d, u) => (a(), r("div", Zm, [
      C(Pn, {
        modelValue: n.value,
        "onUpdate:modelValue": u[0] || (u[0] = (m) => n.value = m),
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
          default: h(() => [...u[1] || (u[1] = [
            b(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        C(re, {
          variant: "secondary",
          size: "sm",
          onClick: c
        }, {
          default: h(() => [...u[2] || (u[2] = [
            b(" Cancel ", -1)
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
      class: Ee(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
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
}, dv = /* @__PURE__ */ ve({
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
    return (c, d) => (a(), R(Tt, null, {
      header: h(() => [
        C(Pt, { title: "BRANCHES" }, {
          actions: h(() => [
            n.value ? y("", !0) : (a(), R(re, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: d[0] || (d[0] = (u) => n.value = !0)
            }, {
              default: h(() => [...d[1] || (d[1] = [
                b(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: h(() => [
        n.value ? (a(), R(sv, {
          key: 0,
          onCreate: l,
          onCancel: i
        })) : y("", !0),
        e.branches.length === 0 ? (a(), R(os, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), r("div", cv, [
          (a(!0), r(G, null, ge(e.branches, (u) => (a(), R(rv, {
            key: u.name,
            "branch-name": u.name,
            "is-current": u.is_current
          }, {
            actions: h(() => [
              u.is_current ? y("", !0) : (a(), R(re, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (m) => c.$emit("delete", u.name)
              }, {
                default: h(() => [...d[2] || (d[2] = [
                  b(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              u.is_current ? y("", !0) : (a(), R(re, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (m) => c.$emit("switch", u.name)
              }, {
                default: h(() => [...d[3] || (d[3] = [
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
}), uv = /* @__PURE__ */ pe(dv, [["__scopeId", "data-v-86784ddd"]]), fv = { class: "commit-list" }, mv = /* @__PURE__ */ ve({
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
      class: Ee(["commit-item", { clickable: e.clickable }]),
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
    return (s, o) => (a(), R(Tt, null, {
      header: h(() => [
        C(Pt, { title: "HISTORY" })
      ]),
      content: h(() => [
        e.commits.length === 0 ? (a(), R(os, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), R(vv, { key: 1 }, {
          default: h(() => [
            (a(!0), r(G, null, ge(e.commits, (n) => (a(), R(_v, {
              key: n.hash,
              hash: n.short_hash || n.hash,
              message: n.message,
              "relative-date": n.date_relative || n.relative_date,
              onClick: (l) => s.$emit("select", n)
            }, {
              actions: h(() => [
                C(re, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (l) => s.$emit("checkout", n),
                  title: "Checkout this commit"
                }, {
                  default: h(() => [...o[0] || (o[0] = [
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
], d7 = [
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
  const e = k(!1), s = k(null);
  async function o(J, $e) {
    var ct;
    if (!((ct = window.app) != null && ct.api))
      throw new Error("ComfyUI API not available");
    const Ae = await window.app.api.fetchApi(J, $e);
    if (!Ae.ok) {
      const Ne = await Ae.json().catch(() => ({}));
      throw new Error(Ne.error || Ne.message || `Request failed: ${Ae.status}`);
    }
    return Ae.json();
  }
  async function n(J = !1) {
    return o(J ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(J, $e = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: J, allow_issues: $e })
    });
  }
  async function i(J = 10, $e = 0) {
    return o(`/v2/comfygit/log?limit=${J}&offset=${$e}`);
  }
  async function c(J) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: J })
    });
  }
  async function d() {
    return o("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function u() {
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
  async function g(J) {
    return o(`/v2/comfygit/commit/${J}`);
  }
  async function w(J, $e = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: J, force: $e })
    });
  }
  async function p(J, $e = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, start_point: $e })
    });
  }
  async function _(J, $e = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: J, force: $e })
    });
  }
  async function S(J, $e = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(J)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: $e })
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
  async function P(J, $e) {
    const Ae = { target_env: J };
    return $e && (Ae.workspace_path = $e), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ae)
    });
  }
  async function M() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function E(J) {
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
      const $e = await n(J), Ae = [];
      return $e.workflows.new.forEach((ct) => {
        Ae.push({ name: ct, status: "new", missing_nodes: 0, missing_models: 0, path: ct });
      }), $e.workflows.modified.forEach((ct) => {
        Ae.push({ name: ct, status: "modified", missing_nodes: 0, missing_models: 0, path: ct });
      }), $e.workflows.synced.forEach((ct) => {
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
  async function O(J, $e, Ae) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: $e, install_models: Ae })
    });
  }
  async function ce(J, $e, Ae) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: $e, importance: Ae })
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
  async function se(J) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(J)}`);
  }
  async function ee(J) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function U(J, $e) {
    return o(`/v2/workspace/models/${J}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: $e })
    });
  }
  async function N(J, $e) {
    return o(`/v2/workspace/models/${J}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: $e })
    });
  }
  async function D(J) {
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
  async function X() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function he() {
    return o("/v2/workspace/models/directory");
  }
  async function Se(J) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function ze(J) {
    try {
      const $e = J ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(J)}` : "/v2/comfygit/config";
      return o($e);
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
  async function Ve(J, $e) {
    const Ae = $e ? `/v2/comfygit/config?workspace_path=${encodeURIComponent($e)}` : "/v2/comfygit/config";
    return o(Ae, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function be(J, $e) {
    try {
      const Ae = new URLSearchParams();
      return J && Ae.append("level", J), $e && Ae.append("lines", $e.toString()), o(`/v2/comfygit/debug/logs?${Ae}`);
    } catch {
      return [];
    }
  }
  async function Te(J, $e) {
    try {
      const Ae = new URLSearchParams();
      return J && Ae.append("level", J), $e && Ae.append("lines", $e.toString()), o(`/v2/workspace/debug/logs?${Ae}`);
    } catch {
      return [];
    }
  }
  async function He() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function ke() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function ie(J, $e) {
    try {
      const Ae = new URLSearchParams();
      return J && Ae.append("level", J), $e && Ae.append("lines", $e.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Ae}`);
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
  async function L() {
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
  async function le(J) {
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
  async function Ce(J, $e) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, url: $e })
    });
  }
  async function xe(J) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function ae(J, $e, Ae) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: $e, push_url: Ae })
    });
  }
  async function ue(J, $e) {
    const Ae = {};
    return $e && (Ae["X-Git-Auth-Token"] = $e), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/fetch`, {
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
  async function Ie(J = "skip", $e = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: J,
        remove_extra_nodes: $e
      })
    });
  }
  async function te(J, $e) {
    const Ae = $e ? `/v2/comfygit/remotes/${encodeURIComponent(J)}/pull-preview?branch=${encodeURIComponent($e)}` : `/v2/comfygit/remotes/${encodeURIComponent(J)}/pull-preview`;
    return o(Ae);
  }
  async function K(J, $e = {}) {
    const Ae = { "Content-Type": "application/json" };
    return $e.authToken && (Ae["X-Git-Auth-Token"] = $e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/pull`, {
      method: "POST",
      headers: Ae,
      body: JSON.stringify({
        model_strategy: $e.modelStrategy || "skip",
        force: $e.force || !1,
        resolutions: $e.resolutions
      })
    });
  }
  async function Me(J, $e) {
    const Ae = $e ? `/v2/comfygit/remotes/${encodeURIComponent(J)}/push-preview?branch=${encodeURIComponent($e)}` : `/v2/comfygit/remotes/${encodeURIComponent(J)}/push-preview`;
    return o(Ae);
  }
  async function we(J, $e = {}) {
    const Ae = { "Content-Type": "application/json" };
    return $e.authToken && (Ae["X-Git-Auth-Token"] = $e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/push`, {
      method: "POST",
      headers: Ae,
      body: JSON.stringify({ force: $e.force || !1 })
    });
  }
  async function ye(J, $e) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: $e })
    });
  }
  async function W(J) {
    const $e = {
      success: 0,
      failed: []
    };
    for (const Ae of J)
      try {
        await T(Ae), $e.success++;
      } catch (ct) {
        $e.failed.push({
          name: Ae,
          error: ct instanceof Error ? ct.message : "Unknown error"
        });
      }
    return $e;
  }
  async function F(J) {
    var ct;
    const $e = new FormData();
    if ($e.append("file", J), !((ct = window.app) != null && ct.api))
      throw new Error("ComfyUI API not available");
    const Ae = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: $e
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ae.ok) {
      const Ne = await Ae.json().catch(() => ({}));
      throw new Error(Ne.error || `Preview failed: ${Ae.status}`);
    }
    return Ae.json();
  }
  async function de(J) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(J)}`
    );
  }
  async function Fe(J, $e, Ae, ct) {
    var ol;
    const Ne = new FormData();
    if (Ne.append("file", J), Ne.append("name", $e), Ne.append("model_strategy", Ae), Ne.append("torch_backend", ct), !((ol = window.app) != null && ol.api))
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
  async function lt(J, $e, Ae, ct) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: J,
        name: $e,
        model_strategy: Ae,
        torch_backend: ct
      })
    });
  }
  async function ut() {
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
  async function Ht(J) {
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
  async function so(J, $e) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: J, save_key: $e })
    });
  }
  async function ko() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function $o(J) {
    const $e = J ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(J)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o($e);
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
  async function Q(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function Ke(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}/stop`, {
      method: "POST"
    });
  }
  async function ht(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}/start`, {
      method: "POST"
    });
  }
  async function Kt(J) {
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
  async function as() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Oe() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function ls(J) {
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
  async function mt(J, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify($e)
    });
  }
  async function Mt(J, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent($e)}/start`, {
      method: "POST"
    });
  }
  async function is(J, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent($e)}/stop`, {
      method: "POST"
    });
  }
  async function Vs(J, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent($e)}`, {
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
    validateExport: d,
    validateDeploy: u,
    exportEnvWithForce: m,
    // Git Operations
    getBranches: v,
    getCommitDetail: g,
    checkout: w,
    createBranch: p,
    switchBranch: _,
    deleteBranch: S,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: P,
    getSwitchProgress: M,
    createEnvironment: E,
    getCreateProgress: x,
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
    getModelDetails: se,
    openFileLocation: ee,
    addModelSource: U,
    removeModelSource: N,
    deleteModel: D,
    downloadModel: Z,
    scanWorkspaceModels: X,
    getModelsDirectory: he,
    setModelsDirectory: Se,
    // Settings
    getConfig: ze,
    updateConfig: Ve,
    // Debug/Logs
    getEnvironmentLogs: be,
    getWorkspaceLogs: Te,
    getEnvironmentLogPath: He,
    getWorkspaceLogPath: ke,
    getOrchestratorLogs: ie,
    getOrchestratorLogPath: Ge,
    openFile: Pe,
    // Node Management
    getNodes: L,
    trackNodeAsDev: V,
    installNode: ne,
    updateNode: le,
    uninstallNode: fe,
    // Git Remotes
    getRemotes: me,
    addRemote: Ce,
    removeRemote: xe,
    updateRemoteUrl: ae,
    fetchRemote: ue,
    getRemoteSyncStatus: Le,
    // Push/Pull
    getPullPreview: te,
    pullFromRemote: K,
    getPushPreview: Me,
    pushToRemote: we,
    validateMerge: ye,
    // Environment Sync
    syncEnvironmentManually: Ie,
    // Workflow Repair
    repairWorkflowModels: W,
    // Import Operations
    previewTarballImport: F,
    previewGitImport: vt,
    validateEnvironmentName: de,
    executeImport: Fe,
    executeGitImport: lt,
    getImportProgress: Qe,
    // First-Time Setup
    getSetupStatus: ut,
    initializeWorkspace: Rt,
    getInitializeProgress: Ut,
    validatePath: Ht,
    // Deploy Operations
    getDeploySummary: Bs,
    getDataCenters: Ps,
    testRunPodConnection: so,
    getNetworkVolumes: ko,
    getRunPodGpuTypes: $o,
    deployToRunPod: Co,
    getRunPodPods: _e,
    terminateRunPodPod: Q,
    stopRunPodPod: Ke,
    startRunPodPod: ht,
    getDeploymentStatus: Kt,
    exportDeployPackage: gs,
    getStoredRunPodKey: hs,
    clearRunPodKey: as,
    // Custom Worker Operations
    getCustomWorkers: Oe,
    addCustomWorker: ls,
    removeCustomWorker: oe,
    testWorkerConnection: H,
    scanForWorkers: De,
    getWorkerSystemInfo: je,
    getWorkerInstances: ot,
    deployToWorker: mt,
    startWorkerInstance: Mt,
    stopWorkerInstance: is,
    terminateWorkerInstance: Vs,
    // Git Authentication
    testGitAuth: Ws
  };
}
async function un(e, s) {
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
      return await un("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await un("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await un("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function n() {
    await un("/v2/comfygit/orchestrator/kill", { method: "POST" });
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
    }), (c, d) => (a(), R(wt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Ee(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: d[1] || (d[1] = rt(() => {
          }, ["stop"]))
        }, [
          t("div", xv, [
            qe(c.$slots, "header", {}, () => [
              e.title ? (a(), r("h3", Sv, f(e.title), 1)) : y("", !0)
            ]),
            e.showCloseButton ? (a(), r("button", {
              key: 0,
              class: "base-modal-close",
              onClick: d[0] || (d[0] = (u) => c.$emit("close"))
            }, [...d[2] || (d[2] = [
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
      class: Ee(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
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
    return (s, o) => (a(), R(ja(`h${e.level}`), {
      class: Ee(["base-title", e.variant])
    }, {
      default: h(() => [
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
      class: Ee(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Ee(["base-select", { error: !!e.error }]),
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
    return (s, o) => (a(), R(wt, { to: "body" }, [
      e.show ? (a(), r("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: jt({ maxWidth: e.maxWidth }),
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
}), ns = /* @__PURE__ */ pe(Kv, [["__scopeId", "data-v-42815ace"]]), qv = { class: "detail-section" }, Yv = {
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
}, dp = { class: "detail-section" }, up = {
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
    const o = e, n = s, { getWorkflowDetails: l, setModelImportance: i, openFileLocation: c } = at(), d = k(null), u = k(!1), m = k(null), v = k(!1), g = k({}), w = k(!1), p = k(/* @__PURE__ */ new Set()), _ = [
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
      const T = I.hash || I.filename;
      return p.value.has(T) ? I.loaded_by : I.loaded_by.slice(0, 3);
    }
    function M(I) {
      return p.value.has(I);
    }
    function E(I) {
      p.value.has(I) ? p.value.delete(I) : p.value.add(I), p.value = new Set(p.value);
    }
    async function x() {
      u.value = !0, m.value = null;
      try {
        d.value = await l(o.workflowName);
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load workflow details";
      } finally {
        u.value = !1;
      }
    }
    function q(I, T) {
      g.value[I] = T, v.value = !0;
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
      u.value = !0, m.value = null;
      try {
        for (const [I, T] of Object.entries(g.value))
          await i(o.workflowName, I, T);
        n("refresh"), n("close");
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to save changes";
      } finally {
        u.value = !1;
      }
    }
    return et(x), (I, T) => (a(), r(G, null, [
      C(pt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: u.value,
        error: m.value || void 0,
        onClose: T[4] || (T[4] = (O) => n("close"))
      }, {
        body: h(() => [
          d.value ? (a(), r(G, { key: 0 }, [
            t("section", qv, [
              C(Bo, { variant: "section" }, {
                default: h(() => [
                  b("MODELS USED (" + f(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (a(), r("div", Yv, " No models used in this workflow ")) : y("", !0),
              (a(!0), r(G, null, ge(d.value.models, (O) => {
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
                        class: Ee(["value", S(O.status)])
                      }, f($(O.status)), 3)
                    ]),
                    t("div", ep, [
                      t("span", tp, [
                        T[8] || (T[8] = b(" Importance: ", -1)),
                        C(gr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: T[0] || (T[0] = (Y) => w.value = !0)
                        })
                      ]),
                      C(Vv, {
                        "model-value": g.value[O.filename] || O.importance,
                        options: _,
                        "onUpdate:modelValue": (Y) => q(O.filename, Y)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    O.loaded_by && O.loaded_by.length > 0 ? (a(), r("div", sp, [
                      T[9] || (T[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", op, [
                        (a(!0), r(G, null, ge(P(O), (Y, j) => (a(), r("div", {
                          key: `${Y.node_id}-${j}`,
                          class: "node-reference"
                        }, f(Y.node_type) + " (Node #" + f(Y.node_id) + ") ", 1))), 128)),
                        O.loaded_by.length > 3 ? (a(), r("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (Y) => E(O.hash || O.filename)
                        }, f(M(O.hash || O.filename) ? "▼ Show less" : `▶ View all (${O.loaded_by.length})`), 9, np)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    O.size_mb ? (a(), r("div", ap, [
                      T[10] || (T[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", lp, f(O.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    O.has_category_mismatch ? (a(), r("div", ip, [
                      T[13] || (T[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", rp, [
                        T[11] || (T[11] = b(" In ", -1)),
                        t("code", null, f(O.actual_category) + "/", 1),
                        T[12] || (T[12] = b(" but loader needs ", -1)),
                        t("code", null, f((ce = O.expected_categories) == null ? void 0 : ce[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  O.status !== "available" ? (a(), r("div", cp, [
                    O.status === "downloadable" ? (a(), R(Re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: T[1] || (T[1] = (Y) => n("resolve"))
                    }, {
                      default: h(() => [...T[14] || (T[14] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    })) : O.status === "category_mismatch" && O.file_path ? (a(), R(Re, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (Y) => B(O.file_path)
                    }, {
                      default: h(() => [...T[15] || (T[15] = [
                        b(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : O.status !== "path_mismatch" ? (a(), R(Re, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: T[2] || (T[2] = (Y) => n("resolve"))
                    }, {
                      default: h(() => [...T[16] || (T[16] = [
                        b(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            t("section", dp, [
              C(Bo, { variant: "section" }, {
                default: h(() => [
                  b("NODES USED (" + f(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (a(), r("div", up, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), r(G, null, ge(d.value.nodes, (O) => (a(), r("div", {
                key: O.name,
                class: "node-item"
              }, [
                t("span", {
                  class: Ee(["node-status", O.status === "installed" ? "installed" : "missing"])
                }, f(O.status === "installed" ? "✓" : "✕"), 3),
                t("span", fp, f(O.name), 1),
                O.version ? (a(), r("span", mp, "v" + f(O.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          C(Re, {
            variant: "secondary",
            onClick: T[3] || (T[3] = (O) => n("close"))
          }, {
            default: h(() => [...T[17] || (T[17] = [
              b(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (a(), R(Re, {
            key: 0,
            variant: "primary",
            onClick: A
          }, {
            default: h(() => [...T[18] || (T[18] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      C(ns, {
        show: w.value,
        title: "Model Importance Levels",
        onClose: T[5] || (T[5] = (O) => w.value = !1)
      }, {
        content: h(() => [...T[19] || (T[19] = [
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
}), pp = /* @__PURE__ */ pe(vp, [["__scopeId", "data-v-668728e6"]]), Je = Fs({
  items: [],
  status: "idle"
});
let fs = null;
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
    fs && (fs.close(), fs = null);
    const n = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${n}`);
    fs = l;
    let i = Date.now(), c = 0, d = !1;
    l.onmessage = (u) => {
      try {
        const m = JSON.parse(u.data);
        switch (m.type) {
          case "progress":
            e.downloaded = m.downloaded || 0, e.size = m.total || e.size;
            const v = Date.now(), g = (v - i) / 1e3;
            if (g > 0.5) {
              const w = e.downloaded - c;
              if (e.speed = w / g, i = v, c = e.downloaded, e.speed > 0 && e.size > 0) {
                const p = e.size - e.downloaded;
                e.eta = p / e.speed;
              }
            }
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            d = !0, l.close(), fs = null, s();
            break;
          case "error":
            d = !0, l.close(), fs = null, o(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      l.close(), fs = null, d || o(new Error("Connection lost"));
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
    for (const P of $) {
      if (Je.items.some(
        (x) => x.url === P.url && x.targetPath === P.targetPath && ["queued", "downloading", "paused", "completed"].includes(x.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${P.filename}`);
        continue;
      }
      const E = {
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
      Je.items.push(E);
    }
    Je.status === "idle" && ro();
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
        fs && (fs.close(), fs = null), P.status = "failed", P.error = "Cancelled by user", Je.status = "idle", ro();
      } else if (P.status === "queued") {
        const M = Je.items.findIndex((E) => E.id === $);
        M >= 0 && Je.items.splice(M, 1);
      }
    }
  }
  function o($) {
    const P = la($);
    !P || P.status !== "failed" || (P.status = "queued", P.error = void 0, P.progress = 0, P.downloaded = 0, Je.status === "idle" && ro());
  }
  function n($) {
    const P = la($);
    !P || P.status !== "paused" || (P.status = "queued", Je.status === "idle" && ro());
  }
  function l() {
    const $ = Je.items.filter((P) => P.status === "paused");
    for (const P of $)
      P.status = "queued";
    Je.status === "idle" && ro();
  }
  function i($) {
    const P = Je.items.findIndex((M) => M.id === $);
    P >= 0 && ["completed", "failed", "paused"].includes(Je.items[P].status) && Je.items.splice(P, 1);
  }
  function c() {
    Je.items = Je.items.filter(($) => $.status !== "completed");
  }
  function d() {
    Je.items = Je.items.filter(($) => $.status !== "failed");
  }
  const u = z(
    () => Je.items.find(($) => $.status === "downloading")
  ), m = z(
    () => Je.items.filter(($) => $.status === "queued")
  ), v = z(
    () => Je.items.filter(($) => $.status === "completed")
  ), g = z(
    () => Je.items.filter(($) => $.status === "failed")
  ), w = z(
    () => Je.items.filter(($) => $.status === "paused")
  ), p = z(() => Je.items.length > 0), _ = z(
    () => Je.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), S = z(
    () => Je.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: bn(Je),
    // Computed
    currentDownload: u,
    queuedItems: m,
    completedItems: v,
    failedItems: g,
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
    clearCompleted: c,
    clearFailed: d,
    loadPendingDownloads: hp
  };
}
function wr() {
  const e = k(null), s = k(null), o = k([]), n = k([]), l = k(!1), i = k(null);
  async function c(M, E) {
    var q;
    if (!((q = window.app) != null && q.api))
      throw new Error("ComfyUI API not available");
    const x = await window.app.api.fetchApi(M, E);
    if (!x.ok) {
      const B = await x.json().catch(() => ({})), A = B.error || B.message || `Request failed: ${x.status}`;
      throw new Error(A);
    }
    return x.json();
  }
  async function d(M) {
    l.value = !0, i.value = null;
    try {
      let E;
      return io() || (E = await c(
        `/v2/comfygit/workflow/${M}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), e.value = E, E;
    } catch (E) {
      const x = E instanceof Error ? E.message : "Unknown error occurred";
      throw i.value = x, E;
    } finally {
      l.value = !1;
    }
  }
  async function u(M, E, x, q) {
    l.value = !0, i.value = null;
    try {
      let B;
      if (!io()) {
        const A = Object.fromEntries(E), I = Object.fromEntries(x), T = q ? Array.from(q) : [];
        B = await c(
          `/v2/comfygit/workflow/${M}/apply-resolution`,
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
  async function m(M, E = 10) {
    l.value = !0, i.value = null;
    try {
      let x;
      return io() || (x = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: M, limit: E })
        }
      )), o.value = x.results, x.results;
    } catch (x) {
      const q = x instanceof Error ? x.message : "Unknown error occurred";
      throw i.value = q, x;
    } finally {
      l.value = !1;
    }
  }
  async function v(M, E = 10) {
    l.value = !0, i.value = null;
    try {
      let x;
      return io() || (x = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: M, limit: E })
        }
      )), n.value = x.results, x.results;
    } catch (x) {
      const q = x instanceof Error ? x.message : "Unknown error occurred";
      throw i.value = q, x;
    } finally {
      l.value = !1;
    }
  }
  const g = Fs({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function w() {
    g.phase = "idle", g.currentFile = void 0, g.currentFileIndex = void 0, g.totalFiles = void 0, g.bytesDownloaded = void 0, g.bytesTotal = void 0, g.completedFiles = [], g.nodesToInstall = [], g.nodesInstalled = [], g.installError = void 0, g.needsRestart = void 0, g.error = void 0, g.nodeInstallProgress = void 0;
  }
  async function p(M) {
    g.phase = "installing", g.nodesInstalled = [], g.installError = void 0, g.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return io(), await _(M);
    } catch (E) {
      const x = E instanceof Error ? E.message : "Failed to install nodes";
      throw g.installError = x, E;
    }
  }
  async function _(M) {
    var x;
    const E = await c(
      `/v2/comfygit/workflow/${M}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: g.nodesToInstall
        })
      }
    );
    if (g.nodeInstallProgress) {
      g.nodeInstallProgress.totalNodes = g.nodesToInstall.length;
      const q = new Map(((x = E.failed) == null ? void 0 : x.map((B) => [B.node_id, B.error])) || []);
      for (let B = 0; B < g.nodesToInstall.length; B++) {
        const A = g.nodesToInstall[B], I = q.get(A);
        g.nodeInstallProgress.completedNodes.push({
          node_id: A,
          success: !I,
          error: I
        });
      }
    }
    return g.nodesInstalled = E.nodes_installed, g.needsRestart = E.nodes_installed.length > 0, E.failed && E.failed.length > 0 && (g.installError = `${E.failed.length} package(s) failed to install`), E;
  }
  async function S(M, E, x) {
    w(), g.phase = "resolving", i.value = null;
    const q = Object.fromEntries(E), B = Object.fromEntries(x);
    try {
      const A = await fetch(`/v2/comfygit/workflow/${M}/apply-resolution-stream`, {
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
        for (const se of j) {
          if (!se.trim()) continue;
          const ee = se.split(`
`);
          let U = "", N = "";
          for (const D of ee)
            D.startsWith("event: ") ? U = D.slice(7) : D.startsWith("data: ") && (N = D.slice(6));
          if (N)
            try {
              const D = JSON.parse(N);
              $(U, D);
            } catch (D) {
              console.warn("Failed to parse SSE event:", D);
            }
        }
      }
    } catch (A) {
      const I = A instanceof Error ? A.message : "Unknown error occurred";
      throw i.value = I, g.error = I, g.phase = "error", A;
    }
  }
  function $(M, E) {
    switch (M) {
      case "batch_start":
        g.phase = "downloading", g.totalFiles = E.total;
        break;
      case "file_start":
        g.currentFile = E.filename, g.currentFileIndex = E.index, g.bytesDownloaded = 0, g.bytesTotal = void 0;
        break;
      case "file_progress":
        g.bytesDownloaded = E.downloaded, g.bytesTotal = E.total;
        break;
      case "file_complete":
        g.completedFiles.push({
          filename: E.filename,
          success: E.success,
          error: E.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        g.nodesToInstall = E.nodes_to_install || [], E.download_results && (g.completedFiles = E.download_results), g.phase = "complete";
        break;
      case "error":
        g.error = E.message, g.phase = "error", i.value = E.message;
        break;
    }
  }
  function P(M, E) {
    const { addToQueue: x } = _o(), q = E.filter((B) => B.url && B.target_path).map((B) => ({
      workflow: M,
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
    progress: g,
    // Methods
    analyzeWorkflow: d,
    applyResolution: u,
    applyResolutionWithProgress: S,
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
        const g = o.stepStats[m];
        return g.total > 0 && g.resolved === g.total;
      }
      return o.completedSteps.includes(m);
    }
    function i(m) {
      var v;
      if ((v = o.stepStats) != null && v[m]) {
        const g = o.stepStats[m];
        return g.resolved > 0 && g.resolved < g.total;
      }
      return !1;
    }
    function c(m) {
      return l(m) ? "state-complete" : i(m) ? "state-partial" : "state-pending";
    }
    function d(m) {
      return !1;
    }
    function u(m) {
      n("step-change", m);
    }
    return (m, v) => (a(), r("div", yp, [
      t("div", wp, [
        (a(!0), r(G, null, ge(e.steps, (g, w) => (a(), r("div", {
          key: g.id,
          class: Ee(["step", {
            active: e.currentStep === g.id,
            completed: l(g.id),
            "in-progress": i(g.id),
            disabled: d(g.id)
          }]),
          onClick: (p) => u(g.id)
        }, [
          t("div", {
            class: Ee(["step-indicator", c(g.id)])
          }, [
            l(g.id) ? (a(), r("span", bp, "✓")) : (a(), r("span", kp, f(w + 1), 1))
          ], 2),
          t("div", $p, f(g.label), 1),
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
      class: Ee(["confidence-badge", n.value, e.size])
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
    function l(u, m = 80) {
      return u.length <= m ? u : u.slice(0, m - 3) + "...";
    }
    const i = z(() => !!o.choice);
    z(() => {
      var u;
      return (u = o.choice) == null ? void 0 : u.action;
    }), z(() => {
      var u;
      return (u = o.choice) == null ? void 0 : u.package_id;
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
    function d(u) {
      n("option-selected", u);
    }
    return (u, m) => (a(), r("div", {
      class: Ee(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: i.value }])
    }, [
      t("div", Tp, [
        t("span", Pp, [
          m[7] || (m[7] = b("Node type: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Ee(["status-badge", c.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Rp, [
        i.value ? (a(), r("div", Mp, [
          C(Re, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", Dp, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          t("div", Lp, [
            (a(!0), r(G, null, ge(e.options, (v, g) => (a(), r("label", {
              key: v.package_id,
              class: Ee(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (w) => d(g)
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (w) => d(g)
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
              default: h(() => [...m[9] || (m[9] = [
                b(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (v) => n("mark-optional"))
            }, {
              default: h(() => [...m[11] || (m[11] = [
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
              (a(!0), r(G, null, ge(e.searchResults.slice(0, 5), (v, g) => (a(), r("label", {
                key: v.package_id,
                class: "option-card",
                onClick: (w) => n("search-result-selected", v)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: g
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
              default: h(() => {
                var v;
                return [
                  b(f((v = e.searchResults) != null && v.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            C(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[16] || (m[16] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (v) => n("mark-optional"))
            }, {
              default: h(() => [...m[17] || (m[17] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), ng = /* @__PURE__ */ pe(og, [["__scopeId", "data-v-c2997d1d"]]), ag = { class: "item-navigator" }, lg = { class: "nav-item-info" }, ig = ["title"], rg = { class: "nav-controls" }, cg = { class: "nav-arrows" }, dg = ["disabled"], ug = ["disabled"], fg = { class: "nav-position" }, mg = /* @__PURE__ */ ve({
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
          }, " ← ", 8, dg),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (i) => o("next")),
            title: "Next item"
          }, " → ", 8, ug)
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
      class: Ee(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Ee(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.value)),
        onKeyup: [
          o[1] || (o[1] = Qt((n) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = Qt((n) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, vg),
      e.error ? (a(), r("span", pg, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Zt = /* @__PURE__ */ pe(gg, [["__scopeId", "data-v-9ba02cdc"]]), hg = { class: "node-resolution-step" }, yg = {
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
    const o = e, n = s, { searchNodes: l } = wr(), i = k(0), c = k(!1), d = k(!1), u = k(""), m = k(""), v = k([]), g = k(!1), w = k(/* @__PURE__ */ new Map()), p = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function S() {
      _.value && N(), _.value = !1;
    }
    const $ = z(() => o.nodes[i.value]), P = z(() => o.nodes.filter((be) => o.nodeChoices.has(be.node_type)).length), M = z(() => $.value ? w.value.get($.value.node_type) || [] : []), E = z(() => $.value ? p.value.has($.value.node_type) : !1);
    Ct($, async (be) => {
      var Te;
      be && ((Te = be.options) != null && Te.length || w.value.has(be.node_type) || p.value.has(be.node_type) || o.nodeChoices.has(be.node_type) || await x(be.node_type));
    }, { immediate: !0 });
    async function x(be) {
      p.value.add(be);
      try {
        const Te = await l(be, 5);
        w.value.set(be, Te);
      } catch {
        w.value.set(be, []);
      } finally {
        p.value.delete(be);
      }
    }
    const q = z(() => o.autoResolvedPackages.filter((be) => !o.skippedPackages.has(be.package_id)).length);
    function B(be) {
      return o.skippedPackages.has(be);
    }
    function A(be) {
      n("package-skip", be);
    }
    const I = z(() => {
      var Te;
      if (!$.value) return "not-found";
      const be = o.nodeChoices.get($.value.node_type);
      if (be)
        switch (be.action) {
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
      const be = o.nodeChoices.get($.value.node_type);
      if (be)
        switch (be.action) {
          case "install":
            return be.package_id ? `→ ${be.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (Te = $.value.options) != null && Te.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function O(be) {
      be >= 0 && be < o.nodes.length && (i.value = be);
    }
    function ce() {
      $.value && n("mark-optional", $.value.node_type);
    }
    function Y() {
      $.value && n("skip", $.value.node_type);
    }
    function j(be) {
      $.value && n("option-selected", $.value.node_type, be);
    }
    function se() {
      $.value && n("clear-choice", $.value.node_type);
    }
    function ee() {
      $.value && (u.value = $.value.node_type, v.value = M.value, c.value = !0, he(u.value));
    }
    function U() {
      m.value = "", d.value = !0;
    }
    function N() {
      c.value = !1, u.value = "", v.value = [];
    }
    function D() {
      d.value = !1, m.value = "";
    }
    let Z = null;
    function X() {
      Z && clearTimeout(Z), Z = setTimeout(() => {
        he(u.value);
      }, 300);
    }
    async function he(be) {
      if (!be.trim()) {
        v.value = [];
        return;
      }
      g.value = !0;
      try {
        v.value = await l(be, 10);
      } catch {
        v.value = [];
      } finally {
        g.value = !1;
      }
    }
    function Se(be) {
      $.value && (n("manual-entry", $.value.node_type, be.package_id), N());
    }
    function ze(be) {
      $.value && n("manual-entry", $.value.node_type, be.package_id);
    }
    function Ve() {
      !$.value || !m.value.trim() || (n("manual-entry", $.value.node_type, m.value.trim()), D());
    }
    return (be, Te) => {
      var He, ke;
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
            (a(!0), r(G, null, ge(e.autoResolvedPackages, (ie) => (a(), r("div", {
              key: ie.package_id,
              class: "resolved-package-item"
            }, [
              t("div", kg, [
                t("code", $g, f(ie.package_id), 1),
                t("span", Cg, f(ie.node_types_count) + " node type" + f(ie.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", xg, [
                B(ie.package_id) ? (a(), r("span", Ig, " SKIPPED ")) : (a(), r("span", Sg, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (Ge) => A(ie.package_id)
                }, f(B(ie.package_id) ? "Include" : "Skip"), 9, Eg)
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
            t("span", Rg, f(P.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          $.value ? (a(), R(_r, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": i.value,
            "total-items": e.nodes.length,
            onPrev: Te[0] || (Te[0] = (ie) => O(i.value - 1)),
            onNext: Te[1] || (Te[1] = (ie) => O(i.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          $.value ? (a(), r("div", Mg, [
            C(ng, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((He = $.value.options) != null && He.length),
              options: $.value.options,
              choice: (ke = e.nodeChoices) == null ? void 0 : ke.get($.value.node_type),
              status: I.value,
              "status-label": T.value,
              "search-results": M.value,
              "is-searching": E.value,
              onMarkOptional: ce,
              onSkip: Y,
              onManualEntry: U,
              onSearch: ee,
              onOptionSelected: j,
              onClearChoice: se,
              onSearchResultSelected: ze
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), r("div", Dg, [...Te[8] || (Te[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), R(wt, { to: "body" }, [
          c.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: Te[4] || (Te[4] = rt((ie) => _.value = !0, ["self"])),
            onMouseup: rt(S, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: Te[3] || (Te[3] = (ie) => _.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                Te[9] || (Te[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: N
                }, "✕")
              ]),
              t("div", Lg, [
                C(Zt, {
                  modelValue: u.value,
                  "onUpdate:modelValue": Te[2] || (Te[2] = (ie) => u.value = ie),
                  placeholder: "Search by node type, package name...",
                  onInput: X
                }, null, 8, ["modelValue"]),
                t("div", Og, [
                  v.value.length > 0 ? (a(), r("div", Ag, [
                    (a(!0), r(G, null, ge(v.value, (ie) => (a(), r("div", {
                      key: ie.package_id,
                      class: "node-search-result-item",
                      onClick: (Ge) => Se(ie)
                    }, [
                      t("div", Ug, [
                        t("code", zg, f(ie.package_id), 1),
                        ie.match_confidence ? (a(), R(Rn, {
                          key: 0,
                          confidence: ie.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      ie.description ? (a(), r("div", Fg, f(ie.description), 1)) : y("", !0)
                    ], 8, Ng))), 128))
                  ])) : g.value ? (a(), r("div", Bg, "Searching...")) : u.value ? (a(), r("div", Vg, 'No packages found matching "' + f(u.value) + '"', 1)) : (a(), r("div", Wg, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (a(), R(wt, { to: "body" }, [
          d.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: rt(D, ["self"])
          }, [
            t("div", Gg, [
              t("div", { class: "node-modal-header" }, [
                Te[10] || (Te[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: D
                }, "✕")
              ]),
              t("div", jg, [
                C(Zt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": Te[5] || (Te[5] = (ie) => m.value = ie),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", Hg, [
                  C(Re, {
                    variant: "secondary",
                    onClick: D
                  }, {
                    default: h(() => [...Te[11] || (Te[11] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Re, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: Ve
                  }, {
                    default: h(() => [...Te[12] || (Te[12] = [
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
}), qg = /* @__PURE__ */ pe(Kg, [["__scopeId", "data-v-281581bc"]]), Yg = { class: "node-info" }, Jg = { class: "node-info-text" }, Xg = { class: "item-body" }, Qg = {
  key: 0,
  class: "resolved-state"
}, Zg = {
  key: 1,
  class: "multiple-options"
}, eh = { class: "options-list" }, th = ["onClick"], sh = ["name", "value", "checked", "onChange"], oh = { class: "option-content" }, nh = { class: "option-header" }, ah = { class: "option-filename" }, lh = { class: "option-meta" }, ih = { class: "option-size" }, rh = { class: "option-category" }, ch = { class: "option-path" }, dh = { class: "action-buttons" }, uh = {
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
      var u;
      return (u = o.choice) == null ? void 0 : u.action;
    }), z(() => {
      var u, m;
      return ((m = (u = o.choice) == null ? void 0 : u.selected_model) == null ? void 0 : m.filename) || "selected";
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
    function c(u) {
      n("option-selected", u);
    }
    function d(u) {
      if (!u) return "Unknown";
      const m = u / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(u / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (u, m) => (a(), r("div", {
      class: Ee(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", Yg, [
        t("span", Jg, [
          m[7] || (m[7] = b("Used by: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Ee(["status-badge", i.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Xg, [
        l.value ? (a(), r("div", Qg, [
          C(Re, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", Zg, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", eh, [
            (a(!0), r(G, null, ge(e.options, (v, g) => (a(), r("label", {
              key: v.model.hash,
              class: Ee(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (w) => c(g)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (w) => c(g)
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
                  t("span", ih, f(d(v.model.size)), 1),
                  t("span", rh, f(v.model.category), 1)
                ]),
                t("div", ch, f(v.model.relative_path), 1)
              ])
            ], 10, th))), 128))
          ]),
          t("div", dh, [
            C(Re, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (v) => n("mark-optional"))
            }, {
              default: h(() => [...m[11] || (m[11] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), r("div", uh, [
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
              default: h(() => [...m[13] || (m[13] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[14] || (m[14] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (v) => n("mark-optional"))
            }, {
              default: h(() => [...m[15] || (m[15] = [
                b(" Mark Optional ", -1)
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
    function n(N) {
      var D;
      return N && ((D = o[N]) == null ? void 0 : D[0]) || null;
    }
    const l = e, i = s, c = k(0), d = k(!1), u = k(!1), m = k(""), v = k(""), g = k(""), w = k([]), p = k(!1), _ = z(() => l.models[c.value]), S = z(() => l.models.some((N) => N.is_download_intent)), $ = z(() => l.models.filter(
      (N) => l.modelChoices.has(N.filename) || N.is_download_intent
    ).length), P = z(() => {
      var D;
      if (!_.value) return "";
      const N = n((D = _.value.reference) == null ? void 0 : D.node_type);
      return N ? `${N}/${_.value.filename}` : "";
    }), M = z(() => {
      var D;
      if (!_.value) return "not-found";
      const N = l.modelChoices.get(_.value.filename);
      if (N)
        switch (N.action) {
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
      return _.value.is_download_intent ? "download" : (D = _.value.options) != null && D.length ? "ambiguous" : "not-found";
    }), E = z(() => {
      var D, Z;
      if (!_.value) return;
      const N = l.modelChoices.get(_.value.filename);
      if (N)
        switch (N.action) {
          case "select":
            return (D = N.selected_model) != null && D.filename ? `→ ${N.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (Z = _.value.options) != null && Z.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function x(N) {
      N >= 0 && N < l.models.length && (c.value = N);
    }
    function q() {
      _.value && i("mark-optional", _.value.filename);
    }
    function B() {
      _.value && i("skip", _.value.filename);
    }
    function A(N) {
      _.value && i("option-selected", _.value.filename, N);
    }
    function I() {
      _.value && i("clear-choice", _.value.filename);
    }
    function T() {
      _.value && (m.value = _.value.filename, d.value = !0);
    }
    function O() {
      _.value && (v.value = _.value.download_source || "", g.value = _.value.target_path || P.value, u.value = !0);
    }
    function ce() {
      d.value = !1, m.value = "", w.value = [];
    }
    function Y() {
      u.value = !1, v.value = "", g.value = "";
    }
    function j() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function se(N) {
      _.value && ce();
    }
    function ee() {
      !_.value || !v.value.trim() || (i("download-url", _.value.filename, v.value.trim(), g.value.trim() || void 0), Y());
    }
    function U(N) {
      if (!N) return "Unknown";
      const D = N / (1024 * 1024 * 1024);
      return D >= 1 ? `${D.toFixed(2)} GB` : `${(N / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (N, D) => {
      var Z, X, he;
      return a(), r("div", ph, [
        t("div", gh, [
          t("div", hh, [
            t("h3", yh, f(S.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", wh, f(S.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", _h, f($.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), R(_r, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: D[0] || (D[0] = (Se) => x(c.value - 1)),
          onNext: D[1] || (D[1] = (Se) => x(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), r("div", bh, [
          C(vh, {
            filename: _.value.filename,
            "node-type": ((Z = _.value.reference) == null ? void 0 : Z.node_type) || "Unknown",
            "has-multiple-options": !!((X = _.value.options) != null && X.length),
            options: _.value.options,
            choice: (he = e.modelChoices) == null ? void 0 : he.get(_.value.filename),
            status: M.value,
            "status-label": E.value,
            onMarkOptional: q,
            onSkip: B,
            onDownloadUrl: O,
            onSearch: T,
            onOptionSelected: A,
            onClearChoice: I
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), r("div", kh, [...D[5] || (D[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (a(), R(wt, { to: "body" }, [
          d.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: rt(ce, ["self"])
          }, [
            t("div", $h, [
              t("div", { class: "model-modal-header" }, [
                D[6] || (D[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: ce
                }, "✕")
              ]),
              t("div", Ch, [
                C(Zt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": D[2] || (D[2] = (Se) => m.value = Se),
                  placeholder: "Search by filename, category...",
                  onInput: j
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), r("div", xh, [
                  (a(!0), r(G, null, ge(w.value, (Se) => (a(), r("div", {
                    key: Se.hash,
                    class: "model-search-result-item",
                    onClick: (ze) => se()
                  }, [
                    t("div", Ih, [
                      t("code", Eh, f(Se.filename), 1)
                    ]),
                    t("div", Th, [
                      t("span", Ph, f(Se.category), 1),
                      t("span", Rh, f(U(Se.size)), 1)
                    ]),
                    Se.relative_path ? (a(), r("div", Mh, f(Se.relative_path), 1)) : y("", !0)
                  ], 8, Sh))), 128))
                ])) : m.value && !p.value ? (a(), r("div", Dh, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                p.value ? (a(), r("div", Lh, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), R(wt, { to: "body" }, [
          u.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: rt(Y, ["self"])
          }, [
            t("div", Oh, [
              t("div", { class: "model-modal-header" }, [
                D[7] || (D[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              t("div", Ah, [
                t("div", Nh, [
                  D[8] || (D[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  C(Zt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": D[3] || (D[3] = (Se) => v.value = Se),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", Uh, [
                  D[9] || (D[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  C(Zt, {
                    modelValue: g.value,
                    "onUpdate:modelValue": D[4] || (D[4] = (Se) => g.value = Se),
                    placeholder: P.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", zh, [
                  C(Re, {
                    variant: "secondary",
                    onClick: Y
                  }, {
                    default: h(() => [...D[10] || (D[10] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Re, {
                    variant: "primary",
                    disabled: !v.value.trim() || !g.value.trim(),
                    onClick: ee
                  }, {
                    default: h(() => [...D[11] || (D[11] = [
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
}, cy = { class: "summary-text" }, dy = {
  key: 2,
  class: "failed-list"
}, uy = { class: "failed-node-id" }, fy = { class: "failed-error" }, my = {
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
      const d = ((m = s.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || s.progress.nodesToInstall.length;
      if (!d) return 0;
      const u = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(u / d * 100);
    }), n = z(() => {
      var d;
      return ((d = s.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.filter((u) => !u.success)) || [];
    }), l = z(() => n.value.length > 0);
    function i(d, u) {
      var v, g;
      const m = (v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.find((w) => w.node_id === d);
      return m ? m.success ? "complete" : "failed" : ((g = s.progress.nodeInstallProgress) == null ? void 0 : g.currentIndex) === u ? "installing" : "pending";
    }
    function c(d) {
      var u, m;
      return (m = (u = s.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.find((v) => v.node_id === d)) == null ? void 0 : m.error;
    }
    return (d, u) => {
      var m, v, g, w;
      return a(), r("div", Vh, [
        e.progress.phase === "resolving" ? (a(), r("div", Wh, [...u[2] || (u[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), r("div", Gh, [
          u[3] || (u[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", jh, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", Hh, [
            t("div", Kh, [
              t("div", {
                class: "progress-fill",
                style: jt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", qh, f(((g = e.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", Yh, [
            (a(!0), r(G, null, ge(e.progress.nodesToInstall, (p, _) => (a(), r("div", {
              key: p,
              class: Ee(["install-item", i(p, _)])
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
              class: Ee(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            t("h3", ny, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", ay, [
            e.progress.nodesInstalled.length > 0 ? (a(), r("div", ly, [
              u[4] || (u[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", iy, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("div", ry, [
              u[5] || (u[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", cy, f(n.value.length) + " package" + f(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("div", dy, [
              (a(!0), r(G, null, ge(n.value, (p) => (a(), r("div", {
                key: p.node_id,
                class: "failed-item"
              }, [
                t("code", uy, f(p.node_id), 1),
                t("span", fy, f(p.error), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("button", {
              key: 3,
              class: "retry-button",
              onClick: u[0] || (u[0] = (p) => d.$emit("retry-failed"))
            }, " Retry Failed (" + f(n.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (a(), r("div", my, [...u[6] || (u[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            u[8] || (u[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), r("div", vy, [
              u[7] || (u[7] = t("div", { class: "restart-warning" }, [
                t("span", { class: "warning-icon" }, "⚠"),
                t("div", { class: "warning-content" }, [
                  t("strong", null, "Restart Required"),
                  t("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              t("button", {
                class: "restart-button",
                onClick: u[1] || (u[1] = (p) => d.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : y("", !0)
          ])
        ])) : e.progress.phase === "error" ? (a(), r("div", py, [
          u[9] || (u[9] = t("div", { class: "phase-header" }, [
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
}, r1 = { class: "review-summary" }, c1 = { class: "review-stats" }, d1 = { class: "review-stat" }, u1 = { class: "stat-value" }, f1 = { class: "review-stat" }, m1 = { class: "stat-value" }, v1 = { class: "review-stat" }, p1 = { class: "stat-value" }, g1 = { class: "review-stat" }, h1 = { class: "stat-value" }, y1 = {
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
    const o = e, n = s, { analyzeWorkflow: l, applyResolution: i, installNodes: c, queueModelDownloads: d, progress: u, resetProgress: m } = wr(), { loadPendingDownloads: v } = _o(), { openFileLocation: g } = at(), w = k(null), p = k(!1), _ = k(!1), S = k(null), $ = k("analysis"), P = k([]), M = k(/* @__PURE__ */ new Map()), E = k(/* @__PURE__ */ new Map()), x = k(/* @__PURE__ */ new Set()), q = z(() => {
      const W = [
        { id: "analysis", label: "Analysis" }
      ];
      return (A.value || O.value) && W.push({ id: "nodes", label: "Nodes" }), I.value && W.push({ id: "models", label: "Models" }), W.push({ id: "review", label: "Review" }), $.value === "applying" && W.push({ id: "applying", label: "Applying" }), W;
    }), B = z(() => w.value ? w.value.stats.needs_user_input : !1), A = z(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), I = z(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), T = z(() => w.value ? w.value.stats.download_intents > 0 : !1), O = z(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), ce = z(() => w.value ? w.value.nodes.resolved.length : 0), Y = z(() => w.value ? w.value.models.resolved.filter((W) => W.has_category_mismatch) : []), j = z(() => Y.value.length > 0), se = z(() => A.value || O.value ? "nodes" : I.value ? "models" : "review"), ee = z(() => {
      if (!w.value) return [];
      const W = w.value.nodes.resolved.filter((de) => !de.is_installed), F = /* @__PURE__ */ new Set();
      return W.filter((de) => F.has(de.package.package_id) ? !1 : (F.add(de.package.package_id), !0));
    }), U = z(() => {
      if (!w.value) return [];
      const W = w.value.nodes.resolved.filter((de) => !de.is_installed), F = /* @__PURE__ */ new Map();
      for (const de of W) {
        const Fe = F.get(de.package.package_id);
        Fe ? Fe.node_types_count++ : F.set(de.package.package_id, {
          package_id: de.package.package_id,
          title: de.package.title,
          node_types_count: 1
        });
      }
      return Array.from(F.values());
    }), N = z(() => ee.value.filter((W) => !x.value.has(W.package.package_id))), D = z(() => w.value ? w.value.models.resolved.filter(
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
      const W = w.value.nodes.unresolved.map((de) => ({
        node_type: de.reference.node_type,
        reason: de.reason,
        is_unresolved: !0,
        options: void 0
      })), F = w.value.nodes.ambiguous.map((de) => ({
        node_type: de.reference.node_type,
        has_multiple_options: !0,
        options: de.options.map((Fe) => ({
          package_id: Fe.package.package_id,
          title: Fe.package.title,
          match_confidence: Fe.match_confidence,
          match_type: Fe.match_type,
          is_installed: Fe.is_installed
        }))
      }));
      return [...W, ...F];
    }), X = z(() => {
      if (!w.value) return [];
      const W = w.value.models.unresolved.map((de) => ({
        filename: de.reference.widget_value,
        reference: de.reference,
        reason: de.reason,
        is_unresolved: !0,
        options: void 0
      })), F = w.value.models.ambiguous.map((de) => ({
        filename: de.reference.widget_value,
        reference: de.reference,
        has_multiple_options: !0,
        options: de.options.map((Fe) => ({
          model: Fe.model,
          match_confidence: Fe.match_confidence,
          match_type: Fe.match_type,
          has_download_source: Fe.has_download_source
        }))
      }));
      return [...W, ...F];
    }), he = z(() => {
      const W = X.value, F = D.value.map((de) => ({
        filename: de.filename,
        reference: de.reference,
        is_download_intent: !0,
        resolved_model: de.resolved_model,
        download_source: de.download_source,
        target_path: de.target_path,
        options: void 0
      }));
      return [...W, ...F];
    }), Se = z(() => D.value.filter((W) => {
      const F = E.value.get(W.filename);
      return F ? F.action === "download" : !0;
    }).map((W) => ({
      filename: W.filename,
      url: W.download_source,
      target_path: W.target_path
    })));
    function ze(W, F = 50) {
      return W.length <= F ? W : W.slice(0, F - 3) + "...";
    }
    const Ve = z(() => {
      let W = N.value.length;
      for (const F of M.value.values())
        F.action === "install" && W++;
      for (const F of E.value.values())
        F.action === "select" && W++;
      return W;
    }), be = z(() => {
      let W = 0;
      for (const F of E.value.values())
        F.action === "download" && W++;
      for (const F of D.value)
        E.value.get(F.filename) || W++;
      return W;
    }), Te = z(() => {
      let W = 0;
      for (const F of M.value.values())
        F.action === "optional" && W++;
      for (const F of E.value.values())
        F.action === "optional" && W++;
      return W;
    }), He = z(() => {
      let W = x.value.size;
      for (const F of M.value.values())
        F.action === "skip" && W++;
      for (const F of E.value.values())
        F.action === "skip" && W++;
      for (const F of Z.value)
        M.value.has(F.node_type) || W++;
      for (const F of X.value)
        E.value.has(F.filename) || W++;
      return W;
    }), ke = z(() => {
      const W = {};
      if (W.analysis = { resolved: 1, total: 1 }, A.value) {
        const F = Z.value.length, de = Z.value.filter(
          (Fe) => M.value.has(Fe.node_type)
        ).length;
        W.nodes = { resolved: de, total: F };
      }
      if (I.value) {
        const F = he.value.length, de = he.value.filter(
          (Fe) => E.value.has(Fe.filename) || Fe.is_download_intent
        ).length;
        W.models = { resolved: de, total: F };
      }
      if (W.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const F = u.totalFiles || 1, de = u.completedFiles.length;
        W.applying = { resolved: de, total: F };
      }
      return W;
    });
    function ie(W) {
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
    async function L() {
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
      P.value.includes("analysis") || P.value.push("analysis"), A.value || O.value ? $.value = "nodes" : I.value ? $.value = "models" : $.value = "review";
    }
    function ne(W) {
      M.value.set(W, { action: "optional" });
    }
    function le(W) {
      M.value.set(W, { action: "skip" });
    }
    function fe(W, F) {
      var Fe;
      const de = Z.value.find((Qe) => Qe.node_type === W);
      (Fe = de == null ? void 0 : de.options) != null && Fe[F] && M.value.set(W, {
        action: "install",
        package_id: de.options[F].package_id
      });
    }
    function me(W, F) {
      M.value.set(W, {
        action: "install",
        package_id: F
      });
    }
    function Ce(W) {
      M.value.delete(W);
    }
    function xe(W) {
      x.value.has(W) ? x.value.delete(W) : x.value.add(W);
    }
    function ae(W) {
      E.value.set(W, { action: "optional" });
    }
    function ue(W) {
      E.value.set(W, { action: "skip" });
    }
    function Le(W, F) {
      var Fe;
      const de = X.value.find((Qe) => Qe.filename === W);
      (Fe = de == null ? void 0 : de.options) != null && Fe[F] && E.value.set(W, {
        action: "select",
        selected_model: de.options[F].model
      });
    }
    function Ie(W, F, de) {
      E.value.set(W, {
        action: "download",
        url: F,
        target_path: de
      });
    }
    function te(W) {
      E.value.delete(W);
    }
    async function K(W) {
      try {
        await g(W);
      } catch (F) {
        S.value = F instanceof Error ? F.message : "Failed to open file location";
      }
    }
    async function Me() {
      var W;
      _.value = !0, S.value = null, m(), u.phase = "resolving", $.value = "applying";
      try {
        const F = await i(o.workflowName, M.value, E.value, x.value);
        F.models_to_download && F.models_to_download.length > 0 && d(o.workflowName, F.models_to_download);
        const de = [
          ...F.nodes_to_install || [],
          ...N.value.map((Qe) => Qe.package.package_id)
        ];
        u.nodesToInstall = [...new Set(de)], u.nodesToInstall.length > 0 && await c(o.workflowName), u.phase = "complete", await v();
        const Fe = u.installError || ((W = u.nodeInstallProgress) == null ? void 0 : W.completedNodes.some((Qe) => !Qe.success));
        !u.needsRestart && !Fe && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (F) {
        S.value = F instanceof Error ? F.message : "Failed to apply resolution", u.error = S.value, u.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function we() {
      n("refresh"), n("restart"), n("close");
    }
    async function ye() {
      var F;
      const W = ((F = u.nodeInstallProgress) == null ? void 0 : F.completedNodes.filter((de) => !de.success).map((de) => de.node_id)) || [];
      if (W.length !== 0) {
        u.phase = "installing", u.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: W.length
        }, u.nodesToInstall = W, u.nodesInstalled = [], u.installError = void 0;
        try {
          await c(o.workflowName), u.phase = "complete";
        } catch (de) {
          u.error = de instanceof Error ? de.message : "Retry failed", u.phase = "error";
        }
      }
    }
    return et(L), (W, F) => (a(), R(pt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: S.value || void 0,
      "fixed-height": !0,
      onClose: F[1] || (F[1] = (de) => n("close"))
    }, {
      body: h(() => [
        p.value && !w.value ? (a(), r("div", wy, [...F[2] || (F[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (a(), r("div", _y, [
          C(Ip, {
            steps: q.value,
            "current-step": $.value,
            "completed-steps": P.value,
            "step-stats": ke.value,
            onStepChange: ie
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
                t("span", Yy, f(Z.value.length + X.value.length) + " items need your input", 1)
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
                  (a(!0), r(G, null, ge(Y.value, (de) => {
                    var Fe, Qe;
                    return a(), r("div", {
                      key: de.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", a1, f(de.actual_category) + "/" + f((Fe = de.model) == null ? void 0 : Fe.filename), 1),
                      F[30] || (F[30] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", l1, f((Qe = de.expected_categories) == null ? void 0 : Qe[0]) + "/", 1),
                      de.file_path ? (a(), R(Re, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (vt) => K(de.file_path)
                      }, {
                        default: h(() => [...F[29] || (F[29] = [
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
            nodes: Z.value,
            "node-choices": M.value,
            "auto-resolved-packages": U.value,
            "skipped-packages": x.value,
            onMarkOptional: ne,
            onSkip: le,
            onOptionSelected: fe,
            onManualEntry: me,
            onClearChoice: Ce,
            onPackageSkip: xe
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          $.value === "models" ? (a(), R(Bh, {
            key: 2,
            models: he.value,
            "model-choices": E.value,
            onMarkOptional: ae,
            onSkip: ue,
            onOptionSelected: Le,
            onDownloadUrl: Ie,
            onClearChoice: te
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          $.value === "review" ? (a(), r("div", i1, [
            t("div", r1, [
              F[37] || (F[37] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", c1, [
                t("div", d1, [
                  t("span", u1, f(Ve.value), 1),
                  F[32] || (F[32] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", f1, [
                  t("span", m1, f(be.value), 1),
                  F[33] || (F[33] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", v1, [
                  t("span", p1, f(Te.value), 1),
                  F[34] || (F[34] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", g1, [
                  t("span", h1, f(He.value), 1),
                  F[35] || (F[35] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              U.value.length > 0 ? (a(), r("div", y1, [
                t("h4", w1, "Node Packages (" + f(U.value.length) + ")", 1),
                t("div", _1, [
                  (a(!0), r(G, null, ge(U.value, (de) => (a(), r("div", {
                    key: de.package_id,
                    class: "review-item"
                  }, [
                    t("code", b1, f(de.package_id), 1),
                    t("div", k1, [
                      x.value.has(de.package_id) ? (a(), r("span", C1, "Skipped")) : (a(), r("span", $1, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              Z.value.length > 0 ? (a(), r("div", x1, [
                t("h4", S1, "Node Choices (" + f(Z.value.length) + ")", 1),
                t("div", I1, [
                  (a(!0), r(G, null, ge(Z.value, (de) => {
                    var Fe, Qe, vt, lt;
                    return a(), r("div", {
                      key: de.node_type,
                      class: "review-item"
                    }, [
                      t("code", E1, f(de.node_type), 1),
                      t("div", T1, [
                        M.value.has(de.node_type) ? (a(), r(G, { key: 0 }, [
                          ((Fe = M.value.get(de.node_type)) == null ? void 0 : Fe.action) === "install" ? (a(), r("span", P1, f((Qe = M.value.get(de.node_type)) == null ? void 0 : Qe.package_id), 1)) : ((vt = M.value.get(de.node_type)) == null ? void 0 : vt.action) === "optional" ? (a(), r("span", R1, " Optional ")) : ((lt = M.value.get(de.node_type)) == null ? void 0 : lt.action) === "skip" ? (a(), r("span", M1, " Skip ")) : y("", !0)
                        ], 64)) : (a(), r("span", D1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Se.value.length > 0 ? (a(), r("div", L1, [
                t("h4", O1, "Models to Download (" + f(Se.value.length) + ")", 1),
                t("div", A1, [
                  (a(!0), r(G, null, ge(Se.value, (de) => (a(), r("div", {
                    key: de.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", N1, [
                      t("code", U1, f(de.filename), 1),
                      t("div", z1, [
                        t("span", F1, "→ " + f(de.target_path), 1),
                        de.url ? (a(), r("span", {
                          key: 0,
                          class: "download-url",
                          title: de.url
                        }, f(ze(de.url)), 9, B1)) : y("", !0)
                      ])
                    ]),
                    F[36] || (F[36] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              he.value.length > 0 ? (a(), r("div", V1, [
                t("h4", W1, "Models (" + f(he.value.length) + ")", 1),
                t("div", G1, [
                  (a(!0), r(G, null, ge(he.value, (de) => {
                    var Fe, Qe, vt, lt, ut, Rt, Ut;
                    return a(), r("div", {
                      key: de.filename,
                      class: "review-item"
                    }, [
                      t("code", j1, f(de.filename), 1),
                      t("div", H1, [
                        E.value.has(de.filename) ? (a(), r(G, { key: 0 }, [
                          ((Fe = E.value.get(de.filename)) == null ? void 0 : Fe.action) === "select" ? (a(), r("span", K1, f((vt = (Qe = E.value.get(de.filename)) == null ? void 0 : Qe.selected_model) == null ? void 0 : vt.filename), 1)) : ((lt = E.value.get(de.filename)) == null ? void 0 : lt.action) === "download" ? (a(), r("span", q1, " Download ")) : ((ut = E.value.get(de.filename)) == null ? void 0 : ut.action) === "optional" ? (a(), r("span", Y1, " Optional ")) : ((Rt = E.value.get(de.filename)) == null ? void 0 : Rt.action) === "skip" ? (a(), r("span", J1, " Skip ")) : ((Ut = E.value.get(de.filename)) == null ? void 0 : Ut.action) === "cancel_download" ? (a(), r("span", X1, " Cancel Download ")) : y("", !0)
                        ], 64)) : de.is_download_intent ? (a(), r("span", Q1, " Pending Download ")) : (a(), r("span", Z1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ee.value.length === 0 && Z.value.length === 0 && he.value.length === 0 ? (a(), r("div", e0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          $.value === "applying" ? (a(), R(yy, {
            key: 4,
            progress: Be(u),
            onRestart: we,
            onRetryFailed: ye
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        $.value !== "analysis" && $.value !== "applying" ? (a(), R(Re, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: Ge
        }, {
          default: h(() => [...F[38] || (F[38] = [
            b(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        F[41] || (F[41] = t("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || Be(u).phase === "complete" || Be(u).phase === "error" ? (a(), R(Re, {
          key: 1,
          variant: "secondary",
          onClick: F[0] || (F[0] = (de) => n("close"))
        }, {
          default: h(() => [
            b(f(Be(u).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "analysis" ? (a(), R(Re, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: V
        }, {
          default: h(() => [
            b(f(se.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        $.value === "nodes" ? (a(), R(Re, {
          key: 3,
          variant: "primary",
          onClick: Pe
        }, {
          default: h(() => [
            b(f(I.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "models" ? (a(), R(Re, {
          key: 4,
          variant: "primary",
          onClick: Pe
        }, {
          default: h(() => [...F[39] || (F[39] = [
            b(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        $.value === "review" ? (a(), R(Re, {
          key: 5,
          variant: "primary",
          disabled: _.value,
          loading: _.value,
          onClick: Me
        }, {
          default: h(() => [...F[40] || (F[40] = [
            b(" Apply Resolution ", -1)
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
    const o = e, n = s, l = k(null);
    let i;
    function c(u) {
      const m = u.target.value;
      o.debounce > 0 ? (clearTimeout(i), i = window.setTimeout(() => {
        n("update:modelValue", m);
      }, o.debounce)) : n("update:modelValue", m);
    }
    function d() {
      var u;
      n("update:modelValue", ""), n("clear"), (u = l.value) == null || u.focus();
    }
    return et(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (u, m) => (a(), r("div", o0, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: Qt(d, ["escape"])
      }, null, 40, n0),
      e.clearable && e.modelValue ? (a(), r("button", {
        key: 0,
        class: "clear-button",
        onClick: d,
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
}), bo = /* @__PURE__ */ pe(r0, [["__scopeId", "data-v-3d51bbfd"]]), c0 = { class: "section-group" }, d0 = {
  key: 0,
  class: "section-content"
}, u0 = /* @__PURE__ */ ve({
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
    return (c, d) => (a(), r("section", c0, [
      C(Ot, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: i
      }, {
        default: h(() => [
          b(f(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (a(), r("div", d0, [
        qe(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), it = /* @__PURE__ */ pe(u0, [["__scopeId", "data-v-c48e33ed"]]), f0 = { class: "item-header" }, m0 = {
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
      class: Ee(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
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
      e.retry ? (a(), R(re, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => s.$emit("retry"))
      }, {
        default: h(() => [...o[1] || (o[1] = [
          b(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Ts = /* @__PURE__ */ pe(x0, [["__scopeId", "data-v-5397be48"]]), S0 = /* @__PURE__ */ ve({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getWorkflows: l } = at(), i = k([]), c = k(!1), d = k(null), u = k(""), m = k(!0), v = k(!1), g = k(!1), w = k(!1), p = k(null), _ = z(
      () => i.value.filter((U) => U.status === "broken")
    ), S = z(
      () => i.value.filter((U) => U.status === "new")
    ), $ = z(
      () => i.value.filter((U) => U.status === "modified")
    ), P = z(
      () => i.value.filter((U) => U.status === "synced")
    ), M = z(() => {
      if (!u.value.trim()) return i.value;
      const U = u.value.toLowerCase();
      return i.value.filter((N) => N.name.toLowerCase().includes(U));
    }), E = z(
      () => _.value.filter(
        (U) => !u.value.trim() || U.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), x = z(
      () => S.value.filter(
        (U) => !u.value.trim() || U.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), q = z(
      () => $.value.filter(
        (U) => !u.value.trim() || U.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), B = z(
      () => P.value.filter(
        (U) => !u.value.trim() || U.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), A = z(
      () => v.value ? B.value : B.value.slice(0, 5)
    );
    async function I(U = !1) {
      c.value = !0, d.value = null;
      try {
        i.value = await l(U);
      } catch (N) {
        d.value = N instanceof Error ? N.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    s({ loadWorkflows: I });
    function T(U) {
      p.value = U, g.value = !0;
    }
    function O(U) {
      p.value = U, w.value = !0;
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
    function se(U) {
      const N = [];
      return U.missing_nodes > 0 && N.push(`${U.missing_nodes} missing node${U.missing_nodes > 1 ? "s" : ""}`), U.missing_models > 0 && N.push(`${U.missing_models} missing model${U.missing_models > 1 ? "s" : ""}`), U.models_with_category_mismatch && U.models_with_category_mismatch > 0 && N.push(`${U.models_with_category_mismatch} model${U.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), U.pending_downloads && U.pending_downloads > 0 && N.push(`${U.pending_downloads} pending download${U.pending_downloads > 1 ? "s" : ""}`), N.length > 0 ? N.join(", ") : "Has issues";
    }
    function ee(U) {
      const N = U.sync_state === "new" ? "New" : U.sync_state === "modified" ? "Modified" : U.sync_state === "synced" ? "Synced" : U.sync_state;
      return U.has_path_sync_issues && U.models_needing_path_sync && U.models_needing_path_sync > 0 ? `${U.models_needing_path_sync} model path${U.models_needing_path_sync > 1 ? "s" : ""} need${U.models_needing_path_sync === 1 ? "s" : ""} sync` : N || "Unknown";
    }
    return et(I), (U, N) => (a(), r(G, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          C(bo, {
            modelValue: u.value,
            "onUpdate:modelValue": N[0] || (N[0] = (D) => u.value = D),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (a(), R(Es, {
            key: 0,
            message: "Loading workflows..."
          })) : d.value ? (a(), R(Ts, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            E.value.length ? (a(), R(it, {
              key: 0,
              title: "BROKEN",
              count: E.value.length
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge(E.value, (D) => (a(), R(Et, {
                  key: D.name,
                  status: "broken"
                }, {
                  icon: h(() => [...N[7] || (N[7] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(D.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(se(D)), 1)
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Z) => O(D.name)
                    }, {
                      default: h(() => [...N[8] || (N[8] = [
                        b(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Z) => T(D.name)
                    }, {
                      default: h(() => [...N[9] || (N[9] = [
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
            x.value.length ? (a(), R(it, {
              key: 1,
              title: "NEW",
              count: x.value.length
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge(x.value, (D) => (a(), R(Et, {
                  key: D.name,
                  status: D.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    b(f(D.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    b(f(D.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(ee(D)), 1)
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Z) => T(D.name)
                    }, {
                      default: h(() => [...N[10] || (N[10] = [
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
            q.value.length ? (a(), R(it, {
              key: 2,
              title: "MODIFIED",
              count: q.value.length
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge(q.value, (D) => (a(), R(Et, {
                  key: D.name,
                  status: D.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...N[11] || (N[11] = [
                    b("⚡", -1)
                  ])]),
                  title: h(() => [
                    b(f(D.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(ee(D)), 1)
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Z) => T(D.name)
                    }, {
                      default: h(() => [...N[12] || (N[12] = [
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
            B.value.length ? (a(), R(it, {
              key: 3,
              title: "SYNCED",
              count: B.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: N[2] || (N[2] = (D) => m.value = D)
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge(A.value, (D) => (a(), R(Et, {
                  key: D.name,
                  status: D.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    b(f(D.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    b(f(D.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(ee(D)), 1)
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Z) => T(D.name)
                    }, {
                      default: h(() => [...N[13] || (N[13] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && B.value.length > 5 ? (a(), R(re, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: N[1] || (N[1] = (D) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    b(" View all " + f(B.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            M.value.length ? y("", !0) : (a(), R(os, {
              key: 4,
              icon: "📭",
              message: u.value ? `No workflows match '${u.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g.value && p.value ? (a(), R(pp, {
        key: 0,
        "workflow-name": p.value,
        onClose: N[3] || (N[3] = (D) => g.value = !1),
        onResolve: N[4] || (N[4] = (D) => O(p.value)),
        onRefresh: N[5] || (N[5] = (D) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (a(), R(s0, {
        key: 1,
        "workflow-name": p.value,
        onClose: Y,
        onInstall: ce,
        onRefresh: N[6] || (N[6] = (D) => n("refresh")),
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
      class: Ee(["summary-bar", e.variant])
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
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: i, openFileLocation: c } = at(), d = k(null), u = k(!0), m = k(null), v = k(""), g = k(!1), w = k(null), p = k(null), _ = k(null), S = k(null);
    let $ = null;
    function P(I, T = "success", O = 2e3) {
      $ && clearTimeout($), S.value = { message: I, type: T }, $ = setTimeout(() => {
        S.value = null;
      }, O);
    }
    function M(I) {
      if (!I) return "Unknown";
      const T = 1024 * 1024 * 1024, O = 1024 * 1024;
      return I >= T ? `${(I / T).toFixed(1)} GB` : I >= O ? `${(I / O).toFixed(0)} MB` : `${(I / 1024).toFixed(0)} KB`;
    }
    function E(I) {
      navigator.clipboard.writeText(I), P("Copied to clipboard!");
    }
    async function x(I) {
      try {
        await c(I), P("Opening file location...");
      } catch {
        P("Failed to open location", "error");
      }
    }
    async function q() {
      if (!(!v.value.trim() || !d.value)) {
        g.value = !0, p.value = null, _.value = null;
        try {
          await l(d.value.hash, v.value.trim()), _.value = "Source added successfully!", v.value = "", await A();
        } catch (I) {
          p.value = I instanceof Error ? I.message : "Failed to add source";
        } finally {
          g.value = !1;
        }
      }
    }
    async function B(I) {
      if (d.value) {
        w.value = I, p.value = null, _.value = null;
        try {
          await i(d.value.hash, I), P("Source removed"), await A();
        } catch (T) {
          p.value = T instanceof Error ? T.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function A() {
      u.value = !0, m.value = null;
      try {
        d.value = await n(o.identifier);
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load model details";
      } finally {
        u.value = !1;
      }
    }
    return et(A), (I, T) => {
      var O;
      return a(), r(G, null, [
        C(pt, {
          title: `Model Details: ${((O = d.value) == null ? void 0 : O.filename) || "Loading..."}`,
          size: "lg",
          loading: u.value,
          error: m.value,
          onClose: T[5] || (T[5] = (ce) => I.$emit("close"))
        }, {
          body: h(() => {
            var ce, Y, j, se;
            return [
              d.value ? (a(), r("div", T0, [
                t("section", P0, [
                  t("div", R0, [
                    T[6] || (T[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", M0, f(d.value.hash || "Not computed"), 1),
                    d.value.hash ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[0] || (T[0] = (ee) => E(d.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", D0, [
                    T[7] || (T[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", L0, f(d.value.blake3 || "Not computed"), 1),
                    d.value.blake3 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[1] || (T[1] = (ee) => E(d.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", O0, [
                    T[8] || (T[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", A0, f(d.value.sha256 || "Not computed"), 1),
                    d.value.sha256 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[2] || (T[2] = (ee) => E(d.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", N0, [
                    T[9] || (T[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", U0, f(M(d.value.size)), 1)
                  ]),
                  t("div", z0, [
                    T[10] || (T[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", F0, f(d.value.category), 1)
                  ]),
                  t("div", B0, [
                    T[11] || (T[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", V0, f(d.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", W0, [
                  t("h4", G0, "Locations (" + f(((ce = d.value.locations) == null ? void 0 : ce.length) || 0) + ")", 1),
                  (Y = d.value.locations) != null && Y.length ? (a(), r("div", j0, [
                    (a(!0), r(G, null, ge(d.value.locations, (ee, U) => (a(), r("div", {
                      key: U,
                      class: "location-item"
                    }, [
                      t("span", H0, f(ee.path), 1),
                      ee.modified ? (a(), r("span", K0, "Modified: " + f(ee.modified), 1)) : y("", !0),
                      ee.path ? (a(), r("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (N) => x(ee.path)
                      }, " Open File Location ", 8, q0)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), r("div", Y0, "No locations found"))
                ]),
                t("section", J0, [
                  t("h4", X0, "Download Sources (" + f(((j = d.value.sources) == null ? void 0 : j.length) || 0) + ")", 1),
                  (se = d.value.sources) != null && se.length ? (a(), r("div", Q0, [
                    (a(!0), r(G, null, ge(d.value.sources, (ee, U) => (a(), r("div", {
                      key: U,
                      class: "source-item"
                    }, [
                      t("span", Z0, f(ee.type) + ":", 1),
                      t("a", {
                        href: ee.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(ee.url), 9, ew),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === ee.url,
                        onClick: (N) => B(ee.url)
                      }, f(w.value === ee.url ? "..." : "×"), 9, tw)
                    ]))), 128))
                  ])) : (a(), r("div", sw, " No download sources configured ")),
                  t("div", ow, [
                    Ye(t("input", {
                      "onUpdate:modelValue": T[3] || (T[3] = (ee) => v.value = ee),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Nt, v.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || g.value,
                      onClick: q
                    }, f(g.value ? "Adding..." : "Add Source"), 9, nw)
                  ]),
                  p.value ? (a(), r("p", aw, f(p.value), 1)) : y("", !0),
                  _.value ? (a(), r("p", lw, f(_.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            t("button", {
              class: "btn-secondary",
              onClick: T[4] || (T[4] = (ce) => I.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (a(), R(wt, { to: "body" }, [
          S.value ? (a(), r("div", {
            key: 0,
            class: Ee(["toast", S.value.type])
          }, f(S.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), Xa = /* @__PURE__ */ pe(iw, [["__scopeId", "data-v-f15cbb56"]]), rw = /* @__PURE__ */ ve({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: n, getStatus: l } = at(), i = k([]), c = k([]), d = k("production"), u = k(!1), m = k(null), v = k(""), g = k(!1), w = k(null);
    function p() {
      g.value = !1, o("navigate", "model-index");
    }
    const _ = z(
      () => i.value.reduce((A, I) => A + (I.size || 0), 0)
    ), S = z(() => {
      if (!v.value.trim()) return i.value;
      const A = v.value.toLowerCase();
      return i.value.filter((I) => I.filename.toLowerCase().includes(A));
    }), $ = z(() => {
      if (!v.value.trim()) return c.value;
      const A = v.value.toLowerCase();
      return c.value.filter((I) => I.filename.toLowerCase().includes(A));
    }), P = z(() => {
      const A = {};
      for (const T of S.value) {
        const O = T.type || "other";
        A[O] || (A[O] = []), A[O].push(T);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(A).sort(([T], [O]) => {
        const ce = I.indexOf(T), Y = I.indexOf(O);
        return ce >= 0 && Y >= 0 ? ce - Y : ce >= 0 ? -1 : Y >= 0 ? 1 : T.localeCompare(O);
      }).map(([T, O]) => ({ type: T, models: O }));
    });
    function M(A) {
      if (!A) return "Unknown";
      const I = A / (1024 * 1024);
      return I >= 1024 ? `${(I / 1024).toFixed(1)} GB` : `${I.toFixed(0)} MB`;
    }
    function E(A) {
      w.value = A.hash || A.filename;
    }
    function x(A) {
      o("navigate", "model-index");
    }
    function q(A) {
      alert(`Download functionality not yet implemented for ${A}`);
    }
    async function B() {
      u.value = !0, m.value = null;
      try {
        const A = await n();
        i.value = A, c.value = [];
        const I = await l();
        d.value = I.environment || "production";
      } catch (A) {
        m.value = A instanceof Error ? A.message : "Failed to load models";
      } finally {
        u.value = !1;
      }
    }
    return et(B), (A, I) => (a(), r(G, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (T) => g.value = !0)
          })
        ]),
        search: h(() => [
          C(bo, {
            modelValue: v.value,
            "onUpdate:modelValue": I[1] || (I[1] = (T) => v.value = T),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (a(), R(Es, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (a(), R(Ts, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            i.value.length ? (a(), R(on, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(i.value.length) + " models • " + f(M(_.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(G, null, ge(P.value, (T) => (a(), R(it, {
              key: T.type,
              title: T.type.toUpperCase(),
              count: T.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge(T.models, (O) => (a(), R(Et, {
                  key: O.hash || O.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...I[4] || (I[4] = [
                    b("📦", -1)
                  ])]),
                  title: h(() => [
                    b(f(O.filename), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(M(O.size)), 1)
                  ]),
                  details: h(() => [
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
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ce) => E(O)
                    }, {
                      default: h(() => [...I[5] || (I[5] = [
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
            $.value.length ? (a(), R(it, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge($.value, (T) => (a(), R(Et, {
                  key: T.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...I[6] || (I[6] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(T.filename), 1)
                  ]),
                  subtitle: h(() => [...I[7] || (I[7] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var O;
                    return [
                      C(ft, {
                        label: "Required by:",
                        value: ((O = T.workflow_names) == null ? void 0 : O.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => q(T.filename)
                    }, {
                      default: h(() => [...I[8] || (I[8] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => x(T.filename)
                    }, {
                      default: h(() => [...I[9] || (I[9] = [
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
            !S.value.length && !$.value.length ? (a(), R(os, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      C(ns, {
        show: g.value,
        title: "About Environment Models",
        onClose: I[2] || (I[2] = (T) => g.value = !1)
      }, {
        content: h(() => [
          t("p", null, [
            I[10] || (I[10] = b(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + f(d.value) + '"', 1),
            I[11] || (I[11] = b(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          C(re, {
            variant: "primary",
            onClick: p
          }, {
            default: h(() => [...I[12] || (I[12] = [
              b(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), R(Xa, {
        key: 0,
        identifier: w.value,
        onClose: I[3] || (I[3] = (T) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), cw = /* @__PURE__ */ pe(rw, [["__scopeId", "data-v-cb4f12b3"]]), dw = {
  key: 0,
  class: "indexing-progress"
}, uw = { class: "progress-info" }, fw = { class: "progress-label" }, mw = { class: "progress-count" }, vw = { class: "progress-bar" }, pw = { class: "modal-content" }, gw = { class: "modal-header" }, hw = { class: "modal-body" }, yw = { class: "input-group" }, ww = { class: "current-path" }, _w = { class: "input-group" }, bw = { class: "modal-footer" }, kw = { class: "modal-content" }, $w = { class: "modal-header" }, Cw = { class: "modal-body" }, xw = { class: "input-group" }, Sw = { class: "input-group" }, Iw = { class: "modal-footer" }, Ew = /* @__PURE__ */ ve({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: i
    } = at(), { addToQueue: c } = _o(), d = s, u = k([]), m = k(!1), v = k(!1), g = k(null), w = k(""), p = k(!1), _ = k(null), S = k(!1), $ = k(null), P = k(""), M = k(!1), E = k(!1), x = k(""), q = k(""), B = k(null), A = z(
      () => u.value.reduce((N, D) => N + (D.size || 0), 0)
    ), I = z(() => {
      if (!w.value.trim()) return u.value;
      const N = w.value.toLowerCase();
      return u.value.filter((D) => {
        const Z = D, X = D.sha256 || Z.sha256_hash || "";
        return D.filename.toLowerCase().includes(N) || X.toLowerCase().includes(N);
      });
    }), T = z(() => {
      const N = {};
      for (const Z of I.value) {
        const X = Z.type || "other";
        N[X] || (N[X] = []), N[X].push(Z);
      }
      const D = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(N).sort(([Z], [X]) => {
        const he = D.indexOf(Z), Se = D.indexOf(X);
        return he >= 0 && Se >= 0 ? he - Se : he >= 0 ? -1 : Se >= 0 ? 1 : Z.localeCompare(X);
      }).map(([Z, X]) => ({ type: Z, models: X }));
    });
    function O(N) {
      if (!N) return "Unknown";
      const D = 1024 * 1024 * 1024, Z = 1024 * 1024;
      return N >= D ? `${(N / D).toFixed(1)} GB` : N >= Z ? `${(N / Z).toFixed(0)} MB` : `${(N / 1024).toFixed(0)} KB`;
    }
    function ce(N) {
      _.value = N.hash || N.filename;
    }
    async function Y() {
      v.value = !0, g.value = null;
      try {
        const N = await n();
        await ee(), N.changes > 0 && console.log(`Scan complete: ${N.changes} changes detected`);
      } catch (N) {
        g.value = N instanceof Error ? N.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function j() {
      if (P.value.trim()) {
        M.value = !0, g.value = null;
        try {
          const N = await i(P.value.trim());
          $.value = N.path, S.value = !1, P.value = "", await ee(), console.log(`Directory changed: ${N.models_indexed} models indexed`), d("refresh");
        } catch (N) {
          g.value = N instanceof Error ? N.message : "Failed to change directory";
        } finally {
          M.value = !1;
        }
      }
    }
    function se() {
      if (!x.value.trim() || !q.value.trim()) return;
      const N = q.value.split("/").pop() || "model.safetensors";
      c([{
        workflow: "__manual__",
        filename: N,
        url: x.value.trim(),
        targetPath: q.value.trim()
      }]), x.value = "", q.value = "", E.value = !1;
    }
    async function ee() {
      m.value = !0, g.value = null;
      try {
        u.value = await o();
      } catch (N) {
        g.value = N instanceof Error ? N.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function U() {
      try {
        const N = await l();
        $.value = N.path;
      } catch {
      }
    }
    return et(() => {
      ee(), U();
    }), (N, D) => (a(), r(G, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: D[2] || (D[2] = (Z) => p.value = !0)
          }, {
            actions: h(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: Y
              }, {
                default: h(() => [
                  b(f(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: D[0] || (D[0] = (Z) => S.value = !0)
              }, {
                default: h(() => [...D[15] || (D[15] = [
                  b(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: D[1] || (D[1] = (Z) => E.value = !0)
              }, {
                default: h(() => [...D[16] || (D[16] = [
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
        search: h(() => [
          B.value ? (a(), r("div", dw, [
            t("div", uw, [
              t("span", fw, f(B.value.message), 1),
              t("span", mw, f(B.value.current) + "/" + f(B.value.total), 1)
            ]),
            t("div", vw, [
              t("div", {
                class: "progress-fill",
                style: jt({ width: `${B.value.current / B.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          C(bo, {
            modelValue: w.value,
            "onUpdate:modelValue": D[3] || (D[3] = (Z) => w.value = Z),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          m.value || B.value ? (a(), R(Es, {
            key: 0,
            message: B.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : g.value ? (a(), R(Ts, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: ee
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            u.value.length ? (a(), R(on, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(u.value.length) + " models • " + f(O(A.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(G, null, ge(T.value, (Z) => (a(), R(it, {
              key: Z.type,
              title: Z.type.toUpperCase(),
              count: Z.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge(Z.models, (X) => (a(), R(Et, {
                  key: X.sha256 || X.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...D[17] || (D[17] = [
                    b("📦", -1)
                  ])]),
                  title: h(() => [
                    b(f(X.filename), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(O(X.size)), 1)
                  ]),
                  details: h(() => [
                    C(ft, {
                      label: "Hash:",
                      value: X.hash ? X.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (he) => ce(X)
                    }, {
                      default: h(() => [...D[18] || (D[18] = [
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
            I.value.length ? y("", !0) : (a(), R(os, {
              key: 1,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      C(ns, {
        show: p.value,
        title: "About Workspace Model Index",
        onClose: D[4] || (D[4] = (Z) => p.value = !1)
      }, {
        content: h(() => [...D[19] || (D[19] = [
          t("p", null, [
            b(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            b(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      _.value ? (a(), R(Xa, {
        key: 0,
        identifier: _.value,
        onClose: D[5] || (D[5] = (Z) => _.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (a(), R(wt, { to: "body" }, [
        S.value ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: D[9] || (D[9] = rt((Z) => S.value = !1, ["self"]))
        }, [
          t("div", pw, [
            t("div", gw, [
              D[20] || (D[20] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: D[6] || (D[6] = (Z) => S.value = !1)
              }, "✕")
            ]),
            t("div", hw, [
              t("div", yw, [
                D[21] || (D[21] = t("label", null, "Current Directory", -1)),
                t("code", ww, f($.value || "Not set"), 1)
              ]),
              t("div", _w, [
                D[22] || (D[22] = t("label", null, "New Directory Path", -1)),
                C(Zt, {
                  modelValue: P.value,
                  "onUpdate:modelValue": D[7] || (D[7] = (Z) => P.value = Z),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              D[23] || (D[23] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", bw, [
              C(Re, {
                variant: "secondary",
                onClick: D[8] || (D[8] = (Z) => S.value = !1)
              }, {
                default: h(() => [...D[24] || (D[24] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(Re, {
                variant: "primary",
                disabled: !P.value.trim() || M.value,
                loading: M.value,
                onClick: j
              }, {
                default: h(() => [
                  b(f(M.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      (a(), R(wt, { to: "body" }, [
        E.value ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: D[14] || (D[14] = rt((Z) => E.value = !1, ["self"]))
        }, [
          t("div", kw, [
            t("div", $w, [
              D[25] || (D[25] = t("h3", null, "Download New Model", -1)),
              t("button", {
                class: "modal-close",
                onClick: D[10] || (D[10] = (Z) => E.value = !1)
              }, "✕")
            ]),
            t("div", Cw, [
              t("div", xw, [
                D[26] || (D[26] = t("label", null, "Download URL", -1)),
                C(Zt, {
                  modelValue: x.value,
                  "onUpdate:modelValue": D[11] || (D[11] = (Z) => x.value = Z),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              t("div", Sw, [
                D[27] || (D[27] = t("label", null, "Target Path (relative to models directory)", -1)),
                C(Zt, {
                  modelValue: q.value,
                  "onUpdate:modelValue": D[12] || (D[12] = (Z) => q.value = Z),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              D[28] || (D[28] = t("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            t("div", Iw, [
              C(Re, {
                variant: "secondary",
                onClick: D[13] || (D[13] = (Z) => E.value = !1)
              }, {
                default: h(() => [...D[29] || (D[29] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(Re, {
                variant: "primary",
                disabled: !x.value.trim() || !q.value.trim(),
                onClick: se
              }, {
                default: h(() => [...D[30] || (D[30] = [
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
    return (d, u) => (a(), R(pt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: u[1] || (u[1] = (m) => n("close"))
    }, {
      body: h(() => [
        t("div", Pw, [
          t("div", Rw, [
            u[2] || (u[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Ee(["status-badge", l.value])
            }, f(i.value), 3)
          ]),
          e.node.version ? (a(), r("div", Mw, [
            u[3] || (u[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", Dw, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          t("div", Lw, [
            u[4] || (u[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", Ow, f(c.value), 1)
          ]),
          e.node.registry_id ? (a(), r("div", Aw, [
            u[5] || (u[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", Nw, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), r("div", Uw, [
            u[7] || (u[7] = t("span", { class: "label" }, "Repository:", -1)),
            t("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              b(f(e.node.repository) + " ", 1),
              u[6] || (u[6] = t("svg", {
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
            u[8] || (u[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", Bw, f(e.node.download_url), 1)
          ])) : y("", !0),
          u[10] || (u[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", Vw, [
            u[9] || (u[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), r("span", Ww, " Not used in any workflows ")) : (a(), r("div", Gw, [
              (a(!0), r(G, null, ge(e.node.used_in_workflows, (m) => (a(), r("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        C(Re, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (m) => n("close"))
        }, {
          default: h(() => [...u[11] || (u[11] = [
            b(" Close ", -1)
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
    return (s, o) => (a(), R(pt, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => s.$emit("cancel"))
    }, {
      body: h(() => [
        t("p", Kw, f(e.message), 1),
        e.details && e.details.length ? (a(), r("div", qw, [
          (a(!0), r(G, null, ge(e.details, (n, l) => (a(), r("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), r("p", Yw, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          b(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        C(Re, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => s.$emit("cancel"))
        }, {
          default: h(() => [
            b(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), R(Re, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => s.$emit("secondary"))
        }, {
          default: h(() => [
            b(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        C(Re, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (n) => s.$emit("confirm"))
        }, {
          default: h(() => [
            b(f(e.confirmLabel), 1)
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
    const o = e, n = s, { getNodes: l, trackNodeAsDev: i, installNode: c, uninstallNode: d } = at(), u = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), m = k(!1), v = k(null), g = k(""), w = k(!1), p = k(null), _ = k(null), S = z(() => {
      if (!g.value.trim()) return u.value.nodes;
      const Y = g.value.toLowerCase();
      return u.value.nodes.filter(
        (j) => {
          var se, ee;
          return j.name.toLowerCase().includes(Y) || ((se = j.description) == null ? void 0 : se.toLowerCase().includes(Y)) || ((ee = j.repository) == null ? void 0 : ee.toLowerCase().includes(Y));
        }
      );
    }), $ = z(
      () => S.value.filter((Y) => Y.installed && Y.tracked)
    ), P = z(
      () => S.value.filter((Y) => !Y.installed && Y.tracked)
    ), M = z(
      () => S.value.filter((Y) => Y.installed && !Y.tracked)
    );
    function E(Y) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[Y] || Y;
    }
    const x = z(() => o.versionMismatches.length > 0);
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
            const j = await d(Y);
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
        u.value = await l();
      } catch (Y) {
        v.value = Y instanceof Error ? Y.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return et(ce), (Y, j) => (a(), r(G, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: j[0] || (j[0] = (se) => w.value = !0)
          }, {
            actions: h(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: A
              }, {
                default: h(() => [...j[7] || (j[7] = [
                  b(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          C(bo, {
            modelValue: g.value,
            "onUpdate:modelValue": j[1] || (j[1] = (se) => g.value = se),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          m.value ? (a(), R(Es, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (a(), R(Ts, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: ce
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            u.value.total_count ? (a(), R(on, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(f(u.value.installed_count) + " installed ", 1),
                u.value.missing_count ? (a(), r(G, { key: 0 }, [
                  b(" • " + f(u.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                u.value.untracked_count ? (a(), r(G, { key: 1 }, [
                  b(" • " + f(u.value.untracked_count) + " untracked", 1)
                ], 64)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            x.value ? (a(), R(it, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                t("div", Xw, [
                  j[8] || (j[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), r(G, null, ge(e.versionMismatches, (se) => (a(), R(Et, {
                  key: se.name,
                  status: "warning"
                }, {
                  icon: h(() => [...j[9] || (j[9] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(se.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", Qw, [
                      t("span", Zw, f(se.actual), 1),
                      j[10] || (j[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", e_, f(se.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "warning",
                      size: "sm",
                      onClick: j[2] || (j[2] = (ee) => n("repair-environment"))
                    }, {
                      default: h(() => [...j[11] || (j[11] = [
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
            M.value.length ? (a(), R(it, {
              key: 2,
              title: "UNTRACKED",
              count: M.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge(M.value, (se) => (a(), R(Et, {
                  key: se.name,
                  status: "warning"
                }, {
                  icon: h(() => [...j[12] || (j[12] = [
                    b("?", -1)
                  ])]),
                  title: h(() => [
                    b(f(se.name), 1)
                  ]),
                  subtitle: h(() => [...j[13] || (j[13] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    C(ft, {
                      label: "Used by:",
                      value: q(se)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ee) => B(se)
                    }, {
                      default: h(() => [...j[14] || (j[14] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ee) => I(se.name)
                    }, {
                      default: h(() => [...j[15] || (j[15] = [
                        b(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (ee) => T(se.name)
                    }, {
                      default: h(() => [...j[16] || (j[16] = [
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
            $.value.length ? (a(), R(it, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge($.value, (se) => (a(), R(Et, {
                  key: se.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    b(f(se.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    b(f(se.name), 1)
                  ]),
                  subtitle: h(() => [
                    se.version ? (a(), r("span", t_, f(se.source === "development" ? "" : "v") + f(se.version), 1)) : (a(), r("span", s_, "version unknown")),
                    t("span", o_, " • " + f(E(se.source)), 1)
                  ]),
                  details: h(() => [
                    C(ft, {
                      label: "Used by:",
                      value: q(se)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ee) => B(se)
                    }, {
                      default: h(() => [...j[17] || (j[17] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: A
                    }, {
                      default: h(() => [...j[18] || (j[18] = [
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
            P.value.length ? (a(), R(it, {
              key: 4,
              title: "MISSING",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge(P.value, (se) => (a(), R(Et, {
                  key: se.name,
                  status: "missing"
                }, {
                  icon: h(() => [...j[19] || (j[19] = [
                    b("!", -1)
                  ])]),
                  title: h(() => [
                    b(f(se.name), 1)
                  ]),
                  subtitle: h(() => [...j[20] || (j[20] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    C(ft, {
                      label: "Required by:",
                      value: q(se)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ee) => B(se)
                    }, {
                      default: h(() => [...j[21] || (j[21] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ee) => O(se.name)
                    }, {
                      default: h(() => [...j[22] || (j[22] = [
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
            !$.value.length && !P.value.length && !M.value.length ? (a(), R(os, {
              key: 5,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      C(ns, {
        show: w.value,
        title: "About Custom Nodes",
        onClose: j[4] || (j[4] = (se) => w.value = !1)
      }, {
        content: h(() => [...j[23] || (j[23] = [
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
        actions: h(() => [
          C(re, {
            variant: "primary",
            onClick: j[3] || (j[3] = (se) => w.value = !1)
          }, {
            default: h(() => [...j[24] || (j[24] = [
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
        onClose: j[5] || (j[5] = (se) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      _.value ? (a(), R(Qa, {
        key: 1,
        title: _.value.title,
        message: _.value.message,
        warning: _.value.warning,
        "confirm-label": _.value.confirmLabel,
        destructive: _.value.destructive,
        onConfirm: _.value.onConfirm,
        onCancel: j[6] || (j[6] = (se) => _.value = null)
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
}, d_ = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, u_ = /* @__PURE__ */ ve({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = k(!1), n = z(() => {
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
        class: Ee(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), r("svg", d_, [...c[1] || (c[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), r("svg", c_, [...c[0] || (c[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, r_)
    ]));
  }
}), f_ = /* @__PURE__ */ pe(u_, [["__scopeId", "data-v-7768a58d"]]), m_ = { class: "remote-title" }, v_ = {
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
    const s = e, o = z(() => s.fetchingRemote === s.remote.name), n = z(() => s.remote.is_default), l = z(() => s.syncStatus && s.syncStatus.behind > 0), i = z(() => s.syncStatus && s.syncStatus.ahead > 0), c = z(() => s.remote.push_url !== s.remote.fetch_url), d = z(() => {
      const m = s.remote.fetch_url, v = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), u = z(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, v) => (a(), R(Et, {
      status: n.value ? "synced" : void 0
    }, eo({
      icon: h(() => [
        b(f(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
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
      subtitle: h(() => [
        d.value ? (a(), r("a", {
          key: 0,
          href: d.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: v[0] || (v[0] = rt(() => {
          }, ["stop"]))
        }, f(u.value), 9, w_)) : (a(), r("span", __, f(u.value), 1))
      ]),
      actions: h(() => [
        C(re, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: v[1] || (v[1] = (g) => m.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...v[6] || (v[6] = [
            b(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        C(re, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[2] || (v[2] = (g) => m.$emit("pull", e.remote.name))
        }, {
          default: h(() => [
            b(" Pull" + f(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        C(re, {
          variant: i.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[3] || (v[3] = (g) => m.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            b(" Push" + f(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        C(re, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (g) => m.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            b(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? y("", !0) : (a(), R(re, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[5] || (v[5] = (g) => m.$emit("remove", e.remote.name))
        }, {
          default: h(() => [...v[8] || (v[8] = [
            b(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      c.value ? {
        name: "details",
        fn: h(() => [
          e.remote.push_url !== e.remote.fetch_url ? (a(), R(ft, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
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
      class: Ee(["base-form-field", { "full-width": e.fullWidth }])
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
    const d = z(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
    async function u() {
      if (!(!d.value || i.value)) {
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
          default: h(() => [
            b(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", R_, [
        C(ia, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            C(Zt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (g) => l.value.name = g),
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
          default: h(() => [
            C(Zt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (g) => l.value.fetchUrl = g),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        C(ia, { label: "Push URL (optional)" }, {
          default: h(() => [
            C(Zt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (g) => l.value.pushUrl = g),
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
          disabled: !d.value,
          loading: i.value,
          onClick: u
        }, {
          default: h(() => [
            b(f(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        C(re, {
          variant: "ghost",
          size: "md",
          onClick: v[3] || (v[3] = (g) => m.$emit("cancel"))
        }, {
          default: h(() => [...v[4] || (v[4] = [
            b(" Cancel ", -1)
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
            style: jt({ width: o.value + "%" })
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
}, rb = { class: "change-count" }, cb = { class: "change-list" }, db = {
  key: 2,
  class: "strategy-section"
}, ub = { class: "radio-group" }, fb = { class: "radio-option" }, mb = { class: "radio-option" }, vb = { class: "radio-option" }, pb = {
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
    const o = e, n = s, l = k(localStorage.getItem(ql) || "skip");
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
    }), d = z(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), u = z(() => {
      var $;
      return c.value > 0 || d.value > 0 || ((($ = o.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), m = z(() => o.preview && br(o.preview) ? o.preview : null), v = z(() => {
      var $;
      return (($ = m.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), g = z(() => {
      var $;
      return (($ = o.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), w = z(
      () => v.value > 0 && g.value === v.value
    ), p = z(() => !(!o.preview || o.preview.has_uncommitted_changes || m.value && !w.value));
    function _($) {
      if (!m.value) return !1;
      const P = $.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((M) => M.name === P);
    }
    function S($) {
      const P = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: $, resolutions: P });
    }
    return ($, P) => {
      var M, E;
      return a(), R(wt, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: P[11] || (P[11] = (x) => $.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: P[10] || (P[10] = rt(() => {
            }, ["stop"]))
          }, [
            t("div", H_, [
              t("h3", K_, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: P[0] || (P[0] = (x) => $.$emit("close"))
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
              ])])) : (M = e.preview) != null && M.has_uncommitted_changes ? (a(), r(G, { key: 2 }, [
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
                u.value ? (a(), r("div", Z_, [
                  P[21] || (P[21] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (a(), r("details", eb, [
                    t("summary", null, [
                      P[18] || (P[18] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", tb, f(c.value) + " changes", 1)
                    ]),
                    t("div", sb, [
                      (a(!0), r(G, null, ge(e.preview.changes.workflows.added, (x) => (a(), r("div", {
                        key: "a-" + x,
                        class: "change-item add"
                      }, " + " + f(x), 1))), 128)),
                      (a(!0), r(G, null, ge(e.preview.changes.workflows.modified, (x) => (a(), r("div", {
                        key: "m-" + x,
                        class: "change-item modify"
                      }, [
                        b(" ~ " + f(x) + " ", 1),
                        _(x) ? (a(), r("span", ob, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), r(G, null, ge(e.preview.changes.workflows.deleted, (x) => (a(), r("div", {
                        key: "d-" + x,
                        class: "change-item delete"
                      }, " - " + f(x), 1))), 128))
                    ])
                  ])) : y("", !0),
                  d.value > 0 ? (a(), r("details", nb, [
                    t("summary", null, [
                      P[19] || (P[19] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", ab, f(d.value) + " to install", 1)
                    ]),
                    t("div", lb, [
                      (a(!0), r(G, null, ge(e.preview.changes.nodes.to_install, (x) => (a(), r("div", {
                        key: x,
                        class: "change-item add"
                      }, " + " + f(x), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), r("details", ib, [
                    t("summary", null, [
                      P[20] || (P[20] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", rb, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", cb, [
                      (a(!0), r(G, null, ge(e.preview.changes.models.referenced, (x) => (a(), r("div", {
                        key: x,
                        class: "change-item"
                      }, f(x), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (a(), R(j_, {
                  key: 1,
                  "conflict-count": v.value,
                  "resolved-count": g.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), r("div", db, [
                  P[26] || (P[26] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", ub, [
                    t("label", fb, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[1] || (P[1] = (x) => l.value = x),
                        value: "all"
                      }, null, 512), [
                        [Jt, l.value]
                      ]),
                      P[22] || (P[22] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", mb, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[2] || (P[2] = (x) => l.value = x),
                        value: "required"
                      }, null, 512), [
                        [Jt, l.value]
                      ]),
                      P[23] || (P[23] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", vb, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[3] || (P[3] = (x) => l.value = x),
                        value: "skip"
                      }, null, 512), [
                        [Jt, l.value]
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
              C(re, {
                variant: "secondary",
                onClick: P[4] || (P[4] = (x) => $.$emit("close"))
              }, {
                default: h(() => [...P[29] || (P[29] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), r(G, { key: 0 }, [
                C(re, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: P[5] || (P[5] = (x) => S(!1))
                }, {
                  default: h(() => [...P[30] || (P[30] = [
                    b(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                C(re, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: P[6] || (P[6] = (x) => S(!0))
                }, {
                  default: h(() => [...P[31] || (P[31] = [
                    b(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (E = e.preview) != null && E.has_uncommitted_changes ? (a(), R(re, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: P[7] || (P[7] = (x) => S(!0))
              }, {
                default: h(() => [...P[32] || (P[32] = [
                  b(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), r(G, { key: 2 }, [
                m.value && !w.value ? (a(), R(re, {
                  key: 0,
                  variant: "primary",
                  onClick: P[8] || (P[8] = (x) => n("openConflictResolution"))
                }, {
                  default: h(() => [
                    b(" Resolve Conflicts (" + f(g.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), R(re, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !p.value,
                  onClick: P[9] || (P[9] = (x) => S(!1))
                }, {
                  default: h(() => [...P[33] || (P[33] = [
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
    const o = s, n = k(!1);
    function l(i) {
      o("push", { force: i });
    }
    return (i, c) => {
      var d, u, m;
      return a(), R(wt, { to: "body" }, [
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
                b(" Loading preview... ", -1)
              ])])) : (d = e.preview) != null && d.has_uncommitted_changes ? (a(), r("div", $b, [...c[9] || (c[9] = [
                t("span", { class: "warning-icon" }, "⚠", -1),
                t("div", null, [
                  t("strong", null, "UNCOMMITTED CHANGES"),
                  t("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (u = e.preview) != null && u.remote_has_new_commits ? (a(), r(G, { key: 2 }, [
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
                  b(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", Bb, [
              C(re, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (v) => i.$emit("close"))
              }, {
                default: h(() => [...c[18] || (c[18] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = e.preview) != null && m.remote_has_new_commits ? (a(), r(G, { key: 0 }, [
                C(re, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (v) => i.$emit("pull-first"))
                }, {
                  default: h(() => [...c[19] || (c[19] = [
                    b(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                C(re, {
                  variant: "destructive",
                  disabled: !n.value,
                  loading: e.pushing,
                  onClick: c[4] || (c[4] = (v) => l(!0))
                }, {
                  default: h(() => [...c[20] || (c[20] = [
                    b(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), R(re, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: c[5] || (c[5] = (v) => l(!1))
              }, {
                default: h(() => [...c[21] || (c[21] = [
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
        class: Ee(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, jb),
      t("button", {
        class: Ee(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
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
    const o = e, n = s, l = k(o.resolution);
    Ct(() => o.resolution, (u) => {
      l.value = u;
    }), Ct(l, (u) => {
      u && n("resolve", u);
    });
    const i = z(() => l.value !== null), c = z(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), d = z(() => {
      switch (l.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (u, m) => {
      var v, g;
      return a(), r("div", {
        class: Ee(["conflict-item", { resolved: i.value }])
      }, [
        t("div", Yb, [
          m[2] || (m[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", Jb, [
            t("code", Xb, f(e.conflict.name) + ".json", 1),
            t("div", Qb, f(c.value), 1)
          ]),
          i.value ? (a(), r("div", Zb, [
            m[1] || (m[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", ek, f(d.value), 1)
          ])) : y("", !0)
        ]),
        t("div", tk, [
          t("span", sk, [
            m[3] || (m[3] = b("Your: ", -1)),
            t("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", ok, [
            m[4] || (m[4] = b("Theirs: ", -1)),
            t("code", null, f(((g = e.conflict.target_hash) == null ? void 0 : g.slice(0, 8)) || "n/a"), 1)
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
}, ck = { class: "resolution-header" }, dk = { class: "header-stats" }, uk = { class: "stat" }, fk = { class: "stat-value" }, mk = { class: "stat resolved" }, vk = { class: "stat-value" }, pk = {
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
    const o = e, n = s, l = z(() => o.resolutions.size), i = z(() => o.workflowConflicts.length - l.value), c = z(() => l.value === o.workflowConflicts.length), d = z(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function u(w) {
      const p = o.resolutions.get(w);
      return (p == null ? void 0 : p.resolution) ?? null;
    }
    function m(w, p) {
      n("resolve", w, p);
    }
    function v() {
      n("close");
    }
    function g() {
      n("apply");
    }
    return (w, p) => (a(), R(pt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        t("div", ik, [
          e.error ? (a(), r("div", rk, [
            p[1] || (p[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              p[0] || (p[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", ck, [
            t("div", dk, [
              t("div", uk, [
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
            (a(!0), r(G, null, ge(e.workflowConflicts, (_) => (a(), R(lk, {
              key: _.name,
              conflict: _,
              resolution: u(_.name),
              onResolve: (S) => m(_.name, S)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (a(), r("div", yk, [
            p[6] || (p[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + f(d.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        C(Re, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...p[7] || (p[7] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = t("div", { class: "footer-spacer" }, null, -1)),
        C(Re, {
          variant: "primary",
          disabled: !c.value || e.validating,
          loading: e.validating,
          onClick: g
        }, {
          default: h(() => [
            b(f(d.value), 1)
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
    return (i, c) => (a(), R(pt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (d) => n("cancel"))
    }, {
      body: h(() => [
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
              (a(!0), r(G, null, ge(e.validation.node_conflicts, (d) => (a(), R(Ok, {
                key: d.node_id,
                conflict: d
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
              (a(!0), r(G, null, ge(e.validation.warnings, (d, u) => (a(), r("li", { key: u }, f(d), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        C(Re, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (d) => n("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        C(Re, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (d) => n("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            b(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        C(Re, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (d) => n("proceed"))
        }, {
          default: h(() => [
            b(f(l.value), 1)
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
      fetchRemote: d,
      getRemoteSyncStatus: u,
      getPullPreview: m,
      pullFromRemote: v,
      getPushPreview: g,
      pushToRemote: w,
      validateMerge: p
    } = at(), _ = k([]), S = k(null), $ = k({}), P = k(!1), M = k(null), E = k(""), x = k(!1), q = k(null), B = k(!1), A = k("add"), I = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), T = z(() => {
      if (!E.value.trim()) return _.value;
      const ye = E.value.toLowerCase();
      return _.value.filter(
        (W) => W.name.toLowerCase().includes(ye) || W.fetch_url.toLowerCase().includes(ye) || W.push_url.toLowerCase().includes(ye)
      );
    });
    async function O() {
      P.value = !0, M.value = null;
      try {
        const ye = await n();
        _.value = ye.remotes, S.value = ye.current_branch_tracking || null, await Promise.all(
          ye.remotes.map(async (W) => {
            const F = await u(W.name);
            F && ($.value[W.name] = F);
          })
        );
      } catch (ye) {
        M.value = ye instanceof Error ? ye.message : "Failed to load remotes";
      } finally {
        P.value = !1;
      }
    }
    function ce() {
      A.value = "add", I.value = { name: "", fetchUrl: "", pushUrl: "" }, B.value = !0;
    }
    function Y(ye) {
      const W = _.value.find((F) => F.name === ye);
      W && (A.value = "edit", I.value = {
        name: W.name,
        fetchUrl: W.fetch_url,
        pushUrl: W.push_url
      }, B.value = !0);
    }
    async function j(ye) {
      try {
        A.value === "add" ? await l(ye.name, ye.fetchUrl) : await c(ye.name, ye.fetchUrl, ye.pushUrl || void 0), B.value = !1, await O();
      } catch (W) {
        M.value = W instanceof Error ? W.message : "Operation failed";
      }
    }
    function se() {
      B.value = !1, I.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function ee(ye) {
      q.value = ye;
      try {
        await d(ye);
        const W = await u(ye);
        W && ($.value[ye] = W), o("toast", `✓ Fetched from ${ye}`, "success");
      } catch (W) {
        o("toast", W instanceof Error ? W.message : "Fetch failed", "error");
      } finally {
        q.value = null;
      }
    }
    async function U(ye) {
      if (confirm(`Remove remote "${ye}"?`))
        try {
          await i(ye), await O();
        } catch (W) {
          M.value = W instanceof Error ? W.message : "Failed to remove remote";
        }
    }
    function N() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const D = k("idle"), Z = z(() => D.value === "pull_preview"), X = z(
      () => D.value === "resolving" || D.value === "validating"
    ), he = z(
      () => D.value === "validation_review" || D.value === "executing"
    ), Se = k(!1), ze = k(null), Ve = k(!1), be = k(null), Te = k(!1), He = k(null), ke = k(null), ie = k(/* @__PURE__ */ new Map()), Ge = k(null), Pe = k(null), L = z(() => He.value && br(He.value) ? He.value : null);
    async function V(ye) {
      be.value = ye, D.value = "pull_preview", Te.value = !0, He.value = null, ke.value = null;
      try {
        He.value = await m(ye);
      } catch (W) {
        ke.value = W instanceof Error ? W.message : "Failed to load pull preview";
      } finally {
        Te.value = !1;
      }
    }
    function ne() {
      D.value = "idle", He.value = null, ke.value = null, be.value = null;
    }
    async function le(ye) {
      if (!be.value) return;
      D.value = "executing", ke.value = null;
      const W = be.value;
      try {
        const F = await v(W, ye);
        if (F.rolled_back) {
          ke.value = `Pull failed and was rolled back: ${F.error || "Unknown error"}`, D.value = "pull_preview";
          return;
        }
        Ie(), D.value = "idle", o("toast", `✓ Pulled from ${W}`, "success"), await O();
      } catch (F) {
        ke.value = F instanceof Error ? F.message : "Pull failed", D.value = "pull_preview";
      }
    }
    function fe() {
      L.value && (D.value = "resolving", Pe.value = null);
    }
    function me(ye, W) {
      ie.value.set(ye, { name: ye, resolution: W });
    }
    function Ce() {
      D.value = "pull_preview";
    }
    async function xe() {
      D.value = "validating", Pe.value = null;
      try {
        const ye = Array.from(ie.value.values());
        Ge.value = await p(be.value, ye), D.value = "validation_review";
      } catch (ye) {
        Pe.value = ye instanceof Error ? ye.message : "Validation failed", D.value = "resolving";
      }
    }
    async function ae() {
      D.value = "executing";
      const ye = be.value;
      try {
        const W = Array.from(ie.value.values()), F = await v(ye, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: W
        });
        if (F.rolled_back) {
          ke.value = `Pull failed and was rolled back: ${F.error || "Unknown error"}`, D.value = "pull_preview";
          return;
        }
        Ie(), D.value = "idle", o("toast", `✓ Pulled from ${ye}`, "success"), await O();
      } catch (W) {
        ke.value = W instanceof Error ? W.message : "Pull failed", D.value = "validation_review";
      }
    }
    function ue() {
      D.value = "resolving";
    }
    function Le() {
      Ie(), D.value = "idle";
    }
    function Ie() {
      ie.value.clear(), Ge.value = null, Pe.value = null, ke.value = null, He.value = null, be.value = null;
    }
    async function te(ye) {
      be.value = ye, Se.value = !0, Te.value = !0, ze.value = null;
      try {
        ze.value = await g(ye);
      } catch (W) {
        M.value = W instanceof Error ? W.message : "Failed to load push preview";
      } finally {
        Te.value = !1;
      }
    }
    function K() {
      Se.value = !1, ze.value = null, be.value = null;
    }
    async function Me(ye) {
      if (!be.value) return;
      Ve.value = !0;
      const W = be.value;
      try {
        await w(W, ye), K(), o("toast", `✓ Pushed to ${W}`, "success"), await O();
      } catch (F) {
        o("toast", F instanceof Error ? F.message : "Push failed", "error");
      } finally {
        Ve.value = !1;
      }
    }
    function we() {
      const ye = be.value;
      K(), ye && V(ye);
    }
    return et(O), (ye, W) => (a(), r(G, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: W[0] || (W[0] = (F) => x.value = !0)
          }, {
            actions: h(() => [
              B.value ? y("", !0) : (a(), R(re, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: ce
              }, {
                default: h(() => [...W[3] || (W[3] = [
                  b(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          B.value ? y("", !0) : (a(), R(bo, {
            key: 0,
            modelValue: E.value,
            "onUpdate:modelValue": W[1] || (W[1] = (F) => E.value = F),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: h(() => [
          P.value ? (a(), R(Es, {
            key: 0,
            message: "Loading remotes..."
          })) : M.value ? (a(), R(Ts, {
            key: 1,
            message: M.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            B.value ? (a(), R(O_, {
              key: 0,
              mode: A.value,
              "remote-name": I.value.name,
              "fetch-url": I.value.fetchUrl,
              "push-url": I.value.pushUrl,
              onSubmit: j,
              onCancel: se
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            _.value.length && !B.value ? (a(), R(on, {
              key: 1,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                S.value ? (a(), r("span", Vk, " • Tracking: " + f(S.value.remote) + "/" + f(S.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            T.value.length && !B.value ? (a(), R(it, {
              key: 2,
              title: "REMOTES",
              count: T.value.length
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge(T.value, (F) => (a(), R(k_, {
                  key: F.name,
                  remote: F,
                  "sync-status": $.value[F.name],
                  "fetching-remote": q.value,
                  onFetch: ee,
                  onEdit: Y,
                  onRemove: U,
                  onPull: V,
                  onPush: te
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !T.value.length && !B.value ? (a(), R(os, {
              key: 3,
              icon: "🌐",
              message: E.value ? `No remotes match '${E.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                C(re, {
                  variant: "primary",
                  onClick: ce
                }, {
                  default: h(() => [...W[4] || (W[4] = [
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
      C(ns, {
        show: x.value,
        title: "About Git Remotes",
        onClose: W[2] || (W[2] = (F) => x.value = !1)
      }, {
        content: h(() => [...W[5] || (W[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            b(" The "),
            t("strong", null, '"origin"'),
            b(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          C(re, {
            variant: "link",
            onClick: N
          }, {
            default: h(() => [...W[6] || (W[6] = [
              b(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      C(yb, {
        show: Z.value,
        "remote-name": be.value || "",
        preview: He.value,
        loading: Te.value,
        pulling: D.value === "executing",
        error: ke.value,
        "conflict-resolutions": ie.value,
        onClose: ne,
        onPull: le,
        onOpenConflictResolution: fe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      C(Wb, {
        show: Se.value,
        "remote-name": be.value || "",
        preview: ze.value,
        loading: Te.value,
        pushing: Ve.value,
        onClose: K,
        onPush: Me,
        onPullFirst: we
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      X.value && L.value ? (a(), R(_k, {
        key: 0,
        "workflow-conflicts": L.value.workflow_conflicts,
        resolutions: ie.value,
        "operation-type": "pull",
        validating: D.value === "validating",
        error: Pe.value,
        onClose: Ce,
        onResolve: me,
        onApply: xe
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      he.value && Ge.value ? (a(), R(Bk, {
        key: 1,
        validation: Ge.value,
        "operation-type": "pull",
        executing: D.value === "executing",
        onProceed: ae,
        onGoBack: ue,
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
      class: Ee(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", jk, [
        t("div", Hk, [
          b(f(e.label) + " ", 1),
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
}), e2 = /* @__PURE__ */ pe(Zk, [["__scopeId", "data-v-71c0f550"]]), t2 = { class: "workspace-settings-content" }, s2 = { class: "settings-section" }, o2 = { class: "path-setting" }, n2 = { class: "path-value" }, a2 = { class: "path-setting" }, l2 = { class: "path-value" }, i2 = { class: "settings-section" }, r2 = { class: "settings-section" }, c2 = { class: "settings-section" }, d2 = /* @__PURE__ */ ve({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = o, { getConfig: i, updateConfig: c } = at(), d = k(!1), u = k(null), m = k(null), v = k(null), g = k(null), w = k(""), p = k(""), _ = k(!1);
    function S(B) {
      return B.join(" ");
    }
    function $(B) {
      return B.trim() ? B.trim().split(/\s+/) : [];
    }
    const P = z(() => {
      if (!g.value) return !1;
      const B = w.value !== (g.value.civitai_api_key || ""), A = p.value !== S(g.value.comfyui_extra_args || []);
      return B || A;
    });
    async function M() {
      d.value = !0, u.value = null;
      try {
        v.value = await i(n.workspacePath || void 0), g.value = { ...v.value }, w.value = v.value.civitai_api_key || "", p.value = S(v.value.comfyui_extra_args || []);
        const B = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        _.value = B !== "false";
      } catch (B) {
        u.value = B instanceof Error ? B.message : "Failed to load settings";
      } finally {
        d.value = !1;
      }
    }
    async function E() {
      var B, A;
      m.value = null;
      try {
        const I = {};
        w.value !== (((B = g.value) == null ? void 0 : B.civitai_api_key) || "") && (I.civitai_api_key = w.value || null), p.value !== S(((A = g.value) == null ? void 0 : A.comfyui_extra_args) || []) && (I.comfyui_extra_args = $(p.value)), await c(I, n.workspacePath || void 0), await M(), m.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (I) {
        const T = I instanceof Error ? I.message : "Failed to save settings";
        m.value = { type: "error", message: T }, l("error", T);
      }
    }
    function x() {
      g.value && (w.value = g.value.civitai_api_key || "", p.value = S(g.value.comfyui_extra_args || []), m.value = null);
    }
    function q(B) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(B)), console.log("[ComfyGit] Auto-refresh setting saved:", B);
    }
    return s({
      saveSettings: E,
      resetSettings: x,
      hasChanges: P,
      loadSettings: M
    }), et(M), (B, A) => (a(), r("div", t2, [
      d.value ? (a(), R(Es, {
        key: 0,
        message: "Loading workspace settings..."
      })) : u.value ? (a(), R(Ts, {
        key: 1,
        message: u.value,
        retry: !0,
        onRetry: M
      }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
        C(it, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
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
          default: h(() => [
            t("div", i2, [
              C(ra, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
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
          default: h(() => [
            t("div", r2, [
              C(ra, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
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
        C(it, { title: "UI SETTINGS" }, {
          default: h(() => [
            t("div", c2, [
              C(ra, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  C(e2, {
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
          default: h(() => [
            t("span", {
              style: jt({ color: m.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, f(m.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), kr = /* @__PURE__ */ pe(d2, [["__scopeId", "data-v-004ef04f"]]), u2 = /* @__PURE__ */ ve({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), R(Tt, null, {
      header: h(() => [
        C(Pt, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var i, c;
            return [
              C(re, {
                variant: "primary",
                size: "sm",
                disabled: !((i = s.value) != null && i.hasChanges),
                onClick: l[0] || (l[0] = (d) => {
                  var u;
                  return (u = s.value) == null ? void 0 : u.saveSettings();
                })
              }, {
                default: h(() => [...l[2] || (l[2] = [
                  b(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (c = s.value) != null && c.hasChanges ? (a(), R(re, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (d) => {
                  var u;
                  return (u = s.value) == null ? void 0 : u.resetSettings();
                })
              }, {
                default: h(() => [...l[3] || (l[3] = [
                  b(" Reset ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: h(() => [
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
      (c = o.tabs.find((d) => d.id === i)) != null && c.disabled || n("update:modelValue", i);
    }
    return (i, c) => (a(), r("div", f2, [
      (a(!0), r(G, null, ge(e.tabs, (d) => (a(), r("button", {
        key: d.id,
        class: Ee([
          "base-tabs__tab",
          {
            active: e.modelValue === d.id,
            disabled: d.disabled
          }
        ]),
        disabled: d.disabled,
        onClick: (u) => l(d.id)
      }, [
        b(f(d.label) + " ", 1),
        d.badge ? (a(), r("span", v2, f(d.badge), 1)) : y("", !0)
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
    const s = e, o = k(null), n = k("idle"), l = z(() => s.logs.map((m) => ({
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
    function d(m) {
      (m.ctrlKey || m.metaKey) && m.key === "c" && m.stopPropagation();
    }
    function u(m) {
      m.stopPropagation();
    }
    return (m, v) => (a(), r("div", g2, [
      t("div", {
        ref_key: "logOutputElement",
        ref: o,
        class: "log-output",
        onKeydown: d,
        onCopy: u,
        tabindex: "0"
      }, [
        t("button", {
          class: "copy-overlay-btn",
          onClick: c,
          disabled: n.value !== "idle",
          title: n.value === "copied" ? "Copied!" : "Copy all logs"
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, h2),
        (a(!0), r(G, null, ge(l.value, (g, w) => (a(), r("div", {
          key: w,
          class: Ee(`log-line log-level-${g.level.toLowerCase()}`)
        }, f(g.text), 3))), 128))
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
    } = at(), c = k("workspace"), d = k([]), u = k(!1), m = k(null), v = k(!1), g = k(null), w = k(null), p = k(!1), _ = z(() => c.value === "workspace" ? g.value : w.value);
    async function S() {
      u.value = !0, m.value = null;
      try {
        c.value === "workspace" ? d.value = await s(void 0, 500) : d.value = await n(void 0, 500);
      } catch (M) {
        m.value = M instanceof Error ? M.message : `Failed to load ${c.value} logs`;
      } finally {
        u.value = !1;
      }
    }
    async function $() {
      try {
        const [M, E] = await Promise.all([
          o(),
          l()
        ]);
        M.exists && (g.value = M.path), E.exists && (w.value = E.path);
      } catch {
      }
    }
    async function P() {
      if (_.value) {
        p.value = !0;
        try {
          await i(_.value);
        } catch (M) {
          console.error("Failed to open log file:", M);
        } finally {
          p.value = !1;
        }
      }
    }
    return Ct(c, () => {
      S();
    }), et(() => {
      S(), $();
    }), (M, E) => (a(), r(G, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (x) => v.value = !0)
          }, {
            actions: h(() => [
              C(re, {
                variant: "secondary",
                size: "sm",
                onClick: P,
                disabled: !_.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: h(() => [
                  b(f(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(re, {
                variant: "secondary",
                size: "sm",
                onClick: S,
                disabled: u.value
              }, {
                default: h(() => [
                  b(f(u.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          C($r, {
            modelValue: c.value,
            "onUpdate:modelValue": E[1] || (E[1] = (x) => c.value = x),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (a(), R(Es, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : m.value ? (a(), R(Ts, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            d.value.length === 0 ? (a(), R(os, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (a(), R(Cr, {
              key: 1,
              logs: d.value,
              "raw-format": c.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      C(ns, {
        show: v.value,
        title: "About Logs",
        onClose: E[3] || (E[3] = (x) => v.value = !1)
      }, {
        content: h(() => [...E[4] || (E[4] = [
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
        actions: h(() => [
          C(re, {
            variant: "primary",
            onClick: E[2] || (E[2] = (x) => v.value = !1)
          }, {
            default: h(() => [...E[5] || (E[5] = [
              b(" Got it ", -1)
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
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: n, openFile: l } = at(), i = k([]), c = k(!1), d = k(null), u = k(!1), m = k("production"), v = k(null), g = k(!1);
    async function w() {
      c.value = !0, d.value = null;
      try {
        i.value = await s(void 0, 500);
        try {
          const S = await o();
          m.value = S.environment || "production";
        } catch {
        }
      } catch (S) {
        d.value = S instanceof Error ? S.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
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
        g.value = !0;
        try {
          await l(v.value);
        } catch (S) {
          console.error("Failed to open log file:", S);
        } finally {
          g.value = !1;
        }
      }
    }
    return et(() => {
      w(), p();
    }), (S, $) => (a(), r(G, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (P) => u.value = !0)
          }, {
            actions: h(() => [
              C(re, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: !v.value || g.value,
                title: "Open log file in default editor"
              }, {
                default: h(() => [
                  b(f(g.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(re, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: c.value
              }, {
                default: h(() => [
                  b(f(c.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: h(() => [
          c.value ? (a(), R(Es, {
            key: 0,
            message: "Loading environment logs..."
          })) : d.value ? (a(), R(Ts, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            i.value.length === 0 ? (a(), R(os, {
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
      C(ns, {
        show: u.value,
        title: "About Environment Logs",
        onClose: $[2] || ($[2] = (P) => u.value = !1)
      }, {
        content: h(() => [
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
        actions: h(() => [
          C(re, {
            variant: "primary",
            onClick: $[1] || ($[1] = (P) => u.value = !1)
          }, {
            default: h(() => [...$[6] || ($[6] = [
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
    return (s, o) => (a(), R(Et, {
      status: e.isCurrent ? "synced" : void 0
    }, eo({
      icon: h(() => [
        b(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        t("div", b2, [
          t("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), r("span", k2, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (a(), r("span", $2, [
          o[0] || (o[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          b(" " + f(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: h(() => [
        qe(s.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: h(() => [
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
        const i = new Date(l), d = (/* @__PURE__ */ new Date()).getTime() - i.getTime(), u = Math.floor(d / 6e4), m = Math.floor(d / 36e5), v = Math.floor(d / 864e5);
        return u < 1 ? "just now" : u < 60 ? `${u} ${u === 1 ? "minute" : "minutes"} ago` : m < 24 ? `${m} ${m === 1 ? "hour" : "hours"} ago` : v < 30 ? `${v} ${v === 1 ? "day" : "days"} ago` : i.toLocaleDateString();
      } catch {
        return l;
      }
    }
    return (l, i) => (a(), R(pt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: i[2] || (i[2] = (c) => o("close"))
    }, {
      body: h(() => [
        t("div", S2, [
          t("div", I2, [
            i[3] || (i[3] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Ee(["status-badge", e.environment.is_current ? "current" : "inactive"])
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
      footer: h(() => [
        t("div", W2, [
          e.canDelete ? (a(), R(Re, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: i[0] || (i[0] = (c) => o("delete", e.environment.name))
          }, {
            default: h(() => [...i[12] || (i[12] = [
              b(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          i[14] || (i[14] = t("div", { class: "footer-spacer" }, null, -1)),
          C(Re, {
            variant: "secondary",
            size: "sm",
            onClick: i[1] || (i[1] = (c) => o("close"))
          }, {
            default: h(() => [...i[13] || (i[13] = [
              b(" Close ", -1)
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
        class: Ee(["progress-fill", e.variant]),
        style: jt({ width: o.value })
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
          class: Ee(["step", o(c.id)])
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
}, o$ = { class: "form-field" }, n$ = { class: "form-field" }, a$ = ["value"], l$ = { class: "form-field" }, i$ = ["disabled"], r$ = ["value"], c$ = { class: "form-field" }, d$ = ["value"], u$ = { class: "form-field form-field--checkbox" }, f$ = { class: "form-checkbox" }, m$ = {
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
    const o = s, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: i } = at(), c = k(""), d = k(Sr), u = k("latest"), m = k(Ir), v = k(!1), g = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = k(!1), p = k(!1), _ = k({
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
    ], M = k(null);
    function E() {
      p.value || o("close");
    }
    async function x() {
      const T = c.value.trim();
      if (T) {
        p.value = !0, _.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const O = {
            name: T,
            python_version: d.value,
            comfyui_version: u.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, ce = await l(O);
          ce.status === "started" ? q() : ce.status === "error" && (_.value = {
            progress: 0,
            message: ce.message || "Failed to start creation",
            error: ce.message
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
      S || ($ = 0, S = window.setInterval(async () => {
        try {
          const T = await i();
          $ = 0, _.value = {
            progress: T.progress ?? 0,
            message: T.message,
            phase: T.phase,
            error: T.error
          }, T.state === "complete" ? (B(), o("created", T.environment_name || c.value.trim(), v.value)) : T.state === "error" ? (B(), _.value.error = T.error || T.message) : T.state === "idle" && p.value && (B(), _.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= w$ && (B(), _.value.error = "Lost connection to server.");
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
        g.value = await n();
      } catch (T) {
        console.error("Failed to load ComfyUI releases:", T);
      } finally {
        w.value = !1;
      }
    }
    return et(async () => {
      var T;
      await en(), (T = M.value) == null || T.focus(), I();
    }), to(() => {
      B();
    }), (T, O) => (a(), R(pt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !p.value,
      onClose: E
    }, {
      body: h(() => [
        p.value ? (a(), r("div", m$, [
          t("p", v$, [
            O[11] || (O[11] = b(" Creating environment ", -1)),
            t("strong", null, f(c.value), 1),
            O[12] || (O[12] = b("... ", -1))
          ]),
          C(Mn, {
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
            Ye(t("input", {
              ref_key: "nameInput",
              ref: M,
              "onUpdate:modelValue": O[0] || (O[0] = (ce) => c.value = ce),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Qt(x, ["enter"])
            }, null, 544), [
              [Nt, c.value]
            ])
          ]),
          t("div", n$, [
            O[7] || (O[7] = t("label", { class: "form-label" }, "Python Version", -1)),
            Ye(t("select", {
              "onUpdate:modelValue": O[1] || (O[1] = (ce) => d.value = ce),
              class: "form-select"
            }, [
              (a(!0), r(G, null, ge(Be(xr), (ce) => (a(), r("option", {
                key: ce,
                value: ce
              }, f(ce), 9, a$))), 128))
            ], 512), [
              [ps, d.value]
            ])
          ]),
          t("div", l$, [
            O[8] || (O[8] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ye(t("select", {
              "onUpdate:modelValue": O[2] || (O[2] = (ce) => u.value = ce),
              class: "form-select",
              disabled: w.value
            }, [
              (a(!0), r(G, null, ge(g.value, (ce) => (a(), r("option", {
                key: ce.tag_name,
                value: ce.tag_name
              }, f(ce.name), 9, r$))), 128))
            ], 8, i$), [
              [ps, u.value]
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
              }, f(ce) + f(ce === "auto" ? " (detect GPU)" : ""), 9, d$))), 128))
            ], 512), [
              [ps, m.value]
            ])
          ]),
          t("div", u$, [
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
      footer: h(() => [
        p.value ? (a(), r(G, { key: 1 }, [
          _.value.error ? (a(), R(Re, {
            key: 0,
            variant: "secondary",
            onClick: A
          }, {
            default: h(() => [...O[15] || (O[15] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), r("span", y$, " Creating environment... "))
        ], 64)) : (a(), r(G, { key: 0 }, [
          C(Re, {
            variant: "primary",
            disabled: !c.value.trim(),
            onClick: x
          }, {
            default: h(() => [...O[13] || (O[13] = [
              b(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Re, {
            variant: "secondary",
            onClick: O[5] || (O[5] = (ce) => o("close"))
          }, {
            default: h(() => [...O[14] || (O[14] = [
              b(" Cancel ", -1)
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
    const n = o, { getEnvironments: l } = at(), i = k([]), c = k(!1), d = k(null), u = k(""), m = k(!1), v = k(!1), g = k(null), w = z(() => {
      if (!u.value.trim()) return i.value;
      const M = u.value.toLowerCase();
      return i.value.filter(
        (E) => {
          var x;
          return E.name.toLowerCase().includes(M) || ((x = E.current_branch) == null ? void 0 : x.toLowerCase().includes(M));
        }
      );
    });
    function p(M, E) {
      v.value = !1, n("created", M, E);
    }
    function _() {
      v.value = !0;
    }
    function S(M) {
      g.value = M;
    }
    function $(M) {
      g.value = null, n("delete", M);
    }
    async function P() {
      c.value = !0, d.value = null;
      try {
        i.value = await l();
      } catch (M) {
        d.value = M instanceof Error ? M.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return et(P), s({
      loadEnvironments: P,
      openCreateModal: _
    }), (M, E) => (a(), r(G, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (x) => m.value = !0)
          }, {
            actions: h(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: h(() => [...E[6] || (E[6] = [
                  b(" Create ", -1)
                ])]),
                _: 1
              }),
              C(re, {
                variant: "secondary",
                size: "sm",
                onClick: P
              }, {
                default: h(() => [...E[7] || (E[7] = [
                  b(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          C(bo, {
            modelValue: u.value,
            "onUpdate:modelValue": E[1] || (E[1] = (x) => u.value = x),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (a(), R(Es, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (a(), R(Ts, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            w.value.length ? (a(), R(it, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge(w.value, (x) => (a(), R(x2, {
                  key: x.name,
                  "environment-name": x.name,
                  "is-current": x.is_current,
                  "current-branch": x.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    x.is_current ? y("", !0) : (a(), R(re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => M.$emit("switch", x.name)
                    }, {
                      default: h(() => [...E[8] || (E[8] = [
                        b(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => S(x)
                    }, {
                      default: h(() => [...E[9] || (E[9] = [
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
            w.value.length ? y("", !0) : (a(), R(os, {
              key: 1,
              icon: "🌍",
              message: u.value ? `No environments match '${u.value}'` : "No environments found. Create one to get started!"
            }, eo({ _: 2 }, [
              u.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  C(re, {
                    variant: "primary",
                    onClick: _
                  }, {
                    default: h(() => [...E[10] || (E[10] = [
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
      C(ns, {
        show: m.value,
        title: "About Environments",
        onClose: E[3] || (E[3] = (x) => m.value = !1)
      }, {
        content: h(() => [...E[11] || (E[11] = [
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
        actions: h(() => [
          C(re, {
            variant: "secondary",
            onClick: E[2] || (E[2] = (x) => m.value = !1)
          }, {
            default: h(() => [...E[12] || (E[12] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      g.value ? (a(), R(j2, {
        key: 0,
        environment: g.value,
        "can-delete": i.value.length > 1,
        onClose: E[4] || (E[4] = (x) => g.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : y("", !0),
      v.value ? (a(), R(b$, {
        key: 1,
        onClose: E[5] || (E[5] = (x) => v.value = !1),
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
    return (l, i) => (a(), R(pt, {
      title: "Cannot Export",
      size: "md",
      onClose: i[1] || (i[1] = (c) => l.$emit("close"))
    }, {
      body: h(() => [
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
            (a(!0), r(G, null, ge(e.issues, (c, d) => (a(), r("div", {
              key: d,
              class: "issue-item"
            }, [
              t("div", R$, f(c.message), 1),
              c.details.length ? (a(), r("div", M$, [
                (a(!0), r(G, null, ge(n(d), (u, m) => (a(), r("div", {
                  key: m,
                  class: "issue-detail"
                }, f(u), 1))), 128)),
                c.details.length > 3 && !o[d] ? (a(), r("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (u) => o[d] = !0
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
      footer: h(() => [
        C(Re, {
          variant: "primary",
          onClick: i[0] || (i[0] = (c) => l.$emit("close"))
        }, {
          default: h(() => [...i[3] || (i[3] = [
            b(" Understood ", -1)
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
    const o = e, n = s, l = k(!1), i = k(null), c = z(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function d() {
      i.value = null, n("revalidate");
    }
    return (u, m) => (a(), r(G, null, [
      C(pt, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (v) => u.$emit("cancel"))
      }, {
        body: h(() => [
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
                      onClick: (g) => i.value = v.hash
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
        footer: h(() => [
          C(Re, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (v) => u.$emit("cancel"))
          }, {
            default: h(() => [...m[7] || (m[7] = [
              b(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          C(Re, {
            variant: "primary",
            onClick: m[2] || (m[2] = (v) => u.$emit("confirm"))
          }, {
            default: h(() => [
              b(f(e.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      i.value ? (a(), R(Xa, {
        key: 0,
        identifier: i.value,
        onClose: d
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Tr = /* @__PURE__ */ pe(K$, [["__scopeId", "data-v-b698d882"]]), q$ = { class: "export-card" }, Y$ = { class: "export-path-row" }, J$ = { class: "export-actions" }, X$ = {
  key: 1,
  class: "export-warning"
}, Q$ = /* @__PURE__ */ ve({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = at(), n = k(""), l = k(!1), i = k(!1), c = k(!1), d = k(null), u = k(!1), m = k(null), v = k(!1), g = k(!1), w = z(() => l.value ? "Validating..." : i.value ? "Exporting..." : "Export Environment");
    async function p() {
      l.value = !0, d.value = null;
      try {
        const E = await s();
        m.value = E, E.can_export ? E.warnings.models_without_sources.length > 0 ? g.value = !0 : await $() : v.value = !0;
      } catch (E) {
        d.value = {
          status: "error",
          message: E instanceof Error ? E.message : "Validation failed"
        };
      } finally {
        l.value = !1;
      }
    }
    async function _() {
      g.value = !1, await $();
    }
    async function S() {
      try {
        const E = await s();
        m.value = E;
      } catch (E) {
        console.error("Re-validation failed:", E);
      }
    }
    async function $() {
      i.value = !0;
      try {
        const E = await o(n.value || void 0);
        d.value = E;
      } catch (E) {
        d.value = {
          status: "error",
          message: E instanceof Error ? E.message : "Export failed"
        };
      } finally {
        i.value = !1;
      }
    }
    async function P() {
      var E;
      if ((E = d.value) != null && E.path)
        try {
          await navigator.clipboard.writeText(d.value.path);
        } catch (x) {
          console.error("Failed to copy path:", x);
        }
    }
    async function M() {
      var E;
      if ((E = d.value) != null && E.path) {
        c.value = !0;
        try {
          const x = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(d.value.path)}`);
          if (!x.ok)
            throw new Error(`Download failed: ${x.statusText}`);
          const q = await x.blob(), B = URL.createObjectURL(q), A = d.value.path.split("/").pop() || "environment-export.tar.gz", I = document.createElement("a");
          I.href = B, I.download = A, document.body.appendChild(I), I.click(), document.body.removeChild(I), URL.revokeObjectURL(B);
        } catch (x) {
          console.error("Failed to download:", x), alert(`Download failed: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          c.value = !1;
        }
      }
    }
    return (E, x) => (a(), r(G, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (q) => u.value = !0)
          })
        ]),
        content: h(() => [
          C(it, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              t("div", q$, [
                x[7] || (x[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", Y$, [
                  C(Pn, {
                    modelValue: n.value,
                    "onUpdate:modelValue": x[1] || (x[1] = (q) => n.value = q),
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
                    default: h(() => [
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
          d.value ? (a(), R(it, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              C(Et, {
                status: d.value.status === "success" ? "synced" : "broken"
              }, eo({
                icon: h(() => [
                  b(f(d.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  b(f(d.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: h(() => [
                  b(f(d.value.status === "success" ? "Your environment has been exported" : d.value.message), 1)
                ]),
                _: 2
              }, [
                d.value.status === "success" ? {
                  name: "details",
                  fn: h(() => [
                    C(ft, { label: "Saved to:" }, {
                      default: h(() => [
                        C(E$, {
                          path: d.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    d.value.models_without_sources !== void 0 ? (a(), R(ft, {
                      key: 0,
                      label: "Models without sources:",
                      value: d.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    d.value.models_without_sources && d.value.models_without_sources > 0 ? (a(), r("div", X$, [...x[8] || (x[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                d.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      loading: c.value,
                      onClick: M
                    }, {
                      default: h(() => [...x[9] || (x[9] = [
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
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: P
                    }, {
                      default: h(() => [...x[10] || (x[10] = [
                        b(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    C(re, {
                      variant: "ghost",
                      size: "sm",
                      onClick: x[2] || (x[2] = (q) => d.value = null)
                    }, {
                      default: h(() => [...x[11] || (x[11] = [
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
      C(ns, {
        show: u.value,
        title: "What Gets Exported",
        onClose: x[3] || (x[3] = (q) => u.value = !1)
      }, {
        content: h(() => [...x[12] || (x[12] = [
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
        onClose: x[4] || (x[4] = (q) => v.value = !1)
      }, null, 8, ["issues"])) : y("", !0),
      g.value && m.value ? (a(), R(Tr, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: _,
        onCancel: x[5] || (x[5] = (q) => g.value = !1),
        onRevalidate: S
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
    const n = o, l = k(null);
    function i() {
      var d;
      (d = l.value) == null || d.click();
    }
    function c(d) {
      const u = d.target;
      u.files && u.files.length > 0 && (n("change", u.files), u.value = "");
    }
    return s({
      triggerInput: i
    }), (d, u) => (a(), r("div", eC, [
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
        default: h(() => [
          qe(d.$slots, "default", {}, () => [
            u[0] || (u[0] = t("svg", {
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
}), oC = /* @__PURE__ */ pe(sC, [["__scopeId", "data-v-cd192091"]]), nC = {
  key: 0,
  class: "drop-zone-empty"
}, aC = { class: "drop-zone-text" }, lC = { class: "drop-zone-primary" }, iC = { class: "drop-zone-secondary" }, rC = { class: "drop-zone-actions" }, cC = {
  key: 1,
  class: "drop-zone-file"
}, dC = { class: "file-info" }, uC = { class: "file-details" }, fC = { class: "file-name" }, mC = { class: "file-size" }, vC = /* @__PURE__ */ ve({
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
    const o = s, n = k(!1), l = k(null), i = k(0), c = z(() => l.value !== null), d = z(() => {
      var $;
      return (($ = l.value) == null ? void 0 : $.name) || "";
    }), u = z(() => {
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
    function g($) {
      $.stopPropagation(), i.value--, i.value === 0 && (n.value = !1);
    }
    function w($) {
      var M;
      $.stopPropagation(), i.value = 0, n.value = !1;
      const P = (M = $.dataTransfer) == null ? void 0 : M.files;
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
    return ($, P) => (a(), r("div", {
      class: Ee(["file-drop-zone", { "drop-active": n.value, "has-file": c.value }]),
      onDragenter: rt(m, ["prevent"]),
      onDragover: rt(v, ["prevent"]),
      onDragleave: rt(g, ["prevent"]),
      onDrop: rt(w, ["prevent"])
    }, [
      c.value ? (a(), r("div", cC, [
        t("div", dC, [
          P[1] || (P[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", uC, [
            t("div", fC, f(d.value), 1),
            t("div", mC, f(u.value), 1)
          ])
        ]),
        C(re, {
          variant: "ghost",
          size: "xs",
          onClick: S,
          title: "Remove file"
        }, {
          default: h(() => [...P[2] || (P[2] = [
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
          C(oC, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: p
          }, {
            default: h(() => [
              b(f(e.buttonText), 1)
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
    return (c, d) => (a(), r("div", gC, [
      t("div", hC, [
        C(Ot, null, {
          default: h(() => [...d[0] || (d[0] = [
            b("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), r("span", yC, [
          d[1] || (d[1] = b(" From: ", -1)),
          C(Sa, null, {
            default: h(() => [
              b(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", wC, [
        t("div", _C, [
          t("div", bC, [
            d[3] || (d[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", kC, [
              d[2] || (d[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", $C, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), r("div", CC, [
            (a(!0), r(G, null, ge(e.workflows.slice(0, e.maxPreviewItems), (u) => (a(), r("div", {
              key: u,
              class: "preview-item"
            }, [
              d[4] || (d[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", xC, f(u), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), r("div", SC, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", IC, [
          t("div", EC, [
            d[6] || (d[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", TC, [
              d[5] || (d[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", PC, f(n.value) + " file" + f(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), r("div", RC, [
            (a(!0), r(G, null, ge(e.models.slice(0, e.maxPreviewItems), (u) => (a(), r("div", {
              key: u.filename,
              class: "preview-item"
            }, [
              d[7] || (d[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", MC, [
                t("span", DC, f(u.filename), 1),
                t("span", LC, f(i(u.size)) + " • " + f(u.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), r("div", OC, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", AC, [
          t("div", NC, [
            d[9] || (d[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", UC, [
              d[8] || (d[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", zC, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), r("div", FC, [
            (a(!0), r(G, null, ge(e.nodes.slice(0, e.maxPreviewItems), (u) => (a(), r("div", {
              key: u,
              class: "preview-item"
            }, [
              d[10] || (d[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", BC, f(u), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), r("div", VC, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), r("div", WC, [
          d[11] || (d[11] = t("div", { class: "section-header" }, [
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
              default: h(() => [
                C(Sa, null, {
                  default: h(() => [
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
              default: h(() => [
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
}, ex = {
  key: 0,
  class: "field-error"
}, tx = { class: "config-field" }, sx = { class: "strategy-options" }, ox = ["value", "checked", "onChange"], nx = { class: "strategy-content" }, ax = { class: "strategy-label" }, lx = { class: "strategy-description" }, ix = { class: "config-field switch-field" }, rx = { class: "switch-label" }, cx = ["checked"], dx = { class: "advanced-section" }, ux = { class: "advanced-content" }, fx = { class: "config-field" }, mx = ["value"], vx = ["value"], px = /* @__PURE__ */ ve({
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
    let d = null;
    function u(v) {
      const g = v.target.value;
      n("update:name", g), i.value = !1, d && clearTimeout(d), g.length > 0 ? (l.value = !0, d = setTimeout(() => {
        n("validate-name", g);
      }, 400)) : l.value = !1;
    }
    function m() {
      o.name.length > 0 && n("validate-name", o.name);
    }
    return (v, g) => (a(), r("div", KC, [
      C(Ot, null, {
        default: h(() => [...g[2] || (g[2] = [
          b("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", qC, [
        t("div", YC, [
          C(wn, { required: "" }, {
            default: h(() => [...g[3] || (g[3] = [
              b("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", JC, [
            t("input", {
              type: "text",
              class: Ee(["name-input", { error: e.nameError || e.name.length === 0, valid: i.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: u,
              onBlur: m
            }, null, 42, XC),
            l.value ? (a(), r("span", QC, "...")) : i.value ? (a(), r("span", ZC, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), r("div", ex, f(e.nameError), 1)) : y("", !0),
          g[4] || (g[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", tx, [
          C(wn, null, {
            default: h(() => [...g[5] || (g[5] = [
              b("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", sx, [
            (a(), r(G, null, ge(c, (w) => t("label", {
              key: w.value,
              class: Ee(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (p) => n("update:modelStrategy", w.value)
              }, null, 40, ox),
              t("div", nx, [
                t("span", ax, f(w.label), 1),
                t("span", lx, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", ix, [
          t("label", rx, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: g[0] || (g[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, cx),
            g[6] || (g[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", dx, [
          g[8] || (g[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", ux, [
            t("div", fx, [
              C(wn, null, {
                default: h(() => [...g[7] || (g[7] = [
                  b("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              t("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: g[1] || (g[1] = (w) => n("update:torchBackend", w.target.value))
              }, [
                (a(!0), r(G, null, ge(Be(Za), (w) => (a(), r("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, vx))), 128))
              ], 40, mx)
            ])
          ])
        ])
      ])
    ]));
  }
}), gx = /* @__PURE__ */ pe(px, [["__scopeId", "data-v-89ea06a1"]]), hx = { class: "import-flow" }, yx = {
  key: 0,
  class: "import-empty"
}, wx = { class: "git-import-section" }, _x = { class: "git-url-input-row" }, bx = ["disabled"], kx = {
  key: 0,
  class: "git-error"
}, $x = {
  key: 1,
  class: "import-configure"
}, Cx = { class: "selected-file-bar" }, xx = {
  key: 0,
  class: "file-bar-content"
}, Sx = { class: "file-bar-info" }, Ix = { class: "file-bar-name" }, Ex = { class: "file-bar-size" }, Tx = {
  key: 1,
  class: "file-bar-content"
}, Px = { class: "file-bar-info" }, Rx = { class: "file-bar-name" }, Mx = {
  key: 0,
  class: "preview-loading"
}, Dx = { class: "import-actions" }, Lx = {
  key: 2,
  class: "import-progress"
}, Ox = { class: "creating-intro" }, Ax = {
  key: 0,
  class: "progress-warning"
}, Nx = {
  key: 1,
  class: "import-error"
}, Ux = { class: "error-message" }, zx = {
  key: 3,
  class: "import-complete"
}, Fx = { class: "complete-message" }, Bx = { class: "complete-title" }, Vx = { class: "complete-details" }, Wx = { class: "complete-actions" }, Gx = /* @__PURE__ */ ve({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var Ve, be, Te, He;
    const n = e, l = o, { previewTarballImport: i, previewGitImport: c, validateEnvironmentName: d, executeImport: u, executeGitImport: m, getImportProgress: v } = at();
    let g = null;
    const w = k(null), p = k(n.resumeImport ?? !1), _ = k(!1), S = k(!1), $ = k(""), P = k(!1), M = k(null), E = k(""), x = k(null), q = k(!1), B = k(null), A = k(null), I = k({
      name: ((Ve = n.initialProgress) == null ? void 0 : Ve.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), T = k(null), O = k({
      message: ((be = n.initialProgress) == null ? void 0 : be.message) ?? "Preparing import...",
      phase: ((Te = n.initialProgress) == null ? void 0 : Te.phase) ?? "",
      progress: ((He = n.initialProgress) == null ? void 0 : He.progress) ?? 0,
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
      const ke = A.value;
      return {
        sourceEnvironment: ke.comfyui_version ? `ComfyUI ${ke.comfyui_version}` : "Unknown",
        workflows: ke.workflows.map((ie) => ie.name),
        models: ke.models.map((ie) => ({
          filename: ie.filename,
          size: 0,
          type: ie.relative_path.split("/")[0] || "model"
        })),
        nodes: ke.nodes.map((ie) => ie.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), j = z(() => !P.value && !M.value && A.value && I.value.name.length > 0 && !T.value && (w.value || x.value));
    async function se(ke) {
      w.value = ke, P.value = !0, M.value = null, A.value = null;
      try {
        const ie = await i(ke);
        A.value = ie;
      } catch (ie) {
        M.value = ie instanceof Error ? ie.message : "Failed to analyze file", console.error("Preview error:", ie);
      } finally {
        P.value = !1;
      }
    }
    function ee() {
      w.value = null, x.value = null, E.value = "", B.value = null, _.value = !1, S.value = !1, $.value = "", A.value = null, M.value = null, I.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, T.value = null, l("source-cleared");
    }
    function U() {
      Se(), ee(), p.value = !1, P.value = !1, q.value = !1, O.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function N() {
      if (E.value.trim()) {
        q.value = !0, B.value = null;
        try {
          const ke = await c(E.value.trim());
          x.value = E.value.trim(), A.value = ke;
        } catch (ke) {
          B.value = ke instanceof Error ? ke.message : "Failed to analyze repository";
        } finally {
          q.value = !1;
        }
      }
    }
    function D(ke) {
      try {
        const ie = new URL(ke);
        return ie.host + ie.pathname.replace(/\.git$/, "");
      } catch {
        return ke;
      }
    }
    async function Z(ke) {
      if (!ke) {
        T.value = "Environment name is required";
        return;
      }
      try {
        const ie = await d(ke);
        T.value = ie.valid ? null : ie.error || "Invalid name";
      } catch {
        T.value = "Failed to validate name";
      }
    }
    async function X() {
      if (I.value.name && !(!w.value && !x.value)) {
        p.value = !0, _.value = !1, O.value = { message: `Creating environment '${I.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let ke;
          if (w.value)
            ke = await u(
              w.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else if (x.value)
            ke = await m(
              x.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ke.status === "started" ? he() : (S.value = !1, $.value = ke.message, p.value = !1, _.value = !0);
        } catch (ke) {
          S.value = !1, $.value = ke instanceof Error ? ke.message : "Unknown error occurred during import", p.value = !1, _.value = !0;
        }
      }
    }
    async function he() {
      if (g) return;
      const ke = async () => {
        try {
          const Ge = await v();
          return O.value = {
            message: Ge.message,
            phase: Ge.phase || "",
            progress: Ge.progress ?? (Ge.state === "importing" ? 50 : 0),
            error: Ge.error || null
          }, Ge.state === "complete" ? (Se(), S.value = !0, $.value = `Environment '${Ge.environment_name}' created successfully`, p.value = !1, _.value = !0, Ge.environment_name && l("import-complete", Ge.environment_name, I.value.switchAfterImport), !1) : Ge.state === "error" ? (Se(), S.value = !1, $.value = Ge.error || Ge.message, p.value = !1, _.value = !0, !1) : !0;
        } catch (Ge) {
          return console.error("Failed to poll import progress:", Ge), !0;
        }
      };
      await ke() && (g = setInterval(async () => {
        await ke() || Se();
      }, 2e3));
    }
    function Se() {
      g && (clearInterval(g), g = null);
    }
    function ze(ke) {
      return ke < 1024 ? `${ke} B` : ke < 1024 * 1024 ? `${(ke / 1024).toFixed(1)} KB` : ke < 1024 * 1024 * 1024 ? `${(ke / (1024 * 1024)).toFixed(1)} MB` : `${(ke / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return et(async () => {
      try {
        const ke = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", ke.state, ke), ke.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", ke.environment_name), p.value = !0, I.value.name = ke.environment_name || I.value.name || "", O.value = {
          progress: ke.progress ?? 0,
          message: ke.message || "Importing...",
          phase: ke.phase || "",
          error: null
        }, he());
      } catch (ke) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", ke);
      }
    }), s({
      handleReset: U,
      isImporting: p,
      canImport: j
    }), (ke, ie) => {
      var Ge;
      return a(), r("div", hx, [
        !w.value && !x.value && !p.value ? (a(), r("div", yx, [
          C(pC, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: se
          }),
          ie[7] || (ie[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", wx, [
            ie[5] || (ie[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", _x, [
              Ye(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ie[0] || (ie[0] = (Pe) => E.value = Pe),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Qt(N, ["enter"]),
                disabled: q.value
              }, null, 40, bx), [
                [Nt, E.value]
              ]),
              C(re, {
                variant: "primary",
                size: "sm",
                disabled: !E.value.trim() || q.value,
                onClick: N
              }, {
                default: h(() => [
                  b(f(q.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            B.value ? (a(), r("div", kx, f(B.value), 1)) : y("", !0),
            ie[6] || (ie[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || x.value) && !p.value && !_.value ? (a(), r("div", $x, [
          t("div", Cx, [
            w.value ? (a(), r("div", xx, [
              ie[8] || (ie[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", Sx, [
                t("div", Ix, f(w.value.name), 1),
                t("div", Ex, f(ze(w.value.size)), 1)
              ])
            ])) : x.value ? (a(), r("div", Tx, [
              ie[10] || (ie[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", Px, [
                t("div", Rx, f(D(x.value)), 1),
                ie[9] || (ie[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            C(re, {
              variant: "ghost",
              size: "sm",
              onClick: ee
            }, {
              default: h(() => [...ie[11] || (ie[11] = [
                b(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          P.value ? (a(), r("div", Mx, [...ie[12] || (ie[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : M.value ? (a(), R(qt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [M.value]
          }, null, 8, ["details"])) : A.value ? (a(), R(HC, {
            key: 2,
            "source-environment": Y.value.sourceEnvironment,
            workflows: Y.value.workflows,
            models: Y.value.models,
            nodes: Y.value.nodes,
            "git-branch": Y.value.gitBranch,
            "git-commit": Y.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          A.value ? (a(), R(gx, {
            key: 3,
            name: I.value.name,
            "onUpdate:name": ie[1] || (ie[1] = (Pe) => I.value.name = Pe),
            "model-strategy": I.value.modelStrategy,
            "onUpdate:modelStrategy": ie[2] || (ie[2] = (Pe) => I.value.modelStrategy = Pe),
            "torch-backend": I.value.torchBackend,
            "onUpdate:torchBackend": ie[3] || (ie[3] = (Pe) => I.value.torchBackend = Pe),
            "switch-after-import": I.value.switchAfterImport,
            "onUpdate:switchAfterImport": ie[4] || (ie[4] = (Pe) => I.value.switchAfterImport = Pe),
            "name-error": T.value,
            onValidateName: Z
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          I.value.modelStrategy === "skip" && ((Ge = A.value) != null && Ge.models_needing_download) ? (a(), R(qt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${A.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", Dx, [
            C(re, {
              variant: "secondary",
              size: "md",
              onClick: ee
            }, {
              default: h(() => [...ie[13] || (ie[13] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(re, {
              variant: "primary",
              size: "md",
              disabled: !j.value,
              onClick: X
            }, {
              default: h(() => [...ie[14] || (ie[14] = [
                b(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (a(), r("div", Lx, [
          t("p", Ox, [
            ie[15] || (ie[15] = b(" Importing environment ", -1)),
            t("strong", null, f(I.value.name), 1),
            ie[16] || (ie[16] = b("... ", -1))
          ]),
          C(Mn, {
            progress: O.value.progress,
            message: O.value.message,
            "current-phase": O.value.phase,
            variant: O.value.error ? "error" : "default",
            "show-steps": !0,
            steps: ce
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          O.value.error ? y("", !0) : (a(), r("p", Ax, " This may take several minutes. Please wait... ")),
          O.value.error ? (a(), r("div", Nx, [
            t("p", Ux, f(O.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), r("div", zx, [
          t("div", {
            class: Ee(["complete-icon", S.value ? "success" : "error"])
          }, f(S.value ? "✓" : "✕"), 3),
          t("div", Fx, [
            t("div", Bx, f(S.value ? "Import Successful" : "Import Failed"), 1),
            t("div", Vx, f($.value), 1)
          ]),
          t("div", Wx, [
            C(re, {
              variant: "primary",
              size: "md",
              onClick: U
            }, {
              default: h(() => [...ie[17] || (ie[17] = [
                b(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Pr = /* @__PURE__ */ pe(Gx, [["__scopeId", "data-v-72cbc04e"]]), jx = /* @__PURE__ */ ve({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, n = k(!1);
    function l(i, c) {
      c && o("import-complete-switch", i);
    }
    return (i, c) => (a(), r(G, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: c[0] || (c[0] = (d) => n.value = !0)
          })
        ]),
        content: h(() => [
          C(Pr, { onImportComplete: l })
        ]),
        _: 1
      }),
      C(ns, {
        show: n.value,
        title: "How Import Works",
        onClose: c[1] || (c[1] = (d) => n.value = !1)
      }, {
        content: h(() => [...c[2] || (c[2] = [
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
}), Hx = /* @__PURE__ */ pe(jx, [["__scopeId", "data-v-e13bfe76"]]), fn = io(), Kx = 5e3, no = k([]), ca = k(!1), da = k(null);
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
      (_, S) => (p[_.status] ?? 5) - (p[S.status] ?? 5)
    );
  });
  async function c() {
    ca.value = !0, da.value = null;
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
      da.value = p instanceof Error ? p.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", p);
    } finally {
      ca.value = !1;
    }
  }
  function d(p, _) {
    if (p.provider === "custom" && p.worker_name) {
      const S = p.id.includes(":") ? p.id.split(":").slice(1).join(":") : p.id;
      return _ === "terminate" ? `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${S}` : `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${S}/${_}`;
    }
    return _ === "terminate" ? `/v2/comfygit/deploy/${p.provider}/${p.id}` : `/v2/comfygit/deploy/${p.provider}/${p.id}/${_}`;
  }
  async function u(p) {
    try {
      if (!fn) {
        const _ = d(p, "stop"), S = await mn(_, { method: "POST" });
        if (!S.ok) {
          const $ = await S.json();
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
        const _ = d(p, "start"), S = await mn(_, { method: "POST" });
        if (!S.ok) {
          const $ = await S.json();
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
        const _ = d(p, "terminate"), S = await mn(_, { method: "DELETE" });
        if (!S.ok) {
          const $ = await S.json();
          throw new Error($.message || "Failed to terminate instance");
        }
      }
      await c();
    } catch (_) {
      throw console.error("[useDeployInstances] terminateInstance error:", _), _;
    }
  }
  function g() {
    Eo || (Eo = window.setInterval(c, Kx));
  }
  function w() {
    Eo && (clearInterval(Eo), Eo = null);
  }
  return Ct(o, (p) => {
    p.length > 0 && g();
  }, { immediate: !0 }), e != null && e.autoStart && (c(), g()), {
    // State
    instances: no,
    isLoading: ca,
    error: da,
    // Computed
    runningInstances: s,
    deployingInstances: o,
    stoppedInstances: n,
    liveInstanceCount: l,
    sortedInstances: i,
    // Actions
    refreshInstances: c,
    stopInstance: u,
    startInstance: m,
    terminateInstance: v,
    // Polling
    startPolling: g,
    stopPolling: w
  };
}
const qx = { class: "instance-header" }, Yx = { class: "provider-badge" }, Jx = { class: "instance-name" }, Xx = {
  key: 0,
  class: "spinner"
}, Qx = { class: "instance-details" }, Zx = {
  key: 0,
  class: "detail"
}, e3 = {
  key: 1,
  class: "detail instance-url"
}, t3 = {
  key: 2,
  class: "detail"
}, s3 = {
  key: 3,
  class: "detail"
}, o3 = {
  key: 4,
  class: "detail total-cost"
}, n3 = {
  key: 0,
  class: "deployment-progress"
}, a3 = { class: "progress-message" }, l3 = { class: "instance-actions" }, i3 = /* @__PURE__ */ ve({
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
    function d(u) {
      const m = Math.floor(u / 3600), v = Math.floor(u % 3600 / 60);
      return m > 0 ? `${m}h ${v}m` : `${v}m`;
    }
    return (u, m) => (a(), r("div", {
      class: Ee(["instance-card", l.value])
    }, [
      t("div", qx, [
        t("span", Yx, f(o.value), 1),
        t("span", Jx, f(e.instance.name), 1),
        t("span", {
          class: Ee(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (a(), r("span", Xx)) : y("", !0),
          b(" " + f(n.value), 1)
        ], 2)
      ]),
      t("div", Qx, [
        e.instance.gpu_type ? (a(), r("span", Zx, f(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (a(), r("span", e3, f(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (a(), r("span", t3, f(d(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (a(), r("span", s3, "$" + f(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (a(), r("span", o3, "$" + f(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (a(), r("div", n3, [
        t("div", a3, f(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (a(), R(Kn, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", l3, [
        e.instance.status === "running" && e.instance.comfyui_url ? (a(), R(re, {
          key: 0,
          variant: "primary",
          size: "xs",
          onClick: i
        }, {
          default: h(() => [...m[3] || (m[3] = [
            b(" Open ComfyUI ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.console_url && e.instance.provider !== "custom" ? (a(), R(re, {
          key: 1,
          variant: "ghost",
          size: "xs",
          onClick: c
        }, {
          default: h(() => [...m[4] || (m[4] = [
            b(" Console ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.status === "running" ? (a(), R(re, {
          key: 2,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[0] || (m[0] = (v) => u.$emit("stop", e.instance))
        }, {
          default: h(() => [...m[5] || (m[5] = [
            b(" Stop ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        e.instance.status === "stopped" ? (a(), R(re, {
          key: 3,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[1] || (m[1] = (v) => u.$emit("start", e.instance))
        }, {
          default: h(() => [...m[6] || (m[6] = [
            b(" Start ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        C(re, {
          variant: "destructive",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[2] || (m[2] = (v) => u.$emit("terminate", e.instance))
        }, {
          default: h(() => [...m[7] || (m[7] = [
            b(" Terminate ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])
      ])
    ], 2));
  }
}), r3 = /* @__PURE__ */ pe(i3, [["__scopeId", "data-v-746c3894"]]), c3 = { class: "instances-tab" }, d3 = { class: "instances-header" }, u3 = {
  key: 0,
  class: "loading-state"
}, f3 = {
  key: 1,
  class: "empty-state"
}, m3 = {
  key: 2,
  class: "instances-list"
}, v3 = /* @__PURE__ */ ve({
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
    return (n, l) => (a(), r("div", c3, [
      t("div", d3, [
        C(Ot, null, {
          default: h(() => [...l[4] || (l[4] = [
            b("Active Instances", -1)
          ])]),
          _: 1
        }),
        C(re, {
          variant: "ghost",
          size: "xs",
          loading: e.isLoading,
          onClick: l[0] || (l[0] = (i) => n.$emit("refresh"))
        }, {
          default: h(() => [...l[5] || (l[5] = [
            b(" Refresh ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      e.isLoading && e.instances.length === 0 ? (a(), r("div", u3, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        b(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (a(), r("div", f3, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (a(), r("div", m3, [
        (a(!0), r(G, null, ge(o.value, (i) => (a(), R(r3, {
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
}), p3 = /* @__PURE__ */ pe(v3, [["__scopeId", "data-v-ba614fc3"]]), g3 = { class: "remote-header" }, h3 = { class: "remote-info" }, y3 = { class: "remote-icon" }, w3 = { class: "remote-name" }, _3 = {
  key: 0,
  class: "default-badge"
}, b3 = {
  key: 1,
  class: "sync-badge"
}, k3 = {
  key: 0,
  class: "ahead"
}, $3 = {
  key: 1,
  class: "behind"
}, C3 = {
  key: 1,
  class: "synced"
}, x3 = ["href"], S3 = {
  key: 1,
  class: "remote-url-text"
}, I3 = { class: "remote-actions" }, E3 = /* @__PURE__ */ ve({
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
      class: Ee(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", g3, [
        t("div", h3, [
          t("span", y3, f(o.value ? "🔗" : "🌐"), 1),
          t("span", w3, f(e.remote.name), 1),
          o.value ? (a(), r("span", _3, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", b3, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(G, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", k3, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", $3, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", C3, "✓ synced"))
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
        }, f(l.value), 9, x3)) : (a(), r("span", S3, f(l.value), 1))
      ]),
      t("div", I3, [
        C(re, {
          variant: "secondary",
          size: "xs",
          loading: e.isFetching,
          onClick: c[1] || (c[1] = (d) => i.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...c[4] || (c[4] = [
            b(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        e.syncStatus && e.syncStatus.ahead > 0 ? (a(), R(re, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: e.isPushing,
          onClick: c[2] || (c[2] = (d) => i.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            b(" Push ↑" + f(e.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : y("", !0),
        C(re, {
          variant: e.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: c[3] || (c[3] = (d) => i.$emit("select", e.remote.name))
        }, {
          default: h(() => [
            b(f(e.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), Mr = /* @__PURE__ */ pe(E3, [["__scopeId", "data-v-d687d161"]]), T3 = { class: "runpod-tab" }, P3 = { class: "api-key-card" }, R3 = { class: "api-key-row" }, M3 = { class: "api-key-input-wrapper" }, D3 = ["type", "disabled"], L3 = ["title"], O3 = { class: "status-icon" }, A3 = { class: "status-text" }, N3 = {
  key: 0,
  class: "credit-balance"
}, U3 = { class: "config-card" }, z3 = { class: "config-row" }, F3 = ["disabled"], B3 = {
  key: 0,
  value: ""
}, V3 = {
  key: 1,
  value: "",
  disabled: ""
}, W3 = ["value", "disabled"], G3 = { class: "config-row" }, j3 = {
  key: 0,
  class: "loading-inline"
}, H3 = { class: "no-volumes-state" }, K3 = { class: "no-volumes-text" }, q3 = ["value"], Y3 = { class: "config-row" }, J3 = ["disabled"], X3 = {
  key: 0,
  value: ""
}, Q3 = {
  key: 1,
  value: ""
}, Z3 = {
  key: 2,
  value: ""
}, e5 = ["value"], t5 = { class: "config-row" }, s5 = { class: "radio-group" }, o5 = { class: "radio-option" }, n5 = { class: "radio-label" }, a5 = { class: "radio-option disabled" }, l5 = { class: "radio-label" }, i5 = { class: "config-row" }, r5 = { class: "radio-group" }, c5 = { class: "radio-option" }, d5 = { class: "radio-label" }, u5 = { class: "radio-option disabled" }, f5 = { class: "radio-label" }, m5 = { class: "config-row" }, v5 = {
  key: 0,
  class: "loading-text"
}, p5 = {
  key: 1,
  class: "empty-remotes"
}, g5 = { class: "remotes-list" }, h5 = {
  key: 0,
  class: "sync-warning"
}, y5 = { class: "warning-content" }, w5 = { class: "remotes-footer" }, _5 = { class: "summary-card" }, b5 = {
  key: 0,
  class: "loading-text"
}, k5 = { class: "summary-row" }, $5 = { class: "summary-value" }, C5 = { class: "summary-row" }, x5 = { class: "summary-value" }, S5 = { class: "summary-row" }, I5 = { class: "summary-value" }, E5 = {
  key: 0,
  class: "summary-sub-row"
}, T5 = { class: "summary-sub-label" }, P5 = {
  key: 1,
  class: "summary-sub-row warning"
}, R5 = { class: "summary-sub-label" }, M5 = { class: "summary-row" }, D5 = { class: "summary-value" }, L5 = { class: "summary-row" }, O5 = { class: "summary-value" }, A5 = { class: "deployment-summary" }, N5 = { class: "summary-columns" }, U5 = { class: "summary-column" }, z5 = { class: "pricing-row" }, F5 = { class: "pricing-value" }, B5 = { class: "pricing-row" }, V5 = { class: "pricing-value" }, W5 = { class: "pricing-row" }, G5 = { class: "pricing-value" }, j5 = { class: "pricing-row total" }, H5 = { class: "pricing-value" }, K5 = { class: "summary-column" }, q5 = { class: "spec-row" }, Y5 = { class: "spec-row" }, J5 = {
  key: 0,
  class: "spec-row"
}, X5 = {
  key: 1,
  class: "spec-row spot-warning"
}, Q5 = {
  key: 4,
  class: "deploy-actions"
}, Z5 = { class: "progress-content" }, e8 = { class: "phase-indicator" }, t8 = { key: 0 }, s8 = { key: 1 }, o8 = { key: 2 }, n8 = {
  key: 3,
  class: "spinner"
}, a8 = { class: "phase-text" }, l8 = { class: "phase-name" }, i8 = { class: "phase-detail" }, r8 = {
  key: 0,
  class: "ready-actions"
}, c8 = { class: "console-link" }, d8 = ["href"], u8 = /* @__PURE__ */ ve({
  __name: "RunPodTab",
  emits: ["toast", "navigate", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getDeploySummary: n,
      testRunPodConnection: l,
      getNetworkVolumes: i,
      getRunPodGpuTypes: c,
      deployToRunPod: d,
      getDeploymentStatus: u,
      getStoredRunPodKey: m,
      clearRunPodKey: v,
      validateDeploy: g,
      getRemotes: w,
      getRemoteSyncStatus: p,
      fetchRemote: _,
      pushToRemote: S,
      getDataCenters: $
    } = at(), P = k(!1), M = k(""), E = k(!1), x = k(!1), q = k(null), B = k(null), A = k(""), I = k(""), T = k(""), O = k("SECURE"), ce = k("ON_DEMAND"), Y = k("my-comfyui-deploy"), j = k([]), se = k({}), ee = k(!1), U = k(null), N = k(null), D = k(null), Z = k([]), X = k(!1), he = k([]), Se = k(!1), ze = k([]), Ve = k(!1), be = k(null), Te = k(!1), He = k(!1), ke = k(null), ie = k(!1), Ge = k(null), Pe = k(null), L = k(null), V = k(!1), ne = k(null), le = k(!1), fe = k(!1), me = z(() => he.value.find((_e) => _e.id === I.value) || null), Ce = z(() => A.value ? he.value.filter((_e) => _e.data_center_id === A.value) : he.value), xe = z(() => ze.value.filter((_e) => _e.available)), ae = z(() => U.value && se.value[U.value] || null), ue = z(() => {
      if (!U.value) return null;
      const _e = j.value.find((Q) => Q.name === U.value);
      return (_e == null ? void 0 : _e.fetch_url) || null;
    }), Le = z(() => E.value && I.value && T.value && ue.value && !He.value && !V.value), Ie = (_e) => {
      const Q = ze.value.find((ht) => ht.id === T.value);
      if (!Q) return "0.00";
      if (_e === "SECURE") return (Q.securePrice ?? 0).toFixed(2);
      if (_e === "COMMUNITY") return (Q.communityPrice ?? 0).toFixed(2);
      const Ke = O.value === "SECURE";
      return _e === "ON_DEMAND" ? Ke ? (Q.securePrice ?? 0).toFixed(2) : (Q.communityPrice ?? 0).toFixed(2) : Ke ? (Q.secureSpotPrice ?? 0).toFixed(2) : (Q.communitySpotPrice ?? 0).toFixed(2);
    }, te = z(() => {
      const _e = ze.value.find((as) => as.id === T.value), Q = he.value.find((as) => as.id === I.value);
      if (!_e) return null;
      const Ke = O.value === "SECURE", ht = ce.value === "SPOT";
      let Kt;
      ht ? Kt = Ke ? _e.secureSpotPrice ?? 0 : _e.communitySpotPrice ?? 0 : Kt = Ke ? _e.securePrice ?? 0 : _e.communityPrice ?? 0;
      const gs = Q ? Q.size_gb * 14e-5 : 0, hs = 4e-3;
      return {
        gpu: Kt,
        volume: gs,
        container: hs,
        total: Kt + gs + hs
      };
    });
    async function K() {
      await Fe(), await Promise.all([vt(), Me()]);
    }
    async function Me() {
      ee.value = !0;
      try {
        const _e = await w();
        j.value = _e.remotes, await Promise.all(
          _e.remotes.map(async (Ke) => {
            const ht = await p(Ke.name);
            ht && (se.value[Ke.name] = ht);
          })
        );
        const Q = _e.remotes.find((Ke) => Ke.is_default);
        Q ? U.value = Q.name : _e.remotes.length > 0 && (U.value = _e.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        ee.value = !1;
      }
    }
    async function we(_e) {
      N.value = _e;
      try {
        await _(_e);
        const Q = await p(_e);
        Q && (se.value[_e] = Q), o("toast", `Fetched from ${_e}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        N.value = null;
      }
    }
    async function ye(_e) {
      D.value = _e;
      try {
        await S(_e, { force: !1 });
        const Q = await p(_e);
        Q && (se.value[_e] = Q), o("toast", `Pushed to ${_e}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        D.value = null;
      }
    }
    function W(_e) {
      U.value = _e;
    }
    async function F() {
      if (M.value) {
        x.value = !0, q.value = null;
        try {
          const _e = await l(M.value, !0);
          _e.status === "success" ? (E.value = !0, B.value = _e.credit_balance ?? null, q.value = { type: "success", message: _e.message }, await K()) : q.value = { type: "error", message: _e.message };
        } catch (_e) {
          q.value = {
            type: "error",
            message: _e instanceof Error ? _e.message : "Connection test failed"
          };
        } finally {
          x.value = !1;
        }
      }
    }
    async function de() {
      try {
        await v(), M.value = "", E.value = !1, q.value = null, B.value = null, Z.value = [], A.value = "", he.value = [], I.value = "", ze.value = [], T.value = "", be.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function Fe() {
      Se.value = !0, X.value = !0;
      try {
        const _e = await i();
        he.value = _e.volumes;
        const Q = /* @__PURE__ */ new Map();
        for (const Ke of _e.volumes)
          Ke.data_center_id && !Q.has(Ke.data_center_id) && Q.set(Ke.data_center_id, {
            id: Ke.data_center_id,
            name: Ke.data_center_name || Ke.data_center_id,
            available: !0
          });
        if (_e.volumes.length === 0) {
          const Ke = await $();
          Z.value = Ke.data_centers;
        } else
          Z.value = Array.from(Q.values());
        if (he.value.length > 0) {
          const Ke = he.value[0];
          I.value = Ke.id, Ke.data_center_id && (A.value = Ke.data_center_id, await Qe(Ke.data_center_id));
        } else Z.value.length > 0 && (A.value = Z.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        Se.value = !1, X.value = !1;
      }
    }
    async function Qe(_e) {
      Ve.value = !0;
      try {
        const Q = await c(_e);
        ze.value = Q.gpu_types;
        const Ke = ze.value.find((ht) => ht.available);
        Ke ? T.value = Ke.id : T.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        Ve.value = !1;
      }
    }
    Ct(A, async (_e) => {
      if (!_e || Se.value) return;
      const Q = he.value.find((Ke) => Ke.id === I.value);
      Q && Q.data_center_id !== _e && (I.value = ""), await Qe(_e);
    }), Ct(I, async (_e) => {
      if (!_e) {
        ze.value = [], T.value = "";
        return;
      }
      if (Se.value) return;
      const Q = he.value.find((Ke) => Ke.id === _e);
      Q && Q.data_center_id !== A.value ? A.value = Q.data_center_id : Q && await Qe(Q.data_center_id);
    });
    async function vt() {
      Te.value = !0;
      try {
        be.value = await n();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        Te.value = !1;
      }
    }
    async function lt() {
      if (!(!T.value || !I.value)) {
        V.value = !0, ke.value = null;
        try {
          const _e = await g();
          ne.value = _e, _e.can_export ? _e.warnings.models_without_sources.length > 0 ? fe.value = !0 : await Ut() : le.value = !0;
        } catch (_e) {
          ke.value = {
            status: "error",
            message: _e instanceof Error ? _e.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          V.value = !1;
        }
      }
    }
    async function ut() {
      fe.value = !1, await Ut();
    }
    async function Rt() {
      try {
        const _e = await g();
        ne.value = _e;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function Ut() {
      He.value = !0;
      try {
        let _e;
        if (ce.value === "SPOT") {
          const Ke = ze.value.find((ht) => ht.id === T.value);
          Ke && (_e = O.value === "SECURE" ? Ke.secureSpotPrice : Ke.communitySpotPrice);
        }
        const Q = await d({
          gpu_type_id: T.value,
          pod_name: Y.value || "my-comfyui-deploy",
          network_volume_id: I.value,
          cloud_type: O.value,
          pricing_type: ce.value,
          spot_bid: _e,
          import_source: ue.value
        });
        ke.value = Q, Q.status === "success" && Q.pod_id ? (Ge.value = Q.pod_id, ie.value = !0, Ht(Q.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", Q.message, "error");
      } catch (_e) {
        ke.value = {
          status: "error",
          message: _e instanceof Error ? _e.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        He.value = !1;
      }
    }
    function Ht(_e) {
      Ps(_e), L.value = window.setInterval(() => Ps(_e), 3e3);
    }
    function Bs() {
      L.value && (clearInterval(L.value), L.value = null);
    }
    async function Ps(_e) {
      try {
        const Q = await u(_e);
        Pe.value = Q, (Q.phase === "READY" || Q.phase === "ERROR" || Q.phase === "STOPPED") && (Bs(), Q.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (Q) {
        console.error("Failed to poll deployment status:", Q);
      }
    }
    function so() {
      ie.value = !1, Bs(), Ge.value = null, Pe.value = null;
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
        _e.has_key && _e.key_preview && (M.value = `****${_e.key_preview}`, _e.valid ? (E.value = !0, B.value = _e.credit_balance ?? null, q.value = { type: "success", message: "Connected to RunPod" }, await K()) : _e.error && (q.value = { type: "error", message: _e.error }));
      } catch {
      }
    }), to(() => {
      Bs();
    }), (_e, Q) => {
      var Ke, ht, Kt, gs, hs, as;
      return a(), r(G, null, [
        t("div", T3, [
          C(it, { title: "RUNPOD API KEY" }, {
            default: h(() => [
              t("div", P3, [
                t("div", R3, [
                  t("div", M3, [
                    Ye(t("input", {
                      "onUpdate:modelValue": Q[0] || (Q[0] = (Oe) => M.value = Oe),
                      type: P.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: E.value
                    }, null, 8, D3), [
                      [jn, M.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: Q[1] || (Q[1] = (Oe) => P.value = !P.value),
                      title: P.value ? "Hide key" : "Show key"
                    }, f(P.value ? "👁" : "👁‍🗨"), 9, L3)
                  ]),
                  E.value ? y("", !0) : (a(), R(re, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: x.value,
                    disabled: !M.value || x.value,
                    onClick: F
                  }, {
                    default: h(() => [...Q[16] || (Q[16] = [
                      b(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  E.value ? (a(), R(re, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: de
                  }, {
                    default: h(() => [...Q[17] || (Q[17] = [
                      b(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                q.value ? (a(), r("div", {
                  key: 0,
                  class: Ee(["connection-status", q.value.type])
                }, [
                  t("span", O3, f(q.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", A3, f(q.value.message), 1),
                  B.value !== null ? (a(), r("span", N3, " $" + f(B.value.toFixed(2)) + " credit ", 1)) : y("", !0)
                ], 2)) : y("", !0),
                Q[18] || (Q[18] = t("div", { class: "api-key-help" }, [
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
          E.value ? (a(), R(it, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: h(() => [
              t("div", U3, [
                t("div", z3, [
                  Q[19] || (Q[19] = t("label", { class: "config-label" }, "Region", -1)),
                  Ye(t("select", {
                    "onUpdate:modelValue": Q[2] || (Q[2] = (Oe) => A.value = Oe),
                    class: "config-select",
                    disabled: X.value
                  }, [
                    X.value ? (a(), r("option", B3, "Loading...")) : A.value ? y("", !0) : (a(), r("option", V3, "Select a region")),
                    (a(!0), r(G, null, ge(Z.value, (Oe) => (a(), r("option", {
                      key: Oe.id,
                      value: Oe.id,
                      disabled: !Oe.available
                    }, f(Oe.id) + " (" + f(Oe.name) + ")" + f(Oe.available ? "" : " [Unavailable]"), 9, W3))), 128))
                  ], 8, F3), [
                    [ps, A.value]
                  ])
                ]),
                t("div", G3, [
                  Q[24] || (Q[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  Se.value ? (a(), r("div", j3, "Loading volumes...")) : Ce.value.length === 0 ? (a(), r(G, { key: 1 }, [
                    t("div", H3, [
                      Q[20] || (Q[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", K3, "No volumes in " + f(A.value || "this region"), 1)
                    ]),
                    Q[21] || (Q[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    Q[22] || (Q[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (a(), r(G, { key: 2 }, [
                    Ye(t("select", {
                      "onUpdate:modelValue": Q[3] || (Q[3] = (Oe) => I.value = Oe),
                      class: "config-select"
                    }, [
                      (a(!0), r(G, null, ge(Ce.value, (Oe) => (a(), r("option", {
                        key: Oe.id,
                        value: Oe.id
                      }, f(Oe.name) + " (" + f(Oe.size_gb) + "GB) ", 9, q3))), 128))
                    ], 512), [
                      [ps, I.value]
                    ]),
                    Q[23] || (Q[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", Y3, [
                  Q[25] || (Q[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  Ye(t("select", {
                    "onUpdate:modelValue": Q[4] || (Q[4] = (Oe) => T.value = Oe),
                    class: "config-select",
                    disabled: Ve.value || !I.value
                  }, [
                    I.value ? Ve.value ? (a(), r("option", Q3, "Loading GPUs...")) : xe.value.length === 0 ? (a(), r("option", Z3, "No GPUs available in this region")) : y("", !0) : (a(), r("option", X3, "Select a volume first")),
                    (a(!0), r(G, null, ge(xe.value, (Oe) => (a(), r("option", {
                      key: Oe.id,
                      value: Oe.id
                    }, f(Oe.displayName) + " (" + f(Oe.memoryInGb) + "GB) - $" + f(O.value === "SECURE" ? (Oe.securePrice ?? 0).toFixed(2) : (Oe.communityPrice ?? 0).toFixed(2)) + "/hr " + f(Oe.stockStatus ? `[${Oe.stockStatus}]` : ""), 9, e5))), 128))
                  ], 8, J3), [
                    [ps, T.value]
                  ])
                ]),
                t("div", t5, [
                  Q[26] || (Q[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", s5, [
                    t("label", o5, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[5] || (Q[5] = (Oe) => O.value = Oe),
                        value: "SECURE"
                      }, null, 512), [
                        [Jt, O.value]
                      ]),
                      t("span", n5, "Secure ($" + f(Ie("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", a5, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[6] || (Q[6] = (Oe) => O.value = Oe),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [Jt, O.value]
                      ]),
                      t("span", l5, "Community ($" + f(Ie("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", i5, [
                  Q[27] || (Q[27] = t("label", { class: "config-label" }, [
                    b(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", r5, [
                    t("label", c5, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[7] || (Q[7] = (Oe) => ce.value = Oe),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Jt, ce.value]
                      ]),
                      t("span", d5, "On-Demand ($" + f(Ie("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", u5, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[8] || (Q[8] = (Oe) => ce.value = Oe),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [Jt, ce.value]
                      ]),
                      t("span", f5, "Spot ($" + f(Ie("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", m5, [
                  Q[28] || (Q[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  Ye(t("input", {
                    "onUpdate:modelValue": Q[9] || (Q[9] = (Oe) => Y.value = Oe),
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
          E.value ? (a(), R(it, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: h(() => [
              ee.value ? (a(), r("div", v5, "Loading remotes...")) : j.value.length === 0 ? (a(), r("div", p5, [
                Q[30] || (Q[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                C(re, {
                  variant: "primary",
                  size: "xs",
                  onClick: Q[10] || (Q[10] = (Oe) => o("navigate", "remotes"))
                }, {
                  default: h(() => [...Q[29] || (Q[29] = [
                    b(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (a(), r(G, { key: 2 }, [
                t("div", g5, [
                  (a(!0), r(G, null, ge(j.value, (Oe) => (a(), R(Mr, {
                    key: Oe.name,
                    remote: Oe,
                    "sync-status": se.value[Oe.name],
                    "is-selected": U.value === Oe.name,
                    "is-fetching": N.value === Oe.name,
                    "is-pushing": D.value === Oe.name,
                    onFetch: we,
                    onPush: ye,
                    onSelect: W
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                ae.value && ae.value.ahead > 0 ? (a(), r("div", h5, [
                  Q[31] || (Q[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", y5, [
                    t("strong", null, f(ae.value.ahead) + " unpushed commit" + f(ae.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + f(U.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  C(re, {
                    variant: "primary",
                    size: "xs",
                    loading: D.value === U.value,
                    onClick: Q[11] || (Q[11] = (Oe) => U.value && ye(U.value))
                  }, {
                    default: h(() => [
                      b(" Push to " + f(U.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", w5, [
                  C(re, {
                    variant: "link",
                    size: "xs",
                    onClick: Q[12] || (Q[12] = (Oe) => o("navigate", "remotes"))
                  }, {
                    default: h(() => [...Q[32] || (Q[32] = [
                      b(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : y("", !0),
          E.value ? (a(), R(it, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: h(() => [
              t("div", _5, [
                Te.value ? (a(), r("div", b5, "Loading environment summary...")) : be.value ? (a(), r(G, { key: 1 }, [
                  t("div", k5, [
                    Q[33] || (Q[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", $5, f(be.value.comfyui_version), 1)
                  ]),
                  t("div", C5, [
                    Q[34] || (Q[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", x5, f(be.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", S5, [
                    Q[35] || (Q[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", I5, f(be.value.model_count) + " models", 1)
                  ]),
                  be.value.models_with_sources > 0 ? (a(), r("div", E5, [
                    t("span", T5, "└─ " + f(be.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  be.value.models_without_sources > 0 ? (a(), r("div", P5, [
                    t("span", R5, "└─ " + f(be.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", M5, [
                    Q[36] || (Q[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", D5, f(be.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", L5, [
                    Q[37] || (Q[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", O5, "~" + f(be.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          E.value && te.value ? (a(), R(it, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: h(() => {
              var Oe, ls;
              return [
                t("div", A5, [
                  t("div", N5, [
                    t("div", U5, [
                      Q[42] || (Q[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", z5, [
                        Q[38] || (Q[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", F5, "$" + f(te.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", B5, [
                        Q[39] || (Q[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", V5, "$" + f(te.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", W5, [
                        Q[40] || (Q[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", G5, "$" + f(te.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      Q[43] || (Q[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", j5, [
                        Q[41] || (Q[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", H5, "~$" + f(te.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", K5, [
                      Q[45] || (Q[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", q5, [
                        t("span", null, f(((Oe = ze.value.find((oe) => oe.id === T.value)) == null ? void 0 : Oe.displayName) || "GPU") + " (" + f(((ls = ze.value.find((oe) => oe.id === T.value)) == null ? void 0 : ls.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", Y5, [
                        t("span", null, "Region: " + f(A.value), 1)
                      ]),
                      me.value ? (a(), r("div", J5, [
                        t("span", null, "Volume: " + f(me.value.name), 1)
                      ])) : y("", !0),
                      ce.value === "SPOT" ? (a(), r("div", X5, [...Q[44] || (Q[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          E.value ? (a(), r("div", Q5, [
            C(re, {
              variant: "primary",
              size: "md",
              loading: V.value || He.value,
              disabled: !Le.value,
              onClick: lt
            }, {
              default: h(() => [
                Q[46] || (Q[46] = t("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  t("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1)),
                b(" " + f(V.value ? "Validating..." : He.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          ke.value ? (a(), R(it, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: h(() => [
              C(Et, {
                status: ke.value.status === "success" ? "synced" : "broken"
              }, eo({
                icon: h(() => [
                  b(f(ke.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  b(f(ke.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: h(() => [
                  b(f(ke.value.message), 1)
                ]),
                actions: h(() => [
                  C(re, {
                    variant: "ghost",
                    size: "xs",
                    onClick: Q[13] || (Q[13] = (Oe) => ke.value = null)
                  }, {
                    default: h(() => [...Q[47] || (Q[47] = [
                      b(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                ke.value.pod_id ? {
                  name: "details",
                  fn: h(() => [
                    C(ft, {
                      label: "Pod ID:",
                      value: ke.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : y("", !0)
        ]),
        ie.value ? (a(), R(pt, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((Ke = Pe.value) == null ? void 0 : Ke.phase) === "READY" || ((ht = Pe.value) == null ? void 0 : ht.phase) === "ERROR" || ((Kt = Pe.value) == null ? void 0 : Kt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: so
        }, eo({
          body: h(() => {
            var Oe, ls, oe, H, De, je, ot, mt, Mt, is, Vs, Ws;
            return [
              t("div", Z5, [
                t("div", e8, [
                  t("div", {
                    class: Ee(["phase-icon", (ls = (Oe = Pe.value) == null ? void 0 : Oe.phase) == null ? void 0 : ls.toLowerCase()])
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
                  variant: ((Mt = Pe.value) == null ? void 0 : Mt.phase) === "ERROR" ? "error" : ((is = Pe.value) == null ? void 0 : is.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Vs = Pe.value) == null ? void 0 : Vs.phase) === "READY" ? (a(), r("div", r8, [
                  C(re, {
                    variant: "primary",
                    size: "md",
                    onClick: ko
                  }, {
                    default: h(() => [...Q[48] || (Q[48] = [
                      b(" Open ComfyUI ", -1)
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
                  }, " View in RunPod Console → ", 8, d8)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((gs = Pe.value) == null ? void 0 : gs.phase) === "READY" || ((hs = Pe.value) == null ? void 0 : hs.phase) === "ERROR" || ((as = Pe.value) == null ? void 0 : as.phase) === "STOPPED" ? {
            name: "footer",
            fn: h(() => [
              C(re, {
                variant: "ghost",
                size: "xs",
                onClick: so
              }, {
                default: h(() => [...Q[49] || (Q[49] = [
                  b(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : y("", !0),
        le.value && ne.value ? (a(), R(Er, {
          key: 1,
          issues: ne.value.blocking_issues,
          onClose: Q[14] || (Q[14] = (Oe) => le.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        fe.value && ne.value ? (a(), R(Tr, {
          key: 2,
          models: ne.value.warnings.models_without_sources,
          onConfirm: ut,
          onCancel: Q[15] || (Q[15] = (Oe) => fe.value = !1),
          onRevalidate: Rt
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), f8 = /* @__PURE__ */ pe(u8, [["__scopeId", "data-v-522cd4d9"]]), m8 = { class: "worker-header" }, v8 = { class: "worker-status" }, p8 = { class: "worker-name" }, g8 = { class: "worker-actions" }, h8 = { class: "worker-details" }, y8 = { class: "detail-item" }, w8 = { class: "detail-value" }, _8 = {
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
      class: Ee(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      t("div", m8, [
        t("div", v8, [
          t("span", {
            class: Ee(["status-dot", e.worker.status])
          }, null, 2),
          t("span", p8, f(e.worker.name), 1)
        ]),
        t("div", g8, [
          e.worker.status === "online" ? (a(), R(re, {
            key: 0,
            variant: "primary",
            size: "xs",
            disabled: e.isActionLoading,
            onClick: o[0] || (o[0] = (n) => s.$emit("deploy", e.worker))
          }, {
            default: h(() => [...o[2] || (o[2] = [
              b(" Deploy ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])) : y("", !0),
          C(re, {
            variant: "ghost",
            size: "xs",
            loading: e.isActionLoading,
            onClick: o[1] || (o[1] = (n) => s.$emit("remove", e.worker.name))
          }, {
            default: h(() => [...o[3] || (o[3] = [
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
    }), i = k(!1), c = k(!1), d = k(!1), u = k(null), m = z(() => l.host && l.port && l.apiKey), v = z(() => l.name && l.host && l.port && l.apiKey);
    async function g() {
      if (m.value) {
        c.value = !0, u.value = null;
        try {
          const p = await n({
            host: l.host,
            port: l.port,
            api_key: l.apiKey
          });
          p.status === "success" ? (u.value = {
            type: "success",
            message: p.message,
            gpu_info: p.gpu_info
          }, !l.name && p.gpu_info && (l.name = `worker-${l.host.split(".").pop()}`)) : u.value = {
            type: "error",
            message: p.message
          };
        } catch (p) {
          u.value = {
            type: "error",
            message: p instanceof Error ? p.message : "Connection test failed"
          };
        } finally {
          c.value = !1;
        }
      }
    }
    function w() {
      v.value && (d.value = !0, o("add", {
        name: l.name,
        host: l.host,
        port: l.port,
        api_key: l.apiKey
      }));
    }
    return (p, _) => (a(), R(pt, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: _[5] || (_[5] = (S) => p.$emit("close"))
    }, {
      body: h(() => [
        t("div", P8, [
          t("div", R8, [
            t("div", M8, [
              _[6] || (_[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              Ye(t("input", {
                "onUpdate:modelValue": _[0] || (_[0] = (S) => l.name = S),
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
                Ye(t("input", {
                  "onUpdate:modelValue": _[1] || (_[1] = (S) => l.host = S),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [Nt, l.host]
                ])
              ]),
              t("div", O8, [
                _[8] || (_[8] = t("label", { class: "form-label" }, "Port", -1)),
                Ye(t("input", {
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
            t("div", A8, [
              _[9] || (_[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", N8, [
                Ye(t("input", {
                  "onUpdate:modelValue": _[3] || (_[3] = (S) => l.apiKey = S),
                  type: i.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, U8), [
                  [jn, l.apiKey]
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
            u.value ? (a(), r("div", {
              key: 0,
              class: Ee(["test-result", u.value.type])
            }, [
              t("span", z8, f(u.value.type === "success" ? "✓" : "✕"), 1),
              t("div", F8, [
                t("span", B8, f(u.value.message), 1),
                u.value.gpu_info ? (a(), r("span", V8, "GPU: " + f(u.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        t("div", W8, [
          C(re, {
            variant: "ghost",
            size: "sm",
            loading: c.value,
            disabled: !m.value || c.value,
            onClick: g
          }, {
            default: h(() => [..._[11] || (_[11] = [
              b(" Test Connection ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          C(re, {
            variant: "primary",
            size: "sm",
            loading: d.value,
            disabled: !v.value || d.value,
            onClick: w
          }, {
            default: h(() => [..._[12] || (_[12] = [
              b(" Add Worker ", -1)
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
    const o = s, { testWorkerConnection: n } = at(), l = k(null), i = k(""), c = k(!1), d = k(!1), u = k(null), m = k(null);
    async function v(w) {
      var p;
      l.value = w, i.value = "", m.value = null, await en(), (p = u.value) == null || p.focus();
    }
    async function g() {
      if (!(!l.value || !i.value)) {
        d.value = !0, m.value = null;
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
          d.value = !1;
        }
      }
    }
    return (w, p) => (a(), R(pt, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (_) => w.$emit("close"))
    }, {
      body: h(() => [
        t("div", H8, [
          e.workers.length > 0 ? (a(), r("div", K8, [
            (a(!0), r(G, null, ge(e.workers, (_) => (a(), r("div", {
              key: `${_.host}:${_.port}`,
              class: "worker-item"
            }, [
              t("div", q8, [
                t("span", Y8, f(_.name), 1),
                t("span", J8, f(_.host) + ":" + f(_.port), 1),
                _.gpu_info ? (a(), r("span", X8, f(_.gpu_info), 1)) : y("", !0)
              ]),
              C(re, {
                variant: "primary",
                size: "xs",
                onClick: (S) => v(_)
              }, {
                default: h(() => [...p[4] || (p[4] = [
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
                Ye(t("input", {
                  ref_key: "apiKeyInput",
                  ref: u,
                  "onUpdate:modelValue": p[0] || (p[0] = (_) => i.value = _),
                  type: c.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: Qt(g, ["enter"])
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
              class: Ee(["test-result", m.value.type])
            }, [
              t("span", lS, f(m.value.type === "success" ? "✓" : "✕"), 1),
              t("span", iS, f(m.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", rS, [
          l.value ? (a(), R(re, {
            key: 0,
            variant: "ghost",
            size: "sm",
            onClick: p[2] || (p[2] = (_) => {
              l.value = null, i.value = "", m.value = null;
            })
          }, {
            default: h(() => [...p[9] || (p[9] = [
              b(" Back ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          l.value ? (a(), R(re, {
            key: 1,
            variant: "primary",
            size: "sm",
            loading: d.value,
            disabled: !i.value || d.value,
            onClick: g
          }, {
            default: h(() => [...p[10] || (p[10] = [
              b(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])) : y("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), dS = /* @__PURE__ */ pe(cS, [["__scopeId", "data-v-5a3e40a4"]]), uS = { class: "deploy-content" }, fS = { class: "section" }, mS = {
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
      pushToRemote: d,
      getDeploySummary: u,
      deployToWorker: m
    } = at(), v = k([]), g = k({}), w = k(!1), p = k(null), _ = k(null), S = k(null), $ = k(o.worker.mode || "native"), P = k(""), M = k(null), E = k(!1), x = z(() => p.value && g.value[p.value] || null), q = z(() => {
      if (!p.value) return null;
      const j = v.value.find((se) => se.name === p.value);
      return (j == null ? void 0 : j.fetch_url) || null;
    }), B = z(() => q.value && !E.value);
    async function A() {
      w.value = !0;
      try {
        const j = await l();
        v.value = j.remotes, await Promise.all(
          j.remotes.map(async (ee) => {
            const U = await i(ee.name);
            U && (g.value[ee.name] = U);
          })
        );
        const se = j.remotes.find((ee) => ee.is_default);
        se ? p.value = se.name : j.remotes.length > 0 && (p.value = j.remotes[0].name);
      } catch {
        n("toast", "Failed to load remotes", "error");
      } finally {
        w.value = !1;
      }
    }
    async function I() {
      try {
        M.value = await u();
      } catch {
      }
    }
    async function T(j) {
      _.value = j;
      try {
        await c(j);
        const se = await i(j);
        se && (g.value[j] = se), n("toast", `Fetched from ${j}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        _.value = null;
      }
    }
    async function O(j) {
      S.value = j;
      try {
        await d(j, { force: !1 });
        const se = await i(j);
        se && (g.value[j] = se), n("toast", `Pushed to ${j}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        S.value = null;
      }
    }
    function ce(j) {
      p.value = j;
    }
    async function Y() {
      if (q.value) {
        E.value = !0;
        try {
          const j = await m(o.worker.name, {
            import_source: q.value,
            mode: $.value,
            name: P.value || void 0
          });
          j.id ? (n("toast", `Deployment started: ${j.name || j.id}`, "success"), n("deployed")) : j.status === "error" ? n("toast", j.message || "Deployment failed", "error") : n("toast", "Unexpected response from worker", "error");
        } catch (j) {
          n("toast", j instanceof Error ? j.message : "Deployment failed", "error");
        } finally {
          E.value = !1;
        }
      }
    }
    return et(() => {
      A(), I();
    }), (j, se) => (a(), R(pt, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: se[5] || (se[5] = (ee) => j.$emit("close"))
    }, {
      body: h(() => [
        t("div", uS, [
          t("div", fS, [
            se[7] || (se[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            w.value ? (a(), r("div", mS, "Loading remotes...")) : v.value.length === 0 ? (a(), r("div", vS, [...se[6] || (se[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (a(), r("div", pS, [
              (a(!0), r(G, null, ge(v.value, (ee) => (a(), R(Mr, {
                key: ee.name,
                remote: ee,
                "sync-status": g.value[ee.name],
                "is-selected": p.value === ee.name,
                "is-fetching": _.value === ee.name,
                "is-pushing": S.value === ee.name,
                onFetch: T,
                onPush: O,
                onSelect: ce
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", gS, [
            se[10] || (se[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", hS, [
              t("label", yS, [
                Ye(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": se[0] || (se[0] = (ee) => $.value = ee),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, wS), [
                  [Jt, $.value]
                ]),
                se[8] || (se[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", _S, [
                Ye(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": se[1] || (se[1] = (ee) => $.value = ee),
                  value: "native"
                }, null, 512), [
                  [Jt, $.value]
                ]),
                se[9] || (se[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", bS, [
            se[11] || (se[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            Ye(t("input", {
              "onUpdate:modelValue": se[2] || (se[2] = (ee) => P.value = ee),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [Nt, P.value]
            ])
          ]),
          M.value ? (a(), r("div", kS, [
            se[12] || (se[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", $S, " ComfyUI: " + f(M.value.comfyui_version) + " • " + f(M.value.node_count) + " nodes • " + f(M.value.model_count) + " models • " + f(M.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          x.value && x.value.ahead > 0 ? (a(), r("div", CS, [
            se[14] || (se[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", xS, [
              t("strong", null, f(x.value.ahead) + " unpushed commit" + f(x.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + f(p.value) + "' before deploying to include your latest changes.", 1)
            ]),
            C(re, {
              variant: "primary",
              size: "xs",
              loading: S.value === p.value,
              onClick: se[3] || (se[3] = (ee) => p.value && O(p.value))
            }, {
              default: h(() => [...se[13] || (se[13] = [
                b(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", SS, [
          C(re, {
            variant: "ghost",
            size: "sm",
            onClick: se[4] || (se[4] = (ee) => j.$emit("close"))
          }, {
            default: h(() => [...se[15] || (se[15] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          C(re, {
            variant: "primary",
            size: "sm",
            loading: E.value,
            disabled: !B.value || E.value,
            onClick: Y
          }, {
            default: h(() => [...se[16] || (se[16] = [
              b(" Deploy to Worker ", -1)
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
    } = at(), d = k([]), u = k([]), m = k(!1), v = k(!1), g = k(null), w = k(!1), p = k(!1), _ = k(null), S = k(null);
    async function $() {
      m.value = !0;
      try {
        const A = await n();
        d.value = A.workers;
      } catch (A) {
        o("toast", A instanceof Error ? A.message : "Failed to load workers", "error");
      } finally {
        m.value = !1;
      }
    }
    async function P() {
      v.value = !0, S.value = null;
      try {
        const A = await c(), I = A.discovered.filter(
          (T) => !d.value.some((O) => O.host === T.host && O.port === T.port)
        );
        u.value = I, I.length > 0 ? p.value = !0 : A.discovered.length > 0 ? S.value = {
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
    async function M(A) {
      try {
        await l(A), o("toast", `Worker '${A.name}' added`, "success"), w.value = !1, await $();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to add worker", "error");
      }
    }
    async function E(A) {
      try {
        await l(A), o("toast", `Worker '${A.name}' added`, "success"), p.value = !1, await $();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to add worker", "error");
      }
    }
    async function x(A) {
      g.value = A;
      try {
        await i(A), o("toast", `Worker '${A}' removed`, "success"), await $();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to remove worker", "error");
      } finally {
        g.value = null;
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
          C(re, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: P
          }, {
            default: h(() => [...I[6] || (I[6] = [
              b(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          C(re, {
            variant: "secondary",
            size: "xs",
            onClick: I[0] || (I[0] = (T) => w.value = !0)
          }, {
            default: h(() => [...I[7] || (I[7] = [
              b(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("div", MS, [
        m.value && d.value.length === 0 ? (a(), r("div", DS, [...I[9] || (I[9] = [
          t("span", { class: "spinner" }, null, -1),
          b(" Loading workers... ", -1)
        ])])) : d.value.length === 0 ? (a(), r("div", LS, [...I[10] || (I[10] = [
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
          (a(!0), r(G, null, ge(d.value, (T) => (a(), R(T8, {
            key: T.name,
            worker: T,
            "is-action-loading": g.value === T.name,
            onDeploy: q,
            onRemove: x
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      S.value ? (a(), r("div", {
        key: 0,
        class: Ee(["scan-result", S.value.type])
      }, [
        t("span", AS, f(S.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", NS, f(S.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: I[1] || (I[1] = (T) => S.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (a(), R(dS, {
        key: 1,
        workers: u.value,
        onClose: I[2] || (I[2] = (T) => p.value = !1),
        onAdd: E
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (a(), R(j8, {
        key: 2,
        onClose: I[3] || (I[3] = (T) => w.value = !1),
        onAdd: M
      })) : y("", !0),
      _.value ? (a(), R(ES, {
        key: 3,
        worker: _.value,
        onClose: I[4] || (I[4] = (T) => _.value = null),
        onToast: I[5] || (I[5] = (T, O) => o("toast", T, O)),
        onDeployed: B
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), zS = /* @__PURE__ */ pe(US, [["__scopeId", "data-v-1637dead"]]), ua = "ComfyGit.Deploy.GitHubPAT";
function Dr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function FS(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function BS() {
  function e() {
    try {
      return localStorage.getItem(ua);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem(ua, l);
    } catch (i) {
      console.error("[useGitAuth] Failed to save token:", i);
    }
  }
  function o() {
    try {
      localStorage.removeItem(ua);
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
    const o = s, { getToken: n, setToken: l, clearToken: i, hasToken: c } = BS(), { getRemotes: d, testGitAuth: u } = at(), m = k(""), v = k(!1), g = k(!1), w = k(null), p = k(!1), _ = z(() => c());
    et(async () => {
      var E;
      const M = n();
      M && (m.value = M);
      try {
        const q = (E = (await d()).remotes) == null ? void 0 : E.find((B) => B.name === "origin");
        q && Dr(q.url) && (p.value = !0);
      } catch {
      }
    });
    async function S() {
      if (m.value) {
        g.value = !0, w.value = null;
        try {
          const M = await u(m.value);
          w.value = {
            type: M.status === "success" ? "success" : "error",
            message: M.message
          };
        } catch (M) {
          w.value = {
            type: "error",
            message: M instanceof Error ? M.message : "Connection test failed"
          };
        } finally {
          g.value = !1;
        }
      }
    }
    function $() {
      m.value && (l(m.value), o("saved"), o("close"));
    }
    function P() {
      i(), m.value = "", w.value = null;
    }
    return (M, E) => (a(), R(pt, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: E[2] || (E[2] = (x) => M.$emit("close"))
    }, {
      body: h(() => [
        t("div", VS, [
          t("div", WS, [
            E[8] || (E[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            E[9] || (E[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (a(), r("div", GS, [...E[3] || (E[3] = [
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
              E[4] || (E[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", HS, [
                Ye(t("input", {
                  "onUpdate:modelValue": E[0] || (E[0] = (x) => m.value = x),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, KS), [
                  [jn, m.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: E[1] || (E[1] = (x) => v.value = !v.value)
                }, f(v.value ? "Hide" : "Show"), 1)
              ]),
              E[5] || (E[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            w.value ? (a(), r("div", {
              key: 1,
              class: Ee(["test-result", w.value.type])
            }, [
              t("span", qS, f(w.value.type === "success" ? "✓" : "✕"), 1),
              t("span", YS, f(w.value.message), 1)
            ], 2)) : y("", !0),
            t("div", JS, [
              C(re, {
                variant: "ghost",
                size: "sm",
                loading: g.value,
                disabled: !m.value || g.value,
                onClick: S
              }, {
                default: h(() => [...E[6] || (E[6] = [
                  b(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              _.value ? (a(), R(re, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: P
              }, {
                default: h(() => [...E[7] || (E[7] = [
                  b(" Clear ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        C(re, {
          variant: "primary",
          size: "sm",
          disabled: !m.value,
          onClick: $
        }, {
          default: h(() => [...E[10] || (E[10] = [
            b(" Save ", -1)
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
      stopInstance: d,
      startInstance: u,
      terminateInstance: m,
      startPolling: v,
      stopPolling: g
    } = Rr(), w = k(!1), p = k(!1), _ = k("instances"), S = k(null), $ = k(null), P = z(() => [
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
    async function M(A) {
      S.value = A.id;
      try {
        await d(A), o("toast", "Instance stopped", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to stop instance", "error");
      } finally {
        S.value = null;
      }
    }
    async function E(A) {
      S.value = A.id;
      try {
        await u(A), o("toast", "Instance starting...", "success");
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
      await c(), _.value = "instances";
    }
    return et(() => {
      c(), v();
    }), to(() => {
      g();
    }), (A, I) => (a(), r(G, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: I[1] || (I[1] = (T) => w.value = !0)
          }, {
            actions: h(() => [
              C(re, {
                variant: "ghost",
                size: "xs",
                onClick: I[0] || (I[0] = (T) => p.value = !0)
              }, {
                default: h(() => [...I[10] || (I[10] = [
                  b(" Settings ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          C($r, {
            modelValue: _.value,
            "onUpdate:modelValue": I[2] || (I[2] = (T) => _.value = T),
            tabs: P.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: h(() => [
          _.value === "instances" ? (a(), R(p3, {
            key: 0,
            instances: Be(n),
            "is-loading": Be(l),
            "action-loading-id": S.value,
            onRefresh: Be(c),
            onStop: M,
            onStart: E,
            onTerminate: x
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          _.value === "runpod" ? (a(), R(f8, {
            key: 1,
            onToast: I[3] || (I[3] = (T, O) => o("toast", T, O)),
            onNavigate: I[4] || (I[4] = (T) => o("navigate", T)),
            onDeployed: B
          })) : y("", !0),
          _.value === "custom" ? (a(), R(zS, {
            key: 2,
            onToast: I[5] || (I[5] = (T, O) => o("toast", T, O)),
            onDeployed: B
          })) : y("", !0)
        ]),
        _: 1
      }),
      $.value ? (a(), R(Qa, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${$.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: q,
        onCancel: I[6] || (I[6] = (T) => $.value = null)
      }, null, 8, ["message"])) : y("", !0),
      C(ns, {
        show: w.value,
        title: "Deploy to Cloud",
        onClose: I[7] || (I[7] = (T) => w.value = !1)
      }, {
        content: h(() => [...I[11] || (I[11] = [
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
}, r4 = { class: "stats-row" }, c4 = { class: "stat" }, d4 = { class: "stat insertions" }, u4 = { class: "stat deletions" }, f4 = {
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
    const s = e, { getCommitDetail: o } = at(), n = k(null), l = k(!0), i = z(() => {
      if (!n.value) return !1;
      const d = n.value.changes.workflows;
      return d.added.length > 0 || d.modified.length > 0 || d.deleted.length > 0;
    }), c = z(() => {
      if (!n.value) return !1;
      const d = n.value.changes.nodes;
      return d.added.length > 0 || d.removed.length > 0;
    });
    return et(async () => {
      try {
        n.value = await o(s.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (d, u) => (a(), R(pt, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (m) => d.$emit("close"))
    }, {
      header: h(() => {
        var m, v, g, w;
        return [
          t("div", t4, [
            u[4] || (u[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", s4, f(((m = n.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (g = n.value) == null ? void 0 : g.refs) != null && w.length ? (a(), r("span", o4, [
              (a(!0), r(G, null, ge(n.value.refs, (p) => (a(), r("span", {
                key: p,
                class: "ref-badge"
              }, f(p), 1))), 128))
            ])) : y("", !0)
          ]),
          C(Re, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (p) => d.$emit("close"))
          }, {
            default: h(() => [...u[5] || (u[5] = [
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
      body: h(() => {
        var m, v;
        return [
          t("div", n4, f(((m = n.value) == null ? void 0 : m.message) || e.commit.message), 1),
          t("div", a4, f(((v = n.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), r("div", l4, "Loading details...")) : n.value ? (a(), r("div", i4, [
            t("div", r4, [
              t("span", c4, f(n.value.stats.files_changed) + " files", 1),
              t("span", d4, "+" + f(n.value.stats.insertions), 1),
              t("span", u4, "-" + f(n.value.stats.deletions), 1)
            ]),
            i.value ? (a(), r("div", f4, [
              C(Bo, { variant: "section" }, {
                default: h(() => [...u[6] || (u[6] = [
                  b("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(G, null, ge(n.value.changes.workflows.added, (g) => (a(), r("div", {
                key: "add-" + g,
                class: "change-item added"
              }, [
                u[7] || (u[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), r(G, null, ge(n.value.changes.workflows.modified, (g) => (a(), r("div", {
                key: "mod-" + g,
                class: "change-item modified"
              }, [
                u[8] || (u[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), r(G, null, ge(n.value.changes.workflows.deleted, (g) => (a(), r("div", {
                key: "del-" + g,
                class: "change-item deleted"
              }, [
                u[9] || (u[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (a(), r("div", m4, [
              C(Bo, { variant: "section" }, {
                default: h(() => [...u[10] || (u[10] = [
                  b("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(G, null, ge(n.value.changes.nodes.added, (g) => (a(), r("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                u[11] || (u[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g.name), 1),
                g.version ? (a(), r("span", v4, "(" + f(g.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), r(G, null, ge(n.value.changes.nodes.removed, (g) => (a(), r("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                u[12] || (u[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), r("div", p4, [
              C(Bo, { variant: "section" }, {
                default: h(() => [...u[13] || (u[13] = [
                  b("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", g4, [
                u[14] || (u[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, f(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        C(Re, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (m) => d.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...u[15] || (u[15] = [
            b(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        C(Re, {
          variant: "primary",
          onClick: u[2] || (u[2] = (m) => d.$emit("checkout", e.commit))
        }, {
          default: h(() => [...u[16] || (u[16] = [
            b(" Checkout ", -1)
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
        onInput: c[0] || (c[0] = (d) => i.$emit("update:modelValue", d.target.value)),
        onKeydown: [
          c[1] || (c[1] = Qt(rt((d) => i.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = Qt(rt((d) => i.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Qt(l, ["enter"])
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
      class: Ee(["base-checkbox", { disabled: e.disabled }])
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
}, a6 = { class: "error-header" }, l6 = { class: "error-title" }, i6 = { class: "issues-list" }, r6 = { class: "workflow-state" }, c6 = { class: "message-section" }, d6 = { class: "popover-footer" }, u6 = /* @__PURE__ */ ve({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, n = s, { commit: l } = at(), i = k(""), c = k(!1), d = k(!1), u = z(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), m = z(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, S = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || S.nodes_added.length > 0 || S.nodes_removed.length > 0;
    }), v = z(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((S) => S.has_issues) : [];
    }), g = z(() => v.value.length > 0), w = z(() => g.value && !d.value);
    async function p() {
      var _, S, $, P;
      if (!(g.value && !d.value) && !(!u.value || !i.value.trim() || c.value)) {
        c.value = !0;
        try {
          const M = await l(i.value.trim(), d.value);
          if (M.status === "success") {
            const E = `Committed: ${((_ = M.summary) == null ? void 0 : _.new) || 0} new, ${((S = M.summary) == null ? void 0 : S.modified) || 0} modified, ${(($ = M.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            n("committed", { success: !0, message: E });
          } else if (M.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (M.status === "blocked") {
            const E = ((P = M.issues) == null ? void 0 : P.map((x) => `${x.name}: ${x.issue}`).join("; ")) || "Unknown issues";
            n("committed", { success: !1, message: `Commit blocked - ${E}. Enable "Allow issues" to force.` });
          } else
            n("committed", { success: !1, message: M.message || "Commit failed" });
        } catch (M) {
          n("committed", { success: !1, message: M instanceof Error ? M.message : "Commit failed" });
        } finally {
          c.value = !1;
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
          onClick: S[4] || (S[4] = rt(() => {
          }, ["stop"]))
        }, [
          t("div", E4, [
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
          t("div", T4, [
            e.status && u.value ? (a(), r("div", P4, [
              e.status.workflows.new.length ? (a(), r("div", R4, [
                S[12] || (S[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), r("div", M4, [
                S[13] || (S[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), r("div", D4, [
                S[14] || (S[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), r("div", L4, [
                S[15] || (S[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), r("div", O4, [
                S[16] || (S[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (a(), r("div", A4, [...S[17] || (S[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), r("div", N4, " No changes to commit ")) : (a(), r("div", U4, " Loading... ")),
            g.value ? (a(), r("div", z4, [
              t("div", F4, [
                S[18] || (S[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", B4, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", V4, [
                (a(!0), r(G, null, ge(v.value, ($) => (a(), r("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  t("strong", null, f($.name), 1),
                  t("span", W4, "(" + f($.sync_state) + ")", 1),
                  b(": " + f($.issue_summary), 1)
                ]))), 128))
              ]),
              C(Ia, {
                modelValue: d.value,
                "onUpdate:modelValue": S[1] || (S[1] = ($) => d.value = $),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...S[19] || (S[19] = [
                  b(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            t("div", G4, [
              C(Yl, {
                modelValue: i.value,
                "onUpdate:modelValue": S[2] || (S[2] = ($) => i.value = $),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
                disabled: !u.value || c.value || w.value,
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
              onClick: S[3] || (S[3] = ($) => n("close"))
            }, {
              default: h(() => [...S[20] || (S[20] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
              variant: d.value ? "danger" : "primary",
              disabled: !u.value || !i.value.trim() || c.value || w.value,
              loading: c.value,
              onClick: p
            }, {
              default: h(() => [
                b(f(c.value ? "Committing..." : d.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (a(), r("div", H4, [
      t("div", K4, [
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
      t("div", q4, [
        e.status && u.value ? (a(), r("div", Y4, [
          e.status.workflows.new.length ? (a(), r("div", J4, [
            S[23] || (S[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), r("div", X4, [
            S[24] || (S[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), r("div", Q4, [
            S[25] || (S[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), r("div", Z4, [
            S[26] || (S[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), r("div", e6, [
            S[27] || (S[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (a(), r("div", t6, [...S[28] || (S[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), r("div", s6, " No changes to commit ")) : (a(), r("div", o6, " Loading... ")),
        g.value ? (a(), r("div", n6, [
          t("div", a6, [
            S[29] || (S[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", l6, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", i6, [
            (a(!0), r(G, null, ge(v.value, ($) => (a(), r("div", {
              key: $.name,
              class: "issue-item"
            }, [
              t("strong", null, f($.name), 1),
              t("span", r6, "(" + f($.sync_state) + ")", 1),
              b(": " + f($.issue_summary), 1)
            ]))), 128))
          ]),
          C(Ia, {
            modelValue: d.value,
            "onUpdate:modelValue": S[7] || (S[7] = ($) => d.value = $),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...S[30] || (S[30] = [
              b(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        t("div", c6, [
          C(Yl, {
            modelValue: i.value,
            "onUpdate:modelValue": S[8] || (S[8] = ($) => i.value = $),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: p,
            onSubmit: p
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      t("div", d6, [
        C(Re, {
          variant: "secondary",
          onClick: S[9] || (S[9] = ($) => n("close"))
        }, {
          default: h(() => [...S[31] || (S[31] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        C(Re, {
          variant: d.value ? "danger" : "primary",
          disabled: !u.value || !i.value.trim() || c.value || w.value,
          loading: c.value,
          onClick: p
        }, {
          default: h(() => [
            b(f(c.value ? "Committing..." : d.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Lr = /* @__PURE__ */ pe(u6, [["__scopeId", "data-v-5f897631"]]), f6 = { class: "modal-header" }, m6 = { class: "modal-body" }, v6 = { class: "switch-message" }, p6 = { class: "switch-details" }, g6 = { class: "modal-actions" }, h6 = /* @__PURE__ */ ve({
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
            C(re, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(re, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => s.$emit("confirm"))
            }, {
              default: h(() => [...o[12] || (o[12] = [
                b(" Switch ", -1)
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
      ], c = i.findIndex((d) => d.state === s.state);
      return i.map((d, u) => {
        let m = "pending", v = "○";
        return u < c ? (m = "completed", v = "✓") : u === c && (m = "active", v = "⟳"), {
          ...d,
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
            C(Kn, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            t("div", k6, [
              t("div", $6, f(e.progress) + "%", 1),
              t("div", C6, f(o.value), 1)
            ]),
            t("div", x6, [
              (a(!0), r(G, null, ge(l.value, (d) => (a(), r("div", {
                key: d.state,
                class: Ee(["switch-step", d.status])
              }, [
                t("span", S6, f(d.icon), 1),
                t("span", I6, f(d.label), 1)
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
    return (s, o) => (a(), R(wt, { to: "body" }, [
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
              default: h(() => [...o[10] || (o[10] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(re, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => s.$emit("confirm"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                b(" Sync Now ", -1)
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
}), Or = /* @__PURE__ */ pe(Y6, [["__scopeId", "data-v-4f846342"]]), J6 = { class: "footer-info" }, X6 = { class: "version" }, Q6 = { class: "made-by" }, Z6 = /* @__PURE__ */ ve({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (a(), r("div", J6, [
      t("span", X6, f(Be(F6)), 1),
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
        b(" by " + f(Be(B6)), 1)
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
      onClose: c[1] || (c[1] = (d) => i.$emit("close"))
    }, {
      body: h(() => [
        C(kr, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var d;
        return [
          C(Re, {
            variant: "primary",
            disabled: !((d = o.value) != null && d.hasChanges),
            onClick: n
          }, {
            default: h(() => [...c[2] || (c[2] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Re, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (u) => i.$emit("close"))
          }, {
            default: h(() => [...c[3] || (c[3] = [
              b(" Close ", -1)
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
}, dI = ["placeholder"], uI = {
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
      createEnvironment: d,
      getCreateProgress: u,
      getImportProgress: m,
      getComfyUIReleases: v
    } = at(), g = k(o.initialStep || 1), w = k(null), p = k("landing"), _ = k(!1), S = k(!1), $ = k(!1), P = k(!1), M = k(null), E = k(o.initialStep === 2), x = k(o.defaultPath), q = k(!!o.detectedModelsDir), B = k(o.detectedModelsDir || ""), A = k(null), I = k(null), T = k(null), O = k(null), ce = k("my-new-env"), Y = k(Sr), j = k("latest"), se = k(Ir), ee = k(!0), U = k(null), N = k(null), D = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), Z = k(!1), X = k(!1), he = k(!1), Se = k({ progress: 0, message: "" }), ze = k({ progress: 0, message: "" }), Ve = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], be = k(0), Te = k(null), He = k(0), ke = k(null), ie = z(() => {
      var we, ye;
      const te = (we = x.value) == null ? void 0 : we.trim(), K = !A.value, Me = !q.value || !I.value && ((ye = B.value) == null ? void 0 : ye.trim());
      return te && K && Me;
    }), Ge = z(() => {
      var te;
      return (te = ce.value) == null ? void 0 : te.trim();
    }), Pe = z(() => !!(g.value === 2 || N.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), L = z(() => N.value || o.workspacePath || null);
    async function V() {
      var te;
      if (A.value = null, !!((te = x.value) != null && te.trim()))
        try {
          const K = await c({ path: x.value, type: "workspace" });
          K.valid || (A.value = K.error || "Invalid path");
        } catch (K) {
          A.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function ne() {
      var te;
      if (I.value = null, T.value = null, O.value = null, !!((te = B.value) != null && te.trim()))
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
    async function le() {
      var te, K, Me, we, ye;
      if (A.value = null, I.value = null, await V(), (te = A.value) != null && te.includes("already exists")) {
        A.value = null, N.value = ((K = x.value) == null ? void 0 : K.trim()) || o.defaultPath, g.value = 2, me();
        return;
      }
      if (!A.value && !(q.value && ((Me = B.value) != null && Me.trim()) && (await ne(), I.value))) {
        X.value = !0;
        try {
          await l({
            workspace_path: ((we = x.value) == null ? void 0 : we.trim()) || o.defaultPath,
            models_directory: q.value && ((ye = B.value) == null ? void 0 : ye.trim()) || null
          }), be.value = 0, Te.value = Date.now();
          const W = setInterval(async () => {
            var F;
            if (Te.value && Date.now() - Te.value > FI) {
              clearInterval(W), X.value = !1, A.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const de = await i();
              if (be.value = 0, de.state === "idle" && X.value) {
                clearInterval(W), X.value = !1, A.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Se.value = { progress: de.progress, message: de.message }, de.state === "complete" ? (clearInterval(W), X.value = !1, N.value = ((F = x.value) == null ? void 0 : F.trim()) || o.defaultPath, g.value = 2, me()) : de.state === "error" && (clearInterval(W), X.value = !1, A.value = de.error || "Workspace creation failed");
            } catch (de) {
              be.value++, console.warn(`Polling failure ${be.value}/${ao}:`, de), be.value >= ao && (clearInterval(W), X.value = !1, A.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (W) {
          X.value = !1, A.value = W instanceof Error ? W.message : "Failed to create workspace";
        }
      }
    }
    async function fe() {
      he.value = !0, U.value = null;
      try {
        const te = {
          name: ce.value.trim() || "my-new-env",
          python_version: Y.value,
          comfyui_version: j.value,
          torch_backend: se.value,
          switch_after: ee.value,
          workspace_path: N.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await d(te)).status === "started") {
          He.value = 0, ke.value = Date.now();
          const Me = setInterval(async () => {
            if (ke.value && Date.now() - ke.value > Jl) {
              clearInterval(Me), he.value = !1, U.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const we = await u();
              if (He.value = 0, we.state === "idle" && he.value) {
                clearInterval(Me), he.value = !1, U.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (ze.value = {
                progress: we.progress ?? 0,
                message: we.message,
                phase: we.phase
              }, we.state === "complete") {
                clearInterval(Me), he.value = !1;
                const ye = we.environment_name || te.name;
                ee.value ? n("complete", ye, N.value) : (p.value = "landing", n("environment-created-no-switch", ye));
              } else we.state === "error" && (clearInterval(Me), he.value = !1, U.value = we.error || "Environment creation failed");
            } catch (we) {
              He.value++, console.warn(`Polling failure ${He.value}/${ao}:`, we), He.value >= ao && (clearInterval(Me), he.value = !1, U.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (te) {
        he.value = !1, U.value = te instanceof Error ? te.message : "Unknown error";
      }
    }
    async function me() {
      Z.value = !0;
      try {
        D.value = await v();
      } catch (te) {
        console.error("Failed to load ComfyUI releases:", te);
      } finally {
        Z.value = !1;
      }
    }
    function Ce() {
      w.value && n("switch-environment", w.value, N.value);
    }
    function xe() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : g.value === 2 && o.setupState === "no_workspace" && (g.value = 1);
    }
    function ae(te, K) {
      S.value = !1, K ? n("complete", te, N.value) : (n("environment-created-no-switch", te), p.value = "landing");
    }
    function ue() {
    }
    et(async () => {
      if (o.detectedModelsDir && (B.value = o.detectedModelsDir), o.workspacePath && (N.value = o.workspacePath), g.value === 2) {
        me();
        const te = setTimeout(() => {
          E.value = !1;
        }, 3e3);
        await Le(), clearTimeout(te), E.value = !1;
      }
    });
    async function Le() {
      try {
        const te = await u();
        if (console.log("[ComfyGit] Create progress check:", te.state, te), te.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", te.environment_name), p.value = "create", he.value = !0, ce.value = te.environment_name || "my-new-env", ze.value = {
            progress: te.progress ?? 0,
            message: te.message,
            phase: te.phase
          }, Ie();
          return;
        }
      } catch (te) {
        console.log("[ComfyGit] Create progress check failed:", te);
      }
      try {
        const te = await m();
        console.log("[ComfyGit] Import progress check:", te.state, te), te.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", te.environment_name), M.value = {
          message: te.message || "Importing...",
          phase: te.phase || "",
          progress: te.progress ?? 0,
          environmentName: te.environment_name || ""
        }, P.value = !0, p.value = "import", S.value = !0);
      } catch (te) {
        console.log("[ComfyGit] Import progress check failed:", te);
      }
    }
    async function Ie() {
      He.value = 0, ke.value = Date.now();
      let te = null;
      const K = async () => {
        if (ke.value && Date.now() - ke.value > Jl)
          return te && clearInterval(te), he.value = !1, U.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const we = await u();
          if (He.value = 0, we.state === "idle" && he.value)
            return te && clearInterval(te), he.value = !1, U.value = "Environment creation was interrupted. Please try again.", !1;
          if (ze.value = {
            progress: we.progress ?? 0,
            message: we.message,
            phase: we.phase
          }, we.state === "complete") {
            te && clearInterval(te), he.value = !1;
            const ye = we.environment_name || ce.value;
            return n("complete", ye, N.value), !1;
          } else if (we.state === "error")
            return te && clearInterval(te), he.value = !1, U.value = we.error || "Environment creation failed", !1;
          return !0;
        } catch (we) {
          return He.value++, console.warn(`Polling failure ${He.value}/${ao}:`, we), He.value >= ao ? (te && clearInterval(te), he.value = !1, U.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await K() && (te = setInterval(async () => {
        !await K() && te && clearInterval(te);
      }, 2e3));
    }
    return (te, K) => (a(), r(G, null, [
      C(pt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: K[15] || (K[15] = (Me) => te.$emit("close"))
      }, {
        header: h(() => [
          K[20] || (K[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", sI, [
            C(Or),
            K[19] || (K[19] = t("span", { class: "header-divider" }, null, -1)),
            Pe.value ? (a(), r("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: K[0] || (K[0] = (Me) => _.value = !0)
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
              onClick: K[1] || (K[1] = (Me) => te.$emit("close")),
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
        body: h(() => {
          var Me;
          return [
            g.value === 1 ? (a(), r("div", oI, [
              K[24] || (K[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", nI, [
                K[21] || (K[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                Ye(t("input", {
                  "onUpdate:modelValue": K[2] || (K[2] = (we) => x.value = we),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, aI), [
                  [Nt, x.value]
                ]),
                A.value ? (a(), r("p", lI, f(A.value), 1)) : y("", !0)
              ]),
              t("div", iI, [
                t("label", rI, [
                  Ye(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": K[3] || (K[3] = (we) => q.value = we)
                  }, null, 512), [
                    [Xo, q.value]
                  ]),
                  K[22] || (K[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              q.value ? (a(), r("div", cI, [
                K[23] || (K[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                Ye(t("input", {
                  "onUpdate:modelValue": K[4] || (K[4] = (we) => B.value = we),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, dI), [
                  [Nt, B.value]
                ]),
                e.detectedModelsDir && !B.value ? (a(), r("p", uI, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                T.value ? (a(), r("p", fI, " Did you mean: " + f(T.value), 1)) : y("", !0),
                I.value ? (a(), r("p", mI, f(I.value), 1)) : y("", !0),
                O.value !== null && !I.value ? (a(), r("p", vI, " Found " + f(O.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              X.value ? (a(), R(Mn, {
                key: 1,
                progress: Se.value.progress,
                message: Se.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            g.value === 2 ? (a(), r("div", pI, [
              E.value ? (a(), r("div", gI, [...K[25] || (K[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), r(G, { key: 1 }, [
                !o.cliInstalled && !$.value ? (a(), r("div", hI, [
                  t("div", yI, [
                    K[27] || (K[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    K[28] || (K[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: K[5] || (K[5] = (we) => $.value = !0),
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
                    onClick: K[6] || (K[6] = (we) => p.value = "create")
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
                    onClick: K[7] || (K[7] = (we) => {
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
                  (Me = o.existingEnvironments) != null && Me.length ? (a(), r(G, { key: 0 }, [
                    K[33] || (K[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", _I, [
                      (a(!0), r(G, null, ge(o.existingEnvironments, (we) => (a(), r("label", {
                        key: we,
                        class: Ee(["env-option", { selected: w.value === we }])
                      }, [
                        Ye(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: we,
                          "onUpdate:modelValue": K[8] || (K[8] = (ye) => w.value = ye)
                        }, null, 8, bI), [
                          [Jt, w.value]
                        ]),
                        t("span", kI, f(we), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (a(), r("div", $I, [
                  he.value ? (a(), r("div", OI, [
                    t("p", AI, [
                      K[41] || (K[41] = b(" Creating environment ", -1)),
                      t("strong", null, f(ce.value), 1),
                      K[42] || (K[42] = b("... ", -1))
                    ]),
                    C(Mn, {
                      progress: ze.value.progress,
                      message: ze.value.message,
                      "current-phase": ze.value.phase,
                      "show-steps": !0,
                      steps: Ve
                    }, null, 8, ["progress", "message", "current-phase"]),
                    K[43] || (K[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), r(G, { key: 0 }, [
                    K[40] || (K[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", CI, [
                      K[35] || (K[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      Ye(t("input", {
                        "onUpdate:modelValue": K[9] || (K[9] = (we) => ce.value = we),
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
                        "onUpdate:modelValue": K[10] || (K[10] = (we) => Y.value = we),
                        class: "form-select"
                      }, [
                        (a(!0), r(G, null, ge(Be(xr), (we) => (a(), r("option", {
                          key: we,
                          value: we
                        }, f(we), 9, SI))), 128))
                      ], 512), [
                        [ps, Y.value]
                      ])
                    ]),
                    t("div", II, [
                      K[37] || (K[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Ye(t("select", {
                        "onUpdate:modelValue": K[11] || (K[11] = (we) => j.value = we),
                        class: "form-select",
                        disabled: Z.value
                      }, [
                        (a(!0), r(G, null, ge(D.value, (we) => (a(), r("option", {
                          key: we.tag_name,
                          value: we.tag_name
                        }, f(we.name), 9, TI))), 128))
                      ], 8, EI), [
                        [ps, j.value]
                      ])
                    ]),
                    t("div", PI, [
                      K[38] || (K[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Ye(t("select", {
                        "onUpdate:modelValue": K[12] || (K[12] = (we) => se.value = we),
                        class: "form-select"
                      }, [
                        (a(!0), r(G, null, ge(Be(Za), (we) => (a(), r("option", {
                          key: we,
                          value: we
                        }, f(we) + f(we === "auto" ? " (detect GPU)" : ""), 9, RI))), 128))
                      ], 512), [
                        [ps, se.value]
                      ])
                    ]),
                    t("div", MI, [
                      t("label", DI, [
                        Ye(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": K[13] || (K[13] = (we) => ee.value = we)
                        }, null, 512), [
                          [Xo, ee.value]
                        ]),
                        K[39] || (K[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    U.value ? (a(), r("div", LI, f(U.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (a(), r("div", NI, [
                  C(Pr, {
                    "workspace-path": N.value,
                    "resume-import": P.value,
                    "initial-progress": M.value ?? void 0,
                    onImportComplete: ae,
                    onImportStarted: K[14] || (K[14] = (we) => S.value = !0),
                    onSourceCleared: ue
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          t("div", UI, [
            C(Ar),
            t("div", zI, [
              g.value === 1 ? (a(), R(Re, {
                key: 0,
                variant: "primary",
                disabled: !ie.value || X.value,
                onClick: le
              }, {
                default: h(() => [
                  b(f(X.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : g.value === 2 ? (a(), r(G, { key: 1 }, [
                !he.value && !S.value && (p.value !== "landing" || o.setupState === "no_workspace" && !N.value) ? (a(), R(Re, {
                  key: 0,
                  variant: "secondary",
                  onClick: xe
                }, {
                  default: h(() => [...K[44] || (K[44] = [
                    b(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (a(), R(Re, {
                  key: 1,
                  variant: "primary",
                  disabled: !Ge.value || he.value,
                  onClick: fe
                }, {
                  default: h(() => [
                    b(f(he.value ? "Creating..." : ee.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                p.value === "landing" && w.value ? (a(), R(Re, {
                  key: 2,
                  variant: "primary",
                  onClick: Ce
                }, {
                  default: h(() => [
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
        "workspace-path": L.value,
        onClose: K[16] || (K[16] = (Me) => _.value = !1)
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
}, rE = { class: "dialog-content env-selector-dialog" }, cE = { class: "dialog-header" }, dE = { class: "dialog-body" }, uE = { class: "env-list" }, fE = { class: "env-info" }, mE = { class: "env-name-row" }, vE = { class: "env-indicator" }, pE = { class: "env-name" }, gE = {
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
      checkout: d,
      createBranch: u,
      switchBranch: m,
      deleteBranch: v,
      getEnvironments: g,
      switchEnvironment: w,
      getSwitchProgress: p,
      deleteEnvironment: _,
      syncEnvironmentManually: S,
      repairWorkflowModels: $,
      getSetupStatus: P
    } = at(), M = Cv(), { liveInstanceCount: E } = Rr({ autoStart: !0 }), x = k(null), q = k([]), B = k([]), A = k([]), I = z(() => A.value.find((oe) => oe.is_current)), T = k(null), O = k(!1), ce = k(1), Y = z(() => {
      var oe;
      return ((oe = T.value) == null ? void 0 : oe.state) || "managed";
    }), j = k(!1), se = k(null), ee = k(null), U = k(!1), N = k(null), D = k(null), Z = k(null), X = k(!1), he = k(!1), Se = k(""), ze = k(null), Ve = k({ state: "idle", progress: 0, message: "" });
    let be = null, Te = null;
    const He = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ke = o.initialView ? He[o.initialView] : null, ie = k((ke == null ? void 0 : ke.view) ?? "status"), Ge = k((ke == null ? void 0 : ke.section) ?? "this-env");
    function Pe(oe, H) {
      ie.value = oe, Ge.value = H;
    }
    function L(oe) {
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
    const le = k(null), fe = k(!1), me = k(!1), Ce = k([]);
    let xe = 0;
    function ae(oe, H = "info", De = 3e3) {
      const je = ++xe;
      return Ce.value.push({ id: je, message: oe, type: H }), De > 0 && setTimeout(() => {
        Ce.value = Ce.value.filter((ot) => ot.id !== je);
      }, De), je;
    }
    function ue(oe) {
      Ce.value = Ce.value.filter((H) => H.id !== oe);
    }
    function Le(oe, H) {
      ae(oe, H);
    }
    const Ie = z(() => {
      if (!x.value) return "neutral";
      const oe = x.value.workflows, H = oe.new.length > 0 || oe.modified.length > 0 || oe.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? H ? "warning" : "success" : "error";
    });
    z(() => x.value ? Ie.value === "success" ? "All synced" : Ie.value === "warning" ? "Uncommitted changes" : Ie.value === "error" ? "Not synced" : "" : "");
    async function te() {
      j.value = !0, se.value = null;
      try {
        const [oe, H, De, je] = await Promise.all([
          l(!0),
          i(),
          c(),
          g()
        ]);
        x.value = oe, q.value = H.commits, B.value = De.branches, A.value = je, n("statusUpdate", oe), N.value && await N.value.loadWorkflows(!0);
      } catch (oe) {
        se.value = oe instanceof Error ? oe.message : "Failed to load status", x.value = null, q.value = [], B.value = [];
      } finally {
        j.value = !1;
      }
    }
    function K(oe) {
      ee.value = oe;
    }
    async function Me(oe) {
      var De;
      ee.value = null;
      const H = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      le.value = {
        title: H ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: H ? "You have uncommitted changes that will be lost." : `Checkout commit ${oe.short_hash || ((De = oe.hash) == null ? void 0 : De.slice(0, 7))}?`,
        details: H ? ls() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: H ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: H,
        onConfirm: async () => {
          var mt;
          le.value = null, de();
          const je = ae(`Checking out ${oe.short_hash || ((mt = oe.hash) == null ? void 0 : mt.slice(0, 7))}...`, "info", 0), ot = await d(oe.hash, H);
          ue(je), ot.status === "success" ? ae("Restarting ComfyUI...", "success") : ae(ot.message || "Checkout failed", "error");
        }
      };
    }
    async function we(oe) {
      const H = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      le.value = {
        title: H ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: H ? "You have uncommitted changes." : `Switch to branch "${oe}"?`,
        details: H ? ls() : void 0,
        warning: H ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: H ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          le.value = null, de();
          const De = ae(`Switching to ${oe}...`, "info", 0), je = await m(oe, H);
          ue(De), je.status === "success" ? ae("Restarting ComfyUI...", "success") : ae(je.message || "Branch switch failed", "error");
        }
      };
    }
    async function ye(oe) {
      const H = ae(`Creating branch ${oe}...`, "info", 0), De = await u(oe);
      ue(H), De.status === "success" ? (ae(`Branch "${oe}" created`, "success"), await te()) : ae(De.message || "Failed to create branch", "error");
    }
    async function W(oe, H = !1) {
      const De = async (je) => {
        var mt;
        const ot = ae(`Deleting branch ${oe}...`, "info", 0);
        try {
          const Mt = await v(oe, je);
          ue(ot), Mt.status === "success" ? (ae(`Branch "${oe}" deleted`, "success"), await te()) : (mt = Mt.message) != null && mt.includes("not fully merged") ? le.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${oe}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              le.value = null, await De(!0);
            }
          } : ae(Mt.message || "Failed to delete branch", "error");
        } catch (Mt) {
          ue(ot);
          const is = Mt instanceof Error ? Mt.message : "Failed to delete branch";
          is.includes("not fully merged") ? le.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${oe}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              le.value = null, await De(!0);
            }
          } : ae(is, "error");
        }
      };
      le.value = {
        title: "Delete Branch",
        message: `Delete branch "${oe}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          le.value = null, await De(H);
        }
      };
    }
    async function F(oe) {
      ee.value = null;
      const H = prompt("Enter branch name:");
      if (H) {
        const De = ae(`Creating branch ${H}...`, "info", 0), je = await u(H, oe.hash);
        ue(De), je.status === "success" ? (ae(`Branch "${H}" created from ${oe.short_hash}`, "success"), await te()) : ae(je.message || "Failed to create branch", "error");
      }
    }
    function de() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Fe() {
      le.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var oe;
          le.value = null, de(), ae("Restarting environment...", "info");
          try {
            (oe = window.app) != null && oe.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Qe() {
      le.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var oe;
          le.value = null, ae("Stopping environment...", "info");
          try {
            (oe = window.app) != null && oe.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function vt(oe, H) {
      U.value = !1, Se.value = oe, ze.value = H || null, X.value = !0;
    }
    async function lt() {
      X.value = !1, he.value = !0, de(), Ve.value = {
        progress: 10,
        state: ut(10),
        message: Rt(10)
      };
      try {
        await w(Se.value, ze.value || void 0), Ut(), Bs();
      } catch (oe) {
        Ht(), he.value = !1, ae(`Failed to initiate switch: ${oe instanceof Error ? oe.message : "Unknown error"}`, "error"), Ve.value = { state: "idle", progress: 0, message: "" }, ze.value = null;
      }
    }
    function ut(oe) {
      return oe >= 100 ? "complete" : oe >= 80 ? "validating" : oe >= 60 ? "starting" : oe >= 30 ? "syncing" : "preparing";
    }
    function Rt(oe) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[ut(oe)] || "";
    }
    function Ut() {
      if (Te) return;
      let oe = 10;
      const H = 60, De = 5e3, je = 100, ot = (H - oe) / (De / je);
      Te = window.setInterval(() => {
        if (oe += ot, oe >= H && (oe = H, Ht()), Ve.value.progress < H) {
          const mt = Math.floor(oe);
          Ve.value = {
            progress: mt,
            state: ut(mt),
            message: Rt(mt)
          };
        }
      }, je);
    }
    function Ht() {
      Te && (clearInterval(Te), Te = null);
    }
    function Bs() {
      be || (be = window.setInterval(async () => {
        try {
          let oe = await M.getStatus();
          if ((!oe || oe.state === "idle") && (oe = await p()), !oe)
            return;
          const H = oe.progress || 0;
          H >= 60 && Ht();
          const De = Math.max(H, Ve.value.progress), je = oe.state && oe.state !== "idle" && oe.state !== "unknown", ot = je ? oe.state : ut(De), mt = je && oe.message || Rt(De);
          Ve.value = {
            state: ot,
            progress: De,
            message: mt
          }, oe.state === "complete" ? (Ht(), Ps(), he.value = !1, ae(`✓ Switched to ${Se.value}`, "success"), await te(), Se.value = "") : oe.state === "rolled_back" ? (Ht(), Ps(), he.value = !1, ae("Switch failed, restored previous environment", "warning"), Se.value = "") : oe.state === "critical_failure" && (Ht(), Ps(), he.value = !1, ae(`Critical error during switch: ${oe.message}`, "error"), Se.value = "");
        } catch (oe) {
          console.error("Failed to poll switch progress:", oe);
        }
      }, 1e3));
    }
    function Ps() {
      Ht(), be && (clearInterval(be), be = null);
    }
    function so() {
      var oe;
      X.value = !1, Se.value = "", (oe = T.value) != null && oe.state && T.value.state !== "managed" && (ce.value = T.value.state === "no_workspace" ? 1 : 2, O.value = !0);
    }
    async function ko(oe) {
      fe.value = !1, await te(), ae(oe.message, oe.success ? "success" : "error");
    }
    async function $o() {
      me.value = !1;
      const oe = ae("Syncing environment...", "info", 0);
      try {
        const H = await S("skip", !0);
        if (ue(oe), H.status === "success") {
          const De = [];
          H.nodes_installed.length && De.push(`${H.nodes_installed.length} installed`), H.nodes_removed.length && De.push(`${H.nodes_removed.length} removed`);
          const je = De.length ? `: ${De.join(", ")}` : "";
          ae(`✓ Environment synced${je}`, "success"), await te();
        } else {
          const De = H.errors.length ? H.errors.join("; ") : H.message;
          ae(`Sync failed: ${De}`, "error");
        }
      } catch (H) {
        ue(oe), ae(`Sync error: ${H instanceof Error ? H.message : "Unknown error"}`, "error");
      }
    }
    async function Co(oe) {
      var H;
      try {
        const De = await $(oe);
        De.failed.length === 0 ? ae(`✓ Repaired ${De.success} workflow${De.success === 1 ? "" : "s"}`, "success") : ae(`Repaired ${De.success}, failed: ${De.failed.length}`, "warning"), await te();
      } catch (De) {
        ae(`Repair failed: ${De instanceof Error ? De.message : "Unknown error"}`, "error");
      } finally {
        (H = Z.value) == null || H.resetRepairingState();
      }
    }
    async function _e() {
      var H, De;
      const oe = ae("Repairing environment...", "info", 0);
      try {
        const je = await S("skip", !0);
        if (ue(oe), je.status === "success") {
          const ot = [];
          je.nodes_installed.length && ot.push(`${je.nodes_installed.length} installed`), je.nodes_removed.length && ot.push(`${je.nodes_removed.length} removed`);
          const mt = ot.length ? `: ${ot.join(", ")}` : "";
          ae(`✓ Environment repaired${mt}`, "success"), (H = Z.value) == null || H.closeDetailModal(), await te();
        } else {
          const ot = je.errors.length ? je.errors.join(", ") : je.message || "Unknown error";
          ae(`Repair failed: ${ot}`, "error");
        }
      } catch (je) {
        ue(oe), ae(`Repair error: ${je instanceof Error ? je.message : "Unknown error"}`, "error");
      } finally {
        (De = Z.value) == null || De.resetRepairingEnvironmentState();
      }
    }
    async function Q(oe, H) {
      ae(`Environment '${oe}' created`, "success"), await te(), D.value && await D.value.loadEnvironments(), H && await vt(oe);
    }
    async function Ke(oe) {
      var H;
      if (((H = I.value) == null ? void 0 : H.name) === oe) {
        ae("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      le.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${oe}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          le.value = null;
          try {
            const De = await _(oe);
            De.status === "success" ? (ae(`Environment "${oe}" deleted`, "success"), await te(), D.value && await D.value.loadEnvironments()) : ae(De.message || "Failed to delete environment", "error");
          } catch (De) {
            ae(`Error deleting environment: ${De instanceof Error ? De.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ht(oe, H) {
      O.value = !1;
      try {
        T.value = await P();
      } catch {
      }
      await vt(oe, H);
    }
    function Kt() {
      O.value = !1, n("close");
    }
    async function gs(oe, H) {
      await vt(oe, H);
    }
    async function hs(oe) {
      await te(), await vt(oe);
    }
    async function as(oe) {
      T.value = await P(), console.log(`Environment '${oe}' created. Available for switching.`);
    }
    function Oe() {
      Pe("environments", "all-envs"), setTimeout(() => {
        var oe;
        (oe = D.value) == null || oe.openCreateModal();
      }, 100);
    }
    function ls() {
      if (!x.value) return [];
      const oe = [], H = x.value.workflows;
      return H.new.length && oe.push(`${H.new.length} new workflow(s)`), H.modified.length && oe.push(`${H.modified.length} modified workflow(s)`), H.deleted.length && oe.push(`${H.deleted.length} deleted workflow(s)`), oe;
    }
    return et(async () => {
      try {
        if (T.value = await P(), T.value.state === "no_workspace") {
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
      await te();
    }), (oe, H) => {
      var De, je, ot, mt, Mt, is, Vs, Ws, J, $e, Ae, ct;
      return a(), r("div", WI, [
        t("div", GI, [
          t("div", jI, [
            H[31] || (H[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (a(), r("div", HI)) : y("", !0)
          ]),
          t("div", KI, [
            C(Or),
            H[34] || (H[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Ee(["icon-btn", { spinning: j.value }]),
              onClick: te,
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
            x.value ? (a(), r("div", YI, [
              t("span", null, f(((De = I.value) == null ? void 0 : De.name) || ((je = x.value) == null ? void 0 : je.environment) || "Loading..."), 1),
              t("span", JI, "(" + f(x.value.branch || "detached") + ")", 1)
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
                  class: Ee(["sidebar-item", { active: ie.value === "status" && Ge.value === "this-env" }]),
                  onClick: H[2] || (H[2] = (Ne) => Pe("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "workflows" }]),
                  onClick: H[3] || (H[3] = (Ne) => Pe("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "models-env" }]),
                  onClick: H[4] || (H[4] = (Ne) => Pe("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "branches" }]),
                  onClick: H[5] || (H[5] = (Ne) => Pe("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "history" }]),
                  onClick: H[6] || (H[6] = (Ne) => Pe("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "nodes" }]),
                  onClick: H[7] || (H[7] = (Ne) => Pe("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "debug-env" }]),
                  onClick: H[8] || (H[8] = (Ne) => Pe("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              H[41] || (H[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", tE, [
                H[38] || (H[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "environments" }]),
                  onClick: H[9] || (H[9] = (Ne) => Pe("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "model-index" }]),
                  onClick: H[10] || (H[10] = (Ne) => Pe("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "settings" }]),
                  onClick: H[11] || (H[11] = (Ne) => Pe("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "debug-workspace" }]),
                  onClick: H[12] || (H[12] = (Ne) => Pe("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              H[42] || (H[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", sE, [
                H[40] || (H[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "deploy" }]),
                  onClick: H[13] || (H[13] = (Ne) => Pe("deploy", "sharing"))
                }, [
                  H[39] || (H[39] = b(" DEPLOY ", -1)),
                  Be(E) > 0 ? (a(), r("span", oE, f(Be(E)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "export" }]),
                  onClick: H[14] || (H[14] = (Ne) => Pe("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "import" }]),
                  onClick: H[15] || (H[15] = (Ne) => Pe("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "remotes" }]),
                  onClick: H[16] || (H[16] = (Ne) => Pe("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", nE, [
              C(Ar)
            ])
          ]),
          t("div", aE, [
            se.value ? (a(), r("div", lE, f(se.value), 1)) : !x.value && ie.value === "status" ? (a(), r("div", iE, " Loading status... ")) : (a(), r(G, { key: 2 }, [
              ie.value === "status" ? (a(), R(Jm, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: Z,
                status: x.value,
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
              }, null, 8, ["status", "setup-state"])) : ie.value === "workflows" ? (a(), R(I0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: N,
                onRefresh: te
              }, null, 512)) : ie.value === "models-env" ? (a(), R(cw, {
                key: 2,
                onNavigate: L
              })) : ie.value === "branches" ? (a(), R(uv, {
                key: 3,
                branches: B.value,
                current: ((ot = x.value) == null ? void 0 : ot.branch) || null,
                onSwitch: we,
                onCreate: ye,
                onDelete: W
              }, null, 8, ["branches", "current"])) : ie.value === "history" ? (a(), R(kv, {
                key: 4,
                commits: q.value,
                onSelect: K,
                onCheckout: Me
              }, null, 8, ["commits"])) : ie.value === "nodes" ? (a(), R(a_, {
                key: 5,
                "version-mismatches": ((Mt = (mt = x.value) == null ? void 0 : mt.comparison) == null ? void 0 : Mt.version_mismatches) || [],
                onOpenNodeManager: ne,
                onRepairEnvironment: _e,
                onToast: Le
              }, null, 8, ["version-mismatches"])) : ie.value === "debug-env" ? (a(), R(_2, { key: 6 })) : ie.value === "environments" ? (a(), R($$, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: D,
                onSwitch: vt,
                onCreated: Q,
                onDelete: Ke
              }, null, 512)) : ie.value === "model-index" ? (a(), R(Tw, {
                key: 8,
                onRefresh: te
              })) : ie.value === "settings" ? (a(), R(u2, { key: 9 })) : ie.value === "debug-workspace" ? (a(), R(w2, { key: 10 })) : ie.value === "deploy" ? (a(), R(e4, {
                key: 11,
                onToast: Le,
                onNavigate: L
              })) : ie.value === "export" ? (a(), R(Z$, { key: 12 })) : ie.value === "import" ? (a(), R(Hx, {
                key: 13,
                onImportCompleteSwitch: hs
              })) : ie.value === "remotes" ? (a(), R(Gk, {
                key: 14,
                onToast: Le
              })) : y("", !0)
            ], 64))
          ])
        ]),
        ee.value ? (a(), R(y4, {
          key: 0,
          commit: ee.value,
          onClose: H[25] || (H[25] = (Ne) => ee.value = null),
          onCheckout: Me,
          onCreateBranch: F
        }, null, 8, ["commit"])) : y("", !0),
        le.value ? (a(), R(Qa, {
          key: 1,
          title: le.value.title,
          message: le.value.message,
          details: le.value.details,
          warning: le.value.warning,
          confirmLabel: le.value.confirmLabel,
          cancelLabel: le.value.cancelLabel,
          secondaryLabel: le.value.secondaryLabel,
          secondaryAction: le.value.secondaryAction,
          destructive: le.value.destructive,
          onConfirm: le.value.onConfirm,
          onCancel: H[26] || (H[26] = (Ne) => le.value = null),
          onSecondary: le.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        C(y6, {
          show: X.value,
          "from-environment": ((is = I.value) == null ? void 0 : is.name) || "unknown",
          "to-environment": Se.value,
          onConfirm: lt,
          onClose: so
        }, null, 8, ["show", "from-environment", "to-environment"]),
        fe.value && x.value ? (a(), R(Lr, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: H[27] || (H[27] = (Ne) => fe.value = !1),
          onCommitted: ko
        }, null, 8, ["status"])) : y("", !0),
        me.value && x.value ? (a(), R(U6, {
          key: 3,
          show: me.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: $o,
          onClose: H[28] || (H[28] = (Ne) => me.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        C(T6, {
          show: he.value,
          state: Ve.value.state,
          progress: Ve.value.progress,
          message: Ve.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        U.value ? (a(), r("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: H[30] || (H[30] = rt((Ne) => U.value = !1, ["self"]))
        }, [
          t("div", rE, [
            t("div", cE, [
              H[44] || (H[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: H[29] || (H[29] = (Ne) => U.value = !1)
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
            t("div", dE, [
              H[45] || (H[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", uE, [
                (a(!0), r(G, null, ge(A.value, (Ne) => (a(), r("div", {
                  key: Ne.name,
                  class: Ee(["env-item", { current: Ne.is_current }])
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
        O.value ? (a(), R(VI, {
          key: 5,
          "default-path": ((Vs = T.value) == null ? void 0 : Vs.default_path) || "~/comfygit",
          "detected-models-dir": ((Ws = T.value) == null ? void 0 : Ws.detected_models_dir) || null,
          "initial-step": ce.value,
          "existing-environments": ((J = T.value) == null ? void 0 : J.environments) || [],
          "cli-installed": (($e = T.value) == null ? void 0 : $e.cli_installed) ?? !0,
          "setup-state": ((Ae = T.value) == null ? void 0 : Ae.state) || "no_workspace",
          "workspace-path": ((ct = T.value) == null ? void 0 : ct.workspace_path) || null,
          onComplete: ht,
          onClose: Kt,
          onSwitchEnvironment: gs,
          onEnvironmentCreatedNoSwitch: as
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", _E, [
          C(lu, { name: "toast" }, {
            default: h(() => [
              (a(!0), r(G, null, ge(Ce.value, (Ne) => (a(), r("div", {
                key: Ne.id,
                class: Ee(["toast", Ne.type])
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
      const d = c / (1024 * 1024 * 1024);
      return d >= 1 ? `${d.toFixed(2)} GB` : `${(c / (1024 * 1024)).toFixed(1)} MB`;
    }
    function l(c) {
      return c === 0 ? "-" : `${(c / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function i(c) {
      if (c < 60) return `${Math.round(c)}s`;
      const d = Math.floor(c / 60);
      return d < 60 ? `${d}m` : `${Math.floor(d / 60)}h ${d % 60}m`;
    }
    return (c, d) => (a(), r("div", {
      class: Ee(["download-item", `status-${e.item.status}`])
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
            onClick: d[0] || (d[0] = (u) => o("cancel")),
            title: "Cancel"
          }, " × ")) : y("", !0),
          e.item.status === "paused" ? (a(), r("button", {
            key: 1,
            class: "action-icon resume",
            onClick: d[1] || (d[1] = (u) => o("resume")),
            title: "Resume"
          }, " ▶ ")) : y("", !0),
          e.item.status === "failed" ? (a(), r("button", {
            key: 2,
            class: "action-icon retry",
            onClick: d[2] || (d[2] = (u) => o("retry")),
            title: "Retry"
          }, " ↻ ")) : y("", !0),
          e.item.status === "completed" || e.item.status === "failed" || e.item.status === "paused" ? (a(), r("button", {
            key: 3,
            class: "action-icon remove",
            onClick: d[3] || (d[3] = (u) => o("remove")),
            title: "Remove"
          }, " × ")) : y("", !0)
        ])
      ]),
      e.item.status === "downloading" ? (a(), r("div", RE, [
        t("div", ME, [
          t("div", {
            class: "progress-fill",
            style: jt({ width: `${e.item.progress}%` })
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
}, cT = { class: "section-header" }, dT = { class: "section-label" }, uT = { class: "items-list" }, fT = {
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
      hasItems: d,
      activeCount: u,
      cancelDownload: m,
      retryDownload: v,
      resumeDownload: g,
      resumeAllPaused: w,
      removeItem: p,
      clearCompleted: _
    } = _o(), S = k(!1);
    let $ = null;
    Ct(
      () => ({
        active: u.value,
        failed: i.value.length,
        paused: c.value.length,
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
    const P = z(() => {
      var B;
      if (s.items.length === 0) return 0;
      const x = l.value.length, q = ((B = o.value) == null ? void 0 : B.progress) || 0;
      return Math.round((x + q / 100) / s.items.length * 100);
    });
    function M(x) {
      m(x);
    }
    function E(x) {
      return x === 0 ? "" : `${(x / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (x, q) => (a(), R(wt, { to: "body" }, [
      Be(d) ? (a(), r("div", {
        key: 0,
        class: Ee(["model-download-queue", { minimized: !S.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: q[0] || (q[0] = (B) => S.value = !S.value)
        }, [
          t("div", WE, [
            q[4] || (q[4] = t("span", { class: "icon" }, "↓", -1)),
            q[5] || (q[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", GE, "(" + f(Be(u)) + "/" + f(Be(s).items.length) + ")", 1)
          ]),
          t("div", jE, [
            t("span", HE, f(S.value ? "minimize" : "expand"), 1)
          ])
        ]),
        S.value ? (a(), r("div", QE, [
          Be(o) ? (a(), r("div", ZE, [
            q[6] || (q[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            C(To, {
              item: Be(o),
              onCancel: q[1] || (q[1] = (B) => M(Be(o).id))
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
              (a(!0), r(G, null, ge(Be(c), (B) => (a(), R(To, {
                key: B.id,
                item: B,
                onResume: (A) => Be(g)(B.id),
                onRemove: (A) => Be(p)(B.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Be(n).length > 0 ? (a(), r("div", nT, [
            t("div", aT, [
              t("span", lT, "Queued (" + f(Be(n).length) + ")", 1)
            ]),
            t("div", iT, [
              (a(!0), r(G, null, ge(Be(n), (B) => (a(), R(To, {
                key: B.id,
                item: B,
                onCancel: (A) => M(B.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          Be(l).length > 0 ? (a(), r("div", rT, [
            t("div", cT, [
              t("span", dT, "Completed (" + f(Be(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: q[3] || (q[3] = //@ts-ignore
                (...B) => Be(_) && Be(_)(...B))
              }, "Clear")
            ]),
            t("div", uT, [
              (a(!0), r(G, null, ge(Be(l).slice(0, 3), (B) => (a(), R(To, {
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
              (a(!0), r(G, null, ge(Be(i), (B) => (a(), R(To, {
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
              style: jt({ width: `${P.value}%` })
            }, null, 4)
          ]),
          Be(o) ? (a(), r("div", YE, [
            t("span", JE, f(Be(o).filename), 1),
            t("span", XE, f(E(Be(o).speed)), 1)
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
  class: "installed-badge"
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
    const s = k(!1), o = k(null), n = k(null), l = k(!1), i = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Set()), d = k(!1), u = k(null), m = k(null), v = k(0), { addToQueue: g } = _o(), { installNode: w } = at(), p = z(() => _.value.length > 0 || $.value.length > 0 || P.value.length > 0), _ = z(() => {
      var he, Se;
      if (!((he = n.value) != null && he.nodes)) return [];
      const Z = /* @__PURE__ */ new Map(), X = (n.value.nodes.resolved || []).filter((ze) => {
        var Ve;
        return !ze.is_installed && ((Ve = ze.package) == null ? void 0 : Ve.package_id);
      });
      for (const ze of X) {
        const Ve = ze.package.package_id;
        Z.has(Ve) || Z.set(Ve, {
          package_id: Ve,
          title: ze.package.title || Ve,
          node_count: 0,
          node_types: []
        });
        const be = Z.get(Ve);
        be.node_count++, be.node_types.push(((Se = ze.reference) == null ? void 0 : Se.node_type) || ze.node_type);
      }
      return Array.from(Z.values());
    }), S = z(() => _.value.reduce((Z, X) => Z + X.node_count, 0)), $ = z(() => {
      var Z;
      return (Z = n.value) != null && Z.nodes ? (n.value.nodes.unresolved || []).map((X) => {
        var he;
        return {
          node_type: ((he = X.reference) == null ? void 0 : he.node_type) || X.node_type
        };
      }) : [];
    }), P = z(() => {
      var he;
      if (!((he = n.value) != null && he.models)) return [];
      const Z = (n.value.models.resolved || []).filter(
        (Se) => Se.match_type === "download_intent" || Se.match_type === "property_download_intent" || Se.match_type === "not_found"
      ).map((Se) => {
        var ze, Ve, be, Te;
        return {
          filename: ((Ve = (ze = Se.reference) == null ? void 0 : ze.widget_value) == null ? void 0 : Ve.split("/").pop()) || ((be = Se.reference) == null ? void 0 : be.widget_value) || Se.widget_value,
          widget_value: ((Te = Se.reference) == null ? void 0 : Te.widget_value) || Se.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: Se.download_source || null,
          targetPath: Se.target_path || null,
          canDownload: !!(Se.download_source && Se.target_path)
        };
      }), X = (n.value.models.unresolved || []).map((Se) => {
        var ze, Ve, be, Te;
        return {
          filename: ((Ve = (ze = Se.reference) == null ? void 0 : ze.widget_value) == null ? void 0 : Ve.split("/").pop()) || ((be = Se.reference) == null ? void 0 : be.widget_value) || Se.widget_value,
          widget_value: ((Te = Se.reference) == null ? void 0 : Te.widget_value) || Se.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      });
      return [...Z, ...X];
    }), M = z(() => P.value.filter((Z) => Z.canDownload)), E = z(() => _.value.length > 0 && _.value.every((Z) => i.value.has(Z.package_id))), x = z(() => M.value.length > 0 && M.value.every((Z) => c.value.has(Z.url))), q = z(() => _.value.length > 0 || M.value.length > 0), B = z(() => {
      const Z = _.value.length === 0 || E.value, X = M.value.length === 0 || x.value;
      return Z && X;
    });
    async function A(Z) {
      if (!i.value.has(Z)) {
        u.value = Z;
        try {
          await w(Z), i.value.add(Z), v.value++, window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
            detail: { count: v.value }
          }));
        } catch (X) {
          console.error("[ComfyGit] Failed to install package:", X);
        } finally {
          u.value = null;
        }
      }
    }
    function I(Z) {
      !Z.url || !Z.targetPath || c.value.has(Z.url) || (g([{
        workflow: "unsaved",
        filename: Z.filename,
        url: Z.url,
        targetPath: Z.targetPath
      }]), c.value.add(Z.url));
    }
    function T() {
      for (const Z of _.value)
        i.value.has(Z.package_id) || A(Z.package_id);
    }
    function O() {
      const Z = M.value.filter(
        (X) => !c.value.has(X.url)
      );
      if (Z.length !== 0) {
        g(Z.map((X) => ({
          workflow: "unsaved",
          filename: X.filename,
          url: X.url,
          targetPath: X.targetPath
        })));
        for (const X of Z)
          c.value.add(X.url);
      }
    }
    function ce() {
      T(), O();
    }
    function Y(Z) {
      const X = ((Z == null ? void 0 : Z.nodes) || []).map((he) => he.type).sort().join(",");
      return btoa(X).slice(0, 16);
    }
    function j(Z) {
      const X = Y(Z);
      return localStorage.getItem("comfygit:popup-dismissed:" + X) !== "true";
    }
    function se() {
      d.value && m.value && localStorage.setItem("comfygit:popup-dismissed:" + m.value, "true");
    }
    async function ee(Z) {
      if (j(Z)) {
        s.value = !0, o.value = null, l.value = !0, m.value = Y(Z), i.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), d.value = !1, v.value = 0;
        try {
          const X = await fetch("/v2/comfygit/workflow/analyze-json", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ workflow: Z, name: "unsaved" })
          });
          if (!X.ok) {
            const he = await X.json();
            throw new Error(he.error || "Failed to analyze workflow");
          }
          n.value = await X.json(), p.value || N();
        } catch (X) {
          console.error("[ComfyGit] Failed to analyze workflow:", X), o.value = X instanceof Error ? X.message : "Unknown error", N();
        } finally {
          s.value = !1;
        }
      }
    }
    function U() {
      window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      })), N();
    }
    function N() {
      l.value = !1, n.value = null, m.value = null;
    }
    function D(Z) {
      const { workflow: X } = Z.detail;
      X && ee(X);
    }
    return et(() => {
      window.addEventListener("comfygit:workflow-loaded", D);
    }), to(() => {
      window.removeEventListener("comfygit:workflow-loaded", D);
    }), (Z, X) => l.value ? (a(), R(pt, {
      key: 0,
      title: "Missing Dependencies",
      size: "md",
      loading: s.value,
      error: o.value || void 0,
      onClose: N
    }, {
      body: h(() => [
        s.value ? (a(), r("div", yT, [...X[1] || (X[1] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("span", null, "Analyzing workflow...", -1)
        ])])) : n.value && p.value ? (a(), r("div", wT, [
          _.value.length > 0 ? (a(), r("div", _T, [
            t("div", bT, [
              t("span", kT, "Missing Custom Nodes (" + f(S.value) + ")", 1),
              _.value.length > 1 ? (a(), R(Re, {
                key: 0,
                size: "sm",
                variant: "secondary",
                disabled: E.value,
                onClick: T
              }, {
                default: h(() => [
                  b(f(E.value ? "All Installed" : "Install All"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y("", !0)
            ]),
            t("div", $T, [
              (a(!0), r(G, null, ge(_.value.slice(0, 5), (he) => (a(), r("div", {
                key: he.package_id,
                class: "package-item"
              }, [
                t("div", CT, [
                  t("span", xT, f(he.title), 1),
                  t("span", ST, "(" + f(he.node_count) + " " + f(he.node_count === 1 ? "node" : "nodes") + ")", 1)
                ]),
                i.value.has(he.package_id) ? (a(), r("span", IT, "Installed")) : (a(), R(Re, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: u.value === he.package_id,
                  onClick: (Se) => A(he.package_id)
                }, {
                  default: h(() => [
                    b(f(u.value === he.package_id ? "Installing..." : "Install"), 1)
                  ]),
                  _: 2
                }, 1032, ["disabled", "onClick"]))
              ]))), 128)),
              _.value.length > 5 ? (a(), r("div", ET, " ...and " + f(_.value.length - 5) + " more packages ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          $.value.length > 0 ? (a(), r("div", TT, [
            t("div", PT, [
              t("span", RT, "Unknown Nodes (" + f($.value.length) + ")", 1)
            ]),
            t("div", MT, [
              (a(!0), r(G, null, ge($.value.slice(0, 5), (he) => (a(), r("div", {
                key: he.node_type,
                class: "item"
              }, [
                t("code", DT, f(he.node_type), 1),
                X[2] || (X[2] = t("span", { class: "not-found" }, "Not found in registry", -1))
              ]))), 128)),
              $.value.length > 5 ? (a(), r("div", LT, " ...and " + f($.value.length - 5) + " more ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          P.value.length > 0 ? (a(), r("div", OT, [
            t("div", AT, [
              t("span", NT, "Missing Models (" + f(P.value.length) + ")", 1),
              M.value.length > 1 ? (a(), R(Re, {
                key: 0,
                size: "sm",
                variant: "secondary",
                disabled: x.value,
                onClick: O
              }, {
                default: h(() => [
                  b(f(x.value ? "All Queued" : "Download All"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y("", !0)
            ]),
            t("div", UT, [
              (a(!0), r(G, null, ge(P.value.slice(0, 5), (he) => (a(), r("div", {
                key: he.widget_value,
                class: "model-item"
              }, [
                t("div", zT, [
                  t("span", FT, f(he.filename), 1)
                ]),
                he.canDownload ? (a(), r(G, { key: 0 }, [
                  c.value.has(he.url) ? (a(), r("span", BT, "Queued")) : (a(), R(Re, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    onClick: (Se) => I(he)
                  }, {
                    default: h(() => [...X[3] || (X[3] = [
                      b(" Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"]))
                ], 64)) : (a(), r("span", VT, "Manual download required"))
              ]))), 128)),
              P.value.length > 5 ? (a(), r("div", WT, " ...and " + f(P.value.length - 5) + " more ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          t("div", GT, [
            C(Ia, {
              modelValue: d.value,
              "onUpdate:modelValue": [
                X[0] || (X[0] = (he) => d.value = he),
                se
              ]
            }, {
              default: h(() => [...X[4] || (X[4] = [
                b(" Don't show again for this workflow ", -1)
              ])]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])) : y("", !0)
      ]),
      footer: h(() => [
        C(Re, {
          variant: "secondary",
          onClick: N
        }, {
          default: h(() => [...X[5] || (X[5] = [
            b("Dismiss", -1)
          ])]),
          _: 1
        }),
        q.value ? (a(), R(Re, {
          key: 0,
          variant: "primary",
          disabled: B.value,
          onClick: ce
        }, {
          default: h(() => [
            b(f(B.value ? "All Done" : "Download All"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : (a(), R(Re, {
          key: 1,
          variant: "primary",
          onClick: U
        }, {
          default: h(() => [...X[6] || (X[6] = [
            b("Open ComfyGit Panel", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["loading", "error"])) : y("", !0);
  }
}), HT = /* @__PURE__ */ pe(jT, [["__scopeId", "data-v-d60ddabf"]]), KT = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', qT = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', YT = {
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
let Yt = null, Lt = null, Vo = null, Po = null, Xl = null, Ro = null, Ql = null;
const po = k(null);
let sl = "managed", Fr = !1;
async function _n() {
  var e;
  if (!((e = Ft) != null && e.api)) return null;
  try {
    const s = await Ft.api.fetchApi("/v2/comfygit/status");
    s.ok && (po.value = await s.json());
  } catch {
  }
}
async function Ea() {
  var e;
  if ((e = Ft) != null && e.api)
    try {
      const s = await Ft.api.fetchApi("/v2/setup/status");
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
  Yt && Yt.remove(), Yt = document.createElement("div"), Yt.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", Yt.appendChild(s), Yt.addEventListener("click", (l) => {
    l.target === Yt && ma();
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
  }).mount(s), document.body.appendChild(Yt);
}
function ma() {
  Yt && (Yt.remove(), Yt = null);
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
let Bt = null;
function Wo() {
  if (!Bt) return;
  const e = Bt.querySelector(".commit-indicator");
  e && (e.style.display = t7() ? "block" : "none");
}
function Pa() {
  if (!Bt) return;
  const e = sl !== "managed";
  Bt.disabled = e, Bt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
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
Ft.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Hook into workflow loading to intercept missing resources
  // This runs BEFORE ComfyUI's missing nodes/models dialogs
  async beforeConfigureGraph(e, s) {
    var o;
    try {
      await Promise.all([
        Ft.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
        Ft.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = fa, Bt = document.createElement("button"), Bt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Bt.innerHTML = 'Commit <span class="commit-indicator"></span>', Bt.title = "Quick Commit", Bt.onclick = () => s7(Bt), e.appendChild(s), e.appendChild(Bt), (i = (l = Ft.menu) == null ? void 0 : l.settingsGroup) != null && i.element && (Ft.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), n7(), a7(), window.addEventListener("comfygit:open-panel", ((c) => {
      var u;
      const d = (u = c.detail) == null ? void 0 : u.initialView;
      fa(d);
    }));
    const { loadPendingDownloads: o } = _o();
    o(), await Promise.all([_n(), Ea()]), Wo(), Pa(), Ta(), setTimeout(Ta, 100), setInterval(async () => {
      await Promise.all([_n(), Ea()]), Wo(), Pa();
    }, 3e4);
    const n = Ft.api;
    if (n) {
      let c = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((g) => {
          (g.startsWith("workflow:") || g.startsWith("Comfy.OpenWorkflowsPaths:") || g.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(g);
        }), window.location.reload();
      }, d = function() {
        const g = document.createElement("div");
        g.style.cssText = `
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
        w.textContent = "Workflows updated - refresh required", g.appendChild(w);
        const p = document.createElement("button");
        p.textContent = "Refresh", p.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, p.onmouseover = () => p.style.background = "var(--comfy-input-bg)", p.onmouseout = () => p.style.background = "var(--comfy-menu-bg)", p.onclick = () => c(), g.appendChild(p);
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
        `, _.onmouseover = () => _.style.opacity = "1", _.onmouseout = () => _.style.opacity = "0.6", _.onclick = () => g.remove(), g.appendChild(_), document.body.appendChild(g), console.log("[ComfyGit] Refresh notification displayed");
      }, u = function(g) {
        const w = document.getElementById("comfygit-error-toast");
        w && w.remove();
        const p = document.createElement("div");
        p.id = "comfygit-error-toast", p.style.cssText = `
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
        _.textContent = "⚠️", _.style.fontSize = "20px", p.appendChild(_);
        const S = document.createElement("div");
        S.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const $ = document.createElement("div");
        $.textContent = "Node installation failed", $.style.cssText = "font-weight: 600; color: #e53935;", S.appendChild($);
        const P = document.createElement("div");
        P.textContent = "Dependency conflict detected", P.style.cssText = "font-size: 12px; opacity: 0.8;", S.appendChild(P), p.appendChild(S);
        const M = document.createElement("button");
        M.textContent = "View Logs", M.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, M.onmouseover = () => M.style.background = "#c62828", M.onmouseout = () => M.style.background = "#e53935", M.onclick = () => {
          p.remove(), fa("debug-env");
        }, p.appendChild(M);
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
        `, E.onmouseover = () => E.style.opacity = "1", E.onmouseout = () => E.style.opacity = "0.6", E.onclick = () => p.remove(), p.appendChild(E), document.body.appendChild(p), console.log("[ComfyGit] Manager error toast displayed:", g), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && p.remove();
        }, 1e4);
      }, m = function(g) {
        const w = document.getElementById("comfygit-restart-toast");
        w && w.remove();
        const p = document.createElement("div");
        p.id = "comfygit-restart-toast", p.style.cssText = `
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
        _.textContent = "✅", _.style.fontSize = "20px", p.appendChild(_);
        const S = document.createElement("div");
        S.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const $ = document.createElement("div");
        $.textContent = "To apply changes, please restart ComfyUI", $.style.cssText = "font-weight: 500; color: #fff;", S.appendChild($);
        const P = document.createElement("div");
        P.textContent = `${g} node package${g > 1 ? "s" : ""} ready to install`, P.style.cssText = "font-size: 12px; opacity: 0.7;", S.appendChild(P), p.appendChild(S);
        const M = document.createElement("button");
        M.textContent = "Apply Changes", M.style.cssText = `
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
        `, M.onmouseover = () => M.style.background = "rgba(255,255,255,0.1)", M.onmouseout = () => M.style.background = "transparent", M.onclick = async () => {
          M.disabled = !0, M.textContent = "Restarting...", M.style.opacity = "0.7", $.textContent = "Restarting...", P.textContent = "Applying changes, please wait...";
          try {
            const x = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Ft.refreshComboInNodes && (await Ft.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", $.textContent = "Nodes Installed", $.style.color = "#4caf50", P.textContent = `${g} package${g > 1 ? "s" : ""} installed successfully!`, p.style.borderColor = "#4caf50", M.style.display = "none", setTimeout(() => {
                  p.remove();
                }, 3e3);
              } catch (q) {
                console.error("[ComfyGit] Failed to refresh nodes:", q), _.textContent = "✅", $.textContent = "Restart Complete", $.style.color = "#4caf50", P.textContent = "Refresh the page to load new nodes.", p.style.borderColor = "#4caf50", M.style.display = "none";
              }
            };
            n.addEventListener("reconnected", x, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (x) {
            console.error("[ComfyGit] Failed to restart:", x), $.textContent = "Restart Failed", $.style.color = "#e53935", P.textContent = "Could not restart server. Try again.", p.style.borderColor = "#e53935", M.textContent = "Try Again", M.disabled = !1, M.style.opacity = "1";
          }
        }, p.appendChild(M);
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
        `, E.onmouseover = () => E.style.opacity = "1", E.onmouseout = () => E.style.opacity = "0.6", E.onclick = () => p.remove(), p.appendChild(E), document.body.appendChild(p), console.log(`[ComfyGit] Restart required notification displayed (${g} packages installed)`);
      };
      n.addEventListener("comfygit:workflow-changed", async (g) => {
        const { change_type: w, workflow_name: p } = g.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${p}`), await _n(), Wo();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      n.addEventListener("status", async (g) => {
        const w = g.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : d()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (g) => {
        const w = ZT(g.detail);
        w && u(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (g) => {
        const w = g, { count: p = 1 } = w.detail || {};
        m(p);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
