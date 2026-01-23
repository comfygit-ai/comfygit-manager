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
}, Zl = () => !1, Ln = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ma = (e) => e.startsWith("onUpdate:"), gt = Object.assign, Da = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, Vr = Object.prototype.hasOwnProperty, Ze = (e, s) => Vr.call(e, s), ze = Array.isArray, uo = (e) => Qo(e) === "[object Map]", wo = (e) => Qo(e) === "[object Set]", al = (e) => Qo(e) === "[object Date]", Ge = (e) => typeof e == "function", dt = (e) => typeof e == "string", es = (e) => typeof e == "symbol", tt = (e) => e !== null && typeof e == "object", ei = (e) => (tt(e) || Ge(e)) && Ge(e.then) && Ge(e.catch), ti = Object.prototype.toString, Qo = (e) => ti.call(e), Wr = (e) => Qo(e).slice(8, -1), si = (e) => Qo(e) === "[object Object]", La = (e) => dt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Lo = /* @__PURE__ */ Ra(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), On = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, Gr = /-\w/g, Gt = On(
  (e) => e.replace(Gr, (s) => s.slice(1).toUpperCase())
), jr = /\B([A-Z])/g, zs = On(
  (e) => e.replace(jr, "-$1").toLowerCase()
), An = On((e) => e.charAt(0).toUpperCase() + e.slice(1)), Yn = On(
  (e) => e ? `on${An(e)}` : ""
), As = (e, s) => !Object.is(e, s), pn = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, oi = (e, s, o, n = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, Nn = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, Hr = (e) => {
  const s = dt(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let ll;
const Un = () => ll || (ll = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function jt(e) {
  if (ze(e)) {
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
  else if (ze(e))
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
  if (o = ze(e), n = ze(s), o || n)
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
const ai = (e) => !!(e && e.__v_isRef === !0), f = (e) => dt(e) ? e : e == null ? "" : ze(e) || tt(e) && (e.toString === ti || !Ge(e.toString)) ? ai(e) ? f(e.value) : JSON.stringify(e, li, 2) : String(e), li = (e, s) => ai(s) ? li(e, s.value) : uo(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [n, l], i) => (o[Jn(n, i) + " =>"] = l, o),
    {}
  )
} : wo(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => Jn(o))
} : es(s) ? Jn(s) : tt(s) && !ze(s) && !si(s) ? String(s) : s, Jn = (e, s = "") => {
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
const Xn = /* @__PURE__ */ new WeakSet();
class ii {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Dt && Dt.active && Dt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Xn.has(this) && (Xn.delete(this), this.trigger()));
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
    this.flags & 64 ? Xn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
    const u = ze(e), m = u && La(o);
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
function zn(e) {
  return _t(e = Xe(e), "iterate", jo), e;
}
function Ds(e, s) {
  return Ss(e) ? Xs(e) ? go(ts(s)) : go(s) : ts(s);
}
const nc = {
  __proto__: null,
  [Symbol.iterator]() {
    return Qn(this, Symbol.iterator, (e) => Ds(this, e));
  },
  concat(...e) {
    return oo(this).concat(
      ...e.map((s) => ze(s) ? oo(s) : s)
    );
  },
  entries() {
    return Qn(this, "entries", (e) => (e[1] = Ds(this, e[1]), e));
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
    return Zn(this, "includes", e);
  },
  indexOf(...e) {
    return Zn(this, "indexOf", e);
  },
  join(e) {
    return oo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Zn(this, "lastIndexOf", e);
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
    return Qn(this, "values", (e) => Ds(this, e));
  }
};
function Qn(e, s, o) {
  const n = zn(e), l = n[s]();
  return n !== e && !Vt(e) && (l._next = l.next, l.next = () => {
    const i = l._next();
    return i.done || (i.value = o(i.value)), i;
  }), l;
}
const ac = Array.prototype;
function ys(e, s, o, n, l, i) {
  const c = zn(e), d = c !== e && !Vt(e), u = c[s];
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
  const l = zn(e);
  let i = o;
  return l !== e && (Vt(e) ? o.length > 3 && (i = function(c, d, u) {
    return o.call(this, c, d, u, e);
  }) : i = function(c, d, u) {
    return o.call(this, c, Ds(e, d), u, e);
  }), l[s](i, ...n);
}
function Zn(e, s, o) {
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
    const c = ze(s);
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
      return l && tt(u) ? kn(u) : u;
    }
    return tt(d) ? l ? kn(d) : Fs(d) : d;
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
function kn(e) {
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
const ts = (e) => tt(e) ? Fs(e) : e, go = (e) => tt(e) ? kn(e) : e;
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
function Ve(e) {
  return $t(e) ? e.value : e;
}
const Cc = {
  get: (e, s, o) => s === "__v_raw" ? e : Ve(Reflect.get(e, s, o)),
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
  return Ge(e) ? n = e : (n = e.get, l = e.set), new xc(n, l, o);
}
const ln = {}, $n = /* @__PURE__ */ new WeakMap();
let qs;
function Ic(e, s = !1, o = qs) {
  if (o) {
    let n = $n.get(o);
    n || $n.set(o, n = []), n.push(e);
  }
}
function Ec(e, s, o = st) {
  const { immediate: n, deep: l, once: i, scheduler: c, augmentJob: d, call: u } = o, m = (x) => l ? x : Vt(x) || l === !1 || l === 0 ? ks(x, 1) : ks(x);
  let v, g, w, p, _ = !1, S = !1;
  if ($t(e) ? (g = () => e.value, _ = Vt(e)) : Xs(e) ? (g = () => m(e), _ = !0) : ze(e) ? (S = !0, _ = e.some((x) => Xs(x) || Vt(x)), g = () => e.map((x) => {
    if ($t(x))
      return x.value;
    if (Xs(x))
      return m(x);
    if (Ge(x))
      return u ? u(x, 2) : x();
  })) : Ge(e) ? s ? g = u ? () => u(e, 2) : e : g = () => {
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
  let L = S ? new Array(e.length).fill(ln) : ln;
  const I = (x) => {
    if (!(!(v.flags & 1) || !v.dirty && !x))
      if (s) {
        const q = v.run();
        if (l || _ || (S ? q.some((W, F) => As(W, L[F])) : As(q, L))) {
          w && w();
          const W = qs;
          qs = v;
          try {
            const F = [
              q,
              // pass undefined as the old value when it's changed for the first time
              L === ln ? void 0 : S && L[0] === ln ? [] : L,
              p
            ];
            L = q, u ? u(s, 3, F) : (
              // @ts-expect-error
              s(...F)
            );
          } finally {
            qs = W;
          }
        }
      } else
        v.run();
  };
  return d && d(I), v = new ii(g), v.scheduler = c ? () => c(I, !1) : I, p = (x) => Ic(x, !1, v), w = v.onStop = () => {
    const x = $n.get(v);
    if (x) {
      if (u)
        u(x, 4);
      else
        for (const q of x) q();
      $n.delete(v);
    }
  }, s ? n ? I(!0) : L = v.run() : c ? c(I.bind(null, !0), !0) : v.run(), P.pause = v.pause.bind(v), P.resume = v.resume.bind(v), P.stop = P, P;
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
    Fn(l, s, o);
  }
}
function ss(e, s, o, n) {
  if (Ge(e)) {
    const l = Zo(e, s, o, n);
    return l && ei(l) && l.catch((i) => {
      Fn(i, s, o);
    }), l;
  }
  if (ze(e)) {
    const l = [];
    for (let i = 0; i < e.length; i++)
      l.push(ss(e[i], s, o, n));
    return l;
  }
}
function Fn(e, s, o, n = !0) {
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
let Cn = null;
function en(e) {
  const s = Cn || ki;
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
  Cn || (Cn = ki.then(xi));
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
    us = -1, It.length = 0, Ci(), Cn = null, (It.length || fo.length) && xi();
  }
}
let yt = null, Si = null;
function xn(e) {
  const s = yt;
  return yt = e, Si = e && e.type.__scopeId || null, s;
}
function h(e, s = yt, o) {
  if (!s || e._n)
    return e;
  const n = (...l) => {
    n._d && En(-1);
    const i = xn(s);
    let c;
    try {
      c = e(...l);
    } finally {
      xn(i), n._d && En(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ye(e, s) {
  if (yt === null)
    return e;
  const o = jn(yt), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [i, c, d, u = st] = s[l];
    i && (Ge(i) && (i = {
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
    let { shapeFlag: L, children: I, dynamicChildren: x } = s;
    if (e == null) {
      const q = s.el = S(""), W = s.anchor = S("");
      p(q, o, n), p(W, o, n);
      const F = (E, R) => {
        L & 16 && v(
          I,
          E,
          R,
          l,
          i,
          c,
          d,
          u
        );
      }, T = () => {
        const E = s.target = ya(s.props, _), R = Pi(E, s, S, p);
        E && (c !== "svg" && ul(E) ? c = "svg" : c !== "mathml" && fl(E) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(E), P || (F(E, R), gn(s, !1)));
      };
      P && (F(o, W), gn(s, !0)), dl(s.props) ? (s.el.__isMounted = !1, St(() => {
        T(), delete s.el.__isMounted;
      }, i)) : T();
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
      const q = s.anchor = e.anchor, W = s.target = e.target, F = s.targetAnchor = e.targetAnchor, T = No(e.props), E = T ? o : W, R = T ? q : F;
      if (c === "svg" || ul(W) ? c = "svg" : (c === "mathml" || fl(W)) && (c = "mathml"), x ? (w(
        e.dynamicChildren,
        x,
        E,
        l,
        i,
        c,
        d
      ), qa(e, s, !0)) : u || g(
        e,
        s,
        E,
        R,
        l,
        i,
        c,
        d,
        !1
      ), P)
        T ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : rn(
          s,
          o,
          q,
          m,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const Z = s.target = ya(
          s.props,
          _
        );
        Z && rn(
          s,
          Z,
          null,
          m,
          0
        );
      } else T && rn(
        s,
        W,
        F,
        m,
        1
      );
      gn(s, P);
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
  function w(S, $, P, L) {
    $.anchor = g(
      c(S),
      $,
      d(S),
      o,
      n,
      l,
      i
    ), $.targetStart = P, $.targetAnchor = L;
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
    gn(s, _);
  } else _ && s.shapeFlag & 16 && w(e, s, e, c(e));
  return s.anchor && c(s.anchor);
}
const wt = Ti;
function gn(e, s) {
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
        return ea(i);
      const u = ml(i);
      if (!u)
        return ea(i);
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
          }, ea(i);
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
    onAfterAppear: L,
    onAppearCancelled: I
  } = s, x = String(e.key), q = Oi(o, e), W = (E, R) => {
    E && ss(
      E,
      n,
      9,
      R
    );
  }, F = (E, R) => {
    const Z = R[1];
    W(E, R), ze(E) ? E.every((Y) => Y.length <= 1) && Z() : E.length <= 1 && Z();
  }, T = {
    mode: c,
    persisted: d,
    beforeEnter(E) {
      let R = u;
      if (!o.isMounted)
        if (i)
          R = $ || u;
        else
          return;
      E[_s] && E[_s](
        !0
        /* cancelled */
      );
      const Z = q[x];
      Z && Ys(e, Z) && Z.el[_s] && Z.el[_s](), W(R, [E]);
    },
    enter(E) {
      let R = m, Z = v, Y = g;
      if (!o.isMounted)
        if (i)
          R = P || m, Z = L || v, Y = I || g;
        else
          return;
      let j = !1;
      const se = E[cn] = (ee) => {
        j || (j = !0, ee ? W(Y, [E]) : W(Z, [E]), T.delayedLeave && T.delayedLeave(), E[cn] = void 0);
      };
      R ? F(R, [E, se]) : se();
    },
    leave(E, R) {
      const Z = String(e.key);
      if (E[cn] && E[cn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return R();
      W(w, [E]);
      let Y = !1;
      const j = E[_s] = (se) => {
        Y || (Y = !0, R(), se ? W(S, [E]) : W(_, [E]), E[_s] = void 0, q[Z] === e && delete q[Z]);
      };
      q[Z] = e, p ? F(p, [E, j]) : j();
    },
    clone(E) {
      const R = Ko(
        E,
        s,
        o,
        n,
        l
      );
      return l && l(R), R;
    }
  };
  return T;
}
function ea(e) {
  if (Bn(e))
    return e = Ns(e), e.children = null, e;
}
function ml(e) {
  if (!Bn(e))
    return Ei(e.type) && e.children ? Li(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: s, children: o } = e;
  if (o) {
    if (s & 16)
      return o[0];
    if (s & 32 && Ge(o.default))
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
  return Ge(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    gt({ name: e.name }, s, { setup: e })
  ) : e;
}
function Ai(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Sn = /* @__PURE__ */ new WeakMap();
function Uo(e, s, o, n, l = !1) {
  if (ze(e)) {
    e.forEach(
      (_, S) => Uo(
        _,
        s && (ze(s) ? s[S] : s),
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
  const i = n.shapeFlag & 4 ? jn(n.component) : n.el, c = l ? null : i, { i: d, r: u } = e, m = s && s.r, v = d.refs === st ? d.refs = {} : d.refs, g = d.setupState, w = Xe(g), p = g === st ? Zl : (_) => Ze(w, _);
  if (m != null && m !== u) {
    if (vl(s), dt(m))
      v[m] = null, p(m) && (g[m] = null);
    else if ($t(m)) {
      m.value = null;
      const _ = s;
      _.k && (v[_.k] = null);
    }
  }
  if (Ge(u))
    Zo(u, d, 12, [c, v]);
  else {
    const _ = dt(u), S = $t(u);
    if (_ || S) {
      const $ = () => {
        if (e.f) {
          const P = _ ? p(u) ? g[u] : v[u] : u.value;
          if (l)
            ze(P) && Da(P, i);
          else if (ze(P))
            P.includes(i) || P.push(i);
          else if (_)
            v[u] = [i], p(u) && (g[u] = v[u]);
          else {
            const L = [i];
            u.value = L, e.k && (v[e.k] = L);
          }
        } else _ ? (v[u] = c, p(u) && (g[u] = c)) : S && (u.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const P = () => {
          $(), Sn.delete(e);
        };
        P.id = -1, Sn.set(e, P), St(P, o);
      } else
        vl(e), $();
    }
  }
}
function vl(e) {
  const s = Sn.get(e);
  s && (s.flags |= 8, Sn.delete(e));
}
Un().requestIdleCallback;
Un().cancelIdleCallback;
const mo = (e) => !!e.type.__asyncLoader, Bn = (e) => e.type.__isKeepAlive;
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
  if (Vn(s, n, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      Bn(l.parent.vnode) && Nc(n, s, o, l), l = l.parent;
  }
}
function Nc(e, s, o, n) {
  const l = Vn(
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
function Vn(e, s, o = kt, n = !1) {
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
  (!Jo || e === "sp") && Vn(e, (...n) => s(...n), o);
}, Uc = Is("bm"), et = Is("m"), zc = Is(
  "bu"
), Ui = Is("u"), zi = Is(
  "bum"
), to = Is("um"), Fc = Is(
  "sp"
), Bc = Is("rtg"), Vc = Is("rtc");
function Wc(e, s = kt) {
  Vn("ec", e, s);
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
      if (d && (d === s || d === Gt(s) || d === An(Gt(s))))
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
  return e && (e[s] || e[Gt(s)] || e[An(Gt(s))]);
}
function ge(e, s, o, n) {
  let l;
  const i = o, c = ze(e);
  if (c || dt(e)) {
    const d = c && Xs(e);
    let u = !1, m = !1;
    d && (u = !Vt(e), m = Ss(e), e = zn(e)), l = new Array(e.length);
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
  const c = i && Bi(i(o)), d = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, u = M(
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
const wa = (e) => e ? lr(e) ? jn(e) : wa(e.parent) : null, zo = (
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
), ta = (e, s) => e !== st && !e.__isScriptSetup && Ze(e, s), Hc = {
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
        if (ta(n, s))
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
    return ta(l, s) ? (l[s] = o, !0) : n !== st && Ze(n, s) ? (n[s] = o, !0) : Ze(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (i[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: n, appContext: l, props: i, type: c }
  }, d) {
    let u;
    return !!(o[d] || e !== st && d[0] !== "$" && Ze(e, d) || ta(s, d) || Ze(i, d) || Ze(n, d) || Ze(zo, d) || Ze(l.config.globalProperties, d) || (u = c.__cssModules) && u[d]);
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
    beforeUnmount: L,
    destroyed: I,
    unmounted: x,
    render: q,
    renderTracked: W,
    renderTriggered: F,
    errorCaptured: T,
    serverPrefetch: E,
    // public API
    expose: R,
    inheritAttrs: Z,
    // assets
    components: Y,
    directives: j,
    filters: se
  } = s;
  if (m && qc(m, n, null), c)
    for (const N in c) {
      const D = c[N];
      Ge(D) && (n[N] = D.bind(o));
    }
  if (l) {
    const N = l.call(o, o);
    tt(N) && (e.data = Fs(N));
  }
  if (_a = !0, i)
    for (const N in i) {
      const D = i[N], we = Ge(D) ? D.bind(o, o) : Ge(D.get) ? D.get.bind(o, o) : vs, J = !Ge(D) && Ge(D.set) ? D.set.bind(o) : vs, de = U({
        get: we,
        set: J
      });
      Object.defineProperty(n, N, {
        enumerable: !0,
        configurable: !0,
        get: () => de.value,
        set: (_e) => de.value = _e
      });
    }
  if (d)
    for (const N in d)
      Vi(d[N], n, o, N);
  if (u) {
    const N = Ge(u) ? u.call(o) : u;
    Reflect.ownKeys(N).forEach((D) => {
      ed(D, N[D]);
    });
  }
  v && hl(v, e, "c");
  function A(N, D) {
    ze(D) ? D.forEach((we) => N(we.bind(o))) : D && N(D.bind(o));
  }
  if (A(Uc, g), A(et, w), A(zc, p), A(Ui, _), A(Oc, S), A(Ac, $), A(Wc, T), A(Vc, W), A(Bc, F), A(zi, L), A(to, x), A(Fc, E), ze(R))
    if (R.length) {
      const N = e.exposed || (e.exposed = {});
      R.forEach((D) => {
        Object.defineProperty(N, D, {
          get: () => o[D],
          set: (we) => o[D] = we,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  q && e.render === vs && (e.render = q), Z != null && (e.inheritAttrs = Z), Y && (e.components = Y), j && (e.directives = j), E && Ai(e);
}
function qc(e, s, o = vs) {
  ze(e) && (e = ba(e));
  for (const n in e) {
    const l = e[n];
    let i;
    tt(l) ? "default" in l ? i = hn(
      l.from || n,
      l.default,
      !0
    ) : i = hn(l.from || n) : i = hn(l), $t(i) ? Object.defineProperty(s, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (c) => i.value = c
    }) : s[n] = i;
  }
}
function hl(e, s, o) {
  ss(
    ze(e) ? e.map((n) => n.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function Vi(e, s, o, n) {
  let l = n.includes(".") ? Hi(o, n) : () => o[n];
  if (dt(e)) {
    const i = s[e];
    Ge(i) && Ct(l, i);
  } else if (Ge(e))
    Ct(l, e.bind(o));
  else if (tt(e))
    if (ze(e))
      e.forEach((i) => Vi(i, s, o, n));
    else {
      const i = Ge(e.handler) ? e.handler.bind(o) : s[e.handler];
      Ge(i) && Ct(l, i, e);
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
    (m) => In(u, m, c, !0)
  ), In(u, s, c)), tt(s) && i.set(s, u), u;
}
function In(e, s, o, n = !1) {
  const { mixins: l, extends: i } = s;
  i && In(e, i, o, !0), l && l.forEach(
    (c) => In(e, c, o, !0)
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
      Ge(e) ? e.call(this, this) : e,
      Ge(s) ? s.call(this, this) : s
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
    Ge(n) || (n = gt({}, n)), l != null && !tt(l) && (l = null);
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
        return c.has(v) || (v && Ge(v.install) ? (c.add(v), v.install(m, ...g)) : Ge(v) && (c.add(v), v(m, ...g))), m;
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
          return p.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(p, v, w), u = !0, m._container = v, v.__vue_app__ = m, jn(p.component);
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
function hn(e, s, o = !1) {
  const n = Ja();
  if (n || vo) {
    let l = vo ? vo._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && Ge(s) ? s.call(n && n.proxy) : s;
  }
}
const td = Symbol.for("v-scx"), sd = () => hn(td);
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
  Ge(s) ? i = s : (i = s.handler, o = s);
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
  c && (c.trim && (l = o.map((v) => dt(v) ? v.trim() : v)), c.number && (l = o.map(Nn)));
  let d, u = n[d = Yn(s)] || // also try camelCase event handler (#2249)
  n[d = Yn(Gt(s))];
  !u && i && (u = n[d = Yn(zs(s))]), u && ss(
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
  if (!Ge(e)) {
    const u = (m) => {
      const v = Ki(m, s, !0);
      v && (d = !0, gt(c, v));
    };
    !o && s.mixins.length && s.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !i && !d ? (tt(e) && n.set(e, null), null) : (ze(i) ? i.forEach((u) => c[u] = null) : gt(c, i), tt(e) && n.set(e, c), c);
}
function Wn(e, s) {
  return !e || !Ln(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), Ze(e, s[0].toLowerCase() + s.slice(1)) || Ze(e, zs(s)) || Ze(e, s));
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
  } = e, $ = xn(e);
  let P, L;
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
      ), L = d;
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
      ), L = s.props ? d : id(d);
    }
  } catch (x) {
    Fo.length = 0, Fn(x, e, 1), P = C(bt);
  }
  let I = P;
  if (L && S !== !1) {
    const x = Object.keys(L), { shapeFlag: q } = I;
    x.length && q & 7 && (i && x.some(Ma) && (L = rd(
      L,
      i
    )), I = Ns(I, L, !1, !0));
  }
  return o.dirs && (I = Ns(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(o.dirs) : o.dirs), o.transition && Zs(I, o.transition), P = I, xn($), P;
}
const id = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Ln(o)) && ((s || (s = {}))[o] = e[o]);
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
        if (c[w] !== n[w] && !Wn(m, w))
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
    if (s[i] !== e[i] && !Wn(o, i))
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
        if (Wn(e.emitsOptions, w))
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
      l && Ze(l, v = Gt(u)) ? !i || !i.includes(v) ? o[v] = m : (d || (d = {}))[v] = m : Wn(e.emitsOptions, u) || (!(u in n) || m !== n[u]) && (n[u] = m, c = !0);
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
      if (c.type !== Function && !c.skipFactory && Ge(u)) {
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
  if (!Ge(e)) {
    const v = (g) => {
      u = !0;
      const [w, p] = Qi(g, s, !0);
      gt(c, w), p && d.push(...p);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!i && !u)
    return tt(e) && n.set(e, co), co;
  if (ze(i))
    for (let v = 0; v < i.length; v++) {
      const g = Gt(i[v]);
      kl(g) && (c[g] = st);
    }
  else if (i)
    for (const v in i) {
      const g = Gt(v);
      if (kl(g)) {
        const w = i[v], p = c[g] = ze(w) || Ge(w) ? { type: w } : gt({}, w), _ = p.type;
        let S = !1, $ = !0;
        if (ze(_))
          for (let P = 0; P < _.length; ++P) {
            const L = _[P], I = Ge(L) && L.name;
            if (I === "Boolean") {
              S = !0;
              break;
            } else I === "String" && ($ = !1);
          }
        else
          S = Ge(_) && _.name === "Boolean";
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
const Ha = (e) => e === "_" || e === "_ctx" || e === "$stable", Ka = (e) => ze(e) ? e.map(ms) : [ms(e)], vd = (e, s, o) => {
  if (s._n)
    return s;
  const n = h((...l) => Ka(s(...l)), o);
  return n._c = !1, n;
}, Zi = (e, s, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (Ha(l)) continue;
    const i = e[l];
    if (Ge(i))
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
  const o = Un();
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
  } = e, S = (O, B, ne, le = null, fe = null, me = null, xe = void 0, Se = null, ae = !!B.dynamicChildren) => {
    if (O === B)
      return;
    O && !Ys(O, B) && (le = Be(O), _e(O, fe, me, !0), O = null), B.patchFlag === -2 && (ae = !1, B.dynamicChildren = null);
    const { type: ue, ref: Le, shapeFlag: Ie } = B;
    switch (ue) {
      case Gn:
        $(O, B, ne, le);
        break;
      case bt:
        P(O, B, ne, le);
        break;
      case oa:
        O == null && L(B, ne, le, xe);
        break;
      case G:
        Y(
          O,
          B,
          ne,
          le,
          fe,
          me,
          xe,
          Se,
          ae
        );
        break;
      default:
        Ie & 1 ? q(
          O,
          B,
          ne,
          le,
          fe,
          me,
          xe,
          Se,
          ae
        ) : Ie & 6 ? j(
          O,
          B,
          ne,
          le,
          fe,
          me,
          xe,
          Se,
          ae
        ) : (Ie & 64 || Ie & 128) && ue.process(
          O,
          B,
          ne,
          le,
          fe,
          me,
          xe,
          Se,
          ae,
          je
        );
    }
    Le != null && fe ? Uo(Le, O && O.ref, me, B || O, !B) : Le == null && O && O.ref != null && Uo(O.ref, null, me, O, !0);
  }, $ = (O, B, ne, le) => {
    if (O == null)
      n(
        B.el = d(B.children),
        ne,
        le
      );
    else {
      const fe = B.el = O.el;
      B.children !== O.children && m(fe, B.children);
    }
  }, P = (O, B, ne, le) => {
    O == null ? n(
      B.el = u(B.children || ""),
      ne,
      le
    ) : B.el = O.el;
  }, L = (O, B, ne, le) => {
    [O.el, O.anchor] = _(
      O.children,
      B,
      ne,
      le,
      O.el,
      O.anchor
    );
  }, I = ({ el: O, anchor: B }, ne, le) => {
    let fe;
    for (; O && O !== B; )
      fe = w(O), n(O, ne, le), O = fe;
    n(B, ne, le);
  }, x = ({ el: O, anchor: B }) => {
    let ne;
    for (; O && O !== B; )
      ne = w(O), l(O), O = ne;
    l(B);
  }, q = (O, B, ne, le, fe, me, xe, Se, ae) => {
    if (B.type === "svg" ? xe = "svg" : B.type === "math" && (xe = "mathml"), O == null)
      W(
        B,
        ne,
        le,
        fe,
        me,
        xe,
        Se,
        ae
      );
    else {
      const ue = O.el && O.el._isVueCE ? O.el : null;
      try {
        ue && ue._beginPatch(), E(
          O,
          B,
          fe,
          me,
          xe,
          Se,
          ae
        );
      } finally {
        ue && ue._endPatch();
      }
    }
  }, W = (O, B, ne, le, fe, me, xe, Se) => {
    let ae, ue;
    const { props: Le, shapeFlag: Ie, transition: te, dirs: K } = O;
    if (ae = O.el = c(
      O.type,
      me,
      Le && Le.is,
      Le
    ), Ie & 8 ? v(ae, O.children) : Ie & 16 && T(
      O.children,
      ae,
      null,
      le,
      fe,
      sa(O, me),
      xe,
      Se
    ), K && Gs(O, null, le, "created"), F(ae, O, O.scopeId, xe, le), Le) {
      for (const be in Le)
        be !== "value" && !Lo(be) && i(ae, be, null, Le[be], me, le);
      "value" in Le && i(ae, "value", null, Le.value, me), (ue = Le.onVnodeBeforeMount) && rs(ue, le, O);
    }
    K && Gs(O, null, le, "beforeMount");
    const Me = wd(fe, te);
    Me && te.beforeEnter(ae), n(ae, B, ne), ((ue = Le && Le.onVnodeMounted) || Me || K) && St(() => {
      ue && rs(ue, le, O), Me && te.enter(ae), K && Gs(O, null, le, "mounted");
    }, fe);
  }, F = (O, B, ne, le, fe) => {
    if (ne && p(O, ne), le)
      for (let me = 0; me < le.length; me++)
        p(O, le[me]);
    if (fe) {
      let me = fe.subTree;
      if (B === me || or(me.type) && (me.ssContent === B || me.ssFallback === B)) {
        const xe = fe.vnode;
        F(
          O,
          xe,
          xe.scopeId,
          xe.slotScopeIds,
          fe.parent
        );
      }
    }
  }, T = (O, B, ne, le, fe, me, xe, Se, ae = 0) => {
    for (let ue = ae; ue < O.length; ue++) {
      const Le = O[ue] = Se ? Os(O[ue]) : ms(O[ue]);
      S(
        null,
        Le,
        B,
        ne,
        le,
        fe,
        me,
        xe,
        Se
      );
    }
  }, E = (O, B, ne, le, fe, me, xe) => {
    const Se = B.el = O.el;
    let { patchFlag: ae, dynamicChildren: ue, dirs: Le } = B;
    ae |= O.patchFlag & 16;
    const Ie = O.props || st, te = B.props || st;
    let K;
    if (ne && js(ne, !1), (K = te.onVnodeBeforeUpdate) && rs(K, ne, B, O), Le && Gs(B, O, ne, "beforeUpdate"), ne && js(ne, !0), (Ie.innerHTML && te.innerHTML == null || Ie.textContent && te.textContent == null) && v(Se, ""), ue ? R(
      O.dynamicChildren,
      ue,
      Se,
      ne,
      le,
      sa(B, fe),
      me
    ) : xe || D(
      O,
      B,
      Se,
      null,
      ne,
      le,
      sa(B, fe),
      me,
      !1
    ), ae > 0) {
      if (ae & 16)
        Z(Se, Ie, te, ne, fe);
      else if (ae & 2 && Ie.class !== te.class && i(Se, "class", null, te.class, fe), ae & 4 && i(Se, "style", Ie.style, te.style, fe), ae & 8) {
        const Me = B.dynamicProps;
        for (let be = 0; be < Me.length; be++) {
          const ye = Me[be], V = Ie[ye], z = te[ye];
          (z !== V || ye === "value") && i(Se, ye, V, z, fe, ne);
        }
      }
      ae & 1 && O.children !== B.children && v(Se, B.children);
    } else !xe && ue == null && Z(Se, Ie, te, ne, fe);
    ((K = te.onVnodeUpdated) || Le) && St(() => {
      K && rs(K, ne, B, O), Le && Gs(B, O, ne, "updated");
    }, le);
  }, R = (O, B, ne, le, fe, me, xe) => {
    for (let Se = 0; Se < B.length; Se++) {
      const ae = O[Se], ue = B[Se], Le = (
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
        xe,
        !0
      );
    }
  }, Z = (O, B, ne, le, fe) => {
    if (B !== ne) {
      if (B !== st)
        for (const me in B)
          !Lo(me) && !(me in ne) && i(
            O,
            me,
            B[me],
            null,
            fe,
            le
          );
      for (const me in ne) {
        if (Lo(me)) continue;
        const xe = ne[me], Se = B[me];
        xe !== Se && me !== "value" && i(O, me, Se, xe, fe, le);
      }
      "value" in ne && i(O, "value", B.value, ne.value, fe);
    }
  }, Y = (O, B, ne, le, fe, me, xe, Se, ae) => {
    const ue = B.el = O ? O.el : d(""), Le = B.anchor = O ? O.anchor : d("");
    let { patchFlag: Ie, dynamicChildren: te, slotScopeIds: K } = B;
    K && (Se = Se ? Se.concat(K) : K), O == null ? (n(ue, ne, le), n(Le, ne, le), T(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      B.children || [],
      ne,
      Le,
      fe,
      me,
      xe,
      Se,
      ae
    )) : Ie > 0 && Ie & 64 && te && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    O.dynamicChildren ? (R(
      O.dynamicChildren,
      te,
      ne,
      fe,
      me,
      xe,
      Se
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (B.key != null || fe && B === fe.subTree) && qa(
      O,
      B,
      !0
      /* shallow */
    )) : D(
      O,
      B,
      ne,
      Le,
      fe,
      me,
      xe,
      Se,
      ae
    );
  }, j = (O, B, ne, le, fe, me, xe, Se, ae) => {
    B.slotScopeIds = Se, O == null ? B.shapeFlag & 512 ? fe.ctx.activate(
      B,
      ne,
      le,
      xe,
      ae
    ) : se(
      B,
      ne,
      le,
      fe,
      me,
      xe,
      ae
    ) : ee(O, B, ae);
  }, se = (O, B, ne, le, fe, me, xe) => {
    const Se = O.component = Ed(
      O,
      le,
      fe
    );
    if (Bn(O) && (Se.ctx.renderer = je), Td(Se, !1, xe), Se.asyncDep) {
      if (fe && fe.registerDep(Se, A, xe), !O.el) {
        const ae = Se.subTree = C(bt);
        P(null, ae, B, ne), O.placeholder = ae.el;
      }
    } else
      A(
        Se,
        O,
        B,
        ne,
        fe,
        me,
        xe
      );
  }, ee = (O, B, ne) => {
    const le = B.component = O.component;
    if (cd(O, B, ne))
      if (le.asyncDep && !le.asyncResolved) {
        N(le, B, ne);
        return;
      } else
        le.next = B, le.update();
    else
      B.el = O.el, le.vnode = B;
  }, A = (O, B, ne, le, fe, me, xe) => {
    const Se = () => {
      if (O.isMounted) {
        let { next: Ie, bu: te, u: K, parent: Me, vnode: be } = O;
        {
          const Fe = sr(O);
          if (Fe) {
            Ie && (Ie.el = be.el, N(O, Ie, xe)), Fe.asyncDep.then(() => {
              O.isUnmounted || Se();
            });
            return;
          }
        }
        let ye = Ie, V;
        js(O, !1), Ie ? (Ie.el = be.el, N(O, Ie, xe)) : Ie = be, te && pn(te), (V = Ie.props && Ie.props.onVnodeBeforeUpdate) && rs(V, Me, Ie, be), js(O, !0);
        const z = _l(O), ce = O.subTree;
        O.subTree = z, S(
          ce,
          z,
          // parent may have changed if it's in a teleport
          g(ce.el),
          // anchor may have changed if it's in a fragment
          Be(ce),
          O,
          fe,
          me
        ), Ie.el = z.el, ye === null && dd(O, z.el), K && St(K, fe), (V = Ie.props && Ie.props.onVnodeUpdated) && St(
          () => rs(V, Me, Ie, be),
          fe
        );
      } else {
        let Ie;
        const { el: te, props: K } = B, { bm: Me, m: be, parent: ye, root: V, type: z } = O, ce = mo(B);
        js(O, !1), Me && pn(Me), !ce && (Ie = K && K.onVnodeBeforeMount) && rs(Ie, ye, B), js(O, !0);
        {
          V.ce && // @ts-expect-error _def is private
          V.ce._def.shadowRoot !== !1 && V.ce._injectChildStyle(z);
          const Fe = O.subTree = _l(O);
          S(
            null,
            Fe,
            ne,
            le,
            O,
            fe,
            me
          ), B.el = Fe.el;
        }
        if (be && St(be, fe), !ce && (Ie = K && K.onVnodeMounted)) {
          const Fe = B;
          St(
            () => rs(Ie, ye, Fe),
            fe
          );
        }
        (B.shapeFlag & 256 || ye && mo(ye.vnode) && ye.vnode.shapeFlag & 256) && O.a && St(O.a, fe), O.isMounted = !0, B = ne = le = null;
      }
    };
    O.scope.on();
    const ae = O.effect = new ii(Se);
    O.scope.off();
    const ue = O.update = ae.run.bind(ae), Le = O.job = ae.runIfDirty.bind(ae);
    Le.i = O, Le.id = O.uid, ae.scheduler = () => Wa(Le), js(O, !0), ue();
  }, N = (O, B, ne) => {
    B.component = O;
    const le = O.vnode.props;
    O.vnode = B, O.next = null, fd(O, B.props, le, ne), gd(O, B.children, ne), Cs(), cl(O), xs();
  }, D = (O, B, ne, le, fe, me, xe, Se, ae = !1) => {
    const ue = O && O.children, Le = O ? O.shapeFlag : 0, Ie = B.children, { patchFlag: te, shapeFlag: K } = B;
    if (te > 0) {
      if (te & 128) {
        J(
          ue,
          Ie,
          ne,
          le,
          fe,
          me,
          xe,
          Se,
          ae
        );
        return;
      } else if (te & 256) {
        we(
          ue,
          Ie,
          ne,
          le,
          fe,
          me,
          xe,
          Se,
          ae
        );
        return;
      }
    }
    K & 8 ? (Le & 16 && Te(ue, fe, me), Ie !== ue && v(ne, Ie)) : Le & 16 ? K & 16 ? J(
      ue,
      Ie,
      ne,
      le,
      fe,
      me,
      xe,
      Se,
      ae
    ) : Te(ue, fe, me, !0) : (Le & 8 && v(ne, ""), K & 16 && T(
      Ie,
      ne,
      le,
      fe,
      me,
      xe,
      Se,
      ae
    ));
  }, we = (O, B, ne, le, fe, me, xe, Se, ae) => {
    O = O || co, B = B || co;
    const ue = O.length, Le = B.length, Ie = Math.min(ue, Le);
    let te;
    for (te = 0; te < Ie; te++) {
      const K = B[te] = ae ? Os(B[te]) : ms(B[te]);
      S(
        O[te],
        K,
        ne,
        null,
        fe,
        me,
        xe,
        Se,
        ae
      );
    }
    ue > Le ? Te(
      O,
      fe,
      me,
      !0,
      !1,
      Ie
    ) : T(
      B,
      ne,
      le,
      fe,
      me,
      xe,
      Se,
      ae,
      Ie
    );
  }, J = (O, B, ne, le, fe, me, xe, Se, ae) => {
    let ue = 0;
    const Le = B.length;
    let Ie = O.length - 1, te = Le - 1;
    for (; ue <= Ie && ue <= te; ) {
      const K = O[ue], Me = B[ue] = ae ? Os(B[ue]) : ms(B[ue]);
      if (Ys(K, Me))
        S(
          K,
          Me,
          ne,
          null,
          fe,
          me,
          xe,
          Se,
          ae
        );
      else
        break;
      ue++;
    }
    for (; ue <= Ie && ue <= te; ) {
      const K = O[Ie], Me = B[te] = ae ? Os(B[te]) : ms(B[te]);
      if (Ys(K, Me))
        S(
          K,
          Me,
          ne,
          null,
          fe,
          me,
          xe,
          Se,
          ae
        );
      else
        break;
      Ie--, te--;
    }
    if (ue > Ie) {
      if (ue <= te) {
        const K = te + 1, Me = K < Le ? B[K].el : le;
        for (; ue <= te; )
          S(
            null,
            B[ue] = ae ? Os(B[ue]) : ms(B[ue]),
            ne,
            Me,
            fe,
            me,
            xe,
            Se,
            ae
          ), ue++;
      }
    } else if (ue > te)
      for (; ue <= Ie; )
        _e(O[ue], fe, me, !0), ue++;
    else {
      const K = ue, Me = ue, be = /* @__PURE__ */ new Map();
      for (ue = Me; ue <= te; ue++) {
        const lt = B[ue] = ae ? Os(B[ue]) : ms(B[ue]);
        lt.key != null && be.set(lt.key, ue);
      }
      let ye, V = 0;
      const z = te - Me + 1;
      let ce = !1, Fe = 0;
      const Qe = new Array(z);
      for (ue = 0; ue < z; ue++) Qe[ue] = 0;
      for (ue = K; ue <= Ie; ue++) {
        const lt = O[ue];
        if (V >= z) {
          _e(lt, fe, me, !0);
          continue;
        }
        let ut;
        if (lt.key != null)
          ut = be.get(lt.key);
        else
          for (ye = Me; ye <= te; ye++)
            if (Qe[ye - Me] === 0 && Ys(lt, B[ye])) {
              ut = ye;
              break;
            }
        ut === void 0 ? _e(lt, fe, me, !0) : (Qe[ut - Me] = ue + 1, ut >= Fe ? Fe = ut : ce = !0, S(
          lt,
          B[ut],
          ne,
          null,
          fe,
          me,
          xe,
          Se,
          ae
        ), V++);
      }
      const vt = ce ? _d(Qe) : co;
      for (ye = vt.length - 1, ue = z - 1; ue >= 0; ue--) {
        const lt = Me + ue, ut = B[lt], Rt = B[lt + 1], Ut = lt + 1 < Le ? (
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
          xe,
          Se,
          ae
        ) : ce && (ye < 0 || ue !== vt[ye] ? de(ut, ne, Ut, 2) : ye--);
      }
    }
  }, de = (O, B, ne, le, fe = null) => {
    const { el: me, type: xe, transition: Se, children: ae, shapeFlag: ue } = O;
    if (ue & 6) {
      de(O.component.subTree, B, ne, le);
      return;
    }
    if (ue & 128) {
      O.suspense.move(B, ne, le);
      return;
    }
    if (ue & 64) {
      xe.move(O, B, ne, je);
      return;
    }
    if (xe === G) {
      n(me, B, ne);
      for (let Ie = 0; Ie < ae.length; Ie++)
        de(ae[Ie], B, ne, le);
      n(O.anchor, B, ne);
      return;
    }
    if (xe === oa) {
      I(O, B, ne);
      return;
    }
    if (le !== 2 && ue & 1 && Se)
      if (le === 0)
        Se.beforeEnter(me), n(me, B, ne), St(() => Se.enter(me), fe);
      else {
        const { leave: Ie, delayLeave: te, afterLeave: K } = Se, Me = () => {
          O.ctx.isUnmounted ? l(me) : n(me, B, ne);
        }, be = () => {
          me._isLeaving && me[_s](
            !0
            /* cancelled */
          ), Ie(me, () => {
            Me(), K && K();
          });
        };
        te ? te(me, Me, be) : be();
      }
    else
      n(me, B, ne);
  }, _e = (O, B, ne, le = !1, fe = !1) => {
    const {
      type: me,
      props: xe,
      ref: Se,
      children: ae,
      dynamicChildren: ue,
      shapeFlag: Le,
      patchFlag: Ie,
      dirs: te,
      cacheIndex: K
    } = O;
    if (Ie === -2 && (fe = !1), Se != null && (Cs(), Uo(Se, null, ne, O, !0), xs()), K != null && (B.renderCache[K] = void 0), Le & 256) {
      B.ctx.deactivate(O);
      return;
    }
    const Me = Le & 1 && te, be = !mo(O);
    let ye;
    if (be && (ye = xe && xe.onVnodeBeforeUnmount) && rs(ye, B, O), Le & 6)
      he(O.component, ne, le);
    else {
      if (Le & 128) {
        O.suspense.unmount(ne, le);
        return;
      }
      Me && Gs(O, null, B, "beforeUnmount"), Le & 64 ? O.type.remove(
        O,
        B,
        ne,
        je,
        le
      ) : ue && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ue.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (me !== G || Ie > 0 && Ie & 64) ? Te(
        ue,
        B,
        ne,
        !1,
        !0
      ) : (me === G && Ie & 384 || !fe && Le & 16) && Te(ae, B, ne), le && Oe(O);
    }
    (be && (ye = xe && xe.onVnodeUnmounted) || Me) && St(() => {
      ye && rs(ye, B, O), Me && Gs(O, null, B, "unmounted");
    }, ne);
  }, Oe = (O) => {
    const { type: B, el: ne, anchor: le, transition: fe } = O;
    if (B === G) {
      We(ne, le);
      return;
    }
    if (B === oa) {
      x(O);
      return;
    }
    const me = () => {
      l(ne), fe && !fe.persisted && fe.afterLeave && fe.afterLeave();
    };
    if (O.shapeFlag & 1 && fe && !fe.persisted) {
      const { leave: xe, delayLeave: Se } = fe, ae = () => xe(ne, me);
      Se ? Se(O.el, me, ae) : ae();
    } else
      me();
  }, We = (O, B) => {
    let ne;
    for (; O !== B; )
      ne = w(O), l(O), O = ne;
    l(B);
  }, he = (O, B, ne) => {
    const { bum: le, scope: fe, job: me, subTree: xe, um: Se, m: ae, a: ue } = O;
    $l(ae), $l(ue), le && pn(le), fe.stop(), me && (me.flags |= 8, _e(xe, O, B, ne)), Se && St(Se, B), St(() => {
      O.isUnmounted = !0;
    }, B);
  }, Te = (O, B, ne, le = !1, fe = !1, me = 0) => {
    for (let xe = me; xe < O.length; xe++)
      _e(O[xe], B, ne, le, fe);
  }, Be = (O) => {
    if (O.shapeFlag & 6)
      return Be(O.component.subTree);
    if (O.shapeFlag & 128)
      return O.suspense.next();
    const B = w(O.anchor || O.el), ne = B && B[Ii];
    return ne ? w(ne) : B;
  };
  let $e = !1;
  const ie = (O, B, ne) => {
    O == null ? B._vnode && _e(B._vnode, null, null, !0) : S(
      B._vnode || null,
      O,
      B,
      null,
      null,
      null,
      ne
    ), B._vnode = O, $e || ($e = !0, cl(), Ci(), $e = !1);
  }, je = {
    p: S,
    um: _e,
    m: de,
    r: Oe,
    mt: se,
    mc: T,
    pc: D,
    pbc: R,
    n: Be,
    o: e
  };
  return {
    render: ie,
    hydrate: void 0,
    createApp: Zc(ie)
  };
}
function sa({ type: e, props: s }, o) {
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
  if (ze(n) && ze(l))
    for (let i = 0; i < n.length; i++) {
      const c = n[i];
      let d = l[i];
      d.shapeFlag & 1 && !d.dynamicChildren && ((d.patchFlag <= 0 || d.patchFlag === 32) && (d = l[i] = Os(l[i]), d.el = c.el), !o && d.patchFlag !== -2 && qa(c, d)), d.type === Gn && // avoid cached text nodes retaining detached dom nodes
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
  s && s.pendingBranch ? ze(e) ? s.effects.push(...e) : s.effects.push(e) : Rc(e);
}
const G = Symbol.for("v-fgt"), Gn = Symbol.for("v-txt"), bt = Symbol.for("v-cmt"), oa = Symbol.for("v-stc"), Fo = [];
let At = null;
function a(e = !1) {
  Fo.push(At = e ? null : []);
}
function kd() {
  Fo.pop(), At = Fo[Fo.length - 1] || null;
}
let qo = 1;
function En(e, s = !1) {
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
const ar = ({ key: e }) => e ?? null, yn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? dt(e) || $t(e) || Ge(e) ? { i: yt, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, n = 0, l = null, i = e === G ? 0 : 1, c = !1, d = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && ar(s),
    ref: s && yn(s),
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
    d && !dt(d) && (s.class = Ee(d)), tt(u) && (Va(u) && !ze(u) && (u = gt({}, u)), s.style = jt(u));
  }
  const c = dt(e) ? 1 : or(e) ? 128 : Ei(e) ? 64 : tt(e) ? 4 : Ge(e) ? 2 : 0;
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
      o && i ? ze(i) ? i.concat(yn(s)) : [i, yn(s)] : yn(s)
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
  return C(Gn, null, e, s);
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
  ) : Yo(e) ? Os(e) : C(Gn, null, String(e));
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
  else Ge(s) ? (s = { default: s, _ctx: yt }, o = 32) : (s = String(s), n & 64 ? (o = 16, s = [b(s)]) : o = 8);
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
      else if (Ln(l)) {
        const i = s[l], c = n[l];
        c && i !== c && !(ze(i) && i.includes(c)) && (s[l] = i ? [].concat(i, c) : c);
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
let Tn, $a;
{
  const e = Un(), s = (o, n) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(n), (i) => {
      l.length > 1 ? l.forEach((c) => c(i)) : l[0](i);
    };
  };
  Tn = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => kt = o
  ), $a = s(
    "__VUE_SSR_SETTERS__",
    (o) => Jo = o
  );
}
const tn = (e) => {
  const s = kt;
  return Tn(e), e.scope.on(), () => {
    e.scope.off(), Tn(s);
  };
}, Cl = () => {
  kt && kt.scope.off(), Tn(null);
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
          Fn(u, e, 0);
        });
      e.asyncDep = c;
    } else
      xl(e, c);
  } else
    ir(e);
}
function xl(e, s, o) {
  Ge(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : tt(s) && (e.setupState = bi(s)), ir(e);
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
function jn(e) {
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
  return Ge(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function Ld(e) {
  return Ge(e) && "__vccOpts" in e;
}
const U = (e, s) => Sc(e, s, Jo);
function sn(e, s, o) {
  try {
    En(-1);
    const n = arguments.length;
    return n === 2 ? tt(s) && !ze(s) ? Yo(s) ? C(e, null, [s]) : C(e, s) : C(e, null, s) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && Yo(o) && (o = [o]), C(e, s, o));
  } finally {
    En(1);
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
  ze(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, El = (e) => e ? ze(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
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
    onEnter: L,
    onEnterCancelled: I,
    onLeave: x,
    onLeaveCancelled: q,
    onBeforeAppear: W = P,
    onAppear: F = L,
    onAppearCancelled: T = I
  } = s, E = (Y, j, se, ee) => {
    Y._enterCancelled = ee, Ms(Y, j ? v : d), Ms(Y, j ? m : c), se && se();
  }, R = (Y, j) => {
    Y._isLeaving = !1, Ms(Y, g), Ms(Y, p), Ms(Y, w), j && j();
  }, Z = (Y) => (j, se) => {
    const ee = Y ? F : L, A = () => E(j, Y, se);
    Hs(ee, [j, A]), Tl(() => {
      Ms(j, Y ? u : i), ds(j, Y ? v : d), El(ee) || Pl(j, n, S, A);
    });
  };
  return gt(s, {
    onBeforeEnter(Y) {
      Hs(P, [Y]), ds(Y, i), ds(Y, c);
    },
    onBeforeAppear(Y) {
      Hs(W, [Y]), ds(Y, u), ds(Y, m);
    },
    onEnter: Z(!1),
    onAppear: Z(!0),
    onLeave(Y, j) {
      Y._isLeaving = !0;
      const se = () => R(Y, j);
      ds(Y, g), Y._enterCancelled ? (ds(Y, w), xa(Y)) : (xa(Y), ds(Y, w)), Tl(() => {
        Y._isLeaving && (Ms(Y, g), ds(Y, p), El(x) || Pl(Y, n, $, se));
      }), Hs(x, [Y, se]);
    },
    onEnterCancelled(Y) {
      E(Y, !1, void 0, !0), Hs(I, [Y]);
    },
    onAppearCancelled(Y) {
      E(Y, !0, void 0, !0), Hs(T, [Y]);
    },
    onLeaveCancelled(Y) {
      R(Y), Hs(q, [Y]);
    }
  });
}
function Bd(e) {
  if (e == null)
    return null;
  if (tt(e))
    return [na(e.enter), na(e.leave)];
  {
    const s = na(e);
    return [s, s];
  }
}
function na(e) {
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
          o[d] == null && wn(n, d, "");
        }
      else
        for (const c in s)
          o[c] == null && wn(n, c, "");
    for (const c in o)
      c === "display" && (i = !0), wn(n, c, o[c]);
  } else if (l) {
    if (s !== o) {
      const c = n[jd];
      c && (o += ";" + c), n.cssText = o, i = Hd.test(o);
    }
  } else s && e.removeAttribute("style");
  Dl in e && (e[Dl] = i ? n.display : "", e[Gd] && (n.display = "none"));
}
const Ll = /\s*!important$/;
function wn(e, s, o) {
  if (ze(o))
    o.forEach((n) => wn(e, s, n));
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
const Ol = ["Webkit", "Moz", "ms"], aa = {};
function qd(e, s) {
  const o = aa[s];
  if (o)
    return o;
  let n = Gt(s);
  if (n !== "filter" && n in e)
    return aa[s] = n;
  n = An(n);
  for (let l = 0; l < Ol.length; l++) {
    const i = Ol[l] + n;
    if (i in e)
      return aa[s] = i;
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
let la = 0;
const Qd = /* @__PURE__ */ Promise.resolve(), Zd = () => la || (Qd.then(() => la = 0), la = Date.now());
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, su = (e, s, o, n, l, i) => {
  const c = l === "svg";
  s === "class" ? Wd(e, n, c) : s === "style" ? Kd(e, o, n) : Ln(s) ? Ma(s) || Jd(e, s, o, n, i) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : ou(e, s, n, c)) ? (Ul(e, s, n), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Nl(e, s, n, c, i, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !dt(n)) ? Ul(e, Gt(s), n, i, s) : (s === "true-value" ? e._trueValue = n : s === "false-value" && (e._falseValue = n), Nl(e, s, n, c));
};
function ou(e, s, o, n) {
  if (n)
    return !!(s === "innerHTML" || s === "textContent" || s in e && Bl(s) && Ge(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return Bl(s) && dt(o) ? !1 : s in e;
}
const mr = /* @__PURE__ */ new WeakMap(), vr = /* @__PURE__ */ new WeakMap(), Pn = Symbol("_moveCb"), Vl = Symbol("_enterCb"), nu = (e) => (delete e.props.mode, e), au = /* @__PURE__ */ nu({
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
        const g = m[Pn] = (w) => {
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", g), m[Pn] = null, Ms(m, c));
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
  s[Pn] && s[Pn](), s[Vl] && s[Vl]();
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
  return ze(s) ? (o) => pn(s, o) : s;
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
  return s && (e = e.trim()), o && (e = Nn(e)), e;
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
    const d = (i || e.type === "number") && !/^0\d/.test(e.value) ? Nn(e.value) : e.value, u = s ?? "";
    d !== u && (document.activeElement === e && e.type !== "range" && (n && s === o || l && e.value.trim() === u) || (e.value = u));
  }
}, Xo = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[Wt] = Us(o), $s(e, "change", () => {
      const n = e._modelValue, l = yo(e), i = e.checked, c = e[Wt];
      if (ze(n)) {
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
        (c) => o ? Nn(yo(c)) : yo(c)
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
  const o = e.multiple, n = ze(s);
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
const Hn = {
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
const Kn = ((...e) => {
  const s = hu().createApp(...e), { mount: o } = s;
  return s.mount = (n) => {
    const l = wu(n);
    if (!l) return;
    const i = s._component;
    !Ge(i) && !i.render && !i.template && (i.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
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
    return (s, o) => (a(), M(ja(`h${e.level}`), {
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
        e.showInfo ? (a(), M(gr, {
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
    return (s, o) => (a(), M(ja(`h${e.level}`), {
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
    const s = e, o = U(() => `status-item--${s.variant}`);
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
    const s = e, o = U(() => `issue-card--${s.severity}`);
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
      e.actionLabel ? (a(), M(re, {
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
}), _n = /* @__PURE__ */ pe(vf, [["__scopeId", "data-v-75e9eeb8"]]), pf = /* @__PURE__ */ ve({
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
      C(_n, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          b(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), M(Sa, {
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
    const n = U(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (S) => S.status === "broken" && S.sync_state === "synced"
      )) || [];
    }), l = U(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (S) => S.status === "broken" && S.sync_state !== "synced"
      )) || [];
    }), i = U(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.synced) == null ? void 0 : _.filter((S) => {
        var P, L, I;
        const $ = (I = (L = (P = s.status) == null ? void 0 : P.workflows) == null ? void 0 : L.analyzed) == null ? void 0 : I.find((x) => x.name === S);
        return !$ || $.status !== "broken";
      })) || [];
    }), c = U(() => {
      var w, p, _, S, $;
      return (w = s.status) != null && w.workflows ? (((p = s.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((_ = s.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((S = s.status.workflows.deleted) == null ? void 0 : S.length) ?? 0) > 0 || ((($ = s.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), d = U(() => {
      var p, _, S;
      const w = (p = s.status) == null ? void 0 : p.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((S = w.nodes_removed) == null ? void 0 : S.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), u = U(() => {
      var w, p, _, S, $, P;
      return !c.value && !d.value && ((p = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : p.is_synced) && (((_ = s.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((P = ($ = (S = s.status) == null ? void 0 : S.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : P.length) ?? 0) === 0;
    }), m = U(() => {
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
      var _, S, $, P, L, I, x, q, W, F, T, E, R, Z, Y, j, se, ee, A, N, D, we;
      return a(), M(wt, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = (J) => w.$emit("close"))
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
                onClick: p[0] || (p[0] = (J) => w.$emit("close"))
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
                    onClick: p[1] || (p[1] = (J) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                n.value.length ? (a(), r("div", $f, [
                  t("div", Cf, [
                    p[11] || (p[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", xf, "BROKEN (COMMITTED) (" + f(n.value.length) + ")", 1)
                  ]),
                  t("div", Sf, [
                    (a(!0), r(G, null, ge(n.value, (J) => (a(), r("div", {
                      key: J.name,
                      class: "workflow-item"
                    }, [
                      t("span", If, f(J.name), 1),
                      t("span", Ef, f(J.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), r("div", Tf, [
                  t("div", Pf, [
                    p[12] || (p[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Rf, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  t("div", Mf, [
                    (a(!0), r(G, null, ge(l.value, (J) => (a(), r("div", {
                      key: J.name,
                      class: "workflow-item"
                    }, [
                      t("span", Df, f(J.name), 1),
                      t("span", Lf, f(J.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (S = (_ = e.status.workflows) == null ? void 0 : _.new) != null && S.length ? (a(), r("div", Of, [
                  t("div", Af, [
                    p[13] || (p[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", Nf, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", Uf, [
                    (a(!0), r(G, null, ge(e.status.workflows.new, (J) => (a(), r("div", {
                      key: J,
                      class: "workflow-item"
                    }, [
                      t("span", zf, f(J), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (P = ($ = e.status.workflows) == null ? void 0 : $.modified) != null && P.length ? (a(), r("div", Ff, [
                  t("div", Bf, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", Vf, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", Wf, [
                    (a(!0), r(G, null, ge(e.status.workflows.modified, (J) => (a(), r("div", {
                      key: J,
                      class: "workflow-item"
                    }, [
                      t("span", Gf, f(J), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = (L = e.status.workflows) == null ? void 0 : L.deleted) != null && I.length ? (a(), r("div", jf, [
                  t("div", Hf, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", Kf, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", qf, [
                    (a(!0), r(G, null, ge(e.status.workflows.deleted, (J) => (a(), r("div", {
                      key: J,
                      class: "workflow-item"
                    }, [
                      t("span", Yf, f(J), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                i.value.length ? (a(), r("div", Jf, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = (J) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", Xf, "SYNCED (" + f(i.value.length) + ")", 1),
                    t("span", Qf, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), r("div", Zf, [
                    (a(!0), r(G, null, ge(i.value, (J) => (a(), r("div", {
                      key: J,
                      class: "workflow-item"
                    }, [
                      t("span", em, f(J), 1)
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
                    (a(!0), r(G, null, ge(e.status.git_changes.nodes_added, (J) => (a(), r("div", {
                      key: v(J),
                      class: "change-item"
                    }, [
                      t("span", lm, f(v(J)), 1),
                      g(J) ? (a(), r("span", im, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (F = (W = e.status.git_changes) == null ? void 0 : W.nodes_removed) != null && F.length ? (a(), r("div", rm, [
                  t("div", cm, [
                    p[19] || (p[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", dm, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", um, [
                    (a(!0), r(G, null, ge(e.status.git_changes.nodes_removed, (J) => (a(), r("div", {
                      key: v(J),
                      class: "change-item"
                    }, [
                      t("span", fm, f(v(J)), 1),
                      g(J) ? (a(), r("span", mm, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (T = e.status.git_changes) != null && T.workflow_changes ? (a(), r("div", vm, [
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
              (R = e.status.comparison) != null && R.is_synced ? y("", !0) : (a(), r("div", wm, [
                t("div", _m, [
                  C(Ot, { level: "4" }, {
                    default: h(() => [...p[22] || (p[22] = [
                      b("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[3] || (p[3] = (J) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                p[26] || (p[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (Y = (Z = e.status.comparison) == null ? void 0 : Z.missing_nodes) != null && Y.length ? (a(), r("div", bm, [
                  C(ft, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", km, [
                    (a(!0), r(G, null, ge(e.status.comparison.missing_nodes.slice(0, 10), (J) => (a(), r("div", {
                      key: J,
                      class: "drift-list-item"
                    }, " - " + f(J), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), r("div", $m, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (se = (j = e.status.comparison) == null ? void 0 : j.extra_nodes) != null && se.length ? (a(), r("div", Cm, [
                  C(ft, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", xm, [
                    (a(!0), r(G, null, ge(e.status.comparison.extra_nodes.slice(0, 10), (J) => (a(), r("div", {
                      key: J,
                      class: "drift-list-item"
                    }, " - " + f(J), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), r("div", Sm, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (A = (ee = e.status.comparison) == null ? void 0 : ee.version_mismatches) != null && A.length ? (a(), r("div", Im, [
                  C(ft, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", Em, [
                    (a(!0), r(G, null, ge(e.status.comparison.version_mismatches.slice(0, 10), (J) => (a(), r("div", {
                      key: J.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      b(f(J.name) + ": ", 1),
                      t("span", Tm, f(J.actual), 1),
                      p[23] || (p[23] = b(" → ", -1)),
                      t("span", Pm, f(J.expected), 1)
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
                    onClick: p[4] || (p[4] = (J) => w.$emit("repair"))
                  }, {
                    default: h(() => [...p[24] || (p[24] = [
                      b(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  p[25] || (p[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (we = (D = e.status.comparison) == null ? void 0 : D.disabled_nodes) != null && we.length ? (a(), r("div", Lm, [
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
                  (a(!0), r(G, null, ge(e.status.comparison.disabled_nodes.slice(0, 10), (J) => (a(), r("div", {
                    key: J,
                    class: "drift-list-item"
                  }, " • " + f(J), 1))), 128)),
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
                onClick: p[5] || (p[5] = (J) => w.$emit("close"))
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
    const S = U(() => {
      const ee = n.status.workflows.analyzed || [], A = ee.filter(
        (N) => N.unresolved_models_count > 0 || N.ambiguous_models_count > 0
      );
      return A.length === 0 && n.status.missing_models_count > 0 ? ee.filter((N) => N.sync_state === "synced") : A;
    });
    function $() {
      const ee = S.value;
      ee.length !== 0 && (v.value = !0, m("repair-missing-models", ee.map((A) => A.name)));
    }
    function P() {
      v.value = !1;
    }
    s({ resetRepairingState: P, resetRepairingEnvironmentState: p, closeDetailModal: _ });
    const L = U(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), I = U(() => n.status.has_changes), x = U(() => {
      const ee = n.status.git_changes;
      return ee.nodes_added.length > 0 || ee.nodes_removed.length > 0 || ee.workflow_changes;
    }), q = U(() => n.status.has_changes || L.value), W = U(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), F = U(() => n.status.git_changes.has_other_changes), T = U(() => {
      var ee;
      return ((ee = n.status.workflows.analyzed) == null ? void 0 : ee.filter((A) => A.status === "broken")) || [];
    }), E = U(() => {
      var ee;
      return ((ee = n.status.workflows.analyzed) == null ? void 0 : ee.filter(
        (A) => A.has_path_sync_issues && !A.has_issues
      )) || [];
    }), R = U(() => T.value.length > 0), Z = U(() => R.value || E.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), Y = U(() => {
      const ee = [];
      return n.status.workflows.new.length > 0 && ee.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && ee.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && ee.push(`${n.status.workflows.deleted.length} deleted`), ee.length > 0 ? `${ee.join(", ")} workflow${ee.length === 1 && !ee[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), j = U(() => {
      var N, D;
      const ee = [], A = n.status.comparison;
      return (N = A.missing_nodes) != null && N.length && ee.push(`${A.missing_nodes.length} missing node${A.missing_nodes.length === 1 ? "" : "s"}`), (D = A.extra_nodes) != null && D.length && ee.push(`${A.extra_nodes.length} untracked node${A.extra_nodes.length === 1 ? "" : "s"}`), ee.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${ee.join(" and ")}.`;
    }), se = U(() => {
      var N, D;
      const ee = [], A = n.status.comparison;
      return (N = A.extra_nodes) != null && N.length && (A.extra_nodes.slice(0, 3).forEach((we) => {
        ee.push(`Untracked: ${we}`);
      }), A.extra_nodes.length > 3 && ee.push(`...and ${A.extra_nodes.length - 3} more untracked`)), (D = A.missing_nodes) != null && D.length && (A.missing_nodes.slice(0, 3).forEach((we) => {
        ee.push(`Missing: ${we}`);
      }), A.missing_nodes.length > 3 && ee.push(`...and ${A.missing_nodes.length - 3} more missing`)), ee;
    });
    return (ee, A) => (a(), r(G, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, { title: "STATUS" })
        ]),
        content: h(() => [
          n.setupState === "no_workspace" ? (a(), M(qt, {
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
                onClick: A[0] || (A[0] = (N) => ee.$emit("start-setup"))
              }, {
                default: h(() => [...A[13] || (A[13] = [
                  b(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (a(), M(qt, {
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
                onClick: A[1] || (A[1] = (N) => ee.$emit("view-environments"))
              }, {
                default: h(() => [...A[14] || (A[14] = [
                  b(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (a(), M(qt, {
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
                onClick: A[2] || (A[2] = (N) => ee.$emit("create-environment"))
              }, {
                default: h(() => [...A[15] || (A[15] = [
                  b(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: A[4] || (A[4] = (N) => i.value = !0),
            onMouseleave: A[5] || (A[5] = (N) => i.value = !1)
          }, [
            t("div", Gm, [
              C(Ot, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...A[16] || (A[16] = [
                  b(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              C(Fd, { name: "fade" }, {
                default: h(() => [
                  i.value ? (a(), M(re, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: h(() => [...A[17] || (A[17] = [
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
                e.status.workflows.new.length ? (a(), M(cs, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (a(), M(cs, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (a(), M(cs, {
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
                  separator: L.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (a(), M(cs, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), M(cs, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (a(), M(cs, {
                  key: 2,
                  icon: "●",
                  count: W.value,
                  label: W.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                F.value ? (a(), M(cs, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                I.value && !x.value && !F.value ? (a(), M(cs, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                I.value ? y("", !0) : (a(), M(cs, {
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
                  A[19] || (A[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", jm, [
                    t("span", Hm, f(Y.value), 1),
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: A[3] || (A[3] = (N) => ee.$emit("commit-changes"))
                    }, {
                      default: h(() => [...A[18] || (A[18] = [
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
          e.status.is_detached_head ? (a(), M(qt, {
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
                onClick: A[6] || (A[6] = (N) => ee.$emit("create-branch"))
              }, {
                default: h(() => [...A[20] || (A[20] = [
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
              default: h(() => [...A[21] || (A[21] = [
                b(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            Z.value ? (a(), r(G, { key: 0 }, [
              T.value.length > 0 ? (a(), M(qt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${T.value.length} workflow${T.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: T.value.map((N) => `${N.name} — ${N.issue_summary}`)
              }, {
                actions: h(() => [
                  C(re, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[7] || (A[7] = (N) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...A[22] || (A[22] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              E.value.length > 0 ? (a(), M(qt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: E.value.map((N) => `${N.name} — ${N.models_needing_path_sync_count} model path${N.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  C(re, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[8] || (A[8] = (N) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...A[23] || (A[23] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !R.value ? (a(), M(qt, {
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
                    onClick: A[9] || (A[9] = (N) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...A[24] || (A[24] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (a(), M(qt, {
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
                    default: h(() => [...A[25] || (A[25] = [
                      b(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  C(re, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[10] || (A[10] = (N) => ee.$emit("view-nodes"))
                  }, {
                    default: h(() => [...A[26] || (A[26] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (a(), M(qt, {
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
                    onClick: A[11] || (A[11] = (N) => ee.$emit("view-nodes"))
                  }, {
                    default: h(() => [...A[27] || (A[27] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : q.value ? (a(), r("span", qm, "No issues")) : (a(), M(os, {
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
        onClose: A[12] || (A[12] = (N) => l.value = !1),
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
}), Rn = /* @__PURE__ */ pe(Qm, [["__scopeId", "data-v-0380d08f"]]), Zm = { class: "branch-create-form" }, ev = { class: "form-actions" }, tv = /* @__PURE__ */ ve({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, n = k(""), l = U(() => {
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
      C(Rn, {
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
    return (c, d) => (a(), M(Tt, null, {
      header: h(() => [
        C(Pt, { title: "BRANCHES" }, {
          actions: h(() => [
            n.value ? y("", !0) : (a(), M(re, {
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
        n.value ? (a(), M(sv, {
          key: 0,
          onCreate: l,
          onCancel: i
        })) : y("", !0),
        e.branches.length === 0 ? (a(), M(os, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), r("div", cv, [
          (a(!0), r(G, null, ge(e.branches, (u) => (a(), M(rv, {
            key: u.name,
            "branch-name": u.name,
            "is-current": u.is_current
          }, {
            actions: h(() => [
              u.is_current ? y("", !0) : (a(), M(re, {
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
              u.is_current ? y("", !0) : (a(), M(re, {
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
    const s = e, o = U(() => s.hash.slice(0, s.length));
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
    return (s, o) => (a(), M(Tt, null, {
      header: h(() => [
        C(Pt, { title: "HISTORY" })
      ]),
      content: h(() => [
        e.commits.length === 0 ? (a(), M(os, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), M(vv, { key: 1 }, {
          default: h(() => [
            (a(!0), r(G, null, ge(e.commits, (n) => (a(), M(_v, {
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
  async function o(X, Ce) {
    var ct;
    if (!((ct = window.app) != null && ct.api))
      throw new Error("ComfyUI API not available");
    const Ne = await window.app.api.fetchApi(X, Ce);
    if (!Ne.ok) {
      const Ue = await Ne.json().catch(() => ({}));
      throw new Error(Ue.error || Ue.message || `Request failed: ${Ne.status}`);
    }
    return Ne.json();
  }
  async function n(X = !1) {
    return o(X ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(X, Ce = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: X, allow_issues: Ce })
    });
  }
  async function i(X = 10, Ce = 0) {
    return o(`/v2/comfygit/log?limit=${X}&offset=${Ce}`);
  }
  async function c(X) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: X })
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
  async function m(X) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: X, force: !0 })
    });
  }
  async function v() {
    return o("/v2/comfygit/branches");
  }
  async function g(X) {
    return o(`/v2/comfygit/commit/${X}`);
  }
  async function w(X, Ce = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: X, force: Ce })
    });
  }
  async function p(X, Ce = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: X, start_point: Ce })
    });
  }
  async function _(X, Ce = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: X, force: Ce })
    });
  }
  async function S(X, Ce = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(X)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: Ce })
    });
  }
  async function $() {
    try {
      return (await o("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const X = await n();
        return [{
          name: X.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + X.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: X.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: X.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function P(X, Ce) {
    const Ne = { target_env: X };
    return Ce && (Ne.workspace_path = Ce), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ne)
    });
  }
  async function L() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function I(X) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function x() {
    return o("/v2/workspace/environments/create_status");
  }
  async function q(X = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${X}`);
  }
  async function W(X) {
    return o(`/v2/workspace/environments/${X}`, {
      method: "DELETE"
    });
  }
  async function F(X = !1) {
    try {
      return o(X ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const Ce = await n(X), Ne = [];
      return Ce.workflows.new.forEach((ct) => {
        Ne.push({ name: ct, status: "new", missing_nodes: 0, missing_models: 0, path: ct });
      }), Ce.workflows.modified.forEach((ct) => {
        Ne.push({ name: ct, status: "modified", missing_nodes: 0, missing_models: 0, path: ct });
      }), Ce.workflows.synced.forEach((ct) => {
        Ne.push({ name: ct, status: "synced", missing_nodes: 0, missing_models: 0, path: ct });
      }), Ne;
    }
  }
  async function T(X) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(X)}/details`);
  }
  async function E(X) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(X)}/resolve`, {
      method: "POST"
    });
  }
  async function R(X, Ce, Ne) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(X)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: Ce, install_models: Ne })
    });
  }
  async function Z(X, Ce, Ne) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(X)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: Ce, importance: Ne })
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
  async function se(X) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(X)}`);
  }
  async function ee(X) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: X })
    });
  }
  async function A(X, Ce) {
    return o(`/v2/workspace/models/${X}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Ce })
    });
  }
  async function N(X, Ce) {
    return o(`/v2/workspace/models/${X}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Ce })
    });
  }
  async function D(X) {
    return o(`/v2/workspace/models/${X}`, {
      method: "DELETE"
    });
  }
  async function we(X) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function J() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function de() {
    return o("/v2/workspace/models/directory");
  }
  async function _e(X) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: X })
    });
  }
  async function Oe(X) {
    try {
      const Ce = X ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(X)}` : "/v2/comfygit/config";
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
  async function We(X, Ce) {
    const Ne = Ce ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(Ce)}` : "/v2/comfygit/config";
    return o(Ne, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function he(X, Ce) {
    try {
      const Ne = new URLSearchParams();
      return X && Ne.append("level", X), Ce && Ne.append("lines", Ce.toString()), o(`/v2/comfygit/debug/logs?${Ne}`);
    } catch {
      return [];
    }
  }
  async function Te(X, Ce) {
    try {
      const Ne = new URLSearchParams();
      return X && Ne.append("level", X), Ce && Ne.append("lines", Ce.toString()), o(`/v2/workspace/debug/logs?${Ne}`);
    } catch {
      return [];
    }
  }
  async function Be() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function $e() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function ie(X, Ce) {
    try {
      const Ne = new URLSearchParams();
      return X && Ne.append("level", X), Ce && Ne.append("lines", Ce.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Ne}`);
    } catch {
      return [];
    }
  }
  async function je() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function Re(X) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: X })
    });
  }
  async function O() {
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
  async function B(X) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(X)}/track-dev`, {
      method: "POST"
    });
  }
  async function ne(X) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(X)}/install`, {
      method: "POST"
    });
  }
  async function le(X) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(X)}/update`, {
      method: "POST"
    });
  }
  async function fe(X) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(X)}`, {
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
  async function xe(X, Ce) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: X, url: Ce })
    });
  }
  async function Se(X) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(X)}`, {
      method: "DELETE"
    });
  }
  async function ae(X, Ce, Ne) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(X)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: Ce, push_url: Ne })
    });
  }
  async function ue(X, Ce) {
    const Ne = {};
    return Ce && (Ne["X-Git-Auth-Token"] = Ce), o(`/v2/comfygit/remotes/${encodeURIComponent(X)}/fetch`, {
      method: "POST",
      headers: Ne
    });
  }
  async function Le(X) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(X)}/status`);
    } catch {
      return null;
    }
  }
  async function Ie(X = "skip", Ce = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: X,
        remove_extra_nodes: Ce
      })
    });
  }
  async function te(X, Ce) {
    const Ne = Ce ? `/v2/comfygit/remotes/${encodeURIComponent(X)}/pull-preview?branch=${encodeURIComponent(Ce)}` : `/v2/comfygit/remotes/${encodeURIComponent(X)}/pull-preview`;
    return o(Ne);
  }
  async function K(X, Ce = {}) {
    const Ne = { "Content-Type": "application/json" };
    return Ce.authToken && (Ne["X-Git-Auth-Token"] = Ce.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(X)}/pull`, {
      method: "POST",
      headers: Ne,
      body: JSON.stringify({
        model_strategy: Ce.modelStrategy || "skip",
        force: Ce.force || !1,
        resolutions: Ce.resolutions
      })
    });
  }
  async function Me(X, Ce) {
    const Ne = Ce ? `/v2/comfygit/remotes/${encodeURIComponent(X)}/push-preview?branch=${encodeURIComponent(Ce)}` : `/v2/comfygit/remotes/${encodeURIComponent(X)}/push-preview`;
    return o(Ne);
  }
  async function be(X, Ce = {}) {
    const Ne = { "Content-Type": "application/json" };
    return Ce.authToken && (Ne["X-Git-Auth-Token"] = Ce.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(X)}/push`, {
      method: "POST",
      headers: Ne,
      body: JSON.stringify({ force: Ce.force || !1 })
    });
  }
  async function ye(X, Ce) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(X)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: Ce })
    });
  }
  async function V(X) {
    const Ce = {
      success: 0,
      failed: []
    };
    for (const Ne of X)
      try {
        await E(Ne), Ce.success++;
      } catch (ct) {
        Ce.failed.push({
          name: Ne,
          error: ct instanceof Error ? ct.message : "Unknown error"
        });
      }
    return Ce;
  }
  async function z(X) {
    var ct;
    const Ce = new FormData();
    if (Ce.append("file", X), !((ct = window.app) != null && ct.api))
      throw new Error("ComfyUI API not available");
    const Ne = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: Ce
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ne.ok) {
      const Ue = await Ne.json().catch(() => ({}));
      throw new Error(Ue.error || `Preview failed: ${Ne.status}`);
    }
    return Ne.json();
  }
  async function ce(X) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(X)}`
    );
  }
  async function Fe(X, Ce, Ne, ct) {
    var ol;
    const Ue = new FormData();
    if (Ue.append("file", X), Ue.append("name", Ce), Ue.append("model_strategy", Ne), Ue.append("torch_backend", ct), !((ol = window.app) != null && ol.api))
      throw new Error("ComfyUI API not available");
    const xo = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Ue
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
  async function vt(X) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: X })
    });
  }
  async function lt(X, Ce, Ne, ct) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: X,
        name: Ce,
        model_strategy: Ne,
        torch_backend: ct
      })
    });
  }
  async function ut() {
    return o("/v2/setup/status");
  }
  async function Rt(X) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function Ut() {
    return o("/v2/setup/initialize_status");
  }
  async function Ht(X) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function Bs() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function Ps() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function so(X, Ce) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: X, save_key: Ce })
    });
  }
  async function ko() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function $o(X) {
    const Ce = X ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(X)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(Ce);
  }
  async function Co(X) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function ke() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function Q(X) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(X)}`, {
      method: "DELETE"
    });
  }
  async function Ke(X) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(X)}/stop`, {
      method: "POST"
    });
  }
  async function ht(X) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(X)}/start`, {
      method: "POST"
    });
  }
  async function Kt(X) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(X)}/status`);
  }
  async function gs(X) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: X })
    });
  }
  async function hs(X = !1) {
    return o(X ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function as() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Ae() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function ls(X) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function oe(X) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(X)}`, {
      method: "DELETE"
    });
  }
  async function H(X) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function De() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function He(X) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(X)}/info`);
  }
  async function ot(X) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(X)}/instances`);
  }
  async function mt(X, Ce) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(X)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ce)
    });
  }
  async function Mt(X, Ce) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(X)}/instances/${encodeURIComponent(Ce)}/start`, {
      method: "POST"
    });
  }
  async function is(X, Ce) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(X)}/instances/${encodeURIComponent(Ce)}/stop`, {
      method: "POST"
    });
  }
  async function Vs(X, Ce) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(X)}/instances/${encodeURIComponent(Ce)}`, {
      method: "DELETE"
    });
  }
  async function Ws(X) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: X })
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
    getSwitchProgress: L,
    createEnvironment: I,
    getCreateProgress: x,
    getComfyUIReleases: q,
    deleteEnvironment: W,
    // Workflow Management
    getWorkflows: F,
    getWorkflowDetails: T,
    resolveWorkflow: E,
    installWorkflowDeps: R,
    setModelImportance: Z,
    // Model Management
    getEnvironmentModels: Y,
    getWorkspaceModels: j,
    getModelDetails: se,
    openFileLocation: ee,
    addModelSource: A,
    removeModelSource: N,
    deleteModel: D,
    downloadModel: we,
    scanWorkspaceModels: J,
    getModelsDirectory: de,
    setModelsDirectory: _e,
    // Settings
    getConfig: Oe,
    updateConfig: We,
    // Debug/Logs
    getEnvironmentLogs: he,
    getWorkspaceLogs: Te,
    getEnvironmentLogPath: Be,
    getWorkspaceLogPath: $e,
    getOrchestratorLogs: ie,
    getOrchestratorLogPath: je,
    openFile: Re,
    // Node Management
    getNodes: O,
    trackNodeAsDev: B,
    installNode: ne,
    updateNode: le,
    uninstallNode: fe,
    // Git Remotes
    getRemotes: me,
    addRemote: xe,
    removeRemote: Se,
    updateRemoteUrl: ae,
    fetchRemote: ue,
    getRemoteSyncStatus: Le,
    // Push/Pull
    getPullPreview: te,
    pullFromRemote: K,
    getPushPreview: Me,
    pushToRemote: be,
    validateMerge: ye,
    // Environment Sync
    syncEnvironmentManually: Ie,
    // Workflow Repair
    repairWorkflowModels: V,
    // Import Operations
    previewTarballImport: z,
    previewGitImport: vt,
    validateEnvironmentName: ce,
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
    getRunPodPods: ke,
    terminateRunPodPod: Q,
    stopRunPodPod: Ke,
    startRunPodPod: ht,
    getDeploymentStatus: Kt,
    exportDeployPackage: gs,
    getStoredRunPodKey: hs,
    clearRunPodKey: as,
    // Custom Worker Operations
    getCustomWorkers: Ae,
    addCustomWorker: ls,
    removeCustomWorker: oe,
    testWorkerConnection: H,
    scanForWorkers: De,
    getWorkerSystemInfo: He,
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
    }), (c, d) => (a(), M(wt, { to: "body" }, [
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
}), Pe = /* @__PURE__ */ pe(Lv, [["__scopeId", "data-v-f3452606"]]), Ov = {
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
    return (s, o) => (a(), M(wt, { to: "body" }, [
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
    function S(T) {
      switch (T) {
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
    function $(T) {
      switch (T) {
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
    function P(T) {
      if (!T.loaded_by || T.loaded_by.length === 0) return [];
      const E = T.hash || T.filename;
      return p.value.has(E) ? T.loaded_by : T.loaded_by.slice(0, 3);
    }
    function L(T) {
      return p.value.has(T);
    }
    function I(T) {
      p.value.has(T) ? p.value.delete(T) : p.value.add(T), p.value = new Set(p.value);
    }
    async function x() {
      u.value = !0, m.value = null;
      try {
        d.value = await l(o.workflowName);
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to load workflow details";
      } finally {
        u.value = !1;
      }
    }
    function q(T, E) {
      g.value[T] = E, v.value = !0;
    }
    async function W(T) {
      try {
        await c(T);
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to open file location";
      }
    }
    async function F() {
      if (!v.value) {
        n("close");
        return;
      }
      u.value = !0, m.value = null;
      try {
        for (const [T, E] of Object.entries(g.value))
          await i(o.workflowName, T, E);
        n("refresh"), n("close");
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to save changes";
      } finally {
        u.value = !1;
      }
    }
    return et(x), (T, E) => (a(), r(G, null, [
      C(pt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: u.value,
        error: m.value || void 0,
        onClose: E[4] || (E[4] = (R) => n("close"))
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
              (a(!0), r(G, null, ge(d.value.models, (R) => {
                var Z;
                return a(), r("div", {
                  key: R.hash || R.filename,
                  class: "model-card"
                }, [
                  t("div", Jv, [
                    E[6] || (E[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", Xv, f(R.filename), 1)
                  ]),
                  t("div", Qv, [
                    t("div", Zv, [
                      E[7] || (E[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Ee(["value", S(R.status)])
                      }, f($(R.status)), 3)
                    ]),
                    t("div", ep, [
                      t("span", tp, [
                        E[8] || (E[8] = b(" Importance: ", -1)),
                        C(gr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: E[0] || (E[0] = (Y) => w.value = !0)
                        })
                      ]),
                      C(Vv, {
                        "model-value": g.value[R.filename] || R.importance,
                        options: _,
                        "onUpdate:modelValue": (Y) => q(R.filename, Y)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    R.loaded_by && R.loaded_by.length > 0 ? (a(), r("div", sp, [
                      E[9] || (E[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", op, [
                        (a(!0), r(G, null, ge(P(R), (Y, j) => (a(), r("div", {
                          key: `${Y.node_id}-${j}`,
                          class: "node-reference"
                        }, f(Y.node_type) + " (Node #" + f(Y.node_id) + ") ", 1))), 128)),
                        R.loaded_by.length > 3 ? (a(), r("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (Y) => I(R.hash || R.filename)
                        }, f(L(R.hash || R.filename) ? "▼ Show less" : `▶ View all (${R.loaded_by.length})`), 9, np)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    R.size_mb ? (a(), r("div", ap, [
                      E[10] || (E[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", lp, f(R.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    R.has_category_mismatch ? (a(), r("div", ip, [
                      E[13] || (E[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", rp, [
                        E[11] || (E[11] = b(" In ", -1)),
                        t("code", null, f(R.actual_category) + "/", 1),
                        E[12] || (E[12] = b(" but loader needs ", -1)),
                        t("code", null, f((Z = R.expected_categories) == null ? void 0 : Z[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  R.status !== "available" ? (a(), r("div", cp, [
                    R.status === "downloadable" ? (a(), M(Pe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: E[1] || (E[1] = (Y) => n("resolve"))
                    }, {
                      default: h(() => [...E[14] || (E[14] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    })) : R.status === "category_mismatch" && R.file_path ? (a(), M(Pe, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (Y) => W(R.file_path)
                    }, {
                      default: h(() => [...E[15] || (E[15] = [
                        b(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : R.status !== "path_mismatch" ? (a(), M(Pe, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: E[2] || (E[2] = (Y) => n("resolve"))
                    }, {
                      default: h(() => [...E[16] || (E[16] = [
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
              (a(!0), r(G, null, ge(d.value.nodes, (R) => (a(), r("div", {
                key: R.name,
                class: "node-item"
              }, [
                t("span", {
                  class: Ee(["node-status", R.status === "installed" ? "installed" : "missing"])
                }, f(R.status === "installed" ? "✓" : "✕"), 3),
                t("span", fp, f(R.name), 1),
                R.version ? (a(), r("span", mp, "v" + f(R.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          C(Pe, {
            variant: "secondary",
            onClick: E[3] || (E[3] = (R) => n("close"))
          }, {
            default: h(() => [...E[17] || (E[17] = [
              b(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (a(), M(Pe, {
            key: 0,
            variant: "primary",
            onClick: F
          }, {
            default: h(() => [...E[18] || (E[18] = [
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
        onClose: E[5] || (E[5] = (R) => w.value = !1)
      }, {
        content: h(() => [...E[19] || (E[19] = [
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
function ia(e) {
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
      const I = {
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
      Je.items.push(I);
    }
    Je.status === "idle" && ro();
  }
  async function s($) {
    const P = ia($);
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
        const L = Je.items.findIndex((I) => I.id === $);
        L >= 0 && Je.items.splice(L, 1);
      }
    }
  }
  function o($) {
    const P = ia($);
    !P || P.status !== "failed" || (P.status = "queued", P.error = void 0, P.progress = 0, P.downloaded = 0, Je.status === "idle" && ro());
  }
  function n($) {
    const P = ia($);
    !P || P.status !== "paused" || (P.status = "queued", Je.status === "idle" && ro());
  }
  function l() {
    const $ = Je.items.filter((P) => P.status === "paused");
    for (const P of $)
      P.status = "queued";
    Je.status === "idle" && ro();
  }
  function i($) {
    const P = Je.items.findIndex((L) => L.id === $);
    P >= 0 && ["completed", "failed", "paused"].includes(Je.items[P].status) && Je.items.splice(P, 1);
  }
  function c() {
    Je.items = Je.items.filter(($) => $.status !== "completed");
  }
  function d() {
    Je.items = Je.items.filter(($) => $.status !== "failed");
  }
  const u = U(
    () => Je.items.find(($) => $.status === "downloading")
  ), m = U(
    () => Je.items.filter(($) => $.status === "queued")
  ), v = U(
    () => Je.items.filter(($) => $.status === "completed")
  ), g = U(
    () => Je.items.filter(($) => $.status === "failed")
  ), w = U(
    () => Je.items.filter(($) => $.status === "paused")
  ), p = U(() => Je.items.length > 0), _ = U(
    () => Je.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), S = U(
    () => Je.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: kn(Je),
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
  async function c(L, I) {
    var q;
    if (!((q = window.app) != null && q.api))
      throw new Error("ComfyUI API not available");
    const x = await window.app.api.fetchApi(L, I);
    if (!x.ok) {
      const W = await x.json().catch(() => ({})), F = W.error || W.message || `Request failed: ${x.status}`;
      throw new Error(F);
    }
    return x.json();
  }
  async function d(L) {
    l.value = !0, i.value = null;
    try {
      let I;
      return io() || (I = await c(
        `/v2/comfygit/workflow/${L}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), e.value = I, I;
    } catch (I) {
      const x = I instanceof Error ? I.message : "Unknown error occurred";
      throw i.value = x, I;
    } finally {
      l.value = !1;
    }
  }
  async function u(L, I, x, q) {
    l.value = !0, i.value = null;
    try {
      let W;
      if (!io()) {
        const F = Object.fromEntries(I), T = Object.fromEntries(x), E = q ? Array.from(q) : [];
        W = await c(
          `/v2/comfygit/workflow/${L}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: F,
              model_choices: T,
              skipped_packages: E
            })
          }
        );
      }
      return s.value = W, W;
    } catch (W) {
      const F = W instanceof Error ? W.message : "Unknown error occurred";
      throw i.value = F, W;
    } finally {
      l.value = !1;
    }
  }
  async function m(L, I = 10) {
    l.value = !0, i.value = null;
    try {
      let x;
      return io() || (x = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: L, limit: I })
        }
      )), o.value = x.results, x.results;
    } catch (x) {
      const q = x instanceof Error ? x.message : "Unknown error occurred";
      throw i.value = q, x;
    } finally {
      l.value = !1;
    }
  }
  async function v(L, I = 10) {
    l.value = !0, i.value = null;
    try {
      let x;
      return io() || (x = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: L, limit: I })
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
  async function p(L) {
    g.phase = "installing", g.nodesInstalled = [], g.installError = void 0, g.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return io(), await _(L);
    } catch (I) {
      const x = I instanceof Error ? I.message : "Failed to install nodes";
      throw g.installError = x, I;
    }
  }
  async function _(L) {
    var x;
    const I = await c(
      `/v2/comfygit/workflow/${L}/install`,
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
      const q = new Map(((x = I.failed) == null ? void 0 : x.map((W) => [W.node_id, W.error])) || []);
      for (let W = 0; W < g.nodesToInstall.length; W++) {
        const F = g.nodesToInstall[W], T = q.get(F);
        g.nodeInstallProgress.completedNodes.push({
          node_id: F,
          success: !T,
          error: T
        });
      }
    }
    return g.nodesInstalled = I.nodes_installed, g.needsRestart = I.nodes_installed.length > 0, I.failed && I.failed.length > 0 && (g.installError = `${I.failed.length} package(s) failed to install`), I;
  }
  async function S(L, I, x) {
    w(), g.phase = "resolving", i.value = null;
    const q = Object.fromEntries(I), W = Object.fromEntries(x);
    try {
      const F = await fetch(`/v2/comfygit/workflow/${L}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: q,
          model_choices: W
        })
      });
      if (!F.ok)
        throw new Error(`Request failed: ${F.status}`);
      if (!F.body)
        throw new Error("No response body");
      const T = F.body.getReader(), E = new TextDecoder();
      let R = "";
      for (; ; ) {
        const { done: Z, value: Y } = await T.read();
        if (Z) break;
        R += E.decode(Y, { stream: !0 });
        const j = R.split(`

`);
        R = j.pop() || "";
        for (const se of j) {
          if (!se.trim()) continue;
          const ee = se.split(`
`);
          let A = "", N = "";
          for (const D of ee)
            D.startsWith("event: ") ? A = D.slice(7) : D.startsWith("data: ") && (N = D.slice(6));
          if (N)
            try {
              const D = JSON.parse(N);
              $(A, D);
            } catch (D) {
              console.warn("Failed to parse SSE event:", D);
            }
        }
      }
    } catch (F) {
      const T = F instanceof Error ? F.message : "Unknown error occurred";
      throw i.value = T, g.error = T, g.phase = "error", F;
    }
  }
  function $(L, I) {
    switch (L) {
      case "batch_start":
        g.phase = "downloading", g.totalFiles = I.total;
        break;
      case "file_start":
        g.currentFile = I.filename, g.currentFileIndex = I.index, g.bytesDownloaded = 0, g.bytesTotal = void 0;
        break;
      case "file_progress":
        g.bytesDownloaded = I.downloaded, g.bytesTotal = I.total;
        break;
      case "file_complete":
        g.completedFiles.push({
          filename: I.filename,
          success: I.success,
          error: I.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        g.nodesToInstall = I.nodes_to_install || [], I.download_results && (g.completedFiles = I.download_results), g.phase = "complete";
        break;
      case "error":
        g.error = I.message, g.phase = "error", i.value = I.message;
        break;
    }
  }
  function P(L, I) {
    const { addToQueue: x } = _o(), q = I.filter((W) => W.url && W.target_path).map((W) => ({
      workflow: L,
      filename: W.filename,
      url: W.url,
      targetPath: W.target_path,
      size: W.size || 0,
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
    const s = e, o = U(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), n = U(() => `confidence-${o.value}`), l = U(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (i, c) => (a(), r("span", {
      class: Ee(["confidence-badge", n.value, e.size])
    }, f(l.value), 3));
  }
}), Mn = /* @__PURE__ */ pe(Ep, [["__scopeId", "data-v-17ec4b80"]]), Tp = { class: "node-info" }, Pp = { class: "node-info-text" }, Rp = { class: "item-body" }, Mp = {
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
    const i = U(() => !!o.choice);
    U(() => {
      var u;
      return (u = o.choice) == null ? void 0 : u.action;
    }), U(() => {
      var u;
      return (u = o.choice) == null ? void 0 : u.package_id;
    });
    const c = U(() => {
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
          C(Pe, {
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
                  C(Mn, {
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
            C(Pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                b(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            C(Pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Pe, {
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
                    C(Mn, {
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
            C(Pe, {
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
            C(Pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[16] || (m[16] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Pe, {
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
    const $ = U(() => o.nodes[i.value]), P = U(() => o.nodes.filter((he) => o.nodeChoices.has(he.node_type)).length), L = U(() => $.value ? w.value.get($.value.node_type) || [] : []), I = U(() => $.value ? p.value.has($.value.node_type) : !1);
    Ct($, async (he) => {
      var Te;
      he && ((Te = he.options) != null && Te.length || w.value.has(he.node_type) || p.value.has(he.node_type) || o.nodeChoices.has(he.node_type) || await x(he.node_type));
    }, { immediate: !0 });
    async function x(he) {
      p.value.add(he);
      try {
        const Te = await l(he, 5);
        w.value.set(he, Te);
      } catch {
        w.value.set(he, []);
      } finally {
        p.value.delete(he);
      }
    }
    const q = U(() => o.autoResolvedPackages.filter((he) => !o.skippedPackages.has(he.package_id)).length);
    function W(he) {
      return o.skippedPackages.has(he);
    }
    function F(he) {
      n("package-skip", he);
    }
    const T = U(() => {
      var Te;
      if (!$.value) return "not-found";
      const he = o.nodeChoices.get($.value.node_type);
      if (he)
        switch (he.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (Te = $.value.options) != null && Te.length ? "ambiguous" : "not-found";
    }), E = U(() => {
      var Te;
      if (!$.value) return;
      const he = o.nodeChoices.get($.value.node_type);
      if (he)
        switch (he.action) {
          case "install":
            return he.package_id ? `→ ${he.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (Te = $.value.options) != null && Te.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function R(he) {
      he >= 0 && he < o.nodes.length && (i.value = he);
    }
    function Z() {
      $.value && n("mark-optional", $.value.node_type);
    }
    function Y() {
      $.value && n("skip", $.value.node_type);
    }
    function j(he) {
      $.value && n("option-selected", $.value.node_type, he);
    }
    function se() {
      $.value && n("clear-choice", $.value.node_type);
    }
    function ee() {
      $.value && (u.value = $.value.node_type, v.value = L.value, c.value = !0, de(u.value));
    }
    function A() {
      m.value = "", d.value = !0;
    }
    function N() {
      c.value = !1, u.value = "", v.value = [];
    }
    function D() {
      d.value = !1, m.value = "";
    }
    let we = null;
    function J() {
      we && clearTimeout(we), we = setTimeout(() => {
        de(u.value);
      }, 300);
    }
    async function de(he) {
      if (!he.trim()) {
        v.value = [];
        return;
      }
      g.value = !0;
      try {
        v.value = await l(he, 10);
      } catch {
        v.value = [];
      } finally {
        g.value = !1;
      }
    }
    function _e(he) {
      $.value && (n("manual-entry", $.value.node_type, he.package_id), N());
    }
    function Oe(he) {
      $.value && n("manual-entry", $.value.node_type, he.package_id);
    }
    function We() {
      !$.value || !m.value.trim() || (n("manual-entry", $.value.node_type, m.value.trim()), D());
    }
    return (he, Te) => {
      var Be, $e;
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
                W(ie.package_id) ? (a(), r("span", Ig, " SKIPPED ")) : (a(), r("span", Sg, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (je) => F(ie.package_id)
                }, f(W(ie.package_id) ? "Include" : "Skip"), 9, Eg)
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
          $.value ? (a(), M(_r, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": i.value,
            "total-items": e.nodes.length,
            onPrev: Te[0] || (Te[0] = (ie) => R(i.value - 1)),
            onNext: Te[1] || (Te[1] = (ie) => R(i.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          $.value ? (a(), r("div", Mg, [
            C(ng, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((Be = $.value.options) != null && Be.length),
              options: $.value.options,
              choice: ($e = e.nodeChoices) == null ? void 0 : $e.get($.value.node_type),
              status: T.value,
              "status-label": E.value,
              "search-results": L.value,
              "is-searching": I.value,
              onMarkOptional: Z,
              onSkip: Y,
              onManualEntry: A,
              onSearch: ee,
              onOptionSelected: j,
              onClearChoice: se,
              onSearchResultSelected: Oe
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
                  onInput: J
                }, null, 8, ["modelValue"]),
                t("div", Og, [
                  v.value.length > 0 ? (a(), r("div", Ag, [
                    (a(!0), r(G, null, ge(v.value, (ie) => (a(), r("div", {
                      key: ie.package_id,
                      class: "node-search-result-item",
                      onClick: (je) => _e(ie)
                    }, [
                      t("div", Ug, [
                        t("code", zg, f(ie.package_id), 1),
                        ie.match_confidence ? (a(), M(Mn, {
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
        (a(), M(wt, { to: "body" }, [
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
                  C(Pe, {
                    variant: "secondary",
                    onClick: D
                  }, {
                    default: h(() => [...Te[11] || (Te[11] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Pe, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: We
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
    const o = e, n = s, l = U(() => !!o.choice);
    U(() => {
      var u;
      return (u = o.choice) == null ? void 0 : u.action;
    }), U(() => {
      var u, m;
      return ((m = (u = o.choice) == null ? void 0 : u.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const i = U(() => {
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
          C(Pe, {
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
                  C(Mn, {
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
            C(Pe, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Pe, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Pe, {
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
            C(Pe, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: h(() => [...m[13] || (m[13] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[14] || (m[14] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Pe, {
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
    const l = e, i = s, c = k(0), d = k(!1), u = k(!1), m = k(""), v = k(""), g = k(""), w = k([]), p = k(!1), _ = U(() => l.models[c.value]), S = U(() => l.models.some((N) => N.is_download_intent)), $ = U(() => l.models.filter(
      (N) => l.modelChoices.has(N.filename) || N.is_download_intent
    ).length), P = U(() => {
      var D;
      if (!_.value) return "";
      const N = n((D = _.value.reference) == null ? void 0 : D.node_type);
      return N ? `${N}/${_.value.filename}` : "";
    }), L = U(() => {
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
    }), I = U(() => {
      var D, we;
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
      return _.value.is_download_intent ? "Pending Download" : (we = _.value.options) != null && we.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function x(N) {
      N >= 0 && N < l.models.length && (c.value = N);
    }
    function q() {
      _.value && i("mark-optional", _.value.filename);
    }
    function W() {
      _.value && i("skip", _.value.filename);
    }
    function F(N) {
      _.value && i("option-selected", _.value.filename, N);
    }
    function T() {
      _.value && i("clear-choice", _.value.filename);
    }
    function E() {
      _.value && (m.value = _.value.filename, d.value = !0);
    }
    function R() {
      _.value && (v.value = _.value.download_source || "", g.value = _.value.target_path || P.value, u.value = !0);
    }
    function Z() {
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
      _.value && Z();
    }
    function ee() {
      !_.value || !v.value.trim() || (i("download-url", _.value.filename, v.value.trim(), g.value.trim() || void 0), Y());
    }
    function A(N) {
      if (!N) return "Unknown";
      const D = N / (1024 * 1024 * 1024);
      return D >= 1 ? `${D.toFixed(2)} GB` : `${(N / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (N, D) => {
      var we, J, de;
      return a(), r("div", ph, [
        t("div", gh, [
          t("div", hh, [
            t("h3", yh, f(S.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", wh, f(S.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", _h, f($.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), M(_r, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: D[0] || (D[0] = (_e) => x(c.value - 1)),
          onNext: D[1] || (D[1] = (_e) => x(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), r("div", bh, [
          C(vh, {
            filename: _.value.filename,
            "node-type": ((we = _.value.reference) == null ? void 0 : we.node_type) || "Unknown",
            "has-multiple-options": !!((J = _.value.options) != null && J.length),
            options: _.value.options,
            choice: (de = e.modelChoices) == null ? void 0 : de.get(_.value.filename),
            status: L.value,
            "status-label": I.value,
            onMarkOptional: q,
            onSkip: W,
            onDownloadUrl: R,
            onSearch: E,
            onOptionSelected: F,
            onClearChoice: T
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), r("div", kh, [...D[5] || (D[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (a(), M(wt, { to: "body" }, [
          d.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: rt(Z, ["self"])
          }, [
            t("div", $h, [
              t("div", { class: "model-modal-header" }, [
                D[6] || (D[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: Z
                }, "✕")
              ]),
              t("div", Ch, [
                C(Zt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": D[2] || (D[2] = (_e) => m.value = _e),
                  placeholder: "Search by filename, category...",
                  onInput: j
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), r("div", xh, [
                  (a(!0), r(G, null, ge(w.value, (_e) => (a(), r("div", {
                    key: _e.hash,
                    class: "model-search-result-item",
                    onClick: (Oe) => se()
                  }, [
                    t("div", Ih, [
                      t("code", Eh, f(_e.filename), 1)
                    ]),
                    t("div", Th, [
                      t("span", Ph, f(_e.category), 1),
                      t("span", Rh, f(A(_e.size)), 1)
                    ]),
                    _e.relative_path ? (a(), r("div", Mh, f(_e.relative_path), 1)) : y("", !0)
                  ], 8, Sh))), 128))
                ])) : m.value && !p.value ? (a(), r("div", Dh, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                p.value ? (a(), r("div", Lh, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), M(wt, { to: "body" }, [
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
                    "onUpdate:modelValue": D[3] || (D[3] = (_e) => v.value = _e),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", Uh, [
                  D[9] || (D[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  C(Zt, {
                    modelValue: g.value,
                    "onUpdate:modelValue": D[4] || (D[4] = (_e) => g.value = _e),
                    placeholder: P.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", zh, [
                  C(Pe, {
                    variant: "secondary",
                    onClick: Y
                  }, {
                    default: h(() => [...D[10] || (D[10] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Pe, {
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
    const s = e, o = U(() => {
      var m, v;
      const d = ((m = s.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || s.progress.nodesToInstall.length;
      if (!d) return 0;
      const u = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(u / d * 100);
    }), n = U(() => {
      var d;
      return ((d = s.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.filter((u) => !u.success)) || [];
    }), l = U(() => n.value.length > 0);
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
    const o = e, n = s, { analyzeWorkflow: l, applyResolution: i, installNodes: c, queueModelDownloads: d, progress: u, resetProgress: m } = wr(), { loadPendingDownloads: v } = _o(), { openFileLocation: g } = at(), w = k(null), p = k(!1), _ = k(!1), S = k(null), $ = k("analysis"), P = k([]), L = k(/* @__PURE__ */ new Map()), I = k(/* @__PURE__ */ new Map()), x = k(/* @__PURE__ */ new Set()), q = U(() => {
      const V = [
        { id: "analysis", label: "Analysis" }
      ];
      return (F.value || R.value) && V.push({ id: "nodes", label: "Nodes" }), T.value && V.push({ id: "models", label: "Models" }), V.push({ id: "review", label: "Review" }), $.value === "applying" && V.push({ id: "applying", label: "Applying" }), V;
    }), W = U(() => w.value ? w.value.stats.needs_user_input : !1), F = U(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), T = U(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), E = U(() => w.value ? w.value.stats.download_intents > 0 : !1), R = U(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), Z = U(() => w.value ? w.value.nodes.resolved.length : 0), Y = U(() => w.value ? w.value.models.resolved.filter((V) => V.has_category_mismatch) : []), j = U(() => Y.value.length > 0), se = U(() => F.value || R.value ? "nodes" : T.value ? "models" : "review"), ee = U(() => {
      if (!w.value) return [];
      const V = w.value.nodes.resolved.filter((ce) => !ce.is_installed), z = /* @__PURE__ */ new Set();
      return V.filter((ce) => z.has(ce.package.package_id) ? !1 : (z.add(ce.package.package_id), !0));
    }), A = U(() => {
      if (!w.value) return [];
      const V = w.value.nodes.resolved.filter((ce) => !ce.is_installed), z = /* @__PURE__ */ new Map();
      for (const ce of V) {
        const Fe = z.get(ce.package.package_id);
        Fe ? Fe.node_types_count++ : z.set(ce.package.package_id, {
          package_id: ce.package.package_id,
          title: ce.package.title,
          node_types_count: 1
        });
      }
      return Array.from(z.values());
    }), N = U(() => ee.value.filter((V) => !x.value.has(V.package.package_id))), D = U(() => w.value ? w.value.models.resolved.filter(
      (V) => V.match_type === "download_intent" || V.match_type === "property_download_intent"
    ).map((V) => ({
      filename: V.reference.widget_value,
      reference: V.reference,
      is_download_intent: !0,
      resolved_model: V.model,
      download_source: V.download_source,
      target_path: V.target_path
    })) : []), we = U(() => {
      if (!w.value) return [];
      const V = w.value.nodes.unresolved.map((ce) => ({
        node_type: ce.reference.node_type,
        reason: ce.reason,
        is_unresolved: !0,
        options: void 0
      })), z = w.value.nodes.ambiguous.map((ce) => ({
        node_type: ce.reference.node_type,
        has_multiple_options: !0,
        options: ce.options.map((Fe) => ({
          package_id: Fe.package.package_id,
          title: Fe.package.title,
          match_confidence: Fe.match_confidence,
          match_type: Fe.match_type,
          is_installed: Fe.is_installed
        }))
      }));
      return [...V, ...z];
    }), J = U(() => {
      if (!w.value) return [];
      const V = w.value.models.unresolved.map((ce) => ({
        filename: ce.reference.widget_value,
        reference: ce.reference,
        reason: ce.reason,
        is_unresolved: !0,
        options: void 0
      })), z = w.value.models.ambiguous.map((ce) => ({
        filename: ce.reference.widget_value,
        reference: ce.reference,
        has_multiple_options: !0,
        options: ce.options.map((Fe) => ({
          model: Fe.model,
          match_confidence: Fe.match_confidence,
          match_type: Fe.match_type,
          has_download_source: Fe.has_download_source
        }))
      }));
      return [...V, ...z];
    }), de = U(() => {
      const V = J.value, z = D.value.map((ce) => ({
        filename: ce.filename,
        reference: ce.reference,
        is_download_intent: !0,
        resolved_model: ce.resolved_model,
        download_source: ce.download_source,
        target_path: ce.target_path,
        options: void 0
      }));
      return [...V, ...z];
    }), _e = U(() => D.value.filter((V) => {
      const z = I.value.get(V.filename);
      return z ? z.action === "download" : !0;
    }).map((V) => ({
      filename: V.filename,
      url: V.download_source,
      target_path: V.target_path
    })));
    function Oe(V, z = 50) {
      return V.length <= z ? V : V.slice(0, z - 3) + "...";
    }
    const We = U(() => {
      let V = N.value.length;
      for (const z of L.value.values())
        z.action === "install" && V++;
      for (const z of I.value.values())
        z.action === "select" && V++;
      return V;
    }), he = U(() => {
      let V = 0;
      for (const z of I.value.values())
        z.action === "download" && V++;
      for (const z of D.value)
        I.value.get(z.filename) || V++;
      return V;
    }), Te = U(() => {
      let V = 0;
      for (const z of L.value.values())
        z.action === "optional" && V++;
      for (const z of I.value.values())
        z.action === "optional" && V++;
      return V;
    }), Be = U(() => {
      let V = x.value.size;
      for (const z of L.value.values())
        z.action === "skip" && V++;
      for (const z of I.value.values())
        z.action === "skip" && V++;
      for (const z of we.value)
        L.value.has(z.node_type) || V++;
      for (const z of J.value)
        I.value.has(z.filename) || V++;
      return V;
    }), $e = U(() => {
      const V = {};
      if (V.analysis = { resolved: 1, total: 1 }, F.value) {
        const z = we.value.length, ce = we.value.filter(
          (Fe) => L.value.has(Fe.node_type)
        ).length;
        V.nodes = { resolved: ce, total: z };
      }
      if (T.value) {
        const z = de.value.length, ce = de.value.filter(
          (Fe) => I.value.has(Fe.filename) || Fe.is_download_intent
        ).length;
        V.models = { resolved: ce, total: z };
      }
      if (V.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const z = u.totalFiles || 1, ce = u.completedFiles.length;
        V.applying = { resolved: ce, total: z };
      }
      return V;
    });
    function ie(V) {
      $.value = V;
    }
    function je() {
      const V = q.value.findIndex((z) => z.id === $.value);
      V > 0 && ($.value = q.value[V - 1].id);
    }
    function Re() {
      const V = q.value.findIndex((z) => z.id === $.value);
      V < q.value.length - 1 && ($.value = q.value[V + 1].id);
    }
    async function O() {
      p.value = !0, S.value = null;
      try {
        w.value = await l(o.workflowName);
      } catch (V) {
        S.value = V instanceof Error ? V.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function B() {
      P.value.includes("analysis") || P.value.push("analysis"), F.value || R.value ? $.value = "nodes" : T.value ? $.value = "models" : $.value = "review";
    }
    function ne(V) {
      L.value.set(V, { action: "optional" });
    }
    function le(V) {
      L.value.set(V, { action: "skip" });
    }
    function fe(V, z) {
      var Fe;
      const ce = we.value.find((Qe) => Qe.node_type === V);
      (Fe = ce == null ? void 0 : ce.options) != null && Fe[z] && L.value.set(V, {
        action: "install",
        package_id: ce.options[z].package_id
      });
    }
    function me(V, z) {
      L.value.set(V, {
        action: "install",
        package_id: z
      });
    }
    function xe(V) {
      L.value.delete(V);
    }
    function Se(V) {
      x.value.has(V) ? x.value.delete(V) : x.value.add(V);
    }
    function ae(V) {
      I.value.set(V, { action: "optional" });
    }
    function ue(V) {
      I.value.set(V, { action: "skip" });
    }
    function Le(V, z) {
      var Fe;
      const ce = J.value.find((Qe) => Qe.filename === V);
      (Fe = ce == null ? void 0 : ce.options) != null && Fe[z] && I.value.set(V, {
        action: "select",
        selected_model: ce.options[z].model
      });
    }
    function Ie(V, z, ce) {
      I.value.set(V, {
        action: "download",
        url: z,
        target_path: ce
      });
    }
    function te(V) {
      I.value.delete(V);
    }
    async function K(V) {
      try {
        await g(V);
      } catch (z) {
        S.value = z instanceof Error ? z.message : "Failed to open file location";
      }
    }
    async function Me() {
      var V;
      _.value = !0, S.value = null, m(), u.phase = "resolving", $.value = "applying";
      try {
        const z = await i(o.workflowName, L.value, I.value, x.value);
        z.models_to_download && z.models_to_download.length > 0 && d(o.workflowName, z.models_to_download);
        const ce = [
          ...z.nodes_to_install || [],
          ...N.value.map((Qe) => Qe.package.package_id)
        ];
        u.nodesToInstall = [...new Set(ce)], u.nodesToInstall.length > 0 && await c(o.workflowName), u.phase = "complete", await v();
        const Fe = u.installError || ((V = u.nodeInstallProgress) == null ? void 0 : V.completedNodes.some((Qe) => !Qe.success));
        !u.needsRestart && !Fe && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (z) {
        S.value = z instanceof Error ? z.message : "Failed to apply resolution", u.error = S.value, u.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function be() {
      n("refresh"), n("restart"), n("close");
    }
    async function ye() {
      var z;
      const V = ((z = u.nodeInstallProgress) == null ? void 0 : z.completedNodes.filter((ce) => !ce.success).map((ce) => ce.node_id)) || [];
      if (V.length !== 0) {
        u.phase = "installing", u.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: V.length
        }, u.nodesToInstall = V, u.nodesInstalled = [], u.installError = void 0;
        try {
          await c(o.workflowName), u.phase = "complete";
        } catch (ce) {
          u.error = ce instanceof Error ? ce.message : "Retry failed", u.phase = "error";
        }
      }
    }
    return et(O), (V, z) => (a(), M(pt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: S.value || void 0,
      "fixed-height": !0,
      onClose: z[1] || (z[1] = (ce) => n("close"))
    }, {
      body: h(() => [
        p.value && !w.value ? (a(), r("div", wy, [...z[2] || (z[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (a(), r("div", _y, [
          C(Ip, {
            steps: q.value,
            "current-step": $.value,
            "completed-steps": P.value,
            "step-stats": $e.value,
            onStepChange: ie
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
                    Z.value > 0 ? (a(), r("div", Ey, [
                      z[4] || (z[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Ty, f(Z.value), 1),
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
                    j.value ? (a(), r("div", Vy, [
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
              W.value ? (a(), r("div", qy, [
                z[24] || (z[24] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", Yy, f(we.value.length + J.value.length) + " items need your input", 1)
              ])) : R.value ? (a(), r("div", Jy, [
                z[25] || (z[25] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", Xy, f(w.value.stats.packages_needing_installation) + " package" + f(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(w.value.stats.nodes_needing_installation) + " node type" + f(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(E.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : E.value ? (a(), r("div", Qy, [
                z[26] || (z[26] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", Zy, f(w.value.stats.download_intents) + " model" + f(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : j.value ? (a(), r("div", e1, [
                z[27] || (z[27] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", t1, f(Y.value.length) + " model" + f(Y.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), r("div", s1, [...z[28] || (z[28] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              j.value ? (a(), r("div", o1, [
                z[31] || (z[31] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", n1, [
                  (a(!0), r(G, null, ge(Y.value, (ce) => {
                    var Fe, Qe;
                    return a(), r("div", {
                      key: ce.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", a1, f(ce.actual_category) + "/" + f((Fe = ce.model) == null ? void 0 : Fe.filename), 1),
                      z[30] || (z[30] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", l1, f((Qe = ce.expected_categories) == null ? void 0 : Qe[0]) + "/", 1),
                      ce.file_path ? (a(), M(Pe, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (vt) => K(ce.file_path)
                      }, {
                        default: h(() => [...z[29] || (z[29] = [
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
          $.value === "nodes" ? (a(), M(qg, {
            key: 1,
            nodes: we.value,
            "node-choices": L.value,
            "auto-resolved-packages": A.value,
            "skipped-packages": x.value,
            onMarkOptional: ne,
            onSkip: le,
            onOptionSelected: fe,
            onManualEntry: me,
            onClearChoice: xe,
            onPackageSkip: Se
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          $.value === "models" ? (a(), M(Bh, {
            key: 2,
            models: de.value,
            "model-choices": I.value,
            onMarkOptional: ae,
            onSkip: ue,
            onOptionSelected: Le,
            onDownloadUrl: Ie,
            onClearChoice: te
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          $.value === "review" ? (a(), r("div", i1, [
            t("div", r1, [
              z[37] || (z[37] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", c1, [
                t("div", d1, [
                  t("span", u1, f(We.value), 1),
                  z[32] || (z[32] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", f1, [
                  t("span", m1, f(he.value), 1),
                  z[33] || (z[33] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", v1, [
                  t("span", p1, f(Te.value), 1),
                  z[34] || (z[34] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", g1, [
                  t("span", h1, f(Be.value), 1),
                  z[35] || (z[35] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              A.value.length > 0 ? (a(), r("div", y1, [
                t("h4", w1, "Node Packages (" + f(A.value.length) + ")", 1),
                t("div", _1, [
                  (a(!0), r(G, null, ge(A.value, (ce) => (a(), r("div", {
                    key: ce.package_id,
                    class: "review-item"
                  }, [
                    t("code", b1, f(ce.package_id), 1),
                    t("div", k1, [
                      x.value.has(ce.package_id) ? (a(), r("span", C1, "Skipped")) : (a(), r("span", $1, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              we.value.length > 0 ? (a(), r("div", x1, [
                t("h4", S1, "Node Choices (" + f(we.value.length) + ")", 1),
                t("div", I1, [
                  (a(!0), r(G, null, ge(we.value, (ce) => {
                    var Fe, Qe, vt, lt;
                    return a(), r("div", {
                      key: ce.node_type,
                      class: "review-item"
                    }, [
                      t("code", E1, f(ce.node_type), 1),
                      t("div", T1, [
                        L.value.has(ce.node_type) ? (a(), r(G, { key: 0 }, [
                          ((Fe = L.value.get(ce.node_type)) == null ? void 0 : Fe.action) === "install" ? (a(), r("span", P1, f((Qe = L.value.get(ce.node_type)) == null ? void 0 : Qe.package_id), 1)) : ((vt = L.value.get(ce.node_type)) == null ? void 0 : vt.action) === "optional" ? (a(), r("span", R1, " Optional ")) : ((lt = L.value.get(ce.node_type)) == null ? void 0 : lt.action) === "skip" ? (a(), r("span", M1, " Skip ")) : y("", !0)
                        ], 64)) : (a(), r("span", D1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              _e.value.length > 0 ? (a(), r("div", L1, [
                t("h4", O1, "Models to Download (" + f(_e.value.length) + ")", 1),
                t("div", A1, [
                  (a(!0), r(G, null, ge(_e.value, (ce) => (a(), r("div", {
                    key: ce.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", N1, [
                      t("code", U1, f(ce.filename), 1),
                      t("div", z1, [
                        t("span", F1, "→ " + f(ce.target_path), 1),
                        ce.url ? (a(), r("span", {
                          key: 0,
                          class: "download-url",
                          title: ce.url
                        }, f(Oe(ce.url)), 9, B1)) : y("", !0)
                      ])
                    ]),
                    z[36] || (z[36] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              de.value.length > 0 ? (a(), r("div", V1, [
                t("h4", W1, "Models (" + f(de.value.length) + ")", 1),
                t("div", G1, [
                  (a(!0), r(G, null, ge(de.value, (ce) => {
                    var Fe, Qe, vt, lt, ut, Rt, Ut;
                    return a(), r("div", {
                      key: ce.filename,
                      class: "review-item"
                    }, [
                      t("code", j1, f(ce.filename), 1),
                      t("div", H1, [
                        I.value.has(ce.filename) ? (a(), r(G, { key: 0 }, [
                          ((Fe = I.value.get(ce.filename)) == null ? void 0 : Fe.action) === "select" ? (a(), r("span", K1, f((vt = (Qe = I.value.get(ce.filename)) == null ? void 0 : Qe.selected_model) == null ? void 0 : vt.filename), 1)) : ((lt = I.value.get(ce.filename)) == null ? void 0 : lt.action) === "download" ? (a(), r("span", q1, " Download ")) : ((ut = I.value.get(ce.filename)) == null ? void 0 : ut.action) === "optional" ? (a(), r("span", Y1, " Optional ")) : ((Rt = I.value.get(ce.filename)) == null ? void 0 : Rt.action) === "skip" ? (a(), r("span", J1, " Skip ")) : ((Ut = I.value.get(ce.filename)) == null ? void 0 : Ut.action) === "cancel_download" ? (a(), r("span", X1, " Cancel Download ")) : y("", !0)
                        ], 64)) : ce.is_download_intent ? (a(), r("span", Q1, " Pending Download ")) : (a(), r("span", Z1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ee.value.length === 0 && we.value.length === 0 && de.value.length === 0 ? (a(), r("div", e0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          $.value === "applying" ? (a(), M(yy, {
            key: 4,
            progress: Ve(u),
            onRestart: be,
            onRetryFailed: ye
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        $.value !== "analysis" && $.value !== "applying" ? (a(), M(Pe, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: je
        }, {
          default: h(() => [...z[38] || (z[38] = [
            b(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        z[41] || (z[41] = t("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || Ve(u).phase === "complete" || Ve(u).phase === "error" ? (a(), M(Pe, {
          key: 1,
          variant: "secondary",
          onClick: z[0] || (z[0] = (ce) => n("close"))
        }, {
          default: h(() => [
            b(f(Ve(u).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "analysis" ? (a(), M(Pe, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: B
        }, {
          default: h(() => [
            b(f(se.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        $.value === "nodes" ? (a(), M(Pe, {
          key: 3,
          variant: "primary",
          onClick: Re
        }, {
          default: h(() => [
            b(f(T.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "models" ? (a(), M(Pe, {
          key: 4,
          variant: "primary",
          onClick: Re
        }, {
          default: h(() => [...z[39] || (z[39] = [
            b(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        $.value === "review" ? (a(), M(Pe, {
          key: 5,
          variant: "primary",
          disabled: _.value,
          loading: _.value,
          onClick: Me
        }, {
          default: h(() => [...z[40] || (z[40] = [
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
    const o = e, n = U(() => o.status ? `status-${o.status}` : "");
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
      e.retry ? (a(), M(re, {
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
    const n = o, { getWorkflows: l } = at(), i = k([]), c = k(!1), d = k(null), u = k(""), m = k(!0), v = k(!1), g = k(!1), w = k(!1), p = k(null), _ = U(
      () => i.value.filter((A) => A.status === "broken")
    ), S = U(
      () => i.value.filter((A) => A.status === "new")
    ), $ = U(
      () => i.value.filter((A) => A.status === "modified")
    ), P = U(
      () => i.value.filter((A) => A.status === "synced")
    ), L = U(() => {
      if (!u.value.trim()) return i.value;
      const A = u.value.toLowerCase();
      return i.value.filter((N) => N.name.toLowerCase().includes(A));
    }), I = U(
      () => _.value.filter(
        (A) => !u.value.trim() || A.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), x = U(
      () => S.value.filter(
        (A) => !u.value.trim() || A.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), q = U(
      () => $.value.filter(
        (A) => !u.value.trim() || A.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), W = U(
      () => P.value.filter(
        (A) => !u.value.trim() || A.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), F = U(
      () => v.value ? W.value : W.value.slice(0, 5)
    );
    async function T(A = !1) {
      c.value = !0, d.value = null;
      try {
        i.value = await l(A);
      } catch (N) {
        d.value = N instanceof Error ? N.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    s({ loadWorkflows: T });
    function E(A) {
      p.value = A, g.value = !0;
    }
    function R(A) {
      p.value = A, w.value = !0;
    }
    function Z() {
      n("refresh");
    }
    async function Y() {
      w.value = !1, await T(!0);
    }
    async function j() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function se(A) {
      const N = [];
      return A.missing_nodes > 0 && N.push(`${A.missing_nodes} missing node${A.missing_nodes > 1 ? "s" : ""}`), A.missing_models > 0 && N.push(`${A.missing_models} missing model${A.missing_models > 1 ? "s" : ""}`), A.models_with_category_mismatch && A.models_with_category_mismatch > 0 && N.push(`${A.models_with_category_mismatch} model${A.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), A.pending_downloads && A.pending_downloads > 0 && N.push(`${A.pending_downloads} pending download${A.pending_downloads > 1 ? "s" : ""}`), N.length > 0 ? N.join(", ") : "Has issues";
    }
    function ee(A) {
      const N = A.sync_state === "new" ? "New" : A.sync_state === "modified" ? "Modified" : A.sync_state === "synced" ? "Synced" : A.sync_state;
      return A.has_path_sync_issues && A.models_needing_path_sync && A.models_needing_path_sync > 0 ? `${A.models_needing_path_sync} model path${A.models_needing_path_sync > 1 ? "s" : ""} need${A.models_needing_path_sync === 1 ? "s" : ""} sync` : N || "Unknown";
    }
    return et(T), (A, N) => (a(), r(G, null, [
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
          c.value ? (a(), M(Es, {
            key: 0,
            message: "Loading workflows..."
          })) : d.value ? (a(), M(Ts, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            I.value.length ? (a(), M(it, {
              key: 0,
              title: "BROKEN",
              count: I.value.length
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge(I.value, (D) => (a(), M(Et, {
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
                      onClick: (we) => R(D.name)
                    }, {
                      default: h(() => [...N[8] || (N[8] = [
                        b(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (we) => E(D.name)
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
            x.value.length ? (a(), M(it, {
              key: 1,
              title: "NEW",
              count: x.value.length
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge(x.value, (D) => (a(), M(Et, {
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
                      onClick: (we) => E(D.name)
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
            q.value.length ? (a(), M(it, {
              key: 2,
              title: "MODIFIED",
              count: q.value.length
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge(q.value, (D) => (a(), M(Et, {
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
                      onClick: (we) => E(D.name)
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
            W.value.length ? (a(), M(it, {
              key: 3,
              title: "SYNCED",
              count: W.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: N[2] || (N[2] = (D) => m.value = D)
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge(F.value, (D) => (a(), M(Et, {
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
                      onClick: (we) => E(D.name)
                    }, {
                      default: h(() => [...N[13] || (N[13] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && W.value.length > 5 ? (a(), M(re, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: N[1] || (N[1] = (D) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    b(" View all " + f(W.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            L.value.length ? y("", !0) : (a(), M(os, {
              key: 4,
              icon: "📭",
              message: u.value ? `No workflows match '${u.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g.value && p.value ? (a(), M(pp, {
        key: 0,
        "workflow-name": p.value,
        onClose: N[3] || (N[3] = (D) => g.value = !1),
        onResolve: N[4] || (N[4] = (D) => R(p.value)),
        onRefresh: N[5] || (N[5] = (D) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (a(), M(s0, {
        key: 1,
        "workflow-name": p.value,
        onClose: Y,
        onInstall: Z,
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
    function P(T, E = "success", R = 2e3) {
      $ && clearTimeout($), S.value = { message: T, type: E }, $ = setTimeout(() => {
        S.value = null;
      }, R);
    }
    function L(T) {
      if (!T) return "Unknown";
      const E = 1024 * 1024 * 1024, R = 1024 * 1024;
      return T >= E ? `${(T / E).toFixed(1)} GB` : T >= R ? `${(T / R).toFixed(0)} MB` : `${(T / 1024).toFixed(0)} KB`;
    }
    function I(T) {
      navigator.clipboard.writeText(T), P("Copied to clipboard!");
    }
    async function x(T) {
      try {
        await c(T), P("Opening file location...");
      } catch {
        P("Failed to open location", "error");
      }
    }
    async function q() {
      if (!(!v.value.trim() || !d.value)) {
        g.value = !0, p.value = null, _.value = null;
        try {
          await l(d.value.hash, v.value.trim()), _.value = "Source added successfully!", v.value = "", await F();
        } catch (T) {
          p.value = T instanceof Error ? T.message : "Failed to add source";
        } finally {
          g.value = !1;
        }
      }
    }
    async function W(T) {
      if (d.value) {
        w.value = T, p.value = null, _.value = null;
        try {
          await i(d.value.hash, T), P("Source removed"), await F();
        } catch (E) {
          p.value = E instanceof Error ? E.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function F() {
      u.value = !0, m.value = null;
      try {
        d.value = await n(o.identifier);
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to load model details";
      } finally {
        u.value = !1;
      }
    }
    return et(F), (T, E) => {
      var R;
      return a(), r(G, null, [
        C(pt, {
          title: `Model Details: ${((R = d.value) == null ? void 0 : R.filename) || "Loading..."}`,
          size: "lg",
          loading: u.value,
          error: m.value,
          onClose: E[5] || (E[5] = (Z) => T.$emit("close"))
        }, {
          body: h(() => {
            var Z, Y, j, se;
            return [
              d.value ? (a(), r("div", T0, [
                t("section", P0, [
                  t("div", R0, [
                    E[6] || (E[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", M0, f(d.value.hash || "Not computed"), 1),
                    d.value.hash ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[0] || (E[0] = (ee) => I(d.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", D0, [
                    E[7] || (E[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", L0, f(d.value.blake3 || "Not computed"), 1),
                    d.value.blake3 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[1] || (E[1] = (ee) => I(d.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", O0, [
                    E[8] || (E[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", A0, f(d.value.sha256 || "Not computed"), 1),
                    d.value.sha256 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[2] || (E[2] = (ee) => I(d.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", N0, [
                    E[9] || (E[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", U0, f(L(d.value.size)), 1)
                  ]),
                  t("div", z0, [
                    E[10] || (E[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", F0, f(d.value.category), 1)
                  ]),
                  t("div", B0, [
                    E[11] || (E[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", V0, f(d.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", W0, [
                  t("h4", G0, "Locations (" + f(((Z = d.value.locations) == null ? void 0 : Z.length) || 0) + ")", 1),
                  (Y = d.value.locations) != null && Y.length ? (a(), r("div", j0, [
                    (a(!0), r(G, null, ge(d.value.locations, (ee, A) => (a(), r("div", {
                      key: A,
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
                    (a(!0), r(G, null, ge(d.value.sources, (ee, A) => (a(), r("div", {
                      key: A,
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
                        onClick: (N) => W(ee.url)
                      }, f(w.value === ee.url ? "..." : "×"), 9, tw)
                    ]))), 128))
                  ])) : (a(), r("div", sw, " No download sources configured ")),
                  t("div", ow, [
                    Ye(t("input", {
                      "onUpdate:modelValue": E[3] || (E[3] = (ee) => v.value = ee),
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
              onClick: E[4] || (E[4] = (Z) => T.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (a(), M(wt, { to: "body" }, [
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
    const _ = U(
      () => i.value.reduce((F, T) => F + (T.size || 0), 0)
    ), S = U(() => {
      if (!v.value.trim()) return i.value;
      const F = v.value.toLowerCase();
      return i.value.filter((T) => T.filename.toLowerCase().includes(F));
    }), $ = U(() => {
      if (!v.value.trim()) return c.value;
      const F = v.value.toLowerCase();
      return c.value.filter((T) => T.filename.toLowerCase().includes(F));
    }), P = U(() => {
      const F = {};
      for (const E of S.value) {
        const R = E.type || "other";
        F[R] || (F[R] = []), F[R].push(E);
      }
      const T = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(F).sort(([E], [R]) => {
        const Z = T.indexOf(E), Y = T.indexOf(R);
        return Z >= 0 && Y >= 0 ? Z - Y : Z >= 0 ? -1 : Y >= 0 ? 1 : E.localeCompare(R);
      }).map(([E, R]) => ({ type: E, models: R }));
    });
    function L(F) {
      if (!F) return "Unknown";
      const T = F / (1024 * 1024);
      return T >= 1024 ? `${(T / 1024).toFixed(1)} GB` : `${T.toFixed(0)} MB`;
    }
    function I(F) {
      w.value = F.hash || F.filename;
    }
    function x(F) {
      o("navigate", "model-index");
    }
    function q(F) {
      alert(`Download functionality not yet implemented for ${F}`);
    }
    async function W() {
      u.value = !0, m.value = null;
      try {
        const F = await n();
        i.value = F, c.value = [];
        const T = await l();
        d.value = T.environment || "production";
      } catch (F) {
        m.value = F instanceof Error ? F.message : "Failed to load models";
      } finally {
        u.value = !1;
      }
    }
    return et(W), (F, T) => (a(), r(G, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (E) => g.value = !0)
          })
        ]),
        search: h(() => [
          C(bo, {
            modelValue: v.value,
            "onUpdate:modelValue": T[1] || (T[1] = (E) => v.value = E),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (a(), M(Es, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (a(), M(Ts, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            i.value.length ? (a(), M(on, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(i.value.length) + " models • " + f(L(_.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(G, null, ge(P.value, (E) => (a(), M(it, {
              key: E.type,
              title: E.type.toUpperCase(),
              count: E.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge(E.models, (R) => (a(), M(Et, {
                  key: R.hash || R.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...T[4] || (T[4] = [
                    b("📦", -1)
                  ])]),
                  title: h(() => [
                    b(f(R.filename), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(L(R.size)), 1)
                  ]),
                  details: h(() => [
                    C(ft, {
                      label: "Used by:",
                      value: (R.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    C(ft, {
                      label: "Path:",
                      value: R.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Z) => I(R)
                    }, {
                      default: h(() => [...T[5] || (T[5] = [
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
            $.value.length ? (a(), M(it, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge($.value, (E) => (a(), M(Et, {
                  key: E.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...T[6] || (T[6] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(E.filename), 1)
                  ]),
                  subtitle: h(() => [...T[7] || (T[7] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var R;
                    return [
                      C(ft, {
                        label: "Required by:",
                        value: ((R = E.workflow_names) == null ? void 0 : R.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (R) => q(E.filename)
                    }, {
                      default: h(() => [...T[8] || (T[8] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (R) => x(E.filename)
                    }, {
                      default: h(() => [...T[9] || (T[9] = [
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
            !S.value.length && !$.value.length ? (a(), M(os, {
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
        onClose: T[2] || (T[2] = (E) => g.value = !1)
      }, {
        content: h(() => [
          t("p", null, [
            T[10] || (T[10] = b(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + f(d.value) + '"', 1),
            T[11] || (T[11] = b(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          C(re, {
            variant: "primary",
            onClick: p
          }, {
            default: h(() => [...T[12] || (T[12] = [
              b(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), M(Xa, {
        key: 0,
        identifier: w.value,
        onClose: T[3] || (T[3] = (E) => w.value = null)
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
    } = at(), { addToQueue: c } = _o(), d = s, u = k([]), m = k(!1), v = k(!1), g = k(null), w = k(""), p = k(!1), _ = k(null), S = k(!1), $ = k(null), P = k(""), L = k(!1), I = k(!1), x = k(""), q = k(""), W = k(null), F = U(
      () => u.value.reduce((N, D) => N + (D.size || 0), 0)
    ), T = U(() => {
      if (!w.value.trim()) return u.value;
      const N = w.value.toLowerCase();
      return u.value.filter((D) => {
        const we = D, J = D.sha256 || we.sha256_hash || "";
        return D.filename.toLowerCase().includes(N) || J.toLowerCase().includes(N);
      });
    }), E = U(() => {
      const N = {};
      for (const we of T.value) {
        const J = we.type || "other";
        N[J] || (N[J] = []), N[J].push(we);
      }
      const D = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(N).sort(([we], [J]) => {
        const de = D.indexOf(we), _e = D.indexOf(J);
        return de >= 0 && _e >= 0 ? de - _e : de >= 0 ? -1 : _e >= 0 ? 1 : we.localeCompare(J);
      }).map(([we, J]) => ({ type: we, models: J }));
    });
    function R(N) {
      if (!N) return "Unknown";
      const D = 1024 * 1024 * 1024, we = 1024 * 1024;
      return N >= D ? `${(N / D).toFixed(1)} GB` : N >= we ? `${(N / we).toFixed(0)} MB` : `${(N / 1024).toFixed(0)} KB`;
    }
    function Z(N) {
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
        L.value = !0, g.value = null;
        try {
          const N = await i(P.value.trim());
          $.value = N.path, S.value = !1, P.value = "", await ee(), console.log(`Directory changed: ${N.models_indexed} models indexed`), d("refresh");
        } catch (N) {
          g.value = N instanceof Error ? N.message : "Failed to change directory";
        } finally {
          L.value = !1;
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
      }]), x.value = "", q.value = "", I.value = !1;
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
    async function A() {
      try {
        const N = await l();
        $.value = N.path;
      } catch {
      }
    }
    return et(() => {
      ee(), A();
    }), (N, D) => (a(), r(G, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: D[2] || (D[2] = (we) => p.value = !0)
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
                onClick: D[0] || (D[0] = (we) => S.value = !0)
              }, {
                default: h(() => [...D[15] || (D[15] = [
                  b(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: D[1] || (D[1] = (we) => I.value = !0)
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
          W.value ? (a(), r("div", dw, [
            t("div", uw, [
              t("span", fw, f(W.value.message), 1),
              t("span", mw, f(W.value.current) + "/" + f(W.value.total), 1)
            ]),
            t("div", vw, [
              t("div", {
                class: "progress-fill",
                style: jt({ width: `${W.value.current / W.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          C(bo, {
            modelValue: w.value,
            "onUpdate:modelValue": D[3] || (D[3] = (we) => w.value = we),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          m.value || W.value ? (a(), M(Es, {
            key: 0,
            message: W.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : g.value ? (a(), M(Ts, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: ee
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            u.value.length ? (a(), M(on, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(u.value.length) + " models • " + f(R(F.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(G, null, ge(E.value, (we) => (a(), M(it, {
              key: we.type,
              title: we.type.toUpperCase(),
              count: we.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge(we.models, (J) => (a(), M(Et, {
                  key: J.sha256 || J.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...D[17] || (D[17] = [
                    b("📦", -1)
                  ])]),
                  title: h(() => [
                    b(f(J.filename), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(R(J.size)), 1)
                  ]),
                  details: h(() => [
                    C(ft, {
                      label: "Hash:",
                      value: J.hash ? J.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (de) => Z(J)
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
            T.value.length ? y("", !0) : (a(), M(os, {
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
        onClose: D[4] || (D[4] = (we) => p.value = !1)
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
      _.value ? (a(), M(Xa, {
        key: 0,
        identifier: _.value,
        onClose: D[5] || (D[5] = (we) => _.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (a(), M(wt, { to: "body" }, [
        S.value ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: D[9] || (D[9] = rt((we) => S.value = !1, ["self"]))
        }, [
          t("div", pw, [
            t("div", gw, [
              D[20] || (D[20] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: D[6] || (D[6] = (we) => S.value = !1)
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
                  "onUpdate:modelValue": D[7] || (D[7] = (we) => P.value = we),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              D[23] || (D[23] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", bw, [
              C(Pe, {
                variant: "secondary",
                onClick: D[8] || (D[8] = (we) => S.value = !1)
              }, {
                default: h(() => [...D[24] || (D[24] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(Pe, {
                variant: "primary",
                disabled: !P.value.trim() || L.value,
                loading: L.value,
                onClick: j
              }, {
                default: h(() => [
                  b(f(L.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      (a(), M(wt, { to: "body" }, [
        I.value ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: D[14] || (D[14] = rt((we) => I.value = !1, ["self"]))
        }, [
          t("div", kw, [
            t("div", $w, [
              D[25] || (D[25] = t("h3", null, "Download New Model", -1)),
              t("button", {
                class: "modal-close",
                onClick: D[10] || (D[10] = (we) => I.value = !1)
              }, "✕")
            ]),
            t("div", Cw, [
              t("div", xw, [
                D[26] || (D[26] = t("label", null, "Download URL", -1)),
                C(Zt, {
                  modelValue: x.value,
                  "onUpdate:modelValue": D[11] || (D[11] = (we) => x.value = we),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              t("div", Sw, [
                D[27] || (D[27] = t("label", null, "Target Path (relative to models directory)", -1)),
                C(Zt, {
                  modelValue: q.value,
                  "onUpdate:modelValue": D[12] || (D[12] = (we) => q.value = we),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              D[28] || (D[28] = t("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            t("div", Iw, [
              C(Pe, {
                variant: "secondary",
                onClick: D[13] || (D[13] = (we) => I.value = !1)
              }, {
                default: h(() => [...D[29] || (D[29] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(Pe, {
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
    const o = e, n = s, l = U(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), i = U(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = U(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (d, u) => (a(), M(pt, {
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
        C(Pe, {
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
    return (s, o) => (a(), M(pt, {
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
        C(Pe, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => s.$emit("cancel"))
        }, {
          default: h(() => [
            b(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), M(Pe, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => s.$emit("secondary"))
        }, {
          default: h(() => [
            b(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        C(Pe, {
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
    }), m = k(!1), v = k(null), g = k(""), w = k(!1), p = k(null), _ = k(null), S = U(() => {
      if (!g.value.trim()) return u.value.nodes;
      const Y = g.value.toLowerCase();
      return u.value.nodes.filter(
        (j) => {
          var se, ee;
          return j.name.toLowerCase().includes(Y) || ((se = j.description) == null ? void 0 : se.toLowerCase().includes(Y)) || ((ee = j.repository) == null ? void 0 : ee.toLowerCase().includes(Y));
        }
      );
    }), $ = U(
      () => S.value.filter((Y) => Y.installed && Y.tracked)
    ), P = U(
      () => S.value.filter((Y) => !Y.installed && Y.tracked)
    ), L = U(
      () => S.value.filter((Y) => Y.installed && !Y.tracked)
    );
    function I(Y) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[Y] || Y;
    }
    const x = U(() => o.versionMismatches.length > 0);
    function q(Y) {
      return !Y.used_in_workflows || Y.used_in_workflows.length === 0 ? "Not used in any workflows" : Y.used_in_workflows.length === 1 ? Y.used_in_workflows[0] : `${Y.used_in_workflows.length} workflows`;
    }
    function W(Y) {
      p.value = Y;
    }
    function F() {
      n("open-node-manager");
    }
    function T(Y) {
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
            j.status === "success" ? (n("toast", `✓ Node "${Y}" tracked as development`, "success"), await Z()) : n("toast", `Failed to track node: ${j.message || "Unknown error"}`, "error");
          } catch (j) {
            n("toast", `Error tracking node: ${j instanceof Error ? j.message : "Unknown error"}`, "error");
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
            const j = await d(Y);
            j.status === "success" ? (n("toast", `✓ Node "${Y}" removed`, "success"), await Z()) : n("toast", `Failed to remove node: ${j.message || "Unknown error"}`, "error");
          } catch (j) {
            n("toast", `Error removing node: ${j instanceof Error ? j.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function R(Y) {
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
            j.status === "success" ? (n("toast", `✓ Node "${Y}" installed`, "success"), await Z()) : n("toast", `Failed to install node: ${j.message || "Unknown error"}`, "error");
          } catch (j) {
            n("toast", `Error installing node: ${j instanceof Error ? j.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    async function Z() {
      m.value = !0, v.value = null;
      try {
        u.value = await l();
      } catch (Y) {
        v.value = Y instanceof Error ? Y.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return et(Z), (Y, j) => (a(), r(G, null, [
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
                onClick: F
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
          m.value ? (a(), M(Es, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (a(), M(Ts, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: Z
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            u.value.total_count ? (a(), M(on, {
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
            x.value ? (a(), M(it, {
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
                (a(!0), r(G, null, ge(e.versionMismatches, (se) => (a(), M(Et, {
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
            L.value.length ? (a(), M(it, {
              key: 2,
              title: "UNTRACKED",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge(L.value, (se) => (a(), M(Et, {
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
                      onClick: (ee) => W(se)
                    }, {
                      default: h(() => [...j[14] || (j[14] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ee) => T(se.name)
                    }, {
                      default: h(() => [...j[15] || (j[15] = [
                        b(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (ee) => E(se.name)
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
            $.value.length ? (a(), M(it, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge($.value, (se) => (a(), M(Et, {
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
                    t("span", o_, " • " + f(I(se.source)), 1)
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
                      onClick: (ee) => W(se)
                    }, {
                      default: h(() => [...j[17] || (j[17] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: F
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
            P.value.length ? (a(), M(it, {
              key: 4,
              title: "MISSING",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge(P.value, (se) => (a(), M(Et, {
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
                      onClick: (ee) => W(se)
                    }, {
                      default: h(() => [...j[21] || (j[21] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ee) => R(se.name)
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
            !$.value.length && !P.value.length && !L.value.length ? (a(), M(os, {
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
      p.value ? (a(), M(Hw, {
        key: 0,
        node: p.value,
        onClose: j[5] || (j[5] = (se) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      _.value ? (a(), M(Qa, {
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
    const s = e, o = k(!1), n = U(() => {
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
    const s = e, o = U(() => s.fetchingRemote === s.remote.name), n = U(() => s.remote.is_default), l = U(() => s.syncStatus && s.syncStatus.behind > 0), i = U(() => s.syncStatus && s.syncStatus.ahead > 0), c = U(() => s.remote.push_url !== s.remote.fetch_url), d = U(() => {
      const m = s.remote.fetch_url, v = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), u = U(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, v) => (a(), M(Et, {
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
        n.value ? y("", !0) : (a(), M(re, {
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
          e.remote.push_url !== e.remote.fetch_url ? (a(), M(ft, {
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
    const s = e, o = U(() => s.id || `field-${Math.random().toString(36).substr(2, 9)}`);
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
}), ra = /* @__PURE__ */ pe(E_, [["__scopeId", "data-v-9a1cf296"]]), T_ = { class: "remote-form" }, P_ = { class: "form-header" }, R_ = { class: "form-body" }, M_ = {
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
    const d = U(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
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
        C(ra, {
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
        C(ra, {
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
        C(ra, { label: "Push URL (optional)" }, {
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
    const s = e, o = U(
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
    const i = U(() => {
      var $;
      return (($ = o.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = U(() => {
      if (!o.preview) return 0;
      const $ = o.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), d = U(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), u = U(() => {
      var $;
      return c.value > 0 || d.value > 0 || ((($ = o.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), m = U(() => o.preview && br(o.preview) ? o.preview : null), v = U(() => {
      var $;
      return (($ = m.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), g = U(() => {
      var $;
      return (($ = o.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), w = U(
      () => v.value > 0 && g.value === v.value
    ), p = U(() => !(!o.preview || o.preview.has_uncommitted_changes || m.value && !w.value));
    function _($) {
      if (!m.value) return !1;
      const P = $.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((L) => L.name === P);
    }
    function S($) {
      const P = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: $, resolutions: P });
    }
    return ($, P) => {
      var L, I;
      return a(), M(wt, { to: "body" }, [
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
                m.value ? (a(), M(j_, {
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
              ], 64)) : (I = e.preview) != null && I.has_uncommitted_changes ? (a(), M(re, {
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
                m.value && !w.value ? (a(), M(re, {
                  key: 0,
                  variant: "primary",
                  onClick: P[8] || (P[8] = (x) => n("openConflictResolution"))
                }, {
                  default: h(() => [
                    b(" Resolve Conflicts (" + f(g.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), M(re, {
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
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), M(re, {
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
    const i = U(() => l.value !== null), c = U(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), d = U(() => {
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
    const o = e, n = s, l = U(() => o.resolutions.size), i = U(() => o.workflowConflicts.length - l.value), c = U(() => l.value === o.workflowConflicts.length), d = U(
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
    return (w, p) => (a(), M(pt, {
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
            (a(!0), r(G, null, ge(e.workflowConflicts, (_) => (a(), M(lk, {
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
        C(Pe, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...p[7] || (p[7] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = t("div", { class: "footer-spacer" }, null, -1)),
        C(Pe, {
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
    const o = e, n = s, l = U(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (i, c) => (a(), M(pt, {
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
              (a(!0), r(G, null, ge(e.validation.node_conflicts, (d) => (a(), M(Ok, {
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
        C(Pe, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (d) => n("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        C(Pe, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (d) => n("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            b(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        C(Pe, {
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
    } = at(), _ = k([]), S = k(null), $ = k({}), P = k(!1), L = k(null), I = k(""), x = k(!1), q = k(null), W = k(!1), F = k("add"), T = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), E = U(() => {
      if (!I.value.trim()) return _.value;
      const ye = I.value.toLowerCase();
      return _.value.filter(
        (V) => V.name.toLowerCase().includes(ye) || V.fetch_url.toLowerCase().includes(ye) || V.push_url.toLowerCase().includes(ye)
      );
    });
    async function R() {
      P.value = !0, L.value = null;
      try {
        const ye = await n();
        _.value = ye.remotes, S.value = ye.current_branch_tracking || null, await Promise.all(
          ye.remotes.map(async (V) => {
            const z = await u(V.name);
            z && ($.value[V.name] = z);
          })
        );
      } catch (ye) {
        L.value = ye instanceof Error ? ye.message : "Failed to load remotes";
      } finally {
        P.value = !1;
      }
    }
    function Z() {
      F.value = "add", T.value = { name: "", fetchUrl: "", pushUrl: "" }, W.value = !0;
    }
    function Y(ye) {
      const V = _.value.find((z) => z.name === ye);
      V && (F.value = "edit", T.value = {
        name: V.name,
        fetchUrl: V.fetch_url,
        pushUrl: V.push_url
      }, W.value = !0);
    }
    async function j(ye) {
      try {
        F.value === "add" ? await l(ye.name, ye.fetchUrl) : await c(ye.name, ye.fetchUrl, ye.pushUrl || void 0), W.value = !1, await R();
      } catch (V) {
        L.value = V instanceof Error ? V.message : "Operation failed";
      }
    }
    function se() {
      W.value = !1, T.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function ee(ye) {
      q.value = ye;
      try {
        await d(ye);
        const V = await u(ye);
        V && ($.value[ye] = V), o("toast", `✓ Fetched from ${ye}`, "success");
      } catch (V) {
        o("toast", V instanceof Error ? V.message : "Fetch failed", "error");
      } finally {
        q.value = null;
      }
    }
    async function A(ye) {
      if (confirm(`Remove remote "${ye}"?`))
        try {
          await i(ye), await R();
        } catch (V) {
          L.value = V instanceof Error ? V.message : "Failed to remove remote";
        }
    }
    function N() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const D = k("idle"), we = U(() => D.value === "pull_preview"), J = U(
      () => D.value === "resolving" || D.value === "validating"
    ), de = U(
      () => D.value === "validation_review" || D.value === "executing"
    ), _e = k(!1), Oe = k(null), We = k(!1), he = k(null), Te = k(!1), Be = k(null), $e = k(null), ie = k(/* @__PURE__ */ new Map()), je = k(null), Re = k(null), O = U(() => Be.value && br(Be.value) ? Be.value : null);
    async function B(ye) {
      he.value = ye, D.value = "pull_preview", Te.value = !0, Be.value = null, $e.value = null;
      try {
        Be.value = await m(ye);
      } catch (V) {
        $e.value = V instanceof Error ? V.message : "Failed to load pull preview";
      } finally {
        Te.value = !1;
      }
    }
    function ne() {
      D.value = "idle", Be.value = null, $e.value = null, he.value = null;
    }
    async function le(ye) {
      if (!he.value) return;
      D.value = "executing", $e.value = null;
      const V = he.value;
      try {
        const z = await v(V, ye);
        if (z.rolled_back) {
          $e.value = `Pull failed and was rolled back: ${z.error || "Unknown error"}`, D.value = "pull_preview";
          return;
        }
        Ie(), D.value = "idle", o("toast", `✓ Pulled from ${V}`, "success"), await R();
      } catch (z) {
        $e.value = z instanceof Error ? z.message : "Pull failed", D.value = "pull_preview";
      }
    }
    function fe() {
      O.value && (D.value = "resolving", Re.value = null);
    }
    function me(ye, V) {
      ie.value.set(ye, { name: ye, resolution: V });
    }
    function xe() {
      D.value = "pull_preview";
    }
    async function Se() {
      D.value = "validating", Re.value = null;
      try {
        const ye = Array.from(ie.value.values());
        je.value = await p(he.value, ye), D.value = "validation_review";
      } catch (ye) {
        Re.value = ye instanceof Error ? ye.message : "Validation failed", D.value = "resolving";
      }
    }
    async function ae() {
      D.value = "executing";
      const ye = he.value;
      try {
        const V = Array.from(ie.value.values()), z = await v(ye, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: V
        });
        if (z.rolled_back) {
          $e.value = `Pull failed and was rolled back: ${z.error || "Unknown error"}`, D.value = "pull_preview";
          return;
        }
        Ie(), D.value = "idle", o("toast", `✓ Pulled from ${ye}`, "success"), await R();
      } catch (V) {
        $e.value = V instanceof Error ? V.message : "Pull failed", D.value = "validation_review";
      }
    }
    function ue() {
      D.value = "resolving";
    }
    function Le() {
      Ie(), D.value = "idle";
    }
    function Ie() {
      ie.value.clear(), je.value = null, Re.value = null, $e.value = null, Be.value = null, he.value = null;
    }
    async function te(ye) {
      he.value = ye, _e.value = !0, Te.value = !0, Oe.value = null;
      try {
        Oe.value = await g(ye);
      } catch (V) {
        L.value = V instanceof Error ? V.message : "Failed to load push preview";
      } finally {
        Te.value = !1;
      }
    }
    function K() {
      _e.value = !1, Oe.value = null, he.value = null;
    }
    async function Me(ye) {
      if (!he.value) return;
      We.value = !0;
      const V = he.value;
      try {
        await w(V, ye), K(), o("toast", `✓ Pushed to ${V}`, "success"), await R();
      } catch (z) {
        o("toast", z instanceof Error ? z.message : "Push failed", "error");
      } finally {
        We.value = !1;
      }
    }
    function be() {
      const ye = he.value;
      K(), ye && B(ye);
    }
    return et(R), (ye, V) => (a(), r(G, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: V[0] || (V[0] = (z) => x.value = !0)
          }, {
            actions: h(() => [
              W.value ? y("", !0) : (a(), M(re, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: Z
              }, {
                default: h(() => [...V[3] || (V[3] = [
                  b(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          W.value ? y("", !0) : (a(), M(bo, {
            key: 0,
            modelValue: I.value,
            "onUpdate:modelValue": V[1] || (V[1] = (z) => I.value = z),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: h(() => [
          P.value ? (a(), M(Es, {
            key: 0,
            message: "Loading remotes..."
          })) : L.value ? (a(), M(Ts, {
            key: 1,
            message: L.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            W.value ? (a(), M(O_, {
              key: 0,
              mode: F.value,
              "remote-name": T.value.name,
              "fetch-url": T.value.fetchUrl,
              "push-url": T.value.pushUrl,
              onSubmit: j,
              onCancel: se
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            _.value.length && !W.value ? (a(), M(on, {
              key: 1,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                S.value ? (a(), r("span", Vk, " • Tracking: " + f(S.value.remote) + "/" + f(S.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            E.value.length && !W.value ? (a(), M(it, {
              key: 2,
              title: "REMOTES",
              count: E.value.length
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge(E.value, (z) => (a(), M(k_, {
                  key: z.name,
                  remote: z,
                  "sync-status": $.value[z.name],
                  "fetching-remote": q.value,
                  onFetch: ee,
                  onEdit: Y,
                  onRemove: A,
                  onPull: B,
                  onPush: te
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !E.value.length && !W.value ? (a(), M(os, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                C(re, {
                  variant: "primary",
                  onClick: Z
                }, {
                  default: h(() => [...V[4] || (V[4] = [
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
        onClose: V[2] || (V[2] = (z) => x.value = !1)
      }, {
        content: h(() => [...V[5] || (V[5] = [
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
            default: h(() => [...V[6] || (V[6] = [
              b(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      C(yb, {
        show: we.value,
        "remote-name": he.value || "",
        preview: Be.value,
        loading: Te.value,
        pulling: D.value === "executing",
        error: $e.value,
        "conflict-resolutions": ie.value,
        onClose: ne,
        onPull: le,
        onOpenConflictResolution: fe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      C(Wb, {
        show: _e.value,
        "remote-name": he.value || "",
        preview: Oe.value,
        loading: Te.value,
        pushing: We.value,
        onClose: K,
        onPush: Me,
        onPullFirst: be
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      J.value && O.value ? (a(), M(_k, {
        key: 0,
        "workflow-conflicts": O.value.workflow_conflicts,
        resolutions: ie.value,
        "operation-type": "pull",
        validating: D.value === "validating",
        error: Re.value,
        onClose: xe,
        onResolve: me,
        onApply: Se
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      de.value && je.value ? (a(), M(Bk, {
        key: 1,
        validation: je.value,
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
}), fn = /* @__PURE__ */ pe(Jk, [["__scopeId", "data-v-cb5d236c"]]), Xk = { class: "toggle" }, Qk = ["checked", "disabled"], Zk = /* @__PURE__ */ ve({
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
    const n = e, l = o, { getConfig: i, updateConfig: c } = at(), d = k(!1), u = k(null), m = k(null), v = k(null), g = k(null), w = k(""), p = k(""), _ = k(!1), S = k(0);
    function $(E) {
      return E.join(" ");
    }
    function P(E) {
      return E.trim() ? E.trim().split(/\s+/) : [];
    }
    const L = U(() => {
      if (!g.value) return !1;
      const E = w.value !== (g.value.civitai_api_key || ""), R = p.value !== $(g.value.comfyui_extra_args || []);
      return E || R;
    });
    async function I() {
      d.value = !0, u.value = null;
      try {
        v.value = await i(n.workspacePath || void 0), g.value = { ...v.value }, w.value = v.value.civitai_api_key || "", p.value = $(v.value.comfyui_extra_args || []);
        const E = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        _.value = E !== "false", S.value = F();
      } catch (E) {
        u.value = E instanceof Error ? E.message : "Failed to load settings";
      } finally {
        d.value = !1;
      }
    }
    async function x() {
      var E, R;
      m.value = null;
      try {
        const Z = {};
        w.value !== (((E = g.value) == null ? void 0 : E.civitai_api_key) || "") && (Z.civitai_api_key = w.value || null), p.value !== $(((R = g.value) == null ? void 0 : R.comfyui_extra_args) || []) && (Z.comfyui_extra_args = P(p.value)), await c(Z, n.workspacePath || void 0), await I(), m.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (Z) {
        const Y = Z instanceof Error ? Z.message : "Failed to save settings";
        m.value = { type: "error", message: Y }, l("error", Y);
      }
    }
    function q() {
      g.value && (w.value = g.value.civitai_api_key || "", p.value = $(g.value.comfyui_extra_args || []), m.value = null);
    }
    function W(E) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(E)), console.log("[ComfyGit] Auto-refresh setting saved:", E);
    }
    function F() {
      let E = 0;
      for (let R = 0; R < localStorage.length; R++) {
        const Z = localStorage.key(R);
        Z != null && Z.startsWith("comfygit:popup-dismissed:") && E++;
      }
      return E;
    }
    function T() {
      const E = [];
      for (let R = 0; R < localStorage.length; R++) {
        const Z = localStorage.key(R);
        Z != null && Z.startsWith("comfygit:popup-dismissed:") && E.push(Z);
      }
      E.forEach((R) => localStorage.removeItem(R)), S.value = 0, console.log(`[ComfyGit] Reset ${E.length} dismissed popup(s)`);
    }
    return s({
      saveSettings: x,
      resetSettings: q,
      hasChanges: L,
      loadSettings: I
    }), et(I), (E, R) => (a(), r("div", t2, [
      d.value ? (a(), M(Es, {
        key: 0,
        message: "Loading workspace settings..."
      })) : u.value ? (a(), M(Ts, {
        key: 1,
        message: u.value,
        retry: !0,
        onRetry: I
      }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
        C(it, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var Z, Y;
            return [
              t("div", s2, [
                t("div", o2, [
                  R[3] || (R[3] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  R[4] || (R[4] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", n2, f(((Z = v.value) == null ? void 0 : Z.workspace_path) || "Loading..."), 1)
                ]),
                t("div", a2, [
                  R[5] || (R[5] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  R[6] || (R[6] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", l2, f(((Y = v.value) == null ? void 0 : Y.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        C(it, { title: "API CREDENTIALS" }, {
          default: h(() => [
            t("div", i2, [
              C(fn, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  C(Rn, {
                    modelValue: w.value,
                    "onUpdate:modelValue": R[0] || (R[0] = (Z) => w.value = Z),
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
              C(fn, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  C(Rn, {
                    modelValue: p.value,
                    "onUpdate:modelValue": R[1] || (R[1] = (Z) => p.value = Z),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              R[7] || (R[7] = t("div", { class: "setting-hint" }, [
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
              C(fn, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  C(e2, {
                    modelValue: _.value,
                    "onUpdate:modelValue": [
                      R[2] || (R[2] = (Z) => _.value = Z),
                      W
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              C(fn, {
                label: "Dismissed Dependency Popups",
                description: "Reset the 'don't show again' state for missing dependency popups when loading workflows."
              }, {
                default: h(() => [
                  C(Pe, {
                    variant: "secondary",
                    size: "sm",
                    disabled: S.value === 0,
                    onClick: T
                  }, {
                    default: h(() => [
                      b(f(S.value > 0 ? `Reset (${S.value})` : "None Dismissed"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
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
}), kr = /* @__PURE__ */ pe(d2, [["__scopeId", "data-v-cba07f84"]]), u2 = /* @__PURE__ */ ve({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), M(Tt, null, {
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
              (c = s.value) != null && c.hasChanges ? (a(), M(re, {
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
    const s = e, o = k(null), n = k("idle"), l = U(() => s.logs.map((m) => ({
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
    } = at(), c = k("workspace"), d = k([]), u = k(!1), m = k(null), v = k(!1), g = k(null), w = k(null), p = k(!1), _ = U(() => c.value === "workspace" ? g.value : w.value);
    async function S() {
      u.value = !0, m.value = null;
      try {
        c.value === "workspace" ? d.value = await s(void 0, 500) : d.value = await n(void 0, 500);
      } catch (L) {
        m.value = L instanceof Error ? L.message : `Failed to load ${c.value} logs`;
      } finally {
        u.value = !1;
      }
    }
    async function $() {
      try {
        const [L, I] = await Promise.all([
          o(),
          l()
        ]);
        L.exists && (g.value = L.path), I.exists && (w.value = I.path);
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
      S();
    }), et(() => {
      S(), $();
    }), (L, I) => (a(), r(G, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (x) => v.value = !0)
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
            "onUpdate:modelValue": I[1] || (I[1] = (x) => c.value = x),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (a(), M(Es, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : m.value ? (a(), M(Ts, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            d.value.length === 0 ? (a(), M(os, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (a(), M(Cr, {
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
        onClose: I[3] || (I[3] = (x) => v.value = !1)
      }, {
        content: h(() => [...I[4] || (I[4] = [
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
            onClick: I[2] || (I[2] = (x) => v.value = !1)
          }, {
            default: h(() => [...I[5] || (I[5] = [
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
          c.value ? (a(), M(Es, {
            key: 0,
            message: "Loading environment logs..."
          })) : d.value ? (a(), M(Ts, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            i.value.length === 0 ? (a(), M(os, {
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
    return (s, o) => (a(), M(Et, {
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
        const i = new Date(l), d = (/* @__PURE__ */ new Date()).getTime() - i.getTime(), u = Math.floor(d / 6e4), m = Math.floor(d / 36e5), v = Math.floor(d / 864e5);
        return u < 1 ? "just now" : u < 60 ? `${u} ${u === 1 ? "minute" : "minutes"} ago` : m < 24 ? `${m} ${m === 1 ? "hour" : "hours"} ago` : v < 30 ? `${v} ${v === 1 ? "day" : "days"} ago` : i.toLocaleDateString();
      } catch {
        return l;
      }
    }
    return (l, i) => (a(), M(pt, {
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
          e.canDelete ? (a(), M(Pe, {
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
          C(Pe, {
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
    const s = e, o = U(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (n, l) => (a(), r("div", H2, [
      t("div", {
        class: Ee(["progress-fill", e.variant]),
        style: jt({ width: o.value })
      }, null, 6)
    ]));
  }
}), qn = /* @__PURE__ */ pe(K2, [["__scopeId", "data-v-1beb0512"]]), q2 = { class: "task-progress" }, Y2 = { class: "progress-info" }, J2 = { class: "progress-percentage" }, X2 = { class: "progress-message" }, Q2 = {
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
      C(qn, {
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
}), Dn = /* @__PURE__ */ pe(t$, [["__scopeId", "data-v-9d1de66c"]]), s$ = {
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
    ], L = k(null);
    function I() {
      p.value || o("close");
    }
    async function x() {
      const E = c.value.trim();
      if (E) {
        p.value = !0, _.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const R = {
            name: E,
            python_version: d.value,
            comfyui_version: u.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, Z = await l(R);
          Z.status === "started" ? q() : Z.status === "error" && (_.value = {
            progress: 0,
            message: Z.message || "Failed to start creation",
            error: Z.message
          });
        } catch (R) {
          _.value = {
            progress: 0,
            message: R instanceof Error ? R.message : "Unknown error",
            error: R instanceof Error ? R.message : "Unknown error"
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
          }, E.state === "complete" ? (W(), o("created", E.environment_name || c.value.trim(), v.value)) : E.state === "error" ? (W(), _.value.error = E.error || E.message) : E.state === "idle" && p.value && (W(), _.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= w$ && (W(), _.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function W() {
      S && (clearInterval(S), S = null);
    }
    function F() {
      p.value = !1, _.value = { progress: 0, message: "" }, o("close");
    }
    async function T() {
      w.value = !0;
      try {
        g.value = await n();
      } catch (E) {
        console.error("Failed to load ComfyUI releases:", E);
      } finally {
        w.value = !1;
      }
    }
    return et(async () => {
      var E;
      await en(), (E = L.value) == null || E.focus(), T();
    }), to(() => {
      W();
    }), (E, R) => (a(), M(pt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !p.value,
      onClose: I
    }, {
      body: h(() => [
        p.value ? (a(), r("div", m$, [
          t("p", v$, [
            R[11] || (R[11] = b(" Creating environment ", -1)),
            t("strong", null, f(c.value), 1),
            R[12] || (R[12] = b("... ", -1))
          ]),
          C(Dn, {
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
            R[6] || (R[6] = t("label", { class: "form-label" }, "Name", -1)),
            Ye(t("input", {
              ref_key: "nameInput",
              ref: L,
              "onUpdate:modelValue": R[0] || (R[0] = (Z) => c.value = Z),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Qt(x, ["enter"])
            }, null, 544), [
              [Nt, c.value]
            ])
          ]),
          t("div", n$, [
            R[7] || (R[7] = t("label", { class: "form-label" }, "Python Version", -1)),
            Ye(t("select", {
              "onUpdate:modelValue": R[1] || (R[1] = (Z) => d.value = Z),
              class: "form-select"
            }, [
              (a(!0), r(G, null, ge(Ve(xr), (Z) => (a(), r("option", {
                key: Z,
                value: Z
              }, f(Z), 9, a$))), 128))
            ], 512), [
              [ps, d.value]
            ])
          ]),
          t("div", l$, [
            R[8] || (R[8] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ye(t("select", {
              "onUpdate:modelValue": R[2] || (R[2] = (Z) => u.value = Z),
              class: "form-select",
              disabled: w.value
            }, [
              (a(!0), r(G, null, ge(g.value, (Z) => (a(), r("option", {
                key: Z.tag_name,
                value: Z.tag_name
              }, f(Z.name), 9, r$))), 128))
            ], 8, i$), [
              [ps, u.value]
            ])
          ]),
          t("div", c$, [
            R[9] || (R[9] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ye(t("select", {
              "onUpdate:modelValue": R[3] || (R[3] = (Z) => m.value = Z),
              class: "form-select"
            }, [
              (a(!0), r(G, null, ge(Ve(Za), (Z) => (a(), r("option", {
                key: Z,
                value: Z
              }, f(Z) + f(Z === "auto" ? " (detect GPU)" : ""), 9, d$))), 128))
            ], 512), [
              [ps, m.value]
            ])
          ]),
          t("div", u$, [
            t("label", f$, [
              Ye(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": R[4] || (R[4] = (Z) => v.value = Z)
              }, null, 512), [
                [Xo, v.value]
              ]),
              R[10] || (R[10] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        p.value ? (a(), r(G, { key: 1 }, [
          _.value.error ? (a(), M(Pe, {
            key: 0,
            variant: "secondary",
            onClick: F
          }, {
            default: h(() => [...R[15] || (R[15] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), r("span", y$, " Creating environment... "))
        ], 64)) : (a(), r(G, { key: 0 }, [
          C(Pe, {
            variant: "primary",
            disabled: !c.value.trim(),
            onClick: x
          }, {
            default: h(() => [...R[13] || (R[13] = [
              b(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Pe, {
            variant: "secondary",
            onClick: R[5] || (R[5] = (Z) => o("close"))
          }, {
            default: h(() => [...R[14] || (R[14] = [
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
    const n = o, { getEnvironments: l } = at(), i = k([]), c = k(!1), d = k(null), u = k(""), m = k(!1), v = k(!1), g = k(null), w = U(() => {
      if (!u.value.trim()) return i.value;
      const L = u.value.toLowerCase();
      return i.value.filter(
        (I) => {
          var x;
          return I.name.toLowerCase().includes(L) || ((x = I.current_branch) == null ? void 0 : x.toLowerCase().includes(L));
        }
      );
    });
    function p(L, I) {
      v.value = !1, n("created", L, I);
    }
    function _() {
      v.value = !0;
    }
    function S(L) {
      g.value = L;
    }
    function $(L) {
      g.value = null, n("delete", L);
    }
    async function P() {
      c.value = !0, d.value = null;
      try {
        i.value = await l();
      } catch (L) {
        d.value = L instanceof Error ? L.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return et(P), s({
      loadEnvironments: P,
      openCreateModal: _
    }), (L, I) => (a(), r(G, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (x) => m.value = !0)
          }, {
            actions: h(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: h(() => [...I[6] || (I[6] = [
                  b(" Create ", -1)
                ])]),
                _: 1
              }),
              C(re, {
                variant: "secondary",
                size: "sm",
                onClick: P
              }, {
                default: h(() => [...I[7] || (I[7] = [
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
            "onUpdate:modelValue": I[1] || (I[1] = (x) => u.value = x),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (a(), M(Es, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (a(), M(Ts, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            w.value.length ? (a(), M(it, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: h(() => [
                (a(!0), r(G, null, ge(w.value, (x) => (a(), M(x2, {
                  key: x.name,
                  "environment-name": x.name,
                  "is-current": x.is_current,
                  "current-branch": x.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    x.is_current ? y("", !0) : (a(), M(re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => L.$emit("switch", x.name)
                    }, {
                      default: h(() => [...I[8] || (I[8] = [
                        b(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => S(x)
                    }, {
                      default: h(() => [...I[9] || (I[9] = [
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
            w.value.length ? y("", !0) : (a(), M(os, {
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
                    default: h(() => [...I[10] || (I[10] = [
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
        onClose: I[3] || (I[3] = (x) => m.value = !1)
      }, {
        content: h(() => [...I[11] || (I[11] = [
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
            onClick: I[2] || (I[2] = (x) => m.value = !1)
          }, {
            default: h(() => [...I[12] || (I[12] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      g.value ? (a(), M(j2, {
        key: 0,
        environment: g.value,
        "can-delete": i.value.length > 1,
        onClose: I[4] || (I[4] = (x) => g.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : y("", !0),
      v.value ? (a(), M(b$, {
        key: 1,
        onClose: I[5] || (I[5] = (x) => v.value = !1),
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
    return (l, i) => (a(), M(pt, {
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
        C(Pe, {
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
    const o = e, n = s, l = k(!1), i = k(null), c = U(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
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
          C(Pe, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (v) => u.$emit("cancel"))
          }, {
            default: h(() => [...m[7] || (m[7] = [
              b(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          C(Pe, {
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
      i.value ? (a(), M(Xa, {
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
    const { validateExport: s, exportEnvWithForce: o } = at(), n = k(""), l = k(!1), i = k(!1), c = k(!1), d = k(null), u = k(!1), m = k(null), v = k(!1), g = k(!1), w = U(() => l.value ? "Validating..." : i.value ? "Exporting..." : "Export Environment");
    async function p() {
      l.value = !0, d.value = null;
      try {
        const I = await s();
        m.value = I, I.can_export ? I.warnings.models_without_sources.length > 0 ? g.value = !0 : await $() : v.value = !0;
      } catch (I) {
        d.value = {
          status: "error",
          message: I instanceof Error ? I.message : "Validation failed"
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
        const I = await s();
        m.value = I;
      } catch (I) {
        console.error("Re-validation failed:", I);
      }
    }
    async function $() {
      i.value = !0;
      try {
        const I = await o(n.value || void 0);
        d.value = I;
      } catch (I) {
        d.value = {
          status: "error",
          message: I instanceof Error ? I.message : "Export failed"
        };
      } finally {
        i.value = !1;
      }
    }
    async function P() {
      var I;
      if ((I = d.value) != null && I.path)
        try {
          await navigator.clipboard.writeText(d.value.path);
        } catch (x) {
          console.error("Failed to copy path:", x);
        }
    }
    async function L() {
      var I;
      if ((I = d.value) != null && I.path) {
        c.value = !0;
        try {
          const x = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(d.value.path)}`);
          if (!x.ok)
            throw new Error(`Download failed: ${x.statusText}`);
          const q = await x.blob(), W = URL.createObjectURL(q), F = d.value.path.split("/").pop() || "environment-export.tar.gz", T = document.createElement("a");
          T.href = W, T.download = F, document.body.appendChild(T), T.click(), document.body.removeChild(T), URL.revokeObjectURL(W);
        } catch (x) {
          console.error("Failed to download:", x), alert(`Download failed: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          c.value = !1;
        }
      }
    }
    return (I, x) => (a(), r(G, null, [
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
                  C(Rn, {
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
          d.value ? (a(), M(it, {
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
                    d.value.models_without_sources !== void 0 ? (a(), M(ft, {
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
                      onClick: L
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
      v.value && m.value ? (a(), M(Er, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: x[4] || (x[4] = (q) => v.value = !1)
      }, null, 8, ["issues"])) : y("", !0),
      g.value && m.value ? (a(), M(Tr, {
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
    const o = s, n = k(!1), l = k(null), i = k(0), c = U(() => l.value !== null), d = U(() => {
      var $;
      return (($ = l.value) == null ? void 0 : $.name) || "";
    }), u = U(() => {
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
    const s = e, o = U(() => s.workflows.length), n = U(() => s.models.length), l = U(() => s.nodes.length);
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
            e.gitBranch ? (a(), M(ft, {
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
            e.gitCommit ? (a(), M(ft, {
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
}, e3 = {
  key: 0,
  class: "field-error"
}, t3 = { class: "config-field" }, s3 = { class: "strategy-options" }, o3 = ["value", "checked", "onChange"], n3 = { class: "strategy-content" }, a3 = { class: "strategy-label" }, l3 = { class: "strategy-description" }, i3 = { class: "config-field switch-field" }, r3 = { class: "switch-label" }, c3 = ["checked"], d3 = { class: "advanced-section" }, u3 = { class: "advanced-content" }, f3 = { class: "config-field" }, m3 = ["value"], v3 = ["value"], p3 = /* @__PURE__ */ ve({
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
          C(_n, { required: "" }, {
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
          e.nameError ? (a(), r("div", e3, f(e.nameError), 1)) : y("", !0),
          g[4] || (g[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", t3, [
          C(_n, null, {
            default: h(() => [...g[5] || (g[5] = [
              b("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", s3, [
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
              onChange: g[0] || (g[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, c3),
            g[6] || (g[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", d3, [
          g[8] || (g[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", u3, [
            t("div", f3, [
              C(_n, null, {
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
                (a(!0), r(G, null, ge(Ve(Za), (w) => (a(), r("option", {
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
    var We, he, Te, Be;
    const n = e, l = o, { previewTarballImport: i, previewGitImport: c, validateEnvironmentName: d, executeImport: u, executeGitImport: m, getImportProgress: v } = at();
    let g = null;
    const w = k(null), p = k(n.resumeImport ?? !1), _ = k(!1), S = k(!1), $ = k(""), P = k(!1), L = k(null), I = k(""), x = k(null), q = k(!1), W = k(null), F = k(null), T = k({
      name: ((We = n.initialProgress) == null ? void 0 : We.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), E = k(null), R = k({
      message: ((he = n.initialProgress) == null ? void 0 : he.message) ?? "Preparing import...",
      phase: ((Te = n.initialProgress) == null ? void 0 : Te.phase) ?? "",
      progress: ((Be = n.initialProgress) == null ? void 0 : Be.progress) ?? 0,
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
    ], Y = U(() => {
      if (!F.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const $e = F.value;
      return {
        sourceEnvironment: $e.comfyui_version ? `ComfyUI ${$e.comfyui_version}` : "Unknown",
        workflows: $e.workflows.map((ie) => ie.name),
        models: $e.models.map((ie) => ({
          filename: ie.filename,
          size: 0,
          type: ie.relative_path.split("/")[0] || "model"
        })),
        nodes: $e.nodes.map((ie) => ie.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), j = U(() => !P.value && !L.value && F.value && T.value.name.length > 0 && !E.value && (w.value || x.value));
    async function se($e) {
      w.value = $e, P.value = !0, L.value = null, F.value = null;
      try {
        const ie = await i($e);
        F.value = ie;
      } catch (ie) {
        L.value = ie instanceof Error ? ie.message : "Failed to analyze file", console.error("Preview error:", ie);
      } finally {
        P.value = !1;
      }
    }
    function ee() {
      w.value = null, x.value = null, I.value = "", W.value = null, _.value = !1, S.value = !1, $.value = "", F.value = null, L.value = null, T.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, E.value = null, l("source-cleared");
    }
    function A() {
      _e(), ee(), p.value = !1, P.value = !1, q.value = !1, R.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function N() {
      if (I.value.trim()) {
        q.value = !0, W.value = null;
        try {
          const $e = await c(I.value.trim());
          x.value = I.value.trim(), F.value = $e;
        } catch ($e) {
          W.value = $e instanceof Error ? $e.message : "Failed to analyze repository";
        } finally {
          q.value = !1;
        }
      }
    }
    function D($e) {
      try {
        const ie = new URL($e);
        return ie.host + ie.pathname.replace(/\.git$/, "");
      } catch {
        return $e;
      }
    }
    async function we($e) {
      if (!$e) {
        E.value = "Environment name is required";
        return;
      }
      try {
        const ie = await d($e);
        E.value = ie.valid ? null : ie.error || "Invalid name";
      } catch {
        E.value = "Failed to validate name";
      }
    }
    async function J() {
      if (T.value.name && !(!w.value && !x.value)) {
        p.value = !0, _.value = !1, R.value = { message: `Creating environment '${T.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let $e;
          if (w.value)
            $e = await u(
              w.value,
              T.value.name,
              T.value.modelStrategy,
              T.value.torchBackend
            );
          else if (x.value)
            $e = await m(
              x.value,
              T.value.name,
              T.value.modelStrategy,
              T.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          $e.status === "started" ? de() : (S.value = !1, $.value = $e.message, p.value = !1, _.value = !0);
        } catch ($e) {
          S.value = !1, $.value = $e instanceof Error ? $e.message : "Unknown error occurred during import", p.value = !1, _.value = !0;
        }
      }
    }
    async function de() {
      if (g) return;
      const $e = async () => {
        try {
          const je = await v();
          return R.value = {
            message: je.message,
            phase: je.phase || "",
            progress: je.progress ?? (je.state === "importing" ? 50 : 0),
            error: je.error || null
          }, je.state === "complete" ? (_e(), S.value = !0, $.value = `Environment '${je.environment_name}' created successfully`, p.value = !1, _.value = !0, je.environment_name && l("import-complete", je.environment_name, T.value.switchAfterImport), !1) : je.state === "error" ? (_e(), S.value = !1, $.value = je.error || je.message, p.value = !1, _.value = !0, !1) : !0;
        } catch (je) {
          return console.error("Failed to poll import progress:", je), !0;
        }
      };
      await $e() && (g = setInterval(async () => {
        await $e() || _e();
      }, 2e3));
    }
    function _e() {
      g && (clearInterval(g), g = null);
    }
    function Oe($e) {
      return $e < 1024 ? `${$e} B` : $e < 1024 * 1024 ? `${($e / 1024).toFixed(1)} KB` : $e < 1024 * 1024 * 1024 ? `${($e / (1024 * 1024)).toFixed(1)} MB` : `${($e / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return et(async () => {
      try {
        const $e = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", $e.state, $e), $e.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", $e.environment_name), p.value = !0, T.value.name = $e.environment_name || T.value.name || "", R.value = {
          progress: $e.progress ?? 0,
          message: $e.message || "Importing...",
          phase: $e.phase || "",
          error: null
        }, de());
      } catch ($e) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", $e);
      }
    }), s({
      handleReset: A,
      isImporting: p,
      canImport: j
    }), ($e, ie) => {
      var je;
      return a(), r("div", h3, [
        !w.value && !x.value && !p.value ? (a(), r("div", y3, [
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
          t("div", w3, [
            ie[5] || (ie[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", _3, [
              Ye(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ie[0] || (ie[0] = (Re) => I.value = Re),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Qt(N, ["enter"]),
                disabled: q.value
              }, null, 40, b3), [
                [Nt, I.value]
              ]),
              C(re, {
                variant: "primary",
                size: "sm",
                disabled: !I.value.trim() || q.value,
                onClick: N
              }, {
                default: h(() => [
                  b(f(q.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            W.value ? (a(), r("div", k3, f(W.value), 1)) : y("", !0),
            ie[6] || (ie[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || x.value) && !p.value && !_.value ? (a(), r("div", $3, [
          t("div", C3, [
            w.value ? (a(), r("div", x3, [
              ie[8] || (ie[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", S3, [
                t("div", I3, f(w.value.name), 1),
                t("div", E3, f(Oe(w.value.size)), 1)
              ])
            ])) : x.value ? (a(), r("div", T3, [
              ie[10] || (ie[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", P3, [
                t("div", R3, f(D(x.value)), 1),
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
          P.value ? (a(), r("div", M3, [...ie[12] || (ie[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : L.value ? (a(), M(qt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [L.value]
          }, null, 8, ["details"])) : F.value ? (a(), M(HC, {
            key: 2,
            "source-environment": Y.value.sourceEnvironment,
            workflows: Y.value.workflows,
            models: Y.value.models,
            nodes: Y.value.nodes,
            "git-branch": Y.value.gitBranch,
            "git-commit": Y.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          F.value ? (a(), M(g3, {
            key: 3,
            name: T.value.name,
            "onUpdate:name": ie[1] || (ie[1] = (Re) => T.value.name = Re),
            "model-strategy": T.value.modelStrategy,
            "onUpdate:modelStrategy": ie[2] || (ie[2] = (Re) => T.value.modelStrategy = Re),
            "torch-backend": T.value.torchBackend,
            "onUpdate:torchBackend": ie[3] || (ie[3] = (Re) => T.value.torchBackend = Re),
            "switch-after-import": T.value.switchAfterImport,
            "onUpdate:switchAfterImport": ie[4] || (ie[4] = (Re) => T.value.switchAfterImport = Re),
            "name-error": E.value,
            onValidateName: we
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          T.value.modelStrategy === "skip" && ((je = F.value) != null && je.models_needing_download) ? (a(), M(qt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${F.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", D3, [
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
              onClick: J
            }, {
              default: h(() => [...ie[14] || (ie[14] = [
                b(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (a(), r("div", L3, [
          t("p", O3, [
            ie[15] || (ie[15] = b(" Importing environment ", -1)),
            t("strong", null, f(T.value.name), 1),
            ie[16] || (ie[16] = b("... ", -1))
          ]),
          C(Dn, {
            progress: R.value.progress,
            message: R.value.message,
            "current-phase": R.value.phase,
            variant: R.value.error ? "error" : "default",
            "show-steps": !0,
            steps: Z
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          R.value.error ? y("", !0) : (a(), r("p", A3, " This may take several minutes. Please wait... ")),
          R.value.error ? (a(), r("div", N3, [
            t("p", U3, f(R.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), r("div", z3, [
          t("div", {
            class: Ee(["complete-icon", S.value ? "success" : "error"])
          }, f(S.value ? "✓" : "✕"), 3),
          t("div", F3, [
            t("div", B3, f(S.value ? "Import Successful" : "Import Failed"), 1),
            t("div", V3, f($.value), 1)
          ]),
          t("div", W3, [
            C(re, {
              variant: "primary",
              size: "md",
              onClick: A
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
}), Pr = /* @__PURE__ */ pe(G3, [["__scopeId", "data-v-72cbc04e"]]), j3 = /* @__PURE__ */ ve({
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
}), H3 = /* @__PURE__ */ pe(j3, [["__scopeId", "data-v-e13bfe76"]]), mn = io(), K3 = 5e3, no = k([]), ca = k(!1), da = k(null);
let Eo = null;
async function vn(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function Rr(e) {
  const s = U(
    () => no.value.filter((p) => p.status === "running")
  ), o = U(
    () => no.value.filter((p) => p.status === "deploying")
  ), n = U(
    () => no.value.filter((p) => p.status === "stopped")
  ), l = U(
    () => s.value.length + o.value.length
  ), i = U(() => {
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
      if (!mn) {
        const _ = await vn("/v2/comfygit/deploy/instances");
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
      if (!mn) {
        const _ = d(p, "stop"), S = await vn(_, { method: "POST" });
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
      if (!mn) {
        const _ = d(p, "start"), S = await vn(_, { method: "POST" });
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
      if (!mn) {
        const _ = d(p, "terminate"), S = await vn(_, { method: "DELETE" });
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
    Eo || (Eo = window.setInterval(c, K3));
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
const q3 = { class: "instance-header" }, Y3 = { class: "provider-badge" }, J3 = { class: "instance-name" }, X3 = {
  key: 0,
  class: "spinner"
}, Q3 = { class: "instance-details" }, Z3 = {
  key: 0,
  class: "detail"
}, ex = {
  key: 1,
  class: "detail instance-url"
}, tx = {
  key: 2,
  class: "detail"
}, sx = {
  key: 3,
  class: "detail"
}, ox = {
  key: 4,
  class: "detail total-cost"
}, nx = {
  key: 0,
  class: "deployment-progress"
}, ax = { class: "progress-message" }, lx = { class: "instance-actions" }, ix = /* @__PURE__ */ ve({
  __name: "InstanceCard",
  props: {
    instance: {},
    isLoading: { type: Boolean }
  },
  emits: ["stop", "start", "terminate"],
  setup(e) {
    const s = e, o = U(() => s.instance.provider === "custom" && s.instance.worker_name ? s.instance.worker_name : {
      runpod: "RunPod",
      vast: "Vast.ai",
      custom: "Custom"
    }[s.instance.provider] || s.instance.provider), n = U(() => ({
      deploying: "Deploying",
      starting: "Starting",
      running: "Running",
      stopped: "Stopped",
      error: "Error",
      terminated: "Terminated"
    })[s.instance.status] || s.instance.status), l = U(() => `status-${s.instance.status}`);
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
      t("div", q3, [
        t("span", Y3, f(o.value), 1),
        t("span", J3, f(e.instance.name), 1),
        t("span", {
          class: Ee(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (a(), r("span", X3)) : y("", !0),
          b(" " + f(n.value), 1)
        ], 2)
      ]),
      t("div", Q3, [
        e.instance.gpu_type ? (a(), r("span", Z3, f(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (a(), r("span", ex, f(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (a(), r("span", tx, f(d(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (a(), r("span", sx, "$" + f(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (a(), r("span", ox, "$" + f(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (a(), r("div", nx, [
        t("div", ax, f(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (a(), M(qn, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", lx, [
        e.instance.status === "running" && e.instance.comfyui_url ? (a(), M(re, {
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
        e.instance.console_url && e.instance.provider !== "custom" ? (a(), M(re, {
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
        e.instance.status === "running" ? (a(), M(re, {
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
        e.instance.status === "stopped" ? (a(), M(re, {
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
}), rx = /* @__PURE__ */ pe(ix, [["__scopeId", "data-v-746c3894"]]), cx = { class: "instances-tab" }, dx = { class: "instances-header" }, ux = {
  key: 0,
  class: "loading-state"
}, fx = {
  key: 1,
  class: "empty-state"
}, mx = {
  key: 2,
  class: "instances-list"
}, vx = /* @__PURE__ */ ve({
  __name: "InstancesTab",
  props: {
    instances: {},
    isLoading: { type: Boolean },
    actionLoadingId: {}
  },
  emits: ["refresh", "stop", "start", "terminate"],
  setup(e) {
    const s = e, o = U(() => {
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
    return (n, l) => (a(), r("div", cx, [
      t("div", dx, [
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
      e.isLoading && e.instances.length === 0 ? (a(), r("div", ux, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        b(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (a(), r("div", fx, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (a(), r("div", mx, [
        (a(!0), r(G, null, ge(o.value, (i) => (a(), M(rx, {
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
}), px = /* @__PURE__ */ pe(vx, [["__scopeId", "data-v-ba614fc3"]]), gx = { class: "remote-header" }, hx = { class: "remote-info" }, yx = { class: "remote-icon" }, wx = { class: "remote-name" }, _x = {
  key: 0,
  class: "default-badge"
}, bx = {
  key: 1,
  class: "sync-badge"
}, kx = {
  key: 0,
  class: "ahead"
}, $x = {
  key: 1,
  class: "behind"
}, Cx = {
  key: 1,
  class: "synced"
}, xx = ["href"], Sx = {
  key: 1,
  class: "remote-url-text"
}, Ix = { class: "remote-actions" }, Ex = /* @__PURE__ */ ve({
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
    const s = e, o = U(() => s.remote.is_default), n = U(() => {
      const i = s.remote.fetch_url, c = i.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return c ? `https://${c[1]}/${c[2]}` : i.startsWith("https://") || i.startsWith("http://") ? i.replace(/\.git$/, "") : null;
    }), l = U(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (i, c) => (a(), r("div", {
      class: Ee(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", gx, [
        t("div", hx, [
          t("span", yx, f(o.value ? "🔗" : "🌐"), 1),
          t("span", wx, f(e.remote.name), 1),
          o.value ? (a(), r("span", _x, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", bx, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(G, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", kx, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", $x, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", Cx, "✓ synced"))
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
        }, f(l.value), 9, xx)) : (a(), r("span", Sx, f(l.value), 1))
      ]),
      t("div", Ix, [
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
        e.syncStatus && e.syncStatus.ahead > 0 ? (a(), M(re, {
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
}), Mr = /* @__PURE__ */ pe(Ex, [["__scopeId", "data-v-d687d161"]]), Tx = { class: "runpod-tab" }, Px = { class: "api-key-card" }, Rx = { class: "api-key-row" }, Mx = { class: "api-key-input-wrapper" }, Dx = ["type", "disabled"], Lx = ["title"], Ox = { class: "status-icon" }, Ax = { class: "status-text" }, Nx = {
  key: 0,
  class: "credit-balance"
}, Ux = { class: "config-card" }, zx = { class: "config-row" }, Fx = ["disabled"], Bx = {
  key: 0,
  value: ""
}, Vx = {
  key: 1,
  value: "",
  disabled: ""
}, Wx = ["value", "disabled"], Gx = { class: "config-row" }, jx = {
  key: 0,
  class: "loading-inline"
}, Hx = { class: "no-volumes-state" }, Kx = { class: "no-volumes-text" }, qx = ["value"], Yx = { class: "config-row" }, Jx = ["disabled"], Xx = {
  key: 0,
  value: ""
}, Qx = {
  key: 1,
  value: ""
}, Zx = {
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
    } = at(), P = k(!1), L = k(""), I = k(!1), x = k(!1), q = k(null), W = k(null), F = k(""), T = k(""), E = k(""), R = k("SECURE"), Z = k("ON_DEMAND"), Y = k("my-comfyui-deploy"), j = k([]), se = k({}), ee = k(!1), A = k(null), N = k(null), D = k(null), we = k([]), J = k(!1), de = k([]), _e = k(!1), Oe = k([]), We = k(!1), he = k(null), Te = k(!1), Be = k(!1), $e = k(null), ie = k(!1), je = k(null), Re = k(null), O = k(null), B = k(!1), ne = k(null), le = k(!1), fe = k(!1), me = U(() => de.value.find((ke) => ke.id === T.value) || null), xe = U(() => F.value ? de.value.filter((ke) => ke.data_center_id === F.value) : de.value), Se = U(() => Oe.value.filter((ke) => ke.available)), ae = U(() => A.value && se.value[A.value] || null), ue = U(() => {
      if (!A.value) return null;
      const ke = j.value.find((Q) => Q.name === A.value);
      return (ke == null ? void 0 : ke.fetch_url) || null;
    }), Le = U(() => I.value && T.value && E.value && ue.value && !Be.value && !B.value), Ie = (ke) => {
      const Q = Oe.value.find((ht) => ht.id === E.value);
      if (!Q) return "0.00";
      if (ke === "SECURE") return (Q.securePrice ?? 0).toFixed(2);
      if (ke === "COMMUNITY") return (Q.communityPrice ?? 0).toFixed(2);
      const Ke = R.value === "SECURE";
      return ke === "ON_DEMAND" ? Ke ? (Q.securePrice ?? 0).toFixed(2) : (Q.communityPrice ?? 0).toFixed(2) : Ke ? (Q.secureSpotPrice ?? 0).toFixed(2) : (Q.communitySpotPrice ?? 0).toFixed(2);
    }, te = U(() => {
      const ke = Oe.value.find((as) => as.id === E.value), Q = de.value.find((as) => as.id === T.value);
      if (!ke) return null;
      const Ke = R.value === "SECURE", ht = Z.value === "SPOT";
      let Kt;
      ht ? Kt = Ke ? ke.secureSpotPrice ?? 0 : ke.communitySpotPrice ?? 0 : Kt = Ke ? ke.securePrice ?? 0 : ke.communityPrice ?? 0;
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
        const ke = await w();
        j.value = ke.remotes, await Promise.all(
          ke.remotes.map(async (Ke) => {
            const ht = await p(Ke.name);
            ht && (se.value[Ke.name] = ht);
          })
        );
        const Q = ke.remotes.find((Ke) => Ke.is_default);
        Q ? A.value = Q.name : ke.remotes.length > 0 && (A.value = ke.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        ee.value = !1;
      }
    }
    async function be(ke) {
      N.value = ke;
      try {
        await _(ke);
        const Q = await p(ke);
        Q && (se.value[ke] = Q), o("toast", `Fetched from ${ke}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        N.value = null;
      }
    }
    async function ye(ke) {
      D.value = ke;
      try {
        await S(ke, { force: !1 });
        const Q = await p(ke);
        Q && (se.value[ke] = Q), o("toast", `Pushed to ${ke}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        D.value = null;
      }
    }
    function V(ke) {
      A.value = ke;
    }
    async function z() {
      if (L.value) {
        x.value = !0, q.value = null;
        try {
          const ke = await l(L.value, !0);
          ke.status === "success" ? (I.value = !0, W.value = ke.credit_balance ?? null, q.value = { type: "success", message: ke.message }, await K()) : q.value = { type: "error", message: ke.message };
        } catch (ke) {
          q.value = {
            type: "error",
            message: ke instanceof Error ? ke.message : "Connection test failed"
          };
        } finally {
          x.value = !1;
        }
      }
    }
    async function ce() {
      try {
        await v(), L.value = "", I.value = !1, q.value = null, W.value = null, we.value = [], F.value = "", de.value = [], T.value = "", Oe.value = [], E.value = "", he.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function Fe() {
      _e.value = !0, J.value = !0;
      try {
        const ke = await i();
        de.value = ke.volumes;
        const Q = /* @__PURE__ */ new Map();
        for (const Ke of ke.volumes)
          Ke.data_center_id && !Q.has(Ke.data_center_id) && Q.set(Ke.data_center_id, {
            id: Ke.data_center_id,
            name: Ke.data_center_name || Ke.data_center_id,
            available: !0
          });
        if (ke.volumes.length === 0) {
          const Ke = await $();
          we.value = Ke.data_centers;
        } else
          we.value = Array.from(Q.values());
        if (de.value.length > 0) {
          const Ke = de.value[0];
          T.value = Ke.id, Ke.data_center_id && (F.value = Ke.data_center_id, await Qe(Ke.data_center_id));
        } else we.value.length > 0 && (F.value = we.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        _e.value = !1, J.value = !1;
      }
    }
    async function Qe(ke) {
      We.value = !0;
      try {
        const Q = await c(ke);
        Oe.value = Q.gpu_types;
        const Ke = Oe.value.find((ht) => ht.available);
        Ke ? E.value = Ke.id : E.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        We.value = !1;
      }
    }
    Ct(F, async (ke) => {
      if (!ke || _e.value) return;
      const Q = de.value.find((Ke) => Ke.id === T.value);
      Q && Q.data_center_id !== ke && (T.value = ""), await Qe(ke);
    }), Ct(T, async (ke) => {
      if (!ke) {
        Oe.value = [], E.value = "";
        return;
      }
      if (_e.value) return;
      const Q = de.value.find((Ke) => Ke.id === ke);
      Q && Q.data_center_id !== F.value ? F.value = Q.data_center_id : Q && await Qe(Q.data_center_id);
    });
    async function vt() {
      Te.value = !0;
      try {
        he.value = await n();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        Te.value = !1;
      }
    }
    async function lt() {
      if (!(!E.value || !T.value)) {
        B.value = !0, $e.value = null;
        try {
          const ke = await g();
          ne.value = ke, ke.can_export ? ke.warnings.models_without_sources.length > 0 ? fe.value = !0 : await Ut() : le.value = !0;
        } catch (ke) {
          $e.value = {
            status: "error",
            message: ke instanceof Error ? ke.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          B.value = !1;
        }
      }
    }
    async function ut() {
      fe.value = !1, await Ut();
    }
    async function Rt() {
      try {
        const ke = await g();
        ne.value = ke;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function Ut() {
      Be.value = !0;
      try {
        let ke;
        if (Z.value === "SPOT") {
          const Ke = Oe.value.find((ht) => ht.id === E.value);
          Ke && (ke = R.value === "SECURE" ? Ke.secureSpotPrice : Ke.communitySpotPrice);
        }
        const Q = await d({
          gpu_type_id: E.value,
          pod_name: Y.value || "my-comfyui-deploy",
          network_volume_id: T.value,
          cloud_type: R.value,
          pricing_type: Z.value,
          spot_bid: ke,
          import_source: ue.value
        });
        $e.value = Q, Q.status === "success" && Q.pod_id ? (je.value = Q.pod_id, ie.value = !0, Ht(Q.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", Q.message, "error");
      } catch (ke) {
        $e.value = {
          status: "error",
          message: ke instanceof Error ? ke.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        Be.value = !1;
      }
    }
    function Ht(ke) {
      Ps(ke), O.value = window.setInterval(() => Ps(ke), 3e3);
    }
    function Bs() {
      O.value && (clearInterval(O.value), O.value = null);
    }
    async function Ps(ke) {
      try {
        const Q = await u(ke);
        Re.value = Q, (Q.phase === "READY" || Q.phase === "ERROR" || Q.phase === "STOPPED") && (Bs(), Q.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (Q) {
        console.error("Failed to poll deployment status:", Q);
      }
    }
    function so() {
      ie.value = !1, Bs(), je.value = null, Re.value = null;
    }
    function ko() {
      var ke;
      (ke = Re.value) != null && ke.comfyui_url && window.open(Re.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function $o(ke) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[ke || ""] || "Initializing...";
    }
    function Co(ke) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[ke || ""] ?? 10;
    }
    return et(async () => {
      try {
        const ke = await m(!0);
        ke.has_key && ke.key_preview && (L.value = `****${ke.key_preview}`, ke.valid ? (I.value = !0, W.value = ke.credit_balance ?? null, q.value = { type: "success", message: "Connected to RunPod" }, await K()) : ke.error && (q.value = { type: "error", message: ke.error }));
      } catch {
      }
    }), to(() => {
      Bs();
    }), (ke, Q) => {
      var Ke, ht, Kt, gs, hs, as;
      return a(), r(G, null, [
        t("div", Tx, [
          C(it, { title: "RUNPOD API KEY" }, {
            default: h(() => [
              t("div", Px, [
                t("div", Rx, [
                  t("div", Mx, [
                    Ye(t("input", {
                      "onUpdate:modelValue": Q[0] || (Q[0] = (Ae) => L.value = Ae),
                      type: P.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: I.value
                    }, null, 8, Dx), [
                      [Hn, L.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: Q[1] || (Q[1] = (Ae) => P.value = !P.value),
                      title: P.value ? "Hide key" : "Show key"
                    }, f(P.value ? "👁" : "👁‍🗨"), 9, Lx)
                  ]),
                  I.value ? y("", !0) : (a(), M(re, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: x.value,
                    disabled: !L.value || x.value,
                    onClick: z
                  }, {
                    default: h(() => [...Q[16] || (Q[16] = [
                      b(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  I.value ? (a(), M(re, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: ce
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
                  t("span", Ox, f(q.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", Ax, f(q.value.message), 1),
                  W.value !== null ? (a(), r("span", Nx, " $" + f(W.value.toFixed(2)) + " credit ", 1)) : y("", !0)
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
          I.value ? (a(), M(it, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: h(() => [
              t("div", Ux, [
                t("div", zx, [
                  Q[19] || (Q[19] = t("label", { class: "config-label" }, "Region", -1)),
                  Ye(t("select", {
                    "onUpdate:modelValue": Q[2] || (Q[2] = (Ae) => F.value = Ae),
                    class: "config-select",
                    disabled: J.value
                  }, [
                    J.value ? (a(), r("option", Bx, "Loading...")) : F.value ? y("", !0) : (a(), r("option", Vx, "Select a region")),
                    (a(!0), r(G, null, ge(we.value, (Ae) => (a(), r("option", {
                      key: Ae.id,
                      value: Ae.id,
                      disabled: !Ae.available
                    }, f(Ae.id) + " (" + f(Ae.name) + ")" + f(Ae.available ? "" : " [Unavailable]"), 9, Wx))), 128))
                  ], 8, Fx), [
                    [ps, F.value]
                  ])
                ]),
                t("div", Gx, [
                  Q[24] || (Q[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  _e.value ? (a(), r("div", jx, "Loading volumes...")) : xe.value.length === 0 ? (a(), r(G, { key: 1 }, [
                    t("div", Hx, [
                      Q[20] || (Q[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", Kx, "No volumes in " + f(F.value || "this region"), 1)
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
                      "onUpdate:modelValue": Q[3] || (Q[3] = (Ae) => T.value = Ae),
                      class: "config-select"
                    }, [
                      (a(!0), r(G, null, ge(xe.value, (Ae) => (a(), r("option", {
                        key: Ae.id,
                        value: Ae.id
                      }, f(Ae.name) + " (" + f(Ae.size_gb) + "GB) ", 9, qx))), 128))
                    ], 512), [
                      [ps, T.value]
                    ]),
                    Q[23] || (Q[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", Yx, [
                  Q[25] || (Q[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  Ye(t("select", {
                    "onUpdate:modelValue": Q[4] || (Q[4] = (Ae) => E.value = Ae),
                    class: "config-select",
                    disabled: We.value || !T.value
                  }, [
                    T.value ? We.value ? (a(), r("option", Qx, "Loading GPUs...")) : Se.value.length === 0 ? (a(), r("option", Zx, "No GPUs available in this region")) : y("", !0) : (a(), r("option", Xx, "Select a volume first")),
                    (a(!0), r(G, null, ge(Se.value, (Ae) => (a(), r("option", {
                      key: Ae.id,
                      value: Ae.id
                    }, f(Ae.displayName) + " (" + f(Ae.memoryInGb) + "GB) - $" + f(R.value === "SECURE" ? (Ae.securePrice ?? 0).toFixed(2) : (Ae.communityPrice ?? 0).toFixed(2)) + "/hr " + f(Ae.stockStatus ? `[${Ae.stockStatus}]` : ""), 9, e5))), 128))
                  ], 8, Jx), [
                    [ps, E.value]
                  ])
                ]),
                t("div", t5, [
                  Q[26] || (Q[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", s5, [
                    t("label", o5, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[5] || (Q[5] = (Ae) => R.value = Ae),
                        value: "SECURE"
                      }, null, 512), [
                        [Jt, R.value]
                      ]),
                      t("span", n5, "Secure ($" + f(Ie("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", a5, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[6] || (Q[6] = (Ae) => R.value = Ae),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [Jt, R.value]
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
                        "onUpdate:modelValue": Q[7] || (Q[7] = (Ae) => Z.value = Ae),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Jt, Z.value]
                      ]),
                      t("span", d5, "On-Demand ($" + f(Ie("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", u5, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[8] || (Q[8] = (Ae) => Z.value = Ae),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [Jt, Z.value]
                      ]),
                      t("span", f5, "Spot ($" + f(Ie("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", m5, [
                  Q[28] || (Q[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  Ye(t("input", {
                    "onUpdate:modelValue": Q[9] || (Q[9] = (Ae) => Y.value = Ae),
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
          I.value ? (a(), M(it, {
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
                  onClick: Q[10] || (Q[10] = (Ae) => o("navigate", "remotes"))
                }, {
                  default: h(() => [...Q[29] || (Q[29] = [
                    b(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (a(), r(G, { key: 2 }, [
                t("div", g5, [
                  (a(!0), r(G, null, ge(j.value, (Ae) => (a(), M(Mr, {
                    key: Ae.name,
                    remote: Ae,
                    "sync-status": se.value[Ae.name],
                    "is-selected": A.value === Ae.name,
                    "is-fetching": N.value === Ae.name,
                    "is-pushing": D.value === Ae.name,
                    onFetch: be,
                    onPush: ye,
                    onSelect: V
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                ae.value && ae.value.ahead > 0 ? (a(), r("div", h5, [
                  Q[31] || (Q[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", y5, [
                    t("strong", null, f(ae.value.ahead) + " unpushed commit" + f(ae.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + f(A.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  C(re, {
                    variant: "primary",
                    size: "xs",
                    loading: D.value === A.value,
                    onClick: Q[11] || (Q[11] = (Ae) => A.value && ye(A.value))
                  }, {
                    default: h(() => [
                      b(" Push to " + f(A.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", w5, [
                  C(re, {
                    variant: "link",
                    size: "xs",
                    onClick: Q[12] || (Q[12] = (Ae) => o("navigate", "remotes"))
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
          I.value ? (a(), M(it, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: h(() => [
              t("div", _5, [
                Te.value ? (a(), r("div", b5, "Loading environment summary...")) : he.value ? (a(), r(G, { key: 1 }, [
                  t("div", k5, [
                    Q[33] || (Q[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", $5, f(he.value.comfyui_version), 1)
                  ]),
                  t("div", C5, [
                    Q[34] || (Q[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", x5, f(he.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", S5, [
                    Q[35] || (Q[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", I5, f(he.value.model_count) + " models", 1)
                  ]),
                  he.value.models_with_sources > 0 ? (a(), r("div", E5, [
                    t("span", T5, "└─ " + f(he.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  he.value.models_without_sources > 0 ? (a(), r("div", P5, [
                    t("span", R5, "└─ " + f(he.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", M5, [
                    Q[36] || (Q[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", D5, f(he.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", L5, [
                    Q[37] || (Q[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", O5, "~" + f(he.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          I.value && te.value ? (a(), M(it, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: h(() => {
              var Ae, ls;
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
                        t("span", null, f(((Ae = Oe.value.find((oe) => oe.id === E.value)) == null ? void 0 : Ae.displayName) || "GPU") + " (" + f(((ls = Oe.value.find((oe) => oe.id === E.value)) == null ? void 0 : ls.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", Y5, [
                        t("span", null, "Region: " + f(F.value), 1)
                      ]),
                      me.value ? (a(), r("div", J5, [
                        t("span", null, "Volume: " + f(me.value.name), 1)
                      ])) : y("", !0),
                      Z.value === "SPOT" ? (a(), r("div", X5, [...Q[44] || (Q[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          I.value ? (a(), r("div", Q5, [
            C(re, {
              variant: "primary",
              size: "md",
              loading: B.value || Be.value,
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
                b(" " + f(B.value ? "Validating..." : Be.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          $e.value ? (a(), M(it, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: h(() => [
              C(Et, {
                status: $e.value.status === "success" ? "synced" : "broken"
              }, eo({
                icon: h(() => [
                  b(f($e.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  b(f($e.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: h(() => [
                  b(f($e.value.message), 1)
                ]),
                actions: h(() => [
                  C(re, {
                    variant: "ghost",
                    size: "xs",
                    onClick: Q[13] || (Q[13] = (Ae) => $e.value = null)
                  }, {
                    default: h(() => [...Q[47] || (Q[47] = [
                      b(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                $e.value.pod_id ? {
                  name: "details",
                  fn: h(() => [
                    C(ft, {
                      label: "Pod ID:",
                      value: $e.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : y("", !0)
        ]),
        ie.value ? (a(), M(pt, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((Ke = Re.value) == null ? void 0 : Ke.phase) === "READY" || ((ht = Re.value) == null ? void 0 : ht.phase) === "ERROR" || ((Kt = Re.value) == null ? void 0 : Kt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: so
        }, eo({
          body: h(() => {
            var Ae, ls, oe, H, De, He, ot, mt, Mt, is, Vs, Ws;
            return [
              t("div", Z5, [
                t("div", e8, [
                  t("div", {
                    class: Ee(["phase-icon", (ls = (Ae = Re.value) == null ? void 0 : Ae.phase) == null ? void 0 : ls.toLowerCase()])
                  }, [
                    ((oe = Re.value) == null ? void 0 : oe.phase) === "READY" ? (a(), r("span", t8, "✓")) : ((H = Re.value) == null ? void 0 : H.phase) === "ERROR" ? (a(), r("span", s8, "✕")) : ((De = Re.value) == null ? void 0 : De.phase) === "STOPPED" ? (a(), r("span", o8, "○")) : (a(), r("span", n8, "⟳"))
                  ], 2),
                  t("div", a8, [
                    t("div", l8, f($o((He = Re.value) == null ? void 0 : He.phase)), 1),
                    t("div", i8, f(((ot = Re.value) == null ? void 0 : ot.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                C(qn, {
                  progress: Co((mt = Re.value) == null ? void 0 : mt.phase),
                  variant: ((Mt = Re.value) == null ? void 0 : Mt.phase) === "ERROR" ? "error" : ((is = Re.value) == null ? void 0 : is.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Vs = Re.value) == null ? void 0 : Vs.phase) === "READY" ? (a(), r("div", r8, [
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
                  (Ws = Re.value) != null && Ws.console_url ? (a(), r("a", {
                    key: 0,
                    href: Re.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, d8)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((gs = Re.value) == null ? void 0 : gs.phase) === "READY" || ((hs = Re.value) == null ? void 0 : hs.phase) === "ERROR" || ((as = Re.value) == null ? void 0 : as.phase) === "STOPPED" ? {
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
        le.value && ne.value ? (a(), M(Er, {
          key: 1,
          issues: ne.value.blocking_issues,
          onClose: Q[14] || (Q[14] = (Ae) => le.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        fe.value && ne.value ? (a(), M(Tr, {
          key: 2,
          models: ne.value.warnings.models_without_sources,
          onConfirm: ut,
          onCancel: Q[15] || (Q[15] = (Ae) => fe.value = !1),
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
          e.worker.status === "online" ? (a(), M(re, {
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
    }), i = k(!1), c = k(!1), d = k(!1), u = k(null), m = U(() => l.host && l.port && l.apiKey), v = U(() => l.name && l.host && l.port && l.apiKey);
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
    return (p, _) => (a(), M(pt, {
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
                  [Hn, l.apiKey]
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
    return (w, p) => (a(), M(pt, {
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
                  [Hn, i.value]
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
          l.value ? (a(), M(re, {
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
          l.value ? (a(), M(re, {
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
    } = at(), v = k([]), g = k({}), w = k(!1), p = k(null), _ = k(null), S = k(null), $ = k(o.worker.mode || "native"), P = k(""), L = k(null), I = k(!1), x = U(() => p.value && g.value[p.value] || null), q = U(() => {
      if (!p.value) return null;
      const j = v.value.find((se) => se.name === p.value);
      return (j == null ? void 0 : j.fetch_url) || null;
    }), W = U(() => q.value && !I.value);
    async function F() {
      w.value = !0;
      try {
        const j = await l();
        v.value = j.remotes, await Promise.all(
          j.remotes.map(async (ee) => {
            const A = await i(ee.name);
            A && (g.value[ee.name] = A);
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
    async function T() {
      try {
        L.value = await u();
      } catch {
      }
    }
    async function E(j) {
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
    async function R(j) {
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
    function Z(j) {
      p.value = j;
    }
    async function Y() {
      if (q.value) {
        I.value = !0;
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
          I.value = !1;
        }
      }
    }
    return et(() => {
      F(), T();
    }), (j, se) => (a(), M(pt, {
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
              (a(!0), r(G, null, ge(v.value, (ee) => (a(), M(Mr, {
                key: ee.name,
                remote: ee,
                "sync-status": g.value[ee.name],
                "is-selected": p.value === ee.name,
                "is-fetching": _.value === ee.name,
                "is-pushing": S.value === ee.name,
                onFetch: E,
                onPush: R,
                onSelect: Z
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
          L.value ? (a(), r("div", kS, [
            se[12] || (se[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", $S, " ComfyUI: " + f(L.value.comfyui_version) + " • " + f(L.value.node_count) + " nodes • " + f(L.value.model_count) + " models • " + f(L.value.workflow_count) + " workflows ", 1)
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
              onClick: se[3] || (se[3] = (ee) => p.value && R(p.value))
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
            loading: I.value,
            disabled: !W.value || I.value,
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
        const F = await n();
        d.value = F.workers;
      } catch (F) {
        o("toast", F instanceof Error ? F.message : "Failed to load workers", "error");
      } finally {
        m.value = !1;
      }
    }
    async function P() {
      v.value = !0, S.value = null;
      try {
        const F = await c(), T = F.discovered.filter(
          (E) => !d.value.some((R) => R.host === E.host && R.port === E.port)
        );
        u.value = T, T.length > 0 ? p.value = !0 : F.discovered.length > 0 ? S.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : S.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (F) {
        o("toast", F instanceof Error ? F.message : "Network scan failed", "error");
      } finally {
        v.value = !1;
      }
    }
    async function L(F) {
      try {
        await l(F), o("toast", `Worker '${F.name}' added`, "success"), w.value = !1, await $();
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to add worker", "error");
      }
    }
    async function I(F) {
      try {
        await l(F), o("toast", `Worker '${F.name}' added`, "success"), p.value = !1, await $();
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to add worker", "error");
      }
    }
    async function x(F) {
      g.value = F;
      try {
        await i(F), o("toast", `Worker '${F}' removed`, "success"), await $();
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to remove worker", "error");
      } finally {
        g.value = null;
      }
    }
    function q(F) {
      _.value = F;
    }
    function W() {
      _.value = null, o("deployed");
    }
    return et(() => {
      $();
    }), (F, T) => (a(), r("div", TS, [
      t("div", PS, [
        T[8] || (T[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", RS, [
          C(re, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: P
          }, {
            default: h(() => [...T[6] || (T[6] = [
              b(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          C(re, {
            variant: "secondary",
            size: "xs",
            onClick: T[0] || (T[0] = (E) => w.value = !0)
          }, {
            default: h(() => [...T[7] || (T[7] = [
              b(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("div", MS, [
        m.value && d.value.length === 0 ? (a(), r("div", DS, [...T[9] || (T[9] = [
          t("span", { class: "spinner" }, null, -1),
          b(" Loading workers... ", -1)
        ])])) : d.value.length === 0 ? (a(), r("div", LS, [...T[10] || (T[10] = [
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
          (a(!0), r(G, null, ge(d.value, (E) => (a(), M(T8, {
            key: E.name,
            worker: E,
            "is-action-loading": g.value === E.name,
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
          onClick: T[1] || (T[1] = (E) => S.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (a(), M(dS, {
        key: 1,
        workers: u.value,
        onClose: T[2] || (T[2] = (E) => p.value = !1),
        onAdd: I
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (a(), M(j8, {
        key: 2,
        onClose: T[3] || (T[3] = (E) => w.value = !1),
        onAdd: L
      })) : y("", !0),
      _.value ? (a(), M(ES, {
        key: 3,
        worker: _.value,
        onClose: T[4] || (T[4] = (E) => _.value = null),
        onToast: T[5] || (T[5] = (E, R) => o("toast", E, R)),
        onDeployed: W
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
    const o = s, { getToken: n, setToken: l, clearToken: i, hasToken: c } = BS(), { getRemotes: d, testGitAuth: u } = at(), m = k(""), v = k(!1), g = k(!1), w = k(null), p = k(!1), _ = U(() => c());
    et(async () => {
      var I;
      const L = n();
      L && (m.value = L);
      try {
        const q = (I = (await d()).remotes) == null ? void 0 : I.find((W) => W.name === "origin");
        q && Dr(q.url) && (p.value = !0);
      } catch {
      }
    });
    async function S() {
      if (m.value) {
        g.value = !0, w.value = null;
        try {
          const L = await u(m.value);
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
    return (L, I) => (a(), M(pt, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: I[2] || (I[2] = (x) => L.$emit("close"))
    }, {
      body: h(() => [
        t("div", VS, [
          t("div", WS, [
            I[8] || (I[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            I[9] || (I[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (a(), r("div", GS, [...I[3] || (I[3] = [
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
              I[4] || (I[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", HS, [
                Ye(t("input", {
                  "onUpdate:modelValue": I[0] || (I[0] = (x) => m.value = x),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, KS), [
                  [Hn, m.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: I[1] || (I[1] = (x) => v.value = !v.value)
                }, f(v.value ? "Hide" : "Show"), 1)
              ]),
              I[5] || (I[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
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
                default: h(() => [...I[6] || (I[6] = [
                  b(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              _.value ? (a(), M(re, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: P
              }, {
                default: h(() => [...I[7] || (I[7] = [
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
          default: h(() => [...I[10] || (I[10] = [
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
    } = Rr(), w = k(!1), p = k(!1), _ = k("instances"), S = k(null), $ = k(null), P = U(() => [
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
    async function L(F) {
      S.value = F.id;
      try {
        await d(F), o("toast", "Instance stopped", "success");
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to stop instance", "error");
      } finally {
        S.value = null;
      }
    }
    async function I(F) {
      S.value = F.id;
      try {
        await u(F), o("toast", "Instance starting...", "success");
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to start instance", "error");
      } finally {
        S.value = null;
      }
    }
    function x(F) {
      $.value = F;
    }
    async function q() {
      const F = $.value;
      if (F) {
        $.value = null, S.value = F.id;
        try {
          await m(F), o("toast", "Instance terminated", "success");
        } catch (T) {
          o("toast", T instanceof Error ? T.message : "Failed to terminate instance", "error");
        } finally {
          S.value = null;
        }
      }
    }
    async function W() {
      await c(), _.value = "instances";
    }
    return et(() => {
      c(), v();
    }), to(() => {
      g();
    }), (F, T) => (a(), r(G, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: T[1] || (T[1] = (E) => w.value = !0)
          }, {
            actions: h(() => [
              C(re, {
                variant: "ghost",
                size: "xs",
                onClick: T[0] || (T[0] = (E) => p.value = !0)
              }, {
                default: h(() => [...T[10] || (T[10] = [
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
            "onUpdate:modelValue": T[2] || (T[2] = (E) => _.value = E),
            tabs: P.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: h(() => [
          _.value === "instances" ? (a(), M(px, {
            key: 0,
            instances: Ve(n),
            "is-loading": Ve(l),
            "action-loading-id": S.value,
            onRefresh: Ve(c),
            onStop: L,
            onStart: I,
            onTerminate: x
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          _.value === "runpod" ? (a(), M(f8, {
            key: 1,
            onToast: T[3] || (T[3] = (E, R) => o("toast", E, R)),
            onNavigate: T[4] || (T[4] = (E) => o("navigate", E)),
            onDeployed: W
          })) : y("", !0),
          _.value === "custom" ? (a(), M(zS, {
            key: 2,
            onToast: T[5] || (T[5] = (E, R) => o("toast", E, R)),
            onDeployed: W
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
        onCancel: T[6] || (T[6] = (E) => $.value = null)
      }, null, 8, ["message"])) : y("", !0),
      C(ns, {
        show: w.value,
        title: "Deploy to Cloud",
        onClose: T[7] || (T[7] = (E) => w.value = !1)
      }, {
        content: h(() => [...T[11] || (T[11] = [
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
      p.value ? (a(), M(QS, {
        key: 1,
        onClose: T[8] || (T[8] = (E) => p.value = !1),
        onSaved: T[9] || (T[9] = (E) => o("toast", "GitHub token saved", "success"))
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
    const s = e, { getCommitDetail: o } = at(), n = k(null), l = k(!0), i = U(() => {
      if (!n.value) return !1;
      const d = n.value.changes.workflows;
      return d.added.length > 0 || d.modified.length > 0 || d.deleted.length > 0;
    }), c = U(() => {
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
    }), (d, u) => (a(), M(pt, {
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
          C(Pe, {
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
        C(Pe, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (m) => d.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...u[15] || (u[15] = [
            b(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        C(Pe, {
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
    const o = e, n = s, { commit: l } = at(), i = k(""), c = k(!1), d = k(!1), u = U(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), m = U(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, S = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || S.nodes_added.length > 0 || S.nodes_removed.length > 0;
    }), v = U(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((S) => S.has_issues) : [];
    }), g = U(() => v.value.length > 0), w = U(() => g.value && !d.value);
    async function p() {
      var _, S, $, P;
      if (!(g.value && !d.value) && !(!u.value || !i.value.trim() || c.value)) {
        c.value = !0;
        try {
          const L = await l(i.value.trim(), d.value);
          if (L.status === "success") {
            const I = `Committed: ${((_ = L.summary) == null ? void 0 : _.new) || 0} new, ${((S = L.summary) == null ? void 0 : S.modified) || 0} modified, ${(($ = L.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            n("committed", { success: !0, message: I });
          } else if (L.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (L.status === "blocked") {
            const I = ((P = L.issues) == null ? void 0 : P.map((x) => `${x.name}: ${x.issue}`).join("; ")) || "Unknown issues";
            n("committed", { success: !1, message: `Commit blocked - ${I}. Enable "Allow issues" to force.` });
          } else
            n("committed", { success: !1, message: L.message || "Commit failed" });
        } catch (L) {
          n("committed", { success: !1, message: L instanceof Error ? L.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (_, S) => e.asModal ? (a(), M(wt, {
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
            C(Pe, {
              variant: "secondary",
              onClick: S[3] || (S[3] = ($) => n("close"))
            }, {
              default: h(() => [...S[20] || (S[20] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(Pe, {
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
        C(Pe, {
          variant: "secondary",
          onClick: S[9] || (S[9] = ($) => n("close"))
        }, {
          default: h(() => [...S[31] || (S[31] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        C(Pe, {
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
    const s = e, o = U(() => {
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
    }), n = U(() => s.state === "complete" ? "success" : s.state === "critical_failure" || s.state === "rolled_back" ? "error" : "default"), l = U(() => {
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
    return (i, c) => (a(), M(wt, { to: "body" }, [
      e.show ? (a(), r("div", w6, [
        t("div", _6, [
          c[1] || (c[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", b6, [
            C(qn, {
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
      (a(!0), r(G, null, ge(Ve(z6), (l) => (a(), r(G, {
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
      t("span", X6, f(Ve(F6)), 1),
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
        b(" by " + f(Ve(B6)), 1)
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
    return (i, c) => (a(), M(pt, {
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
          C(Pe, {
            variant: "primary",
            disabled: !((d = o.value) != null && d.hasChanges),
            onClick: n
          }, {
            default: h(() => [...c[2] || (c[2] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Pe, {
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
    } = at(), g = k(o.initialStep || 1), w = k(null), p = k("landing"), _ = k(!1), S = k(!1), $ = k(!1), P = k(!1), L = k(null), I = k(o.initialStep === 2), x = k(o.defaultPath), q = k(!!o.detectedModelsDir), W = k(o.detectedModelsDir || ""), F = k(null), T = k(null), E = k(null), R = k(null), Z = k("my-new-env"), Y = k(Sr), j = k("latest"), se = k(Ir), ee = k(!0), A = k(null), N = k(null), D = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), we = k(!1), J = k(!1), de = k(!1), _e = k({ progress: 0, message: "" }), Oe = k({ progress: 0, message: "" }), We = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], he = k(0), Te = k(null), Be = k(0), $e = k(null), ie = U(() => {
      var be, ye;
      const te = (be = x.value) == null ? void 0 : be.trim(), K = !F.value, Me = !q.value || !T.value && ((ye = W.value) == null ? void 0 : ye.trim());
      return te && K && Me;
    }), je = U(() => {
      var te;
      return (te = Z.value) == null ? void 0 : te.trim();
    }), Re = U(() => !!(g.value === 2 || N.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), O = U(() => N.value || o.workspacePath || null);
    async function B() {
      var te;
      if (F.value = null, !!((te = x.value) != null && te.trim()))
        try {
          const K = await c({ path: x.value, type: "workspace" });
          K.valid || (F.value = K.error || "Invalid path");
        } catch (K) {
          F.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function ne() {
      var te;
      if (T.value = null, E.value = null, R.value = null, !!((te = W.value) != null && te.trim()))
        try {
          const K = await c({ path: W.value, type: "models" });
          if (K.valid)
            R.value = K.model_count ?? null;
          else if (T.value = K.error || "Invalid path", K.suggestion) {
            E.value = K.suggestion, W.value = K.suggestion, T.value = null;
            const Me = await c({ path: K.suggestion, type: "models" });
            Me.valid && (R.value = Me.model_count ?? null);
          }
        } catch (K) {
          T.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function le() {
      var te, K, Me, be, ye;
      if (F.value = null, T.value = null, await B(), (te = F.value) != null && te.includes("already exists")) {
        F.value = null, N.value = ((K = x.value) == null ? void 0 : K.trim()) || o.defaultPath, g.value = 2, me();
        return;
      }
      if (!F.value && !(q.value && ((Me = W.value) != null && Me.trim()) && (await ne(), T.value))) {
        J.value = !0;
        try {
          await l({
            workspace_path: ((be = x.value) == null ? void 0 : be.trim()) || o.defaultPath,
            models_directory: q.value && ((ye = W.value) == null ? void 0 : ye.trim()) || null
          }), he.value = 0, Te.value = Date.now();
          const V = setInterval(async () => {
            var z;
            if (Te.value && Date.now() - Te.value > FI) {
              clearInterval(V), J.value = !1, F.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const ce = await i();
              if (he.value = 0, ce.state === "idle" && J.value) {
                clearInterval(V), J.value = !1, F.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              _e.value = { progress: ce.progress, message: ce.message }, ce.state === "complete" ? (clearInterval(V), J.value = !1, N.value = ((z = x.value) == null ? void 0 : z.trim()) || o.defaultPath, g.value = 2, me()) : ce.state === "error" && (clearInterval(V), J.value = !1, F.value = ce.error || "Workspace creation failed");
            } catch (ce) {
              he.value++, console.warn(`Polling failure ${he.value}/${ao}:`, ce), he.value >= ao && (clearInterval(V), J.value = !1, F.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (V) {
          J.value = !1, F.value = V instanceof Error ? V.message : "Failed to create workspace";
        }
      }
    }
    async function fe() {
      de.value = !0, A.value = null;
      try {
        const te = {
          name: Z.value.trim() || "my-new-env",
          python_version: Y.value,
          comfyui_version: j.value,
          torch_backend: se.value,
          switch_after: ee.value,
          workspace_path: N.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await d(te)).status === "started") {
          Be.value = 0, $e.value = Date.now();
          const Me = setInterval(async () => {
            if ($e.value && Date.now() - $e.value > Jl) {
              clearInterval(Me), de.value = !1, A.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const be = await u();
              if (Be.value = 0, be.state === "idle" && de.value) {
                clearInterval(Me), de.value = !1, A.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Oe.value = {
                progress: be.progress ?? 0,
                message: be.message,
                phase: be.phase
              }, be.state === "complete") {
                clearInterval(Me), de.value = !1;
                const ye = be.environment_name || te.name;
                ee.value ? n("complete", ye, N.value) : (p.value = "landing", n("environment-created-no-switch", ye));
              } else be.state === "error" && (clearInterval(Me), de.value = !1, A.value = be.error || "Environment creation failed");
            } catch (be) {
              Be.value++, console.warn(`Polling failure ${Be.value}/${ao}:`, be), Be.value >= ao && (clearInterval(Me), de.value = !1, A.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (te) {
        de.value = !1, A.value = te instanceof Error ? te.message : "Unknown error";
      }
    }
    async function me() {
      we.value = !0;
      try {
        D.value = await v();
      } catch (te) {
        console.error("Failed to load ComfyUI releases:", te);
      } finally {
        we.value = !1;
      }
    }
    function xe() {
      w.value && n("switch-environment", w.value, N.value);
    }
    function Se() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : g.value === 2 && o.setupState === "no_workspace" && (g.value = 1);
    }
    function ae(te, K) {
      S.value = !1, K ? n("complete", te, N.value) : (n("environment-created-no-switch", te), p.value = "landing");
    }
    function ue() {
    }
    et(async () => {
      if (o.detectedModelsDir && (W.value = o.detectedModelsDir), o.workspacePath && (N.value = o.workspacePath), g.value === 2) {
        me();
        const te = setTimeout(() => {
          I.value = !1;
        }, 3e3);
        await Le(), clearTimeout(te), I.value = !1;
      }
    });
    async function Le() {
      try {
        const te = await u();
        if (console.log("[ComfyGit] Create progress check:", te.state, te), te.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", te.environment_name), p.value = "create", de.value = !0, Z.value = te.environment_name || "my-new-env", Oe.value = {
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
        console.log("[ComfyGit] Import progress check:", te.state, te), te.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", te.environment_name), L.value = {
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
      Be.value = 0, $e.value = Date.now();
      let te = null;
      const K = async () => {
        if ($e.value && Date.now() - $e.value > Jl)
          return te && clearInterval(te), de.value = !1, A.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const be = await u();
          if (Be.value = 0, be.state === "idle" && de.value)
            return te && clearInterval(te), de.value = !1, A.value = "Environment creation was interrupted. Please try again.", !1;
          if (Oe.value = {
            progress: be.progress ?? 0,
            message: be.message,
            phase: be.phase
          }, be.state === "complete") {
            te && clearInterval(te), de.value = !1;
            const ye = be.environment_name || Z.value;
            return n("complete", ye, N.value), !1;
          } else if (be.state === "error")
            return te && clearInterval(te), de.value = !1, A.value = be.error || "Environment creation failed", !1;
          return !0;
        } catch (be) {
          return Be.value++, console.warn(`Polling failure ${Be.value}/${ao}:`, be), Be.value >= ao ? (te && clearInterval(te), de.value = !1, A.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
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
            Re.value ? (a(), r("button", {
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
                  "onUpdate:modelValue": K[2] || (K[2] = (be) => x.value = be),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, aI), [
                  [Nt, x.value]
                ]),
                F.value ? (a(), r("p", lI, f(F.value), 1)) : y("", !0)
              ]),
              t("div", iI, [
                t("label", rI, [
                  Ye(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": K[3] || (K[3] = (be) => q.value = be)
                  }, null, 512), [
                    [Xo, q.value]
                  ]),
                  K[22] || (K[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              q.value ? (a(), r("div", cI, [
                K[23] || (K[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                Ye(t("input", {
                  "onUpdate:modelValue": K[4] || (K[4] = (be) => W.value = be),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, dI), [
                  [Nt, W.value]
                ]),
                e.detectedModelsDir && !W.value ? (a(), r("p", uI, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                E.value ? (a(), r("p", fI, " Did you mean: " + f(E.value), 1)) : y("", !0),
                T.value ? (a(), r("p", mI, f(T.value), 1)) : y("", !0),
                R.value !== null && !T.value ? (a(), r("p", vI, " Found " + f(R.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              J.value ? (a(), M(Dn, {
                key: 1,
                progress: _e.value.progress,
                message: _e.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            g.value === 2 ? (a(), r("div", pI, [
              I.value ? (a(), r("div", gI, [...K[25] || (K[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), r(G, { key: 1 }, [
                !o.cliInstalled && !$.value ? (a(), r("div", hI, [
                  t("div", yI, [
                    K[27] || (K[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    K[28] || (K[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: K[5] || (K[5] = (be) => $.value = !0),
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
                    onClick: K[6] || (K[6] = (be) => p.value = "create")
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
                    onClick: K[7] || (K[7] = (be) => {
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
                      (a(!0), r(G, null, ge(o.existingEnvironments, (be) => (a(), r("label", {
                        key: be,
                        class: Ee(["env-option", { selected: w.value === be }])
                      }, [
                        Ye(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: be,
                          "onUpdate:modelValue": K[8] || (K[8] = (ye) => w.value = ye)
                        }, null, 8, bI), [
                          [Jt, w.value]
                        ]),
                        t("span", kI, f(be), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (a(), r("div", $I, [
                  de.value ? (a(), r("div", OI, [
                    t("p", AI, [
                      K[41] || (K[41] = b(" Creating environment ", -1)),
                      t("strong", null, f(Z.value), 1),
                      K[42] || (K[42] = b("... ", -1))
                    ]),
                    C(Dn, {
                      progress: Oe.value.progress,
                      message: Oe.value.message,
                      "current-phase": Oe.value.phase,
                      "show-steps": !0,
                      steps: We
                    }, null, 8, ["progress", "message", "current-phase"]),
                    K[43] || (K[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), r(G, { key: 0 }, [
                    K[40] || (K[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", CI, [
                      K[35] || (K[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      Ye(t("input", {
                        "onUpdate:modelValue": K[9] || (K[9] = (be) => Z.value = be),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Nt, Z.value]
                      ])
                    ]),
                    t("div", xI, [
                      K[36] || (K[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      Ye(t("select", {
                        "onUpdate:modelValue": K[10] || (K[10] = (be) => Y.value = be),
                        class: "form-select"
                      }, [
                        (a(!0), r(G, null, ge(Ve(xr), (be) => (a(), r("option", {
                          key: be,
                          value: be
                        }, f(be), 9, SI))), 128))
                      ], 512), [
                        [ps, Y.value]
                      ])
                    ]),
                    t("div", II, [
                      K[37] || (K[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Ye(t("select", {
                        "onUpdate:modelValue": K[11] || (K[11] = (be) => j.value = be),
                        class: "form-select",
                        disabled: we.value
                      }, [
                        (a(!0), r(G, null, ge(D.value, (be) => (a(), r("option", {
                          key: be.tag_name,
                          value: be.tag_name
                        }, f(be.name), 9, TI))), 128))
                      ], 8, EI), [
                        [ps, j.value]
                      ])
                    ]),
                    t("div", PI, [
                      K[38] || (K[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Ye(t("select", {
                        "onUpdate:modelValue": K[12] || (K[12] = (be) => se.value = be),
                        class: "form-select"
                      }, [
                        (a(!0), r(G, null, ge(Ve(Za), (be) => (a(), r("option", {
                          key: be,
                          value: be
                        }, f(be) + f(be === "auto" ? " (detect GPU)" : ""), 9, RI))), 128))
                      ], 512), [
                        [ps, se.value]
                      ])
                    ]),
                    t("div", MI, [
                      t("label", DI, [
                        Ye(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": K[13] || (K[13] = (be) => ee.value = be)
                        }, null, 512), [
                          [Xo, ee.value]
                        ]),
                        K[39] || (K[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    A.value ? (a(), r("div", LI, f(A.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (a(), r("div", NI, [
                  C(Pr, {
                    "workspace-path": N.value,
                    "resume-import": P.value,
                    "initial-progress": L.value ?? void 0,
                    onImportComplete: ae,
                    onImportStarted: K[14] || (K[14] = (be) => S.value = !0),
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
              g.value === 1 ? (a(), M(Pe, {
                key: 0,
                variant: "primary",
                disabled: !ie.value || J.value,
                onClick: le
              }, {
                default: h(() => [
                  b(f(J.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : g.value === 2 ? (a(), r(G, { key: 1 }, [
                !de.value && !S.value && (p.value !== "landing" || o.setupState === "no_workspace" && !N.value) ? (a(), M(Pe, {
                  key: 0,
                  variant: "secondary",
                  onClick: Se
                }, {
                  default: h(() => [...K[44] || (K[44] = [
                    b(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (a(), M(Pe, {
                  key: 1,
                  variant: "primary",
                  disabled: !je.value || de.value,
                  onClick: fe
                }, {
                  default: h(() => [
                    b(f(de.value ? "Creating..." : ee.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                p.value === "landing" && w.value ? (a(), M(Pe, {
                  key: 2,
                  variant: "primary",
                  onClick: xe
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
      _.value ? (a(), M(tI, {
        key: 0,
        "workspace-path": O.value,
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
    } = at(), L = Cv(), { liveInstanceCount: I } = Rr({ autoStart: !0 }), x = k(null), q = k([]), W = k([]), F = k([]), T = U(() => F.value.find((oe) => oe.is_current)), E = k(null), R = k(!1), Z = k(1), Y = U(() => {
      var oe;
      return ((oe = E.value) == null ? void 0 : oe.state) || "managed";
    }), j = k(!1), se = k(null), ee = k(null), A = k(!1), N = k(null), D = k(null), we = k(null), J = k(!1), de = k(!1), _e = k(""), Oe = k(null), We = k({ state: "idle", progress: 0, message: "" });
    let he = null, Te = null;
    const Be = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, $e = o.initialView ? Be[o.initialView] : null, ie = k(($e == null ? void 0 : $e.view) ?? "status"), je = k(($e == null ? void 0 : $e.section) ?? "this-env");
    function Re(oe, H) {
      ie.value = oe, je.value = H;
    }
    function O(oe) {
      const De = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[oe];
      De && Re(De.view, De.section);
    }
    function B() {
      Re("branches", "this-env");
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
    const le = k(null), fe = k(!1), me = k(!1), xe = k([]);
    let Se = 0;
    function ae(oe, H = "info", De = 3e3) {
      const He = ++Se;
      return xe.value.push({ id: He, message: oe, type: H }), De > 0 && setTimeout(() => {
        xe.value = xe.value.filter((ot) => ot.id !== He);
      }, De), He;
    }
    function ue(oe) {
      xe.value = xe.value.filter((H) => H.id !== oe);
    }
    function Le(oe, H) {
      ae(oe, H);
    }
    const Ie = U(() => {
      if (!x.value) return "neutral";
      const oe = x.value.workflows, H = oe.new.length > 0 || oe.modified.length > 0 || oe.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? H ? "warning" : "success" : "error";
    });
    U(() => x.value ? Ie.value === "success" ? "All synced" : Ie.value === "warning" ? "Uncommitted changes" : Ie.value === "error" ? "Not synced" : "" : "");
    async function te() {
      j.value = !0, se.value = null;
      try {
        const [oe, H, De, He] = await Promise.all([
          l(!0),
          i(),
          c(),
          g()
        ]);
        x.value = oe, q.value = H.commits, W.value = De.branches, F.value = He, n("statusUpdate", oe), N.value && await N.value.loadWorkflows(!0);
      } catch (oe) {
        se.value = oe instanceof Error ? oe.message : "Failed to load status", x.value = null, q.value = [], W.value = [];
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
          le.value = null, ce();
          const He = ae(`Checking out ${oe.short_hash || ((mt = oe.hash) == null ? void 0 : mt.slice(0, 7))}...`, "info", 0), ot = await d(oe.hash, H);
          ue(He), ot.status === "success" ? ae("Restarting ComfyUI...", "success") : ae(ot.message || "Checkout failed", "error");
        }
      };
    }
    async function be(oe) {
      const H = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      le.value = {
        title: H ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: H ? "You have uncommitted changes." : `Switch to branch "${oe}"?`,
        details: H ? ls() : void 0,
        warning: H ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: H ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          le.value = null, ce();
          const De = ae(`Switching to ${oe}...`, "info", 0), He = await m(oe, H);
          ue(De), He.status === "success" ? ae("Restarting ComfyUI...", "success") : ae(He.message || "Branch switch failed", "error");
        }
      };
    }
    async function ye(oe) {
      const H = ae(`Creating branch ${oe}...`, "info", 0), De = await u(oe);
      ue(H), De.status === "success" ? (ae(`Branch "${oe}" created`, "success"), await te()) : ae(De.message || "Failed to create branch", "error");
    }
    async function V(oe, H = !1) {
      const De = async (He) => {
        var mt;
        const ot = ae(`Deleting branch ${oe}...`, "info", 0);
        try {
          const Mt = await v(oe, He);
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
    async function z(oe) {
      ee.value = null;
      const H = prompt("Enter branch name:");
      if (H) {
        const De = ae(`Creating branch ${H}...`, "info", 0), He = await u(H, oe.hash);
        ue(De), He.status === "success" ? (ae(`Branch "${H}" created from ${oe.short_hash}`, "success"), await te()) : ae(He.message || "Failed to create branch", "error");
      }
    }
    function ce() {
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
          le.value = null, ce(), ae("Restarting environment...", "info");
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
      A.value = !1, _e.value = oe, Oe.value = H || null, J.value = !0;
    }
    async function lt() {
      J.value = !1, de.value = !0, ce(), We.value = {
        progress: 10,
        state: ut(10),
        message: Rt(10)
      };
      try {
        await w(_e.value, Oe.value || void 0), Ut(), Bs();
      } catch (oe) {
        Ht(), de.value = !1, ae(`Failed to initiate switch: ${oe instanceof Error ? oe.message : "Unknown error"}`, "error"), We.value = { state: "idle", progress: 0, message: "" }, Oe.value = null;
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
      const H = 60, De = 5e3, He = 100, ot = (H - oe) / (De / He);
      Te = window.setInterval(() => {
        if (oe += ot, oe >= H && (oe = H, Ht()), We.value.progress < H) {
          const mt = Math.floor(oe);
          We.value = {
            progress: mt,
            state: ut(mt),
            message: Rt(mt)
          };
        }
      }, He);
    }
    function Ht() {
      Te && (clearInterval(Te), Te = null);
    }
    function Bs() {
      he || (he = window.setInterval(async () => {
        try {
          let oe = await L.getStatus();
          if ((!oe || oe.state === "idle") && (oe = await p()), !oe)
            return;
          const H = oe.progress || 0;
          H >= 60 && Ht();
          const De = Math.max(H, We.value.progress), He = oe.state && oe.state !== "idle" && oe.state !== "unknown", ot = He ? oe.state : ut(De), mt = He && oe.message || Rt(De);
          We.value = {
            state: ot,
            progress: De,
            message: mt
          }, oe.state === "complete" ? (Ht(), Ps(), de.value = !1, ae(`✓ Switched to ${_e.value}`, "success"), await te(), _e.value = "") : oe.state === "rolled_back" ? (Ht(), Ps(), de.value = !1, ae("Switch failed, restored previous environment", "warning"), _e.value = "") : oe.state === "critical_failure" && (Ht(), Ps(), de.value = !1, ae(`Critical error during switch: ${oe.message}`, "error"), _e.value = "");
        } catch (oe) {
          console.error("Failed to poll switch progress:", oe);
        }
      }, 1e3));
    }
    function Ps() {
      Ht(), he && (clearInterval(he), he = null);
    }
    function so() {
      var oe;
      J.value = !1, _e.value = "", (oe = E.value) != null && oe.state && E.value.state !== "managed" && (Z.value = E.value.state === "no_workspace" ? 1 : 2, R.value = !0);
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
          const He = De.length ? `: ${De.join(", ")}` : "";
          ae(`✓ Environment synced${He}`, "success"), await te();
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
        (H = we.value) == null || H.resetRepairingState();
      }
    }
    async function ke() {
      var H, De;
      const oe = ae("Repairing environment...", "info", 0);
      try {
        const He = await S("skip", !0);
        if (ue(oe), He.status === "success") {
          const ot = [];
          He.nodes_installed.length && ot.push(`${He.nodes_installed.length} installed`), He.nodes_removed.length && ot.push(`${He.nodes_removed.length} removed`);
          const mt = ot.length ? `: ${ot.join(", ")}` : "";
          ae(`✓ Environment repaired${mt}`, "success"), (H = we.value) == null || H.closeDetailModal(), await te();
        } else {
          const ot = He.errors.length ? He.errors.join(", ") : He.message || "Unknown error";
          ae(`Repair failed: ${ot}`, "error");
        }
      } catch (He) {
        ue(oe), ae(`Repair error: ${He instanceof Error ? He.message : "Unknown error"}`, "error");
      } finally {
        (De = we.value) == null || De.resetRepairingEnvironmentState();
      }
    }
    async function Q(oe, H) {
      ae(`Environment '${oe}' created`, "success"), await te(), D.value && await D.value.loadEnvironments(), H && await vt(oe);
    }
    async function Ke(oe) {
      var H;
      if (((H = T.value) == null ? void 0 : H.name) === oe) {
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
      R.value = !1;
      try {
        E.value = await P();
      } catch {
      }
      await vt(oe, H);
    }
    function Kt() {
      R.value = !1, n("close");
    }
    async function gs(oe, H) {
      await vt(oe, H);
    }
    async function hs(oe) {
      await te(), await vt(oe);
    }
    async function as(oe) {
      E.value = await P(), console.log(`Environment '${oe}' created. Available for switching.`);
    }
    function Ae() {
      Re("environments", "all-envs"), setTimeout(() => {
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
        if (E.value = await P(), E.value.state === "no_workspace") {
          R.value = !0, Z.value = 1;
          return;
        }
        if (E.value.state === "empty_workspace") {
          R.value = !0, Z.value = 2;
          return;
        }
        if (E.value.state === "unmanaged") {
          R.value = !0, Z.value = 2;
          return;
        }
      } catch (oe) {
        console.warn("Setup status check failed, proceeding normally:", oe);
      }
      await te();
    }), (oe, H) => {
      var De, He, ot, mt, Mt, is, Vs, Ws, X, Ce, Ne, ct;
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
              onClick: H[0] || (H[0] = (Ue) => n("close")),
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
            onClick: H[1] || (H[1] = (Ue) => Re("environments", "all-envs"))
          }, [
            x.value ? (a(), r("div", YI, [
              t("span", null, f(((De = T.value) == null ? void 0 : De.name) || ((He = x.value) == null ? void 0 : He.environment) || "Loading..."), 1),
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
                  class: Ee(["sidebar-item", { active: ie.value === "status" && je.value === "this-env" }]),
                  onClick: H[2] || (H[2] = (Ue) => Re("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "workflows" }]),
                  onClick: H[3] || (H[3] = (Ue) => Re("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "models-env" }]),
                  onClick: H[4] || (H[4] = (Ue) => Re("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "branches" }]),
                  onClick: H[5] || (H[5] = (Ue) => Re("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "history" }]),
                  onClick: H[6] || (H[6] = (Ue) => Re("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "nodes" }]),
                  onClick: H[7] || (H[7] = (Ue) => Re("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "debug-env" }]),
                  onClick: H[8] || (H[8] = (Ue) => Re("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              H[41] || (H[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", tE, [
                H[38] || (H[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "environments" }]),
                  onClick: H[9] || (H[9] = (Ue) => Re("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "model-index" }]),
                  onClick: H[10] || (H[10] = (Ue) => Re("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "settings" }]),
                  onClick: H[11] || (H[11] = (Ue) => Re("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "debug-workspace" }]),
                  onClick: H[12] || (H[12] = (Ue) => Re("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              H[42] || (H[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", sE, [
                H[40] || (H[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "deploy" }]),
                  onClick: H[13] || (H[13] = (Ue) => Re("deploy", "sharing"))
                }, [
                  H[39] || (H[39] = b(" DEPLOY ", -1)),
                  Ve(I) > 0 ? (a(), r("span", oE, f(Ve(I)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "export" }]),
                  onClick: H[14] || (H[14] = (Ue) => Re("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "import" }]),
                  onClick: H[15] || (H[15] = (Ue) => Re("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "remotes" }]),
                  onClick: H[16] || (H[16] = (Ue) => Re("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", nE, [
              C(Ar)
            ])
          ]),
          t("div", aE, [
            se.value ? (a(), r("div", lE, f(se.value), 1)) : !x.value && ie.value === "status" ? (a(), r("div", iE, " Loading status... ")) : (a(), r(G, { key: 2 }, [
              ie.value === "status" ? (a(), M(Jm, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: we,
                status: x.value,
                "setup-state": Y.value,
                onSwitchBranch: B,
                onCommitChanges: H[17] || (H[17] = (Ue) => fe.value = !0),
                onSyncEnvironment: H[18] || (H[18] = (Ue) => me.value = !0),
                onViewWorkflows: H[19] || (H[19] = (Ue) => Re("workflows", "this-env")),
                onViewHistory: H[20] || (H[20] = (Ue) => Re("history", "this-env")),
                onViewDebug: H[21] || (H[21] = (Ue) => Re("debug-env", "this-env")),
                onViewNodes: H[22] || (H[22] = (Ue) => Re("nodes", "this-env")),
                onRepairMissingModels: Co,
                onRepairEnvironment: ke,
                onStartSetup: H[23] || (H[23] = (Ue) => R.value = !0),
                onViewEnvironments: H[24] || (H[24] = (Ue) => Re("environments", "all-envs")),
                onCreateEnvironment: Ae
              }, null, 8, ["status", "setup-state"])) : ie.value === "workflows" ? (a(), M(I0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: N,
                onRefresh: te
              }, null, 512)) : ie.value === "models-env" ? (a(), M(cw, {
                key: 2,
                onNavigate: O
              })) : ie.value === "branches" ? (a(), M(uv, {
                key: 3,
                branches: W.value,
                current: ((ot = x.value) == null ? void 0 : ot.branch) || null,
                onSwitch: be,
                onCreate: ye,
                onDelete: V
              }, null, 8, ["branches", "current"])) : ie.value === "history" ? (a(), M(kv, {
                key: 4,
                commits: q.value,
                onSelect: K,
                onCheckout: Me
              }, null, 8, ["commits"])) : ie.value === "nodes" ? (a(), M(a_, {
                key: 5,
                "version-mismatches": ((Mt = (mt = x.value) == null ? void 0 : mt.comparison) == null ? void 0 : Mt.version_mismatches) || [],
                onOpenNodeManager: ne,
                onRepairEnvironment: ke,
                onToast: Le
              }, null, 8, ["version-mismatches"])) : ie.value === "debug-env" ? (a(), M(_2, { key: 6 })) : ie.value === "environments" ? (a(), M($$, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: D,
                onSwitch: vt,
                onCreated: Q,
                onDelete: Ke
              }, null, 512)) : ie.value === "model-index" ? (a(), M(Tw, {
                key: 8,
                onRefresh: te
              })) : ie.value === "settings" ? (a(), M(u2, { key: 9 })) : ie.value === "debug-workspace" ? (a(), M(w2, { key: 10 })) : ie.value === "deploy" ? (a(), M(e4, {
                key: 11,
                onToast: Le,
                onNavigate: O
              })) : ie.value === "export" ? (a(), M(Z$, { key: 12 })) : ie.value === "import" ? (a(), M(H3, {
                key: 13,
                onImportCompleteSwitch: hs
              })) : ie.value === "remotes" ? (a(), M(Gk, {
                key: 14,
                onToast: Le
              })) : y("", !0)
            ], 64))
          ])
        ]),
        ee.value ? (a(), M(y4, {
          key: 0,
          commit: ee.value,
          onClose: H[25] || (H[25] = (Ue) => ee.value = null),
          onCheckout: Me,
          onCreateBranch: z
        }, null, 8, ["commit"])) : y("", !0),
        le.value ? (a(), M(Qa, {
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
          onCancel: H[26] || (H[26] = (Ue) => le.value = null),
          onSecondary: le.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        C(y6, {
          show: J.value,
          "from-environment": ((is = T.value) == null ? void 0 : is.name) || "unknown",
          "to-environment": _e.value,
          onConfirm: lt,
          onClose: so
        }, null, 8, ["show", "from-environment", "to-environment"]),
        fe.value && x.value ? (a(), M(Lr, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: H[27] || (H[27] = (Ue) => fe.value = !1),
          onCommitted: ko
        }, null, 8, ["status"])) : y("", !0),
        me.value && x.value ? (a(), M(U6, {
          key: 3,
          show: me.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: $o,
          onClose: H[28] || (H[28] = (Ue) => me.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        C(T6, {
          show: de.value,
          state: We.value.state,
          progress: We.value.progress,
          message: We.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        A.value ? (a(), r("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: H[30] || (H[30] = rt((Ue) => A.value = !1, ["self"]))
        }, [
          t("div", rE, [
            t("div", cE, [
              H[44] || (H[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: H[29] || (H[29] = (Ue) => A.value = !1)
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
                (a(!0), r(G, null, ge(F.value, (Ue) => (a(), r("div", {
                  key: Ue.name,
                  class: Ee(["env-item", { current: Ue.is_current }])
                }, [
                  t("div", fE, [
                    t("div", mE, [
                      t("span", vE, f(Ue.is_current ? "●" : "○"), 1),
                      t("span", pE, f(Ue.name), 1),
                      Ue.current_branch ? (a(), r("span", gE, "(" + f(Ue.current_branch) + ")", 1)) : y("", !0),
                      Ue.is_current ? (a(), r("span", hE, "CURRENT")) : y("", !0)
                    ]),
                    t("div", yE, f(Ue.workflow_count) + " workflows • " + f(Ue.node_count) + " nodes ", 1)
                  ]),
                  Ue.is_current ? y("", !0) : (a(), r("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (xo) => vt(Ue.name)
                  }, " SWITCH ", 8, wE))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        R.value ? (a(), M(VI, {
          key: 5,
          "default-path": ((Vs = E.value) == null ? void 0 : Vs.default_path) || "~/comfygit",
          "detected-models-dir": ((Ws = E.value) == null ? void 0 : Ws.detected_models_dir) || null,
          "initial-step": Z.value,
          "existing-environments": ((X = E.value) == null ? void 0 : X.environments) || [],
          "cli-installed": ((Ce = E.value) == null ? void 0 : Ce.cli_installed) ?? !0,
          "setup-state": ((Ne = E.value) == null ? void 0 : Ne.state) || "no_workspace",
          "workspace-path": ((ct = E.value) == null ? void 0 : ct.workspace_path) || null,
          onComplete: ht,
          onClose: Kt,
          onSwitchEnvironment: gs,
          onEnvironmentCreatedNoSwitch: as
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", _E, [
          C(lu, { name: "toast" }, {
            default: h(() => [
              (a(!0), r(G, null, ge(xe.value, (Ue) => (a(), r("div", {
                key: Ue.id,
                class: Ee(["toast", Ue.type])
              }, [
                t("span", bE, f(Ue.message), 1)
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
        const W = x.active === 0 && x.failed === 0 && x.paused === 0 && x.completed > 0, F = q && (q.active > 0 || q.paused > 0);
        W && F && ($ = setTimeout(() => {
          _(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const P = U(() => {
      var W;
      if (s.items.length === 0) return 0;
      const x = l.value.length, q = ((W = o.value) == null ? void 0 : W.progress) || 0;
      return Math.round((x + q / 100) / s.items.length * 100);
    });
    function L(x) {
      m(x);
    }
    function I(x) {
      return x === 0 ? "" : `${(x / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (x, q) => (a(), M(wt, { to: "body" }, [
      Ve(d) ? (a(), r("div", {
        key: 0,
        class: Ee(["model-download-queue", { minimized: !S.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: q[0] || (q[0] = (W) => S.value = !S.value)
        }, [
          t("div", WE, [
            q[4] || (q[4] = t("span", { class: "icon" }, "↓", -1)),
            q[5] || (q[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", GE, "(" + f(Ve(u)) + "/" + f(Ve(s).items.length) + ")", 1)
          ]),
          t("div", jE, [
            t("span", HE, f(S.value ? "minimize" : "expand"), 1)
          ])
        ]),
        S.value ? (a(), r("div", QE, [
          Ve(o) ? (a(), r("div", ZE, [
            q[6] || (q[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            C(To, {
              item: Ve(o),
              onCancel: q[1] || (q[1] = (W) => L(Ve(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          Ve(c).length > 0 ? (a(), r("div", eT, [
            t("div", tT, [
              t("span", sT, "Paused (" + f(Ve(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: q[2] || (q[2] = //@ts-ignore
                (...W) => Ve(w) && Ve(w)(...W))
              }, "Resume All")
            ]),
            t("div", oT, [
              (a(!0), r(G, null, ge(Ve(c), (W) => (a(), M(To, {
                key: W.id,
                item: W,
                onResume: (F) => Ve(g)(W.id),
                onRemove: (F) => Ve(p)(W.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Ve(n).length > 0 ? (a(), r("div", nT, [
            t("div", aT, [
              t("span", lT, "Queued (" + f(Ve(n).length) + ")", 1)
            ]),
            t("div", iT, [
              (a(!0), r(G, null, ge(Ve(n), (W) => (a(), M(To, {
                key: W.id,
                item: W,
                onCancel: (F) => L(W.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          Ve(l).length > 0 ? (a(), r("div", rT, [
            t("div", cT, [
              t("span", dT, "Completed (" + f(Ve(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: q[3] || (q[3] = //@ts-ignore
                (...W) => Ve(_) && Ve(_)(...W))
              }, "Clear")
            ]),
            t("div", uT, [
              (a(!0), r(G, null, ge(Ve(l).slice(0, 3), (W) => (a(), M(To, {
                key: W.id,
                item: W,
                onRemove: (F) => Ve(p)(W.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Ve(i).length > 0 ? (a(), r("div", fT, [
            t("div", mT, [
              t("span", vT, "Failed (" + f(Ve(i).length) + ")", 1)
            ]),
            t("div", pT, [
              (a(!0), r(G, null, ge(Ve(i), (W) => (a(), M(To, {
                key: W.id,
                item: W,
                onRetry: (F) => Ve(v)(W.id),
                onRemove: (F) => Ve(p)(W.id)
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
          Ve(o) ? (a(), r("div", YE, [
            t("span", JE, f(Ve(o).filename), 1),
            t("span", XE, f(I(Ve(o).speed)), 1)
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
    const s = k(!1), o = k(null), n = k(null), l = k(!1), i = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Set()), d = k(!1), u = k(null), m = k(null), v = k(0), { addToQueue: g } = _o(), { installNode: w } = at(), p = U(() => _.value.length > 0 || $.value.length > 0 || P.value.length > 0), _ = U(() => {
      var _e, Oe;
      if (!((_e = n.value) != null && _e.nodes)) return [];
      const J = /* @__PURE__ */ new Map(), de = (n.value.nodes.resolved || []).filter((We) => {
        var he;
        return !We.is_installed && ((he = We.package) == null ? void 0 : he.package_id);
      });
      for (const We of de) {
        const he = We.package.package_id;
        J.has(he) || J.set(he, {
          package_id: he,
          title: We.package.title || he,
          node_count: 0,
          node_types: []
        });
        const Te = J.get(he);
        Te.node_count++, Te.node_types.push(((Oe = We.reference) == null ? void 0 : Oe.node_type) || We.node_type);
      }
      return Array.from(J.values());
    }), S = U(() => _.value.reduce((J, de) => J + de.node_count, 0)), $ = U(() => {
      var J;
      return (J = n.value) != null && J.nodes ? (n.value.nodes.unresolved || []).map((de) => {
        var _e;
        return {
          node_type: ((_e = de.reference) == null ? void 0 : _e.node_type) || de.node_type
        };
      }) : [];
    }), P = U(() => {
      var _e;
      if (!((_e = n.value) != null && _e.models)) return [];
      const J = (n.value.models.resolved || []).filter(
        (Oe) => Oe.match_type === "download_intent" || Oe.match_type === "property_download_intent" || Oe.match_type === "not_found"
      ).map((Oe) => {
        var We, he, Te, Be;
        return {
          filename: ((he = (We = Oe.reference) == null ? void 0 : We.widget_value) == null ? void 0 : he.split("/").pop()) || ((Te = Oe.reference) == null ? void 0 : Te.widget_value) || Oe.widget_value,
          widget_value: ((Be = Oe.reference) == null ? void 0 : Be.widget_value) || Oe.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: Oe.download_source || null,
          targetPath: Oe.target_path || null,
          canDownload: !!(Oe.download_source && Oe.target_path)
        };
      }), de = (n.value.models.unresolved || []).map((Oe) => {
        var We, he, Te, Be;
        return {
          filename: ((he = (We = Oe.reference) == null ? void 0 : We.widget_value) == null ? void 0 : he.split("/").pop()) || ((Te = Oe.reference) == null ? void 0 : Te.widget_value) || Oe.widget_value,
          widget_value: ((Be = Oe.reference) == null ? void 0 : Be.widget_value) || Oe.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      });
      return [...J, ...de];
    }), L = U(() => P.value.filter((J) => J.canDownload)), I = U(() => _.value.length > 0 && _.value.every((J) => i.value.has(J.package_id))), x = U(() => L.value.length > 0 && L.value.every((J) => c.value.has(J.url))), q = U(() => _.value.length > 0 || L.value.length > 0), W = U(() => {
      const J = _.value.length === 0 || I.value, de = L.value.length === 0 || x.value;
      return J && de;
    });
    async function F(J) {
      if (!i.value.has(J)) {
        u.value = J;
        try {
          await w(J), i.value.add(J), v.value++, window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
            detail: { count: v.value }
          }));
        } catch (de) {
          console.error("[ComfyGit] Failed to install package:", de);
        } finally {
          u.value = null;
        }
      }
    }
    function T(J) {
      !J.url || !J.targetPath || c.value.has(J.url) || (g([{
        workflow: "unsaved",
        filename: J.filename,
        url: J.url,
        targetPath: J.targetPath
      }]), c.value.add(J.url));
    }
    function E() {
      for (const J of _.value)
        i.value.has(J.package_id) || F(J.package_id);
    }
    function R() {
      const J = L.value.filter(
        (de) => !c.value.has(de.url)
      );
      if (J.length !== 0) {
        g(J.map((de) => ({
          workflow: "unsaved",
          filename: de.filename,
          url: de.url,
          targetPath: de.targetPath
        })));
        for (const de of J)
          c.value.add(de.url);
      }
    }
    function Z() {
      E(), R();
    }
    function Y(J) {
      let de = 5381;
      for (let _e = 0; _e < J.length; _e++)
        de = (de << 5) + de ^ J.charCodeAt(_e);
      return Math.abs(de).toString(16).padStart(8, "0");
    }
    function j(J) {
      const de = ((J == null ? void 0 : J.nodes) || []).map((_e) => `${_e.id}:${_e.type}`).sort().join(",");
      return Y(de);
    }
    function se(J) {
      const de = j(J);
      return localStorage.getItem("comfygit:popup-dismissed:" + de) !== "true";
    }
    function ee() {
      m.value && (d.value ? localStorage.setItem("comfygit:popup-dismissed:" + m.value, "true") : localStorage.removeItem("comfygit:popup-dismissed:" + m.value));
    }
    async function A(J) {
      if (se(J)) {
        s.value = !0, o.value = null, m.value = j(J), i.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), d.value = !1, v.value = 0;
        try {
          const de = await fetch("/v2/comfygit/workflow/analyze-json", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ workflow: J, name: "unsaved" })
          });
          if (!de.ok) {
            const _e = await de.json();
            throw new Error(_e.error || "Failed to analyze workflow");
          }
          n.value = await de.json(), p.value && (l.value = !0);
        } catch (de) {
          console.error("[ComfyGit] Failed to analyze workflow:", de);
        } finally {
          s.value = !1;
        }
      }
    }
    function N() {
      window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      })), D();
    }
    function D() {
      l.value = !1, n.value = null, m.value = null;
    }
    function we(J) {
      const { workflow: de } = J.detail;
      de && A(de);
    }
    return et(() => {
      window.addEventListener("comfygit:workflow-loaded", we);
    }), to(() => {
      window.removeEventListener("comfygit:workflow-loaded", we);
    }), (J, de) => l.value ? (a(), M(pt, {
      key: 0,
      title: "Missing Dependencies",
      size: "md",
      loading: s.value,
      error: o.value || void 0,
      onClose: D
    }, {
      body: h(() => [
        s.value ? (a(), r("div", yT, [...de[1] || (de[1] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("span", null, "Analyzing workflow...", -1)
        ])])) : n.value && p.value ? (a(), r("div", wT, [
          _.value.length > 0 ? (a(), r("div", _T, [
            t("div", bT, [
              t("span", kT, "Missing Custom Nodes (" + f(S.value) + ")", 1),
              _.value.length > 1 ? (a(), M(Pe, {
                key: 0,
                size: "sm",
                variant: "secondary",
                disabled: I.value,
                onClick: E
              }, {
                default: h(() => [
                  b(f(I.value ? "All Installed" : "Install All"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y("", !0)
            ]),
            t("div", $T, [
              (a(!0), r(G, null, ge(_.value.slice(0, 5), (_e) => (a(), r("div", {
                key: _e.package_id,
                class: "package-item"
              }, [
                t("div", CT, [
                  t("span", xT, f(_e.title), 1),
                  t("span", ST, "(" + f(_e.node_count) + " " + f(_e.node_count === 1 ? "node" : "nodes") + ")", 1)
                ]),
                i.value.has(_e.package_id) ? (a(), r("span", IT, "Installed")) : (a(), M(Pe, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: u.value === _e.package_id,
                  onClick: (Oe) => F(_e.package_id)
                }, {
                  default: h(() => [
                    b(f(u.value === _e.package_id ? "Installing..." : "Install"), 1)
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
              (a(!0), r(G, null, ge($.value.slice(0, 5), (_e) => (a(), r("div", {
                key: _e.node_type,
                class: "item"
              }, [
                t("code", DT, f(_e.node_type), 1),
                de[2] || (de[2] = t("span", { class: "not-found" }, "Not found in registry", -1))
              ]))), 128)),
              $.value.length > 5 ? (a(), r("div", LT, " ...and " + f($.value.length - 5) + " more ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          P.value.length > 0 ? (a(), r("div", OT, [
            t("div", AT, [
              t("span", NT, "Missing Models (" + f(P.value.length) + ")", 1),
              L.value.length > 1 ? (a(), M(Pe, {
                key: 0,
                size: "sm",
                variant: "secondary",
                disabled: x.value,
                onClick: R
              }, {
                default: h(() => [
                  b(f(x.value ? "All Queued" : "Download All"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y("", !0)
            ]),
            t("div", UT, [
              (a(!0), r(G, null, ge(P.value.slice(0, 5), (_e) => (a(), r("div", {
                key: _e.widget_value,
                class: "model-item"
              }, [
                t("div", zT, [
                  t("span", FT, f(_e.filename), 1)
                ]),
                _e.canDownload ? (a(), r(G, { key: 0 }, [
                  c.value.has(_e.url) ? (a(), r("span", BT, "Queued")) : (a(), M(Pe, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    onClick: (Oe) => T(_e)
                  }, {
                    default: h(() => [...de[3] || (de[3] = [
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
                de[0] || (de[0] = (_e) => d.value = _e),
                ee
              ]
            }, {
              default: h(() => [...de[4] || (de[4] = [
                b(" Don't show again for this workflow ", -1)
              ])]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])) : y("", !0)
      ]),
      footer: h(() => [
        C(Pe, {
          variant: "secondary",
          onClick: D
        }, {
          default: h(() => [...de[5] || (de[5] = [
            b("Dismiss", -1)
          ])]),
          _: 1
        }),
        q.value ? (a(), M(Pe, {
          key: 0,
          variant: "primary",
          disabled: W.value,
          onClick: Z
        }, {
          default: h(() => [
            b(f(W.value ? "All Done" : "Download All"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : (a(), M(Pe, {
          key: 1,
          variant: "primary",
          onClick: N
        }, {
          default: h(() => [...de[6] || (de[6] = [
            b("Open ComfyGit Panel", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["loading", "error"])) : y("", !0);
  }
}), HT = /* @__PURE__ */ pe(jT, [["__scopeId", "data-v-33e253ea"]]), KT = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', qT = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', YT = {
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
async function bn() {
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
  document.addEventListener("keydown", o), Kn({
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
  document.addEventListener("keydown", n), Vo = Kn({
    render: () => sn(Lr, {
      status: po.value,
      onClose: Mo,
      onCommitted: (l) => {
        Mo(), o7(l.success, l.message), bn().then(Wo);
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
  Po || (Po = document.createElement("div"), Po.className = "comfygit-download-queue-root", Xl = Kn({
    render: () => sn(hT)
  }), Xl.mount(Po), document.body.appendChild(Po), console.log("[ComfyGit] Model download queue mounted"));
}
function a7() {
  Ro || (Ro = document.createElement("div"), Ro.className = "comfygit-missing-resources-root", Ql = Kn({
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
    o(), await Promise.all([bn(), Ea()]), Wo(), Pa(), Ta(), setTimeout(Ta, 100), setInterval(async () => {
      await Promise.all([bn(), Ea()]), Wo(), Pa();
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
        const L = document.createElement("button");
        L.textContent = "View Logs", L.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, L.onmouseover = () => L.style.background = "#c62828", L.onmouseout = () => L.style.background = "#e53935", L.onclick = () => {
          p.remove(), fa("debug-env");
        }, p.appendChild(L);
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
        `, I.onmouseover = () => I.style.opacity = "1", I.onmouseout = () => I.style.opacity = "0.6", I.onclick = () => p.remove(), p.appendChild(I), document.body.appendChild(p), console.log("[ComfyGit] Manager error toast displayed:", g), setTimeout(() => {
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
        const L = document.createElement("button");
        L.textContent = "Apply Changes", L.style.cssText = `
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
        `, L.onmouseover = () => L.style.background = "rgba(255,255,255,0.1)", L.onmouseout = () => L.style.background = "transparent", L.onclick = async () => {
          L.disabled = !0, L.textContent = "Restarting...", L.style.opacity = "0.7", $.textContent = "Restarting...", P.textContent = "Applying changes, please wait...";
          try {
            const x = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Ft.refreshComboInNodes && (await Ft.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", $.textContent = "Nodes Installed", $.style.color = "#4caf50", P.textContent = `${g} package${g > 1 ? "s" : ""} installed successfully!`, p.style.borderColor = "#4caf50", L.style.display = "none", setTimeout(() => {
                  p.remove();
                }, 3e3);
              } catch (q) {
                console.error("[ComfyGit] Failed to refresh nodes:", q), _.textContent = "✅", $.textContent = "Restart Complete", $.style.color = "#4caf50", P.textContent = "Refresh the page to load new nodes.", p.style.borderColor = "#4caf50", L.style.display = "none";
              }
            };
            n.addEventListener("reconnected", x, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (x) {
            console.error("[ComfyGit] Failed to restart:", x), $.textContent = "Restart Failed", $.style.color = "#e53935", P.textContent = "Could not restart server. Try again.", p.style.borderColor = "#e53935", L.textContent = "Try Again", L.disabled = !1, L.style.opacity = "1";
          }
        }, p.appendChild(L);
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
        `, I.onmouseover = () => I.style.opacity = "1", I.onmouseout = () => I.style.opacity = "0.6", I.onclick = () => p.remove(), p.appendChild(I), document.body.appendChild(p), console.log(`[ComfyGit] Restart required notification displayed (${g} packages installed)`);
      };
      n.addEventListener("comfygit:workflow-changed", async (g) => {
        const { change_type: w, workflow_name: p } = g.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${p}`), await bn(), Wo();
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
