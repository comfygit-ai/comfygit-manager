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
}, Jr = Object.prototype.hasOwnProperty, Ze = (e, s) => Jr.call(e, s), ze = Array.isArray, mo = (e) => tn(e) === "[object Map]", ko = (e) => tn(e) === "[object Set]", cl = (e) => tn(e) === "[object Date]", We = (e) => typeof e == "function", ct = (e) => typeof e == "string", ts = (e) => typeof e == "symbol", et = (e) => e !== null && typeof e == "object", ai = (e) => (et(e) || We(e)) && We(e.then) && We(e.catch), li = Object.prototype.toString, tn = (e) => li.call(e), Qr = (e) => tn(e).slice(8, -1), ii = (e) => tn(e) === "[object Object]", Fa = (e) => ct(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Uo = /* @__PURE__ */ Ua(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Bn = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, Xr = /-\w/g, Kt = Bn(
  (e) => e.replace(Xr, (s) => s.slice(1).toUpperCase())
), Zr = /\B([A-Z])/g, Bs = Bn(
  (e) => e.replace(Zr, "-$1").toLowerCase()
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
}, ec = (e) => {
  const s = ct(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let ul;
const Gn = () => ul || (ul = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function qt(e) {
  if (ze(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = ct(n) ? nc(n) : qt(n);
      if (l)
        for (const i in l)
          s[i] = l[i];
    }
    return s;
  } else if (ct(e) || et(e))
    return e;
}
const tc = /;(?![^(]*\))/g, sc = /:([^]+)/, oc = /\/\*[^]*?\*\//g;
function nc(e) {
  const s = {};
  return e.replace(oc, "").split(tc).forEach((o) => {
    if (o) {
      const n = o.split(sc);
      n.length > 1 && (s[n[0].trim()] = n[1].trim());
    }
  }), s;
}
function xe(e) {
  let s = "";
  if (ct(e))
    s = e;
  else if (ze(e))
    for (let o = 0; o < e.length; o++) {
      const n = xe(e[o]);
      n && (s += n + " ");
    }
  else if (et(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const ac = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", lc = /* @__PURE__ */ Ua(ac);
function ci(e) {
  return !!e || e === "";
}
function ic(e, s) {
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
  if (o = ze(e), n = ze(s), o || n)
    return o && n ? ic(e, s) : !1;
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
const ui = (e) => !!(e && e.__v_isRef === !0), f = (e) => ct(e) ? e : e == null ? "" : ze(e) || et(e) && (e.toString === li || !We(e.toString)) ? ui(e) ? f(e.value) : JSON.stringify(e, di, 2) : String(e), di = (e, s) => ui(s) ? di(e, s.value) : mo(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [n, l], i) => (o[sa(n, i) + " =>"] = l, o),
    {}
  )
} : ko(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => sa(o))
} : ts(s) ? sa(s) : et(s) && !ze(s) && !ii(s) ? String(s) : s, sa = (e, s = "") => {
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
class rc {
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
function cc() {
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
    n.version === -1 ? (n === o && (o = l), Ga(n), uc(n)) : s = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
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
function uc(e) {
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
class dc {
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
      o = this.activeLink = new dc(nt, this), nt.deps ? (o.prevDep = nt.depsTail, nt.depsTail.nextDep = o, nt.depsTail = o) : nt.deps = nt.depsTail = o, wi(o);
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
const ka = /* @__PURE__ */ new WeakMap(), Xs = Symbol(
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
    const d = ze(e), m = d && Fa(o);
    if (d && o === "length") {
      const v = Number(n);
      c.forEach((g, w) => {
        (w === "length" || w === qo || !ts(w) && w >= v) && u(g);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), m && u(c.get(qo)), s) {
        case "add":
          d ? m && u(c.get("length")) : (u(c.get(Xs)), mo(e) && u(c.get(ba)));
          break;
        case "delete":
          d || (u(c.get(Xs)), mo(e) && u(c.get(ba)));
          break;
        case "set":
          mo(e) && u(c.get(Xs));
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
const fc = {
  __proto__: null,
  [Symbol.iterator]() {
    return na(this, Symbol.iterator, (e) => Os(this, e));
  },
  concat(...e) {
    return ao(this).concat(
      ...e.map((s) => ze(s) ? ao(s) : s)
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
const mc = Array.prototype;
function _s(e, s, o, n, l, i) {
  const c = jn(e), u = c !== e && !Gt(e), d = c[s];
  if (d !== mc[s]) {
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
const vc = /* @__PURE__ */ Ua("__proto__,__v_isRef,__isVue"), _i = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ts)
);
function pc(e) {
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
      return n === (l ? i ? xc : xi : i ? Ci : $i).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(n) ? s : void 0;
    const c = ze(s);
    if (!l) {
      let d;
      if (c && (d = fc[o]))
        return d;
      if (o === "hasOwnProperty")
        return pc;
    }
    const u = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      $t(s) ? s : n
    );
    if ((ts(o) ? _i.has(o) : vc(o)) || (l || wt(s, "get", o), i))
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
    const c = ze(s) && Fa(o);
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
      ze(s) ? "length" : Xs
    ), Reflect.ownKeys(s);
  }
}
class gc extends ki {
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
const hc = /* @__PURE__ */ new bi(), yc = /* @__PURE__ */ new gc(), wc = /* @__PURE__ */ new bi(!0);
const $a = (e) => e, dn = (e) => Reflect.getPrototypeOf(e);
function _c(e, s, o) {
  return function(...n) {
    const l = this.__v_raw, i = Je(l), c = mo(i), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, m = l[e](...n), v = o ? $a : s ? yo : ss;
    return !s && wt(
      i,
      "iterate",
      d ? ba : Xs
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
function kc(e, s) {
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
      return !e && wt(Je(l), "iterate", Xs), l.size;
    },
    has(l) {
      const i = this.__v_raw, c = Je(i), u = Je(l);
      return e || (Ns(l, u) && wt(c, "has", l), wt(c, "has", u)), l === u ? i.has(l) : i.has(l) || i.has(u);
    },
    forEach(l, i) {
      const c = this, u = c.__v_raw, d = Je(u), m = s ? $a : e ? yo : ss;
      return !e && wt(d, "iterate", Xs), u.forEach((v, g) => l.call(i, m(v), m(g), c));
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
    o[l] = _c(l, e, s);
  }), o;
}
function Ha(e, s) {
  const o = kc(e, s);
  return (n, l, i) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    Ze(o, l) && l in n ? o : n,
    l,
    i
  );
}
const bc = {
  get: /* @__PURE__ */ Ha(!1, !1)
}, $c = {
  get: /* @__PURE__ */ Ha(!1, !0)
}, Cc = {
  get: /* @__PURE__ */ Ha(!0, !1)
};
const $i = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ new WeakMap(), xi = /* @__PURE__ */ new WeakMap(), xc = /* @__PURE__ */ new WeakMap();
function Sc(e) {
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
function Ic(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Sc(Qr(e));
}
function Vs(e) {
  return Es(e) ? e : Ka(
    e,
    !1,
    hc,
    bc,
    $i
  );
}
function Ec(e) {
  return Ka(
    e,
    !1,
    wc,
    $c,
    Ci
  );
}
function En(e) {
  return Ka(
    e,
    !0,
    yc,
    Cc,
    xi
  );
}
function Ka(e, s, o, n, l) {
  if (!et(e) || e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const i = Ic(e);
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
function Tc(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && ri(e, "__v_skip", !0), e;
}
const ss = (e) => et(e) ? Vs(e) : e, yo = (e) => et(e) ? En(e) : e;
function $t(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return Pc(e, !1);
}
function Pc(e, s) {
  return $t(e) ? e : new Rc(e, s);
}
class Rc {
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
function Ve(e) {
  return $t(e) ? e.value : e;
}
const Mc = {
  get: (e, s, o) => s === "__v_raw" ? e : Ve(Reflect.get(e, s, o)),
  set: (e, s, o, n) => {
    const l = e[s];
    return $t(l) && !$t(o) ? (l.value = o, !0) : Reflect.set(e, s, o, n);
  }
};
function Si(e) {
  return Zs(e) ? e : new Proxy(e, Mc);
}
class Dc {
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
function Lc(e, s, o = !1) {
  let n, l;
  return We(e) ? n = e : (n = e.get, l = e.set), new Dc(n, l, o);
}
const mn = {}, Tn = /* @__PURE__ */ new WeakMap();
let Js;
function Oc(e, s = !1, o = Js) {
  if (o) {
    let n = Tn.get(o);
    n || Tn.set(o, n = []), n.push(e);
  }
}
function Ac(e, s, o = st) {
  const { immediate: n, deep: l, once: i, scheduler: c, augmentJob: u, call: d } = o, m = (S) => l ? S : Gt(S) || l === !1 || l === 0 ? Cs(S, 1) : Cs(S);
  let v, g, w, p, _ = !1, C = !1;
  if ($t(e) ? (g = () => e.value, _ = Gt(e)) : Zs(e) ? (g = () => m(e), _ = !0) : ze(e) ? (C = !0, _ = e.some((S) => Zs(S) || Gt(S)), g = () => e.map((S) => {
    if ($t(S))
      return S.value;
    if (Zs(S))
      return m(S);
    if (We(S))
      return d ? d(S, 2) : S();
  })) : We(e) ? s ? g = d ? () => d(e, 2) : e : g = () => {
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
    const S = g, q = l === !0 ? 1 / 0 : l;
    g = () => Cs(S(), q);
  }
  const b = cc(), P = () => {
    v.stop(), b && b.active && za(b.effects, v);
  };
  if (i && s) {
    const S = s;
    s = (...q) => {
      S(...q), P();
    };
  }
  let M = C ? new Array(e.length).fill(mn) : mn;
  const I = (S) => {
    if (!(!(v.flags & 1) || !v.dirty && !S))
      if (s) {
        const q = v.run();
        if (l || _ || (C ? q.some((Y, W) => Ns(Y, M[W])) : Ns(q, M))) {
          w && w();
          const Y = Js;
          Js = v;
          try {
            const W = [
              q,
              // pass undefined as the old value when it's changed for the first time
              M === mn ? void 0 : C && M[0] === mn ? [] : M,
              p
            ];
            M = q, d ? d(s, 3, W) : (
              // @ts-expect-error
              s(...W)
            );
          } finally {
            Js = Y;
          }
        }
      } else
        v.run();
  };
  return u && u(I), v = new fi(g), v.scheduler = c ? () => c(I, !1) : I, p = (S) => Oc(S, !1, v), w = v.onStop = () => {
    const S = Tn.get(v);
    if (S) {
      if (d)
        d(S, 4);
      else
        for (const q of S) q();
      Tn.delete(v);
    }
  }, s ? n ? I(!0) : M = v.run() : c ? c(I.bind(null, !0), !0) : v.run(), P.pause = v.pause.bind(v), P.resume = v.resume.bind(v), P.stop = P, P;
}
function Cs(e, s = 1 / 0, o) {
  if (s <= 0 || !et(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, $t(e))
    Cs(e.value, s, o);
  else if (ze(e))
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
  if (We(e)) {
    const l = sn(e, s, o, n);
    return l && ai(l) && l.catch((i) => {
      Hn(i, s, o);
    }), l;
  }
  if (ze(e)) {
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
  Uc(e, o, l, n, c);
}
function Uc(e, s, o, n = !0, l = !1) {
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
function Nc(e) {
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
    !(e.flags & 2) && s >= Yo(o) ? It.push(e) : It.splice(Nc(s), 0, e), e.flags |= 1, Ei();
  }
}
function Ei() {
  Pn || (Pn = Ii.then(Pi));
}
function zc(e) {
  ze(e) ? vo.push(...e) : As && e.id === -1 ? As.splice(ro + 1, 0, e) : e.flags & 1 || (vo.push(e), e.flags |= 1), Ei();
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
function Ke(e, s) {
  if (ht === null)
    return e;
  const o = Qn(ht), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [i, c, u, d = st] = s[l];
    i && (We(i) && (i = {
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
      o: { insert: p, querySelector: _, createText: C, createComment: b }
    } = m, P = Fo(s.props);
    let { shapeFlag: M, children: I, dynamicChildren: S } = s;
    if (e == null) {
      const q = s.el = C(""), Y = s.anchor = C("");
      p(q, o, n), p(Y, o, n);
      const W = (T, O) => {
        M & 16 && v(
          I,
          T,
          O,
          l,
          i,
          c,
          u,
          d
        );
      }, E = () => {
        const T = s.target = Ca(s.props, _), O = Oi(T, s, C, p);
        T && (c !== "svg" && pl(T) ? c = "svg" : c !== "mathml" && gl(T) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(T), P || (W(T, O), bn(s, !1)));
      };
      P && (W(o, Y), bn(s, !0)), vl(s.props) ? (s.el.__isMounted = !1, St(() => {
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
      const q = s.anchor = e.anchor, Y = s.target = e.target, W = s.targetAnchor = e.targetAnchor, E = Fo(e.props), T = E ? o : Y, O = E ? q : W;
      if (c === "svg" || pl(Y) ? c = "svg" : (c === "mathml" || gl(Y)) && (c = "mathml"), S ? (w(
        e.dynamicChildren,
        S,
        T,
        l,
        i,
        c,
        u
      ), el(e, s, !0)) : d || g(
        e,
        s,
        T,
        O,
        l,
        i,
        c,
        u,
        !1
      ), P)
        E ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : vn(
          s,
          o,
          q,
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
      } else E && vn(
        s,
        Y,
        W,
        m,
        1
      );
      bn(s, P);
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
  hydrate: Fc
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
function Fc(e, s, o, n, l, i, {
  o: { nextSibling: c, parentNode: u, querySelector: d, insert: m, createText: v }
}, g) {
  function w(C, b, P, M) {
    b.anchor = g(
      c(C),
      b,
      u(C),
      o,
      n,
      l,
      i
    ), b.targetStart = P, b.targetAnchor = M;
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
  return Qe(() => {
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
}, Bc = {
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
      if (v && v.type !== kt && !Qs(v, d) && Ni(o).type !== kt) {
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
        u === "in-out" && d.type !== kt ? g.delayLeave = (w, p, _) => {
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
      if (o.type !== kt) {
        s = o;
        break;
      }
  }
  return s;
}
const Vc = Bc;
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
    onAppear: P,
    onAfterAppear: M,
    onAppearCancelled: I
  } = s, S = String(e.key), q = Fi(o, e), Y = (T, O) => {
    T && os(
      T,
      n,
      9,
      O
    );
  }, W = (T, O) => {
    const le = O[1];
    Y(T, O), ze(T) ? T.every((Z) => Z.length <= 1) && le() : T.length <= 1 && le();
  }, E = {
    mode: c,
    persisted: u,
    beforeEnter(T) {
      let O = d;
      if (!o.isMounted)
        if (i)
          O = b || d;
        else
          return;
      T[bs] && T[bs](
        !0
        /* cancelled */
      );
      const le = q[S];
      le && Qs(e, le) && le.el[bs] && le.el[bs](), Y(O, [T]);
    },
    enter(T) {
      let O = m, le = v, Z = g;
      if (!o.isMounted)
        if (i)
          O = P || m, le = M || v, Z = I || g;
        else
          return;
      let V = !1;
      const A = T[pn] = (N) => {
        V || (V = !0, N ? Y(Z, [T]) : Y(le, [T]), E.delayedLeave && E.delayedLeave(), T[pn] = void 0);
      };
      O ? W(O, [T, A]) : A();
    },
    leave(T, O) {
      const le = String(e.key);
      if (T[pn] && T[pn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return O();
      Y(w, [T]);
      let Z = !1;
      const V = T[bs] = (A) => {
        Z || (Z = !0, O(), A ? Y(C, [T]) : Y(_, [T]), T[bs] = void 0, q[le] === e && delete q[le]);
      };
      q[le] = e, p ? W(p, [T, V]) : V();
    },
    clone(T) {
      const O = Jo(
        T,
        s,
        o,
        n,
        l
      );
      return l && l(O), O;
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
    if (s & 32 && We(o.default))
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
    c.type === K ? (c.patchFlag & 128 && l++, n = n.concat(
      Ja(c.children, s, u)
    )) : (s || c.type !== kt) && n.push(u != null ? zs(c, { key: u }) : c);
  }
  if (l > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function de(e, s) {
  return We(e) ? (
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
  if (ze(e)) {
    e.forEach(
      (_, C) => Bo(
        _,
        s && (ze(s) ? s[C] : s),
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
    else if ($t(m)) {
      m.value = null;
      const _ = s;
      _.k && (v[_.k] = null);
    }
  }
  if (We(d))
    sn(d, u, 12, [c, v]);
  else {
    const _ = ct(d), C = $t(d);
    if (_ || C) {
      const b = () => {
        if (e.f) {
          const P = _ ? p(d) ? g[d] : v[d] : d.value;
          if (l)
            ze(P) && za(P, i);
          else if (ze(P))
            P.includes(i) || P.push(i);
          else if (_)
            v[d] = [i], p(d) && (g[d] = v[d]);
          else {
            const M = [i];
            d.value = M, e.k && (v[e.k] = M);
          }
        } else _ ? (v[d] = c, p(d) && (g[d] = c)) : C && (d.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const P = () => {
          b(), Mn.delete(e);
        };
        P.id = -1, Mn.set(e, P), St(P, o);
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
function Wc(e, s) {
  Vi(e, "a", s);
}
function Gc(e, s) {
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
      Kn(l.parent.vnode) && jc(n, s, o, l), l = l.parent;
  }
}
function jc(e, s, o, n) {
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
}, Hc = Ts("bm"), Qe = Ts("m"), Kc = Ts(
  "bu"
), Wi = Ts("u"), Gi = Ts(
  "bum"
), oo = Ts("um"), qc = Ts(
  "sp"
), Yc = Ts("rtg"), Jc = Ts("rtc");
function Qc(e, s = bt) {
  qn("ec", e, s);
}
const Xc = "components", ji = Symbol.for("v-ndc");
function Qa(e) {
  return ct(e) ? Zc(Xc, e, !1) || e : e || ji;
}
function Zc(e, s, o = !0, n = !1) {
  const l = ht || bt;
  if (l) {
    const i = l.type;
    {
      const u = Bu(
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
function ve(e, s, o, n) {
  let l;
  const i = o, c = ze(e);
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
function He(e, s, o = {}, n, l) {
  if (ht.ce || ht.parent && po(ht.parent) && ht.parent.ce) {
    const m = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), a(), L(
      K,
      null,
      [x("slot", o, n && n())],
      m ? -2 : 64
    );
  }
  let i = e[s];
  i && i._c && (i._d = !1), a();
  const c = i && Hi(i(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = L(
    K,
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
  return e.some((s) => Xo(s) ? !(s.type === kt || s.type === K && !Hi(s.children)) : !0) ? e : null;
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
    $nextTick: (e) => e.n || (e.n = _t.bind(e.proxy)),
    $watch: (e) => du.bind(e)
  })
), ia = (e, s) => e !== st && !e.__isScriptSetup && Ze(e, s), eu = {
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
  return ze(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let Sa = !0;
function tu(e) {
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
    beforeDestroy: P,
    beforeUnmount: M,
    destroyed: I,
    unmounted: S,
    render: q,
    renderTracked: Y,
    renderTriggered: W,
    errorCaptured: E,
    serverPrefetch: T,
    // public API
    expose: O,
    inheritAttrs: le,
    // assets
    components: Z,
    directives: V,
    filters: A
  } = s;
  if (m && su(m, n, null), c)
    for (const ee in c) {
      const Q = c[ee];
      We(Q) && (n[ee] = Q.bind(o));
    }
  if (l) {
    const ee = l.call(o, o);
    et(ee) && (e.data = Vs(ee));
  }
  if (Sa = !0, i)
    for (const ee in i) {
      const Q = i[ee], pe = We(Q) ? Q.bind(o, o) : We(Q.get) ? Q.get.bind(o, o) : gs, he = !We(Q) && We(Q.set) ? Q.set.bind(o) : gs, Re = z({
        get: pe,
        set: he
      });
      Object.defineProperty(n, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => Re.value,
        set: (Fe) => Re.value = Fe
      });
    }
  if (u)
    for (const ee in u)
      Ki(u[ee], n, o, ee);
  if (d) {
    const ee = We(d) ? d.call(o) : d;
    Reflect.ownKeys(ee).forEach((Q) => {
      ru(Q, ee[Q]);
    });
  }
  v && kl(v, e, "c");
  function D(ee, Q) {
    ze(Q) ? Q.forEach((pe) => ee(pe.bind(o))) : Q && ee(Q.bind(o));
  }
  if (D(Hc, g), D(Qe, w), D(Kc, p), D(Wi, _), D(Wc, C), D(Gc, b), D(Qc, E), D(Jc, Y), D(Yc, W), D(Gi, M), D(oo, S), D(qc, T), ze(O))
    if (O.length) {
      const ee = e.exposed || (e.exposed = {});
      O.forEach((Q) => {
        Object.defineProperty(ee, Q, {
          get: () => o[Q],
          set: (pe) => o[Q] = pe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  q && e.render === gs && (e.render = q), le != null && (e.inheritAttrs = le), Z && (e.components = Z), V && (e.directives = V), T && Bi(e);
}
function su(e, s, o = gs) {
  ze(e) && (e = Ia(e));
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
    ze(e) ? e.map((n) => n.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function Ki(e, s, o, n) {
  let l = n.includes(".") ? Qi(o, n) : () => o[n];
  if (ct(e)) {
    const i = s[e];
    We(i) && yt(l, i);
  } else if (We(e))
    yt(l, e.bind(o));
  else if (et(e))
    if (ze(e))
      e.forEach((i) => Ki(i, s, o, n));
    else {
      const i = We(e.handler) ? e.handler.bind(o) : s[e.handler];
      We(i) && yt(l, i, e);
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
      const u = ou[c] || o && o[c];
      e[c] = u ? u(e[c], s[c]) : s[c];
    }
  return e;
}
const ou = {
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
  watch: au,
  // provide / inject
  provide: bl,
  inject: nu
};
function bl(e, s) {
  return s ? e ? function() {
    return pt(
      We(e) ? e.call(this, this) : e,
      We(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function nu(e, s) {
  return Ao(Ia(e), Ia(s));
}
function Ia(e) {
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
function Ao(e, s) {
  return e ? pt(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function $l(e, s) {
  return e ? ze(e) && ze(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : pt(
    /* @__PURE__ */ Object.create(null),
    _l(e),
    _l(s ?? {})
  ) : s;
}
function au(e, s) {
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
let lu = 0;
function iu(e, s) {
  return function(n, l = null) {
    We(n) || (n = pt({}, n)), l != null && !et(l) && (l = null);
    const i = Yi(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const m = i.app = {
      _uid: lu++,
      _component: n,
      _props: l,
      _container: null,
      _context: i,
      _instance: null,
      version: Wu,
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
        if (!d) {
          const p = m._ceVNode || x(n, l);
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
function ru(e, s) {
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
      return o && We(s) ? s.call(n && n.proxy) : s;
  }
}
const cu = Symbol.for("v-scx"), uu = () => $n(cu);
function yt(e, s, o) {
  return Ji(e, s, o);
}
function Ji(e, s, o = st) {
  const { immediate: n, deep: l, flush: i, once: c } = o, u = pt({}, o), d = s && n || !s && i !== "post";
  let m;
  if (Zo) {
    if (i === "sync") {
      const p = uu();
      m = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!d) {
      const p = () => {
      };
      return p.stop = gs, p.resume = gs, p.pause = gs, p;
    }
  }
  const v = bt;
  u.call = (p, _, C) => os(p, v, _, C);
  let g = !1;
  i === "post" ? u.scheduler = (p) => {
    St(p, v && v.suspense);
  } : i !== "sync" && (g = !0, u.scheduler = (p, _) => {
    _ ? p() : Ya(p);
  }), u.augmentJob = (p) => {
    s && (p.flags |= 4), g && (p.flags |= 2, v && (p.id = v.uid, p.i = v));
  };
  const w = Ac(e, s, u);
  return Zo && (m ? m.push(w) : d && w()), w;
}
function du(e, s, o) {
  const n = this.proxy, l = ct(e) ? e.includes(".") ? Qi(n, e) : () => n[e] : e.bind(n, n);
  let i;
  We(s) ? i = s : (i = s.handler, o = s);
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
const fu = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${Kt(s)}Modifiers`] || e[`${Bs(s)}Modifiers`];
function mu(e, s, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || st;
  let l = o;
  const i = s.startsWith("update:"), c = i && fu(n, s.slice(7));
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
const vu = /* @__PURE__ */ new WeakMap();
function Xi(e, s, o = !1) {
  const n = o ? vu : s.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const i = e.emits;
  let c = {}, u = !1;
  if (!We(e)) {
    const d = (m) => {
      const v = Xi(m, s, !0);
      v && (u = !0, pt(c, v));
    };
    !o && s.mixins.length && s.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !i && !u ? (et(e) && n.set(e, null), null) : (ze(i) ? i.forEach((d) => c[d] = null) : pt(c, i), et(e) && n.set(e, c), c);
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
  let P, M;
  try {
    if (o.shapeFlag & 4) {
      const S = l || n, q = S;
      P = ps(
        m.call(
          q,
          S,
          v,
          g,
          p,
          w,
          _
        )
      ), M = u;
    } else {
      const S = s;
      P = ps(
        S.length > 1 ? S(
          g,
          { attrs: u, slots: c, emit: d }
        ) : S(
          g,
          null
        )
      ), M = s.props ? u : pu(u);
    }
  } catch (S) {
    Wo.length = 0, Hn(S, e, 1), P = x(kt);
  }
  let I = P;
  if (M && C !== !1) {
    const S = Object.keys(M), { shapeFlag: q } = I;
    S.length && q & 7 && (i && S.some(Na) && (M = gu(
      M,
      i
    )), I = zs(I, M, !1, !0));
  }
  return o.dirs && (I = zs(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(o.dirs) : o.dirs), o.transition && to(I, o.transition), P = I, Rn(b), P;
}
const pu = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Fn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, gu = (e, s) => {
  const o = {};
  for (const n in e)
    (!Na(n) || !(n.slice(9) in s)) && (o[n] = e[n]);
  return o;
};
function hu(e, s, o) {
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
function yu({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const n = s.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const Zi = {}, er = () => Object.create(Zi), tr = (e) => Object.getPrototypeOf(e) === Zi;
function wu(e, s, o, n = !1) {
  const l = {}, i = er();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), sr(e, s, l, i);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = n ? l : Ec(l) : e.type.props ? e.props = l : e.props = i, e.attrs = i;
}
function _u(e, s, o, n) {
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
            const _ = Kt(w);
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
      if (c.type !== Function && !c.skipFactory && We(d)) {
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
const ku = /* @__PURE__ */ new WeakMap();
function or(e, s, o = !1) {
  const n = o ? ku : s.propsCache, l = n.get(e);
  if (l)
    return l;
  const i = e.props, c = {}, u = [];
  let d = !1;
  if (!We(e)) {
    const v = (g) => {
      d = !0;
      const [w, p] = or(g, s, !0);
      pt(c, w), p && u.push(...p);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!i && !d)
    return et(e) && n.set(e, fo), fo;
  if (ze(i))
    for (let v = 0; v < i.length; v++) {
      const g = Kt(i[v]);
      Sl(g) && (c[g] = st);
    }
  else if (i)
    for (const v in i) {
      const g = Kt(v);
      if (Sl(g)) {
        const w = i[v], p = c[g] = ze(w) || We(w) ? { type: w } : pt({}, w), _ = p.type;
        let C = !1, b = !0;
        if (ze(_))
          for (let P = 0; P < _.length; ++P) {
            const M = _[P], I = We(M) && M.name;
            if (I === "Boolean") {
              C = !0;
              break;
            } else I === "String" && (b = !1);
          }
        else
          C = We(_) && _.name === "Boolean";
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
const Xa = (e) => e === "_" || e === "_ctx" || e === "$stable", Za = (e) => ze(e) ? e.map(ps) : [ps(e)], bu = (e, s, o) => {
  if (s._n)
    return s;
  const n = h((...l) => Za(s(...l)), o);
  return n._c = !1, n;
}, nr = (e, s, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (Xa(l)) continue;
    const i = e[l];
    if (We(i))
      s[l] = bu(l, i, n);
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
}, $u = (e, s, o) => {
  const n = e.slots = er();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (lr(n, s, o), o && ri(n, "_", l, !0)) : nr(s, n);
  } else s && ar(e, s);
}, Cu = (e, s, o) => {
  const { vnode: n, slots: l } = e;
  let i = !0, c = st;
  if (n.shapeFlag & 32) {
    const u = s._;
    u ? o && u === 1 ? i = !1 : lr(l, s, o) : (i = !s.$stable, nr(s, l)), c = s;
  } else s && (ar(e, s), c = { default: 1 });
  if (i)
    for (const u in l)
      !Xa(u) && c[u] == null && delete l[u];
}, St = Tu;
function xu(e) {
  return Su(e);
}
function Su(e, s) {
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
  } = e, C = (U, R, F, j = null, te = null, ie = null, ge = void 0, ke = null, ne = !!R.dynamicChildren) => {
    if (U === R)
      return;
    U && !Qs(U, R) && (j = Se(U), Fe(U, te, ie, !0), U = null), R.patchFlag === -2 && (ne = !1, R.dynamicChildren = null);
    const { type: ue, ref: Me, shapeFlag: Ce } = R;
    switch (ue) {
      case Jn:
        b(U, R, F, j);
        break;
      case kt:
        P(U, R, F, j);
        break;
      case ca:
        U == null && M(R, F, j, ge);
        break;
      case K:
        Z(
          U,
          R,
          F,
          j,
          te,
          ie,
          ge,
          ke,
          ne
        );
        break;
      default:
        Ce & 1 ? q(
          U,
          R,
          F,
          j,
          te,
          ie,
          ge,
          ke,
          ne
        ) : Ce & 6 ? V(
          U,
          R,
          F,
          j,
          te,
          ie,
          ge,
          ke,
          ne
        ) : (Ce & 64 || Ce & 128) && ue.process(
          U,
          R,
          F,
          j,
          te,
          ie,
          ge,
          ke,
          ne,
          Pe
        );
    }
    Me != null && te ? Bo(Me, U && U.ref, ie, R || U, !R) : Me == null && U && U.ref != null && Bo(U.ref, null, ie, U, !0);
  }, b = (U, R, F, j) => {
    if (U == null)
      n(
        R.el = u(R.children),
        F,
        j
      );
    else {
      const te = R.el = U.el;
      R.children !== U.children && m(te, R.children);
    }
  }, P = (U, R, F, j) => {
    U == null ? n(
      R.el = d(R.children || ""),
      F,
      j
    ) : R.el = U.el;
  }, M = (U, R, F, j) => {
    [U.el, U.anchor] = _(
      U.children,
      R,
      F,
      j,
      U.el,
      U.anchor
    );
  }, I = ({ el: U, anchor: R }, F, j) => {
    let te;
    for (; U && U !== R; )
      te = w(U), n(U, F, j), U = te;
    n(R, F, j);
  }, S = ({ el: U, anchor: R }) => {
    let F;
    for (; U && U !== R; )
      F = w(U), l(U), U = F;
    l(R);
  }, q = (U, R, F, j, te, ie, ge, ke, ne) => {
    if (R.type === "svg" ? ge = "svg" : R.type === "math" && (ge = "mathml"), U == null)
      Y(
        R,
        F,
        j,
        te,
        ie,
        ge,
        ke,
        ne
      );
    else {
      const ue = U.el && U.el._isVueCE ? U.el : null;
      try {
        ue && ue._beginPatch(), T(
          U,
          R,
          te,
          ie,
          ge,
          ke,
          ne
        );
      } finally {
        ue && ue._endPatch();
      }
    }
  }, Y = (U, R, F, j, te, ie, ge, ke) => {
    let ne, ue;
    const { props: Me, shapeFlag: Ce, transition: oe, dirs: X } = U;
    if (ne = U.el = c(
      U.type,
      ie,
      Me && Me.is,
      Me
    ), Ce & 8 ? v(ne, U.children) : Ce & 16 && E(
      U.children,
      ne,
      null,
      j,
      te,
      ra(U, ie),
      ge,
      ke
    ), X && Hs(U, null, j, "created"), W(ne, U, U.scopeId, ge, j), Me) {
      for (const be in Me)
        be !== "value" && !Uo(be) && i(ne, be, null, Me[be], ie, j);
      "value" in Me && i(ne, "value", null, Me.value, ie), (ue = Me.onVnodeBeforeMount) && us(ue, j, U);
    }
    X && Hs(U, null, j, "beforeMount");
    const De = Iu(te, oe);
    De && oe.beforeEnter(ne), n(ne, R, F), ((ue = Me && Me.onVnodeMounted) || De || X) && St(() => {
      ue && us(ue, j, U), De && oe.enter(ne), X && Hs(U, null, j, "mounted");
    }, te);
  }, W = (U, R, F, j, te) => {
    if (F && p(U, F), j)
      for (let ie = 0; ie < j.length; ie++)
        p(U, j[ie]);
    if (te) {
      let ie = te.subTree;
      if (R === ie || rr(ie.type) && (ie.ssContent === R || ie.ssFallback === R)) {
        const ge = te.vnode;
        W(
          U,
          ge,
          ge.scopeId,
          ge.slotScopeIds,
          te.parent
        );
      }
    }
  }, E = (U, R, F, j, te, ie, ge, ke, ne = 0) => {
    for (let ue = ne; ue < U.length; ue++) {
      const Me = U[ue] = ke ? Us(U[ue]) : ps(U[ue]);
      C(
        null,
        Me,
        R,
        F,
        j,
        te,
        ie,
        ge,
        ke
      );
    }
  }, T = (U, R, F, j, te, ie, ge) => {
    const ke = R.el = U.el;
    let { patchFlag: ne, dynamicChildren: ue, dirs: Me } = R;
    ne |= U.patchFlag & 16;
    const Ce = U.props || st, oe = R.props || st;
    let X;
    if (F && Ks(F, !1), (X = oe.onVnodeBeforeUpdate) && us(X, F, R, U), Me && Hs(R, U, F, "beforeUpdate"), F && Ks(F, !0), (Ce.innerHTML && oe.innerHTML == null || Ce.textContent && oe.textContent == null) && v(ke, ""), ue ? O(
      U.dynamicChildren,
      ue,
      ke,
      F,
      j,
      ra(R, te),
      ie
    ) : ge || Q(
      U,
      R,
      ke,
      null,
      F,
      j,
      ra(R, te),
      ie,
      !1
    ), ne > 0) {
      if (ne & 16)
        le(ke, Ce, oe, F, te);
      else if (ne & 2 && Ce.class !== oe.class && i(ke, "class", null, oe.class, te), ne & 4 && i(ke, "style", Ce.style, oe.style, te), ne & 8) {
        const De = R.dynamicProps;
        for (let be = 0; be < De.length; be++) {
          const we = De[be], H = Ce[we], G = oe[we];
          (G !== H || we === "value") && i(ke, we, H, G, te, F);
        }
      }
      ne & 1 && U.children !== R.children && v(ke, R.children);
    } else !ge && ue == null && le(ke, Ce, oe, F, te);
    ((X = oe.onVnodeUpdated) || Me) && St(() => {
      X && us(X, F, R, U), Me && Hs(R, U, F, "updated");
    }, j);
  }, O = (U, R, F, j, te, ie, ge) => {
    for (let ke = 0; ke < R.length; ke++) {
      const ne = U[ke], ue = R[ke], Me = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ne.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ne.type === K || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Qs(ne, ue) || // - In the case of a component, it could contain anything.
        ne.shapeFlag & 198) ? g(ne.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          F
        )
      );
      C(
        ne,
        ue,
        Me,
        null,
        j,
        te,
        ie,
        ge,
        !0
      );
    }
  }, le = (U, R, F, j, te) => {
    if (R !== F) {
      if (R !== st)
        for (const ie in R)
          !Uo(ie) && !(ie in F) && i(
            U,
            ie,
            R[ie],
            null,
            te,
            j
          );
      for (const ie in F) {
        if (Uo(ie)) continue;
        const ge = F[ie], ke = R[ie];
        ge !== ke && ie !== "value" && i(U, ie, ke, ge, te, j);
      }
      "value" in F && i(U, "value", R.value, F.value, te);
    }
  }, Z = (U, R, F, j, te, ie, ge, ke, ne) => {
    const ue = R.el = U ? U.el : u(""), Me = R.anchor = U ? U.anchor : u("");
    let { patchFlag: Ce, dynamicChildren: oe, slotScopeIds: X } = R;
    X && (ke = ke ? ke.concat(X) : X), U == null ? (n(ue, F, j), n(Me, F, j), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      R.children || [],
      F,
      Me,
      te,
      ie,
      ge,
      ke,
      ne
    )) : Ce > 0 && Ce & 64 && oe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    U.dynamicChildren ? (O(
      U.dynamicChildren,
      oe,
      F,
      te,
      ie,
      ge,
      ke
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (R.key != null || te && R === te.subTree) && el(
      U,
      R,
      !0
      /* shallow */
    )) : Q(
      U,
      R,
      F,
      Me,
      te,
      ie,
      ge,
      ke,
      ne
    );
  }, V = (U, R, F, j, te, ie, ge, ke, ne) => {
    R.slotScopeIds = ke, U == null ? R.shapeFlag & 512 ? te.ctx.activate(
      R,
      F,
      j,
      ge,
      ne
    ) : A(
      R,
      F,
      j,
      te,
      ie,
      ge,
      ne
    ) : N(U, R, ne);
  }, A = (U, R, F, j, te, ie, ge) => {
    const ke = U.component = Au(
      U,
      j,
      te
    );
    if (Kn(U) && (ke.ctx.renderer = Pe), Uu(ke, !1, ge), ke.asyncDep) {
      if (te && te.registerDep(ke, D, ge), !U.el) {
        const ne = ke.subTree = x(kt);
        P(null, ne, R, F), U.placeholder = ne.el;
      }
    } else
      D(
        ke,
        U,
        R,
        F,
        te,
        ie,
        ge
      );
  }, N = (U, R, F) => {
    const j = R.component = U.component;
    if (hu(U, R, F))
      if (j.asyncDep && !j.asyncResolved) {
        ee(j, R, F);
        return;
      } else
        j.next = R, j.update();
    else
      R.el = U.el, j.vnode = R;
  }, D = (U, R, F, j, te, ie, ge) => {
    const ke = () => {
      if (U.isMounted) {
        let { next: Ce, bu: oe, u: X, parent: De, vnode: be } = U;
        {
          const Be = ir(U);
          if (Be) {
            Ce && (Ce.el = be.el, ee(U, Ce, ge)), Be.asyncDep.then(() => {
              U.isUnmounted || ke();
            });
            return;
          }
        }
        let we = Ce, H;
        Ks(U, !1), Ce ? (Ce.el = be.el, ee(U, Ce, ge)) : Ce = be, oe && kn(oe), (H = Ce.props && Ce.props.onVnodeBeforeUpdate) && us(H, De, Ce, be), Ks(U, !0);
        const G = Cl(U), ce = U.subTree;
        U.subTree = G, C(
          ce,
          G,
          // parent may have changed if it's in a teleport
          g(ce.el),
          // anchor may have changed if it's in a fragment
          Se(ce),
          U,
          te,
          ie
        ), Ce.el = G.el, we === null && yu(U, G.el), X && St(X, te), (H = Ce.props && Ce.props.onVnodeUpdated) && St(
          () => us(H, De, Ce, be),
          te
        );
      } else {
        let Ce;
        const { el: oe, props: X } = R, { bm: De, m: be, parent: we, root: H, type: G } = U, ce = po(R);
        Ks(U, !1), De && kn(De), !ce && (Ce = X && X.onVnodeBeforeMount) && us(Ce, we, R), Ks(U, !0);
        {
          H.ce && // @ts-expect-error _def is private
          H.ce._def.shadowRoot !== !1 && H.ce._injectChildStyle(G);
          const Be = U.subTree = Cl(U);
          C(
            null,
            Be,
            F,
            j,
            U,
            te,
            ie
          ), R.el = Be.el;
        }
        if (be && St(be, te), !ce && (Ce = X && X.onVnodeMounted)) {
          const Be = R;
          St(
            () => us(Ce, we, Be),
            te
          );
        }
        (R.shapeFlag & 256 || we && po(we.vnode) && we.vnode.shapeFlag & 256) && U.a && St(U.a, te), U.isMounted = !0, R = F = j = null;
      }
    };
    U.scope.on();
    const ne = U.effect = new fi(ke);
    U.scope.off();
    const ue = U.update = ne.run.bind(ne), Me = U.job = ne.runIfDirty.bind(ne);
    Me.i = U, Me.id = U.uid, ne.scheduler = () => Ya(Me), Ks(U, !0), ue();
  }, ee = (U, R, F) => {
    R.component = U;
    const j = U.vnode.props;
    U.vnode = R, U.next = null, _u(U, R.props, j, F), Cu(U, R.children, F), Ss(), ml(U), Is();
  }, Q = (U, R, F, j, te, ie, ge, ke, ne = !1) => {
    const ue = U && U.children, Me = U ? U.shapeFlag : 0, Ce = R.children, { patchFlag: oe, shapeFlag: X } = R;
    if (oe > 0) {
      if (oe & 128) {
        he(
          ue,
          Ce,
          F,
          j,
          te,
          ie,
          ge,
          ke,
          ne
        );
        return;
      } else if (oe & 256) {
        pe(
          ue,
          Ce,
          F,
          j,
          te,
          ie,
          ge,
          ke,
          ne
        );
        return;
      }
    }
    X & 8 ? (Me & 16 && Ie(ue, te, ie), Ce !== ue && v(F, Ce)) : Me & 16 ? X & 16 ? he(
      ue,
      Ce,
      F,
      j,
      te,
      ie,
      ge,
      ke,
      ne
    ) : Ie(ue, te, ie, !0) : (Me & 8 && v(F, ""), X & 16 && E(
      Ce,
      F,
      j,
      te,
      ie,
      ge,
      ke,
      ne
    ));
  }, pe = (U, R, F, j, te, ie, ge, ke, ne) => {
    U = U || fo, R = R || fo;
    const ue = U.length, Me = R.length, Ce = Math.min(ue, Me);
    let oe;
    for (oe = 0; oe < Ce; oe++) {
      const X = R[oe] = ne ? Us(R[oe]) : ps(R[oe]);
      C(
        U[oe],
        X,
        F,
        null,
        te,
        ie,
        ge,
        ke,
        ne
      );
    }
    ue > Me ? Ie(
      U,
      te,
      ie,
      !0,
      !1,
      Ce
    ) : E(
      R,
      F,
      j,
      te,
      ie,
      ge,
      ke,
      ne,
      Ce
    );
  }, he = (U, R, F, j, te, ie, ge, ke, ne) => {
    let ue = 0;
    const Me = R.length;
    let Ce = U.length - 1, oe = Me - 1;
    for (; ue <= Ce && ue <= oe; ) {
      const X = U[ue], De = R[ue] = ne ? Us(R[ue]) : ps(R[ue]);
      if (Qs(X, De))
        C(
          X,
          De,
          F,
          null,
          te,
          ie,
          ge,
          ke,
          ne
        );
      else
        break;
      ue++;
    }
    for (; ue <= Ce && ue <= oe; ) {
      const X = U[Ce], De = R[oe] = ne ? Us(R[oe]) : ps(R[oe]);
      if (Qs(X, De))
        C(
          X,
          De,
          F,
          null,
          te,
          ie,
          ge,
          ke,
          ne
        );
      else
        break;
      Ce--, oe--;
    }
    if (ue > Ce) {
      if (ue <= oe) {
        const X = oe + 1, De = X < Me ? R[X].el : j;
        for (; ue <= oe; )
          C(
            null,
            R[ue] = ne ? Us(R[ue]) : ps(R[ue]),
            F,
            De,
            te,
            ie,
            ge,
            ke,
            ne
          ), ue++;
      }
    } else if (ue > oe)
      for (; ue <= Ce; )
        Fe(U[ue], te, ie, !0), ue++;
    else {
      const X = ue, De = ue, be = /* @__PURE__ */ new Map();
      for (ue = De; ue <= oe; ue++) {
        const at = R[ue] = ne ? Us(R[ue]) : ps(R[ue]);
        at.key != null && be.set(at.key, ue);
      }
      let we, H = 0;
      const G = oe - De + 1;
      let ce = !1, Be = 0;
      const Xe = new Array(G);
      for (ue = 0; ue < G; ue++) Xe[ue] = 0;
      for (ue = X; ue <= Ce; ue++) {
        const at = U[ue];
        if (H >= G) {
          Fe(at, te, ie, !0);
          continue;
        }
        let ut;
        if (at.key != null)
          ut = be.get(at.key);
        else
          for (we = De; we <= oe; we++)
            if (Xe[we - De] === 0 && Qs(at, R[we])) {
              ut = we;
              break;
            }
        ut === void 0 ? Fe(at, te, ie, !0) : (Xe[ut - De] = ue + 1, ut >= Be ? Be = ut : ce = !0, C(
          at,
          R[ut],
          F,
          null,
          te,
          ie,
          ge,
          ke,
          ne
        ), H++);
      }
      const vt = ce ? Eu(Xe) : fo;
      for (we = vt.length - 1, ue = G - 1; ue >= 0; ue--) {
        const at = De + ue, ut = R[at], Mt = R[at + 1], Ft = at + 1 < Me ? (
          // #13559, fallback to el placeholder for unresolved async component
          Mt.el || Mt.placeholder
        ) : j;
        Xe[ue] === 0 ? C(
          null,
          ut,
          F,
          Ft,
          te,
          ie,
          ge,
          ke,
          ne
        ) : ce && (we < 0 || ue !== vt[we] ? Re(ut, F, Ft, 2) : we--);
      }
    }
  }, Re = (U, R, F, j, te = null) => {
    const { el: ie, type: ge, transition: ke, children: ne, shapeFlag: ue } = U;
    if (ue & 6) {
      Re(U.component.subTree, R, F, j);
      return;
    }
    if (ue & 128) {
      U.suspense.move(R, F, j);
      return;
    }
    if (ue & 64) {
      ge.move(U, R, F, Pe);
      return;
    }
    if (ge === K) {
      n(ie, R, F);
      for (let Ce = 0; Ce < ne.length; Ce++)
        Re(ne[Ce], R, F, j);
      n(U.anchor, R, F);
      return;
    }
    if (ge === ca) {
      I(U, R, F);
      return;
    }
    if (j !== 2 && ue & 1 && ke)
      if (j === 0)
        ke.beforeEnter(ie), n(ie, R, F), St(() => ke.enter(ie), te);
      else {
        const { leave: Ce, delayLeave: oe, afterLeave: X } = ke, De = () => {
          U.ctx.isUnmounted ? l(ie) : n(ie, R, F);
        }, be = () => {
          ie._isLeaving && ie[bs](
            !0
            /* cancelled */
          ), Ce(ie, () => {
            De(), X && X();
          });
        };
        oe ? oe(ie, De, be) : be();
      }
    else
      n(ie, R, F);
  }, Fe = (U, R, F, j = !1, te = !1) => {
    const {
      type: ie,
      props: ge,
      ref: ke,
      children: ne,
      dynamicChildren: ue,
      shapeFlag: Me,
      patchFlag: Ce,
      dirs: oe,
      cacheIndex: X
    } = U;
    if (Ce === -2 && (te = !1), ke != null && (Ss(), Bo(ke, null, F, U, !0), Is()), X != null && (R.renderCache[X] = void 0), Me & 256) {
      R.ctx.deactivate(U);
      return;
    }
    const De = Me & 1 && oe, be = !po(U);
    let we;
    if (be && (we = ge && ge.onVnodeBeforeUnmount) && us(we, R, U), Me & 6)
      Ne(U.component, F, j);
    else {
      if (Me & 128) {
        U.suspense.unmount(F, j);
        return;
      }
      De && Hs(U, null, R, "beforeUnmount"), Me & 64 ? U.type.remove(
        U,
        R,
        F,
        Pe,
        j
      ) : ue && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ue.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ie !== K || Ce > 0 && Ce & 64) ? Ie(
        ue,
        R,
        F,
        !1,
        !0
      ) : (ie === K && Ce & 384 || !te && Me & 16) && Ie(ne, R, F), j && Ue(U);
    }
    (be && (we = ge && ge.onVnodeUnmounted) || De) && St(() => {
      we && us(we, R, U), De && Hs(U, null, R, "unmounted");
    }, F);
  }, Ue = (U) => {
    const { type: R, el: F, anchor: j, transition: te } = U;
    if (R === K) {
      qe(F, j);
      return;
    }
    if (R === ca) {
      S(U);
      return;
    }
    const ie = () => {
      l(F), te && !te.persisted && te.afterLeave && te.afterLeave();
    };
    if (U.shapeFlag & 1 && te && !te.persisted) {
      const { leave: ge, delayLeave: ke } = te, ne = () => ge(F, ie);
      ke ? ke(U.el, ie, ne) : ne();
    } else
      ie();
  }, qe = (U, R) => {
    let F;
    for (; U !== R; )
      F = w(U), l(U), U = F;
    l(R);
  }, Ne = (U, R, F) => {
    const { bum: j, scope: te, job: ie, subTree: ge, um: ke, m: ne, a: ue } = U;
    Il(ne), Il(ue), j && kn(j), te.stop(), ie && (ie.flags |= 8, Fe(ge, U, R, F)), ke && St(ke, R), St(() => {
      U.isUnmounted = !0;
    }, R);
  }, Ie = (U, R, F, j = !1, te = !1, ie = 0) => {
    for (let ge = ie; ge < U.length; ge++)
      Fe(U[ge], R, F, j, te);
  }, Se = (U) => {
    if (U.shapeFlag & 6)
      return Se(U.component.subTree);
    if (U.shapeFlag & 128)
      return U.suspense.next();
    const R = w(U.anchor || U.el), F = R && R[Mi];
    return F ? w(F) : R;
  };
  let ye = !1;
  const me = (U, R, F) => {
    U == null ? R._vnode && Fe(R._vnode, null, null, !0) : C(
      R._vnode || null,
      U,
      R,
      null,
      null,
      null,
      F
    ), R._vnode = U, ye || (ye = !0, ml(), Ti(), ye = !1);
  }, Pe = {
    p: C,
    um: Fe,
    m: Re,
    r: Ue,
    mt: A,
    mc: E,
    pc: Q,
    pbc: O,
    n: Se,
    o: e
  };
  return {
    render: me,
    hydrate: void 0,
    createApp: iu(me)
  };
}
function ra({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function Ks({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function Iu(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function el(e, s, o = !1) {
  const n = e.children, l = s.children;
  if (ze(n) && ze(l))
    for (let i = 0; i < n.length; i++) {
      const c = n[i];
      let u = l[i];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[i] = Us(l[i]), u.el = c.el), !o && u.patchFlag !== -2 && el(c, u)), u.type === Jn && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === kt && !u.el && (u.el = c.el);
    }
}
function Eu(e) {
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
function Tu(e, s) {
  s && s.pendingBranch ? ze(e) ? s.effects.push(...e) : s.effects.push(e) : zc(e);
}
const K = Symbol.for("v-fgt"), Jn = Symbol.for("v-txt"), kt = Symbol.for("v-cmt"), ca = Symbol.for("v-stc"), Wo = [];
let Nt = null;
function a(e = !1) {
  Wo.push(Nt = e ? null : []);
}
function Pu() {
  Wo.pop(), Nt = Wo[Wo.length - 1] || null;
}
let Qo = 1;
function Ln(e, s = !1) {
  Qo += e, e < 0 && Nt && s && (Nt.hasOnce = !0);
}
function cr(e) {
  return e.dynamicChildren = Qo > 0 ? Nt || fo : null, Pu(), Qo > 0 && Nt && Nt.push(e), e;
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
function L(e, s, o, n, l) {
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
function Xo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Qs(e, s) {
  return e.type === s.type && e.key === s.key;
}
const ur = ({ key: e }) => e ?? null, Cn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? ct(e) || $t(e) || We(e) ? { i: ht, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, n = 0, l = null, i = e === K ? 0 : 1, c = !1, u = !1) {
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
const x = Ru;
function Ru(e, s = null, o = null, n = 0, l = null, i = !1) {
  if ((!e || e === ji) && (e = kt), Xo(e)) {
    const u = zs(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && tl(u, o), Qo > 0 && !i && Nt && (u.shapeFlag & 6 ? Nt[Nt.indexOf(e)] = u : Nt.push(u)), u.patchFlag = -2, u;
  }
  if (Vu(e) && (e = e.__vccOpts), s) {
    s = Mu(s);
    let { class: u, style: d } = s;
    u && !ct(u) && (s.class = xe(u)), et(d) && (qa(d) && !ze(d) && (d = pt({}, d)), s.style = qt(d));
  }
  const c = ct(e) ? 1 : rr(e) ? 128 : Di(e) ? 64 : et(e) ? 4 : We(e) ? 2 : 0;
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
function Mu(e) {
  return e ? qa(e) || tr(e) ? pt({}, e) : e : null;
}
function zs(e, s, o = !1, n = !1) {
  const { props: l, ref: i, patchFlag: c, children: u, transition: d } = e, m = s ? Du(l || {}, s) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && ur(m),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && i ? ze(i) ? i.concat(Cn(s)) : [i, Cn(s)] : Cn(s)
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
    patchFlag: s && e.type !== K ? c === -1 ? 16 : c | 16 : c,
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
  return x(Jn, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (a(), L(kt, null, e)) : x(kt, null, e);
}
function ps(e) {
  return e == null || typeof e == "boolean" ? x(kt) : ze(e) ? x(
    K,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Xo(e) ? Us(e) : x(Jn, null, String(e));
}
function Us(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : zs(e);
}
function tl(e, s) {
  let o = 0;
  const { shapeFlag: n } = e;
  if (s == null)
    s = null;
  else if (ze(s))
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
  else We(s) ? (s = { default: s, _ctx: ht }, o = 32) : (s = String(s), n & 64 ? (o = 16, s = [$(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function Du(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        s.class !== n.class && (s.class = xe([s.class, n.class]));
      else if (l === "style")
        s.style = qt([s.style, n.style]);
      else if (Fn(l)) {
        const i = s[l], c = n[l];
        c && i !== c && !(ze(i) && i.includes(c)) && (s[l] = i ? [].concat(i, c) : c);
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
const Lu = Yi();
let Ou = 0;
function Au(e, s, o) {
  const n = e.type, l = (s ? s.appContext : e.appContext) || Lu, i = {
    uid: Ou++,
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
    scope: new rc(
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
  return i.ctx = { _: i }, i.root = s ? s.root : i, i.emit = mu.bind(null, i), e.ce && e.ce(i), i;
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
function Uu(e, s = !1, o = !1) {
  s && Ta(s);
  const { props: n, children: l } = e.vnode, i = dr(e);
  wu(e, n, i, s), $u(e, l, o || s);
  const c = i ? Nu(e, s) : void 0;
  return s && Ta(!1), c;
}
function Nu(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, eu);
  const { setup: n } = o;
  if (n) {
    Ss();
    const l = e.setupContext = n.length > 1 ? Fu(e) : null, i = on(e), c = sn(
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
  We(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : et(s) && (e.setupState = Si(s)), fr(e);
}
function fr(e, s, o) {
  const n = e.type;
  e.render || (e.render = n.render || gs);
  {
    const l = on(e);
    Ss();
    try {
      tu(e);
    } finally {
      Is(), l();
    }
  }
}
const zu = {
  get(e, s) {
    return wt(e, "get", ""), e[s];
  }
};
function Fu(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, zu),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function Qn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Si(Tc(e.exposed)), {
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
function Bu(e, s = !0) {
  return We(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function Vu(e) {
  return We(e) && "__vccOpts" in e;
}
const z = (e, s) => Lc(e, s, Zo);
function nn(e, s, o) {
  try {
    Ln(-1);
    const n = arguments.length;
    return n === 2 ? et(s) && !ze(s) ? Xo(s) ? x(e, null, [s]) : x(e, s) : x(e, null, s) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && Xo(o) && (o = [o]), x(e, s, o));
  } finally {
    Ln(1);
  }
}
const Wu = "3.5.25";
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
const mr = Pa ? (e) => Pa.createHTML(e) : (e) => e, Gu = "http://www.w3.org/2000/svg", ju = "http://www.w3.org/1998/Math/MathML", ks = typeof document < "u" ? document : null, Rl = ks && /* @__PURE__ */ ks.createElement("template"), Hu = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, n) => {
    const l = s === "svg" ? ks.createElementNS(Gu, e) : s === "mathml" ? ks.createElementNS(ju, e) : o ? ks.createElement(e, { is: o }) : ks.createElement(e);
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
), Ku = (e) => (e.displayName = "Transition", e.props = pr, e), qu = /* @__PURE__ */ Ku(
  (e, { slots: s }) => nn(Vc, gr(e), s)
), qs = (e, s = []) => {
  ze(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, Ml = (e) => e ? ze(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
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
  } = e, _ = Yu(l), C = _ && _[0], b = _ && _[1], {
    onBeforeEnter: P,
    onEnter: M,
    onEnterCancelled: I,
    onLeave: S,
    onLeaveCancelled: q,
    onBeforeAppear: Y = P,
    onAppear: W = M,
    onAppearCancelled: E = I
  } = s, T = (Z, V, A, N) => {
    Z._enterCancelled = N, Ls(Z, V ? v : u), Ls(Z, V ? m : c), A && A();
  }, O = (Z, V) => {
    Z._isLeaving = !1, Ls(Z, g), Ls(Z, p), Ls(Z, w), V && V();
  }, le = (Z) => (V, A) => {
    const N = Z ? W : M, D = () => T(V, Z, A);
    qs(N, [V, D]), Dl(() => {
      Ls(V, Z ? d : i), fs(V, Z ? v : u), Ml(N) || Ll(V, n, C, D);
    });
  };
  return pt(s, {
    onBeforeEnter(Z) {
      qs(P, [Z]), fs(Z, i), fs(Z, c);
    },
    onBeforeAppear(Z) {
      qs(Y, [Z]), fs(Z, d), fs(Z, m);
    },
    onEnter: le(!1),
    onAppear: le(!0),
    onLeave(Z, V) {
      Z._isLeaving = !0;
      const A = () => O(Z, V);
      fs(Z, g), Z._enterCancelled ? (fs(Z, w), Ra(Z)) : (Ra(Z), fs(Z, w)), Dl(() => {
        Z._isLeaving && (Ls(Z, g), fs(Z, p), Ml(S) || Ll(Z, n, b, A));
      }), qs(S, [Z, A]);
    },
    onEnterCancelled(Z) {
      T(Z, !1, void 0, !0), qs(I, [Z]);
    },
    onAppearCancelled(Z) {
      T(Z, !0, void 0, !0), qs(E, [Z]);
    },
    onLeaveCancelled(Z) {
      O(Z), qs(q, [Z]);
    }
  });
}
function Yu(e) {
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
  return ec(e);
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
let Ju = 0;
function Ll(e, s, o, n) {
  const l = e._endId = ++Ju, i = () => {
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
function Qu(e, s, o) {
  const n = e[wo];
  n && (s = (s ? [s, ...n] : [...n]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const Ul = Symbol("_vod"), Xu = Symbol("_vsh"), Zu = Symbol(""), ed = /(?:^|;)\s*display\s*:/;
function td(e, s, o) {
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
      const c = n[Zu];
      c && (o += ";" + c), n.cssText = o, i = ed.test(o);
    }
  } else s && e.removeAttribute("style");
  Ul in e && (e[Ul] = i ? n.display : "", e[Xu] && (n.display = "none"));
}
const Nl = /\s*!important$/;
function xn(e, s, o) {
  if (ze(o))
    o.forEach((n) => xn(e, s, n));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const n = sd(e, s);
    Nl.test(o) ? e.setProperty(
      Bs(n),
      o.replace(Nl, ""),
      "important"
    ) : e[n] = o;
  }
}
const zl = ["Webkit", "Moz", "ms"], da = {};
function sd(e, s) {
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
function Bl(e, s, o, n, l, i = lc(s)) {
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
function od(e, s, o, n) {
  e.removeEventListener(s, o, n);
}
const Wl = Symbol("_vei");
function nd(e, s, o, n, l = null) {
  const i = e[Wl] || (e[Wl] = {}), c = i[s];
  if (n && c)
    c.value = n;
  else {
    const [u, d] = ad(s);
    if (n) {
      const m = i[s] = rd(
        n,
        l
      );
      xs(e, u, m, d);
    } else c && (od(e, u, c, d), i[s] = void 0);
  }
}
const Gl = /(?:Once|Passive|Capture)$/;
function ad(e) {
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
const ld = /* @__PURE__ */ Promise.resolve(), id = () => fa || (ld.then(() => fa = 0), fa = Date.now());
function rd(e, s) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    os(
      cd(n, o.value),
      s,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = id(), o;
}
function cd(e, s) {
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
const jl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ud = (e, s, o, n, l, i) => {
  const c = l === "svg";
  s === "class" ? Qu(e, n, c) : s === "style" ? td(e, o, n) : Fn(s) ? Na(s) || nd(e, s, o, n, i) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : dd(e, s, n, c)) ? (Vl(e, s, n), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Bl(e, s, n, c, i, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !ct(n)) ? Vl(e, Kt(s), n, i, s) : (s === "true-value" ? e._trueValue = n : s === "false-value" && (e._falseValue = n), Bl(e, s, n, c));
};
function dd(e, s, o, n) {
  if (n)
    return !!(s === "innerHTML" || s === "textContent" || s in e && jl(s) && We(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return jl(s) && ct(o) ? !1 : s in e;
}
const yr = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), An = Symbol("_moveCb"), Hl = Symbol("_enterCb"), fd = (e) => (delete e.props.mode, e), md = /* @__PURE__ */ fd({
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
      if (!yd(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(pd), l.forEach(gd);
      const u = l.filter(hd);
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
      let d = c.tag || K;
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
}), vd = md;
function pd(e) {
  const s = e.el;
  s[An] && s[An](), s[Hl] && s[Hl]();
}
function gd(e) {
  wr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function hd(e) {
  const s = yr.get(e), o = wr.get(e), n = s.left - o.left, l = s.top - o.top;
  if (n || l) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${n}px,${l}px)`, i.transitionDuration = "0s", e;
  }
}
function yd(e, s, o) {
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
  return ze(s) ? (o) => kn(s, o) : s;
};
function wd(e) {
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
    }), s || (xs(e, "compositionstart", wd), xs(e, "compositionend", Kl), xs(e, "change", Kl));
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
      if (ze(n)) {
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
  if (ze(s))
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
  const o = e.multiple, n = ze(s);
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
function _d(e, s) {
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
  const c = _d(
    e.tagName,
    o.props && o.props.type
  )[l];
  c && c(e, s, o, n);
}
const kd = ["ctrl", "shift", "alt", "meta"], bd = {
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
  exact: (e, s) => kd.some((o) => e[`${o}Key`] && !s.includes(o))
}, it = (e, s) => {
  const o = e._withMods || (e._withMods = {}), n = s.join(".");
  return o[n] || (o[n] = ((l, ...i) => {
    for (let c = 0; c < s.length; c++) {
      const u = bd[s[c]];
      if (u && u(l, s)) return;
    }
    return e(l, ...i);
  }));
}, $d = {
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
      (c) => c === i || $d[c] === i
    ))
      return e(l);
  }));
}, Cd = /* @__PURE__ */ pt({ patchProp: ud }, Hu);
let Ql;
function xd() {
  return Ql || (Ql = xu(Cd));
}
const Zn = ((...e) => {
  const s = xd().createApp(...e), { mount: o } = s;
  return s.mount = (n) => {
    const l = Id(n);
    if (!l) return;
    const i = s._component;
    !We(i) && !i.render && !i.template && (i.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, Sd(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, s;
});
function Sd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Id(e) {
  return ct(e) ? document.querySelector(e) : e;
}
const Ed = { class: "panel-layout" }, Td = {
  key: 0,
  class: "panel-layout-header"
}, Pd = {
  key: 1,
  class: "panel-layout-search"
}, Rd = { class: "panel-layout-content" }, Md = {
  key: 2,
  class: "panel-layout-footer"
}, Dd = /* @__PURE__ */ de({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (a(), r("div", Ed, [
      s.$slots.header ? (a(), r("div", Td, [
        He(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (a(), r("div", Pd, [
        He(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", Rd, [
        He(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (a(), r("div", Md, [
        He(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), fe = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of s)
    o[n] = l;
  return o;
}, Pt = /* @__PURE__ */ fe(Dd, [["__scopeId", "data-v-21565df9"]]), Ld = {
  key: 0,
  class: "panel-title-prefix"
}, Od = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Ad = /* @__PURE__ */ de({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (a(), L(Qa(`h${e.level}`), {
      class: xe(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (a(), r("span", Ld, f(e.prefix), 1)) : (a(), r("span", Od)),
        He(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ud = /* @__PURE__ */ fe(Ad, [["__scopeId", "data-v-c3875efc"]]), Nd = ["title"], zd = ["width", "height"], Fd = /* @__PURE__ */ de({
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
      ])], 8, zd))
    ], 8, Nd));
  }
}), kr = /* @__PURE__ */ fe(Fd, [["__scopeId", "data-v-6fc7f16d"]]), Bd = { class: "header-left" }, Vd = {
  key: 0,
  class: "header-actions"
}, Wd = /* @__PURE__ */ de({
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
      class: xe(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", Bd, [
        x(Ud, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            $(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), L(kr, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (a(), r("div", Vd, [
        He(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Rt = /* @__PURE__ */ fe(Wd, [["__scopeId", "data-v-55a62cd6"]]), Gd = {
  key: 0,
  class: "section-title-count"
}, jd = {
  key: 1,
  class: "section-title-icon"
}, Hd = /* @__PURE__ */ de({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), L(Qa(`h${e.level}`), {
      class: xe(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, {
      default: h(() => [
        He(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), r("span", Gd, "(" + f(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), r("span", jd, f(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ut = /* @__PURE__ */ fe(Hd, [["__scopeId", "data-v-559361eb"]]), Kd = { class: "status-grid" }, qd = { class: "status-grid__columns" }, Yd = { class: "status-grid__column" }, Jd = { class: "status-grid__title" }, Qd = { class: "status-grid__column status-grid__column--right" }, Xd = { class: "status-grid__title" }, Zd = {
  key: 0,
  class: "status-grid__footer"
}, ef = /* @__PURE__ */ de({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (a(), r("div", Kd, [
      t("div", qd, [
        t("div", Yd, [
          t("h4", Jd, f(e.leftTitle), 1),
          He(s.$slots, "left", {}, void 0)
        ]),
        t("div", Qd, [
          t("h4", Xd, f(e.rightTitle), 1),
          He(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (a(), r("div", Zd, [
        He(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), tf = /* @__PURE__ */ fe(ef, [["__scopeId", "data-v-73b7ba3f"]]), sf = {
  key: 0,
  class: "status-item__icon"
}, of = {
  key: 1,
  class: "status-item__count"
}, nf = { class: "status-item__label" }, af = /* @__PURE__ */ de({
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
      class: xe(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), r("span", sf, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), r("span", of, f(e.count), 1)) : y("", !0),
      t("span", nf, f(e.label), 1)
    ], 2));
  }
}), ds = /* @__PURE__ */ fe(af, [["__scopeId", "data-v-6f929183"]]), lf = { class: "issue-card__header" }, rf = { class: "issue-card__icon" }, cf = { class: "issue-card__title" }, uf = {
  key: 0,
  class: "issue-card__content"
}, df = {
  key: 0,
  class: "issue-card__description"
}, ff = {
  key: 1,
  class: "issue-card__items"
}, mf = {
  key: 2,
  class: "issue-card__actions"
}, vf = /* @__PURE__ */ de({
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
      class: xe(["issue-card", o.value])
    }, [
      t("div", lf, [
        t("span", rf, f(e.icon), 1),
        t("h4", cf, f(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), r("div", uf, [
        e.description ? (a(), r("p", df, f(e.description), 1)) : y("", !0),
        He(n.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (a(), r("div", ff, [
        (a(!0), r(K, null, ve(e.items, (i, c) => (a(), r("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, f(i), 1)
        ]))), 128))
      ])) : y("", !0),
      n.$slots.actions ? (a(), r("div", mf, [
        He(n.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Qt = /* @__PURE__ */ fe(vf, [["__scopeId", "data-v-df6aa348"]]), pf = ["type", "disabled"], gf = {
  key: 0,
  class: "spinner"
}, hf = /* @__PURE__ */ de({
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
      class: xe(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), r("span", gf)) : y("", !0),
      e.loading ? y("", !0) : He(s.$slots, "default", { key: 1 }, void 0)
    ], 10, pf));
  }
}), re = /* @__PURE__ */ fe(hf, [["__scopeId", "data-v-772abe47"]]), yf = { class: "empty-state" }, wf = {
  key: 0,
  class: "empty-icon"
}, _f = { class: "empty-message" }, kf = /* @__PURE__ */ de({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (a(), r("div", yf, [
      e.icon ? (a(), r("div", wf, f(e.icon), 1)) : y("", !0),
      t("p", _f, f(e.message), 1),
      e.actionLabel ? (a(), L(re, {
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
}), ns = /* @__PURE__ */ fe(kf, [["__scopeId", "data-v-4466284f"]]), bf = /* @__PURE__ */ de({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (a(), r("span", {
      class: xe(["detail-label"]),
      style: qt({ minWidth: e.minWidth })
    }, [
      He(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), Sn = /* @__PURE__ */ fe(bf, [["__scopeId", "data-v-75e9eeb8"]]), $f = /* @__PURE__ */ de({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), r("span", {
      class: xe(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      He(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Ma = /* @__PURE__ */ fe($f, [["__scopeId", "data-v-2f186e4c"]]), Cf = { class: "detail-row" }, xf = /* @__PURE__ */ de({
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
    return (s, o) => (a(), r("div", Cf, [
      x(Sn, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          $(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), L(Ma, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: h(() => [
          $(f(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : He(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), dt = /* @__PURE__ */ fe(xf, [["__scopeId", "data-v-ef15664a"]]), Sf = { class: "modal-header" }, If = { class: "modal-body" }, Ef = { class: "status-section" }, Tf = {
  key: 0,
  class: "status-section"
}, Pf = { class: "section-header-row" }, Rf = {
  key: 0,
  class: "workflow-group"
}, Mf = { class: "workflow-group-header" }, Df = { class: "workflow-group-title" }, Lf = { class: "workflow-list" }, Of = { class: "workflow-name" }, Af = { class: "workflow-issue" }, Uf = {
  key: 1,
  class: "workflow-group"
}, Nf = { class: "workflow-group-header" }, zf = { class: "workflow-group-title" }, Ff = { class: "workflow-list" }, Bf = { class: "workflow-name" }, Vf = { class: "workflow-issue" }, Wf = {
  key: 2,
  class: "workflow-group"
}, Gf = { class: "workflow-group-header" }, jf = { class: "workflow-group-title" }, Hf = { class: "workflow-list" }, Kf = { class: "workflow-name" }, qf = {
  key: 3,
  class: "workflow-group"
}, Yf = { class: "workflow-group-header" }, Jf = { class: "workflow-group-title" }, Qf = { class: "workflow-list" }, Xf = { class: "workflow-name" }, Zf = {
  key: 4,
  class: "workflow-group"
}, em = { class: "workflow-group-header" }, tm = { class: "workflow-group-title" }, sm = { class: "workflow-list" }, om = { class: "workflow-name" }, nm = {
  key: 5,
  class: "workflow-group"
}, am = { class: "workflow-group-title" }, lm = { class: "expand-icon" }, im = {
  key: 0,
  class: "workflow-list"
}, rm = { class: "workflow-name" }, cm = {
  key: 1,
  class: "status-section"
}, um = {
  key: 0,
  class: "change-group"
}, dm = { class: "change-group-header" }, fm = { class: "change-group-title" }, mm = { class: "change-list" }, vm = { class: "node-name" }, pm = {
  key: 0,
  class: "dev-badge"
}, gm = {
  key: 1,
  class: "change-group"
}, hm = { class: "change-group-header" }, ym = { class: "change-group-title" }, wm = { class: "change-list" }, _m = { class: "node-name" }, km = {
  key: 0,
  class: "dev-badge"
}, bm = {
  key: 2,
  class: "change-group"
}, $m = { class: "change-list" }, Cm = { class: "change-item" }, xm = { class: "node-name" }, Sm = {
  key: 3,
  class: "change-group"
}, Im = {
  key: 2,
  class: "status-section"
}, Em = { class: "section-header-row" }, Tm = {
  key: 0,
  class: "drift-item"
}, Pm = { class: "drift-list" }, Rm = {
  key: 0,
  class: "drift-list-more"
}, Mm = {
  key: 1,
  class: "drift-item"
}, Dm = { class: "drift-list" }, Lm = {
  key: 0,
  class: "drift-list-more"
}, Om = {
  key: 2,
  class: "drift-item"
}, Am = { class: "drift-list" }, Um = { class: "version-actual" }, Nm = { class: "version-expected" }, zm = {
  key: 0,
  class: "drift-list-more"
}, Fm = {
  key: 3,
  class: "drift-item"
}, Bm = { class: "repair-action" }, Vm = {
  key: 3,
  class: "status-section"
}, Wm = { class: "info-box" }, Gm = { class: "drift-list" }, jm = {
  key: 0,
  class: "drift-list-more"
}, Hm = {
  key: 4,
  class: "status-section"
}, Km = { class: "warning-box" }, qm = {
  key: 5,
  class: "empty-state-inline"
}, Ym = { class: "modal-actions" }, Jm = /* @__PURE__ */ de({
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
    }), yt(() => s.show, (w, p) => {
      console.log("StatusDetailModal show prop changed from", p, "to", w);
    }, { immediate: !0 });
    const n = z(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (C) => C.status === "broken" && C.sync_state === "synced"
      )) || [];
    }), l = z(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (C) => C.status === "broken" && C.sync_state !== "synced"
      )) || [];
    }), i = z(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.synced) == null ? void 0 : _.filter((C) => {
        var P, M, I;
        const b = (I = (M = (P = s.status) == null ? void 0 : P.workflows) == null ? void 0 : M.analyzed) == null ? void 0 : I.find((S) => S.name === C);
        return !b || b.status !== "broken";
      })) || [];
    }), c = z(() => {
      var w, p, _, C, b;
      return (w = s.status) != null && w.workflows ? (((p = s.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((_ = s.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((C = s.status.workflows.deleted) == null ? void 0 : C.length) ?? 0) > 0 || (((b = s.status.workflows.synced) == null ? void 0 : b.length) ?? 0) > 0 : !1;
    }), u = z(() => {
      var p, _, C;
      const w = (p = s.status) == null ? void 0 : p.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((C = w.nodes_removed) == null ? void 0 : C.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = z(() => {
      var w, p, _, C, b, P;
      return !c.value && !u.value && ((p = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : p.is_synced) && (((_ = s.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((P = (b = (C = s.status) == null ? void 0 : C.comparison) == null ? void 0 : b.disabled_nodes) == null ? void 0 : P.length) ?? 0) === 0;
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
      var _, C, b, P, M, I, S, q, Y, W, E, T, O, le, Z, V, A, N, D, ee, Q, pe;
      return a(), L(Ct, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = (he) => w.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: p[6] || (p[6] = it(() => {
            }, ["stop"]))
          }, [
            t("div", Sf, [
              p[8] || (p[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = (he) => w.$emit("close"))
              }, "✕")
            ]),
            t("div", If, [
              t("div", Ef, [
                x(Ut, { level: "4" }, {
                  default: h(() => [...p[9] || (p[9] = [
                    $("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                x(dt, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (a(), r("div", Tf, [
                t("div", Pf, [
                  x(Ut, { level: "4" }, {
                    default: h(() => [...p[10] || (p[10] = [
                      $("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[1] || (p[1] = (he) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                n.value.length ? (a(), r("div", Rf, [
                  t("div", Mf, [
                    p[11] || (p[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Df, "BROKEN (COMMITTED) (" + f(n.value.length) + ")", 1)
                  ]),
                  t("div", Lf, [
                    (a(!0), r(K, null, ve(n.value, (he) => (a(), r("div", {
                      key: he.name,
                      class: "workflow-item"
                    }, [
                      t("span", Of, f(he.name), 1),
                      t("span", Af, f(he.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), r("div", Uf, [
                  t("div", Nf, [
                    p[12] || (p[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", zf, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  t("div", Ff, [
                    (a(!0), r(K, null, ve(l.value, (he) => (a(), r("div", {
                      key: he.name,
                      class: "workflow-item"
                    }, [
                      t("span", Bf, f(he.name), 1),
                      t("span", Vf, f(he.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (C = (_ = e.status.workflows) == null ? void 0 : _.new) != null && C.length ? (a(), r("div", Wf, [
                  t("div", Gf, [
                    p[13] || (p[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", jf, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", Hf, [
                    (a(!0), r(K, null, ve(e.status.workflows.new, (he) => (a(), r("div", {
                      key: he,
                      class: "workflow-item"
                    }, [
                      t("span", Kf, f(he), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (P = (b = e.status.workflows) == null ? void 0 : b.modified) != null && P.length ? (a(), r("div", qf, [
                  t("div", Yf, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", Jf, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", Qf, [
                    (a(!0), r(K, null, ve(e.status.workflows.modified, (he) => (a(), r("div", {
                      key: he,
                      class: "workflow-item"
                    }, [
                      t("span", Xf, f(he), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = (M = e.status.workflows) == null ? void 0 : M.deleted) != null && I.length ? (a(), r("div", Zf, [
                  t("div", em, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", tm, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", sm, [
                    (a(!0), r(K, null, ve(e.status.workflows.deleted, (he) => (a(), r("div", {
                      key: he,
                      class: "workflow-item"
                    }, [
                      t("span", om, f(he), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                i.value.length ? (a(), r("div", nm, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = (he) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", am, "SYNCED (" + f(i.value.length) + ")", 1),
                    t("span", lm, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), r("div", im, [
                    (a(!0), r(K, null, ve(i.value, (he) => (a(), r("div", {
                      key: he,
                      class: "workflow-item"
                    }, [
                      t("span", rm, f(he), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (a(), r("div", cm, [
                x(Ut, { level: "4" }, {
                  default: h(() => [...p[17] || (p[17] = [
                    $("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (q = (S = e.status.git_changes) == null ? void 0 : S.nodes_added) != null && q.length ? (a(), r("div", um, [
                  t("div", dm, [
                    p[18] || (p[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", fm, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", mm, [
                    (a(!0), r(K, null, ve(e.status.git_changes.nodes_added, (he) => (a(), r("div", {
                      key: v(he),
                      class: "change-item"
                    }, [
                      t("span", vm, f(v(he)), 1),
                      g(he) ? (a(), r("span", pm, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (W = (Y = e.status.git_changes) == null ? void 0 : Y.nodes_removed) != null && W.length ? (a(), r("div", gm, [
                  t("div", hm, [
                    p[19] || (p[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", ym, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", wm, [
                    (a(!0), r(K, null, ve(e.status.git_changes.nodes_removed, (he) => (a(), r("div", {
                      key: v(he),
                      class: "change-item"
                    }, [
                      t("span", _m, f(v(he)), 1),
                      g(he) ? (a(), r("span", km, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (E = e.status.git_changes) != null && E.workflow_changes ? (a(), r("div", bm, [
                  p[20] || (p[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", $m, [
                    t("div", Cm, [
                      t("span", xm, f(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (T = e.status.git_changes) != null && T.has_other_changes ? (a(), r("div", Sm, [...p[21] || (p[21] = [
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
              (O = e.status.comparison) != null && O.is_synced ? y("", !0) : (a(), r("div", Im, [
                t("div", Em, [
                  x(Ut, { level: "4" }, {
                    default: h(() => [...p[22] || (p[22] = [
                      $("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[3] || (p[3] = (he) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                p[26] || (p[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (Z = (le = e.status.comparison) == null ? void 0 : le.missing_nodes) != null && Z.length ? (a(), r("div", Tm, [
                  x(dt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", Pm, [
                    (a(!0), r(K, null, ve(e.status.comparison.missing_nodes.slice(0, 10), (he) => (a(), r("div", {
                      key: he,
                      class: "drift-list-item"
                    }, " - " + f(he), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), r("div", Rm, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (A = (V = e.status.comparison) == null ? void 0 : V.extra_nodes) != null && A.length ? (a(), r("div", Mm, [
                  x(dt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", Dm, [
                    (a(!0), r(K, null, ve(e.status.comparison.extra_nodes.slice(0, 10), (he) => (a(), r("div", {
                      key: he,
                      class: "drift-list-item"
                    }, " - " + f(he), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), r("div", Lm, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (D = (N = e.status.comparison) == null ? void 0 : N.version_mismatches) != null && D.length ? (a(), r("div", Om, [
                  x(dt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", Am, [
                    (a(!0), r(K, null, ve(e.status.comparison.version_mismatches.slice(0, 10), (he) => (a(), r("div", {
                      key: he.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      $(f(he.name) + ": ", 1),
                      t("span", Um, f(he.actual), 1),
                      p[23] || (p[23] = $(" → ", -1)),
                      t("span", Nm, f(he.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), r("div", zm, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((ee = e.status.comparison) == null ? void 0 : ee.packages_in_sync) === !1 ? (a(), r("div", Fm, [
                  x(dt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", Bm, [
                  x(re, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: p[4] || (p[4] = (he) => w.$emit("repair"))
                  }, {
                    default: h(() => [...p[24] || (p[24] = [
                      $(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  p[25] || (p[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (pe = (Q = e.status.comparison) == null ? void 0 : Q.disabled_nodes) != null && pe.length ? (a(), r("div", Vm, [
                x(Ut, { level: "4" }, {
                  default: h(() => [...p[27] || (p[27] = [
                    $("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", Wm, [
                  p[28] || (p[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", Gm, [
                  (a(!0), r(K, null, ve(e.status.comparison.disabled_nodes.slice(0, 10), (he) => (a(), r("div", {
                    key: he,
                    class: "drift-list-item"
                  }, " • " + f(he), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), r("div", jm, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), r("div", Hm, [
                x(Ut, { level: "4" }, {
                  default: h(() => [...p[29] || (p[29] = [
                    $("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", Km, [
                  p[30] || (p[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                p[31] || (p[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (a(), r("div", qm, [...p[32] || (p[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            t("div", Ym, [
              x(re, {
                variant: "secondary",
                onClick: p[5] || (p[5] = (he) => w.$emit("close"))
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
}), Qm = /* @__PURE__ */ fe(Jm, [["__scopeId", "data-v-e2b37122"]]), Xm = { class: "health-section-header" }, Zm = { class: "suggestions-content" }, ev = { class: "suggestions-text" }, tv = { style: { "margin-top": "var(--cg-space-3)" } }, sv = {
  key: 1,
  class: "no-issues-text"
}, ov = /* @__PURE__ */ de({
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
    const C = z(() => {
      const N = n.status.workflows.analyzed || [], D = N.filter(
        (ee) => ee.unresolved_models_count > 0 || ee.ambiguous_models_count > 0
      );
      return D.length === 0 && n.status.missing_models_count > 0 ? N.filter((ee) => ee.sync_state === "synced") : D;
    });
    function b() {
      const N = C.value;
      N.length !== 0 && (v.value = !0, m("repair-missing-models", N.map((D) => D.name)));
    }
    function P() {
      v.value = !1;
    }
    s({ resetRepairingState: P, resetRepairingEnvironmentState: p, closeDetailModal: _ });
    const M = z(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), I = z(() => n.status.has_changes), S = z(() => {
      const N = n.status.git_changes;
      return N.nodes_added.length > 0 || N.nodes_removed.length > 0 || N.workflow_changes;
    }), q = z(() => n.status.has_changes || M.value), Y = z(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), W = z(() => n.status.git_changes.has_other_changes), E = z(() => {
      var N;
      return ((N = n.status.workflows.analyzed) == null ? void 0 : N.filter((D) => D.status === "broken")) || [];
    }), T = z(() => {
      var N;
      return ((N = n.status.workflows.analyzed) == null ? void 0 : N.filter(
        (D) => D.has_path_sync_issues && !D.has_issues
      )) || [];
    }), O = z(() => E.value.length > 0), le = z(() => O.value || T.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), Z = z(() => {
      const N = [];
      return n.status.workflows.new.length > 0 && N.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && N.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && N.push(`${n.status.workflows.deleted.length} deleted`), N.length > 0 ? `${N.join(", ")} workflow${N.length === 1 && !N[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), V = z(() => {
      var ee, Q;
      const N = [], D = n.status.comparison;
      return (ee = D.missing_nodes) != null && ee.length && N.push(`${D.missing_nodes.length} missing node${D.missing_nodes.length === 1 ? "" : "s"}`), (Q = D.extra_nodes) != null && Q.length && N.push(`${D.extra_nodes.length} untracked node${D.extra_nodes.length === 1 ? "" : "s"}`), N.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${N.join(" and ")}.`;
    }), A = z(() => {
      var ee, Q;
      const N = [], D = n.status.comparison;
      return (ee = D.extra_nodes) != null && ee.length && (D.extra_nodes.slice(0, 3).forEach((pe) => {
        N.push(`Untracked: ${pe}`);
      }), D.extra_nodes.length > 3 && N.push(`...and ${D.extra_nodes.length - 3} more untracked`)), (Q = D.missing_nodes) != null && Q.length && (D.missing_nodes.slice(0, 3).forEach((pe) => {
        N.push(`Missing: ${pe}`);
      }), D.missing_nodes.length > 3 && N.push(`...and ${D.missing_nodes.length - 3} more missing`)), N;
    });
    return (N, D) => (a(), r(K, null, [
      x(Pt, null, {
        header: h(() => [
          x(Rt, { title: "STATUS" })
        ]),
        content: h(() => [
          n.setupState === "no_workspace" ? (a(), L(Qt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: h(() => [
              x(re, {
                variant: "primary",
                size: "sm",
                onClick: D[0] || (D[0] = (ee) => N.$emit("start-setup"))
              }, {
                default: h(() => [...D[13] || (D[13] = [
                  $(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (a(), L(Qt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: h(() => [
              x(re, {
                variant: "primary",
                size: "sm",
                onClick: D[1] || (D[1] = (ee) => N.$emit("view-environments"))
              }, {
                default: h(() => [...D[14] || (D[14] = [
                  $(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (a(), L(Qt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: h(() => [
              x(re, {
                variant: "primary",
                size: "sm",
                onClick: D[2] || (D[2] = (ee) => N.$emit("create-environment"))
              }, {
                default: h(() => [...D[15] || (D[15] = [
                  $(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: D[4] || (D[4] = (ee) => i.value = !0),
            onMouseleave: D[5] || (D[5] = (ee) => i.value = !1)
          }, [
            t("div", Xm, [
              x(Ut, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...D[16] || (D[16] = [
                  $(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              x(qu, { name: "fade" }, {
                default: h(() => [
                  i.value ? (a(), L(re, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: h(() => [...D[17] || (D[17] = [
                      $(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            x(tf, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, so({
              left: h(() => [
                e.status.workflows.new.length ? (a(), L(ds, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (a(), L(ds, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (a(), L(ds, {
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
                  separator: M.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (a(), L(ds, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), L(ds, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (a(), L(ds, {
                  key: 2,
                  icon: "●",
                  count: Y.value,
                  label: Y.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                W.value ? (a(), L(ds, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                I.value && !S.value && !W.value ? (a(), L(ds, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                I.value ? y("", !0) : (a(), L(ds, {
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
                  D[19] || (D[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", Zm, [
                    t("span", ev, f(Z.value), 1),
                    x(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: D[3] || (D[3] = (ee) => N.$emit("commit-changes"))
                    }, {
                      default: h(() => [...D[18] || (D[18] = [
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
          e.status.is_detached_head ? (a(), L(Qt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              x(re, {
                variant: "primary",
                size: "sm",
                onClick: D[6] || (D[6] = (ee) => N.$emit("create-branch"))
              }, {
                default: h(() => [...D[20] || (D[20] = [
                  $(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", tv, [
            x(Ut, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...D[21] || (D[21] = [
                $(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            le.value ? (a(), r(K, { key: 0 }, [
              E.value.length > 0 ? (a(), L(Qt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: E.value.map((ee) => `${ee.name} — ${ee.issue_summary}`)
              }, {
                actions: h(() => [
                  x(re, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[7] || (D[7] = (ee) => N.$emit("view-workflows"))
                  }, {
                    default: h(() => [...D[22] || (D[22] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              T.value.length > 0 ? (a(), L(Qt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${T.value.length} workflow${T.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: T.value.map((ee) => `${ee.name} — ${ee.models_needing_path_sync_count} model path${ee.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  x(re, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[8] || (D[8] = (ee) => N.$emit("view-workflows"))
                  }, {
                    default: h(() => [...D[23] || (D[23] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !O.value ? (a(), L(Qt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  x(re, {
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
                  x(re, {
                    variant: "secondary",
                    size: "sm",
                    onClick: D[9] || (D[9] = (ee) => N.$emit("view-workflows"))
                  }, {
                    default: h(() => [...D[24] || (D[24] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (a(), L(Qt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: V.value,
                items: A.value
              }, {
                actions: h(() => [
                  x(re, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: h(() => [...D[25] || (D[25] = [
                      $(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  x(re, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[10] || (D[10] = (ee) => N.$emit("view-nodes"))
                  }, {
                    default: h(() => [...D[26] || (D[26] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (a(), L(Qt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: h(() => [
                  x(re, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[11] || (D[11] = (ee) => N.$emit("view-nodes"))
                  }, {
                    default: h(() => [...D[27] || (D[27] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : q.value ? (a(), r("span", sv, "No issues")) : (a(), L(ns, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      x(Qm, {
        show: l.value,
        status: e.status,
        "is-repairing": g.value,
        onClose: D[12] || (D[12] = (ee) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), nv = /* @__PURE__ */ fe(ov, [["__scopeId", "data-v-55fcd77f"]]), av = ["type", "value", "placeholder", "disabled"], lv = /* @__PURE__ */ de({
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
      class: xe(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = Ht((m) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Ht((m) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (m) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (m) => u.$emit("blur"))
    }, null, 42, av));
  }
}), Un = /* @__PURE__ */ fe(lv, [["__scopeId", "data-v-0380d08f"]]), iv = { class: "branch-create-form" }, rv = { class: "form-actions" }, cv = /* @__PURE__ */ de({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, n = k(""), l = z(() => {
      const u = n.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function i() {
      l.value && (o("create", n.value.trim()), n.value = "");
    }
    function c() {
      n.value = "", o("cancel");
    }
    return (u, d) => (a(), r("div", iv, [
      x(Un, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => n.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: i,
        onEscape: c
      }, null, 8, ["modelValue"]),
      t("div", rv, [
        x(re, {
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
        x(re, {
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
}), uv = /* @__PURE__ */ fe(cv, [["__scopeId", "data-v-7c500394"]]), dv = { class: "branch-list-item__indicator" }, fv = { class: "branch-list-item__name" }, mv = {
  key: 0,
  class: "branch-list-item__actions"
}, vv = {
  key: 0,
  class: "branch-list-item__current-label"
}, pv = /* @__PURE__ */ de({
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
      class: xe(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, [
      t("span", dv, f(e.isCurrent ? "●" : "○"), 1),
      t("span", fv, f(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (a(), r("div", mv, [
        He(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), r("span", vv, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), gv = /* @__PURE__ */ fe(pv, [["__scopeId", "data-v-c6581a24"]]), hv = {
  key: 2,
  class: "branch-list"
}, yv = /* @__PURE__ */ de({
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
    return (c, u) => (a(), L(Pt, null, {
      header: h(() => [
        x(Rt, { title: "BRANCHES" }, {
          actions: h(() => [
            n.value ? y("", !0) : (a(), L(re, {
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
        n.value ? (a(), L(uv, {
          key: 0,
          onCreate: l,
          onCancel: i
        })) : y("", !0),
        e.branches.length === 0 ? (a(), L(ns, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), r("div", hv, [
          (a(!0), r(K, null, ve(e.branches, (d) => (a(), L(gv, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: h(() => [
              d.is_current ? y("", !0) : (a(), L(re, {
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
              d.is_current ? y("", !0) : (a(), L(re, {
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
}), wv = /* @__PURE__ */ fe(yv, [["__scopeId", "data-v-86784ddd"]]), _v = { class: "commit-list" }, kv = /* @__PURE__ */ de({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (a(), r("div", _v, [
      He(s.$slots, "default", {}, void 0)
    ]));
  }
}), bv = /* @__PURE__ */ fe(kv, [["__scopeId", "data-v-8c5ee761"]]), $v = { class: "commit-hash" }, Cv = /* @__PURE__ */ de({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = z(() => s.hash.slice(0, s.length));
    return (n, l) => (a(), r("span", $v, f(o.value), 1));
  }
}), br = /* @__PURE__ */ fe(Cv, [["__scopeId", "data-v-7c333cc6"]]), xv = { class: "commit-message" }, Sv = { class: "commit-date" }, Iv = /* @__PURE__ */ de({
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
      class: xe(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      x(br, { hash: e.hash }, null, 8, ["hash"]),
      t("span", xv, f(e.message), 1),
      t("span", Sv, f(e.relativeDate), 1),
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
}), Ev = /* @__PURE__ */ fe(Iv, [["__scopeId", "data-v-dd7c621b"]]), Tv = /* @__PURE__ */ de({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (s, o) => (a(), L(Pt, null, {
      header: h(() => [
        x(Rt, { title: "HISTORY" })
      ]),
      content: h(() => [
        e.commits.length === 0 ? (a(), L(ns, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), L(bv, { key: 1 }, {
          default: h(() => [
            (a(!0), r(K, null, ve(e.commits, (n) => (a(), L(Ev, {
              key: n.hash,
              hash: n.short_hash || n.hash,
              message: n.message,
              "relative-date": n.date_relative || n.relative_date,
              onClick: (l) => s.$emit("select", n)
            }, {
              actions: h(() => [
                x(re, {
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
}), Pv = /* @__PURE__ */ fe(Tv, [["__scopeId", "data-v-981c3c64"]]), RP = Vs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const MP = [
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
], DP = {
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
}, Rv = [
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
], LP = [
  ...Rv,
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
  async function o(B, _e) {
    var Ot;
    if (!((Ot = window.app) != null && Ot.api))
      throw new Error("ComfyUI API not available");
    const Ae = await window.app.api.fetchApi(B, _e);
    if (!Ae.ok) {
      const cs = await Ae.json().catch(() => ({}));
      throw new Error(cs.error || cs.message || `Request failed: ${Ae.status}`);
    }
    const rt = await Ae.text();
    if (rt)
      return JSON.parse(rt);
  }
  async function n(B = !1) {
    return o(B ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(B, _e = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: B, allow_issues: _e })
    });
  }
  async function i(B = 10, _e = 0) {
    return o(`/v2/comfygit/log?limit=${B}&offset=${_e}`);
  }
  async function c(B) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: B })
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
  async function m(B) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: B, force: !0 })
    });
  }
  async function v() {
    return o("/v2/comfygit/branches");
  }
  async function g(B) {
    return o(`/v2/comfygit/commit/${B}`);
  }
  async function w(B, _e = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: B, force: _e })
    });
  }
  async function p(B, _e = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: B, start_point: _e })
    });
  }
  async function _(B, _e = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: B, force: _e })
    });
  }
  async function C(B, _e = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(B)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: _e })
    });
  }
  async function b() {
    try {
      return (await o("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const B = await n();
        return [{
          name: B.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + B.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: B.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: B.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function P(B, _e) {
    const Ae = { target_env: B };
    return _e && (Ae.workspace_path = _e), o("/v2/comfygit/switch_environment", {
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
  async function I(B) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(B)
    });
  }
  async function S() {
    return o("/v2/workspace/environments/create_status");
  }
  async function q(B = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${B}`);
  }
  async function Y(B) {
    return o(`/v2/workspace/environments/${B}`, {
      method: "DELETE"
    });
  }
  async function W(B = !1) {
    try {
      return o(B ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const _e = await n(B), Ae = [];
      return _e.workflows.new.forEach((rt) => {
        Ae.push({ name: rt, status: "new", missing_nodes: 0, missing_models: 0, path: rt });
      }), _e.workflows.modified.forEach((rt) => {
        Ae.push({ name: rt, status: "modified", missing_nodes: 0, missing_models: 0, path: rt });
      }), _e.workflows.synced.forEach((rt) => {
        Ae.push({ name: rt, status: "synced", missing_nodes: 0, missing_models: 0, path: rt });
      }), Ae;
    }
  }
  async function E(B) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(B)}/details`);
  }
  async function T(B) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(B)}/resolve`, {
      method: "POST"
    });
  }
  async function O(B, _e, Ae) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(B)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: _e, install_models: Ae })
    });
  }
  async function le(B, _e, Ae) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(B)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: _e, importance: Ae })
    });
  }
  async function Z() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function V() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function A(B) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(B)}`);
  }
  async function N(B) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: B })
    });
  }
  async function D(B, _e) {
    return o(`/v2/workspace/models/${B}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: _e })
    });
  }
  async function ee(B, _e) {
    return o(`/v2/workspace/models/${B}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: _e })
    });
  }
  async function Q(B) {
    return o(`/v2/workspace/models/${B}`, {
      method: "DELETE"
    });
  }
  async function pe(B) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(B)
    });
  }
  async function he() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Re() {
    return o("/v2/workspace/models/directory");
  }
  async function Fe(B) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: B })
    });
  }
  async function Ue(B) {
    const _e = new URLSearchParams({ url: B });
    return o(`/v2/workspace/huggingface/repo-info?${_e}`);
  }
  async function qe() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function Ne(B, _e = 10) {
    const Ae = new URLSearchParams({ query: B, limit: String(_e) });
    return o(`/v2/workspace/huggingface/search?${Ae}`);
  }
  async function Ie(B) {
    try {
      const _e = B ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(B)}` : "/v2/comfygit/config";
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
  async function Se(B, _e) {
    const Ae = _e ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(_e)}` : "/v2/comfygit/config";
    return o(Ae, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(B)
    });
  }
  async function ye(B, _e) {
    try {
      const Ae = new URLSearchParams();
      return B && Ae.append("level", B), _e && Ae.append("lines", _e.toString()), o(`/v2/comfygit/debug/logs?${Ae}`);
    } catch {
      return [];
    }
  }
  async function me(B, _e) {
    try {
      const Ae = new URLSearchParams();
      return B && Ae.append("level", B), _e && Ae.append("lines", _e.toString()), o(`/v2/workspace/debug/logs?${Ae}`);
    } catch {
      return [];
    }
  }
  async function Pe() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function Ee() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function U(B, _e) {
    try {
      const Ae = new URLSearchParams();
      return B && Ae.append("level", B), _e && Ae.append("lines", _e.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Ae}`);
    } catch {
      return [];
    }
  }
  async function R() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function F(B) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: B })
    });
  }
  async function j() {
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
  async function te(B) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(B)}/track-dev`, {
      method: "POST"
    });
  }
  async function ie(B) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(B)}/install`, {
      method: "POST"
    });
  }
  async function ge(B) {
    var Ot, cs, Io, Eo;
    const _e = $r(), Ae = ((cs = (Ot = window.app) == null ? void 0 : Ot.api) == null ? void 0 : cs.clientId) ?? ((Eo = (Io = window.app) == null ? void 0 : Io.api) == null ? void 0 : Eo.initialClientId) ?? "comfygit-panel", rt = {
      kind: "install",
      params: {
        id: B.id,
        version: B.version || B.selected_version || "latest",
        selected_version: B.selected_version || "latest",
        repository: B.repository || "",
        mode: B.mode || "remote",
        channel: B.channel || "default"
      },
      ui_id: _e,
      client_id: Ae
    };
    return await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rt)
    }), console.log("[ComfyGit] Task queued with ui_id:", _e, "for package:", B.id), o("/v2/manager/queue/start").catch((Yr) => {
      console.error("[ComfyGit] Queue start failed:", Yr);
    }), { ui_id: _e };
  }
  async function ke(B) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(B)}/update`, {
      method: "POST"
    });
  }
  async function ne(B) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(B)}`, {
      method: "DELETE"
    });
  }
  async function ue() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Me(B, _e) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: B, url: _e })
    });
  }
  async function Ce(B) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(B)}`, {
      method: "DELETE"
    });
  }
  async function oe(B, _e, Ae) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(B)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: _e, push_url: Ae })
    });
  }
  async function X(B, _e) {
    const Ae = {};
    return _e && (Ae["X-Git-Auth-Token"] = _e), o(`/v2/comfygit/remotes/${encodeURIComponent(B)}/fetch`, {
      method: "POST",
      headers: Ae
    });
  }
  async function De(B) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(B)}/status`);
    } catch {
      return null;
    }
  }
  async function be(B = "skip", _e = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: B,
        remove_extra_nodes: _e
      })
    });
  }
  async function we(B, _e) {
    const Ae = _e ? `/v2/comfygit/remotes/${encodeURIComponent(B)}/pull-preview?branch=${encodeURIComponent(_e)}` : `/v2/comfygit/remotes/${encodeURIComponent(B)}/pull-preview`;
    return o(Ae);
  }
  async function H(B, _e = {}) {
    const Ae = { "Content-Type": "application/json" };
    return _e.authToken && (Ae["X-Git-Auth-Token"] = _e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(B)}/pull`, {
      method: "POST",
      headers: Ae,
      body: JSON.stringify({
        model_strategy: _e.modelStrategy || "skip",
        force: _e.force || !1,
        resolutions: _e.resolutions
      })
    });
  }
  async function G(B, _e) {
    const Ae = _e ? `/v2/comfygit/remotes/${encodeURIComponent(B)}/push-preview?branch=${encodeURIComponent(_e)}` : `/v2/comfygit/remotes/${encodeURIComponent(B)}/push-preview`;
    return o(Ae);
  }
  async function ce(B, _e = {}) {
    const Ae = { "Content-Type": "application/json" };
    return _e.authToken && (Ae["X-Git-Auth-Token"] = _e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(B)}/push`, {
      method: "POST",
      headers: Ae,
      body: JSON.stringify({ force: _e.force || !1 })
    });
  }
  async function Be(B, _e) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(B)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: _e })
    });
  }
  async function Xe(B) {
    const _e = {
      success: 0,
      failed: []
    };
    for (const Ae of B)
      try {
        await T(Ae), _e.success++;
      } catch (rt) {
        _e.failed.push({
          name: Ae,
          error: rt instanceof Error ? rt.message : "Unknown error"
        });
      }
    return _e;
  }
  async function vt(B) {
    var rt;
    const _e = new FormData();
    if (_e.append("file", B), !((rt = window.app) != null && rt.api))
      throw new Error("ComfyUI API not available");
    const Ae = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: _e
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ae.ok) {
      const Ot = await Ae.json().catch(() => ({}));
      throw new Error(Ot.error || `Preview failed: ${Ae.status}`);
    }
    return Ae.json();
  }
  async function at(B) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(B)}`
    );
  }
  async function ut(B, _e, Ae, rt) {
    var Io;
    const Ot = new FormData();
    if (Ot.append("file", B), Ot.append("name", _e), Ot.append("model_strategy", Ae), Ot.append("torch_backend", rt), !((Io = window.app) != null && Io.api))
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
  async function Ft(B) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: B })
    });
  }
  async function Yt(B, _e, Ae, rt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: B,
        name: _e,
        model_strategy: Ae,
        torch_backend: rt
      })
    });
  }
  async function Ws() {
    return o("/v2/setup/status");
  }
  async function Ms(B) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(B)
    });
  }
  async function no() {
    return o("/v2/setup/initialize_status");
  }
  async function Co(B) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(B)
    });
  }
  async function xo() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function So() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function $e(B, _e) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: B, save_key: _e })
    });
  }
  async function se() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function je(B) {
    const _e = B ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(B)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(_e);
  }
  async function gt(B) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(B)
    });
  }
  async function Jt() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function ys(B) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(B)}`, {
      method: "DELETE"
    });
  }
  async function ws(B) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(B)}/stop`, {
      method: "POST"
    });
  }
  async function ls(B) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(B)}/start`, {
      method: "POST"
    });
  }
  async function Oe(B) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(B)}/status`);
  }
  async function is(B) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: B })
    });
  }
  async function ae(B = !1) {
    return o(B ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function J() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Le() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function Ge(B) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(B)
    });
  }
  async function ot(B) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(B)}`, {
      method: "DELETE"
    });
  }
  async function mt(B) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(B)
    });
  }
  async function Dt() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function rs(B) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(B)}/info`);
  }
  async function Gs(B) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(B)}/instances`);
  }
  async function js(B, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(B)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(_e)
    });
  }
  async function ln(B, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(B)}/instances/${encodeURIComponent(_e)}/start`, {
      method: "POST"
    });
  }
  async function rn(B, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(B)}/instances/${encodeURIComponent(_e)}/stop`, {
      method: "POST"
    });
  }
  async function cn(B, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(B)}/instances/${encodeURIComponent(_e)}`, {
      method: "DELETE"
    });
  }
  async function un(B) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: B })
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
    switchEnvironment: P,
    getSwitchProgress: M,
    createEnvironment: I,
    getCreateProgress: S,
    getComfyUIReleases: q,
    deleteEnvironment: Y,
    // Workflow Management
    getWorkflows: W,
    getWorkflowDetails: E,
    resolveWorkflow: T,
    installWorkflowDeps: O,
    setModelImportance: le,
    // Model Management
    getEnvironmentModels: Z,
    getWorkspaceModels: V,
    getModelDetails: A,
    openFileLocation: N,
    addModelSource: D,
    removeModelSource: ee,
    deleteModel: Q,
    downloadModel: pe,
    scanWorkspaceModels: he,
    getModelsDirectory: Re,
    setModelsDirectory: Fe,
    getHuggingFaceRepoInfo: Ue,
    getModelsSubdirectories: qe,
    searchHuggingFaceRepos: Ne,
    // Settings
    getConfig: Ie,
    updateConfig: Se,
    // Debug/Logs
    getEnvironmentLogs: ye,
    getWorkspaceLogs: me,
    getEnvironmentLogPath: Pe,
    getWorkspaceLogPath: Ee,
    getOrchestratorLogs: U,
    getOrchestratorLogPath: R,
    openFile: F,
    // Node Management
    getNodes: j,
    trackNodeAsDev: te,
    installNode: ie,
    queueNodeInstall: ge,
    updateNode: ke,
    uninstallNode: ne,
    // Git Remotes
    getRemotes: ue,
    addRemote: Me,
    removeRemote: Ce,
    updateRemoteUrl: oe,
    fetchRemote: X,
    getRemoteSyncStatus: De,
    // Push/Pull
    getPullPreview: we,
    pullFromRemote: H,
    getPushPreview: G,
    pushToRemote: ce,
    validateMerge: Be,
    // Environment Sync
    syncEnvironmentManually: be,
    // Workflow Repair
    repairWorkflowModels: Xe,
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
    testRunPodConnection: $e,
    getNetworkVolumes: se,
    getRunPodGpuTypes: je,
    deployToRunPod: gt,
    getRunPodPods: Jt,
    terminateRunPodPod: ys,
    stopRunPodPod: ws,
    startRunPodPod: ls,
    getDeploymentStatus: Oe,
    exportDeployPackage: is,
    getStoredRunPodKey: ae,
    clearRunPodKey: J,
    // Custom Worker Operations
    getCustomWorkers: Le,
    addCustomWorker: Ge,
    removeCustomWorker: ot,
    testWorkerConnection: mt,
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
function Mv() {
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
const Dv = { class: "base-modal-header" }, Lv = {
  key: 0,
  class: "base-modal-title"
}, Ov = { class: "base-modal-body" }, Av = {
  key: 0,
  class: "base-modal-loading"
}, Uv = {
  key: 1,
  class: "base-modal-error"
}, Nv = {
  key: 0,
  class: "base-modal-footer"
}, zv = /* @__PURE__ */ de({
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
    }), oo(() => {
      document.removeEventListener("keydown", i), document.body.style.overflow = "";
    }), (c, u) => (a(), L(Ct, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: xe(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = it(() => {
          }, ["stop"]))
        }, [
          t("div", Dv, [
            He(c.$slots, "header", {}, () => [
              e.title ? (a(), r("h3", Lv, f(e.title), 1)) : y("", !0)
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
          t("div", Ov, [
            e.loading ? (a(), r("div", Av, "Loading...")) : e.error ? (a(), r("div", Uv, f(e.error), 1)) : He(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (a(), r("div", Nv, [
            He(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), ft = /* @__PURE__ */ fe(zv, [["__scopeId", "data-v-8dab1081"]]), Fv = ["type", "disabled"], Bv = {
  key: 0,
  class: "spinner"
}, Vv = /* @__PURE__ */ de({
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
      class: xe(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), r("span", Bv)) : y("", !0),
      He(s.$slots, "default", {}, void 0)
    ], 10, Fv));
  }
}), Te = /* @__PURE__ */ fe(Vv, [["__scopeId", "data-v-f3452606"]]), Wv = {
  key: 0,
  class: "base-title-count"
}, Gv = /* @__PURE__ */ de({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (a(), L(Qa(`h${e.level}`), {
      class: xe(["base-title", e.variant])
    }, {
      default: h(() => [
        He(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), r("span", Wv, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Go = /* @__PURE__ */ fe(Gv, [["__scopeId", "data-v-5a01561d"]]), jv = ["value", "disabled"], Hv = {
  key: 0,
  value: "",
  disabled: ""
}, Kv = ["value"], qv = {
  key: 0,
  class: "base-select-error"
}, Yv = /* @__PURE__ */ de({
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
      class: xe(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: xe(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (i) => n.$emit("update:modelValue", i.target.value))
      }, [
        e.placeholder ? (a(), r("option", Hv, f(e.placeholder), 1)) : y("", !0),
        (a(!0), r(K, null, ve(e.options, (i) => (a(), r("option", {
          key: s(i),
          value: s(i)
        }, f(o(i)), 9, Kv))), 128))
      ], 42, jv),
      e.error ? (a(), r("span", qv, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Cr = /* @__PURE__ */ fe(Yv, [["__scopeId", "data-v-7436d745"]]), Jv = { class: "popover-header" }, Qv = { class: "popover-title" }, Xv = { class: "popover-content" }, Zv = {
  key: 0,
  class: "popover-actions"
}, ep = /* @__PURE__ */ de({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (a(), L(Ct, { to: "body" }, [
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
          t("div", Jv, [
            t("h4", Qv, f(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", Xv, [
            He(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (a(), r("div", Zv, [
            He(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), as = /* @__PURE__ */ fe(ep, [["__scopeId", "data-v-42815ace"]]), tp = { class: "detail-section" }, sp = {
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
}, kp = /* @__PURE__ */ de({
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
    function C(E) {
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
    function P(E) {
      if (!E.loaded_by || E.loaded_by.length === 0) return [];
      const T = E.hash || E.filename;
      return p.value.has(T) ? E.loaded_by : E.loaded_by.slice(0, 3);
    }
    function M(E) {
      return p.value.has(E);
    }
    function I(E) {
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
    function q(E, T) {
      g.value[E] = T, v.value = !0;
    }
    async function Y(E) {
      try {
        await c(E);
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to open file location";
      }
    }
    async function W() {
      if (!v.value) {
        n("close");
        return;
      }
      d.value = !0, m.value = null;
      try {
        for (const [E, T] of Object.entries(g.value))
          await i(o.workflowName, E, T);
        n("refresh"), n("close");
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return Qe(S), (E, T) => (a(), r(K, null, [
      x(ft, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: d.value,
        error: m.value || void 0,
        onClose: T[4] || (T[4] = (O) => n("close"))
      }, {
        body: h(() => [
          u.value ? (a(), r(K, { key: 0 }, [
            t("section", tp, [
              x(Go, { variant: "section" }, {
                default: h(() => [
                  $("MODELS USED (" + f(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (a(), r("div", sp, " No models used in this workflow ")) : y("", !0),
              (a(!0), r(K, null, ve(u.value.models, (O) => {
                var le;
                return a(), r("div", {
                  key: O.hash || O.filename,
                  class: "model-card"
                }, [
                  t("div", op, [
                    T[6] || (T[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", np, f(O.filename), 1)
                  ]),
                  t("div", ap, [
                    t("div", lp, [
                      T[7] || (T[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: xe(["value", C(O.status)])
                      }, f(b(O.status)), 3)
                    ]),
                    t("div", ip, [
                      t("span", rp, [
                        T[8] || (T[8] = $(" Importance: ", -1)),
                        x(kr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: T[0] || (T[0] = (Z) => w.value = !0)
                        })
                      ]),
                      x(Cr, {
                        "model-value": g.value[O.filename] || O.importance,
                        options: _,
                        "onUpdate:modelValue": (Z) => q(O.filename, Z)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    O.loaded_by && O.loaded_by.length > 0 ? (a(), r("div", cp, [
                      T[9] || (T[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", up, [
                        (a(!0), r(K, null, ve(P(O), (Z, V) => (a(), r("div", {
                          key: `${Z.node_id}-${V}`,
                          class: "node-reference"
                        }, f(Z.node_type) + " (Node #" + f(Z.node_id) + ") ", 1))), 128)),
                        O.loaded_by.length > 3 ? (a(), r("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (Z) => I(O.hash || O.filename)
                        }, f(M(O.hash || O.filename) ? "▼ Show less" : `▶ View all (${O.loaded_by.length})`), 9, dp)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    O.size_mb ? (a(), r("div", fp, [
                      T[10] || (T[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", mp, f(O.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    O.has_category_mismatch ? (a(), r("div", vp, [
                      T[13] || (T[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", pp, [
                        T[11] || (T[11] = $(" In ", -1)),
                        t("code", null, f(O.actual_category) + "/", 1),
                        T[12] || (T[12] = $(" but loader needs ", -1)),
                        t("code", null, f((le = O.expected_categories) == null ? void 0 : le[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  O.status !== "available" ? (a(), r("div", gp, [
                    O.status === "downloadable" ? (a(), L(Te, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: T[1] || (T[1] = (Z) => n("resolve"))
                    }, {
                      default: h(() => [...T[14] || (T[14] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    })) : O.status === "category_mismatch" && O.file_path ? (a(), L(Te, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (Z) => Y(O.file_path)
                    }, {
                      default: h(() => [...T[15] || (T[15] = [
                        $(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : O.status !== "path_mismatch" ? (a(), L(Te, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: T[2] || (T[2] = (Z) => n("resolve"))
                    }, {
                      default: h(() => [...T[16] || (T[16] = [
                        $(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            t("section", hp, [
              x(Go, { variant: "section" }, {
                default: h(() => [
                  $("NODES USED (" + f(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (a(), r("div", yp, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), r(K, null, ve(u.value.nodes, (O) => (a(), r("div", {
                key: O.name,
                class: "node-item"
              }, [
                t("span", {
                  class: xe(["node-status", O.status === "installed" ? "installed" : "missing"])
                }, f(O.status === "installed" ? "✓" : "✕"), 3),
                t("span", wp, f(O.name), 1),
                O.version ? (a(), r("span", _p, "v" + f(O.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          x(Te, {
            variant: "secondary",
            onClick: T[3] || (T[3] = (O) => n("close"))
          }, {
            default: h(() => [...T[17] || (T[17] = [
              $(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (a(), L(Te, {
            key: 0,
            variant: "primary",
            onClick: W
          }, {
            default: h(() => [...T[18] || (T[18] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      x(as, {
        show: w.value,
        title: "Model Importance Levels",
        onClose: T[5] || (T[5] = (O) => w.value = !1)
      }, {
        content: h(() => [...T[19] || (T[19] = [
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
}), bp = /* @__PURE__ */ fe(kp, [["__scopeId", "data-v-668728e6"]]), Ye = Vs({
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
    for (const P of b) {
      if (Ye.items.some(
        (S) => S.url === P.url && S.targetPath === P.targetPath && ["queued", "downloading", "paused", "completed"].includes(S.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${P.filename}`);
        continue;
      }
      const I = {
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
      Ye.items.push(I);
    }
    Ye.status === "idle" && uo();
  }
  async function s(b) {
    const P = ma(b);
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
        const M = Ye.items.findIndex((I) => I.id === b);
        M >= 0 && Ye.items.splice(M, 1);
      }
    }
  }
  function o(b) {
    const P = ma(b);
    !P || P.status !== "failed" || (P.status = "queued", P.error = void 0, P.progress = 0, P.downloaded = 0, Ye.status === "idle" && uo());
  }
  function n(b) {
    const P = ma(b);
    !P || P.status !== "paused" || (P.status = "queued", Ye.status === "idle" && uo());
  }
  function l() {
    const b = Ye.items.filter((P) => P.status === "paused");
    for (const P of b)
      P.status = "queued";
    Ye.status === "idle" && uo();
  }
  function i(b) {
    const P = Ye.items.findIndex((M) => M.id === b);
    P >= 0 && ["completed", "failed", "paused"].includes(Ye.items[P].status) && Ye.items.splice(P, 1);
  }
  function c() {
    Ye.items = Ye.items.filter((b) => b.status !== "completed");
  }
  function u() {
    Ye.items = Ye.items.filter((b) => b.status !== "failed");
  }
  const d = z(
    () => Ye.items.find((b) => b.status === "downloading")
  ), m = z(
    () => Ye.items.filter((b) => b.status === "queued")
  ), v = z(
    () => Ye.items.filter((b) => b.status === "completed")
  ), g = z(
    () => Ye.items.filter((b) => b.status === "failed")
  ), w = z(
    () => Ye.items.filter((b) => b.status === "paused")
  ), p = z(() => Ye.items.length > 0), _ = z(
    () => Ye.items.filter((b) => b.status === "queued" || b.status === "downloading").length
  ), C = z(
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
function Sr() {
  const e = k(null), s = k(null), o = k([]), n = k([]), l = k(!1), i = k(null);
  async function c(M, I) {
    var q;
    if (!((q = window.app) != null && q.api))
      throw new Error("ComfyUI API not available");
    const S = await window.app.api.fetchApi(M, I);
    if (!S.ok) {
      const Y = await S.json().catch(() => ({})), W = Y.error || Y.message || `Request failed: ${S.status}`;
      throw new Error(W);
    }
    return S.json();
  }
  async function u(M) {
    l.value = !0, i.value = null;
    try {
      let I;
      return co() || (I = await c(
        `/v2/comfygit/workflow/${M}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), e.value = I, I;
    } catch (I) {
      const S = I instanceof Error ? I.message : "Unknown error occurred";
      throw i.value = S, I;
    } finally {
      l.value = !1;
    }
  }
  async function d(M, I, S, q) {
    l.value = !0, i.value = null;
    try {
      let Y;
      if (!co()) {
        const W = Object.fromEntries(I), E = Object.fromEntries(S), T = q ? Array.from(q) : [];
        Y = await c(
          `/v2/comfygit/workflow/${M}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: W,
              model_choices: E,
              skipped_packages: T
            })
          }
        );
      }
      return s.value = Y, Y;
    } catch (Y) {
      const W = Y instanceof Error ? Y.message : "Unknown error occurred";
      throw i.value = W, Y;
    } finally {
      l.value = !1;
    }
  }
  async function m(M, I = 10) {
    l.value = !0, i.value = null;
    try {
      let S;
      return co() || (S = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: M, limit: I })
        }
      )), o.value = S.results, S.results;
    } catch (S) {
      const q = S instanceof Error ? S.message : "Unknown error occurred";
      throw i.value = q, S;
    } finally {
      l.value = !1;
    }
  }
  async function v(M, I = 10) {
    l.value = !0, i.value = null;
    try {
      let S;
      return co() || (S = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: M, limit: I })
        }
      )), n.value = S.results, S.results;
    } catch (S) {
      const q = S instanceof Error ? S.message : "Unknown error occurred";
      throw i.value = q, S;
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
    } catch (I) {
      const S = I instanceof Error ? I.message : "Failed to install nodes";
      throw g.installError = S, I;
    }
  }
  async function _(M) {
    var S;
    const I = await c(
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
      const q = new Map(((S = I.failed) == null ? void 0 : S.map((Y) => [Y.node_id, Y.error])) || []);
      for (let Y = 0; Y < g.nodesToInstall.length; Y++) {
        const W = g.nodesToInstall[Y], E = q.get(W);
        g.nodeInstallProgress.completedNodes.push({
          node_id: W,
          success: !E,
          error: E
        });
      }
    }
    return g.nodesInstalled = I.nodes_installed, g.needsRestart = I.nodes_installed.length > 0, I.failed && I.failed.length > 0 && (g.installError = `${I.failed.length} package(s) failed to install`), I;
  }
  async function C(M, I, S) {
    w(), g.phase = "resolving", i.value = null;
    const q = Object.fromEntries(I), Y = Object.fromEntries(S);
    try {
      const W = await fetch(`/v2/comfygit/workflow/${M}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: q,
          model_choices: Y
        })
      });
      if (!W.ok)
        throw new Error(`Request failed: ${W.status}`);
      if (!W.body)
        throw new Error("No response body");
      const E = W.body.getReader(), T = new TextDecoder();
      let O = "";
      for (; ; ) {
        const { done: le, value: Z } = await E.read();
        if (le) break;
        O += T.decode(Z, { stream: !0 });
        const V = O.split(`

`);
        O = V.pop() || "";
        for (const A of V) {
          if (!A.trim()) continue;
          const N = A.split(`
`);
          let D = "", ee = "";
          for (const Q of N)
            Q.startsWith("event: ") ? D = Q.slice(7) : Q.startsWith("data: ") && (ee = Q.slice(6));
          if (ee)
            try {
              const Q = JSON.parse(ee);
              b(D, Q);
            } catch (Q) {
              console.warn("Failed to parse SSE event:", Q);
            }
        }
      }
    } catch (W) {
      const E = W instanceof Error ? W.message : "Unknown error occurred";
      throw i.value = E, g.error = E, g.phase = "error", W;
    }
  }
  function b(M, I) {
    switch (M) {
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
  function P(M, I) {
    const { addToQueue: S } = bo(), q = I.filter((Y) => Y.url && Y.target_path).map((Y) => ({
      workflow: M,
      filename: Y.filename,
      url: Y.url,
      targetPath: Y.target_path,
      size: Y.size || 0,
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
    progress: g,
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
const xp = { class: "resolution-stepper" }, Sp = { class: "stepper-header" }, Ip = ["onClick"], Ep = {
  key: 0,
  class: "step-icon"
}, Tp = {
  key: 1,
  class: "step-number"
}, Pp = { class: "step-label" }, Rp = {
  key: 0,
  class: "step-connector"
}, Mp = { class: "stepper-content" }, Dp = /* @__PURE__ */ de({
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
        (a(!0), r(K, null, ve(e.steps, (g, w) => (a(), r("div", {
          key: g.id,
          class: xe(["step", {
            active: e.currentStep === g.id,
            completed: l(g.id),
            "in-progress": i(g.id),
            disabled: u(g.id)
          }]),
          onClick: (p) => d(g.id)
        }, [
          t("div", {
            class: xe(["step-indicator", c(g.id)])
          }, [
            l(g.id) ? (a(), r("span", Ep, "✓")) : (a(), r("span", Tp, f(w + 1), 1))
          ], 2),
          t("div", Pp, f(g.label), 1),
          w < e.steps.length - 1 ? (a(), r("div", Rp)) : y("", !0)
        ], 10, Ip))), 128))
      ]),
      t("div", Mp, [
        He(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Lp = /* @__PURE__ */ fe(Dp, [["__scopeId", "data-v-2a7b3af8"]]), Op = /* @__PURE__ */ de({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = z(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), n = z(() => `confidence-${o.value}`), l = z(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (i, c) => (a(), r("span", {
      class: xe(["confidence-badge", n.value, e.size])
    }, f(l.value), 3));
  }
}), Nn = /* @__PURE__ */ fe(Op, [["__scopeId", "data-v-17ec4b80"]]), Ap = { class: "node-info" }, Up = { class: "node-info-text" }, Np = { class: "item-body" }, zp = {
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
}, cg = { class: "action-buttons" }, ug = /* @__PURE__ */ de({
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
      class: xe(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: i.value }])
    }, [
      t("div", Ap, [
        t("span", Up, [
          m[7] || (m[7] = $("Node type: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: xe(["status-badge", c.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Np, [
        i.value ? (a(), r("div", zp, [
          x(Te, {
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
            (a(!0), r(K, null, ve(e.options, (v, g) => (a(), r("label", {
              key: v.package_id,
              class: xe(["option-card", { selected: e.selectedOptionIndex === g }]),
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
                  x(Nn, {
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
            x(Te, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                $(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            x(Te, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            x(Te, {
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
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), r(K, { key: 1 }, [
            m[14] || (m[14] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", Zp, [
              (a(!0), r(K, null, ve(e.searchResults.slice(0, 5), (v, g) => (a(), r("label", {
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
                    x(Nn, {
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
            x(Te, {
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
            x(Te, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[16] || (m[16] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            x(Te, {
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
}), dg = /* @__PURE__ */ fe(ug, [["__scopeId", "data-v-c2997d1d"]]), fg = { class: "item-navigator" }, mg = { class: "nav-item-info" }, vg = ["title"], pg = { class: "nav-controls" }, gg = { class: "nav-arrows" }, hg = ["disabled"], yg = ["disabled"], wg = { class: "nav-position" }, _g = /* @__PURE__ */ de({
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
}), Ir = /* @__PURE__ */ fe(_g, [["__scopeId", "data-v-74af7920"]]), kg = ["type", "value", "placeholder", "disabled"], bg = {
  key: 0,
  class: "base-input-error"
}, $g = /* @__PURE__ */ de({
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
          o[1] || (o[1] = Ht((n) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = Ht((n) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, kg),
      e.error ? (a(), r("span", bg, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Tt = /* @__PURE__ */ fe($g, [["__scopeId", "data-v-9ba02cdc"]]), Cg = { class: "node-resolution-step" }, xg = {
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
}, Qg = { class: "node-manual-entry-modal" }, Xg = { class: "node-modal-body" }, Zg = { class: "node-modal-actions" }, eh = /* @__PURE__ */ de({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: s }) {
    const o = e, n = s, { searchNodes: l } = Sr(), i = k(0), c = k(!1), u = k(!1), d = k(""), m = k(""), v = k([]), g = k(!1), w = k(/* @__PURE__ */ new Map()), p = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function C() {
      _.value && Q(), _.value = !1;
    }
    const b = z(() => o.nodes[i.value]), P = z(() => o.nodes.filter((Ie) => o.nodeChoices.has(Ie.node_type)).length), M = z(() => b.value ? w.value.get(b.value.node_type) || [] : []), I = z(() => b.value ? p.value.has(b.value.node_type) : !1);
    yt(b, async (Ie) => {
      var Se;
      Ie && ((Se = Ie.options) != null && Se.length || w.value.has(Ie.node_type) || p.value.has(Ie.node_type) || o.nodeChoices.has(Ie.node_type) || await S(Ie.node_type));
    }, { immediate: !0 });
    async function S(Ie) {
      p.value.add(Ie);
      try {
        const Se = await l(Ie, 5);
        w.value.set(Ie, Se);
      } catch {
        w.value.set(Ie, []);
      } finally {
        p.value.delete(Ie);
      }
    }
    const q = z(() => o.autoResolvedPackages.filter((Ie) => !o.skippedPackages.has(Ie.package_id)).length);
    function Y(Ie) {
      return o.skippedPackages.has(Ie);
    }
    function W(Ie) {
      n("package-skip", Ie);
    }
    const E = z(() => {
      var Se;
      if (!b.value) return "not-found";
      const Ie = o.nodeChoices.get(b.value.node_type);
      if (Ie)
        switch (Ie.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (Se = b.value.options) != null && Se.length ? "ambiguous" : "not-found";
    }), T = z(() => {
      var Se;
      if (!b.value) return;
      const Ie = o.nodeChoices.get(b.value.node_type);
      if (Ie)
        switch (Ie.action) {
          case "install":
            return Ie.package_id ? `→ ${Ie.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (Se = b.value.options) != null && Se.length ? `${b.value.options.length} matches` : "Not Found";
    });
    function O(Ie) {
      Ie >= 0 && Ie < o.nodes.length && (i.value = Ie);
    }
    function le() {
      var Ie;
      for (let Se = i.value + 1; Se < o.nodes.length; Se++) {
        const ye = o.nodes[Se];
        if (!((Ie = o.nodeChoices) != null && Ie.has(ye.node_type))) {
          O(Se);
          return;
        }
      }
    }
    function Z() {
      b.value && (n("mark-optional", b.value.node_type), _t(() => le()));
    }
    function V() {
      b.value && (n("skip", b.value.node_type), _t(() => le()));
    }
    function A(Ie) {
      b.value && (n("option-selected", b.value.node_type, Ie), _t(() => le()));
    }
    function N() {
      b.value && n("clear-choice", b.value.node_type);
    }
    function D() {
      b.value && (d.value = b.value.node_type, v.value = M.value, c.value = !0, Fe(d.value));
    }
    function ee() {
      m.value = "", u.value = !0;
    }
    function Q() {
      c.value = !1, d.value = "", v.value = [];
    }
    function pe() {
      u.value = !1, m.value = "";
    }
    let he = null;
    function Re() {
      he && clearTimeout(he), he = setTimeout(() => {
        Fe(d.value);
      }, 300);
    }
    async function Fe(Ie) {
      if (!Ie.trim()) {
        v.value = [];
        return;
      }
      g.value = !0;
      try {
        v.value = await l(Ie, 10);
      } catch {
        v.value = [];
      } finally {
        g.value = !1;
      }
    }
    function Ue(Ie) {
      b.value && (n("manual-entry", b.value.node_type, Ie.package_id), Q(), _t(() => le()));
    }
    function qe(Ie) {
      b.value && (n("manual-entry", b.value.node_type, Ie.package_id), _t(() => le()));
    }
    function Ne() {
      !b.value || !m.value.trim() || (n("manual-entry", b.value.node_type, m.value.trim()), pe(), _t(() => le()));
    }
    return (Ie, Se) => {
      var ye, me;
      return a(), r("div", Cg, [
        e.autoResolvedPackages.length > 0 ? (a(), r("div", xg, [
          t("div", Sg, [
            Se[6] || (Se[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", Ig, f(q.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", Eg, [
            (a(!0), r(K, null, ve(e.autoResolvedPackages, (Pe) => (a(), r("div", {
              key: Pe.package_id,
              class: "resolved-package-item"
            }, [
              t("div", Tg, [
                t("code", Pg, f(Pe.package_id), 1),
                t("span", Rg, f(Pe.node_types_count) + " node type" + f(Pe.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", Mg, [
                Y(Pe.package_id) ? (a(), r("span", Lg, " SKIPPED ")) : (a(), r("span", Dg, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (Ee) => W(Pe.package_id)
                }, f(Y(Pe.package_id) ? "Include" : "Skip"), 9, Og)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), r("div", Ag)) : y("", !0),
        e.nodes.length > 0 ? (a(), r(K, { key: 2 }, [
          t("div", Ug, [
            Se[7] || (Se[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", Ng, f(P.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          b.value ? (a(), L(Ir, {
            key: 0,
            "item-name": b.value.node_type,
            "current-index": i.value,
            "total-items": e.nodes.length,
            onPrev: Se[0] || (Se[0] = (Pe) => O(i.value - 1)),
            onNext: Se[1] || (Se[1] = (Pe) => O(i.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          b.value ? (a(), r("div", zg, [
            x(dg, {
              "node-type": b.value.node_type,
              "has-multiple-options": !!((ye = b.value.options) != null && ye.length),
              options: b.value.options,
              choice: (me = e.nodeChoices) == null ? void 0 : me.get(b.value.node_type),
              status: E.value,
              "status-label": T.value,
              "search-results": M.value,
              "is-searching": I.value,
              onMarkOptional: Z,
              onSkip: V,
              onManualEntry: ee,
              onSearch: D,
              onOptionSelected: A,
              onClearChoice: N,
              onSearchResultSelected: qe
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), r("div", Fg, [...Se[8] || (Se[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), L(Ct, { to: "body" }, [
          c.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: Se[4] || (Se[4] = it((Pe) => _.value = !0, ["self"])),
            onMouseup: it(C, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: Se[3] || (Se[3] = (Pe) => _.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                Se[9] || (Se[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: Q
                }, "✕")
              ]),
              t("div", Bg, [
                x(Tt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": Se[2] || (Se[2] = (Pe) => d.value = Pe),
                  placeholder: "Search by node type, package name...",
                  onInput: Re
                }, null, 8, ["modelValue"]),
                t("div", Vg, [
                  v.value.length > 0 ? (a(), r("div", Wg, [
                    (a(!0), r(K, null, ve(v.value, (Pe) => (a(), r("div", {
                      key: Pe.package_id,
                      class: "node-search-result-item",
                      onClick: (Ee) => Ue(Pe)
                    }, [
                      t("div", jg, [
                        t("code", Hg, f(Pe.package_id), 1),
                        Pe.match_confidence ? (a(), L(Nn, {
                          key: 0,
                          confidence: Pe.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      Pe.description ? (a(), r("div", Kg, f(Pe.description), 1)) : y("", !0)
                    ], 8, Gg))), 128))
                  ])) : g.value ? (a(), r("div", qg, "Searching...")) : d.value ? (a(), r("div", Yg, 'No packages found matching "' + f(d.value) + '"', 1)) : (a(), r("div", Jg, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (a(), L(Ct, { to: "body" }, [
          u.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: it(pe, ["self"])
          }, [
            t("div", Qg, [
              t("div", { class: "node-modal-header" }, [
                Se[10] || (Se[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: pe
                }, "✕")
              ]),
              t("div", Xg, [
                x(Tt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": Se[5] || (Se[5] = (Pe) => m.value = Pe),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", Zg, [
                  x(Te, {
                    variant: "secondary",
                    onClick: pe
                  }, {
                    default: h(() => [...Se[11] || (Se[11] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  x(Te, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: Ne
                  }, {
                    default: h(() => [...Se[12] || (Se[12] = [
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
}), th = /* @__PURE__ */ fe(eh, [["__scopeId", "data-v-6d7f8125"]]), sh = { class: "node-info" }, oh = { class: "node-info-text" }, nh = { class: "item-body" }, ah = {
  key: 0,
  class: "resolved-state"
}, lh = {
  key: 1,
  class: "multiple-options"
}, ih = { class: "options-list" }, rh = ["onClick"], ch = ["name", "value", "checked", "onChange"], uh = { class: "option-content" }, dh = { class: "option-header" }, fh = { class: "option-filename" }, mh = { class: "option-meta" }, vh = { class: "option-size" }, ph = { class: "option-category" }, gh = { class: "option-path" }, hh = { class: "action-buttons" }, yh = {
  key: 2,
  class: "unresolved"
}, wh = { class: "action-buttons" }, _h = /* @__PURE__ */ de({
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
      class: xe(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", sh, [
        t("span", oh, [
          m[7] || (m[7] = $("Used by: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: xe(["status-badge", i.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", nh, [
        l.value ? (a(), r("div", ah, [
          x(Te, {
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
            (a(!0), r(K, null, ve(e.options, (v, g) => (a(), r("label", {
              key: v.model.hash,
              class: xe(["option-card", { selected: e.selectedOptionIndex === g }]),
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
                  x(Nn, {
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
            x(Te, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            x(Te, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            x(Te, {
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
            x(Te, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: h(() => [...m[13] || (m[13] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            x(Te, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[14] || (m[14] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            x(Te, {
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
}), kh = /* @__PURE__ */ fe(_h, [["__scopeId", "data-v-8a82fefa"]]), bh = { class: "model-resolution-step" }, $h = { class: "step-header" }, Ch = { class: "step-info" }, xh = { class: "step-title" }, Sh = { class: "step-description" }, Ih = { class: "stat-badge" }, Eh = {
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
}, Vh = { class: "model-download-url-modal" }, Wh = { class: "model-modal-body" }, Gh = { class: "model-input-group" }, jh = { class: "model-input-group" }, Hh = { class: "model-modal-actions" }, Kh = /* @__PURE__ */ de({
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
    function n(Q) {
      var pe;
      return Q && ((pe = o[Q]) == null ? void 0 : pe[0]) || null;
    }
    const l = e, i = s, c = k(0), u = k(!1), d = k(!1), m = k(""), v = k(""), g = k(""), w = k([]), p = k(!1), _ = z(() => l.models[c.value]), C = z(() => l.models.some((Q) => Q.is_download_intent)), b = z(() => l.models.filter(
      (Q) => l.modelChoices.has(Q.filename) || Q.is_download_intent
    ).length), P = z(() => {
      var pe;
      if (!_.value) return "";
      const Q = n((pe = _.value.reference) == null ? void 0 : pe.node_type);
      return Q ? `${Q}/${_.value.filename}` : "";
    }), M = z(() => {
      var pe;
      if (!_.value) return "not-found";
      const Q = l.modelChoices.get(_.value.filename);
      if (Q)
        switch (Q.action) {
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
      return _.value.is_download_intent ? "download" : (pe = _.value.options) != null && pe.length ? "ambiguous" : "not-found";
    }), I = z(() => {
      var pe, he;
      if (!_.value) return;
      const Q = l.modelChoices.get(_.value.filename);
      if (Q)
        switch (Q.action) {
          case "select":
            return (pe = Q.selected_model) != null && pe.filename ? `→ ${Q.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (he = _.value.options) != null && he.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function S(Q) {
      Q >= 0 && Q < l.models.length && (c.value = Q);
    }
    function q() {
      var Q;
      for (let pe = c.value + 1; pe < l.models.length; pe++) {
        const he = l.models[pe];
        if (!he.is_download_intent && !((Q = l.modelChoices) != null && Q.has(he.filename))) {
          S(pe);
          return;
        }
      }
    }
    function Y() {
      _.value && (i("mark-optional", _.value.filename), _t(() => q()));
    }
    function W() {
      _.value && (i("skip", _.value.filename), _t(() => q()));
    }
    function E(Q) {
      _.value && (i("option-selected", _.value.filename, Q), _t(() => q()));
    }
    function T() {
      _.value && i("clear-choice", _.value.filename);
    }
    function O() {
      _.value && (m.value = _.value.filename, u.value = !0);
    }
    function le() {
      _.value && (v.value = _.value.download_source || "", g.value = _.value.target_path || P.value, d.value = !0);
    }
    function Z() {
      u.value = !1, m.value = "", w.value = [];
    }
    function V() {
      d.value = !1, v.value = "", g.value = "";
    }
    function A() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function N(Q) {
      _.value && (Z(), _t(() => q()));
    }
    function D() {
      !_.value || !v.value.trim() || (i("download-url", _.value.filename, v.value.trim(), g.value.trim() || void 0), V(), _t(() => q()));
    }
    function ee(Q) {
      if (!Q) return "Unknown";
      const pe = Q / (1024 * 1024 * 1024);
      return pe >= 1 ? `${pe.toFixed(2)} GB` : `${(Q / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (Q, pe) => {
      var he, Re, Fe;
      return a(), r("div", bh, [
        t("div", $h, [
          t("div", Ch, [
            t("h3", xh, f(C.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", Sh, f(C.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", Ih, f(b.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), L(Ir, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: pe[0] || (pe[0] = (Ue) => S(c.value - 1)),
          onNext: pe[1] || (pe[1] = (Ue) => S(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), r("div", Eh, [
          x(kh, {
            filename: _.value.filename,
            "node-type": ((he = _.value.reference) == null ? void 0 : he.node_type) || "Unknown",
            "has-multiple-options": !!((Re = _.value.options) != null && Re.length),
            options: _.value.options,
            choice: (Fe = e.modelChoices) == null ? void 0 : Fe.get(_.value.filename),
            status: M.value,
            "status-label": I.value,
            onMarkOptional: Y,
            onSkip: W,
            onDownloadUrl: le,
            onSearch: O,
            onOptionSelected: E,
            onClearChoice: T
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), r("div", Th, [...pe[5] || (pe[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (a(), L(Ct, { to: "body" }, [
          u.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: it(Z, ["self"])
          }, [
            t("div", Ph, [
              t("div", { class: "model-modal-header" }, [
                pe[6] || (pe[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: Z
                }, "✕")
              ]),
              t("div", Rh, [
                x(Tt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": pe[2] || (pe[2] = (Ue) => m.value = Ue),
                  placeholder: "Search by filename, category...",
                  onInput: A
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), r("div", Mh, [
                  (a(!0), r(K, null, ve(w.value, (Ue) => (a(), r("div", {
                    key: Ue.hash,
                    class: "model-search-result-item",
                    onClick: (qe) => N()
                  }, [
                    t("div", Lh, [
                      t("code", Oh, f(Ue.filename), 1)
                    ]),
                    t("div", Ah, [
                      t("span", Uh, f(Ue.category), 1),
                      t("span", Nh, f(ee(Ue.size)), 1)
                    ]),
                    Ue.relative_path ? (a(), r("div", zh, f(Ue.relative_path), 1)) : y("", !0)
                  ], 8, Dh))), 128))
                ])) : m.value && !p.value ? (a(), r("div", Fh, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                p.value ? (a(), r("div", Bh, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), L(Ct, { to: "body" }, [
          d.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: it(V, ["self"])
          }, [
            t("div", Vh, [
              t("div", { class: "model-modal-header" }, [
                pe[7] || (pe[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: V
                }, "✕")
              ]),
              t("div", Wh, [
                t("div", Gh, [
                  pe[8] || (pe[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  x(Tt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": pe[3] || (pe[3] = (Ue) => v.value = Ue),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", jh, [
                  pe[9] || (pe[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  x(Tt, {
                    modelValue: g.value,
                    "onUpdate:modelValue": pe[4] || (pe[4] = (Ue) => g.value = Ue),
                    placeholder: P.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", Hh, [
                  x(Te, {
                    variant: "secondary",
                    onClick: V
                  }, {
                    default: h(() => [...pe[10] || (pe[10] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  x(Te, {
                    variant: "primary",
                    disabled: !v.value.trim() || !g.value.trim(),
                    onClick: D
                  }, {
                    default: h(() => [...pe[11] || (pe[11] = [
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
}), qh = /* @__PURE__ */ fe(Kh, [["__scopeId", "data-v-5c700bfa"]]), Yh = { class: "applying-step" }, Jh = {
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
}, $y = { class: "error-message" }, Cy = /* @__PURE__ */ de({
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
                style: qt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", ty, f(((g = e.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", sy, [
            (a(!0), r(K, null, ve(e.progress.nodesToInstall, (p, _) => (a(), r("div", {
              key: p,
              class: xe(["install-item", i(p, _)])
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
              class: xe(["phase-icon", l.value ? "warning" : "success"])
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
              (a(!0), r(K, null, ve(n.value, (p) => (a(), r("div", {
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
}), xy = /* @__PURE__ */ fe(Cy, [["__scopeId", "data-v-5efaae58"]]), Sy = {
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
}, r0 = /* @__PURE__ */ de({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, n = s, { analyzeWorkflow: l, applyResolution: i, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: m } = Sr(), { loadPendingDownloads: v } = bo(), { openFileLocation: g } = tt(), w = k(null), p = k(!1), _ = k(!1), C = k(null), b = k("analysis"), P = k([]), M = k(/* @__PURE__ */ new Map()), I = k(/* @__PURE__ */ new Map()), S = k(/* @__PURE__ */ new Set()), q = z(() => {
      const H = [
        { id: "analysis", label: "Analysis" }
      ];
      return (W.value || O.value) && H.push({ id: "nodes", label: "Nodes" }), E.value && H.push({ id: "models", label: "Models" }), H.push({ id: "review", label: "Review" }), b.value === "applying" && H.push({ id: "applying", label: "Applying" }), H;
    }), Y = z(() => w.value ? w.value.stats.needs_user_input : !1), W = z(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), E = z(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), T = z(() => w.value ? w.value.stats.download_intents > 0 : !1), O = z(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), le = z(() => w.value ? w.value.nodes.resolved.length : 0), Z = z(() => w.value ? w.value.models.resolved.filter((H) => H.has_category_mismatch) : []), V = z(() => Z.value.length > 0), A = z(() => W.value || O.value ? "nodes" : E.value ? "models" : "review"), N = z(() => {
      if (!w.value) return [];
      const H = w.value.nodes.resolved.filter((ce) => !ce.is_installed), G = /* @__PURE__ */ new Set();
      return H.filter((ce) => G.has(ce.package.package_id) ? !1 : (G.add(ce.package.package_id), !0));
    }), D = z(() => {
      if (!w.value) return [];
      const H = w.value.nodes.resolved.filter((ce) => !ce.is_installed), G = /* @__PURE__ */ new Map();
      for (const ce of H) {
        const Be = G.get(ce.package.package_id);
        Be ? Be.node_types_count++ : G.set(ce.package.package_id, {
          package_id: ce.package.package_id,
          title: ce.package.title,
          node_types_count: 1
        });
      }
      return Array.from(G.values());
    }), ee = z(() => N.value.filter((H) => !S.value.has(H.package.package_id))), Q = z(() => w.value ? w.value.models.resolved.filter(
      (H) => H.match_type === "download_intent" || H.match_type === "property_download_intent"
    ).map((H) => ({
      filename: H.reference.widget_value,
      reference: H.reference,
      is_download_intent: !0,
      resolved_model: H.model,
      download_source: H.download_source,
      target_path: H.target_path
    })) : []), pe = z(() => {
      if (!w.value) return [];
      const H = w.value.nodes.unresolved.map((ce) => ({
        node_type: ce.reference.node_type,
        reason: ce.reason,
        is_unresolved: !0,
        options: void 0
      })), G = w.value.nodes.ambiguous.map((ce) => ({
        node_type: ce.reference.node_type,
        has_multiple_options: !0,
        options: ce.options.map((Be) => ({
          package_id: Be.package.package_id,
          title: Be.package.title,
          match_confidence: Be.match_confidence,
          match_type: Be.match_type,
          is_installed: Be.is_installed
        }))
      }));
      return [...H, ...G];
    }), he = z(() => {
      if (!w.value) return [];
      const H = w.value.models.unresolved.map((ce) => ({
        filename: ce.reference.widget_value,
        reference: ce.reference,
        reason: ce.reason,
        is_unresolved: !0,
        options: void 0
      })), G = w.value.models.ambiguous.map((ce) => ({
        filename: ce.reference.widget_value,
        reference: ce.reference,
        has_multiple_options: !0,
        options: ce.options.map((Be) => ({
          model: Be.model,
          match_confidence: Be.match_confidence,
          match_type: Be.match_type,
          has_download_source: Be.has_download_source
        }))
      }));
      return [...H, ...G];
    }), Re = z(() => {
      const H = he.value, G = Q.value.map((ce) => ({
        filename: ce.filename,
        reference: ce.reference,
        is_download_intent: !0,
        resolved_model: ce.resolved_model,
        download_source: ce.download_source,
        target_path: ce.target_path,
        options: void 0
      }));
      return [...H, ...G];
    }), Fe = z(() => Q.value.filter((H) => {
      const G = I.value.get(H.filename);
      return G ? G.action === "download" : !0;
    }).map((H) => ({
      filename: H.filename,
      url: H.download_source,
      target_path: H.target_path
    })));
    function Ue(H, G = 50) {
      return H.length <= G ? H : H.slice(0, G - 3) + "...";
    }
    const qe = z(() => {
      let H = ee.value.length;
      for (const G of M.value.values())
        G.action === "install" && H++;
      for (const G of I.value.values())
        G.action === "select" && H++;
      return H;
    }), Ne = z(() => {
      let H = 0;
      for (const G of I.value.values())
        G.action === "download" && H++;
      for (const G of Q.value)
        I.value.get(G.filename) || H++;
      return H;
    }), Ie = z(() => {
      let H = 0;
      for (const G of M.value.values())
        G.action === "optional" && H++;
      for (const G of I.value.values())
        G.action === "optional" && H++;
      return H;
    }), Se = z(() => {
      let H = S.value.size;
      for (const G of M.value.values())
        G.action === "skip" && H++;
      for (const G of I.value.values())
        G.action === "skip" && H++;
      for (const G of pe.value)
        M.value.has(G.node_type) || H++;
      for (const G of he.value)
        I.value.has(G.filename) || H++;
      return H;
    }), ye = z(() => {
      const H = {};
      if (H.analysis = { resolved: 1, total: 1 }, W.value) {
        const G = pe.value.length, ce = pe.value.filter(
          (Be) => M.value.has(Be.node_type)
        ).length;
        H.nodes = { resolved: ce, total: G };
      }
      if (E.value) {
        const G = Re.value.length, ce = Re.value.filter(
          (Be) => I.value.has(Be.filename) || Be.is_download_intent
        ).length;
        H.models = { resolved: ce, total: G };
      }
      if (H.review = { resolved: 1, total: 1 }, b.value === "applying") {
        const G = d.totalFiles || 1, ce = d.completedFiles.length;
        H.applying = { resolved: ce, total: G };
      }
      return H;
    });
    function me(H) {
      b.value = H;
    }
    function Pe() {
      const H = q.value.findIndex((G) => G.id === b.value);
      H > 0 && (b.value = q.value[H - 1].id);
    }
    function Ee() {
      const H = q.value.findIndex((G) => G.id === b.value);
      H < q.value.length - 1 && (b.value = q.value[H + 1].id);
    }
    async function U() {
      p.value = !0, C.value = null;
      try {
        w.value = await l(o.workflowName);
      } catch (H) {
        C.value = H instanceof Error ? H.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function R() {
      P.value.includes("analysis") || P.value.push("analysis"), W.value || O.value ? b.value = "nodes" : E.value ? b.value = "models" : b.value = "review";
    }
    function F(H) {
      M.value.set(H, { action: "optional" });
    }
    function j(H) {
      M.value.set(H, { action: "skip" });
    }
    function te(H, G) {
      var Be;
      const ce = pe.value.find((Xe) => Xe.node_type === H);
      (Be = ce == null ? void 0 : ce.options) != null && Be[G] && M.value.set(H, {
        action: "install",
        package_id: ce.options[G].package_id
      });
    }
    function ie(H, G) {
      M.value.set(H, {
        action: "install",
        package_id: G
      });
    }
    function ge(H) {
      M.value.delete(H);
    }
    function ke(H) {
      S.value.has(H) ? S.value.delete(H) : S.value.add(H);
    }
    function ne(H) {
      I.value.set(H, { action: "optional" });
    }
    function ue(H) {
      I.value.set(H, { action: "skip" });
    }
    function Me(H, G) {
      var Be;
      const ce = he.value.find((Xe) => Xe.filename === H);
      (Be = ce == null ? void 0 : ce.options) != null && Be[G] && I.value.set(H, {
        action: "select",
        selected_model: ce.options[G].model
      });
    }
    function Ce(H, G, ce) {
      I.value.set(H, {
        action: "download",
        url: G,
        target_path: ce
      });
    }
    function oe(H) {
      I.value.delete(H);
    }
    async function X(H) {
      try {
        await g(H);
      } catch (G) {
        C.value = G instanceof Error ? G.message : "Failed to open file location";
      }
    }
    async function De() {
      var H;
      _.value = !0, C.value = null, m(), d.phase = "resolving", b.value = "applying";
      try {
        const G = await i(o.workflowName, M.value, I.value, S.value);
        G.models_to_download && G.models_to_download.length > 0 && u(o.workflowName, G.models_to_download);
        const ce = [
          ...G.nodes_to_install || [],
          ...ee.value.map((Xe) => Xe.package.package_id)
        ];
        d.nodesToInstall = [...new Set(ce)], d.nodesToInstall.length > 0 && await c(o.workflowName), d.phase = "complete", await v();
        const Be = d.installError || ((H = d.nodeInstallProgress) == null ? void 0 : H.completedNodes.some((Xe) => !Xe.success));
        !d.needsRestart && !Be && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (G) {
        C.value = G instanceof Error ? G.message : "Failed to apply resolution", d.error = C.value, d.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function be() {
      n("refresh"), n("restart"), n("close");
    }
    async function we() {
      var G;
      const H = ((G = d.nodeInstallProgress) == null ? void 0 : G.completedNodes.filter((ce) => !ce.success).map((ce) => ce.node_id)) || [];
      if (H.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: H.length
        }, d.nodesToInstall = H, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(o.workflowName), d.phase = "complete";
        } catch (ce) {
          d.error = ce instanceof Error ? ce.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return Qe(U), (H, G) => (a(), L(ft, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: C.value || void 0,
      "fixed-height": !0,
      onClose: G[1] || (G[1] = (ce) => n("close"))
    }, {
      body: h(() => [
        p.value && !w.value ? (a(), r("div", Sy, [...G[2] || (G[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (a(), r("div", Iy, [
          x(Lp, {
            steps: q.value,
            "current-step": b.value,
            "completed-steps": P.value,
            "step-stats": ye.value,
            onStepChange: me
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          b.value === "analysis" ? (a(), r("div", Ey, [
            t("div", Ty, [
              t("div", Py, [
                G[3] || (G[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", Ry, " Found " + f(w.value.stats.total_nodes) + " nodes and " + f(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", My, [
                t("div", Dy, [
                  G[12] || (G[12] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", Ly, [
                    le.value > 0 ? (a(), r("div", Oy, [
                      G[4] || (G[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Ay, f(le.value), 1),
                      G[5] || (G[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (a(), r("div", Uy, [
                      G[6] || (G[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Ny, f(w.value.stats.packages_needing_installation), 1),
                      G[7] || (G[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (a(), r("div", zy, [
                      G[8] || (G[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", Fy, f(w.value.nodes.ambiguous.length), 1),
                      G[9] || (G[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (a(), r("div", By, [
                      G[10] || (G[10] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", Vy, f(w.value.nodes.unresolved.length), 1),
                      G[11] || (G[11] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", Wy, [
                  G[23] || (G[23] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", Gy, [
                    t("div", jy, [
                      G[13] || (G[13] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Hy, f(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      G[14] || (G[14] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (a(), r("div", Ky, [
                      G[15] || (G[15] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", qy, f(w.value.stats.download_intents), 1),
                      G[16] || (G[16] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    V.value ? (a(), r("div", Yy, [
                      G[17] || (G[17] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", Jy, f(Z.value.length), 1),
                      G[18] || (G[18] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (a(), r("div", Qy, [
                      G[19] || (G[19] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", Xy, f(w.value.models.ambiguous.length), 1),
                      G[20] || (G[20] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (a(), r("div", Zy, [
                      G[21] || (G[21] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", e1, f(w.value.models.unresolved.length), 1),
                      G[22] || (G[22] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              Y.value ? (a(), r("div", t1, [
                G[24] || (G[24] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", s1, f(pe.value.length + he.value.length) + " items need your input", 1)
              ])) : O.value ? (a(), r("div", o1, [
                G[25] || (G[25] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", n1, f(w.value.stats.packages_needing_installation) + " package" + f(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(w.value.stats.nodes_needing_installation) + " node type" + f(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(T.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : T.value ? (a(), r("div", a1, [
                G[26] || (G[26] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", l1, f(w.value.stats.download_intents) + " model" + f(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : V.value ? (a(), r("div", i1, [
                G[27] || (G[27] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", r1, f(Z.value.length) + " model" + f(Z.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), r("div", c1, [...G[28] || (G[28] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              V.value ? (a(), r("div", u1, [
                G[31] || (G[31] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", d1, [
                  (a(!0), r(K, null, ve(Z.value, (ce) => {
                    var Be, Xe;
                    return a(), r("div", {
                      key: ce.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", f1, f(ce.actual_category) + "/" + f((Be = ce.model) == null ? void 0 : Be.filename), 1),
                      G[30] || (G[30] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", m1, f((Xe = ce.expected_categories) == null ? void 0 : Xe[0]) + "/", 1),
                      ce.file_path ? (a(), L(Te, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (vt) => X(ce.file_path)
                      }, {
                        default: h(() => [...G[29] || (G[29] = [
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
          b.value === "nodes" ? (a(), L(th, {
            key: 1,
            nodes: pe.value,
            "node-choices": M.value,
            "auto-resolved-packages": D.value,
            "skipped-packages": S.value,
            onMarkOptional: F,
            onSkip: j,
            onOptionSelected: te,
            onManualEntry: ie,
            onClearChoice: ge,
            onPackageSkip: ke
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          b.value === "models" ? (a(), L(qh, {
            key: 2,
            models: Re.value,
            "model-choices": I.value,
            onMarkOptional: ne,
            onSkip: ue,
            onOptionSelected: Me,
            onDownloadUrl: Ce,
            onClearChoice: oe
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          b.value === "review" ? (a(), r("div", v1, [
            t("div", p1, [
              G[37] || (G[37] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", g1, [
                t("div", h1, [
                  t("span", y1, f(qe.value), 1),
                  G[32] || (G[32] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", w1, [
                  t("span", _1, f(Ne.value), 1),
                  G[33] || (G[33] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", k1, [
                  t("span", b1, f(Ie.value), 1),
                  G[34] || (G[34] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", $1, [
                  t("span", C1, f(Se.value), 1),
                  G[35] || (G[35] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              D.value.length > 0 ? (a(), r("div", x1, [
                t("h4", S1, "Node Packages (" + f(D.value.length) + ")", 1),
                t("div", I1, [
                  (a(!0), r(K, null, ve(D.value, (ce) => (a(), r("div", {
                    key: ce.package_id,
                    class: "review-item"
                  }, [
                    t("code", E1, f(ce.package_id), 1),
                    t("div", T1, [
                      S.value.has(ce.package_id) ? (a(), r("span", R1, "Skipped")) : (a(), r("span", P1, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              pe.value.length > 0 ? (a(), r("div", M1, [
                t("h4", D1, "Node Choices (" + f(pe.value.length) + ")", 1),
                t("div", L1, [
                  (a(!0), r(K, null, ve(pe.value, (ce) => {
                    var Be, Xe, vt, at;
                    return a(), r("div", {
                      key: ce.node_type,
                      class: "review-item"
                    }, [
                      t("code", O1, f(ce.node_type), 1),
                      t("div", A1, [
                        M.value.has(ce.node_type) ? (a(), r(K, { key: 0 }, [
                          ((Be = M.value.get(ce.node_type)) == null ? void 0 : Be.action) === "install" ? (a(), r("span", U1, f((Xe = M.value.get(ce.node_type)) == null ? void 0 : Xe.package_id), 1)) : ((vt = M.value.get(ce.node_type)) == null ? void 0 : vt.action) === "optional" ? (a(), r("span", N1, " Optional ")) : ((at = M.value.get(ce.node_type)) == null ? void 0 : at.action) === "skip" ? (a(), r("span", z1, " Skip ")) : y("", !0)
                        ], 64)) : (a(), r("span", F1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Fe.value.length > 0 ? (a(), r("div", B1, [
                t("h4", V1, "Models to Download (" + f(Fe.value.length) + ")", 1),
                t("div", W1, [
                  (a(!0), r(K, null, ve(Fe.value, (ce) => (a(), r("div", {
                    key: ce.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", G1, [
                      t("code", j1, f(ce.filename), 1),
                      t("div", H1, [
                        t("span", K1, "→ " + f(ce.target_path), 1),
                        ce.url ? (a(), r("span", {
                          key: 0,
                          class: "download-url",
                          title: ce.url
                        }, f(Ue(ce.url)), 9, q1)) : y("", !0)
                      ])
                    ]),
                    G[36] || (G[36] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Re.value.length > 0 ? (a(), r("div", Y1, [
                t("h4", J1, "Models (" + f(Re.value.length) + ")", 1),
                t("div", Q1, [
                  (a(!0), r(K, null, ve(Re.value, (ce) => {
                    var Be, Xe, vt, at, ut, Mt, Ft;
                    return a(), r("div", {
                      key: ce.filename,
                      class: "review-item"
                    }, [
                      t("code", X1, f(ce.filename), 1),
                      t("div", Z1, [
                        I.value.has(ce.filename) ? (a(), r(K, { key: 0 }, [
                          ((Be = I.value.get(ce.filename)) == null ? void 0 : Be.action) === "select" ? (a(), r("span", e0, f((vt = (Xe = I.value.get(ce.filename)) == null ? void 0 : Xe.selected_model) == null ? void 0 : vt.filename), 1)) : ((at = I.value.get(ce.filename)) == null ? void 0 : at.action) === "download" ? (a(), r("span", t0, " Download ")) : ((ut = I.value.get(ce.filename)) == null ? void 0 : ut.action) === "optional" ? (a(), r("span", s0, " Optional ")) : ((Mt = I.value.get(ce.filename)) == null ? void 0 : Mt.action) === "skip" ? (a(), r("span", o0, " Skip ")) : ((Ft = I.value.get(ce.filename)) == null ? void 0 : Ft.action) === "cancel_download" ? (a(), r("span", n0, " Cancel Download ")) : y("", !0)
                        ], 64)) : ce.is_download_intent ? (a(), r("span", a0, " Pending Download ")) : (a(), r("span", l0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              N.value.length === 0 && pe.value.length === 0 && Re.value.length === 0 ? (a(), r("div", i0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          b.value === "applying" ? (a(), L(xy, {
            key: 4,
            progress: Ve(d),
            onRestart: be,
            onRetryFailed: we
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        b.value !== "analysis" && b.value !== "applying" ? (a(), L(Te, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: Pe
        }, {
          default: h(() => [...G[38] || (G[38] = [
            $(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        G[41] || (G[41] = t("div", { class: "footer-spacer" }, null, -1)),
        b.value !== "applying" || Ve(d).phase === "complete" || Ve(d).phase === "error" ? (a(), L(Te, {
          key: 1,
          variant: "secondary",
          onClick: G[0] || (G[0] = (ce) => n("close"))
        }, {
          default: h(() => [
            $(f(Ve(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        b.value === "analysis" ? (a(), L(Te, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: R
        }, {
          default: h(() => [
            $(f(A.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        b.value === "nodes" ? (a(), L(Te, {
          key: 3,
          variant: "primary",
          onClick: Ee
        }, {
          default: h(() => [
            $(f(E.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        b.value === "models" ? (a(), L(Te, {
          key: 4,
          variant: "primary",
          onClick: Ee
        }, {
          default: h(() => [...G[39] || (G[39] = [
            $(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        b.value === "review" ? (a(), L(Te, {
          key: 5,
          variant: "primary",
          disabled: _.value,
          loading: _.value,
          onClick: De
        }, {
          default: h(() => [...G[40] || (G[40] = [
            $(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), c0 = /* @__PURE__ */ fe(r0, [["__scopeId", "data-v-40d8d5a8"]]), u0 = { class: "search-input-wrapper" }, d0 = ["value", "placeholder"], f0 = /* @__PURE__ */ de({
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
        onKeyup: Ht(u, ["escape"])
      }, null, 40, d0),
      e.clearable && e.modelValue ? (a(), r("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), m0 = /* @__PURE__ */ fe(f0, [["__scopeId", "data-v-266f857a"]]), v0 = { class: "search-bar" }, p0 = /* @__PURE__ */ de({
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
      x(m0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => s.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), $o = /* @__PURE__ */ fe(p0, [["__scopeId", "data-v-3d51bbfd"]]), g0 = { class: "section-group" }, h0 = {
  key: 0,
  class: "section-content"
}, y0 = /* @__PURE__ */ de({
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
      x(Ut, {
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
        He(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), lt = /* @__PURE__ */ fe(y0, [["__scopeId", "data-v-c48e33ed"]]), w0 = { class: "item-header" }, _0 = {
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
}, S0 = /* @__PURE__ */ de({
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
      class: xe(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: i[0] || (i[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      t("div", w0, [
        l.$slots.icon ? (a(), r("span", _0, [
          He(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", k0, [
          l.$slots.title ? (a(), r("div", b0, [
            He(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), r("div", $0, [
            He(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), r("div", C0, [
        He(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), r("div", x0, [
        He(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Et = /* @__PURE__ */ fe(S0, [["__scopeId", "data-v-cc435e0e"]]), I0 = { class: "loading-state" }, E0 = { class: "loading-message" }, T0 = /* @__PURE__ */ de({
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
}), Ps = /* @__PURE__ */ fe(T0, [["__scopeId", "data-v-ad8436c9"]]), P0 = { class: "error-state" }, R0 = { class: "error-message" }, M0 = /* @__PURE__ */ de({
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
      e.retry ? (a(), L(re, {
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
}), Rs = /* @__PURE__ */ fe(M0, [["__scopeId", "data-v-5397be48"]]), D0 = /* @__PURE__ */ de({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getWorkflows: l } = tt(), i = k([]), c = k(!1), u = k(null), d = k(""), m = k(!0), v = k(!1), g = k(!1), w = k(!1), p = k(null), _ = z(
      () => i.value.filter((D) => D.status === "broken")
    ), C = z(
      () => i.value.filter((D) => D.status === "new")
    ), b = z(
      () => i.value.filter((D) => D.status === "modified")
    ), P = z(
      () => i.value.filter((D) => D.status === "synced")
    ), M = z(() => {
      if (!d.value.trim()) return i.value;
      const D = d.value.toLowerCase();
      return i.value.filter((ee) => ee.name.toLowerCase().includes(D));
    }), I = z(
      () => _.value.filter(
        (D) => !d.value.trim() || D.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), S = z(
      () => C.value.filter(
        (D) => !d.value.trim() || D.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), q = z(
      () => b.value.filter(
        (D) => !d.value.trim() || D.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), Y = z(
      () => P.value.filter(
        (D) => !d.value.trim() || D.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), W = z(
      () => v.value ? Y.value : Y.value.slice(0, 5)
    );
    async function E(D = !1) {
      c.value = !0, u.value = null;
      try {
        i.value = await l(D);
      } catch (ee) {
        u.value = ee instanceof Error ? ee.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    s({ loadWorkflows: E });
    function T(D) {
      p.value = D, g.value = !0;
    }
    function O(D) {
      p.value = D, w.value = !0;
    }
    function le() {
      n("refresh");
    }
    async function Z() {
      w.value = !1, await E(!0);
    }
    async function V() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function A(D) {
      const ee = [];
      return D.missing_nodes > 0 && ee.push(`${D.missing_nodes} missing node${D.missing_nodes > 1 ? "s" : ""}`), D.missing_models > 0 && ee.push(`${D.missing_models} missing model${D.missing_models > 1 ? "s" : ""}`), D.models_with_category_mismatch && D.models_with_category_mismatch > 0 && ee.push(`${D.models_with_category_mismatch} model${D.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), D.pending_downloads && D.pending_downloads > 0 && ee.push(`${D.pending_downloads} pending download${D.pending_downloads > 1 ? "s" : ""}`), ee.length > 0 ? ee.join(", ") : "Has issues";
    }
    function N(D) {
      const ee = D.sync_state === "new" ? "New" : D.sync_state === "modified" ? "Modified" : D.sync_state === "synced" ? "Synced" : D.sync_state;
      return D.has_path_sync_issues && D.models_needing_path_sync && D.models_needing_path_sync > 0 ? `${D.models_needing_path_sync} model path${D.models_needing_path_sync > 1 ? "s" : ""} need${D.models_needing_path_sync === 1 ? "s" : ""} sync` : ee || "Unknown";
    }
    return Qe(E), (D, ee) => (a(), r(K, null, [
      x(Pt, null, {
        header: h(() => [
          x(Rt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          x($o, {
            modelValue: d.value,
            "onUpdate:modelValue": ee[0] || (ee[0] = (Q) => d.value = Q),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (a(), L(Ps, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (a(), L(Rs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (a(), r(K, { key: 2 }, [
            I.value.length ? (a(), L(lt, {
              key: 0,
              title: "BROKEN",
              count: I.value.length
            }, {
              default: h(() => [
                (a(!0), r(K, null, ve(I.value, (Q) => (a(), L(Et, {
                  key: Q.name,
                  status: "broken"
                }, {
                  icon: h(() => [...ee[7] || (ee[7] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(Q.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(A(Q)), 1)
                  ]),
                  actions: h(() => [
                    x(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (pe) => O(Q.name)
                    }, {
                      default: h(() => [...ee[8] || (ee[8] = [
                        $(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (pe) => T(Q.name)
                    }, {
                      default: h(() => [...ee[9] || (ee[9] = [
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
            S.value.length ? (a(), L(lt, {
              key: 1,
              title: "NEW",
              count: S.value.length
            }, {
              default: h(() => [
                (a(!0), r(K, null, ve(S.value, (Q) => (a(), L(Et, {
                  key: Q.name,
                  status: Q.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    $(f(Q.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    $(f(Q.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(N(Q)), 1)
                  ]),
                  actions: h(() => [
                    x(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (pe) => T(Q.name)
                    }, {
                      default: h(() => [...ee[10] || (ee[10] = [
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
            q.value.length ? (a(), L(lt, {
              key: 2,
              title: "MODIFIED",
              count: q.value.length
            }, {
              default: h(() => [
                (a(!0), r(K, null, ve(q.value, (Q) => (a(), L(Et, {
                  key: Q.name,
                  status: Q.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...ee[11] || (ee[11] = [
                    $("⚡", -1)
                  ])]),
                  title: h(() => [
                    $(f(Q.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(N(Q)), 1)
                  ]),
                  actions: h(() => [
                    x(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (pe) => T(Q.name)
                    }, {
                      default: h(() => [...ee[12] || (ee[12] = [
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
            Y.value.length ? (a(), L(lt, {
              key: 3,
              title: "SYNCED",
              count: Y.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: ee[2] || (ee[2] = (Q) => m.value = Q)
            }, {
              default: h(() => [
                (a(!0), r(K, null, ve(W.value, (Q) => (a(), L(Et, {
                  key: Q.name,
                  status: Q.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    $(f(Q.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    $(f(Q.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(N(Q)), 1)
                  ]),
                  actions: h(() => [
                    x(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (pe) => T(Q.name)
                    }, {
                      default: h(() => [...ee[13] || (ee[13] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && Y.value.length > 5 ? (a(), L(re, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: ee[1] || (ee[1] = (Q) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    $(" View all " + f(Y.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            M.value.length ? y("", !0) : (a(), L(ns, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g.value && p.value ? (a(), L(bp, {
        key: 0,
        "workflow-name": p.value,
        onClose: ee[3] || (ee[3] = (Q) => g.value = !1),
        onResolve: ee[4] || (ee[4] = (Q) => O(p.value)),
        onRefresh: ee[5] || (ee[5] = (Q) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (a(), L(c0, {
        key: 1,
        "workflow-name": p.value,
        onClose: Z,
        onInstall: le,
        onRefresh: ee[6] || (ee[6] = (Q) => n("refresh")),
        onRestart: V
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), L0 = /* @__PURE__ */ fe(D0, [["__scopeId", "data-v-fa3f076e"]]), O0 = /* @__PURE__ */ de({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: xe(["summary-bar", e.variant])
    }, [
      He(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), an = /* @__PURE__ */ fe(O0, [["__scopeId", "data-v-ccb7816e"]]), A0 = {
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
}, vw = /* @__PURE__ */ de({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: i, openFileLocation: c } = tt(), u = k(null), d = k(!0), m = k(null), v = k(""), g = k(!1), w = k(null), p = k(null), _ = k(null), C = k(null);
    let b = null;
    function P(E, T = "success", O = 2e3) {
      b && clearTimeout(b), C.value = { message: E, type: T }, b = setTimeout(() => {
        C.value = null;
      }, O);
    }
    function M(E) {
      if (!E) return "Unknown";
      const T = 1024 * 1024 * 1024, O = 1024 * 1024;
      return E >= T ? `${(E / T).toFixed(1)} GB` : E >= O ? `${(E / O).toFixed(0)} MB` : `${(E / 1024).toFixed(0)} KB`;
    }
    function I(E) {
      navigator.clipboard.writeText(E), P("Copied to clipboard!");
    }
    async function S(E) {
      try {
        await c(E), P("Opening file location...");
      } catch {
        P("Failed to open location", "error");
      }
    }
    async function q() {
      if (!(!v.value.trim() || !u.value)) {
        g.value = !0, p.value = null, _.value = null;
        try {
          await l(u.value.hash, v.value.trim()), _.value = "Source added successfully!", v.value = "", await W();
        } catch (E) {
          p.value = E instanceof Error ? E.message : "Failed to add source";
        } finally {
          g.value = !1;
        }
      }
    }
    async function Y(E) {
      if (u.value) {
        w.value = E, p.value = null, _.value = null;
        try {
          await i(u.value.hash, E), P("Source removed"), await W();
        } catch (T) {
          p.value = T instanceof Error ? T.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function W() {
      d.value = !0, m.value = null;
      try {
        u.value = await n(o.identifier);
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return Qe(W), (E, T) => {
      var O;
      return a(), r(K, null, [
        x(ft, {
          title: `Model Details: ${((O = u.value) == null ? void 0 : O.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          onClose: T[5] || (T[5] = (le) => E.$emit("close"))
        }, {
          body: h(() => {
            var le, Z, V, A;
            return [
              u.value ? (a(), r("div", A0, [
                t("section", U0, [
                  t("div", N0, [
                    T[6] || (T[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", z0, f(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[0] || (T[0] = (N) => I(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", F0, [
                    T[7] || (T[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", B0, f(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[1] || (T[1] = (N) => I(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", V0, [
                    T[8] || (T[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", W0, f(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[2] || (T[2] = (N) => I(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", G0, [
                    T[9] || (T[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", j0, f(M(u.value.size)), 1)
                  ]),
                  t("div", H0, [
                    T[10] || (T[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", K0, f(u.value.category), 1)
                  ]),
                  t("div", q0, [
                    T[11] || (T[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", Y0, f(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", J0, [
                  t("h4", Q0, "Locations (" + f(((le = u.value.locations) == null ? void 0 : le.length) || 0) + ")", 1),
                  (Z = u.value.locations) != null && Z.length ? (a(), r("div", X0, [
                    (a(!0), r(K, null, ve(u.value.locations, (N, D) => (a(), r("div", {
                      key: D,
                      class: "location-item"
                    }, [
                      t("span", Z0, f(N.path), 1),
                      N.modified ? (a(), r("span", ew, "Modified: " + f(N.modified), 1)) : y("", !0),
                      N.path ? (a(), r("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (ee) => S(N.path)
                      }, " Open File Location ", 8, tw)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), r("div", sw, "No locations found"))
                ]),
                t("section", ow, [
                  t("h4", nw, "Download Sources (" + f(((V = u.value.sources) == null ? void 0 : V.length) || 0) + ")", 1),
                  (A = u.value.sources) != null && A.length ? (a(), r("div", aw, [
                    (a(!0), r(K, null, ve(u.value.sources, (N, D) => (a(), r("div", {
                      key: D,
                      class: "source-item"
                    }, [
                      t("span", lw, f(N.type) + ":", 1),
                      t("a", {
                        href: N.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(N.url), 9, iw),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === N.url,
                        onClick: (ee) => Y(N.url)
                      }, f(w.value === N.url ? "..." : "×"), 9, rw)
                    ]))), 128))
                  ])) : (a(), r("div", cw, " No download sources configured ")),
                  t("div", uw, [
                    Ke(t("input", {
                      "onUpdate:modelValue": T[3] || (T[3] = (N) => v.value = N),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [zt, v.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || g.value,
                      onClick: q
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
              onClick: T[4] || (T[4] = (le) => E.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (a(), L(Ct, { to: "body" }, [
          C.value ? (a(), r("div", {
            key: 0,
            class: xe(["toast", C.value.type])
          }, f(C.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), ol = /* @__PURE__ */ fe(vw, [["__scopeId", "data-v-f15cbb56"]]), pw = /* @__PURE__ */ de({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: n, getStatus: l } = tt(), i = k([]), c = k([]), u = k("production"), d = k(!1), m = k(null), v = k(""), g = k(!1), w = k(null);
    function p() {
      g.value = !1, o("navigate", "model-index");
    }
    const _ = z(
      () => i.value.reduce((W, E) => W + (E.size || 0), 0)
    ), C = z(() => {
      if (!v.value.trim()) return i.value;
      const W = v.value.toLowerCase();
      return i.value.filter((E) => E.filename.toLowerCase().includes(W));
    }), b = z(() => {
      if (!v.value.trim()) return c.value;
      const W = v.value.toLowerCase();
      return c.value.filter((E) => E.filename.toLowerCase().includes(W));
    }), P = z(() => {
      const W = {};
      for (const T of C.value) {
        const O = T.type || "other";
        W[O] || (W[O] = []), W[O].push(T);
      }
      const E = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(W).sort(([T], [O]) => {
        const le = E.indexOf(T), Z = E.indexOf(O);
        return le >= 0 && Z >= 0 ? le - Z : le >= 0 ? -1 : Z >= 0 ? 1 : T.localeCompare(O);
      }).map(([T, O]) => ({ type: T, models: O }));
    });
    function M(W) {
      if (!W) return "Unknown";
      const E = W / (1024 * 1024);
      return E >= 1024 ? `${(E / 1024).toFixed(1)} GB` : `${E.toFixed(0)} MB`;
    }
    function I(W) {
      w.value = W.hash || W.filename;
    }
    function S(W) {
      o("navigate", "model-index");
    }
    function q(W) {
      alert(`Download functionality not yet implemented for ${W}`);
    }
    async function Y() {
      d.value = !0, m.value = null;
      try {
        const W = await n();
        i.value = W, c.value = [];
        const E = await l();
        u.value = E.environment || "production";
      } catch (W) {
        m.value = W instanceof Error ? W.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return Qe(Y), (W, E) => (a(), r(K, null, [
      x(Pt, null, {
        header: h(() => [
          x(Rt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (T) => g.value = !0)
          })
        ]),
        search: h(() => [
          x($o, {
            modelValue: v.value,
            "onUpdate:modelValue": E[1] || (E[1] = (T) => v.value = T),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (a(), L(Ps, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (a(), L(Rs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: Y
          }, null, 8, ["message"])) : (a(), r(K, { key: 2 }, [
            i.value.length ? (a(), L(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(i.value.length) + " models • " + f(M(_.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(K, null, ve(P.value, (T) => (a(), L(lt, {
              key: T.type,
              title: T.type.toUpperCase(),
              count: T.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(K, null, ve(T.models, (O) => (a(), L(Et, {
                  key: O.hash || O.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...E[4] || (E[4] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(f(O.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(M(O.size)), 1)
                  ]),
                  details: h(() => [
                    x(dt, {
                      label: "Used by:",
                      value: (O.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    x(dt, {
                      label: "Path:",
                      value: O.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => I(O)
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
            b.value.length ? (a(), L(lt, {
              key: 1,
              title: "MISSING",
              count: b.value.length
            }, {
              default: h(() => [
                (a(!0), r(K, null, ve(b.value, (T) => (a(), L(Et, {
                  key: T.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...E[6] || (E[6] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(T.filename), 1)
                  ]),
                  subtitle: h(() => [...E[7] || (E[7] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var O;
                    return [
                      x(dt, {
                        label: "Required by:",
                        value: ((O = T.workflow_names) == null ? void 0 : O.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    x(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => q(T.filename)
                    }, {
                      default: h(() => [...E[8] || (E[8] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => S(T.filename)
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
            !C.value.length && !b.value.length ? (a(), L(ns, {
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
        onClose: E[2] || (E[2] = (T) => g.value = !1)
      }, {
        content: h(() => [
          t("p", null, [
            E[10] || (E[10] = $(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + f(u.value) + '"', 1),
            E[11] || (E[11] = $(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          x(re, {
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
      w.value ? (a(), L(ol, {
        key: 0,
        identifier: w.value,
        onClose: E[3] || (E[3] = (T) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), gw = /* @__PURE__ */ fe(pw, [["__scopeId", "data-v-cb4f12b3"]]);
function hw(e) {
  const s = e.toLowerCase();
  return s === "huggingface.co" || s.endsWith(".huggingface.co") || s === "hf.co";
}
function yw(e) {
  const s = e.trim();
  if (!s) return { kind: "unknown" };
  let o;
  try {
    o = new URL(s);
  } catch {
    return { kind: "unknown" };
  }
  if (!hw(o.hostname)) return { kind: "unknown" };
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
function ww(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function _w(e, s, o) {
  const [n, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(n)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(s)}/${ww(o)}`;
}
const kw = { class: "hf-file-browser" }, bw = { class: "browser-header" }, $w = { class: "repo-info" }, Cw = { class: "repo-id" }, xw = {
  key: 0,
  class: "revision-pill"
}, Sw = {
  key: 0,
  class: "loading-state"
}, Iw = {
  key: 1,
  class: "error-state"
}, Ew = { class: "toolbar" }, Tw = { class: "toolbar-actions" }, Pw = { class: "file-list-container" }, Rw = {
  key: 0,
  class: "empty-state"
}, Mw = {
  key: 1,
  class: "file-list"
}, Dw = ["onClick"], Lw = ["checked", "onChange"], Ow = { class: "file-path" }, Aw = { class: "file-size" }, Uw = { class: "destination-section" }, Nw = { class: "destination-row" }, zw = {
  key: 0,
  class: "path-separator"
}, Fw = { class: "summary-bar" }, Bw = { class: "summary-count" }, Vw = { class: "summary-size" }, Ww = { class: "action-bar" }, Gw = /* @__PURE__ */ de({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: i } = tt(), c = k([]), u = k(/* @__PURE__ */ new Set()), d = k(!1), m = k(null), v = k(""), g = k(!0), w = k(""), p = k(""), _ = k(""), C = k([]), b = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, P = z(() => {
      let A = c.value;
      if (o.initialPath) {
        const N = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        A = A.filter((D) => D.path.startsWith(N) || D.path === o.initialPath);
      }
      if (g.value && (A = A.filter((N) => N.is_model_file)), v.value.trim()) {
        const N = v.value.toLowerCase();
        A = A.filter((D) => D.path.toLowerCase().includes(N));
      }
      return A;
    }), M = z(() => {
      const A = C.value.map((N) => ({
        label: N,
        value: N
      }));
      return A.push({ label: "Custom path...", value: "__custom__" }), A;
    }), I = z(() => w.value === "__custom__" ? _.value.trim().length > 0 : w.value.length > 0), S = z(() => {
      let A = 0;
      for (const N of u.value) {
        const D = c.value.find((ee) => ee.path === N);
        D && (A += D.size);
      }
      return A;
    });
    function q(A) {
      if (A === 0) return "0 B";
      const N = 1024 * 1024 * 1024, D = 1024 * 1024, ee = 1024;
      return A >= N ? `${(A / N).toFixed(2)} GB` : A >= D ? `${(A / D).toFixed(1)} MB` : A >= ee ? `${(A / ee).toFixed(0)} KB` : `${A} B`;
    }
    function Y(A) {
      const N = A.match(b);
      return N ? `${N[1]}${N[4]}` : null;
    }
    function W(A) {
      const N = new Set(u.value), D = N.has(A.path), ee = A.shard_group || Y(A.path);
      if (ee) {
        const Q = c.value.filter((pe) => (pe.shard_group || Y(pe.path)) === ee);
        D ? Q.forEach((pe) => N.delete(pe.path)) : Q.forEach((pe) => N.add(pe.path));
      } else
        D ? N.delete(A.path) : N.add(A.path);
      u.value = N;
    }
    function E() {
      const A = new Set(u.value);
      for (const N of P.value)
        N.is_model_file && A.add(N.path);
      u.value = A;
    }
    function T() {
      u.value = /* @__PURE__ */ new Set();
    }
    function O() {
      return w.value === "__custom__" ? _.value.trim() : p.value.trim() ? `${w.value}/${p.value.trim()}` : w.value;
    }
    function le() {
      if (u.value.size === 0 || !I.value) return;
      const A = O(), N = [];
      for (const D of u.value) {
        const ee = c.value.find((Q) => Q.path === D);
        ee && N.push({
          url: _w(o.repoId, o.revision, ee.path),
          destination: A,
          filename: ee.path.split("/").pop() || ee.path
        });
      }
      n("queue", N);
    }
    async function Z() {
      if (o.repoId) {
        d.value = !0, m.value = null;
        try {
          const A = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, N = await l(A);
          if (c.value = N.files, o.preselectedFile) {
            const D = c.value.find((ee) => ee.path === o.preselectedFile);
            D && W(D);
          }
        } catch (A) {
          m.value = A instanceof Error ? A.message : "Failed to load repository";
        } finally {
          d.value = !1;
        }
      }
    }
    async function V() {
      try {
        const A = await i();
        C.value = A.directories, A.directories.length > 0 && !w.value && (w.value = A.directories[0]);
      } catch {
        C.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], w.value || (w.value = "checkpoints");
      }
    }
    return yt(() => [o.repoId, o.revision], () => {
      o.repoId && Z();
    }, { immediate: !1 }), Qe(() => {
      Z(), V();
    }), (A, N) => (a(), r("div", kw, [
      t("div", bw, [
        t("button", {
          class: "back-btn",
          onClick: N[0] || (N[0] = (D) => A.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", $w, [
          t("span", Cw, f(e.repoId), 1),
          e.revision ? (a(), r("span", xw, f(e.revision), 1)) : y("", !0)
        ])
      ]),
      d.value ? (a(), r("div", Sw, " Loading repository files... ")) : m.value ? (a(), r("div", Iw, f(m.value), 1)) : (a(), r(K, { key: 2 }, [
        t("div", Ew, [
          x(Tt, {
            modelValue: v.value,
            "onUpdate:modelValue": N[1] || (N[1] = (D) => v.value = D),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", Tw, [
            t("button", {
              class: xe(["toggle-btn", { active: g.value }]),
              onClick: N[2] || (N[2] = (D) => g.value = !g.value)
            }, f(g.value ? "Models Only" : "All Files"), 3),
            t("button", {
              class: "action-btn",
              onClick: E
            }, "Auto-Select Models"),
            t("button", {
              class: "action-btn",
              onClick: T
            }, "Clear")
          ])
        ]),
        t("div", Pw, [
          P.value.length === 0 ? (a(), r("div", Rw, f(c.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (a(), r("div", Mw, [
            (a(!0), r(K, null, ve(P.value, (D) => (a(), r("div", {
              key: D.path,
              class: xe(["file-item", { selected: u.value.has(D.path) }]),
              onClick: (ee) => W(D)
            }, [
              t("input", {
                type: "checkbox",
                checked: u.value.has(D.path),
                class: "file-checkbox",
                onClick: N[3] || (N[3] = it(() => {
                }, ["stop"])),
                onChange: (ee) => W(D)
              }, null, 40, Lw),
              t("span", Ow, f(D.path), 1),
              t("span", Aw, f(q(D.size)), 1)
            ], 10, Dw))), 128))
          ]))
        ]),
        t("div", Uw, [
          N[7] || (N[7] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", Nw, [
            x(Cr, {
              modelValue: w.value,
              "onUpdate:modelValue": N[4] || (N[4] = (D) => w.value = D),
              options: M.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            w.value !== "__custom__" ? (a(), r("span", zw, "/")) : y("", !0),
            w.value !== "__custom__" ? (a(), L(Tt, {
              key: 1,
              modelValue: p.value,
              "onUpdate:modelValue": N[5] || (N[5] = (D) => p.value = D),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : y("", !0)
          ]),
          w.value === "__custom__" ? (a(), L(Tt, {
            key: 0,
            modelValue: _.value,
            "onUpdate:modelValue": N[6] || (N[6] = (D) => _.value = D),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : y("", !0)
        ]),
        t("div", Fw, [
          t("span", Bw, f(u.value.size) + " file(s) selected", 1),
          t("span", Vw, f(q(S.value)), 1)
        ]),
        t("div", Ww, [
          x(Te, {
            variant: "primary",
            disabled: u.value.size === 0 || !I.value,
            onClick: le
          }, {
            default: h(() => [...N[8] || (N[8] = [
              $(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), jw = /* @__PURE__ */ fe(Gw, [["__scopeId", "data-v-c7d5e841"]]), Hw = { class: "huggingface-tab" }, Kw = {
  key: 0,
  class: "search-section"
}, qw = { class: "search-bar" }, Yw = {
  key: 1,
  class: "search-results"
}, Jw = {
  key: 0,
  class: "loading-state"
}, Qw = {
  key: 1,
  class: "error-state"
}, Xw = {
  key: 2,
  class: "results-list"
}, Zw = ["onClick"], e_ = { class: "repo-header" }, t_ = { class: "repo-id" }, s_ = { class: "repo-stats" }, o_ = {
  class: "stat",
  title: "Downloads"
}, n_ = {
  class: "stat",
  title: "Likes"
}, a_ = {
  key: 0,
  class: "repo-desc"
}, l_ = {
  key: 1,
  class: "repo-tags"
}, i_ = {
  key: 3,
  class: "empty-state"
}, r_ = {
  key: 4,
  class: "hint-state"
}, c_ = /* @__PURE__ */ de({
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
      const P = yw(b);
      if (P.kind === "file" && P.repoId && P.path) {
        d.value = P.repoId, m.value = P.revision || "main";
        const M = P.path.split("/");
        M.length > 1 ? v.value = M.slice(0, -1).join("/") : v.value = void 0, g.value = P.path, o.value = "browse";
        return;
      }
      if (P.kind === "repo" && P.repoId) {
        d.value = P.repoId, m.value = P.revision || "main", v.value = P.path, g.value = void 0, o.value = "browse";
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
    return (b, P) => (a(), r("div", Hw, [
      o.value === "search" ? (a(), r("div", Kw, [
        t("div", qw, [
          x(Tt, {
            modelValue: n.value,
            "onUpdate:modelValue": P[0] || (P[0] = (M) => n.value = M),
            placeholder: "Search repos, paste URL, or enter user/repo...",
            onKeydown: Ht(p, ["enter"])
          }, null, 8, ["modelValue"]),
          x(Te, {
            variant: "primary",
            onClick: p,
            loading: i.value
          }, {
            default: h(() => [...P[2] || (P[2] = [
              $(" Search ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ])) : y("", !0),
      o.value === "search" ? (a(), r("div", Yw, [
        i.value ? (a(), r("div", Jw, " Searching HuggingFace... ")) : c.value ? (a(), r("div", Qw, f(c.value), 1)) : l.value.length > 0 ? (a(), r("div", Xw, [
          (a(!0), r(K, null, ve(l.value, (M) => (a(), r("div", {
            key: M.repo_id,
            class: "repo-card",
            onClick: (I) => _(M.repo_id)
          }, [
            t("div", e_, [
              t("span", t_, f(M.repo_id), 1),
              t("div", s_, [
                t("span", o_, [
                  P[3] || (P[3] = t("span", { class: "stat-icon" }, "↓", -1)),
                  $(" " + f(w(M.downloads)), 1)
                ]),
                t("span", n_, [
                  P[4] || (P[4] = t("span", { class: "stat-icon" }, "★", -1)),
                  $(" " + f(w(M.likes)), 1)
                ])
              ])
            ]),
            M.description ? (a(), r("p", a_, f(M.description), 1)) : y("", !0),
            M.tags.length > 0 ? (a(), r("div", l_, [
              (a(!0), r(K, null, ve(M.tags.slice(0, 5), (I) => (a(), r("span", {
                key: I,
                class: "tag"
              }, f(I), 1))), 128))
            ])) : y("", !0)
          ], 8, Zw))), 128))
        ])) : u.value ? (a(), r("div", i_, " No repositories found ")) : (a(), r("div", r_, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (a(), L(jw, {
        key: 2,
        "repo-id": d.value,
        revision: m.value,
        "initial-path": v.value,
        "preselected-file": g.value,
        onBack: C,
        onQueue: P[1] || (P[1] = (M) => b.$emit("queue", M))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"]))
    ]));
  }
}), u_ = /* @__PURE__ */ fe(c_, [["__scopeId", "data-v-88ed2d62"]]), d_ = { class: "civitai-tab" }, f_ = /* @__PURE__ */ de({
  __name: "CivitaiTab",
  setup(e) {
    return (s, o) => (a(), r("div", d_, [...o[0] || (o[0] = [
      t("div", { class: "placeholder" }, [
        t("div", { class: "icon" }, "🎨"),
        t("h3", null, "Civitai Integration"),
        t("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), m_ = /* @__PURE__ */ fe(f_, [["__scopeId", "data-v-44948051"]]), v_ = { class: "direct-url-tab" }, p_ = { class: "input-group" }, g_ = { class: "input-group" }, h_ = {
  key: 0,
  class: "error"
}, y_ = { class: "actions" }, w_ = /* @__PURE__ */ de({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: s }) {
    const o = s, n = k(""), l = k(""), i = z(() => {
      const d = l.value.trim();
      if (!d) return null;
      const m = d.replace(/\\/g, "/").split("/").pop() || "";
      return m.includes(".") && !m.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), c = z(() => n.value.trim() !== "" && l.value.trim() !== "" && !i.value), u = () => {
      if (!c.value) return;
      const d = l.value.replace(/\\/g, "/").split("/").pop() || "";
      o("queue", [{
        url: n.value.trim(),
        targetPath: l.value.trim(),
        filename: d
      }]), n.value = "", l.value = "";
    };
    return (d, m) => (a(), r("div", v_, [
      t("div", p_, [
        m[2] || (m[2] = t("label", null, "Download URL", -1)),
        x(Tt, {
          modelValue: n.value,
          "onUpdate:modelValue": m[0] || (m[0] = (v) => n.value = v),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      t("div", g_, [
        m[3] || (m[3] = t("label", null, "Target Path (relative to models directory)", -1)),
        x(Tt, {
          modelValue: l.value,
          "onUpdate:modelValue": m[1] || (m[1] = (v) => l.value = v),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        i.value ? (a(), r("p", h_, f(i.value), 1)) : y("", !0)
      ]),
      m[5] || (m[5] = t("p", { class: "note" }, "Model will be queued for background download.", -1)),
      t("div", y_, [
        x(Te, {
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
}), __ = /* @__PURE__ */ fe(w_, [["__scopeId", "data-v-01def7aa"]]), k_ = { class: "download-modal" }, b_ = { class: "tab-bar" }, $_ = ["onClick"], C_ = { class: "tab-content" }, x_ = /* @__PURE__ */ de({
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
    return (m, v) => e.show ? (a(), L(ft, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: d
    }, {
      body: h(() => [
        t("div", k_, [
          t("div", b_, [
            (a(), r(K, null, ve(l, (g) => t("button", {
              key: g.id,
              class: xe(["tab-btn", { active: i.value === g.id }]),
              onClick: (w) => i.value = g.id
            }, f(g.icon) + " " + f(g.label), 11, $_)), 64))
          ]),
          t("div", C_, [
            i.value === "huggingface" ? (a(), L(u_, {
              key: 0,
              onQueue: c
            })) : i.value === "civitai" ? (a(), L(m_, { key: 1 })) : i.value === "direct" ? (a(), L(__, {
              key: 2,
              onQueue: u
            })) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        x(Te, {
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
}), S_ = /* @__PURE__ */ fe(x_, [["__scopeId", "data-v-90a9f401"]]), I_ = {
  key: 0,
  class: "indexing-progress"
}, E_ = { class: "progress-info" }, T_ = { class: "progress-label" }, P_ = { class: "progress-count" }, R_ = { class: "progress-bar" }, M_ = { class: "modal-content" }, D_ = { class: "modal-header" }, L_ = { class: "modal-body" }, O_ = { class: "input-group" }, A_ = { class: "current-path" }, U_ = { class: "input-group" }, N_ = { class: "modal-footer" }, z_ = /* @__PURE__ */ de({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: i
    } = tt(), c = s, u = k([]), d = k(!1), m = k(!1), v = k(null), g = k(""), w = k(!1), p = k(null), _ = k(!1), C = k(null), b = k(""), P = k(!1), M = k(!1), I = k(null), S = z(
      () => u.value.reduce((V, A) => V + (A.size || 0), 0)
    ), q = z(() => {
      if (!g.value.trim()) return u.value;
      const V = g.value.toLowerCase();
      return u.value.filter((A) => {
        const N = A, D = A.sha256 || N.sha256_hash || "";
        return A.filename.toLowerCase().includes(V) || D.toLowerCase().includes(V);
      });
    }), Y = z(() => {
      const V = {};
      for (const N of q.value) {
        const D = N.type || "other";
        V[D] || (V[D] = []), V[D].push(N);
      }
      const A = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(V).sort(([N], [D]) => {
        const ee = A.indexOf(N), Q = A.indexOf(D);
        return ee >= 0 && Q >= 0 ? ee - Q : ee >= 0 ? -1 : Q >= 0 ? 1 : N.localeCompare(D);
      }).map(([N, D]) => ({ type: N, models: D }));
    });
    function W(V) {
      if (!V) return "Unknown";
      const A = 1024 * 1024 * 1024, N = 1024 * 1024;
      return V >= A ? `${(V / A).toFixed(1)} GB` : V >= N ? `${(V / N).toFixed(0)} MB` : `${(V / 1024).toFixed(0)} KB`;
    }
    function E(V) {
      p.value = V.hash || V.filename;
    }
    async function T() {
      m.value = !0, v.value = null;
      try {
        const V = await n();
        await le(), V.changes > 0 && console.log(`Scan complete: ${V.changes} changes detected`);
      } catch (V) {
        v.value = V instanceof Error ? V.message : "Failed to scan models";
      } finally {
        m.value = !1;
      }
    }
    async function O() {
      if (b.value.trim()) {
        P.value = !0, v.value = null;
        try {
          const V = await i(b.value.trim());
          C.value = V.path, _.value = !1, b.value = "", await le(), console.log(`Directory changed: ${V.models_indexed} models indexed`), c("refresh");
        } catch (V) {
          v.value = V instanceof Error ? V.message : "Failed to change directory";
        } finally {
          P.value = !1;
        }
      }
    }
    async function le() {
      d.value = !0, v.value = null;
      try {
        u.value = await o();
      } catch (V) {
        v.value = V instanceof Error ? V.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function Z() {
      try {
        const V = await l();
        C.value = V.path;
      } catch {
      }
    }
    return Qe(() => {
      le(), Z();
    }), (V, A) => (a(), r(K, null, [
      x(Pt, null, {
        header: h(() => [
          x(Rt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: A[2] || (A[2] = (N) => w.value = !0)
          }, {
            actions: h(() => [
              x(re, {
                variant: "primary",
                size: "sm",
                disabled: m.value,
                onClick: T
              }, {
                default: h(() => [
                  $(f(m.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              x(re, {
                variant: "primary",
                size: "sm",
                onClick: A[0] || (A[0] = (N) => _.value = !0)
              }, {
                default: h(() => [...A[11] || (A[11] = [
                  $(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              x(re, {
                variant: "primary",
                size: "sm",
                onClick: A[1] || (A[1] = (N) => M.value = !0)
              }, {
                default: h(() => [...A[12] || (A[12] = [
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
          I.value ? (a(), r("div", I_, [
            t("div", E_, [
              t("span", T_, f(I.value.message), 1),
              t("span", P_, f(I.value.current) + "/" + f(I.value.total), 1)
            ]),
            t("div", R_, [
              t("div", {
                class: "progress-fill",
                style: qt({ width: `${I.value.current / I.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          x($o, {
            modelValue: g.value,
            "onUpdate:modelValue": A[3] || (A[3] = (N) => g.value = N),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || I.value ? (a(), L(Ps, {
            key: 0,
            message: I.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (a(), L(Rs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: le
          }, null, 8, ["message"])) : (a(), r(K, { key: 2 }, [
            u.value.length ? (a(), L(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(u.value.length) + " models • " + f(W(S.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(K, null, ve(Y.value, (N) => (a(), L(lt, {
              key: N.type,
              title: N.type.toUpperCase(),
              count: N.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (a(!0), r(K, null, ve(N.models, (D) => (a(), L(Et, {
                  key: D.sha256 || D.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...A[13] || (A[13] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(f(D.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(W(D.size)), 1)
                  ]),
                  details: h(() => [
                    x(dt, {
                      label: "Hash:",
                      value: D.hash ? D.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ee) => E(D)
                    }, {
                      default: h(() => [...A[14] || (A[14] = [
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
            q.value.length ? y("", !0) : (a(), L(ns, {
              key: 1,
              icon: "📭",
              message: g.value ? `No models match '${g.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      x(as, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: A[4] || (A[4] = (N) => w.value = !1)
      }, {
        content: h(() => [...A[15] || (A[15] = [
          t("p", null, [
            $(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            $(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), L(ol, {
        key: 0,
        identifier: p.value,
        onClose: A[5] || (A[5] = (N) => p.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (a(), L(Ct, { to: "body" }, [
        _.value ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: A[9] || (A[9] = it((N) => _.value = !1, ["self"]))
        }, [
          t("div", M_, [
            t("div", D_, [
              A[16] || (A[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: A[6] || (A[6] = (N) => _.value = !1)
              }, "✕")
            ]),
            t("div", L_, [
              t("div", O_, [
                A[17] || (A[17] = t("label", null, "Current Directory", -1)),
                t("code", A_, f(C.value || "Not set"), 1)
              ]),
              t("div", U_, [
                A[18] || (A[18] = t("label", null, "New Directory Path", -1)),
                x(Tt, {
                  modelValue: b.value,
                  "onUpdate:modelValue": A[7] || (A[7] = (N) => b.value = N),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              A[19] || (A[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", N_, [
              x(Te, {
                variant: "secondary",
                onClick: A[8] || (A[8] = (N) => _.value = !1)
              }, {
                default: h(() => [...A[20] || (A[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              x(Te, {
                variant: "primary",
                disabled: !b.value.trim() || P.value,
                loading: P.value,
                onClick: O
              }, {
                default: h(() => [
                  $(f(P.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      x(S_, {
        show: M.value,
        onClose: A[10] || (A[10] = (N) => M.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), F_ = /* @__PURE__ */ fe(z_, [["__scopeId", "data-v-3705114c"]]), B_ = { class: "node-details" }, V_ = { class: "status-row" }, W_ = {
  key: 0,
  class: "detail-row"
}, G_ = { class: "value" }, j_ = { class: "detail-row" }, H_ = { class: "value" }, K_ = {
  key: 1,
  class: "detail-row"
}, q_ = { class: "value mono" }, Y_ = {
  key: 2,
  class: "detail-row"
}, J_ = ["href"], Q_ = {
  key: 3,
  class: "detail-row"
}, X_ = { class: "value mono small" }, Z_ = { class: "detail-row" }, ek = {
  key: 0,
  class: "value"
}, tk = {
  key: 1,
  class: "workflow-list"
}, sk = /* @__PURE__ */ de({
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
    return (u, d) => (a(), L(ft, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (m) => n("close"))
    }, {
      body: h(() => [
        t("div", B_, [
          t("div", V_, [
            d[2] || (d[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: xe(["status-badge", l.value])
            }, f(i.value), 3)
          ]),
          e.node.version ? (a(), r("div", W_, [
            d[3] || (d[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", G_, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          t("div", j_, [
            d[4] || (d[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", H_, f(c.value), 1)
          ]),
          e.node.registry_id ? (a(), r("div", K_, [
            d[5] || (d[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", q_, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), r("div", Y_, [
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
            ], 8, J_)
          ])) : y("", !0),
          e.node.download_url ? (a(), r("div", Q_, [
            d[8] || (d[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", X_, f(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", Z_, [
            d[9] || (d[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), r("span", ek, " Not used in any workflows ")) : (a(), r("div", tk, [
              (a(!0), r(K, null, ve(e.node.used_in_workflows, (m) => (a(), r("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        x(Te, {
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
}), ok = /* @__PURE__ */ fe(sk, [["__scopeId", "data-v-b342f626"]]), nk = { class: "dialog-message" }, ak = {
  key: 0,
  class: "dialog-details"
}, lk = {
  key: 1,
  class: "dialog-warning"
}, ik = /* @__PURE__ */ de({
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
    return (s, o) => (a(), L(ft, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => s.$emit("cancel"))
    }, {
      body: h(() => [
        t("p", nk, f(e.message), 1),
        e.details && e.details.length ? (a(), r("div", ak, [
          (a(!0), r(K, null, ve(e.details, (n, l) => (a(), r("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), r("p", lk, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          $(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        x(Te, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => s.$emit("cancel"))
        }, {
          default: h(() => [
            $(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), L(Te, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => s.$emit("secondary"))
        }, {
          default: h(() => [
            $(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        x(Te, {
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
}), nl = /* @__PURE__ */ fe(ik, [["__scopeId", "data-v-3670b9f5"]]), rk = { class: "mismatch-warning" }, ck = { class: "version-mismatch" }, uk = { class: "version-actual" }, dk = { class: "version-expected" }, fk = { key: 0 }, mk = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, vk = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, pk = /* @__PURE__ */ de({
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
    }), m = k(!1), v = k(null), g = k(""), w = k(!1), p = k(null), _ = k(null), C = z(() => {
      if (!g.value.trim()) return d.value.nodes;
      const Z = g.value.toLowerCase();
      return d.value.nodes.filter(
        (V) => {
          var A, N;
          return V.name.toLowerCase().includes(Z) || ((A = V.description) == null ? void 0 : A.toLowerCase().includes(Z)) || ((N = V.repository) == null ? void 0 : N.toLowerCase().includes(Z));
        }
      );
    }), b = z(
      () => C.value.filter((Z) => Z.installed && Z.tracked)
    ), P = z(
      () => C.value.filter((Z) => !Z.installed && Z.tracked)
    ), M = z(
      () => C.value.filter((Z) => Z.installed && !Z.tracked)
    );
    function I(Z) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[Z] || Z;
    }
    const S = z(() => o.versionMismatches.length > 0);
    function q(Z) {
      return !Z.used_in_workflows || Z.used_in_workflows.length === 0 ? "Not used in any workflows" : Z.used_in_workflows.length === 1 ? Z.used_in_workflows[0] : `${Z.used_in_workflows.length} workflows`;
    }
    function Y(Z) {
      p.value = Z;
    }
    function W() {
      n("open-node-manager");
    }
    function E(Z) {
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
            const V = await i(Z);
            V.status === "success" ? (n("toast", `✓ Node "${Z}" tracked as development`, "success"), await le()) : n("toast", `Failed to track node: ${V.message || "Unknown error"}`, "error");
          } catch (V) {
            n("toast", `Error tracking node: ${V instanceof Error ? V.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function T(Z) {
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
            const V = await u(Z);
            V.status === "success" ? (n("toast", `✓ Node "${Z}" removed`, "success"), await le()) : n("toast", `Failed to remove node: ${V.message || "Unknown error"}`, "error");
          } catch (V) {
            n("toast", `Error removing node: ${V instanceof Error ? V.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function O(Z) {
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
            const V = await c(Z);
            V.status === "success" ? (n("toast", `✓ Node "${Z}" installed`, "success"), await le()) : n("toast", `Failed to install node: ${V.message || "Unknown error"}`, "error");
          } catch (V) {
            n("toast", `Error installing node: ${V instanceof Error ? V.message : "Unknown error"}`, "error");
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
    return Qe(le), (Z, V) => (a(), r(K, null, [
      x(Pt, null, {
        header: h(() => [
          x(Rt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: V[0] || (V[0] = (A) => w.value = !0)
          }, {
            actions: h(() => [
              x(re, {
                variant: "primary",
                size: "sm",
                onClick: W
              }, {
                default: h(() => [...V[7] || (V[7] = [
                  $(" Browse Nodes ", -1)
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
            "onUpdate:modelValue": V[1] || (V[1] = (A) => g.value = A),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          m.value ? (a(), L(Ps, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (a(), L(Rs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: le
          }, null, 8, ["message"])) : (a(), r(K, { key: 2 }, [
            d.value.total_count ? (a(), L(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(f(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (a(), r(K, { key: 0 }, [
                  $(" • " + f(d.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                d.value.untracked_count ? (a(), r(K, { key: 1 }, [
                  $(" • " + f(d.value.untracked_count) + " untracked", 1)
                ], 64)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            S.value ? (a(), L(lt, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                t("div", rk, [
                  V[8] || (V[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), r(K, null, ve(e.versionMismatches, (A) => (a(), L(Et, {
                  key: A.name,
                  status: "warning"
                }, {
                  icon: h(() => [...V[9] || (V[9] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(A.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", ck, [
                      t("span", uk, f(A.actual), 1),
                      V[10] || (V[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", dk, f(A.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    x(re, {
                      variant: "warning",
                      size: "sm",
                      onClick: V[2] || (V[2] = (N) => n("repair-environment"))
                    }, {
                      default: h(() => [...V[11] || (V[11] = [
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
            M.value.length ? (a(), L(lt, {
              key: 2,
              title: "UNTRACKED",
              count: M.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(K, null, ve(M.value, (A) => (a(), L(Et, {
                  key: A.name,
                  status: "warning"
                }, {
                  icon: h(() => [...V[12] || (V[12] = [
                    $("?", -1)
                  ])]),
                  title: h(() => [
                    $(f(A.name), 1)
                  ]),
                  subtitle: h(() => [...V[13] || (V[13] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    x(dt, {
                      label: "Used by:",
                      value: q(A)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => Y(A)
                    }, {
                      default: h(() => [...V[14] || (V[14] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (N) => E(A.name)
                    }, {
                      default: h(() => [...V[15] || (V[15] = [
                        $(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(re, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (N) => T(A.name)
                    }, {
                      default: h(() => [...V[16] || (V[16] = [
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
            b.value.length ? (a(), L(lt, {
              key: 3,
              title: "INSTALLED",
              count: b.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(K, null, ve(b.value, (A) => (a(), L(Et, {
                  key: A.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    $(f(A.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    $(f(A.name), 1)
                  ]),
                  subtitle: h(() => [
                    A.version ? (a(), r("span", fk, f(A.source === "development" ? "" : "v") + f(A.version), 1)) : (a(), r("span", mk, "version unknown")),
                    t("span", vk, " • " + f(I(A.source)), 1)
                  ]),
                  details: h(() => [
                    x(dt, {
                      label: "Used by:",
                      value: q(A)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => Y(A)
                    }, {
                      default: h(() => [...V[17] || (V[17] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: W
                    }, {
                      default: h(() => [...V[18] || (V[18] = [
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
            P.value.length ? (a(), L(lt, {
              key: 4,
              title: "MISSING",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(K, null, ve(P.value, (A) => (a(), L(Et, {
                  key: A.name,
                  status: "missing"
                }, {
                  icon: h(() => [...V[19] || (V[19] = [
                    $("!", -1)
                  ])]),
                  title: h(() => [
                    $(f(A.name), 1)
                  ]),
                  subtitle: h(() => [...V[20] || (V[20] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    x(dt, {
                      label: "Required by:",
                      value: q(A)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => Y(A)
                    }, {
                      default: h(() => [...V[21] || (V[21] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (N) => O(A.name)
                    }, {
                      default: h(() => [...V[22] || (V[22] = [
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
            !b.value.length && !P.value.length && !M.value.length ? (a(), L(ns, {
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
        onClose: V[4] || (V[4] = (A) => w.value = !1)
      }, {
        content: h(() => [...V[23] || (V[23] = [
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
          x(re, {
            variant: "primary",
            onClick: V[3] || (V[3] = (A) => w.value = !1)
          }, {
            default: h(() => [...V[24] || (V[24] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), L(ok, {
        key: 0,
        node: p.value,
        onClose: V[5] || (V[5] = (A) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      _.value ? (a(), L(nl, {
        key: 1,
        title: _.value.title,
        message: _.value.message,
        warning: _.value.warning,
        "confirm-label": _.value.confirmLabel,
        destructive: _.value.destructive,
        onConfirm: _.value.onConfirm,
        onCancel: V[6] || (V[6] = (A) => _.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), gk = /* @__PURE__ */ fe(pk, [["__scopeId", "data-v-1555a802"]]);
function Er(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const hk = { class: "remote-url-display" }, yk = ["title"], wk = ["title"], _k = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, kk = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, bk = /* @__PURE__ */ de({
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
    return (i, c) => (a(), r("div", hk, [
      t("span", {
        class: "url-text",
        title: e.url
      }, f(n.value), 9, yk),
      t("button", {
        class: xe(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), r("svg", kk, [...c[1] || (c[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), r("svg", _k, [...c[0] || (c[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, wk)
    ]));
  }
}), $k = /* @__PURE__ */ fe(bk, [["__scopeId", "data-v-7768a58d"]]), Ck = { class: "remote-title" }, xk = {
  key: 0,
  class: "default-badge"
}, Sk = {
  key: 1,
  class: "sync-badge"
}, Ik = {
  key: 0,
  class: "ahead"
}, Ek = {
  key: 1,
  class: "behind"
}, Tk = {
  key: 1,
  class: "synced"
}, Pk = ["href"], Rk = {
  key: 1,
  class: "remote-url-text"
}, Mk = /* @__PURE__ */ de({
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
    return (m, v) => (a(), L(Et, {
      status: n.value ? "synced" : void 0
    }, so({
      icon: h(() => [
        $(f(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        t("div", Ck, [
          t("span", null, f(e.remote.name), 1),
          n.value ? (a(), r("span", xk, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", Sk, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(K, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", Ik, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", Ek, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", Tk, "✓ synced"))
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
        }, f(d.value), 9, Pk)) : (a(), r("span", Rk, f(d.value), 1))
      ]),
      actions: h(() => [
        x(re, {
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
        x(re, {
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
        x(re, {
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
        x(re, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (g) => m.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            $(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? y("", !0) : (a(), L(re, {
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
          e.remote.push_url !== e.remote.fetch_url ? (a(), L(dt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              x($k, {
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
}), Dk = /* @__PURE__ */ fe(Mk, [["__scopeId", "data-v-8310f3a8"]]), Lk = ["for"], Ok = {
  key: 0,
  class: "base-form-field-required"
}, Ak = { class: "base-form-field-input" }, Uk = {
  key: 1,
  class: "base-form-field-error"
}, Nk = {
  key: 2,
  class: "base-form-field-hint"
}, zk = /* @__PURE__ */ de({
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
      class: xe(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), r("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        $(f(e.label) + " ", 1),
        e.required ? (a(), r("span", Ok, "*")) : y("", !0)
      ], 8, Lk)) : y("", !0),
      t("div", Ak, [
        He(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), r("span", Uk, f(e.error), 1)) : e.hint ? (a(), r("span", Nk, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), va = /* @__PURE__ */ fe(zk, [["__scopeId", "data-v-9a1cf296"]]), Fk = { class: "remote-form" }, Bk = { class: "form-header" }, Vk = { class: "form-body" }, Wk = {
  key: 0,
  class: "form-error"
}, Gk = { class: "form-actions" }, jk = /* @__PURE__ */ de({
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
    yt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
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
    return (m, v) => (a(), r("div", Fk, [
      t("div", Bk, [
        x(Ut, null, {
          default: h(() => [
            $(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", Vk, [
        x(va, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            x(Tt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (g) => l.value.name = g),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        x(va, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            x(Tt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (g) => l.value.fetchUrl = g),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        x(va, { label: "Push URL (optional)" }, {
          default: h(() => [
            x(Tt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (g) => l.value.pushUrl = g),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (a(), r("div", Wk, f(c.value), 1)) : y("", !0)
      ]),
      t("div", Gk, [
        x(re, {
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
        x(re, {
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
}), Hk = /* @__PURE__ */ fe(jk, [["__scopeId", "data-v-56021b18"]]), Kk = { class: "conflict-summary-box" }, qk = { class: "summary-header" }, Yk = { class: "summary-text" }, Jk = { key: 0 }, Qk = {
  key: 1,
  class: "all-resolved"
}, Xk = { class: "summary-progress" }, Zk = { class: "progress-bar" }, eb = { class: "progress-text" }, tb = /* @__PURE__ */ de({
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
    return (n, l) => (a(), r("div", Kk, [
      t("div", qk, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", Yk, [
          t("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), r("p", Jk, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (a(), r("p", Qk, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      t("div", Xk, [
        t("div", Zk, [
          t("div", {
            class: "progress-fill",
            style: qt({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", eb, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), sb = /* @__PURE__ */ fe(tb, [["__scopeId", "data-v-4e9e6cc9"]]), ob = { class: "modal-header" }, nb = { class: "modal-title" }, ab = { class: "modal-body" }, lb = {
  key: 0,
  class: "error-box"
}, ib = {
  key: 0,
  class: "error-hint"
}, rb = {
  key: 1,
  class: "loading-state"
}, cb = { class: "commit-summary" }, ub = {
  key: 0,
  class: "changes-section"
}, db = {
  key: 0,
  class: "change-group",
  open: ""
}, fb = { class: "change-count" }, mb = { class: "change-list" }, vb = {
  key: 0,
  class: "conflict-badge"
}, pb = {
  key: 1,
  class: "change-group"
}, gb = { class: "change-count" }, hb = { class: "change-list" }, yb = {
  key: 2,
  class: "change-group"
}, wb = { class: "change-count" }, _b = { class: "change-list" }, kb = {
  key: 2,
  class: "strategy-section"
}, bb = { class: "radio-group" }, $b = { class: "radio-option" }, Cb = { class: "radio-option" }, xb = { class: "radio-option" }, Sb = {
  key: 3,
  class: "up-to-date"
}, Ib = { class: "modal-actions" }, Xl = "comfygit.pullModelStrategy", Eb = /* @__PURE__ */ de({
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
    yt(l, (b) => {
      localStorage.setItem(Xl, b);
    });
    const i = z(() => {
      var b;
      return ((b = o.error) == null ? void 0 : b.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = z(() => {
      if (!o.preview) return 0;
      const b = o.preview.changes.workflows;
      return b.added.length + b.modified.length + b.deleted.length;
    }), u = z(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = z(() => {
      var b;
      return c.value > 0 || u.value > 0 || (((b = o.preview) == null ? void 0 : b.changes.models.count) || 0) > 0;
    }), m = z(() => o.preview && Er(o.preview) ? o.preview : null), v = z(() => {
      var b;
      return ((b = m.value) == null ? void 0 : b.workflow_conflicts.length) ?? 0;
    }), g = z(() => {
      var b;
      return ((b = o.conflictResolutions) == null ? void 0 : b.size) ?? 0;
    }), w = z(
      () => v.value > 0 && g.value === v.value
    ), p = z(() => !(!o.preview || o.preview.has_uncommitted_changes || m.value && !w.value));
    function _(b) {
      if (!m.value) return !1;
      const P = b.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((M) => M.name === P);
    }
    function C(b) {
      const P = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: b, resolutions: P });
    }
    return (b, P) => {
      var M, I;
      return a(), L(Ct, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: P[11] || (P[11] = (S) => b.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: P[10] || (P[10] = it(() => {
            }, ["stop"]))
          }, [
            t("div", ob, [
              t("h3", nb, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: P[0] || (P[0] = (S) => b.$emit("close"))
              }, "✕")
            ]),
            t("div", ab, [
              e.error ? (a(), r("div", lb, [
                P[13] || (P[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  P[12] || (P[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, f(e.error), 1),
                  i.value ? (a(), r("p", ib, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), r("div", rb, [...P[14] || (P[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (M = e.preview) != null && M.has_uncommitted_changes ? (a(), r(K, { key: 2 }, [
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
              ], 64)) : e.preview ? (a(), r(K, { key: 3 }, [
                t("div", cb, [
                  P[17] || (P[17] = t("span", { class: "icon" }, "📥", -1)),
                  $(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                d.value ? (a(), r("div", ub, [
                  P[21] || (P[21] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (a(), r("details", db, [
                    t("summary", null, [
                      P[18] || (P[18] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", fb, f(c.value) + " changes", 1)
                    ]),
                    t("div", mb, [
                      (a(!0), r(K, null, ve(e.preview.changes.workflows.added, (S) => (a(), r("div", {
                        key: "a-" + S,
                        class: "change-item add"
                      }, " + " + f(S), 1))), 128)),
                      (a(!0), r(K, null, ve(e.preview.changes.workflows.modified, (S) => (a(), r("div", {
                        key: "m-" + S,
                        class: "change-item modify"
                      }, [
                        $(" ~ " + f(S) + " ", 1),
                        _(S) ? (a(), r("span", vb, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), r(K, null, ve(e.preview.changes.workflows.deleted, (S) => (a(), r("div", {
                        key: "d-" + S,
                        class: "change-item delete"
                      }, " - " + f(S), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (a(), r("details", pb, [
                    t("summary", null, [
                      P[19] || (P[19] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", gb, f(u.value) + " to install", 1)
                    ]),
                    t("div", hb, [
                      (a(!0), r(K, null, ve(e.preview.changes.nodes.to_install, (S) => (a(), r("div", {
                        key: S,
                        class: "change-item add"
                      }, " + " + f(S), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), r("details", yb, [
                    t("summary", null, [
                      P[20] || (P[20] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", wb, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", _b, [
                      (a(!0), r(K, null, ve(e.preview.changes.models.referenced, (S) => (a(), r("div", {
                        key: S,
                        class: "change-item"
                      }, f(S), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (a(), L(sb, {
                  key: 1,
                  "conflict-count": v.value,
                  "resolved-count": g.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), r("div", kb, [
                  P[26] || (P[26] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", bb, [
                    t("label", $b, [
                      Ke(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[1] || (P[1] = (S) => l.value = S),
                        value: "all"
                      }, null, 512), [
                        [Zt, l.value]
                      ]),
                      P[22] || (P[22] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", Cb, [
                      Ke(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[2] || (P[2] = (S) => l.value = S),
                        value: "required"
                      }, null, 512), [
                        [Zt, l.value]
                      ]),
                      P[23] || (P[23] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", xb, [
                      Ke(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[3] || (P[3] = (S) => l.value = S),
                        value: "skip"
                      }, null, 512), [
                        [Zt, l.value]
                      ]),
                      P[24] || (P[24] = t("span", null, "Skip model downloads", -1)),
                      P[25] || (P[25] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  P[27] || (P[27] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (a(), r("div", Sb, [
                  P[28] || (P[28] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", Ib, [
              x(re, {
                variant: "secondary",
                onClick: P[4] || (P[4] = (S) => b.$emit("close"))
              }, {
                default: h(() => [...P[29] || (P[29] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), r(K, { key: 0 }, [
                x(re, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: P[5] || (P[5] = (S) => C(!1))
                }, {
                  default: h(() => [...P[30] || (P[30] = [
                    $(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                x(re, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: P[6] || (P[6] = (S) => C(!0))
                }, {
                  default: h(() => [...P[31] || (P[31] = [
                    $(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (I = e.preview) != null && I.has_uncommitted_changes ? (a(), L(re, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: P[7] || (P[7] = (S) => C(!0))
              }, {
                default: h(() => [...P[32] || (P[32] = [
                  $(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), r(K, { key: 2 }, [
                m.value && !w.value ? (a(), L(re, {
                  key: 0,
                  variant: "primary",
                  onClick: P[8] || (P[8] = (S) => n("openConflictResolution"))
                }, {
                  default: h(() => [
                    $(" Resolve Conflicts (" + f(g.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), L(re, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !p.value,
                  onClick: P[9] || (P[9] = (S) => C(!1))
                }, {
                  default: h(() => [...P[33] || (P[33] = [
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
}), Tb = /* @__PURE__ */ fe(Eb, [["__scopeId", "data-v-300c7b2f"]]), Pb = { class: "modal-header" }, Rb = { class: "modal-title" }, Mb = { class: "modal-body" }, Db = {
  key: 0,
  class: "loading-state"
}, Lb = {
  key: 1,
  class: "warning-box"
}, Ob = {
  key: 0,
  class: "commits-section"
}, Ab = { class: "commit-list" }, Ub = { class: "commit-hash" }, Nb = { class: "commit-message" }, zb = { class: "commit-date" }, Fb = { class: "force-option" }, Bb = { class: "checkbox-option" }, Vb = { class: "commit-summary" }, Wb = { key: 0 }, Gb = { key: 1 }, jb = {
  key: 0,
  class: "info-box"
}, Hb = {
  key: 1,
  class: "commits-section"
}, Kb = { class: "commit-list" }, qb = { class: "commit-hash" }, Yb = { class: "commit-message" }, Jb = { class: "commit-date" }, Qb = {
  key: 2,
  class: "up-to-date"
}, Xb = { class: "modal-actions" }, Zb = /* @__PURE__ */ de({
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
      return a(), L(Ct, { to: "body" }, [
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
            t("div", Pb, [
              t("h3", Rb, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: c[0] || (c[0] = (v) => i.$emit("close"))
              }, "✕")
            ]),
            t("div", Mb, [
              e.loading ? (a(), r("div", Db, [...c[8] || (c[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (a(), r("div", Lb, [...c[9] || (c[9] = [
                t("span", { class: "warning-icon" }, "⚠", -1),
                t("div", null, [
                  t("strong", null, "UNCOMMITTED CHANGES"),
                  t("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = e.preview) != null && d.remote_has_new_commits ? (a(), r(K, { key: 2 }, [
                c[13] || (c[13] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "REMOTE HAS NEW COMMITS"),
                    t("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (a(), r("div", Ob, [
                  c[10] || (c[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", Ab, [
                    (a(!0), r(K, null, ve(e.preview.commits, (v) => (a(), r("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", Ub, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", Nb, f(v.message), 1),
                      t("span", zb, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", Fb, [
                  t("label", Bb, [
                    Ke(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": c[1] || (c[1] = (v) => n.value = v)
                    }, null, 512), [
                      [en, n.value]
                    ]),
                    c[11] || (c[11] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  c[12] || (c[12] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (a(), r(K, { key: 3 }, [
                t("div", Vb, [
                  c[14] || (c[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (a(), r("span", Wb, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), r("span", Gb, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (a(), r("div", jb, [...c[15] || (c[15] = [
                  t("span", { class: "info-icon" }, "ℹ", -1),
                  t("span", null, "This will create the remote branch for the first time.", -1)
                ])])) : y("", !0),
                e.preview.commits_ahead > 0 ? (a(), r("div", Hb, [
                  c[16] || (c[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", Kb, [
                    (a(!0), r(K, null, ve(e.preview.commits, (v) => (a(), r("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", qb, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", Yb, f(v.message), 1),
                      t("span", Jb, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (a(), r("div", Qb, [
                  c[17] || (c[17] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", Xb, [
              x(re, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (v) => i.$emit("close"))
              }, {
                default: h(() => [...c[18] || (c[18] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = e.preview) != null && m.remote_has_new_commits ? (a(), r(K, { key: 0 }, [
                x(re, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (v) => i.$emit("pull-first"))
                }, {
                  default: h(() => [...c[19] || (c[19] = [
                    $(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                x(re, {
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
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), L(re, {
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
}), e2 = /* @__PURE__ */ fe(Zb, [["__scopeId", "data-v-ae86b6a7"]]), t2 = { class: "resolution-choice-group" }, s2 = ["disabled"], o2 = ["disabled"], n2 = /* @__PURE__ */ de({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("div", t2, [
      t("button", {
        class: xe(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, s2),
      t("button", {
        class: xe(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, o2)
    ]));
  }
}), a2 = /* @__PURE__ */ fe(n2, [["__scopeId", "data-v-985715ed"]]), l2 = { class: "conflict-header" }, i2 = { class: "conflict-info" }, r2 = { class: "workflow-name" }, c2 = { class: "conflict-description" }, u2 = {
  key: 0,
  class: "resolved-badge"
}, d2 = { class: "resolved-text" }, f2 = { class: "conflict-hashes" }, m2 = { class: "hash-item" }, v2 = { class: "hash-item" }, p2 = { class: "conflict-actions" }, g2 = /* @__PURE__ */ de({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = k(o.resolution);
    yt(() => o.resolution, (d) => {
      l.value = d;
    }), yt(l, (d) => {
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
      var v, g;
      return a(), r("div", {
        class: xe(["conflict-item", { resolved: i.value }])
      }, [
        t("div", l2, [
          m[2] || (m[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", i2, [
            t("code", r2, f(e.conflict.name) + ".json", 1),
            t("div", c2, f(c.value), 1)
          ]),
          i.value ? (a(), r("div", u2, [
            m[1] || (m[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", d2, f(u.value), 1)
          ])) : y("", !0)
        ]),
        t("div", f2, [
          t("span", m2, [
            m[3] || (m[3] = $("Your: ", -1)),
            t("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", v2, [
            m[4] || (m[4] = $("Theirs: ", -1)),
            t("code", null, f(((g = e.conflict.target_hash) == null ? void 0 : g.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", p2, [
          x(a2, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), h2 = /* @__PURE__ */ fe(g2, [["__scopeId", "data-v-506d3bbf"]]), y2 = { class: "resolution-content" }, w2 = {
  key: 0,
  class: "error-box"
}, _2 = { class: "resolution-header" }, k2 = { class: "header-stats" }, b2 = { class: "stat" }, $2 = { class: "stat-value" }, C2 = { class: "stat resolved" }, x2 = { class: "stat-value" }, S2 = {
  key: 0,
  class: "stat pending"
}, I2 = { class: "stat-value" }, E2 = { class: "conflicts-list" }, T2 = {
  key: 1,
  class: "all-resolved-message"
}, P2 = /* @__PURE__ */ de({
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
    function g() {
      n("apply");
    }
    return (w, p) => (a(), L(ft, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        t("div", y2, [
          e.error ? (a(), r("div", w2, [
            p[1] || (p[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              p[0] || (p[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", _2, [
            t("div", k2, [
              t("div", b2, [
                t("span", $2, f(e.workflowConflicts.length), 1),
                p[2] || (p[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", C2, [
                t("span", x2, f(l.value), 1),
                p[3] || (p[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              i.value > 0 ? (a(), r("div", S2, [
                t("span", I2, f(i.value), 1),
                p[4] || (p[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            p[5] || (p[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", E2, [
            (a(!0), r(K, null, ve(e.workflowConflicts, (_) => (a(), L(h2, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (C) => m(_.name, C)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (a(), r("div", T2, [
            p[6] || (p[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + f(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        x(Te, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...p[7] || (p[7] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = t("div", { class: "footer-spacer" }, null, -1)),
        x(Te, {
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
}), R2 = /* @__PURE__ */ fe(P2, [["__scopeId", "data-v-c58d150d"]]), M2 = { class: "node-conflict-item" }, D2 = { class: "node-header" }, L2 = { class: "node-name" }, O2 = { class: "node-id" }, A2 = { class: "version-comparison" }, U2 = { class: "version yours" }, N2 = { class: "version theirs" }, z2 = { class: "chosen-version" }, F2 = { class: "chosen" }, B2 = { class: "chosen-reason" }, V2 = { class: "affected-workflows" }, W2 = { class: "wf-source" }, G2 = { class: "wf-version" }, j2 = /* @__PURE__ */ de({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (a(), r("div", M2, [
      t("div", D2, [
        t("code", L2, f(e.conflict.node_name), 1),
        t("span", O2, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      t("div", A2, [
        t("div", U2, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", N2, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      t("div", z2, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", F2, f(e.conflict.chosen_version), 1),
        t("span", B2, f(e.conflict.chosen_reason), 1)
      ]),
      t("details", V2, [
        t("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (a(!0), r(K, null, ve(e.conflict.affected_workflows, (n) => (a(), r("li", {
            key: n.name
          }, [
            t("code", null, f(n.name), 1),
            t("span", W2, "(" + f(n.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", G2, "needs v" + f(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), H2 = /* @__PURE__ */ fe(j2, [["__scopeId", "data-v-8b626725"]]), K2 = { class: "validation-content" }, q2 = {
  key: 0,
  class: "compatible-message"
}, Y2 = { class: "conflicts-list" }, J2 = {
  key: 2,
  class: "warnings-section"
}, Q2 = /* @__PURE__ */ de({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = z(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (i, c) => (a(), L(ft, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => n("cancel"))
    }, {
      body: h(() => [
        t("div", K2, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), r("div", q2, [
            c[5] || (c[5] = t("span", { class: "icon" }, "✓", -1)),
            t("div", null, [
              c[4] || (c[4] = t("strong", null, "All clear!", -1)),
              t("p", null, "Your workflow choices are compatible. Ready to " + f(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (a(), r(K, { key: 1 }, [
            c[6] || (c[6] = t("div", { class: "warning-header" }, [
              t("span", { class: "icon" }, "⚠"),
              t("div", null, [
                t("strong", null, "Node Version Differences"),
                t("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            t("div", Y2, [
              (a(!0), r(K, null, ve(e.validation.node_conflicts, (u) => (a(), L(H2, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (a(), r("div", J2, [
            c[8] || (c[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (a(!0), r(K, null, ve(e.validation.warnings, (u, d) => (a(), r("li", { key: d }, f(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        x(Te, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => n("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        x(Te, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => n("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            $(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        x(Te, {
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
}), X2 = /* @__PURE__ */ fe(Q2, [["__scopeId", "data-v-fefd26ed"]]), Z2 = { key: 0 }, e$ = /* @__PURE__ */ de({
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
    } = tt(), _ = k([]), C = k(null), b = k({}), P = k(!1), M = k(null), I = k(""), S = k(!1), q = k(null), Y = k(!1), W = k("add"), E = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), T = z(() => {
      if (!I.value.trim()) return _.value;
      const we = I.value.toLowerCase();
      return _.value.filter(
        (H) => H.name.toLowerCase().includes(we) || H.fetch_url.toLowerCase().includes(we) || H.push_url.toLowerCase().includes(we)
      );
    });
    async function O() {
      P.value = !0, M.value = null;
      try {
        const we = await n();
        _.value = we.remotes, C.value = we.current_branch_tracking || null, await Promise.all(
          we.remotes.map(async (H) => {
            const G = await d(H.name);
            G && (b.value[H.name] = G);
          })
        );
      } catch (we) {
        M.value = we instanceof Error ? we.message : "Failed to load remotes";
      } finally {
        P.value = !1;
      }
    }
    function le() {
      W.value = "add", E.value = { name: "", fetchUrl: "", pushUrl: "" }, Y.value = !0;
    }
    function Z(we) {
      const H = _.value.find((G) => G.name === we);
      H && (W.value = "edit", E.value = {
        name: H.name,
        fetchUrl: H.fetch_url,
        pushUrl: H.push_url
      }, Y.value = !0);
    }
    async function V(we) {
      try {
        W.value === "add" ? await l(we.name, we.fetchUrl) : await c(we.name, we.fetchUrl, we.pushUrl || void 0), Y.value = !1, await O();
      } catch (H) {
        M.value = H instanceof Error ? H.message : "Operation failed";
      }
    }
    function A() {
      Y.value = !1, E.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function N(we) {
      q.value = we;
      try {
        await u(we);
        const H = await d(we);
        H && (b.value[we] = H), o("toast", `✓ Fetched from ${we}`, "success");
      } catch (H) {
        o("toast", H instanceof Error ? H.message : "Fetch failed", "error");
      } finally {
        q.value = null;
      }
    }
    async function D(we) {
      if (confirm(`Remove remote "${we}"?`))
        try {
          await i(we), await O();
        } catch (H) {
          M.value = H instanceof Error ? H.message : "Failed to remove remote";
        }
    }
    function ee() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const Q = k("idle"), pe = z(() => Q.value === "pull_preview"), he = z(
      () => Q.value === "resolving" || Q.value === "validating"
    ), Re = z(
      () => Q.value === "validation_review" || Q.value === "executing"
    ), Fe = k(!1), Ue = k(null), qe = k(!1), Ne = k(null), Ie = k(!1), Se = k(null), ye = k(null), me = k(/* @__PURE__ */ new Map()), Pe = k(null), Ee = k(null), U = z(() => Se.value && Er(Se.value) ? Se.value : null);
    async function R(we) {
      Ne.value = we, Q.value = "pull_preview", Ie.value = !0, Se.value = null, ye.value = null;
      try {
        Se.value = await m(we);
      } catch (H) {
        ye.value = H instanceof Error ? H.message : "Failed to load pull preview";
      } finally {
        Ie.value = !1;
      }
    }
    function F() {
      Q.value = "idle", Se.value = null, ye.value = null, Ne.value = null;
    }
    async function j(we) {
      if (!Ne.value) return;
      Q.value = "executing", ye.value = null;
      const H = Ne.value;
      try {
        const G = await v(H, we);
        if (G.rolled_back) {
          ye.value = `Pull failed and was rolled back: ${G.error || "Unknown error"}`, Q.value = "pull_preview";
          return;
        }
        Ce(), Q.value = "idle", o("toast", `✓ Pulled from ${H}`, "success"), await O();
      } catch (G) {
        ye.value = G instanceof Error ? G.message : "Pull failed", Q.value = "pull_preview";
      }
    }
    function te() {
      U.value && (Q.value = "resolving", Ee.value = null);
    }
    function ie(we, H) {
      me.value.set(we, { name: we, resolution: H });
    }
    function ge() {
      Q.value = "pull_preview";
    }
    async function ke() {
      Q.value = "validating", Ee.value = null;
      try {
        const we = Array.from(me.value.values());
        Pe.value = await p(Ne.value, we), Q.value = "validation_review";
      } catch (we) {
        Ee.value = we instanceof Error ? we.message : "Validation failed", Q.value = "resolving";
      }
    }
    async function ne() {
      Q.value = "executing";
      const we = Ne.value;
      try {
        const H = Array.from(me.value.values()), G = await v(we, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: H
        });
        if (G.rolled_back) {
          ye.value = `Pull failed and was rolled back: ${G.error || "Unknown error"}`, Q.value = "pull_preview";
          return;
        }
        Ce(), Q.value = "idle", o("toast", `✓ Pulled from ${we}`, "success"), await O();
      } catch (H) {
        ye.value = H instanceof Error ? H.message : "Pull failed", Q.value = "validation_review";
      }
    }
    function ue() {
      Q.value = "resolving";
    }
    function Me() {
      Ce(), Q.value = "idle";
    }
    function Ce() {
      me.value.clear(), Pe.value = null, Ee.value = null, ye.value = null, Se.value = null, Ne.value = null;
    }
    async function oe(we) {
      Ne.value = we, Fe.value = !0, Ie.value = !0, Ue.value = null;
      try {
        Ue.value = await g(we);
      } catch (H) {
        M.value = H instanceof Error ? H.message : "Failed to load push preview";
      } finally {
        Ie.value = !1;
      }
    }
    function X() {
      Fe.value = !1, Ue.value = null, Ne.value = null;
    }
    async function De(we) {
      if (!Ne.value) return;
      qe.value = !0;
      const H = Ne.value;
      try {
        await w(H, we), X(), o("toast", `✓ Pushed to ${H}`, "success"), await O();
      } catch (G) {
        o("toast", G instanceof Error ? G.message : "Push failed", "error");
      } finally {
        qe.value = !1;
      }
    }
    function be() {
      const we = Ne.value;
      X(), we && R(we);
    }
    return Qe(O), (we, H) => (a(), r(K, null, [
      x(Pt, null, {
        header: h(() => [
          x(Rt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: H[0] || (H[0] = (G) => S.value = !0)
          }, {
            actions: h(() => [
              Y.value ? y("", !0) : (a(), L(re, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: le
              }, {
                default: h(() => [...H[3] || (H[3] = [
                  $(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          Y.value ? y("", !0) : (a(), L($o, {
            key: 0,
            modelValue: I.value,
            "onUpdate:modelValue": H[1] || (H[1] = (G) => I.value = G),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: h(() => [
          P.value ? (a(), L(Ps, {
            key: 0,
            message: "Loading remotes..."
          })) : M.value ? (a(), L(Rs, {
            key: 1,
            message: M.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (a(), r(K, { key: 2 }, [
            Y.value ? (a(), L(Hk, {
              key: 0,
              mode: W.value,
              "remote-name": E.value.name,
              "fetch-url": E.value.fetchUrl,
              "push-url": E.value.pushUrl,
              onSubmit: V,
              onCancel: A
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            _.value.length && !Y.value ? (a(), L(an, {
              key: 1,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                C.value ? (a(), r("span", Z2, " • Tracking: " + f(C.value.remote) + "/" + f(C.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            T.value.length && !Y.value ? (a(), L(lt, {
              key: 2,
              title: "REMOTES",
              count: T.value.length
            }, {
              default: h(() => [
                (a(!0), r(K, null, ve(T.value, (G) => (a(), L(Dk, {
                  key: G.name,
                  remote: G,
                  "sync-status": b.value[G.name],
                  "fetching-remote": q.value,
                  onFetch: N,
                  onEdit: Z,
                  onRemove: D,
                  onPull: R,
                  onPush: oe
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !T.value.length && !Y.value ? (a(), L(ns, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                x(re, {
                  variant: "primary",
                  onClick: le
                }, {
                  default: h(() => [...H[4] || (H[4] = [
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
      x(as, {
        show: S.value,
        title: "About Git Remotes",
        onClose: H[2] || (H[2] = (G) => S.value = !1)
      }, {
        content: h(() => [...H[5] || (H[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            $(" The "),
            t("strong", null, '"origin"'),
            $(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          x(re, {
            variant: "link",
            onClick: ee
          }, {
            default: h(() => [...H[6] || (H[6] = [
              $(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      x(Tb, {
        show: pe.value,
        "remote-name": Ne.value || "",
        preview: Se.value,
        loading: Ie.value,
        pulling: Q.value === "executing",
        error: ye.value,
        "conflict-resolutions": me.value,
        onClose: F,
        onPull: j,
        onOpenConflictResolution: te
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      x(e2, {
        show: Fe.value,
        "remote-name": Ne.value || "",
        preview: Ue.value,
        loading: Ie.value,
        pushing: qe.value,
        onClose: X,
        onPush: De,
        onPullFirst: be
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      he.value && U.value ? (a(), L(R2, {
        key: 0,
        "workflow-conflicts": U.value.workflow_conflicts,
        resolutions: me.value,
        "operation-type": "pull",
        validating: Q.value === "validating",
        error: Ee.value,
        onClose: ge,
        onResolve: ie,
        onApply: ke
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      Re.value && Pe.value ? (a(), L(X2, {
        key: 1,
        validation: Pe.value,
        "operation-type": "pull",
        executing: Q.value === "executing",
        onProceed: ne,
        onGoBack: ue,
        onCancel: Me
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), t$ = /* @__PURE__ */ fe(e$, [["__scopeId", "data-v-9ae3b76d"]]), s$ = { class: "setting-info" }, o$ = { class: "setting-label" }, n$ = {
  key: 0,
  class: "required-marker"
}, a$ = {
  key: 0,
  class: "setting-description"
}, l$ = { class: "setting-control" }, i$ = /* @__PURE__ */ de({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: xe(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", s$, [
        t("div", o$, [
          $(f(e.label) + " ", 1),
          e.required ? (a(), r("span", n$, "*")) : y("", !0)
        ]),
        e.description ? (a(), r("div", a$, f(e.description), 1)) : y("", !0)
      ]),
      t("div", l$, [
        He(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), yn = /* @__PURE__ */ fe(i$, [["__scopeId", "data-v-cb5d236c"]]), r$ = { class: "toggle" }, c$ = ["checked", "disabled"], u$ = /* @__PURE__ */ de({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("label", r$, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, c$),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Zl = /* @__PURE__ */ fe(u$, [["__scopeId", "data-v-71c0f550"]]), d$ = { class: "workspace-settings-content" }, f$ = { class: "settings-section" }, m$ = { class: "path-setting" }, v$ = { class: "path-value" }, p$ = { class: "path-setting" }, g$ = { class: "path-value" }, h$ = { class: "settings-section" }, y$ = { class: "settings-section" }, w$ = { class: "settings-section" }, _$ = /* @__PURE__ */ de({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = o, { getConfig: i, updateConfig: c } = tt(), u = k(!1), d = k(null), m = k(null), v = k(null), g = k(null), w = k(""), p = k(""), _ = k(!1), C = k(!0);
    function b(E) {
      return E.join(" ");
    }
    function P(E) {
      return E.trim() ? E.trim().split(/\s+/) : [];
    }
    const M = z(() => {
      if (!g.value) return !1;
      const E = w.value !== (g.value.civitai_api_key || ""), T = p.value !== b(g.value.comfyui_extra_args || []);
      return E || T;
    });
    async function I() {
      u.value = !0, d.value = null;
      try {
        v.value = await i(n.workspacePath || void 0), g.value = { ...v.value }, w.value = v.value.civitai_api_key || "", p.value = b(v.value.comfyui_extra_args || []);
        const E = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        _.value = E !== "false", C.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
      } catch (E) {
        d.value = E instanceof Error ? E.message : "Failed to load settings";
      } finally {
        u.value = !1;
      }
    }
    async function S() {
      var E, T;
      m.value = null;
      try {
        const O = {};
        w.value !== (((E = g.value) == null ? void 0 : E.civitai_api_key) || "") && (O.civitai_api_key = w.value || null), p.value !== b(((T = g.value) == null ? void 0 : T.comfyui_extra_args) || []) && (O.comfyui_extra_args = P(p.value)), await c(O, n.workspacePath || void 0), await I(), m.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (O) {
        const le = O instanceof Error ? O.message : "Failed to save settings";
        m.value = { type: "error", message: le }, l("error", le);
      }
    }
    function q() {
      g.value && (w.value = g.value.civitai_api_key || "", p.value = b(g.value.comfyui_extra_args || []), m.value = null);
    }
    function Y(E) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(E)), console.log("[ComfyGit] Auto-refresh setting saved:", E);
    }
    function W(E) {
      E ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", E ? "enabled" : "disabled");
    }
    return s({
      saveSettings: S,
      resetSettings: q,
      hasChanges: M,
      loadSettings: I
    }), Qe(I), (E, T) => (a(), r("div", d$, [
      u.value ? (a(), L(Ps, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (a(), L(Rs, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: I
      }, null, 8, ["message"])) : (a(), r(K, { key: 2 }, [
        x(lt, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var O, le;
            return [
              t("div", f$, [
                t("div", m$, [
                  T[4] || (T[4] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  T[5] || (T[5] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", v$, f(((O = v.value) == null ? void 0 : O.workspace_path) || "Loading..."), 1)
                ]),
                t("div", p$, [
                  T[6] || (T[6] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  T[7] || (T[7] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", g$, f(((le = v.value) == null ? void 0 : le.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        x(lt, { title: "API CREDENTIALS" }, {
          default: h(() => [
            t("div", h$, [
              x(yn, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  x(Un, {
                    modelValue: w.value,
                    "onUpdate:modelValue": T[0] || (T[0] = (O) => w.value = O),
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
          default: h(() => [
            t("div", y$, [
              x(yn, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  x(Un, {
                    modelValue: p.value,
                    "onUpdate:modelValue": T[1] || (T[1] = (O) => p.value = O),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              T[8] || (T[8] = t("div", { class: "setting-hint" }, [
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
        x(lt, { title: "UI SETTINGS" }, {
          default: h(() => [
            t("div", w$, [
              x(yn, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  x(Zl, {
                    modelValue: _.value,
                    "onUpdate:modelValue": [
                      T[2] || (T[2] = (O) => _.value = O),
                      Y
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              x(yn, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  x(Zl, {
                    modelValue: C.value,
                    "onUpdate:modelValue": [
                      T[3] || (T[3] = (O) => C.value = O),
                      W
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        m.value ? (a(), L(an, {
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
}), Tr = /* @__PURE__ */ fe(_$, [["__scopeId", "data-v-f28917ec"]]), k$ = /* @__PURE__ */ de({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), L(Pt, null, {
      header: h(() => [
        x(Rt, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var i, c;
            return [
              x(re, {
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
              (c = s.value) != null && c.hasChanges ? (a(), L(re, {
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
        x(Tr, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), b$ = { class: "base-tabs" }, $$ = ["disabled", "onClick"], C$ = {
  key: 0,
  class: "base-tabs__badge"
}, x$ = /* @__PURE__ */ de({
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
    return (i, c) => (a(), r("div", b$, [
      (a(!0), r(K, null, ve(e.tabs, (u) => (a(), r("button", {
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
        $(f(u.label) + " ", 1),
        u.badge ? (a(), r("span", C$, f(u.badge), 1)) : y("", !0)
      ], 10, $$))), 128))
    ]));
  }
}), Pr = /* @__PURE__ */ fe(x$, [["__scopeId", "data-v-ad5e6cad"]]), S$ = { class: "log-viewer-wrapper" }, I$ = ["disabled", "title"], E$ = /* @__PURE__ */ de({
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
      await _t();
      const m = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      m && (m.scrollTop = m.scrollHeight);
    }
    Qe(i), yt(() => s.logs, i);
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
    return (m, v) => (a(), r("div", S$, [
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
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, I$),
        (a(!0), r(K, null, ve(l.value, (g, w) => (a(), r("div", {
          key: w,
          class: xe(`log-line log-level-${g.level.toLowerCase()}`)
        }, f(g.text), 3))), 128))
      ], 544)
    ]));
  }
}), Rr = /* @__PURE__ */ fe(E$, [["__scopeId", "data-v-c0cc6d21"]]), T$ = /* @__PURE__ */ de({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: n,
      getOrchestratorLogPath: l,
      openFile: i
    } = tt(), c = k("workspace"), u = k([]), d = k(!1), m = k(null), v = k(!1), g = k(null), w = k(null), p = k(!1), _ = z(() => c.value === "workspace" ? g.value : w.value);
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
        const [M, I] = await Promise.all([
          o(),
          l()
        ]);
        M.exists && (g.value = M.path), I.exists && (w.value = I.path);
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
    return yt(c, () => {
      C();
    }), Qe(() => {
      C(), b();
    }), (M, I) => (a(), r(K, null, [
      x(Pt, null, {
        header: h(() => [
          x(Rt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (S) => v.value = !0)
          }, {
            actions: h(() => [
              x(re, {
                variant: "secondary",
                size: "sm",
                onClick: P,
                disabled: !_.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: h(() => [
                  $(f(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              x(re, {
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
          x(Pr, {
            modelValue: c.value,
            "onUpdate:modelValue": I[1] || (I[1] = (S) => c.value = S),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (a(), L(Ps, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : m.value ? (a(), L(Rs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (a(), r(K, { key: 2 }, [
            u.value.length === 0 ? (a(), L(ns, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (a(), L(Rr, {
              key: 1,
              logs: u.value,
              "raw-format": c.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      x(as, {
        show: v.value,
        title: "About Logs",
        onClose: I[3] || (I[3] = (S) => v.value = !1)
      }, {
        content: h(() => [...I[4] || (I[4] = [
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
          x(re, {
            variant: "primary",
            onClick: I[2] || (I[2] = (S) => v.value = !1)
          }, {
            default: h(() => [...I[5] || (I[5] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), P$ = /* @__PURE__ */ de({
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
    }), (C, b) => (a(), r(K, null, [
      x(Pt, null, {
        header: h(() => [
          x(Rt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (P) => d.value = !0)
          }, {
            actions: h(() => [
              x(re, {
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
              x(re, {
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
          c.value ? (a(), L(Ps, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (a(), L(Rs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), r(K, { key: 2 }, [
            i.value.length === 0 ? (a(), L(ns, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), L(Rr, {
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
        onClose: b[2] || (b[2] = (P) => d.value = !1)
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
          x(re, {
            variant: "primary",
            onClick: b[1] || (b[1] = (P) => d.value = !1)
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
}), R$ = { class: "env-title" }, M$ = {
  key: 0,
  class: "current-badge"
}, D$ = {
  key: 0,
  class: "branch-info"
}, L$ = /* @__PURE__ */ de({
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
    return (s, o) => (a(), L(Et, {
      status: e.isCurrent ? "synced" : void 0
    }, so({
      icon: h(() => [
        $(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        t("div", R$, [
          t("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), r("span", M$, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (a(), r("span", D$, [
          o[0] || (o[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          $(" " + f(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: h(() => [
        He(s.$slots, "actions", {}, void 0, !0)
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
          e.lastUsed && e.showLastUsed ? (a(), L(dt, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), O$ = /* @__PURE__ */ fe(L$, [["__scopeId", "data-v-9231917a"]]), A$ = { class: "env-details" }, U$ = { class: "status-row" }, N$ = {
  key: 0,
  class: "detail-row"
}, z$ = { class: "value mono" }, F$ = {
  key: 1,
  class: "detail-row"
}, B$ = { class: "value mono small" }, V$ = { class: "detail-row" }, W$ = { class: "value" }, G$ = { class: "detail-row" }, j$ = { class: "value" }, H$ = { class: "detail-row" }, K$ = { class: "value" }, q$ = {
  key: 2,
  class: "section-divider"
}, Y$ = {
  key: 3,
  class: "detail-row"
}, J$ = { class: "value" }, Q$ = {
  key: 4,
  class: "detail-row"
}, X$ = { class: "value" }, Z$ = { class: "footer-actions" }, eC = /* @__PURE__ */ de({
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
    return (l, i) => (a(), L(ft, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: i[2] || (i[2] = (c) => o("close"))
    }, {
      body: h(() => [
        t("div", A$, [
          t("div", U$, [
            i[3] || (i[3] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: xe(["status-badge", e.environment.is_current ? "current" : "inactive"])
            }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          e.environment.current_branch ? (a(), r("div", N$, [
            i[4] || (i[4] = t("span", { class: "label" }, "Branch:", -1)),
            t("span", z$, f(e.environment.current_branch), 1)
          ])) : y("", !0),
          e.environment.path ? (a(), r("div", F$, [
            i[5] || (i[5] = t("span", { class: "label" }, "Path:", -1)),
            t("span", B$, f(e.environment.path), 1)
          ])) : y("", !0),
          i[11] || (i[11] = t("div", { class: "section-divider" }, null, -1)),
          t("div", V$, [
            i[6] || (i[6] = t("span", { class: "label" }, "Workflows:", -1)),
            t("span", W$, f(e.environment.workflow_count), 1)
          ]),
          t("div", G$, [
            i[7] || (i[7] = t("span", { class: "label" }, "Nodes:", -1)),
            t("span", j$, f(e.environment.node_count), 1)
          ]),
          t("div", H$, [
            i[8] || (i[8] = t("span", { class: "label" }, "Models:", -1)),
            t("span", K$, f(e.environment.model_count), 1)
          ]),
          e.environment.created_at || e.environment.last_used ? (a(), r("div", q$)) : y("", !0),
          e.environment.created_at ? (a(), r("div", Y$, [
            i[9] || (i[9] = t("span", { class: "label" }, "Created:", -1)),
            t("span", J$, f(n(e.environment.created_at)), 1)
          ])) : y("", !0),
          e.environment.last_used ? (a(), r("div", Q$, [
            i[10] || (i[10] = t("span", { class: "label" }, "Last Used:", -1)),
            t("span", X$, f(n(e.environment.last_used)), 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", Z$, [
          e.canDelete ? (a(), L(Te, {
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
          x(Te, {
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
}), tC = /* @__PURE__ */ fe(eC, [["__scopeId", "data-v-59855453"]]), Mr = [
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
], Lr = "auto", sC = { class: "progress-bar" }, oC = /* @__PURE__ */ de({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = z(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (n, l) => (a(), r("div", sC, [
      t("div", {
        class: xe(["progress-fill", e.variant]),
        style: qt({ width: o.value })
      }, null, 6)
    ]));
  }
}), ea = /* @__PURE__ */ fe(oC, [["__scopeId", "data-v-1beb0512"]]), nC = { class: "task-progress" }, aC = { class: "progress-info" }, lC = { class: "progress-percentage" }, iC = { class: "progress-message" }, rC = {
  key: 0,
  class: "progress-steps"
}, cC = { class: "step-icon" }, uC = { class: "step-label" }, dC = /* @__PURE__ */ de({
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
    return (l, i) => (a(), r("div", nC, [
      x(ea, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", aC, [
        t("span", lC, f(e.progress) + "%", 1),
        t("span", iC, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), r("div", rC, [
        (a(!0), r(K, null, ve(e.steps, (c) => (a(), r("div", {
          key: c.id,
          class: xe(["step", o(c.id)])
        }, [
          t("span", cC, f(n(c.id)), 1),
          t("span", uC, f(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), zn = /* @__PURE__ */ fe(dC, [["__scopeId", "data-v-9d1de66c"]]), fC = {
  key: 0,
  class: "create-env-form"
}, mC = { class: "form-field" }, vC = { class: "form-field" }, pC = ["value"], gC = { class: "form-field" }, hC = ["disabled"], yC = ["value"], wC = { class: "form-field" }, _C = ["value"], kC = { class: "form-field form-field--checkbox" }, bC = { class: "form-checkbox" }, $C = {
  key: 1,
  class: "create-env-progress"
}, CC = { class: "creating-intro" }, xC = {
  key: 0,
  class: "progress-warning"
}, SC = {
  key: 1,
  class: "create-error"
}, IC = { class: "error-message" }, EC = {
  key: 1,
  class: "footer-status"
}, TC = 10, PC = /* @__PURE__ */ de({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: i } = tt(), c = k(""), u = k(Dr), d = k("latest"), m = k(Lr), v = k(!1), g = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = k(!1), p = k(!1), _ = k({
      progress: 0,
      message: ""
    });
    let C = null, b = 0;
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
    function I() {
      p.value || o("close");
    }
    async function S() {
      const T = c.value.trim();
      if (T) {
        p.value = !0, _.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const O = {
            name: T,
            python_version: u.value,
            comfyui_version: d.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, le = await l(O);
          le.status === "started" ? q() : le.status === "error" && (_.value = {
            progress: 0,
            message: le.message || "Failed to start creation",
            error: le.message
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
      C || (b = 0, C = window.setInterval(async () => {
        try {
          const T = await i();
          b = 0, _.value = {
            progress: T.progress ?? 0,
            message: T.message,
            phase: T.phase,
            error: T.error
          }, T.state === "complete" ? (Y(), o("created", T.environment_name || c.value.trim(), v.value)) : T.state === "error" ? (Y(), _.value.error = T.error || T.message) : T.state === "idle" && p.value && (Y(), _.value.error = "Creation was interrupted. Please try again.");
        } catch {
          b++, b >= TC && (Y(), _.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function Y() {
      C && (clearInterval(C), C = null);
    }
    function W() {
      p.value = !1, _.value = { progress: 0, message: "" }, o("close");
    }
    async function E() {
      w.value = !0;
      try {
        g.value = await n();
      } catch (T) {
        console.error("Failed to load ComfyUI releases:", T);
      } finally {
        w.value = !1;
      }
    }
    return Qe(async () => {
      var T;
      await _t(), (T = M.value) == null || T.focus(), E();
    }), oo(() => {
      Y();
    }), (T, O) => (a(), L(ft, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !p.value,
      onClose: I
    }, {
      body: h(() => [
        p.value ? (a(), r("div", $C, [
          t("p", CC, [
            O[11] || (O[11] = $(" Creating environment ", -1)),
            t("strong", null, f(c.value), 1),
            O[12] || (O[12] = $("... ", -1))
          ]),
          x(zn, {
            progress: _.value.progress,
            message: _.value.message,
            "current-phase": _.value.phase,
            variant: _.value.error ? "error" : "default",
            "show-steps": !0,
            steps: P
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          _.value.error ? y("", !0) : (a(), r("p", xC, " This may take several minutes. Please wait... ")),
          _.value.error ? (a(), r("div", SC, [
            t("p", IC, f(_.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), r("div", fC, [
          t("div", mC, [
            O[6] || (O[6] = t("label", { class: "form-label" }, "Name", -1)),
            Ke(t("input", {
              ref_key: "nameInput",
              ref: M,
              "onUpdate:modelValue": O[0] || (O[0] = (le) => c.value = le),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Ht(S, ["enter"])
            }, null, 544), [
              [zt, c.value]
            ])
          ]),
          t("div", vC, [
            O[7] || (O[7] = t("label", { class: "form-label" }, "Python Version", -1)),
            Ke(t("select", {
              "onUpdate:modelValue": O[1] || (O[1] = (le) => u.value = le),
              class: "form-select"
            }, [
              (a(!0), r(K, null, ve(Ve(Mr), (le) => (a(), r("option", {
                key: le,
                value: le
              }, f(le), 9, pC))), 128))
            ], 512), [
              [hs, u.value]
            ])
          ]),
          t("div", gC, [
            O[8] || (O[8] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ke(t("select", {
              "onUpdate:modelValue": O[2] || (O[2] = (le) => d.value = le),
              class: "form-select",
              disabled: w.value
            }, [
              (a(!0), r(K, null, ve(g.value, (le) => (a(), r("option", {
                key: le.tag_name,
                value: le.tag_name
              }, f(le.name), 9, yC))), 128))
            ], 8, hC), [
              [hs, d.value]
            ])
          ]),
          t("div", wC, [
            O[9] || (O[9] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ke(t("select", {
              "onUpdate:modelValue": O[3] || (O[3] = (le) => m.value = le),
              class: "form-select"
            }, [
              (a(!0), r(K, null, ve(Ve(al), (le) => (a(), r("option", {
                key: le,
                value: le
              }, f(le) + f(le === "auto" ? " (detect GPU)" : ""), 9, _C))), 128))
            ], 512), [
              [hs, m.value]
            ])
          ]),
          t("div", kC, [
            t("label", bC, [
              Ke(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": O[4] || (O[4] = (le) => v.value = le)
              }, null, 512), [
                [en, v.value]
              ]),
              O[10] || (O[10] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        p.value ? (a(), r(K, { key: 1 }, [
          _.value.error ? (a(), L(Te, {
            key: 0,
            variant: "secondary",
            onClick: W
          }, {
            default: h(() => [...O[15] || (O[15] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), r("span", EC, " Creating environment... "))
        ], 64)) : (a(), r(K, { key: 0 }, [
          x(Te, {
            variant: "primary",
            disabled: !c.value.trim(),
            onClick: S
          }, {
            default: h(() => [...O[13] || (O[13] = [
              $(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          x(Te, {
            variant: "secondary",
            onClick: O[5] || (O[5] = (le) => o("close"))
          }, {
            default: h(() => [...O[14] || (O[14] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), RC = /* @__PURE__ */ fe(PC, [["__scopeId", "data-v-f37eaa42"]]), MC = /* @__PURE__ */ de({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getEnvironments: l } = tt(), i = k([]), c = k(!1), u = k(null), d = k(""), m = k(!1), v = k(!1), g = k(null), w = z(() => {
      if (!d.value.trim()) return i.value;
      const M = d.value.toLowerCase();
      return i.value.filter(
        (I) => {
          var S;
          return I.name.toLowerCase().includes(M) || ((S = I.current_branch) == null ? void 0 : S.toLowerCase().includes(M));
        }
      );
    });
    function p(M, I) {
      v.value = !1, n("created", M, I);
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
    async function P() {
      c.value = !0, u.value = null;
      try {
        i.value = await l();
      } catch (M) {
        u.value = M instanceof Error ? M.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return Qe(P), s({
      loadEnvironments: P,
      openCreateModal: _
    }), (M, I) => (a(), r(K, null, [
      x(Pt, null, {
        header: h(() => [
          x(Rt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (S) => m.value = !0)
          }, {
            actions: h(() => [
              x(re, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: h(() => [...I[6] || (I[6] = [
                  $(" Create ", -1)
                ])]),
                _: 1
              }),
              x(re, {
                variant: "secondary",
                size: "sm",
                onClick: P
              }, {
                default: h(() => [...I[7] || (I[7] = [
                  $(" Refresh ", -1)
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
            "onUpdate:modelValue": I[1] || (I[1] = (S) => d.value = S),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (a(), L(Ps, {
            key: 0,
            message: "Loading environments..."
          })) : u.value ? (a(), L(Rs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (a(), r(K, { key: 2 }, [
            w.value.length ? (a(), L(lt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: h(() => [
                (a(!0), r(K, null, ve(w.value, (S) => (a(), L(O$, {
                  key: S.name,
                  "environment-name": S.name,
                  "is-current": S.is_current,
                  "current-branch": S.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    S.is_current ? y("", !0) : (a(), L(re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => M.$emit("switch", S.name)
                    }, {
                      default: h(() => [...I[8] || (I[8] = [
                        $(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    x(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => C(S)
                    }, {
                      default: h(() => [...I[9] || (I[9] = [
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
            w.value.length ? y("", !0) : (a(), L(ns, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, so({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  x(re, {
                    variant: "primary",
                    onClick: _
                  }, {
                    default: h(() => [...I[10] || (I[10] = [
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
      x(as, {
        show: m.value,
        title: "About Environments",
        onClose: I[3] || (I[3] = (S) => m.value = !1)
      }, {
        content: h(() => [...I[11] || (I[11] = [
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
          x(re, {
            variant: "secondary",
            onClick: I[2] || (I[2] = (S) => m.value = !1)
          }, {
            default: h(() => [...I[12] || (I[12] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      g.value ? (a(), L(tC, {
        key: 0,
        environment: g.value,
        "can-delete": i.value.length > 1,
        onClose: I[4] || (I[4] = (S) => g.value = null),
        onDelete: b
      }, null, 8, ["environment", "can-delete"])) : y("", !0),
      v.value ? (a(), L(RC, {
        key: 1,
        onClose: I[5] || (I[5] = (S) => v.value = !1),
        onCreated: p
      })) : y("", !0)
    ], 64));
  }
}), DC = /* @__PURE__ */ fe(MC, [["__scopeId", "data-v-f95999f4"]]), LC = { class: "file-path" }, OC = { class: "file-path-text" }, AC = ["title"], UC = /* @__PURE__ */ de({
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
    return (l, i) => (a(), r("div", LC, [
      i[0] || (i[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", OC, f(e.path), 1),
      e.copyable ? (a(), r("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, f(o.value ? "✓" : "📋"), 9, AC)) : y("", !0)
    ]));
  }
}), NC = /* @__PURE__ */ fe(UC, [["__scopeId", "data-v-f0982173"]]), zC = { class: "export-blocked" }, FC = { class: "issues-list" }, BC = { class: "issue-message" }, VC = {
  key: 0,
  class: "issue-details"
}, WC = ["onClick"], GC = { class: "issue-fix" }, jC = /* @__PURE__ */ de({
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
    return (l, i) => (a(), L(ft, {
      title: "Cannot Export",
      size: "md",
      onClose: i[1] || (i[1] = (c) => l.$emit("close"))
    }, {
      body: h(() => [
        t("div", zC, [
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
          t("div", FC, [
            (a(!0), r(K, null, ve(e.issues, (c, u) => (a(), r("div", {
              key: u,
              class: "issue-item"
            }, [
              t("div", BC, f(c.message), 1),
              c.details.length ? (a(), r("div", VC, [
                (a(!0), r(K, null, ve(n(u), (d, m) => (a(), r("div", {
                  key: m,
                  class: "issue-detail"
                }, f(d), 1))), 128)),
                c.details.length > 3 && !o[u] ? (a(), r("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => o[u] = !0
                }, " +" + f(c.details.length - 3) + " more ", 9, WC)) : y("", !0)
              ])) : y("", !0),
              t("div", GC, [
                c.type === "uncommitted_workflows" ? (a(), r(K, { key: 0 }, [
                  $(" Commit your workflow changes before exporting. ")
                ], 64)) : c.type === "uncommitted_git_changes" ? (a(), r(K, { key: 1 }, [
                  $(" Commit your changes before exporting. ")
                ], 64)) : c.type === "unresolved_issues" ? (a(), r(K, { key: 2 }, [
                  $(" Resolve all workflow issues before exporting. ")
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: h(() => [
        x(Te, {
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
}), Or = /* @__PURE__ */ fe(jC, [["__scopeId", "data-v-b52f5e32"]]), HC = { class: "export-warnings" }, KC = {
  key: 0,
  class: "success-header"
}, qC = { class: "warning-header" }, YC = { class: "warning-summary" }, JC = { class: "warning-title" }, QC = { class: "models-section" }, XC = { class: "models-list" }, ZC = { class: "model-info" }, ex = { class: "model-filename" }, tx = { class: "model-workflows" }, sx = ["onClick"], ox = /* @__PURE__ */ de({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = k(!1), i = k(null), c = z(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function u() {
      i.value = null, n("revalidate");
    }
    return (d, m) => (a(), r(K, null, [
      x(ft, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (v) => d.$emit("cancel"))
      }, {
        body: h(() => [
          t("div", HC, [
            e.models.length === 0 ? (a(), r("div", KC, [...m[4] || (m[4] = [
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
            ])])) : (a(), r(K, { key: 1 }, [
              t("div", qC, [
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
                t("div", YC, [
                  t("h3", JC, f(e.models.length) + " model" + f(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", QC, [
                t("div", XC, [
                  (a(!0), r(K, null, ve(c.value, (v) => (a(), r("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", ZC, [
                      t("div", ex, f(v.filename), 1),
                      t("div", tx, " Used by: " + f(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (g) => i.value = v.hash
                    }, " Add Source ", 8, sx)
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
          x(Te, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (v) => d.$emit("cancel"))
          }, {
            default: h(() => [...m[7] || (m[7] = [
              $(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          x(Te, {
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
      i.value ? (a(), L(ol, {
        key: 0,
        identifier: i.value,
        onClose: u
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Ar = /* @__PURE__ */ fe(ox, [["__scopeId", "data-v-b698d882"]]), nx = { class: "export-card" }, ax = { class: "export-path-row" }, lx = { class: "export-actions" }, ix = {
  key: 1,
  class: "export-warning"
}, rx = /* @__PURE__ */ de({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = tt(), n = k(""), l = k(!1), i = k(!1), c = k(!1), u = k(null), d = k(!1), m = k(null), v = k(!1), g = k(!1), w = z(() => l.value ? "Validating..." : i.value ? "Exporting..." : "Export Environment");
    async function p() {
      l.value = !0, u.value = null;
      try {
        const I = await s();
        m.value = I, I.can_export ? I.warnings.models_without_sources.length > 0 ? g.value = !0 : await b() : v.value = !0;
      } catch (I) {
        u.value = {
          status: "error",
          message: I instanceof Error ? I.message : "Validation failed"
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
        const I = await s();
        m.value = I;
      } catch (I) {
        console.error("Re-validation failed:", I);
      }
    }
    async function b() {
      i.value = !0;
      try {
        const I = await o(n.value || void 0);
        u.value = I;
      } catch (I) {
        u.value = {
          status: "error",
          message: I instanceof Error ? I.message : "Export failed"
        };
      } finally {
        i.value = !1;
      }
    }
    async function P() {
      var I;
      if ((I = u.value) != null && I.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (S) {
          console.error("Failed to copy path:", S);
        }
    }
    async function M() {
      var I;
      if ((I = u.value) != null && I.path) {
        c.value = !0;
        try {
          const S = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!S.ok)
            throw new Error(`Download failed: ${S.statusText}`);
          const q = await S.blob(), Y = URL.createObjectURL(q), W = u.value.path.split("/").pop() || "environment-export.tar.gz", E = document.createElement("a");
          E.href = Y, E.download = W, document.body.appendChild(E), E.click(), document.body.removeChild(E), URL.revokeObjectURL(Y);
        } catch (S) {
          console.error("Failed to download:", S), alert(`Download failed: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          c.value = !1;
        }
      }
    }
    return (I, S) => (a(), r(K, null, [
      x(Pt, null, {
        header: h(() => [
          x(Rt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (q) => d.value = !0)
          })
        ]),
        content: h(() => [
          x(lt, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              t("div", nx, [
                S[7] || (S[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", ax, [
                  x(Un, {
                    modelValue: n.value,
                    "onUpdate:modelValue": S[1] || (S[1] = (q) => n.value = q),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", lx, [
                  x(re, {
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
          u.value ? (a(), L(lt, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              x(Et, {
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
                    x(dt, { label: "Saved to:" }, {
                      default: h(() => [
                        x(NC, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (a(), L(dt, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (a(), r("div", ix, [...S[8] || (S[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    x(re, {
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
                    x(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: P
                    }, {
                      default: h(() => [...S[10] || (S[10] = [
                        $(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    x(re, {
                      variant: "ghost",
                      size: "sm",
                      onClick: S[2] || (S[2] = (q) => u.value = null)
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
      x(as, {
        show: d.value,
        title: "What Gets Exported",
        onClose: S[3] || (S[3] = (q) => d.value = !1)
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
      v.value && m.value ? (a(), L(Or, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: S[4] || (S[4] = (q) => v.value = !1)
      }, null, 8, ["issues"])) : y("", !0),
      g.value && m.value ? (a(), L(Ar, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: _,
        onCancel: S[5] || (S[5] = (q) => g.value = !1),
        onRevalidate: C
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), cx = /* @__PURE__ */ fe(rx, [["__scopeId", "data-v-f4d120f2"]]), ux = { class: "file-input-wrapper" }, dx = ["accept", "multiple", "disabled"], fx = /* @__PURE__ */ de({
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
    }), (u, d) => (a(), r("div", ux, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, dx),
      x(re, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: i
      }, {
        default: h(() => [
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
            $(" " + f(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), mx = /* @__PURE__ */ fe(fx, [["__scopeId", "data-v-cd192091"]]), vx = {
  key: 0,
  class: "drop-zone-empty"
}, px = { class: "drop-zone-text" }, gx = { class: "drop-zone-primary" }, hx = { class: "drop-zone-secondary" }, yx = { class: "drop-zone-actions" }, wx = {
  key: 1,
  class: "drop-zone-file"
}, _x = { class: "file-info" }, kx = { class: "file-details" }, bx = { class: "file-name" }, $x = { class: "file-size" }, Cx = /* @__PURE__ */ de({
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
    const o = s, n = k(!1), l = k(null), i = k(0), c = z(() => l.value !== null), u = z(() => {
      var b;
      return ((b = l.value) == null ? void 0 : b.name) || "";
    }), d = z(() => {
      if (!l.value) return "";
      const b = l.value.size;
      return b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB` : b < 1024 * 1024 * 1024 ? `${(b / (1024 * 1024)).toFixed(1)} MB` : `${(b / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m(b) {
      var P;
      b.stopPropagation(), i.value++, (P = b.dataTransfer) != null && P.types.includes("Files") && (n.value = !0);
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
      const P = (M = b.dataTransfer) == null ? void 0 : M.files;
      P && P.length > 0 && _(P[0]);
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
    return (b, P) => (a(), r("div", {
      class: xe(["file-drop-zone", { "drop-active": n.value, "has-file": c.value }]),
      onDragenter: it(m, ["prevent"]),
      onDragover: it(v, ["prevent"]),
      onDragleave: it(g, ["prevent"]),
      onDrop: it(w, ["prevent"])
    }, [
      c.value ? (a(), r("div", wx, [
        t("div", _x, [
          P[1] || (P[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", kx, [
            t("div", bx, f(u.value), 1),
            t("div", $x, f(d.value), 1)
          ])
        ]),
        x(re, {
          variant: "ghost",
          size: "xs",
          onClick: C,
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
      ])) : (a(), r("div", vx, [
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
        t("div", px, [
          t("p", gx, f(e.primaryText), 1),
          t("p", hx, f(e.secondaryText), 1)
        ]),
        t("div", yx, [
          x(mx, {
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
}), xx = /* @__PURE__ */ fe(Cx, [["__scopeId", "data-v-0f79cb86"]]), Sx = { class: "import-preview" }, Ix = { class: "preview-header" }, Ex = {
  key: 0,
  class: "source-env"
}, Tx = { class: "preview-content" }, Px = { class: "preview-section" }, Rx = { class: "section-header" }, Mx = { class: "section-info" }, Dx = { class: "section-count" }, Lx = {
  key: 0,
  class: "item-list"
}, Ox = { class: "item-name" }, Ax = {
  key: 0,
  class: "item-more"
}, Ux = { class: "preview-section" }, Nx = { class: "section-header" }, zx = { class: "section-info" }, Fx = { class: "section-count" }, Bx = {
  key: 0,
  class: "item-list"
}, Vx = { class: "item-details" }, Wx = { class: "item-name" }, Gx = { class: "item-meta" }, jx = {
  key: 0,
  class: "item-more"
}, Hx = { class: "preview-section" }, Kx = { class: "section-header" }, qx = { class: "section-info" }, Yx = { class: "section-count" }, Jx = {
  key: 0,
  class: "item-list"
}, Qx = { class: "item-name" }, Xx = {
  key: 0,
  class: "item-more"
}, Zx = {
  key: 0,
  class: "preview-section"
}, e3 = { class: "git-info" }, t3 = /* @__PURE__ */ de({
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
    return (c, u) => (a(), r("div", Sx, [
      t("div", Ix, [
        x(Ut, null, {
          default: h(() => [...u[0] || (u[0] = [
            $("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), r("span", Ex, [
          u[1] || (u[1] = $(" From: ", -1)),
          x(Ma, null, {
            default: h(() => [
              $(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", Tx, [
        t("div", Px, [
          t("div", Rx, [
            u[3] || (u[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", Mx, [
              u[2] || (u[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", Dx, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), r("div", Lx, [
            (a(!0), r(K, null, ve(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", Ox, f(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), r("div", Ax, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", Ux, [
          t("div", Nx, [
            u[6] || (u[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", zx, [
              u[5] || (u[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", Fx, f(n.value) + " file" + f(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), r("div", Bx, [
            (a(!0), r(K, null, ve(e.models.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", Vx, [
                t("span", Wx, f(d.filename), 1),
                t("span", Gx, f(i(d.size)) + " • " + f(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), r("div", jx, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", Hx, [
          t("div", Kx, [
            u[9] || (u[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", qx, [
              u[8] || (u[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", Yx, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), r("div", Jx, [
            (a(!0), r(K, null, ve(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", Qx, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), r("div", Xx, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), r("div", Zx, [
          u[11] || (u[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", e3, [
            e.gitBranch ? (a(), L(dt, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                x(Ma, null, {
                  default: h(() => [
                    $(f(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (a(), L(dt, {
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
}), s3 = /* @__PURE__ */ fe(t3, [["__scopeId", "data-v-182fe113"]]), o3 = { class: "import-config" }, n3 = { class: "config-container" }, a3 = { class: "config-field" }, l3 = { class: "input-wrapper" }, i3 = ["value"], r3 = {
  key: 0,
  class: "validating-indicator"
}, c3 = {
  key: 1,
  class: "valid-indicator"
}, u3 = {
  key: 0,
  class: "field-error"
}, d3 = { class: "config-field" }, f3 = { class: "strategy-options" }, m3 = ["value", "checked", "onChange"], v3 = { class: "strategy-content" }, p3 = { class: "strategy-label" }, g3 = { class: "strategy-description" }, h3 = { class: "config-field switch-field" }, y3 = { class: "switch-label" }, w3 = ["checked"], _3 = { class: "advanced-section" }, k3 = { class: "advanced-content" }, b3 = { class: "config-field" }, $3 = ["value"], C3 = ["value"], x3 = /* @__PURE__ */ de({
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
    return (v, g) => (a(), r("div", o3, [
      x(Ut, null, {
        default: h(() => [...g[2] || (g[2] = [
          $("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", n3, [
        t("div", a3, [
          x(Sn, { required: "" }, {
            default: h(() => [...g[3] || (g[3] = [
              $("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", l3, [
            t("input", {
              type: "text",
              class: xe(["name-input", { error: e.nameError || e.name.length === 0, valid: i.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: m
            }, null, 42, i3),
            l.value ? (a(), r("span", r3, "...")) : i.value ? (a(), r("span", c3, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), r("div", u3, f(e.nameError), 1)) : y("", !0),
          g[4] || (g[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", d3, [
          x(Sn, null, {
            default: h(() => [...g[5] || (g[5] = [
              $("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", f3, [
            (a(), r(K, null, ve(c, (w) => t("label", {
              key: w.value,
              class: xe(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (p) => n("update:modelStrategy", w.value)
              }, null, 40, m3),
              t("div", v3, [
                t("span", p3, f(w.label), 1),
                t("span", g3, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", h3, [
          t("label", y3, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: g[0] || (g[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, w3),
            g[6] || (g[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", _3, [
          g[8] || (g[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", k3, [
            t("div", b3, [
              x(Sn, null, {
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
                (a(!0), r(K, null, ve(Ve(al), (w) => (a(), r("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, C3))), 128))
              ], 40, $3)
            ])
          ])
        ])
      ])
    ]));
  }
}), S3 = /* @__PURE__ */ fe(x3, [["__scopeId", "data-v-89ea06a1"]]), I3 = { class: "import-flow" }, E3 = {
  key: 0,
  class: "import-empty"
}, T3 = { class: "git-import-section" }, P3 = { class: "git-url-input-row" }, R3 = ["disabled"], M3 = {
  key: 0,
  class: "git-error"
}, D3 = {
  key: 1,
  class: "import-configure"
}, L3 = { class: "selected-file-bar" }, O3 = {
  key: 0,
  class: "file-bar-content"
}, A3 = { class: "file-bar-info" }, U3 = { class: "file-bar-name" }, N3 = { class: "file-bar-size" }, z3 = {
  key: 1,
  class: "file-bar-content"
}, F3 = { class: "file-bar-info" }, B3 = { class: "file-bar-name" }, V3 = {
  key: 0,
  class: "preview-loading"
}, W3 = { class: "import-actions" }, G3 = {
  key: 2,
  class: "import-progress"
}, j3 = { class: "creating-intro" }, H3 = {
  key: 0,
  class: "progress-warning"
}, K3 = {
  key: 1,
  class: "import-error"
}, q3 = { class: "error-message" }, Y3 = {
  key: 3,
  class: "import-complete"
}, J3 = { class: "complete-message" }, Q3 = { class: "complete-title" }, X3 = { class: "complete-details" }, Z3 = { class: "complete-actions" }, e5 = /* @__PURE__ */ de({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var qe, Ne, Ie, Se;
    const n = e, l = o, { previewTarballImport: i, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: m, getImportProgress: v } = tt();
    let g = null;
    const w = k(null), p = k(n.resumeImport ?? !1), _ = k(!1), C = k(!1), b = k(""), P = k(!1), M = k(null), I = k(""), S = k(null), q = k(!1), Y = k(null), W = k(null), E = k({
      name: ((qe = n.initialProgress) == null ? void 0 : qe.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), T = k(null), O = k({
      message: ((Ne = n.initialProgress) == null ? void 0 : Ne.message) ?? "Preparing import...",
      phase: ((Ie = n.initialProgress) == null ? void 0 : Ie.phase) ?? "",
      progress: ((Se = n.initialProgress) == null ? void 0 : Se.progress) ?? 0,
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
    ], Z = z(() => {
      if (!W.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const ye = W.value;
      return {
        sourceEnvironment: ye.comfyui_version ? `ComfyUI ${ye.comfyui_version}` : "Unknown",
        workflows: ye.workflows.map((me) => me.name),
        models: ye.models.map((me) => ({
          filename: me.filename,
          size: 0,
          type: me.relative_path.split("/")[0] || "model"
        })),
        nodes: ye.nodes.map((me) => me.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), V = z(() => !P.value && !M.value && W.value && E.value.name.length > 0 && !T.value && (w.value || S.value));
    async function A(ye) {
      w.value = ye, P.value = !0, M.value = null, W.value = null;
      try {
        const me = await i(ye);
        W.value = me;
      } catch (me) {
        M.value = me instanceof Error ? me.message : "Failed to analyze file", console.error("Preview error:", me);
      } finally {
        P.value = !1;
      }
    }
    function N() {
      w.value = null, S.value = null, I.value = "", Y.value = null, _.value = !1, C.value = !1, b.value = "", W.value = null, M.value = null, E.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, T.value = null, l("source-cleared");
    }
    function D() {
      Fe(), N(), p.value = !1, P.value = !1, q.value = !1, O.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function ee() {
      if (I.value.trim()) {
        q.value = !0, Y.value = null;
        try {
          const ye = await c(I.value.trim());
          S.value = I.value.trim(), W.value = ye;
        } catch (ye) {
          Y.value = ye instanceof Error ? ye.message : "Failed to analyze repository";
        } finally {
          q.value = !1;
        }
      }
    }
    function Q(ye) {
      try {
        const me = new URL(ye);
        return me.host + me.pathname.replace(/\.git$/, "");
      } catch {
        return ye;
      }
    }
    async function pe(ye) {
      if (!ye) {
        T.value = "Environment name is required";
        return;
      }
      try {
        const me = await u(ye);
        T.value = me.valid ? null : me.error || "Invalid name";
      } catch {
        T.value = "Failed to validate name";
      }
    }
    async function he() {
      if (E.value.name && !(!w.value && !S.value)) {
        p.value = !0, _.value = !1, O.value = { message: `Creating environment '${E.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let ye;
          if (w.value)
            ye = await d(
              w.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else if (S.value)
            ye = await m(
              S.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ye.status === "started" ? Re() : (C.value = !1, b.value = ye.message, p.value = !1, _.value = !0);
        } catch (ye) {
          C.value = !1, b.value = ye instanceof Error ? ye.message : "Unknown error occurred during import", p.value = !1, _.value = !0;
        }
      }
    }
    async function Re() {
      if (g) return;
      const ye = async () => {
        try {
          const Pe = await v();
          return O.value = {
            message: Pe.message,
            phase: Pe.phase || "",
            progress: Pe.progress ?? (Pe.state === "importing" ? 50 : 0),
            error: Pe.error || null
          }, Pe.state === "complete" ? (Fe(), C.value = !0, b.value = `Environment '${Pe.environment_name}' created successfully`, p.value = !1, _.value = !0, Pe.environment_name && l("import-complete", Pe.environment_name, E.value.switchAfterImport), !1) : Pe.state === "error" ? (Fe(), C.value = !1, b.value = Pe.error || Pe.message, p.value = !1, _.value = !0, !1) : !0;
        } catch (Pe) {
          return console.error("Failed to poll import progress:", Pe), !0;
        }
      };
      await ye() && (g = setInterval(async () => {
        await ye() || Fe();
      }, 2e3));
    }
    function Fe() {
      g && (clearInterval(g), g = null);
    }
    function Ue(ye) {
      return ye < 1024 ? `${ye} B` : ye < 1024 * 1024 ? `${(ye / 1024).toFixed(1)} KB` : ye < 1024 * 1024 * 1024 ? `${(ye / (1024 * 1024)).toFixed(1)} MB` : `${(ye / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Qe(async () => {
      try {
        const ye = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", ye.state, ye), ye.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", ye.environment_name), p.value = !0, E.value.name = ye.environment_name || E.value.name || "", O.value = {
          progress: ye.progress ?? 0,
          message: ye.message || "Importing...",
          phase: ye.phase || "",
          error: null
        }, Re());
      } catch (ye) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", ye);
      }
    }), s({
      handleReset: D,
      isImporting: p,
      canImport: V
    }), (ye, me) => {
      var Pe;
      return a(), r("div", I3, [
        !w.value && !S.value && !p.value ? (a(), r("div", E3, [
          x(xx, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: A
          }),
          me[7] || (me[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", T3, [
            me[5] || (me[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", P3, [
              Ke(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": me[0] || (me[0] = (Ee) => I.value = Ee),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Ht(ee, ["enter"]),
                disabled: q.value
              }, null, 40, R3), [
                [zt, I.value]
              ]),
              x(re, {
                variant: "primary",
                size: "sm",
                disabled: !I.value.trim() || q.value,
                onClick: ee
              }, {
                default: h(() => [
                  $(f(q.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            Y.value ? (a(), r("div", M3, f(Y.value), 1)) : y("", !0),
            me[6] || (me[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || S.value) && !p.value && !_.value ? (a(), r("div", D3, [
          t("div", L3, [
            w.value ? (a(), r("div", O3, [
              me[8] || (me[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", A3, [
                t("div", U3, f(w.value.name), 1),
                t("div", N3, f(Ue(w.value.size)), 1)
              ])
            ])) : S.value ? (a(), r("div", z3, [
              me[10] || (me[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", F3, [
                t("div", B3, f(Q(S.value)), 1),
                me[9] || (me[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            x(re, {
              variant: "ghost",
              size: "sm",
              onClick: N
            }, {
              default: h(() => [...me[11] || (me[11] = [
                $(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          P.value ? (a(), r("div", V3, [...me[12] || (me[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : M.value ? (a(), L(Qt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [M.value]
          }, null, 8, ["details"])) : W.value ? (a(), L(s3, {
            key: 2,
            "source-environment": Z.value.sourceEnvironment,
            workflows: Z.value.workflows,
            models: Z.value.models,
            nodes: Z.value.nodes,
            "git-branch": Z.value.gitBranch,
            "git-commit": Z.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          W.value ? (a(), L(S3, {
            key: 3,
            name: E.value.name,
            "onUpdate:name": me[1] || (me[1] = (Ee) => E.value.name = Ee),
            "model-strategy": E.value.modelStrategy,
            "onUpdate:modelStrategy": me[2] || (me[2] = (Ee) => E.value.modelStrategy = Ee),
            "torch-backend": E.value.torchBackend,
            "onUpdate:torchBackend": me[3] || (me[3] = (Ee) => E.value.torchBackend = Ee),
            "switch-after-import": E.value.switchAfterImport,
            "onUpdate:switchAfterImport": me[4] || (me[4] = (Ee) => E.value.switchAfterImport = Ee),
            "name-error": T.value,
            onValidateName: pe
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          E.value.modelStrategy === "skip" && ((Pe = W.value) != null && Pe.models_needing_download) ? (a(), L(Qt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${W.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", W3, [
            x(re, {
              variant: "secondary",
              size: "md",
              onClick: N
            }, {
              default: h(() => [...me[13] || (me[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(re, {
              variant: "primary",
              size: "md",
              disabled: !V.value,
              onClick: he
            }, {
              default: h(() => [...me[14] || (me[14] = [
                $(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (a(), r("div", G3, [
          t("p", j3, [
            me[15] || (me[15] = $(" Importing environment ", -1)),
            t("strong", null, f(E.value.name), 1),
            me[16] || (me[16] = $("... ", -1))
          ]),
          x(zn, {
            progress: O.value.progress,
            message: O.value.message,
            "current-phase": O.value.phase,
            variant: O.value.error ? "error" : "default",
            "show-steps": !0,
            steps: le
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          O.value.error ? y("", !0) : (a(), r("p", H3, " This may take several minutes. Please wait... ")),
          O.value.error ? (a(), r("div", K3, [
            t("p", q3, f(O.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), r("div", Y3, [
          t("div", {
            class: xe(["complete-icon", C.value ? "success" : "error"])
          }, f(C.value ? "✓" : "✕"), 3),
          t("div", J3, [
            t("div", Q3, f(C.value ? "Import Successful" : "Import Failed"), 1),
            t("div", X3, f(b.value), 1)
          ]),
          t("div", Z3, [
            x(re, {
              variant: "primary",
              size: "md",
              onClick: D
            }, {
              default: h(() => [...me[17] || (me[17] = [
                $(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Ur = /* @__PURE__ */ fe(e5, [["__scopeId", "data-v-72cbc04e"]]), t5 = /* @__PURE__ */ de({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, n = k(!1);
    function l(i, c) {
      c && o("import-complete-switch", i);
    }
    return (i, c) => (a(), r(K, null, [
      x(Pt, null, {
        header: h(() => [
          x(Rt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: c[0] || (c[0] = (u) => n.value = !0)
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
}), s5 = /* @__PURE__ */ fe(t5, [["__scopeId", "data-v-e13bfe76"]]), wn = co(), o5 = 5e3, lo = k([]), pa = k(!1), ga = k(null);
let Ro = null;
async function _n(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function Nr(e) {
  const s = z(
    () => lo.value.filter((p) => p.status === "running")
  ), o = z(
    () => lo.value.filter((p) => p.status === "deploying")
  ), n = z(
    () => lo.value.filter((p) => p.status === "stopped")
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
    Ro || (Ro = window.setInterval(c, o5));
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
const n5 = { class: "instance-header" }, a5 = { class: "provider-badge" }, l5 = { class: "instance-name" }, i5 = {
  key: 0,
  class: "spinner"
}, r5 = { class: "instance-details" }, c5 = {
  key: 0,
  class: "detail"
}, u5 = {
  key: 1,
  class: "detail instance-url"
}, d5 = {
  key: 2,
  class: "detail"
}, f5 = {
  key: 3,
  class: "detail"
}, m5 = {
  key: 4,
  class: "detail total-cost"
}, v5 = {
  key: 0,
  class: "deployment-progress"
}, p5 = { class: "progress-message" }, g5 = { class: "instance-actions" }, h5 = /* @__PURE__ */ de({
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
      class: xe(["instance-card", l.value])
    }, [
      t("div", n5, [
        t("span", a5, f(o.value), 1),
        t("span", l5, f(e.instance.name), 1),
        t("span", {
          class: xe(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (a(), r("span", i5)) : y("", !0),
          $(" " + f(n.value), 1)
        ], 2)
      ]),
      t("div", r5, [
        e.instance.gpu_type ? (a(), r("span", c5, f(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (a(), r("span", u5, f(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (a(), r("span", d5, f(u(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (a(), r("span", f5, "$" + f(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (a(), r("span", m5, "$" + f(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (a(), r("div", v5, [
        t("div", p5, f(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (a(), L(ea, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", g5, [
        e.instance.status === "running" && e.instance.comfyui_url ? (a(), L(re, {
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
        e.instance.console_url && e.instance.provider !== "custom" ? (a(), L(re, {
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
        e.instance.status === "running" ? (a(), L(re, {
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
        e.instance.status === "stopped" ? (a(), L(re, {
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
        x(re, {
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
}), y5 = /* @__PURE__ */ fe(h5, [["__scopeId", "data-v-746c3894"]]), w5 = { class: "instances-tab" }, _5 = { class: "instances-header" }, k5 = {
  key: 0,
  class: "loading-state"
}, b5 = {
  key: 1,
  class: "empty-state"
}, $5 = {
  key: 2,
  class: "instances-list"
}, C5 = /* @__PURE__ */ de({
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
    return (n, l) => (a(), r("div", w5, [
      t("div", _5, [
        x(Ut, null, {
          default: h(() => [...l[4] || (l[4] = [
            $("Active Instances", -1)
          ])]),
          _: 1
        }),
        x(re, {
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
      e.isLoading && e.instances.length === 0 ? (a(), r("div", k5, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        $(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (a(), r("div", b5, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (a(), r("div", $5, [
        (a(!0), r(K, null, ve(o.value, (i) => (a(), L(y5, {
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
}), x5 = /* @__PURE__ */ fe(C5, [["__scopeId", "data-v-ba614fc3"]]), S5 = { class: "remote-header" }, I5 = { class: "remote-info" }, E5 = { class: "remote-icon" }, T5 = { class: "remote-name" }, P5 = {
  key: 0,
  class: "default-badge"
}, R5 = {
  key: 1,
  class: "sync-badge"
}, M5 = {
  key: 0,
  class: "ahead"
}, D5 = {
  key: 1,
  class: "behind"
}, L5 = {
  key: 1,
  class: "synced"
}, O5 = ["href"], A5 = {
  key: 1,
  class: "remote-url-text"
}, U5 = { class: "remote-actions" }, N5 = /* @__PURE__ */ de({
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
      class: xe(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", S5, [
        t("div", I5, [
          t("span", E5, f(o.value ? "🔗" : "🌐"), 1),
          t("span", T5, f(e.remote.name), 1),
          o.value ? (a(), r("span", P5, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", R5, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(K, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", M5, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", D5, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", L5, "✓ synced"))
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
        }, f(l.value), 9, O5)) : (a(), r("span", A5, f(l.value), 1))
      ]),
      t("div", U5, [
        x(re, {
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
        e.syncStatus && e.syncStatus.ahead > 0 ? (a(), L(re, {
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
        x(re, {
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
}), zr = /* @__PURE__ */ fe(N5, [["__scopeId", "data-v-d687d161"]]), z5 = { class: "runpod-tab" }, F5 = { class: "api-key-card" }, B5 = { class: "api-key-row" }, V5 = { class: "api-key-input-wrapper" }, W5 = ["type", "disabled"], G5 = ["title"], j5 = { class: "status-icon" }, H5 = { class: "status-text" }, K5 = {
  key: 0,
  class: "credit-balance"
}, q5 = { class: "config-card" }, Y5 = { class: "config-row" }, J5 = ["disabled"], Q5 = {
  key: 0,
  value: ""
}, X5 = {
  key: 1,
  value: "",
  disabled: ""
}, Z5 = ["value", "disabled"], eS = { class: "config-row" }, tS = {
  key: 0,
  class: "loading-inline"
}, sS = { class: "no-volumes-state" }, oS = { class: "no-volumes-text" }, nS = ["value"], aS = { class: "config-row" }, lS = ["disabled"], iS = {
  key: 0,
  value: ""
}, rS = {
  key: 1,
  value: ""
}, cS = {
  key: 2,
  value: ""
}, uS = ["value"], dS = { class: "config-row" }, fS = { class: "radio-group" }, mS = { class: "radio-option" }, vS = { class: "radio-label" }, pS = { class: "radio-option disabled" }, gS = { class: "radio-label" }, hS = { class: "config-row" }, yS = { class: "radio-group" }, wS = { class: "radio-option" }, _S = { class: "radio-label" }, kS = { class: "radio-option disabled" }, bS = { class: "radio-label" }, $S = { class: "config-row" }, CS = {
  key: 0,
  class: "loading-text"
}, xS = {
  key: 1,
  class: "empty-remotes"
}, SS = { class: "remotes-list" }, IS = {
  key: 0,
  class: "sync-warning"
}, ES = { class: "warning-content" }, TS = { class: "remotes-footer" }, PS = { class: "summary-card" }, RS = {
  key: 0,
  class: "loading-text"
}, MS = { class: "summary-row" }, DS = { class: "summary-value" }, LS = { class: "summary-row" }, OS = { class: "summary-value" }, AS = { class: "summary-row" }, US = { class: "summary-value" }, NS = {
  key: 0,
  class: "summary-sub-row"
}, zS = { class: "summary-sub-label" }, FS = {
  key: 1,
  class: "summary-sub-row warning"
}, BS = { class: "summary-sub-label" }, VS = { class: "summary-row" }, WS = { class: "summary-value" }, GS = { class: "summary-row" }, jS = { class: "summary-value" }, HS = { class: "deployment-summary" }, KS = { class: "summary-columns" }, qS = { class: "summary-column" }, YS = { class: "pricing-row" }, JS = { class: "pricing-value" }, QS = { class: "pricing-row" }, XS = { class: "pricing-value" }, ZS = { class: "pricing-row" }, e8 = { class: "pricing-value" }, t8 = { class: "pricing-row total" }, s8 = { class: "pricing-value" }, o8 = { class: "summary-column" }, n8 = { class: "spec-row" }, a8 = { class: "spec-row" }, l8 = {
  key: 0,
  class: "spec-row"
}, i8 = {
  key: 1,
  class: "spec-row spot-warning"
}, r8 = {
  key: 4,
  class: "deploy-actions"
}, c8 = { class: "progress-content" }, u8 = { class: "phase-indicator" }, d8 = { key: 0 }, f8 = { key: 1 }, m8 = { key: 2 }, v8 = {
  key: 3,
  class: "spinner"
}, p8 = { class: "phase-text" }, g8 = { class: "phase-name" }, h8 = { class: "phase-detail" }, y8 = {
  key: 0,
  class: "ready-actions"
}, w8 = { class: "console-link" }, _8 = ["href"], k8 = /* @__PURE__ */ de({
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
    } = tt(), P = k(!1), M = k(""), I = k(!1), S = k(!1), q = k(null), Y = k(null), W = k(""), E = k(""), T = k(""), O = k("SECURE"), le = k("ON_DEMAND"), Z = k("my-comfyui-deploy"), V = k([]), A = k({}), N = k(!1), D = k(null), ee = k(null), Q = k(null), pe = k([]), he = k(!1), Re = k([]), Fe = k(!1), Ue = k([]), qe = k(!1), Ne = k(null), Ie = k(!1), Se = k(!1), ye = k(null), me = k(!1), Pe = k(null), Ee = k(null), U = k(null), R = k(!1), F = k(null), j = k(!1), te = k(!1), ie = z(() => Re.value.find(($e) => $e.id === E.value) || null), ge = z(() => W.value ? Re.value.filter(($e) => $e.data_center_id === W.value) : Re.value), ke = z(() => Ue.value.filter(($e) => $e.available)), ne = z(() => D.value && A.value[D.value] || null), ue = z(() => {
      if (!D.value) return null;
      const $e = V.value.find((se) => se.name === D.value);
      return ($e == null ? void 0 : $e.fetch_url) || null;
    }), Me = z(() => I.value && E.value && T.value && ue.value && !Se.value && !R.value), Ce = ($e) => {
      const se = Ue.value.find((gt) => gt.id === T.value);
      if (!se) return "0.00";
      if ($e === "SECURE") return (se.securePrice ?? 0).toFixed(2);
      if ($e === "COMMUNITY") return (se.communityPrice ?? 0).toFixed(2);
      const je = O.value === "SECURE";
      return $e === "ON_DEMAND" ? je ? (se.securePrice ?? 0).toFixed(2) : (se.communityPrice ?? 0).toFixed(2) : je ? (se.secureSpotPrice ?? 0).toFixed(2) : (se.communitySpotPrice ?? 0).toFixed(2);
    }, oe = z(() => {
      const $e = Ue.value.find((ls) => ls.id === T.value), se = Re.value.find((ls) => ls.id === E.value);
      if (!$e) return null;
      const je = O.value === "SECURE", gt = le.value === "SPOT";
      let Jt;
      gt ? Jt = je ? $e.secureSpotPrice ?? 0 : $e.communitySpotPrice ?? 0 : Jt = je ? $e.securePrice ?? 0 : $e.communityPrice ?? 0;
      const ys = se ? se.size_gb * 14e-5 : 0, ws = 4e-3;
      return {
        gpu: Jt,
        volume: ys,
        container: ws,
        total: Jt + ys + ws
      };
    });
    async function X() {
      await Be(), await Promise.all([vt(), De()]);
    }
    async function De() {
      N.value = !0;
      try {
        const $e = await w();
        V.value = $e.remotes, await Promise.all(
          $e.remotes.map(async (je) => {
            const gt = await p(je.name);
            gt && (A.value[je.name] = gt);
          })
        );
        const se = $e.remotes.find((je) => je.is_default);
        se ? D.value = se.name : $e.remotes.length > 0 && (D.value = $e.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        N.value = !1;
      }
    }
    async function be($e) {
      ee.value = $e;
      try {
        await _($e);
        const se = await p($e);
        se && (A.value[$e] = se), o("toast", `Fetched from ${$e}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        ee.value = null;
      }
    }
    async function we($e) {
      Q.value = $e;
      try {
        await C($e, { force: !1 });
        const se = await p($e);
        se && (A.value[$e] = se), o("toast", `Pushed to ${$e}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        Q.value = null;
      }
    }
    function H($e) {
      D.value = $e;
    }
    async function G() {
      if (M.value) {
        S.value = !0, q.value = null;
        try {
          const $e = await l(M.value, !0);
          $e.status === "success" ? (I.value = !0, Y.value = $e.credit_balance ?? null, q.value = { type: "success", message: $e.message }, await X()) : q.value = { type: "error", message: $e.message };
        } catch ($e) {
          q.value = {
            type: "error",
            message: $e instanceof Error ? $e.message : "Connection test failed"
          };
        } finally {
          S.value = !1;
        }
      }
    }
    async function ce() {
      try {
        await v(), M.value = "", I.value = !1, q.value = null, Y.value = null, pe.value = [], W.value = "", Re.value = [], E.value = "", Ue.value = [], T.value = "", Ne.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function Be() {
      Fe.value = !0, he.value = !0;
      try {
        const $e = await i();
        Re.value = $e.volumes;
        const se = /* @__PURE__ */ new Map();
        for (const je of $e.volumes)
          je.data_center_id && !se.has(je.data_center_id) && se.set(je.data_center_id, {
            id: je.data_center_id,
            name: je.data_center_name || je.data_center_id,
            available: !0
          });
        if ($e.volumes.length === 0) {
          const je = await b();
          pe.value = je.data_centers;
        } else
          pe.value = Array.from(se.values());
        if (Re.value.length > 0) {
          const je = Re.value[0];
          E.value = je.id, je.data_center_id && (W.value = je.data_center_id, await Xe(je.data_center_id));
        } else pe.value.length > 0 && (W.value = pe.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        Fe.value = !1, he.value = !1;
      }
    }
    async function Xe($e) {
      qe.value = !0;
      try {
        const se = await c($e);
        Ue.value = se.gpu_types;
        const je = Ue.value.find((gt) => gt.available);
        je ? T.value = je.id : T.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        qe.value = !1;
      }
    }
    yt(W, async ($e) => {
      if (!$e || Fe.value) return;
      const se = Re.value.find((je) => je.id === E.value);
      se && se.data_center_id !== $e && (E.value = ""), await Xe($e);
    }), yt(E, async ($e) => {
      if (!$e) {
        Ue.value = [], T.value = "";
        return;
      }
      if (Fe.value) return;
      const se = Re.value.find((je) => je.id === $e);
      se && se.data_center_id !== W.value ? W.value = se.data_center_id : se && await Xe(se.data_center_id);
    });
    async function vt() {
      Ie.value = !0;
      try {
        Ne.value = await n();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        Ie.value = !1;
      }
    }
    async function at() {
      if (!(!T.value || !E.value)) {
        R.value = !0, ye.value = null;
        try {
          const $e = await g();
          F.value = $e, $e.can_export ? $e.warnings.models_without_sources.length > 0 ? te.value = !0 : await Ft() : j.value = !0;
        } catch ($e) {
          ye.value = {
            status: "error",
            message: $e instanceof Error ? $e.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          R.value = !1;
        }
      }
    }
    async function ut() {
      te.value = !1, await Ft();
    }
    async function Mt() {
      try {
        const $e = await g();
        F.value = $e;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function Ft() {
      Se.value = !0;
      try {
        let $e;
        if (le.value === "SPOT") {
          const je = Ue.value.find((gt) => gt.id === T.value);
          je && ($e = O.value === "SECURE" ? je.secureSpotPrice : je.communitySpotPrice);
        }
        const se = await u({
          gpu_type_id: T.value,
          pod_name: Z.value || "my-comfyui-deploy",
          network_volume_id: E.value,
          cloud_type: O.value,
          pricing_type: le.value,
          spot_bid: $e,
          import_source: ue.value
        });
        ye.value = se, se.status === "success" && se.pod_id ? (Pe.value = se.pod_id, me.value = !0, Yt(se.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", se.message, "error");
      } catch ($e) {
        ye.value = {
          status: "error",
          message: $e instanceof Error ? $e.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        Se.value = !1;
      }
    }
    function Yt($e) {
      Ms($e), U.value = window.setInterval(() => Ms($e), 3e3);
    }
    function Ws() {
      U.value && (clearInterval(U.value), U.value = null);
    }
    async function Ms($e) {
      try {
        const se = await d($e);
        Ee.value = se, (se.phase === "READY" || se.phase === "ERROR" || se.phase === "STOPPED") && (Ws(), se.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (se) {
        console.error("Failed to poll deployment status:", se);
      }
    }
    function no() {
      me.value = !1, Ws(), Pe.value = null, Ee.value = null;
    }
    function Co() {
      var $e;
      ($e = Ee.value) != null && $e.comfyui_url && window.open(Ee.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function xo($e) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[$e || ""] || "Initializing...";
    }
    function So($e) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[$e || ""] ?? 10;
    }
    return Qe(async () => {
      try {
        const $e = await m(!0);
        $e.has_key && $e.key_preview && (M.value = `****${$e.key_preview}`, $e.valid ? (I.value = !0, Y.value = $e.credit_balance ?? null, q.value = { type: "success", message: "Connected to RunPod" }, await X()) : $e.error && (q.value = { type: "error", message: $e.error }));
      } catch {
      }
    }), oo(() => {
      Ws();
    }), ($e, se) => {
      var je, gt, Jt, ys, ws, ls;
      return a(), r(K, null, [
        t("div", z5, [
          x(lt, { title: "RUNPOD API KEY" }, {
            default: h(() => [
              t("div", F5, [
                t("div", B5, [
                  t("div", V5, [
                    Ke(t("input", {
                      "onUpdate:modelValue": se[0] || (se[0] = (Oe) => M.value = Oe),
                      type: P.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: I.value
                    }, null, 8, W5), [
                      [Xn, M.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: se[1] || (se[1] = (Oe) => P.value = !P.value),
                      title: P.value ? "Hide key" : "Show key"
                    }, f(P.value ? "👁" : "👁‍🗨"), 9, G5)
                  ]),
                  I.value ? y("", !0) : (a(), L(re, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: S.value,
                    disabled: !M.value || S.value,
                    onClick: G
                  }, {
                    default: h(() => [...se[16] || (se[16] = [
                      $(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  I.value ? (a(), L(re, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: ce
                  }, {
                    default: h(() => [...se[17] || (se[17] = [
                      $(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                q.value ? (a(), r("div", {
                  key: 0,
                  class: xe(["connection-status", q.value.type])
                }, [
                  t("span", j5, f(q.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", H5, f(q.value.message), 1),
                  Y.value !== null ? (a(), r("span", K5, " $" + f(Y.value.toFixed(2)) + " credit ", 1)) : y("", !0)
                ], 2)) : y("", !0),
                se[18] || (se[18] = t("div", { class: "api-key-help" }, [
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
          I.value ? (a(), L(lt, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: h(() => [
              t("div", q5, [
                t("div", Y5, [
                  se[19] || (se[19] = t("label", { class: "config-label" }, "Region", -1)),
                  Ke(t("select", {
                    "onUpdate:modelValue": se[2] || (se[2] = (Oe) => W.value = Oe),
                    class: "config-select",
                    disabled: he.value
                  }, [
                    he.value ? (a(), r("option", Q5, "Loading...")) : W.value ? y("", !0) : (a(), r("option", X5, "Select a region")),
                    (a(!0), r(K, null, ve(pe.value, (Oe) => (a(), r("option", {
                      key: Oe.id,
                      value: Oe.id,
                      disabled: !Oe.available
                    }, f(Oe.id) + " (" + f(Oe.name) + ")" + f(Oe.available ? "" : " [Unavailable]"), 9, Z5))), 128))
                  ], 8, J5), [
                    [hs, W.value]
                  ])
                ]),
                t("div", eS, [
                  se[24] || (se[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  Fe.value ? (a(), r("div", tS, "Loading volumes...")) : ge.value.length === 0 ? (a(), r(K, { key: 1 }, [
                    t("div", sS, [
                      se[20] || (se[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", oS, "No volumes in " + f(W.value || "this region"), 1)
                    ]),
                    se[21] || (se[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    se[22] || (se[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (a(), r(K, { key: 2 }, [
                    Ke(t("select", {
                      "onUpdate:modelValue": se[3] || (se[3] = (Oe) => E.value = Oe),
                      class: "config-select"
                    }, [
                      (a(!0), r(K, null, ve(ge.value, (Oe) => (a(), r("option", {
                        key: Oe.id,
                        value: Oe.id
                      }, f(Oe.name) + " (" + f(Oe.size_gb) + "GB) ", 9, nS))), 128))
                    ], 512), [
                      [hs, E.value]
                    ]),
                    se[23] || (se[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", aS, [
                  se[25] || (se[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  Ke(t("select", {
                    "onUpdate:modelValue": se[4] || (se[4] = (Oe) => T.value = Oe),
                    class: "config-select",
                    disabled: qe.value || !E.value
                  }, [
                    E.value ? qe.value ? (a(), r("option", rS, "Loading GPUs...")) : ke.value.length === 0 ? (a(), r("option", cS, "No GPUs available in this region")) : y("", !0) : (a(), r("option", iS, "Select a volume first")),
                    (a(!0), r(K, null, ve(ke.value, (Oe) => (a(), r("option", {
                      key: Oe.id,
                      value: Oe.id
                    }, f(Oe.displayName) + " (" + f(Oe.memoryInGb) + "GB) - $" + f(O.value === "SECURE" ? (Oe.securePrice ?? 0).toFixed(2) : (Oe.communityPrice ?? 0).toFixed(2)) + "/hr " + f(Oe.stockStatus ? `[${Oe.stockStatus}]` : ""), 9, uS))), 128))
                  ], 8, lS), [
                    [hs, T.value]
                  ])
                ]),
                t("div", dS, [
                  se[26] || (se[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", fS, [
                    t("label", mS, [
                      Ke(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": se[5] || (se[5] = (Oe) => O.value = Oe),
                        value: "SECURE"
                      }, null, 512), [
                        [Zt, O.value]
                      ]),
                      t("span", vS, "Secure ($" + f(Ce("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", pS, [
                      Ke(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": se[6] || (se[6] = (Oe) => O.value = Oe),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [Zt, O.value]
                      ]),
                      t("span", gS, "Community ($" + f(Ce("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", hS, [
                  se[27] || (se[27] = t("label", { class: "config-label" }, [
                    $(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", yS, [
                    t("label", wS, [
                      Ke(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": se[7] || (se[7] = (Oe) => le.value = Oe),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Zt, le.value]
                      ]),
                      t("span", _S, "On-Demand ($" + f(Ce("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", kS, [
                      Ke(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": se[8] || (se[8] = (Oe) => le.value = Oe),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [Zt, le.value]
                      ]),
                      t("span", bS, "Spot ($" + f(Ce("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", $S, [
                  se[28] || (se[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  Ke(t("input", {
                    "onUpdate:modelValue": se[9] || (se[9] = (Oe) => Z.value = Oe),
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
          I.value ? (a(), L(lt, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: h(() => [
              N.value ? (a(), r("div", CS, "Loading remotes...")) : V.value.length === 0 ? (a(), r("div", xS, [
                se[30] || (se[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                x(re, {
                  variant: "primary",
                  size: "xs",
                  onClick: se[10] || (se[10] = (Oe) => o("navigate", "remotes"))
                }, {
                  default: h(() => [...se[29] || (se[29] = [
                    $(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (a(), r(K, { key: 2 }, [
                t("div", SS, [
                  (a(!0), r(K, null, ve(V.value, (Oe) => (a(), L(zr, {
                    key: Oe.name,
                    remote: Oe,
                    "sync-status": A.value[Oe.name],
                    "is-selected": D.value === Oe.name,
                    "is-fetching": ee.value === Oe.name,
                    "is-pushing": Q.value === Oe.name,
                    onFetch: be,
                    onPush: we,
                    onSelect: H
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                ne.value && ne.value.ahead > 0 ? (a(), r("div", IS, [
                  se[31] || (se[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", ES, [
                    t("strong", null, f(ne.value.ahead) + " unpushed commit" + f(ne.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + f(D.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  x(re, {
                    variant: "primary",
                    size: "xs",
                    loading: Q.value === D.value,
                    onClick: se[11] || (se[11] = (Oe) => D.value && we(D.value))
                  }, {
                    default: h(() => [
                      $(" Push to " + f(D.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", TS, [
                  x(re, {
                    variant: "link",
                    size: "xs",
                    onClick: se[12] || (se[12] = (Oe) => o("navigate", "remotes"))
                  }, {
                    default: h(() => [...se[32] || (se[32] = [
                      $(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : y("", !0),
          I.value ? (a(), L(lt, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: h(() => [
              t("div", PS, [
                Ie.value ? (a(), r("div", RS, "Loading environment summary...")) : Ne.value ? (a(), r(K, { key: 1 }, [
                  t("div", MS, [
                    se[33] || (se[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", DS, f(Ne.value.comfyui_version), 1)
                  ]),
                  t("div", LS, [
                    se[34] || (se[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", OS, f(Ne.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", AS, [
                    se[35] || (se[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", US, f(Ne.value.model_count) + " models", 1)
                  ]),
                  Ne.value.models_with_sources > 0 ? (a(), r("div", NS, [
                    t("span", zS, "└─ " + f(Ne.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  Ne.value.models_without_sources > 0 ? (a(), r("div", FS, [
                    t("span", BS, "└─ " + f(Ne.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", VS, [
                    se[36] || (se[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", WS, f(Ne.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", GS, [
                    se[37] || (se[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", jS, "~" + f(Ne.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          I.value && oe.value ? (a(), L(lt, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: h(() => {
              var Oe, is;
              return [
                t("div", HS, [
                  t("div", KS, [
                    t("div", qS, [
                      se[42] || (se[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", YS, [
                        se[38] || (se[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", JS, "$" + f(oe.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", QS, [
                        se[39] || (se[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", XS, "$" + f(oe.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", ZS, [
                        se[40] || (se[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", e8, "$" + f(oe.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      se[43] || (se[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", t8, [
                        se[41] || (se[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", s8, "~$" + f(oe.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", o8, [
                      se[45] || (se[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", n8, [
                        t("span", null, f(((Oe = Ue.value.find((ae) => ae.id === T.value)) == null ? void 0 : Oe.displayName) || "GPU") + " (" + f(((is = Ue.value.find((ae) => ae.id === T.value)) == null ? void 0 : is.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", a8, [
                        t("span", null, "Region: " + f(W.value), 1)
                      ]),
                      ie.value ? (a(), r("div", l8, [
                        t("span", null, "Volume: " + f(ie.value.name), 1)
                      ])) : y("", !0),
                      le.value === "SPOT" ? (a(), r("div", i8, [...se[44] || (se[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          I.value ? (a(), r("div", r8, [
            x(re, {
              variant: "primary",
              size: "md",
              loading: R.value || Se.value,
              disabled: !Me.value,
              onClick: at
            }, {
              default: h(() => [
                se[46] || (se[46] = t("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  t("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1)),
                $(" " + f(R.value ? "Validating..." : Se.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          ye.value ? (a(), L(lt, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: h(() => [
              x(Et, {
                status: ye.value.status === "success" ? "synced" : "broken"
              }, so({
                icon: h(() => [
                  $(f(ye.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  $(f(ye.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: h(() => [
                  $(f(ye.value.message), 1)
                ]),
                actions: h(() => [
                  x(re, {
                    variant: "ghost",
                    size: "xs",
                    onClick: se[13] || (se[13] = (Oe) => ye.value = null)
                  }, {
                    default: h(() => [...se[47] || (se[47] = [
                      $(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                ye.value.pod_id ? {
                  name: "details",
                  fn: h(() => [
                    x(dt, {
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
        me.value ? (a(), L(ft, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((je = Ee.value) == null ? void 0 : je.phase) === "READY" || ((gt = Ee.value) == null ? void 0 : gt.phase) === "ERROR" || ((Jt = Ee.value) == null ? void 0 : Jt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: no
        }, so({
          body: h(() => {
            var Oe, is, ae, J, Le, Ge, ot, mt, Dt, rs, Gs, js;
            return [
              t("div", c8, [
                t("div", u8, [
                  t("div", {
                    class: xe(["phase-icon", (is = (Oe = Ee.value) == null ? void 0 : Oe.phase) == null ? void 0 : is.toLowerCase()])
                  }, [
                    ((ae = Ee.value) == null ? void 0 : ae.phase) === "READY" ? (a(), r("span", d8, "✓")) : ((J = Ee.value) == null ? void 0 : J.phase) === "ERROR" ? (a(), r("span", f8, "✕")) : ((Le = Ee.value) == null ? void 0 : Le.phase) === "STOPPED" ? (a(), r("span", m8, "○")) : (a(), r("span", v8, "⟳"))
                  ], 2),
                  t("div", p8, [
                    t("div", g8, f(xo((Ge = Ee.value) == null ? void 0 : Ge.phase)), 1),
                    t("div", h8, f(((ot = Ee.value) == null ? void 0 : ot.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                x(ea, {
                  progress: So((mt = Ee.value) == null ? void 0 : mt.phase),
                  variant: ((Dt = Ee.value) == null ? void 0 : Dt.phase) === "ERROR" ? "error" : ((rs = Ee.value) == null ? void 0 : rs.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Gs = Ee.value) == null ? void 0 : Gs.phase) === "READY" ? (a(), r("div", y8, [
                  x(re, {
                    variant: "primary",
                    size: "md",
                    onClick: Co
                  }, {
                    default: h(() => [...se[48] || (se[48] = [
                      $(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                t("div", w8, [
                  (js = Ee.value) != null && js.console_url ? (a(), r("a", {
                    key: 0,
                    href: Ee.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, _8)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((ys = Ee.value) == null ? void 0 : ys.phase) === "READY" || ((ws = Ee.value) == null ? void 0 : ws.phase) === "ERROR" || ((ls = Ee.value) == null ? void 0 : ls.phase) === "STOPPED" ? {
            name: "footer",
            fn: h(() => [
              x(re, {
                variant: "ghost",
                size: "xs",
                onClick: no
              }, {
                default: h(() => [...se[49] || (se[49] = [
                  $(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : y("", !0),
        j.value && F.value ? (a(), L(Or, {
          key: 1,
          issues: F.value.blocking_issues,
          onClose: se[14] || (se[14] = (Oe) => j.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        te.value && F.value ? (a(), L(Ar, {
          key: 2,
          models: F.value.warnings.models_without_sources,
          onConfirm: ut,
          onCancel: se[15] || (se[15] = (Oe) => te.value = !1),
          onRevalidate: Mt
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), b8 = /* @__PURE__ */ fe(k8, [["__scopeId", "data-v-522cd4d9"]]), $8 = { class: "worker-header" }, C8 = { class: "worker-status" }, x8 = { class: "worker-name" }, S8 = { class: "worker-actions" }, I8 = { class: "worker-details" }, E8 = { class: "detail-item" }, T8 = { class: "detail-value" }, P8 = {
  key: 0,
  class: "detail-item"
}, R8 = { class: "detail-value" }, M8 = {
  key: 1,
  class: "detail-item"
}, D8 = { class: "detail-value mode-badge" }, L8 = {
  key: 0,
  class: "worker-stats"
}, O8 = {
  key: 0,
  class: "stat-item"
}, A8 = { key: 0 }, U8 = {
  key: 1,
  class: "worker-stats offline"
}, N8 = /* @__PURE__ */ de({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: xe(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      t("div", $8, [
        t("div", C8, [
          t("span", {
            class: xe(["status-dot", e.worker.status])
          }, null, 2),
          t("span", x8, f(e.worker.name), 1)
        ]),
        t("div", S8, [
          e.worker.status === "online" ? (a(), L(re, {
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
          x(re, {
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
      t("div", I8, [
        t("span", E8, [
          t("span", T8, f(e.worker.host) + ":" + f(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (a(), r("span", P8, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", R8, f(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (a(), r("span", M8, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", D8, f(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (a(), r("div", L8, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          $(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (a(), r("span", O8, [
          $(" • " + f(e.worker.instance_count) + " instance" + f(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (a(), r("span", A8, "(" + f(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (a(), r("div", U8, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          $(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), z8 = /* @__PURE__ */ fe(N8, [["__scopeId", "data-v-b1be7134"]]), F8 = { class: "add-worker-content" }, B8 = { class: "manual-form" }, V8 = { class: "form-row" }, W8 = { class: "form-row-inline" }, G8 = { class: "form-field flex-2" }, j8 = { class: "form-field flex-1" }, H8 = { class: "form-row" }, K8 = { class: "api-key-wrapper" }, q8 = ["type"], Y8 = { class: "result-icon" }, J8 = { class: "result-content" }, Q8 = { class: "result-message" }, X8 = {
  key: 0,
  class: "result-detail"
}, Z8 = { class: "modal-actions" }, e4 = /* @__PURE__ */ de({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = tt(), l = Vs({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), i = k(!1), c = k(!1), u = k(!1), d = k(null), m = z(() => l.host && l.port && l.apiKey), v = z(() => l.name && l.host && l.port && l.apiKey);
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
    return (p, _) => (a(), L(ft, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: _[5] || (_[5] = (C) => p.$emit("close"))
    }, {
      body: h(() => [
        t("div", F8, [
          t("div", B8, [
            t("div", V8, [
              _[6] || (_[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              Ke(t("input", {
                "onUpdate:modelValue": _[0] || (_[0] = (C) => l.name = C),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [zt, l.name]
              ])
            ]),
            t("div", W8, [
              t("div", G8, [
                _[7] || (_[7] = t("label", { class: "form-label" }, "Host", -1)),
                Ke(t("input", {
                  "onUpdate:modelValue": _[1] || (_[1] = (C) => l.host = C),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [zt, l.host]
                ])
              ]),
              t("div", j8, [
                _[8] || (_[8] = t("label", { class: "form-label" }, "Port", -1)),
                Ke(t("input", {
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
            t("div", H8, [
              _[9] || (_[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", K8, [
                Ke(t("input", {
                  "onUpdate:modelValue": _[3] || (_[3] = (C) => l.apiKey = C),
                  type: i.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, q8), [
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
              class: xe(["test-result", d.value.type])
            }, [
              t("span", Y8, f(d.value.type === "success" ? "✓" : "✕"), 1),
              t("div", J8, [
                t("span", Q8, f(d.value.message), 1),
                d.value.gpu_info ? (a(), r("span", X8, "GPU: " + f(d.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        t("div", Z8, [
          x(re, {
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
          x(re, {
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
}), t4 = /* @__PURE__ */ fe(e4, [["__scopeId", "data-v-07a00732"]]), s4 = { class: "discovered-content" }, o4 = {
  key: 0,
  class: "workers-list"
}, n4 = { class: "worker-info" }, a4 = { class: "worker-name" }, l4 = { class: "worker-address" }, i4 = {
  key: 0,
  class: "worker-gpu"
}, r4 = {
  key: 1,
  class: "empty-state"
}, c4 = {
  key: 2,
  class: "api-key-section"
}, u4 = { class: "selected-worker" }, d4 = { class: "selected-name" }, f4 = { class: "selected-address" }, m4 = { class: "form-row" }, v4 = { class: "api-key-wrapper" }, p4 = ["type"], g4 = { class: "result-icon" }, h4 = { class: "result-message" }, y4 = { class: "modal-actions" }, w4 = /* @__PURE__ */ de({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = tt(), l = k(null), i = k(""), c = k(!1), u = k(!1), d = k(null), m = k(null);
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
    return (w, p) => (a(), L(ft, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (_) => w.$emit("close"))
    }, {
      body: h(() => [
        t("div", s4, [
          e.workers.length > 0 ? (a(), r("div", o4, [
            (a(!0), r(K, null, ve(e.workers, (_) => (a(), r("div", {
              key: `${_.host}:${_.port}`,
              class: "worker-item"
            }, [
              t("div", n4, [
                t("span", a4, f(_.name), 1),
                t("span", l4, f(_.host) + ":" + f(_.port), 1),
                _.gpu_info ? (a(), r("span", i4, f(_.gpu_info), 1)) : y("", !0)
              ]),
              x(re, {
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
          ])) : (a(), r("div", r4, [...p[5] || (p[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              $("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (a(), r("div", c4, [
            t("div", u4, [
              p[6] || (p[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", d4, f(l.value.name), 1),
              t("span", f4, "(" + f(l.value.host) + ":" + f(l.value.port) + ")", 1)
            ]),
            t("div", m4, [
              p[7] || (p[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", v4, [
                Ke(t("input", {
                  ref_key: "apiKeyInput",
                  ref: d,
                  "onUpdate:modelValue": p[0] || (p[0] = (_) => i.value = _),
                  type: c.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: Ht(g, ["enter"])
                }, null, 40, p4), [
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
              class: xe(["test-result", m.value.type])
            }, [
              t("span", g4, f(m.value.type === "success" ? "✓" : "✕"), 1),
              t("span", h4, f(m.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", y4, [
          l.value ? (a(), L(re, {
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
          l.value ? (a(), L(re, {
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
}), _4 = /* @__PURE__ */ fe(w4, [["__scopeId", "data-v-5a3e40a4"]]), k4 = { class: "deploy-content" }, b4 = { class: "section" }, $4 = {
  key: 0,
  class: "loading-text"
}, C4 = {
  key: 1,
  class: "empty-remotes"
}, x4 = {
  key: 2,
  class: "remotes-list"
}, S4 = { class: "section" }, I4 = { class: "mode-options" }, E4 = { class: "mode-option" }, T4 = ["disabled"], P4 = { class: "mode-option" }, R4 = { class: "section" }, M4 = {
  key: 0,
  class: "section"
}, D4 = { class: "summary-row" }, L4 = {
  key: 1,
  class: "sync-warning"
}, O4 = { class: "warning-content" }, A4 = { class: "modal-actions" }, U4 = /* @__PURE__ */ de({
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
    } = tt(), v = k([]), g = k({}), w = k(!1), p = k(null), _ = k(null), C = k(null), b = k(o.worker.mode || "native"), P = k(""), M = k(null), I = k(!1), S = z(() => p.value && g.value[p.value] || null), q = z(() => {
      if (!p.value) return null;
      const V = v.value.find((A) => A.name === p.value);
      return (V == null ? void 0 : V.fetch_url) || null;
    }), Y = z(() => q.value && !I.value);
    async function W() {
      w.value = !0;
      try {
        const V = await l();
        v.value = V.remotes, await Promise.all(
          V.remotes.map(async (N) => {
            const D = await i(N.name);
            D && (g.value[N.name] = D);
          })
        );
        const A = V.remotes.find((N) => N.is_default);
        A ? p.value = A.name : V.remotes.length > 0 && (p.value = V.remotes[0].name);
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
    async function T(V) {
      _.value = V;
      try {
        await c(V);
        const A = await i(V);
        A && (g.value[V] = A), n("toast", `Fetched from ${V}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        _.value = null;
      }
    }
    async function O(V) {
      C.value = V;
      try {
        await u(V, { force: !1 });
        const A = await i(V);
        A && (g.value[V] = A), n("toast", `Pushed to ${V}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        C.value = null;
      }
    }
    function le(V) {
      p.value = V;
    }
    async function Z() {
      if (q.value) {
        I.value = !0;
        try {
          const V = await m(o.worker.name, {
            import_source: q.value,
            mode: b.value,
            name: P.value || void 0
          });
          V.id ? (n("toast", `Deployment started: ${V.name || V.id}`, "success"), n("deployed")) : V.status === "error" ? n("toast", V.message || "Deployment failed", "error") : n("toast", "Unexpected response from worker", "error");
        } catch (V) {
          n("toast", V instanceof Error ? V.message : "Deployment failed", "error");
        } finally {
          I.value = !1;
        }
      }
    }
    return Qe(() => {
      W(), E();
    }), (V, A) => (a(), L(ft, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: A[5] || (A[5] = (N) => V.$emit("close"))
    }, {
      body: h(() => [
        t("div", k4, [
          t("div", b4, [
            A[7] || (A[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            w.value ? (a(), r("div", $4, "Loading remotes...")) : v.value.length === 0 ? (a(), r("div", C4, [...A[6] || (A[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (a(), r("div", x4, [
              (a(!0), r(K, null, ve(v.value, (N) => (a(), L(zr, {
                key: N.name,
                remote: N,
                "sync-status": g.value[N.name],
                "is-selected": p.value === N.name,
                "is-fetching": _.value === N.name,
                "is-pushing": C.value === N.name,
                onFetch: T,
                onPush: O,
                onSelect: le
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", S4, [
            A[10] || (A[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", I4, [
              t("label", E4, [
                Ke(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": A[0] || (A[0] = (N) => b.value = N),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, T4), [
                  [Zt, b.value]
                ]),
                A[8] || (A[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", P4, [
                Ke(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": A[1] || (A[1] = (N) => b.value = N),
                  value: "native"
                }, null, 512), [
                  [Zt, b.value]
                ]),
                A[9] || (A[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", R4, [
            A[11] || (A[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            Ke(t("input", {
              "onUpdate:modelValue": A[2] || (A[2] = (N) => P.value = N),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [zt, P.value]
            ])
          ]),
          M.value ? (a(), r("div", M4, [
            A[12] || (A[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", D4, " ComfyUI: " + f(M.value.comfyui_version) + " • " + f(M.value.node_count) + " nodes • " + f(M.value.model_count) + " models • " + f(M.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          S.value && S.value.ahead > 0 ? (a(), r("div", L4, [
            A[14] || (A[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", O4, [
              t("strong", null, f(S.value.ahead) + " unpushed commit" + f(S.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + f(p.value) + "' before deploying to include your latest changes.", 1)
            ]),
            x(re, {
              variant: "primary",
              size: "xs",
              loading: C.value === p.value,
              onClick: A[3] || (A[3] = (N) => p.value && O(p.value))
            }, {
              default: h(() => [...A[13] || (A[13] = [
                $(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", A4, [
          x(re, {
            variant: "ghost",
            size: "sm",
            onClick: A[4] || (A[4] = (N) => V.$emit("close"))
          }, {
            default: h(() => [...A[15] || (A[15] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          x(re, {
            variant: "primary",
            size: "sm",
            loading: I.value,
            disabled: !Y.value || I.value,
            onClick: Z
          }, {
            default: h(() => [...A[16] || (A[16] = [
              $(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), N4 = /* @__PURE__ */ fe(U4, [["__scopeId", "data-v-c12720d3"]]), z4 = { class: "custom-tab" }, F4 = { class: "section-header" }, B4 = { class: "section-actions" }, V4 = { class: "workers-content" }, W4 = {
  key: 0,
  class: "loading-state"
}, G4 = {
  key: 1,
  class: "empty-state"
}, j4 = {
  key: 2,
  class: "workers-list"
}, H4 = { class: "scan-icon" }, K4 = { class: "scan-message" }, q4 = /* @__PURE__ */ de({
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
        const W = await n();
        u.value = W.workers;
      } catch (W) {
        o("toast", W instanceof Error ? W.message : "Failed to load workers", "error");
      } finally {
        m.value = !1;
      }
    }
    async function P() {
      v.value = !0, C.value = null;
      try {
        const W = await c(), E = W.discovered.filter(
          (T) => !u.value.some((O) => O.host === T.host && O.port === T.port)
        );
        d.value = E, E.length > 0 ? p.value = !0 : W.discovered.length > 0 ? C.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : C.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (W) {
        o("toast", W instanceof Error ? W.message : "Network scan failed", "error");
      } finally {
        v.value = !1;
      }
    }
    async function M(W) {
      try {
        await l(W), o("toast", `Worker '${W.name}' added`, "success"), w.value = !1, await b();
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to add worker", "error");
      }
    }
    async function I(W) {
      try {
        await l(W), o("toast", `Worker '${W.name}' added`, "success"), p.value = !1, await b();
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to add worker", "error");
      }
    }
    async function S(W) {
      g.value = W;
      try {
        await i(W), o("toast", `Worker '${W}' removed`, "success"), await b();
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to remove worker", "error");
      } finally {
        g.value = null;
      }
    }
    function q(W) {
      _.value = W;
    }
    function Y() {
      _.value = null, o("deployed");
    }
    return Qe(() => {
      b();
    }), (W, E) => (a(), r("div", z4, [
      t("div", F4, [
        E[8] || (E[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", B4, [
          x(re, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: P
          }, {
            default: h(() => [...E[6] || (E[6] = [
              $(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          x(re, {
            variant: "secondary",
            size: "xs",
            onClick: E[0] || (E[0] = (T) => w.value = !0)
          }, {
            default: h(() => [...E[7] || (E[7] = [
              $(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("div", V4, [
        m.value && u.value.length === 0 ? (a(), r("div", W4, [...E[9] || (E[9] = [
          t("span", { class: "spinner" }, null, -1),
          $(" Loading workers... ", -1)
        ])])) : u.value.length === 0 ? (a(), r("div", G4, [...E[10] || (E[10] = [
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
        ])])) : (a(), r("div", j4, [
          (a(!0), r(K, null, ve(u.value, (T) => (a(), L(z8, {
            key: T.name,
            worker: T,
            "is-action-loading": g.value === T.name,
            onDeploy: q,
            onRemove: S
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      C.value ? (a(), r("div", {
        key: 0,
        class: xe(["scan-result", C.value.type])
      }, [
        t("span", H4, f(C.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", K4, f(C.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: E[1] || (E[1] = (T) => C.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (a(), L(_4, {
        key: 1,
        workers: d.value,
        onClose: E[2] || (E[2] = (T) => p.value = !1),
        onAdd: I
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (a(), L(t4, {
        key: 2,
        onClose: E[3] || (E[3] = (T) => w.value = !1),
        onAdd: M
      })) : y("", !0),
      _.value ? (a(), L(N4, {
        key: 3,
        worker: _.value,
        onClose: E[4] || (E[4] = (T) => _.value = null),
        onToast: E[5] || (E[5] = (T, O) => o("toast", T, O)),
        onDeployed: Y
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), Y4 = /* @__PURE__ */ fe(q4, [["__scopeId", "data-v-1637dead"]]), ha = "ComfyGit.Deploy.GitHubPAT";
function Fr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function J4(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function Q4() {
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
    isRemoteHttps: J4
  };
}
const X4 = { class: "settings-content" }, Z4 = { class: "settings-section" }, e6 = {
  key: 0,
  class: "ssh-warning"
}, t6 = { class: "form-row" }, s6 = { class: "token-wrapper" }, o6 = ["type"], n6 = { class: "result-icon" }, a6 = { class: "result-message" }, l6 = { class: "token-actions" }, i6 = /* @__PURE__ */ de({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: n, setToken: l, clearToken: i, hasToken: c } = Q4(), { getRemotes: u, testGitAuth: d } = tt(), m = k(""), v = k(!1), g = k(!1), w = k(null), p = k(!1), _ = z(() => c());
    Qe(async () => {
      var I;
      const M = n();
      M && (m.value = M);
      try {
        const q = (I = (await u()).remotes) == null ? void 0 : I.find((Y) => Y.name === "origin");
        q && Fr(q.url) && (p.value = !0);
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
    function P() {
      i(), m.value = "", w.value = null;
    }
    return (M, I) => (a(), L(ft, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: I[2] || (I[2] = (S) => M.$emit("close"))
    }, {
      body: h(() => [
        t("div", X4, [
          t("div", Z4, [
            I[8] || (I[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            I[9] || (I[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (a(), r("div", e6, [...I[3] || (I[3] = [
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
            t("div", t6, [
              I[4] || (I[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", s6, [
                Ke(t("input", {
                  "onUpdate:modelValue": I[0] || (I[0] = (S) => m.value = S),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, o6), [
                  [Xn, m.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: I[1] || (I[1] = (S) => v.value = !v.value)
                }, f(v.value ? "Hide" : "Show"), 1)
              ]),
              I[5] || (I[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            w.value ? (a(), r("div", {
              key: 1,
              class: xe(["test-result", w.value.type])
            }, [
              t("span", n6, f(w.value.type === "success" ? "✓" : "✕"), 1),
              t("span", a6, f(w.value.message), 1)
            ], 2)) : y("", !0),
            t("div", l6, [
              x(re, {
                variant: "ghost",
                size: "sm",
                loading: g.value,
                disabled: !m.value || g.value,
                onClick: C
              }, {
                default: h(() => [...I[6] || (I[6] = [
                  $(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              _.value ? (a(), L(re, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: P
              }, {
                default: h(() => [...I[7] || (I[7] = [
                  $(" Clear ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        x(re, {
          variant: "primary",
          size: "sm",
          disabled: !m.value,
          onClick: b
        }, {
          default: h(() => [...I[10] || (I[10] = [
            $(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
}), r6 = /* @__PURE__ */ fe(i6, [["__scopeId", "data-v-b21588ad"]]), c6 = /* @__PURE__ */ de({
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
    } = Nr(), w = k(!1), p = k(!1), _ = k("instances"), C = k(null), b = k(null), P = z(() => [
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
    async function M(W) {
      C.value = W.id;
      try {
        await u(W), o("toast", "Instance stopped", "success");
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to stop instance", "error");
      } finally {
        C.value = null;
      }
    }
    async function I(W) {
      C.value = W.id;
      try {
        await d(W), o("toast", "Instance starting...", "success");
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to start instance", "error");
      } finally {
        C.value = null;
      }
    }
    function S(W) {
      b.value = W;
    }
    async function q() {
      const W = b.value;
      if (W) {
        b.value = null, C.value = W.id;
        try {
          await m(W), o("toast", "Instance terminated", "success");
        } catch (E) {
          o("toast", E instanceof Error ? E.message : "Failed to terminate instance", "error");
        } finally {
          C.value = null;
        }
      }
    }
    async function Y() {
      await c(), _.value = "instances";
    }
    return Qe(() => {
      c(), v();
    }), oo(() => {
      g();
    }), (W, E) => (a(), r(K, null, [
      x(Pt, null, {
        header: h(() => [
          x(Rt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: E[1] || (E[1] = (T) => w.value = !0)
          }, {
            actions: h(() => [
              x(re, {
                variant: "ghost",
                size: "xs",
                onClick: E[0] || (E[0] = (T) => p.value = !0)
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
          x(Pr, {
            modelValue: _.value,
            "onUpdate:modelValue": E[2] || (E[2] = (T) => _.value = T),
            tabs: P.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: h(() => [
          _.value === "instances" ? (a(), L(x5, {
            key: 0,
            instances: Ve(n),
            "is-loading": Ve(l),
            "action-loading-id": C.value,
            onRefresh: Ve(c),
            onStop: M,
            onStart: I,
            onTerminate: S
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          _.value === "runpod" ? (a(), L(b8, {
            key: 1,
            onToast: E[3] || (E[3] = (T, O) => o("toast", T, O)),
            onNavigate: E[4] || (E[4] = (T) => o("navigate", T)),
            onDeployed: Y
          })) : y("", !0),
          _.value === "custom" ? (a(), L(Y4, {
            key: 2,
            onToast: E[5] || (E[5] = (T, O) => o("toast", T, O)),
            onDeployed: Y
          })) : y("", !0)
        ]),
        _: 1
      }),
      b.value ? (a(), L(nl, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${b.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: q,
        onCancel: E[6] || (E[6] = (T) => b.value = null)
      }, null, 8, ["message"])) : y("", !0),
      x(as, {
        show: w.value,
        title: "Deploy to Cloud",
        onClose: E[7] || (E[7] = (T) => w.value = !1)
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
      p.value ? (a(), L(r6, {
        key: 1,
        onClose: E[8] || (E[8] = (T) => p.value = !1),
        onSaved: E[9] || (E[9] = (T) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), u6 = /* @__PURE__ */ fe(c6, [["__scopeId", "data-v-d4e32a10"]]), d6 = { class: "header-info" }, f6 = { class: "commit-hash" }, m6 = {
  key: 0,
  class: "commit-refs"
}, v6 = { class: "commit-message" }, p6 = { class: "commit-date" }, g6 = {
  key: 0,
  class: "loading"
}, h6 = {
  key: 1,
  class: "changes-section"
}, y6 = { class: "stats-row" }, w6 = { class: "stat" }, _6 = { class: "stat insertions" }, k6 = { class: "stat deletions" }, b6 = {
  key: 0,
  class: "change-group"
}, $6 = {
  key: 1,
  class: "change-group"
}, C6 = {
  key: 0,
  class: "version"
}, x6 = {
  key: 2,
  class: "change-group"
}, S6 = { class: "change-item" }, I6 = /* @__PURE__ */ de({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = tt(), n = k(null), l = k(!0), i = z(() => {
      if (!n.value) return !1;
      const u = n.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = z(() => {
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
    }), (u, d) => (a(), L(ft, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (m) => u.$emit("close"))
    }, {
      header: h(() => {
        var m, v, g, w;
        return [
          t("div", d6, [
            d[4] || (d[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", f6, f(((m = n.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (g = n.value) == null ? void 0 : g.refs) != null && w.length ? (a(), r("span", m6, [
              (a(!0), r(K, null, ve(n.value.refs, (p) => (a(), r("span", {
                key: p,
                class: "ref-badge"
              }, f(p), 1))), 128))
            ])) : y("", !0)
          ]),
          x(Te, {
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
          t("div", v6, f(((m = n.value) == null ? void 0 : m.message) || e.commit.message), 1),
          t("div", p6, f(((v = n.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), r("div", g6, "Loading details...")) : n.value ? (a(), r("div", h6, [
            t("div", y6, [
              t("span", w6, f(n.value.stats.files_changed) + " files", 1),
              t("span", _6, "+" + f(n.value.stats.insertions), 1),
              t("span", k6, "-" + f(n.value.stats.deletions), 1)
            ]),
            i.value ? (a(), r("div", b6, [
              x(Go, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  $("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(K, null, ve(n.value.changes.workflows.added, (g) => (a(), r("div", {
                key: "add-" + g,
                class: "change-item added"
              }, [
                d[7] || (d[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), r(K, null, ve(n.value.changes.workflows.modified, (g) => (a(), r("div", {
                key: "mod-" + g,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), r(K, null, ve(n.value.changes.workflows.deleted, (g) => (a(), r("div", {
                key: "del-" + g,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (a(), r("div", $6, [
              x(Go, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  $("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(K, null, ve(n.value.changes.nodes.added, (g) => (a(), r("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g.name), 1),
                g.version ? (a(), r("span", C6, "(" + f(g.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), r(K, null, ve(n.value.changes.nodes.removed, (g) => (a(), r("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), r("div", x6, [
              x(Go, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  $("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", S6, [
                d[14] || (d[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, f(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        x(Te, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (m) => u.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            $(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        x(Te, {
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
}), E6 = /* @__PURE__ */ fe(I6, [["__scopeId", "data-v-d256ff6d"]]), T6 = { class: "base-textarea-wrapper" }, P6 = ["value", "rows", "placeholder", "disabled", "maxlength"], R6 = {
  key: 0,
  class: "base-textarea-count"
}, M6 = /* @__PURE__ */ de({
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
    return (i, c) => (a(), r("div", T6, [
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
      }, null, 40, P6),
      e.showCharCount && e.maxLength ? (a(), r("div", R6, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), ei = /* @__PURE__ */ fe(M6, [["__scopeId", "data-v-c6d16c93"]]), D6 = ["checked", "disabled"], L6 = { class: "base-checkbox-box" }, O6 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, A6 = {
  key: 0,
  class: "base-checkbox-label"
}, U6 = /* @__PURE__ */ de({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("label", {
      class: xe(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked))
      }, null, 40, D6),
      t("span", L6, [
        e.modelValue ? (a(), r("svg", O6, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (a(), r("span", A6, [
        He(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Da = /* @__PURE__ */ fe(U6, [["__scopeId", "data-v-bf17c831"]]), N6 = { class: "popover-header" }, z6 = { class: "popover-body" }, F6 = {
  key: 0,
  class: "changes-summary"
}, B6 = {
  key: 0,
  class: "change-item"
}, V6 = {
  key: 1,
  class: "change-item"
}, W6 = {
  key: 2,
  class: "change-item"
}, G6 = {
  key: 3,
  class: "change-item"
}, j6 = {
  key: 4,
  class: "change-item"
}, H6 = {
  key: 5,
  class: "change-item"
}, K6 = {
  key: 1,
  class: "no-changes"
}, q6 = {
  key: 2,
  class: "loading"
}, Y6 = {
  key: 3,
  class: "issues-error"
}, J6 = { class: "error-header" }, Q6 = { class: "error-title" }, X6 = { class: "issues-list" }, Z6 = { class: "workflow-state" }, eI = { class: "message-section" }, tI = { class: "popover-footer" }, sI = {
  key: 1,
  class: "commit-popover"
}, oI = { class: "popover-header" }, nI = { class: "popover-body" }, aI = {
  key: 0,
  class: "changes-summary"
}, lI = {
  key: 0,
  class: "change-item"
}, iI = {
  key: 1,
  class: "change-item"
}, rI = {
  key: 2,
  class: "change-item"
}, cI = {
  key: 3,
  class: "change-item"
}, uI = {
  key: 4,
  class: "change-item"
}, dI = {
  key: 5,
  class: "change-item"
}, fI = {
  key: 1,
  class: "no-changes"
}, mI = {
  key: 2,
  class: "loading"
}, vI = {
  key: 3,
  class: "issues-error"
}, pI = { class: "error-header" }, gI = { class: "error-title" }, hI = { class: "issues-list" }, yI = { class: "workflow-state" }, wI = { class: "message-section" }, _I = { class: "popover-footer" }, kI = /* @__PURE__ */ de({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, n = s, { commit: l } = tt(), i = k(""), c = k(!1), u = k(!1), d = z(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), m = z(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, C = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || C.nodes_added.length > 0 || C.nodes_removed.length > 0;
    }), v = z(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((C) => C.has_issues) : [];
    }), g = z(() => v.value.length > 0), w = z(() => g.value && !u.value);
    async function p() {
      var _, C, b, P;
      if (!(g.value && !u.value) && !(!d.value || !i.value.trim() || c.value)) {
        c.value = !0;
        try {
          const M = await l(i.value.trim(), u.value);
          if (M.status === "success") {
            const I = `Committed: ${((_ = M.summary) == null ? void 0 : _.new) || 0} new, ${((C = M.summary) == null ? void 0 : C.modified) || 0} modified, ${((b = M.summary) == null ? void 0 : b.deleted) || 0} deleted`;
            n("committed", { success: !0, message: I });
          } else if (M.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (M.status === "blocked") {
            const I = ((P = M.issues) == null ? void 0 : P.map((S) => `${S.name}: ${S.issue}`).join("; ")) || "Unknown issues";
            n("committed", { success: !1, message: `Commit blocked - ${I}. Enable "Allow issues" to force.` });
          } else
            n("committed", { success: !1, message: M.message || "Commit failed" });
        } catch (M) {
          n("committed", { success: !1, message: M instanceof Error ? M.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (_, C) => e.asModal ? (a(), L(Ct, {
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
          t("div", N6, [
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
          t("div", z6, [
            e.status && d.value ? (a(), r("div", F6, [
              e.status.workflows.new.length ? (a(), r("div", B6, [
                C[12] || (C[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), r("div", V6, [
                C[13] || (C[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), r("div", W6, [
                C[14] || (C[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), r("div", G6, [
                C[15] || (C[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), r("div", j6, [
                C[16] || (C[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (a(), r("div", H6, [...C[17] || (C[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), r("div", K6, " No changes to commit ")) : (a(), r("div", q6, " Loading... ")),
            g.value ? (a(), r("div", Y6, [
              t("div", J6, [
                C[18] || (C[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", Q6, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", X6, [
                (a(!0), r(K, null, ve(v.value, (b) => (a(), r("div", {
                  key: b.name,
                  class: "issue-item"
                }, [
                  t("strong", null, f(b.name), 1),
                  t("span", Z6, "(" + f(b.sync_state) + ")", 1),
                  $(": " + f(b.issue_summary), 1)
                ]))), 128))
              ]),
              x(Da, {
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
            t("div", eI, [
              x(ei, {
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
          t("div", tI, [
            x(Te, {
              variant: "secondary",
              onClick: C[3] || (C[3] = (b) => n("close"))
            }, {
              default: h(() => [...C[20] || (C[20] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(Te, {
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
    ])) : (a(), r("div", sI, [
      t("div", oI, [
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
      t("div", nI, [
        e.status && d.value ? (a(), r("div", aI, [
          e.status.workflows.new.length ? (a(), r("div", lI, [
            C[23] || (C[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), r("div", iI, [
            C[24] || (C[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), r("div", rI, [
            C[25] || (C[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), r("div", cI, [
            C[26] || (C[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), r("div", uI, [
            C[27] || (C[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (a(), r("div", dI, [...C[28] || (C[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), r("div", fI, " No changes to commit ")) : (a(), r("div", mI, " Loading... ")),
        g.value ? (a(), r("div", vI, [
          t("div", pI, [
            C[29] || (C[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", gI, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", hI, [
            (a(!0), r(K, null, ve(v.value, (b) => (a(), r("div", {
              key: b.name,
              class: "issue-item"
            }, [
              t("strong", null, f(b.name), 1),
              t("span", yI, "(" + f(b.sync_state) + ")", 1),
              $(": " + f(b.issue_summary), 1)
            ]))), 128))
          ]),
          x(Da, {
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
        t("div", wI, [
          x(ei, {
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
      t("div", _I, [
        x(Te, {
          variant: "secondary",
          onClick: C[9] || (C[9] = (b) => n("close"))
        }, {
          default: h(() => [...C[31] || (C[31] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        x(Te, {
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
}), Br = /* @__PURE__ */ fe(kI, [["__scopeId", "data-v-5f897631"]]), bI = { class: "modal-header" }, $I = { class: "modal-body" }, CI = { class: "switch-message" }, xI = { class: "switch-details" }, SI = { class: "modal-actions" }, II = /* @__PURE__ */ de({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), L(Ct, { to: "body" }, [
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
          t("div", bI, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", $I, [
            t("p", CI, [
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
            t("p", xI, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", SI, [
            x(re, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(re, {
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
}), EI = /* @__PURE__ */ fe(II, [["__scopeId", "data-v-e9c5253e"]]), TI = {
  key: 0,
  class: "modal-overlay"
}, PI = { class: "modal-content" }, RI = { class: "modal-body" }, MI = { class: "progress-info" }, DI = { class: "progress-percentage" }, LI = { class: "progress-state" }, OI = { class: "switch-steps" }, AI = { class: "step-icon" }, UI = { class: "step-label" }, NI = /* @__PURE__ */ de({
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
    return (i, c) => (a(), L(Ct, { to: "body" }, [
      e.show ? (a(), r("div", TI, [
        t("div", PI, [
          c[1] || (c[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", RI, [
            x(ea, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            t("div", MI, [
              t("div", DI, f(e.progress) + "%", 1),
              t("div", LI, f(o.value), 1)
            ]),
            t("div", OI, [
              (a(!0), r(K, null, ve(l.value, (u) => (a(), r("div", {
                key: u.state,
                class: xe(["switch-step", u.status])
              }, [
                t("span", AI, f(u.icon), 1),
                t("span", UI, f(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), zI = /* @__PURE__ */ fe(NI, [["__scopeId", "data-v-768a5078"]]), FI = { class: "modal-header" }, BI = { class: "modal-body" }, VI = {
  key: 0,
  class: "node-section"
}, WI = { class: "node-list" }, GI = {
  key: 1,
  class: "node-section"
}, jI = { class: "node-list" }, HI = { class: "modal-actions" }, KI = /* @__PURE__ */ de({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), L(Ct, { to: "body" }, [
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
          t("div", FI, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", BI, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), r("div", VI, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", WI, [
                (a(!0), r(K, null, ve(e.mismatchDetails.missing_nodes, (n) => (a(), r("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), r("div", GI, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", jI, [
                (a(!0), r(K, null, ve(e.mismatchDetails.extra_nodes, (n) => (a(), r("div", {
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
          t("div", HI, [
            x(re, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(re, {
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
}), qI = /* @__PURE__ */ fe(KI, [["__scopeId", "data-v-7cad7518"]]), YI = [
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
], JI = "v0.0.17", QI = "Akatz", XI = { class: "social-buttons" }, ZI = ["title", "aria-label", "onClick"], eE = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, tE = ["d"], sE = ["title", "aria-label", "onClick"], oE = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, nE = ["d"], aE = /* @__PURE__ */ de({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), r("div", XI, [
      (a(!0), r(K, null, ve(Ve(YI), (l) => (a(), r(K, {
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
          (a(), r("svg", eE, [
            t("path", {
              d: l.iconPath
            }, null, 8, tE)
          ]))
        ], 8, ZI)) : (a(), r("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => s(l.url)
        }, [
          (a(), r("svg", oE, [
            t("path", {
              d: l.iconPath
            }, null, 8, nE)
          ]))
        ], 8, sE))
      ], 64))), 128))
    ]));
  }
}), Vr = /* @__PURE__ */ fe(aE, [["__scopeId", "data-v-4f846342"]]), lE = { class: "footer-info" }, iE = { class: "version" }, rE = { class: "made-by" }, cE = /* @__PURE__ */ de({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (a(), r("div", lE, [
      t("span", iE, f(Ve(JI)), 1),
      t("span", rE, [
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
        $(" by " + f(Ve(QI)), 1)
      ])
    ]));
  }
}), Wr = /* @__PURE__ */ fe(cE, [["__scopeId", "data-v-8bc3db0a"]]), uE = /* @__PURE__ */ de({
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
    return (i, c) => (a(), L(ft, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => i.$emit("close"))
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
          x(Te, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: n
          }, {
            default: h(() => [...c[2] || (c[2] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          x(Te, {
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
}), dE = /* @__PURE__ */ fe(uE, [["__scopeId", "data-v-fac00ae7"]]), fE = { class: "header-actions" }, mE = {
  key: 0,
  class: "wizard-step"
}, vE = { class: "form-field" }, pE = ["placeholder"], gE = {
  key: 0,
  class: "form-error"
}, hE = { class: "form-field form-field--checkbox" }, yE = { class: "form-checkbox" }, wE = {
  key: 0,
  class: "form-field"
}, _E = ["placeholder"], kE = {
  key: 0,
  class: "form-info"
}, bE = {
  key: 1,
  class: "form-suggestion"
}, $E = {
  key: 2,
  class: "form-error"
}, CE = {
  key: 3,
  class: "form-info"
}, xE = {
  key: 1,
  class: "wizard-step"
}, SE = {
  key: 0,
  class: "progress-check-loading"
}, IE = {
  key: 0,
  class: "cli-warning"
}, EE = { class: "cli-warning-header" }, TE = {
  key: 1,
  class: "env-landing"
}, PE = { class: "env-list" }, RE = ["value"], ME = { class: "env-name" }, DE = {
  key: 2,
  class: "env-create"
}, LE = { class: "form-field" }, OE = { class: "form-field" }, AE = ["value"], UE = { class: "form-field" }, NE = ["disabled"], zE = ["value"], FE = { class: "form-field" }, BE = ["value"], VE = { class: "form-field form-field--checkbox" }, WE = { class: "form-checkbox" }, GE = {
  key: 0,
  class: "form-error"
}, jE = {
  key: 1,
  class: "env-creating"
}, HE = { class: "creating-intro" }, KE = {
  key: 3,
  class: "env-import"
}, qE = { class: "wizard-footer" }, YE = { class: "wizard-footer-actions" }, io = 10, JE = 600 * 1e3, ti = 1800 * 1e3, QE = /* @__PURE__ */ de({
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
    } = tt(), g = k(o.initialStep || 1), w = k(null), p = k("landing"), _ = k(!1), C = k(!1), b = k(!1), P = k(!1), M = k(null), I = k(o.initialStep === 2), S = k(o.defaultPath), q = k(!!o.detectedModelsDir), Y = k(o.detectedModelsDir || ""), W = k(null), E = k(null), T = k(null), O = k(null), le = k("my-new-env"), Z = k(Dr), V = k("latest"), A = k(Lr), N = k(!0), D = k(null), ee = k(null), Q = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), pe = k(!1), he = k(!1), Re = k(!1), Fe = k({ progress: 0, message: "" }), Ue = k({ progress: 0, message: "" }), qe = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Ne = k(0), Ie = k(null), Se = k(0), ye = k(null), me = z(() => {
      var be, we;
      const oe = (be = S.value) == null ? void 0 : be.trim(), X = !W.value, De = !q.value || !E.value && ((we = Y.value) == null ? void 0 : we.trim());
      return oe && X && De;
    }), Pe = z(() => {
      var oe;
      return (oe = le.value) == null ? void 0 : oe.trim();
    }), Ee = z(() => !!(g.value === 2 || ee.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), U = z(() => ee.value || o.workspacePath || null);
    async function R() {
      var oe;
      if (W.value = null, !!((oe = S.value) != null && oe.trim()))
        try {
          const X = await c({ path: S.value, type: "workspace" });
          X.valid || (W.value = X.error || "Invalid path");
        } catch (X) {
          W.value = X instanceof Error ? X.message : "Validation failed";
        }
    }
    async function F() {
      var oe;
      if (E.value = null, T.value = null, O.value = null, !!((oe = Y.value) != null && oe.trim()))
        try {
          const X = await c({ path: Y.value, type: "models" });
          if (X.valid)
            O.value = X.model_count ?? null;
          else if (E.value = X.error || "Invalid path", X.suggestion) {
            T.value = X.suggestion, Y.value = X.suggestion, E.value = null;
            const De = await c({ path: X.suggestion, type: "models" });
            De.valid && (O.value = De.model_count ?? null);
          }
        } catch (X) {
          E.value = X instanceof Error ? X.message : "Validation failed";
        }
    }
    async function j() {
      var oe, X, De, be, we;
      if (W.value = null, E.value = null, await R(), (oe = W.value) != null && oe.includes("already exists")) {
        W.value = null, ee.value = ((X = S.value) == null ? void 0 : X.trim()) || o.defaultPath, g.value = 2, ie();
        return;
      }
      if (!W.value && !(q.value && ((De = Y.value) != null && De.trim()) && (await F(), E.value))) {
        he.value = !0;
        try {
          await l({
            workspace_path: ((be = S.value) == null ? void 0 : be.trim()) || o.defaultPath,
            models_directory: q.value && ((we = Y.value) == null ? void 0 : we.trim()) || null
          }), Ne.value = 0, Ie.value = Date.now();
          const H = setInterval(async () => {
            var G;
            if (Ie.value && Date.now() - Ie.value > JE) {
              clearInterval(H), he.value = !1, W.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const ce = await i();
              if (Ne.value = 0, ce.state === "idle" && he.value) {
                clearInterval(H), he.value = !1, W.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Fe.value = { progress: ce.progress, message: ce.message }, ce.state === "complete" ? (clearInterval(H), he.value = !1, ee.value = ((G = S.value) == null ? void 0 : G.trim()) || o.defaultPath, g.value = 2, ie()) : ce.state === "error" && (clearInterval(H), he.value = !1, W.value = ce.error || "Workspace creation failed");
            } catch (ce) {
              Ne.value++, console.warn(`Polling failure ${Ne.value}/${io}:`, ce), Ne.value >= io && (clearInterval(H), he.value = !1, W.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (H) {
          he.value = !1, W.value = H instanceof Error ? H.message : "Failed to create workspace";
        }
      }
    }
    async function te() {
      Re.value = !0, D.value = null;
      try {
        const oe = {
          name: le.value.trim() || "my-new-env",
          python_version: Z.value,
          comfyui_version: V.value,
          torch_backend: A.value,
          switch_after: N.value,
          workspace_path: ee.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(oe)).status === "started") {
          Se.value = 0, ye.value = Date.now();
          const De = setInterval(async () => {
            if (ye.value && Date.now() - ye.value > ti) {
              clearInterval(De), Re.value = !1, D.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const be = await d();
              if (Se.value = 0, be.state === "idle" && Re.value) {
                clearInterval(De), Re.value = !1, D.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Ue.value = {
                progress: be.progress ?? 0,
                message: be.message,
                phase: be.phase
              }, be.state === "complete") {
                clearInterval(De), Re.value = !1;
                const we = be.environment_name || oe.name;
                N.value ? n("complete", we, ee.value) : (p.value = "landing", n("environment-created-no-switch", we));
              } else be.state === "error" && (clearInterval(De), Re.value = !1, D.value = be.error || "Environment creation failed");
            } catch (be) {
              Se.value++, console.warn(`Polling failure ${Se.value}/${io}:`, be), Se.value >= io && (clearInterval(De), Re.value = !1, D.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (oe) {
        Re.value = !1, D.value = oe instanceof Error ? oe.message : "Unknown error";
      }
    }
    async function ie() {
      pe.value = !0;
      try {
        Q.value = await v();
      } catch (oe) {
        console.error("Failed to load ComfyUI releases:", oe);
      } finally {
        pe.value = !1;
      }
    }
    function ge() {
      w.value && n("switch-environment", w.value, ee.value);
    }
    function ke() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : g.value === 2 && o.setupState === "no_workspace" && (g.value = 1);
    }
    function ne(oe, X) {
      C.value = !1, X ? n("complete", oe, ee.value) : (n("environment-created-no-switch", oe), p.value = "landing");
    }
    function ue() {
    }
    Qe(async () => {
      if (o.detectedModelsDir && (Y.value = o.detectedModelsDir), o.workspacePath && (ee.value = o.workspacePath), g.value === 2) {
        ie();
        const oe = setTimeout(() => {
          I.value = !1;
        }, 3e3);
        await Me(), clearTimeout(oe), I.value = !1;
      }
    });
    async function Me() {
      try {
        const oe = await d();
        if (console.log("[ComfyGit] Create progress check:", oe.state, oe), oe.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", oe.environment_name), p.value = "create", Re.value = !0, le.value = oe.environment_name || "my-new-env", Ue.value = {
            progress: oe.progress ?? 0,
            message: oe.message,
            phase: oe.phase
          }, Ce();
          return;
        }
      } catch (oe) {
        console.log("[ComfyGit] Create progress check failed:", oe);
      }
      try {
        const oe = await m();
        console.log("[ComfyGit] Import progress check:", oe.state, oe), oe.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", oe.environment_name), M.value = {
          message: oe.message || "Importing...",
          phase: oe.phase || "",
          progress: oe.progress ?? 0,
          environmentName: oe.environment_name || ""
        }, P.value = !0, p.value = "import", C.value = !0);
      } catch (oe) {
        console.log("[ComfyGit] Import progress check failed:", oe);
      }
    }
    async function Ce() {
      Se.value = 0, ye.value = Date.now();
      let oe = null;
      const X = async () => {
        if (ye.value && Date.now() - ye.value > ti)
          return oe && clearInterval(oe), Re.value = !1, D.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const be = await d();
          if (Se.value = 0, be.state === "idle" && Re.value)
            return oe && clearInterval(oe), Re.value = !1, D.value = "Environment creation was interrupted. Please try again.", !1;
          if (Ue.value = {
            progress: be.progress ?? 0,
            message: be.message,
            phase: be.phase
          }, be.state === "complete") {
            oe && clearInterval(oe), Re.value = !1;
            const we = be.environment_name || le.value;
            return n("complete", we, ee.value), !1;
          } else if (be.state === "error")
            return oe && clearInterval(oe), Re.value = !1, D.value = be.error || "Environment creation failed", !1;
          return !0;
        } catch (be) {
          return Se.value++, console.warn(`Polling failure ${Se.value}/${io}:`, be), Se.value >= io ? (oe && clearInterval(oe), Re.value = !1, D.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await X() && (oe = setInterval(async () => {
        !await X() && oe && clearInterval(oe);
      }, 2e3));
    }
    return (oe, X) => (a(), r(K, null, [
      x(ft, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: X[15] || (X[15] = (De) => oe.$emit("close"))
      }, {
        header: h(() => [
          X[20] || (X[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", fE, [
            x(Vr),
            X[19] || (X[19] = t("span", { class: "header-divider" }, null, -1)),
            Ee.value ? (a(), r("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: X[0] || (X[0] = (De) => _.value = !0)
            }, [...X[17] || (X[17] = [
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
              onClick: X[1] || (X[1] = (De) => oe.$emit("close")),
              title: "Close"
            }, [...X[18] || (X[18] = [
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
          var De;
          return [
            g.value === 1 ? (a(), r("div", mE, [
              X[24] || (X[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", vE, [
                X[21] || (X[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                Ke(t("input", {
                  "onUpdate:modelValue": X[2] || (X[2] = (be) => S.value = be),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, pE), [
                  [zt, S.value]
                ]),
                W.value ? (a(), r("p", gE, f(W.value), 1)) : y("", !0)
              ]),
              t("div", hE, [
                t("label", yE, [
                  Ke(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": X[3] || (X[3] = (be) => q.value = be)
                  }, null, 512), [
                    [en, q.value]
                  ]),
                  X[22] || (X[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              q.value ? (a(), r("div", wE, [
                X[23] || (X[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                Ke(t("input", {
                  "onUpdate:modelValue": X[4] || (X[4] = (be) => Y.value = be),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, _E), [
                  [zt, Y.value]
                ]),
                e.detectedModelsDir && !Y.value ? (a(), r("p", kE, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                T.value ? (a(), r("p", bE, " Did you mean: " + f(T.value), 1)) : y("", !0),
                E.value ? (a(), r("p", $E, f(E.value), 1)) : y("", !0),
                O.value !== null && !E.value ? (a(), r("p", CE, " Found " + f(O.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              he.value ? (a(), L(zn, {
                key: 1,
                progress: Fe.value.progress,
                message: Fe.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            g.value === 2 ? (a(), r("div", xE, [
              I.value ? (a(), r("div", SE, [...X[25] || (X[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), r(K, { key: 1 }, [
                !o.cliInstalled && !b.value ? (a(), r("div", IE, [
                  t("div", EE, [
                    X[27] || (X[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    X[28] || (X[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: X[5] || (X[5] = (be) => b.value = !0),
                      title: "Dismiss"
                    }, [...X[26] || (X[26] = [
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
                  X[29] || (X[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  X[30] || (X[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                p.value === "landing" ? (a(), r("div", TE, [
                  X[34] || (X[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: X[6] || (X[6] = (be) => p.value = "create")
                  }, [...X[31] || (X[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: X[7] || (X[7] = (be) => {
                      P.value = !1, p.value = "import";
                    })
                  }, [...X[32] || (X[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (De = o.existingEnvironments) != null && De.length ? (a(), r(K, { key: 0 }, [
                    X[33] || (X[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", PE, [
                      (a(!0), r(K, null, ve(o.existingEnvironments, (be) => (a(), r("label", {
                        key: be,
                        class: xe(["env-option", { selected: w.value === be }])
                      }, [
                        Ke(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: be,
                          "onUpdate:modelValue": X[8] || (X[8] = (we) => w.value = we)
                        }, null, 8, RE), [
                          [Zt, w.value]
                        ]),
                        t("span", ME, f(be), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (a(), r("div", DE, [
                  Re.value ? (a(), r("div", jE, [
                    t("p", HE, [
                      X[41] || (X[41] = $(" Creating environment ", -1)),
                      t("strong", null, f(le.value), 1),
                      X[42] || (X[42] = $("... ", -1))
                    ]),
                    x(zn, {
                      progress: Ue.value.progress,
                      message: Ue.value.message,
                      "current-phase": Ue.value.phase,
                      "show-steps": !0,
                      steps: qe
                    }, null, 8, ["progress", "message", "current-phase"]),
                    X[43] || (X[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), r(K, { key: 0 }, [
                    X[40] || (X[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", LE, [
                      X[35] || (X[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      Ke(t("input", {
                        "onUpdate:modelValue": X[9] || (X[9] = (be) => le.value = be),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [zt, le.value]
                      ])
                    ]),
                    t("div", OE, [
                      X[36] || (X[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      Ke(t("select", {
                        "onUpdate:modelValue": X[10] || (X[10] = (be) => Z.value = be),
                        class: "form-select"
                      }, [
                        (a(!0), r(K, null, ve(Ve(Mr), (be) => (a(), r("option", {
                          key: be,
                          value: be
                        }, f(be), 9, AE))), 128))
                      ], 512), [
                        [hs, Z.value]
                      ])
                    ]),
                    t("div", UE, [
                      X[37] || (X[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Ke(t("select", {
                        "onUpdate:modelValue": X[11] || (X[11] = (be) => V.value = be),
                        class: "form-select",
                        disabled: pe.value
                      }, [
                        (a(!0), r(K, null, ve(Q.value, (be) => (a(), r("option", {
                          key: be.tag_name,
                          value: be.tag_name
                        }, f(be.name), 9, zE))), 128))
                      ], 8, NE), [
                        [hs, V.value]
                      ])
                    ]),
                    t("div", FE, [
                      X[38] || (X[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Ke(t("select", {
                        "onUpdate:modelValue": X[12] || (X[12] = (be) => A.value = be),
                        class: "form-select"
                      }, [
                        (a(!0), r(K, null, ve(Ve(al), (be) => (a(), r("option", {
                          key: be,
                          value: be
                        }, f(be) + f(be === "auto" ? " (detect GPU)" : ""), 9, BE))), 128))
                      ], 512), [
                        [hs, A.value]
                      ])
                    ]),
                    t("div", VE, [
                      t("label", WE, [
                        Ke(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": X[13] || (X[13] = (be) => N.value = be)
                        }, null, 512), [
                          [en, N.value]
                        ]),
                        X[39] || (X[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    D.value ? (a(), r("div", GE, f(D.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (a(), r("div", KE, [
                  x(Ur, {
                    "workspace-path": ee.value,
                    "resume-import": P.value,
                    "initial-progress": M.value ?? void 0,
                    onImportComplete: ne,
                    onImportStarted: X[14] || (X[14] = (be) => C.value = !0),
                    onSourceCleared: ue
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          t("div", qE, [
            x(Wr),
            t("div", YE, [
              g.value === 1 ? (a(), L(Te, {
                key: 0,
                variant: "primary",
                disabled: !me.value || he.value,
                onClick: j
              }, {
                default: h(() => [
                  $(f(he.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : g.value === 2 ? (a(), r(K, { key: 1 }, [
                !Re.value && !C.value && (p.value !== "landing" || o.setupState === "no_workspace" && !ee.value) ? (a(), L(Te, {
                  key: 0,
                  variant: "secondary",
                  onClick: ke
                }, {
                  default: h(() => [...X[44] || (X[44] = [
                    $(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (a(), L(Te, {
                  key: 1,
                  variant: "primary",
                  disabled: !Pe.value || Re.value,
                  onClick: te
                }, {
                  default: h(() => [
                    $(f(Re.value ? "Creating..." : N.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                p.value === "landing" && w.value ? (a(), L(Te, {
                  key: 2,
                  variant: "primary",
                  onClick: ge
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
      _.value ? (a(), L(dE, {
        key: 0,
        "workspace-path": U.value,
        onClose: X[16] || (X[16] = (De) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), XE = /* @__PURE__ */ fe(QE, [["__scopeId", "data-v-9a9aadc0"]]), ZE = { class: "comfygit-panel" }, eT = { class: "panel-header" }, tT = { class: "header-left" }, sT = {
  key: 0,
  class: "header-info"
}, oT = { class: "header-actions" }, nT = { class: "env-switcher" }, aT = {
  key: 0,
  class: "header-info"
}, lT = { class: "branch-name" }, iT = { class: "panel-main" }, rT = { class: "sidebar" }, cT = { class: "sidebar-content" }, uT = { class: "sidebar-section" }, dT = { class: "sidebar-section" }, fT = { class: "sidebar-section" }, mT = {
  key: 0,
  class: "sidebar-badge"
}, vT = { class: "sidebar-footer" }, pT = { class: "content-area" }, gT = {
  key: 0,
  class: "error-message"
}, hT = {
  key: 1,
  class: "loading"
}, yT = { class: "dialog-content env-selector-dialog" }, wT = { class: "dialog-header" }, _T = { class: "dialog-body" }, kT = { class: "env-list" }, bT = { class: "env-info" }, $T = { class: "env-name-row" }, CT = { class: "env-indicator" }, xT = { class: "env-name" }, ST = {
  key: 0,
  class: "env-branch"
}, IT = {
  key: 1,
  class: "current-label"
}, ET = { class: "env-stats" }, TT = ["onClick"], PT = { class: "toast-container" }, RT = { class: "toast-message" }, MT = /* @__PURE__ */ de({
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
      getSetupStatus: P
    } = tt(), M = Mv(), { liveInstanceCount: I } = Nr({ autoStart: !0 }), S = k(null), q = k([]), Y = k([]), W = k([]), E = z(() => W.value.find((ae) => ae.is_current)), T = k(null), O = k(!1), le = k(1), Z = z(() => {
      var ae;
      return ((ae = T.value) == null ? void 0 : ae.state) || "managed";
    }), V = k(!1), A = k(null), N = k(null), D = k(!1), ee = k(null), Q = k(null), pe = k(null), he = k(!1), Re = k(!1), Fe = k(""), Ue = k(null), qe = k({ state: "idle", progress: 0, message: "" });
    let Ne = null, Ie = null;
    const Se = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ye = o.initialView ? Se[o.initialView] : null, me = k((ye == null ? void 0 : ye.view) ?? "status"), Pe = k((ye == null ? void 0 : ye.section) ?? "this-env");
    function Ee(ae, J) {
      me.value = ae, Pe.value = J;
    }
    function U(ae) {
      const Le = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[ae];
      Le && Ee(Le.view, Le.section);
    }
    function R() {
      Ee("branches", "this-env");
    }
    function F() {
      n("close"), setTimeout(() => {
        var J;
        const ae = document.querySelectorAll("button.comfyui-button");
        for (const Le of ae)
          if (((J = Le.textContent) == null ? void 0 : J.trim()) === "Manager") {
            Le.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const j = k(null), te = k(!1), ie = k(!1), ge = k([]);
    let ke = 0;
    function ne(ae, J = "info", Le = 3e3) {
      const Ge = ++ke;
      return ge.value.push({ id: Ge, message: ae, type: J }), Le > 0 && setTimeout(() => {
        ge.value = ge.value.filter((ot) => ot.id !== Ge);
      }, Le), Ge;
    }
    function ue(ae) {
      ge.value = ge.value.filter((J) => J.id !== ae);
    }
    function Me(ae, J) {
      ne(ae, J);
    }
    const Ce = z(() => {
      if (!S.value) return "neutral";
      const ae = S.value.workflows, J = ae.new.length > 0 || ae.modified.length > 0 || ae.deleted.length > 0 || S.value.has_changes;
      return S.value.comparison.is_synced ? J ? "warning" : "success" : "error";
    });
    z(() => S.value ? Ce.value === "success" ? "All synced" : Ce.value === "warning" ? "Uncommitted changes" : Ce.value === "error" ? "Not synced" : "" : "");
    async function oe() {
      V.value = !0, A.value = null;
      try {
        const [ae, J, Le, Ge] = await Promise.all([
          l(!0),
          i(),
          c(),
          g()
        ]);
        S.value = ae, q.value = J.commits, Y.value = Le.branches, W.value = Ge, n("statusUpdate", ae), ee.value && await ee.value.loadWorkflows(!0);
      } catch (ae) {
        A.value = ae instanceof Error ? ae.message : "Failed to load status", S.value = null, q.value = [], Y.value = [];
      } finally {
        V.value = !1;
      }
    }
    function X(ae) {
      N.value = ae;
    }
    async function De(ae) {
      var Le;
      N.value = null;
      const J = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      j.value = {
        title: J ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: J ? "You have uncommitted changes that will be lost." : `Checkout commit ${ae.short_hash || ((Le = ae.hash) == null ? void 0 : Le.slice(0, 7))}?`,
        details: J ? is() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: J ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: J,
        onConfirm: async () => {
          var mt;
          j.value = null, ce();
          const Ge = ne(`Checking out ${ae.short_hash || ((mt = ae.hash) == null ? void 0 : mt.slice(0, 7))}...`, "info", 0), ot = await u(ae.hash, J);
          ue(Ge), ot.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(ot.message || "Checkout failed", "error");
        }
      };
    }
    async function be(ae) {
      const J = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      j.value = {
        title: J ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: J ? "You have uncommitted changes." : `Switch to branch "${ae}"?`,
        details: J ? is() : void 0,
        warning: J ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: J ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          j.value = null, ce();
          const Le = ne(`Switching to ${ae}...`, "info", 0), Ge = await m(ae, J);
          ue(Le), Ge.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(Ge.message || "Branch switch failed", "error");
        }
      };
    }
    async function we(ae) {
      const J = ne(`Creating branch ${ae}...`, "info", 0), Le = await d(ae);
      ue(J), Le.status === "success" ? (ne(`Branch "${ae}" created`, "success"), await oe()) : ne(Le.message || "Failed to create branch", "error");
    }
    async function H(ae, J = !1) {
      const Le = async (Ge) => {
        var mt;
        const ot = ne(`Deleting branch ${ae}...`, "info", 0);
        try {
          const Dt = await v(ae, Ge);
          ue(ot), Dt.status === "success" ? (ne(`Branch "${ae}" deleted`, "success"), await oe()) : (mt = Dt.message) != null && mt.includes("not fully merged") ? j.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ae}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              j.value = null, await Le(!0);
            }
          } : ne(Dt.message || "Failed to delete branch", "error");
        } catch (Dt) {
          ue(ot);
          const rs = Dt instanceof Error ? Dt.message : "Failed to delete branch";
          rs.includes("not fully merged") ? j.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ae}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              j.value = null, await Le(!0);
            }
          } : ne(rs, "error");
        }
      };
      j.value = {
        title: "Delete Branch",
        message: `Delete branch "${ae}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          j.value = null, await Le(J);
        }
      };
    }
    async function G(ae) {
      N.value = null;
      const J = prompt("Enter branch name:");
      if (J) {
        const Le = ne(`Creating branch ${J}...`, "info", 0), Ge = await d(J, ae.hash);
        ue(Le), Ge.status === "success" ? (ne(`Branch "${J}" created from ${ae.short_hash}`, "success"), await oe()) : ne(Ge.message || "Failed to create branch", "error");
      }
    }
    function ce() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Be() {
      j.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ae;
          j.value = null, ce(), ne("Restarting environment...", "info");
          try {
            (ae = window.app) != null && ae.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Xe() {
      j.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ae;
          j.value = null, ne("Stopping environment...", "info");
          try {
            (ae = window.app) != null && ae.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function vt(ae, J) {
      D.value = !1, Fe.value = ae, Ue.value = J || null, he.value = !0;
    }
    async function at() {
      he.value = !1, Re.value = !0, ce(), qe.value = {
        progress: 10,
        state: ut(10),
        message: Mt(10)
      };
      try {
        await w(Fe.value, Ue.value || void 0), Ft(), Ws();
      } catch (ae) {
        Yt(), Re.value = !1, ne(`Failed to initiate switch: ${ae instanceof Error ? ae.message : "Unknown error"}`, "error"), qe.value = { state: "idle", progress: 0, message: "" }, Ue.value = null;
      }
    }
    function ut(ae) {
      return ae >= 100 ? "complete" : ae >= 80 ? "validating" : ae >= 60 ? "starting" : ae >= 30 ? "syncing" : "preparing";
    }
    function Mt(ae) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[ut(ae)] || "";
    }
    function Ft() {
      if (Ie) return;
      let ae = 10;
      const J = 60, Le = 5e3, Ge = 100, ot = (J - ae) / (Le / Ge);
      Ie = window.setInterval(() => {
        if (ae += ot, ae >= J && (ae = J, Yt()), qe.value.progress < J) {
          const mt = Math.floor(ae);
          qe.value = {
            progress: mt,
            state: ut(mt),
            message: Mt(mt)
          };
        }
      }, Ge);
    }
    function Yt() {
      Ie && (clearInterval(Ie), Ie = null);
    }
    function Ws() {
      Ne || (Ne = window.setInterval(async () => {
        try {
          let ae = await M.getStatus();
          if ((!ae || ae.state === "idle") && (ae = await p()), !ae)
            return;
          const J = ae.progress || 0;
          J >= 60 && Yt();
          const Le = Math.max(J, qe.value.progress), Ge = ae.state && ae.state !== "idle" && ae.state !== "unknown", ot = Ge ? ae.state : ut(Le), mt = Ge && ae.message || Mt(Le);
          qe.value = {
            state: ot,
            progress: Le,
            message: mt
          }, ae.state === "complete" ? (Yt(), Ms(), Re.value = !1, ne(`✓ Switched to ${Fe.value}`, "success"), await oe(), Fe.value = "") : ae.state === "rolled_back" ? (Yt(), Ms(), Re.value = !1, ne("Switch failed, restored previous environment", "warning"), Fe.value = "") : ae.state === "critical_failure" && (Yt(), Ms(), Re.value = !1, ne(`Critical error during switch: ${ae.message}`, "error"), Fe.value = "");
        } catch (ae) {
          console.error("Failed to poll switch progress:", ae);
        }
      }, 1e3));
    }
    function Ms() {
      Yt(), Ne && (clearInterval(Ne), Ne = null);
    }
    function no() {
      var ae;
      he.value = !1, Fe.value = "", (ae = T.value) != null && ae.state && T.value.state !== "managed" && (le.value = T.value.state === "no_workspace" ? 1 : 2, O.value = !0);
    }
    async function Co(ae) {
      te.value = !1, await oe(), ne(ae.message, ae.success ? "success" : "error");
    }
    async function xo() {
      ie.value = !1;
      const ae = ne("Syncing environment...", "info", 0);
      try {
        const J = await C("skip", !0);
        if (ue(ae), J.status === "success") {
          const Le = [];
          J.nodes_installed.length && Le.push(`${J.nodes_installed.length} installed`), J.nodes_removed.length && Le.push(`${J.nodes_removed.length} removed`);
          const Ge = Le.length ? `: ${Le.join(", ")}` : "";
          ne(`✓ Environment synced${Ge}`, "success"), await oe();
        } else {
          const Le = J.errors.length ? J.errors.join("; ") : J.message;
          ne(`Sync failed: ${Le}`, "error");
        }
      } catch (J) {
        ue(ae), ne(`Sync error: ${J instanceof Error ? J.message : "Unknown error"}`, "error");
      }
    }
    async function So(ae) {
      var J;
      try {
        const Le = await b(ae);
        Le.failed.length === 0 ? ne(`✓ Repaired ${Le.success} workflow${Le.success === 1 ? "" : "s"}`, "success") : ne(`Repaired ${Le.success}, failed: ${Le.failed.length}`, "warning"), await oe();
      } catch (Le) {
        ne(`Repair failed: ${Le instanceof Error ? Le.message : "Unknown error"}`, "error");
      } finally {
        (J = pe.value) == null || J.resetRepairingState();
      }
    }
    async function $e() {
      var J, Le;
      const ae = ne("Repairing environment...", "info", 0);
      try {
        const Ge = await C("skip", !0);
        if (ue(ae), Ge.status === "success") {
          const ot = [];
          Ge.nodes_installed.length && ot.push(`${Ge.nodes_installed.length} installed`), Ge.nodes_removed.length && ot.push(`${Ge.nodes_removed.length} removed`);
          const mt = ot.length ? `: ${ot.join(", ")}` : "";
          ne(`✓ Environment repaired${mt}`, "success"), (J = pe.value) == null || J.closeDetailModal(), await oe();
        } else {
          const ot = Ge.errors.length ? Ge.errors.join(", ") : Ge.message || "Unknown error";
          ne(`Repair failed: ${ot}`, "error");
        }
      } catch (Ge) {
        ue(ae), ne(`Repair error: ${Ge instanceof Error ? Ge.message : "Unknown error"}`, "error");
      } finally {
        (Le = pe.value) == null || Le.resetRepairingEnvironmentState();
      }
    }
    async function se(ae, J) {
      ne(`Environment '${ae}' created`, "success"), await oe(), Q.value && await Q.value.loadEnvironments(), J && await vt(ae);
    }
    async function je(ae) {
      var J;
      if (((J = E.value) == null ? void 0 : J.name) === ae) {
        ne("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      j.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ae}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          j.value = null;
          try {
            const Le = await _(ae);
            Le.status === "success" ? (ne(`Environment "${ae}" deleted`, "success"), await oe(), Q.value && await Q.value.loadEnvironments()) : ne(Le.message || "Failed to delete environment", "error");
          } catch (Le) {
            ne(`Error deleting environment: ${Le instanceof Error ? Le.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function gt(ae, J) {
      O.value = !1;
      try {
        T.value = await P();
      } catch {
      }
      await vt(ae, J);
    }
    function Jt() {
      O.value = !1, n("close");
    }
    async function ys(ae, J) {
      await vt(ae, J);
    }
    async function ws(ae) {
      await oe(), await vt(ae);
    }
    async function ls(ae) {
      T.value = await P(), console.log(`Environment '${ae}' created. Available for switching.`);
    }
    function Oe() {
      Ee("environments", "all-envs"), setTimeout(() => {
        var ae;
        (ae = Q.value) == null || ae.openCreateModal();
      }, 100);
    }
    function is() {
      if (!S.value) return [];
      const ae = [], J = S.value.workflows;
      return J.new.length && ae.push(`${J.new.length} new workflow(s)`), J.modified.length && ae.push(`${J.modified.length} modified workflow(s)`), J.deleted.length && ae.push(`${J.deleted.length} deleted workflow(s)`), ae;
    }
    return Qe(async () => {
      try {
        if (T.value = await P(), T.value.state === "no_workspace") {
          O.value = !0, le.value = 1;
          return;
        }
        if (T.value.state === "empty_workspace") {
          O.value = !0, le.value = 2;
          return;
        }
        if (T.value.state === "unmanaged") {
          O.value = !0, le.value = 2;
          return;
        }
      } catch (ae) {
        console.warn("Setup status check failed, proceeding normally:", ae);
      }
      await oe();
    }), (ae, J) => {
      var Le, Ge, ot, mt, Dt, rs, Gs, js, ln, rn, cn, un;
      return a(), r("div", ZE, [
        t("div", eT, [
          t("div", tT, [
            J[31] || (J[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            S.value ? (a(), r("div", sT)) : y("", !0)
          ]),
          t("div", oT, [
            x(Vr),
            J[34] || (J[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: xe(["icon-btn", { spinning: V.value }]),
              onClick: oe,
              title: "Refresh"
            }, [...J[32] || (J[32] = [
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
              onClick: J[0] || (J[0] = (B) => n("close")),
              title: "Close"
            }, [...J[33] || (J[33] = [
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
        t("div", nT, [
          t("div", { class: "env-switcher-header" }, [
            J[35] || (J[35] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            t("div", { class: "env-control-buttons" }, [
              t("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Be
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
            onClick: J[1] || (J[1] = (B) => Ee("environments", "all-envs"))
          }, [
            S.value ? (a(), r("div", aT, [
              t("span", null, f(((Le = E.value) == null ? void 0 : Le.name) || ((Ge = S.value) == null ? void 0 : Ge.environment) || "Loading..."), 1),
              t("span", lT, "(" + f(S.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            J[36] || (J[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", iT, [
          t("div", rT, [
            t("div", cT, [
              t("div", uT, [
                J[37] || (J[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: xe(["sidebar-item", { active: me.value === "status" && Pe.value === "this-env" }]),
                  onClick: J[2] || (J[2] = (B) => Ee("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: xe(["sidebar-item", { active: me.value === "workflows" }]),
                  onClick: J[3] || (J[3] = (B) => Ee("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: xe(["sidebar-item", { active: me.value === "models-env" }]),
                  onClick: J[4] || (J[4] = (B) => Ee("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: xe(["sidebar-item", { active: me.value === "branches" }]),
                  onClick: J[5] || (J[5] = (B) => Ee("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: xe(["sidebar-item", { active: me.value === "history" }]),
                  onClick: J[6] || (J[6] = (B) => Ee("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: xe(["sidebar-item", { active: me.value === "nodes" }]),
                  onClick: J[7] || (J[7] = (B) => Ee("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: xe(["sidebar-item", { active: me.value === "debug-env" }]),
                  onClick: J[8] || (J[8] = (B) => Ee("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              J[41] || (J[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", dT, [
                J[38] || (J[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: xe(["sidebar-item", { active: me.value === "environments" }]),
                  onClick: J[9] || (J[9] = (B) => Ee("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: xe(["sidebar-item", { active: me.value === "model-index" }]),
                  onClick: J[10] || (J[10] = (B) => Ee("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: xe(["sidebar-item", { active: me.value === "settings" }]),
                  onClick: J[11] || (J[11] = (B) => Ee("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: xe(["sidebar-item", { active: me.value === "debug-workspace" }]),
                  onClick: J[12] || (J[12] = (B) => Ee("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              J[42] || (J[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", fT, [
                J[40] || (J[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: xe(["sidebar-item", { active: me.value === "deploy" }]),
                  onClick: J[13] || (J[13] = (B) => Ee("deploy", "sharing"))
                }, [
                  J[39] || (J[39] = $(" DEPLOY ", -1)),
                  Ve(I) > 0 ? (a(), r("span", mT, f(Ve(I)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: xe(["sidebar-item", { active: me.value === "export" }]),
                  onClick: J[14] || (J[14] = (B) => Ee("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: xe(["sidebar-item", { active: me.value === "import" }]),
                  onClick: J[15] || (J[15] = (B) => Ee("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: xe(["sidebar-item", { active: me.value === "remotes" }]),
                  onClick: J[16] || (J[16] = (B) => Ee("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", vT, [
              x(Wr)
            ])
          ]),
          t("div", pT, [
            A.value ? (a(), r("div", gT, f(A.value), 1)) : !S.value && me.value === "status" ? (a(), r("div", hT, " Loading status... ")) : (a(), r(K, { key: 2 }, [
              me.value === "status" ? (a(), L(nv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: pe,
                status: S.value,
                "setup-state": Z.value,
                onSwitchBranch: R,
                onCommitChanges: J[17] || (J[17] = (B) => te.value = !0),
                onSyncEnvironment: J[18] || (J[18] = (B) => ie.value = !0),
                onViewWorkflows: J[19] || (J[19] = (B) => Ee("workflows", "this-env")),
                onViewHistory: J[20] || (J[20] = (B) => Ee("history", "this-env")),
                onViewDebug: J[21] || (J[21] = (B) => Ee("debug-env", "this-env")),
                onViewNodes: J[22] || (J[22] = (B) => Ee("nodes", "this-env")),
                onRepairMissingModels: So,
                onRepairEnvironment: $e,
                onStartSetup: J[23] || (J[23] = (B) => O.value = !0),
                onViewEnvironments: J[24] || (J[24] = (B) => Ee("environments", "all-envs")),
                onCreateEnvironment: Oe
              }, null, 8, ["status", "setup-state"])) : me.value === "workflows" ? (a(), L(L0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: ee,
                onRefresh: oe
              }, null, 512)) : me.value === "models-env" ? (a(), L(gw, {
                key: 2,
                onNavigate: U
              })) : me.value === "branches" ? (a(), L(wv, {
                key: 3,
                branches: Y.value,
                current: ((ot = S.value) == null ? void 0 : ot.branch) || null,
                onSwitch: be,
                onCreate: we,
                onDelete: H
              }, null, 8, ["branches", "current"])) : me.value === "history" ? (a(), L(Pv, {
                key: 4,
                commits: q.value,
                onSelect: X,
                onCheckout: De
              }, null, 8, ["commits"])) : me.value === "nodes" ? (a(), L(gk, {
                key: 5,
                "version-mismatches": ((Dt = (mt = S.value) == null ? void 0 : mt.comparison) == null ? void 0 : Dt.version_mismatches) || [],
                onOpenNodeManager: F,
                onRepairEnvironment: $e,
                onToast: Me
              }, null, 8, ["version-mismatches"])) : me.value === "debug-env" ? (a(), L(P$, { key: 6 })) : me.value === "environments" ? (a(), L(DC, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: Q,
                onSwitch: vt,
                onCreated: se,
                onDelete: je
              }, null, 512)) : me.value === "model-index" ? (a(), L(F_, {
                key: 8,
                onRefresh: oe
              })) : me.value === "settings" ? (a(), L(k$, { key: 9 })) : me.value === "debug-workspace" ? (a(), L(T$, { key: 10 })) : me.value === "deploy" ? (a(), L(u6, {
                key: 11,
                onToast: Me,
                onNavigate: U
              })) : me.value === "export" ? (a(), L(cx, { key: 12 })) : me.value === "import" ? (a(), L(s5, {
                key: 13,
                onImportCompleteSwitch: ws
              })) : me.value === "remotes" ? (a(), L(t$, {
                key: 14,
                onToast: Me
              })) : y("", !0)
            ], 64))
          ])
        ]),
        N.value ? (a(), L(E6, {
          key: 0,
          commit: N.value,
          onClose: J[25] || (J[25] = (B) => N.value = null),
          onCheckout: De,
          onCreateBranch: G
        }, null, 8, ["commit"])) : y("", !0),
        j.value ? (a(), L(nl, {
          key: 1,
          title: j.value.title,
          message: j.value.message,
          details: j.value.details,
          warning: j.value.warning,
          confirmLabel: j.value.confirmLabel,
          cancelLabel: j.value.cancelLabel,
          secondaryLabel: j.value.secondaryLabel,
          secondaryAction: j.value.secondaryAction,
          destructive: j.value.destructive,
          onConfirm: j.value.onConfirm,
          onCancel: J[26] || (J[26] = (B) => j.value = null),
          onSecondary: j.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        x(EI, {
          show: he.value,
          "from-environment": ((rs = E.value) == null ? void 0 : rs.name) || "unknown",
          "to-environment": Fe.value,
          onConfirm: at,
          onClose: no
        }, null, 8, ["show", "from-environment", "to-environment"]),
        te.value && S.value ? (a(), L(Br, {
          key: 2,
          status: S.value,
          "as-modal": !0,
          onClose: J[27] || (J[27] = (B) => te.value = !1),
          onCommitted: Co
        }, null, 8, ["status"])) : y("", !0),
        ie.value && S.value ? (a(), L(qI, {
          key: 3,
          show: ie.value,
          "mismatch-details": {
            missing_nodes: S.value.comparison.missing_nodes,
            extra_nodes: S.value.comparison.extra_nodes
          },
          onConfirm: xo,
          onClose: J[28] || (J[28] = (B) => ie.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        x(zI, {
          show: Re.value,
          state: qe.value.state,
          progress: qe.value.progress,
          message: qe.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        D.value ? (a(), r("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: J[30] || (J[30] = it((B) => D.value = !1, ["self"]))
        }, [
          t("div", yT, [
            t("div", wT, [
              J[44] || (J[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: J[29] || (J[29] = (B) => D.value = !1)
              }, [...J[43] || (J[43] = [
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
            t("div", _T, [
              J[45] || (J[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", kT, [
                (a(!0), r(K, null, ve(W.value, (B) => (a(), r("div", {
                  key: B.name,
                  class: xe(["env-item", { current: B.is_current }])
                }, [
                  t("div", bT, [
                    t("div", $T, [
                      t("span", CT, f(B.is_current ? "●" : "○"), 1),
                      t("span", xT, f(B.name), 1),
                      B.current_branch ? (a(), r("span", ST, "(" + f(B.current_branch) + ")", 1)) : y("", !0),
                      B.is_current ? (a(), r("span", IT, "CURRENT")) : y("", !0)
                    ]),
                    t("div", ET, f(B.workflow_count) + " workflows • " + f(B.node_count) + " nodes ", 1)
                  ]),
                  B.is_current ? y("", !0) : (a(), r("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (_e) => vt(B.name)
                  }, " SWITCH ", 8, TT))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        O.value ? (a(), L(XE, {
          key: 5,
          "default-path": ((Gs = T.value) == null ? void 0 : Gs.default_path) || "~/comfygit",
          "detected-models-dir": ((js = T.value) == null ? void 0 : js.detected_models_dir) || null,
          "initial-step": le.value,
          "existing-environments": ((ln = T.value) == null ? void 0 : ln.environments) || [],
          "cli-installed": ((rn = T.value) == null ? void 0 : rn.cli_installed) ?? !0,
          "setup-state": ((cn = T.value) == null ? void 0 : cn.state) || "no_workspace",
          "workspace-path": ((un = T.value) == null ? void 0 : un.workspace_path) || null,
          onComplete: gt,
          onClose: Jt,
          onSwitchEnvironment: ys,
          onEnvironmentCreatedNoSwitch: ls
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", PT, [
          x(vd, { name: "toast" }, {
            default: h(() => [
              (a(!0), r(K, null, ve(ge.value, (B) => (a(), r("div", {
                key: B.id,
                class: xe(["toast", B.type])
              }, [
                t("span", RT, f(B.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), DT = /* @__PURE__ */ fe(MT, [["__scopeId", "data-v-037b3ee3"]]), LT = { class: "item-header" }, OT = { class: "item-info" }, AT = { class: "filename" }, UT = { class: "metadata" }, NT = { class: "size" }, zT = {
  key: 0,
  class: "type"
}, FT = { class: "item-actions" }, BT = {
  key: 0,
  class: "progress-section"
}, VT = { class: "progress-bar" }, WT = { class: "progress-stats" }, GT = { class: "downloaded" }, jT = { class: "speed" }, HT = {
  key: 0,
  class: "eta"
}, KT = {
  key: 1,
  class: "status-msg paused"
}, qT = {
  key: 2,
  class: "status-msg queued"
}, YT = {
  key: 3,
  class: "status-msg completed"
}, JT = {
  key: 4,
  class: "status-msg failed"
}, QT = {
  key: 0,
  class: "retries"
}, XT = /* @__PURE__ */ de({
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
      class: xe(["download-item", `status-${e.item.status}`])
    }, [
      t("div", LT, [
        t("div", OT, [
          t("div", AT, f(e.item.filename), 1),
          t("div", UT, [
            t("span", NT, f(n(e.item.size)), 1),
            e.item.type ? (a(), r("span", zT, f(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", FT, [
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
      e.item.status === "downloading" ? (a(), r("div", BT, [
        t("div", VT, [
          t("div", {
            class: "progress-fill",
            style: qt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", WT, [
          t("span", GT, f(n(e.item.downloaded)) + " / " + f(n(e.item.size)), 1),
          t("span", jT, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), r("span", HT, f(i(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), r("div", KT, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), r("div", qT, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), r("div", YT, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), r("div", JT, [
        $(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), r("span", QT, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Mo = /* @__PURE__ */ fe(XT, [["__scopeId", "data-v-2110df65"]]), ZT = { class: "queue-title" }, e7 = { class: "count" }, t7 = { class: "queue-actions" }, s7 = { class: "action-label" }, o7 = {
  key: 0,
  class: "overall-progress"
}, n7 = { class: "progress-bar" }, a7 = {
  key: 0,
  class: "current-mini"
}, l7 = { class: "filename" }, i7 = { class: "speed" }, r7 = {
  key: 1,
  class: "queue-content"
}, c7 = {
  key: 0,
  class: "section"
}, u7 = {
  key: 1,
  class: "section"
}, d7 = { class: "section-header" }, f7 = { class: "section-label paused" }, m7 = { class: "items-list" }, v7 = {
  key: 2,
  class: "section"
}, p7 = { class: "section-header" }, g7 = { class: "section-label" }, h7 = { class: "items-list" }, y7 = {
  key: 3,
  class: "section"
}, w7 = { class: "section-header" }, _7 = { class: "section-label" }, k7 = { class: "items-list" }, b7 = {
  key: 4,
  class: "section"
}, $7 = { class: "section-header" }, C7 = { class: "section-label failed" }, x7 = { class: "items-list" }, S7 = /* @__PURE__ */ de({
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
    yt(
      () => ({
        active: d.value,
        failed: i.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (S, q) => {
        b && (clearTimeout(b), b = null);
        const Y = S.active === 0 && S.failed === 0 && S.paused === 0 && S.completed > 0, W = q && (q.active > 0 || q.paused > 0);
        Y && W && (b = setTimeout(() => {
          _(), b = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const P = z(() => {
      var Y;
      if (s.items.length === 0) return 0;
      const S = l.value.length, q = ((Y = o.value) == null ? void 0 : Y.progress) || 0;
      return Math.round((S + q / 100) / s.items.length * 100);
    });
    function M(S) {
      m(S);
    }
    function I(S) {
      return S === 0 ? "" : `${(S / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (S, q) => (a(), L(Ct, { to: "body" }, [
      Ve(u) ? (a(), r("div", {
        key: 0,
        class: xe(["model-download-queue", { minimized: !C.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: q[0] || (q[0] = (Y) => C.value = !C.value)
        }, [
          t("div", ZT, [
            q[4] || (q[4] = t("span", { class: "icon" }, "↓", -1)),
            q[5] || (q[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", e7, "(" + f(Ve(d)) + "/" + f(Ve(s).items.length) + ")", 1)
          ]),
          t("div", t7, [
            t("span", s7, f(C.value ? "minimize" : "expand"), 1)
          ])
        ]),
        C.value ? (a(), r("div", r7, [
          Ve(o) ? (a(), r("div", c7, [
            q[6] || (q[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            x(Mo, {
              item: Ve(o),
              onCancel: q[1] || (q[1] = (Y) => M(Ve(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          Ve(c).length > 0 ? (a(), r("div", u7, [
            t("div", d7, [
              t("span", f7, "Paused (" + f(Ve(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: q[2] || (q[2] = //@ts-ignore
                (...Y) => Ve(w) && Ve(w)(...Y))
              }, "Resume All")
            ]),
            t("div", m7, [
              (a(!0), r(K, null, ve(Ve(c), (Y) => (a(), L(Mo, {
                key: Y.id,
                item: Y,
                onResume: (W) => Ve(g)(Y.id),
                onRemove: (W) => Ve(p)(Y.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Ve(n).length > 0 ? (a(), r("div", v7, [
            t("div", p7, [
              t("span", g7, "Queued (" + f(Ve(n).length) + ")", 1)
            ]),
            t("div", h7, [
              (a(!0), r(K, null, ve(Ve(n), (Y) => (a(), L(Mo, {
                key: Y.id,
                item: Y,
                onCancel: (W) => M(Y.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          Ve(l).length > 0 ? (a(), r("div", y7, [
            t("div", w7, [
              t("span", _7, "Completed (" + f(Ve(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: q[3] || (q[3] = //@ts-ignore
                (...Y) => Ve(_) && Ve(_)(...Y))
              }, "Clear")
            ]),
            t("div", k7, [
              (a(!0), r(K, null, ve(Ve(l).slice(0, 3), (Y) => (a(), L(Mo, {
                key: Y.id,
                item: Y,
                onRemove: (W) => Ve(p)(Y.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Ve(i).length > 0 ? (a(), r("div", b7, [
            t("div", $7, [
              t("span", C7, "Failed (" + f(Ve(i).length) + ")", 1)
            ]),
            t("div", x7, [
              (a(!0), r(K, null, ve(Ve(i), (Y) => (a(), L(Mo, {
                key: Y.id,
                item: Y,
                onRetry: (W) => Ve(v)(Y.id),
                onRemove: (W) => Ve(p)(Y.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), r("div", o7, [
          t("div", n7, [
            t("div", {
              class: "progress-fill",
              style: qt({ width: `${P.value}%` })
            }, null, 4)
          ]),
          Ve(o) ? (a(), r("div", a7, [
            t("span", l7, f(Ve(o).filename), 1),
            t("span", i7, f(I(Ve(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), I7 = /* @__PURE__ */ fe(S7, [["__scopeId", "data-v-60751cfa"]]), E7 = { class: "detail-header" }, T7 = { class: "item-count" }, P7 = { class: "resource-list" }, R7 = { class: "item-info" }, M7 = { class: "item-name" }, D7 = {
  key: 0,
  class: "item-subtitle"
}, L7 = {
  key: 0,
  class: "installing-badge"
}, O7 = ["title"], A7 = {
  key: 2,
  class: "installed-badge"
}, U7 = {
  key: 3,
  class: "queued-badge"
}, N7 = {
  key: 1,
  class: "no-action"
}, z7 = /* @__PURE__ */ de({
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
    const o = e, n = s, l = z(() => o.itemType === "model" ? "Download" : "Install"), i = z(() => o.items.filter((p) => p.canAction)), c = z(() => i.value.length > 0 && i.value.every(
      (p) => {
        var _, C;
        return o.queuedItems.has(p.id) || ((_ = o.installedItems) == null ? void 0 : _.has(p.id)) || ((C = o.failedItems) == null ? void 0 : C.has(p.id));
      }
    )), u = z(() => c.value ? "All Queued" : o.itemType === "model" ? "Download All" : "Install All");
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
    return (p, _) => (a(), L(ft, {
      title: e.title,
      size: "md",
      onClose: _[2] || (_[2] = (C) => n("close"))
    }, {
      body: h(() => [
        t("div", E7, [
          t("span", T7, f(e.items.length) + " " + f(e.items.length === 1 ? "item" : "items"), 1),
          i.value.length > 1 ? (a(), L(Te, {
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
        t("div", P7, [
          (a(!0), r(K, null, ve(e.items, (C) => (a(), r("div", {
            key: C.id,
            class: "resource-item"
          }, [
            t("div", R7, [
              t("span", M7, f(C.name), 1),
              C.subtitle ? (a(), r("span", D7, f(C.subtitle), 1)) : y("", !0)
            ]),
            C.canAction ? (a(), r(K, { key: 0 }, [
              m(C) ? (a(), r("span", L7, "Installing...")) : g(C) ? (a(), r("span", {
                key: 1,
                class: "failed-badge",
                title: w(C)
              }, "Failed ⚠", 8, O7)) : v(C) ? (a(), r("span", A7, "Installed")) : d(C) ? (a(), r("span", U7, "Queued")) : (a(), L(Te, {
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
            ], 64)) : (a(), r("span", N7, f(C.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        x(Te, {
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
}), F7 = /* @__PURE__ */ fe(z7, [["__scopeId", "data-v-fac0fef0"]]), B7 = {
  key: 0,
  class: "loading-state"
}, V7 = {
  key: 1,
  class: "analysis-results"
}, W7 = {
  key: 0,
  class: "section"
}, G7 = { class: "section-header" }, j7 = { class: "section-title" }, H7 = { class: "item-list" }, K7 = { class: "package-info" }, q7 = { class: "package-name" }, Y7 = { class: "node-count" }, J7 = {
  key: 1,
  class: "installing-badge"
}, Q7 = {
  key: 2,
  class: "queued-badge"
}, X7 = ["title"], Z7 = {
  key: 4,
  class: "installed-badge"
}, eP = {
  key: 1,
  class: "section"
}, tP = { class: "section-header" }, sP = { class: "section-title" }, oP = { class: "item-list" }, nP = { class: "node-type" }, aP = {
  key: 0,
  class: "overflow-note"
}, lP = {
  key: 2,
  class: "section"
}, iP = { class: "section-header" }, rP = { class: "section-title" }, cP = { class: "item-list" }, uP = { class: "model-info" }, dP = { class: "model-name" }, fP = {
  key: 1,
  class: "queued-badge"
}, mP = {
  key: 1,
  class: "no-url"
}, vP = { class: "dont-show-again" }, pP = /* @__PURE__ */ de({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = k(!1), o = k(null), n = k(null), l = k(!1), i = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Map()), d = k(/* @__PURE__ */ new Set()), m = k(!1), v = k(null), g = k(0), w = k(null), p = k(/* @__PURE__ */ new Set()), _ = k(/* @__PURE__ */ new Map()), { addToQueue: C } = bo(), { queueNodeInstall: b } = tt(), P = z(() => M.value.length > 0 || S.value.length > 0 || q.value.length > 0), M = z(() => {
      var j, te;
      if (!((j = n.value) != null && j.nodes)) return [];
      const R = /* @__PURE__ */ new Map(), F = (n.value.nodes.resolved || []).filter((ie) => {
        var ge;
        return !ie.is_installed && ((ge = ie.package) == null ? void 0 : ge.package_id);
      });
      for (const ie of F) {
        const ge = ie.package.package_id;
        R.has(ge) || R.set(ge, {
          package_id: ge,
          title: ie.package.title || ge,
          node_count: 0,
          node_types: [],
          repository: ie.package.repository || null,
          latest_version: ie.package.latest_version || null
        });
        const ke = R.get(ge);
        ke.node_count++, ke.node_types.push(((te = ie.reference) == null ? void 0 : te.node_type) || ie.node_type);
      }
      return Array.from(R.values());
    }), I = z(() => M.value.reduce((R, F) => R + F.node_count, 0)), S = z(() => {
      var R;
      return (R = n.value) != null && R.nodes ? (n.value.nodes.unresolved || []).map((F) => {
        var j;
        return {
          node_type: ((j = F.reference) == null ? void 0 : j.node_type) || F.node_type
        };
      }) : [];
    }), q = z(() => {
      var j;
      if (!((j = n.value) != null && j.models)) return [];
      const R = (n.value.models.resolved || []).filter(
        (te) => te.match_type === "download_intent" || te.match_type === "property_download_intent" || te.match_type === "not_found"
      ).map((te) => {
        var ie, ge, ke, ne;
        return {
          filename: ((ge = (ie = te.reference) == null ? void 0 : ie.widget_value) == null ? void 0 : ge.split("/").pop()) || ((ke = te.reference) == null ? void 0 : ke.widget_value) || te.widget_value,
          widget_value: ((ne = te.reference) == null ? void 0 : ne.widget_value) || te.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: te.download_source || null,
          targetPath: te.target_path || null,
          canDownload: !!(te.download_source && te.target_path)
        };
      }), F = (n.value.models.unresolved || []).map((te) => {
        var ie, ge, ke, ne;
        return {
          filename: ((ge = (ie = te.reference) == null ? void 0 : ie.widget_value) == null ? void 0 : ge.split("/").pop()) || ((ke = te.reference) == null ? void 0 : ke.widget_value) || te.widget_value,
          widget_value: ((ne = te.reference) == null ? void 0 : ne.widget_value) || te.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      });
      return [...R, ...F];
    }), Y = z(() => q.value.filter((R) => R.canDownload)), W = z(() => M.value.length >= 5 ? M.value.slice(0, 4) : M.value), E = z(() => q.value.length >= 5 ? q.value.slice(0, 4) : q.value), T = z(() => M.value.length > 0 && M.value.every(
      (R) => i.value.has(R.package_id) || c.value.has(R.package_id) || u.value.has(R.package_id)
    )), O = z(() => Y.value.length > 0 && Y.value.every((R) => d.value.has(R.url))), le = z(() => M.value.length > 0 || Y.value.length > 0), Z = z(() => {
      const R = M.value.length === 0 || T.value, F = Y.value.length === 0 || O.value;
      return R && F;
    }), V = z(() => w.value === "models" ? `Missing Models (${q.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${I.value})` : ""), A = z(() => w.value === "models" ? q.value.map((R) => ({
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
    function N(R) {
      if (w.value === "models") {
        const F = q.value.find((j) => j.url === R.id || j.widget_value === R.id);
        F && Q(F);
      } else if (w.value === "packages") {
        const F = M.value.find((j) => j.package_id === R.id);
        F && ee(F);
      }
    }
    function D() {
      w.value === "models" ? he() : w.value === "packages" && pe();
    }
    async function ee(R) {
      const F = R.package_id;
      if (!(i.value.has(F) || c.value.has(F) || u.value.has(F))) {
        Ee(), v.value = F;
        try {
          const { ui_id: j } = await b({
            id: F,
            version: R.latest_version || "latest",
            selected_version: R.latest_version || "latest",
            repository: R.repository || void 0,
            mode: "remote",
            channel: "default"
          });
          _.value.set(j, F), c.value.add(F), console.log("[ComfyGit] Registered pending install:", { ui_id: j, packageId: F, pendingInstalls: Array.from(_.value.entries()) });
        } catch (j) {
          console.error("[ComfyGit] Failed to queue package install:", j), u.value.set(F, "Failed to queue install request");
        } finally {
          v.value = null;
        }
      }
    }
    function Q(R) {
      !R.url || !R.targetPath || d.value.has(R.url) || (C([{
        workflow: "unsaved",
        filename: R.filename,
        url: R.url,
        targetPath: R.targetPath
      }]), d.value.add(R.url));
    }
    async function pe() {
      for (const R of M.value)
        !i.value.has(R.package_id) && !c.value.has(R.package_id) && !u.value.has(R.package_id) && await ee(R);
    }
    function he() {
      const R = Y.value.filter(
        (F) => !d.value.has(F.url)
      );
      if (R.length !== 0) {
        C(R.map((F) => ({
          workflow: "unsaved",
          filename: F.filename,
          url: F.url,
          targetPath: F.targetPath
        })));
        for (const F of R)
          d.value.add(F.url);
      }
    }
    function Re() {
      pe(), he();
    }
    function Fe() {
      m.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Ue(R) {
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const F = R == null ? void 0 : R.id;
      if (F && p.value.has(F)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${F} this session`);
        return;
      }
      try {
        const j = await fetch("/v2/comfygit/workflow/is-saved", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: R })
        });
        if (j.ok) {
          const te = await j.json();
          if (te.is_saved) {
            console.log(`[ComfyGit] Workflow matches saved file: ${te.filename}, skipping popup`), F && p.value.add(F);
            return;
          }
        }
      } catch (j) {
        console.warn("[ComfyGit] Failed to check if workflow is saved:", j);
      }
      s.value = !0, o.value = null, i.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), m.value = !1, g.value = 0;
      try {
        const j = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: R, name: "unsaved" })
        });
        if (!j.ok) {
          const te = await j.json();
          throw new Error(te.error || "Failed to analyze workflow");
        }
        n.value = await j.json(), P.value && (l.value = !0, F && p.value.add(F));
      } catch (j) {
        console.error("[ComfyGit] Failed to analyze workflow:", j);
      } finally {
        s.value = !1;
      }
    }
    function qe() {
      l.value = !1, n.value = null;
    }
    function Ne(R) {
      const { workflow: F } = R.detail;
      F && Ue(F);
    }
    function Ie(R) {
      var te;
      const F = (te = R.detail) == null ? void 0 : te.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: F,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: R.detail
      });
      const j = _.value.get(F);
      j ? (v.value = j, console.log("[ComfyGit] Installing package:", j)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", F);
    }
    function Se(R) {
      var ie, ge, ke, ne, ue, Me, Ce;
      const F = (ie = R.detail) == null ? void 0 : ie.ui_id, j = (ke = (ge = R.detail) == null ? void 0 : ge.status) == null ? void 0 : ke.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: F,
        status: j,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: R.detail
      });
      const te = _.value.get(F);
      if (te) {
        if (_.value.delete(F), c.value.delete(te), v.value === te && (v.value = null), j === "success")
          i.value.add(te), g.value++, console.log("[ComfyGit] Package installed successfully:", te);
        else {
          const oe = ((Me = (ue = (ne = R.detail) == null ? void 0 : ne.status) == null ? void 0 : ue.messages) == null ? void 0 : Me[0]) || ((Ce = R.detail) == null ? void 0 : Ce.result) || "Unknown error";
          u.value.set(te, oe), console.error("[ComfyGit] Package install failed:", te, oe);
        }
        _.value.size === 0 && g.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", g.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: g.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", F);
    }
    let ye = null;
    function me() {
      var R;
      return ye || (ye = (R = window.app) == null ? void 0 : R.api), ye;
    }
    let Pe = !1;
    function Ee() {
      if (Pe) return !0;
      const R = me();
      return R ? (R.addEventListener("cm-task-started", Ie), R.addEventListener("cm-task-completed", Se), R.addEventListener("comfygit:workflow-changed", U), Pe = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function U(R) {
      const { change_type: F } = R.detail;
      (F === "created" || F === "modified") && l.value && (l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return Qe(() => {
      window.addEventListener("comfygit:workflow-loaded", Ne);
    }), oo(() => {
      if (window.removeEventListener("comfygit:workflow-loaded", Ne), Pe) {
        const R = me();
        R && (R.removeEventListener("cm-task-started", Ie), R.removeEventListener("cm-task-completed", Se), R.removeEventListener("comfygit:workflow-changed", U)), Pe = !1;
      }
    }), (R, F) => (a(), r(K, null, [
      l.value ? (a(), L(ft, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: qe
      }, {
        body: h(() => [
          s.value ? (a(), r("div", B7, [...F[4] || (F[4] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : n.value && P.value ? (a(), r("div", V7, [
            M.value.length > 0 ? (a(), r("div", W7, [
              t("div", G7, [
                t("span", j7, "Missing Custom Nodes (" + f(I.value) + ")", 1),
                M.value.length > 1 ? (a(), L(Te, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: T.value,
                  onClick: pe
                }, {
                  default: h(() => [
                    $(f(T.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", H7, [
                (a(!0), r(K, null, ve(W.value, (j) => (a(), r("div", {
                  key: j.package_id,
                  class: "package-item"
                }, [
                  t("div", K7, [
                    t("span", q7, f(j.title), 1),
                    t("span", Y7, "(" + f(j.node_count) + " " + f(j.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !i.value.has(j.package_id) && !c.value.has(j.package_id) && !u.value.has(j.package_id) ? (a(), L(Te, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: v.value === j.package_id,
                    onClick: (te) => ee(j)
                  }, {
                    default: h(() => [
                      $(f(v.value === j.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : v.value === j.package_id ? (a(), r("span", J7, "Installing...")) : c.value.has(j.package_id) ? (a(), r("span", Q7, "Queued")) : u.value.has(j.package_id) ? (a(), r("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(j.package_id)
                  }, "Failed ⚠", 8, X7)) : (a(), r("span", Z7, "Installed"))
                ]))), 128)),
                M.value.length >= 5 ? (a(), r("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: F[0] || (F[0] = (j) => w.value = "packages")
                }, [
                  t("span", null, "Show all " + f(M.value.length) + " packages...", 1),
                  F[5] || (F[5] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            S.value.length > 0 ? (a(), r("div", eP, [
              t("div", tP, [
                t("span", sP, "Unknown Nodes (" + f(S.value.length) + ")", 1)
              ]),
              t("div", oP, [
                (a(!0), r(K, null, ve(S.value.slice(0, 5), (j) => (a(), r("div", {
                  key: j.node_type,
                  class: "item"
                }, [
                  t("code", nP, f(j.node_type), 1),
                  F[6] || (F[6] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                S.value.length > 5 ? (a(), r("div", aP, " ...and " + f(S.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            q.value.length > 0 ? (a(), r("div", lP, [
              t("div", iP, [
                t("span", rP, "Missing Models (" + f(q.value.length) + ")", 1),
                Y.value.length > 1 ? (a(), L(Te, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: O.value,
                  onClick: he
                }, {
                  default: h(() => [
                    $(f(O.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", cP, [
                (a(!0), r(K, null, ve(E.value, (j) => (a(), r("div", {
                  key: j.widget_value,
                  class: "model-item"
                }, [
                  t("div", uP, [
                    t("span", dP, f(j.filename), 1)
                  ]),
                  j.canDownload ? (a(), r(K, { key: 0 }, [
                    d.value.has(j.url) ? (a(), r("span", fP, "Queued")) : (a(), L(Te, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (te) => Q(j)
                    }, {
                      default: h(() => [...F[7] || (F[7] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (a(), r("span", mP, "Manual download required"))
                ]))), 128)),
                q.value.length >= 5 ? (a(), r("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: F[1] || (F[1] = (j) => w.value = "models")
                }, [
                  t("span", null, "Show all " + f(q.value.length) + " models...", 1),
                  F[8] || (F[8] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            t("div", vP, [
              x(Da, {
                modelValue: m.value,
                "onUpdate:modelValue": [
                  F[2] || (F[2] = (j) => m.value = j),
                  Fe
                ]
              }, {
                default: h(() => [...F[9] || (F[9] = [
                  $(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : y("", !0)
        ]),
        footer: h(() => [
          x(Te, {
            variant: "secondary",
            onClick: qe
          }, {
            default: h(() => [...F[10] || (F[10] = [
              $("Dismiss", -1)
            ])]),
            _: 1
          }),
          le.value ? (a(), L(Te, {
            key: 0,
            variant: "primary",
            disabled: Z.value,
            onClick: Re
          }, {
            default: h(() => [
              $(f(Z.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      w.value ? (a(), L(F7, {
        key: 1,
        title: V.value,
        items: A.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : c.value,
        "installed-items": w.value === "packages" ? i.value : void 0,
        "failed-items": w.value === "packages" ? u.value : void 0,
        "installing-item": w.value === "packages" ? v.value : void 0,
        onClose: F[3] || (F[3] = (j) => w.value = null),
        onAction: N,
        onBulkAction: D
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), gP = /* @__PURE__ */ fe(pP, [["__scopeId", "data-v-dd1934b2"]]), hP = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', yP = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', wP = {
  comfy: hP,
  phosphor: yP
}, ll = "comfy", Gr = "comfygit-theme";
let Ys = null, jr = ll;
function _P() {
  try {
    const e = localStorage.getItem(Gr);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return ll;
}
function Hr(e = ll) {
  Ys && Ys.remove(), Ys = document.createElement("style"), Ys.id = "comfygit-theme-styles", Ys.setAttribute("data-theme", e), Ys.textContent = wP[e], document.head.appendChild(Ys), document.body.setAttribute("data-comfygit-theme", e), jr = e;
  try {
    localStorage.setItem(Gr, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function kP() {
  return jr;
}
function bP(e) {
  Hr(e);
}
function $P(e) {
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
const CP = _P();
Hr(CP);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), bP(e);
  },
  getTheme: () => {
    const e = kP();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Xt = null, At = null, jo = null, Do = null, si = null, Lo = null, oi = null;
const ho = k(null);
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
function xP() {
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
    render: () => nn(DT, {
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
function SP(e) {
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
        Oo(), IP(l.success, l.message), In().then(Ho);
      }
    })
  }), jo.mount(At), document.body.appendChild(At);
}
function Oo() {
  jo && (jo.unmount(), jo = null), At && (At.remove(), At = null);
}
function IP(e, s) {
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
function EP() {
  Do || (Do = document.createElement("div"), Do.className = "comfygit-download-queue-root", si = Zn({
    render: () => nn(I7)
  }), si.mount(Do), document.body.appendChild(Do), console.log("[ComfyGit] Model download queue mounted"));
}
function TP() {
  Lo || (Lo = document.createElement("div"), Lo.className = "comfygit-missing-resources-root", oi = Zn({
    render: () => nn(gP)
  }), oi.mount(Lo), document.body.appendChild(Lo), console.log("[ComfyGit] Missing resources popup mounted"));
}
let Wt = null;
function Ho() {
  if (!Wt) return;
  const e = Wt.querySelector(".commit-indicator");
  e && (e.style.display = xP() ? "block" : "none");
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = ya, Wt = document.createElement("button"), Wt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Wt.innerHTML = 'Commit <span class="commit-indicator"></span>', Wt.title = "Quick Commit", Wt.onclick = () => SP(Wt), e.appendChild(s), e.appendChild(Wt), (i = (l = Vt.menu) == null ? void 0 : l.settingsGroup) != null && i.element && (Vt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), EP(), TP(), window.addEventListener("comfygit:open-panel", ((c) => {
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
        const P = document.createElement("div");
        P.textContent = "Dependency conflict detected", P.style.cssText = "font-size: 12px; opacity: 0.8;", C.appendChild(P), p.appendChild(C);
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
        const C = document.createElement("div");
        C.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const b = document.createElement("div");
        b.textContent = "To apply changes, please restart ComfyUI", b.style.cssText = "font-weight: 500; color: #fff;", C.appendChild(b);
        const P = document.createElement("div");
        P.textContent = `${g} node package${g > 1 ? "s" : ""} ready to install`, P.style.cssText = "font-size: 12px; opacity: 0.7;", C.appendChild(P), p.appendChild(C);
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
          M.disabled = !0, M.textContent = "Restarting...", M.style.opacity = "0.7", b.textContent = "Restarting...", P.textContent = "Applying changes, please wait...";
          try {
            const S = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Vt.refreshComboInNodes && (await Vt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", b.textContent = "Nodes Installed", b.style.color = "#4caf50", P.textContent = `${g} package${g > 1 ? "s" : ""} installed successfully!`, p.style.borderColor = "#4caf50", M.style.display = "none", setTimeout(() => {
                  p.remove();
                }, 3e3);
              } catch (q) {
                console.error("[ComfyGit] Failed to refresh nodes:", q), _.textContent = "✅", b.textContent = "Restart Complete", b.style.color = "#4caf50", P.textContent = "Refresh the page to load new nodes.", p.style.borderColor = "#4caf50", M.style.display = "none";
              }
            };
            n.addEventListener("reconnected", S, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (S) {
            console.error("[ComfyGit] Failed to restart:", S), b.textContent = "Restart Failed", b.style.color = "#e53935", P.textContent = "Could not restart server. Try again.", p.style.borderColor = "#e53935", M.textContent = "Try Again", M.disabled = !1, M.style.opacity = "1";
          }
        }, p.appendChild(M);
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
        console.log(`[ComfyGit] Workflow ${w}: ${p}`), await In(), Ho();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      n.addEventListener("status", async (g) => {
        const w = g.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (g) => {
        const w = $P(g.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (g) => {
        const w = g, { count: p = 1 } = w.detail || {};
        m(p);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
