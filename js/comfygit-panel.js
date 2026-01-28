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
const st = {}, fo = [], gs = () => {
}, ni = () => !1, Fn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Na = (e) => e.startsWith("onUpdate:"), pt = Object.assign, za = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, Yr = Object.prototype.hasOwnProperty, Ze = (e, s) => Yr.call(e, s), Be = Array.isArray, mo = (e) => tn(e) === "[object Map]", ko = (e) => tn(e) === "[object Set]", cl = (e) => tn(e) === "[object Date]", Ge = (e) => typeof e == "function", ct = (e) => typeof e == "string", ts = (e) => typeof e == "symbol", et = (e) => e !== null && typeof e == "object", ai = (e) => (et(e) || Ge(e)) && Ge(e.then) && Ge(e.catch), li = Object.prototype.toString, tn = (e) => li.call(e), Jr = (e) => tn(e).slice(8, -1), ii = (e) => tn(e) === "[object Object]", Fa = (e) => ct(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Uo = /* @__PURE__ */ Ua(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Bn = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, Xr = /-\w/g, Kt = Bn(
  (e) => e.replace(Xr, (s) => s.slice(1).toUpperCase())
), Qr = /\B([A-Z])/g, Bs = Bn(
  (e) => e.replace(Qr, "-$1").toLowerCase()
), Vn = Bn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ta = Bn(
  (e) => e ? `on${Vn(e)}` : ""
), Ns = (e, s) => !Object.is(e, s), kn = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, ri = (e, s, o, n = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, Wn = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, Zr = (e) => {
  const s = ct(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let ul;
const Gn = () => ul || (ul = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function qt(e) {
  if (Be(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = ct(n) ? oc(n) : qt(n);
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
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = s.hasOwnProperty(c);
      if (u && !d || !u && d || !eo(e[c], s[c]))
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
    (o, [n, l], i) => (o[sa(n, i) + " =>"] = l, o),
    {}
  )
} : ko(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => sa(o))
} : ts(s) ? sa(s) : et(s) && !Be(s) && !ii(s) ? String(s) : s, sa = (e, s = "") => {
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
let Lt;
class ic {
  constructor(s = !1) {
    this.detached = s, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Lt, !s && Lt && (this.index = (Lt.scopes || (Lt.scopes = [])).push(
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
      const o = Lt;
      try {
        return Lt = this, s();
      } finally {
        Lt = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Lt, Lt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Lt = this.prevScope, this.prevScope = void 0);
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
  return Lt;
}
let nt;
const oa = /* @__PURE__ */ new WeakSet();
class fi {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Lt && Lt.active && Lt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, oa.has(this) && (oa.delete(this), this.trigger()));
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
    const s = nt, o = es;
    nt = this, es = !0;
    try {
      return this.fn();
    } finally {
      gi(this), nt = s, es = o, this.flags &= -3;
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
    this.flags & 64 ? oa.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    _a(this) && this.run();
  }
  get dirty() {
    return _a(this);
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
function _a(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (hi(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function hi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ko) || (e.globalVersion = Ko, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !_a(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = nt, n = es;
  nt = e, es = !0;
  try {
    pi(e);
    const l = e.fn(e._value);
    (s.version === 0 || Ns(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    nt = o, es = n, gi(e), e.flags &= -3;
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
let es = !0;
const yi = [];
function Ss() {
  yi.push(es), es = !1;
}
function Is() {
  const e = yi.pop();
  es = e === void 0 ? !0 : e;
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
    if (!nt || !es || nt === this.computed)
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
const ka = /* @__PURE__ */ new WeakMap(), Qs = Symbol(
  ""
), ba = Symbol(
  ""
), qo = Symbol(
  ""
);
function wt(e, s, o) {
  if (es && nt) {
    let n = ka.get(e);
    n || ka.set(e, n = /* @__PURE__ */ new Map());
    let l = n.get(o);
    l || (n.set(o, l = new ja()), l.map = n, l.key = o), l.track();
  }
}
function $s(e, s, o, n, l, i) {
  const c = ka.get(e);
  if (!c) {
    Ko++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (Va(), s === "clear")
    c.forEach(u);
  else {
    const d = Be(e), m = d && Fa(o);
    if (d && o === "length") {
      const v = Number(n);
      c.forEach((g, w) => {
        (w === "length" || w === qo || !ts(w) && w >= v) && u(g);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), m && u(c.get(qo)), s) {
        case "add":
          d ? m && u(c.get("length")) : (u(c.get(Qs)), mo(e) && u(c.get(ba)));
          break;
        case "delete":
          d || (u(c.get(Qs)), mo(e) && u(c.get(ba)));
          break;
        case "set":
          mo(e) && u(c.get(Qs));
          break;
      }
  }
  Wa();
}
function ao(e) {
  const s = Je(e);
  return s === e ? s : (wt(s, "iterate", qo), Gt(e) ? s : s.map(ss));
}
function jn(e) {
  return wt(e = Je(e), "iterate", qo), e;
}
function Os(e, s) {
  return Es(e) ? Zs(e) ? yo(ss(s)) : yo(s) : ss(s);
}
const dc = {
  __proto__: null,
  [Symbol.iterator]() {
    return na(this, Symbol.iterator, (e) => Os(this, e));
  },
  concat(...e) {
    return ao(this).concat(
      ...e.map((s) => Be(s) ? ao(s) : s)
    );
  },
  entries() {
    return na(this, "entries", (e) => (e[1] = Os(this, e[1]), e));
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
    return aa(this, "includes", e);
  },
  indexOf(...e) {
    return aa(this, "indexOf", e);
  },
  join(e) {
    return ao(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return aa(this, "lastIndexOf", e);
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
    return na(this, "values", (e) => Os(this, e));
  }
};
function na(e, s, o) {
  const n = jn(e), l = n[s]();
  return n !== e && !Gt(e) && (l._next = l.next, l.next = () => {
    const i = l._next();
    return i.done || (i.value = o(i.value)), i;
  }), l;
}
const fc = Array.prototype;
function _s(e, s, o, n, l, i) {
  const c = jn(e), u = c !== e && !Gt(e), d = c[s];
  if (d !== fc[s]) {
    const g = d.apply(e, i);
    return u ? ss(g) : g;
  }
  let m = o;
  c !== e && (u ? m = function(g, w) {
    return o.call(this, Os(e, g), w, e);
  } : o.length > 2 && (m = function(g, w) {
    return o.call(this, g, w, e);
  }));
  const v = d.call(c, m, n);
  return u && l ? l(v) : v;
}
function fl(e, s, o, n) {
  const l = jn(e);
  let i = o;
  return l !== e && (Gt(e) ? o.length > 3 && (i = function(c, u, d) {
    return o.call(this, c, u, d, e);
  }) : i = function(c, u, d) {
    return o.call(this, c, Os(e, u), d, e);
  }), l[s](i, ...n);
}
function aa(e, s, o) {
  const n = Je(e);
  wt(n, "iterate", qo);
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
  return wt(s, "has", e), s.hasOwnProperty(e);
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
    const c = Be(s);
    if (!l) {
      let d;
      if (c && (d = dc[o]))
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
      $t(s) ? s : n
    );
    if ((ts(o) ? _i.has(o) : mc(o)) || (l || wt(s, "get", o), i))
      return u;
    if ($t(u)) {
      const d = c && Fa(o) ? u : u.value;
      return l && et(d) ? En(d) : d;
    }
    return et(u) ? l ? En(u) : Vs(u) : u;
  }
}
class bi extends ki {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, n, l) {
    let i = s[o];
    const c = Be(s) && Fa(o);
    if (!this._isShallow) {
      const m = Es(i);
      if (!Gt(n) && !Es(n) && (i = Je(i), n = Je(n)), !c && $t(i) && !$t(n))
        return m || (i.value = n), !0;
    }
    const u = c ? Number(o) < s.length : Ze(s, o), d = Reflect.set(
      s,
      o,
      n,
      $t(s) ? s : l
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
    return (!ts(o) || !_i.has(o)) && wt(s, "has", o), n;
  }
  ownKeys(s) {
    return wt(
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
const $a = (e) => e, dn = (e) => Reflect.getPrototypeOf(e);
function wc(e, s, o) {
  return function(...n) {
    const l = this.__v_raw, i = Je(l), c = mo(i), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, m = l[e](...n), v = o ? $a : s ? yo : ss;
    return !s && wt(
      i,
      "iterate",
      d ? ba : Qs
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
function fn(e) {
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function _c(e, s) {
  const o = {
    get(l) {
      const i = this.__v_raw, c = Je(i), u = Je(l);
      e || (Ns(l, u) && wt(c, "get", l), wt(c, "get", u));
      const { has: d } = dn(c), m = s ? $a : e ? yo : ss;
      if (d.call(c, l))
        return m(i.get(l));
      if (d.call(c, u))
        return m(i.get(u));
      i !== c && i.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && wt(Je(l), "iterate", Qs), l.size;
    },
    has(l) {
      const i = this.__v_raw, c = Je(i), u = Je(l);
      return e || (Ns(l, u) && wt(c, "has", l), wt(c, "has", u)), l === u ? i.has(l) : i.has(l) || i.has(u);
    },
    forEach(l, i) {
      const c = this, u = c.__v_raw, d = Je(u), m = s ? $a : e ? yo : ss;
      return !e && wt(d, "iterate", Qs), u.forEach((v, g) => l.call(i, m(v), m(g), c));
    }
  };
  return pt(
    o,
    e ? {
      add: fn("add"),
      set: fn("set"),
      delete: fn("delete"),
      clear: fn("clear")
    } : {
      add(l) {
        !s && !Gt(l) && !Es(l) && (l = Je(l));
        const i = Je(this);
        return dn(i).has.call(i, l) || (i.add(l), $s(i, "add", l, l)), this;
      },
      set(l, i) {
        !s && !Gt(i) && !Es(i) && (i = Je(i));
        const c = Je(this), { has: u, get: d } = dn(c);
        let m = u.call(c, l);
        m || (l = Je(l), m = u.call(c, l));
        const v = d.call(c, l);
        return c.set(l, i), m ? Ns(i, v) && $s(c, "set", l, i) : $s(c, "add", l, i), this;
      },
      delete(l) {
        const i = Je(this), { has: c, get: u } = dn(i);
        let d = c.call(i, l);
        d || (l = Je(l), d = c.call(i, l)), u && u.call(i, l);
        const m = i.delete(l);
        return d && $s(i, "delete", l, void 0), m;
      },
      clear() {
        const l = Je(this), i = l.size !== 0, c = l.clear();
        return i && $s(
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
function En(e) {
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
  const c = l.get(e);
  if (c)
    return c;
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
const ss = (e) => et(e) ? Vs(e) : e, yo = (e) => et(e) ? En(e) : e;
function $t(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function _(e) {
  return Tc(e, !1);
}
function Tc(e, s) {
  return $t(e) ? e : new Pc(e, s);
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
  return $t(e) ? e.value : e;
}
const Rc = {
  get: (e, s, o) => s === "__v_raw" ? e : We(Reflect.get(e, s, o)),
  set: (e, s, o, n) => {
    const l = e[s];
    return $t(l) && !$t(o) ? (l.value = o, !0) : Reflect.set(e, s, o, n);
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
const mn = {}, Tn = /* @__PURE__ */ new WeakMap();
let Js;
function Lc(e, s = !1, o = Js) {
  if (o) {
    let n = Tn.get(o);
    n || Tn.set(o, n = []), n.push(e);
  }
}
function Oc(e, s, o = st) {
  const { immediate: n, deep: l, once: i, scheduler: c, augmentJob: u, call: d } = o, m = (S) => l ? S : Gt(S) || l === !1 || l === 0 ? Cs(S, 1) : Cs(S);
  let v, g, w, p, k = !1, I = !1;
  if ($t(e) ? (g = () => e.value, k = Gt(e)) : Zs(e) ? (g = () => m(e), k = !0) : Be(e) ? (I = !0, k = e.some((S) => Zs(S) || Gt(S)), g = () => e.map((S) => {
    if ($t(S))
      return S.value;
    if (Zs(S))
      return m(S);
    if (Ge(S))
      return d ? d(S, 2) : S();
  })) : Ge(e) ? s ? g = d ? () => d(e, 2) : e : g = () => {
    if (w) {
      Ss();
      try {
        w();
      } finally {
        Is();
      }
    }
    const S = Js;
    Js = v;
    try {
      return d ? d(e, 3, [p]) : e(p);
    } finally {
      Js = S;
    }
  } : g = gs, s && l) {
    const S = g, H = l === !0 ? 1 / 0 : l;
    g = () => Cs(S(), H);
  }
  const b = rc(), T = () => {
    v.stop(), b && b.active && za(b.effects, v);
  };
  if (i && s) {
    const S = s;
    s = (...H) => {
      S(...H), T();
    };
  }
  let M = I ? new Array(e.length).fill(mn) : mn;
  const x = (S) => {
    if (!(!(v.flags & 1) || !v.dirty && !S))
      if (s) {
        const H = v.run();
        if (l || k || (I ? H.some((K, B) => Ns(K, M[B])) : Ns(H, M))) {
          w && w();
          const K = Js;
          Js = v;
          try {
            const B = [
              H,
              // pass undefined as the old value when it's changed for the first time
              M === mn ? void 0 : I && M[0] === mn ? [] : M,
              p
            ];
            M = H, d ? d(s, 3, B) : (
              // @ts-expect-error
              s(...B)
            );
          } finally {
            Js = K;
          }
        }
      } else
        v.run();
  };
  return u && u(x), v = new fi(g), v.scheduler = c ? () => c(x, !1) : x, p = (S) => Lc(S, !1, v), w = v.onStop = () => {
    const S = Tn.get(v);
    if (S) {
      if (d)
        d(S, 4);
      else
        for (const H of S) H();
      Tn.delete(v);
    }
  }, s ? n ? x(!0) : M = v.run() : c ? c(x.bind(null, !0), !0) : v.run(), T.pause = v.pause.bind(v), T.resume = v.resume.bind(v), T.stop = T, T;
}
function Cs(e, s = 1 / 0, o) {
  if (s <= 0 || !et(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, $t(e))
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
    Hn(l, s, o);
  }
}
function os(e, s, o, n) {
  if (Ge(e)) {
    const l = sn(e, s, o, n);
    return l && ai(l) && l.catch((i) => {
      Hn(i, s, o);
    }), l;
  }
  if (Be(e)) {
    const l = [];
    for (let i = 0; i < e.length; i++)
      l.push(os(e[i], s, o, n));
    return l;
  }
}
function Hn(e, s, o, n = !0) {
  const l = s ? s.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: c } = s && s.appContext.config || st;
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
  Ac(e, o, l, n, c);
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
let Pn = null;
function _t(e) {
  const s = Pn || Ii;
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
  Pn || (Pn = Ii.then(Pi));
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
    ms = -1, It.length = 0, Ti(), Pn = null, (It.length || vo.length) && Pi();
  }
}
let ht = null, Ri = null;
function Rn(e) {
  const s = ht;
  return ht = e, Ri = e && e.type.__scopeId || null, s;
}
function h(e, s = ht, o) {
  if (!s || e._n)
    return e;
  const n = (...l) => {
    n._d && Ln(-1);
    const i = Rn(s);
    let c;
    try {
      c = e(...l);
    } finally {
      Rn(i), n._d && Ln(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function qe(e, s) {
  if (ht === null)
    return e;
  const o = Xn(ht), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [i, c, u, d = st] = s[l];
    i && (Ge(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Cs(c), n.push({
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
function Hs(e, s, o, n) {
  const l = e.dirs, i = s && s.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    i && (u.oldValue = i[c].value);
    let d = u.dir[n];
    d && (Ss(), os(d, o, 8, [
      e.el,
      u,
      e,
      s
    ]), Is());
  }
}
const Mi = Symbol("_vte"), Di = (e) => e.__isTeleport, Fo = (e) => e && (e.disabled || e.disabled === ""), vl = (e) => e && (e.defer || e.defer === ""), pl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, gl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ca = (e, s) => {
  const o = e && e.to;
  return ct(o) ? s ? s(o) : null : o;
}, Li = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, n, l, i, c, u, d, m) {
    const {
      mc: v,
      pc: g,
      pbc: w,
      o: { insert: p, querySelector: k, createText: I, createComment: b }
    } = m, T = Fo(s.props);
    let { shapeFlag: M, children: x, dynamicChildren: S } = s;
    if (e == null) {
      const H = s.el = I(""), K = s.anchor = I("");
      p(H, o, n), p(K, o, n);
      const B = (P, L) => {
        M & 16 && v(
          x,
          P,
          L,
          l,
          i,
          c,
          u,
          d
        );
      }, E = () => {
        const P = s.target = Ca(s.props, k), L = Oi(P, s, I, p);
        P && (c !== "svg" && pl(P) ? c = "svg" : c !== "mathml" && gl(P) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(P), T || (B(P, L), bn(s, !1)));
      };
      T && (B(o, K), bn(s, !0)), vl(s.props) ? (s.el.__isMounted = !1, St(() => {
        E(), delete s.el.__isMounted;
      }, i)) : E();
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
            c,
            u,
            d,
            m
          );
        }, i);
        return;
      }
      s.el = e.el, s.targetStart = e.targetStart;
      const H = s.anchor = e.anchor, K = s.target = e.target, B = s.targetAnchor = e.targetAnchor, E = Fo(e.props), P = E ? o : K, L = E ? H : B;
      if (c === "svg" || pl(K) ? c = "svg" : (c === "mathml" || gl(K)) && (c = "mathml"), S ? (w(
        e.dynamicChildren,
        S,
        P,
        l,
        i,
        c,
        u
      ), el(e, s, !0)) : d || g(
        e,
        s,
        P,
        L,
        l,
        i,
        c,
        u,
        !1
      ), T)
        E ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : vn(
          s,
          o,
          H,
          m,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const oe = s.target = Ca(
          s.props,
          k
        );
        oe && vn(
          s,
          oe,
          null,
          m,
          0
        );
      } else E && vn(
        s,
        K,
        B,
        m,
        1
      );
      bn(s, T);
    }
  },
  remove(e, s, o, { um: n, o: { remove: l } }, i) {
    const {
      shapeFlag: c,
      children: u,
      anchor: d,
      targetStart: m,
      targetAnchor: v,
      target: g,
      props: w
    } = e;
    if (g && (l(m), l(v)), i && l(d), c & 16) {
      const p = i || !Fo(w);
      for (let k = 0; k < u.length; k++) {
        const I = u[k];
        n(
          I,
          s,
          o,
          p,
          !!I.dynamicChildren
        );
      }
    }
  },
  move: vn,
  hydrate: zc
};
function vn(e, s, o, { o: { insert: n }, m: l }, i = 2) {
  i === 0 && n(e.targetAnchor, s, o);
  const { el: c, anchor: u, shapeFlag: d, children: m, props: v } = e, g = i === 2;
  if (g && n(c, s, o), (!g || Fo(v)) && d & 16)
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
  o: { nextSibling: c, parentNode: u, querySelector: d, insert: m, createText: v }
}, g) {
  function w(I, b, T, M) {
    b.anchor = g(
      c(I),
      b,
      u(I),
      o,
      n,
      l,
      i
    ), b.targetStart = T, b.targetAnchor = M;
  }
  const p = s.target = Ca(
    s.props,
    d
  ), k = Fo(s.props);
  if (p) {
    const I = p._lpa || p.firstChild;
    if (s.shapeFlag & 16)
      if (k)
        w(
          e,
          s,
          I,
          I && c(I)
        );
      else {
        s.anchor = c(e);
        let b = I;
        for (; b; ) {
          if (b && b.nodeType === 8) {
            if (b.data === "teleport start anchor")
              s.targetStart = b;
            else if (b.data === "teleport anchor") {
              s.targetAnchor = b, p._lpa = s.targetAnchor && c(s.targetAnchor);
              break;
            }
          }
          b = c(b);
        }
        s.targetAnchor || Oi(p, s, v, m), g(
          I && c(I),
          s,
          p,
          o,
          n,
          l,
          i
        );
      }
    bn(s, k);
  } else k && s.shapeFlag & 16 && w(e, s, e, c(e));
  return s.anchor && c(s.anchor);
}
const Ct = Li;
function bn(e, s) {
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
const bs = Symbol("_leaveCb"), pn = Symbol("_enterCb");
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
      const i = zi(l), c = Je(e), { mode: u } = c;
      if (n.isLeaving)
        return la(i);
      const d = hl(i);
      if (!d)
        return la(i);
      let m = Jo(
        d,
        c,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (g) => m = g
      );
      d.type !== kt && to(d, m);
      let v = o.subTree && hl(o.subTree);
      if (v && v.type !== kt && !Xs(v, d) && Ni(o).type !== kt) {
        let g = Jo(
          v,
          c,
          n,
          o
        );
        if (to(v, g), u === "out-in" && d.type !== kt)
          return n.isLeaving = !0, g.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete g.afterLeave, v = void 0;
          }, la(i);
        u === "in-out" && d.type !== kt ? g.delayLeave = (w, p, k) => {
          const I = Fi(
            n,
            v
          );
          I[String(v.key)] = v, w[bs] = () => {
            p(), w[bs] = void 0, delete m.delayedLeave, v = void 0;
          }, m.delayedLeave = () => {
            k(), delete m.delayedLeave, v = void 0;
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
      if (o.type !== kt) {
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
    mode: c,
    persisted: u = !1,
    onBeforeEnter: d,
    onEnter: m,
    onAfterEnter: v,
    onEnterCancelled: g,
    onBeforeLeave: w,
    onLeave: p,
    onAfterLeave: k,
    onLeaveCancelled: I,
    onBeforeAppear: b,
    onAppear: T,
    onAfterAppear: M,
    onAppearCancelled: x
  } = s, S = String(e.key), H = Fi(o, e), K = (P, L) => {
    P && os(
      P,
      n,
      9,
      L
    );
  }, B = (P, L) => {
    const oe = L[1];
    K(P, L), Be(P) ? P.every((X) => X.length <= 1) && oe() : P.length <= 1 && oe();
  }, E = {
    mode: c,
    persisted: u,
    beforeEnter(P) {
      let L = d;
      if (!o.isMounted)
        if (i)
          L = b || d;
        else
          return;
      P[bs] && P[bs](
        !0
        /* cancelled */
      );
      const oe = H[S];
      oe && Xs(e, oe) && oe.el[bs] && oe.el[bs](), K(L, [P]);
    },
    enter(P) {
      let L = m, oe = v, X = g;
      if (!o.isMounted)
        if (i)
          L = T || m, oe = M || v, X = x || g;
        else
          return;
      let N = !1;
      const O = P[pn] = (U) => {
        N || (N = !0, U ? K(X, [P]) : K(oe, [P]), E.delayedLeave && E.delayedLeave(), P[pn] = void 0);
      };
      L ? B(L, [P, O]) : O();
    },
    leave(P, L) {
      const oe = String(e.key);
      if (P[pn] && P[pn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return L();
      K(w, [P]);
      let X = !1;
      const N = P[bs] = (O) => {
        X || (X = !0, L(), O ? K(I, [P]) : K(k, [P]), P[bs] = void 0, H[oe] === e && delete H[oe]);
      };
      H[oe] = e, p ? B(p, [P, N]) : N();
    },
    clone(P) {
      const L = Jo(
        P,
        s,
        o,
        n,
        l
      );
      return l && l(L), L;
    }
  };
  return E;
}
function la(e) {
  if (Kn(e))
    return e = zs(e), e.children = null, e;
}
function hl(e) {
  if (!Kn(e))
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
    let c = e[i];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : i);
    c.type === j ? (c.patchFlag & 128 && l++, n = n.concat(
      Ja(c.children, s, u)
    )) : (s || c.type !== kt) && n.push(u != null ? zs(c, { key: u }) : c);
  }
  if (l > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function ue(e, s) {
  return Ge(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    pt({ name: e.name }, s, { setup: e })
  ) : e;
}
function Bi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Mn = /* @__PURE__ */ new WeakMap();
function Bo(e, s, o, n, l = !1) {
  if (Be(e)) {
    e.forEach(
      (k, I) => Bo(
        k,
        s && (Be(s) ? s[I] : s),
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
  const i = n.shapeFlag & 4 ? Xn(n.component) : n.el, c = l ? null : i, { i: u, r: d } = e, m = s && s.r, v = u.refs === st ? u.refs = {} : u.refs, g = u.setupState, w = Je(g), p = g === st ? ni : (k) => Ze(w, k);
  if (m != null && m !== d) {
    if (yl(s), ct(m))
      v[m] = null, p(m) && (g[m] = null);
    else if ($t(m)) {
      m.value = null;
      const k = s;
      k.k && (v[k.k] = null);
    }
  }
  if (Ge(d))
    sn(d, u, 12, [c, v]);
  else {
    const k = ct(d), I = $t(d);
    if (k || I) {
      const b = () => {
        if (e.f) {
          const T = k ? p(d) ? g[d] : v[d] : d.value;
          if (l)
            Be(T) && za(T, i);
          else if (Be(T))
            T.includes(i) || T.push(i);
          else if (k)
            v[d] = [i], p(d) && (g[d] = v[d]);
          else {
            const M = [i];
            d.value = M, e.k && (v[e.k] = M);
          }
        } else k ? (v[d] = c, p(d) && (g[d] = c)) : I && (d.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const T = () => {
          b(), Mn.delete(e);
        };
        T.id = -1, Mn.set(e, T), St(T, o);
      } else
        yl(e), b();
    }
  }
}
function yl(e) {
  const s = Mn.get(e);
  s && (s.flags |= 8, Mn.delete(e));
}
Gn().requestIdleCallback;
Gn().cancelIdleCallback;
const po = (e) => !!e.type.__asyncLoader, Kn = (e) => e.type.__isKeepAlive;
function Vc(e, s) {
  Vi(e, "a", s);
}
function Wc(e, s) {
  Vi(e, "da", s);
}
function Vi(e, s, o = bt) {
  const n = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (qn(s, n, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      Kn(l.parent.vnode) && Gc(n, s, o, l), l = l.parent;
  }
}
function Gc(e, s, o, n) {
  const l = qn(
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
function qn(e, s, o = bt, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), i = s.__weh || (s.__weh = (...c) => {
      Ss();
      const u = on(o), d = os(s, o, e, c);
      return u(), Is(), d;
    });
    return n ? l.unshift(i) : l.push(i), i;
  }
}
const Ts = (e) => (s, o = bt) => {
  (!Zo || e === "sp") && qn(e, (...n) => s(...n), o);
}, jc = Ts("bm"), Xe = Ts("m"), Hc = Ts(
  "bu"
), Wi = Ts("u"), Gi = Ts(
  "bum"
), oo = Ts("um"), Kc = Ts(
  "sp"
), qc = Ts("rtg"), Yc = Ts("rtc");
function Jc(e, s = bt) {
  qn("ec", e, s);
}
const Xc = "components", ji = Symbol.for("v-ndc");
function Xa(e) {
  return ct(e) ? Qc(Xc, e, !1) || e : e || ji;
}
function Qc(e, s, o = !0, n = !1) {
  const l = ht || bt;
  if (l) {
    const i = l.type;
    {
      const u = Fu(
        i,
        !1
      );
      if (u && (u === s || u === Kt(s) || u === Vn(Kt(s))))
        return i;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      wl(l[e] || i[e], s) || // global registration
      wl(l.appContext[e], s)
    );
    return !c && n ? i : c;
  }
}
function wl(e, s) {
  return e && (e[s] || e[Kt(s)] || e[Vn(Kt(s))]);
}
function he(e, s, o, n) {
  let l;
  const i = o, c = Be(e);
  if (c || ct(e)) {
    const u = c && Zs(e);
    let d = !1, m = !1;
    u && (d = !Gt(e), m = Es(e), e = jn(e)), l = new Array(e.length);
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
  if (ht.ce || ht.parent && po(ht.parent) && ht.parent.ce) {
    const m = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), a(), D(
      j,
      null,
      [C("slot", o, n && n())],
      m ? -2 : 64
    );
  }
  let i = e[s];
  i && i._c && (i._d = !1), a();
  const c = i && Hi(i(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = D(
    j,
    {
      key: (u && !ts(u) ? u : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!c && n ? "_fb" : "")
    },
    c || (n ? n() : []),
    c && e._ === 1 ? 64 : -2
  );
  return i && i._c && (i._d = !0), d;
}
function Hi(e) {
  return e.some((s) => Qo(s) ? !(s.type === kt || s.type === j && !Hi(s.children)) : !0) ? e : null;
}
const xa = (e) => e ? dr(e) ? Xn(e) : xa(e.parent) : null, Vo = (
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
    $parent: (e) => xa(e.parent),
    $root: (e) => xa(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => qi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ya(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = _t.bind(e.proxy)),
    $watch: (e) => uu.bind(e)
  })
), ia = (e, s) => e !== st && !e.__isScriptSetup && Ze(e, s), Zc = {
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
        if (ia(n, s))
          return c[s] = 1, n[s];
        if (l !== st && Ze(l, s))
          return c[s] = 2, l[s];
        if (Ze(i, s))
          return c[s] = 3, i[s];
        if (o !== st && Ze(o, s))
          return c[s] = 4, o[s];
        Sa && (c[s] = 0);
      }
    }
    const m = Vo[s];
    let v, g;
    if (m)
      return s === "$attrs" && wt(e.attrs, "get", ""), m(e);
    if (
      // css module (injected by vue-loader)
      (v = u.__cssModules) && (v = v[s])
    )
      return v;
    if (o !== st && Ze(o, s))
      return c[s] = 4, o[s];
    if (
      // global properties
      g = d.config.globalProperties, Ze(g, s)
    )
      return g[s];
  },
  set({ _: e }, s, o) {
    const { data: n, setupState: l, ctx: i } = e;
    return ia(l, s) ? (l[s] = o, !0) : n !== st && Ze(n, s) ? (n[s] = o, !0) : Ze(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (i[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: n, appContext: l, props: i, type: c }
  }, u) {
    let d;
    return !!(o[u] || e !== st && u[0] !== "$" && Ze(e, u) || ia(s, u) || Ze(i, u) || Ze(n, u) || Ze(Vo, u) || Ze(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
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
let Sa = !0;
function eu(e) {
  const s = qi(e), o = e.proxy, n = e.ctx;
  Sa = !1, s.beforeCreate && kl(s.beforeCreate, e, "bc");
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
    beforeMount: g,
    mounted: w,
    beforeUpdate: p,
    updated: k,
    activated: I,
    deactivated: b,
    beforeDestroy: T,
    beforeUnmount: M,
    destroyed: x,
    unmounted: S,
    render: H,
    renderTracked: K,
    renderTriggered: B,
    errorCaptured: E,
    serverPrefetch: P,
    // public API
    expose: L,
    inheritAttrs: oe,
    // assets
    components: X,
    directives: N,
    filters: O
  } = s;
  if (m && tu(m, n, null), c)
    for (const Q in c) {
      const Y = c[Q];
      Ge(Y) && (n[Q] = Y.bind(o));
    }
  if (l) {
    const Q = l.call(o, o);
    et(Q) && (e.data = Vs(Q));
  }
  if (Sa = !0, i)
    for (const Q in i) {
      const Y = i[Q], ye = Ge(Y) ? Y.bind(o, o) : Ge(Y.get) ? Y.get.bind(o, o) : gs, _e = !Ge(Y) && Ge(Y.set) ? Y.set.bind(o) : gs, Le = F({
        get: ye,
        set: _e
      });
      Object.defineProperty(n, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => Le.value,
        set: (Fe) => Le.value = Fe
      });
    }
  if (u)
    for (const Q in u)
      Ki(u[Q], n, o, Q);
  if (d) {
    const Q = Ge(d) ? d.call(o) : d;
    Reflect.ownKeys(Q).forEach((Y) => {
      iu(Y, Q[Y]);
    });
  }
  v && kl(v, e, "c");
  function R(Q, Y) {
    Be(Y) ? Y.forEach((ye) => Q(ye.bind(o))) : Y && Q(Y.bind(o));
  }
  if (R(jc, g), R(Xe, w), R(Hc, p), R(Wi, k), R(Vc, I), R(Wc, b), R(Jc, E), R(Yc, K), R(qc, B), R(Gi, M), R(oo, S), R(Kc, P), Be(L))
    if (L.length) {
      const Q = e.exposed || (e.exposed = {});
      L.forEach((Y) => {
        Object.defineProperty(Q, Y, {
          get: () => o[Y],
          set: (ye) => o[Y] = ye,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  H && e.render === gs && (e.render = H), oe != null && (e.inheritAttrs = oe), X && (e.components = X), N && (e.directives = N), P && Bi(e);
}
function tu(e, s, o = gs) {
  Be(e) && (e = Ia(e));
  for (const n in e) {
    const l = e[n];
    let i;
    et(l) ? "default" in l ? i = $n(
      l.from || n,
      l.default,
      !0
    ) : i = $n(l.from || n) : i = $n(l), $t(i) ? Object.defineProperty(s, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (c) => i.value = c
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
    Ge(i) && yt(l, i);
  } else if (Ge(e))
    yt(l, e.bind(o));
  else if (et(e))
    if (Be(e))
      e.forEach((i) => Ki(i, s, o, n));
    else {
      const i = Ge(e.handler) ? e.handler.bind(o) : s[e.handler];
      Ge(i) && yt(l, i, e);
    }
}
function qi(e) {
  const s = e.type, { mixins: o, extends: n } = s, {
    mixins: l,
    optionsCache: i,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = i.get(s);
  let d;
  return u ? d = u : !l.length && !o && !n ? d = s : (d = {}, l.length && l.forEach(
    (m) => Dn(d, m, c, !0)
  ), Dn(d, s, c)), et(s) && i.set(s, d), d;
}
function Dn(e, s, o, n = !1) {
  const { mixins: l, extends: i } = s;
  i && Dn(e, i, o, !0), l && l.forEach(
    (c) => Dn(e, c, o, !0)
  );
  for (const c in s)
    if (!(n && c === "expose")) {
      const u = su[c] || o && o[c];
      e[c] = u ? u(e[c], s[c]) : s[c];
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
  return Ao(Ia(e), Ia(s));
}
function Ia(e) {
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
    const i = Yi(), c = /* @__PURE__ */ new WeakSet(), u = [];
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
        if (!d) {
          const p = m._ceVNode || C(n, l);
          return p.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(p, v, w), d = !0, m._container = v, v.__vue_app__ = m, Xn(p.component);
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
  if (bt) {
    let o = bt.provides;
    const n = bt.parent && bt.parent.provides;
    n === o && (o = bt.provides = Object.create(n)), o[e] = s;
  }
}
function $n(e, s, o = !1) {
  const n = sl();
  if (n || go) {
    let l = go ? go._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && Ge(s) ? s.call(n && n.proxy) : s;
  }
}
const ru = Symbol.for("v-scx"), cu = () => $n(ru);
function yt(e, s, o) {
  return Ji(e, s, o);
}
function Ji(e, s, o = st) {
  const { immediate: n, deep: l, flush: i, once: c } = o, u = pt({}, o), d = s && n || !s && i !== "post";
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
  const v = bt;
  u.call = (p, k, I) => os(p, v, k, I);
  let g = !1;
  i === "post" ? u.scheduler = (p) => {
    St(p, v && v.suspense);
  } : i !== "sync" && (g = !0, u.scheduler = (p, k) => {
    k ? p() : Ya(p);
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
  const c = on(this), u = Ji(l, i.bind(n), o);
  return c(), u;
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
const du = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${Kt(s)}Modifiers`] || e[`${Bs(s)}Modifiers`];
function fu(e, s, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || st;
  let l = o;
  const i = s.startsWith("update:"), c = i && du(n, s.slice(7));
  c && (c.trim && (l = o.map((v) => ct(v) ? v.trim() : v)), c.number && (l = o.map(Wn)));
  let u, d = n[u = ta(s)] || // also try camelCase event handler (#2249)
  n[u = ta(Kt(s))];
  !d && i && (d = n[u = ta(Bs(s))]), d && os(
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
  let c = {}, u = !1;
  if (!Ge(e)) {
    const d = (m) => {
      const v = Qi(m, s, !0);
      v && (u = !0, pt(c, v));
    };
    !o && s.mixins.length && s.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !i && !u ? (et(e) && n.set(e, null), null) : (Be(i) ? i.forEach((d) => c[d] = null) : pt(c, i), et(e) && n.set(e, c), c);
}
function Yn(e, s) {
  return !e || !Fn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), Ze(e, s[0].toLowerCase() + s.slice(1)) || Ze(e, Bs(s)) || Ze(e, s));
}
function Cl(e) {
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
    props: g,
    data: w,
    setupState: p,
    ctx: k,
    inheritAttrs: I
  } = e, b = Rn(e);
  let T, M;
  try {
    if (o.shapeFlag & 4) {
      const S = l || n, H = S;
      T = ps(
        m.call(
          H,
          S,
          v,
          g,
          p,
          w,
          k
        )
      ), M = u;
    } else {
      const S = s;
      T = ps(
        S.length > 1 ? S(
          g,
          { attrs: u, slots: c, emit: d }
        ) : S(
          g,
          null
        )
      ), M = s.props ? u : vu(u);
    }
  } catch (S) {
    Wo.length = 0, Hn(S, e, 1), T = C(kt);
  }
  let x = T;
  if (M && I !== !1) {
    const S = Object.keys(M), { shapeFlag: H } = x;
    S.length && H & 7 && (i && S.some(Na) && (M = pu(
      M,
      i
    )), x = zs(x, M, !1, !0));
  }
  return o.dirs && (x = zs(x, null, !1, !0), x.dirs = x.dirs ? x.dirs.concat(o.dirs) : o.dirs), o.transition && to(x, o.transition), T = x, Rn(b), T;
}
const vu = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Fn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, pu = (e, s) => {
  const o = {};
  for (const n in e)
    (!Na(n) || !(n.slice(9) in s)) && (o[n] = e[n]);
  return o;
};
function gu(e, s, o) {
  const { props: n, children: l, component: i } = e, { props: c, children: u, patchFlag: d } = s, m = i.emitsOptions;
  if (s.dirs || s.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return n ? xl(n, c, m) : !!c;
    if (d & 8) {
      const v = s.dynamicProps;
      for (let g = 0; g < v.length; g++) {
        const w = v[g];
        if (c[w] !== n[w] && !Yn(m, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : n === c ? !1 : n ? c ? xl(n, c, m) : !0 : !!c;
  return !1;
}
function xl(e, s, o) {
  const n = Object.keys(s);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < n.length; l++) {
    const i = n[l];
    if (s[i] !== e[i] && !Yn(o, i))
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
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = n ? l : Ic(l) : e.type.props ? e.props = l : e.props = i, e.attrs = i;
}
function wu(e, s, o, n) {
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
      for (let g = 0; g < v.length; g++) {
        let w = v[g];
        if (Yn(e.emitsOptions, w))
          continue;
        const p = s[w];
        if (d)
          if (Ze(i, w))
            p !== i[w] && (i[w] = p, m = !0);
          else {
            const k = Kt(w);
            l[k] = Ea(
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
    sr(e, s, l, i) && (m = !0);
    let v;
    for (const g in u)
      (!s || // for camelCase
      !Ze(s, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Bs(g)) === g || !Ze(s, v))) && (d ? o && // for camelCase
      (o[g] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[g] = Ea(
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
  let c = !1, u;
  if (s)
    for (let d in s) {
      if (Uo(d))
        continue;
      const m = s[d];
      let v;
      l && Ze(l, v = Kt(d)) ? !i || !i.includes(v) ? o[v] = m : (u || (u = {}))[v] = m : Yn(e.emitsOptions, d) || (!(d in n) || m !== n[d]) && (n[d] = m, c = !0);
    }
  if (i) {
    const d = Je(o), m = u || st;
    for (let v = 0; v < i.length; v++) {
      const g = i[v];
      o[g] = Ea(
        l,
        d,
        g,
        m[g],
        e,
        !Ze(m, g)
      );
    }
  }
  return c;
}
function Ea(e, s, o, n, l, i) {
  const c = e[o];
  if (c != null) {
    const u = Ze(c, "default");
    if (u && n === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && Ge(d)) {
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
    c[
      0
      /* shouldCast */
    ] && (i && !u ? n = !1 : c[
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
  const i = e.props, c = {}, u = [];
  let d = !1;
  if (!Ge(e)) {
    const v = (g) => {
      d = !0;
      const [w, p] = or(g, s, !0);
      pt(c, w), p && u.push(...p);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!i && !d)
    return et(e) && n.set(e, fo), fo;
  if (Be(i))
    for (let v = 0; v < i.length; v++) {
      const g = Kt(i[v]);
      Sl(g) && (c[g] = st);
    }
  else if (i)
    for (const v in i) {
      const g = Kt(v);
      if (Sl(g)) {
        const w = i[v], p = c[g] = Be(w) || Ge(w) ? { type: w } : pt({}, w), k = p.type;
        let I = !1, b = !0;
        if (Be(k))
          for (let T = 0; T < k.length; ++T) {
            const M = k[T], x = Ge(M) && M.name;
            if (x === "Boolean") {
              I = !0;
              break;
            } else x === "String" && (b = !1);
          }
        else
          I = Ge(k) && k.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = I, p[
          1
          /* shouldCastTrue */
        ] = b, (I || Ze(p, "default")) && u.push(g);
      }
    }
  const m = [c, u];
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
      const c = Za(i);
      s[l] = () => c;
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
  let i = !0, c = st;
  if (n.shapeFlag & 32) {
    const u = s._;
    u ? o && u === 1 ? i = !1 : lr(l, s, o) : (i = !s.$stable, nr(s, l)), c = s;
  } else s && (ar(e, s), c = { default: 1 });
  if (i)
    for (const u in l)
      !Qa(u) && c[u] == null && delete l[u];
}, St = Eu;
function Cu(e) {
  return xu(e);
}
function xu(e, s) {
  const o = Gn();
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
    parentNode: g,
    nextSibling: w,
    setScopeId: p = gs,
    insertStaticContent: k
  } = e, I = (A, W, te, ae = null, ve = null, pe = null, Ie = void 0, Ee = null, ne = !!W.dynamicChildren) => {
    if (A === W)
      return;
    A && !Xs(A, W) && (ae = Ce(A), Fe(A, ve, pe, !0), A = null), W.patchFlag === -2 && (ne = !1, W.dynamicChildren = null);
    const { type: fe, ref: Ue, shapeFlag: Pe } = W;
    switch (fe) {
      case Jn:
        b(A, W, te, ae);
        break;
      case kt:
        T(A, W, te, ae);
        break;
      case ca:
        A == null && M(W, te, ae, Ie);
        break;
      case j:
        X(
          A,
          W,
          te,
          ae,
          ve,
          pe,
          Ie,
          Ee,
          ne
        );
        break;
      default:
        Pe & 1 ? H(
          A,
          W,
          te,
          ae,
          ve,
          pe,
          Ie,
          Ee,
          ne
        ) : Pe & 6 ? N(
          A,
          W,
          te,
          ae,
          ve,
          pe,
          Ie,
          Ee,
          ne
        ) : (Pe & 64 || Pe & 128) && fe.process(
          A,
          W,
          te,
          ae,
          ve,
          pe,
          Ie,
          Ee,
          ne,
          Me
        );
    }
    Ue != null && ve ? Bo(Ue, A && A.ref, pe, W || A, !W) : Ue == null && A && A.ref != null && Bo(A.ref, null, pe, A, !0);
  }, b = (A, W, te, ae) => {
    if (A == null)
      n(
        W.el = u(W.children),
        te,
        ae
      );
    else {
      const ve = W.el = A.el;
      W.children !== A.children && m(ve, W.children);
    }
  }, T = (A, W, te, ae) => {
    A == null ? n(
      W.el = d(W.children || ""),
      te,
      ae
    ) : W.el = A.el;
  }, M = (A, W, te, ae) => {
    [A.el, A.anchor] = k(
      A.children,
      W,
      te,
      ae,
      A.el,
      A.anchor
    );
  }, x = ({ el: A, anchor: W }, te, ae) => {
    let ve;
    for (; A && A !== W; )
      ve = w(A), n(A, te, ae), A = ve;
    n(W, te, ae);
  }, S = ({ el: A, anchor: W }) => {
    let te;
    for (; A && A !== W; )
      te = w(A), l(A), A = te;
    l(W);
  }, H = (A, W, te, ae, ve, pe, Ie, Ee, ne) => {
    if (W.type === "svg" ? Ie = "svg" : W.type === "math" && (Ie = "mathml"), A == null)
      K(
        W,
        te,
        ae,
        ve,
        pe,
        Ie,
        Ee,
        ne
      );
    else {
      const fe = A.el && A.el._isVueCE ? A.el : null;
      try {
        fe && fe._beginPatch(), P(
          A,
          W,
          ve,
          pe,
          Ie,
          Ee,
          ne
        );
      } finally {
        fe && fe._endPatch();
      }
    }
  }, K = (A, W, te, ae, ve, pe, Ie, Ee) => {
    let ne, fe;
    const { props: Ue, shapeFlag: Pe, transition: ee, dirs: J } = A;
    if (ne = A.el = c(
      A.type,
      pe,
      Ue && Ue.is,
      Ue
    ), Pe & 8 ? v(ne, A.children) : Pe & 16 && E(
      A.children,
      ne,
      null,
      ae,
      ve,
      ra(A, pe),
      Ie,
      Ee
    ), J && Hs(A, null, ae, "created"), B(ne, A, A.scopeId, Ie, ae), Ue) {
      for (const be in Ue)
        be !== "value" && !Uo(be) && i(ne, be, null, Ue[be], pe, ae);
      "value" in Ue && i(ne, "value", null, Ue.value, pe), (fe = Ue.onVnodeBeforeMount) && us(fe, ae, A);
    }
    J && Hs(A, null, ae, "beforeMount");
    const Oe = Su(ve, ee);
    Oe && ee.beforeEnter(ne), n(ne, W, te), ((fe = Ue && Ue.onVnodeMounted) || Oe || J) && St(() => {
      fe && us(fe, ae, A), Oe && ee.enter(ne), J && Hs(A, null, ae, "mounted");
    }, ve);
  }, B = (A, W, te, ae, ve) => {
    if (te && p(A, te), ae)
      for (let pe = 0; pe < ae.length; pe++)
        p(A, ae[pe]);
    if (ve) {
      let pe = ve.subTree;
      if (W === pe || rr(pe.type) && (pe.ssContent === W || pe.ssFallback === W)) {
        const Ie = ve.vnode;
        B(
          A,
          Ie,
          Ie.scopeId,
          Ie.slotScopeIds,
          ve.parent
        );
      }
    }
  }, E = (A, W, te, ae, ve, pe, Ie, Ee, ne = 0) => {
    for (let fe = ne; fe < A.length; fe++) {
      const Ue = A[fe] = Ee ? Us(A[fe]) : ps(A[fe]);
      I(
        null,
        Ue,
        W,
        te,
        ae,
        ve,
        pe,
        Ie,
        Ee
      );
    }
  }, P = (A, W, te, ae, ve, pe, Ie) => {
    const Ee = W.el = A.el;
    let { patchFlag: ne, dynamicChildren: fe, dirs: Ue } = W;
    ne |= A.patchFlag & 16;
    const Pe = A.props || st, ee = W.props || st;
    let J;
    if (te && Ks(te, !1), (J = ee.onVnodeBeforeUpdate) && us(J, te, W, A), Ue && Hs(W, A, te, "beforeUpdate"), te && Ks(te, !0), (Pe.innerHTML && ee.innerHTML == null || Pe.textContent && ee.textContent == null) && v(Ee, ""), fe ? L(
      A.dynamicChildren,
      fe,
      Ee,
      te,
      ae,
      ra(W, ve),
      pe
    ) : Ie || Y(
      A,
      W,
      Ee,
      null,
      te,
      ae,
      ra(W, ve),
      pe,
      !1
    ), ne > 0) {
      if (ne & 16)
        oe(Ee, Pe, ee, te, ve);
      else if (ne & 2 && Pe.class !== ee.class && i(Ee, "class", null, ee.class, ve), ne & 4 && i(Ee, "style", Pe.style, ee.style, ve), ne & 8) {
        const Oe = W.dynamicProps;
        for (let be = 0; be < Oe.length; be++) {
          const ke = Oe[be], G = Pe[ke], V = ee[ke];
          (V !== G || ke === "value") && i(Ee, ke, G, V, ve, te);
        }
      }
      ne & 1 && A.children !== W.children && v(Ee, W.children);
    } else !Ie && fe == null && oe(Ee, Pe, ee, te, ve);
    ((J = ee.onVnodeUpdated) || Ue) && St(() => {
      J && us(J, te, W, A), Ue && Hs(W, A, te, "updated");
    }, ae);
  }, L = (A, W, te, ae, ve, pe, Ie) => {
    for (let Ee = 0; Ee < W.length; Ee++) {
      const ne = A[Ee], fe = W[Ee], Ue = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ne.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ne.type === j || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Xs(ne, fe) || // - In the case of a component, it could contain anything.
        ne.shapeFlag & 198) ? g(ne.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          te
        )
      );
      I(
        ne,
        fe,
        Ue,
        null,
        ae,
        ve,
        pe,
        Ie,
        !0
      );
    }
  }, oe = (A, W, te, ae, ve) => {
    if (W !== te) {
      if (W !== st)
        for (const pe in W)
          !Uo(pe) && !(pe in te) && i(
            A,
            pe,
            W[pe],
            null,
            ve,
            ae
          );
      for (const pe in te) {
        if (Uo(pe)) continue;
        const Ie = te[pe], Ee = W[pe];
        Ie !== Ee && pe !== "value" && i(A, pe, Ee, Ie, ve, ae);
      }
      "value" in te && i(A, "value", W.value, te.value, ve);
    }
  }, X = (A, W, te, ae, ve, pe, Ie, Ee, ne) => {
    const fe = W.el = A ? A.el : u(""), Ue = W.anchor = A ? A.anchor : u("");
    let { patchFlag: Pe, dynamicChildren: ee, slotScopeIds: J } = W;
    J && (Ee = Ee ? Ee.concat(J) : J), A == null ? (n(fe, te, ae), n(Ue, te, ae), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      W.children || [],
      te,
      Ue,
      ve,
      pe,
      Ie,
      Ee,
      ne
    )) : Pe > 0 && Pe & 64 && ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    A.dynamicChildren ? (L(
      A.dynamicChildren,
      ee,
      te,
      ve,
      pe,
      Ie,
      Ee
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (W.key != null || ve && W === ve.subTree) && el(
      A,
      W,
      !0
      /* shallow */
    )) : Y(
      A,
      W,
      te,
      Ue,
      ve,
      pe,
      Ie,
      Ee,
      ne
    );
  }, N = (A, W, te, ae, ve, pe, Ie, Ee, ne) => {
    W.slotScopeIds = Ee, A == null ? W.shapeFlag & 512 ? ve.ctx.activate(
      W,
      te,
      ae,
      Ie,
      ne
    ) : O(
      W,
      te,
      ae,
      ve,
      pe,
      Ie,
      ne
    ) : U(A, W, ne);
  }, O = (A, W, te, ae, ve, pe, Ie) => {
    const Ee = A.component = Ou(
      A,
      ae,
      ve
    );
    if (Kn(A) && (Ee.ctx.renderer = Me), Au(Ee, !1, Ie), Ee.asyncDep) {
      if (ve && ve.registerDep(Ee, R, Ie), !A.el) {
        const ne = Ee.subTree = C(kt);
        T(null, ne, W, te), A.placeholder = ne.el;
      }
    } else
      R(
        Ee,
        A,
        W,
        te,
        ve,
        pe,
        Ie
      );
  }, U = (A, W, te) => {
    const ae = W.component = A.component;
    if (gu(A, W, te))
      if (ae.asyncDep && !ae.asyncResolved) {
        Q(ae, W, te);
        return;
      } else
        ae.next = W, ae.update();
    else
      W.el = A.el, ae.vnode = W;
  }, R = (A, W, te, ae, ve, pe, Ie) => {
    const Ee = () => {
      if (A.isMounted) {
        let { next: Pe, bu: ee, u: J, parent: Oe, vnode: be } = A;
        {
          const Ve = ir(A);
          if (Ve) {
            Pe && (Pe.el = be.el, Q(A, Pe, Ie)), Ve.asyncDep.then(() => {
              A.isUnmounted || Ee();
            });
            return;
          }
        }
        let ke = Pe, G;
        Ks(A, !1), Pe ? (Pe.el = be.el, Q(A, Pe, Ie)) : Pe = be, ee && kn(ee), (G = Pe.props && Pe.props.onVnodeBeforeUpdate) && us(G, Oe, Pe, be), Ks(A, !0);
        const V = Cl(A), re = A.subTree;
        A.subTree = V, I(
          re,
          V,
          // parent may have changed if it's in a teleport
          g(re.el),
          // anchor may have changed if it's in a fragment
          Ce(re),
          A,
          ve,
          pe
        ), Pe.el = V.el, ke === null && hu(A, V.el), J && St(J, ve), (G = Pe.props && Pe.props.onVnodeUpdated) && St(
          () => us(G, Oe, Pe, be),
          ve
        );
      } else {
        let Pe;
        const { el: ee, props: J } = W, { bm: Oe, m: be, parent: ke, root: G, type: V } = A, re = po(W);
        Ks(A, !1), Oe && kn(Oe), !re && (Pe = J && J.onVnodeBeforeMount) && us(Pe, ke, W), Ks(A, !0);
        {
          G.ce && // @ts-expect-error _def is private
          G.ce._def.shadowRoot !== !1 && G.ce._injectChildStyle(V);
          const Ve = A.subTree = Cl(A);
          I(
            null,
            Ve,
            te,
            ae,
            A,
            ve,
            pe
          ), W.el = Ve.el;
        }
        if (be && St(be, ve), !re && (Pe = J && J.onVnodeMounted)) {
          const Ve = W;
          St(
            () => us(Pe, ke, Ve),
            ve
          );
        }
        (W.shapeFlag & 256 || ke && po(ke.vnode) && ke.vnode.shapeFlag & 256) && A.a && St(A.a, ve), A.isMounted = !0, W = te = ae = null;
      }
    };
    A.scope.on();
    const ne = A.effect = new fi(Ee);
    A.scope.off();
    const fe = A.update = ne.run.bind(ne), Ue = A.job = ne.runIfDirty.bind(ne);
    Ue.i = A, Ue.id = A.uid, ne.scheduler = () => Ya(Ue), Ks(A, !0), fe();
  }, Q = (A, W, te) => {
    W.component = A;
    const ae = A.vnode.props;
    A.vnode = W, A.next = null, wu(A, W.props, ae, te), $u(A, W.children, te), Ss(), ml(A), Is();
  }, Y = (A, W, te, ae, ve, pe, Ie, Ee, ne = !1) => {
    const fe = A && A.children, Ue = A ? A.shapeFlag : 0, Pe = W.children, { patchFlag: ee, shapeFlag: J } = W;
    if (ee > 0) {
      if (ee & 128) {
        _e(
          fe,
          Pe,
          te,
          ae,
          ve,
          pe,
          Ie,
          Ee,
          ne
        );
        return;
      } else if (ee & 256) {
        ye(
          fe,
          Pe,
          te,
          ae,
          ve,
          pe,
          Ie,
          Ee,
          ne
        );
        return;
      }
    }
    J & 8 ? (Ue & 16 && ge(fe, ve, pe), Pe !== fe && v(te, Pe)) : Ue & 16 ? J & 16 ? _e(
      fe,
      Pe,
      te,
      ae,
      ve,
      pe,
      Ie,
      Ee,
      ne
    ) : ge(fe, ve, pe, !0) : (Ue & 8 && v(te, ""), J & 16 && E(
      Pe,
      te,
      ae,
      ve,
      pe,
      Ie,
      Ee,
      ne
    ));
  }, ye = (A, W, te, ae, ve, pe, Ie, Ee, ne) => {
    A = A || fo, W = W || fo;
    const fe = A.length, Ue = W.length, Pe = Math.min(fe, Ue);
    let ee;
    for (ee = 0; ee < Pe; ee++) {
      const J = W[ee] = ne ? Us(W[ee]) : ps(W[ee]);
      I(
        A[ee],
        J,
        te,
        null,
        ve,
        pe,
        Ie,
        Ee,
        ne
      );
    }
    fe > Ue ? ge(
      A,
      ve,
      pe,
      !0,
      !1,
      Pe
    ) : E(
      W,
      te,
      ae,
      ve,
      pe,
      Ie,
      Ee,
      ne,
      Pe
    );
  }, _e = (A, W, te, ae, ve, pe, Ie, Ee, ne) => {
    let fe = 0;
    const Ue = W.length;
    let Pe = A.length - 1, ee = Ue - 1;
    for (; fe <= Pe && fe <= ee; ) {
      const J = A[fe], Oe = W[fe] = ne ? Us(W[fe]) : ps(W[fe]);
      if (Xs(J, Oe))
        I(
          J,
          Oe,
          te,
          null,
          ve,
          pe,
          Ie,
          Ee,
          ne
        );
      else
        break;
      fe++;
    }
    for (; fe <= Pe && fe <= ee; ) {
      const J = A[Pe], Oe = W[ee] = ne ? Us(W[ee]) : ps(W[ee]);
      if (Xs(J, Oe))
        I(
          J,
          Oe,
          te,
          null,
          ve,
          pe,
          Ie,
          Ee,
          ne
        );
      else
        break;
      Pe--, ee--;
    }
    if (fe > Pe) {
      if (fe <= ee) {
        const J = ee + 1, Oe = J < Ue ? W[J].el : ae;
        for (; fe <= ee; )
          I(
            null,
            W[fe] = ne ? Us(W[fe]) : ps(W[fe]),
            te,
            Oe,
            ve,
            pe,
            Ie,
            Ee,
            ne
          ), fe++;
      }
    } else if (fe > ee)
      for (; fe <= Pe; )
        Fe(A[fe], ve, pe, !0), fe++;
    else {
      const J = fe, Oe = fe, be = /* @__PURE__ */ new Map();
      for (fe = Oe; fe <= ee; fe++) {
        const at = W[fe] = ne ? Us(W[fe]) : ps(W[fe]);
        at.key != null && be.set(at.key, fe);
      }
      let ke, G = 0;
      const V = ee - Oe + 1;
      let re = !1, Ve = 0;
      const Qe = new Array(V);
      for (fe = 0; fe < V; fe++) Qe[fe] = 0;
      for (fe = J; fe <= Pe; fe++) {
        const at = A[fe];
        if (G >= V) {
          Fe(at, ve, pe, !0);
          continue;
        }
        let ut;
        if (at.key != null)
          ut = be.get(at.key);
        else
          for (ke = Oe; ke <= ee; ke++)
            if (Qe[ke - Oe] === 0 && Xs(at, W[ke])) {
              ut = ke;
              break;
            }
        ut === void 0 ? Fe(at, ve, pe, !0) : (Qe[ut - Oe] = fe + 1, ut >= Ve ? Ve = ut : re = !0, I(
          at,
          W[ut],
          te,
          null,
          ve,
          pe,
          Ie,
          Ee,
          ne
        ), G++);
      }
      const vt = re ? Iu(Qe) : fo;
      for (ke = vt.length - 1, fe = V - 1; fe >= 0; fe--) {
        const at = Oe + fe, ut = W[at], Mt = W[at + 1], Ft = at + 1 < Ue ? (
          // #13559, fallback to el placeholder for unresolved async component
          Mt.el || Mt.placeholder
        ) : ae;
        Qe[fe] === 0 ? I(
          null,
          ut,
          te,
          Ft,
          ve,
          pe,
          Ie,
          Ee,
          ne
        ) : re && (ke < 0 || fe !== vt[ke] ? Le(ut, te, Ft, 2) : ke--);
      }
    }
  }, Le = (A, W, te, ae, ve = null) => {
    const { el: pe, type: Ie, transition: Ee, children: ne, shapeFlag: fe } = A;
    if (fe & 6) {
      Le(A.component.subTree, W, te, ae);
      return;
    }
    if (fe & 128) {
      A.suspense.move(W, te, ae);
      return;
    }
    if (fe & 64) {
      Ie.move(A, W, te, Me);
      return;
    }
    if (Ie === j) {
      n(pe, W, te);
      for (let Pe = 0; Pe < ne.length; Pe++)
        Le(ne[Pe], W, te, ae);
      n(A.anchor, W, te);
      return;
    }
    if (Ie === ca) {
      x(A, W, te);
      return;
    }
    if (ae !== 2 && fe & 1 && Ee)
      if (ae === 0)
        Ee.beforeEnter(pe), n(pe, W, te), St(() => Ee.enter(pe), ve);
      else {
        const { leave: Pe, delayLeave: ee, afterLeave: J } = Ee, Oe = () => {
          A.ctx.isUnmounted ? l(pe) : n(pe, W, te);
        }, be = () => {
          pe._isLeaving && pe[bs](
            !0
            /* cancelled */
          ), Pe(pe, () => {
            Oe(), J && J();
          });
        };
        ee ? ee(pe, Oe, be) : be();
      }
    else
      n(pe, W, te);
  }, Fe = (A, W, te, ae = !1, ve = !1) => {
    const {
      type: pe,
      props: Ie,
      ref: Ee,
      children: ne,
      dynamicChildren: fe,
      shapeFlag: Ue,
      patchFlag: Pe,
      dirs: ee,
      cacheIndex: J
    } = A;
    if (Pe === -2 && (ve = !1), Ee != null && (Ss(), Bo(Ee, null, te, A, !0), Is()), J != null && (W.renderCache[J] = void 0), Ue & 256) {
      W.ctx.deactivate(A);
      return;
    }
    const Oe = Ue & 1 && ee, be = !po(A);
    let ke;
    if (be && (ke = Ie && Ie.onVnodeBeforeUnmount) && us(ke, W, A), Ue & 6)
      we(A.component, te, ae);
    else {
      if (Ue & 128) {
        A.suspense.unmount(te, ae);
        return;
      }
      Oe && Hs(A, null, W, "beforeUnmount"), Ue & 64 ? A.type.remove(
        A,
        W,
        te,
        Me,
        ae
      ) : fe && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !fe.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (pe !== j || Pe > 0 && Pe & 64) ? ge(
        fe,
        W,
        te,
        !1,
        !0
      ) : (pe === j && Pe & 384 || !ve && Ue & 16) && ge(ne, W, te), ae && ie(A);
    }
    (be && (ke = Ie && Ie.onVnodeUnmounted) || Oe) && St(() => {
      ke && us(ke, W, A), Oe && Hs(A, null, W, "unmounted");
    }, te);
  }, ie = (A) => {
    const { type: W, el: te, anchor: ae, transition: ve } = A;
    if (W === j) {
      Se(te, ae);
      return;
    }
    if (W === ca) {
      S(A);
      return;
    }
    const pe = () => {
      l(te), ve && !ve.persisted && ve.afterLeave && ve.afterLeave();
    };
    if (A.shapeFlag & 1 && ve && !ve.persisted) {
      const { leave: Ie, delayLeave: Ee } = ve, ne = () => Ie(te, pe);
      Ee ? Ee(A.el, pe, ne) : ne();
    } else
      pe();
  }, Se = (A, W) => {
    let te;
    for (; A !== W; )
      te = w(A), l(A), A = te;
    l(W);
  }, we = (A, W, te) => {
    const { bum: ae, scope: ve, job: pe, subTree: Ie, um: Ee, m: ne, a: fe } = A;
    Il(ne), Il(fe), ae && kn(ae), ve.stop(), pe && (pe.flags |= 8, Fe(Ie, A, W, te)), Ee && St(Ee, W), St(() => {
      A.isUnmounted = !0;
    }, W);
  }, ge = (A, W, te, ae = !1, ve = !1, pe = 0) => {
    for (let Ie = pe; Ie < A.length; Ie++)
      Fe(A[Ie], W, te, ae, ve);
  }, Ce = (A) => {
    if (A.shapeFlag & 6)
      return Ce(A.component.subTree);
    if (A.shapeFlag & 128)
      return A.suspense.next();
    const W = w(A.anchor || A.el), te = W && W[Mi];
    return te ? w(te) : W;
  };
  let de = !1;
  const ce = (A, W, te) => {
    A == null ? W._vnode && Fe(W._vnode, null, null, !0) : I(
      W._vnode || null,
      A,
      W,
      null,
      null,
      null,
      te
    ), W._vnode = A, de || (de = !0, ml(), Ti(), de = !1);
  }, Me = {
    p: I,
    um: Fe,
    m: Le,
    r: ie,
    mt: O,
    mc: E,
    pc: Y,
    pbc: L,
    n: Ce,
    o: e
  };
  return {
    render: ce,
    hydrate: void 0,
    createApp: lu(ce)
  };
}
function ra({ type: e, props: s }, o) {
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
      const c = n[i];
      let u = l[i];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[i] = Us(l[i]), u.el = c.el), !o && u.patchFlag !== -2 && el(c, u)), u.type === Jn && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === kt && !u.el && (u.el = c.el);
    }
}
function Iu(e) {
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
const j = Symbol.for("v-fgt"), Jn = Symbol.for("v-txt"), kt = Symbol.for("v-cmt"), ca = Symbol.for("v-stc"), Wo = [];
let Nt = null;
function a(e = !1) {
  Wo.push(Nt = e ? null : []);
}
function Tu() {
  Wo.pop(), Nt = Wo[Wo.length - 1] || null;
}
let Xo = 1;
function Ln(e, s = !1) {
  Xo += e, e < 0 && Nt && s && (Nt.hasOnce = !0);
}
function cr(e) {
  return e.dynamicChildren = Xo > 0 ? Nt || fo : null, Tu(), Xo > 0 && Nt && Nt.push(e), e;
}
function r(e, s, o, n, l, i) {
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
function D(e, s, o, n, l) {
  return cr(
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
function Qo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Xs(e, s) {
  return e.type === s.type && e.key === s.key;
}
const ur = ({ key: e }) => e ?? null, Cn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? ct(e) || $t(e) || Ge(e) ? { i: ht, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, n = 0, l = null, i = e === j ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && ur(s),
    ref: s && Cn(s),
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
    ctx: ht
  };
  return u ? (tl(d, o), i & 128 && e.normalize(d)) : o && (d.shapeFlag |= ct(o) ? 8 : 16), Xo > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Nt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Nt.push(d), d;
}
const C = Pu;
function Pu(e, s = null, o = null, n = 0, l = null, i = !1) {
  if ((!e || e === ji) && (e = kt), Qo(e)) {
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
    u && !ct(u) && (s.class = Te(u)), et(d) && (qa(d) && !Be(d) && (d = pt({}, d)), s.style = qt(d));
  }
  const c = ct(e) ? 1 : rr(e) ? 128 : Di(e) ? 64 : et(e) ? 4 : Ge(e) ? 2 : 0;
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
function Ru(e) {
  return e ? qa(e) || tr(e) ? pt({}, e) : e : null;
}
function zs(e, s, o = !1, n = !1) {
  const { props: l, ref: i, patchFlag: c, children: u, transition: d } = e, m = s ? Mu(l || {}, s) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && ur(m),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && i ? Be(i) ? i.concat(Cn(s)) : [i, Cn(s)] : Cn(s)
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
    patchFlag: s && e.type !== j ? c === -1 ? 16 : c | 16 : c,
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
function $(e = " ", s = 0) {
  return C(Jn, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (a(), D(kt, null, e)) : C(kt, null, e);
}
function ps(e) {
  return e == null || typeof e == "boolean" ? C(kt) : Be(e) ? C(
    j,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Qo(e) ? Us(e) : C(Jn, null, String(e));
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
      !l && !tr(s) ? s._ctx = ht : l === 3 && ht && (ht.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else Ge(s) ? (s = { default: s, _ctx: ht }, o = 32) : (s = String(s), n & 64 ? (o = 16, s = [$(s)]) : o = 8);
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
        s.style = qt([s.style, n.style]);
      else if (Fn(l)) {
        const i = s[l], c = n[l];
        c && i !== c && !(Be(i) && i.includes(c)) && (s[l] = i ? [].concat(i, c) : c);
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
  return i.ctx = { _: i }, i.root = s ? s.root : i, i.emit = fu.bind(null, i), e.ce && e.ce(i), i;
}
let bt = null;
const sl = () => bt || ht;
let On, Ta;
{
  const e = Gn(), s = (o, n) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(n), (i) => {
      l.length > 1 ? l.forEach((c) => c(i)) : l[0](i);
    };
  };
  On = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => bt = o
  ), Ta = s(
    "__VUE_SSR_SETTERS__",
    (o) => Zo = o
  );
}
const on = (e) => {
  const s = bt;
  return On(e), e.scope.on(), () => {
    e.scope.off(), On(s);
  };
}, El = () => {
  bt && bt.scope.off(), On(null);
};
function dr(e) {
  return e.vnode.shapeFlag & 4;
}
let Zo = !1;
function Au(e, s = !1, o = !1) {
  s && Ta(s);
  const { props: n, children: l } = e.vnode, i = dr(e);
  yu(e, n, i, s), bu(e, l, o || s);
  const c = i ? Uu(e, s) : void 0;
  return s && Ta(!1), c;
}
function Uu(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Zc);
  const { setup: n } = o;
  if (n) {
    Ss();
    const l = e.setupContext = n.length > 1 ? zu(e) : null, i = on(e), c = sn(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = ai(c);
    if (Is(), i(), (u || e.sp) && !po(e) && Bi(e), u) {
      if (c.then(El, El), s)
        return c.then((d) => {
          Tl(e, d);
        }).catch((d) => {
          Hn(d, e, 0);
        });
      e.asyncDep = c;
    } else
      Tl(e, c);
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
    return wt(e, "get", ""), e[s];
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
function Xn(e) {
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
const F = (e, s) => Dc(e, s, Zo);
function nn(e, s, o) {
  try {
    Ln(-1);
    const n = arguments.length;
    return n === 2 ? et(s) && !Be(s) ? Qo(s) ? C(e, null, [s]) : C(e, s) : C(e, null, s) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && Qo(o) && (o = [o]), C(e, s, o));
  } finally {
    Ln(1);
  }
}
const Vu = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Pa;
const Pl = typeof window < "u" && window.trustedTypes;
if (Pl)
  try {
    Pa = /* @__PURE__ */ Pl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const mr = Pa ? (e) => Pa.createHTML(e) : (e) => e, Wu = "http://www.w3.org/2000/svg", Gu = "http://www.w3.org/1998/Math/MathML", ks = typeof document < "u" ? document : null, Rl = ks && /* @__PURE__ */ ks.createElement("template"), ju = {
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
    const c = o ? o.previousSibling : s.lastChild;
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
      c ? c.nextSibling : s.firstChild,
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
    enterActiveClass: c = `${o}-enter-active`,
    enterToClass: u = `${o}-enter-to`,
    appearFromClass: d = i,
    appearActiveClass: m = c,
    appearToClass: v = u,
    leaveFromClass: g = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: p = `${o}-leave-to`
  } = e, k = qu(l), I = k && k[0], b = k && k[1], {
    onBeforeEnter: T,
    onEnter: M,
    onEnterCancelled: x,
    onLeave: S,
    onLeaveCancelled: H,
    onBeforeAppear: K = T,
    onAppear: B = M,
    onAppearCancelled: E = x
  } = s, P = (X, N, O, U) => {
    X._enterCancelled = U, Ls(X, N ? v : u), Ls(X, N ? m : c), O && O();
  }, L = (X, N) => {
    X._isLeaving = !1, Ls(X, g), Ls(X, p), Ls(X, w), N && N();
  }, oe = (X) => (N, O) => {
    const U = X ? B : M, R = () => P(N, X, O);
    qs(U, [N, R]), Dl(() => {
      Ls(N, X ? d : i), fs(N, X ? v : u), Ml(U) || Ll(N, n, I, R);
    });
  };
  return pt(s, {
    onBeforeEnter(X) {
      qs(T, [X]), fs(X, i), fs(X, c);
    },
    onBeforeAppear(X) {
      qs(K, [X]), fs(X, d), fs(X, m);
    },
    onEnter: oe(!1),
    onAppear: oe(!0),
    onLeave(X, N) {
      X._isLeaving = !0;
      const O = () => L(X, N);
      fs(X, g), X._enterCancelled ? (fs(X, w), Ra(X)) : (Ra(X), fs(X, w)), Dl(() => {
        X._isLeaving && (Ls(X, g), fs(X, p), Ml(S) || Ll(X, n, b, O));
      }), qs(S, [X, O]);
    },
    onEnterCancelled(X) {
      P(X, !1, void 0, !0), qs(x, [X]);
    },
    onAppearCancelled(X) {
      P(X, !0, void 0, !0), qs(E, [X]);
    },
    onLeaveCancelled(X) {
      L(X), qs(H, [X]);
    }
  });
}
function qu(e) {
  if (e == null)
    return null;
  if (et(e))
    return [ua(e.enter), ua(e.leave)];
  {
    const s = ua(e);
    return [s, s];
  }
}
function ua(e) {
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
  const { type: c, timeout: u, propCount: d } = hr(e, s);
  if (!c)
    return n();
  const m = c + "end";
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
  const o = window.getComputedStyle(e), n = (k) => (o[k] || "").split(", "), l = n(`${Ds}Delay`), i = n(`${Ds}Duration`), c = Ol(l, i), u = n(`${Po}Delay`), d = n(`${Po}Duration`), m = Ol(u, d);
  let v = null, g = 0, w = 0;
  s === Ds ? c > 0 && (v = Ds, g = c, w = i.length) : s === Po ? m > 0 && (v = Po, g = m, w = d.length) : (g = Math.max(c, m), v = g > 0 ? c > m ? Ds : Po : null, w = v ? v === Ds ? i.length : d.length : 0);
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
function Ra(e) {
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
        for (const c of s.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          o[u] == null && xn(n, u, "");
        }
      else
        for (const c in s)
          o[c] == null && xn(n, c, "");
    for (const c in o)
      c === "display" && (i = !0), xn(n, c, o[c]);
  } else if (l) {
    if (s !== o) {
      const c = n[Qu];
      c && (o += ";" + c), n.cssText = o, i = Zu.test(o);
    }
  } else s && e.removeAttribute("style");
  Ul in e && (e[Ul] = i ? n.display : "", e[Xu] && (n.display = "none"));
}
const Nl = /\s*!important$/;
function xn(e, s, o) {
  if (Be(o))
    o.forEach((n) => xn(e, s, n));
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
const zl = ["Webkit", "Moz", "ms"], da = {};
function td(e, s) {
  const o = da[s];
  if (o)
    return o;
  let n = Kt(s);
  if (n !== "filter" && n in e)
    return da[s] = n;
  n = Vn(n);
  for (let l = 0; l < zl.length; l++) {
    const i = zl[l] + n;
    if (i in e)
      return da[s] = i;
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
  let c = !1;
  if (o === "" || o == null) {
    const u = typeof e[s];
    u === "boolean" ? o = ci(o) : o == null && u === "string" ? (o = "", c = !0) : u === "number" && (o = 0, c = !0);
  }
  try {
    e[s] = o;
  } catch {
  }
  c && e.removeAttribute(l || s);
}
function xs(e, s, o, n) {
  e.addEventListener(s, o, n);
}
function sd(e, s, o, n) {
  e.removeEventListener(s, o, n);
}
const Wl = Symbol("_vei");
function od(e, s, o, n, l = null) {
  const i = e[Wl] || (e[Wl] = {}), c = i[s];
  if (n && c)
    c.value = n;
  else {
    const [u, d] = nd(s);
    if (n) {
      const m = i[s] = id(
        n,
        l
      );
      xs(e, u, m, d);
    } else c && (sd(e, u, c, d), i[s] = void 0);
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
let fa = 0;
const ad = /* @__PURE__ */ Promise.resolve(), ld = () => fa || (ad.then(() => fa = 0), fa = Date.now());
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
  const c = l === "svg";
  s === "class" ? Ju(e, n, c) : s === "style" ? ed(e, o, n) : Fn(s) ? Na(s) || od(e, s, o, n, i) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : ud(e, s, n, c)) ? (Vl(e, s, n), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Bl(e, s, n, c, i, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !ct(n)) ? Vl(e, Kt(s), n, i, s) : (s === "true-value" ? e._trueValue = n : s === "false-value" && (e._falseValue = n), Bl(e, s, n, c));
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
const yr = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), An = Symbol("_moveCb"), Hl = Symbol("_enterCb"), dd = (e) => (delete e.props.mode, e), fd = /* @__PURE__ */ dd({
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
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!hd(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(vd), l.forEach(pd);
      const u = l.filter(gd);
      Ra(o.vnode.el), u.forEach((d) => {
        const m = d.el, v = m.style;
        fs(m, c), v.transform = v.webkitTransform = v.transitionDuration = "";
        const g = m[An] = (w) => {
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", g), m[An] = null, Ls(m, c));
        };
        m.addEventListener("transitionend", g);
      }), l = [];
    }), () => {
      const c = Je(e), u = gr(c);
      let d = c.tag || j;
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
      return C(d, null, i);
    };
  }
}), md = fd;
function vd(e) {
  const s = e.el;
  s[An] && s[An](), s[Hl] && s[Hl]();
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
  const { hasTransform: c } = hr(n);
  return i.removeChild(n), c;
}
const Fs = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Be(s) ? (o) => kn(s, o) : s;
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
  return s && (e = e.trim()), o && (e = Wn(e)), e;
}
const zt = {
  created(e, { modifiers: { lazy: s, trim: o, number: n } }, l) {
    e[jt] = Fs(l);
    const i = n || l.props && l.props.type === "number";
    xs(e, s ? "change" : "input", (c) => {
      c.target.composing || e[jt](ql(e.value, o, i));
    }), (o || i) && xs(e, "change", () => {
      e.value = ql(e.value, o, i);
    }), s || (xs(e, "compositionstart", yd), xs(e, "compositionend", Kl), xs(e, "change", Kl));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: n, trim: l, number: i } }, c) {
    if (e[jt] = Fs(c), e.composing) return;
    const u = (i || e.type === "number") && !/^0\d/.test(e.value) ? Wn(e.value) : e.value, d = s ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (n && s === o || l && e.value.trim() === d) || (e.value = d));
  }
}, en = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[jt] = Fs(o), xs(e, "change", () => {
      const n = e._modelValue, l = _o(e), i = e.checked, c = e[jt];
      if (Be(n)) {
        const u = Ba(n, l), d = u !== -1;
        if (i && !d)
          c(n.concat(l));
        else if (!i && d) {
          const m = [...n];
          m.splice(u, 1), c(m);
        }
      } else if (ko(n)) {
        const u = new Set(n);
        i ? u.add(l) : u.delete(l), c(u);
      } else
        c(_r(e, i));
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
const Zt = {
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
      const i = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? Wn(_o(c)) : _o(c)
      );
      e[jt](
        e.multiple ? l ? new Set(i) : i : i[0]
      ), e._assigning = !0, _t(() => {
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
      const c = e.options[l], u = _o(c);
      if (o)
        if (n) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = s.some((m) => String(m) === String(u)) : c.selected = Ba(s, u) > -1;
        } else
          c.selected = s.has(u);
      else if (eo(_o(c), s)) {
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
const Qn = {
  created(e, s, o) {
    gn(e, s, o, null, "created");
  },
  mounted(e, s, o) {
    gn(e, s, o, null, "mounted");
  },
  beforeUpdate(e, s, o, n) {
    gn(e, s, o, n, "beforeUpdate");
  },
  updated(e, s, o, n) {
    gn(e, s, o, n, "updated");
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
          return Zt;
        default:
          return zt;
      }
  }
}
function gn(e, s, o, n, l) {
  const c = wd(
    e.tagName,
    o.props && o.props.type
  )[l];
  c && c(e, s, o, n);
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
}, it = (e, s) => {
  const o = e._withMods || (e._withMods = {}), n = s.join(".");
  return o[n] || (o[n] = ((l, ...i) => {
    for (let c = 0; c < s.length; c++) {
      const u = kd[s[c]];
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
}, Ht = (e, s) => {
  const o = e._withKeys || (e._withKeys = {}), n = s.join(".");
  return o[n] || (o[n] = ((l) => {
    if (!("key" in l))
      return;
    const i = Bs(l.key);
    if (s.some(
      (c) => c === i || bd[c] === i
    ))
      return e(l);
  }));
}, $d = /* @__PURE__ */ pt({ patchProp: cd }, ju);
let Xl;
function Cd() {
  return Xl || (Xl = Cu($d));
}
const Zn = ((...e) => {
  const s = Cd().createApp(...e), { mount: o } = s;
  return s.mount = (n) => {
    const l = Sd(n);
    if (!l) return;
    const i = s._component;
    !Ge(i) && !i.render && !i.template && (i.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, xd(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
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
}, Md = /* @__PURE__ */ ue({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (a(), r("div", Id, [
      s.$slots.header ? (a(), r("div", Ed, [
        Ke(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (a(), r("div", Td, [
        Ke(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", Pd, [
        Ke(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (a(), r("div", Rd, [
        Ke(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), me = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of s)
    o[n] = l;
  return o;
}, Pt = /* @__PURE__ */ me(Md, [["__scopeId", "data-v-21565df9"]]), Dd = {
  key: 0,
  class: "panel-title-prefix"
}, Ld = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Od = /* @__PURE__ */ ue({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (a(), D(Xa(`h${e.level}`), {
      class: Te(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (a(), r("span", Dd, f(e.prefix), 1)) : (a(), r("span", Ld)),
        Ke(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ad = /* @__PURE__ */ me(Od, [["__scopeId", "data-v-c3875efc"]]), Ud = ["title"], Nd = ["width", "height"], zd = /* @__PURE__ */ ue({
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
      ])], 8, Nd))
    ], 8, Ud));
  }
}), kr = /* @__PURE__ */ me(zd, [["__scopeId", "data-v-6fc7f16d"]]), Fd = { class: "header-left" }, Bd = {
  key: 0,
  class: "header-actions"
}, Vd = /* @__PURE__ */ ue({
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
      class: Te(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", Fd, [
        C(Ad, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            $(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), D(kr, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (a(), r("div", Bd, [
        Ke(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Rt = /* @__PURE__ */ me(Vd, [["__scopeId", "data-v-55a62cd6"]]), Wd = {
  key: 0,
  class: "section-title-count"
}, Gd = {
  key: 1,
  class: "section-title-icon"
}, jd = /* @__PURE__ */ ue({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), D(Xa(`h${e.level}`), {
      class: Te(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, {
      default: h(() => [
        Ke(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), r("span", Wd, "(" + f(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), r("span", Gd, f(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ut = /* @__PURE__ */ me(jd, [["__scopeId", "data-v-559361eb"]]), Hd = { class: "status-grid" }, Kd = { class: "status-grid__columns" }, qd = { class: "status-grid__column" }, Yd = { class: "status-grid__title" }, Jd = { class: "status-grid__column status-grid__column--right" }, Xd = { class: "status-grid__title" }, Qd = {
  key: 0,
  class: "status-grid__footer"
}, Zd = /* @__PURE__ */ ue({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (a(), r("div", Hd, [
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
      s.$slots.footer ? (a(), r("div", Qd, [
        Ke(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), ef = /* @__PURE__ */ me(Zd, [["__scopeId", "data-v-73b7ba3f"]]), tf = {
  key: 0,
  class: "status-item__icon"
}, sf = {
  key: 1,
  class: "status-item__count"
}, of = { class: "status-item__label" }, nf = /* @__PURE__ */ ue({
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
      class: Te(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), r("span", tf, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), r("span", sf, f(e.count), 1)) : y("", !0),
      t("span", of, f(e.label), 1)
    ], 2));
  }
}), ds = /* @__PURE__ */ me(nf, [["__scopeId", "data-v-6f929183"]]), af = { class: "issue-card__header" }, lf = { class: "issue-card__icon" }, rf = { class: "issue-card__title" }, cf = {
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
}, mf = /* @__PURE__ */ ue({
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
      class: Te(["issue-card", o.value])
    }, [
      t("div", af, [
        t("span", lf, f(e.icon), 1),
        t("h4", rf, f(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), r("div", cf, [
        e.description ? (a(), r("p", uf, f(e.description), 1)) : y("", !0),
        Ke(n.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (a(), r("div", df, [
        (a(!0), r(j, null, he(e.items, (i, c) => (a(), r("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, f(i), 1)
        ]))), 128))
      ])) : y("", !0),
      n.$slots.actions ? (a(), r("div", ff, [
        Ke(n.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Xt = /* @__PURE__ */ me(mf, [["__scopeId", "data-v-df6aa348"]]), vf = ["type", "disabled"], pf = {
  key: 0,
  class: "spinner"
}, gf = /* @__PURE__ */ ue({
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
      class: Te(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), r("span", pf)) : y("", !0),
      e.loading ? y("", !0) : Ke(s.$slots, "default", { key: 1 }, void 0)
    ], 10, vf));
  }
}), le = /* @__PURE__ */ me(gf, [["__scopeId", "data-v-772abe47"]]), hf = { class: "empty-state" }, yf = {
  key: 0,
  class: "empty-icon"
}, wf = { class: "empty-message" }, _f = /* @__PURE__ */ ue({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (a(), r("div", hf, [
      e.icon ? (a(), r("div", yf, f(e.icon), 1)) : y("", !0),
      t("p", wf, f(e.message), 1),
      e.actionLabel ? (a(), D(le, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => s.$emit("action"))
      }, {
        default: h(() => [
          $(f(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), ns = /* @__PURE__ */ me(_f, [["__scopeId", "data-v-4466284f"]]), kf = /* @__PURE__ */ ue({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (a(), r("span", {
      class: Te(["detail-label"]),
      style: qt({ minWidth: e.minWidth })
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), Sn = /* @__PURE__ */ me(kf, [["__scopeId", "data-v-75e9eeb8"]]), bf = /* @__PURE__ */ ue({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), r("span", {
      class: Te(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Ma = /* @__PURE__ */ me(bf, [["__scopeId", "data-v-2f186e4c"]]), $f = { class: "detail-row" }, Cf = /* @__PURE__ */ ue({
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
    return (s, o) => (a(), r("div", $f, [
      C(Sn, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          $(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), D(Ma, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: h(() => [
          $(f(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Ke(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), dt = /* @__PURE__ */ me(Cf, [["__scopeId", "data-v-ef15664a"]]), xf = { class: "modal-header" }, Sf = { class: "modal-body" }, If = { class: "status-section" }, Ef = {
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
}, qm = { class: "modal-actions" }, Ym = /* @__PURE__ */ ue({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const s = e, o = _(!1);
    Xe(() => {
      console.log("StatusDetailModal mounted, initial show value:", s.show);
    }), yt(() => s.show, (w, p) => {
      console.log("StatusDetailModal show prop changed from", p, "to", w);
    }, { immediate: !0 });
    const n = F(() => {
      var w, p, k;
      return ((k = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : k.filter(
        (I) => I.status === "broken" && I.sync_state === "synced"
      )) || [];
    }), l = F(() => {
      var w, p, k;
      return ((k = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : k.filter(
        (I) => I.status === "broken" && I.sync_state !== "synced"
      )) || [];
    }), i = F(() => {
      var w, p, k;
      return ((k = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.synced) == null ? void 0 : k.filter((I) => {
        var T, M, x;
        const b = (x = (M = (T = s.status) == null ? void 0 : T.workflows) == null ? void 0 : M.analyzed) == null ? void 0 : x.find((S) => S.name === I);
        return !b || b.status !== "broken";
      })) || [];
    }), c = F(() => {
      var w, p, k, I, b;
      return (w = s.status) != null && w.workflows ? (((p = s.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((k = s.status.workflows.modified) == null ? void 0 : k.length) ?? 0) > 0 || (((I = s.status.workflows.deleted) == null ? void 0 : I.length) ?? 0) > 0 || (((b = s.status.workflows.synced) == null ? void 0 : b.length) ?? 0) > 0 : !1;
    }), u = F(() => {
      var p, k, I;
      const w = (p = s.status) == null ? void 0 : p.git_changes;
      return w ? (((k = w.nodes_added) == null ? void 0 : k.length) ?? 0) > 0 || (((I = w.nodes_removed) == null ? void 0 : I.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = F(() => {
      var w, p, k, I, b, T;
      return !c.value && !u.value && ((p = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : p.is_synced) && (((k = s.status) == null ? void 0 : k.missing_models_count) ?? 0) === 0 && (((T = (b = (I = s.status) == null ? void 0 : I.comparison) == null ? void 0 : b.disabled_nodes) == null ? void 0 : T.length) ?? 0) === 0;
    }), m = F(() => {
      var p, k;
      const w = (k = (p = s.status) == null ? void 0 : p.git_changes) == null ? void 0 : k.workflow_changes;
      return w ? typeof w == "number" ? w : Object.keys(w).length : 0;
    });
    function v(w) {
      return typeof w == "string" ? w : w.name;
    }
    function g(w) {
      return typeof w == "object" && w.is_development === !0;
    }
    return (w, p) => {
      var k, I, b, T, M, x, S, H, K, B, E, P, L, oe, X, N, O, U, R, Q, Y, ye;
      return a(), D(Ct, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = (_e) => w.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: p[6] || (p[6] = it(() => {
            }, ["stop"]))
          }, [
            t("div", xf, [
              p[8] || (p[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = (_e) => w.$emit("close"))
              }, "✕")
            ]),
            t("div", Sf, [
              t("div", If, [
                C(Ut, { level: "4" }, {
                  default: h(() => [...p[9] || (p[9] = [
                    $("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                C(dt, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (a(), r("div", Ef, [
                t("div", Tf, [
                  C(Ut, { level: "4" }, {
                    default: h(() => [...p[10] || (p[10] = [
                      $("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[1] || (p[1] = (_e) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                n.value.length ? (a(), r("div", Pf, [
                  t("div", Rf, [
                    p[11] || (p[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Mf, "BROKEN (COMMITTED) (" + f(n.value.length) + ")", 1)
                  ]),
                  t("div", Df, [
                    (a(!0), r(j, null, he(n.value, (_e) => (a(), r("div", {
                      key: _e.name,
                      class: "workflow-item"
                    }, [
                      t("span", Lf, f(_e.name), 1),
                      t("span", Of, f(_e.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), r("div", Af, [
                  t("div", Uf, [
                    p[12] || (p[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Nf, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  t("div", zf, [
                    (a(!0), r(j, null, he(l.value, (_e) => (a(), r("div", {
                      key: _e.name,
                      class: "workflow-item"
                    }, [
                      t("span", Ff, f(_e.name), 1),
                      t("span", Bf, f(_e.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = (k = e.status.workflows) == null ? void 0 : k.new) != null && I.length ? (a(), r("div", Vf, [
                  t("div", Wf, [
                    p[13] || (p[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", Gf, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", jf, [
                    (a(!0), r(j, null, he(e.status.workflows.new, (_e) => (a(), r("div", {
                      key: _e,
                      class: "workflow-item"
                    }, [
                      t("span", Hf, f(_e), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (T = (b = e.status.workflows) == null ? void 0 : b.modified) != null && T.length ? (a(), r("div", Kf, [
                  t("div", qf, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", Yf, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", Jf, [
                    (a(!0), r(j, null, he(e.status.workflows.modified, (_e) => (a(), r("div", {
                      key: _e,
                      class: "workflow-item"
                    }, [
                      t("span", Xf, f(_e), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = (M = e.status.workflows) == null ? void 0 : M.deleted) != null && x.length ? (a(), r("div", Qf, [
                  t("div", Zf, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", em, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", tm, [
                    (a(!0), r(j, null, he(e.status.workflows.deleted, (_e) => (a(), r("div", {
                      key: _e,
                      class: "workflow-item"
                    }, [
                      t("span", sm, f(_e), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                i.value.length ? (a(), r("div", om, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = (_e) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", nm, "SYNCED (" + f(i.value.length) + ")", 1),
                    t("span", am, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), r("div", lm, [
                    (a(!0), r(j, null, he(i.value, (_e) => (a(), r("div", {
                      key: _e,
                      class: "workflow-item"
                    }, [
                      t("span", im, f(_e), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (a(), r("div", rm, [
                C(Ut, { level: "4" }, {
                  default: h(() => [...p[17] || (p[17] = [
                    $("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (H = (S = e.status.git_changes) == null ? void 0 : S.nodes_added) != null && H.length ? (a(), r("div", cm, [
                  t("div", um, [
                    p[18] || (p[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", dm, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", fm, [
                    (a(!0), r(j, null, he(e.status.git_changes.nodes_added, (_e) => (a(), r("div", {
                      key: v(_e),
                      class: "change-item"
                    }, [
                      t("span", mm, f(v(_e)), 1),
                      g(_e) ? (a(), r("span", vm, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (B = (K = e.status.git_changes) == null ? void 0 : K.nodes_removed) != null && B.length ? (a(), r("div", pm, [
                  t("div", gm, [
                    p[19] || (p[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", hm, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", ym, [
                    (a(!0), r(j, null, he(e.status.git_changes.nodes_removed, (_e) => (a(), r("div", {
                      key: v(_e),
                      class: "change-item"
                    }, [
                      t("span", wm, f(v(_e)), 1),
                      g(_e) ? (a(), r("span", _m, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (E = e.status.git_changes) != null && E.workflow_changes ? (a(), r("div", km, [
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
                (P = e.status.git_changes) != null && P.has_other_changes ? (a(), r("div", xm, [...p[21] || (p[21] = [
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
              (L = e.status.comparison) != null && L.is_synced ? y("", !0) : (a(), r("div", Sm, [
                t("div", Im, [
                  C(Ut, { level: "4" }, {
                    default: h(() => [...p[22] || (p[22] = [
                      $("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[3] || (p[3] = (_e) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                p[26] || (p[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (X = (oe = e.status.comparison) == null ? void 0 : oe.missing_nodes) != null && X.length ? (a(), r("div", Em, [
                  C(dt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", Tm, [
                    (a(!0), r(j, null, he(e.status.comparison.missing_nodes.slice(0, 10), (_e) => (a(), r("div", {
                      key: _e,
                      class: "drift-list-item"
                    }, " - " + f(_e), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), r("div", Pm, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (O = (N = e.status.comparison) == null ? void 0 : N.extra_nodes) != null && O.length ? (a(), r("div", Rm, [
                  C(dt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", Mm, [
                    (a(!0), r(j, null, he(e.status.comparison.extra_nodes.slice(0, 10), (_e) => (a(), r("div", {
                      key: _e,
                      class: "drift-list-item"
                    }, " - " + f(_e), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), r("div", Dm, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (R = (U = e.status.comparison) == null ? void 0 : U.version_mismatches) != null && R.length ? (a(), r("div", Lm, [
                  C(dt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", Om, [
                    (a(!0), r(j, null, he(e.status.comparison.version_mismatches.slice(0, 10), (_e) => (a(), r("div", {
                      key: _e.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      $(f(_e.name) + ": ", 1),
                      t("span", Am, f(_e.actual), 1),
                      p[23] || (p[23] = $(" → ", -1)),
                      t("span", Um, f(_e.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), r("div", Nm, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((Q = e.status.comparison) == null ? void 0 : Q.packages_in_sync) === !1 ? (a(), r("div", zm, [
                  C(dt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", Fm, [
                  C(le, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: p[4] || (p[4] = (_e) => w.$emit("repair"))
                  }, {
                    default: h(() => [...p[24] || (p[24] = [
                      $(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  p[25] || (p[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ye = (Y = e.status.comparison) == null ? void 0 : Y.disabled_nodes) != null && ye.length ? (a(), r("div", Bm, [
                C(Ut, { level: "4" }, {
                  default: h(() => [...p[27] || (p[27] = [
                    $("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", Vm, [
                  p[28] || (p[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", Wm, [
                  (a(!0), r(j, null, he(e.status.comparison.disabled_nodes.slice(0, 10), (_e) => (a(), r("div", {
                    key: _e,
                    class: "drift-list-item"
                  }, " • " + f(_e), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), r("div", Gm, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), r("div", jm, [
                C(Ut, { level: "4" }, {
                  default: h(() => [...p[29] || (p[29] = [
                    $("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", Hm, [
                  p[30] || (p[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                p[31] || (p[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (a(), r("div", Km, [...p[32] || (p[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            t("div", qm, [
              C(le, {
                variant: "secondary",
                onClick: p[5] || (p[5] = (_e) => w.$emit("close"))
              }, {
                default: h(() => [...p[33] || (p[33] = [
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
}), Jm = /* @__PURE__ */ me(Ym, [["__scopeId", "data-v-e2b37122"]]), Xm = { class: "health-section-header" }, Qm = { class: "suggestions-content" }, Zm = { class: "suggestions-text" }, ev = { style: { "margin-top": "var(--cg-space-3)" } }, tv = {
  key: 1,
  class: "no-issues-text"
}, sv = /* @__PURE__ */ ue({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = _(!1), i = _(!1);
    function c() {
      l.value = !0;
    }
    function u() {
      l.value = !1, m("view-workflows");
    }
    function d() {
      l.value = !1, m("view-nodes");
    }
    const m = o, v = _(!1), g = _(!1);
    function w() {
      g.value = !0, m("repair-environment");
    }
    function p() {
      g.value = !1;
    }
    function k() {
      l.value = !1;
    }
    const I = F(() => {
      const U = n.status.workflows.analyzed || [], R = U.filter(
        (Q) => Q.unresolved_models_count > 0 || Q.ambiguous_models_count > 0
      );
      return R.length === 0 && n.status.missing_models_count > 0 ? U.filter((Q) => Q.sync_state === "synced") : R;
    });
    function b() {
      const U = I.value;
      U.length !== 0 && (v.value = !0, m("repair-missing-models", U.map((R) => R.name)));
    }
    function T() {
      v.value = !1;
    }
    s({ resetRepairingState: T, resetRepairingEnvironmentState: p, closeDetailModal: k });
    const M = F(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), x = F(() => n.status.has_changes), S = F(() => {
      const U = n.status.git_changes;
      return U.nodes_added.length > 0 || U.nodes_removed.length > 0 || U.workflow_changes;
    }), H = F(() => n.status.has_changes || M.value), K = F(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), B = F(() => n.status.git_changes.has_other_changes), E = F(() => {
      var U;
      return ((U = n.status.workflows.analyzed) == null ? void 0 : U.filter((R) => R.status === "broken")) || [];
    }), P = F(() => {
      var U;
      return ((U = n.status.workflows.analyzed) == null ? void 0 : U.filter(
        (R) => R.has_path_sync_issues && !R.has_issues
      )) || [];
    }), L = F(() => E.value.length > 0), oe = F(() => L.value || P.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), X = F(() => {
      const U = [];
      return n.status.workflows.new.length > 0 && U.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && U.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && U.push(`${n.status.workflows.deleted.length} deleted`), U.length > 0 ? `${U.join(", ")} workflow${U.length === 1 && !U[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), N = F(() => {
      var Q, Y;
      const U = [], R = n.status.comparison;
      return (Q = R.missing_nodes) != null && Q.length && U.push(`${R.missing_nodes.length} missing node${R.missing_nodes.length === 1 ? "" : "s"}`), (Y = R.extra_nodes) != null && Y.length && U.push(`${R.extra_nodes.length} untracked node${R.extra_nodes.length === 1 ? "" : "s"}`), U.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${U.join(" and ")}.`;
    }), O = F(() => {
      var Q, Y;
      const U = [], R = n.status.comparison;
      return (Q = R.extra_nodes) != null && Q.length && (R.extra_nodes.slice(0, 3).forEach((ye) => {
        U.push(`Untracked: ${ye}`);
      }), R.extra_nodes.length > 3 && U.push(`...and ${R.extra_nodes.length - 3} more untracked`)), (Y = R.missing_nodes) != null && Y.length && (R.missing_nodes.slice(0, 3).forEach((ye) => {
        U.push(`Missing: ${ye}`);
      }), R.missing_nodes.length > 3 && U.push(`...and ${R.missing_nodes.length - 3} more missing`)), U;
    });
    return (U, R) => (a(), r(j, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, { title: "STATUS" })
        ]),
        content: h(() => [
          n.setupState === "no_workspace" ? (a(), D(Xt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: h(() => [
              C(le, {
                variant: "primary",
                size: "sm",
                onClick: R[0] || (R[0] = (Q) => U.$emit("start-setup"))
              }, {
                default: h(() => [...R[13] || (R[13] = [
                  $(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (a(), D(Xt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: h(() => [
              C(le, {
                variant: "primary",
                size: "sm",
                onClick: R[1] || (R[1] = (Q) => U.$emit("view-environments"))
              }, {
                default: h(() => [...R[14] || (R[14] = [
                  $(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (a(), D(Xt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: h(() => [
              C(le, {
                variant: "primary",
                size: "sm",
                onClick: R[2] || (R[2] = (Q) => U.$emit("create-environment"))
              }, {
                default: h(() => [...R[15] || (R[15] = [
                  $(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: R[4] || (R[4] = (Q) => i.value = !0),
            onMouseleave: R[5] || (R[5] = (Q) => i.value = !1)
          }, [
            t("div", Xm, [
              C(Ut, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...R[16] || (R[16] = [
                  $(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              C(Ku, { name: "fade" }, {
                default: h(() => [
                  i.value ? (a(), D(le, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: h(() => [...R[17] || (R[17] = [
                      $(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            C(ef, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, so({
              left: h(() => [
                e.status.workflows.new.length ? (a(), D(ds, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (a(), D(ds, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (a(), D(ds, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                C(ds, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: M.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (a(), D(ds, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), D(ds, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (a(), D(ds, {
                  key: 2,
                  icon: "●",
                  count: K.value,
                  label: K.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                B.value ? (a(), D(ds, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                x.value && !S.value && !B.value ? (a(), D(ds, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                x.value ? y("", !0) : (a(), D(ds, {
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
                  R[19] || (R[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", Qm, [
                    t("span", Zm, f(X.value), 1),
                    C(le, {
                      variant: "primary",
                      size: "sm",
                      onClick: R[3] || (R[3] = (Q) => U.$emit("commit-changes"))
                    }, {
                      default: h(() => [...R[18] || (R[18] = [
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
          e.status.is_detached_head ? (a(), D(Xt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              C(le, {
                variant: "primary",
                size: "sm",
                onClick: R[6] || (R[6] = (Q) => U.$emit("create-branch"))
              }, {
                default: h(() => [...R[20] || (R[20] = [
                  $(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", ev, [
            C(Ut, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...R[21] || (R[21] = [
                $(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            oe.value ? (a(), r(j, { key: 0 }, [
              E.value.length > 0 ? (a(), D(Xt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: E.value.map((Q) => `${Q.name} — ${Q.issue_summary}`)
              }, {
                actions: h(() => [
                  C(le, {
                    variant: "primary",
                    size: "sm",
                    onClick: R[7] || (R[7] = (Q) => U.$emit("view-workflows"))
                  }, {
                    default: h(() => [...R[22] || (R[22] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              P.value.length > 0 ? (a(), D(Xt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${P.value.length} workflow${P.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: P.value.map((Q) => `${Q.name} — ${Q.models_needing_path_sync_count} model path${Q.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  C(le, {
                    variant: "primary",
                    size: "sm",
                    onClick: R[8] || (R[8] = (Q) => U.$emit("view-workflows"))
                  }, {
                    default: h(() => [...R[23] || (R[23] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !L.value ? (a(), D(Xt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  C(le, {
                    variant: "primary",
                    size: "sm",
                    disabled: v.value,
                    onClick: b
                  }, {
                    default: h(() => [
                      $(f(v.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  C(le, {
                    variant: "secondary",
                    size: "sm",
                    onClick: R[9] || (R[9] = (Q) => U.$emit("view-workflows"))
                  }, {
                    default: h(() => [...R[24] || (R[24] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (a(), D(Xt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: N.value,
                items: O.value
              }, {
                actions: h(() => [
                  C(le, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: h(() => [...R[25] || (R[25] = [
                      $(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  C(le, {
                    variant: "primary",
                    size: "sm",
                    onClick: R[10] || (R[10] = (Q) => U.$emit("view-nodes"))
                  }, {
                    default: h(() => [...R[26] || (R[26] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (a(), D(Xt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: h(() => [
                  C(le, {
                    variant: "primary",
                    size: "sm",
                    onClick: R[11] || (R[11] = (Q) => U.$emit("view-nodes"))
                  }, {
                    default: h(() => [...R[27] || (R[27] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : H.value ? (a(), r("span", tv, "No issues")) : (a(), D(ns, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      C(Jm, {
        show: l.value,
        status: e.status,
        "is-repairing": g.value,
        onClose: R[12] || (R[12] = (Q) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), ov = /* @__PURE__ */ me(sv, [["__scopeId", "data-v-55fcd77f"]]), nv = ["type", "value", "placeholder", "disabled"], av = /* @__PURE__ */ ue({
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
    const n = e, l = o, i = _(null);
    function c(u) {
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
    }), (u, d) => (a(), r("input", {
      ref_key: "inputRef",
      ref: i,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: Te(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = Ht((m) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Ht((m) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (m) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (m) => u.$emit("blur"))
    }, null, 42, nv));
  }
}), Un = /* @__PURE__ */ me(av, [["__scopeId", "data-v-0380d08f"]]), lv = { class: "branch-create-form" }, iv = { class: "form-actions" }, rv = /* @__PURE__ */ ue({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, n = _(""), l = F(() => {
      const u = n.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function i() {
      l.value && (o("create", n.value.trim()), n.value = "");
    }
    function c() {
      n.value = "", o("cancel");
    }
    return (u, d) => (a(), r("div", lv, [
      C(Un, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => n.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: i,
        onEscape: c
      }, null, 8, ["modelValue"]),
      t("div", iv, [
        C(le, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: i
        }, {
          default: h(() => [...d[1] || (d[1] = [
            $(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        C(le, {
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
}), cv = /* @__PURE__ */ me(rv, [["__scopeId", "data-v-7c500394"]]), uv = { class: "branch-list-item__indicator" }, dv = { class: "branch-list-item__name" }, fv = {
  key: 0,
  class: "branch-list-item__actions"
}, mv = {
  key: 0,
  class: "branch-list-item__current-label"
}, vv = /* @__PURE__ */ ue({
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
      class: Te(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, [
      t("span", uv, f(e.isCurrent ? "●" : "○"), 1),
      t("span", dv, f(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (a(), r("div", fv, [
        Ke(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), r("span", mv, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), pv = /* @__PURE__ */ me(vv, [["__scopeId", "data-v-c6581a24"]]), gv = {
  key: 2,
  class: "branch-list"
}, hv = /* @__PURE__ */ ue({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: s }) {
    const o = s, n = _(!1);
    function l(c) {
      o("create", c), i();
    }
    function i() {
      n.value = !1;
    }
    return (c, u) => (a(), D(Pt, null, {
      header: h(() => [
        C(Rt, { title: "BRANCHES" }, {
          actions: h(() => [
            n.value ? y("", !0) : (a(), D(le, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: u[0] || (u[0] = (d) => n.value = !0)
            }, {
              default: h(() => [...u[1] || (u[1] = [
                $(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: h(() => [
        n.value ? (a(), D(cv, {
          key: 0,
          onCreate: l,
          onCancel: i
        })) : y("", !0),
        e.branches.length === 0 ? (a(), D(ns, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), r("div", gv, [
          (a(!0), r(j, null, he(e.branches, (d) => (a(), D(pv, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: h(() => [
              d.is_current ? y("", !0) : (a(), D(le, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (m) => c.$emit("delete", d.name)
              }, {
                default: h(() => [...u[2] || (u[2] = [
                  $(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              d.is_current ? y("", !0) : (a(), D(le, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (m) => c.$emit("switch", d.name)
              }, {
                default: h(() => [...u[3] || (u[3] = [
                  $(" Switch ", -1)
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
}), yv = /* @__PURE__ */ me(hv, [["__scopeId", "data-v-86784ddd"]]), wv = { class: "commit-list" }, _v = /* @__PURE__ */ ue({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (a(), r("div", wv, [
      Ke(s.$slots, "default", {}, void 0)
    ]));
  }
}), kv = /* @__PURE__ */ me(_v, [["__scopeId", "data-v-8c5ee761"]]), bv = { class: "commit-hash" }, $v = /* @__PURE__ */ ue({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = F(() => s.hash.slice(0, s.length));
    return (n, l) => (a(), r("span", bv, f(o.value), 1));
  }
}), br = /* @__PURE__ */ me($v, [["__scopeId", "data-v-7c333cc6"]]), Cv = { class: "commit-message" }, xv = { class: "commit-date" }, Sv = /* @__PURE__ */ ue({
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
      class: Te(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      C(br, { hash: e.hash }, null, 8, ["hash"]),
      t("span", Cv, f(e.message), 1),
      t("span", xv, f(e.relativeDate), 1),
      i.$slots.actions ? (a(), r("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = it(() => {
        }, ["stop"]))
      }, [
        Ke(i.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Iv = /* @__PURE__ */ me(Sv, [["__scopeId", "data-v-dd7c621b"]]), Ev = /* @__PURE__ */ ue({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (s, o) => (a(), D(Pt, null, {
      header: h(() => [
        C(Rt, { title: "HISTORY" })
      ]),
      content: h(() => [
        e.commits.length === 0 ? (a(), D(ns, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), D(kv, { key: 1 }, {
          default: h(() => [
            (a(!0), r(j, null, he(e.commits, (n) => (a(), D(Iv, {
              key: n.hash,
              hash: n.short_hash || n.hash,
              message: n.message,
              "relative-date": n.date_relative || n.relative_date,
              onClick: (l) => s.$emit("select", n)
            }, {
              actions: h(() => [
                C(le, {
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
}), Tv = /* @__PURE__ */ me(Ev, [["__scopeId", "data-v-981c3c64"]]), wP = Vs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const _P = [
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
], kP = {
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
], bP = [
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
function tt() {
  const e = _(!1), s = _(null);
  async function o(z, $e) {
    var Ot;
    if (!((Ot = window.app) != null && Ot.api))
      throw new Error("ComfyUI API not available");
    const ze = await window.app.api.fetchApi(z, $e);
    if (!ze.ok) {
      const cs = await ze.json().catch(() => ({}));
      throw new Error(cs.error || cs.message || `Request failed: ${ze.status}`);
    }
    const rt = await ze.text();
    if (rt)
      return JSON.parse(rt);
  }
  async function n(z = !1) {
    return o(z ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(z, $e = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: z, allow_issues: $e })
    });
  }
  async function i(z = 10, $e = 0) {
    return o(`/v2/comfygit/log?limit=${z}&offset=${$e}`);
  }
  async function c(z) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: z })
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
  async function m(z) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: z, force: !0 })
    });
  }
  async function v() {
    return o("/v2/comfygit/branches");
  }
  async function g(z) {
    return o(`/v2/comfygit/commit/${z}`);
  }
  async function w(z, $e = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: z, force: $e })
    });
  }
  async function p(z, $e = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: z, start_point: $e })
    });
  }
  async function k(z, $e = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: z, force: $e })
    });
  }
  async function I(z, $e = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(z)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: $e })
    });
  }
  async function b() {
    try {
      return (await o("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const z = await n();
        return [{
          name: z.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + z.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: z.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: z.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function T(z, $e) {
    const ze = { target_env: z };
    return $e && (ze.workspace_path = $e), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ze)
    });
  }
  async function M() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function x(z) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function S() {
    return o("/v2/workspace/environments/create_status");
  }
  async function H(z = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${z}`);
  }
  async function K(z) {
    return o(`/v2/workspace/environments/${z}`, {
      method: "DELETE"
    });
  }
  async function B(z = !1) {
    try {
      return o(z ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const $e = await n(z), ze = [];
      return $e.workflows.new.forEach((rt) => {
        ze.push({ name: rt, status: "new", missing_nodes: 0, missing_models: 0, path: rt });
      }), $e.workflows.modified.forEach((rt) => {
        ze.push({ name: rt, status: "modified", missing_nodes: 0, missing_models: 0, path: rt });
      }), $e.workflows.synced.forEach((rt) => {
        ze.push({ name: rt, status: "synced", missing_nodes: 0, missing_models: 0, path: rt });
      }), ze;
    }
  }
  async function E(z) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(z)}/details`);
  }
  async function P(z) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(z)}/resolve`, {
      method: "POST"
    });
  }
  async function L(z, $e, ze) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(z)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: $e, install_models: ze })
    });
  }
  async function oe(z, $e, ze) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(z)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: $e, importance: ze })
    });
  }
  async function X() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function N() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function O(z) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(z)}`);
  }
  async function U(z) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: z })
    });
  }
  async function R(z, $e) {
    return o(`/v2/workspace/models/${z}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: $e })
    });
  }
  async function Q(z, $e) {
    return o(`/v2/workspace/models/${z}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: $e })
    });
  }
  async function Y(z) {
    return o(`/v2/workspace/models/${z}`, {
      method: "DELETE"
    });
  }
  async function ye(z) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function _e() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Le() {
    return o("/v2/workspace/models/directory");
  }
  async function Fe(z) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: z })
    });
  }
  async function ie(z) {
    const $e = new URLSearchParams({ url: z });
    return o(`/v2/workspace/huggingface/repo-info?${$e}`);
  }
  async function Se() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function we(z, $e = 10) {
    const ze = new URLSearchParams({ query: z, limit: String($e) });
    return o(`/v2/workspace/huggingface/search?${ze}`);
  }
  async function ge(z) {
    try {
      const $e = z ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(z)}` : "/v2/comfygit/config";
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
  async function Ce(z, $e) {
    const ze = $e ? `/v2/comfygit/config?workspace_path=${encodeURIComponent($e)}` : "/v2/comfygit/config";
    return o(ze, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function de(z, $e) {
    try {
      const ze = new URLSearchParams();
      return z && ze.append("level", z), $e && ze.append("lines", $e.toString()), o(`/v2/comfygit/debug/logs?${ze}`);
    } catch {
      return [];
    }
  }
  async function ce(z, $e) {
    try {
      const ze = new URLSearchParams();
      return z && ze.append("level", z), $e && ze.append("lines", $e.toString()), o(`/v2/workspace/debug/logs?${ze}`);
    } catch {
      return [];
    }
  }
  async function Me() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function Re() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function A(z, $e) {
    try {
      const ze = new URLSearchParams();
      return z && ze.append("level", z), $e && ze.append("lines", $e.toString()), o(`/v2/workspace/debug/orchestrator-logs?${ze}`);
    } catch {
      return [];
    }
  }
  async function W() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function te(z) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: z })
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
  async function ve(z) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(z)}/track-dev`, {
      method: "POST"
    });
  }
  async function pe(z) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(z)}/install`, {
      method: "POST"
    });
  }
  async function Ie(z) {
    var Ot, cs, Io, Eo;
    const $e = $r(), ze = ((cs = (Ot = window.app) == null ? void 0 : Ot.api) == null ? void 0 : cs.clientId) ?? ((Eo = (Io = window.app) == null ? void 0 : Io.api) == null ? void 0 : Eo.initialClientId) ?? "comfygit-panel", rt = {
      kind: "install",
      params: {
        id: z.id,
        version: z.version || z.selected_version || "latest",
        selected_version: z.selected_version || "latest",
        repository: z.repository || "",
        mode: z.mode || "remote",
        channel: z.channel || "default"
      },
      ui_id: $e,
      client_id: ze
    };
    return await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rt)
    }), await o("/v2/manager/queue/start"), { ui_id: $e };
  }
  async function Ee(z) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(z)}/update`, {
      method: "POST"
    });
  }
  async function ne(z) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(z)}`, {
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
  async function Ue(z, $e) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: z, url: $e })
    });
  }
  async function Pe(z) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function ee(z, $e, ze) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(z)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: $e, push_url: ze })
    });
  }
  async function J(z, $e) {
    const ze = {};
    return $e && (ze["X-Git-Auth-Token"] = $e), o(`/v2/comfygit/remotes/${encodeURIComponent(z)}/fetch`, {
      method: "POST",
      headers: ze
    });
  }
  async function Oe(z) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(z)}/status`);
    } catch {
      return null;
    }
  }
  async function be(z = "skip", $e = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: z,
        remove_extra_nodes: $e
      })
    });
  }
  async function ke(z, $e) {
    const ze = $e ? `/v2/comfygit/remotes/${encodeURIComponent(z)}/pull-preview?branch=${encodeURIComponent($e)}` : `/v2/comfygit/remotes/${encodeURIComponent(z)}/pull-preview`;
    return o(ze);
  }
  async function G(z, $e = {}) {
    const ze = { "Content-Type": "application/json" };
    return $e.authToken && (ze["X-Git-Auth-Token"] = $e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(z)}/pull`, {
      method: "POST",
      headers: ze,
      body: JSON.stringify({
        model_strategy: $e.modelStrategy || "skip",
        force: $e.force || !1,
        resolutions: $e.resolutions
      })
    });
  }
  async function V(z, $e) {
    const ze = $e ? `/v2/comfygit/remotes/${encodeURIComponent(z)}/push-preview?branch=${encodeURIComponent($e)}` : `/v2/comfygit/remotes/${encodeURIComponent(z)}/push-preview`;
    return o(ze);
  }
  async function re(z, $e = {}) {
    const ze = { "Content-Type": "application/json" };
    return $e.authToken && (ze["X-Git-Auth-Token"] = $e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(z)}/push`, {
      method: "POST",
      headers: ze,
      body: JSON.stringify({ force: $e.force || !1 })
    });
  }
  async function Ve(z, $e) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(z)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: $e })
    });
  }
  async function Qe(z) {
    const $e = {
      success: 0,
      failed: []
    };
    for (const ze of z)
      try {
        await P(ze), $e.success++;
      } catch (rt) {
        $e.failed.push({
          name: ze,
          error: rt instanceof Error ? rt.message : "Unknown error"
        });
      }
    return $e;
  }
  async function vt(z) {
    var rt;
    const $e = new FormData();
    if ($e.append("file", z), !((rt = window.app) != null && rt.api))
      throw new Error("ComfyUI API not available");
    const ze = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: $e
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!ze.ok) {
      const Ot = await ze.json().catch(() => ({}));
      throw new Error(Ot.error || `Preview failed: ${ze.status}`);
    }
    return ze.json();
  }
  async function at(z) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(z)}`
    );
  }
  async function ut(z, $e, ze, rt) {
    var Io;
    const Ot = new FormData();
    if (Ot.append("file", z), Ot.append("name", $e), Ot.append("model_strategy", ze), Ot.append("torch_backend", rt), !((Io = window.app) != null && Io.api))
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
  async function Mt() {
    return o("/v2/workspace/import/status");
  }
  async function Ft(z) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: z })
    });
  }
  async function Yt(z, $e, ze, rt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: z,
        name: $e,
        model_strategy: ze,
        torch_backend: rt
      })
    });
  }
  async function Ws() {
    return o("/v2/setup/status");
  }
  async function Ms(z) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function no() {
    return o("/v2/setup/initialize_status");
  }
  async function Co(z) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function xo() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function So() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function xe(z, $e) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: z, save_key: $e })
    });
  }
  async function Z() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function He(z) {
    const $e = z ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(z)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o($e);
  }
  async function gt(z) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function Jt() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function ys(z) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function ws(z) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}/stop`, {
      method: "POST"
    });
  }
  async function ls(z) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}/start`, {
      method: "POST"
    });
  }
  async function Ne(z) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}/status`);
  }
  async function is(z) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: z })
    });
  }
  async function se(z = !1) {
    return o(z ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function q() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Ae() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function je(z) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function ot(z) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function ft(z) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function Dt() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function rs(z) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/info`);
  }
  async function Gs(z) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances`);
  }
  async function js(z, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify($e)
    });
  }
  async function ln(z, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances/${encodeURIComponent($e)}/start`, {
      method: "POST"
    });
  }
  async function rn(z, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances/${encodeURIComponent($e)}/stop`, {
      method: "POST"
    });
  }
  async function cn(z, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances/${encodeURIComponent($e)}`, {
      method: "DELETE"
    });
  }
  async function un(z) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: z })
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
    getCommitDetail: g,
    checkout: w,
    createBranch: p,
    switchBranch: k,
    deleteBranch: I,
    // Environment Management
    getEnvironments: b,
    switchEnvironment: T,
    getSwitchProgress: M,
    createEnvironment: x,
    getCreateProgress: S,
    getComfyUIReleases: H,
    deleteEnvironment: K,
    // Workflow Management
    getWorkflows: B,
    getWorkflowDetails: E,
    resolveWorkflow: P,
    installWorkflowDeps: L,
    setModelImportance: oe,
    // Model Management
    getEnvironmentModels: X,
    getWorkspaceModels: N,
    getModelDetails: O,
    openFileLocation: U,
    addModelSource: R,
    removeModelSource: Q,
    deleteModel: Y,
    downloadModel: ye,
    scanWorkspaceModels: _e,
    getModelsDirectory: Le,
    setModelsDirectory: Fe,
    getHuggingFaceRepoInfo: ie,
    getModelsSubdirectories: Se,
    searchHuggingFaceRepos: we,
    // Settings
    getConfig: ge,
    updateConfig: Ce,
    // Debug/Logs
    getEnvironmentLogs: de,
    getWorkspaceLogs: ce,
    getEnvironmentLogPath: Me,
    getWorkspaceLogPath: Re,
    getOrchestratorLogs: A,
    getOrchestratorLogPath: W,
    openFile: te,
    // Node Management
    getNodes: ae,
    trackNodeAsDev: ve,
    installNode: pe,
    queueNodeInstall: Ie,
    updateNode: Ee,
    uninstallNode: ne,
    // Git Remotes
    getRemotes: fe,
    addRemote: Ue,
    removeRemote: Pe,
    updateRemoteUrl: ee,
    fetchRemote: J,
    getRemoteSyncStatus: Oe,
    // Push/Pull
    getPullPreview: ke,
    pullFromRemote: G,
    getPushPreview: V,
    pushToRemote: re,
    validateMerge: Ve,
    // Environment Sync
    syncEnvironmentManually: be,
    // Workflow Repair
    repairWorkflowModels: Qe,
    // Import Operations
    previewTarballImport: vt,
    previewGitImport: Ft,
    validateEnvironmentName: at,
    executeImport: ut,
    executeGitImport: Yt,
    getImportProgress: Mt,
    // First-Time Setup
    getSetupStatus: Ws,
    initializeWorkspace: Ms,
    getInitializeProgress: no,
    validatePath: Co,
    // Deploy Operations
    getDeploySummary: xo,
    getDataCenters: So,
    testRunPodConnection: xe,
    getNetworkVolumes: Z,
    getRunPodGpuTypes: He,
    deployToRunPod: gt,
    getRunPodPods: Jt,
    terminateRunPodPod: ys,
    stopRunPodPod: ws,
    startRunPodPod: ls,
    getDeploymentStatus: Ne,
    exportDeployPackage: is,
    getStoredRunPodKey: se,
    clearRunPodKey: q,
    // Custom Worker Operations
    getCustomWorkers: Ae,
    addCustomWorker: je,
    removeCustomWorker: ot,
    testWorkerConnection: ft,
    scanForWorkers: Dt,
    getWorkerSystemInfo: rs,
    getWorkerInstances: Gs,
    deployToWorker: js,
    startWorkerInstance: ln,
    stopWorkerInstance: rn,
    terminateWorkerInstance: cn,
    // Git Authentication
    testGitAuth: un
  };
}
async function hn(e, s) {
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
      return await hn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await hn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await hn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function n() {
    await hn("/v2/comfygit/orchestrator/kill", { method: "POST" });
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
}, Nv = /* @__PURE__ */ ue({
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
    return Xe(() => {
      document.addEventListener("keydown", i), document.body.style.overflow = "hidden";
    }), oo(() => {
      document.removeEventListener("keydown", i), document.body.style.overflow = "";
    }), (c, u) => (a(), D(Ct, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Te(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = it(() => {
          }, ["stop"]))
        }, [
          t("div", Mv, [
            Ke(c.$slots, "header", {}, () => [
              e.title ? (a(), r("h3", Dv, f(e.title), 1)) : y("", !0)
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
          t("div", Lv, [
            e.loading ? (a(), r("div", Ov, "Loading...")) : e.error ? (a(), r("div", Av, f(e.error), 1)) : Ke(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (a(), r("div", Uv, [
            Ke(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), mt = /* @__PURE__ */ me(Nv, [["__scopeId", "data-v-8dab1081"]]), zv = ["type", "disabled"], Fv = {
  key: 0,
  class: "spinner"
}, Bv = /* @__PURE__ */ ue({
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
      class: Te(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), r("span", Fv)) : y("", !0),
      Ke(s.$slots, "default", {}, void 0)
    ], 10, zv));
  }
}), De = /* @__PURE__ */ me(Bv, [["__scopeId", "data-v-f3452606"]]), Vv = {
  key: 0,
  class: "base-title-count"
}, Wv = /* @__PURE__ */ ue({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (a(), D(Xa(`h${e.level}`), {
      class: Te(["base-title", e.variant])
    }, {
      default: h(() => [
        Ke(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), r("span", Vv, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Go = /* @__PURE__ */ me(Wv, [["__scopeId", "data-v-5a01561d"]]), Gv = ["value", "disabled"], jv = {
  key: 0,
  value: "",
  disabled: ""
}, Hv = ["value"], Kv = {
  key: 0,
  class: "base-select-error"
}, qv = /* @__PURE__ */ ue({
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
      class: Te(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Te(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (i) => n.$emit("update:modelValue", i.target.value))
      }, [
        e.placeholder ? (a(), r("option", jv, f(e.placeholder), 1)) : y("", !0),
        (a(!0), r(j, null, he(e.options, (i) => (a(), r("option", {
          key: s(i),
          value: s(i)
        }, f(o(i)), 9, Hv))), 128))
      ], 42, Gv),
      e.error ? (a(), r("span", Kv, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Cr = /* @__PURE__ */ me(qv, [["__scopeId", "data-v-7436d745"]]), Yv = { class: "popover-header" }, Jv = { class: "popover-title" }, Xv = { class: "popover-content" }, Qv = {
  key: 0,
  class: "popover-actions"
}, Zv = /* @__PURE__ */ ue({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (a(), D(Ct, { to: "body" }, [
      e.show ? (a(), r("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: qt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = it(() => {
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
          s.$slots.actions ? (a(), r("div", Qv, [
            Ke(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), as = /* @__PURE__ */ me(Zv, [["__scopeId", "data-v-42815ace"]]), ep = { class: "detail-section" }, tp = {
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
}, _p = /* @__PURE__ */ ue({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getWorkflowDetails: l, setModelImportance: i, openFileLocation: c } = tt(), u = _(null), d = _(!1), m = _(null), v = _(!1), g = _({}), w = _(!1), p = _(/* @__PURE__ */ new Set()), k = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function I(E) {
      switch (E) {
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
    function b(E) {
      switch (E) {
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
    function T(E) {
      if (!E.loaded_by || E.loaded_by.length === 0) return [];
      const P = E.hash || E.filename;
      return p.value.has(P) ? E.loaded_by : E.loaded_by.slice(0, 3);
    }
    function M(E) {
      return p.value.has(E);
    }
    function x(E) {
      p.value.has(E) ? p.value.delete(E) : p.value.add(E), p.value = new Set(p.value);
    }
    async function S() {
      d.value = !0, m.value = null;
      try {
        u.value = await l(o.workflowName);
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function H(E, P) {
      g.value[E] = P, v.value = !0;
    }
    async function K(E) {
      try {
        await c(E);
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to open file location";
      }
    }
    async function B() {
      if (!v.value) {
        n("close");
        return;
      }
      d.value = !0, m.value = null;
      try {
        for (const [E, P] of Object.entries(g.value))
          await i(o.workflowName, E, P);
        n("refresh"), n("close");
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return Xe(S), (E, P) => (a(), r(j, null, [
      C(mt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: d.value,
        error: m.value || void 0,
        onClose: P[4] || (P[4] = (L) => n("close"))
      }, {
        body: h(() => [
          u.value ? (a(), r(j, { key: 0 }, [
            t("section", ep, [
              C(Go, { variant: "section" }, {
                default: h(() => [
                  $("MODELS USED (" + f(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (a(), r("div", tp, " No models used in this workflow ")) : y("", !0),
              (a(!0), r(j, null, he(u.value.models, (L) => {
                var oe;
                return a(), r("div", {
                  key: L.hash || L.filename,
                  class: "model-card"
                }, [
                  t("div", sp, [
                    P[6] || (P[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", op, f(L.filename), 1)
                  ]),
                  t("div", np, [
                    t("div", ap, [
                      P[7] || (P[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Te(["value", I(L.status)])
                      }, f(b(L.status)), 3)
                    ]),
                    t("div", lp, [
                      t("span", ip, [
                        P[8] || (P[8] = $(" Importance: ", -1)),
                        C(kr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: P[0] || (P[0] = (X) => w.value = !0)
                        })
                      ]),
                      C(Cr, {
                        "model-value": g.value[L.filename] || L.importance,
                        options: k,
                        "onUpdate:modelValue": (X) => H(L.filename, X)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    L.loaded_by && L.loaded_by.length > 0 ? (a(), r("div", rp, [
                      P[9] || (P[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", cp, [
                        (a(!0), r(j, null, he(T(L), (X, N) => (a(), r("div", {
                          key: `${X.node_id}-${N}`,
                          class: "node-reference"
                        }, f(X.node_type) + " (Node #" + f(X.node_id) + ") ", 1))), 128)),
                        L.loaded_by.length > 3 ? (a(), r("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (X) => x(L.hash || L.filename)
                        }, f(M(L.hash || L.filename) ? "▼ Show less" : `▶ View all (${L.loaded_by.length})`), 9, up)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    L.size_mb ? (a(), r("div", dp, [
                      P[10] || (P[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", fp, f(L.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    L.has_category_mismatch ? (a(), r("div", mp, [
                      P[13] || (P[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", vp, [
                        P[11] || (P[11] = $(" In ", -1)),
                        t("code", null, f(L.actual_category) + "/", 1),
                        P[12] || (P[12] = $(" but loader needs ", -1)),
                        t("code", null, f((oe = L.expected_categories) == null ? void 0 : oe[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  L.status !== "available" ? (a(), r("div", pp, [
                    L.status === "downloadable" ? (a(), D(De, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: P[1] || (P[1] = (X) => n("resolve"))
                    }, {
                      default: h(() => [...P[14] || (P[14] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    })) : L.status === "category_mismatch" && L.file_path ? (a(), D(De, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (X) => K(L.file_path)
                    }, {
                      default: h(() => [...P[15] || (P[15] = [
                        $(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : L.status !== "path_mismatch" ? (a(), D(De, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: P[2] || (P[2] = (X) => n("resolve"))
                    }, {
                      default: h(() => [...P[16] || (P[16] = [
                        $(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            t("section", gp, [
              C(Go, { variant: "section" }, {
                default: h(() => [
                  $("NODES USED (" + f(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (a(), r("div", hp, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), r(j, null, he(u.value.nodes, (L) => (a(), r("div", {
                key: L.name,
                class: "node-item"
              }, [
                t("span", {
                  class: Te(["node-status", L.status === "installed" ? "installed" : "missing"])
                }, f(L.status === "installed" ? "✓" : "✕"), 3),
                t("span", yp, f(L.name), 1),
                L.version ? (a(), r("span", wp, "v" + f(L.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          C(De, {
            variant: "secondary",
            onClick: P[3] || (P[3] = (L) => n("close"))
          }, {
            default: h(() => [...P[17] || (P[17] = [
              $(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (a(), D(De, {
            key: 0,
            variant: "primary",
            onClick: B
          }, {
            default: h(() => [...P[18] || (P[18] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      C(as, {
        show: w.value,
        title: "Model Importance Levels",
        onClose: P[5] || (P[5] = (L) => w.value = !1)
      }, {
        content: h(() => [...P[19] || (P[19] = [
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
}), kp = /* @__PURE__ */ me(_p, [["__scopeId", "data-v-668728e6"]]), Ye = Vs({
  items: [],
  status: "idle"
});
let vs = null;
function xr() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function ma(e) {
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
    let i = Date.now(), c = 0, u = !1;
    l.onmessage = (d) => {
      try {
        const m = JSON.parse(d.data);
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
  function e(b) {
    for (const T of b) {
      if (Ye.items.some(
        (S) => S.url === T.url && S.targetPath === T.targetPath && ["queued", "downloading", "paused", "completed"].includes(S.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${T.filename}`);
        continue;
      }
      const x = {
        id: xr(),
        workflow: T.workflow,
        filename: T.filename,
        url: T.url,
        targetPath: T.targetPath,
        size: T.size || 0,
        type: T.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      Ye.items.push(x);
    }
    Ye.status === "idle" && uo();
  }
  async function s(b) {
    const T = ma(b);
    if (T) {
      if (T.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(T.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        vs && (vs.close(), vs = null), T.status = "failed", T.error = "Cancelled by user", Ye.status = "idle", uo();
      } else if (T.status === "queued") {
        const M = Ye.items.findIndex((x) => x.id === b);
        M >= 0 && Ye.items.splice(M, 1);
      }
    }
  }
  function o(b) {
    const T = ma(b);
    !T || T.status !== "failed" || (T.status = "queued", T.error = void 0, T.progress = 0, T.downloaded = 0, Ye.status === "idle" && uo());
  }
  function n(b) {
    const T = ma(b);
    !T || T.status !== "paused" || (T.status = "queued", Ye.status === "idle" && uo());
  }
  function l() {
    const b = Ye.items.filter((T) => T.status === "paused");
    for (const T of b)
      T.status = "queued";
    Ye.status === "idle" && uo();
  }
  function i(b) {
    const T = Ye.items.findIndex((M) => M.id === b);
    T >= 0 && ["completed", "failed", "paused"].includes(Ye.items[T].status) && Ye.items.splice(T, 1);
  }
  function c() {
    Ye.items = Ye.items.filter((b) => b.status !== "completed");
  }
  function u() {
    Ye.items = Ye.items.filter((b) => b.status !== "failed");
  }
  const d = F(
    () => Ye.items.find((b) => b.status === "downloading")
  ), m = F(
    () => Ye.items.filter((b) => b.status === "queued")
  ), v = F(
    () => Ye.items.filter((b) => b.status === "completed")
  ), g = F(
    () => Ye.items.filter((b) => b.status === "failed")
  ), w = F(
    () => Ye.items.filter((b) => b.status === "paused")
  ), p = F(() => Ye.items.length > 0), k = F(
    () => Ye.items.filter((b) => b.status === "queued" || b.status === "downloading").length
  ), I = F(
    () => Ye.items.some((b) => b.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: En(Ye),
    // Computed
    currentDownload: d,
    queuedItems: m,
    completedItems: v,
    failedItems: g,
    pausedItems: w,
    hasItems: p,
    activeCount: k,
    hasPaused: I,
    // Actions
    addToQueue: e,
    cancelDownload: s,
    retryDownload: o,
    resumeDownload: n,
    resumeAllPaused: l,
    removeItem: i,
    clearCompleted: c,
    clearFailed: u,
    loadPendingDownloads: $p
  };
}
function Sr() {
  const e = _(null), s = _(null), o = _([]), n = _([]), l = _(!1), i = _(null);
  async function c(M, x) {
    var H;
    if (!((H = window.app) != null && H.api))
      throw new Error("ComfyUI API not available");
    const S = await window.app.api.fetchApi(M, x);
    if (!S.ok) {
      const K = await S.json().catch(() => ({})), B = K.error || K.message || `Request failed: ${S.status}`;
      throw new Error(B);
    }
    return S.json();
  }
  async function u(M) {
    l.value = !0, i.value = null;
    try {
      let x;
      return co() || (x = await c(
        `/v2/comfygit/workflow/${M}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), e.value = x, x;
    } catch (x) {
      const S = x instanceof Error ? x.message : "Unknown error occurred";
      throw i.value = S, x;
    } finally {
      l.value = !1;
    }
  }
  async function d(M, x, S, H) {
    l.value = !0, i.value = null;
    try {
      let K;
      if (!co()) {
        const B = Object.fromEntries(x), E = Object.fromEntries(S), P = H ? Array.from(H) : [];
        K = await c(
          `/v2/comfygit/workflow/${M}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: B,
              model_choices: E,
              skipped_packages: P
            })
          }
        );
      }
      return s.value = K, K;
    } catch (K) {
      const B = K instanceof Error ? K.message : "Unknown error occurred";
      throw i.value = B, K;
    } finally {
      l.value = !1;
    }
  }
  async function m(M, x = 10) {
    l.value = !0, i.value = null;
    try {
      let S;
      return co() || (S = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: M, limit: x })
        }
      )), o.value = S.results, S.results;
    } catch (S) {
      const H = S instanceof Error ? S.message : "Unknown error occurred";
      throw i.value = H, S;
    } finally {
      l.value = !1;
    }
  }
  async function v(M, x = 10) {
    l.value = !0, i.value = null;
    try {
      let S;
      return co() || (S = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: M, limit: x })
        }
      )), n.value = S.results, S.results;
    } catch (S) {
      const H = S instanceof Error ? S.message : "Unknown error occurred";
      throw i.value = H, S;
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
  async function p(M) {
    g.phase = "installing", g.nodesInstalled = [], g.installError = void 0, g.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return co(), await k(M);
    } catch (x) {
      const S = x instanceof Error ? x.message : "Failed to install nodes";
      throw g.installError = S, x;
    }
  }
  async function k(M) {
    var S;
    const x = await c(
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
      const H = new Map(((S = x.failed) == null ? void 0 : S.map((K) => [K.node_id, K.error])) || []);
      for (let K = 0; K < g.nodesToInstall.length; K++) {
        const B = g.nodesToInstall[K], E = H.get(B);
        g.nodeInstallProgress.completedNodes.push({
          node_id: B,
          success: !E,
          error: E
        });
      }
    }
    return g.nodesInstalled = x.nodes_installed, g.needsRestart = x.nodes_installed.length > 0, x.failed && x.failed.length > 0 && (g.installError = `${x.failed.length} package(s) failed to install`), x;
  }
  async function I(M, x, S) {
    w(), g.phase = "resolving", i.value = null;
    const H = Object.fromEntries(x), K = Object.fromEntries(S);
    try {
      const B = await fetch(`/v2/comfygit/workflow/${M}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: H,
          model_choices: K
        })
      });
      if (!B.ok)
        throw new Error(`Request failed: ${B.status}`);
      if (!B.body)
        throw new Error("No response body");
      const E = B.body.getReader(), P = new TextDecoder();
      let L = "";
      for (; ; ) {
        const { done: oe, value: X } = await E.read();
        if (oe) break;
        L += P.decode(X, { stream: !0 });
        const N = L.split(`

`);
        L = N.pop() || "";
        for (const O of N) {
          if (!O.trim()) continue;
          const U = O.split(`
`);
          let R = "", Q = "";
          for (const Y of U)
            Y.startsWith("event: ") ? R = Y.slice(7) : Y.startsWith("data: ") && (Q = Y.slice(6));
          if (Q)
            try {
              const Y = JSON.parse(Q);
              b(R, Y);
            } catch (Y) {
              console.warn("Failed to parse SSE event:", Y);
            }
        }
      }
    } catch (B) {
      const E = B instanceof Error ? B.message : "Unknown error occurred";
      throw i.value = E, g.error = E, g.phase = "error", B;
    }
  }
  function b(M, x) {
    switch (M) {
      case "batch_start":
        g.phase = "downloading", g.totalFiles = x.total;
        break;
      case "file_start":
        g.currentFile = x.filename, g.currentFileIndex = x.index, g.bytesDownloaded = 0, g.bytesTotal = void 0;
        break;
      case "file_progress":
        g.bytesDownloaded = x.downloaded, g.bytesTotal = x.total;
        break;
      case "file_complete":
        g.completedFiles.push({
          filename: x.filename,
          success: x.success,
          error: x.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        g.nodesToInstall = x.nodes_to_install || [], x.download_results && (g.completedFiles = x.download_results), g.phase = "complete";
        break;
      case "error":
        g.error = x.message, g.phase = "error", i.value = x.message;
        break;
    }
  }
  function T(M, x) {
    const { addToQueue: S } = bo(), H = x.filter((K) => K.url && K.target_path).map((K) => ({
      workflow: M,
      filename: K.filename,
      url: K.url,
      targetPath: K.target_path,
      size: K.size || 0,
      type: "model"
    }));
    return H.length > 0 && S(H), H.length;
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
    applyResolutionWithProgress: I,
    installNodes: p,
    searchNodes: m,
    searchModels: v,
    resetProgress: w,
    queueModelDownloads: T
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
}, Rp = { class: "stepper-content" }, Mp = /* @__PURE__ */ ue({
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
    function u(m) {
      return !1;
    }
    function d(m) {
      n("step-change", m);
    }
    return (m, v) => (a(), r("div", Cp, [
      t("div", xp, [
        (a(!0), r(j, null, he(e.steps, (g, w) => (a(), r("div", {
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
            class: Te(["step-indicator", c(g.id)])
          }, [
            l(g.id) ? (a(), r("span", Ip, "✓")) : (a(), r("span", Ep, f(w + 1), 1))
          ], 2),
          t("div", Tp, f(g.label), 1),
          w < e.steps.length - 1 ? (a(), r("div", Pp)) : y("", !0)
        ], 10, Sp))), 128))
      ]),
      t("div", Rp, [
        Ke(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Dp = /* @__PURE__ */ me(Mp, [["__scopeId", "data-v-2a7b3af8"]]), Lp = /* @__PURE__ */ ue({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = F(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), n = F(() => `confidence-${o.value}`), l = F(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (i, c) => (a(), r("span", {
      class: Te(["confidence-badge", n.value, e.size])
    }, f(l.value), 3));
  }
}), Nn = /* @__PURE__ */ me(Lp, [["__scopeId", "data-v-17ec4b80"]]), Op = { class: "node-info" }, Ap = { class: "node-info-text" }, Up = { class: "item-body" }, Np = {
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
}, rg = { class: "action-buttons" }, cg = /* @__PURE__ */ ue({
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
      class: Te(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: i.value }])
    }, [
      t("div", Op, [
        t("span", Ap, [
          m[7] || (m[7] = $("Node type: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Te(["status-badge", c.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Up, [
        i.value ? (a(), r("div", Np, [
          C(De, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", zp, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          t("div", Fp, [
            (a(!0), r(j, null, he(e.options, (v, g) => (a(), r("label", {
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
                  C(Nn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (a(), r("div", Hp, f(v.title), 1)) : y("", !0),
                t("div", Kp, [
                  v.is_installed ? (a(), r("span", qp, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, Bp))), 128))
          ]),
          t("div", Yp, [
            C(De, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                $(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            C(De, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(De, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (v) => n("mark-optional"))
            }, {
              default: h(() => [...m[11] || (m[11] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), r("div", Jp, [
          e.isSearching ? (a(), r("div", Xp, [...m[13] || (m[13] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), r(j, { key: 1 }, [
            m[14] || (m[14] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", Qp, [
              (a(!0), r(j, null, he(e.searchResults.slice(0, 5), (v, g) => (a(), r("label", {
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
                    C(Nn, {
                      confidence: v.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  v.description ? (a(), r("div", ng, f(l(v.description)), 1)) : y("", !0),
                  t("div", ag, [
                    v.is_installed ? (a(), r("span", lg, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, Zp))), 128))
            ])
          ], 64)) : (a(), r("div", ig, [...m[15] || (m[15] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", rg, [
            C(De, {
              variant: "secondary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: h(() => {
                var v;
                return [
                  $(f((v = e.searchResults) != null && v.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            C(De, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[16] || (m[16] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(De, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (v) => n("mark-optional"))
            }, {
              default: h(() => [...m[17] || (m[17] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), ug = /* @__PURE__ */ me(cg, [["__scopeId", "data-v-c2997d1d"]]), dg = { class: "item-navigator" }, fg = { class: "nav-item-info" }, mg = ["title"], vg = { class: "nav-controls" }, pg = { class: "nav-arrows" }, gg = ["disabled"], hg = ["disabled"], yg = { class: "nav-position" }, wg = /* @__PURE__ */ ue({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (n, l) => (a(), r("div", dg, [
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
}), Ir = /* @__PURE__ */ me(wg, [["__scopeId", "data-v-74af7920"]]), _g = ["type", "value", "placeholder", "disabled"], kg = {
  key: 0,
  class: "base-input-error"
}, bg = /* @__PURE__ */ ue({
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
          o[1] || (o[1] = Ht((n) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = Ht((n) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, _g),
      e.error ? (a(), r("span", kg, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Tt = /* @__PURE__ */ me(bg, [["__scopeId", "data-v-9ba02cdc"]]), $g = { class: "node-resolution-step" }, Cg = {
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
}, Jg = { class: "node-manual-entry-modal" }, Xg = { class: "node-modal-body" }, Qg = { class: "node-modal-actions" }, Zg = /* @__PURE__ */ ue({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: s }) {
    const o = e, n = s, { searchNodes: l } = Sr(), i = _(0), c = _(!1), u = _(!1), d = _(""), m = _(""), v = _([]), g = _(!1), w = _(/* @__PURE__ */ new Map()), p = _(/* @__PURE__ */ new Set()), k = _(!1);
    function I() {
      k.value && Y(), k.value = !1;
    }
    const b = F(() => o.nodes[i.value]), T = F(() => o.nodes.filter((ge) => o.nodeChoices.has(ge.node_type)).length), M = F(() => b.value ? w.value.get(b.value.node_type) || [] : []), x = F(() => b.value ? p.value.has(b.value.node_type) : !1);
    yt(b, async (ge) => {
      var Ce;
      ge && ((Ce = ge.options) != null && Ce.length || w.value.has(ge.node_type) || p.value.has(ge.node_type) || o.nodeChoices.has(ge.node_type) || await S(ge.node_type));
    }, { immediate: !0 });
    async function S(ge) {
      p.value.add(ge);
      try {
        const Ce = await l(ge, 5);
        w.value.set(ge, Ce);
      } catch {
        w.value.set(ge, []);
      } finally {
        p.value.delete(ge);
      }
    }
    const H = F(() => o.autoResolvedPackages.filter((ge) => !o.skippedPackages.has(ge.package_id)).length);
    function K(ge) {
      return o.skippedPackages.has(ge);
    }
    function B(ge) {
      n("package-skip", ge);
    }
    const E = F(() => {
      var Ce;
      if (!b.value) return "not-found";
      const ge = o.nodeChoices.get(b.value.node_type);
      if (ge)
        switch (ge.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (Ce = b.value.options) != null && Ce.length ? "ambiguous" : "not-found";
    }), P = F(() => {
      var Ce;
      if (!b.value) return;
      const ge = o.nodeChoices.get(b.value.node_type);
      if (ge)
        switch (ge.action) {
          case "install":
            return ge.package_id ? `→ ${ge.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (Ce = b.value.options) != null && Ce.length ? `${b.value.options.length} matches` : "Not Found";
    });
    function L(ge) {
      ge >= 0 && ge < o.nodes.length && (i.value = ge);
    }
    function oe() {
      var ge;
      for (let Ce = i.value + 1; Ce < o.nodes.length; Ce++) {
        const de = o.nodes[Ce];
        if (!((ge = o.nodeChoices) != null && ge.has(de.node_type))) {
          L(Ce);
          return;
        }
      }
    }
    function X() {
      b.value && (n("mark-optional", b.value.node_type), _t(() => oe()));
    }
    function N() {
      b.value && (n("skip", b.value.node_type), _t(() => oe()));
    }
    function O(ge) {
      b.value && (n("option-selected", b.value.node_type, ge), _t(() => oe()));
    }
    function U() {
      b.value && n("clear-choice", b.value.node_type);
    }
    function R() {
      b.value && (d.value = b.value.node_type, v.value = M.value, c.value = !0, Fe(d.value));
    }
    function Q() {
      m.value = "", u.value = !0;
    }
    function Y() {
      c.value = !1, d.value = "", v.value = [];
    }
    function ye() {
      u.value = !1, m.value = "";
    }
    let _e = null;
    function Le() {
      _e && clearTimeout(_e), _e = setTimeout(() => {
        Fe(d.value);
      }, 300);
    }
    async function Fe(ge) {
      if (!ge.trim()) {
        v.value = [];
        return;
      }
      g.value = !0;
      try {
        v.value = await l(ge, 10);
      } catch {
        v.value = [];
      } finally {
        g.value = !1;
      }
    }
    function ie(ge) {
      b.value && (n("manual-entry", b.value.node_type, ge.package_id), Y(), _t(() => oe()));
    }
    function Se(ge) {
      b.value && (n("manual-entry", b.value.node_type, ge.package_id), _t(() => oe()));
    }
    function we() {
      !b.value || !m.value.trim() || (n("manual-entry", b.value.node_type, m.value.trim()), ye(), _t(() => oe()));
    }
    return (ge, Ce) => {
      var de, ce;
      return a(), r("div", $g, [
        e.autoResolvedPackages.length > 0 ? (a(), r("div", Cg, [
          t("div", xg, [
            Ce[6] || (Ce[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", Sg, f(H.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", Ig, [
            (a(!0), r(j, null, he(e.autoResolvedPackages, (Me) => (a(), r("div", {
              key: Me.package_id,
              class: "resolved-package-item"
            }, [
              t("div", Eg, [
                t("code", Tg, f(Me.package_id), 1),
                t("span", Pg, f(Me.node_types_count) + " node type" + f(Me.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", Rg, [
                K(Me.package_id) ? (a(), r("span", Dg, " SKIPPED ")) : (a(), r("span", Mg, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (Re) => B(Me.package_id)
                }, f(K(Me.package_id) ? "Include" : "Skip"), 9, Lg)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), r("div", Og)) : y("", !0),
        e.nodes.length > 0 ? (a(), r(j, { key: 2 }, [
          t("div", Ag, [
            Ce[7] || (Ce[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", Ug, f(T.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          b.value ? (a(), D(Ir, {
            key: 0,
            "item-name": b.value.node_type,
            "current-index": i.value,
            "total-items": e.nodes.length,
            onPrev: Ce[0] || (Ce[0] = (Me) => L(i.value - 1)),
            onNext: Ce[1] || (Ce[1] = (Me) => L(i.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          b.value ? (a(), r("div", Ng, [
            C(ug, {
              "node-type": b.value.node_type,
              "has-multiple-options": !!((de = b.value.options) != null && de.length),
              options: b.value.options,
              choice: (ce = e.nodeChoices) == null ? void 0 : ce.get(b.value.node_type),
              status: E.value,
              "status-label": P.value,
              "search-results": M.value,
              "is-searching": x.value,
              onMarkOptional: X,
              onSkip: N,
              onManualEntry: Q,
              onSearch: R,
              onOptionSelected: O,
              onClearChoice: U,
              onSearchResultSelected: Se
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), r("div", zg, [...Ce[8] || (Ce[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), D(Ct, { to: "body" }, [
          c.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: Ce[4] || (Ce[4] = it((Me) => k.value = !0, ["self"])),
            onMouseup: it(I, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: Ce[3] || (Ce[3] = (Me) => k.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                Ce[9] || (Ce[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              t("div", Fg, [
                C(Tt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": Ce[2] || (Ce[2] = (Me) => d.value = Me),
                  placeholder: "Search by node type, package name...",
                  onInput: Le
                }, null, 8, ["modelValue"]),
                t("div", Bg, [
                  v.value.length > 0 ? (a(), r("div", Vg, [
                    (a(!0), r(j, null, he(v.value, (Me) => (a(), r("div", {
                      key: Me.package_id,
                      class: "node-search-result-item",
                      onClick: (Re) => ie(Me)
                    }, [
                      t("div", Gg, [
                        t("code", jg, f(Me.package_id), 1),
                        Me.match_confidence ? (a(), D(Nn, {
                          key: 0,
                          confidence: Me.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      Me.description ? (a(), r("div", Hg, f(Me.description), 1)) : y("", !0)
                    ], 8, Wg))), 128))
                  ])) : g.value ? (a(), r("div", Kg, "Searching...")) : d.value ? (a(), r("div", qg, 'No packages found matching "' + f(d.value) + '"', 1)) : (a(), r("div", Yg, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (a(), D(Ct, { to: "body" }, [
          u.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: it(ye, ["self"])
          }, [
            t("div", Jg, [
              t("div", { class: "node-modal-header" }, [
                Ce[10] || (Ce[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: ye
                }, "✕")
              ]),
              t("div", Xg, [
                C(Tt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": Ce[5] || (Ce[5] = (Me) => m.value = Me),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", Qg, [
                  C(De, {
                    variant: "secondary",
                    onClick: ye
                  }, {
                    default: h(() => [...Ce[11] || (Ce[11] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(De, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: we
                  }, {
                    default: h(() => [...Ce[12] || (Ce[12] = [
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
}), eh = /* @__PURE__ */ me(Zg, [["__scopeId", "data-v-6d7f8125"]]), th = { class: "node-info" }, sh = { class: "node-info-text" }, oh = { class: "item-body" }, nh = {
  key: 0,
  class: "resolved-state"
}, ah = {
  key: 1,
  class: "multiple-options"
}, lh = { class: "options-list" }, ih = ["onClick"], rh = ["name", "value", "checked", "onChange"], ch = { class: "option-content" }, uh = { class: "option-header" }, dh = { class: "option-filename" }, fh = { class: "option-meta" }, mh = { class: "option-size" }, vh = { class: "option-category" }, ph = { class: "option-path" }, gh = { class: "action-buttons" }, hh = {
  key: 2,
  class: "unresolved"
}, yh = { class: "action-buttons" }, wh = /* @__PURE__ */ ue({
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
      class: Te(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", th, [
        t("span", sh, [
          m[7] || (m[7] = $("Used by: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Te(["status-badge", i.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", oh, [
        l.value ? (a(), r("div", nh, [
          C(De, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", ah, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", lh, [
            (a(!0), r(j, null, he(e.options, (v, g) => (a(), r("label", {
              key: v.model.hash,
              class: Te(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (w) => c(g)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (w) => c(g)
              }, null, 40, rh),
              t("div", ch, [
                t("div", uh, [
                  t("span", dh, f(v.model.filename), 1),
                  C(Nn, {
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
            C(De, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(De, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(De, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (v) => n("mark-optional"))
            }, {
              default: h(() => [...m[11] || (m[11] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), r("div", hh, [
          m[16] || (m[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", yh, [
            C(De, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: h(() => [...m[13] || (m[13] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(De, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[14] || (m[14] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(De, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (v) => n("mark-optional"))
            }, {
              default: h(() => [...m[15] || (m[15] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), _h = /* @__PURE__ */ me(wh, [["__scopeId", "data-v-8a82fefa"]]), kh = { class: "model-resolution-step" }, bh = { class: "step-header" }, $h = { class: "step-info" }, Ch = { class: "step-title" }, xh = { class: "step-description" }, Sh = { class: "stat-badge" }, Ih = {
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
}, Bh = { class: "model-download-url-modal" }, Vh = { class: "model-modal-body" }, Wh = { class: "model-input-group" }, Gh = { class: "model-input-group" }, jh = { class: "model-modal-actions" }, Hh = /* @__PURE__ */ ue({
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
    function n(Y) {
      var ye;
      return Y && ((ye = o[Y]) == null ? void 0 : ye[0]) || null;
    }
    const l = e, i = s, c = _(0), u = _(!1), d = _(!1), m = _(""), v = _(""), g = _(""), w = _([]), p = _(!1), k = F(() => l.models[c.value]), I = F(() => l.models.some((Y) => Y.is_download_intent)), b = F(() => l.models.filter(
      (Y) => l.modelChoices.has(Y.filename) || Y.is_download_intent
    ).length), T = F(() => {
      var ye;
      if (!k.value) return "";
      const Y = n((ye = k.value.reference) == null ? void 0 : ye.node_type);
      return Y ? `${Y}/${k.value.filename}` : "";
    }), M = F(() => {
      var ye;
      if (!k.value) return "not-found";
      const Y = l.modelChoices.get(k.value.filename);
      if (Y)
        switch (Y.action) {
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
      return k.value.is_download_intent ? "download" : (ye = k.value.options) != null && ye.length ? "ambiguous" : "not-found";
    }), x = F(() => {
      var ye, _e;
      if (!k.value) return;
      const Y = l.modelChoices.get(k.value.filename);
      if (Y)
        switch (Y.action) {
          case "select":
            return (ye = Y.selected_model) != null && ye.filename ? `→ ${Y.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return k.value.is_download_intent ? "Pending Download" : (_e = k.value.options) != null && _e.length ? `${k.value.options.length} matches` : "Not Found";
    });
    function S(Y) {
      Y >= 0 && Y < l.models.length && (c.value = Y);
    }
    function H() {
      var Y;
      for (let ye = c.value + 1; ye < l.models.length; ye++) {
        const _e = l.models[ye];
        if (!_e.is_download_intent && !((Y = l.modelChoices) != null && Y.has(_e.filename))) {
          S(ye);
          return;
        }
      }
    }
    function K() {
      k.value && (i("mark-optional", k.value.filename), _t(() => H()));
    }
    function B() {
      k.value && (i("skip", k.value.filename), _t(() => H()));
    }
    function E(Y) {
      k.value && (i("option-selected", k.value.filename, Y), _t(() => H()));
    }
    function P() {
      k.value && i("clear-choice", k.value.filename);
    }
    function L() {
      k.value && (m.value = k.value.filename, u.value = !0);
    }
    function oe() {
      k.value && (v.value = k.value.download_source || "", g.value = k.value.target_path || T.value, d.value = !0);
    }
    function X() {
      u.value = !1, m.value = "", w.value = [];
    }
    function N() {
      d.value = !1, v.value = "", g.value = "";
    }
    function O() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function U(Y) {
      k.value && (X(), _t(() => H()));
    }
    function R() {
      !k.value || !v.value.trim() || (i("download-url", k.value.filename, v.value.trim(), g.value.trim() || void 0), N(), _t(() => H()));
    }
    function Q(Y) {
      if (!Y) return "Unknown";
      const ye = Y / (1024 * 1024 * 1024);
      return ye >= 1 ? `${ye.toFixed(2)} GB` : `${(Y / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (Y, ye) => {
      var _e, Le, Fe;
      return a(), r("div", kh, [
        t("div", bh, [
          t("div", $h, [
            t("h3", Ch, f(I.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", xh, f(I.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", Sh, f(b.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        k.value ? (a(), D(Ir, {
          key: 0,
          "item-name": k.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: ye[0] || (ye[0] = (ie) => S(c.value - 1)),
          onNext: ye[1] || (ye[1] = (ie) => S(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        k.value ? (a(), r("div", Ih, [
          C(_h, {
            filename: k.value.filename,
            "node-type": ((_e = k.value.reference) == null ? void 0 : _e.node_type) || "Unknown",
            "has-multiple-options": !!((Le = k.value.options) != null && Le.length),
            options: k.value.options,
            choice: (Fe = e.modelChoices) == null ? void 0 : Fe.get(k.value.filename),
            status: M.value,
            "status-label": x.value,
            onMarkOptional: K,
            onSkip: B,
            onDownloadUrl: oe,
            onSearch: L,
            onOptionSelected: E,
            onClearChoice: P
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), r("div", Eh, [...ye[5] || (ye[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (a(), D(Ct, { to: "body" }, [
          u.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: it(X, ["self"])
          }, [
            t("div", Th, [
              t("div", { class: "model-modal-header" }, [
                ye[6] || (ye[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: X
                }, "✕")
              ]),
              t("div", Ph, [
                C(Tt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": ye[2] || (ye[2] = (ie) => m.value = ie),
                  placeholder: "Search by filename, category...",
                  onInput: O
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), r("div", Rh, [
                  (a(!0), r(j, null, he(w.value, (ie) => (a(), r("div", {
                    key: ie.hash,
                    class: "model-search-result-item",
                    onClick: (Se) => U()
                  }, [
                    t("div", Dh, [
                      t("code", Lh, f(ie.filename), 1)
                    ]),
                    t("div", Oh, [
                      t("span", Ah, f(ie.category), 1),
                      t("span", Uh, f(Q(ie.size)), 1)
                    ]),
                    ie.relative_path ? (a(), r("div", Nh, f(ie.relative_path), 1)) : y("", !0)
                  ], 8, Mh))), 128))
                ])) : m.value && !p.value ? (a(), r("div", zh, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                p.value ? (a(), r("div", Fh, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), D(Ct, { to: "body" }, [
          d.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: it(N, ["self"])
          }, [
            t("div", Bh, [
              t("div", { class: "model-modal-header" }, [
                ye[7] || (ye[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: N
                }, "✕")
              ]),
              t("div", Vh, [
                t("div", Wh, [
                  ye[8] || (ye[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  C(Tt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": ye[3] || (ye[3] = (ie) => v.value = ie),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", Gh, [
                  ye[9] || (ye[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  C(Tt, {
                    modelValue: g.value,
                    "onUpdate:modelValue": ye[4] || (ye[4] = (ie) => g.value = ie),
                    placeholder: T.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", jh, [
                  C(De, {
                    variant: "secondary",
                    onClick: N
                  }, {
                    default: h(() => [...ye[10] || (ye[10] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(De, {
                    variant: "primary",
                    disabled: !v.value.trim() || !g.value.trim(),
                    onClick: R
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
}), Kh = /* @__PURE__ */ me(Hh, [["__scopeId", "data-v-5c700bfa"]]), qh = { class: "applying-step" }, Yh = {
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
}, by = { class: "error-message" }, $y = /* @__PURE__ */ ue({
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
      var v, g;
      const m = (v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.find((w) => w.node_id === u);
      return m ? m.success ? "complete" : "failed" : ((g = s.progress.nodeInstallProgress) == null ? void 0 : g.currentIndex) === d ? "installing" : "pending";
    }
    function c(u) {
      var d, m;
      return (m = (d = s.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((v) => v.node_id === u)) == null ? void 0 : m.error;
    }
    return (u, d) => {
      var m, v, g, w;
      return a(), r("div", qh, [
        e.progress.phase === "resolving" ? (a(), r("div", Yh, [...d[2] || (d[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), r("div", Jh, [
          d[3] || (d[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", Xh, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", Qh, [
            t("div", Zh, [
              t("div", {
                class: "progress-fill",
                style: qt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", ey, f(((g = e.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", ty, [
            (a(!0), r(j, null, he(e.progress.nodesToInstall, (p, k) => (a(), r("div", {
              key: p,
              class: Te(["install-item", i(p, k)])
            }, [
              t("span", sy, [
                i(p, k) === "pending" ? (a(), r("span", oy, "○")) : i(p, k) === "installing" ? (a(), r("span", ny, "◌")) : i(p, k) === "complete" ? (a(), r("span", ay, "✓")) : i(p, k) === "failed" ? (a(), r("span", ly, "✗")) : y("", !0)
              ]),
              t("code", null, f(p), 1),
              c(p) ? (a(), r("span", iy, f(c(p)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), r("div", ry, [
          t("div", cy, [
            t("span", {
              class: Te(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            t("h3", uy, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", dy, [
            e.progress.nodesInstalled.length > 0 ? (a(), r("div", fy, [
              d[4] || (d[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", my, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("div", vy, [
              d[5] || (d[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", py, f(n.value.length) + " package" + f(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("div", gy, [
              (a(!0), r(j, null, he(n.value, (p) => (a(), r("div", {
                key: p.node_id,
                class: "failed-item"
              }, [
                t("code", hy, f(p.node_id), 1),
                t("span", yy, f(p.error), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (p) => u.$emit("retry-failed"))
            }, " Retry Failed (" + f(n.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (a(), r("div", wy, [...d[6] || (d[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), r("div", _y, [
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
        ])) : e.progress.phase === "error" ? (a(), r("div", ky, [
          d[9] || (d[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", by, f(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), Cy = /* @__PURE__ */ me($y, [["__scopeId", "data-v-5efaae58"]]), xy = {
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
}, i0 = /* @__PURE__ */ ue({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, n = s, { analyzeWorkflow: l, applyResolution: i, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: m } = Sr(), { loadPendingDownloads: v } = bo(), { openFileLocation: g } = tt(), w = _(null), p = _(!1), k = _(!1), I = _(null), b = _("analysis"), T = _([]), M = _(/* @__PURE__ */ new Map()), x = _(/* @__PURE__ */ new Map()), S = _(/* @__PURE__ */ new Set()), H = F(() => {
      const G = [
        { id: "analysis", label: "Analysis" }
      ];
      return (B.value || L.value) && G.push({ id: "nodes", label: "Nodes" }), E.value && G.push({ id: "models", label: "Models" }), G.push({ id: "review", label: "Review" }), b.value === "applying" && G.push({ id: "applying", label: "Applying" }), G;
    }), K = F(() => w.value ? w.value.stats.needs_user_input : !1), B = F(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), E = F(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), P = F(() => w.value ? w.value.stats.download_intents > 0 : !1), L = F(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), oe = F(() => w.value ? w.value.nodes.resolved.length : 0), X = F(() => w.value ? w.value.models.resolved.filter((G) => G.has_category_mismatch) : []), N = F(() => X.value.length > 0), O = F(() => B.value || L.value ? "nodes" : E.value ? "models" : "review"), U = F(() => {
      if (!w.value) return [];
      const G = w.value.nodes.resolved.filter((re) => !re.is_installed), V = /* @__PURE__ */ new Set();
      return G.filter((re) => V.has(re.package.package_id) ? !1 : (V.add(re.package.package_id), !0));
    }), R = F(() => {
      if (!w.value) return [];
      const G = w.value.nodes.resolved.filter((re) => !re.is_installed), V = /* @__PURE__ */ new Map();
      for (const re of G) {
        const Ve = V.get(re.package.package_id);
        Ve ? Ve.node_types_count++ : V.set(re.package.package_id, {
          package_id: re.package.package_id,
          title: re.package.title,
          node_types_count: 1
        });
      }
      return Array.from(V.values());
    }), Q = F(() => U.value.filter((G) => !S.value.has(G.package.package_id))), Y = F(() => w.value ? w.value.models.resolved.filter(
      (G) => G.match_type === "download_intent" || G.match_type === "property_download_intent"
    ).map((G) => ({
      filename: G.reference.widget_value,
      reference: G.reference,
      is_download_intent: !0,
      resolved_model: G.model,
      download_source: G.download_source,
      target_path: G.target_path
    })) : []), ye = F(() => {
      if (!w.value) return [];
      const G = w.value.nodes.unresolved.map((re) => ({
        node_type: re.reference.node_type,
        reason: re.reason,
        is_unresolved: !0,
        options: void 0
      })), V = w.value.nodes.ambiguous.map((re) => ({
        node_type: re.reference.node_type,
        has_multiple_options: !0,
        options: re.options.map((Ve) => ({
          package_id: Ve.package.package_id,
          title: Ve.package.title,
          match_confidence: Ve.match_confidence,
          match_type: Ve.match_type,
          is_installed: Ve.is_installed
        }))
      }));
      return [...G, ...V];
    }), _e = F(() => {
      if (!w.value) return [];
      const G = w.value.models.unresolved.map((re) => ({
        filename: re.reference.widget_value,
        reference: re.reference,
        reason: re.reason,
        is_unresolved: !0,
        options: void 0
      })), V = w.value.models.ambiguous.map((re) => ({
        filename: re.reference.widget_value,
        reference: re.reference,
        has_multiple_options: !0,
        options: re.options.map((Ve) => ({
          model: Ve.model,
          match_confidence: Ve.match_confidence,
          match_type: Ve.match_type,
          has_download_source: Ve.has_download_source
        }))
      }));
      return [...G, ...V];
    }), Le = F(() => {
      const G = _e.value, V = Y.value.map((re) => ({
        filename: re.filename,
        reference: re.reference,
        is_download_intent: !0,
        resolved_model: re.resolved_model,
        download_source: re.download_source,
        target_path: re.target_path,
        options: void 0
      }));
      return [...G, ...V];
    }), Fe = F(() => Y.value.filter((G) => {
      const V = x.value.get(G.filename);
      return V ? V.action === "download" : !0;
    }).map((G) => ({
      filename: G.filename,
      url: G.download_source,
      target_path: G.target_path
    })));
    function ie(G, V = 50) {
      return G.length <= V ? G : G.slice(0, V - 3) + "...";
    }
    const Se = F(() => {
      let G = Q.value.length;
      for (const V of M.value.values())
        V.action === "install" && G++;
      for (const V of x.value.values())
        V.action === "select" && G++;
      return G;
    }), we = F(() => {
      let G = 0;
      for (const V of x.value.values())
        V.action === "download" && G++;
      for (const V of Y.value)
        x.value.get(V.filename) || G++;
      return G;
    }), ge = F(() => {
      let G = 0;
      for (const V of M.value.values())
        V.action === "optional" && G++;
      for (const V of x.value.values())
        V.action === "optional" && G++;
      return G;
    }), Ce = F(() => {
      let G = S.value.size;
      for (const V of M.value.values())
        V.action === "skip" && G++;
      for (const V of x.value.values())
        V.action === "skip" && G++;
      for (const V of ye.value)
        M.value.has(V.node_type) || G++;
      for (const V of _e.value)
        x.value.has(V.filename) || G++;
      return G;
    }), de = F(() => {
      const G = {};
      if (G.analysis = { resolved: 1, total: 1 }, B.value) {
        const V = ye.value.length, re = ye.value.filter(
          (Ve) => M.value.has(Ve.node_type)
        ).length;
        G.nodes = { resolved: re, total: V };
      }
      if (E.value) {
        const V = Le.value.length, re = Le.value.filter(
          (Ve) => x.value.has(Ve.filename) || Ve.is_download_intent
        ).length;
        G.models = { resolved: re, total: V };
      }
      if (G.review = { resolved: 1, total: 1 }, b.value === "applying") {
        const V = d.totalFiles || 1, re = d.completedFiles.length;
        G.applying = { resolved: re, total: V };
      }
      return G;
    });
    function ce(G) {
      b.value = G;
    }
    function Me() {
      const G = H.value.findIndex((V) => V.id === b.value);
      G > 0 && (b.value = H.value[G - 1].id);
    }
    function Re() {
      const G = H.value.findIndex((V) => V.id === b.value);
      G < H.value.length - 1 && (b.value = H.value[G + 1].id);
    }
    async function A() {
      p.value = !0, I.value = null;
      try {
        w.value = await l(o.workflowName);
      } catch (G) {
        I.value = G instanceof Error ? G.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function W() {
      T.value.includes("analysis") || T.value.push("analysis"), B.value || L.value ? b.value = "nodes" : E.value ? b.value = "models" : b.value = "review";
    }
    function te(G) {
      M.value.set(G, { action: "optional" });
    }
    function ae(G) {
      M.value.set(G, { action: "skip" });
    }
    function ve(G, V) {
      var Ve;
      const re = ye.value.find((Qe) => Qe.node_type === G);
      (Ve = re == null ? void 0 : re.options) != null && Ve[V] && M.value.set(G, {
        action: "install",
        package_id: re.options[V].package_id
      });
    }
    function pe(G, V) {
      M.value.set(G, {
        action: "install",
        package_id: V
      });
    }
    function Ie(G) {
      M.value.delete(G);
    }
    function Ee(G) {
      S.value.has(G) ? S.value.delete(G) : S.value.add(G);
    }
    function ne(G) {
      x.value.set(G, { action: "optional" });
    }
    function fe(G) {
      x.value.set(G, { action: "skip" });
    }
    function Ue(G, V) {
      var Ve;
      const re = _e.value.find((Qe) => Qe.filename === G);
      (Ve = re == null ? void 0 : re.options) != null && Ve[V] && x.value.set(G, {
        action: "select",
        selected_model: re.options[V].model
      });
    }
    function Pe(G, V, re) {
      x.value.set(G, {
        action: "download",
        url: V,
        target_path: re
      });
    }
    function ee(G) {
      x.value.delete(G);
    }
    async function J(G) {
      try {
        await g(G);
      } catch (V) {
        I.value = V instanceof Error ? V.message : "Failed to open file location";
      }
    }
    async function Oe() {
      var G;
      k.value = !0, I.value = null, m(), d.phase = "resolving", b.value = "applying";
      try {
        const V = await i(o.workflowName, M.value, x.value, S.value);
        V.models_to_download && V.models_to_download.length > 0 && u(o.workflowName, V.models_to_download);
        const re = [
          ...V.nodes_to_install || [],
          ...Q.value.map((Qe) => Qe.package.package_id)
        ];
        d.nodesToInstall = [...new Set(re)], d.nodesToInstall.length > 0 && await c(o.workflowName), d.phase = "complete", await v();
        const Ve = d.installError || ((G = d.nodeInstallProgress) == null ? void 0 : G.completedNodes.some((Qe) => !Qe.success));
        !d.needsRestart && !Ve && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (V) {
        I.value = V instanceof Error ? V.message : "Failed to apply resolution", d.error = I.value, d.phase = "error";
      } finally {
        k.value = !1;
      }
    }
    function be() {
      n("refresh"), n("restart"), n("close");
    }
    async function ke() {
      var V;
      const G = ((V = d.nodeInstallProgress) == null ? void 0 : V.completedNodes.filter((re) => !re.success).map((re) => re.node_id)) || [];
      if (G.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: G.length
        }, d.nodesToInstall = G, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(o.workflowName), d.phase = "complete";
        } catch (re) {
          d.error = re instanceof Error ? re.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return Xe(A), (G, V) => (a(), D(mt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: I.value || void 0,
      "fixed-height": !0,
      onClose: V[1] || (V[1] = (re) => n("close"))
    }, {
      body: h(() => [
        p.value && !w.value ? (a(), r("div", xy, [...V[2] || (V[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (a(), r("div", Sy, [
          C(Dp, {
            steps: H.value,
            "current-step": b.value,
            "completed-steps": T.value,
            "step-stats": de.value,
            onStepChange: ce
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          b.value === "analysis" ? (a(), r("div", Iy, [
            t("div", Ey, [
              t("div", Ty, [
                V[3] || (V[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", Py, " Found " + f(w.value.stats.total_nodes) + " nodes and " + f(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", Ry, [
                t("div", My, [
                  V[12] || (V[12] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", Dy, [
                    oe.value > 0 ? (a(), r("div", Ly, [
                      V[4] || (V[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Oy, f(oe.value), 1),
                      V[5] || (V[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (a(), r("div", Ay, [
                      V[6] || (V[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Uy, f(w.value.stats.packages_needing_installation), 1),
                      V[7] || (V[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (a(), r("div", Ny, [
                      V[8] || (V[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", zy, f(w.value.nodes.ambiguous.length), 1),
                      V[9] || (V[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (a(), r("div", Fy, [
                      V[10] || (V[10] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", By, f(w.value.nodes.unresolved.length), 1),
                      V[11] || (V[11] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", Vy, [
                  V[23] || (V[23] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", Wy, [
                    t("div", Gy, [
                      V[13] || (V[13] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", jy, f(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      V[14] || (V[14] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (a(), r("div", Hy, [
                      V[15] || (V[15] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Ky, f(w.value.stats.download_intents), 1),
                      V[16] || (V[16] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    N.value ? (a(), r("div", qy, [
                      V[17] || (V[17] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", Yy, f(X.value.length), 1),
                      V[18] || (V[18] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (a(), r("div", Jy, [
                      V[19] || (V[19] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", Xy, f(w.value.models.ambiguous.length), 1),
                      V[20] || (V[20] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (a(), r("div", Qy, [
                      V[21] || (V[21] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", Zy, f(w.value.models.unresolved.length), 1),
                      V[22] || (V[22] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              K.value ? (a(), r("div", e1, [
                V[24] || (V[24] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", t1, f(ye.value.length + _e.value.length) + " items need your input", 1)
              ])) : L.value ? (a(), r("div", s1, [
                V[25] || (V[25] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", o1, f(w.value.stats.packages_needing_installation) + " package" + f(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(w.value.stats.nodes_needing_installation) + " node type" + f(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(P.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : P.value ? (a(), r("div", n1, [
                V[26] || (V[26] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", a1, f(w.value.stats.download_intents) + " model" + f(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : N.value ? (a(), r("div", l1, [
                V[27] || (V[27] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", i1, f(X.value.length) + " model" + f(X.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), r("div", r1, [...V[28] || (V[28] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              N.value ? (a(), r("div", c1, [
                V[31] || (V[31] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", u1, [
                  (a(!0), r(j, null, he(X.value, (re) => {
                    var Ve, Qe;
                    return a(), r("div", {
                      key: re.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", d1, f(re.actual_category) + "/" + f((Ve = re.model) == null ? void 0 : Ve.filename), 1),
                      V[30] || (V[30] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", f1, f((Qe = re.expected_categories) == null ? void 0 : Qe[0]) + "/", 1),
                      re.file_path ? (a(), D(De, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (vt) => J(re.file_path)
                      }, {
                        default: h(() => [...V[29] || (V[29] = [
                          $(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          b.value === "nodes" ? (a(), D(eh, {
            key: 1,
            nodes: ye.value,
            "node-choices": M.value,
            "auto-resolved-packages": R.value,
            "skipped-packages": S.value,
            onMarkOptional: te,
            onSkip: ae,
            onOptionSelected: ve,
            onManualEntry: pe,
            onClearChoice: Ie,
            onPackageSkip: Ee
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          b.value === "models" ? (a(), D(Kh, {
            key: 2,
            models: Le.value,
            "model-choices": x.value,
            onMarkOptional: ne,
            onSkip: fe,
            onOptionSelected: Ue,
            onDownloadUrl: Pe,
            onClearChoice: ee
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          b.value === "review" ? (a(), r("div", m1, [
            t("div", v1, [
              V[37] || (V[37] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", p1, [
                t("div", g1, [
                  t("span", h1, f(Se.value), 1),
                  V[32] || (V[32] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", y1, [
                  t("span", w1, f(we.value), 1),
                  V[33] || (V[33] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", _1, [
                  t("span", k1, f(ge.value), 1),
                  V[34] || (V[34] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", b1, [
                  t("span", $1, f(Ce.value), 1),
                  V[35] || (V[35] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              R.value.length > 0 ? (a(), r("div", C1, [
                t("h4", x1, "Node Packages (" + f(R.value.length) + ")", 1),
                t("div", S1, [
                  (a(!0), r(j, null, he(R.value, (re) => (a(), r("div", {
                    key: re.package_id,
                    class: "review-item"
                  }, [
                    t("code", I1, f(re.package_id), 1),
                    t("div", E1, [
                      S.value.has(re.package_id) ? (a(), r("span", P1, "Skipped")) : (a(), r("span", T1, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              ye.value.length > 0 ? (a(), r("div", R1, [
                t("h4", M1, "Node Choices (" + f(ye.value.length) + ")", 1),
                t("div", D1, [
                  (a(!0), r(j, null, he(ye.value, (re) => {
                    var Ve, Qe, vt, at;
                    return a(), r("div", {
                      key: re.node_type,
                      class: "review-item"
                    }, [
                      t("code", L1, f(re.node_type), 1),
                      t("div", O1, [
                        M.value.has(re.node_type) ? (a(), r(j, { key: 0 }, [
                          ((Ve = M.value.get(re.node_type)) == null ? void 0 : Ve.action) === "install" ? (a(), r("span", A1, f((Qe = M.value.get(re.node_type)) == null ? void 0 : Qe.package_id), 1)) : ((vt = M.value.get(re.node_type)) == null ? void 0 : vt.action) === "optional" ? (a(), r("span", U1, " Optional ")) : ((at = M.value.get(re.node_type)) == null ? void 0 : at.action) === "skip" ? (a(), r("span", N1, " Skip ")) : y("", !0)
                        ], 64)) : (a(), r("span", z1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Fe.value.length > 0 ? (a(), r("div", F1, [
                t("h4", B1, "Models to Download (" + f(Fe.value.length) + ")", 1),
                t("div", V1, [
                  (a(!0), r(j, null, he(Fe.value, (re) => (a(), r("div", {
                    key: re.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", W1, [
                      t("code", G1, f(re.filename), 1),
                      t("div", j1, [
                        t("span", H1, "→ " + f(re.target_path), 1),
                        re.url ? (a(), r("span", {
                          key: 0,
                          class: "download-url",
                          title: re.url
                        }, f(ie(re.url)), 9, K1)) : y("", !0)
                      ])
                    ]),
                    V[36] || (V[36] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Le.value.length > 0 ? (a(), r("div", q1, [
                t("h4", Y1, "Models (" + f(Le.value.length) + ")", 1),
                t("div", J1, [
                  (a(!0), r(j, null, he(Le.value, (re) => {
                    var Ve, Qe, vt, at, ut, Mt, Ft;
                    return a(), r("div", {
                      key: re.filename,
                      class: "review-item"
                    }, [
                      t("code", X1, f(re.filename), 1),
                      t("div", Q1, [
                        x.value.has(re.filename) ? (a(), r(j, { key: 0 }, [
                          ((Ve = x.value.get(re.filename)) == null ? void 0 : Ve.action) === "select" ? (a(), r("span", Z1, f((vt = (Qe = x.value.get(re.filename)) == null ? void 0 : Qe.selected_model) == null ? void 0 : vt.filename), 1)) : ((at = x.value.get(re.filename)) == null ? void 0 : at.action) === "download" ? (a(), r("span", e0, " Download ")) : ((ut = x.value.get(re.filename)) == null ? void 0 : ut.action) === "optional" ? (a(), r("span", t0, " Optional ")) : ((Mt = x.value.get(re.filename)) == null ? void 0 : Mt.action) === "skip" ? (a(), r("span", s0, " Skip ")) : ((Ft = x.value.get(re.filename)) == null ? void 0 : Ft.action) === "cancel_download" ? (a(), r("span", o0, " Cancel Download ")) : y("", !0)
                        ], 64)) : re.is_download_intent ? (a(), r("span", n0, " Pending Download ")) : (a(), r("span", a0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              U.value.length === 0 && ye.value.length === 0 && Le.value.length === 0 ? (a(), r("div", l0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          b.value === "applying" ? (a(), D(Cy, {
            key: 4,
            progress: We(d),
            onRestart: be,
            onRetryFailed: ke
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        b.value !== "analysis" && b.value !== "applying" ? (a(), D(De, {
          key: 0,
          variant: "secondary",
          disabled: k.value,
          onClick: Me
        }, {
          default: h(() => [...V[38] || (V[38] = [
            $(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        V[41] || (V[41] = t("div", { class: "footer-spacer" }, null, -1)),
        b.value !== "applying" || We(d).phase === "complete" || We(d).phase === "error" ? (a(), D(De, {
          key: 1,
          variant: "secondary",
          onClick: V[0] || (V[0] = (re) => n("close"))
        }, {
          default: h(() => [
            $(f(We(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        b.value === "analysis" ? (a(), D(De, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: W
        }, {
          default: h(() => [
            $(f(O.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        b.value === "nodes" ? (a(), D(De, {
          key: 3,
          variant: "primary",
          onClick: Re
        }, {
          default: h(() => [
            $(f(E.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        b.value === "models" ? (a(), D(De, {
          key: 4,
          variant: "primary",
          onClick: Re
        }, {
          default: h(() => [...V[39] || (V[39] = [
            $(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        b.value === "review" ? (a(), D(De, {
          key: 5,
          variant: "primary",
          disabled: k.value,
          loading: k.value,
          onClick: Oe
        }, {
          default: h(() => [...V[40] || (V[40] = [
            $(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), r0 = /* @__PURE__ */ me(i0, [["__scopeId", "data-v-40d8d5a8"]]), c0 = { class: "search-input-wrapper" }, u0 = ["value", "placeholder"], d0 = /* @__PURE__ */ ue({
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
    const o = e, n = s, l = _(null);
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
    return Xe(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, m) => (a(), r("div", c0, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: Ht(u, ["escape"])
      }, null, 40, u0),
      e.clearable && e.modelValue ? (a(), r("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), f0 = /* @__PURE__ */ me(d0, [["__scopeId", "data-v-266f857a"]]), m0 = { class: "search-bar" }, v0 = /* @__PURE__ */ ue({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (a(), r("div", m0, [
      C(f0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => s.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), $o = /* @__PURE__ */ me(v0, [["__scopeId", "data-v-3d51bbfd"]]), p0 = { class: "section-group" }, g0 = {
  key: 0,
  class: "section-content"
}, h0 = /* @__PURE__ */ ue({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = _(o.initiallyExpanded);
    function i() {
      o.collapsible && (l.value = !l.value, n("toggle", l.value));
    }
    return (c, u) => (a(), r("section", p0, [
      C(Ut, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: i
      }, {
        default: h(() => [
          $(f(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (a(), r("div", g0, [
        Ke(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), lt = /* @__PURE__ */ me(h0, [["__scopeId", "data-v-c48e33ed"]]), y0 = { class: "item-header" }, w0 = {
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
}, x0 = /* @__PURE__ */ ue({
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
      class: Te(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: i[0] || (i[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      t("div", y0, [
        l.$slots.icon ? (a(), r("span", w0, [
          Ke(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", _0, [
          l.$slots.title ? (a(), r("div", k0, [
            Ke(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), r("div", b0, [
            Ke(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), r("div", $0, [
        Ke(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), r("div", C0, [
        Ke(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Et = /* @__PURE__ */ me(x0, [["__scopeId", "data-v-cc435e0e"]]), S0 = { class: "loading-state" }, I0 = { class: "loading-message" }, E0 = /* @__PURE__ */ ue({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (a(), r("div", S0, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", I0, f(e.message), 1)
    ]));
  }
}), Ps = /* @__PURE__ */ me(E0, [["__scopeId", "data-v-ad8436c9"]]), T0 = { class: "error-state" }, P0 = { class: "error-message" }, R0 = /* @__PURE__ */ ue({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (a(), r("div", T0, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", P0, f(e.message), 1),
      e.retry ? (a(), D(le, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => s.$emit("retry"))
      }, {
        default: h(() => [...o[1] || (o[1] = [
          $(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Rs = /* @__PURE__ */ me(R0, [["__scopeId", "data-v-5397be48"]]), M0 = /* @__PURE__ */ ue({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getWorkflows: l } = tt(), i = _([]), c = _(!1), u = _(null), d = _(""), m = _(!0), v = _(!1), g = _(!1), w = _(!1), p = _(null), k = F(
      () => i.value.filter((R) => R.status === "broken")
    ), I = F(
      () => i.value.filter((R) => R.status === "new")
    ), b = F(
      () => i.value.filter((R) => R.status === "modified")
    ), T = F(
      () => i.value.filter((R) => R.status === "synced")
    ), M = F(() => {
      if (!d.value.trim()) return i.value;
      const R = d.value.toLowerCase();
      return i.value.filter((Q) => Q.name.toLowerCase().includes(R));
    }), x = F(
      () => k.value.filter(
        (R) => !d.value.trim() || R.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), S = F(
      () => I.value.filter(
        (R) => !d.value.trim() || R.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), H = F(
      () => b.value.filter(
        (R) => !d.value.trim() || R.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), K = F(
      () => T.value.filter(
        (R) => !d.value.trim() || R.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), B = F(
      () => v.value ? K.value : K.value.slice(0, 5)
    );
    async function E(R = !1) {
      c.value = !0, u.value = null;
      try {
        i.value = await l(R);
      } catch (Q) {
        u.value = Q instanceof Error ? Q.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    s({ loadWorkflows: E });
    function P(R) {
      p.value = R, g.value = !0;
    }
    function L(R) {
      p.value = R, w.value = !0;
    }
    function oe() {
      n("refresh");
    }
    async function X() {
      w.value = !1, await E(!0);
    }
    async function N() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function O(R) {
      const Q = [];
      return R.missing_nodes > 0 && Q.push(`${R.missing_nodes} missing node${R.missing_nodes > 1 ? "s" : ""}`), R.missing_models > 0 && Q.push(`${R.missing_models} missing model${R.missing_models > 1 ? "s" : ""}`), R.models_with_category_mismatch && R.models_with_category_mismatch > 0 && Q.push(`${R.models_with_category_mismatch} model${R.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), R.pending_downloads && R.pending_downloads > 0 && Q.push(`${R.pending_downloads} pending download${R.pending_downloads > 1 ? "s" : ""}`), Q.length > 0 ? Q.join(", ") : "Has issues";
    }
    function U(R) {
      const Q = R.sync_state === "new" ? "New" : R.sync_state === "modified" ? "Modified" : R.sync_state === "synced" ? "Synced" : R.sync_state;
      return R.has_path_sync_issues && R.models_needing_path_sync && R.models_needing_path_sync > 0 ? `${R.models_needing_path_sync} model path${R.models_needing_path_sync > 1 ? "s" : ""} need${R.models_needing_path_sync === 1 ? "s" : ""} sync` : Q || "Unknown";
    }
    return Xe(E), (R, Q) => (a(), r(j, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          C($o, {
            modelValue: d.value,
            "onUpdate:modelValue": Q[0] || (Q[0] = (Y) => d.value = Y),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (a(), D(Ps, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (a(), D(Rs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            x.value.length ? (a(), D(lt, {
              key: 0,
              title: "BROKEN",
              count: x.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, he(x.value, (Y) => (a(), D(Et, {
                  key: Y.name,
                  status: "broken"
                }, {
                  icon: h(() => [...Q[7] || (Q[7] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(Y.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(O(Y)), 1)
                  ]),
                  actions: h(() => [
                    C(le, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ye) => L(Y.name)
                    }, {
                      default: h(() => [...Q[8] || (Q[8] = [
                        $(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(le, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ye) => P(Y.name)
                    }, {
                      default: h(() => [...Q[9] || (Q[9] = [
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
            S.value.length ? (a(), D(lt, {
              key: 1,
              title: "NEW",
              count: S.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, he(S.value, (Y) => (a(), D(Et, {
                  key: Y.name,
                  status: Y.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    $(f(Y.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    $(f(Y.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(U(Y)), 1)
                  ]),
                  actions: h(() => [
                    C(le, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ye) => P(Y.name)
                    }, {
                      default: h(() => [...Q[10] || (Q[10] = [
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
            H.value.length ? (a(), D(lt, {
              key: 2,
              title: "MODIFIED",
              count: H.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, he(H.value, (Y) => (a(), D(Et, {
                  key: Y.name,
                  status: Y.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...Q[11] || (Q[11] = [
                    $("⚡", -1)
                  ])]),
                  title: h(() => [
                    $(f(Y.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(U(Y)), 1)
                  ]),
                  actions: h(() => [
                    C(le, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ye) => P(Y.name)
                    }, {
                      default: h(() => [...Q[12] || (Q[12] = [
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
            K.value.length ? (a(), D(lt, {
              key: 3,
              title: "SYNCED",
              count: K.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: Q[2] || (Q[2] = (Y) => m.value = Y)
            }, {
              default: h(() => [
                (a(!0), r(j, null, he(B.value, (Y) => (a(), D(Et, {
                  key: Y.name,
                  status: Y.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    $(f(Y.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    $(f(Y.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(U(Y)), 1)
                  ]),
                  actions: h(() => [
                    C(le, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ye) => P(Y.name)
                    }, {
                      default: h(() => [...Q[13] || (Q[13] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && K.value.length > 5 ? (a(), D(le, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: Q[1] || (Q[1] = (Y) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    $(" View all " + f(K.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            M.value.length ? y("", !0) : (a(), D(ns, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g.value && p.value ? (a(), D(kp, {
        key: 0,
        "workflow-name": p.value,
        onClose: Q[3] || (Q[3] = (Y) => g.value = !1),
        onResolve: Q[4] || (Q[4] = (Y) => L(p.value)),
        onRefresh: Q[5] || (Q[5] = (Y) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (a(), D(r0, {
        key: 1,
        "workflow-name": p.value,
        onClose: X,
        onInstall: oe,
        onRefresh: Q[6] || (Q[6] = (Y) => n("refresh")),
        onRestart: N
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), D0 = /* @__PURE__ */ me(M0, [["__scopeId", "data-v-fa3f076e"]]), L0 = /* @__PURE__ */ ue({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Te(["summary-bar", e.variant])
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), an = /* @__PURE__ */ me(L0, [["__scopeId", "data-v-ccb7816e"]]), O0 = {
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
}, mw = /* @__PURE__ */ ue({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: i, openFileLocation: c } = tt(), u = _(null), d = _(!0), m = _(null), v = _(""), g = _(!1), w = _(null), p = _(null), k = _(null), I = _(null);
    let b = null;
    function T(E, P = "success", L = 2e3) {
      b && clearTimeout(b), I.value = { message: E, type: P }, b = setTimeout(() => {
        I.value = null;
      }, L);
    }
    function M(E) {
      if (!E) return "Unknown";
      const P = 1024 * 1024 * 1024, L = 1024 * 1024;
      return E >= P ? `${(E / P).toFixed(1)} GB` : E >= L ? `${(E / L).toFixed(0)} MB` : `${(E / 1024).toFixed(0)} KB`;
    }
    function x(E) {
      navigator.clipboard.writeText(E), T("Copied to clipboard!");
    }
    async function S(E) {
      try {
        await c(E), T("Opening file location...");
      } catch {
        T("Failed to open location", "error");
      }
    }
    async function H() {
      if (!(!v.value.trim() || !u.value)) {
        g.value = !0, p.value = null, k.value = null;
        try {
          await l(u.value.hash, v.value.trim()), k.value = "Source added successfully!", v.value = "", await B();
        } catch (E) {
          p.value = E instanceof Error ? E.message : "Failed to add source";
        } finally {
          g.value = !1;
        }
      }
    }
    async function K(E) {
      if (u.value) {
        w.value = E, p.value = null, k.value = null;
        try {
          await i(u.value.hash, E), T("Source removed"), await B();
        } catch (P) {
          p.value = P instanceof Error ? P.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function B() {
      d.value = !0, m.value = null;
      try {
        u.value = await n(o.identifier);
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return Xe(B), (E, P) => {
      var L;
      return a(), r(j, null, [
        C(mt, {
          title: `Model Details: ${((L = u.value) == null ? void 0 : L.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          onClose: P[5] || (P[5] = (oe) => E.$emit("close"))
        }, {
          body: h(() => {
            var oe, X, N, O;
            return [
              u.value ? (a(), r("div", O0, [
                t("section", A0, [
                  t("div", U0, [
                    P[6] || (P[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", N0, f(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: P[0] || (P[0] = (U) => x(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", z0, [
                    P[7] || (P[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", F0, f(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: P[1] || (P[1] = (U) => x(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", B0, [
                    P[8] || (P[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", V0, f(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: P[2] || (P[2] = (U) => x(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", W0, [
                    P[9] || (P[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", G0, f(M(u.value.size)), 1)
                  ]),
                  t("div", j0, [
                    P[10] || (P[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", H0, f(u.value.category), 1)
                  ]),
                  t("div", K0, [
                    P[11] || (P[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", q0, f(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", Y0, [
                  t("h4", J0, "Locations (" + f(((oe = u.value.locations) == null ? void 0 : oe.length) || 0) + ")", 1),
                  (X = u.value.locations) != null && X.length ? (a(), r("div", X0, [
                    (a(!0), r(j, null, he(u.value.locations, (U, R) => (a(), r("div", {
                      key: R,
                      class: "location-item"
                    }, [
                      t("span", Q0, f(U.path), 1),
                      U.modified ? (a(), r("span", Z0, "Modified: " + f(U.modified), 1)) : y("", !0),
                      U.path ? (a(), r("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (Q) => S(U.path)
                      }, " Open File Location ", 8, ew)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), r("div", tw, "No locations found"))
                ]),
                t("section", sw, [
                  t("h4", ow, "Download Sources (" + f(((N = u.value.sources) == null ? void 0 : N.length) || 0) + ")", 1),
                  (O = u.value.sources) != null && O.length ? (a(), r("div", nw, [
                    (a(!0), r(j, null, he(u.value.sources, (U, R) => (a(), r("div", {
                      key: R,
                      class: "source-item"
                    }, [
                      t("span", aw, f(U.type) + ":", 1),
                      t("a", {
                        href: U.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(U.url), 9, lw),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === U.url,
                        onClick: (Q) => K(U.url)
                      }, f(w.value === U.url ? "..." : "×"), 9, iw)
                    ]))), 128))
                  ])) : (a(), r("div", rw, " No download sources configured ")),
                  t("div", cw, [
                    qe(t("input", {
                      "onUpdate:modelValue": P[3] || (P[3] = (U) => v.value = U),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [zt, v.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || g.value,
                      onClick: H
                    }, f(g.value ? "Adding..." : "Add Source"), 9, uw)
                  ]),
                  p.value ? (a(), r("p", dw, f(p.value), 1)) : y("", !0),
                  k.value ? (a(), r("p", fw, f(k.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            t("button", {
              class: "btn-secondary",
              onClick: P[4] || (P[4] = (oe) => E.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (a(), D(Ct, { to: "body" }, [
          I.value ? (a(), r("div", {
            key: 0,
            class: Te(["toast", I.value.type])
          }, f(I.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), ol = /* @__PURE__ */ me(mw, [["__scopeId", "data-v-f15cbb56"]]), vw = /* @__PURE__ */ ue({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: n, getStatus: l } = tt(), i = _([]), c = _([]), u = _("production"), d = _(!1), m = _(null), v = _(""), g = _(!1), w = _(null);
    function p() {
      g.value = !1, o("navigate", "model-index");
    }
    const k = F(
      () => i.value.reduce((B, E) => B + (E.size || 0), 0)
    ), I = F(() => {
      if (!v.value.trim()) return i.value;
      const B = v.value.toLowerCase();
      return i.value.filter((E) => E.filename.toLowerCase().includes(B));
    }), b = F(() => {
      if (!v.value.trim()) return c.value;
      const B = v.value.toLowerCase();
      return c.value.filter((E) => E.filename.toLowerCase().includes(B));
    }), T = F(() => {
      const B = {};
      for (const P of I.value) {
        const L = P.type || "other";
        B[L] || (B[L] = []), B[L].push(P);
      }
      const E = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(B).sort(([P], [L]) => {
        const oe = E.indexOf(P), X = E.indexOf(L);
        return oe >= 0 && X >= 0 ? oe - X : oe >= 0 ? -1 : X >= 0 ? 1 : P.localeCompare(L);
      }).map(([P, L]) => ({ type: P, models: L }));
    });
    function M(B) {
      if (!B) return "Unknown";
      const E = B / (1024 * 1024);
      return E >= 1024 ? `${(E / 1024).toFixed(1)} GB` : `${E.toFixed(0)} MB`;
    }
    function x(B) {
      w.value = B.hash || B.filename;
    }
    function S(B) {
      o("navigate", "model-index");
    }
    function H(B) {
      alert(`Download functionality not yet implemented for ${B}`);
    }
    async function K() {
      d.value = !0, m.value = null;
      try {
        const B = await n();
        i.value = B, c.value = [];
        const E = await l();
        u.value = E.environment || "production";
      } catch (B) {
        m.value = B instanceof Error ? B.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return Xe(K), (B, E) => (a(), r(j, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (P) => g.value = !0)
          })
        ]),
        search: h(() => [
          C($o, {
            modelValue: v.value,
            "onUpdate:modelValue": E[1] || (E[1] = (P) => v.value = P),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (a(), D(Ps, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (a(), D(Rs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: K
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            i.value.length ? (a(), D(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(i.value.length) + " models • " + f(M(k.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(j, null, he(T.value, (P) => (a(), D(lt, {
              key: P.type,
              title: P.type.toUpperCase(),
              count: P.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(j, null, he(P.models, (L) => (a(), D(Et, {
                  key: L.hash || L.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...E[4] || (E[4] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(f(L.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(M(L.size)), 1)
                  ]),
                  details: h(() => [
                    C(dt, {
                      label: "Used by:",
                      value: (L.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    C(dt, {
                      label: "Path:",
                      value: L.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(le, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (oe) => x(L)
                    }, {
                      default: h(() => [...E[5] || (E[5] = [
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
            b.value.length ? (a(), D(lt, {
              key: 1,
              title: "MISSING",
              count: b.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, he(b.value, (P) => (a(), D(Et, {
                  key: P.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...E[6] || (E[6] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(P.filename), 1)
                  ]),
                  subtitle: h(() => [...E[7] || (E[7] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var L;
                    return [
                      C(dt, {
                        label: "Required by:",
                        value: ((L = P.workflow_names) == null ? void 0 : L.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    C(le, {
                      variant: "primary",
                      size: "sm",
                      onClick: (L) => H(P.filename)
                    }, {
                      default: h(() => [...E[8] || (E[8] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(le, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (L) => S(P.filename)
                    }, {
                      default: h(() => [...E[9] || (E[9] = [
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
            !I.value.length && !b.value.length ? (a(), D(ns, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      C(as, {
        show: g.value,
        title: "About Environment Models",
        onClose: E[2] || (E[2] = (P) => g.value = !1)
      }, {
        content: h(() => [
          t("p", null, [
            E[10] || (E[10] = $(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + f(u.value) + '"', 1),
            E[11] || (E[11] = $(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          C(le, {
            variant: "primary",
            onClick: p
          }, {
            default: h(() => [...E[12] || (E[12] = [
              $(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), D(ol, {
        key: 0,
        identifier: w.value,
        onClose: E[3] || (E[3] = (P) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), pw = /* @__PURE__ */ me(vw, [["__scopeId", "data-v-cb4f12b3"]]);
function gw(e) {
  const s = e.toLowerCase();
  return s === "huggingface.co" || s.endsWith(".huggingface.co") || s === "hf.co";
}
function hw(e) {
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
  const c = i[0];
  if (c === "tree") {
    const u = i[1] || "main", d = i.slice(2).join("/");
    return { kind: "repo", repoId: l, revision: u, path: d || void 0 };
  }
  if (c === "resolve") {
    const u = i[1] || "main", d = i.slice(2).join("/");
    return d ? { kind: "file", repoId: l, revision: u, path: d } : { kind: "repo", repoId: l, revision: u };
  }
  if (c === "blob") {
    const u = i[1] || "main", d = i.slice(2).join("/");
    return d ? { kind: "file", repoId: l, revision: u, path: d } : { kind: "repo", repoId: l, revision: u };
  }
  return { kind: "repo", repoId: l, revision: "main" };
}
function yw(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function ww(e, s, o) {
  const [n, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(n)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(s)}/${yw(o)}`;
}
const _w = { class: "hf-file-browser" }, kw = { class: "browser-header" }, bw = { class: "repo-info" }, $w = { class: "repo-id" }, Cw = {
  key: 0,
  class: "revision-pill"
}, xw = {
  key: 0,
  class: "loading-state"
}, Sw = {
  key: 1,
  class: "error-state"
}, Iw = { class: "toolbar" }, Ew = { class: "toolbar-actions" }, Tw = { class: "file-list-container" }, Pw = {
  key: 0,
  class: "empty-state"
}, Rw = {
  key: 1,
  class: "file-list"
}, Mw = ["onClick"], Dw = ["checked", "onChange"], Lw = { class: "file-path" }, Ow = { class: "file-size" }, Aw = { class: "destination-section" }, Uw = { class: "destination-row" }, Nw = {
  key: 0,
  class: "path-separator"
}, zw = { class: "summary-bar" }, Fw = { class: "summary-count" }, Bw = { class: "summary-size" }, Vw = { class: "action-bar" }, Ww = /* @__PURE__ */ ue({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: i } = tt(), c = _([]), u = _(/* @__PURE__ */ new Set()), d = _(!1), m = _(null), v = _(""), g = _(!0), w = _(""), p = _(""), k = _(""), I = _([]), b = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, T = F(() => {
      let O = c.value;
      if (o.initialPath) {
        const U = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        O = O.filter((R) => R.path.startsWith(U) || R.path === o.initialPath);
      }
      if (g.value && (O = O.filter((U) => U.is_model_file)), v.value.trim()) {
        const U = v.value.toLowerCase();
        O = O.filter((R) => R.path.toLowerCase().includes(U));
      }
      return O;
    }), M = F(() => {
      const O = I.value.map((U) => ({
        label: U,
        value: U
      }));
      return O.push({ label: "Custom path...", value: "__custom__" }), O;
    }), x = F(() => w.value === "__custom__" ? k.value.trim().length > 0 : w.value.length > 0), S = F(() => {
      let O = 0;
      for (const U of u.value) {
        const R = c.value.find((Q) => Q.path === U);
        R && (O += R.size);
      }
      return O;
    });
    function H(O) {
      if (O === 0) return "0 B";
      const U = 1024 * 1024 * 1024, R = 1024 * 1024, Q = 1024;
      return O >= U ? `${(O / U).toFixed(2)} GB` : O >= R ? `${(O / R).toFixed(1)} MB` : O >= Q ? `${(O / Q).toFixed(0)} KB` : `${O} B`;
    }
    function K(O) {
      const U = O.match(b);
      return U ? `${U[1]}${U[4]}` : null;
    }
    function B(O) {
      const U = new Set(u.value), R = U.has(O.path), Q = O.shard_group || K(O.path);
      if (Q) {
        const Y = c.value.filter((ye) => (ye.shard_group || K(ye.path)) === Q);
        R ? Y.forEach((ye) => U.delete(ye.path)) : Y.forEach((ye) => U.add(ye.path));
      } else
        R ? U.delete(O.path) : U.add(O.path);
      u.value = U;
    }
    function E() {
      const O = new Set(u.value);
      for (const U of T.value)
        U.is_model_file && O.add(U.path);
      u.value = O;
    }
    function P() {
      u.value = /* @__PURE__ */ new Set();
    }
    function L() {
      return w.value === "__custom__" ? k.value.trim() : p.value.trim() ? `${w.value}/${p.value.trim()}` : w.value;
    }
    function oe() {
      if (u.value.size === 0 || !x.value) return;
      const O = L(), U = [];
      for (const R of u.value) {
        const Q = c.value.find((Y) => Y.path === R);
        Q && U.push({
          url: ww(o.repoId, o.revision, Q.path),
          destination: O,
          filename: Q.path.split("/").pop() || Q.path
        });
      }
      n("queue", U);
    }
    async function X() {
      if (o.repoId) {
        d.value = !0, m.value = null;
        try {
          const O = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, U = await l(O);
          if (c.value = U.files, o.preselectedFile) {
            const R = c.value.find((Q) => Q.path === o.preselectedFile);
            R && B(R);
          }
        } catch (O) {
          m.value = O instanceof Error ? O.message : "Failed to load repository";
        } finally {
          d.value = !1;
        }
      }
    }
    async function N() {
      try {
        const O = await i();
        I.value = O.directories, O.directories.length > 0 && !w.value && (w.value = O.directories[0]);
      } catch {
        I.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], w.value || (w.value = "checkpoints");
      }
    }
    return yt(() => [o.repoId, o.revision], () => {
      o.repoId && X();
    }, { immediate: !1 }), Xe(() => {
      X(), N();
    }), (O, U) => (a(), r("div", _w, [
      t("div", kw, [
        t("button", {
          class: "back-btn",
          onClick: U[0] || (U[0] = (R) => O.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", bw, [
          t("span", $w, f(e.repoId), 1),
          e.revision ? (a(), r("span", Cw, f(e.revision), 1)) : y("", !0)
        ])
      ]),
      d.value ? (a(), r("div", xw, " Loading repository files... ")) : m.value ? (a(), r("div", Sw, f(m.value), 1)) : (a(), r(j, { key: 2 }, [
        t("div", Iw, [
          C(Tt, {
            modelValue: v.value,
            "onUpdate:modelValue": U[1] || (U[1] = (R) => v.value = R),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", Ew, [
            t("button", {
              class: Te(["toggle-btn", { active: g.value }]),
              onClick: U[2] || (U[2] = (R) => g.value = !g.value)
            }, f(g.value ? "Models Only" : "All Files"), 3),
            t("button", {
              class: "action-btn",
              onClick: E
            }, "Auto-Select Models"),
            t("button", {
              class: "action-btn",
              onClick: P
            }, "Clear")
          ])
        ]),
        t("div", Tw, [
          T.value.length === 0 ? (a(), r("div", Pw, f(c.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (a(), r("div", Rw, [
            (a(!0), r(j, null, he(T.value, (R) => (a(), r("div", {
              key: R.path,
              class: Te(["file-item", { selected: u.value.has(R.path) }]),
              onClick: (Q) => B(R)
            }, [
              t("input", {
                type: "checkbox",
                checked: u.value.has(R.path),
                class: "file-checkbox",
                onClick: U[3] || (U[3] = it(() => {
                }, ["stop"])),
                onChange: (Q) => B(R)
              }, null, 40, Dw),
              t("span", Lw, f(R.path), 1),
              t("span", Ow, f(H(R.size)), 1)
            ], 10, Mw))), 128))
          ]))
        ]),
        t("div", Aw, [
          U[7] || (U[7] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", Uw, [
            C(Cr, {
              modelValue: w.value,
              "onUpdate:modelValue": U[4] || (U[4] = (R) => w.value = R),
              options: M.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            w.value !== "__custom__" ? (a(), r("span", Nw, "/")) : y("", !0),
            w.value !== "__custom__" ? (a(), D(Tt, {
              key: 1,
              modelValue: p.value,
              "onUpdate:modelValue": U[5] || (U[5] = (R) => p.value = R),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : y("", !0)
          ]),
          w.value === "__custom__" ? (a(), D(Tt, {
            key: 0,
            modelValue: k.value,
            "onUpdate:modelValue": U[6] || (U[6] = (R) => k.value = R),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : y("", !0)
        ]),
        t("div", zw, [
          t("span", Fw, f(u.value.size) + " file(s) selected", 1),
          t("span", Bw, f(H(S.value)), 1)
        ]),
        t("div", Vw, [
          C(De, {
            variant: "primary",
            disabled: u.value.size === 0 || !x.value,
            onClick: oe
          }, {
            default: h(() => [...U[8] || (U[8] = [
              $(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), Gw = /* @__PURE__ */ me(Ww, [["__scopeId", "data-v-c7d5e841"]]), jw = { class: "huggingface-tab" }, Hw = {
  key: 0,
  class: "search-section"
}, Kw = { class: "search-bar" }, qw = {
  key: 1,
  class: "search-results"
}, Yw = {
  key: 0,
  class: "loading-state"
}, Jw = {
  key: 1,
  class: "error-state"
}, Xw = {
  key: 2,
  class: "results-list"
}, Qw = ["onClick"], Zw = { class: "repo-header" }, e_ = { class: "repo-id" }, t_ = { class: "repo-stats" }, s_ = {
  class: "stat",
  title: "Downloads"
}, o_ = {
  class: "stat",
  title: "Likes"
}, n_ = {
  key: 0,
  class: "repo-desc"
}, a_ = {
  key: 1,
  class: "repo-tags"
}, l_ = {
  key: 3,
  class: "empty-state"
}, i_ = {
  key: 4,
  class: "hint-state"
}, r_ = /* @__PURE__ */ ue({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: s } = tt(), o = _("search"), n = _(""), l = _([]), i = _(!1), c = _(null), u = _(!1), d = _(null), m = _("main"), v = _(), g = _();
    function w(b) {
      return b >= 1e6 ? `${(b / 1e6).toFixed(1)}M` : b >= 1e3 ? `${(b / 1e3).toFixed(1)}K` : String(b);
    }
    async function p() {
      const b = n.value.trim();
      if (!b) return;
      c.value = null;
      const T = hw(b);
      if (T.kind === "file" && T.repoId && T.path) {
        d.value = T.repoId, m.value = T.revision || "main";
        const M = T.path.split("/");
        M.length > 1 ? v.value = M.slice(0, -1).join("/") : v.value = void 0, g.value = T.path, o.value = "browse";
        return;
      }
      if (T.kind === "repo" && T.repoId) {
        d.value = T.repoId, m.value = T.revision || "main", v.value = T.path, g.value = void 0, o.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(b) && !b.includes("://")) {
        d.value = b, m.value = "main", v.value = void 0, g.value = void 0, o.value = "browse";
        return;
      }
      i.value = !0;
      try {
        const M = await s(b);
        l.value = M.results, u.value = !0;
      } catch (M) {
        c.value = M instanceof Error ? M.message : "Search failed";
      } finally {
        i.value = !1;
      }
    }
    function k(b) {
      d.value = b, m.value = "main", v.value = void 0, g.value = void 0, o.value = "browse";
    }
    function I() {
      o.value = "search", d.value = null, v.value = void 0, g.value = void 0;
    }
    return (b, T) => (a(), r("div", jw, [
      o.value === "search" ? (a(), r("div", Hw, [
        t("div", Kw, [
          C(Tt, {
            modelValue: n.value,
            "onUpdate:modelValue": T[0] || (T[0] = (M) => n.value = M),
            placeholder: "Search repos, paste URL, or enter user/repo...",
            onKeydown: Ht(p, ["enter"])
          }, null, 8, ["modelValue"]),
          C(De, {
            variant: "primary",
            onClick: p,
            loading: i.value
          }, {
            default: h(() => [...T[2] || (T[2] = [
              $(" Search ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ])) : y("", !0),
      o.value === "search" ? (a(), r("div", qw, [
        i.value ? (a(), r("div", Yw, " Searching HuggingFace... ")) : c.value ? (a(), r("div", Jw, f(c.value), 1)) : l.value.length > 0 ? (a(), r("div", Xw, [
          (a(!0), r(j, null, he(l.value, (M) => (a(), r("div", {
            key: M.repo_id,
            class: "repo-card",
            onClick: (x) => k(M.repo_id)
          }, [
            t("div", Zw, [
              t("span", e_, f(M.repo_id), 1),
              t("div", t_, [
                t("span", s_, [
                  T[3] || (T[3] = t("span", { class: "stat-icon" }, "↓", -1)),
                  $(" " + f(w(M.downloads)), 1)
                ]),
                t("span", o_, [
                  T[4] || (T[4] = t("span", { class: "stat-icon" }, "★", -1)),
                  $(" " + f(w(M.likes)), 1)
                ])
              ])
            ]),
            M.description ? (a(), r("p", n_, f(M.description), 1)) : y("", !0),
            M.tags.length > 0 ? (a(), r("div", a_, [
              (a(!0), r(j, null, he(M.tags.slice(0, 5), (x) => (a(), r("span", {
                key: x,
                class: "tag"
              }, f(x), 1))), 128))
            ])) : y("", !0)
          ], 8, Qw))), 128))
        ])) : u.value ? (a(), r("div", l_, " No repositories found ")) : (a(), r("div", i_, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (a(), D(Gw, {
        key: 2,
        "repo-id": d.value,
        revision: m.value,
        "initial-path": v.value,
        "preselected-file": g.value,
        onBack: I,
        onQueue: T[1] || (T[1] = (M) => b.$emit("queue", M))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"]))
    ]));
  }
}), c_ = /* @__PURE__ */ me(r_, [["__scopeId", "data-v-88ed2d62"]]), u_ = { class: "civitai-tab" }, d_ = /* @__PURE__ */ ue({
  __name: "CivitaiTab",
  setup(e) {
    return (s, o) => (a(), r("div", u_, [...o[0] || (o[0] = [
      t("div", { class: "placeholder" }, [
        t("div", { class: "icon" }, "🎨"),
        t("h3", null, "Civitai Integration"),
        t("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), f_ = /* @__PURE__ */ me(d_, [["__scopeId", "data-v-44948051"]]), m_ = { class: "direct-url-tab" }, v_ = { class: "input-group" }, p_ = { class: "input-group" }, g_ = {
  key: 0,
  class: "error"
}, h_ = { class: "actions" }, y_ = /* @__PURE__ */ ue({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: s }) {
    const o = s, n = _(""), l = _(""), i = F(() => {
      const d = l.value.trim();
      if (!d) return null;
      const m = d.replace(/\\/g, "/").split("/").pop() || "";
      return m.includes(".") && !m.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), c = F(() => n.value.trim() !== "" && l.value.trim() !== "" && !i.value), u = () => {
      if (!c.value) return;
      const d = l.value.replace(/\\/g, "/").split("/").pop() || "";
      o("queue", [{
        url: n.value.trim(),
        targetPath: l.value.trim(),
        filename: d
      }]), n.value = "", l.value = "";
    };
    return (d, m) => (a(), r("div", m_, [
      t("div", v_, [
        m[2] || (m[2] = t("label", null, "Download URL", -1)),
        C(Tt, {
          modelValue: n.value,
          "onUpdate:modelValue": m[0] || (m[0] = (v) => n.value = v),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      t("div", p_, [
        m[3] || (m[3] = t("label", null, "Target Path (relative to models directory)", -1)),
        C(Tt, {
          modelValue: l.value,
          "onUpdate:modelValue": m[1] || (m[1] = (v) => l.value = v),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        i.value ? (a(), r("p", g_, f(i.value), 1)) : y("", !0)
      ]),
      m[5] || (m[5] = t("p", { class: "note" }, "Model will be queued for background download.", -1)),
      t("div", h_, [
        C(De, {
          variant: "primary",
          disabled: !c.value,
          onClick: u
        }, {
          default: h(() => [...m[4] || (m[4] = [
            $(" Queue Download ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), w_ = /* @__PURE__ */ me(y_, [["__scopeId", "data-v-01def7aa"]]), __ = { class: "download-modal" }, k_ = { class: "tab-bar" }, b_ = ["onClick"], $_ = { class: "tab-content" }, C_ = /* @__PURE__ */ ue({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = s, { addToQueue: n } = bo(), l = [
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], i = _("huggingface");
    function c(m) {
      n(m.map((v) => ({
        workflow: "__manual__",
        filename: v.filename,
        url: v.url,
        targetPath: v.destination ? `${v.destination}/${v.filename}` : v.filename
      }))), o("close");
    }
    function u(m) {
      n(m.map((v) => ({
        workflow: "__manual__",
        filename: v.filename,
        url: v.url,
        targetPath: v.targetPath
      }))), o("close");
    }
    function d() {
      o("close");
    }
    return (m, v) => e.show ? (a(), D(mt, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: d
    }, {
      body: h(() => [
        t("div", __, [
          t("div", k_, [
            (a(), r(j, null, he(l, (g) => t("button", {
              key: g.id,
              class: Te(["tab-btn", { active: i.value === g.id }]),
              onClick: (w) => i.value = g.id
            }, f(g.icon) + " " + f(g.label), 11, b_)), 64))
          ]),
          t("div", $_, [
            i.value === "huggingface" ? (a(), D(c_, {
              key: 0,
              onQueue: c
            })) : i.value === "civitai" ? (a(), D(f_, { key: 1 })) : i.value === "direct" ? (a(), D(w_, {
              key: 2,
              onQueue: u
            })) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        C(De, {
          variant: "secondary",
          onClick: d
        }, {
          default: h(() => [...v[0] || (v[0] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), x_ = /* @__PURE__ */ me(C_, [["__scopeId", "data-v-90a9f401"]]), S_ = {
  key: 0,
  class: "indexing-progress"
}, I_ = { class: "progress-info" }, E_ = { class: "progress-label" }, T_ = { class: "progress-count" }, P_ = { class: "progress-bar" }, R_ = { class: "modal-content" }, M_ = { class: "modal-header" }, D_ = { class: "modal-body" }, L_ = { class: "input-group" }, O_ = { class: "current-path" }, A_ = { class: "input-group" }, U_ = { class: "modal-footer" }, N_ = /* @__PURE__ */ ue({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: i
    } = tt(), c = s, u = _([]), d = _(!1), m = _(!1), v = _(null), g = _(""), w = _(!1), p = _(null), k = _(!1), I = _(null), b = _(""), T = _(!1), M = _(!1), x = _(null), S = F(
      () => u.value.reduce((N, O) => N + (O.size || 0), 0)
    ), H = F(() => {
      if (!g.value.trim()) return u.value;
      const N = g.value.toLowerCase();
      return u.value.filter((O) => {
        const U = O, R = O.sha256 || U.sha256_hash || "";
        return O.filename.toLowerCase().includes(N) || R.toLowerCase().includes(N);
      });
    }), K = F(() => {
      const N = {};
      for (const U of H.value) {
        const R = U.type || "other";
        N[R] || (N[R] = []), N[R].push(U);
      }
      const O = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(N).sort(([U], [R]) => {
        const Q = O.indexOf(U), Y = O.indexOf(R);
        return Q >= 0 && Y >= 0 ? Q - Y : Q >= 0 ? -1 : Y >= 0 ? 1 : U.localeCompare(R);
      }).map(([U, R]) => ({ type: U, models: R }));
    });
    function B(N) {
      if (!N) return "Unknown";
      const O = 1024 * 1024 * 1024, U = 1024 * 1024;
      return N >= O ? `${(N / O).toFixed(1)} GB` : N >= U ? `${(N / U).toFixed(0)} MB` : `${(N / 1024).toFixed(0)} KB`;
    }
    function E(N) {
      p.value = N.hash || N.filename;
    }
    async function P() {
      m.value = !0, v.value = null;
      try {
        const N = await n();
        await oe(), N.changes > 0 && console.log(`Scan complete: ${N.changes} changes detected`);
      } catch (N) {
        v.value = N instanceof Error ? N.message : "Failed to scan models";
      } finally {
        m.value = !1;
      }
    }
    async function L() {
      if (b.value.trim()) {
        T.value = !0, v.value = null;
        try {
          const N = await i(b.value.trim());
          I.value = N.path, k.value = !1, b.value = "", await oe(), console.log(`Directory changed: ${N.models_indexed} models indexed`), c("refresh");
        } catch (N) {
          v.value = N instanceof Error ? N.message : "Failed to change directory";
        } finally {
          T.value = !1;
        }
      }
    }
    async function oe() {
      d.value = !0, v.value = null;
      try {
        u.value = await o();
      } catch (N) {
        v.value = N instanceof Error ? N.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function X() {
      try {
        const N = await l();
        I.value = N.path;
      } catch {
      }
    }
    return Xe(() => {
      oe(), X();
    }), (N, O) => (a(), r(j, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: O[2] || (O[2] = (U) => w.value = !0)
          }, {
            actions: h(() => [
              C(le, {
                variant: "primary",
                size: "sm",
                disabled: m.value,
                onClick: P
              }, {
                default: h(() => [
                  $(f(m.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(le, {
                variant: "primary",
                size: "sm",
                onClick: O[0] || (O[0] = (U) => k.value = !0)
              }, {
                default: h(() => [...O[11] || (O[11] = [
                  $(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              C(le, {
                variant: "primary",
                size: "sm",
                onClick: O[1] || (O[1] = (U) => M.value = !0)
              }, {
                default: h(() => [...O[12] || (O[12] = [
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
        search: h(() => [
          x.value ? (a(), r("div", S_, [
            t("div", I_, [
              t("span", E_, f(x.value.message), 1),
              t("span", T_, f(x.value.current) + "/" + f(x.value.total), 1)
            ]),
            t("div", P_, [
              t("div", {
                class: "progress-fill",
                style: qt({ width: `${x.value.current / x.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          C($o, {
            modelValue: g.value,
            "onUpdate:modelValue": O[3] || (O[3] = (U) => g.value = U),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || x.value ? (a(), D(Ps, {
            key: 0,
            message: x.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (a(), D(Rs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: oe
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            u.value.length ? (a(), D(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(u.value.length) + " models • " + f(B(S.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(j, null, he(K.value, (U) => (a(), D(lt, {
              key: U.type,
              title: U.type.toUpperCase(),
              count: U.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (a(!0), r(j, null, he(U.models, (R) => (a(), D(Et, {
                  key: R.sha256 || R.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...O[13] || (O[13] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(f(R.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(B(R.size)), 1)
                  ]),
                  details: h(() => [
                    C(dt, {
                      label: "Hash:",
                      value: R.hash ? R.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(le, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => E(R)
                    }, {
                      default: h(() => [...O[14] || (O[14] = [
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
            H.value.length ? y("", !0) : (a(), D(ns, {
              key: 1,
              icon: "📭",
              message: g.value ? `No models match '${g.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      C(as, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: O[4] || (O[4] = (U) => w.value = !1)
      }, {
        content: h(() => [...O[15] || (O[15] = [
          t("p", null, [
            $(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            $(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), D(ol, {
        key: 0,
        identifier: p.value,
        onClose: O[5] || (O[5] = (U) => p.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (a(), D(Ct, { to: "body" }, [
        k.value ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: O[9] || (O[9] = it((U) => k.value = !1, ["self"]))
        }, [
          t("div", R_, [
            t("div", M_, [
              O[16] || (O[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: O[6] || (O[6] = (U) => k.value = !1)
              }, "✕")
            ]),
            t("div", D_, [
              t("div", L_, [
                O[17] || (O[17] = t("label", null, "Current Directory", -1)),
                t("code", O_, f(I.value || "Not set"), 1)
              ]),
              t("div", A_, [
                O[18] || (O[18] = t("label", null, "New Directory Path", -1)),
                C(Tt, {
                  modelValue: b.value,
                  "onUpdate:modelValue": O[7] || (O[7] = (U) => b.value = U),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              O[19] || (O[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", U_, [
              C(De, {
                variant: "secondary",
                onClick: O[8] || (O[8] = (U) => k.value = !1)
              }, {
                default: h(() => [...O[20] || (O[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(De, {
                variant: "primary",
                disabled: !b.value.trim() || T.value,
                loading: T.value,
                onClick: L
              }, {
                default: h(() => [
                  $(f(T.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      C(x_, {
        show: M.value,
        onClose: O[10] || (O[10] = (U) => M.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), z_ = /* @__PURE__ */ me(N_, [["__scopeId", "data-v-3705114c"]]), F_ = { class: "node-details" }, B_ = { class: "status-row" }, V_ = {
  key: 0,
  class: "detail-row"
}, W_ = { class: "value" }, G_ = { class: "detail-row" }, j_ = { class: "value" }, H_ = {
  key: 1,
  class: "detail-row"
}, K_ = { class: "value mono" }, q_ = {
  key: 2,
  class: "detail-row"
}, Y_ = ["href"], J_ = {
  key: 3,
  class: "detail-row"
}, X_ = { class: "value mono small" }, Q_ = { class: "detail-row" }, Z_ = {
  key: 0,
  class: "value"
}, ek = {
  key: 1,
  class: "workflow-list"
}, tk = /* @__PURE__ */ ue({
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
    return (u, d) => (a(), D(mt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (m) => n("close"))
    }, {
      body: h(() => [
        t("div", F_, [
          t("div", B_, [
            d[2] || (d[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Te(["status-badge", l.value])
            }, f(i.value), 3)
          ]),
          e.node.version ? (a(), r("div", V_, [
            d[3] || (d[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", W_, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          t("div", G_, [
            d[4] || (d[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", j_, f(c.value), 1)
          ]),
          e.node.registry_id ? (a(), r("div", H_, [
            d[5] || (d[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", K_, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), r("div", q_, [
            d[7] || (d[7] = t("span", { class: "label" }, "Repository:", -1)),
            t("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              $(f(e.node.repository) + " ", 1),
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
            ], 8, Y_)
          ])) : y("", !0),
          e.node.download_url ? (a(), r("div", J_, [
            d[8] || (d[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", X_, f(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", Q_, [
            d[9] || (d[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), r("span", Z_, " Not used in any workflows ")) : (a(), r("div", ek, [
              (a(!0), r(j, null, he(e.node.used_in_workflows, (m) => (a(), r("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        C(De, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (m) => n("close"))
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
}), sk = /* @__PURE__ */ me(tk, [["__scopeId", "data-v-b342f626"]]), ok = { class: "dialog-message" }, nk = {
  key: 0,
  class: "dialog-details"
}, ak = {
  key: 1,
  class: "dialog-warning"
}, lk = /* @__PURE__ */ ue({
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
    return (s, o) => (a(), D(mt, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => s.$emit("cancel"))
    }, {
      body: h(() => [
        t("p", ok, f(e.message), 1),
        e.details && e.details.length ? (a(), r("div", nk, [
          (a(!0), r(j, null, he(e.details, (n, l) => (a(), r("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), r("p", ak, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          $(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        C(De, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => s.$emit("cancel"))
        }, {
          default: h(() => [
            $(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), D(De, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => s.$emit("secondary"))
        }, {
          default: h(() => [
            $(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        C(De, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (n) => s.$emit("confirm"))
        }, {
          default: h(() => [
            $(f(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), nl = /* @__PURE__ */ me(lk, [["__scopeId", "data-v-3670b9f5"]]), ik = { class: "mismatch-warning" }, rk = { class: "version-mismatch" }, ck = { class: "version-actual" }, uk = { class: "version-expected" }, dk = { key: 0 }, fk = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, mk = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, vk = /* @__PURE__ */ ue({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getNodes: l, trackNodeAsDev: i, installNode: c, uninstallNode: u } = tt(), d = _({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), m = _(!1), v = _(null), g = _(""), w = _(!1), p = _(null), k = _(null), I = F(() => {
      if (!g.value.trim()) return d.value.nodes;
      const X = g.value.toLowerCase();
      return d.value.nodes.filter(
        (N) => {
          var O, U;
          return N.name.toLowerCase().includes(X) || ((O = N.description) == null ? void 0 : O.toLowerCase().includes(X)) || ((U = N.repository) == null ? void 0 : U.toLowerCase().includes(X));
        }
      );
    }), b = F(
      () => I.value.filter((X) => X.installed && X.tracked)
    ), T = F(
      () => I.value.filter((X) => !X.installed && X.tracked)
    ), M = F(
      () => I.value.filter((X) => X.installed && !X.tracked)
    );
    function x(X) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[X] || X;
    }
    const S = F(() => o.versionMismatches.length > 0);
    function H(X) {
      return !X.used_in_workflows || X.used_in_workflows.length === 0 ? "Not used in any workflows" : X.used_in_workflows.length === 1 ? X.used_in_workflows[0] : `${X.used_in_workflows.length} workflows`;
    }
    function K(X) {
      p.value = X;
    }
    function B() {
      n("open-node-manager");
    }
    function E(X) {
      k.value = {
        title: "Track as Development Node",
        message: `Track "${X}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          k.value = null;
          try {
            m.value = !0;
            const N = await i(X);
            N.status === "success" ? (n("toast", `✓ Node "${X}" tracked as development`, "success"), await oe()) : n("toast", `Failed to track node: ${N.message || "Unknown error"}`, "error");
          } catch (N) {
            n("toast", `Error tracking node: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function P(X) {
      k.value = {
        title: "Remove Untracked Node",
        message: `Remove "${X}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          k.value = null;
          try {
            m.value = !0;
            const N = await u(X);
            N.status === "success" ? (n("toast", `✓ Node "${X}" removed`, "success"), await oe()) : n("toast", `Failed to remove node: ${N.message || "Unknown error"}`, "error");
          } catch (N) {
            n("toast", `Error removing node: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function L(X) {
      k.value = {
        title: "Install Missing Node",
        message: `Install "${X}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          k.value = null;
          try {
            m.value = !0;
            const N = await c(X);
            N.status === "success" ? (n("toast", `✓ Node "${X}" installed`, "success"), await oe()) : n("toast", `Failed to install node: ${N.message || "Unknown error"}`, "error");
          } catch (N) {
            n("toast", `Error installing node: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    async function oe() {
      m.value = !0, v.value = null;
      try {
        d.value = await l();
      } catch (X) {
        v.value = X instanceof Error ? X.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return Xe(oe), (X, N) => (a(), r(j, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: N[0] || (N[0] = (O) => w.value = !0)
          }, {
            actions: h(() => [
              C(le, {
                variant: "primary",
                size: "sm",
                onClick: B
              }, {
                default: h(() => [...N[7] || (N[7] = [
                  $(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          C($o, {
            modelValue: g.value,
            "onUpdate:modelValue": N[1] || (N[1] = (O) => g.value = O),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          m.value ? (a(), D(Ps, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (a(), D(Rs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: oe
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            d.value.total_count ? (a(), D(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(f(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (a(), r(j, { key: 0 }, [
                  $(" • " + f(d.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                d.value.untracked_count ? (a(), r(j, { key: 1 }, [
                  $(" • " + f(d.value.untracked_count) + " untracked", 1)
                ], 64)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            S.value ? (a(), D(lt, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                t("div", ik, [
                  N[8] || (N[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), r(j, null, he(e.versionMismatches, (O) => (a(), D(Et, {
                  key: O.name,
                  status: "warning"
                }, {
                  icon: h(() => [...N[9] || (N[9] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(O.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", rk, [
                      t("span", ck, f(O.actual), 1),
                      N[10] || (N[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", uk, f(O.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    C(le, {
                      variant: "warning",
                      size: "sm",
                      onClick: N[2] || (N[2] = (U) => n("repair-environment"))
                    }, {
                      default: h(() => [...N[11] || (N[11] = [
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
            M.value.length ? (a(), D(lt, {
              key: 2,
              title: "UNTRACKED",
              count: M.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(j, null, he(M.value, (O) => (a(), D(Et, {
                  key: O.name,
                  status: "warning"
                }, {
                  icon: h(() => [...N[12] || (N[12] = [
                    $("?", -1)
                  ])]),
                  title: h(() => [
                    $(f(O.name), 1)
                  ]),
                  subtitle: h(() => [...N[13] || (N[13] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    C(dt, {
                      label: "Used by:",
                      value: H(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(le, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => K(O)
                    }, {
                      default: h(() => [...N[14] || (N[14] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(le, {
                      variant: "primary",
                      size: "sm",
                      onClick: (U) => E(O.name)
                    }, {
                      default: h(() => [...N[15] || (N[15] = [
                        $(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(le, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (U) => P(O.name)
                    }, {
                      default: h(() => [...N[16] || (N[16] = [
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
            b.value.length ? (a(), D(lt, {
              key: 3,
              title: "INSTALLED",
              count: b.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(j, null, he(b.value, (O) => (a(), D(Et, {
                  key: O.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    $(f(O.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    $(f(O.name), 1)
                  ]),
                  subtitle: h(() => [
                    O.version ? (a(), r("span", dk, f(O.source === "development" ? "" : "v") + f(O.version), 1)) : (a(), r("span", fk, "version unknown")),
                    t("span", mk, " • " + f(x(O.source)), 1)
                  ]),
                  details: h(() => [
                    C(dt, {
                      label: "Used by:",
                      value: H(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(le, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => K(O)
                    }, {
                      default: h(() => [...N[17] || (N[17] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(le, {
                      variant: "secondary",
                      size: "xs",
                      onClick: B
                    }, {
                      default: h(() => [...N[18] || (N[18] = [
                        $(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            T.value.length ? (a(), D(lt, {
              key: 4,
              title: "MISSING",
              count: T.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(j, null, he(T.value, (O) => (a(), D(Et, {
                  key: O.name,
                  status: "missing"
                }, {
                  icon: h(() => [...N[19] || (N[19] = [
                    $("!", -1)
                  ])]),
                  title: h(() => [
                    $(f(O.name), 1)
                  ]),
                  subtitle: h(() => [...N[20] || (N[20] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    C(dt, {
                      label: "Required by:",
                      value: H(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(le, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => K(O)
                    }, {
                      default: h(() => [...N[21] || (N[21] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(le, {
                      variant: "primary",
                      size: "sm",
                      onClick: (U) => L(O.name)
                    }, {
                      default: h(() => [...N[22] || (N[22] = [
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
            !b.value.length && !T.value.length && !M.value.length ? (a(), D(ns, {
              key: 5,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      C(as, {
        show: w.value,
        title: "About Custom Nodes",
        onClose: N[4] || (N[4] = (O) => w.value = !1)
      }, {
        content: h(() => [...N[23] || (N[23] = [
          t("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Installed:"),
            $(" Tracked nodes available in this environment"),
            t("br"),
            t("strong", null, "Missing:"),
            $(" Tracked nodes that need to be installed"),
            t("br"),
            t("strong", null, "Untracked:"),
            $(" Nodes on filesystem but not in manifest ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: h(() => [
          C(le, {
            variant: "primary",
            onClick: N[3] || (N[3] = (O) => w.value = !1)
          }, {
            default: h(() => [...N[24] || (N[24] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), D(sk, {
        key: 0,
        node: p.value,
        onClose: N[5] || (N[5] = (O) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      k.value ? (a(), D(nl, {
        key: 1,
        title: k.value.title,
        message: k.value.message,
        warning: k.value.warning,
        "confirm-label": k.value.confirmLabel,
        destructive: k.value.destructive,
        onConfirm: k.value.onConfirm,
        onCancel: N[6] || (N[6] = (O) => k.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), pk = /* @__PURE__ */ me(vk, [["__scopeId", "data-v-1555a802"]]);
function Er(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const gk = { class: "remote-url-display" }, hk = ["title"], yk = ["title"], wk = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, _k = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, kk = /* @__PURE__ */ ue({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = _(!1), n = F(() => {
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
    return (i, c) => (a(), r("div", gk, [
      t("span", {
        class: "url-text",
        title: e.url
      }, f(n.value), 9, hk),
      t("button", {
        class: Te(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), r("svg", _k, [...c[1] || (c[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), r("svg", wk, [...c[0] || (c[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, yk)
    ]));
  }
}), bk = /* @__PURE__ */ me(kk, [["__scopeId", "data-v-7768a58d"]]), $k = { class: "remote-title" }, Ck = {
  key: 0,
  class: "default-badge"
}, xk = {
  key: 1,
  class: "sync-badge"
}, Sk = {
  key: 0,
  class: "ahead"
}, Ik = {
  key: 1,
  class: "behind"
}, Ek = {
  key: 1,
  class: "synced"
}, Tk = ["href"], Pk = {
  key: 1,
  class: "remote-url-text"
}, Rk = /* @__PURE__ */ ue({
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
    return (m, v) => (a(), D(Et, {
      status: n.value ? "synced" : void 0
    }, so({
      icon: h(() => [
        $(f(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        t("div", $k, [
          t("span", null, f(e.remote.name), 1),
          n.value ? (a(), r("span", Ck, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", xk, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", Sk, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", Ik, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", Ek, "✓ synced"))
          ])) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        u.value ? (a(), r("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: v[0] || (v[0] = it(() => {
          }, ["stop"]))
        }, f(d.value), 9, Tk)) : (a(), r("span", Pk, f(d.value), 1))
      ]),
      actions: h(() => [
        C(le, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: v[1] || (v[1] = (g) => m.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...v[6] || (v[6] = [
            $(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        C(le, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[2] || (v[2] = (g) => m.$emit("pull", e.remote.name))
        }, {
          default: h(() => [
            $(" Pull" + f(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        C(le, {
          variant: i.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[3] || (v[3] = (g) => m.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            $(" Push" + f(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        C(le, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (g) => m.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            $(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? y("", !0) : (a(), D(le, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[5] || (v[5] = (g) => m.$emit("remove", e.remote.name))
        }, {
          default: h(() => [...v[8] || (v[8] = [
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
          e.remote.push_url !== e.remote.fetch_url ? (a(), D(dt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              C(bk, {
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
}), Mk = /* @__PURE__ */ me(Rk, [["__scopeId", "data-v-8310f3a8"]]), Dk = ["for"], Lk = {
  key: 0,
  class: "base-form-field-required"
}, Ok = { class: "base-form-field-input" }, Ak = {
  key: 1,
  class: "base-form-field-error"
}, Uk = {
  key: 2,
  class: "base-form-field-hint"
}, Nk = /* @__PURE__ */ ue({
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
      class: Te(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), r("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        $(f(e.label) + " ", 1),
        e.required ? (a(), r("span", Lk, "*")) : y("", !0)
      ], 8, Dk)) : y("", !0),
      t("div", Ok, [
        Ke(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), r("span", Ak, f(e.error), 1)) : e.hint ? (a(), r("span", Uk, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), va = /* @__PURE__ */ me(Nk, [["__scopeId", "data-v-9a1cf296"]]), zk = { class: "remote-form" }, Fk = { class: "form-header" }, Bk = { class: "form-body" }, Vk = {
  key: 0,
  class: "form-error"
}, Wk = { class: "form-actions" }, Gk = /* @__PURE__ */ ue({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = _({
      name: o.remoteName,
      fetchUrl: o.fetchUrl,
      pushUrl: o.pushUrl
    }), i = _(!1), c = _(null);
    yt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
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
    return (m, v) => (a(), r("div", zk, [
      t("div", Fk, [
        C(Ut, null, {
          default: h(() => [
            $(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", Bk, [
        C(va, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            C(Tt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (g) => l.value.name = g),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        C(va, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            C(Tt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (g) => l.value.fetchUrl = g),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        C(va, { label: "Push URL (optional)" }, {
          default: h(() => [
            C(Tt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (g) => l.value.pushUrl = g),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (a(), r("div", Vk, f(c.value), 1)) : y("", !0)
      ]),
      t("div", Wk, [
        C(le, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: i.value,
          onClick: d
        }, {
          default: h(() => [
            $(f(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        C(le, {
          variant: "ghost",
          size: "md",
          onClick: v[3] || (v[3] = (g) => m.$emit("cancel"))
        }, {
          default: h(() => [...v[4] || (v[4] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), jk = /* @__PURE__ */ me(Gk, [["__scopeId", "data-v-56021b18"]]), Hk = { class: "conflict-summary-box" }, Kk = { class: "summary-header" }, qk = { class: "summary-text" }, Yk = { key: 0 }, Jk = {
  key: 1,
  class: "all-resolved"
}, Xk = { class: "summary-progress" }, Qk = { class: "progress-bar" }, Zk = { class: "progress-text" }, eb = /* @__PURE__ */ ue({
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
    return (n, l) => (a(), r("div", Hk, [
      t("div", Kk, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", qk, [
          t("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), r("p", Yk, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (a(), r("p", Jk, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      t("div", Xk, [
        t("div", Qk, [
          t("div", {
            class: "progress-fill",
            style: qt({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", Zk, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), tb = /* @__PURE__ */ me(eb, [["__scopeId", "data-v-4e9e6cc9"]]), sb = { class: "modal-header" }, ob = { class: "modal-title" }, nb = { class: "modal-body" }, ab = {
  key: 0,
  class: "error-box"
}, lb = {
  key: 0,
  class: "error-hint"
}, ib = {
  key: 1,
  class: "loading-state"
}, rb = { class: "commit-summary" }, cb = {
  key: 0,
  class: "changes-section"
}, ub = {
  key: 0,
  class: "change-group",
  open: ""
}, db = { class: "change-count" }, fb = { class: "change-list" }, mb = {
  key: 0,
  class: "conflict-badge"
}, vb = {
  key: 1,
  class: "change-group"
}, pb = { class: "change-count" }, gb = { class: "change-list" }, hb = {
  key: 2,
  class: "change-group"
}, yb = { class: "change-count" }, wb = { class: "change-list" }, _b = {
  key: 2,
  class: "strategy-section"
}, kb = { class: "radio-group" }, bb = { class: "radio-option" }, $b = { class: "radio-option" }, Cb = { class: "radio-option" }, xb = {
  key: 3,
  class: "up-to-date"
}, Sb = { class: "modal-actions" }, Ql = "comfygit.pullModelStrategy", Ib = /* @__PURE__ */ ue({
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
    const o = e, n = s, l = _(localStorage.getItem(Ql) || "skip");
    yt(l, (b) => {
      localStorage.setItem(Ql, b);
    });
    const i = F(() => {
      var b;
      return ((b = o.error) == null ? void 0 : b.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = F(() => {
      if (!o.preview) return 0;
      const b = o.preview.changes.workflows;
      return b.added.length + b.modified.length + b.deleted.length;
    }), u = F(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = F(() => {
      var b;
      return c.value > 0 || u.value > 0 || (((b = o.preview) == null ? void 0 : b.changes.models.count) || 0) > 0;
    }), m = F(() => o.preview && Er(o.preview) ? o.preview : null), v = F(() => {
      var b;
      return ((b = m.value) == null ? void 0 : b.workflow_conflicts.length) ?? 0;
    }), g = F(() => {
      var b;
      return ((b = o.conflictResolutions) == null ? void 0 : b.size) ?? 0;
    }), w = F(
      () => v.value > 0 && g.value === v.value
    ), p = F(() => !(!o.preview || o.preview.has_uncommitted_changes || m.value && !w.value));
    function k(b) {
      if (!m.value) return !1;
      const T = b.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((M) => M.name === T);
    }
    function I(b) {
      const T = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: b, resolutions: T });
    }
    return (b, T) => {
      var M, x;
      return a(), D(Ct, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: T[11] || (T[11] = (S) => b.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: T[10] || (T[10] = it(() => {
            }, ["stop"]))
          }, [
            t("div", sb, [
              t("h3", ob, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: T[0] || (T[0] = (S) => b.$emit("close"))
              }, "✕")
            ]),
            t("div", nb, [
              e.error ? (a(), r("div", ab, [
                T[13] || (T[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  T[12] || (T[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, f(e.error), 1),
                  i.value ? (a(), r("p", lb, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), r("div", ib, [...T[14] || (T[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (M = e.preview) != null && M.has_uncommitted_changes ? (a(), r(j, { key: 2 }, [
                T[15] || (T[15] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "UNCOMMITTED CHANGES"),
                    t("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                T[16] || (T[16] = t("div", { class: "options-section" }, [
                  t("p", null, [
                    t("strong", null, "Options:")
                  ]),
                  t("ul", null, [
                    t("li", null, "Commit your changes first (recommended)"),
                    t("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (a(), r(j, { key: 3 }, [
                t("div", rb, [
                  T[17] || (T[17] = t("span", { class: "icon" }, "📥", -1)),
                  $(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                d.value ? (a(), r("div", cb, [
                  T[21] || (T[21] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (a(), r("details", ub, [
                    t("summary", null, [
                      T[18] || (T[18] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", db, f(c.value) + " changes", 1)
                    ]),
                    t("div", fb, [
                      (a(!0), r(j, null, he(e.preview.changes.workflows.added, (S) => (a(), r("div", {
                        key: "a-" + S,
                        class: "change-item add"
                      }, " + " + f(S), 1))), 128)),
                      (a(!0), r(j, null, he(e.preview.changes.workflows.modified, (S) => (a(), r("div", {
                        key: "m-" + S,
                        class: "change-item modify"
                      }, [
                        $(" ~ " + f(S) + " ", 1),
                        k(S) ? (a(), r("span", mb, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), r(j, null, he(e.preview.changes.workflows.deleted, (S) => (a(), r("div", {
                        key: "d-" + S,
                        class: "change-item delete"
                      }, " - " + f(S), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (a(), r("details", vb, [
                    t("summary", null, [
                      T[19] || (T[19] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", pb, f(u.value) + " to install", 1)
                    ]),
                    t("div", gb, [
                      (a(!0), r(j, null, he(e.preview.changes.nodes.to_install, (S) => (a(), r("div", {
                        key: S,
                        class: "change-item add"
                      }, " + " + f(S), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), r("details", hb, [
                    t("summary", null, [
                      T[20] || (T[20] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", yb, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", wb, [
                      (a(!0), r(j, null, he(e.preview.changes.models.referenced, (S) => (a(), r("div", {
                        key: S,
                        class: "change-item"
                      }, f(S), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (a(), D(tb, {
                  key: 1,
                  "conflict-count": v.value,
                  "resolved-count": g.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), r("div", _b, [
                  T[26] || (T[26] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", kb, [
                    t("label", bb, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": T[1] || (T[1] = (S) => l.value = S),
                        value: "all"
                      }, null, 512), [
                        [Zt, l.value]
                      ]),
                      T[22] || (T[22] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", $b, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": T[2] || (T[2] = (S) => l.value = S),
                        value: "required"
                      }, null, 512), [
                        [Zt, l.value]
                      ]),
                      T[23] || (T[23] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", Cb, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": T[3] || (T[3] = (S) => l.value = S),
                        value: "skip"
                      }, null, 512), [
                        [Zt, l.value]
                      ]),
                      T[24] || (T[24] = t("span", null, "Skip model downloads", -1)),
                      T[25] || (T[25] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  T[27] || (T[27] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (a(), r("div", xb, [
                  T[28] || (T[28] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", Sb, [
              C(le, {
                variant: "secondary",
                onClick: T[4] || (T[4] = (S) => b.$emit("close"))
              }, {
                default: h(() => [...T[29] || (T[29] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), r(j, { key: 0 }, [
                C(le, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: T[5] || (T[5] = (S) => I(!1))
                }, {
                  default: h(() => [...T[30] || (T[30] = [
                    $(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                C(le, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: T[6] || (T[6] = (S) => I(!0))
                }, {
                  default: h(() => [...T[31] || (T[31] = [
                    $(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (x = e.preview) != null && x.has_uncommitted_changes ? (a(), D(le, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: T[7] || (T[7] = (S) => I(!0))
              }, {
                default: h(() => [...T[32] || (T[32] = [
                  $(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), r(j, { key: 2 }, [
                m.value && !w.value ? (a(), D(le, {
                  key: 0,
                  variant: "primary",
                  onClick: T[8] || (T[8] = (S) => n("openConflictResolution"))
                }, {
                  default: h(() => [
                    $(" Resolve Conflicts (" + f(g.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), D(le, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !p.value,
                  onClick: T[9] || (T[9] = (S) => I(!1))
                }, {
                  default: h(() => [...T[33] || (T[33] = [
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
}), Eb = /* @__PURE__ */ me(Ib, [["__scopeId", "data-v-300c7b2f"]]), Tb = { class: "modal-header" }, Pb = { class: "modal-title" }, Rb = { class: "modal-body" }, Mb = {
  key: 0,
  class: "loading-state"
}, Db = {
  key: 1,
  class: "warning-box"
}, Lb = {
  key: 0,
  class: "commits-section"
}, Ob = { class: "commit-list" }, Ab = { class: "commit-hash" }, Ub = { class: "commit-message" }, Nb = { class: "commit-date" }, zb = { class: "force-option" }, Fb = { class: "checkbox-option" }, Bb = { class: "commit-summary" }, Vb = { key: 0 }, Wb = { key: 1 }, Gb = {
  key: 0,
  class: "info-box"
}, jb = {
  key: 1,
  class: "commits-section"
}, Hb = { class: "commit-list" }, Kb = { class: "commit-hash" }, qb = { class: "commit-message" }, Yb = { class: "commit-date" }, Jb = {
  key: 2,
  class: "up-to-date"
}, Xb = { class: "modal-actions" }, Qb = /* @__PURE__ */ ue({
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
    const o = s, n = _(!1);
    function l(i) {
      o("push", { force: i });
    }
    return (i, c) => {
      var u, d, m;
      return a(), D(Ct, { to: "body" }, [
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
            t("div", Tb, [
              t("h3", Pb, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: c[0] || (c[0] = (v) => i.$emit("close"))
              }, "✕")
            ]),
            t("div", Rb, [
              e.loading ? (a(), r("div", Mb, [...c[8] || (c[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (a(), r("div", Db, [...c[9] || (c[9] = [
                t("span", { class: "warning-icon" }, "⚠", -1),
                t("div", null, [
                  t("strong", null, "UNCOMMITTED CHANGES"),
                  t("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = e.preview) != null && d.remote_has_new_commits ? (a(), r(j, { key: 2 }, [
                c[13] || (c[13] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "REMOTE HAS NEW COMMITS"),
                    t("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (a(), r("div", Lb, [
                  c[10] || (c[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", Ob, [
                    (a(!0), r(j, null, he(e.preview.commits, (v) => (a(), r("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", Ab, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", Ub, f(v.message), 1),
                      t("span", Nb, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", zb, [
                  t("label", Fb, [
                    qe(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": c[1] || (c[1] = (v) => n.value = v)
                    }, null, 512), [
                      [en, n.value]
                    ]),
                    c[11] || (c[11] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  c[12] || (c[12] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (a(), r(j, { key: 3 }, [
                t("div", Bb, [
                  c[14] || (c[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (a(), r("span", Vb, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), r("span", Wb, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (a(), r("div", Gb, [...c[15] || (c[15] = [
                  t("span", { class: "info-icon" }, "ℹ", -1),
                  t("span", null, "This will create the remote branch for the first time.", -1)
                ])])) : y("", !0),
                e.preview.commits_ahead > 0 ? (a(), r("div", jb, [
                  c[16] || (c[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", Hb, [
                    (a(!0), r(j, null, he(e.preview.commits, (v) => (a(), r("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", Kb, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", qb, f(v.message), 1),
                      t("span", Yb, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (a(), r("div", Jb, [
                  c[17] || (c[17] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", Xb, [
              C(le, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (v) => i.$emit("close"))
              }, {
                default: h(() => [...c[18] || (c[18] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = e.preview) != null && m.remote_has_new_commits ? (a(), r(j, { key: 0 }, [
                C(le, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (v) => i.$emit("pull-first"))
                }, {
                  default: h(() => [...c[19] || (c[19] = [
                    $(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                C(le, {
                  variant: "destructive",
                  disabled: !n.value,
                  loading: e.pushing,
                  onClick: c[4] || (c[4] = (v) => l(!0))
                }, {
                  default: h(() => [...c[20] || (c[20] = [
                    $(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), D(le, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: c[5] || (c[5] = (v) => l(!1))
              }, {
                default: h(() => [...c[21] || (c[21] = [
                  $(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : y("", !0)
            ])
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Zb = /* @__PURE__ */ me(Qb, [["__scopeId", "data-v-ae86b6a7"]]), e2 = { class: "resolution-choice-group" }, t2 = ["disabled"], s2 = ["disabled"], o2 = /* @__PURE__ */ ue({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("div", e2, [
      t("button", {
        class: Te(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, t2),
      t("button", {
        class: Te(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, s2)
    ]));
  }
}), n2 = /* @__PURE__ */ me(o2, [["__scopeId", "data-v-985715ed"]]), a2 = { class: "conflict-header" }, l2 = { class: "conflict-info" }, i2 = { class: "workflow-name" }, r2 = { class: "conflict-description" }, c2 = {
  key: 0,
  class: "resolved-badge"
}, u2 = { class: "resolved-text" }, d2 = { class: "conflict-hashes" }, f2 = { class: "hash-item" }, m2 = { class: "hash-item" }, v2 = { class: "conflict-actions" }, p2 = /* @__PURE__ */ ue({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = _(o.resolution);
    yt(() => o.resolution, (d) => {
      l.value = d;
    }), yt(l, (d) => {
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
      var v, g;
      return a(), r("div", {
        class: Te(["conflict-item", { resolved: i.value }])
      }, [
        t("div", a2, [
          m[2] || (m[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", l2, [
            t("code", i2, f(e.conflict.name) + ".json", 1),
            t("div", r2, f(c.value), 1)
          ]),
          i.value ? (a(), r("div", c2, [
            m[1] || (m[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", u2, f(u.value), 1)
          ])) : y("", !0)
        ]),
        t("div", d2, [
          t("span", f2, [
            m[3] || (m[3] = $("Your: ", -1)),
            t("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", m2, [
            m[4] || (m[4] = $("Theirs: ", -1)),
            t("code", null, f(((g = e.conflict.target_hash) == null ? void 0 : g.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", v2, [
          C(n2, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), g2 = /* @__PURE__ */ me(p2, [["__scopeId", "data-v-506d3bbf"]]), h2 = { class: "resolution-content" }, y2 = {
  key: 0,
  class: "error-box"
}, w2 = { class: "resolution-header" }, _2 = { class: "header-stats" }, k2 = { class: "stat" }, b2 = { class: "stat-value" }, $2 = { class: "stat resolved" }, C2 = { class: "stat-value" }, x2 = {
  key: 0,
  class: "stat pending"
}, S2 = { class: "stat-value" }, I2 = { class: "conflicts-list" }, E2 = {
  key: 1,
  class: "all-resolved-message"
}, T2 = /* @__PURE__ */ ue({
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
    function g() {
      n("apply");
    }
    return (w, p) => (a(), D(mt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        t("div", h2, [
          e.error ? (a(), r("div", y2, [
            p[1] || (p[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              p[0] || (p[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", w2, [
            t("div", _2, [
              t("div", k2, [
                t("span", b2, f(e.workflowConflicts.length), 1),
                p[2] || (p[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", $2, [
                t("span", C2, f(l.value), 1),
                p[3] || (p[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              i.value > 0 ? (a(), r("div", x2, [
                t("span", S2, f(i.value), 1),
                p[4] || (p[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            p[5] || (p[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", I2, [
            (a(!0), r(j, null, he(e.workflowConflicts, (k) => (a(), D(g2, {
              key: k.name,
              conflict: k,
              resolution: d(k.name),
              onResolve: (I) => m(k.name, I)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (a(), r("div", E2, [
            p[6] || (p[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + f(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        C(De, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...p[7] || (p[7] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = t("div", { class: "footer-spacer" }, null, -1)),
        C(De, {
          variant: "primary",
          disabled: !c.value || e.validating,
          loading: e.validating,
          onClick: g
        }, {
          default: h(() => [
            $(f(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), P2 = /* @__PURE__ */ me(T2, [["__scopeId", "data-v-c58d150d"]]), R2 = { class: "node-conflict-item" }, M2 = { class: "node-header" }, D2 = { class: "node-name" }, L2 = { class: "node-id" }, O2 = { class: "version-comparison" }, A2 = { class: "version yours" }, U2 = { class: "version theirs" }, N2 = { class: "chosen-version" }, z2 = { class: "chosen" }, F2 = { class: "chosen-reason" }, B2 = { class: "affected-workflows" }, V2 = { class: "wf-source" }, W2 = { class: "wf-version" }, G2 = /* @__PURE__ */ ue({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (a(), r("div", R2, [
      t("div", M2, [
        t("code", D2, f(e.conflict.node_name), 1),
        t("span", L2, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      t("div", O2, [
        t("div", A2, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", U2, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      t("div", N2, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", z2, f(e.conflict.chosen_version), 1),
        t("span", F2, f(e.conflict.chosen_reason), 1)
      ]),
      t("details", B2, [
        t("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (a(!0), r(j, null, he(e.conflict.affected_workflows, (n) => (a(), r("li", {
            key: n.name
          }, [
            t("code", null, f(n.name), 1),
            t("span", V2, "(" + f(n.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", W2, "needs v" + f(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), j2 = /* @__PURE__ */ me(G2, [["__scopeId", "data-v-8b626725"]]), H2 = { class: "validation-content" }, K2 = {
  key: 0,
  class: "compatible-message"
}, q2 = { class: "conflicts-list" }, Y2 = {
  key: 2,
  class: "warnings-section"
}, J2 = /* @__PURE__ */ ue({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = F(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (i, c) => (a(), D(mt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => n("cancel"))
    }, {
      body: h(() => [
        t("div", H2, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), r("div", K2, [
            c[5] || (c[5] = t("span", { class: "icon" }, "✓", -1)),
            t("div", null, [
              c[4] || (c[4] = t("strong", null, "All clear!", -1)),
              t("p", null, "Your workflow choices are compatible. Ready to " + f(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (a(), r(j, { key: 1 }, [
            c[6] || (c[6] = t("div", { class: "warning-header" }, [
              t("span", { class: "icon" }, "⚠"),
              t("div", null, [
                t("strong", null, "Node Version Differences"),
                t("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            t("div", q2, [
              (a(!0), r(j, null, he(e.validation.node_conflicts, (u) => (a(), D(j2, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (a(), r("div", Y2, [
            c[8] || (c[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (a(!0), r(j, null, he(e.validation.warnings, (u, d) => (a(), r("li", { key: d }, f(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        C(De, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => n("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        C(De, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => n("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            $(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        C(De, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => n("proceed"))
        }, {
          default: h(() => [
            $(f(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), X2 = /* @__PURE__ */ me(J2, [["__scopeId", "data-v-fefd26ed"]]), Q2 = { key: 0 }, Z2 = /* @__PURE__ */ ue({
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
      getPushPreview: g,
      pushToRemote: w,
      validateMerge: p
    } = tt(), k = _([]), I = _(null), b = _({}), T = _(!1), M = _(null), x = _(""), S = _(!1), H = _(null), K = _(!1), B = _("add"), E = _({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), P = F(() => {
      if (!x.value.trim()) return k.value;
      const ke = x.value.toLowerCase();
      return k.value.filter(
        (G) => G.name.toLowerCase().includes(ke) || G.fetch_url.toLowerCase().includes(ke) || G.push_url.toLowerCase().includes(ke)
      );
    });
    async function L() {
      T.value = !0, M.value = null;
      try {
        const ke = await n();
        k.value = ke.remotes, I.value = ke.current_branch_tracking || null, await Promise.all(
          ke.remotes.map(async (G) => {
            const V = await d(G.name);
            V && (b.value[G.name] = V);
          })
        );
      } catch (ke) {
        M.value = ke instanceof Error ? ke.message : "Failed to load remotes";
      } finally {
        T.value = !1;
      }
    }
    function oe() {
      B.value = "add", E.value = { name: "", fetchUrl: "", pushUrl: "" }, K.value = !0;
    }
    function X(ke) {
      const G = k.value.find((V) => V.name === ke);
      G && (B.value = "edit", E.value = {
        name: G.name,
        fetchUrl: G.fetch_url,
        pushUrl: G.push_url
      }, K.value = !0);
    }
    async function N(ke) {
      try {
        B.value === "add" ? await l(ke.name, ke.fetchUrl) : await c(ke.name, ke.fetchUrl, ke.pushUrl || void 0), K.value = !1, await L();
      } catch (G) {
        M.value = G instanceof Error ? G.message : "Operation failed";
      }
    }
    function O() {
      K.value = !1, E.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function U(ke) {
      H.value = ke;
      try {
        await u(ke);
        const G = await d(ke);
        G && (b.value[ke] = G), o("toast", `✓ Fetched from ${ke}`, "success");
      } catch (G) {
        o("toast", G instanceof Error ? G.message : "Fetch failed", "error");
      } finally {
        H.value = null;
      }
    }
    async function R(ke) {
      if (confirm(`Remove remote "${ke}"?`))
        try {
          await i(ke), await L();
        } catch (G) {
          M.value = G instanceof Error ? G.message : "Failed to remove remote";
        }
    }
    function Q() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const Y = _("idle"), ye = F(() => Y.value === "pull_preview"), _e = F(
      () => Y.value === "resolving" || Y.value === "validating"
    ), Le = F(
      () => Y.value === "validation_review" || Y.value === "executing"
    ), Fe = _(!1), ie = _(null), Se = _(!1), we = _(null), ge = _(!1), Ce = _(null), de = _(null), ce = _(/* @__PURE__ */ new Map()), Me = _(null), Re = _(null), A = F(() => Ce.value && Er(Ce.value) ? Ce.value : null);
    async function W(ke) {
      we.value = ke, Y.value = "pull_preview", ge.value = !0, Ce.value = null, de.value = null;
      try {
        Ce.value = await m(ke);
      } catch (G) {
        de.value = G instanceof Error ? G.message : "Failed to load pull preview";
      } finally {
        ge.value = !1;
      }
    }
    function te() {
      Y.value = "idle", Ce.value = null, de.value = null, we.value = null;
    }
    async function ae(ke) {
      if (!we.value) return;
      Y.value = "executing", de.value = null;
      const G = we.value;
      try {
        const V = await v(G, ke);
        if (V.rolled_back) {
          de.value = `Pull failed and was rolled back: ${V.error || "Unknown error"}`, Y.value = "pull_preview";
          return;
        }
        Pe(), Y.value = "idle", o("toast", `✓ Pulled from ${G}`, "success"), await L();
      } catch (V) {
        de.value = V instanceof Error ? V.message : "Pull failed", Y.value = "pull_preview";
      }
    }
    function ve() {
      A.value && (Y.value = "resolving", Re.value = null);
    }
    function pe(ke, G) {
      ce.value.set(ke, { name: ke, resolution: G });
    }
    function Ie() {
      Y.value = "pull_preview";
    }
    async function Ee() {
      Y.value = "validating", Re.value = null;
      try {
        const ke = Array.from(ce.value.values());
        Me.value = await p(we.value, ke), Y.value = "validation_review";
      } catch (ke) {
        Re.value = ke instanceof Error ? ke.message : "Validation failed", Y.value = "resolving";
      }
    }
    async function ne() {
      Y.value = "executing";
      const ke = we.value;
      try {
        const G = Array.from(ce.value.values()), V = await v(ke, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: G
        });
        if (V.rolled_back) {
          de.value = `Pull failed and was rolled back: ${V.error || "Unknown error"}`, Y.value = "pull_preview";
          return;
        }
        Pe(), Y.value = "idle", o("toast", `✓ Pulled from ${ke}`, "success"), await L();
      } catch (G) {
        de.value = G instanceof Error ? G.message : "Pull failed", Y.value = "validation_review";
      }
    }
    function fe() {
      Y.value = "resolving";
    }
    function Ue() {
      Pe(), Y.value = "idle";
    }
    function Pe() {
      ce.value.clear(), Me.value = null, Re.value = null, de.value = null, Ce.value = null, we.value = null;
    }
    async function ee(ke) {
      we.value = ke, Fe.value = !0, ge.value = !0, ie.value = null;
      try {
        ie.value = await g(ke);
      } catch (G) {
        M.value = G instanceof Error ? G.message : "Failed to load push preview";
      } finally {
        ge.value = !1;
      }
    }
    function J() {
      Fe.value = !1, ie.value = null, we.value = null;
    }
    async function Oe(ke) {
      if (!we.value) return;
      Se.value = !0;
      const G = we.value;
      try {
        await w(G, ke), J(), o("toast", `✓ Pushed to ${G}`, "success"), await L();
      } catch (V) {
        o("toast", V instanceof Error ? V.message : "Push failed", "error");
      } finally {
        Se.value = !1;
      }
    }
    function be() {
      const ke = we.value;
      J(), ke && W(ke);
    }
    return Xe(L), (ke, G) => (a(), r(j, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: G[0] || (G[0] = (V) => S.value = !0)
          }, {
            actions: h(() => [
              K.value ? y("", !0) : (a(), D(le, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: oe
              }, {
                default: h(() => [...G[3] || (G[3] = [
                  $(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          K.value ? y("", !0) : (a(), D($o, {
            key: 0,
            modelValue: x.value,
            "onUpdate:modelValue": G[1] || (G[1] = (V) => x.value = V),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: h(() => [
          T.value ? (a(), D(Ps, {
            key: 0,
            message: "Loading remotes..."
          })) : M.value ? (a(), D(Rs, {
            key: 1,
            message: M.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            K.value ? (a(), D(jk, {
              key: 0,
              mode: B.value,
              "remote-name": E.value.name,
              "fetch-url": E.value.fetchUrl,
              "push-url": E.value.pushUrl,
              onSubmit: N,
              onCancel: O
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            k.value.length && !K.value ? (a(), D(an, {
              key: 1,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(k.value.length) + " remote" + f(k.value.length !== 1 ? "s" : "") + " ", 1),
                I.value ? (a(), r("span", Q2, " • Tracking: " + f(I.value.remote) + "/" + f(I.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            P.value.length && !K.value ? (a(), D(lt, {
              key: 2,
              title: "REMOTES",
              count: P.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, he(P.value, (V) => (a(), D(Mk, {
                  key: V.name,
                  remote: V,
                  "sync-status": b.value[V.name],
                  "fetching-remote": H.value,
                  onFetch: U,
                  onEdit: X,
                  onRemove: R,
                  onPull: W,
                  onPush: ee
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !P.value.length && !K.value ? (a(), D(ns, {
              key: 3,
              icon: "🌐",
              message: x.value ? `No remotes match '${x.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                C(le, {
                  variant: "primary",
                  onClick: oe
                }, {
                  default: h(() => [...G[4] || (G[4] = [
                    $(" Add Your First Remote ", -1)
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
      C(as, {
        show: S.value,
        title: "About Git Remotes",
        onClose: G[2] || (G[2] = (V) => S.value = !1)
      }, {
        content: h(() => [...G[5] || (G[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            $(" The "),
            t("strong", null, '"origin"'),
            $(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          C(le, {
            variant: "link",
            onClick: Q
          }, {
            default: h(() => [...G[6] || (G[6] = [
              $(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      C(Eb, {
        show: ye.value,
        "remote-name": we.value || "",
        preview: Ce.value,
        loading: ge.value,
        pulling: Y.value === "executing",
        error: de.value,
        "conflict-resolutions": ce.value,
        onClose: te,
        onPull: ae,
        onOpenConflictResolution: ve
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      C(Zb, {
        show: Fe.value,
        "remote-name": we.value || "",
        preview: ie.value,
        loading: ge.value,
        pushing: Se.value,
        onClose: J,
        onPush: Oe,
        onPullFirst: be
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      _e.value && A.value ? (a(), D(P2, {
        key: 0,
        "workflow-conflicts": A.value.workflow_conflicts,
        resolutions: ce.value,
        "operation-type": "pull",
        validating: Y.value === "validating",
        error: Re.value,
        onClose: Ie,
        onResolve: pe,
        onApply: Ee
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      Le.value && Me.value ? (a(), D(X2, {
        key: 1,
        validation: Me.value,
        "operation-type": "pull",
        executing: Y.value === "executing",
        onProceed: ne,
        onGoBack: fe,
        onCancel: Ue
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), e$ = /* @__PURE__ */ me(Z2, [["__scopeId", "data-v-9ae3b76d"]]), t$ = { class: "setting-info" }, s$ = { class: "setting-label" }, o$ = {
  key: 0,
  class: "required-marker"
}, n$ = {
  key: 0,
  class: "setting-description"
}, a$ = { class: "setting-control" }, l$ = /* @__PURE__ */ ue({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Te(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", t$, [
        t("div", s$, [
          $(f(e.label) + " ", 1),
          e.required ? (a(), r("span", o$, "*")) : y("", !0)
        ]),
        e.description ? (a(), r("div", n$, f(e.description), 1)) : y("", !0)
      ]),
      t("div", a$, [
        Ke(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), yn = /* @__PURE__ */ me(l$, [["__scopeId", "data-v-cb5d236c"]]), i$ = { class: "toggle" }, r$ = ["checked", "disabled"], c$ = /* @__PURE__ */ ue({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("label", i$, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, r$),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Zl = /* @__PURE__ */ me(c$, [["__scopeId", "data-v-71c0f550"]]), u$ = { class: "workspace-settings-content" }, d$ = { class: "settings-section" }, f$ = { class: "path-setting" }, m$ = { class: "path-value" }, v$ = { class: "path-setting" }, p$ = { class: "path-value" }, g$ = { class: "settings-section" }, h$ = { class: "settings-section" }, y$ = { class: "settings-section" }, w$ = /* @__PURE__ */ ue({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = o, { getConfig: i, updateConfig: c } = tt(), u = _(!1), d = _(null), m = _(null), v = _(null), g = _(null), w = _(""), p = _(""), k = _(!1), I = _(!0);
    function b(E) {
      return E.join(" ");
    }
    function T(E) {
      return E.trim() ? E.trim().split(/\s+/) : [];
    }
    const M = F(() => {
      if (!g.value) return !1;
      const E = w.value !== (g.value.civitai_api_key || ""), P = p.value !== b(g.value.comfyui_extra_args || []);
      return E || P;
    });
    async function x() {
      u.value = !0, d.value = null;
      try {
        v.value = await i(n.workspacePath || void 0), g.value = { ...v.value }, w.value = v.value.civitai_api_key || "", p.value = b(v.value.comfyui_extra_args || []);
        const E = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        k.value = E !== "false", I.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
      } catch (E) {
        d.value = E instanceof Error ? E.message : "Failed to load settings";
      } finally {
        u.value = !1;
      }
    }
    async function S() {
      var E, P;
      m.value = null;
      try {
        const L = {};
        w.value !== (((E = g.value) == null ? void 0 : E.civitai_api_key) || "") && (L.civitai_api_key = w.value || null), p.value !== b(((P = g.value) == null ? void 0 : P.comfyui_extra_args) || []) && (L.comfyui_extra_args = T(p.value)), await c(L, n.workspacePath || void 0), await x(), m.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (L) {
        const oe = L instanceof Error ? L.message : "Failed to save settings";
        m.value = { type: "error", message: oe }, l("error", oe);
      }
    }
    function H() {
      g.value && (w.value = g.value.civitai_api_key || "", p.value = b(g.value.comfyui_extra_args || []), m.value = null);
    }
    function K(E) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(E)), console.log("[ComfyGit] Auto-refresh setting saved:", E);
    }
    function B(E) {
      E ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", E ? "enabled" : "disabled");
    }
    return s({
      saveSettings: S,
      resetSettings: H,
      hasChanges: M,
      loadSettings: x
    }), Xe(x), (E, P) => (a(), r("div", u$, [
      u.value ? (a(), D(Ps, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (a(), D(Rs, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: x
      }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
        C(lt, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var L, oe;
            return [
              t("div", d$, [
                t("div", f$, [
                  P[4] || (P[4] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  P[5] || (P[5] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", m$, f(((L = v.value) == null ? void 0 : L.workspace_path) || "Loading..."), 1)
                ]),
                t("div", v$, [
                  P[6] || (P[6] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  P[7] || (P[7] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", p$, f(((oe = v.value) == null ? void 0 : oe.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        C(lt, { title: "API CREDENTIALS" }, {
          default: h(() => [
            t("div", g$, [
              C(yn, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  C(Un, {
                    modelValue: w.value,
                    "onUpdate:modelValue": P[0] || (P[0] = (L) => w.value = L),
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
          default: h(() => [
            t("div", h$, [
              C(yn, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  C(Un, {
                    modelValue: p.value,
                    "onUpdate:modelValue": P[1] || (P[1] = (L) => p.value = L),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              P[8] || (P[8] = t("div", { class: "setting-hint" }, [
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
        C(lt, { title: "UI SETTINGS" }, {
          default: h(() => [
            t("div", y$, [
              C(yn, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  C(Zl, {
                    modelValue: k.value,
                    "onUpdate:modelValue": [
                      P[2] || (P[2] = (L) => k.value = L),
                      K
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              C(yn, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  C(Zl, {
                    modelValue: I.value,
                    "onUpdate:modelValue": [
                      P[3] || (P[3] = (L) => I.value = L),
                      B
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        m.value ? (a(), D(an, {
          key: 0,
          variant: (m.value.type === "success", "compact")
        }, {
          default: h(() => [
            t("span", {
              style: qt({ color: m.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, f(m.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), Tr = /* @__PURE__ */ me(w$, [["__scopeId", "data-v-f28917ec"]]), _$ = /* @__PURE__ */ ue({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = _(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), D(Pt, null, {
      header: h(() => [
        C(Rt, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var i, c;
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
                default: h(() => [...l[2] || (l[2] = [
                  $(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (c = s.value) != null && c.hasChanges ? (a(), D(le, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (u) => {
                  var d;
                  return (d = s.value) == null ? void 0 : d.resetSettings();
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
        C(Tr, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), k$ = { class: "base-tabs" }, b$ = ["disabled", "onClick"], $$ = {
  key: 0,
  class: "base-tabs__badge"
}, C$ = /* @__PURE__ */ ue({
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
    return (i, c) => (a(), r("div", k$, [
      (a(!0), r(j, null, he(e.tabs, (u) => (a(), r("button", {
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
        $(f(u.label) + " ", 1),
        u.badge ? (a(), r("span", $$, f(u.badge), 1)) : y("", !0)
      ], 10, b$))), 128))
    ]));
  }
}), Pr = /* @__PURE__ */ me(C$, [["__scopeId", "data-v-ad5e6cad"]]), x$ = { class: "log-viewer-wrapper" }, S$ = ["disabled", "title"], I$ = /* @__PURE__ */ ue({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const s = e, o = _(null), n = _("idle"), l = F(() => s.logs.map((m) => ({
      text: s.rawFormat || !m.timestamp ? m.message : `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function i() {
      var v;
      await _t();
      const m = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      m && (m.scrollTop = m.scrollHeight);
    }
    Xe(i), yt(() => s.logs, i);
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
    return (m, v) => (a(), r("div", x$, [
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
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, S$),
        (a(!0), r(j, null, he(l.value, (g, w) => (a(), r("div", {
          key: w,
          class: Te(`log-line log-level-${g.level.toLowerCase()}`)
        }, f(g.text), 3))), 128))
      ], 544)
    ]));
  }
}), Rr = /* @__PURE__ */ me(I$, [["__scopeId", "data-v-c0cc6d21"]]), E$ = /* @__PURE__ */ ue({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: n,
      getOrchestratorLogPath: l,
      openFile: i
    } = tt(), c = _("workspace"), u = _([]), d = _(!1), m = _(null), v = _(!1), g = _(null), w = _(null), p = _(!1), k = F(() => c.value === "workspace" ? g.value : w.value);
    async function I() {
      d.value = !0, m.value = null;
      try {
        c.value === "workspace" ? u.value = await s(void 0, 500) : u.value = await n(void 0, 500);
      } catch (M) {
        m.value = M instanceof Error ? M.message : `Failed to load ${c.value} logs`;
      } finally {
        d.value = !1;
      }
    }
    async function b() {
      try {
        const [M, x] = await Promise.all([
          o(),
          l()
        ]);
        M.exists && (g.value = M.path), x.exists && (w.value = x.path);
      } catch {
      }
    }
    async function T() {
      if (k.value) {
        p.value = !0;
        try {
          await i(k.value);
        } catch (M) {
          console.error("Failed to open log file:", M);
        } finally {
          p.value = !1;
        }
      }
    }
    return yt(c, () => {
      I();
    }), Xe(() => {
      I(), b();
    }), (M, x) => (a(), r(j, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (S) => v.value = !0)
          }, {
            actions: h(() => [
              C(le, {
                variant: "secondary",
                size: "sm",
                onClick: T,
                disabled: !k.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: h(() => [
                  $(f(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(le, {
                variant: "secondary",
                size: "sm",
                onClick: I,
                disabled: d.value
              }, {
                default: h(() => [
                  $(f(d.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          C(Pr, {
            modelValue: c.value,
            "onUpdate:modelValue": x[1] || (x[1] = (S) => c.value = S),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (a(), D(Ps, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : m.value ? (a(), D(Rs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            u.value.length === 0 ? (a(), D(ns, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (a(), D(Rr, {
              key: 1,
              logs: u.value,
              "raw-format": c.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      C(as, {
        show: v.value,
        title: "About Logs",
        onClose: x[3] || (x[3] = (S) => v.value = !1)
      }, {
        content: h(() => [...x[4] || (x[4] = [
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
        actions: h(() => [
          C(le, {
            variant: "primary",
            onClick: x[2] || (x[2] = (S) => v.value = !1)
          }, {
            default: h(() => [...x[5] || (x[5] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), T$ = /* @__PURE__ */ ue({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: n, openFile: l } = tt(), i = _([]), c = _(!1), u = _(null), d = _(!1), m = _("production"), v = _(null), g = _(!1);
    async function w() {
      c.value = !0, u.value = null;
      try {
        i.value = await s(void 0, 500);
        try {
          const I = await o();
          m.value = I.environment || "production";
        } catch {
        }
      } catch (I) {
        u.value = I instanceof Error ? I.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
      }
    }
    async function p() {
      try {
        const I = await n();
        I.exists && (v.value = I.path);
      } catch {
      }
    }
    async function k() {
      if (v.value) {
        g.value = !0;
        try {
          await l(v.value);
        } catch (I) {
          console.error("Failed to open log file:", I);
        } finally {
          g.value = !1;
        }
      }
    }
    return Xe(() => {
      w(), p();
    }), (I, b) => (a(), r(j, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (T) => d.value = !0)
          }, {
            actions: h(() => [
              C(le, {
                variant: "secondary",
                size: "sm",
                onClick: k,
                disabled: !v.value || g.value,
                title: "Open log file in default editor"
              }, {
                default: h(() => [
                  $(f(g.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(le, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: c.value
              }, {
                default: h(() => [
                  $(f(c.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: h(() => [
          c.value ? (a(), D(Ps, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (a(), D(Rs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            i.value.length === 0 ? (a(), D(ns, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), D(Rr, {
              key: 1,
              logs: i.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      C(as, {
        show: d.value,
        title: "About Environment Logs",
        onClose: b[2] || (b[2] = (T) => d.value = !1)
      }, {
        content: h(() => [
          t("p", null, [
            b[3] || (b[3] = $(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            t("strong", null, f(m.value), 1),
            b[4] || (b[4] = $(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          b[5] || (b[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
        actions: h(() => [
          C(le, {
            variant: "primary",
            onClick: b[1] || (b[1] = (T) => d.value = !1)
          }, {
            default: h(() => [...b[6] || (b[6] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), P$ = { class: "env-title" }, R$ = {
  key: 0,
  class: "current-badge"
}, M$ = {
  key: 0,
  class: "branch-info"
}, D$ = /* @__PURE__ */ ue({
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
    return (s, o) => (a(), D(Et, {
      status: e.isCurrent ? "synced" : void 0
    }, so({
      icon: h(() => [
        $(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        t("div", P$, [
          t("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), r("span", R$, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (a(), r("span", M$, [
          o[0] || (o[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          $(" " + f(e.currentBranch), 1)
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
          C(dt, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          C(dt, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          C(dt, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (a(), D(dt, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), L$ = /* @__PURE__ */ me(D$, [["__scopeId", "data-v-9231917a"]]), O$ = { class: "env-details" }, A$ = { class: "status-row" }, U$ = {
  key: 0,
  class: "detail-row"
}, N$ = { class: "value mono" }, z$ = {
  key: 1,
  class: "detail-row"
}, F$ = { class: "value mono small" }, B$ = { class: "detail-row" }, V$ = { class: "value" }, W$ = { class: "detail-row" }, G$ = { class: "value" }, j$ = { class: "detail-row" }, H$ = { class: "value" }, K$ = {
  key: 2,
  class: "section-divider"
}, q$ = {
  key: 3,
  class: "detail-row"
}, Y$ = { class: "value" }, J$ = {
  key: 4,
  class: "detail-row"
}, X$ = { class: "value" }, Q$ = { class: "footer-actions" }, Z$ = /* @__PURE__ */ ue({
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
    return (l, i) => (a(), D(mt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: i[2] || (i[2] = (c) => o("close"))
    }, {
      body: h(() => [
        t("div", O$, [
          t("div", A$, [
            i[3] || (i[3] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Te(["status-badge", e.environment.is_current ? "current" : "inactive"])
            }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          e.environment.current_branch ? (a(), r("div", U$, [
            i[4] || (i[4] = t("span", { class: "label" }, "Branch:", -1)),
            t("span", N$, f(e.environment.current_branch), 1)
          ])) : y("", !0),
          e.environment.path ? (a(), r("div", z$, [
            i[5] || (i[5] = t("span", { class: "label" }, "Path:", -1)),
            t("span", F$, f(e.environment.path), 1)
          ])) : y("", !0),
          i[11] || (i[11] = t("div", { class: "section-divider" }, null, -1)),
          t("div", B$, [
            i[6] || (i[6] = t("span", { class: "label" }, "Workflows:", -1)),
            t("span", V$, f(e.environment.workflow_count), 1)
          ]),
          t("div", W$, [
            i[7] || (i[7] = t("span", { class: "label" }, "Nodes:", -1)),
            t("span", G$, f(e.environment.node_count), 1)
          ]),
          t("div", j$, [
            i[8] || (i[8] = t("span", { class: "label" }, "Models:", -1)),
            t("span", H$, f(e.environment.model_count), 1)
          ]),
          e.environment.created_at || e.environment.last_used ? (a(), r("div", K$)) : y("", !0),
          e.environment.created_at ? (a(), r("div", q$, [
            i[9] || (i[9] = t("span", { class: "label" }, "Created:", -1)),
            t("span", Y$, f(n(e.environment.created_at)), 1)
          ])) : y("", !0),
          e.environment.last_used ? (a(), r("div", J$, [
            i[10] || (i[10] = t("span", { class: "label" }, "Last Used:", -1)),
            t("span", X$, f(n(e.environment.last_used)), 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", Q$, [
          e.canDelete ? (a(), D(De, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: i[0] || (i[0] = (c) => o("delete", e.environment.name))
          }, {
            default: h(() => [...i[12] || (i[12] = [
              $(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          i[14] || (i[14] = t("div", { class: "footer-spacer" }, null, -1)),
          C(De, {
            variant: "secondary",
            size: "sm",
            onClick: i[1] || (i[1] = (c) => o("close"))
          }, {
            default: h(() => [...i[13] || (i[13] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), eC = /* @__PURE__ */ me(Z$, [["__scopeId", "data-v-59855453"]]), Mr = [
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
], Lr = "auto", tC = { class: "progress-bar" }, sC = /* @__PURE__ */ ue({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = F(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (n, l) => (a(), r("div", tC, [
      t("div", {
        class: Te(["progress-fill", e.variant]),
        style: qt({ width: o.value })
      }, null, 6)
    ]));
  }
}), ea = /* @__PURE__ */ me(sC, [["__scopeId", "data-v-1beb0512"]]), oC = { class: "task-progress" }, nC = { class: "progress-info" }, aC = { class: "progress-percentage" }, lC = { class: "progress-message" }, iC = {
  key: 0,
  class: "progress-steps"
}, rC = { class: "step-icon" }, cC = { class: "step-label" }, uC = /* @__PURE__ */ ue({
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
    return (l, i) => (a(), r("div", oC, [
      C(ea, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", nC, [
        t("span", aC, f(e.progress) + "%", 1),
        t("span", lC, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), r("div", iC, [
        (a(!0), r(j, null, he(e.steps, (c) => (a(), r("div", {
          key: c.id,
          class: Te(["step", o(c.id)])
        }, [
          t("span", rC, f(n(c.id)), 1),
          t("span", cC, f(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), zn = /* @__PURE__ */ me(uC, [["__scopeId", "data-v-9d1de66c"]]), dC = {
  key: 0,
  class: "create-env-form"
}, fC = { class: "form-field" }, mC = { class: "form-field" }, vC = ["value"], pC = { class: "form-field" }, gC = ["disabled"], hC = ["value"], yC = { class: "form-field" }, wC = ["value"], _C = { class: "form-field form-field--checkbox" }, kC = { class: "form-checkbox" }, bC = {
  key: 1,
  class: "create-env-progress"
}, $C = { class: "creating-intro" }, CC = {
  key: 0,
  class: "progress-warning"
}, xC = {
  key: 1,
  class: "create-error"
}, SC = { class: "error-message" }, IC = {
  key: 1,
  class: "footer-status"
}, EC = 10, TC = /* @__PURE__ */ ue({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: i } = tt(), c = _(""), u = _(Dr), d = _("latest"), m = _(Lr), v = _(!1), g = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = _(!1), p = _(!1), k = _({
      progress: 0,
      message: ""
    });
    let I = null, b = 0;
    const T = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], M = _(null);
    function x() {
      p.value || o("close");
    }
    async function S() {
      const P = c.value.trim();
      if (P) {
        p.value = !0, k.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const L = {
            name: P,
            python_version: u.value,
            comfyui_version: d.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, oe = await l(L);
          oe.status === "started" ? H() : oe.status === "error" && (k.value = {
            progress: 0,
            message: oe.message || "Failed to start creation",
            error: oe.message
          });
        } catch (L) {
          k.value = {
            progress: 0,
            message: L instanceof Error ? L.message : "Unknown error",
            error: L instanceof Error ? L.message : "Unknown error"
          };
        }
      }
    }
    function H() {
      I || (b = 0, I = window.setInterval(async () => {
        try {
          const P = await i();
          b = 0, k.value = {
            progress: P.progress ?? 0,
            message: P.message,
            phase: P.phase,
            error: P.error
          }, P.state === "complete" ? (K(), o("created", P.environment_name || c.value.trim(), v.value)) : P.state === "error" ? (K(), k.value.error = P.error || P.message) : P.state === "idle" && p.value && (K(), k.value.error = "Creation was interrupted. Please try again.");
        } catch {
          b++, b >= EC && (K(), k.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function K() {
      I && (clearInterval(I), I = null);
    }
    function B() {
      p.value = !1, k.value = { progress: 0, message: "" }, o("close");
    }
    async function E() {
      w.value = !0;
      try {
        g.value = await n();
      } catch (P) {
        console.error("Failed to load ComfyUI releases:", P);
      } finally {
        w.value = !1;
      }
    }
    return Xe(async () => {
      var P;
      await _t(), (P = M.value) == null || P.focus(), E();
    }), oo(() => {
      K();
    }), (P, L) => (a(), D(mt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !p.value,
      onClose: x
    }, {
      body: h(() => [
        p.value ? (a(), r("div", bC, [
          t("p", $C, [
            L[11] || (L[11] = $(" Creating environment ", -1)),
            t("strong", null, f(c.value), 1),
            L[12] || (L[12] = $("... ", -1))
          ]),
          C(zn, {
            progress: k.value.progress,
            message: k.value.message,
            "current-phase": k.value.phase,
            variant: k.value.error ? "error" : "default",
            "show-steps": !0,
            steps: T
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          k.value.error ? y("", !0) : (a(), r("p", CC, " This may take several minutes. Please wait... ")),
          k.value.error ? (a(), r("div", xC, [
            t("p", SC, f(k.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), r("div", dC, [
          t("div", fC, [
            L[6] || (L[6] = t("label", { class: "form-label" }, "Name", -1)),
            qe(t("input", {
              ref_key: "nameInput",
              ref: M,
              "onUpdate:modelValue": L[0] || (L[0] = (oe) => c.value = oe),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Ht(S, ["enter"])
            }, null, 544), [
              [zt, c.value]
            ])
          ]),
          t("div", mC, [
            L[7] || (L[7] = t("label", { class: "form-label" }, "Python Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": L[1] || (L[1] = (oe) => u.value = oe),
              class: "form-select"
            }, [
              (a(!0), r(j, null, he(We(Mr), (oe) => (a(), r("option", {
                key: oe,
                value: oe
              }, f(oe), 9, vC))), 128))
            ], 512), [
              [hs, u.value]
            ])
          ]),
          t("div", pC, [
            L[8] || (L[8] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": L[2] || (L[2] = (oe) => d.value = oe),
              class: "form-select",
              disabled: w.value
            }, [
              (a(!0), r(j, null, he(g.value, (oe) => (a(), r("option", {
                key: oe.tag_name,
                value: oe.tag_name
              }, f(oe.name), 9, hC))), 128))
            ], 8, gC), [
              [hs, d.value]
            ])
          ]),
          t("div", yC, [
            L[9] || (L[9] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            qe(t("select", {
              "onUpdate:modelValue": L[3] || (L[3] = (oe) => m.value = oe),
              class: "form-select"
            }, [
              (a(!0), r(j, null, he(We(al), (oe) => (a(), r("option", {
                key: oe,
                value: oe
              }, f(oe) + f(oe === "auto" ? " (detect GPU)" : ""), 9, wC))), 128))
            ], 512), [
              [hs, m.value]
            ])
          ]),
          t("div", _C, [
            t("label", kC, [
              qe(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": L[4] || (L[4] = (oe) => v.value = oe)
              }, null, 512), [
                [en, v.value]
              ]),
              L[10] || (L[10] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        p.value ? (a(), r(j, { key: 1 }, [
          k.value.error ? (a(), D(De, {
            key: 0,
            variant: "secondary",
            onClick: B
          }, {
            default: h(() => [...L[15] || (L[15] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), r("span", IC, " Creating environment... "))
        ], 64)) : (a(), r(j, { key: 0 }, [
          C(De, {
            variant: "primary",
            disabled: !c.value.trim(),
            onClick: S
          }, {
            default: h(() => [...L[13] || (L[13] = [
              $(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(De, {
            variant: "secondary",
            onClick: L[5] || (L[5] = (oe) => o("close"))
          }, {
            default: h(() => [...L[14] || (L[14] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), PC = /* @__PURE__ */ me(TC, [["__scopeId", "data-v-f37eaa42"]]), RC = /* @__PURE__ */ ue({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getEnvironments: l } = tt(), i = _([]), c = _(!1), u = _(null), d = _(""), m = _(!1), v = _(!1), g = _(null), w = F(() => {
      if (!d.value.trim()) return i.value;
      const M = d.value.toLowerCase();
      return i.value.filter(
        (x) => {
          var S;
          return x.name.toLowerCase().includes(M) || ((S = x.current_branch) == null ? void 0 : S.toLowerCase().includes(M));
        }
      );
    });
    function p(M, x) {
      v.value = !1, n("created", M, x);
    }
    function k() {
      v.value = !0;
    }
    function I(M) {
      g.value = M;
    }
    function b(M) {
      g.value = null, n("delete", M);
    }
    async function T() {
      c.value = !0, u.value = null;
      try {
        i.value = await l();
      } catch (M) {
        u.value = M instanceof Error ? M.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return Xe(T), s({
      loadEnvironments: T,
      openCreateModal: k
    }), (M, x) => (a(), r(j, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (S) => m.value = !0)
          }, {
            actions: h(() => [
              C(le, {
                variant: "primary",
                size: "sm",
                onClick: k
              }, {
                default: h(() => [...x[6] || (x[6] = [
                  $(" Create ", -1)
                ])]),
                _: 1
              }),
              C(le, {
                variant: "secondary",
                size: "sm",
                onClick: T
              }, {
                default: h(() => [...x[7] || (x[7] = [
                  $(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          C($o, {
            modelValue: d.value,
            "onUpdate:modelValue": x[1] || (x[1] = (S) => d.value = S),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (a(), D(Ps, {
            key: 0,
            message: "Loading environments..."
          })) : u.value ? (a(), D(Rs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            w.value.length ? (a(), D(lt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, he(w.value, (S) => (a(), D(L$, {
                  key: S.name,
                  "environment-name": S.name,
                  "is-current": S.is_current,
                  "current-branch": S.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    S.is_current ? y("", !0) : (a(), D(le, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (H) => M.$emit("switch", S.name)
                    }, {
                      default: h(() => [...x[8] || (x[8] = [
                        $(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    C(le, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (H) => I(S)
                    }, {
                      default: h(() => [...x[9] || (x[9] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            w.value.length ? y("", !0) : (a(), D(ns, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, so({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  C(le, {
                    variant: "primary",
                    onClick: k
                  }, {
                    default: h(() => [...x[10] || (x[10] = [
                      $(" Create Environment ", -1)
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
      C(as, {
        show: m.value,
        title: "About Environments",
        onClose: x[3] || (x[3] = (S) => m.value = !1)
      }, {
        content: h(() => [...x[11] || (x[11] = [
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
        actions: h(() => [
          C(le, {
            variant: "secondary",
            onClick: x[2] || (x[2] = (S) => m.value = !1)
          }, {
            default: h(() => [...x[12] || (x[12] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      g.value ? (a(), D(eC, {
        key: 0,
        environment: g.value,
        "can-delete": i.value.length > 1,
        onClose: x[4] || (x[4] = (S) => g.value = null),
        onDelete: b
      }, null, 8, ["environment", "can-delete"])) : y("", !0),
      v.value ? (a(), D(PC, {
        key: 1,
        onClose: x[5] || (x[5] = (S) => v.value = !1),
        onCreated: p
      })) : y("", !0)
    ], 64));
  }
}), MC = /* @__PURE__ */ me(RC, [["__scopeId", "data-v-f95999f4"]]), DC = { class: "file-path" }, LC = { class: "file-path-text" }, OC = ["title"], AC = /* @__PURE__ */ ue({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = _(!1);
    async function n() {
      try {
        await navigator.clipboard.writeText(s.path), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, i) => (a(), r("div", DC, [
      i[0] || (i[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", LC, f(e.path), 1),
      e.copyable ? (a(), r("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, f(o.value ? "✓" : "📋"), 9, OC)) : y("", !0)
    ]));
  }
}), UC = /* @__PURE__ */ me(AC, [["__scopeId", "data-v-f0982173"]]), NC = { class: "export-blocked" }, zC = { class: "issues-list" }, FC = { class: "issue-message" }, BC = {
  key: 0,
  class: "issue-details"
}, VC = ["onClick"], WC = { class: "issue-fix" }, GC = /* @__PURE__ */ ue({
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
    return (l, i) => (a(), D(mt, {
      title: "Cannot Export",
      size: "md",
      onClose: i[1] || (i[1] = (c) => l.$emit("close"))
    }, {
      body: h(() => [
        t("div", NC, [
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
          t("div", zC, [
            (a(!0), r(j, null, he(e.issues, (c, u) => (a(), r("div", {
              key: u,
              class: "issue-item"
            }, [
              t("div", FC, f(c.message), 1),
              c.details.length ? (a(), r("div", BC, [
                (a(!0), r(j, null, he(n(u), (d, m) => (a(), r("div", {
                  key: m,
                  class: "issue-detail"
                }, f(d), 1))), 128)),
                c.details.length > 3 && !o[u] ? (a(), r("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => o[u] = !0
                }, " +" + f(c.details.length - 3) + " more ", 9, VC)) : y("", !0)
              ])) : y("", !0),
              t("div", WC, [
                c.type === "uncommitted_workflows" ? (a(), r(j, { key: 0 }, [
                  $(" Commit your workflow changes before exporting. ")
                ], 64)) : c.type === "uncommitted_git_changes" ? (a(), r(j, { key: 1 }, [
                  $(" Commit your changes before exporting. ")
                ], 64)) : c.type === "unresolved_issues" ? (a(), r(j, { key: 2 }, [
                  $(" Resolve all workflow issues before exporting. ")
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: h(() => [
        C(De, {
          variant: "primary",
          onClick: i[0] || (i[0] = (c) => l.$emit("close"))
        }, {
          default: h(() => [...i[3] || (i[3] = [
            $(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Or = /* @__PURE__ */ me(GC, [["__scopeId", "data-v-b52f5e32"]]), jC = { class: "export-warnings" }, HC = {
  key: 0,
  class: "success-header"
}, KC = { class: "warning-header" }, qC = { class: "warning-summary" }, YC = { class: "warning-title" }, JC = { class: "models-section" }, XC = { class: "models-list" }, QC = { class: "model-info" }, ZC = { class: "model-filename" }, ex = { class: "model-workflows" }, tx = ["onClick"], sx = /* @__PURE__ */ ue({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = _(!1), i = _(null), c = F(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function u() {
      i.value = null, n("revalidate");
    }
    return (d, m) => (a(), r(j, null, [
      C(mt, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (v) => d.$emit("cancel"))
      }, {
        body: h(() => [
          t("div", jC, [
            e.models.length === 0 ? (a(), r("div", HC, [...m[4] || (m[4] = [
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
            ])])) : (a(), r(j, { key: 1 }, [
              t("div", KC, [
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
                t("div", qC, [
                  t("h3", YC, f(e.models.length) + " model" + f(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", JC, [
                t("div", XC, [
                  (a(!0), r(j, null, he(c.value, (v) => (a(), r("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", QC, [
                      t("div", ZC, f(v.filename), 1),
                      t("div", ex, " Used by: " + f(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (g) => i.value = v.hash
                    }, " Add Source ", 8, tx)
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
          C(De, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (v) => d.$emit("cancel"))
          }, {
            default: h(() => [...m[7] || (m[7] = [
              $(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          C(De, {
            variant: "primary",
            onClick: m[2] || (m[2] = (v) => d.$emit("confirm"))
          }, {
            default: h(() => [
              $(f(e.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      i.value ? (a(), D(ol, {
        key: 0,
        identifier: i.value,
        onClose: u
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Ar = /* @__PURE__ */ me(sx, [["__scopeId", "data-v-b698d882"]]), ox = { class: "export-card" }, nx = { class: "export-path-row" }, ax = { class: "export-actions" }, lx = {
  key: 1,
  class: "export-warning"
}, ix = /* @__PURE__ */ ue({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = tt(), n = _(""), l = _(!1), i = _(!1), c = _(!1), u = _(null), d = _(!1), m = _(null), v = _(!1), g = _(!1), w = F(() => l.value ? "Validating..." : i.value ? "Exporting..." : "Export Environment");
    async function p() {
      l.value = !0, u.value = null;
      try {
        const x = await s();
        m.value = x, x.can_export ? x.warnings.models_without_sources.length > 0 ? g.value = !0 : await b() : v.value = !0;
      } catch (x) {
        u.value = {
          status: "error",
          message: x instanceof Error ? x.message : "Validation failed"
        };
      } finally {
        l.value = !1;
      }
    }
    async function k() {
      g.value = !1, await b();
    }
    async function I() {
      try {
        const x = await s();
        m.value = x;
      } catch (x) {
        console.error("Re-validation failed:", x);
      }
    }
    async function b() {
      i.value = !0;
      try {
        const x = await o(n.value || void 0);
        u.value = x;
      } catch (x) {
        u.value = {
          status: "error",
          message: x instanceof Error ? x.message : "Export failed"
        };
      } finally {
        i.value = !1;
      }
    }
    async function T() {
      var x;
      if ((x = u.value) != null && x.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (S) {
          console.error("Failed to copy path:", S);
        }
    }
    async function M() {
      var x;
      if ((x = u.value) != null && x.path) {
        c.value = !0;
        try {
          const S = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!S.ok)
            throw new Error(`Download failed: ${S.statusText}`);
          const H = await S.blob(), K = URL.createObjectURL(H), B = u.value.path.split("/").pop() || "environment-export.tar.gz", E = document.createElement("a");
          E.href = K, E.download = B, document.body.appendChild(E), E.click(), document.body.removeChild(E), URL.revokeObjectURL(K);
        } catch (S) {
          console.error("Failed to download:", S), alert(`Download failed: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          c.value = !1;
        }
      }
    }
    return (x, S) => (a(), r(j, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (H) => d.value = !0)
          })
        ]),
        content: h(() => [
          C(lt, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              t("div", ox, [
                S[7] || (S[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", nx, [
                  C(Un, {
                    modelValue: n.value,
                    "onUpdate:modelValue": S[1] || (S[1] = (H) => n.value = H),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", ax, [
                  C(le, {
                    variant: "primary",
                    size: "md",
                    loading: l.value || i.value,
                    disabled: l.value || i.value,
                    onClick: p
                  }, {
                    default: h(() => [
                      S[6] || (S[6] = t("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        t("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        t("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      $(" " + f(w.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          u.value ? (a(), D(lt, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              C(Et, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, so({
                icon: h(() => [
                  $(f(u.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  $(f(u.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: h(() => [
                  $(f(u.value.status === "success" ? "Your environment has been exported" : u.value.message), 1)
                ]),
                _: 2
              }, [
                u.value.status === "success" ? {
                  name: "details",
                  fn: h(() => [
                    C(dt, { label: "Saved to:" }, {
                      default: h(() => [
                        C(UC, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (a(), D(dt, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (a(), r("div", lx, [...S[8] || (S[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    C(le, {
                      variant: "primary",
                      size: "sm",
                      loading: c.value,
                      onClick: M
                    }, {
                      default: h(() => [...S[9] || (S[9] = [
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
                    C(le, {
                      variant: "secondary",
                      size: "sm",
                      onClick: T
                    }, {
                      default: h(() => [...S[10] || (S[10] = [
                        $(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    C(le, {
                      variant: "ghost",
                      size: "sm",
                      onClick: S[2] || (S[2] = (H) => u.value = null)
                    }, {
                      default: h(() => [...S[11] || (S[11] = [
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
        _: 1
      }),
      C(as, {
        show: d.value,
        title: "What Gets Exported",
        onClose: S[3] || (S[3] = (H) => d.value = !1)
      }, {
        content: h(() => [...S[12] || (S[12] = [
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
      v.value && m.value ? (a(), D(Or, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: S[4] || (S[4] = (H) => v.value = !1)
      }, null, 8, ["issues"])) : y("", !0),
      g.value && m.value ? (a(), D(Ar, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: k,
        onCancel: S[5] || (S[5] = (H) => g.value = !1),
        onRevalidate: I
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), rx = /* @__PURE__ */ me(ix, [["__scopeId", "data-v-f4d120f2"]]), cx = { class: "file-input-wrapper" }, ux = ["accept", "multiple", "disabled"], dx = /* @__PURE__ */ ue({
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
    const n = o, l = _(null);
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
    }), (u, d) => (a(), r("div", cx, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, ux),
      C(le, {
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
            $(" " + f(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), fx = /* @__PURE__ */ me(dx, [["__scopeId", "data-v-cd192091"]]), mx = {
  key: 0,
  class: "drop-zone-empty"
}, vx = { class: "drop-zone-text" }, px = { class: "drop-zone-primary" }, gx = { class: "drop-zone-secondary" }, hx = { class: "drop-zone-actions" }, yx = {
  key: 1,
  class: "drop-zone-file"
}, wx = { class: "file-info" }, _x = { class: "file-details" }, kx = { class: "file-name" }, bx = { class: "file-size" }, $x = /* @__PURE__ */ ue({
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
    const o = s, n = _(!1), l = _(null), i = _(0), c = F(() => l.value !== null), u = F(() => {
      var b;
      return ((b = l.value) == null ? void 0 : b.name) || "";
    }), d = F(() => {
      if (!l.value) return "";
      const b = l.value.size;
      return b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB` : b < 1024 * 1024 * 1024 ? `${(b / (1024 * 1024)).toFixed(1)} MB` : `${(b / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m(b) {
      var T;
      b.stopPropagation(), i.value++, (T = b.dataTransfer) != null && T.types.includes("Files") && (n.value = !0);
    }
    function v(b) {
      b.stopPropagation(), b.dataTransfer && (b.dataTransfer.dropEffect = "copy");
    }
    function g(b) {
      b.stopPropagation(), i.value--, i.value === 0 && (n.value = !1);
    }
    function w(b) {
      var M;
      b.stopPropagation(), i.value = 0, n.value = !1;
      const T = (M = b.dataTransfer) == null ? void 0 : M.files;
      T && T.length > 0 && k(T[0]);
    }
    function p(b) {
      b.length > 0 && k(b[0]);
    }
    function k(b) {
      l.value = b, o("fileSelected", b);
    }
    function I() {
      l.value = null, o("clear");
    }
    return (b, T) => (a(), r("div", {
      class: Te(["file-drop-zone", { "drop-active": n.value, "has-file": c.value }]),
      onDragenter: it(m, ["prevent"]),
      onDragover: it(v, ["prevent"]),
      onDragleave: it(g, ["prevent"]),
      onDrop: it(w, ["prevent"])
    }, [
      c.value ? (a(), r("div", yx, [
        t("div", wx, [
          T[1] || (T[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", _x, [
            t("div", kx, f(u.value), 1),
            t("div", bx, f(d.value), 1)
          ])
        ]),
        C(le, {
          variant: "ghost",
          size: "xs",
          onClick: I,
          title: "Remove file"
        }, {
          default: h(() => [...T[2] || (T[2] = [
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
      ])) : (a(), r("div", mx, [
        T[0] || (T[0] = t("div", { class: "drop-zone-icon" }, [
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
        t("div", vx, [
          t("p", px, f(e.primaryText), 1),
          t("p", gx, f(e.secondaryText), 1)
        ]),
        t("div", hx, [
          C(fx, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: p
          }, {
            default: h(() => [
              $(f(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Cx = /* @__PURE__ */ me($x, [["__scopeId", "data-v-0f79cb86"]]), xx = { class: "import-preview" }, Sx = { class: "preview-header" }, Ix = {
  key: 0,
  class: "source-env"
}, Ex = { class: "preview-content" }, Tx = { class: "preview-section" }, Px = { class: "section-header" }, Rx = { class: "section-info" }, Mx = { class: "section-count" }, Dx = {
  key: 0,
  class: "item-list"
}, Lx = { class: "item-name" }, Ox = {
  key: 0,
  class: "item-more"
}, Ax = { class: "preview-section" }, Ux = { class: "section-header" }, Nx = { class: "section-info" }, zx = { class: "section-count" }, Fx = {
  key: 0,
  class: "item-list"
}, Bx = { class: "item-details" }, Vx = { class: "item-name" }, Wx = { class: "item-meta" }, Gx = {
  key: 0,
  class: "item-more"
}, jx = { class: "preview-section" }, Hx = { class: "section-header" }, Kx = { class: "section-info" }, qx = { class: "section-count" }, Yx = {
  key: 0,
  class: "item-list"
}, Jx = { class: "item-name" }, Xx = {
  key: 0,
  class: "item-more"
}, Qx = {
  key: 0,
  class: "preview-section"
}, Zx = { class: "git-info" }, e3 = /* @__PURE__ */ ue({
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
    return (c, u) => (a(), r("div", xx, [
      t("div", Sx, [
        C(Ut, null, {
          default: h(() => [...u[0] || (u[0] = [
            $("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), r("span", Ix, [
          u[1] || (u[1] = $(" From: ", -1)),
          C(Ma, null, {
            default: h(() => [
              $(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", Ex, [
        t("div", Tx, [
          t("div", Px, [
            u[3] || (u[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", Rx, [
              u[2] || (u[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", Mx, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), r("div", Dx, [
            (a(!0), r(j, null, he(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", Lx, f(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), r("div", Ox, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", Ax, [
          t("div", Ux, [
            u[6] || (u[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", Nx, [
              u[5] || (u[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", zx, f(n.value) + " file" + f(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), r("div", Fx, [
            (a(!0), r(j, null, he(e.models.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", Bx, [
                t("span", Vx, f(d.filename), 1),
                t("span", Wx, f(i(d.size)) + " • " + f(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), r("div", Gx, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", jx, [
          t("div", Hx, [
            u[9] || (u[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", Kx, [
              u[8] || (u[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", qx, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), r("div", Yx, [
            (a(!0), r(j, null, he(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", Jx, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), r("div", Xx, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), r("div", Qx, [
          u[11] || (u[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", Zx, [
            e.gitBranch ? (a(), D(dt, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                C(Ma, null, {
                  default: h(() => [
                    $(f(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (a(), D(dt, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                C(br, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), t3 = /* @__PURE__ */ me(e3, [["__scopeId", "data-v-182fe113"]]), s3 = { class: "import-config" }, o3 = { class: "config-container" }, n3 = { class: "config-field" }, a3 = { class: "input-wrapper" }, l3 = ["value"], i3 = {
  key: 0,
  class: "validating-indicator"
}, r3 = {
  key: 1,
  class: "valid-indicator"
}, c3 = {
  key: 0,
  class: "field-error"
}, u3 = { class: "config-field" }, d3 = { class: "strategy-options" }, f3 = ["value", "checked", "onChange"], m3 = { class: "strategy-content" }, v3 = { class: "strategy-label" }, p3 = { class: "strategy-description" }, g3 = { class: "config-field switch-field" }, h3 = { class: "switch-label" }, y3 = ["checked"], w3 = { class: "advanced-section" }, _3 = { class: "advanced-content" }, k3 = { class: "config-field" }, b3 = ["value"], $3 = ["value"], C3 = /* @__PURE__ */ ue({
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
    const o = e, n = s, l = _(!1), i = _(!1);
    yt(() => o.nameError, (v) => {
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
      const g = v.target.value;
      n("update:name", g), i.value = !1, u && clearTimeout(u), g.length > 0 ? (l.value = !0, u = setTimeout(() => {
        n("validate-name", g);
      }, 400)) : l.value = !1;
    }
    function m() {
      o.name.length > 0 && n("validate-name", o.name);
    }
    return (v, g) => (a(), r("div", s3, [
      C(Ut, null, {
        default: h(() => [...g[2] || (g[2] = [
          $("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", o3, [
        t("div", n3, [
          C(Sn, { required: "" }, {
            default: h(() => [...g[3] || (g[3] = [
              $("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", a3, [
            t("input", {
              type: "text",
              class: Te(["name-input", { error: e.nameError || e.name.length === 0, valid: i.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: m
            }, null, 42, l3),
            l.value ? (a(), r("span", i3, "...")) : i.value ? (a(), r("span", r3, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), r("div", c3, f(e.nameError), 1)) : y("", !0),
          g[4] || (g[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", u3, [
          C(Sn, null, {
            default: h(() => [...g[5] || (g[5] = [
              $("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", d3, [
            (a(), r(j, null, he(c, (w) => t("label", {
              key: w.value,
              class: Te(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (p) => n("update:modelStrategy", w.value)
              }, null, 40, f3),
              t("div", m3, [
                t("span", v3, f(w.label), 1),
                t("span", p3, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", g3, [
          t("label", h3, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: g[0] || (g[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, y3),
            g[6] || (g[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", w3, [
          g[8] || (g[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", _3, [
            t("div", k3, [
              C(Sn, null, {
                default: h(() => [...g[7] || (g[7] = [
                  $("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              t("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: g[1] || (g[1] = (w) => n("update:torchBackend", w.target.value))
              }, [
                (a(!0), r(j, null, he(We(al), (w) => (a(), r("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, $3))), 128))
              ], 40, b3)
            ])
          ])
        ])
      ])
    ]));
  }
}), x3 = /* @__PURE__ */ me(C3, [["__scopeId", "data-v-89ea06a1"]]), S3 = { class: "import-flow" }, I3 = {
  key: 0,
  class: "import-empty"
}, E3 = { class: "git-import-section" }, T3 = { class: "git-url-input-row" }, P3 = ["disabled"], R3 = {
  key: 0,
  class: "git-error"
}, M3 = {
  key: 1,
  class: "import-configure"
}, D3 = { class: "selected-file-bar" }, L3 = {
  key: 0,
  class: "file-bar-content"
}, O3 = { class: "file-bar-info" }, A3 = { class: "file-bar-name" }, U3 = { class: "file-bar-size" }, N3 = {
  key: 1,
  class: "file-bar-content"
}, z3 = { class: "file-bar-info" }, F3 = { class: "file-bar-name" }, B3 = {
  key: 0,
  class: "preview-loading"
}, V3 = { class: "import-actions" }, W3 = {
  key: 2,
  class: "import-progress"
}, G3 = { class: "creating-intro" }, j3 = {
  key: 0,
  class: "progress-warning"
}, H3 = {
  key: 1,
  class: "import-error"
}, K3 = { class: "error-message" }, q3 = {
  key: 3,
  class: "import-complete"
}, Y3 = { class: "complete-message" }, J3 = { class: "complete-title" }, X3 = { class: "complete-details" }, Q3 = { class: "complete-actions" }, Z3 = /* @__PURE__ */ ue({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var Se, we, ge, Ce;
    const n = e, l = o, { previewTarballImport: i, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: m, getImportProgress: v } = tt();
    let g = null;
    const w = _(null), p = _(n.resumeImport ?? !1), k = _(!1), I = _(!1), b = _(""), T = _(!1), M = _(null), x = _(""), S = _(null), H = _(!1), K = _(null), B = _(null), E = _({
      name: ((Se = n.initialProgress) == null ? void 0 : Se.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), P = _(null), L = _({
      message: ((we = n.initialProgress) == null ? void 0 : we.message) ?? "Preparing import...",
      phase: ((ge = n.initialProgress) == null ? void 0 : ge.phase) ?? "",
      progress: ((Ce = n.initialProgress) == null ? void 0 : Ce.progress) ?? 0,
      error: null
    }), oe = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], X = F(() => {
      if (!B.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const de = B.value;
      return {
        sourceEnvironment: de.comfyui_version ? `ComfyUI ${de.comfyui_version}` : "Unknown",
        workflows: de.workflows.map((ce) => ce.name),
        models: de.models.map((ce) => ({
          filename: ce.filename,
          size: 0,
          type: ce.relative_path.split("/")[0] || "model"
        })),
        nodes: de.nodes.map((ce) => ce.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), N = F(() => !T.value && !M.value && B.value && E.value.name.length > 0 && !P.value && (w.value || S.value));
    async function O(de) {
      w.value = de, T.value = !0, M.value = null, B.value = null;
      try {
        const ce = await i(de);
        B.value = ce;
      } catch (ce) {
        M.value = ce instanceof Error ? ce.message : "Failed to analyze file", console.error("Preview error:", ce);
      } finally {
        T.value = !1;
      }
    }
    function U() {
      w.value = null, S.value = null, x.value = "", K.value = null, k.value = !1, I.value = !1, b.value = "", B.value = null, M.value = null, E.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, P.value = null, l("source-cleared");
    }
    function R() {
      Fe(), U(), p.value = !1, T.value = !1, H.value = !1, L.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function Q() {
      if (x.value.trim()) {
        H.value = !0, K.value = null;
        try {
          const de = await c(x.value.trim());
          S.value = x.value.trim(), B.value = de;
        } catch (de) {
          K.value = de instanceof Error ? de.message : "Failed to analyze repository";
        } finally {
          H.value = !1;
        }
      }
    }
    function Y(de) {
      try {
        const ce = new URL(de);
        return ce.host + ce.pathname.replace(/\.git$/, "");
      } catch {
        return de;
      }
    }
    async function ye(de) {
      if (!de) {
        P.value = "Environment name is required";
        return;
      }
      try {
        const ce = await u(de);
        P.value = ce.valid ? null : ce.error || "Invalid name";
      } catch {
        P.value = "Failed to validate name";
      }
    }
    async function _e() {
      if (E.value.name && !(!w.value && !S.value)) {
        p.value = !0, k.value = !1, L.value = { message: `Creating environment '${E.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let de;
          if (w.value)
            de = await d(
              w.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else if (S.value)
            de = await m(
              S.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          de.status === "started" ? Le() : (I.value = !1, b.value = de.message, p.value = !1, k.value = !0);
        } catch (de) {
          I.value = !1, b.value = de instanceof Error ? de.message : "Unknown error occurred during import", p.value = !1, k.value = !0;
        }
      }
    }
    async function Le() {
      if (g) return;
      const de = async () => {
        try {
          const Me = await v();
          return L.value = {
            message: Me.message,
            phase: Me.phase || "",
            progress: Me.progress ?? (Me.state === "importing" ? 50 : 0),
            error: Me.error || null
          }, Me.state === "complete" ? (Fe(), I.value = !0, b.value = `Environment '${Me.environment_name}' created successfully`, p.value = !1, k.value = !0, Me.environment_name && l("import-complete", Me.environment_name, E.value.switchAfterImport), !1) : Me.state === "error" ? (Fe(), I.value = !1, b.value = Me.error || Me.message, p.value = !1, k.value = !0, !1) : !0;
        } catch (Me) {
          return console.error("Failed to poll import progress:", Me), !0;
        }
      };
      await de() && (g = setInterval(async () => {
        await de() || Fe();
      }, 2e3));
    }
    function Fe() {
      g && (clearInterval(g), g = null);
    }
    function ie(de) {
      return de < 1024 ? `${de} B` : de < 1024 * 1024 ? `${(de / 1024).toFixed(1)} KB` : de < 1024 * 1024 * 1024 ? `${(de / (1024 * 1024)).toFixed(1)} MB` : `${(de / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Xe(async () => {
      try {
        const de = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", de.state, de), de.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", de.environment_name), p.value = !0, E.value.name = de.environment_name || E.value.name || "", L.value = {
          progress: de.progress ?? 0,
          message: de.message || "Importing...",
          phase: de.phase || "",
          error: null
        }, Le());
      } catch (de) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", de);
      }
    }), s({
      handleReset: R,
      isImporting: p,
      canImport: N
    }), (de, ce) => {
      var Me;
      return a(), r("div", S3, [
        !w.value && !S.value && !p.value ? (a(), r("div", I3, [
          C(Cx, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: O
          }),
          ce[7] || (ce[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", E3, [
            ce[5] || (ce[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", T3, [
              qe(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ce[0] || (ce[0] = (Re) => x.value = Re),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Ht(Q, ["enter"]),
                disabled: H.value
              }, null, 40, P3), [
                [zt, x.value]
              ]),
              C(le, {
                variant: "primary",
                size: "sm",
                disabled: !x.value.trim() || H.value,
                onClick: Q
              }, {
                default: h(() => [
                  $(f(H.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            K.value ? (a(), r("div", R3, f(K.value), 1)) : y("", !0),
            ce[6] || (ce[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || S.value) && !p.value && !k.value ? (a(), r("div", M3, [
          t("div", D3, [
            w.value ? (a(), r("div", L3, [
              ce[8] || (ce[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", O3, [
                t("div", A3, f(w.value.name), 1),
                t("div", U3, f(ie(w.value.size)), 1)
              ])
            ])) : S.value ? (a(), r("div", N3, [
              ce[10] || (ce[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", z3, [
                t("div", F3, f(Y(S.value)), 1),
                ce[9] || (ce[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            C(le, {
              variant: "ghost",
              size: "sm",
              onClick: U
            }, {
              default: h(() => [...ce[11] || (ce[11] = [
                $(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          T.value ? (a(), r("div", B3, [...ce[12] || (ce[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : M.value ? (a(), D(Xt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [M.value]
          }, null, 8, ["details"])) : B.value ? (a(), D(t3, {
            key: 2,
            "source-environment": X.value.sourceEnvironment,
            workflows: X.value.workflows,
            models: X.value.models,
            nodes: X.value.nodes,
            "git-branch": X.value.gitBranch,
            "git-commit": X.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          B.value ? (a(), D(x3, {
            key: 3,
            name: E.value.name,
            "onUpdate:name": ce[1] || (ce[1] = (Re) => E.value.name = Re),
            "model-strategy": E.value.modelStrategy,
            "onUpdate:modelStrategy": ce[2] || (ce[2] = (Re) => E.value.modelStrategy = Re),
            "torch-backend": E.value.torchBackend,
            "onUpdate:torchBackend": ce[3] || (ce[3] = (Re) => E.value.torchBackend = Re),
            "switch-after-import": E.value.switchAfterImport,
            "onUpdate:switchAfterImport": ce[4] || (ce[4] = (Re) => E.value.switchAfterImport = Re),
            "name-error": P.value,
            onValidateName: ye
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          E.value.modelStrategy === "skip" && ((Me = B.value) != null && Me.models_needing_download) ? (a(), D(Xt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${B.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", V3, [
            C(le, {
              variant: "secondary",
              size: "md",
              onClick: U
            }, {
              default: h(() => [...ce[13] || (ce[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(le, {
              variant: "primary",
              size: "md",
              disabled: !N.value,
              onClick: _e
            }, {
              default: h(() => [...ce[14] || (ce[14] = [
                $(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (a(), r("div", W3, [
          t("p", G3, [
            ce[15] || (ce[15] = $(" Importing environment ", -1)),
            t("strong", null, f(E.value.name), 1),
            ce[16] || (ce[16] = $("... ", -1))
          ]),
          C(zn, {
            progress: L.value.progress,
            message: L.value.message,
            "current-phase": L.value.phase,
            variant: L.value.error ? "error" : "default",
            "show-steps": !0,
            steps: oe
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          L.value.error ? y("", !0) : (a(), r("p", j3, " This may take several minutes. Please wait... ")),
          L.value.error ? (a(), r("div", H3, [
            t("p", K3, f(L.value.error), 1)
          ])) : y("", !0)
        ])) : k.value ? (a(), r("div", q3, [
          t("div", {
            class: Te(["complete-icon", I.value ? "success" : "error"])
          }, f(I.value ? "✓" : "✕"), 3),
          t("div", Y3, [
            t("div", J3, f(I.value ? "Import Successful" : "Import Failed"), 1),
            t("div", X3, f(b.value), 1)
          ]),
          t("div", Q3, [
            C(le, {
              variant: "primary",
              size: "md",
              onClick: R
            }, {
              default: h(() => [...ce[17] || (ce[17] = [
                $(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Ur = /* @__PURE__ */ me(Z3, [["__scopeId", "data-v-72cbc04e"]]), e5 = /* @__PURE__ */ ue({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, n = _(!1);
    function l(i, c) {
      c && o("import-complete-switch", i);
    }
    return (i, c) => (a(), r(j, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: c[0] || (c[0] = (u) => n.value = !0)
          })
        ]),
        content: h(() => [
          C(Ur, { onImportComplete: l })
        ]),
        _: 1
      }),
      C(as, {
        show: n.value,
        title: "How Import Works",
        onClose: c[1] || (c[1] = (u) => n.value = !1)
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
}), t5 = /* @__PURE__ */ me(e5, [["__scopeId", "data-v-e13bfe76"]]), wn = co(), s5 = 5e3, lo = _([]), pa = _(!1), ga = _(null);
let Ro = null;
async function _n(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function Nr(e) {
  const s = F(
    () => lo.value.filter((p) => p.status === "running")
  ), o = F(
    () => lo.value.filter((p) => p.status === "deploying")
  ), n = F(
    () => lo.value.filter((p) => p.status === "stopped")
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
    return [...lo.value].sort(
      (k, I) => (p[k.status] ?? 5) - (p[I.status] ?? 5)
    );
  });
  async function c() {
    pa.value = !0, ga.value = null;
    try {
      let p;
      if (!wn) {
        const k = await _n("/v2/comfygit/deploy/instances");
        if (!k.ok)
          throw new Error(`Failed to fetch instances: ${k.status}`);
        p = await k.json();
      }
      lo.value = p.instances;
    } catch (p) {
      ga.value = p instanceof Error ? p.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", p);
    } finally {
      pa.value = !1;
    }
  }
  function u(p, k) {
    if (p.provider === "custom" && p.worker_name) {
      const I = p.id.includes(":") ? p.id.split(":").slice(1).join(":") : p.id;
      return k === "terminate" ? `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${I}` : `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${I}/${k}`;
    }
    return k === "terminate" ? `/v2/comfygit/deploy/${p.provider}/${p.id}` : `/v2/comfygit/deploy/${p.provider}/${p.id}/${k}`;
  }
  async function d(p) {
    try {
      if (!wn) {
        const k = u(p, "stop"), I = await _n(k, { method: "POST" });
        if (!I.ok) {
          const b = await I.json();
          throw new Error(b.message || "Failed to stop instance");
        }
      }
      await c();
    } catch (k) {
      throw console.error("[useDeployInstances] stopInstance error:", k), k;
    }
  }
  async function m(p) {
    try {
      if (!wn) {
        const k = u(p, "start"), I = await _n(k, { method: "POST" });
        if (!I.ok) {
          const b = await I.json();
          throw new Error(b.message || "Failed to start instance");
        }
      }
      await c();
    } catch (k) {
      throw console.error("[useDeployInstances] startInstance error:", k), k;
    }
  }
  async function v(p) {
    try {
      if (!wn) {
        const k = u(p, "terminate"), I = await _n(k, { method: "DELETE" });
        if (!I.ok) {
          const b = await I.json();
          throw new Error(b.message || "Failed to terminate instance");
        }
      }
      await c();
    } catch (k) {
      throw console.error("[useDeployInstances] terminateInstance error:", k), k;
    }
  }
  function g() {
    Ro || (Ro = window.setInterval(c, s5));
  }
  function w() {
    Ro && (clearInterval(Ro), Ro = null);
  }
  return yt(o, (p) => {
    p.length > 0 && g();
  }, { immediate: !0 }), e != null && e.autoStart && (c(), g()), {
    // State
    instances: lo,
    isLoading: pa,
    error: ga,
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
    startPolling: g,
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
}, f5 = {
  key: 4,
  class: "detail total-cost"
}, m5 = {
  key: 0,
  class: "deployment-progress"
}, v5 = { class: "progress-message" }, p5 = { class: "instance-actions" }, g5 = /* @__PURE__ */ ue({
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
      class: Te(["instance-card", l.value])
    }, [
      t("div", o5, [
        t("span", n5, f(o.value), 1),
        t("span", a5, f(e.instance.name), 1),
        t("span", {
          class: Te(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (a(), r("span", l5)) : y("", !0),
          $(" " + f(n.value), 1)
        ], 2)
      ]),
      t("div", i5, [
        e.instance.gpu_type ? (a(), r("span", r5, f(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (a(), r("span", c5, f(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (a(), r("span", u5, f(u(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (a(), r("span", d5, "$" + f(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (a(), r("span", f5, "$" + f(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (a(), r("div", m5, [
        t("div", v5, f(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (a(), D(ea, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", p5, [
        e.instance.status === "running" && e.instance.comfyui_url ? (a(), D(le, {
          key: 0,
          variant: "primary",
          size: "xs",
          onClick: i
        }, {
          default: h(() => [...m[3] || (m[3] = [
            $(" Open ComfyUI ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.console_url && e.instance.provider !== "custom" ? (a(), D(le, {
          key: 1,
          variant: "ghost",
          size: "xs",
          onClick: c
        }, {
          default: h(() => [...m[4] || (m[4] = [
            $(" Console ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.status === "running" ? (a(), D(le, {
          key: 2,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[0] || (m[0] = (v) => d.$emit("stop", e.instance))
        }, {
          default: h(() => [...m[5] || (m[5] = [
            $(" Stop ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        e.instance.status === "stopped" ? (a(), D(le, {
          key: 3,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[1] || (m[1] = (v) => d.$emit("start", e.instance))
        }, {
          default: h(() => [...m[6] || (m[6] = [
            $(" Start ", -1)
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
          default: h(() => [...m[7] || (m[7] = [
            $(" Terminate ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])
      ])
    ], 2));
  }
}), h5 = /* @__PURE__ */ me(g5, [["__scopeId", "data-v-746c3894"]]), y5 = { class: "instances-tab" }, w5 = { class: "instances-header" }, _5 = {
  key: 0,
  class: "loading-state"
}, k5 = {
  key: 1,
  class: "empty-state"
}, b5 = {
  key: 2,
  class: "instances-list"
}, $5 = /* @__PURE__ */ ue({
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
    return (n, l) => (a(), r("div", y5, [
      t("div", w5, [
        C(Ut, null, {
          default: h(() => [...l[4] || (l[4] = [
            $("Active Instances", -1)
          ])]),
          _: 1
        }),
        C(le, {
          variant: "ghost",
          size: "xs",
          loading: e.isLoading,
          onClick: l[0] || (l[0] = (i) => n.$emit("refresh"))
        }, {
          default: h(() => [...l[5] || (l[5] = [
            $(" Refresh ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      e.isLoading && e.instances.length === 0 ? (a(), r("div", _5, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        $(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (a(), r("div", k5, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (a(), r("div", b5, [
        (a(!0), r(j, null, he(o.value, (i) => (a(), D(h5, {
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
}), C5 = /* @__PURE__ */ me($5, [["__scopeId", "data-v-ba614fc3"]]), x5 = { class: "remote-header" }, S5 = { class: "remote-info" }, I5 = { class: "remote-icon" }, E5 = { class: "remote-name" }, T5 = {
  key: 0,
  class: "default-badge"
}, P5 = {
  key: 1,
  class: "sync-badge"
}, R5 = {
  key: 0,
  class: "ahead"
}, M5 = {
  key: 1,
  class: "behind"
}, D5 = {
  key: 1,
  class: "synced"
}, L5 = ["href"], O5 = {
  key: 1,
  class: "remote-url-text"
}, A5 = { class: "remote-actions" }, U5 = /* @__PURE__ */ ue({
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
      class: Te(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", x5, [
        t("div", S5, [
          t("span", I5, f(o.value ? "🔗" : "🌐"), 1),
          t("span", E5, f(e.remote.name), 1),
          o.value ? (a(), r("span", T5, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", P5, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", R5, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", M5, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", D5, "✓ synced"))
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
        }, f(l.value), 9, L5)) : (a(), r("span", O5, f(l.value), 1))
      ]),
      t("div", A5, [
        C(le, {
          variant: "secondary",
          size: "xs",
          loading: e.isFetching,
          onClick: c[1] || (c[1] = (u) => i.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...c[4] || (c[4] = [
            $(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        e.syncStatus && e.syncStatus.ahead > 0 ? (a(), D(le, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: e.isPushing,
          onClick: c[2] || (c[2] = (u) => i.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            $(" Push ↑" + f(e.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : y("", !0),
        C(le, {
          variant: e.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: c[3] || (c[3] = (u) => i.$emit("select", e.remote.name))
        }, {
          default: h(() => [
            $(f(e.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), zr = /* @__PURE__ */ me(U5, [["__scopeId", "data-v-d687d161"]]), N5 = { class: "runpod-tab" }, z5 = { class: "api-key-card" }, F5 = { class: "api-key-row" }, B5 = { class: "api-key-input-wrapper" }, V5 = ["type", "disabled"], W5 = ["title"], G5 = { class: "status-icon" }, j5 = { class: "status-text" }, H5 = {
  key: 0,
  class: "credit-balance"
}, K5 = { class: "config-card" }, q5 = { class: "config-row" }, Y5 = ["disabled"], J5 = {
  key: 0,
  value: ""
}, X5 = {
  key: 1,
  value: "",
  disabled: ""
}, Q5 = ["value", "disabled"], Z5 = { class: "config-row" }, eS = {
  key: 0,
  class: "loading-inline"
}, tS = { class: "no-volumes-state" }, sS = { class: "no-volumes-text" }, oS = ["value"], nS = { class: "config-row" }, aS = ["disabled"], lS = {
  key: 0,
  value: ""
}, iS = {
  key: 1,
  value: ""
}, rS = {
  key: 2,
  value: ""
}, cS = ["value"], uS = { class: "config-row" }, dS = { class: "radio-group" }, fS = { class: "radio-option" }, mS = { class: "radio-label" }, vS = { class: "radio-option disabled" }, pS = { class: "radio-label" }, gS = { class: "config-row" }, hS = { class: "radio-group" }, yS = { class: "radio-option" }, wS = { class: "radio-label" }, _S = { class: "radio-option disabled" }, kS = { class: "radio-label" }, bS = { class: "config-row" }, $S = {
  key: 0,
  class: "loading-text"
}, CS = {
  key: 1,
  class: "empty-remotes"
}, xS = { class: "remotes-list" }, SS = {
  key: 0,
  class: "sync-warning"
}, IS = { class: "warning-content" }, ES = { class: "remotes-footer" }, TS = { class: "summary-card" }, PS = {
  key: 0,
  class: "loading-text"
}, RS = { class: "summary-row" }, MS = { class: "summary-value" }, DS = { class: "summary-row" }, LS = { class: "summary-value" }, OS = { class: "summary-row" }, AS = { class: "summary-value" }, US = {
  key: 0,
  class: "summary-sub-row"
}, NS = { class: "summary-sub-label" }, zS = {
  key: 1,
  class: "summary-sub-row warning"
}, FS = { class: "summary-sub-label" }, BS = { class: "summary-row" }, VS = { class: "summary-value" }, WS = { class: "summary-row" }, GS = { class: "summary-value" }, jS = { class: "deployment-summary" }, HS = { class: "summary-columns" }, KS = { class: "summary-column" }, qS = { class: "pricing-row" }, YS = { class: "pricing-value" }, JS = { class: "pricing-row" }, XS = { class: "pricing-value" }, QS = { class: "pricing-row" }, ZS = { class: "pricing-value" }, e8 = { class: "pricing-row total" }, t8 = { class: "pricing-value" }, s8 = { class: "summary-column" }, o8 = { class: "spec-row" }, n8 = { class: "spec-row" }, a8 = {
  key: 0,
  class: "spec-row"
}, l8 = {
  key: 1,
  class: "spec-row spot-warning"
}, i8 = {
  key: 4,
  class: "deploy-actions"
}, r8 = { class: "progress-content" }, c8 = { class: "phase-indicator" }, u8 = { key: 0 }, d8 = { key: 1 }, f8 = { key: 2 }, m8 = {
  key: 3,
  class: "spinner"
}, v8 = { class: "phase-text" }, p8 = { class: "phase-name" }, g8 = { class: "phase-detail" }, h8 = {
  key: 0,
  class: "ready-actions"
}, y8 = { class: "console-link" }, w8 = ["href"], _8 = /* @__PURE__ */ ue({
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
      validateDeploy: g,
      getRemotes: w,
      getRemoteSyncStatus: p,
      fetchRemote: k,
      pushToRemote: I,
      getDataCenters: b
    } = tt(), T = _(!1), M = _(""), x = _(!1), S = _(!1), H = _(null), K = _(null), B = _(""), E = _(""), P = _(""), L = _("SECURE"), oe = _("ON_DEMAND"), X = _("my-comfyui-deploy"), N = _([]), O = _({}), U = _(!1), R = _(null), Q = _(null), Y = _(null), ye = _([]), _e = _(!1), Le = _([]), Fe = _(!1), ie = _([]), Se = _(!1), we = _(null), ge = _(!1), Ce = _(!1), de = _(null), ce = _(!1), Me = _(null), Re = _(null), A = _(null), W = _(!1), te = _(null), ae = _(!1), ve = _(!1), pe = F(() => Le.value.find((xe) => xe.id === E.value) || null), Ie = F(() => B.value ? Le.value.filter((xe) => xe.data_center_id === B.value) : Le.value), Ee = F(() => ie.value.filter((xe) => xe.available)), ne = F(() => R.value && O.value[R.value] || null), fe = F(() => {
      if (!R.value) return null;
      const xe = N.value.find((Z) => Z.name === R.value);
      return (xe == null ? void 0 : xe.fetch_url) || null;
    }), Ue = F(() => x.value && E.value && P.value && fe.value && !Ce.value && !W.value), Pe = (xe) => {
      const Z = ie.value.find((gt) => gt.id === P.value);
      if (!Z) return "0.00";
      if (xe === "SECURE") return (Z.securePrice ?? 0).toFixed(2);
      if (xe === "COMMUNITY") return (Z.communityPrice ?? 0).toFixed(2);
      const He = L.value === "SECURE";
      return xe === "ON_DEMAND" ? He ? (Z.securePrice ?? 0).toFixed(2) : (Z.communityPrice ?? 0).toFixed(2) : He ? (Z.secureSpotPrice ?? 0).toFixed(2) : (Z.communitySpotPrice ?? 0).toFixed(2);
    }, ee = F(() => {
      const xe = ie.value.find((ls) => ls.id === P.value), Z = Le.value.find((ls) => ls.id === E.value);
      if (!xe) return null;
      const He = L.value === "SECURE", gt = oe.value === "SPOT";
      let Jt;
      gt ? Jt = He ? xe.secureSpotPrice ?? 0 : xe.communitySpotPrice ?? 0 : Jt = He ? xe.securePrice ?? 0 : xe.communityPrice ?? 0;
      const ys = Z ? Z.size_gb * 14e-5 : 0, ws = 4e-3;
      return {
        gpu: Jt,
        volume: ys,
        container: ws,
        total: Jt + ys + ws
      };
    });
    async function J() {
      await Ve(), await Promise.all([vt(), Oe()]);
    }
    async function Oe() {
      U.value = !0;
      try {
        const xe = await w();
        N.value = xe.remotes, await Promise.all(
          xe.remotes.map(async (He) => {
            const gt = await p(He.name);
            gt && (O.value[He.name] = gt);
          })
        );
        const Z = xe.remotes.find((He) => He.is_default);
        Z ? R.value = Z.name : xe.remotes.length > 0 && (R.value = xe.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        U.value = !1;
      }
    }
    async function be(xe) {
      Q.value = xe;
      try {
        await k(xe);
        const Z = await p(xe);
        Z && (O.value[xe] = Z), o("toast", `Fetched from ${xe}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        Q.value = null;
      }
    }
    async function ke(xe) {
      Y.value = xe;
      try {
        await I(xe, { force: !1 });
        const Z = await p(xe);
        Z && (O.value[xe] = Z), o("toast", `Pushed to ${xe}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        Y.value = null;
      }
    }
    function G(xe) {
      R.value = xe;
    }
    async function V() {
      if (M.value) {
        S.value = !0, H.value = null;
        try {
          const xe = await l(M.value, !0);
          xe.status === "success" ? (x.value = !0, K.value = xe.credit_balance ?? null, H.value = { type: "success", message: xe.message }, await J()) : H.value = { type: "error", message: xe.message };
        } catch (xe) {
          H.value = {
            type: "error",
            message: xe instanceof Error ? xe.message : "Connection test failed"
          };
        } finally {
          S.value = !1;
        }
      }
    }
    async function re() {
      try {
        await v(), M.value = "", x.value = !1, H.value = null, K.value = null, ye.value = [], B.value = "", Le.value = [], E.value = "", ie.value = [], P.value = "", we.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function Ve() {
      Fe.value = !0, _e.value = !0;
      try {
        const xe = await i();
        Le.value = xe.volumes;
        const Z = /* @__PURE__ */ new Map();
        for (const He of xe.volumes)
          He.data_center_id && !Z.has(He.data_center_id) && Z.set(He.data_center_id, {
            id: He.data_center_id,
            name: He.data_center_name || He.data_center_id,
            available: !0
          });
        if (xe.volumes.length === 0) {
          const He = await b();
          ye.value = He.data_centers;
        } else
          ye.value = Array.from(Z.values());
        if (Le.value.length > 0) {
          const He = Le.value[0];
          E.value = He.id, He.data_center_id && (B.value = He.data_center_id, await Qe(He.data_center_id));
        } else ye.value.length > 0 && (B.value = ye.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        Fe.value = !1, _e.value = !1;
      }
    }
    async function Qe(xe) {
      Se.value = !0;
      try {
        const Z = await c(xe);
        ie.value = Z.gpu_types;
        const He = ie.value.find((gt) => gt.available);
        He ? P.value = He.id : P.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        Se.value = !1;
      }
    }
    yt(B, async (xe) => {
      if (!xe || Fe.value) return;
      const Z = Le.value.find((He) => He.id === E.value);
      Z && Z.data_center_id !== xe && (E.value = ""), await Qe(xe);
    }), yt(E, async (xe) => {
      if (!xe) {
        ie.value = [], P.value = "";
        return;
      }
      if (Fe.value) return;
      const Z = Le.value.find((He) => He.id === xe);
      Z && Z.data_center_id !== B.value ? B.value = Z.data_center_id : Z && await Qe(Z.data_center_id);
    });
    async function vt() {
      ge.value = !0;
      try {
        we.value = await n();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        ge.value = !1;
      }
    }
    async function at() {
      if (!(!P.value || !E.value)) {
        W.value = !0, de.value = null;
        try {
          const xe = await g();
          te.value = xe, xe.can_export ? xe.warnings.models_without_sources.length > 0 ? ve.value = !0 : await Ft() : ae.value = !0;
        } catch (xe) {
          de.value = {
            status: "error",
            message: xe instanceof Error ? xe.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          W.value = !1;
        }
      }
    }
    async function ut() {
      ve.value = !1, await Ft();
    }
    async function Mt() {
      try {
        const xe = await g();
        te.value = xe;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function Ft() {
      Ce.value = !0;
      try {
        let xe;
        if (oe.value === "SPOT") {
          const He = ie.value.find((gt) => gt.id === P.value);
          He && (xe = L.value === "SECURE" ? He.secureSpotPrice : He.communitySpotPrice);
        }
        const Z = await u({
          gpu_type_id: P.value,
          pod_name: X.value || "my-comfyui-deploy",
          network_volume_id: E.value,
          cloud_type: L.value,
          pricing_type: oe.value,
          spot_bid: xe,
          import_source: fe.value
        });
        de.value = Z, Z.status === "success" && Z.pod_id ? (Me.value = Z.pod_id, ce.value = !0, Yt(Z.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", Z.message, "error");
      } catch (xe) {
        de.value = {
          status: "error",
          message: xe instanceof Error ? xe.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        Ce.value = !1;
      }
    }
    function Yt(xe) {
      Ms(xe), A.value = window.setInterval(() => Ms(xe), 3e3);
    }
    function Ws() {
      A.value && (clearInterval(A.value), A.value = null);
    }
    async function Ms(xe) {
      try {
        const Z = await d(xe);
        Re.value = Z, (Z.phase === "READY" || Z.phase === "ERROR" || Z.phase === "STOPPED") && (Ws(), Z.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (Z) {
        console.error("Failed to poll deployment status:", Z);
      }
    }
    function no() {
      ce.value = !1, Ws(), Me.value = null, Re.value = null;
    }
    function Co() {
      var xe;
      (xe = Re.value) != null && xe.comfyui_url && window.open(Re.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function xo(xe) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[xe || ""] || "Initializing...";
    }
    function So(xe) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[xe || ""] ?? 10;
    }
    return Xe(async () => {
      try {
        const xe = await m(!0);
        xe.has_key && xe.key_preview && (M.value = `****${xe.key_preview}`, xe.valid ? (x.value = !0, K.value = xe.credit_balance ?? null, H.value = { type: "success", message: "Connected to RunPod" }, await J()) : xe.error && (H.value = { type: "error", message: xe.error }));
      } catch {
      }
    }), oo(() => {
      Ws();
    }), (xe, Z) => {
      var He, gt, Jt, ys, ws, ls;
      return a(), r(j, null, [
        t("div", N5, [
          C(lt, { title: "RUNPOD API KEY" }, {
            default: h(() => [
              t("div", z5, [
                t("div", F5, [
                  t("div", B5, [
                    qe(t("input", {
                      "onUpdate:modelValue": Z[0] || (Z[0] = (Ne) => M.value = Ne),
                      type: T.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: x.value
                    }, null, 8, V5), [
                      [Qn, M.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: Z[1] || (Z[1] = (Ne) => T.value = !T.value),
                      title: T.value ? "Hide key" : "Show key"
                    }, f(T.value ? "👁" : "👁‍🗨"), 9, W5)
                  ]),
                  x.value ? y("", !0) : (a(), D(le, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: S.value,
                    disabled: !M.value || S.value,
                    onClick: V
                  }, {
                    default: h(() => [...Z[16] || (Z[16] = [
                      $(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  x.value ? (a(), D(le, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: re
                  }, {
                    default: h(() => [...Z[17] || (Z[17] = [
                      $(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                H.value ? (a(), r("div", {
                  key: 0,
                  class: Te(["connection-status", H.value.type])
                }, [
                  t("span", G5, f(H.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", j5, f(H.value.message), 1),
                  K.value !== null ? (a(), r("span", H5, " $" + f(K.value.toFixed(2)) + " credit ", 1)) : y("", !0)
                ], 2)) : y("", !0),
                Z[18] || (Z[18] = t("div", { class: "api-key-help" }, [
                  t("span", { class: "help-icon" }, "i"),
                  t("span", { class: "help-text" }, [
                    $(" Get your API key at "),
                    t("a", {
                      href: "https://runpod.io/console/user/settings",
                      target: "_blank",
                      rel: "noopener"
                    }, "runpod.io/console/user/settings"),
                    $(". Key stored locally, never sent to ComfyGit servers. ")
                  ])
                ], -1))
              ])
            ]),
            _: 1
          }),
          x.value ? (a(), D(lt, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: h(() => [
              t("div", K5, [
                t("div", q5, [
                  Z[19] || (Z[19] = t("label", { class: "config-label" }, "Region", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": Z[2] || (Z[2] = (Ne) => B.value = Ne),
                    class: "config-select",
                    disabled: _e.value
                  }, [
                    _e.value ? (a(), r("option", J5, "Loading...")) : B.value ? y("", !0) : (a(), r("option", X5, "Select a region")),
                    (a(!0), r(j, null, he(ye.value, (Ne) => (a(), r("option", {
                      key: Ne.id,
                      value: Ne.id,
                      disabled: !Ne.available
                    }, f(Ne.id) + " (" + f(Ne.name) + ")" + f(Ne.available ? "" : " [Unavailable]"), 9, Q5))), 128))
                  ], 8, Y5), [
                    [hs, B.value]
                  ])
                ]),
                t("div", Z5, [
                  Z[24] || (Z[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  Fe.value ? (a(), r("div", eS, "Loading volumes...")) : Ie.value.length === 0 ? (a(), r(j, { key: 1 }, [
                    t("div", tS, [
                      Z[20] || (Z[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", sS, "No volumes in " + f(B.value || "this region"), 1)
                    ]),
                    Z[21] || (Z[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    Z[22] || (Z[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (a(), r(j, { key: 2 }, [
                    qe(t("select", {
                      "onUpdate:modelValue": Z[3] || (Z[3] = (Ne) => E.value = Ne),
                      class: "config-select"
                    }, [
                      (a(!0), r(j, null, he(Ie.value, (Ne) => (a(), r("option", {
                        key: Ne.id,
                        value: Ne.id
                      }, f(Ne.name) + " (" + f(Ne.size_gb) + "GB) ", 9, oS))), 128))
                    ], 512), [
                      [hs, E.value]
                    ]),
                    Z[23] || (Z[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", nS, [
                  Z[25] || (Z[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": Z[4] || (Z[4] = (Ne) => P.value = Ne),
                    class: "config-select",
                    disabled: Se.value || !E.value
                  }, [
                    E.value ? Se.value ? (a(), r("option", iS, "Loading GPUs...")) : Ee.value.length === 0 ? (a(), r("option", rS, "No GPUs available in this region")) : y("", !0) : (a(), r("option", lS, "Select a volume first")),
                    (a(!0), r(j, null, he(Ee.value, (Ne) => (a(), r("option", {
                      key: Ne.id,
                      value: Ne.id
                    }, f(Ne.displayName) + " (" + f(Ne.memoryInGb) + "GB) - $" + f(L.value === "SECURE" ? (Ne.securePrice ?? 0).toFixed(2) : (Ne.communityPrice ?? 0).toFixed(2)) + "/hr " + f(Ne.stockStatus ? `[${Ne.stockStatus}]` : ""), 9, cS))), 128))
                  ], 8, aS), [
                    [hs, P.value]
                  ])
                ]),
                t("div", uS, [
                  Z[26] || (Z[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", dS, [
                    t("label", fS, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Z[5] || (Z[5] = (Ne) => L.value = Ne),
                        value: "SECURE"
                      }, null, 512), [
                        [Zt, L.value]
                      ]),
                      t("span", mS, "Secure ($" + f(Pe("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", vS, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Z[6] || (Z[6] = (Ne) => L.value = Ne),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [Zt, L.value]
                      ]),
                      t("span", pS, "Community ($" + f(Pe("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", gS, [
                  Z[27] || (Z[27] = t("label", { class: "config-label" }, [
                    $(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", hS, [
                    t("label", yS, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Z[7] || (Z[7] = (Ne) => oe.value = Ne),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Zt, oe.value]
                      ]),
                      t("span", wS, "On-Demand ($" + f(Pe("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", _S, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Z[8] || (Z[8] = (Ne) => oe.value = Ne),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [Zt, oe.value]
                      ]),
                      t("span", kS, "Spot ($" + f(Pe("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", bS, [
                  Z[28] || (Z[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  qe(t("input", {
                    "onUpdate:modelValue": Z[9] || (Z[9] = (Ne) => X.value = Ne),
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
          x.value ? (a(), D(lt, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: h(() => [
              U.value ? (a(), r("div", $S, "Loading remotes...")) : N.value.length === 0 ? (a(), r("div", CS, [
                Z[30] || (Z[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                C(le, {
                  variant: "primary",
                  size: "xs",
                  onClick: Z[10] || (Z[10] = (Ne) => o("navigate", "remotes"))
                }, {
                  default: h(() => [...Z[29] || (Z[29] = [
                    $(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (a(), r(j, { key: 2 }, [
                t("div", xS, [
                  (a(!0), r(j, null, he(N.value, (Ne) => (a(), D(zr, {
                    key: Ne.name,
                    remote: Ne,
                    "sync-status": O.value[Ne.name],
                    "is-selected": R.value === Ne.name,
                    "is-fetching": Q.value === Ne.name,
                    "is-pushing": Y.value === Ne.name,
                    onFetch: be,
                    onPush: ke,
                    onSelect: G
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                ne.value && ne.value.ahead > 0 ? (a(), r("div", SS, [
                  Z[31] || (Z[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", IS, [
                    t("strong", null, f(ne.value.ahead) + " unpushed commit" + f(ne.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + f(R.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  C(le, {
                    variant: "primary",
                    size: "xs",
                    loading: Y.value === R.value,
                    onClick: Z[11] || (Z[11] = (Ne) => R.value && ke(R.value))
                  }, {
                    default: h(() => [
                      $(" Push to " + f(R.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", ES, [
                  C(le, {
                    variant: "link",
                    size: "xs",
                    onClick: Z[12] || (Z[12] = (Ne) => o("navigate", "remotes"))
                  }, {
                    default: h(() => [...Z[32] || (Z[32] = [
                      $(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : y("", !0),
          x.value ? (a(), D(lt, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: h(() => [
              t("div", TS, [
                ge.value ? (a(), r("div", PS, "Loading environment summary...")) : we.value ? (a(), r(j, { key: 1 }, [
                  t("div", RS, [
                    Z[33] || (Z[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", MS, f(we.value.comfyui_version), 1)
                  ]),
                  t("div", DS, [
                    Z[34] || (Z[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", LS, f(we.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", OS, [
                    Z[35] || (Z[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", AS, f(we.value.model_count) + " models", 1)
                  ]),
                  we.value.models_with_sources > 0 ? (a(), r("div", US, [
                    t("span", NS, "└─ " + f(we.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  we.value.models_without_sources > 0 ? (a(), r("div", zS, [
                    t("span", FS, "└─ " + f(we.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", BS, [
                    Z[36] || (Z[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", VS, f(we.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", WS, [
                    Z[37] || (Z[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", GS, "~" + f(we.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          x.value && ee.value ? (a(), D(lt, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: h(() => {
              var Ne, is;
              return [
                t("div", jS, [
                  t("div", HS, [
                    t("div", KS, [
                      Z[42] || (Z[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", qS, [
                        Z[38] || (Z[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", YS, "$" + f(ee.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", JS, [
                        Z[39] || (Z[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", XS, "$" + f(ee.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", QS, [
                        Z[40] || (Z[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", ZS, "$" + f(ee.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      Z[43] || (Z[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", e8, [
                        Z[41] || (Z[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", t8, "~$" + f(ee.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", s8, [
                      Z[45] || (Z[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", o8, [
                        t("span", null, f(((Ne = ie.value.find((se) => se.id === P.value)) == null ? void 0 : Ne.displayName) || "GPU") + " (" + f(((is = ie.value.find((se) => se.id === P.value)) == null ? void 0 : is.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", n8, [
                        t("span", null, "Region: " + f(B.value), 1)
                      ]),
                      pe.value ? (a(), r("div", a8, [
                        t("span", null, "Volume: " + f(pe.value.name), 1)
                      ])) : y("", !0),
                      oe.value === "SPOT" ? (a(), r("div", l8, [...Z[44] || (Z[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          x.value ? (a(), r("div", i8, [
            C(le, {
              variant: "primary",
              size: "md",
              loading: W.value || Ce.value,
              disabled: !Ue.value,
              onClick: at
            }, {
              default: h(() => [
                Z[46] || (Z[46] = t("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  t("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1)),
                $(" " + f(W.value ? "Validating..." : Ce.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          de.value ? (a(), D(lt, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: h(() => [
              C(Et, {
                status: de.value.status === "success" ? "synced" : "broken"
              }, so({
                icon: h(() => [
                  $(f(de.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  $(f(de.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: h(() => [
                  $(f(de.value.message), 1)
                ]),
                actions: h(() => [
                  C(le, {
                    variant: "ghost",
                    size: "xs",
                    onClick: Z[13] || (Z[13] = (Ne) => de.value = null)
                  }, {
                    default: h(() => [...Z[47] || (Z[47] = [
                      $(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                de.value.pod_id ? {
                  name: "details",
                  fn: h(() => [
                    C(dt, {
                      label: "Pod ID:",
                      value: de.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : y("", !0)
        ]),
        ce.value ? (a(), D(mt, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((He = Re.value) == null ? void 0 : He.phase) === "READY" || ((gt = Re.value) == null ? void 0 : gt.phase) === "ERROR" || ((Jt = Re.value) == null ? void 0 : Jt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: no
        }, so({
          body: h(() => {
            var Ne, is, se, q, Ae, je, ot, ft, Dt, rs, Gs, js;
            return [
              t("div", r8, [
                t("div", c8, [
                  t("div", {
                    class: Te(["phase-icon", (is = (Ne = Re.value) == null ? void 0 : Ne.phase) == null ? void 0 : is.toLowerCase()])
                  }, [
                    ((se = Re.value) == null ? void 0 : se.phase) === "READY" ? (a(), r("span", u8, "✓")) : ((q = Re.value) == null ? void 0 : q.phase) === "ERROR" ? (a(), r("span", d8, "✕")) : ((Ae = Re.value) == null ? void 0 : Ae.phase) === "STOPPED" ? (a(), r("span", f8, "○")) : (a(), r("span", m8, "⟳"))
                  ], 2),
                  t("div", v8, [
                    t("div", p8, f(xo((je = Re.value) == null ? void 0 : je.phase)), 1),
                    t("div", g8, f(((ot = Re.value) == null ? void 0 : ot.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                C(ea, {
                  progress: So((ft = Re.value) == null ? void 0 : ft.phase),
                  variant: ((Dt = Re.value) == null ? void 0 : Dt.phase) === "ERROR" ? "error" : ((rs = Re.value) == null ? void 0 : rs.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Gs = Re.value) == null ? void 0 : Gs.phase) === "READY" ? (a(), r("div", h8, [
                  C(le, {
                    variant: "primary",
                    size: "md",
                    onClick: Co
                  }, {
                    default: h(() => [...Z[48] || (Z[48] = [
                      $(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                t("div", y8, [
                  (js = Re.value) != null && js.console_url ? (a(), r("a", {
                    key: 0,
                    href: Re.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, w8)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((ys = Re.value) == null ? void 0 : ys.phase) === "READY" || ((ws = Re.value) == null ? void 0 : ws.phase) === "ERROR" || ((ls = Re.value) == null ? void 0 : ls.phase) === "STOPPED" ? {
            name: "footer",
            fn: h(() => [
              C(le, {
                variant: "ghost",
                size: "xs",
                onClick: no
              }, {
                default: h(() => [...Z[49] || (Z[49] = [
                  $(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : y("", !0),
        ae.value && te.value ? (a(), D(Or, {
          key: 1,
          issues: te.value.blocking_issues,
          onClose: Z[14] || (Z[14] = (Ne) => ae.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        ve.value && te.value ? (a(), D(Ar, {
          key: 2,
          models: te.value.warnings.models_without_sources,
          onConfirm: ut,
          onCancel: Z[15] || (Z[15] = (Ne) => ve.value = !1),
          onRevalidate: Mt
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), k8 = /* @__PURE__ */ me(_8, [["__scopeId", "data-v-522cd4d9"]]), b8 = { class: "worker-header" }, $8 = { class: "worker-status" }, C8 = { class: "worker-name" }, x8 = { class: "worker-actions" }, S8 = { class: "worker-details" }, I8 = { class: "detail-item" }, E8 = { class: "detail-value" }, T8 = {
  key: 0,
  class: "detail-item"
}, P8 = { class: "detail-value" }, R8 = {
  key: 1,
  class: "detail-item"
}, M8 = { class: "detail-value mode-badge" }, D8 = {
  key: 0,
  class: "worker-stats"
}, L8 = {
  key: 0,
  class: "stat-item"
}, O8 = { key: 0 }, A8 = {
  key: 1,
  class: "worker-stats offline"
}, U8 = /* @__PURE__ */ ue({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Te(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      t("div", b8, [
        t("div", $8, [
          t("span", {
            class: Te(["status-dot", e.worker.status])
          }, null, 2),
          t("span", C8, f(e.worker.name), 1)
        ]),
        t("div", x8, [
          e.worker.status === "online" ? (a(), D(le, {
            key: 0,
            variant: "primary",
            size: "xs",
            disabled: e.isActionLoading,
            onClick: o[0] || (o[0] = (n) => s.$emit("deploy", e.worker))
          }, {
            default: h(() => [...o[2] || (o[2] = [
              $(" Deploy ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])) : y("", !0),
          C(le, {
            variant: "ghost",
            size: "xs",
            loading: e.isActionLoading,
            onClick: o[1] || (o[1] = (n) => s.$emit("remove", e.worker.name))
          }, {
            default: h(() => [...o[3] || (o[3] = [
              $(" Remove ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ]),
      t("div", S8, [
        t("span", I8, [
          t("span", E8, f(e.worker.host) + ":" + f(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (a(), r("span", T8, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", P8, f(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (a(), r("span", R8, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", M8, f(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (a(), r("div", D8, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          $(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (a(), r("span", L8, [
          $(" • " + f(e.worker.instance_count) + " instance" + f(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (a(), r("span", O8, "(" + f(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (a(), r("div", A8, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          $(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), N8 = /* @__PURE__ */ me(U8, [["__scopeId", "data-v-b1be7134"]]), z8 = { class: "add-worker-content" }, F8 = { class: "manual-form" }, B8 = { class: "form-row" }, V8 = { class: "form-row-inline" }, W8 = { class: "form-field flex-2" }, G8 = { class: "form-field flex-1" }, j8 = { class: "form-row" }, H8 = { class: "api-key-wrapper" }, K8 = ["type"], q8 = { class: "result-icon" }, Y8 = { class: "result-content" }, J8 = { class: "result-message" }, X8 = {
  key: 0,
  class: "result-detail"
}, Q8 = { class: "modal-actions" }, Z8 = /* @__PURE__ */ ue({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = tt(), l = Vs({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), i = _(!1), c = _(!1), u = _(!1), d = _(null), m = F(() => l.host && l.port && l.apiKey), v = F(() => l.name && l.host && l.port && l.apiKey);
    async function g() {
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
    return (p, k) => (a(), D(mt, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: k[5] || (k[5] = (I) => p.$emit("close"))
    }, {
      body: h(() => [
        t("div", z8, [
          t("div", F8, [
            t("div", B8, [
              k[6] || (k[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              qe(t("input", {
                "onUpdate:modelValue": k[0] || (k[0] = (I) => l.name = I),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [zt, l.name]
              ])
            ]),
            t("div", V8, [
              t("div", W8, [
                k[7] || (k[7] = t("label", { class: "form-label" }, "Host", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": k[1] || (k[1] = (I) => l.host = I),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [zt, l.host]
                ])
              ]),
              t("div", G8, [
                k[8] || (k[8] = t("label", { class: "form-label" }, "Port", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": k[2] || (k[2] = (I) => l.port = I),
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
            t("div", j8, [
              k[9] || (k[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", H8, [
                qe(t("input", {
                  "onUpdate:modelValue": k[3] || (k[3] = (I) => l.apiKey = I),
                  type: i.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, K8), [
                  [Qn, l.apiKey]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: k[4] || (k[4] = (I) => i.value = !i.value),
                  type: "button"
                }, f(i.value ? "👁" : "👁‍🗨"), 1)
              ]),
              k[10] || (k[10] = t("div", { class: "form-help" }, [
                t("span", { class: "help-icon" }, "ⓘ"),
                $(" Run "),
                t("code", null, "cg-deploy worker setup"),
                $(" on the worker to get the key ")
              ], -1))
            ]),
            d.value ? (a(), r("div", {
              key: 0,
              class: Te(["test-result", d.value.type])
            }, [
              t("span", q8, f(d.value.type === "success" ? "✓" : "✕"), 1),
              t("div", Y8, [
                t("span", J8, f(d.value.message), 1),
                d.value.gpu_info ? (a(), r("span", X8, "GPU: " + f(d.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        t("div", Q8, [
          C(le, {
            variant: "ghost",
            size: "sm",
            loading: c.value,
            disabled: !m.value || c.value,
            onClick: g
          }, {
            default: h(() => [...k[11] || (k[11] = [
              $(" Test Connection ", -1)
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
            default: h(() => [...k[12] || (k[12] = [
              $(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }));
  }
}), e4 = /* @__PURE__ */ me(Z8, [["__scopeId", "data-v-07a00732"]]), t4 = { class: "discovered-content" }, s4 = {
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
}, c4 = { class: "selected-worker" }, u4 = { class: "selected-name" }, d4 = { class: "selected-address" }, f4 = { class: "form-row" }, m4 = { class: "api-key-wrapper" }, v4 = ["type"], p4 = { class: "result-icon" }, g4 = { class: "result-message" }, h4 = { class: "modal-actions" }, y4 = /* @__PURE__ */ ue({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = tt(), l = _(null), i = _(""), c = _(!1), u = _(!1), d = _(null), m = _(null);
    async function v(w) {
      var p;
      l.value = w, i.value = "", m.value = null, await _t(), (p = d.value) == null || p.focus();
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
    return (w, p) => (a(), D(mt, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (k) => w.$emit("close"))
    }, {
      body: h(() => [
        t("div", t4, [
          e.workers.length > 0 ? (a(), r("div", s4, [
            (a(!0), r(j, null, he(e.workers, (k) => (a(), r("div", {
              key: `${k.host}:${k.port}`,
              class: "worker-item"
            }, [
              t("div", o4, [
                t("span", n4, f(k.name), 1),
                t("span", a4, f(k.host) + ":" + f(k.port), 1),
                k.gpu_info ? (a(), r("span", l4, f(k.gpu_info), 1)) : y("", !0)
              ]),
              C(le, {
                variant: "primary",
                size: "xs",
                onClick: (I) => v(k)
              }, {
                default: h(() => [...p[4] || (p[4] = [
                  $(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128))
          ])) : (a(), r("div", i4, [...p[5] || (p[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              $("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (a(), r("div", r4, [
            t("div", c4, [
              p[6] || (p[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", u4, f(l.value.name), 1),
              t("span", d4, "(" + f(l.value.host) + ":" + f(l.value.port) + ")", 1)
            ]),
            t("div", f4, [
              p[7] || (p[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", m4, [
                qe(t("input", {
                  ref_key: "apiKeyInput",
                  ref: d,
                  "onUpdate:modelValue": p[0] || (p[0] = (k) => i.value = k),
                  type: c.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: Ht(g, ["enter"])
                }, null, 40, v4), [
                  [Qn, i.value]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: p[1] || (p[1] = (k) => c.value = !c.value),
                  type: "button"
                }, f(c.value ? "👁" : "👁‍🗨"), 1)
              ]),
              p[8] || (p[8] = t("div", { class: "form-help" }, [
                t("span", { class: "help-icon" }, "ⓘ"),
                $(" Run "),
                t("code", null, "cg-deploy worker setup"),
                $(" on the worker to get the key ")
              ], -1))
            ]),
            m.value ? (a(), r("div", {
              key: 0,
              class: Te(["test-result", m.value.type])
            }, [
              t("span", p4, f(m.value.type === "success" ? "✓" : "✕"), 1),
              t("span", g4, f(m.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", h4, [
          l.value ? (a(), D(le, {
            key: 0,
            variant: "ghost",
            size: "sm",
            onClick: p[2] || (p[2] = (k) => {
              l.value = null, i.value = "", m.value = null;
            })
          }, {
            default: h(() => [...p[9] || (p[9] = [
              $(" Back ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          l.value ? (a(), D(le, {
            key: 1,
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !i.value || u.value,
            onClick: g
          }, {
            default: h(() => [...p[10] || (p[10] = [
              $(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])) : y("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), w4 = /* @__PURE__ */ me(y4, [["__scopeId", "data-v-5a3e40a4"]]), _4 = { class: "deploy-content" }, k4 = { class: "section" }, b4 = {
  key: 0,
  class: "loading-text"
}, $4 = {
  key: 1,
  class: "empty-remotes"
}, C4 = {
  key: 2,
  class: "remotes-list"
}, x4 = { class: "section" }, S4 = { class: "mode-options" }, I4 = { class: "mode-option" }, E4 = ["disabled"], T4 = { class: "mode-option" }, P4 = { class: "section" }, R4 = {
  key: 0,
  class: "section"
}, M4 = { class: "summary-row" }, D4 = {
  key: 1,
  class: "sync-warning"
}, L4 = { class: "warning-content" }, O4 = { class: "modal-actions" }, A4 = /* @__PURE__ */ ue({
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
    } = tt(), v = _([]), g = _({}), w = _(!1), p = _(null), k = _(null), I = _(null), b = _(o.worker.mode || "native"), T = _(""), M = _(null), x = _(!1), S = F(() => p.value && g.value[p.value] || null), H = F(() => {
      if (!p.value) return null;
      const N = v.value.find((O) => O.name === p.value);
      return (N == null ? void 0 : N.fetch_url) || null;
    }), K = F(() => H.value && !x.value);
    async function B() {
      w.value = !0;
      try {
        const N = await l();
        v.value = N.remotes, await Promise.all(
          N.remotes.map(async (U) => {
            const R = await i(U.name);
            R && (g.value[U.name] = R);
          })
        );
        const O = N.remotes.find((U) => U.is_default);
        O ? p.value = O.name : N.remotes.length > 0 && (p.value = N.remotes[0].name);
      } catch {
        n("toast", "Failed to load remotes", "error");
      } finally {
        w.value = !1;
      }
    }
    async function E() {
      try {
        M.value = await d();
      } catch {
      }
    }
    async function P(N) {
      k.value = N;
      try {
        await c(N);
        const O = await i(N);
        O && (g.value[N] = O), n("toast", `Fetched from ${N}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        k.value = null;
      }
    }
    async function L(N) {
      I.value = N;
      try {
        await u(N, { force: !1 });
        const O = await i(N);
        O && (g.value[N] = O), n("toast", `Pushed to ${N}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        I.value = null;
      }
    }
    function oe(N) {
      p.value = N;
    }
    async function X() {
      if (H.value) {
        x.value = !0;
        try {
          const N = await m(o.worker.name, {
            import_source: H.value,
            mode: b.value,
            name: T.value || void 0
          });
          N.id ? (n("toast", `Deployment started: ${N.name || N.id}`, "success"), n("deployed")) : N.status === "error" ? n("toast", N.message || "Deployment failed", "error") : n("toast", "Unexpected response from worker", "error");
        } catch (N) {
          n("toast", N instanceof Error ? N.message : "Deployment failed", "error");
        } finally {
          x.value = !1;
        }
      }
    }
    return Xe(() => {
      B(), E();
    }), (N, O) => (a(), D(mt, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: O[5] || (O[5] = (U) => N.$emit("close"))
    }, {
      body: h(() => [
        t("div", _4, [
          t("div", k4, [
            O[7] || (O[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            w.value ? (a(), r("div", b4, "Loading remotes...")) : v.value.length === 0 ? (a(), r("div", $4, [...O[6] || (O[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (a(), r("div", C4, [
              (a(!0), r(j, null, he(v.value, (U) => (a(), D(zr, {
                key: U.name,
                remote: U,
                "sync-status": g.value[U.name],
                "is-selected": p.value === U.name,
                "is-fetching": k.value === U.name,
                "is-pushing": I.value === U.name,
                onFetch: P,
                onPush: L,
                onSelect: oe
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", x4, [
            O[10] || (O[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", S4, [
              t("label", I4, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": O[0] || (O[0] = (U) => b.value = U),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, E4), [
                  [Zt, b.value]
                ]),
                O[8] || (O[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", T4, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": O[1] || (O[1] = (U) => b.value = U),
                  value: "native"
                }, null, 512), [
                  [Zt, b.value]
                ]),
                O[9] || (O[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", P4, [
            O[11] || (O[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            qe(t("input", {
              "onUpdate:modelValue": O[2] || (O[2] = (U) => T.value = U),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [zt, T.value]
            ])
          ]),
          M.value ? (a(), r("div", R4, [
            O[12] || (O[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", M4, " ComfyUI: " + f(M.value.comfyui_version) + " • " + f(M.value.node_count) + " nodes • " + f(M.value.model_count) + " models • " + f(M.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          S.value && S.value.ahead > 0 ? (a(), r("div", D4, [
            O[14] || (O[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", L4, [
              t("strong", null, f(S.value.ahead) + " unpushed commit" + f(S.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + f(p.value) + "' before deploying to include your latest changes.", 1)
            ]),
            C(le, {
              variant: "primary",
              size: "xs",
              loading: I.value === p.value,
              onClick: O[3] || (O[3] = (U) => p.value && L(p.value))
            }, {
              default: h(() => [...O[13] || (O[13] = [
                $(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", O4, [
          C(le, {
            variant: "ghost",
            size: "sm",
            onClick: O[4] || (O[4] = (U) => N.$emit("close"))
          }, {
            default: h(() => [...O[15] || (O[15] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          C(le, {
            variant: "primary",
            size: "sm",
            loading: x.value,
            disabled: !K.value || x.value,
            onClick: X
          }, {
            default: h(() => [...O[16] || (O[16] = [
              $(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), U4 = /* @__PURE__ */ me(A4, [["__scopeId", "data-v-c12720d3"]]), N4 = { class: "custom-tab" }, z4 = { class: "section-header" }, F4 = { class: "section-actions" }, B4 = { class: "workers-content" }, V4 = {
  key: 0,
  class: "loading-state"
}, W4 = {
  key: 1,
  class: "empty-state"
}, G4 = {
  key: 2,
  class: "workers-list"
}, j4 = { class: "scan-icon" }, H4 = { class: "scan-message" }, K4 = /* @__PURE__ */ ue({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: n,
      addCustomWorker: l,
      removeCustomWorker: i,
      scanForWorkers: c
    } = tt(), u = _([]), d = _([]), m = _(!1), v = _(!1), g = _(null), w = _(!1), p = _(!1), k = _(null), I = _(null);
    async function b() {
      m.value = !0;
      try {
        const B = await n();
        u.value = B.workers;
      } catch (B) {
        o("toast", B instanceof Error ? B.message : "Failed to load workers", "error");
      } finally {
        m.value = !1;
      }
    }
    async function T() {
      v.value = !0, I.value = null;
      try {
        const B = await c(), E = B.discovered.filter(
          (P) => !u.value.some((L) => L.host === P.host && L.port === P.port)
        );
        d.value = E, E.length > 0 ? p.value = !0 : B.discovered.length > 0 ? I.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : I.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (B) {
        o("toast", B instanceof Error ? B.message : "Network scan failed", "error");
      } finally {
        v.value = !1;
      }
    }
    async function M(B) {
      try {
        await l(B), o("toast", `Worker '${B.name}' added`, "success"), w.value = !1, await b();
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to add worker", "error");
      }
    }
    async function x(B) {
      try {
        await l(B), o("toast", `Worker '${B.name}' added`, "success"), p.value = !1, await b();
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to add worker", "error");
      }
    }
    async function S(B) {
      g.value = B;
      try {
        await i(B), o("toast", `Worker '${B}' removed`, "success"), await b();
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to remove worker", "error");
      } finally {
        g.value = null;
      }
    }
    function H(B) {
      k.value = B;
    }
    function K() {
      k.value = null, o("deployed");
    }
    return Xe(() => {
      b();
    }), (B, E) => (a(), r("div", N4, [
      t("div", z4, [
        E[8] || (E[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", F4, [
          C(le, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: T
          }, {
            default: h(() => [...E[6] || (E[6] = [
              $(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          C(le, {
            variant: "secondary",
            size: "xs",
            onClick: E[0] || (E[0] = (P) => w.value = !0)
          }, {
            default: h(() => [...E[7] || (E[7] = [
              $(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("div", B4, [
        m.value && u.value.length === 0 ? (a(), r("div", V4, [...E[9] || (E[9] = [
          t("span", { class: "spinner" }, null, -1),
          $(" Loading workers... ", -1)
        ])])) : u.value.length === 0 ? (a(), r("div", W4, [...E[10] || (E[10] = [
          t("div", { class: "empty-card" }, [
            t("span", { class: "empty-text" }, "No workers registered yet"),
            t("p", { class: "empty-help" }, " To add a custom worker: "),
            t("ol", { class: "setup-steps" }, [
              t("li", null, [
                $("On your GPU machine, run:"),
                t("br"),
                t("code", null, "cg-deploy worker setup"),
                t("br"),
                t("code", null, "cg-deploy worker up --broadcast")
              ]),
              t("li", null, 'Click "Scan Network" above or "Add" to enter manually')
            ])
          ], -1)
        ])])) : (a(), r("div", G4, [
          (a(!0), r(j, null, he(u.value, (P) => (a(), D(N8, {
            key: P.name,
            worker: P,
            "is-action-loading": g.value === P.name,
            onDeploy: H,
            onRemove: S
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      I.value ? (a(), r("div", {
        key: 0,
        class: Te(["scan-result", I.value.type])
      }, [
        t("span", j4, f(I.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", H4, f(I.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: E[1] || (E[1] = (P) => I.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (a(), D(w4, {
        key: 1,
        workers: d.value,
        onClose: E[2] || (E[2] = (P) => p.value = !1),
        onAdd: x
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (a(), D(e4, {
        key: 2,
        onClose: E[3] || (E[3] = (P) => w.value = !1),
        onAdd: M
      })) : y("", !0),
      k.value ? (a(), D(U4, {
        key: 3,
        worker: k.value,
        onClose: E[4] || (E[4] = (P) => k.value = null),
        onToast: E[5] || (E[5] = (P, L) => o("toast", P, L)),
        onDeployed: K
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), q4 = /* @__PURE__ */ me(K4, [["__scopeId", "data-v-1637dead"]]), ha = "ComfyGit.Deploy.GitHubPAT";
function Fr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function Y4(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function J4() {
  function e() {
    try {
      return localStorage.getItem(ha);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem(ha, l);
    } catch (i) {
      console.error("[useGitAuth] Failed to save token:", i);
    }
  }
  function o() {
    try {
      localStorage.removeItem(ha);
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
    isRemoteHttps: Y4
  };
}
const X4 = { class: "settings-content" }, Q4 = { class: "settings-section" }, Z4 = {
  key: 0,
  class: "ssh-warning"
}, e6 = { class: "form-row" }, t6 = { class: "token-wrapper" }, s6 = ["type"], o6 = { class: "result-icon" }, n6 = { class: "result-message" }, a6 = { class: "token-actions" }, l6 = /* @__PURE__ */ ue({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: n, setToken: l, clearToken: i, hasToken: c } = J4(), { getRemotes: u, testGitAuth: d } = tt(), m = _(""), v = _(!1), g = _(!1), w = _(null), p = _(!1), k = F(() => c());
    Xe(async () => {
      var x;
      const M = n();
      M && (m.value = M);
      try {
        const H = (x = (await u()).remotes) == null ? void 0 : x.find((K) => K.name === "origin");
        H && Fr(H.url) && (p.value = !0);
      } catch {
      }
    });
    async function I() {
      if (m.value) {
        g.value = !0, w.value = null;
        try {
          const M = await d(m.value);
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
    function b() {
      m.value && (l(m.value), o("saved"), o("close"));
    }
    function T() {
      i(), m.value = "", w.value = null;
    }
    return (M, x) => (a(), D(mt, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: x[2] || (x[2] = (S) => M.$emit("close"))
    }, {
      body: h(() => [
        t("div", X4, [
          t("div", Q4, [
            x[8] || (x[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            x[9] || (x[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (a(), r("div", Z4, [...x[3] || (x[3] = [
              t("span", { class: "warning-icon" }, "!", -1),
              t("div", { class: "warning-content" }, [
                t("strong", null, "SSH remote detected"),
                t("p", null, [
                  $("PAT authentication only works with HTTPS remotes. Consider converting your remote URL from "),
                  t("code", null, "git@github.com:..."),
                  $(" to "),
                  t("code", null, "https://github.com/...")
                ])
              ], -1)
            ])])) : y("", !0),
            t("div", e6, [
              x[4] || (x[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", t6, [
                qe(t("input", {
                  "onUpdate:modelValue": x[0] || (x[0] = (S) => m.value = S),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, s6), [
                  [Qn, m.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: x[1] || (x[1] = (S) => v.value = !v.value)
                }, f(v.value ? "Hide" : "Show"), 1)
              ]),
              x[5] || (x[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            w.value ? (a(), r("div", {
              key: 1,
              class: Te(["test-result", w.value.type])
            }, [
              t("span", o6, f(w.value.type === "success" ? "✓" : "✕"), 1),
              t("span", n6, f(w.value.message), 1)
            ], 2)) : y("", !0),
            t("div", a6, [
              C(le, {
                variant: "ghost",
                size: "sm",
                loading: g.value,
                disabled: !m.value || g.value,
                onClick: I
              }, {
                default: h(() => [...x[6] || (x[6] = [
                  $(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              k.value ? (a(), D(le, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: T
              }, {
                default: h(() => [...x[7] || (x[7] = [
                  $(" Clear ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        C(le, {
          variant: "primary",
          size: "sm",
          disabled: !m.value,
          onClick: b
        }, {
          default: h(() => [...x[10] || (x[10] = [
            $(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
}), i6 = /* @__PURE__ */ me(l6, [["__scopeId", "data-v-b21588ad"]]), r6 = /* @__PURE__ */ ue({
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
      stopPolling: g
    } = Nr(), w = _(!1), p = _(!1), k = _("instances"), I = _(null), b = _(null), T = F(() => [
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
    async function M(B) {
      I.value = B.id;
      try {
        await u(B), o("toast", "Instance stopped", "success");
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to stop instance", "error");
      } finally {
        I.value = null;
      }
    }
    async function x(B) {
      I.value = B.id;
      try {
        await d(B), o("toast", "Instance starting...", "success");
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to start instance", "error");
      } finally {
        I.value = null;
      }
    }
    function S(B) {
      b.value = B;
    }
    async function H() {
      const B = b.value;
      if (B) {
        b.value = null, I.value = B.id;
        try {
          await m(B), o("toast", "Instance terminated", "success");
        } catch (E) {
          o("toast", E instanceof Error ? E.message : "Failed to terminate instance", "error");
        } finally {
          I.value = null;
        }
      }
    }
    async function K() {
      await c(), k.value = "instances";
    }
    return Xe(() => {
      c(), v();
    }), oo(() => {
      g();
    }), (B, E) => (a(), r(j, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: E[1] || (E[1] = (P) => w.value = !0)
          }, {
            actions: h(() => [
              C(le, {
                variant: "ghost",
                size: "xs",
                onClick: E[0] || (E[0] = (P) => p.value = !0)
              }, {
                default: h(() => [...E[10] || (E[10] = [
                  $(" Settings ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          C(Pr, {
            modelValue: k.value,
            "onUpdate:modelValue": E[2] || (E[2] = (P) => k.value = P),
            tabs: T.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: h(() => [
          k.value === "instances" ? (a(), D(C5, {
            key: 0,
            instances: We(n),
            "is-loading": We(l),
            "action-loading-id": I.value,
            onRefresh: We(c),
            onStop: M,
            onStart: x,
            onTerminate: S
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          k.value === "runpod" ? (a(), D(k8, {
            key: 1,
            onToast: E[3] || (E[3] = (P, L) => o("toast", P, L)),
            onNavigate: E[4] || (E[4] = (P) => o("navigate", P)),
            onDeployed: K
          })) : y("", !0),
          k.value === "custom" ? (a(), D(q4, {
            key: 2,
            onToast: E[5] || (E[5] = (P, L) => o("toast", P, L)),
            onDeployed: K
          })) : y("", !0)
        ]),
        _: 1
      }),
      b.value ? (a(), D(nl, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${b.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: H,
        onCancel: E[6] || (E[6] = (P) => b.value = null)
      }, null, 8, ["message"])) : y("", !0),
      C(as, {
        show: w.value,
        title: "Deploy to Cloud",
        onClose: E[7] || (E[7] = (P) => w.value = !1)
      }, {
        content: h(() => [...E[11] || (E[11] = [
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
                  $(" - All committed workflows")
                ]),
                t("li", null, [
                  t("strong", null, "Custom Nodes"),
                  $(" - Installed automatically")
                ]),
                t("li", null, [
                  t("strong", null, "Models"),
                  $(" - Downloaded from sources (when available)")
                ]),
                t("li", null, [
                  t("strong", null, "Configuration"),
                  $(" - Environment settings")
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
      p.value ? (a(), D(i6, {
        key: 1,
        onClose: E[8] || (E[8] = (P) => p.value = !1),
        onSaved: E[9] || (E[9] = (P) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), c6 = /* @__PURE__ */ me(r6, [["__scopeId", "data-v-d4e32a10"]]), u6 = { class: "header-info" }, d6 = { class: "commit-hash" }, f6 = {
  key: 0,
  class: "commit-refs"
}, m6 = { class: "commit-message" }, v6 = { class: "commit-date" }, p6 = {
  key: 0,
  class: "loading"
}, g6 = {
  key: 1,
  class: "changes-section"
}, h6 = { class: "stats-row" }, y6 = { class: "stat" }, w6 = { class: "stat insertions" }, _6 = { class: "stat deletions" }, k6 = {
  key: 0,
  class: "change-group"
}, b6 = {
  key: 1,
  class: "change-group"
}, $6 = {
  key: 0,
  class: "version"
}, C6 = {
  key: 2,
  class: "change-group"
}, x6 = { class: "change-item" }, S6 = /* @__PURE__ */ ue({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = tt(), n = _(null), l = _(!0), i = F(() => {
      if (!n.value) return !1;
      const u = n.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = F(() => {
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
    }), (u, d) => (a(), D(mt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (m) => u.$emit("close"))
    }, {
      header: h(() => {
        var m, v, g, w;
        return [
          t("div", u6, [
            d[4] || (d[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", d6, f(((m = n.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (g = n.value) == null ? void 0 : g.refs) != null && w.length ? (a(), r("span", f6, [
              (a(!0), r(j, null, he(n.value.refs, (p) => (a(), r("span", {
                key: p,
                class: "ref-badge"
              }, f(p), 1))), 128))
            ])) : y("", !0)
          ]),
          C(De, {
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
          t("div", m6, f(((m = n.value) == null ? void 0 : m.message) || e.commit.message), 1),
          t("div", v6, f(((v = n.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), r("div", p6, "Loading details...")) : n.value ? (a(), r("div", g6, [
            t("div", h6, [
              t("span", y6, f(n.value.stats.files_changed) + " files", 1),
              t("span", w6, "+" + f(n.value.stats.insertions), 1),
              t("span", _6, "-" + f(n.value.stats.deletions), 1)
            ]),
            i.value ? (a(), r("div", k6, [
              C(Go, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  $("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(j, null, he(n.value.changes.workflows.added, (g) => (a(), r("div", {
                key: "add-" + g,
                class: "change-item added"
              }, [
                d[7] || (d[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), r(j, null, he(n.value.changes.workflows.modified, (g) => (a(), r("div", {
                key: "mod-" + g,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), r(j, null, he(n.value.changes.workflows.deleted, (g) => (a(), r("div", {
                key: "del-" + g,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (a(), r("div", b6, [
              C(Go, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  $("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(j, null, he(n.value.changes.nodes.added, (g) => (a(), r("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g.name), 1),
                g.version ? (a(), r("span", $6, "(" + f(g.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), r(j, null, he(n.value.changes.nodes.removed, (g) => (a(), r("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), r("div", C6, [
              C(Go, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  $("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", x6, [
                d[14] || (d[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, f(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        C(De, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (m) => u.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            $(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        C(De, {
          variant: "primary",
          onClick: d[2] || (d[2] = (m) => u.$emit("checkout", e.commit))
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
}), I6 = /* @__PURE__ */ me(S6, [["__scopeId", "data-v-d256ff6d"]]), E6 = { class: "base-textarea-wrapper" }, T6 = ["value", "rows", "placeholder", "disabled", "maxlength"], P6 = {
  key: 0,
  class: "base-textarea-count"
}, R6 = /* @__PURE__ */ ue({
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
    return (i, c) => (a(), r("div", E6, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => i.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = Ht(it((u) => i.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = Ht(it((u) => i.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Ht(l, ["enter"])
        ]
      }, null, 40, T6),
      e.showCharCount && e.maxLength ? (a(), r("div", P6, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), ei = /* @__PURE__ */ me(R6, [["__scopeId", "data-v-c6d16c93"]]), M6 = ["checked", "disabled"], D6 = { class: "base-checkbox-box" }, L6 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, O6 = {
  key: 0,
  class: "base-checkbox-label"
}, A6 = /* @__PURE__ */ ue({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("label", {
      class: Te(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked))
      }, null, 40, M6),
      t("span", D6, [
        e.modelValue ? (a(), r("svg", L6, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (a(), r("span", O6, [
        Ke(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Da = /* @__PURE__ */ me(A6, [["__scopeId", "data-v-bf17c831"]]), U6 = { class: "popover-header" }, N6 = { class: "popover-body" }, z6 = {
  key: 0,
  class: "changes-summary"
}, F6 = {
  key: 0,
  class: "change-item"
}, B6 = {
  key: 1,
  class: "change-item"
}, V6 = {
  key: 2,
  class: "change-item"
}, W6 = {
  key: 3,
  class: "change-item"
}, G6 = {
  key: 4,
  class: "change-item"
}, j6 = {
  key: 5,
  class: "change-item"
}, H6 = {
  key: 1,
  class: "no-changes"
}, K6 = {
  key: 2,
  class: "loading"
}, q6 = {
  key: 3,
  class: "issues-error"
}, Y6 = { class: "error-header" }, J6 = { class: "error-title" }, X6 = { class: "issues-list" }, Q6 = { class: "workflow-state" }, Z6 = { class: "message-section" }, eI = { class: "popover-footer" }, tI = {
  key: 1,
  class: "commit-popover"
}, sI = { class: "popover-header" }, oI = { class: "popover-body" }, nI = {
  key: 0,
  class: "changes-summary"
}, aI = {
  key: 0,
  class: "change-item"
}, lI = {
  key: 1,
  class: "change-item"
}, iI = {
  key: 2,
  class: "change-item"
}, rI = {
  key: 3,
  class: "change-item"
}, cI = {
  key: 4,
  class: "change-item"
}, uI = {
  key: 5,
  class: "change-item"
}, dI = {
  key: 1,
  class: "no-changes"
}, fI = {
  key: 2,
  class: "loading"
}, mI = {
  key: 3,
  class: "issues-error"
}, vI = { class: "error-header" }, pI = { class: "error-title" }, gI = { class: "issues-list" }, hI = { class: "workflow-state" }, yI = { class: "message-section" }, wI = { class: "popover-footer" }, _I = /* @__PURE__ */ ue({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, n = s, { commit: l } = tt(), i = _(""), c = _(!1), u = _(!1), d = F(() => {
      if (!o.status) return !1;
      const k = o.status.workflows;
      return k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || o.status.has_changes;
    }), m = F(() => {
      if (!o.status) return !1;
      const k = o.status.workflows, I = o.status.git_changes;
      return k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || I.nodes_added.length > 0 || I.nodes_removed.length > 0;
    }), v = F(() => {
      var k;
      return (k = o.status) != null && k.workflows.analyzed ? o.status.workflows.analyzed.filter((I) => I.has_issues) : [];
    }), g = F(() => v.value.length > 0), w = F(() => g.value && !u.value);
    async function p() {
      var k, I, b, T;
      if (!(g.value && !u.value) && !(!d.value || !i.value.trim() || c.value)) {
        c.value = !0;
        try {
          const M = await l(i.value.trim(), u.value);
          if (M.status === "success") {
            const x = `Committed: ${((k = M.summary) == null ? void 0 : k.new) || 0} new, ${((I = M.summary) == null ? void 0 : I.modified) || 0} modified, ${((b = M.summary) == null ? void 0 : b.deleted) || 0} deleted`;
            n("committed", { success: !0, message: x });
          } else if (M.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (M.status === "blocked") {
            const x = ((T = M.issues) == null ? void 0 : T.map((S) => `${S.name}: ${S.issue}`).join("; ")) || "Unknown issues";
            n("committed", { success: !1, message: `Commit blocked - ${x}. Enable "Allow issues" to force.` });
          } else
            n("committed", { success: !1, message: M.message || "Commit failed" });
        } catch (M) {
          n("committed", { success: !1, message: M instanceof Error ? M.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (k, I) => e.asModal ? (a(), D(Ct, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: I[5] || (I[5] = (b) => n("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: I[4] || (I[4] = it(() => {
          }, ["stop"]))
        }, [
          t("div", U6, [
            I[11] || (I[11] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            t("button", {
              class: "close-btn",
              onClick: I[0] || (I[0] = (b) => n("close"))
            }, [...I[10] || (I[10] = [
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
          t("div", N6, [
            e.status && d.value ? (a(), r("div", z6, [
              e.status.workflows.new.length ? (a(), r("div", F6, [
                I[12] || (I[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), r("div", B6, [
                I[13] || (I[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), r("div", V6, [
                I[14] || (I[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), r("div", W6, [
                I[15] || (I[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), r("div", G6, [
                I[16] || (I[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (a(), r("div", j6, [...I[17] || (I[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), r("div", H6, " No changes to commit ")) : (a(), r("div", K6, " Loading... ")),
            g.value ? (a(), r("div", q6, [
              t("div", Y6, [
                I[18] || (I[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", J6, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", X6, [
                (a(!0), r(j, null, he(v.value, (b) => (a(), r("div", {
                  key: b.name,
                  class: "issue-item"
                }, [
                  t("strong", null, f(b.name), 1),
                  t("span", Q6, "(" + f(b.sync_state) + ")", 1),
                  $(": " + f(b.issue_summary), 1)
                ]))), 128))
              ]),
              C(Da, {
                modelValue: u.value,
                "onUpdate:modelValue": I[1] || (I[1] = (b) => u.value = b),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...I[19] || (I[19] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            t("div", Z6, [
              C(ei, {
                modelValue: i.value,
                "onUpdate:modelValue": I[2] || (I[2] = (b) => i.value = b),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: p,
                onSubmit: p
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          t("div", eI, [
            C(De, {
              variant: "secondary",
              onClick: I[3] || (I[3] = (b) => n("close"))
            }, {
              default: h(() => [...I[20] || (I[20] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(De, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !i.value.trim() || c.value || w.value,
              loading: c.value,
              onClick: p
            }, {
              default: h(() => [
                $(f(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (a(), r("div", tI, [
      t("div", sI, [
        I[22] || (I[22] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: I[6] || (I[6] = (b) => n("close"))
        }, [...I[21] || (I[21] = [
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
      t("div", oI, [
        e.status && d.value ? (a(), r("div", nI, [
          e.status.workflows.new.length ? (a(), r("div", aI, [
            I[23] || (I[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), r("div", lI, [
            I[24] || (I[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), r("div", iI, [
            I[25] || (I[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), r("div", rI, [
            I[26] || (I[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), r("div", cI, [
            I[27] || (I[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (a(), r("div", uI, [...I[28] || (I[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), r("div", dI, " No changes to commit ")) : (a(), r("div", fI, " Loading... ")),
        g.value ? (a(), r("div", mI, [
          t("div", vI, [
            I[29] || (I[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", pI, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", gI, [
            (a(!0), r(j, null, he(v.value, (b) => (a(), r("div", {
              key: b.name,
              class: "issue-item"
            }, [
              t("strong", null, f(b.name), 1),
              t("span", hI, "(" + f(b.sync_state) + ")", 1),
              $(": " + f(b.issue_summary), 1)
            ]))), 128))
          ]),
          C(Da, {
            modelValue: u.value,
            "onUpdate:modelValue": I[7] || (I[7] = (b) => u.value = b),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...I[30] || (I[30] = [
              $(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        t("div", yI, [
          C(ei, {
            modelValue: i.value,
            "onUpdate:modelValue": I[8] || (I[8] = (b) => i.value = b),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: p,
            onSubmit: p
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      t("div", wI, [
        C(De, {
          variant: "secondary",
          onClick: I[9] || (I[9] = (b) => n("close"))
        }, {
          default: h(() => [...I[31] || (I[31] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        C(De, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !i.value.trim() || c.value || w.value,
          loading: c.value,
          onClick: p
        }, {
          default: h(() => [
            $(f(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Br = /* @__PURE__ */ me(_I, [["__scopeId", "data-v-5f897631"]]), kI = { class: "modal-header" }, bI = { class: "modal-body" }, $I = { class: "switch-message" }, CI = { class: "switch-details" }, xI = { class: "modal-actions" }, SI = /* @__PURE__ */ ue({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), D(Ct, { to: "body" }, [
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
          t("div", kI, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", bI, [
            t("p", $I, [
              o[6] || (o[6] = $(" Switch from ", -1)),
              t("strong", null, f(e.fromEnvironment), 1),
              o[7] || (o[7] = $(" to ", -1)),
              t("strong", null, f(e.toEnvironment), 1),
              o[8] || (o[8] = $("? ", -1))
            ]),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This will restart ComfyUI")
            ], -1)),
            t("p", CI, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", xI, [
            C(le, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(le, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => s.$emit("confirm"))
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
}), II = /* @__PURE__ */ me(SI, [["__scopeId", "data-v-e9c5253e"]]), EI = {
  key: 0,
  class: "modal-overlay"
}, TI = { class: "modal-content" }, PI = { class: "modal-body" }, RI = { class: "progress-info" }, MI = { class: "progress-percentage" }, DI = { class: "progress-state" }, LI = { class: "switch-steps" }, OI = { class: "step-icon" }, AI = { class: "step-label" }, UI = /* @__PURE__ */ ue({
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
    return (i, c) => (a(), D(Ct, { to: "body" }, [
      e.show ? (a(), r("div", EI, [
        t("div", TI, [
          c[1] || (c[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", PI, [
            C(ea, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            t("div", RI, [
              t("div", MI, f(e.progress) + "%", 1),
              t("div", DI, f(o.value), 1)
            ]),
            t("div", LI, [
              (a(!0), r(j, null, he(l.value, (u) => (a(), r("div", {
                key: u.state,
                class: Te(["switch-step", u.status])
              }, [
                t("span", OI, f(u.icon), 1),
                t("span", AI, f(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), NI = /* @__PURE__ */ me(UI, [["__scopeId", "data-v-768a5078"]]), zI = { class: "modal-header" }, FI = { class: "modal-body" }, BI = {
  key: 0,
  class: "node-section"
}, VI = { class: "node-list" }, WI = {
  key: 1,
  class: "node-section"
}, GI = { class: "node-list" }, jI = { class: "modal-actions" }, HI = /* @__PURE__ */ ue({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), D(Ct, { to: "body" }, [
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
          t("div", zI, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", FI, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), r("div", BI, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", VI, [
                (a(!0), r(j, null, he(e.mismatchDetails.missing_nodes, (n) => (a(), r("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), r("div", WI, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", GI, [
                (a(!0), r(j, null, he(e.mismatchDetails.extra_nodes, (n) => (a(), r("div", {
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
          t("div", jI, [
            C(le, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(le, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => s.$emit("confirm"))
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
}), KI = /* @__PURE__ */ me(HI, [["__scopeId", "data-v-7cad7518"]]), qI = [
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
], YI = "v0.0.17", JI = "Akatz", XI = { class: "social-buttons" }, QI = ["title", "aria-label", "onClick"], ZI = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, eE = ["d"], tE = ["title", "aria-label", "onClick"], sE = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, oE = ["d"], nE = /* @__PURE__ */ ue({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), r("div", XI, [
      (a(!0), r(j, null, he(We(qI), (l) => (a(), r(j, {
        key: l.id
      }, [
        l.label ? (a(), r("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => s(l.url)
        }, [
          $(f(l.label) + " ", 1),
          (a(), r("svg", ZI, [
            t("path", {
              d: l.iconPath
            }, null, 8, eE)
          ]))
        ], 8, QI)) : (a(), r("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => s(l.url)
        }, [
          (a(), r("svg", sE, [
            t("path", {
              d: l.iconPath
            }, null, 8, oE)
          ]))
        ], 8, tE))
      ], 64))), 128))
    ]));
  }
}), Vr = /* @__PURE__ */ me(nE, [["__scopeId", "data-v-4f846342"]]), aE = { class: "footer-info" }, lE = { class: "version" }, iE = { class: "made-by" }, rE = /* @__PURE__ */ ue({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (a(), r("div", aE, [
      t("span", lE, f(We(YI)), 1),
      t("span", iE, [
        o[0] || (o[0] = $(" made with ", -1)),
        o[1] || (o[1] = t("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          t("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        $(" by " + f(We(JI)), 1)
      ])
    ]));
  }
}), Wr = /* @__PURE__ */ me(rE, [["__scopeId", "data-v-8bc3db0a"]]), cE = /* @__PURE__ */ ue({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = _(null);
    async function n() {
      var i;
      await ((i = o.value) == null ? void 0 : i.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (i, c) => (a(), D(mt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => i.$emit("close"))
    }, {
      body: h(() => [
        C(Tr, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var u;
        return [
          C(De, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: n
          }, {
            default: h(() => [...c[2] || (c[2] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(De, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (d) => i.$emit("close"))
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
}), uE = /* @__PURE__ */ me(cE, [["__scopeId", "data-v-fac00ae7"]]), dE = { class: "header-actions" }, fE = {
  key: 0,
  class: "wizard-step"
}, mE = { class: "form-field" }, vE = ["placeholder"], pE = {
  key: 0,
  class: "form-error"
}, gE = { class: "form-field form-field--checkbox" }, hE = { class: "form-checkbox" }, yE = {
  key: 0,
  class: "form-field"
}, wE = ["placeholder"], _E = {
  key: 0,
  class: "form-info"
}, kE = {
  key: 1,
  class: "form-suggestion"
}, bE = {
  key: 2,
  class: "form-error"
}, $E = {
  key: 3,
  class: "form-info"
}, CE = {
  key: 1,
  class: "wizard-step"
}, xE = {
  key: 0,
  class: "progress-check-loading"
}, SE = {
  key: 0,
  class: "cli-warning"
}, IE = { class: "cli-warning-header" }, EE = {
  key: 1,
  class: "env-landing"
}, TE = { class: "env-list" }, PE = ["value"], RE = { class: "env-name" }, ME = {
  key: 2,
  class: "env-create"
}, DE = { class: "form-field" }, LE = { class: "form-field" }, OE = ["value"], AE = { class: "form-field" }, UE = ["disabled"], NE = ["value"], zE = { class: "form-field" }, FE = ["value"], BE = { class: "form-field form-field--checkbox" }, VE = { class: "form-checkbox" }, WE = {
  key: 0,
  class: "form-error"
}, GE = {
  key: 1,
  class: "env-creating"
}, jE = { class: "creating-intro" }, HE = {
  key: 3,
  class: "env-import"
}, KE = { class: "wizard-footer" }, qE = { class: "wizard-footer-actions" }, io = 10, YE = 600 * 1e3, ti = 1800 * 1e3, JE = /* @__PURE__ */ ue({
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
    } = tt(), g = _(o.initialStep || 1), w = _(null), p = _("landing"), k = _(!1), I = _(!1), b = _(!1), T = _(!1), M = _(null), x = _(o.initialStep === 2), S = _(o.defaultPath), H = _(!!o.detectedModelsDir), K = _(o.detectedModelsDir || ""), B = _(null), E = _(null), P = _(null), L = _(null), oe = _("my-new-env"), X = _(Dr), N = _("latest"), O = _(Lr), U = _(!0), R = _(null), Q = _(null), Y = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), ye = _(!1), _e = _(!1), Le = _(!1), Fe = _({ progress: 0, message: "" }), ie = _({ progress: 0, message: "" }), Se = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], we = _(0), ge = _(null), Ce = _(0), de = _(null), ce = F(() => {
      var be, ke;
      const ee = (be = S.value) == null ? void 0 : be.trim(), J = !B.value, Oe = !H.value || !E.value && ((ke = K.value) == null ? void 0 : ke.trim());
      return ee && J && Oe;
    }), Me = F(() => {
      var ee;
      return (ee = oe.value) == null ? void 0 : ee.trim();
    }), Re = F(() => !!(g.value === 2 || Q.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), A = F(() => Q.value || o.workspacePath || null);
    async function W() {
      var ee;
      if (B.value = null, !!((ee = S.value) != null && ee.trim()))
        try {
          const J = await c({ path: S.value, type: "workspace" });
          J.valid || (B.value = J.error || "Invalid path");
        } catch (J) {
          B.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function te() {
      var ee;
      if (E.value = null, P.value = null, L.value = null, !!((ee = K.value) != null && ee.trim()))
        try {
          const J = await c({ path: K.value, type: "models" });
          if (J.valid)
            L.value = J.model_count ?? null;
          else if (E.value = J.error || "Invalid path", J.suggestion) {
            P.value = J.suggestion, K.value = J.suggestion, E.value = null;
            const Oe = await c({ path: J.suggestion, type: "models" });
            Oe.valid && (L.value = Oe.model_count ?? null);
          }
        } catch (J) {
          E.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function ae() {
      var ee, J, Oe, be, ke;
      if (B.value = null, E.value = null, await W(), (ee = B.value) != null && ee.includes("already exists")) {
        B.value = null, Q.value = ((J = S.value) == null ? void 0 : J.trim()) || o.defaultPath, g.value = 2, pe();
        return;
      }
      if (!B.value && !(H.value && ((Oe = K.value) != null && Oe.trim()) && (await te(), E.value))) {
        _e.value = !0;
        try {
          await l({
            workspace_path: ((be = S.value) == null ? void 0 : be.trim()) || o.defaultPath,
            models_directory: H.value && ((ke = K.value) == null ? void 0 : ke.trim()) || null
          }), we.value = 0, ge.value = Date.now();
          const G = setInterval(async () => {
            var V;
            if (ge.value && Date.now() - ge.value > YE) {
              clearInterval(G), _e.value = !1, B.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const re = await i();
              if (we.value = 0, re.state === "idle" && _e.value) {
                clearInterval(G), _e.value = !1, B.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Fe.value = { progress: re.progress, message: re.message }, re.state === "complete" ? (clearInterval(G), _e.value = !1, Q.value = ((V = S.value) == null ? void 0 : V.trim()) || o.defaultPath, g.value = 2, pe()) : re.state === "error" && (clearInterval(G), _e.value = !1, B.value = re.error || "Workspace creation failed");
            } catch (re) {
              we.value++, console.warn(`Polling failure ${we.value}/${io}:`, re), we.value >= io && (clearInterval(G), _e.value = !1, B.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (G) {
          _e.value = !1, B.value = G instanceof Error ? G.message : "Failed to create workspace";
        }
      }
    }
    async function ve() {
      Le.value = !0, R.value = null;
      try {
        const ee = {
          name: oe.value.trim() || "my-new-env",
          python_version: X.value,
          comfyui_version: N.value,
          torch_backend: O.value,
          switch_after: U.value,
          workspace_path: Q.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(ee)).status === "started") {
          Ce.value = 0, de.value = Date.now();
          const Oe = setInterval(async () => {
            if (de.value && Date.now() - de.value > ti) {
              clearInterval(Oe), Le.value = !1, R.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const be = await d();
              if (Ce.value = 0, be.state === "idle" && Le.value) {
                clearInterval(Oe), Le.value = !1, R.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (ie.value = {
                progress: be.progress ?? 0,
                message: be.message,
                phase: be.phase
              }, be.state === "complete") {
                clearInterval(Oe), Le.value = !1;
                const ke = be.environment_name || ee.name;
                U.value ? n("complete", ke, Q.value) : (p.value = "landing", n("environment-created-no-switch", ke));
              } else be.state === "error" && (clearInterval(Oe), Le.value = !1, R.value = be.error || "Environment creation failed");
            } catch (be) {
              Ce.value++, console.warn(`Polling failure ${Ce.value}/${io}:`, be), Ce.value >= io && (clearInterval(Oe), Le.value = !1, R.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ee) {
        Le.value = !1, R.value = ee instanceof Error ? ee.message : "Unknown error";
      }
    }
    async function pe() {
      ye.value = !0;
      try {
        Y.value = await v();
      } catch (ee) {
        console.error("Failed to load ComfyUI releases:", ee);
      } finally {
        ye.value = !1;
      }
    }
    function Ie() {
      w.value && n("switch-environment", w.value, Q.value);
    }
    function Ee() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : g.value === 2 && o.setupState === "no_workspace" && (g.value = 1);
    }
    function ne(ee, J) {
      I.value = !1, J ? n("complete", ee, Q.value) : (n("environment-created-no-switch", ee), p.value = "landing");
    }
    function fe() {
    }
    Xe(async () => {
      if (o.detectedModelsDir && (K.value = o.detectedModelsDir), o.workspacePath && (Q.value = o.workspacePath), g.value === 2) {
        pe();
        const ee = setTimeout(() => {
          x.value = !1;
        }, 3e3);
        await Ue(), clearTimeout(ee), x.value = !1;
      }
    });
    async function Ue() {
      try {
        const ee = await d();
        if (console.log("[ComfyGit] Create progress check:", ee.state, ee), ee.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ee.environment_name), p.value = "create", Le.value = !0, oe.value = ee.environment_name || "my-new-env", ie.value = {
            progress: ee.progress ?? 0,
            message: ee.message,
            phase: ee.phase
          }, Pe();
          return;
        }
      } catch (ee) {
        console.log("[ComfyGit] Create progress check failed:", ee);
      }
      try {
        const ee = await m();
        console.log("[ComfyGit] Import progress check:", ee.state, ee), ee.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ee.environment_name), M.value = {
          message: ee.message || "Importing...",
          phase: ee.phase || "",
          progress: ee.progress ?? 0,
          environmentName: ee.environment_name || ""
        }, T.value = !0, p.value = "import", I.value = !0);
      } catch (ee) {
        console.log("[ComfyGit] Import progress check failed:", ee);
      }
    }
    async function Pe() {
      Ce.value = 0, de.value = Date.now();
      let ee = null;
      const J = async () => {
        if (de.value && Date.now() - de.value > ti)
          return ee && clearInterval(ee), Le.value = !1, R.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const be = await d();
          if (Ce.value = 0, be.state === "idle" && Le.value)
            return ee && clearInterval(ee), Le.value = !1, R.value = "Environment creation was interrupted. Please try again.", !1;
          if (ie.value = {
            progress: be.progress ?? 0,
            message: be.message,
            phase: be.phase
          }, be.state === "complete") {
            ee && clearInterval(ee), Le.value = !1;
            const ke = be.environment_name || oe.value;
            return n("complete", ke, Q.value), !1;
          } else if (be.state === "error")
            return ee && clearInterval(ee), Le.value = !1, R.value = be.error || "Environment creation failed", !1;
          return !0;
        } catch (be) {
          return Ce.value++, console.warn(`Polling failure ${Ce.value}/${io}:`, be), Ce.value >= io ? (ee && clearInterval(ee), Le.value = !1, R.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await J() && (ee = setInterval(async () => {
        !await J() && ee && clearInterval(ee);
      }, 2e3));
    }
    return (ee, J) => (a(), r(j, null, [
      C(mt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: J[15] || (J[15] = (Oe) => ee.$emit("close"))
      }, {
        header: h(() => [
          J[20] || (J[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", dE, [
            C(Vr),
            J[19] || (J[19] = t("span", { class: "header-divider" }, null, -1)),
            Re.value ? (a(), r("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: J[0] || (J[0] = (Oe) => k.value = !0)
            }, [...J[17] || (J[17] = [
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
              onClick: J[1] || (J[1] = (Oe) => ee.$emit("close")),
              title: "Close"
            }, [...J[18] || (J[18] = [
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
            g.value === 1 ? (a(), r("div", fE, [
              J[24] || (J[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", mE, [
                J[21] || (J[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": J[2] || (J[2] = (be) => S.value = be),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, vE), [
                  [zt, S.value]
                ]),
                B.value ? (a(), r("p", pE, f(B.value), 1)) : y("", !0)
              ]),
              t("div", gE, [
                t("label", hE, [
                  qe(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": J[3] || (J[3] = (be) => H.value = be)
                  }, null, 512), [
                    [en, H.value]
                  ]),
                  J[22] || (J[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              H.value ? (a(), r("div", yE, [
                J[23] || (J[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": J[4] || (J[4] = (be) => K.value = be),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, wE), [
                  [zt, K.value]
                ]),
                e.detectedModelsDir && !K.value ? (a(), r("p", _E, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                P.value ? (a(), r("p", kE, " Did you mean: " + f(P.value), 1)) : y("", !0),
                E.value ? (a(), r("p", bE, f(E.value), 1)) : y("", !0),
                L.value !== null && !E.value ? (a(), r("p", $E, " Found " + f(L.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              _e.value ? (a(), D(zn, {
                key: 1,
                progress: Fe.value.progress,
                message: Fe.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            g.value === 2 ? (a(), r("div", CE, [
              x.value ? (a(), r("div", xE, [...J[25] || (J[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), r(j, { key: 1 }, [
                !o.cliInstalled && !b.value ? (a(), r("div", SE, [
                  t("div", IE, [
                    J[27] || (J[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    J[28] || (J[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: J[5] || (J[5] = (be) => b.value = !0),
                      title: "Dismiss"
                    }, [...J[26] || (J[26] = [
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
                  J[29] || (J[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  J[30] || (J[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                p.value === "landing" ? (a(), r("div", EE, [
                  J[34] || (J[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: J[6] || (J[6] = (be) => p.value = "create")
                  }, [...J[31] || (J[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: J[7] || (J[7] = (be) => {
                      T.value = !1, p.value = "import";
                    })
                  }, [...J[32] || (J[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Oe = o.existingEnvironments) != null && Oe.length ? (a(), r(j, { key: 0 }, [
                    J[33] || (J[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", TE, [
                      (a(!0), r(j, null, he(o.existingEnvironments, (be) => (a(), r("label", {
                        key: be,
                        class: Te(["env-option", { selected: w.value === be }])
                      }, [
                        qe(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: be,
                          "onUpdate:modelValue": J[8] || (J[8] = (ke) => w.value = ke)
                        }, null, 8, PE), [
                          [Zt, w.value]
                        ]),
                        t("span", RE, f(be), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (a(), r("div", ME, [
                  Le.value ? (a(), r("div", GE, [
                    t("p", jE, [
                      J[41] || (J[41] = $(" Creating environment ", -1)),
                      t("strong", null, f(oe.value), 1),
                      J[42] || (J[42] = $("... ", -1))
                    ]),
                    C(zn, {
                      progress: ie.value.progress,
                      message: ie.value.message,
                      "current-phase": ie.value.phase,
                      "show-steps": !0,
                      steps: Se
                    }, null, 8, ["progress", "message", "current-phase"]),
                    J[43] || (J[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), r(j, { key: 0 }, [
                    J[40] || (J[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", DE, [
                      J[35] || (J[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      qe(t("input", {
                        "onUpdate:modelValue": J[9] || (J[9] = (be) => oe.value = be),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [zt, oe.value]
                      ])
                    ]),
                    t("div", LE, [
                      J[36] || (J[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": J[10] || (J[10] = (be) => X.value = be),
                        class: "form-select"
                      }, [
                        (a(!0), r(j, null, he(We(Mr), (be) => (a(), r("option", {
                          key: be,
                          value: be
                        }, f(be), 9, OE))), 128))
                      ], 512), [
                        [hs, X.value]
                      ])
                    ]),
                    t("div", AE, [
                      J[37] || (J[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": J[11] || (J[11] = (be) => N.value = be),
                        class: "form-select",
                        disabled: ye.value
                      }, [
                        (a(!0), r(j, null, he(Y.value, (be) => (a(), r("option", {
                          key: be.tag_name,
                          value: be.tag_name
                        }, f(be.name), 9, NE))), 128))
                      ], 8, UE), [
                        [hs, N.value]
                      ])
                    ]),
                    t("div", zE, [
                      J[38] || (J[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": J[12] || (J[12] = (be) => O.value = be),
                        class: "form-select"
                      }, [
                        (a(!0), r(j, null, he(We(al), (be) => (a(), r("option", {
                          key: be,
                          value: be
                        }, f(be) + f(be === "auto" ? " (detect GPU)" : ""), 9, FE))), 128))
                      ], 512), [
                        [hs, O.value]
                      ])
                    ]),
                    t("div", BE, [
                      t("label", VE, [
                        qe(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": J[13] || (J[13] = (be) => U.value = be)
                        }, null, 512), [
                          [en, U.value]
                        ]),
                        J[39] || (J[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    R.value ? (a(), r("div", WE, f(R.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (a(), r("div", HE, [
                  C(Ur, {
                    "workspace-path": Q.value,
                    "resume-import": T.value,
                    "initial-progress": M.value ?? void 0,
                    onImportComplete: ne,
                    onImportStarted: J[14] || (J[14] = (be) => I.value = !0),
                    onSourceCleared: fe
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          t("div", KE, [
            C(Wr),
            t("div", qE, [
              g.value === 1 ? (a(), D(De, {
                key: 0,
                variant: "primary",
                disabled: !ce.value || _e.value,
                onClick: ae
              }, {
                default: h(() => [
                  $(f(_e.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : g.value === 2 ? (a(), r(j, { key: 1 }, [
                !Le.value && !I.value && (p.value !== "landing" || o.setupState === "no_workspace" && !Q.value) ? (a(), D(De, {
                  key: 0,
                  variant: "secondary",
                  onClick: Ee
                }, {
                  default: h(() => [...J[44] || (J[44] = [
                    $(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (a(), D(De, {
                  key: 1,
                  variant: "primary",
                  disabled: !Me.value || Le.value,
                  onClick: ve
                }, {
                  default: h(() => [
                    $(f(Le.value ? "Creating..." : U.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                p.value === "landing" && w.value ? (a(), D(De, {
                  key: 2,
                  variant: "primary",
                  onClick: Ie
                }, {
                  default: h(() => [
                    $(" Switch to " + f(w.value), 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ], 64)) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      k.value ? (a(), D(uE, {
        key: 0,
        "workspace-path": A.value,
        onClose: J[16] || (J[16] = (Oe) => k.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), XE = /* @__PURE__ */ me(JE, [["__scopeId", "data-v-9a9aadc0"]]), QE = { class: "comfygit-panel" }, ZE = { class: "panel-header" }, eT = { class: "header-left" }, tT = {
  key: 0,
  class: "header-info"
}, sT = { class: "header-actions" }, oT = { class: "env-switcher" }, nT = {
  key: 0,
  class: "header-info"
}, aT = { class: "branch-name" }, lT = { class: "panel-main" }, iT = { class: "sidebar" }, rT = { class: "sidebar-content" }, cT = { class: "sidebar-section" }, uT = { class: "sidebar-section" }, dT = { class: "sidebar-section" }, fT = {
  key: 0,
  class: "sidebar-badge"
}, mT = { class: "sidebar-footer" }, vT = { class: "content-area" }, pT = {
  key: 0,
  class: "error-message"
}, gT = {
  key: 1,
  class: "loading"
}, hT = { class: "dialog-content env-selector-dialog" }, yT = { class: "dialog-header" }, wT = { class: "dialog-body" }, _T = { class: "env-list" }, kT = { class: "env-info" }, bT = { class: "env-name-row" }, $T = { class: "env-indicator" }, CT = { class: "env-name" }, xT = {
  key: 0,
  class: "env-branch"
}, ST = {
  key: 1,
  class: "current-label"
}, IT = { class: "env-stats" }, ET = ["onClick"], TT = { class: "toast-container" }, PT = { class: "toast-message" }, RT = /* @__PURE__ */ ue({
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
      getEnvironments: g,
      switchEnvironment: w,
      getSwitchProgress: p,
      deleteEnvironment: k,
      syncEnvironmentManually: I,
      repairWorkflowModels: b,
      getSetupStatus: T
    } = tt(), M = Rv(), { liveInstanceCount: x } = Nr({ autoStart: !0 }), S = _(null), H = _([]), K = _([]), B = _([]), E = F(() => B.value.find((se) => se.is_current)), P = _(null), L = _(!1), oe = _(1), X = F(() => {
      var se;
      return ((se = P.value) == null ? void 0 : se.state) || "managed";
    }), N = _(!1), O = _(null), U = _(null), R = _(!1), Q = _(null), Y = _(null), ye = _(null), _e = _(!1), Le = _(!1), Fe = _(""), ie = _(null), Se = _({ state: "idle", progress: 0, message: "" });
    let we = null, ge = null;
    const Ce = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, de = o.initialView ? Ce[o.initialView] : null, ce = _((de == null ? void 0 : de.view) ?? "status"), Me = _((de == null ? void 0 : de.section) ?? "this-env");
    function Re(se, q) {
      ce.value = se, Me.value = q;
    }
    function A(se) {
      const Ae = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[se];
      Ae && Re(Ae.view, Ae.section);
    }
    function W() {
      Re("branches", "this-env");
    }
    function te() {
      n("close"), setTimeout(() => {
        var q;
        const se = document.querySelectorAll("button.comfyui-button");
        for (const Ae of se)
          if (((q = Ae.textContent) == null ? void 0 : q.trim()) === "Manager") {
            Ae.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ae = _(null), ve = _(!1), pe = _(!1), Ie = _([]);
    let Ee = 0;
    function ne(se, q = "info", Ae = 3e3) {
      const je = ++Ee;
      return Ie.value.push({ id: je, message: se, type: q }), Ae > 0 && setTimeout(() => {
        Ie.value = Ie.value.filter((ot) => ot.id !== je);
      }, Ae), je;
    }
    function fe(se) {
      Ie.value = Ie.value.filter((q) => q.id !== se);
    }
    function Ue(se, q) {
      ne(se, q);
    }
    const Pe = F(() => {
      if (!S.value) return "neutral";
      const se = S.value.workflows, q = se.new.length > 0 || se.modified.length > 0 || se.deleted.length > 0 || S.value.has_changes;
      return S.value.comparison.is_synced ? q ? "warning" : "success" : "error";
    });
    F(() => S.value ? Pe.value === "success" ? "All synced" : Pe.value === "warning" ? "Uncommitted changes" : Pe.value === "error" ? "Not synced" : "" : "");
    async function ee() {
      N.value = !0, O.value = null;
      try {
        const [se, q, Ae, je] = await Promise.all([
          l(!0),
          i(),
          c(),
          g()
        ]);
        S.value = se, H.value = q.commits, K.value = Ae.branches, B.value = je, n("statusUpdate", se), Q.value && await Q.value.loadWorkflows(!0);
      } catch (se) {
        O.value = se instanceof Error ? se.message : "Failed to load status", S.value = null, H.value = [], K.value = [];
      } finally {
        N.value = !1;
      }
    }
    function J(se) {
      U.value = se;
    }
    async function Oe(se) {
      var Ae;
      U.value = null;
      const q = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      ae.value = {
        title: q ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: q ? "You have uncommitted changes that will be lost." : `Checkout commit ${se.short_hash || ((Ae = se.hash) == null ? void 0 : Ae.slice(0, 7))}?`,
        details: q ? is() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: q ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: q,
        onConfirm: async () => {
          var ft;
          ae.value = null, re();
          const je = ne(`Checking out ${se.short_hash || ((ft = se.hash) == null ? void 0 : ft.slice(0, 7))}...`, "info", 0), ot = await u(se.hash, q);
          fe(je), ot.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(ot.message || "Checkout failed", "error");
        }
      };
    }
    async function be(se) {
      const q = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      ae.value = {
        title: q ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: q ? "You have uncommitted changes." : `Switch to branch "${se}"?`,
        details: q ? is() : void 0,
        warning: q ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: q ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ae.value = null, re();
          const Ae = ne(`Switching to ${se}...`, "info", 0), je = await m(se, q);
          fe(Ae), je.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(je.message || "Branch switch failed", "error");
        }
      };
    }
    async function ke(se) {
      const q = ne(`Creating branch ${se}...`, "info", 0), Ae = await d(se);
      fe(q), Ae.status === "success" ? (ne(`Branch "${se}" created`, "success"), await ee()) : ne(Ae.message || "Failed to create branch", "error");
    }
    async function G(se, q = !1) {
      const Ae = async (je) => {
        var ft;
        const ot = ne(`Deleting branch ${se}...`, "info", 0);
        try {
          const Dt = await v(se, je);
          fe(ot), Dt.status === "success" ? (ne(`Branch "${se}" deleted`, "success"), await ee()) : (ft = Dt.message) != null && ft.includes("not fully merged") ? ae.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${se}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ae.value = null, await Ae(!0);
            }
          } : ne(Dt.message || "Failed to delete branch", "error");
        } catch (Dt) {
          fe(ot);
          const rs = Dt instanceof Error ? Dt.message : "Failed to delete branch";
          rs.includes("not fully merged") ? ae.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${se}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ae.value = null, await Ae(!0);
            }
          } : ne(rs, "error");
        }
      };
      ae.value = {
        title: "Delete Branch",
        message: `Delete branch "${se}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ae.value = null, await Ae(q);
        }
      };
    }
    async function V(se) {
      U.value = null;
      const q = prompt("Enter branch name:");
      if (q) {
        const Ae = ne(`Creating branch ${q}...`, "info", 0), je = await d(q, se.hash);
        fe(Ae), je.status === "success" ? (ne(`Branch "${q}" created from ${se.short_hash}`, "success"), await ee()) : ne(je.message || "Failed to create branch", "error");
      }
    }
    function re() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Ve() {
      ae.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var se;
          ae.value = null, re(), ne("Restarting environment...", "info");
          try {
            (se = window.app) != null && se.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Qe() {
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
    async function vt(se, q) {
      R.value = !1, Fe.value = se, ie.value = q || null, _e.value = !0;
    }
    async function at() {
      _e.value = !1, Le.value = !0, re(), Se.value = {
        progress: 10,
        state: ut(10),
        message: Mt(10)
      };
      try {
        await w(Fe.value, ie.value || void 0), Ft(), Ws();
      } catch (se) {
        Yt(), Le.value = !1, ne(`Failed to initiate switch: ${se instanceof Error ? se.message : "Unknown error"}`, "error"), Se.value = { state: "idle", progress: 0, message: "" }, ie.value = null;
      }
    }
    function ut(se) {
      return se >= 100 ? "complete" : se >= 80 ? "validating" : se >= 60 ? "starting" : se >= 30 ? "syncing" : "preparing";
    }
    function Mt(se) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[ut(se)] || "";
    }
    function Ft() {
      if (ge) return;
      let se = 10;
      const q = 60, Ae = 5e3, je = 100, ot = (q - se) / (Ae / je);
      ge = window.setInterval(() => {
        if (se += ot, se >= q && (se = q, Yt()), Se.value.progress < q) {
          const ft = Math.floor(se);
          Se.value = {
            progress: ft,
            state: ut(ft),
            message: Mt(ft)
          };
        }
      }, je);
    }
    function Yt() {
      ge && (clearInterval(ge), ge = null);
    }
    function Ws() {
      we || (we = window.setInterval(async () => {
        try {
          let se = await M.getStatus();
          if ((!se || se.state === "idle") && (se = await p()), !se)
            return;
          const q = se.progress || 0;
          q >= 60 && Yt();
          const Ae = Math.max(q, Se.value.progress), je = se.state && se.state !== "idle" && se.state !== "unknown", ot = je ? se.state : ut(Ae), ft = je && se.message || Mt(Ae);
          Se.value = {
            state: ot,
            progress: Ae,
            message: ft
          }, se.state === "complete" ? (Yt(), Ms(), Le.value = !1, ne(`✓ Switched to ${Fe.value}`, "success"), await ee(), Fe.value = "") : se.state === "rolled_back" ? (Yt(), Ms(), Le.value = !1, ne("Switch failed, restored previous environment", "warning"), Fe.value = "") : se.state === "critical_failure" && (Yt(), Ms(), Le.value = !1, ne(`Critical error during switch: ${se.message}`, "error"), Fe.value = "");
        } catch (se) {
          console.error("Failed to poll switch progress:", se);
        }
      }, 1e3));
    }
    function Ms() {
      Yt(), we && (clearInterval(we), we = null);
    }
    function no() {
      var se;
      _e.value = !1, Fe.value = "", (se = P.value) != null && se.state && P.value.state !== "managed" && (oe.value = P.value.state === "no_workspace" ? 1 : 2, L.value = !0);
    }
    async function Co(se) {
      ve.value = !1, await ee(), ne(se.message, se.success ? "success" : "error");
    }
    async function xo() {
      pe.value = !1;
      const se = ne("Syncing environment...", "info", 0);
      try {
        const q = await I("skip", !0);
        if (fe(se), q.status === "success") {
          const Ae = [];
          q.nodes_installed.length && Ae.push(`${q.nodes_installed.length} installed`), q.nodes_removed.length && Ae.push(`${q.nodes_removed.length} removed`);
          const je = Ae.length ? `: ${Ae.join(", ")}` : "";
          ne(`✓ Environment synced${je}`, "success"), await ee();
        } else {
          const Ae = q.errors.length ? q.errors.join("; ") : q.message;
          ne(`Sync failed: ${Ae}`, "error");
        }
      } catch (q) {
        fe(se), ne(`Sync error: ${q instanceof Error ? q.message : "Unknown error"}`, "error");
      }
    }
    async function So(se) {
      var q;
      try {
        const Ae = await b(se);
        Ae.failed.length === 0 ? ne(`✓ Repaired ${Ae.success} workflow${Ae.success === 1 ? "" : "s"}`, "success") : ne(`Repaired ${Ae.success}, failed: ${Ae.failed.length}`, "warning"), await ee();
      } catch (Ae) {
        ne(`Repair failed: ${Ae instanceof Error ? Ae.message : "Unknown error"}`, "error");
      } finally {
        (q = ye.value) == null || q.resetRepairingState();
      }
    }
    async function xe() {
      var q, Ae;
      const se = ne("Repairing environment...", "info", 0);
      try {
        const je = await I("skip", !0);
        if (fe(se), je.status === "success") {
          const ot = [];
          je.nodes_installed.length && ot.push(`${je.nodes_installed.length} installed`), je.nodes_removed.length && ot.push(`${je.nodes_removed.length} removed`);
          const ft = ot.length ? `: ${ot.join(", ")}` : "";
          ne(`✓ Environment repaired${ft}`, "success"), (q = ye.value) == null || q.closeDetailModal(), await ee();
        } else {
          const ot = je.errors.length ? je.errors.join(", ") : je.message || "Unknown error";
          ne(`Repair failed: ${ot}`, "error");
        }
      } catch (je) {
        fe(se), ne(`Repair error: ${je instanceof Error ? je.message : "Unknown error"}`, "error");
      } finally {
        (Ae = ye.value) == null || Ae.resetRepairingEnvironmentState();
      }
    }
    async function Z(se, q) {
      ne(`Environment '${se}' created`, "success"), await ee(), Y.value && await Y.value.loadEnvironments(), q && await vt(se);
    }
    async function He(se) {
      var q;
      if (((q = E.value) == null ? void 0 : q.name) === se) {
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
            const Ae = await k(se);
            Ae.status === "success" ? (ne(`Environment "${se}" deleted`, "success"), await ee(), Y.value && await Y.value.loadEnvironments()) : ne(Ae.message || "Failed to delete environment", "error");
          } catch (Ae) {
            ne(`Error deleting environment: ${Ae instanceof Error ? Ae.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function gt(se, q) {
      L.value = !1;
      try {
        P.value = await T();
      } catch {
      }
      await vt(se, q);
    }
    function Jt() {
      L.value = !1, n("close");
    }
    async function ys(se, q) {
      await vt(se, q);
    }
    async function ws(se) {
      await ee(), await vt(se);
    }
    async function ls(se) {
      P.value = await T(), console.log(`Environment '${se}' created. Available for switching.`);
    }
    function Ne() {
      Re("environments", "all-envs"), setTimeout(() => {
        var se;
        (se = Y.value) == null || se.openCreateModal();
      }, 100);
    }
    function is() {
      if (!S.value) return [];
      const se = [], q = S.value.workflows;
      return q.new.length && se.push(`${q.new.length} new workflow(s)`), q.modified.length && se.push(`${q.modified.length} modified workflow(s)`), q.deleted.length && se.push(`${q.deleted.length} deleted workflow(s)`), se;
    }
    return Xe(async () => {
      try {
        if (P.value = await T(), P.value.state === "no_workspace") {
          L.value = !0, oe.value = 1;
          return;
        }
        if (P.value.state === "empty_workspace") {
          L.value = !0, oe.value = 2;
          return;
        }
        if (P.value.state === "unmanaged") {
          L.value = !0, oe.value = 2;
          return;
        }
      } catch (se) {
        console.warn("Setup status check failed, proceeding normally:", se);
      }
      await ee();
    }), (se, q) => {
      var Ae, je, ot, ft, Dt, rs, Gs, js, ln, rn, cn, un;
      return a(), r("div", QE, [
        t("div", ZE, [
          t("div", eT, [
            q[31] || (q[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            S.value ? (a(), r("div", tT)) : y("", !0)
          ]),
          t("div", sT, [
            C(Vr),
            q[34] || (q[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Te(["icon-btn", { spinning: N.value }]),
              onClick: ee,
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
              onClick: q[0] || (q[0] = (z) => n("close")),
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
        t("div", oT, [
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
            onClick: q[1] || (q[1] = (z) => Re("environments", "all-envs"))
          }, [
            S.value ? (a(), r("div", nT, [
              t("span", null, f(((Ae = E.value) == null ? void 0 : Ae.name) || ((je = S.value) == null ? void 0 : je.environment) || "Loading..."), 1),
              t("span", aT, "(" + f(S.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            q[36] || (q[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", lT, [
          t("div", iT, [
            t("div", rT, [
              t("div", cT, [
                q[37] || (q[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Te(["sidebar-item", { active: ce.value === "status" && Me.value === "this-env" }]),
                  onClick: q[2] || (q[2] = (z) => Re("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ce.value === "workflows" }]),
                  onClick: q[3] || (q[3] = (z) => Re("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ce.value === "models-env" }]),
                  onClick: q[4] || (q[4] = (z) => Re("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ce.value === "branches" }]),
                  onClick: q[5] || (q[5] = (z) => Re("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ce.value === "history" }]),
                  onClick: q[6] || (q[6] = (z) => Re("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ce.value === "nodes" }]),
                  onClick: q[7] || (q[7] = (z) => Re("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ce.value === "debug-env" }]),
                  onClick: q[8] || (q[8] = (z) => Re("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              q[41] || (q[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", uT, [
                q[38] || (q[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Te(["sidebar-item", { active: ce.value === "environments" }]),
                  onClick: q[9] || (q[9] = (z) => Re("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ce.value === "model-index" }]),
                  onClick: q[10] || (q[10] = (z) => Re("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ce.value === "settings" }]),
                  onClick: q[11] || (q[11] = (z) => Re("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ce.value === "debug-workspace" }]),
                  onClick: q[12] || (q[12] = (z) => Re("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              q[42] || (q[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", dT, [
                q[40] || (q[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Te(["sidebar-item", { active: ce.value === "deploy" }]),
                  onClick: q[13] || (q[13] = (z) => Re("deploy", "sharing"))
                }, [
                  q[39] || (q[39] = $(" DEPLOY ", -1)),
                  We(x) > 0 ? (a(), r("span", fT, f(We(x)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ce.value === "export" }]),
                  onClick: q[14] || (q[14] = (z) => Re("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ce.value === "import" }]),
                  onClick: q[15] || (q[15] = (z) => Re("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ce.value === "remotes" }]),
                  onClick: q[16] || (q[16] = (z) => Re("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", mT, [
              C(Wr)
            ])
          ]),
          t("div", vT, [
            O.value ? (a(), r("div", pT, f(O.value), 1)) : !S.value && ce.value === "status" ? (a(), r("div", gT, " Loading status... ")) : (a(), r(j, { key: 2 }, [
              ce.value === "status" ? (a(), D(ov, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ye,
                status: S.value,
                "setup-state": X.value,
                onSwitchBranch: W,
                onCommitChanges: q[17] || (q[17] = (z) => ve.value = !0),
                onSyncEnvironment: q[18] || (q[18] = (z) => pe.value = !0),
                onViewWorkflows: q[19] || (q[19] = (z) => Re("workflows", "this-env")),
                onViewHistory: q[20] || (q[20] = (z) => Re("history", "this-env")),
                onViewDebug: q[21] || (q[21] = (z) => Re("debug-env", "this-env")),
                onViewNodes: q[22] || (q[22] = (z) => Re("nodes", "this-env")),
                onRepairMissingModels: So,
                onRepairEnvironment: xe,
                onStartSetup: q[23] || (q[23] = (z) => L.value = !0),
                onViewEnvironments: q[24] || (q[24] = (z) => Re("environments", "all-envs")),
                onCreateEnvironment: Ne
              }, null, 8, ["status", "setup-state"])) : ce.value === "workflows" ? (a(), D(D0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: Q,
                onRefresh: ee
              }, null, 512)) : ce.value === "models-env" ? (a(), D(pw, {
                key: 2,
                onNavigate: A
              })) : ce.value === "branches" ? (a(), D(yv, {
                key: 3,
                branches: K.value,
                current: ((ot = S.value) == null ? void 0 : ot.branch) || null,
                onSwitch: be,
                onCreate: ke,
                onDelete: G
              }, null, 8, ["branches", "current"])) : ce.value === "history" ? (a(), D(Tv, {
                key: 4,
                commits: H.value,
                onSelect: J,
                onCheckout: Oe
              }, null, 8, ["commits"])) : ce.value === "nodes" ? (a(), D(pk, {
                key: 5,
                "version-mismatches": ((Dt = (ft = S.value) == null ? void 0 : ft.comparison) == null ? void 0 : Dt.version_mismatches) || [],
                onOpenNodeManager: te,
                onRepairEnvironment: xe,
                onToast: Ue
              }, null, 8, ["version-mismatches"])) : ce.value === "debug-env" ? (a(), D(T$, { key: 6 })) : ce.value === "environments" ? (a(), D(MC, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: Y,
                onSwitch: vt,
                onCreated: Z,
                onDelete: He
              }, null, 512)) : ce.value === "model-index" ? (a(), D(z_, {
                key: 8,
                onRefresh: ee
              })) : ce.value === "settings" ? (a(), D(_$, { key: 9 })) : ce.value === "debug-workspace" ? (a(), D(E$, { key: 10 })) : ce.value === "deploy" ? (a(), D(c6, {
                key: 11,
                onToast: Ue,
                onNavigate: A
              })) : ce.value === "export" ? (a(), D(rx, { key: 12 })) : ce.value === "import" ? (a(), D(t5, {
                key: 13,
                onImportCompleteSwitch: ws
              })) : ce.value === "remotes" ? (a(), D(e$, {
                key: 14,
                onToast: Ue
              })) : y("", !0)
            ], 64))
          ])
        ]),
        U.value ? (a(), D(I6, {
          key: 0,
          commit: U.value,
          onClose: q[25] || (q[25] = (z) => U.value = null),
          onCheckout: Oe,
          onCreateBranch: V
        }, null, 8, ["commit"])) : y("", !0),
        ae.value ? (a(), D(nl, {
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
          onCancel: q[26] || (q[26] = (z) => ae.value = null),
          onSecondary: ae.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        C(II, {
          show: _e.value,
          "from-environment": ((rs = E.value) == null ? void 0 : rs.name) || "unknown",
          "to-environment": Fe.value,
          onConfirm: at,
          onClose: no
        }, null, 8, ["show", "from-environment", "to-environment"]),
        ve.value && S.value ? (a(), D(Br, {
          key: 2,
          status: S.value,
          "as-modal": !0,
          onClose: q[27] || (q[27] = (z) => ve.value = !1),
          onCommitted: Co
        }, null, 8, ["status"])) : y("", !0),
        pe.value && S.value ? (a(), D(KI, {
          key: 3,
          show: pe.value,
          "mismatch-details": {
            missing_nodes: S.value.comparison.missing_nodes,
            extra_nodes: S.value.comparison.extra_nodes
          },
          onConfirm: xo,
          onClose: q[28] || (q[28] = (z) => pe.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        C(NI, {
          show: Le.value,
          state: Se.value.state,
          progress: Se.value.progress,
          message: Se.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        R.value ? (a(), r("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: q[30] || (q[30] = it((z) => R.value = !1, ["self"]))
        }, [
          t("div", hT, [
            t("div", yT, [
              q[44] || (q[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: q[29] || (q[29] = (z) => R.value = !1)
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
            t("div", wT, [
              q[45] || (q[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", _T, [
                (a(!0), r(j, null, he(B.value, (z) => (a(), r("div", {
                  key: z.name,
                  class: Te(["env-item", { current: z.is_current }])
                }, [
                  t("div", kT, [
                    t("div", bT, [
                      t("span", $T, f(z.is_current ? "●" : "○"), 1),
                      t("span", CT, f(z.name), 1),
                      z.current_branch ? (a(), r("span", xT, "(" + f(z.current_branch) + ")", 1)) : y("", !0),
                      z.is_current ? (a(), r("span", ST, "CURRENT")) : y("", !0)
                    ]),
                    t("div", IT, f(z.workflow_count) + " workflows • " + f(z.node_count) + " nodes ", 1)
                  ]),
                  z.is_current ? y("", !0) : (a(), r("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: ($e) => vt(z.name)
                  }, " SWITCH ", 8, ET))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        L.value ? (a(), D(XE, {
          key: 5,
          "default-path": ((Gs = P.value) == null ? void 0 : Gs.default_path) || "~/comfygit",
          "detected-models-dir": ((js = P.value) == null ? void 0 : js.detected_models_dir) || null,
          "initial-step": oe.value,
          "existing-environments": ((ln = P.value) == null ? void 0 : ln.environments) || [],
          "cli-installed": ((rn = P.value) == null ? void 0 : rn.cli_installed) ?? !0,
          "setup-state": ((cn = P.value) == null ? void 0 : cn.state) || "no_workspace",
          "workspace-path": ((un = P.value) == null ? void 0 : un.workspace_path) || null,
          onComplete: gt,
          onClose: Jt,
          onSwitchEnvironment: ys,
          onEnvironmentCreatedNoSwitch: ls
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", TT, [
          C(md, { name: "toast" }, {
            default: h(() => [
              (a(!0), r(j, null, he(Ie.value, (z) => (a(), r("div", {
                key: z.id,
                class: Te(["toast", z.type])
              }, [
                t("span", PT, f(z.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), MT = /* @__PURE__ */ me(RT, [["__scopeId", "data-v-037b3ee3"]]), DT = { class: "item-header" }, LT = { class: "item-info" }, OT = { class: "filename" }, AT = { class: "metadata" }, UT = { class: "size" }, NT = {
  key: 0,
  class: "type"
}, zT = { class: "item-actions" }, FT = {
  key: 0,
  class: "progress-section"
}, BT = { class: "progress-bar" }, VT = { class: "progress-stats" }, WT = { class: "downloaded" }, GT = { class: "speed" }, jT = {
  key: 0,
  class: "eta"
}, HT = {
  key: 1,
  class: "status-msg paused"
}, KT = {
  key: 2,
  class: "status-msg queued"
}, qT = {
  key: 3,
  class: "status-msg completed"
}, YT = {
  key: 4,
  class: "status-msg failed"
}, JT = {
  key: 0,
  class: "retries"
}, XT = /* @__PURE__ */ ue({
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
      class: Te(["download-item", `status-${e.item.status}`])
    }, [
      t("div", DT, [
        t("div", LT, [
          t("div", OT, f(e.item.filename), 1),
          t("div", AT, [
            t("span", UT, f(n(e.item.size)), 1),
            e.item.type ? (a(), r("span", NT, f(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", zT, [
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
      e.item.status === "downloading" ? (a(), r("div", FT, [
        t("div", BT, [
          t("div", {
            class: "progress-fill",
            style: qt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", VT, [
          t("span", WT, f(n(e.item.downloaded)) + " / " + f(n(e.item.size)), 1),
          t("span", GT, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), r("span", jT, f(i(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), r("div", HT, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), r("div", KT, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), r("div", qT, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), r("div", YT, [
        $(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), r("span", JT, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Mo = /* @__PURE__ */ me(XT, [["__scopeId", "data-v-2110df65"]]), QT = { class: "queue-title" }, ZT = { class: "count" }, e7 = { class: "queue-actions" }, t7 = { class: "action-label" }, s7 = {
  key: 0,
  class: "overall-progress"
}, o7 = { class: "progress-bar" }, n7 = {
  key: 0,
  class: "current-mini"
}, a7 = { class: "filename" }, l7 = { class: "speed" }, i7 = {
  key: 1,
  class: "queue-content"
}, r7 = {
  key: 0,
  class: "section"
}, c7 = {
  key: 1,
  class: "section"
}, u7 = { class: "section-header" }, d7 = { class: "section-label paused" }, f7 = { class: "items-list" }, m7 = {
  key: 2,
  class: "section"
}, v7 = { class: "section-header" }, p7 = { class: "section-label" }, g7 = { class: "items-list" }, h7 = {
  key: 3,
  class: "section"
}, y7 = { class: "section-header" }, w7 = { class: "section-label" }, _7 = { class: "items-list" }, k7 = {
  key: 4,
  class: "section"
}, b7 = { class: "section-header" }, $7 = { class: "section-label failed" }, C7 = { class: "items-list" }, x7 = /* @__PURE__ */ ue({
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
      resumeDownload: g,
      resumeAllPaused: w,
      removeItem: p,
      clearCompleted: k
    } = bo(), I = _(!1);
    let b = null;
    yt(
      () => ({
        active: d.value,
        failed: i.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (S, H) => {
        b && (clearTimeout(b), b = null);
        const K = S.active === 0 && S.failed === 0 && S.paused === 0 && S.completed > 0, B = H && (H.active > 0 || H.paused > 0);
        K && B && (b = setTimeout(() => {
          k(), b = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const T = F(() => {
      var K;
      if (s.items.length === 0) return 0;
      const S = l.value.length, H = ((K = o.value) == null ? void 0 : K.progress) || 0;
      return Math.round((S + H / 100) / s.items.length * 100);
    });
    function M(S) {
      m(S);
    }
    function x(S) {
      return S === 0 ? "" : `${(S / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (S, H) => (a(), D(Ct, { to: "body" }, [
      We(u) ? (a(), r("div", {
        key: 0,
        class: Te(["model-download-queue", { minimized: !I.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: H[0] || (H[0] = (K) => I.value = !I.value)
        }, [
          t("div", QT, [
            H[4] || (H[4] = t("span", { class: "icon" }, "↓", -1)),
            H[5] || (H[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", ZT, "(" + f(We(d)) + "/" + f(We(s).items.length) + ")", 1)
          ]),
          t("div", e7, [
            t("span", t7, f(I.value ? "minimize" : "expand"), 1)
          ])
        ]),
        I.value ? (a(), r("div", i7, [
          We(o) ? (a(), r("div", r7, [
            H[6] || (H[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            C(Mo, {
              item: We(o),
              onCancel: H[1] || (H[1] = (K) => M(We(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          We(c).length > 0 ? (a(), r("div", c7, [
            t("div", u7, [
              t("span", d7, "Paused (" + f(We(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: H[2] || (H[2] = //@ts-ignore
                (...K) => We(w) && We(w)(...K))
              }, "Resume All")
            ]),
            t("div", f7, [
              (a(!0), r(j, null, he(We(c), (K) => (a(), D(Mo, {
                key: K.id,
                item: K,
                onResume: (B) => We(g)(K.id),
                onRemove: (B) => We(p)(K.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(n).length > 0 ? (a(), r("div", m7, [
            t("div", v7, [
              t("span", p7, "Queued (" + f(We(n).length) + ")", 1)
            ]),
            t("div", g7, [
              (a(!0), r(j, null, he(We(n), (K) => (a(), D(Mo, {
                key: K.id,
                item: K,
                onCancel: (B) => M(K.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          We(l).length > 0 ? (a(), r("div", h7, [
            t("div", y7, [
              t("span", w7, "Completed (" + f(We(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: H[3] || (H[3] = //@ts-ignore
                (...K) => We(k) && We(k)(...K))
              }, "Clear")
            ]),
            t("div", _7, [
              (a(!0), r(j, null, he(We(l).slice(0, 3), (K) => (a(), D(Mo, {
                key: K.id,
                item: K,
                onRemove: (B) => We(p)(K.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(i).length > 0 ? (a(), r("div", k7, [
            t("div", b7, [
              t("span", $7, "Failed (" + f(We(i).length) + ")", 1)
            ]),
            t("div", C7, [
              (a(!0), r(j, null, he(We(i), (K) => (a(), D(Mo, {
                key: K.id,
                item: K,
                onRetry: (B) => We(v)(K.id),
                onRemove: (B) => We(p)(K.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), r("div", s7, [
          t("div", o7, [
            t("div", {
              class: "progress-fill",
              style: qt({ width: `${T.value}%` })
            }, null, 4)
          ]),
          We(o) ? (a(), r("div", n7, [
            t("span", a7, f(We(o).filename), 1),
            t("span", l7, f(x(We(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), S7 = /* @__PURE__ */ me(x7, [["__scopeId", "data-v-60751cfa"]]), I7 = {
  key: 0,
  class: "loading-state"
}, E7 = {
  key: 1,
  class: "analysis-results"
}, T7 = {
  key: 0,
  class: "section"
}, P7 = { class: "section-header" }, R7 = { class: "section-title" }, M7 = { class: "item-list" }, D7 = { class: "package-info" }, L7 = { class: "package-name" }, O7 = { class: "node-count" }, A7 = {
  key: 1,
  class: "installing-badge"
}, U7 = {
  key: 2,
  class: "queued-badge"
}, N7 = ["title"], z7 = {
  key: 4,
  class: "installed-badge"
}, F7 = {
  key: 0,
  class: "overflow-note"
}, B7 = {
  key: 1,
  class: "section"
}, V7 = { class: "section-header" }, W7 = { class: "section-title" }, G7 = { class: "item-list" }, j7 = { class: "node-type" }, H7 = {
  key: 0,
  class: "overflow-note"
}, K7 = {
  key: 2,
  class: "section"
}, q7 = { class: "section-header" }, Y7 = { class: "section-title" }, J7 = { class: "item-list" }, X7 = { class: "model-info" }, Q7 = { class: "model-name" }, Z7 = {
  key: 1,
  class: "queued-badge"
}, eP = {
  key: 1,
  class: "no-url"
}, tP = {
  key: 0,
  class: "overflow-note"
}, sP = { class: "dont-show-again" }, oP = /* @__PURE__ */ ue({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = _(!1), o = _(null), n = _(null), l = _(!1), i = _(/* @__PURE__ */ new Set()), c = _(/* @__PURE__ */ new Set()), u = _(/* @__PURE__ */ new Map()), d = _(/* @__PURE__ */ new Set()), m = _(!1), v = _(null), g = _(0), w = _(/* @__PURE__ */ new Set()), p = _(/* @__PURE__ */ new Map()), { addToQueue: k } = bo(), { queueNodeInstall: I } = tt(), b = F(() => T.value.length > 0 || x.value.length > 0 || S.value.length > 0), T = F(() => {
      var we, ge;
      if (!((we = n.value) != null && we.nodes)) return [];
      const ie = /* @__PURE__ */ new Map(), Se = (n.value.nodes.resolved || []).filter((Ce) => {
        var de;
        return !Ce.is_installed && ((de = Ce.package) == null ? void 0 : de.package_id);
      });
      for (const Ce of Se) {
        const de = Ce.package.package_id;
        ie.has(de) || ie.set(de, {
          package_id: de,
          title: Ce.package.title || de,
          node_count: 0,
          node_types: [],
          repository: Ce.package.repository || null,
          latest_version: Ce.package.latest_version || null
        });
        const ce = ie.get(de);
        ce.node_count++, ce.node_types.push(((ge = Ce.reference) == null ? void 0 : ge.node_type) || Ce.node_type);
      }
      return Array.from(ie.values());
    }), M = F(() => T.value.reduce((ie, Se) => ie + Se.node_count, 0)), x = F(() => {
      var ie;
      return (ie = n.value) != null && ie.nodes ? (n.value.nodes.unresolved || []).map((Se) => {
        var we;
        return {
          node_type: ((we = Se.reference) == null ? void 0 : we.node_type) || Se.node_type
        };
      }) : [];
    }), S = F(() => {
      var we;
      if (!((we = n.value) != null && we.models)) return [];
      const ie = (n.value.models.resolved || []).filter(
        (ge) => ge.match_type === "download_intent" || ge.match_type === "property_download_intent" || ge.match_type === "not_found"
      ).map((ge) => {
        var Ce, de, ce, Me;
        return {
          filename: ((de = (Ce = ge.reference) == null ? void 0 : Ce.widget_value) == null ? void 0 : de.split("/").pop()) || ((ce = ge.reference) == null ? void 0 : ce.widget_value) || ge.widget_value,
          widget_value: ((Me = ge.reference) == null ? void 0 : Me.widget_value) || ge.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: ge.download_source || null,
          targetPath: ge.target_path || null,
          canDownload: !!(ge.download_source && ge.target_path)
        };
      }), Se = (n.value.models.unresolved || []).map((ge) => {
        var Ce, de, ce, Me;
        return {
          filename: ((de = (Ce = ge.reference) == null ? void 0 : Ce.widget_value) == null ? void 0 : de.split("/").pop()) || ((ce = ge.reference) == null ? void 0 : ce.widget_value) || ge.widget_value,
          widget_value: ((Me = ge.reference) == null ? void 0 : Me.widget_value) || ge.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      });
      return [...ie, ...Se];
    }), H = F(() => S.value.filter((ie) => ie.canDownload)), K = F(() => T.value.length > 0 && T.value.every(
      (ie) => i.value.has(ie.package_id) || c.value.has(ie.package_id) || u.value.has(ie.package_id)
    )), B = F(() => H.value.length > 0 && H.value.every((ie) => d.value.has(ie.url))), E = F(() => T.value.length > 0 || H.value.length > 0), P = F(() => {
      const ie = T.value.length === 0 || K.value, Se = H.value.length === 0 || B.value;
      return ie && Se;
    });
    async function L(ie) {
      const Se = ie.package_id;
      if (!(i.value.has(Se) || c.value.has(Se) || u.value.has(Se))) {
        v.value = Se;
        try {
          const { ui_id: we } = await I({
            id: Se,
            version: ie.latest_version || "latest",
            selected_version: ie.latest_version || "latest",
            repository: ie.repository || void 0,
            mode: "remote",
            channel: "default"
          });
          p.value.set(we, Se), c.value.add(Se);
        } catch (we) {
          console.error("[ComfyGit] Failed to queue package install:", we), u.value.set(Se, "Failed to queue install request");
        } finally {
          v.value = null;
        }
      }
    }
    function oe(ie) {
      !ie.url || !ie.targetPath || d.value.has(ie.url) || (k([{
        workflow: "unsaved",
        filename: ie.filename,
        url: ie.url,
        targetPath: ie.targetPath
      }]), d.value.add(ie.url));
    }
    async function X() {
      for (const ie of T.value)
        !i.value.has(ie.package_id) && !c.value.has(ie.package_id) && !u.value.has(ie.package_id) && await L(ie);
    }
    function N() {
      const ie = H.value.filter(
        (Se) => !d.value.has(Se.url)
      );
      if (ie.length !== 0) {
        k(ie.map((Se) => ({
          workflow: "unsaved",
          filename: Se.filename,
          url: Se.url,
          targetPath: Se.targetPath
        })));
        for (const Se of ie)
          d.value.add(Se.url);
      }
    }
    function O() {
      X(), N();
    }
    function U() {
      m.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function R(ie) {
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const Se = ie == null ? void 0 : ie.id;
      if (Se && w.value.has(Se)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${Se} this session`);
        return;
      }
      try {
        const we = await fetch("/v2/comfygit/workflow/is-saved", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: ie })
        });
        if (we.ok) {
          const ge = await we.json();
          if (ge.is_saved) {
            console.log(`[ComfyGit] Workflow matches saved file: ${ge.filename}, skipping popup`), Se && w.value.add(Se);
            return;
          }
        }
      } catch (we) {
        console.warn("[ComfyGit] Failed to check if workflow is saved:", we);
      }
      s.value = !0, o.value = null, i.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), p.value = /* @__PURE__ */ new Map(), m.value = !1, g.value = 0;
      try {
        const we = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: ie, name: "unsaved" })
        });
        if (!we.ok) {
          const ge = await we.json();
          throw new Error(ge.error || "Failed to analyze workflow");
        }
        n.value = await we.json(), b.value && (l.value = !0, Se && w.value.add(Se));
      } catch (we) {
        console.error("[ComfyGit] Failed to analyze workflow:", we);
      } finally {
        s.value = !1;
      }
    }
    function Q() {
      l.value = !1, n.value = null;
    }
    function Y(ie) {
      const { workflow: Se } = ie.detail;
      Se && R(Se);
    }
    function ye(ie) {
      var ge;
      const Se = (ge = ie.detail) == null ? void 0 : ge.ui_id, we = p.value.get(Se);
      we && (v.value = we, console.log("[ComfyGit] Installing package:", we));
    }
    function _e(ie) {
      var Ce, de, ce, Me, Re, A, W;
      const Se = (Ce = ie.detail) == null ? void 0 : Ce.ui_id, we = p.value.get(Se), ge = (ce = (de = ie.detail) == null ? void 0 : de.status) == null ? void 0 : ce.status_str;
      if (we) {
        if (p.value.delete(Se), c.value.delete(we), v.value === we && (v.value = null), ge === "success")
          i.value.add(we), g.value++, console.log("[ComfyGit] Package installed successfully:", we);
        else {
          const te = ((A = (Re = (Me = ie.detail) == null ? void 0 : Me.status) == null ? void 0 : Re.messages) == null ? void 0 : A[0]) || ((W = ie.detail) == null ? void 0 : W.result) || "Unknown error";
          u.value.set(we, te), console.error("[ComfyGit] Package install failed:", we, te);
        }
        p.value.size === 0 && g.value > 0 && window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: g.value }
        }));
      }
    }
    function Le() {
      var ie;
      return (ie = window.app) == null ? void 0 : ie.api;
    }
    function Fe(ie) {
      const { change_type: Se } = ie.detail;
      (Se === "created" || Se === "modified") && l.value && (l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return Xe(() => {
      window.addEventListener("comfygit:workflow-loaded", Y);
      const ie = Le();
      ie && (ie.addEventListener("cm-task-started", ye), ie.addEventListener("cm-task-completed", _e), ie.addEventListener("comfygit:workflow-changed", Fe));
    }), oo(() => {
      window.removeEventListener("comfygit:workflow-loaded", Y);
      const ie = Le();
      ie && (ie.removeEventListener("cm-task-started", ye), ie.removeEventListener("cm-task-completed", _e), ie.removeEventListener("comfygit:workflow-changed", Fe));
    }), (ie, Se) => l.value ? (a(), D(mt, {
      key: 0,
      title: "Missing Dependencies",
      size: "md",
      loading: s.value,
      error: o.value || void 0,
      onClose: Q
    }, {
      body: h(() => [
        s.value ? (a(), r("div", I7, [...Se[1] || (Se[1] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("span", null, "Analyzing workflow...", -1)
        ])])) : n.value && b.value ? (a(), r("div", E7, [
          T.value.length > 0 ? (a(), r("div", T7, [
            t("div", P7, [
              t("span", R7, "Missing Custom Nodes (" + f(M.value) + ")", 1),
              T.value.length > 1 ? (a(), D(De, {
                key: 0,
                size: "sm",
                variant: "secondary",
                disabled: K.value,
                onClick: X
              }, {
                default: h(() => [
                  $(f(K.value ? "All Queued" : "Install All"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y("", !0)
            ]),
            t("div", M7, [
              (a(!0), r(j, null, he(T.value.slice(0, 5), (we) => (a(), r("div", {
                key: we.package_id,
                class: "package-item"
              }, [
                t("div", D7, [
                  t("span", L7, f(we.title), 1),
                  t("span", O7, "(" + f(we.node_count) + " " + f(we.node_count === 1 ? "node" : "nodes") + ")", 1)
                ]),
                !i.value.has(we.package_id) && !c.value.has(we.package_id) && !u.value.has(we.package_id) ? (a(), D(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: v.value === we.package_id,
                  onClick: (ge) => L(we)
                }, {
                  default: h(() => [
                    $(f(v.value === we.package_id ? "Queueing..." : "Install"), 1)
                  ]),
                  _: 2
                }, 1032, ["disabled", "onClick"])) : v.value === we.package_id ? (a(), r("span", A7, "Installing...")) : c.value.has(we.package_id) ? (a(), r("span", U7, "Queued")) : u.value.has(we.package_id) ? (a(), r("span", {
                  key: 3,
                  class: "failed-badge",
                  title: u.value.get(we.package_id)
                }, "Failed ⚠", 8, N7)) : (a(), r("span", z7, "Installed"))
              ]))), 128)),
              T.value.length > 5 ? (a(), r("div", F7, " ...and " + f(T.value.length - 5) + " more packages ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          x.value.length > 0 ? (a(), r("div", B7, [
            t("div", V7, [
              t("span", W7, "Unknown Nodes (" + f(x.value.length) + ")", 1)
            ]),
            t("div", G7, [
              (a(!0), r(j, null, he(x.value.slice(0, 5), (we) => (a(), r("div", {
                key: we.node_type,
                class: "item"
              }, [
                t("code", j7, f(we.node_type), 1),
                Se[2] || (Se[2] = t("span", { class: "not-found" }, "Not found in registry", -1))
              ]))), 128)),
              x.value.length > 5 ? (a(), r("div", H7, " ...and " + f(x.value.length - 5) + " more ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          S.value.length > 0 ? (a(), r("div", K7, [
            t("div", q7, [
              t("span", Y7, "Missing Models (" + f(S.value.length) + ")", 1),
              H.value.length > 1 ? (a(), D(De, {
                key: 0,
                size: "sm",
                variant: "secondary",
                disabled: B.value,
                onClick: N
              }, {
                default: h(() => [
                  $(f(B.value ? "All Queued" : "Download All"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y("", !0)
            ]),
            t("div", J7, [
              (a(!0), r(j, null, he(S.value.slice(0, 5), (we) => (a(), r("div", {
                key: we.widget_value,
                class: "model-item"
              }, [
                t("div", X7, [
                  t("span", Q7, f(we.filename), 1)
                ]),
                we.canDownload ? (a(), r(j, { key: 0 }, [
                  d.value.has(we.url) ? (a(), r("span", Z7, "Queued")) : (a(), D(De, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    onClick: (ge) => oe(we)
                  }, {
                    default: h(() => [...Se[3] || (Se[3] = [
                      $(" Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"]))
                ], 64)) : (a(), r("span", eP, "Manual download required"))
              ]))), 128)),
              S.value.length > 5 ? (a(), r("div", tP, " ...and " + f(S.value.length - 5) + " more ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          t("div", sP, [
            C(Da, {
              modelValue: m.value,
              "onUpdate:modelValue": [
                Se[0] || (Se[0] = (we) => m.value = we),
                U
              ]
            }, {
              default: h(() => [...Se[4] || (Se[4] = [
                $(" Don't show this popup ", -1)
              ])]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])) : y("", !0)
      ]),
      footer: h(() => [
        C(De, {
          variant: "secondary",
          onClick: Q
        }, {
          default: h(() => [...Se[5] || (Se[5] = [
            $("Dismiss", -1)
          ])]),
          _: 1
        }),
        E.value ? (a(), D(De, {
          key: 0,
          variant: "primary",
          disabled: P.value,
          onClick: O
        }, {
          default: h(() => [
            $(f(P.value ? "All Done" : "Download All"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["loading", "error"])) : y("", !0);
  }
}), nP = /* @__PURE__ */ me(oP, [["__scopeId", "data-v-ed99da35"]]), aP = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', lP = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', iP = {
  comfy: aP,
  phosphor: lP
}, ll = "comfy", Gr = "comfygit-theme";
let Ys = null, jr = ll;
function rP() {
  try {
    const e = localStorage.getItem(Gr);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return ll;
}
function Hr(e = ll) {
  Ys && Ys.remove(), Ys = document.createElement("style"), Ys.id = "comfygit-theme-styles", Ys.setAttribute("data-theme", e), Ys.textContent = iP[e], document.head.appendChild(Ys), document.body.setAttribute("data-comfygit-theme", e), jr = e;
  try {
    localStorage.setItem(Gr, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function cP() {
  return jr;
}
function uP(e) {
  Hr(e);
}
function dP(e) {
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
const fP = rP();
Hr(fP);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), uP(e);
  },
  getTheme: () => {
    const e = cP();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Qt = null, At = null, jo = null, Do = null, si = null, Lo = null, oi = null;
const ho = _(null);
let rl = "managed", Kr = !1;
async function In() {
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
function mP() {
  if (!ho.value) return !1;
  const e = ho.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || ho.value.has_changes;
}
function ya(e) {
  Qt && Qt.remove(), Qt = document.createElement("div"), Qt.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", Qt.appendChild(s), Qt.addEventListener("click", (l) => {
    l.target === Qt && wa();
  });
  const o = (l) => {
    l.key === "Escape" && (wa(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), Zn({
    render: () => nn(MT, {
      initialView: e,
      onClose: wa,
      onStatusUpdate: async (l) => {
        ho.value = l, Ho(), await La(), Aa(), Oa();
      }
    })
  }).mount(s), document.body.appendChild(Qt);
}
function wa() {
  Qt && (Qt.remove(), Qt = null);
}
function vP(e) {
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
  document.addEventListener("keydown", n), jo = Zn({
    render: () => nn(Br, {
      status: ho.value,
      onClose: Oo,
      onCommitted: (l) => {
        Oo(), pP(l.success, l.message), In().then(Ho);
      }
    })
  }), jo.mount(At), document.body.appendChild(At);
}
function Oo() {
  jo && (jo.unmount(), jo = null), At && (At.remove(), At = null);
}
function pP(e, s) {
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
function gP() {
  Do || (Do = document.createElement("div"), Do.className = "comfygit-download-queue-root", si = Zn({
    render: () => nn(S7)
  }), si.mount(Do), document.body.appendChild(Do), console.log("[ComfyGit] Model download queue mounted"));
}
function hP() {
  Lo || (Lo = document.createElement("div"), Lo.className = "comfygit-missing-resources-root", oi = Zn({
    render: () => nn(nP)
  }), oi.mount(Lo), document.body.appendChild(Lo), console.log("[ComfyGit] Missing resources popup mounted"));
}
let Wt = null;
function Ho() {
  if (!Wt) return;
  const e = Wt.querySelector(".commit-indicator");
  e && (e.style.display = mP() ? "block" : "none");
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = ya, Wt = document.createElement("button"), Wt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Wt.innerHTML = 'Commit <span class="commit-indicator"></span>', Wt.title = "Quick Commit", Wt.onclick = () => vP(Wt), e.appendChild(s), e.appendChild(Wt), (i = (l = Vt.menu) == null ? void 0 : l.settingsGroup) != null && i.element && (Vt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), gP(), hP(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      ya(u);
    }));
    const { loadPendingDownloads: o } = bo();
    o(), await Promise.all([In(), La()]), Ho(), Aa(), Oa(), setTimeout(Oa, 100), setInterval(async () => {
      await Promise.all([In(), La()]), Ho(), Aa();
    }, 3e4);
    const n = Vt.api;
    if (n) {
      let c = function() {
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
        `, p.onmouseover = () => p.style.background = "var(--comfy-input-bg)", p.onmouseout = () => p.style.background = "var(--comfy-menu-bg)", p.onclick = () => c(), g.appendChild(p);
        const k = document.createElement("button");
        k.textContent = "×", k.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, k.onmouseover = () => k.style.opacity = "1", k.onmouseout = () => k.style.opacity = "0.6", k.onclick = () => g.remove(), g.appendChild(k), document.body.appendChild(g), console.log("[ComfyGit] Refresh notification displayed");
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
        const k = document.createElement("span");
        k.textContent = "⚠️", k.style.fontSize = "20px", p.appendChild(k);
        const I = document.createElement("div");
        I.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const b = document.createElement("div");
        b.textContent = "Node installation failed", b.style.cssText = "font-weight: 600; color: #e53935;", I.appendChild(b);
        const T = document.createElement("div");
        T.textContent = "Dependency conflict detected", T.style.cssText = "font-size: 12px; opacity: 0.8;", I.appendChild(T), p.appendChild(I);
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
          p.remove(), ya("debug-env");
        }, p.appendChild(M);
        const x = document.createElement("button");
        x.textContent = "×", x.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, x.onmouseover = () => x.style.opacity = "1", x.onmouseout = () => x.style.opacity = "0.6", x.onclick = () => p.remove(), p.appendChild(x), document.body.appendChild(p), console.log("[ComfyGit] Manager error toast displayed:", g), setTimeout(() => {
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
        const k = document.createElement("span");
        k.textContent = "✅", k.style.fontSize = "20px", p.appendChild(k);
        const I = document.createElement("div");
        I.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const b = document.createElement("div");
        b.textContent = "To apply changes, please restart ComfyUI", b.style.cssText = "font-weight: 500; color: #fff;", I.appendChild(b);
        const T = document.createElement("div");
        T.textContent = `${g} node package${g > 1 ? "s" : ""} ready to install`, T.style.cssText = "font-size: 12px; opacity: 0.7;", I.appendChild(T), p.appendChild(I);
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
          M.disabled = !0, M.textContent = "Restarting...", M.style.opacity = "0.7", b.textContent = "Restarting...", T.textContent = "Applying changes, please wait...";
          try {
            const S = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Vt.refreshComboInNodes && (await Vt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), k.textContent = "✅", b.textContent = "Nodes Installed", b.style.color = "#4caf50", T.textContent = `${g} package${g > 1 ? "s" : ""} installed successfully!`, p.style.borderColor = "#4caf50", M.style.display = "none", setTimeout(() => {
                  p.remove();
                }, 3e3);
              } catch (H) {
                console.error("[ComfyGit] Failed to refresh nodes:", H), k.textContent = "✅", b.textContent = "Restart Complete", b.style.color = "#4caf50", T.textContent = "Refresh the page to load new nodes.", p.style.borderColor = "#4caf50", M.style.display = "none";
              }
            };
            n.addEventListener("reconnected", S, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (S) {
            console.error("[ComfyGit] Failed to restart:", S), b.textContent = "Restart Failed", b.style.color = "#e53935", T.textContent = "Could not restart server. Try again.", p.style.borderColor = "#e53935", M.textContent = "Try Again", M.disabled = !1, M.style.opacity = "1";
          }
        }, p.appendChild(M);
        const x = document.createElement("button");
        x.textContent = "×", x.title = "Dismiss (restart later)", x.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, x.onmouseover = () => x.style.opacity = "1", x.onmouseout = () => x.style.opacity = "0.6", x.onclick = () => p.remove(), p.appendChild(x), document.body.appendChild(p), console.log(`[ComfyGit] Restart required notification displayed (${g} packages installed)`);
      };
      n.addEventListener("comfygit:workflow-changed", async (g) => {
        const { change_type: w, workflow_name: p } = g.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${p}`), await In(), Ho();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      n.addEventListener("status", async (g) => {
        const w = g.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (g) => {
        const w = dP(g.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (g) => {
        const w = g, { count: p = 1 } = w.detail || {};
        m(p);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
