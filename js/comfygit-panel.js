import { app as Wt } from "../../scripts/app.js";
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
}, Qr = /-\w/g, qt = Bn(
  (e) => e.replace(Qr, (s) => s.slice(1).toUpperCase())
), Xr = /\B([A-Z])/g, Bs = Bn(
  (e) => e.replace(Xr, "-$1").toLowerCase()
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
function Ft(e) {
  if (Be(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = ct(n) ? oc(n) : Ft(n);
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
function Ie(e) {
  let s = "";
  if (ct(e))
    s = e;
  else if (Be(e))
    for (let o = 0; o < e.length; o++) {
      const n = Ie(e[o]);
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
    o = to(e[n], s[n]);
  return o;
}
function to(e, s) {
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
      if (u && !d || !u && d || !to(e[c], s[c]))
        return !1;
    }
  }
  return String(e) === String(s);
}
function Ba(e, s) {
  return e.findIndex((o) => to(o, s));
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
const ka = /* @__PURE__ */ new WeakMap(), Zs = Symbol(
  ""
), ba = Symbol(
  ""
), qo = Symbol(
  ""
);
function kt(e, s, o) {
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
          d ? m && u(c.get("length")) : (u(c.get(Zs)), mo(e) && u(c.get(ba)));
          break;
        case "delete":
          d || (u(c.get(Zs)), mo(e) && u(c.get(ba)));
          break;
        case "set":
          mo(e) && u(c.get(Zs));
          break;
      }
  }
  Wa();
}
function ao(e) {
  const s = Je(e);
  return s === e ? s : (kt(s, "iterate", qo), jt(e) ? s : s.map(ss));
}
function jn(e) {
  return kt(e = Je(e), "iterate", qo), e;
}
function Os(e, s) {
  return Es(e) ? eo(e) ? yo(ss(s)) : yo(s) : ss(s);
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
  return n !== e && !jt(e) && (l._next = l.next, l.next = () => {
    const i = l._next();
    return i.done || (i.value = o(i.value)), i;
  }), l;
}
const fc = Array.prototype;
function _s(e, s, o, n, l, i) {
  const c = jn(e), u = c !== e && !jt(e), d = c[s];
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
  return l !== e && (jt(e) ? o.length > 3 && (i = function(c, u, d) {
    return o.call(this, c, u, d, e);
  }) : i = function(c, u, d) {
    return o.call(this, c, Os(e, u), d, e);
  }), l[s](i, ...n);
}
function aa(e, s, o) {
  const n = Je(e);
  kt(n, "iterate", qo);
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
  return kt(s, "has", e), s.hasOwnProperty(e);
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
      Ct(s) ? s : n
    );
    if ((ts(o) ? _i.has(o) : mc(o)) || (l || kt(s, "get", o), i))
      return u;
    if (Ct(u)) {
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
      if (!jt(n) && !Es(n) && (i = Je(i), n = Je(n)), !c && Ct(i) && !Ct(n))
        return m || (i.value = n), !0;
    }
    const u = c ? Number(o) < s.length : Ze(s, o), d = Reflect.set(
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
    return (!ts(o) || !_i.has(o)) && kt(s, "has", o), n;
  }
  ownKeys(s) {
    return kt(
      s,
      "iterate",
      Be(s) ? "length" : Zs
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
    return !s && kt(
      i,
      "iterate",
      d ? ba : Zs
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
      e || (Ns(l, u) && kt(c, "get", l), kt(c, "get", u));
      const { has: d } = dn(c), m = s ? $a : e ? yo : ss;
      if (d.call(c, l))
        return m(i.get(l));
      if (d.call(c, u))
        return m(i.get(u));
      i !== c && i.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && kt(Je(l), "iterate", Zs), l.size;
    },
    has(l) {
      const i = this.__v_raw, c = Je(i), u = Je(l);
      return e || (Ns(l, u) && kt(c, "has", l), kt(c, "has", u)), l === u ? i.has(l) : i.has(l) || i.has(u);
    },
    forEach(l, i) {
      const c = this, u = c.__v_raw, d = Je(u), m = s ? $a : e ? yo : ss;
      return !e && kt(d, "iterate", Zs), u.forEach((v, g) => l.call(i, m(v), m(g), c));
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
        !s && !jt(l) && !Es(l) && (l = Je(l));
        const i = Je(this);
        return dn(i).has.call(i, l) || (i.add(l), $s(i, "add", l, l)), this;
      },
      set(l, i) {
        !s && !jt(i) && !Es(i) && (i = Je(i));
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
function eo(e) {
  return Es(e) ? eo(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Es(e) {
  return !!(e && e.__v_isReadonly);
}
function jt(e) {
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
    const o = this._rawValue, n = this.__v_isShallow || jt(s) || Es(s);
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
  return eo(e) ? e : new Proxy(e, Rc);
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
let Qs;
function Lc(e, s = !1, o = Qs) {
  if (o) {
    let n = Tn.get(o);
    n || Tn.set(o, n = []), n.push(e);
  }
}
function Oc(e, s, o = st) {
  const { immediate: n, deep: l, once: i, scheduler: c, augmentJob: u, call: d } = o, m = (E) => l ? E : jt(E) || l === !1 || l === 0 ? Cs(E, 1) : Cs(E);
  let v, g, w, p, _ = !1, C = !1;
  if (Ct(e) ? (g = () => e.value, _ = jt(e)) : eo(e) ? (g = () => m(e), _ = !0) : Be(e) ? (C = !0, _ = e.some((E) => eo(E) || jt(E)), g = () => e.map((E) => {
    if (Ct(E))
      return E.value;
    if (eo(E))
      return m(E);
    if (Ge(E))
      return d ? d(E, 2) : E();
  })) : Ge(e) ? s ? g = d ? () => d(e, 2) : e : g = () => {
    if (w) {
      Ss();
      try {
        w();
      } finally {
        Is();
      }
    }
    const E = Qs;
    Qs = v;
    try {
      return d ? d(e, 3, [p]) : e(p);
    } finally {
      Qs = E;
    }
  } : g = gs, s && l) {
    const E = g, H = l === !0 ? 1 / 0 : l;
    g = () => Cs(E(), H);
  }
  const b = rc(), I = () => {
    v.stop(), b && b.active && za(b.effects, v);
  };
  if (i && s) {
    const E = s;
    s = (...H) => {
      E(...H), I();
    };
  }
  let M = C ? new Array(e.length).fill(mn) : mn;
  const x = (E) => {
    if (!(!(v.flags & 1) || !v.dirty && !E))
      if (s) {
        const H = v.run();
        if (l || _ || (C ? H.some((K, B) => Ns(K, M[B])) : Ns(H, M))) {
          w && w();
          const K = Qs;
          Qs = v;
          try {
            const B = [
              H,
              // pass undefined as the old value when it's changed for the first time
              M === mn ? void 0 : C && M[0] === mn ? [] : M,
              p
            ];
            M = H, d ? d(s, 3, B) : (
              // @ts-expect-error
              s(...B)
            );
          } finally {
            Qs = K;
          }
        }
      } else
        v.run();
  };
  return u && u(x), v = new fi(g), v.scheduler = c ? () => c(x, !1) : x, p = (E) => Lc(E, !1, v), w = v.onStop = () => {
    const E = Tn.get(v);
    if (E) {
      if (d)
        d(E, 4);
      else
        for (const H of E) H();
      Tn.delete(v);
    }
  }, s ? n ? x(!0) : M = v.run() : c ? c(x.bind(null, !0), !0) : v.run(), I.pause = v.pause.bind(v), I.resume = v.resume.bind(v), I.stop = I, I;
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
function yt(e) {
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
let wt = null, Ri = null;
function Rn(e) {
  const s = wt;
  return wt = e, Ri = e && e.type.__scopeId || null, s;
}
function h(e, s = wt, o) {
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
  if (wt === null)
    return e;
  const o = Qn(wt), n = e.dirs || (e.dirs = []);
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
function Ks(e, s, o, n) {
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
      o: { insert: p, querySelector: _, createText: C, createComment: b }
    } = m, I = Fo(s.props);
    let { shapeFlag: M, children: x, dynamicChildren: E } = s;
    if (e == null) {
      const H = s.el = C(""), K = s.anchor = C("");
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
      }, T = () => {
        const P = s.target = Ca(s.props, _), L = Oi(P, s, C, p);
        P && (c !== "svg" && pl(P) ? c = "svg" : c !== "mathml" && gl(P) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(P), I || (B(P, L), bn(s, !1)));
      };
      I && (B(o, K), bn(s, !0)), vl(s.props) ? (s.el.__isMounted = !1, St(() => {
        T(), delete s.el.__isMounted;
      }, i)) : T();
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
      const H = s.anchor = e.anchor, K = s.target = e.target, B = s.targetAnchor = e.targetAnchor, T = Fo(e.props), P = T ? o : K, L = T ? H : B;
      if (c === "svg" || pl(K) ? c = "svg" : (c === "mathml" || gl(K)) && (c = "mathml"), E ? (w(
        e.dynamicChildren,
        E,
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
      ), I)
        T ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : vn(
          s,
          o,
          H,
          m,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const le = s.target = Ca(
          s.props,
          _
        );
        le && vn(
          s,
          le,
          null,
          m,
          0
        );
      } else T && vn(
        s,
        K,
        B,
        m,
        1
      );
      bn(s, I);
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
  function w(C, b, I, M) {
    b.anchor = g(
      c(C),
      b,
      u(C),
      o,
      n,
      l,
      i
    ), b.targetStart = I, b.targetAnchor = M;
  }
  const p = s.target = Ca(
    s.props,
    d
  ), _ = Fo(s.props);
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
        let b = C;
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
          C && c(C),
          s,
          p,
          o,
          n,
          l,
          i
        );
      }
    bn(s, _);
  } else _ && s.shapeFlag & 16 && w(e, s, e, c(e));
  return s.anchor && c(s.anchor);
}
const _t = Li;
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
  return Qe(() => {
    e.isMounted = !0;
  }), Gi(() => {
    e.isUnmounting = !0;
  }), e;
}
const Vt = [Function, Array], Ui = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Vt,
  onEnter: Vt,
  onAfterEnter: Vt,
  onEnterCancelled: Vt,
  // leave
  onBeforeLeave: Vt,
  onLeave: Vt,
  onAfterLeave: Vt,
  onLeaveCancelled: Vt,
  // appear
  onBeforeAppear: Vt,
  onAppear: Vt,
  onAfterAppear: Vt,
  onAppearCancelled: Vt
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
      d.type !== bt && so(d, m);
      let v = o.subTree && hl(o.subTree);
      if (v && v.type !== bt && !Xs(v, d) && Ni(o).type !== bt) {
        let g = Jo(
          v,
          c,
          n,
          o
        );
        if (so(v, g), u === "out-in" && d.type !== bt)
          return n.isLeaving = !0, g.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete g.afterLeave, v = void 0;
          }, la(i);
        u === "in-out" && d.type !== bt ? g.delayLeave = (w, p, _) => {
          const C = Fi(
            n,
            v
          );
          C[String(v.key)] = v, w[bs] = () => {
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
    mode: c,
    persisted: u = !1,
    onBeforeEnter: d,
    onEnter: m,
    onAfterEnter: v,
    onEnterCancelled: g,
    onBeforeLeave: w,
    onLeave: p,
    onAfterLeave: _,
    onLeaveCancelled: C,
    onBeforeAppear: b,
    onAppear: I,
    onAfterAppear: M,
    onAppearCancelled: x
  } = s, E = String(e.key), H = Fi(o, e), K = (P, L) => {
    P && os(
      P,
      n,
      9,
      L
    );
  }, B = (P, L) => {
    const le = L[1];
    K(P, L), Be(P) ? P.every((Z) => Z.length <= 1) && le() : P.length <= 1 && le();
  }, T = {
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
      const le = H[E];
      le && Xs(e, le) && le.el[bs] && le.el[bs](), K(L, [P]);
    },
    enter(P) {
      let L = m, le = v, Z = g;
      if (!o.isMounted)
        if (i)
          L = I || m, le = M || v, Z = x || g;
        else
          return;
      let z = !1;
      const W = P[pn] = (Y) => {
        z || (z = !0, Y ? K(Z, [P]) : K(le, [P]), T.delayedLeave && T.delayedLeave(), P[pn] = void 0);
      };
      L ? B(L, [P, W]) : W();
    },
    leave(P, L) {
      const le = String(e.key);
      if (P[pn] && P[pn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return L();
      K(w, [P]);
      let Z = !1;
      const z = P[bs] = (W) => {
        Z || (Z = !0, L(), W ? K(C, [P]) : K(_, [P]), P[bs] = void 0, H[le] === e && delete H[le]);
      };
      H[le] = e, p ? B(p, [P, z]) : z();
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
  return T;
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
function so(e, s) {
  e.shapeFlag & 6 && e.component ? (e.transition = s, so(e.component.subTree, s)) : e.shapeFlag & 128 ? (e.ssContent.transition = s.clone(e.ssContent), e.ssFallback.transition = s.clone(e.ssFallback)) : e.transition = s;
}
function Ja(e, s = !1, o) {
  let n = [], l = 0;
  for (let i = 0; i < e.length; i++) {
    let c = e[i];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : i);
    c.type === j ? (c.patchFlag & 128 && l++, n = n.concat(
      Ja(c.children, s, u)
    )) : (s || c.type !== bt) && n.push(u != null ? zs(c, { key: u }) : c);
  }
  if (l > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function fe(e, s) {
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
      (_, C) => Bo(
        _,
        s && (Be(s) ? s[C] : s),
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
  const i = n.shapeFlag & 4 ? Qn(n.component) : n.el, c = l ? null : i, { i: u, r: d } = e, m = s && s.r, v = u.refs === st ? u.refs = {} : u.refs, g = u.setupState, w = Je(g), p = g === st ? ni : (_) => Ze(w, _);
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
    sn(d, u, 12, [c, v]);
  else {
    const _ = ct(d), C = Ct(d);
    if (_ || C) {
      const b = () => {
        if (e.f) {
          const I = _ ? p(d) ? g[d] : v[d] : d.value;
          if (l)
            Be(I) && za(I, i);
          else if (Be(I))
            I.includes(i) || I.push(i);
          else if (_)
            v[d] = [i], p(d) && (g[d] = v[d]);
          else {
            const M = [i];
            d.value = M, e.k && (v[e.k] = M);
          }
        } else _ ? (v[d] = c, p(d) && (g[d] = c)) : C && (d.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const I = () => {
          b(), Mn.delete(e);
        };
        I.id = -1, Mn.set(e, I), St(I, o);
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
  Ws(() => {
    za(n[s], l);
  }, o);
}
function qn(e, s, o = $t, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), i = s.__weh || (s.__weh = (...c) => {
      Ss();
      const u = on(o), d = os(s, o, e, c);
      return u(), Is(), d;
    });
    return n ? l.unshift(i) : l.push(i), i;
  }
}
const Ts = (e) => (s, o = $t) => {
  (!Zo || e === "sp") && qn(e, (...n) => s(...n), o);
}, jc = Ts("bm"), Qe = Ts("m"), Hc = Ts(
  "bu"
), Wi = Ts("u"), Gi = Ts(
  "bum"
), Ws = Ts("um"), Kc = Ts(
  "sp"
), qc = Ts("rtg"), Yc = Ts("rtc");
function Jc(e, s = $t) {
  qn("ec", e, s);
}
const Qc = "components", ji = Symbol.for("v-ndc");
function Qa(e) {
  return ct(e) ? Xc(Qc, e, !1) || e : e || ji;
}
function Xc(e, s, o = !0, n = !1) {
  const l = wt || $t;
  if (l) {
    const i = l.type;
    {
      const u = Fu(
        i,
        !1
      );
      if (u && (u === s || u === qt(s) || u === Vn(qt(s))))
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
  return e && (e[s] || e[qt(s)] || e[Vn(qt(s))]);
}
function ge(e, s, o, n) {
  let l;
  const i = o, c = Be(e);
  if (c || ct(e)) {
    const u = c && eo(e);
    let d = !1, m = !1;
    u && (d = !jt(e), m = Es(e), e = jn(e)), l = new Array(e.length);
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
function oo(e, s) {
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
  if (wt.ce || wt.parent && po(wt.parent) && wt.parent.ce) {
    const m = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), a(), D(
      j,
      null,
      [S("slot", o, n && n())],
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
  return e.some((s) => Xo(s) ? !(s.type === bt || s.type === j && !Hi(s.children)) : !0) ? e : null;
}
const xa = (e) => e ? dr(e) ? Qn(e) : xa(e.parent) : null, Vo = (
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
    $nextTick: (e) => e.n || (e.n = yt.bind(e.proxy)),
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
      return s === "$attrs" && kt(e.attrs, "get", ""), m(e);
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
    updated: _,
    activated: C,
    deactivated: b,
    beforeDestroy: I,
    beforeUnmount: M,
    destroyed: x,
    unmounted: E,
    render: H,
    renderTracked: K,
    renderTriggered: B,
    errorCaptured: T,
    serverPrefetch: P,
    // public API
    expose: L,
    inheritAttrs: le,
    // assets
    components: Z,
    directives: z,
    filters: W
  } = s;
  if (m && tu(m, n, null), c)
    for (const se in c) {
      const X = c[se];
      Ge(X) && (n[se] = X.bind(o));
    }
  if (l) {
    const se = l.call(o, o);
    et(se) && (e.data = Vs(se));
  }
  if (Sa = !0, i)
    for (const se in i) {
      const X = i[se], ye = Ge(X) ? X.bind(o, o) : Ge(X.get) ? X.get.bind(o, o) : gs, _e = !Ge(X) && Ge(X.set) ? X.set.bind(o) : gs, ce = U({
        get: ye,
        set: _e
      });
      Object.defineProperty(n, se, {
        enumerable: !0,
        configurable: !0,
        get: () => ce.value,
        set: (pe) => ce.value = pe
      });
    }
  if (u)
    for (const se in u)
      Ki(u[se], n, o, se);
  if (d) {
    const se = Ge(d) ? d.call(o) : d;
    Reflect.ownKeys(se).forEach((X) => {
      iu(X, se[X]);
    });
  }
  v && kl(v, e, "c");
  function A(se, X) {
    Be(X) ? X.forEach((ye) => se(ye.bind(o))) : X && se(X.bind(o));
  }
  if (A(jc, g), A(Qe, w), A(Hc, p), A(Wi, _), A(Vc, C), A(Wc, b), A(Jc, T), A(Yc, K), A(qc, B), A(Gi, M), A(Ws, E), A(Kc, P), Be(L))
    if (L.length) {
      const se = e.exposed || (e.exposed = {});
      L.forEach((X) => {
        Object.defineProperty(se, X, {
          get: () => o[X],
          set: (ye) => o[X] = ye,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  H && e.render === gs && (e.render = H), le != null && (e.inheritAttrs = le), Z && (e.components = Z), z && (e.directives = z), P && Bi(e);
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
    ) : i = $n(l.from || n) : i = $n(l), Ct(i) ? Object.defineProperty(s, n, {
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
  let l = n.includes(".") ? Qi(o, n) : () => o[n];
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
          const p = m._ceVNode || S(n, l);
          return p.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(p, v, w), d = !0, m._container = v, v.__vue_app__ = m, Qn(p.component);
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
function gt(e, s, o) {
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
  const v = $t;
  u.call = (p, _, C) => os(p, v, _, C);
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
  const n = this.proxy, l = ct(e) ? e.includes(".") ? Qi(n, e) : () => n[e] : e.bind(n, n);
  let i;
  Ge(s) ? i = s : (i = s.handler, o = s);
  const c = on(this), u = Ji(l, i.bind(n), o);
  return c(), u;
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
const du = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${qt(s)}Modifiers`] || e[`${Bs(s)}Modifiers`];
function fu(e, s, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || st;
  let l = o;
  const i = s.startsWith("update:"), c = i && du(n, s.slice(7));
  c && (c.trim && (l = o.map((v) => ct(v) ? v.trim() : v)), c.number && (l = o.map(Wn)));
  let u, d = n[u = ta(s)] || // also try camelCase event handler (#2249)
  n[u = ta(qt(s))];
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
function Xi(e, s, o = !1) {
  const n = o ? mu : s.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const i = e.emits;
  let c = {}, u = !1;
  if (!Ge(e)) {
    const d = (m) => {
      const v = Xi(m, s, !0);
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
    ctx: _,
    inheritAttrs: C
  } = e, b = Rn(e);
  let I, M;
  try {
    if (o.shapeFlag & 4) {
      const E = l || n, H = E;
      I = ps(
        m.call(
          H,
          E,
          v,
          g,
          p,
          w,
          _
        )
      ), M = u;
    } else {
      const E = s;
      I = ps(
        E.length > 1 ? E(
          g,
          { attrs: u, slots: c, emit: d }
        ) : E(
          g,
          null
        )
      ), M = s.props ? u : vu(u);
    }
  } catch (E) {
    Wo.length = 0, Hn(E, e, 1), I = S(bt);
  }
  let x = I;
  if (M && C !== !1) {
    const E = Object.keys(M), { shapeFlag: H } = x;
    E.length && H & 7 && (i && E.some(Na) && (M = pu(
      M,
      i
    )), x = zs(x, M, !1, !0));
  }
  return o.dirs && (x = zs(x, null, !1, !0), x.dirs = x.dirs ? x.dirs.concat(o.dirs) : o.dirs), o.transition && so(x, o.transition), I = x, Rn(b), I;
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
            const _ = qt(w);
            l[_] = Ea(
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
      l && Ze(l, v = qt(d)) ? !i || !i.includes(v) ? o[v] = m : (u || (u = {}))[v] = m : Yn(e.emitsOptions, d) || (!(d in n) || m !== n[d]) && (n[d] = m, c = !0);
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
      const g = qt(i[v]);
      Sl(g) && (c[g] = st);
    }
  else if (i)
    for (const v in i) {
      const g = qt(v);
      if (Sl(g)) {
        const w = i[v], p = c[g] = Be(w) || Ge(w) ? { type: w } : pt({}, w), _ = p.type;
        let C = !1, b = !0;
        if (Be(_))
          for (let I = 0; I < _.length; ++I) {
            const M = _[I], x = Ge(M) && M.name;
            if (x === "Boolean") {
              C = !0;
              break;
            } else x === "String" && (b = !1);
          }
        else
          C = Ge(_) && _.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = C, p[
          1
          /* shouldCastTrue */
        ] = b, (C || Ze(p, "default")) && u.push(g);
      }
    }
  const m = [c, u];
  return et(e) && n.set(e, m), m;
}
function Sl(e) {
  return e[0] !== "$" && !Uo(e);
}
const Xa = (e) => e === "_" || e === "_ctx" || e === "$stable", Za = (e) => Be(e) ? e.map(ps) : [ps(e)], ku = (e, s, o) => {
  if (s._n)
    return s;
  const n = h((...l) => Za(s(...l)), o);
  return n._c = !1, n;
}, nr = (e, s, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (Xa(l)) continue;
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
    (o || !Xa(n)) && (e[n] = s[n]);
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
      !Xa(u) && c[u] == null && delete l[u];
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
    insertStaticContent: _
  } = e, C = (O, R, N, V = null, ee = null, re = null, we = void 0, $e = null, ae = !!R.dynamicChildren) => {
    if (O === R)
      return;
    O && !Xs(O, R) && (V = Pe(O), pe(O, ee, re, !0), O = null), R.patchFlag === -2 && (ae = !1, R.dynamicChildren = null);
    const { type: me, ref: Le, shapeFlag: Ee } = R;
    switch (me) {
      case Jn:
        b(O, R, N, V);
        break;
      case bt:
        I(O, R, N, V);
        break;
      case ca:
        O == null && M(R, N, V, we);
        break;
      case j:
        Z(
          O,
          R,
          N,
          V,
          ee,
          re,
          we,
          $e,
          ae
        );
        break;
      default:
        Ee & 1 ? H(
          O,
          R,
          N,
          V,
          ee,
          re,
          we,
          $e,
          ae
        ) : Ee & 6 ? z(
          O,
          R,
          N,
          V,
          ee,
          re,
          we,
          $e,
          ae
        ) : (Ee & 64 || Ee & 128) && me.process(
          O,
          R,
          N,
          V,
          ee,
          re,
          we,
          $e,
          ae,
          De
        );
    }
    Le != null && ee ? Bo(Le, O && O.ref, re, R || O, !R) : Le == null && O && O.ref != null && Bo(O.ref, null, re, O, !0);
  }, b = (O, R, N, V) => {
    if (O == null)
      n(
        R.el = u(R.children),
        N,
        V
      );
    else {
      const ee = R.el = O.el;
      R.children !== O.children && m(ee, R.children);
    }
  }, I = (O, R, N, V) => {
    O == null ? n(
      R.el = d(R.children || ""),
      N,
      V
    ) : R.el = O.el;
  }, M = (O, R, N, V) => {
    [O.el, O.anchor] = _(
      O.children,
      R,
      N,
      V,
      O.el,
      O.anchor
    );
  }, x = ({ el: O, anchor: R }, N, V) => {
    let ee;
    for (; O && O !== R; )
      ee = w(O), n(O, N, V), O = ee;
    n(R, N, V);
  }, E = ({ el: O, anchor: R }) => {
    let N;
    for (; O && O !== R; )
      N = w(O), l(O), O = N;
    l(R);
  }, H = (O, R, N, V, ee, re, we, $e, ae) => {
    if (R.type === "svg" ? we = "svg" : R.type === "math" && (we = "mathml"), O == null)
      K(
        R,
        N,
        V,
        ee,
        re,
        we,
        $e,
        ae
      );
    else {
      const me = O.el && O.el._isVueCE ? O.el : null;
      try {
        me && me._beginPatch(), P(
          O,
          R,
          ee,
          re,
          we,
          $e,
          ae
        );
      } finally {
        me && me._endPatch();
      }
    }
  }, K = (O, R, N, V, ee, re, we, $e) => {
    let ae, me;
    const { props: Le, shapeFlag: Ee, transition: ne, dirs: Q } = O;
    if (ae = O.el = c(
      O.type,
      re,
      Le && Le.is,
      Le
    ), Ee & 8 ? v(ae, O.children) : Ee & 16 && T(
      O.children,
      ae,
      null,
      V,
      ee,
      ra(O, re),
      we,
      $e
    ), Q && Ks(O, null, V, "created"), B(ae, O, O.scopeId, we, V), Le) {
      for (const Ce in Le)
        Ce !== "value" && !Uo(Ce) && i(ae, Ce, null, Le[Ce], re, V);
      "value" in Le && i(ae, "value", null, Le.value, re), (me = Le.onVnodeBeforeMount) && us(me, V, O);
    }
    Q && Ks(O, null, V, "beforeMount");
    const Oe = Su(ee, ne);
    Oe && ne.beforeEnter(ae), n(ae, R, N), ((me = Le && Le.onVnodeMounted) || Oe || Q) && St(() => {
      me && us(me, V, O), Oe && ne.enter(ae), Q && Ks(O, null, V, "mounted");
    }, ee);
  }, B = (O, R, N, V, ee) => {
    if (N && p(O, N), V)
      for (let re = 0; re < V.length; re++)
        p(O, V[re]);
    if (ee) {
      let re = ee.subTree;
      if (R === re || rr(re.type) && (re.ssContent === R || re.ssFallback === R)) {
        const we = ee.vnode;
        B(
          O,
          we,
          we.scopeId,
          we.slotScopeIds,
          ee.parent
        );
      }
    }
  }, T = (O, R, N, V, ee, re, we, $e, ae = 0) => {
    for (let me = ae; me < O.length; me++) {
      const Le = O[me] = $e ? Us(O[me]) : ps(O[me]);
      C(
        null,
        Le,
        R,
        N,
        V,
        ee,
        re,
        we,
        $e
      );
    }
  }, P = (O, R, N, V, ee, re, we) => {
    const $e = R.el = O.el;
    let { patchFlag: ae, dynamicChildren: me, dirs: Le } = R;
    ae |= O.patchFlag & 16;
    const Ee = O.props || st, ne = R.props || st;
    let Q;
    if (N && qs(N, !1), (Q = ne.onVnodeBeforeUpdate) && us(Q, N, R, O), Le && Ks(R, O, N, "beforeUpdate"), N && qs(N, !0), (Ee.innerHTML && ne.innerHTML == null || Ee.textContent && ne.textContent == null) && v($e, ""), me ? L(
      O.dynamicChildren,
      me,
      $e,
      N,
      V,
      ra(R, ee),
      re
    ) : we || X(
      O,
      R,
      $e,
      null,
      N,
      V,
      ra(R, ee),
      re,
      !1
    ), ae > 0) {
      if (ae & 16)
        le($e, Ee, ne, N, ee);
      else if (ae & 2 && Ee.class !== ne.class && i($e, "class", null, ne.class, ee), ae & 4 && i($e, "style", Ee.style, ne.style, ee), ae & 8) {
        const Oe = R.dynamicProps;
        for (let Ce = 0; Ce < Oe.length; Ce++) {
          const be = Oe[Ce], G = Ee[be], F = ne[be];
          (F !== G || be === "value") && i($e, be, G, F, ee, N);
        }
      }
      ae & 1 && O.children !== R.children && v($e, R.children);
    } else !we && me == null && le($e, Ee, ne, N, ee);
    ((Q = ne.onVnodeUpdated) || Le) && St(() => {
      Q && us(Q, N, R, O), Le && Ks(R, O, N, "updated");
    }, V);
  }, L = (O, R, N, V, ee, re, we) => {
    for (let $e = 0; $e < R.length; $e++) {
      const ae = O[$e], me = R[$e], Le = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ae.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ae.type === j || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Xs(ae, me) || // - In the case of a component, it could contain anything.
        ae.shapeFlag & 198) ? g(ae.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          N
        )
      );
      C(
        ae,
        me,
        Le,
        null,
        V,
        ee,
        re,
        we,
        !0
      );
    }
  }, le = (O, R, N, V, ee) => {
    if (R !== N) {
      if (R !== st)
        for (const re in R)
          !Uo(re) && !(re in N) && i(
            O,
            re,
            R[re],
            null,
            ee,
            V
          );
      for (const re in N) {
        if (Uo(re)) continue;
        const we = N[re], $e = R[re];
        we !== $e && re !== "value" && i(O, re, $e, we, ee, V);
      }
      "value" in N && i(O, "value", R.value, N.value, ee);
    }
  }, Z = (O, R, N, V, ee, re, we, $e, ae) => {
    const me = R.el = O ? O.el : u(""), Le = R.anchor = O ? O.anchor : u("");
    let { patchFlag: Ee, dynamicChildren: ne, slotScopeIds: Q } = R;
    Q && ($e = $e ? $e.concat(Q) : Q), O == null ? (n(me, N, V), n(Le, N, V), T(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      R.children || [],
      N,
      Le,
      ee,
      re,
      we,
      $e,
      ae
    )) : Ee > 0 && Ee & 64 && ne && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    O.dynamicChildren ? (L(
      O.dynamicChildren,
      ne,
      N,
      ee,
      re,
      we,
      $e
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (R.key != null || ee && R === ee.subTree) && el(
      O,
      R,
      !0
      /* shallow */
    )) : X(
      O,
      R,
      N,
      Le,
      ee,
      re,
      we,
      $e,
      ae
    );
  }, z = (O, R, N, V, ee, re, we, $e, ae) => {
    R.slotScopeIds = $e, O == null ? R.shapeFlag & 512 ? ee.ctx.activate(
      R,
      N,
      V,
      we,
      ae
    ) : W(
      R,
      N,
      V,
      ee,
      re,
      we,
      ae
    ) : Y(O, R, ae);
  }, W = (O, R, N, V, ee, re, we) => {
    const $e = O.component = Ou(
      O,
      V,
      ee
    );
    if (Kn(O) && ($e.ctx.renderer = De), Au($e, !1, we), $e.asyncDep) {
      if (ee && ee.registerDep($e, A, we), !O.el) {
        const ae = $e.subTree = S(bt);
        I(null, ae, R, N), O.placeholder = ae.el;
      }
    } else
      A(
        $e,
        O,
        R,
        N,
        ee,
        re,
        we
      );
  }, Y = (O, R, N) => {
    const V = R.component = O.component;
    if (gu(O, R, N))
      if (V.asyncDep && !V.asyncResolved) {
        se(V, R, N);
        return;
      } else
        V.next = R, V.update();
    else
      R.el = O.el, V.vnode = R;
  }, A = (O, R, N, V, ee, re, we) => {
    const $e = () => {
      if (O.isMounted) {
        let { next: Ee, bu: ne, u: Q, parent: Oe, vnode: Ce } = O;
        {
          const Ve = ir(O);
          if (Ve) {
            Ee && (Ee.el = Ce.el, se(O, Ee, we)), Ve.asyncDep.then(() => {
              O.isUnmounted || $e();
            });
            return;
          }
        }
        let be = Ee, G;
        qs(O, !1), Ee ? (Ee.el = Ce.el, se(O, Ee, we)) : Ee = Ce, ne && kn(ne), (G = Ee.props && Ee.props.onVnodeBeforeUpdate) && us(G, Oe, Ee, Ce), qs(O, !0);
        const F = Cl(O), de = O.subTree;
        O.subTree = F, C(
          de,
          F,
          // parent may have changed if it's in a teleport
          g(de.el),
          // anchor may have changed if it's in a fragment
          Pe(de),
          O,
          ee,
          re
        ), Ee.el = F.el, be === null && hu(O, F.el), Q && St(Q, ee), (G = Ee.props && Ee.props.onVnodeUpdated) && St(
          () => us(G, Oe, Ee, Ce),
          ee
        );
      } else {
        let Ee;
        const { el: ne, props: Q } = R, { bm: Oe, m: Ce, parent: be, root: G, type: F } = O, de = po(R);
        qs(O, !1), Oe && kn(Oe), !de && (Ee = Q && Q.onVnodeBeforeMount) && us(Ee, be, R), qs(O, !0);
        {
          G.ce && // @ts-expect-error _def is private
          G.ce._def.shadowRoot !== !1 && G.ce._injectChildStyle(F);
          const Ve = O.subTree = Cl(O);
          C(
            null,
            Ve,
            N,
            V,
            O,
            ee,
            re
          ), R.el = Ve.el;
        }
        if (Ce && St(Ce, ee), !de && (Ee = Q && Q.onVnodeMounted)) {
          const Ve = R;
          St(
            () => us(Ee, be, Ve),
            ee
          );
        }
        (R.shapeFlag & 256 || be && po(be.vnode) && be.vnode.shapeFlag & 256) && O.a && St(O.a, ee), O.isMounted = !0, R = N = V = null;
      }
    };
    O.scope.on();
    const ae = O.effect = new fi($e);
    O.scope.off();
    const me = O.update = ae.run.bind(ae), Le = O.job = ae.runIfDirty.bind(ae);
    Le.i = O, Le.id = O.uid, ae.scheduler = () => Ya(Le), qs(O, !0), me();
  }, se = (O, R, N) => {
    R.component = O;
    const V = O.vnode.props;
    O.vnode = R, O.next = null, wu(O, R.props, V, N), $u(O, R.children, N), Ss(), ml(O), Is();
  }, X = (O, R, N, V, ee, re, we, $e, ae = !1) => {
    const me = O && O.children, Le = O ? O.shapeFlag : 0, Ee = R.children, { patchFlag: ne, shapeFlag: Q } = R;
    if (ne > 0) {
      if (ne & 128) {
        _e(
          me,
          Ee,
          N,
          V,
          ee,
          re,
          we,
          $e,
          ae
        );
        return;
      } else if (ne & 256) {
        ye(
          me,
          Ee,
          N,
          V,
          ee,
          re,
          we,
          $e,
          ae
        );
        return;
      }
    }
    Q & 8 ? (Le & 16 && Te(me, ee, re), Ee !== me && v(N, Ee)) : Le & 16 ? Q & 16 ? _e(
      me,
      Ee,
      N,
      V,
      ee,
      re,
      we,
      $e,
      ae
    ) : Te(me, ee, re, !0) : (Le & 8 && v(N, ""), Q & 16 && T(
      Ee,
      N,
      V,
      ee,
      re,
      we,
      $e,
      ae
    ));
  }, ye = (O, R, N, V, ee, re, we, $e, ae) => {
    O = O || fo, R = R || fo;
    const me = O.length, Le = R.length, Ee = Math.min(me, Le);
    let ne;
    for (ne = 0; ne < Ee; ne++) {
      const Q = R[ne] = ae ? Us(R[ne]) : ps(R[ne]);
      C(
        O[ne],
        Q,
        N,
        null,
        ee,
        re,
        we,
        $e,
        ae
      );
    }
    me > Le ? Te(
      O,
      ee,
      re,
      !0,
      !1,
      Ee
    ) : T(
      R,
      N,
      V,
      ee,
      re,
      we,
      $e,
      ae,
      Ee
    );
  }, _e = (O, R, N, V, ee, re, we, $e, ae) => {
    let me = 0;
    const Le = R.length;
    let Ee = O.length - 1, ne = Le - 1;
    for (; me <= Ee && me <= ne; ) {
      const Q = O[me], Oe = R[me] = ae ? Us(R[me]) : ps(R[me]);
      if (Xs(Q, Oe))
        C(
          Q,
          Oe,
          N,
          null,
          ee,
          re,
          we,
          $e,
          ae
        );
      else
        break;
      me++;
    }
    for (; me <= Ee && me <= ne; ) {
      const Q = O[Ee], Oe = R[ne] = ae ? Us(R[ne]) : ps(R[ne]);
      if (Xs(Q, Oe))
        C(
          Q,
          Oe,
          N,
          null,
          ee,
          re,
          we,
          $e,
          ae
        );
      else
        break;
      Ee--, ne--;
    }
    if (me > Ee) {
      if (me <= ne) {
        const Q = ne + 1, Oe = Q < Le ? R[Q].el : V;
        for (; me <= ne; )
          C(
            null,
            R[me] = ae ? Us(R[me]) : ps(R[me]),
            N,
            Oe,
            ee,
            re,
            we,
            $e,
            ae
          ), me++;
      }
    } else if (me > ne)
      for (; me <= Ee; )
        pe(O[me], ee, re, !0), me++;
    else {
      const Q = me, Oe = me, Ce = /* @__PURE__ */ new Map();
      for (me = Oe; me <= ne; me++) {
        const at = R[me] = ae ? Us(R[me]) : ps(R[me]);
        at.key != null && Ce.set(at.key, me);
      }
      let be, G = 0;
      const F = ne - Oe + 1;
      let de = !1, Ve = 0;
      const Xe = new Array(F);
      for (me = 0; me < F; me++) Xe[me] = 0;
      for (me = Q; me <= Ee; me++) {
        const at = O[me];
        if (G >= F) {
          pe(at, ee, re, !0);
          continue;
        }
        let ut;
        if (at.key != null)
          ut = Ce.get(at.key);
        else
          for (be = Oe; be <= ne; be++)
            if (Xe[be - Oe] === 0 && Xs(at, R[be])) {
              ut = be;
              break;
            }
        ut === void 0 ? pe(at, ee, re, !0) : (Xe[ut - Oe] = me + 1, ut >= Ve ? Ve = ut : de = !0, C(
          at,
          R[ut],
          N,
          null,
          ee,
          re,
          we,
          $e,
          ae
        ), G++);
      }
      const vt = de ? Iu(Xe) : fo;
      for (be = vt.length - 1, me = F - 1; me >= 0; me--) {
        const at = Oe + me, ut = R[at], Mt = R[at + 1], Bt = at + 1 < Le ? (
          // #13559, fallback to el placeholder for unresolved async component
          Mt.el || Mt.placeholder
        ) : V;
        Xe[me] === 0 ? C(
          null,
          ut,
          N,
          Bt,
          ee,
          re,
          we,
          $e,
          ae
        ) : de && (be < 0 || me !== vt[be] ? ce(ut, N, Bt, 2) : be--);
      }
    }
  }, ce = (O, R, N, V, ee = null) => {
    const { el: re, type: we, transition: $e, children: ae, shapeFlag: me } = O;
    if (me & 6) {
      ce(O.component.subTree, R, N, V);
      return;
    }
    if (me & 128) {
      O.suspense.move(R, N, V);
      return;
    }
    if (me & 64) {
      we.move(O, R, N, De);
      return;
    }
    if (we === j) {
      n(re, R, N);
      for (let Ee = 0; Ee < ae.length; Ee++)
        ce(ae[Ee], R, N, V);
      n(O.anchor, R, N);
      return;
    }
    if (we === ca) {
      x(O, R, N);
      return;
    }
    if (V !== 2 && me & 1 && $e)
      if (V === 0)
        $e.beforeEnter(re), n(re, R, N), St(() => $e.enter(re), ee);
      else {
        const { leave: Ee, delayLeave: ne, afterLeave: Q } = $e, Oe = () => {
          O.ctx.isUnmounted ? l(re) : n(re, R, N);
        }, Ce = () => {
          re._isLeaving && re[bs](
            !0
            /* cancelled */
          ), Ee(re, () => {
            Oe(), Q && Q();
          });
        };
        ne ? ne(re, Oe, Ce) : Ce();
      }
    else
      n(re, R, N);
  }, pe = (O, R, N, V = !1, ee = !1) => {
    const {
      type: re,
      props: we,
      ref: $e,
      children: ae,
      dynamicChildren: me,
      shapeFlag: Le,
      patchFlag: Ee,
      dirs: ne,
      cacheIndex: Q
    } = O;
    if (Ee === -2 && (ee = !1), $e != null && (Ss(), Bo($e, null, N, O, !0), Is()), Q != null && (R.renderCache[Q] = void 0), Le & 256) {
      R.ctx.deactivate(O);
      return;
    }
    const Oe = Le & 1 && ne, Ce = !po(O);
    let be;
    if (Ce && (be = we && we.onVnodeBeforeUnmount) && us(be, R, O), Le & 6)
      ze(O.component, N, V);
    else {
      if (Le & 128) {
        O.suspense.unmount(N, V);
        return;
      }
      Oe && Ks(O, null, R, "beforeUnmount"), Le & 64 ? O.type.remove(
        O,
        R,
        N,
        De,
        V
      ) : me && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !me.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (re !== j || Ee > 0 && Ee & 64) ? Te(
        me,
        R,
        N,
        !1,
        !0
      ) : (re === j && Ee & 384 || !ee && Le & 16) && Te(ae, R, N), V && Se(O);
    }
    (Ce && (be = we && we.onVnodeUnmounted) || Oe) && St(() => {
      be && us(be, R, O), Oe && Ks(O, null, R, "unmounted");
    }, N);
  }, Se = (O) => {
    const { type: R, el: N, anchor: V, transition: ee } = O;
    if (R === j) {
      Fe(N, V);
      return;
    }
    if (R === ca) {
      E(O);
      return;
    }
    const re = () => {
      l(N), ee && !ee.persisted && ee.afterLeave && ee.afterLeave();
    };
    if (O.shapeFlag & 1 && ee && !ee.persisted) {
      const { leave: we, delayLeave: $e } = ee, ae = () => we(N, re);
      $e ? $e(O.el, re, ae) : ae();
    } else
      re();
  }, Fe = (O, R) => {
    let N;
    for (; O !== R; )
      N = w(O), l(O), O = N;
    l(R);
  }, ze = (O, R, N) => {
    const { bum: V, scope: ee, job: re, subTree: we, um: $e, m: ae, a: me } = O;
    Il(ae), Il(me), V && kn(V), ee.stop(), re && (re.flags |= 8, pe(we, O, R, N)), $e && St($e, R), St(() => {
      O.isUnmounted = !0;
    }, R);
  }, Te = (O, R, N, V = !1, ee = !1, re = 0) => {
    for (let we = re; we < O.length; we++)
      pe(O[we], R, N, V, ee);
  }, Pe = (O) => {
    if (O.shapeFlag & 6)
      return Pe(O.component.subTree);
    if (O.shapeFlag & 128)
      return O.suspense.next();
    const R = w(O.anchor || O.el), N = R && R[Mi];
    return N ? w(N) : R;
  };
  let ke = !1;
  const he = (O, R, N) => {
    O == null ? R._vnode && pe(R._vnode, null, null, !0) : C(
      R._vnode || null,
      O,
      R,
      null,
      null,
      null,
      N
    ), R._vnode = O, ke || (ke = !0, ml(), Ti(), ke = !1);
  }, De = {
    p: C,
    um: pe,
    m: ce,
    r: Se,
    mt: W,
    mc: T,
    pc: X,
    pbc: L,
    n: Pe,
    o: e
  };
  return {
    render: he,
    hydrate: void 0,
    createApp: lu(he)
  };
}
function ra({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function qs({ effect: e, job: s }, o) {
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
      u.patchFlag !== -1 && (u.el = c.el), u.type === bt && !u.el && (u.el = c.el);
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
const j = Symbol.for("v-fgt"), Jn = Symbol.for("v-txt"), bt = Symbol.for("v-cmt"), ca = Symbol.for("v-stc"), Wo = [];
let Nt = null;
function a(e = !1) {
  Wo.push(Nt = e ? null : []);
}
function Tu() {
  Wo.pop(), Nt = Wo[Wo.length - 1] || null;
}
let Qo = 1;
function Ln(e, s = !1) {
  Qo += e, e < 0 && Nt && s && (Nt.hasOnce = !0);
}
function cr(e) {
  return e.dynamicChildren = Qo > 0 ? Nt || fo : null, Tu(), Qo > 0 && Nt && Nt.push(e), e;
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
    S(
      e,
      s,
      o,
      n,
      l,
      !0
    )
  );
}
function Xo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Xs(e, s) {
  return e.type === s.type && e.key === s.key;
}
const ur = ({ key: e }) => e ?? null, Cn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? ct(e) || Ct(e) || Ge(e) ? { i: wt, r: e, k: s, f: !!o } : e : null);
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
    ctx: wt
  };
  return u ? (tl(d, o), i & 128 && e.normalize(d)) : o && (d.shapeFlag |= ct(o) ? 8 : 16), Qo > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Nt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Nt.push(d), d;
}
const S = Pu;
function Pu(e, s = null, o = null, n = 0, l = null, i = !1) {
  if ((!e || e === ji) && (e = bt), Xo(e)) {
    const u = zs(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && tl(u, o), Qo > 0 && !i && Nt && (u.shapeFlag & 6 ? Nt[Nt.indexOf(e)] = u : Nt.push(u)), u.patchFlag = -2, u;
  }
  if (Bu(e) && (e = e.__vccOpts), s) {
    s = Ru(s);
    let { class: u, style: d } = s;
    u && !ct(u) && (s.class = Ie(u)), et(d) && (qa(d) && !Be(d) && (d = pt({}, d)), s.style = Ft(d));
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
  return d && n && so(
    v,
    d.clone(v)
  ), v;
}
function $(e = " ", s = 0) {
  return S(Jn, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (a(), D(bt, null, e)) : S(bt, null, e);
}
function ps(e) {
  return e == null || typeof e == "boolean" ? S(bt) : Be(e) ? S(
    j,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Xo(e) ? Us(e) : S(Jn, null, String(e));
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
      !l && !tr(s) ? s._ctx = wt : l === 3 && wt && (wt.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else Ge(s) ? (s = { default: s, _ctx: wt }, o = 32) : (s = String(s), n & 64 ? (o = 16, s = [$(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function Mu(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        s.class !== n.class && (s.class = Ie([s.class, n.class]));
      else if (l === "style")
        s.style = Ft([s.style, n.style]);
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
    emitsOptions: Xi(n, l),
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
let $t = null;
const sl = () => $t || wt;
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
    (o) => $t = o
  ), Ta = s(
    "__VUE_SSR_SETTERS__",
    (o) => Zo = o
  );
}
const on = (e) => {
  const s = $t;
  return On(e), e.scope.on(), () => {
    e.scope.off(), On(s);
  };
}, El = () => {
  $t && $t.scope.off(), On(null);
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
    return kt(e, "get", ""), e[s];
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
function Qn(e) {
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
const U = (e, s) => Dc(e, s, Zo);
function nn(e, s, o) {
  try {
    Ln(-1);
    const n = arguments.length;
    return n === 2 ? et(s) && !Be(s) ? Xo(s) ? S(e, null, [s]) : S(e, s) : S(e, null, s) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && Xo(o) && (o = [o]), S(e, s, o));
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
), Ys = (e, s = []) => {
  Be(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, Ml = (e) => e ? Be(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function gr(e) {
  const s = {};
  for (const Z in e)
    Z in vr || (s[Z] = e[Z]);
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
  } = e, _ = qu(l), C = _ && _[0], b = _ && _[1], {
    onBeforeEnter: I,
    onEnter: M,
    onEnterCancelled: x,
    onLeave: E,
    onLeaveCancelled: H,
    onBeforeAppear: K = I,
    onAppear: B = M,
    onAppearCancelled: T = x
  } = s, P = (Z, z, W, Y) => {
    Z._enterCancelled = Y, Ls(Z, z ? v : u), Ls(Z, z ? m : c), W && W();
  }, L = (Z, z) => {
    Z._isLeaving = !1, Ls(Z, g), Ls(Z, p), Ls(Z, w), z && z();
  }, le = (Z) => (z, W) => {
    const Y = Z ? B : M, A = () => P(z, Z, W);
    Ys(Y, [z, A]), Dl(() => {
      Ls(z, Z ? d : i), fs(z, Z ? v : u), Ml(Y) || Ll(z, n, C, A);
    });
  };
  return pt(s, {
    onBeforeEnter(Z) {
      Ys(I, [Z]), fs(Z, i), fs(Z, c);
    },
    onBeforeAppear(Z) {
      Ys(K, [Z]), fs(Z, d), fs(Z, m);
    },
    onEnter: le(!1),
    onAppear: le(!0),
    onLeave(Z, z) {
      Z._isLeaving = !0;
      const W = () => L(Z, z);
      fs(Z, g), Z._enterCancelled ? (fs(Z, w), Ra(Z)) : (Ra(Z), fs(Z, w)), Dl(() => {
        Z._isLeaving && (Ls(Z, g), fs(Z, p), Ml(E) || Ll(Z, n, b, W));
      }), Ys(E, [Z, W]);
    },
    onEnterCancelled(Z) {
      P(Z, !1, void 0, !0), Ys(x, [Z]);
    },
    onAppearCancelled(Z) {
      P(Z, !0, void 0, !0), Ys(T, [Z]);
    },
    onLeaveCancelled(Z) {
      L(Z), Ys(H, [Z]);
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
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${Ds}Delay`), i = n(`${Ds}Duration`), c = Ol(l, i), u = n(`${Po}Delay`), d = n(`${Po}Duration`), m = Ol(u, d);
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
const Ul = Symbol("_vod"), Qu = Symbol("_vsh"), Xu = Symbol(""), Zu = /(?:^|;)\s*display\s*:/;
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
      const c = n[Xu];
      c && (o += ";" + c), n.cssText = o, i = Zu.test(o);
    }
  } else s && e.removeAttribute("style");
  Ul in e && (e[Ul] = i ? n.display : "", e[Qu] && (n.display = "none"));
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
  let n = qt(s);
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
  s === "class" ? Ju(e, n, c) : s === "style" ? ed(e, o, n) : Fn(s) ? Na(s) || od(e, s, o, n, i) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : ud(e, s, n, c)) ? (Vl(e, s, n), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Bl(e, s, n, c, i, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !ct(n)) ? Vl(e, qt(s), n, i, s) : (s === "true-value" ? e._trueValue = n : s === "false-value" && (e._falseValue = n), Bl(e, s, n, c));
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
          v.el && v.el instanceof Element && (l.push(v), so(
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
        v.key != null && so(
          v,
          Jo(v, u, n, o)
        );
      }
      return S(d, null, i);
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
const Ht = Symbol("_assign");
function ql(e, s, o) {
  return s && (e = e.trim()), o && (e = Wn(e)), e;
}
const zt = {
  created(e, { modifiers: { lazy: s, trim: o, number: n } }, l) {
    e[Ht] = Fs(l);
    const i = n || l.props && l.props.type === "number";
    xs(e, s ? "change" : "input", (c) => {
      c.target.composing || e[Ht](ql(e.value, o, i));
    }), (o || i) && xs(e, "change", () => {
      e.value = ql(e.value, o, i);
    }), s || (xs(e, "compositionstart", yd), xs(e, "compositionend", Kl), xs(e, "change", Kl));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: n, trim: l, number: i } }, c) {
    if (e[Ht] = Fs(c), e.composing) return;
    const u = (i || e.type === "number") && !/^0\d/.test(e.value) ? Wn(e.value) : e.value, d = s ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (n && s === o || l && e.value.trim() === d) || (e.value = d));
  }
}, en = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[Ht] = Fs(o), xs(e, "change", () => {
      const n = e._modelValue, l = _o(e), i = e.checked, c = e[Ht];
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
    e[Ht] = Fs(o), Yl(e, s, o);
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
    l = to(s, _r(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Zt = {
  created(e, { value: s }, o) {
    e.checked = to(s, o.props.value), e[Ht] = Fs(o), xs(e, "change", () => {
      e[Ht](_o(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, n) {
    e[Ht] = Fs(n), s !== o && (e.checked = to(s, n.props.value));
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
      e[Ht](
        e.multiple ? l ? new Set(i) : i : i[0]
      ), e._assigning = !0, yt(() => {
        e._assigning = !1;
      });
    }), e[Ht] = Fs(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    Jl(e, s);
  },
  beforeUpdate(e, s, o) {
    e[Ht] = Fs(o);
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
      else if (to(_o(c), s)) {
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
}, Kt = (e, s) => {
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
let Ql;
function Cd() {
  return Ql || (Ql = Cu($d));
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
}, Md = /* @__PURE__ */ fe({
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
}), ve = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of s)
    o[n] = l;
  return o;
}, Pt = /* @__PURE__ */ ve(Md, [["__scopeId", "data-v-21565df9"]]), Dd = {
  key: 0,
  class: "panel-title-prefix"
}, Ld = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Od = /* @__PURE__ */ fe({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (a(), D(Qa(`h${e.level}`), {
      class: Ie(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (a(), r("span", Dd, f(e.prefix), 1)) : (a(), r("span", Ld)),
        Ke(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ad = /* @__PURE__ */ ve(Od, [["__scopeId", "data-v-c3875efc"]]), Ud = ["title"], Nd = ["width", "height"], zd = /* @__PURE__ */ fe({
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
}), kr = /* @__PURE__ */ ve(zd, [["__scopeId", "data-v-6fc7f16d"]]), Fd = { class: "header-left" }, Bd = {
  key: 0,
  class: "header-actions"
}, Vd = /* @__PURE__ */ fe({
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
      t("div", Fd, [
        S(Ad, { "show-prefix": e.showPrefix }, {
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
}), Rt = /* @__PURE__ */ ve(Vd, [["__scopeId", "data-v-55a62cd6"]]), Wd = {
  key: 0,
  class: "section-title-count"
}, Gd = {
  key: 1,
  class: "section-title-icon"
}, jd = /* @__PURE__ */ fe({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), D(Qa(`h${e.level}`), {
      class: Ie(["section-title", { clickable: e.clickable }]),
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
}), Ut = /* @__PURE__ */ ve(jd, [["__scopeId", "data-v-559361eb"]]), Hd = { class: "status-grid" }, Kd = { class: "status-grid__columns" }, qd = { class: "status-grid__column" }, Yd = { class: "status-grid__title" }, Jd = { class: "status-grid__column status-grid__column--right" }, Qd = { class: "status-grid__title" }, Xd = {
  key: 0,
  class: "status-grid__footer"
}, Zd = /* @__PURE__ */ fe({
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
          t("h4", Qd, f(e.rightTitle), 1),
          Ke(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (a(), r("div", Xd, [
        Ke(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), ef = /* @__PURE__ */ ve(Zd, [["__scopeId", "data-v-73b7ba3f"]]), tf = {
  key: 0,
  class: "status-item__icon"
}, sf = {
  key: 1,
  class: "status-item__count"
}, of = { class: "status-item__label" }, nf = /* @__PURE__ */ fe({
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
      class: Ie(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), r("span", tf, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), r("span", sf, f(e.count), 1)) : y("", !0),
      t("span", of, f(e.label), 1)
    ], 2));
  }
}), ds = /* @__PURE__ */ ve(nf, [["__scopeId", "data-v-6f929183"]]), af = { class: "issue-card__header" }, lf = { class: "issue-card__icon" }, rf = { class: "issue-card__title" }, cf = {
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
}, mf = /* @__PURE__ */ fe({
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
      class: Ie(["issue-card", o.value])
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
        (a(!0), r(j, null, ge(e.items, (i, c) => (a(), r("div", {
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
}), Qt = /* @__PURE__ */ ve(mf, [["__scopeId", "data-v-df6aa348"]]), vf = ["type", "disabled"], pf = {
  key: 0,
  class: "spinner"
}, gf = /* @__PURE__ */ fe({
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
      e.loading ? (a(), r("span", pf)) : y("", !0),
      e.loading ? y("", !0) : Ke(s.$slots, "default", { key: 1 }, void 0)
    ], 10, vf));
  }
}), ue = /* @__PURE__ */ ve(gf, [["__scopeId", "data-v-772abe47"]]), hf = { class: "empty-state" }, yf = {
  key: 0,
  class: "empty-icon"
}, wf = { class: "empty-message" }, _f = /* @__PURE__ */ fe({
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
      e.actionLabel ? (a(), D(ue, {
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
}), ns = /* @__PURE__ */ ve(_f, [["__scopeId", "data-v-4466284f"]]), kf = /* @__PURE__ */ fe({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (a(), r("span", {
      class: Ie(["detail-label"]),
      style: Ft({ minWidth: e.minWidth })
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), Sn = /* @__PURE__ */ ve(kf, [["__scopeId", "data-v-75e9eeb8"]]), bf = /* @__PURE__ */ fe({
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
      Ke(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Ma = /* @__PURE__ */ ve(bf, [["__scopeId", "data-v-2f186e4c"]]), $f = { class: "detail-row" }, Cf = /* @__PURE__ */ fe({
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
      S(Sn, { "min-width": e.labelMinWidth }, {
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
}), dt = /* @__PURE__ */ ve(Cf, [["__scopeId", "data-v-ef15664a"]]), xf = { class: "modal-header" }, Sf = { class: "modal-body" }, If = { class: "status-section" }, Ef = {
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
}, qf = { class: "workflow-group-header" }, Yf = { class: "workflow-group-title" }, Jf = { class: "workflow-list" }, Qf = { class: "workflow-name" }, Xf = {
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
}, qm = { class: "modal-actions" }, Ym = /* @__PURE__ */ fe({
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
    }), gt(() => s.show, (w, p) => {
      console.log("StatusDetailModal show prop changed from", p, "to", w);
    }, { immediate: !0 });
    const n = U(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (C) => C.status === "broken" && C.sync_state === "synced"
      )) || [];
    }), l = U(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (C) => C.status === "broken" && C.sync_state !== "synced"
      )) || [];
    }), i = U(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.synced) == null ? void 0 : _.filter((C) => {
        var I, M, x;
        const b = (x = (M = (I = s.status) == null ? void 0 : I.workflows) == null ? void 0 : M.analyzed) == null ? void 0 : x.find((E) => E.name === C);
        return !b || b.status !== "broken";
      })) || [];
    }), c = U(() => {
      var w, p, _, C, b;
      return (w = s.status) != null && w.workflows ? (((p = s.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((_ = s.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((C = s.status.workflows.deleted) == null ? void 0 : C.length) ?? 0) > 0 || (((b = s.status.workflows.synced) == null ? void 0 : b.length) ?? 0) > 0 : !1;
    }), u = U(() => {
      var p, _, C;
      const w = (p = s.status) == null ? void 0 : p.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((C = w.nodes_removed) == null ? void 0 : C.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = U(() => {
      var w, p, _, C, b, I;
      return !c.value && !u.value && ((p = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : p.is_synced) && (((_ = s.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((I = (b = (C = s.status) == null ? void 0 : C.comparison) == null ? void 0 : b.disabled_nodes) == null ? void 0 : I.length) ?? 0) === 0;
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
      var _, C, b, I, M, x, E, H, K, B, T, P, L, le, Z, z, W, Y, A, se, X, ye;
      return a(), D(_t, { to: "body" }, [
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
                S(Ut, { level: "4" }, {
                  default: h(() => [...p[9] || (p[9] = [
                    $("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                S(dt, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (a(), r("div", Ef, [
                t("div", Tf, [
                  S(Ut, { level: "4" }, {
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
                    (a(!0), r(j, null, ge(n.value, (_e) => (a(), r("div", {
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
                    (a(!0), r(j, null, ge(l.value, (_e) => (a(), r("div", {
                      key: _e.name,
                      class: "workflow-item"
                    }, [
                      t("span", Ff, f(_e.name), 1),
                      t("span", Bf, f(_e.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (C = (_ = e.status.workflows) == null ? void 0 : _.new) != null && C.length ? (a(), r("div", Vf, [
                  t("div", Wf, [
                    p[13] || (p[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", Gf, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", jf, [
                    (a(!0), r(j, null, ge(e.status.workflows.new, (_e) => (a(), r("div", {
                      key: _e,
                      class: "workflow-item"
                    }, [
                      t("span", Hf, f(_e), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = (b = e.status.workflows) == null ? void 0 : b.modified) != null && I.length ? (a(), r("div", Kf, [
                  t("div", qf, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", Yf, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", Jf, [
                    (a(!0), r(j, null, ge(e.status.workflows.modified, (_e) => (a(), r("div", {
                      key: _e,
                      class: "workflow-item"
                    }, [
                      t("span", Qf, f(_e), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = (M = e.status.workflows) == null ? void 0 : M.deleted) != null && x.length ? (a(), r("div", Xf, [
                  t("div", Zf, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", em, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", tm, [
                    (a(!0), r(j, null, ge(e.status.workflows.deleted, (_e) => (a(), r("div", {
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
                    (a(!0), r(j, null, ge(i.value, (_e) => (a(), r("div", {
                      key: _e,
                      class: "workflow-item"
                    }, [
                      t("span", im, f(_e), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (a(), r("div", rm, [
                S(Ut, { level: "4" }, {
                  default: h(() => [...p[17] || (p[17] = [
                    $("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (H = (E = e.status.git_changes) == null ? void 0 : E.nodes_added) != null && H.length ? (a(), r("div", cm, [
                  t("div", um, [
                    p[18] || (p[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", dm, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", fm, [
                    (a(!0), r(j, null, ge(e.status.git_changes.nodes_added, (_e) => (a(), r("div", {
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
                    (a(!0), r(j, null, ge(e.status.git_changes.nodes_removed, (_e) => (a(), r("div", {
                      key: v(_e),
                      class: "change-item"
                    }, [
                      t("span", wm, f(v(_e)), 1),
                      g(_e) ? (a(), r("span", _m, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (T = e.status.git_changes) != null && T.workflow_changes ? (a(), r("div", km, [
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
                  S(Ut, { level: "4" }, {
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
                (Z = (le = e.status.comparison) == null ? void 0 : le.missing_nodes) != null && Z.length ? (a(), r("div", Em, [
                  S(dt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", Tm, [
                    (a(!0), r(j, null, ge(e.status.comparison.missing_nodes.slice(0, 10), (_e) => (a(), r("div", {
                      key: _e,
                      class: "drift-list-item"
                    }, " - " + f(_e), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), r("div", Pm, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (W = (z = e.status.comparison) == null ? void 0 : z.extra_nodes) != null && W.length ? (a(), r("div", Rm, [
                  S(dt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", Mm, [
                    (a(!0), r(j, null, ge(e.status.comparison.extra_nodes.slice(0, 10), (_e) => (a(), r("div", {
                      key: _e,
                      class: "drift-list-item"
                    }, " - " + f(_e), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), r("div", Dm, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (A = (Y = e.status.comparison) == null ? void 0 : Y.version_mismatches) != null && A.length ? (a(), r("div", Lm, [
                  S(dt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", Om, [
                    (a(!0), r(j, null, ge(e.status.comparison.version_mismatches.slice(0, 10), (_e) => (a(), r("div", {
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
                ((se = e.status.comparison) == null ? void 0 : se.packages_in_sync) === !1 ? (a(), r("div", zm, [
                  S(dt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", Fm, [
                  S(ue, {
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
              (ye = (X = e.status.comparison) == null ? void 0 : X.disabled_nodes) != null && ye.length ? (a(), r("div", Bm, [
                S(Ut, { level: "4" }, {
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
                  (a(!0), r(j, null, ge(e.status.comparison.disabled_nodes.slice(0, 10), (_e) => (a(), r("div", {
                    key: _e,
                    class: "drift-list-item"
                  }, " • " + f(_e), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), r("div", Gm, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), r("div", jm, [
                S(Ut, { level: "4" }, {
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
              S(ue, {
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
}), Jm = /* @__PURE__ */ ve(Ym, [["__scopeId", "data-v-e2b37122"]]), Qm = { class: "health-section-header" }, Xm = { class: "suggestions-content" }, Zm = { class: "suggestions-text" }, ev = { style: { "margin-top": "var(--cg-space-3)" } }, tv = {
  key: 1,
  class: "no-issues-text"
}, sv = /* @__PURE__ */ fe({
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
    const C = U(() => {
      const Y = n.status.workflows.analyzed || [], A = Y.filter(
        (se) => se.unresolved_models_count > 0 || se.ambiguous_models_count > 0
      );
      return A.length === 0 && n.status.missing_models_count > 0 ? Y.filter((se) => se.sync_state === "synced") : A;
    });
    function b() {
      const Y = C.value;
      Y.length !== 0 && (v.value = !0, m("repair-missing-models", Y.map((A) => A.name)));
    }
    function I() {
      v.value = !1;
    }
    s({ resetRepairingState: I, resetRepairingEnvironmentState: p, closeDetailModal: _ });
    const M = U(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), x = U(() => n.status.has_changes), E = U(() => {
      const Y = n.status.git_changes;
      return Y.nodes_added.length > 0 || Y.nodes_removed.length > 0 || Y.workflow_changes;
    }), H = U(() => n.status.has_changes || M.value), K = U(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), B = U(() => n.status.git_changes.has_other_changes), T = U(() => {
      var Y;
      return ((Y = n.status.workflows.analyzed) == null ? void 0 : Y.filter((A) => A.status === "broken")) || [];
    }), P = U(() => {
      var Y;
      return ((Y = n.status.workflows.analyzed) == null ? void 0 : Y.filter(
        (A) => A.has_path_sync_issues && !A.has_issues
      )) || [];
    }), L = U(() => T.value.length > 0), le = U(() => L.value || P.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), Z = U(() => {
      const Y = [];
      return n.status.workflows.new.length > 0 && Y.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && Y.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && Y.push(`${n.status.workflows.deleted.length} deleted`), Y.length > 0 ? `${Y.join(", ")} workflow${Y.length === 1 && !Y[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), z = U(() => {
      var se, X;
      const Y = [], A = n.status.comparison;
      return (se = A.missing_nodes) != null && se.length && Y.push(`${A.missing_nodes.length} missing node${A.missing_nodes.length === 1 ? "" : "s"}`), (X = A.extra_nodes) != null && X.length && Y.push(`${A.extra_nodes.length} untracked node${A.extra_nodes.length === 1 ? "" : "s"}`), Y.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Y.join(" and ")}.`;
    }), W = U(() => {
      var se, X;
      const Y = [], A = n.status.comparison;
      return (se = A.extra_nodes) != null && se.length && (A.extra_nodes.slice(0, 3).forEach((ye) => {
        Y.push(`Untracked: ${ye}`);
      }), A.extra_nodes.length > 3 && Y.push(`...and ${A.extra_nodes.length - 3} more untracked`)), (X = A.missing_nodes) != null && X.length && (A.missing_nodes.slice(0, 3).forEach((ye) => {
        Y.push(`Missing: ${ye}`);
      }), A.missing_nodes.length > 3 && Y.push(`...and ${A.missing_nodes.length - 3} more missing`)), Y;
    });
    return (Y, A) => (a(), r(j, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, { title: "STATUS" })
        ]),
        content: h(() => [
          n.setupState === "no_workspace" ? (a(), D(Qt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: h(() => [
              S(ue, {
                variant: "primary",
                size: "sm",
                onClick: A[0] || (A[0] = (se) => Y.$emit("start-setup"))
              }, {
                default: h(() => [...A[13] || (A[13] = [
                  $(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (a(), D(Qt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: h(() => [
              S(ue, {
                variant: "primary",
                size: "sm",
                onClick: A[1] || (A[1] = (se) => Y.$emit("view-environments"))
              }, {
                default: h(() => [...A[14] || (A[14] = [
                  $(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (a(), D(Qt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: h(() => [
              S(ue, {
                variant: "primary",
                size: "sm",
                onClick: A[2] || (A[2] = (se) => Y.$emit("create-environment"))
              }, {
                default: h(() => [...A[15] || (A[15] = [
                  $(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: A[4] || (A[4] = (se) => i.value = !0),
            onMouseleave: A[5] || (A[5] = (se) => i.value = !1)
          }, [
            t("div", Qm, [
              S(Ut, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...A[16] || (A[16] = [
                  $(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              S(Ku, { name: "fade" }, {
                default: h(() => [
                  i.value ? (a(), D(ue, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: h(() => [...A[17] || (A[17] = [
                      $(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            S(ef, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, oo({
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
                S(ds, {
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
                x.value && !E.value && !B.value ? (a(), D(ds, {
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
                  A[19] || (A[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", Xm, [
                    t("span", Zm, f(Z.value), 1),
                    S(ue, {
                      variant: "primary",
                      size: "sm",
                      onClick: A[3] || (A[3] = (se) => Y.$emit("commit-changes"))
                    }, {
                      default: h(() => [...A[18] || (A[18] = [
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
          e.status.is_detached_head ? (a(), D(Qt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              S(ue, {
                variant: "primary",
                size: "sm",
                onClick: A[6] || (A[6] = (se) => Y.$emit("create-branch"))
              }, {
                default: h(() => [...A[20] || (A[20] = [
                  $(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", ev, [
            S(Ut, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...A[21] || (A[21] = [
                $(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            le.value ? (a(), r(j, { key: 0 }, [
              T.value.length > 0 ? (a(), D(Qt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${T.value.length} workflow${T.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: T.value.map((se) => `${se.name} — ${se.issue_summary}`)
              }, {
                actions: h(() => [
                  S(ue, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[7] || (A[7] = (se) => Y.$emit("view-workflows"))
                  }, {
                    default: h(() => [...A[22] || (A[22] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              P.value.length > 0 ? (a(), D(Qt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${P.value.length} workflow${P.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: P.value.map((se) => `${se.name} — ${se.models_needing_path_sync_count} model path${se.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  S(ue, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[8] || (A[8] = (se) => Y.$emit("view-workflows"))
                  }, {
                    default: h(() => [...A[23] || (A[23] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !L.value ? (a(), D(Qt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  S(ue, {
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
                  S(ue, {
                    variant: "secondary",
                    size: "sm",
                    onClick: A[9] || (A[9] = (se) => Y.$emit("view-workflows"))
                  }, {
                    default: h(() => [...A[24] || (A[24] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (a(), D(Qt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: z.value,
                items: W.value
              }, {
                actions: h(() => [
                  S(ue, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: h(() => [...A[25] || (A[25] = [
                      $(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  S(ue, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[10] || (A[10] = (se) => Y.$emit("view-nodes"))
                  }, {
                    default: h(() => [...A[26] || (A[26] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (a(), D(Qt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: h(() => [
                  S(ue, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[11] || (A[11] = (se) => Y.$emit("view-nodes"))
                  }, {
                    default: h(() => [...A[27] || (A[27] = [
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
      S(Jm, {
        show: l.value,
        status: e.status,
        "is-repairing": g.value,
        onClose: A[12] || (A[12] = (se) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), ov = /* @__PURE__ */ ve(sv, [["__scopeId", "data-v-55fcd77f"]]), nv = ["type", "value", "placeholder", "disabled"], av = /* @__PURE__ */ fe({
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
        d[0] || (d[0] = Kt((m) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Kt((m) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (m) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (m) => u.$emit("blur"))
    }, null, 42, nv));
  }
}), Un = /* @__PURE__ */ ve(av, [["__scopeId", "data-v-0380d08f"]]), lv = { class: "branch-create-form" }, iv = { class: "form-actions" }, rv = /* @__PURE__ */ fe({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, n = k(""), l = U(() => {
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
      S(Un, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => n.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: i,
        onEscape: c
      }, null, 8, ["modelValue"]),
      t("div", iv, [
        S(ue, {
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
        S(ue, {
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
}), cv = /* @__PURE__ */ ve(rv, [["__scopeId", "data-v-7c500394"]]), uv = { class: "branch-list-item__indicator" }, dv = { class: "branch-list-item__name" }, fv = {
  key: 0,
  class: "branch-list-item__actions"
}, mv = {
  key: 0,
  class: "branch-list-item__current-label"
}, vv = /* @__PURE__ */ fe({
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
      t("span", uv, f(e.isCurrent ? "●" : "○"), 1),
      t("span", dv, f(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (a(), r("div", fv, [
        Ke(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), r("span", mv, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), pv = /* @__PURE__ */ ve(vv, [["__scopeId", "data-v-c6581a24"]]), gv = {
  key: 2,
  class: "branch-list"
}, hv = /* @__PURE__ */ fe({
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
    return (c, u) => (a(), D(Pt, null, {
      header: h(() => [
        S(Rt, { title: "BRANCHES" }, {
          actions: h(() => [
            n.value ? y("", !0) : (a(), D(ue, {
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
          (a(!0), r(j, null, ge(e.branches, (d) => (a(), D(pv, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: h(() => [
              d.is_current ? y("", !0) : (a(), D(ue, {
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
              d.is_current ? y("", !0) : (a(), D(ue, {
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
}), yv = /* @__PURE__ */ ve(hv, [["__scopeId", "data-v-86784ddd"]]), wv = { class: "commit-list" }, _v = /* @__PURE__ */ fe({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (a(), r("div", wv, [
      Ke(s.$slots, "default", {}, void 0)
    ]));
  }
}), kv = /* @__PURE__ */ ve(_v, [["__scopeId", "data-v-8c5ee761"]]), bv = { class: "commit-hash" }, $v = /* @__PURE__ */ fe({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = U(() => s.hash.slice(0, s.length));
    return (n, l) => (a(), r("span", bv, f(o.value), 1));
  }
}), br = /* @__PURE__ */ ve($v, [["__scopeId", "data-v-7c333cc6"]]), Cv = { class: "commit-message" }, xv = { class: "commit-date" }, Sv = /* @__PURE__ */ fe({
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
      S(br, { hash: e.hash }, null, 8, ["hash"]),
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
}), Iv = /* @__PURE__ */ ve(Sv, [["__scopeId", "data-v-dd7c621b"]]), Ev = /* @__PURE__ */ fe({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    const s = e, o = U(() => `HISTORY (${s.currentRef || "detached"})`);
    return (n, l) => (a(), D(Pt, null, {
      header: h(() => [
        S(Rt, { title: o.value }, null, 8, ["title"])
      ]),
      content: h(() => [
        e.commits.length === 0 ? (a(), D(ns, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), D(kv, { key: 1 }, {
          default: h(() => [
            (a(!0), r(j, null, ge(e.commits, (i) => (a(), D(Iv, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (c) => n.$emit("select", i)
            }, {
              actions: h(() => [
                S(ue, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (c) => n.$emit("checkout", i),
                  title: "Checkout this commit"
                }, {
                  default: h(() => [...l[0] || (l[0] = [
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
}), Tv = /* @__PURE__ */ ve(Ev, [["__scopeId", "data-v-62a5d9da"]]), BP = Vs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const VP = [
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
], WP = {
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
], GP = [
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
  const e = k(!1), s = k(null);
  async function o(J, oe) {
    var Ot;
    if (!((Ot = window.app) != null && Ot.api))
      throw new Error("ComfyUI API not available");
    const Ne = await window.app.api.fetchApi(J, oe);
    if (!Ne.ok) {
      const cs = await Ne.json().catch(() => ({}));
      throw new Error(cs.error || cs.message || `Request failed: ${Ne.status}`);
    }
    const rt = await Ne.text();
    if (rt)
      return JSON.parse(rt);
  }
  async function n(J = !1) {
    return o(J ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(J, oe = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: J, allow_issues: oe })
    });
  }
  async function i(J = 10, oe = 0) {
    return o(`/v2/comfygit/log?limit=${J}&offset=${oe}`);
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
  async function g(J) {
    return o(`/v2/comfygit/commit/${J}`);
  }
  async function w(J, oe = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: J, force: oe })
    });
  }
  async function p(J, oe = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, start_point: oe })
    });
  }
  async function _(J, oe = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: J, force: oe })
    });
  }
  async function C(J, oe = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(J)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: oe })
    });
  }
  async function b() {
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
  async function I(J, oe) {
    const Ne = { target_env: J };
    return oe && (Ne.workspace_path = oe), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ne)
    });
  }
  async function M() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function x(J) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function E() {
    return o("/v2/workspace/environments/create_status");
  }
  async function H(J = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${J}`);
  }
  async function K(J) {
    return o(`/v2/workspace/environments/${J}`, {
      method: "DELETE"
    });
  }
  async function B(J = !1) {
    try {
      return o(J ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const oe = await n(J), Ne = [];
      return oe.workflows.new.forEach((rt) => {
        Ne.push({ name: rt, status: "new", missing_nodes: 0, missing_models: 0, path: rt });
      }), oe.workflows.modified.forEach((rt) => {
        Ne.push({ name: rt, status: "modified", missing_nodes: 0, missing_models: 0, path: rt });
      }), oe.workflows.synced.forEach((rt) => {
        Ne.push({ name: rt, status: "synced", missing_nodes: 0, missing_models: 0, path: rt });
      }), Ne;
    }
  }
  async function T(J) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/details`);
  }
  async function P(J) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/resolve`, {
      method: "POST"
    });
  }
  async function L(J, oe, Ne) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: oe, install_models: Ne })
    });
  }
  async function le(J, oe, Ne) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: oe, importance: Ne })
    });
  }
  async function Z() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function z() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function W(J) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(J)}`);
  }
  async function Y(J) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function A(J, oe) {
    return o(`/v2/workspace/models/${J}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: oe })
    });
  }
  async function se(J, oe) {
    return o(`/v2/workspace/models/${J}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: oe })
    });
  }
  async function X(J) {
    return o(`/v2/workspace/models/${J}`, {
      method: "DELETE"
    });
  }
  async function ye(J) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function _e() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function ce() {
    return o("/v2/workspace/models/directory");
  }
  async function pe(J) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function Se(J) {
    const oe = new URLSearchParams({ url: J });
    return o(`/v2/workspace/huggingface/repo-info?${oe}`);
  }
  async function Fe() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function ze(J, oe = 10) {
    const Ne = new URLSearchParams({ query: J, limit: String(oe) });
    return o(`/v2/workspace/huggingface/search?${Ne}`);
  }
  async function Te(J) {
    try {
      const oe = J ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(J)}` : "/v2/comfygit/config";
      return o(oe);
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
  async function Pe(J, oe) {
    const Ne = oe ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(oe)}` : "/v2/comfygit/config";
    return o(Ne, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function ke(J, oe) {
    try {
      const Ne = new URLSearchParams();
      return J && Ne.append("level", J), oe && Ne.append("lines", oe.toString()), o(`/v2/comfygit/debug/logs?${Ne}`);
    } catch {
      return [];
    }
  }
  async function he(J, oe) {
    try {
      const Ne = new URLSearchParams();
      return J && Ne.append("level", J), oe && Ne.append("lines", oe.toString()), o(`/v2/workspace/debug/logs?${Ne}`);
    } catch {
      return [];
    }
  }
  async function De() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function Re() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function O(J, oe) {
    try {
      const Ne = new URLSearchParams();
      return J && Ne.append("level", J), oe && Ne.append("lines", oe.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Ne}`);
    } catch {
      return [];
    }
  }
  async function R() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function N(J) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function V() {
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
  async function ee(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}/track-dev`, {
      method: "POST"
    });
  }
  async function re(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}/install`, {
      method: "POST"
    });
  }
  async function we(J) {
    var Ot, cs, Io, Eo;
    const oe = $r(), Ne = ((cs = (Ot = window.app) == null ? void 0 : Ot.api) == null ? void 0 : cs.clientId) ?? ((Eo = (Io = window.app) == null ? void 0 : Io.api) == null ? void 0 : Eo.initialClientId) ?? "comfygit-panel", rt = {
      kind: "install",
      params: {
        id: J.id,
        version: J.version || J.selected_version || "latest",
        selected_version: J.selected_version || "latest",
        repository: J.repository || "",
        mode: J.mode || "remote",
        channel: J.channel || "default"
      },
      ui_id: oe,
      client_id: Ne
    };
    return await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rt)
    }), console.log("[ComfyGit] Task queued with ui_id:", oe, "for package:", J.id), o("/v2/manager/queue/start").catch((qr) => {
      console.error("[ComfyGit] Queue start failed:", qr);
    }), { ui_id: oe };
  }
  async function $e(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}/update`, {
      method: "POST"
    });
  }
  async function ae(J) {
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
  async function Le(J, oe) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, url: oe })
    });
  }
  async function Ee(J) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function ne(J, oe, Ne) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: oe, push_url: Ne })
    });
  }
  async function Q(J, oe) {
    const Ne = {};
    return oe && (Ne["X-Git-Auth-Token"] = oe), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/fetch`, {
      method: "POST",
      headers: Ne
    });
  }
  async function Oe(J) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/status`);
    } catch {
      return null;
    }
  }
  async function Ce(J = "skip", oe = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: J,
        remove_extra_nodes: oe
      })
    });
  }
  async function be(J, oe) {
    const Ne = oe ? `/v2/comfygit/remotes/${encodeURIComponent(J)}/pull-preview?branch=${encodeURIComponent(oe)}` : `/v2/comfygit/remotes/${encodeURIComponent(J)}/pull-preview`;
    return o(Ne);
  }
  async function G(J, oe = {}) {
    const Ne = { "Content-Type": "application/json" };
    return oe.authToken && (Ne["X-Git-Auth-Token"] = oe.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/pull`, {
      method: "POST",
      headers: Ne,
      body: JSON.stringify({
        model_strategy: oe.modelStrategy || "skip",
        force: oe.force || !1,
        resolutions: oe.resolutions
      })
    });
  }
  async function F(J, oe) {
    const Ne = oe ? `/v2/comfygit/remotes/${encodeURIComponent(J)}/push-preview?branch=${encodeURIComponent(oe)}` : `/v2/comfygit/remotes/${encodeURIComponent(J)}/push-preview`;
    return o(Ne);
  }
  async function de(J, oe = {}) {
    const Ne = { "Content-Type": "application/json" };
    return oe.authToken && (Ne["X-Git-Auth-Token"] = oe.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/push`, {
      method: "POST",
      headers: Ne,
      body: JSON.stringify({ force: oe.force || !1 })
    });
  }
  async function Ve(J, oe) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: oe })
    });
  }
  async function Xe(J) {
    const oe = {
      success: 0,
      failed: []
    };
    for (const Ne of J)
      try {
        await P(Ne), oe.success++;
      } catch (rt) {
        oe.failed.push({
          name: Ne,
          error: rt instanceof Error ? rt.message : "Unknown error"
        });
      }
    return oe;
  }
  async function vt(J) {
    var rt;
    const oe = new FormData();
    if (oe.append("file", J), !((rt = window.app) != null && rt.api))
      throw new Error("ComfyUI API not available");
    const Ne = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: oe
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ne.ok) {
      const Ot = await Ne.json().catch(() => ({}));
      throw new Error(Ot.error || `Preview failed: ${Ne.status}`);
    }
    return Ne.json();
  }
  async function at(J) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(J)}`
    );
  }
  async function ut(J, oe, Ne, rt) {
    var Io;
    const Ot = new FormData();
    if (Ot.append("file", J), Ot.append("name", oe), Ot.append("model_strategy", Ne), Ot.append("torch_backend", rt), !((Io = window.app) != null && Io.api))
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
  async function Bt(J) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: J })
    });
  }
  async function Yt(J, oe, Ne, rt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: J,
        name: oe,
        model_strategy: Ne,
        torch_backend: rt
      })
    });
  }
  async function Gs() {
    return o("/v2/setup/status");
  }
  async function Ms(J) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function no() {
    return o("/v2/setup/initialize_status");
  }
  async function Co(J) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function xo() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function So() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function xe(J, oe) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: J, save_key: oe })
    });
  }
  async function te() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function He(J) {
    const oe = J ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(J)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(oe);
  }
  async function ht(J) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function Jt() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function ys(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function ws(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}/stop`, {
      method: "POST"
    });
  }
  async function ls(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}/start`, {
      method: "POST"
    });
  }
  async function Ue(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}/status`);
  }
  async function is(J) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: J })
    });
  }
  async function ie(J = !1) {
    return o(J ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function q() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Ae() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function je(J) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function ot(J) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function mt(J) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function Dt() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function rs(J) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/info`);
  }
  async function js(J) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances`);
  }
  async function Hs(J, oe) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(oe)
    });
  }
  async function ln(J, oe) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent(oe)}/start`, {
      method: "POST"
    });
  }
  async function rn(J, oe) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent(oe)}/stop`, {
      method: "POST"
    });
  }
  async function cn(J, oe) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent(oe)}`, {
      method: "DELETE"
    });
  }
  async function un(J) {
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
    getCommitDetail: g,
    checkout: w,
    createBranch: p,
    switchBranch: _,
    deleteBranch: C,
    // Environment Management
    getEnvironments: b,
    switchEnvironment: I,
    getSwitchProgress: M,
    createEnvironment: x,
    getCreateProgress: E,
    getComfyUIReleases: H,
    deleteEnvironment: K,
    // Workflow Management
    getWorkflows: B,
    getWorkflowDetails: T,
    resolveWorkflow: P,
    installWorkflowDeps: L,
    setModelImportance: le,
    // Model Management
    getEnvironmentModels: Z,
    getWorkspaceModels: z,
    getModelDetails: W,
    openFileLocation: Y,
    addModelSource: A,
    removeModelSource: se,
    deleteModel: X,
    downloadModel: ye,
    scanWorkspaceModels: _e,
    getModelsDirectory: ce,
    setModelsDirectory: pe,
    getHuggingFaceRepoInfo: Se,
    getModelsSubdirectories: Fe,
    searchHuggingFaceRepos: ze,
    // Settings
    getConfig: Te,
    updateConfig: Pe,
    // Debug/Logs
    getEnvironmentLogs: ke,
    getWorkspaceLogs: he,
    getEnvironmentLogPath: De,
    getWorkspaceLogPath: Re,
    getOrchestratorLogs: O,
    getOrchestratorLogPath: R,
    openFile: N,
    // Node Management
    getNodes: V,
    trackNodeAsDev: ee,
    installNode: re,
    queueNodeInstall: we,
    updateNode: $e,
    uninstallNode: ae,
    // Git Remotes
    getRemotes: me,
    addRemote: Le,
    removeRemote: Ee,
    updateRemoteUrl: ne,
    fetchRemote: Q,
    getRemoteSyncStatus: Oe,
    // Push/Pull
    getPullPreview: be,
    pullFromRemote: G,
    getPushPreview: F,
    pushToRemote: de,
    validateMerge: Ve,
    // Environment Sync
    syncEnvironmentManually: Ce,
    // Workflow Repair
    repairWorkflowModels: Xe,
    // Import Operations
    previewTarballImport: vt,
    previewGitImport: Bt,
    validateEnvironmentName: at,
    executeImport: ut,
    executeGitImport: Yt,
    getImportProgress: Mt,
    // First-Time Setup
    getSetupStatus: Gs,
    initializeWorkspace: Ms,
    getInitializeProgress: no,
    validatePath: Co,
    // Deploy Operations
    getDeploySummary: xo,
    getDataCenters: So,
    testRunPodConnection: xe,
    getNetworkVolumes: te,
    getRunPodGpuTypes: He,
    deployToRunPod: ht,
    getRunPodPods: Jt,
    terminateRunPodPod: ys,
    stopRunPodPod: ws,
    startRunPodPod: ls,
    getDeploymentStatus: Ue,
    exportDeployPackage: is,
    getStoredRunPodKey: ie,
    clearRunPodKey: q,
    // Custom Worker Operations
    getCustomWorkers: Ae,
    addCustomWorker: je,
    removeCustomWorker: ot,
    testWorkerConnection: mt,
    scanForWorkers: Dt,
    getWorkerSystemInfo: rs,
    getWorkerInstances: js,
    deployToWorker: Hs,
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
}, Nv = /* @__PURE__ */ fe({
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
    return Qe(() => {
      document.addEventListener("keydown", i), document.body.style.overflow = "hidden";
    }), Ws(() => {
      document.removeEventListener("keydown", i), document.body.style.overflow = "";
    }), (c, u) => (a(), D(_t, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Ie(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
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
}), ft = /* @__PURE__ */ ve(Nv, [["__scopeId", "data-v-8dab1081"]]), zv = ["type", "disabled"], Fv = {
  key: 0,
  class: "spinner"
}, Bv = /* @__PURE__ */ fe({
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
      e.loading ? (a(), r("span", Fv)) : y("", !0),
      Ke(s.$slots, "default", {}, void 0)
    ], 10, zv));
  }
}), Me = /* @__PURE__ */ ve(Bv, [["__scopeId", "data-v-f3452606"]]), Vv = {
  key: 0,
  class: "base-title-count"
}, Wv = /* @__PURE__ */ fe({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (a(), D(Qa(`h${e.level}`), {
      class: Ie(["base-title", e.variant])
    }, {
      default: h(() => [
        Ke(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), r("span", Vv, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Go = /* @__PURE__ */ ve(Wv, [["__scopeId", "data-v-5a01561d"]]), Gv = ["value", "disabled"], jv = {
  key: 0,
  value: "",
  disabled: ""
}, Hv = ["value"], Kv = {
  key: 0,
  class: "base-select-error"
}, qv = /* @__PURE__ */ fe({
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
        e.placeholder ? (a(), r("option", jv, f(e.placeholder), 1)) : y("", !0),
        (a(!0), r(j, null, ge(e.options, (i) => (a(), r("option", {
          key: s(i),
          value: s(i)
        }, f(o(i)), 9, Hv))), 128))
      ], 42, Gv),
      e.error ? (a(), r("span", Kv, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Yv = /* @__PURE__ */ ve(qv, [["__scopeId", "data-v-4996bfe0"]]), Jv = { class: "popover-header" }, Qv = { class: "popover-title" }, Xv = { class: "popover-content" }, Zv = {
  key: 0,
  class: "popover-actions"
}, ep = /* @__PURE__ */ fe({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (a(), D(_t, { to: "body" }, [
      e.show ? (a(), r("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Ft({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = it(() => {
          }, ["stop"]))
        }, [
          t("div", Jv, [
            t("h4", Qv, f(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", Xv, [
            Ke(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (a(), r("div", Zv, [
            Ke(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), as = /* @__PURE__ */ ve(ep, [["__scopeId", "data-v-42815ace"]]), tp = { class: "detail-section" }, sp = {
  key: 0,
  class: "empty-message"
}, op = { class: "model-header" }, np = { class: "model-name" }, ap = { class: "model-details" }, lp = { class: "model-row" }, ip = { class: "model-row" }, rp = { class: "label" }, cp = {
  key: 0,
  class: "model-row model-row-nodes"
}, up = { class: "node-list" }, dp = ["onClick"], fp = {
  key: 1,
  class: "model-row"
}, mp = { class: "value" }, vp = {
  key: 2,
  class: "model-row"
}, pp = { class: "value error" }, gp = {
  key: 0,
  class: "model-actions"
}, hp = { class: "detail-section" }, yp = {
  key: 0,
  class: "empty-message"
}, wp = { class: "node-name" }, _p = {
  key: 0,
  class: "node-version"
}, kp = /* @__PURE__ */ fe({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getWorkflowDetails: l, setModelImportance: i, openFileLocation: c } = tt(), u = k(null), d = k(!1), m = k(null), v = k(!1), g = k({}), w = k(!1), p = k(/* @__PURE__ */ new Set()), _ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function C(T) {
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
    function b(T) {
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
    function I(T) {
      if (!T.loaded_by || T.loaded_by.length === 0) return [];
      const P = T.hash || T.filename;
      return p.value.has(P) ? T.loaded_by : T.loaded_by.slice(0, 3);
    }
    function M(T) {
      return p.value.has(T);
    }
    function x(T) {
      p.value.has(T) ? p.value.delete(T) : p.value.add(T), p.value = new Set(p.value);
    }
    async function E() {
      d.value = !0, m.value = null;
      try {
        u.value = await l(o.workflowName);
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function H(T, P) {
      g.value[T] = P, v.value = !0;
    }
    async function K(T) {
      try {
        await c(T);
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
        for (const [T, P] of Object.entries(g.value))
          await i(o.workflowName, T, P);
        n("refresh"), n("close");
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return Qe(E), (T, P) => (a(), r(j, null, [
      S(ft, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: d.value,
        error: m.value || void 0,
        onClose: P[4] || (P[4] = (L) => n("close"))
      }, {
        body: h(() => [
          u.value ? (a(), r(j, { key: 0 }, [
            t("section", tp, [
              S(Go, { variant: "section" }, {
                default: h(() => [
                  $("MODELS USED (" + f(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (a(), r("div", sp, " No models used in this workflow ")) : y("", !0),
              (a(!0), r(j, null, ge(u.value.models, (L) => {
                var le;
                return a(), r("div", {
                  key: L.hash || L.filename,
                  class: "model-card"
                }, [
                  t("div", op, [
                    P[6] || (P[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", np, f(L.filename), 1)
                  ]),
                  t("div", ap, [
                    t("div", lp, [
                      P[7] || (P[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Ie(["value", C(L.status)])
                      }, f(b(L.status)), 3)
                    ]),
                    t("div", ip, [
                      t("span", rp, [
                        P[8] || (P[8] = $(" Importance: ", -1)),
                        S(kr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: P[0] || (P[0] = (Z) => w.value = !0)
                        })
                      ]),
                      S(Yv, {
                        "model-value": g.value[L.filename] || L.importance,
                        options: _,
                        "onUpdate:modelValue": (Z) => H(L.filename, Z)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    L.loaded_by && L.loaded_by.length > 0 ? (a(), r("div", cp, [
                      P[9] || (P[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", up, [
                        (a(!0), r(j, null, ge(I(L), (Z, z) => (a(), r("div", {
                          key: `${Z.node_id}-${z}`,
                          class: "node-reference"
                        }, f(Z.node_type) + " (Node #" + f(Z.node_id) + ") ", 1))), 128)),
                        L.loaded_by.length > 3 ? (a(), r("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (Z) => x(L.hash || L.filename)
                        }, f(M(L.hash || L.filename) ? "▼ Show less" : `▶ View all (${L.loaded_by.length})`), 9, dp)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    L.size_mb ? (a(), r("div", fp, [
                      P[10] || (P[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", mp, f(L.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    L.has_category_mismatch ? (a(), r("div", vp, [
                      P[13] || (P[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", pp, [
                        P[11] || (P[11] = $(" In ", -1)),
                        t("code", null, f(L.actual_category) + "/", 1),
                        P[12] || (P[12] = $(" but loader needs ", -1)),
                        t("code", null, f((le = L.expected_categories) == null ? void 0 : le[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  L.status !== "available" ? (a(), r("div", gp, [
                    L.status === "downloadable" ? (a(), D(Me, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: P[1] || (P[1] = (Z) => n("resolve"))
                    }, {
                      default: h(() => [...P[14] || (P[14] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    })) : L.status === "category_mismatch" && L.file_path ? (a(), D(Me, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (Z) => K(L.file_path)
                    }, {
                      default: h(() => [...P[15] || (P[15] = [
                        $(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : L.status !== "path_mismatch" ? (a(), D(Me, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: P[2] || (P[2] = (Z) => n("resolve"))
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
            t("section", hp, [
              S(Go, { variant: "section" }, {
                default: h(() => [
                  $("NODES USED (" + f(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (a(), r("div", yp, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), r(j, null, ge(u.value.nodes, (L) => (a(), r("div", {
                key: L.name,
                class: "node-item"
              }, [
                t("span", {
                  class: Ie(["node-status", L.status === "installed" ? "installed" : "missing"])
                }, f(L.status === "installed" ? "✓" : "✕"), 3),
                t("span", wp, f(L.name), 1),
                L.version ? (a(), r("span", _p, "v" + f(L.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          S(Me, {
            variant: "secondary",
            onClick: P[3] || (P[3] = (L) => n("close"))
          }, {
            default: h(() => [...P[17] || (P[17] = [
              $(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (a(), D(Me, {
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
      S(as, {
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
}), bp = /* @__PURE__ */ ve(kp, [["__scopeId", "data-v-668728e6"]]), Ye = Vs({
  items: [],
  status: "idle"
});
let vs = null;
function Cr() {
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
    await $p(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    Ye.status = "idle", uo();
  }
}
async function $p(e) {
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
async function Cp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (Ye.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const n = {
        id: Cr(),
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
    for (const I of b) {
      if (Ye.items.some(
        (E) => E.url === I.url && E.targetPath === I.targetPath && ["queued", "downloading", "paused", "completed"].includes(E.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${I.filename}`);
        continue;
      }
      const x = {
        id: Cr(),
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
      Ye.items.push(x);
    }
    Ye.status === "idle" && uo();
  }
  async function s(b) {
    const I = ma(b);
    if (I) {
      if (I.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(I.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        vs && (vs.close(), vs = null), I.status = "failed", I.error = "Cancelled by user", Ye.status = "idle", uo();
      } else if (I.status === "queued") {
        const M = Ye.items.findIndex((x) => x.id === b);
        M >= 0 && Ye.items.splice(M, 1);
      }
    }
  }
  function o(b) {
    const I = ma(b);
    !I || I.status !== "failed" || (I.status = "queued", I.error = void 0, I.progress = 0, I.downloaded = 0, Ye.status === "idle" && uo());
  }
  function n(b) {
    const I = ma(b);
    !I || I.status !== "paused" || (I.status = "queued", Ye.status === "idle" && uo());
  }
  function l() {
    const b = Ye.items.filter((I) => I.status === "paused");
    for (const I of b)
      I.status = "queued";
    Ye.status === "idle" && uo();
  }
  function i(b) {
    const I = Ye.items.findIndex((M) => M.id === b);
    I >= 0 && ["completed", "failed", "paused"].includes(Ye.items[I].status) && Ye.items.splice(I, 1);
  }
  function c() {
    Ye.items = Ye.items.filter((b) => b.status !== "completed");
  }
  function u() {
    Ye.items = Ye.items.filter((b) => b.status !== "failed");
  }
  const d = U(
    () => Ye.items.find((b) => b.status === "downloading")
  ), m = U(
    () => Ye.items.filter((b) => b.status === "queued")
  ), v = U(
    () => Ye.items.filter((b) => b.status === "completed")
  ), g = U(
    () => Ye.items.filter((b) => b.status === "failed")
  ), w = U(
    () => Ye.items.filter((b) => b.status === "paused")
  ), p = U(() => Ye.items.length > 0), _ = U(
    () => Ye.items.filter((b) => b.status === "queued" || b.status === "downloading").length
  ), C = U(
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
    loadPendingDownloads: Cp
  };
}
function xr() {
  const e = k(null), s = k(null), o = k([]), n = k([]), l = k(!1), i = k(null);
  async function c(M, x) {
    var H;
    if (!((H = window.app) != null && H.api))
      throw new Error("ComfyUI API not available");
    const E = await window.app.api.fetchApi(M, x);
    if (!E.ok) {
      const K = await E.json().catch(() => ({})), B = K.error || K.message || `Request failed: ${E.status}`;
      throw new Error(B);
    }
    return E.json();
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
      const E = x instanceof Error ? x.message : "Unknown error occurred";
      throw i.value = E, x;
    } finally {
      l.value = !1;
    }
  }
  async function d(M, x, E, H) {
    l.value = !0, i.value = null;
    try {
      let K;
      if (!co()) {
        const B = Object.fromEntries(x), T = Object.fromEntries(E), P = H ? Array.from(H) : [];
        K = await c(
          `/v2/comfygit/workflow/${M}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: B,
              model_choices: T,
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
      let E;
      return co() || (E = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: M, limit: x })
        }
      )), o.value = E.results, E.results;
    } catch (E) {
      const H = E instanceof Error ? E.message : "Unknown error occurred";
      throw i.value = H, E;
    } finally {
      l.value = !1;
    }
  }
  async function v(M, x = 10) {
    l.value = !0, i.value = null;
    try {
      let E;
      return co() || (E = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: M, limit: x })
        }
      )), n.value = E.results, E.results;
    } catch (E) {
      const H = E instanceof Error ? E.message : "Unknown error occurred";
      throw i.value = H, E;
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
      return co(), await _(M);
    } catch (x) {
      const E = x instanceof Error ? x.message : "Failed to install nodes";
      throw g.installError = E, x;
    }
  }
  async function _(M) {
    var E;
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
      const H = new Map(((E = x.failed) == null ? void 0 : E.map((K) => [K.node_id, K.error])) || []);
      for (let K = 0; K < g.nodesToInstall.length; K++) {
        const B = g.nodesToInstall[K], T = H.get(B);
        g.nodeInstallProgress.completedNodes.push({
          node_id: B,
          success: !T,
          error: T
        });
      }
    }
    return g.nodesInstalled = x.nodes_installed, g.needsRestart = x.nodes_installed.length > 0, x.failed && x.failed.length > 0 && (g.installError = `${x.failed.length} package(s) failed to install`), x;
  }
  async function C(M, x, E) {
    w(), g.phase = "resolving", i.value = null;
    const H = Object.fromEntries(x), K = Object.fromEntries(E);
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
      const T = B.body.getReader(), P = new TextDecoder();
      let L = "";
      for (; ; ) {
        const { done: le, value: Z } = await T.read();
        if (le) break;
        L += P.decode(Z, { stream: !0 });
        const z = L.split(`

`);
        L = z.pop() || "";
        for (const W of z) {
          if (!W.trim()) continue;
          const Y = W.split(`
`);
          let A = "", se = "";
          for (const X of Y)
            X.startsWith("event: ") ? A = X.slice(7) : X.startsWith("data: ") && (se = X.slice(6));
          if (se)
            try {
              const X = JSON.parse(se);
              b(A, X);
            } catch (X) {
              console.warn("Failed to parse SSE event:", X);
            }
        }
      }
    } catch (B) {
      const T = B instanceof Error ? B.message : "Unknown error occurred";
      throw i.value = T, g.error = T, g.phase = "error", B;
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
  function I(M, x) {
    const { addToQueue: E } = bo(), H = x.filter((K) => K.url && K.target_path).map((K) => ({
      workflow: M,
      filename: K.filename,
      url: K.url,
      targetPath: K.target_path,
      size: K.size || 0,
      type: "model"
    }));
    return H.length > 0 && E(H), H.length;
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
    applyResolutionWithProgress: C,
    installNodes: p,
    searchNodes: m,
    searchModels: v,
    resetProgress: w,
    queueModelDownloads: I
  };
}
const xp = { class: "resolution-stepper" }, Sp = { class: "stepper-header" }, Ip = ["onClick"], Ep = {
  key: 0,
  class: "step-icon"
}, Tp = {
  key: 1,
  class: "step-number"
}, Pp = { class: "step-label" }, Rp = {
  key: 0,
  class: "step-connector"
}, Mp = { class: "stepper-content" }, Dp = /* @__PURE__ */ fe({
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
    return (m, v) => (a(), r("div", xp, [
      t("div", Sp, [
        (a(!0), r(j, null, ge(e.steps, (g, w) => (a(), r("div", {
          key: g.id,
          class: Ie(["step", {
            active: e.currentStep === g.id,
            completed: l(g.id),
            "in-progress": i(g.id),
            disabled: u(g.id)
          }]),
          onClick: (p) => d(g.id)
        }, [
          t("div", {
            class: Ie(["step-indicator", c(g.id)])
          }, [
            l(g.id) ? (a(), r("span", Ep, "✓")) : (a(), r("span", Tp, f(w + 1), 1))
          ], 2),
          t("div", Pp, f(g.label), 1),
          w < e.steps.length - 1 ? (a(), r("div", Rp)) : y("", !0)
        ], 10, Ip))), 128))
      ]),
      t("div", Mp, [
        Ke(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Lp = /* @__PURE__ */ ve(Dp, [["__scopeId", "data-v-2a7b3af8"]]), Op = /* @__PURE__ */ fe({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = U(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), n = U(() => `confidence-${o.value}`), l = U(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (i, c) => (a(), r("span", {
      class: Ie(["confidence-badge", n.value, e.size])
    }, f(l.value), 3));
  }
}), Nn = /* @__PURE__ */ ve(Op, [["__scopeId", "data-v-17ec4b80"]]), Ap = { class: "node-info" }, Up = { class: "node-info-text" }, Np = { class: "item-body" }, zp = {
  key: 0,
  class: "resolved-state"
}, Fp = {
  key: 1,
  class: "multiple-options"
}, Bp = { class: "options-list" }, Vp = ["onClick"], Wp = ["name", "value", "checked", "onChange"], Gp = { class: "option-content" }, jp = { class: "option-header" }, Hp = { class: "option-package-id" }, Kp = {
  key: 0,
  class: "option-title"
}, qp = { class: "option-meta" }, Yp = {
  key: 0,
  class: "installed-badge"
}, Jp = { class: "action-buttons" }, Qp = {
  key: 2,
  class: "unresolved"
}, Xp = {
  key: 0,
  class: "searching-state"
}, Zp = { class: "options-list" }, eg = ["onClick"], tg = ["name", "value"], sg = { class: "option-content" }, og = { class: "option-header" }, ng = { class: "option-package-id" }, ag = {
  key: 0,
  class: "option-description"
}, lg = { class: "option-meta" }, ig = {
  key: 0,
  class: "installed-badge"
}, rg = {
  key: 2,
  class: "unresolved-message"
}, cg = { class: "action-buttons" }, ug = /* @__PURE__ */ fe({
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
    const i = U(() => !!o.choice);
    U(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), U(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.package_id;
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
    function u(d) {
      n("option-selected", d);
    }
    return (d, m) => (a(), r("div", {
      class: Ie(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: i.value }])
    }, [
      t("div", Ap, [
        t("span", Up, [
          m[7] || (m[7] = $("Node type: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Ie(["status-badge", c.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Np, [
        i.value ? (a(), r("div", zp, [
          S(Me, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", Fp, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          t("div", Bp, [
            (a(!0), r(j, null, ge(e.options, (v, g) => (a(), r("label", {
              key: v.package_id,
              class: Ie(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (w) => u(g)
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (w) => u(g)
              }, null, 40, Wp),
              t("div", Gp, [
                t("div", jp, [
                  t("span", Hp, f(v.package_id), 1),
                  S(Nn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (a(), r("div", Kp, f(v.title), 1)) : y("", !0),
                t("div", qp, [
                  v.is_installed ? (a(), r("span", Yp, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, Vp))), 128))
          ]),
          t("div", Jp, [
            S(Me, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                $(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            S(Me, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            S(Me, {
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
        ])) : (a(), r("div", Qp, [
          e.isSearching ? (a(), r("div", Xp, [...m[13] || (m[13] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), r(j, { key: 1 }, [
            m[14] || (m[14] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", Zp, [
              (a(!0), r(j, null, ge(e.searchResults.slice(0, 5), (v, g) => (a(), r("label", {
                key: v.package_id,
                class: "option-card",
                onClick: (w) => n("search-result-selected", v)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: g
                }, null, 8, tg),
                t("div", sg, [
                  t("div", og, [
                    t("span", ng, f(v.package_id), 1),
                    S(Nn, {
                      confidence: v.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  v.description ? (a(), r("div", ag, f(l(v.description)), 1)) : y("", !0),
                  t("div", lg, [
                    v.is_installed ? (a(), r("span", ig, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, eg))), 128))
            ])
          ], 64)) : (a(), r("div", rg, [...m[15] || (m[15] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", cg, [
            S(Me, {
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
            S(Me, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[16] || (m[16] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            S(Me, {
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
}), dg = /* @__PURE__ */ ve(ug, [["__scopeId", "data-v-c2997d1d"]]), fg = { class: "item-navigator" }, mg = { class: "nav-item-info" }, vg = ["title"], pg = { class: "nav-controls" }, gg = { class: "nav-arrows" }, hg = ["disabled"], yg = ["disabled"], wg = { class: "nav-position" }, _g = /* @__PURE__ */ fe({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (n, l) => (a(), r("div", fg, [
      t("div", mg, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, f(e.itemName), 9, vg)
      ]),
      t("div", pg, [
        t("div", gg, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (i) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, hg),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (i) => o("next")),
            title: "Next item"
          }, " → ", 8, yg)
        ]),
        t("span", wg, f(e.currentIndex + 1) + "/" + f(e.totalItems), 1)
      ])
    ]));
  }
}), Sr = /* @__PURE__ */ ve(_g, [["__scopeId", "data-v-74af7920"]]), kg = ["type", "value", "placeholder", "disabled"], bg = {
  key: 0,
  class: "base-input-error"
}, $g = /* @__PURE__ */ fe({
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
          o[1] || (o[1] = Kt((n) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = Kt((n) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, kg),
      e.error ? (a(), r("span", bg, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Tt = /* @__PURE__ */ ve($g, [["__scopeId", "data-v-9ba02cdc"]]), Cg = { class: "node-resolution-step" }, xg = {
  key: 0,
  class: "auto-resolved-section"
}, Sg = { class: "section-header" }, Ig = { class: "stat-badge" }, Eg = { class: "resolved-packages-list" }, Tg = { class: "package-info" }, Pg = { class: "package-id" }, Rg = { class: "node-count" }, Mg = { class: "package-actions" }, Dg = {
  key: 0,
  class: "status-badge install"
}, Lg = {
  key: 1,
  class: "status-badge skip"
}, Og = ["onClick"], Ag = {
  key: 1,
  class: "section-divider"
}, Ug = { class: "step-header" }, Ng = { class: "stat-badge" }, zg = {
  key: 1,
  class: "step-body"
}, Fg = {
  key: 3,
  class: "empty-state"
}, Bg = { class: "node-modal-body" }, Vg = { class: "node-search-results-container" }, Wg = {
  key: 0,
  class: "node-search-results"
}, Gg = ["onClick"], jg = { class: "node-result-header" }, Hg = { class: "node-result-package-id" }, Kg = {
  key: 0,
  class: "node-result-description"
}, qg = {
  key: 1,
  class: "node-empty-state"
}, Yg = {
  key: 2,
  class: "node-empty-state"
}, Jg = {
  key: 3,
  class: "node-empty-state"
}, Qg = { class: "node-manual-entry-modal" }, Xg = { class: "node-modal-body" }, Zg = { class: "node-modal-actions" }, eh = /* @__PURE__ */ fe({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: s }) {
    const o = e, n = s, { searchNodes: l } = xr(), i = k(0), c = k(!1), u = k(!1), d = k(""), m = k(""), v = k([]), g = k(!1), w = k(/* @__PURE__ */ new Map()), p = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function C() {
      _.value && X(), _.value = !1;
    }
    const b = U(() => o.nodes[i.value]), I = U(() => o.nodes.filter((Te) => o.nodeChoices.has(Te.node_type)).length), M = U(() => b.value ? w.value.get(b.value.node_type) || [] : []), x = U(() => b.value ? p.value.has(b.value.node_type) : !1);
    gt(b, async (Te) => {
      var Pe;
      Te && ((Pe = Te.options) != null && Pe.length || w.value.has(Te.node_type) || p.value.has(Te.node_type) || o.nodeChoices.has(Te.node_type) || await E(Te.node_type));
    }, { immediate: !0 });
    async function E(Te) {
      p.value.add(Te);
      try {
        const Pe = await l(Te, 5);
        w.value.set(Te, Pe);
      } catch {
        w.value.set(Te, []);
      } finally {
        p.value.delete(Te);
      }
    }
    const H = U(() => o.autoResolvedPackages.filter((Te) => !o.skippedPackages.has(Te.package_id)).length);
    function K(Te) {
      return o.skippedPackages.has(Te);
    }
    function B(Te) {
      n("package-skip", Te);
    }
    const T = U(() => {
      var Pe;
      if (!b.value) return "not-found";
      const Te = o.nodeChoices.get(b.value.node_type);
      if (Te)
        switch (Te.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (Pe = b.value.options) != null && Pe.length ? "ambiguous" : "not-found";
    }), P = U(() => {
      var Pe;
      if (!b.value) return;
      const Te = o.nodeChoices.get(b.value.node_type);
      if (Te)
        switch (Te.action) {
          case "install":
            return Te.package_id ? `→ ${Te.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (Pe = b.value.options) != null && Pe.length ? `${b.value.options.length} matches` : "Not Found";
    });
    function L(Te) {
      Te >= 0 && Te < o.nodes.length && (i.value = Te);
    }
    function le() {
      var Te;
      for (let Pe = i.value + 1; Pe < o.nodes.length; Pe++) {
        const ke = o.nodes[Pe];
        if (!((Te = o.nodeChoices) != null && Te.has(ke.node_type))) {
          L(Pe);
          return;
        }
      }
    }
    function Z() {
      b.value && (n("mark-optional", b.value.node_type), yt(() => le()));
    }
    function z() {
      b.value && (n("skip", b.value.node_type), yt(() => le()));
    }
    function W(Te) {
      b.value && (n("option-selected", b.value.node_type, Te), yt(() => le()));
    }
    function Y() {
      b.value && n("clear-choice", b.value.node_type);
    }
    function A() {
      b.value && (d.value = b.value.node_type, v.value = M.value, c.value = !0, pe(d.value));
    }
    function se() {
      m.value = "", u.value = !0;
    }
    function X() {
      c.value = !1, d.value = "", v.value = [];
    }
    function ye() {
      u.value = !1, m.value = "";
    }
    let _e = null;
    function ce() {
      _e && clearTimeout(_e), _e = setTimeout(() => {
        pe(d.value);
      }, 300);
    }
    async function pe(Te) {
      if (!Te.trim()) {
        v.value = [];
        return;
      }
      g.value = !0;
      try {
        v.value = await l(Te, 10);
      } catch {
        v.value = [];
      } finally {
        g.value = !1;
      }
    }
    function Se(Te) {
      b.value && (n("manual-entry", b.value.node_type, Te.package_id), X(), yt(() => le()));
    }
    function Fe(Te) {
      b.value && (n("manual-entry", b.value.node_type, Te.package_id), yt(() => le()));
    }
    function ze() {
      !b.value || !m.value.trim() || (n("manual-entry", b.value.node_type, m.value.trim()), ye(), yt(() => le()));
    }
    return (Te, Pe) => {
      var ke, he;
      return a(), r("div", Cg, [
        e.autoResolvedPackages.length > 0 ? (a(), r("div", xg, [
          t("div", Sg, [
            Pe[6] || (Pe[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", Ig, f(H.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", Eg, [
            (a(!0), r(j, null, ge(e.autoResolvedPackages, (De) => (a(), r("div", {
              key: De.package_id,
              class: "resolved-package-item"
            }, [
              t("div", Tg, [
                t("code", Pg, f(De.package_id), 1),
                t("span", Rg, f(De.node_types_count) + " node type" + f(De.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", Mg, [
                K(De.package_id) ? (a(), r("span", Lg, " SKIPPED ")) : (a(), r("span", Dg, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (Re) => B(De.package_id)
                }, f(K(De.package_id) ? "Include" : "Skip"), 9, Og)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), r("div", Ag)) : y("", !0),
        e.nodes.length > 0 ? (a(), r(j, { key: 2 }, [
          t("div", Ug, [
            Pe[7] || (Pe[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", Ng, f(I.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          b.value ? (a(), D(Sr, {
            key: 0,
            "item-name": b.value.node_type,
            "current-index": i.value,
            "total-items": e.nodes.length,
            onPrev: Pe[0] || (Pe[0] = (De) => L(i.value - 1)),
            onNext: Pe[1] || (Pe[1] = (De) => L(i.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          b.value ? (a(), r("div", zg, [
            S(dg, {
              "node-type": b.value.node_type,
              "has-multiple-options": !!((ke = b.value.options) != null && ke.length),
              options: b.value.options,
              choice: (he = e.nodeChoices) == null ? void 0 : he.get(b.value.node_type),
              status: T.value,
              "status-label": P.value,
              "search-results": M.value,
              "is-searching": x.value,
              onMarkOptional: Z,
              onSkip: z,
              onManualEntry: se,
              onSearch: A,
              onOptionSelected: W,
              onClearChoice: Y,
              onSearchResultSelected: Fe
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), r("div", Fg, [...Pe[8] || (Pe[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), D(_t, { to: "body" }, [
          c.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: Pe[4] || (Pe[4] = it((De) => _.value = !0, ["self"])),
            onMouseup: it(C, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: Pe[3] || (Pe[3] = (De) => _.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                Pe[9] || (Pe[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: X
                }, "✕")
              ]),
              t("div", Bg, [
                S(Tt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": Pe[2] || (Pe[2] = (De) => d.value = De),
                  placeholder: "Search by node type, package name...",
                  onInput: ce
                }, null, 8, ["modelValue"]),
                t("div", Vg, [
                  v.value.length > 0 ? (a(), r("div", Wg, [
                    (a(!0), r(j, null, ge(v.value, (De) => (a(), r("div", {
                      key: De.package_id,
                      class: "node-search-result-item",
                      onClick: (Re) => Se(De)
                    }, [
                      t("div", jg, [
                        t("code", Hg, f(De.package_id), 1),
                        De.match_confidence ? (a(), D(Nn, {
                          key: 0,
                          confidence: De.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      De.description ? (a(), r("div", Kg, f(De.description), 1)) : y("", !0)
                    ], 8, Gg))), 128))
                  ])) : g.value ? (a(), r("div", qg, "Searching...")) : d.value ? (a(), r("div", Yg, 'No packages found matching "' + f(d.value) + '"', 1)) : (a(), r("div", Jg, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (a(), D(_t, { to: "body" }, [
          u.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: it(ye, ["self"])
          }, [
            t("div", Qg, [
              t("div", { class: "node-modal-header" }, [
                Pe[10] || (Pe[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: ye
                }, "✕")
              ]),
              t("div", Xg, [
                S(Tt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": Pe[5] || (Pe[5] = (De) => m.value = De),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", Zg, [
                  S(Me, {
                    variant: "secondary",
                    onClick: ye
                  }, {
                    default: h(() => [...Pe[11] || (Pe[11] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  S(Me, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: ze
                  }, {
                    default: h(() => [...Pe[12] || (Pe[12] = [
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
}), th = /* @__PURE__ */ ve(eh, [["__scopeId", "data-v-6d7f8125"]]), sh = { class: "node-info" }, oh = { class: "node-info-text" }, nh = { class: "item-body" }, ah = {
  key: 0,
  class: "resolved-state"
}, lh = {
  key: 1,
  class: "multiple-options"
}, ih = { class: "options-list" }, rh = ["onClick"], ch = ["name", "value", "checked", "onChange"], uh = { class: "option-content" }, dh = { class: "option-header" }, fh = { class: "option-filename" }, mh = { class: "option-meta" }, vh = { class: "option-size" }, ph = { class: "option-category" }, gh = { class: "option-path" }, hh = { class: "action-buttons" }, yh = {
  key: 2,
  class: "unresolved"
}, wh = { class: "action-buttons" }, _h = /* @__PURE__ */ fe({
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
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), U(() => {
      var d, m;
      return ((m = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : m.filename) || "selected";
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
      t("div", sh, [
        t("span", oh, [
          m[7] || (m[7] = $("Used by: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Ie(["status-badge", i.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", nh, [
        l.value ? (a(), r("div", ah, [
          S(Me, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", lh, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", ih, [
            (a(!0), r(j, null, ge(e.options, (v, g) => (a(), r("label", {
              key: v.model.hash,
              class: Ie(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (w) => c(g)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (w) => c(g)
              }, null, 40, ch),
              t("div", uh, [
                t("div", dh, [
                  t("span", fh, f(v.model.filename), 1),
                  S(Nn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", mh, [
                  t("span", vh, f(u(v.model.size)), 1),
                  t("span", ph, f(v.model.category), 1)
                ]),
                t("div", gh, f(v.model.relative_path), 1)
              ])
            ], 10, rh))), 128))
          ]),
          t("div", hh, [
            S(Me, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            S(Me, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            S(Me, {
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
        ])) : (a(), r("div", yh, [
          m[16] || (m[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", wh, [
            S(Me, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: h(() => [...m[13] || (m[13] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            S(Me, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[14] || (m[14] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            S(Me, {
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
}), kh = /* @__PURE__ */ ve(_h, [["__scopeId", "data-v-8a82fefa"]]), bh = { class: "model-resolution-step" }, $h = { class: "step-header" }, Ch = { class: "step-info" }, xh = { class: "step-title" }, Sh = { class: "step-description" }, Ih = { class: "stat-badge" }, Eh = {
  key: 1,
  class: "step-body"
}, Th = {
  key: 2,
  class: "empty-state"
}, Ph = { class: "model-search-modal" }, Rh = { class: "model-modal-body" }, Mh = {
  key: 0,
  class: "model-search-results"
}, Dh = ["onClick"], Lh = { class: "model-result-header" }, Oh = { class: "model-result-filename" }, Ah = { class: "model-result-meta" }, Uh = { class: "model-result-category" }, Nh = { class: "model-result-size" }, zh = {
  key: 0,
  class: "model-result-path"
}, Fh = {
  key: 1,
  class: "model-no-results"
}, Bh = {
  key: 2,
  class: "model-searching"
}, Vh = { class: "model-download-url-modal" }, Wh = { class: "model-modal-body" }, Gh = { class: "model-input-group" }, jh = { class: "model-input-group" }, Hh = { class: "model-modal-actions" }, Kh = /* @__PURE__ */ fe({
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
    function n(X) {
      var ye;
      return X && ((ye = o[X]) == null ? void 0 : ye[0]) || null;
    }
    const l = e, i = s, c = k(0), u = k(!1), d = k(!1), m = k(""), v = k(""), g = k(""), w = k([]), p = k(!1), _ = U(() => l.models[c.value]), C = U(() => l.models.some((X) => X.is_download_intent)), b = U(() => l.models.filter(
      (X) => l.modelChoices.has(X.filename) || X.is_download_intent
    ).length), I = U(() => {
      var ye;
      if (!_.value) return "";
      const X = n((ye = _.value.reference) == null ? void 0 : ye.node_type);
      return X ? `${X}/${_.value.filename}` : "";
    }), M = U(() => {
      var ye;
      if (!_.value) return "not-found";
      const X = l.modelChoices.get(_.value.filename);
      if (X)
        switch (X.action) {
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
      return _.value.is_download_intent ? "download" : (ye = _.value.options) != null && ye.length ? "ambiguous" : "not-found";
    }), x = U(() => {
      var ye, _e;
      if (!_.value) return;
      const X = l.modelChoices.get(_.value.filename);
      if (X)
        switch (X.action) {
          case "select":
            return (ye = X.selected_model) != null && ye.filename ? `→ ${X.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (_e = _.value.options) != null && _e.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function E(X) {
      X >= 0 && X < l.models.length && (c.value = X);
    }
    function H() {
      var X;
      for (let ye = c.value + 1; ye < l.models.length; ye++) {
        const _e = l.models[ye];
        if (!_e.is_download_intent && !((X = l.modelChoices) != null && X.has(_e.filename))) {
          E(ye);
          return;
        }
      }
    }
    function K() {
      _.value && (i("mark-optional", _.value.filename), yt(() => H()));
    }
    function B() {
      _.value && (i("skip", _.value.filename), yt(() => H()));
    }
    function T(X) {
      _.value && (i("option-selected", _.value.filename, X), yt(() => H()));
    }
    function P() {
      _.value && i("clear-choice", _.value.filename);
    }
    function L() {
      _.value && (m.value = _.value.filename, u.value = !0);
    }
    function le() {
      _.value && (v.value = _.value.download_source || "", g.value = _.value.target_path || I.value, d.value = !0);
    }
    function Z() {
      u.value = !1, m.value = "", w.value = [];
    }
    function z() {
      d.value = !1, v.value = "", g.value = "";
    }
    function W() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function Y(X) {
      _.value && (Z(), yt(() => H()));
    }
    function A() {
      !_.value || !v.value.trim() || (i("download-url", _.value.filename, v.value.trim(), g.value.trim() || void 0), z(), yt(() => H()));
    }
    function se(X) {
      if (!X) return "Unknown";
      const ye = X / (1024 * 1024 * 1024);
      return ye >= 1 ? `${ye.toFixed(2)} GB` : `${(X / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (X, ye) => {
      var _e, ce, pe;
      return a(), r("div", bh, [
        t("div", $h, [
          t("div", Ch, [
            t("h3", xh, f(C.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", Sh, f(C.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", Ih, f(b.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), D(Sr, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: ye[0] || (ye[0] = (Se) => E(c.value - 1)),
          onNext: ye[1] || (ye[1] = (Se) => E(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), r("div", Eh, [
          S(kh, {
            filename: _.value.filename,
            "node-type": ((_e = _.value.reference) == null ? void 0 : _e.node_type) || "Unknown",
            "has-multiple-options": !!((ce = _.value.options) != null && ce.length),
            options: _.value.options,
            choice: (pe = e.modelChoices) == null ? void 0 : pe.get(_.value.filename),
            status: M.value,
            "status-label": x.value,
            onMarkOptional: K,
            onSkip: B,
            onDownloadUrl: le,
            onSearch: L,
            onOptionSelected: T,
            onClearChoice: P
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), r("div", Th, [...ye[5] || (ye[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (a(), D(_t, { to: "body" }, [
          u.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: it(Z, ["self"])
          }, [
            t("div", Ph, [
              t("div", { class: "model-modal-header" }, [
                ye[6] || (ye[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: Z
                }, "✕")
              ]),
              t("div", Rh, [
                S(Tt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": ye[2] || (ye[2] = (Se) => m.value = Se),
                  placeholder: "Search by filename, category...",
                  onInput: W
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), r("div", Mh, [
                  (a(!0), r(j, null, ge(w.value, (Se) => (a(), r("div", {
                    key: Se.hash,
                    class: "model-search-result-item",
                    onClick: (Fe) => Y()
                  }, [
                    t("div", Lh, [
                      t("code", Oh, f(Se.filename), 1)
                    ]),
                    t("div", Ah, [
                      t("span", Uh, f(Se.category), 1),
                      t("span", Nh, f(se(Se.size)), 1)
                    ]),
                    Se.relative_path ? (a(), r("div", zh, f(Se.relative_path), 1)) : y("", !0)
                  ], 8, Dh))), 128))
                ])) : m.value && !p.value ? (a(), r("div", Fh, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                p.value ? (a(), r("div", Bh, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), D(_t, { to: "body" }, [
          d.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: it(z, ["self"])
          }, [
            t("div", Vh, [
              t("div", { class: "model-modal-header" }, [
                ye[7] || (ye[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: z
                }, "✕")
              ]),
              t("div", Wh, [
                t("div", Gh, [
                  ye[8] || (ye[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  S(Tt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": ye[3] || (ye[3] = (Se) => v.value = Se),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", jh, [
                  ye[9] || (ye[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  S(Tt, {
                    modelValue: g.value,
                    "onUpdate:modelValue": ye[4] || (ye[4] = (Se) => g.value = Se),
                    placeholder: I.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", Hh, [
                  S(Me, {
                    variant: "secondary",
                    onClick: z
                  }, {
                    default: h(() => [...ye[10] || (ye[10] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  S(Me, {
                    variant: "primary",
                    disabled: !v.value.trim() || !g.value.trim(),
                    onClick: A
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
}), qh = /* @__PURE__ */ ve(Kh, [["__scopeId", "data-v-5c700bfa"]]), Yh = { class: "applying-step" }, Jh = {
  key: 0,
  class: "phase-content"
}, Qh = {
  key: 1,
  class: "phase-content"
}, Xh = { class: "phase-description" }, Zh = { class: "overall-progress" }, ey = { class: "progress-bar" }, ty = { class: "progress-label" }, sy = { class: "install-list" }, oy = { class: "install-icon" }, ny = { key: 0 }, ay = {
  key: 1,
  class: "spinner"
}, ly = { key: 2 }, iy = { key: 3 }, ry = {
  key: 0,
  class: "install-error"
}, cy = {
  key: 2,
  class: "phase-content"
}, uy = { class: "phase-header" }, dy = { class: "phase-title" }, fy = { class: "completion-summary" }, my = {
  key: 0,
  class: "summary-item success"
}, vy = { class: "summary-text" }, py = {
  key: 1,
  class: "summary-item error"
}, gy = { class: "summary-text" }, hy = {
  key: 2,
  class: "failed-list"
}, yy = { class: "failed-node-id" }, wy = { class: "failed-error" }, _y = {
  key: 4,
  class: "summary-item success"
}, ky = {
  key: 5,
  class: "restart-prompt"
}, by = {
  key: 3,
  class: "phase-content error"
}, $y = { class: "error-message" }, Cy = /* @__PURE__ */ fe({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const s = e, o = U(() => {
      var m, v;
      const u = ((m = s.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || s.progress.nodesToInstall.length;
      if (!u) return 0;
      const d = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(d / u * 100);
    }), n = U(() => {
      var u;
      return ((u = s.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((d) => !d.success)) || [];
    }), l = U(() => n.value.length > 0);
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
      return a(), r("div", Yh, [
        e.progress.phase === "resolving" ? (a(), r("div", Jh, [...d[2] || (d[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), r("div", Qh, [
          d[3] || (d[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", Xh, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", Zh, [
            t("div", ey, [
              t("div", {
                class: "progress-fill",
                style: Ft({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", ty, f(((g = e.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", sy, [
            (a(!0), r(j, null, ge(e.progress.nodesToInstall, (p, _) => (a(), r("div", {
              key: p,
              class: Ie(["install-item", i(p, _)])
            }, [
              t("span", oy, [
                i(p, _) === "pending" ? (a(), r("span", ny, "○")) : i(p, _) === "installing" ? (a(), r("span", ay, "◌")) : i(p, _) === "complete" ? (a(), r("span", ly, "✓")) : i(p, _) === "failed" ? (a(), r("span", iy, "✗")) : y("", !0)
              ]),
              t("code", null, f(p), 1),
              c(p) ? (a(), r("span", ry, f(c(p)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), r("div", cy, [
          t("div", uy, [
            t("span", {
              class: Ie(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            t("h3", dy, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", fy, [
            e.progress.nodesInstalled.length > 0 ? (a(), r("div", my, [
              d[4] || (d[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", vy, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("div", py, [
              d[5] || (d[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", gy, f(n.value.length) + " package" + f(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("div", hy, [
              (a(!0), r(j, null, ge(n.value, (p) => (a(), r("div", {
                key: p.node_id,
                class: "failed-item"
              }, [
                t("code", yy, f(p.node_id), 1),
                t("span", wy, f(p.error), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (p) => u.$emit("retry-failed"))
            }, " Retry Failed (" + f(n.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (a(), r("div", _y, [...d[6] || (d[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), r("div", ky, [
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
        ])) : e.progress.phase === "error" ? (a(), r("div", by, [
          d[9] || (d[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", $y, f(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), xy = /* @__PURE__ */ ve(Cy, [["__scopeId", "data-v-5efaae58"]]), Sy = {
  key: 0,
  class: "loading-state"
}, Iy = {
  key: 1,
  class: "wizard-content"
}, Ey = {
  key: 0,
  class: "step-content"
}, Ty = { class: "analysis-summary" }, Py = { class: "analysis-header" }, Ry = { class: "summary-description" }, My = { class: "stats-grid" }, Dy = { class: "stat-card" }, Ly = { class: "stat-items" }, Oy = {
  key: 0,
  class: "stat-item success"
}, Ay = { class: "stat-count" }, Uy = {
  key: 1,
  class: "stat-item info"
}, Ny = { class: "stat-count" }, zy = {
  key: 2,
  class: "stat-item warning"
}, Fy = { class: "stat-count" }, By = {
  key: 3,
  class: "stat-item error"
}, Vy = { class: "stat-count" }, Wy = { class: "stat-card" }, Gy = { class: "stat-items" }, jy = { class: "stat-item success" }, Hy = { class: "stat-count" }, Ky = {
  key: 0,
  class: "stat-item info"
}, qy = { class: "stat-count" }, Yy = {
  key: 1,
  class: "stat-item warning"
}, Jy = { class: "stat-count" }, Qy = {
  key: 2,
  class: "stat-item warning"
}, Xy = { class: "stat-count" }, Zy = {
  key: 3,
  class: "stat-item error"
}, e1 = { class: "stat-count" }, t1 = {
  key: 0,
  class: "status-message warning"
}, s1 = { class: "status-text" }, o1 = {
  key: 1,
  class: "status-message info"
}, n1 = { class: "status-text" }, a1 = {
  key: 2,
  class: "status-message info"
}, l1 = { class: "status-text" }, i1 = {
  key: 3,
  class: "status-message warning"
}, r1 = { class: "status-text" }, c1 = {
  key: 4,
  class: "status-message success"
}, u1 = {
  key: 5,
  class: "category-mismatch-section"
}, d1 = { class: "mismatch-list" }, f1 = { class: "mismatch-path" }, m1 = { class: "mismatch-target" }, v1 = {
  key: 3,
  class: "step-content"
}, p1 = { class: "review-summary" }, g1 = { class: "review-stats" }, h1 = { class: "review-stat" }, y1 = { class: "stat-value" }, w1 = { class: "review-stat" }, _1 = { class: "stat-value" }, k1 = { class: "review-stat" }, b1 = { class: "stat-value" }, $1 = { class: "review-stat" }, C1 = { class: "stat-value" }, x1 = {
  key: 0,
  class: "review-section"
}, S1 = { class: "section-title" }, I1 = { class: "review-items" }, E1 = { class: "item-name" }, T1 = { class: "item-choice" }, P1 = {
  key: 0,
  class: "choice-badge install"
}, R1 = {
  key: 1,
  class: "choice-badge skip"
}, M1 = {
  key: 1,
  class: "review-section"
}, D1 = { class: "section-title" }, L1 = { class: "review-items" }, O1 = { class: "item-name" }, A1 = { class: "item-choice" }, U1 = {
  key: 0,
  class: "choice-badge install"
}, N1 = {
  key: 1,
  class: "choice-badge optional"
}, z1 = {
  key: 2,
  class: "choice-badge skip"
}, F1 = {
  key: 1,
  class: "choice-badge pending"
}, B1 = {
  key: 2,
  class: "review-section"
}, V1 = { class: "section-title" }, W1 = { class: "review-items download-details" }, G1 = { class: "download-info" }, j1 = { class: "item-name" }, H1 = { class: "download-meta" }, K1 = { class: "download-path" }, q1 = ["title"], Y1 = {
  key: 3,
  class: "review-section"
}, J1 = { class: "section-title" }, Q1 = { class: "review-items" }, X1 = { class: "item-name" }, Z1 = { class: "item-choice" }, e0 = {
  key: 0,
  class: "choice-badge install"
}, t0 = {
  key: 1,
  class: "choice-badge download"
}, s0 = {
  key: 2,
  class: "choice-badge optional"
}, o0 = {
  key: 3,
  class: "choice-badge skip"
}, n0 = {
  key: 4,
  class: "choice-badge skip"
}, a0 = {
  key: 1,
  class: "choice-badge download"
}, l0 = {
  key: 2,
  class: "choice-badge pending"
}, i0 = {
  key: 4,
  class: "no-choices"
}, r0 = /* @__PURE__ */ fe({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, n = s, { analyzeWorkflow: l, applyResolution: i, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: m } = xr(), { loadPendingDownloads: v } = bo(), { openFileLocation: g } = tt(), w = k(null), p = k(!1), _ = k(!1), C = k(null), b = k("analysis"), I = k([]), M = k(/* @__PURE__ */ new Map()), x = k(/* @__PURE__ */ new Map()), E = k(/* @__PURE__ */ new Set()), H = U(() => {
      const G = [
        { id: "analysis", label: "Analysis" }
      ];
      return (B.value || L.value) && G.push({ id: "nodes", label: "Nodes" }), T.value && G.push({ id: "models", label: "Models" }), G.push({ id: "review", label: "Review" }), b.value === "applying" && G.push({ id: "applying", label: "Applying" }), G;
    }), K = U(() => w.value ? w.value.stats.needs_user_input : !1), B = U(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), T = U(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), P = U(() => w.value ? w.value.stats.download_intents > 0 : !1), L = U(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), le = U(() => w.value ? w.value.nodes.resolved.length : 0), Z = U(() => w.value ? w.value.models.resolved.filter((G) => G.has_category_mismatch) : []), z = U(() => Z.value.length > 0), W = U(() => B.value || L.value ? "nodes" : T.value ? "models" : "review"), Y = U(() => {
      if (!w.value) return [];
      const G = w.value.nodes.resolved.filter((de) => !de.is_installed), F = /* @__PURE__ */ new Set();
      return G.filter((de) => F.has(de.package.package_id) ? !1 : (F.add(de.package.package_id), !0));
    }), A = U(() => {
      if (!w.value) return [];
      const G = w.value.nodes.resolved.filter((de) => !de.is_installed), F = /* @__PURE__ */ new Map();
      for (const de of G) {
        const Ve = F.get(de.package.package_id);
        Ve ? Ve.node_types_count++ : F.set(de.package.package_id, {
          package_id: de.package.package_id,
          title: de.package.title,
          node_types_count: 1
        });
      }
      return Array.from(F.values());
    }), se = U(() => Y.value.filter((G) => !E.value.has(G.package.package_id))), X = U(() => w.value ? w.value.models.resolved.filter(
      (G) => G.match_type === "download_intent" || G.match_type === "property_download_intent"
    ).map((G) => ({
      filename: G.reference.widget_value,
      reference: G.reference,
      is_download_intent: !0,
      resolved_model: G.model,
      download_source: G.download_source,
      target_path: G.target_path
    })) : []), ye = U(() => {
      if (!w.value) return [];
      const G = w.value.nodes.unresolved.map((de) => ({
        node_type: de.reference.node_type,
        reason: de.reason,
        is_unresolved: !0,
        options: void 0
      })), F = w.value.nodes.ambiguous.map((de) => ({
        node_type: de.reference.node_type,
        has_multiple_options: !0,
        options: de.options.map((Ve) => ({
          package_id: Ve.package.package_id,
          title: Ve.package.title,
          match_confidence: Ve.match_confidence,
          match_type: Ve.match_type,
          is_installed: Ve.is_installed
        }))
      }));
      return [...G, ...F];
    }), _e = U(() => {
      if (!w.value) return [];
      const G = w.value.models.unresolved.map((de) => ({
        filename: de.reference.widget_value,
        reference: de.reference,
        reason: de.reason,
        is_unresolved: !0,
        options: void 0
      })), F = w.value.models.ambiguous.map((de) => ({
        filename: de.reference.widget_value,
        reference: de.reference,
        has_multiple_options: !0,
        options: de.options.map((Ve) => ({
          model: Ve.model,
          match_confidence: Ve.match_confidence,
          match_type: Ve.match_type,
          has_download_source: Ve.has_download_source
        }))
      }));
      return [...G, ...F];
    }), ce = U(() => {
      const G = _e.value, F = X.value.map((de) => ({
        filename: de.filename,
        reference: de.reference,
        is_download_intent: !0,
        resolved_model: de.resolved_model,
        download_source: de.download_source,
        target_path: de.target_path,
        options: void 0
      }));
      return [...G, ...F];
    }), pe = U(() => X.value.filter((G) => {
      const F = x.value.get(G.filename);
      return F ? F.action === "download" : !0;
    }).map((G) => ({
      filename: G.filename,
      url: G.download_source,
      target_path: G.target_path
    })));
    function Se(G, F = 50) {
      return G.length <= F ? G : G.slice(0, F - 3) + "...";
    }
    const Fe = U(() => {
      let G = se.value.length;
      for (const F of M.value.values())
        F.action === "install" && G++;
      for (const F of x.value.values())
        F.action === "select" && G++;
      return G;
    }), ze = U(() => {
      let G = 0;
      for (const F of x.value.values())
        F.action === "download" && G++;
      for (const F of X.value)
        x.value.get(F.filename) || G++;
      return G;
    }), Te = U(() => {
      let G = 0;
      for (const F of M.value.values())
        F.action === "optional" && G++;
      for (const F of x.value.values())
        F.action === "optional" && G++;
      return G;
    }), Pe = U(() => {
      let G = E.value.size;
      for (const F of M.value.values())
        F.action === "skip" && G++;
      for (const F of x.value.values())
        F.action === "skip" && G++;
      for (const F of ye.value)
        M.value.has(F.node_type) || G++;
      for (const F of _e.value)
        x.value.has(F.filename) || G++;
      return G;
    }), ke = U(() => {
      const G = {};
      if (G.analysis = { resolved: 1, total: 1 }, B.value) {
        const F = ye.value.length, de = ye.value.filter(
          (Ve) => M.value.has(Ve.node_type)
        ).length;
        G.nodes = { resolved: de, total: F };
      }
      if (T.value) {
        const F = ce.value.length, de = ce.value.filter(
          (Ve) => x.value.has(Ve.filename) || Ve.is_download_intent
        ).length;
        G.models = { resolved: de, total: F };
      }
      if (G.review = { resolved: 1, total: 1 }, b.value === "applying") {
        const F = d.totalFiles || 1, de = d.completedFiles.length;
        G.applying = { resolved: de, total: F };
      }
      return G;
    });
    function he(G) {
      b.value = G;
    }
    function De() {
      const G = H.value.findIndex((F) => F.id === b.value);
      G > 0 && (b.value = H.value[G - 1].id);
    }
    function Re() {
      const G = H.value.findIndex((F) => F.id === b.value);
      G < H.value.length - 1 && (b.value = H.value[G + 1].id);
    }
    async function O() {
      p.value = !0, C.value = null;
      try {
        w.value = await l(o.workflowName);
      } catch (G) {
        C.value = G instanceof Error ? G.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function R() {
      I.value.includes("analysis") || I.value.push("analysis"), B.value || L.value ? b.value = "nodes" : T.value ? b.value = "models" : b.value = "review";
    }
    function N(G) {
      M.value.set(G, { action: "optional" });
    }
    function V(G) {
      M.value.set(G, { action: "skip" });
    }
    function ee(G, F) {
      var Ve;
      const de = ye.value.find((Xe) => Xe.node_type === G);
      (Ve = de == null ? void 0 : de.options) != null && Ve[F] && M.value.set(G, {
        action: "install",
        package_id: de.options[F].package_id
      });
    }
    function re(G, F) {
      M.value.set(G, {
        action: "install",
        package_id: F
      });
    }
    function we(G) {
      M.value.delete(G);
    }
    function $e(G) {
      E.value.has(G) ? E.value.delete(G) : E.value.add(G);
    }
    function ae(G) {
      x.value.set(G, { action: "optional" });
    }
    function me(G) {
      x.value.set(G, { action: "skip" });
    }
    function Le(G, F) {
      var Ve;
      const de = _e.value.find((Xe) => Xe.filename === G);
      (Ve = de == null ? void 0 : de.options) != null && Ve[F] && x.value.set(G, {
        action: "select",
        selected_model: de.options[F].model
      });
    }
    function Ee(G, F, de) {
      x.value.set(G, {
        action: "download",
        url: F,
        target_path: de
      });
    }
    function ne(G) {
      x.value.delete(G);
    }
    async function Q(G) {
      try {
        await g(G);
      } catch (F) {
        C.value = F instanceof Error ? F.message : "Failed to open file location";
      }
    }
    async function Oe() {
      var G;
      _.value = !0, C.value = null, m(), d.phase = "resolving", b.value = "applying";
      try {
        const F = await i(o.workflowName, M.value, x.value, E.value);
        F.models_to_download && F.models_to_download.length > 0 && u(o.workflowName, F.models_to_download);
        const de = [
          ...F.nodes_to_install || [],
          ...se.value.map((Xe) => Xe.package.package_id)
        ];
        d.nodesToInstall = [...new Set(de)], d.nodesToInstall.length > 0 && await c(o.workflowName), d.phase = "complete", await v();
        const Ve = d.installError || ((G = d.nodeInstallProgress) == null ? void 0 : G.completedNodes.some((Xe) => !Xe.success));
        !d.needsRestart && !Ve && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (F) {
        C.value = F instanceof Error ? F.message : "Failed to apply resolution", d.error = C.value, d.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function Ce() {
      n("refresh"), n("restart"), n("close");
    }
    async function be() {
      var F;
      const G = ((F = d.nodeInstallProgress) == null ? void 0 : F.completedNodes.filter((de) => !de.success).map((de) => de.node_id)) || [];
      if (G.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: G.length
        }, d.nodesToInstall = G, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(o.workflowName), d.phase = "complete";
        } catch (de) {
          d.error = de instanceof Error ? de.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return Qe(O), (G, F) => (a(), D(ft, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: C.value || void 0,
      "fixed-height": !0,
      onClose: F[1] || (F[1] = (de) => n("close"))
    }, {
      body: h(() => [
        p.value && !w.value ? (a(), r("div", Sy, [...F[2] || (F[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (a(), r("div", Iy, [
          S(Lp, {
            steps: H.value,
            "current-step": b.value,
            "completed-steps": I.value,
            "step-stats": ke.value,
            onStepChange: he
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          b.value === "analysis" ? (a(), r("div", Ey, [
            t("div", Ty, [
              t("div", Py, [
                F[3] || (F[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", Ry, " Found " + f(w.value.stats.total_nodes) + " nodes and " + f(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", My, [
                t("div", Dy, [
                  F[12] || (F[12] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", Ly, [
                    le.value > 0 ? (a(), r("div", Oy, [
                      F[4] || (F[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Ay, f(le.value), 1),
                      F[5] || (F[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (a(), r("div", Uy, [
                      F[6] || (F[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Ny, f(w.value.stats.packages_needing_installation), 1),
                      F[7] || (F[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (a(), r("div", zy, [
                      F[8] || (F[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", Fy, f(w.value.nodes.ambiguous.length), 1),
                      F[9] || (F[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (a(), r("div", By, [
                      F[10] || (F[10] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", Vy, f(w.value.nodes.unresolved.length), 1),
                      F[11] || (F[11] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", Wy, [
                  F[23] || (F[23] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", Gy, [
                    t("div", jy, [
                      F[13] || (F[13] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Hy, f(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      F[14] || (F[14] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (a(), r("div", Ky, [
                      F[15] || (F[15] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", qy, f(w.value.stats.download_intents), 1),
                      F[16] || (F[16] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    z.value ? (a(), r("div", Yy, [
                      F[17] || (F[17] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", Jy, f(Z.value.length), 1),
                      F[18] || (F[18] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (a(), r("div", Qy, [
                      F[19] || (F[19] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", Xy, f(w.value.models.ambiguous.length), 1),
                      F[20] || (F[20] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (a(), r("div", Zy, [
                      F[21] || (F[21] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", e1, f(w.value.models.unresolved.length), 1),
                      F[22] || (F[22] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              K.value ? (a(), r("div", t1, [
                F[24] || (F[24] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", s1, f(ye.value.length + _e.value.length) + " items need your input", 1)
              ])) : L.value ? (a(), r("div", o1, [
                F[25] || (F[25] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", n1, f(w.value.stats.packages_needing_installation) + " package" + f(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(w.value.stats.nodes_needing_installation) + " node type" + f(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(P.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : P.value ? (a(), r("div", a1, [
                F[26] || (F[26] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", l1, f(w.value.stats.download_intents) + " model" + f(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : z.value ? (a(), r("div", i1, [
                F[27] || (F[27] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", r1, f(Z.value.length) + " model" + f(Z.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), r("div", c1, [...F[28] || (F[28] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              z.value ? (a(), r("div", u1, [
                F[31] || (F[31] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", d1, [
                  (a(!0), r(j, null, ge(Z.value, (de) => {
                    var Ve, Xe;
                    return a(), r("div", {
                      key: de.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", f1, f(de.actual_category) + "/" + f((Ve = de.model) == null ? void 0 : Ve.filename), 1),
                      F[30] || (F[30] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", m1, f((Xe = de.expected_categories) == null ? void 0 : Xe[0]) + "/", 1),
                      de.file_path ? (a(), D(Me, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (vt) => Q(de.file_path)
                      }, {
                        default: h(() => [...F[29] || (F[29] = [
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
          b.value === "nodes" ? (a(), D(th, {
            key: 1,
            nodes: ye.value,
            "node-choices": M.value,
            "auto-resolved-packages": A.value,
            "skipped-packages": E.value,
            onMarkOptional: N,
            onSkip: V,
            onOptionSelected: ee,
            onManualEntry: re,
            onClearChoice: we,
            onPackageSkip: $e
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          b.value === "models" ? (a(), D(qh, {
            key: 2,
            models: ce.value,
            "model-choices": x.value,
            onMarkOptional: ae,
            onSkip: me,
            onOptionSelected: Le,
            onDownloadUrl: Ee,
            onClearChoice: ne
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          b.value === "review" ? (a(), r("div", v1, [
            t("div", p1, [
              F[37] || (F[37] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", g1, [
                t("div", h1, [
                  t("span", y1, f(Fe.value), 1),
                  F[32] || (F[32] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", w1, [
                  t("span", _1, f(ze.value), 1),
                  F[33] || (F[33] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", k1, [
                  t("span", b1, f(Te.value), 1),
                  F[34] || (F[34] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", $1, [
                  t("span", C1, f(Pe.value), 1),
                  F[35] || (F[35] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              A.value.length > 0 ? (a(), r("div", x1, [
                t("h4", S1, "Node Packages (" + f(A.value.length) + ")", 1),
                t("div", I1, [
                  (a(!0), r(j, null, ge(A.value, (de) => (a(), r("div", {
                    key: de.package_id,
                    class: "review-item"
                  }, [
                    t("code", E1, f(de.package_id), 1),
                    t("div", T1, [
                      E.value.has(de.package_id) ? (a(), r("span", R1, "Skipped")) : (a(), r("span", P1, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              ye.value.length > 0 ? (a(), r("div", M1, [
                t("h4", D1, "Node Choices (" + f(ye.value.length) + ")", 1),
                t("div", L1, [
                  (a(!0), r(j, null, ge(ye.value, (de) => {
                    var Ve, Xe, vt, at;
                    return a(), r("div", {
                      key: de.node_type,
                      class: "review-item"
                    }, [
                      t("code", O1, f(de.node_type), 1),
                      t("div", A1, [
                        M.value.has(de.node_type) ? (a(), r(j, { key: 0 }, [
                          ((Ve = M.value.get(de.node_type)) == null ? void 0 : Ve.action) === "install" ? (a(), r("span", U1, f((Xe = M.value.get(de.node_type)) == null ? void 0 : Xe.package_id), 1)) : ((vt = M.value.get(de.node_type)) == null ? void 0 : vt.action) === "optional" ? (a(), r("span", N1, " Optional ")) : ((at = M.value.get(de.node_type)) == null ? void 0 : at.action) === "skip" ? (a(), r("span", z1, " Skip ")) : y("", !0)
                        ], 64)) : (a(), r("span", F1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              pe.value.length > 0 ? (a(), r("div", B1, [
                t("h4", V1, "Models to Download (" + f(pe.value.length) + ")", 1),
                t("div", W1, [
                  (a(!0), r(j, null, ge(pe.value, (de) => (a(), r("div", {
                    key: de.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", G1, [
                      t("code", j1, f(de.filename), 1),
                      t("div", H1, [
                        t("span", K1, "→ " + f(de.target_path), 1),
                        de.url ? (a(), r("span", {
                          key: 0,
                          class: "download-url",
                          title: de.url
                        }, f(Se(de.url)), 9, q1)) : y("", !0)
                      ])
                    ]),
                    F[36] || (F[36] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              ce.value.length > 0 ? (a(), r("div", Y1, [
                t("h4", J1, "Models (" + f(ce.value.length) + ")", 1),
                t("div", Q1, [
                  (a(!0), r(j, null, ge(ce.value, (de) => {
                    var Ve, Xe, vt, at, ut, Mt, Bt;
                    return a(), r("div", {
                      key: de.filename,
                      class: "review-item"
                    }, [
                      t("code", X1, f(de.filename), 1),
                      t("div", Z1, [
                        x.value.has(de.filename) ? (a(), r(j, { key: 0 }, [
                          ((Ve = x.value.get(de.filename)) == null ? void 0 : Ve.action) === "select" ? (a(), r("span", e0, f((vt = (Xe = x.value.get(de.filename)) == null ? void 0 : Xe.selected_model) == null ? void 0 : vt.filename), 1)) : ((at = x.value.get(de.filename)) == null ? void 0 : at.action) === "download" ? (a(), r("span", t0, " Download ")) : ((ut = x.value.get(de.filename)) == null ? void 0 : ut.action) === "optional" ? (a(), r("span", s0, " Optional ")) : ((Mt = x.value.get(de.filename)) == null ? void 0 : Mt.action) === "skip" ? (a(), r("span", o0, " Skip ")) : ((Bt = x.value.get(de.filename)) == null ? void 0 : Bt.action) === "cancel_download" ? (a(), r("span", n0, " Cancel Download ")) : y("", !0)
                        ], 64)) : de.is_download_intent ? (a(), r("span", a0, " Pending Download ")) : (a(), r("span", l0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Y.value.length === 0 && ye.value.length === 0 && ce.value.length === 0 ? (a(), r("div", i0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          b.value === "applying" ? (a(), D(xy, {
            key: 4,
            progress: We(d),
            onRestart: Ce,
            onRetryFailed: be
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        b.value !== "analysis" && b.value !== "applying" ? (a(), D(Me, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: De
        }, {
          default: h(() => [...F[38] || (F[38] = [
            $(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        F[41] || (F[41] = t("div", { class: "footer-spacer" }, null, -1)),
        b.value !== "applying" || We(d).phase === "complete" || We(d).phase === "error" ? (a(), D(Me, {
          key: 1,
          variant: "secondary",
          onClick: F[0] || (F[0] = (de) => n("close"))
        }, {
          default: h(() => [
            $(f(We(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        b.value === "analysis" ? (a(), D(Me, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: R
        }, {
          default: h(() => [
            $(f(W.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        b.value === "nodes" ? (a(), D(Me, {
          key: 3,
          variant: "primary",
          onClick: Re
        }, {
          default: h(() => [
            $(f(T.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        b.value === "models" ? (a(), D(Me, {
          key: 4,
          variant: "primary",
          onClick: Re
        }, {
          default: h(() => [...F[39] || (F[39] = [
            $(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        b.value === "review" ? (a(), D(Me, {
          key: 5,
          variant: "primary",
          disabled: _.value,
          loading: _.value,
          onClick: Oe
        }, {
          default: h(() => [...F[40] || (F[40] = [
            $(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), c0 = /* @__PURE__ */ ve(r0, [["__scopeId", "data-v-40d8d5a8"]]), u0 = { class: "search-input-wrapper" }, d0 = ["value", "placeholder"], f0 = /* @__PURE__ */ fe({
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
    return Qe(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, m) => (a(), r("div", u0, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: Kt(u, ["escape"])
      }, null, 40, d0),
      e.clearable && e.modelValue ? (a(), r("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), m0 = /* @__PURE__ */ ve(f0, [["__scopeId", "data-v-266f857a"]]), v0 = { class: "search-bar" }, p0 = /* @__PURE__ */ fe({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (a(), r("div", v0, [
      S(m0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => s.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), $o = /* @__PURE__ */ ve(p0, [["__scopeId", "data-v-3d51bbfd"]]), g0 = { class: "section-group" }, h0 = {
  key: 0,
  class: "section-content"
}, y0 = /* @__PURE__ */ fe({
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
    return (c, u) => (a(), r("section", g0, [
      S(Ut, {
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
      !e.collapsible || l.value ? (a(), r("div", h0, [
        Ke(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), lt = /* @__PURE__ */ ve(y0, [["__scopeId", "data-v-c48e33ed"]]), w0 = { class: "item-header" }, _0 = {
  key: 0,
  class: "item-icon"
}, k0 = { class: "item-info" }, b0 = {
  key: 0,
  class: "item-title"
}, $0 = {
  key: 1,
  class: "item-subtitle"
}, C0 = {
  key: 0,
  class: "item-details"
}, x0 = {
  key: 1,
  class: "item-actions"
}, S0 = /* @__PURE__ */ fe({
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
      class: Ie(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: i[0] || (i[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      t("div", w0, [
        l.$slots.icon ? (a(), r("span", _0, [
          Ke(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", k0, [
          l.$slots.title ? (a(), r("div", b0, [
            Ke(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), r("div", $0, [
            Ke(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), r("div", C0, [
        Ke(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), r("div", x0, [
        Ke(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Et = /* @__PURE__ */ ve(S0, [["__scopeId", "data-v-cc435e0e"]]), I0 = { class: "loading-state" }, E0 = { class: "loading-message" }, T0 = /* @__PURE__ */ fe({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (a(), r("div", I0, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", E0, f(e.message), 1)
    ]));
  }
}), Ps = /* @__PURE__ */ ve(T0, [["__scopeId", "data-v-ad8436c9"]]), P0 = { class: "error-state" }, R0 = { class: "error-message" }, M0 = /* @__PURE__ */ fe({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (a(), r("div", P0, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", R0, f(e.message), 1),
      e.retry ? (a(), D(ue, {
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
}), Rs = /* @__PURE__ */ ve(M0, [["__scopeId", "data-v-5397be48"]]), D0 = /* @__PURE__ */ fe({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getWorkflows: l } = tt(), i = k([]), c = k(!1), u = k(null), d = k(""), m = k(!0), v = k(!1), g = k(!1), w = k(!1), p = k(null), _ = U(
      () => i.value.filter((A) => A.status === "broken")
    ), C = U(
      () => i.value.filter((A) => A.status === "new")
    ), b = U(
      () => i.value.filter((A) => A.status === "modified")
    ), I = U(
      () => i.value.filter((A) => A.status === "synced")
    ), M = U(() => {
      if (!d.value.trim()) return i.value;
      const A = d.value.toLowerCase();
      return i.value.filter((se) => se.name.toLowerCase().includes(A));
    }), x = U(
      () => _.value.filter(
        (A) => !d.value.trim() || A.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), E = U(
      () => C.value.filter(
        (A) => !d.value.trim() || A.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), H = U(
      () => b.value.filter(
        (A) => !d.value.trim() || A.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), K = U(
      () => I.value.filter(
        (A) => !d.value.trim() || A.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), B = U(
      () => v.value ? K.value : K.value.slice(0, 5)
    );
    async function T(A = !1) {
      c.value = !0, u.value = null;
      try {
        i.value = await l(A);
      } catch (se) {
        u.value = se instanceof Error ? se.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    s({ loadWorkflows: T });
    function P(A) {
      p.value = A, g.value = !0;
    }
    function L(A) {
      p.value = A, w.value = !0;
    }
    function le() {
      n("refresh");
    }
    async function Z() {
      w.value = !1, await T(!0);
    }
    async function z() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function W(A) {
      const se = [];
      return A.missing_nodes > 0 && se.push(`${A.missing_nodes} missing node${A.missing_nodes > 1 ? "s" : ""}`), A.missing_models > 0 && se.push(`${A.missing_models} missing model${A.missing_models > 1 ? "s" : ""}`), A.models_with_category_mismatch && A.models_with_category_mismatch > 0 && se.push(`${A.models_with_category_mismatch} model${A.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), A.pending_downloads && A.pending_downloads > 0 && se.push(`${A.pending_downloads} pending download${A.pending_downloads > 1 ? "s" : ""}`), se.length > 0 ? se.join(", ") : "Has issues";
    }
    function Y(A) {
      const se = A.sync_state === "new" ? "New" : A.sync_state === "modified" ? "Modified" : A.sync_state === "synced" ? "Synced" : A.sync_state;
      return A.has_path_sync_issues && A.models_needing_path_sync && A.models_needing_path_sync > 0 ? `${A.models_needing_path_sync} model path${A.models_needing_path_sync > 1 ? "s" : ""} need${A.models_needing_path_sync === 1 ? "s" : ""} sync` : se || "Unknown";
    }
    return Qe(T), (A, se) => (a(), r(j, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          S($o, {
            modelValue: d.value,
            "onUpdate:modelValue": se[0] || (se[0] = (X) => d.value = X),
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
            onRetry: T
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            x.value.length ? (a(), D(lt, {
              key: 0,
              title: "BROKEN",
              count: x.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, ge(x.value, (X) => (a(), D(Et, {
                  key: X.name,
                  status: "broken"
                }, {
                  icon: h(() => [...se[7] || (se[7] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(X.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(W(X)), 1)
                  ]),
                  actions: h(() => [
                    S(ue, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ye) => L(X.name)
                    }, {
                      default: h(() => [...se[8] || (se[8] = [
                        $(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ue, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ye) => P(X.name)
                    }, {
                      default: h(() => [...se[9] || (se[9] = [
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
            E.value.length ? (a(), D(lt, {
              key: 1,
              title: "NEW",
              count: E.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, ge(E.value, (X) => (a(), D(Et, {
                  key: X.name,
                  status: X.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    $(f(X.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    $(f(X.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(Y(X)), 1)
                  ]),
                  actions: h(() => [
                    S(ue, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ye) => P(X.name)
                    }, {
                      default: h(() => [...se[10] || (se[10] = [
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
                (a(!0), r(j, null, ge(H.value, (X) => (a(), D(Et, {
                  key: X.name,
                  status: X.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...se[11] || (se[11] = [
                    $("⚡", -1)
                  ])]),
                  title: h(() => [
                    $(f(X.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(Y(X)), 1)
                  ]),
                  actions: h(() => [
                    S(ue, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ye) => P(X.name)
                    }, {
                      default: h(() => [...se[12] || (se[12] = [
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
              onToggle: se[2] || (se[2] = (X) => m.value = X)
            }, {
              default: h(() => [
                (a(!0), r(j, null, ge(B.value, (X) => (a(), D(Et, {
                  key: X.name,
                  status: X.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    $(f(X.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    $(f(X.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(Y(X)), 1)
                  ]),
                  actions: h(() => [
                    S(ue, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ye) => P(X.name)
                    }, {
                      default: h(() => [...se[13] || (se[13] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && K.value.length > 5 ? (a(), D(ue, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: se[1] || (se[1] = (X) => v.value = !0),
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
      g.value && p.value ? (a(), D(bp, {
        key: 0,
        "workflow-name": p.value,
        onClose: se[3] || (se[3] = (X) => g.value = !1),
        onResolve: se[4] || (se[4] = (X) => L(p.value)),
        onRefresh: se[5] || (se[5] = (X) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (a(), D(c0, {
        key: 1,
        "workflow-name": p.value,
        onClose: Z,
        onInstall: le,
        onRefresh: se[6] || (se[6] = (X) => n("refresh")),
        onRestart: z
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), L0 = /* @__PURE__ */ ve(D0, [["__scopeId", "data-v-fa3f076e"]]), O0 = /* @__PURE__ */ fe({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Ie(["summary-bar", e.variant])
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), an = /* @__PURE__ */ ve(O0, [["__scopeId", "data-v-ccb7816e"]]), A0 = {
  key: 0,
  class: "model-details"
}, U0 = { class: "detail-section" }, N0 = { class: "detail-row" }, z0 = { class: "detail-value mono" }, F0 = { class: "detail-row" }, B0 = { class: "detail-value mono" }, V0 = { class: "detail-row" }, W0 = { class: "detail-value mono" }, G0 = { class: "detail-row" }, j0 = { class: "detail-value" }, H0 = { class: "detail-row" }, K0 = { class: "detail-value" }, q0 = { class: "detail-row" }, Y0 = { class: "detail-value" }, J0 = { class: "detail-section" }, Q0 = { class: "section-header" }, X0 = {
  key: 0,
  class: "locations-list"
}, Z0 = { class: "location-path mono" }, ew = {
  key: 0,
  class: "location-modified"
}, tw = ["onClick"], sw = {
  key: 1,
  class: "empty-state"
}, ow = { class: "detail-section" }, nw = { class: "section-header" }, aw = {
  key: 0,
  class: "sources-list"
}, lw = { class: "source-type" }, iw = ["href"], rw = ["disabled", "onClick"], cw = {
  key: 1,
  class: "empty-state"
}, uw = { class: "add-source-form" }, dw = ["disabled"], fw = {
  key: 2,
  class: "source-error"
}, mw = {
  key: 3,
  class: "source-success"
}, vw = /* @__PURE__ */ fe({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: i, openFileLocation: c } = tt(), u = k(null), d = k(!0), m = k(null), v = k(""), g = k(!1), w = k(null), p = k(null), _ = k(null), C = k(null);
    let b = null;
    function I(T, P = "success", L = 2e3) {
      b && clearTimeout(b), C.value = { message: T, type: P }, b = setTimeout(() => {
        C.value = null;
      }, L);
    }
    function M(T) {
      if (!T) return "Unknown";
      const P = 1024 * 1024 * 1024, L = 1024 * 1024;
      return T >= P ? `${(T / P).toFixed(1)} GB` : T >= L ? `${(T / L).toFixed(0)} MB` : `${(T / 1024).toFixed(0)} KB`;
    }
    function x(T) {
      navigator.clipboard.writeText(T), I("Copied to clipboard!");
    }
    async function E(T) {
      try {
        await c(T), I("Opening file location...");
      } catch {
        I("Failed to open location", "error");
      }
    }
    async function H() {
      if (!(!v.value.trim() || !u.value)) {
        g.value = !0, p.value = null, _.value = null;
        try {
          await l(u.value.hash, v.value.trim()), _.value = "Source added successfully!", v.value = "", await B();
        } catch (T) {
          p.value = T instanceof Error ? T.message : "Failed to add source";
        } finally {
          g.value = !1;
        }
      }
    }
    async function K(T) {
      if (u.value) {
        w.value = T, p.value = null, _.value = null;
        try {
          await i(u.value.hash, T), I("Source removed"), await B();
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
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return Qe(B), (T, P) => {
      var L;
      return a(), r(j, null, [
        S(ft, {
          title: `Model Details: ${((L = u.value) == null ? void 0 : L.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          onClose: P[5] || (P[5] = (le) => T.$emit("close"))
        }, {
          body: h(() => {
            var le, Z, z, W;
            return [
              u.value ? (a(), r("div", A0, [
                t("section", U0, [
                  t("div", N0, [
                    P[6] || (P[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", z0, f(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: P[0] || (P[0] = (Y) => x(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", F0, [
                    P[7] || (P[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", B0, f(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: P[1] || (P[1] = (Y) => x(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", V0, [
                    P[8] || (P[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", W0, f(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: P[2] || (P[2] = (Y) => x(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", G0, [
                    P[9] || (P[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", j0, f(M(u.value.size)), 1)
                  ]),
                  t("div", H0, [
                    P[10] || (P[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", K0, f(u.value.category), 1)
                  ]),
                  t("div", q0, [
                    P[11] || (P[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", Y0, f(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", J0, [
                  t("h4", Q0, "Locations (" + f(((le = u.value.locations) == null ? void 0 : le.length) || 0) + ")", 1),
                  (Z = u.value.locations) != null && Z.length ? (a(), r("div", X0, [
                    (a(!0), r(j, null, ge(u.value.locations, (Y, A) => (a(), r("div", {
                      key: A,
                      class: "location-item"
                    }, [
                      t("span", Z0, f(Y.path), 1),
                      Y.modified ? (a(), r("span", ew, "Modified: " + f(Y.modified), 1)) : y("", !0),
                      Y.path ? (a(), r("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (se) => E(Y.path)
                      }, " Open File Location ", 8, tw)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), r("div", sw, "No locations found"))
                ]),
                t("section", ow, [
                  t("h4", nw, "Download Sources (" + f(((z = u.value.sources) == null ? void 0 : z.length) || 0) + ")", 1),
                  (W = u.value.sources) != null && W.length ? (a(), r("div", aw, [
                    (a(!0), r(j, null, ge(u.value.sources, (Y, A) => (a(), r("div", {
                      key: A,
                      class: "source-item"
                    }, [
                      t("span", lw, f(Y.type) + ":", 1),
                      t("a", {
                        href: Y.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(Y.url), 9, iw),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === Y.url,
                        onClick: (se) => K(Y.url)
                      }, f(w.value === Y.url ? "..." : "×"), 9, rw)
                    ]))), 128))
                  ])) : (a(), r("div", cw, " No download sources configured ")),
                  t("div", uw, [
                    qe(t("input", {
                      "onUpdate:modelValue": P[3] || (P[3] = (Y) => v.value = Y),
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
                    }, f(g.value ? "Adding..." : "Add Source"), 9, dw)
                  ]),
                  p.value ? (a(), r("p", fw, f(p.value), 1)) : y("", !0),
                  _.value ? (a(), r("p", mw, f(_.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            t("button", {
              class: "btn-secondary",
              onClick: P[4] || (P[4] = (le) => T.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (a(), D(_t, { to: "body" }, [
          C.value ? (a(), r("div", {
            key: 0,
            class: Ie(["toast", C.value.type])
          }, f(C.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), ol = /* @__PURE__ */ ve(vw, [["__scopeId", "data-v-f15cbb56"]]), pw = /* @__PURE__ */ fe({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: n, getStatus: l } = tt(), i = k([]), c = k([]), u = k("production"), d = k(!1), m = k(null), v = k(""), g = k(!1), w = k(null);
    function p() {
      g.value = !1, o("navigate", "model-index");
    }
    const _ = U(
      () => i.value.reduce((B, T) => B + (T.size || 0), 0)
    ), C = U(() => {
      if (!v.value.trim()) return i.value;
      const B = v.value.toLowerCase();
      return i.value.filter((T) => T.filename.toLowerCase().includes(B));
    }), b = U(() => {
      if (!v.value.trim()) return c.value;
      const B = v.value.toLowerCase();
      return c.value.filter((T) => T.filename.toLowerCase().includes(B));
    }), I = U(() => {
      const B = {};
      for (const P of C.value) {
        const L = P.type || "other";
        B[L] || (B[L] = []), B[L].push(P);
      }
      const T = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(B).sort(([P], [L]) => {
        const le = T.indexOf(P), Z = T.indexOf(L);
        return le >= 0 && Z >= 0 ? le - Z : le >= 0 ? -1 : Z >= 0 ? 1 : P.localeCompare(L);
      }).map(([P, L]) => ({ type: P, models: L }));
    });
    function M(B) {
      if (!B) return "Unknown";
      const T = B / (1024 * 1024);
      return T >= 1024 ? `${(T / 1024).toFixed(1)} GB` : `${T.toFixed(0)} MB`;
    }
    function x(B) {
      w.value = B.hash || B.filename;
    }
    function E(B) {
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
        const T = await l();
        u.value = T.environment || "production";
      } catch (B) {
        m.value = B instanceof Error ? B.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return Qe(K), (B, T) => (a(), r(j, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (P) => g.value = !0)
          })
        ]),
        search: h(() => [
          S($o, {
            modelValue: v.value,
            "onUpdate:modelValue": T[1] || (T[1] = (P) => v.value = P),
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
                $(" Total: " + f(i.value.length) + " models • " + f(M(_.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(j, null, ge(I.value, (P) => (a(), D(lt, {
              key: P.type,
              title: P.type.toUpperCase(),
              count: P.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(j, null, ge(P.models, (L) => (a(), D(Et, {
                  key: L.hash || L.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...T[4] || (T[4] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(f(L.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(M(L.size)), 1)
                  ]),
                  details: h(() => [
                    S(dt, {
                      label: "Used by:",
                      value: (L.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    S(dt, {
                      label: "Path:",
                      value: L.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(ue, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => x(L)
                    }, {
                      default: h(() => [...T[5] || (T[5] = [
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
                (a(!0), r(j, null, ge(b.value, (P) => (a(), D(Et, {
                  key: P.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...T[6] || (T[6] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(P.filename), 1)
                  ]),
                  subtitle: h(() => [...T[7] || (T[7] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var L;
                    return [
                      S(dt, {
                        label: "Required by:",
                        value: ((L = P.workflow_names) == null ? void 0 : L.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    S(ue, {
                      variant: "primary",
                      size: "sm",
                      onClick: (L) => H(P.filename)
                    }, {
                      default: h(() => [...T[8] || (T[8] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ue, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (L) => E(P.filename)
                    }, {
                      default: h(() => [...T[9] || (T[9] = [
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
            !C.value.length && !b.value.length ? (a(), D(ns, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      S(as, {
        show: g.value,
        title: "About Environment Models",
        onClose: T[2] || (T[2] = (P) => g.value = !1)
      }, {
        content: h(() => [
          t("p", null, [
            T[10] || (T[10] = $(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + f(u.value) + '"', 1),
            T[11] || (T[11] = $(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          S(ue, {
            variant: "primary",
            onClick: p
          }, {
            default: h(() => [...T[12] || (T[12] = [
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
        onClose: T[3] || (T[3] = (P) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), gw = /* @__PURE__ */ ve(pw, [["__scopeId", "data-v-cb4f12b3"]]), hw = ["disabled"], yw = { class: "dropdown-value" }, ww = ["onClick"], _w = {
  key: 0,
  class: "dropdown-error"
}, kw = /* @__PURE__ */ fe({
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
    const o = e, n = s, l = k(!1), i = k(null), c = k(null), u = k({});
    function d(I) {
      return typeof I == "string" ? I : I.value;
    }
    function m(I) {
      return typeof I == "string" ? I : I.label;
    }
    const v = U(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const I = o.options.find((M) => d(M) === o.modelValue);
      return I ? m(I) : String(o.modelValue);
    });
    function g() {
      o.disabled || (l.value = !l.value);
    }
    function w() {
      l.value = !1;
    }
    function p(I) {
      n("update:modelValue", d(I)), w();
    }
    function _() {
      if (!i.value) return;
      const I = i.value.getBoundingClientRect(), M = window.innerHeight, x = M - I.bottom, E = I.top, H = Math.min(300, o.options.length * 36 + 8), K = x < H && E > x;
      u.value = {
        position: "fixed",
        left: `${I.left}px`,
        width: `${I.width}px`,
        maxHeight: "300px",
        ...K ? { bottom: `${M - I.top + 4}px` } : { top: `${I.bottom + 4}px` }
      };
    }
    gt(l, async (I) => {
      I && (await yt(), _());
    });
    function C() {
      l.value && _();
    }
    function b(I) {
      I.key === "Escape" && l.value && w();
    }
    return Qe(() => {
      window.addEventListener("scroll", C, !0), window.addEventListener("keydown", b);
    }), Ws(() => {
      window.removeEventListener("scroll", C, !0), window.removeEventListener("keydown", b);
    }), (I, M) => (a(), r("div", {
      class: "base-dropdown",
      ref_key: "dropdownRef",
      ref: i
    }, [
      t("button", {
        type: "button",
        class: Ie(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: g
      }, [
        t("span", yw, f(v.value), 1),
        M[0] || (M[0] = t("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, hw),
      (a(), D(_t, { to: "body" }, [
        l.value ? (a(), r("div", {
          key: 0,
          class: "dropdown-overlay",
          onClick: w
        })) : y("", !0),
        l.value ? (a(), r("div", {
          key: 1,
          ref_key: "menuRef",
          ref: c,
          class: "dropdown-menu",
          style: Ft(u.value)
        }, [
          (a(!0), r(j, null, ge(e.options, (x) => (a(), r("div", {
            key: d(x),
            class: Ie(["dropdown-option", { selected: d(x) === e.modelValue }]),
            onClick: (E) => p(x)
          }, f(m(x)), 11, ww))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (a(), r("span", _w, f(e.error), 1)) : y("", !0)
    ], 512));
  }
}), bw = /* @__PURE__ */ ve(kw, [["__scopeId", "data-v-857e085b"]]);
function $w(e) {
  const s = e.toLowerCase();
  return s === "huggingface.co" || s.endsWith(".huggingface.co") || s === "hf.co";
}
function Cw(e) {
  const s = e.trim();
  if (!s) return { kind: "unknown" };
  let o;
  try {
    o = new URL(s);
  } catch {
    return { kind: "unknown" };
  }
  if (!$w(o.hostname)) return { kind: "unknown" };
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
function xw(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function Sw(e, s, o) {
  const [n, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(n)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(s)}/${xw(o)}`;
}
const Iw = { class: "hf-file-browser" }, Ew = { class: "browser-header" }, Tw = { class: "repo-info" }, Pw = { class: "repo-id" }, Rw = {
  key: 0,
  class: "revision-pill"
}, Mw = {
  key: 0,
  class: "loading-state"
}, Dw = {
  key: 1,
  class: "error-state"
}, Lw = { class: "toolbar" }, Ow = { class: "toolbar-actions" }, Aw = { class: "file-list-container" }, Uw = {
  key: 0,
  class: "file-list-header"
}, Nw = ["checked", "indeterminate"], zw = { class: "sort-indicator" }, Fw = { class: "sort-indicator" }, Bw = {
  key: 1,
  class: "empty-state"
}, Vw = {
  key: 2,
  class: "file-list"
}, Ww = ["onClick"], Gw = ["checked", "onChange"], jw = { class: "file-path" }, Hw = { class: "file-size" }, Kw = { class: "destination-section" }, qw = { class: "destination-row" }, Yw = {
  key: 0,
  class: "path-separator"
}, Jw = { class: "action-bar" }, Qw = { class: "summary-info" }, Xw = { class: "summary-count" }, Zw = { class: "summary-size" }, e_ = /* @__PURE__ */ fe({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: i } = tt(), c = k([]), u = k(/* @__PURE__ */ new Set()), d = k(!1), m = k(null), v = k(""), g = k(!1), w = k("name"), p = k(!0), _ = k(""), C = k(""), b = k(""), I = k([]), M = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, x = U(() => {
      let ce = c.value;
      if (o.initialPath) {
        const pe = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        ce = ce.filter((Se) => Se.path.startsWith(pe) || Se.path === o.initialPath);
      }
      if (g.value && (ce = ce.filter((pe) => pe.is_model_file)), v.value.trim()) {
        const pe = v.value.toLowerCase();
        ce = ce.filter((Se) => Se.path.toLowerCase().includes(pe));
      }
      return ce;
    }), E = U(() => {
      const ce = [...x.value];
      return ce.sort((pe, Se) => {
        let Fe;
        return w.value === "name" ? Fe = pe.path.localeCompare(Se.path) : Fe = pe.size - Se.size, p.value ? Fe : -Fe;
      }), ce;
    }), H = U(() => x.value.length === 0 ? !1 : x.value.every((ce) => u.value.has(ce.path))), K = U(() => x.value.some((ce) => u.value.has(ce.path))), B = U(() => {
      const ce = I.value.map((pe) => ({
        label: pe,
        value: pe
      }));
      return ce.push({ label: "Custom path...", value: "__custom__" }), ce;
    }), T = U(() => _.value === "__custom__" ? b.value.trim().length > 0 : _.value.length > 0), P = U(() => {
      let ce = 0;
      for (const pe of u.value) {
        const Se = c.value.find((Fe) => Fe.path === pe);
        Se && (ce += Se.size);
      }
      return ce;
    });
    function L(ce) {
      if (ce === 0) return "0 B";
      const pe = 1024 * 1024 * 1024, Se = 1024 * 1024, Fe = 1024;
      return ce >= pe ? `${(ce / pe).toFixed(2)} GB` : ce >= Se ? `${(ce / Se).toFixed(1)} MB` : ce >= Fe ? `${(ce / Fe).toFixed(0)} KB` : `${ce} B`;
    }
    function le(ce) {
      const pe = ce.match(M);
      return pe ? `${pe[1]}${pe[4]}` : null;
    }
    function Z(ce) {
      const pe = new Set(u.value), Se = pe.has(ce.path), Fe = ce.shard_group || le(ce.path);
      if (Fe) {
        const ze = c.value.filter((Te) => (Te.shard_group || le(Te.path)) === Fe);
        Se ? ze.forEach((Te) => pe.delete(Te.path)) : ze.forEach((Te) => pe.add(Te.path));
      } else
        Se ? pe.delete(ce.path) : pe.add(ce.path);
      u.value = pe;
    }
    function z() {
      const ce = new Set(u.value);
      for (const pe of x.value)
        pe.is_model_file && ce.add(pe.path);
      u.value = ce;
    }
    function W() {
      u.value = /* @__PURE__ */ new Set();
    }
    function Y() {
      if (H.value) {
        const ce = new Set(u.value);
        for (const pe of x.value)
          ce.delete(pe.path);
        u.value = ce;
      } else {
        const ce = new Set(u.value);
        for (const pe of x.value)
          ce.add(pe.path);
        u.value = ce;
      }
    }
    function A(ce) {
      w.value === ce ? p.value = !p.value : (w.value = ce, p.value = !0);
    }
    function se() {
      return _.value === "__custom__" ? b.value.trim() : C.value.trim() ? `${_.value}/${C.value.trim()}` : _.value;
    }
    function X() {
      if (u.value.size === 0 || !T.value) return;
      const ce = se(), pe = [];
      for (const Se of u.value) {
        const Fe = c.value.find((ze) => ze.path === Se);
        Fe && pe.push({
          url: Sw(o.repoId, o.revision, Fe.path),
          destination: ce,
          filename: Fe.path.split("/").pop() || Fe.path
        });
      }
      n("queue", pe);
    }
    async function ye() {
      if (o.repoId) {
        d.value = !0, m.value = null;
        try {
          const ce = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, pe = await l(ce);
          if (c.value = pe.files, o.preselectedFile) {
            const Se = c.value.find((Fe) => Fe.path === o.preselectedFile);
            Se && Z(Se);
          }
        } catch (ce) {
          m.value = ce instanceof Error ? ce.message : "Failed to load repository";
        } finally {
          d.value = !1;
        }
      }
    }
    async function _e() {
      try {
        const ce = await i();
        I.value = ce.directories, ce.directories.length > 0 && !_.value && (_.value = ce.directories[0]);
      } catch {
        I.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], _.value || (_.value = "checkpoints");
      }
    }
    return gt(() => [o.repoId, o.revision], () => {
      o.repoId && ye();
    }, { immediate: !1 }), Qe(() => {
      ye(), _e();
    }), (ce, pe) => (a(), r("div", Iw, [
      t("div", Ew, [
        t("button", {
          class: "back-btn",
          onClick: pe[0] || (pe[0] = (Se) => ce.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", Tw, [
          t("span", Pw, f(e.repoId), 1),
          e.revision ? (a(), r("span", Rw, f(e.revision), 1)) : y("", !0)
        ])
      ]),
      d.value ? (a(), r("div", Mw, " Loading repository files... ")) : m.value ? (a(), r("div", Dw, f(m.value), 1)) : (a(), r(j, { key: 2 }, [
        t("div", Lw, [
          S(Tt, {
            modelValue: v.value,
            "onUpdate:modelValue": pe[1] || (pe[1] = (Se) => v.value = Se),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", Ow, [
            t("button", {
              class: Ie(["toggle-btn", { active: g.value }]),
              onClick: pe[2] || (pe[2] = (Se) => g.value = !g.value)
            }, f(g.value ? "Models Only" : "All Files"), 3),
            t("button", {
              class: "action-btn",
              onClick: z
            }, "Auto-Select Models"),
            t("button", {
              class: "action-btn",
              onClick: W
            }, "Clear")
          ])
        ]),
        t("div", Aw, [
          x.value.length > 0 ? (a(), r("div", Uw, [
            t("input", {
              type: "checkbox",
              checked: H.value,
              indeterminate: K.value && !H.value,
              class: "file-checkbox",
              onChange: Y
            }, null, 40, Nw),
            t("span", {
              class: "header-name",
              onClick: pe[3] || (pe[3] = (Se) => A("name"))
            }, [
              pe[9] || (pe[9] = $(" Name ", -1)),
              t("span", zw, f(w.value === "name" ? p.value ? "▲" : "▼" : ""), 1)
            ]),
            t("span", {
              class: "header-size",
              onClick: pe[4] || (pe[4] = (Se) => A("size"))
            }, [
              pe[10] || (pe[10] = $(" Size ", -1)),
              t("span", Fw, f(w.value === "size" ? p.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          x.value.length === 0 ? (a(), r("div", Bw, f(c.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (a(), r("div", Vw, [
            (a(!0), r(j, null, ge(E.value, (Se) => (a(), r("div", {
              key: Se.path,
              class: Ie(["file-item", { selected: u.value.has(Se.path) }]),
              onClick: (Fe) => Z(Se)
            }, [
              t("input", {
                type: "checkbox",
                checked: u.value.has(Se.path),
                class: "file-checkbox",
                onClick: pe[5] || (pe[5] = it(() => {
                }, ["stop"])),
                onChange: (Fe) => Z(Se)
              }, null, 40, Gw),
              t("span", jw, f(Se.path), 1),
              t("span", Hw, f(L(Se.size)), 1)
            ], 10, Ww))), 128))
          ]))
        ]),
        t("div", Kw, [
          pe[11] || (pe[11] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", qw, [
            S(bw, {
              modelValue: _.value,
              "onUpdate:modelValue": pe[6] || (pe[6] = (Se) => _.value = Se),
              options: B.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            _.value !== "__custom__" ? (a(), r("span", Yw, "/")) : y("", !0),
            _.value !== "__custom__" ? (a(), D(Tt, {
              key: 1,
              modelValue: C.value,
              "onUpdate:modelValue": pe[7] || (pe[7] = (Se) => C.value = Se),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : y("", !0)
          ]),
          _.value === "__custom__" ? (a(), D(Tt, {
            key: 0,
            modelValue: b.value,
            "onUpdate:modelValue": pe[8] || (pe[8] = (Se) => b.value = Se),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : y("", !0)
        ]),
        t("div", Jw, [
          t("div", Qw, [
            t("span", Xw, f(u.value.size) + " file(s) selected", 1),
            t("span", Zw, f(L(P.value)), 1)
          ]),
          S(Me, {
            variant: "primary",
            disabled: u.value.size === 0 || !T.value,
            onClick: X
          }, {
            default: h(() => [...pe[12] || (pe[12] = [
              $(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), t_ = /* @__PURE__ */ ve(e_, [["__scopeId", "data-v-f00ee703"]]), s_ = { class: "huggingface-tab" }, o_ = {
  key: 0,
  class: "search-section"
}, n_ = { class: "search-bar" }, a_ = {
  key: 1,
  class: "search-results"
}, l_ = {
  key: 0,
  class: "loading-state"
}, i_ = {
  key: 1,
  class: "error-state"
}, r_ = {
  key: 2,
  class: "results-list"
}, c_ = ["onClick"], u_ = { class: "repo-header" }, d_ = { class: "repo-id" }, f_ = { class: "repo-stats" }, m_ = {
  class: "stat",
  title: "Downloads"
}, v_ = {
  class: "stat",
  title: "Likes"
}, p_ = {
  key: 0,
  class: "repo-desc"
}, g_ = {
  key: 1,
  class: "repo-tags"
}, h_ = {
  key: 3,
  class: "empty-state"
}, y_ = {
  key: 4,
  class: "hint-state"
}, w_ = /* @__PURE__ */ fe({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: s } = tt(), o = k("search"), n = k(""), l = k([]), i = k(!1), c = k(null), u = k(!1), d = k(null), m = k("main"), v = k(), g = k();
    function w(b) {
      return b >= 1e6 ? `${(b / 1e6).toFixed(1)}M` : b >= 1e3 ? `${(b / 1e3).toFixed(1)}K` : String(b);
    }
    async function p() {
      const b = n.value.trim();
      if (!b) return;
      c.value = null;
      const I = Cw(b);
      if (I.kind === "file" && I.repoId && I.path) {
        d.value = I.repoId, m.value = I.revision || "main";
        const M = I.path.split("/");
        M.length > 1 ? v.value = M.slice(0, -1).join("/") : v.value = void 0, g.value = I.path, o.value = "browse";
        return;
      }
      if (I.kind === "repo" && I.repoId) {
        d.value = I.repoId, m.value = I.revision || "main", v.value = I.path, g.value = void 0, o.value = "browse";
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
    function _(b) {
      d.value = b, m.value = "main", v.value = void 0, g.value = void 0, o.value = "browse";
    }
    function C() {
      o.value = "search", d.value = null, v.value = void 0, g.value = void 0;
    }
    return (b, I) => (a(), r("div", s_, [
      o.value === "search" ? (a(), r("div", o_, [
        t("div", n_, [
          S(Tt, {
            modelValue: n.value,
            "onUpdate:modelValue": I[0] || (I[0] = (M) => n.value = M),
            placeholder: "Search repos, paste URL, or enter user/repo...",
            onKeydown: Kt(p, ["enter"])
          }, null, 8, ["modelValue"]),
          S(Me, {
            variant: "primary",
            onClick: p,
            loading: i.value
          }, {
            default: h(() => [...I[2] || (I[2] = [
              $(" Search ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ])) : y("", !0),
      o.value === "search" ? (a(), r("div", a_, [
        i.value ? (a(), r("div", l_, " Searching HuggingFace... ")) : c.value ? (a(), r("div", i_, f(c.value), 1)) : l.value.length > 0 ? (a(), r("div", r_, [
          (a(!0), r(j, null, ge(l.value, (M) => (a(), r("div", {
            key: M.repo_id,
            class: "repo-card",
            onClick: (x) => _(M.repo_id)
          }, [
            t("div", u_, [
              t("span", d_, f(M.repo_id), 1),
              t("div", f_, [
                t("span", m_, [
                  I[3] || (I[3] = t("span", { class: "stat-icon" }, "↓", -1)),
                  $(" " + f(w(M.downloads)), 1)
                ]),
                t("span", v_, [
                  I[4] || (I[4] = t("span", { class: "stat-icon" }, "★", -1)),
                  $(" " + f(w(M.likes)), 1)
                ])
              ])
            ]),
            M.description ? (a(), r("p", p_, f(M.description), 1)) : y("", !0),
            M.tags.length > 0 ? (a(), r("div", g_, [
              (a(!0), r(j, null, ge(M.tags.slice(0, 5), (x) => (a(), r("span", {
                key: x,
                class: "tag"
              }, f(x), 1))), 128))
            ])) : y("", !0)
          ], 8, c_))), 128))
        ])) : u.value ? (a(), r("div", h_, " No repositories found ")) : (a(), r("div", y_, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (a(), D(t_, {
        key: 2,
        "repo-id": d.value,
        revision: m.value,
        "initial-path": v.value,
        "preselected-file": g.value,
        onBack: C,
        onQueue: I[1] || (I[1] = (M) => b.$emit("queue", M))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"]))
    ]));
  }
}), __ = /* @__PURE__ */ ve(w_, [["__scopeId", "data-v-d7828203"]]), k_ = { class: "civitai-tab" }, b_ = /* @__PURE__ */ fe({
  __name: "CivitaiTab",
  setup(e) {
    return (s, o) => (a(), r("div", k_, [...o[0] || (o[0] = [
      t("div", { class: "placeholder" }, [
        t("div", { class: "icon" }, "🎨"),
        t("h3", null, "Civitai Integration"),
        t("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), $_ = /* @__PURE__ */ ve(b_, [["__scopeId", "data-v-44948051"]]), C_ = { class: "direct-url-tab" }, x_ = { class: "input-group" }, S_ = { class: "input-group" }, I_ = {
  key: 0,
  class: "error"
}, E_ = { class: "actions" }, T_ = /* @__PURE__ */ fe({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: s }) {
    const o = s, n = k(""), l = k(""), i = U(() => {
      const d = l.value.trim();
      if (!d) return null;
      const m = d.replace(/\\/g, "/").split("/").pop() || "";
      return m.includes(".") && !m.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), c = U(() => n.value.trim() !== "" && l.value.trim() !== "" && !i.value), u = () => {
      if (!c.value) return;
      const d = l.value.replace(/\\/g, "/").split("/").pop() || "";
      o("queue", [{
        url: n.value.trim(),
        targetPath: l.value.trim(),
        filename: d
      }]), n.value = "", l.value = "";
    };
    return (d, m) => (a(), r("div", C_, [
      t("div", x_, [
        m[2] || (m[2] = t("label", null, "Download URL", -1)),
        S(Tt, {
          modelValue: n.value,
          "onUpdate:modelValue": m[0] || (m[0] = (v) => n.value = v),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      t("div", S_, [
        m[3] || (m[3] = t("label", null, "Target Path (relative to models directory)", -1)),
        S(Tt, {
          modelValue: l.value,
          "onUpdate:modelValue": m[1] || (m[1] = (v) => l.value = v),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        i.value ? (a(), r("p", I_, f(i.value), 1)) : y("", !0)
      ]),
      m[5] || (m[5] = t("p", { class: "note" }, "Model will be queued for background download.", -1)),
      t("div", E_, [
        S(Me, {
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
}), P_ = /* @__PURE__ */ ve(T_, [["__scopeId", "data-v-01def7aa"]]), R_ = { class: "download-modal" }, M_ = { class: "tab-bar" }, D_ = ["onClick"], L_ = { class: "tab-content" }, O_ = /* @__PURE__ */ fe({
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
    ], i = k("huggingface");
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
    return (m, v) => e.show ? (a(), D(ft, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: d
    }, {
      body: h(() => [
        t("div", R_, [
          t("div", M_, [
            (a(), r(j, null, ge(l, (g) => t("button", {
              key: g.id,
              class: Ie(["tab-btn", { active: i.value === g.id }]),
              onClick: (w) => i.value = g.id
            }, f(g.icon) + " " + f(g.label), 11, D_)), 64))
          ]),
          t("div", L_, [
            i.value === "huggingface" ? (a(), D(__, {
              key: 0,
              onQueue: c
            })) : i.value === "civitai" ? (a(), D($_, { key: 1 })) : i.value === "direct" ? (a(), D(P_, {
              key: 2,
              onQueue: u
            })) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        S(Me, {
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
}), A_ = /* @__PURE__ */ ve(O_, [["__scopeId", "data-v-90a9f401"]]), U_ = {
  key: 0,
  class: "indexing-progress"
}, N_ = { class: "progress-info" }, z_ = { class: "progress-label" }, F_ = { class: "progress-count" }, B_ = { class: "progress-bar" }, V_ = { class: "modal-content" }, W_ = { class: "modal-header" }, G_ = { class: "modal-body" }, j_ = { class: "input-group" }, H_ = { class: "current-path" }, K_ = { class: "input-group" }, q_ = { class: "modal-footer" }, Y_ = /* @__PURE__ */ fe({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: i
    } = tt(), c = s, u = k([]), d = k(!1), m = k(!1), v = k(null), g = k(""), w = k(!1), p = k(null), _ = k(!1), C = k(null), b = k(""), I = k(!1), M = k(!1), x = k(null), E = U(
      () => u.value.reduce((z, W) => z + (W.size || 0), 0)
    ), H = U(() => {
      if (!g.value.trim()) return u.value;
      const z = g.value.toLowerCase();
      return u.value.filter((W) => {
        const Y = W, A = W.sha256 || Y.sha256_hash || "";
        return W.filename.toLowerCase().includes(z) || A.toLowerCase().includes(z);
      });
    }), K = U(() => {
      const z = {};
      for (const Y of H.value) {
        const A = Y.type || "other";
        z[A] || (z[A] = []), z[A].push(Y);
      }
      const W = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(z).sort(([Y], [A]) => {
        const se = W.indexOf(Y), X = W.indexOf(A);
        return se >= 0 && X >= 0 ? se - X : se >= 0 ? -1 : X >= 0 ? 1 : Y.localeCompare(A);
      }).map(([Y, A]) => ({ type: Y, models: A }));
    });
    function B(z) {
      if (!z) return "Unknown";
      const W = 1024 * 1024 * 1024, Y = 1024 * 1024;
      return z >= W ? `${(z / W).toFixed(1)} GB` : z >= Y ? `${(z / Y).toFixed(0)} MB` : `${(z / 1024).toFixed(0)} KB`;
    }
    function T(z) {
      p.value = z.hash || z.filename;
    }
    async function P() {
      m.value = !0, v.value = null;
      try {
        const z = await n();
        await le(), z.changes > 0 && console.log(`Scan complete: ${z.changes} changes detected`);
      } catch (z) {
        v.value = z instanceof Error ? z.message : "Failed to scan models";
      } finally {
        m.value = !1;
      }
    }
    async function L() {
      if (b.value.trim()) {
        I.value = !0, v.value = null;
        try {
          const z = await i(b.value.trim());
          C.value = z.path, _.value = !1, b.value = "", await le(), console.log(`Directory changed: ${z.models_indexed} models indexed`), c("refresh");
        } catch (z) {
          v.value = z instanceof Error ? z.message : "Failed to change directory";
        } finally {
          I.value = !1;
        }
      }
    }
    async function le() {
      d.value = !0, v.value = null;
      try {
        u.value = await o();
      } catch (z) {
        v.value = z instanceof Error ? z.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function Z() {
      try {
        const z = await l();
        C.value = z.path;
      } catch {
      }
    }
    return Qe(() => {
      le(), Z();
    }), (z, W) => (a(), r(j, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: W[2] || (W[2] = (Y) => w.value = !0)
          }, {
            actions: h(() => [
              S(ue, {
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
              S(ue, {
                variant: "primary",
                size: "sm",
                onClick: W[0] || (W[0] = (Y) => _.value = !0)
              }, {
                default: h(() => [...W[11] || (W[11] = [
                  $(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              S(ue, {
                variant: "primary",
                size: "sm",
                onClick: W[1] || (W[1] = (Y) => M.value = !0)
              }, {
                default: h(() => [...W[12] || (W[12] = [
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
          x.value ? (a(), r("div", U_, [
            t("div", N_, [
              t("span", z_, f(x.value.message), 1),
              t("span", F_, f(x.value.current) + "/" + f(x.value.total), 1)
            ]),
            t("div", B_, [
              t("div", {
                class: "progress-fill",
                style: Ft({ width: `${x.value.current / x.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          S($o, {
            modelValue: g.value,
            "onUpdate:modelValue": W[3] || (W[3] = (Y) => g.value = Y),
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
            onRetry: le
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            u.value.length ? (a(), D(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(u.value.length) + " models • " + f(B(E.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(j, null, ge(K.value, (Y) => (a(), D(lt, {
              key: Y.type,
              title: Y.type.toUpperCase(),
              count: Y.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (a(!0), r(j, null, ge(Y.models, (A) => (a(), D(Et, {
                  key: A.sha256 || A.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...W[13] || (W[13] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(f(A.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(B(A.size)), 1)
                  ]),
                  details: h(() => [
                    S(dt, {
                      label: "Hash:",
                      value: A.hash ? A.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(ue, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (se) => T(A)
                    }, {
                      default: h(() => [...W[14] || (W[14] = [
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
      S(as, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: W[4] || (W[4] = (Y) => w.value = !1)
      }, {
        content: h(() => [...W[15] || (W[15] = [
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
        onClose: W[5] || (W[5] = (Y) => p.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (a(), D(_t, { to: "body" }, [
        _.value ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: W[9] || (W[9] = it((Y) => _.value = !1, ["self"]))
        }, [
          t("div", V_, [
            t("div", W_, [
              W[16] || (W[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: W[6] || (W[6] = (Y) => _.value = !1)
              }, "✕")
            ]),
            t("div", G_, [
              t("div", j_, [
                W[17] || (W[17] = t("label", null, "Current Directory", -1)),
                t("code", H_, f(C.value || "Not set"), 1)
              ]),
              t("div", K_, [
                W[18] || (W[18] = t("label", null, "New Directory Path", -1)),
                S(Tt, {
                  modelValue: b.value,
                  "onUpdate:modelValue": W[7] || (W[7] = (Y) => b.value = Y),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              W[19] || (W[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", q_, [
              S(Me, {
                variant: "secondary",
                onClick: W[8] || (W[8] = (Y) => _.value = !1)
              }, {
                default: h(() => [...W[20] || (W[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              S(Me, {
                variant: "primary",
                disabled: !b.value.trim() || I.value,
                loading: I.value,
                onClick: L
              }, {
                default: h(() => [
                  $(f(I.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      S(A_, {
        show: M.value,
        onClose: W[10] || (W[10] = (Y) => M.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), J_ = /* @__PURE__ */ ve(Y_, [["__scopeId", "data-v-3705114c"]]), Q_ = { class: "node-details" }, X_ = { class: "status-row" }, Z_ = {
  key: 0,
  class: "detail-row"
}, ek = { class: "value" }, tk = { class: "detail-row" }, sk = { class: "value" }, ok = {
  key: 1,
  class: "detail-row"
}, nk = { class: "value mono" }, ak = {
  key: 2,
  class: "detail-row"
}, lk = ["href"], ik = {
  key: 3,
  class: "detail-row"
}, rk = { class: "value mono small" }, ck = { class: "detail-row" }, uk = {
  key: 0,
  class: "value"
}, dk = {
  key: 1,
  class: "workflow-list"
}, fk = /* @__PURE__ */ fe({
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
    return (u, d) => (a(), D(ft, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (m) => n("close"))
    }, {
      body: h(() => [
        t("div", Q_, [
          t("div", X_, [
            d[2] || (d[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Ie(["status-badge", l.value])
            }, f(i.value), 3)
          ]),
          e.node.version ? (a(), r("div", Z_, [
            d[3] || (d[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", ek, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          t("div", tk, [
            d[4] || (d[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", sk, f(c.value), 1)
          ]),
          e.node.registry_id ? (a(), r("div", ok, [
            d[5] || (d[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", nk, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), r("div", ak, [
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
            ], 8, lk)
          ])) : y("", !0),
          e.node.download_url ? (a(), r("div", ik, [
            d[8] || (d[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", rk, f(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", ck, [
            d[9] || (d[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), r("span", uk, " Not used in any workflows ")) : (a(), r("div", dk, [
              (a(!0), r(j, null, ge(e.node.used_in_workflows, (m) => (a(), r("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        S(Me, {
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
}), mk = /* @__PURE__ */ ve(fk, [["__scopeId", "data-v-b342f626"]]), vk = { class: "dialog-message" }, pk = {
  key: 0,
  class: "dialog-details"
}, gk = {
  key: 1,
  class: "dialog-warning"
}, hk = /* @__PURE__ */ fe({
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
    return (s, o) => (a(), D(ft, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => s.$emit("cancel"))
    }, {
      body: h(() => [
        t("p", vk, f(e.message), 1),
        e.details && e.details.length ? (a(), r("div", pk, [
          (a(!0), r(j, null, ge(e.details, (n, l) => (a(), r("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), r("p", gk, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          $(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        S(Me, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => s.$emit("cancel"))
        }, {
          default: h(() => [
            $(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), D(Me, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => s.$emit("secondary"))
        }, {
          default: h(() => [
            $(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        S(Me, {
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
}), nl = /* @__PURE__ */ ve(hk, [["__scopeId", "data-v-3670b9f5"]]), yk = { class: "mismatch-warning" }, wk = { class: "version-mismatch" }, _k = { class: "version-actual" }, kk = { class: "version-expected" }, bk = { key: 0 }, $k = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Ck = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, xk = /* @__PURE__ */ fe({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getNodes: l, trackNodeAsDev: i, installNode: c, uninstallNode: u } = tt(), d = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), m = k(!1), v = k(null), g = k(""), w = k(!1), p = k(null), _ = k(null), C = U(() => {
      if (!g.value.trim()) return d.value.nodes;
      const Z = g.value.toLowerCase();
      return d.value.nodes.filter(
        (z) => {
          var W, Y;
          return z.name.toLowerCase().includes(Z) || ((W = z.description) == null ? void 0 : W.toLowerCase().includes(Z)) || ((Y = z.repository) == null ? void 0 : Y.toLowerCase().includes(Z));
        }
      );
    }), b = U(
      () => C.value.filter((Z) => Z.installed && Z.tracked)
    ), I = U(
      () => C.value.filter((Z) => !Z.installed && Z.tracked)
    ), M = U(
      () => C.value.filter((Z) => Z.installed && !Z.tracked)
    );
    function x(Z) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[Z] || Z;
    }
    const E = U(() => o.versionMismatches.length > 0);
    function H(Z) {
      return !Z.used_in_workflows || Z.used_in_workflows.length === 0 ? "Not used in any workflows" : Z.used_in_workflows.length === 1 ? Z.used_in_workflows[0] : `${Z.used_in_workflows.length} workflows`;
    }
    function K(Z) {
      p.value = Z;
    }
    function B() {
      n("open-node-manager");
    }
    function T(Z) {
      _.value = {
        title: "Track as Development Node",
        message: `Track "${Z}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const z = await i(Z);
            z.status === "success" ? (n("toast", `✓ Node "${Z}" tracked as development`, "success"), await le()) : n("toast", `Failed to track node: ${z.message || "Unknown error"}`, "error");
          } catch (z) {
            n("toast", `Error tracking node: ${z instanceof Error ? z.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function P(Z) {
      _.value = {
        title: "Remove Untracked Node",
        message: `Remove "${Z}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const z = await u(Z);
            z.status === "success" ? (n("toast", `✓ Node "${Z}" removed`, "success"), await le()) : n("toast", `Failed to remove node: ${z.message || "Unknown error"}`, "error");
          } catch (z) {
            n("toast", `Error removing node: ${z instanceof Error ? z.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function L(Z) {
      _.value = {
        title: "Install Missing Node",
        message: `Install "${Z}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const z = await c(Z);
            z.status === "success" ? (n("toast", `✓ Node "${Z}" installed`, "success"), await le()) : n("toast", `Failed to install node: ${z.message || "Unknown error"}`, "error");
          } catch (z) {
            n("toast", `Error installing node: ${z instanceof Error ? z.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    async function le() {
      m.value = !0, v.value = null;
      try {
        d.value = await l();
      } catch (Z) {
        v.value = Z instanceof Error ? Z.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return Qe(le), (Z, z) => (a(), r(j, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (W) => w.value = !0)
          }, {
            actions: h(() => [
              S(ue, {
                variant: "primary",
                size: "sm",
                onClick: B
              }, {
                default: h(() => [...z[7] || (z[7] = [
                  $(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          S($o, {
            modelValue: g.value,
            "onUpdate:modelValue": z[1] || (z[1] = (W) => g.value = W),
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
            onRetry: le
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
            E.value ? (a(), D(lt, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                t("div", yk, [
                  z[8] || (z[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), r(j, null, ge(e.versionMismatches, (W) => (a(), D(Et, {
                  key: W.name,
                  status: "warning"
                }, {
                  icon: h(() => [...z[9] || (z[9] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(W.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", wk, [
                      t("span", _k, f(W.actual), 1),
                      z[10] || (z[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", kk, f(W.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    S(ue, {
                      variant: "warning",
                      size: "sm",
                      onClick: z[2] || (z[2] = (Y) => n("repair-environment"))
                    }, {
                      default: h(() => [...z[11] || (z[11] = [
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
                (a(!0), r(j, null, ge(M.value, (W) => (a(), D(Et, {
                  key: W.name,
                  status: "warning"
                }, {
                  icon: h(() => [...z[12] || (z[12] = [
                    $("?", -1)
                  ])]),
                  title: h(() => [
                    $(f(W.name), 1)
                  ]),
                  subtitle: h(() => [...z[13] || (z[13] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    S(dt, {
                      label: "Used by:",
                      value: H(W)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(ue, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => K(W)
                    }, {
                      default: h(() => [...z[14] || (z[14] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ue, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => T(W.name)
                    }, {
                      default: h(() => [...z[15] || (z[15] = [
                        $(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ue, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Y) => P(W.name)
                    }, {
                      default: h(() => [...z[16] || (z[16] = [
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
                (a(!0), r(j, null, ge(b.value, (W) => (a(), D(Et, {
                  key: W.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    $(f(W.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    $(f(W.name), 1)
                  ]),
                  subtitle: h(() => [
                    W.version ? (a(), r("span", bk, f(W.source === "development" ? "" : "v") + f(W.version), 1)) : (a(), r("span", $k, "version unknown")),
                    t("span", Ck, " • " + f(x(W.source)), 1)
                  ]),
                  details: h(() => [
                    S(dt, {
                      label: "Used by:",
                      value: H(W)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(ue, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => K(W)
                    }, {
                      default: h(() => [...z[17] || (z[17] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ue, {
                      variant: "secondary",
                      size: "xs",
                      onClick: B
                    }, {
                      default: h(() => [...z[18] || (z[18] = [
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
            I.value.length ? (a(), D(lt, {
              key: 4,
              title: "MISSING",
              count: I.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(j, null, ge(I.value, (W) => (a(), D(Et, {
                  key: W.name,
                  status: "missing"
                }, {
                  icon: h(() => [...z[19] || (z[19] = [
                    $("!", -1)
                  ])]),
                  title: h(() => [
                    $(f(W.name), 1)
                  ]),
                  subtitle: h(() => [...z[20] || (z[20] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    S(dt, {
                      label: "Required by:",
                      value: H(W)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(ue, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => K(W)
                    }, {
                      default: h(() => [...z[21] || (z[21] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ue, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => L(W.name)
                    }, {
                      default: h(() => [...z[22] || (z[22] = [
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
            !b.value.length && !I.value.length && !M.value.length ? (a(), D(ns, {
              key: 5,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      S(as, {
        show: w.value,
        title: "About Custom Nodes",
        onClose: z[4] || (z[4] = (W) => w.value = !1)
      }, {
        content: h(() => [...z[23] || (z[23] = [
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
          S(ue, {
            variant: "primary",
            onClick: z[3] || (z[3] = (W) => w.value = !1)
          }, {
            default: h(() => [...z[24] || (z[24] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), D(mk, {
        key: 0,
        node: p.value,
        onClose: z[5] || (z[5] = (W) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      _.value ? (a(), D(nl, {
        key: 1,
        title: _.value.title,
        message: _.value.message,
        warning: _.value.warning,
        "confirm-label": _.value.confirmLabel,
        destructive: _.value.destructive,
        onConfirm: _.value.onConfirm,
        onCancel: z[6] || (z[6] = (W) => _.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), Sk = /* @__PURE__ */ ve(xk, [["__scopeId", "data-v-1555a802"]]);
function Ir(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const Ik = { class: "remote-url-display" }, Ek = ["title"], Tk = ["title"], Pk = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Rk = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Mk = /* @__PURE__ */ fe({
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
    return (i, c) => (a(), r("div", Ik, [
      t("span", {
        class: "url-text",
        title: e.url
      }, f(n.value), 9, Ek),
      t("button", {
        class: Ie(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), r("svg", Rk, [...c[1] || (c[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), r("svg", Pk, [...c[0] || (c[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Tk)
    ]));
  }
}), Dk = /* @__PURE__ */ ve(Mk, [["__scopeId", "data-v-7768a58d"]]), Lk = { class: "remote-title" }, Ok = {
  key: 0,
  class: "default-badge"
}, Ak = {
  key: 1,
  class: "sync-badge"
}, Uk = {
  key: 0,
  class: "ahead"
}, Nk = {
  key: 1,
  class: "behind"
}, zk = {
  key: 1,
  class: "synced"
}, Fk = ["href"], Bk = {
  key: 1,
  class: "remote-url-text"
}, Vk = /* @__PURE__ */ fe({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = U(() => s.fetchingRemote === s.remote.name), n = U(() => s.remote.is_default), l = U(() => s.syncStatus && s.syncStatus.behind > 0), i = U(() => s.syncStatus && s.syncStatus.ahead > 0), c = U(() => s.remote.push_url !== s.remote.fetch_url), u = U(() => {
      const m = s.remote.fetch_url, v = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), d = U(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, v) => (a(), D(Et, {
      status: n.value ? "synced" : void 0
    }, oo({
      icon: h(() => [
        $(f(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        t("div", Lk, [
          t("span", null, f(e.remote.name), 1),
          n.value ? (a(), r("span", Ok, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", Ak, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", Uk, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", Nk, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", zk, "✓ synced"))
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
        }, f(d.value), 9, Fk)) : (a(), r("span", Bk, f(d.value), 1))
      ]),
      actions: h(() => [
        S(ue, {
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
        S(ue, {
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
        S(ue, {
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
        S(ue, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (g) => m.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            $(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? y("", !0) : (a(), D(ue, {
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
              S(Dk, {
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
}), Wk = /* @__PURE__ */ ve(Vk, [["__scopeId", "data-v-8310f3a8"]]), Gk = ["for"], jk = {
  key: 0,
  class: "base-form-field-required"
}, Hk = { class: "base-form-field-input" }, Kk = {
  key: 1,
  class: "base-form-field-error"
}, qk = {
  key: 2,
  class: "base-form-field-hint"
}, Yk = /* @__PURE__ */ fe({
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
      class: Ie(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), r("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        $(f(e.label) + " ", 1),
        e.required ? (a(), r("span", jk, "*")) : y("", !0)
      ], 8, Gk)) : y("", !0),
      t("div", Hk, [
        Ke(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), r("span", Kk, f(e.error), 1)) : e.hint ? (a(), r("span", qk, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), va = /* @__PURE__ */ ve(Yk, [["__scopeId", "data-v-9a1cf296"]]), Jk = { class: "remote-form" }, Qk = { class: "form-header" }, Xk = { class: "form-body" }, Zk = {
  key: 0,
  class: "form-error"
}, eb = { class: "form-actions" }, tb = /* @__PURE__ */ fe({
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
    gt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = U(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
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
    return (m, v) => (a(), r("div", Jk, [
      t("div", Qk, [
        S(Ut, null, {
          default: h(() => [
            $(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", Xk, [
        S(va, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            S(Tt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (g) => l.value.name = g),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        S(va, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            S(Tt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (g) => l.value.fetchUrl = g),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        S(va, { label: "Push URL (optional)" }, {
          default: h(() => [
            S(Tt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (g) => l.value.pushUrl = g),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (a(), r("div", Zk, f(c.value), 1)) : y("", !0)
      ]),
      t("div", eb, [
        S(ue, {
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
        S(ue, {
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
}), sb = /* @__PURE__ */ ve(tb, [["__scopeId", "data-v-56021b18"]]), ob = { class: "conflict-summary-box" }, nb = { class: "summary-header" }, ab = { class: "summary-text" }, lb = { key: 0 }, ib = {
  key: 1,
  class: "all-resolved"
}, rb = { class: "summary-progress" }, cb = { class: "progress-bar" }, ub = { class: "progress-text" }, db = /* @__PURE__ */ fe({
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
    return (n, l) => (a(), r("div", ob, [
      t("div", nb, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", ab, [
          t("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), r("p", lb, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (a(), r("p", ib, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      t("div", rb, [
        t("div", cb, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", ub, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), fb = /* @__PURE__ */ ve(db, [["__scopeId", "data-v-4e9e6cc9"]]), mb = { class: "modal-header" }, vb = { class: "modal-title" }, pb = { class: "modal-body" }, gb = {
  key: 0,
  class: "error-box"
}, hb = {
  key: 0,
  class: "error-hint"
}, yb = {
  key: 1,
  class: "loading-state"
}, wb = { class: "commit-summary" }, _b = {
  key: 0,
  class: "changes-section"
}, kb = {
  key: 0,
  class: "change-group",
  open: ""
}, bb = { class: "change-count" }, $b = { class: "change-list" }, Cb = {
  key: 0,
  class: "conflict-badge"
}, xb = {
  key: 1,
  class: "change-group"
}, Sb = { class: "change-count" }, Ib = { class: "change-list" }, Eb = {
  key: 2,
  class: "change-group"
}, Tb = { class: "change-count" }, Pb = { class: "change-list" }, Rb = {
  key: 2,
  class: "strategy-section"
}, Mb = { class: "radio-group" }, Db = { class: "radio-option" }, Lb = { class: "radio-option" }, Ob = { class: "radio-option" }, Ab = {
  key: 3,
  class: "up-to-date"
}, Ub = { class: "modal-actions" }, Xl = "comfygit.pullModelStrategy", Nb = /* @__PURE__ */ fe({
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
    const o = e, n = s, l = k(localStorage.getItem(Xl) || "skip");
    gt(l, (b) => {
      localStorage.setItem(Xl, b);
    });
    const i = U(() => {
      var b;
      return ((b = o.error) == null ? void 0 : b.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = U(() => {
      if (!o.preview) return 0;
      const b = o.preview.changes.workflows;
      return b.added.length + b.modified.length + b.deleted.length;
    }), u = U(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = U(() => {
      var b;
      return c.value > 0 || u.value > 0 || (((b = o.preview) == null ? void 0 : b.changes.models.count) || 0) > 0;
    }), m = U(() => o.preview && Ir(o.preview) ? o.preview : null), v = U(() => {
      var b;
      return ((b = m.value) == null ? void 0 : b.workflow_conflicts.length) ?? 0;
    }), g = U(() => {
      var b;
      return ((b = o.conflictResolutions) == null ? void 0 : b.size) ?? 0;
    }), w = U(
      () => v.value > 0 && g.value === v.value
    ), p = U(() => !(!o.preview || o.preview.has_uncommitted_changes || m.value && !w.value));
    function _(b) {
      if (!m.value) return !1;
      const I = b.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((M) => M.name === I);
    }
    function C(b) {
      const I = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: b, resolutions: I });
    }
    return (b, I) => {
      var M, x;
      return a(), D(_t, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[11] || (I[11] = (E) => b.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: I[10] || (I[10] = it(() => {
            }, ["stop"]))
          }, [
            t("div", mb, [
              t("h3", vb, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: I[0] || (I[0] = (E) => b.$emit("close"))
              }, "✕")
            ]),
            t("div", pb, [
              e.error ? (a(), r("div", gb, [
                I[13] || (I[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  I[12] || (I[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, f(e.error), 1),
                  i.value ? (a(), r("p", hb, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), r("div", yb, [...I[14] || (I[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (M = e.preview) != null && M.has_uncommitted_changes ? (a(), r(j, { key: 2 }, [
                I[15] || (I[15] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "UNCOMMITTED CHANGES"),
                    t("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                I[16] || (I[16] = t("div", { class: "options-section" }, [
                  t("p", null, [
                    t("strong", null, "Options:")
                  ]),
                  t("ul", null, [
                    t("li", null, "Commit your changes first (recommended)"),
                    t("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (a(), r(j, { key: 3 }, [
                t("div", wb, [
                  I[17] || (I[17] = t("span", { class: "icon" }, "📥", -1)),
                  $(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                d.value ? (a(), r("div", _b, [
                  I[21] || (I[21] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (a(), r("details", kb, [
                    t("summary", null, [
                      I[18] || (I[18] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", bb, f(c.value) + " changes", 1)
                    ]),
                    t("div", $b, [
                      (a(!0), r(j, null, ge(e.preview.changes.workflows.added, (E) => (a(), r("div", {
                        key: "a-" + E,
                        class: "change-item add"
                      }, " + " + f(E), 1))), 128)),
                      (a(!0), r(j, null, ge(e.preview.changes.workflows.modified, (E) => (a(), r("div", {
                        key: "m-" + E,
                        class: "change-item modify"
                      }, [
                        $(" ~ " + f(E) + " ", 1),
                        _(E) ? (a(), r("span", Cb, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), r(j, null, ge(e.preview.changes.workflows.deleted, (E) => (a(), r("div", {
                        key: "d-" + E,
                        class: "change-item delete"
                      }, " - " + f(E), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (a(), r("details", xb, [
                    t("summary", null, [
                      I[19] || (I[19] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", Sb, f(u.value) + " to install", 1)
                    ]),
                    t("div", Ib, [
                      (a(!0), r(j, null, ge(e.preview.changes.nodes.to_install, (E) => (a(), r("div", {
                        key: E,
                        class: "change-item add"
                      }, " + " + f(E), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), r("details", Eb, [
                    t("summary", null, [
                      I[20] || (I[20] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", Tb, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", Pb, [
                      (a(!0), r(j, null, ge(e.preview.changes.models.referenced, (E) => (a(), r("div", {
                        key: E,
                        class: "change-item"
                      }, f(E), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (a(), D(fb, {
                  key: 1,
                  "conflict-count": v.value,
                  "resolved-count": g.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), r("div", Rb, [
                  I[26] || (I[26] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", Mb, [
                    t("label", Db, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": I[1] || (I[1] = (E) => l.value = E),
                        value: "all"
                      }, null, 512), [
                        [Zt, l.value]
                      ]),
                      I[22] || (I[22] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", Lb, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": I[2] || (I[2] = (E) => l.value = E),
                        value: "required"
                      }, null, 512), [
                        [Zt, l.value]
                      ]),
                      I[23] || (I[23] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", Ob, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": I[3] || (I[3] = (E) => l.value = E),
                        value: "skip"
                      }, null, 512), [
                        [Zt, l.value]
                      ]),
                      I[24] || (I[24] = t("span", null, "Skip model downloads", -1)),
                      I[25] || (I[25] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  I[27] || (I[27] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (a(), r("div", Ab, [
                  I[28] || (I[28] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", Ub, [
              S(ue, {
                variant: "secondary",
                onClick: I[4] || (I[4] = (E) => b.$emit("close"))
              }, {
                default: h(() => [...I[29] || (I[29] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), r(j, { key: 0 }, [
                S(ue, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: I[5] || (I[5] = (E) => C(!1))
                }, {
                  default: h(() => [...I[30] || (I[30] = [
                    $(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                S(ue, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: I[6] || (I[6] = (E) => C(!0))
                }, {
                  default: h(() => [...I[31] || (I[31] = [
                    $(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (x = e.preview) != null && x.has_uncommitted_changes ? (a(), D(ue, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: I[7] || (I[7] = (E) => C(!0))
              }, {
                default: h(() => [...I[32] || (I[32] = [
                  $(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), r(j, { key: 2 }, [
                m.value && !w.value ? (a(), D(ue, {
                  key: 0,
                  variant: "primary",
                  onClick: I[8] || (I[8] = (E) => n("openConflictResolution"))
                }, {
                  default: h(() => [
                    $(" Resolve Conflicts (" + f(g.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), D(ue, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !p.value,
                  onClick: I[9] || (I[9] = (E) => C(!1))
                }, {
                  default: h(() => [...I[33] || (I[33] = [
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
}), zb = /* @__PURE__ */ ve(Nb, [["__scopeId", "data-v-300c7b2f"]]), Fb = { class: "modal-header" }, Bb = { class: "modal-title" }, Vb = { class: "modal-body" }, Wb = {
  key: 0,
  class: "loading-state"
}, Gb = {
  key: 1,
  class: "warning-box"
}, jb = {
  key: 0,
  class: "commits-section"
}, Hb = { class: "commit-list" }, Kb = { class: "commit-hash" }, qb = { class: "commit-message" }, Yb = { class: "commit-date" }, Jb = { class: "force-option" }, Qb = { class: "checkbox-option" }, Xb = { class: "commit-summary" }, Zb = { key: 0 }, e2 = { key: 1 }, t2 = {
  key: 0,
  class: "info-box"
}, s2 = {
  key: 1,
  class: "commits-section"
}, o2 = { class: "commit-list" }, n2 = { class: "commit-hash" }, a2 = { class: "commit-message" }, l2 = { class: "commit-date" }, i2 = {
  key: 2,
  class: "up-to-date"
}, r2 = { class: "modal-actions" }, c2 = /* @__PURE__ */ fe({
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
      return a(), D(_t, { to: "body" }, [
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
            t("div", Fb, [
              t("h3", Bb, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: c[0] || (c[0] = (v) => i.$emit("close"))
              }, "✕")
            ]),
            t("div", Vb, [
              e.loading ? (a(), r("div", Wb, [...c[8] || (c[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (a(), r("div", Gb, [...c[9] || (c[9] = [
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
                e.preview.commits_ahead > 0 ? (a(), r("div", jb, [
                  c[10] || (c[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", Hb, [
                    (a(!0), r(j, null, ge(e.preview.commits, (v) => (a(), r("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", Kb, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", qb, f(v.message), 1),
                      t("span", Yb, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", Jb, [
                  t("label", Qb, [
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
                t("div", Xb, [
                  c[14] || (c[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (a(), r("span", Zb, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), r("span", e2, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (a(), r("div", t2, [...c[15] || (c[15] = [
                  t("span", { class: "info-icon" }, "ℹ", -1),
                  t("span", null, "This will create the remote branch for the first time.", -1)
                ])])) : y("", !0),
                e.preview.commits_ahead > 0 ? (a(), r("div", s2, [
                  c[16] || (c[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", o2, [
                    (a(!0), r(j, null, ge(e.preview.commits, (v) => (a(), r("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", n2, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", a2, f(v.message), 1),
                      t("span", l2, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (a(), r("div", i2, [
                  c[17] || (c[17] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", r2, [
              S(ue, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (v) => i.$emit("close"))
              }, {
                default: h(() => [...c[18] || (c[18] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = e.preview) != null && m.remote_has_new_commits ? (a(), r(j, { key: 0 }, [
                S(ue, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (v) => i.$emit("pull-first"))
                }, {
                  default: h(() => [...c[19] || (c[19] = [
                    $(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                S(ue, {
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
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), D(ue, {
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
}), u2 = /* @__PURE__ */ ve(c2, [["__scopeId", "data-v-ae86b6a7"]]), d2 = { class: "resolution-choice-group" }, f2 = ["disabled"], m2 = ["disabled"], v2 = /* @__PURE__ */ fe({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("div", d2, [
      t("button", {
        class: Ie(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, f2),
      t("button", {
        class: Ie(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, m2)
    ]));
  }
}), p2 = /* @__PURE__ */ ve(v2, [["__scopeId", "data-v-985715ed"]]), g2 = { class: "conflict-header" }, h2 = { class: "conflict-info" }, y2 = { class: "workflow-name" }, w2 = { class: "conflict-description" }, _2 = {
  key: 0,
  class: "resolved-badge"
}, k2 = { class: "resolved-text" }, b2 = { class: "conflict-hashes" }, $2 = { class: "hash-item" }, C2 = { class: "hash-item" }, x2 = { class: "conflict-actions" }, S2 = /* @__PURE__ */ fe({
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
    const i = U(() => l.value !== null), c = U(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = U(() => {
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
        class: Ie(["conflict-item", { resolved: i.value }])
      }, [
        t("div", g2, [
          m[2] || (m[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", h2, [
            t("code", y2, f(e.conflict.name) + ".json", 1),
            t("div", w2, f(c.value), 1)
          ]),
          i.value ? (a(), r("div", _2, [
            m[1] || (m[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", k2, f(u.value), 1)
          ])) : y("", !0)
        ]),
        t("div", b2, [
          t("span", $2, [
            m[3] || (m[3] = $("Your: ", -1)),
            t("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", C2, [
            m[4] || (m[4] = $("Theirs: ", -1)),
            t("code", null, f(((g = e.conflict.target_hash) == null ? void 0 : g.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", x2, [
          S(p2, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), I2 = /* @__PURE__ */ ve(S2, [["__scopeId", "data-v-506d3bbf"]]), E2 = { class: "resolution-content" }, T2 = {
  key: 0,
  class: "error-box"
}, P2 = { class: "resolution-header" }, R2 = { class: "header-stats" }, M2 = { class: "stat" }, D2 = { class: "stat-value" }, L2 = { class: "stat resolved" }, O2 = { class: "stat-value" }, A2 = {
  key: 0,
  class: "stat pending"
}, U2 = { class: "stat-value" }, N2 = { class: "conflicts-list" }, z2 = {
  key: 1,
  class: "all-resolved-message"
}, F2 = /* @__PURE__ */ fe({
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
    const o = e, n = s, l = U(() => o.resolutions.size), i = U(() => o.workflowConflicts.length - l.value), c = U(() => l.value === o.workflowConflicts.length), u = U(
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
    return (w, p) => (a(), D(ft, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        t("div", E2, [
          e.error ? (a(), r("div", T2, [
            p[1] || (p[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              p[0] || (p[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", P2, [
            t("div", R2, [
              t("div", M2, [
                t("span", D2, f(e.workflowConflicts.length), 1),
                p[2] || (p[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", L2, [
                t("span", O2, f(l.value), 1),
                p[3] || (p[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              i.value > 0 ? (a(), r("div", A2, [
                t("span", U2, f(i.value), 1),
                p[4] || (p[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            p[5] || (p[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", N2, [
            (a(!0), r(j, null, ge(e.workflowConflicts, (_) => (a(), D(I2, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (C) => m(_.name, C)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (a(), r("div", z2, [
            p[6] || (p[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + f(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        S(Me, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...p[7] || (p[7] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = t("div", { class: "footer-spacer" }, null, -1)),
        S(Me, {
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
}), B2 = /* @__PURE__ */ ve(F2, [["__scopeId", "data-v-c58d150d"]]), V2 = { class: "node-conflict-item" }, W2 = { class: "node-header" }, G2 = { class: "node-name" }, j2 = { class: "node-id" }, H2 = { class: "version-comparison" }, K2 = { class: "version yours" }, q2 = { class: "version theirs" }, Y2 = { class: "chosen-version" }, J2 = { class: "chosen" }, Q2 = { class: "chosen-reason" }, X2 = { class: "affected-workflows" }, Z2 = { class: "wf-source" }, e$ = { class: "wf-version" }, t$ = /* @__PURE__ */ fe({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (a(), r("div", V2, [
      t("div", W2, [
        t("code", G2, f(e.conflict.node_name), 1),
        t("span", j2, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      t("div", H2, [
        t("div", K2, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", q2, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      t("div", Y2, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", J2, f(e.conflict.chosen_version), 1),
        t("span", Q2, f(e.conflict.chosen_reason), 1)
      ]),
      t("details", X2, [
        t("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (a(!0), r(j, null, ge(e.conflict.affected_workflows, (n) => (a(), r("li", {
            key: n.name
          }, [
            t("code", null, f(n.name), 1),
            t("span", Z2, "(" + f(n.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", e$, "needs v" + f(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), s$ = /* @__PURE__ */ ve(t$, [["__scopeId", "data-v-8b626725"]]), o$ = { class: "validation-content" }, n$ = {
  key: 0,
  class: "compatible-message"
}, a$ = { class: "conflicts-list" }, l$ = {
  key: 2,
  class: "warnings-section"
}, i$ = /* @__PURE__ */ fe({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = U(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (i, c) => (a(), D(ft, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => n("cancel"))
    }, {
      body: h(() => [
        t("div", o$, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), r("div", n$, [
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
            t("div", a$, [
              (a(!0), r(j, null, ge(e.validation.node_conflicts, (u) => (a(), D(s$, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (a(), r("div", l$, [
            c[8] || (c[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (a(!0), r(j, null, ge(e.validation.warnings, (u, d) => (a(), r("li", { key: d }, f(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        S(Me, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => n("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        S(Me, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => n("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            $(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        S(Me, {
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
}), r$ = /* @__PURE__ */ ve(i$, [["__scopeId", "data-v-fefd26ed"]]), c$ = { key: 0 }, u$ = /* @__PURE__ */ fe({
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
    } = tt(), _ = k([]), C = k(null), b = k({}), I = k(!1), M = k(null), x = k(""), E = k(!1), H = k(null), K = k(!1), B = k("add"), T = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), P = U(() => {
      if (!x.value.trim()) return _.value;
      const be = x.value.toLowerCase();
      return _.value.filter(
        (G) => G.name.toLowerCase().includes(be) || G.fetch_url.toLowerCase().includes(be) || G.push_url.toLowerCase().includes(be)
      );
    });
    async function L() {
      I.value = !0, M.value = null;
      try {
        const be = await n();
        _.value = be.remotes, C.value = be.current_branch_tracking || null, await Promise.all(
          be.remotes.map(async (G) => {
            const F = await d(G.name);
            F && (b.value[G.name] = F);
          })
        );
      } catch (be) {
        M.value = be instanceof Error ? be.message : "Failed to load remotes";
      } finally {
        I.value = !1;
      }
    }
    function le() {
      B.value = "add", T.value = { name: "", fetchUrl: "", pushUrl: "" }, K.value = !0;
    }
    function Z(be) {
      const G = _.value.find((F) => F.name === be);
      G && (B.value = "edit", T.value = {
        name: G.name,
        fetchUrl: G.fetch_url,
        pushUrl: G.push_url
      }, K.value = !0);
    }
    async function z(be) {
      try {
        B.value === "add" ? await l(be.name, be.fetchUrl) : await c(be.name, be.fetchUrl, be.pushUrl || void 0), K.value = !1, await L();
      } catch (G) {
        M.value = G instanceof Error ? G.message : "Operation failed";
      }
    }
    function W() {
      K.value = !1, T.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Y(be) {
      H.value = be;
      try {
        await u(be);
        const G = await d(be);
        G && (b.value[be] = G), o("toast", `✓ Fetched from ${be}`, "success");
      } catch (G) {
        o("toast", G instanceof Error ? G.message : "Fetch failed", "error");
      } finally {
        H.value = null;
      }
    }
    async function A(be) {
      if (confirm(`Remove remote "${be}"?`))
        try {
          await i(be), await L();
        } catch (G) {
          M.value = G instanceof Error ? G.message : "Failed to remove remote";
        }
    }
    function se() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const X = k("idle"), ye = U(() => X.value === "pull_preview"), _e = U(
      () => X.value === "resolving" || X.value === "validating"
    ), ce = U(
      () => X.value === "validation_review" || X.value === "executing"
    ), pe = k(!1), Se = k(null), Fe = k(!1), ze = k(null), Te = k(!1), Pe = k(null), ke = k(null), he = k(/* @__PURE__ */ new Map()), De = k(null), Re = k(null), O = U(() => Pe.value && Ir(Pe.value) ? Pe.value : null);
    async function R(be) {
      ze.value = be, X.value = "pull_preview", Te.value = !0, Pe.value = null, ke.value = null;
      try {
        Pe.value = await m(be);
      } catch (G) {
        ke.value = G instanceof Error ? G.message : "Failed to load pull preview";
      } finally {
        Te.value = !1;
      }
    }
    function N() {
      X.value = "idle", Pe.value = null, ke.value = null, ze.value = null;
    }
    async function V(be) {
      if (!ze.value) return;
      X.value = "executing", ke.value = null;
      const G = ze.value;
      try {
        const F = await v(G, be);
        if (F.rolled_back) {
          ke.value = `Pull failed and was rolled back: ${F.error || "Unknown error"}`, X.value = "pull_preview";
          return;
        }
        Ee(), X.value = "idle", o("toast", `✓ Pulled from ${G}`, "success"), await L();
      } catch (F) {
        ke.value = F instanceof Error ? F.message : "Pull failed", X.value = "pull_preview";
      }
    }
    function ee() {
      O.value && (X.value = "resolving", Re.value = null);
    }
    function re(be, G) {
      he.value.set(be, { name: be, resolution: G });
    }
    function we() {
      X.value = "pull_preview";
    }
    async function $e() {
      X.value = "validating", Re.value = null;
      try {
        const be = Array.from(he.value.values());
        De.value = await p(ze.value, be), X.value = "validation_review";
      } catch (be) {
        Re.value = be instanceof Error ? be.message : "Validation failed", X.value = "resolving";
      }
    }
    async function ae() {
      X.value = "executing";
      const be = ze.value;
      try {
        const G = Array.from(he.value.values()), F = await v(be, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: G
        });
        if (F.rolled_back) {
          ke.value = `Pull failed and was rolled back: ${F.error || "Unknown error"}`, X.value = "pull_preview";
          return;
        }
        Ee(), X.value = "idle", o("toast", `✓ Pulled from ${be}`, "success"), await L();
      } catch (G) {
        ke.value = G instanceof Error ? G.message : "Pull failed", X.value = "validation_review";
      }
    }
    function me() {
      X.value = "resolving";
    }
    function Le() {
      Ee(), X.value = "idle";
    }
    function Ee() {
      he.value.clear(), De.value = null, Re.value = null, ke.value = null, Pe.value = null, ze.value = null;
    }
    async function ne(be) {
      ze.value = be, pe.value = !0, Te.value = !0, Se.value = null;
      try {
        Se.value = await g(be);
      } catch (G) {
        M.value = G instanceof Error ? G.message : "Failed to load push preview";
      } finally {
        Te.value = !1;
      }
    }
    function Q() {
      pe.value = !1, Se.value = null, ze.value = null;
    }
    async function Oe(be) {
      if (!ze.value) return;
      Fe.value = !0;
      const G = ze.value;
      try {
        await w(G, be), Q(), o("toast", `✓ Pushed to ${G}`, "success"), await L();
      } catch (F) {
        o("toast", F instanceof Error ? F.message : "Push failed", "error");
      } finally {
        Fe.value = !1;
      }
    }
    function Ce() {
      const be = ze.value;
      Q(), be && R(be);
    }
    return Qe(L), (be, G) => (a(), r(j, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: G[0] || (G[0] = (F) => E.value = !0)
          }, {
            actions: h(() => [
              K.value ? y("", !0) : (a(), D(ue, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: le
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
            "onUpdate:modelValue": G[1] || (G[1] = (F) => x.value = F),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: h(() => [
          I.value ? (a(), D(Ps, {
            key: 0,
            message: "Loading remotes..."
          })) : M.value ? (a(), D(Rs, {
            key: 1,
            message: M.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            K.value ? (a(), D(sb, {
              key: 0,
              mode: B.value,
              "remote-name": T.value.name,
              "fetch-url": T.value.fetchUrl,
              "push-url": T.value.pushUrl,
              onSubmit: z,
              onCancel: W
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            _.value.length && !K.value ? (a(), D(an, {
              key: 1,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                C.value ? (a(), r("span", c$, " • Tracking: " + f(C.value.remote) + "/" + f(C.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            P.value.length && !K.value ? (a(), D(lt, {
              key: 2,
              title: "REMOTES",
              count: P.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, ge(P.value, (F) => (a(), D(Wk, {
                  key: F.name,
                  remote: F,
                  "sync-status": b.value[F.name],
                  "fetching-remote": H.value,
                  onFetch: Y,
                  onEdit: Z,
                  onRemove: A,
                  onPull: R,
                  onPush: ne
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
                S(ue, {
                  variant: "primary",
                  onClick: le
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
      S(as, {
        show: E.value,
        title: "About Git Remotes",
        onClose: G[2] || (G[2] = (F) => E.value = !1)
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
          S(ue, {
            variant: "link",
            onClick: se
          }, {
            default: h(() => [...G[6] || (G[6] = [
              $(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      S(zb, {
        show: ye.value,
        "remote-name": ze.value || "",
        preview: Pe.value,
        loading: Te.value,
        pulling: X.value === "executing",
        error: ke.value,
        "conflict-resolutions": he.value,
        onClose: N,
        onPull: V,
        onOpenConflictResolution: ee
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      S(u2, {
        show: pe.value,
        "remote-name": ze.value || "",
        preview: Se.value,
        loading: Te.value,
        pushing: Fe.value,
        onClose: Q,
        onPush: Oe,
        onPullFirst: Ce
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      _e.value && O.value ? (a(), D(B2, {
        key: 0,
        "workflow-conflicts": O.value.workflow_conflicts,
        resolutions: he.value,
        "operation-type": "pull",
        validating: X.value === "validating",
        error: Re.value,
        onClose: we,
        onResolve: re,
        onApply: $e
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      ce.value && De.value ? (a(), D(r$, {
        key: 1,
        validation: De.value,
        "operation-type": "pull",
        executing: X.value === "executing",
        onProceed: ae,
        onGoBack: me,
        onCancel: Le
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), d$ = /* @__PURE__ */ ve(u$, [["__scopeId", "data-v-9ae3b76d"]]), f$ = { class: "setting-info" }, m$ = { class: "setting-label" }, v$ = {
  key: 0,
  class: "required-marker"
}, p$ = {
  key: 0,
  class: "setting-description"
}, g$ = { class: "setting-control" }, h$ = /* @__PURE__ */ fe({
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
      t("div", f$, [
        t("div", m$, [
          $(f(e.label) + " ", 1),
          e.required ? (a(), r("span", v$, "*")) : y("", !0)
        ]),
        e.description ? (a(), r("div", p$, f(e.description), 1)) : y("", !0)
      ]),
      t("div", g$, [
        Ke(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), yn = /* @__PURE__ */ ve(h$, [["__scopeId", "data-v-cb5d236c"]]), y$ = { class: "toggle" }, w$ = ["checked", "disabled"], _$ = /* @__PURE__ */ fe({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("label", y$, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, w$),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Zl = /* @__PURE__ */ ve(_$, [["__scopeId", "data-v-71c0f550"]]), k$ = { class: "workspace-settings-content" }, b$ = { class: "settings-section" }, $$ = { class: "path-setting" }, C$ = { class: "path-value" }, x$ = { class: "path-setting" }, S$ = { class: "path-value" }, I$ = { class: "settings-section" }, E$ = { class: "settings-section" }, T$ = { class: "settings-section" }, P$ = /* @__PURE__ */ fe({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = o, { getConfig: i, updateConfig: c } = tt(), u = k(!1), d = k(null), m = k(null), v = k(null), g = k(null), w = k(""), p = k(""), _ = k(!1), C = k(!0);
    function b(T) {
      return T.join(" ");
    }
    function I(T) {
      return T.trim() ? T.trim().split(/\s+/) : [];
    }
    const M = U(() => {
      if (!g.value) return !1;
      const T = w.value !== (g.value.civitai_api_key || ""), P = p.value !== b(g.value.comfyui_extra_args || []);
      return T || P;
    });
    async function x() {
      u.value = !0, d.value = null;
      try {
        v.value = await i(n.workspacePath || void 0), g.value = { ...v.value }, w.value = v.value.civitai_api_key || "", p.value = b(v.value.comfyui_extra_args || []);
        const T = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        _.value = T !== "false", C.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
      } catch (T) {
        d.value = T instanceof Error ? T.message : "Failed to load settings";
      } finally {
        u.value = !1;
      }
    }
    async function E() {
      var T, P;
      m.value = null;
      try {
        const L = {};
        w.value !== (((T = g.value) == null ? void 0 : T.civitai_api_key) || "") && (L.civitai_api_key = w.value || null), p.value !== b(((P = g.value) == null ? void 0 : P.comfyui_extra_args) || []) && (L.comfyui_extra_args = I(p.value)), await c(L, n.workspacePath || void 0), await x(), m.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (L) {
        const le = L instanceof Error ? L.message : "Failed to save settings";
        m.value = { type: "error", message: le }, l("error", le);
      }
    }
    function H() {
      g.value && (w.value = g.value.civitai_api_key || "", p.value = b(g.value.comfyui_extra_args || []), m.value = null);
    }
    function K(T) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(T)), console.log("[ComfyGit] Auto-refresh setting saved:", T);
    }
    function B(T) {
      T ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", T ? "enabled" : "disabled");
    }
    return s({
      saveSettings: E,
      resetSettings: H,
      hasChanges: M,
      loadSettings: x
    }), Qe(x), (T, P) => (a(), r("div", k$, [
      u.value ? (a(), D(Ps, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (a(), D(Rs, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: x
      }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
        S(lt, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var L, le;
            return [
              t("div", b$, [
                t("div", $$, [
                  P[4] || (P[4] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  P[5] || (P[5] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", C$, f(((L = v.value) == null ? void 0 : L.workspace_path) || "Loading..."), 1)
                ]),
                t("div", x$, [
                  P[6] || (P[6] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  P[7] || (P[7] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", S$, f(((le = v.value) == null ? void 0 : le.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        S(lt, { title: "API CREDENTIALS" }, {
          default: h(() => [
            t("div", I$, [
              S(yn, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  S(Un, {
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
        S(lt, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            t("div", E$, [
              S(yn, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  S(Un, {
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
        S(lt, { title: "UI SETTINGS" }, {
          default: h(() => [
            t("div", T$, [
              S(yn, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  S(Zl, {
                    modelValue: _.value,
                    "onUpdate:modelValue": [
                      P[2] || (P[2] = (L) => _.value = L),
                      K
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              S(yn, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  S(Zl, {
                    modelValue: C.value,
                    "onUpdate:modelValue": [
                      P[3] || (P[3] = (L) => C.value = L),
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
              style: Ft({ color: m.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, f(m.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), Er = /* @__PURE__ */ ve(P$, [["__scopeId", "data-v-f28917ec"]]), R$ = /* @__PURE__ */ fe({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), D(Pt, null, {
      header: h(() => [
        S(Rt, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var i, c;
            return [
              S(ue, {
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
              (c = s.value) != null && c.hasChanges ? (a(), D(ue, {
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
        S(Er, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), M$ = { class: "base-tabs" }, D$ = ["disabled", "onClick"], L$ = {
  key: 0,
  class: "base-tabs__badge"
}, O$ = /* @__PURE__ */ fe({
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
    return (i, c) => (a(), r("div", M$, [
      (a(!0), r(j, null, ge(e.tabs, (u) => (a(), r("button", {
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
        $(f(u.label) + " ", 1),
        u.badge ? (a(), r("span", L$, f(u.badge), 1)) : y("", !0)
      ], 10, D$))), 128))
    ]));
  }
}), Tr = /* @__PURE__ */ ve(O$, [["__scopeId", "data-v-ad5e6cad"]]), A$ = { class: "log-viewer-wrapper" }, U$ = ["disabled", "title"], N$ = /* @__PURE__ */ fe({
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
      await yt();
      const m = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      m && (m.scrollTop = m.scrollHeight);
    }
    Qe(i), gt(() => s.logs, i);
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
    return (m, v) => (a(), r("div", A$, [
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
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, U$),
        (a(!0), r(j, null, ge(l.value, (g, w) => (a(), r("div", {
          key: w,
          class: Ie(`log-line log-level-${g.level.toLowerCase()}`)
        }, f(g.text), 3))), 128))
      ], 544)
    ]));
  }
}), Pr = /* @__PURE__ */ ve(N$, [["__scopeId", "data-v-c0cc6d21"]]), z$ = /* @__PURE__ */ fe({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: n,
      getOrchestratorLogPath: l,
      openFile: i
    } = tt(), c = k("workspace"), u = k([]), d = k(!1), m = k(null), v = k(!1), g = k(null), w = k(null), p = k(!1), _ = U(() => c.value === "workspace" ? g.value : w.value);
    async function C() {
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
    async function I() {
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
    return gt(c, () => {
      C();
    }), Qe(() => {
      C(), b();
    }), (M, x) => (a(), r(j, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (E) => v.value = !0)
          }, {
            actions: h(() => [
              S(ue, {
                variant: "secondary",
                size: "sm",
                onClick: I,
                disabled: !_.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: h(() => [
                  $(f(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              S(ue, {
                variant: "secondary",
                size: "sm",
                onClick: C,
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
          S(Tr, {
            modelValue: c.value,
            "onUpdate:modelValue": x[1] || (x[1] = (E) => c.value = E),
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
            onRetry: C
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            u.value.length === 0 ? (a(), D(ns, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (a(), D(Pr, {
              key: 1,
              logs: u.value,
              "raw-format": c.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      S(as, {
        show: v.value,
        title: "About Logs",
        onClose: x[3] || (x[3] = (E) => v.value = !1)
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
          S(ue, {
            variant: "primary",
            onClick: x[2] || (x[2] = (E) => v.value = !1)
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
}), F$ = /* @__PURE__ */ fe({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: n, openFile: l } = tt(), i = k([]), c = k(!1), u = k(null), d = k(!1), m = k("production"), v = k(null), g = k(!1);
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
        g.value = !0;
        try {
          await l(v.value);
        } catch (C) {
          console.error("Failed to open log file:", C);
        } finally {
          g.value = !1;
        }
      }
    }
    return Qe(() => {
      w(), p();
    }), (C, b) => (a(), r(j, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (I) => d.value = !0)
          }, {
            actions: h(() => [
              S(ue, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: !v.value || g.value,
                title: "Open log file in default editor"
              }, {
                default: h(() => [
                  $(f(g.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              S(ue, {
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
            })) : (a(), D(Pr, {
              key: 1,
              logs: i.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      S(as, {
        show: d.value,
        title: "About Environment Logs",
        onClose: b[2] || (b[2] = (I) => d.value = !1)
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
          S(ue, {
            variant: "primary",
            onClick: b[1] || (b[1] = (I) => d.value = !1)
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
}), B$ = { class: "env-title" }, V$ = {
  key: 0,
  class: "current-badge"
}, W$ = {
  key: 0,
  class: "branch-info"
}, G$ = /* @__PURE__ */ fe({
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
    }, oo({
      icon: h(() => [
        $(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        t("div", B$, [
          t("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), r("span", V$, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (a(), r("span", W$, [
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
          S(dt, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          S(dt, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          S(dt, {
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
}), j$ = /* @__PURE__ */ ve(G$, [["__scopeId", "data-v-9231917a"]]), H$ = { class: "env-details" }, K$ = { class: "status-row" }, q$ = {
  key: 0,
  class: "detail-row"
}, Y$ = { class: "value mono" }, J$ = {
  key: 1,
  class: "detail-row"
}, Q$ = { class: "value mono small" }, X$ = { class: "detail-row" }, Z$ = { class: "value" }, eC = { class: "detail-row" }, tC = { class: "value" }, sC = { class: "detail-row" }, oC = { class: "value" }, nC = {
  key: 2,
  class: "section-divider"
}, aC = {
  key: 3,
  class: "detail-row"
}, lC = { class: "value" }, iC = {
  key: 4,
  class: "detail-row"
}, rC = { class: "value" }, cC = { class: "footer-actions" }, uC = /* @__PURE__ */ fe({
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
    return (l, i) => (a(), D(ft, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: i[2] || (i[2] = (c) => o("close"))
    }, {
      body: h(() => [
        t("div", H$, [
          t("div", K$, [
            i[3] || (i[3] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Ie(["status-badge", e.environment.is_current ? "current" : "inactive"])
            }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          e.environment.current_branch ? (a(), r("div", q$, [
            i[4] || (i[4] = t("span", { class: "label" }, "Branch:", -1)),
            t("span", Y$, f(e.environment.current_branch), 1)
          ])) : y("", !0),
          e.environment.path ? (a(), r("div", J$, [
            i[5] || (i[5] = t("span", { class: "label" }, "Path:", -1)),
            t("span", Q$, f(e.environment.path), 1)
          ])) : y("", !0),
          i[11] || (i[11] = t("div", { class: "section-divider" }, null, -1)),
          t("div", X$, [
            i[6] || (i[6] = t("span", { class: "label" }, "Workflows:", -1)),
            t("span", Z$, f(e.environment.workflow_count), 1)
          ]),
          t("div", eC, [
            i[7] || (i[7] = t("span", { class: "label" }, "Nodes:", -1)),
            t("span", tC, f(e.environment.node_count), 1)
          ]),
          t("div", sC, [
            i[8] || (i[8] = t("span", { class: "label" }, "Models:", -1)),
            t("span", oC, f(e.environment.model_count), 1)
          ]),
          e.environment.created_at || e.environment.last_used ? (a(), r("div", nC)) : y("", !0),
          e.environment.created_at ? (a(), r("div", aC, [
            i[9] || (i[9] = t("span", { class: "label" }, "Created:", -1)),
            t("span", lC, f(n(e.environment.created_at)), 1)
          ])) : y("", !0),
          e.environment.last_used ? (a(), r("div", iC, [
            i[10] || (i[10] = t("span", { class: "label" }, "Last Used:", -1)),
            t("span", rC, f(n(e.environment.last_used)), 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", cC, [
          e.canDelete ? (a(), D(Me, {
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
          S(Me, {
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
}), dC = /* @__PURE__ */ ve(uC, [["__scopeId", "data-v-59855453"]]), Rr = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Mr = "3.12", al = [
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
], Dr = "auto", fC = { class: "progress-bar" }, mC = /* @__PURE__ */ fe({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = U(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (n, l) => (a(), r("div", fC, [
      t("div", {
        class: Ie(["progress-fill", e.variant]),
        style: Ft({ width: o.value })
      }, null, 6)
    ]));
  }
}), ea = /* @__PURE__ */ ve(mC, [["__scopeId", "data-v-1beb0512"]]), vC = { class: "task-progress" }, pC = { class: "progress-info" }, gC = { class: "progress-percentage" }, hC = { class: "progress-message" }, yC = {
  key: 0,
  class: "progress-steps"
}, wC = { class: "step-icon" }, _C = { class: "step-label" }, kC = /* @__PURE__ */ fe({
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
    return (l, i) => (a(), r("div", vC, [
      S(ea, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", pC, [
        t("span", gC, f(e.progress) + "%", 1),
        t("span", hC, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), r("div", yC, [
        (a(!0), r(j, null, ge(e.steps, (c) => (a(), r("div", {
          key: c.id,
          class: Ie(["step", o(c.id)])
        }, [
          t("span", wC, f(n(c.id)), 1),
          t("span", _C, f(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), zn = /* @__PURE__ */ ve(kC, [["__scopeId", "data-v-9d1de66c"]]), bC = {
  key: 0,
  class: "create-env-form"
}, $C = { class: "form-field" }, CC = { class: "form-field" }, xC = ["value"], SC = { class: "form-field" }, IC = ["disabled"], EC = ["value"], TC = { class: "form-field" }, PC = ["value"], RC = { class: "form-field form-field--checkbox" }, MC = { class: "form-checkbox" }, DC = {
  key: 1,
  class: "create-env-progress"
}, LC = { class: "creating-intro" }, OC = {
  key: 0,
  class: "progress-warning"
}, AC = {
  key: 1,
  class: "create-error"
}, UC = { class: "error-message" }, NC = {
  key: 1,
  class: "footer-status"
}, zC = 10, FC = /* @__PURE__ */ fe({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: i } = tt(), c = k(""), u = k(Mr), d = k("latest"), m = k(Dr), v = k(!1), g = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = k(!1), p = k(!1), _ = k({
      progress: 0,
      message: ""
    });
    let C = null, b = 0;
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
    ], M = k(null);
    function x() {
      p.value || o("close");
    }
    async function E() {
      const P = c.value.trim();
      if (P) {
        p.value = !0, _.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const L = {
            name: P,
            python_version: u.value,
            comfyui_version: d.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, le = await l(L);
          le.status === "started" ? H() : le.status === "error" && (_.value = {
            progress: 0,
            message: le.message || "Failed to start creation",
            error: le.message
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
    function H() {
      C || (b = 0, C = window.setInterval(async () => {
        try {
          const P = await i();
          b = 0, _.value = {
            progress: P.progress ?? 0,
            message: P.message,
            phase: P.phase,
            error: P.error
          }, P.state === "complete" ? (K(), o("created", P.environment_name || c.value.trim(), v.value)) : P.state === "error" ? (K(), _.value.error = P.error || P.message) : P.state === "idle" && p.value && (K(), _.value.error = "Creation was interrupted. Please try again.");
        } catch {
          b++, b >= zC && (K(), _.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function K() {
      C && (clearInterval(C), C = null);
    }
    function B() {
      p.value = !1, _.value = { progress: 0, message: "" }, o("close");
    }
    async function T() {
      w.value = !0;
      try {
        g.value = await n();
      } catch (P) {
        console.error("Failed to load ComfyUI releases:", P);
      } finally {
        w.value = !1;
      }
    }
    return Qe(async () => {
      var P;
      await yt(), (P = M.value) == null || P.focus(), T();
    }), Ws(() => {
      K();
    }), (P, L) => (a(), D(ft, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !p.value,
      onClose: x
    }, {
      body: h(() => [
        p.value ? (a(), r("div", DC, [
          t("p", LC, [
            L[11] || (L[11] = $(" Creating environment ", -1)),
            t("strong", null, f(c.value), 1),
            L[12] || (L[12] = $("... ", -1))
          ]),
          S(zn, {
            progress: _.value.progress,
            message: _.value.message,
            "current-phase": _.value.phase,
            variant: _.value.error ? "error" : "default",
            "show-steps": !0,
            steps: I
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          _.value.error ? y("", !0) : (a(), r("p", OC, " This may take several minutes. Please wait... ")),
          _.value.error ? (a(), r("div", AC, [
            t("p", UC, f(_.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), r("div", bC, [
          t("div", $C, [
            L[6] || (L[6] = t("label", { class: "form-label" }, "Name", -1)),
            qe(t("input", {
              ref_key: "nameInput",
              ref: M,
              "onUpdate:modelValue": L[0] || (L[0] = (le) => c.value = le),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Kt(E, ["enter"])
            }, null, 544), [
              [zt, c.value]
            ])
          ]),
          t("div", CC, [
            L[7] || (L[7] = t("label", { class: "form-label" }, "Python Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": L[1] || (L[1] = (le) => u.value = le),
              class: "form-select"
            }, [
              (a(!0), r(j, null, ge(We(Rr), (le) => (a(), r("option", {
                key: le,
                value: le
              }, f(le), 9, xC))), 128))
            ], 512), [
              [hs, u.value]
            ])
          ]),
          t("div", SC, [
            L[8] || (L[8] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": L[2] || (L[2] = (le) => d.value = le),
              class: "form-select",
              disabled: w.value
            }, [
              (a(!0), r(j, null, ge(g.value, (le) => (a(), r("option", {
                key: le.tag_name,
                value: le.tag_name
              }, f(le.name), 9, EC))), 128))
            ], 8, IC), [
              [hs, d.value]
            ])
          ]),
          t("div", TC, [
            L[9] || (L[9] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            qe(t("select", {
              "onUpdate:modelValue": L[3] || (L[3] = (le) => m.value = le),
              class: "form-select"
            }, [
              (a(!0), r(j, null, ge(We(al), (le) => (a(), r("option", {
                key: le,
                value: le
              }, f(le) + f(le === "auto" ? " (detect GPU)" : ""), 9, PC))), 128))
            ], 512), [
              [hs, m.value]
            ])
          ]),
          t("div", RC, [
            t("label", MC, [
              qe(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": L[4] || (L[4] = (le) => v.value = le)
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
          _.value.error ? (a(), D(Me, {
            key: 0,
            variant: "secondary",
            onClick: B
          }, {
            default: h(() => [...L[15] || (L[15] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), r("span", NC, " Creating environment... "))
        ], 64)) : (a(), r(j, { key: 0 }, [
          S(Me, {
            variant: "primary",
            disabled: !c.value.trim(),
            onClick: E
          }, {
            default: h(() => [...L[13] || (L[13] = [
              $(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          S(Me, {
            variant: "secondary",
            onClick: L[5] || (L[5] = (le) => o("close"))
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
}), BC = /* @__PURE__ */ ve(FC, [["__scopeId", "data-v-f37eaa42"]]), VC = /* @__PURE__ */ fe({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getEnvironments: l } = tt(), i = k([]), c = k(!1), u = k(null), d = k(""), m = k(!1), v = k(!1), g = k(null), w = U(() => {
      if (!d.value.trim()) return i.value;
      const M = d.value.toLowerCase();
      return i.value.filter(
        (x) => {
          var E;
          return x.name.toLowerCase().includes(M) || ((E = x.current_branch) == null ? void 0 : E.toLowerCase().includes(M));
        }
      );
    });
    function p(M, x) {
      v.value = !1, n("created", M, x);
    }
    function _() {
      v.value = !0;
    }
    function C(M) {
      g.value = M;
    }
    function b(M) {
      g.value = null, n("delete", M);
    }
    async function I() {
      c.value = !0, u.value = null;
      try {
        i.value = await l();
      } catch (M) {
        u.value = M instanceof Error ? M.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return Qe(I), s({
      loadEnvironments: I,
      openCreateModal: _
    }), (M, x) => (a(), r(j, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (E) => m.value = !0)
          }, {
            actions: h(() => [
              S(ue, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: h(() => [...x[6] || (x[6] = [
                  $(" Create ", -1)
                ])]),
                _: 1
              }),
              S(ue, {
                variant: "secondary",
                size: "sm",
                onClick: I
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
          S($o, {
            modelValue: d.value,
            "onUpdate:modelValue": x[1] || (x[1] = (E) => d.value = E),
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
            onRetry: I
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            w.value.length ? (a(), D(lt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, ge(w.value, (E) => (a(), D(j$, {
                  key: E.name,
                  "environment-name": E.name,
                  "is-current": E.is_current,
                  "current-branch": E.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    E.is_current ? y("", !0) : (a(), D(ue, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (H) => M.$emit("switch", E.name)
                    }, {
                      default: h(() => [...x[8] || (x[8] = [
                        $(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    S(ue, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (H) => C(E)
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
            }, oo({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  S(ue, {
                    variant: "primary",
                    onClick: _
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
      S(as, {
        show: m.value,
        title: "About Environments",
        onClose: x[3] || (x[3] = (E) => m.value = !1)
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
          S(ue, {
            variant: "secondary",
            onClick: x[2] || (x[2] = (E) => m.value = !1)
          }, {
            default: h(() => [...x[12] || (x[12] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      g.value ? (a(), D(dC, {
        key: 0,
        environment: g.value,
        "can-delete": i.value.length > 1,
        onClose: x[4] || (x[4] = (E) => g.value = null),
        onDelete: b
      }, null, 8, ["environment", "can-delete"])) : y("", !0),
      v.value ? (a(), D(BC, {
        key: 1,
        onClose: x[5] || (x[5] = (E) => v.value = !1),
        onCreated: p
      })) : y("", !0)
    ], 64));
  }
}), WC = /* @__PURE__ */ ve(VC, [["__scopeId", "data-v-f95999f4"]]), GC = { class: "file-path" }, jC = { class: "file-path-text" }, HC = ["title"], KC = /* @__PURE__ */ fe({
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
    return (l, i) => (a(), r("div", GC, [
      i[0] || (i[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", jC, f(e.path), 1),
      e.copyable ? (a(), r("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, f(o.value ? "✓" : "📋"), 9, HC)) : y("", !0)
    ]));
  }
}), qC = /* @__PURE__ */ ve(KC, [["__scopeId", "data-v-f0982173"]]), YC = { class: "export-blocked" }, JC = { class: "issues-list" }, QC = { class: "issue-message" }, XC = {
  key: 0,
  class: "issue-details"
}, ZC = ["onClick"], ex = { class: "issue-fix" }, tx = /* @__PURE__ */ fe({
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
    return (l, i) => (a(), D(ft, {
      title: "Cannot Export",
      size: "md",
      onClose: i[1] || (i[1] = (c) => l.$emit("close"))
    }, {
      body: h(() => [
        t("div", YC, [
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
          t("div", JC, [
            (a(!0), r(j, null, ge(e.issues, (c, u) => (a(), r("div", {
              key: u,
              class: "issue-item"
            }, [
              t("div", QC, f(c.message), 1),
              c.details.length ? (a(), r("div", XC, [
                (a(!0), r(j, null, ge(n(u), (d, m) => (a(), r("div", {
                  key: m,
                  class: "issue-detail"
                }, f(d), 1))), 128)),
                c.details.length > 3 && !o[u] ? (a(), r("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => o[u] = !0
                }, " +" + f(c.details.length - 3) + " more ", 9, ZC)) : y("", !0)
              ])) : y("", !0),
              t("div", ex, [
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
        S(Me, {
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
}), Lr = /* @__PURE__ */ ve(tx, [["__scopeId", "data-v-b52f5e32"]]), sx = { class: "export-warnings" }, ox = {
  key: 0,
  class: "success-header"
}, nx = { class: "warning-header" }, ax = { class: "warning-summary" }, lx = { class: "warning-title" }, ix = { class: "models-section" }, rx = { class: "models-list" }, cx = { class: "model-info" }, ux = { class: "model-filename" }, dx = { class: "model-workflows" }, fx = ["onClick"], mx = /* @__PURE__ */ fe({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = k(!1), i = k(null), c = U(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function u() {
      i.value = null, n("revalidate");
    }
    return (d, m) => (a(), r(j, null, [
      S(ft, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (v) => d.$emit("cancel"))
      }, {
        body: h(() => [
          t("div", sx, [
            e.models.length === 0 ? (a(), r("div", ox, [...m[4] || (m[4] = [
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
              t("div", nx, [
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
                t("div", ax, [
                  t("h3", lx, f(e.models.length) + " model" + f(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", ix, [
                t("div", rx, [
                  (a(!0), r(j, null, ge(c.value, (v) => (a(), r("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", cx, [
                      t("div", ux, f(v.filename), 1),
                      t("div", dx, " Used by: " + f(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (g) => i.value = v.hash
                    }, " Add Source ", 8, fx)
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
          S(Me, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (v) => d.$emit("cancel"))
          }, {
            default: h(() => [...m[7] || (m[7] = [
              $(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          S(Me, {
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
}), Or = /* @__PURE__ */ ve(mx, [["__scopeId", "data-v-b698d882"]]), vx = { class: "export-card" }, px = { class: "export-path-row" }, gx = { class: "export-actions" }, hx = {
  key: 1,
  class: "export-warning"
}, yx = /* @__PURE__ */ fe({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = tt(), n = k(""), l = k(!1), i = k(!1), c = k(!1), u = k(null), d = k(!1), m = k(null), v = k(!1), g = k(!1), w = U(() => l.value ? "Validating..." : i.value ? "Exporting..." : "Export Environment");
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
    async function _() {
      g.value = !1, await b();
    }
    async function C() {
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
    async function I() {
      var x;
      if ((x = u.value) != null && x.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (E) {
          console.error("Failed to copy path:", E);
        }
    }
    async function M() {
      var x;
      if ((x = u.value) != null && x.path) {
        c.value = !0;
        try {
          const E = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!E.ok)
            throw new Error(`Download failed: ${E.statusText}`);
          const H = await E.blob(), K = URL.createObjectURL(H), B = u.value.path.split("/").pop() || "environment-export.tar.gz", T = document.createElement("a");
          T.href = K, T.download = B, document.body.appendChild(T), T.click(), document.body.removeChild(T), URL.revokeObjectURL(K);
        } catch (E) {
          console.error("Failed to download:", E), alert(`Download failed: ${E instanceof Error ? E.message : "Unknown error"}`);
        } finally {
          c.value = !1;
        }
      }
    }
    return (x, E) => (a(), r(j, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (H) => d.value = !0)
          })
        ]),
        content: h(() => [
          S(lt, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              t("div", vx, [
                E[7] || (E[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", px, [
                  S(Un, {
                    modelValue: n.value,
                    "onUpdate:modelValue": E[1] || (E[1] = (H) => n.value = H),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", gx, [
                  S(ue, {
                    variant: "primary",
                    size: "md",
                    loading: l.value || i.value,
                    disabled: l.value || i.value,
                    onClick: p
                  }, {
                    default: h(() => [
                      E[6] || (E[6] = t("svg", {
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
              S(Et, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, oo({
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
                    S(dt, { label: "Saved to:" }, {
                      default: h(() => [
                        S(qC, {
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
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (a(), r("div", hx, [...E[8] || (E[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    S(ue, {
                      variant: "primary",
                      size: "sm",
                      loading: c.value,
                      onClick: M
                    }, {
                      default: h(() => [...E[9] || (E[9] = [
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
                    S(ue, {
                      variant: "secondary",
                      size: "sm",
                      onClick: I
                    }, {
                      default: h(() => [...E[10] || (E[10] = [
                        $(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    S(ue, {
                      variant: "ghost",
                      size: "sm",
                      onClick: E[2] || (E[2] = (H) => u.value = null)
                    }, {
                      default: h(() => [...E[11] || (E[11] = [
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
      S(as, {
        show: d.value,
        title: "What Gets Exported",
        onClose: E[3] || (E[3] = (H) => d.value = !1)
      }, {
        content: h(() => [...E[12] || (E[12] = [
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
      v.value && m.value ? (a(), D(Lr, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: E[4] || (E[4] = (H) => v.value = !1)
      }, null, 8, ["issues"])) : y("", !0),
      g.value && m.value ? (a(), D(Or, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: _,
        onCancel: E[5] || (E[5] = (H) => g.value = !1),
        onRevalidate: C
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), wx = /* @__PURE__ */ ve(yx, [["__scopeId", "data-v-f4d120f2"]]), _x = { class: "file-input-wrapper" }, kx = ["accept", "multiple", "disabled"], bx = /* @__PURE__ */ fe({
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
    }), (u, d) => (a(), r("div", _x, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, kx),
      S(ue, {
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
}), $x = /* @__PURE__ */ ve(bx, [["__scopeId", "data-v-cd192091"]]), Cx = {
  key: 0,
  class: "drop-zone-empty"
}, xx = { class: "drop-zone-text" }, Sx = { class: "drop-zone-primary" }, Ix = { class: "drop-zone-secondary" }, Ex = { class: "drop-zone-actions" }, Tx = {
  key: 1,
  class: "drop-zone-file"
}, Px = { class: "file-info" }, Rx = { class: "file-details" }, Mx = { class: "file-name" }, Dx = { class: "file-size" }, Lx = /* @__PURE__ */ fe({
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
    const o = s, n = k(!1), l = k(null), i = k(0), c = U(() => l.value !== null), u = U(() => {
      var b;
      return ((b = l.value) == null ? void 0 : b.name) || "";
    }), d = U(() => {
      if (!l.value) return "";
      const b = l.value.size;
      return b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB` : b < 1024 * 1024 * 1024 ? `${(b / (1024 * 1024)).toFixed(1)} MB` : `${(b / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m(b) {
      var I;
      b.stopPropagation(), i.value++, (I = b.dataTransfer) != null && I.types.includes("Files") && (n.value = !0);
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
      const I = (M = b.dataTransfer) == null ? void 0 : M.files;
      I && I.length > 0 && _(I[0]);
    }
    function p(b) {
      b.length > 0 && _(b[0]);
    }
    function _(b) {
      l.value = b, o("fileSelected", b);
    }
    function C() {
      l.value = null, o("clear");
    }
    return (b, I) => (a(), r("div", {
      class: Ie(["file-drop-zone", { "drop-active": n.value, "has-file": c.value }]),
      onDragenter: it(m, ["prevent"]),
      onDragover: it(v, ["prevent"]),
      onDragleave: it(g, ["prevent"]),
      onDrop: it(w, ["prevent"])
    }, [
      c.value ? (a(), r("div", Tx, [
        t("div", Px, [
          I[1] || (I[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", Rx, [
            t("div", Mx, f(u.value), 1),
            t("div", Dx, f(d.value), 1)
          ])
        ]),
        S(ue, {
          variant: "ghost",
          size: "xs",
          onClick: C,
          title: "Remove file"
        }, {
          default: h(() => [...I[2] || (I[2] = [
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
      ])) : (a(), r("div", Cx, [
        I[0] || (I[0] = t("div", { class: "drop-zone-icon" }, [
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
        t("div", xx, [
          t("p", Sx, f(e.primaryText), 1),
          t("p", Ix, f(e.secondaryText), 1)
        ]),
        t("div", Ex, [
          S($x, {
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
}), Ox = /* @__PURE__ */ ve(Lx, [["__scopeId", "data-v-0f79cb86"]]), Ax = { class: "import-preview" }, Ux = { class: "preview-header" }, Nx = {
  key: 0,
  class: "source-env"
}, zx = { class: "preview-content" }, Fx = { class: "preview-section" }, Bx = { class: "section-header" }, Vx = { class: "section-info" }, Wx = { class: "section-count" }, Gx = {
  key: 0,
  class: "item-list"
}, jx = { class: "item-name" }, Hx = {
  key: 0,
  class: "item-more"
}, Kx = { class: "preview-section" }, qx = { class: "section-header" }, Yx = { class: "section-info" }, Jx = { class: "section-count" }, Qx = {
  key: 0,
  class: "item-list"
}, Xx = { class: "item-details" }, Zx = { class: "item-name" }, e3 = { class: "item-meta" }, t3 = {
  key: 0,
  class: "item-more"
}, s3 = { class: "preview-section" }, o3 = { class: "section-header" }, n3 = { class: "section-info" }, a3 = { class: "section-count" }, l3 = {
  key: 0,
  class: "item-list"
}, i3 = { class: "item-name" }, r3 = {
  key: 0,
  class: "item-more"
}, c3 = {
  key: 0,
  class: "preview-section"
}, u3 = { class: "git-info" }, d3 = /* @__PURE__ */ fe({
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
    return (c, u) => (a(), r("div", Ax, [
      t("div", Ux, [
        S(Ut, null, {
          default: h(() => [...u[0] || (u[0] = [
            $("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), r("span", Nx, [
          u[1] || (u[1] = $(" From: ", -1)),
          S(Ma, null, {
            default: h(() => [
              $(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", zx, [
        t("div", Fx, [
          t("div", Bx, [
            u[3] || (u[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", Vx, [
              u[2] || (u[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", Wx, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), r("div", Gx, [
            (a(!0), r(j, null, ge(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", jx, f(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), r("div", Hx, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", Kx, [
          t("div", qx, [
            u[6] || (u[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", Yx, [
              u[5] || (u[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", Jx, f(n.value) + " file" + f(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), r("div", Qx, [
            (a(!0), r(j, null, ge(e.models.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", Xx, [
                t("span", Zx, f(d.filename), 1),
                t("span", e3, f(i(d.size)) + " • " + f(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), r("div", t3, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", s3, [
          t("div", o3, [
            u[9] || (u[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", n3, [
              u[8] || (u[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", a3, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), r("div", l3, [
            (a(!0), r(j, null, ge(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", i3, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), r("div", r3, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), r("div", c3, [
          u[11] || (u[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", u3, [
            e.gitBranch ? (a(), D(dt, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                S(Ma, null, {
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
                S(br, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), f3 = /* @__PURE__ */ ve(d3, [["__scopeId", "data-v-182fe113"]]), m3 = { class: "import-config" }, v3 = { class: "config-container" }, p3 = { class: "config-field" }, g3 = { class: "input-wrapper" }, h3 = ["value"], y3 = {
  key: 0,
  class: "validating-indicator"
}, w3 = {
  key: 1,
  class: "valid-indicator"
}, _3 = {
  key: 0,
  class: "field-error"
}, k3 = { class: "config-field" }, b3 = { class: "strategy-options" }, $3 = ["value", "checked", "onChange"], C3 = { class: "strategy-content" }, x3 = { class: "strategy-label" }, S3 = { class: "strategy-description" }, I3 = { class: "config-field switch-field" }, E3 = { class: "switch-label" }, T3 = ["checked"], P3 = { class: "advanced-section" }, R3 = { class: "advanced-content" }, M3 = { class: "config-field" }, D3 = ["value"], L3 = ["value"], O3 = /* @__PURE__ */ fe({
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
    return (v, g) => (a(), r("div", m3, [
      S(Ut, null, {
        default: h(() => [...g[2] || (g[2] = [
          $("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", v3, [
        t("div", p3, [
          S(Sn, { required: "" }, {
            default: h(() => [...g[3] || (g[3] = [
              $("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", g3, [
            t("input", {
              type: "text",
              class: Ie(["name-input", { error: e.nameError || e.name.length === 0, valid: i.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: m
            }, null, 42, h3),
            l.value ? (a(), r("span", y3, "...")) : i.value ? (a(), r("span", w3, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), r("div", _3, f(e.nameError), 1)) : y("", !0),
          g[4] || (g[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", k3, [
          S(Sn, null, {
            default: h(() => [...g[5] || (g[5] = [
              $("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", b3, [
            (a(), r(j, null, ge(c, (w) => t("label", {
              key: w.value,
              class: Ie(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (p) => n("update:modelStrategy", w.value)
              }, null, 40, $3),
              t("div", C3, [
                t("span", x3, f(w.label), 1),
                t("span", S3, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", I3, [
          t("label", E3, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: g[0] || (g[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, T3),
            g[6] || (g[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", P3, [
          g[8] || (g[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", R3, [
            t("div", M3, [
              S(Sn, null, {
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
                (a(!0), r(j, null, ge(We(al), (w) => (a(), r("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, L3))), 128))
              ], 40, D3)
            ])
          ])
        ])
      ])
    ]));
  }
}), A3 = /* @__PURE__ */ ve(O3, [["__scopeId", "data-v-89ea06a1"]]), U3 = { class: "import-flow" }, N3 = {
  key: 0,
  class: "import-empty"
}, z3 = { class: "git-import-section" }, F3 = { class: "git-url-input-row" }, B3 = ["disabled"], V3 = {
  key: 0,
  class: "git-error"
}, W3 = {
  key: 1,
  class: "import-configure"
}, G3 = { class: "selected-file-bar" }, j3 = {
  key: 0,
  class: "file-bar-content"
}, H3 = { class: "file-bar-info" }, K3 = { class: "file-bar-name" }, q3 = { class: "file-bar-size" }, Y3 = {
  key: 1,
  class: "file-bar-content"
}, J3 = { class: "file-bar-info" }, Q3 = { class: "file-bar-name" }, X3 = {
  key: 0,
  class: "preview-loading"
}, Z3 = { class: "import-actions" }, e5 = {
  key: 2,
  class: "import-progress"
}, t5 = { class: "creating-intro" }, s5 = {
  key: 0,
  class: "progress-warning"
}, o5 = {
  key: 1,
  class: "import-error"
}, n5 = { class: "error-message" }, a5 = {
  key: 3,
  class: "import-complete"
}, l5 = { class: "complete-message" }, i5 = { class: "complete-title" }, r5 = { class: "complete-details" }, c5 = { class: "complete-actions" }, u5 = /* @__PURE__ */ fe({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var Fe, ze, Te, Pe;
    const n = e, l = o, { previewTarballImport: i, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: m, getImportProgress: v } = tt();
    let g = null;
    const w = k(null), p = k(n.resumeImport ?? !1), _ = k(!1), C = k(!1), b = k(""), I = k(!1), M = k(null), x = k(""), E = k(null), H = k(!1), K = k(null), B = k(null), T = k({
      name: ((Fe = n.initialProgress) == null ? void 0 : Fe.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), P = k(null), L = k({
      message: ((ze = n.initialProgress) == null ? void 0 : ze.message) ?? "Preparing import...",
      phase: ((Te = n.initialProgress) == null ? void 0 : Te.phase) ?? "",
      progress: ((Pe = n.initialProgress) == null ? void 0 : Pe.progress) ?? 0,
      error: null
    }), le = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Z = U(() => {
      if (!B.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const ke = B.value;
      return {
        sourceEnvironment: ke.comfyui_version ? `ComfyUI ${ke.comfyui_version}` : "Unknown",
        workflows: ke.workflows.map((he) => he.name),
        models: ke.models.map((he) => ({
          filename: he.filename,
          size: 0,
          type: he.relative_path.split("/")[0] || "model"
        })),
        nodes: ke.nodes.map((he) => he.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), z = U(() => !I.value && !M.value && B.value && T.value.name.length > 0 && !P.value && (w.value || E.value));
    async function W(ke) {
      w.value = ke, I.value = !0, M.value = null, B.value = null;
      try {
        const he = await i(ke);
        B.value = he;
      } catch (he) {
        M.value = he instanceof Error ? he.message : "Failed to analyze file", console.error("Preview error:", he);
      } finally {
        I.value = !1;
      }
    }
    function Y() {
      w.value = null, E.value = null, x.value = "", K.value = null, _.value = !1, C.value = !1, b.value = "", B.value = null, M.value = null, T.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, P.value = null, l("source-cleared");
    }
    function A() {
      pe(), Y(), p.value = !1, I.value = !1, H.value = !1, L.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function se() {
      if (x.value.trim()) {
        H.value = !0, K.value = null;
        try {
          const ke = await c(x.value.trim());
          E.value = x.value.trim(), B.value = ke;
        } catch (ke) {
          K.value = ke instanceof Error ? ke.message : "Failed to analyze repository";
        } finally {
          H.value = !1;
        }
      }
    }
    function X(ke) {
      try {
        const he = new URL(ke);
        return he.host + he.pathname.replace(/\.git$/, "");
      } catch {
        return ke;
      }
    }
    async function ye(ke) {
      if (!ke) {
        P.value = "Environment name is required";
        return;
      }
      try {
        const he = await u(ke);
        P.value = he.valid ? null : he.error || "Invalid name";
      } catch {
        P.value = "Failed to validate name";
      }
    }
    async function _e() {
      if (T.value.name && !(!w.value && !E.value)) {
        p.value = !0, _.value = !1, L.value = { message: `Creating environment '${T.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let ke;
          if (w.value)
            ke = await d(
              w.value,
              T.value.name,
              T.value.modelStrategy,
              T.value.torchBackend
            );
          else if (E.value)
            ke = await m(
              E.value,
              T.value.name,
              T.value.modelStrategy,
              T.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ke.status === "started" ? ce() : (C.value = !1, b.value = ke.message, p.value = !1, _.value = !0);
        } catch (ke) {
          C.value = !1, b.value = ke instanceof Error ? ke.message : "Unknown error occurred during import", p.value = !1, _.value = !0;
        }
      }
    }
    async function ce() {
      if (g) return;
      const ke = async () => {
        try {
          const De = await v();
          return L.value = {
            message: De.message,
            phase: De.phase || "",
            progress: De.progress ?? (De.state === "importing" ? 50 : 0),
            error: De.error || null
          }, De.state === "complete" ? (pe(), C.value = !0, b.value = `Environment '${De.environment_name}' created successfully`, p.value = !1, _.value = !0, De.environment_name && l("import-complete", De.environment_name, T.value.switchAfterImport), !1) : De.state === "error" ? (pe(), C.value = !1, b.value = De.error || De.message, p.value = !1, _.value = !0, !1) : !0;
        } catch (De) {
          return console.error("Failed to poll import progress:", De), !0;
        }
      };
      await ke() && (g = setInterval(async () => {
        await ke() || pe();
      }, 2e3));
    }
    function pe() {
      g && (clearInterval(g), g = null);
    }
    function Se(ke) {
      return ke < 1024 ? `${ke} B` : ke < 1024 * 1024 ? `${(ke / 1024).toFixed(1)} KB` : ke < 1024 * 1024 * 1024 ? `${(ke / (1024 * 1024)).toFixed(1)} MB` : `${(ke / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Qe(async () => {
      try {
        const ke = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", ke.state, ke), ke.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", ke.environment_name), p.value = !0, T.value.name = ke.environment_name || T.value.name || "", L.value = {
          progress: ke.progress ?? 0,
          message: ke.message || "Importing...",
          phase: ke.phase || "",
          error: null
        }, ce());
      } catch (ke) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", ke);
      }
    }), s({
      handleReset: A,
      isImporting: p,
      canImport: z
    }), (ke, he) => {
      var De;
      return a(), r("div", U3, [
        !w.value && !E.value && !p.value ? (a(), r("div", N3, [
          S(Ox, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: W
          }),
          he[7] || (he[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", z3, [
            he[5] || (he[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", F3, [
              qe(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": he[0] || (he[0] = (Re) => x.value = Re),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Kt(se, ["enter"]),
                disabled: H.value
              }, null, 40, B3), [
                [zt, x.value]
              ]),
              S(ue, {
                variant: "primary",
                size: "sm",
                disabled: !x.value.trim() || H.value,
                onClick: se
              }, {
                default: h(() => [
                  $(f(H.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            K.value ? (a(), r("div", V3, f(K.value), 1)) : y("", !0),
            he[6] || (he[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || E.value) && !p.value && !_.value ? (a(), r("div", W3, [
          t("div", G3, [
            w.value ? (a(), r("div", j3, [
              he[8] || (he[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", H3, [
                t("div", K3, f(w.value.name), 1),
                t("div", q3, f(Se(w.value.size)), 1)
              ])
            ])) : E.value ? (a(), r("div", Y3, [
              he[10] || (he[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", J3, [
                t("div", Q3, f(X(E.value)), 1),
                he[9] || (he[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            S(ue, {
              variant: "ghost",
              size: "sm",
              onClick: Y
            }, {
              default: h(() => [...he[11] || (he[11] = [
                $(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          I.value ? (a(), r("div", X3, [...he[12] || (he[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : M.value ? (a(), D(Qt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [M.value]
          }, null, 8, ["details"])) : B.value ? (a(), D(f3, {
            key: 2,
            "source-environment": Z.value.sourceEnvironment,
            workflows: Z.value.workflows,
            models: Z.value.models,
            nodes: Z.value.nodes,
            "git-branch": Z.value.gitBranch,
            "git-commit": Z.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          B.value ? (a(), D(A3, {
            key: 3,
            name: T.value.name,
            "onUpdate:name": he[1] || (he[1] = (Re) => T.value.name = Re),
            "model-strategy": T.value.modelStrategy,
            "onUpdate:modelStrategy": he[2] || (he[2] = (Re) => T.value.modelStrategy = Re),
            "torch-backend": T.value.torchBackend,
            "onUpdate:torchBackend": he[3] || (he[3] = (Re) => T.value.torchBackend = Re),
            "switch-after-import": T.value.switchAfterImport,
            "onUpdate:switchAfterImport": he[4] || (he[4] = (Re) => T.value.switchAfterImport = Re),
            "name-error": P.value,
            onValidateName: ye
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          T.value.modelStrategy === "skip" && ((De = B.value) != null && De.models_needing_download) ? (a(), D(Qt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${B.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", Z3, [
            S(ue, {
              variant: "secondary",
              size: "md",
              onClick: Y
            }, {
              default: h(() => [...he[13] || (he[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(ue, {
              variant: "primary",
              size: "md",
              disabled: !z.value,
              onClick: _e
            }, {
              default: h(() => [...he[14] || (he[14] = [
                $(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (a(), r("div", e5, [
          t("p", t5, [
            he[15] || (he[15] = $(" Importing environment ", -1)),
            t("strong", null, f(T.value.name), 1),
            he[16] || (he[16] = $("... ", -1))
          ]),
          S(zn, {
            progress: L.value.progress,
            message: L.value.message,
            "current-phase": L.value.phase,
            variant: L.value.error ? "error" : "default",
            "show-steps": !0,
            steps: le
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          L.value.error ? y("", !0) : (a(), r("p", s5, " This may take several minutes. Please wait... ")),
          L.value.error ? (a(), r("div", o5, [
            t("p", n5, f(L.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), r("div", a5, [
          t("div", {
            class: Ie(["complete-icon", C.value ? "success" : "error"])
          }, f(C.value ? "✓" : "✕"), 3),
          t("div", l5, [
            t("div", i5, f(C.value ? "Import Successful" : "Import Failed"), 1),
            t("div", r5, f(b.value), 1)
          ]),
          t("div", c5, [
            S(ue, {
              variant: "primary",
              size: "md",
              onClick: A
            }, {
              default: h(() => [...he[17] || (he[17] = [
                $(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Ar = /* @__PURE__ */ ve(u5, [["__scopeId", "data-v-72cbc04e"]]), d5 = /* @__PURE__ */ fe({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, n = k(!1);
    function l(i, c) {
      c && o("import-complete-switch", i);
    }
    return (i, c) => (a(), r(j, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: c[0] || (c[0] = (u) => n.value = !0)
          })
        ]),
        content: h(() => [
          S(Ar, { onImportComplete: l })
        ]),
        _: 1
      }),
      S(as, {
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
}), f5 = /* @__PURE__ */ ve(d5, [["__scopeId", "data-v-e13bfe76"]]), wn = co(), m5 = 5e3, lo = k([]), pa = k(!1), ga = k(null);
let Ro = null;
async function _n(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function Ur(e) {
  const s = U(
    () => lo.value.filter((p) => p.status === "running")
  ), o = U(
    () => lo.value.filter((p) => p.status === "deploying")
  ), n = U(
    () => lo.value.filter((p) => p.status === "stopped")
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
    return [...lo.value].sort(
      (_, C) => (p[_.status] ?? 5) - (p[C.status] ?? 5)
    );
  });
  async function c() {
    pa.value = !0, ga.value = null;
    try {
      let p;
      if (!wn) {
        const _ = await _n("/v2/comfygit/deploy/instances");
        if (!_.ok)
          throw new Error(`Failed to fetch instances: ${_.status}`);
        p = await _.json();
      }
      lo.value = p.instances;
    } catch (p) {
      ga.value = p instanceof Error ? p.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", p);
    } finally {
      pa.value = !1;
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
      if (!wn) {
        const _ = u(p, "stop"), C = await _n(_, { method: "POST" });
        if (!C.ok) {
          const b = await C.json();
          throw new Error(b.message || "Failed to stop instance");
        }
      }
      await c();
    } catch (_) {
      throw console.error("[useDeployInstances] stopInstance error:", _), _;
    }
  }
  async function m(p) {
    try {
      if (!wn) {
        const _ = u(p, "start"), C = await _n(_, { method: "POST" });
        if (!C.ok) {
          const b = await C.json();
          throw new Error(b.message || "Failed to start instance");
        }
      }
      await c();
    } catch (_) {
      throw console.error("[useDeployInstances] startInstance error:", _), _;
    }
  }
  async function v(p) {
    try {
      if (!wn) {
        const _ = u(p, "terminate"), C = await _n(_, { method: "DELETE" });
        if (!C.ok) {
          const b = await C.json();
          throw new Error(b.message || "Failed to terminate instance");
        }
      }
      await c();
    } catch (_) {
      throw console.error("[useDeployInstances] terminateInstance error:", _), _;
    }
  }
  function g() {
    Ro || (Ro = window.setInterval(c, m5));
  }
  function w() {
    Ro && (clearInterval(Ro), Ro = null);
  }
  return gt(o, (p) => {
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
const v5 = { class: "instance-header" }, p5 = { class: "provider-badge" }, g5 = { class: "instance-name" }, h5 = {
  key: 0,
  class: "spinner"
}, y5 = { class: "instance-details" }, w5 = {
  key: 0,
  class: "detail"
}, _5 = {
  key: 1,
  class: "detail instance-url"
}, k5 = {
  key: 2,
  class: "detail"
}, b5 = {
  key: 3,
  class: "detail"
}, $5 = {
  key: 4,
  class: "detail total-cost"
}, C5 = {
  key: 0,
  class: "deployment-progress"
}, x5 = { class: "progress-message" }, S5 = { class: "instance-actions" }, I5 = /* @__PURE__ */ fe({
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
    function u(d) {
      const m = Math.floor(d / 3600), v = Math.floor(d % 3600 / 60);
      return m > 0 ? `${m}h ${v}m` : `${v}m`;
    }
    return (d, m) => (a(), r("div", {
      class: Ie(["instance-card", l.value])
    }, [
      t("div", v5, [
        t("span", p5, f(o.value), 1),
        t("span", g5, f(e.instance.name), 1),
        t("span", {
          class: Ie(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (a(), r("span", h5)) : y("", !0),
          $(" " + f(n.value), 1)
        ], 2)
      ]),
      t("div", y5, [
        e.instance.gpu_type ? (a(), r("span", w5, f(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (a(), r("span", _5, f(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (a(), r("span", k5, f(u(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (a(), r("span", b5, "$" + f(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (a(), r("span", $5, "$" + f(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (a(), r("div", C5, [
        t("div", x5, f(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (a(), D(ea, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", S5, [
        e.instance.status === "running" && e.instance.comfyui_url ? (a(), D(ue, {
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
        e.instance.console_url && e.instance.provider !== "custom" ? (a(), D(ue, {
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
        e.instance.status === "running" ? (a(), D(ue, {
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
        e.instance.status === "stopped" ? (a(), D(ue, {
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
        S(ue, {
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
}), E5 = /* @__PURE__ */ ve(I5, [["__scopeId", "data-v-746c3894"]]), T5 = { class: "instances-tab" }, P5 = { class: "instances-header" }, R5 = {
  key: 0,
  class: "loading-state"
}, M5 = {
  key: 1,
  class: "empty-state"
}, D5 = {
  key: 2,
  class: "instances-list"
}, L5 = /* @__PURE__ */ fe({
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
    return (n, l) => (a(), r("div", T5, [
      t("div", P5, [
        S(Ut, null, {
          default: h(() => [...l[4] || (l[4] = [
            $("Active Instances", -1)
          ])]),
          _: 1
        }),
        S(ue, {
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
      e.isLoading && e.instances.length === 0 ? (a(), r("div", R5, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        $(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (a(), r("div", M5, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (a(), r("div", D5, [
        (a(!0), r(j, null, ge(o.value, (i) => (a(), D(E5, {
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
}), O5 = /* @__PURE__ */ ve(L5, [["__scopeId", "data-v-ba614fc3"]]), A5 = { class: "remote-header" }, U5 = { class: "remote-info" }, N5 = { class: "remote-icon" }, z5 = { class: "remote-name" }, F5 = {
  key: 0,
  class: "default-badge"
}, B5 = {
  key: 1,
  class: "sync-badge"
}, V5 = {
  key: 0,
  class: "ahead"
}, W5 = {
  key: 1,
  class: "behind"
}, G5 = {
  key: 1,
  class: "synced"
}, j5 = ["href"], H5 = {
  key: 1,
  class: "remote-url-text"
}, K5 = { class: "remote-actions" }, q5 = /* @__PURE__ */ fe({
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
      class: Ie(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", A5, [
        t("div", U5, [
          t("span", N5, f(o.value ? "🔗" : "🌐"), 1),
          t("span", z5, f(e.remote.name), 1),
          o.value ? (a(), r("span", F5, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", B5, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", V5, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", W5, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", G5, "✓ synced"))
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
        }, f(l.value), 9, j5)) : (a(), r("span", H5, f(l.value), 1))
      ]),
      t("div", K5, [
        S(ue, {
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
        e.syncStatus && e.syncStatus.ahead > 0 ? (a(), D(ue, {
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
        S(ue, {
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
}), Nr = /* @__PURE__ */ ve(q5, [["__scopeId", "data-v-d687d161"]]), Y5 = { class: "runpod-tab" }, J5 = { class: "api-key-card" }, Q5 = { class: "api-key-row" }, X5 = { class: "api-key-input-wrapper" }, Z5 = ["type", "disabled"], eS = ["title"], tS = { class: "status-icon" }, sS = { class: "status-text" }, oS = {
  key: 0,
  class: "credit-balance"
}, nS = { class: "config-card" }, aS = { class: "config-row" }, lS = ["disabled"], iS = {
  key: 0,
  value: ""
}, rS = {
  key: 1,
  value: "",
  disabled: ""
}, cS = ["value", "disabled"], uS = { class: "config-row" }, dS = {
  key: 0,
  class: "loading-inline"
}, fS = { class: "no-volumes-state" }, mS = { class: "no-volumes-text" }, vS = ["value"], pS = { class: "config-row" }, gS = ["disabled"], hS = {
  key: 0,
  value: ""
}, yS = {
  key: 1,
  value: ""
}, wS = {
  key: 2,
  value: ""
}, _S = ["value"], kS = { class: "config-row" }, bS = { class: "radio-group" }, $S = { class: "radio-option" }, CS = { class: "radio-label" }, xS = { class: "radio-option disabled" }, SS = { class: "radio-label" }, IS = { class: "config-row" }, ES = { class: "radio-group" }, TS = { class: "radio-option" }, PS = { class: "radio-label" }, RS = { class: "radio-option disabled" }, MS = { class: "radio-label" }, DS = { class: "config-row" }, LS = {
  key: 0,
  class: "loading-text"
}, OS = {
  key: 1,
  class: "empty-remotes"
}, AS = { class: "remotes-list" }, US = {
  key: 0,
  class: "sync-warning"
}, NS = { class: "warning-content" }, zS = { class: "remotes-footer" }, FS = { class: "summary-card" }, BS = {
  key: 0,
  class: "loading-text"
}, VS = { class: "summary-row" }, WS = { class: "summary-value" }, GS = { class: "summary-row" }, jS = { class: "summary-value" }, HS = { class: "summary-row" }, KS = { class: "summary-value" }, qS = {
  key: 0,
  class: "summary-sub-row"
}, YS = { class: "summary-sub-label" }, JS = {
  key: 1,
  class: "summary-sub-row warning"
}, QS = { class: "summary-sub-label" }, XS = { class: "summary-row" }, ZS = { class: "summary-value" }, e8 = { class: "summary-row" }, t8 = { class: "summary-value" }, s8 = { class: "deployment-summary" }, o8 = { class: "summary-columns" }, n8 = { class: "summary-column" }, a8 = { class: "pricing-row" }, l8 = { class: "pricing-value" }, i8 = { class: "pricing-row" }, r8 = { class: "pricing-value" }, c8 = { class: "pricing-row" }, u8 = { class: "pricing-value" }, d8 = { class: "pricing-row total" }, f8 = { class: "pricing-value" }, m8 = { class: "summary-column" }, v8 = { class: "spec-row" }, p8 = { class: "spec-row" }, g8 = {
  key: 0,
  class: "spec-row"
}, h8 = {
  key: 1,
  class: "spec-row spot-warning"
}, y8 = {
  key: 4,
  class: "deploy-actions"
}, w8 = { class: "progress-content" }, _8 = { class: "phase-indicator" }, k8 = { key: 0 }, b8 = { key: 1 }, $8 = { key: 2 }, C8 = {
  key: 3,
  class: "spinner"
}, x8 = { class: "phase-text" }, S8 = { class: "phase-name" }, I8 = { class: "phase-detail" }, E8 = {
  key: 0,
  class: "ready-actions"
}, T8 = { class: "console-link" }, P8 = ["href"], R8 = /* @__PURE__ */ fe({
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
      fetchRemote: _,
      pushToRemote: C,
      getDataCenters: b
    } = tt(), I = k(!1), M = k(""), x = k(!1), E = k(!1), H = k(null), K = k(null), B = k(""), T = k(""), P = k(""), L = k("SECURE"), le = k("ON_DEMAND"), Z = k("my-comfyui-deploy"), z = k([]), W = k({}), Y = k(!1), A = k(null), se = k(null), X = k(null), ye = k([]), _e = k(!1), ce = k([]), pe = k(!1), Se = k([]), Fe = k(!1), ze = k(null), Te = k(!1), Pe = k(!1), ke = k(null), he = k(!1), De = k(null), Re = k(null), O = k(null), R = k(!1), N = k(null), V = k(!1), ee = k(!1), re = U(() => ce.value.find((xe) => xe.id === T.value) || null), we = U(() => B.value ? ce.value.filter((xe) => xe.data_center_id === B.value) : ce.value), $e = U(() => Se.value.filter((xe) => xe.available)), ae = U(() => A.value && W.value[A.value] || null), me = U(() => {
      if (!A.value) return null;
      const xe = z.value.find((te) => te.name === A.value);
      return (xe == null ? void 0 : xe.fetch_url) || null;
    }), Le = U(() => x.value && T.value && P.value && me.value && !Pe.value && !R.value), Ee = (xe) => {
      const te = Se.value.find((ht) => ht.id === P.value);
      if (!te) return "0.00";
      if (xe === "SECURE") return (te.securePrice ?? 0).toFixed(2);
      if (xe === "COMMUNITY") return (te.communityPrice ?? 0).toFixed(2);
      const He = L.value === "SECURE";
      return xe === "ON_DEMAND" ? He ? (te.securePrice ?? 0).toFixed(2) : (te.communityPrice ?? 0).toFixed(2) : He ? (te.secureSpotPrice ?? 0).toFixed(2) : (te.communitySpotPrice ?? 0).toFixed(2);
    }, ne = U(() => {
      const xe = Se.value.find((ls) => ls.id === P.value), te = ce.value.find((ls) => ls.id === T.value);
      if (!xe) return null;
      const He = L.value === "SECURE", ht = le.value === "SPOT";
      let Jt;
      ht ? Jt = He ? xe.secureSpotPrice ?? 0 : xe.communitySpotPrice ?? 0 : Jt = He ? xe.securePrice ?? 0 : xe.communityPrice ?? 0;
      const ys = te ? te.size_gb * 14e-5 : 0, ws = 4e-3;
      return {
        gpu: Jt,
        volume: ys,
        container: ws,
        total: Jt + ys + ws
      };
    });
    async function Q() {
      await Ve(), await Promise.all([vt(), Oe()]);
    }
    async function Oe() {
      Y.value = !0;
      try {
        const xe = await w();
        z.value = xe.remotes, await Promise.all(
          xe.remotes.map(async (He) => {
            const ht = await p(He.name);
            ht && (W.value[He.name] = ht);
          })
        );
        const te = xe.remotes.find((He) => He.is_default);
        te ? A.value = te.name : xe.remotes.length > 0 && (A.value = xe.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        Y.value = !1;
      }
    }
    async function Ce(xe) {
      se.value = xe;
      try {
        await _(xe);
        const te = await p(xe);
        te && (W.value[xe] = te), o("toast", `Fetched from ${xe}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        se.value = null;
      }
    }
    async function be(xe) {
      X.value = xe;
      try {
        await C(xe, { force: !1 });
        const te = await p(xe);
        te && (W.value[xe] = te), o("toast", `Pushed to ${xe}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        X.value = null;
      }
    }
    function G(xe) {
      A.value = xe;
    }
    async function F() {
      if (M.value) {
        E.value = !0, H.value = null;
        try {
          const xe = await l(M.value, !0);
          xe.status === "success" ? (x.value = !0, K.value = xe.credit_balance ?? null, H.value = { type: "success", message: xe.message }, await Q()) : H.value = { type: "error", message: xe.message };
        } catch (xe) {
          H.value = {
            type: "error",
            message: xe instanceof Error ? xe.message : "Connection test failed"
          };
        } finally {
          E.value = !1;
        }
      }
    }
    async function de() {
      try {
        await v(), M.value = "", x.value = !1, H.value = null, K.value = null, ye.value = [], B.value = "", ce.value = [], T.value = "", Se.value = [], P.value = "", ze.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function Ve() {
      pe.value = !0, _e.value = !0;
      try {
        const xe = await i();
        ce.value = xe.volumes;
        const te = /* @__PURE__ */ new Map();
        for (const He of xe.volumes)
          He.data_center_id && !te.has(He.data_center_id) && te.set(He.data_center_id, {
            id: He.data_center_id,
            name: He.data_center_name || He.data_center_id,
            available: !0
          });
        if (xe.volumes.length === 0) {
          const He = await b();
          ye.value = He.data_centers;
        } else
          ye.value = Array.from(te.values());
        if (ce.value.length > 0) {
          const He = ce.value[0];
          T.value = He.id, He.data_center_id && (B.value = He.data_center_id, await Xe(He.data_center_id));
        } else ye.value.length > 0 && (B.value = ye.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        pe.value = !1, _e.value = !1;
      }
    }
    async function Xe(xe) {
      Fe.value = !0;
      try {
        const te = await c(xe);
        Se.value = te.gpu_types;
        const He = Se.value.find((ht) => ht.available);
        He ? P.value = He.id : P.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        Fe.value = !1;
      }
    }
    gt(B, async (xe) => {
      if (!xe || pe.value) return;
      const te = ce.value.find((He) => He.id === T.value);
      te && te.data_center_id !== xe && (T.value = ""), await Xe(xe);
    }), gt(T, async (xe) => {
      if (!xe) {
        Se.value = [], P.value = "";
        return;
      }
      if (pe.value) return;
      const te = ce.value.find((He) => He.id === xe);
      te && te.data_center_id !== B.value ? B.value = te.data_center_id : te && await Xe(te.data_center_id);
    });
    async function vt() {
      Te.value = !0;
      try {
        ze.value = await n();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        Te.value = !1;
      }
    }
    async function at() {
      if (!(!P.value || !T.value)) {
        R.value = !0, ke.value = null;
        try {
          const xe = await g();
          N.value = xe, xe.can_export ? xe.warnings.models_without_sources.length > 0 ? ee.value = !0 : await Bt() : V.value = !0;
        } catch (xe) {
          ke.value = {
            status: "error",
            message: xe instanceof Error ? xe.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          R.value = !1;
        }
      }
    }
    async function ut() {
      ee.value = !1, await Bt();
    }
    async function Mt() {
      try {
        const xe = await g();
        N.value = xe;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function Bt() {
      Pe.value = !0;
      try {
        let xe;
        if (le.value === "SPOT") {
          const He = Se.value.find((ht) => ht.id === P.value);
          He && (xe = L.value === "SECURE" ? He.secureSpotPrice : He.communitySpotPrice);
        }
        const te = await u({
          gpu_type_id: P.value,
          pod_name: Z.value || "my-comfyui-deploy",
          network_volume_id: T.value,
          cloud_type: L.value,
          pricing_type: le.value,
          spot_bid: xe,
          import_source: me.value
        });
        ke.value = te, te.status === "success" && te.pod_id ? (De.value = te.pod_id, he.value = !0, Yt(te.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", te.message, "error");
      } catch (xe) {
        ke.value = {
          status: "error",
          message: xe instanceof Error ? xe.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        Pe.value = !1;
      }
    }
    function Yt(xe) {
      Ms(xe), O.value = window.setInterval(() => Ms(xe), 3e3);
    }
    function Gs() {
      O.value && (clearInterval(O.value), O.value = null);
    }
    async function Ms(xe) {
      try {
        const te = await d(xe);
        Re.value = te, (te.phase === "READY" || te.phase === "ERROR" || te.phase === "STOPPED") && (Gs(), te.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (te) {
        console.error("Failed to poll deployment status:", te);
      }
    }
    function no() {
      he.value = !1, Gs(), De.value = null, Re.value = null;
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
    return Qe(async () => {
      try {
        const xe = await m(!0);
        xe.has_key && xe.key_preview && (M.value = `****${xe.key_preview}`, xe.valid ? (x.value = !0, K.value = xe.credit_balance ?? null, H.value = { type: "success", message: "Connected to RunPod" }, await Q()) : xe.error && (H.value = { type: "error", message: xe.error }));
      } catch {
      }
    }), Ws(() => {
      Gs();
    }), (xe, te) => {
      var He, ht, Jt, ys, ws, ls;
      return a(), r(j, null, [
        t("div", Y5, [
          S(lt, { title: "RUNPOD API KEY" }, {
            default: h(() => [
              t("div", J5, [
                t("div", Q5, [
                  t("div", X5, [
                    qe(t("input", {
                      "onUpdate:modelValue": te[0] || (te[0] = (Ue) => M.value = Ue),
                      type: I.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: x.value
                    }, null, 8, Z5), [
                      [Xn, M.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: te[1] || (te[1] = (Ue) => I.value = !I.value),
                      title: I.value ? "Hide key" : "Show key"
                    }, f(I.value ? "👁" : "👁‍🗨"), 9, eS)
                  ]),
                  x.value ? y("", !0) : (a(), D(ue, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: E.value,
                    disabled: !M.value || E.value,
                    onClick: F
                  }, {
                    default: h(() => [...te[16] || (te[16] = [
                      $(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  x.value ? (a(), D(ue, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: de
                  }, {
                    default: h(() => [...te[17] || (te[17] = [
                      $(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                H.value ? (a(), r("div", {
                  key: 0,
                  class: Ie(["connection-status", H.value.type])
                }, [
                  t("span", tS, f(H.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", sS, f(H.value.message), 1),
                  K.value !== null ? (a(), r("span", oS, " $" + f(K.value.toFixed(2)) + " credit ", 1)) : y("", !0)
                ], 2)) : y("", !0),
                te[18] || (te[18] = t("div", { class: "api-key-help" }, [
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
              t("div", nS, [
                t("div", aS, [
                  te[19] || (te[19] = t("label", { class: "config-label" }, "Region", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": te[2] || (te[2] = (Ue) => B.value = Ue),
                    class: "config-select",
                    disabled: _e.value
                  }, [
                    _e.value ? (a(), r("option", iS, "Loading...")) : B.value ? y("", !0) : (a(), r("option", rS, "Select a region")),
                    (a(!0), r(j, null, ge(ye.value, (Ue) => (a(), r("option", {
                      key: Ue.id,
                      value: Ue.id,
                      disabled: !Ue.available
                    }, f(Ue.id) + " (" + f(Ue.name) + ")" + f(Ue.available ? "" : " [Unavailable]"), 9, cS))), 128))
                  ], 8, lS), [
                    [hs, B.value]
                  ])
                ]),
                t("div", uS, [
                  te[24] || (te[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  pe.value ? (a(), r("div", dS, "Loading volumes...")) : we.value.length === 0 ? (a(), r(j, { key: 1 }, [
                    t("div", fS, [
                      te[20] || (te[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", mS, "No volumes in " + f(B.value || "this region"), 1)
                    ]),
                    te[21] || (te[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    te[22] || (te[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (a(), r(j, { key: 2 }, [
                    qe(t("select", {
                      "onUpdate:modelValue": te[3] || (te[3] = (Ue) => T.value = Ue),
                      class: "config-select"
                    }, [
                      (a(!0), r(j, null, ge(we.value, (Ue) => (a(), r("option", {
                        key: Ue.id,
                        value: Ue.id
                      }, f(Ue.name) + " (" + f(Ue.size_gb) + "GB) ", 9, vS))), 128))
                    ], 512), [
                      [hs, T.value]
                    ]),
                    te[23] || (te[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", pS, [
                  te[25] || (te[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": te[4] || (te[4] = (Ue) => P.value = Ue),
                    class: "config-select",
                    disabled: Fe.value || !T.value
                  }, [
                    T.value ? Fe.value ? (a(), r("option", yS, "Loading GPUs...")) : $e.value.length === 0 ? (a(), r("option", wS, "No GPUs available in this region")) : y("", !0) : (a(), r("option", hS, "Select a volume first")),
                    (a(!0), r(j, null, ge($e.value, (Ue) => (a(), r("option", {
                      key: Ue.id,
                      value: Ue.id
                    }, f(Ue.displayName) + " (" + f(Ue.memoryInGb) + "GB) - $" + f(L.value === "SECURE" ? (Ue.securePrice ?? 0).toFixed(2) : (Ue.communityPrice ?? 0).toFixed(2)) + "/hr " + f(Ue.stockStatus ? `[${Ue.stockStatus}]` : ""), 9, _S))), 128))
                  ], 8, gS), [
                    [hs, P.value]
                  ])
                ]),
                t("div", kS, [
                  te[26] || (te[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", bS, [
                    t("label", $S, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": te[5] || (te[5] = (Ue) => L.value = Ue),
                        value: "SECURE"
                      }, null, 512), [
                        [Zt, L.value]
                      ]),
                      t("span", CS, "Secure ($" + f(Ee("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", xS, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": te[6] || (te[6] = (Ue) => L.value = Ue),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [Zt, L.value]
                      ]),
                      t("span", SS, "Community ($" + f(Ee("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", IS, [
                  te[27] || (te[27] = t("label", { class: "config-label" }, [
                    $(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", ES, [
                    t("label", TS, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": te[7] || (te[7] = (Ue) => le.value = Ue),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Zt, le.value]
                      ]),
                      t("span", PS, "On-Demand ($" + f(Ee("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", RS, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": te[8] || (te[8] = (Ue) => le.value = Ue),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [Zt, le.value]
                      ]),
                      t("span", MS, "Spot ($" + f(Ee("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", DS, [
                  te[28] || (te[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  qe(t("input", {
                    "onUpdate:modelValue": te[9] || (te[9] = (Ue) => Z.value = Ue),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [zt, Z.value]
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
              Y.value ? (a(), r("div", LS, "Loading remotes...")) : z.value.length === 0 ? (a(), r("div", OS, [
                te[30] || (te[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                S(ue, {
                  variant: "primary",
                  size: "xs",
                  onClick: te[10] || (te[10] = (Ue) => o("navigate", "remotes"))
                }, {
                  default: h(() => [...te[29] || (te[29] = [
                    $(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (a(), r(j, { key: 2 }, [
                t("div", AS, [
                  (a(!0), r(j, null, ge(z.value, (Ue) => (a(), D(Nr, {
                    key: Ue.name,
                    remote: Ue,
                    "sync-status": W.value[Ue.name],
                    "is-selected": A.value === Ue.name,
                    "is-fetching": se.value === Ue.name,
                    "is-pushing": X.value === Ue.name,
                    onFetch: Ce,
                    onPush: be,
                    onSelect: G
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                ae.value && ae.value.ahead > 0 ? (a(), r("div", US, [
                  te[31] || (te[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", NS, [
                    t("strong", null, f(ae.value.ahead) + " unpushed commit" + f(ae.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + f(A.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  S(ue, {
                    variant: "primary",
                    size: "xs",
                    loading: X.value === A.value,
                    onClick: te[11] || (te[11] = (Ue) => A.value && be(A.value))
                  }, {
                    default: h(() => [
                      $(" Push to " + f(A.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", zS, [
                  S(ue, {
                    variant: "link",
                    size: "xs",
                    onClick: te[12] || (te[12] = (Ue) => o("navigate", "remotes"))
                  }, {
                    default: h(() => [...te[32] || (te[32] = [
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
              t("div", FS, [
                Te.value ? (a(), r("div", BS, "Loading environment summary...")) : ze.value ? (a(), r(j, { key: 1 }, [
                  t("div", VS, [
                    te[33] || (te[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", WS, f(ze.value.comfyui_version), 1)
                  ]),
                  t("div", GS, [
                    te[34] || (te[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", jS, f(ze.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", HS, [
                    te[35] || (te[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", KS, f(ze.value.model_count) + " models", 1)
                  ]),
                  ze.value.models_with_sources > 0 ? (a(), r("div", qS, [
                    t("span", YS, "└─ " + f(ze.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  ze.value.models_without_sources > 0 ? (a(), r("div", JS, [
                    t("span", QS, "└─ " + f(ze.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", XS, [
                    te[36] || (te[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", ZS, f(ze.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", e8, [
                    te[37] || (te[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", t8, "~" + f(ze.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          x.value && ne.value ? (a(), D(lt, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: h(() => {
              var Ue, is;
              return [
                t("div", s8, [
                  t("div", o8, [
                    t("div", n8, [
                      te[42] || (te[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", a8, [
                        te[38] || (te[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", l8, "$" + f(ne.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", i8, [
                        te[39] || (te[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", r8, "$" + f(ne.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", c8, [
                        te[40] || (te[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", u8, "$" + f(ne.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      te[43] || (te[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", d8, [
                        te[41] || (te[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", f8, "~$" + f(ne.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", m8, [
                      te[45] || (te[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", v8, [
                        t("span", null, f(((Ue = Se.value.find((ie) => ie.id === P.value)) == null ? void 0 : Ue.displayName) || "GPU") + " (" + f(((is = Se.value.find((ie) => ie.id === P.value)) == null ? void 0 : is.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", p8, [
                        t("span", null, "Region: " + f(B.value), 1)
                      ]),
                      re.value ? (a(), r("div", g8, [
                        t("span", null, "Volume: " + f(re.value.name), 1)
                      ])) : y("", !0),
                      le.value === "SPOT" ? (a(), r("div", h8, [...te[44] || (te[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          x.value ? (a(), r("div", y8, [
            S(ue, {
              variant: "primary",
              size: "md",
              loading: R.value || Pe.value,
              disabled: !Le.value,
              onClick: at
            }, {
              default: h(() => [
                te[46] || (te[46] = t("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  t("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1)),
                $(" " + f(R.value ? "Validating..." : Pe.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          ke.value ? (a(), D(lt, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: h(() => [
              S(Et, {
                status: ke.value.status === "success" ? "synced" : "broken"
              }, oo({
                icon: h(() => [
                  $(f(ke.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  $(f(ke.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: h(() => [
                  $(f(ke.value.message), 1)
                ]),
                actions: h(() => [
                  S(ue, {
                    variant: "ghost",
                    size: "xs",
                    onClick: te[13] || (te[13] = (Ue) => ke.value = null)
                  }, {
                    default: h(() => [...te[47] || (te[47] = [
                      $(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                ke.value.pod_id ? {
                  name: "details",
                  fn: h(() => [
                    S(dt, {
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
        he.value ? (a(), D(ft, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((He = Re.value) == null ? void 0 : He.phase) === "READY" || ((ht = Re.value) == null ? void 0 : ht.phase) === "ERROR" || ((Jt = Re.value) == null ? void 0 : Jt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: no
        }, oo({
          body: h(() => {
            var Ue, is, ie, q, Ae, je, ot, mt, Dt, rs, js, Hs;
            return [
              t("div", w8, [
                t("div", _8, [
                  t("div", {
                    class: Ie(["phase-icon", (is = (Ue = Re.value) == null ? void 0 : Ue.phase) == null ? void 0 : is.toLowerCase()])
                  }, [
                    ((ie = Re.value) == null ? void 0 : ie.phase) === "READY" ? (a(), r("span", k8, "✓")) : ((q = Re.value) == null ? void 0 : q.phase) === "ERROR" ? (a(), r("span", b8, "✕")) : ((Ae = Re.value) == null ? void 0 : Ae.phase) === "STOPPED" ? (a(), r("span", $8, "○")) : (a(), r("span", C8, "⟳"))
                  ], 2),
                  t("div", x8, [
                    t("div", S8, f(xo((je = Re.value) == null ? void 0 : je.phase)), 1),
                    t("div", I8, f(((ot = Re.value) == null ? void 0 : ot.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                S(ea, {
                  progress: So((mt = Re.value) == null ? void 0 : mt.phase),
                  variant: ((Dt = Re.value) == null ? void 0 : Dt.phase) === "ERROR" ? "error" : ((rs = Re.value) == null ? void 0 : rs.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((js = Re.value) == null ? void 0 : js.phase) === "READY" ? (a(), r("div", E8, [
                  S(ue, {
                    variant: "primary",
                    size: "md",
                    onClick: Co
                  }, {
                    default: h(() => [...te[48] || (te[48] = [
                      $(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                t("div", T8, [
                  (Hs = Re.value) != null && Hs.console_url ? (a(), r("a", {
                    key: 0,
                    href: Re.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, P8)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((ys = Re.value) == null ? void 0 : ys.phase) === "READY" || ((ws = Re.value) == null ? void 0 : ws.phase) === "ERROR" || ((ls = Re.value) == null ? void 0 : ls.phase) === "STOPPED" ? {
            name: "footer",
            fn: h(() => [
              S(ue, {
                variant: "ghost",
                size: "xs",
                onClick: no
              }, {
                default: h(() => [...te[49] || (te[49] = [
                  $(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : y("", !0),
        V.value && N.value ? (a(), D(Lr, {
          key: 1,
          issues: N.value.blocking_issues,
          onClose: te[14] || (te[14] = (Ue) => V.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        ee.value && N.value ? (a(), D(Or, {
          key: 2,
          models: N.value.warnings.models_without_sources,
          onConfirm: ut,
          onCancel: te[15] || (te[15] = (Ue) => ee.value = !1),
          onRevalidate: Mt
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), M8 = /* @__PURE__ */ ve(R8, [["__scopeId", "data-v-522cd4d9"]]), D8 = { class: "worker-header" }, L8 = { class: "worker-status" }, O8 = { class: "worker-name" }, A8 = { class: "worker-actions" }, U8 = { class: "worker-details" }, N8 = { class: "detail-item" }, z8 = { class: "detail-value" }, F8 = {
  key: 0,
  class: "detail-item"
}, B8 = { class: "detail-value" }, V8 = {
  key: 1,
  class: "detail-item"
}, W8 = { class: "detail-value mode-badge" }, G8 = {
  key: 0,
  class: "worker-stats"
}, j8 = {
  key: 0,
  class: "stat-item"
}, H8 = { key: 0 }, K8 = {
  key: 1,
  class: "worker-stats offline"
}, q8 = /* @__PURE__ */ fe({
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
      t("div", D8, [
        t("div", L8, [
          t("span", {
            class: Ie(["status-dot", e.worker.status])
          }, null, 2),
          t("span", O8, f(e.worker.name), 1)
        ]),
        t("div", A8, [
          e.worker.status === "online" ? (a(), D(ue, {
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
          S(ue, {
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
      t("div", U8, [
        t("span", N8, [
          t("span", z8, f(e.worker.host) + ":" + f(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (a(), r("span", F8, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", B8, f(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (a(), r("span", V8, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", W8, f(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (a(), r("div", G8, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          $(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (a(), r("span", j8, [
          $(" • " + f(e.worker.instance_count) + " instance" + f(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (a(), r("span", H8, "(" + f(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (a(), r("div", K8, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          $(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), Y8 = /* @__PURE__ */ ve(q8, [["__scopeId", "data-v-b1be7134"]]), J8 = { class: "add-worker-content" }, Q8 = { class: "manual-form" }, X8 = { class: "form-row" }, Z8 = { class: "form-row-inline" }, e4 = { class: "form-field flex-2" }, t4 = { class: "form-field flex-1" }, s4 = { class: "form-row" }, o4 = { class: "api-key-wrapper" }, n4 = ["type"], a4 = { class: "result-icon" }, l4 = { class: "result-content" }, i4 = { class: "result-message" }, r4 = {
  key: 0,
  class: "result-detail"
}, c4 = { class: "modal-actions" }, u4 = /* @__PURE__ */ fe({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = tt(), l = Vs({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), i = k(!1), c = k(!1), u = k(!1), d = k(null), m = U(() => l.host && l.port && l.apiKey), v = U(() => l.name && l.host && l.port && l.apiKey);
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
    return (p, _) => (a(), D(ft, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: _[5] || (_[5] = (C) => p.$emit("close"))
    }, {
      body: h(() => [
        t("div", J8, [
          t("div", Q8, [
            t("div", X8, [
              _[6] || (_[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              qe(t("input", {
                "onUpdate:modelValue": _[0] || (_[0] = (C) => l.name = C),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [zt, l.name]
              ])
            ]),
            t("div", Z8, [
              t("div", e4, [
                _[7] || (_[7] = t("label", { class: "form-label" }, "Host", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": _[1] || (_[1] = (C) => l.host = C),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [zt, l.host]
                ])
              ]),
              t("div", t4, [
                _[8] || (_[8] = t("label", { class: "form-label" }, "Port", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": _[2] || (_[2] = (C) => l.port = C),
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
            t("div", s4, [
              _[9] || (_[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", o4, [
                qe(t("input", {
                  "onUpdate:modelValue": _[3] || (_[3] = (C) => l.apiKey = C),
                  type: i.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, n4), [
                  [Xn, l.apiKey]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: _[4] || (_[4] = (C) => i.value = !i.value),
                  type: "button"
                }, f(i.value ? "👁" : "👁‍🗨"), 1)
              ]),
              _[10] || (_[10] = t("div", { class: "form-help" }, [
                t("span", { class: "help-icon" }, "ⓘ"),
                $(" Run "),
                t("code", null, "cg-deploy worker setup"),
                $(" on the worker to get the key ")
              ], -1))
            ]),
            d.value ? (a(), r("div", {
              key: 0,
              class: Ie(["test-result", d.value.type])
            }, [
              t("span", a4, f(d.value.type === "success" ? "✓" : "✕"), 1),
              t("div", l4, [
                t("span", i4, f(d.value.message), 1),
                d.value.gpu_info ? (a(), r("span", r4, "GPU: " + f(d.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        t("div", c4, [
          S(ue, {
            variant: "ghost",
            size: "sm",
            loading: c.value,
            disabled: !m.value || c.value,
            onClick: g
          }, {
            default: h(() => [..._[11] || (_[11] = [
              $(" Test Connection ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          S(ue, {
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !v.value || u.value,
            onClick: w
          }, {
            default: h(() => [..._[12] || (_[12] = [
              $(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }));
  }
}), d4 = /* @__PURE__ */ ve(u4, [["__scopeId", "data-v-07a00732"]]), f4 = { class: "discovered-content" }, m4 = {
  key: 0,
  class: "workers-list"
}, v4 = { class: "worker-info" }, p4 = { class: "worker-name" }, g4 = { class: "worker-address" }, h4 = {
  key: 0,
  class: "worker-gpu"
}, y4 = {
  key: 1,
  class: "empty-state"
}, w4 = {
  key: 2,
  class: "api-key-section"
}, _4 = { class: "selected-worker" }, k4 = { class: "selected-name" }, b4 = { class: "selected-address" }, $4 = { class: "form-row" }, C4 = { class: "api-key-wrapper" }, x4 = ["type"], S4 = { class: "result-icon" }, I4 = { class: "result-message" }, E4 = { class: "modal-actions" }, T4 = /* @__PURE__ */ fe({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = tt(), l = k(null), i = k(""), c = k(!1), u = k(!1), d = k(null), m = k(null);
    async function v(w) {
      var p;
      l.value = w, i.value = "", m.value = null, await yt(), (p = d.value) == null || p.focus();
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
    return (w, p) => (a(), D(ft, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (_) => w.$emit("close"))
    }, {
      body: h(() => [
        t("div", f4, [
          e.workers.length > 0 ? (a(), r("div", m4, [
            (a(!0), r(j, null, ge(e.workers, (_) => (a(), r("div", {
              key: `${_.host}:${_.port}`,
              class: "worker-item"
            }, [
              t("div", v4, [
                t("span", p4, f(_.name), 1),
                t("span", g4, f(_.host) + ":" + f(_.port), 1),
                _.gpu_info ? (a(), r("span", h4, f(_.gpu_info), 1)) : y("", !0)
              ]),
              S(ue, {
                variant: "primary",
                size: "xs",
                onClick: (C) => v(_)
              }, {
                default: h(() => [...p[4] || (p[4] = [
                  $(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128))
          ])) : (a(), r("div", y4, [...p[5] || (p[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              $("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (a(), r("div", w4, [
            t("div", _4, [
              p[6] || (p[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", k4, f(l.value.name), 1),
              t("span", b4, "(" + f(l.value.host) + ":" + f(l.value.port) + ")", 1)
            ]),
            t("div", $4, [
              p[7] || (p[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", C4, [
                qe(t("input", {
                  ref_key: "apiKeyInput",
                  ref: d,
                  "onUpdate:modelValue": p[0] || (p[0] = (_) => i.value = _),
                  type: c.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: Kt(g, ["enter"])
                }, null, 40, x4), [
                  [Xn, i.value]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: p[1] || (p[1] = (_) => c.value = !c.value),
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
              class: Ie(["test-result", m.value.type])
            }, [
              t("span", S4, f(m.value.type === "success" ? "✓" : "✕"), 1),
              t("span", I4, f(m.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", E4, [
          l.value ? (a(), D(ue, {
            key: 0,
            variant: "ghost",
            size: "sm",
            onClick: p[2] || (p[2] = (_) => {
              l.value = null, i.value = "", m.value = null;
            })
          }, {
            default: h(() => [...p[9] || (p[9] = [
              $(" Back ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          l.value ? (a(), D(ue, {
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
}), P4 = /* @__PURE__ */ ve(T4, [["__scopeId", "data-v-5a3e40a4"]]), R4 = { class: "deploy-content" }, M4 = { class: "section" }, D4 = {
  key: 0,
  class: "loading-text"
}, L4 = {
  key: 1,
  class: "empty-remotes"
}, O4 = {
  key: 2,
  class: "remotes-list"
}, A4 = { class: "section" }, U4 = { class: "mode-options" }, N4 = { class: "mode-option" }, z4 = ["disabled"], F4 = { class: "mode-option" }, B4 = { class: "section" }, V4 = {
  key: 0,
  class: "section"
}, W4 = { class: "summary-row" }, G4 = {
  key: 1,
  class: "sync-warning"
}, j4 = { class: "warning-content" }, H4 = { class: "modal-actions" }, K4 = /* @__PURE__ */ fe({
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
    } = tt(), v = k([]), g = k({}), w = k(!1), p = k(null), _ = k(null), C = k(null), b = k(o.worker.mode || "native"), I = k(""), M = k(null), x = k(!1), E = U(() => p.value && g.value[p.value] || null), H = U(() => {
      if (!p.value) return null;
      const z = v.value.find((W) => W.name === p.value);
      return (z == null ? void 0 : z.fetch_url) || null;
    }), K = U(() => H.value && !x.value);
    async function B() {
      w.value = !0;
      try {
        const z = await l();
        v.value = z.remotes, await Promise.all(
          z.remotes.map(async (Y) => {
            const A = await i(Y.name);
            A && (g.value[Y.name] = A);
          })
        );
        const W = z.remotes.find((Y) => Y.is_default);
        W ? p.value = W.name : z.remotes.length > 0 && (p.value = z.remotes[0].name);
      } catch {
        n("toast", "Failed to load remotes", "error");
      } finally {
        w.value = !1;
      }
    }
    async function T() {
      try {
        M.value = await d();
      } catch {
      }
    }
    async function P(z) {
      _.value = z;
      try {
        await c(z);
        const W = await i(z);
        W && (g.value[z] = W), n("toast", `Fetched from ${z}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        _.value = null;
      }
    }
    async function L(z) {
      C.value = z;
      try {
        await u(z, { force: !1 });
        const W = await i(z);
        W && (g.value[z] = W), n("toast", `Pushed to ${z}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        C.value = null;
      }
    }
    function le(z) {
      p.value = z;
    }
    async function Z() {
      if (H.value) {
        x.value = !0;
        try {
          const z = await m(o.worker.name, {
            import_source: H.value,
            mode: b.value,
            name: I.value || void 0
          });
          z.id ? (n("toast", `Deployment started: ${z.name || z.id}`, "success"), n("deployed")) : z.status === "error" ? n("toast", z.message || "Deployment failed", "error") : n("toast", "Unexpected response from worker", "error");
        } catch (z) {
          n("toast", z instanceof Error ? z.message : "Deployment failed", "error");
        } finally {
          x.value = !1;
        }
      }
    }
    return Qe(() => {
      B(), T();
    }), (z, W) => (a(), D(ft, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: W[5] || (W[5] = (Y) => z.$emit("close"))
    }, {
      body: h(() => [
        t("div", R4, [
          t("div", M4, [
            W[7] || (W[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            w.value ? (a(), r("div", D4, "Loading remotes...")) : v.value.length === 0 ? (a(), r("div", L4, [...W[6] || (W[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (a(), r("div", O4, [
              (a(!0), r(j, null, ge(v.value, (Y) => (a(), D(Nr, {
                key: Y.name,
                remote: Y,
                "sync-status": g.value[Y.name],
                "is-selected": p.value === Y.name,
                "is-fetching": _.value === Y.name,
                "is-pushing": C.value === Y.name,
                onFetch: P,
                onPush: L,
                onSelect: le
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", A4, [
            W[10] || (W[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", U4, [
              t("label", N4, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": W[0] || (W[0] = (Y) => b.value = Y),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, z4), [
                  [Zt, b.value]
                ]),
                W[8] || (W[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", F4, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": W[1] || (W[1] = (Y) => b.value = Y),
                  value: "native"
                }, null, 512), [
                  [Zt, b.value]
                ]),
                W[9] || (W[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", B4, [
            W[11] || (W[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            qe(t("input", {
              "onUpdate:modelValue": W[2] || (W[2] = (Y) => I.value = Y),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [zt, I.value]
            ])
          ]),
          M.value ? (a(), r("div", V4, [
            W[12] || (W[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", W4, " ComfyUI: " + f(M.value.comfyui_version) + " • " + f(M.value.node_count) + " nodes • " + f(M.value.model_count) + " models • " + f(M.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          E.value && E.value.ahead > 0 ? (a(), r("div", G4, [
            W[14] || (W[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", j4, [
              t("strong", null, f(E.value.ahead) + " unpushed commit" + f(E.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + f(p.value) + "' before deploying to include your latest changes.", 1)
            ]),
            S(ue, {
              variant: "primary",
              size: "xs",
              loading: C.value === p.value,
              onClick: W[3] || (W[3] = (Y) => p.value && L(p.value))
            }, {
              default: h(() => [...W[13] || (W[13] = [
                $(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", H4, [
          S(ue, {
            variant: "ghost",
            size: "sm",
            onClick: W[4] || (W[4] = (Y) => z.$emit("close"))
          }, {
            default: h(() => [...W[15] || (W[15] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          S(ue, {
            variant: "primary",
            size: "sm",
            loading: x.value,
            disabled: !K.value || x.value,
            onClick: Z
          }, {
            default: h(() => [...W[16] || (W[16] = [
              $(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), q4 = /* @__PURE__ */ ve(K4, [["__scopeId", "data-v-c12720d3"]]), Y4 = { class: "custom-tab" }, J4 = { class: "section-header" }, Q4 = { class: "section-actions" }, X4 = { class: "workers-content" }, Z4 = {
  key: 0,
  class: "loading-state"
}, e6 = {
  key: 1,
  class: "empty-state"
}, t6 = {
  key: 2,
  class: "workers-list"
}, s6 = { class: "scan-icon" }, o6 = { class: "scan-message" }, n6 = /* @__PURE__ */ fe({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: n,
      addCustomWorker: l,
      removeCustomWorker: i,
      scanForWorkers: c
    } = tt(), u = k([]), d = k([]), m = k(!1), v = k(!1), g = k(null), w = k(!1), p = k(!1), _ = k(null), C = k(null);
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
    async function I() {
      v.value = !0, C.value = null;
      try {
        const B = await c(), T = B.discovered.filter(
          (P) => !u.value.some((L) => L.host === P.host && L.port === P.port)
        );
        d.value = T, T.length > 0 ? p.value = !0 : B.discovered.length > 0 ? C.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : C.value = {
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
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to add worker", "error");
      }
    }
    async function x(B) {
      try {
        await l(B), o("toast", `Worker '${B.name}' added`, "success"), p.value = !1, await b();
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to add worker", "error");
      }
    }
    async function E(B) {
      g.value = B;
      try {
        await i(B), o("toast", `Worker '${B}' removed`, "success"), await b();
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to remove worker", "error");
      } finally {
        g.value = null;
      }
    }
    function H(B) {
      _.value = B;
    }
    function K() {
      _.value = null, o("deployed");
    }
    return Qe(() => {
      b();
    }), (B, T) => (a(), r("div", Y4, [
      t("div", J4, [
        T[8] || (T[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", Q4, [
          S(ue, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: I
          }, {
            default: h(() => [...T[6] || (T[6] = [
              $(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          S(ue, {
            variant: "secondary",
            size: "xs",
            onClick: T[0] || (T[0] = (P) => w.value = !0)
          }, {
            default: h(() => [...T[7] || (T[7] = [
              $(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("div", X4, [
        m.value && u.value.length === 0 ? (a(), r("div", Z4, [...T[9] || (T[9] = [
          t("span", { class: "spinner" }, null, -1),
          $(" Loading workers... ", -1)
        ])])) : u.value.length === 0 ? (a(), r("div", e6, [...T[10] || (T[10] = [
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
        ])])) : (a(), r("div", t6, [
          (a(!0), r(j, null, ge(u.value, (P) => (a(), D(Y8, {
            key: P.name,
            worker: P,
            "is-action-loading": g.value === P.name,
            onDeploy: H,
            onRemove: E
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      C.value ? (a(), r("div", {
        key: 0,
        class: Ie(["scan-result", C.value.type])
      }, [
        t("span", s6, f(C.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", o6, f(C.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: T[1] || (T[1] = (P) => C.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (a(), D(P4, {
        key: 1,
        workers: d.value,
        onClose: T[2] || (T[2] = (P) => p.value = !1),
        onAdd: x
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (a(), D(d4, {
        key: 2,
        onClose: T[3] || (T[3] = (P) => w.value = !1),
        onAdd: M
      })) : y("", !0),
      _.value ? (a(), D(q4, {
        key: 3,
        worker: _.value,
        onClose: T[4] || (T[4] = (P) => _.value = null),
        onToast: T[5] || (T[5] = (P, L) => o("toast", P, L)),
        onDeployed: K
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), a6 = /* @__PURE__ */ ve(n6, [["__scopeId", "data-v-1637dead"]]), ha = "ComfyGit.Deploy.GitHubPAT";
function zr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function l6(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function i6() {
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
    isRemoteSsh: zr,
    isRemoteHttps: l6
  };
}
const r6 = { class: "settings-content" }, c6 = { class: "settings-section" }, u6 = {
  key: 0,
  class: "ssh-warning"
}, d6 = { class: "form-row" }, f6 = { class: "token-wrapper" }, m6 = ["type"], v6 = { class: "result-icon" }, p6 = { class: "result-message" }, g6 = { class: "token-actions" }, h6 = /* @__PURE__ */ fe({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: n, setToken: l, clearToken: i, hasToken: c } = i6(), { getRemotes: u, testGitAuth: d } = tt(), m = k(""), v = k(!1), g = k(!1), w = k(null), p = k(!1), _ = U(() => c());
    Qe(async () => {
      var x;
      const M = n();
      M && (m.value = M);
      try {
        const H = (x = (await u()).remotes) == null ? void 0 : x.find((K) => K.name === "origin");
        H && zr(H.url) && (p.value = !0);
      } catch {
      }
    });
    async function C() {
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
    function I() {
      i(), m.value = "", w.value = null;
    }
    return (M, x) => (a(), D(ft, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: x[2] || (x[2] = (E) => M.$emit("close"))
    }, {
      body: h(() => [
        t("div", r6, [
          t("div", c6, [
            x[8] || (x[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            x[9] || (x[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (a(), r("div", u6, [...x[3] || (x[3] = [
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
            t("div", d6, [
              x[4] || (x[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", f6, [
                qe(t("input", {
                  "onUpdate:modelValue": x[0] || (x[0] = (E) => m.value = E),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, m6), [
                  [Xn, m.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: x[1] || (x[1] = (E) => v.value = !v.value)
                }, f(v.value ? "Hide" : "Show"), 1)
              ]),
              x[5] || (x[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            w.value ? (a(), r("div", {
              key: 1,
              class: Ie(["test-result", w.value.type])
            }, [
              t("span", v6, f(w.value.type === "success" ? "✓" : "✕"), 1),
              t("span", p6, f(w.value.message), 1)
            ], 2)) : y("", !0),
            t("div", g6, [
              S(ue, {
                variant: "ghost",
                size: "sm",
                loading: g.value,
                disabled: !m.value || g.value,
                onClick: C
              }, {
                default: h(() => [...x[6] || (x[6] = [
                  $(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              _.value ? (a(), D(ue, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: I
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
        S(ue, {
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
}), y6 = /* @__PURE__ */ ve(h6, [["__scopeId", "data-v-b21588ad"]]), w6 = /* @__PURE__ */ fe({
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
    } = Ur(), w = k(!1), p = k(!1), _ = k("instances"), C = k(null), b = k(null), I = U(() => [
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
      C.value = B.id;
      try {
        await u(B), o("toast", "Instance stopped", "success");
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to stop instance", "error");
      } finally {
        C.value = null;
      }
    }
    async function x(B) {
      C.value = B.id;
      try {
        await d(B), o("toast", "Instance starting...", "success");
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to start instance", "error");
      } finally {
        C.value = null;
      }
    }
    function E(B) {
      b.value = B;
    }
    async function H() {
      const B = b.value;
      if (B) {
        b.value = null, C.value = B.id;
        try {
          await m(B), o("toast", "Instance terminated", "success");
        } catch (T) {
          o("toast", T instanceof Error ? T.message : "Failed to terminate instance", "error");
        } finally {
          C.value = null;
        }
      }
    }
    async function K() {
      await c(), _.value = "instances";
    }
    return Qe(() => {
      c(), v();
    }), Ws(() => {
      g();
    }), (B, T) => (a(), r(j, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: T[1] || (T[1] = (P) => w.value = !0)
          }, {
            actions: h(() => [
              S(ue, {
                variant: "ghost",
                size: "xs",
                onClick: T[0] || (T[0] = (P) => p.value = !0)
              }, {
                default: h(() => [...T[10] || (T[10] = [
                  $(" Settings ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          S(Tr, {
            modelValue: _.value,
            "onUpdate:modelValue": T[2] || (T[2] = (P) => _.value = P),
            tabs: I.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: h(() => [
          _.value === "instances" ? (a(), D(O5, {
            key: 0,
            instances: We(n),
            "is-loading": We(l),
            "action-loading-id": C.value,
            onRefresh: We(c),
            onStop: M,
            onStart: x,
            onTerminate: E
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          _.value === "runpod" ? (a(), D(M8, {
            key: 1,
            onToast: T[3] || (T[3] = (P, L) => o("toast", P, L)),
            onNavigate: T[4] || (T[4] = (P) => o("navigate", P)),
            onDeployed: K
          })) : y("", !0),
          _.value === "custom" ? (a(), D(a6, {
            key: 2,
            onToast: T[5] || (T[5] = (P, L) => o("toast", P, L)),
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
        onCancel: T[6] || (T[6] = (P) => b.value = null)
      }, null, 8, ["message"])) : y("", !0),
      S(as, {
        show: w.value,
        title: "Deploy to Cloud",
        onClose: T[7] || (T[7] = (P) => w.value = !1)
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
      p.value ? (a(), D(y6, {
        key: 1,
        onClose: T[8] || (T[8] = (P) => p.value = !1),
        onSaved: T[9] || (T[9] = (P) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), _6 = /* @__PURE__ */ ve(w6, [["__scopeId", "data-v-d4e32a10"]]), k6 = { class: "header-info" }, b6 = { class: "commit-hash" }, $6 = {
  key: 0,
  class: "commit-refs"
}, C6 = { class: "commit-message" }, x6 = { class: "commit-date" }, S6 = {
  key: 0,
  class: "loading"
}, I6 = {
  key: 1,
  class: "changes-section"
}, E6 = { class: "stats-row" }, T6 = { class: "stat" }, P6 = { class: "stat insertions" }, R6 = { class: "stat deletions" }, M6 = {
  key: 0,
  class: "change-group"
}, D6 = {
  key: 1,
  class: "change-group"
}, L6 = {
  key: 0,
  class: "version"
}, O6 = {
  key: 2,
  class: "change-group"
}, A6 = { class: "change-item" }, U6 = /* @__PURE__ */ fe({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = tt(), n = k(null), l = k(!0), i = U(() => {
      if (!n.value) return !1;
      const u = n.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = U(() => {
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
    }), (u, d) => (a(), D(ft, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (m) => u.$emit("close"))
    }, {
      header: h(() => {
        var m, v, g, w;
        return [
          t("div", k6, [
            d[4] || (d[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", b6, f(((m = n.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (g = n.value) == null ? void 0 : g.refs) != null && w.length ? (a(), r("span", $6, [
              (a(!0), r(j, null, ge(n.value.refs, (p) => (a(), r("span", {
                key: p,
                class: "ref-badge"
              }, f(p), 1))), 128))
            ])) : y("", !0)
          ]),
          S(Me, {
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
          t("div", C6, f(((m = n.value) == null ? void 0 : m.message) || e.commit.message), 1),
          t("div", x6, f(((v = n.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), r("div", S6, "Loading details...")) : n.value ? (a(), r("div", I6, [
            t("div", E6, [
              t("span", T6, f(n.value.stats.files_changed) + " files", 1),
              t("span", P6, "+" + f(n.value.stats.insertions), 1),
              t("span", R6, "-" + f(n.value.stats.deletions), 1)
            ]),
            i.value ? (a(), r("div", M6, [
              S(Go, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  $("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(j, null, ge(n.value.changes.workflows.added, (g) => (a(), r("div", {
                key: "add-" + g,
                class: "change-item added"
              }, [
                d[7] || (d[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), r(j, null, ge(n.value.changes.workflows.modified, (g) => (a(), r("div", {
                key: "mod-" + g,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), r(j, null, ge(n.value.changes.workflows.deleted, (g) => (a(), r("div", {
                key: "del-" + g,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (a(), r("div", D6, [
              S(Go, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  $("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(j, null, ge(n.value.changes.nodes.added, (g) => (a(), r("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g.name), 1),
                g.version ? (a(), r("span", L6, "(" + f(g.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), r(j, null, ge(n.value.changes.nodes.removed, (g) => (a(), r("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), r("div", O6, [
              S(Go, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  $("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", A6, [
                d[14] || (d[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, f(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        S(Me, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (m) => u.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            $(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        S(Me, {
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
}), N6 = /* @__PURE__ */ ve(U6, [["__scopeId", "data-v-d256ff6d"]]), z6 = { class: "base-textarea-wrapper" }, F6 = ["value", "rows", "placeholder", "disabled", "maxlength"], B6 = {
  key: 0,
  class: "base-textarea-count"
}, V6 = /* @__PURE__ */ fe({
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
    return (i, c) => (a(), r("div", z6, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => i.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = Kt(it((u) => i.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = Kt(it((u) => i.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Kt(l, ["enter"])
        ]
      }, null, 40, F6),
      e.showCharCount && e.maxLength ? (a(), r("div", B6, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), ei = /* @__PURE__ */ ve(V6, [["__scopeId", "data-v-c6d16c93"]]), W6 = ["checked", "disabled"], G6 = { class: "base-checkbox-box" }, j6 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, H6 = {
  key: 0,
  class: "base-checkbox-label"
}, K6 = /* @__PURE__ */ fe({
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
      }, null, 40, W6),
      t("span", G6, [
        e.modelValue ? (a(), r("svg", j6, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (a(), r("span", H6, [
        Ke(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Da = /* @__PURE__ */ ve(K6, [["__scopeId", "data-v-bf17c831"]]), q6 = { class: "popover-header" }, Y6 = { class: "popover-body" }, J6 = {
  key: 0,
  class: "changes-summary"
}, Q6 = {
  key: 0,
  class: "change-item"
}, X6 = {
  key: 1,
  class: "change-item"
}, Z6 = {
  key: 2,
  class: "change-item"
}, eI = {
  key: 3,
  class: "change-item"
}, tI = {
  key: 4,
  class: "change-item"
}, sI = {
  key: 5,
  class: "change-item"
}, oI = {
  key: 1,
  class: "no-changes"
}, nI = {
  key: 2,
  class: "loading"
}, aI = {
  key: 3,
  class: "issues-error"
}, lI = { class: "error-header" }, iI = { class: "error-title" }, rI = { class: "issues-list" }, cI = { class: "workflow-state" }, uI = { class: "message-section" }, dI = { class: "popover-footer" }, fI = {
  key: 1,
  class: "commit-popover"
}, mI = { class: "popover-header" }, vI = { class: "popover-body" }, pI = {
  key: 0,
  class: "changes-summary"
}, gI = {
  key: 0,
  class: "change-item"
}, hI = {
  key: 1,
  class: "change-item"
}, yI = {
  key: 2,
  class: "change-item"
}, wI = {
  key: 3,
  class: "change-item"
}, _I = {
  key: 4,
  class: "change-item"
}, kI = {
  key: 5,
  class: "change-item"
}, bI = {
  key: 1,
  class: "no-changes"
}, $I = {
  key: 2,
  class: "loading"
}, CI = {
  key: 3,
  class: "issues-error"
}, xI = { class: "error-header" }, SI = { class: "error-title" }, II = { class: "issues-list" }, EI = { class: "workflow-state" }, TI = { class: "message-section" }, PI = { class: "popover-footer" }, RI = /* @__PURE__ */ fe({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, n = s, { commit: l } = tt(), i = k(""), c = k(!1), u = k(!1), d = U(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), m = U(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, C = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || C.nodes_added.length > 0 || C.nodes_removed.length > 0;
    }), v = U(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((C) => C.has_issues) : [];
    }), g = U(() => v.value.length > 0), w = U(() => g.value && !u.value);
    async function p() {
      var _, C, b, I;
      if (!(g.value && !u.value) && !(!d.value || !i.value.trim() || c.value)) {
        c.value = !0;
        try {
          const M = await l(i.value.trim(), u.value);
          if (M.status === "success") {
            const x = `Committed: ${((_ = M.summary) == null ? void 0 : _.new) || 0} new, ${((C = M.summary) == null ? void 0 : C.modified) || 0} modified, ${((b = M.summary) == null ? void 0 : b.deleted) || 0} deleted`;
            n("committed", { success: !0, message: x });
          } else if (M.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (M.status === "blocked") {
            const x = ((I = M.issues) == null ? void 0 : I.map((E) => `${E.name}: ${E.issue}`).join("; ")) || "Unknown issues";
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
    return (_, C) => e.asModal ? (a(), D(_t, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: C[5] || (C[5] = (b) => n("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: C[4] || (C[4] = it(() => {
          }, ["stop"]))
        }, [
          t("div", q6, [
            C[11] || (C[11] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            t("button", {
              class: "close-btn",
              onClick: C[0] || (C[0] = (b) => n("close"))
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
          t("div", Y6, [
            e.status && d.value ? (a(), r("div", J6, [
              e.status.workflows.new.length ? (a(), r("div", Q6, [
                C[12] || (C[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), r("div", X6, [
                C[13] || (C[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), r("div", Z6, [
                C[14] || (C[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), r("div", eI, [
                C[15] || (C[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), r("div", tI, [
                C[16] || (C[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (a(), r("div", sI, [...C[17] || (C[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), r("div", oI, " No changes to commit ")) : (a(), r("div", nI, " Loading... ")),
            g.value ? (a(), r("div", aI, [
              t("div", lI, [
                C[18] || (C[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", iI, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", rI, [
                (a(!0), r(j, null, ge(v.value, (b) => (a(), r("div", {
                  key: b.name,
                  class: "issue-item"
                }, [
                  t("strong", null, f(b.name), 1),
                  t("span", cI, "(" + f(b.sync_state) + ")", 1),
                  $(": " + f(b.issue_summary), 1)
                ]))), 128))
              ]),
              S(Da, {
                modelValue: u.value,
                "onUpdate:modelValue": C[1] || (C[1] = (b) => u.value = b),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...C[19] || (C[19] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            t("div", uI, [
              S(ei, {
                modelValue: i.value,
                "onUpdate:modelValue": C[2] || (C[2] = (b) => i.value = b),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: p,
                onSubmit: p
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          t("div", dI, [
            S(Me, {
              variant: "secondary",
              onClick: C[3] || (C[3] = (b) => n("close"))
            }, {
              default: h(() => [...C[20] || (C[20] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(Me, {
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
    ])) : (a(), r("div", fI, [
      t("div", mI, [
        C[22] || (C[22] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: C[6] || (C[6] = (b) => n("close"))
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
      t("div", vI, [
        e.status && d.value ? (a(), r("div", pI, [
          e.status.workflows.new.length ? (a(), r("div", gI, [
            C[23] || (C[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), r("div", hI, [
            C[24] || (C[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), r("div", yI, [
            C[25] || (C[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), r("div", wI, [
            C[26] || (C[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), r("div", _I, [
            C[27] || (C[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (a(), r("div", kI, [...C[28] || (C[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), r("div", bI, " No changes to commit ")) : (a(), r("div", $I, " Loading... ")),
        g.value ? (a(), r("div", CI, [
          t("div", xI, [
            C[29] || (C[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", SI, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", II, [
            (a(!0), r(j, null, ge(v.value, (b) => (a(), r("div", {
              key: b.name,
              class: "issue-item"
            }, [
              t("strong", null, f(b.name), 1),
              t("span", EI, "(" + f(b.sync_state) + ")", 1),
              $(": " + f(b.issue_summary), 1)
            ]))), 128))
          ]),
          S(Da, {
            modelValue: u.value,
            "onUpdate:modelValue": C[7] || (C[7] = (b) => u.value = b),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...C[30] || (C[30] = [
              $(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        t("div", TI, [
          S(ei, {
            modelValue: i.value,
            "onUpdate:modelValue": C[8] || (C[8] = (b) => i.value = b),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: p,
            onSubmit: p
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      t("div", PI, [
        S(Me, {
          variant: "secondary",
          onClick: C[9] || (C[9] = (b) => n("close"))
        }, {
          default: h(() => [...C[31] || (C[31] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        S(Me, {
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
}), Fr = /* @__PURE__ */ ve(RI, [["__scopeId", "data-v-5f897631"]]), MI = { class: "modal-header" }, DI = { class: "modal-body" }, LI = { class: "switch-message" }, OI = { class: "switch-details" }, AI = { class: "modal-actions" }, UI = /* @__PURE__ */ fe({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), D(_t, { to: "body" }, [
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
          t("div", MI, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", DI, [
            t("p", LI, [
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
            t("p", OI, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", AI, [
            S(ue, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(ue, {
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
}), NI = /* @__PURE__ */ ve(UI, [["__scopeId", "data-v-e9c5253e"]]), zI = {
  key: 0,
  class: "modal-overlay"
}, FI = { class: "modal-content" }, BI = { class: "modal-body" }, VI = { class: "progress-info" }, WI = { class: "progress-percentage" }, GI = { class: "progress-state" }, jI = { class: "switch-steps" }, HI = { class: "step-icon" }, KI = { class: "step-label" }, qI = /* @__PURE__ */ fe({
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
    return (i, c) => (a(), D(_t, { to: "body" }, [
      e.show ? (a(), r("div", zI, [
        t("div", FI, [
          c[1] || (c[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", BI, [
            S(ea, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            t("div", VI, [
              t("div", WI, f(e.progress) + "%", 1),
              t("div", GI, f(o.value), 1)
            ]),
            t("div", jI, [
              (a(!0), r(j, null, ge(l.value, (u) => (a(), r("div", {
                key: u.state,
                class: Ie(["switch-step", u.status])
              }, [
                t("span", HI, f(u.icon), 1),
                t("span", KI, f(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), YI = /* @__PURE__ */ ve(qI, [["__scopeId", "data-v-768a5078"]]), JI = { class: "modal-header" }, QI = { class: "modal-body" }, XI = {
  key: 0,
  class: "node-section"
}, ZI = { class: "node-list" }, eE = {
  key: 1,
  class: "node-section"
}, tE = { class: "node-list" }, sE = { class: "modal-actions" }, oE = /* @__PURE__ */ fe({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), D(_t, { to: "body" }, [
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
          t("div", JI, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", QI, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), r("div", XI, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", ZI, [
                (a(!0), r(j, null, ge(e.mismatchDetails.missing_nodes, (n) => (a(), r("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), r("div", eE, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", tE, [
                (a(!0), r(j, null, ge(e.mismatchDetails.extra_nodes, (n) => (a(), r("div", {
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
          t("div", sE, [
            S(ue, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(ue, {
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
}), nE = /* @__PURE__ */ ve(oE, [["__scopeId", "data-v-7cad7518"]]), aE = [
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
], lE = "v0.0.17", iE = "Akatz", rE = { class: "social-buttons" }, cE = ["title", "aria-label", "onClick"], uE = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, dE = ["d"], fE = ["title", "aria-label", "onClick"], mE = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, vE = ["d"], pE = /* @__PURE__ */ fe({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), r("div", rE, [
      (a(!0), r(j, null, ge(We(aE), (l) => (a(), r(j, {
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
          (a(), r("svg", uE, [
            t("path", {
              d: l.iconPath
            }, null, 8, dE)
          ]))
        ], 8, cE)) : (a(), r("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => s(l.url)
        }, [
          (a(), r("svg", mE, [
            t("path", {
              d: l.iconPath
            }, null, 8, vE)
          ]))
        ], 8, fE))
      ], 64))), 128))
    ]));
  }
}), Br = /* @__PURE__ */ ve(pE, [["__scopeId", "data-v-4f846342"]]), gE = { class: "footer-info" }, hE = { class: "version" }, yE = { class: "made-by" }, wE = /* @__PURE__ */ fe({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (a(), r("div", gE, [
      t("span", hE, f(We(lE)), 1),
      t("span", yE, [
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
        $(" by " + f(We(iE)), 1)
      ])
    ]));
  }
}), Vr = /* @__PURE__ */ ve(wE, [["__scopeId", "data-v-8bc3db0a"]]), _E = /* @__PURE__ */ fe({
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
    return (i, c) => (a(), D(ft, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => i.$emit("close"))
    }, {
      body: h(() => [
        S(Er, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var u;
        return [
          S(Me, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: n
          }, {
            default: h(() => [...c[2] || (c[2] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          S(Me, {
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
}), kE = /* @__PURE__ */ ve(_E, [["__scopeId", "data-v-fac00ae7"]]), bE = { class: "header-actions" }, $E = {
  key: 0,
  class: "wizard-step"
}, CE = { class: "form-field" }, xE = ["placeholder"], SE = {
  key: 0,
  class: "form-error"
}, IE = { class: "form-field form-field--checkbox" }, EE = { class: "form-checkbox" }, TE = {
  key: 0,
  class: "form-field"
}, PE = ["placeholder"], RE = {
  key: 0,
  class: "form-info"
}, ME = {
  key: 1,
  class: "form-suggestion"
}, DE = {
  key: 2,
  class: "form-error"
}, LE = {
  key: 3,
  class: "form-info"
}, OE = {
  key: 1,
  class: "wizard-step"
}, AE = {
  key: 0,
  class: "progress-check-loading"
}, UE = {
  key: 0,
  class: "cli-warning"
}, NE = { class: "cli-warning-header" }, zE = {
  key: 1,
  class: "env-landing"
}, FE = { class: "env-list" }, BE = ["value"], VE = { class: "env-name" }, WE = {
  key: 2,
  class: "env-create"
}, GE = { class: "form-field" }, jE = { class: "form-field" }, HE = ["value"], KE = { class: "form-field" }, qE = ["disabled"], YE = ["value"], JE = { class: "form-field" }, QE = ["value"], XE = { class: "form-field form-field--checkbox" }, ZE = { class: "form-checkbox" }, eT = {
  key: 0,
  class: "form-error"
}, tT = {
  key: 1,
  class: "env-creating"
}, sT = { class: "creating-intro" }, oT = {
  key: 3,
  class: "env-import"
}, nT = { class: "wizard-footer" }, aT = { class: "wizard-footer-actions" }, io = 10, lT = 600 * 1e3, ti = 1800 * 1e3, iT = /* @__PURE__ */ fe({
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
    } = tt(), g = k(o.initialStep || 1), w = k(null), p = k("landing"), _ = k(!1), C = k(!1), b = k(!1), I = k(!1), M = k(null), x = k(o.initialStep === 2), E = k(o.defaultPath), H = k(!!o.detectedModelsDir), K = k(o.detectedModelsDir || ""), B = k(null), T = k(null), P = k(null), L = k(null), le = k("my-new-env"), Z = k(Mr), z = k("latest"), W = k(Dr), Y = k(!0), A = k(null), se = k(null), X = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), ye = k(!1), _e = k(!1), ce = k(!1), pe = k({ progress: 0, message: "" }), Se = k({ progress: 0, message: "" }), Fe = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ze = k(0), Te = k(null), Pe = k(0), ke = k(null), he = U(() => {
      var Ce, be;
      const ne = (Ce = E.value) == null ? void 0 : Ce.trim(), Q = !B.value, Oe = !H.value || !T.value && ((be = K.value) == null ? void 0 : be.trim());
      return ne && Q && Oe;
    }), De = U(() => {
      var ne;
      return (ne = le.value) == null ? void 0 : ne.trim();
    }), Re = U(() => !!(g.value === 2 || se.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), O = U(() => se.value || o.workspacePath || null);
    async function R() {
      var ne;
      if (B.value = null, !!((ne = E.value) != null && ne.trim()))
        try {
          const Q = await c({ path: E.value, type: "workspace" });
          Q.valid || (B.value = Q.error || "Invalid path");
        } catch (Q) {
          B.value = Q instanceof Error ? Q.message : "Validation failed";
        }
    }
    async function N() {
      var ne;
      if (T.value = null, P.value = null, L.value = null, !!((ne = K.value) != null && ne.trim()))
        try {
          const Q = await c({ path: K.value, type: "models" });
          if (Q.valid)
            L.value = Q.model_count ?? null;
          else if (T.value = Q.error || "Invalid path", Q.suggestion) {
            P.value = Q.suggestion, K.value = Q.suggestion, T.value = null;
            const Oe = await c({ path: Q.suggestion, type: "models" });
            Oe.valid && (L.value = Oe.model_count ?? null);
          }
        } catch (Q) {
          T.value = Q instanceof Error ? Q.message : "Validation failed";
        }
    }
    async function V() {
      var ne, Q, Oe, Ce, be;
      if (B.value = null, T.value = null, await R(), (ne = B.value) != null && ne.includes("already exists")) {
        B.value = null, se.value = ((Q = E.value) == null ? void 0 : Q.trim()) || o.defaultPath, g.value = 2, re();
        return;
      }
      if (!B.value && !(H.value && ((Oe = K.value) != null && Oe.trim()) && (await N(), T.value))) {
        _e.value = !0;
        try {
          await l({
            workspace_path: ((Ce = E.value) == null ? void 0 : Ce.trim()) || o.defaultPath,
            models_directory: H.value && ((be = K.value) == null ? void 0 : be.trim()) || null
          }), ze.value = 0, Te.value = Date.now();
          const G = setInterval(async () => {
            var F;
            if (Te.value && Date.now() - Te.value > lT) {
              clearInterval(G), _e.value = !1, B.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const de = await i();
              if (ze.value = 0, de.state === "idle" && _e.value) {
                clearInterval(G), _e.value = !1, B.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              pe.value = { progress: de.progress, message: de.message }, de.state === "complete" ? (clearInterval(G), _e.value = !1, se.value = ((F = E.value) == null ? void 0 : F.trim()) || o.defaultPath, g.value = 2, re()) : de.state === "error" && (clearInterval(G), _e.value = !1, B.value = de.error || "Workspace creation failed");
            } catch (de) {
              ze.value++, console.warn(`Polling failure ${ze.value}/${io}:`, de), ze.value >= io && (clearInterval(G), _e.value = !1, B.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (G) {
          _e.value = !1, B.value = G instanceof Error ? G.message : "Failed to create workspace";
        }
      }
    }
    async function ee() {
      ce.value = !0, A.value = null;
      try {
        const ne = {
          name: le.value.trim() || "my-new-env",
          python_version: Z.value,
          comfyui_version: z.value,
          torch_backend: W.value,
          switch_after: Y.value,
          workspace_path: se.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(ne)).status === "started") {
          Pe.value = 0, ke.value = Date.now();
          const Oe = setInterval(async () => {
            if (ke.value && Date.now() - ke.value > ti) {
              clearInterval(Oe), ce.value = !1, A.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Ce = await d();
              if (Pe.value = 0, Ce.state === "idle" && ce.value) {
                clearInterval(Oe), ce.value = !1, A.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Se.value = {
                progress: Ce.progress ?? 0,
                message: Ce.message,
                phase: Ce.phase
              }, Ce.state === "complete") {
                clearInterval(Oe), ce.value = !1;
                const be = Ce.environment_name || ne.name;
                Y.value ? n("complete", be, se.value) : (p.value = "landing", n("environment-created-no-switch", be));
              } else Ce.state === "error" && (clearInterval(Oe), ce.value = !1, A.value = Ce.error || "Environment creation failed");
            } catch (Ce) {
              Pe.value++, console.warn(`Polling failure ${Pe.value}/${io}:`, Ce), Pe.value >= io && (clearInterval(Oe), ce.value = !1, A.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ne) {
        ce.value = !1, A.value = ne instanceof Error ? ne.message : "Unknown error";
      }
    }
    async function re() {
      ye.value = !0;
      try {
        X.value = await v();
      } catch (ne) {
        console.error("Failed to load ComfyUI releases:", ne);
      } finally {
        ye.value = !1;
      }
    }
    function we() {
      w.value && n("switch-environment", w.value, se.value);
    }
    function $e() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : g.value === 2 && o.setupState === "no_workspace" && (g.value = 1);
    }
    function ae(ne, Q) {
      C.value = !1, Q ? n("complete", ne, se.value) : (n("environment-created-no-switch", ne), p.value = "landing");
    }
    function me() {
    }
    Qe(async () => {
      if (o.detectedModelsDir && (K.value = o.detectedModelsDir), o.workspacePath && (se.value = o.workspacePath), g.value === 2) {
        re();
        const ne = setTimeout(() => {
          x.value = !1;
        }, 3e3);
        await Le(), clearTimeout(ne), x.value = !1;
      }
    });
    async function Le() {
      try {
        const ne = await d();
        if (console.log("[ComfyGit] Create progress check:", ne.state, ne), ne.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ne.environment_name), p.value = "create", ce.value = !0, le.value = ne.environment_name || "my-new-env", Se.value = {
            progress: ne.progress ?? 0,
            message: ne.message,
            phase: ne.phase
          }, Ee();
          return;
        }
      } catch (ne) {
        console.log("[ComfyGit] Create progress check failed:", ne);
      }
      try {
        const ne = await m();
        console.log("[ComfyGit] Import progress check:", ne.state, ne), ne.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ne.environment_name), M.value = {
          message: ne.message || "Importing...",
          phase: ne.phase || "",
          progress: ne.progress ?? 0,
          environmentName: ne.environment_name || ""
        }, I.value = !0, p.value = "import", C.value = !0);
      } catch (ne) {
        console.log("[ComfyGit] Import progress check failed:", ne);
      }
    }
    async function Ee() {
      Pe.value = 0, ke.value = Date.now();
      let ne = null;
      const Q = async () => {
        if (ke.value && Date.now() - ke.value > ti)
          return ne && clearInterval(ne), ce.value = !1, A.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Ce = await d();
          if (Pe.value = 0, Ce.state === "idle" && ce.value)
            return ne && clearInterval(ne), ce.value = !1, A.value = "Environment creation was interrupted. Please try again.", !1;
          if (Se.value = {
            progress: Ce.progress ?? 0,
            message: Ce.message,
            phase: Ce.phase
          }, Ce.state === "complete") {
            ne && clearInterval(ne), ce.value = !1;
            const be = Ce.environment_name || le.value;
            return n("complete", be, se.value), !1;
          } else if (Ce.state === "error")
            return ne && clearInterval(ne), ce.value = !1, A.value = Ce.error || "Environment creation failed", !1;
          return !0;
        } catch (Ce) {
          return Pe.value++, console.warn(`Polling failure ${Pe.value}/${io}:`, Ce), Pe.value >= io ? (ne && clearInterval(ne), ce.value = !1, A.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await Q() && (ne = setInterval(async () => {
        !await Q() && ne && clearInterval(ne);
      }, 2e3));
    }
    return (ne, Q) => (a(), r(j, null, [
      S(ft, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: Q[15] || (Q[15] = (Oe) => ne.$emit("close"))
      }, {
        header: h(() => [
          Q[20] || (Q[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", bE, [
            S(Br),
            Q[19] || (Q[19] = t("span", { class: "header-divider" }, null, -1)),
            Re.value ? (a(), r("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: Q[0] || (Q[0] = (Oe) => _.value = !0)
            }, [...Q[17] || (Q[17] = [
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
              onClick: Q[1] || (Q[1] = (Oe) => ne.$emit("close")),
              title: "Close"
            }, [...Q[18] || (Q[18] = [
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
            g.value === 1 ? (a(), r("div", $E, [
              Q[24] || (Q[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", CE, [
                Q[21] || (Q[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": Q[2] || (Q[2] = (Ce) => E.value = Ce),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, xE), [
                  [zt, E.value]
                ]),
                B.value ? (a(), r("p", SE, f(B.value), 1)) : y("", !0)
              ]),
              t("div", IE, [
                t("label", EE, [
                  qe(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": Q[3] || (Q[3] = (Ce) => H.value = Ce)
                  }, null, 512), [
                    [en, H.value]
                  ]),
                  Q[22] || (Q[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              H.value ? (a(), r("div", TE, [
                Q[23] || (Q[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": Q[4] || (Q[4] = (Ce) => K.value = Ce),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, PE), [
                  [zt, K.value]
                ]),
                e.detectedModelsDir && !K.value ? (a(), r("p", RE, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                P.value ? (a(), r("p", ME, " Did you mean: " + f(P.value), 1)) : y("", !0),
                T.value ? (a(), r("p", DE, f(T.value), 1)) : y("", !0),
                L.value !== null && !T.value ? (a(), r("p", LE, " Found " + f(L.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              _e.value ? (a(), D(zn, {
                key: 1,
                progress: pe.value.progress,
                message: pe.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            g.value === 2 ? (a(), r("div", OE, [
              x.value ? (a(), r("div", AE, [...Q[25] || (Q[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), r(j, { key: 1 }, [
                !o.cliInstalled && !b.value ? (a(), r("div", UE, [
                  t("div", NE, [
                    Q[27] || (Q[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    Q[28] || (Q[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: Q[5] || (Q[5] = (Ce) => b.value = !0),
                      title: "Dismiss"
                    }, [...Q[26] || (Q[26] = [
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
                  Q[29] || (Q[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  Q[30] || (Q[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                p.value === "landing" ? (a(), r("div", zE, [
                  Q[34] || (Q[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: Q[6] || (Q[6] = (Ce) => p.value = "create")
                  }, [...Q[31] || (Q[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: Q[7] || (Q[7] = (Ce) => {
                      I.value = !1, p.value = "import";
                    })
                  }, [...Q[32] || (Q[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Oe = o.existingEnvironments) != null && Oe.length ? (a(), r(j, { key: 0 }, [
                    Q[33] || (Q[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", FE, [
                      (a(!0), r(j, null, ge(o.existingEnvironments, (Ce) => (a(), r("label", {
                        key: Ce,
                        class: Ie(["env-option", { selected: w.value === Ce }])
                      }, [
                        qe(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: Ce,
                          "onUpdate:modelValue": Q[8] || (Q[8] = (be) => w.value = be)
                        }, null, 8, BE), [
                          [Zt, w.value]
                        ]),
                        t("span", VE, f(Ce), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (a(), r("div", WE, [
                  ce.value ? (a(), r("div", tT, [
                    t("p", sT, [
                      Q[41] || (Q[41] = $(" Creating environment ", -1)),
                      t("strong", null, f(le.value), 1),
                      Q[42] || (Q[42] = $("... ", -1))
                    ]),
                    S(zn, {
                      progress: Se.value.progress,
                      message: Se.value.message,
                      "current-phase": Se.value.phase,
                      "show-steps": !0,
                      steps: Fe
                    }, null, 8, ["progress", "message", "current-phase"]),
                    Q[43] || (Q[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), r(j, { key: 0 }, [
                    Q[40] || (Q[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", GE, [
                      Q[35] || (Q[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      qe(t("input", {
                        "onUpdate:modelValue": Q[9] || (Q[9] = (Ce) => le.value = Ce),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [zt, le.value]
                      ])
                    ]),
                    t("div", jE, [
                      Q[36] || (Q[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": Q[10] || (Q[10] = (Ce) => Z.value = Ce),
                        class: "form-select"
                      }, [
                        (a(!0), r(j, null, ge(We(Rr), (Ce) => (a(), r("option", {
                          key: Ce,
                          value: Ce
                        }, f(Ce), 9, HE))), 128))
                      ], 512), [
                        [hs, Z.value]
                      ])
                    ]),
                    t("div", KE, [
                      Q[37] || (Q[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": Q[11] || (Q[11] = (Ce) => z.value = Ce),
                        class: "form-select",
                        disabled: ye.value
                      }, [
                        (a(!0), r(j, null, ge(X.value, (Ce) => (a(), r("option", {
                          key: Ce.tag_name,
                          value: Ce.tag_name
                        }, f(Ce.name), 9, YE))), 128))
                      ], 8, qE), [
                        [hs, z.value]
                      ])
                    ]),
                    t("div", JE, [
                      Q[38] || (Q[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": Q[12] || (Q[12] = (Ce) => W.value = Ce),
                        class: "form-select"
                      }, [
                        (a(!0), r(j, null, ge(We(al), (Ce) => (a(), r("option", {
                          key: Ce,
                          value: Ce
                        }, f(Ce) + f(Ce === "auto" ? " (detect GPU)" : ""), 9, QE))), 128))
                      ], 512), [
                        [hs, W.value]
                      ])
                    ]),
                    t("div", XE, [
                      t("label", ZE, [
                        qe(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": Q[13] || (Q[13] = (Ce) => Y.value = Ce)
                        }, null, 512), [
                          [en, Y.value]
                        ]),
                        Q[39] || (Q[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    A.value ? (a(), r("div", eT, f(A.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (a(), r("div", oT, [
                  S(Ar, {
                    "workspace-path": se.value,
                    "resume-import": I.value,
                    "initial-progress": M.value ?? void 0,
                    onImportComplete: ae,
                    onImportStarted: Q[14] || (Q[14] = (Ce) => C.value = !0),
                    onSourceCleared: me
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          t("div", nT, [
            S(Vr),
            t("div", aT, [
              g.value === 1 ? (a(), D(Me, {
                key: 0,
                variant: "primary",
                disabled: !he.value || _e.value,
                onClick: V
              }, {
                default: h(() => [
                  $(f(_e.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : g.value === 2 ? (a(), r(j, { key: 1 }, [
                !ce.value && !C.value && (p.value !== "landing" || o.setupState === "no_workspace" && !se.value) ? (a(), D(Me, {
                  key: 0,
                  variant: "secondary",
                  onClick: $e
                }, {
                  default: h(() => [...Q[44] || (Q[44] = [
                    $(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (a(), D(Me, {
                  key: 1,
                  variant: "primary",
                  disabled: !De.value || ce.value,
                  onClick: ee
                }, {
                  default: h(() => [
                    $(f(ce.value ? "Creating..." : Y.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                p.value === "landing" && w.value ? (a(), D(Me, {
                  key: 2,
                  variant: "primary",
                  onClick: we
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
      _.value ? (a(), D(kE, {
        key: 0,
        "workspace-path": O.value,
        onClose: Q[16] || (Q[16] = (Oe) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), rT = /* @__PURE__ */ ve(iT, [["__scopeId", "data-v-9a9aadc0"]]), cT = { class: "comfygit-panel" }, uT = { class: "panel-header" }, dT = { class: "header-left" }, fT = {
  key: 0,
  class: "header-info"
}, mT = { class: "header-actions" }, vT = { class: "env-switcher" }, pT = {
  key: 0,
  class: "header-info"
}, gT = { class: "branch-name" }, hT = { class: "panel-main" }, yT = { class: "sidebar" }, wT = { class: "sidebar-content" }, _T = { class: "sidebar-section" }, kT = { class: "sidebar-section" }, bT = { class: "sidebar-section" }, $T = {
  key: 0,
  class: "sidebar-badge"
}, CT = { class: "sidebar-footer" }, xT = { class: "content-area" }, ST = {
  key: 0,
  class: "error-message"
}, IT = {
  key: 1,
  class: "loading"
}, ET = { class: "dialog-content env-selector-dialog" }, TT = { class: "dialog-header" }, PT = { class: "dialog-body" }, RT = { class: "env-list" }, MT = { class: "env-info" }, DT = { class: "env-name-row" }, LT = { class: "env-indicator" }, OT = { class: "env-name" }, AT = {
  key: 0,
  class: "env-branch"
}, UT = {
  key: 1,
  class: "current-label"
}, NT = { class: "env-stats" }, zT = ["onClick"], FT = { class: "toast-container" }, BT = { class: "toast-message" }, VT = /* @__PURE__ */ fe({
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
      deleteEnvironment: _,
      syncEnvironmentManually: C,
      repairWorkflowModels: b,
      getSetupStatus: I
    } = tt(), M = Rv(), { liveInstanceCount: x } = Ur({ autoStart: !0 }), E = k(null), H = k([]), K = k([]), B = k([]), T = U(() => B.value.find((ie) => ie.is_current)), P = k(null), L = k(!1), le = k(1), Z = U(() => {
      var ie;
      return ((ie = P.value) == null ? void 0 : ie.state) || "managed";
    }), z = k(!1), W = k(null), Y = k(null), A = k(!1), se = k(null), X = k(null), ye = k(null), _e = k(!1), ce = k(!1), pe = k(""), Se = k(null), Fe = k({ state: "idle", progress: 0, message: "" });
    let ze = null, Te = null;
    const Pe = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ke = o.initialView ? Pe[o.initialView] : null, he = k((ke == null ? void 0 : ke.view) ?? "status"), De = k((ke == null ? void 0 : ke.section) ?? "this-env");
    function Re(ie, q) {
      he.value = ie, De.value = q;
    }
    function O(ie) {
      const Ae = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[ie];
      Ae && Re(Ae.view, Ae.section);
    }
    function R() {
      Re("branches", "this-env");
    }
    function N() {
      n("close"), setTimeout(() => {
        var q;
        const ie = document.querySelectorAll("button.comfyui-button");
        for (const Ae of ie)
          if (((q = Ae.textContent) == null ? void 0 : q.trim()) === "Manager") {
            Ae.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const V = k(null), ee = k(!1), re = k(!1), we = k([]);
    let $e = 0;
    function ae(ie, q = "info", Ae = 3e3) {
      const je = ++$e;
      return we.value.push({ id: je, message: ie, type: q }), Ae > 0 && setTimeout(() => {
        we.value = we.value.filter((ot) => ot.id !== je);
      }, Ae), je;
    }
    function me(ie) {
      we.value = we.value.filter((q) => q.id !== ie);
    }
    function Le(ie, q) {
      ae(ie, q);
    }
    const Ee = U(() => {
      if (!E.value) return "neutral";
      const ie = E.value.workflows, q = ie.new.length > 0 || ie.modified.length > 0 || ie.deleted.length > 0 || E.value.has_changes;
      return E.value.comparison.is_synced ? q ? "warning" : "success" : "error";
    });
    U(() => E.value ? Ee.value === "success" ? "All synced" : Ee.value === "warning" ? "Uncommitted changes" : Ee.value === "error" ? "Not synced" : "" : "");
    async function ne() {
      z.value = !0, W.value = null;
      try {
        const [ie, q, Ae, je] = await Promise.all([
          l(!0),
          i(),
          c(),
          g()
        ]);
        E.value = ie, H.value = q.commits, K.value = Ae.branches, B.value = je, n("statusUpdate", ie), se.value && await se.value.loadWorkflows(!0);
      } catch (ie) {
        W.value = ie instanceof Error ? ie.message : "Failed to load status", E.value = null, H.value = [], K.value = [];
      } finally {
        z.value = !1;
      }
    }
    function Q(ie) {
      Y.value = ie;
    }
    async function Oe(ie) {
      var Ae;
      Y.value = null;
      const q = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      V.value = {
        title: q ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: q ? "You have uncommitted changes that will be lost." : `Checkout commit ${ie.short_hash || ((Ae = ie.hash) == null ? void 0 : Ae.slice(0, 7))}?`,
        details: q ? is() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: q ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: q,
        onConfirm: async () => {
          var mt;
          V.value = null, de();
          const je = ae(`Checking out ${ie.short_hash || ((mt = ie.hash) == null ? void 0 : mt.slice(0, 7))}...`, "info", 0), ot = await u(ie.hash, q);
          me(je), ot.status === "success" ? ae("Restarting ComfyUI...", "success") : ae(ot.message || "Checkout failed", "error");
        }
      };
    }
    async function Ce(ie) {
      const q = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      V.value = {
        title: q ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: q ? "You have uncommitted changes." : `Switch to branch "${ie}"?`,
        details: q ? is() : void 0,
        warning: q ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: q ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          V.value = null, de();
          const Ae = ae(`Switching to ${ie}...`, "info", 0), je = await m(ie, q);
          me(Ae), je.status === "success" ? ae("Restarting ComfyUI...", "success") : ae(je.message || "Branch switch failed", "error");
        }
      };
    }
    async function be(ie) {
      const q = ae(`Creating branch ${ie}...`, "info", 0), Ae = await d(ie);
      me(q), Ae.status === "success" ? (ae(`Branch "${ie}" created`, "success"), await ne()) : ae(Ae.message || "Failed to create branch", "error");
    }
    async function G(ie, q = !1) {
      const Ae = async (je) => {
        var mt;
        const ot = ae(`Deleting branch ${ie}...`, "info", 0);
        try {
          const Dt = await v(ie, je);
          me(ot), Dt.status === "success" ? (ae(`Branch "${ie}" deleted`, "success"), await ne()) : (mt = Dt.message) != null && mt.includes("not fully merged") ? V.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ie}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              V.value = null, await Ae(!0);
            }
          } : ae(Dt.message || "Failed to delete branch", "error");
        } catch (Dt) {
          me(ot);
          const rs = Dt instanceof Error ? Dt.message : "Failed to delete branch";
          rs.includes("not fully merged") ? V.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ie}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              V.value = null, await Ae(!0);
            }
          } : ae(rs, "error");
        }
      };
      V.value = {
        title: "Delete Branch",
        message: `Delete branch "${ie}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          V.value = null, await Ae(q);
        }
      };
    }
    async function F(ie) {
      Y.value = null;
      const q = prompt("Enter branch name:");
      if (q) {
        const Ae = ae(`Creating branch ${q}...`, "info", 0), je = await d(q, ie.hash);
        me(Ae), je.status === "success" ? (ae(`Branch "${q}" created from ${ie.short_hash}`, "success"), await ne()) : ae(je.message || "Failed to create branch", "error");
      }
    }
    function de() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Ve() {
      V.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ie;
          V.value = null, de(), ae("Restarting environment...", "info");
          try {
            (ie = window.app) != null && ie.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Xe() {
      V.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ie;
          V.value = null, ae("Stopping environment...", "info");
          try {
            (ie = window.app) != null && ie.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function vt(ie, q) {
      A.value = !1, pe.value = ie, Se.value = q || null, _e.value = !0;
    }
    async function at() {
      _e.value = !1, ce.value = !0, de(), Fe.value = {
        progress: 10,
        state: ut(10),
        message: Mt(10)
      };
      try {
        await w(pe.value, Se.value || void 0), Bt(), Gs();
      } catch (ie) {
        Yt(), ce.value = !1, ae(`Failed to initiate switch: ${ie instanceof Error ? ie.message : "Unknown error"}`, "error"), Fe.value = { state: "idle", progress: 0, message: "" }, Se.value = null;
      }
    }
    function ut(ie) {
      return ie >= 100 ? "complete" : ie >= 80 ? "validating" : ie >= 60 ? "starting" : ie >= 30 ? "syncing" : "preparing";
    }
    function Mt(ie) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[ut(ie)] || "";
    }
    function Bt() {
      if (Te) return;
      let ie = 10;
      const q = 60, Ae = 5e3, je = 100, ot = (q - ie) / (Ae / je);
      Te = window.setInterval(() => {
        if (ie += ot, ie >= q && (ie = q, Yt()), Fe.value.progress < q) {
          const mt = Math.floor(ie);
          Fe.value = {
            progress: mt,
            state: ut(mt),
            message: Mt(mt)
          };
        }
      }, je);
    }
    function Yt() {
      Te && (clearInterval(Te), Te = null);
    }
    function Gs() {
      ze || (ze = window.setInterval(async () => {
        try {
          let ie = await M.getStatus();
          if ((!ie || ie.state === "idle") && (ie = await p()), !ie)
            return;
          const q = ie.progress || 0;
          q >= 60 && Yt();
          const Ae = Math.max(q, Fe.value.progress), je = ie.state && ie.state !== "idle" && ie.state !== "unknown", ot = je ? ie.state : ut(Ae), mt = je && ie.message || Mt(Ae);
          Fe.value = {
            state: ot,
            progress: Ae,
            message: mt
          }, ie.state === "complete" ? (Yt(), Ms(), ce.value = !1, ae(`✓ Switched to ${pe.value}`, "success"), await ne(), pe.value = "") : ie.state === "rolled_back" ? (Yt(), Ms(), ce.value = !1, ae("Switch failed, restored previous environment", "warning"), pe.value = "") : ie.state === "critical_failure" && (Yt(), Ms(), ce.value = !1, ae(`Critical error during switch: ${ie.message}`, "error"), pe.value = "");
        } catch (ie) {
          console.error("Failed to poll switch progress:", ie);
        }
      }, 1e3));
    }
    function Ms() {
      Yt(), ze && (clearInterval(ze), ze = null);
    }
    function no() {
      var ie;
      _e.value = !1, pe.value = "", (ie = P.value) != null && ie.state && P.value.state !== "managed" && (le.value = P.value.state === "no_workspace" ? 1 : 2, L.value = !0);
    }
    async function Co(ie) {
      ee.value = !1, await ne(), ae(ie.message, ie.success ? "success" : "error");
    }
    async function xo() {
      re.value = !1;
      const ie = ae("Syncing environment...", "info", 0);
      try {
        const q = await C("skip", !0);
        if (me(ie), q.status === "success") {
          const Ae = [];
          q.nodes_installed.length && Ae.push(`${q.nodes_installed.length} installed`), q.nodes_removed.length && Ae.push(`${q.nodes_removed.length} removed`);
          const je = Ae.length ? `: ${Ae.join(", ")}` : "";
          ae(`✓ Environment synced${je}`, "success"), await ne();
        } else {
          const Ae = q.errors.length ? q.errors.join("; ") : q.message;
          ae(`Sync failed: ${Ae}`, "error");
        }
      } catch (q) {
        me(ie), ae(`Sync error: ${q instanceof Error ? q.message : "Unknown error"}`, "error");
      }
    }
    async function So(ie) {
      var q;
      try {
        const Ae = await b(ie);
        Ae.failed.length === 0 ? ae(`✓ Repaired ${Ae.success} workflow${Ae.success === 1 ? "" : "s"}`, "success") : ae(`Repaired ${Ae.success}, failed: ${Ae.failed.length}`, "warning"), await ne();
      } catch (Ae) {
        ae(`Repair failed: ${Ae instanceof Error ? Ae.message : "Unknown error"}`, "error");
      } finally {
        (q = ye.value) == null || q.resetRepairingState();
      }
    }
    async function xe() {
      var q, Ae;
      const ie = ae("Repairing environment...", "info", 0);
      try {
        const je = await C("skip", !0);
        if (me(ie), je.status === "success") {
          const ot = [];
          je.nodes_installed.length && ot.push(`${je.nodes_installed.length} installed`), je.nodes_removed.length && ot.push(`${je.nodes_removed.length} removed`);
          const mt = ot.length ? `: ${ot.join(", ")}` : "";
          ae(`✓ Environment repaired${mt}`, "success"), (q = ye.value) == null || q.closeDetailModal(), await ne();
        } else {
          const ot = je.errors.length ? je.errors.join(", ") : je.message || "Unknown error";
          ae(`Repair failed: ${ot}`, "error");
        }
      } catch (je) {
        me(ie), ae(`Repair error: ${je instanceof Error ? je.message : "Unknown error"}`, "error");
      } finally {
        (Ae = ye.value) == null || Ae.resetRepairingEnvironmentState();
      }
    }
    async function te(ie, q) {
      ae(`Environment '${ie}' created`, "success"), await ne(), X.value && await X.value.loadEnvironments(), q && await vt(ie);
    }
    async function He(ie) {
      var q;
      if (((q = T.value) == null ? void 0 : q.name) === ie) {
        ae("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      V.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ie}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          V.value = null;
          try {
            const Ae = await _(ie);
            Ae.status === "success" ? (ae(`Environment "${ie}" deleted`, "success"), await ne(), X.value && await X.value.loadEnvironments()) : ae(Ae.message || "Failed to delete environment", "error");
          } catch (Ae) {
            ae(`Error deleting environment: ${Ae instanceof Error ? Ae.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ht(ie, q) {
      L.value = !1;
      try {
        P.value = await I();
      } catch {
      }
      await vt(ie, q);
    }
    function Jt() {
      L.value = !1, n("close");
    }
    async function ys(ie, q) {
      await vt(ie, q);
    }
    async function ws(ie) {
      await ne(), await vt(ie);
    }
    async function ls(ie) {
      P.value = await I(), console.log(`Environment '${ie}' created. Available for switching.`);
    }
    function Ue() {
      Re("environments", "all-envs"), setTimeout(() => {
        var ie;
        (ie = X.value) == null || ie.openCreateModal();
      }, 100);
    }
    function is() {
      if (!E.value) return [];
      const ie = [], q = E.value.workflows;
      return q.new.length && ie.push(`${q.new.length} new workflow(s)`), q.modified.length && ie.push(`${q.modified.length} modified workflow(s)`), q.deleted.length && ie.push(`${q.deleted.length} deleted workflow(s)`), ie;
    }
    return Qe(async () => {
      try {
        if (P.value = await I(), P.value.state === "no_workspace") {
          L.value = !0, le.value = 1;
          return;
        }
        if (P.value.state === "empty_workspace") {
          L.value = !0, le.value = 2;
          return;
        }
        if (P.value.state === "unmanaged") {
          L.value = !0, le.value = 2;
          return;
        }
      } catch (ie) {
        console.warn("Setup status check failed, proceeding normally:", ie);
      }
      await ne();
    }), (ie, q) => {
      var Ae, je, ot, mt, Dt, rs, js, Hs, ln, rn, cn, un, J;
      return a(), r("div", cT, [
        t("div", uT, [
          t("div", dT, [
            q[31] || (q[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            E.value ? (a(), r("div", fT)) : y("", !0)
          ]),
          t("div", mT, [
            S(Br),
            q[34] || (q[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Ie(["icon-btn", { spinning: z.value }]),
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
              onClick: q[0] || (q[0] = (oe) => n("close")),
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
        t("div", vT, [
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
                onClick: Xe
              }, " Stop ")
            ])
          ]),
          t("button", {
            class: "env-switcher-btn",
            onClick: q[1] || (q[1] = (oe) => Re("environments", "all-envs"))
          }, [
            E.value ? (a(), r("div", pT, [
              t("span", null, f(((Ae = T.value) == null ? void 0 : Ae.name) || ((je = E.value) == null ? void 0 : je.environment) || "Loading..."), 1),
              t("span", gT, "(" + f(E.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            q[36] || (q[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", hT, [
          t("div", yT, [
            t("div", wT, [
              t("div", _T, [
                q[37] || (q[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Ie(["sidebar-item", { active: he.value === "status" && De.value === "this-env" }]),
                  onClick: q[2] || (q[2] = (oe) => Re("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: he.value === "workflows" }]),
                  onClick: q[3] || (q[3] = (oe) => Re("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: he.value === "models-env" }]),
                  onClick: q[4] || (q[4] = (oe) => Re("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: he.value === "branches" }]),
                  onClick: q[5] || (q[5] = (oe) => Re("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: he.value === "history" }]),
                  onClick: q[6] || (q[6] = (oe) => Re("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: he.value === "nodes" }]),
                  onClick: q[7] || (q[7] = (oe) => Re("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: he.value === "debug-env" }]),
                  onClick: q[8] || (q[8] = (oe) => Re("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              q[41] || (q[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", kT, [
                q[38] || (q[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Ie(["sidebar-item", { active: he.value === "environments" }]),
                  onClick: q[9] || (q[9] = (oe) => Re("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: he.value === "model-index" }]),
                  onClick: q[10] || (q[10] = (oe) => Re("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: he.value === "settings" }]),
                  onClick: q[11] || (q[11] = (oe) => Re("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: he.value === "debug-workspace" }]),
                  onClick: q[12] || (q[12] = (oe) => Re("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              q[42] || (q[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", bT, [
                q[40] || (q[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Ie(["sidebar-item", { active: he.value === "deploy" }]),
                  onClick: q[13] || (q[13] = (oe) => Re("deploy", "sharing"))
                }, [
                  q[39] || (q[39] = $(" DEPLOY ", -1)),
                  We(x) > 0 ? (a(), r("span", $T, f(We(x)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: he.value === "export" }]),
                  onClick: q[14] || (q[14] = (oe) => Re("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: he.value === "import" }]),
                  onClick: q[15] || (q[15] = (oe) => Re("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: he.value === "remotes" }]),
                  onClick: q[16] || (q[16] = (oe) => Re("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", CT, [
              S(Vr)
            ])
          ]),
          t("div", xT, [
            W.value ? (a(), r("div", ST, f(W.value), 1)) : !E.value && he.value === "status" ? (a(), r("div", IT, " Loading status... ")) : (a(), r(j, { key: 2 }, [
              he.value === "status" ? (a(), D(ov, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ye,
                status: E.value,
                "setup-state": Z.value,
                onSwitchBranch: R,
                onCommitChanges: q[17] || (q[17] = (oe) => ee.value = !0),
                onSyncEnvironment: q[18] || (q[18] = (oe) => re.value = !0),
                onViewWorkflows: q[19] || (q[19] = (oe) => Re("workflows", "this-env")),
                onViewHistory: q[20] || (q[20] = (oe) => Re("history", "this-env")),
                onViewDebug: q[21] || (q[21] = (oe) => Re("debug-env", "this-env")),
                onViewNodes: q[22] || (q[22] = (oe) => Re("nodes", "this-env")),
                onRepairMissingModels: So,
                onRepairEnvironment: xe,
                onStartSetup: q[23] || (q[23] = (oe) => L.value = !0),
                onViewEnvironments: q[24] || (q[24] = (oe) => Re("environments", "all-envs")),
                onCreateEnvironment: Ue
              }, null, 8, ["status", "setup-state"])) : he.value === "workflows" ? (a(), D(L0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: se,
                onRefresh: ne
              }, null, 512)) : he.value === "models-env" ? (a(), D(gw, {
                key: 2,
                onNavigate: O
              })) : he.value === "branches" ? (a(), D(yv, {
                key: 3,
                branches: K.value,
                current: ((ot = E.value) == null ? void 0 : ot.branch) || null,
                onSwitch: Ce,
                onCreate: be,
                onDelete: G
              }, null, 8, ["branches", "current"])) : he.value === "history" ? (a(), D(Tv, {
                key: 4,
                commits: H.value,
                "current-ref": (mt = E.value) == null ? void 0 : mt.branch,
                onSelect: Q,
                onCheckout: Oe
              }, null, 8, ["commits", "current-ref"])) : he.value === "nodes" ? (a(), D(Sk, {
                key: 5,
                "version-mismatches": ((rs = (Dt = E.value) == null ? void 0 : Dt.comparison) == null ? void 0 : rs.version_mismatches) || [],
                onOpenNodeManager: N,
                onRepairEnvironment: xe,
                onToast: Le
              }, null, 8, ["version-mismatches"])) : he.value === "debug-env" ? (a(), D(F$, { key: 6 })) : he.value === "environments" ? (a(), D(WC, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: X,
                onSwitch: vt,
                onCreated: te,
                onDelete: He
              }, null, 512)) : he.value === "model-index" ? (a(), D(J_, {
                key: 8,
                onRefresh: ne
              })) : he.value === "settings" ? (a(), D(R$, { key: 9 })) : he.value === "debug-workspace" ? (a(), D(z$, { key: 10 })) : he.value === "deploy" ? (a(), D(_6, {
                key: 11,
                onToast: Le,
                onNavigate: O
              })) : he.value === "export" ? (a(), D(wx, { key: 12 })) : he.value === "import" ? (a(), D(f5, {
                key: 13,
                onImportCompleteSwitch: ws
              })) : he.value === "remotes" ? (a(), D(d$, {
                key: 14,
                onToast: Le
              })) : y("", !0)
            ], 64))
          ])
        ]),
        Y.value ? (a(), D(N6, {
          key: 0,
          commit: Y.value,
          onClose: q[25] || (q[25] = (oe) => Y.value = null),
          onCheckout: Oe,
          onCreateBranch: F
        }, null, 8, ["commit"])) : y("", !0),
        V.value ? (a(), D(nl, {
          key: 1,
          title: V.value.title,
          message: V.value.message,
          details: V.value.details,
          warning: V.value.warning,
          confirmLabel: V.value.confirmLabel,
          cancelLabel: V.value.cancelLabel,
          secondaryLabel: V.value.secondaryLabel,
          secondaryAction: V.value.secondaryAction,
          destructive: V.value.destructive,
          onConfirm: V.value.onConfirm,
          onCancel: q[26] || (q[26] = (oe) => V.value = null),
          onSecondary: V.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        S(NI, {
          show: _e.value,
          "from-environment": ((js = T.value) == null ? void 0 : js.name) || "unknown",
          "to-environment": pe.value,
          onConfirm: at,
          onClose: no
        }, null, 8, ["show", "from-environment", "to-environment"]),
        ee.value && E.value ? (a(), D(Fr, {
          key: 2,
          status: E.value,
          "as-modal": !0,
          onClose: q[27] || (q[27] = (oe) => ee.value = !1),
          onCommitted: Co
        }, null, 8, ["status"])) : y("", !0),
        re.value && E.value ? (a(), D(nE, {
          key: 3,
          show: re.value,
          "mismatch-details": {
            missing_nodes: E.value.comparison.missing_nodes,
            extra_nodes: E.value.comparison.extra_nodes
          },
          onConfirm: xo,
          onClose: q[28] || (q[28] = (oe) => re.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        S(YI, {
          show: ce.value,
          state: Fe.value.state,
          progress: Fe.value.progress,
          message: Fe.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        A.value ? (a(), r("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: q[30] || (q[30] = it((oe) => A.value = !1, ["self"]))
        }, [
          t("div", ET, [
            t("div", TT, [
              q[44] || (q[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: q[29] || (q[29] = (oe) => A.value = !1)
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
            t("div", PT, [
              q[45] || (q[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", RT, [
                (a(!0), r(j, null, ge(B.value, (oe) => (a(), r("div", {
                  key: oe.name,
                  class: Ie(["env-item", { current: oe.is_current }])
                }, [
                  t("div", MT, [
                    t("div", DT, [
                      t("span", LT, f(oe.is_current ? "●" : "○"), 1),
                      t("span", OT, f(oe.name), 1),
                      oe.current_branch ? (a(), r("span", AT, "(" + f(oe.current_branch) + ")", 1)) : y("", !0),
                      oe.is_current ? (a(), r("span", UT, "CURRENT")) : y("", !0)
                    ]),
                    t("div", NT, f(oe.workflow_count) + " workflows • " + f(oe.node_count) + " nodes ", 1)
                  ]),
                  oe.is_current ? y("", !0) : (a(), r("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ne) => vt(oe.name)
                  }, " SWITCH ", 8, zT))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        L.value ? (a(), D(rT, {
          key: 5,
          "default-path": ((Hs = P.value) == null ? void 0 : Hs.default_path) || "~/comfygit",
          "detected-models-dir": ((ln = P.value) == null ? void 0 : ln.detected_models_dir) || null,
          "initial-step": le.value,
          "existing-environments": ((rn = P.value) == null ? void 0 : rn.environments) || [],
          "cli-installed": ((cn = P.value) == null ? void 0 : cn.cli_installed) ?? !0,
          "setup-state": ((un = P.value) == null ? void 0 : un.state) || "no_workspace",
          "workspace-path": ((J = P.value) == null ? void 0 : J.workspace_path) || null,
          onComplete: ht,
          onClose: Jt,
          onSwitchEnvironment: ys,
          onEnvironmentCreatedNoSwitch: ls
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", FT, [
          S(md, { name: "toast" }, {
            default: h(() => [
              (a(!0), r(j, null, ge(we.value, (oe) => (a(), r("div", {
                key: oe.id,
                class: Ie(["toast", oe.type])
              }, [
                t("span", BT, f(oe.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), WT = /* @__PURE__ */ ve(VT, [["__scopeId", "data-v-74541ece"]]), GT = { class: "item-header" }, jT = { class: "item-info" }, HT = { class: "filename" }, KT = { class: "metadata" }, qT = { class: "size" }, YT = {
  key: 0,
  class: "type"
}, JT = { class: "item-actions" }, QT = {
  key: 0,
  class: "progress-section"
}, XT = { class: "progress-bar" }, ZT = { class: "progress-stats" }, e7 = { class: "downloaded" }, t7 = { class: "speed" }, s7 = {
  key: 0,
  class: "eta"
}, o7 = {
  key: 1,
  class: "status-msg paused"
}, n7 = {
  key: 2,
  class: "status-msg queued"
}, a7 = {
  key: 3,
  class: "status-msg completed"
}, l7 = {
  key: 4,
  class: "status-msg failed"
}, i7 = {
  key: 0,
  class: "retries"
}, r7 = /* @__PURE__ */ fe({
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
      t("div", GT, [
        t("div", jT, [
          t("div", HT, f(e.item.filename), 1),
          t("div", KT, [
            t("span", qT, f(n(e.item.size)), 1),
            e.item.type ? (a(), r("span", YT, f(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", JT, [
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
      e.item.status === "downloading" ? (a(), r("div", QT, [
        t("div", XT, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", ZT, [
          t("span", e7, f(n(e.item.downloaded)) + " / " + f(n(e.item.size)), 1),
          t("span", t7, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), r("span", s7, f(i(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), r("div", o7, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), r("div", n7, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), r("div", a7, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), r("div", l7, [
        $(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), r("span", i7, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Mo = /* @__PURE__ */ ve(r7, [["__scopeId", "data-v-2110df65"]]), c7 = { class: "queue-title" }, u7 = { class: "count" }, d7 = { class: "queue-actions" }, f7 = { class: "action-label" }, m7 = {
  key: 0,
  class: "overall-progress"
}, v7 = { class: "progress-bar" }, p7 = {
  key: 0,
  class: "current-mini"
}, g7 = { class: "filename" }, h7 = { class: "speed" }, y7 = {
  key: 1,
  class: "queue-content"
}, w7 = {
  key: 0,
  class: "section"
}, _7 = {
  key: 1,
  class: "section"
}, k7 = { class: "section-header" }, b7 = { class: "section-label paused" }, $7 = { class: "items-list" }, C7 = {
  key: 2,
  class: "section"
}, x7 = { class: "section-header" }, S7 = { class: "section-label" }, I7 = { class: "items-list" }, E7 = {
  key: 3,
  class: "section"
}, T7 = { class: "section-header" }, P7 = { class: "section-label" }, R7 = { class: "items-list" }, M7 = {
  key: 4,
  class: "section"
}, D7 = { class: "section-header" }, L7 = { class: "section-label failed" }, O7 = { class: "items-list" }, A7 = /* @__PURE__ */ fe({
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
      clearCompleted: _
    } = bo(), C = k(!1);
    let b = null;
    gt(
      () => ({
        active: d.value,
        failed: i.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (E, H) => {
        b && (clearTimeout(b), b = null);
        const K = E.active === 0 && E.failed === 0 && E.paused === 0 && E.completed > 0, B = H && (H.active > 0 || H.paused > 0);
        K && B && (b = setTimeout(() => {
          _(), b = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const I = U(() => {
      var K;
      if (s.items.length === 0) return 0;
      const E = l.value.length, H = ((K = o.value) == null ? void 0 : K.progress) || 0;
      return Math.round((E + H / 100) / s.items.length * 100);
    });
    function M(E) {
      m(E);
    }
    function x(E) {
      return E === 0 ? "" : `${(E / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (E, H) => (a(), D(_t, { to: "body" }, [
      We(u) ? (a(), r("div", {
        key: 0,
        class: Ie(["model-download-queue", { minimized: !C.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: H[0] || (H[0] = (K) => C.value = !C.value)
        }, [
          t("div", c7, [
            H[4] || (H[4] = t("span", { class: "icon" }, "↓", -1)),
            H[5] || (H[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", u7, "(" + f(We(d)) + "/" + f(We(s).items.length) + ")", 1)
          ]),
          t("div", d7, [
            t("span", f7, f(C.value ? "minimize" : "expand"), 1)
          ])
        ]),
        C.value ? (a(), r("div", y7, [
          We(o) ? (a(), r("div", w7, [
            H[6] || (H[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            S(Mo, {
              item: We(o),
              onCancel: H[1] || (H[1] = (K) => M(We(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          We(c).length > 0 ? (a(), r("div", _7, [
            t("div", k7, [
              t("span", b7, "Paused (" + f(We(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: H[2] || (H[2] = //@ts-ignore
                (...K) => We(w) && We(w)(...K))
              }, "Resume All")
            ]),
            t("div", $7, [
              (a(!0), r(j, null, ge(We(c), (K) => (a(), D(Mo, {
                key: K.id,
                item: K,
                onResume: (B) => We(g)(K.id),
                onRemove: (B) => We(p)(K.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(n).length > 0 ? (a(), r("div", C7, [
            t("div", x7, [
              t("span", S7, "Queued (" + f(We(n).length) + ")", 1)
            ]),
            t("div", I7, [
              (a(!0), r(j, null, ge(We(n), (K) => (a(), D(Mo, {
                key: K.id,
                item: K,
                onCancel: (B) => M(K.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          We(l).length > 0 ? (a(), r("div", E7, [
            t("div", T7, [
              t("span", P7, "Completed (" + f(We(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: H[3] || (H[3] = //@ts-ignore
                (...K) => We(_) && We(_)(...K))
              }, "Clear")
            ]),
            t("div", R7, [
              (a(!0), r(j, null, ge(We(l).slice(0, 3), (K) => (a(), D(Mo, {
                key: K.id,
                item: K,
                onRemove: (B) => We(p)(K.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(i).length > 0 ? (a(), r("div", M7, [
            t("div", D7, [
              t("span", L7, "Failed (" + f(We(i).length) + ")", 1)
            ]),
            t("div", O7, [
              (a(!0), r(j, null, ge(We(i), (K) => (a(), D(Mo, {
                key: K.id,
                item: K,
                onRetry: (B) => We(v)(K.id),
                onRemove: (B) => We(p)(K.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), r("div", m7, [
          t("div", v7, [
            t("div", {
              class: "progress-fill",
              style: Ft({ width: `${I.value}%` })
            }, null, 4)
          ]),
          We(o) ? (a(), r("div", p7, [
            t("span", g7, f(We(o).filename), 1),
            t("span", h7, f(x(We(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), U7 = /* @__PURE__ */ ve(A7, [["__scopeId", "data-v-60751cfa"]]), N7 = { class: "detail-header" }, z7 = { class: "item-count" }, F7 = { class: "resource-list" }, B7 = { class: "item-info" }, V7 = { class: "item-name" }, W7 = {
  key: 0,
  class: "item-subtitle"
}, G7 = {
  key: 0,
  class: "installing-badge"
}, j7 = ["title"], H7 = {
  key: 2,
  class: "installed-badge"
}, K7 = {
  key: 3,
  class: "queued-badge"
}, q7 = {
  key: 1,
  class: "no-action"
}, Y7 = /* @__PURE__ */ fe({
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
    const o = e, n = s, l = U(() => o.itemType === "model" ? "Download" : "Install"), i = U(() => o.items.filter((p) => p.canAction)), c = U(() => i.value.length > 0 && i.value.every(
      (p) => {
        var _, C;
        return o.queuedItems.has(p.id) || ((_ = o.installedItems) == null ? void 0 : _.has(p.id)) || ((C = o.failedItems) == null ? void 0 : C.has(p.id));
      }
    )), u = U(() => c.value ? "All Queued" : o.itemType === "model" ? "Download All" : "Install All");
    function d(p) {
      return o.queuedItems.has(p.id);
    }
    function m(p) {
      return o.installingItem === p.id;
    }
    function v(p) {
      var _;
      return ((_ = o.installedItems) == null ? void 0 : _.has(p.id)) ?? !1;
    }
    function g(p) {
      var _;
      return ((_ = o.failedItems) == null ? void 0 : _.has(p.id)) ?? !1;
    }
    function w(p) {
      var _;
      return ((_ = o.failedItems) == null ? void 0 : _.get(p.id)) || "Unknown error";
    }
    return (p, _) => (a(), D(ft, {
      title: e.title,
      size: "md",
      onClose: _[2] || (_[2] = (C) => n("close"))
    }, {
      body: h(() => [
        t("div", N7, [
          t("span", z7, f(e.items.length) + " " + f(e.items.length === 1 ? "item" : "items"), 1),
          i.value.length > 1 ? (a(), D(Me, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: c.value,
            onClick: _[0] || (_[0] = (C) => n("bulk-action"))
          }, {
            default: h(() => [
              $(f(u.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        t("div", F7, [
          (a(!0), r(j, null, ge(e.items, (C) => (a(), r("div", {
            key: C.id,
            class: "resource-item"
          }, [
            t("div", B7, [
              t("span", V7, f(C.name), 1),
              C.subtitle ? (a(), r("span", W7, f(C.subtitle), 1)) : y("", !0)
            ]),
            C.canAction ? (a(), r(j, { key: 0 }, [
              m(C) ? (a(), r("span", G7, "Installing...")) : g(C) ? (a(), r("span", {
                key: 1,
                class: "failed-badge",
                title: w(C)
              }, "Failed ⚠", 8, j7)) : v(C) ? (a(), r("span", H7, "Installed")) : d(C) ? (a(), r("span", K7, "Queued")) : (a(), D(Me, {
                key: 4,
                size: "sm",
                variant: "secondary",
                onClick: (b) => n("action", C)
              }, {
                default: h(() => [
                  $(f(l.value), 1)
                ]),
                _: 1
              }, 8, ["onClick"]))
            ], 64)) : (a(), r("span", q7, f(C.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        S(Me, {
          variant: "secondary",
          onClick: _[1] || (_[1] = (C) => n("close"))
        }, {
          default: h(() => [..._[3] || (_[3] = [
            $("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), J7 = /* @__PURE__ */ ve(Y7, [["__scopeId", "data-v-fac0fef0"]]), Q7 = {
  key: 0,
  class: "loading-state"
}, X7 = {
  key: 1,
  class: "analysis-results"
}, Z7 = {
  key: 0,
  class: "section"
}, eP = { class: "section-header" }, tP = { class: "section-title" }, sP = { class: "item-list" }, oP = { class: "package-info" }, nP = { class: "package-name" }, aP = { class: "node-count" }, lP = {
  key: 1,
  class: "installing-badge"
}, iP = {
  key: 2,
  class: "queued-badge"
}, rP = ["title"], cP = {
  key: 4,
  class: "installed-badge"
}, uP = {
  key: 1,
  class: "section"
}, dP = { class: "section-header" }, fP = { class: "section-title" }, mP = { class: "item-list" }, vP = { class: "node-type" }, pP = {
  key: 0,
  class: "overflow-note"
}, gP = {
  key: 2,
  class: "section"
}, hP = { class: "section-header" }, yP = { class: "section-title" }, wP = { class: "item-list" }, _P = { class: "model-info" }, kP = { class: "model-name" }, bP = {
  key: 1,
  class: "queued-badge"
}, $P = {
  key: 1,
  class: "no-url"
}, CP = { class: "dont-show-again" }, xP = /* @__PURE__ */ fe({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = k(!1), o = k(null), n = k(null), l = k(!1), i = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Map()), d = k(/* @__PURE__ */ new Set()), m = k(!1), v = k(null), g = k(0), w = k(null), p = k(/* @__PURE__ */ new Set()), _ = k(/* @__PURE__ */ new Map()), { addToQueue: C } = bo(), { queueNodeInstall: b } = tt(), I = U(() => M.value.length > 0 || E.value.length > 0 || H.value.length > 0), M = U(() => {
      var V, ee;
      if (!((V = n.value) != null && V.nodes)) return [];
      const R = /* @__PURE__ */ new Map(), N = (n.value.nodes.resolved || []).filter((re) => {
        var we;
        return !re.is_installed && ((we = re.package) == null ? void 0 : we.package_id);
      });
      for (const re of N) {
        const we = re.package.package_id;
        R.has(we) || R.set(we, {
          package_id: we,
          title: re.package.title || we,
          node_count: 0,
          node_types: [],
          repository: re.package.repository || null,
          latest_version: re.package.latest_version || null
        });
        const $e = R.get(we);
        $e.node_count++, $e.node_types.push(((ee = re.reference) == null ? void 0 : ee.node_type) || re.node_type);
      }
      return Array.from(R.values());
    }), x = U(() => M.value.reduce((R, N) => R + N.node_count, 0)), E = U(() => {
      var R;
      return (R = n.value) != null && R.nodes ? (n.value.nodes.unresolved || []).map((N) => {
        var V;
        return {
          node_type: ((V = N.reference) == null ? void 0 : V.node_type) || N.node_type
        };
      }) : [];
    }), H = U(() => {
      var V;
      if (!((V = n.value) != null && V.models)) return [];
      const R = (n.value.models.resolved || []).filter(
        (ee) => ee.match_type === "download_intent" || ee.match_type === "property_download_intent" || ee.match_type === "not_found"
      ).map((ee) => {
        var re, we, $e, ae;
        return {
          filename: ((we = (re = ee.reference) == null ? void 0 : re.widget_value) == null ? void 0 : we.split("/").pop()) || (($e = ee.reference) == null ? void 0 : $e.widget_value) || ee.widget_value,
          widget_value: ((ae = ee.reference) == null ? void 0 : ae.widget_value) || ee.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: ee.download_source || null,
          targetPath: ee.target_path || null,
          canDownload: !!(ee.download_source && ee.target_path)
        };
      }), N = (n.value.models.unresolved || []).map((ee) => {
        var re, we, $e, ae;
        return {
          filename: ((we = (re = ee.reference) == null ? void 0 : re.widget_value) == null ? void 0 : we.split("/").pop()) || (($e = ee.reference) == null ? void 0 : $e.widget_value) || ee.widget_value,
          widget_value: ((ae = ee.reference) == null ? void 0 : ae.widget_value) || ee.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      });
      return [...R, ...N];
    }), K = U(() => H.value.filter((R) => R.canDownload)), B = U(() => M.value.length >= 5 ? M.value.slice(0, 4) : M.value), T = U(() => H.value.length >= 5 ? H.value.slice(0, 4) : H.value), P = U(() => M.value.length > 0 && M.value.every(
      (R) => i.value.has(R.package_id) || c.value.has(R.package_id) || u.value.has(R.package_id)
    )), L = U(() => K.value.length > 0 && K.value.every((R) => d.value.has(R.url))), le = U(() => M.value.length > 0 || K.value.length > 0), Z = U(() => {
      const R = M.value.length === 0 || P.value, N = K.value.length === 0 || L.value;
      return R && N;
    }), z = U(() => w.value === "models" ? `Missing Models (${H.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${x.value})` : ""), W = U(() => w.value === "models" ? H.value.map((R) => ({
      id: R.url || R.widget_value,
      name: R.filename,
      canAction: R.canDownload,
      actionDisabledReason: R.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? M.value.map((R) => ({
      id: R.package_id,
      name: R.title,
      subtitle: `(${R.node_count} ${R.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : []);
    function Y(R) {
      if (w.value === "models") {
        const N = H.value.find((V) => V.url === R.id || V.widget_value === R.id);
        N && X(N);
      } else if (w.value === "packages") {
        const N = M.value.find((V) => V.package_id === R.id);
        N && se(N);
      }
    }
    function A() {
      w.value === "models" ? _e() : w.value === "packages" && ye();
    }
    async function se(R) {
      const N = R.package_id;
      if (!(i.value.has(N) || c.value.has(N) || u.value.has(N))) {
        Re(), v.value = N;
        try {
          const { ui_id: V } = await b({
            id: N,
            version: R.latest_version || "latest",
            selected_version: R.latest_version || "latest",
            repository: R.repository || void 0,
            mode: "remote",
            channel: "default"
          });
          _.value.set(V, N), c.value.add(N), console.log("[ComfyGit] Registered pending install:", { ui_id: V, packageId: N, pendingInstalls: Array.from(_.value.entries()) });
        } catch (V) {
          console.error("[ComfyGit] Failed to queue package install:", V), u.value.set(N, "Failed to queue install request");
        } finally {
          v.value = null;
        }
      }
    }
    function X(R) {
      !R.url || !R.targetPath || d.value.has(R.url) || (C([{
        workflow: "unsaved",
        filename: R.filename,
        url: R.url,
        targetPath: R.targetPath
      }]), d.value.add(R.url));
    }
    async function ye() {
      for (const R of M.value)
        !i.value.has(R.package_id) && !c.value.has(R.package_id) && !u.value.has(R.package_id) && await se(R);
    }
    function _e() {
      const R = K.value.filter(
        (N) => !d.value.has(N.url)
      );
      if (R.length !== 0) {
        C(R.map((N) => ({
          workflow: "unsaved",
          filename: N.filename,
          url: N.url,
          targetPath: N.targetPath
        })));
        for (const N of R)
          d.value.add(N.url);
      }
    }
    function ce() {
      ye(), _e();
    }
    function pe() {
      m.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Se(R) {
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const N = R == null ? void 0 : R.id;
      if (N && p.value.has(N)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${N} this session`);
        return;
      }
      try {
        const V = await fetch("/v2/comfygit/workflow/is-saved", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: R })
        });
        if (V.ok) {
          const ee = await V.json();
          if (ee.is_saved) {
            console.log(`[ComfyGit] Workflow matches saved file: ${ee.filename}, skipping popup`), N && p.value.add(N);
            return;
          }
        }
      } catch (V) {
        console.warn("[ComfyGit] Failed to check if workflow is saved:", V);
      }
      s.value = !0, o.value = null, i.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), m.value = !1, g.value = 0;
      try {
        const V = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: R, name: "unsaved" })
        });
        if (!V.ok) {
          const ee = await V.json();
          throw new Error(ee.error || "Failed to analyze workflow");
        }
        n.value = await V.json(), I.value && (l.value = !0, N && p.value.add(N));
      } catch (V) {
        console.error("[ComfyGit] Failed to analyze workflow:", V);
      } finally {
        s.value = !1;
      }
    }
    function Fe() {
      l.value = !1, n.value = null;
    }
    function ze(R) {
      const { workflow: N } = R.detail;
      N && Se(N);
    }
    function Te(R) {
      var ee;
      const N = (ee = R.detail) == null ? void 0 : ee.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: N,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: R.detail
      });
      const V = _.value.get(N);
      V ? (v.value = V, console.log("[ComfyGit] Installing package:", V)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", N);
    }
    function Pe(R) {
      var re, we, $e, ae, me, Le, Ee;
      const N = (re = R.detail) == null ? void 0 : re.ui_id, V = ($e = (we = R.detail) == null ? void 0 : we.status) == null ? void 0 : $e.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: N,
        status: V,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: R.detail
      });
      const ee = _.value.get(N);
      if (ee) {
        if (_.value.delete(N), c.value.delete(ee), v.value === ee && (v.value = null), V === "success")
          i.value.add(ee), g.value++, console.log("[ComfyGit] Package installed successfully:", ee);
        else {
          const ne = ((Le = (me = (ae = R.detail) == null ? void 0 : ae.status) == null ? void 0 : me.messages) == null ? void 0 : Le[0]) || ((Ee = R.detail) == null ? void 0 : Ee.result) || "Unknown error";
          u.value.set(ee, ne), console.error("[ComfyGit] Package install failed:", ee, ne);
        }
        _.value.size === 0 && g.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", g.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: g.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", N);
    }
    let ke = null;
    function he() {
      var R;
      return ke || (ke = (R = window.app) == null ? void 0 : R.api), ke;
    }
    let De = !1;
    function Re() {
      if (De) return !0;
      const R = he();
      return R ? (R.addEventListener("cm-task-started", Te), R.addEventListener("cm-task-completed", Pe), R.addEventListener("comfygit:workflow-changed", O), De = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function O(R) {
      const { change_type: N } = R.detail;
      (N === "created" || N === "modified") && l.value && (l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return Qe(() => {
      window.addEventListener("comfygit:workflow-loaded", ze);
    }), Ws(() => {
      if (window.removeEventListener("comfygit:workflow-loaded", ze), De) {
        const R = he();
        R && (R.removeEventListener("cm-task-started", Te), R.removeEventListener("cm-task-completed", Pe), R.removeEventListener("comfygit:workflow-changed", O)), De = !1;
      }
    }), (R, N) => (a(), r(j, null, [
      l.value ? (a(), D(ft, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: Fe
      }, {
        body: h(() => [
          s.value ? (a(), r("div", Q7, [...N[4] || (N[4] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : n.value && I.value ? (a(), r("div", X7, [
            M.value.length > 0 ? (a(), r("div", Z7, [
              t("div", eP, [
                t("span", tP, "Missing Custom Nodes (" + f(x.value) + ")", 1),
                M.value.length > 1 ? (a(), D(Me, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: P.value,
                  onClick: ye
                }, {
                  default: h(() => [
                    $(f(P.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", sP, [
                (a(!0), r(j, null, ge(B.value, (V) => (a(), r("div", {
                  key: V.package_id,
                  class: "package-item"
                }, [
                  t("div", oP, [
                    t("span", nP, f(V.title), 1),
                    t("span", aP, "(" + f(V.node_count) + " " + f(V.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !i.value.has(V.package_id) && !c.value.has(V.package_id) && !u.value.has(V.package_id) ? (a(), D(Me, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: v.value === V.package_id,
                    onClick: (ee) => se(V)
                  }, {
                    default: h(() => [
                      $(f(v.value === V.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : v.value === V.package_id ? (a(), r("span", lP, "Installing...")) : c.value.has(V.package_id) ? (a(), r("span", iP, "Queued")) : u.value.has(V.package_id) ? (a(), r("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(V.package_id)
                  }, "Failed ⚠", 8, rP)) : (a(), r("span", cP, "Installed"))
                ]))), 128)),
                M.value.length >= 5 ? (a(), r("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: N[0] || (N[0] = (V) => w.value = "packages")
                }, [
                  t("span", null, "Show all " + f(M.value.length) + " packages...", 1),
                  N[5] || (N[5] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            E.value.length > 0 ? (a(), r("div", uP, [
              t("div", dP, [
                t("span", fP, "Unknown Nodes (" + f(E.value.length) + ")", 1)
              ]),
              t("div", mP, [
                (a(!0), r(j, null, ge(E.value.slice(0, 5), (V) => (a(), r("div", {
                  key: V.node_type,
                  class: "item"
                }, [
                  t("code", vP, f(V.node_type), 1),
                  N[6] || (N[6] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                E.value.length > 5 ? (a(), r("div", pP, " ...and " + f(E.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            H.value.length > 0 ? (a(), r("div", gP, [
              t("div", hP, [
                t("span", yP, "Missing Models (" + f(H.value.length) + ")", 1),
                K.value.length > 1 ? (a(), D(Me, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: L.value,
                  onClick: _e
                }, {
                  default: h(() => [
                    $(f(L.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", wP, [
                (a(!0), r(j, null, ge(T.value, (V) => (a(), r("div", {
                  key: V.widget_value,
                  class: "model-item"
                }, [
                  t("div", _P, [
                    t("span", kP, f(V.filename), 1)
                  ]),
                  V.canDownload ? (a(), r(j, { key: 0 }, [
                    d.value.has(V.url) ? (a(), r("span", bP, "Queued")) : (a(), D(Me, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (ee) => X(V)
                    }, {
                      default: h(() => [...N[7] || (N[7] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (a(), r("span", $P, "Manual download required"))
                ]))), 128)),
                H.value.length >= 5 ? (a(), r("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: N[1] || (N[1] = (V) => w.value = "models")
                }, [
                  t("span", null, "Show all " + f(H.value.length) + " models...", 1),
                  N[8] || (N[8] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            t("div", CP, [
              S(Da, {
                modelValue: m.value,
                "onUpdate:modelValue": [
                  N[2] || (N[2] = (V) => m.value = V),
                  pe
                ]
              }, {
                default: h(() => [...N[9] || (N[9] = [
                  $(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : y("", !0)
        ]),
        footer: h(() => [
          S(Me, {
            variant: "secondary",
            onClick: Fe
          }, {
            default: h(() => [...N[10] || (N[10] = [
              $("Dismiss", -1)
            ])]),
            _: 1
          }),
          le.value ? (a(), D(Me, {
            key: 0,
            variant: "primary",
            disabled: Z.value,
            onClick: ce
          }, {
            default: h(() => [
              $(f(Z.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      w.value ? (a(), D(J7, {
        key: 1,
        title: z.value,
        items: W.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : c.value,
        "installed-items": w.value === "packages" ? i.value : void 0,
        "failed-items": w.value === "packages" ? u.value : void 0,
        "installing-item": w.value === "packages" ? v.value : void 0,
        onClose: N[3] || (N[3] = (V) => w.value = null),
        onAction: Y,
        onBulkAction: A
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), SP = /* @__PURE__ */ ve(xP, [["__scopeId", "data-v-dd1934b2"]]), IP = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', EP = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', TP = {
  comfy: IP,
  phosphor: EP
}, ll = "comfy", Wr = "comfygit-theme";
let Js = null, Gr = ll;
function PP() {
  try {
    const e = localStorage.getItem(Wr);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return ll;
}
function jr(e = ll) {
  Js && Js.remove(), Js = document.createElement("style"), Js.id = "comfygit-theme-styles", Js.setAttribute("data-theme", e), Js.textContent = TP[e], document.head.appendChild(Js), document.body.setAttribute("data-comfygit-theme", e), Gr = e;
  try {
    localStorage.setItem(Wr, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function RP() {
  return Gr;
}
function MP(e) {
  jr(e);
}
function DP(e) {
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
const LP = PP();
jr(LP);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), MP(e);
  },
  getTheme: () => {
    const e = RP();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Xt = null, At = null, jo = null, Do = null, si = null, Lo = null, oi = null;
const ho = k(null);
let rl = "managed", Hr = !1;
async function In() {
  var e;
  if (!((e = Wt) != null && e.api)) return null;
  try {
    const s = await Wt.api.fetchApi("/v2/comfygit/status");
    s.ok && (ho.value = await s.json());
  } catch {
  }
}
async function La() {
  var e;
  if ((e = Wt) != null && e.api)
    try {
      const s = await Wt.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        rl = o.state, Hr = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function Oa() {
  var s;
  if (rl === "managed" || !Hr) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function OP() {
  if (!ho.value) return !1;
  const e = ho.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || ho.value.has_changes;
}
function ya(e) {
  Xt && Xt.remove(), Xt = document.createElement("div"), Xt.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", Xt.appendChild(s), Xt.addEventListener("click", (l) => {
    l.target === Xt && wa();
  });
  const o = (l) => {
    l.key === "Escape" && (wa(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), Zn({
    render: () => nn(WT, {
      initialView: e,
      onClose: wa,
      onStatusUpdate: async (l) => {
        ho.value = l, Ho(), await La(), Aa(), Oa();
      }
    })
  }).mount(s), document.body.appendChild(Xt);
}
function wa() {
  Xt && (Xt.remove(), Xt = null);
}
function AP(e) {
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
    render: () => nn(Fr, {
      status: ho.value,
      onClose: Oo,
      onCommitted: (l) => {
        Oo(), UP(l.success, l.message), In().then(Ho);
      }
    })
  }), jo.mount(At), document.body.appendChild(At);
}
function Oo() {
  jo && (jo.unmount(), jo = null), At && (At.remove(), At = null);
}
function UP(e, s) {
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
function NP() {
  Do || (Do = document.createElement("div"), Do.className = "comfygit-download-queue-root", si = Zn({
    render: () => nn(U7)
  }), si.mount(Do), document.body.appendChild(Do), console.log("[ComfyGit] Model download queue mounted"));
}
function zP() {
  Lo || (Lo = document.createElement("div"), Lo.className = "comfygit-missing-resources-root", oi = Zn({
    render: () => nn(SP)
  }), oi.mount(Lo), document.body.appendChild(Lo), console.log("[ComfyGit] Missing resources popup mounted"));
}
let Gt = null;
function Ho() {
  if (!Gt) return;
  const e = Gt.querySelector(".commit-indicator");
  e && (e.style.display = OP() ? "block" : "none");
}
function Aa() {
  if (!Gt) return;
  const e = rl !== "managed";
  Gt.disabled = e, Gt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Kr = document.createElement("style");
Kr.textContent = `
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
document.head.appendChild(Kr);
Wt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Hook into workflow loading to intercept missing resources
  // This runs BEFORE ComfyUI's missing nodes/models dialogs
  async beforeConfigureGraph(e, s) {
    var o;
    try {
      await Promise.all([
        Wt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
        Wt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = ya, Gt = document.createElement("button"), Gt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Gt.innerHTML = 'Commit <span class="commit-indicator"></span>', Gt.title = "Quick Commit", Gt.onclick = () => AP(Gt), e.appendChild(s), e.appendChild(Gt), (i = (l = Wt.menu) == null ? void 0 : l.settingsGroup) != null && i.element && (Wt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), NP(), zP(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      ya(u);
    }));
    const { loadPendingDownloads: o } = bo();
    o(), await Promise.all([In(), La()]), Ho(), Aa(), Oa(), setTimeout(Oa, 100), setInterval(async () => {
      await Promise.all([In(), La()]), Ho(), Aa();
    }, 3e4);
    const n = Wt.api;
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
        const C = document.createElement("div");
        C.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const b = document.createElement("div");
        b.textContent = "Node installation failed", b.style.cssText = "font-weight: 600; color: #e53935;", C.appendChild(b);
        const I = document.createElement("div");
        I.textContent = "Dependency conflict detected", I.style.cssText = "font-size: 12px; opacity: 0.8;", C.appendChild(I), p.appendChild(C);
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
        const _ = document.createElement("span");
        _.textContent = "✅", _.style.fontSize = "20px", p.appendChild(_);
        const C = document.createElement("div");
        C.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const b = document.createElement("div");
        b.textContent = "To apply changes, please restart ComfyUI", b.style.cssText = "font-weight: 500; color: #fff;", C.appendChild(b);
        const I = document.createElement("div");
        I.textContent = `${g} node package${g > 1 ? "s" : ""} ready to install`, I.style.cssText = "font-size: 12px; opacity: 0.7;", C.appendChild(I), p.appendChild(C);
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
          M.disabled = !0, M.textContent = "Restarting...", M.style.opacity = "0.7", b.textContent = "Restarting...", I.textContent = "Applying changes, please wait...";
          try {
            const E = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Wt.refreshComboInNodes && (await Wt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", b.textContent = "Nodes Installed", b.style.color = "#4caf50", I.textContent = `${g} package${g > 1 ? "s" : ""} installed successfully!`, p.style.borderColor = "#4caf50", M.style.display = "none", setTimeout(() => {
                  p.remove();
                }, 3e3);
              } catch (H) {
                console.error("[ComfyGit] Failed to refresh nodes:", H), _.textContent = "✅", b.textContent = "Restart Complete", b.style.color = "#4caf50", I.textContent = "Refresh the page to load new nodes.", p.style.borderColor = "#4caf50", M.style.display = "none";
              }
            };
            n.addEventListener("reconnected", E, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (E) {
            console.error("[ComfyGit] Failed to restart:", E), b.textContent = "Restart Failed", b.style.color = "#e53935", I.textContent = "Could not restart server. Try again.", p.style.borderColor = "#e53935", M.textContent = "Try Again", M.disabled = !1, M.style.opacity = "1";
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
        const w = DP(g.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (g) => {
        const w = g, { count: p = 1 } = w.detail || {};
        m(p);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
