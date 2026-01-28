import { app as Vt } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ua(e) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) s[o] = 1;
  return (o) => o in s;
}
const tt = {}, fo = [], gs = () => {
}, ni = () => !1, zn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Na = (e) => e.startsWith("onUpdate:"), pt = Object.assign, za = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, Yr = Object.prototype.hasOwnProperty, Ze = (e, s) => Yr.call(e, s), Be = Array.isArray, mo = (e) => tn(e) === "[object Map]", ko = (e) => tn(e) === "[object Set]", cl = (e) => tn(e) === "[object Date]", Ge = (e) => typeof e == "function", ct = (e) => typeof e == "string", ts = (e) => typeof e == "symbol", et = (e) => e !== null && typeof e == "object", ai = (e) => (et(e) || Ge(e)) && Ge(e.then) && Ge(e.catch), li = Object.prototype.toString, tn = (e) => li.call(e), Jr = (e) => tn(e).slice(8, -1), ii = (e) => tn(e) === "[object Object]", Fa = (e) => ct(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Uo = /* @__PURE__ */ Ua(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Fn = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, Xr = /-\w/g, Ht = Fn(
  (e) => e.replace(Xr, (s) => s.slice(1).toUpperCase())
), Qr = /\B([A-Z])/g, Bs = Fn(
  (e) => e.replace(Qr, "-$1").toLowerCase()
), Bn = Fn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ea = Fn(
  (e) => e ? `on${Bn(e)}` : ""
), Ns = (e, s) => !Object.is(e, s), _n = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, ri = (e, s, o, n = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, Vn = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, Zr = (e) => {
  const s = ct(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let ul;
const Wn = () => ul || (ul = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Kt(e) {
  if (Be(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = ct(n) ? oc(n) : Kt(n);
      if (l)
        for (const i in l)
          s[i] = l[i];
    }
    return s;
  } else if (ct(e) || et(e))
    return e;
}
const ec = /;(?![^(]*\))/g, tc = /:([^]+)/, sc = /\/\*[^]*?\*\//g;
function oc(e) {
  const s = {};
  return e.replace(sc, "").split(ec).forEach((o) => {
    if (o) {
      const n = o.split(tc);
      n.length > 1 && (s[n[0].trim()] = n[1].trim());
    }
  }), s;
}
function Te(e) {
  let s = "";
  if (ct(e))
    s = e;
  else if (Be(e))
    for (let o = 0; o < e.length; o++) {
      const n = Te(e[o]);
      n && (s += n + " ");
    }
  else if (et(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const nc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ac = /* @__PURE__ */ Ua(nc);
function ci(e) {
  return !!e || e === "";
}
function lc(e, s) {
  if (e.length !== s.length) return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++)
    o = eo(e[n], s[n]);
  return o;
}
function eo(e, s) {
  if (e === s) return !0;
  let o = cl(e), n = cl(s);
  if (o || n)
    return o && n ? e.getTime() === s.getTime() : !1;
  if (o = ts(e), n = ts(s), o || n)
    return e === s;
  if (o = Be(e), n = Be(s), o || n)
    return o && n ? lc(e, s) : !1;
  if (o = et(e), n = et(s), o || n) {
    if (!o || !n)
      return !1;
    const l = Object.keys(e).length, i = Object.keys(s).length;
    if (l !== i)
      return !1;
    for (const r in e) {
      const u = e.hasOwnProperty(r), d = s.hasOwnProperty(r);
      if (u && !d || !u && d || !eo(e[r], s[r]))
        return !1;
    }
  }
  return String(e) === String(s);
}
function Ba(e, s) {
  return e.findIndex((o) => eo(o, s));
}
const ui = (e) => !!(e && e.__v_isRef === !0), f = (e) => ct(e) ? e : e == null ? "" : Be(e) || et(e) && (e.toString === li || !Ge(e.toString)) ? ui(e) ? f(e.value) : JSON.stringify(e, di, 2) : String(e), di = (e, s) => ui(s) ? di(e, s.value) : mo(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [n, l], i) => (o[ta(n, i) + " =>"] = l, o),
    {}
  )
} : ko(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => ta(o))
} : ts(s) ? ta(s) : et(s) && !Be(s) && !ii(s) ? String(s) : s, ta = (e, s = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ts(e) ? `Symbol(${(o = e.description) != null ? o : s})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Dt;
class ic {
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
function rc() {
  return Dt;
}
let nt;
const sa = /* @__PURE__ */ new WeakSet();
class fi {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Dt && Dt.active && Dt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, sa.has(this) && (sa.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || vi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, dl(this), pi(this);
    const s = nt, o = Zt;
    nt = this, Zt = !0;
    try {
      return this.fn();
    } finally {
      gi(this), nt = s, Zt = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let s = this.deps; s; s = s.nextDep)
        Ga(s);
      this.deps = this.depsTail = void 0, dl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? sa.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    wa(this) && this.run();
  }
  get dirty() {
    return wa(this);
  }
}
let mi = 0, No, zo;
function vi(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = zo, zo = e;
    return;
  }
  e.next = No, No = e;
}
function Va() {
  mi++;
}
function Wa() {
  if (--mi > 0)
    return;
  if (zo) {
    let s = zo;
    for (zo = void 0; s; ) {
      const o = s.next;
      s.next = void 0, s.flags &= -9, s = o;
    }
  }
  let e;
  for (; No; ) {
    let s = No;
    for (No = void 0; s; ) {
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
function pi(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function gi(e) {
  let s, o = e.depsTail, n = o;
  for (; n; ) {
    const l = n.prevDep;
    n.version === -1 ? (n === o && (o = l), Ga(n), cc(n)) : s = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
  }
  e.deps = s, e.depsTail = o;
}
function wa(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (hi(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function hi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ko) || (e.globalVersion = Ko, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !wa(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = nt, n = Zt;
  nt = e, Zt = !0;
  try {
    pi(e);
    const l = e.fn(e._value);
    (s.version === 0 || Ns(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    nt = o, Zt = n, gi(e), e.flags &= -3;
  }
}
function Ga(e, s = !1) {
  const { dep: o, prevSub: n, nextSub: l } = e;
  if (n && (n.nextSub = l, e.prevSub = void 0), l && (l.prevSub = n, e.nextSub = void 0), o.subs === e && (o.subs = n, !n && o.computed)) {
    o.computed.flags &= -5;
    for (let i = o.computed.deps; i; i = i.nextDep)
      Ga(i, !0);
  }
  !s && !--o.sc && o.map && o.map.delete(o.key);
}
function cc(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let Zt = !0;
const yi = [];
function Ss() {
  yi.push(Zt), Zt = !1;
}
function Is() {
  const e = yi.pop();
  Zt = e === void 0 ? !0 : e;
}
function dl(e) {
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
let Ko = 0;
class uc {
  constructor(s, o) {
    this.sub = s, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ja {
  // TODO isolatedDeclarations "__v_skip"
  constructor(s) {
    this.computed = s, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(s) {
    if (!nt || !Zt || nt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== nt)
      o = this.activeLink = new uc(nt, this), nt.deps ? (o.prevDep = nt.depsTail, nt.depsTail.nextDep = o, nt.depsTail = o) : nt.deps = nt.depsTail = o, wi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const n = o.nextDep;
      n.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = n), o.prevDep = nt.depsTail, o.nextDep = void 0, nt.depsTail.nextDep = o, nt.depsTail = o, nt.deps === o && (nt.deps = n);
    }
    return o;
  }
  trigger(s) {
    this.version++, Ko++, this.notify(s);
  }
  notify(s) {
    Va();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      Wa();
    }
  }
}
function wi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const s = e.dep.computed;
    if (s && !e.dep.subs) {
      s.flags |= 20;
      for (let n = s.deps; n; n = n.nextDep)
        wi(n);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const _a = /* @__PURE__ */ new WeakMap(), Qs = Symbol(
  ""
), ka = Symbol(
  ""
), qo = Symbol(
  ""
);
function _t(e, s, o) {
  if (Zt && nt) {
    let n = _a.get(e);
    n || _a.set(e, n = /* @__PURE__ */ new Map());
    let l = n.get(o);
    l || (n.set(o, l = new ja()), l.map = n, l.key = o), l.track();
  }
}
function $s(e, s, o, n, l, i) {
  const r = _a.get(e);
  if (!r) {
    Ko++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (Va(), s === "clear")
    r.forEach(u);
  else {
    const d = Be(e), m = d && Fa(o);
    if (d && o === "length") {
      const v = Number(n);
      r.forEach((g, w) => {
        (w === "length" || w === qo || !ts(w) && w >= v) && u(g);
      });
    } else
      switch ((o !== void 0 || r.has(void 0)) && u(r.get(o)), m && u(r.get(qo)), s) {
        case "add":
          d ? m && u(r.get("length")) : (u(r.get(Qs)), mo(e) && u(r.get(ka)));
          break;
        case "delete":
          d || (u(r.get(Qs)), mo(e) && u(r.get(ka)));
          break;
        case "set":
          mo(e) && u(r.get(Qs));
          break;
      }
  }
  Wa();
}
function ao(e) {
  const s = Je(e);
  return s === e ? s : (_t(s, "iterate", qo), Gt(e) ? s : s.map(ss));
}
function Gn(e) {
  return _t(e = Je(e), "iterate", qo), e;
}
function Os(e, s) {
  return Es(e) ? Zs(e) ? yo(ss(s)) : yo(s) : ss(s);
}
const dc = {
  __proto__: null,
  [Symbol.iterator]() {
    return oa(this, Symbol.iterator, (e) => Os(this, e));
  },
  concat(...e) {
    return ao(this).concat(
      ...e.map((s) => Be(s) ? ao(s) : s)
    );
  },
  entries() {
    return oa(this, "entries", (e) => (e[1] = Os(this, e[1]), e));
  },
  every(e, s) {
    return _s(this, "every", e, s, void 0, arguments);
  },
  filter(e, s) {
    return _s(
      this,
      "filter",
      e,
      s,
      (o) => o.map((n) => Os(this, n)),
      arguments
    );
  },
  find(e, s) {
    return _s(
      this,
      "find",
      e,
      s,
      (o) => Os(this, o),
      arguments
    );
  },
  findIndex(e, s) {
    return _s(this, "findIndex", e, s, void 0, arguments);
  },
  findLast(e, s) {
    return _s(
      this,
      "findLast",
      e,
      s,
      (o) => Os(this, o),
      arguments
    );
  },
  findLastIndex(e, s) {
    return _s(this, "findLastIndex", e, s, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, s) {
    return _s(this, "forEach", e, s, void 0, arguments);
  },
  includes(...e) {
    return na(this, "includes", e);
  },
  indexOf(...e) {
    return na(this, "indexOf", e);
  },
  join(e) {
    return ao(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return na(this, "lastIndexOf", e);
  },
  map(e, s) {
    return _s(this, "map", e, s, void 0, arguments);
  },
  pop() {
    return To(this, "pop");
  },
  push(...e) {
    return To(this, "push", e);
  },
  reduce(e, ...s) {
    return fl(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return fl(this, "reduceRight", e, s);
  },
  shift() {
    return To(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, s) {
    return _s(this, "some", e, s, void 0, arguments);
  },
  splice(...e) {
    return To(this, "splice", e);
  },
  toReversed() {
    return ao(this).toReversed();
  },
  toSorted(e) {
    return ao(this).toSorted(e);
  },
  toSpliced(...e) {
    return ao(this).toSpliced(...e);
  },
  unshift(...e) {
    return To(this, "unshift", e);
  },
  values() {
    return oa(this, "values", (e) => Os(this, e));
  }
};
function oa(e, s, o) {
  const n = Gn(e), l = n[s]();
  return n !== e && !Gt(e) && (l._next = l.next, l.next = () => {
    const i = l._next();
    return i.done || (i.value = o(i.value)), i;
  }), l;
}
const fc = Array.prototype;
function _s(e, s, o, n, l, i) {
  const r = Gn(e), u = r !== e && !Gt(e), d = r[s];
  if (d !== fc[s]) {
    const g = d.apply(e, i);
    return u ? ss(g) : g;
  }
  let m = o;
  r !== e && (u ? m = function(g, w) {
    return o.call(this, Os(e, g), w, e);
  } : o.length > 2 && (m = function(g, w) {
    return o.call(this, g, w, e);
  }));
  const v = d.call(r, m, n);
  return u && l ? l(v) : v;
}
function fl(e, s, o, n) {
  const l = Gn(e);
  let i = o;
  return l !== e && (Gt(e) ? o.length > 3 && (i = function(r, u, d) {
    return o.call(this, r, u, d, e);
  }) : i = function(r, u, d) {
    return o.call(this, r, Os(e, u), d, e);
  }), l[s](i, ...n);
}
function na(e, s, o) {
  const n = Je(e);
  _t(n, "iterate", qo);
  const l = n[s](...o);
  return (l === -1 || l === !1) && qa(o[0]) ? (o[0] = Je(o[0]), n[s](...o)) : l;
}
function To(e, s, o = []) {
  Ss(), Va();
  const n = Je(e)[s].apply(e, o);
  return Wa(), Is(), n;
}
const mc = /* @__PURE__ */ Ua("__proto__,__v_isRef,__isVue"), _i = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ts)
);
function vc(e) {
  ts(e) || (e = String(e));
  const s = Je(this);
  return _t(s, "has", e), s.hasOwnProperty(e);
}
class ki {
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
      return n === (l ? i ? Cc : xi : i ? Ci : $i).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(n) ? s : void 0;
    const r = Be(s);
    if (!l) {
      let d;
      if (r && (d = dc[o]))
        return d;
      if (o === "hasOwnProperty")
        return vc;
    }
    const u = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ct(s) ? s : n
    );
    if ((ts(o) ? _i.has(o) : mc(o)) || (l || _t(s, "get", o), i))
      return u;
    if (Ct(u)) {
      const d = r && Fa(o) ? u : u.value;
      return l && et(d) ? In(d) : d;
    }
    return et(u) ? l ? In(u) : Vs(u) : u;
  }
}
class bi extends ki {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, n, l) {
    let i = s[o];
    const r = Be(s) && Fa(o);
    if (!this._isShallow) {
      const m = Es(i);
      if (!Gt(n) && !Es(n) && (i = Je(i), n = Je(n)), !r && Ct(i) && !Ct(n))
        return m || (i.value = n), !0;
    }
    const u = r ? Number(o) < s.length : Ze(s, o), d = Reflect.set(
      s,
      o,
      n,
      Ct(s) ? s : l
    );
    return s === Je(l) && (u ? Ns(n, i) && $s(s, "set", o, n) : $s(s, "add", o, n)), d;
  }
  deleteProperty(s, o) {
    const n = Ze(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && n && $s(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const n = Reflect.has(s, o);
    return (!ts(o) || !_i.has(o)) && _t(s, "has", o), n;
  }
  ownKeys(s) {
    return _t(
      s,
      "iterate",
      Be(s) ? "length" : Qs
    ), Reflect.ownKeys(s);
  }
}
class pc extends ki {
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
const gc = /* @__PURE__ */ new bi(), hc = /* @__PURE__ */ new pc(), yc = /* @__PURE__ */ new bi(!0);
const ba = (e) => e, un = (e) => Reflect.getPrototypeOf(e);
function wc(e, s, o) {
  return function(...n) {
    const l = this.__v_raw, i = Je(l), r = mo(i), u = e === "entries" || e === Symbol.iterator && r, d = e === "keys" && r, m = l[e](...n), v = o ? ba : s ? yo : ss;
    return !s && _t(
      i,
      "iterate",
      d ? ka : Qs
    ), {
      // iterator protocol
      next() {
        const { value: g, done: w } = m.next();
        return w ? { value: g, done: w } : {
          value: u ? [v(g[0]), v(g[1])] : v(g),
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
function dn(e) {
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function _c(e, s) {
  const o = {
    get(l) {
      const i = this.__v_raw, r = Je(i), u = Je(l);
      e || (Ns(l, u) && _t(r, "get", l), _t(r, "get", u));
      const { has: d } = un(r), m = s ? ba : e ? yo : ss;
      if (d.call(r, l))
        return m(i.get(l));
      if (d.call(r, u))
        return m(i.get(u));
      i !== r && i.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && _t(Je(l), "iterate", Qs), l.size;
    },
    has(l) {
      const i = this.__v_raw, r = Je(i), u = Je(l);
      return e || (Ns(l, u) && _t(r, "has", l), _t(r, "has", u)), l === u ? i.has(l) : i.has(l) || i.has(u);
    },
    forEach(l, i) {
      const r = this, u = r.__v_raw, d = Je(u), m = s ? ba : e ? yo : ss;
      return !e && _t(d, "iterate", Qs), u.forEach((v, g) => l.call(i, m(v), m(g), r));
    }
  };
  return pt(
    o,
    e ? {
      add: dn("add"),
      set: dn("set"),
      delete: dn("delete"),
      clear: dn("clear")
    } : {
      add(l) {
        !s && !Gt(l) && !Es(l) && (l = Je(l));
        const i = Je(this);
        return un(i).has.call(i, l) || (i.add(l), $s(i, "add", l, l)), this;
      },
      set(l, i) {
        !s && !Gt(i) && !Es(i) && (i = Je(i));
        const r = Je(this), { has: u, get: d } = un(r);
        let m = u.call(r, l);
        m || (l = Je(l), m = u.call(r, l));
        const v = d.call(r, l);
        return r.set(l, i), m ? Ns(i, v) && $s(r, "set", l, i) : $s(r, "add", l, i), this;
      },
      delete(l) {
        const i = Je(this), { has: r, get: u } = un(i);
        let d = r.call(i, l);
        d || (l = Je(l), d = r.call(i, l)), u && u.call(i, l);
        const m = i.delete(l);
        return d && $s(i, "delete", l, void 0), m;
      },
      clear() {
        const l = Je(this), i = l.size !== 0, r = l.clear();
        return i && $s(
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
    o[l] = wc(l, e, s);
  }), o;
}
function Ha(e, s) {
  const o = _c(e, s);
  return (n, l, i) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    Ze(o, l) && l in n ? o : n,
    l,
    i
  );
}
const kc = {
  get: /* @__PURE__ */ Ha(!1, !1)
}, bc = {
  get: /* @__PURE__ */ Ha(!1, !0)
}, $c = {
  get: /* @__PURE__ */ Ha(!0, !1)
};
const $i = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ new WeakMap(), xi = /* @__PURE__ */ new WeakMap(), Cc = /* @__PURE__ */ new WeakMap();
function xc(e) {
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
function Sc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : xc(Jr(e));
}
function Vs(e) {
  return Es(e) ? e : Ka(
    e,
    !1,
    gc,
    kc,
    $i
  );
}
function Ic(e) {
  return Ka(
    e,
    !1,
    yc,
    bc,
    Ci
  );
}
function In(e) {
  return Ka(
    e,
    !0,
    hc,
    $c,
    xi
  );
}
function Ka(e, s, o, n, l) {
  if (!et(e) || e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const i = Sc(e);
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
function Zs(e) {
  return Es(e) ? Zs(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Es(e) {
  return !!(e && e.__v_isReadonly);
}
function Gt(e) {
  return !!(e && e.__v_isShallow);
}
function qa(e) {
  return e ? !!e.__v_raw : !1;
}
function Je(e) {
  const s = e && e.__v_raw;
  return s ? Je(s) : e;
}
function Ec(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && ri(e, "__v_skip", !0), e;
}
const ss = (e) => et(e) ? Vs(e) : e, yo = (e) => et(e) ? In(e) : e;
function Ct(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return Tc(e, !1);
}
function Tc(e, s) {
  return Ct(e) ? e : new Pc(e, s);
}
class Pc {
  constructor(s, o) {
    this.dep = new ja(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : Je(s), this._value = o ? s : ss(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, n = this.__v_isShallow || Gt(s) || Es(s);
    s = n ? s : Je(s), Ns(s, o) && (this._rawValue = s, this._value = n ? s : ss(s), this.dep.trigger());
  }
}
function We(e) {
  return Ct(e) ? e.value : e;
}
const Rc = {
  get: (e, s, o) => s === "__v_raw" ? e : We(Reflect.get(e, s, o)),
  set: (e, s, o, n) => {
    const l = e[s];
    return Ct(l) && !Ct(o) ? (l.value = o, !0) : Reflect.set(e, s, o, n);
  }
};
function Si(e) {
  return Zs(e) ? e : new Proxy(e, Rc);
}
class Mc {
  constructor(s, o, n) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new ja(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ko - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    nt !== this)
      return vi(this, !0), !0;
  }
  get value() {
    const s = this.dep.track();
    return hi(this), s && (s.version = this.dep.version), this._value;
  }
  set value(s) {
    this.setter && this.setter(s);
  }
}
function Dc(e, s, o = !1) {
  let n, l;
  return Ge(e) ? n = e : (n = e.get, l = e.set), new Mc(n, l, o);
}
const fn = {}, En = /* @__PURE__ */ new WeakMap();
let Js;
function Lc(e, s = !1, o = Js) {
  if (o) {
    let n = En.get(o);
    n || En.set(o, n = []), n.push(e);
  }
}
function Oc(e, s, o = tt) {
  const { immediate: n, deep: l, once: i, scheduler: r, augmentJob: u, call: d } = o, m = (C) => l ? C : Gt(C) || l === !1 || l === 0 ? Cs(C, 1) : Cs(C);
  let v, g, w, p, _ = !1, S = !1;
  if (Ct(e) ? (g = () => e.value, _ = Gt(e)) : Zs(e) ? (g = () => m(e), _ = !0) : Be(e) ? (S = !0, _ = e.some((C) => Zs(C) || Gt(C)), g = () => e.map((C) => {
    if (Ct(C))
      return C.value;
    if (Zs(C))
      return m(C);
    if (Ge(C))
      return d ? d(C, 2) : C();
  })) : Ge(e) ? s ? g = d ? () => d(e, 2) : e : g = () => {
    if (w) {
      Ss();
      try {
        w();
      } finally {
        Is();
      }
    }
    const C = Js;
    Js = v;
    try {
      return d ? d(e, 3, [p]) : e(p);
    } finally {
      Js = C;
    }
  } : g = gs, s && l) {
    const C = g, G = l === !0 ? 1 / 0 : l;
    g = () => Cs(C(), G);
  }
  const $ = rc(), P = () => {
    v.stop(), $ && $.active && za($.effects, v);
  };
  if (i && s) {
    const C = s;
    s = (...G) => {
      C(...G), P();
    };
  }
  let D = S ? new Array(e.length).fill(fn) : fn;
  const E = (C) => {
    if (!(!(v.flags & 1) || !v.dirty && !C))
      if (s) {
        const G = v.run();
        if (l || _ || (S ? G.some((K, N) => Ns(K, D[N])) : Ns(G, D))) {
          w && w();
          const K = Js;
          Js = v;
          try {
            const N = [
              G,
              // pass undefined as the old value when it's changed for the first time
              D === fn ? void 0 : S && D[0] === fn ? [] : D,
              p
            ];
            D = G, d ? d(s, 3, N) : (
              // @ts-expect-error
              s(...N)
            );
          } finally {
            Js = K;
          }
        }
      } else
        v.run();
  };
  return u && u(E), v = new fi(g), v.scheduler = r ? () => r(E, !1) : E, p = (C) => Lc(C, !1, v), w = v.onStop = () => {
    const C = En.get(v);
    if (C) {
      if (d)
        d(C, 4);
      else
        for (const G of C) G();
      En.delete(v);
    }
  }, s ? n ? E(!0) : D = v.run() : r ? r(E.bind(null, !0), !0) : v.run(), P.pause = v.pause.bind(v), P.resume = v.resume.bind(v), P.stop = P, P;
}
function Cs(e, s = 1 / 0, o) {
  if (s <= 0 || !et(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, Ct(e))
    Cs(e.value, s, o);
  else if (Be(e))
    for (let n = 0; n < e.length; n++)
      Cs(e[n], s, o);
  else if (ko(e) || mo(e))
    e.forEach((n) => {
      Cs(n, s, o);
    });
  else if (ii(e)) {
    for (const n in e)
      Cs(e[n], s, o);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Cs(e[n], s, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function sn(e, s, o, n) {
  try {
    return n ? e(...n) : e();
  } catch (l) {
    jn(l, s, o);
  }
}
function os(e, s, o, n) {
  if (Ge(e)) {
    const l = sn(e, s, o, n);
    return l && ai(l) && l.catch((i) => {
      jn(i, s, o);
    }), l;
  }
  if (Be(e)) {
    const l = [];
    for (let i = 0; i < e.length; i++)
      l.push(os(e[i], s, o, n));
    return l;
  }
}
function jn(e, s, o, n = !0) {
  const l = s ? s.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = s && s.appContext.config || tt;
  if (s) {
    let u = s.parent;
    const d = s.proxy, m = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; u; ) {
      const v = u.ec;
      if (v) {
        for (let g = 0; g < v.length; g++)
          if (v[g](e, d, m) === !1)
            return;
      }
      u = u.parent;
    }
    if (i) {
      Ss(), sn(i, null, 10, [
        e,
        d,
        m
      ]), Is();
      return;
    }
  }
  Ac(e, o, l, n, r);
}
function Ac(e, s, o, n = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const It = [];
let ms = -1;
const vo = [];
let As = null, ro = 0;
const Ii = /* @__PURE__ */ Promise.resolve();
let Tn = null;
function kt(e) {
  const s = Tn || Ii;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function Uc(e) {
  let s = ms + 1, o = It.length;
  for (; s < o; ) {
    const n = s + o >>> 1, l = It[n], i = Yo(l);
    i < e || i === e && l.flags & 2 ? s = n + 1 : o = n;
  }
  return s;
}
function Ya(e) {
  if (!(e.flags & 1)) {
    const s = Yo(e), o = It[It.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= Yo(o) ? It.push(e) : It.splice(Uc(s), 0, e), e.flags |= 1, Ei();
  }
}
function Ei() {
  Tn || (Tn = Ii.then(Pi));
}
function Nc(e) {
  Be(e) ? vo.push(...e) : As && e.id === -1 ? As.splice(ro + 1, 0, e) : e.flags & 1 || (vo.push(e), e.flags |= 1), Ei();
}
function ml(e, s, o = ms + 1) {
  for (; o < It.length; o++) {
    const n = It[o];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      It.splice(o, 1), o--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Ti(e) {
  if (vo.length) {
    const s = [...new Set(vo)].sort(
      (o, n) => Yo(o) - Yo(n)
    );
    if (vo.length = 0, As) {
      As.push(...s);
      return;
    }
    for (As = s, ro = 0; ro < As.length; ro++) {
      const o = As[ro];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    As = null, ro = 0;
  }
}
const Yo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Pi(e) {
  try {
    for (ms = 0; ms < It.length; ms++) {
      const s = It[ms];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), sn(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; ms < It.length; ms++) {
      const s = It[ms];
      s && (s.flags &= -2);
    }
    ms = -1, It.length = 0, Ti(), Tn = null, (It.length || vo.length) && Pi();
  }
}
let yt = null, Ri = null;
function Pn(e) {
  const s = yt;
  return yt = e, Ri = e && e.type.__scopeId || null, s;
}
function h(e, s = yt, o) {
  if (!s || e._n)
    return e;
  const n = (...l) => {
    n._d && Dn(-1);
    const i = Pn(s);
    let r;
    try {
      r = e(...l);
    } finally {
      Pn(i), n._d && Dn(1);
    }
    return r;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function qe(e, s) {
  if (yt === null)
    return e;
  const o = Jn(yt), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [i, r, u, d = tt] = s[l];
    i && (Ge(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Cs(r), n.push({
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
function Hs(e, s, o, n) {
  const l = e.dirs, i = s && s.dirs;
  for (let r = 0; r < l.length; r++) {
    const u = l[r];
    i && (u.oldValue = i[r].value);
    let d = u.dir[n];
    d && (Ss(), os(d, o, 8, [
      e.el,
      u,
      e,
      s
    ]), Is());
  }
}
const Mi = Symbol("_vte"), Di = (e) => e.__isTeleport, Fo = (e) => e && (e.disabled || e.disabled === ""), vl = (e) => e && (e.defer || e.defer === ""), pl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, gl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, $a = (e, s) => {
  const o = e && e.to;
  return ct(o) ? s ? s(o) : null : o;
}, Li = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, n, l, i, r, u, d, m) {
    const {
      mc: v,
      pc: g,
      pbc: w,
      o: { insert: p, querySelector: _, createText: S, createComment: $ }
    } = m, P = Fo(s.props);
    let { shapeFlag: D, children: E, dynamicChildren: C } = s;
    if (e == null) {
      const G = s.el = S(""), K = s.anchor = S("");
      p(G, o, n), p(K, o, n);
      const N = (T, M) => {
        D & 16 && v(
          E,
          T,
          M,
          l,
          i,
          r,
          u,
          d
        );
      }, I = () => {
        const T = s.target = $a(s.props, _), M = Oi(T, s, S, p);
        T && (r !== "svg" && pl(T) ? r = "svg" : r !== "mathml" && gl(T) && (r = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(T), P || (N(T, M), kn(s, !1)));
      };
      P && (N(o, K), kn(s, !0)), vl(s.props) ? (s.el.__isMounted = !1, St(() => {
        I(), delete s.el.__isMounted;
      }, i)) : I();
    } else {
      if (vl(s.props) && e.el.__isMounted === !1) {
        St(() => {
          Li.process(
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
      const G = s.anchor = e.anchor, K = s.target = e.target, N = s.targetAnchor = e.targetAnchor, I = Fo(e.props), T = I ? o : K, M = I ? G : N;
      if (r === "svg" || pl(K) ? r = "svg" : (r === "mathml" || gl(K)) && (r = "mathml"), C ? (w(
        e.dynamicChildren,
        C,
        T,
        l,
        i,
        r,
        u
      ), el(e, s, !0)) : d || g(
        e,
        s,
        T,
        M,
        l,
        i,
        r,
        u,
        !1
      ), P)
        I ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : mn(
          s,
          o,
          G,
          m,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const se = s.target = $a(
          s.props,
          _
        );
        se && mn(
          s,
          se,
          null,
          m,
          0
        );
      } else I && mn(
        s,
        K,
        N,
        m,
        1
      );
      kn(s, P);
    }
  },
  remove(e, s, o, { um: n, o: { remove: l } }, i) {
    const {
      shapeFlag: r,
      children: u,
      anchor: d,
      targetStart: m,
      targetAnchor: v,
      target: g,
      props: w
    } = e;
    if (g && (l(m), l(v)), i && l(d), r & 16) {
      const p = i || !Fo(w);
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
  move: mn,
  hydrate: zc
};
function mn(e, s, o, { o: { insert: n }, m: l }, i = 2) {
  i === 0 && n(e.targetAnchor, s, o);
  const { el: r, anchor: u, shapeFlag: d, children: m, props: v } = e, g = i === 2;
  if (g && n(r, s, o), (!g || Fo(v)) && d & 16)
    for (let w = 0; w < m.length; w++)
      l(
        m[w],
        s,
        o,
        2
      );
  g && n(u, s, o);
}
function zc(e, s, o, n, l, i, {
  o: { nextSibling: r, parentNode: u, querySelector: d, insert: m, createText: v }
}, g) {
  function w(S, $, P, D) {
    $.anchor = g(
      r(S),
      $,
      u(S),
      o,
      n,
      l,
      i
    ), $.targetStart = P, $.targetAnchor = D;
  }
  const p = s.target = $a(
    s.props,
    d
  ), _ = Fo(s.props);
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
        s.targetAnchor || Oi(p, s, v, m), g(
          S && r(S),
          s,
          p,
          o,
          n,
          l,
          i
        );
      }
    kn(s, _);
  } else _ && s.shapeFlag & 16 && w(e, s, e, r(e));
  return s.anchor && r(s.anchor);
}
const wt = Li;
function kn(e, s) {
  const o = e.ctx;
  if (o && o.ut) {
    let n, l;
    for (s ? (n = e.el, l = e.anchor) : (n = e.targetStart, l = e.targetAnchor); n && n !== l; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", o.uid), n = n.nextSibling;
    o.ut();
  }
}
function Oi(e, s, o, n) {
  const l = s.targetStart = o(""), i = s.targetAnchor = o("");
  return l[Mi] = i, e && (n(l, e), n(i, e)), i;
}
const bs = Symbol("_leaveCb"), vn = Symbol("_enterCb");
function Ai() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Xe(() => {
    e.isMounted = !0;
  }), Gi(() => {
    e.isUnmounting = !0;
  }), e;
}
const Bt = [Function, Array], Ui = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Bt,
  onEnter: Bt,
  onAfterEnter: Bt,
  onEnterCancelled: Bt,
  // leave
  onBeforeLeave: Bt,
  onLeave: Bt,
  onAfterLeave: Bt,
  onLeaveCancelled: Bt,
  // appear
  onBeforeAppear: Bt,
  onAppear: Bt,
  onAfterAppear: Bt,
  onAppearCancelled: Bt
}, Ni = (e) => {
  const s = e.subTree;
  return s.component ? Ni(s.component) : s;
}, Fc = {
  name: "BaseTransition",
  props: Ui,
  setup(e, { slots: s }) {
    const o = sl(), n = Ai();
    return () => {
      const l = s.default && Ja(s.default(), !0);
      if (!l || !l.length)
        return;
      const i = zi(l), r = Je(e), { mode: u } = r;
      if (n.isLeaving)
        return aa(i);
      const d = hl(i);
      if (!d)
        return aa(i);
      let m = Jo(
        d,
        r,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (g) => m = g
      );
      d.type !== bt && to(d, m);
      let v = o.subTree && hl(o.subTree);
      if (v && v.type !== bt && !Xs(v, d) && Ni(o).type !== bt) {
        let g = Jo(
          v,
          r,
          n,
          o
        );
        if (to(v, g), u === "out-in" && d.type !== bt)
          return n.isLeaving = !0, g.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete g.afterLeave, v = void 0;
          }, aa(i);
        u === "in-out" && d.type !== bt ? g.delayLeave = (w, p, _) => {
          const S = Fi(
            n,
            v
          );
          S[String(v.key)] = v, w[bs] = () => {
            p(), w[bs] = void 0, delete m.delayedLeave, v = void 0;
          }, m.delayedLeave = () => {
            _(), delete m.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return i;
    };
  }
};
function zi(e) {
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
const Bc = Fc;
function Fi(e, s) {
  const { leavingVNodes: o } = e;
  let n = o.get(s.type);
  return n || (n = /* @__PURE__ */ Object.create(null), o.set(s.type, n)), n;
}
function Jo(e, s, o, n, l) {
  const {
    appear: i,
    mode: r,
    persisted: u = !1,
    onBeforeEnter: d,
    onEnter: m,
    onAfterEnter: v,
    onEnterCancelled: g,
    onBeforeLeave: w,
    onLeave: p,
    onAfterLeave: _,
    onLeaveCancelled: S,
    onBeforeAppear: $,
    onAppear: P,
    onAfterAppear: D,
    onAppearCancelled: E
  } = s, C = String(e.key), G = Fi(o, e), K = (T, M) => {
    T && os(
      T,
      n,
      9,
      M
    );
  }, N = (T, M) => {
    const se = M[1];
    K(T, M), Be(T) ? T.every((X) => X.length <= 1) && se() : T.length <= 1 && se();
  }, I = {
    mode: r,
    persisted: u,
    beforeEnter(T) {
      let M = d;
      if (!o.isMounted)
        if (i)
          M = $ || d;
        else
          return;
      T[bs] && T[bs](
        !0
        /* cancelled */
      );
      const se = G[C];
      se && Xs(e, se) && se.el[bs] && se.el[bs](), K(M, [T]);
    },
    enter(T) {
      let M = m, se = v, X = g;
      if (!o.isMounted)
        if (i)
          M = P || m, se = D || v, X = E || g;
        else
          return;
      let j = !1;
      const oe = T[vn] = (Z) => {
        j || (j = !0, Z ? K(X, [T]) : K(se, [T]), I.delayedLeave && I.delayedLeave(), T[vn] = void 0);
      };
      M ? N(M, [T, oe]) : oe();
    },
    leave(T, M) {
      const se = String(e.key);
      if (T[vn] && T[vn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return M();
      K(w, [T]);
      let X = !1;
      const j = T[bs] = (oe) => {
        X || (X = !0, M(), oe ? K(S, [T]) : K(_, [T]), T[bs] = void 0, G[se] === e && delete G[se]);
      };
      G[se] = e, p ? N(p, [T, j]) : j();
    },
    clone(T) {
      const M = Jo(
        T,
        s,
        o,
        n,
        l
      );
      return l && l(M), M;
    }
  };
  return I;
}
function aa(e) {
  if (Hn(e))
    return e = zs(e), e.children = null, e;
}
function hl(e) {
  if (!Hn(e))
    return Di(e.type) && e.children ? zi(e.children) : e;
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
function to(e, s) {
  e.shapeFlag & 6 && e.component ? (e.transition = s, to(e.component.subTree, s)) : e.shapeFlag & 128 ? (e.ssContent.transition = s.clone(e.ssContent), e.ssFallback.transition = s.clone(e.ssFallback)) : e.transition = s;
}
function Ja(e, s = !1, o) {
  let n = [], l = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const u = o == null ? r.key : String(o) + String(r.key != null ? r.key : i);
    r.type === H ? (r.patchFlag & 128 && l++, n = n.concat(
      Ja(r.children, s, u)
    )) : (s || r.type !== bt) && n.push(u != null ? zs(r, { key: u }) : r);
  }
  if (l > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function ke(e, s) {
  return Ge(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    pt({ name: e.name }, s, { setup: e })
  ) : e;
}
function Bi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Rn = /* @__PURE__ */ new WeakMap();
function Bo(e, s, o, n, l = !1) {
  if (Be(e)) {
    e.forEach(
      (_, S) => Bo(
        _,
        s && (Be(s) ? s[S] : s),
        o,
        n,
        l
      )
    );
    return;
  }
  if (po(n) && !l) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Bo(e, s, o, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? Jn(n.component) : n.el, r = l ? null : i, { i: u, r: d } = e, m = s && s.r, v = u.refs === tt ? u.refs = {} : u.refs, g = u.setupState, w = Je(g), p = g === tt ? ni : (_) => Ze(w, _);
  if (m != null && m !== d) {
    if (yl(s), ct(m))
      v[m] = null, p(m) && (g[m] = null);
    else if (Ct(m)) {
      m.value = null;
      const _ = s;
      _.k && (v[_.k] = null);
    }
  }
  if (Ge(d))
    sn(d, u, 12, [r, v]);
  else {
    const _ = ct(d), S = Ct(d);
    if (_ || S) {
      const $ = () => {
        if (e.f) {
          const P = _ ? p(d) ? g[d] : v[d] : d.value;
          if (l)
            Be(P) && za(P, i);
          else if (Be(P))
            P.includes(i) || P.push(i);
          else if (_)
            v[d] = [i], p(d) && (g[d] = v[d]);
          else {
            const D = [i];
            d.value = D, e.k && (v[e.k] = D);
          }
        } else _ ? (v[d] = r, p(d) && (g[d] = r)) : S && (d.value = r, e.k && (v[e.k] = r));
      };
      if (r) {
        const P = () => {
          $(), Rn.delete(e);
        };
        P.id = -1, Rn.set(e, P), St(P, o);
      } else
        yl(e), $();
    }
  }
}
function yl(e) {
  const s = Rn.get(e);
  s && (s.flags |= 8, Rn.delete(e));
}
Wn().requestIdleCallback;
Wn().cancelIdleCallback;
const po = (e) => !!e.type.__asyncLoader, Hn = (e) => e.type.__isKeepAlive;
function Vc(e, s) {
  Vi(e, "a", s);
}
function Wc(e, s) {
  Vi(e, "da", s);
}
function Vi(e, s, o = $t) {
  const n = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (Kn(s, n, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      Hn(l.parent.vnode) && Gc(n, s, o, l), l = l.parent;
  }
}
function Gc(e, s, o, n) {
  const l = Kn(
    s,
    e,
    n,
    !0
    /* prepend */
  );
  oo(() => {
    za(n[s], l);
  }, o);
}
function Kn(e, s, o = $t, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), i = s.__weh || (s.__weh = (...r) => {
      Ss();
      const u = on(o), d = os(s, o, e, r);
      return u(), Is(), d;
    });
    return n ? l.unshift(i) : l.push(i), i;
  }
}
const Ts = (e) => (s, o = $t) => {
  (!Zo || e === "sp") && Kn(e, (...n) => s(...n), o);
}, jc = Ts("bm"), Xe = Ts("m"), Hc = Ts(
  "bu"
), Wi = Ts("u"), Gi = Ts(
  "bum"
), oo = Ts("um"), Kc = Ts(
  "sp"
), qc = Ts("rtg"), Yc = Ts("rtc");
function Jc(e, s = $t) {
  Kn("ec", e, s);
}
const Xc = "components", ji = Symbol.for("v-ndc");
function Xa(e) {
  return ct(e) ? Qc(Xc, e, !1) || e : e || ji;
}
function Qc(e, s, o = !0, n = !1) {
  const l = yt || $t;
  if (l) {
    const i = l.type;
    {
      const u = Fu(
        i,
        !1
      );
      if (u && (u === s || u === Ht(s) || u === Bn(Ht(s))))
        return i;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      wl(l[e] || i[e], s) || // global registration
      wl(l.appContext[e], s)
    );
    return !r && n ? i : r;
  }
}
function wl(e, s) {
  return e && (e[s] || e[Ht(s)] || e[Bn(Ht(s))]);
}
function $e(e, s, o, n) {
  let l;
  const i = o, r = Be(e);
  if (r || ct(e)) {
    const u = r && Zs(e);
    let d = !1, m = !1;
    u && (d = !Gt(e), m = Es(e), e = Gn(e)), l = new Array(e.length);
    for (let v = 0, g = e.length; v < g; v++)
      l[v] = s(
        d ? m ? yo(ss(e[v])) : ss(e[v]) : e[v],
        v,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = s(u + 1, u, void 0, i);
  } else if (et(e))
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
function so(e, s) {
  for (let o = 0; o < s.length; o++) {
    const n = s[o];
    if (Be(n))
      for (let l = 0; l < n.length; l++)
        e[n[l].name] = n[l].fn;
    else n && (e[n.name] = n.key ? (...l) => {
      const i = n.fn(...l);
      return i && (i.key = n.key), i;
    } : n.fn);
  }
  return e;
}
function Ke(e, s, o = {}, n, l) {
  if (yt.ce || yt.parent && po(yt.parent) && yt.parent.ce) {
    const m = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), a(), R(
      H,
      null,
      [x("slot", o, n && n())],
      m ? -2 : 64
    );
  }
  let i = e[s];
  i && i._c && (i._d = !1), a();
  const r = i && Hi(i(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  r && r.key, d = R(
    H,
    {
      key: (u && !ts(u) ? u : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!r && n ? "_fb" : "")
    },
    r || (n ? n() : []),
    r && e._ === 1 ? 64 : -2
  );
  return i && i._c && (i._d = !0), d;
}
function Hi(e) {
  return e.some((s) => Qo(s) ? !(s.type === bt || s.type === H && !Hi(s.children)) : !0) ? e : null;
}
const Ca = (e) => e ? dr(e) ? Jn(e) : Ca(e.parent) : null, Vo = (
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
    $parent: (e) => Ca(e.parent),
    $root: (e) => Ca(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => qi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ya(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = kt.bind(e.proxy)),
    $watch: (e) => uu.bind(e)
  })
), la = (e, s) => e !== tt && !e.__isScriptSetup && Ze(e, s), Zc = {
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
        if (la(n, s))
          return r[s] = 1, n[s];
        if (l !== tt && Ze(l, s))
          return r[s] = 2, l[s];
        if (Ze(i, s))
          return r[s] = 3, i[s];
        if (o !== tt && Ze(o, s))
          return r[s] = 4, o[s];
        xa && (r[s] = 0);
      }
    }
    const m = Vo[s];
    let v, g;
    if (m)
      return s === "$attrs" && _t(e.attrs, "get", ""), m(e);
    if (
      // css module (injected by vue-loader)
      (v = u.__cssModules) && (v = v[s])
    )
      return v;
    if (o !== tt && Ze(o, s))
      return r[s] = 4, o[s];
    if (
      // global properties
      g = d.config.globalProperties, Ze(g, s)
    )
      return g[s];
  },
  set({ _: e }, s, o) {
    const { data: n, setupState: l, ctx: i } = e;
    return la(l, s) ? (l[s] = o, !0) : n !== tt && Ze(n, s) ? (n[s] = o, !0) : Ze(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (i[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: n, appContext: l, props: i, type: r }
  }, u) {
    let d;
    return !!(o[u] || e !== tt && u[0] !== "$" && Ze(e, u) || la(s, u) || Ze(i, u) || Ze(n, u) || Ze(Vo, u) || Ze(l.config.globalProperties, u) || (d = r.__cssModules) && d[u]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : Ze(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function _l(e) {
  return Be(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let xa = !0;
function eu(e) {
  const s = qi(e), o = e.proxy, n = e.ctx;
  xa = !1, s.beforeCreate && kl(s.beforeCreate, e, "bc");
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
    beforeMount: g,
    mounted: w,
    beforeUpdate: p,
    updated: _,
    activated: S,
    deactivated: $,
    beforeDestroy: P,
    beforeUnmount: D,
    destroyed: E,
    unmounted: C,
    render: G,
    renderTracked: K,
    renderTriggered: N,
    errorCaptured: I,
    serverPrefetch: T,
    // public API
    expose: M,
    inheritAttrs: se,
    // assets
    components: X,
    directives: j,
    filters: oe
  } = s;
  if (m && tu(m, n, null), r)
    for (const W in r) {
      const O = r[W];
      Ge(O) && (n[W] = O.bind(o));
    }
  if (l) {
    const W = l.call(o, o);
    et(W) && (e.data = Vs(W));
  }
  if (xa = !0, i)
    for (const W in i) {
      const O = i[W], ie = Ge(O) ? O.bind(o, o) : Ge(O.get) ? O.get.bind(o, o) : gs, ge = !Ge(O) && Ge(O.set) ? O.set.bind(o) : gs, Me = A({
        get: ie,
        set: ge
      });
      Object.defineProperty(n, W, {
        enumerable: !0,
        configurable: !0,
        get: () => Me.value,
        set: (Ae) => Me.value = Ae
      });
    }
  if (u)
    for (const W in u)
      Ki(u[W], n, o, W);
  if (d) {
    const W = Ge(d) ? d.call(o) : d;
    Reflect.ownKeys(W).forEach((O) => {
      iu(O, W[O]);
    });
  }
  v && kl(v, e, "c");
  function U(W, O) {
    Be(O) ? O.forEach((ie) => W(ie.bind(o))) : O && W(O.bind(o));
  }
  if (U(jc, g), U(Xe, w), U(Hc, p), U(Wi, _), U(Vc, S), U(Wc, $), U(Jc, I), U(Yc, K), U(qc, N), U(Gi, D), U(oo, C), U(Kc, T), Be(M))
    if (M.length) {
      const W = e.exposed || (e.exposed = {});
      M.forEach((O) => {
        Object.defineProperty(W, O, {
          get: () => o[O],
          set: (ie) => o[O] = ie,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  G && e.render === gs && (e.render = G), se != null && (e.inheritAttrs = se), X && (e.components = X), j && (e.directives = j), T && Bi(e);
}
function tu(e, s, o = gs) {
  Be(e) && (e = Sa(e));
  for (const n in e) {
    const l = e[n];
    let i;
    et(l) ? "default" in l ? i = bn(
      l.from || n,
      l.default,
      !0
    ) : i = bn(l.from || n) : i = bn(l), Ct(i) ? Object.defineProperty(s, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : s[n] = i;
  }
}
function kl(e, s, o) {
  os(
    Be(e) ? e.map((n) => n.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function Ki(e, s, o, n) {
  let l = n.includes(".") ? Xi(o, n) : () => o[n];
  if (ct(e)) {
    const i = s[e];
    Ge(i) && gt(l, i);
  } else if (Ge(e))
    gt(l, e.bind(o));
  else if (et(e))
    if (Be(e))
      e.forEach((i) => Ki(i, s, o, n));
    else {
      const i = Ge(e.handler) ? e.handler.bind(o) : s[e.handler];
      Ge(i) && gt(l, i, e);
    }
}
function qi(e) {
  const s = e.type, { mixins: o, extends: n } = s, {
    mixins: l,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = e.appContext, u = i.get(s);
  let d;
  return u ? d = u : !l.length && !o && !n ? d = s : (d = {}, l.length && l.forEach(
    (m) => Mn(d, m, r, !0)
  ), Mn(d, s, r)), et(s) && i.set(s, d), d;
}
function Mn(e, s, o, n = !1) {
  const { mixins: l, extends: i } = s;
  i && Mn(e, i, o, !0), l && l.forEach(
    (r) => Mn(e, r, o, !0)
  );
  for (const r in s)
    if (!(n && r === "expose")) {
      const u = su[r] || o && o[r];
      e[r] = u ? u(e[r], s[r]) : s[r];
    }
  return e;
}
const su = {
  data: bl,
  props: $l,
  emits: $l,
  // objects
  methods: Ao,
  computed: Ao,
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
  components: Ao,
  directives: Ao,
  // watch
  watch: nu,
  // provide / inject
  provide: bl,
  inject: ou
};
function bl(e, s) {
  return s ? e ? function() {
    return pt(
      Ge(e) ? e.call(this, this) : e,
      Ge(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function ou(e, s) {
  return Ao(Sa(e), Sa(s));
}
function Sa(e) {
  if (Be(e)) {
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
function Ao(e, s) {
  return e ? pt(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function $l(e, s) {
  return e ? Be(e) && Be(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : pt(
    /* @__PURE__ */ Object.create(null),
    _l(e),
    _l(s ?? {})
  ) : s;
}
function nu(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = pt(/* @__PURE__ */ Object.create(null), e);
  for (const n in s)
    o[n] = xt(e[n], s[n]);
  return o;
}
function Yi() {
  return {
    app: null,
    config: {
      isNativeTag: ni,
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
let au = 0;
function lu(e, s) {
  return function(n, l = null) {
    Ge(n) || (n = pt({}, n)), l != null && !et(l) && (l = null);
    const i = Yi(), r = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const m = i.app = {
      _uid: au++,
      _component: n,
      _props: l,
      _container: null,
      _context: i,
      _instance: null,
      version: Vu,
      get config() {
        return i.config;
      },
      set config(v) {
      },
      use(v, ...g) {
        return r.has(v) || (v && Ge(v.install) ? (r.add(v), v.install(m, ...g)) : Ge(v) && (r.add(v), v(m, ...g))), m;
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
        if (!d) {
          const p = m._ceVNode || x(n, l);
          return p.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(p, v, w), d = !0, m._container = v, v.__vue_app__ = m, Jn(p.component);
        }
      },
      onUnmount(v) {
        u.push(v);
      },
      unmount() {
        d && (os(
          u,
          m._instance,
          16
        ), e(null, m._container), delete m._container.__vue_app__);
      },
      provide(v, g) {
        return i.provides[v] = g, m;
      },
      runWithContext(v) {
        const g = go;
        go = m;
        try {
          return v();
        } finally {
          go = g;
        }
      }
    };
    return m;
  };
}
let go = null;
function iu(e, s) {
  if ($t) {
    let o = $t.provides;
    const n = $t.parent && $t.parent.provides;
    n === o && (o = $t.provides = Object.create(n)), o[e] = s;
  }
}
function bn(e, s, o = !1) {
  const n = sl();
  if (n || go) {
    let l = go ? go._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && Ge(s) ? s.call(n && n.proxy) : s;
  }
}
const ru = Symbol.for("v-scx"), cu = () => bn(ru);
function gt(e, s, o) {
  return Ji(e, s, o);
}
function Ji(e, s, o = tt) {
  const { immediate: n, deep: l, flush: i, once: r } = o, u = pt({}, o), d = s && n || !s && i !== "post";
  let m;
  if (Zo) {
    if (i === "sync") {
      const p = cu();
      m = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!d) {
      const p = () => {
      };
      return p.stop = gs, p.resume = gs, p.pause = gs, p;
    }
  }
  const v = $t;
  u.call = (p, _, S) => os(p, v, _, S);
  let g = !1;
  i === "post" ? u.scheduler = (p) => {
    St(p, v && v.suspense);
  } : i !== "sync" && (g = !0, u.scheduler = (p, _) => {
    _ ? p() : Ya(p);
  }), u.augmentJob = (p) => {
    s && (p.flags |= 4), g && (p.flags |= 2, v && (p.id = v.uid, p.i = v));
  };
  const w = Oc(e, s, u);
  return Zo && (m ? m.push(w) : d && w()), w;
}
function uu(e, s, o) {
  const n = this.proxy, l = ct(e) ? e.includes(".") ? Xi(n, e) : () => n[e] : e.bind(n, n);
  let i;
  Ge(s) ? i = s : (i = s.handler, o = s);
  const r = on(this), u = Ji(l, i.bind(n), o);
  return r(), u;
}
function Xi(e, s) {
  const o = s.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < o.length && n; l++)
      n = n[o[l]];
    return n;
  };
}
const du = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${Ht(s)}Modifiers`] || e[`${Bs(s)}Modifiers`];
function fu(e, s, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || tt;
  let l = o;
  const i = s.startsWith("update:"), r = i && du(n, s.slice(7));
  r && (r.trim && (l = o.map((v) => ct(v) ? v.trim() : v)), r.number && (l = o.map(Vn)));
  let u, d = n[u = ea(s)] || // also try camelCase event handler (#2249)
  n[u = ea(Ht(s))];
  !d && i && (d = n[u = ea(Bs(s))]), d && os(
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
    e.emitted[u] = !0, os(
      m,
      e,
      6,
      l
    );
  }
}
const mu = /* @__PURE__ */ new WeakMap();
function Qi(e, s, o = !1) {
  const n = o ? mu : s.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const i = e.emits;
  let r = {}, u = !1;
  if (!Ge(e)) {
    const d = (m) => {
      const v = Qi(m, s, !0);
      v && (u = !0, pt(r, v));
    };
    !o && s.mixins.length && s.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !i && !u ? (et(e) && n.set(e, null), null) : (Be(i) ? i.forEach((d) => r[d] = null) : pt(r, i), et(e) && n.set(e, r), r);
}
function qn(e, s) {
  return !e || !zn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), Ze(e, s[0].toLowerCase() + s.slice(1)) || Ze(e, Bs(s)) || Ze(e, s));
}
function Cl(e) {
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
    props: g,
    data: w,
    setupState: p,
    ctx: _,
    inheritAttrs: S
  } = e, $ = Pn(e);
  let P, D;
  try {
    if (o.shapeFlag & 4) {
      const C = l || n, G = C;
      P = ps(
        m.call(
          G,
          C,
          v,
          g,
          p,
          w,
          _
        )
      ), D = u;
    } else {
      const C = s;
      P = ps(
        C.length > 1 ? C(
          g,
          { attrs: u, slots: r, emit: d }
        ) : C(
          g,
          null
        )
      ), D = s.props ? u : vu(u);
    }
  } catch (C) {
    Wo.length = 0, jn(C, e, 1), P = x(bt);
  }
  let E = P;
  if (D && S !== !1) {
    const C = Object.keys(D), { shapeFlag: G } = E;
    C.length && G & 7 && (i && C.some(Na) && (D = pu(
      D,
      i
    )), E = zs(E, D, !1, !0));
  }
  return o.dirs && (E = zs(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(o.dirs) : o.dirs), o.transition && to(E, o.transition), P = E, Pn($), P;
}
const vu = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || zn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, pu = (e, s) => {
  const o = {};
  for (const n in e)
    (!Na(n) || !(n.slice(9) in s)) && (o[n] = e[n]);
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
      return n ? xl(n, r, m) : !!r;
    if (d & 8) {
      const v = s.dynamicProps;
      for (let g = 0; g < v.length; g++) {
        const w = v[g];
        if (r[w] !== n[w] && !qn(m, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : n === r ? !1 : n ? r ? xl(n, r, m) : !0 : !!r;
  return !1;
}
function xl(e, s, o) {
  const n = Object.keys(s);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < n.length; l++) {
    const i = n[l];
    if (s[i] !== e[i] && !qn(o, i))
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
const Zi = {}, er = () => Object.create(Zi), tr = (e) => Object.getPrototypeOf(e) === Zi;
function yu(e, s, o, n = !1) {
  const l = {}, i = er();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), sr(e, s, l, i);
  for (const r in e.propsOptions[0])
    r in l || (l[r] = void 0);
  o ? e.props = n ? l : Ic(l) : e.type.props ? e.props = l : e.props = i, e.attrs = i;
}
function wu(e, s, o, n) {
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
      for (let g = 0; g < v.length; g++) {
        let w = v[g];
        if (qn(e.emitsOptions, w))
          continue;
        const p = s[w];
        if (d)
          if (Ze(i, w))
            p !== i[w] && (i[w] = p, m = !0);
          else {
            const _ = Ht(w);
            l[_] = Ia(
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
    sr(e, s, l, i) && (m = !0);
    let v;
    for (const g in u)
      (!s || // for camelCase
      !Ze(s, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Bs(g)) === g || !Ze(s, v))) && (d ? o && // for camelCase
      (o[g] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[g] = Ia(
        d,
        u,
        g,
        void 0,
        e,
        !0
      )) : delete l[g]);
    if (i !== u)
      for (const g in i)
        (!s || !Ze(s, g)) && (delete i[g], m = !0);
  }
  m && $s(e.attrs, "set", "");
}
function sr(e, s, o, n) {
  const [l, i] = e.propsOptions;
  let r = !1, u;
  if (s)
    for (let d in s) {
      if (Uo(d))
        continue;
      const m = s[d];
      let v;
      l && Ze(l, v = Ht(d)) ? !i || !i.includes(v) ? o[v] = m : (u || (u = {}))[v] = m : qn(e.emitsOptions, d) || (!(d in n) || m !== n[d]) && (n[d] = m, r = !0);
    }
  if (i) {
    const d = Je(o), m = u || tt;
    for (let v = 0; v < i.length; v++) {
      const g = i[v];
      o[g] = Ia(
        l,
        d,
        g,
        m[g],
        e,
        !Ze(m, g)
      );
    }
  }
  return r;
}
function Ia(e, s, o, n, l, i) {
  const r = e[o];
  if (r != null) {
    const u = Ze(r, "default");
    if (u && n === void 0) {
      const d = r.default;
      if (r.type !== Function && !r.skipFactory && Ge(d)) {
        const { propsDefaults: m } = l;
        if (o in m)
          n = m[o];
        else {
          const v = on(l);
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
    ] && (n === "" || n === Bs(o)) && (n = !0));
  }
  return n;
}
const _u = /* @__PURE__ */ new WeakMap();
function or(e, s, o = !1) {
  const n = o ? _u : s.propsCache, l = n.get(e);
  if (l)
    return l;
  const i = e.props, r = {}, u = [];
  let d = !1;
  if (!Ge(e)) {
    const v = (g) => {
      d = !0;
      const [w, p] = or(g, s, !0);
      pt(r, w), p && u.push(...p);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!i && !d)
    return et(e) && n.set(e, fo), fo;
  if (Be(i))
    for (let v = 0; v < i.length; v++) {
      const g = Ht(i[v]);
      Sl(g) && (r[g] = tt);
    }
  else if (i)
    for (const v in i) {
      const g = Ht(v);
      if (Sl(g)) {
        const w = i[v], p = r[g] = Be(w) || Ge(w) ? { type: w } : pt({}, w), _ = p.type;
        let S = !1, $ = !0;
        if (Be(_))
          for (let P = 0; P < _.length; ++P) {
            const D = _[P], E = Ge(D) && D.name;
            if (E === "Boolean") {
              S = !0;
              break;
            } else E === "String" && ($ = !1);
          }
        else
          S = Ge(_) && _.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = S, p[
          1
          /* shouldCastTrue */
        ] = $, (S || Ze(p, "default")) && u.push(g);
      }
    }
  const m = [r, u];
  return et(e) && n.set(e, m), m;
}
function Sl(e) {
  return e[0] !== "$" && !Uo(e);
}
const Qa = (e) => e === "_" || e === "_ctx" || e === "$stable", Za = (e) => Be(e) ? e.map(ps) : [ps(e)], ku = (e, s, o) => {
  if (s._n)
    return s;
  const n = h((...l) => Za(s(...l)), o);
  return n._c = !1, n;
}, nr = (e, s, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (Qa(l)) continue;
    const i = e[l];
    if (Ge(i))
      s[l] = ku(l, i, n);
    else if (i != null) {
      const r = Za(i);
      s[l] = () => r;
    }
  }
}, ar = (e, s) => {
  const o = Za(s);
  e.slots.default = () => o;
}, lr = (e, s, o) => {
  for (const n in s)
    (o || !Qa(n)) && (e[n] = s[n]);
}, bu = (e, s, o) => {
  const n = e.slots = er();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (lr(n, s, o), o && ri(n, "_", l, !0)) : nr(s, n);
  } else s && ar(e, s);
}, $u = (e, s, o) => {
  const { vnode: n, slots: l } = e;
  let i = !0, r = tt;
  if (n.shapeFlag & 32) {
    const u = s._;
    u ? o && u === 1 ? i = !1 : lr(l, s, o) : (i = !s.$stable, nr(s, l)), r = s;
  } else s && (ar(e, s), r = { default: 1 });
  if (i)
    for (const u in l)
      !Qa(u) && r[u] == null && delete l[u];
}, St = Eu;
function Cu(e) {
  return xu(e);
}
function xu(e, s) {
  const o = Wn();
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
    parentNode: g,
    nextSibling: w,
    setScopeId: p = gs,
    insertStaticContent: _
  } = e, S = (L, B, ae, ue = null, we = null, _e = null, Ie = void 0, Ee = null, ce = !!B.dynamicChildren) => {
    if (L === B)
      return;
    L && !Xs(L, B) && (ue = he(L), Ae(L, we, _e, !0), L = null), B.patchFlag === -2 && (ce = !1, B.dynamicChildren = null);
    const { type: ye, ref: Ne, shapeFlag: Pe } = B;
    switch (ye) {
      case Yn:
        $(L, B, ae, ue);
        break;
      case bt:
        P(L, B, ae, ue);
        break;
      case ra:
        L == null && D(B, ae, ue, Ie);
        break;
      case H:
        X(
          L,
          B,
          ae,
          ue,
          we,
          _e,
          Ie,
          Ee,
          ce
        );
        break;
      default:
        Pe & 1 ? G(
          L,
          B,
          ae,
          ue,
          we,
          _e,
          Ie,
          Ee,
          ce
        ) : Pe & 6 ? j(
          L,
          B,
          ae,
          ue,
          we,
          _e,
          Ie,
          Ee,
          ce
        ) : (Pe & 64 || Pe & 128) && ye.process(
          L,
          B,
          ae,
          ue,
          we,
          _e,
          Ie,
          Ee,
          ce,
          De
        );
    }
    Ne != null && we ? Bo(Ne, L && L.ref, _e, B || L, !B) : Ne == null && L && L.ref != null && Bo(L.ref, null, _e, L, !0);
  }, $ = (L, B, ae, ue) => {
    if (L == null)
      n(
        B.el = u(B.children),
        ae,
        ue
      );
    else {
      const we = B.el = L.el;
      B.children !== L.children && m(we, B.children);
    }
  }, P = (L, B, ae, ue) => {
    L == null ? n(
      B.el = d(B.children || ""),
      ae,
      ue
    ) : B.el = L.el;
  }, D = (L, B, ae, ue) => {
    [L.el, L.anchor] = _(
      L.children,
      B,
      ae,
      ue,
      L.el,
      L.anchor
    );
  }, E = ({ el: L, anchor: B }, ae, ue) => {
    let we;
    for (; L && L !== B; )
      we = w(L), n(L, ae, ue), L = we;
    n(B, ae, ue);
  }, C = ({ el: L, anchor: B }) => {
    let ae;
    for (; L && L !== B; )
      ae = w(L), l(L), L = ae;
    l(B);
  }, G = (L, B, ae, ue, we, _e, Ie, Ee, ce) => {
    if (B.type === "svg" ? Ie = "svg" : B.type === "math" && (Ie = "mathml"), L == null)
      K(
        B,
        ae,
        ue,
        we,
        _e,
        Ie,
        Ee,
        ce
      );
    else {
      const ye = L.el && L.el._isVueCE ? L.el : null;
      try {
        ye && ye._beginPatch(), T(
          L,
          B,
          we,
          _e,
          Ie,
          Ee,
          ce
        );
      } finally {
        ye && ye._endPatch();
      }
    }
  }, K = (L, B, ae, ue, we, _e, Ie, Ee) => {
    let ce, ye;
    const { props: Ne, shapeFlag: Pe, transition: ne, dirs: Y } = L;
    if (ce = L.el = r(
      L.type,
      _e,
      Ne && Ne.is,
      Ne
    ), Pe & 8 ? v(ce, L.children) : Pe & 16 && I(
      L.children,
      ce,
      null,
      ue,
      we,
      ia(L, _e),
      Ie,
      Ee
    ), Y && Hs(L, null, ue, "created"), N(ce, L, L.scopeId, Ie, ue), Ne) {
      for (const xe in Ne)
        xe !== "value" && !Uo(xe) && i(ce, xe, null, Ne[xe], _e, ue);
      "value" in Ne && i(ce, "value", null, Ne.value, _e), (ye = Ne.onVnodeBeforeMount) && us(ye, ue, L);
    }
    Y && Hs(L, null, ue, "beforeMount");
    const Oe = Su(we, ne);
    Oe && ne.beforeEnter(ce), n(ce, B, ae), ((ye = Ne && Ne.onVnodeMounted) || Oe || Y) && St(() => {
      ye && us(ye, ue, L), Oe && ne.enter(ce), Y && Hs(L, null, ue, "mounted");
    }, we);
  }, N = (L, B, ae, ue, we) => {
    if (ae && p(L, ae), ue)
      for (let _e = 0; _e < ue.length; _e++)
        p(L, ue[_e]);
    if (we) {
      let _e = we.subTree;
      if (B === _e || rr(_e.type) && (_e.ssContent === B || _e.ssFallback === B)) {
        const Ie = we.vnode;
        N(
          L,
          Ie,
          Ie.scopeId,
          Ie.slotScopeIds,
          we.parent
        );
      }
    }
  }, I = (L, B, ae, ue, we, _e, Ie, Ee, ce = 0) => {
    for (let ye = ce; ye < L.length; ye++) {
      const Ne = L[ye] = Ee ? Us(L[ye]) : ps(L[ye]);
      S(
        null,
        Ne,
        B,
        ae,
        ue,
        we,
        _e,
        Ie,
        Ee
      );
    }
  }, T = (L, B, ae, ue, we, _e, Ie) => {
    const Ee = B.el = L.el;
    let { patchFlag: ce, dynamicChildren: ye, dirs: Ne } = B;
    ce |= L.patchFlag & 16;
    const Pe = L.props || tt, ne = B.props || tt;
    let Y;
    if (ae && Ks(ae, !1), (Y = ne.onVnodeBeforeUpdate) && us(Y, ae, B, L), Ne && Hs(B, L, ae, "beforeUpdate"), ae && Ks(ae, !0), (Pe.innerHTML && ne.innerHTML == null || Pe.textContent && ne.textContent == null) && v(Ee, ""), ye ? M(
      L.dynamicChildren,
      ye,
      Ee,
      ae,
      ue,
      ia(B, we),
      _e
    ) : Ie || O(
      L,
      B,
      Ee,
      null,
      ae,
      ue,
      ia(B, we),
      _e,
      !1
    ), ce > 0) {
      if (ce & 16)
        se(Ee, Pe, ne, ae, we);
      else if (ce & 2 && Pe.class !== ne.class && i(Ee, "class", null, ne.class, we), ce & 4 && i(Ee, "style", Pe.style, ne.style, we), ce & 8) {
        const Oe = B.dynamicProps;
        for (let xe = 0; xe < Oe.length; xe++) {
          const Ce = Oe[xe], V = Pe[Ce], z = ne[Ce];
          (z !== V || Ce === "value") && i(Ee, Ce, V, z, we, ae);
        }
      }
      ce & 1 && L.children !== B.children && v(Ee, B.children);
    } else !Ie && ye == null && se(Ee, Pe, ne, ae, we);
    ((Y = ne.onVnodeUpdated) || Ne) && St(() => {
      Y && us(Y, ae, B, L), Ne && Hs(B, L, ae, "updated");
    }, ue);
  }, M = (L, B, ae, ue, we, _e, Ie) => {
    for (let Ee = 0; Ee < B.length; Ee++) {
      const ce = L[Ee], ye = B[Ee], Ne = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ce.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ce.type === H || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Xs(ce, ye) || // - In the case of a component, it could contain anything.
        ce.shapeFlag & 198) ? g(ce.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ae
        )
      );
      S(
        ce,
        ye,
        Ne,
        null,
        ue,
        we,
        _e,
        Ie,
        !0
      );
    }
  }, se = (L, B, ae, ue, we) => {
    if (B !== ae) {
      if (B !== tt)
        for (const _e in B)
          !Uo(_e) && !(_e in ae) && i(
            L,
            _e,
            B[_e],
            null,
            we,
            ue
          );
      for (const _e in ae) {
        if (Uo(_e)) continue;
        const Ie = ae[_e], Ee = B[_e];
        Ie !== Ee && _e !== "value" && i(L, _e, Ee, Ie, we, ue);
      }
      "value" in ae && i(L, "value", B.value, ae.value, we);
    }
  }, X = (L, B, ae, ue, we, _e, Ie, Ee, ce) => {
    const ye = B.el = L ? L.el : u(""), Ne = B.anchor = L ? L.anchor : u("");
    let { patchFlag: Pe, dynamicChildren: ne, slotScopeIds: Y } = B;
    Y && (Ee = Ee ? Ee.concat(Y) : Y), L == null ? (n(ye, ae, ue), n(Ne, ae, ue), I(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      B.children || [],
      ae,
      Ne,
      we,
      _e,
      Ie,
      Ee,
      ce
    )) : Pe > 0 && Pe & 64 && ne && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    L.dynamicChildren ? (M(
      L.dynamicChildren,
      ne,
      ae,
      we,
      _e,
      Ie,
      Ee
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (B.key != null || we && B === we.subTree) && el(
      L,
      B,
      !0
      /* shallow */
    )) : O(
      L,
      B,
      ae,
      Ne,
      we,
      _e,
      Ie,
      Ee,
      ce
    );
  }, j = (L, B, ae, ue, we, _e, Ie, Ee, ce) => {
    B.slotScopeIds = Ee, L == null ? B.shapeFlag & 512 ? we.ctx.activate(
      B,
      ae,
      ue,
      Ie,
      ce
    ) : oe(
      B,
      ae,
      ue,
      we,
      _e,
      Ie,
      ce
    ) : Z(L, B, ce);
  }, oe = (L, B, ae, ue, we, _e, Ie) => {
    const Ee = L.component = Ou(
      L,
      ue,
      we
    );
    if (Hn(L) && (Ee.ctx.renderer = De), Au(Ee, !1, Ie), Ee.asyncDep) {
      if (we && we.registerDep(Ee, U, Ie), !L.el) {
        const ce = Ee.subTree = x(bt);
        P(null, ce, B, ae), L.placeholder = ce.el;
      }
    } else
      U(
        Ee,
        L,
        B,
        ae,
        we,
        _e,
        Ie
      );
  }, Z = (L, B, ae) => {
    const ue = B.component = L.component;
    if (gu(L, B, ae))
      if (ue.asyncDep && !ue.asyncResolved) {
        W(ue, B, ae);
        return;
      } else
        ue.next = B, ue.update();
    else
      B.el = L.el, ue.vnode = B;
  }, U = (L, B, ae, ue, we, _e, Ie) => {
    const Ee = () => {
      if (L.isMounted) {
        let { next: Pe, bu: ne, u: Y, parent: Oe, vnode: xe } = L;
        {
          const Ve = ir(L);
          if (Ve) {
            Pe && (Pe.el = xe.el, W(L, Pe, Ie)), Ve.asyncDep.then(() => {
              L.isUnmounted || Ee();
            });
            return;
          }
        }
        let Ce = Pe, V;
        Ks(L, !1), Pe ? (Pe.el = xe.el, W(L, Pe, Ie)) : Pe = xe, ne && _n(ne), (V = Pe.props && Pe.props.onVnodeBeforeUpdate) && us(V, Oe, Pe, xe), Ks(L, !0);
        const z = Cl(L), ve = L.subTree;
        L.subTree = z, S(
          ve,
          z,
          // parent may have changed if it's in a teleport
          g(ve.el),
          // anchor may have changed if it's in a fragment
          he(ve),
          L,
          we,
          _e
        ), Pe.el = z.el, Ce === null && hu(L, z.el), Y && St(Y, we), (V = Pe.props && Pe.props.onVnodeUpdated) && St(
          () => us(V, Oe, Pe, xe),
          we
        );
      } else {
        let Pe;
        const { el: ne, props: Y } = B, { bm: Oe, m: xe, parent: Ce, root: V, type: z } = L, ve = po(B);
        Ks(L, !1), Oe && _n(Oe), !ve && (Pe = Y && Y.onVnodeBeforeMount) && us(Pe, Ce, B), Ks(L, !0);
        {
          V.ce && // @ts-expect-error _def is private
          V.ce._def.shadowRoot !== !1 && V.ce._injectChildStyle(z);
          const Ve = L.subTree = Cl(L);
          S(
            null,
            Ve,
            ae,
            ue,
            L,
            we,
            _e
          ), B.el = Ve.el;
        }
        if (xe && St(xe, we), !ve && (Pe = Y && Y.onVnodeMounted)) {
          const Ve = B;
          St(
            () => us(Pe, Ce, Ve),
            we
          );
        }
        (B.shapeFlag & 256 || Ce && po(Ce.vnode) && Ce.vnode.shapeFlag & 256) && L.a && St(L.a, we), L.isMounted = !0, B = ae = ue = null;
      }
    };
    L.scope.on();
    const ce = L.effect = new fi(Ee);
    L.scope.off();
    const ye = L.update = ce.run.bind(ce), Ne = L.job = ce.runIfDirty.bind(ce);
    Ne.i = L, Ne.id = L.uid, ce.scheduler = () => Ya(Ne), Ks(L, !0), ye();
  }, W = (L, B, ae) => {
    B.component = L;
    const ue = L.vnode.props;
    L.vnode = B, L.next = null, wu(L, B.props, ue, ae), $u(L, B.children, ae), Ss(), ml(L), Is();
  }, O = (L, B, ae, ue, we, _e, Ie, Ee, ce = !1) => {
    const ye = L && L.children, Ne = L ? L.shapeFlag : 0, Pe = B.children, { patchFlag: ne, shapeFlag: Y } = B;
    if (ne > 0) {
      if (ne & 128) {
        ge(
          ye,
          Pe,
          ae,
          ue,
          we,
          _e,
          Ie,
          Ee,
          ce
        );
        return;
      } else if (ne & 256) {
        ie(
          ye,
          Pe,
          ae,
          ue,
          we,
          _e,
          Ie,
          Ee,
          ce
        );
        return;
      }
    }
    Y & 8 ? (Ne & 16 && ee(ye, we, _e), Pe !== ye && v(ae, Pe)) : Ne & 16 ? Y & 16 ? ge(
      ye,
      Pe,
      ae,
      ue,
      we,
      _e,
      Ie,
      Ee,
      ce
    ) : ee(ye, we, _e, !0) : (Ne & 8 && v(ae, ""), Y & 16 && I(
      Pe,
      ae,
      ue,
      we,
      _e,
      Ie,
      Ee,
      ce
    ));
  }, ie = (L, B, ae, ue, we, _e, Ie, Ee, ce) => {
    L = L || fo, B = B || fo;
    const ye = L.length, Ne = B.length, Pe = Math.min(ye, Ne);
    let ne;
    for (ne = 0; ne < Pe; ne++) {
      const Y = B[ne] = ce ? Us(B[ne]) : ps(B[ne]);
      S(
        L[ne],
        Y,
        ae,
        null,
        we,
        _e,
        Ie,
        Ee,
        ce
      );
    }
    ye > Ne ? ee(
      L,
      we,
      _e,
      !0,
      !1,
      Pe
    ) : I(
      B,
      ae,
      ue,
      we,
      _e,
      Ie,
      Ee,
      ce,
      Pe
    );
  }, ge = (L, B, ae, ue, we, _e, Ie, Ee, ce) => {
    let ye = 0;
    const Ne = B.length;
    let Pe = L.length - 1, ne = Ne - 1;
    for (; ye <= Pe && ye <= ne; ) {
      const Y = L[ye], Oe = B[ye] = ce ? Us(B[ye]) : ps(B[ye]);
      if (Xs(Y, Oe))
        S(
          Y,
          Oe,
          ae,
          null,
          we,
          _e,
          Ie,
          Ee,
          ce
        );
      else
        break;
      ye++;
    }
    for (; ye <= Pe && ye <= ne; ) {
      const Y = L[Pe], Oe = B[ne] = ce ? Us(B[ne]) : ps(B[ne]);
      if (Xs(Y, Oe))
        S(
          Y,
          Oe,
          ae,
          null,
          we,
          _e,
          Ie,
          Ee,
          ce
        );
      else
        break;
      Pe--, ne--;
    }
    if (ye > Pe) {
      if (ye <= ne) {
        const Y = ne + 1, Oe = Y < Ne ? B[Y].el : ue;
        for (; ye <= ne; )
          S(
            null,
            B[ye] = ce ? Us(B[ye]) : ps(B[ye]),
            ae,
            Oe,
            we,
            _e,
            Ie,
            Ee,
            ce
          ), ye++;
      }
    } else if (ye > ne)
      for (; ye <= Pe; )
        Ae(L[ye], we, _e, !0), ye++;
    else {
      const Y = ye, Oe = ye, xe = /* @__PURE__ */ new Map();
      for (ye = Oe; ye <= ne; ye++) {
        const lt = B[ye] = ce ? Us(B[ye]) : ps(B[ye]);
        lt.key != null && xe.set(lt.key, ye);
      }
      let Ce, V = 0;
      const z = ne - Oe + 1;
      let ve = !1, Ve = 0;
      const Qe = new Array(z);
      for (ye = 0; ye < z; ye++) Qe[ye] = 0;
      for (ye = Y; ye <= Pe; ye++) {
        const lt = L[ye];
        if (V >= z) {
          Ae(lt, we, _e, !0);
          continue;
        }
        let ut;
        if (lt.key != null)
          ut = xe.get(lt.key);
        else
          for (Ce = Oe; Ce <= ne; Ce++)
            if (Qe[Ce - Oe] === 0 && Xs(lt, B[Ce])) {
              ut = Ce;
              break;
            }
        ut === void 0 ? Ae(lt, we, _e, !0) : (Qe[ut - Oe] = ye + 1, ut >= Ve ? Ve = ut : ve = !0, S(
          lt,
          B[ut],
          ae,
          null,
          we,
          _e,
          Ie,
          Ee,
          ce
        ), V++);
      }
      const vt = ve ? Iu(Qe) : fo;
      for (Ce = vt.length - 1, ye = z - 1; ye >= 0; ye--) {
        const lt = Oe + ye, ut = B[lt], Rt = B[lt + 1], Ft = lt + 1 < Ne ? (
          // #13559, fallback to el placeholder for unresolved async component
          Rt.el || Rt.placeholder
        ) : ue;
        Qe[ye] === 0 ? S(
          null,
          ut,
          ae,
          Ft,
          we,
          _e,
          Ie,
          Ee,
          ce
        ) : ve && (Ce < 0 || ye !== vt[Ce] ? Me(ut, ae, Ft, 2) : Ce--);
      }
    }
  }, Me = (L, B, ae, ue, we = null) => {
    const { el: _e, type: Ie, transition: Ee, children: ce, shapeFlag: ye } = L;
    if (ye & 6) {
      Me(L.component.subTree, B, ae, ue);
      return;
    }
    if (ye & 128) {
      L.suspense.move(B, ae, ue);
      return;
    }
    if (ye & 64) {
      Ie.move(L, B, ae, De);
      return;
    }
    if (Ie === H) {
      n(_e, B, ae);
      for (let Pe = 0; Pe < ce.length; Pe++)
        Me(ce[Pe], B, ae, ue);
      n(L.anchor, B, ae);
      return;
    }
    if (Ie === ra) {
      E(L, B, ae);
      return;
    }
    if (ue !== 2 && ye & 1 && Ee)
      if (ue === 0)
        Ee.beforeEnter(_e), n(_e, B, ae), St(() => Ee.enter(_e), we);
      else {
        const { leave: Pe, delayLeave: ne, afterLeave: Y } = Ee, Oe = () => {
          L.ctx.isUnmounted ? l(_e) : n(_e, B, ae);
        }, xe = () => {
          _e._isLeaving && _e[bs](
            !0
            /* cancelled */
          ), Pe(_e, () => {
            Oe(), Y && Y();
          });
        };
        ne ? ne(_e, Oe, xe) : xe();
      }
    else
      n(_e, B, ae);
  }, Ae = (L, B, ae, ue = !1, we = !1) => {
    const {
      type: _e,
      props: Ie,
      ref: Ee,
      children: ce,
      dynamicChildren: ye,
      shapeFlag: Ne,
      patchFlag: Pe,
      dirs: ne,
      cacheIndex: Y
    } = L;
    if (Pe === -2 && (we = !1), Ee != null && (Ss(), Bo(Ee, null, ae, L, !0), Is()), Y != null && (B.renderCache[Y] = void 0), Ne & 256) {
      B.ctx.deactivate(L);
      return;
    }
    const Oe = Ne & 1 && ne, xe = !po(L);
    let Ce;
    if (xe && (Ce = Ie && Ie.onVnodeBeforeUnmount) && us(Ce, B, L), Ne & 6)
      F(L.component, ae, ue);
    else {
      if (Ne & 128) {
        L.suspense.unmount(ae, ue);
        return;
      }
      Oe && Hs(L, null, B, "beforeUnmount"), Ne & 64 ? L.type.remove(
        L,
        B,
        ae,
        De,
        ue
      ) : ye && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ye.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_e !== H || Pe > 0 && Pe & 64) ? ee(
        ye,
        B,
        ae,
        !1,
        !0
      ) : (_e === H && Pe & 384 || !we && Ne & 16) && ee(ce, B, ae), ue && de(L);
    }
    (xe && (Ce = Ie && Ie.onVnodeUnmounted) || Oe) && St(() => {
      Ce && us(Ce, B, L), Oe && Hs(L, null, B, "unmounted");
    }, ae);
  }, de = (L) => {
    const { type: B, el: ae, anchor: ue, transition: we } = L;
    if (B === H) {
      re(ae, ue);
      return;
    }
    if (B === ra) {
      C(L);
      return;
    }
    const _e = () => {
      l(ae), we && !we.persisted && we.afterLeave && we.afterLeave();
    };
    if (L.shapeFlag & 1 && we && !we.persisted) {
      const { leave: Ie, delayLeave: Ee } = we, ce = () => Ie(ae, _e);
      Ee ? Ee(L.el, _e, ce) : ce();
    } else
      _e();
  }, re = (L, B) => {
    let ae;
    for (; L !== B; )
      ae = w(L), l(L), L = ae;
    l(B);
  }, F = (L, B, ae) => {
    const { bum: ue, scope: we, job: _e, subTree: Ie, um: Ee, m: ce, a: ye } = L;
    Il(ce), Il(ye), ue && _n(ue), we.stop(), _e && (_e.flags |= 8, Ae(Ie, L, B, ae)), Ee && St(Ee, B), St(() => {
      L.isUnmounted = !0;
    }, B);
  }, ee = (L, B, ae, ue = !1, we = !1, _e = 0) => {
    for (let Ie = _e; Ie < L.length; Ie++)
      Ae(L[Ie], B, ae, ue, we);
  }, he = (L) => {
    if (L.shapeFlag & 6)
      return he(L.component.subTree);
    if (L.shapeFlag & 128)
      return L.suspense.next();
    const B = w(L.anchor || L.el), ae = B && B[Mi];
    return ae ? w(ae) : B;
  };
  let pe = !1;
  const me = (L, B, ae) => {
    L == null ? B._vnode && Ae(B._vnode, null, null, !0) : S(
      B._vnode || null,
      L,
      B,
      null,
      null,
      null,
      ae
    ), B._vnode = L, pe || (pe = !0, ml(), Ti(), pe = !1);
  }, De = {
    p: S,
    um: Ae,
    m: Me,
    r: de,
    mt: oe,
    mc: I,
    pc: O,
    pbc: M,
    n: he,
    o: e
  };
  return {
    render: me,
    hydrate: void 0,
    createApp: lu(me)
  };
}
function ia({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function Ks({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function Su(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function el(e, s, o = !1) {
  const n = e.children, l = s.children;
  if (Be(n) && Be(l))
    for (let i = 0; i < n.length; i++) {
      const r = n[i];
      let u = l[i];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[i] = Us(l[i]), u.el = r.el), !o && u.patchFlag !== -2 && el(r, u)), u.type === Yn && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = r.el), u.type === bt && !u.el && (u.el = r.el);
    }
}
function Iu(e) {
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
function ir(e) {
  const s = e.subTree.component;
  if (s)
    return s.asyncDep && !s.asyncResolved ? s : ir(s);
}
function Il(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const rr = (e) => e.__isSuspense;
function Eu(e, s) {
  s && s.pendingBranch ? Be(e) ? s.effects.push(...e) : s.effects.push(e) : Nc(e);
}
const H = Symbol.for("v-fgt"), Yn = Symbol.for("v-txt"), bt = Symbol.for("v-cmt"), ra = Symbol.for("v-stc"), Wo = [];
let Nt = null;
function a(e = !1) {
  Wo.push(Nt = e ? null : []);
}
function Tu() {
  Wo.pop(), Nt = Wo[Wo.length - 1] || null;
}
let Xo = 1;
function Dn(e, s = !1) {
  Xo += e, e < 0 && Nt && s && (Nt.hasOnce = !0);
}
function cr(e) {
  return e.dynamicChildren = Xo > 0 ? Nt || fo : null, Tu(), Xo > 0 && Nt && Nt.push(e), e;
}
function c(e, s, o, n, l, i) {
  return cr(
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
  return cr(
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
function Qo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Xs(e, s) {
  return e.type === s.type && e.key === s.key;
}
const ur = ({ key: e }) => e ?? null, $n = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? ct(e) || Ct(e) || Ge(e) ? { i: yt, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, n = 0, l = null, i = e === H ? 0 : 1, r = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && ur(s),
    ref: s && $n(s),
    scopeId: Ri,
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
  return u ? (tl(d, o), i & 128 && e.normalize(d)) : o && (d.shapeFlag |= ct(o) ? 8 : 16), Xo > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Nt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Nt.push(d), d;
}
const x = Pu;
function Pu(e, s = null, o = null, n = 0, l = null, i = !1) {
  if ((!e || e === ji) && (e = bt), Qo(e)) {
    const u = zs(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && tl(u, o), Xo > 0 && !i && Nt && (u.shapeFlag & 6 ? Nt[Nt.indexOf(e)] = u : Nt.push(u)), u.patchFlag = -2, u;
  }
  if (Bu(e) && (e = e.__vccOpts), s) {
    s = Ru(s);
    let { class: u, style: d } = s;
    u && !ct(u) && (s.class = Te(u)), et(d) && (qa(d) && !Be(d) && (d = pt({}, d)), s.style = Kt(d));
  }
  const r = ct(e) ? 1 : rr(e) ? 128 : Di(e) ? 64 : et(e) ? 4 : Ge(e) ? 2 : 0;
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
function Ru(e) {
  return e ? qa(e) || tr(e) ? pt({}, e) : e : null;
}
function zs(e, s, o = !1, n = !1) {
  const { props: l, ref: i, patchFlag: r, children: u, transition: d } = e, m = s ? Mu(l || {}, s) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && ur(m),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && i ? Be(i) ? i.concat($n(s)) : [i, $n(s)] : $n(s)
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
    patchFlag: s && e.type !== H ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && zs(e.ssContent),
    ssFallback: e.ssFallback && zs(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && n && to(
    v,
    d.clone(v)
  ), v;
}
function b(e = " ", s = 0) {
  return x(Yn, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (a(), R(bt, null, e)) : x(bt, null, e);
}
function ps(e) {
  return e == null || typeof e == "boolean" ? x(bt) : Be(e) ? x(
    H,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Qo(e) ? Us(e) : x(Yn, null, String(e));
}
function Us(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : zs(e);
}
function tl(e, s) {
  let o = 0;
  const { shapeFlag: n } = e;
  if (s == null)
    s = null;
  else if (Be(s))
    o = 16;
  else if (typeof s == "object")
    if (n & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), tl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !tr(s) ? s._ctx = yt : l === 3 && yt && (yt.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else Ge(s) ? (s = { default: s, _ctx: yt }, o = 32) : (s = String(s), n & 64 ? (o = 16, s = [b(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function Mu(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        s.class !== n.class && (s.class = Te([s.class, n.class]));
      else if (l === "style")
        s.style = Kt([s.style, n.style]);
      else if (zn(l)) {
        const i = s[l], r = n[l];
        r && i !== r && !(Be(i) && i.includes(r)) && (s[l] = i ? [].concat(i, r) : r);
      } else l !== "" && (s[l] = n[l]);
  }
  return s;
}
function us(e, s, o, n = null) {
  os(e, s, 7, [
    o,
    n
  ]);
}
const Du = Yi();
let Lu = 0;
function Ou(e, s, o) {
  const n = e.type, l = (s ? s.appContext : e.appContext) || Du, i = {
    uid: Lu++,
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
    scope: new ic(
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
    propsOptions: or(n, l),
    emitsOptions: Qi(n, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: tt,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: tt,
    data: tt,
    props: tt,
    attrs: tt,
    slots: tt,
    refs: tt,
    setupState: tt,
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
const sl = () => $t || yt;
let Ln, Ea;
{
  const e = Wn(), s = (o, n) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(n), (i) => {
      l.length > 1 ? l.forEach((r) => r(i)) : l[0](i);
    };
  };
  Ln = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => $t = o
  ), Ea = s(
    "__VUE_SSR_SETTERS__",
    (o) => Zo = o
  );
}
const on = (e) => {
  const s = $t;
  return Ln(e), e.scope.on(), () => {
    e.scope.off(), Ln(s);
  };
}, El = () => {
  $t && $t.scope.off(), Ln(null);
};
function dr(e) {
  return e.vnode.shapeFlag & 4;
}
let Zo = !1;
function Au(e, s = !1, o = !1) {
  s && Ea(s);
  const { props: n, children: l } = e.vnode, i = dr(e);
  yu(e, n, i, s), bu(e, l, o || s);
  const r = i ? Uu(e, s) : void 0;
  return s && Ea(!1), r;
}
function Uu(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Zc);
  const { setup: n } = o;
  if (n) {
    Ss();
    const l = e.setupContext = n.length > 1 ? zu(e) : null, i = on(e), r = sn(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = ai(r);
    if (Is(), i(), (u || e.sp) && !po(e) && Bi(e), u) {
      if (r.then(El, El), s)
        return r.then((d) => {
          Tl(e, d);
        }).catch((d) => {
          jn(d, e, 0);
        });
      e.asyncDep = r;
    } else
      Tl(e, r);
  } else
    fr(e);
}
function Tl(e, s, o) {
  Ge(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : et(s) && (e.setupState = Si(s)), fr(e);
}
function fr(e, s, o) {
  const n = e.type;
  e.render || (e.render = n.render || gs);
  {
    const l = on(e);
    Ss();
    try {
      eu(e);
    } finally {
      Is(), l();
    }
  }
}
const Nu = {
  get(e, s) {
    return _t(e, "get", ""), e[s];
  }
};
function zu(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Nu),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function Jn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Si(Ec(e.exposed)), {
    get(s, o) {
      if (o in s)
        return s[o];
      if (o in Vo)
        return Vo[o](e);
    },
    has(s, o) {
      return o in s || o in Vo;
    }
  })) : e.proxy;
}
function Fu(e, s = !0) {
  return Ge(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function Bu(e) {
  return Ge(e) && "__vccOpts" in e;
}
const A = (e, s) => Dc(e, s, Zo);
function nn(e, s, o) {
  try {
    Dn(-1);
    const n = arguments.length;
    return n === 2 ? et(s) && !Be(s) ? Qo(s) ? x(e, null, [s]) : x(e, s) : x(e, null, s) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && Qo(o) && (o = [o]), x(e, s, o));
  } finally {
    Dn(1);
  }
}
const Vu = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ta;
const Pl = typeof window < "u" && window.trustedTypes;
if (Pl)
  try {
    Ta = /* @__PURE__ */ Pl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const mr = Ta ? (e) => Ta.createHTML(e) : (e) => e, Wu = "http://www.w3.org/2000/svg", Gu = "http://www.w3.org/1998/Math/MathML", ks = typeof document < "u" ? document : null, Rl = ks && /* @__PURE__ */ ks.createElement("template"), ju = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, n) => {
    const l = s === "svg" ? ks.createElementNS(Wu, e) : s === "mathml" ? ks.createElementNS(Gu, e) : o ? ks.createElement(e, { is: o }) : ks.createElement(e);
    return e === "select" && n && n.multiple != null && l.setAttribute("multiple", n.multiple), l;
  },
  createText: (e) => ks.createTextNode(e),
  createComment: (e) => ks.createComment(e),
  setText: (e, s) => {
    e.nodeValue = s;
  },
  setElementText: (e, s) => {
    e.textContent = s;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ks.querySelector(e),
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
      Rl.innerHTML = mr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Rl.content;
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
}, Ds = "transition", Po = "animation", wo = Symbol("_vtc"), vr = {
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
}, pr = /* @__PURE__ */ pt(
  {},
  Ui,
  vr
), Hu = (e) => (e.displayName = "Transition", e.props = pr, e), Ku = /* @__PURE__ */ Hu(
  (e, { slots: s }) => nn(Bc, gr(e), s)
), qs = (e, s = []) => {
  Be(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, Ml = (e) => e ? Be(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function gr(e) {
  const s = {};
  for (const X in e)
    X in vr || (s[X] = e[X]);
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
    leaveFromClass: g = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: p = `${o}-leave-to`
  } = e, _ = qu(l), S = _ && _[0], $ = _ && _[1], {
    onBeforeEnter: P,
    onEnter: D,
    onEnterCancelled: E,
    onLeave: C,
    onLeaveCancelled: G,
    onBeforeAppear: K = P,
    onAppear: N = D,
    onAppearCancelled: I = E
  } = s, T = (X, j, oe, Z) => {
    X._enterCancelled = Z, Ls(X, j ? v : u), Ls(X, j ? m : r), oe && oe();
  }, M = (X, j) => {
    X._isLeaving = !1, Ls(X, g), Ls(X, p), Ls(X, w), j && j();
  }, se = (X) => (j, oe) => {
    const Z = X ? N : D, U = () => T(j, X, oe);
    qs(Z, [j, U]), Dl(() => {
      Ls(j, X ? d : i), fs(j, X ? v : u), Ml(Z) || Ll(j, n, S, U);
    });
  };
  return pt(s, {
    onBeforeEnter(X) {
      qs(P, [X]), fs(X, i), fs(X, r);
    },
    onBeforeAppear(X) {
      qs(K, [X]), fs(X, d), fs(X, m);
    },
    onEnter: se(!1),
    onAppear: se(!0),
    onLeave(X, j) {
      X._isLeaving = !0;
      const oe = () => M(X, j);
      fs(X, g), X._enterCancelled ? (fs(X, w), Pa(X)) : (Pa(X), fs(X, w)), Dl(() => {
        X._isLeaving && (Ls(X, g), fs(X, p), Ml(C) || Ll(X, n, $, oe));
      }), qs(C, [X, oe]);
    },
    onEnterCancelled(X) {
      T(X, !1, void 0, !0), qs(E, [X]);
    },
    onAppearCancelled(X) {
      T(X, !0, void 0, !0), qs(I, [X]);
    },
    onLeaveCancelled(X) {
      M(X), qs(G, [X]);
    }
  });
}
function qu(e) {
  if (e == null)
    return null;
  if (et(e))
    return [ca(e.enter), ca(e.leave)];
  {
    const s = ca(e);
    return [s, s];
  }
}
function ca(e) {
  return Zr(e);
}
function fs(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[wo] || (e[wo] = /* @__PURE__ */ new Set())).add(s);
}
function Ls(e, s) {
  s.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const o = e[wo];
  o && (o.delete(s), o.size || (e[wo] = void 0));
}
function Dl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Yu = 0;
function Ll(e, s, o, n) {
  const l = e._endId = ++Yu, i = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(i, o);
  const { type: r, timeout: u, propCount: d } = hr(e, s);
  if (!r)
    return n();
  const m = r + "end";
  let v = 0;
  const g = () => {
    e.removeEventListener(m, w), i();
  }, w = (p) => {
    p.target === e && ++v >= d && g();
  };
  setTimeout(() => {
    v < d && g();
  }, u + 1), e.addEventListener(m, w);
}
function hr(e, s) {
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${Ds}Delay`), i = n(`${Ds}Duration`), r = Ol(l, i), u = n(`${Po}Delay`), d = n(`${Po}Duration`), m = Ol(u, d);
  let v = null, g = 0, w = 0;
  s === Ds ? r > 0 && (v = Ds, g = r, w = i.length) : s === Po ? m > 0 && (v = Po, g = m, w = d.length) : (g = Math.max(r, m), v = g > 0 ? r > m ? Ds : Po : null, w = v ? v === Ds ? i.length : d.length : 0);
  const p = v === Ds && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Ds}Property`).toString()
  );
  return {
    type: v,
    timeout: g,
    propCount: w,
    hasTransform: p
  };
}
function Ol(e, s) {
  for (; e.length < s.length; )
    e = e.concat(e);
  return Math.max(...s.map((o, n) => Al(o) + Al(e[n])));
}
function Al(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Pa(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ju(e, s, o) {
  const n = e[wo];
  n && (s = (s ? [s, ...n] : [...n]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const Ul = Symbol("_vod"), Xu = Symbol("_vsh"), Qu = Symbol(""), Zu = /(?:^|;)\s*display\s*:/;
function ed(e, s, o) {
  const n = e.style, l = ct(o);
  let i = !1;
  if (o && !l) {
    if (s)
      if (ct(s))
        for (const r of s.split(";")) {
          const u = r.slice(0, r.indexOf(":")).trim();
          o[u] == null && Cn(n, u, "");
        }
      else
        for (const r in s)
          o[r] == null && Cn(n, r, "");
    for (const r in o)
      r === "display" && (i = !0), Cn(n, r, o[r]);
  } else if (l) {
    if (s !== o) {
      const r = n[Qu];
      r && (o += ";" + r), n.cssText = o, i = Zu.test(o);
    }
  } else s && e.removeAttribute("style");
  Ul in e && (e[Ul] = i ? n.display : "", e[Xu] && (n.display = "none"));
}
const Nl = /\s*!important$/;
function Cn(e, s, o) {
  if (Be(o))
    o.forEach((n) => Cn(e, s, n));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const n = td(e, s);
    Nl.test(o) ? e.setProperty(
      Bs(n),
      o.replace(Nl, ""),
      "important"
    ) : e[n] = o;
  }
}
const zl = ["Webkit", "Moz", "ms"], ua = {};
function td(e, s) {
  const o = ua[s];
  if (o)
    return o;
  let n = Ht(s);
  if (n !== "filter" && n in e)
    return ua[s] = n;
  n = Bn(n);
  for (let l = 0; l < zl.length; l++) {
    const i = zl[l] + n;
    if (i in e)
      return ua[s] = i;
  }
  return s;
}
const Fl = "http://www.w3.org/1999/xlink";
function Bl(e, s, o, n, l, i = ac(s)) {
  n && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Fl, s.slice(6, s.length)) : e.setAttributeNS(Fl, s, o) : o == null || i && !ci(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    i ? "" : ts(o) ? String(o) : o
  );
}
function Vl(e, s, o, n, l) {
  if (s === "innerHTML" || s === "textContent") {
    o != null && (e[s] = s === "innerHTML" ? mr(o) : o);
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
    u === "boolean" ? o = ci(o) : o == null && u === "string" ? (o = "", r = !0) : u === "number" && (o = 0, r = !0);
  }
  try {
    e[s] = o;
  } catch {
  }
  r && e.removeAttribute(l || s);
}
function xs(e, s, o, n) {
  e.addEventListener(s, o, n);
}
function sd(e, s, o, n) {
  e.removeEventListener(s, o, n);
}
const Wl = Symbol("_vei");
function od(e, s, o, n, l = null) {
  const i = e[Wl] || (e[Wl] = {}), r = i[s];
  if (n && r)
    r.value = n;
  else {
    const [u, d] = nd(s);
    if (n) {
      const m = i[s] = id(
        n,
        l
      );
      xs(e, u, m, d);
    } else r && (sd(e, u, r, d), i[s] = void 0);
  }
}
const Gl = /(?:Once|Passive|Capture)$/;
function nd(e) {
  let s;
  if (Gl.test(e)) {
    s = {};
    let n;
    for (; n = e.match(Gl); )
      e = e.slice(0, e.length - n[0].length), s[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Bs(e.slice(2)), s];
}
let da = 0;
const ad = /* @__PURE__ */ Promise.resolve(), ld = () => da || (ad.then(() => da = 0), da = Date.now());
function id(e, s) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    os(
      rd(n, o.value),
      s,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = ld(), o;
}
function rd(e, s) {
  if (Be(s)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, s.map(
      (n) => (l) => !l._stopped && n && n(l)
    );
  } else
    return s;
}
const jl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, cd = (e, s, o, n, l, i) => {
  const r = l === "svg";
  s === "class" ? Ju(e, n, r) : s === "style" ? ed(e, o, n) : zn(s) ? Na(s) || od(e, s, o, n, i) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : ud(e, s, n, r)) ? (Vl(e, s, n), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Bl(e, s, n, r, i, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !ct(n)) ? Vl(e, Ht(s), n, i, s) : (s === "true-value" ? e._trueValue = n : s === "false-value" && (e._falseValue = n), Bl(e, s, n, r));
};
function ud(e, s, o, n) {
  if (n)
    return !!(s === "innerHTML" || s === "textContent" || s in e && jl(s) && Ge(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return jl(s) && ct(o) ? !1 : s in e;
}
const yr = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), On = Symbol("_moveCb"), Hl = Symbol("_enterCb"), dd = (e) => (delete e.props.mode, e), fd = /* @__PURE__ */ dd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ pt({}, pr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = sl(), n = Ai();
    let l, i;
    return Wi(() => {
      if (!l.length)
        return;
      const r = e.moveClass || `${e.name || "v"}-move`;
      if (!hd(
        l[0].el,
        o.vnode.el,
        r
      )) {
        l = [];
        return;
      }
      l.forEach(vd), l.forEach(pd);
      const u = l.filter(gd);
      Pa(o.vnode.el), u.forEach((d) => {
        const m = d.el, v = m.style;
        fs(m, r), v.transform = v.webkitTransform = v.transitionDuration = "";
        const g = m[On] = (w) => {
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", g), m[On] = null, Ls(m, r));
        };
        m.addEventListener("transitionend", g);
      }), l = [];
    }), () => {
      const r = Je(e), u = gr(r);
      let d = r.tag || H;
      if (l = [], i)
        for (let m = 0; m < i.length; m++) {
          const v = i[m];
          v.el && v.el instanceof Element && (l.push(v), to(
            v,
            Jo(
              v,
              u,
              n,
              o
            )
          ), yr.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      i = s.default ? Ja(s.default()) : [];
      for (let m = 0; m < i.length; m++) {
        const v = i[m];
        v.key != null && to(
          v,
          Jo(v, u, n, o)
        );
      }
      return x(d, null, i);
    };
  }
}), md = fd;
function vd(e) {
  const s = e.el;
  s[On] && s[On](), s[Hl] && s[Hl]();
}
function pd(e) {
  wr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function gd(e) {
  const s = yr.get(e), o = wr.get(e), n = s.left - o.left, l = s.top - o.top;
  if (n || l) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${n}px,${l}px)`, i.transitionDuration = "0s", e;
  }
}
function hd(e, s, o) {
  const n = e.cloneNode(), l = e[wo];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && n.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && n.classList.add(u)), n.style.display = "none";
  const i = s.nodeType === 1 ? s : s.parentNode;
  i.appendChild(n);
  const { hasTransform: r } = hr(n);
  return i.removeChild(n), r;
}
const Fs = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Be(s) ? (o) => _n(s, o) : s;
};
function yd(e) {
  e.target.composing = !0;
}
function Kl(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const jt = Symbol("_assign");
function ql(e, s, o) {
  return s && (e = e.trim()), o && (e = Vn(e)), e;
}
const zt = {
  created(e, { modifiers: { lazy: s, trim: o, number: n } }, l) {
    e[jt] = Fs(l);
    const i = n || l.props && l.props.type === "number";
    xs(e, s ? "change" : "input", (r) => {
      r.target.composing || e[jt](ql(e.value, o, i));
    }), (o || i) && xs(e, "change", () => {
      e.value = ql(e.value, o, i);
    }), s || (xs(e, "compositionstart", yd), xs(e, "compositionend", Kl), xs(e, "change", Kl));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: n, trim: l, number: i } }, r) {
    if (e[jt] = Fs(r), e.composing) return;
    const u = (i || e.type === "number") && !/^0\d/.test(e.value) ? Vn(e.value) : e.value, d = s ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (n && s === o || l && e.value.trim() === d) || (e.value = d));
  }
}, en = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[jt] = Fs(o), xs(e, "change", () => {
      const n = e._modelValue, l = _o(e), i = e.checked, r = e[jt];
      if (Be(n)) {
        const u = Ba(n, l), d = u !== -1;
        if (i && !d)
          r(n.concat(l));
        else if (!i && d) {
          const m = [...n];
          m.splice(u, 1), r(m);
        }
      } else if (ko(n)) {
        const u = new Set(n);
        i ? u.add(l) : u.delete(l), r(u);
      } else
        r(_r(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Yl,
  beforeUpdate(e, s, o) {
    e[jt] = Fs(o), Yl(e, s, o);
  }
};
function Yl(e, { value: s, oldValue: o }, n) {
  e._modelValue = s;
  let l;
  if (Be(s))
    l = Ba(s, n.props.value) > -1;
  else if (ko(s))
    l = s.has(n.props.value);
  else {
    if (s === o) return;
    l = eo(s, _r(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Qt = {
  created(e, { value: s }, o) {
    e.checked = eo(s, o.props.value), e[jt] = Fs(o), xs(e, "change", () => {
      e[jt](_o(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, n) {
    e[jt] = Fs(n), s !== o && (e.checked = eo(s, n.props.value));
  }
}, hs = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, n) {
    const l = ko(s);
    xs(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (r) => r.selected).map(
        (r) => o ? Vn(_o(r)) : _o(r)
      );
      e[jt](
        e.multiple ? l ? new Set(i) : i : i[0]
      ), e._assigning = !0, kt(() => {
        e._assigning = !1;
      });
    }), e[jt] = Fs(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    Jl(e, s);
  },
  beforeUpdate(e, s, o) {
    e[jt] = Fs(o);
  },
  updated(e, { value: s }) {
    e._assigning || Jl(e, s);
  }
};
function Jl(e, s) {
  const o = e.multiple, n = Be(s);
  if (!(o && !n && !ko(s))) {
    for (let l = 0, i = e.options.length; l < i; l++) {
      const r = e.options[l], u = _o(r);
      if (o)
        if (n) {
          const d = typeof u;
          d === "string" || d === "number" ? r.selected = s.some((m) => String(m) === String(u)) : r.selected = Ba(s, u) > -1;
        } else
          r.selected = s.has(u);
      else if (eo(_o(r), s)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function _o(e) {
  return "_value" in e ? e._value : e.value;
}
function _r(e, s) {
  const o = s ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : s;
}
const Xn = {
  created(e, s, o) {
    pn(e, s, o, null, "created");
  },
  mounted(e, s, o) {
    pn(e, s, o, null, "mounted");
  },
  beforeUpdate(e, s, o, n) {
    pn(e, s, o, n, "beforeUpdate");
  },
  updated(e, s, o, n) {
    pn(e, s, o, n, "updated");
  }
};
function wd(e, s) {
  switch (e) {
    case "SELECT":
      return hs;
    case "TEXTAREA":
      return zt;
    default:
      switch (s) {
        case "checkbox":
          return en;
        case "radio":
          return Qt;
        default:
          return zt;
      }
  }
}
function pn(e, s, o, n, l) {
  const r = wd(
    e.tagName,
    o.props && o.props.type
  )[l];
  r && r(e, s, o, n);
}
const _d = ["ctrl", "shift", "alt", "meta"], kd = {
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
  exact: (e, s) => _d.some((o) => e[`${o}Key`] && !s.includes(o))
}, at = (e, s) => {
  const o = e._withMods || (e._withMods = {}), n = s.join(".");
  return o[n] || (o[n] = ((l, ...i) => {
    for (let r = 0; r < s.length; r++) {
      const u = kd[s[r]];
      if (u && u(l, s)) return;
    }
    return e(l, ...i);
  }));
}, bd = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, es = (e, s) => {
  const o = e._withKeys || (e._withKeys = {}), n = s.join(".");
  return o[n] || (o[n] = ((l) => {
    if (!("key" in l))
      return;
    const i = Bs(l.key);
    if (s.some(
      (r) => r === i || bd[r] === i
    ))
      return e(l);
  }));
}, $d = /* @__PURE__ */ pt({ patchProp: cd }, ju);
let Xl;
function Cd() {
  return Xl || (Xl = Cu($d));
}
const Qn = ((...e) => {
  const s = Cd().createApp(...e), { mount: o } = s;
  return s.mount = (n) => {
    const l = Sd(n);
    if (!l) return;
    const i = s._component;
    !Ge(i) && !i.render && !i.template && (i.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const r = o(l, !1, xd(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), r;
  }, s;
});
function xd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Sd(e) {
  return ct(e) ? document.querySelector(e) : e;
}
const Id = { class: "panel-layout" }, Ed = {
  key: 0,
  class: "panel-layout-header"
}, Td = {
  key: 1,
  class: "panel-layout-search"
}, Pd = { class: "panel-layout-content" }, Rd = {
  key: 2,
  class: "panel-layout-footer"
}, Md = /* @__PURE__ */ ke({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (a(), c("div", Id, [
      s.$slots.header ? (a(), c("div", Ed, [
        Ke(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (a(), c("div", Td, [
        Ke(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", Pd, [
        Ke(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (a(), c("div", Rd, [
        Ke(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), be = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of s)
    o[n] = l;
  return o;
}, Tt = /* @__PURE__ */ be(Md, [["__scopeId", "data-v-21565df9"]]), Dd = {
  key: 0,
  class: "panel-title-prefix"
}, Ld = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Od = /* @__PURE__ */ ke({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (a(), R(Xa(`h${e.level}`), {
      class: Te(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (a(), c("span", Dd, f(e.prefix), 1)) : (a(), c("span", Ld)),
        Ke(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ad = /* @__PURE__ */ be(Od, [["__scopeId", "data-v-c3875efc"]]), Ud = ["title"], Nd = ["width", "height"], zd = /* @__PURE__ */ ke({
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
      ])], 8, Nd))
    ], 8, Ud));
  }
}), kr = /* @__PURE__ */ be(zd, [["__scopeId", "data-v-6fc7f16d"]]), Fd = { class: "header-left" }, Bd = {
  key: 0,
  class: "header-actions"
}, Vd = /* @__PURE__ */ ke({
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
      class: Te(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", Fd, [
        x(Ad, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            b(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), R(kr, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (a(), c("div", Bd, [
        Ke(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Pt = /* @__PURE__ */ be(Vd, [["__scopeId", "data-v-55a62cd6"]]), Wd = {
  key: 0,
  class: "section-title-count"
}, Gd = {
  key: 1,
  class: "section-title-icon"
}, jd = /* @__PURE__ */ ke({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), R(Xa(`h${e.level}`), {
      class: Te(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, {
      default: h(() => [
        Ke(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), c("span", Wd, "(" + f(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), c("span", Gd, f(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ut = /* @__PURE__ */ be(jd, [["__scopeId", "data-v-559361eb"]]), Hd = { class: "status-grid" }, Kd = { class: "status-grid__columns" }, qd = { class: "status-grid__column" }, Yd = { class: "status-grid__title" }, Jd = { class: "status-grid__column status-grid__column--right" }, Xd = { class: "status-grid__title" }, Qd = {
  key: 0,
  class: "status-grid__footer"
}, Zd = /* @__PURE__ */ ke({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (a(), c("div", Hd, [
      t("div", Kd, [
        t("div", qd, [
          t("h4", Yd, f(e.leftTitle), 1),
          Ke(s.$slots, "left", {}, void 0)
        ]),
        t("div", Jd, [
          t("h4", Xd, f(e.rightTitle), 1),
          Ke(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (a(), c("div", Qd, [
        Ke(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), ef = /* @__PURE__ */ be(Zd, [["__scopeId", "data-v-73b7ba3f"]]), tf = {
  key: 0,
  class: "status-item__icon"
}, sf = {
  key: 1,
  class: "status-item__count"
}, of = { class: "status-item__label" }, nf = /* @__PURE__ */ ke({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = e, o = A(() => `status-item--${s.variant}`);
    return (n, l) => (a(), c("div", {
      class: Te(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), c("span", tf, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), c("span", sf, f(e.count), 1)) : y("", !0),
      t("span", of, f(e.label), 1)
    ], 2));
  }
}), ds = /* @__PURE__ */ be(nf, [["__scopeId", "data-v-6f929183"]]), af = { class: "issue-card__header" }, lf = { class: "issue-card__icon" }, rf = { class: "issue-card__title" }, cf = {
  key: 0,
  class: "issue-card__content"
}, uf = {
  key: 0,
  class: "issue-card__description"
}, df = {
  key: 1,
  class: "issue-card__items"
}, ff = {
  key: 2,
  class: "issue-card__actions"
}, mf = /* @__PURE__ */ ke({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const s = e, o = A(() => `issue-card--${s.severity}`);
    return (n, l) => (a(), c("div", {
      class: Te(["issue-card", o.value])
    }, [
      t("div", af, [
        t("span", lf, f(e.icon), 1),
        t("h4", rf, f(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), c("div", cf, [
        e.description ? (a(), c("p", uf, f(e.description), 1)) : y("", !0),
        Ke(n.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (a(), c("div", df, [
        (a(!0), c(H, null, $e(e.items, (i, r) => (a(), c("div", {
          key: r,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, f(i), 1)
        ]))), 128))
      ])) : y("", !0),
      n.$slots.actions ? (a(), c("div", ff, [
        Ke(n.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Jt = /* @__PURE__ */ be(mf, [["__scopeId", "data-v-df6aa348"]]), vf = ["type", "disabled"], pf = {
  key: 0,
  class: "spinner"
}, gf = /* @__PURE__ */ ke({
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
      class: Te(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), c("span", pf)) : y("", !0),
      e.loading ? y("", !0) : Ke(s.$slots, "default", { key: 1 }, void 0)
    ], 10, vf));
  }
}), fe = /* @__PURE__ */ be(gf, [["__scopeId", "data-v-772abe47"]]), hf = { class: "empty-state" }, yf = {
  key: 0,
  class: "empty-icon"
}, wf = { class: "empty-message" }, _f = /* @__PURE__ */ ke({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (a(), c("div", hf, [
      e.icon ? (a(), c("div", yf, f(e.icon), 1)) : y("", !0),
      t("p", wf, f(e.message), 1),
      e.actionLabel ? (a(), R(fe, {
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
}), ns = /* @__PURE__ */ be(_f, [["__scopeId", "data-v-4466284f"]]), kf = /* @__PURE__ */ ke({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (a(), c("span", {
      class: Te(["detail-label"]),
      style: Kt({ minWidth: e.minWidth })
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), xn = /* @__PURE__ */ be(kf, [["__scopeId", "data-v-75e9eeb8"]]), bf = /* @__PURE__ */ ke({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), c("span", {
      class: Te(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Ra = /* @__PURE__ */ be(bf, [["__scopeId", "data-v-2f186e4c"]]), $f = { class: "detail-row" }, Cf = /* @__PURE__ */ ke({
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
    return (s, o) => (a(), c("div", $f, [
      x(xn, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          b(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), R(Ra, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: h(() => [
          b(f(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Ke(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), dt = /* @__PURE__ */ be(Cf, [["__scopeId", "data-v-ef15664a"]]), xf = { class: "modal-header" }, Sf = { class: "modal-body" }, If = { class: "status-section" }, Ef = {
  key: 0,
  class: "status-section"
}, Tf = { class: "section-header-row" }, Pf = {
  key: 0,
  class: "workflow-group"
}, Rf = { class: "workflow-group-header" }, Mf = { class: "workflow-group-title" }, Df = { class: "workflow-list" }, Lf = { class: "workflow-name" }, Of = { class: "workflow-issue" }, Af = {
  key: 1,
  class: "workflow-group"
}, Uf = { class: "workflow-group-header" }, Nf = { class: "workflow-group-title" }, zf = { class: "workflow-list" }, Ff = { class: "workflow-name" }, Bf = { class: "workflow-issue" }, Vf = {
  key: 2,
  class: "workflow-group"
}, Wf = { class: "workflow-group-header" }, Gf = { class: "workflow-group-title" }, jf = { class: "workflow-list" }, Hf = { class: "workflow-name" }, Kf = {
  key: 3,
  class: "workflow-group"
}, qf = { class: "workflow-group-header" }, Yf = { class: "workflow-group-title" }, Jf = { class: "workflow-list" }, Xf = { class: "workflow-name" }, Qf = {
  key: 4,
  class: "workflow-group"
}, Zf = { class: "workflow-group-header" }, em = { class: "workflow-group-title" }, tm = { class: "workflow-list" }, sm = { class: "workflow-name" }, om = {
  key: 5,
  class: "workflow-group"
}, nm = { class: "workflow-group-title" }, am = { class: "expand-icon" }, lm = {
  key: 0,
  class: "workflow-list"
}, im = { class: "workflow-name" }, rm = {
  key: 1,
  class: "status-section"
}, cm = {
  key: 0,
  class: "change-group"
}, um = { class: "change-group-header" }, dm = { class: "change-group-title" }, fm = { class: "change-list" }, mm = { class: "node-name" }, vm = {
  key: 0,
  class: "dev-badge"
}, pm = {
  key: 1,
  class: "change-group"
}, gm = { class: "change-group-header" }, hm = { class: "change-group-title" }, ym = { class: "change-list" }, wm = { class: "node-name" }, _m = {
  key: 0,
  class: "dev-badge"
}, km = {
  key: 2,
  class: "change-group"
}, bm = { class: "change-list" }, $m = { class: "change-item" }, Cm = { class: "node-name" }, xm = {
  key: 3,
  class: "change-group"
}, Sm = {
  key: 2,
  class: "status-section"
}, Im = { class: "section-header-row" }, Em = {
  key: 0,
  class: "drift-item"
}, Tm = { class: "drift-list" }, Pm = {
  key: 0,
  class: "drift-list-more"
}, Rm = {
  key: 1,
  class: "drift-item"
}, Mm = { class: "drift-list" }, Dm = {
  key: 0,
  class: "drift-list-more"
}, Lm = {
  key: 2,
  class: "drift-item"
}, Om = { class: "drift-list" }, Am = { class: "version-actual" }, Um = { class: "version-expected" }, Nm = {
  key: 0,
  class: "drift-list-more"
}, zm = {
  key: 3,
  class: "drift-item"
}, Fm = { class: "repair-action" }, Bm = {
  key: 3,
  class: "status-section"
}, Vm = { class: "info-box" }, Wm = { class: "drift-list" }, Gm = {
  key: 0,
  class: "drift-list-more"
}, jm = {
  key: 4,
  class: "status-section"
}, Hm = { class: "warning-box" }, Km = {
  key: 5,
  class: "empty-state-inline"
}, qm = { class: "modal-actions" }, Ym = /* @__PURE__ */ ke({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const s = e, o = k(!1);
    Xe(() => {
      console.log("StatusDetailModal mounted, initial show value:", s.show);
    }), gt(() => s.show, (w, p) => {
      console.log("StatusDetailModal show prop changed from", p, "to", w);
    }, { immediate: !0 });
    const n = A(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (S) => S.status === "broken" && S.sync_state === "synced"
      )) || [];
    }), l = A(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (S) => S.status === "broken" && S.sync_state !== "synced"
      )) || [];
    }), i = A(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.synced) == null ? void 0 : _.filter((S) => {
        var P, D, E;
        const $ = (E = (D = (P = s.status) == null ? void 0 : P.workflows) == null ? void 0 : D.analyzed) == null ? void 0 : E.find((C) => C.name === S);
        return !$ || $.status !== "broken";
      })) || [];
    }), r = A(() => {
      var w, p, _, S, $;
      return (w = s.status) != null && w.workflows ? (((p = s.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((_ = s.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((S = s.status.workflows.deleted) == null ? void 0 : S.length) ?? 0) > 0 || ((($ = s.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), u = A(() => {
      var p, _, S;
      const w = (p = s.status) == null ? void 0 : p.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((S = w.nodes_removed) == null ? void 0 : S.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = A(() => {
      var w, p, _, S, $, P;
      return !r.value && !u.value && ((p = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : p.is_synced) && (((_ = s.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((P = ($ = (S = s.status) == null ? void 0 : S.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : P.length) ?? 0) === 0;
    }), m = A(() => {
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
      var _, S, $, P, D, E, C, G, K, N, I, T, M, se, X, j, oe, Z, U, W, O, ie;
      return a(), R(wt, { to: "body" }, [
        e.show ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = (ge) => w.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: p[6] || (p[6] = at(() => {
            }, ["stop"]))
          }, [
            t("div", xf, [
              p[8] || (p[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = (ge) => w.$emit("close"))
              }, "✕")
            ]),
            t("div", Sf, [
              t("div", If, [
                x(Ut, { level: "4" }, {
                  default: h(() => [...p[9] || (p[9] = [
                    b("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                x(dt, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              r.value ? (a(), c("div", Ef, [
                t("div", Tf, [
                  x(Ut, { level: "4" }, {
                    default: h(() => [...p[10] || (p[10] = [
                      b("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[1] || (p[1] = (ge) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                n.value.length ? (a(), c("div", Pf, [
                  t("div", Rf, [
                    p[11] || (p[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Mf, "BROKEN (COMMITTED) (" + f(n.value.length) + ")", 1)
                  ]),
                  t("div", Df, [
                    (a(!0), c(H, null, $e(n.value, (ge) => (a(), c("div", {
                      key: ge.name,
                      class: "workflow-item"
                    }, [
                      t("span", Lf, f(ge.name), 1),
                      t("span", Of, f(ge.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), c("div", Af, [
                  t("div", Uf, [
                    p[12] || (p[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Nf, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  t("div", zf, [
                    (a(!0), c(H, null, $e(l.value, (ge) => (a(), c("div", {
                      key: ge.name,
                      class: "workflow-item"
                    }, [
                      t("span", Ff, f(ge.name), 1),
                      t("span", Bf, f(ge.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (S = (_ = e.status.workflows) == null ? void 0 : _.new) != null && S.length ? (a(), c("div", Vf, [
                  t("div", Wf, [
                    p[13] || (p[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", Gf, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", jf, [
                    (a(!0), c(H, null, $e(e.status.workflows.new, (ge) => (a(), c("div", {
                      key: ge,
                      class: "workflow-item"
                    }, [
                      t("span", Hf, f(ge), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (P = ($ = e.status.workflows) == null ? void 0 : $.modified) != null && P.length ? (a(), c("div", Kf, [
                  t("div", qf, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", Yf, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", Jf, [
                    (a(!0), c(H, null, $e(e.status.workflows.modified, (ge) => (a(), c("div", {
                      key: ge,
                      class: "workflow-item"
                    }, [
                      t("span", Xf, f(ge), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (E = (D = e.status.workflows) == null ? void 0 : D.deleted) != null && E.length ? (a(), c("div", Qf, [
                  t("div", Zf, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", em, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", tm, [
                    (a(!0), c(H, null, $e(e.status.workflows.deleted, (ge) => (a(), c("div", {
                      key: ge,
                      class: "workflow-item"
                    }, [
                      t("span", sm, f(ge), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                i.value.length ? (a(), c("div", om, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = (ge) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", nm, "SYNCED (" + f(i.value.length) + ")", 1),
                    t("span", am, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), c("div", lm, [
                    (a(!0), c(H, null, $e(i.value, (ge) => (a(), c("div", {
                      key: ge,
                      class: "workflow-item"
                    }, [
                      t("span", im, f(ge), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (a(), c("div", rm, [
                x(Ut, { level: "4" }, {
                  default: h(() => [...p[17] || (p[17] = [
                    b("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (G = (C = e.status.git_changes) == null ? void 0 : C.nodes_added) != null && G.length ? (a(), c("div", cm, [
                  t("div", um, [
                    p[18] || (p[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", dm, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", fm, [
                    (a(!0), c(H, null, $e(e.status.git_changes.nodes_added, (ge) => (a(), c("div", {
                      key: v(ge),
                      class: "change-item"
                    }, [
                      t("span", mm, f(v(ge)), 1),
                      g(ge) ? (a(), c("span", vm, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (N = (K = e.status.git_changes) == null ? void 0 : K.nodes_removed) != null && N.length ? (a(), c("div", pm, [
                  t("div", gm, [
                    p[19] || (p[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", hm, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", ym, [
                    (a(!0), c(H, null, $e(e.status.git_changes.nodes_removed, (ge) => (a(), c("div", {
                      key: v(ge),
                      class: "change-item"
                    }, [
                      t("span", wm, f(v(ge)), 1),
                      g(ge) ? (a(), c("span", _m, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = e.status.git_changes) != null && I.workflow_changes ? (a(), c("div", km, [
                  p[20] || (p[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", bm, [
                    t("div", $m, [
                      t("span", Cm, f(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (T = e.status.git_changes) != null && T.has_other_changes ? (a(), c("div", xm, [...p[21] || (p[21] = [
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
              (M = e.status.comparison) != null && M.is_synced ? y("", !0) : (a(), c("div", Sm, [
                t("div", Im, [
                  x(Ut, { level: "4" }, {
                    default: h(() => [...p[22] || (p[22] = [
                      b("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[3] || (p[3] = (ge) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                p[26] || (p[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (X = (se = e.status.comparison) == null ? void 0 : se.missing_nodes) != null && X.length ? (a(), c("div", Em, [
                  x(dt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", Tm, [
                    (a(!0), c(H, null, $e(e.status.comparison.missing_nodes.slice(0, 10), (ge) => (a(), c("div", {
                      key: ge,
                      class: "drift-list-item"
                    }, " - " + f(ge), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), c("div", Pm, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (oe = (j = e.status.comparison) == null ? void 0 : j.extra_nodes) != null && oe.length ? (a(), c("div", Rm, [
                  x(dt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", Mm, [
                    (a(!0), c(H, null, $e(e.status.comparison.extra_nodes.slice(0, 10), (ge) => (a(), c("div", {
                      key: ge,
                      class: "drift-list-item"
                    }, " - " + f(ge), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), c("div", Dm, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (U = (Z = e.status.comparison) == null ? void 0 : Z.version_mismatches) != null && U.length ? (a(), c("div", Lm, [
                  x(dt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", Om, [
                    (a(!0), c(H, null, $e(e.status.comparison.version_mismatches.slice(0, 10), (ge) => (a(), c("div", {
                      key: ge.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      b(f(ge.name) + ": ", 1),
                      t("span", Am, f(ge.actual), 1),
                      p[23] || (p[23] = b(" → ", -1)),
                      t("span", Um, f(ge.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), c("div", Nm, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((W = e.status.comparison) == null ? void 0 : W.packages_in_sync) === !1 ? (a(), c("div", zm, [
                  x(dt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", Fm, [
                  x(fe, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: p[4] || (p[4] = (ge) => w.$emit("repair"))
                  }, {
                    default: h(() => [...p[24] || (p[24] = [
                      b(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  p[25] || (p[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ie = (O = e.status.comparison) == null ? void 0 : O.disabled_nodes) != null && ie.length ? (a(), c("div", Bm, [
                x(Ut, { level: "4" }, {
                  default: h(() => [...p[27] || (p[27] = [
                    b("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", Vm, [
                  p[28] || (p[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", Wm, [
                  (a(!0), c(H, null, $e(e.status.comparison.disabled_nodes.slice(0, 10), (ge) => (a(), c("div", {
                    key: ge,
                    class: "drift-list-item"
                  }, " • " + f(ge), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), c("div", Gm, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), c("div", jm, [
                x(Ut, { level: "4" }, {
                  default: h(() => [...p[29] || (p[29] = [
                    b("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", Hm, [
                  p[30] || (p[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                p[31] || (p[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (a(), c("div", Km, [...p[32] || (p[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            t("div", qm, [
              x(fe, {
                variant: "secondary",
                onClick: p[5] || (p[5] = (ge) => w.$emit("close"))
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
}), Jm = /* @__PURE__ */ be(Ym, [["__scopeId", "data-v-e2b37122"]]), Xm = { class: "health-section-header" }, Qm = { class: "suggestions-content" }, Zm = { class: "suggestions-text" }, ev = { style: { "margin-top": "var(--cg-space-3)" } }, tv = {
  key: 1,
  class: "no-issues-text"
}, sv = /* @__PURE__ */ ke({
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
    const S = A(() => {
      const Z = n.status.workflows.analyzed || [], U = Z.filter(
        (W) => W.unresolved_models_count > 0 || W.ambiguous_models_count > 0
      );
      return U.length === 0 && n.status.missing_models_count > 0 ? Z.filter((W) => W.sync_state === "synced") : U;
    });
    function $() {
      const Z = S.value;
      Z.length !== 0 && (v.value = !0, m("repair-missing-models", Z.map((U) => U.name)));
    }
    function P() {
      v.value = !1;
    }
    s({ resetRepairingState: P, resetRepairingEnvironmentState: p, closeDetailModal: _ });
    const D = A(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), E = A(() => n.status.has_changes), C = A(() => {
      const Z = n.status.git_changes;
      return Z.nodes_added.length > 0 || Z.nodes_removed.length > 0 || Z.workflow_changes;
    }), G = A(() => n.status.has_changes || D.value), K = A(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), N = A(() => n.status.git_changes.has_other_changes), I = A(() => {
      var Z;
      return ((Z = n.status.workflows.analyzed) == null ? void 0 : Z.filter((U) => U.status === "broken")) || [];
    }), T = A(() => {
      var Z;
      return ((Z = n.status.workflows.analyzed) == null ? void 0 : Z.filter(
        (U) => U.has_path_sync_issues && !U.has_issues
      )) || [];
    }), M = A(() => I.value.length > 0), se = A(() => M.value || T.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), X = A(() => {
      const Z = [];
      return n.status.workflows.new.length > 0 && Z.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && Z.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && Z.push(`${n.status.workflows.deleted.length} deleted`), Z.length > 0 ? `${Z.join(", ")} workflow${Z.length === 1 && !Z[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), j = A(() => {
      var W, O;
      const Z = [], U = n.status.comparison;
      return (W = U.missing_nodes) != null && W.length && Z.push(`${U.missing_nodes.length} missing node${U.missing_nodes.length === 1 ? "" : "s"}`), (O = U.extra_nodes) != null && O.length && Z.push(`${U.extra_nodes.length} untracked node${U.extra_nodes.length === 1 ? "" : "s"}`), Z.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Z.join(" and ")}.`;
    }), oe = A(() => {
      var W, O;
      const Z = [], U = n.status.comparison;
      return (W = U.extra_nodes) != null && W.length && (U.extra_nodes.slice(0, 3).forEach((ie) => {
        Z.push(`Untracked: ${ie}`);
      }), U.extra_nodes.length > 3 && Z.push(`...and ${U.extra_nodes.length - 3} more untracked`)), (O = U.missing_nodes) != null && O.length && (U.missing_nodes.slice(0, 3).forEach((ie) => {
        Z.push(`Missing: ${ie}`);
      }), U.missing_nodes.length > 3 && Z.push(`...and ${U.missing_nodes.length - 3} more missing`)), Z;
    });
    return (Z, U) => (a(), c(H, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, { title: "STATUS" })
        ]),
        content: h(() => [
          n.setupState === "no_workspace" ? (a(), R(Jt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: h(() => [
              x(fe, {
                variant: "primary",
                size: "sm",
                onClick: U[0] || (U[0] = (W) => Z.$emit("start-setup"))
              }, {
                default: h(() => [...U[13] || (U[13] = [
                  b(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (a(), R(Jt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: h(() => [
              x(fe, {
                variant: "primary",
                size: "sm",
                onClick: U[1] || (U[1] = (W) => Z.$emit("view-environments"))
              }, {
                default: h(() => [...U[14] || (U[14] = [
                  b(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (a(), R(Jt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: h(() => [
              x(fe, {
                variant: "primary",
                size: "sm",
                onClick: U[2] || (U[2] = (W) => Z.$emit("create-environment"))
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
            onMouseenter: U[4] || (U[4] = (W) => i.value = !0),
            onMouseleave: U[5] || (U[5] = (W) => i.value = !1)
          }, [
            t("div", Xm, [
              x(Ut, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...U[16] || (U[16] = [
                  b(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              x(Ku, { name: "fade" }, {
                default: h(() => [
                  i.value ? (a(), R(fe, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: r
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
            x(ef, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, so({
              left: h(() => [
                e.status.workflows.new.length ? (a(), R(ds, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (a(), R(ds, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (a(), R(ds, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                x(ds, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: D.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (a(), R(ds, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), R(ds, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (a(), R(ds, {
                  key: 2,
                  icon: "●",
                  count: K.value,
                  label: K.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                N.value ? (a(), R(ds, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                E.value && !C.value && !N.value ? (a(), R(ds, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                E.value ? y("", !0) : (a(), R(ds, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              G.value ? {
                name: "footer",
                fn: h(() => [
                  U[19] || (U[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", Qm, [
                    t("span", Zm, f(X.value), 1),
                    x(fe, {
                      variant: "primary",
                      size: "sm",
                      onClick: U[3] || (U[3] = (W) => Z.$emit("commit-changes"))
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
          e.status.is_detached_head ? (a(), R(Jt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              x(fe, {
                variant: "primary",
                size: "sm",
                onClick: U[6] || (U[6] = (W) => Z.$emit("create-branch"))
              }, {
                default: h(() => [...U[20] || (U[20] = [
                  b(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", ev, [
            x(Ut, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...U[21] || (U[21] = [
                b(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            se.value ? (a(), c(H, { key: 0 }, [
              I.value.length > 0 ? (a(), R(Jt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${I.value.length} workflow${I.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: I.value.map((W) => `${W.name} — ${W.issue_summary}`)
              }, {
                actions: h(() => [
                  x(fe, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[7] || (U[7] = (W) => Z.$emit("view-workflows"))
                  }, {
                    default: h(() => [...U[22] || (U[22] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              T.value.length > 0 ? (a(), R(Jt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${T.value.length} workflow${T.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: T.value.map((W) => `${W.name} — ${W.models_needing_path_sync_count} model path${W.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  x(fe, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[8] || (U[8] = (W) => Z.$emit("view-workflows"))
                  }, {
                    default: h(() => [...U[23] || (U[23] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !M.value ? (a(), R(Jt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  x(fe, {
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
                  x(fe, {
                    variant: "secondary",
                    size: "sm",
                    onClick: U[9] || (U[9] = (W) => Z.$emit("view-workflows"))
                  }, {
                    default: h(() => [...U[24] || (U[24] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (a(), R(Jt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: j.value,
                items: oe.value
              }, {
                actions: h(() => [
                  x(fe, {
                    variant: "secondary",
                    size: "sm",
                    onClick: r
                  }, {
                    default: h(() => [...U[25] || (U[25] = [
                      b(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  x(fe, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[10] || (U[10] = (W) => Z.$emit("view-nodes"))
                  }, {
                    default: h(() => [...U[26] || (U[26] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (a(), R(Jt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: h(() => [
                  x(fe, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[11] || (U[11] = (W) => Z.$emit("view-nodes"))
                  }, {
                    default: h(() => [...U[27] || (U[27] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : G.value ? (a(), c("span", tv, "No issues")) : (a(), R(ns, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      x(Jm, {
        show: l.value,
        status: e.status,
        "is-repairing": g.value,
        onClose: U[12] || (U[12] = (W) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), ov = /* @__PURE__ */ be(sv, [["__scopeId", "data-v-55fcd77f"]]), nv = ["type", "value", "placeholder", "disabled"], av = /* @__PURE__ */ ke({
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
    return Xe(() => {
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
      class: Te(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: r,
      onKeyup: [
        d[0] || (d[0] = es((m) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = es((m) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (m) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (m) => u.$emit("blur"))
    }, null, 42, nv));
  }
}), An = /* @__PURE__ */ be(av, [["__scopeId", "data-v-0380d08f"]]), lv = { class: "branch-create-form" }, iv = { class: "form-actions" }, rv = /* @__PURE__ */ ke({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, n = k(""), l = A(() => {
      const u = n.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function i() {
      l.value && (o("create", n.value.trim()), n.value = "");
    }
    function r() {
      n.value = "", o("cancel");
    }
    return (u, d) => (a(), c("div", lv, [
      x(An, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => n.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: i,
        onEscape: r
      }, null, 8, ["modelValue"]),
      t("div", iv, [
        x(fe, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: i
        }, {
          default: h(() => [...d[1] || (d[1] = [
            b(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        x(fe, {
          variant: "secondary",
          size: "sm",
          onClick: r
        }, {
          default: h(() => [...d[2] || (d[2] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), cv = /* @__PURE__ */ be(rv, [["__scopeId", "data-v-7c500394"]]), uv = { class: "branch-list-item__indicator" }, dv = { class: "branch-list-item__name" }, fv = {
  key: 0,
  class: "branch-list-item__actions"
}, mv = {
  key: 0,
  class: "branch-list-item__current-label"
}, vv = /* @__PURE__ */ ke({
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
      class: Te(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, [
      t("span", uv, f(e.isCurrent ? "●" : "○"), 1),
      t("span", dv, f(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (a(), c("div", fv, [
        Ke(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), c("span", mv, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), pv = /* @__PURE__ */ be(vv, [["__scopeId", "data-v-c6581a24"]]), gv = {
  key: 2,
  class: "branch-list"
}, hv = /* @__PURE__ */ ke({
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
      header: h(() => [
        x(Pt, { title: "BRANCHES" }, {
          actions: h(() => [
            n.value ? y("", !0) : (a(), R(fe, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: u[0] || (u[0] = (d) => n.value = !0)
            }, {
              default: h(() => [...u[1] || (u[1] = [
                b(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: h(() => [
        n.value ? (a(), R(cv, {
          key: 0,
          onCreate: l,
          onCancel: i
        })) : y("", !0),
        e.branches.length === 0 ? (a(), R(ns, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), c("div", gv, [
          (a(!0), c(H, null, $e(e.branches, (d) => (a(), R(pv, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: h(() => [
              d.is_current ? y("", !0) : (a(), R(fe, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (m) => r.$emit("delete", d.name)
              }, {
                default: h(() => [...u[2] || (u[2] = [
                  b(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              d.is_current ? y("", !0) : (a(), R(fe, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (m) => r.$emit("switch", d.name)
              }, {
                default: h(() => [...u[3] || (u[3] = [
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
}), yv = /* @__PURE__ */ be(hv, [["__scopeId", "data-v-86784ddd"]]), wv = { class: "commit-list" }, _v = /* @__PURE__ */ ke({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (a(), c("div", wv, [
      Ke(s.$slots, "default", {}, void 0)
    ]));
  }
}), kv = /* @__PURE__ */ be(_v, [["__scopeId", "data-v-8c5ee761"]]), bv = { class: "commit-hash" }, $v = /* @__PURE__ */ ke({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = A(() => s.hash.slice(0, s.length));
    return (n, l) => (a(), c("span", bv, f(o.value), 1));
  }
}), br = /* @__PURE__ */ be($v, [["__scopeId", "data-v-7c333cc6"]]), Cv = { class: "commit-message" }, xv = { class: "commit-date" }, Sv = /* @__PURE__ */ ke({
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
      class: Te(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      x(br, { hash: e.hash }, null, 8, ["hash"]),
      t("span", Cv, f(e.message), 1),
      t("span", xv, f(e.relativeDate), 1),
      i.$slots.actions ? (a(), c("div", {
        key: 0,
        class: "commit-actions",
        onClick: r[0] || (r[0] = at(() => {
        }, ["stop"]))
      }, [
        Ke(i.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Iv = /* @__PURE__ */ be(Sv, [["__scopeId", "data-v-dd7c621b"]]), Ev = /* @__PURE__ */ ke({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (s, o) => (a(), R(Tt, null, {
      header: h(() => [
        x(Pt, { title: "HISTORY" })
      ]),
      content: h(() => [
        e.commits.length === 0 ? (a(), R(ns, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), R(kv, { key: 1 }, {
          default: h(() => [
            (a(!0), c(H, null, $e(e.commits, (n) => (a(), R(Iv, {
              key: n.hash,
              hash: n.short_hash || n.hash,
              message: n.message,
              "relative-date": n.date_relative || n.relative_date,
              onClick: (l) => s.$emit("select", n)
            }, {
              actions: h(() => [
                x(fe, {
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
}), Tv = /* @__PURE__ */ be(Ev, [["__scopeId", "data-v-981c3c64"]]), B7 = Vs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const V7 = [
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
], W7 = {
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
}, Pv = [
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
], G7 = [
  ...Pv,
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
function co() {
  return !1;
}
function $r() {
  return typeof crypto < "u" && crypto.randomUUID ? $r() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const s = Math.random() * 16 | 0;
    return (e === "x" ? s : s & 3 | 8).toString(16);
  });
}
function st() {
  const e = k(!1), s = k(null);
  async function o(J, te) {
    var Ot;
    if (!((Ot = window.app) != null && Ot.api))
      throw new Error("ComfyUI API not available");
    const Fe = await window.app.api.fetchApi(J, te);
    if (!Fe.ok) {
      const cs = await Fe.json().catch(() => ({}));
      throw new Error(cs.error || cs.message || `Request failed: ${Fe.status}`);
    }
    const rt = await Fe.text();
    if (rt)
      return JSON.parse(rt);
  }
  async function n(J = !1) {
    return o(J ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(J, te = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: J, allow_issues: te })
    });
  }
  async function i(J = 10, te = 0) {
    return o(`/v2/comfygit/log?limit=${J}&offset=${te}`);
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
  async function g(J) {
    return o(`/v2/comfygit/commit/${J}`);
  }
  async function w(J, te = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: J, force: te })
    });
  }
  async function p(J, te = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, start_point: te })
    });
  }
  async function _(J, te = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: J, force: te })
    });
  }
  async function S(J, te = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(J)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: te })
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
  async function P(J, te) {
    const Fe = { target_env: J };
    return te && (Fe.workspace_path = te), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Fe)
    });
  }
  async function D() {
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
  async function C() {
    return o("/v2/workspace/environments/create_status");
  }
  async function G(J = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${J}`);
  }
  async function K(J) {
    return o(`/v2/workspace/environments/${J}`, {
      method: "DELETE"
    });
  }
  async function N(J = !1) {
    try {
      return o(J ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const te = await n(J), Fe = [];
      return te.workflows.new.forEach((rt) => {
        Fe.push({ name: rt, status: "new", missing_nodes: 0, missing_models: 0, path: rt });
      }), te.workflows.modified.forEach((rt) => {
        Fe.push({ name: rt, status: "modified", missing_nodes: 0, missing_models: 0, path: rt });
      }), te.workflows.synced.forEach((rt) => {
        Fe.push({ name: rt, status: "synced", missing_nodes: 0, missing_models: 0, path: rt });
      }), Fe;
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
  async function M(J, te, Fe) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: te, install_models: Fe })
    });
  }
  async function se(J, te, Fe) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: te, importance: Fe })
    });
  }
  async function X() {
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
  async function oe(J) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(J)}`);
  }
  async function Z(J) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function U(J, te) {
    return o(`/v2/workspace/models/${J}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: te })
    });
  }
  async function W(J, te) {
    return o(`/v2/workspace/models/${J}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: te })
    });
  }
  async function O(J) {
    return o(`/v2/workspace/models/${J}`, {
      method: "DELETE"
    });
  }
  async function ie(J) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function ge() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Me() {
    return o("/v2/workspace/models/directory");
  }
  async function Ae(J) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function de(J) {
    const te = new URLSearchParams({ url: J });
    return o(`/v2/workspace/huggingface/repo-info?${te}`);
  }
  async function re() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function F(J) {
    try {
      const te = J ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(J)}` : "/v2/comfygit/config";
      return o(te);
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
  async function ee(J, te) {
    const Fe = te ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(te)}` : "/v2/comfygit/config";
    return o(Fe, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function he(J, te) {
    try {
      const Fe = new URLSearchParams();
      return J && Fe.append("level", J), te && Fe.append("lines", te.toString()), o(`/v2/comfygit/debug/logs?${Fe}`);
    } catch {
      return [];
    }
  }
  async function pe(J, te) {
    try {
      const Fe = new URLSearchParams();
      return J && Fe.append("level", J), te && Fe.append("lines", te.toString()), o(`/v2/workspace/debug/logs?${Fe}`);
    } catch {
      return [];
    }
  }
  async function me() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function De() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function Re(J, te) {
    try {
      const Fe = new URLSearchParams();
      return J && Fe.append("level", J), te && Fe.append("lines", te.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Fe}`);
    } catch {
      return [];
    }
  }
  async function L() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function B(J) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function ae() {
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
  async function ue(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}/track-dev`, {
      method: "POST"
    });
  }
  async function we(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}/install`, {
      method: "POST"
    });
  }
  async function _e(J) {
    var Ot, cs, Io, Eo;
    const te = $r(), Fe = ((cs = (Ot = window.app) == null ? void 0 : Ot.api) == null ? void 0 : cs.clientId) ?? ((Eo = (Io = window.app) == null ? void 0 : Io.api) == null ? void 0 : Eo.initialClientId) ?? "comfygit-panel", rt = {
      kind: "install",
      params: {
        id: J.id,
        version: J.version || J.selected_version || "latest",
        selected_version: J.selected_version || "latest",
        repository: J.repository || "",
        mode: J.mode || "remote",
        channel: J.channel || "default"
      },
      ui_id: te,
      client_id: Fe
    };
    return await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rt)
    }), await o("/v2/manager/queue/start"), { ui_id: te };
  }
  async function Ie(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}/update`, {
      method: "POST"
    });
  }
  async function Ee(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function ce() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function ye(J, te) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, url: te })
    });
  }
  async function Ne(J) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function Pe(J, te, Fe) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: te, push_url: Fe })
    });
  }
  async function ne(J, te) {
    const Fe = {};
    return te && (Fe["X-Git-Auth-Token"] = te), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/fetch`, {
      method: "POST",
      headers: Fe
    });
  }
  async function Y(J) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/status`);
    } catch {
      return null;
    }
  }
  async function Oe(J = "skip", te = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: J,
        remove_extra_nodes: te
      })
    });
  }
  async function xe(J, te) {
    const Fe = te ? `/v2/comfygit/remotes/${encodeURIComponent(J)}/pull-preview?branch=${encodeURIComponent(te)}` : `/v2/comfygit/remotes/${encodeURIComponent(J)}/pull-preview`;
    return o(Fe);
  }
  async function Ce(J, te = {}) {
    const Fe = { "Content-Type": "application/json" };
    return te.authToken && (Fe["X-Git-Auth-Token"] = te.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/pull`, {
      method: "POST",
      headers: Fe,
      body: JSON.stringify({
        model_strategy: te.modelStrategy || "skip",
        force: te.force || !1,
        resolutions: te.resolutions
      })
    });
  }
  async function V(J, te) {
    const Fe = te ? `/v2/comfygit/remotes/${encodeURIComponent(J)}/push-preview?branch=${encodeURIComponent(te)}` : `/v2/comfygit/remotes/${encodeURIComponent(J)}/push-preview`;
    return o(Fe);
  }
  async function z(J, te = {}) {
    const Fe = { "Content-Type": "application/json" };
    return te.authToken && (Fe["X-Git-Auth-Token"] = te.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/push`, {
      method: "POST",
      headers: Fe,
      body: JSON.stringify({ force: te.force || !1 })
    });
  }
  async function ve(J, te) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: te })
    });
  }
  async function Ve(J) {
    const te = {
      success: 0,
      failed: []
    };
    for (const Fe of J)
      try {
        await T(Fe), te.success++;
      } catch (rt) {
        te.failed.push({
          name: Fe,
          error: rt instanceof Error ? rt.message : "Unknown error"
        });
      }
    return te;
  }
  async function Qe(J) {
    var rt;
    const te = new FormData();
    if (te.append("file", J), !((rt = window.app) != null && rt.api))
      throw new Error("ComfyUI API not available");
    const Fe = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: te
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Fe.ok) {
      const Ot = await Fe.json().catch(() => ({}));
      throw new Error(Ot.error || `Preview failed: ${Fe.status}`);
    }
    return Fe.json();
  }
  async function vt(J) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(J)}`
    );
  }
  async function lt(J, te, Fe, rt) {
    var Io;
    const Ot = new FormData();
    if (Ot.append("file", J), Ot.append("name", te), Ot.append("model_strategy", Fe), Ot.append("torch_backend", rt), !((Io = window.app) != null && Io.api))
      throw new Error("ComfyUI API not available");
    const cs = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Ot
    });
    if (!cs.ok) {
      const Eo = await cs.json().catch(() => ({}));
      throw new Error(Eo.message || Eo.error || `Import failed: ${cs.status}`);
    }
    return cs.json();
  }
  async function ut() {
    return o("/v2/workspace/import/status");
  }
  async function Rt(J) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: J })
    });
  }
  async function Ft(J, te, Fe, rt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: J,
        name: te,
        model_strategy: Fe,
        torch_backend: rt
      })
    });
  }
  async function qt() {
    return o("/v2/setup/status");
  }
  async function Ws(J) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function Ms() {
    return o("/v2/setup/initialize_status");
  }
  async function no(J) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function Co() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function xo() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function So(J, te) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: J, save_key: te })
    });
  }
  async function Se() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function Q(J) {
    const te = J ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(J)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(te);
  }
  async function He(J) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function ht() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function Yt(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function ys(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}/stop`, {
      method: "POST"
    });
  }
  async function ws(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}/start`, {
      method: "POST"
    });
  }
  async function ls(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}/status`);
  }
  async function ze(J) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: J })
    });
  }
  async function is(J = !1) {
    return o(J ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function le() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function q() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function Ue(J) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function je(J) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function ot(J) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function ft() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function Mt(J) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/info`);
  }
  async function rs(J) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances`);
  }
  async function Gs(J, te) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(te)
    });
  }
  async function js(J, te) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent(te)}/start`, {
      method: "POST"
    });
  }
  async function ln(J, te) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent(te)}/stop`, {
      method: "POST"
    });
  }
  async function rn(J, te) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent(te)}`, {
      method: "DELETE"
    });
  }
  async function cn(J) {
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
    getCommitDetail: g,
    checkout: w,
    createBranch: p,
    switchBranch: _,
    deleteBranch: S,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: P,
    getSwitchProgress: D,
    createEnvironment: E,
    getCreateProgress: C,
    getComfyUIReleases: G,
    deleteEnvironment: K,
    // Workflow Management
    getWorkflows: N,
    getWorkflowDetails: I,
    resolveWorkflow: T,
    installWorkflowDeps: M,
    setModelImportance: se,
    // Model Management
    getEnvironmentModels: X,
    getWorkspaceModels: j,
    getModelDetails: oe,
    openFileLocation: Z,
    addModelSource: U,
    removeModelSource: W,
    deleteModel: O,
    downloadModel: ie,
    scanWorkspaceModels: ge,
    getModelsDirectory: Me,
    setModelsDirectory: Ae,
    getHuggingFaceRepoInfo: de,
    getModelsSubdirectories: re,
    // Settings
    getConfig: F,
    updateConfig: ee,
    // Debug/Logs
    getEnvironmentLogs: he,
    getWorkspaceLogs: pe,
    getEnvironmentLogPath: me,
    getWorkspaceLogPath: De,
    getOrchestratorLogs: Re,
    getOrchestratorLogPath: L,
    openFile: B,
    // Node Management
    getNodes: ae,
    trackNodeAsDev: ue,
    installNode: we,
    queueNodeInstall: _e,
    updateNode: Ie,
    uninstallNode: Ee,
    // Git Remotes
    getRemotes: ce,
    addRemote: ye,
    removeRemote: Ne,
    updateRemoteUrl: Pe,
    fetchRemote: ne,
    getRemoteSyncStatus: Y,
    // Push/Pull
    getPullPreview: xe,
    pullFromRemote: Ce,
    getPushPreview: V,
    pushToRemote: z,
    validateMerge: ve,
    // Environment Sync
    syncEnvironmentManually: Oe,
    // Workflow Repair
    repairWorkflowModels: Ve,
    // Import Operations
    previewTarballImport: Qe,
    previewGitImport: Rt,
    validateEnvironmentName: vt,
    executeImport: lt,
    executeGitImport: Ft,
    getImportProgress: ut,
    // First-Time Setup
    getSetupStatus: qt,
    initializeWorkspace: Ws,
    getInitializeProgress: Ms,
    validatePath: no,
    // Deploy Operations
    getDeploySummary: Co,
    getDataCenters: xo,
    testRunPodConnection: So,
    getNetworkVolumes: Se,
    getRunPodGpuTypes: Q,
    deployToRunPod: He,
    getRunPodPods: ht,
    terminateRunPodPod: Yt,
    stopRunPodPod: ys,
    startRunPodPod: ws,
    getDeploymentStatus: ls,
    exportDeployPackage: ze,
    getStoredRunPodKey: is,
    clearRunPodKey: le,
    // Custom Worker Operations
    getCustomWorkers: q,
    addCustomWorker: Ue,
    removeCustomWorker: je,
    testWorkerConnection: ot,
    scanForWorkers: ft,
    getWorkerSystemInfo: Mt,
    getWorkerInstances: rs,
    deployToWorker: Gs,
    startWorkerInstance: js,
    stopWorkerInstance: ln,
    terminateWorkerInstance: rn,
    // Git Authentication
    testGitAuth: cn
  };
}
async function gn(e, s) {
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
function Rv() {
  async function e() {
    try {
      return await gn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await gn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await gn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function n() {
    await gn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: s,
    restart: o,
    kill: n
  };
}
const Mv = { class: "base-modal-header" }, Dv = {
  key: 0,
  class: "base-modal-title"
}, Lv = { class: "base-modal-body" }, Ov = {
  key: 0,
  class: "base-modal-loading"
}, Av = {
  key: 1,
  class: "base-modal-error"
}, Uv = {
  key: 0,
  class: "base-modal-footer"
}, Nv = /* @__PURE__ */ ke({
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
    return Xe(() => {
      document.addEventListener("keydown", i), document.body.style.overflow = "hidden";
    }), oo(() => {
      document.removeEventListener("keydown", i), document.body.style.overflow = "";
    }), (r, u) => (a(), R(wt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Te(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = at(() => {
          }, ["stop"]))
        }, [
          t("div", Mv, [
            Ke(r.$slots, "header", {}, () => [
              e.title ? (a(), c("h3", Dv, f(e.title), 1)) : y("", !0)
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
          t("div", Lv, [
            e.loading ? (a(), c("div", Ov, "Loading...")) : e.error ? (a(), c("div", Av, f(e.error), 1)) : Ke(r.$slots, "body", { key: 2 }, void 0)
          ]),
          r.$slots.footer ? (a(), c("div", Uv, [
            Ke(r.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), mt = /* @__PURE__ */ be(Nv, [["__scopeId", "data-v-8dab1081"]]), zv = ["type", "disabled"], Fv = {
  key: 0,
  class: "spinner"
}, Bv = /* @__PURE__ */ ke({
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
      class: Te(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), c("span", Fv)) : y("", !0),
      Ke(s.$slots, "default", {}, void 0)
    ], 10, zv));
  }
}), Le = /* @__PURE__ */ be(Bv, [["__scopeId", "data-v-f3452606"]]), Vv = {
  key: 0,
  class: "base-title-count"
}, Wv = /* @__PURE__ */ ke({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (a(), R(Xa(`h${e.level}`), {
      class: Te(["base-title", e.variant])
    }, {
      default: h(() => [
        Ke(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), c("span", Vv, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Go = /* @__PURE__ */ be(Wv, [["__scopeId", "data-v-5a01561d"]]), Gv = ["value", "disabled"], jv = {
  key: 0,
  value: "",
  disabled: ""
}, Hv = ["value"], Kv = {
  key: 0,
  class: "base-select-error"
}, qv = /* @__PURE__ */ ke({
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
      class: Te(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Te(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (i) => n.$emit("update:modelValue", i.target.value))
      }, [
        e.placeholder ? (a(), c("option", jv, f(e.placeholder), 1)) : y("", !0),
        (a(!0), c(H, null, $e(e.options, (i) => (a(), c("option", {
          key: s(i),
          value: s(i)
        }, f(o(i)), 9, Hv))), 128))
      ], 42, Gv),
      e.error ? (a(), c("span", Kv, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Cr = /* @__PURE__ */ be(qv, [["__scopeId", "data-v-7436d745"]]), Yv = { class: "popover-header" }, Jv = { class: "popover-title" }, Xv = { class: "popover-content" }, Qv = {
  key: 0,
  class: "popover-actions"
}, Zv = /* @__PURE__ */ ke({
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
          style: Kt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = at(() => {
          }, ["stop"]))
        }, [
          t("div", Yv, [
            t("h4", Jv, f(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", Xv, [
            Ke(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (a(), c("div", Qv, [
            Ke(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), as = /* @__PURE__ */ be(Zv, [["__scopeId", "data-v-42815ace"]]), ep = { class: "detail-section" }, tp = {
  key: 0,
  class: "empty-message"
}, sp = { class: "model-header" }, op = { class: "model-name" }, np = { class: "model-details" }, ap = { class: "model-row" }, lp = { class: "model-row" }, ip = { class: "label" }, rp = {
  key: 0,
  class: "model-row model-row-nodes"
}, cp = { class: "node-list" }, up = ["onClick"], dp = {
  key: 1,
  class: "model-row"
}, fp = { class: "value" }, mp = {
  key: 2,
  class: "model-row"
}, vp = { class: "value error" }, pp = {
  key: 0,
  class: "model-actions"
}, gp = { class: "detail-section" }, hp = {
  key: 0,
  class: "empty-message"
}, yp = { class: "node-name" }, wp = {
  key: 0,
  class: "node-version"
}, _p = /* @__PURE__ */ ke({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getWorkflowDetails: l, setModelImportance: i, openFileLocation: r } = st(), u = k(null), d = k(!1), m = k(null), v = k(!1), g = k({}), w = k(!1), p = k(/* @__PURE__ */ new Set()), _ = [
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
    function D(I) {
      return p.value.has(I);
    }
    function E(I) {
      p.value.has(I) ? p.value.delete(I) : p.value.add(I), p.value = new Set(p.value);
    }
    async function C() {
      d.value = !0, m.value = null;
      try {
        u.value = await l(o.workflowName);
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function G(I, T) {
      g.value[I] = T, v.value = !0;
    }
    async function K(I) {
      try {
        await r(I);
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to open file location";
      }
    }
    async function N() {
      if (!v.value) {
        n("close");
        return;
      }
      d.value = !0, m.value = null;
      try {
        for (const [I, T] of Object.entries(g.value))
          await i(o.workflowName, I, T);
        n("refresh"), n("close");
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return Xe(C), (I, T) => (a(), c(H, null, [
      x(mt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: d.value,
        error: m.value || void 0,
        onClose: T[4] || (T[4] = (M) => n("close"))
      }, {
        body: h(() => [
          u.value ? (a(), c(H, { key: 0 }, [
            t("section", ep, [
              x(Go, { variant: "section" }, {
                default: h(() => [
                  b("MODELS USED (" + f(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (a(), c("div", tp, " No models used in this workflow ")) : y("", !0),
              (a(!0), c(H, null, $e(u.value.models, (M) => {
                var se;
                return a(), c("div", {
                  key: M.hash || M.filename,
                  class: "model-card"
                }, [
                  t("div", sp, [
                    T[6] || (T[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", op, f(M.filename), 1)
                  ]),
                  t("div", np, [
                    t("div", ap, [
                      T[7] || (T[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Te(["value", S(M.status)])
                      }, f($(M.status)), 3)
                    ]),
                    t("div", lp, [
                      t("span", ip, [
                        T[8] || (T[8] = b(" Importance: ", -1)),
                        x(kr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: T[0] || (T[0] = (X) => w.value = !0)
                        })
                      ]),
                      x(Cr, {
                        "model-value": g.value[M.filename] || M.importance,
                        options: _,
                        "onUpdate:modelValue": (X) => G(M.filename, X)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    M.loaded_by && M.loaded_by.length > 0 ? (a(), c("div", rp, [
                      T[9] || (T[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", cp, [
                        (a(!0), c(H, null, $e(P(M), (X, j) => (a(), c("div", {
                          key: `${X.node_id}-${j}`,
                          class: "node-reference"
                        }, f(X.node_type) + " (Node #" + f(X.node_id) + ") ", 1))), 128)),
                        M.loaded_by.length > 3 ? (a(), c("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (X) => E(M.hash || M.filename)
                        }, f(D(M.hash || M.filename) ? "▼ Show less" : `▶ View all (${M.loaded_by.length})`), 9, up)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    M.size_mb ? (a(), c("div", dp, [
                      T[10] || (T[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", fp, f(M.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    M.has_category_mismatch ? (a(), c("div", mp, [
                      T[13] || (T[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", vp, [
                        T[11] || (T[11] = b(" In ", -1)),
                        t("code", null, f(M.actual_category) + "/", 1),
                        T[12] || (T[12] = b(" but loader needs ", -1)),
                        t("code", null, f((se = M.expected_categories) == null ? void 0 : se[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  M.status !== "available" ? (a(), c("div", pp, [
                    M.status === "downloadable" ? (a(), R(Le, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: T[1] || (T[1] = (X) => n("resolve"))
                    }, {
                      default: h(() => [...T[14] || (T[14] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    })) : M.status === "category_mismatch" && M.file_path ? (a(), R(Le, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (X) => K(M.file_path)
                    }, {
                      default: h(() => [...T[15] || (T[15] = [
                        b(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : M.status !== "path_mismatch" ? (a(), R(Le, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: T[2] || (T[2] = (X) => n("resolve"))
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
            t("section", gp, [
              x(Go, { variant: "section" }, {
                default: h(() => [
                  b("NODES USED (" + f(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (a(), c("div", hp, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), c(H, null, $e(u.value.nodes, (M) => (a(), c("div", {
                key: M.name,
                class: "node-item"
              }, [
                t("span", {
                  class: Te(["node-status", M.status === "installed" ? "installed" : "missing"])
                }, f(M.status === "installed" ? "✓" : "✕"), 3),
                t("span", yp, f(M.name), 1),
                M.version ? (a(), c("span", wp, "v" + f(M.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          x(Le, {
            variant: "secondary",
            onClick: T[3] || (T[3] = (M) => n("close"))
          }, {
            default: h(() => [...T[17] || (T[17] = [
              b(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (a(), R(Le, {
            key: 0,
            variant: "primary",
            onClick: N
          }, {
            default: h(() => [...T[18] || (T[18] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      x(as, {
        show: w.value,
        title: "Model Importance Levels",
        onClose: T[5] || (T[5] = (M) => w.value = !1)
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
}), kp = /* @__PURE__ */ be(_p, [["__scopeId", "data-v-668728e6"]]), Ye = Vs({
  items: [],
  status: "idle"
});
let vs = null;
function xr() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function fa(e) {
  return Ye.items.find((s) => s.id === e);
}
async function uo() {
  if (Ye.status === "downloading") return;
  const e = Ye.items.find((s) => s.status === "queued");
  if (!e) {
    Ye.status = "idle";
    return;
  }
  Ye.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await bp(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    Ye.status = "idle", uo();
  }
}
async function bp(e) {
  return new Promise((s, o) => {
    vs && (vs.close(), vs = null);
    const n = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${n}`);
    vs = l;
    let i = Date.now(), r = 0, u = !1;
    l.onmessage = (d) => {
      try {
        const m = JSON.parse(d.data);
        switch (m.type) {
          case "progress":
            e.downloaded = m.downloaded || 0, e.size = m.total || e.size;
            const v = Date.now(), g = (v - i) / 1e3;
            if (g > 0.5) {
              const w = e.downloaded - r;
              if (e.speed = w / g, i = v, r = e.downloaded, e.speed > 0 && e.size > 0) {
                const p = e.size - e.downloaded;
                e.eta = p / e.speed;
              }
            }
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            u = !0, l.close(), vs = null, s();
            break;
          case "error":
            u = !0, l.close(), vs = null, o(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      l.close(), vs = null, u || o(new Error("Connection lost"));
    };
  });
}
async function $p() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (Ye.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const n = {
        id: xr(),
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
function bo() {
  function e($) {
    for (const P of $) {
      if (Ye.items.some(
        (C) => C.url === P.url && C.targetPath === P.targetPath && ["queued", "downloading", "paused", "completed"].includes(C.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${P.filename}`);
        continue;
      }
      const E = {
        id: xr(),
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
      Ye.items.push(E);
    }
    Ye.status === "idle" && uo();
  }
  async function s($) {
    const P = fa($);
    if (P) {
      if (P.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(P.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        vs && (vs.close(), vs = null), P.status = "failed", P.error = "Cancelled by user", Ye.status = "idle", uo();
      } else if (P.status === "queued") {
        const D = Ye.items.findIndex((E) => E.id === $);
        D >= 0 && Ye.items.splice(D, 1);
      }
    }
  }
  function o($) {
    const P = fa($);
    !P || P.status !== "failed" || (P.status = "queued", P.error = void 0, P.progress = 0, P.downloaded = 0, Ye.status === "idle" && uo());
  }
  function n($) {
    const P = fa($);
    !P || P.status !== "paused" || (P.status = "queued", Ye.status === "idle" && uo());
  }
  function l() {
    const $ = Ye.items.filter((P) => P.status === "paused");
    for (const P of $)
      P.status = "queued";
    Ye.status === "idle" && uo();
  }
  function i($) {
    const P = Ye.items.findIndex((D) => D.id === $);
    P >= 0 && ["completed", "failed", "paused"].includes(Ye.items[P].status) && Ye.items.splice(P, 1);
  }
  function r() {
    Ye.items = Ye.items.filter(($) => $.status !== "completed");
  }
  function u() {
    Ye.items = Ye.items.filter(($) => $.status !== "failed");
  }
  const d = A(
    () => Ye.items.find(($) => $.status === "downloading")
  ), m = A(
    () => Ye.items.filter(($) => $.status === "queued")
  ), v = A(
    () => Ye.items.filter(($) => $.status === "completed")
  ), g = A(
    () => Ye.items.filter(($) => $.status === "failed")
  ), w = A(
    () => Ye.items.filter(($) => $.status === "paused")
  ), p = A(() => Ye.items.length > 0), _ = A(
    () => Ye.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), S = A(
    () => Ye.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: In(Ye),
    // Computed
    currentDownload: d,
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
    clearCompleted: r,
    clearFailed: u,
    loadPendingDownloads: $p
  };
}
function Sr() {
  const e = k(null), s = k(null), o = k([]), n = k([]), l = k(!1), i = k(null);
  async function r(D, E) {
    var G;
    if (!((G = window.app) != null && G.api))
      throw new Error("ComfyUI API not available");
    const C = await window.app.api.fetchApi(D, E);
    if (!C.ok) {
      const K = await C.json().catch(() => ({})), N = K.error || K.message || `Request failed: ${C.status}`;
      throw new Error(N);
    }
    return C.json();
  }
  async function u(D) {
    l.value = !0, i.value = null;
    try {
      let E;
      return co() || (E = await r(
        `/v2/comfygit/workflow/${D}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), e.value = E, E;
    } catch (E) {
      const C = E instanceof Error ? E.message : "Unknown error occurred";
      throw i.value = C, E;
    } finally {
      l.value = !1;
    }
  }
  async function d(D, E, C, G) {
    l.value = !0, i.value = null;
    try {
      let K;
      if (!co()) {
        const N = Object.fromEntries(E), I = Object.fromEntries(C), T = G ? Array.from(G) : [];
        K = await r(
          `/v2/comfygit/workflow/${D}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: N,
              model_choices: I,
              skipped_packages: T
            })
          }
        );
      }
      return s.value = K, K;
    } catch (K) {
      const N = K instanceof Error ? K.message : "Unknown error occurred";
      throw i.value = N, K;
    } finally {
      l.value = !1;
    }
  }
  async function m(D, E = 10) {
    l.value = !0, i.value = null;
    try {
      let C;
      return co() || (C = await r(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: D, limit: E })
        }
      )), o.value = C.results, C.results;
    } catch (C) {
      const G = C instanceof Error ? C.message : "Unknown error occurred";
      throw i.value = G, C;
    } finally {
      l.value = !1;
    }
  }
  async function v(D, E = 10) {
    l.value = !0, i.value = null;
    try {
      let C;
      return co() || (C = await r(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: D, limit: E })
        }
      )), n.value = C.results, C.results;
    } catch (C) {
      const G = C instanceof Error ? C.message : "Unknown error occurred";
      throw i.value = G, C;
    } finally {
      l.value = !1;
    }
  }
  const g = Vs({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function w() {
    g.phase = "idle", g.currentFile = void 0, g.currentFileIndex = void 0, g.totalFiles = void 0, g.bytesDownloaded = void 0, g.bytesTotal = void 0, g.completedFiles = [], g.nodesToInstall = [], g.nodesInstalled = [], g.installError = void 0, g.needsRestart = void 0, g.error = void 0, g.nodeInstallProgress = void 0;
  }
  async function p(D) {
    g.phase = "installing", g.nodesInstalled = [], g.installError = void 0, g.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return co(), await _(D);
    } catch (E) {
      const C = E instanceof Error ? E.message : "Failed to install nodes";
      throw g.installError = C, E;
    }
  }
  async function _(D) {
    var C;
    const E = await r(
      `/v2/comfygit/workflow/${D}/install`,
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
      const G = new Map(((C = E.failed) == null ? void 0 : C.map((K) => [K.node_id, K.error])) || []);
      for (let K = 0; K < g.nodesToInstall.length; K++) {
        const N = g.nodesToInstall[K], I = G.get(N);
        g.nodeInstallProgress.completedNodes.push({
          node_id: N,
          success: !I,
          error: I
        });
      }
    }
    return g.nodesInstalled = E.nodes_installed, g.needsRestart = E.nodes_installed.length > 0, E.failed && E.failed.length > 0 && (g.installError = `${E.failed.length} package(s) failed to install`), E;
  }
  async function S(D, E, C) {
    w(), g.phase = "resolving", i.value = null;
    const G = Object.fromEntries(E), K = Object.fromEntries(C);
    try {
      const N = await fetch(`/v2/comfygit/workflow/${D}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: G,
          model_choices: K
        })
      });
      if (!N.ok)
        throw new Error(`Request failed: ${N.status}`);
      if (!N.body)
        throw new Error("No response body");
      const I = N.body.getReader(), T = new TextDecoder();
      let M = "";
      for (; ; ) {
        const { done: se, value: X } = await I.read();
        if (se) break;
        M += T.decode(X, { stream: !0 });
        const j = M.split(`

`);
        M = j.pop() || "";
        for (const oe of j) {
          if (!oe.trim()) continue;
          const Z = oe.split(`
`);
          let U = "", W = "";
          for (const O of Z)
            O.startsWith("event: ") ? U = O.slice(7) : O.startsWith("data: ") && (W = O.slice(6));
          if (W)
            try {
              const O = JSON.parse(W);
              $(U, O);
            } catch (O) {
              console.warn("Failed to parse SSE event:", O);
            }
        }
      }
    } catch (N) {
      const I = N instanceof Error ? N.message : "Unknown error occurred";
      throw i.value = I, g.error = I, g.phase = "error", N;
    }
  }
  function $(D, E) {
    switch (D) {
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
  function P(D, E) {
    const { addToQueue: C } = bo(), G = E.filter((K) => K.url && K.target_path).map((K) => ({
      workflow: D,
      filename: K.filename,
      url: K.url,
      targetPath: K.target_path,
      size: K.size || 0,
      type: "model"
    }));
    return G.length > 0 && C(G), G.length;
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
const Cp = { class: "resolution-stepper" }, xp = { class: "stepper-header" }, Sp = ["onClick"], Ip = {
  key: 0,
  class: "step-icon"
}, Ep = {
  key: 1,
  class: "step-number"
}, Tp = { class: "step-label" }, Pp = {
  key: 0,
  class: "step-connector"
}, Rp = { class: "stepper-content" }, Mp = /* @__PURE__ */ ke({
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
    function r(m) {
      return l(m) ? "state-complete" : i(m) ? "state-partial" : "state-pending";
    }
    function u(m) {
      return !1;
    }
    function d(m) {
      n("step-change", m);
    }
    return (m, v) => (a(), c("div", Cp, [
      t("div", xp, [
        (a(!0), c(H, null, $e(e.steps, (g, w) => (a(), c("div", {
          key: g.id,
          class: Te(["step", {
            active: e.currentStep === g.id,
            completed: l(g.id),
            "in-progress": i(g.id),
            disabled: u(g.id)
          }]),
          onClick: (p) => d(g.id)
        }, [
          t("div", {
            class: Te(["step-indicator", r(g.id)])
          }, [
            l(g.id) ? (a(), c("span", Ip, "✓")) : (a(), c("span", Ep, f(w + 1), 1))
          ], 2),
          t("div", Tp, f(g.label), 1),
          w < e.steps.length - 1 ? (a(), c("div", Pp)) : y("", !0)
        ], 10, Sp))), 128))
      ]),
      t("div", Rp, [
        Ke(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Dp = /* @__PURE__ */ be(Mp, [["__scopeId", "data-v-2a7b3af8"]]), Lp = /* @__PURE__ */ ke({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = A(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), n = A(() => `confidence-${o.value}`), l = A(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (i, r) => (a(), c("span", {
      class: Te(["confidence-badge", n.value, e.size])
    }, f(l.value), 3));
  }
}), Un = /* @__PURE__ */ be(Lp, [["__scopeId", "data-v-17ec4b80"]]), Op = { class: "node-info" }, Ap = { class: "node-info-text" }, Up = { class: "item-body" }, Np = {
  key: 0,
  class: "resolved-state"
}, zp = {
  key: 1,
  class: "multiple-options"
}, Fp = { class: "options-list" }, Bp = ["onClick"], Vp = ["name", "value", "checked", "onChange"], Wp = { class: "option-content" }, Gp = { class: "option-header" }, jp = { class: "option-package-id" }, Hp = {
  key: 0,
  class: "option-title"
}, Kp = { class: "option-meta" }, qp = {
  key: 0,
  class: "installed-badge"
}, Yp = { class: "action-buttons" }, Jp = {
  key: 2,
  class: "unresolved"
}, Xp = {
  key: 0,
  class: "searching-state"
}, Qp = { class: "options-list" }, Zp = ["onClick"], eg = ["name", "value"], tg = { class: "option-content" }, sg = { class: "option-header" }, og = { class: "option-package-id" }, ng = {
  key: 0,
  class: "option-description"
}, ag = { class: "option-meta" }, lg = {
  key: 0,
  class: "installed-badge"
}, ig = {
  key: 2,
  class: "unresolved-message"
}, rg = { class: "action-buttons" }, cg = /* @__PURE__ */ ke({
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
    const i = A(() => !!o.choice);
    A(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), A(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.package_id;
    });
    const r = A(() => {
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
      class: Te(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: i.value }])
    }, [
      t("div", Op, [
        t("span", Ap, [
          m[7] || (m[7] = b("Node type: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), c("span", {
          key: 0,
          class: Te(["status-badge", r.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Up, [
        i.value ? (a(), c("div", Np, [
          x(Le, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), c("div", zp, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          t("div", Fp, [
            (a(!0), c(H, null, $e(e.options, (v, g) => (a(), c("label", {
              key: v.package_id,
              class: Te(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (w) => u(g)
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (w) => u(g)
              }, null, 40, Vp),
              t("div", Wp, [
                t("div", Gp, [
                  t("span", jp, f(v.package_id), 1),
                  x(Un, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (a(), c("div", Hp, f(v.title), 1)) : y("", !0),
                t("div", Kp, [
                  v.is_installed ? (a(), c("span", qp, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, Bp))), 128))
          ]),
          t("div", Yp, [
            x(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                b(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            x(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            x(Le, {
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
        ])) : (a(), c("div", Jp, [
          e.isSearching ? (a(), c("div", Xp, [...m[13] || (m[13] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), c(H, { key: 1 }, [
            m[14] || (m[14] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", Qp, [
              (a(!0), c(H, null, $e(e.searchResults.slice(0, 5), (v, g) => (a(), c("label", {
                key: v.package_id,
                class: "option-card",
                onClick: (w) => n("search-result-selected", v)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: g
                }, null, 8, eg),
                t("div", tg, [
                  t("div", sg, [
                    t("span", og, f(v.package_id), 1),
                    x(Un, {
                      confidence: v.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  v.description ? (a(), c("div", ng, f(l(v.description)), 1)) : y("", !0),
                  t("div", ag, [
                    v.is_installed ? (a(), c("span", lg, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, Zp))), 128))
            ])
          ], 64)) : (a(), c("div", ig, [...m[15] || (m[15] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", rg, [
            x(Le, {
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
            x(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[16] || (m[16] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            x(Le, {
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
}), ug = /* @__PURE__ */ be(cg, [["__scopeId", "data-v-c2997d1d"]]), dg = { class: "item-navigator" }, fg = { class: "nav-item-info" }, mg = ["title"], vg = { class: "nav-controls" }, pg = { class: "nav-arrows" }, gg = ["disabled"], hg = ["disabled"], yg = { class: "nav-position" }, wg = /* @__PURE__ */ ke({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (n, l) => (a(), c("div", dg, [
      t("div", fg, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, f(e.itemName), 9, mg)
      ]),
      t("div", vg, [
        t("div", pg, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (i) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, gg),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (i) => o("next")),
            title: "Next item"
          }, " → ", 8, hg)
        ]),
        t("span", yg, f(e.currentIndex + 1) + "/" + f(e.totalItems), 1)
      ])
    ]));
  }
}), Ir = /* @__PURE__ */ be(wg, [["__scopeId", "data-v-74af7920"]]), _g = ["type", "value", "placeholder", "disabled"], kg = {
  key: 0,
  class: "base-input-error"
}, bg = /* @__PURE__ */ ke({
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
      class: Te(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Te(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.value)),
        onKeyup: [
          o[1] || (o[1] = es((n) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = es((n) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, _g),
      e.error ? (a(), c("span", kg, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Lt = /* @__PURE__ */ be(bg, [["__scopeId", "data-v-9ba02cdc"]]), $g = { class: "node-resolution-step" }, Cg = {
  key: 0,
  class: "auto-resolved-section"
}, xg = { class: "section-header" }, Sg = { class: "stat-badge" }, Ig = { class: "resolved-packages-list" }, Eg = { class: "package-info" }, Tg = { class: "package-id" }, Pg = { class: "node-count" }, Rg = { class: "package-actions" }, Mg = {
  key: 0,
  class: "status-badge install"
}, Dg = {
  key: 1,
  class: "status-badge skip"
}, Lg = ["onClick"], Og = {
  key: 1,
  class: "section-divider"
}, Ag = { class: "step-header" }, Ug = { class: "stat-badge" }, Ng = {
  key: 1,
  class: "step-body"
}, zg = {
  key: 3,
  class: "empty-state"
}, Fg = { class: "node-modal-body" }, Bg = { class: "node-search-results-container" }, Vg = {
  key: 0,
  class: "node-search-results"
}, Wg = ["onClick"], Gg = { class: "node-result-header" }, jg = { class: "node-result-package-id" }, Hg = {
  key: 0,
  class: "node-result-description"
}, Kg = {
  key: 1,
  class: "node-empty-state"
}, qg = {
  key: 2,
  class: "node-empty-state"
}, Yg = {
  key: 3,
  class: "node-empty-state"
}, Jg = { class: "node-manual-entry-modal" }, Xg = { class: "node-modal-body" }, Qg = { class: "node-modal-actions" }, Zg = /* @__PURE__ */ ke({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: s }) {
    const o = e, n = s, { searchNodes: l } = Sr(), i = k(0), r = k(!1), u = k(!1), d = k(""), m = k(""), v = k([]), g = k(!1), w = k(/* @__PURE__ */ new Map()), p = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function S() {
      _.value && O(), _.value = !1;
    }
    const $ = A(() => o.nodes[i.value]), P = A(() => o.nodes.filter((ee) => o.nodeChoices.has(ee.node_type)).length), D = A(() => $.value ? w.value.get($.value.node_type) || [] : []), E = A(() => $.value ? p.value.has($.value.node_type) : !1);
    gt($, async (ee) => {
      var he;
      ee && ((he = ee.options) != null && he.length || w.value.has(ee.node_type) || p.value.has(ee.node_type) || o.nodeChoices.has(ee.node_type) || await C(ee.node_type));
    }, { immediate: !0 });
    async function C(ee) {
      p.value.add(ee);
      try {
        const he = await l(ee, 5);
        w.value.set(ee, he);
      } catch {
        w.value.set(ee, []);
      } finally {
        p.value.delete(ee);
      }
    }
    const G = A(() => o.autoResolvedPackages.filter((ee) => !o.skippedPackages.has(ee.package_id)).length);
    function K(ee) {
      return o.skippedPackages.has(ee);
    }
    function N(ee) {
      n("package-skip", ee);
    }
    const I = A(() => {
      var he;
      if (!$.value) return "not-found";
      const ee = o.nodeChoices.get($.value.node_type);
      if (ee)
        switch (ee.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (he = $.value.options) != null && he.length ? "ambiguous" : "not-found";
    }), T = A(() => {
      var he;
      if (!$.value) return;
      const ee = o.nodeChoices.get($.value.node_type);
      if (ee)
        switch (ee.action) {
          case "install":
            return ee.package_id ? `→ ${ee.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (he = $.value.options) != null && he.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function M(ee) {
      ee >= 0 && ee < o.nodes.length && (i.value = ee);
    }
    function se() {
      var ee;
      for (let he = i.value + 1; he < o.nodes.length; he++) {
        const pe = o.nodes[he];
        if (!((ee = o.nodeChoices) != null && ee.has(pe.node_type))) {
          M(he);
          return;
        }
      }
    }
    function X() {
      $.value && (n("mark-optional", $.value.node_type), kt(() => se()));
    }
    function j() {
      $.value && (n("skip", $.value.node_type), kt(() => se()));
    }
    function oe(ee) {
      $.value && (n("option-selected", $.value.node_type, ee), kt(() => se()));
    }
    function Z() {
      $.value && n("clear-choice", $.value.node_type);
    }
    function U() {
      $.value && (d.value = $.value.node_type, v.value = D.value, r.value = !0, Ae(d.value));
    }
    function W() {
      m.value = "", u.value = !0;
    }
    function O() {
      r.value = !1, d.value = "", v.value = [];
    }
    function ie() {
      u.value = !1, m.value = "";
    }
    let ge = null;
    function Me() {
      ge && clearTimeout(ge), ge = setTimeout(() => {
        Ae(d.value);
      }, 300);
    }
    async function Ae(ee) {
      if (!ee.trim()) {
        v.value = [];
        return;
      }
      g.value = !0;
      try {
        v.value = await l(ee, 10);
      } catch {
        v.value = [];
      } finally {
        g.value = !1;
      }
    }
    function de(ee) {
      $.value && (n("manual-entry", $.value.node_type, ee.package_id), O(), kt(() => se()));
    }
    function re(ee) {
      $.value && (n("manual-entry", $.value.node_type, ee.package_id), kt(() => se()));
    }
    function F() {
      !$.value || !m.value.trim() || (n("manual-entry", $.value.node_type, m.value.trim()), ie(), kt(() => se()));
    }
    return (ee, he) => {
      var pe, me;
      return a(), c("div", $g, [
        e.autoResolvedPackages.length > 0 ? (a(), c("div", Cg, [
          t("div", xg, [
            he[6] || (he[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", Sg, f(G.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", Ig, [
            (a(!0), c(H, null, $e(e.autoResolvedPackages, (De) => (a(), c("div", {
              key: De.package_id,
              class: "resolved-package-item"
            }, [
              t("div", Eg, [
                t("code", Tg, f(De.package_id), 1),
                t("span", Pg, f(De.node_types_count) + " node type" + f(De.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", Rg, [
                K(De.package_id) ? (a(), c("span", Dg, " SKIPPED ")) : (a(), c("span", Mg, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (Re) => N(De.package_id)
                }, f(K(De.package_id) ? "Include" : "Skip"), 9, Lg)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), c("div", Og)) : y("", !0),
        e.nodes.length > 0 ? (a(), c(H, { key: 2 }, [
          t("div", Ag, [
            he[7] || (he[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", Ug, f(P.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          $.value ? (a(), R(Ir, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": i.value,
            "total-items": e.nodes.length,
            onPrev: he[0] || (he[0] = (De) => M(i.value - 1)),
            onNext: he[1] || (he[1] = (De) => M(i.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          $.value ? (a(), c("div", Ng, [
            x(ug, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((pe = $.value.options) != null && pe.length),
              options: $.value.options,
              choice: (me = e.nodeChoices) == null ? void 0 : me.get($.value.node_type),
              status: I.value,
              "status-label": T.value,
              "search-results": D.value,
              "is-searching": E.value,
              onMarkOptional: X,
              onSkip: j,
              onManualEntry: W,
              onSearch: U,
              onOptionSelected: oe,
              onClearChoice: Z,
              onSearchResultSelected: re
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), c("div", zg, [...he[8] || (he[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), R(wt, { to: "body" }, [
          r.value ? (a(), c("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: he[4] || (he[4] = at((De) => _.value = !0, ["self"])),
            onMouseup: at(S, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: he[3] || (he[3] = (De) => _.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                he[9] || (he[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: O
                }, "✕")
              ]),
              t("div", Fg, [
                x(Lt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": he[2] || (he[2] = (De) => d.value = De),
                  placeholder: "Search by node type, package name...",
                  onInput: Me
                }, null, 8, ["modelValue"]),
                t("div", Bg, [
                  v.value.length > 0 ? (a(), c("div", Vg, [
                    (a(!0), c(H, null, $e(v.value, (De) => (a(), c("div", {
                      key: De.package_id,
                      class: "node-search-result-item",
                      onClick: (Re) => de(De)
                    }, [
                      t("div", Gg, [
                        t("code", jg, f(De.package_id), 1),
                        De.match_confidence ? (a(), R(Un, {
                          key: 0,
                          confidence: De.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      De.description ? (a(), c("div", Hg, f(De.description), 1)) : y("", !0)
                    ], 8, Wg))), 128))
                  ])) : g.value ? (a(), c("div", Kg, "Searching...")) : d.value ? (a(), c("div", qg, 'No packages found matching "' + f(d.value) + '"', 1)) : (a(), c("div", Yg, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (a(), R(wt, { to: "body" }, [
          u.value ? (a(), c("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: at(ie, ["self"])
          }, [
            t("div", Jg, [
              t("div", { class: "node-modal-header" }, [
                he[10] || (he[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: ie
                }, "✕")
              ]),
              t("div", Xg, [
                x(Lt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": he[5] || (he[5] = (De) => m.value = De),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", Qg, [
                  x(Le, {
                    variant: "secondary",
                    onClick: ie
                  }, {
                    default: h(() => [...he[11] || (he[11] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  x(Le, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: F
                  }, {
                    default: h(() => [...he[12] || (he[12] = [
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
}), eh = /* @__PURE__ */ be(Zg, [["__scopeId", "data-v-6d7f8125"]]), th = { class: "node-info" }, sh = { class: "node-info-text" }, oh = { class: "item-body" }, nh = {
  key: 0,
  class: "resolved-state"
}, ah = {
  key: 1,
  class: "multiple-options"
}, lh = { class: "options-list" }, ih = ["onClick"], rh = ["name", "value", "checked", "onChange"], ch = { class: "option-content" }, uh = { class: "option-header" }, dh = { class: "option-filename" }, fh = { class: "option-meta" }, mh = { class: "option-size" }, vh = { class: "option-category" }, ph = { class: "option-path" }, gh = { class: "action-buttons" }, hh = {
  key: 2,
  class: "unresolved"
}, yh = { class: "action-buttons" }, wh = /* @__PURE__ */ ke({
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
    const o = e, n = s, l = A(() => !!o.choice);
    A(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), A(() => {
      var d, m;
      return ((m = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const i = A(() => {
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
      class: Te(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", th, [
        t("span", sh, [
          m[7] || (m[7] = b("Used by: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), c("span", {
          key: 0,
          class: Te(["status-badge", i.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", oh, [
        l.value ? (a(), c("div", nh, [
          x(Le, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), c("div", ah, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", lh, [
            (a(!0), c(H, null, $e(e.options, (v, g) => (a(), c("label", {
              key: v.model.hash,
              class: Te(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (w) => r(g)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (w) => r(g)
              }, null, 40, rh),
              t("div", ch, [
                t("div", uh, [
                  t("span", dh, f(v.model.filename), 1),
                  x(Un, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", fh, [
                  t("span", mh, f(u(v.model.size)), 1),
                  t("span", vh, f(v.model.category), 1)
                ]),
                t("div", ph, f(v.model.relative_path), 1)
              ])
            ], 10, ih))), 128))
          ]),
          t("div", gh, [
            x(Le, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            x(Le, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            x(Le, {
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
        ])) : (a(), c("div", hh, [
          m[16] || (m[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", yh, [
            x(Le, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: h(() => [...m[13] || (m[13] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            x(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[14] || (m[14] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            x(Le, {
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
}), _h = /* @__PURE__ */ be(wh, [["__scopeId", "data-v-8a82fefa"]]), kh = { class: "model-resolution-step" }, bh = { class: "step-header" }, $h = { class: "step-info" }, Ch = { class: "step-title" }, xh = { class: "step-description" }, Sh = { class: "stat-badge" }, Ih = {
  key: 1,
  class: "step-body"
}, Eh = {
  key: 2,
  class: "empty-state"
}, Th = { class: "model-search-modal" }, Ph = { class: "model-modal-body" }, Rh = {
  key: 0,
  class: "model-search-results"
}, Mh = ["onClick"], Dh = { class: "model-result-header" }, Lh = { class: "model-result-filename" }, Oh = { class: "model-result-meta" }, Ah = { class: "model-result-category" }, Uh = { class: "model-result-size" }, Nh = {
  key: 0,
  class: "model-result-path"
}, zh = {
  key: 1,
  class: "model-no-results"
}, Fh = {
  key: 2,
  class: "model-searching"
}, Bh = { class: "model-download-url-modal" }, Vh = { class: "model-modal-body" }, Wh = { class: "model-input-group" }, Gh = { class: "model-input-group" }, jh = { class: "model-modal-actions" }, Hh = /* @__PURE__ */ ke({
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
    function n(O) {
      var ie;
      return O && ((ie = o[O]) == null ? void 0 : ie[0]) || null;
    }
    const l = e, i = s, r = k(0), u = k(!1), d = k(!1), m = k(""), v = k(""), g = k(""), w = k([]), p = k(!1), _ = A(() => l.models[r.value]), S = A(() => l.models.some((O) => O.is_download_intent)), $ = A(() => l.models.filter(
      (O) => l.modelChoices.has(O.filename) || O.is_download_intent
    ).length), P = A(() => {
      var ie;
      if (!_.value) return "";
      const O = n((ie = _.value.reference) == null ? void 0 : ie.node_type);
      return O ? `${O}/${_.value.filename}` : "";
    }), D = A(() => {
      var ie;
      if (!_.value) return "not-found";
      const O = l.modelChoices.get(_.value.filename);
      if (O)
        switch (O.action) {
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
      return _.value.is_download_intent ? "download" : (ie = _.value.options) != null && ie.length ? "ambiguous" : "not-found";
    }), E = A(() => {
      var ie, ge;
      if (!_.value) return;
      const O = l.modelChoices.get(_.value.filename);
      if (O)
        switch (O.action) {
          case "select":
            return (ie = O.selected_model) != null && ie.filename ? `→ ${O.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (ge = _.value.options) != null && ge.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function C(O) {
      O >= 0 && O < l.models.length && (r.value = O);
    }
    function G() {
      var O;
      for (let ie = r.value + 1; ie < l.models.length; ie++) {
        const ge = l.models[ie];
        if (!ge.is_download_intent && !((O = l.modelChoices) != null && O.has(ge.filename))) {
          C(ie);
          return;
        }
      }
    }
    function K() {
      _.value && (i("mark-optional", _.value.filename), kt(() => G()));
    }
    function N() {
      _.value && (i("skip", _.value.filename), kt(() => G()));
    }
    function I(O) {
      _.value && (i("option-selected", _.value.filename, O), kt(() => G()));
    }
    function T() {
      _.value && i("clear-choice", _.value.filename);
    }
    function M() {
      _.value && (m.value = _.value.filename, u.value = !0);
    }
    function se() {
      _.value && (v.value = _.value.download_source || "", g.value = _.value.target_path || P.value, d.value = !0);
    }
    function X() {
      u.value = !1, m.value = "", w.value = [];
    }
    function j() {
      d.value = !1, v.value = "", g.value = "";
    }
    function oe() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function Z(O) {
      _.value && (X(), kt(() => G()));
    }
    function U() {
      !_.value || !v.value.trim() || (i("download-url", _.value.filename, v.value.trim(), g.value.trim() || void 0), j(), kt(() => G()));
    }
    function W(O) {
      if (!O) return "Unknown";
      const ie = O / (1024 * 1024 * 1024);
      return ie >= 1 ? `${ie.toFixed(2)} GB` : `${(O / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (O, ie) => {
      var ge, Me, Ae;
      return a(), c("div", kh, [
        t("div", bh, [
          t("div", $h, [
            t("h3", Ch, f(S.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", xh, f(S.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", Sh, f($.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), R(Ir, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": r.value,
          "total-items": e.models.length,
          onPrev: ie[0] || (ie[0] = (de) => C(r.value - 1)),
          onNext: ie[1] || (ie[1] = (de) => C(r.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), c("div", Ih, [
          x(_h, {
            filename: _.value.filename,
            "node-type": ((ge = _.value.reference) == null ? void 0 : ge.node_type) || "Unknown",
            "has-multiple-options": !!((Me = _.value.options) != null && Me.length),
            options: _.value.options,
            choice: (Ae = e.modelChoices) == null ? void 0 : Ae.get(_.value.filename),
            status: D.value,
            "status-label": E.value,
            onMarkOptional: K,
            onSkip: N,
            onDownloadUrl: se,
            onSearch: M,
            onOptionSelected: I,
            onClearChoice: T
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), c("div", Eh, [...ie[5] || (ie[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (a(), R(wt, { to: "body" }, [
          u.value ? (a(), c("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: at(X, ["self"])
          }, [
            t("div", Th, [
              t("div", { class: "model-modal-header" }, [
                ie[6] || (ie[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: X
                }, "✕")
              ]),
              t("div", Ph, [
                x(Lt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": ie[2] || (ie[2] = (de) => m.value = de),
                  placeholder: "Search by filename, category...",
                  onInput: oe
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), c("div", Rh, [
                  (a(!0), c(H, null, $e(w.value, (de) => (a(), c("div", {
                    key: de.hash,
                    class: "model-search-result-item",
                    onClick: (re) => Z()
                  }, [
                    t("div", Dh, [
                      t("code", Lh, f(de.filename), 1)
                    ]),
                    t("div", Oh, [
                      t("span", Ah, f(de.category), 1),
                      t("span", Uh, f(W(de.size)), 1)
                    ]),
                    de.relative_path ? (a(), c("div", Nh, f(de.relative_path), 1)) : y("", !0)
                  ], 8, Mh))), 128))
                ])) : m.value && !p.value ? (a(), c("div", zh, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                p.value ? (a(), c("div", Fh, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), R(wt, { to: "body" }, [
          d.value ? (a(), c("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: at(j, ["self"])
          }, [
            t("div", Bh, [
              t("div", { class: "model-modal-header" }, [
                ie[7] || (ie[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: j
                }, "✕")
              ]),
              t("div", Vh, [
                t("div", Wh, [
                  ie[8] || (ie[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  x(Lt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": ie[3] || (ie[3] = (de) => v.value = de),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", Gh, [
                  ie[9] || (ie[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  x(Lt, {
                    modelValue: g.value,
                    "onUpdate:modelValue": ie[4] || (ie[4] = (de) => g.value = de),
                    placeholder: P.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", jh, [
                  x(Le, {
                    variant: "secondary",
                    onClick: j
                  }, {
                    default: h(() => [...ie[10] || (ie[10] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  x(Le, {
                    variant: "primary",
                    disabled: !v.value.trim() || !g.value.trim(),
                    onClick: U
                  }, {
                    default: h(() => [...ie[11] || (ie[11] = [
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
}), Kh = /* @__PURE__ */ be(Hh, [["__scopeId", "data-v-5c700bfa"]]), qh = { class: "applying-step" }, Yh = {
  key: 0,
  class: "phase-content"
}, Jh = {
  key: 1,
  class: "phase-content"
}, Xh = { class: "phase-description" }, Qh = { class: "overall-progress" }, Zh = { class: "progress-bar" }, ey = { class: "progress-label" }, ty = { class: "install-list" }, sy = { class: "install-icon" }, oy = { key: 0 }, ny = {
  key: 1,
  class: "spinner"
}, ay = { key: 2 }, ly = { key: 3 }, iy = {
  key: 0,
  class: "install-error"
}, ry = {
  key: 2,
  class: "phase-content"
}, cy = { class: "phase-header" }, uy = { class: "phase-title" }, dy = { class: "completion-summary" }, fy = {
  key: 0,
  class: "summary-item success"
}, my = { class: "summary-text" }, vy = {
  key: 1,
  class: "summary-item error"
}, py = { class: "summary-text" }, gy = {
  key: 2,
  class: "failed-list"
}, hy = { class: "failed-node-id" }, yy = { class: "failed-error" }, wy = {
  key: 4,
  class: "summary-item success"
}, _y = {
  key: 5,
  class: "restart-prompt"
}, ky = {
  key: 3,
  class: "phase-content error"
}, by = { class: "error-message" }, $y = /* @__PURE__ */ ke({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const s = e, o = A(() => {
      var m, v;
      const u = ((m = s.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || s.progress.nodesToInstall.length;
      if (!u) return 0;
      const d = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(d / u * 100);
    }), n = A(() => {
      var u;
      return ((u = s.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((d) => !d.success)) || [];
    }), l = A(() => n.value.length > 0);
    function i(u, d) {
      var v, g;
      const m = (v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.find((w) => w.node_id === u);
      return m ? m.success ? "complete" : "failed" : ((g = s.progress.nodeInstallProgress) == null ? void 0 : g.currentIndex) === d ? "installing" : "pending";
    }
    function r(u) {
      var d, m;
      return (m = (d = s.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((v) => v.node_id === u)) == null ? void 0 : m.error;
    }
    return (u, d) => {
      var m, v, g, w;
      return a(), c("div", qh, [
        e.progress.phase === "resolving" ? (a(), c("div", Yh, [...d[2] || (d[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), c("div", Jh, [
          d[3] || (d[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", Xh, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", Qh, [
            t("div", Zh, [
              t("div", {
                class: "progress-fill",
                style: Kt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", ey, f(((g = e.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", ty, [
            (a(!0), c(H, null, $e(e.progress.nodesToInstall, (p, _) => (a(), c("div", {
              key: p,
              class: Te(["install-item", i(p, _)])
            }, [
              t("span", sy, [
                i(p, _) === "pending" ? (a(), c("span", oy, "○")) : i(p, _) === "installing" ? (a(), c("span", ny, "◌")) : i(p, _) === "complete" ? (a(), c("span", ay, "✓")) : i(p, _) === "failed" ? (a(), c("span", ly, "✗")) : y("", !0)
              ]),
              t("code", null, f(p), 1),
              r(p) ? (a(), c("span", iy, f(r(p)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), c("div", ry, [
          t("div", cy, [
            t("span", {
              class: Te(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            t("h3", uy, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", dy, [
            e.progress.nodesInstalled.length > 0 ? (a(), c("div", fy, [
              d[4] || (d[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", my, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), c("div", vy, [
              d[5] || (d[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", py, f(n.value.length) + " package" + f(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), c("div", gy, [
              (a(!0), c(H, null, $e(n.value, (p) => (a(), c("div", {
                key: p.node_id,
                class: "failed-item"
              }, [
                t("code", hy, f(p.node_id), 1),
                t("span", yy, f(p.error), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.length > 0 ? (a(), c("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (p) => u.$emit("retry-failed"))
            }, " Retry Failed (" + f(n.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (a(), c("div", wy, [...d[6] || (d[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), c("div", _y, [
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
        ])) : e.progress.phase === "error" ? (a(), c("div", ky, [
          d[9] || (d[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", by, f(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), Cy = /* @__PURE__ */ be($y, [["__scopeId", "data-v-5efaae58"]]), xy = {
  key: 0,
  class: "loading-state"
}, Sy = {
  key: 1,
  class: "wizard-content"
}, Iy = {
  key: 0,
  class: "step-content"
}, Ey = { class: "analysis-summary" }, Ty = { class: "analysis-header" }, Py = { class: "summary-description" }, Ry = { class: "stats-grid" }, My = { class: "stat-card" }, Dy = { class: "stat-items" }, Ly = {
  key: 0,
  class: "stat-item success"
}, Oy = { class: "stat-count" }, Ay = {
  key: 1,
  class: "stat-item info"
}, Uy = { class: "stat-count" }, Ny = {
  key: 2,
  class: "stat-item warning"
}, zy = { class: "stat-count" }, Fy = {
  key: 3,
  class: "stat-item error"
}, By = { class: "stat-count" }, Vy = { class: "stat-card" }, Wy = { class: "stat-items" }, Gy = { class: "stat-item success" }, jy = { class: "stat-count" }, Hy = {
  key: 0,
  class: "stat-item info"
}, Ky = { class: "stat-count" }, qy = {
  key: 1,
  class: "stat-item warning"
}, Yy = { class: "stat-count" }, Jy = {
  key: 2,
  class: "stat-item warning"
}, Xy = { class: "stat-count" }, Qy = {
  key: 3,
  class: "stat-item error"
}, Zy = { class: "stat-count" }, e1 = {
  key: 0,
  class: "status-message warning"
}, t1 = { class: "status-text" }, s1 = {
  key: 1,
  class: "status-message info"
}, o1 = { class: "status-text" }, n1 = {
  key: 2,
  class: "status-message info"
}, a1 = { class: "status-text" }, l1 = {
  key: 3,
  class: "status-message warning"
}, i1 = { class: "status-text" }, r1 = {
  key: 4,
  class: "status-message success"
}, c1 = {
  key: 5,
  class: "category-mismatch-section"
}, u1 = { class: "mismatch-list" }, d1 = { class: "mismatch-path" }, f1 = { class: "mismatch-target" }, m1 = {
  key: 3,
  class: "step-content"
}, v1 = { class: "review-summary" }, p1 = { class: "review-stats" }, g1 = { class: "review-stat" }, h1 = { class: "stat-value" }, y1 = { class: "review-stat" }, w1 = { class: "stat-value" }, _1 = { class: "review-stat" }, k1 = { class: "stat-value" }, b1 = { class: "review-stat" }, $1 = { class: "stat-value" }, C1 = {
  key: 0,
  class: "review-section"
}, x1 = { class: "section-title" }, S1 = { class: "review-items" }, I1 = { class: "item-name" }, E1 = { class: "item-choice" }, T1 = {
  key: 0,
  class: "choice-badge install"
}, P1 = {
  key: 1,
  class: "choice-badge skip"
}, R1 = {
  key: 1,
  class: "review-section"
}, M1 = { class: "section-title" }, D1 = { class: "review-items" }, L1 = { class: "item-name" }, O1 = { class: "item-choice" }, A1 = {
  key: 0,
  class: "choice-badge install"
}, U1 = {
  key: 1,
  class: "choice-badge optional"
}, N1 = {
  key: 2,
  class: "choice-badge skip"
}, z1 = {
  key: 1,
  class: "choice-badge pending"
}, F1 = {
  key: 2,
  class: "review-section"
}, B1 = { class: "section-title" }, V1 = { class: "review-items download-details" }, W1 = { class: "download-info" }, G1 = { class: "item-name" }, j1 = { class: "download-meta" }, H1 = { class: "download-path" }, K1 = ["title"], q1 = {
  key: 3,
  class: "review-section"
}, Y1 = { class: "section-title" }, J1 = { class: "review-items" }, X1 = { class: "item-name" }, Q1 = { class: "item-choice" }, Z1 = {
  key: 0,
  class: "choice-badge install"
}, e0 = {
  key: 1,
  class: "choice-badge download"
}, t0 = {
  key: 2,
  class: "choice-badge optional"
}, s0 = {
  key: 3,
  class: "choice-badge skip"
}, o0 = {
  key: 4,
  class: "choice-badge skip"
}, n0 = {
  key: 1,
  class: "choice-badge download"
}, a0 = {
  key: 2,
  class: "choice-badge pending"
}, l0 = {
  key: 4,
  class: "no-choices"
}, i0 = /* @__PURE__ */ ke({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, n = s, { analyzeWorkflow: l, applyResolution: i, installNodes: r, queueModelDownloads: u, progress: d, resetProgress: m } = Sr(), { loadPendingDownloads: v } = bo(), { openFileLocation: g } = st(), w = k(null), p = k(!1), _ = k(!1), S = k(null), $ = k("analysis"), P = k([]), D = k(/* @__PURE__ */ new Map()), E = k(/* @__PURE__ */ new Map()), C = k(/* @__PURE__ */ new Set()), G = A(() => {
      const V = [
        { id: "analysis", label: "Analysis" }
      ];
      return (N.value || M.value) && V.push({ id: "nodes", label: "Nodes" }), I.value && V.push({ id: "models", label: "Models" }), V.push({ id: "review", label: "Review" }), $.value === "applying" && V.push({ id: "applying", label: "Applying" }), V;
    }), K = A(() => w.value ? w.value.stats.needs_user_input : !1), N = A(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), I = A(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), T = A(() => w.value ? w.value.stats.download_intents > 0 : !1), M = A(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), se = A(() => w.value ? w.value.nodes.resolved.length : 0), X = A(() => w.value ? w.value.models.resolved.filter((V) => V.has_category_mismatch) : []), j = A(() => X.value.length > 0), oe = A(() => N.value || M.value ? "nodes" : I.value ? "models" : "review"), Z = A(() => {
      if (!w.value) return [];
      const V = w.value.nodes.resolved.filter((ve) => !ve.is_installed), z = /* @__PURE__ */ new Set();
      return V.filter((ve) => z.has(ve.package.package_id) ? !1 : (z.add(ve.package.package_id), !0));
    }), U = A(() => {
      if (!w.value) return [];
      const V = w.value.nodes.resolved.filter((ve) => !ve.is_installed), z = /* @__PURE__ */ new Map();
      for (const ve of V) {
        const Ve = z.get(ve.package.package_id);
        Ve ? Ve.node_types_count++ : z.set(ve.package.package_id, {
          package_id: ve.package.package_id,
          title: ve.package.title,
          node_types_count: 1
        });
      }
      return Array.from(z.values());
    }), W = A(() => Z.value.filter((V) => !C.value.has(V.package.package_id))), O = A(() => w.value ? w.value.models.resolved.filter(
      (V) => V.match_type === "download_intent" || V.match_type === "property_download_intent"
    ).map((V) => ({
      filename: V.reference.widget_value,
      reference: V.reference,
      is_download_intent: !0,
      resolved_model: V.model,
      download_source: V.download_source,
      target_path: V.target_path
    })) : []), ie = A(() => {
      if (!w.value) return [];
      const V = w.value.nodes.unresolved.map((ve) => ({
        node_type: ve.reference.node_type,
        reason: ve.reason,
        is_unresolved: !0,
        options: void 0
      })), z = w.value.nodes.ambiguous.map((ve) => ({
        node_type: ve.reference.node_type,
        has_multiple_options: !0,
        options: ve.options.map((Ve) => ({
          package_id: Ve.package.package_id,
          title: Ve.package.title,
          match_confidence: Ve.match_confidence,
          match_type: Ve.match_type,
          is_installed: Ve.is_installed
        }))
      }));
      return [...V, ...z];
    }), ge = A(() => {
      if (!w.value) return [];
      const V = w.value.models.unresolved.map((ve) => ({
        filename: ve.reference.widget_value,
        reference: ve.reference,
        reason: ve.reason,
        is_unresolved: !0,
        options: void 0
      })), z = w.value.models.ambiguous.map((ve) => ({
        filename: ve.reference.widget_value,
        reference: ve.reference,
        has_multiple_options: !0,
        options: ve.options.map((Ve) => ({
          model: Ve.model,
          match_confidence: Ve.match_confidence,
          match_type: Ve.match_type,
          has_download_source: Ve.has_download_source
        }))
      }));
      return [...V, ...z];
    }), Me = A(() => {
      const V = ge.value, z = O.value.map((ve) => ({
        filename: ve.filename,
        reference: ve.reference,
        is_download_intent: !0,
        resolved_model: ve.resolved_model,
        download_source: ve.download_source,
        target_path: ve.target_path,
        options: void 0
      }));
      return [...V, ...z];
    }), Ae = A(() => O.value.filter((V) => {
      const z = E.value.get(V.filename);
      return z ? z.action === "download" : !0;
    }).map((V) => ({
      filename: V.filename,
      url: V.download_source,
      target_path: V.target_path
    })));
    function de(V, z = 50) {
      return V.length <= z ? V : V.slice(0, z - 3) + "...";
    }
    const re = A(() => {
      let V = W.value.length;
      for (const z of D.value.values())
        z.action === "install" && V++;
      for (const z of E.value.values())
        z.action === "select" && V++;
      return V;
    }), F = A(() => {
      let V = 0;
      for (const z of E.value.values())
        z.action === "download" && V++;
      for (const z of O.value)
        E.value.get(z.filename) || V++;
      return V;
    }), ee = A(() => {
      let V = 0;
      for (const z of D.value.values())
        z.action === "optional" && V++;
      for (const z of E.value.values())
        z.action === "optional" && V++;
      return V;
    }), he = A(() => {
      let V = C.value.size;
      for (const z of D.value.values())
        z.action === "skip" && V++;
      for (const z of E.value.values())
        z.action === "skip" && V++;
      for (const z of ie.value)
        D.value.has(z.node_type) || V++;
      for (const z of ge.value)
        E.value.has(z.filename) || V++;
      return V;
    }), pe = A(() => {
      const V = {};
      if (V.analysis = { resolved: 1, total: 1 }, N.value) {
        const z = ie.value.length, ve = ie.value.filter(
          (Ve) => D.value.has(Ve.node_type)
        ).length;
        V.nodes = { resolved: ve, total: z };
      }
      if (I.value) {
        const z = Me.value.length, ve = Me.value.filter(
          (Ve) => E.value.has(Ve.filename) || Ve.is_download_intent
        ).length;
        V.models = { resolved: ve, total: z };
      }
      if (V.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const z = d.totalFiles || 1, ve = d.completedFiles.length;
        V.applying = { resolved: ve, total: z };
      }
      return V;
    });
    function me(V) {
      $.value = V;
    }
    function De() {
      const V = G.value.findIndex((z) => z.id === $.value);
      V > 0 && ($.value = G.value[V - 1].id);
    }
    function Re() {
      const V = G.value.findIndex((z) => z.id === $.value);
      V < G.value.length - 1 && ($.value = G.value[V + 1].id);
    }
    async function L() {
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
      P.value.includes("analysis") || P.value.push("analysis"), N.value || M.value ? $.value = "nodes" : I.value ? $.value = "models" : $.value = "review";
    }
    function ae(V) {
      D.value.set(V, { action: "optional" });
    }
    function ue(V) {
      D.value.set(V, { action: "skip" });
    }
    function we(V, z) {
      var Ve;
      const ve = ie.value.find((Qe) => Qe.node_type === V);
      (Ve = ve == null ? void 0 : ve.options) != null && Ve[z] && D.value.set(V, {
        action: "install",
        package_id: ve.options[z].package_id
      });
    }
    function _e(V, z) {
      D.value.set(V, {
        action: "install",
        package_id: z
      });
    }
    function Ie(V) {
      D.value.delete(V);
    }
    function Ee(V) {
      C.value.has(V) ? C.value.delete(V) : C.value.add(V);
    }
    function ce(V) {
      E.value.set(V, { action: "optional" });
    }
    function ye(V) {
      E.value.set(V, { action: "skip" });
    }
    function Ne(V, z) {
      var Ve;
      const ve = ge.value.find((Qe) => Qe.filename === V);
      (Ve = ve == null ? void 0 : ve.options) != null && Ve[z] && E.value.set(V, {
        action: "select",
        selected_model: ve.options[z].model
      });
    }
    function Pe(V, z, ve) {
      E.value.set(V, {
        action: "download",
        url: z,
        target_path: ve
      });
    }
    function ne(V) {
      E.value.delete(V);
    }
    async function Y(V) {
      try {
        await g(V);
      } catch (z) {
        S.value = z instanceof Error ? z.message : "Failed to open file location";
      }
    }
    async function Oe() {
      var V;
      _.value = !0, S.value = null, m(), d.phase = "resolving", $.value = "applying";
      try {
        const z = await i(o.workflowName, D.value, E.value, C.value);
        z.models_to_download && z.models_to_download.length > 0 && u(o.workflowName, z.models_to_download);
        const ve = [
          ...z.nodes_to_install || [],
          ...W.value.map((Qe) => Qe.package.package_id)
        ];
        d.nodesToInstall = [...new Set(ve)], d.nodesToInstall.length > 0 && await r(o.workflowName), d.phase = "complete", await v();
        const Ve = d.installError || ((V = d.nodeInstallProgress) == null ? void 0 : V.completedNodes.some((Qe) => !Qe.success));
        !d.needsRestart && !Ve && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (z) {
        S.value = z instanceof Error ? z.message : "Failed to apply resolution", d.error = S.value, d.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function xe() {
      n("refresh"), n("restart"), n("close");
    }
    async function Ce() {
      var z;
      const V = ((z = d.nodeInstallProgress) == null ? void 0 : z.completedNodes.filter((ve) => !ve.success).map((ve) => ve.node_id)) || [];
      if (V.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: V.length
        }, d.nodesToInstall = V, d.nodesInstalled = [], d.installError = void 0;
        try {
          await r(o.workflowName), d.phase = "complete";
        } catch (ve) {
          d.error = ve instanceof Error ? ve.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return Xe(L), (V, z) => (a(), R(mt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: S.value || void 0,
      "fixed-height": !0,
      onClose: z[1] || (z[1] = (ve) => n("close"))
    }, {
      body: h(() => [
        p.value && !w.value ? (a(), c("div", xy, [...z[2] || (z[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (a(), c("div", Sy, [
          x(Dp, {
            steps: G.value,
            "current-step": $.value,
            "completed-steps": P.value,
            "step-stats": pe.value,
            onStepChange: me
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (a(), c("div", Iy, [
            t("div", Ey, [
              t("div", Ty, [
                z[3] || (z[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", Py, " Found " + f(w.value.stats.total_nodes) + " nodes and " + f(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", Ry, [
                t("div", My, [
                  z[12] || (z[12] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", Dy, [
                    se.value > 0 ? (a(), c("div", Ly, [
                      z[4] || (z[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Oy, f(se.value), 1),
                      z[5] || (z[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (a(), c("div", Ay, [
                      z[6] || (z[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Uy, f(w.value.stats.packages_needing_installation), 1),
                      z[7] || (z[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (a(), c("div", Ny, [
                      z[8] || (z[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", zy, f(w.value.nodes.ambiguous.length), 1),
                      z[9] || (z[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (a(), c("div", Fy, [
                      z[10] || (z[10] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", By, f(w.value.nodes.unresolved.length), 1),
                      z[11] || (z[11] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", Vy, [
                  z[23] || (z[23] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", Wy, [
                    t("div", Gy, [
                      z[13] || (z[13] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", jy, f(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      z[14] || (z[14] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (a(), c("div", Hy, [
                      z[15] || (z[15] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Ky, f(w.value.stats.download_intents), 1),
                      z[16] || (z[16] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    j.value ? (a(), c("div", qy, [
                      z[17] || (z[17] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", Yy, f(X.value.length), 1),
                      z[18] || (z[18] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (a(), c("div", Jy, [
                      z[19] || (z[19] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", Xy, f(w.value.models.ambiguous.length), 1),
                      z[20] || (z[20] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (a(), c("div", Qy, [
                      z[21] || (z[21] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", Zy, f(w.value.models.unresolved.length), 1),
                      z[22] || (z[22] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              K.value ? (a(), c("div", e1, [
                z[24] || (z[24] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", t1, f(ie.value.length + ge.value.length) + " items need your input", 1)
              ])) : M.value ? (a(), c("div", s1, [
                z[25] || (z[25] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", o1, f(w.value.stats.packages_needing_installation) + " package" + f(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(w.value.stats.nodes_needing_installation) + " node type" + f(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(T.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : T.value ? (a(), c("div", n1, [
                z[26] || (z[26] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", a1, f(w.value.stats.download_intents) + " model" + f(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : j.value ? (a(), c("div", l1, [
                z[27] || (z[27] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", i1, f(X.value.length) + " model" + f(X.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), c("div", r1, [...z[28] || (z[28] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              j.value ? (a(), c("div", c1, [
                z[31] || (z[31] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", u1, [
                  (a(!0), c(H, null, $e(X.value, (ve) => {
                    var Ve, Qe;
                    return a(), c("div", {
                      key: ve.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", d1, f(ve.actual_category) + "/" + f((Ve = ve.model) == null ? void 0 : Ve.filename), 1),
                      z[30] || (z[30] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", f1, f((Qe = ve.expected_categories) == null ? void 0 : Qe[0]) + "/", 1),
                      ve.file_path ? (a(), R(Le, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (vt) => Y(ve.file_path)
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
          $.value === "nodes" ? (a(), R(eh, {
            key: 1,
            nodes: ie.value,
            "node-choices": D.value,
            "auto-resolved-packages": U.value,
            "skipped-packages": C.value,
            onMarkOptional: ae,
            onSkip: ue,
            onOptionSelected: we,
            onManualEntry: _e,
            onClearChoice: Ie,
            onPackageSkip: Ee
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          $.value === "models" ? (a(), R(Kh, {
            key: 2,
            models: Me.value,
            "model-choices": E.value,
            onMarkOptional: ce,
            onSkip: ye,
            onOptionSelected: Ne,
            onDownloadUrl: Pe,
            onClearChoice: ne
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          $.value === "review" ? (a(), c("div", m1, [
            t("div", v1, [
              z[37] || (z[37] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", p1, [
                t("div", g1, [
                  t("span", h1, f(re.value), 1),
                  z[32] || (z[32] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", y1, [
                  t("span", w1, f(F.value), 1),
                  z[33] || (z[33] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", _1, [
                  t("span", k1, f(ee.value), 1),
                  z[34] || (z[34] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", b1, [
                  t("span", $1, f(he.value), 1),
                  z[35] || (z[35] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              U.value.length > 0 ? (a(), c("div", C1, [
                t("h4", x1, "Node Packages (" + f(U.value.length) + ")", 1),
                t("div", S1, [
                  (a(!0), c(H, null, $e(U.value, (ve) => (a(), c("div", {
                    key: ve.package_id,
                    class: "review-item"
                  }, [
                    t("code", I1, f(ve.package_id), 1),
                    t("div", E1, [
                      C.value.has(ve.package_id) ? (a(), c("span", P1, "Skipped")) : (a(), c("span", T1, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              ie.value.length > 0 ? (a(), c("div", R1, [
                t("h4", M1, "Node Choices (" + f(ie.value.length) + ")", 1),
                t("div", D1, [
                  (a(!0), c(H, null, $e(ie.value, (ve) => {
                    var Ve, Qe, vt, lt;
                    return a(), c("div", {
                      key: ve.node_type,
                      class: "review-item"
                    }, [
                      t("code", L1, f(ve.node_type), 1),
                      t("div", O1, [
                        D.value.has(ve.node_type) ? (a(), c(H, { key: 0 }, [
                          ((Ve = D.value.get(ve.node_type)) == null ? void 0 : Ve.action) === "install" ? (a(), c("span", A1, f((Qe = D.value.get(ve.node_type)) == null ? void 0 : Qe.package_id), 1)) : ((vt = D.value.get(ve.node_type)) == null ? void 0 : vt.action) === "optional" ? (a(), c("span", U1, " Optional ")) : ((lt = D.value.get(ve.node_type)) == null ? void 0 : lt.action) === "skip" ? (a(), c("span", N1, " Skip ")) : y("", !0)
                        ], 64)) : (a(), c("span", z1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Ae.value.length > 0 ? (a(), c("div", F1, [
                t("h4", B1, "Models to Download (" + f(Ae.value.length) + ")", 1),
                t("div", V1, [
                  (a(!0), c(H, null, $e(Ae.value, (ve) => (a(), c("div", {
                    key: ve.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", W1, [
                      t("code", G1, f(ve.filename), 1),
                      t("div", j1, [
                        t("span", H1, "→ " + f(ve.target_path), 1),
                        ve.url ? (a(), c("span", {
                          key: 0,
                          class: "download-url",
                          title: ve.url
                        }, f(de(ve.url)), 9, K1)) : y("", !0)
                      ])
                    ]),
                    z[36] || (z[36] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Me.value.length > 0 ? (a(), c("div", q1, [
                t("h4", Y1, "Models (" + f(Me.value.length) + ")", 1),
                t("div", J1, [
                  (a(!0), c(H, null, $e(Me.value, (ve) => {
                    var Ve, Qe, vt, lt, ut, Rt, Ft;
                    return a(), c("div", {
                      key: ve.filename,
                      class: "review-item"
                    }, [
                      t("code", X1, f(ve.filename), 1),
                      t("div", Q1, [
                        E.value.has(ve.filename) ? (a(), c(H, { key: 0 }, [
                          ((Ve = E.value.get(ve.filename)) == null ? void 0 : Ve.action) === "select" ? (a(), c("span", Z1, f((vt = (Qe = E.value.get(ve.filename)) == null ? void 0 : Qe.selected_model) == null ? void 0 : vt.filename), 1)) : ((lt = E.value.get(ve.filename)) == null ? void 0 : lt.action) === "download" ? (a(), c("span", e0, " Download ")) : ((ut = E.value.get(ve.filename)) == null ? void 0 : ut.action) === "optional" ? (a(), c("span", t0, " Optional ")) : ((Rt = E.value.get(ve.filename)) == null ? void 0 : Rt.action) === "skip" ? (a(), c("span", s0, " Skip ")) : ((Ft = E.value.get(ve.filename)) == null ? void 0 : Ft.action) === "cancel_download" ? (a(), c("span", o0, " Cancel Download ")) : y("", !0)
                        ], 64)) : ve.is_download_intent ? (a(), c("span", n0, " Pending Download ")) : (a(), c("span", a0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Z.value.length === 0 && ie.value.length === 0 && Me.value.length === 0 ? (a(), c("div", l0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          $.value === "applying" ? (a(), R(Cy, {
            key: 4,
            progress: We(d),
            onRestart: xe,
            onRetryFailed: Ce
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        $.value !== "analysis" && $.value !== "applying" ? (a(), R(Le, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: De
        }, {
          default: h(() => [...z[38] || (z[38] = [
            b(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        z[41] || (z[41] = t("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || We(d).phase === "complete" || We(d).phase === "error" ? (a(), R(Le, {
          key: 1,
          variant: "secondary",
          onClick: z[0] || (z[0] = (ve) => n("close"))
        }, {
          default: h(() => [
            b(f(We(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "analysis" ? (a(), R(Le, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: B
        }, {
          default: h(() => [
            b(f(oe.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        $.value === "nodes" ? (a(), R(Le, {
          key: 3,
          variant: "primary",
          onClick: Re
        }, {
          default: h(() => [
            b(f(I.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "models" ? (a(), R(Le, {
          key: 4,
          variant: "primary",
          onClick: Re
        }, {
          default: h(() => [...z[39] || (z[39] = [
            b(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        $.value === "review" ? (a(), R(Le, {
          key: 5,
          variant: "primary",
          disabled: _.value,
          loading: _.value,
          onClick: Oe
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
}), r0 = /* @__PURE__ */ be(i0, [["__scopeId", "data-v-40d8d5a8"]]), c0 = { class: "search-input-wrapper" }, u0 = ["value", "placeholder"], d0 = /* @__PURE__ */ ke({
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
    return Xe(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, m) => (a(), c("div", c0, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: r,
        onKeyup: es(u, ["escape"])
      }, null, 40, u0),
      e.clearable && e.modelValue ? (a(), c("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), f0 = /* @__PURE__ */ be(d0, [["__scopeId", "data-v-266f857a"]]), m0 = { class: "search-bar" }, v0 = /* @__PURE__ */ ke({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (a(), c("div", m0, [
      x(f0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => s.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), $o = /* @__PURE__ */ be(v0, [["__scopeId", "data-v-3d51bbfd"]]), p0 = { class: "section-group" }, g0 = {
  key: 0,
  class: "section-content"
}, h0 = /* @__PURE__ */ ke({
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
    return (r, u) => (a(), c("section", p0, [
      x(Ut, {
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
      !e.collapsible || l.value ? (a(), c("div", g0, [
        Ke(r.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), it = /* @__PURE__ */ be(h0, [["__scopeId", "data-v-c48e33ed"]]), y0 = { class: "item-header" }, w0 = {
  key: 0,
  class: "item-icon"
}, _0 = { class: "item-info" }, k0 = {
  key: 0,
  class: "item-title"
}, b0 = {
  key: 1,
  class: "item-subtitle"
}, $0 = {
  key: 0,
  class: "item-details"
}, C0 = {
  key: 1,
  class: "item-actions"
}, x0 = /* @__PURE__ */ ke({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, n = A(() => o.status ? `status-${o.status}` : "");
    return (l, i) => (a(), c("div", {
      class: Te(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: i[0] || (i[0] = (r) => e.clickable && l.$emit("click"))
    }, [
      t("div", y0, [
        l.$slots.icon ? (a(), c("span", w0, [
          Ke(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", _0, [
          l.$slots.title ? (a(), c("div", k0, [
            Ke(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), c("div", b0, [
            Ke(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), c("div", $0, [
        Ke(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), c("div", C0, [
        Ke(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Et = /* @__PURE__ */ be(x0, [["__scopeId", "data-v-cc435e0e"]]), S0 = { class: "loading-state" }, I0 = { class: "loading-message" }, E0 = /* @__PURE__ */ ke({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (a(), c("div", S0, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", I0, f(e.message), 1)
    ]));
  }
}), Ps = /* @__PURE__ */ be(E0, [["__scopeId", "data-v-ad8436c9"]]), T0 = { class: "error-state" }, P0 = { class: "error-message" }, R0 = /* @__PURE__ */ ke({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (a(), c("div", T0, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", P0, f(e.message), 1),
      e.retry ? (a(), R(fe, {
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
}), Rs = /* @__PURE__ */ be(R0, [["__scopeId", "data-v-5397be48"]]), M0 = /* @__PURE__ */ ke({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getWorkflows: l } = st(), i = k([]), r = k(!1), u = k(null), d = k(""), m = k(!0), v = k(!1), g = k(!1), w = k(!1), p = k(null), _ = A(
      () => i.value.filter((U) => U.status === "broken")
    ), S = A(
      () => i.value.filter((U) => U.status === "new")
    ), $ = A(
      () => i.value.filter((U) => U.status === "modified")
    ), P = A(
      () => i.value.filter((U) => U.status === "synced")
    ), D = A(() => {
      if (!d.value.trim()) return i.value;
      const U = d.value.toLowerCase();
      return i.value.filter((W) => W.name.toLowerCase().includes(U));
    }), E = A(
      () => _.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), C = A(
      () => S.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), G = A(
      () => $.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), K = A(
      () => P.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), N = A(
      () => v.value ? K.value : K.value.slice(0, 5)
    );
    async function I(U = !1) {
      r.value = !0, u.value = null;
      try {
        i.value = await l(U);
      } catch (W) {
        u.value = W instanceof Error ? W.message : "Failed to load workflows";
      } finally {
        r.value = !1;
      }
    }
    s({ loadWorkflows: I });
    function T(U) {
      p.value = U, g.value = !0;
    }
    function M(U) {
      p.value = U, w.value = !0;
    }
    function se() {
      n("refresh");
    }
    async function X() {
      w.value = !1, await I(!0);
    }
    async function j() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function oe(U) {
      const W = [];
      return U.missing_nodes > 0 && W.push(`${U.missing_nodes} missing node${U.missing_nodes > 1 ? "s" : ""}`), U.missing_models > 0 && W.push(`${U.missing_models} missing model${U.missing_models > 1 ? "s" : ""}`), U.models_with_category_mismatch && U.models_with_category_mismatch > 0 && W.push(`${U.models_with_category_mismatch} model${U.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), U.pending_downloads && U.pending_downloads > 0 && W.push(`${U.pending_downloads} pending download${U.pending_downloads > 1 ? "s" : ""}`), W.length > 0 ? W.join(", ") : "Has issues";
    }
    function Z(U) {
      const W = U.sync_state === "new" ? "New" : U.sync_state === "modified" ? "Modified" : U.sync_state === "synced" ? "Synced" : U.sync_state;
      return U.has_path_sync_issues && U.models_needing_path_sync && U.models_needing_path_sync > 0 ? `${U.models_needing_path_sync} model path${U.models_needing_path_sync > 1 ? "s" : ""} need${U.models_needing_path_sync === 1 ? "s" : ""} sync` : W || "Unknown";
    }
    return Xe(I), (U, W) => (a(), c(H, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          x($o, {
            modelValue: d.value,
            "onUpdate:modelValue": W[0] || (W[0] = (O) => d.value = O),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          r.value ? (a(), R(Ps, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (a(), R(Rs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (a(), c(H, { key: 2 }, [
            E.value.length ? (a(), R(it, {
              key: 0,
              title: "BROKEN",
              count: E.value.length
            }, {
              default: h(() => [
                (a(!0), c(H, null, $e(E.value, (O) => (a(), R(Et, {
                  key: O.name,
                  status: "broken"
                }, {
                  icon: h(() => [...W[7] || (W[7] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(O.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(oe(O)), 1)
                  ]),
                  actions: h(() => [
                    x(fe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ie) => M(O.name)
                    }, {
                      default: h(() => [...W[8] || (W[8] = [
                        b(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(fe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => T(O.name)
                    }, {
                      default: h(() => [...W[9] || (W[9] = [
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
            C.value.length ? (a(), R(it, {
              key: 1,
              title: "NEW",
              count: C.value.length
            }, {
              default: h(() => [
                (a(!0), c(H, null, $e(C.value, (O) => (a(), R(Et, {
                  key: O.name,
                  status: O.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    b(f(O.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    b(f(O.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(Z(O)), 1)
                  ]),
                  actions: h(() => [
                    x(fe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => T(O.name)
                    }, {
                      default: h(() => [...W[10] || (W[10] = [
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
            G.value.length ? (a(), R(it, {
              key: 2,
              title: "MODIFIED",
              count: G.value.length
            }, {
              default: h(() => [
                (a(!0), c(H, null, $e(G.value, (O) => (a(), R(Et, {
                  key: O.name,
                  status: O.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...W[11] || (W[11] = [
                    b("⚡", -1)
                  ])]),
                  title: h(() => [
                    b(f(O.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(Z(O)), 1)
                  ]),
                  actions: h(() => [
                    x(fe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => T(O.name)
                    }, {
                      default: h(() => [...W[12] || (W[12] = [
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
            K.value.length ? (a(), R(it, {
              key: 3,
              title: "SYNCED",
              count: K.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: W[2] || (W[2] = (O) => m.value = O)
            }, {
              default: h(() => [
                (a(!0), c(H, null, $e(N.value, (O) => (a(), R(Et, {
                  key: O.name,
                  status: O.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    b(f(O.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    b(f(O.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(Z(O)), 1)
                  ]),
                  actions: h(() => [
                    x(fe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => T(O.name)
                    }, {
                      default: h(() => [...W[13] || (W[13] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && K.value.length > 5 ? (a(), R(fe, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: W[1] || (W[1] = (O) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    b(" View all " + f(K.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            D.value.length ? y("", !0) : (a(), R(ns, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g.value && p.value ? (a(), R(kp, {
        key: 0,
        "workflow-name": p.value,
        onClose: W[3] || (W[3] = (O) => g.value = !1),
        onResolve: W[4] || (W[4] = (O) => M(p.value)),
        onRefresh: W[5] || (W[5] = (O) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (a(), R(r0, {
        key: 1,
        "workflow-name": p.value,
        onClose: X,
        onInstall: se,
        onRefresh: W[6] || (W[6] = (O) => n("refresh")),
        onRestart: j
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), D0 = /* @__PURE__ */ be(M0, [["__scopeId", "data-v-fa3f076e"]]), L0 = /* @__PURE__ */ ke({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (a(), c("div", {
      class: Te(["summary-bar", e.variant])
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), an = /* @__PURE__ */ be(L0, [["__scopeId", "data-v-ccb7816e"]]), O0 = {
  key: 0,
  class: "model-details"
}, A0 = { class: "detail-section" }, U0 = { class: "detail-row" }, N0 = { class: "detail-value mono" }, z0 = { class: "detail-row" }, F0 = { class: "detail-value mono" }, B0 = { class: "detail-row" }, V0 = { class: "detail-value mono" }, W0 = { class: "detail-row" }, G0 = { class: "detail-value" }, j0 = { class: "detail-row" }, H0 = { class: "detail-value" }, K0 = { class: "detail-row" }, q0 = { class: "detail-value" }, Y0 = { class: "detail-section" }, J0 = { class: "section-header" }, X0 = {
  key: 0,
  class: "locations-list"
}, Q0 = { class: "location-path mono" }, Z0 = {
  key: 0,
  class: "location-modified"
}, ew = ["onClick"], tw = {
  key: 1,
  class: "empty-state"
}, sw = { class: "detail-section" }, ow = { class: "section-header" }, nw = {
  key: 0,
  class: "sources-list"
}, aw = { class: "source-type" }, lw = ["href"], iw = ["disabled", "onClick"], rw = {
  key: 1,
  class: "empty-state"
}, cw = { class: "add-source-form" }, uw = ["disabled"], dw = {
  key: 2,
  class: "source-error"
}, fw = {
  key: 3,
  class: "source-success"
}, mw = /* @__PURE__ */ ke({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: i, openFileLocation: r } = st(), u = k(null), d = k(!0), m = k(null), v = k(""), g = k(!1), w = k(null), p = k(null), _ = k(null), S = k(null);
    let $ = null;
    function P(I, T = "success", M = 2e3) {
      $ && clearTimeout($), S.value = { message: I, type: T }, $ = setTimeout(() => {
        S.value = null;
      }, M);
    }
    function D(I) {
      if (!I) return "Unknown";
      const T = 1024 * 1024 * 1024, M = 1024 * 1024;
      return I >= T ? `${(I / T).toFixed(1)} GB` : I >= M ? `${(I / M).toFixed(0)} MB` : `${(I / 1024).toFixed(0)} KB`;
    }
    function E(I) {
      navigator.clipboard.writeText(I), P("Copied to clipboard!");
    }
    async function C(I) {
      try {
        await r(I), P("Opening file location...");
      } catch {
        P("Failed to open location", "error");
      }
    }
    async function G() {
      if (!(!v.value.trim() || !u.value)) {
        g.value = !0, p.value = null, _.value = null;
        try {
          await l(u.value.hash, v.value.trim()), _.value = "Source added successfully!", v.value = "", await N();
        } catch (I) {
          p.value = I instanceof Error ? I.message : "Failed to add source";
        } finally {
          g.value = !1;
        }
      }
    }
    async function K(I) {
      if (u.value) {
        w.value = I, p.value = null, _.value = null;
        try {
          await i(u.value.hash, I), P("Source removed"), await N();
        } catch (T) {
          p.value = T instanceof Error ? T.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function N() {
      d.value = !0, m.value = null;
      try {
        u.value = await n(o.identifier);
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return Xe(N), (I, T) => {
      var M;
      return a(), c(H, null, [
        x(mt, {
          title: `Model Details: ${((M = u.value) == null ? void 0 : M.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          onClose: T[5] || (T[5] = (se) => I.$emit("close"))
        }, {
          body: h(() => {
            var se, X, j, oe;
            return [
              u.value ? (a(), c("div", O0, [
                t("section", A0, [
                  t("div", U0, [
                    T[6] || (T[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", N0, f(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (a(), c("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[0] || (T[0] = (Z) => E(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", z0, [
                    T[7] || (T[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", F0, f(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (a(), c("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[1] || (T[1] = (Z) => E(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", B0, [
                    T[8] || (T[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", V0, f(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (a(), c("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[2] || (T[2] = (Z) => E(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", W0, [
                    T[9] || (T[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", G0, f(D(u.value.size)), 1)
                  ]),
                  t("div", j0, [
                    T[10] || (T[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", H0, f(u.value.category), 1)
                  ]),
                  t("div", K0, [
                    T[11] || (T[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", q0, f(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", Y0, [
                  t("h4", J0, "Locations (" + f(((se = u.value.locations) == null ? void 0 : se.length) || 0) + ")", 1),
                  (X = u.value.locations) != null && X.length ? (a(), c("div", X0, [
                    (a(!0), c(H, null, $e(u.value.locations, (Z, U) => (a(), c("div", {
                      key: U,
                      class: "location-item"
                    }, [
                      t("span", Q0, f(Z.path), 1),
                      Z.modified ? (a(), c("span", Z0, "Modified: " + f(Z.modified), 1)) : y("", !0),
                      Z.path ? (a(), c("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (W) => C(Z.path)
                      }, " Open File Location ", 8, ew)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), c("div", tw, "No locations found"))
                ]),
                t("section", sw, [
                  t("h4", ow, "Download Sources (" + f(((j = u.value.sources) == null ? void 0 : j.length) || 0) + ")", 1),
                  (oe = u.value.sources) != null && oe.length ? (a(), c("div", nw, [
                    (a(!0), c(H, null, $e(u.value.sources, (Z, U) => (a(), c("div", {
                      key: U,
                      class: "source-item"
                    }, [
                      t("span", aw, f(Z.type) + ":", 1),
                      t("a", {
                        href: Z.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(Z.url), 9, lw),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === Z.url,
                        onClick: (W) => K(Z.url)
                      }, f(w.value === Z.url ? "..." : "×"), 9, iw)
                    ]))), 128))
                  ])) : (a(), c("div", rw, " No download sources configured ")),
                  t("div", cw, [
                    qe(t("input", {
                      "onUpdate:modelValue": T[3] || (T[3] = (Z) => v.value = Z),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [zt, v.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || g.value,
                      onClick: G
                    }, f(g.value ? "Adding..." : "Add Source"), 9, uw)
                  ]),
                  p.value ? (a(), c("p", dw, f(p.value), 1)) : y("", !0),
                  _.value ? (a(), c("p", fw, f(_.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            t("button", {
              class: "btn-secondary",
              onClick: T[4] || (T[4] = (se) => I.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (a(), R(wt, { to: "body" }, [
          S.value ? (a(), c("div", {
            key: 0,
            class: Te(["toast", S.value.type])
          }, f(S.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), ol = /* @__PURE__ */ be(mw, [["__scopeId", "data-v-f15cbb56"]]), vw = /* @__PURE__ */ ke({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: n, getStatus: l } = st(), i = k([]), r = k([]), u = k("production"), d = k(!1), m = k(null), v = k(""), g = k(!1), w = k(null);
    function p() {
      g.value = !1, o("navigate", "model-index");
    }
    const _ = A(
      () => i.value.reduce((N, I) => N + (I.size || 0), 0)
    ), S = A(() => {
      if (!v.value.trim()) return i.value;
      const N = v.value.toLowerCase();
      return i.value.filter((I) => I.filename.toLowerCase().includes(N));
    }), $ = A(() => {
      if (!v.value.trim()) return r.value;
      const N = v.value.toLowerCase();
      return r.value.filter((I) => I.filename.toLowerCase().includes(N));
    }), P = A(() => {
      const N = {};
      for (const T of S.value) {
        const M = T.type || "other";
        N[M] || (N[M] = []), N[M].push(T);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(N).sort(([T], [M]) => {
        const se = I.indexOf(T), X = I.indexOf(M);
        return se >= 0 && X >= 0 ? se - X : se >= 0 ? -1 : X >= 0 ? 1 : T.localeCompare(M);
      }).map(([T, M]) => ({ type: T, models: M }));
    });
    function D(N) {
      if (!N) return "Unknown";
      const I = N / (1024 * 1024);
      return I >= 1024 ? `${(I / 1024).toFixed(1)} GB` : `${I.toFixed(0)} MB`;
    }
    function E(N) {
      w.value = N.hash || N.filename;
    }
    function C(N) {
      o("navigate", "model-index");
    }
    function G(N) {
      alert(`Download functionality not yet implemented for ${N}`);
    }
    async function K() {
      d.value = !0, m.value = null;
      try {
        const N = await n();
        i.value = N, r.value = [];
        const I = await l();
        u.value = I.environment || "production";
      } catch (N) {
        m.value = N instanceof Error ? N.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return Xe(K), (N, I) => (a(), c(H, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (T) => g.value = !0)
          })
        ]),
        search: h(() => [
          x($o, {
            modelValue: v.value,
            "onUpdate:modelValue": I[1] || (I[1] = (T) => v.value = T),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (a(), R(Ps, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (a(), R(Rs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: K
          }, null, 8, ["message"])) : (a(), c(H, { key: 2 }, [
            i.value.length ? (a(), R(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(i.value.length) + " models • " + f(D(_.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), c(H, null, $e(P.value, (T) => (a(), R(it, {
              key: T.type,
              title: T.type.toUpperCase(),
              count: T.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), c(H, null, $e(T.models, (M) => (a(), R(Et, {
                  key: M.hash || M.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...I[4] || (I[4] = [
                    b("📦", -1)
                  ])]),
                  title: h(() => [
                    b(f(M.filename), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(D(M.size)), 1)
                  ]),
                  details: h(() => [
                    x(dt, {
                      label: "Used by:",
                      value: (M.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    x(dt, {
                      label: "Path:",
                      value: M.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(fe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (se) => E(M)
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
                (a(!0), c(H, null, $e($.value, (T) => (a(), R(Et, {
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
                    var M;
                    return [
                      x(dt, {
                        label: "Required by:",
                        value: ((M = T.workflow_names) == null ? void 0 : M.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    x(fe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (M) => G(T.filename)
                    }, {
                      default: h(() => [...I[8] || (I[8] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(fe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (M) => C(T.filename)
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
            !S.value.length && !$.value.length ? (a(), R(ns, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      x(as, {
        show: g.value,
        title: "About Environment Models",
        onClose: I[2] || (I[2] = (T) => g.value = !1)
      }, {
        content: h(() => [
          t("p", null, [
            I[10] || (I[10] = b(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + f(u.value) + '"', 1),
            I[11] || (I[11] = b(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          x(fe, {
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
      w.value ? (a(), R(ol, {
        key: 0,
        identifier: w.value,
        onClose: I[3] || (I[3] = (T) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), pw = /* @__PURE__ */ be(vw, [["__scopeId", "data-v-cb4f12b3"]]);
function gw(e) {
  const s = e.toLowerCase();
  return s === "huggingface.co" || s.endsWith(".huggingface.co") || s === "hf.co";
}
function Ma(e) {
  const s = e.trim();
  if (!s) return { kind: "unknown" };
  let o;
  try {
    o = new URL(s);
  } catch {
    return { kind: "unknown" };
  }
  if (!gw(o.hostname)) return { kind: "unknown" };
  const n = o.pathname.replace(/^\/+/, "").split("/").filter(Boolean);
  if (n[0] === "datasets" || n[0] === "spaces") return { kind: "unknown" };
  if (n.length < 2) return { kind: "unknown" };
  const l = `${n[0]}/${n[1]}`, i = n.slice(2);
  if (i.length === 0)
    return { kind: "repo", repoId: l, revision: "main" };
  const r = i[0];
  if (r === "tree") {
    const u = i[1] || "main";
    return { kind: "repo", repoId: l, revision: u };
  }
  if (r === "resolve") {
    const u = i[1] || "main", d = i.slice(2).join("/");
    return d ? { kind: "file", repoId: l, revision: u, path: d } : { kind: "repo", repoId: l, revision: u };
  }
  if (r === "blob") {
    const u = i[1] || "main", d = i.slice(2).join("/");
    return d ? { kind: "file", repoId: l, revision: u, path: d } : { kind: "repo", repoId: l, revision: u };
  }
  return { kind: "repo", repoId: l, revision: "main" };
}
function hw(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function yw(e, s, o) {
  const [n, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(n)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(s)}/${hw(o)}`;
}
const ww = { class: "hf-header" }, _w = { class: "hf-title" }, kw = {
  key: 0,
  class: "revision-pill"
}, bw = { class: "hf-modal-content" }, $w = { class: "toolbar" }, Cw = { class: "toolbar-actions" }, xw = { class: "file-list-container" }, Sw = {
  key: 0,
  class: "empty-state"
}, Iw = {
  key: 1,
  class: "file-list"
}, Ew = ["onClick"], Tw = ["checked", "onChange"], Pw = { class: "file-path" }, Rw = { class: "file-size" }, Mw = { class: "destination-section" }, Dw = { class: "destination-row" }, Lw = {
  key: 0,
  class: "path-separator"
}, Ow = { class: "summary-bar" }, Aw = { class: "summary-count" }, Uw = { class: "summary-size" }, Nw = /* @__PURE__ */ ke({
  __name: "HuggingFaceRepoModal",
  props: {
    show: { type: Boolean },
    url: {}
  },
  emits: ["close", "queue"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: i } = st(), r = k([]), u = k(/* @__PURE__ */ new Set()), d = k(!1), m = k(null), v = k(""), g = k("main"), w = k(""), p = k(!0), _ = k(""), S = k(""), $ = k(""), P = k([]), D = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, E = A(() => v.value || "Browse HuggingFace Repository"), C = A(() => {
      let W = r.value;
      if (p.value && (W = W.filter((O) => O.is_model_file)), w.value.trim()) {
        const O = w.value.toLowerCase();
        W = W.filter((ie) => ie.path.toLowerCase().includes(O));
      }
      return W;
    }), G = A(() => {
      const W = P.value.map((O) => ({
        label: O,
        value: O
      }));
      return W.push({ label: "Custom path...", value: "__custom__" }), W;
    }), K = A(() => _.value === "__custom__" ? $.value.trim().length > 0 : _.value.length > 0), N = A(() => {
      let W = 0;
      for (const O of u.value) {
        const ie = r.value.find((ge) => ge.path === O);
        ie && (W += ie.size);
      }
      return W;
    });
    function I(W) {
      if (W === 0) return "0 B";
      const O = 1024 * 1024 * 1024, ie = 1024 * 1024, ge = 1024;
      return W >= O ? `${(W / O).toFixed(2)} GB` : W >= ie ? `${(W / ie).toFixed(1)} MB` : W >= ge ? `${(W / ge).toFixed(0)} KB` : `${W} B`;
    }
    function T(W) {
      const O = W.match(D);
      return O ? `${O[1]}${O[4]}` : null;
    }
    function M(W) {
      const O = new Set(u.value), ie = O.has(W.path), ge = W.shard_group || T(W.path);
      if (ge) {
        const Me = r.value.filter((Ae) => (Ae.shard_group || T(Ae.path)) === ge);
        ie ? Me.forEach((Ae) => O.delete(Ae.path)) : Me.forEach((Ae) => O.add(Ae.path));
      } else
        ie ? O.delete(W.path) : O.add(W.path);
      u.value = O;
    }
    function se() {
      const W = new Set(u.value);
      for (const O of r.value)
        O.is_model_file && W.add(O.path);
      u.value = W;
    }
    function X() {
      u.value = /* @__PURE__ */ new Set();
    }
    function j() {
      return _.value === "__custom__" ? $.value.trim() : S.value.trim() ? `${_.value}/${S.value.trim()}` : _.value;
    }
    function oe() {
      if (u.value.size === 0 || !K.value) return;
      const W = j(), O = [];
      for (const ie of u.value) {
        const ge = r.value.find((Me) => Me.path === ie);
        ge && O.push({
          url: yw(v.value, g.value, ge.path),
          destination: W,
          filename: ge.path.split("/").pop() || ge.path
        });
      }
      n("queue", O);
    }
    async function Z() {
      if (o.url) {
        d.value = !0, m.value = null;
        try {
          const W = Ma(o.url);
          if (W.kind === "unknown") {
            m.value = "Invalid HuggingFace URL", d.value = !1;
            return;
          }
          v.value = W.repoId || "", g.value = W.revision || "main";
          const O = await l(o.url);
          r.value = O.files, v.value = O.repo_id, g.value = O.revision, u.value = /* @__PURE__ */ new Set();
        } catch (W) {
          m.value = W instanceof Error ? W.message : "Failed to load repository";
        } finally {
          d.value = !1;
        }
      }
    }
    async function U() {
      try {
        const W = await i();
        P.value = W.directories, W.directories.length > 0 && !_.value && (_.value = W.directories[0]);
      } catch {
        P.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], _.value || (_.value = "checkpoints");
      }
    }
    return gt(() => o.url, () => {
      o.show && o.url && Z();
    }), gt(() => o.show, (W) => {
      W ? (Z(), U()) : (r.value = [], u.value = /* @__PURE__ */ new Set(), w.value = "", S.value = "", $.value = "");
    }), Xe(() => {
      o.show && (Z(), U());
    }), (W, O) => e.show ? (a(), R(mt, {
      key: 0,
      title: E.value,
      size: "lg",
      loading: d.value,
      error: m.value,
      "fixed-height": "",
      onClose: O[7] || (O[7] = (ie) => W.$emit("close"))
    }, {
      header: h(() => [
        t("div", ww, [
          t("span", _w, f(v.value || "HuggingFace Repo"), 1),
          g.value ? (a(), c("span", kw, f(g.value), 1)) : y("", !0)
        ])
      ]),
      body: h(() => [
        t("div", bw, [
          t("div", $w, [
            x(Lt, {
              modelValue: w.value,
              "onUpdate:modelValue": O[0] || (O[0] = (ie) => w.value = ie),
              placeholder: "Filter files...",
              type: "search",
              class: "search-input"
            }, null, 8, ["modelValue"]),
            t("div", Cw, [
              t("button", {
                class: Te(["toggle-btn", { active: p.value }]),
                onClick: O[1] || (O[1] = (ie) => p.value = !p.value)
              }, f(p.value ? "Models Only" : "All Files"), 3),
              t("button", {
                class: "action-btn",
                onClick: se
              }, "Auto-Select Models"),
              t("button", {
                class: "action-btn",
                onClick: X
              }, "Clear")
            ])
          ]),
          t("div", xw, [
            C.value.length === 0 ? (a(), c("div", Sw, f(r.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (a(), c("div", Iw, [
              (a(!0), c(H, null, $e(C.value, (ie) => (a(), c("div", {
                key: ie.path,
                class: Te(["file-item", { selected: u.value.has(ie.path) }]),
                onClick: (ge) => M(ie)
              }, [
                t("input", {
                  type: "checkbox",
                  checked: u.value.has(ie.path),
                  class: "file-checkbox",
                  onClick: O[2] || (O[2] = at(() => {
                  }, ["stop"])),
                  onChange: (ge) => M(ie)
                }, null, 40, Tw),
                t("span", Pw, f(ie.path), 1),
                t("span", Rw, f(I(ie.size)), 1)
              ], 10, Ew))), 128))
            ]))
          ]),
          t("div", Mw, [
            O[8] || (O[8] = t("h4", { class: "section-label" }, "Download Destination", -1)),
            t("div", Dw, [
              x(Cr, {
                modelValue: _.value,
                "onUpdate:modelValue": O[3] || (O[3] = (ie) => _.value = ie),
                options: G.value,
                placeholder: "Select directory...",
                class: "dest-select"
              }, null, 8, ["modelValue", "options"]),
              _.value !== "__custom__" ? (a(), c("span", Lw, "/")) : y("", !0),
              _.value !== "__custom__" ? (a(), R(Lt, {
                key: 1,
                modelValue: S.value,
                "onUpdate:modelValue": O[4] || (O[4] = (ie) => S.value = ie),
                placeholder: "subfolder (optional)",
                class: "dest-subfolder"
              }, null, 8, ["modelValue"])) : y("", !0)
            ]),
            _.value === "__custom__" ? (a(), R(Lt, {
              key: 0,
              modelValue: $.value,
              "onUpdate:modelValue": O[5] || (O[5] = (ie) => $.value = ie),
              placeholder: "Enter full path relative to models directory...",
              class: "dest-custom",
              "full-width": ""
            }, null, 8, ["modelValue"])) : y("", !0)
          ]),
          t("div", Ow, [
            t("span", Aw, f(u.value.size) + " file(s) selected", 1),
            t("span", Uw, f(I(N.value)), 1)
          ])
        ])
      ]),
      footer: h(() => [
        x(Le, {
          variant: "secondary",
          onClick: O[6] || (O[6] = (ie) => W.$emit("close"))
        }, {
          default: h(() => [...O[9] || (O[9] = [
            b("Cancel", -1)
          ])]),
          _: 1
        }),
        x(Le, {
          variant: "primary",
          disabled: u.value.size === 0 || !K.value,
          onClick: oe
        }, {
          default: h(() => [...O[10] || (O[10] = [
            b(" Queue Download ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }, 8, ["title", "loading", "error"])) : y("", !0);
  }
}), zw = /* @__PURE__ */ be(Nw, [["__scopeId", "data-v-06804140"]]), Fw = {
  key: 0,
  class: "indexing-progress"
}, Bw = { class: "progress-info" }, Vw = { class: "progress-label" }, Ww = { class: "progress-count" }, Gw = { class: "progress-bar" }, jw = { class: "modal-content" }, Hw = { class: "modal-header" }, Kw = { class: "modal-body" }, qw = { class: "input-group" }, Yw = { class: "current-path" }, Jw = { class: "input-group" }, Xw = { class: "modal-footer" }, Qw = { class: "modal-content" }, Zw = { class: "modal-header" }, e_ = { class: "modal-body" }, t_ = { class: "input-group" }, s_ = {
  key: 0,
  class: "modal-note"
}, o_ = { class: "input-group" }, n_ = {
  key: 0,
  class: "modal-error"
}, a_ = { class: "modal-footer" }, l_ = /* @__PURE__ */ ke({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: i
    } = st(), { addToQueue: r } = bo(), u = s, d = k([]), m = k(!1), v = k(!1), g = k(null), w = k(""), p = k(!1), _ = k(null), S = k(!1), $ = k(null), P = k(""), D = k(!1), E = k(!1), C = k(""), G = k(""), K = k(!1), N = k(""), I = A(() => Ma(C.value)), T = A(() => I.value.kind === "repo" && !!I.value.repoId), M = A(() => {
      const re = G.value.trim();
      if (!re) return null;
      const F = re.replace(/\\/g, "/").split("/").pop() || "";
      return F.includes(".") && !F.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), se = k(null), X = A(
      () => d.value.reduce((re, F) => re + (F.size || 0), 0)
    ), j = A(() => {
      if (!w.value.trim()) return d.value;
      const re = w.value.toLowerCase();
      return d.value.filter((F) => {
        const ee = F, he = F.sha256 || ee.sha256_hash || "";
        return F.filename.toLowerCase().includes(re) || he.toLowerCase().includes(re);
      });
    }), oe = A(() => {
      const re = {};
      for (const ee of j.value) {
        const he = ee.type || "other";
        re[he] || (re[he] = []), re[he].push(ee);
      }
      const F = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(re).sort(([ee], [he]) => {
        const pe = F.indexOf(ee), me = F.indexOf(he);
        return pe >= 0 && me >= 0 ? pe - me : pe >= 0 ? -1 : me >= 0 ? 1 : ee.localeCompare(he);
      }).map(([ee, he]) => ({ type: ee, models: he }));
    });
    function Z(re) {
      if (!re) return "Unknown";
      const F = 1024 * 1024 * 1024, ee = 1024 * 1024;
      return re >= F ? `${(re / F).toFixed(1)} GB` : re >= ee ? `${(re / ee).toFixed(0)} MB` : `${(re / 1024).toFixed(0)} KB`;
    }
    function U(re) {
      _.value = re.hash || re.filename;
    }
    async function W() {
      v.value = !0, g.value = null;
      try {
        const re = await n();
        await Ae(), re.changes > 0 && console.log(`Scan complete: ${re.changes} changes detected`);
      } catch (re) {
        g.value = re instanceof Error ? re.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function O() {
      if (P.value.trim()) {
        D.value = !0, g.value = null;
        try {
          const re = await i(P.value.trim());
          $.value = re.path, S.value = !1, P.value = "", await Ae(), console.log(`Directory changed: ${re.models_indexed} models indexed`), u("refresh");
        } catch (re) {
          g.value = re instanceof Error ? re.message : "Failed to change directory";
        } finally {
          D.value = !1;
        }
      }
    }
    function ie() {
      if (!C.value.trim()) return;
      if (Ma(C.value.trim()).kind === "repo") {
        ge();
        return;
      }
      if (!G.value.trim()) return;
      const F = G.value.split("/").pop() || "model.safetensors";
      r([{
        workflow: "__manual__",
        filename: F,
        url: C.value.trim(),
        targetPath: G.value.trim()
      }]), C.value = "", G.value = "", E.value = !1;
    }
    function ge() {
      N.value = C.value.trim(), K.value = !0, E.value = !1;
    }
    function Me(re) {
      r(re.map((F) => ({
        workflow: "__manual__",
        filename: F.filename,
        url: F.url,
        targetPath: F.destination ? `${F.destination}/${F.filename}` : F.filename
      }))), K.value = !1, N.value = "", C.value = "", G.value = "";
    }
    async function Ae() {
      m.value = !0, g.value = null;
      try {
        d.value = await o();
      } catch (re) {
        g.value = re instanceof Error ? re.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function de() {
      try {
        const re = await l();
        $.value = re.path;
      } catch {
      }
    }
    return Xe(() => {
      Ae(), de();
    }), (re, F) => (a(), c(H, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: F[2] || (F[2] = (ee) => p.value = !0)
          }, {
            actions: h(() => [
              x(fe, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: W
              }, {
                default: h(() => [
                  b(f(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              x(fe, {
                variant: "primary",
                size: "sm",
                onClick: F[0] || (F[0] = (ee) => S.value = !0)
              }, {
                default: h(() => [...F[16] || (F[16] = [
                  b(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              x(fe, {
                variant: "primary",
                size: "sm",
                onClick: F[1] || (F[1] = (ee) => E.value = !0)
              }, {
                default: h(() => [...F[17] || (F[17] = [
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
          se.value ? (a(), c("div", Fw, [
            t("div", Bw, [
              t("span", Vw, f(se.value.message), 1),
              t("span", Ww, f(se.value.current) + "/" + f(se.value.total), 1)
            ]),
            t("div", Gw, [
              t("div", {
                class: "progress-fill",
                style: Kt({ width: `${se.value.current / se.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          x($o, {
            modelValue: w.value,
            "onUpdate:modelValue": F[3] || (F[3] = (ee) => w.value = ee),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          m.value || se.value ? (a(), R(Ps, {
            key: 0,
            message: se.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : g.value ? (a(), R(Rs, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: Ae
          }, null, 8, ["message"])) : (a(), c(H, { key: 2 }, [
            d.value.length ? (a(), R(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(d.value.length) + " models • " + f(Z(X.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), c(H, null, $e(oe.value, (ee) => (a(), R(it, {
              key: ee.type,
              title: ee.type.toUpperCase(),
              count: ee.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (a(!0), c(H, null, $e(ee.models, (he) => (a(), R(Et, {
                  key: he.sha256 || he.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...F[18] || (F[18] = [
                    b("📦", -1)
                  ])]),
                  title: h(() => [
                    b(f(he.filename), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(Z(he.size)), 1)
                  ]),
                  details: h(() => [
                    x(dt, {
                      label: "Hash:",
                      value: he.hash ? he.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(fe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (pe) => U(he)
                    }, {
                      default: h(() => [...F[19] || (F[19] = [
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
            j.value.length ? y("", !0) : (a(), R(ns, {
              key: 1,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      x(as, {
        show: p.value,
        title: "About Workspace Model Index",
        onClose: F[4] || (F[4] = (ee) => p.value = !1)
      }, {
        content: h(() => [...F[20] || (F[20] = [
          t("p", null, [
            b(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            b(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      _.value ? (a(), R(ol, {
        key: 0,
        identifier: _.value,
        onClose: F[5] || (F[5] = (ee) => _.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (a(), R(wt, { to: "body" }, [
        S.value ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: F[9] || (F[9] = at((ee) => S.value = !1, ["self"]))
        }, [
          t("div", jw, [
            t("div", Hw, [
              F[21] || (F[21] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: F[6] || (F[6] = (ee) => S.value = !1)
              }, "✕")
            ]),
            t("div", Kw, [
              t("div", qw, [
                F[22] || (F[22] = t("label", null, "Current Directory", -1)),
                t("code", Yw, f($.value || "Not set"), 1)
              ]),
              t("div", Jw, [
                F[23] || (F[23] = t("label", null, "New Directory Path", -1)),
                x(Lt, {
                  modelValue: P.value,
                  "onUpdate:modelValue": F[7] || (F[7] = (ee) => P.value = ee),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              F[24] || (F[24] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", Xw, [
              x(Le, {
                variant: "secondary",
                onClick: F[8] || (F[8] = (ee) => S.value = !1)
              }, {
                default: h(() => [...F[25] || (F[25] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              x(Le, {
                variant: "primary",
                disabled: !P.value.trim() || D.value,
                loading: D.value,
                onClick: O
              }, {
                default: h(() => [
                  b(f(D.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      (a(), R(wt, { to: "body" }, [
        E.value ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: F[14] || (F[14] = at((ee) => E.value = !1, ["self"]))
        }, [
          t("div", Qw, [
            t("div", Zw, [
              F[26] || (F[26] = t("h3", null, "Download New Model", -1)),
              t("button", {
                class: "modal-close",
                onClick: F[10] || (F[10] = (ee) => E.value = !1)
              }, "✕")
            ]),
            t("div", e_, [
              t("div", t_, [
                F[27] || (F[27] = t("label", null, "Download URL", -1)),
                x(Lt, {
                  modelValue: C.value,
                  "onUpdate:modelValue": F[11] || (F[11] = (ee) => C.value = ee),
                  placeholder: "https://huggingface.co/user/repo or https://.../resolve/..."
                }, null, 8, ["modelValue"])
              ]),
              T.value ? (a(), c("p", s_, [...F[28] || (F[28] = [
                b(" HuggingFace repository detected. Click ", -1),
                t("strong", null, "Browse Repo Files", -1),
                b(" to pick files. ", -1)
              ])])) : (a(), c(H, { key: 1 }, [
                t("div", o_, [
                  F[29] || (F[29] = t("label", null, "Target Path (relative to models directory)", -1)),
                  x(Lt, {
                    modelValue: G.value,
                    "onUpdate:modelValue": F[12] || (F[12] = (ee) => G.value = ee),
                    placeholder: "e.g. checkpoints/model.safetensors"
                  }, null, 8, ["modelValue"]),
                  M.value ? (a(), c("p", n_, f(M.value), 1)) : y("", !0)
                ]),
                F[30] || (F[30] = t("p", { class: "modal-note" }, "Model will be queued for background download.", -1))
              ], 64))
            ]),
            t("div", a_, [
              x(Le, {
                variant: "secondary",
                onClick: F[13] || (F[13] = (ee) => E.value = !1)
              }, {
                default: h(() => [...F[31] || (F[31] = [
                  b("Cancel", -1)
                ])]),
                _: 1
              }),
              T.value ? (a(), R(Le, {
                key: 0,
                variant: "primary",
                disabled: !C.value.trim(),
                onClick: ge
              }, {
                default: h(() => [...F[32] || (F[32] = [
                  b(" Browse Repo Files ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])) : (a(), R(Le, {
                key: 1,
                variant: "primary",
                disabled: !C.value.trim() || !G.value.trim() || !!M.value,
                onClick: ie
              }, {
                default: h(() => [...F[33] || (F[33] = [
                  b(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]))
            ])
          ])
        ])) : y("", !0)
      ])),
      x(zw, {
        show: K.value,
        url: N.value,
        onClose: F[15] || (F[15] = (ee) => K.value = !1),
        onQueue: Me
      }, null, 8, ["show", "url"])
    ], 64));
  }
}), i_ = /* @__PURE__ */ be(l_, [["__scopeId", "data-v-7d9c63a7"]]), r_ = { class: "node-details" }, c_ = { class: "status-row" }, u_ = {
  key: 0,
  class: "detail-row"
}, d_ = { class: "value" }, f_ = { class: "detail-row" }, m_ = { class: "value" }, v_ = {
  key: 1,
  class: "detail-row"
}, p_ = { class: "value mono" }, g_ = {
  key: 2,
  class: "detail-row"
}, h_ = ["href"], y_ = {
  key: 3,
  class: "detail-row"
}, w_ = { class: "value mono small" }, __ = { class: "detail-row" }, k_ = {
  key: 0,
  class: "value"
}, b_ = {
  key: 1,
  class: "workflow-list"
}, $_ = /* @__PURE__ */ ke({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = A(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), i = A(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), r = A(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, d) => (a(), R(mt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (m) => n("close"))
    }, {
      body: h(() => [
        t("div", r_, [
          t("div", c_, [
            d[2] || (d[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Te(["status-badge", l.value])
            }, f(i.value), 3)
          ]),
          e.node.version ? (a(), c("div", u_, [
            d[3] || (d[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", d_, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          t("div", f_, [
            d[4] || (d[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", m_, f(r.value), 1)
          ]),
          e.node.registry_id ? (a(), c("div", v_, [
            d[5] || (d[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", p_, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), c("div", g_, [
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
            ], 8, h_)
          ])) : y("", !0),
          e.node.download_url ? (a(), c("div", y_, [
            d[8] || (d[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", w_, f(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", __, [
            d[9] || (d[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), c("span", k_, " Not used in any workflows ")) : (a(), c("div", b_, [
              (a(!0), c(H, null, $e(e.node.used_in_workflows, (m) => (a(), c("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        x(Le, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (m) => n("close"))
        }, {
          default: h(() => [...d[11] || (d[11] = [
            b(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), C_ = /* @__PURE__ */ be($_, [["__scopeId", "data-v-b342f626"]]), x_ = { class: "dialog-message" }, S_ = {
  key: 0,
  class: "dialog-details"
}, I_ = {
  key: 1,
  class: "dialog-warning"
}, E_ = /* @__PURE__ */ ke({
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
    return (s, o) => (a(), R(mt, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => s.$emit("cancel"))
    }, {
      body: h(() => [
        t("p", x_, f(e.message), 1),
        e.details && e.details.length ? (a(), c("div", S_, [
          (a(!0), c(H, null, $e(e.details, (n, l) => (a(), c("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), c("p", I_, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          b(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        x(Le, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => s.$emit("cancel"))
        }, {
          default: h(() => [
            b(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), R(Le, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => s.$emit("secondary"))
        }, {
          default: h(() => [
            b(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        x(Le, {
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
}), nl = /* @__PURE__ */ be(E_, [["__scopeId", "data-v-3670b9f5"]]), T_ = { class: "mismatch-warning" }, P_ = { class: "version-mismatch" }, R_ = { class: "version-actual" }, M_ = { class: "version-expected" }, D_ = { key: 0 }, L_ = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, O_ = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, A_ = /* @__PURE__ */ ke({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getNodes: l, trackNodeAsDev: i, installNode: r, uninstallNode: u } = st(), d = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), m = k(!1), v = k(null), g = k(""), w = k(!1), p = k(null), _ = k(null), S = A(() => {
      if (!g.value.trim()) return d.value.nodes;
      const X = g.value.toLowerCase();
      return d.value.nodes.filter(
        (j) => {
          var oe, Z;
          return j.name.toLowerCase().includes(X) || ((oe = j.description) == null ? void 0 : oe.toLowerCase().includes(X)) || ((Z = j.repository) == null ? void 0 : Z.toLowerCase().includes(X));
        }
      );
    }), $ = A(
      () => S.value.filter((X) => X.installed && X.tracked)
    ), P = A(
      () => S.value.filter((X) => !X.installed && X.tracked)
    ), D = A(
      () => S.value.filter((X) => X.installed && !X.tracked)
    );
    function E(X) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[X] || X;
    }
    const C = A(() => o.versionMismatches.length > 0);
    function G(X) {
      return !X.used_in_workflows || X.used_in_workflows.length === 0 ? "Not used in any workflows" : X.used_in_workflows.length === 1 ? X.used_in_workflows[0] : `${X.used_in_workflows.length} workflows`;
    }
    function K(X) {
      p.value = X;
    }
    function N() {
      n("open-node-manager");
    }
    function I(X) {
      _.value = {
        title: "Track as Development Node",
        message: `Track "${X}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const j = await i(X);
            j.status === "success" ? (n("toast", `✓ Node "${X}" tracked as development`, "success"), await se()) : n("toast", `Failed to track node: ${j.message || "Unknown error"}`, "error");
          } catch (j) {
            n("toast", `Error tracking node: ${j instanceof Error ? j.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function T(X) {
      _.value = {
        title: "Remove Untracked Node",
        message: `Remove "${X}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const j = await u(X);
            j.status === "success" ? (n("toast", `✓ Node "${X}" removed`, "success"), await se()) : n("toast", `Failed to remove node: ${j.message || "Unknown error"}`, "error");
          } catch (j) {
            n("toast", `Error removing node: ${j instanceof Error ? j.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function M(X) {
      _.value = {
        title: "Install Missing Node",
        message: `Install "${X}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const j = await r(X);
            j.status === "success" ? (n("toast", `✓ Node "${X}" installed`, "success"), await se()) : n("toast", `Failed to install node: ${j.message || "Unknown error"}`, "error");
          } catch (j) {
            n("toast", `Error installing node: ${j instanceof Error ? j.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    async function se() {
      m.value = !0, v.value = null;
      try {
        d.value = await l();
      } catch (X) {
        v.value = X instanceof Error ? X.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return Xe(se), (X, j) => (a(), c(H, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: j[0] || (j[0] = (oe) => w.value = !0)
          }, {
            actions: h(() => [
              x(fe, {
                variant: "primary",
                size: "sm",
                onClick: N
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
          x($o, {
            modelValue: g.value,
            "onUpdate:modelValue": j[1] || (j[1] = (oe) => g.value = oe),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          m.value ? (a(), R(Ps, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (a(), R(Rs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: se
          }, null, 8, ["message"])) : (a(), c(H, { key: 2 }, [
            d.value.total_count ? (a(), R(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(f(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (a(), c(H, { key: 0 }, [
                  b(" • " + f(d.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                d.value.untracked_count ? (a(), c(H, { key: 1 }, [
                  b(" • " + f(d.value.untracked_count) + " untracked", 1)
                ], 64)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            C.value ? (a(), R(it, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                t("div", T_, [
                  j[8] || (j[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), c(H, null, $e(e.versionMismatches, (oe) => (a(), R(Et, {
                  key: oe.name,
                  status: "warning"
                }, {
                  icon: h(() => [...j[9] || (j[9] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(oe.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", P_, [
                      t("span", R_, f(oe.actual), 1),
                      j[10] || (j[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", M_, f(oe.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    x(fe, {
                      variant: "warning",
                      size: "sm",
                      onClick: j[2] || (j[2] = (Z) => n("repair-environment"))
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
            D.value.length ? (a(), R(it, {
              key: 2,
              title: "UNTRACKED",
              count: D.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), c(H, null, $e(D.value, (oe) => (a(), R(Et, {
                  key: oe.name,
                  status: "warning"
                }, {
                  icon: h(() => [...j[12] || (j[12] = [
                    b("?", -1)
                  ])]),
                  title: h(() => [
                    b(f(oe.name), 1)
                  ]),
                  subtitle: h(() => [...j[13] || (j[13] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    x(dt, {
                      label: "Used by:",
                      value: G(oe)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(fe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Z) => K(oe)
                    }, {
                      default: h(() => [...j[14] || (j[14] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(fe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Z) => I(oe.name)
                    }, {
                      default: h(() => [...j[15] || (j[15] = [
                        b(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(fe, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Z) => T(oe.name)
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
                (a(!0), c(H, null, $e($.value, (oe) => (a(), R(Et, {
                  key: oe.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    b(f(oe.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    b(f(oe.name), 1)
                  ]),
                  subtitle: h(() => [
                    oe.version ? (a(), c("span", D_, f(oe.source === "development" ? "" : "v") + f(oe.version), 1)) : (a(), c("span", L_, "version unknown")),
                    t("span", O_, " • " + f(E(oe.source)), 1)
                  ]),
                  details: h(() => [
                    x(dt, {
                      label: "Used by:",
                      value: G(oe)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(fe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Z) => K(oe)
                    }, {
                      default: h(() => [...j[17] || (j[17] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(fe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: N
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
                (a(!0), c(H, null, $e(P.value, (oe) => (a(), R(Et, {
                  key: oe.name,
                  status: "missing"
                }, {
                  icon: h(() => [...j[19] || (j[19] = [
                    b("!", -1)
                  ])]),
                  title: h(() => [
                    b(f(oe.name), 1)
                  ]),
                  subtitle: h(() => [...j[20] || (j[20] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    x(dt, {
                      label: "Required by:",
                      value: G(oe)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(fe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Z) => K(oe)
                    }, {
                      default: h(() => [...j[21] || (j[21] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(fe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Z) => M(oe.name)
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
            !$.value.length && !P.value.length && !D.value.length ? (a(), R(ns, {
              key: 5,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      x(as, {
        show: w.value,
        title: "About Custom Nodes",
        onClose: j[4] || (j[4] = (oe) => w.value = !1)
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
          x(fe, {
            variant: "primary",
            onClick: j[3] || (j[3] = (oe) => w.value = !1)
          }, {
            default: h(() => [...j[24] || (j[24] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), R(C_, {
        key: 0,
        node: p.value,
        onClose: j[5] || (j[5] = (oe) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      _.value ? (a(), R(nl, {
        key: 1,
        title: _.value.title,
        message: _.value.message,
        warning: _.value.warning,
        "confirm-label": _.value.confirmLabel,
        destructive: _.value.destructive,
        onConfirm: _.value.onConfirm,
        onCancel: j[6] || (j[6] = (oe) => _.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), U_ = /* @__PURE__ */ be(A_, [["__scopeId", "data-v-1555a802"]]);
function Er(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const N_ = { class: "remote-url-display" }, z_ = ["title"], F_ = ["title"], B_ = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, V_ = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, W_ = /* @__PURE__ */ ke({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = k(!1), n = A(() => {
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
    return (i, r) => (a(), c("div", N_, [
      t("span", {
        class: "url-text",
        title: e.url
      }, f(n.value), 9, z_),
      t("button", {
        class: Te(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), c("svg", V_, [...r[1] || (r[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), c("svg", B_, [...r[0] || (r[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, F_)
    ]));
  }
}), G_ = /* @__PURE__ */ be(W_, [["__scopeId", "data-v-7768a58d"]]), j_ = { class: "remote-title" }, H_ = {
  key: 0,
  class: "default-badge"
}, K_ = {
  key: 1,
  class: "sync-badge"
}, q_ = {
  key: 0,
  class: "ahead"
}, Y_ = {
  key: 1,
  class: "behind"
}, J_ = {
  key: 1,
  class: "synced"
}, X_ = ["href"], Q_ = {
  key: 1,
  class: "remote-url-text"
}, Z_ = /* @__PURE__ */ ke({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = A(() => s.fetchingRemote === s.remote.name), n = A(() => s.remote.is_default), l = A(() => s.syncStatus && s.syncStatus.behind > 0), i = A(() => s.syncStatus && s.syncStatus.ahead > 0), r = A(() => s.remote.push_url !== s.remote.fetch_url), u = A(() => {
      const m = s.remote.fetch_url, v = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), d = A(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, v) => (a(), R(Et, {
      status: n.value ? "synced" : void 0
    }, so({
      icon: h(() => [
        b(f(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        t("div", j_, [
          t("span", null, f(e.remote.name), 1),
          n.value ? (a(), c("span", H_, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), c("span", K_, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), c(H, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), c("span", q_, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), c("span", Y_, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), c("span", J_, "✓ synced"))
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
          onClick: v[0] || (v[0] = at(() => {
          }, ["stop"]))
        }, f(d.value), 9, X_)) : (a(), c("span", Q_, f(d.value), 1))
      ]),
      actions: h(() => [
        x(fe, {
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
        x(fe, {
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
        x(fe, {
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
        x(fe, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (g) => m.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            b(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? y("", !0) : (a(), R(fe, {
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
      r.value ? {
        name: "details",
        fn: h(() => [
          e.remote.push_url !== e.remote.fetch_url ? (a(), R(dt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              x(G_, {
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
}), ek = /* @__PURE__ */ be(Z_, [["__scopeId", "data-v-8310f3a8"]]), tk = ["for"], sk = {
  key: 0,
  class: "base-form-field-required"
}, ok = { class: "base-form-field-input" }, nk = {
  key: 1,
  class: "base-form-field-error"
}, ak = {
  key: 2,
  class: "base-form-field-hint"
}, lk = /* @__PURE__ */ ke({
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
    const s = e, o = A(() => s.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (n, l) => (a(), c("div", {
      class: Te(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), c("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        b(f(e.label) + " ", 1),
        e.required ? (a(), c("span", sk, "*")) : y("", !0)
      ], 8, tk)) : y("", !0),
      t("div", ok, [
        Ke(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), c("span", nk, f(e.error), 1)) : e.hint ? (a(), c("span", ak, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), ma = /* @__PURE__ */ be(lk, [["__scopeId", "data-v-9a1cf296"]]), ik = { class: "remote-form" }, rk = { class: "form-header" }, ck = { class: "form-body" }, uk = {
  key: 0,
  class: "form-error"
}, dk = { class: "form-actions" }, fk = /* @__PURE__ */ ke({
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
    gt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = A(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
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
    return (m, v) => (a(), c("div", ik, [
      t("div", rk, [
        x(Ut, null, {
          default: h(() => [
            b(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", ck, [
        x(ma, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            x(Lt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (g) => l.value.name = g),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        x(ma, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            x(Lt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (g) => l.value.fetchUrl = g),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        x(ma, { label: "Push URL (optional)" }, {
          default: h(() => [
            x(Lt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (g) => l.value.pushUrl = g),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        r.value ? (a(), c("div", uk, f(r.value), 1)) : y("", !0)
      ]),
      t("div", dk, [
        x(fe, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: i.value,
          onClick: d
        }, {
          default: h(() => [
            b(f(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        x(fe, {
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
}), mk = /* @__PURE__ */ be(fk, [["__scopeId", "data-v-56021b18"]]), vk = { class: "conflict-summary-box" }, pk = { class: "summary-header" }, gk = { class: "summary-text" }, hk = { key: 0 }, yk = {
  key: 1,
  class: "all-resolved"
}, wk = { class: "summary-progress" }, _k = { class: "progress-bar" }, kk = { class: "progress-text" }, bk = /* @__PURE__ */ ke({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const s = e, o = A(
      () => s.conflictCount > 0 ? s.resolvedCount / s.conflictCount * 100 : 0
    );
    return (n, l) => (a(), c("div", vk, [
      t("div", pk, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", gk, [
          t("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), c("p", hk, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (a(), c("p", yk, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      t("div", wk, [
        t("div", _k, [
          t("div", {
            class: "progress-fill",
            style: Kt({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", kk, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), $k = /* @__PURE__ */ be(bk, [["__scopeId", "data-v-4e9e6cc9"]]), Ck = { class: "modal-header" }, xk = { class: "modal-title" }, Sk = { class: "modal-body" }, Ik = {
  key: 0,
  class: "error-box"
}, Ek = {
  key: 0,
  class: "error-hint"
}, Tk = {
  key: 1,
  class: "loading-state"
}, Pk = { class: "commit-summary" }, Rk = {
  key: 0,
  class: "changes-section"
}, Mk = {
  key: 0,
  class: "change-group",
  open: ""
}, Dk = { class: "change-count" }, Lk = { class: "change-list" }, Ok = {
  key: 0,
  class: "conflict-badge"
}, Ak = {
  key: 1,
  class: "change-group"
}, Uk = { class: "change-count" }, Nk = { class: "change-list" }, zk = {
  key: 2,
  class: "change-group"
}, Fk = { class: "change-count" }, Bk = { class: "change-list" }, Vk = {
  key: 2,
  class: "strategy-section"
}, Wk = { class: "radio-group" }, Gk = { class: "radio-option" }, jk = { class: "radio-option" }, Hk = { class: "radio-option" }, Kk = {
  key: 3,
  class: "up-to-date"
}, qk = { class: "modal-actions" }, Ql = "comfygit.pullModelStrategy", Yk = /* @__PURE__ */ ke({
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
    const o = e, n = s, l = k(localStorage.getItem(Ql) || "skip");
    gt(l, ($) => {
      localStorage.setItem(Ql, $);
    });
    const i = A(() => {
      var $;
      return (($ = o.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), r = A(() => {
      if (!o.preview) return 0;
      const $ = o.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), u = A(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = A(() => {
      var $;
      return r.value > 0 || u.value > 0 || ((($ = o.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), m = A(() => o.preview && Er(o.preview) ? o.preview : null), v = A(() => {
      var $;
      return (($ = m.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), g = A(() => {
      var $;
      return (($ = o.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), w = A(
      () => v.value > 0 && g.value === v.value
    ), p = A(() => !(!o.preview || o.preview.has_uncommitted_changes || m.value && !w.value));
    function _($) {
      if (!m.value) return !1;
      const P = $.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((D) => D.name === P);
    }
    function S($) {
      const P = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: $, resolutions: P });
    }
    return ($, P) => {
      var D, E;
      return a(), R(wt, { to: "body" }, [
        e.show ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: P[11] || (P[11] = (C) => $.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: P[10] || (P[10] = at(() => {
            }, ["stop"]))
          }, [
            t("div", Ck, [
              t("h3", xk, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: P[0] || (P[0] = (C) => $.$emit("close"))
              }, "✕")
            ]),
            t("div", Sk, [
              e.error ? (a(), c("div", Ik, [
                P[13] || (P[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  P[12] || (P[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, f(e.error), 1),
                  i.value ? (a(), c("p", Ek, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), c("div", Tk, [...P[14] || (P[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (D = e.preview) != null && D.has_uncommitted_changes ? (a(), c(H, { key: 2 }, [
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
              ], 64)) : e.preview ? (a(), c(H, { key: 3 }, [
                t("div", Pk, [
                  P[17] || (P[17] = t("span", { class: "icon" }, "📥", -1)),
                  b(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                d.value ? (a(), c("div", Rk, [
                  P[21] || (P[21] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  r.value > 0 ? (a(), c("details", Mk, [
                    t("summary", null, [
                      P[18] || (P[18] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", Dk, f(r.value) + " changes", 1)
                    ]),
                    t("div", Lk, [
                      (a(!0), c(H, null, $e(e.preview.changes.workflows.added, (C) => (a(), c("div", {
                        key: "a-" + C,
                        class: "change-item add"
                      }, " + " + f(C), 1))), 128)),
                      (a(!0), c(H, null, $e(e.preview.changes.workflows.modified, (C) => (a(), c("div", {
                        key: "m-" + C,
                        class: "change-item modify"
                      }, [
                        b(" ~ " + f(C) + " ", 1),
                        _(C) ? (a(), c("span", Ok, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), c(H, null, $e(e.preview.changes.workflows.deleted, (C) => (a(), c("div", {
                        key: "d-" + C,
                        class: "change-item delete"
                      }, " - " + f(C), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (a(), c("details", Ak, [
                    t("summary", null, [
                      P[19] || (P[19] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", Uk, f(u.value) + " to install", 1)
                    ]),
                    t("div", Nk, [
                      (a(!0), c(H, null, $e(e.preview.changes.nodes.to_install, (C) => (a(), c("div", {
                        key: C,
                        class: "change-item add"
                      }, " + " + f(C), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), c("details", zk, [
                    t("summary", null, [
                      P[20] || (P[20] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", Fk, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", Bk, [
                      (a(!0), c(H, null, $e(e.preview.changes.models.referenced, (C) => (a(), c("div", {
                        key: C,
                        class: "change-item"
                      }, f(C), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (a(), R($k, {
                  key: 1,
                  "conflict-count": v.value,
                  "resolved-count": g.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), c("div", Vk, [
                  P[26] || (P[26] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", Wk, [
                    t("label", Gk, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[1] || (P[1] = (C) => l.value = C),
                        value: "all"
                      }, null, 512), [
                        [Qt, l.value]
                      ]),
                      P[22] || (P[22] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", jk, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[2] || (P[2] = (C) => l.value = C),
                        value: "required"
                      }, null, 512), [
                        [Qt, l.value]
                      ]),
                      P[23] || (P[23] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", Hk, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[3] || (P[3] = (C) => l.value = C),
                        value: "skip"
                      }, null, 512), [
                        [Qt, l.value]
                      ]),
                      P[24] || (P[24] = t("span", null, "Skip model downloads", -1)),
                      P[25] || (P[25] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  P[27] || (P[27] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (a(), c("div", Kk, [
                  P[28] || (P[28] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", qk, [
              x(fe, {
                variant: "secondary",
                onClick: P[4] || (P[4] = (C) => $.$emit("close"))
              }, {
                default: h(() => [...P[29] || (P[29] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), c(H, { key: 0 }, [
                x(fe, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: P[5] || (P[5] = (C) => S(!1))
                }, {
                  default: h(() => [...P[30] || (P[30] = [
                    b(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                x(fe, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: P[6] || (P[6] = (C) => S(!0))
                }, {
                  default: h(() => [...P[31] || (P[31] = [
                    b(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (E = e.preview) != null && E.has_uncommitted_changes ? (a(), R(fe, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: P[7] || (P[7] = (C) => S(!0))
              }, {
                default: h(() => [...P[32] || (P[32] = [
                  b(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), c(H, { key: 2 }, [
                m.value && !w.value ? (a(), R(fe, {
                  key: 0,
                  variant: "primary",
                  onClick: P[8] || (P[8] = (C) => n("openConflictResolution"))
                }, {
                  default: h(() => [
                    b(" Resolve Conflicts (" + f(g.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), R(fe, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !p.value,
                  onClick: P[9] || (P[9] = (C) => S(!1))
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
}), Jk = /* @__PURE__ */ be(Yk, [["__scopeId", "data-v-300c7b2f"]]), Xk = { class: "modal-header" }, Qk = { class: "modal-title" }, Zk = { class: "modal-body" }, eb = {
  key: 0,
  class: "loading-state"
}, tb = {
  key: 1,
  class: "warning-box"
}, sb = {
  key: 0,
  class: "commits-section"
}, ob = { class: "commit-list" }, nb = { class: "commit-hash" }, ab = { class: "commit-message" }, lb = { class: "commit-date" }, ib = { class: "force-option" }, rb = { class: "checkbox-option" }, cb = { class: "commit-summary" }, ub = { key: 0 }, db = { key: 1 }, fb = {
  key: 0,
  class: "info-box"
}, mb = {
  key: 1,
  class: "commits-section"
}, vb = { class: "commit-list" }, pb = { class: "commit-hash" }, gb = { class: "commit-message" }, hb = { class: "commit-date" }, yb = {
  key: 2,
  class: "up-to-date"
}, wb = { class: "modal-actions" }, _b = /* @__PURE__ */ ke({
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
            onClick: r[6] || (r[6] = at(() => {
            }, ["stop"]))
          }, [
            t("div", Xk, [
              t("h3", Qk, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: r[0] || (r[0] = (v) => i.$emit("close"))
              }, "✕")
            ]),
            t("div", Zk, [
              e.loading ? (a(), c("div", eb, [...r[8] || (r[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (a(), c("div", tb, [...r[9] || (r[9] = [
                t("span", { class: "warning-icon" }, "⚠", -1),
                t("div", null, [
                  t("strong", null, "UNCOMMITTED CHANGES"),
                  t("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = e.preview) != null && d.remote_has_new_commits ? (a(), c(H, { key: 2 }, [
                r[13] || (r[13] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "REMOTE HAS NEW COMMITS"),
                    t("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (a(), c("div", sb, [
                  r[10] || (r[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", ob, [
                    (a(!0), c(H, null, $e(e.preview.commits, (v) => (a(), c("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", nb, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", ab, f(v.message), 1),
                      t("span", lb, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", ib, [
                  t("label", rb, [
                    qe(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": r[1] || (r[1] = (v) => n.value = v)
                    }, null, 512), [
                      [en, n.value]
                    ]),
                    r[11] || (r[11] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  r[12] || (r[12] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (a(), c(H, { key: 3 }, [
                t("div", cb, [
                  r[14] || (r[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (a(), c("span", ub, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), c("span", db, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (a(), c("div", fb, [...r[15] || (r[15] = [
                  t("span", { class: "info-icon" }, "ℹ", -1),
                  t("span", null, "This will create the remote branch for the first time.", -1)
                ])])) : y("", !0),
                e.preview.commits_ahead > 0 ? (a(), c("div", mb, [
                  r[16] || (r[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", vb, [
                    (a(!0), c(H, null, $e(e.preview.commits, (v) => (a(), c("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", pb, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", gb, f(v.message), 1),
                      t("span", hb, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (a(), c("div", yb, [
                  r[17] || (r[17] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", wb, [
              x(fe, {
                variant: "secondary",
                onClick: r[2] || (r[2] = (v) => i.$emit("close"))
              }, {
                default: h(() => [...r[18] || (r[18] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = e.preview) != null && m.remote_has_new_commits ? (a(), c(H, { key: 0 }, [
                x(fe, {
                  variant: "secondary",
                  onClick: r[3] || (r[3] = (v) => i.$emit("pull-first"))
                }, {
                  default: h(() => [...r[19] || (r[19] = [
                    b(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                x(fe, {
                  variant: "destructive",
                  disabled: !n.value,
                  loading: e.pushing,
                  onClick: r[4] || (r[4] = (v) => l(!0))
                }, {
                  default: h(() => [...r[20] || (r[20] = [
                    b(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), R(fe, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: r[5] || (r[5] = (v) => l(!1))
              }, {
                default: h(() => [...r[21] || (r[21] = [
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
}), kb = /* @__PURE__ */ be(_b, [["__scopeId", "data-v-ae86b6a7"]]), bb = { class: "resolution-choice-group" }, $b = ["disabled"], Cb = ["disabled"], xb = /* @__PURE__ */ ke({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), c("div", bb, [
      t("button", {
        class: Te(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, $b),
      t("button", {
        class: Te(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Cb)
    ]));
  }
}), Sb = /* @__PURE__ */ be(xb, [["__scopeId", "data-v-985715ed"]]), Ib = { class: "conflict-header" }, Eb = { class: "conflict-info" }, Tb = { class: "workflow-name" }, Pb = { class: "conflict-description" }, Rb = {
  key: 0,
  class: "resolved-badge"
}, Mb = { class: "resolved-text" }, Db = { class: "conflict-hashes" }, Lb = { class: "hash-item" }, Ob = { class: "hash-item" }, Ab = { class: "conflict-actions" }, Ub = /* @__PURE__ */ ke({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = k(o.resolution);
    gt(() => o.resolution, (d) => {
      l.value = d;
    }), gt(l, (d) => {
      d && n("resolve", d);
    });
    const i = A(() => l.value !== null), r = A(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = A(() => {
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
      var v, g;
      return a(), c("div", {
        class: Te(["conflict-item", { resolved: i.value }])
      }, [
        t("div", Ib, [
          m[2] || (m[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", Eb, [
            t("code", Tb, f(e.conflict.name) + ".json", 1),
            t("div", Pb, f(r.value), 1)
          ]),
          i.value ? (a(), c("div", Rb, [
            m[1] || (m[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", Mb, f(u.value), 1)
          ])) : y("", !0)
        ]),
        t("div", Db, [
          t("span", Lb, [
            m[3] || (m[3] = b("Your: ", -1)),
            t("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", Ob, [
            m[4] || (m[4] = b("Theirs: ", -1)),
            t("code", null, f(((g = e.conflict.target_hash) == null ? void 0 : g.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", Ab, [
          x(Sb, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), Nb = /* @__PURE__ */ be(Ub, [["__scopeId", "data-v-506d3bbf"]]), zb = { class: "resolution-content" }, Fb = {
  key: 0,
  class: "error-box"
}, Bb = { class: "resolution-header" }, Vb = { class: "header-stats" }, Wb = { class: "stat" }, Gb = { class: "stat-value" }, jb = { class: "stat resolved" }, Hb = { class: "stat-value" }, Kb = {
  key: 0,
  class: "stat pending"
}, qb = { class: "stat-value" }, Yb = { class: "conflicts-list" }, Jb = {
  key: 1,
  class: "all-resolved-message"
}, Xb = /* @__PURE__ */ ke({
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
    const o = e, n = s, l = A(() => o.resolutions.size), i = A(() => o.workflowConflicts.length - l.value), r = A(() => l.value === o.workflowConflicts.length), u = A(
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
    function g() {
      n("apply");
    }
    return (w, p) => (a(), R(mt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        t("div", zb, [
          e.error ? (a(), c("div", Fb, [
            p[1] || (p[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              p[0] || (p[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", Bb, [
            t("div", Vb, [
              t("div", Wb, [
                t("span", Gb, f(e.workflowConflicts.length), 1),
                p[2] || (p[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", jb, [
                t("span", Hb, f(l.value), 1),
                p[3] || (p[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              i.value > 0 ? (a(), c("div", Kb, [
                t("span", qb, f(i.value), 1),
                p[4] || (p[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            p[5] || (p[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", Yb, [
            (a(!0), c(H, null, $e(e.workflowConflicts, (_) => (a(), R(Nb, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (S) => m(_.name, S)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          r.value ? (a(), c("div", Jb, [
            p[6] || (p[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + f(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        x(Le, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...p[7] || (p[7] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = t("div", { class: "footer-spacer" }, null, -1)),
        x(Le, {
          variant: "primary",
          disabled: !r.value || e.validating,
          loading: e.validating,
          onClick: g
        }, {
          default: h(() => [
            b(f(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Qb = /* @__PURE__ */ be(Xb, [["__scopeId", "data-v-c58d150d"]]), Zb = { class: "node-conflict-item" }, e2 = { class: "node-header" }, t2 = { class: "node-name" }, s2 = { class: "node-id" }, o2 = { class: "version-comparison" }, n2 = { class: "version yours" }, a2 = { class: "version theirs" }, l2 = { class: "chosen-version" }, i2 = { class: "chosen" }, r2 = { class: "chosen-reason" }, c2 = { class: "affected-workflows" }, u2 = { class: "wf-source" }, d2 = { class: "wf-version" }, f2 = /* @__PURE__ */ ke({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (a(), c("div", Zb, [
      t("div", e2, [
        t("code", t2, f(e.conflict.node_name), 1),
        t("span", s2, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      t("div", o2, [
        t("div", n2, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", a2, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      t("div", l2, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", i2, f(e.conflict.chosen_version), 1),
        t("span", r2, f(e.conflict.chosen_reason), 1)
      ]),
      t("details", c2, [
        t("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (a(!0), c(H, null, $e(e.conflict.affected_workflows, (n) => (a(), c("li", {
            key: n.name
          }, [
            t("code", null, f(n.name), 1),
            t("span", u2, "(" + f(n.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", d2, "needs v" + f(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), m2 = /* @__PURE__ */ be(f2, [["__scopeId", "data-v-8b626725"]]), v2 = { class: "validation-content" }, p2 = {
  key: 0,
  class: "compatible-message"
}, g2 = { class: "conflicts-list" }, h2 = {
  key: 2,
  class: "warnings-section"
}, y2 = /* @__PURE__ */ ke({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = A(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (i, r) => (a(), R(mt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: r[3] || (r[3] = (u) => n("cancel"))
    }, {
      body: h(() => [
        t("div", v2, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), c("div", p2, [
            r[5] || (r[5] = t("span", { class: "icon" }, "✓", -1)),
            t("div", null, [
              r[4] || (r[4] = t("strong", null, "All clear!", -1)),
              t("p", null, "Your workflow choices are compatible. Ready to " + f(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (a(), c(H, { key: 1 }, [
            r[6] || (r[6] = t("div", { class: "warning-header" }, [
              t("span", { class: "icon" }, "⚠"),
              t("div", null, [
                t("strong", null, "Node Version Differences"),
                t("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            t("div", g2, [
              (a(!0), c(H, null, $e(e.validation.node_conflicts, (u) => (a(), R(m2, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            r[7] || (r[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (a(), c("div", h2, [
            r[8] || (r[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (a(!0), c(H, null, $e(e.validation.warnings, (u, d) => (a(), c("li", { key: d }, f(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        x(Le, {
          variant: "secondary",
          onClick: r[0] || (r[0] = (u) => n("cancel"))
        }, {
          default: h(() => [...r[9] || (r[9] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        r[11] || (r[11] = t("div", { class: "footer-spacer" }, null, -1)),
        x(Le, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (u) => n("goBack"))
        }, {
          default: h(() => [...r[10] || (r[10] = [
            b(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        x(Le, {
          variant: "primary",
          loading: e.executing,
          onClick: r[2] || (r[2] = (u) => n("proceed"))
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
}), w2 = /* @__PURE__ */ be(y2, [["__scopeId", "data-v-fefd26ed"]]), _2 = { key: 0 }, k2 = /* @__PURE__ */ ke({
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
      getPushPreview: g,
      pushToRemote: w,
      validateMerge: p
    } = st(), _ = k([]), S = k(null), $ = k({}), P = k(!1), D = k(null), E = k(""), C = k(!1), G = k(null), K = k(!1), N = k("add"), I = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), T = A(() => {
      if (!E.value.trim()) return _.value;
      const Ce = E.value.toLowerCase();
      return _.value.filter(
        (V) => V.name.toLowerCase().includes(Ce) || V.fetch_url.toLowerCase().includes(Ce) || V.push_url.toLowerCase().includes(Ce)
      );
    });
    async function M() {
      P.value = !0, D.value = null;
      try {
        const Ce = await n();
        _.value = Ce.remotes, S.value = Ce.current_branch_tracking || null, await Promise.all(
          Ce.remotes.map(async (V) => {
            const z = await d(V.name);
            z && ($.value[V.name] = z);
          })
        );
      } catch (Ce) {
        D.value = Ce instanceof Error ? Ce.message : "Failed to load remotes";
      } finally {
        P.value = !1;
      }
    }
    function se() {
      N.value = "add", I.value = { name: "", fetchUrl: "", pushUrl: "" }, K.value = !0;
    }
    function X(Ce) {
      const V = _.value.find((z) => z.name === Ce);
      V && (N.value = "edit", I.value = {
        name: V.name,
        fetchUrl: V.fetch_url,
        pushUrl: V.push_url
      }, K.value = !0);
    }
    async function j(Ce) {
      try {
        N.value === "add" ? await l(Ce.name, Ce.fetchUrl) : await r(Ce.name, Ce.fetchUrl, Ce.pushUrl || void 0), K.value = !1, await M();
      } catch (V) {
        D.value = V instanceof Error ? V.message : "Operation failed";
      }
    }
    function oe() {
      K.value = !1, I.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Z(Ce) {
      G.value = Ce;
      try {
        await u(Ce);
        const V = await d(Ce);
        V && ($.value[Ce] = V), o("toast", `✓ Fetched from ${Ce}`, "success");
      } catch (V) {
        o("toast", V instanceof Error ? V.message : "Fetch failed", "error");
      } finally {
        G.value = null;
      }
    }
    async function U(Ce) {
      if (confirm(`Remove remote "${Ce}"?`))
        try {
          await i(Ce), await M();
        } catch (V) {
          D.value = V instanceof Error ? V.message : "Failed to remove remote";
        }
    }
    function W() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const O = k("idle"), ie = A(() => O.value === "pull_preview"), ge = A(
      () => O.value === "resolving" || O.value === "validating"
    ), Me = A(
      () => O.value === "validation_review" || O.value === "executing"
    ), Ae = k(!1), de = k(null), re = k(!1), F = k(null), ee = k(!1), he = k(null), pe = k(null), me = k(/* @__PURE__ */ new Map()), De = k(null), Re = k(null), L = A(() => he.value && Er(he.value) ? he.value : null);
    async function B(Ce) {
      F.value = Ce, O.value = "pull_preview", ee.value = !0, he.value = null, pe.value = null;
      try {
        he.value = await m(Ce);
      } catch (V) {
        pe.value = V instanceof Error ? V.message : "Failed to load pull preview";
      } finally {
        ee.value = !1;
      }
    }
    function ae() {
      O.value = "idle", he.value = null, pe.value = null, F.value = null;
    }
    async function ue(Ce) {
      if (!F.value) return;
      O.value = "executing", pe.value = null;
      const V = F.value;
      try {
        const z = await v(V, Ce);
        if (z.rolled_back) {
          pe.value = `Pull failed and was rolled back: ${z.error || "Unknown error"}`, O.value = "pull_preview";
          return;
        }
        Pe(), O.value = "idle", o("toast", `✓ Pulled from ${V}`, "success"), await M();
      } catch (z) {
        pe.value = z instanceof Error ? z.message : "Pull failed", O.value = "pull_preview";
      }
    }
    function we() {
      L.value && (O.value = "resolving", Re.value = null);
    }
    function _e(Ce, V) {
      me.value.set(Ce, { name: Ce, resolution: V });
    }
    function Ie() {
      O.value = "pull_preview";
    }
    async function Ee() {
      O.value = "validating", Re.value = null;
      try {
        const Ce = Array.from(me.value.values());
        De.value = await p(F.value, Ce), O.value = "validation_review";
      } catch (Ce) {
        Re.value = Ce instanceof Error ? Ce.message : "Validation failed", O.value = "resolving";
      }
    }
    async function ce() {
      O.value = "executing";
      const Ce = F.value;
      try {
        const V = Array.from(me.value.values()), z = await v(Ce, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: V
        });
        if (z.rolled_back) {
          pe.value = `Pull failed and was rolled back: ${z.error || "Unknown error"}`, O.value = "pull_preview";
          return;
        }
        Pe(), O.value = "idle", o("toast", `✓ Pulled from ${Ce}`, "success"), await M();
      } catch (V) {
        pe.value = V instanceof Error ? V.message : "Pull failed", O.value = "validation_review";
      }
    }
    function ye() {
      O.value = "resolving";
    }
    function Ne() {
      Pe(), O.value = "idle";
    }
    function Pe() {
      me.value.clear(), De.value = null, Re.value = null, pe.value = null, he.value = null, F.value = null;
    }
    async function ne(Ce) {
      F.value = Ce, Ae.value = !0, ee.value = !0, de.value = null;
      try {
        de.value = await g(Ce);
      } catch (V) {
        D.value = V instanceof Error ? V.message : "Failed to load push preview";
      } finally {
        ee.value = !1;
      }
    }
    function Y() {
      Ae.value = !1, de.value = null, F.value = null;
    }
    async function Oe(Ce) {
      if (!F.value) return;
      re.value = !0;
      const V = F.value;
      try {
        await w(V, Ce), Y(), o("toast", `✓ Pushed to ${V}`, "success"), await M();
      } catch (z) {
        o("toast", z instanceof Error ? z.message : "Push failed", "error");
      } finally {
        re.value = !1;
      }
    }
    function xe() {
      const Ce = F.value;
      Y(), Ce && B(Ce);
    }
    return Xe(M), (Ce, V) => (a(), c(H, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: V[0] || (V[0] = (z) => C.value = !0)
          }, {
            actions: h(() => [
              K.value ? y("", !0) : (a(), R(fe, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: se
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
          K.value ? y("", !0) : (a(), R($o, {
            key: 0,
            modelValue: E.value,
            "onUpdate:modelValue": V[1] || (V[1] = (z) => E.value = z),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: h(() => [
          P.value ? (a(), R(Ps, {
            key: 0,
            message: "Loading remotes..."
          })) : D.value ? (a(), R(Rs, {
            key: 1,
            message: D.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (a(), c(H, { key: 2 }, [
            K.value ? (a(), R(mk, {
              key: 0,
              mode: N.value,
              "remote-name": I.value.name,
              "fetch-url": I.value.fetchUrl,
              "push-url": I.value.pushUrl,
              onSubmit: j,
              onCancel: oe
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            _.value.length && !K.value ? (a(), R(an, {
              key: 1,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                S.value ? (a(), c("span", _2, " • Tracking: " + f(S.value.remote) + "/" + f(S.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            T.value.length && !K.value ? (a(), R(it, {
              key: 2,
              title: "REMOTES",
              count: T.value.length
            }, {
              default: h(() => [
                (a(!0), c(H, null, $e(T.value, (z) => (a(), R(ek, {
                  key: z.name,
                  remote: z,
                  "sync-status": $.value[z.name],
                  "fetching-remote": G.value,
                  onFetch: Z,
                  onEdit: X,
                  onRemove: U,
                  onPull: B,
                  onPush: ne
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !T.value.length && !K.value ? (a(), R(ns, {
              key: 3,
              icon: "🌐",
              message: E.value ? `No remotes match '${E.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                x(fe, {
                  variant: "primary",
                  onClick: se
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
      x(as, {
        show: C.value,
        title: "About Git Remotes",
        onClose: V[2] || (V[2] = (z) => C.value = !1)
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
          x(fe, {
            variant: "link",
            onClick: W
          }, {
            default: h(() => [...V[6] || (V[6] = [
              b(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      x(Jk, {
        show: ie.value,
        "remote-name": F.value || "",
        preview: he.value,
        loading: ee.value,
        pulling: O.value === "executing",
        error: pe.value,
        "conflict-resolutions": me.value,
        onClose: ae,
        onPull: ue,
        onOpenConflictResolution: we
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      x(kb, {
        show: Ae.value,
        "remote-name": F.value || "",
        preview: de.value,
        loading: ee.value,
        pushing: re.value,
        onClose: Y,
        onPush: Oe,
        onPullFirst: xe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ge.value && L.value ? (a(), R(Qb, {
        key: 0,
        "workflow-conflicts": L.value.workflow_conflicts,
        resolutions: me.value,
        "operation-type": "pull",
        validating: O.value === "validating",
        error: Re.value,
        onClose: Ie,
        onResolve: _e,
        onApply: Ee
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      Me.value && De.value ? (a(), R(w2, {
        key: 1,
        validation: De.value,
        "operation-type": "pull",
        executing: O.value === "executing",
        onProceed: ce,
        onGoBack: ye,
        onCancel: Ne
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), b2 = /* @__PURE__ */ be(k2, [["__scopeId", "data-v-9ae3b76d"]]), $2 = { class: "setting-info" }, C2 = { class: "setting-label" }, x2 = {
  key: 0,
  class: "required-marker"
}, S2 = {
  key: 0,
  class: "setting-description"
}, I2 = { class: "setting-control" }, E2 = /* @__PURE__ */ ke({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), c("div", {
      class: Te(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", $2, [
        t("div", C2, [
          b(f(e.label) + " ", 1),
          e.required ? (a(), c("span", x2, "*")) : y("", !0)
        ]),
        e.description ? (a(), c("div", S2, f(e.description), 1)) : y("", !0)
      ]),
      t("div", I2, [
        Ke(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), hn = /* @__PURE__ */ be(E2, [["__scopeId", "data-v-cb5d236c"]]), T2 = { class: "toggle" }, P2 = ["checked", "disabled"], R2 = /* @__PURE__ */ ke({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), c("label", T2, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, P2),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Zl = /* @__PURE__ */ be(R2, [["__scopeId", "data-v-71c0f550"]]), M2 = { class: "workspace-settings-content" }, D2 = { class: "settings-section" }, L2 = { class: "path-setting" }, O2 = { class: "path-value" }, A2 = { class: "path-setting" }, U2 = { class: "path-value" }, N2 = { class: "settings-section" }, z2 = { class: "settings-section" }, F2 = { class: "settings-section" }, B2 = /* @__PURE__ */ ke({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = o, { getConfig: i, updateConfig: r } = st(), u = k(!1), d = k(null), m = k(null), v = k(null), g = k(null), w = k(""), p = k(""), _ = k(!1), S = k(!0);
    function $(I) {
      return I.join(" ");
    }
    function P(I) {
      return I.trim() ? I.trim().split(/\s+/) : [];
    }
    const D = A(() => {
      if (!g.value) return !1;
      const I = w.value !== (g.value.civitai_api_key || ""), T = p.value !== $(g.value.comfyui_extra_args || []);
      return I || T;
    });
    async function E() {
      u.value = !0, d.value = null;
      try {
        v.value = await i(n.workspacePath || void 0), g.value = { ...v.value }, w.value = v.value.civitai_api_key || "", p.value = $(v.value.comfyui_extra_args || []);
        const I = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        _.value = I !== "false", S.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
      } catch (I) {
        d.value = I instanceof Error ? I.message : "Failed to load settings";
      } finally {
        u.value = !1;
      }
    }
    async function C() {
      var I, T;
      m.value = null;
      try {
        const M = {};
        w.value !== (((I = g.value) == null ? void 0 : I.civitai_api_key) || "") && (M.civitai_api_key = w.value || null), p.value !== $(((T = g.value) == null ? void 0 : T.comfyui_extra_args) || []) && (M.comfyui_extra_args = P(p.value)), await r(M, n.workspacePath || void 0), await E(), m.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (M) {
        const se = M instanceof Error ? M.message : "Failed to save settings";
        m.value = { type: "error", message: se }, l("error", se);
      }
    }
    function G() {
      g.value && (w.value = g.value.civitai_api_key || "", p.value = $(g.value.comfyui_extra_args || []), m.value = null);
    }
    function K(I) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(I)), console.log("[ComfyGit] Auto-refresh setting saved:", I);
    }
    function N(I) {
      I ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", I ? "enabled" : "disabled");
    }
    return s({
      saveSettings: C,
      resetSettings: G,
      hasChanges: D,
      loadSettings: E
    }), Xe(E), (I, T) => (a(), c("div", M2, [
      u.value ? (a(), R(Ps, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (a(), R(Rs, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: E
      }, null, 8, ["message"])) : (a(), c(H, { key: 2 }, [
        x(it, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var M, se;
            return [
              t("div", D2, [
                t("div", L2, [
                  T[4] || (T[4] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  T[5] || (T[5] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", O2, f(((M = v.value) == null ? void 0 : M.workspace_path) || "Loading..."), 1)
                ]),
                t("div", A2, [
                  T[6] || (T[6] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  T[7] || (T[7] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", U2, f(((se = v.value) == null ? void 0 : se.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        x(it, { title: "API CREDENTIALS" }, {
          default: h(() => [
            t("div", N2, [
              x(hn, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  x(An, {
                    modelValue: w.value,
                    "onUpdate:modelValue": T[0] || (T[0] = (M) => w.value = M),
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
        x(it, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            t("div", z2, [
              x(hn, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  x(An, {
                    modelValue: p.value,
                    "onUpdate:modelValue": T[1] || (T[1] = (M) => p.value = M),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              T[8] || (T[8] = t("div", { class: "setting-hint" }, [
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
        x(it, { title: "UI SETTINGS" }, {
          default: h(() => [
            t("div", F2, [
              x(hn, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  x(Zl, {
                    modelValue: _.value,
                    "onUpdate:modelValue": [
                      T[2] || (T[2] = (M) => _.value = M),
                      K
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              x(hn, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  x(Zl, {
                    modelValue: S.value,
                    "onUpdate:modelValue": [
                      T[3] || (T[3] = (M) => S.value = M),
                      N
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        m.value ? (a(), R(an, {
          key: 0,
          variant: (m.value.type === "success", "compact")
        }, {
          default: h(() => [
            t("span", {
              style: Kt({ color: m.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, f(m.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), Tr = /* @__PURE__ */ be(B2, [["__scopeId", "data-v-f28917ec"]]), V2 = /* @__PURE__ */ ke({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), R(Tt, null, {
      header: h(() => [
        x(Pt, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var i, r;
            return [
              x(fe, {
                variant: "primary",
                size: "sm",
                disabled: !((i = s.value) != null && i.hasChanges),
                onClick: l[0] || (l[0] = (u) => {
                  var d;
                  return (d = s.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: h(() => [...l[2] || (l[2] = [
                  b(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (r = s.value) != null && r.hasChanges ? (a(), R(fe, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (u) => {
                  var d;
                  return (d = s.value) == null ? void 0 : d.resetSettings();
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
        x(Tr, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), W2 = { class: "base-tabs" }, G2 = ["disabled", "onClick"], j2 = {
  key: 0,
  class: "base-tabs__badge"
}, H2 = /* @__PURE__ */ ke({
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
    return (i, r) => (a(), c("div", W2, [
      (a(!0), c(H, null, $e(e.tabs, (u) => (a(), c("button", {
        key: u.id,
        class: Te([
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
        u.badge ? (a(), c("span", j2, f(u.badge), 1)) : y("", !0)
      ], 10, G2))), 128))
    ]));
  }
}), Pr = /* @__PURE__ */ be(H2, [["__scopeId", "data-v-ad5e6cad"]]), K2 = { class: "log-viewer-wrapper" }, q2 = ["disabled", "title"], Y2 = /* @__PURE__ */ ke({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const s = e, o = k(null), n = k("idle"), l = A(() => s.logs.map((m) => ({
      text: s.rawFormat || !m.timestamp ? m.message : `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function i() {
      var v;
      await kt();
      const m = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      m && (m.scrollTop = m.scrollHeight);
    }
    Xe(i), gt(() => s.logs, i);
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
    return (m, v) => (a(), c("div", K2, [
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
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, q2),
        (a(!0), c(H, null, $e(l.value, (g, w) => (a(), c("div", {
          key: w,
          class: Te(`log-line log-level-${g.level.toLowerCase()}`)
        }, f(g.text), 3))), 128))
      ], 544)
    ]));
  }
}), Rr = /* @__PURE__ */ be(Y2, [["__scopeId", "data-v-c0cc6d21"]]), J2 = /* @__PURE__ */ ke({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: n,
      getOrchestratorLogPath: l,
      openFile: i
    } = st(), r = k("workspace"), u = k([]), d = k(!1), m = k(null), v = k(!1), g = k(null), w = k(null), p = k(!1), _ = A(() => r.value === "workspace" ? g.value : w.value);
    async function S() {
      d.value = !0, m.value = null;
      try {
        r.value === "workspace" ? u.value = await s(void 0, 500) : u.value = await n(void 0, 500);
      } catch (D) {
        m.value = D instanceof Error ? D.message : `Failed to load ${r.value} logs`;
      } finally {
        d.value = !1;
      }
    }
    async function $() {
      try {
        const [D, E] = await Promise.all([
          o(),
          l()
        ]);
        D.exists && (g.value = D.path), E.exists && (w.value = E.path);
      } catch {
      }
    }
    async function P() {
      if (_.value) {
        p.value = !0;
        try {
          await i(_.value);
        } catch (D) {
          console.error("Failed to open log file:", D);
        } finally {
          p.value = !1;
        }
      }
    }
    return gt(r, () => {
      S();
    }), Xe(() => {
      S(), $();
    }), (D, E) => (a(), c(H, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (C) => v.value = !0)
          }, {
            actions: h(() => [
              x(fe, {
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
              x(fe, {
                variant: "secondary",
                size: "sm",
                onClick: S,
                disabled: d.value
              }, {
                default: h(() => [
                  b(f(d.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          x(Pr, {
            modelValue: r.value,
            "onUpdate:modelValue": E[1] || (E[1] = (C) => r.value = C),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (a(), R(Ps, {
            key: 0,
            message: `Loading ${r.value} logs...`
          }, null, 8, ["message"])) : m.value ? (a(), R(Rs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (a(), c(H, { key: 2 }, [
            u.value.length === 0 ? (a(), R(ns, {
              key: 0,
              icon: "📝",
              message: `No ${r.value} logs available`
            }, null, 8, ["message"])) : (a(), R(Rr, {
              key: 1,
              logs: u.value,
              "raw-format": r.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      x(as, {
        show: v.value,
        title: "About Logs",
        onClose: E[3] || (E[3] = (C) => v.value = !1)
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
          x(fe, {
            variant: "primary",
            onClick: E[2] || (E[2] = (C) => v.value = !1)
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
}), X2 = /* @__PURE__ */ ke({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: n, openFile: l } = st(), i = k([]), r = k(!1), u = k(null), d = k(!1), m = k("production"), v = k(null), g = k(!1);
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
    return Xe(() => {
      w(), p();
    }), (S, $) => (a(), c(H, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (P) => d.value = !0)
          }, {
            actions: h(() => [
              x(fe, {
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
              x(fe, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: r.value
              }, {
                default: h(() => [
                  b(f(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: h(() => [
          r.value ? (a(), R(Ps, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (a(), R(Rs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), c(H, { key: 2 }, [
            i.value.length === 0 ? (a(), R(ns, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), R(Rr, {
              key: 1,
              logs: i.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      x(as, {
        show: d.value,
        title: "About Environment Logs",
        onClose: $[2] || ($[2] = (P) => d.value = !1)
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
          x(fe, {
            variant: "primary",
            onClick: $[1] || ($[1] = (P) => d.value = !1)
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
}), Q2 = { class: "env-title" }, Z2 = {
  key: 0,
  class: "current-badge"
}, e$ = {
  key: 0,
  class: "branch-info"
}, t$ = /* @__PURE__ */ ke({
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
    }, so({
      icon: h(() => [
        b(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        t("div", Q2, [
          t("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), c("span", Z2, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (a(), c("span", e$, [
          o[0] || (o[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          b(" " + f(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: h(() => [
        Ke(s.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: h(() => [
          x(dt, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          x(dt, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          x(dt, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (a(), R(dt, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), s$ = /* @__PURE__ */ be(t$, [["__scopeId", "data-v-9231917a"]]), o$ = { class: "env-details" }, n$ = { class: "status-row" }, a$ = {
  key: 0,
  class: "detail-row"
}, l$ = { class: "value mono" }, i$ = {
  key: 1,
  class: "detail-row"
}, r$ = { class: "value mono small" }, c$ = { class: "detail-row" }, u$ = { class: "value" }, d$ = { class: "detail-row" }, f$ = { class: "value" }, m$ = { class: "detail-row" }, v$ = { class: "value" }, p$ = {
  key: 2,
  class: "section-divider"
}, g$ = {
  key: 3,
  class: "detail-row"
}, h$ = { class: "value" }, y$ = {
  key: 4,
  class: "detail-row"
}, w$ = { class: "value" }, _$ = { class: "footer-actions" }, k$ = /* @__PURE__ */ ke({
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
    return (l, i) => (a(), R(mt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: i[2] || (i[2] = (r) => o("close"))
    }, {
      body: h(() => [
        t("div", o$, [
          t("div", n$, [
            i[3] || (i[3] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Te(["status-badge", e.environment.is_current ? "current" : "inactive"])
            }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          e.environment.current_branch ? (a(), c("div", a$, [
            i[4] || (i[4] = t("span", { class: "label" }, "Branch:", -1)),
            t("span", l$, f(e.environment.current_branch), 1)
          ])) : y("", !0),
          e.environment.path ? (a(), c("div", i$, [
            i[5] || (i[5] = t("span", { class: "label" }, "Path:", -1)),
            t("span", r$, f(e.environment.path), 1)
          ])) : y("", !0),
          i[11] || (i[11] = t("div", { class: "section-divider" }, null, -1)),
          t("div", c$, [
            i[6] || (i[6] = t("span", { class: "label" }, "Workflows:", -1)),
            t("span", u$, f(e.environment.workflow_count), 1)
          ]),
          t("div", d$, [
            i[7] || (i[7] = t("span", { class: "label" }, "Nodes:", -1)),
            t("span", f$, f(e.environment.node_count), 1)
          ]),
          t("div", m$, [
            i[8] || (i[8] = t("span", { class: "label" }, "Models:", -1)),
            t("span", v$, f(e.environment.model_count), 1)
          ]),
          e.environment.created_at || e.environment.last_used ? (a(), c("div", p$)) : y("", !0),
          e.environment.created_at ? (a(), c("div", g$, [
            i[9] || (i[9] = t("span", { class: "label" }, "Created:", -1)),
            t("span", h$, f(n(e.environment.created_at)), 1)
          ])) : y("", !0),
          e.environment.last_used ? (a(), c("div", y$, [
            i[10] || (i[10] = t("span", { class: "label" }, "Last Used:", -1)),
            t("span", w$, f(n(e.environment.last_used)), 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", _$, [
          e.canDelete ? (a(), R(Le, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: i[0] || (i[0] = (r) => o("delete", e.environment.name))
          }, {
            default: h(() => [...i[12] || (i[12] = [
              b(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          i[14] || (i[14] = t("div", { class: "footer-spacer" }, null, -1)),
          x(Le, {
            variant: "secondary",
            size: "sm",
            onClick: i[1] || (i[1] = (r) => o("close"))
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
}), b$ = /* @__PURE__ */ be(k$, [["__scopeId", "data-v-59855453"]]), Mr = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Dr = "3.12", al = [
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
], Lr = "auto", $$ = { class: "progress-bar" }, C$ = /* @__PURE__ */ ke({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = A(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (n, l) => (a(), c("div", $$, [
      t("div", {
        class: Te(["progress-fill", e.variant]),
        style: Kt({ width: o.value })
      }, null, 6)
    ]));
  }
}), Zn = /* @__PURE__ */ be(C$, [["__scopeId", "data-v-1beb0512"]]), x$ = { class: "task-progress" }, S$ = { class: "progress-info" }, I$ = { class: "progress-percentage" }, E$ = { class: "progress-message" }, T$ = {
  key: 0,
  class: "progress-steps"
}, P$ = { class: "step-icon" }, R$ = { class: "step-label" }, M$ = /* @__PURE__ */ ke({
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
    return (l, i) => (a(), c("div", x$, [
      x(Zn, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", S$, [
        t("span", I$, f(e.progress) + "%", 1),
        t("span", E$, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), c("div", T$, [
        (a(!0), c(H, null, $e(e.steps, (r) => (a(), c("div", {
          key: r.id,
          class: Te(["step", o(r.id)])
        }, [
          t("span", P$, f(n(r.id)), 1),
          t("span", R$, f(r.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Nn = /* @__PURE__ */ be(M$, [["__scopeId", "data-v-9d1de66c"]]), D$ = {
  key: 0,
  class: "create-env-form"
}, L$ = { class: "form-field" }, O$ = { class: "form-field" }, A$ = ["value"], U$ = { class: "form-field" }, N$ = ["disabled"], z$ = ["value"], F$ = { class: "form-field" }, B$ = ["value"], V$ = { class: "form-field form-field--checkbox" }, W$ = { class: "form-checkbox" }, G$ = {
  key: 1,
  class: "create-env-progress"
}, j$ = { class: "creating-intro" }, H$ = {
  key: 0,
  class: "progress-warning"
}, K$ = {
  key: 1,
  class: "create-error"
}, q$ = { class: "error-message" }, Y$ = {
  key: 1,
  class: "footer-status"
}, J$ = 10, X$ = /* @__PURE__ */ ke({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: i } = st(), r = k(""), u = k(Dr), d = k("latest"), m = k(Lr), v = k(!1), g = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = k(!1), p = k(!1), _ = k({
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
    ], D = k(null);
    function E() {
      p.value || o("close");
    }
    async function C() {
      const T = r.value.trim();
      if (T) {
        p.value = !0, _.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const M = {
            name: T,
            python_version: u.value,
            comfyui_version: d.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, se = await l(M);
          se.status === "started" ? G() : se.status === "error" && (_.value = {
            progress: 0,
            message: se.message || "Failed to start creation",
            error: se.message
          });
        } catch (M) {
          _.value = {
            progress: 0,
            message: M instanceof Error ? M.message : "Unknown error",
            error: M instanceof Error ? M.message : "Unknown error"
          };
        }
      }
    }
    function G() {
      S || ($ = 0, S = window.setInterval(async () => {
        try {
          const T = await i();
          $ = 0, _.value = {
            progress: T.progress ?? 0,
            message: T.message,
            phase: T.phase,
            error: T.error
          }, T.state === "complete" ? (K(), o("created", T.environment_name || r.value.trim(), v.value)) : T.state === "error" ? (K(), _.value.error = T.error || T.message) : T.state === "idle" && p.value && (K(), _.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= J$ && (K(), _.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function K() {
      S && (clearInterval(S), S = null);
    }
    function N() {
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
    return Xe(async () => {
      var T;
      await kt(), (T = D.value) == null || T.focus(), I();
    }), oo(() => {
      K();
    }), (T, M) => (a(), R(mt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !p.value,
      onClose: E
    }, {
      body: h(() => [
        p.value ? (a(), c("div", G$, [
          t("p", j$, [
            M[11] || (M[11] = b(" Creating environment ", -1)),
            t("strong", null, f(r.value), 1),
            M[12] || (M[12] = b("... ", -1))
          ]),
          x(Nn, {
            progress: _.value.progress,
            message: _.value.message,
            "current-phase": _.value.phase,
            variant: _.value.error ? "error" : "default",
            "show-steps": !0,
            steps: P
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          _.value.error ? y("", !0) : (a(), c("p", H$, " This may take several minutes. Please wait... ")),
          _.value.error ? (a(), c("div", K$, [
            t("p", q$, f(_.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), c("div", D$, [
          t("div", L$, [
            M[6] || (M[6] = t("label", { class: "form-label" }, "Name", -1)),
            qe(t("input", {
              ref_key: "nameInput",
              ref: D,
              "onUpdate:modelValue": M[0] || (M[0] = (se) => r.value = se),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: es(C, ["enter"])
            }, null, 544), [
              [zt, r.value]
            ])
          ]),
          t("div", O$, [
            M[7] || (M[7] = t("label", { class: "form-label" }, "Python Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": M[1] || (M[1] = (se) => u.value = se),
              class: "form-select"
            }, [
              (a(!0), c(H, null, $e(We(Mr), (se) => (a(), c("option", {
                key: se,
                value: se
              }, f(se), 9, A$))), 128))
            ], 512), [
              [hs, u.value]
            ])
          ]),
          t("div", U$, [
            M[8] || (M[8] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": M[2] || (M[2] = (se) => d.value = se),
              class: "form-select",
              disabled: w.value
            }, [
              (a(!0), c(H, null, $e(g.value, (se) => (a(), c("option", {
                key: se.tag_name,
                value: se.tag_name
              }, f(se.name), 9, z$))), 128))
            ], 8, N$), [
              [hs, d.value]
            ])
          ]),
          t("div", F$, [
            M[9] || (M[9] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            qe(t("select", {
              "onUpdate:modelValue": M[3] || (M[3] = (se) => m.value = se),
              class: "form-select"
            }, [
              (a(!0), c(H, null, $e(We(al), (se) => (a(), c("option", {
                key: se,
                value: se
              }, f(se) + f(se === "auto" ? " (detect GPU)" : ""), 9, B$))), 128))
            ], 512), [
              [hs, m.value]
            ])
          ]),
          t("div", V$, [
            t("label", W$, [
              qe(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": M[4] || (M[4] = (se) => v.value = se)
              }, null, 512), [
                [en, v.value]
              ]),
              M[10] || (M[10] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        p.value ? (a(), c(H, { key: 1 }, [
          _.value.error ? (a(), R(Le, {
            key: 0,
            variant: "secondary",
            onClick: N
          }, {
            default: h(() => [...M[15] || (M[15] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), c("span", Y$, " Creating environment... "))
        ], 64)) : (a(), c(H, { key: 0 }, [
          x(Le, {
            variant: "primary",
            disabled: !r.value.trim(),
            onClick: C
          }, {
            default: h(() => [...M[13] || (M[13] = [
              b(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          x(Le, {
            variant: "secondary",
            onClick: M[5] || (M[5] = (se) => o("close"))
          }, {
            default: h(() => [...M[14] || (M[14] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), Q$ = /* @__PURE__ */ be(X$, [["__scopeId", "data-v-f37eaa42"]]), Z$ = /* @__PURE__ */ ke({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getEnvironments: l } = st(), i = k([]), r = k(!1), u = k(null), d = k(""), m = k(!1), v = k(!1), g = k(null), w = A(() => {
      if (!d.value.trim()) return i.value;
      const D = d.value.toLowerCase();
      return i.value.filter(
        (E) => {
          var C;
          return E.name.toLowerCase().includes(D) || ((C = E.current_branch) == null ? void 0 : C.toLowerCase().includes(D));
        }
      );
    });
    function p(D, E) {
      v.value = !1, n("created", D, E);
    }
    function _() {
      v.value = !0;
    }
    function S(D) {
      g.value = D;
    }
    function $(D) {
      g.value = null, n("delete", D);
    }
    async function P() {
      r.value = !0, u.value = null;
      try {
        i.value = await l();
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to load environments";
      } finally {
        r.value = !1;
      }
    }
    return Xe(P), s({
      loadEnvironments: P,
      openCreateModal: _
    }), (D, E) => (a(), c(H, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (C) => m.value = !0)
          }, {
            actions: h(() => [
              x(fe, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: h(() => [...E[6] || (E[6] = [
                  b(" Create ", -1)
                ])]),
                _: 1
              }),
              x(fe, {
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
          x($o, {
            modelValue: d.value,
            "onUpdate:modelValue": E[1] || (E[1] = (C) => d.value = C),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          r.value ? (a(), R(Ps, {
            key: 0,
            message: "Loading environments..."
          })) : u.value ? (a(), R(Rs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (a(), c(H, { key: 2 }, [
            w.value.length ? (a(), R(it, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: h(() => [
                (a(!0), c(H, null, $e(w.value, (C) => (a(), R(s$, {
                  key: C.name,
                  "environment-name": C.name,
                  "is-current": C.is_current,
                  "current-branch": C.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    C.is_current ? y("", !0) : (a(), R(fe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (G) => D.$emit("switch", C.name)
                    }, {
                      default: h(() => [...E[8] || (E[8] = [
                        b(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    x(fe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (G) => S(C)
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
            w.value.length ? y("", !0) : (a(), R(ns, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, so({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  x(fe, {
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
      x(as, {
        show: m.value,
        title: "About Environments",
        onClose: E[3] || (E[3] = (C) => m.value = !1)
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
          x(fe, {
            variant: "secondary",
            onClick: E[2] || (E[2] = (C) => m.value = !1)
          }, {
            default: h(() => [...E[12] || (E[12] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      g.value ? (a(), R(b$, {
        key: 0,
        environment: g.value,
        "can-delete": i.value.length > 1,
        onClose: E[4] || (E[4] = (C) => g.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : y("", !0),
      v.value ? (a(), R(Q$, {
        key: 1,
        onClose: E[5] || (E[5] = (C) => v.value = !1),
        onCreated: p
      })) : y("", !0)
    ], 64));
  }
}), eC = /* @__PURE__ */ be(Z$, [["__scopeId", "data-v-f95999f4"]]), tC = { class: "file-path" }, sC = { class: "file-path-text" }, oC = ["title"], nC = /* @__PURE__ */ ke({
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
    return (l, i) => (a(), c("div", tC, [
      i[0] || (i[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", sC, f(e.path), 1),
      e.copyable ? (a(), c("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, f(o.value ? "✓" : "📋"), 9, oC)) : y("", !0)
    ]));
  }
}), aC = /* @__PURE__ */ be(nC, [["__scopeId", "data-v-f0982173"]]), lC = { class: "export-blocked" }, iC = { class: "issues-list" }, rC = { class: "issue-message" }, cC = {
  key: 0,
  class: "issue-details"
}, uC = ["onClick"], dC = { class: "issue-fix" }, fC = /* @__PURE__ */ ke({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(e) {
    const s = e, o = Vs({});
    function n(l) {
      const i = s.issues[l];
      return o[l] || i.details.length <= 3 ? i.details : i.details.slice(0, 3);
    }
    return (l, i) => (a(), R(mt, {
      title: "Cannot Export",
      size: "md",
      onClose: i[1] || (i[1] = (r) => l.$emit("close"))
    }, {
      body: h(() => [
        t("div", lC, [
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
          t("div", iC, [
            (a(!0), c(H, null, $e(e.issues, (r, u) => (a(), c("div", {
              key: u,
              class: "issue-item"
            }, [
              t("div", rC, f(r.message), 1),
              r.details.length ? (a(), c("div", cC, [
                (a(!0), c(H, null, $e(n(u), (d, m) => (a(), c("div", {
                  key: m,
                  class: "issue-detail"
                }, f(d), 1))), 128)),
                r.details.length > 3 && !o[u] ? (a(), c("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => o[u] = !0
                }, " +" + f(r.details.length - 3) + " more ", 9, uC)) : y("", !0)
              ])) : y("", !0),
              t("div", dC, [
                r.type === "uncommitted_workflows" ? (a(), c(H, { key: 0 }, [
                  b(" Commit your workflow changes before exporting. ")
                ], 64)) : r.type === "uncommitted_git_changes" ? (a(), c(H, { key: 1 }, [
                  b(" Commit your changes before exporting. ")
                ], 64)) : r.type === "unresolved_issues" ? (a(), c(H, { key: 2 }, [
                  b(" Resolve all workflow issues before exporting. ")
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: h(() => [
        x(Le, {
          variant: "primary",
          onClick: i[0] || (i[0] = (r) => l.$emit("close"))
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
}), Or = /* @__PURE__ */ be(fC, [["__scopeId", "data-v-b52f5e32"]]), mC = { class: "export-warnings" }, vC = {
  key: 0,
  class: "success-header"
}, pC = { class: "warning-header" }, gC = { class: "warning-summary" }, hC = { class: "warning-title" }, yC = { class: "models-section" }, wC = { class: "models-list" }, _C = { class: "model-info" }, kC = { class: "model-filename" }, bC = { class: "model-workflows" }, $C = ["onClick"], CC = /* @__PURE__ */ ke({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = k(!1), i = k(null), r = A(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function u() {
      i.value = null, n("revalidate");
    }
    return (d, m) => (a(), c(H, null, [
      x(mt, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (v) => d.$emit("cancel"))
      }, {
        body: h(() => [
          t("div", mC, [
            e.models.length === 0 ? (a(), c("div", vC, [...m[4] || (m[4] = [
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
            ])])) : (a(), c(H, { key: 1 }, [
              t("div", pC, [
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
                t("div", gC, [
                  t("h3", hC, f(e.models.length) + " model" + f(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", yC, [
                t("div", wC, [
                  (a(!0), c(H, null, $e(r.value, (v) => (a(), c("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", _C, [
                      t("div", kC, f(v.filename), 1),
                      t("div", bC, " Used by: " + f(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (g) => i.value = v.hash
                    }, " Add Source ", 8, $C)
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
        footer: h(() => [
          x(Le, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (v) => d.$emit("cancel"))
          }, {
            default: h(() => [...m[7] || (m[7] = [
              b(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          x(Le, {
            variant: "primary",
            onClick: m[2] || (m[2] = (v) => d.$emit("confirm"))
          }, {
            default: h(() => [
              b(f(e.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      i.value ? (a(), R(ol, {
        key: 0,
        identifier: i.value,
        onClose: u
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Ar = /* @__PURE__ */ be(CC, [["__scopeId", "data-v-b698d882"]]), xC = { class: "export-card" }, SC = { class: "export-path-row" }, IC = { class: "export-actions" }, EC = {
  key: 1,
  class: "export-warning"
}, TC = /* @__PURE__ */ ke({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = st(), n = k(""), l = k(!1), i = k(!1), r = k(!1), u = k(null), d = k(!1), m = k(null), v = k(!1), g = k(!1), w = A(() => l.value ? "Validating..." : i.value ? "Exporting..." : "Export Environment");
    async function p() {
      l.value = !0, u.value = null;
      try {
        const E = await s();
        m.value = E, E.can_export ? E.warnings.models_without_sources.length > 0 ? g.value = !0 : await $() : v.value = !0;
      } catch (E) {
        u.value = {
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
        u.value = E;
      } catch (E) {
        u.value = {
          status: "error",
          message: E instanceof Error ? E.message : "Export failed"
        };
      } finally {
        i.value = !1;
      }
    }
    async function P() {
      var E;
      if ((E = u.value) != null && E.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (C) {
          console.error("Failed to copy path:", C);
        }
    }
    async function D() {
      var E;
      if ((E = u.value) != null && E.path) {
        r.value = !0;
        try {
          const C = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!C.ok)
            throw new Error(`Download failed: ${C.statusText}`);
          const G = await C.blob(), K = URL.createObjectURL(G), N = u.value.path.split("/").pop() || "environment-export.tar.gz", I = document.createElement("a");
          I.href = K, I.download = N, document.body.appendChild(I), I.click(), document.body.removeChild(I), URL.revokeObjectURL(K);
        } catch (C) {
          console.error("Failed to download:", C), alert(`Download failed: ${C instanceof Error ? C.message : "Unknown error"}`);
        } finally {
          r.value = !1;
        }
      }
    }
    return (E, C) => (a(), c(H, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (G) => d.value = !0)
          })
        ]),
        content: h(() => [
          x(it, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              t("div", xC, [
                C[7] || (C[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", SC, [
                  x(An, {
                    modelValue: n.value,
                    "onUpdate:modelValue": C[1] || (C[1] = (G) => n.value = G),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", IC, [
                  x(fe, {
                    variant: "primary",
                    size: "md",
                    loading: l.value || i.value,
                    disabled: l.value || i.value,
                    onClick: p
                  }, {
                    default: h(() => [
                      C[6] || (C[6] = t("svg", {
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
          u.value ? (a(), R(it, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              x(Et, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, so({
                icon: h(() => [
                  b(f(u.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  b(f(u.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: h(() => [
                  b(f(u.value.status === "success" ? "Your environment has been exported" : u.value.message), 1)
                ]),
                _: 2
              }, [
                u.value.status === "success" ? {
                  name: "details",
                  fn: h(() => [
                    x(dt, { label: "Saved to:" }, {
                      default: h(() => [
                        x(aC, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (a(), R(dt, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (a(), c("div", EC, [...C[8] || (C[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    x(fe, {
                      variant: "primary",
                      size: "sm",
                      loading: r.value,
                      onClick: D
                    }, {
                      default: h(() => [...C[9] || (C[9] = [
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
                    x(fe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: P
                    }, {
                      default: h(() => [...C[10] || (C[10] = [
                        b(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    x(fe, {
                      variant: "ghost",
                      size: "sm",
                      onClick: C[2] || (C[2] = (G) => u.value = null)
                    }, {
                      default: h(() => [...C[11] || (C[11] = [
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
      x(as, {
        show: d.value,
        title: "What Gets Exported",
        onClose: C[3] || (C[3] = (G) => d.value = !1)
      }, {
        content: h(() => [...C[12] || (C[12] = [
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
      v.value && m.value ? (a(), R(Or, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: C[4] || (C[4] = (G) => v.value = !1)
      }, null, 8, ["issues"])) : y("", !0),
      g.value && m.value ? (a(), R(Ar, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: _,
        onCancel: C[5] || (C[5] = (G) => g.value = !1),
        onRevalidate: S
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), PC = /* @__PURE__ */ be(TC, [["__scopeId", "data-v-f4d120f2"]]), RC = { class: "file-input-wrapper" }, MC = ["accept", "multiple", "disabled"], DC = /* @__PURE__ */ ke({
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
    }), (u, d) => (a(), c("div", RC, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: r
      }, null, 40, MC),
      x(fe, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: i
      }, {
        default: h(() => [
          Ke(u.$slots, "default", {}, () => [
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
}), LC = /* @__PURE__ */ be(DC, [["__scopeId", "data-v-cd192091"]]), OC = {
  key: 0,
  class: "drop-zone-empty"
}, AC = { class: "drop-zone-text" }, UC = { class: "drop-zone-primary" }, NC = { class: "drop-zone-secondary" }, zC = { class: "drop-zone-actions" }, FC = {
  key: 1,
  class: "drop-zone-file"
}, BC = { class: "file-info" }, VC = { class: "file-details" }, WC = { class: "file-name" }, GC = { class: "file-size" }, jC = /* @__PURE__ */ ke({
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
    const o = s, n = k(!1), l = k(null), i = k(0), r = A(() => l.value !== null), u = A(() => {
      var $;
      return (($ = l.value) == null ? void 0 : $.name) || "";
    }), d = A(() => {
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
      var D;
      $.stopPropagation(), i.value = 0, n.value = !1;
      const P = (D = $.dataTransfer) == null ? void 0 : D.files;
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
      class: Te(["file-drop-zone", { "drop-active": n.value, "has-file": r.value }]),
      onDragenter: at(m, ["prevent"]),
      onDragover: at(v, ["prevent"]),
      onDragleave: at(g, ["prevent"]),
      onDrop: at(w, ["prevent"])
    }, [
      r.value ? (a(), c("div", FC, [
        t("div", BC, [
          P[1] || (P[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", VC, [
            t("div", WC, f(u.value), 1),
            t("div", GC, f(d.value), 1)
          ])
        ]),
        x(fe, {
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
      ])) : (a(), c("div", OC, [
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
        t("div", AC, [
          t("p", UC, f(e.primaryText), 1),
          t("p", NC, f(e.secondaryText), 1)
        ]),
        t("div", zC, [
          x(LC, {
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
}), HC = /* @__PURE__ */ be(jC, [["__scopeId", "data-v-0f79cb86"]]), KC = { class: "import-preview" }, qC = { class: "preview-header" }, YC = {
  key: 0,
  class: "source-env"
}, JC = { class: "preview-content" }, XC = { class: "preview-section" }, QC = { class: "section-header" }, ZC = { class: "section-info" }, ex = { class: "section-count" }, tx = {
  key: 0,
  class: "item-list"
}, sx = { class: "item-name" }, ox = {
  key: 0,
  class: "item-more"
}, nx = { class: "preview-section" }, ax = { class: "section-header" }, lx = { class: "section-info" }, ix = { class: "section-count" }, rx = {
  key: 0,
  class: "item-list"
}, cx = { class: "item-details" }, ux = { class: "item-name" }, dx = { class: "item-meta" }, fx = {
  key: 0,
  class: "item-more"
}, mx = { class: "preview-section" }, vx = { class: "section-header" }, px = { class: "section-info" }, gx = { class: "section-count" }, hx = {
  key: 0,
  class: "item-list"
}, yx = { class: "item-name" }, wx = {
  key: 0,
  class: "item-more"
}, _x = {
  key: 0,
  class: "preview-section"
}, kx = { class: "git-info" }, bx = /* @__PURE__ */ ke({
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
    const s = e, o = A(() => s.workflows.length), n = A(() => s.models.length), l = A(() => s.nodes.length);
    function i(r) {
      return r < 1024 ? `${r} B` : r < 1024 * 1024 ? `${(r / 1024).toFixed(1)} KB` : r < 1024 * 1024 * 1024 ? `${(r / (1024 * 1024)).toFixed(1)} MB` : `${(r / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (r, u) => (a(), c("div", KC, [
      t("div", qC, [
        x(Ut, null, {
          default: h(() => [...u[0] || (u[0] = [
            b("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), c("span", YC, [
          u[1] || (u[1] = b(" From: ", -1)),
          x(Ra, null, {
            default: h(() => [
              b(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", JC, [
        t("div", XC, [
          t("div", QC, [
            u[3] || (u[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", ZC, [
              u[2] || (u[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", ex, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), c("div", tx, [
            (a(!0), c(H, null, $e(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), c("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", sx, f(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), c("div", ox, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", nx, [
          t("div", ax, [
            u[6] || (u[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", lx, [
              u[5] || (u[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", ix, f(n.value) + " file" + f(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), c("div", rx, [
            (a(!0), c(H, null, $e(e.models.slice(0, e.maxPreviewItems), (d) => (a(), c("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", cx, [
                t("span", ux, f(d.filename), 1),
                t("span", dx, f(i(d.size)) + " • " + f(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), c("div", fx, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", mx, [
          t("div", vx, [
            u[9] || (u[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", px, [
              u[8] || (u[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", gx, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), c("div", hx, [
            (a(!0), c(H, null, $e(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), c("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", yx, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), c("div", wx, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), c("div", _x, [
          u[11] || (u[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", kx, [
            e.gitBranch ? (a(), R(dt, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                x(Ra, null, {
                  default: h(() => [
                    b(f(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (a(), R(dt, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                x(br, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), $x = /* @__PURE__ */ be(bx, [["__scopeId", "data-v-182fe113"]]), Cx = { class: "import-config" }, xx = { class: "config-container" }, Sx = { class: "config-field" }, Ix = { class: "input-wrapper" }, Ex = ["value"], Tx = {
  key: 0,
  class: "validating-indicator"
}, Px = {
  key: 1,
  class: "valid-indicator"
}, Rx = {
  key: 0,
  class: "field-error"
}, Mx = { class: "config-field" }, Dx = { class: "strategy-options" }, Lx = ["value", "checked", "onChange"], Ox = { class: "strategy-content" }, Ax = { class: "strategy-label" }, Ux = { class: "strategy-description" }, Nx = { class: "config-field switch-field" }, zx = { class: "switch-label" }, Fx = ["checked"], Bx = { class: "advanced-section" }, Vx = { class: "advanced-content" }, Wx = { class: "config-field" }, Gx = ["value"], jx = ["value"], Hx = /* @__PURE__ */ ke({
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
    gt(() => o.nameError, (v) => {
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
      const g = v.target.value;
      n("update:name", g), i.value = !1, u && clearTimeout(u), g.length > 0 ? (l.value = !0, u = setTimeout(() => {
        n("validate-name", g);
      }, 400)) : l.value = !1;
    }
    function m() {
      o.name.length > 0 && n("validate-name", o.name);
    }
    return (v, g) => (a(), c("div", Cx, [
      x(Ut, null, {
        default: h(() => [...g[2] || (g[2] = [
          b("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", xx, [
        t("div", Sx, [
          x(xn, { required: "" }, {
            default: h(() => [...g[3] || (g[3] = [
              b("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", Ix, [
            t("input", {
              type: "text",
              class: Te(["name-input", { error: e.nameError || e.name.length === 0, valid: i.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: m
            }, null, 42, Ex),
            l.value ? (a(), c("span", Tx, "...")) : i.value ? (a(), c("span", Px, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), c("div", Rx, f(e.nameError), 1)) : y("", !0),
          g[4] || (g[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", Mx, [
          x(xn, null, {
            default: h(() => [...g[5] || (g[5] = [
              b("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", Dx, [
            (a(), c(H, null, $e(r, (w) => t("label", {
              key: w.value,
              class: Te(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (p) => n("update:modelStrategy", w.value)
              }, null, 40, Lx),
              t("div", Ox, [
                t("span", Ax, f(w.label), 1),
                t("span", Ux, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", Nx, [
          t("label", zx, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: g[0] || (g[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, Fx),
            g[6] || (g[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", Bx, [
          g[8] || (g[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", Vx, [
            t("div", Wx, [
              x(xn, null, {
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
                (a(!0), c(H, null, $e(We(al), (w) => (a(), c("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, jx))), 128))
              ], 40, Gx)
            ])
          ])
        ])
      ])
    ]));
  }
}), Kx = /* @__PURE__ */ be(Hx, [["__scopeId", "data-v-89ea06a1"]]), qx = { class: "import-flow" }, Yx = {
  key: 0,
  class: "import-empty"
}, Jx = { class: "git-import-section" }, Xx = { class: "git-url-input-row" }, Qx = ["disabled"], Zx = {
  key: 0,
  class: "git-error"
}, e3 = {
  key: 1,
  class: "import-configure"
}, t3 = { class: "selected-file-bar" }, s3 = {
  key: 0,
  class: "file-bar-content"
}, o3 = { class: "file-bar-info" }, n3 = { class: "file-bar-name" }, a3 = { class: "file-bar-size" }, l3 = {
  key: 1,
  class: "file-bar-content"
}, i3 = { class: "file-bar-info" }, r3 = { class: "file-bar-name" }, c3 = {
  key: 0,
  class: "preview-loading"
}, u3 = { class: "import-actions" }, d3 = {
  key: 2,
  class: "import-progress"
}, f3 = { class: "creating-intro" }, m3 = {
  key: 0,
  class: "progress-warning"
}, v3 = {
  key: 1,
  class: "import-error"
}, p3 = { class: "error-message" }, g3 = {
  key: 3,
  class: "import-complete"
}, h3 = { class: "complete-message" }, y3 = { class: "complete-title" }, w3 = { class: "complete-details" }, _3 = { class: "complete-actions" }, k3 = /* @__PURE__ */ ke({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var re, F, ee, he;
    const n = e, l = o, { previewTarballImport: i, previewGitImport: r, validateEnvironmentName: u, executeImport: d, executeGitImport: m, getImportProgress: v } = st();
    let g = null;
    const w = k(null), p = k(n.resumeImport ?? !1), _ = k(!1), S = k(!1), $ = k(""), P = k(!1), D = k(null), E = k(""), C = k(null), G = k(!1), K = k(null), N = k(null), I = k({
      name: ((re = n.initialProgress) == null ? void 0 : re.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), T = k(null), M = k({
      message: ((F = n.initialProgress) == null ? void 0 : F.message) ?? "Preparing import...",
      phase: ((ee = n.initialProgress) == null ? void 0 : ee.phase) ?? "",
      progress: ((he = n.initialProgress) == null ? void 0 : he.progress) ?? 0,
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
    ], X = A(() => {
      if (!N.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const pe = N.value;
      return {
        sourceEnvironment: pe.comfyui_version ? `ComfyUI ${pe.comfyui_version}` : "Unknown",
        workflows: pe.workflows.map((me) => me.name),
        models: pe.models.map((me) => ({
          filename: me.filename,
          size: 0,
          type: me.relative_path.split("/")[0] || "model"
        })),
        nodes: pe.nodes.map((me) => me.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), j = A(() => !P.value && !D.value && N.value && I.value.name.length > 0 && !T.value && (w.value || C.value));
    async function oe(pe) {
      w.value = pe, P.value = !0, D.value = null, N.value = null;
      try {
        const me = await i(pe);
        N.value = me;
      } catch (me) {
        D.value = me instanceof Error ? me.message : "Failed to analyze file", console.error("Preview error:", me);
      } finally {
        P.value = !1;
      }
    }
    function Z() {
      w.value = null, C.value = null, E.value = "", K.value = null, _.value = !1, S.value = !1, $.value = "", N.value = null, D.value = null, I.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, T.value = null, l("source-cleared");
    }
    function U() {
      Ae(), Z(), p.value = !1, P.value = !1, G.value = !1, M.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function W() {
      if (E.value.trim()) {
        G.value = !0, K.value = null;
        try {
          const pe = await r(E.value.trim());
          C.value = E.value.trim(), N.value = pe;
        } catch (pe) {
          K.value = pe instanceof Error ? pe.message : "Failed to analyze repository";
        } finally {
          G.value = !1;
        }
      }
    }
    function O(pe) {
      try {
        const me = new URL(pe);
        return me.host + me.pathname.replace(/\.git$/, "");
      } catch {
        return pe;
      }
    }
    async function ie(pe) {
      if (!pe) {
        T.value = "Environment name is required";
        return;
      }
      try {
        const me = await u(pe);
        T.value = me.valid ? null : me.error || "Invalid name";
      } catch {
        T.value = "Failed to validate name";
      }
    }
    async function ge() {
      if (I.value.name && !(!w.value && !C.value)) {
        p.value = !0, _.value = !1, M.value = { message: `Creating environment '${I.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let pe;
          if (w.value)
            pe = await d(
              w.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else if (C.value)
            pe = await m(
              C.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          pe.status === "started" ? Me() : (S.value = !1, $.value = pe.message, p.value = !1, _.value = !0);
        } catch (pe) {
          S.value = !1, $.value = pe instanceof Error ? pe.message : "Unknown error occurred during import", p.value = !1, _.value = !0;
        }
      }
    }
    async function Me() {
      if (g) return;
      const pe = async () => {
        try {
          const De = await v();
          return M.value = {
            message: De.message,
            phase: De.phase || "",
            progress: De.progress ?? (De.state === "importing" ? 50 : 0),
            error: De.error || null
          }, De.state === "complete" ? (Ae(), S.value = !0, $.value = `Environment '${De.environment_name}' created successfully`, p.value = !1, _.value = !0, De.environment_name && l("import-complete", De.environment_name, I.value.switchAfterImport), !1) : De.state === "error" ? (Ae(), S.value = !1, $.value = De.error || De.message, p.value = !1, _.value = !0, !1) : !0;
        } catch (De) {
          return console.error("Failed to poll import progress:", De), !0;
        }
      };
      await pe() && (g = setInterval(async () => {
        await pe() || Ae();
      }, 2e3));
    }
    function Ae() {
      g && (clearInterval(g), g = null);
    }
    function de(pe) {
      return pe < 1024 ? `${pe} B` : pe < 1024 * 1024 ? `${(pe / 1024).toFixed(1)} KB` : pe < 1024 * 1024 * 1024 ? `${(pe / (1024 * 1024)).toFixed(1)} MB` : `${(pe / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Xe(async () => {
      try {
        const pe = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", pe.state, pe), pe.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", pe.environment_name), p.value = !0, I.value.name = pe.environment_name || I.value.name || "", M.value = {
          progress: pe.progress ?? 0,
          message: pe.message || "Importing...",
          phase: pe.phase || "",
          error: null
        }, Me());
      } catch (pe) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", pe);
      }
    }), s({
      handleReset: U,
      isImporting: p,
      canImport: j
    }), (pe, me) => {
      var De;
      return a(), c("div", qx, [
        !w.value && !C.value && !p.value ? (a(), c("div", Yx, [
          x(HC, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: oe
          }),
          me[7] || (me[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", Jx, [
            me[5] || (me[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", Xx, [
              qe(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": me[0] || (me[0] = (Re) => E.value = Re),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: es(W, ["enter"]),
                disabled: G.value
              }, null, 40, Qx), [
                [zt, E.value]
              ]),
              x(fe, {
                variant: "primary",
                size: "sm",
                disabled: !E.value.trim() || G.value,
                onClick: W
              }, {
                default: h(() => [
                  b(f(G.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            K.value ? (a(), c("div", Zx, f(K.value), 1)) : y("", !0),
            me[6] || (me[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || C.value) && !p.value && !_.value ? (a(), c("div", e3, [
          t("div", t3, [
            w.value ? (a(), c("div", s3, [
              me[8] || (me[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", o3, [
                t("div", n3, f(w.value.name), 1),
                t("div", a3, f(de(w.value.size)), 1)
              ])
            ])) : C.value ? (a(), c("div", l3, [
              me[10] || (me[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", i3, [
                t("div", r3, f(O(C.value)), 1),
                me[9] || (me[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            x(fe, {
              variant: "ghost",
              size: "sm",
              onClick: Z
            }, {
              default: h(() => [...me[11] || (me[11] = [
                b(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          P.value ? (a(), c("div", c3, [...me[12] || (me[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : D.value ? (a(), R(Jt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [D.value]
          }, null, 8, ["details"])) : N.value ? (a(), R($x, {
            key: 2,
            "source-environment": X.value.sourceEnvironment,
            workflows: X.value.workflows,
            models: X.value.models,
            nodes: X.value.nodes,
            "git-branch": X.value.gitBranch,
            "git-commit": X.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          N.value ? (a(), R(Kx, {
            key: 3,
            name: I.value.name,
            "onUpdate:name": me[1] || (me[1] = (Re) => I.value.name = Re),
            "model-strategy": I.value.modelStrategy,
            "onUpdate:modelStrategy": me[2] || (me[2] = (Re) => I.value.modelStrategy = Re),
            "torch-backend": I.value.torchBackend,
            "onUpdate:torchBackend": me[3] || (me[3] = (Re) => I.value.torchBackend = Re),
            "switch-after-import": I.value.switchAfterImport,
            "onUpdate:switchAfterImport": me[4] || (me[4] = (Re) => I.value.switchAfterImport = Re),
            "name-error": T.value,
            onValidateName: ie
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          I.value.modelStrategy === "skip" && ((De = N.value) != null && De.models_needing_download) ? (a(), R(Jt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${N.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", u3, [
            x(fe, {
              variant: "secondary",
              size: "md",
              onClick: Z
            }, {
              default: h(() => [...me[13] || (me[13] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(fe, {
              variant: "primary",
              size: "md",
              disabled: !j.value,
              onClick: ge
            }, {
              default: h(() => [...me[14] || (me[14] = [
                b(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (a(), c("div", d3, [
          t("p", f3, [
            me[15] || (me[15] = b(" Importing environment ", -1)),
            t("strong", null, f(I.value.name), 1),
            me[16] || (me[16] = b("... ", -1))
          ]),
          x(Nn, {
            progress: M.value.progress,
            message: M.value.message,
            "current-phase": M.value.phase,
            variant: M.value.error ? "error" : "default",
            "show-steps": !0,
            steps: se
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          M.value.error ? y("", !0) : (a(), c("p", m3, " This may take several minutes. Please wait... ")),
          M.value.error ? (a(), c("div", v3, [
            t("p", p3, f(M.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), c("div", g3, [
          t("div", {
            class: Te(["complete-icon", S.value ? "success" : "error"])
          }, f(S.value ? "✓" : "✕"), 3),
          t("div", h3, [
            t("div", y3, f(S.value ? "Import Successful" : "Import Failed"), 1),
            t("div", w3, f($.value), 1)
          ]),
          t("div", _3, [
            x(fe, {
              variant: "primary",
              size: "md",
              onClick: U
            }, {
              default: h(() => [...me[17] || (me[17] = [
                b(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Ur = /* @__PURE__ */ be(k3, [["__scopeId", "data-v-72cbc04e"]]), b3 = /* @__PURE__ */ ke({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, n = k(!1);
    function l(i, r) {
      r && o("import-complete-switch", i);
    }
    return (i, r) => (a(), c(H, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: r[0] || (r[0] = (u) => n.value = !0)
          })
        ]),
        content: h(() => [
          x(Ur, { onImportComplete: l })
        ]),
        _: 1
      }),
      x(as, {
        show: n.value,
        title: "How Import Works",
        onClose: r[1] || (r[1] = (u) => n.value = !1)
      }, {
        content: h(() => [...r[2] || (r[2] = [
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
}), $3 = /* @__PURE__ */ be(b3, [["__scopeId", "data-v-e13bfe76"]]), yn = co(), C3 = 5e3, lo = k([]), va = k(!1), pa = k(null);
let Ro = null;
async function wn(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function Nr(e) {
  const s = A(
    () => lo.value.filter((p) => p.status === "running")
  ), o = A(
    () => lo.value.filter((p) => p.status === "deploying")
  ), n = A(
    () => lo.value.filter((p) => p.status === "stopped")
  ), l = A(
    () => s.value.length + o.value.length
  ), i = A(() => {
    const p = {
      deploying: 0,
      running: 1,
      stopped: 2,
      error: 3,
      terminated: 4
    };
    return [...lo.value].sort(
      (_, S) => (p[_.status] ?? 5) - (p[S.status] ?? 5)
    );
  });
  async function r() {
    va.value = !0, pa.value = null;
    try {
      let p;
      if (!yn) {
        const _ = await wn("/v2/comfygit/deploy/instances");
        if (!_.ok)
          throw new Error(`Failed to fetch instances: ${_.status}`);
        p = await _.json();
      }
      lo.value = p.instances;
    } catch (p) {
      pa.value = p instanceof Error ? p.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", p);
    } finally {
      va.value = !1;
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
      if (!yn) {
        const _ = u(p, "stop"), S = await wn(_, { method: "POST" });
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
      if (!yn) {
        const _ = u(p, "start"), S = await wn(_, { method: "POST" });
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
      if (!yn) {
        const _ = u(p, "terminate"), S = await wn(_, { method: "DELETE" });
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
  function g() {
    Ro || (Ro = window.setInterval(r, C3));
  }
  function w() {
    Ro && (clearInterval(Ro), Ro = null);
  }
  return gt(o, (p) => {
    p.length > 0 && g();
  }, { immediate: !0 }), e != null && e.autoStart && (r(), g()), {
    // State
    instances: lo,
    isLoading: va,
    error: pa,
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
    startPolling: g,
    stopPolling: w
  };
}
const x3 = { class: "instance-header" }, S3 = { class: "provider-badge" }, I3 = { class: "instance-name" }, E3 = {
  key: 0,
  class: "spinner"
}, T3 = { class: "instance-details" }, P3 = {
  key: 0,
  class: "detail"
}, R3 = {
  key: 1,
  class: "detail instance-url"
}, M3 = {
  key: 2,
  class: "detail"
}, D3 = {
  key: 3,
  class: "detail"
}, L3 = {
  key: 4,
  class: "detail total-cost"
}, O3 = {
  key: 0,
  class: "deployment-progress"
}, A3 = { class: "progress-message" }, U3 = { class: "instance-actions" }, N3 = /* @__PURE__ */ ke({
  __name: "InstanceCard",
  props: {
    instance: {},
    isLoading: { type: Boolean }
  },
  emits: ["stop", "start", "terminate"],
  setup(e) {
    const s = e, o = A(() => s.instance.provider === "custom" && s.instance.worker_name ? s.instance.worker_name : {
      runpod: "RunPod",
      vast: "Vast.ai",
      custom: "Custom"
    }[s.instance.provider] || s.instance.provider), n = A(() => ({
      deploying: "Deploying",
      starting: "Starting",
      running: "Running",
      stopped: "Stopped",
      error: "Error",
      terminated: "Terminated"
    })[s.instance.status] || s.instance.status), l = A(() => `status-${s.instance.status}`);
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
      class: Te(["instance-card", l.value])
    }, [
      t("div", x3, [
        t("span", S3, f(o.value), 1),
        t("span", I3, f(e.instance.name), 1),
        t("span", {
          class: Te(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (a(), c("span", E3)) : y("", !0),
          b(" " + f(n.value), 1)
        ], 2)
      ]),
      t("div", T3, [
        e.instance.gpu_type ? (a(), c("span", P3, f(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (a(), c("span", R3, f(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (a(), c("span", M3, f(u(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (a(), c("span", D3, "$" + f(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (a(), c("span", L3, "$" + f(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (a(), c("div", O3, [
        t("div", A3, f(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (a(), R(Zn, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", U3, [
        e.instance.status === "running" && e.instance.comfyui_url ? (a(), R(fe, {
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
        e.instance.console_url && e.instance.provider !== "custom" ? (a(), R(fe, {
          key: 1,
          variant: "ghost",
          size: "xs",
          onClick: r
        }, {
          default: h(() => [...m[4] || (m[4] = [
            b(" Console ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.status === "running" ? (a(), R(fe, {
          key: 2,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[0] || (m[0] = (v) => d.$emit("stop", e.instance))
        }, {
          default: h(() => [...m[5] || (m[5] = [
            b(" Stop ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        e.instance.status === "stopped" ? (a(), R(fe, {
          key: 3,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[1] || (m[1] = (v) => d.$emit("start", e.instance))
        }, {
          default: h(() => [...m[6] || (m[6] = [
            b(" Start ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        x(fe, {
          variant: "destructive",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[2] || (m[2] = (v) => d.$emit("terminate", e.instance))
        }, {
          default: h(() => [...m[7] || (m[7] = [
            b(" Terminate ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])
      ])
    ], 2));
  }
}), z3 = /* @__PURE__ */ be(N3, [["__scopeId", "data-v-746c3894"]]), F3 = { class: "instances-tab" }, B3 = { class: "instances-header" }, V3 = {
  key: 0,
  class: "loading-state"
}, W3 = {
  key: 1,
  class: "empty-state"
}, G3 = {
  key: 2,
  class: "instances-list"
}, j3 = /* @__PURE__ */ ke({
  __name: "InstancesTab",
  props: {
    instances: {},
    isLoading: { type: Boolean },
    actionLoadingId: {}
  },
  emits: ["refresh", "stop", "start", "terminate"],
  setup(e) {
    const s = e, o = A(() => {
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
    return (n, l) => (a(), c("div", F3, [
      t("div", B3, [
        x(Ut, null, {
          default: h(() => [...l[4] || (l[4] = [
            b("Active Instances", -1)
          ])]),
          _: 1
        }),
        x(fe, {
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
      e.isLoading && e.instances.length === 0 ? (a(), c("div", V3, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        b(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (a(), c("div", W3, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (a(), c("div", G3, [
        (a(!0), c(H, null, $e(o.value, (i) => (a(), R(z3, {
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
}), H3 = /* @__PURE__ */ be(j3, [["__scopeId", "data-v-ba614fc3"]]), K3 = { class: "remote-header" }, q3 = { class: "remote-info" }, Y3 = { class: "remote-icon" }, J3 = { class: "remote-name" }, X3 = {
  key: 0,
  class: "default-badge"
}, Q3 = {
  key: 1,
  class: "sync-badge"
}, Z3 = {
  key: 0,
  class: "ahead"
}, e5 = {
  key: 1,
  class: "behind"
}, t5 = {
  key: 1,
  class: "synced"
}, s5 = ["href"], o5 = {
  key: 1,
  class: "remote-url-text"
}, n5 = { class: "remote-actions" }, a5 = /* @__PURE__ */ ke({
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
    const s = e, o = A(() => s.remote.is_default), n = A(() => {
      const i = s.remote.fetch_url, r = i.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return r ? `https://${r[1]}/${r[2]}` : i.startsWith("https://") || i.startsWith("http://") ? i.replace(/\.git$/, "") : null;
    }), l = A(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (i, r) => (a(), c("div", {
      class: Te(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", K3, [
        t("div", q3, [
          t("span", Y3, f(o.value ? "🔗" : "🌐"), 1),
          t("span", J3, f(e.remote.name), 1),
          o.value ? (a(), c("span", X3, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), c("span", Q3, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), c(H, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), c("span", Z3, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), c("span", e5, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), c("span", t5, "✓ synced"))
          ])) : y("", !0)
        ]),
        n.value ? (a(), c("a", {
          key: 0,
          href: n.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: r[0] || (r[0] = at(() => {
          }, ["stop"]))
        }, f(l.value), 9, s5)) : (a(), c("span", o5, f(l.value), 1))
      ]),
      t("div", n5, [
        x(fe, {
          variant: "secondary",
          size: "xs",
          loading: e.isFetching,
          onClick: r[1] || (r[1] = (u) => i.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...r[4] || (r[4] = [
            b(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        e.syncStatus && e.syncStatus.ahead > 0 ? (a(), R(fe, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: e.isPushing,
          onClick: r[2] || (r[2] = (u) => i.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            b(" Push ↑" + f(e.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : y("", !0),
        x(fe, {
          variant: e.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: r[3] || (r[3] = (u) => i.$emit("select", e.remote.name))
        }, {
          default: h(() => [
            b(f(e.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), zr = /* @__PURE__ */ be(a5, [["__scopeId", "data-v-d687d161"]]), l5 = { class: "runpod-tab" }, i5 = { class: "api-key-card" }, r5 = { class: "api-key-row" }, c5 = { class: "api-key-input-wrapper" }, u5 = ["type", "disabled"], d5 = ["title"], f5 = { class: "status-icon" }, m5 = { class: "status-text" }, v5 = {
  key: 0,
  class: "credit-balance"
}, p5 = { class: "config-card" }, g5 = { class: "config-row" }, h5 = ["disabled"], y5 = {
  key: 0,
  value: ""
}, w5 = {
  key: 1,
  value: "",
  disabled: ""
}, _5 = ["value", "disabled"], k5 = { class: "config-row" }, b5 = {
  key: 0,
  class: "loading-inline"
}, $5 = { class: "no-volumes-state" }, C5 = { class: "no-volumes-text" }, x5 = ["value"], S5 = { class: "config-row" }, I5 = ["disabled"], E5 = {
  key: 0,
  value: ""
}, T5 = {
  key: 1,
  value: ""
}, P5 = {
  key: 2,
  value: ""
}, R5 = ["value"], M5 = { class: "config-row" }, D5 = { class: "radio-group" }, L5 = { class: "radio-option" }, O5 = { class: "radio-label" }, A5 = { class: "radio-option disabled" }, U5 = { class: "radio-label" }, N5 = { class: "config-row" }, z5 = { class: "radio-group" }, F5 = { class: "radio-option" }, B5 = { class: "radio-label" }, V5 = { class: "radio-option disabled" }, W5 = { class: "radio-label" }, G5 = { class: "config-row" }, j5 = {
  key: 0,
  class: "loading-text"
}, H5 = {
  key: 1,
  class: "empty-remotes"
}, K5 = { class: "remotes-list" }, q5 = {
  key: 0,
  class: "sync-warning"
}, Y5 = { class: "warning-content" }, J5 = { class: "remotes-footer" }, X5 = { class: "summary-card" }, Q5 = {
  key: 0,
  class: "loading-text"
}, Z5 = { class: "summary-row" }, eS = { class: "summary-value" }, tS = { class: "summary-row" }, sS = { class: "summary-value" }, oS = { class: "summary-row" }, nS = { class: "summary-value" }, aS = {
  key: 0,
  class: "summary-sub-row"
}, lS = { class: "summary-sub-label" }, iS = {
  key: 1,
  class: "summary-sub-row warning"
}, rS = { class: "summary-sub-label" }, cS = { class: "summary-row" }, uS = { class: "summary-value" }, dS = { class: "summary-row" }, fS = { class: "summary-value" }, mS = { class: "deployment-summary" }, vS = { class: "summary-columns" }, pS = { class: "summary-column" }, gS = { class: "pricing-row" }, hS = { class: "pricing-value" }, yS = { class: "pricing-row" }, wS = { class: "pricing-value" }, _S = { class: "pricing-row" }, kS = { class: "pricing-value" }, bS = { class: "pricing-row total" }, $S = { class: "pricing-value" }, CS = { class: "summary-column" }, xS = { class: "spec-row" }, SS = { class: "spec-row" }, IS = {
  key: 0,
  class: "spec-row"
}, ES = {
  key: 1,
  class: "spec-row spot-warning"
}, TS = {
  key: 4,
  class: "deploy-actions"
}, PS = { class: "progress-content" }, RS = { class: "phase-indicator" }, MS = { key: 0 }, DS = { key: 1 }, LS = { key: 2 }, OS = {
  key: 3,
  class: "spinner"
}, AS = { class: "phase-text" }, US = { class: "phase-name" }, NS = { class: "phase-detail" }, zS = {
  key: 0,
  class: "ready-actions"
}, FS = { class: "console-link" }, BS = ["href"], VS = /* @__PURE__ */ ke({
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
      validateDeploy: g,
      getRemotes: w,
      getRemoteSyncStatus: p,
      fetchRemote: _,
      pushToRemote: S,
      getDataCenters: $
    } = st(), P = k(!1), D = k(""), E = k(!1), C = k(!1), G = k(null), K = k(null), N = k(""), I = k(""), T = k(""), M = k("SECURE"), se = k("ON_DEMAND"), X = k("my-comfyui-deploy"), j = k([]), oe = k({}), Z = k(!1), U = k(null), W = k(null), O = k(null), ie = k([]), ge = k(!1), Me = k([]), Ae = k(!1), de = k([]), re = k(!1), F = k(null), ee = k(!1), he = k(!1), pe = k(null), me = k(!1), De = k(null), Re = k(null), L = k(null), B = k(!1), ae = k(null), ue = k(!1), we = k(!1), _e = A(() => Me.value.find((Se) => Se.id === I.value) || null), Ie = A(() => N.value ? Me.value.filter((Se) => Se.data_center_id === N.value) : Me.value), Ee = A(() => de.value.filter((Se) => Se.available)), ce = A(() => U.value && oe.value[U.value] || null), ye = A(() => {
      if (!U.value) return null;
      const Se = j.value.find((Q) => Q.name === U.value);
      return (Se == null ? void 0 : Se.fetch_url) || null;
    }), Ne = A(() => E.value && I.value && T.value && ye.value && !he.value && !B.value), Pe = (Se) => {
      const Q = de.value.find((ht) => ht.id === T.value);
      if (!Q) return "0.00";
      if (Se === "SECURE") return (Q.securePrice ?? 0).toFixed(2);
      if (Se === "COMMUNITY") return (Q.communityPrice ?? 0).toFixed(2);
      const He = M.value === "SECURE";
      return Se === "ON_DEMAND" ? He ? (Q.securePrice ?? 0).toFixed(2) : (Q.communityPrice ?? 0).toFixed(2) : He ? (Q.secureSpotPrice ?? 0).toFixed(2) : (Q.communitySpotPrice ?? 0).toFixed(2);
    }, ne = A(() => {
      const Se = de.value.find((ls) => ls.id === T.value), Q = Me.value.find((ls) => ls.id === I.value);
      if (!Se) return null;
      const He = M.value === "SECURE", ht = se.value === "SPOT";
      let Yt;
      ht ? Yt = He ? Se.secureSpotPrice ?? 0 : Se.communitySpotPrice ?? 0 : Yt = He ? Se.securePrice ?? 0 : Se.communityPrice ?? 0;
      const ys = Q ? Q.size_gb * 14e-5 : 0, ws = 4e-3;
      return {
        gpu: Yt,
        volume: ys,
        container: ws,
        total: Yt + ys + ws
      };
    });
    async function Y() {
      await Ve(), await Promise.all([vt(), Oe()]);
    }
    async function Oe() {
      Z.value = !0;
      try {
        const Se = await w();
        j.value = Se.remotes, await Promise.all(
          Se.remotes.map(async (He) => {
            const ht = await p(He.name);
            ht && (oe.value[He.name] = ht);
          })
        );
        const Q = Se.remotes.find((He) => He.is_default);
        Q ? U.value = Q.name : Se.remotes.length > 0 && (U.value = Se.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        Z.value = !1;
      }
    }
    async function xe(Se) {
      W.value = Se;
      try {
        await _(Se);
        const Q = await p(Se);
        Q && (oe.value[Se] = Q), o("toast", `Fetched from ${Se}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        W.value = null;
      }
    }
    async function Ce(Se) {
      O.value = Se;
      try {
        await S(Se, { force: !1 });
        const Q = await p(Se);
        Q && (oe.value[Se] = Q), o("toast", `Pushed to ${Se}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        O.value = null;
      }
    }
    function V(Se) {
      U.value = Se;
    }
    async function z() {
      if (D.value) {
        C.value = !0, G.value = null;
        try {
          const Se = await l(D.value, !0);
          Se.status === "success" ? (E.value = !0, K.value = Se.credit_balance ?? null, G.value = { type: "success", message: Se.message }, await Y()) : G.value = { type: "error", message: Se.message };
        } catch (Se) {
          G.value = {
            type: "error",
            message: Se instanceof Error ? Se.message : "Connection test failed"
          };
        } finally {
          C.value = !1;
        }
      }
    }
    async function ve() {
      try {
        await v(), D.value = "", E.value = !1, G.value = null, K.value = null, ie.value = [], N.value = "", Me.value = [], I.value = "", de.value = [], T.value = "", F.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function Ve() {
      Ae.value = !0, ge.value = !0;
      try {
        const Se = await i();
        Me.value = Se.volumes;
        const Q = /* @__PURE__ */ new Map();
        for (const He of Se.volumes)
          He.data_center_id && !Q.has(He.data_center_id) && Q.set(He.data_center_id, {
            id: He.data_center_id,
            name: He.data_center_name || He.data_center_id,
            available: !0
          });
        if (Se.volumes.length === 0) {
          const He = await $();
          ie.value = He.data_centers;
        } else
          ie.value = Array.from(Q.values());
        if (Me.value.length > 0) {
          const He = Me.value[0];
          I.value = He.id, He.data_center_id && (N.value = He.data_center_id, await Qe(He.data_center_id));
        } else ie.value.length > 0 && (N.value = ie.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        Ae.value = !1, ge.value = !1;
      }
    }
    async function Qe(Se) {
      re.value = !0;
      try {
        const Q = await r(Se);
        de.value = Q.gpu_types;
        const He = de.value.find((ht) => ht.available);
        He ? T.value = He.id : T.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        re.value = !1;
      }
    }
    gt(N, async (Se) => {
      if (!Se || Ae.value) return;
      const Q = Me.value.find((He) => He.id === I.value);
      Q && Q.data_center_id !== Se && (I.value = ""), await Qe(Se);
    }), gt(I, async (Se) => {
      if (!Se) {
        de.value = [], T.value = "";
        return;
      }
      if (Ae.value) return;
      const Q = Me.value.find((He) => He.id === Se);
      Q && Q.data_center_id !== N.value ? N.value = Q.data_center_id : Q && await Qe(Q.data_center_id);
    });
    async function vt() {
      ee.value = !0;
      try {
        F.value = await n();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        ee.value = !1;
      }
    }
    async function lt() {
      if (!(!T.value || !I.value)) {
        B.value = !0, pe.value = null;
        try {
          const Se = await g();
          ae.value = Se, Se.can_export ? Se.warnings.models_without_sources.length > 0 ? we.value = !0 : await Ft() : ue.value = !0;
        } catch (Se) {
          pe.value = {
            status: "error",
            message: Se instanceof Error ? Se.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          B.value = !1;
        }
      }
    }
    async function ut() {
      we.value = !1, await Ft();
    }
    async function Rt() {
      try {
        const Se = await g();
        ae.value = Se;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function Ft() {
      he.value = !0;
      try {
        let Se;
        if (se.value === "SPOT") {
          const He = de.value.find((ht) => ht.id === T.value);
          He && (Se = M.value === "SECURE" ? He.secureSpotPrice : He.communitySpotPrice);
        }
        const Q = await u({
          gpu_type_id: T.value,
          pod_name: X.value || "my-comfyui-deploy",
          network_volume_id: I.value,
          cloud_type: M.value,
          pricing_type: se.value,
          spot_bid: Se,
          import_source: ye.value
        });
        pe.value = Q, Q.status === "success" && Q.pod_id ? (De.value = Q.pod_id, me.value = !0, qt(Q.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", Q.message, "error");
      } catch (Se) {
        pe.value = {
          status: "error",
          message: Se instanceof Error ? Se.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        he.value = !1;
      }
    }
    function qt(Se) {
      Ms(Se), L.value = window.setInterval(() => Ms(Se), 3e3);
    }
    function Ws() {
      L.value && (clearInterval(L.value), L.value = null);
    }
    async function Ms(Se) {
      try {
        const Q = await d(Se);
        Re.value = Q, (Q.phase === "READY" || Q.phase === "ERROR" || Q.phase === "STOPPED") && (Ws(), Q.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (Q) {
        console.error("Failed to poll deployment status:", Q);
      }
    }
    function no() {
      me.value = !1, Ws(), De.value = null, Re.value = null;
    }
    function Co() {
      var Se;
      (Se = Re.value) != null && Se.comfyui_url && window.open(Re.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function xo(Se) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[Se || ""] || "Initializing...";
    }
    function So(Se) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[Se || ""] ?? 10;
    }
    return Xe(async () => {
      try {
        const Se = await m(!0);
        Se.has_key && Se.key_preview && (D.value = `****${Se.key_preview}`, Se.valid ? (E.value = !0, K.value = Se.credit_balance ?? null, G.value = { type: "success", message: "Connected to RunPod" }, await Y()) : Se.error && (G.value = { type: "error", message: Se.error }));
      } catch {
      }
    }), oo(() => {
      Ws();
    }), (Se, Q) => {
      var He, ht, Yt, ys, ws, ls;
      return a(), c(H, null, [
        t("div", l5, [
          x(it, { title: "RUNPOD API KEY" }, {
            default: h(() => [
              t("div", i5, [
                t("div", r5, [
                  t("div", c5, [
                    qe(t("input", {
                      "onUpdate:modelValue": Q[0] || (Q[0] = (ze) => D.value = ze),
                      type: P.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: E.value
                    }, null, 8, u5), [
                      [Xn, D.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: Q[1] || (Q[1] = (ze) => P.value = !P.value),
                      title: P.value ? "Hide key" : "Show key"
                    }, f(P.value ? "👁" : "👁‍🗨"), 9, d5)
                  ]),
                  E.value ? y("", !0) : (a(), R(fe, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: C.value,
                    disabled: !D.value || C.value,
                    onClick: z
                  }, {
                    default: h(() => [...Q[16] || (Q[16] = [
                      b(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  E.value ? (a(), R(fe, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: ve
                  }, {
                    default: h(() => [...Q[17] || (Q[17] = [
                      b(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                G.value ? (a(), c("div", {
                  key: 0,
                  class: Te(["connection-status", G.value.type])
                }, [
                  t("span", f5, f(G.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", m5, f(G.value.message), 1),
                  K.value !== null ? (a(), c("span", v5, " $" + f(K.value.toFixed(2)) + " credit ", 1)) : y("", !0)
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
              t("div", p5, [
                t("div", g5, [
                  Q[19] || (Q[19] = t("label", { class: "config-label" }, "Region", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": Q[2] || (Q[2] = (ze) => N.value = ze),
                    class: "config-select",
                    disabled: ge.value
                  }, [
                    ge.value ? (a(), c("option", y5, "Loading...")) : N.value ? y("", !0) : (a(), c("option", w5, "Select a region")),
                    (a(!0), c(H, null, $e(ie.value, (ze) => (a(), c("option", {
                      key: ze.id,
                      value: ze.id,
                      disabled: !ze.available
                    }, f(ze.id) + " (" + f(ze.name) + ")" + f(ze.available ? "" : " [Unavailable]"), 9, _5))), 128))
                  ], 8, h5), [
                    [hs, N.value]
                  ])
                ]),
                t("div", k5, [
                  Q[24] || (Q[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  Ae.value ? (a(), c("div", b5, "Loading volumes...")) : Ie.value.length === 0 ? (a(), c(H, { key: 1 }, [
                    t("div", $5, [
                      Q[20] || (Q[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", C5, "No volumes in " + f(N.value || "this region"), 1)
                    ]),
                    Q[21] || (Q[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    Q[22] || (Q[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (a(), c(H, { key: 2 }, [
                    qe(t("select", {
                      "onUpdate:modelValue": Q[3] || (Q[3] = (ze) => I.value = ze),
                      class: "config-select"
                    }, [
                      (a(!0), c(H, null, $e(Ie.value, (ze) => (a(), c("option", {
                        key: ze.id,
                        value: ze.id
                      }, f(ze.name) + " (" + f(ze.size_gb) + "GB) ", 9, x5))), 128))
                    ], 512), [
                      [hs, I.value]
                    ]),
                    Q[23] || (Q[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", S5, [
                  Q[25] || (Q[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": Q[4] || (Q[4] = (ze) => T.value = ze),
                    class: "config-select",
                    disabled: re.value || !I.value
                  }, [
                    I.value ? re.value ? (a(), c("option", T5, "Loading GPUs...")) : Ee.value.length === 0 ? (a(), c("option", P5, "No GPUs available in this region")) : y("", !0) : (a(), c("option", E5, "Select a volume first")),
                    (a(!0), c(H, null, $e(Ee.value, (ze) => (a(), c("option", {
                      key: ze.id,
                      value: ze.id
                    }, f(ze.displayName) + " (" + f(ze.memoryInGb) + "GB) - $" + f(M.value === "SECURE" ? (ze.securePrice ?? 0).toFixed(2) : (ze.communityPrice ?? 0).toFixed(2)) + "/hr " + f(ze.stockStatus ? `[${ze.stockStatus}]` : ""), 9, R5))), 128))
                  ], 8, I5), [
                    [hs, T.value]
                  ])
                ]),
                t("div", M5, [
                  Q[26] || (Q[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", D5, [
                    t("label", L5, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[5] || (Q[5] = (ze) => M.value = ze),
                        value: "SECURE"
                      }, null, 512), [
                        [Qt, M.value]
                      ]),
                      t("span", O5, "Secure ($" + f(Pe("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", A5, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[6] || (Q[6] = (ze) => M.value = ze),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [Qt, M.value]
                      ]),
                      t("span", U5, "Community ($" + f(Pe("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", N5, [
                  Q[27] || (Q[27] = t("label", { class: "config-label" }, [
                    b(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", z5, [
                    t("label", F5, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[7] || (Q[7] = (ze) => se.value = ze),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Qt, se.value]
                      ]),
                      t("span", B5, "On-Demand ($" + f(Pe("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", V5, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[8] || (Q[8] = (ze) => se.value = ze),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [Qt, se.value]
                      ]),
                      t("span", W5, "Spot ($" + f(Pe("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", G5, [
                  Q[28] || (Q[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  qe(t("input", {
                    "onUpdate:modelValue": Q[9] || (Q[9] = (ze) => X.value = ze),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [zt, X.value]
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
              Z.value ? (a(), c("div", j5, "Loading remotes...")) : j.value.length === 0 ? (a(), c("div", H5, [
                Q[30] || (Q[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                x(fe, {
                  variant: "primary",
                  size: "xs",
                  onClick: Q[10] || (Q[10] = (ze) => o("navigate", "remotes"))
                }, {
                  default: h(() => [...Q[29] || (Q[29] = [
                    b(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (a(), c(H, { key: 2 }, [
                t("div", K5, [
                  (a(!0), c(H, null, $e(j.value, (ze) => (a(), R(zr, {
                    key: ze.name,
                    remote: ze,
                    "sync-status": oe.value[ze.name],
                    "is-selected": U.value === ze.name,
                    "is-fetching": W.value === ze.name,
                    "is-pushing": O.value === ze.name,
                    onFetch: xe,
                    onPush: Ce,
                    onSelect: V
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                ce.value && ce.value.ahead > 0 ? (a(), c("div", q5, [
                  Q[31] || (Q[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", Y5, [
                    t("strong", null, f(ce.value.ahead) + " unpushed commit" + f(ce.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + f(U.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  x(fe, {
                    variant: "primary",
                    size: "xs",
                    loading: O.value === U.value,
                    onClick: Q[11] || (Q[11] = (ze) => U.value && Ce(U.value))
                  }, {
                    default: h(() => [
                      b(" Push to " + f(U.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", J5, [
                  x(fe, {
                    variant: "link",
                    size: "xs",
                    onClick: Q[12] || (Q[12] = (ze) => o("navigate", "remotes"))
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
              t("div", X5, [
                ee.value ? (a(), c("div", Q5, "Loading environment summary...")) : F.value ? (a(), c(H, { key: 1 }, [
                  t("div", Z5, [
                    Q[33] || (Q[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", eS, f(F.value.comfyui_version), 1)
                  ]),
                  t("div", tS, [
                    Q[34] || (Q[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", sS, f(F.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", oS, [
                    Q[35] || (Q[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", nS, f(F.value.model_count) + " models", 1)
                  ]),
                  F.value.models_with_sources > 0 ? (a(), c("div", aS, [
                    t("span", lS, "└─ " + f(F.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  F.value.models_without_sources > 0 ? (a(), c("div", iS, [
                    t("span", rS, "└─ " + f(F.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", cS, [
                    Q[36] || (Q[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", uS, f(F.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", dS, [
                    Q[37] || (Q[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", fS, "~" + f(F.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          E.value && ne.value ? (a(), R(it, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: h(() => {
              var ze, is;
              return [
                t("div", mS, [
                  t("div", vS, [
                    t("div", pS, [
                      Q[42] || (Q[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", gS, [
                        Q[38] || (Q[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", hS, "$" + f(ne.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", yS, [
                        Q[39] || (Q[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", wS, "$" + f(ne.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", _S, [
                        Q[40] || (Q[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", kS, "$" + f(ne.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      Q[43] || (Q[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", bS, [
                        Q[41] || (Q[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", $S, "~$" + f(ne.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", CS, [
                      Q[45] || (Q[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", xS, [
                        t("span", null, f(((ze = de.value.find((le) => le.id === T.value)) == null ? void 0 : ze.displayName) || "GPU") + " (" + f(((is = de.value.find((le) => le.id === T.value)) == null ? void 0 : is.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", SS, [
                        t("span", null, "Region: " + f(N.value), 1)
                      ]),
                      _e.value ? (a(), c("div", IS, [
                        t("span", null, "Volume: " + f(_e.value.name), 1)
                      ])) : y("", !0),
                      se.value === "SPOT" ? (a(), c("div", ES, [...Q[44] || (Q[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          E.value ? (a(), c("div", TS, [
            x(fe, {
              variant: "primary",
              size: "md",
              loading: B.value || he.value,
              disabled: !Ne.value,
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
                b(" " + f(B.value ? "Validating..." : he.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          pe.value ? (a(), R(it, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: h(() => [
              x(Et, {
                status: pe.value.status === "success" ? "synced" : "broken"
              }, so({
                icon: h(() => [
                  b(f(pe.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  b(f(pe.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: h(() => [
                  b(f(pe.value.message), 1)
                ]),
                actions: h(() => [
                  x(fe, {
                    variant: "ghost",
                    size: "xs",
                    onClick: Q[13] || (Q[13] = (ze) => pe.value = null)
                  }, {
                    default: h(() => [...Q[47] || (Q[47] = [
                      b(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                pe.value.pod_id ? {
                  name: "details",
                  fn: h(() => [
                    x(dt, {
                      label: "Pod ID:",
                      value: pe.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : y("", !0)
        ]),
        me.value ? (a(), R(mt, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((He = Re.value) == null ? void 0 : He.phase) === "READY" || ((ht = Re.value) == null ? void 0 : ht.phase) === "ERROR" || ((Yt = Re.value) == null ? void 0 : Yt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: no
        }, so({
          body: h(() => {
            var ze, is, le, q, Ue, je, ot, ft, Mt, rs, Gs, js;
            return [
              t("div", PS, [
                t("div", RS, [
                  t("div", {
                    class: Te(["phase-icon", (is = (ze = Re.value) == null ? void 0 : ze.phase) == null ? void 0 : is.toLowerCase()])
                  }, [
                    ((le = Re.value) == null ? void 0 : le.phase) === "READY" ? (a(), c("span", MS, "✓")) : ((q = Re.value) == null ? void 0 : q.phase) === "ERROR" ? (a(), c("span", DS, "✕")) : ((Ue = Re.value) == null ? void 0 : Ue.phase) === "STOPPED" ? (a(), c("span", LS, "○")) : (a(), c("span", OS, "⟳"))
                  ], 2),
                  t("div", AS, [
                    t("div", US, f(xo((je = Re.value) == null ? void 0 : je.phase)), 1),
                    t("div", NS, f(((ot = Re.value) == null ? void 0 : ot.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                x(Zn, {
                  progress: So((ft = Re.value) == null ? void 0 : ft.phase),
                  variant: ((Mt = Re.value) == null ? void 0 : Mt.phase) === "ERROR" ? "error" : ((rs = Re.value) == null ? void 0 : rs.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Gs = Re.value) == null ? void 0 : Gs.phase) === "READY" ? (a(), c("div", zS, [
                  x(fe, {
                    variant: "primary",
                    size: "md",
                    onClick: Co
                  }, {
                    default: h(() => [...Q[48] || (Q[48] = [
                      b(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                t("div", FS, [
                  (js = Re.value) != null && js.console_url ? (a(), c("a", {
                    key: 0,
                    href: Re.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, BS)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((ys = Re.value) == null ? void 0 : ys.phase) === "READY" || ((ws = Re.value) == null ? void 0 : ws.phase) === "ERROR" || ((ls = Re.value) == null ? void 0 : ls.phase) === "STOPPED" ? {
            name: "footer",
            fn: h(() => [
              x(fe, {
                variant: "ghost",
                size: "xs",
                onClick: no
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
        ue.value && ae.value ? (a(), R(Or, {
          key: 1,
          issues: ae.value.blocking_issues,
          onClose: Q[14] || (Q[14] = (ze) => ue.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        we.value && ae.value ? (a(), R(Ar, {
          key: 2,
          models: ae.value.warnings.models_without_sources,
          onConfirm: ut,
          onCancel: Q[15] || (Q[15] = (ze) => we.value = !1),
          onRevalidate: Rt
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), WS = /* @__PURE__ */ be(VS, [["__scopeId", "data-v-522cd4d9"]]), GS = { class: "worker-header" }, jS = { class: "worker-status" }, HS = { class: "worker-name" }, KS = { class: "worker-actions" }, qS = { class: "worker-details" }, YS = { class: "detail-item" }, JS = { class: "detail-value" }, XS = {
  key: 0,
  class: "detail-item"
}, QS = { class: "detail-value" }, ZS = {
  key: 1,
  class: "detail-item"
}, e8 = { class: "detail-value mode-badge" }, t8 = {
  key: 0,
  class: "worker-stats"
}, s8 = {
  key: 0,
  class: "stat-item"
}, o8 = { key: 0 }, n8 = {
  key: 1,
  class: "worker-stats offline"
}, a8 = /* @__PURE__ */ ke({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(e) {
    return (s, o) => (a(), c("div", {
      class: Te(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      t("div", GS, [
        t("div", jS, [
          t("span", {
            class: Te(["status-dot", e.worker.status])
          }, null, 2),
          t("span", HS, f(e.worker.name), 1)
        ]),
        t("div", KS, [
          e.worker.status === "online" ? (a(), R(fe, {
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
          x(fe, {
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
      t("div", qS, [
        t("span", YS, [
          t("span", JS, f(e.worker.host) + ":" + f(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (a(), c("span", XS, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", QS, f(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (a(), c("span", ZS, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", e8, f(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (a(), c("div", t8, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (a(), c("span", s8, [
          b(" • " + f(e.worker.instance_count) + " instance" + f(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (a(), c("span", o8, "(" + f(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (a(), c("div", n8, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), l8 = /* @__PURE__ */ be(a8, [["__scopeId", "data-v-b1be7134"]]), i8 = { class: "add-worker-content" }, r8 = { class: "manual-form" }, c8 = { class: "form-row" }, u8 = { class: "form-row-inline" }, d8 = { class: "form-field flex-2" }, f8 = { class: "form-field flex-1" }, m8 = { class: "form-row" }, v8 = { class: "api-key-wrapper" }, p8 = ["type"], g8 = { class: "result-icon" }, h8 = { class: "result-content" }, y8 = { class: "result-message" }, w8 = {
  key: 0,
  class: "result-detail"
}, _8 = { class: "modal-actions" }, k8 = /* @__PURE__ */ ke({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = st(), l = Vs({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), i = k(!1), r = k(!1), u = k(!1), d = k(null), m = A(() => l.host && l.port && l.apiKey), v = A(() => l.name && l.host && l.port && l.apiKey);
    async function g() {
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
    return (p, _) => (a(), R(mt, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: _[5] || (_[5] = (S) => p.$emit("close"))
    }, {
      body: h(() => [
        t("div", i8, [
          t("div", r8, [
            t("div", c8, [
              _[6] || (_[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              qe(t("input", {
                "onUpdate:modelValue": _[0] || (_[0] = (S) => l.name = S),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [zt, l.name]
              ])
            ]),
            t("div", u8, [
              t("div", d8, [
                _[7] || (_[7] = t("label", { class: "form-label" }, "Host", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": _[1] || (_[1] = (S) => l.host = S),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [zt, l.host]
                ])
              ]),
              t("div", f8, [
                _[8] || (_[8] = t("label", { class: "form-label" }, "Port", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": _[2] || (_[2] = (S) => l.port = S),
                  type: "number",
                  class: "form-input",
                  placeholder: "9090"
                }, null, 512), [
                  [
                    zt,
                    l.port,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ]),
            t("div", m8, [
              _[9] || (_[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", v8, [
                qe(t("input", {
                  "onUpdate:modelValue": _[3] || (_[3] = (S) => l.apiKey = S),
                  type: i.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, p8), [
                  [Xn, l.apiKey]
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
              class: Te(["test-result", d.value.type])
            }, [
              t("span", g8, f(d.value.type === "success" ? "✓" : "✕"), 1),
              t("div", h8, [
                t("span", y8, f(d.value.message), 1),
                d.value.gpu_info ? (a(), c("span", w8, "GPU: " + f(d.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        t("div", _8, [
          x(fe, {
            variant: "ghost",
            size: "sm",
            loading: r.value,
            disabled: !m.value || r.value,
            onClick: g
          }, {
            default: h(() => [..._[11] || (_[11] = [
              b(" Test Connection ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          x(fe, {
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !v.value || u.value,
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
}), b8 = /* @__PURE__ */ be(k8, [["__scopeId", "data-v-07a00732"]]), $8 = { class: "discovered-content" }, C8 = {
  key: 0,
  class: "workers-list"
}, x8 = { class: "worker-info" }, S8 = { class: "worker-name" }, I8 = { class: "worker-address" }, E8 = {
  key: 0,
  class: "worker-gpu"
}, T8 = {
  key: 1,
  class: "empty-state"
}, P8 = {
  key: 2,
  class: "api-key-section"
}, R8 = { class: "selected-worker" }, M8 = { class: "selected-name" }, D8 = { class: "selected-address" }, L8 = { class: "form-row" }, O8 = { class: "api-key-wrapper" }, A8 = ["type"], U8 = { class: "result-icon" }, N8 = { class: "result-message" }, z8 = { class: "modal-actions" }, F8 = /* @__PURE__ */ ke({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = st(), l = k(null), i = k(""), r = k(!1), u = k(!1), d = k(null), m = k(null);
    async function v(w) {
      var p;
      l.value = w, i.value = "", m.value = null, await kt(), (p = d.value) == null || p.focus();
    }
    async function g() {
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
    return (w, p) => (a(), R(mt, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (_) => w.$emit("close"))
    }, {
      body: h(() => [
        t("div", $8, [
          e.workers.length > 0 ? (a(), c("div", C8, [
            (a(!0), c(H, null, $e(e.workers, (_) => (a(), c("div", {
              key: `${_.host}:${_.port}`,
              class: "worker-item"
            }, [
              t("div", x8, [
                t("span", S8, f(_.name), 1),
                t("span", I8, f(_.host) + ":" + f(_.port), 1),
                _.gpu_info ? (a(), c("span", E8, f(_.gpu_info), 1)) : y("", !0)
              ]),
              x(fe, {
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
          ])) : (a(), c("div", T8, [...p[5] || (p[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              b("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (a(), c("div", P8, [
            t("div", R8, [
              p[6] || (p[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", M8, f(l.value.name), 1),
              t("span", D8, "(" + f(l.value.host) + ":" + f(l.value.port) + ")", 1)
            ]),
            t("div", L8, [
              p[7] || (p[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", O8, [
                qe(t("input", {
                  ref_key: "apiKeyInput",
                  ref: d,
                  "onUpdate:modelValue": p[0] || (p[0] = (_) => i.value = _),
                  type: r.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: es(g, ["enter"])
                }, null, 40, A8), [
                  [Xn, i.value]
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
              class: Te(["test-result", m.value.type])
            }, [
              t("span", U8, f(m.value.type === "success" ? "✓" : "✕"), 1),
              t("span", N8, f(m.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", z8, [
          l.value ? (a(), R(fe, {
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
          l.value ? (a(), R(fe, {
            key: 1,
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !i.value || u.value,
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
}), B8 = /* @__PURE__ */ be(F8, [["__scopeId", "data-v-5a3e40a4"]]), V8 = { class: "deploy-content" }, W8 = { class: "section" }, G8 = {
  key: 0,
  class: "loading-text"
}, j8 = {
  key: 1,
  class: "empty-remotes"
}, H8 = {
  key: 2,
  class: "remotes-list"
}, K8 = { class: "section" }, q8 = { class: "mode-options" }, Y8 = { class: "mode-option" }, J8 = ["disabled"], X8 = { class: "mode-option" }, Q8 = { class: "section" }, Z8 = {
  key: 0,
  class: "section"
}, e4 = { class: "summary-row" }, t4 = {
  key: 1,
  class: "sync-warning"
}, s4 = { class: "warning-content" }, o4 = { class: "modal-actions" }, n4 = /* @__PURE__ */ ke({
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
    } = st(), v = k([]), g = k({}), w = k(!1), p = k(null), _ = k(null), S = k(null), $ = k(o.worker.mode || "native"), P = k(""), D = k(null), E = k(!1), C = A(() => p.value && g.value[p.value] || null), G = A(() => {
      if (!p.value) return null;
      const j = v.value.find((oe) => oe.name === p.value);
      return (j == null ? void 0 : j.fetch_url) || null;
    }), K = A(() => G.value && !E.value);
    async function N() {
      w.value = !0;
      try {
        const j = await l();
        v.value = j.remotes, await Promise.all(
          j.remotes.map(async (Z) => {
            const U = await i(Z.name);
            U && (g.value[Z.name] = U);
          })
        );
        const oe = j.remotes.find((Z) => Z.is_default);
        oe ? p.value = oe.name : j.remotes.length > 0 && (p.value = j.remotes[0].name);
      } catch {
        n("toast", "Failed to load remotes", "error");
      } finally {
        w.value = !1;
      }
    }
    async function I() {
      try {
        D.value = await d();
      } catch {
      }
    }
    async function T(j) {
      _.value = j;
      try {
        await r(j);
        const oe = await i(j);
        oe && (g.value[j] = oe), n("toast", `Fetched from ${j}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        _.value = null;
      }
    }
    async function M(j) {
      S.value = j;
      try {
        await u(j, { force: !1 });
        const oe = await i(j);
        oe && (g.value[j] = oe), n("toast", `Pushed to ${j}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        S.value = null;
      }
    }
    function se(j) {
      p.value = j;
    }
    async function X() {
      if (G.value) {
        E.value = !0;
        try {
          const j = await m(o.worker.name, {
            import_source: G.value,
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
    return Xe(() => {
      N(), I();
    }), (j, oe) => (a(), R(mt, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: oe[5] || (oe[5] = (Z) => j.$emit("close"))
    }, {
      body: h(() => [
        t("div", V8, [
          t("div", W8, [
            oe[7] || (oe[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            w.value ? (a(), c("div", G8, "Loading remotes...")) : v.value.length === 0 ? (a(), c("div", j8, [...oe[6] || (oe[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (a(), c("div", H8, [
              (a(!0), c(H, null, $e(v.value, (Z) => (a(), R(zr, {
                key: Z.name,
                remote: Z,
                "sync-status": g.value[Z.name],
                "is-selected": p.value === Z.name,
                "is-fetching": _.value === Z.name,
                "is-pushing": S.value === Z.name,
                onFetch: T,
                onPush: M,
                onSelect: se
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", K8, [
            oe[10] || (oe[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", q8, [
              t("label", Y8, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": oe[0] || (oe[0] = (Z) => $.value = Z),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, J8), [
                  [Qt, $.value]
                ]),
                oe[8] || (oe[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", X8, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": oe[1] || (oe[1] = (Z) => $.value = Z),
                  value: "native"
                }, null, 512), [
                  [Qt, $.value]
                ]),
                oe[9] || (oe[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", Q8, [
            oe[11] || (oe[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            qe(t("input", {
              "onUpdate:modelValue": oe[2] || (oe[2] = (Z) => P.value = Z),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [zt, P.value]
            ])
          ]),
          D.value ? (a(), c("div", Z8, [
            oe[12] || (oe[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", e4, " ComfyUI: " + f(D.value.comfyui_version) + " • " + f(D.value.node_count) + " nodes • " + f(D.value.model_count) + " models • " + f(D.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          C.value && C.value.ahead > 0 ? (a(), c("div", t4, [
            oe[14] || (oe[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", s4, [
              t("strong", null, f(C.value.ahead) + " unpushed commit" + f(C.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + f(p.value) + "' before deploying to include your latest changes.", 1)
            ]),
            x(fe, {
              variant: "primary",
              size: "xs",
              loading: S.value === p.value,
              onClick: oe[3] || (oe[3] = (Z) => p.value && M(p.value))
            }, {
              default: h(() => [...oe[13] || (oe[13] = [
                b(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", o4, [
          x(fe, {
            variant: "ghost",
            size: "sm",
            onClick: oe[4] || (oe[4] = (Z) => j.$emit("close"))
          }, {
            default: h(() => [...oe[15] || (oe[15] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          x(fe, {
            variant: "primary",
            size: "sm",
            loading: E.value,
            disabled: !K.value || E.value,
            onClick: X
          }, {
            default: h(() => [...oe[16] || (oe[16] = [
              b(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), a4 = /* @__PURE__ */ be(n4, [["__scopeId", "data-v-c12720d3"]]), l4 = { class: "custom-tab" }, i4 = { class: "section-header" }, r4 = { class: "section-actions" }, c4 = { class: "workers-content" }, u4 = {
  key: 0,
  class: "loading-state"
}, d4 = {
  key: 1,
  class: "empty-state"
}, f4 = {
  key: 2,
  class: "workers-list"
}, m4 = { class: "scan-icon" }, v4 = { class: "scan-message" }, p4 = /* @__PURE__ */ ke({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: n,
      addCustomWorker: l,
      removeCustomWorker: i,
      scanForWorkers: r
    } = st(), u = k([]), d = k([]), m = k(!1), v = k(!1), g = k(null), w = k(!1), p = k(!1), _ = k(null), S = k(null);
    async function $() {
      m.value = !0;
      try {
        const N = await n();
        u.value = N.workers;
      } catch (N) {
        o("toast", N instanceof Error ? N.message : "Failed to load workers", "error");
      } finally {
        m.value = !1;
      }
    }
    async function P() {
      v.value = !0, S.value = null;
      try {
        const N = await r(), I = N.discovered.filter(
          (T) => !u.value.some((M) => M.host === T.host && M.port === T.port)
        );
        d.value = I, I.length > 0 ? p.value = !0 : N.discovered.length > 0 ? S.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : S.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (N) {
        o("toast", N instanceof Error ? N.message : "Network scan failed", "error");
      } finally {
        v.value = !1;
      }
    }
    async function D(N) {
      try {
        await l(N), o("toast", `Worker '${N.name}' added`, "success"), w.value = !1, await $();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to add worker", "error");
      }
    }
    async function E(N) {
      try {
        await l(N), o("toast", `Worker '${N.name}' added`, "success"), p.value = !1, await $();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to add worker", "error");
      }
    }
    async function C(N) {
      g.value = N;
      try {
        await i(N), o("toast", `Worker '${N}' removed`, "success"), await $();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to remove worker", "error");
      } finally {
        g.value = null;
      }
    }
    function G(N) {
      _.value = N;
    }
    function K() {
      _.value = null, o("deployed");
    }
    return Xe(() => {
      $();
    }), (N, I) => (a(), c("div", l4, [
      t("div", i4, [
        I[8] || (I[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", r4, [
          x(fe, {
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
          x(fe, {
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
      t("div", c4, [
        m.value && u.value.length === 0 ? (a(), c("div", u4, [...I[9] || (I[9] = [
          t("span", { class: "spinner" }, null, -1),
          b(" Loading workers... ", -1)
        ])])) : u.value.length === 0 ? (a(), c("div", d4, [...I[10] || (I[10] = [
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
        ])])) : (a(), c("div", f4, [
          (a(!0), c(H, null, $e(u.value, (T) => (a(), R(l8, {
            key: T.name,
            worker: T,
            "is-action-loading": g.value === T.name,
            onDeploy: G,
            onRemove: C
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      S.value ? (a(), c("div", {
        key: 0,
        class: Te(["scan-result", S.value.type])
      }, [
        t("span", m4, f(S.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", v4, f(S.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: I[1] || (I[1] = (T) => S.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (a(), R(B8, {
        key: 1,
        workers: d.value,
        onClose: I[2] || (I[2] = (T) => p.value = !1),
        onAdd: E
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (a(), R(b8, {
        key: 2,
        onClose: I[3] || (I[3] = (T) => w.value = !1),
        onAdd: D
      })) : y("", !0),
      _.value ? (a(), R(a4, {
        key: 3,
        worker: _.value,
        onClose: I[4] || (I[4] = (T) => _.value = null),
        onToast: I[5] || (I[5] = (T, M) => o("toast", T, M)),
        onDeployed: K
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), g4 = /* @__PURE__ */ be(p4, [["__scopeId", "data-v-1637dead"]]), ga = "ComfyGit.Deploy.GitHubPAT";
function Fr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function h4(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function y4() {
  function e() {
    try {
      return localStorage.getItem(ga);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem(ga, l);
    } catch (i) {
      console.error("[useGitAuth] Failed to save token:", i);
    }
  }
  function o() {
    try {
      localStorage.removeItem(ga);
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
    isRemoteSsh: Fr,
    isRemoteHttps: h4
  };
}
const w4 = { class: "settings-content" }, _4 = { class: "settings-section" }, k4 = {
  key: 0,
  class: "ssh-warning"
}, b4 = { class: "form-row" }, $4 = { class: "token-wrapper" }, C4 = ["type"], x4 = { class: "result-icon" }, S4 = { class: "result-message" }, I4 = { class: "token-actions" }, E4 = /* @__PURE__ */ ke({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: n, setToken: l, clearToken: i, hasToken: r } = y4(), { getRemotes: u, testGitAuth: d } = st(), m = k(""), v = k(!1), g = k(!1), w = k(null), p = k(!1), _ = A(() => r());
    Xe(async () => {
      var E;
      const D = n();
      D && (m.value = D);
      try {
        const G = (E = (await u()).remotes) == null ? void 0 : E.find((K) => K.name === "origin");
        G && Fr(G.url) && (p.value = !0);
      } catch {
      }
    });
    async function S() {
      if (m.value) {
        g.value = !0, w.value = null;
        try {
          const D = await d(m.value);
          w.value = {
            type: D.status === "success" ? "success" : "error",
            message: D.message
          };
        } catch (D) {
          w.value = {
            type: "error",
            message: D instanceof Error ? D.message : "Connection test failed"
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
    return (D, E) => (a(), R(mt, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: E[2] || (E[2] = (C) => D.$emit("close"))
    }, {
      body: h(() => [
        t("div", w4, [
          t("div", _4, [
            E[8] || (E[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            E[9] || (E[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (a(), c("div", k4, [...E[3] || (E[3] = [
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
            t("div", b4, [
              E[4] || (E[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", $4, [
                qe(t("input", {
                  "onUpdate:modelValue": E[0] || (E[0] = (C) => m.value = C),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, C4), [
                  [Xn, m.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: E[1] || (E[1] = (C) => v.value = !v.value)
                }, f(v.value ? "Hide" : "Show"), 1)
              ]),
              E[5] || (E[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            w.value ? (a(), c("div", {
              key: 1,
              class: Te(["test-result", w.value.type])
            }, [
              t("span", x4, f(w.value.type === "success" ? "✓" : "✕"), 1),
              t("span", S4, f(w.value.message), 1)
            ], 2)) : y("", !0),
            t("div", I4, [
              x(fe, {
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
              _.value ? (a(), R(fe, {
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
        x(fe, {
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
}), T4 = /* @__PURE__ */ be(E4, [["__scopeId", "data-v-b21588ad"]]), P4 = /* @__PURE__ */ ke({
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
      stopPolling: g
    } = Nr(), w = k(!1), p = k(!1), _ = k("instances"), S = k(null), $ = k(null), P = A(() => [
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
    async function D(N) {
      S.value = N.id;
      try {
        await u(N), o("toast", "Instance stopped", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to stop instance", "error");
      } finally {
        S.value = null;
      }
    }
    async function E(N) {
      S.value = N.id;
      try {
        await d(N), o("toast", "Instance starting...", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to start instance", "error");
      } finally {
        S.value = null;
      }
    }
    function C(N) {
      $.value = N;
    }
    async function G() {
      const N = $.value;
      if (N) {
        $.value = null, S.value = N.id;
        try {
          await m(N), o("toast", "Instance terminated", "success");
        } catch (I) {
          o("toast", I instanceof Error ? I.message : "Failed to terminate instance", "error");
        } finally {
          S.value = null;
        }
      }
    }
    async function K() {
      await r(), _.value = "instances";
    }
    return Xe(() => {
      r(), v();
    }), oo(() => {
      g();
    }), (N, I) => (a(), c(H, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: I[1] || (I[1] = (T) => w.value = !0)
          }, {
            actions: h(() => [
              x(fe, {
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
          x(Pr, {
            modelValue: _.value,
            "onUpdate:modelValue": I[2] || (I[2] = (T) => _.value = T),
            tabs: P.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: h(() => [
          _.value === "instances" ? (a(), R(H3, {
            key: 0,
            instances: We(n),
            "is-loading": We(l),
            "action-loading-id": S.value,
            onRefresh: We(r),
            onStop: D,
            onStart: E,
            onTerminate: C
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          _.value === "runpod" ? (a(), R(WS, {
            key: 1,
            onToast: I[3] || (I[3] = (T, M) => o("toast", T, M)),
            onNavigate: I[4] || (I[4] = (T) => o("navigate", T)),
            onDeployed: K
          })) : y("", !0),
          _.value === "custom" ? (a(), R(g4, {
            key: 2,
            onToast: I[5] || (I[5] = (T, M) => o("toast", T, M)),
            onDeployed: K
          })) : y("", !0)
        ]),
        _: 1
      }),
      $.value ? (a(), R(nl, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${$.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: G,
        onCancel: I[6] || (I[6] = (T) => $.value = null)
      }, null, 8, ["message"])) : y("", !0),
      x(as, {
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
      p.value ? (a(), R(T4, {
        key: 1,
        onClose: I[8] || (I[8] = (T) => p.value = !1),
        onSaved: I[9] || (I[9] = (T) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), R4 = /* @__PURE__ */ be(P4, [["__scopeId", "data-v-d4e32a10"]]), M4 = { class: "header-info" }, D4 = { class: "commit-hash" }, L4 = {
  key: 0,
  class: "commit-refs"
}, O4 = { class: "commit-message" }, A4 = { class: "commit-date" }, U4 = {
  key: 0,
  class: "loading"
}, N4 = {
  key: 1,
  class: "changes-section"
}, z4 = { class: "stats-row" }, F4 = { class: "stat" }, B4 = { class: "stat insertions" }, V4 = { class: "stat deletions" }, W4 = {
  key: 0,
  class: "change-group"
}, G4 = {
  key: 1,
  class: "change-group"
}, j4 = {
  key: 0,
  class: "version"
}, H4 = {
  key: 2,
  class: "change-group"
}, K4 = { class: "change-item" }, q4 = /* @__PURE__ */ ke({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = st(), n = k(null), l = k(!0), i = A(() => {
      if (!n.value) return !1;
      const u = n.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), r = A(() => {
      if (!n.value) return !1;
      const u = n.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return Xe(async () => {
      try {
        n.value = await o(s.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (a(), R(mt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (m) => u.$emit("close"))
    }, {
      header: h(() => {
        var m, v, g, w;
        return [
          t("div", M4, [
            d[4] || (d[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", D4, f(((m = n.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (g = n.value) == null ? void 0 : g.refs) != null && w.length ? (a(), c("span", L4, [
              (a(!0), c(H, null, $e(n.value.refs, (p) => (a(), c("span", {
                key: p,
                class: "ref-badge"
              }, f(p), 1))), 128))
            ])) : y("", !0)
          ]),
          x(Le, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (p) => u.$emit("close"))
          }, {
            default: h(() => [...d[5] || (d[5] = [
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
          t("div", O4, f(((m = n.value) == null ? void 0 : m.message) || e.commit.message), 1),
          t("div", A4, f(((v = n.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), c("div", U4, "Loading details...")) : n.value ? (a(), c("div", N4, [
            t("div", z4, [
              t("span", F4, f(n.value.stats.files_changed) + " files", 1),
              t("span", B4, "+" + f(n.value.stats.insertions), 1),
              t("span", V4, "-" + f(n.value.stats.deletions), 1)
            ]),
            i.value ? (a(), c("div", W4, [
              x(Go, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  b("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), c(H, null, $e(n.value.changes.workflows.added, (g) => (a(), c("div", {
                key: "add-" + g,
                class: "change-item added"
              }, [
                d[7] || (d[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), c(H, null, $e(n.value.changes.workflows.modified, (g) => (a(), c("div", {
                key: "mod-" + g,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), c(H, null, $e(n.value.changes.workflows.deleted, (g) => (a(), c("div", {
                key: "del-" + g,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g), 1)
              ]))), 128))
            ])) : y("", !0),
            r.value ? (a(), c("div", G4, [
              x(Go, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  b("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), c(H, null, $e(n.value.changes.nodes.added, (g) => (a(), c("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g.name), 1),
                g.version ? (a(), c("span", j4, "(" + f(g.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), c(H, null, $e(n.value.changes.nodes.removed, (g) => (a(), c("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), c("div", H4, [
              x(Go, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  b("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", K4, [
                d[14] || (d[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, f(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        x(Le, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (m) => u.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            b(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        x(Le, {
          variant: "primary",
          onClick: d[2] || (d[2] = (m) => u.$emit("checkout", e.commit))
        }, {
          default: h(() => [...d[16] || (d[16] = [
            b(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Y4 = /* @__PURE__ */ be(q4, [["__scopeId", "data-v-d256ff6d"]]), J4 = { class: "base-textarea-wrapper" }, X4 = ["value", "rows", "placeholder", "disabled", "maxlength"], Q4 = {
  key: 0,
  class: "base-textarea-count"
}, Z4 = /* @__PURE__ */ ke({
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
    return (i, r) => (a(), c("div", J4, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: r[0] || (r[0] = (u) => i.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          r[1] || (r[1] = es(at((u) => i.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          r[2] || (r[2] = es(at((u) => i.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          es(l, ["enter"])
        ]
      }, null, 40, X4),
      e.showCharCount && e.maxLength ? (a(), c("div", Q4, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), ei = /* @__PURE__ */ be(Z4, [["__scopeId", "data-v-c6d16c93"]]), e6 = ["checked", "disabled"], t6 = { class: "base-checkbox-box" }, s6 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, o6 = {
  key: 0,
  class: "base-checkbox-label"
}, n6 = /* @__PURE__ */ ke({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), c("label", {
      class: Te(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked))
      }, null, 40, e6),
      t("span", t6, [
        e.modelValue ? (a(), c("svg", s6, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (a(), c("span", o6, [
        Ke(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Da = /* @__PURE__ */ be(n6, [["__scopeId", "data-v-bf17c831"]]), a6 = { class: "popover-header" }, l6 = { class: "popover-body" }, i6 = {
  key: 0,
  class: "changes-summary"
}, r6 = {
  key: 0,
  class: "change-item"
}, c6 = {
  key: 1,
  class: "change-item"
}, u6 = {
  key: 2,
  class: "change-item"
}, d6 = {
  key: 3,
  class: "change-item"
}, f6 = {
  key: 4,
  class: "change-item"
}, m6 = {
  key: 5,
  class: "change-item"
}, v6 = {
  key: 1,
  class: "no-changes"
}, p6 = {
  key: 2,
  class: "loading"
}, g6 = {
  key: 3,
  class: "issues-error"
}, h6 = { class: "error-header" }, y6 = { class: "error-title" }, w6 = { class: "issues-list" }, _6 = { class: "workflow-state" }, k6 = { class: "message-section" }, b6 = { class: "popover-footer" }, $6 = {
  key: 1,
  class: "commit-popover"
}, C6 = { class: "popover-header" }, x6 = { class: "popover-body" }, S6 = {
  key: 0,
  class: "changes-summary"
}, I6 = {
  key: 0,
  class: "change-item"
}, E6 = {
  key: 1,
  class: "change-item"
}, T6 = {
  key: 2,
  class: "change-item"
}, P6 = {
  key: 3,
  class: "change-item"
}, R6 = {
  key: 4,
  class: "change-item"
}, M6 = {
  key: 5,
  class: "change-item"
}, D6 = {
  key: 1,
  class: "no-changes"
}, L6 = {
  key: 2,
  class: "loading"
}, O6 = {
  key: 3,
  class: "issues-error"
}, A6 = { class: "error-header" }, U6 = { class: "error-title" }, N6 = { class: "issues-list" }, z6 = { class: "workflow-state" }, F6 = { class: "message-section" }, B6 = { class: "popover-footer" }, V6 = /* @__PURE__ */ ke({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, n = s, { commit: l } = st(), i = k(""), r = k(!1), u = k(!1), d = A(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), m = A(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, S = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || S.nodes_added.length > 0 || S.nodes_removed.length > 0;
    }), v = A(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((S) => S.has_issues) : [];
    }), g = A(() => v.value.length > 0), w = A(() => g.value && !u.value);
    async function p() {
      var _, S, $, P;
      if (!(g.value && !u.value) && !(!d.value || !i.value.trim() || r.value)) {
        r.value = !0;
        try {
          const D = await l(i.value.trim(), u.value);
          if (D.status === "success") {
            const E = `Committed: ${((_ = D.summary) == null ? void 0 : _.new) || 0} new, ${((S = D.summary) == null ? void 0 : S.modified) || 0} modified, ${(($ = D.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            n("committed", { success: !0, message: E });
          } else if (D.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (D.status === "blocked") {
            const E = ((P = D.issues) == null ? void 0 : P.map((C) => `${C.name}: ${C.issue}`).join("; ")) || "Unknown issues";
            n("committed", { success: !1, message: `Commit blocked - ${E}. Enable "Allow issues" to force.` });
          } else
            n("committed", { success: !1, message: D.message || "Commit failed" });
        } catch (D) {
          n("committed", { success: !1, message: D instanceof Error ? D.message : "Commit failed" });
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
          onClick: S[4] || (S[4] = at(() => {
          }, ["stop"]))
        }, [
          t("div", a6, [
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
          t("div", l6, [
            e.status && d.value ? (a(), c("div", i6, [
              e.status.workflows.new.length ? (a(), c("div", r6, [
                S[12] || (S[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), c("div", c6, [
                S[13] || (S[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), c("div", u6, [
                S[14] || (S[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), c("div", d6, [
                S[15] || (S[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), c("div", f6, [
                S[16] || (S[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (a(), c("div", m6, [...S[17] || (S[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), c("div", v6, " No changes to commit ")) : (a(), c("div", p6, " Loading... ")),
            g.value ? (a(), c("div", g6, [
              t("div", h6, [
                S[18] || (S[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", y6, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", w6, [
                (a(!0), c(H, null, $e(v.value, ($) => (a(), c("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  t("strong", null, f($.name), 1),
                  t("span", _6, "(" + f($.sync_state) + ")", 1),
                  b(": " + f($.issue_summary), 1)
                ]))), 128))
              ]),
              x(Da, {
                modelValue: u.value,
                "onUpdate:modelValue": S[1] || (S[1] = ($) => u.value = $),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...S[19] || (S[19] = [
                  b(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            t("div", k6, [
              x(ei, {
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
          t("div", b6, [
            x(Le, {
              variant: "secondary",
              onClick: S[3] || (S[3] = ($) => n("close"))
            }, {
              default: h(() => [...S[20] || (S[20] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(Le, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !i.value.trim() || r.value || w.value,
              loading: r.value,
              onClick: p
            }, {
              default: h(() => [
                b(f(r.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (a(), c("div", $6, [
      t("div", C6, [
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
      t("div", x6, [
        e.status && d.value ? (a(), c("div", S6, [
          e.status.workflows.new.length ? (a(), c("div", I6, [
            S[23] || (S[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), c("div", E6, [
            S[24] || (S[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), c("div", T6, [
            S[25] || (S[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), c("div", P6, [
            S[26] || (S[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), c("div", R6, [
            S[27] || (S[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (a(), c("div", M6, [...S[28] || (S[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), c("div", D6, " No changes to commit ")) : (a(), c("div", L6, " Loading... ")),
        g.value ? (a(), c("div", O6, [
          t("div", A6, [
            S[29] || (S[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", U6, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", N6, [
            (a(!0), c(H, null, $e(v.value, ($) => (a(), c("div", {
              key: $.name,
              class: "issue-item"
            }, [
              t("strong", null, f($.name), 1),
              t("span", z6, "(" + f($.sync_state) + ")", 1),
              b(": " + f($.issue_summary), 1)
            ]))), 128))
          ]),
          x(Da, {
            modelValue: u.value,
            "onUpdate:modelValue": S[7] || (S[7] = ($) => u.value = $),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...S[30] || (S[30] = [
              b(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        t("div", F6, [
          x(ei, {
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
      t("div", B6, [
        x(Le, {
          variant: "secondary",
          onClick: S[9] || (S[9] = ($) => n("close"))
        }, {
          default: h(() => [...S[31] || (S[31] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        x(Le, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !i.value.trim() || r.value || w.value,
          loading: r.value,
          onClick: p
        }, {
          default: h(() => [
            b(f(r.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Br = /* @__PURE__ */ be(V6, [["__scopeId", "data-v-5f897631"]]), W6 = { class: "modal-header" }, G6 = { class: "modal-body" }, j6 = { class: "switch-message" }, H6 = { class: "switch-details" }, K6 = { class: "modal-actions" }, q6 = /* @__PURE__ */ ke({
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
          onClick: o[3] || (o[3] = at(() => {
          }, ["stop"]))
        }, [
          t("div", W6, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", G6, [
            t("p", j6, [
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
            t("p", H6, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", K6, [
            x(fe, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(fe, {
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
}), Y6 = /* @__PURE__ */ be(q6, [["__scopeId", "data-v-e9c5253e"]]), J6 = {
  key: 0,
  class: "modal-overlay"
}, X6 = { class: "modal-content" }, Q6 = { class: "modal-body" }, Z6 = { class: "progress-info" }, eI = { class: "progress-percentage" }, tI = { class: "progress-state" }, sI = { class: "switch-steps" }, oI = { class: "step-icon" }, nI = { class: "step-label" }, aI = /* @__PURE__ */ ke({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const s = e, o = A(() => {
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
    }), n = A(() => s.state === "complete" ? "success" : s.state === "critical_failure" || s.state === "rolled_back" ? "error" : "default"), l = A(() => {
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
      e.show ? (a(), c("div", J6, [
        t("div", X6, [
          r[1] || (r[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", Q6, [
            x(Zn, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            t("div", Z6, [
              t("div", eI, f(e.progress) + "%", 1),
              t("div", tI, f(o.value), 1)
            ]),
            t("div", sI, [
              (a(!0), c(H, null, $e(l.value, (u) => (a(), c("div", {
                key: u.state,
                class: Te(["switch-step", u.status])
              }, [
                t("span", oI, f(u.icon), 1),
                t("span", nI, f(u.label), 1)
              ], 2))), 128))
            ]),
            r[0] || (r[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), lI = /* @__PURE__ */ be(aI, [["__scopeId", "data-v-768a5078"]]), iI = { class: "modal-header" }, rI = { class: "modal-body" }, cI = {
  key: 0,
  class: "node-section"
}, uI = { class: "node-list" }, dI = {
  key: 1,
  class: "node-section"
}, fI = { class: "node-list" }, mI = { class: "modal-actions" }, vI = /* @__PURE__ */ ke({
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
          onClick: o[3] || (o[3] = at(() => {
          }, ["stop"]))
        }, [
          t("div", iI, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", rI, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), c("div", cI, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", uI, [
                (a(!0), c(H, null, $e(e.mismatchDetails.missing_nodes, (n) => (a(), c("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), c("div", dI, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", fI, [
                (a(!0), c(H, null, $e(e.mismatchDetails.extra_nodes, (n) => (a(), c("div", {
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
          t("div", mI, [
            x(fe, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(fe, {
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
}), pI = /* @__PURE__ */ be(vI, [["__scopeId", "data-v-7cad7518"]]), gI = [
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
], hI = "v0.0.16", yI = "Akatz", wI = { class: "social-buttons" }, _I = ["title", "aria-label", "onClick"], kI = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, bI = ["d"], $I = ["title", "aria-label", "onClick"], CI = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, xI = ["d"], SI = /* @__PURE__ */ ke({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), c("div", wI, [
      (a(!0), c(H, null, $e(We(gI), (l) => (a(), c(H, {
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
          (a(), c("svg", kI, [
            t("path", {
              d: l.iconPath
            }, null, 8, bI)
          ]))
        ], 8, _I)) : (a(), c("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => s(l.url)
        }, [
          (a(), c("svg", CI, [
            t("path", {
              d: l.iconPath
            }, null, 8, xI)
          ]))
        ], 8, $I))
      ], 64))), 128))
    ]));
  }
}), Vr = /* @__PURE__ */ be(SI, [["__scopeId", "data-v-4f846342"]]), II = { class: "footer-info" }, EI = { class: "version" }, TI = { class: "made-by" }, PI = /* @__PURE__ */ ke({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (a(), c("div", II, [
      t("span", EI, f(We(hI)), 1),
      t("span", TI, [
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
        b(" by " + f(We(yI)), 1)
      ])
    ]));
  }
}), Wr = /* @__PURE__ */ be(PI, [["__scopeId", "data-v-8bc3db0a"]]), RI = /* @__PURE__ */ ke({
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
    return (i, r) => (a(), R(mt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: r[1] || (r[1] = (u) => i.$emit("close"))
    }, {
      body: h(() => [
        x(Tr, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var u;
        return [
          x(Le, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: n
          }, {
            default: h(() => [...r[2] || (r[2] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          x(Le, {
            variant: "secondary",
            onClick: r[0] || (r[0] = (d) => i.$emit("close"))
          }, {
            default: h(() => [...r[3] || (r[3] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), MI = /* @__PURE__ */ be(RI, [["__scopeId", "data-v-fac00ae7"]]), DI = { class: "header-actions" }, LI = {
  key: 0,
  class: "wizard-step"
}, OI = { class: "form-field" }, AI = ["placeholder"], UI = {
  key: 0,
  class: "form-error"
}, NI = { class: "form-field form-field--checkbox" }, zI = { class: "form-checkbox" }, FI = {
  key: 0,
  class: "form-field"
}, BI = ["placeholder"], VI = {
  key: 0,
  class: "form-info"
}, WI = {
  key: 1,
  class: "form-suggestion"
}, GI = {
  key: 2,
  class: "form-error"
}, jI = {
  key: 3,
  class: "form-info"
}, HI = {
  key: 1,
  class: "wizard-step"
}, KI = {
  key: 0,
  class: "progress-check-loading"
}, qI = {
  key: 0,
  class: "cli-warning"
}, YI = { class: "cli-warning-header" }, JI = {
  key: 1,
  class: "env-landing"
}, XI = { class: "env-list" }, QI = ["value"], ZI = { class: "env-name" }, eE = {
  key: 2,
  class: "env-create"
}, tE = { class: "form-field" }, sE = { class: "form-field" }, oE = ["value"], nE = { class: "form-field" }, aE = ["disabled"], lE = ["value"], iE = { class: "form-field" }, rE = ["value"], cE = { class: "form-field form-field--checkbox" }, uE = { class: "form-checkbox" }, dE = {
  key: 0,
  class: "form-error"
}, fE = {
  key: 1,
  class: "env-creating"
}, mE = { class: "creating-intro" }, vE = {
  key: 3,
  class: "env-import"
}, pE = { class: "wizard-footer" }, gE = { class: "wizard-footer-actions" }, io = 10, hE = 600 * 1e3, ti = 1800 * 1e3, yE = /* @__PURE__ */ ke({
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
    } = st(), g = k(o.initialStep || 1), w = k(null), p = k("landing"), _ = k(!1), S = k(!1), $ = k(!1), P = k(!1), D = k(null), E = k(o.initialStep === 2), C = k(o.defaultPath), G = k(!!o.detectedModelsDir), K = k(o.detectedModelsDir || ""), N = k(null), I = k(null), T = k(null), M = k(null), se = k("my-new-env"), X = k(Dr), j = k("latest"), oe = k(Lr), Z = k(!0), U = k(null), W = k(null), O = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), ie = k(!1), ge = k(!1), Me = k(!1), Ae = k({ progress: 0, message: "" }), de = k({ progress: 0, message: "" }), re = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], F = k(0), ee = k(null), he = k(0), pe = k(null), me = A(() => {
      var xe, Ce;
      const ne = (xe = C.value) == null ? void 0 : xe.trim(), Y = !N.value, Oe = !G.value || !I.value && ((Ce = K.value) == null ? void 0 : Ce.trim());
      return ne && Y && Oe;
    }), De = A(() => {
      var ne;
      return (ne = se.value) == null ? void 0 : ne.trim();
    }), Re = A(() => !!(g.value === 2 || W.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), L = A(() => W.value || o.workspacePath || null);
    async function B() {
      var ne;
      if (N.value = null, !!((ne = C.value) != null && ne.trim()))
        try {
          const Y = await r({ path: C.value, type: "workspace" });
          Y.valid || (N.value = Y.error || "Invalid path");
        } catch (Y) {
          N.value = Y instanceof Error ? Y.message : "Validation failed";
        }
    }
    async function ae() {
      var ne;
      if (I.value = null, T.value = null, M.value = null, !!((ne = K.value) != null && ne.trim()))
        try {
          const Y = await r({ path: K.value, type: "models" });
          if (Y.valid)
            M.value = Y.model_count ?? null;
          else if (I.value = Y.error || "Invalid path", Y.suggestion) {
            T.value = Y.suggestion, K.value = Y.suggestion, I.value = null;
            const Oe = await r({ path: Y.suggestion, type: "models" });
            Oe.valid && (M.value = Oe.model_count ?? null);
          }
        } catch (Y) {
          I.value = Y instanceof Error ? Y.message : "Validation failed";
        }
    }
    async function ue() {
      var ne, Y, Oe, xe, Ce;
      if (N.value = null, I.value = null, await B(), (ne = N.value) != null && ne.includes("already exists")) {
        N.value = null, W.value = ((Y = C.value) == null ? void 0 : Y.trim()) || o.defaultPath, g.value = 2, _e();
        return;
      }
      if (!N.value && !(G.value && ((Oe = K.value) != null && Oe.trim()) && (await ae(), I.value))) {
        ge.value = !0;
        try {
          await l({
            workspace_path: ((xe = C.value) == null ? void 0 : xe.trim()) || o.defaultPath,
            models_directory: G.value && ((Ce = K.value) == null ? void 0 : Ce.trim()) || null
          }), F.value = 0, ee.value = Date.now();
          const V = setInterval(async () => {
            var z;
            if (ee.value && Date.now() - ee.value > hE) {
              clearInterval(V), ge.value = !1, N.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const ve = await i();
              if (F.value = 0, ve.state === "idle" && ge.value) {
                clearInterval(V), ge.value = !1, N.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Ae.value = { progress: ve.progress, message: ve.message }, ve.state === "complete" ? (clearInterval(V), ge.value = !1, W.value = ((z = C.value) == null ? void 0 : z.trim()) || o.defaultPath, g.value = 2, _e()) : ve.state === "error" && (clearInterval(V), ge.value = !1, N.value = ve.error || "Workspace creation failed");
            } catch (ve) {
              F.value++, console.warn(`Polling failure ${F.value}/${io}:`, ve), F.value >= io && (clearInterval(V), ge.value = !1, N.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (V) {
          ge.value = !1, N.value = V instanceof Error ? V.message : "Failed to create workspace";
        }
      }
    }
    async function we() {
      Me.value = !0, U.value = null;
      try {
        const ne = {
          name: se.value.trim() || "my-new-env",
          python_version: X.value,
          comfyui_version: j.value,
          torch_backend: oe.value,
          switch_after: Z.value,
          workspace_path: W.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(ne)).status === "started") {
          he.value = 0, pe.value = Date.now();
          const Oe = setInterval(async () => {
            if (pe.value && Date.now() - pe.value > ti) {
              clearInterval(Oe), Me.value = !1, U.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const xe = await d();
              if (he.value = 0, xe.state === "idle" && Me.value) {
                clearInterval(Oe), Me.value = !1, U.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (de.value = {
                progress: xe.progress ?? 0,
                message: xe.message,
                phase: xe.phase
              }, xe.state === "complete") {
                clearInterval(Oe), Me.value = !1;
                const Ce = xe.environment_name || ne.name;
                Z.value ? n("complete", Ce, W.value) : (p.value = "landing", n("environment-created-no-switch", Ce));
              } else xe.state === "error" && (clearInterval(Oe), Me.value = !1, U.value = xe.error || "Environment creation failed");
            } catch (xe) {
              he.value++, console.warn(`Polling failure ${he.value}/${io}:`, xe), he.value >= io && (clearInterval(Oe), Me.value = !1, U.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ne) {
        Me.value = !1, U.value = ne instanceof Error ? ne.message : "Unknown error";
      }
    }
    async function _e() {
      ie.value = !0;
      try {
        O.value = await v();
      } catch (ne) {
        console.error("Failed to load ComfyUI releases:", ne);
      } finally {
        ie.value = !1;
      }
    }
    function Ie() {
      w.value && n("switch-environment", w.value, W.value);
    }
    function Ee() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : g.value === 2 && o.setupState === "no_workspace" && (g.value = 1);
    }
    function ce(ne, Y) {
      S.value = !1, Y ? n("complete", ne, W.value) : (n("environment-created-no-switch", ne), p.value = "landing");
    }
    function ye() {
    }
    Xe(async () => {
      if (o.detectedModelsDir && (K.value = o.detectedModelsDir), o.workspacePath && (W.value = o.workspacePath), g.value === 2) {
        _e();
        const ne = setTimeout(() => {
          E.value = !1;
        }, 3e3);
        await Ne(), clearTimeout(ne), E.value = !1;
      }
    });
    async function Ne() {
      try {
        const ne = await d();
        if (console.log("[ComfyGit] Create progress check:", ne.state, ne), ne.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ne.environment_name), p.value = "create", Me.value = !0, se.value = ne.environment_name || "my-new-env", de.value = {
            progress: ne.progress ?? 0,
            message: ne.message,
            phase: ne.phase
          }, Pe();
          return;
        }
      } catch (ne) {
        console.log("[ComfyGit] Create progress check failed:", ne);
      }
      try {
        const ne = await m();
        console.log("[ComfyGit] Import progress check:", ne.state, ne), ne.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ne.environment_name), D.value = {
          message: ne.message || "Importing...",
          phase: ne.phase || "",
          progress: ne.progress ?? 0,
          environmentName: ne.environment_name || ""
        }, P.value = !0, p.value = "import", S.value = !0);
      } catch (ne) {
        console.log("[ComfyGit] Import progress check failed:", ne);
      }
    }
    async function Pe() {
      he.value = 0, pe.value = Date.now();
      let ne = null;
      const Y = async () => {
        if (pe.value && Date.now() - pe.value > ti)
          return ne && clearInterval(ne), Me.value = !1, U.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const xe = await d();
          if (he.value = 0, xe.state === "idle" && Me.value)
            return ne && clearInterval(ne), Me.value = !1, U.value = "Environment creation was interrupted. Please try again.", !1;
          if (de.value = {
            progress: xe.progress ?? 0,
            message: xe.message,
            phase: xe.phase
          }, xe.state === "complete") {
            ne && clearInterval(ne), Me.value = !1;
            const Ce = xe.environment_name || se.value;
            return n("complete", Ce, W.value), !1;
          } else if (xe.state === "error")
            return ne && clearInterval(ne), Me.value = !1, U.value = xe.error || "Environment creation failed", !1;
          return !0;
        } catch (xe) {
          return he.value++, console.warn(`Polling failure ${he.value}/${io}:`, xe), he.value >= io ? (ne && clearInterval(ne), Me.value = !1, U.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await Y() && (ne = setInterval(async () => {
        !await Y() && ne && clearInterval(ne);
      }, 2e3));
    }
    return (ne, Y) => (a(), c(H, null, [
      x(mt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: Y[15] || (Y[15] = (Oe) => ne.$emit("close"))
      }, {
        header: h(() => [
          Y[20] || (Y[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", DI, [
            x(Vr),
            Y[19] || (Y[19] = t("span", { class: "header-divider" }, null, -1)),
            Re.value ? (a(), c("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: Y[0] || (Y[0] = (Oe) => _.value = !0)
            }, [...Y[17] || (Y[17] = [
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
              onClick: Y[1] || (Y[1] = (Oe) => ne.$emit("close")),
              title: "Close"
            }, [...Y[18] || (Y[18] = [
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
          var Oe;
          return [
            g.value === 1 ? (a(), c("div", LI, [
              Y[24] || (Y[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", OI, [
                Y[21] || (Y[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": Y[2] || (Y[2] = (xe) => C.value = xe),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, AI), [
                  [zt, C.value]
                ]),
                N.value ? (a(), c("p", UI, f(N.value), 1)) : y("", !0)
              ]),
              t("div", NI, [
                t("label", zI, [
                  qe(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": Y[3] || (Y[3] = (xe) => G.value = xe)
                  }, null, 512), [
                    [en, G.value]
                  ]),
                  Y[22] || (Y[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              G.value ? (a(), c("div", FI, [
                Y[23] || (Y[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": Y[4] || (Y[4] = (xe) => K.value = xe),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, BI), [
                  [zt, K.value]
                ]),
                e.detectedModelsDir && !K.value ? (a(), c("p", VI, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                T.value ? (a(), c("p", WI, " Did you mean: " + f(T.value), 1)) : y("", !0),
                I.value ? (a(), c("p", GI, f(I.value), 1)) : y("", !0),
                M.value !== null && !I.value ? (a(), c("p", jI, " Found " + f(M.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              ge.value ? (a(), R(Nn, {
                key: 1,
                progress: Ae.value.progress,
                message: Ae.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            g.value === 2 ? (a(), c("div", HI, [
              E.value ? (a(), c("div", KI, [...Y[25] || (Y[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), c(H, { key: 1 }, [
                !o.cliInstalled && !$.value ? (a(), c("div", qI, [
                  t("div", YI, [
                    Y[27] || (Y[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    Y[28] || (Y[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: Y[5] || (Y[5] = (xe) => $.value = !0),
                      title: "Dismiss"
                    }, [...Y[26] || (Y[26] = [
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
                  Y[29] || (Y[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  Y[30] || (Y[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                p.value === "landing" ? (a(), c("div", JI, [
                  Y[34] || (Y[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: Y[6] || (Y[6] = (xe) => p.value = "create")
                  }, [...Y[31] || (Y[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: Y[7] || (Y[7] = (xe) => {
                      P.value = !1, p.value = "import";
                    })
                  }, [...Y[32] || (Y[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Oe = o.existingEnvironments) != null && Oe.length ? (a(), c(H, { key: 0 }, [
                    Y[33] || (Y[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", XI, [
                      (a(!0), c(H, null, $e(o.existingEnvironments, (xe) => (a(), c("label", {
                        key: xe,
                        class: Te(["env-option", { selected: w.value === xe }])
                      }, [
                        qe(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: xe,
                          "onUpdate:modelValue": Y[8] || (Y[8] = (Ce) => w.value = Ce)
                        }, null, 8, QI), [
                          [Qt, w.value]
                        ]),
                        t("span", ZI, f(xe), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (a(), c("div", eE, [
                  Me.value ? (a(), c("div", fE, [
                    t("p", mE, [
                      Y[41] || (Y[41] = b(" Creating environment ", -1)),
                      t("strong", null, f(se.value), 1),
                      Y[42] || (Y[42] = b("... ", -1))
                    ]),
                    x(Nn, {
                      progress: de.value.progress,
                      message: de.value.message,
                      "current-phase": de.value.phase,
                      "show-steps": !0,
                      steps: re
                    }, null, 8, ["progress", "message", "current-phase"]),
                    Y[43] || (Y[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), c(H, { key: 0 }, [
                    Y[40] || (Y[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", tE, [
                      Y[35] || (Y[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      qe(t("input", {
                        "onUpdate:modelValue": Y[9] || (Y[9] = (xe) => se.value = xe),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [zt, se.value]
                      ])
                    ]),
                    t("div", sE, [
                      Y[36] || (Y[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": Y[10] || (Y[10] = (xe) => X.value = xe),
                        class: "form-select"
                      }, [
                        (a(!0), c(H, null, $e(We(Mr), (xe) => (a(), c("option", {
                          key: xe,
                          value: xe
                        }, f(xe), 9, oE))), 128))
                      ], 512), [
                        [hs, X.value]
                      ])
                    ]),
                    t("div", nE, [
                      Y[37] || (Y[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": Y[11] || (Y[11] = (xe) => j.value = xe),
                        class: "form-select",
                        disabled: ie.value
                      }, [
                        (a(!0), c(H, null, $e(O.value, (xe) => (a(), c("option", {
                          key: xe.tag_name,
                          value: xe.tag_name
                        }, f(xe.name), 9, lE))), 128))
                      ], 8, aE), [
                        [hs, j.value]
                      ])
                    ]),
                    t("div", iE, [
                      Y[38] || (Y[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": Y[12] || (Y[12] = (xe) => oe.value = xe),
                        class: "form-select"
                      }, [
                        (a(!0), c(H, null, $e(We(al), (xe) => (a(), c("option", {
                          key: xe,
                          value: xe
                        }, f(xe) + f(xe === "auto" ? " (detect GPU)" : ""), 9, rE))), 128))
                      ], 512), [
                        [hs, oe.value]
                      ])
                    ]),
                    t("div", cE, [
                      t("label", uE, [
                        qe(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": Y[13] || (Y[13] = (xe) => Z.value = xe)
                        }, null, 512), [
                          [en, Z.value]
                        ]),
                        Y[39] || (Y[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    U.value ? (a(), c("div", dE, f(U.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (a(), c("div", vE, [
                  x(Ur, {
                    "workspace-path": W.value,
                    "resume-import": P.value,
                    "initial-progress": D.value ?? void 0,
                    onImportComplete: ce,
                    onImportStarted: Y[14] || (Y[14] = (xe) => S.value = !0),
                    onSourceCleared: ye
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          t("div", pE, [
            x(Wr),
            t("div", gE, [
              g.value === 1 ? (a(), R(Le, {
                key: 0,
                variant: "primary",
                disabled: !me.value || ge.value,
                onClick: ue
              }, {
                default: h(() => [
                  b(f(ge.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : g.value === 2 ? (a(), c(H, { key: 1 }, [
                !Me.value && !S.value && (p.value !== "landing" || o.setupState === "no_workspace" && !W.value) ? (a(), R(Le, {
                  key: 0,
                  variant: "secondary",
                  onClick: Ee
                }, {
                  default: h(() => [...Y[44] || (Y[44] = [
                    b(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (a(), R(Le, {
                  key: 1,
                  variant: "primary",
                  disabled: !De.value || Me.value,
                  onClick: we
                }, {
                  default: h(() => [
                    b(f(Me.value ? "Creating..." : Z.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                p.value === "landing" && w.value ? (a(), R(Le, {
                  key: 2,
                  variant: "primary",
                  onClick: Ie
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
      _.value ? (a(), R(MI, {
        key: 0,
        "workspace-path": L.value,
        onClose: Y[16] || (Y[16] = (Oe) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), wE = /* @__PURE__ */ be(yE, [["__scopeId", "data-v-9a9aadc0"]]), _E = { class: "comfygit-panel" }, kE = { class: "panel-header" }, bE = { class: "header-left" }, $E = {
  key: 0,
  class: "header-info"
}, CE = { class: "header-actions" }, xE = { class: "env-switcher" }, SE = {
  key: 0,
  class: "header-info"
}, IE = { class: "branch-name" }, EE = { class: "panel-main" }, TE = { class: "sidebar" }, PE = { class: "sidebar-content" }, RE = { class: "sidebar-section" }, ME = { class: "sidebar-section" }, DE = { class: "sidebar-section" }, LE = {
  key: 0,
  class: "sidebar-badge"
}, OE = { class: "sidebar-footer" }, AE = { class: "content-area" }, UE = {
  key: 0,
  class: "error-message"
}, NE = {
  key: 1,
  class: "loading"
}, zE = { class: "dialog-content env-selector-dialog" }, FE = { class: "dialog-header" }, BE = { class: "dialog-body" }, VE = { class: "env-list" }, WE = { class: "env-info" }, GE = { class: "env-name-row" }, jE = { class: "env-indicator" }, HE = { class: "env-name" }, KE = {
  key: 0,
  class: "env-branch"
}, qE = {
  key: 1,
  class: "current-label"
}, YE = { class: "env-stats" }, JE = ["onClick"], XE = { class: "toast-container" }, QE = { class: "toast-message" }, ZE = /* @__PURE__ */ ke({
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
      getEnvironments: g,
      switchEnvironment: w,
      getSwitchProgress: p,
      deleteEnvironment: _,
      syncEnvironmentManually: S,
      repairWorkflowModels: $,
      getSetupStatus: P
    } = st(), D = Rv(), { liveInstanceCount: E } = Nr({ autoStart: !0 }), C = k(null), G = k([]), K = k([]), N = k([]), I = A(() => N.value.find((le) => le.is_current)), T = k(null), M = k(!1), se = k(1), X = A(() => {
      var le;
      return ((le = T.value) == null ? void 0 : le.state) || "managed";
    }), j = k(!1), oe = k(null), Z = k(null), U = k(!1), W = k(null), O = k(null), ie = k(null), ge = k(!1), Me = k(!1), Ae = k(""), de = k(null), re = k({ state: "idle", progress: 0, message: "" });
    let F = null, ee = null;
    const he = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, pe = o.initialView ? he[o.initialView] : null, me = k((pe == null ? void 0 : pe.view) ?? "status"), De = k((pe == null ? void 0 : pe.section) ?? "this-env");
    function Re(le, q) {
      me.value = le, De.value = q;
    }
    function L(le) {
      const Ue = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[le];
      Ue && Re(Ue.view, Ue.section);
    }
    function B() {
      Re("branches", "this-env");
    }
    function ae() {
      n("close"), setTimeout(() => {
        var q;
        const le = document.querySelectorAll("button.comfyui-button");
        for (const Ue of le)
          if (((q = Ue.textContent) == null ? void 0 : q.trim()) === "Manager") {
            Ue.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ue = k(null), we = k(!1), _e = k(!1), Ie = k([]);
    let Ee = 0;
    function ce(le, q = "info", Ue = 3e3) {
      const je = ++Ee;
      return Ie.value.push({ id: je, message: le, type: q }), Ue > 0 && setTimeout(() => {
        Ie.value = Ie.value.filter((ot) => ot.id !== je);
      }, Ue), je;
    }
    function ye(le) {
      Ie.value = Ie.value.filter((q) => q.id !== le);
    }
    function Ne(le, q) {
      ce(le, q);
    }
    const Pe = A(() => {
      if (!C.value) return "neutral";
      const le = C.value.workflows, q = le.new.length > 0 || le.modified.length > 0 || le.deleted.length > 0 || C.value.has_changes;
      return C.value.comparison.is_synced ? q ? "warning" : "success" : "error";
    });
    A(() => C.value ? Pe.value === "success" ? "All synced" : Pe.value === "warning" ? "Uncommitted changes" : Pe.value === "error" ? "Not synced" : "" : "");
    async function ne() {
      j.value = !0, oe.value = null;
      try {
        const [le, q, Ue, je] = await Promise.all([
          l(!0),
          i(),
          r(),
          g()
        ]);
        C.value = le, G.value = q.commits, K.value = Ue.branches, N.value = je, n("statusUpdate", le), W.value && await W.value.loadWorkflows(!0);
      } catch (le) {
        oe.value = le instanceof Error ? le.message : "Failed to load status", C.value = null, G.value = [], K.value = [];
      } finally {
        j.value = !1;
      }
    }
    function Y(le) {
      Z.value = le;
    }
    async function Oe(le) {
      var Ue;
      Z.value = null;
      const q = C.value && (C.value.workflows.new.length > 0 || C.value.workflows.modified.length > 0 || C.value.workflows.deleted.length > 0 || C.value.has_changes);
      ue.value = {
        title: q ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: q ? "You have uncommitted changes that will be lost." : `Checkout commit ${le.short_hash || ((Ue = le.hash) == null ? void 0 : Ue.slice(0, 7))}?`,
        details: q ? is() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: q ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: q,
        onConfirm: async () => {
          var ft;
          ue.value = null, ve();
          const je = ce(`Checking out ${le.short_hash || ((ft = le.hash) == null ? void 0 : ft.slice(0, 7))}...`, "info", 0), ot = await u(le.hash, q);
          ye(je), ot.status === "success" ? ce("Restarting ComfyUI...", "success") : ce(ot.message || "Checkout failed", "error");
        }
      };
    }
    async function xe(le) {
      const q = C.value && (C.value.workflows.new.length > 0 || C.value.workflows.modified.length > 0 || C.value.workflows.deleted.length > 0 || C.value.has_changes);
      ue.value = {
        title: q ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: q ? "You have uncommitted changes." : `Switch to branch "${le}"?`,
        details: q ? is() : void 0,
        warning: q ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: q ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ue.value = null, ve();
          const Ue = ce(`Switching to ${le}...`, "info", 0), je = await m(le, q);
          ye(Ue), je.status === "success" ? ce("Restarting ComfyUI...", "success") : ce(je.message || "Branch switch failed", "error");
        }
      };
    }
    async function Ce(le) {
      const q = ce(`Creating branch ${le}...`, "info", 0), Ue = await d(le);
      ye(q), Ue.status === "success" ? (ce(`Branch "${le}" created`, "success"), await ne()) : ce(Ue.message || "Failed to create branch", "error");
    }
    async function V(le, q = !1) {
      const Ue = async (je) => {
        var ft;
        const ot = ce(`Deleting branch ${le}...`, "info", 0);
        try {
          const Mt = await v(le, je);
          ye(ot), Mt.status === "success" ? (ce(`Branch "${le}" deleted`, "success"), await ne()) : (ft = Mt.message) != null && ft.includes("not fully merged") ? ue.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${le}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ue.value = null, await Ue(!0);
            }
          } : ce(Mt.message || "Failed to delete branch", "error");
        } catch (Mt) {
          ye(ot);
          const rs = Mt instanceof Error ? Mt.message : "Failed to delete branch";
          rs.includes("not fully merged") ? ue.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${le}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ue.value = null, await Ue(!0);
            }
          } : ce(rs, "error");
        }
      };
      ue.value = {
        title: "Delete Branch",
        message: `Delete branch "${le}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ue.value = null, await Ue(q);
        }
      };
    }
    async function z(le) {
      Z.value = null;
      const q = prompt("Enter branch name:");
      if (q) {
        const Ue = ce(`Creating branch ${q}...`, "info", 0), je = await d(q, le.hash);
        ye(Ue), je.status === "success" ? (ce(`Branch "${q}" created from ${le.short_hash}`, "success"), await ne()) : ce(je.message || "Failed to create branch", "error");
      }
    }
    function ve() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Ve() {
      ue.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var le;
          ue.value = null, ve(), ce("Restarting environment...", "info");
          try {
            (le = window.app) != null && le.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Qe() {
      ue.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var le;
          ue.value = null, ce("Stopping environment...", "info");
          try {
            (le = window.app) != null && le.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function vt(le, q) {
      U.value = !1, Ae.value = le, de.value = q || null, ge.value = !0;
    }
    async function lt() {
      ge.value = !1, Me.value = !0, ve(), re.value = {
        progress: 10,
        state: ut(10),
        message: Rt(10)
      };
      try {
        await w(Ae.value, de.value || void 0), Ft(), Ws();
      } catch (le) {
        qt(), Me.value = !1, ce(`Failed to initiate switch: ${le instanceof Error ? le.message : "Unknown error"}`, "error"), re.value = { state: "idle", progress: 0, message: "" }, de.value = null;
      }
    }
    function ut(le) {
      return le >= 100 ? "complete" : le >= 80 ? "validating" : le >= 60 ? "starting" : le >= 30 ? "syncing" : "preparing";
    }
    function Rt(le) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[ut(le)] || "";
    }
    function Ft() {
      if (ee) return;
      let le = 10;
      const q = 60, Ue = 5e3, je = 100, ot = (q - le) / (Ue / je);
      ee = window.setInterval(() => {
        if (le += ot, le >= q && (le = q, qt()), re.value.progress < q) {
          const ft = Math.floor(le);
          re.value = {
            progress: ft,
            state: ut(ft),
            message: Rt(ft)
          };
        }
      }, je);
    }
    function qt() {
      ee && (clearInterval(ee), ee = null);
    }
    function Ws() {
      F || (F = window.setInterval(async () => {
        try {
          let le = await D.getStatus();
          if ((!le || le.state === "idle") && (le = await p()), !le)
            return;
          const q = le.progress || 0;
          q >= 60 && qt();
          const Ue = Math.max(q, re.value.progress), je = le.state && le.state !== "idle" && le.state !== "unknown", ot = je ? le.state : ut(Ue), ft = je && le.message || Rt(Ue);
          re.value = {
            state: ot,
            progress: Ue,
            message: ft
          }, le.state === "complete" ? (qt(), Ms(), Me.value = !1, ce(`✓ Switched to ${Ae.value}`, "success"), await ne(), Ae.value = "") : le.state === "rolled_back" ? (qt(), Ms(), Me.value = !1, ce("Switch failed, restored previous environment", "warning"), Ae.value = "") : le.state === "critical_failure" && (qt(), Ms(), Me.value = !1, ce(`Critical error during switch: ${le.message}`, "error"), Ae.value = "");
        } catch (le) {
          console.error("Failed to poll switch progress:", le);
        }
      }, 1e3));
    }
    function Ms() {
      qt(), F && (clearInterval(F), F = null);
    }
    function no() {
      var le;
      ge.value = !1, Ae.value = "", (le = T.value) != null && le.state && T.value.state !== "managed" && (se.value = T.value.state === "no_workspace" ? 1 : 2, M.value = !0);
    }
    async function Co(le) {
      we.value = !1, await ne(), ce(le.message, le.success ? "success" : "error");
    }
    async function xo() {
      _e.value = !1;
      const le = ce("Syncing environment...", "info", 0);
      try {
        const q = await S("skip", !0);
        if (ye(le), q.status === "success") {
          const Ue = [];
          q.nodes_installed.length && Ue.push(`${q.nodes_installed.length} installed`), q.nodes_removed.length && Ue.push(`${q.nodes_removed.length} removed`);
          const je = Ue.length ? `: ${Ue.join(", ")}` : "";
          ce(`✓ Environment synced${je}`, "success"), await ne();
        } else {
          const Ue = q.errors.length ? q.errors.join("; ") : q.message;
          ce(`Sync failed: ${Ue}`, "error");
        }
      } catch (q) {
        ye(le), ce(`Sync error: ${q instanceof Error ? q.message : "Unknown error"}`, "error");
      }
    }
    async function So(le) {
      var q;
      try {
        const Ue = await $(le);
        Ue.failed.length === 0 ? ce(`✓ Repaired ${Ue.success} workflow${Ue.success === 1 ? "" : "s"}`, "success") : ce(`Repaired ${Ue.success}, failed: ${Ue.failed.length}`, "warning"), await ne();
      } catch (Ue) {
        ce(`Repair failed: ${Ue instanceof Error ? Ue.message : "Unknown error"}`, "error");
      } finally {
        (q = ie.value) == null || q.resetRepairingState();
      }
    }
    async function Se() {
      var q, Ue;
      const le = ce("Repairing environment...", "info", 0);
      try {
        const je = await S("skip", !0);
        if (ye(le), je.status === "success") {
          const ot = [];
          je.nodes_installed.length && ot.push(`${je.nodes_installed.length} installed`), je.nodes_removed.length && ot.push(`${je.nodes_removed.length} removed`);
          const ft = ot.length ? `: ${ot.join(", ")}` : "";
          ce(`✓ Environment repaired${ft}`, "success"), (q = ie.value) == null || q.closeDetailModal(), await ne();
        } else {
          const ot = je.errors.length ? je.errors.join(", ") : je.message || "Unknown error";
          ce(`Repair failed: ${ot}`, "error");
        }
      } catch (je) {
        ye(le), ce(`Repair error: ${je instanceof Error ? je.message : "Unknown error"}`, "error");
      } finally {
        (Ue = ie.value) == null || Ue.resetRepairingEnvironmentState();
      }
    }
    async function Q(le, q) {
      ce(`Environment '${le}' created`, "success"), await ne(), O.value && await O.value.loadEnvironments(), q && await vt(le);
    }
    async function He(le) {
      var q;
      if (((q = I.value) == null ? void 0 : q.name) === le) {
        ce("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      ue.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${le}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          ue.value = null;
          try {
            const Ue = await _(le);
            Ue.status === "success" ? (ce(`Environment "${le}" deleted`, "success"), await ne(), O.value && await O.value.loadEnvironments()) : ce(Ue.message || "Failed to delete environment", "error");
          } catch (Ue) {
            ce(`Error deleting environment: ${Ue instanceof Error ? Ue.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ht(le, q) {
      M.value = !1;
      try {
        T.value = await P();
      } catch {
      }
      await vt(le, q);
    }
    function Yt() {
      M.value = !1, n("close");
    }
    async function ys(le, q) {
      await vt(le, q);
    }
    async function ws(le) {
      await ne(), await vt(le);
    }
    async function ls(le) {
      T.value = await P(), console.log(`Environment '${le}' created. Available for switching.`);
    }
    function ze() {
      Re("environments", "all-envs"), setTimeout(() => {
        var le;
        (le = O.value) == null || le.openCreateModal();
      }, 100);
    }
    function is() {
      if (!C.value) return [];
      const le = [], q = C.value.workflows;
      return q.new.length && le.push(`${q.new.length} new workflow(s)`), q.modified.length && le.push(`${q.modified.length} modified workflow(s)`), q.deleted.length && le.push(`${q.deleted.length} deleted workflow(s)`), le;
    }
    return Xe(async () => {
      try {
        if (T.value = await P(), T.value.state === "no_workspace") {
          M.value = !0, se.value = 1;
          return;
        }
        if (T.value.state === "empty_workspace") {
          M.value = !0, se.value = 2;
          return;
        }
        if (T.value.state === "unmanaged") {
          M.value = !0, se.value = 2;
          return;
        }
      } catch (le) {
        console.warn("Setup status check failed, proceeding normally:", le);
      }
      await ne();
    }), (le, q) => {
      var Ue, je, ot, ft, Mt, rs, Gs, js, ln, rn, cn, J;
      return a(), c("div", _E, [
        t("div", kE, [
          t("div", bE, [
            q[31] || (q[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            C.value ? (a(), c("div", $E)) : y("", !0)
          ]),
          t("div", CE, [
            x(Vr),
            q[34] || (q[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Te(["icon-btn", { spinning: j.value }]),
              onClick: ne,
              title: "Refresh"
            }, [...q[32] || (q[32] = [
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
              onClick: q[0] || (q[0] = (te) => n("close")),
              title: "Close"
            }, [...q[33] || (q[33] = [
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
        t("div", xE, [
          t("div", { class: "env-switcher-header" }, [
            q[35] || (q[35] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            t("div", { class: "env-control-buttons" }, [
              t("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Ve
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
            onClick: q[1] || (q[1] = (te) => Re("environments", "all-envs"))
          }, [
            C.value ? (a(), c("div", SE, [
              t("span", null, f(((Ue = I.value) == null ? void 0 : Ue.name) || ((je = C.value) == null ? void 0 : je.environment) || "Loading..."), 1),
              t("span", IE, "(" + f(C.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            q[36] || (q[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", EE, [
          t("div", TE, [
            t("div", PE, [
              t("div", RE, [
                q[37] || (q[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Te(["sidebar-item", { active: me.value === "status" && De.value === "this-env" }]),
                  onClick: q[2] || (q[2] = (te) => Re("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: me.value === "workflows" }]),
                  onClick: q[3] || (q[3] = (te) => Re("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: me.value === "models-env" }]),
                  onClick: q[4] || (q[4] = (te) => Re("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: me.value === "branches" }]),
                  onClick: q[5] || (q[5] = (te) => Re("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: me.value === "history" }]),
                  onClick: q[6] || (q[6] = (te) => Re("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: me.value === "nodes" }]),
                  onClick: q[7] || (q[7] = (te) => Re("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: me.value === "debug-env" }]),
                  onClick: q[8] || (q[8] = (te) => Re("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              q[41] || (q[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", ME, [
                q[38] || (q[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Te(["sidebar-item", { active: me.value === "environments" }]),
                  onClick: q[9] || (q[9] = (te) => Re("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: me.value === "model-index" }]),
                  onClick: q[10] || (q[10] = (te) => Re("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: me.value === "settings" }]),
                  onClick: q[11] || (q[11] = (te) => Re("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: me.value === "debug-workspace" }]),
                  onClick: q[12] || (q[12] = (te) => Re("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              q[42] || (q[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", DE, [
                q[40] || (q[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Te(["sidebar-item", { active: me.value === "deploy" }]),
                  onClick: q[13] || (q[13] = (te) => Re("deploy", "sharing"))
                }, [
                  q[39] || (q[39] = b(" DEPLOY ", -1)),
                  We(E) > 0 ? (a(), c("span", LE, f(We(E)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Te(["sidebar-item", { active: me.value === "export" }]),
                  onClick: q[14] || (q[14] = (te) => Re("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: me.value === "import" }]),
                  onClick: q[15] || (q[15] = (te) => Re("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: me.value === "remotes" }]),
                  onClick: q[16] || (q[16] = (te) => Re("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", OE, [
              x(Wr)
            ])
          ]),
          t("div", AE, [
            oe.value ? (a(), c("div", UE, f(oe.value), 1)) : !C.value && me.value === "status" ? (a(), c("div", NE, " Loading status... ")) : (a(), c(H, { key: 2 }, [
              me.value === "status" ? (a(), R(ov, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ie,
                status: C.value,
                "setup-state": X.value,
                onSwitchBranch: B,
                onCommitChanges: q[17] || (q[17] = (te) => we.value = !0),
                onSyncEnvironment: q[18] || (q[18] = (te) => _e.value = !0),
                onViewWorkflows: q[19] || (q[19] = (te) => Re("workflows", "this-env")),
                onViewHistory: q[20] || (q[20] = (te) => Re("history", "this-env")),
                onViewDebug: q[21] || (q[21] = (te) => Re("debug-env", "this-env")),
                onViewNodes: q[22] || (q[22] = (te) => Re("nodes", "this-env")),
                onRepairMissingModels: So,
                onRepairEnvironment: Se,
                onStartSetup: q[23] || (q[23] = (te) => M.value = !0),
                onViewEnvironments: q[24] || (q[24] = (te) => Re("environments", "all-envs")),
                onCreateEnvironment: ze
              }, null, 8, ["status", "setup-state"])) : me.value === "workflows" ? (a(), R(D0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: W,
                onRefresh: ne
              }, null, 512)) : me.value === "models-env" ? (a(), R(pw, {
                key: 2,
                onNavigate: L
              })) : me.value === "branches" ? (a(), R(yv, {
                key: 3,
                branches: K.value,
                current: ((ot = C.value) == null ? void 0 : ot.branch) || null,
                onSwitch: xe,
                onCreate: Ce,
                onDelete: V
              }, null, 8, ["branches", "current"])) : me.value === "history" ? (a(), R(Tv, {
                key: 4,
                commits: G.value,
                onSelect: Y,
                onCheckout: Oe
              }, null, 8, ["commits"])) : me.value === "nodes" ? (a(), R(U_, {
                key: 5,
                "version-mismatches": ((Mt = (ft = C.value) == null ? void 0 : ft.comparison) == null ? void 0 : Mt.version_mismatches) || [],
                onOpenNodeManager: ae,
                onRepairEnvironment: Se,
                onToast: Ne
              }, null, 8, ["version-mismatches"])) : me.value === "debug-env" ? (a(), R(X2, { key: 6 })) : me.value === "environments" ? (a(), R(eC, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: O,
                onSwitch: vt,
                onCreated: Q,
                onDelete: He
              }, null, 512)) : me.value === "model-index" ? (a(), R(i_, {
                key: 8,
                onRefresh: ne
              })) : me.value === "settings" ? (a(), R(V2, { key: 9 })) : me.value === "debug-workspace" ? (a(), R(J2, { key: 10 })) : me.value === "deploy" ? (a(), R(R4, {
                key: 11,
                onToast: Ne,
                onNavigate: L
              })) : me.value === "export" ? (a(), R(PC, { key: 12 })) : me.value === "import" ? (a(), R($3, {
                key: 13,
                onImportCompleteSwitch: ws
              })) : me.value === "remotes" ? (a(), R(b2, {
                key: 14,
                onToast: Ne
              })) : y("", !0)
            ], 64))
          ])
        ]),
        Z.value ? (a(), R(Y4, {
          key: 0,
          commit: Z.value,
          onClose: q[25] || (q[25] = (te) => Z.value = null),
          onCheckout: Oe,
          onCreateBranch: z
        }, null, 8, ["commit"])) : y("", !0),
        ue.value ? (a(), R(nl, {
          key: 1,
          title: ue.value.title,
          message: ue.value.message,
          details: ue.value.details,
          warning: ue.value.warning,
          confirmLabel: ue.value.confirmLabel,
          cancelLabel: ue.value.cancelLabel,
          secondaryLabel: ue.value.secondaryLabel,
          secondaryAction: ue.value.secondaryAction,
          destructive: ue.value.destructive,
          onConfirm: ue.value.onConfirm,
          onCancel: q[26] || (q[26] = (te) => ue.value = null),
          onSecondary: ue.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        x(Y6, {
          show: ge.value,
          "from-environment": ((rs = I.value) == null ? void 0 : rs.name) || "unknown",
          "to-environment": Ae.value,
          onConfirm: lt,
          onClose: no
        }, null, 8, ["show", "from-environment", "to-environment"]),
        we.value && C.value ? (a(), R(Br, {
          key: 2,
          status: C.value,
          "as-modal": !0,
          onClose: q[27] || (q[27] = (te) => we.value = !1),
          onCommitted: Co
        }, null, 8, ["status"])) : y("", !0),
        _e.value && C.value ? (a(), R(pI, {
          key: 3,
          show: _e.value,
          "mismatch-details": {
            missing_nodes: C.value.comparison.missing_nodes,
            extra_nodes: C.value.comparison.extra_nodes
          },
          onConfirm: xo,
          onClose: q[28] || (q[28] = (te) => _e.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        x(lI, {
          show: Me.value,
          state: re.value.state,
          progress: re.value.progress,
          message: re.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        U.value ? (a(), c("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: q[30] || (q[30] = at((te) => U.value = !1, ["self"]))
        }, [
          t("div", zE, [
            t("div", FE, [
              q[44] || (q[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: q[29] || (q[29] = (te) => U.value = !1)
              }, [...q[43] || (q[43] = [
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
            t("div", BE, [
              q[45] || (q[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", VE, [
                (a(!0), c(H, null, $e(N.value, (te) => (a(), c("div", {
                  key: te.name,
                  class: Te(["env-item", { current: te.is_current }])
                }, [
                  t("div", WE, [
                    t("div", GE, [
                      t("span", jE, f(te.is_current ? "●" : "○"), 1),
                      t("span", HE, f(te.name), 1),
                      te.current_branch ? (a(), c("span", KE, "(" + f(te.current_branch) + ")", 1)) : y("", !0),
                      te.is_current ? (a(), c("span", qE, "CURRENT")) : y("", !0)
                    ]),
                    t("div", YE, f(te.workflow_count) + " workflows • " + f(te.node_count) + " nodes ", 1)
                  ]),
                  te.is_current ? y("", !0) : (a(), c("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Fe) => vt(te.name)
                  }, " SWITCH ", 8, JE))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        M.value ? (a(), R(wE, {
          key: 5,
          "default-path": ((Gs = T.value) == null ? void 0 : Gs.default_path) || "~/comfygit",
          "detected-models-dir": ((js = T.value) == null ? void 0 : js.detected_models_dir) || null,
          "initial-step": se.value,
          "existing-environments": ((ln = T.value) == null ? void 0 : ln.environments) || [],
          "cli-installed": ((rn = T.value) == null ? void 0 : rn.cli_installed) ?? !0,
          "setup-state": ((cn = T.value) == null ? void 0 : cn.state) || "no_workspace",
          "workspace-path": ((J = T.value) == null ? void 0 : J.workspace_path) || null,
          onComplete: ht,
          onClose: Yt,
          onSwitchEnvironment: ys,
          onEnvironmentCreatedNoSwitch: ls
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", XE, [
          x(md, { name: "toast" }, {
            default: h(() => [
              (a(!0), c(H, null, $e(Ie.value, (te) => (a(), c("div", {
                key: te.id,
                class: Te(["toast", te.type])
              }, [
                t("span", QE, f(te.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), eT = /* @__PURE__ */ be(ZE, [["__scopeId", "data-v-037b3ee3"]]), tT = { class: "item-header" }, sT = { class: "item-info" }, oT = { class: "filename" }, nT = { class: "metadata" }, aT = { class: "size" }, lT = {
  key: 0,
  class: "type"
}, iT = { class: "item-actions" }, rT = {
  key: 0,
  class: "progress-section"
}, cT = { class: "progress-bar" }, uT = { class: "progress-stats" }, dT = { class: "downloaded" }, fT = { class: "speed" }, mT = {
  key: 0,
  class: "eta"
}, vT = {
  key: 1,
  class: "status-msg paused"
}, pT = {
  key: 2,
  class: "status-msg queued"
}, gT = {
  key: 3,
  class: "status-msg completed"
}, hT = {
  key: 4,
  class: "status-msg failed"
}, yT = {
  key: 0,
  class: "retries"
}, wT = /* @__PURE__ */ ke({
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
      class: Te(["download-item", `status-${e.item.status}`])
    }, [
      t("div", tT, [
        t("div", sT, [
          t("div", oT, f(e.item.filename), 1),
          t("div", nT, [
            t("span", aT, f(n(e.item.size)), 1),
            e.item.type ? (a(), c("span", lT, f(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", iT, [
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
      e.item.status === "downloading" ? (a(), c("div", rT, [
        t("div", cT, [
          t("div", {
            class: "progress-fill",
            style: Kt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", uT, [
          t("span", dT, f(n(e.item.downloaded)) + " / " + f(n(e.item.size)), 1),
          t("span", fT, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), c("span", mT, f(i(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), c("div", vT, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), c("div", pT, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), c("div", gT, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), c("div", hT, [
        b(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), c("span", yT, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Mo = /* @__PURE__ */ be(wT, [["__scopeId", "data-v-2110df65"]]), _T = { class: "queue-title" }, kT = { class: "count" }, bT = { class: "queue-actions" }, $T = { class: "action-label" }, CT = {
  key: 0,
  class: "overall-progress"
}, xT = { class: "progress-bar" }, ST = {
  key: 0,
  class: "current-mini"
}, IT = { class: "filename" }, ET = { class: "speed" }, TT = {
  key: 1,
  class: "queue-content"
}, PT = {
  key: 0,
  class: "section"
}, RT = {
  key: 1,
  class: "section"
}, MT = { class: "section-header" }, DT = { class: "section-label paused" }, LT = { class: "items-list" }, OT = {
  key: 2,
  class: "section"
}, AT = { class: "section-header" }, UT = { class: "section-label" }, NT = { class: "items-list" }, zT = {
  key: 3,
  class: "section"
}, FT = { class: "section-header" }, BT = { class: "section-label" }, VT = { class: "items-list" }, WT = {
  key: 4,
  class: "section"
}, GT = { class: "section-header" }, jT = { class: "section-label failed" }, HT = { class: "items-list" }, KT = /* @__PURE__ */ ke({
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
      resumeDownload: g,
      resumeAllPaused: w,
      removeItem: p,
      clearCompleted: _
    } = bo(), S = k(!1);
    let $ = null;
    gt(
      () => ({
        active: d.value,
        failed: i.value.length,
        paused: r.value.length,
        completed: l.value.length
      }),
      (C, G) => {
        $ && (clearTimeout($), $ = null);
        const K = C.active === 0 && C.failed === 0 && C.paused === 0 && C.completed > 0, N = G && (G.active > 0 || G.paused > 0);
        K && N && ($ = setTimeout(() => {
          _(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const P = A(() => {
      var K;
      if (s.items.length === 0) return 0;
      const C = l.value.length, G = ((K = o.value) == null ? void 0 : K.progress) || 0;
      return Math.round((C + G / 100) / s.items.length * 100);
    });
    function D(C) {
      m(C);
    }
    function E(C) {
      return C === 0 ? "" : `${(C / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (C, G) => (a(), R(wt, { to: "body" }, [
      We(u) ? (a(), c("div", {
        key: 0,
        class: Te(["model-download-queue", { minimized: !S.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: G[0] || (G[0] = (K) => S.value = !S.value)
        }, [
          t("div", _T, [
            G[4] || (G[4] = t("span", { class: "icon" }, "↓", -1)),
            G[5] || (G[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", kT, "(" + f(We(d)) + "/" + f(We(s).items.length) + ")", 1)
          ]),
          t("div", bT, [
            t("span", $T, f(S.value ? "minimize" : "expand"), 1)
          ])
        ]),
        S.value ? (a(), c("div", TT, [
          We(o) ? (a(), c("div", PT, [
            G[6] || (G[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            x(Mo, {
              item: We(o),
              onCancel: G[1] || (G[1] = (K) => D(We(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          We(r).length > 0 ? (a(), c("div", RT, [
            t("div", MT, [
              t("span", DT, "Paused (" + f(We(r).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: G[2] || (G[2] = //@ts-ignore
                (...K) => We(w) && We(w)(...K))
              }, "Resume All")
            ]),
            t("div", LT, [
              (a(!0), c(H, null, $e(We(r), (K) => (a(), R(Mo, {
                key: K.id,
                item: K,
                onResume: (N) => We(g)(K.id),
                onRemove: (N) => We(p)(K.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(n).length > 0 ? (a(), c("div", OT, [
            t("div", AT, [
              t("span", UT, "Queued (" + f(We(n).length) + ")", 1)
            ]),
            t("div", NT, [
              (a(!0), c(H, null, $e(We(n), (K) => (a(), R(Mo, {
                key: K.id,
                item: K,
                onCancel: (N) => D(K.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          We(l).length > 0 ? (a(), c("div", zT, [
            t("div", FT, [
              t("span", BT, "Completed (" + f(We(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: G[3] || (G[3] = //@ts-ignore
                (...K) => We(_) && We(_)(...K))
              }, "Clear")
            ]),
            t("div", VT, [
              (a(!0), c(H, null, $e(We(l).slice(0, 3), (K) => (a(), R(Mo, {
                key: K.id,
                item: K,
                onRemove: (N) => We(p)(K.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(i).length > 0 ? (a(), c("div", WT, [
            t("div", GT, [
              t("span", jT, "Failed (" + f(We(i).length) + ")", 1)
            ]),
            t("div", HT, [
              (a(!0), c(H, null, $e(We(i), (K) => (a(), R(Mo, {
                key: K.id,
                item: K,
                onRetry: (N) => We(v)(K.id),
                onRemove: (N) => We(p)(K.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), c("div", CT, [
          t("div", xT, [
            t("div", {
              class: "progress-fill",
              style: Kt({ width: `${P.value}%` })
            }, null, 4)
          ]),
          We(o) ? (a(), c("div", ST, [
            t("span", IT, f(We(o).filename), 1),
            t("span", ET, f(E(We(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), qT = /* @__PURE__ */ be(KT, [["__scopeId", "data-v-60751cfa"]]), YT = {
  key: 0,
  class: "loading-state"
}, JT = {
  key: 1,
  class: "analysis-results"
}, XT = {
  key: 0,
  class: "section"
}, QT = { class: "section-header" }, ZT = { class: "section-title" }, e7 = { class: "item-list" }, t7 = { class: "package-info" }, s7 = { class: "package-name" }, o7 = { class: "node-count" }, n7 = {
  key: 1,
  class: "installing-badge"
}, a7 = {
  key: 2,
  class: "queued-badge"
}, l7 = ["title"], i7 = {
  key: 4,
  class: "installed-badge"
}, r7 = {
  key: 0,
  class: "overflow-note"
}, c7 = {
  key: 1,
  class: "section"
}, u7 = { class: "section-header" }, d7 = { class: "section-title" }, f7 = { class: "item-list" }, m7 = { class: "node-type" }, v7 = {
  key: 0,
  class: "overflow-note"
}, p7 = {
  key: 2,
  class: "section"
}, g7 = { class: "section-header" }, h7 = { class: "section-title" }, y7 = { class: "item-list" }, w7 = { class: "model-info" }, _7 = { class: "model-name" }, k7 = {
  key: 1,
  class: "queued-badge"
}, b7 = {
  key: 1,
  class: "no-url"
}, $7 = {
  key: 0,
  class: "overflow-note"
}, C7 = { class: "dont-show-again" }, x7 = /* @__PURE__ */ ke({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = k(!1), o = k(null), n = k(null), l = k(!1), i = k(/* @__PURE__ */ new Set()), r = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Map()), d = k(/* @__PURE__ */ new Set()), m = k(!1), v = k(null), g = k(0), w = k(/* @__PURE__ */ new Set()), p = k(/* @__PURE__ */ new Map()), { addToQueue: _ } = bo(), { queueNodeInstall: S } = st(), $ = A(() => P.value.length > 0 || E.value.length > 0 || C.value.length > 0), P = A(() => {
      var F, ee;
      if (!((F = n.value) != null && F.nodes)) return [];
      const de = /* @__PURE__ */ new Map(), re = (n.value.nodes.resolved || []).filter((he) => {
        var pe;
        return !he.is_installed && ((pe = he.package) == null ? void 0 : pe.package_id);
      });
      for (const he of re) {
        const pe = he.package.package_id;
        de.has(pe) || de.set(pe, {
          package_id: pe,
          title: he.package.title || pe,
          node_count: 0,
          node_types: [],
          repository: he.package.repository || null,
          latest_version: he.package.latest_version || null
        });
        const me = de.get(pe);
        me.node_count++, me.node_types.push(((ee = he.reference) == null ? void 0 : ee.node_type) || he.node_type);
      }
      return Array.from(de.values());
    }), D = A(() => P.value.reduce((de, re) => de + re.node_count, 0)), E = A(() => {
      var de;
      return (de = n.value) != null && de.nodes ? (n.value.nodes.unresolved || []).map((re) => {
        var F;
        return {
          node_type: ((F = re.reference) == null ? void 0 : F.node_type) || re.node_type
        };
      }) : [];
    }), C = A(() => {
      var F;
      if (!((F = n.value) != null && F.models)) return [];
      const de = (n.value.models.resolved || []).filter(
        (ee) => ee.match_type === "download_intent" || ee.match_type === "property_download_intent" || ee.match_type === "not_found"
      ).map((ee) => {
        var he, pe, me, De;
        return {
          filename: ((pe = (he = ee.reference) == null ? void 0 : he.widget_value) == null ? void 0 : pe.split("/").pop()) || ((me = ee.reference) == null ? void 0 : me.widget_value) || ee.widget_value,
          widget_value: ((De = ee.reference) == null ? void 0 : De.widget_value) || ee.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: ee.download_source || null,
          targetPath: ee.target_path || null,
          canDownload: !!(ee.download_source && ee.target_path)
        };
      }), re = (n.value.models.unresolved || []).map((ee) => {
        var he, pe, me, De;
        return {
          filename: ((pe = (he = ee.reference) == null ? void 0 : he.widget_value) == null ? void 0 : pe.split("/").pop()) || ((me = ee.reference) == null ? void 0 : me.widget_value) || ee.widget_value,
          widget_value: ((De = ee.reference) == null ? void 0 : De.widget_value) || ee.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      });
      return [...de, ...re];
    }), G = A(() => C.value.filter((de) => de.canDownload)), K = A(() => P.value.length > 0 && P.value.every(
      (de) => i.value.has(de.package_id) || r.value.has(de.package_id) || u.value.has(de.package_id)
    )), N = A(() => G.value.length > 0 && G.value.every((de) => d.value.has(de.url))), I = A(() => P.value.length > 0 || G.value.length > 0), T = A(() => {
      const de = P.value.length === 0 || K.value, re = G.value.length === 0 || N.value;
      return de && re;
    });
    async function M(de) {
      const re = de.package_id;
      if (!(i.value.has(re) || r.value.has(re) || u.value.has(re))) {
        v.value = re;
        try {
          const { ui_id: F } = await S({
            id: re,
            version: de.latest_version || "latest",
            selected_version: de.latest_version || "latest",
            repository: de.repository || void 0,
            mode: "remote",
            channel: "default"
          });
          p.value.set(F, re), r.value.add(re);
        } catch (F) {
          console.error("[ComfyGit] Failed to queue package install:", F), u.value.set(re, "Failed to queue install request");
        } finally {
          v.value = null;
        }
      }
    }
    function se(de) {
      !de.url || !de.targetPath || d.value.has(de.url) || (_([{
        workflow: "unsaved",
        filename: de.filename,
        url: de.url,
        targetPath: de.targetPath
      }]), d.value.add(de.url));
    }
    async function X() {
      for (const de of P.value)
        !i.value.has(de.package_id) && !r.value.has(de.package_id) && !u.value.has(de.package_id) && await M(de);
    }
    function j() {
      const de = G.value.filter(
        (re) => !d.value.has(re.url)
      );
      if (de.length !== 0) {
        _(de.map((re) => ({
          workflow: "unsaved",
          filename: re.filename,
          url: re.url,
          targetPath: re.targetPath
        })));
        for (const re of de)
          d.value.add(re.url);
      }
    }
    function oe() {
      X(), j();
    }
    function Z() {
      m.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function U(de) {
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const re = de == null ? void 0 : de.id;
      if (re && w.value.has(re)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${re} this session`);
        return;
      }
      try {
        const F = await fetch("/v2/comfygit/workflow/is-saved", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: de })
        });
        if (F.ok) {
          const ee = await F.json();
          if (ee.is_saved) {
            console.log(`[ComfyGit] Workflow matches saved file: ${ee.filename}, skipping popup`), re && w.value.add(re);
            return;
          }
        }
      } catch (F) {
        console.warn("[ComfyGit] Failed to check if workflow is saved:", F);
      }
      s.value = !0, o.value = null, i.value = /* @__PURE__ */ new Set(), r.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), p.value = /* @__PURE__ */ new Map(), m.value = !1, g.value = 0;
      try {
        const F = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: de, name: "unsaved" })
        });
        if (!F.ok) {
          const ee = await F.json();
          throw new Error(ee.error || "Failed to analyze workflow");
        }
        n.value = await F.json(), $.value && (l.value = !0, re && w.value.add(re));
      } catch (F) {
        console.error("[ComfyGit] Failed to analyze workflow:", F);
      } finally {
        s.value = !1;
      }
    }
    function W() {
      l.value = !1, n.value = null;
    }
    function O(de) {
      const { workflow: re } = de.detail;
      re && U(re);
    }
    function ie(de) {
      var ee;
      const re = (ee = de.detail) == null ? void 0 : ee.ui_id, F = p.value.get(re);
      F && (v.value = F, console.log("[ComfyGit] Installing package:", F));
    }
    function ge(de) {
      var he, pe, me, De, Re, L, B;
      const re = (he = de.detail) == null ? void 0 : he.ui_id, F = p.value.get(re), ee = (me = (pe = de.detail) == null ? void 0 : pe.status) == null ? void 0 : me.status_str;
      if (F) {
        if (p.value.delete(re), r.value.delete(F), v.value === F && (v.value = null), ee === "success")
          i.value.add(F), g.value++, console.log("[ComfyGit] Package installed successfully:", F);
        else {
          const ae = ((L = (Re = (De = de.detail) == null ? void 0 : De.status) == null ? void 0 : Re.messages) == null ? void 0 : L[0]) || ((B = de.detail) == null ? void 0 : B.result) || "Unknown error";
          u.value.set(F, ae), console.error("[ComfyGit] Package install failed:", F, ae);
        }
        p.value.size === 0 && g.value > 0 && window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: g.value }
        }));
      }
    }
    function Me() {
      var de;
      return (de = window.app) == null ? void 0 : de.api;
    }
    function Ae(de) {
      const { change_type: re } = de.detail;
      (re === "created" || re === "modified") && l.value && (l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return Xe(() => {
      window.addEventListener("comfygit:workflow-loaded", O);
      const de = Me();
      de && (de.addEventListener("cm-task-started", ie), de.addEventListener("cm-task-completed", ge), de.addEventListener("comfygit:workflow-changed", Ae));
    }), oo(() => {
      window.removeEventListener("comfygit:workflow-loaded", O);
      const de = Me();
      de && (de.removeEventListener("cm-task-started", ie), de.removeEventListener("cm-task-completed", ge), de.removeEventListener("comfygit:workflow-changed", Ae));
    }), (de, re) => l.value ? (a(), R(mt, {
      key: 0,
      title: "Missing Dependencies",
      size: "md",
      loading: s.value,
      error: o.value || void 0,
      onClose: W
    }, {
      body: h(() => [
        s.value ? (a(), c("div", YT, [...re[1] || (re[1] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("span", null, "Analyzing workflow...", -1)
        ])])) : n.value && $.value ? (a(), c("div", JT, [
          P.value.length > 0 ? (a(), c("div", XT, [
            t("div", QT, [
              t("span", ZT, "Missing Custom Nodes (" + f(D.value) + ")", 1),
              P.value.length > 1 ? (a(), R(Le, {
                key: 0,
                size: "sm",
                variant: "secondary",
                disabled: K.value,
                onClick: X
              }, {
                default: h(() => [
                  b(f(K.value ? "All Queued" : "Install All"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y("", !0)
            ]),
            t("div", e7, [
              (a(!0), c(H, null, $e(P.value.slice(0, 5), (F) => (a(), c("div", {
                key: F.package_id,
                class: "package-item"
              }, [
                t("div", t7, [
                  t("span", s7, f(F.title), 1),
                  t("span", o7, "(" + f(F.node_count) + " " + f(F.node_count === 1 ? "node" : "nodes") + ")", 1)
                ]),
                !i.value.has(F.package_id) && !r.value.has(F.package_id) && !u.value.has(F.package_id) ? (a(), R(Le, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: v.value === F.package_id,
                  onClick: (ee) => M(F)
                }, {
                  default: h(() => [
                    b(f(v.value === F.package_id ? "Queueing..." : "Install"), 1)
                  ]),
                  _: 2
                }, 1032, ["disabled", "onClick"])) : v.value === F.package_id ? (a(), c("span", n7, "Installing...")) : r.value.has(F.package_id) ? (a(), c("span", a7, "Queued")) : u.value.has(F.package_id) ? (a(), c("span", {
                  key: 3,
                  class: "failed-badge",
                  title: u.value.get(F.package_id)
                }, "Failed ⚠", 8, l7)) : (a(), c("span", i7, "Installed"))
              ]))), 128)),
              P.value.length > 5 ? (a(), c("div", r7, " ...and " + f(P.value.length - 5) + " more packages ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          E.value.length > 0 ? (a(), c("div", c7, [
            t("div", u7, [
              t("span", d7, "Unknown Nodes (" + f(E.value.length) + ")", 1)
            ]),
            t("div", f7, [
              (a(!0), c(H, null, $e(E.value.slice(0, 5), (F) => (a(), c("div", {
                key: F.node_type,
                class: "item"
              }, [
                t("code", m7, f(F.node_type), 1),
                re[2] || (re[2] = t("span", { class: "not-found" }, "Not found in registry", -1))
              ]))), 128)),
              E.value.length > 5 ? (a(), c("div", v7, " ...and " + f(E.value.length - 5) + " more ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          C.value.length > 0 ? (a(), c("div", p7, [
            t("div", g7, [
              t("span", h7, "Missing Models (" + f(C.value.length) + ")", 1),
              G.value.length > 1 ? (a(), R(Le, {
                key: 0,
                size: "sm",
                variant: "secondary",
                disabled: N.value,
                onClick: j
              }, {
                default: h(() => [
                  b(f(N.value ? "All Queued" : "Download All"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y("", !0)
            ]),
            t("div", y7, [
              (a(!0), c(H, null, $e(C.value.slice(0, 5), (F) => (a(), c("div", {
                key: F.widget_value,
                class: "model-item"
              }, [
                t("div", w7, [
                  t("span", _7, f(F.filename), 1)
                ]),
                F.canDownload ? (a(), c(H, { key: 0 }, [
                  d.value.has(F.url) ? (a(), c("span", k7, "Queued")) : (a(), R(Le, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    onClick: (ee) => se(F)
                  }, {
                    default: h(() => [...re[3] || (re[3] = [
                      b(" Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"]))
                ], 64)) : (a(), c("span", b7, "Manual download required"))
              ]))), 128)),
              C.value.length > 5 ? (a(), c("div", $7, " ...and " + f(C.value.length - 5) + " more ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          t("div", C7, [
            x(Da, {
              modelValue: m.value,
              "onUpdate:modelValue": [
                re[0] || (re[0] = (F) => m.value = F),
                Z
              ]
            }, {
              default: h(() => [...re[4] || (re[4] = [
                b(" Don't show this popup ", -1)
              ])]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])) : y("", !0)
      ]),
      footer: h(() => [
        x(Le, {
          variant: "secondary",
          onClick: W
        }, {
          default: h(() => [...re[5] || (re[5] = [
            b("Dismiss", -1)
          ])]),
          _: 1
        }),
        I.value ? (a(), R(Le, {
          key: 0,
          variant: "primary",
          disabled: T.value,
          onClick: oe
        }, {
          default: h(() => [
            b(f(T.value ? "All Done" : "Download All"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["loading", "error"])) : y("", !0);
  }
}), S7 = /* @__PURE__ */ be(x7, [["__scopeId", "data-v-ed99da35"]]), I7 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', E7 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', T7 = {
  comfy: I7,
  phosphor: E7
}, ll = "comfy", Gr = "comfygit-theme";
let Ys = null, jr = ll;
function P7() {
  try {
    const e = localStorage.getItem(Gr);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return ll;
}
function Hr(e = ll) {
  Ys && Ys.remove(), Ys = document.createElement("style"), Ys.id = "comfygit-theme-styles", Ys.setAttribute("data-theme", e), Ys.textContent = T7[e], document.head.appendChild(Ys), document.body.setAttribute("data-comfygit-theme", e), jr = e;
  try {
    localStorage.setItem(Gr, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function R7() {
  return jr;
}
function M7(e) {
  Hr(e);
}
function D7(e) {
  var i;
  const { ui_id: s, state: o } = e || {}, n = (o == null ? void 0 : o.history) || {};
  if (!s)
    return null;
  const l = n[s];
  return l && l.result === "error" && ((i = l.status) == null ? void 0 : i.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const il = document.createElement("link");
il.rel = "stylesheet";
il.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(il);
const L7 = P7();
Hr(L7);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), M7(e);
  },
  getTheme: () => {
    const e = R7();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Xt = null, At = null, jo = null, Do = null, si = null, Lo = null, oi = null;
const ho = k(null);
let rl = "managed", Kr = !1;
async function Sn() {
  var e;
  if (!((e = Vt) != null && e.api)) return null;
  try {
    const s = await Vt.api.fetchApi("/v2/comfygit/status");
    s.ok && (ho.value = await s.json());
  } catch {
  }
}
async function La() {
  var e;
  if ((e = Vt) != null && e.api)
    try {
      const s = await Vt.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        rl = o.state, Kr = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function Oa() {
  var s;
  if (rl === "managed" || !Kr) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function O7() {
  if (!ho.value) return !1;
  const e = ho.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || ho.value.has_changes;
}
function ha(e) {
  Xt && Xt.remove(), Xt = document.createElement("div"), Xt.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", Xt.appendChild(s), Xt.addEventListener("click", (l) => {
    l.target === Xt && ya();
  });
  const o = (l) => {
    l.key === "Escape" && (ya(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), Qn({
    render: () => nn(eT, {
      initialView: e,
      onClose: ya,
      onStatusUpdate: async (l) => {
        ho.value = l, Ho(), await La(), Aa(), Oa();
      }
    })
  }).mount(s), document.body.appendChild(Xt);
}
function ya() {
  Xt && (Xt.remove(), Xt = null);
}
function A7(e) {
  Oo(), At = document.createElement("div"), At.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  At.style.position = "fixed", At.style.top = `${s.bottom + 8}px`, At.style.right = `${window.innerWidth - s.right}px`, At.style.zIndex = "10001";
  const o = (l) => {
    At && !At.contains(l.target) && l.target !== e && (Oo(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const n = (l) => {
    l.key === "Escape" && (Oo(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), jo = Qn({
    render: () => nn(Br, {
      status: ho.value,
      onClose: Oo,
      onCommitted: (l) => {
        Oo(), U7(l.success, l.message), Sn().then(Ho);
      }
    })
  }), jo.mount(At), document.body.appendChild(At);
}
function Oo() {
  jo && (jo.unmount(), jo = null), At && (At.remove(), At = null);
}
function U7(e, s) {
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
function N7() {
  Do || (Do = document.createElement("div"), Do.className = "comfygit-download-queue-root", si = Qn({
    render: () => nn(qT)
  }), si.mount(Do), document.body.appendChild(Do), console.log("[ComfyGit] Model download queue mounted"));
}
function z7() {
  Lo || (Lo = document.createElement("div"), Lo.className = "comfygit-missing-resources-root", oi = Qn({
    render: () => nn(S7)
  }), oi.mount(Lo), document.body.appendChild(Lo), console.log("[ComfyGit] Missing resources popup mounted"));
}
let Wt = null;
function Ho() {
  if (!Wt) return;
  const e = Wt.querySelector(".commit-indicator");
  e && (e.style.display = O7() ? "block" : "none");
}
function Aa() {
  if (!Wt) return;
  const e = rl !== "managed";
  Wt.disabled = e, Wt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const qr = document.createElement("style");
qr.textContent = `
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
document.head.appendChild(qr);
Vt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Hook into workflow loading to intercept missing resources
  // This runs BEFORE ComfyUI's missing nodes/models dialogs
  async beforeConfigureGraph(e, s) {
    var o;
    try {
      await Promise.all([
        Vt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
        Vt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = ha, Wt = document.createElement("button"), Wt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Wt.innerHTML = 'Commit <span class="commit-indicator"></span>', Wt.title = "Quick Commit", Wt.onclick = () => A7(Wt), e.appendChild(s), e.appendChild(Wt), (i = (l = Vt.menu) == null ? void 0 : l.settingsGroup) != null && i.element && (Vt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), N7(), z7(), window.addEventListener("comfygit:open-panel", ((r) => {
      var d;
      const u = (d = r.detail) == null ? void 0 : d.initialView;
      ha(u);
    }));
    const { loadPendingDownloads: o } = bo();
    o(), await Promise.all([Sn(), La()]), Ho(), Aa(), Oa(), setTimeout(Oa, 100), setInterval(async () => {
      await Promise.all([Sn(), La()]), Ho(), Aa();
    }, 3e4);
    const n = Vt.api;
    if (n) {
      let r = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((g) => {
          (g.startsWith("workflow:") || g.startsWith("Comfy.OpenWorkflowsPaths:") || g.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(g);
        }), window.location.reload();
      }, u = function() {
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
        `, p.onmouseover = () => p.style.background = "var(--comfy-input-bg)", p.onmouseout = () => p.style.background = "var(--comfy-menu-bg)", p.onclick = () => r(), g.appendChild(p);
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
      }, d = function(g) {
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
        const D = document.createElement("button");
        D.textContent = "View Logs", D.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, D.onmouseover = () => D.style.background = "#c62828", D.onmouseout = () => D.style.background = "#e53935", D.onclick = () => {
          p.remove(), ha("debug-env");
        }, p.appendChild(D);
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
        const D = document.createElement("button");
        D.textContent = "Apply Changes", D.style.cssText = `
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
        `, D.onmouseover = () => D.style.background = "rgba(255,255,255,0.1)", D.onmouseout = () => D.style.background = "transparent", D.onclick = async () => {
          D.disabled = !0, D.textContent = "Restarting...", D.style.opacity = "0.7", $.textContent = "Restarting...", P.textContent = "Applying changes, please wait...";
          try {
            const C = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Vt.refreshComboInNodes && (await Vt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", $.textContent = "Nodes Installed", $.style.color = "#4caf50", P.textContent = `${g} package${g > 1 ? "s" : ""} installed successfully!`, p.style.borderColor = "#4caf50", D.style.display = "none", setTimeout(() => {
                  p.remove();
                }, 3e3);
              } catch (G) {
                console.error("[ComfyGit] Failed to refresh nodes:", G), _.textContent = "✅", $.textContent = "Restart Complete", $.style.color = "#4caf50", P.textContent = "Refresh the page to load new nodes.", p.style.borderColor = "#4caf50", D.style.display = "none";
              }
            };
            n.addEventListener("reconnected", C, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (C) {
            console.error("[ComfyGit] Failed to restart:", C), $.textContent = "Restart Failed", $.style.color = "#e53935", P.textContent = "Could not restart server. Try again.", p.style.borderColor = "#e53935", D.textContent = "Try Again", D.disabled = !1, D.style.opacity = "1";
          }
        }, p.appendChild(D);
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
        console.log(`[ComfyGit] Workflow ${w}: ${p}`), await Sn(), Ho();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      n.addEventListener("status", async (g) => {
        const w = g.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), r()) : u()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (g) => {
        const w = D7(g.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (g) => {
        const w = g, { count: p = 1 } = w.detail || {};
        m(p);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
