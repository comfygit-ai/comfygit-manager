import { app as Ds } from "../../scripts/app.js";
/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Sa(e) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) s[o] = 1;
  return (o) => o in s;
}
const et = {}, lo = [], fs = () => {
}, Jl = () => !1, Pn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ia = (e) => e.startsWith("onUpdate:"), mt = Object.assign, Ea = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, zr = Object.prototype.hasOwnProperty, Xe = (e, s) => zr.call(e, s), Ae = Array.isArray, io = (e) => qo(e) === "[object Map]", go = (e) => qo(e) === "[object Set]", tl = (e) => qo(e) === "[object Date]", ze = (e) => typeof e == "function", it = (e) => typeof e == "string", Zt = (e) => typeof e == "symbol", Ze = (e) => e !== null && typeof e == "object", Xl = (e) => (Ze(e) || ze(e)) && ze(e.then) && ze(e.catch), Ql = Object.prototype.toString, qo = (e) => Ql.call(e), Fr = (e) => qo(e).slice(8, -1), Zl = (e) => qo(e) === "[object Object]", Ta = (e) => it(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Po = /* @__PURE__ */ Sa(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Rn = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, Br = /-\w/g, Vt = Rn(
  (e) => e.replace(Br, (s) => s.slice(1).toUpperCase())
), Vr = /\B([A-Z])/g, Us = Rn(
  (e) => e.replace(Vr, "-$1").toLowerCase()
), Mn = Rn((e) => e.charAt(0).toUpperCase() + e.slice(1)), jn = Rn(
  (e) => e ? `on${Mn(e)}` : ""
), Ls = (e, s) => !Object.is(e, s), un = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, ei = (e, s, o, n = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, Dn = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, Wr = (e) => {
  const s = it(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let sl;
const Ln = () => sl || (sl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Wt(e) {
  if (Ae(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = it(n) ? Kr(n) : Wt(n);
      if (l)
        for (const i in l)
          s[i] = l[i];
    }
    return s;
  } else if (it(e) || Ze(e))
    return e;
}
const Gr = /;(?![^(]*\))/g, jr = /:([^]+)/, Hr = /\/\*[^]*?\*\//g;
function Kr(e) {
  const s = {};
  return e.replace(Hr, "").split(Gr).forEach((o) => {
    if (o) {
      const n = o.split(jr);
      n.length > 1 && (s[n[0].trim()] = n[1].trim());
    }
  }), s;
}
function xe(e) {
  let s = "";
  if (it(e))
    s = e;
  else if (Ae(e))
    for (let o = 0; o < e.length; o++) {
      const n = xe(e[o]);
      n && (s += n + " ");
    }
  else if (Ze(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const qr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Yr = /* @__PURE__ */ Sa(qr);
function ti(e) {
  return !!e || e === "";
}
function Jr(e, s) {
  if (e.length !== s.length) return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++)
    o = Js(e[n], s[n]);
  return o;
}
function Js(e, s) {
  if (e === s) return !0;
  let o = tl(e), n = tl(s);
  if (o || n)
    return o && n ? e.getTime() === s.getTime() : !1;
  if (o = Zt(e), n = Zt(s), o || n)
    return e === s;
  if (o = Ae(e), n = Ae(s), o || n)
    return o && n ? Jr(e, s) : !1;
  if (o = Ze(e), n = Ze(s), o || n) {
    if (!o || !n)
      return !1;
    const l = Object.keys(e).length, i = Object.keys(s).length;
    if (l !== i)
      return !1;
    for (const r in e) {
      const u = e.hasOwnProperty(r), d = s.hasOwnProperty(r);
      if (u && !d || !u && d || !Js(e[r], s[r]))
        return !1;
    }
  }
  return String(e) === String(s);
}
function Pa(e, s) {
  return e.findIndex((o) => Js(o, s));
}
const si = (e) => !!(e && e.__v_isRef === !0), f = (e) => it(e) ? e : e == null ? "" : Ae(e) || Ze(e) && (e.toString === Ql || !ze(e.toString)) ? si(e) ? f(e.value) : JSON.stringify(e, oi, 2) : String(e), oi = (e, s) => si(s) ? oi(e, s.value) : io(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [n, l], i) => (o[Hn(n, i) + " =>"] = l, o),
    {}
  )
} : go(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => Hn(o))
} : Zt(s) ? Hn(s) : Ze(s) && !Ae(s) && !Zl(s) ? String(s) : s, Hn = (e, s = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Zt(e) ? `Symbol(${(o = e.description) != null ? o : s})` : e
  );
};
/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Dt;
class Xr {
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
function Qr() {
  return Dt;
}
let st;
const Kn = /* @__PURE__ */ new WeakSet();
class ni {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Dt && Dt.active && Dt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Kn.has(this) && (Kn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || li(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ol(this), ii(this);
    const s = st, o = Jt;
    st = this, Jt = !0;
    try {
      return this.fn();
    } finally {
      ri(this), st = s, Jt = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let s = this.deps; s; s = s.nextDep)
        Da(s);
      this.deps = this.depsTail = void 0, ol(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Kn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ua(this) && this.run();
  }
  get dirty() {
    return ua(this);
  }
}
let ai = 0, Ro, Mo;
function li(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = Mo, Mo = e;
    return;
  }
  e.next = Ro, Ro = e;
}
function Ra() {
  ai++;
}
function Ma() {
  if (--ai > 0)
    return;
  if (Mo) {
    let s = Mo;
    for (Mo = void 0; s; ) {
      const o = s.next;
      s.next = void 0, s.flags &= -9, s = o;
    }
  }
  let e;
  for (; Ro; ) {
    let s = Ro;
    for (Ro = void 0; s; ) {
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
function ii(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function ri(e) {
  let s, o = e.depsTail, n = o;
  for (; n; ) {
    const l = n.prevDep;
    n.version === -1 ? (n === o && (o = l), Da(n), Zr(n)) : s = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
  }
  e.deps = s, e.depsTail = o;
}
function ua(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (ci(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function ci(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Fo) || (e.globalVersion = Fo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ua(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = st, n = Jt;
  st = e, Jt = !0;
  try {
    ii(e);
    const l = e.fn(e._value);
    (s.version === 0 || Ls(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    st = o, Jt = n, ri(e), e.flags &= -3;
  }
}
function Da(e, s = !1) {
  const { dep: o, prevSub: n, nextSub: l } = e;
  if (n && (n.nextSub = l, e.prevSub = void 0), l && (l.prevSub = n, e.nextSub = void 0), o.subs === e && (o.subs = n, !n && o.computed)) {
    o.computed.flags &= -5;
    for (let i = o.computed.deps; i; i = i.nextDep)
      Da(i, !0);
  }
  !s && !--o.sc && o.map && o.map.delete(o.key);
}
function Zr(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let Jt = !0;
const ui = [];
function $s() {
  ui.push(Jt), Jt = !1;
}
function Cs() {
  const e = ui.pop();
  Jt = e === void 0 ? !0 : e;
}
function ol(e) {
  const { cleanup: s } = e;
  if (e.cleanup = void 0, s) {
    const o = st;
    st = void 0;
    try {
      s();
    } finally {
      st = o;
    }
  }
}
let Fo = 0;
class ec {
  constructor(s, o) {
    this.sub = s, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class La {
  // TODO isolatedDeclarations "__v_skip"
  constructor(s) {
    this.computed = s, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(s) {
    if (!st || !Jt || st === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== st)
      o = this.activeLink = new ec(st, this), st.deps ? (o.prevDep = st.depsTail, st.depsTail.nextDep = o, st.depsTail = o) : st.deps = st.depsTail = o, di(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const n = o.nextDep;
      n.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = n), o.prevDep = st.depsTail, o.nextDep = void 0, st.depsTail.nextDep = o, st.depsTail = o, st.deps === o && (st.deps = n);
    }
    return o;
  }
  trigger(s) {
    this.version++, Fo++, this.notify(s);
  }
  notify(s) {
    Ra();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      Ma();
    }
  }
}
function di(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const s = e.dep.computed;
    if (s && !e.dep.subs) {
      s.flags |= 20;
      for (let n = s.deps; n; n = n.nextDep)
        di(n);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const da = /* @__PURE__ */ new WeakMap(), Ys = Symbol(
  ""
), fa = Symbol(
  ""
), Bo = Symbol(
  ""
);
function _t(e, s, o) {
  if (Jt && st) {
    let n = da.get(e);
    n || da.set(e, n = /* @__PURE__ */ new Map());
    let l = n.get(o);
    l || (n.set(o, l = new La()), l.map = n, l.key = o), l.track();
  }
}
function bs(e, s, o, n, l, i) {
  const r = da.get(e);
  if (!r) {
    Fo++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (Ra(), s === "clear")
    r.forEach(u);
  else {
    const d = Ae(e), m = d && Ta(o);
    if (d && o === "length") {
      const v = Number(n);
      r.forEach((h, w) => {
        (w === "length" || w === Bo || !Zt(w) && w >= v) && u(h);
      });
    } else
      switch ((o !== void 0 || r.has(void 0)) && u(r.get(o)), m && u(r.get(Bo)), s) {
        case "add":
          d ? m && u(r.get("length")) : (u(r.get(Ys)), io(e) && u(r.get(fa)));
          break;
        case "delete":
          d || (u(r.get(Ys)), io(e) && u(r.get(fa)));
          break;
        case "set":
          io(e) && u(r.get(Ys));
          break;
      }
  }
  Ma();
}
function eo(e) {
  const s = Ye(e);
  return s === e ? s : (_t(s, "iterate", Bo), Ft(e) ? s : s.map(gt));
}
function On(e) {
  return _t(e = Ye(e), "iterate", Bo), e;
}
const tc = {
  __proto__: null,
  [Symbol.iterator]() {
    return qn(this, Symbol.iterator, gt);
  },
  concat(...e) {
    return eo(this).concat(
      ...e.map((s) => Ae(s) ? eo(s) : s)
    );
  },
  entries() {
    return qn(this, "entries", (e) => (e[1] = gt(e[1]), e));
  },
  every(e, s) {
    return hs(this, "every", e, s, void 0, arguments);
  },
  filter(e, s) {
    return hs(this, "filter", e, s, (o) => o.map(gt), arguments);
  },
  find(e, s) {
    return hs(this, "find", e, s, gt, arguments);
  },
  findIndex(e, s) {
    return hs(this, "findIndex", e, s, void 0, arguments);
  },
  findLast(e, s) {
    return hs(this, "findLast", e, s, gt, arguments);
  },
  findLastIndex(e, s) {
    return hs(this, "findLastIndex", e, s, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, s) {
    return hs(this, "forEach", e, s, void 0, arguments);
  },
  includes(...e) {
    return Yn(this, "includes", e);
  },
  indexOf(...e) {
    return Yn(this, "indexOf", e);
  },
  join(e) {
    return eo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Yn(this, "lastIndexOf", e);
  },
  map(e, s) {
    return hs(this, "map", e, s, void 0, arguments);
  },
  pop() {
    return $o(this, "pop");
  },
  push(...e) {
    return $o(this, "push", e);
  },
  reduce(e, ...s) {
    return nl(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return nl(this, "reduceRight", e, s);
  },
  shift() {
    return $o(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, s) {
    return hs(this, "some", e, s, void 0, arguments);
  },
  splice(...e) {
    return $o(this, "splice", e);
  },
  toReversed() {
    return eo(this).toReversed();
  },
  toSorted(e) {
    return eo(this).toSorted(e);
  },
  toSpliced(...e) {
    return eo(this).toSpliced(...e);
  },
  unshift(...e) {
    return $o(this, "unshift", e);
  },
  values() {
    return qn(this, "values", gt);
  }
};
function qn(e, s, o) {
  const n = On(e), l = n[s]();
  return n !== e && !Ft(e) && (l._next = l.next, l.next = () => {
    const i = l._next();
    return i.done || (i.value = o(i.value)), i;
  }), l;
}
const sc = Array.prototype;
function hs(e, s, o, n, l, i) {
  const r = On(e), u = r !== e && !Ft(e), d = r[s];
  if (d !== sc[s]) {
    const h = d.apply(e, i);
    return u ? gt(h) : h;
  }
  let m = o;
  r !== e && (u ? m = function(h, w) {
    return o.call(this, gt(h), w, e);
  } : o.length > 2 && (m = function(h, w) {
    return o.call(this, h, w, e);
  }));
  const v = d.call(r, m, n);
  return u && l ? l(v) : v;
}
function nl(e, s, o, n) {
  const l = On(e);
  let i = o;
  return l !== e && (Ft(e) ? o.length > 3 && (i = function(r, u, d) {
    return o.call(this, r, u, d, e);
  }) : i = function(r, u, d) {
    return o.call(this, r, gt(u), d, e);
  }), l[s](i, ...n);
}
function Yn(e, s, o) {
  const n = Ye(e);
  _t(n, "iterate", Bo);
  const l = n[s](...o);
  return (l === -1 || l === !1) && Aa(o[0]) ? (o[0] = Ye(o[0]), n[s](...o)) : l;
}
function $o(e, s, o = []) {
  $s(), Ra();
  const n = Ye(e)[s].apply(e, o);
  return Ma(), Cs(), n;
}
const oc = /* @__PURE__ */ Sa("__proto__,__v_isRef,__isVue"), fi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Zt)
);
function nc(e) {
  Zt(e) || (e = String(e));
  const s = Ye(this);
  return _t(s, "has", e), s.hasOwnProperty(e);
}
class mi {
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
      return n === (l ? i ? vc : hi : i ? gi : pi).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(n) ? s : void 0;
    const r = Ae(s);
    if (!l) {
      let d;
      if (r && (d = tc[o]))
        return d;
      if (o === "hasOwnProperty")
        return nc;
    }
    const u = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ct(s) ? s : n
    );
    if ((Zt(o) ? fi.has(o) : oc(o)) || (l || _t(s, "get", o), i))
      return u;
    if (Ct(u)) {
      const d = r && Ta(o) ? u : u.value;
      return l && Ze(d) ? hn(d) : d;
    }
    return Ze(u) ? l ? hn(u) : zs(u) : u;
  }
}
class vi extends mi {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, n, l) {
    let i = s[o];
    if (!this._isShallow) {
      const d = Os(i);
      if (!Ft(n) && !Os(n) && (i = Ye(i), n = Ye(n)), !Ae(s) && Ct(i) && !Ct(n))
        return d || (i.value = n), !0;
    }
    const r = Ae(s) && Ta(o) ? Number(o) < s.length : Xe(s, o), u = Reflect.set(
      s,
      o,
      n,
      Ct(s) ? s : l
    );
    return s === Ye(l) && (r ? Ls(n, i) && bs(s, "set", o, n) : bs(s, "add", o, n)), u;
  }
  deleteProperty(s, o) {
    const n = Xe(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && n && bs(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const n = Reflect.has(s, o);
    return (!Zt(o) || !fi.has(o)) && _t(s, "has", o), n;
  }
  ownKeys(s) {
    return _t(
      s,
      "iterate",
      Ae(s) ? "length" : Ys
    ), Reflect.ownKeys(s);
  }
}
class ac extends mi {
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
const lc = /* @__PURE__ */ new vi(), ic = /* @__PURE__ */ new ac(), rc = /* @__PURE__ */ new vi(!0);
const ma = (e) => e, en = (e) => Reflect.getPrototypeOf(e);
function cc(e, s, o) {
  return function(...n) {
    const l = this.__v_raw, i = Ye(l), r = io(i), u = e === "entries" || e === Symbol.iterator && r, d = e === "keys" && r, m = l[e](...n), v = o ? ma : s ? yn : gt;
    return !s && _t(
      i,
      "iterate",
      d ? fa : Ys
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
function tn(e) {
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function uc(e, s) {
  const o = {
    get(l) {
      const i = this.__v_raw, r = Ye(i), u = Ye(l);
      e || (Ls(l, u) && _t(r, "get", l), _t(r, "get", u));
      const { has: d } = en(r), m = s ? ma : e ? yn : gt;
      if (d.call(r, l))
        return m(i.get(l));
      if (d.call(r, u))
        return m(i.get(u));
      i !== r && i.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && _t(Ye(l), "iterate", Ys), l.size;
    },
    has(l) {
      const i = this.__v_raw, r = Ye(i), u = Ye(l);
      return e || (Ls(l, u) && _t(r, "has", l), _t(r, "has", u)), l === u ? i.has(l) : i.has(l) || i.has(u);
    },
    forEach(l, i) {
      const r = this, u = r.__v_raw, d = Ye(u), m = s ? ma : e ? yn : gt;
      return !e && _t(d, "iterate", Ys), u.forEach((v, h) => l.call(i, m(v), m(h), r));
    }
  };
  return mt(
    o,
    e ? {
      add: tn("add"),
      set: tn("set"),
      delete: tn("delete"),
      clear: tn("clear")
    } : {
      add(l) {
        !s && !Ft(l) && !Os(l) && (l = Ye(l));
        const i = Ye(this);
        return en(i).has.call(i, l) || (i.add(l), bs(i, "add", l, l)), this;
      },
      set(l, i) {
        !s && !Ft(i) && !Os(i) && (i = Ye(i));
        const r = Ye(this), { has: u, get: d } = en(r);
        let m = u.call(r, l);
        m || (l = Ye(l), m = u.call(r, l));
        const v = d.call(r, l);
        return r.set(l, i), m ? Ls(i, v) && bs(r, "set", l, i) : bs(r, "add", l, i), this;
      },
      delete(l) {
        const i = Ye(this), { has: r, get: u } = en(i);
        let d = r.call(i, l);
        d || (l = Ye(l), d = r.call(i, l)), u && u.call(i, l);
        const m = i.delete(l);
        return d && bs(i, "delete", l, void 0), m;
      },
      clear() {
        const l = Ye(this), i = l.size !== 0, r = l.clear();
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
    o[l] = cc(l, e, s);
  }), o;
}
function Oa(e, s) {
  const o = uc(e, s);
  return (n, l, i) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    Xe(o, l) && l in n ? o : n,
    l,
    i
  );
}
const dc = {
  get: /* @__PURE__ */ Oa(!1, !1)
}, fc = {
  get: /* @__PURE__ */ Oa(!1, !0)
}, mc = {
  get: /* @__PURE__ */ Oa(!0, !1)
};
const pi = /* @__PURE__ */ new WeakMap(), gi = /* @__PURE__ */ new WeakMap(), hi = /* @__PURE__ */ new WeakMap(), vc = /* @__PURE__ */ new WeakMap();
function pc(e) {
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
function gc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : pc(Fr(e));
}
function zs(e) {
  return Os(e) ? e : Na(
    e,
    !1,
    lc,
    dc,
    pi
  );
}
function hc(e) {
  return Na(
    e,
    !1,
    rc,
    fc,
    gi
  );
}
function hn(e) {
  return Na(
    e,
    !0,
    ic,
    mc,
    hi
  );
}
function Na(e, s, o, n, l) {
  if (!Ze(e) || e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const i = gc(e);
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
function ro(e) {
  return Os(e) ? ro(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Os(e) {
  return !!(e && e.__v_isReadonly);
}
function Ft(e) {
  return !!(e && e.__v_isShallow);
}
function Aa(e) {
  return e ? !!e.__v_raw : !1;
}
function Ye(e) {
  const s = e && e.__v_raw;
  return s ? Ye(s) : e;
}
function yc(e) {
  return !Xe(e, "__v_skip") && Object.isExtensible(e) && ei(e, "__v_skip", !0), e;
}
const gt = (e) => Ze(e) ? zs(e) : e, yn = (e) => Ze(e) ? hn(e) : e;
function Ct(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return wc(e, !1);
}
function wc(e, s) {
  return Ct(e) ? e : new bc(e, s);
}
class bc {
  constructor(s, o) {
    this.dep = new La(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : Ye(s), this._value = o ? s : gt(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, n = this.__v_isShallow || Ft(s) || Os(s);
    s = n ? s : Ye(s), Ls(s, o) && (this._rawValue = s, this._value = n ? s : gt(s), this.dep.trigger());
  }
}
function Ue(e) {
  return Ct(e) ? e.value : e;
}
const _c = {
  get: (e, s, o) => s === "__v_raw" ? e : Ue(Reflect.get(e, s, o)),
  set: (e, s, o, n) => {
    const l = e[s];
    return Ct(l) && !Ct(o) ? (l.value = o, !0) : Reflect.set(e, s, o, n);
  }
};
function yi(e) {
  return ro(e) ? e : new Proxy(e, _c);
}
class kc {
  constructor(s, o, n) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new La(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Fo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    st !== this)
      return li(this, !0), !0;
  }
  get value() {
    const s = this.dep.track();
    return ci(this), s && (s.version = this.dep.version), this._value;
  }
  set value(s) {
    this.setter && this.setter(s);
  }
}
function $c(e, s, o = !1) {
  let n, l;
  return ze(e) ? n = e : (n = e.get, l = e.set), new kc(n, l, o);
}
const sn = {}, wn = /* @__PURE__ */ new WeakMap();
let Ks;
function Cc(e, s = !1, o = Ks) {
  if (o) {
    let n = wn.get(o);
    n || wn.set(o, n = []), n.push(e);
  }
}
function xc(e, s, o = et) {
  const { immediate: n, deep: l, once: i, scheduler: r, augmentJob: u, call: d } = o, m = (S) => l ? S : Ft(S) || l === !1 || l === 0 ? _s(S, 1) : _s(S);
  let v, h, w, p, _ = !1, x = !1;
  if (Ct(e) ? (h = () => e.value, _ = Ft(e)) : ro(e) ? (h = () => m(e), _ = !0) : Ae(e) ? (x = !0, _ = e.some((S) => ro(S) || Ft(S)), h = () => e.map((S) => {
    if (Ct(S))
      return S.value;
    if (ro(S))
      return m(S);
    if (ze(S))
      return d ? d(S, 2) : S();
  })) : ze(e) ? s ? h = d ? () => d(e, 2) : e : h = () => {
    if (w) {
      $s();
      try {
        w();
      } finally {
        Cs();
      }
    }
    const S = Ks;
    Ks = v;
    try {
      return d ? d(e, 3, [p]) : e(p);
    } finally {
      Ks = S;
    }
  } : h = fs, s && l) {
    const S = h, q = l === !0 ? 1 / 0 : l;
    h = () => _s(S(), q);
  }
  const $ = Qr(), P = () => {
    v.stop(), $ && $.active && Ea($.effects, v);
  };
  if (i && s) {
    const S = s;
    s = (...q) => {
      S(...q), P();
    };
  }
  let N = x ? new Array(e.length).fill(sn) : sn;
  const T = (S) => {
    if (!(!(v.flags & 1) || !v.dirty && !S))
      if (s) {
        const q = v.run();
        if (l || _ || (x ? q.some((B, A) => Ls(B, N[A])) : Ls(q, N))) {
          w && w();
          const B = Ks;
          Ks = v;
          try {
            const A = [
              q,
              // pass undefined as the old value when it's changed for the first time
              N === sn ? void 0 : x && N[0] === sn ? [] : N,
              p
            ];
            N = q, d ? d(s, 3, A) : (
              // @ts-expect-error
              s(...A)
            );
          } finally {
            Ks = B;
          }
        }
      } else
        v.run();
  };
  return u && u(T), v = new ni(h), v.scheduler = r ? () => r(T, !1) : T, p = (S) => Cc(S, !1, v), w = v.onStop = () => {
    const S = wn.get(v);
    if (S) {
      if (d)
        d(S, 4);
      else
        for (const q of S) q();
      wn.delete(v);
    }
  }, s ? n ? T(!0) : N = v.run() : r ? r(T.bind(null, !0), !0) : v.run(), P.pause = v.pause.bind(v), P.resume = v.resume.bind(v), P.stop = P, P;
}
function _s(e, s = 1 / 0, o) {
  if (s <= 0 || !Ze(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, Ct(e))
    _s(e.value, s, o);
  else if (Ae(e))
    for (let n = 0; n < e.length; n++)
      _s(e[n], s, o);
  else if (go(e) || io(e))
    e.forEach((n) => {
      _s(n, s, o);
    });
  else if (Zl(e)) {
    for (const n in e)
      _s(e[n], s, o);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && _s(e[n], s, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Yo(e, s, o, n) {
  try {
    return n ? e(...n) : e();
  } catch (l) {
    Nn(l, s, o);
  }
}
function es(e, s, o, n) {
  if (ze(e)) {
    const l = Yo(e, s, o, n);
    return l && Xl(l) && l.catch((i) => {
      Nn(i, s, o);
    }), l;
  }
  if (Ae(e)) {
    const l = [];
    for (let i = 0; i < e.length; i++)
      l.push(es(e[i], s, o, n));
    return l;
  }
}
function Nn(e, s, o, n = !0) {
  const l = s ? s.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = s && s.appContext.config || et;
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
      $s(), Yo(i, null, 10, [
        e,
        d,
        m
      ]), Cs();
      return;
    }
  }
  Sc(e, o, l, n, r);
}
function Sc(e, s, o, n = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const Et = [];
let cs = -1;
const co = [];
let Rs = null, oo = 0;
const wi = /* @__PURE__ */ Promise.resolve();
let bn = null;
function Jo(e) {
  const s = bn || wi;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function Ic(e) {
  let s = cs + 1, o = Et.length;
  for (; s < o; ) {
    const n = s + o >>> 1, l = Et[n], i = Vo(l);
    i < e || i === e && l.flags & 2 ? s = n + 1 : o = n;
  }
  return s;
}
function Ua(e) {
  if (!(e.flags & 1)) {
    const s = Vo(e), o = Et[Et.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= Vo(o) ? Et.push(e) : Et.splice(Ic(s), 0, e), e.flags |= 1, bi();
  }
}
function bi() {
  bn || (bn = wi.then(ki));
}
function Ec(e) {
  Ae(e) ? co.push(...e) : Rs && e.id === -1 ? Rs.splice(oo + 1, 0, e) : e.flags & 1 || (co.push(e), e.flags |= 1), bi();
}
function al(e, s, o = cs + 1) {
  for (; o < Et.length; o++) {
    const n = Et[o];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Et.splice(o, 1), o--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function _i(e) {
  if (co.length) {
    const s = [...new Set(co)].sort(
      (o, n) => Vo(o) - Vo(n)
    );
    if (co.length = 0, Rs) {
      Rs.push(...s);
      return;
    }
    for (Rs = s, oo = 0; oo < Rs.length; oo++) {
      const o = Rs[oo];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Rs = null, oo = 0;
  }
}
const Vo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ki(e) {
  try {
    for (cs = 0; cs < Et.length; cs++) {
      const s = Et[cs];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), Yo(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; cs < Et.length; cs++) {
      const s = Et[cs];
      s && (s.flags &= -2);
    }
    cs = -1, Et.length = 0, _i(), bn = null, (Et.length || co.length) && ki();
  }
}
let ht = null, $i = null;
function _n(e) {
  const s = ht;
  return ht = e, $i = e && e.type.__scopeId || null, s;
}
function g(e, s = ht, o) {
  if (!s || e._n)
    return e;
  const n = (...l) => {
    n._d && Cn(-1);
    const i = _n(s);
    let r;
    try {
      r = e(...l);
    } finally {
      _n(i), n._d && Cn(1);
    }
    return r;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function He(e, s) {
  if (ht === null)
    return e;
  const o = Bn(ht), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [i, r, u, d = et] = s[l];
    i && (ze(i) && (i = {
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
function Ws(e, s, o, n) {
  const l = e.dirs, i = s && s.dirs;
  for (let r = 0; r < l.length; r++) {
    const u = l[r];
    i && (u.oldValue = i[r].value);
    let d = u.dir[n];
    d && ($s(), es(d, o, 8, [
      e.el,
      u,
      e,
      s
    ]), Cs());
  }
}
const Ci = Symbol("_vte"), xi = (e) => e.__isTeleport, Do = (e) => e && (e.disabled || e.disabled === ""), ll = (e) => e && (e.defer || e.defer === ""), il = (e) => typeof SVGElement < "u" && e instanceof SVGElement, rl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, va = (e, s) => {
  const o = e && e.to;
  return it(o) ? s ? s(o) : null : o;
}, Si = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, n, l, i, r, u, d, m) {
    const {
      mc: v,
      pc: h,
      pbc: w,
      o: { insert: p, querySelector: _, createText: x, createComment: $ }
    } = m, P = Do(s.props);
    let { shapeFlag: N, children: T, dynamicChildren: S } = s;
    if (e == null) {
      const q = s.el = x(""), B = s.anchor = x("");
      p(q, o, n), p(B, o, n);
      const A = (E, O) => {
        N & 16 && v(
          T,
          E,
          O,
          l,
          i,
          r,
          u,
          d
        );
      }, I = () => {
        const E = s.target = va(s.props, _), O = Ii(E, s, x, p);
        E && (r !== "svg" && il(E) ? r = "svg" : r !== "mathml" && rl(E) && (r = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(E), P || (A(E, O), dn(s, !1)));
      };
      P && (A(o, B), dn(s, !0)), ll(s.props) ? (s.el.__isMounted = !1, It(() => {
        I(), delete s.el.__isMounted;
      }, i)) : I();
    } else {
      if (ll(s.props) && e.el.__isMounted === !1) {
        It(() => {
          Si.process(
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
      const q = s.anchor = e.anchor, B = s.target = e.target, A = s.targetAnchor = e.targetAnchor, I = Do(e.props), E = I ? o : B, O = I ? q : A;
      if (r === "svg" || il(B) ? r = "svg" : (r === "mathml" || rl(B)) && (r = "mathml"), S ? (w(
        e.dynamicChildren,
        S,
        E,
        l,
        i,
        r,
        u
      ), Wa(e, s, !0)) : d || h(
        e,
        s,
        E,
        O,
        l,
        i,
        r,
        u,
        !1
      ), P)
        I ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : on(
          s,
          o,
          q,
          m,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const re = s.target = va(
          s.props,
          _
        );
        re && on(
          s,
          re,
          null,
          m,
          0
        );
      } else I && on(
        s,
        B,
        A,
        m,
        1
      );
      dn(s, P);
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
      const p = i || !Do(w);
      for (let _ = 0; _ < u.length; _++) {
        const x = u[_];
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
  move: on,
  hydrate: Tc
};
function on(e, s, o, { o: { insert: n }, m: l }, i = 2) {
  i === 0 && n(e.targetAnchor, s, o);
  const { el: r, anchor: u, shapeFlag: d, children: m, props: v } = e, h = i === 2;
  if (h && n(r, s, o), (!h || Do(v)) && d & 16)
    for (let w = 0; w < m.length; w++)
      l(
        m[w],
        s,
        o,
        2
      );
  h && n(u, s, o);
}
function Tc(e, s, o, n, l, i, {
  o: { nextSibling: r, parentNode: u, querySelector: d, insert: m, createText: v }
}, h) {
  function w(x, $, P, N) {
    $.anchor = h(
      r(x),
      $,
      u(x),
      o,
      n,
      l,
      i
    ), $.targetStart = P, $.targetAnchor = N;
  }
  const p = s.target = va(
    s.props,
    d
  ), _ = Do(s.props);
  if (p) {
    const x = p._lpa || p.firstChild;
    if (s.shapeFlag & 16)
      if (_)
        w(
          e,
          s,
          x,
          x && r(x)
        );
      else {
        s.anchor = r(e);
        let $ = x;
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
        s.targetAnchor || Ii(p, s, v, m), h(
          x && r(x),
          s,
          p,
          o,
          n,
          l,
          i
        );
      }
    dn(s, _);
  } else _ && s.shapeFlag & 16 && w(e, s, e, r(e));
  return s.anchor && r(s.anchor);
}
const yt = Si;
function dn(e, s) {
  const o = e.ctx;
  if (o && o.ut) {
    let n, l;
    for (s ? (n = e.el, l = e.anchor) : (n = e.targetStart, l = e.targetAnchor); n && n !== l; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", o.uid), n = n.nextSibling;
    o.ut();
  }
}
function Ii(e, s, o, n) {
  const l = s.targetStart = o(""), i = s.targetAnchor = o("");
  return l[Ci] = i, e && (n(l, e), n(i, e)), i;
}
const ws = Symbol("_leaveCb"), nn = Symbol("_enterCb");
function Ei() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Qe(() => {
    e.isMounted = !0;
  }), Ni(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ut = [Function, Array], Ti = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ut,
  onEnter: Ut,
  onAfterEnter: Ut,
  onEnterCancelled: Ut,
  // leave
  onBeforeLeave: Ut,
  onLeave: Ut,
  onAfterLeave: Ut,
  onLeaveCancelled: Ut,
  // appear
  onBeforeAppear: Ut,
  onAppear: Ut,
  onAfterAppear: Ut,
  onAppearCancelled: Ut
}, Pi = (e) => {
  const s = e.subTree;
  return s.component ? Pi(s.component) : s;
}, Pc = {
  name: "BaseTransition",
  props: Ti,
  setup(e, { slots: s }) {
    const o = ja(), n = Ei();
    return () => {
      const l = s.default && za(s.default(), !0);
      if (!l || !l.length)
        return;
      const i = Ri(l), r = Ye(e), { mode: u } = r;
      if (n.isLeaving)
        return Jn(i);
      const d = cl(i);
      if (!d)
        return Jn(i);
      let m = Wo(
        d,
        r,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (h) => m = h
      );
      d.type !== kt && Xs(d, m);
      let v = o.subTree && cl(o.subTree);
      if (v && v.type !== kt && !qs(v, d) && Pi(o).type !== kt) {
        let h = Wo(
          v,
          r,
          n,
          o
        );
        if (Xs(v, h), u === "out-in" && d.type !== kt)
          return n.isLeaving = !0, h.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete h.afterLeave, v = void 0;
          }, Jn(i);
        u === "in-out" && d.type !== kt ? h.delayLeave = (w, p, _) => {
          const x = Mi(
            n,
            v
          );
          x[String(v.key)] = v, w[ws] = () => {
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
function Ri(e) {
  let s = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== kt) {
        s = o;
        break;
      }
  }
  return s;
}
const Rc = Pc;
function Mi(e, s) {
  const { leavingVNodes: o } = e;
  let n = o.get(s.type);
  return n || (n = /* @__PURE__ */ Object.create(null), o.set(s.type, n)), n;
}
function Wo(e, s, o, n, l) {
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
    onLeaveCancelled: x,
    onBeforeAppear: $,
    onAppear: P,
    onAfterAppear: N,
    onAppearCancelled: T
  } = s, S = String(e.key), q = Mi(o, e), B = (E, O) => {
    E && es(
      E,
      n,
      9,
      O
    );
  }, A = (E, O) => {
    const re = O[1];
    B(E, O), Ae(E) ? E.every((Y) => Y.length <= 1) && re() : E.length <= 1 && re();
  }, I = {
    mode: r,
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
      re && qs(e, re) && re.el[ws] && re.el[ws](), B(O, [E]);
    },
    enter(E) {
      let O = m, re = v, Y = h;
      if (!o.isMounted)
        if (i)
          O = P || m, re = N || v, Y = T || h;
        else
          return;
      let H = !1;
      const te = E[nn] = (Z) => {
        H || (H = !0, Z ? B(Y, [E]) : B(re, [E]), I.delayedLeave && I.delayedLeave(), E[nn] = void 0);
      };
      O ? A(O, [E, te]) : te();
    },
    leave(E, O) {
      const re = String(e.key);
      if (E[nn] && E[nn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return O();
      B(w, [E]);
      let Y = !1;
      const H = E[ws] = (te) => {
        Y || (Y = !0, O(), te ? B(x, [E]) : B(_, [E]), E[ws] = void 0, q[re] === e && delete q[re]);
      };
      q[re] = e, p ? A(p, [E, H]) : H();
    },
    clone(E) {
      const O = Wo(
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
function Jn(e) {
  if (An(e))
    return e = Ns(e), e.children = null, e;
}
function cl(e) {
  if (!An(e))
    return xi(e.type) && e.children ? Ri(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: s, children: o } = e;
  if (o) {
    if (s & 16)
      return o[0];
    if (s & 32 && ze(o.default))
      return o.default();
  }
}
function Xs(e, s) {
  e.shapeFlag & 6 && e.component ? (e.transition = s, Xs(e.component.subTree, s)) : e.shapeFlag & 128 ? (e.ssContent.transition = s.clone(e.ssContent), e.ssFallback.transition = s.clone(e.ssFallback)) : e.transition = s;
}
function za(e, s = !1, o) {
  let n = [], l = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const u = o == null ? r.key : String(o) + String(r.key != null ? r.key : i);
    r.type === j ? (r.patchFlag & 128 && l++, n = n.concat(
      za(r.children, s, u)
    )) : (s || r.type !== kt) && n.push(u != null ? Ns(r, { key: u }) : r);
  }
  if (l > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function me(e, s) {
  return ze(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    mt({ name: e.name }, s, { setup: e })
  ) : e;
}
function Di(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const kn = /* @__PURE__ */ new WeakMap();
function Lo(e, s, o, n, l = !1) {
  if (Ae(e)) {
    e.forEach(
      (_, x) => Lo(
        _,
        s && (Ae(s) ? s[x] : s),
        o,
        n,
        l
      )
    );
    return;
  }
  if (uo(n) && !l) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Lo(e, s, o, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? Bn(n.component) : n.el, r = l ? null : i, { i: u, r: d } = e, m = s && s.r, v = u.refs === et ? u.refs = {} : u.refs, h = u.setupState, w = Ye(h), p = h === et ? Jl : (_) => Xe(w, _);
  if (m != null && m !== d) {
    if (ul(s), it(m))
      v[m] = null, p(m) && (h[m] = null);
    else if (Ct(m)) {
      m.value = null;
      const _ = s;
      _.k && (v[_.k] = null);
    }
  }
  if (ze(d))
    Yo(d, u, 12, [r, v]);
  else {
    const _ = it(d), x = Ct(d);
    if (_ || x) {
      const $ = () => {
        if (e.f) {
          const P = _ ? p(d) ? h[d] : v[d] : d.value;
          if (l)
            Ae(P) && Ea(P, i);
          else if (Ae(P))
            P.includes(i) || P.push(i);
          else if (_)
            v[d] = [i], p(d) && (h[d] = v[d]);
          else {
            const N = [i];
            d.value = N, e.k && (v[e.k] = N);
          }
        } else _ ? (v[d] = r, p(d) && (h[d] = r)) : x && (d.value = r, e.k && (v[e.k] = r));
      };
      if (r) {
        const P = () => {
          $(), kn.delete(e);
        };
        P.id = -1, kn.set(e, P), It(P, o);
      } else
        ul(e), $();
    }
  }
}
function ul(e) {
  const s = kn.get(e);
  s && (s.flags |= 8, kn.delete(e));
}
Ln().requestIdleCallback;
Ln().cancelIdleCallback;
const uo = (e) => !!e.type.__asyncLoader, An = (e) => e.type.__isKeepAlive;
function Mc(e, s) {
  Li(e, "a", s);
}
function Dc(e, s) {
  Li(e, "da", s);
}
function Li(e, s, o = $t) {
  const n = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (Un(s, n, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      An(l.parent.vnode) && Lc(n, s, o, l), l = l.parent;
  }
}
function Lc(e, s, o, n) {
  const l = Un(
    s,
    e,
    n,
    !0
    /* prepend */
  );
  ho(() => {
    Ea(n[s], l);
  }, o);
}
function Un(e, s, o = $t, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), i = s.__weh || (s.__weh = (...r) => {
      $s();
      const u = Xo(o), d = es(s, o, e, r);
      return u(), Cs(), d;
    });
    return n ? l.unshift(i) : l.push(i), i;
  }
}
const xs = (e) => (s, o = $t) => {
  (!Ho || e === "sp") && Un(e, (...n) => s(...n), o);
}, Oc = xs("bm"), Qe = xs("m"), Nc = xs(
  "bu"
), Oi = xs("u"), Ni = xs(
  "bum"
), ho = xs("um"), Ac = xs(
  "sp"
), Uc = xs("rtg"), zc = xs("rtc");
function Fc(e, s = $t) {
  Un("ec", e, s);
}
const Bc = "components", Ai = Symbol.for("v-ndc");
function Fa(e) {
  return it(e) ? Vc(Bc, e, !1) || e : e || Ai;
}
function Vc(e, s, o = !0, n = !1) {
  const l = ht || $t;
  if (l) {
    const i = l.type;
    {
      const u = Pu(
        i,
        !1
      );
      if (u && (u === s || u === Vt(s) || u === Mn(Vt(s))))
        return i;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      dl(l[e] || i[e], s) || // global registration
      dl(l.appContext[e], s)
    );
    return !r && n ? i : r;
  }
}
function dl(e, s) {
  return e && (e[s] || e[Vt(s)] || e[Mn(Vt(s))]);
}
function ge(e, s, o, n) {
  let l;
  const i = o, r = Ae(e);
  if (r || it(e)) {
    const u = r && ro(e);
    let d = !1, m = !1;
    u && (d = !Ft(e), m = Os(e), e = On(e)), l = new Array(e.length);
    for (let v = 0, h = e.length; v < h; v++)
      l[v] = s(
        d ? m ? yn(gt(e[v])) : gt(e[v]) : e[v],
        v,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = s(u + 1, u, void 0, i);
  } else if (Ze(e))
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
function Qs(e, s) {
  for (let o = 0; o < s.length; o++) {
    const n = s[o];
    if (Ae(n))
      for (let l = 0; l < n.length; l++)
        e[n[l].name] = n[l].fn;
    else n && (e[n.name] = n.key ? (...l) => {
      const i = n.fn(...l);
      return i && (i.key = n.key), i;
    } : n.fn);
  }
  return e;
}
function Ge(e, s, o = {}, n, l) {
  if (ht.ce || ht.parent && uo(ht.parent) && ht.parent.ce) {
    const m = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), a(), M(
      j,
      null,
      [C("slot", o, n && n())],
      m ? -2 : 64
    );
  }
  let i = e[s];
  i && i._c && (i._d = !1), a();
  const r = i && Ui(i(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  r && r.key, d = M(
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
function Ui(e) {
  return e.some((s) => jo(s) ? !(s.type === kt || s.type === j && !Ui(s.children)) : !0) ? e : null;
}
const pa = (e) => e ? or(e) ? Bn(e) : pa(e.parent) : null, Oo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ mt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => pa(e.parent),
    $root: (e) => pa(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Fi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ua(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Jo.bind(e.proxy)),
    $watch: (e) => uu.bind(e)
  })
), Xn = (e, s) => e !== et && !e.__isScriptSetup && Xe(e, s), Wc = {
  get({ _: e }, s) {
    if (s === "__v_skip")
      return !0;
    const { ctx: o, setupState: n, data: l, props: i, accessCache: r, type: u, appContext: d } = e;
    let m;
    if (s[0] !== "$") {
      const p = r[s];
      if (p !== void 0)
        switch (p) {
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
        if (Xn(n, s))
          return r[s] = 1, n[s];
        if (l !== et && Xe(l, s))
          return r[s] = 2, l[s];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (m = e.propsOptions[0]) && Xe(m, s)
        )
          return r[s] = 3, i[s];
        if (o !== et && Xe(o, s))
          return r[s] = 4, o[s];
        ga && (r[s] = 0);
      }
    }
    const v = Oo[s];
    let h, w;
    if (v)
      return s === "$attrs" && _t(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (h = u.__cssModules) && (h = h[s])
    )
      return h;
    if (o !== et && Xe(o, s))
      return r[s] = 4, o[s];
    if (
      // global properties
      w = d.config.globalProperties, Xe(w, s)
    )
      return w[s];
  },
  set({ _: e }, s, o) {
    const { data: n, setupState: l, ctx: i } = e;
    return Xn(l, s) ? (l[s] = o, !0) : n !== et && Xe(n, s) ? (n[s] = o, !0) : Xe(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (i[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: n, appContext: l, propsOptions: i, type: r }
  }, u) {
    let d, m;
    return !!(o[u] || e !== et && u[0] !== "$" && Xe(e, u) || Xn(s, u) || (d = i[0]) && Xe(d, u) || Xe(n, u) || Xe(Oo, u) || Xe(l.config.globalProperties, u) || (m = r.__cssModules) && m[u]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : Xe(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function fl(e) {
  return Ae(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let ga = !0;
function Gc(e) {
  const s = Fi(e), o = e.proxy, n = e.ctx;
  ga = !1, s.beforeCreate && ml(s.beforeCreate, e, "bc");
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
    activated: x,
    deactivated: $,
    beforeDestroy: P,
    beforeUnmount: N,
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
  if (m && jc(m, n, null), r)
    for (const z in r) {
      const R = r[z];
      ze(R) && (n[z] = R.bind(o));
    }
  if (l) {
    const z = l.call(o, o);
    Ze(z) && (e.data = zs(z));
  }
  if (ga = !0, i)
    for (const z in i) {
      const R = i[z], be = ze(R) ? R.bind(o, o) : ze(R.get) ? R.get.bind(o, o) : fs, ve = !ze(R) && ze(R.set) ? R.set.bind(o) : fs, Ee = F({
        get: be,
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
      zi(u[z], n, o, z);
  if (d) {
    const z = ze(d) ? d.call(o) : d;
    Reflect.ownKeys(z).forEach((R) => {
      Xc(R, z[R]);
    });
  }
  v && ml(v, e, "c");
  function U(z, R) {
    Ae(R) ? R.forEach((be) => z(be.bind(o))) : R && z(R.bind(o));
  }
  if (U(Oc, h), U(Qe, w), U(Nc, p), U(Oi, _), U(Mc, x), U(Dc, $), U(Fc, I), U(zc, B), U(Uc, A), U(Ni, N), U(ho, S), U(Ac, E), Ae(O))
    if (O.length) {
      const z = e.exposed || (e.exposed = {});
      O.forEach((R) => {
        Object.defineProperty(z, R, {
          get: () => o[R],
          set: (be) => o[R] = be,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  q && e.render === fs && (e.render = q), re != null && (e.inheritAttrs = re), Y && (e.components = Y), H && (e.directives = H), E && Di(e);
}
function jc(e, s, o = fs) {
  Ae(e) && (e = ha(e));
  for (const n in e) {
    const l = e[n];
    let i;
    Ze(l) ? "default" in l ? i = fn(
      l.from || n,
      l.default,
      !0
    ) : i = fn(l.from || n) : i = fn(l), Ct(i) ? Object.defineProperty(s, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : s[n] = i;
  }
}
function ml(e, s, o) {
  es(
    Ae(e) ? e.map((n) => n.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function zi(e, s, o, n) {
  let l = n.includes(".") ? Qi(o, n) : () => o[n];
  if (it(e)) {
    const i = s[e];
    ze(i) && xt(l, i);
  } else if (ze(e))
    xt(l, e.bind(o));
  else if (Ze(e))
    if (Ae(e))
      e.forEach((i) => zi(i, s, o, n));
    else {
      const i = ze(e.handler) ? e.handler.bind(o) : s[e.handler];
      ze(i) && xt(l, i, e);
    }
}
function Fi(e) {
  const s = e.type, { mixins: o, extends: n } = s, {
    mixins: l,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = e.appContext, u = i.get(s);
  let d;
  return u ? d = u : !l.length && !o && !n ? d = s : (d = {}, l.length && l.forEach(
    (m) => $n(d, m, r, !0)
  ), $n(d, s, r)), Ze(s) && i.set(s, d), d;
}
function $n(e, s, o, n = !1) {
  const { mixins: l, extends: i } = s;
  i && $n(e, i, o, !0), l && l.forEach(
    (r) => $n(e, r, o, !0)
  );
  for (const r in s)
    if (!(n && r === "expose")) {
      const u = Hc[r] || o && o[r];
      e[r] = u ? u(e[r], s[r]) : s[r];
    }
  return e;
}
const Hc = {
  data: vl,
  props: pl,
  emits: pl,
  // objects
  methods: To,
  computed: To,
  // lifecycle
  beforeCreate: St,
  created: St,
  beforeMount: St,
  mounted: St,
  beforeUpdate: St,
  updated: St,
  beforeDestroy: St,
  beforeUnmount: St,
  destroyed: St,
  unmounted: St,
  activated: St,
  deactivated: St,
  errorCaptured: St,
  serverPrefetch: St,
  // assets
  components: To,
  directives: To,
  // watch
  watch: qc,
  // provide / inject
  provide: vl,
  inject: Kc
};
function vl(e, s) {
  return s ? e ? function() {
    return mt(
      ze(e) ? e.call(this, this) : e,
      ze(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function Kc(e, s) {
  return To(ha(e), ha(s));
}
function ha(e) {
  if (Ae(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++)
      s[e[o]] = e[o];
    return s;
  }
  return e;
}
function St(e, s) {
  return e ? [...new Set([].concat(e, s))] : s;
}
function To(e, s) {
  return e ? mt(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function pl(e, s) {
  return e ? Ae(e) && Ae(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : mt(
    /* @__PURE__ */ Object.create(null),
    fl(e),
    fl(s ?? {})
  ) : s;
}
function qc(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = mt(/* @__PURE__ */ Object.create(null), e);
  for (const n in s)
    o[n] = St(e[n], s[n]);
  return o;
}
function Bi() {
  return {
    app: null,
    config: {
      isNativeTag: Jl,
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
let Yc = 0;
function Jc(e, s) {
  return function(n, l = null) {
    ze(n) || (n = mt({}, n)), l != null && !Ze(l) && (l = null);
    const i = Bi(), r = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const m = i.app = {
      _uid: Yc++,
      _component: n,
      _props: l,
      _container: null,
      _context: i,
      _instance: null,
      version: Mu,
      get config() {
        return i.config;
      },
      set config(v) {
      },
      use(v, ...h) {
        return r.has(v) || (v && ze(v.install) ? (r.add(v), v.install(m, ...h)) : ze(v) && (r.add(v), v(m, ...h))), m;
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
          return p.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(p, v, w), d = !0, m._container = v, v.__vue_app__ = m, Bn(p.component);
        }
      },
      onUnmount(v) {
        u.push(v);
      },
      unmount() {
        d && (es(
          u,
          m._instance,
          16
        ), e(null, m._container), delete m._container.__vue_app__);
      },
      provide(v, h) {
        return i.provides[v] = h, m;
      },
      runWithContext(v) {
        const h = fo;
        fo = m;
        try {
          return v();
        } finally {
          fo = h;
        }
      }
    };
    return m;
  };
}
let fo = null;
function Xc(e, s) {
  if ($t) {
    let o = $t.provides;
    const n = $t.parent && $t.parent.provides;
    n === o && (o = $t.provides = Object.create(n)), o[e] = s;
  }
}
function fn(e, s, o = !1) {
  const n = ja();
  if (n || fo) {
    let l = fo ? fo._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && ze(s) ? s.call(n && n.proxy) : s;
  }
}
const Vi = {}, Wi = () => Object.create(Vi), Gi = (e) => Object.getPrototypeOf(e) === Vi;
function Qc(e, s, o, n = !1) {
  const l = {}, i = Wi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ji(e, s, l, i);
  for (const r in e.propsOptions[0])
    r in l || (l[r] = void 0);
  o ? e.props = n ? l : hc(l) : e.type.props ? e.props = l : e.props = i, e.attrs = i;
}
function Zc(e, s, o, n) {
  const {
    props: l,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, u = Ye(l), [d] = e.propsOptions;
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
        if (zn(e.emitsOptions, w))
          continue;
        const p = s[w];
        if (d)
          if (Xe(i, w))
            p !== i[w] && (i[w] = p, m = !0);
          else {
            const _ = Vt(w);
            l[_] = ya(
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
    ji(e, s, l, i) && (m = !0);
    let v;
    for (const h in u)
      (!s || // for camelCase
      !Xe(s, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Us(h)) === h || !Xe(s, v))) && (d ? o && // for camelCase
      (o[h] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[h] = ya(
        d,
        u,
        h,
        void 0,
        e,
        !0
      )) : delete l[h]);
    if (i !== u)
      for (const h in i)
        (!s || !Xe(s, h)) && (delete i[h], m = !0);
  }
  m && bs(e.attrs, "set", "");
}
function ji(e, s, o, n) {
  const [l, i] = e.propsOptions;
  let r = !1, u;
  if (s)
    for (let d in s) {
      if (Po(d))
        continue;
      const m = s[d];
      let v;
      l && Xe(l, v = Vt(d)) ? !i || !i.includes(v) ? o[v] = m : (u || (u = {}))[v] = m : zn(e.emitsOptions, d) || (!(d in n) || m !== n[d]) && (n[d] = m, r = !0);
    }
  if (i) {
    const d = Ye(o), m = u || et;
    for (let v = 0; v < i.length; v++) {
      const h = i[v];
      o[h] = ya(
        l,
        d,
        h,
        m[h],
        e,
        !Xe(m, h)
      );
    }
  }
  return r;
}
function ya(e, s, o, n, l, i) {
  const r = e[o];
  if (r != null) {
    const u = Xe(r, "default");
    if (u && n === void 0) {
      const d = r.default;
      if (r.type !== Function && !r.skipFactory && ze(d)) {
        const { propsDefaults: m } = l;
        if (o in m)
          n = m[o];
        else {
          const v = Xo(l);
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
    ] && (n === "" || n === Us(o)) && (n = !0));
  }
  return n;
}
const eu = /* @__PURE__ */ new WeakMap();
function Hi(e, s, o = !1) {
  const n = o ? eu : s.propsCache, l = n.get(e);
  if (l)
    return l;
  const i = e.props, r = {}, u = [];
  let d = !1;
  if (!ze(e)) {
    const v = (h) => {
      d = !0;
      const [w, p] = Hi(h, s, !0);
      mt(r, w), p && u.push(...p);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!i && !d)
    return Ze(e) && n.set(e, lo), lo;
  if (Ae(i))
    for (let v = 0; v < i.length; v++) {
      const h = Vt(i[v]);
      gl(h) && (r[h] = et);
    }
  else if (i)
    for (const v in i) {
      const h = Vt(v);
      if (gl(h)) {
        const w = i[v], p = r[h] = Ae(w) || ze(w) ? { type: w } : mt({}, w), _ = p.type;
        let x = !1, $ = !0;
        if (Ae(_))
          for (let P = 0; P < _.length; ++P) {
            const N = _[P], T = ze(N) && N.name;
            if (T === "Boolean") {
              x = !0;
              break;
            } else T === "String" && ($ = !1);
          }
        else
          x = ze(_) && _.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = x, p[
          1
          /* shouldCastTrue */
        ] = $, (x || Xe(p, "default")) && u.push(h);
      }
    }
  const m = [r, u];
  return Ze(e) && n.set(e, m), m;
}
function gl(e) {
  return e[0] !== "$" && !Po(e);
}
const Ba = (e) => e === "_" || e === "_ctx" || e === "$stable", Va = (e) => Ae(e) ? e.map(ds) : [ds(e)], tu = (e, s, o) => {
  if (s._n)
    return s;
  const n = g((...l) => Va(s(...l)), o);
  return n._c = !1, n;
}, Ki = (e, s, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (Ba(l)) continue;
    const i = e[l];
    if (ze(i))
      s[l] = tu(l, i, n);
    else if (i != null) {
      const r = Va(i);
      s[l] = () => r;
    }
  }
}, qi = (e, s) => {
  const o = Va(s);
  e.slots.default = () => o;
}, Yi = (e, s, o) => {
  for (const n in s)
    (o || !Ba(n)) && (e[n] = s[n]);
}, su = (e, s, o) => {
  const n = e.slots = Wi();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (Yi(n, s, o), o && ei(n, "_", l, !0)) : Ki(s, n);
  } else s && qi(e, s);
}, ou = (e, s, o) => {
  const { vnode: n, slots: l } = e;
  let i = !0, r = et;
  if (n.shapeFlag & 32) {
    const u = s._;
    u ? o && u === 1 ? i = !1 : Yi(l, s, o) : (i = !s.$stable, Ki(s, l)), r = s;
  } else s && (qi(e, s), r = { default: 1 });
  if (i)
    for (const u in l)
      !Ba(u) && r[u] == null && delete l[u];
}, It = yu;
function nu(e) {
  return au(e);
}
function au(e, s) {
  const o = Ln();
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
    setScopeId: p = fs,
    insertStaticContent: _
  } = e, x = (L, V, oe, ae = null, de = null, fe = null, ke = void 0, $e = null, ne = !!V.dynamicChildren) => {
    if (L === V)
      return;
    L && !qs(L, V) && (ae = Ve(L), De(L, de, fe, !0), L = null), V.patchFlag === -2 && (ne = !1, V.dynamicChildren = null);
    const { type: ue, ref: Re, shapeFlag: Ce } = V;
    switch (ue) {
      case Fn:
        $(L, V, oe, ae);
        break;
      case kt:
        P(L, V, oe, ae);
        break;
      case Zn:
        L == null && N(V, oe, ae, ke);
        break;
      case j:
        Y(
          L,
          V,
          oe,
          ae,
          de,
          fe,
          ke,
          $e,
          ne
        );
        break;
      default:
        Ce & 1 ? q(
          L,
          V,
          oe,
          ae,
          de,
          fe,
          ke,
          $e,
          ne
        ) : Ce & 6 ? H(
          L,
          V,
          oe,
          ae,
          de,
          fe,
          ke,
          $e,
          ne
        ) : (Ce & 64 || Ce & 128) && ue.process(
          L,
          V,
          oe,
          ae,
          de,
          fe,
          ke,
          $e,
          ne,
          Fe
        );
    }
    Re != null && de ? Lo(Re, L && L.ref, fe, V || L, !V) : Re == null && L && L.ref != null && Lo(L.ref, null, fe, L, !0);
  }, $ = (L, V, oe, ae) => {
    if (L == null)
      n(
        V.el = u(V.children),
        oe,
        ae
      );
    else {
      const de = V.el = L.el;
      V.children !== L.children && m(de, V.children);
    }
  }, P = (L, V, oe, ae) => {
    L == null ? n(
      V.el = d(V.children || ""),
      oe,
      ae
    ) : V.el = L.el;
  }, N = (L, V, oe, ae) => {
    [L.el, L.anchor] = _(
      L.children,
      V,
      oe,
      ae,
      L.el,
      L.anchor
    );
  }, T = ({ el: L, anchor: V }, oe, ae) => {
    let de;
    for (; L && L !== V; )
      de = w(L), n(L, oe, ae), L = de;
    n(V, oe, ae);
  }, S = ({ el: L, anchor: V }) => {
    let oe;
    for (; L && L !== V; )
      oe = w(L), l(L), L = oe;
    l(V);
  }, q = (L, V, oe, ae, de, fe, ke, $e, ne) => {
    if (V.type === "svg" ? ke = "svg" : V.type === "math" && (ke = "mathml"), L == null)
      B(
        V,
        oe,
        ae,
        de,
        fe,
        ke,
        $e,
        ne
      );
    else {
      const ue = L.el && L.el._isVueCE ? L.el : null;
      try {
        ue && ue._beginPatch(), E(
          L,
          V,
          de,
          fe,
          ke,
          $e,
          ne
        );
      } finally {
        ue && ue._endPatch();
      }
    }
  }, B = (L, V, oe, ae, de, fe, ke, $e) => {
    let ne, ue;
    const { props: Re, shapeFlag: Ce, transition: ee, dirs: K } = L;
    if (ne = L.el = r(
      L.type,
      fe,
      Re && Re.is,
      Re
    ), Ce & 8 ? v(ne, L.children) : Ce & 16 && I(
      L.children,
      ne,
      null,
      ae,
      de,
      Qn(L, fe),
      ke,
      $e
    ), K && Ws(L, null, ae, "created"), A(ne, L, L.scopeId, ke, ae), Re) {
      for (const D in Re)
        D !== "value" && !Po(D) && i(ne, D, null, Re[D], fe, ae);
      "value" in Re && i(ne, "value", null, Re.value, fe), (ue = Re.onVnodeBeforeMount) && ls(ue, ae, L);
    }
    K && Ws(L, null, ae, "beforeMount");
    const X = lu(de, ee);
    X && ee.beforeEnter(ne), n(ne, V, oe), ((ue = Re && Re.onVnodeMounted) || X || K) && It(() => {
      ue && ls(ue, ae, L), X && ee.enter(ne), K && Ws(L, null, ae, "mounted");
    }, de);
  }, A = (L, V, oe, ae, de) => {
    if (oe && p(L, oe), ae)
      for (let fe = 0; fe < ae.length; fe++)
        p(L, ae[fe]);
    if (de) {
      let fe = de.subTree;
      if (V === fe || er(fe.type) && (fe.ssContent === V || fe.ssFallback === V)) {
        const ke = de.vnode;
        A(
          L,
          ke,
          ke.scopeId,
          ke.slotScopeIds,
          de.parent
        );
      }
    }
  }, I = (L, V, oe, ae, de, fe, ke, $e, ne = 0) => {
    for (let ue = ne; ue < L.length; ue++) {
      const Re = L[ue] = $e ? Ms(L[ue]) : ds(L[ue]);
      x(
        null,
        Re,
        V,
        oe,
        ae,
        de,
        fe,
        ke,
        $e
      );
    }
  }, E = (L, V, oe, ae, de, fe, ke) => {
    const $e = V.el = L.el;
    let { patchFlag: ne, dynamicChildren: ue, dirs: Re } = V;
    ne |= L.patchFlag & 16;
    const Ce = L.props || et, ee = V.props || et;
    let K;
    if (oe && Gs(oe, !1), (K = ee.onVnodeBeforeUpdate) && ls(K, oe, V, L), Re && Ws(V, L, oe, "beforeUpdate"), oe && Gs(oe, !0), (Ce.innerHTML && ee.innerHTML == null || Ce.textContent && ee.textContent == null) && v($e, ""), ue ? O(
      L.dynamicChildren,
      ue,
      $e,
      oe,
      ae,
      Qn(V, de),
      fe
    ) : ke || R(
      L,
      V,
      $e,
      null,
      oe,
      ae,
      Qn(V, de),
      fe,
      !1
    ), ne > 0) {
      if (ne & 16)
        re($e, Ce, ee, oe, de);
      else if (ne & 2 && Ce.class !== ee.class && i($e, "class", null, ee.class, de), ne & 4 && i($e, "style", Ce.style, ee.style, de), ne & 8) {
        const X = V.dynamicProps;
        for (let D = 0; D < X.length; D++) {
          const W = X[D], ce = Ce[W], Te = ee[W];
          (Te !== ce || W === "value") && i($e, W, ce, Te, de, oe);
        }
      }
      ne & 1 && L.children !== V.children && v($e, V.children);
    } else !ke && ue == null && re($e, Ce, ee, oe, de);
    ((K = ee.onVnodeUpdated) || Re) && It(() => {
      K && ls(K, oe, V, L), Re && Ws(V, L, oe, "updated");
    }, ae);
  }, O = (L, V, oe, ae, de, fe, ke) => {
    for (let $e = 0; $e < V.length; $e++) {
      const ne = L[$e], ue = V[$e], Re = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ne.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ne.type === j || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !qs(ne, ue) || // - In the case of a component, it could contain anything.
        ne.shapeFlag & 198) ? h(ne.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          oe
        )
      );
      x(
        ne,
        ue,
        Re,
        null,
        ae,
        de,
        fe,
        ke,
        !0
      );
    }
  }, re = (L, V, oe, ae, de) => {
    if (V !== oe) {
      if (V !== et)
        for (const fe in V)
          !Po(fe) && !(fe in oe) && i(
            L,
            fe,
            V[fe],
            null,
            de,
            ae
          );
      for (const fe in oe) {
        if (Po(fe)) continue;
        const ke = oe[fe], $e = V[fe];
        ke !== $e && fe !== "value" && i(L, fe, $e, ke, de, ae);
      }
      "value" in oe && i(L, "value", V.value, oe.value, de);
    }
  }, Y = (L, V, oe, ae, de, fe, ke, $e, ne) => {
    const ue = V.el = L ? L.el : u(""), Re = V.anchor = L ? L.anchor : u("");
    let { patchFlag: Ce, dynamicChildren: ee, slotScopeIds: K } = V;
    K && ($e = $e ? $e.concat(K) : K), L == null ? (n(ue, oe, ae), n(Re, oe, ae), I(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      V.children || [],
      oe,
      Re,
      de,
      fe,
      ke,
      $e,
      ne
    )) : Ce > 0 && Ce & 64 && ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    L.dynamicChildren ? (O(
      L.dynamicChildren,
      ee,
      oe,
      de,
      fe,
      ke,
      $e
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (V.key != null || de && V === de.subTree) && Wa(
      L,
      V,
      !0
      /* shallow */
    )) : R(
      L,
      V,
      oe,
      Re,
      de,
      fe,
      ke,
      $e,
      ne
    );
  }, H = (L, V, oe, ae, de, fe, ke, $e, ne) => {
    V.slotScopeIds = $e, L == null ? V.shapeFlag & 512 ? de.ctx.activate(
      V,
      oe,
      ae,
      ke,
      ne
    ) : te(
      V,
      oe,
      ae,
      de,
      fe,
      ke,
      ne
    ) : Z(L, V, ne);
  }, te = (L, V, oe, ae, de, fe, ke) => {
    const $e = L.component = xu(
      L,
      ae,
      de
    );
    if (An(L) && ($e.ctx.renderer = Fe), Su($e, !1, ke), $e.asyncDep) {
      if (de && de.registerDep($e, U, ke), !L.el) {
        const ne = $e.subTree = C(kt);
        P(null, ne, V, oe), L.placeholder = ne.el;
      }
    } else
      U(
        $e,
        L,
        V,
        oe,
        de,
        fe,
        ke
      );
  }, Z = (L, V, oe) => {
    const ae = V.component = L.component;
    if (gu(L, V, oe))
      if (ae.asyncDep && !ae.asyncResolved) {
        z(ae, V, oe);
        return;
      } else
        ae.next = V, ae.update();
    else
      V.el = L.el, ae.vnode = V;
  }, U = (L, V, oe, ae, de, fe, ke) => {
    const $e = () => {
      if (L.isMounted) {
        let { next: Ce, bu: ee, u: K, parent: X, vnode: D } = L;
        {
          const rt = Ji(L);
          if (rt) {
            Ce && (Ce.el = D.el, z(L, Ce, ke)), rt.asyncDep.then(() => {
              L.isUnmounted || $e();
            });
            return;
          }
        }
        let W = Ce, ce;
        Gs(L, !1), Ce ? (Ce.el = D.el, z(L, Ce, ke)) : Ce = D, ee && un(ee), (ce = Ce.props && Ce.props.onVnodeBeforeUpdate) && ls(ce, X, Ce, D), Gs(L, !0);
        const Te = yl(L), Ke = L.subTree;
        L.subTree = Te, x(
          Ke,
          Te,
          // parent may have changed if it's in a teleport
          h(Ke.el),
          // anchor may have changed if it's in a fragment
          Ve(Ke),
          L,
          de,
          fe
        ), Ce.el = Te.el, W === null && hu(L, Te.el), K && It(K, de), (ce = Ce.props && Ce.props.onVnodeUpdated) && It(
          () => ls(ce, X, Ce, D),
          de
        );
      } else {
        let Ce;
        const { el: ee, props: K } = V, { bm: X, m: D, parent: W, root: ce, type: Te } = L, Ke = uo(V);
        Gs(L, !1), X && un(X), !Ke && (Ce = K && K.onVnodeBeforeMount) && ls(Ce, W, V), Gs(L, !0);
        {
          ce.ce && // @ts-expect-error _def is private
          ce.ce._def.shadowRoot !== !1 && ce.ce._injectChildStyle(Te);
          const rt = L.subTree = yl(L);
          x(
            null,
            rt,
            oe,
            ae,
            L,
            de,
            fe
          ), V.el = rt.el;
        }
        if (D && It(D, de), !Ke && (Ce = K && K.onVnodeMounted)) {
          const rt = V;
          It(
            () => ls(Ce, W, rt),
            de
          );
        }
        (V.shapeFlag & 256 || W && uo(W.vnode) && W.vnode.shapeFlag & 256) && L.a && It(L.a, de), L.isMounted = !0, V = oe = ae = null;
      }
    };
    L.scope.on();
    const ne = L.effect = new ni($e);
    L.scope.off();
    const ue = L.update = ne.run.bind(ne), Re = L.job = ne.runIfDirty.bind(ne);
    Re.i = L, Re.id = L.uid, ne.scheduler = () => Ua(Re), Gs(L, !0), ue();
  }, z = (L, V, oe) => {
    V.component = L;
    const ae = L.vnode.props;
    L.vnode = V, L.next = null, Zc(L, V.props, ae, oe), ou(L, V.children, oe), $s(), al(L), Cs();
  }, R = (L, V, oe, ae, de, fe, ke, $e, ne = !1) => {
    const ue = L && L.children, Re = L ? L.shapeFlag : 0, Ce = V.children, { patchFlag: ee, shapeFlag: K } = V;
    if (ee > 0) {
      if (ee & 128) {
        ve(
          ue,
          Ce,
          oe,
          ae,
          de,
          fe,
          ke,
          $e,
          ne
        );
        return;
      } else if (ee & 256) {
        be(
          ue,
          Ce,
          oe,
          ae,
          de,
          fe,
          ke,
          $e,
          ne
        );
        return;
      }
    }
    K & 8 ? (Re & 16 && Se(ue, de, fe), Ce !== ue && v(oe, Ce)) : Re & 16 ? K & 16 ? ve(
      ue,
      Ce,
      oe,
      ae,
      de,
      fe,
      ke,
      $e,
      ne
    ) : Se(ue, de, fe, !0) : (Re & 8 && v(oe, ""), K & 16 && I(
      Ce,
      oe,
      ae,
      de,
      fe,
      ke,
      $e,
      ne
    ));
  }, be = (L, V, oe, ae, de, fe, ke, $e, ne) => {
    L = L || lo, V = V || lo;
    const ue = L.length, Re = V.length, Ce = Math.min(ue, Re);
    let ee;
    for (ee = 0; ee < Ce; ee++) {
      const K = V[ee] = ne ? Ms(V[ee]) : ds(V[ee]);
      x(
        L[ee],
        K,
        oe,
        null,
        de,
        fe,
        ke,
        $e,
        ne
      );
    }
    ue > Re ? Se(
      L,
      de,
      fe,
      !0,
      !1,
      Ce
    ) : I(
      V,
      oe,
      ae,
      de,
      fe,
      ke,
      $e,
      ne,
      Ce
    );
  }, ve = (L, V, oe, ae, de, fe, ke, $e, ne) => {
    let ue = 0;
    const Re = V.length;
    let Ce = L.length - 1, ee = Re - 1;
    for (; ue <= Ce && ue <= ee; ) {
      const K = L[ue], X = V[ue] = ne ? Ms(V[ue]) : ds(V[ue]);
      if (qs(K, X))
        x(
          K,
          X,
          oe,
          null,
          de,
          fe,
          ke,
          $e,
          ne
        );
      else
        break;
      ue++;
    }
    for (; ue <= Ce && ue <= ee; ) {
      const K = L[Ce], X = V[ee] = ne ? Ms(V[ee]) : ds(V[ee]);
      if (qs(K, X))
        x(
          K,
          X,
          oe,
          null,
          de,
          fe,
          ke,
          $e,
          ne
        );
      else
        break;
      Ce--, ee--;
    }
    if (ue > Ce) {
      if (ue <= ee) {
        const K = ee + 1, X = K < Re ? V[K].el : ae;
        for (; ue <= ee; )
          x(
            null,
            V[ue] = ne ? Ms(V[ue]) : ds(V[ue]),
            oe,
            X,
            de,
            fe,
            ke,
            $e,
            ne
          ), ue++;
      }
    } else if (ue > ee)
      for (; ue <= Ce; )
        De(L[ue], de, fe, !0), ue++;
    else {
      const K = ue, X = ue, D = /* @__PURE__ */ new Map();
      for (ue = X; ue <= ee; ue++) {
        const ct = V[ue] = ne ? Ms(V[ue]) : ds(V[ue]);
        ct.key != null && D.set(ct.key, ue);
      }
      let W, ce = 0;
      const Te = ee - X + 1;
      let Ke = !1, rt = 0;
      const wt = new Array(Te);
      for (ue = 0; ue < Te; ue++) wt[ue] = 0;
      for (ue = K; ue <= Ce; ue++) {
        const ct = L[ue];
        if (ce >= Te) {
          De(ct, de, fe, !0);
          continue;
        }
        let ft;
        if (ct.key != null)
          ft = D.get(ct.key);
        else
          for (W = X; W <= ee; W++)
            if (wt[W - X] === 0 && qs(ct, V[W])) {
              ft = W;
              break;
            }
        ft === void 0 ? De(ct, de, fe, !0) : (wt[ft - X] = ue + 1, ft >= rt ? rt = ft : Ke = !0, x(
          ct,
          V[ft],
          oe,
          null,
          de,
          fe,
          ke,
          $e,
          ne
        ), ce++);
      }
      const bt = Ke ? iu(wt) : lo;
      for (W = bt.length - 1, ue = Te - 1; ue >= 0; ue--) {
        const ct = X + ue, ft = V[ct], Gt = V[ct + 1], vs = ct + 1 < Re ? (
          // #13559, fallback to el placeholder for unresolved async component
          Gt.el || Gt.placeholder
        ) : ae;
        wt[ue] === 0 ? x(
          null,
          ft,
          oe,
          vs,
          de,
          fe,
          ke,
          $e,
          ne
        ) : Ke && (W < 0 || ue !== bt[W] ? Ee(ft, oe, vs, 2) : W--);
      }
    }
  }, Ee = (L, V, oe, ae, de = null) => {
    const { el: fe, type: ke, transition: $e, children: ne, shapeFlag: ue } = L;
    if (ue & 6) {
      Ee(L.component.subTree, V, oe, ae);
      return;
    }
    if (ue & 128) {
      L.suspense.move(V, oe, ae);
      return;
    }
    if (ue & 64) {
      ke.move(L, V, oe, Fe);
      return;
    }
    if (ke === j) {
      n(fe, V, oe);
      for (let Ce = 0; Ce < ne.length; Ce++)
        Ee(ne[Ce], V, oe, ae);
      n(L.anchor, V, oe);
      return;
    }
    if (ke === Zn) {
      T(L, V, oe);
      return;
    }
    if (ae !== 2 && ue & 1 && $e)
      if (ae === 0)
        $e.beforeEnter(fe), n(fe, V, oe), It(() => $e.enter(fe), de);
      else {
        const { leave: Ce, delayLeave: ee, afterLeave: K } = $e, X = () => {
          L.ctx.isUnmounted ? l(fe) : n(fe, V, oe);
        }, D = () => {
          fe._isLeaving && fe[ws](
            !0
            /* cancelled */
          ), Ce(fe, () => {
            X(), K && K();
          });
        };
        ee ? ee(fe, X, D) : D();
      }
    else
      n(fe, V, oe);
  }, De = (L, V, oe, ae = !1, de = !1) => {
    const {
      type: fe,
      props: ke,
      ref: $e,
      children: ne,
      dynamicChildren: ue,
      shapeFlag: Re,
      patchFlag: Ce,
      dirs: ee,
      cacheIndex: K
    } = L;
    if (Ce === -2 && (de = !1), $e != null && ($s(), Lo($e, null, oe, L, !0), Cs()), K != null && (V.renderCache[K] = void 0), Re & 256) {
      V.ctx.deactivate(L);
      return;
    }
    const X = Re & 1 && ee, D = !uo(L);
    let W;
    if (D && (W = ke && ke.onVnodeBeforeUnmount) && ls(W, V, L), Re & 6)
      _e(L.component, oe, ae);
    else {
      if (Re & 128) {
        L.suspense.unmount(oe, ae);
        return;
      }
      X && Ws(L, null, V, "beforeUnmount"), Re & 64 ? L.type.remove(
        L,
        V,
        oe,
        Fe,
        ae
      ) : ue && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ue.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (fe !== j || Ce > 0 && Ce & 64) ? Se(
        ue,
        V,
        oe,
        !1,
        !0
      ) : (fe === j && Ce & 384 || !de && Re & 16) && Se(ne, V, oe), ae && je(L);
    }
    (D && (W = ke && ke.onVnodeUnmounted) || X) && It(() => {
      W && ls(W, V, L), X && Ws(L, null, V, "unmounted");
    }, oe);
  }, je = (L) => {
    const { type: V, el: oe, anchor: ae, transition: de } = L;
    if (V === j) {
      Je(oe, ae);
      return;
    }
    if (V === Zn) {
      S(L);
      return;
    }
    const fe = () => {
      l(oe), de && !de.persisted && de.afterLeave && de.afterLeave();
    };
    if (L.shapeFlag & 1 && de && !de.persisted) {
      const { leave: ke, delayLeave: $e } = de, ne = () => ke(oe, fe);
      $e ? $e(L.el, fe, ne) : ne();
    } else
      fe();
  }, Je = (L, V) => {
    let oe;
    for (; L !== V; )
      oe = w(L), l(L), L = oe;
    l(V);
  }, _e = (L, V, oe) => {
    const { bum: ae, scope: de, job: fe, subTree: ke, um: $e, m: ne, a: ue } = L;
    hl(ne), hl(ue), ae && un(ae), de.stop(), fe && (fe.flags |= 8, De(ke, L, V, oe)), $e && It($e, V), It(() => {
      L.isUnmounted = !0;
    }, V);
  }, Se = (L, V, oe, ae = !1, de = !1, fe = 0) => {
    for (let ke = fe; ke < L.length; ke++)
      De(L[ke], V, oe, ae, de);
  }, Ve = (L) => {
    if (L.shapeFlag & 6)
      return Ve(L.component.subTree);
    if (L.shapeFlag & 128)
      return L.suspense.next();
    const V = w(L.anchor || L.el), oe = V && V[Ci];
    return oe ? w(oe) : V;
  };
  let ye = !1;
  const le = (L, V, oe) => {
    L == null ? V._vnode && De(V._vnode, null, null, !0) : x(
      V._vnode || null,
      L,
      V,
      null,
      null,
      null,
      oe
    ), V._vnode = L, ye || (ye = !0, al(), _i(), ye = !1);
  }, Fe = {
    p: x,
    um: De,
    m: Ee,
    r: je,
    mt: te,
    mc: I,
    pc: R,
    pbc: O,
    n: Ve,
    o: e
  };
  return {
    render: le,
    hydrate: void 0,
    createApp: Jc(le)
  };
}
function Qn({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function Gs({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function lu(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function Wa(e, s, o = !1) {
  const n = e.children, l = s.children;
  if (Ae(n) && Ae(l))
    for (let i = 0; i < n.length; i++) {
      const r = n[i];
      let u = l[i];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[i] = Ms(l[i]), u.el = r.el), !o && u.patchFlag !== -2 && Wa(r, u)), u.type === Fn && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = r.el), u.type === kt && !u.el && (u.el = r.el);
    }
}
function iu(e) {
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
function Ji(e) {
  const s = e.subTree.component;
  if (s)
    return s.asyncDep && !s.asyncResolved ? s : Ji(s);
}
function hl(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const ru = Symbol.for("v-scx"), cu = () => fn(ru);
function xt(e, s, o) {
  return Xi(e, s, o);
}
function Xi(e, s, o = et) {
  const { immediate: n, deep: l, flush: i, once: r } = o, u = mt({}, o), d = s && n || !s && i !== "post";
  let m;
  if (Ho) {
    if (i === "sync") {
      const p = cu();
      m = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!d) {
      const p = () => {
      };
      return p.stop = fs, p.resume = fs, p.pause = fs, p;
    }
  }
  const v = $t;
  u.call = (p, _, x) => es(p, v, _, x);
  let h = !1;
  i === "post" ? u.scheduler = (p) => {
    It(p, v && v.suspense);
  } : i !== "sync" && (h = !0, u.scheduler = (p, _) => {
    _ ? p() : Ua(p);
  }), u.augmentJob = (p) => {
    s && (p.flags |= 4), h && (p.flags |= 2, v && (p.id = v.uid, p.i = v));
  };
  const w = xc(e, s, u);
  return Ho && (m ? m.push(w) : d && w()), w;
}
function uu(e, s, o) {
  const n = this.proxy, l = it(e) ? e.includes(".") ? Qi(n, e) : () => n[e] : e.bind(n, n);
  let i;
  ze(s) ? i = s : (i = s.handler, o = s);
  const r = Xo(this), u = Xi(l, i.bind(n), o);
  return r(), u;
}
function Qi(e, s) {
  const o = s.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < o.length && n; l++)
      n = n[o[l]];
    return n;
  };
}
const du = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${Vt(s)}Modifiers`] || e[`${Us(s)}Modifiers`];
function fu(e, s, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || et;
  let l = o;
  const i = s.startsWith("update:"), r = i && du(n, s.slice(7));
  r && (r.trim && (l = o.map((v) => it(v) ? v.trim() : v)), r.number && (l = o.map(Dn)));
  let u, d = n[u = jn(s)] || // also try camelCase event handler (#2249)
  n[u = jn(Vt(s))];
  !d && i && (d = n[u = jn(Us(s))]), d && es(
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
    e.emitted[u] = !0, es(
      m,
      e,
      6,
      l
    );
  }
}
const mu = /* @__PURE__ */ new WeakMap();
function Zi(e, s, o = !1) {
  const n = o ? mu : s.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const i = e.emits;
  let r = {}, u = !1;
  if (!ze(e)) {
    const d = (m) => {
      const v = Zi(m, s, !0);
      v && (u = !0, mt(r, v));
    };
    !o && s.mixins.length && s.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !i && !u ? (Ze(e) && n.set(e, null), null) : (Ae(i) ? i.forEach((d) => r[d] = null) : mt(r, i), Ze(e) && n.set(e, r), r);
}
function zn(e, s) {
  return !e || !Pn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), Xe(e, s[0].toLowerCase() + s.slice(1)) || Xe(e, Us(s)) || Xe(e, s));
}
function yl(e) {
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
    inheritAttrs: x
  } = e, $ = _n(e);
  let P, N;
  try {
    if (o.shapeFlag & 4) {
      const S = l || n, q = S;
      P = ds(
        m.call(
          q,
          S,
          v,
          h,
          p,
          w,
          _
        )
      ), N = u;
    } else {
      const S = s;
      P = ds(
        S.length > 1 ? S(
          h,
          { attrs: u, slots: r, emit: d }
        ) : S(
          h,
          null
        )
      ), N = s.props ? u : vu(u);
    }
  } catch (S) {
    No.length = 0, Nn(S, e, 1), P = C(kt);
  }
  let T = P;
  if (N && x !== !1) {
    const S = Object.keys(N), { shapeFlag: q } = T;
    S.length && q & 7 && (i && S.some(Ia) && (N = pu(
      N,
      i
    )), T = Ns(T, N, !1, !0));
  }
  return o.dirs && (T = Ns(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(o.dirs) : o.dirs), o.transition && Xs(T, o.transition), P = T, _n($), P;
}
const vu = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Pn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, pu = (e, s) => {
  const o = {};
  for (const n in e)
    (!Ia(n) || !(n.slice(9) in s)) && (o[n] = e[n]);
  return o;
};
function gu(e, s, o) {
  const { props: n, children: l, component: i } = e, { props: r, children: u, patchFlag: d } = s, m = i.emitsOptions;
  if (s.dirs || s.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return n ? wl(n, r, m) : !!r;
    if (d & 8) {
      const v = s.dynamicProps;
      for (let h = 0; h < v.length; h++) {
        const w = v[h];
        if (r[w] !== n[w] && !zn(m, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : n === r ? !1 : n ? r ? wl(n, r, m) : !0 : !!r;
  return !1;
}
function wl(e, s, o) {
  const n = Object.keys(s);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < n.length; l++) {
    const i = n[l];
    if (s[i] !== e[i] && !zn(o, i))
      return !0;
  }
  return !1;
}
function hu({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const n = s.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const er = (e) => e.__isSuspense;
function yu(e, s) {
  s && s.pendingBranch ? Ae(e) ? s.effects.push(...e) : s.effects.push(e) : Ec(e);
}
const j = Symbol.for("v-fgt"), Fn = Symbol.for("v-txt"), kt = Symbol.for("v-cmt"), Zn = Symbol.for("v-stc"), No = [];
let Nt = null;
function a(e = !1) {
  No.push(Nt = e ? null : []);
}
function wu() {
  No.pop(), Nt = No[No.length - 1] || null;
}
let Go = 1;
function Cn(e, s = !1) {
  Go += e, e < 0 && Nt && s && (Nt.hasOnce = !0);
}
function tr(e) {
  return e.dynamicChildren = Go > 0 ? Nt || lo : null, wu(), Go > 0 && Nt && Nt.push(e), e;
}
function c(e, s, o, n, l, i) {
  return tr(
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
  return tr(
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
function jo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function qs(e, s) {
  return e.type === s.type && e.key === s.key;
}
const sr = ({ key: e }) => e ?? null, mn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? it(e) || Ct(e) || ze(e) ? { i: ht, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, n = 0, l = null, i = e === j ? 0 : 1, r = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && sr(s),
    ref: s && mn(s),
    scopeId: $i,
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
    ctx: ht
  };
  return u ? (Ga(d, o), i & 128 && e.normalize(d)) : o && (d.shapeFlag |= it(o) ? 8 : 16), Go > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Nt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Nt.push(d), d;
}
const C = bu;
function bu(e, s = null, o = null, n = 0, l = null, i = !1) {
  if ((!e || e === Ai) && (e = kt), jo(e)) {
    const u = Ns(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && Ga(u, o), Go > 0 && !i && Nt && (u.shapeFlag & 6 ? Nt[Nt.indexOf(e)] = u : Nt.push(u)), u.patchFlag = -2, u;
  }
  if (Ru(e) && (e = e.__vccOpts), s) {
    s = _u(s);
    let { class: u, style: d } = s;
    u && !it(u) && (s.class = xe(u)), Ze(d) && (Aa(d) && !Ae(d) && (d = mt({}, d)), s.style = Wt(d));
  }
  const r = it(e) ? 1 : er(e) ? 128 : xi(e) ? 64 : Ze(e) ? 4 : ze(e) ? 2 : 0;
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
function _u(e) {
  return e ? Aa(e) || Gi(e) ? mt({}, e) : e : null;
}
function Ns(e, s, o = !1, n = !1) {
  const { props: l, ref: i, patchFlag: r, children: u, transition: d } = e, m = s ? ku(l || {}, s) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && sr(m),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && i ? Ae(i) ? i.concat(mn(s)) : [i, mn(s)] : mn(s)
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
  return d && n && Xs(
    v,
    d.clone(v)
  ), v;
}
function b(e = " ", s = 0) {
  return C(Fn, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (a(), M(kt, null, e)) : C(kt, null, e);
}
function ds(e) {
  return e == null || typeof e == "boolean" ? C(kt) : Ae(e) ? C(
    j,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : jo(e) ? Ms(e) : C(Fn, null, String(e));
}
function Ms(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ns(e);
}
function Ga(e, s) {
  let o = 0;
  const { shapeFlag: n } = e;
  if (s == null)
    s = null;
  else if (Ae(s))
    o = 16;
  else if (typeof s == "object")
    if (n & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), Ga(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !Gi(s) ? s._ctx = ht : l === 3 && ht && (ht.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else ze(s) ? (s = { default: s, _ctx: ht }, o = 32) : (s = String(s), n & 64 ? (o = 16, s = [b(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function ku(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        s.class !== n.class && (s.class = xe([s.class, n.class]));
      else if (l === "style")
        s.style = Wt([s.style, n.style]);
      else if (Pn(l)) {
        const i = s[l], r = n[l];
        r && i !== r && !(Ae(i) && i.includes(r)) && (s[l] = i ? [].concat(i, r) : r);
      } else l !== "" && (s[l] = n[l]);
  }
  return s;
}
function ls(e, s, o, n = null) {
  es(e, s, 7, [
    o,
    n
  ]);
}
const $u = Bi();
let Cu = 0;
function xu(e, s, o) {
  const n = e.type, l = (s ? s.appContext : e.appContext) || $u, i = {
    uid: Cu++,
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
    scope: new Xr(
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
    propsOptions: Hi(n, l),
    emitsOptions: Zi(n, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: et,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: et,
    data: et,
    props: et,
    attrs: et,
    slots: et,
    refs: et,
    setupState: et,
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
  return i.ctx = { _: i }, i.root = s ? s.root : i, i.emit = fu.bind(null, i), e.ce && e.ce(i), i;
}
let $t = null;
const ja = () => $t || ht;
let xn, wa;
{
  const e = Ln(), s = (o, n) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(n), (i) => {
      l.length > 1 ? l.forEach((r) => r(i)) : l[0](i);
    };
  };
  xn = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => $t = o
  ), wa = s(
    "__VUE_SSR_SETTERS__",
    (o) => Ho = o
  );
}
const Xo = (e) => {
  const s = $t;
  return xn(e), e.scope.on(), () => {
    e.scope.off(), xn(s);
  };
}, bl = () => {
  $t && $t.scope.off(), xn(null);
};
function or(e) {
  return e.vnode.shapeFlag & 4;
}
let Ho = !1;
function Su(e, s = !1, o = !1) {
  s && wa(s);
  const { props: n, children: l } = e.vnode, i = or(e);
  Qc(e, n, i, s), su(e, l, o || s);
  const r = i ? Iu(e, s) : void 0;
  return s && wa(!1), r;
}
function Iu(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Wc);
  const { setup: n } = o;
  if (n) {
    $s();
    const l = e.setupContext = n.length > 1 ? Tu(e) : null, i = Xo(e), r = Yo(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = Xl(r);
    if (Cs(), i(), (u || e.sp) && !uo(e) && Di(e), u) {
      if (r.then(bl, bl), s)
        return r.then((d) => {
          _l(e, d);
        }).catch((d) => {
          Nn(d, e, 0);
        });
      e.asyncDep = r;
    } else
      _l(e, r);
  } else
    nr(e);
}
function _l(e, s, o) {
  ze(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : Ze(s) && (e.setupState = yi(s)), nr(e);
}
function nr(e, s, o) {
  const n = e.type;
  e.render || (e.render = n.render || fs);
  {
    const l = Xo(e);
    $s();
    try {
      Gc(e);
    } finally {
      Cs(), l();
    }
  }
}
const Eu = {
  get(e, s) {
    return _t(e, "get", ""), e[s];
  }
};
function Tu(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Eu),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function Bn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(yi(yc(e.exposed)), {
    get(s, o) {
      if (o in s)
        return s[o];
      if (o in Oo)
        return Oo[o](e);
    },
    has(s, o) {
      return o in s || o in Oo;
    }
  })) : e.proxy;
}
function Pu(e, s = !0) {
  return ze(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function Ru(e) {
  return ze(e) && "__vccOpts" in e;
}
const F = (e, s) => $c(e, s, Ho);
function Vn(e, s, o) {
  try {
    Cn(-1);
    const n = arguments.length;
    return n === 2 ? Ze(s) && !Ae(s) ? jo(s) ? C(e, null, [s]) : C(e, s) : C(e, null, s) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && jo(o) && (o = [o]), C(e, s, o));
  } finally {
    Cn(1);
  }
}
const Mu = "3.5.24";
/**
* @vue/runtime-dom v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ba;
const kl = typeof window < "u" && window.trustedTypes;
if (kl)
  try {
    ba = /* @__PURE__ */ kl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ar = ba ? (e) => ba.createHTML(e) : (e) => e, Du = "http://www.w3.org/2000/svg", Lu = "http://www.w3.org/1998/Math/MathML", ys = typeof document < "u" ? document : null, $l = ys && /* @__PURE__ */ ys.createElement("template"), Ou = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, n) => {
    const l = s === "svg" ? ys.createElementNS(Du, e) : s === "mathml" ? ys.createElementNS(Lu, e) : o ? ys.createElement(e, { is: o }) : ys.createElement(e);
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
      $l.innerHTML = ar(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = $l.content;
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
}, Ts = "transition", Co = "animation", vo = Symbol("_vtc"), lr = {
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
}, ir = /* @__PURE__ */ mt(
  {},
  Ti,
  lr
), Nu = (e) => (e.displayName = "Transition", e.props = ir, e), Au = /* @__PURE__ */ Nu(
  (e, { slots: s }) => Vn(Rc, rr(e), s)
), js = (e, s = []) => {
  Ae(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, Cl = (e) => e ? Ae(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function rr(e) {
  const s = {};
  for (const Y in e)
    Y in lr || (s[Y] = e[Y]);
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
  } = e, _ = Uu(l), x = _ && _[0], $ = _ && _[1], {
    onBeforeEnter: P,
    onEnter: N,
    onEnterCancelled: T,
    onLeave: S,
    onLeaveCancelled: q,
    onBeforeAppear: B = P,
    onAppear: A = N,
    onAppearCancelled: I = T
  } = s, E = (Y, H, te, Z) => {
    Y._enterCancelled = Z, Ps(Y, H ? v : u), Ps(Y, H ? m : r), te && te();
  }, O = (Y, H) => {
    Y._isLeaving = !1, Ps(Y, h), Ps(Y, p), Ps(Y, w), H && H();
  }, re = (Y) => (H, te) => {
    const Z = Y ? A : N, U = () => E(H, Y, te);
    js(Z, [H, U]), xl(() => {
      Ps(H, Y ? d : i), rs(H, Y ? v : u), Cl(Z) || Sl(H, n, x, U);
    });
  };
  return mt(s, {
    onBeforeEnter(Y) {
      js(P, [Y]), rs(Y, i), rs(Y, r);
    },
    onBeforeAppear(Y) {
      js(B, [Y]), rs(Y, d), rs(Y, m);
    },
    onEnter: re(!1),
    onAppear: re(!0),
    onLeave(Y, H) {
      Y._isLeaving = !0;
      const te = () => O(Y, H);
      rs(Y, h), Y._enterCancelled ? (rs(Y, w), _a(Y)) : (_a(Y), rs(Y, w)), xl(() => {
        Y._isLeaving && (Ps(Y, h), rs(Y, p), Cl(S) || Sl(Y, n, $, te));
      }), js(S, [Y, te]);
    },
    onEnterCancelled(Y) {
      E(Y, !1, void 0, !0), js(T, [Y]);
    },
    onAppearCancelled(Y) {
      E(Y, !0, void 0, !0), js(I, [Y]);
    },
    onLeaveCancelled(Y) {
      O(Y), js(q, [Y]);
    }
  });
}
function Uu(e) {
  if (e == null)
    return null;
  if (Ze(e))
    return [ea(e.enter), ea(e.leave)];
  {
    const s = ea(e);
    return [s, s];
  }
}
function ea(e) {
  return Wr(e);
}
function rs(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[vo] || (e[vo] = /* @__PURE__ */ new Set())).add(s);
}
function Ps(e, s) {
  s.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const o = e[vo];
  o && (o.delete(s), o.size || (e[vo] = void 0));
}
function xl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let zu = 0;
function Sl(e, s, o, n) {
  const l = e._endId = ++zu, i = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(i, o);
  const { type: r, timeout: u, propCount: d } = cr(e, s);
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
function cr(e, s) {
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${Ts}Delay`), i = n(`${Ts}Duration`), r = Il(l, i), u = n(`${Co}Delay`), d = n(`${Co}Duration`), m = Il(u, d);
  let v = null, h = 0, w = 0;
  s === Ts ? r > 0 && (v = Ts, h = r, w = i.length) : s === Co ? m > 0 && (v = Co, h = m, w = d.length) : (h = Math.max(r, m), v = h > 0 ? r > m ? Ts : Co : null, w = v ? v === Ts ? i.length : d.length : 0);
  const p = v === Ts && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Ts}Property`).toString()
  );
  return {
    type: v,
    timeout: h,
    propCount: w,
    hasTransform: p
  };
}
function Il(e, s) {
  for (; e.length < s.length; )
    e = e.concat(e);
  return Math.max(...s.map((o, n) => El(o) + El(e[n])));
}
function El(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function _a(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Fu(e, s, o) {
  const n = e[vo];
  n && (s = (s ? [s, ...n] : [...n]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const Tl = Symbol("_vod"), Bu = Symbol("_vsh"), Vu = Symbol(""), Wu = /(?:^|;)\s*display\s*:/;
function Gu(e, s, o) {
  const n = e.style, l = it(o);
  let i = !1;
  if (o && !l) {
    if (s)
      if (it(s))
        for (const r of s.split(";")) {
          const u = r.slice(0, r.indexOf(":")).trim();
          o[u] == null && vn(n, u, "");
        }
      else
        for (const r in s)
          o[r] == null && vn(n, r, "");
    for (const r in o)
      r === "display" && (i = !0), vn(n, r, o[r]);
  } else if (l) {
    if (s !== o) {
      const r = n[Vu];
      r && (o += ";" + r), n.cssText = o, i = Wu.test(o);
    }
  } else s && e.removeAttribute("style");
  Tl in e && (e[Tl] = i ? n.display : "", e[Bu] && (n.display = "none"));
}
const Pl = /\s*!important$/;
function vn(e, s, o) {
  if (Ae(o))
    o.forEach((n) => vn(e, s, n));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const n = ju(e, s);
    Pl.test(o) ? e.setProperty(
      Us(n),
      o.replace(Pl, ""),
      "important"
    ) : e[n] = o;
  }
}
const Rl = ["Webkit", "Moz", "ms"], ta = {};
function ju(e, s) {
  const o = ta[s];
  if (o)
    return o;
  let n = Vt(s);
  if (n !== "filter" && n in e)
    return ta[s] = n;
  n = Mn(n);
  for (let l = 0; l < Rl.length; l++) {
    const i = Rl[l] + n;
    if (i in e)
      return ta[s] = i;
  }
  return s;
}
const Ml = "http://www.w3.org/1999/xlink";
function Dl(e, s, o, n, l, i = Yr(s)) {
  n && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Ml, s.slice(6, s.length)) : e.setAttributeNS(Ml, s, o) : o == null || i && !ti(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    i ? "" : Zt(o) ? String(o) : o
  );
}
function Ll(e, s, o, n, l) {
  if (s === "innerHTML" || s === "textContent") {
    o != null && (e[s] = s === "innerHTML" ? ar(o) : o);
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
    u === "boolean" ? o = ti(o) : o == null && u === "string" ? (o = "", r = !0) : u === "number" && (o = 0, r = !0);
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
function Hu(e, s, o, n) {
  e.removeEventListener(s, o, n);
}
const Ol = Symbol("_vei");
function Ku(e, s, o, n, l = null) {
  const i = e[Ol] || (e[Ol] = {}), r = i[s];
  if (n && r)
    r.value = n;
  else {
    const [u, d] = qu(s);
    if (n) {
      const m = i[s] = Xu(
        n,
        l
      );
      ks(e, u, m, d);
    } else r && (Hu(e, u, r, d), i[s] = void 0);
  }
}
const Nl = /(?:Once|Passive|Capture)$/;
function qu(e) {
  let s;
  if (Nl.test(e)) {
    s = {};
    let n;
    for (; n = e.match(Nl); )
      e = e.slice(0, e.length - n[0].length), s[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Us(e.slice(2)), s];
}
let sa = 0;
const Yu = /* @__PURE__ */ Promise.resolve(), Ju = () => sa || (Yu.then(() => sa = 0), sa = Date.now());
function Xu(e, s) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    es(
      Qu(n, o.value),
      s,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = Ju(), o;
}
function Qu(e, s) {
  if (Ae(s)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, s.map(
      (n) => (l) => !l._stopped && n && n(l)
    );
  } else
    return s;
}
const Al = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Zu = (e, s, o, n, l, i) => {
  const r = l === "svg";
  s === "class" ? Fu(e, n, r) : s === "style" ? Gu(e, o, n) : Pn(s) ? Ia(s) || Ku(e, s, o, n, i) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : ed(e, s, n, r)) ? (Ll(e, s, n), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Dl(e, s, n, r, i, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !it(n)) ? Ll(e, Vt(s), n, i, s) : (s === "true-value" ? e._trueValue = n : s === "false-value" && (e._falseValue = n), Dl(e, s, n, r));
};
function ed(e, s, o, n) {
  if (n)
    return !!(s === "innerHTML" || s === "textContent" || s in e && Al(s) && ze(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return Al(s) && it(o) ? !1 : s in e;
}
const ur = /* @__PURE__ */ new WeakMap(), dr = /* @__PURE__ */ new WeakMap(), Sn = Symbol("_moveCb"), Ul = Symbol("_enterCb"), td = (e) => (delete e.props.mode, e), sd = /* @__PURE__ */ td({
  name: "TransitionGroup",
  props: /* @__PURE__ */ mt({}, ir, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = ja(), n = Ei();
    let l, i;
    return Oi(() => {
      if (!l.length)
        return;
      const r = e.moveClass || `${e.name || "v"}-move`;
      if (!id(
        l[0].el,
        o.vnode.el,
        r
      )) {
        l = [];
        return;
      }
      l.forEach(nd), l.forEach(ad);
      const u = l.filter(ld);
      _a(o.vnode.el), u.forEach((d) => {
        const m = d.el, v = m.style;
        rs(m, r), v.transform = v.webkitTransform = v.transitionDuration = "";
        const h = m[Sn] = (w) => {
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", h), m[Sn] = null, Ps(m, r));
        };
        m.addEventListener("transitionend", h);
      }), l = [];
    }), () => {
      const r = Ye(e), u = rr(r);
      let d = r.tag || j;
      if (l = [], i)
        for (let m = 0; m < i.length; m++) {
          const v = i[m];
          v.el && v.el instanceof Element && (l.push(v), Xs(
            v,
            Wo(
              v,
              u,
              n,
              o
            )
          ), ur.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      i = s.default ? za(s.default()) : [];
      for (let m = 0; m < i.length; m++) {
        const v = i[m];
        v.key != null && Xs(
          v,
          Wo(v, u, n, o)
        );
      }
      return C(d, null, i);
    };
  }
}), od = sd;
function nd(e) {
  const s = e.el;
  s[Sn] && s[Sn](), s[Ul] && s[Ul]();
}
function ad(e) {
  dr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function ld(e) {
  const s = ur.get(e), o = dr.get(e), n = s.left - o.left, l = s.top - o.top;
  if (n || l) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${n}px,${l}px)`, i.transitionDuration = "0s", e;
  }
}
function id(e, s, o) {
  const n = e.cloneNode(), l = e[vo];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && n.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && n.classList.add(u)), n.style.display = "none";
  const i = s.nodeType === 1 ? s : s.parentNode;
  i.appendChild(n);
  const { hasTransform: r } = cr(n);
  return i.removeChild(n), r;
}
const As = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Ae(s) ? (o) => un(s, o) : s;
};
function rd(e) {
  e.target.composing = !0;
}
function zl(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const Bt = Symbol("_assign");
function Fl(e, s, o) {
  return s && (e = e.trim()), o && (e = Dn(e)), e;
}
const At = {
  created(e, { modifiers: { lazy: s, trim: o, number: n } }, l) {
    e[Bt] = As(l);
    const i = n || l.props && l.props.type === "number";
    ks(e, s ? "change" : "input", (r) => {
      r.target.composing || e[Bt](Fl(e.value, o, i));
    }), (o || i) && ks(e, "change", () => {
      e.value = Fl(e.value, o, i);
    }), s || (ks(e, "compositionstart", rd), ks(e, "compositionend", zl), ks(e, "change", zl));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: n, trim: l, number: i } }, r) {
    if (e[Bt] = As(r), e.composing) return;
    const u = (i || e.type === "number") && !/^0\d/.test(e.value) ? Dn(e.value) : e.value, d = s ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (n && s === o || l && e.value.trim() === d) || (e.value = d));
  }
}, Ko = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[Bt] = As(o), ks(e, "change", () => {
      const n = e._modelValue, l = po(e), i = e.checked, r = e[Bt];
      if (Ae(n)) {
        const u = Pa(n, l), d = u !== -1;
        if (i && !d)
          r(n.concat(l));
        else if (!i && d) {
          const m = [...n];
          m.splice(u, 1), r(m);
        }
      } else if (go(n)) {
        const u = new Set(n);
        i ? u.add(l) : u.delete(l), r(u);
      } else
        r(fr(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Bl,
  beforeUpdate(e, s, o) {
    e[Bt] = As(o), Bl(e, s, o);
  }
};
function Bl(e, { value: s, oldValue: o }, n) {
  e._modelValue = s;
  let l;
  if (Ae(s))
    l = Pa(s, n.props.value) > -1;
  else if (go(s))
    l = s.has(n.props.value);
  else {
    if (s === o) return;
    l = Js(s, fr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Yt = {
  created(e, { value: s }, o) {
    e.checked = Js(s, o.props.value), e[Bt] = As(o), ks(e, "change", () => {
      e[Bt](po(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, n) {
    e[Bt] = As(n), s !== o && (e.checked = Js(s, n.props.value));
  }
}, ms = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, n) {
    const l = go(s);
    ks(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (r) => r.selected).map(
        (r) => o ? Dn(po(r)) : po(r)
      );
      e[Bt](
        e.multiple ? l ? new Set(i) : i : i[0]
      ), e._assigning = !0, Jo(() => {
        e._assigning = !1;
      });
    }), e[Bt] = As(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    Vl(e, s);
  },
  beforeUpdate(e, s, o) {
    e[Bt] = As(o);
  },
  updated(e, { value: s }) {
    e._assigning || Vl(e, s);
  }
};
function Vl(e, s) {
  const o = e.multiple, n = Ae(s);
  if (!(o && !n && !go(s))) {
    for (let l = 0, i = e.options.length; l < i; l++) {
      const r = e.options[l], u = po(r);
      if (o)
        if (n) {
          const d = typeof u;
          d === "string" || d === "number" ? r.selected = s.some((m) => String(m) === String(u)) : r.selected = Pa(s, u) > -1;
        } else
          r.selected = s.has(u);
      else if (Js(po(r), s)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function po(e) {
  return "_value" in e ? e._value : e.value;
}
function fr(e, s) {
  const o = s ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : s;
}
const Wn = {
  created(e, s, o) {
    an(e, s, o, null, "created");
  },
  mounted(e, s, o) {
    an(e, s, o, null, "mounted");
  },
  beforeUpdate(e, s, o, n) {
    an(e, s, o, n, "beforeUpdate");
  },
  updated(e, s, o, n) {
    an(e, s, o, n, "updated");
  }
};
function cd(e, s) {
  switch (e) {
    case "SELECT":
      return ms;
    case "TEXTAREA":
      return At;
    default:
      switch (s) {
        case "checkbox":
          return Ko;
        case "radio":
          return Yt;
        default:
          return At;
      }
  }
}
function an(e, s, o, n, l) {
  const r = cd(
    e.tagName,
    o.props && o.props.type
  )[l];
  r && r(e, s, o, n);
}
const ud = ["ctrl", "shift", "alt", "meta"], dd = {
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
  exact: (e, s) => ud.some((o) => e[`${o}Key`] && !s.includes(o))
}, nt = (e, s) => {
  const o = e._withMods || (e._withMods = {}), n = s.join(".");
  return o[n] || (o[n] = ((l, ...i) => {
    for (let r = 0; r < s.length; r++) {
      const u = dd[s[r]];
      if (u && u(l, s)) return;
    }
    return e(l, ...i);
  }));
}, fd = {
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
    const i = Us(l.key);
    if (s.some(
      (r) => r === i || fd[r] === i
    ))
      return e(l);
  }));
}, md = /* @__PURE__ */ mt({ patchProp: Zu }, Ou);
let Wl;
function vd() {
  return Wl || (Wl = nu(md));
}
const Ha = ((...e) => {
  const s = vd().createApp(...e), { mount: o } = s;
  return s.mount = (n) => {
    const l = gd(n);
    if (!l) return;
    const i = s._component;
    !ze(i) && !i.render && !i.template && (i.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const r = o(l, !1, pd(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), r;
  }, s;
});
function pd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function gd(e) {
  return it(e) ? document.querySelector(e) : e;
}
const hd = { class: "panel-layout" }, yd = {
  key: 0,
  class: "panel-layout-header"
}, wd = {
  key: 1,
  class: "panel-layout-search"
}, bd = { class: "panel-layout-content" }, _d = {
  key: 2,
  class: "panel-layout-footer"
}, kd = /* @__PURE__ */ me({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (a(), c("div", hd, [
      s.$slots.header ? (a(), c("div", yd, [
        Ge(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (a(), c("div", wd, [
        Ge(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", bd, [
        Ge(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (a(), c("div", _d, [
        Ge(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), pe = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of s)
    o[n] = l;
  return o;
}, Pt = /* @__PURE__ */ pe(kd, [["__scopeId", "data-v-21565df9"]]), $d = {
  key: 0,
  class: "panel-title-prefix"
}, Cd = {
  key: 1,
  class: "panel-title-prefix-theme"
}, xd = /* @__PURE__ */ me({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (a(), M(Fa(`h${e.level}`), {
      class: xe(["panel-title", e.variant])
    }, {
      default: g(() => [
        e.showPrefix ? (a(), c("span", $d, f(e.prefix), 1)) : (a(), c("span", Cd)),
        Ge(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Sd = /* @__PURE__ */ pe(xd, [["__scopeId", "data-v-c3875efc"]]), Id = ["title"], Ed = ["width", "height"], Td = /* @__PURE__ */ me({
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
      ])], 8, Ed))
    ], 8, Id));
  }
}), mr = /* @__PURE__ */ pe(Td, [["__scopeId", "data-v-6fc7f16d"]]), Pd = { class: "header-left" }, Rd = {
  key: 0,
  class: "header-actions"
}, Md = /* @__PURE__ */ me({
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
      class: xe(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", Pd, [
        C(Sd, { "show-prefix": e.showPrefix }, {
          default: g(() => [
            b(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), M(mr, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (a(), c("div", Rd, [
        Ge(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Rt = /* @__PURE__ */ pe(Md, [["__scopeId", "data-v-55a62cd6"]]), Dd = {
  key: 0,
  class: "section-title-count"
}, Ld = {
  key: 1,
  class: "section-title-icon"
}, Od = /* @__PURE__ */ me({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), M(Fa(`h${e.level}`), {
      class: xe(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, {
      default: g(() => [
        Ge(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), c("span", Dd, "(" + f(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), c("span", Ld, f(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ot = /* @__PURE__ */ pe(Od, [["__scopeId", "data-v-559361eb"]]), Nd = { class: "status-grid" }, Ad = { class: "status-grid__columns" }, Ud = { class: "status-grid__column" }, zd = { class: "status-grid__title" }, Fd = { class: "status-grid__column status-grid__column--right" }, Bd = { class: "status-grid__title" }, Vd = {
  key: 0,
  class: "status-grid__footer"
}, Wd = /* @__PURE__ */ me({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (a(), c("div", Nd, [
      t("div", Ad, [
        t("div", Ud, [
          t("h4", zd, f(e.leftTitle), 1),
          Ge(s.$slots, "left", {}, void 0)
        ]),
        t("div", Fd, [
          t("h4", Bd, f(e.rightTitle), 1),
          Ge(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (a(), c("div", Vd, [
        Ge(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Gd = /* @__PURE__ */ pe(Wd, [["__scopeId", "data-v-73b7ba3f"]]), jd = {
  key: 0,
  class: "status-item__icon"
}, Hd = {
  key: 1,
  class: "status-item__count"
}, Kd = { class: "status-item__label" }, qd = /* @__PURE__ */ me({
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
      class: xe(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), c("span", jd, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), c("span", Hd, f(e.count), 1)) : y("", !0),
      t("span", Kd, f(e.label), 1)
    ], 2));
  }
}), is = /* @__PURE__ */ pe(qd, [["__scopeId", "data-v-6f929183"]]), Yd = { class: "issue-card__header" }, Jd = { class: "issue-card__icon" }, Xd = { class: "issue-card__title" }, Qd = {
  key: 0,
  class: "issue-card__content"
}, Zd = {
  key: 0,
  class: "issue-card__description"
}, ef = {
  key: 1,
  class: "issue-card__items"
}, tf = {
  key: 2,
  class: "issue-card__actions"
}, sf = /* @__PURE__ */ me({
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
      class: xe(["issue-card", o.value])
    }, [
      t("div", Yd, [
        t("span", Jd, f(e.icon), 1),
        t("h4", Xd, f(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), c("div", Qd, [
        e.description ? (a(), c("p", Zd, f(e.description), 1)) : y("", !0),
        Ge(n.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (a(), c("div", ef, [
        (a(!0), c(j, null, ge(e.items, (i, r) => (a(), c("div", {
          key: r,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, f(i), 1)
        ]))), 128))
      ])) : y("", !0),
      n.$slots.actions ? (a(), c("div", tf, [
        Ge(n.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Kt = /* @__PURE__ */ pe(sf, [["__scopeId", "data-v-df6aa348"]]), of = ["type", "disabled"], nf = {
  key: 0,
  class: "spinner"
}, af = /* @__PURE__ */ me({
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
      class: xe(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), c("span", nf)) : y("", !0),
      e.loading ? y("", !0) : Ge(s.$slots, "default", { key: 1 }, void 0)
    ], 10, of));
  }
}), ie = /* @__PURE__ */ pe(af, [["__scopeId", "data-v-772abe47"]]), lf = { class: "empty-state" }, rf = {
  key: 0,
  class: "empty-icon"
}, cf = { class: "empty-message" }, uf = /* @__PURE__ */ me({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (a(), c("div", lf, [
      e.icon ? (a(), c("div", rf, f(e.icon), 1)) : y("", !0),
      t("p", cf, f(e.message), 1),
      e.actionLabel ? (a(), M(ie, {
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
}), ts = /* @__PURE__ */ pe(uf, [["__scopeId", "data-v-4466284f"]]), df = /* @__PURE__ */ me({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (a(), c("span", {
      class: xe(["detail-label"]),
      style: Wt({ minWidth: e.minWidth })
    }, [
      Ge(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), pn = /* @__PURE__ */ pe(df, [["__scopeId", "data-v-75e9eeb8"]]), ff = /* @__PURE__ */ me({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), c("span", {
      class: xe(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      Ge(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), ka = /* @__PURE__ */ pe(ff, [["__scopeId", "data-v-2f186e4c"]]), mf = { class: "detail-row" }, vf = /* @__PURE__ */ me({
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
    return (s, o) => (a(), c("div", mf, [
      C(pn, { "min-width": e.labelMinWidth }, {
        default: g(() => [
          b(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), M(ka, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: g(() => [
          b(f(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Ge(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), ut = /* @__PURE__ */ pe(vf, [["__scopeId", "data-v-ef15664a"]]), pf = { class: "modal-header" }, gf = { class: "modal-body" }, hf = { class: "status-section" }, yf = {
  key: 0,
  class: "status-section"
}, wf = { class: "section-header-row" }, bf = {
  key: 0,
  class: "workflow-group"
}, _f = { class: "workflow-group-header" }, kf = { class: "workflow-group-title" }, $f = { class: "workflow-list" }, Cf = { class: "workflow-name" }, xf = { class: "workflow-issue" }, Sf = {
  key: 1,
  class: "workflow-group"
}, If = { class: "workflow-group-header" }, Ef = { class: "workflow-group-title" }, Tf = { class: "workflow-list" }, Pf = { class: "workflow-name" }, Rf = { class: "workflow-issue" }, Mf = {
  key: 2,
  class: "workflow-group"
}, Df = { class: "workflow-group-header" }, Lf = { class: "workflow-group-title" }, Of = { class: "workflow-list" }, Nf = { class: "workflow-name" }, Af = {
  key: 3,
  class: "workflow-group"
}, Uf = { class: "workflow-group-header" }, zf = { class: "workflow-group-title" }, Ff = { class: "workflow-list" }, Bf = { class: "workflow-name" }, Vf = {
  key: 4,
  class: "workflow-group"
}, Wf = { class: "workflow-group-header" }, Gf = { class: "workflow-group-title" }, jf = { class: "workflow-list" }, Hf = { class: "workflow-name" }, Kf = {
  key: 5,
  class: "workflow-group"
}, qf = { class: "workflow-group-title" }, Yf = { class: "expand-icon" }, Jf = {
  key: 0,
  class: "workflow-list"
}, Xf = { class: "workflow-name" }, Qf = {
  key: 1,
  class: "status-section"
}, Zf = {
  key: 0,
  class: "change-group"
}, em = { class: "change-group-header" }, tm = { class: "change-group-title" }, sm = { class: "change-list" }, om = { class: "node-name" }, nm = {
  key: 0,
  class: "dev-badge"
}, am = {
  key: 1,
  class: "change-group"
}, lm = { class: "change-group-header" }, im = { class: "change-group-title" }, rm = { class: "change-list" }, cm = { class: "node-name" }, um = {
  key: 0,
  class: "dev-badge"
}, dm = {
  key: 2,
  class: "change-group"
}, fm = { class: "change-list" }, mm = { class: "change-item" }, vm = { class: "node-name" }, pm = {
  key: 3,
  class: "change-group"
}, gm = {
  key: 2,
  class: "status-section"
}, hm = { class: "section-header-row" }, ym = {
  key: 0,
  class: "drift-item"
}, wm = { class: "drift-list" }, bm = {
  key: 0,
  class: "drift-list-more"
}, _m = {
  key: 1,
  class: "drift-item"
}, km = { class: "drift-list" }, $m = {
  key: 0,
  class: "drift-list-more"
}, Cm = {
  key: 2,
  class: "drift-item"
}, xm = { class: "drift-list" }, Sm = { class: "version-actual" }, Im = { class: "version-expected" }, Em = {
  key: 0,
  class: "drift-list-more"
}, Tm = {
  key: 3,
  class: "drift-item"
}, Pm = { class: "repair-action" }, Rm = {
  key: 3,
  class: "status-section"
}, Mm = { class: "info-box" }, Dm = { class: "drift-list" }, Lm = {
  key: 0,
  class: "drift-list-more"
}, Om = {
  key: 4,
  class: "status-section"
}, Nm = { class: "warning-box" }, Am = {
  key: 5,
  class: "empty-state-inline"
}, Um = { class: "modal-actions" }, zm = /* @__PURE__ */ me({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const s = e, o = k(!1);
    Qe(() => {
      console.log("StatusDetailModal mounted, initial show value:", s.show);
    }), xt(() => s.show, (w, p) => {
      console.log("StatusDetailModal show prop changed from", p, "to", w);
    }, { immediate: !0 });
    const n = F(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), l = F(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), i = F(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.synced) == null ? void 0 : _.filter((x) => {
        var P, N, T;
        const $ = (T = (N = (P = s.status) == null ? void 0 : P.workflows) == null ? void 0 : N.analyzed) == null ? void 0 : T.find((S) => S.name === x);
        return !$ || $.status !== "broken";
      })) || [];
    }), r = F(() => {
      var w, p, _, x, $;
      return (w = s.status) != null && w.workflows ? (((p = s.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((_ = s.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((x = s.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || ((($ = s.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), u = F(() => {
      var p, _, x;
      const w = (p = s.status) == null ? void 0 : p.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((x = w.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = F(() => {
      var w, p, _, x, $, P;
      return !r.value && !u.value && ((p = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : p.is_synced) && (((_ = s.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((P = ($ = (x = s.status) == null ? void 0 : x.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : P.length) ?? 0) === 0;
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
      var _, x, $, P, N, T, S, q, B, A, I, E, O, re, Y, H, te, Z, U, z, R, be;
      return a(), M(yt, { to: "body" }, [
        e.show ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = (ve) => w.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: p[6] || (p[6] = nt(() => {
            }, ["stop"]))
          }, [
            t("div", pf, [
              p[8] || (p[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = (ve) => w.$emit("close"))
              }, "✕")
            ]),
            t("div", gf, [
              t("div", hf, [
                C(Ot, { level: "4" }, {
                  default: g(() => [...p[9] || (p[9] = [
                    b("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                C(ut, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              r.value ? (a(), c("div", yf, [
                t("div", wf, [
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
                n.value.length ? (a(), c("div", bf, [
                  t("div", _f, [
                    p[11] || (p[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", kf, "BROKEN (COMMITTED) (" + f(n.value.length) + ")", 1)
                  ]),
                  t("div", $f, [
                    (a(!0), c(j, null, ge(n.value, (ve) => (a(), c("div", {
                      key: ve.name,
                      class: "workflow-item"
                    }, [
                      t("span", Cf, f(ve.name), 1),
                      t("span", xf, f(ve.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), c("div", Sf, [
                  t("div", If, [
                    p[12] || (p[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Ef, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  t("div", Tf, [
                    (a(!0), c(j, null, ge(l.value, (ve) => (a(), c("div", {
                      key: ve.name,
                      class: "workflow-item"
                    }, [
                      t("span", Pf, f(ve.name), 1),
                      t("span", Rf, f(ve.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = (_ = e.status.workflows) == null ? void 0 : _.new) != null && x.length ? (a(), c("div", Mf, [
                  t("div", Df, [
                    p[13] || (p[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", Lf, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", Of, [
                    (a(!0), c(j, null, ge(e.status.workflows.new, (ve) => (a(), c("div", {
                      key: ve,
                      class: "workflow-item"
                    }, [
                      t("span", Nf, f(ve), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (P = ($ = e.status.workflows) == null ? void 0 : $.modified) != null && P.length ? (a(), c("div", Af, [
                  t("div", Uf, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", zf, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", Ff, [
                    (a(!0), c(j, null, ge(e.status.workflows.modified, (ve) => (a(), c("div", {
                      key: ve,
                      class: "workflow-item"
                    }, [
                      t("span", Bf, f(ve), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (T = (N = e.status.workflows) == null ? void 0 : N.deleted) != null && T.length ? (a(), c("div", Vf, [
                  t("div", Wf, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", Gf, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", jf, [
                    (a(!0), c(j, null, ge(e.status.workflows.deleted, (ve) => (a(), c("div", {
                      key: ve,
                      class: "workflow-item"
                    }, [
                      t("span", Hf, f(ve), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                i.value.length ? (a(), c("div", Kf, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = (ve) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", qf, "SYNCED (" + f(i.value.length) + ")", 1),
                    t("span", Yf, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), c("div", Jf, [
                    (a(!0), c(j, null, ge(i.value, (ve) => (a(), c("div", {
                      key: ve,
                      class: "workflow-item"
                    }, [
                      t("span", Xf, f(ve), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (a(), c("div", Qf, [
                C(Ot, { level: "4" }, {
                  default: g(() => [...p[17] || (p[17] = [
                    b("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (q = (S = e.status.git_changes) == null ? void 0 : S.nodes_added) != null && q.length ? (a(), c("div", Zf, [
                  t("div", em, [
                    p[18] || (p[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", tm, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", sm, [
                    (a(!0), c(j, null, ge(e.status.git_changes.nodes_added, (ve) => (a(), c("div", {
                      key: v(ve),
                      class: "change-item"
                    }, [
                      t("span", om, f(v(ve)), 1),
                      h(ve) ? (a(), c("span", nm, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (A = (B = e.status.git_changes) == null ? void 0 : B.nodes_removed) != null && A.length ? (a(), c("div", am, [
                  t("div", lm, [
                    p[19] || (p[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", im, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", rm, [
                    (a(!0), c(j, null, ge(e.status.git_changes.nodes_removed, (ve) => (a(), c("div", {
                      key: v(ve),
                      class: "change-item"
                    }, [
                      t("span", cm, f(v(ve)), 1),
                      h(ve) ? (a(), c("span", um, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = e.status.git_changes) != null && I.workflow_changes ? (a(), c("div", dm, [
                  p[20] || (p[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", fm, [
                    t("div", mm, [
                      t("span", vm, f(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (E = e.status.git_changes) != null && E.has_other_changes ? (a(), c("div", pm, [...p[21] || (p[21] = [
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
              (O = e.status.comparison) != null && O.is_synced ? y("", !0) : (a(), c("div", gm, [
                t("div", hm, [
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
                (Y = (re = e.status.comparison) == null ? void 0 : re.missing_nodes) != null && Y.length ? (a(), c("div", ym, [
                  C(ut, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", wm, [
                    (a(!0), c(j, null, ge(e.status.comparison.missing_nodes.slice(0, 10), (ve) => (a(), c("div", {
                      key: ve,
                      class: "drift-list-item"
                    }, " - " + f(ve), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), c("div", bm, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (te = (H = e.status.comparison) == null ? void 0 : H.extra_nodes) != null && te.length ? (a(), c("div", _m, [
                  C(ut, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", km, [
                    (a(!0), c(j, null, ge(e.status.comparison.extra_nodes.slice(0, 10), (ve) => (a(), c("div", {
                      key: ve,
                      class: "drift-list-item"
                    }, " - " + f(ve), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), c("div", $m, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (U = (Z = e.status.comparison) == null ? void 0 : Z.version_mismatches) != null && U.length ? (a(), c("div", Cm, [
                  C(ut, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", xm, [
                    (a(!0), c(j, null, ge(e.status.comparison.version_mismatches.slice(0, 10), (ve) => (a(), c("div", {
                      key: ve.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      b(f(ve.name) + ": ", 1),
                      t("span", Sm, f(ve.actual), 1),
                      p[23] || (p[23] = b(" → ", -1)),
                      t("span", Im, f(ve.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), c("div", Em, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((z = e.status.comparison) == null ? void 0 : z.packages_in_sync) === !1 ? (a(), c("div", Tm, [
                  C(ut, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", Pm, [
                  C(ie, {
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
              (be = (R = e.status.comparison) == null ? void 0 : R.disabled_nodes) != null && be.length ? (a(), c("div", Rm, [
                C(Ot, { level: "4" }, {
                  default: g(() => [...p[27] || (p[27] = [
                    b("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", Mm, [
                  p[28] || (p[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", Dm, [
                  (a(!0), c(j, null, ge(e.status.comparison.disabled_nodes.slice(0, 10), (ve) => (a(), c("div", {
                    key: ve,
                    class: "drift-list-item"
                  }, " • " + f(ve), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), c("div", Lm, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), c("div", Om, [
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
              d.value ? (a(), c("div", Am, [...p[32] || (p[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            t("div", Um, [
              C(ie, {
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
}), Fm = /* @__PURE__ */ pe(zm, [["__scopeId", "data-v-e2b37122"]]), Bm = { class: "health-section-header" }, Vm = { class: "suggestions-content" }, Wm = { class: "suggestions-text" }, Gm = { style: { "margin-top": "var(--cg-space-3)" } }, jm = {
  key: 1,
  class: "no-issues-text"
}, Hm = /* @__PURE__ */ me({
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
    const x = F(() => {
      const Z = n.status.workflows.analyzed || [], U = Z.filter(
        (z) => z.unresolved_models_count > 0 || z.ambiguous_models_count > 0
      );
      return U.length === 0 && n.status.missing_models_count > 0 ? Z.filter((z) => z.sync_state === "synced") : U;
    });
    function $() {
      const Z = x.value;
      Z.length !== 0 && (v.value = !0, m("repair-missing-models", Z.map((U) => U.name)));
    }
    function P() {
      v.value = !1;
    }
    s({ resetRepairingState: P, resetRepairingEnvironmentState: p, closeDetailModal: _ });
    const N = F(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), T = F(() => n.status.has_changes), S = F(() => {
      const Z = n.status.git_changes;
      return Z.nodes_added.length > 0 || Z.nodes_removed.length > 0 || Z.workflow_changes;
    }), q = F(() => n.status.has_changes || N.value), B = F(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), A = F(() => n.status.git_changes.has_other_changes), I = F(() => {
      var Z;
      return ((Z = n.status.workflows.analyzed) == null ? void 0 : Z.filter((U) => U.status === "broken")) || [];
    }), E = F(() => {
      var Z;
      return ((Z = n.status.workflows.analyzed) == null ? void 0 : Z.filter(
        (U) => U.has_path_sync_issues && !U.has_issues
      )) || [];
    }), O = F(() => I.value.length > 0), re = F(() => O.value || E.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), Y = F(() => {
      const Z = [];
      return n.status.workflows.new.length > 0 && Z.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && Z.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && Z.push(`${n.status.workflows.deleted.length} deleted`), Z.length > 0 ? `${Z.join(", ")} workflow${Z.length === 1 && !Z[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), H = F(() => {
      var z, R;
      const Z = [], U = n.status.comparison;
      return (z = U.missing_nodes) != null && z.length && Z.push(`${U.missing_nodes.length} missing node${U.missing_nodes.length === 1 ? "" : "s"}`), (R = U.extra_nodes) != null && R.length && Z.push(`${U.extra_nodes.length} untracked node${U.extra_nodes.length === 1 ? "" : "s"}`), Z.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Z.join(" and ")}.`;
    }), te = F(() => {
      var z, R;
      const Z = [], U = n.status.comparison;
      return (z = U.extra_nodes) != null && z.length && (U.extra_nodes.slice(0, 3).forEach((be) => {
        Z.push(`Untracked: ${be}`);
      }), U.extra_nodes.length > 3 && Z.push(`...and ${U.extra_nodes.length - 3} more untracked`)), (R = U.missing_nodes) != null && R.length && (U.missing_nodes.slice(0, 3).forEach((be) => {
        Z.push(`Missing: ${be}`);
      }), U.missing_nodes.length > 3 && Z.push(`...and ${U.missing_nodes.length - 3} more missing`)), Z;
    });
    return (Z, U) => (a(), c(j, null, [
      C(Pt, null, {
        header: g(() => [
          C(Rt, { title: "STATUS" })
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
              C(ie, {
                variant: "primary",
                size: "sm",
                onClick: U[0] || (U[0] = (z) => Z.$emit("start-setup"))
              }, {
                default: g(() => [...U[13] || (U[13] = [
                  b(" Start Setup ", -1)
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
              C(ie, {
                variant: "primary",
                size: "sm",
                onClick: U[1] || (U[1] = (z) => Z.$emit("view-environments"))
              }, {
                default: g(() => [...U[14] || (U[14] = [
                  b(" View Environments ", -1)
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
              C(ie, {
                variant: "primary",
                size: "sm",
                onClick: U[2] || (U[2] = (z) => Z.$emit("create-environment"))
              }, {
                default: g(() => [...U[15] || (U[15] = [
                  b(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: U[4] || (U[4] = (z) => i.value = !0),
            onMouseleave: U[5] || (U[5] = (z) => i.value = !1)
          }, [
            t("div", Bm, [
              C(Ot, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: g(() => [...U[16] || (U[16] = [
                  b(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              C(Au, { name: "fade" }, {
                default: g(() => [
                  i.value ? (a(), M(ie, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: r
                  }, {
                    default: g(() => [...U[17] || (U[17] = [
                      b(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            C(Gd, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Qs({
              left: g(() => [
                e.status.workflows.new.length ? (a(), M(is, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (a(), M(is, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (a(), M(is, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                C(is, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: N.value
                }, null, 8, ["count", "separator"])
              ]),
              right: g(() => [
                e.status.git_changes.nodes_added.length ? (a(), M(is, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), M(is, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (a(), M(is, {
                  key: 2,
                  icon: "●",
                  count: B.value,
                  label: B.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                A.value ? (a(), M(is, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                T.value && !S.value && !A.value ? (a(), M(is, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                T.value ? y("", !0) : (a(), M(is, {
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
                  U[19] || (U[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", Vm, [
                    t("span", Wm, f(Y.value), 1),
                    C(ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: U[3] || (U[3] = (z) => Z.$emit("commit-changes"))
                    }, {
                      default: g(() => [...U[18] || (U[18] = [
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
          e.status.is_detached_head ? (a(), M(Kt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: g(() => [
              C(ie, {
                variant: "primary",
                size: "sm",
                onClick: U[6] || (U[6] = (z) => Z.$emit("create-branch"))
              }, {
                default: g(() => [...U[20] || (U[20] = [
                  b(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", Gm, [
            C(Ot, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: g(() => [...U[21] || (U[21] = [
                b(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            re.value ? (a(), c(j, { key: 0 }, [
              I.value.length > 0 ? (a(), M(Kt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${I.value.length} workflow${I.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: I.value.map((z) => `${z.name} — ${z.issue_summary}`)
              }, {
                actions: g(() => [
                  C(ie, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[7] || (U[7] = (z) => Z.$emit("view-workflows"))
                  }, {
                    default: g(() => [...U[22] || (U[22] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              E.value.length > 0 ? (a(), M(Kt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: E.value.map((z) => `${z.name} — ${z.models_needing_path_sync_count} model path${z.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: g(() => [
                  C(ie, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[8] || (U[8] = (z) => Z.$emit("view-workflows"))
                  }, {
                    default: g(() => [...U[23] || (U[23] = [
                      b(" See Workflows ", -1)
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
                  C(ie, {
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
                  C(ie, {
                    variant: "secondary",
                    size: "sm",
                    onClick: U[9] || (U[9] = (z) => Z.$emit("view-workflows"))
                  }, {
                    default: g(() => [...U[24] || (U[24] = [
                      b(" See Workflows ", -1)
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
                description: H.value,
                items: te.value
              }, {
                actions: g(() => [
                  C(ie, {
                    variant: "secondary",
                    size: "sm",
                    onClick: r
                  }, {
                    default: g(() => [...U[25] || (U[25] = [
                      b(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  C(ie, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[10] || (U[10] = (z) => Z.$emit("view-nodes"))
                  }, {
                    default: g(() => [...U[26] || (U[26] = [
                      b(" See Nodes ", -1)
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
                  C(ie, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[11] || (U[11] = (z) => Z.$emit("view-nodes"))
                  }, {
                    default: g(() => [...U[27] || (U[27] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : q.value ? (a(), c("span", jm, "No issues")) : (a(), M(ts, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      C(Fm, {
        show: l.value,
        status: e.status,
        "is-repairing": h.value,
        onClose: U[12] || (U[12] = (z) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Km = /* @__PURE__ */ pe(Hm, [["__scopeId", "data-v-55fcd77f"]]), qm = ["type", "value", "placeholder", "disabled"], Ym = /* @__PURE__ */ me({
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
    return Qe(() => {
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
      class: xe(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: r,
      onKeyup: [
        d[0] || (d[0] = Xt((m) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Xt((m) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (m) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (m) => u.$emit("blur"))
    }, null, 42, qm));
  }
}), In = /* @__PURE__ */ pe(Ym, [["__scopeId", "data-v-0380d08f"]]), Jm = { class: "branch-create-form" }, Xm = { class: "form-actions" }, Qm = /* @__PURE__ */ me({
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
    return (u, d) => (a(), c("div", Jm, [
      C(In, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => n.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: i,
        onEscape: r
      }, null, 8, ["modelValue"]),
      t("div", Xm, [
        C(ie, {
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
        C(ie, {
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
}), Zm = /* @__PURE__ */ pe(Qm, [["__scopeId", "data-v-7c500394"]]), ev = { class: "branch-list-item__indicator" }, tv = { class: "branch-list-item__name" }, sv = {
  key: 0,
  class: "branch-list-item__actions"
}, ov = {
  key: 0,
  class: "branch-list-item__current-label"
}, nv = /* @__PURE__ */ me({
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
      class: xe(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, [
      t("span", ev, f(e.isCurrent ? "●" : "○"), 1),
      t("span", tv, f(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (a(), c("div", sv, [
        Ge(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), c("span", ov, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), av = /* @__PURE__ */ pe(nv, [["__scopeId", "data-v-c6581a24"]]), lv = {
  key: 2,
  class: "branch-list"
}, iv = /* @__PURE__ */ me({
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
    return (r, u) => (a(), M(Pt, null, {
      header: g(() => [
        C(Rt, { title: "BRANCHES" }, {
          actions: g(() => [
            n.value ? y("", !0) : (a(), M(ie, {
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
        n.value ? (a(), M(Zm, {
          key: 0,
          onCreate: l,
          onCancel: i
        })) : y("", !0),
        e.branches.length === 0 ? (a(), M(ts, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), c("div", lv, [
          (a(!0), c(j, null, ge(e.branches, (d) => (a(), M(av, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: g(() => [
              d.is_current ? y("", !0) : (a(), M(ie, {
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
              d.is_current ? y("", !0) : (a(), M(ie, {
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
}), rv = /* @__PURE__ */ pe(iv, [["__scopeId", "data-v-86784ddd"]]), cv = { class: "commit-list" }, uv = /* @__PURE__ */ me({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (a(), c("div", cv, [
      Ge(s.$slots, "default", {}, void 0)
    ]));
  }
}), dv = /* @__PURE__ */ pe(uv, [["__scopeId", "data-v-8c5ee761"]]), fv = { class: "commit-hash" }, mv = /* @__PURE__ */ me({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = F(() => s.hash.slice(0, s.length));
    return (n, l) => (a(), c("span", fv, f(o.value), 1));
  }
}), vr = /* @__PURE__ */ pe(mv, [["__scopeId", "data-v-7c333cc6"]]), vv = { class: "commit-message" }, pv = { class: "commit-date" }, gv = /* @__PURE__ */ me({
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
      class: xe(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      C(vr, { hash: e.hash }, null, 8, ["hash"]),
      t("span", vv, f(e.message), 1),
      t("span", pv, f(e.relativeDate), 1),
      i.$slots.actions ? (a(), c("div", {
        key: 0,
        class: "commit-actions",
        onClick: r[0] || (r[0] = nt(() => {
        }, ["stop"]))
      }, [
        Ge(i.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), hv = /* @__PURE__ */ pe(gv, [["__scopeId", "data-v-dd7c621b"]]), yv = /* @__PURE__ */ me({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (s, o) => (a(), M(Pt, null, {
      header: g(() => [
        C(Rt, { title: "HISTORY" })
      ]),
      content: g(() => [
        e.commits.length === 0 ? (a(), M(ts, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), M(dv, { key: 1 }, {
          default: g(() => [
            (a(!0), c(j, null, ge(e.commits, (n) => (a(), M(hv, {
              key: n.hash,
              hash: n.short_hash || n.hash,
              message: n.message,
              "relative-date": n.date_relative || n.relative_date,
              onClick: (l) => s.$emit("select", n)
            }, {
              actions: g(() => [
                C(ie, {
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
}), wv = /* @__PURE__ */ pe(yv, [["__scopeId", "data-v-981c3c64"]]), yT = zs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const wT = [
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
], bT = {
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
}, bv = [
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
], _T = [
  ...bv,
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
function no() {
  return !1;
}
function at() {
  const e = k(!1), s = k(null);
  async function o(J, we) {
    var lt;
    if (!((lt = window.app) != null && lt.api))
      throw new Error("ComfyUI API not available");
    const Oe = await window.app.api.fetchApi(J, we);
    if (!Oe.ok) {
      const Ne = await Oe.json().catch(() => ({}));
      throw new Error(Ne.error || Ne.message || `Request failed: ${Oe.status}`);
    }
    return Oe.json();
  }
  async function n(J = !1) {
    return o(J ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(J, we = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: J, allow_issues: we })
    });
  }
  async function i(J = 10, we = 0) {
    return o(`/v2/comfygit/log?limit=${J}&offset=${we}`);
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
  async function w(J, we = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: J, force: we })
    });
  }
  async function p(J, we = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, start_point: we })
    });
  }
  async function _(J, we = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: J, force: we })
    });
  }
  async function x(J, we = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(J)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: we })
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
  async function P(J, we) {
    const Oe = { target_env: J };
    return we && (Oe.workspace_path = we), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Oe)
    });
  }
  async function N() {
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
      const we = await n(J), Oe = [];
      return we.workflows.new.forEach((lt) => {
        Oe.push({ name: lt, status: "new", missing_nodes: 0, missing_models: 0, path: lt });
      }), we.workflows.modified.forEach((lt) => {
        Oe.push({ name: lt, status: "modified", missing_nodes: 0, missing_models: 0, path: lt });
      }), we.workflows.synced.forEach((lt) => {
        Oe.push({ name: lt, status: "synced", missing_nodes: 0, missing_models: 0, path: lt });
      }), Oe;
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
  async function O(J, we, Oe) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: we, install_models: Oe })
    });
  }
  async function re(J, we, Oe) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: we, importance: Oe })
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
  async function Z(J) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function U(J, we) {
    return o(`/v2/workspace/models/${J}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: we })
    });
  }
  async function z(J, we) {
    return o(`/v2/workspace/models/${J}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: we })
    });
  }
  async function R(J) {
    return o(`/v2/workspace/models/${J}`, {
      method: "DELETE"
    });
  }
  async function be(J) {
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
  async function Ee() {
    return o("/v2/workspace/models/directory");
  }
  async function De(J) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function je(J) {
    try {
      const we = J ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(J)}` : "/v2/comfygit/config";
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
  async function Je(J, we) {
    const Oe = we ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(we)}` : "/v2/comfygit/config";
    return o(Oe, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function _e(J, we) {
    try {
      const Oe = new URLSearchParams();
      return J && Oe.append("level", J), we && Oe.append("lines", we.toString()), o(`/v2/comfygit/debug/logs?${Oe}`);
    } catch {
      return [];
    }
  }
  async function Se(J, we) {
    try {
      const Oe = new URLSearchParams();
      return J && Oe.append("level", J), we && Oe.append("lines", we.toString()), o(`/v2/workspace/debug/logs?${Oe}`);
    } catch {
      return [];
    }
  }
  async function Ve() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function ye() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function le(J, we) {
    try {
      const Oe = new URLSearchParams();
      return J && Oe.append("level", J), we && Oe.append("lines", we.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Oe}`);
    } catch {
      return [];
    }
  }
  async function Fe() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function Ie(J) {
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
  async function oe(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}/install`, {
      method: "POST"
    });
  }
  async function ae(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}/update`, {
      method: "POST"
    });
  }
  async function de(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function fe() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function ke(J, we) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, url: we })
    });
  }
  async function $e(J) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function ne(J, we, Oe) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: we, push_url: Oe })
    });
  }
  async function ue(J, we) {
    const Oe = {};
    return we && (Oe["X-Git-Auth-Token"] = we), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/fetch`, {
      method: "POST",
      headers: Oe
    });
  }
  async function Re(J) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/status`);
    } catch {
      return null;
    }
  }
  async function Ce(J = "skip", we = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: J,
        remove_extra_nodes: we
      })
    });
  }
  async function ee(J, we) {
    const Oe = we ? `/v2/comfygit/remotes/${encodeURIComponent(J)}/pull-preview?branch=${encodeURIComponent(we)}` : `/v2/comfygit/remotes/${encodeURIComponent(J)}/pull-preview`;
    return o(Oe);
  }
  async function K(J, we = {}) {
    const Oe = { "Content-Type": "application/json" };
    return we.authToken && (Oe["X-Git-Auth-Token"] = we.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/pull`, {
      method: "POST",
      headers: Oe,
      body: JSON.stringify({
        model_strategy: we.modelStrategy || "skip",
        force: we.force || !1,
        resolutions: we.resolutions
      })
    });
  }
  async function X(J, we) {
    const Oe = we ? `/v2/comfygit/remotes/${encodeURIComponent(J)}/push-preview?branch=${encodeURIComponent(we)}` : `/v2/comfygit/remotes/${encodeURIComponent(J)}/push-preview`;
    return o(Oe);
  }
  async function D(J, we = {}) {
    const Oe = { "Content-Type": "application/json" };
    return we.authToken && (Oe["X-Git-Auth-Token"] = we.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/push`, {
      method: "POST",
      headers: Oe,
      body: JSON.stringify({ force: we.force || !1 })
    });
  }
  async function W(J, we) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: we })
    });
  }
  async function ce(J) {
    const we = {
      success: 0,
      failed: []
    };
    for (const Oe of J)
      try {
        await E(Oe), we.success++;
      } catch (lt) {
        we.failed.push({
          name: Oe,
          error: lt instanceof Error ? lt.message : "Unknown error"
        });
      }
    return we;
  }
  async function Te(J) {
    var lt;
    const we = new FormData();
    if (we.append("file", J), !((lt = window.app) != null && lt.api))
      throw new Error("ComfyUI API not available");
    const Oe = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: we
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Oe.ok) {
      const Ne = await Oe.json().catch(() => ({}));
      throw new Error(Ne.error || `Preview failed: ${Oe.status}`);
    }
    return Oe.json();
  }
  async function Ke(J) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(J)}`
    );
  }
  async function rt(J, we, Oe, lt) {
    var Za;
    const Ne = new FormData();
    if (Ne.append("file", J), Ne.append("name", we), Ne.append("model_strategy", Oe), Ne.append("torch_backend", lt), !((Za = window.app) != null && Za.api))
      throw new Error("ComfyUI API not available");
    const ko = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Ne
    });
    if (!ko.ok) {
      const el = await ko.json().catch(() => ({}));
      throw new Error(el.message || el.error || `Import failed: ${ko.status}`);
    }
    return ko.json();
  }
  async function wt() {
    return o("/v2/workspace/import/status");
  }
  async function bt(J) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: J })
    });
  }
  async function ct(J, we, Oe, lt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: J,
        name: we,
        model_strategy: Oe,
        torch_backend: lt
      })
    });
  }
  async function ft() {
    return o("/v2/setup/status");
  }
  async function Gt(J) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function vs() {
    return o("/v2/setup/initialize_status");
  }
  async function jt(J) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function Fs() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function Es() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function Zs(J, we) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: J, save_key: we })
    });
  }
  async function wo() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function bo(J) {
    const we = J ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(J)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(we);
  }
  async function _o(J) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function he() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function Q(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function We(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}/stop`, {
      method: "POST"
    });
  }
  async function pt(J) {
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
  async function os() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Le() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function ns(J) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function se(J) {
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
  async function Pe() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function Be(J) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/info`);
  }
  async function tt(J) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances`);
  }
  async function dt(J, we) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(we)
    });
  }
  async function Mt(J, we) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent(we)}/start`, {
      method: "POST"
    });
  }
  async function as(J, we) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent(we)}/stop`, {
      method: "POST"
    });
  }
  async function Bs(J, we) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent(we)}`, {
      method: "DELETE"
    });
  }
  async function Vs(J) {
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
    deleteBranch: x,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: P,
    getSwitchProgress: N,
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
    openFileLocation: Z,
    addModelSource: U,
    removeModelSource: z,
    deleteModel: R,
    downloadModel: be,
    scanWorkspaceModels: ve,
    getModelsDirectory: Ee,
    setModelsDirectory: De,
    // Settings
    getConfig: je,
    updateConfig: Je,
    // Debug/Logs
    getEnvironmentLogs: _e,
    getWorkspaceLogs: Se,
    getEnvironmentLogPath: Ve,
    getWorkspaceLogPath: ye,
    getOrchestratorLogs: le,
    getOrchestratorLogPath: Fe,
    openFile: Ie,
    // Node Management
    getNodes: L,
    trackNodeAsDev: V,
    installNode: oe,
    updateNode: ae,
    uninstallNode: de,
    // Git Remotes
    getRemotes: fe,
    addRemote: ke,
    removeRemote: $e,
    updateRemoteUrl: ne,
    fetchRemote: ue,
    getRemoteSyncStatus: Re,
    // Push/Pull
    getPullPreview: ee,
    pullFromRemote: K,
    getPushPreview: X,
    pushToRemote: D,
    validateMerge: W,
    // Environment Sync
    syncEnvironmentManually: Ce,
    // Workflow Repair
    repairWorkflowModels: ce,
    // Import Operations
    previewTarballImport: Te,
    previewGitImport: bt,
    validateEnvironmentName: Ke,
    executeImport: rt,
    executeGitImport: ct,
    getImportProgress: wt,
    // First-Time Setup
    getSetupStatus: ft,
    initializeWorkspace: Gt,
    getInitializeProgress: vs,
    validatePath: jt,
    // Deploy Operations
    getDeploySummary: Fs,
    getDataCenters: Es,
    testRunPodConnection: Zs,
    getNetworkVolumes: wo,
    getRunPodGpuTypes: bo,
    deployToRunPod: _o,
    getRunPodPods: he,
    terminateRunPodPod: Q,
    stopRunPodPod: We,
    startRunPodPod: pt,
    getDeploymentStatus: Ht,
    exportDeployPackage: ps,
    getStoredRunPodKey: gs,
    clearRunPodKey: os,
    // Custom Worker Operations
    getCustomWorkers: Le,
    addCustomWorker: ns,
    removeCustomWorker: se,
    testWorkerConnection: G,
    scanForWorkers: Pe,
    getWorkerSystemInfo: Be,
    getWorkerInstances: tt,
    deployToWorker: dt,
    startWorkerInstance: Mt,
    stopWorkerInstance: as,
    terminateWorkerInstance: Bs,
    // Git Authentication
    testGitAuth: Vs
  };
}
async function ln(e, s) {
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
function _v() {
  async function e() {
    try {
      return await ln("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await ln("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await ln("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function n() {
    await ln("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: s,
    restart: o,
    kill: n
  };
}
const kv = { class: "base-modal-header" }, $v = {
  key: 0,
  class: "base-modal-title"
}, Cv = { class: "base-modal-body" }, xv = {
  key: 0,
  class: "base-modal-loading"
}, Sv = {
  key: 1,
  class: "base-modal-error"
}, Iv = {
  key: 0,
  class: "base-modal-footer"
}, Ev = /* @__PURE__ */ me({
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
    return Qe(() => {
      document.addEventListener("keydown", i), document.body.style.overflow = "hidden";
    }), ho(() => {
      document.removeEventListener("keydown", i), document.body.style.overflow = "";
    }), (r, u) => (a(), M(yt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: xe(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = nt(() => {
          }, ["stop"]))
        }, [
          t("div", kv, [
            Ge(r.$slots, "header", {}, () => [
              e.title ? (a(), c("h3", $v, f(e.title), 1)) : y("", !0)
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
          t("div", Cv, [
            e.loading ? (a(), c("div", xv, "Loading...")) : e.error ? (a(), c("div", Sv, f(e.error), 1)) : Ge(r.$slots, "body", { key: 2 }, void 0)
          ]),
          r.$slots.footer ? (a(), c("div", Iv, [
            Ge(r.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), vt = /* @__PURE__ */ pe(Ev, [["__scopeId", "data-v-8dab1081"]]), Tv = ["type", "disabled"], Pv = {
  key: 0,
  class: "spinner"
}, Rv = /* @__PURE__ */ me({
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
      class: xe(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), c("span", Pv)) : y("", !0),
      Ge(s.$slots, "default", {}, void 0)
    ], 10, Tv));
  }
}), Me = /* @__PURE__ */ pe(Rv, [["__scopeId", "data-v-f3452606"]]), Mv = {
  key: 0,
  class: "base-title-count"
}, Dv = /* @__PURE__ */ me({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (a(), M(Fa(`h${e.level}`), {
      class: xe(["base-title", e.variant])
    }, {
      default: g(() => [
        Ge(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), c("span", Mv, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ao = /* @__PURE__ */ pe(Dv, [["__scopeId", "data-v-5a01561d"]]), Lv = ["value", "disabled"], Ov = {
  key: 0,
  value: "",
  disabled: ""
}, Nv = ["value"], Av = {
  key: 0,
  class: "base-select-error"
}, Uv = /* @__PURE__ */ me({
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
      class: xe(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: xe(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (i) => n.$emit("update:modelValue", i.target.value))
      }, [
        e.placeholder ? (a(), c("option", Ov, f(e.placeholder), 1)) : y("", !0),
        (a(!0), c(j, null, ge(e.options, (i) => (a(), c("option", {
          key: s(i),
          value: s(i)
        }, f(o(i)), 9, Nv))), 128))
      ], 42, Lv),
      e.error ? (a(), c("span", Av, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), zv = /* @__PURE__ */ pe(Uv, [["__scopeId", "data-v-7436d745"]]), Fv = { class: "popover-header" }, Bv = { class: "popover-title" }, Vv = { class: "popover-content" }, Wv = {
  key: 0,
  class: "popover-actions"
}, Gv = /* @__PURE__ */ me({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (a(), M(yt, { to: "body" }, [
      e.show ? (a(), c("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Wt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = nt(() => {
          }, ["stop"]))
        }, [
          t("div", Fv, [
            t("h4", Bv, f(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", Vv, [
            Ge(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (a(), c("div", Wv, [
            Ge(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), ss = /* @__PURE__ */ pe(Gv, [["__scopeId", "data-v-42815ace"]]), jv = { class: "detail-section" }, Hv = {
  key: 0,
  class: "empty-message"
}, Kv = { class: "model-header" }, qv = { class: "model-name" }, Yv = { class: "model-details" }, Jv = { class: "model-row" }, Xv = { class: "model-row" }, Qv = { class: "label" }, Zv = {
  key: 0,
  class: "model-row model-row-nodes"
}, ep = { class: "node-list" }, tp = ["onClick"], sp = {
  key: 1,
  class: "model-row"
}, op = { class: "value" }, np = {
  key: 2,
  class: "model-row"
}, ap = { class: "value error" }, lp = {
  key: 0,
  class: "model-actions"
}, ip = { class: "detail-section" }, rp = {
  key: 0,
  class: "empty-message"
}, cp = { class: "node-name" }, up = {
  key: 0,
  class: "node-version"
}, dp = /* @__PURE__ */ me({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getWorkflowDetails: l, setModelImportance: i, openFileLocation: r } = at(), u = k(null), d = k(!1), m = k(null), v = k(!1), h = k({}), w = k(!1), p = k(/* @__PURE__ */ new Set()), _ = [
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
    function P(I) {
      if (!I.loaded_by || I.loaded_by.length === 0) return [];
      const E = I.hash || I.filename;
      return p.value.has(E) ? I.loaded_by : I.loaded_by.slice(0, 3);
    }
    function N(I) {
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
    return Qe(S), (I, E) => (a(), c(j, null, [
      C(vt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: d.value,
        error: m.value || void 0,
        onClose: E[4] || (E[4] = (O) => n("close"))
      }, {
        body: g(() => [
          u.value ? (a(), c(j, { key: 0 }, [
            t("section", jv, [
              C(Ao, { variant: "section" }, {
                default: g(() => [
                  b("MODELS USED (" + f(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (a(), c("div", Hv, " No models used in this workflow ")) : y("", !0),
              (a(!0), c(j, null, ge(u.value.models, (O) => {
                var re;
                return a(), c("div", {
                  key: O.hash || O.filename,
                  class: "model-card"
                }, [
                  t("div", Kv, [
                    E[6] || (E[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", qv, f(O.filename), 1)
                  ]),
                  t("div", Yv, [
                    t("div", Jv, [
                      E[7] || (E[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: xe(["value", x(O.status)])
                      }, f($(O.status)), 3)
                    ]),
                    t("div", Xv, [
                      t("span", Qv, [
                        E[8] || (E[8] = b(" Importance: ", -1)),
                        C(mr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: E[0] || (E[0] = (Y) => w.value = !0)
                        })
                      ]),
                      C(zv, {
                        "model-value": h.value[O.filename] || O.importance,
                        options: _,
                        "onUpdate:modelValue": (Y) => q(O.filename, Y)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    O.loaded_by && O.loaded_by.length > 0 ? (a(), c("div", Zv, [
                      E[9] || (E[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", ep, [
                        (a(!0), c(j, null, ge(P(O), (Y, H) => (a(), c("div", {
                          key: `${Y.node_id}-${H}`,
                          class: "node-reference"
                        }, f(Y.node_type) + " (Node #" + f(Y.node_id) + ") ", 1))), 128)),
                        O.loaded_by.length > 3 ? (a(), c("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (Y) => T(O.hash || O.filename)
                        }, f(N(O.hash || O.filename) ? "▼ Show less" : `▶ View all (${O.loaded_by.length})`), 9, tp)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    O.size_mb ? (a(), c("div", sp, [
                      E[10] || (E[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", op, f(O.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    O.has_category_mismatch ? (a(), c("div", np, [
                      E[13] || (E[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", ap, [
                        E[11] || (E[11] = b(" In ", -1)),
                        t("code", null, f(O.actual_category) + "/", 1),
                        E[12] || (E[12] = b(" but loader needs ", -1)),
                        t("code", null, f((re = O.expected_categories) == null ? void 0 : re[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  O.status !== "available" ? (a(), c("div", lp, [
                    O.status === "downloadable" ? (a(), M(Me, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: E[1] || (E[1] = (Y) => n("resolve"))
                    }, {
                      default: g(() => [...E[14] || (E[14] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    })) : O.status === "category_mismatch" && O.file_path ? (a(), M(Me, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (Y) => B(O.file_path)
                    }, {
                      default: g(() => [...E[15] || (E[15] = [
                        b(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : O.status !== "path_mismatch" ? (a(), M(Me, {
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
            t("section", ip, [
              C(Ao, { variant: "section" }, {
                default: g(() => [
                  b("NODES USED (" + f(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (a(), c("div", rp, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), c(j, null, ge(u.value.nodes, (O) => (a(), c("div", {
                key: O.name,
                class: "node-item"
              }, [
                t("span", {
                  class: xe(["node-status", O.status === "installed" ? "installed" : "missing"])
                }, f(O.status === "installed" ? "✓" : "✕"), 3),
                t("span", cp, f(O.name), 1),
                O.version ? (a(), c("span", up, "v" + f(O.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: g(() => [
          C(Me, {
            variant: "secondary",
            onClick: E[3] || (E[3] = (O) => n("close"))
          }, {
            default: g(() => [...E[17] || (E[17] = [
              b(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (a(), M(Me, {
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
      C(ss, {
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
}), fp = /* @__PURE__ */ pe(dp, [["__scopeId", "data-v-668728e6"]]), qe = zs({
  items: [],
  status: "idle"
});
let us = null;
function pr() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function oa(e) {
  return qe.items.find((s) => s.id === e);
}
async function ao() {
  if (qe.status === "downloading") return;
  const e = qe.items.find((s) => s.status === "queued");
  if (!e) {
    qe.status = "idle";
    return;
  }
  qe.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await mp(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    qe.status = "idle", ao();
  }
}
async function mp(e) {
  return new Promise((s, o) => {
    us && (us.close(), us = null);
    const n = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${n}`);
    us = l;
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
            u = !0, l.close(), us = null, s();
            break;
          case "error":
            u = !0, l.close(), us = null, o(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      l.close(), us = null, u || o(new Error("Connection lost"));
    };
  });
}
async function vp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (qe.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const n = {
        id: pr(),
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
      qe.items.push(n);
    }
    console.log(`[ComfyGit] Loaded ${s.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function Qo() {
  function e($) {
    for (const P of $) {
      if (qe.items.some(
        (S) => S.url === P.url && S.targetPath === P.targetPath && ["queued", "downloading", "paused", "completed"].includes(S.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${P.filename}`);
        continue;
      }
      const T = {
        id: pr(),
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
      qe.items.push(T);
    }
    qe.status === "idle" && ao();
  }
  async function s($) {
    const P = oa($);
    if (P) {
      if (P.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(P.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        us && (us.close(), us = null), P.status = "failed", P.error = "Cancelled by user", qe.status = "idle", ao();
      } else if (P.status === "queued") {
        const N = qe.items.findIndex((T) => T.id === $);
        N >= 0 && qe.items.splice(N, 1);
      }
    }
  }
  function o($) {
    const P = oa($);
    !P || P.status !== "failed" || (P.status = "queued", P.error = void 0, P.progress = 0, P.downloaded = 0, qe.status === "idle" && ao());
  }
  function n($) {
    const P = oa($);
    !P || P.status !== "paused" || (P.status = "queued", qe.status === "idle" && ao());
  }
  function l() {
    const $ = qe.items.filter((P) => P.status === "paused");
    for (const P of $)
      P.status = "queued";
    qe.status === "idle" && ao();
  }
  function i($) {
    const P = qe.items.findIndex((N) => N.id === $);
    P >= 0 && ["completed", "failed", "paused"].includes(qe.items[P].status) && qe.items.splice(P, 1);
  }
  function r() {
    qe.items = qe.items.filter(($) => $.status !== "completed");
  }
  function u() {
    qe.items = qe.items.filter(($) => $.status !== "failed");
  }
  const d = F(
    () => qe.items.find(($) => $.status === "downloading")
  ), m = F(
    () => qe.items.filter(($) => $.status === "queued")
  ), v = F(
    () => qe.items.filter(($) => $.status === "completed")
  ), h = F(
    () => qe.items.filter(($) => $.status === "failed")
  ), w = F(
    () => qe.items.filter(($) => $.status === "paused")
  ), p = F(() => qe.items.length > 0), _ = F(
    () => qe.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), x = F(
    () => qe.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: hn(qe),
    // Computed
    currentDownload: d,
    queuedItems: m,
    completedItems: v,
    failedItems: h,
    pausedItems: w,
    hasItems: p,
    activeCount: _,
    hasPaused: x,
    // Actions
    addToQueue: e,
    cancelDownload: s,
    retryDownload: o,
    resumeDownload: n,
    resumeAllPaused: l,
    removeItem: i,
    clearCompleted: r,
    clearFailed: u,
    loadPendingDownloads: vp
  };
}
function gr() {
  const e = k(null), s = k(null), o = k([]), n = k([]), l = k(!1), i = k(null);
  async function r(N, T) {
    var q;
    if (!((q = window.app) != null && q.api))
      throw new Error("ComfyUI API not available");
    const S = await window.app.api.fetchApi(N, T);
    if (!S.ok) {
      const B = await S.json().catch(() => ({})), A = B.error || B.message || `Request failed: ${S.status}`;
      throw new Error(A);
    }
    return S.json();
  }
  async function u(N) {
    l.value = !0, i.value = null;
    try {
      let T;
      return no() || (T = await r(
        `/v2/comfygit/workflow/${N}/analyze`,
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
  async function d(N, T, S, q) {
    l.value = !0, i.value = null;
    try {
      let B;
      if (!no()) {
        const A = Object.fromEntries(T), I = Object.fromEntries(S), E = q ? Array.from(q) : [];
        B = await r(
          `/v2/comfygit/workflow/${N}/apply-resolution`,
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
  async function m(N, T = 10) {
    l.value = !0, i.value = null;
    try {
      let S;
      return no() || (S = await r(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: N, limit: T })
        }
      )), o.value = S.results, S.results;
    } catch (S) {
      const q = S instanceof Error ? S.message : "Unknown error occurred";
      throw i.value = q, S;
    } finally {
      l.value = !1;
    }
  }
  async function v(N, T = 10) {
    l.value = !0, i.value = null;
    try {
      let S;
      return no() || (S = await r(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: N, limit: T })
        }
      )), n.value = S.results, S.results;
    } catch (S) {
      const q = S instanceof Error ? S.message : "Unknown error occurred";
      throw i.value = q, S;
    } finally {
      l.value = !1;
    }
  }
  const h = zs({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function w() {
    h.phase = "idle", h.currentFile = void 0, h.currentFileIndex = void 0, h.totalFiles = void 0, h.bytesDownloaded = void 0, h.bytesTotal = void 0, h.completedFiles = [], h.nodesToInstall = [], h.nodesInstalled = [], h.installError = void 0, h.needsRestart = void 0, h.error = void 0, h.nodeInstallProgress = void 0;
  }
  async function p(N) {
    h.phase = "installing", h.nodesInstalled = [], h.installError = void 0, h.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return no(), await _(N);
    } catch (T) {
      const S = T instanceof Error ? T.message : "Failed to install nodes";
      throw h.installError = S, T;
    }
  }
  async function _(N) {
    var S;
    const T = await r(
      `/v2/comfygit/workflow/${N}/install`,
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
  async function x(N, T, S) {
    w(), h.phase = "resolving", i.value = null;
    const q = Object.fromEntries(T), B = Object.fromEntries(S);
    try {
      const A = await fetch(`/v2/comfygit/workflow/${N}/apply-resolution-stream`, {
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
          const Z = te.split(`
`);
          let U = "", z = "";
          for (const R of Z)
            R.startsWith("event: ") ? U = R.slice(7) : R.startsWith("data: ") && (z = R.slice(6));
          if (z)
            try {
              const R = JSON.parse(z);
              $(U, R);
            } catch (R) {
              console.warn("Failed to parse SSE event:", R);
            }
        }
      }
    } catch (A) {
      const I = A instanceof Error ? A.message : "Unknown error occurred";
      throw i.value = I, h.error = I, h.phase = "error", A;
    }
  }
  function $(N, T) {
    switch (N) {
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
  function P(N, T) {
    const { addToQueue: S } = Qo(), q = T.filter((B) => B.url && B.target_path).map((B) => ({
      workflow: N,
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
    queueModelDownloads: P
  };
}
const pp = { class: "resolution-stepper" }, gp = { class: "stepper-header" }, hp = ["onClick"], yp = {
  key: 0,
  class: "step-icon"
}, wp = {
  key: 1,
  class: "step-number"
}, bp = { class: "step-label" }, _p = {
  key: 0,
  class: "step-connector"
}, kp = { class: "stepper-content" }, $p = /* @__PURE__ */ me({
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
    return (m, v) => (a(), c("div", pp, [
      t("div", gp, [
        (a(!0), c(j, null, ge(e.steps, (h, w) => (a(), c("div", {
          key: h.id,
          class: xe(["step", {
            active: e.currentStep === h.id,
            completed: l(h.id),
            "in-progress": i(h.id),
            disabled: u(h.id)
          }]),
          onClick: (p) => d(h.id)
        }, [
          t("div", {
            class: xe(["step-indicator", r(h.id)])
          }, [
            l(h.id) ? (a(), c("span", yp, "✓")) : (a(), c("span", wp, f(w + 1), 1))
          ], 2),
          t("div", bp, f(h.label), 1),
          w < e.steps.length - 1 ? (a(), c("div", _p)) : y("", !0)
        ], 10, hp))), 128))
      ]),
      t("div", kp, [
        Ge(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Cp = /* @__PURE__ */ pe($p, [["__scopeId", "data-v-2a7b3af8"]]), xp = /* @__PURE__ */ me({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = F(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), n = F(() => `confidence-${o.value}`), l = F(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (i, r) => (a(), c("span", {
      class: xe(["confidence-badge", n.value, e.size])
    }, f(l.value), 3));
  }
}), En = /* @__PURE__ */ pe(xp, [["__scopeId", "data-v-17ec4b80"]]), Sp = { class: "node-info" }, Ip = { class: "node-info-text" }, Ep = { class: "item-body" }, Tp = {
  key: 0,
  class: "resolved-state"
}, Pp = {
  key: 1,
  class: "multiple-options"
}, Rp = { class: "options-list" }, Mp = ["onClick"], Dp = ["name", "value", "checked", "onChange"], Lp = { class: "option-content" }, Op = { class: "option-header" }, Np = { class: "option-package-id" }, Ap = {
  key: 0,
  class: "option-title"
}, Up = { class: "option-meta" }, zp = {
  key: 0,
  class: "installed-badge"
}, Fp = { class: "action-buttons" }, Bp = {
  key: 2,
  class: "unresolved"
}, Vp = {
  key: 0,
  class: "searching-state"
}, Wp = { class: "options-list" }, Gp = ["onClick"], jp = ["name", "value"], Hp = { class: "option-content" }, Kp = { class: "option-header" }, qp = { class: "option-package-id" }, Yp = {
  key: 0,
  class: "option-description"
}, Jp = { class: "option-meta" }, Xp = {
  key: 0,
  class: "installed-badge"
}, Qp = {
  key: 2,
  class: "unresolved-message"
}, Zp = { class: "action-buttons" }, eg = /* @__PURE__ */ me({
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
      class: xe(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: i.value }])
    }, [
      t("div", Sp, [
        t("span", Ip, [
          m[7] || (m[7] = b("Node type: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), c("span", {
          key: 0,
          class: xe(["status-badge", r.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Ep, [
        i.value ? (a(), c("div", Tp, [
          C(Me, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: g(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), c("div", Pp, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          t("div", Rp, [
            (a(!0), c(j, null, ge(e.options, (v, h) => (a(), c("label", {
              key: v.package_id,
              class: xe(["option-card", { selected: e.selectedOptionIndex === h }]),
              onClick: (w) => u(h)
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: h,
                checked: e.selectedOptionIndex === h,
                onChange: (w) => u(h)
              }, null, 40, Dp),
              t("div", Lp, [
                t("div", Op, [
                  t("span", Np, f(v.package_id), 1),
                  C(En, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (a(), c("div", Ap, f(v.title), 1)) : y("", !0),
                t("div", Up, [
                  v.is_installed ? (a(), c("span", zp, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, Mp))), 128))
          ]),
          t("div", Fp, [
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: g(() => [...m[9] || (m[9] = [
                b(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("manual-entry"))
            }, {
              default: g(() => [...m[10] || (m[10] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
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
        ])) : (a(), c("div", Bp, [
          e.isSearching ? (a(), c("div", Vp, [...m[13] || (m[13] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), c(j, { key: 1 }, [
            m[14] || (m[14] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", Wp, [
              (a(!0), c(j, null, ge(e.searchResults.slice(0, 5), (v, h) => (a(), c("label", {
                key: v.package_id,
                class: "option-card",
                onClick: (w) => n("search-result-selected", v)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: h
                }, null, 8, jp),
                t("div", Hp, [
                  t("div", Kp, [
                    t("span", qp, f(v.package_id), 1),
                    C(En, {
                      confidence: v.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  v.description ? (a(), c("div", Yp, f(l(v.description)), 1)) : y("", !0),
                  t("div", Jp, [
                    v.is_installed ? (a(), c("span", Xp, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, Gp))), 128))
            ])
          ], 64)) : (a(), c("div", Qp, [...m[15] || (m[15] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", Zp, [
            C(Me, {
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
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("manual-entry"))
            }, {
              default: g(() => [...m[16] || (m[16] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
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
}), tg = /* @__PURE__ */ pe(eg, [["__scopeId", "data-v-c2997d1d"]]), sg = { class: "item-navigator" }, og = { class: "nav-item-info" }, ng = ["title"], ag = { class: "nav-controls" }, lg = { class: "nav-arrows" }, ig = ["disabled"], rg = ["disabled"], cg = { class: "nav-position" }, ug = /* @__PURE__ */ me({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (n, l) => (a(), c("div", sg, [
      t("div", og, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, f(e.itemName), 9, ng)
      ]),
      t("div", ag, [
        t("div", lg, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (i) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, ig),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (i) => o("next")),
            title: "Next item"
          }, " → ", 8, rg)
        ]),
        t("span", cg, f(e.currentIndex + 1) + "/" + f(e.totalItems), 1)
      ])
    ]));
  }
}), hr = /* @__PURE__ */ pe(ug, [["__scopeId", "data-v-74af7920"]]), dg = ["type", "value", "placeholder", "disabled"], fg = {
  key: 0,
  class: "base-input-error"
}, mg = /* @__PURE__ */ me({
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
      class: xe(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: xe(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.value)),
        onKeyup: [
          o[1] || (o[1] = Xt((n) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = Xt((n) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, dg),
      e.error ? (a(), c("span", fg, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Qt = /* @__PURE__ */ pe(mg, [["__scopeId", "data-v-9ba02cdc"]]), vg = { class: "node-resolution-step" }, pg = {
  key: 0,
  class: "auto-resolved-section"
}, gg = { class: "section-header" }, hg = { class: "stat-badge" }, yg = { class: "resolved-packages-list" }, wg = { class: "package-info" }, bg = { class: "package-id" }, _g = { class: "node-count" }, kg = { class: "package-actions" }, $g = {
  key: 0,
  class: "status-badge install"
}, Cg = {
  key: 1,
  class: "status-badge skip"
}, xg = ["onClick"], Sg = {
  key: 1,
  class: "section-divider"
}, Ig = { class: "step-header" }, Eg = { class: "stat-badge" }, Tg = {
  key: 1,
  class: "step-body"
}, Pg = {
  key: 3,
  class: "empty-state"
}, Rg = { class: "node-modal-body" }, Mg = { class: "node-search-results-container" }, Dg = {
  key: 0,
  class: "node-search-results"
}, Lg = ["onClick"], Og = { class: "node-result-header" }, Ng = { class: "node-result-package-id" }, Ag = {
  key: 0,
  class: "node-result-description"
}, Ug = {
  key: 1,
  class: "node-empty-state"
}, zg = {
  key: 2,
  class: "node-empty-state"
}, Fg = {
  key: 3,
  class: "node-empty-state"
}, Bg = { class: "node-manual-entry-modal" }, Vg = { class: "node-modal-body" }, Wg = { class: "node-modal-actions" }, Gg = /* @__PURE__ */ me({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: s }) {
    const o = e, n = s, { searchNodes: l } = gr(), i = k(0), r = k(!1), u = k(!1), d = k(""), m = k(""), v = k([]), h = k(!1), w = k(/* @__PURE__ */ new Map()), p = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function x() {
      _.value && z(), _.value = !1;
    }
    const $ = F(() => o.nodes[i.value]), P = F(() => o.nodes.filter((_e) => o.nodeChoices.has(_e.node_type)).length), N = F(() => $.value ? w.value.get($.value.node_type) || [] : []), T = F(() => $.value ? p.value.has($.value.node_type) : !1);
    xt($, async (_e) => {
      var Se;
      _e && ((Se = _e.options) != null && Se.length || w.value.has(_e.node_type) || p.value.has(_e.node_type) || o.nodeChoices.has(_e.node_type) || await S(_e.node_type));
    }, { immediate: !0 });
    async function S(_e) {
      p.value.add(_e);
      try {
        const Se = await l(_e, 5);
        w.value.set(_e, Se);
      } catch {
        w.value.set(_e, []);
      } finally {
        p.value.delete(_e);
      }
    }
    const q = F(() => o.autoResolvedPackages.filter((_e) => !o.skippedPackages.has(_e.package_id)).length);
    function B(_e) {
      return o.skippedPackages.has(_e);
    }
    function A(_e) {
      n("package-skip", _e);
    }
    const I = F(() => {
      var Se;
      if (!$.value) return "not-found";
      const _e = o.nodeChoices.get($.value.node_type);
      if (_e)
        switch (_e.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (Se = $.value.options) != null && Se.length ? "ambiguous" : "not-found";
    }), E = F(() => {
      var Se;
      if (!$.value) return;
      const _e = o.nodeChoices.get($.value.node_type);
      if (_e)
        switch (_e.action) {
          case "install":
            return _e.package_id ? `→ ${_e.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (Se = $.value.options) != null && Se.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function O(_e) {
      _e >= 0 && _e < o.nodes.length && (i.value = _e);
    }
    function re() {
      $.value && n("mark-optional", $.value.node_type);
    }
    function Y() {
      $.value && n("skip", $.value.node_type);
    }
    function H(_e) {
      $.value && n("option-selected", $.value.node_type, _e);
    }
    function te() {
      $.value && n("clear-choice", $.value.node_type);
    }
    function Z() {
      $.value && (d.value = $.value.node_type, v.value = N.value, r.value = !0, Ee(d.value));
    }
    function U() {
      m.value = "", u.value = !0;
    }
    function z() {
      r.value = !1, d.value = "", v.value = [];
    }
    function R() {
      u.value = !1, m.value = "";
    }
    let be = null;
    function ve() {
      be && clearTimeout(be), be = setTimeout(() => {
        Ee(d.value);
      }, 300);
    }
    async function Ee(_e) {
      if (!_e.trim()) {
        v.value = [];
        return;
      }
      h.value = !0;
      try {
        v.value = await l(_e, 10);
      } catch {
        v.value = [];
      } finally {
        h.value = !1;
      }
    }
    function De(_e) {
      $.value && (n("manual-entry", $.value.node_type, _e.package_id), z());
    }
    function je(_e) {
      $.value && n("manual-entry", $.value.node_type, _e.package_id);
    }
    function Je() {
      !$.value || !m.value.trim() || (n("manual-entry", $.value.node_type, m.value.trim()), R());
    }
    return (_e, Se) => {
      var Ve, ye;
      return a(), c("div", vg, [
        e.autoResolvedPackages.length > 0 ? (a(), c("div", pg, [
          t("div", gg, [
            Se[6] || (Se[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", hg, f(q.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", yg, [
            (a(!0), c(j, null, ge(e.autoResolvedPackages, (le) => (a(), c("div", {
              key: le.package_id,
              class: "resolved-package-item"
            }, [
              t("div", wg, [
                t("code", bg, f(le.package_id), 1),
                t("span", _g, f(le.node_types_count) + " node type" + f(le.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", kg, [
                B(le.package_id) ? (a(), c("span", Cg, " SKIPPED ")) : (a(), c("span", $g, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (Fe) => A(le.package_id)
                }, f(B(le.package_id) ? "Include" : "Skip"), 9, xg)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), c("div", Sg)) : y("", !0),
        e.nodes.length > 0 ? (a(), c(j, { key: 2 }, [
          t("div", Ig, [
            Se[7] || (Se[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", Eg, f(P.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          $.value ? (a(), M(hr, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": i.value,
            "total-items": e.nodes.length,
            onPrev: Se[0] || (Se[0] = (le) => O(i.value - 1)),
            onNext: Se[1] || (Se[1] = (le) => O(i.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          $.value ? (a(), c("div", Tg, [
            C(tg, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((Ve = $.value.options) != null && Ve.length),
              options: $.value.options,
              choice: (ye = e.nodeChoices) == null ? void 0 : ye.get($.value.node_type),
              status: I.value,
              "status-label": E.value,
              "search-results": N.value,
              "is-searching": T.value,
              onMarkOptional: re,
              onSkip: Y,
              onManualEntry: U,
              onSearch: Z,
              onOptionSelected: H,
              onClearChoice: te,
              onSearchResultSelected: je
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), c("div", Pg, [...Se[8] || (Se[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), M(yt, { to: "body" }, [
          r.value ? (a(), c("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: Se[4] || (Se[4] = nt((le) => _.value = !0, ["self"])),
            onMouseup: nt(x, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: Se[3] || (Se[3] = (le) => _.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                Se[9] || (Se[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: z
                }, "✕")
              ]),
              t("div", Rg, [
                C(Qt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": Se[2] || (Se[2] = (le) => d.value = le),
                  placeholder: "Search by node type, package name...",
                  onInput: ve
                }, null, 8, ["modelValue"]),
                t("div", Mg, [
                  v.value.length > 0 ? (a(), c("div", Dg, [
                    (a(!0), c(j, null, ge(v.value, (le) => (a(), c("div", {
                      key: le.package_id,
                      class: "node-search-result-item",
                      onClick: (Fe) => De(le)
                    }, [
                      t("div", Og, [
                        t("code", Ng, f(le.package_id), 1),
                        le.match_confidence ? (a(), M(En, {
                          key: 0,
                          confidence: le.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      le.description ? (a(), c("div", Ag, f(le.description), 1)) : y("", !0)
                    ], 8, Lg))), 128))
                  ])) : h.value ? (a(), c("div", Ug, "Searching...")) : d.value ? (a(), c("div", zg, 'No packages found matching "' + f(d.value) + '"', 1)) : (a(), c("div", Fg, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (a(), M(yt, { to: "body" }, [
          u.value ? (a(), c("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: nt(R, ["self"])
          }, [
            t("div", Bg, [
              t("div", { class: "node-modal-header" }, [
                Se[10] || (Se[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: R
                }, "✕")
              ]),
              t("div", Vg, [
                C(Qt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": Se[5] || (Se[5] = (le) => m.value = le),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", Wg, [
                  C(Me, {
                    variant: "secondary",
                    onClick: R
                  }, {
                    default: g(() => [...Se[11] || (Se[11] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Me, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: Je
                  }, {
                    default: g(() => [...Se[12] || (Se[12] = [
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
}), jg = /* @__PURE__ */ pe(Gg, [["__scopeId", "data-v-281581bc"]]), Hg = { class: "node-info" }, Kg = { class: "node-info-text" }, qg = { class: "item-body" }, Yg = {
  key: 0,
  class: "resolved-state"
}, Jg = {
  key: 1,
  class: "multiple-options"
}, Xg = { class: "options-list" }, Qg = ["onClick"], Zg = ["name", "value", "checked", "onChange"], eh = { class: "option-content" }, th = { class: "option-header" }, sh = { class: "option-filename" }, oh = { class: "option-meta" }, nh = { class: "option-size" }, ah = { class: "option-category" }, lh = { class: "option-path" }, ih = { class: "action-buttons" }, rh = {
  key: 2,
  class: "unresolved"
}, ch = { class: "action-buttons" }, uh = /* @__PURE__ */ me({
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
      class: xe(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", Hg, [
        t("span", Kg, [
          m[7] || (m[7] = b("Used by: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), c("span", {
          key: 0,
          class: xe(["status-badge", i.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", qg, [
        l.value ? (a(), c("div", Yg, [
          C(Me, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: g(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), c("div", Jg, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", Xg, [
            (a(!0), c(j, null, ge(e.options, (v, h) => (a(), c("label", {
              key: v.model.hash,
              class: xe(["option-card", { selected: e.selectedOptionIndex === h }]),
              onClick: (w) => r(h)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: h,
                checked: e.selectedOptionIndex === h,
                onChange: (w) => r(h)
              }, null, 40, Zg),
              t("div", eh, [
                t("div", th, [
                  t("span", sh, f(v.model.filename), 1),
                  C(En, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", oh, [
                  t("span", nh, f(u(v.model.size)), 1),
                  t("span", ah, f(v.model.category), 1)
                ]),
                t("div", lh, f(v.model.relative_path), 1)
              ])
            ], 10, Qg))), 128))
          ]),
          t("div", ih, [
            C(Me, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: g(() => [...m[9] || (m[9] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("download-url"))
            }, {
              default: g(() => [...m[10] || (m[10] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
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
        ])) : (a(), c("div", rh, [
          m[16] || (m[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", ch, [
            C(Me, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: g(() => [...m[13] || (m[13] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("download-url"))
            }, {
              default: g(() => [...m[14] || (m[14] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
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
}), dh = /* @__PURE__ */ pe(uh, [["__scopeId", "data-v-8a82fefa"]]), fh = { class: "model-resolution-step" }, mh = { class: "step-header" }, vh = { class: "step-info" }, ph = { class: "step-title" }, gh = { class: "step-description" }, hh = { class: "stat-badge" }, yh = {
  key: 1,
  class: "step-body"
}, wh = {
  key: 2,
  class: "empty-state"
}, bh = { class: "model-search-modal" }, _h = { class: "model-modal-body" }, kh = {
  key: 0,
  class: "model-search-results"
}, $h = ["onClick"], Ch = { class: "model-result-header" }, xh = { class: "model-result-filename" }, Sh = { class: "model-result-meta" }, Ih = { class: "model-result-category" }, Eh = { class: "model-result-size" }, Th = {
  key: 0,
  class: "model-result-path"
}, Ph = {
  key: 1,
  class: "model-no-results"
}, Rh = {
  key: 2,
  class: "model-searching"
}, Mh = { class: "model-download-url-modal" }, Dh = { class: "model-modal-body" }, Lh = { class: "model-input-group" }, Oh = { class: "model-input-group" }, Nh = { class: "model-modal-actions" }, Ah = /* @__PURE__ */ me({
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
    function n(z) {
      var R;
      return z && ((R = o[z]) == null ? void 0 : R[0]) || null;
    }
    const l = e, i = s, r = k(0), u = k(!1), d = k(!1), m = k(""), v = k(""), h = k(""), w = k([]), p = k(!1), _ = F(() => l.models[r.value]), x = F(() => l.models.some((z) => z.is_download_intent)), $ = F(() => l.models.filter(
      (z) => l.modelChoices.has(z.filename) || z.is_download_intent
    ).length), P = F(() => {
      var R;
      if (!_.value) return "";
      const z = n((R = _.value.reference) == null ? void 0 : R.node_type);
      return z ? `${z}/${_.value.filename}` : "";
    }), N = F(() => {
      var R;
      if (!_.value) return "not-found";
      const z = l.modelChoices.get(_.value.filename);
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
      return _.value.is_download_intent ? "download" : (R = _.value.options) != null && R.length ? "ambiguous" : "not-found";
    }), T = F(() => {
      var R, be;
      if (!_.value) return;
      const z = l.modelChoices.get(_.value.filename);
      if (z)
        switch (z.action) {
          case "select":
            return (R = z.selected_model) != null && R.filename ? `→ ${z.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (be = _.value.options) != null && be.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function S(z) {
      z >= 0 && z < l.models.length && (r.value = z);
    }
    function q() {
      _.value && i("mark-optional", _.value.filename);
    }
    function B() {
      _.value && i("skip", _.value.filename);
    }
    function A(z) {
      _.value && i("option-selected", _.value.filename, z);
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
    function te(z) {
      _.value && re();
    }
    function Z() {
      !_.value || !v.value.trim() || (i("download-url", _.value.filename, v.value.trim(), h.value.trim() || void 0), Y());
    }
    function U(z) {
      if (!z) return "Unknown";
      const R = z / (1024 * 1024 * 1024);
      return R >= 1 ? `${R.toFixed(2)} GB` : `${(z / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (z, R) => {
      var be, ve, Ee;
      return a(), c("div", fh, [
        t("div", mh, [
          t("div", vh, [
            t("h3", ph, f(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", gh, f(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", hh, f($.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), M(hr, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": r.value,
          "total-items": e.models.length,
          onPrev: R[0] || (R[0] = (De) => S(r.value - 1)),
          onNext: R[1] || (R[1] = (De) => S(r.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), c("div", yh, [
          C(dh, {
            filename: _.value.filename,
            "node-type": ((be = _.value.reference) == null ? void 0 : be.node_type) || "Unknown",
            "has-multiple-options": !!((ve = _.value.options) != null && ve.length),
            options: _.value.options,
            choice: (Ee = e.modelChoices) == null ? void 0 : Ee.get(_.value.filename),
            status: N.value,
            "status-label": T.value,
            onMarkOptional: q,
            onSkip: B,
            onDownloadUrl: O,
            onSearch: E,
            onOptionSelected: A,
            onClearChoice: I
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), c("div", wh, [...R[5] || (R[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (a(), M(yt, { to: "body" }, [
          u.value ? (a(), c("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: nt(re, ["self"])
          }, [
            t("div", bh, [
              t("div", { class: "model-modal-header" }, [
                R[6] || (R[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: re
                }, "✕")
              ]),
              t("div", _h, [
                C(Qt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": R[2] || (R[2] = (De) => m.value = De),
                  placeholder: "Search by filename, category...",
                  onInput: H
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), c("div", kh, [
                  (a(!0), c(j, null, ge(w.value, (De) => (a(), c("div", {
                    key: De.hash,
                    class: "model-search-result-item",
                    onClick: (je) => te()
                  }, [
                    t("div", Ch, [
                      t("code", xh, f(De.filename), 1)
                    ]),
                    t("div", Sh, [
                      t("span", Ih, f(De.category), 1),
                      t("span", Eh, f(U(De.size)), 1)
                    ]),
                    De.relative_path ? (a(), c("div", Th, f(De.relative_path), 1)) : y("", !0)
                  ], 8, $h))), 128))
                ])) : m.value && !p.value ? (a(), c("div", Ph, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                p.value ? (a(), c("div", Rh, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), M(yt, { to: "body" }, [
          d.value ? (a(), c("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: nt(Y, ["self"])
          }, [
            t("div", Mh, [
              t("div", { class: "model-modal-header" }, [
                R[7] || (R[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              t("div", Dh, [
                t("div", Lh, [
                  R[8] || (R[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  C(Qt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": R[3] || (R[3] = (De) => v.value = De),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", Oh, [
                  R[9] || (R[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  C(Qt, {
                    modelValue: h.value,
                    "onUpdate:modelValue": R[4] || (R[4] = (De) => h.value = De),
                    placeholder: P.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", Nh, [
                  C(Me, {
                    variant: "secondary",
                    onClick: Y
                  }, {
                    default: g(() => [...R[10] || (R[10] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Me, {
                    variant: "primary",
                    disabled: !v.value.trim() || !h.value.trim(),
                    onClick: Z
                  }, {
                    default: g(() => [...R[11] || (R[11] = [
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
}), Uh = /* @__PURE__ */ pe(Ah, [["__scopeId", "data-v-c6acbada"]]), zh = { class: "applying-step" }, Fh = {
  key: 0,
  class: "phase-content"
}, Bh = {
  key: 1,
  class: "phase-content"
}, Vh = { class: "phase-description" }, Wh = { class: "overall-progress" }, Gh = { class: "progress-bar" }, jh = { class: "progress-label" }, Hh = { class: "install-list" }, Kh = { class: "install-icon" }, qh = { key: 0 }, Yh = {
  key: 1,
  class: "spinner"
}, Jh = { key: 2 }, Xh = { key: 3 }, Qh = {
  key: 0,
  class: "install-error"
}, Zh = {
  key: 2,
  class: "phase-content"
}, ey = { class: "phase-header" }, ty = { class: "phase-title" }, sy = { class: "completion-summary" }, oy = {
  key: 0,
  class: "summary-item success"
}, ny = { class: "summary-text" }, ay = {
  key: 1,
  class: "summary-item error"
}, ly = { class: "summary-text" }, iy = {
  key: 2,
  class: "failed-list"
}, ry = { class: "failed-node-id" }, cy = { class: "failed-error" }, uy = {
  key: 4,
  class: "summary-item success"
}, dy = {
  key: 5,
  class: "restart-prompt"
}, fy = {
  key: 3,
  class: "phase-content error"
}, my = { class: "error-message" }, vy = /* @__PURE__ */ me({
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
      return a(), c("div", zh, [
        e.progress.phase === "resolving" ? (a(), c("div", Fh, [...d[2] || (d[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), c("div", Bh, [
          d[3] || (d[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", Vh, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", Wh, [
            t("div", Gh, [
              t("div", {
                class: "progress-fill",
                style: Wt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", jh, f(((h = e.progress.nodeInstallProgress) == null ? void 0 : h.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", Hh, [
            (a(!0), c(j, null, ge(e.progress.nodesToInstall, (p, _) => (a(), c("div", {
              key: p,
              class: xe(["install-item", i(p, _)])
            }, [
              t("span", Kh, [
                i(p, _) === "pending" ? (a(), c("span", qh, "○")) : i(p, _) === "installing" ? (a(), c("span", Yh, "◌")) : i(p, _) === "complete" ? (a(), c("span", Jh, "✓")) : i(p, _) === "failed" ? (a(), c("span", Xh, "✗")) : y("", !0)
              ]),
              t("code", null, f(p), 1),
              r(p) ? (a(), c("span", Qh, f(r(p)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), c("div", Zh, [
          t("div", ey, [
            t("span", {
              class: xe(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            t("h3", ty, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", sy, [
            e.progress.nodesInstalled.length > 0 ? (a(), c("div", oy, [
              d[4] || (d[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", ny, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), c("div", ay, [
              d[5] || (d[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", ly, f(n.value.length) + " package" + f(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), c("div", iy, [
              (a(!0), c(j, null, ge(n.value, (p) => (a(), c("div", {
                key: p.node_id,
                class: "failed-item"
              }, [
                t("code", ry, f(p.node_id), 1),
                t("span", cy, f(p.error), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.length > 0 ? (a(), c("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (p) => u.$emit("retry-failed"))
            }, " Retry Failed (" + f(n.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (a(), c("div", uy, [...d[6] || (d[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), c("div", dy, [
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
        ])) : e.progress.phase === "error" ? (a(), c("div", fy, [
          d[9] || (d[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", my, f(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), py = /* @__PURE__ */ pe(vy, [["__scopeId", "data-v-5efaae58"]]), gy = {
  key: 0,
  class: "loading-state"
}, hy = {
  key: 1,
  class: "wizard-content"
}, yy = {
  key: 0,
  class: "step-content"
}, wy = { class: "analysis-summary" }, by = { class: "analysis-header" }, _y = { class: "summary-description" }, ky = { class: "stats-grid" }, $y = { class: "stat-card" }, Cy = { class: "stat-items" }, xy = {
  key: 0,
  class: "stat-item success"
}, Sy = { class: "stat-count" }, Iy = {
  key: 1,
  class: "stat-item info"
}, Ey = { class: "stat-count" }, Ty = {
  key: 2,
  class: "stat-item warning"
}, Py = { class: "stat-count" }, Ry = {
  key: 3,
  class: "stat-item error"
}, My = { class: "stat-count" }, Dy = { class: "stat-card" }, Ly = { class: "stat-items" }, Oy = { class: "stat-item success" }, Ny = { class: "stat-count" }, Ay = {
  key: 0,
  class: "stat-item info"
}, Uy = { class: "stat-count" }, zy = {
  key: 1,
  class: "stat-item warning"
}, Fy = { class: "stat-count" }, By = {
  key: 2,
  class: "stat-item warning"
}, Vy = { class: "stat-count" }, Wy = {
  key: 3,
  class: "stat-item error"
}, Gy = { class: "stat-count" }, jy = {
  key: 0,
  class: "status-message warning"
}, Hy = { class: "status-text" }, Ky = {
  key: 1,
  class: "status-message info"
}, qy = { class: "status-text" }, Yy = {
  key: 2,
  class: "status-message info"
}, Jy = { class: "status-text" }, Xy = {
  key: 3,
  class: "status-message warning"
}, Qy = { class: "status-text" }, Zy = {
  key: 4,
  class: "status-message success"
}, e1 = {
  key: 5,
  class: "category-mismatch-section"
}, t1 = { class: "mismatch-list" }, s1 = { class: "mismatch-path" }, o1 = { class: "mismatch-target" }, n1 = {
  key: 3,
  class: "step-content"
}, a1 = { class: "review-summary" }, l1 = { class: "review-stats" }, i1 = { class: "review-stat" }, r1 = { class: "stat-value" }, c1 = { class: "review-stat" }, u1 = { class: "stat-value" }, d1 = { class: "review-stat" }, f1 = { class: "stat-value" }, m1 = { class: "review-stat" }, v1 = { class: "stat-value" }, p1 = {
  key: 0,
  class: "review-section"
}, g1 = { class: "section-title" }, h1 = { class: "review-items" }, y1 = { class: "item-name" }, w1 = { class: "item-choice" }, b1 = {
  key: 0,
  class: "choice-badge install"
}, _1 = {
  key: 1,
  class: "choice-badge skip"
}, k1 = {
  key: 1,
  class: "review-section"
}, $1 = { class: "section-title" }, C1 = { class: "review-items" }, x1 = { class: "item-name" }, S1 = { class: "item-choice" }, I1 = {
  key: 0,
  class: "choice-badge install"
}, E1 = {
  key: 1,
  class: "choice-badge optional"
}, T1 = {
  key: 2,
  class: "choice-badge skip"
}, P1 = {
  key: 1,
  class: "choice-badge pending"
}, R1 = {
  key: 2,
  class: "review-section"
}, M1 = { class: "section-title" }, D1 = { class: "review-items" }, L1 = { class: "item-name" }, O1 = { class: "item-choice" }, N1 = {
  key: 0,
  class: "choice-badge install"
}, A1 = {
  key: 1,
  class: "choice-badge download"
}, U1 = {
  key: 2,
  class: "choice-badge optional"
}, z1 = {
  key: 3,
  class: "choice-badge skip"
}, F1 = {
  key: 4,
  class: "choice-badge skip"
}, B1 = {
  key: 1,
  class: "choice-badge download"
}, V1 = {
  key: 2,
  class: "choice-badge pending"
}, W1 = {
  key: 3,
  class: "no-choices"
}, G1 = /* @__PURE__ */ me({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, n = s, { analyzeWorkflow: l, applyResolution: i, installNodes: r, queueModelDownloads: u, progress: d, resetProgress: m } = gr(), { loadPendingDownloads: v } = Qo(), { openFileLocation: h } = at(), w = k(null), p = k(!1), _ = k(!1), x = k(null), $ = k("analysis"), P = k([]), N = k(/* @__PURE__ */ new Map()), T = k(/* @__PURE__ */ new Map()), S = k(/* @__PURE__ */ new Set()), q = F(() => {
      const X = [
        { id: "analysis", label: "Analysis" }
      ];
      return (A.value || O.value) && X.push({ id: "nodes", label: "Nodes" }), (I.value || E.value) && X.push({ id: "models", label: "Models" }), X.push({ id: "review", label: "Review" }), $.value === "applying" && X.push({ id: "applying", label: "Applying" }), X;
    }), B = F(() => w.value ? w.value.stats.needs_user_input : !1), A = F(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), I = F(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), E = F(() => w.value ? w.value.stats.download_intents > 0 : !1), O = F(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), re = F(() => w.value ? w.value.nodes.resolved.length : 0), Y = F(() => w.value ? w.value.models.resolved.filter((X) => X.has_category_mismatch) : []), H = F(() => Y.value.length > 0), te = F(() => {
      if (!w.value) return [];
      const X = w.value.nodes.resolved.filter((W) => !W.is_installed), D = /* @__PURE__ */ new Set();
      return X.filter((W) => D.has(W.package.package_id) ? !1 : (D.add(W.package.package_id), !0));
    }), Z = F(() => {
      if (!w.value) return [];
      const X = w.value.nodes.resolved.filter((W) => !W.is_installed), D = /* @__PURE__ */ new Map();
      for (const W of X) {
        const ce = D.get(W.package.package_id);
        ce ? ce.node_types_count++ : D.set(W.package.package_id, {
          package_id: W.package.package_id,
          title: W.package.title,
          node_types_count: 1
        });
      }
      return Array.from(D.values());
    }), U = F(() => te.value.filter((X) => !S.value.has(X.package.package_id))), z = F(() => w.value ? w.value.models.resolved.filter((X) => X.match_type === "download_intent").map((X) => ({
      filename: X.reference.widget_value,
      reference: X.reference,
      is_download_intent: !0,
      resolved_model: X.model,
      download_source: X.download_source,
      target_path: X.target_path
    })) : []), R = F(() => {
      if (!w.value) return [];
      const X = w.value.nodes.unresolved.map((W) => ({
        node_type: W.reference.node_type,
        reason: W.reason,
        is_unresolved: !0,
        options: void 0
      })), D = w.value.nodes.ambiguous.map((W) => ({
        node_type: W.reference.node_type,
        has_multiple_options: !0,
        options: W.options.map((ce) => ({
          package_id: ce.package.package_id,
          title: ce.package.title,
          match_confidence: ce.match_confidence,
          match_type: ce.match_type,
          is_installed: ce.is_installed
        }))
      }));
      return [...X, ...D];
    }), be = F(() => {
      if (!w.value) return [];
      const X = w.value.models.unresolved.map((W) => ({
        filename: W.reference.widget_value,
        reference: W.reference,
        reason: W.reason,
        is_unresolved: !0,
        options: void 0
      })), D = w.value.models.ambiguous.map((W) => ({
        filename: W.reference.widget_value,
        reference: W.reference,
        has_multiple_options: !0,
        options: W.options.map((ce) => ({
          model: ce.model,
          match_confidence: ce.match_confidence,
          match_type: ce.match_type,
          has_download_source: ce.has_download_source
        }))
      }));
      return [...X, ...D];
    }), ve = F(() => {
      const X = be.value, D = z.value.map((W) => ({
        filename: W.filename,
        reference: W.reference,
        is_download_intent: !0,
        resolved_model: W.resolved_model,
        download_source: W.download_source,
        target_path: W.target_path,
        options: void 0
      }));
      return [...X, ...D];
    }), Ee = F(() => {
      let X = U.value.length;
      for (const D of N.value.values())
        D.action === "install" && X++;
      for (const D of T.value.values())
        D.action === "select" && X++;
      return X;
    }), De = F(() => {
      let X = 0;
      for (const D of T.value.values())
        D.action === "download" && X++;
      return X;
    }), je = F(() => {
      let X = 0;
      for (const D of N.value.values())
        D.action === "optional" && X++;
      for (const D of T.value.values())
        D.action === "optional" && X++;
      return X;
    }), Je = F(() => {
      let X = S.value.size;
      for (const D of N.value.values())
        D.action === "skip" && X++;
      for (const D of T.value.values())
        D.action === "skip" && X++;
      for (const D of R.value)
        N.value.has(D.node_type) || X++;
      for (const D of be.value)
        T.value.has(D.filename) || X++;
      return X;
    }), _e = F(() => {
      const X = {};
      if (X.analysis = { resolved: 1, total: 1 }, A.value) {
        const D = R.value.length, W = R.value.filter(
          (ce) => N.value.has(ce.node_type)
        ).length;
        X.nodes = { resolved: W, total: D };
      }
      if (I.value || E.value) {
        const D = ve.value.length, W = ve.value.filter(
          (ce) => T.value.has(ce.filename) || ce.is_download_intent
        ).length;
        X.models = { resolved: W, total: D };
      }
      if (X.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const D = d.totalFiles || 1, W = d.completedFiles.length;
        X.applying = { resolved: W, total: D };
      }
      return X;
    });
    function Se(X) {
      $.value = X;
    }
    function Ve() {
      const X = q.value.findIndex((D) => D.id === $.value);
      X > 0 && ($.value = q.value[X - 1].id);
    }
    function ye() {
      const X = q.value.findIndex((D) => D.id === $.value);
      X < q.value.length - 1 && ($.value = q.value[X + 1].id);
    }
    async function le() {
      p.value = !0, x.value = null;
      try {
        w.value = await l(o.workflowName);
      } catch (X) {
        x.value = X instanceof Error ? X.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function Fe() {
      P.value.includes("analysis") || P.value.push("analysis"), A.value || O.value ? $.value = "nodes" : I.value || E.value ? $.value = "models" : $.value = "review";
    }
    function Ie(X) {
      N.value.set(X, { action: "optional" });
    }
    function L(X) {
      N.value.set(X, { action: "skip" });
    }
    function V(X, D) {
      var ce;
      const W = R.value.find((Te) => Te.node_type === X);
      (ce = W == null ? void 0 : W.options) != null && ce[D] && N.value.set(X, {
        action: "install",
        package_id: W.options[D].package_id
      });
    }
    function oe(X, D) {
      N.value.set(X, {
        action: "install",
        package_id: D
      });
    }
    function ae(X) {
      N.value.delete(X);
    }
    function de(X) {
      S.value.has(X) ? S.value.delete(X) : S.value.add(X);
    }
    function fe(X) {
      T.value.set(X, { action: "optional" });
    }
    function ke(X) {
      T.value.set(X, { action: "skip" });
    }
    function $e(X, D) {
      var ce;
      const W = be.value.find((Te) => Te.filename === X);
      (ce = W == null ? void 0 : W.options) != null && ce[D] && T.value.set(X, {
        action: "select",
        selected_model: W.options[D].model
      });
    }
    function ne(X, D, W) {
      T.value.set(X, {
        action: "download",
        url: D,
        target_path: W
      });
    }
    function ue(X) {
      T.value.delete(X);
    }
    async function Re(X) {
      try {
        await h(X);
      } catch (D) {
        x.value = D instanceof Error ? D.message : "Failed to open file location";
      }
    }
    async function Ce() {
      var X;
      _.value = !0, x.value = null, m(), d.phase = "resolving", $.value = "applying";
      try {
        const D = await i(o.workflowName, N.value, T.value, S.value);
        D.models_to_download && D.models_to_download.length > 0 && u(o.workflowName, D.models_to_download);
        const W = [
          ...D.nodes_to_install || [],
          ...U.value.map((Te) => Te.package.package_id)
        ];
        d.nodesToInstall = [...new Set(W)], d.nodesToInstall.length > 0 && await r(o.workflowName), d.phase = "complete", await v();
        const ce = d.installError || ((X = d.nodeInstallProgress) == null ? void 0 : X.completedNodes.some((Te) => !Te.success));
        !d.needsRestart && !ce && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (D) {
        x.value = D instanceof Error ? D.message : "Failed to apply resolution", d.error = x.value, d.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function ee() {
      n("refresh"), n("restart"), n("close");
    }
    async function K() {
      var D;
      const X = ((D = d.nodeInstallProgress) == null ? void 0 : D.completedNodes.filter((W) => !W.success).map((W) => W.node_id)) || [];
      if (X.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: X.length
        }, d.nodesToInstall = X, d.nodesInstalled = [], d.installError = void 0;
        try {
          await r(o.workflowName), d.phase = "complete";
        } catch (W) {
          d.error = W instanceof Error ? W.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return Qe(le), (X, D) => (a(), M(vt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: x.value || void 0,
      "fixed-height": !0,
      onClose: D[1] || (D[1] = (W) => n("close"))
    }, {
      body: g(() => [
        p.value && !w.value ? (a(), c("div", gy, [...D[2] || (D[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (a(), c("div", hy, [
          C(Cp, {
            steps: q.value,
            "current-step": $.value,
            "completed-steps": P.value,
            "step-stats": _e.value,
            onStepChange: Se
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (a(), c("div", yy, [
            t("div", wy, [
              t("div", by, [
                D[3] || (D[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", _y, " Found " + f(w.value.stats.total_nodes) + " nodes and " + f(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", ky, [
                t("div", $y, [
                  D[12] || (D[12] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", Cy, [
                    re.value > 0 ? (a(), c("div", xy, [
                      D[4] || (D[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Sy, f(re.value), 1),
                      D[5] || (D[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (a(), c("div", Iy, [
                      D[6] || (D[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Ey, f(w.value.stats.packages_needing_installation), 1),
                      D[7] || (D[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (a(), c("div", Ty, [
                      D[8] || (D[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", Py, f(w.value.nodes.ambiguous.length), 1),
                      D[9] || (D[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (a(), c("div", Ry, [
                      D[10] || (D[10] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", My, f(w.value.nodes.unresolved.length), 1),
                      D[11] || (D[11] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", Dy, [
                  D[23] || (D[23] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", Ly, [
                    t("div", Oy, [
                      D[13] || (D[13] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Ny, f(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      D[14] || (D[14] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (a(), c("div", Ay, [
                      D[15] || (D[15] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Uy, f(w.value.stats.download_intents), 1),
                      D[16] || (D[16] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    H.value ? (a(), c("div", zy, [
                      D[17] || (D[17] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", Fy, f(Y.value.length), 1),
                      D[18] || (D[18] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (a(), c("div", By, [
                      D[19] || (D[19] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", Vy, f(w.value.models.ambiguous.length), 1),
                      D[20] || (D[20] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (a(), c("div", Wy, [
                      D[21] || (D[21] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", Gy, f(w.value.models.unresolved.length), 1),
                      D[22] || (D[22] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              B.value ? (a(), c("div", jy, [
                D[24] || (D[24] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", Hy, f(R.value.length + be.value.length) + " items need your input", 1)
              ])) : O.value ? (a(), c("div", Ky, [
                D[25] || (D[25] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", qy, f(w.value.stats.packages_needing_installation) + " package" + f(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(w.value.stats.nodes_needing_installation) + " node type" + f(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(E.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : E.value ? (a(), c("div", Yy, [
                D[26] || (D[26] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", Jy, f(w.value.stats.download_intents) + " model" + f(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : H.value ? (a(), c("div", Xy, [
                D[27] || (D[27] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", Qy, f(Y.value.length) + " model" + f(Y.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), c("div", Zy, [...D[28] || (D[28] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              H.value ? (a(), c("div", e1, [
                D[31] || (D[31] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", t1, [
                  (a(!0), c(j, null, ge(Y.value, (W) => {
                    var ce, Te;
                    return a(), c("div", {
                      key: W.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", s1, f(W.actual_category) + "/" + f((ce = W.model) == null ? void 0 : ce.filename), 1),
                      D[30] || (D[30] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", o1, f((Te = W.expected_categories) == null ? void 0 : Te[0]) + "/", 1),
                      W.file_path ? (a(), M(Me, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Ke) => Re(W.file_path)
                      }, {
                        default: g(() => [...D[29] || (D[29] = [
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
          $.value === "nodes" ? (a(), M(jg, {
            key: 1,
            nodes: R.value,
            "node-choices": N.value,
            "auto-resolved-packages": Z.value,
            "skipped-packages": S.value,
            onMarkOptional: Ie,
            onSkip: L,
            onOptionSelected: V,
            onManualEntry: oe,
            onClearChoice: ae,
            onPackageSkip: de
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          $.value === "models" ? (a(), M(Uh, {
            key: 2,
            models: ve.value,
            "model-choices": T.value,
            onMarkOptional: fe,
            onSkip: ke,
            onOptionSelected: $e,
            onDownloadUrl: ne,
            onClearChoice: ue
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          $.value === "review" ? (a(), c("div", n1, [
            t("div", a1, [
              D[36] || (D[36] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", l1, [
                t("div", i1, [
                  t("span", r1, f(Ee.value), 1),
                  D[32] || (D[32] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", c1, [
                  t("span", u1, f(De.value), 1),
                  D[33] || (D[33] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", d1, [
                  t("span", f1, f(je.value), 1),
                  D[34] || (D[34] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", m1, [
                  t("span", v1, f(Je.value), 1),
                  D[35] || (D[35] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              Z.value.length > 0 ? (a(), c("div", p1, [
                t("h4", g1, "Node Packages (" + f(Z.value.length) + ")", 1),
                t("div", h1, [
                  (a(!0), c(j, null, ge(Z.value, (W) => (a(), c("div", {
                    key: W.package_id,
                    class: "review-item"
                  }, [
                    t("code", y1, f(W.package_id), 1),
                    t("div", w1, [
                      S.value.has(W.package_id) ? (a(), c("span", _1, "Skipped")) : (a(), c("span", b1, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              R.value.length > 0 ? (a(), c("div", k1, [
                t("h4", $1, "Node Choices (" + f(R.value.length) + ")", 1),
                t("div", C1, [
                  (a(!0), c(j, null, ge(R.value, (W) => {
                    var ce, Te, Ke, rt;
                    return a(), c("div", {
                      key: W.node_type,
                      class: "review-item"
                    }, [
                      t("code", x1, f(W.node_type), 1),
                      t("div", S1, [
                        N.value.has(W.node_type) ? (a(), c(j, { key: 0 }, [
                          ((ce = N.value.get(W.node_type)) == null ? void 0 : ce.action) === "install" ? (a(), c("span", I1, f((Te = N.value.get(W.node_type)) == null ? void 0 : Te.package_id), 1)) : ((Ke = N.value.get(W.node_type)) == null ? void 0 : Ke.action) === "optional" ? (a(), c("span", E1, " Optional ")) : ((rt = N.value.get(W.node_type)) == null ? void 0 : rt.action) === "skip" ? (a(), c("span", T1, " Skip ")) : y("", !0)
                        ], 64)) : (a(), c("span", P1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ve.value.length > 0 ? (a(), c("div", R1, [
                t("h4", M1, "Models (" + f(ve.value.length) + ")", 1),
                t("div", D1, [
                  (a(!0), c(j, null, ge(ve.value, (W) => {
                    var ce, Te, Ke, rt, wt, bt, ct;
                    return a(), c("div", {
                      key: W.filename,
                      class: "review-item"
                    }, [
                      t("code", L1, f(W.filename), 1),
                      t("div", O1, [
                        T.value.has(W.filename) ? (a(), c(j, { key: 0 }, [
                          ((ce = T.value.get(W.filename)) == null ? void 0 : ce.action) === "select" ? (a(), c("span", N1, f((Ke = (Te = T.value.get(W.filename)) == null ? void 0 : Te.selected_model) == null ? void 0 : Ke.filename), 1)) : ((rt = T.value.get(W.filename)) == null ? void 0 : rt.action) === "download" ? (a(), c("span", A1, " Download ")) : ((wt = T.value.get(W.filename)) == null ? void 0 : wt.action) === "optional" ? (a(), c("span", U1, " Optional ")) : ((bt = T.value.get(W.filename)) == null ? void 0 : bt.action) === "skip" ? (a(), c("span", z1, " Skip ")) : ((ct = T.value.get(W.filename)) == null ? void 0 : ct.action) === "cancel_download" ? (a(), c("span", F1, " Cancel Download ")) : y("", !0)
                        ], 64)) : W.is_download_intent ? (a(), c("span", B1, " Pending Download ")) : (a(), c("span", V1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              te.value.length === 0 && R.value.length === 0 && ve.value.length === 0 ? (a(), c("div", W1, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          $.value === "applying" ? (a(), M(py, {
            key: 4,
            progress: Ue(d),
            onRestart: ee,
            onRetryFailed: K
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: g(() => [
        $.value !== "analysis" && $.value !== "applying" ? (a(), M(Me, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: Ve
        }, {
          default: g(() => [...D[37] || (D[37] = [
            b(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        D[41] || (D[41] = t("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || Ue(d).phase === "complete" || Ue(d).phase === "error" ? (a(), M(Me, {
          key: 1,
          variant: "secondary",
          onClick: D[0] || (D[0] = (W) => n("close"))
        }, {
          default: g(() => [
            b(f(Ue(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "analysis" ? (a(), M(Me, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: Fe
        }, {
          default: g(() => [...D[38] || (D[38] = [
            b(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        $.value === "nodes" ? (a(), M(Me, {
          key: 3,
          variant: "primary",
          onClick: ye
        }, {
          default: g(() => [
            b(f(I.value || E.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "models" ? (a(), M(Me, {
          key: 4,
          variant: "primary",
          onClick: ye
        }, {
          default: g(() => [...D[39] || (D[39] = [
            b(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        $.value === "review" ? (a(), M(Me, {
          key: 5,
          variant: "primary",
          disabled: _.value,
          loading: _.value,
          onClick: Ce
        }, {
          default: g(() => [...D[40] || (D[40] = [
            b(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), j1 = /* @__PURE__ */ pe(G1, [["__scopeId", "data-v-6276cf1d"]]), H1 = { class: "search-input-wrapper" }, K1 = ["value", "placeholder"], q1 = /* @__PURE__ */ me({
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
    return Qe(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, m) => (a(), c("div", H1, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: r,
        onKeyup: Xt(u, ["escape"])
      }, null, 40, K1),
      e.clearable && e.modelValue ? (a(), c("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), Y1 = /* @__PURE__ */ pe(q1, [["__scopeId", "data-v-266f857a"]]), J1 = { class: "search-bar" }, X1 = /* @__PURE__ */ me({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (a(), c("div", J1, [
      C(Y1, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => s.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), yo = /* @__PURE__ */ pe(X1, [["__scopeId", "data-v-3d51bbfd"]]), Q1 = { class: "section-group" }, Z1 = {
  key: 0,
  class: "section-content"
}, e0 = /* @__PURE__ */ me({
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
    return (r, u) => (a(), c("section", Q1, [
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
      !e.collapsible || l.value ? (a(), c("div", Z1, [
        Ge(r.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), ot = /* @__PURE__ */ pe(e0, [["__scopeId", "data-v-c48e33ed"]]), t0 = { class: "item-header" }, s0 = {
  key: 0,
  class: "item-icon"
}, o0 = { class: "item-info" }, n0 = {
  key: 0,
  class: "item-title"
}, a0 = {
  key: 1,
  class: "item-subtitle"
}, l0 = {
  key: 0,
  class: "item-details"
}, i0 = {
  key: 1,
  class: "item-actions"
}, r0 = /* @__PURE__ */ me({
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
      class: xe(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: i[0] || (i[0] = (r) => e.clickable && l.$emit("click"))
    }, [
      t("div", t0, [
        l.$slots.icon ? (a(), c("span", s0, [
          Ge(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", o0, [
          l.$slots.title ? (a(), c("div", n0, [
            Ge(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), c("div", a0, [
            Ge(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), c("div", l0, [
        Ge(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), c("div", i0, [
        Ge(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Tt = /* @__PURE__ */ pe(r0, [["__scopeId", "data-v-cc435e0e"]]), c0 = { class: "loading-state" }, u0 = { class: "loading-message" }, d0 = /* @__PURE__ */ me({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (a(), c("div", c0, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", u0, f(e.message), 1)
    ]));
  }
}), Ss = /* @__PURE__ */ pe(d0, [["__scopeId", "data-v-ad8436c9"]]), f0 = { class: "error-state" }, m0 = { class: "error-message" }, v0 = /* @__PURE__ */ me({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (a(), c("div", f0, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", m0, f(e.message), 1),
      e.retry ? (a(), M(ie, {
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
}), Is = /* @__PURE__ */ pe(v0, [["__scopeId", "data-v-5397be48"]]), p0 = /* @__PURE__ */ me({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getWorkflows: l } = at(), i = k([]), r = k(!1), u = k(null), d = k(""), m = k(!0), v = k(!1), h = k(!1), w = k(!1), p = k(null), _ = F(
      () => i.value.filter((U) => U.status === "broken")
    ), x = F(
      () => i.value.filter((U) => U.status === "new")
    ), $ = F(
      () => i.value.filter((U) => U.status === "modified")
    ), P = F(
      () => i.value.filter((U) => U.status === "synced")
    ), N = F(() => {
      if (!d.value.trim()) return i.value;
      const U = d.value.toLowerCase();
      return i.value.filter((z) => z.name.toLowerCase().includes(U));
    }), T = F(
      () => _.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), S = F(
      () => x.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), q = F(
      () => $.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), B = F(
      () => P.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), A = F(
      () => v.value ? B.value : B.value.slice(0, 5)
    );
    async function I(U = !1) {
      r.value = !0, u.value = null;
      try {
        i.value = await l(U);
      } catch (z) {
        u.value = z instanceof Error ? z.message : "Failed to load workflows";
      } finally {
        r.value = !1;
      }
    }
    s({ loadWorkflows: I });
    function E(U) {
      p.value = U, h.value = !0;
    }
    function O(U) {
      p.value = U, w.value = !0;
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
    function te(U) {
      const z = [];
      return U.missing_nodes > 0 && z.push(`${U.missing_nodes} missing node${U.missing_nodes > 1 ? "s" : ""}`), U.missing_models > 0 && z.push(`${U.missing_models} missing model${U.missing_models > 1 ? "s" : ""}`), U.models_with_category_mismatch && U.models_with_category_mismatch > 0 && z.push(`${U.models_with_category_mismatch} model${U.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), U.pending_downloads && U.pending_downloads > 0 && z.push(`${U.pending_downloads} pending download${U.pending_downloads > 1 ? "s" : ""}`), z.length > 0 ? z.join(", ") : "Has issues";
    }
    function Z(U) {
      const z = U.sync_state === "new" ? "New" : U.sync_state === "modified" ? "Modified" : U.sync_state === "synced" ? "Synced" : U.sync_state;
      return U.has_path_sync_issues && U.models_needing_path_sync && U.models_needing_path_sync > 0 ? `${U.models_needing_path_sync} model path${U.models_needing_path_sync > 1 ? "s" : ""} need${U.models_needing_path_sync === 1 ? "s" : ""} sync` : z || "Unknown";
    }
    return Qe(I), (U, z) => (a(), c(j, null, [
      C(Pt, null, {
        header: g(() => [
          C(Rt, { title: "WORKFLOWS" })
        ]),
        search: g(() => [
          C(yo, {
            modelValue: d.value,
            "onUpdate:modelValue": z[0] || (z[0] = (R) => d.value = R),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          r.value ? (a(), M(Ss, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (a(), M(Is, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            T.value.length ? (a(), M(ot, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge(T.value, (R) => (a(), M(Tt, {
                  key: R.name,
                  status: "broken"
                }, {
                  icon: g(() => [...z[7] || (z[7] = [
                    b("⚠", -1)
                  ])]),
                  title: g(() => [
                    b(f(R.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(f(te(R)), 1)
                  ]),
                  actions: g(() => [
                    C(ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: (be) => O(R.name)
                    }, {
                      default: g(() => [...z[8] || (z[8] = [
                        b(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (be) => E(R.name)
                    }, {
                      default: g(() => [...z[9] || (z[9] = [
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
            S.value.length ? (a(), M(ot, {
              key: 1,
              title: "NEW",
              count: S.value.length
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge(S.value, (R) => (a(), M(Tt, {
                  key: R.name,
                  status: R.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: g(() => [
                    b(f(R.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: g(() => [
                    b(f(R.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(f(Z(R)), 1)
                  ]),
                  actions: g(() => [
                    C(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (be) => E(R.name)
                    }, {
                      default: g(() => [...z[10] || (z[10] = [
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
            q.value.length ? (a(), M(ot, {
              key: 2,
              title: "MODIFIED",
              count: q.value.length
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge(q.value, (R) => (a(), M(Tt, {
                  key: R.name,
                  status: R.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: g(() => [...z[11] || (z[11] = [
                    b("⚡", -1)
                  ])]),
                  title: g(() => [
                    b(f(R.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(f(Z(R)), 1)
                  ]),
                  actions: g(() => [
                    C(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (be) => E(R.name)
                    }, {
                      default: g(() => [...z[12] || (z[12] = [
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
            B.value.length ? (a(), M(ot, {
              key: 3,
              title: "SYNCED",
              count: B.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: z[2] || (z[2] = (R) => m.value = R)
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge(A.value, (R) => (a(), M(Tt, {
                  key: R.name,
                  status: R.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: g(() => [
                    b(f(R.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: g(() => [
                    b(f(R.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(f(Z(R)), 1)
                  ]),
                  actions: g(() => [
                    C(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (be) => E(R.name)
                    }, {
                      default: g(() => [...z[13] || (z[13] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && B.value.length > 5 ? (a(), M(ie, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: z[1] || (z[1] = (R) => v.value = !0),
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
            N.value.length ? y("", !0) : (a(), M(ts, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      h.value && p.value ? (a(), M(fp, {
        key: 0,
        "workflow-name": p.value,
        onClose: z[3] || (z[3] = (R) => h.value = !1),
        onResolve: z[4] || (z[4] = (R) => O(p.value)),
        onRefresh: z[5] || (z[5] = (R) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (a(), M(j1, {
        key: 1,
        "workflow-name": p.value,
        onClose: Y,
        onInstall: re,
        onRefresh: z[6] || (z[6] = (R) => n("refresh")),
        onRestart: H
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), g0 = /* @__PURE__ */ pe(p0, [["__scopeId", "data-v-fa3f076e"]]), h0 = /* @__PURE__ */ me({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (a(), c("div", {
      class: xe(["summary-bar", e.variant])
    }, [
      Ge(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Zo = /* @__PURE__ */ pe(h0, [["__scopeId", "data-v-ccb7816e"]]), y0 = {
  key: 0,
  class: "model-details"
}, w0 = { class: "detail-section" }, b0 = { class: "detail-row" }, _0 = { class: "detail-value mono" }, k0 = { class: "detail-row" }, $0 = { class: "detail-value mono" }, C0 = { class: "detail-row" }, x0 = { class: "detail-value mono" }, S0 = { class: "detail-row" }, I0 = { class: "detail-value" }, E0 = { class: "detail-row" }, T0 = { class: "detail-value" }, P0 = { class: "detail-row" }, R0 = { class: "detail-value" }, M0 = { class: "detail-section" }, D0 = { class: "section-header" }, L0 = {
  key: 0,
  class: "locations-list"
}, O0 = { class: "location-path mono" }, N0 = {
  key: 0,
  class: "location-modified"
}, A0 = ["onClick"], U0 = {
  key: 1,
  class: "empty-state"
}, z0 = { class: "detail-section" }, F0 = { class: "section-header" }, B0 = {
  key: 0,
  class: "sources-list"
}, V0 = { class: "source-type" }, W0 = ["href"], G0 = ["disabled", "onClick"], j0 = {
  key: 1,
  class: "empty-state"
}, H0 = { class: "add-source-form" }, K0 = ["disabled"], q0 = {
  key: 2,
  class: "source-error"
}, Y0 = {
  key: 3,
  class: "source-success"
}, J0 = /* @__PURE__ */ me({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: i, openFileLocation: r } = at(), u = k(null), d = k(!0), m = k(null), v = k(""), h = k(!1), w = k(null), p = k(null), _ = k(null), x = k(null);
    let $ = null;
    function P(I, E = "success", O = 2e3) {
      $ && clearTimeout($), x.value = { message: I, type: E }, $ = setTimeout(() => {
        x.value = null;
      }, O);
    }
    function N(I) {
      if (!I) return "Unknown";
      const E = 1024 * 1024 * 1024, O = 1024 * 1024;
      return I >= E ? `${(I / E).toFixed(1)} GB` : I >= O ? `${(I / O).toFixed(0)} MB` : `${(I / 1024).toFixed(0)} KB`;
    }
    function T(I) {
      navigator.clipboard.writeText(I), P("Copied to clipboard!");
    }
    async function S(I) {
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
    return Qe(A), (I, E) => {
      var O;
      return a(), c(j, null, [
        C(vt, {
          title: `Model Details: ${((O = u.value) == null ? void 0 : O.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          onClose: E[5] || (E[5] = (re) => I.$emit("close"))
        }, {
          body: g(() => {
            var re, Y, H, te;
            return [
              u.value ? (a(), c("div", y0, [
                t("section", w0, [
                  t("div", b0, [
                    E[6] || (E[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", _0, f(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (a(), c("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[0] || (E[0] = (Z) => T(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", k0, [
                    E[7] || (E[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", $0, f(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (a(), c("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[1] || (E[1] = (Z) => T(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", C0, [
                    E[8] || (E[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", x0, f(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (a(), c("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[2] || (E[2] = (Z) => T(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", S0, [
                    E[9] || (E[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", I0, f(N(u.value.size)), 1)
                  ]),
                  t("div", E0, [
                    E[10] || (E[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", T0, f(u.value.category), 1)
                  ]),
                  t("div", P0, [
                    E[11] || (E[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", R0, f(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", M0, [
                  t("h4", D0, "Locations (" + f(((re = u.value.locations) == null ? void 0 : re.length) || 0) + ")", 1),
                  (Y = u.value.locations) != null && Y.length ? (a(), c("div", L0, [
                    (a(!0), c(j, null, ge(u.value.locations, (Z, U) => (a(), c("div", {
                      key: U,
                      class: "location-item"
                    }, [
                      t("span", O0, f(Z.path), 1),
                      Z.modified ? (a(), c("span", N0, "Modified: " + f(Z.modified), 1)) : y("", !0),
                      Z.path ? (a(), c("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (z) => S(Z.path)
                      }, " Open File Location ", 8, A0)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), c("div", U0, "No locations found"))
                ]),
                t("section", z0, [
                  t("h4", F0, "Download Sources (" + f(((H = u.value.sources) == null ? void 0 : H.length) || 0) + ")", 1),
                  (te = u.value.sources) != null && te.length ? (a(), c("div", B0, [
                    (a(!0), c(j, null, ge(u.value.sources, (Z, U) => (a(), c("div", {
                      key: U,
                      class: "source-item"
                    }, [
                      t("span", V0, f(Z.type) + ":", 1),
                      t("a", {
                        href: Z.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(Z.url), 9, W0),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === Z.url,
                        onClick: (z) => B(Z.url)
                      }, f(w.value === Z.url ? "..." : "×"), 9, G0)
                    ]))), 128))
                  ])) : (a(), c("div", j0, " No download sources configured ")),
                  t("div", H0, [
                    He(t("input", {
                      "onUpdate:modelValue": E[3] || (E[3] = (Z) => v.value = Z),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [At, v.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || h.value,
                      onClick: q
                    }, f(h.value ? "Adding..." : "Add Source"), 9, K0)
                  ]),
                  p.value ? (a(), c("p", q0, f(p.value), 1)) : y("", !0),
                  _.value ? (a(), c("p", Y0, f(_.value), 1)) : y("", !0)
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
        (a(), M(yt, { to: "body" }, [
          x.value ? (a(), c("div", {
            key: 0,
            class: xe(["toast", x.value.type])
          }, f(x.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), Ka = /* @__PURE__ */ pe(J0, [["__scopeId", "data-v-f15cbb56"]]), X0 = /* @__PURE__ */ me({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: n, getStatus: l } = at(), i = k([]), r = k([]), u = k("production"), d = k(!1), m = k(null), v = k(""), h = k(!1), w = k(null);
    function p() {
      h.value = !1, o("navigate", "model-index");
    }
    const _ = F(
      () => i.value.reduce((A, I) => A + (I.size || 0), 0)
    ), x = F(() => {
      if (!v.value.trim()) return i.value;
      const A = v.value.toLowerCase();
      return i.value.filter((I) => I.filename.toLowerCase().includes(A));
    }), $ = F(() => {
      if (!v.value.trim()) return r.value;
      const A = v.value.toLowerCase();
      return r.value.filter((I) => I.filename.toLowerCase().includes(A));
    }), P = F(() => {
      const A = {};
      for (const E of x.value) {
        const O = E.type || "other";
        A[O] || (A[O] = []), A[O].push(E);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(A).sort(([E], [O]) => {
        const re = I.indexOf(E), Y = I.indexOf(O);
        return re >= 0 && Y >= 0 ? re - Y : re >= 0 ? -1 : Y >= 0 ? 1 : E.localeCompare(O);
      }).map(([E, O]) => ({ type: E, models: O }));
    });
    function N(A) {
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
        i.value = A, r.value = [];
        const I = await l();
        u.value = I.environment || "production";
      } catch (A) {
        m.value = A instanceof Error ? A.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return Qe(B), (A, I) => (a(), c(j, null, [
      C(Pt, null, {
        header: g(() => [
          C(Rt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (E) => h.value = !0)
          })
        ]),
        search: g(() => [
          C(yo, {
            modelValue: v.value,
            "onUpdate:modelValue": I[1] || (I[1] = (E) => v.value = E),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value ? (a(), M(Ss, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (a(), M(Is, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            i.value.length ? (a(), M(Zo, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + f(i.value.length) + " models • " + f(N(_.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), c(j, null, ge(P.value, (E) => (a(), M(ot, {
              key: E.type,
              title: E.type.toUpperCase(),
              count: E.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge(E.models, (O) => (a(), M(Tt, {
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
                    b(f(N(O.size)), 1)
                  ]),
                  details: g(() => [
                    C(ut, {
                      label: "Used by:",
                      value: (O.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    C(ut, {
                      label: "Path:",
                      value: O.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(ie, {
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
            $.value.length ? (a(), M(ot, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge($.value, (E) => (a(), M(Tt, {
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
                      C(ut, {
                        label: "Required by:",
                        value: ((O = E.workflow_names) == null ? void 0 : O.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: g(() => [
                    C(ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => q(E.filename)
                    }, {
                      default: g(() => [...I[8] || (I[8] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ie, {
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
            !x.value.length && !$.value.length ? (a(), M(ts, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      C(ss, {
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
          C(ie, {
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
      w.value ? (a(), M(Ka, {
        key: 0,
        identifier: w.value,
        onClose: I[3] || (I[3] = (E) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Q0 = /* @__PURE__ */ pe(X0, [["__scopeId", "data-v-cb4f12b3"]]), Z0 = {
  key: 0,
  class: "indexing-progress"
}, ew = { class: "progress-info" }, tw = { class: "progress-label" }, sw = { class: "progress-count" }, ow = { class: "progress-bar" }, nw = { class: "modal-content" }, aw = { class: "modal-header" }, lw = { class: "modal-body" }, iw = { class: "input-group" }, rw = { class: "current-path" }, cw = { class: "input-group" }, uw = { class: "modal-footer" }, dw = { class: "modal-content" }, fw = { class: "modal-header" }, mw = { class: "modal-body" }, vw = { class: "input-group" }, pw = { class: "input-group" }, gw = { class: "modal-footer" }, hw = /* @__PURE__ */ me({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: i
    } = at(), { addToQueue: r } = Qo(), u = s, d = k([]), m = k(!1), v = k(!1), h = k(null), w = k(""), p = k(!1), _ = k(null), x = k(!1), $ = k(null), P = k(""), N = k(!1), T = k(!1), S = k(""), q = k(""), B = k(null), A = F(
      () => d.value.reduce((z, R) => z + (R.size || 0), 0)
    ), I = F(() => {
      if (!w.value.trim()) return d.value;
      const z = w.value.toLowerCase();
      return d.value.filter((R) => {
        const be = R, ve = R.sha256 || be.sha256_hash || "";
        return R.filename.toLowerCase().includes(z) || ve.toLowerCase().includes(z);
      });
    }), E = F(() => {
      const z = {};
      for (const be of I.value) {
        const ve = be.type || "other";
        z[ve] || (z[ve] = []), z[ve].push(be);
      }
      const R = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(z).sort(([be], [ve]) => {
        const Ee = R.indexOf(be), De = R.indexOf(ve);
        return Ee >= 0 && De >= 0 ? Ee - De : Ee >= 0 ? -1 : De >= 0 ? 1 : be.localeCompare(ve);
      }).map(([be, ve]) => ({ type: be, models: ve }));
    });
    function O(z) {
      if (!z) return "Unknown";
      const R = 1024 * 1024 * 1024, be = 1024 * 1024;
      return z >= R ? `${(z / R).toFixed(1)} GB` : z >= be ? `${(z / be).toFixed(0)} MB` : `${(z / 1024).toFixed(0)} KB`;
    }
    function re(z) {
      _.value = z.hash || z.filename;
    }
    async function Y() {
      v.value = !0, h.value = null;
      try {
        const z = await n();
        await Z(), z.changes > 0 && console.log(`Scan complete: ${z.changes} changes detected`);
      } catch (z) {
        h.value = z instanceof Error ? z.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function H() {
      if (P.value.trim()) {
        N.value = !0, h.value = null;
        try {
          const z = await i(P.value.trim());
          $.value = z.path, x.value = !1, P.value = "", await Z(), console.log(`Directory changed: ${z.models_indexed} models indexed`), u("refresh");
        } catch (z) {
          h.value = z instanceof Error ? z.message : "Failed to change directory";
        } finally {
          N.value = !1;
        }
      }
    }
    function te() {
      if (!S.value.trim() || !q.value.trim()) return;
      const z = q.value.split("/").pop() || "model.safetensors";
      r([{
        workflow: "__manual__",
        filename: z,
        url: S.value.trim(),
        targetPath: q.value.trim()
      }]), S.value = "", q.value = "", T.value = !1;
    }
    async function Z() {
      m.value = !0, h.value = null;
      try {
        d.value = await o();
      } catch (z) {
        h.value = z instanceof Error ? z.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function U() {
      try {
        const z = await l();
        $.value = z.path;
      } catch {
      }
    }
    return Qe(() => {
      Z(), U();
    }), (z, R) => (a(), c(j, null, [
      C(Pt, null, {
        header: g(() => [
          C(Rt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: R[2] || (R[2] = (be) => p.value = !0)
          }, {
            actions: g(() => [
              C(ie, {
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
              C(ie, {
                variant: "primary",
                size: "sm",
                onClick: R[0] || (R[0] = (be) => x.value = !0)
              }, {
                default: g(() => [...R[15] || (R[15] = [
                  b(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              C(ie, {
                variant: "primary",
                size: "sm",
                onClick: R[1] || (R[1] = (be) => T.value = !0)
              }, {
                default: g(() => [...R[16] || (R[16] = [
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
          B.value ? (a(), c("div", Z0, [
            t("div", ew, [
              t("span", tw, f(B.value.message), 1),
              t("span", sw, f(B.value.current) + "/" + f(B.value.total), 1)
            ]),
            t("div", ow, [
              t("div", {
                class: "progress-fill",
                style: Wt({ width: `${B.value.current / B.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          C(yo, {
            modelValue: w.value,
            "onUpdate:modelValue": R[3] || (R[3] = (be) => w.value = be),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          m.value || B.value ? (a(), M(Ss, {
            key: 0,
            message: B.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : h.value ? (a(), M(Is, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: Z
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            d.value.length ? (a(), M(Zo, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + f(d.value.length) + " models • " + f(O(A.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), c(j, null, ge(E.value, (be) => (a(), M(ot, {
              key: be.type,
              title: be.type.toUpperCase(),
              count: be.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge(be.models, (ve) => (a(), M(Tt, {
                  key: ve.sha256 || ve.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...R[17] || (R[17] = [
                    b("📦", -1)
                  ])]),
                  title: g(() => [
                    b(f(ve.filename), 1)
                  ]),
                  subtitle: g(() => [
                    b(f(O(ve.size)), 1)
                  ]),
                  details: g(() => [
                    C(ut, {
                      label: "Hash:",
                      value: ve.hash ? ve.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ee) => re(ve)
                    }, {
                      default: g(() => [...R[18] || (R[18] = [
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
            I.value.length ? y("", !0) : (a(), M(ts, {
              key: 1,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      C(ss, {
        show: p.value,
        title: "About Workspace Model Index",
        onClose: R[4] || (R[4] = (be) => p.value = !1)
      }, {
        content: g(() => [...R[19] || (R[19] = [
          t("p", null, [
            b(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            b(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      _.value ? (a(), M(Ka, {
        key: 0,
        identifier: _.value,
        onClose: R[5] || (R[5] = (be) => _.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (a(), M(yt, { to: "body" }, [
        x.value ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: R[9] || (R[9] = nt((be) => x.value = !1, ["self"]))
        }, [
          t("div", nw, [
            t("div", aw, [
              R[20] || (R[20] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: R[6] || (R[6] = (be) => x.value = !1)
              }, "✕")
            ]),
            t("div", lw, [
              t("div", iw, [
                R[21] || (R[21] = t("label", null, "Current Directory", -1)),
                t("code", rw, f($.value || "Not set"), 1)
              ]),
              t("div", cw, [
                R[22] || (R[22] = t("label", null, "New Directory Path", -1)),
                C(Qt, {
                  modelValue: P.value,
                  "onUpdate:modelValue": R[7] || (R[7] = (be) => P.value = be),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              R[23] || (R[23] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", uw, [
              C(Me, {
                variant: "secondary",
                onClick: R[8] || (R[8] = (be) => x.value = !1)
              }, {
                default: g(() => [...R[24] || (R[24] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(Me, {
                variant: "primary",
                disabled: !P.value.trim() || N.value,
                loading: N.value,
                onClick: H
              }, {
                default: g(() => [
                  b(f(N.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      (a(), M(yt, { to: "body" }, [
        T.value ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: R[14] || (R[14] = nt((be) => T.value = !1, ["self"]))
        }, [
          t("div", dw, [
            t("div", fw, [
              R[25] || (R[25] = t("h3", null, "Download New Model", -1)),
              t("button", {
                class: "modal-close",
                onClick: R[10] || (R[10] = (be) => T.value = !1)
              }, "✕")
            ]),
            t("div", mw, [
              t("div", vw, [
                R[26] || (R[26] = t("label", null, "Download URL", -1)),
                C(Qt, {
                  modelValue: S.value,
                  "onUpdate:modelValue": R[11] || (R[11] = (be) => S.value = be),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              t("div", pw, [
                R[27] || (R[27] = t("label", null, "Target Path (relative to models directory)", -1)),
                C(Qt, {
                  modelValue: q.value,
                  "onUpdate:modelValue": R[12] || (R[12] = (be) => q.value = be),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              R[28] || (R[28] = t("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            t("div", gw, [
              C(Me, {
                variant: "secondary",
                onClick: R[13] || (R[13] = (be) => T.value = !1)
              }, {
                default: g(() => [...R[29] || (R[29] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(Me, {
                variant: "primary",
                disabled: !S.value.trim() || !q.value.trim(),
                onClick: te
              }, {
                default: g(() => [...R[30] || (R[30] = [
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
}), yw = /* @__PURE__ */ pe(hw, [["__scopeId", "data-v-73b78d84"]]), ww = { class: "node-details" }, bw = { class: "status-row" }, _w = {
  key: 0,
  class: "detail-row"
}, kw = { class: "value" }, $w = { class: "detail-row" }, Cw = { class: "value" }, xw = {
  key: 1,
  class: "detail-row"
}, Sw = { class: "value mono" }, Iw = {
  key: 2,
  class: "detail-row"
}, Ew = ["href"], Tw = {
  key: 3,
  class: "detail-row"
}, Pw = { class: "value mono small" }, Rw = { class: "detail-row" }, Mw = {
  key: 0,
  class: "value"
}, Dw = {
  key: 1,
  class: "workflow-list"
}, Lw = /* @__PURE__ */ me({
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
    return (u, d) => (a(), M(vt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (m) => n("close"))
    }, {
      body: g(() => [
        t("div", ww, [
          t("div", bw, [
            d[2] || (d[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: xe(["status-badge", l.value])
            }, f(i.value), 3)
          ]),
          e.node.version ? (a(), c("div", _w, [
            d[3] || (d[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", kw, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          t("div", $w, [
            d[4] || (d[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", Cw, f(r.value), 1)
          ]),
          e.node.registry_id ? (a(), c("div", xw, [
            d[5] || (d[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", Sw, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), c("div", Iw, [
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
            ], 8, Ew)
          ])) : y("", !0),
          e.node.download_url ? (a(), c("div", Tw, [
            d[8] || (d[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", Pw, f(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", Rw, [
            d[9] || (d[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), c("span", Mw, " Not used in any workflows ")) : (a(), c("div", Dw, [
              (a(!0), c(j, null, ge(e.node.used_in_workflows, (m) => (a(), c("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: g(() => [
        C(Me, {
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
}), Ow = /* @__PURE__ */ pe(Lw, [["__scopeId", "data-v-b342f626"]]), Nw = { class: "dialog-message" }, Aw = {
  key: 0,
  class: "dialog-details"
}, Uw = {
  key: 1,
  class: "dialog-warning"
}, zw = /* @__PURE__ */ me({
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
    return (s, o) => (a(), M(vt, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => s.$emit("cancel"))
    }, {
      body: g(() => [
        t("p", Nw, f(e.message), 1),
        e.details && e.details.length ? (a(), c("div", Aw, [
          (a(!0), c(j, null, ge(e.details, (n, l) => (a(), c("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), c("p", Uw, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          b(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: g(() => [
        C(Me, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => s.$emit("cancel"))
        }, {
          default: g(() => [
            b(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), M(Me, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => s.$emit("secondary"))
        }, {
          default: g(() => [
            b(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        C(Me, {
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
}), qa = /* @__PURE__ */ pe(zw, [["__scopeId", "data-v-3670b9f5"]]), Fw = { class: "mismatch-warning" }, Bw = { class: "version-mismatch" }, Vw = { class: "version-actual" }, Ww = { class: "version-expected" }, Gw = { key: 0 }, jw = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Hw = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Kw = /* @__PURE__ */ me({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getNodes: l, trackNodeAsDev: i, installNode: r, uninstallNode: u } = at(), d = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), m = k(!1), v = k(null), h = k(""), w = k(!1), p = k(null), _ = k(null), x = F(() => {
      if (!h.value.trim()) return d.value.nodes;
      const Y = h.value.toLowerCase();
      return d.value.nodes.filter(
        (H) => {
          var te, Z;
          return H.name.toLowerCase().includes(Y) || ((te = H.description) == null ? void 0 : te.toLowerCase().includes(Y)) || ((Z = H.repository) == null ? void 0 : Z.toLowerCase().includes(Y));
        }
      );
    }), $ = F(
      () => x.value.filter((Y) => Y.installed && Y.tracked)
    ), P = F(
      () => x.value.filter((Y) => !Y.installed && Y.tracked)
    ), N = F(
      () => x.value.filter((Y) => Y.installed && !Y.tracked)
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
    return Qe(re), (Y, H) => (a(), c(j, null, [
      C(Pt, null, {
        header: g(() => [
          C(Rt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: H[0] || (H[0] = (te) => w.value = !0)
          }, {
            actions: g(() => [
              C(ie, {
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
          C(yo, {
            modelValue: h.value,
            "onUpdate:modelValue": H[1] || (H[1] = (te) => h.value = te),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          m.value ? (a(), M(Ss, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (a(), M(Is, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: re
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            d.value.total_count ? (a(), M(Zo, {
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
            S.value ? (a(), M(ot, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                t("div", Fw, [
                  H[8] || (H[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), c(j, null, ge(e.versionMismatches, (te) => (a(), M(Tt, {
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
                    t("span", Bw, [
                      t("span", Vw, f(te.actual), 1),
                      H[10] || (H[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", Ww, f(te.expected), 1)
                    ])
                  ]),
                  actions: g(() => [
                    C(ie, {
                      variant: "warning",
                      size: "sm",
                      onClick: H[2] || (H[2] = (Z) => n("repair-environment"))
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
            N.value.length ? (a(), M(ot, {
              key: 2,
              title: "UNTRACKED",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge(N.value, (te) => (a(), M(Tt, {
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
                    C(ut, {
                      label: "Used by:",
                      value: q(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Z) => B(te)
                    }, {
                      default: g(() => [...H[14] || (H[14] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Z) => I(te.name)
                    }, {
                      default: g(() => [...H[15] || (H[15] = [
                        b(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ie, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Z) => E(te.name)
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
            $.value.length ? (a(), M(ot, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge($.value, (te) => (a(), M(Tt, {
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
                    te.version ? (a(), c("span", Gw, f(te.source === "development" ? "" : "v") + f(te.version), 1)) : (a(), c("span", jw, "version unknown")),
                    t("span", Hw, " • " + f(T(te.source)), 1)
                  ]),
                  details: g(() => [
                    C(ut, {
                      label: "Used by:",
                      value: q(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Z) => B(te)
                    }, {
                      default: g(() => [...H[17] || (H[17] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ie, {
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
            P.value.length ? (a(), M(ot, {
              key: 4,
              title: "MISSING",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge(P.value, (te) => (a(), M(Tt, {
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
                    C(ut, {
                      label: "Required by:",
                      value: q(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Z) => B(te)
                    }, {
                      default: g(() => [...H[21] || (H[21] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Z) => O(te.name)
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
            !$.value.length && !P.value.length && !N.value.length ? (a(), M(ts, {
              key: 5,
              icon: "📭",
              message: h.value ? `No nodes match '${h.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      C(ss, {
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
          C(ie, {
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
      p.value ? (a(), M(Ow, {
        key: 0,
        node: p.value,
        onClose: H[5] || (H[5] = (te) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      _.value ? (a(), M(qa, {
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
}), qw = /* @__PURE__ */ pe(Kw, [["__scopeId", "data-v-1555a802"]]);
function yr(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const Yw = { class: "remote-url-display" }, Jw = ["title"], Xw = ["title"], Qw = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Zw = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, eb = /* @__PURE__ */ me({
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
    return (i, r) => (a(), c("div", Yw, [
      t("span", {
        class: "url-text",
        title: e.url
      }, f(n.value), 9, Jw),
      t("button", {
        class: xe(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), c("svg", Zw, [...r[1] || (r[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), c("svg", Qw, [...r[0] || (r[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Xw)
    ]));
  }
}), tb = /* @__PURE__ */ pe(eb, [["__scopeId", "data-v-7768a58d"]]), sb = { class: "remote-title" }, ob = {
  key: 0,
  class: "default-badge"
}, nb = {
  key: 1,
  class: "sync-badge"
}, ab = {
  key: 0,
  class: "ahead"
}, lb = {
  key: 1,
  class: "behind"
}, ib = {
  key: 1,
  class: "synced"
}, rb = ["href"], cb = {
  key: 1,
  class: "remote-url-text"
}, ub = /* @__PURE__ */ me({
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
    return (m, v) => (a(), M(Tt, {
      status: n.value ? "synced" : void 0
    }, Qs({
      icon: g(() => [
        b(f(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: g(() => [
        t("div", sb, [
          t("span", null, f(e.remote.name), 1),
          n.value ? (a(), c("span", ob, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), c("span", nb, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), c(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), c("span", ab, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), c("span", lb, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), c("span", ib, "✓ synced"))
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
          onClick: v[0] || (v[0] = nt(() => {
          }, ["stop"]))
        }, f(d.value), 9, rb)) : (a(), c("span", cb, f(d.value), 1))
      ]),
      actions: g(() => [
        C(ie, {
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
        C(ie, {
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
        C(ie, {
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
        C(ie, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (h) => m.$emit("edit", e.remote.name))
        }, {
          default: g(() => [...v[7] || (v[7] = [
            b(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? y("", !0) : (a(), M(ie, {
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
          e.remote.push_url !== e.remote.fetch_url ? (a(), M(ut, {
            key: 0,
            label: "Push URL:"
          }, {
            default: g(() => [
              C(tb, {
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
}), db = /* @__PURE__ */ pe(ub, [["__scopeId", "data-v-8310f3a8"]]), fb = ["for"], mb = {
  key: 0,
  class: "base-form-field-required"
}, vb = { class: "base-form-field-input" }, pb = {
  key: 1,
  class: "base-form-field-error"
}, gb = {
  key: 2,
  class: "base-form-field-hint"
}, hb = /* @__PURE__ */ me({
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
      class: xe(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), c("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        b(f(e.label) + " ", 1),
        e.required ? (a(), c("span", mb, "*")) : y("", !0)
      ], 8, fb)) : y("", !0),
      t("div", vb, [
        Ge(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), c("span", pb, f(e.error), 1)) : e.hint ? (a(), c("span", gb, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), na = /* @__PURE__ */ pe(hb, [["__scopeId", "data-v-9a1cf296"]]), yb = { class: "remote-form" }, wb = { class: "form-header" }, bb = { class: "form-body" }, _b = {
  key: 0,
  class: "form-error"
}, kb = { class: "form-actions" }, $b = /* @__PURE__ */ me({
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
    xt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
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
    return (m, v) => (a(), c("div", yb, [
      t("div", wb, [
        C(Ot, null, {
          default: g(() => [
            b(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", bb, [
        C(na, {
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
        C(na, {
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
        C(na, { label: "Push URL (optional)" }, {
          default: g(() => [
            C(Qt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (h) => l.value.pushUrl = h),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        r.value ? (a(), c("div", _b, f(r.value), 1)) : y("", !0)
      ]),
      t("div", kb, [
        C(ie, {
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
        C(ie, {
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
}), Cb = /* @__PURE__ */ pe($b, [["__scopeId", "data-v-56021b18"]]), xb = { class: "conflict-summary-box" }, Sb = { class: "summary-header" }, Ib = { class: "summary-text" }, Eb = { key: 0 }, Tb = {
  key: 1,
  class: "all-resolved"
}, Pb = { class: "summary-progress" }, Rb = { class: "progress-bar" }, Mb = { class: "progress-text" }, Db = /* @__PURE__ */ me({
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
    return (n, l) => (a(), c("div", xb, [
      t("div", Sb, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", Ib, [
          t("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), c("p", Eb, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (a(), c("p", Tb, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      t("div", Pb, [
        t("div", Rb, [
          t("div", {
            class: "progress-fill",
            style: Wt({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", Mb, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Lb = /* @__PURE__ */ pe(Db, [["__scopeId", "data-v-4e9e6cc9"]]), Ob = { class: "modal-header" }, Nb = { class: "modal-title" }, Ab = { class: "modal-body" }, Ub = {
  key: 0,
  class: "error-box"
}, zb = {
  key: 0,
  class: "error-hint"
}, Fb = {
  key: 1,
  class: "loading-state"
}, Bb = { class: "commit-summary" }, Vb = {
  key: 0,
  class: "changes-section"
}, Wb = {
  key: 0,
  class: "change-group",
  open: ""
}, Gb = { class: "change-count" }, jb = { class: "change-list" }, Hb = {
  key: 0,
  class: "conflict-badge"
}, Kb = {
  key: 1,
  class: "change-group"
}, qb = { class: "change-count" }, Yb = { class: "change-list" }, Jb = {
  key: 2,
  class: "change-group"
}, Xb = { class: "change-count" }, Qb = { class: "change-list" }, Zb = {
  key: 2,
  class: "strategy-section"
}, e_ = { class: "radio-group" }, t_ = { class: "radio-option" }, s_ = { class: "radio-option" }, o_ = { class: "radio-option" }, n_ = {
  key: 3,
  class: "up-to-date"
}, a_ = { class: "modal-actions" }, Gl = "comfygit.pullModelStrategy", l_ = /* @__PURE__ */ me({
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
    const o = e, n = s, l = k(localStorage.getItem(Gl) || "skip");
    xt(l, ($) => {
      localStorage.setItem(Gl, $);
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
    }), m = F(() => o.preview && yr(o.preview) ? o.preview : null), v = F(() => {
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
      return m.value.workflow_conflicts.some((N) => N.name === P);
    }
    function x($) {
      const P = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: $, resolutions: P });
    }
    return ($, P) => {
      var N, T;
      return a(), M(yt, { to: "body" }, [
        e.show ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: P[11] || (P[11] = (S) => $.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: P[10] || (P[10] = nt(() => {
            }, ["stop"]))
          }, [
            t("div", Ob, [
              t("h3", Nb, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: P[0] || (P[0] = (S) => $.$emit("close"))
              }, "✕")
            ]),
            t("div", Ab, [
              e.error ? (a(), c("div", Ub, [
                P[13] || (P[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  P[12] || (P[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, f(e.error), 1),
                  i.value ? (a(), c("p", zb, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), c("div", Fb, [...P[14] || (P[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (N = e.preview) != null && N.has_uncommitted_changes ? (a(), c(j, { key: 2 }, [
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
                t("div", Bb, [
                  P[17] || (P[17] = t("span", { class: "icon" }, "📥", -1)),
                  b(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                d.value ? (a(), c("div", Vb, [
                  P[21] || (P[21] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  r.value > 0 ? (a(), c("details", Wb, [
                    t("summary", null, [
                      P[18] || (P[18] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", Gb, f(r.value) + " changes", 1)
                    ]),
                    t("div", jb, [
                      (a(!0), c(j, null, ge(e.preview.changes.workflows.added, (S) => (a(), c("div", {
                        key: "a-" + S,
                        class: "change-item add"
                      }, " + " + f(S), 1))), 128)),
                      (a(!0), c(j, null, ge(e.preview.changes.workflows.modified, (S) => (a(), c("div", {
                        key: "m-" + S,
                        class: "change-item modify"
                      }, [
                        b(" ~ " + f(S) + " ", 1),
                        _(S) ? (a(), c("span", Hb, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), c(j, null, ge(e.preview.changes.workflows.deleted, (S) => (a(), c("div", {
                        key: "d-" + S,
                        class: "change-item delete"
                      }, " - " + f(S), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (a(), c("details", Kb, [
                    t("summary", null, [
                      P[19] || (P[19] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", qb, f(u.value) + " to install", 1)
                    ]),
                    t("div", Yb, [
                      (a(!0), c(j, null, ge(e.preview.changes.nodes.to_install, (S) => (a(), c("div", {
                        key: S,
                        class: "change-item add"
                      }, " + " + f(S), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), c("details", Jb, [
                    t("summary", null, [
                      P[20] || (P[20] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", Xb, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", Qb, [
                      (a(!0), c(j, null, ge(e.preview.changes.models.referenced, (S) => (a(), c("div", {
                        key: S,
                        class: "change-item"
                      }, f(S), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (a(), M(Lb, {
                  key: 1,
                  "conflict-count": v.value,
                  "resolved-count": h.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), c("div", Zb, [
                  P[26] || (P[26] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", e_, [
                    t("label", t_, [
                      He(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[1] || (P[1] = (S) => l.value = S),
                        value: "all"
                      }, null, 512), [
                        [Yt, l.value]
                      ]),
                      P[22] || (P[22] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", s_, [
                      He(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[2] || (P[2] = (S) => l.value = S),
                        value: "required"
                      }, null, 512), [
                        [Yt, l.value]
                      ]),
                      P[23] || (P[23] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", o_, [
                      He(t("input", {
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
                e.preview.commits_behind === 0 ? (a(), c("div", n_, [
                  P[28] || (P[28] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", a_, [
              C(ie, {
                variant: "secondary",
                onClick: P[4] || (P[4] = (S) => $.$emit("close"))
              }, {
                default: g(() => [...P[29] || (P[29] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), c(j, { key: 0 }, [
                C(ie, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: P[5] || (P[5] = (S) => x(!1))
                }, {
                  default: g(() => [...P[30] || (P[30] = [
                    b(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                C(ie, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: P[6] || (P[6] = (S) => x(!0))
                }, {
                  default: g(() => [...P[31] || (P[31] = [
                    b(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (T = e.preview) != null && T.has_uncommitted_changes ? (a(), M(ie, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: P[7] || (P[7] = (S) => x(!0))
              }, {
                default: g(() => [...P[32] || (P[32] = [
                  b(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), c(j, { key: 2 }, [
                m.value && !w.value ? (a(), M(ie, {
                  key: 0,
                  variant: "primary",
                  onClick: P[8] || (P[8] = (S) => n("openConflictResolution"))
                }, {
                  default: g(() => [
                    b(" Resolve Conflicts (" + f(h.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), M(ie, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !p.value,
                  onClick: P[9] || (P[9] = (S) => x(!1))
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
}), i_ = /* @__PURE__ */ pe(l_, [["__scopeId", "data-v-300c7b2f"]]), r_ = { class: "modal-header" }, c_ = { class: "modal-title" }, u_ = { class: "modal-body" }, d_ = {
  key: 0,
  class: "loading-state"
}, f_ = {
  key: 1,
  class: "warning-box"
}, m_ = {
  key: 0,
  class: "commits-section"
}, v_ = { class: "commit-list" }, p_ = { class: "commit-hash" }, g_ = { class: "commit-message" }, h_ = { class: "commit-date" }, y_ = { class: "force-option" }, w_ = { class: "checkbox-option" }, b_ = { class: "commit-summary" }, __ = { key: 0 }, k_ = { key: 1 }, $_ = {
  key: 0,
  class: "info-box"
}, C_ = {
  key: 1,
  class: "commits-section"
}, x_ = { class: "commit-list" }, S_ = { class: "commit-hash" }, I_ = { class: "commit-message" }, E_ = { class: "commit-date" }, T_ = {
  key: 2,
  class: "up-to-date"
}, P_ = { class: "modal-actions" }, R_ = /* @__PURE__ */ me({
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
      return a(), M(yt, { to: "body" }, [
        e.show ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: r[7] || (r[7] = (v) => i.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: r[6] || (r[6] = nt(() => {
            }, ["stop"]))
          }, [
            t("div", r_, [
              t("h3", c_, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: r[0] || (r[0] = (v) => i.$emit("close"))
              }, "✕")
            ]),
            t("div", u_, [
              e.loading ? (a(), c("div", d_, [...r[8] || (r[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (a(), c("div", f_, [...r[9] || (r[9] = [
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
                e.preview.commits_ahead > 0 ? (a(), c("div", m_, [
                  r[10] || (r[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", v_, [
                    (a(!0), c(j, null, ge(e.preview.commits, (v) => (a(), c("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", p_, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", g_, f(v.message), 1),
                      t("span", h_, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", y_, [
                  t("label", w_, [
                    He(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": r[1] || (r[1] = (v) => n.value = v)
                    }, null, 512), [
                      [Ko, n.value]
                    ]),
                    r[11] || (r[11] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  r[12] || (r[12] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (a(), c(j, { key: 3 }, [
                t("div", b_, [
                  r[14] || (r[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (a(), c("span", __, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), c("span", k_, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (a(), c("div", $_, [...r[15] || (r[15] = [
                  t("span", { class: "info-icon" }, "ℹ", -1),
                  t("span", null, "This will create the remote branch for the first time.", -1)
                ])])) : y("", !0),
                e.preview.commits_ahead > 0 ? (a(), c("div", C_, [
                  r[16] || (r[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", x_, [
                    (a(!0), c(j, null, ge(e.preview.commits, (v) => (a(), c("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", S_, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", I_, f(v.message), 1),
                      t("span", E_, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (a(), c("div", T_, [
                  r[17] || (r[17] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", P_, [
              C(ie, {
                variant: "secondary",
                onClick: r[2] || (r[2] = (v) => i.$emit("close"))
              }, {
                default: g(() => [...r[18] || (r[18] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = e.preview) != null && m.remote_has_new_commits ? (a(), c(j, { key: 0 }, [
                C(ie, {
                  variant: "secondary",
                  onClick: r[3] || (r[3] = (v) => i.$emit("pull-first"))
                }, {
                  default: g(() => [...r[19] || (r[19] = [
                    b(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                C(ie, {
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
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), M(ie, {
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
}), M_ = /* @__PURE__ */ pe(R_, [["__scopeId", "data-v-ae86b6a7"]]), D_ = { class: "resolution-choice-group" }, L_ = ["disabled"], O_ = ["disabled"], N_ = /* @__PURE__ */ me({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), c("div", D_, [
      t("button", {
        class: xe(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, L_),
      t("button", {
        class: xe(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, O_)
    ]));
  }
}), A_ = /* @__PURE__ */ pe(N_, [["__scopeId", "data-v-985715ed"]]), U_ = { class: "conflict-header" }, z_ = { class: "conflict-info" }, F_ = { class: "workflow-name" }, B_ = { class: "conflict-description" }, V_ = {
  key: 0,
  class: "resolved-badge"
}, W_ = { class: "resolved-text" }, G_ = { class: "conflict-hashes" }, j_ = { class: "hash-item" }, H_ = { class: "hash-item" }, K_ = { class: "conflict-actions" }, q_ = /* @__PURE__ */ me({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = k(o.resolution);
    xt(() => o.resolution, (d) => {
      l.value = d;
    }), xt(l, (d) => {
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
        class: xe(["conflict-item", { resolved: i.value }])
      }, [
        t("div", U_, [
          m[2] || (m[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", z_, [
            t("code", F_, f(e.conflict.name) + ".json", 1),
            t("div", B_, f(r.value), 1)
          ]),
          i.value ? (a(), c("div", V_, [
            m[1] || (m[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", W_, f(u.value), 1)
          ])) : y("", !0)
        ]),
        t("div", G_, [
          t("span", j_, [
            m[3] || (m[3] = b("Your: ", -1)),
            t("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", H_, [
            m[4] || (m[4] = b("Theirs: ", -1)),
            t("code", null, f(((h = e.conflict.target_hash) == null ? void 0 : h.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", K_, [
          C(A_, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), Y_ = /* @__PURE__ */ pe(q_, [["__scopeId", "data-v-506d3bbf"]]), J_ = { class: "resolution-content" }, X_ = {
  key: 0,
  class: "error-box"
}, Q_ = { class: "resolution-header" }, Z_ = { class: "header-stats" }, ek = { class: "stat" }, tk = { class: "stat-value" }, sk = { class: "stat resolved" }, ok = { class: "stat-value" }, nk = {
  key: 0,
  class: "stat pending"
}, ak = { class: "stat-value" }, lk = { class: "conflicts-list" }, ik = {
  key: 1,
  class: "all-resolved-message"
}, rk = /* @__PURE__ */ me({
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
    return (w, p) => (a(), M(vt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: g(() => [
        t("div", J_, [
          e.error ? (a(), c("div", X_, [
            p[1] || (p[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              p[0] || (p[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", Q_, [
            t("div", Z_, [
              t("div", ek, [
                t("span", tk, f(e.workflowConflicts.length), 1),
                p[2] || (p[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", sk, [
                t("span", ok, f(l.value), 1),
                p[3] || (p[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              i.value > 0 ? (a(), c("div", nk, [
                t("span", ak, f(i.value), 1),
                p[4] || (p[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            p[5] || (p[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", lk, [
            (a(!0), c(j, null, ge(e.workflowConflicts, (_) => (a(), M(Y_, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (x) => m(_.name, x)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          r.value ? (a(), c("div", ik, [
            p[6] || (p[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + f(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        C(Me, {
          variant: "secondary",
          onClick: v
        }, {
          default: g(() => [...p[7] || (p[7] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = t("div", { class: "footer-spacer" }, null, -1)),
        C(Me, {
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
}), ck = /* @__PURE__ */ pe(rk, [["__scopeId", "data-v-c58d150d"]]), uk = { class: "node-conflict-item" }, dk = { class: "node-header" }, fk = { class: "node-name" }, mk = { class: "node-id" }, vk = { class: "version-comparison" }, pk = { class: "version yours" }, gk = { class: "version theirs" }, hk = { class: "chosen-version" }, yk = { class: "chosen" }, wk = { class: "chosen-reason" }, bk = { class: "affected-workflows" }, _k = { class: "wf-source" }, kk = { class: "wf-version" }, $k = /* @__PURE__ */ me({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (a(), c("div", uk, [
      t("div", dk, [
        t("code", fk, f(e.conflict.node_name), 1),
        t("span", mk, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      t("div", vk, [
        t("div", pk, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", gk, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      t("div", hk, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", yk, f(e.conflict.chosen_version), 1),
        t("span", wk, f(e.conflict.chosen_reason), 1)
      ]),
      t("details", bk, [
        t("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (a(!0), c(j, null, ge(e.conflict.affected_workflows, (n) => (a(), c("li", {
            key: n.name
          }, [
            t("code", null, f(n.name), 1),
            t("span", _k, "(" + f(n.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", kk, "needs v" + f(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), Ck = /* @__PURE__ */ pe($k, [["__scopeId", "data-v-8b626725"]]), xk = { class: "validation-content" }, Sk = {
  key: 0,
  class: "compatible-message"
}, Ik = { class: "conflicts-list" }, Ek = {
  key: 2,
  class: "warnings-section"
}, Tk = /* @__PURE__ */ me({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = F(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (i, r) => (a(), M(vt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: r[3] || (r[3] = (u) => n("cancel"))
    }, {
      body: g(() => [
        t("div", xk, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), c("div", Sk, [
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
            t("div", Ik, [
              (a(!0), c(j, null, ge(e.validation.node_conflicts, (u) => (a(), M(Ck, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            r[7] || (r[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (a(), c("div", Ek, [
            r[8] || (r[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (a(!0), c(j, null, ge(e.validation.warnings, (u, d) => (a(), c("li", { key: d }, f(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        C(Me, {
          variant: "secondary",
          onClick: r[0] || (r[0] = (u) => n("cancel"))
        }, {
          default: g(() => [...r[9] || (r[9] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        r[11] || (r[11] = t("div", { class: "footer-spacer" }, null, -1)),
        C(Me, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (u) => n("goBack"))
        }, {
          default: g(() => [...r[10] || (r[10] = [
            b(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        C(Me, {
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
}), Pk = /* @__PURE__ */ pe(Tk, [["__scopeId", "data-v-fefd26ed"]]), Rk = { key: 0 }, Mk = /* @__PURE__ */ me({
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
    } = at(), _ = k([]), x = k(null), $ = k({}), P = k(!1), N = k(null), T = k(""), S = k(!1), q = k(null), B = k(!1), A = k("add"), I = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), E = F(() => {
      if (!T.value.trim()) return _.value;
      const W = T.value.toLowerCase();
      return _.value.filter(
        (ce) => ce.name.toLowerCase().includes(W) || ce.fetch_url.toLowerCase().includes(W) || ce.push_url.toLowerCase().includes(W)
      );
    });
    async function O() {
      P.value = !0, N.value = null;
      try {
        const W = await n();
        _.value = W.remotes, x.value = W.current_branch_tracking || null, await Promise.all(
          W.remotes.map(async (ce) => {
            const Te = await d(ce.name);
            Te && ($.value[ce.name] = Te);
          })
        );
      } catch (W) {
        N.value = W instanceof Error ? W.message : "Failed to load remotes";
      } finally {
        P.value = !1;
      }
    }
    function re() {
      A.value = "add", I.value = { name: "", fetchUrl: "", pushUrl: "" }, B.value = !0;
    }
    function Y(W) {
      const ce = _.value.find((Te) => Te.name === W);
      ce && (A.value = "edit", I.value = {
        name: ce.name,
        fetchUrl: ce.fetch_url,
        pushUrl: ce.push_url
      }, B.value = !0);
    }
    async function H(W) {
      try {
        A.value === "add" ? await l(W.name, W.fetchUrl) : await r(W.name, W.fetchUrl, W.pushUrl || void 0), B.value = !1, await O();
      } catch (ce) {
        N.value = ce instanceof Error ? ce.message : "Operation failed";
      }
    }
    function te() {
      B.value = !1, I.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Z(W) {
      q.value = W;
      try {
        await u(W);
        const ce = await d(W);
        ce && ($.value[W] = ce), o("toast", `✓ Fetched from ${W}`, "success");
      } catch (ce) {
        o("toast", ce instanceof Error ? ce.message : "Fetch failed", "error");
      } finally {
        q.value = null;
      }
    }
    async function U(W) {
      if (confirm(`Remove remote "${W}"?`))
        try {
          await i(W), await O();
        } catch (ce) {
          N.value = ce instanceof Error ? ce.message : "Failed to remove remote";
        }
    }
    function z() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const R = k("idle"), be = F(() => R.value === "pull_preview"), ve = F(
      () => R.value === "resolving" || R.value === "validating"
    ), Ee = F(
      () => R.value === "validation_review" || R.value === "executing"
    ), De = k(!1), je = k(null), Je = k(!1), _e = k(null), Se = k(!1), Ve = k(null), ye = k(null), le = k(/* @__PURE__ */ new Map()), Fe = k(null), Ie = k(null), L = F(() => Ve.value && yr(Ve.value) ? Ve.value : null);
    async function V(W) {
      _e.value = W, R.value = "pull_preview", Se.value = !0, Ve.value = null, ye.value = null;
      try {
        Ve.value = await m(W);
      } catch (ce) {
        ye.value = ce instanceof Error ? ce.message : "Failed to load pull preview";
      } finally {
        Se.value = !1;
      }
    }
    function oe() {
      R.value = "idle", Ve.value = null, ye.value = null, _e.value = null;
    }
    async function ae(W) {
      if (!_e.value) return;
      R.value = "executing", ye.value = null;
      const ce = _e.value;
      try {
        const Te = await v(ce, W);
        if (Te.rolled_back) {
          ye.value = `Pull failed and was rolled back: ${Te.error || "Unknown error"}`, R.value = "pull_preview";
          return;
        }
        Ce(), R.value = "idle", o("toast", `✓ Pulled from ${ce}`, "success"), await O();
      } catch (Te) {
        ye.value = Te instanceof Error ? Te.message : "Pull failed", R.value = "pull_preview";
      }
    }
    function de() {
      L.value && (R.value = "resolving", Ie.value = null);
    }
    function fe(W, ce) {
      le.value.set(W, { name: W, resolution: ce });
    }
    function ke() {
      R.value = "pull_preview";
    }
    async function $e() {
      R.value = "validating", Ie.value = null;
      try {
        const W = Array.from(le.value.values());
        Fe.value = await p(_e.value, W), R.value = "validation_review";
      } catch (W) {
        Ie.value = W instanceof Error ? W.message : "Validation failed", R.value = "resolving";
      }
    }
    async function ne() {
      R.value = "executing";
      const W = _e.value;
      try {
        const ce = Array.from(le.value.values()), Te = await v(W, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: ce
        });
        if (Te.rolled_back) {
          ye.value = `Pull failed and was rolled back: ${Te.error || "Unknown error"}`, R.value = "pull_preview";
          return;
        }
        Ce(), R.value = "idle", o("toast", `✓ Pulled from ${W}`, "success"), await O();
      } catch (ce) {
        ye.value = ce instanceof Error ? ce.message : "Pull failed", R.value = "validation_review";
      }
    }
    function ue() {
      R.value = "resolving";
    }
    function Re() {
      Ce(), R.value = "idle";
    }
    function Ce() {
      le.value.clear(), Fe.value = null, Ie.value = null, ye.value = null, Ve.value = null, _e.value = null;
    }
    async function ee(W) {
      _e.value = W, De.value = !0, Se.value = !0, je.value = null;
      try {
        je.value = await h(W);
      } catch (ce) {
        N.value = ce instanceof Error ? ce.message : "Failed to load push preview";
      } finally {
        Se.value = !1;
      }
    }
    function K() {
      De.value = !1, je.value = null, _e.value = null;
    }
    async function X(W) {
      if (!_e.value) return;
      Je.value = !0;
      const ce = _e.value;
      try {
        await w(ce, W), K(), o("toast", `✓ Pushed to ${ce}`, "success"), await O();
      } catch (Te) {
        o("toast", Te instanceof Error ? Te.message : "Push failed", "error");
      } finally {
        Je.value = !1;
      }
    }
    function D() {
      const W = _e.value;
      K(), W && V(W);
    }
    return Qe(O), (W, ce) => (a(), c(j, null, [
      C(Pt, null, {
        header: g(() => [
          C(Rt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: ce[0] || (ce[0] = (Te) => S.value = !0)
          }, {
            actions: g(() => [
              B.value ? y("", !0) : (a(), M(ie, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: re
              }, {
                default: g(() => [...ce[3] || (ce[3] = [
                  b(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          B.value ? y("", !0) : (a(), M(yo, {
            key: 0,
            modelValue: T.value,
            "onUpdate:modelValue": ce[1] || (ce[1] = (Te) => T.value = Te),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: g(() => [
          P.value ? (a(), M(Ss, {
            key: 0,
            message: "Loading remotes..."
          })) : N.value ? (a(), M(Is, {
            key: 1,
            message: N.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            B.value ? (a(), M(Cb, {
              key: 0,
              mode: A.value,
              "remote-name": I.value.name,
              "fetch-url": I.value.fetchUrl,
              "push-url": I.value.pushUrl,
              onSubmit: H,
              onCancel: te
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            _.value.length && !B.value ? (a(), M(Zo, {
              key: 1,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                x.value ? (a(), c("span", Rk, " • Tracking: " + f(x.value.remote) + "/" + f(x.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            E.value.length && !B.value ? (a(), M(ot, {
              key: 2,
              title: "REMOTES",
              count: E.value.length
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge(E.value, (Te) => (a(), M(db, {
                  key: Te.name,
                  remote: Te,
                  "sync-status": $.value[Te.name],
                  "fetching-remote": q.value,
                  onFetch: Z,
                  onEdit: Y,
                  onRemove: U,
                  onPull: V,
                  onPush: ee
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !E.value.length && !B.value ? (a(), M(ts, {
              key: 3,
              icon: "🌐",
              message: T.value ? `No remotes match '${T.value}'` : "No remotes configured."
            }, {
              actions: g(() => [
                C(ie, {
                  variant: "primary",
                  onClick: re
                }, {
                  default: g(() => [...ce[4] || (ce[4] = [
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
      C(ss, {
        show: S.value,
        title: "About Git Remotes",
        onClose: ce[2] || (ce[2] = (Te) => S.value = !1)
      }, {
        content: g(() => [...ce[5] || (ce[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            b(" The "),
            t("strong", null, '"origin"'),
            b(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: g(() => [
          C(ie, {
            variant: "link",
            onClick: z
          }, {
            default: g(() => [...ce[6] || (ce[6] = [
              b(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      C(i_, {
        show: be.value,
        "remote-name": _e.value || "",
        preview: Ve.value,
        loading: Se.value,
        pulling: R.value === "executing",
        error: ye.value,
        "conflict-resolutions": le.value,
        onClose: oe,
        onPull: ae,
        onOpenConflictResolution: de
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      C(M_, {
        show: De.value,
        "remote-name": _e.value || "",
        preview: je.value,
        loading: Se.value,
        pushing: Je.value,
        onClose: K,
        onPush: X,
        onPullFirst: D
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ve.value && L.value ? (a(), M(ck, {
        key: 0,
        "workflow-conflicts": L.value.workflow_conflicts,
        resolutions: le.value,
        "operation-type": "pull",
        validating: R.value === "validating",
        error: Ie.value,
        onClose: ke,
        onResolve: fe,
        onApply: $e
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      Ee.value && Fe.value ? (a(), M(Pk, {
        key: 1,
        validation: Fe.value,
        "operation-type": "pull",
        executing: R.value === "executing",
        onProceed: ne,
        onGoBack: ue,
        onCancel: Re
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), Dk = /* @__PURE__ */ pe(Mk, [["__scopeId", "data-v-9ae3b76d"]]), Lk = { class: "setting-info" }, Ok = { class: "setting-label" }, Nk = {
  key: 0,
  class: "required-marker"
}, Ak = {
  key: 0,
  class: "setting-description"
}, Uk = { class: "setting-control" }, zk = /* @__PURE__ */ me({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), c("div", {
      class: xe(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", Lk, [
        t("div", Ok, [
          b(f(e.label) + " ", 1),
          e.required ? (a(), c("span", Nk, "*")) : y("", !0)
        ]),
        e.description ? (a(), c("div", Ak, f(e.description), 1)) : y("", !0)
      ]),
      t("div", Uk, [
        Ge(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), aa = /* @__PURE__ */ pe(zk, [["__scopeId", "data-v-cb5d236c"]]), Fk = { class: "toggle" }, Bk = ["checked", "disabled"], Vk = /* @__PURE__ */ me({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), c("label", Fk, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, Bk),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Wk = /* @__PURE__ */ pe(Vk, [["__scopeId", "data-v-71c0f550"]]), Gk = { class: "workspace-settings-content" }, jk = { class: "settings-section" }, Hk = { class: "path-setting" }, Kk = { class: "path-value" }, qk = { class: "path-setting" }, Yk = { class: "path-value" }, Jk = { class: "settings-section" }, Xk = { class: "settings-section" }, Qk = { class: "settings-section" }, Zk = /* @__PURE__ */ me({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = o, { getConfig: i, updateConfig: r } = at(), u = k(!1), d = k(null), m = k(null), v = k(null), h = k(null), w = k(""), p = k(""), _ = k(!1);
    function x(B) {
      return B.join(" ");
    }
    function $(B) {
      return B.trim() ? B.trim().split(/\s+/) : [];
    }
    const P = F(() => {
      if (!h.value) return !1;
      const B = w.value !== (h.value.civitai_api_key || ""), A = p.value !== x(h.value.comfyui_extra_args || []);
      return B || A;
    });
    async function N() {
      u.value = !0, d.value = null;
      try {
        v.value = await i(n.workspacePath || void 0), h.value = { ...v.value }, w.value = v.value.civitai_api_key || "", p.value = x(v.value.comfyui_extra_args || []);
        const B = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        _.value = B === "true";
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
        w.value !== (((B = h.value) == null ? void 0 : B.civitai_api_key) || "") && (I.civitai_api_key = w.value || null), p.value !== x(((A = h.value) == null ? void 0 : A.comfyui_extra_args) || []) && (I.comfyui_extra_args = $(p.value)), await r(I, n.workspacePath || void 0), await N(), m.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (I) {
        const E = I instanceof Error ? I.message : "Failed to save settings";
        m.value = { type: "error", message: E }, l("error", E);
      }
    }
    function S() {
      h.value && (w.value = h.value.civitai_api_key || "", p.value = x(h.value.comfyui_extra_args || []), m.value = null);
    }
    function q(B) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(B)), console.log("[ComfyGit] Auto-refresh setting saved:", B);
    }
    return s({
      saveSettings: T,
      resetSettings: S,
      hasChanges: P,
      loadSettings: N
    }), Qe(N), (B, A) => (a(), c("div", Gk, [
      u.value ? (a(), M(Ss, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (a(), M(Is, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: N
      }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
        C(ot, { title: "WORKSPACE PATHS" }, {
          default: g(() => {
            var I, E;
            return [
              t("div", jk, [
                t("div", Hk, [
                  A[3] || (A[3] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  A[4] || (A[4] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", Kk, f(((I = v.value) == null ? void 0 : I.workspace_path) || "Loading..."), 1)
                ]),
                t("div", qk, [
                  A[5] || (A[5] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  A[6] || (A[6] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", Yk, f(((E = v.value) == null ? void 0 : E.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        C(ot, { title: "API CREDENTIALS" }, {
          default: g(() => [
            t("div", Jk, [
              C(aa, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: g(() => [
                  C(In, {
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
        C(ot, { title: "COMFYUI SETTINGS" }, {
          default: g(() => [
            t("div", Xk, [
              C(aa, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: g(() => [
                  C(In, {
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
        C(ot, { title: "UI SETTINGS" }, {
          default: g(() => [
            t("div", Qk, [
              C(aa, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: g(() => [
                  C(Wk, {
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
        m.value ? (a(), M(Zo, {
          key: 0,
          variant: (m.value.type === "success", "compact")
        }, {
          default: g(() => [
            t("span", {
              style: Wt({ color: m.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, f(m.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), wr = /* @__PURE__ */ pe(Zk, [["__scopeId", "data-v-9f44552d"]]), e2 = /* @__PURE__ */ me({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), M(Pt, null, {
      header: g(() => [
        C(Rt, { title: "WORKSPACE SETTINGS" }, {
          actions: g(() => {
            var i, r;
            return [
              C(ie, {
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
              (r = s.value) != null && r.hasChanges ? (a(), M(ie, {
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
        C(wr, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), t2 = { class: "base-tabs" }, s2 = ["disabled", "onClick"], o2 = {
  key: 0,
  class: "base-tabs__badge"
}, n2 = /* @__PURE__ */ me({
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
    return (i, r) => (a(), c("div", t2, [
      (a(!0), c(j, null, ge(e.tabs, (u) => (a(), c("button", {
        key: u.id,
        class: xe([
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
        u.badge ? (a(), c("span", o2, f(u.badge), 1)) : y("", !0)
      ], 10, s2))), 128))
    ]));
  }
}), br = /* @__PURE__ */ pe(n2, [["__scopeId", "data-v-ad5e6cad"]]), a2 = { class: "log-viewer-wrapper" }, l2 = ["disabled", "title"], i2 = /* @__PURE__ */ me({
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
      await Jo();
      const m = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      m && (m.scrollTop = m.scrollHeight);
    }
    Qe(i), xt(() => s.logs, i);
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
    return (m, v) => (a(), c("div", a2, [
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
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, l2),
        (a(!0), c(j, null, ge(l.value, (h, w) => (a(), c("div", {
          key: w,
          class: xe(`log-line log-level-${h.level.toLowerCase()}`)
        }, f(h.text), 3))), 128))
      ], 544)
    ]));
  }
}), _r = /* @__PURE__ */ pe(i2, [["__scopeId", "data-v-c0cc6d21"]]), r2 = /* @__PURE__ */ me({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: n,
      getOrchestratorLogPath: l,
      openFile: i
    } = at(), r = k("workspace"), u = k([]), d = k(!1), m = k(null), v = k(!1), h = k(null), w = k(null), p = k(!1), _ = F(() => r.value === "workspace" ? h.value : w.value);
    async function x() {
      d.value = !0, m.value = null;
      try {
        r.value === "workspace" ? u.value = await s(void 0, 500) : u.value = await n(void 0, 500);
      } catch (N) {
        m.value = N instanceof Error ? N.message : `Failed to load ${r.value} logs`;
      } finally {
        d.value = !1;
      }
    }
    async function $() {
      try {
        const [N, T] = await Promise.all([
          o(),
          l()
        ]);
        N.exists && (h.value = N.path), T.exists && (w.value = T.path);
      } catch {
      }
    }
    async function P() {
      if (_.value) {
        p.value = !0;
        try {
          await i(_.value);
        } catch (N) {
          console.error("Failed to open log file:", N);
        } finally {
          p.value = !1;
        }
      }
    }
    return xt(r, () => {
      x();
    }), Qe(() => {
      x(), $();
    }), (N, T) => (a(), c(j, null, [
      C(Pt, null, {
        header: g(() => [
          C(Rt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (S) => v.value = !0)
          }, {
            actions: g(() => [
              C(ie, {
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
              C(ie, {
                variant: "secondary",
                size: "sm",
                onClick: x,
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
          C(br, {
            modelValue: r.value,
            "onUpdate:modelValue": T[1] || (T[1] = (S) => r.value = S),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value ? (a(), M(Ss, {
            key: 0,
            message: `Loading ${r.value} logs...`
          }, null, 8, ["message"])) : m.value ? (a(), M(Is, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            u.value.length === 0 ? (a(), M(ts, {
              key: 0,
              icon: "📝",
              message: `No ${r.value} logs available`
            }, null, 8, ["message"])) : (a(), M(_r, {
              key: 1,
              logs: u.value,
              "raw-format": r.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      C(ss, {
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
          C(ie, {
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
}), c2 = /* @__PURE__ */ me({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: n, openFile: l } = at(), i = k([]), r = k(!1), u = k(null), d = k(!1), m = k("production"), v = k(null), h = k(!1);
    async function w() {
      r.value = !0, u.value = null;
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
        r.value = !1;
      }
    }
    async function p() {
      try {
        const x = await n();
        x.exists && (v.value = x.path);
      } catch {
      }
    }
    async function _() {
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
    return Qe(() => {
      w(), p();
    }), (x, $) => (a(), c(j, null, [
      C(Pt, null, {
        header: g(() => [
          C(Rt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (P) => d.value = !0)
          }, {
            actions: g(() => [
              C(ie, {
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
              C(ie, {
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
          r.value ? (a(), M(Ss, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (a(), M(Is, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            i.value.length === 0 ? (a(), M(ts, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), M(_r, {
              key: 1,
              logs: i.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      C(ss, {
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
          C(ie, {
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
}), u2 = { class: "env-title" }, d2 = {
  key: 0,
  class: "current-badge"
}, f2 = {
  key: 0,
  class: "branch-info"
}, m2 = /* @__PURE__ */ me({
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
    return (s, o) => (a(), M(Tt, {
      status: e.isCurrent ? "synced" : void 0
    }, Qs({
      icon: g(() => [
        b(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: g(() => [
        t("div", u2, [
          t("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), c("span", d2, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: g(() => [
        e.currentBranch ? (a(), c("span", f2, [
          o[0] || (o[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          b(" " + f(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: g(() => [
        Ge(s.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: g(() => [
          C(ut, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          C(ut, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          C(ut, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (a(), M(ut, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), v2 = /* @__PURE__ */ pe(m2, [["__scopeId", "data-v-9231917a"]]), p2 = { class: "env-details" }, g2 = { class: "status-row" }, h2 = {
  key: 0,
  class: "detail-row"
}, y2 = { class: "value mono" }, w2 = {
  key: 1,
  class: "detail-row"
}, b2 = { class: "value mono small" }, _2 = { class: "detail-row" }, k2 = { class: "value" }, $2 = { class: "detail-row" }, C2 = { class: "value" }, x2 = { class: "detail-row" }, S2 = { class: "value" }, I2 = {
  key: 2,
  class: "section-divider"
}, E2 = {
  key: 3,
  class: "detail-row"
}, T2 = { class: "value" }, P2 = {
  key: 4,
  class: "detail-row"
}, R2 = { class: "value" }, M2 = { class: "footer-actions" }, D2 = /* @__PURE__ */ me({
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
    return (l, i) => (a(), M(vt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: i[2] || (i[2] = (r) => o("close"))
    }, {
      body: g(() => [
        t("div", p2, [
          t("div", g2, [
            i[3] || (i[3] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: xe(["status-badge", e.environment.is_current ? "current" : "inactive"])
            }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          e.environment.current_branch ? (a(), c("div", h2, [
            i[4] || (i[4] = t("span", { class: "label" }, "Branch:", -1)),
            t("span", y2, f(e.environment.current_branch), 1)
          ])) : y("", !0),
          e.environment.path ? (a(), c("div", w2, [
            i[5] || (i[5] = t("span", { class: "label" }, "Path:", -1)),
            t("span", b2, f(e.environment.path), 1)
          ])) : y("", !0),
          i[11] || (i[11] = t("div", { class: "section-divider" }, null, -1)),
          t("div", _2, [
            i[6] || (i[6] = t("span", { class: "label" }, "Workflows:", -1)),
            t("span", k2, f(e.environment.workflow_count), 1)
          ]),
          t("div", $2, [
            i[7] || (i[7] = t("span", { class: "label" }, "Nodes:", -1)),
            t("span", C2, f(e.environment.node_count), 1)
          ]),
          t("div", x2, [
            i[8] || (i[8] = t("span", { class: "label" }, "Models:", -1)),
            t("span", S2, f(e.environment.model_count), 1)
          ]),
          e.environment.created_at || e.environment.last_used ? (a(), c("div", I2)) : y("", !0),
          e.environment.created_at ? (a(), c("div", E2, [
            i[9] || (i[9] = t("span", { class: "label" }, "Created:", -1)),
            t("span", T2, f(n(e.environment.created_at)), 1)
          ])) : y("", !0),
          e.environment.last_used ? (a(), c("div", P2, [
            i[10] || (i[10] = t("span", { class: "label" }, "Last Used:", -1)),
            t("span", R2, f(n(e.environment.last_used)), 1)
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        t("div", M2, [
          e.canDelete ? (a(), M(Me, {
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
          C(Me, {
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
}), L2 = /* @__PURE__ */ pe(D2, [["__scopeId", "data-v-59855453"]]), kr = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], $r = "3.12", Ya = [
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
], Cr = "auto", O2 = { class: "progress-bar" }, N2 = /* @__PURE__ */ me({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = F(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (n, l) => (a(), c("div", O2, [
      t("div", {
        class: xe(["progress-fill", e.variant]),
        style: Wt({ width: o.value })
      }, null, 6)
    ]));
  }
}), Gn = /* @__PURE__ */ pe(N2, [["__scopeId", "data-v-1beb0512"]]), A2 = { class: "task-progress" }, U2 = { class: "progress-info" }, z2 = { class: "progress-percentage" }, F2 = { class: "progress-message" }, B2 = {
  key: 0,
  class: "progress-steps"
}, V2 = { class: "step-icon" }, W2 = { class: "step-label" }, G2 = /* @__PURE__ */ me({
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
    return (l, i) => (a(), c("div", A2, [
      C(Gn, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", U2, [
        t("span", z2, f(e.progress) + "%", 1),
        t("span", F2, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), c("div", B2, [
        (a(!0), c(j, null, ge(e.steps, (r) => (a(), c("div", {
          key: r.id,
          class: xe(["step", o(r.id)])
        }, [
          t("span", V2, f(n(r.id)), 1),
          t("span", W2, f(r.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Tn = /* @__PURE__ */ pe(G2, [["__scopeId", "data-v-9d1de66c"]]), j2 = {
  key: 0,
  class: "create-env-form"
}, H2 = { class: "form-field" }, K2 = { class: "form-field" }, q2 = ["value"], Y2 = { class: "form-field" }, J2 = ["disabled"], X2 = ["value"], Q2 = { class: "form-field" }, Z2 = ["value"], e$ = { class: "form-field form-field--checkbox" }, t$ = { class: "form-checkbox" }, s$ = {
  key: 1,
  class: "create-env-progress"
}, o$ = { class: "creating-intro" }, n$ = {
  key: 0,
  class: "progress-warning"
}, a$ = {
  key: 1,
  class: "create-error"
}, l$ = { class: "error-message" }, i$ = {
  key: 1,
  class: "footer-status"
}, r$ = 10, c$ = /* @__PURE__ */ me({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: i } = at(), r = k(""), u = k($r), d = k("latest"), m = k(Cr), v = k(!1), h = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = k(!1), p = k(!1), _ = k({
      progress: 0,
      message: ""
    });
    let x = null, $ = 0;
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
    ], N = k(null);
    function T() {
      p.value || o("close");
    }
    async function S() {
      const E = r.value.trim();
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
      x || ($ = 0, x = window.setInterval(async () => {
        try {
          const E = await i();
          $ = 0, _.value = {
            progress: E.progress ?? 0,
            message: E.message,
            phase: E.phase,
            error: E.error
          }, E.state === "complete" ? (B(), o("created", E.environment_name || r.value.trim(), v.value)) : E.state === "error" ? (B(), _.value.error = E.error || E.message) : E.state === "idle" && p.value && (B(), _.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= r$ && (B(), _.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function B() {
      x && (clearInterval(x), x = null);
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
    return Qe(async () => {
      var E;
      await Jo(), (E = N.value) == null || E.focus(), I();
    }), ho(() => {
      B();
    }), (E, O) => (a(), M(vt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !p.value,
      onClose: T
    }, {
      body: g(() => [
        p.value ? (a(), c("div", s$, [
          t("p", o$, [
            O[11] || (O[11] = b(" Creating environment ", -1)),
            t("strong", null, f(r.value), 1),
            O[12] || (O[12] = b("... ", -1))
          ]),
          C(Tn, {
            progress: _.value.progress,
            message: _.value.message,
            "current-phase": _.value.phase,
            variant: _.value.error ? "error" : "default",
            "show-steps": !0,
            steps: P
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          _.value.error ? y("", !0) : (a(), c("p", n$, " This may take several minutes. Please wait... ")),
          _.value.error ? (a(), c("div", a$, [
            t("p", l$, f(_.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), c("div", j2, [
          t("div", H2, [
            O[6] || (O[6] = t("label", { class: "form-label" }, "Name", -1)),
            He(t("input", {
              ref_key: "nameInput",
              ref: N,
              "onUpdate:modelValue": O[0] || (O[0] = (re) => r.value = re),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Xt(S, ["enter"])
            }, null, 544), [
              [At, r.value]
            ])
          ]),
          t("div", K2, [
            O[7] || (O[7] = t("label", { class: "form-label" }, "Python Version", -1)),
            He(t("select", {
              "onUpdate:modelValue": O[1] || (O[1] = (re) => u.value = re),
              class: "form-select"
            }, [
              (a(!0), c(j, null, ge(Ue(kr), (re) => (a(), c("option", {
                key: re,
                value: re
              }, f(re), 9, q2))), 128))
            ], 512), [
              [ms, u.value]
            ])
          ]),
          t("div", Y2, [
            O[8] || (O[8] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            He(t("select", {
              "onUpdate:modelValue": O[2] || (O[2] = (re) => d.value = re),
              class: "form-select",
              disabled: w.value
            }, [
              (a(!0), c(j, null, ge(h.value, (re) => (a(), c("option", {
                key: re.tag_name,
                value: re.tag_name
              }, f(re.name), 9, X2))), 128))
            ], 8, J2), [
              [ms, d.value]
            ])
          ]),
          t("div", Q2, [
            O[9] || (O[9] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            He(t("select", {
              "onUpdate:modelValue": O[3] || (O[3] = (re) => m.value = re),
              class: "form-select"
            }, [
              (a(!0), c(j, null, ge(Ue(Ya), (re) => (a(), c("option", {
                key: re,
                value: re
              }, f(re) + f(re === "auto" ? " (detect GPU)" : ""), 9, Z2))), 128))
            ], 512), [
              [ms, m.value]
            ])
          ]),
          t("div", e$, [
            t("label", t$, [
              He(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": O[4] || (O[4] = (re) => v.value = re)
              }, null, 512), [
                [Ko, v.value]
              ]),
              O[10] || (O[10] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: g(() => [
        p.value ? (a(), c(j, { key: 1 }, [
          _.value.error ? (a(), M(Me, {
            key: 0,
            variant: "secondary",
            onClick: A
          }, {
            default: g(() => [...O[15] || (O[15] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), c("span", i$, " Creating environment... "))
        ], 64)) : (a(), c(j, { key: 0 }, [
          C(Me, {
            variant: "primary",
            disabled: !r.value.trim(),
            onClick: S
          }, {
            default: g(() => [...O[13] || (O[13] = [
              b(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Me, {
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
}), u$ = /* @__PURE__ */ pe(c$, [["__scopeId", "data-v-f37eaa42"]]), d$ = /* @__PURE__ */ me({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getEnvironments: l } = at(), i = k([]), r = k(!1), u = k(null), d = k(""), m = k(!1), v = k(!1), h = k(null), w = F(() => {
      if (!d.value.trim()) return i.value;
      const N = d.value.toLowerCase();
      return i.value.filter(
        (T) => {
          var S;
          return T.name.toLowerCase().includes(N) || ((S = T.current_branch) == null ? void 0 : S.toLowerCase().includes(N));
        }
      );
    });
    function p(N, T) {
      v.value = !1, n("created", N, T);
    }
    function _() {
      v.value = !0;
    }
    function x(N) {
      h.value = N;
    }
    function $(N) {
      h.value = null, n("delete", N);
    }
    async function P() {
      r.value = !0, u.value = null;
      try {
        i.value = await l();
      } catch (N) {
        u.value = N instanceof Error ? N.message : "Failed to load environments";
      } finally {
        r.value = !1;
      }
    }
    return Qe(P), s({
      loadEnvironments: P,
      openCreateModal: _
    }), (N, T) => (a(), c(j, null, [
      C(Pt, null, {
        header: g(() => [
          C(Rt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (S) => m.value = !0)
          }, {
            actions: g(() => [
              C(ie, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: g(() => [...T[6] || (T[6] = [
                  b(" Create ", -1)
                ])]),
                _: 1
              }),
              C(ie, {
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
          C(yo, {
            modelValue: d.value,
            "onUpdate:modelValue": T[1] || (T[1] = (S) => d.value = S),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          r.value ? (a(), M(Ss, {
            key: 0,
            message: "Loading environments..."
          })) : u.value ? (a(), M(Is, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            w.value.length ? (a(), M(ot, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge(w.value, (S) => (a(), M(v2, {
                  key: S.name,
                  "environment-name": S.name,
                  "is-current": S.is_current,
                  "current-branch": S.current_branch,
                  "show-last-used": !1
                }, {
                  actions: g(() => [
                    S.is_current ? y("", !0) : (a(), M(ie, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => N.$emit("switch", S.name)
                    }, {
                      default: g(() => [...T[8] || (T[8] = [
                        b(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    C(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => x(S)
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
            w.value.length ? y("", !0) : (a(), M(ts, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, Qs({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: g(() => [
                  C(ie, {
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
      C(ss, {
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
          C(ie, {
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
      h.value ? (a(), M(L2, {
        key: 0,
        environment: h.value,
        "can-delete": i.value.length > 1,
        onClose: T[4] || (T[4] = (S) => h.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : y("", !0),
      v.value ? (a(), M(u$, {
        key: 1,
        onClose: T[5] || (T[5] = (S) => v.value = !1),
        onCreated: p
      })) : y("", !0)
    ], 64));
  }
}), f$ = /* @__PURE__ */ pe(d$, [["__scopeId", "data-v-f95999f4"]]), m$ = { class: "file-path" }, v$ = { class: "file-path-text" }, p$ = ["title"], g$ = /* @__PURE__ */ me({
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
    return (l, i) => (a(), c("div", m$, [
      i[0] || (i[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", v$, f(e.path), 1),
      e.copyable ? (a(), c("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, f(o.value ? "✓" : "📋"), 9, p$)) : y("", !0)
    ]));
  }
}), h$ = /* @__PURE__ */ pe(g$, [["__scopeId", "data-v-f0982173"]]), y$ = { class: "export-blocked" }, w$ = { class: "issues-list" }, b$ = { class: "issue-message" }, _$ = {
  key: 0,
  class: "issue-details"
}, k$ = ["onClick"], $$ = { class: "issue-fix" }, C$ = /* @__PURE__ */ me({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(e) {
    const s = e, o = zs({});
    function n(l) {
      const i = s.issues[l];
      return o[l] || i.details.length <= 3 ? i.details : i.details.slice(0, 3);
    }
    return (l, i) => (a(), M(vt, {
      title: "Cannot Export",
      size: "md",
      onClose: i[1] || (i[1] = (r) => l.$emit("close"))
    }, {
      body: g(() => [
        t("div", y$, [
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
          t("div", w$, [
            (a(!0), c(j, null, ge(e.issues, (r, u) => (a(), c("div", {
              key: u,
              class: "issue-item"
            }, [
              t("div", b$, f(r.message), 1),
              r.details.length ? (a(), c("div", _$, [
                (a(!0), c(j, null, ge(n(u), (d, m) => (a(), c("div", {
                  key: m,
                  class: "issue-detail"
                }, f(d), 1))), 128)),
                r.details.length > 3 && !o[u] ? (a(), c("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => o[u] = !0
                }, " +" + f(r.details.length - 3) + " more ", 9, k$)) : y("", !0)
              ])) : y("", !0),
              t("div", $$, [
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
        C(Me, {
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
}), xr = /* @__PURE__ */ pe(C$, [["__scopeId", "data-v-b52f5e32"]]), x$ = { class: "export-warnings" }, S$ = {
  key: 0,
  class: "success-header"
}, I$ = { class: "warning-header" }, E$ = { class: "warning-summary" }, T$ = { class: "warning-title" }, P$ = { class: "models-section" }, R$ = { class: "models-list" }, M$ = { class: "model-info" }, D$ = { class: "model-filename" }, L$ = { class: "model-workflows" }, O$ = ["onClick"], N$ = /* @__PURE__ */ me({
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
      C(vt, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (v) => d.$emit("cancel"))
      }, {
        body: g(() => [
          t("div", x$, [
            e.models.length === 0 ? (a(), c("div", S$, [...m[4] || (m[4] = [
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
              t("div", I$, [
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
                t("div", E$, [
                  t("h3", T$, f(e.models.length) + " model" + f(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", P$, [
                t("div", R$, [
                  (a(!0), c(j, null, ge(r.value, (v) => (a(), c("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", M$, [
                      t("div", D$, f(v.filename), 1),
                      t("div", L$, " Used by: " + f(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (h) => i.value = v.hash
                    }, " Add Source ", 8, O$)
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
          C(Me, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (v) => d.$emit("cancel"))
          }, {
            default: g(() => [...m[7] || (m[7] = [
              b(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          C(Me, {
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
      i.value ? (a(), M(Ka, {
        key: 0,
        identifier: i.value,
        onClose: u
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Sr = /* @__PURE__ */ pe(N$, [["__scopeId", "data-v-b698d882"]]), A$ = { class: "export-card" }, U$ = { class: "export-path-row" }, z$ = { class: "export-actions" }, F$ = {
  key: 1,
  class: "export-warning"
}, B$ = /* @__PURE__ */ me({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = at(), n = k(""), l = k(!1), i = k(!1), r = k(!1), u = k(null), d = k(!1), m = k(null), v = k(!1), h = k(!1), w = F(() => l.value ? "Validating..." : i.value ? "Exporting..." : "Export Environment");
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
    async function x() {
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
    async function N() {
      var T;
      if ((T = u.value) != null && T.path) {
        r.value = !0;
        try {
          const S = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!S.ok)
            throw new Error(`Download failed: ${S.statusText}`);
          const q = await S.blob(), B = URL.createObjectURL(q), A = u.value.path.split("/").pop() || "environment-export.tar.gz", I = document.createElement("a");
          I.href = B, I.download = A, document.body.appendChild(I), I.click(), document.body.removeChild(I), URL.revokeObjectURL(B);
        } catch (S) {
          console.error("Failed to download:", S), alert(`Download failed: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          r.value = !1;
        }
      }
    }
    return (T, S) => (a(), c(j, null, [
      C(Pt, null, {
        header: g(() => [
          C(Rt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (q) => d.value = !0)
          })
        ]),
        content: g(() => [
          C(ot, { title: "EXPORT OPTIONS" }, {
            default: g(() => [
              t("div", A$, [
                S[7] || (S[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", U$, [
                  C(In, {
                    modelValue: n.value,
                    "onUpdate:modelValue": S[1] || (S[1] = (q) => n.value = q),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", z$, [
                  C(ie, {
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
          u.value ? (a(), M(ot, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: g(() => [
              C(Tt, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, Qs({
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
                    C(ut, { label: "Saved to:" }, {
                      default: g(() => [
                        C(h$, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (a(), M(ut, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (a(), c("div", F$, [...S[8] || (S[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: g(() => [
                    C(ie, {
                      variant: "primary",
                      size: "sm",
                      loading: r.value,
                      onClick: N
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
                    C(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: P
                    }, {
                      default: g(() => [...S[10] || (S[10] = [
                        b(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    C(ie, {
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
      C(ss, {
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
      v.value && m.value ? (a(), M(xr, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: S[4] || (S[4] = (q) => v.value = !1)
      }, null, 8, ["issues"])) : y("", !0),
      h.value && m.value ? (a(), M(Sr, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: _,
        onCancel: S[5] || (S[5] = (q) => h.value = !1),
        onRevalidate: x
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), V$ = /* @__PURE__ */ pe(B$, [["__scopeId", "data-v-f4d120f2"]]), W$ = { class: "file-input-wrapper" }, G$ = ["accept", "multiple", "disabled"], j$ = /* @__PURE__ */ me({
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
    }), (u, d) => (a(), c("div", W$, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: r
      }, null, 40, G$),
      C(ie, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: i
      }, {
        default: g(() => [
          Ge(u.$slots, "default", {}, () => [
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
}), H$ = /* @__PURE__ */ pe(j$, [["__scopeId", "data-v-cd192091"]]), K$ = {
  key: 0,
  class: "drop-zone-empty"
}, q$ = { class: "drop-zone-text" }, Y$ = { class: "drop-zone-primary" }, J$ = { class: "drop-zone-secondary" }, X$ = { class: "drop-zone-actions" }, Q$ = {
  key: 1,
  class: "drop-zone-file"
}, Z$ = { class: "file-info" }, eC = { class: "file-details" }, tC = { class: "file-name" }, sC = { class: "file-size" }, oC = /* @__PURE__ */ me({
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
      var N;
      $.stopPropagation(), i.value = 0, n.value = !1;
      const P = (N = $.dataTransfer) == null ? void 0 : N.files;
      P && P.length > 0 && _(P[0]);
    }
    function p($) {
      $.length > 0 && _($[0]);
    }
    function _($) {
      l.value = $, o("fileSelected", $);
    }
    function x() {
      l.value = null, o("clear");
    }
    return ($, P) => (a(), c("div", {
      class: xe(["file-drop-zone", { "drop-active": n.value, "has-file": r.value }]),
      onDragenter: nt(m, ["prevent"]),
      onDragover: nt(v, ["prevent"]),
      onDragleave: nt(h, ["prevent"]),
      onDrop: nt(w, ["prevent"])
    }, [
      r.value ? (a(), c("div", Q$, [
        t("div", Z$, [
          P[1] || (P[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", eC, [
            t("div", tC, f(u.value), 1),
            t("div", sC, f(d.value), 1)
          ])
        ]),
        C(ie, {
          variant: "ghost",
          size: "xs",
          onClick: x,
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
      ])) : (a(), c("div", K$, [
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
        t("div", q$, [
          t("p", Y$, f(e.primaryText), 1),
          t("p", J$, f(e.secondaryText), 1)
        ]),
        t("div", X$, [
          C(H$, {
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
}), nC = /* @__PURE__ */ pe(oC, [["__scopeId", "data-v-0f79cb86"]]), aC = { class: "import-preview" }, lC = { class: "preview-header" }, iC = {
  key: 0,
  class: "source-env"
}, rC = { class: "preview-content" }, cC = { class: "preview-section" }, uC = { class: "section-header" }, dC = { class: "section-info" }, fC = { class: "section-count" }, mC = {
  key: 0,
  class: "item-list"
}, vC = { class: "item-name" }, pC = {
  key: 0,
  class: "item-more"
}, gC = { class: "preview-section" }, hC = { class: "section-header" }, yC = { class: "section-info" }, wC = { class: "section-count" }, bC = {
  key: 0,
  class: "item-list"
}, _C = { class: "item-details" }, kC = { class: "item-name" }, $C = { class: "item-meta" }, CC = {
  key: 0,
  class: "item-more"
}, xC = { class: "preview-section" }, SC = { class: "section-header" }, IC = { class: "section-info" }, EC = { class: "section-count" }, TC = {
  key: 0,
  class: "item-list"
}, PC = { class: "item-name" }, RC = {
  key: 0,
  class: "item-more"
}, MC = {
  key: 0,
  class: "preview-section"
}, DC = { class: "git-info" }, LC = /* @__PURE__ */ me({
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
    return (r, u) => (a(), c("div", aC, [
      t("div", lC, [
        C(Ot, null, {
          default: g(() => [...u[0] || (u[0] = [
            b("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), c("span", iC, [
          u[1] || (u[1] = b(" From: ", -1)),
          C(ka, null, {
            default: g(() => [
              b(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", rC, [
        t("div", cC, [
          t("div", uC, [
            u[3] || (u[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", dC, [
              u[2] || (u[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", fC, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), c("div", mC, [
            (a(!0), c(j, null, ge(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), c("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", vC, f(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), c("div", pC, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", gC, [
          t("div", hC, [
            u[6] || (u[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", yC, [
              u[5] || (u[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", wC, f(n.value) + " file" + f(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), c("div", bC, [
            (a(!0), c(j, null, ge(e.models.slice(0, e.maxPreviewItems), (d) => (a(), c("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", _C, [
                t("span", kC, f(d.filename), 1),
                t("span", $C, f(i(d.size)) + " • " + f(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), c("div", CC, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", xC, [
          t("div", SC, [
            u[9] || (u[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", IC, [
              u[8] || (u[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", EC, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), c("div", TC, [
            (a(!0), c(j, null, ge(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), c("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", PC, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), c("div", RC, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), c("div", MC, [
          u[11] || (u[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", DC, [
            e.gitBranch ? (a(), M(ut, {
              key: 0,
              label: "Branch"
            }, {
              default: g(() => [
                C(ka, null, {
                  default: g(() => [
                    b(f(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (a(), M(ut, {
              key: 1,
              label: "Commit"
            }, {
              default: g(() => [
                C(vr, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), OC = /* @__PURE__ */ pe(LC, [["__scopeId", "data-v-182fe113"]]), NC = { class: "import-config" }, AC = { class: "config-container" }, UC = { class: "config-field" }, zC = { class: "input-wrapper" }, FC = ["value"], BC = {
  key: 0,
  class: "validating-indicator"
}, VC = {
  key: 1,
  class: "valid-indicator"
}, WC = {
  key: 0,
  class: "field-error"
}, GC = { class: "config-field" }, jC = { class: "strategy-options" }, HC = ["value", "checked", "onChange"], KC = { class: "strategy-content" }, qC = { class: "strategy-label" }, YC = { class: "strategy-description" }, JC = { class: "config-field switch-field" }, XC = { class: "switch-label" }, QC = ["checked"], ZC = { class: "advanced-section" }, e3 = { class: "advanced-content" }, t3 = { class: "config-field" }, s3 = ["value"], o3 = ["value"], n3 = /* @__PURE__ */ me({
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
    xt(() => o.nameError, (v) => {
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
    return (v, h) => (a(), c("div", NC, [
      C(Ot, null, {
        default: g(() => [...h[2] || (h[2] = [
          b("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", AC, [
        t("div", UC, [
          C(pn, { required: "" }, {
            default: g(() => [...h[3] || (h[3] = [
              b("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", zC, [
            t("input", {
              type: "text",
              class: xe(["name-input", { error: e.nameError || e.name.length === 0, valid: i.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: m
            }, null, 42, FC),
            l.value ? (a(), c("span", BC, "...")) : i.value ? (a(), c("span", VC, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), c("div", WC, f(e.nameError), 1)) : y("", !0),
          h[4] || (h[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", GC, [
          C(pn, null, {
            default: g(() => [...h[5] || (h[5] = [
              b("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", jC, [
            (a(), c(j, null, ge(r, (w) => t("label", {
              key: w.value,
              class: xe(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (p) => n("update:modelStrategy", w.value)
              }, null, 40, HC),
              t("div", KC, [
                t("span", qC, f(w.label), 1),
                t("span", YC, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", JC, [
          t("label", XC, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: h[0] || (h[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, QC),
            h[6] || (h[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", ZC, [
          h[8] || (h[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", e3, [
            t("div", t3, [
              C(pn, null, {
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
                (a(!0), c(j, null, ge(Ue(Ya), (w) => (a(), c("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, o3))), 128))
              ], 40, s3)
            ])
          ])
        ])
      ])
    ]));
  }
}), a3 = /* @__PURE__ */ pe(n3, [["__scopeId", "data-v-89ea06a1"]]), l3 = { class: "import-flow" }, i3 = {
  key: 0,
  class: "import-empty"
}, r3 = { class: "git-import-section" }, c3 = { class: "git-url-input-row" }, u3 = ["disabled"], d3 = {
  key: 0,
  class: "git-error"
}, f3 = {
  key: 1,
  class: "import-configure"
}, m3 = { class: "selected-file-bar" }, v3 = {
  key: 0,
  class: "file-bar-content"
}, p3 = { class: "file-bar-info" }, g3 = { class: "file-bar-name" }, h3 = { class: "file-bar-size" }, y3 = {
  key: 1,
  class: "file-bar-content"
}, w3 = { class: "file-bar-info" }, b3 = { class: "file-bar-name" }, _3 = {
  key: 0,
  class: "preview-loading"
}, k3 = { class: "import-actions" }, $3 = {
  key: 2,
  class: "import-progress"
}, C3 = { class: "creating-intro" }, x3 = {
  key: 0,
  class: "progress-warning"
}, S3 = {
  key: 1,
  class: "import-error"
}, I3 = { class: "error-message" }, E3 = {
  key: 3,
  class: "import-complete"
}, T3 = { class: "complete-message" }, P3 = { class: "complete-title" }, R3 = { class: "complete-details" }, M3 = { class: "complete-actions" }, D3 = /* @__PURE__ */ me({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var Je, _e, Se, Ve;
    const n = e, l = o, { previewTarballImport: i, previewGitImport: r, validateEnvironmentName: u, executeImport: d, executeGitImport: m, getImportProgress: v } = at();
    let h = null;
    const w = k(null), p = k(n.resumeImport ?? !1), _ = k(!1), x = k(!1), $ = k(""), P = k(!1), N = k(null), T = k(""), S = k(null), q = k(!1), B = k(null), A = k(null), I = k({
      name: ((Je = n.initialProgress) == null ? void 0 : Je.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), E = k(null), O = k({
      message: ((_e = n.initialProgress) == null ? void 0 : _e.message) ?? "Preparing import...",
      phase: ((Se = n.initialProgress) == null ? void 0 : Se.phase) ?? "",
      progress: ((Ve = n.initialProgress) == null ? void 0 : Ve.progress) ?? 0,
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
      const ye = A.value;
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
    }), H = F(() => !P.value && !N.value && A.value && I.value.name.length > 0 && !E.value && (w.value || S.value));
    async function te(ye) {
      w.value = ye, P.value = !0, N.value = null, A.value = null;
      try {
        const le = await i(ye);
        A.value = le;
      } catch (le) {
        N.value = le instanceof Error ? le.message : "Failed to analyze file", console.error("Preview error:", le);
      } finally {
        P.value = !1;
      }
    }
    function Z() {
      w.value = null, S.value = null, T.value = "", B.value = null, _.value = !1, x.value = !1, $.value = "", A.value = null, N.value = null, I.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, E.value = null, l("source-cleared");
    }
    function U() {
      De(), Z(), p.value = !1, P.value = !1, q.value = !1, O.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function z() {
      if (T.value.trim()) {
        q.value = !0, B.value = null;
        try {
          const ye = await r(T.value.trim());
          S.value = T.value.trim(), A.value = ye;
        } catch (ye) {
          B.value = ye instanceof Error ? ye.message : "Failed to analyze repository";
        } finally {
          q.value = !1;
        }
      }
    }
    function R(ye) {
      try {
        const le = new URL(ye);
        return le.host + le.pathname.replace(/\.git$/, "");
      } catch {
        return ye;
      }
    }
    async function be(ye) {
      if (!ye) {
        E.value = "Environment name is required";
        return;
      }
      try {
        const le = await u(ye);
        E.value = le.valid ? null : le.error || "Invalid name";
      } catch {
        E.value = "Failed to validate name";
      }
    }
    async function ve() {
      if (I.value.name && !(!w.value && !S.value)) {
        p.value = !0, _.value = !1, O.value = { message: `Creating environment '${I.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let ye;
          if (w.value)
            ye = await d(
              w.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else if (S.value)
            ye = await m(
              S.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ye.status === "started" ? Ee() : (x.value = !1, $.value = ye.message, p.value = !1, _.value = !0);
        } catch (ye) {
          x.value = !1, $.value = ye instanceof Error ? ye.message : "Unknown error occurred during import", p.value = !1, _.value = !0;
        }
      }
    }
    async function Ee() {
      if (h) return;
      const ye = async () => {
        try {
          const Fe = await v();
          return O.value = {
            message: Fe.message,
            phase: Fe.phase || "",
            progress: Fe.progress ?? (Fe.state === "importing" ? 50 : 0),
            error: Fe.error || null
          }, Fe.state === "complete" ? (De(), x.value = !0, $.value = `Environment '${Fe.environment_name}' created successfully`, p.value = !1, _.value = !0, Fe.environment_name && l("import-complete", Fe.environment_name, I.value.switchAfterImport), !1) : Fe.state === "error" ? (De(), x.value = !1, $.value = Fe.error || Fe.message, p.value = !1, _.value = !0, !1) : !0;
        } catch (Fe) {
          return console.error("Failed to poll import progress:", Fe), !0;
        }
      };
      await ye() && (h = setInterval(async () => {
        await ye() || De();
      }, 2e3));
    }
    function De() {
      h && (clearInterval(h), h = null);
    }
    function je(ye) {
      return ye < 1024 ? `${ye} B` : ye < 1024 * 1024 ? `${(ye / 1024).toFixed(1)} KB` : ye < 1024 * 1024 * 1024 ? `${(ye / (1024 * 1024)).toFixed(1)} MB` : `${(ye / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Qe(async () => {
      try {
        const ye = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", ye.state, ye), ye.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", ye.environment_name), p.value = !0, I.value.name = ye.environment_name || I.value.name || "", O.value = {
          progress: ye.progress ?? 0,
          message: ye.message || "Importing...",
          phase: ye.phase || "",
          error: null
        }, Ee());
      } catch (ye) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", ye);
      }
    }), s({
      handleReset: U,
      isImporting: p,
      canImport: H
    }), (ye, le) => {
      var Fe;
      return a(), c("div", l3, [
        !w.value && !S.value && !p.value ? (a(), c("div", i3, [
          C(nC, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: te
          }),
          le[7] || (le[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", r3, [
            le[5] || (le[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", c3, [
              He(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": le[0] || (le[0] = (Ie) => T.value = Ie),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Xt(z, ["enter"]),
                disabled: q.value
              }, null, 40, u3), [
                [At, T.value]
              ]),
              C(ie, {
                variant: "primary",
                size: "sm",
                disabled: !T.value.trim() || q.value,
                onClick: z
              }, {
                default: g(() => [
                  b(f(q.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            B.value ? (a(), c("div", d3, f(B.value), 1)) : y("", !0),
            le[6] || (le[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || S.value) && !p.value && !_.value ? (a(), c("div", f3, [
          t("div", m3, [
            w.value ? (a(), c("div", v3, [
              le[8] || (le[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", p3, [
                t("div", g3, f(w.value.name), 1),
                t("div", h3, f(je(w.value.size)), 1)
              ])
            ])) : S.value ? (a(), c("div", y3, [
              le[10] || (le[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", w3, [
                t("div", b3, f(R(S.value)), 1),
                le[9] || (le[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            C(ie, {
              variant: "ghost",
              size: "sm",
              onClick: Z
            }, {
              default: g(() => [...le[11] || (le[11] = [
                b(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          P.value ? (a(), c("div", _3, [...le[12] || (le[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : N.value ? (a(), M(Kt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [N.value]
          }, null, 8, ["details"])) : A.value ? (a(), M(OC, {
            key: 2,
            "source-environment": Y.value.sourceEnvironment,
            workflows: Y.value.workflows,
            models: Y.value.models,
            nodes: Y.value.nodes,
            "git-branch": Y.value.gitBranch,
            "git-commit": Y.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          A.value ? (a(), M(a3, {
            key: 3,
            name: I.value.name,
            "onUpdate:name": le[1] || (le[1] = (Ie) => I.value.name = Ie),
            "model-strategy": I.value.modelStrategy,
            "onUpdate:modelStrategy": le[2] || (le[2] = (Ie) => I.value.modelStrategy = Ie),
            "torch-backend": I.value.torchBackend,
            "onUpdate:torchBackend": le[3] || (le[3] = (Ie) => I.value.torchBackend = Ie),
            "switch-after-import": I.value.switchAfterImport,
            "onUpdate:switchAfterImport": le[4] || (le[4] = (Ie) => I.value.switchAfterImport = Ie),
            "name-error": E.value,
            onValidateName: be
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          I.value.modelStrategy === "skip" && ((Fe = A.value) != null && Fe.models_needing_download) ? (a(), M(Kt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${A.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", k3, [
            C(ie, {
              variant: "secondary",
              size: "md",
              onClick: Z
            }, {
              default: g(() => [...le[13] || (le[13] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(ie, {
              variant: "primary",
              size: "md",
              disabled: !H.value,
              onClick: ve
            }, {
              default: g(() => [...le[14] || (le[14] = [
                b(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (a(), c("div", $3, [
          t("p", C3, [
            le[15] || (le[15] = b(" Importing environment ", -1)),
            t("strong", null, f(I.value.name), 1),
            le[16] || (le[16] = b("... ", -1))
          ]),
          C(Tn, {
            progress: O.value.progress,
            message: O.value.message,
            "current-phase": O.value.phase,
            variant: O.value.error ? "error" : "default",
            "show-steps": !0,
            steps: re
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          O.value.error ? y("", !0) : (a(), c("p", x3, " This may take several minutes. Please wait... ")),
          O.value.error ? (a(), c("div", S3, [
            t("p", I3, f(O.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), c("div", E3, [
          t("div", {
            class: xe(["complete-icon", x.value ? "success" : "error"])
          }, f(x.value ? "✓" : "✕"), 3),
          t("div", T3, [
            t("div", P3, f(x.value ? "Import Successful" : "Import Failed"), 1),
            t("div", R3, f($.value), 1)
          ]),
          t("div", M3, [
            C(ie, {
              variant: "primary",
              size: "md",
              onClick: U
            }, {
              default: g(() => [...le[17] || (le[17] = [
                b(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Ir = /* @__PURE__ */ pe(D3, [["__scopeId", "data-v-72cbc04e"]]), L3 = /* @__PURE__ */ me({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, n = k(!1);
    function l(i, r) {
      r && o("import-complete-switch", i);
    }
    return (i, r) => (a(), c(j, null, [
      C(Pt, null, {
        header: g(() => [
          C(Rt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: r[0] || (r[0] = (u) => n.value = !0)
          })
        ]),
        content: g(() => [
          C(Ir, { onImportComplete: l })
        ]),
        _: 1
      }),
      C(ss, {
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
}), O3 = /* @__PURE__ */ pe(L3, [["__scopeId", "data-v-e13bfe76"]]), rn = no(), N3 = 5e3, to = k([]), la = k(!1), ia = k(null);
let xo = null;
async function cn(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function Er(e) {
  const s = F(
    () => to.value.filter((p) => p.status === "running")
  ), o = F(
    () => to.value.filter((p) => p.status === "deploying")
  ), n = F(
    () => to.value.filter((p) => p.status === "stopped")
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
    return [...to.value].sort(
      (_, x) => (p[_.status] ?? 5) - (p[x.status] ?? 5)
    );
  });
  async function r() {
    la.value = !0, ia.value = null;
    try {
      let p;
      if (!rn) {
        const _ = await cn("/v2/comfygit/deploy/instances");
        if (!_.ok)
          throw new Error(`Failed to fetch instances: ${_.status}`);
        p = await _.json();
      }
      to.value = p.instances;
    } catch (p) {
      ia.value = p instanceof Error ? p.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", p);
    } finally {
      la.value = !1;
    }
  }
  function u(p, _) {
    if (p.provider === "custom" && p.worker_name) {
      const x = p.id.includes(":") ? p.id.split(":").slice(1).join(":") : p.id;
      return _ === "terminate" ? `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${x}` : `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${x}/${_}`;
    }
    return _ === "terminate" ? `/v2/comfygit/deploy/${p.provider}/${p.id}` : `/v2/comfygit/deploy/${p.provider}/${p.id}/${_}`;
  }
  async function d(p) {
    try {
      if (!rn) {
        const _ = u(p, "stop"), x = await cn(_, { method: "POST" });
        if (!x.ok) {
          const $ = await x.json();
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
      if (!rn) {
        const _ = u(p, "start"), x = await cn(_, { method: "POST" });
        if (!x.ok) {
          const $ = await x.json();
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
      if (!rn) {
        const _ = u(p, "terminate"), x = await cn(_, { method: "DELETE" });
        if (!x.ok) {
          const $ = await x.json();
          throw new Error($.message || "Failed to terminate instance");
        }
      }
      await r();
    } catch (_) {
      throw console.error("[useDeployInstances] terminateInstance error:", _), _;
    }
  }
  function h() {
    xo || (xo = window.setInterval(r, N3));
  }
  function w() {
    xo && (clearInterval(xo), xo = null);
  }
  return xt(o, (p) => {
    p.length > 0 && h();
  }, { immediate: !0 }), e != null && e.autoStart && (r(), h()), {
    // State
    instances: to,
    isLoading: la,
    error: ia,
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
const A3 = { class: "instance-header" }, U3 = { class: "provider-badge" }, z3 = { class: "instance-name" }, F3 = {
  key: 0,
  class: "spinner"
}, B3 = { class: "instance-details" }, V3 = {
  key: 0,
  class: "detail"
}, W3 = {
  key: 1,
  class: "detail instance-url"
}, G3 = {
  key: 2,
  class: "detail"
}, j3 = {
  key: 3,
  class: "detail"
}, H3 = {
  key: 4,
  class: "detail total-cost"
}, K3 = {
  key: 0,
  class: "deployment-progress"
}, q3 = { class: "progress-message" }, Y3 = { class: "instance-actions" }, J3 = /* @__PURE__ */ me({
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
      class: xe(["instance-card", l.value])
    }, [
      t("div", A3, [
        t("span", U3, f(o.value), 1),
        t("span", z3, f(e.instance.name), 1),
        t("span", {
          class: xe(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (a(), c("span", F3)) : y("", !0),
          b(" " + f(n.value), 1)
        ], 2)
      ]),
      t("div", B3, [
        e.instance.gpu_type ? (a(), c("span", V3, f(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (a(), c("span", W3, f(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (a(), c("span", G3, f(u(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (a(), c("span", j3, "$" + f(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (a(), c("span", H3, "$" + f(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (a(), c("div", K3, [
        t("div", q3, f(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (a(), M(Gn, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", Y3, [
        e.instance.status === "running" && e.instance.comfyui_url ? (a(), M(ie, {
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
        e.instance.console_url && e.instance.provider !== "custom" ? (a(), M(ie, {
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
        e.instance.status === "running" ? (a(), M(ie, {
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
        e.instance.status === "stopped" ? (a(), M(ie, {
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
        C(ie, {
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
}), X3 = /* @__PURE__ */ pe(J3, [["__scopeId", "data-v-746c3894"]]), Q3 = { class: "instances-tab" }, Z3 = { class: "instances-header" }, e5 = {
  key: 0,
  class: "loading-state"
}, t5 = {
  key: 1,
  class: "empty-state"
}, s5 = {
  key: 2,
  class: "instances-list"
}, o5 = /* @__PURE__ */ me({
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
    return (n, l) => (a(), c("div", Q3, [
      t("div", Z3, [
        C(Ot, null, {
          default: g(() => [...l[4] || (l[4] = [
            b("Active Instances", -1)
          ])]),
          _: 1
        }),
        C(ie, {
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
      e.isLoading && e.instances.length === 0 ? (a(), c("div", e5, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        b(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (a(), c("div", t5, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (a(), c("div", s5, [
        (a(!0), c(j, null, ge(o.value, (i) => (a(), M(X3, {
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
}), n5 = /* @__PURE__ */ pe(o5, [["__scopeId", "data-v-ba614fc3"]]), a5 = { class: "remote-header" }, l5 = { class: "remote-info" }, i5 = { class: "remote-icon" }, r5 = { class: "remote-name" }, c5 = {
  key: 0,
  class: "default-badge"
}, u5 = {
  key: 1,
  class: "sync-badge"
}, d5 = {
  key: 0,
  class: "ahead"
}, f5 = {
  key: 1,
  class: "behind"
}, m5 = {
  key: 1,
  class: "synced"
}, v5 = ["href"], p5 = {
  key: 1,
  class: "remote-url-text"
}, g5 = { class: "remote-actions" }, h5 = /* @__PURE__ */ me({
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
      class: xe(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", a5, [
        t("div", l5, [
          t("span", i5, f(o.value ? "🔗" : "🌐"), 1),
          t("span", r5, f(e.remote.name), 1),
          o.value ? (a(), c("span", c5, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), c("span", u5, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), c(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), c("span", d5, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), c("span", f5, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), c("span", m5, "✓ synced"))
          ])) : y("", !0)
        ]),
        n.value ? (a(), c("a", {
          key: 0,
          href: n.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: r[0] || (r[0] = nt(() => {
          }, ["stop"]))
        }, f(l.value), 9, v5)) : (a(), c("span", p5, f(l.value), 1))
      ]),
      t("div", g5, [
        C(ie, {
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
        e.syncStatus && e.syncStatus.ahead > 0 ? (a(), M(ie, {
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
        C(ie, {
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
}), Tr = /* @__PURE__ */ pe(h5, [["__scopeId", "data-v-d687d161"]]), y5 = { class: "runpod-tab" }, w5 = { class: "api-key-card" }, b5 = { class: "api-key-row" }, _5 = { class: "api-key-input-wrapper" }, k5 = ["type", "disabled"], $5 = ["title"], C5 = { class: "status-icon" }, x5 = { class: "status-text" }, S5 = {
  key: 0,
  class: "credit-balance"
}, I5 = { class: "config-card" }, E5 = { class: "config-row" }, T5 = ["disabled"], P5 = {
  key: 0,
  value: ""
}, R5 = {
  key: 1,
  value: "",
  disabled: ""
}, M5 = ["value", "disabled"], D5 = { class: "config-row" }, L5 = {
  key: 0,
  class: "loading-inline"
}, O5 = { class: "no-volumes-state" }, N5 = { class: "no-volumes-text" }, A5 = ["value"], U5 = { class: "config-row" }, z5 = ["disabled"], F5 = {
  key: 0,
  value: ""
}, B5 = {
  key: 1,
  value: ""
}, V5 = {
  key: 2,
  value: ""
}, W5 = ["value"], G5 = { class: "config-row" }, j5 = { class: "radio-group" }, H5 = { class: "radio-option" }, K5 = { class: "radio-label" }, q5 = { class: "radio-option disabled" }, Y5 = { class: "radio-label" }, J5 = { class: "config-row" }, X5 = { class: "radio-group" }, Q5 = { class: "radio-option" }, Z5 = { class: "radio-label" }, ex = { class: "radio-option disabled" }, tx = { class: "radio-label" }, sx = { class: "config-row" }, ox = {
  key: 0,
  class: "loading-text"
}, nx = {
  key: 1,
  class: "empty-remotes"
}, ax = { class: "remotes-list" }, lx = {
  key: 0,
  class: "sync-warning"
}, ix = { class: "warning-content" }, rx = { class: "remotes-footer" }, cx = { class: "summary-card" }, ux = {
  key: 0,
  class: "loading-text"
}, dx = { class: "summary-row" }, fx = { class: "summary-value" }, mx = { class: "summary-row" }, vx = { class: "summary-value" }, px = { class: "summary-row" }, gx = { class: "summary-value" }, hx = {
  key: 0,
  class: "summary-sub-row"
}, yx = { class: "summary-sub-label" }, wx = {
  key: 1,
  class: "summary-sub-row warning"
}, bx = { class: "summary-sub-label" }, _x = { class: "summary-row" }, kx = { class: "summary-value" }, $x = { class: "summary-row" }, Cx = { class: "summary-value" }, xx = { class: "deployment-summary" }, Sx = { class: "summary-columns" }, Ix = { class: "summary-column" }, Ex = { class: "pricing-row" }, Tx = { class: "pricing-value" }, Px = { class: "pricing-row" }, Rx = { class: "pricing-value" }, Mx = { class: "pricing-row" }, Dx = { class: "pricing-value" }, Lx = { class: "pricing-row total" }, Ox = { class: "pricing-value" }, Nx = { class: "summary-column" }, Ax = { class: "spec-row" }, Ux = { class: "spec-row" }, zx = {
  key: 0,
  class: "spec-row"
}, Fx = {
  key: 1,
  class: "spec-row spot-warning"
}, Bx = {
  key: 4,
  class: "deploy-actions"
}, Vx = { class: "progress-content" }, Wx = { class: "phase-indicator" }, Gx = { key: 0 }, jx = { key: 1 }, Hx = { key: 2 }, Kx = {
  key: 3,
  class: "spinner"
}, qx = { class: "phase-text" }, Yx = { class: "phase-name" }, Jx = { class: "phase-detail" }, Xx = {
  key: 0,
  class: "ready-actions"
}, Qx = { class: "console-link" }, Zx = ["href"], e8 = /* @__PURE__ */ me({
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
      pushToRemote: x,
      getDataCenters: $
    } = at(), P = k(!1), N = k(""), T = k(!1), S = k(!1), q = k(null), B = k(null), A = k(""), I = k(""), E = k(""), O = k("SECURE"), re = k("ON_DEMAND"), Y = k("my-comfyui-deploy"), H = k([]), te = k({}), Z = k(!1), U = k(null), z = k(null), R = k(null), be = k([]), ve = k(!1), Ee = k([]), De = k(!1), je = k([]), Je = k(!1), _e = k(null), Se = k(!1), Ve = k(!1), ye = k(null), le = k(!1), Fe = k(null), Ie = k(null), L = k(null), V = k(!1), oe = k(null), ae = k(!1), de = k(!1), fe = F(() => Ee.value.find((he) => he.id === I.value) || null), ke = F(() => A.value ? Ee.value.filter((he) => he.data_center_id === A.value) : Ee.value), $e = F(() => je.value.filter((he) => he.available)), ne = F(() => U.value && te.value[U.value] || null), ue = F(() => {
      if (!U.value) return null;
      const he = H.value.find((Q) => Q.name === U.value);
      return (he == null ? void 0 : he.fetch_url) || null;
    }), Re = F(() => T.value && I.value && E.value && ue.value && !Ve.value && !V.value), Ce = (he) => {
      const Q = je.value.find((pt) => pt.id === E.value);
      if (!Q) return "0.00";
      if (he === "SECURE") return (Q.securePrice ?? 0).toFixed(2);
      if (he === "COMMUNITY") return (Q.communityPrice ?? 0).toFixed(2);
      const We = O.value === "SECURE";
      return he === "ON_DEMAND" ? We ? (Q.securePrice ?? 0).toFixed(2) : (Q.communityPrice ?? 0).toFixed(2) : We ? (Q.secureSpotPrice ?? 0).toFixed(2) : (Q.communitySpotPrice ?? 0).toFixed(2);
    }, ee = F(() => {
      const he = je.value.find((os) => os.id === E.value), Q = Ee.value.find((os) => os.id === I.value);
      if (!he) return null;
      const We = O.value === "SECURE", pt = re.value === "SPOT";
      let Ht;
      pt ? Ht = We ? he.secureSpotPrice ?? 0 : he.communitySpotPrice ?? 0 : Ht = We ? he.securePrice ?? 0 : he.communityPrice ?? 0;
      const ps = Q ? Q.size_gb * 14e-5 : 0, gs = 4e-3;
      return {
        gpu: Ht,
        volume: ps,
        container: gs,
        total: Ht + ps + gs
      };
    });
    async function K() {
      await rt(), await Promise.all([bt(), X()]);
    }
    async function X() {
      Z.value = !0;
      try {
        const he = await w();
        H.value = he.remotes, await Promise.all(
          he.remotes.map(async (We) => {
            const pt = await p(We.name);
            pt && (te.value[We.name] = pt);
          })
        );
        const Q = he.remotes.find((We) => We.is_default);
        Q ? U.value = Q.name : he.remotes.length > 0 && (U.value = he.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        Z.value = !1;
      }
    }
    async function D(he) {
      z.value = he;
      try {
        await _(he);
        const Q = await p(he);
        Q && (te.value[he] = Q), o("toast", `Fetched from ${he}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        z.value = null;
      }
    }
    async function W(he) {
      R.value = he;
      try {
        await x(he, { force: !1 });
        const Q = await p(he);
        Q && (te.value[he] = Q), o("toast", `Pushed to ${he}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        R.value = null;
      }
    }
    function ce(he) {
      U.value = he;
    }
    async function Te() {
      if (N.value) {
        S.value = !0, q.value = null;
        try {
          const he = await l(N.value, !0);
          he.status === "success" ? (T.value = !0, B.value = he.credit_balance ?? null, q.value = { type: "success", message: he.message }, await K()) : q.value = { type: "error", message: he.message };
        } catch (he) {
          q.value = {
            type: "error",
            message: he instanceof Error ? he.message : "Connection test failed"
          };
        } finally {
          S.value = !1;
        }
      }
    }
    async function Ke() {
      try {
        await v(), N.value = "", T.value = !1, q.value = null, B.value = null, be.value = [], A.value = "", Ee.value = [], I.value = "", je.value = [], E.value = "", _e.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function rt() {
      De.value = !0, ve.value = !0;
      try {
        const he = await i();
        Ee.value = he.volumes;
        const Q = /* @__PURE__ */ new Map();
        for (const We of he.volumes)
          We.data_center_id && !Q.has(We.data_center_id) && Q.set(We.data_center_id, {
            id: We.data_center_id,
            name: We.data_center_name || We.data_center_id,
            available: !0
          });
        if (he.volumes.length === 0) {
          const We = await $();
          be.value = We.data_centers;
        } else
          be.value = Array.from(Q.values());
        if (Ee.value.length > 0) {
          const We = Ee.value[0];
          I.value = We.id, We.data_center_id && (A.value = We.data_center_id, await wt(We.data_center_id));
        } else be.value.length > 0 && (A.value = be.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        De.value = !1, ve.value = !1;
      }
    }
    async function wt(he) {
      Je.value = !0;
      try {
        const Q = await r(he);
        je.value = Q.gpu_types;
        const We = je.value.find((pt) => pt.available);
        We ? E.value = We.id : E.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        Je.value = !1;
      }
    }
    xt(A, async (he) => {
      if (!he || De.value) return;
      const Q = Ee.value.find((We) => We.id === I.value);
      Q && Q.data_center_id !== he && (I.value = ""), await wt(he);
    }), xt(I, async (he) => {
      if (!he) {
        je.value = [], E.value = "";
        return;
      }
      if (De.value) return;
      const Q = Ee.value.find((We) => We.id === he);
      Q && Q.data_center_id !== A.value ? A.value = Q.data_center_id : Q && await wt(Q.data_center_id);
    });
    async function bt() {
      Se.value = !0;
      try {
        _e.value = await n();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        Se.value = !1;
      }
    }
    async function ct() {
      if (!(!E.value || !I.value)) {
        V.value = !0, ye.value = null;
        try {
          const he = await h();
          oe.value = he, he.can_export ? he.warnings.models_without_sources.length > 0 ? de.value = !0 : await vs() : ae.value = !0;
        } catch (he) {
          ye.value = {
            status: "error",
            message: he instanceof Error ? he.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          V.value = !1;
        }
      }
    }
    async function ft() {
      de.value = !1, await vs();
    }
    async function Gt() {
      try {
        const he = await h();
        oe.value = he;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function vs() {
      Ve.value = !0;
      try {
        let he;
        if (re.value === "SPOT") {
          const We = je.value.find((pt) => pt.id === E.value);
          We && (he = O.value === "SECURE" ? We.secureSpotPrice : We.communitySpotPrice);
        }
        const Q = await u({
          gpu_type_id: E.value,
          pod_name: Y.value || "my-comfyui-deploy",
          network_volume_id: I.value,
          cloud_type: O.value,
          pricing_type: re.value,
          spot_bid: he,
          import_source: ue.value
        });
        ye.value = Q, Q.status === "success" && Q.pod_id ? (Fe.value = Q.pod_id, le.value = !0, jt(Q.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", Q.message, "error");
      } catch (he) {
        ye.value = {
          status: "error",
          message: he instanceof Error ? he.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        Ve.value = !1;
      }
    }
    function jt(he) {
      Es(he), L.value = window.setInterval(() => Es(he), 3e3);
    }
    function Fs() {
      L.value && (clearInterval(L.value), L.value = null);
    }
    async function Es(he) {
      try {
        const Q = await d(he);
        Ie.value = Q, (Q.phase === "READY" || Q.phase === "ERROR" || Q.phase === "STOPPED") && (Fs(), Q.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (Q) {
        console.error("Failed to poll deployment status:", Q);
      }
    }
    function Zs() {
      le.value = !1, Fs(), Fe.value = null, Ie.value = null;
    }
    function wo() {
      var he;
      (he = Ie.value) != null && he.comfyui_url && window.open(Ie.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function bo(he) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[he || ""] || "Initializing...";
    }
    function _o(he) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[he || ""] ?? 10;
    }
    return Qe(async () => {
      try {
        const he = await m(!0);
        he.has_key && he.key_preview && (N.value = `****${he.key_preview}`, he.valid ? (T.value = !0, B.value = he.credit_balance ?? null, q.value = { type: "success", message: "Connected to RunPod" }, await K()) : he.error && (q.value = { type: "error", message: he.error }));
      } catch {
      }
    }), ho(() => {
      Fs();
    }), (he, Q) => {
      var We, pt, Ht, ps, gs, os;
      return a(), c(j, null, [
        t("div", y5, [
          C(ot, { title: "RUNPOD API KEY" }, {
            default: g(() => [
              t("div", w5, [
                t("div", b5, [
                  t("div", _5, [
                    He(t("input", {
                      "onUpdate:modelValue": Q[0] || (Q[0] = (Le) => N.value = Le),
                      type: P.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: T.value
                    }, null, 8, k5), [
                      [Wn, N.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: Q[1] || (Q[1] = (Le) => P.value = !P.value),
                      title: P.value ? "Hide key" : "Show key"
                    }, f(P.value ? "👁" : "👁‍🗨"), 9, $5)
                  ]),
                  T.value ? y("", !0) : (a(), M(ie, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: S.value,
                    disabled: !N.value || S.value,
                    onClick: Te
                  }, {
                    default: g(() => [...Q[16] || (Q[16] = [
                      b(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  T.value ? (a(), M(ie, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: Ke
                  }, {
                    default: g(() => [...Q[17] || (Q[17] = [
                      b(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                q.value ? (a(), c("div", {
                  key: 0,
                  class: xe(["connection-status", q.value.type])
                }, [
                  t("span", C5, f(q.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", x5, f(q.value.message), 1),
                  B.value !== null ? (a(), c("span", S5, " $" + f(B.value.toFixed(2)) + " credit ", 1)) : y("", !0)
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
          T.value ? (a(), M(ot, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: g(() => [
              t("div", I5, [
                t("div", E5, [
                  Q[19] || (Q[19] = t("label", { class: "config-label" }, "Region", -1)),
                  He(t("select", {
                    "onUpdate:modelValue": Q[2] || (Q[2] = (Le) => A.value = Le),
                    class: "config-select",
                    disabled: ve.value
                  }, [
                    ve.value ? (a(), c("option", P5, "Loading...")) : A.value ? y("", !0) : (a(), c("option", R5, "Select a region")),
                    (a(!0), c(j, null, ge(be.value, (Le) => (a(), c("option", {
                      key: Le.id,
                      value: Le.id,
                      disabled: !Le.available
                    }, f(Le.id) + " (" + f(Le.name) + ")" + f(Le.available ? "" : " [Unavailable]"), 9, M5))), 128))
                  ], 8, T5), [
                    [ms, A.value]
                  ])
                ]),
                t("div", D5, [
                  Q[24] || (Q[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  De.value ? (a(), c("div", L5, "Loading volumes...")) : ke.value.length === 0 ? (a(), c(j, { key: 1 }, [
                    t("div", O5, [
                      Q[20] || (Q[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", N5, "No volumes in " + f(A.value || "this region"), 1)
                    ]),
                    Q[21] || (Q[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    Q[22] || (Q[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (a(), c(j, { key: 2 }, [
                    He(t("select", {
                      "onUpdate:modelValue": Q[3] || (Q[3] = (Le) => I.value = Le),
                      class: "config-select"
                    }, [
                      (a(!0), c(j, null, ge(ke.value, (Le) => (a(), c("option", {
                        key: Le.id,
                        value: Le.id
                      }, f(Le.name) + " (" + f(Le.size_gb) + "GB) ", 9, A5))), 128))
                    ], 512), [
                      [ms, I.value]
                    ]),
                    Q[23] || (Q[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", U5, [
                  Q[25] || (Q[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  He(t("select", {
                    "onUpdate:modelValue": Q[4] || (Q[4] = (Le) => E.value = Le),
                    class: "config-select",
                    disabled: Je.value || !I.value
                  }, [
                    I.value ? Je.value ? (a(), c("option", B5, "Loading GPUs...")) : $e.value.length === 0 ? (a(), c("option", V5, "No GPUs available in this region")) : y("", !0) : (a(), c("option", F5, "Select a volume first")),
                    (a(!0), c(j, null, ge($e.value, (Le) => (a(), c("option", {
                      key: Le.id,
                      value: Le.id
                    }, f(Le.displayName) + " (" + f(Le.memoryInGb) + "GB) - $" + f(O.value === "SECURE" ? (Le.securePrice ?? 0).toFixed(2) : (Le.communityPrice ?? 0).toFixed(2)) + "/hr " + f(Le.stockStatus ? `[${Le.stockStatus}]` : ""), 9, W5))), 128))
                  ], 8, z5), [
                    [ms, E.value]
                  ])
                ]),
                t("div", G5, [
                  Q[26] || (Q[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", j5, [
                    t("label", H5, [
                      He(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[5] || (Q[5] = (Le) => O.value = Le),
                        value: "SECURE"
                      }, null, 512), [
                        [Yt, O.value]
                      ]),
                      t("span", K5, "Secure ($" + f(Ce("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", q5, [
                      He(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[6] || (Q[6] = (Le) => O.value = Le),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [Yt, O.value]
                      ]),
                      t("span", Y5, "Community ($" + f(Ce("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", J5, [
                  Q[27] || (Q[27] = t("label", { class: "config-label" }, [
                    b(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", X5, [
                    t("label", Q5, [
                      He(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[7] || (Q[7] = (Le) => re.value = Le),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Yt, re.value]
                      ]),
                      t("span", Z5, "On-Demand ($" + f(Ce("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", ex, [
                      He(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[8] || (Q[8] = (Le) => re.value = Le),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [Yt, re.value]
                      ]),
                      t("span", tx, "Spot ($" + f(Ce("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", sx, [
                  Q[28] || (Q[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  He(t("input", {
                    "onUpdate:modelValue": Q[9] || (Q[9] = (Le) => Y.value = Le),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [At, Y.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : y("", !0),
          T.value ? (a(), M(ot, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: g(() => [
              Z.value ? (a(), c("div", ox, "Loading remotes...")) : H.value.length === 0 ? (a(), c("div", nx, [
                Q[30] || (Q[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                C(ie, {
                  variant: "primary",
                  size: "xs",
                  onClick: Q[10] || (Q[10] = (Le) => o("navigate", "remotes"))
                }, {
                  default: g(() => [...Q[29] || (Q[29] = [
                    b(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (a(), c(j, { key: 2 }, [
                t("div", ax, [
                  (a(!0), c(j, null, ge(H.value, (Le) => (a(), M(Tr, {
                    key: Le.name,
                    remote: Le,
                    "sync-status": te.value[Le.name],
                    "is-selected": U.value === Le.name,
                    "is-fetching": z.value === Le.name,
                    "is-pushing": R.value === Le.name,
                    onFetch: D,
                    onPush: W,
                    onSelect: ce
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                ne.value && ne.value.ahead > 0 ? (a(), c("div", lx, [
                  Q[31] || (Q[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", ix, [
                    t("strong", null, f(ne.value.ahead) + " unpushed commit" + f(ne.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + f(U.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  C(ie, {
                    variant: "primary",
                    size: "xs",
                    loading: R.value === U.value,
                    onClick: Q[11] || (Q[11] = (Le) => U.value && W(U.value))
                  }, {
                    default: g(() => [
                      b(" Push to " + f(U.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", rx, [
                  C(ie, {
                    variant: "link",
                    size: "xs",
                    onClick: Q[12] || (Q[12] = (Le) => o("navigate", "remotes"))
                  }, {
                    default: g(() => [...Q[32] || (Q[32] = [
                      b(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : y("", !0),
          T.value ? (a(), M(ot, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: g(() => [
              t("div", cx, [
                Se.value ? (a(), c("div", ux, "Loading environment summary...")) : _e.value ? (a(), c(j, { key: 1 }, [
                  t("div", dx, [
                    Q[33] || (Q[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", fx, f(_e.value.comfyui_version), 1)
                  ]),
                  t("div", mx, [
                    Q[34] || (Q[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", vx, f(_e.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", px, [
                    Q[35] || (Q[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", gx, f(_e.value.model_count) + " models", 1)
                  ]),
                  _e.value.models_with_sources > 0 ? (a(), c("div", hx, [
                    t("span", yx, "└─ " + f(_e.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  _e.value.models_without_sources > 0 ? (a(), c("div", wx, [
                    t("span", bx, "└─ " + f(_e.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", _x, [
                    Q[36] || (Q[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", kx, f(_e.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", $x, [
                    Q[37] || (Q[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", Cx, "~" + f(_e.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          T.value && ee.value ? (a(), M(ot, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: g(() => {
              var Le, ns;
              return [
                t("div", xx, [
                  t("div", Sx, [
                    t("div", Ix, [
                      Q[42] || (Q[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", Ex, [
                        Q[38] || (Q[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", Tx, "$" + f(ee.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", Px, [
                        Q[39] || (Q[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", Rx, "$" + f(ee.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", Mx, [
                        Q[40] || (Q[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", Dx, "$" + f(ee.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      Q[43] || (Q[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", Lx, [
                        Q[41] || (Q[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", Ox, "~$" + f(ee.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", Nx, [
                      Q[45] || (Q[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", Ax, [
                        t("span", null, f(((Le = je.value.find((se) => se.id === E.value)) == null ? void 0 : Le.displayName) || "GPU") + " (" + f(((ns = je.value.find((se) => se.id === E.value)) == null ? void 0 : ns.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", Ux, [
                        t("span", null, "Region: " + f(A.value), 1)
                      ]),
                      fe.value ? (a(), c("div", zx, [
                        t("span", null, "Volume: " + f(fe.value.name), 1)
                      ])) : y("", !0),
                      re.value === "SPOT" ? (a(), c("div", Fx, [...Q[44] || (Q[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          T.value ? (a(), c("div", Bx, [
            C(ie, {
              variant: "primary",
              size: "md",
              loading: V.value || Ve.value,
              disabled: !Re.value,
              onClick: ct
            }, {
              default: g(() => [
                Q[46] || (Q[46] = t("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  t("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1)),
                b(" " + f(V.value ? "Validating..." : Ve.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          ye.value ? (a(), M(ot, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: g(() => [
              C(Tt, {
                status: ye.value.status === "success" ? "synced" : "broken"
              }, Qs({
                icon: g(() => [
                  b(f(ye.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: g(() => [
                  b(f(ye.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: g(() => [
                  b(f(ye.value.message), 1)
                ]),
                actions: g(() => [
                  C(ie, {
                    variant: "ghost",
                    size: "xs",
                    onClick: Q[13] || (Q[13] = (Le) => ye.value = null)
                  }, {
                    default: g(() => [...Q[47] || (Q[47] = [
                      b(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                ye.value.pod_id ? {
                  name: "details",
                  fn: g(() => [
                    C(ut, {
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
        le.value ? (a(), M(vt, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((We = Ie.value) == null ? void 0 : We.phase) === "READY" || ((pt = Ie.value) == null ? void 0 : pt.phase) === "ERROR" || ((Ht = Ie.value) == null ? void 0 : Ht.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: Zs
        }, Qs({
          body: g(() => {
            var Le, ns, se, G, Pe, Be, tt, dt, Mt, as, Bs, Vs;
            return [
              t("div", Vx, [
                t("div", Wx, [
                  t("div", {
                    class: xe(["phase-icon", (ns = (Le = Ie.value) == null ? void 0 : Le.phase) == null ? void 0 : ns.toLowerCase()])
                  }, [
                    ((se = Ie.value) == null ? void 0 : se.phase) === "READY" ? (a(), c("span", Gx, "✓")) : ((G = Ie.value) == null ? void 0 : G.phase) === "ERROR" ? (a(), c("span", jx, "✕")) : ((Pe = Ie.value) == null ? void 0 : Pe.phase) === "STOPPED" ? (a(), c("span", Hx, "○")) : (a(), c("span", Kx, "⟳"))
                  ], 2),
                  t("div", qx, [
                    t("div", Yx, f(bo((Be = Ie.value) == null ? void 0 : Be.phase)), 1),
                    t("div", Jx, f(((tt = Ie.value) == null ? void 0 : tt.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                C(Gn, {
                  progress: _o((dt = Ie.value) == null ? void 0 : dt.phase),
                  variant: ((Mt = Ie.value) == null ? void 0 : Mt.phase) === "ERROR" ? "error" : ((as = Ie.value) == null ? void 0 : as.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Bs = Ie.value) == null ? void 0 : Bs.phase) === "READY" ? (a(), c("div", Xx, [
                  C(ie, {
                    variant: "primary",
                    size: "md",
                    onClick: wo
                  }, {
                    default: g(() => [...Q[48] || (Q[48] = [
                      b(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                t("div", Qx, [
                  (Vs = Ie.value) != null && Vs.console_url ? (a(), c("a", {
                    key: 0,
                    href: Ie.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, Zx)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((ps = Ie.value) == null ? void 0 : ps.phase) === "READY" || ((gs = Ie.value) == null ? void 0 : gs.phase) === "ERROR" || ((os = Ie.value) == null ? void 0 : os.phase) === "STOPPED" ? {
            name: "footer",
            fn: g(() => [
              C(ie, {
                variant: "ghost",
                size: "xs",
                onClick: Zs
              }, {
                default: g(() => [...Q[49] || (Q[49] = [
                  b(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : y("", !0),
        ae.value && oe.value ? (a(), M(xr, {
          key: 1,
          issues: oe.value.blocking_issues,
          onClose: Q[14] || (Q[14] = (Le) => ae.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        de.value && oe.value ? (a(), M(Sr, {
          key: 2,
          models: oe.value.warnings.models_without_sources,
          onConfirm: ft,
          onCancel: Q[15] || (Q[15] = (Le) => de.value = !1),
          onRevalidate: Gt
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), t8 = /* @__PURE__ */ pe(e8, [["__scopeId", "data-v-522cd4d9"]]), s8 = { class: "worker-header" }, o8 = { class: "worker-status" }, n8 = { class: "worker-name" }, a8 = { class: "worker-actions" }, l8 = { class: "worker-details" }, i8 = { class: "detail-item" }, r8 = { class: "detail-value" }, c8 = {
  key: 0,
  class: "detail-item"
}, u8 = { class: "detail-value" }, d8 = {
  key: 1,
  class: "detail-item"
}, f8 = { class: "detail-value mode-badge" }, m8 = {
  key: 0,
  class: "worker-stats"
}, v8 = {
  key: 0,
  class: "stat-item"
}, p8 = { key: 0 }, g8 = {
  key: 1,
  class: "worker-stats offline"
}, h8 = /* @__PURE__ */ me({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(e) {
    return (s, o) => (a(), c("div", {
      class: xe(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      t("div", s8, [
        t("div", o8, [
          t("span", {
            class: xe(["status-dot", e.worker.status])
          }, null, 2),
          t("span", n8, f(e.worker.name), 1)
        ]),
        t("div", a8, [
          e.worker.status === "online" ? (a(), M(ie, {
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
          C(ie, {
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
      t("div", l8, [
        t("span", i8, [
          t("span", r8, f(e.worker.host) + ":" + f(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (a(), c("span", c8, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", u8, f(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (a(), c("span", d8, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", f8, f(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (a(), c("div", m8, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (a(), c("span", v8, [
          b(" • " + f(e.worker.instance_count) + " instance" + f(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (a(), c("span", p8, "(" + f(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (a(), c("div", g8, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), y8 = /* @__PURE__ */ pe(h8, [["__scopeId", "data-v-b1be7134"]]), w8 = { class: "add-worker-content" }, b8 = { class: "manual-form" }, _8 = { class: "form-row" }, k8 = { class: "form-row-inline" }, $8 = { class: "form-field flex-2" }, C8 = { class: "form-field flex-1" }, x8 = { class: "form-row" }, S8 = { class: "api-key-wrapper" }, I8 = ["type"], E8 = { class: "result-icon" }, T8 = { class: "result-content" }, P8 = { class: "result-message" }, R8 = {
  key: 0,
  class: "result-detail"
}, M8 = { class: "modal-actions" }, D8 = /* @__PURE__ */ me({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = at(), l = zs({
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
    return (p, _) => (a(), M(vt, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: _[5] || (_[5] = (x) => p.$emit("close"))
    }, {
      body: g(() => [
        t("div", w8, [
          t("div", b8, [
            t("div", _8, [
              _[6] || (_[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              He(t("input", {
                "onUpdate:modelValue": _[0] || (_[0] = (x) => l.name = x),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [At, l.name]
              ])
            ]),
            t("div", k8, [
              t("div", $8, [
                _[7] || (_[7] = t("label", { class: "form-label" }, "Host", -1)),
                He(t("input", {
                  "onUpdate:modelValue": _[1] || (_[1] = (x) => l.host = x),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [At, l.host]
                ])
              ]),
              t("div", C8, [
                _[8] || (_[8] = t("label", { class: "form-label" }, "Port", -1)),
                He(t("input", {
                  "onUpdate:modelValue": _[2] || (_[2] = (x) => l.port = x),
                  type: "number",
                  class: "form-input",
                  placeholder: "9090"
                }, null, 512), [
                  [
                    At,
                    l.port,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ]),
            t("div", x8, [
              _[9] || (_[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", S8, [
                He(t("input", {
                  "onUpdate:modelValue": _[3] || (_[3] = (x) => l.apiKey = x),
                  type: i.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, I8), [
                  [Wn, l.apiKey]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: _[4] || (_[4] = (x) => i.value = !i.value),
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
              class: xe(["test-result", d.value.type])
            }, [
              t("span", E8, f(d.value.type === "success" ? "✓" : "✕"), 1),
              t("div", T8, [
                t("span", P8, f(d.value.message), 1),
                d.value.gpu_info ? (a(), c("span", R8, "GPU: " + f(d.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: g(() => [
        t("div", M8, [
          C(ie, {
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
          C(ie, {
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
}), L8 = /* @__PURE__ */ pe(D8, [["__scopeId", "data-v-07a00732"]]), O8 = { class: "discovered-content" }, N8 = {
  key: 0,
  class: "workers-list"
}, A8 = { class: "worker-info" }, U8 = { class: "worker-name" }, z8 = { class: "worker-address" }, F8 = {
  key: 0,
  class: "worker-gpu"
}, B8 = {
  key: 1,
  class: "empty-state"
}, V8 = {
  key: 2,
  class: "api-key-section"
}, W8 = { class: "selected-worker" }, G8 = { class: "selected-name" }, j8 = { class: "selected-address" }, H8 = { class: "form-row" }, K8 = { class: "api-key-wrapper" }, q8 = ["type"], Y8 = { class: "result-icon" }, J8 = { class: "result-message" }, X8 = { class: "modal-actions" }, Q8 = /* @__PURE__ */ me({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = at(), l = k(null), i = k(""), r = k(!1), u = k(!1), d = k(null), m = k(null);
    async function v(w) {
      var p;
      l.value = w, i.value = "", m.value = null, await Jo(), (p = d.value) == null || p.focus();
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
    return (w, p) => (a(), M(vt, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (_) => w.$emit("close"))
    }, {
      body: g(() => [
        t("div", O8, [
          e.workers.length > 0 ? (a(), c("div", N8, [
            (a(!0), c(j, null, ge(e.workers, (_) => (a(), c("div", {
              key: `${_.host}:${_.port}`,
              class: "worker-item"
            }, [
              t("div", A8, [
                t("span", U8, f(_.name), 1),
                t("span", z8, f(_.host) + ":" + f(_.port), 1),
                _.gpu_info ? (a(), c("span", F8, f(_.gpu_info), 1)) : y("", !0)
              ]),
              C(ie, {
                variant: "primary",
                size: "xs",
                onClick: (x) => v(_)
              }, {
                default: g(() => [...p[4] || (p[4] = [
                  b(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128))
          ])) : (a(), c("div", B8, [...p[5] || (p[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              b("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (a(), c("div", V8, [
            t("div", W8, [
              p[6] || (p[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", G8, f(l.value.name), 1),
              t("span", j8, "(" + f(l.value.host) + ":" + f(l.value.port) + ")", 1)
            ]),
            t("div", H8, [
              p[7] || (p[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", K8, [
                He(t("input", {
                  ref_key: "apiKeyInput",
                  ref: d,
                  "onUpdate:modelValue": p[0] || (p[0] = (_) => i.value = _),
                  type: r.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: Xt(h, ["enter"])
                }, null, 40, q8), [
                  [Wn, i.value]
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
              class: xe(["test-result", m.value.type])
            }, [
              t("span", Y8, f(m.value.type === "success" ? "✓" : "✕"), 1),
              t("span", J8, f(m.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        t("div", X8, [
          l.value ? (a(), M(ie, {
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
          l.value ? (a(), M(ie, {
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
}), Z8 = /* @__PURE__ */ pe(Q8, [["__scopeId", "data-v-5a3e40a4"]]), eS = { class: "deploy-content" }, tS = { class: "section" }, sS = {
  key: 0,
  class: "loading-text"
}, oS = {
  key: 1,
  class: "empty-remotes"
}, nS = {
  key: 2,
  class: "remotes-list"
}, aS = { class: "section" }, lS = { class: "mode-options" }, iS = { class: "mode-option" }, rS = ["disabled"], cS = { class: "mode-option" }, uS = { class: "section" }, dS = {
  key: 0,
  class: "section"
}, fS = { class: "summary-row" }, mS = {
  key: 1,
  class: "sync-warning"
}, vS = { class: "warning-content" }, pS = { class: "modal-actions" }, gS = /* @__PURE__ */ me({
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
    } = at(), v = k([]), h = k({}), w = k(!1), p = k(null), _ = k(null), x = k(null), $ = k(o.worker.mode || "native"), P = k(""), N = k(null), T = k(!1), S = F(() => p.value && h.value[p.value] || null), q = F(() => {
      if (!p.value) return null;
      const H = v.value.find((te) => te.name === p.value);
      return (H == null ? void 0 : H.fetch_url) || null;
    }), B = F(() => q.value && !T.value);
    async function A() {
      w.value = !0;
      try {
        const H = await l();
        v.value = H.remotes, await Promise.all(
          H.remotes.map(async (Z) => {
            const U = await i(Z.name);
            U && (h.value[Z.name] = U);
          })
        );
        const te = H.remotes.find((Z) => Z.is_default);
        te ? p.value = te.name : H.remotes.length > 0 && (p.value = H.remotes[0].name);
      } catch {
        n("toast", "Failed to load remotes", "error");
      } finally {
        w.value = !1;
      }
    }
    async function I() {
      try {
        N.value = await d();
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
    async function O(H) {
      x.value = H;
      try {
        await u(H, { force: !1 });
        const te = await i(H);
        te && (h.value[H] = te), n("toast", `Pushed to ${H}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        x.value = null;
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
    return Qe(() => {
      A(), I();
    }), (H, te) => (a(), M(vt, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: te[5] || (te[5] = (Z) => H.$emit("close"))
    }, {
      body: g(() => [
        t("div", eS, [
          t("div", tS, [
            te[7] || (te[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            w.value ? (a(), c("div", sS, "Loading remotes...")) : v.value.length === 0 ? (a(), c("div", oS, [...te[6] || (te[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (a(), c("div", nS, [
              (a(!0), c(j, null, ge(v.value, (Z) => (a(), M(Tr, {
                key: Z.name,
                remote: Z,
                "sync-status": h.value[Z.name],
                "is-selected": p.value === Z.name,
                "is-fetching": _.value === Z.name,
                "is-pushing": x.value === Z.name,
                onFetch: E,
                onPush: O,
                onSelect: re
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", aS, [
            te[10] || (te[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", lS, [
              t("label", iS, [
                He(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": te[0] || (te[0] = (Z) => $.value = Z),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, rS), [
                  [Yt, $.value]
                ]),
                te[8] || (te[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", cS, [
                He(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": te[1] || (te[1] = (Z) => $.value = Z),
                  value: "native"
                }, null, 512), [
                  [Yt, $.value]
                ]),
                te[9] || (te[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", uS, [
            te[11] || (te[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            He(t("input", {
              "onUpdate:modelValue": te[2] || (te[2] = (Z) => P.value = Z),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [At, P.value]
            ])
          ]),
          N.value ? (a(), c("div", dS, [
            te[12] || (te[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", fS, " ComfyUI: " + f(N.value.comfyui_version) + " • " + f(N.value.node_count) + " nodes • " + f(N.value.model_count) + " models • " + f(N.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          S.value && S.value.ahead > 0 ? (a(), c("div", mS, [
            te[14] || (te[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", vS, [
              t("strong", null, f(S.value.ahead) + " unpushed commit" + f(S.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + f(p.value) + "' before deploying to include your latest changes.", 1)
            ]),
            C(ie, {
              variant: "primary",
              size: "xs",
              loading: x.value === p.value,
              onClick: te[3] || (te[3] = (Z) => p.value && O(p.value))
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
        t("div", pS, [
          C(ie, {
            variant: "ghost",
            size: "sm",
            onClick: te[4] || (te[4] = (Z) => H.$emit("close"))
          }, {
            default: g(() => [...te[15] || (te[15] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          C(ie, {
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
}), hS = /* @__PURE__ */ pe(gS, [["__scopeId", "data-v-c12720d3"]]), yS = { class: "custom-tab" }, wS = { class: "section-header" }, bS = { class: "section-actions" }, _S = { class: "workers-content" }, kS = {
  key: 0,
  class: "loading-state"
}, $S = {
  key: 1,
  class: "empty-state"
}, CS = {
  key: 2,
  class: "workers-list"
}, xS = { class: "scan-icon" }, SS = { class: "scan-message" }, IS = /* @__PURE__ */ me({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: n,
      addCustomWorker: l,
      removeCustomWorker: i,
      scanForWorkers: r
    } = at(), u = k([]), d = k([]), m = k(!1), v = k(!1), h = k(null), w = k(!1), p = k(!1), _ = k(null), x = k(null);
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
      v.value = !0, x.value = null;
      try {
        const A = await r(), I = A.discovered.filter(
          (E) => !u.value.some((O) => O.host === E.host && O.port === E.port)
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
    async function N(A) {
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
    return Qe(() => {
      $();
    }), (A, I) => (a(), c("div", yS, [
      t("div", wS, [
        I[8] || (I[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", bS, [
          C(ie, {
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
          C(ie, {
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
      t("div", _S, [
        m.value && u.value.length === 0 ? (a(), c("div", kS, [...I[9] || (I[9] = [
          t("span", { class: "spinner" }, null, -1),
          b(" Loading workers... ", -1)
        ])])) : u.value.length === 0 ? (a(), c("div", $S, [...I[10] || (I[10] = [
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
        ])])) : (a(), c("div", CS, [
          (a(!0), c(j, null, ge(u.value, (E) => (a(), M(y8, {
            key: E.name,
            worker: E,
            "is-action-loading": h.value === E.name,
            onDeploy: q,
            onRemove: S
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      x.value ? (a(), c("div", {
        key: 0,
        class: xe(["scan-result", x.value.type])
      }, [
        t("span", xS, f(x.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", SS, f(x.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: I[1] || (I[1] = (E) => x.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (a(), M(Z8, {
        key: 1,
        workers: d.value,
        onClose: I[2] || (I[2] = (E) => p.value = !1),
        onAdd: T
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (a(), M(L8, {
        key: 2,
        onClose: I[3] || (I[3] = (E) => w.value = !1),
        onAdd: N
      })) : y("", !0),
      _.value ? (a(), M(hS, {
        key: 3,
        worker: _.value,
        onClose: I[4] || (I[4] = (E) => _.value = null),
        onToast: I[5] || (I[5] = (E, O) => o("toast", E, O)),
        onDeployed: B
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), ES = /* @__PURE__ */ pe(IS, [["__scopeId", "data-v-1637dead"]]), ra = "ComfyGit.Deploy.GitHubPAT";
function Pr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function TS(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function PS() {
  function e() {
    try {
      return localStorage.getItem(ra);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem(ra, l);
    } catch (i) {
      console.error("[useGitAuth] Failed to save token:", i);
    }
  }
  function o() {
    try {
      localStorage.removeItem(ra);
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
    isRemoteSsh: Pr,
    isRemoteHttps: TS
  };
}
const RS = { class: "settings-content" }, MS = { class: "settings-section" }, DS = {
  key: 0,
  class: "ssh-warning"
}, LS = { class: "form-row" }, OS = { class: "token-wrapper" }, NS = ["type"], AS = { class: "result-icon" }, US = { class: "result-message" }, zS = { class: "token-actions" }, FS = /* @__PURE__ */ me({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: n, setToken: l, clearToken: i, hasToken: r } = PS(), { getRemotes: u, testGitAuth: d } = at(), m = k(""), v = k(!1), h = k(!1), w = k(null), p = k(!1), _ = F(() => r());
    Qe(async () => {
      var T;
      const N = n();
      N && (m.value = N);
      try {
        const q = (T = (await u()).remotes) == null ? void 0 : T.find((B) => B.name === "origin");
        q && Pr(q.url) && (p.value = !0);
      } catch {
      }
    });
    async function x() {
      if (m.value) {
        h.value = !0, w.value = null;
        try {
          const N = await d(m.value);
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
    return (N, T) => (a(), M(vt, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: T[2] || (T[2] = (S) => N.$emit("close"))
    }, {
      body: g(() => [
        t("div", RS, [
          t("div", MS, [
            T[8] || (T[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            T[9] || (T[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (a(), c("div", DS, [...T[3] || (T[3] = [
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
            t("div", LS, [
              T[4] || (T[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", OS, [
                He(t("input", {
                  "onUpdate:modelValue": T[0] || (T[0] = (S) => m.value = S),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, NS), [
                  [Wn, m.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: T[1] || (T[1] = (S) => v.value = !v.value)
                }, f(v.value ? "Hide" : "Show"), 1)
              ]),
              T[5] || (T[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            w.value ? (a(), c("div", {
              key: 1,
              class: xe(["test-result", w.value.type])
            }, [
              t("span", AS, f(w.value.type === "success" ? "✓" : "✕"), 1),
              t("span", US, f(w.value.message), 1)
            ], 2)) : y("", !0),
            t("div", zS, [
              C(ie, {
                variant: "ghost",
                size: "sm",
                loading: h.value,
                disabled: !m.value || h.value,
                onClick: x
              }, {
                default: g(() => [...T[6] || (T[6] = [
                  b(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              _.value ? (a(), M(ie, {
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
        C(ie, {
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
}), BS = /* @__PURE__ */ pe(FS, [["__scopeId", "data-v-b21588ad"]]), VS = /* @__PURE__ */ me({
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
    } = Er(), w = k(!1), p = k(!1), _ = k("instances"), x = k(null), $ = k(null), P = F(() => [
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
    async function N(A) {
      x.value = A.id;
      try {
        await u(A), o("toast", "Instance stopped", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to stop instance", "error");
      } finally {
        x.value = null;
      }
    }
    async function T(A) {
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
      await r(), _.value = "instances";
    }
    return Qe(() => {
      r(), v();
    }), ho(() => {
      h();
    }), (A, I) => (a(), c(j, null, [
      C(Pt, null, {
        header: g(() => [
          C(Rt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: I[1] || (I[1] = (E) => w.value = !0)
          }, {
            actions: g(() => [
              C(ie, {
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
          C(br, {
            modelValue: _.value,
            "onUpdate:modelValue": I[2] || (I[2] = (E) => _.value = E),
            tabs: P.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: g(() => [
          _.value === "instances" ? (a(), M(n5, {
            key: 0,
            instances: Ue(n),
            "is-loading": Ue(l),
            "action-loading-id": x.value,
            onRefresh: Ue(r),
            onStop: N,
            onStart: T,
            onTerminate: S
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          _.value === "runpod" ? (a(), M(t8, {
            key: 1,
            onToast: I[3] || (I[3] = (E, O) => o("toast", E, O)),
            onNavigate: I[4] || (I[4] = (E) => o("navigate", E)),
            onDeployed: B
          })) : y("", !0),
          _.value === "custom" ? (a(), M(ES, {
            key: 2,
            onToast: I[5] || (I[5] = (E, O) => o("toast", E, O)),
            onDeployed: B
          })) : y("", !0)
        ]),
        _: 1
      }),
      $.value ? (a(), M(qa, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${$.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: q,
        onCancel: I[6] || (I[6] = (E) => $.value = null)
      }, null, 8, ["message"])) : y("", !0),
      C(ss, {
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
      p.value ? (a(), M(BS, {
        key: 1,
        onClose: I[8] || (I[8] = (E) => p.value = !1),
        onSaved: I[9] || (I[9] = (E) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), WS = /* @__PURE__ */ pe(VS, [["__scopeId", "data-v-d4e32a10"]]), GS = { class: "header-info" }, jS = { class: "commit-hash" }, HS = {
  key: 0,
  class: "commit-refs"
}, KS = { class: "commit-message" }, qS = { class: "commit-date" }, YS = {
  key: 0,
  class: "loading"
}, JS = {
  key: 1,
  class: "changes-section"
}, XS = { class: "stats-row" }, QS = { class: "stat" }, ZS = { class: "stat insertions" }, e4 = { class: "stat deletions" }, t4 = {
  key: 0,
  class: "change-group"
}, s4 = {
  key: 1,
  class: "change-group"
}, o4 = {
  key: 0,
  class: "version"
}, n4 = {
  key: 2,
  class: "change-group"
}, a4 = { class: "change-item" }, l4 = /* @__PURE__ */ me({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = at(), n = k(null), l = k(!0), i = F(() => {
      if (!n.value) return !1;
      const u = n.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), r = F(() => {
      if (!n.value) return !1;
      const u = n.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return Qe(async () => {
      try {
        n.value = await o(s.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (a(), M(vt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (m) => u.$emit("close"))
    }, {
      header: g(() => {
        var m, v, h, w;
        return [
          t("div", GS, [
            d[4] || (d[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", jS, f(((m = n.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (h = n.value) == null ? void 0 : h.refs) != null && w.length ? (a(), c("span", HS, [
              (a(!0), c(j, null, ge(n.value.refs, (p) => (a(), c("span", {
                key: p,
                class: "ref-badge"
              }, f(p), 1))), 128))
            ])) : y("", !0)
          ]),
          C(Me, {
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
          t("div", KS, f(((m = n.value) == null ? void 0 : m.message) || e.commit.message), 1),
          t("div", qS, f(((v = n.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), c("div", YS, "Loading details...")) : n.value ? (a(), c("div", JS, [
            t("div", XS, [
              t("span", QS, f(n.value.stats.files_changed) + " files", 1),
              t("span", ZS, "+" + f(n.value.stats.insertions), 1),
              t("span", e4, "-" + f(n.value.stats.deletions), 1)
            ]),
            i.value ? (a(), c("div", t4, [
              C(Ao, { variant: "section" }, {
                default: g(() => [...d[6] || (d[6] = [
                  b("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), c(j, null, ge(n.value.changes.workflows.added, (h) => (a(), c("div", {
                key: "add-" + h,
                class: "change-item added"
              }, [
                d[7] || (d[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(h), 1)
              ]))), 128)),
              (a(!0), c(j, null, ge(n.value.changes.workflows.modified, (h) => (a(), c("div", {
                key: "mod-" + h,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, f(h), 1)
              ]))), 128)),
              (a(!0), c(j, null, ge(n.value.changes.workflows.deleted, (h) => (a(), c("div", {
                key: "del-" + h,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(h), 1)
              ]))), 128))
            ])) : y("", !0),
            r.value ? (a(), c("div", s4, [
              C(Ao, { variant: "section" }, {
                default: g(() => [...d[10] || (d[10] = [
                  b("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), c(j, null, ge(n.value.changes.nodes.added, (h) => (a(), c("div", {
                key: "add-" + h.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(h.name), 1),
                h.version ? (a(), c("span", o4, "(" + f(h.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), c(j, null, ge(n.value.changes.nodes.removed, (h) => (a(), c("div", {
                key: "rem-" + h.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(h.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), c("div", n4, [
              C(Ao, { variant: "section" }, {
                default: g(() => [...d[13] || (d[13] = [
                  b("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", a4, [
                d[14] || (d[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, f(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: g(() => [
        C(Me, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (m) => u.$emit("createBranch", e.commit))
        }, {
          default: g(() => [...d[15] || (d[15] = [
            b(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        C(Me, {
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
}), i4 = /* @__PURE__ */ pe(l4, [["__scopeId", "data-v-d256ff6d"]]), r4 = { class: "base-textarea-wrapper" }, c4 = ["value", "rows", "placeholder", "disabled", "maxlength"], u4 = {
  key: 0,
  class: "base-textarea-count"
}, d4 = /* @__PURE__ */ me({
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
    return (i, r) => (a(), c("div", r4, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: r[0] || (r[0] = (u) => i.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          r[1] || (r[1] = Xt(nt((u) => i.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          r[2] || (r[2] = Xt(nt((u) => i.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Xt(l, ["enter"])
        ]
      }, null, 40, c4),
      e.showCharCount && e.maxLength ? (a(), c("div", u4, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), jl = /* @__PURE__ */ pe(d4, [["__scopeId", "data-v-c6d16c93"]]), f4 = ["checked", "disabled"], m4 = { class: "base-checkbox-box" }, v4 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, p4 = {
  key: 0,
  class: "base-checkbox-label"
}, g4 = /* @__PURE__ */ me({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), c("label", {
      class: xe(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked))
      }, null, 40, f4),
      t("span", m4, [
        e.modelValue ? (a(), c("svg", v4, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (a(), c("span", p4, [
        Ge(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Hl = /* @__PURE__ */ pe(g4, [["__scopeId", "data-v-bf17c831"]]), h4 = { class: "popover-header" }, y4 = { class: "popover-body" }, w4 = {
  key: 0,
  class: "changes-summary"
}, b4 = {
  key: 0,
  class: "change-item"
}, _4 = {
  key: 1,
  class: "change-item"
}, k4 = {
  key: 2,
  class: "change-item"
}, $4 = {
  key: 3,
  class: "change-item"
}, C4 = {
  key: 4,
  class: "change-item"
}, x4 = {
  key: 5,
  class: "change-item"
}, S4 = {
  key: 1,
  class: "no-changes"
}, I4 = {
  key: 2,
  class: "loading"
}, E4 = {
  key: 3,
  class: "issues-error"
}, T4 = { class: "error-header" }, P4 = { class: "error-title" }, R4 = { class: "issues-list" }, M4 = { class: "message-section" }, D4 = { class: "popover-footer" }, L4 = {
  key: 1,
  class: "commit-popover"
}, O4 = { class: "popover-header" }, N4 = { class: "popover-body" }, A4 = {
  key: 0,
  class: "changes-summary"
}, U4 = {
  key: 0,
  class: "change-item"
}, z4 = {
  key: 1,
  class: "change-item"
}, F4 = {
  key: 2,
  class: "change-item"
}, B4 = {
  key: 3,
  class: "change-item"
}, V4 = {
  key: 4,
  class: "change-item"
}, W4 = {
  key: 5,
  class: "change-item"
}, G4 = {
  key: 1,
  class: "no-changes"
}, j4 = {
  key: 2,
  class: "loading"
}, H4 = {
  key: 3,
  class: "issues-error"
}, K4 = { class: "error-header" }, q4 = { class: "error-title" }, Y4 = { class: "issues-list" }, J4 = { class: "message-section" }, X4 = { class: "popover-footer" }, Q4 = /* @__PURE__ */ me({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, n = s, { commit: l } = at(), i = k(""), r = k(!1), u = k(!1), d = F(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), m = F(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, x = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || x.nodes_added.length > 0 || x.nodes_removed.length > 0;
    }), v = F(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter(
        (x) => x.has_issues && (x.sync_state === "new" || x.sync_state === "modified")
      ) : [];
    }), h = F(() => v.value.length > 0), w = F(() => h.value && !u.value);
    async function p() {
      var _, x, $;
      if (!(h.value && !u.value) && !(!d.value || !i.value.trim() || r.value)) {
        r.value = !0;
        try {
          const P = await l(i.value.trim(), u.value);
          if (P.status === "success") {
            const N = `Committed: ${((_ = P.summary) == null ? void 0 : _.new) || 0} new, ${((x = P.summary) == null ? void 0 : x.modified) || 0} modified, ${(($ = P.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            n("committed", { success: !0, message: N });
          } else P.status === "no_changes" ? n("committed", { success: !1, message: "No changes to commit" }) : P.status === "blocked" ? n("committed", { success: !1, message: 'Commit blocked - enable "Allow issues" to force commit' }) : n("committed", { success: !1, message: P.message || "Commit failed" });
        } catch (P) {
          n("committed", { success: !1, message: P instanceof Error ? P.message : "Commit failed" });
        } finally {
          r.value = !1;
        }
      }
    }
    return (_, x) => e.asModal ? (a(), M(yt, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: x[5] || (x[5] = ($) => n("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: x[4] || (x[4] = nt(() => {
          }, ["stop"]))
        }, [
          t("div", h4, [
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
          t("div", y4, [
            e.status && d.value ? (a(), c("div", w4, [
              e.status.workflows.new.length ? (a(), c("div", b4, [
                x[12] || (x[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), c("div", _4, [
                x[13] || (x[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), c("div", k4, [
                x[14] || (x[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), c("div", $4, [
                x[15] || (x[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), c("div", C4, [
                x[16] || (x[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (a(), c("div", x4, [...x[17] || (x[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), c("div", S4, " No changes to commit ")) : (a(), c("div", I4, " Loading... ")),
            h.value ? (a(), c("div", E4, [
              t("div", T4, [
                x[18] || (x[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", P4, f(v.value.length) + " workflow(s) can't run", 1)
              ]),
              t("div", R4, [
                (a(!0), c(j, null, ge(v.value, ($) => (a(), c("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  t("strong", null, f($.name), 1),
                  b(": " + f($.issue_summary), 1)
                ]))), 128))
              ]),
              C(Hl, {
                modelValue: u.value,
                "onUpdate:modelValue": x[1] || (x[1] = ($) => u.value = $),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...x[19] || (x[19] = [
                  b(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            t("div", M4, [
              C(jl, {
                modelValue: i.value,
                "onUpdate:modelValue": x[2] || (x[2] = ($) => i.value = $),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || r.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: p,
                onSubmit: p
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          t("div", D4, [
            C(Me, {
              variant: "secondary",
              onClick: x[3] || (x[3] = ($) => n("close"))
            }, {
              default: g(() => [...x[20] || (x[20] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
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
    ])) : (a(), c("div", L4, [
      t("div", O4, [
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
      t("div", N4, [
        e.status && d.value ? (a(), c("div", A4, [
          e.status.workflows.new.length ? (a(), c("div", U4, [
            x[23] || (x[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), c("div", z4, [
            x[24] || (x[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), c("div", F4, [
            x[25] || (x[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), c("div", B4, [
            x[26] || (x[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), c("div", V4, [
            x[27] || (x[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (a(), c("div", W4, [...x[28] || (x[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), c("div", G4, " No changes to commit ")) : (a(), c("div", j4, " Loading... ")),
        h.value ? (a(), c("div", H4, [
          t("div", K4, [
            x[29] || (x[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", q4, f(v.value.length) + " workflow(s) can't run", 1)
          ]),
          t("div", Y4, [
            (a(!0), c(j, null, ge(v.value, ($) => (a(), c("div", {
              key: $.name,
              class: "issue-item"
            }, [
              t("strong", null, f($.name), 1),
              b(": " + f($.issue_summary), 1)
            ]))), 128))
          ]),
          C(Hl, {
            modelValue: u.value,
            "onUpdate:modelValue": x[7] || (x[7] = ($) => u.value = $),
            class: "allow-issues-toggle"
          }, {
            default: g(() => [...x[30] || (x[30] = [
              b(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        t("div", J4, [
          C(jl, {
            modelValue: i.value,
            "onUpdate:modelValue": x[8] || (x[8] = ($) => i.value = $),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || r.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: p,
            onSubmit: p
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      t("div", X4, [
        C(Me, {
          variant: "secondary",
          onClick: x[9] || (x[9] = ($) => n("close"))
        }, {
          default: g(() => [...x[31] || (x[31] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        C(Me, {
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
}), Rr = /* @__PURE__ */ pe(Q4, [["__scopeId", "data-v-d0fe6172"]]), Z4 = { class: "modal-header" }, e6 = { class: "modal-body" }, t6 = { class: "switch-message" }, s6 = { class: "switch-details" }, o6 = { class: "modal-actions" }, n6 = /* @__PURE__ */ me({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), M(yt, { to: "body" }, [
      e.show ? (a(), c("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = nt(() => {
          }, ["stop"]))
        }, [
          t("div", Z4, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", e6, [
            t("p", t6, [
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
            t("p", s6, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", o6, [
            C(ie, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(ie, {
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
}), a6 = /* @__PURE__ */ pe(n6, [["__scopeId", "data-v-e9c5253e"]]), l6 = {
  key: 0,
  class: "modal-overlay"
}, i6 = { class: "modal-content" }, r6 = { class: "modal-body" }, c6 = { class: "progress-info" }, u6 = { class: "progress-percentage" }, d6 = { class: "progress-state" }, f6 = { class: "switch-steps" }, m6 = { class: "step-icon" }, v6 = { class: "step-label" }, p6 = /* @__PURE__ */ me({
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
    return (i, r) => (a(), M(yt, { to: "body" }, [
      e.show ? (a(), c("div", l6, [
        t("div", i6, [
          r[1] || (r[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", r6, [
            C(Gn, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            t("div", c6, [
              t("div", u6, f(e.progress) + "%", 1),
              t("div", d6, f(o.value), 1)
            ]),
            t("div", f6, [
              (a(!0), c(j, null, ge(l.value, (u) => (a(), c("div", {
                key: u.state,
                class: xe(["switch-step", u.status])
              }, [
                t("span", m6, f(u.icon), 1),
                t("span", v6, f(u.label), 1)
              ], 2))), 128))
            ]),
            r[0] || (r[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), g6 = /* @__PURE__ */ pe(p6, [["__scopeId", "data-v-768a5078"]]), h6 = { class: "modal-header" }, y6 = { class: "modal-body" }, w6 = {
  key: 0,
  class: "node-section"
}, b6 = { class: "node-list" }, _6 = {
  key: 1,
  class: "node-section"
}, k6 = { class: "node-list" }, $6 = { class: "modal-actions" }, C6 = /* @__PURE__ */ me({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), M(yt, { to: "body" }, [
      e.show ? (a(), c("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = nt(() => {
          }, ["stop"]))
        }, [
          t("div", h6, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", y6, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), c("div", w6, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", b6, [
                (a(!0), c(j, null, ge(e.mismatchDetails.missing_nodes, (n) => (a(), c("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), c("div", _6, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", k6, [
                (a(!0), c(j, null, ge(e.mismatchDetails.extra_nodes, (n) => (a(), c("div", {
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
          t("div", $6, [
            C(ie, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: g(() => [...o[10] || (o[10] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(ie, {
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
}), x6 = /* @__PURE__ */ pe(C6, [["__scopeId", "data-v-7cad7518"]]), S6 = [
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
], I6 = "v0.0.8", E6 = "Akatz", T6 = { class: "social-buttons" }, P6 = ["title", "aria-label", "onClick"], R6 = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, M6 = ["d"], D6 = ["title", "aria-label", "onClick"], L6 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, O6 = ["d"], N6 = /* @__PURE__ */ me({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), c("div", T6, [
      (a(!0), c(j, null, ge(Ue(S6), (l) => (a(), c(j, {
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
          (a(), c("svg", R6, [
            t("path", {
              d: l.iconPath
            }, null, 8, M6)
          ]))
        ], 8, P6)) : (a(), c("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => s(l.url)
        }, [
          (a(), c("svg", L6, [
            t("path", {
              d: l.iconPath
            }, null, 8, O6)
          ]))
        ], 8, D6))
      ], 64))), 128))
    ]));
  }
}), Mr = /* @__PURE__ */ pe(N6, [["__scopeId", "data-v-4f846342"]]), A6 = { class: "footer-info" }, U6 = { class: "version" }, z6 = { class: "made-by" }, F6 = /* @__PURE__ */ me({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (a(), c("div", A6, [
      t("span", U6, f(Ue(I6)), 1),
      t("span", z6, [
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
        b(" by " + f(Ue(E6)), 1)
      ])
    ]));
  }
}), Dr = /* @__PURE__ */ pe(F6, [["__scopeId", "data-v-8bc3db0a"]]), B6 = /* @__PURE__ */ me({
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
    return (i, r) => (a(), M(vt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: r[1] || (r[1] = (u) => i.$emit("close"))
    }, {
      body: g(() => [
        C(wr, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: g(() => {
        var u;
        return [
          C(Me, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: n
          }, {
            default: g(() => [...r[2] || (r[2] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Me, {
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
}), V6 = /* @__PURE__ */ pe(B6, [["__scopeId", "data-v-fac00ae7"]]), W6 = { class: "header-actions" }, G6 = {
  key: 0,
  class: "wizard-step"
}, j6 = { class: "form-field" }, H6 = ["placeholder"], K6 = {
  key: 0,
  class: "form-error"
}, q6 = { class: "form-field form-field--checkbox" }, Y6 = { class: "form-checkbox" }, J6 = {
  key: 0,
  class: "form-field"
}, X6 = ["placeholder"], Q6 = {
  key: 0,
  class: "form-info"
}, Z6 = {
  key: 1,
  class: "form-suggestion"
}, eI = {
  key: 2,
  class: "form-error"
}, tI = {
  key: 3,
  class: "form-info"
}, sI = {
  key: 1,
  class: "wizard-step"
}, oI = {
  key: 0,
  class: "progress-check-loading"
}, nI = {
  key: 0,
  class: "cli-warning"
}, aI = { class: "cli-warning-header" }, lI = {
  key: 1,
  class: "env-landing"
}, iI = { class: "env-list" }, rI = ["value"], cI = { class: "env-name" }, uI = {
  key: 2,
  class: "env-create"
}, dI = { class: "form-field" }, fI = { class: "form-field" }, mI = ["value"], vI = { class: "form-field" }, pI = ["disabled"], gI = ["value"], hI = { class: "form-field" }, yI = ["value"], wI = { class: "form-field form-field--checkbox" }, bI = { class: "form-checkbox" }, _I = {
  key: 0,
  class: "form-error"
}, kI = {
  key: 1,
  class: "env-creating"
}, $I = { class: "creating-intro" }, CI = {
  key: 3,
  class: "env-import"
}, xI = { class: "wizard-footer" }, SI = { class: "wizard-footer-actions" }, so = 10, II = 600 * 1e3, Kl = 1800 * 1e3, EI = /* @__PURE__ */ me({
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
    } = at(), h = k(o.initialStep || 1), w = k(null), p = k("landing"), _ = k(!1), x = k(!1), $ = k(!1), P = k(!1), N = k(null), T = k(o.initialStep === 2), S = k(o.defaultPath), q = k(!!o.detectedModelsDir), B = k(o.detectedModelsDir || ""), A = k(null), I = k(null), E = k(null), O = k(null), re = k("my-new-env"), Y = k($r), H = k("latest"), te = k(Cr), Z = k(!0), U = k(null), z = k(null), R = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), be = k(!1), ve = k(!1), Ee = k(!1), De = k({ progress: 0, message: "" }), je = k({ progress: 0, message: "" }), Je = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], _e = k(0), Se = k(null), Ve = k(0), ye = k(null), le = F(() => {
      var D, W;
      const ee = (D = S.value) == null ? void 0 : D.trim(), K = !A.value, X = !q.value || !I.value && ((W = B.value) == null ? void 0 : W.trim());
      return ee && K && X;
    }), Fe = F(() => {
      var ee;
      return (ee = re.value) == null ? void 0 : ee.trim();
    }), Ie = F(() => !!(h.value === 2 || z.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), L = F(() => z.value || o.workspacePath || null);
    async function V() {
      var ee;
      if (A.value = null, !!((ee = S.value) != null && ee.trim()))
        try {
          const K = await r({ path: S.value, type: "workspace" });
          K.valid || (A.value = K.error || "Invalid path");
        } catch (K) {
          A.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function oe() {
      var ee;
      if (I.value = null, E.value = null, O.value = null, !!((ee = B.value) != null && ee.trim()))
        try {
          const K = await r({ path: B.value, type: "models" });
          if (K.valid)
            O.value = K.model_count ?? null;
          else if (I.value = K.error || "Invalid path", K.suggestion) {
            E.value = K.suggestion, B.value = K.suggestion, I.value = null;
            const X = await r({ path: K.suggestion, type: "models" });
            X.valid && (O.value = X.model_count ?? null);
          }
        } catch (K) {
          I.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function ae() {
      var ee, K, X, D, W;
      if (A.value = null, I.value = null, await V(), (ee = A.value) != null && ee.includes("already exists")) {
        A.value = null, z.value = ((K = S.value) == null ? void 0 : K.trim()) || o.defaultPath, h.value = 2, fe();
        return;
      }
      if (!A.value && !(q.value && ((X = B.value) != null && X.trim()) && (await oe(), I.value))) {
        ve.value = !0;
        try {
          await l({
            workspace_path: ((D = S.value) == null ? void 0 : D.trim()) || o.defaultPath,
            models_directory: q.value && ((W = B.value) == null ? void 0 : W.trim()) || null
          }), _e.value = 0, Se.value = Date.now();
          const ce = setInterval(async () => {
            var Te;
            if (Se.value && Date.now() - Se.value > II) {
              clearInterval(ce), ve.value = !1, A.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Ke = await i();
              if (_e.value = 0, Ke.state === "idle" && ve.value) {
                clearInterval(ce), ve.value = !1, A.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              De.value = { progress: Ke.progress, message: Ke.message }, Ke.state === "complete" ? (clearInterval(ce), ve.value = !1, z.value = ((Te = S.value) == null ? void 0 : Te.trim()) || o.defaultPath, h.value = 2, fe()) : Ke.state === "error" && (clearInterval(ce), ve.value = !1, A.value = Ke.error || "Workspace creation failed");
            } catch (Ke) {
              _e.value++, console.warn(`Polling failure ${_e.value}/${so}:`, Ke), _e.value >= so && (clearInterval(ce), ve.value = !1, A.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (ce) {
          ve.value = !1, A.value = ce instanceof Error ? ce.message : "Failed to create workspace";
        }
      }
    }
    async function de() {
      Ee.value = !0, U.value = null;
      try {
        const ee = {
          name: re.value.trim() || "my-new-env",
          python_version: Y.value,
          comfyui_version: H.value,
          torch_backend: te.value,
          switch_after: Z.value,
          workspace_path: z.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(ee)).status === "started") {
          Ve.value = 0, ye.value = Date.now();
          const X = setInterval(async () => {
            if (ye.value && Date.now() - ye.value > Kl) {
              clearInterval(X), Ee.value = !1, U.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const D = await d();
              if (Ve.value = 0, D.state === "idle" && Ee.value) {
                clearInterval(X), Ee.value = !1, U.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (je.value = {
                progress: D.progress ?? 0,
                message: D.message,
                phase: D.phase
              }, D.state === "complete") {
                clearInterval(X), Ee.value = !1;
                const W = D.environment_name || ee.name;
                Z.value ? n("complete", W, z.value) : (p.value = "landing", n("environment-created-no-switch", W));
              } else D.state === "error" && (clearInterval(X), Ee.value = !1, U.value = D.error || "Environment creation failed");
            } catch (D) {
              Ve.value++, console.warn(`Polling failure ${Ve.value}/${so}:`, D), Ve.value >= so && (clearInterval(X), Ee.value = !1, U.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ee) {
        Ee.value = !1, U.value = ee instanceof Error ? ee.message : "Unknown error";
      }
    }
    async function fe() {
      be.value = !0;
      try {
        R.value = await v();
      } catch (ee) {
        console.error("Failed to load ComfyUI releases:", ee);
      } finally {
        be.value = !1;
      }
    }
    function ke() {
      w.value && n("switch-environment", w.value, z.value);
    }
    function $e() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : h.value === 2 && o.setupState === "no_workspace" && (h.value = 1);
    }
    function ne(ee, K) {
      x.value = !1, K ? n("complete", ee, z.value) : (n("environment-created-no-switch", ee), p.value = "landing");
    }
    function ue() {
    }
    Qe(async () => {
      if (o.detectedModelsDir && (B.value = o.detectedModelsDir), o.workspacePath && (z.value = o.workspacePath), h.value === 2) {
        fe();
        const ee = setTimeout(() => {
          T.value = !1;
        }, 3e3);
        await Re(), clearTimeout(ee), T.value = !1;
      }
    });
    async function Re() {
      try {
        const ee = await d();
        if (console.log("[ComfyGit] Create progress check:", ee.state, ee), ee.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ee.environment_name), p.value = "create", Ee.value = !0, re.value = ee.environment_name || "my-new-env", je.value = {
            progress: ee.progress ?? 0,
            message: ee.message,
            phase: ee.phase
          }, Ce();
          return;
        }
      } catch (ee) {
        console.log("[ComfyGit] Create progress check failed:", ee);
      }
      try {
        const ee = await m();
        console.log("[ComfyGit] Import progress check:", ee.state, ee), ee.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ee.environment_name), N.value = {
          message: ee.message || "Importing...",
          phase: ee.phase || "",
          progress: ee.progress ?? 0,
          environmentName: ee.environment_name || ""
        }, P.value = !0, p.value = "import", x.value = !0);
      } catch (ee) {
        console.log("[ComfyGit] Import progress check failed:", ee);
      }
    }
    async function Ce() {
      Ve.value = 0, ye.value = Date.now();
      let ee = null;
      const K = async () => {
        if (ye.value && Date.now() - ye.value > Kl)
          return ee && clearInterval(ee), Ee.value = !1, U.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const D = await d();
          if (Ve.value = 0, D.state === "idle" && Ee.value)
            return ee && clearInterval(ee), Ee.value = !1, U.value = "Environment creation was interrupted. Please try again.", !1;
          if (je.value = {
            progress: D.progress ?? 0,
            message: D.message,
            phase: D.phase
          }, D.state === "complete") {
            ee && clearInterval(ee), Ee.value = !1;
            const W = D.environment_name || re.value;
            return n("complete", W, z.value), !1;
          } else if (D.state === "error")
            return ee && clearInterval(ee), Ee.value = !1, U.value = D.error || "Environment creation failed", !1;
          return !0;
        } catch (D) {
          return Ve.value++, console.warn(`Polling failure ${Ve.value}/${so}:`, D), Ve.value >= so ? (ee && clearInterval(ee), Ee.value = !1, U.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await K() && (ee = setInterval(async () => {
        !await K() && ee && clearInterval(ee);
      }, 2e3));
    }
    return (ee, K) => (a(), c(j, null, [
      C(vt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: K[15] || (K[15] = (X) => ee.$emit("close"))
      }, {
        header: g(() => [
          K[20] || (K[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", W6, [
            C(Mr),
            K[19] || (K[19] = t("span", { class: "header-divider" }, null, -1)),
            Ie.value ? (a(), c("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: K[0] || (K[0] = (X) => _.value = !0)
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
              onClick: K[1] || (K[1] = (X) => ee.$emit("close")),
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
          var X;
          return [
            h.value === 1 ? (a(), c("div", G6, [
              K[24] || (K[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", j6, [
                K[21] || (K[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                He(t("input", {
                  "onUpdate:modelValue": K[2] || (K[2] = (D) => S.value = D),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, H6), [
                  [At, S.value]
                ]),
                A.value ? (a(), c("p", K6, f(A.value), 1)) : y("", !0)
              ]),
              t("div", q6, [
                t("label", Y6, [
                  He(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": K[3] || (K[3] = (D) => q.value = D)
                  }, null, 512), [
                    [Ko, q.value]
                  ]),
                  K[22] || (K[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              q.value ? (a(), c("div", J6, [
                K[23] || (K[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                He(t("input", {
                  "onUpdate:modelValue": K[4] || (K[4] = (D) => B.value = D),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, X6), [
                  [At, B.value]
                ]),
                e.detectedModelsDir && !B.value ? (a(), c("p", Q6, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                E.value ? (a(), c("p", Z6, " Did you mean: " + f(E.value), 1)) : y("", !0),
                I.value ? (a(), c("p", eI, f(I.value), 1)) : y("", !0),
                O.value !== null && !I.value ? (a(), c("p", tI, " Found " + f(O.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              ve.value ? (a(), M(Tn, {
                key: 1,
                progress: De.value.progress,
                message: De.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            h.value === 2 ? (a(), c("div", sI, [
              T.value ? (a(), c("div", oI, [...K[25] || (K[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), c(j, { key: 1 }, [
                !o.cliInstalled && !$.value ? (a(), c("div", nI, [
                  t("div", aI, [
                    K[27] || (K[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    K[28] || (K[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: K[5] || (K[5] = (D) => $.value = !0),
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
                p.value === "landing" ? (a(), c("div", lI, [
                  K[34] || (K[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: K[6] || (K[6] = (D) => p.value = "create")
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
                    onClick: K[7] || (K[7] = (D) => {
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
                  (X = o.existingEnvironments) != null && X.length ? (a(), c(j, { key: 0 }, [
                    K[33] || (K[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", iI, [
                      (a(!0), c(j, null, ge(o.existingEnvironments, (D) => (a(), c("label", {
                        key: D,
                        class: xe(["env-option", { selected: w.value === D }])
                      }, [
                        He(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: D,
                          "onUpdate:modelValue": K[8] || (K[8] = (W) => w.value = W)
                        }, null, 8, rI), [
                          [Yt, w.value]
                        ]),
                        t("span", cI, f(D), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (a(), c("div", uI, [
                  Ee.value ? (a(), c("div", kI, [
                    t("p", $I, [
                      K[41] || (K[41] = b(" Creating environment ", -1)),
                      t("strong", null, f(re.value), 1),
                      K[42] || (K[42] = b("... ", -1))
                    ]),
                    C(Tn, {
                      progress: je.value.progress,
                      message: je.value.message,
                      "current-phase": je.value.phase,
                      "show-steps": !0,
                      steps: Je
                    }, null, 8, ["progress", "message", "current-phase"]),
                    K[43] || (K[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), c(j, { key: 0 }, [
                    K[40] || (K[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", dI, [
                      K[35] || (K[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      He(t("input", {
                        "onUpdate:modelValue": K[9] || (K[9] = (D) => re.value = D),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [At, re.value]
                      ])
                    ]),
                    t("div", fI, [
                      K[36] || (K[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      He(t("select", {
                        "onUpdate:modelValue": K[10] || (K[10] = (D) => Y.value = D),
                        class: "form-select"
                      }, [
                        (a(!0), c(j, null, ge(Ue(kr), (D) => (a(), c("option", {
                          key: D,
                          value: D
                        }, f(D), 9, mI))), 128))
                      ], 512), [
                        [ms, Y.value]
                      ])
                    ]),
                    t("div", vI, [
                      K[37] || (K[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      He(t("select", {
                        "onUpdate:modelValue": K[11] || (K[11] = (D) => H.value = D),
                        class: "form-select",
                        disabled: be.value
                      }, [
                        (a(!0), c(j, null, ge(R.value, (D) => (a(), c("option", {
                          key: D.tag_name,
                          value: D.tag_name
                        }, f(D.name), 9, gI))), 128))
                      ], 8, pI), [
                        [ms, H.value]
                      ])
                    ]),
                    t("div", hI, [
                      K[38] || (K[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      He(t("select", {
                        "onUpdate:modelValue": K[12] || (K[12] = (D) => te.value = D),
                        class: "form-select"
                      }, [
                        (a(!0), c(j, null, ge(Ue(Ya), (D) => (a(), c("option", {
                          key: D,
                          value: D
                        }, f(D) + f(D === "auto" ? " (detect GPU)" : ""), 9, yI))), 128))
                      ], 512), [
                        [ms, te.value]
                      ])
                    ]),
                    t("div", wI, [
                      t("label", bI, [
                        He(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": K[13] || (K[13] = (D) => Z.value = D)
                        }, null, 512), [
                          [Ko, Z.value]
                        ]),
                        K[39] || (K[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    U.value ? (a(), c("div", _I, f(U.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (a(), c("div", CI, [
                  C(Ir, {
                    "workspace-path": z.value,
                    "resume-import": P.value,
                    "initial-progress": N.value ?? void 0,
                    onImportComplete: ne,
                    onImportStarted: K[14] || (K[14] = (D) => x.value = !0),
                    onSourceCleared: ue
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: g(() => [
          t("div", xI, [
            C(Dr),
            t("div", SI, [
              h.value === 1 ? (a(), M(Me, {
                key: 0,
                variant: "primary",
                disabled: !le.value || ve.value,
                onClick: ae
              }, {
                default: g(() => [
                  b(f(ve.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : h.value === 2 ? (a(), c(j, { key: 1 }, [
                !Ee.value && !x.value && (p.value !== "landing" || o.setupState === "no_workspace" && !z.value) ? (a(), M(Me, {
                  key: 0,
                  variant: "secondary",
                  onClick: $e
                }, {
                  default: g(() => [...K[44] || (K[44] = [
                    b(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (a(), M(Me, {
                  key: 1,
                  variant: "primary",
                  disabled: !Fe.value || Ee.value,
                  onClick: de
                }, {
                  default: g(() => [
                    b(f(Ee.value ? "Creating..." : Z.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                p.value === "landing" && w.value ? (a(), M(Me, {
                  key: 2,
                  variant: "primary",
                  onClick: ke
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
      _.value ? (a(), M(V6, {
        key: 0,
        "workspace-path": L.value,
        onClose: K[16] || (K[16] = (X) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), TI = /* @__PURE__ */ pe(EI, [["__scopeId", "data-v-9a9aadc0"]]), PI = { class: "comfygit-panel" }, RI = { class: "panel-header" }, MI = { class: "header-left" }, DI = {
  key: 0,
  class: "header-info"
}, LI = { class: "header-actions" }, OI = { class: "env-switcher" }, NI = {
  key: 0,
  class: "header-info"
}, AI = { class: "branch-name" }, UI = { class: "panel-main" }, zI = { class: "sidebar" }, FI = { class: "sidebar-content" }, BI = { class: "sidebar-section" }, VI = { class: "sidebar-section" }, WI = { class: "sidebar-section" }, GI = {
  key: 0,
  class: "sidebar-badge"
}, jI = { class: "sidebar-footer" }, HI = { class: "content-area" }, KI = {
  key: 0,
  class: "error-message"
}, qI = {
  key: 1,
  class: "loading"
}, YI = { class: "dialog-content env-selector-dialog" }, JI = { class: "dialog-header" }, XI = { class: "dialog-body" }, QI = { class: "env-list" }, ZI = { class: "env-info" }, eE = { class: "env-name-row" }, tE = { class: "env-indicator" }, sE = { class: "env-name" }, oE = {
  key: 0,
  class: "env-branch"
}, nE = {
  key: 1,
  class: "current-label"
}, aE = { class: "env-stats" }, lE = ["onClick"], iE = { class: "toast-container" }, rE = { class: "toast-message" }, cE = /* @__PURE__ */ me({
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
      syncEnvironmentManually: x,
      repairWorkflowModels: $,
      getSetupStatus: P
    } = at(), N = _v(), { liveInstanceCount: T } = Er({ autoStart: !0 }), S = k(null), q = k([]), B = k([]), A = k([]), I = F(() => A.value.find((se) => se.is_current)), E = k(null), O = k(!1), re = k(1), Y = F(() => {
      var se;
      return ((se = E.value) == null ? void 0 : se.state) || "managed";
    }), H = k(!1), te = k(null), Z = k(null), U = k(!1), z = k(null), R = k(null), be = k(null), ve = k(!1), Ee = k(!1), De = k(""), je = k(null), Je = k({ state: "idle", progress: 0, message: "" });
    let _e = null, Se = null;
    const Ve = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ye = o.initialView ? Ve[o.initialView] : null, le = k((ye == null ? void 0 : ye.view) ?? "status"), Fe = k((ye == null ? void 0 : ye.section) ?? "this-env");
    function Ie(se, G) {
      le.value = se, Fe.value = G;
    }
    function L(se) {
      const Pe = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[se];
      Pe && Ie(Pe.view, Pe.section);
    }
    function V() {
      Ie("branches", "this-env");
    }
    function oe() {
      n("close"), setTimeout(() => {
        var G;
        const se = document.querySelectorAll("button.comfyui-button");
        for (const Pe of se)
          if (((G = Pe.textContent) == null ? void 0 : G.trim()) === "Manager") {
            Pe.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ae = k(null), de = k(!1), fe = k(!1), ke = k([]);
    let $e = 0;
    function ne(se, G = "info", Pe = 3e3) {
      const Be = ++$e;
      return ke.value.push({ id: Be, message: se, type: G }), Pe > 0 && setTimeout(() => {
        ke.value = ke.value.filter((tt) => tt.id !== Be);
      }, Pe), Be;
    }
    function ue(se) {
      ke.value = ke.value.filter((G) => G.id !== se);
    }
    function Re(se, G) {
      ne(se, G);
    }
    const Ce = F(() => {
      if (!S.value) return "neutral";
      const se = S.value.workflows, G = se.new.length > 0 || se.modified.length > 0 || se.deleted.length > 0 || S.value.has_changes;
      return S.value.comparison.is_synced ? G ? "warning" : "success" : "error";
    });
    F(() => S.value ? Ce.value === "success" ? "All synced" : Ce.value === "warning" ? "Uncommitted changes" : Ce.value === "error" ? "Not synced" : "" : "");
    async function ee() {
      H.value = !0, te.value = null;
      try {
        const [se, G, Pe, Be] = await Promise.all([
          l(!0),
          i(),
          r(),
          h()
        ]);
        S.value = se, q.value = G.commits, B.value = Pe.branches, A.value = Be, n("statusUpdate", se), z.value && await z.value.loadWorkflows(!0);
      } catch (se) {
        te.value = se instanceof Error ? se.message : "Failed to load status", S.value = null, q.value = [], B.value = [];
      } finally {
        H.value = !1;
      }
    }
    function K(se) {
      Z.value = se;
    }
    async function X(se) {
      var Pe;
      Z.value = null;
      const G = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      ae.value = {
        title: G ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: G ? "You have uncommitted changes that will be lost." : `Checkout commit ${se.short_hash || ((Pe = se.hash) == null ? void 0 : Pe.slice(0, 7))}?`,
        details: G ? ns() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: G ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: G,
        onConfirm: async () => {
          var dt;
          ae.value = null, Ke();
          const Be = ne(`Checking out ${se.short_hash || ((dt = se.hash) == null ? void 0 : dt.slice(0, 7))}...`, "info", 0), tt = await u(se.hash, G);
          ue(Be), tt.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(tt.message || "Checkout failed", "error");
        }
      };
    }
    async function D(se) {
      const G = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      ae.value = {
        title: G ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: G ? "You have uncommitted changes." : `Switch to branch "${se}"?`,
        details: G ? ns() : void 0,
        warning: G ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: G ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ae.value = null, Ke();
          const Pe = ne(`Switching to ${se}...`, "info", 0), Be = await m(se, G);
          ue(Pe), Be.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(Be.message || "Branch switch failed", "error");
        }
      };
    }
    async function W(se) {
      const G = ne(`Creating branch ${se}...`, "info", 0), Pe = await d(se);
      ue(G), Pe.status === "success" ? (ne(`Branch "${se}" created`, "success"), await ee()) : ne(Pe.message || "Failed to create branch", "error");
    }
    async function ce(se, G = !1) {
      const Pe = async (Be) => {
        var dt;
        const tt = ne(`Deleting branch ${se}...`, "info", 0);
        try {
          const Mt = await v(se, Be);
          ue(tt), Mt.status === "success" ? (ne(`Branch "${se}" deleted`, "success"), await ee()) : (dt = Mt.message) != null && dt.includes("not fully merged") ? ae.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${se}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ae.value = null, await Pe(!0);
            }
          } : ne(Mt.message || "Failed to delete branch", "error");
        } catch (Mt) {
          ue(tt);
          const as = Mt instanceof Error ? Mt.message : "Failed to delete branch";
          as.includes("not fully merged") ? ae.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${se}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ae.value = null, await Pe(!0);
            }
          } : ne(as, "error");
        }
      };
      ae.value = {
        title: "Delete Branch",
        message: `Delete branch "${se}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ae.value = null, await Pe(G);
        }
      };
    }
    async function Te(se) {
      Z.value = null;
      const G = prompt("Enter branch name:");
      if (G) {
        const Pe = ne(`Creating branch ${G}...`, "info", 0), Be = await d(G, se.hash);
        ue(Pe), Be.status === "success" ? (ne(`Branch "${G}" created from ${se.short_hash}`, "success"), await ee()) : ne(Be.message || "Failed to create branch", "error");
      }
    }
    function Ke() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function rt() {
      ae.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var se;
          ae.value = null, Ke(), ne("Restarting environment...", "info");
          try {
            (se = window.app) != null && se.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function wt() {
      ae.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var se;
          ae.value = null, ne("Stopping environment...", "info");
          try {
            (se = window.app) != null && se.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function bt(se, G) {
      U.value = !1, De.value = se, je.value = G || null, ve.value = !0;
    }
    async function ct() {
      ve.value = !1, Ee.value = !0, Ke(), Je.value = {
        progress: 10,
        state: ft(10),
        message: Gt(10)
      };
      try {
        await w(De.value, je.value || void 0), vs(), Fs();
      } catch (se) {
        jt(), Ee.value = !1, ne(`Failed to initiate switch: ${se instanceof Error ? se.message : "Unknown error"}`, "error"), Je.value = { state: "idle", progress: 0, message: "" }, je.value = null;
      }
    }
    function ft(se) {
      return se >= 100 ? "complete" : se >= 80 ? "validating" : se >= 60 ? "starting" : se >= 30 ? "syncing" : "preparing";
    }
    function Gt(se) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[ft(se)] || "";
    }
    function vs() {
      if (Se) return;
      let se = 10;
      const G = 60, Pe = 5e3, Be = 100, tt = (G - se) / (Pe / Be);
      Se = window.setInterval(() => {
        if (se += tt, se >= G && (se = G, jt()), Je.value.progress < G) {
          const dt = Math.floor(se);
          Je.value = {
            progress: dt,
            state: ft(dt),
            message: Gt(dt)
          };
        }
      }, Be);
    }
    function jt() {
      Se && (clearInterval(Se), Se = null);
    }
    function Fs() {
      _e || (_e = window.setInterval(async () => {
        try {
          let se = await N.getStatus();
          if ((!se || se.state === "idle") && (se = await p()), !se)
            return;
          const G = se.progress || 0;
          G >= 60 && jt();
          const Pe = Math.max(G, Je.value.progress), Be = se.state && se.state !== "idle" && se.state !== "unknown", tt = Be ? se.state : ft(Pe), dt = Be && se.message || Gt(Pe);
          Je.value = {
            state: tt,
            progress: Pe,
            message: dt
          }, se.state === "complete" ? (jt(), Es(), Ee.value = !1, ne(`✓ Switched to ${De.value}`, "success"), await ee(), De.value = "") : se.state === "rolled_back" ? (jt(), Es(), Ee.value = !1, ne("Switch failed, restored previous environment", "warning"), De.value = "") : se.state === "critical_failure" && (jt(), Es(), Ee.value = !1, ne(`Critical error during switch: ${se.message}`, "error"), De.value = "");
        } catch (se) {
          console.error("Failed to poll switch progress:", se);
        }
      }, 1e3));
    }
    function Es() {
      jt(), _e && (clearInterval(_e), _e = null);
    }
    function Zs() {
      var se;
      ve.value = !1, De.value = "", (se = E.value) != null && se.state && E.value.state !== "managed" && (re.value = E.value.state === "no_workspace" ? 1 : 2, O.value = !0);
    }
    async function wo(se) {
      de.value = !1, await ee(), ne(se.message, se.success ? "success" : "error");
    }
    async function bo() {
      fe.value = !1;
      const se = ne("Syncing environment...", "info", 0);
      try {
        const G = await x("skip", !0);
        if (ue(se), G.status === "success") {
          const Pe = [];
          G.nodes_installed.length && Pe.push(`${G.nodes_installed.length} installed`), G.nodes_removed.length && Pe.push(`${G.nodes_removed.length} removed`);
          const Be = Pe.length ? `: ${Pe.join(", ")}` : "";
          ne(`✓ Environment synced${Be}`, "success"), await ee();
        } else {
          const Pe = G.errors.length ? G.errors.join("; ") : G.message;
          ne(`Sync failed: ${Pe}`, "error");
        }
      } catch (G) {
        ue(se), ne(`Sync error: ${G instanceof Error ? G.message : "Unknown error"}`, "error");
      }
    }
    async function _o(se) {
      var G;
      try {
        const Pe = await $(se);
        Pe.failed.length === 0 ? ne(`✓ Repaired ${Pe.success} workflow${Pe.success === 1 ? "" : "s"}`, "success") : ne(`Repaired ${Pe.success}, failed: ${Pe.failed.length}`, "warning"), await ee();
      } catch (Pe) {
        ne(`Repair failed: ${Pe instanceof Error ? Pe.message : "Unknown error"}`, "error");
      } finally {
        (G = be.value) == null || G.resetRepairingState();
      }
    }
    async function he() {
      var G, Pe;
      const se = ne("Repairing environment...", "info", 0);
      try {
        const Be = await x("skip", !0);
        if (ue(se), Be.status === "success") {
          const tt = [];
          Be.nodes_installed.length && tt.push(`${Be.nodes_installed.length} installed`), Be.nodes_removed.length && tt.push(`${Be.nodes_removed.length} removed`);
          const dt = tt.length ? `: ${tt.join(", ")}` : "";
          ne(`✓ Environment repaired${dt}`, "success"), (G = be.value) == null || G.closeDetailModal(), await ee();
        } else {
          const tt = Be.errors.length ? Be.errors.join(", ") : Be.message || "Unknown error";
          ne(`Repair failed: ${tt}`, "error");
        }
      } catch (Be) {
        ue(se), ne(`Repair error: ${Be instanceof Error ? Be.message : "Unknown error"}`, "error");
      } finally {
        (Pe = be.value) == null || Pe.resetRepairingEnvironmentState();
      }
    }
    async function Q(se, G) {
      ne(`Environment '${se}' created`, "success"), await ee(), R.value && await R.value.loadEnvironments(), G && await bt(se);
    }
    async function We(se) {
      var G;
      if (((G = I.value) == null ? void 0 : G.name) === se) {
        ne("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      ae.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${se}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          ae.value = null;
          try {
            const Pe = await _(se);
            Pe.status === "success" ? (ne(`Environment "${se}" deleted`, "success"), await ee(), R.value && await R.value.loadEnvironments()) : ne(Pe.message || "Failed to delete environment", "error");
          } catch (Pe) {
            ne(`Error deleting environment: ${Pe instanceof Error ? Pe.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function pt(se, G) {
      O.value = !1;
      try {
        E.value = await P();
      } catch {
      }
      await bt(se, G);
    }
    function Ht() {
      O.value = !1, n("close");
    }
    async function ps(se, G) {
      await bt(se, G);
    }
    async function gs(se) {
      await ee(), await bt(se);
    }
    async function os(se) {
      E.value = await P(), console.log(`Environment '${se}' created. Available for switching.`);
    }
    function Le() {
      Ie("environments", "all-envs"), setTimeout(() => {
        var se;
        (se = R.value) == null || se.openCreateModal();
      }, 100);
    }
    function ns() {
      if (!S.value) return [];
      const se = [], G = S.value.workflows;
      return G.new.length && se.push(`${G.new.length} new workflow(s)`), G.modified.length && se.push(`${G.modified.length} modified workflow(s)`), G.deleted.length && se.push(`${G.deleted.length} deleted workflow(s)`), se;
    }
    return Qe(async () => {
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
      } catch (se) {
        console.warn("Setup status check failed, proceeding normally:", se);
      }
      await ee();
    }), (se, G) => {
      var Pe, Be, tt, dt, Mt, as, Bs, Vs, J, we, Oe, lt;
      return a(), c("div", PI, [
        t("div", RI, [
          t("div", MI, [
            G[31] || (G[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            S.value ? (a(), c("div", DI)) : y("", !0)
          ]),
          t("div", LI, [
            C(Mr),
            G[34] || (G[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: xe(["icon-btn", { spinning: H.value }]),
              onClick: ee,
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
        t("div", OI, [
          t("div", { class: "env-switcher-header" }, [
            G[35] || (G[35] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            t("div", { class: "env-control-buttons" }, [
              t("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: rt
              }, " Restart "),
              t("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: wt
              }, " Stop ")
            ])
          ]),
          t("button", {
            class: "env-switcher-btn",
            onClick: G[1] || (G[1] = (Ne) => Ie("environments", "all-envs"))
          }, [
            S.value ? (a(), c("div", NI, [
              t("span", null, f(((Pe = I.value) == null ? void 0 : Pe.name) || ((Be = S.value) == null ? void 0 : Be.environment) || "Loading..."), 1),
              t("span", AI, "(" + f(S.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            G[36] || (G[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", UI, [
          t("div", zI, [
            t("div", FI, [
              t("div", BI, [
                G[37] || (G[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: xe(["sidebar-item", { active: le.value === "status" && Fe.value === "this-env" }]),
                  onClick: G[2] || (G[2] = (Ne) => Ie("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: xe(["sidebar-item", { active: le.value === "workflows" }]),
                  onClick: G[3] || (G[3] = (Ne) => Ie("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: xe(["sidebar-item", { active: le.value === "models-env" }]),
                  onClick: G[4] || (G[4] = (Ne) => Ie("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: xe(["sidebar-item", { active: le.value === "branches" }]),
                  onClick: G[5] || (G[5] = (Ne) => Ie("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: xe(["sidebar-item", { active: le.value === "history" }]),
                  onClick: G[6] || (G[6] = (Ne) => Ie("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: xe(["sidebar-item", { active: le.value === "nodes" }]),
                  onClick: G[7] || (G[7] = (Ne) => Ie("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: xe(["sidebar-item", { active: le.value === "debug-env" }]),
                  onClick: G[8] || (G[8] = (Ne) => Ie("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              G[41] || (G[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", VI, [
                G[38] || (G[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: xe(["sidebar-item", { active: le.value === "environments" }]),
                  onClick: G[9] || (G[9] = (Ne) => Ie("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: xe(["sidebar-item", { active: le.value === "model-index" }]),
                  onClick: G[10] || (G[10] = (Ne) => Ie("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: xe(["sidebar-item", { active: le.value === "settings" }]),
                  onClick: G[11] || (G[11] = (Ne) => Ie("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: xe(["sidebar-item", { active: le.value === "debug-workspace" }]),
                  onClick: G[12] || (G[12] = (Ne) => Ie("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              G[42] || (G[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", WI, [
                G[40] || (G[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: xe(["sidebar-item", { active: le.value === "deploy" }]),
                  onClick: G[13] || (G[13] = (Ne) => Ie("deploy", "sharing"))
                }, [
                  G[39] || (G[39] = b(" DEPLOY ", -1)),
                  Ue(T) > 0 ? (a(), c("span", GI, f(Ue(T)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: xe(["sidebar-item", { active: le.value === "export" }]),
                  onClick: G[14] || (G[14] = (Ne) => Ie("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: xe(["sidebar-item", { active: le.value === "import" }]),
                  onClick: G[15] || (G[15] = (Ne) => Ie("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: xe(["sidebar-item", { active: le.value === "remotes" }]),
                  onClick: G[16] || (G[16] = (Ne) => Ie("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", jI, [
              C(Dr)
            ])
          ]),
          t("div", HI, [
            te.value ? (a(), c("div", KI, f(te.value), 1)) : !S.value && le.value === "status" ? (a(), c("div", qI, " Loading status... ")) : (a(), c(j, { key: 2 }, [
              le.value === "status" ? (a(), M(Km, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: be,
                status: S.value,
                "setup-state": Y.value,
                onSwitchBranch: V,
                onCommitChanges: G[17] || (G[17] = (Ne) => de.value = !0),
                onSyncEnvironment: G[18] || (G[18] = (Ne) => fe.value = !0),
                onViewWorkflows: G[19] || (G[19] = (Ne) => Ie("workflows", "this-env")),
                onViewHistory: G[20] || (G[20] = (Ne) => Ie("history", "this-env")),
                onViewDebug: G[21] || (G[21] = (Ne) => Ie("debug-env", "this-env")),
                onViewNodes: G[22] || (G[22] = (Ne) => Ie("nodes", "this-env")),
                onRepairMissingModels: _o,
                onRepairEnvironment: he,
                onStartSetup: G[23] || (G[23] = (Ne) => O.value = !0),
                onViewEnvironments: G[24] || (G[24] = (Ne) => Ie("environments", "all-envs")),
                onCreateEnvironment: Le
              }, null, 8, ["status", "setup-state"])) : le.value === "workflows" ? (a(), M(g0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: z,
                onRefresh: ee
              }, null, 512)) : le.value === "models-env" ? (a(), M(Q0, {
                key: 2,
                onNavigate: L
              })) : le.value === "branches" ? (a(), M(rv, {
                key: 3,
                branches: B.value,
                current: ((tt = S.value) == null ? void 0 : tt.branch) || null,
                onSwitch: D,
                onCreate: W,
                onDelete: ce
              }, null, 8, ["branches", "current"])) : le.value === "history" ? (a(), M(wv, {
                key: 4,
                commits: q.value,
                onSelect: K,
                onCheckout: X
              }, null, 8, ["commits"])) : le.value === "nodes" ? (a(), M(qw, {
                key: 5,
                "version-mismatches": ((Mt = (dt = S.value) == null ? void 0 : dt.comparison) == null ? void 0 : Mt.version_mismatches) || [],
                onOpenNodeManager: oe,
                onRepairEnvironment: he,
                onToast: Re
              }, null, 8, ["version-mismatches"])) : le.value === "debug-env" ? (a(), M(c2, { key: 6 })) : le.value === "environments" ? (a(), M(f$, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: R,
                onSwitch: bt,
                onCreated: Q,
                onDelete: We
              }, null, 512)) : le.value === "model-index" ? (a(), M(yw, {
                key: 8,
                onRefresh: ee
              })) : le.value === "settings" ? (a(), M(e2, { key: 9 })) : le.value === "debug-workspace" ? (a(), M(r2, { key: 10 })) : le.value === "deploy" ? (a(), M(WS, {
                key: 11,
                onToast: Re,
                onNavigate: L
              })) : le.value === "export" ? (a(), M(V$, { key: 12 })) : le.value === "import" ? (a(), M(O3, {
                key: 13,
                onImportCompleteSwitch: gs
              })) : le.value === "remotes" ? (a(), M(Dk, {
                key: 14,
                onToast: Re
              })) : y("", !0)
            ], 64))
          ])
        ]),
        Z.value ? (a(), M(i4, {
          key: 0,
          commit: Z.value,
          onClose: G[25] || (G[25] = (Ne) => Z.value = null),
          onCheckout: X,
          onCreateBranch: Te
        }, null, 8, ["commit"])) : y("", !0),
        ae.value ? (a(), M(qa, {
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
          onCancel: G[26] || (G[26] = (Ne) => ae.value = null),
          onSecondary: ae.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        C(a6, {
          show: ve.value,
          "from-environment": ((as = I.value) == null ? void 0 : as.name) || "unknown",
          "to-environment": De.value,
          onConfirm: ct,
          onClose: Zs
        }, null, 8, ["show", "from-environment", "to-environment"]),
        de.value && S.value ? (a(), M(Rr, {
          key: 2,
          status: S.value,
          "as-modal": !0,
          onClose: G[27] || (G[27] = (Ne) => de.value = !1),
          onCommitted: wo
        }, null, 8, ["status"])) : y("", !0),
        fe.value && S.value ? (a(), M(x6, {
          key: 3,
          show: fe.value,
          "mismatch-details": {
            missing_nodes: S.value.comparison.missing_nodes,
            extra_nodes: S.value.comparison.extra_nodes
          },
          onConfirm: bo,
          onClose: G[28] || (G[28] = (Ne) => fe.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        C(g6, {
          show: Ee.value,
          state: Je.value.state,
          progress: Je.value.progress,
          message: Je.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        U.value ? (a(), c("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: G[30] || (G[30] = nt((Ne) => U.value = !1, ["self"]))
        }, [
          t("div", YI, [
            t("div", JI, [
              G[44] || (G[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: G[29] || (G[29] = (Ne) => U.value = !1)
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
            t("div", XI, [
              G[45] || (G[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", QI, [
                (a(!0), c(j, null, ge(A.value, (Ne) => (a(), c("div", {
                  key: Ne.name,
                  class: xe(["env-item", { current: Ne.is_current }])
                }, [
                  t("div", ZI, [
                    t("div", eE, [
                      t("span", tE, f(Ne.is_current ? "●" : "○"), 1),
                      t("span", sE, f(Ne.name), 1),
                      Ne.current_branch ? (a(), c("span", oE, "(" + f(Ne.current_branch) + ")", 1)) : y("", !0),
                      Ne.is_current ? (a(), c("span", nE, "CURRENT")) : y("", !0)
                    ]),
                    t("div", aE, f(Ne.workflow_count) + " workflows • " + f(Ne.node_count) + " nodes ", 1)
                  ]),
                  Ne.is_current ? y("", !0) : (a(), c("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (ko) => bt(Ne.name)
                  }, " SWITCH ", 8, lE))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        O.value ? (a(), M(TI, {
          key: 5,
          "default-path": ((Bs = E.value) == null ? void 0 : Bs.default_path) || "~/comfygit",
          "detected-models-dir": ((Vs = E.value) == null ? void 0 : Vs.detected_models_dir) || null,
          "initial-step": re.value,
          "existing-environments": ((J = E.value) == null ? void 0 : J.environments) || [],
          "cli-installed": ((we = E.value) == null ? void 0 : we.cli_installed) ?? !0,
          "setup-state": ((Oe = E.value) == null ? void 0 : Oe.state) || "no_workspace",
          "workspace-path": ((lt = E.value) == null ? void 0 : lt.workspace_path) || null,
          onComplete: pt,
          onClose: Ht,
          onSwitchEnvironment: ps,
          onEnvironmentCreatedNoSwitch: os
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", iE, [
          C(od, { name: "toast" }, {
            default: g(() => [
              (a(!0), c(j, null, ge(ke.value, (Ne) => (a(), c("div", {
                key: Ne.id,
                class: xe(["toast", Ne.type])
              }, [
                t("span", rE, f(Ne.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), uE = /* @__PURE__ */ pe(cE, [["__scopeId", "data-v-037b3ee3"]]), dE = { class: "item-header" }, fE = { class: "item-info" }, mE = { class: "filename" }, vE = { class: "metadata" }, pE = { class: "size" }, gE = {
  key: 0,
  class: "type"
}, hE = { class: "item-actions" }, yE = {
  key: 0,
  class: "progress-section"
}, wE = { class: "progress-bar" }, bE = { class: "progress-stats" }, _E = { class: "downloaded" }, kE = { class: "speed" }, $E = {
  key: 0,
  class: "eta"
}, CE = {
  key: 1,
  class: "status-msg paused"
}, xE = {
  key: 2,
  class: "status-msg queued"
}, SE = {
  key: 3,
  class: "status-msg completed"
}, IE = {
  key: 4,
  class: "status-msg failed"
}, EE = {
  key: 0,
  class: "retries"
}, TE = /* @__PURE__ */ me({
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
      class: xe(["download-item", `status-${e.item.status}`])
    }, [
      t("div", dE, [
        t("div", fE, [
          t("div", mE, f(e.item.filename), 1),
          t("div", vE, [
            t("span", pE, f(n(e.item.size)), 1),
            e.item.type ? (a(), c("span", gE, f(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", hE, [
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
      e.item.status === "downloading" ? (a(), c("div", yE, [
        t("div", wE, [
          t("div", {
            class: "progress-fill",
            style: Wt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", bE, [
          t("span", _E, f(n(e.item.downloaded)) + " / " + f(n(e.item.size)), 1),
          t("span", kE, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), c("span", $E, f(i(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), c("div", CE, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), c("div", xE, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), c("div", SE, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), c("div", IE, [
        b(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), c("span", EE, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), So = /* @__PURE__ */ pe(TE, [["__scopeId", "data-v-2110df65"]]), PE = { class: "queue-title" }, RE = { class: "count" }, ME = { class: "queue-actions" }, DE = { class: "action-label" }, LE = {
  key: 0,
  class: "overall-progress"
}, OE = { class: "progress-bar" }, NE = {
  key: 0,
  class: "current-mini"
}, AE = { class: "filename" }, UE = { class: "speed" }, zE = {
  key: 1,
  class: "queue-content"
}, FE = {
  key: 0,
  class: "section"
}, BE = {
  key: 1,
  class: "section"
}, VE = { class: "section-header" }, WE = { class: "section-label paused" }, GE = { class: "items-list" }, jE = {
  key: 2,
  class: "section"
}, HE = { class: "section-header" }, KE = { class: "section-label" }, qE = { class: "items-list" }, YE = {
  key: 3,
  class: "section"
}, JE = { class: "section-header" }, XE = { class: "section-label" }, QE = { class: "items-list" }, ZE = {
  key: 4,
  class: "section"
}, eT = { class: "section-header" }, tT = { class: "section-label failed" }, sT = { class: "items-list" }, oT = /* @__PURE__ */ me({
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
    } = Qo(), x = k(!1);
    let $ = null;
    xt(
      () => ({
        active: d.value,
        failed: i.value.length,
        paused: r.value.length,
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
    function N(S) {
      m(S);
    }
    function T(S) {
      return S === 0 ? "" : `${(S / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (S, q) => (a(), M(yt, { to: "body" }, [
      Ue(u) ? (a(), c("div", {
        key: 0,
        class: xe(["model-download-queue", { minimized: !x.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: q[0] || (q[0] = (B) => x.value = !x.value)
        }, [
          t("div", PE, [
            q[4] || (q[4] = t("span", { class: "icon" }, "↓", -1)),
            q[5] || (q[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", RE, "(" + f(Ue(d)) + "/" + f(Ue(s).items.length) + ")", 1)
          ]),
          t("div", ME, [
            t("span", DE, f(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (a(), c("div", zE, [
          Ue(o) ? (a(), c("div", FE, [
            q[6] || (q[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            C(So, {
              item: Ue(o),
              onCancel: q[1] || (q[1] = (B) => N(Ue(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          Ue(r).length > 0 ? (a(), c("div", BE, [
            t("div", VE, [
              t("span", WE, "Paused (" + f(Ue(r).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: q[2] || (q[2] = //@ts-ignore
                (...B) => Ue(w) && Ue(w)(...B))
              }, "Resume All")
            ]),
            t("div", GE, [
              (a(!0), c(j, null, ge(Ue(r), (B) => (a(), M(So, {
                key: B.id,
                item: B,
                onResume: (A) => Ue(h)(B.id),
                onRemove: (A) => Ue(p)(B.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Ue(n).length > 0 ? (a(), c("div", jE, [
            t("div", HE, [
              t("span", KE, "Queued (" + f(Ue(n).length) + ")", 1)
            ]),
            t("div", qE, [
              (a(!0), c(j, null, ge(Ue(n), (B) => (a(), M(So, {
                key: B.id,
                item: B,
                onCancel: (A) => N(B.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          Ue(l).length > 0 ? (a(), c("div", YE, [
            t("div", JE, [
              t("span", XE, "Completed (" + f(Ue(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: q[3] || (q[3] = //@ts-ignore
                (...B) => Ue(_) && Ue(_)(...B))
              }, "Clear")
            ]),
            t("div", QE, [
              (a(!0), c(j, null, ge(Ue(l).slice(0, 3), (B) => (a(), M(So, {
                key: B.id,
                item: B,
                onRemove: (A) => Ue(p)(B.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Ue(i).length > 0 ? (a(), c("div", ZE, [
            t("div", eT, [
              t("span", tT, "Failed (" + f(Ue(i).length) + ")", 1)
            ]),
            t("div", sT, [
              (a(!0), c(j, null, ge(Ue(i), (B) => (a(), M(So, {
                key: B.id,
                item: B,
                onRetry: (A) => Ue(v)(B.id),
                onRemove: (A) => Ue(p)(B.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), c("div", LE, [
          t("div", OE, [
            t("div", {
              class: "progress-fill",
              style: Wt({ width: `${P.value}%` })
            }, null, 4)
          ]),
          Ue(o) ? (a(), c("div", NE, [
            t("span", AE, f(Ue(o).filename), 1),
            t("span", UE, f(T(Ue(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), nT = /* @__PURE__ */ pe(oT, [["__scopeId", "data-v-60751cfa"]]), aT = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', lT = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', iT = {
  comfy: aT,
  phosphor: lT
}, Ja = "comfy", Lr = "comfygit-theme";
let Hs = null, Or = Ja;
function rT() {
  try {
    const e = localStorage.getItem(Lr);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Ja;
}
function Nr(e = Ja) {
  Hs && Hs.remove(), Hs = document.createElement("style"), Hs.id = "comfygit-theme-styles", Hs.setAttribute("data-theme", e), Hs.textContent = iT[e], document.head.appendChild(Hs), document.body.setAttribute("data-comfygit-theme", e), Or = e;
  try {
    localStorage.setItem(Lr, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function cT() {
  return Or;
}
function uT(e) {
  Nr(e);
}
function dT(e) {
  var i;
  const { ui_id: s, state: o } = e || {}, n = (o == null ? void 0 : o.history) || {};
  if (!s)
    return null;
  const l = n[s];
  return l && l.result === "error" && ((i = l.status) == null ? void 0 : i.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Xa = document.createElement("link");
Xa.rel = "stylesheet";
Xa.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Xa);
const fT = rT();
Nr(fT);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), uT(e);
  },
  getTheme: () => {
    const e = cT();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let qt = null, Lt = null, Uo = null, Io = null, ql = null;
const mo = k(null);
let Qa = "managed", Ar = !1;
async function gn() {
  var e;
  if (!((e = Ds) != null && e.api)) return null;
  try {
    const s = await Ds.api.fetchApi("/v2/comfygit/status");
    s.ok && (mo.value = await s.json());
  } catch {
  }
}
async function $a() {
  var e;
  if ((e = Ds) != null && e.api)
    try {
      const s = await Ds.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        Qa = o.state, Ar = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function Ca() {
  var s;
  if (Qa === "managed" || !Ar) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function mT() {
  if (!mo.value) return !1;
  const e = mo.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || mo.value.has_changes;
}
function Yl(e) {
  qt && qt.remove(), qt = document.createElement("div"), qt.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", qt.appendChild(s), qt.addEventListener("click", (l) => {
    l.target === qt && ca();
  });
  const o = (l) => {
    l.key === "Escape" && (ca(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), Ha({
    render: () => Vn(uE, {
      initialView: e,
      onClose: ca,
      onStatusUpdate: async (l) => {
        mo.value = l, zo(), await $a(), xa(), Ca();
      }
    })
  }).mount(s), document.body.appendChild(qt);
}
function ca() {
  qt && (qt.remove(), qt = null);
}
function vT(e) {
  Eo(), Lt = document.createElement("div"), Lt.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  Lt.style.position = "fixed", Lt.style.top = `${s.bottom + 8}px`, Lt.style.right = `${window.innerWidth - s.right}px`, Lt.style.zIndex = "10001";
  const o = (l) => {
    Lt && !Lt.contains(l.target) && l.target !== e && (Eo(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const n = (l) => {
    l.key === "Escape" && (Eo(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), Uo = Ha({
    render: () => Vn(Rr, {
      status: mo.value,
      onClose: Eo,
      onCommitted: (l) => {
        Eo(), pT(l.success, l.message), gn().then(zo);
      }
    })
  }), Uo.mount(Lt), document.body.appendChild(Lt);
}
function Eo() {
  Uo && (Uo.unmount(), Uo = null), Lt && (Lt.remove(), Lt = null);
}
function pT(e, s) {
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
function gT() {
  Io || (Io = document.createElement("div"), Io.className = "comfygit-download-queue-root", ql = Ha({
    render: () => Vn(nT)
  }), ql.mount(Io), document.body.appendChild(Io), console.log("[ComfyGit] Model download queue mounted"));
}
let zt = null;
function zo() {
  if (!zt) return;
  const e = zt.querySelector(".commit-indicator");
  e && (e.style.display = mT() ? "block" : "none");
}
function xa() {
  if (!zt) return;
  const e = Qa !== "managed";
  zt.disabled = e, zt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Ur = document.createElement("style");
Ur.textContent = `
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
document.head.appendChild(Ur);
Ds.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var l, i;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const s = document.createElement("button");
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = Yl, zt = document.createElement("button"), zt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", zt.innerHTML = 'Commit <span class="commit-indicator"></span>', zt.title = "Quick Commit", zt.onclick = () => vT(zt), e.appendChild(s), e.appendChild(zt), (i = (l = Ds.menu) == null ? void 0 : l.settingsGroup) != null && i.element && (Ds.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), gT();
    const { loadPendingDownloads: o } = Qo();
    o(), await Promise.all([gn(), $a()]), zo(), xa(), Ca(), setTimeout(Ca, 100), setInterval(async () => {
      await Promise.all([gn(), $a()]), zo(), xa();
    }, 3e4);
    const n = Ds.api;
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
        const x = document.createElement("div");
        x.textContent = "Node installation failed", x.style.cssText = "font-weight: 600; color: #e53935;", _.appendChild(x);
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
          w.remove(), Yl("debug-env");
        }, w.appendChild(P);
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
        const { change_type: h, workflow_name: w } = v.detail;
        console.log(`[ComfyGit] Workflow ${h}: ${w}`), await gn(), zo();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let m = !1;
      n.addEventListener("status", async (v) => {
        const h = v.detail != null;
        h && !m && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), r()) : u()), m = h;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (v) => {
        const h = dT(v.detail);
        h && d(h);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
