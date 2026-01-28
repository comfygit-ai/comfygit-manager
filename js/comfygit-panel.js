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
}, Yr = Object.prototype.hasOwnProperty, Ze = (e, s) => Yr.call(e, s), Fe = Array.isArray, mo = (e) => tn(e) === "[object Map]", ko = (e) => tn(e) === "[object Set]", cl = (e) => tn(e) === "[object Date]", We = (e) => typeof e == "function", ct = (e) => typeof e == "string", ts = (e) => typeof e == "symbol", et = (e) => e !== null && typeof e == "object", ai = (e) => (et(e) || We(e)) && We(e.then) && We(e.catch), li = Object.prototype.toString, tn = (e) => li.call(e), Jr = (e) => tn(e).slice(8, -1), ii = (e) => tn(e) === "[object Object]", Fa = (e) => ct(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Uo = /* @__PURE__ */ Ua(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Bn = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, Qr = /-\w/g, Kt = Bn(
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
function qt(e) {
  if (Fe(e)) {
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
function Se(e) {
  let s = "";
  if (ct(e))
    s = e;
  else if (Fe(e))
    for (let o = 0; o < e.length; o++) {
      const n = Se(e[o]);
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
  if (o = Fe(e), n = Fe(s), o || n)
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
const ui = (e) => !!(e && e.__v_isRef === !0), f = (e) => ct(e) ? e : e == null ? "" : Fe(e) || et(e) && (e.toString === li || !We(e.toString)) ? ui(e) ? f(e.value) : JSON.stringify(e, di, 2) : String(e), di = (e, s) => ui(s) ? di(e, s.value) : mo(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [n, l], i) => (o[sa(n, i) + " =>"] = l, o),
    {}
  )
} : ko(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => sa(o))
} : ts(s) ? sa(s) : et(s) && !Fe(s) && !ii(s) ? String(s) : s, sa = (e, s = "") => {
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
    const d = Fe(e), m = d && Fa(o);
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
const dc = {
  __proto__: null,
  [Symbol.iterator]() {
    return na(this, Symbol.iterator, (e) => Os(this, e));
  },
  concat(...e) {
    return ao(this).concat(
      ...e.map((s) => Fe(s) ? ao(s) : s)
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
    const c = Fe(s);
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
    const c = Fe(s) && Fa(o);
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
      Fe(s) ? "length" : Xs
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
function k(e) {
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
function Ve(e) {
  return $t(e) ? e.value : e;
}
const Rc = {
  get: (e, s, o) => s === "__v_raw" ? e : Ve(Reflect.get(e, s, o)),
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
  return We(e) ? n = e : (n = e.get, l = e.set), new Mc(n, l, o);
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
  let v, g, w, p, _ = !1, C = !1;
  if ($t(e) ? (g = () => e.value, _ = Gt(e)) : Zs(e) ? (g = () => m(e), _ = !0) : Fe(e) ? (C = !0, _ = e.some((S) => Zs(S) || Gt(S)), g = () => e.map((S) => {
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
  const $ = rc(), P = () => {
    v.stop(), $ && $.active && za($.effects, v);
  };
  if (i && s) {
    const S = s;
    s = (...q) => {
      S(...q), P();
    };
  }
  let R = C ? new Array(e.length).fill(mn) : mn;
  const I = (S) => {
    if (!(!(v.flags & 1) || !v.dirty && !S))
      if (s) {
        const q = v.run();
        if (l || _ || (C ? q.some((Y, V) => Ns(Y, R[V])) : Ns(q, R))) {
          w && w();
          const Y = Js;
          Js = v;
          try {
            const V = [
              q,
              // pass undefined as the old value when it's changed for the first time
              R === mn ? void 0 : C && R[0] === mn ? [] : R,
              p
            ];
            R = q, d ? d(s, 3, V) : (
              // @ts-expect-error
              s(...V)
            );
          } finally {
            Js = Y;
          }
        }
      } else
        v.run();
  };
  return u && u(I), v = new fi(g), v.scheduler = c ? () => c(I, !1) : I, p = (S) => Lc(S, !1, v), w = v.onStop = () => {
    const S = Tn.get(v);
    if (S) {
      if (d)
        d(S, 4);
      else
        for (const q of S) q();
      Tn.delete(v);
    }
  }, s ? n ? I(!0) : R = v.run() : c ? c(I.bind(null, !0), !0) : v.run(), P.pause = v.pause.bind(v), P.resume = v.resume.bind(v), P.stop = P, P;
}
function Cs(e, s = 1 / 0, o) {
  if (s <= 0 || !et(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, $t(e))
    Cs(e.value, s, o);
  else if (Fe(e))
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
  if (Fe(e)) {
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
  Fe(e) ? vo.push(...e) : As && e.id === -1 ? As.splice(ro + 1, 0, e) : e.flags & 1 || (vo.push(e), e.flags |= 1), Ei();
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
      o: { insert: p, querySelector: _, createText: C, createComment: $ }
    } = m, P = Fo(s.props);
    let { shapeFlag: R, children: I, dynamicChildren: S } = s;
    if (e == null) {
      const q = s.el = C(""), Y = s.anchor = C("");
      p(q, o, n), p(Y, o, n);
      const V = (T, O) => {
        R & 16 && v(
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
        T && (c !== "svg" && pl(T) ? c = "svg" : c !== "mathml" && gl(T) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(T), P || (V(T, O), bn(s, !1)));
      };
      P && (V(o, Y), bn(s, !0)), vl(s.props) ? (s.el.__isMounted = !1, St(() => {
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
      const q = s.anchor = e.anchor, Y = s.target = e.target, V = s.targetAnchor = e.targetAnchor, E = Fo(e.props), T = E ? o : Y, O = E ? q : V;
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
        V,
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
  function w(C, $, P, R) {
    $.anchor = g(
      c(C),
      $,
      u(C),
      o,
      n,
      l,
      i
    ), $.targetStart = P, $.targetAnchor = R;
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
    onBeforeAppear: $,
    onAppear: P,
    onAfterAppear: R,
    onAppearCancelled: I
  } = s, S = String(e.key), q = Fi(o, e), Y = (T, O) => {
    T && os(
      T,
      n,
      9,
      O
    );
  }, V = (T, O) => {
    const le = O[1];
    Y(T, O), Fe(T) ? T.every((Z) => Z.length <= 1) && le() : T.length <= 1 && le();
  }, E = {
    mode: c,
    persisted: u,
    beforeEnter(T) {
      let O = d;
      if (!o.isMounted)
        if (i)
          O = $ || d;
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
          O = P || m, le = R || v, Z = I || g;
        else
          return;
      let z = !1;
      const A = T[pn] = (U) => {
        z || (z = !0, U ? Y(Z, [T]) : Y(le, [T]), E.delayedLeave && E.delayedLeave(), T[pn] = void 0);
      };
      O ? V(O, [T, A]) : A();
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
      const z = T[bs] = (A) => {
        Z || (Z = !0, O(), A ? Y(C, [T]) : Y(_, [T]), T[bs] = void 0, q[le] === e && delete q[le]);
      };
      q[le] = e, p ? V(p, [T, z]) : z();
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
  if (Fe(e)) {
    e.forEach(
      (_, C) => Bo(
        _,
        s && (Fe(s) ? s[C] : s),
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
      const $ = () => {
        if (e.f) {
          const P = _ ? p(d) ? g[d] : v[d] : d.value;
          if (l)
            Fe(P) && za(P, i);
          else if (Fe(P))
            P.includes(i) || P.push(i);
          else if (_)
            v[d] = [i], p(d) && (g[d] = v[d]);
          else {
            const R = [i];
            d.value = R, e.k && (v[e.k] = R);
          }
        } else _ ? (v[d] = c, p(d) && (g[d] = c)) : C && (d.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const P = () => {
          $(), Mn.delete(e);
        };
        P.id = -1, Mn.set(e, P), St(P, o);
      } else
        yl(e), $();
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
}, jc = Ts("bm"), Qe = Ts("m"), Hc = Ts(
  "bu"
), Wi = Ts("u"), Gi = Ts(
  "bum"
), oo = Ts("um"), Kc = Ts(
  "sp"
), qc = Ts("rtg"), Yc = Ts("rtc");
function Jc(e, s = bt) {
  qn("ec", e, s);
}
const Qc = "components", ji = Symbol.for("v-ndc");
function Qa(e) {
  return ct(e) ? Xc(Qc, e, !1) || e : e || ji;
}
function Xc(e, s, o = !0, n = !1) {
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
function ge(e, s, o, n) {
  let l;
  const i = o, c = Fe(e);
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
    if (Fe(n))
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
    return s !== "default" && (o.name = s), a(), D(
      j,
      null,
      [x("slot", o, n && n())],
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
  return e.some((s) => Xo(s) ? !(s.type === kt || s.type === j && !Hi(s.children)) : !0) ? e : null;
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
  return Fe(e) ? e.reduce(
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
    deactivated: $,
    beforeDestroy: P,
    beforeUnmount: R,
    destroyed: I,
    unmounted: S,
    render: q,
    renderTracked: Y,
    renderTriggered: V,
    errorCaptured: E,
    serverPrefetch: T,
    // public API
    expose: O,
    inheritAttrs: le,
    // assets
    components: Z,
    directives: z,
    filters: A
  } = s;
  if (m && tu(m, n, null), c)
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
      const Q = i[ee], he = We(Q) ? Q.bind(o, o) : We(Q.get) ? Q.get.bind(o, o) : gs, _e = !We(Q) && We(Q.set) ? Q.set.bind(o) : gs, Re = N({
        get: he,
        set: _e
      });
      Object.defineProperty(n, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => Re.value,
        set: (Ne) => Re.value = Ne
      });
    }
  if (u)
    for (const ee in u)
      Ki(u[ee], n, o, ee);
  if (d) {
    const ee = We(d) ? d.call(o) : d;
    Reflect.ownKeys(ee).forEach((Q) => {
      iu(Q, ee[Q]);
    });
  }
  v && kl(v, e, "c");
  function M(ee, Q) {
    Fe(Q) ? Q.forEach((he) => ee(he.bind(o))) : Q && ee(Q.bind(o));
  }
  if (M(jc, g), M(Qe, w), M(Hc, p), M(Wi, _), M(Vc, C), M(Wc, $), M(Jc, E), M(Yc, Y), M(qc, V), M(Gi, R), M(oo, S), M(Kc, T), Fe(O))
    if (O.length) {
      const ee = e.exposed || (e.exposed = {});
      O.forEach((Q) => {
        Object.defineProperty(ee, Q, {
          get: () => o[Q],
          set: (he) => o[Q] = he,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  q && e.render === gs && (e.render = q), le != null && (e.inheritAttrs = le), Z && (e.components = Z), z && (e.directives = z), T && Bi(e);
}
function tu(e, s, o = gs) {
  Fe(e) && (e = Ia(e));
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
    Fe(e) ? e.map((n) => n.bind(s.proxy)) : e.bind(s.proxy),
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
    if (Fe(e))
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
      We(e) ? e.call(this, this) : e,
      We(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function ou(e, s) {
  return Ao(Ia(e), Ia(s));
}
function Ia(e) {
  if (Fe(e)) {
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
  return e ? Fe(e) && Fe(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : pt(
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
    We(n) || (n = pt({}, n)), l != null && !et(l) && (l = null);
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
      return o && We(s) ? s.call(n && n.proxy) : s;
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
function Xi(e, s, o = !1) {
  const n = o ? mu : s.emitsCache, l = n.get(e);
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
  return !i && !u ? (et(e) && n.set(e, null), null) : (Fe(i) ? i.forEach((d) => c[d] = null) : pt(c, i), et(e) && n.set(e, c), c);
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
  } = e, $ = Rn(e);
  let P, R;
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
      ), R = u;
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
      ), R = s.props ? u : vu(u);
    }
  } catch (S) {
    Wo.length = 0, Hn(S, e, 1), P = x(kt);
  }
  let I = P;
  if (R && C !== !1) {
    const S = Object.keys(R), { shapeFlag: q } = I;
    S.length && q & 7 && (i && S.some(Na) && (R = pu(
      R,
      i
    )), I = zs(I, R, !1, !0));
  }
  return o.dirs && (I = zs(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(o.dirs) : o.dirs), o.transition && to(I, o.transition), P = I, Rn($), P;
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
const _u = /* @__PURE__ */ new WeakMap();
function or(e, s, o = !1) {
  const n = o ? _u : s.propsCache, l = n.get(e);
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
  if (Fe(i))
    for (let v = 0; v < i.length; v++) {
      const g = Kt(i[v]);
      Sl(g) && (c[g] = st);
    }
  else if (i)
    for (const v in i) {
      const g = Kt(v);
      if (Sl(g)) {
        const w = i[v], p = c[g] = Fe(w) || We(w) ? { type: w } : pt({}, w), _ = p.type;
        let C = !1, $ = !0;
        if (Fe(_))
          for (let P = 0; P < _.length; ++P) {
            const R = _[P], I = We(R) && R.name;
            if (I === "Boolean") {
              C = !0;
              break;
            } else I === "String" && ($ = !1);
          }
        else
          C = We(_) && _.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = C, p[
          1
          /* shouldCastTrue */
        ] = $, (C || Ze(p, "default")) && u.push(g);
      }
    }
  const m = [c, u];
  return et(e) && n.set(e, m), m;
}
function Sl(e) {
  return e[0] !== "$" && !Uo(e);
}
const Xa = (e) => e === "_" || e === "_ctx" || e === "$stable", Za = (e) => Fe(e) ? e.map(ps) : [ps(e)], ku = (e, s, o) => {
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
  } = e, C = (L, B, se, ne = null, fe = null, me = null, Ce = void 0, xe = null, re = !!B.dynamicChildren) => {
    if (L === B)
      return;
    L && !Qs(L, B) && (ne = Ee(L), Ne(L, fe, me, !0), L = null), B.patchFlag === -2 && (re = !1, B.dynamicChildren = null);
    const { type: ve, ref: Le, shapeFlag: Ie } = B;
    switch (ve) {
      case Jn:
        $(L, B, se, ne);
        break;
      case kt:
        P(L, B, se, ne);
        break;
      case ca:
        L == null && R(B, se, ne, Ce);
        break;
      case j:
        Z(
          L,
          B,
          se,
          ne,
          fe,
          me,
          Ce,
          xe,
          re
        );
        break;
      default:
        Ie & 1 ? q(
          L,
          B,
          se,
          ne,
          fe,
          me,
          Ce,
          xe,
          re
        ) : Ie & 6 ? z(
          L,
          B,
          se,
          ne,
          fe,
          me,
          Ce,
          xe,
          re
        ) : (Ie & 64 || Ie & 128) && ve.process(
          L,
          B,
          se,
          ne,
          fe,
          me,
          Ce,
          xe,
          re,
          ie
        );
    }
    Le != null && fe ? Bo(Le, L && L.ref, me, B || L, !B) : Le == null && L && L.ref != null && Bo(L.ref, null, me, L, !0);
  }, $ = (L, B, se, ne) => {
    if (L == null)
      n(
        B.el = u(B.children),
        se,
        ne
      );
    else {
      const fe = B.el = L.el;
      B.children !== L.children && m(fe, B.children);
    }
  }, P = (L, B, se, ne) => {
    L == null ? n(
      B.el = d(B.children || ""),
      se,
      ne
    ) : B.el = L.el;
  }, R = (L, B, se, ne) => {
    [L.el, L.anchor] = _(
      L.children,
      B,
      se,
      ne,
      L.el,
      L.anchor
    );
  }, I = ({ el: L, anchor: B }, se, ne) => {
    let fe;
    for (; L && L !== B; )
      fe = w(L), n(L, se, ne), L = fe;
    n(B, se, ne);
  }, S = ({ el: L, anchor: B }) => {
    let se;
    for (; L && L !== B; )
      se = w(L), l(L), L = se;
    l(B);
  }, q = (L, B, se, ne, fe, me, Ce, xe, re) => {
    if (B.type === "svg" ? Ce = "svg" : B.type === "math" && (Ce = "mathml"), L == null)
      Y(
        B,
        se,
        ne,
        fe,
        me,
        Ce,
        xe,
        re
      );
    else {
      const ve = L.el && L.el._isVueCE ? L.el : null;
      try {
        ve && ve._beginPatch(), T(
          L,
          B,
          fe,
          me,
          Ce,
          xe,
          re
        );
      } finally {
        ve && ve._endPatch();
      }
    }
  }, Y = (L, B, se, ne, fe, me, Ce, xe) => {
    let re, ve;
    const { props: Le, shapeFlag: Ie, transition: oe, dirs: X } = L;
    if (re = L.el = c(
      L.type,
      me,
      Le && Le.is,
      Le
    ), Ie & 8 ? v(re, L.children) : Ie & 16 && E(
      L.children,
      re,
      null,
      ne,
      fe,
      ra(L, me),
      Ce,
      xe
    ), X && Hs(L, null, ne, "created"), V(re, L, L.scopeId, Ce, ne), Le) {
      for (const ke in Le)
        ke !== "value" && !Uo(ke) && i(re, ke, null, Le[ke], me, ne);
      "value" in Le && i(re, "value", null, Le.value, me), (ve = Le.onVnodeBeforeMount) && us(ve, ne, L);
    }
    X && Hs(L, null, ne, "beforeMount");
    const Me = Su(fe, oe);
    Me && oe.beforeEnter(re), n(re, B, se), ((ve = Le && Le.onVnodeMounted) || Me || X) && St(() => {
      ve && us(ve, ne, L), Me && oe.enter(re), X && Hs(L, null, ne, "mounted");
    }, fe);
  }, V = (L, B, se, ne, fe) => {
    if (se && p(L, se), ne)
      for (let me = 0; me < ne.length; me++)
        p(L, ne[me]);
    if (fe) {
      let me = fe.subTree;
      if (B === me || rr(me.type) && (me.ssContent === B || me.ssFallback === B)) {
        const Ce = fe.vnode;
        V(
          L,
          Ce,
          Ce.scopeId,
          Ce.slotScopeIds,
          fe.parent
        );
      }
    }
  }, E = (L, B, se, ne, fe, me, Ce, xe, re = 0) => {
    for (let ve = re; ve < L.length; ve++) {
      const Le = L[ve] = xe ? Us(L[ve]) : ps(L[ve]);
      C(
        null,
        Le,
        B,
        se,
        ne,
        fe,
        me,
        Ce,
        xe
      );
    }
  }, T = (L, B, se, ne, fe, me, Ce) => {
    const xe = B.el = L.el;
    let { patchFlag: re, dynamicChildren: ve, dirs: Le } = B;
    re |= L.patchFlag & 16;
    const Ie = L.props || st, oe = B.props || st;
    let X;
    if (se && Ks(se, !1), (X = oe.onVnodeBeforeUpdate) && us(X, se, B, L), Le && Hs(B, L, se, "beforeUpdate"), se && Ks(se, !0), (Ie.innerHTML && oe.innerHTML == null || Ie.textContent && oe.textContent == null) && v(xe, ""), ve ? O(
      L.dynamicChildren,
      ve,
      xe,
      se,
      ne,
      ra(B, fe),
      me
    ) : Ce || Q(
      L,
      B,
      xe,
      null,
      se,
      ne,
      ra(B, fe),
      me,
      !1
    ), re > 0) {
      if (re & 16)
        le(xe, Ie, oe, se, fe);
      else if (re & 2 && Ie.class !== oe.class && i(xe, "class", null, oe.class, fe), re & 4 && i(xe, "style", Ie.style, oe.style, fe), re & 8) {
        const Me = B.dynamicProps;
        for (let ke = 0; ke < Me.length; ke++) {
          const we = Me[ke], G = Ie[we], W = oe[we];
          (W !== G || we === "value") && i(xe, we, G, W, fe, se);
        }
      }
      re & 1 && L.children !== B.children && v(xe, B.children);
    } else !Ce && ve == null && le(xe, Ie, oe, se, fe);
    ((X = oe.onVnodeUpdated) || Le) && St(() => {
      X && us(X, se, B, L), Le && Hs(B, L, se, "updated");
    }, ne);
  }, O = (L, B, se, ne, fe, me, Ce) => {
    for (let xe = 0; xe < B.length; xe++) {
      const re = L[xe], ve = B[xe], Le = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        re.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (re.type === j || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Qs(re, ve) || // - In the case of a component, it could contain anything.
        re.shapeFlag & 198) ? g(re.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          se
        )
      );
      C(
        re,
        ve,
        Le,
        null,
        ne,
        fe,
        me,
        Ce,
        !0
      );
    }
  }, le = (L, B, se, ne, fe) => {
    if (B !== se) {
      if (B !== st)
        for (const me in B)
          !Uo(me) && !(me in se) && i(
            L,
            me,
            B[me],
            null,
            fe,
            ne
          );
      for (const me in se) {
        if (Uo(me)) continue;
        const Ce = se[me], xe = B[me];
        Ce !== xe && me !== "value" && i(L, me, xe, Ce, fe, ne);
      }
      "value" in se && i(L, "value", B.value, se.value, fe);
    }
  }, Z = (L, B, se, ne, fe, me, Ce, xe, re) => {
    const ve = B.el = L ? L.el : u(""), Le = B.anchor = L ? L.anchor : u("");
    let { patchFlag: Ie, dynamicChildren: oe, slotScopeIds: X } = B;
    X && (xe = xe ? xe.concat(X) : X), L == null ? (n(ve, se, ne), n(Le, se, ne), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      B.children || [],
      se,
      Le,
      fe,
      me,
      Ce,
      xe,
      re
    )) : Ie > 0 && Ie & 64 && oe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    L.dynamicChildren ? (O(
      L.dynamicChildren,
      oe,
      se,
      fe,
      me,
      Ce,
      xe
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (B.key != null || fe && B === fe.subTree) && el(
      L,
      B,
      !0
      /* shallow */
    )) : Q(
      L,
      B,
      se,
      Le,
      fe,
      me,
      Ce,
      xe,
      re
    );
  }, z = (L, B, se, ne, fe, me, Ce, xe, re) => {
    B.slotScopeIds = xe, L == null ? B.shapeFlag & 512 ? fe.ctx.activate(
      B,
      se,
      ne,
      Ce,
      re
    ) : A(
      B,
      se,
      ne,
      fe,
      me,
      Ce,
      re
    ) : U(L, B, re);
  }, A = (L, B, se, ne, fe, me, Ce) => {
    const xe = L.component = Ou(
      L,
      ne,
      fe
    );
    if (Kn(L) && (xe.ctx.renderer = ie), Au(xe, !1, Ce), xe.asyncDep) {
      if (fe && fe.registerDep(xe, M, Ce), !L.el) {
        const re = xe.subTree = x(kt);
        P(null, re, B, se), L.placeholder = re.el;
      }
    } else
      M(
        xe,
        L,
        B,
        se,
        fe,
        me,
        Ce
      );
  }, U = (L, B, se) => {
    const ne = B.component = L.component;
    if (gu(L, B, se))
      if (ne.asyncDep && !ne.asyncResolved) {
        ee(ne, B, se);
        return;
      } else
        ne.next = B, ne.update();
    else
      B.el = L.el, ne.vnode = B;
  }, M = (L, B, se, ne, fe, me, Ce) => {
    const xe = () => {
      if (L.isMounted) {
        let { next: Ie, bu: oe, u: X, parent: Me, vnode: ke } = L;
        {
          const Be = ir(L);
          if (Be) {
            Ie && (Ie.el = ke.el, ee(L, Ie, Ce)), Be.asyncDep.then(() => {
              L.isUnmounted || xe();
            });
            return;
          }
        }
        let we = Ie, G;
        Ks(L, !1), Ie ? (Ie.el = ke.el, ee(L, Ie, Ce)) : Ie = ke, oe && kn(oe), (G = Ie.props && Ie.props.onVnodeBeforeUpdate) && us(G, Me, Ie, ke), Ks(L, !0);
        const W = Cl(L), ue = L.subTree;
        L.subTree = W, C(
          ue,
          W,
          // parent may have changed if it's in a teleport
          g(ue.el),
          // anchor may have changed if it's in a fragment
          Ee(ue),
          L,
          fe,
          me
        ), Ie.el = W.el, we === null && hu(L, W.el), X && St(X, fe), (G = Ie.props && Ie.props.onVnodeUpdated) && St(
          () => us(G, Me, Ie, ke),
          fe
        );
      } else {
        let Ie;
        const { el: oe, props: X } = B, { bm: Me, m: ke, parent: we, root: G, type: W } = L, ue = po(B);
        Ks(L, !1), Me && kn(Me), !ue && (Ie = X && X.onVnodeBeforeMount) && us(Ie, we, B), Ks(L, !0);
        {
          G.ce && // @ts-expect-error _def is private
          G.ce._def.shadowRoot !== !1 && G.ce._injectChildStyle(W);
          const Be = L.subTree = Cl(L);
          C(
            null,
            Be,
            se,
            ne,
            L,
            fe,
            me
          ), B.el = Be.el;
        }
        if (ke && St(ke, fe), !ue && (Ie = X && X.onVnodeMounted)) {
          const Be = B;
          St(
            () => us(Ie, we, Be),
            fe
          );
        }
        (B.shapeFlag & 256 || we && po(we.vnode) && we.vnode.shapeFlag & 256) && L.a && St(L.a, fe), L.isMounted = !0, B = se = ne = null;
      }
    };
    L.scope.on();
    const re = L.effect = new fi(xe);
    L.scope.off();
    const ve = L.update = re.run.bind(re), Le = L.job = re.runIfDirty.bind(re);
    Le.i = L, Le.id = L.uid, re.scheduler = () => Ya(Le), Ks(L, !0), ve();
  }, ee = (L, B, se) => {
    B.component = L;
    const ne = L.vnode.props;
    L.vnode = B, L.next = null, wu(L, B.props, ne, se), $u(L, B.children, se), Ss(), ml(L), Is();
  }, Q = (L, B, se, ne, fe, me, Ce, xe, re = !1) => {
    const ve = L && L.children, Le = L ? L.shapeFlag : 0, Ie = B.children, { patchFlag: oe, shapeFlag: X } = B;
    if (oe > 0) {
      if (oe & 128) {
        _e(
          ve,
          Ie,
          se,
          ne,
          fe,
          me,
          Ce,
          xe,
          re
        );
        return;
      } else if (oe & 256) {
        he(
          ve,
          Ie,
          se,
          ne,
          fe,
          me,
          Ce,
          xe,
          re
        );
        return;
      }
    }
    X & 8 ? (Le & 16 && Te(ve, fe, me), Ie !== ve && v(se, Ie)) : Le & 16 ? X & 16 ? _e(
      ve,
      Ie,
      se,
      ne,
      fe,
      me,
      Ce,
      xe,
      re
    ) : Te(ve, fe, me, !0) : (Le & 8 && v(se, ""), X & 16 && E(
      Ie,
      se,
      ne,
      fe,
      me,
      Ce,
      xe,
      re
    ));
  }, he = (L, B, se, ne, fe, me, Ce, xe, re) => {
    L = L || fo, B = B || fo;
    const ve = L.length, Le = B.length, Ie = Math.min(ve, Le);
    let oe;
    for (oe = 0; oe < Ie; oe++) {
      const X = B[oe] = re ? Us(B[oe]) : ps(B[oe]);
      C(
        L[oe],
        X,
        se,
        null,
        fe,
        me,
        Ce,
        xe,
        re
      );
    }
    ve > Le ? Te(
      L,
      fe,
      me,
      !0,
      !1,
      Ie
    ) : E(
      B,
      se,
      ne,
      fe,
      me,
      Ce,
      xe,
      re,
      Ie
    );
  }, _e = (L, B, se, ne, fe, me, Ce, xe, re) => {
    let ve = 0;
    const Le = B.length;
    let Ie = L.length - 1, oe = Le - 1;
    for (; ve <= Ie && ve <= oe; ) {
      const X = L[ve], Me = B[ve] = re ? Us(B[ve]) : ps(B[ve]);
      if (Qs(X, Me))
        C(
          X,
          Me,
          se,
          null,
          fe,
          me,
          Ce,
          xe,
          re
        );
      else
        break;
      ve++;
    }
    for (; ve <= Ie && ve <= oe; ) {
      const X = L[Ie], Me = B[oe] = re ? Us(B[oe]) : ps(B[oe]);
      if (Qs(X, Me))
        C(
          X,
          Me,
          se,
          null,
          fe,
          me,
          Ce,
          xe,
          re
        );
      else
        break;
      Ie--, oe--;
    }
    if (ve > Ie) {
      if (ve <= oe) {
        const X = oe + 1, Me = X < Le ? B[X].el : ne;
        for (; ve <= oe; )
          C(
            null,
            B[ve] = re ? Us(B[ve]) : ps(B[ve]),
            se,
            Me,
            fe,
            me,
            Ce,
            xe,
            re
          ), ve++;
      }
    } else if (ve > oe)
      for (; ve <= Ie; )
        Ne(L[ve], fe, me, !0), ve++;
    else {
      const X = ve, Me = ve, ke = /* @__PURE__ */ new Map();
      for (ve = Me; ve <= oe; ve++) {
        const at = B[ve] = re ? Us(B[ve]) : ps(B[ve]);
        at.key != null && ke.set(at.key, ve);
      }
      let we, G = 0;
      const W = oe - Me + 1;
      let ue = !1, Be = 0;
      const Xe = new Array(W);
      for (ve = 0; ve < W; ve++) Xe[ve] = 0;
      for (ve = X; ve <= Ie; ve++) {
        const at = L[ve];
        if (G >= W) {
          Ne(at, fe, me, !0);
          continue;
        }
        let ut;
        if (at.key != null)
          ut = ke.get(at.key);
        else
          for (we = Me; we <= oe; we++)
            if (Xe[we - Me] === 0 && Qs(at, B[we])) {
              ut = we;
              break;
            }
        ut === void 0 ? Ne(at, fe, me, !0) : (Xe[ut - Me] = ve + 1, ut >= Be ? Be = ut : ue = !0, C(
          at,
          B[ut],
          se,
          null,
          fe,
          me,
          Ce,
          xe,
          re
        ), G++);
      }
      const vt = ue ? Iu(Xe) : fo;
      for (we = vt.length - 1, ve = W - 1; ve >= 0; ve--) {
        const at = Me + ve, ut = B[at], Mt = B[at + 1], Ft = at + 1 < Le ? (
          // #13559, fallback to el placeholder for unresolved async component
          Mt.el || Mt.placeholder
        ) : ne;
        Xe[ve] === 0 ? C(
          null,
          ut,
          se,
          Ft,
          fe,
          me,
          Ce,
          xe,
          re
        ) : ue && (we < 0 || ve !== vt[we] ? Re(ut, se, Ft, 2) : we--);
      }
    }
  }, Re = (L, B, se, ne, fe = null) => {
    const { el: me, type: Ce, transition: xe, children: re, shapeFlag: ve } = L;
    if (ve & 6) {
      Re(L.component.subTree, B, se, ne);
      return;
    }
    if (ve & 128) {
      L.suspense.move(B, se, ne);
      return;
    }
    if (ve & 64) {
      Ce.move(L, B, se, ie);
      return;
    }
    if (Ce === j) {
      n(me, B, se);
      for (let Ie = 0; Ie < re.length; Ie++)
        Re(re[Ie], B, se, ne);
      n(L.anchor, B, se);
      return;
    }
    if (Ce === ca) {
      I(L, B, se);
      return;
    }
    if (ne !== 2 && ve & 1 && xe)
      if (ne === 0)
        xe.beforeEnter(me), n(me, B, se), St(() => xe.enter(me), fe);
      else {
        const { leave: Ie, delayLeave: oe, afterLeave: X } = xe, Me = () => {
          L.ctx.isUnmounted ? l(me) : n(me, B, se);
        }, ke = () => {
          me._isLeaving && me[bs](
            !0
            /* cancelled */
          ), Ie(me, () => {
            Me(), X && X();
          });
        };
        oe ? oe(me, Me, ke) : ke();
      }
    else
      n(me, B, se);
  }, Ne = (L, B, se, ne = !1, fe = !1) => {
    const {
      type: me,
      props: Ce,
      ref: xe,
      children: re,
      dynamicChildren: ve,
      shapeFlag: Le,
      patchFlag: Ie,
      dirs: oe,
      cacheIndex: X
    } = L;
    if (Ie === -2 && (fe = !1), xe != null && (Ss(), Bo(xe, null, se, L, !0), Is()), X != null && (B.renderCache[X] = void 0), Le & 256) {
      B.ctx.deactivate(L);
      return;
    }
    const Me = Le & 1 && oe, ke = !po(L);
    let we;
    if (ke && (we = Ce && Ce.onVnodeBeforeUnmount) && us(we, B, L), Le & 6)
      ze(L.component, se, ne);
    else {
      if (Le & 128) {
        L.suspense.unmount(se, ne);
        return;
      }
      Me && Hs(L, null, B, "beforeUnmount"), Le & 64 ? L.type.remove(
        L,
        B,
        se,
        ie,
        ne
      ) : ve && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ve.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (me !== j || Ie > 0 && Ie & 64) ? Te(
        ve,
        B,
        se,
        !1,
        !0
      ) : (me === j && Ie & 384 || !fe && Le & 16) && Te(re, B, se), ne && Ue(L);
    }
    (ke && (we = Ce && Ce.onVnodeUnmounted) || Me) && St(() => {
      we && us(we, B, L), Me && Hs(L, null, B, "unmounted");
    }, se);
  }, Ue = (L) => {
    const { type: B, el: se, anchor: ne, transition: fe } = L;
    if (B === j) {
      qe(se, ne);
      return;
    }
    if (B === ca) {
      S(L);
      return;
    }
    const me = () => {
      l(se), fe && !fe.persisted && fe.afterLeave && fe.afterLeave();
    };
    if (L.shapeFlag & 1 && fe && !fe.persisted) {
      const { leave: Ce, delayLeave: xe } = fe, re = () => Ce(se, me);
      xe ? xe(L.el, me, re) : re();
    } else
      me();
  }, qe = (L, B) => {
    let se;
    for (; L !== B; )
      se = w(L), l(L), L = se;
    l(B);
  }, ze = (L, B, se) => {
    const { bum: ne, scope: fe, job: me, subTree: Ce, um: xe, m: re, a: ve } = L;
    Il(re), Il(ve), ne && kn(ne), fe.stop(), me && (me.flags |= 8, Ne(Ce, L, B, se)), xe && St(xe, B), St(() => {
      L.isUnmounted = !0;
    }, B);
  }, Te = (L, B, se, ne = !1, fe = !1, me = 0) => {
    for (let Ce = me; Ce < L.length; Ce++)
      Ne(L[Ce], B, se, ne, fe);
  }, Ee = (L) => {
    if (L.shapeFlag & 6)
      return Ee(L.component.subTree);
    if (L.shapeFlag & 128)
      return L.suspense.next();
    const B = w(L.anchor || L.el), se = B && B[Mi];
    return se ? w(se) : B;
  };
  let H = !1;
  const K = (L, B, se) => {
    L == null ? B._vnode && Ne(B._vnode, null, null, !0) : C(
      B._vnode || null,
      L,
      B,
      null,
      null,
      null,
      se
    ), B._vnode = L, H || (H = !0, ml(), Ti(), H = !1);
  }, ie = {
    p: C,
    um: Ne,
    m: Re,
    r: Ue,
    mt: A,
    mc: E,
    pc: Q,
    pbc: O,
    n: Ee,
    o: e
  };
  return {
    render: K,
    hydrate: void 0,
    createApp: lu(K)
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
  if (Fe(n) && Fe(l))
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
  s && s.pendingBranch ? Fe(e) ? s.effects.push(...e) : s.effects.push(e) : Nc(e);
}
const j = Symbol.for("v-fgt"), Jn = Symbol.for("v-txt"), kt = Symbol.for("v-cmt"), ca = Symbol.for("v-stc"), Wo = [];
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
const x = Pu;
function Pu(e, s = null, o = null, n = 0, l = null, i = !1) {
  if ((!e || e === ji) && (e = kt), Xo(e)) {
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
    u && !ct(u) && (s.class = Se(u)), et(d) && (qa(d) && !Fe(d) && (d = pt({}, d)), s.style = qt(d));
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
      o && i ? Fe(i) ? i.concat(Cn(s)) : [i, Cn(s)] : Cn(s)
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
function b(e = " ", s = 0) {
  return x(Jn, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (a(), D(kt, null, e)) : x(kt, null, e);
}
function ps(e) {
  return e == null || typeof e == "boolean" ? x(kt) : Fe(e) ? x(
    j,
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
  else if (Fe(s))
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
  else We(s) ? (s = { default: s, _ctx: ht }, o = 32) : (s = String(s), n & 64 ? (o = 16, s = [b(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function Mu(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        s.class !== n.class && (s.class = Se([s.class, n.class]));
      else if (l === "style")
        s.style = qt([s.style, n.style]);
      else if (Fn(l)) {
        const i = s[l], c = n[l];
        c && i !== c && !(Fe(i) && i.includes(c)) && (s[l] = i ? [].concat(i, c) : c);
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
  We(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : et(s) && (e.setupState = Si(s)), fr(e);
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
  return We(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function Bu(e) {
  return We(e) && "__vccOpts" in e;
}
const N = (e, s) => Dc(e, s, Zo);
function nn(e, s, o) {
  try {
    Ln(-1);
    const n = arguments.length;
    return n === 2 ? et(s) && !Fe(s) ? Xo(s) ? x(e, null, [s]) : x(e, s) : x(e, null, s) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && Xo(o) && (o = [o]), x(e, s, o));
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
  Fe(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, Ml = (e) => e ? Fe(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
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
  } = e, _ = qu(l), C = _ && _[0], $ = _ && _[1], {
    onBeforeEnter: P,
    onEnter: R,
    onEnterCancelled: I,
    onLeave: S,
    onLeaveCancelled: q,
    onBeforeAppear: Y = P,
    onAppear: V = R,
    onAppearCancelled: E = I
  } = s, T = (Z, z, A, U) => {
    Z._enterCancelled = U, Ls(Z, z ? v : u), Ls(Z, z ? m : c), A && A();
  }, O = (Z, z) => {
    Z._isLeaving = !1, Ls(Z, g), Ls(Z, p), Ls(Z, w), z && z();
  }, le = (Z) => (z, A) => {
    const U = Z ? V : R, M = () => T(z, Z, A);
    qs(U, [z, M]), Dl(() => {
      Ls(z, Z ? d : i), fs(z, Z ? v : u), Ml(U) || Ll(z, n, C, M);
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
    onLeave(Z, z) {
      Z._isLeaving = !0;
      const A = () => O(Z, z);
      fs(Z, g), Z._enterCancelled ? (fs(Z, w), Ra(Z)) : (Ra(Z), fs(Z, w)), Dl(() => {
        Z._isLeaving && (Ls(Z, g), fs(Z, p), Ml(S) || Ll(Z, n, $, A));
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
  if (Fe(o))
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
  if (Fe(s)) {
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
      return x(d, null, i);
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
  return Fe(s) ? (o) => kn(s, o) : s;
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
      if (Fe(n)) {
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
  if (Fe(s))
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
  const o = e.multiple, n = Fe(s);
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
    !We(i) && !i.render && !i.template && (i.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
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
}, Md = /* @__PURE__ */ de({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (a(), r("div", Id, [
      s.$slots.header ? (a(), r("div", Ed, [
        He(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (a(), r("div", Td, [
        He(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", Pd, [
        He(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (a(), r("div", Rd, [
        He(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), pe = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of s)
    o[n] = l;
  return o;
}, Pt = /* @__PURE__ */ pe(Md, [["__scopeId", "data-v-21565df9"]]), Dd = {
  key: 0,
  class: "panel-title-prefix"
}, Ld = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Od = /* @__PURE__ */ de({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (a(), D(Qa(`h${e.level}`), {
      class: Se(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (a(), r("span", Dd, f(e.prefix), 1)) : (a(), r("span", Ld)),
        He(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ad = /* @__PURE__ */ pe(Od, [["__scopeId", "data-v-c3875efc"]]), Ud = ["title"], Nd = ["width", "height"], zd = /* @__PURE__ */ de({
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
}), kr = /* @__PURE__ */ pe(zd, [["__scopeId", "data-v-6fc7f16d"]]), Fd = { class: "header-left" }, Bd = {
  key: 0,
  class: "header-actions"
}, Vd = /* @__PURE__ */ de({
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
      t("div", Fd, [
        x(Ad, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            b(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), D(kr, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (a(), r("div", Bd, [
        He(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Rt = /* @__PURE__ */ pe(Vd, [["__scopeId", "data-v-55a62cd6"]]), Wd = {
  key: 0,
  class: "section-title-count"
}, Gd = {
  key: 1,
  class: "section-title-icon"
}, jd = /* @__PURE__ */ de({
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
      class: Se(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, {
      default: h(() => [
        He(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), r("span", Wd, "(" + f(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), r("span", Gd, f(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ut = /* @__PURE__ */ pe(jd, [["__scopeId", "data-v-559361eb"]]), Hd = { class: "status-grid" }, Kd = { class: "status-grid__columns" }, qd = { class: "status-grid__column" }, Yd = { class: "status-grid__title" }, Jd = { class: "status-grid__column status-grid__column--right" }, Qd = { class: "status-grid__title" }, Xd = {
  key: 0,
  class: "status-grid__footer"
}, Zd = /* @__PURE__ */ de({
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
          He(s.$slots, "left", {}, void 0)
        ]),
        t("div", Jd, [
          t("h4", Qd, f(e.rightTitle), 1),
          He(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (a(), r("div", Xd, [
        He(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), ef = /* @__PURE__ */ pe(Zd, [["__scopeId", "data-v-73b7ba3f"]]), tf = {
  key: 0,
  class: "status-item__icon"
}, sf = {
  key: 1,
  class: "status-item__count"
}, of = { class: "status-item__label" }, nf = /* @__PURE__ */ de({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = e, o = N(() => `status-item--${s.variant}`);
    return (n, l) => (a(), r("div", {
      class: Se(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), r("span", tf, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), r("span", sf, f(e.count), 1)) : y("", !0),
      t("span", of, f(e.label), 1)
    ], 2));
  }
}), ds = /* @__PURE__ */ pe(nf, [["__scopeId", "data-v-6f929183"]]), af = { class: "issue-card__header" }, lf = { class: "issue-card__icon" }, rf = { class: "issue-card__title" }, cf = {
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
}, mf = /* @__PURE__ */ de({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const s = e, o = N(() => `issue-card--${s.severity}`);
    return (n, l) => (a(), r("div", {
      class: Se(["issue-card", o.value])
    }, [
      t("div", af, [
        t("span", lf, f(e.icon), 1),
        t("h4", rf, f(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), r("div", cf, [
        e.description ? (a(), r("p", uf, f(e.description), 1)) : y("", !0),
        He(n.$slots, "default", {}, void 0)
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
        He(n.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Qt = /* @__PURE__ */ pe(mf, [["__scopeId", "data-v-df6aa348"]]), vf = ["type", "disabled"], pf = {
  key: 0,
  class: "spinner"
}, gf = /* @__PURE__ */ de({
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
      e.loading ? (a(), r("span", pf)) : y("", !0),
      e.loading ? y("", !0) : He(s.$slots, "default", { key: 1 }, void 0)
    ], 10, vf));
  }
}), ce = /* @__PURE__ */ pe(gf, [["__scopeId", "data-v-772abe47"]]), hf = { class: "empty-state" }, yf = {
  key: 0,
  class: "empty-icon"
}, wf = { class: "empty-message" }, _f = /* @__PURE__ */ de({
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
      e.actionLabel ? (a(), D(ce, {
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
}), ns = /* @__PURE__ */ pe(_f, [["__scopeId", "data-v-4466284f"]]), kf = /* @__PURE__ */ de({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (a(), r("span", {
      class: Se(["detail-label"]),
      style: qt({ minWidth: e.minWidth })
    }, [
      He(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), Sn = /* @__PURE__ */ pe(kf, [["__scopeId", "data-v-75e9eeb8"]]), bf = /* @__PURE__ */ de({
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
}), Ma = /* @__PURE__ */ pe(bf, [["__scopeId", "data-v-2f186e4c"]]), $f = { class: "detail-row" }, Cf = /* @__PURE__ */ de({
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
      x(Sn, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          b(f(e.label), 1)
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
          b(f(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : He(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), dt = /* @__PURE__ */ pe(Cf, [["__scopeId", "data-v-ef15664a"]]), xf = { class: "modal-header" }, Sf = { class: "modal-body" }, If = { class: "status-section" }, Ef = {
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
}, qm = { class: "modal-actions" }, Ym = /* @__PURE__ */ de({
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
    const n = N(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (C) => C.status === "broken" && C.sync_state === "synced"
      )) || [];
    }), l = N(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (C) => C.status === "broken" && C.sync_state !== "synced"
      )) || [];
    }), i = N(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.synced) == null ? void 0 : _.filter((C) => {
        var P, R, I;
        const $ = (I = (R = (P = s.status) == null ? void 0 : P.workflows) == null ? void 0 : R.analyzed) == null ? void 0 : I.find((S) => S.name === C);
        return !$ || $.status !== "broken";
      })) || [];
    }), c = N(() => {
      var w, p, _, C, $;
      return (w = s.status) != null && w.workflows ? (((p = s.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((_ = s.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((C = s.status.workflows.deleted) == null ? void 0 : C.length) ?? 0) > 0 || ((($ = s.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), u = N(() => {
      var p, _, C;
      const w = (p = s.status) == null ? void 0 : p.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((C = w.nodes_removed) == null ? void 0 : C.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = N(() => {
      var w, p, _, C, $, P;
      return !c.value && !u.value && ((p = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : p.is_synced) && (((_ = s.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((P = ($ = (C = s.status) == null ? void 0 : C.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : P.length) ?? 0) === 0;
    }), m = N(() => {
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
      var _, C, $, P, R, I, S, q, Y, V, E, T, O, le, Z, z, A, U, M, ee, Q, he;
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
              c.value ? (a(), r("div", Ef, [
                t("div", Tf, [
                  x(Ut, { level: "4" }, {
                    default: h(() => [...p[10] || (p[10] = [
                      b("WORKFLOWS", -1)
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
                (P = ($ = e.status.workflows) == null ? void 0 : $.modified) != null && P.length ? (a(), r("div", Kf, [
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
                (I = (R = e.status.workflows) == null ? void 0 : R.deleted) != null && I.length ? (a(), r("div", Xf, [
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
                x(Ut, { level: "4" }, {
                  default: h(() => [...p[17] || (p[17] = [
                    b("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (q = (S = e.status.git_changes) == null ? void 0 : S.nodes_added) != null && q.length ? (a(), r("div", cm, [
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
                (V = (Y = e.status.git_changes) == null ? void 0 : Y.nodes_removed) != null && V.length ? (a(), r("div", pm, [
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
                (T = e.status.git_changes) != null && T.has_other_changes ? (a(), r("div", xm, [...p[21] || (p[21] = [
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
              (O = e.status.comparison) != null && O.is_synced ? y("", !0) : (a(), r("div", Sm, [
                t("div", Im, [
                  x(Ut, { level: "4" }, {
                    default: h(() => [...p[22] || (p[22] = [
                      b("ENVIRONMENT DRIFT", -1)
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
                  x(dt, {
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
                (A = (z = e.status.comparison) == null ? void 0 : z.extra_nodes) != null && A.length ? (a(), r("div", Rm, [
                  x(dt, {
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
                (M = (U = e.status.comparison) == null ? void 0 : U.version_mismatches) != null && M.length ? (a(), r("div", Lm, [
                  x(dt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", Om, [
                    (a(!0), r(j, null, ge(e.status.comparison.version_mismatches.slice(0, 10), (_e) => (a(), r("div", {
                      key: _e.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      b(f(_e.name) + ": ", 1),
                      t("span", Am, f(_e.actual), 1),
                      p[23] || (p[23] = b(" → ", -1)),
                      t("span", Um, f(_e.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), r("div", Nm, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((ee = e.status.comparison) == null ? void 0 : ee.packages_in_sync) === !1 ? (a(), r("div", zm, [
                  x(dt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", Fm, [
                  x(ce, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: p[4] || (p[4] = (_e) => w.$emit("repair"))
                  }, {
                    default: h(() => [...p[24] || (p[24] = [
                      b(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  p[25] || (p[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (he = (Q = e.status.comparison) == null ? void 0 : Q.disabled_nodes) != null && he.length ? (a(), r("div", Bm, [
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
                  (a(!0), r(j, null, ge(e.status.comparison.disabled_nodes.slice(0, 10), (_e) => (a(), r("div", {
                    key: _e,
                    class: "drift-list-item"
                  }, " • " + f(_e), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), r("div", Gm, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), r("div", jm, [
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
              d.value ? (a(), r("div", Km, [...p[32] || (p[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            t("div", qm, [
              x(ce, {
                variant: "secondary",
                onClick: p[5] || (p[5] = (_e) => w.$emit("close"))
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
}), Jm = /* @__PURE__ */ pe(Ym, [["__scopeId", "data-v-e2b37122"]]), Qm = { class: "health-section-header" }, Xm = { class: "suggestions-content" }, Zm = { class: "suggestions-text" }, ev = { style: { "margin-top": "var(--cg-space-3)" } }, tv = {
  key: 1,
  class: "no-issues-text"
}, sv = /* @__PURE__ */ de({
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
    const C = N(() => {
      const U = n.status.workflows.analyzed || [], M = U.filter(
        (ee) => ee.unresolved_models_count > 0 || ee.ambiguous_models_count > 0
      );
      return M.length === 0 && n.status.missing_models_count > 0 ? U.filter((ee) => ee.sync_state === "synced") : M;
    });
    function $() {
      const U = C.value;
      U.length !== 0 && (v.value = !0, m("repair-missing-models", U.map((M) => M.name)));
    }
    function P() {
      v.value = !1;
    }
    s({ resetRepairingState: P, resetRepairingEnvironmentState: p, closeDetailModal: _ });
    const R = N(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), I = N(() => n.status.has_changes), S = N(() => {
      const U = n.status.git_changes;
      return U.nodes_added.length > 0 || U.nodes_removed.length > 0 || U.workflow_changes;
    }), q = N(() => n.status.has_changes || R.value), Y = N(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), V = N(() => n.status.git_changes.has_other_changes), E = N(() => {
      var U;
      return ((U = n.status.workflows.analyzed) == null ? void 0 : U.filter((M) => M.status === "broken")) || [];
    }), T = N(() => {
      var U;
      return ((U = n.status.workflows.analyzed) == null ? void 0 : U.filter(
        (M) => M.has_path_sync_issues && !M.has_issues
      )) || [];
    }), O = N(() => E.value.length > 0), le = N(() => O.value || T.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), Z = N(() => {
      const U = [];
      return n.status.workflows.new.length > 0 && U.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && U.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && U.push(`${n.status.workflows.deleted.length} deleted`), U.length > 0 ? `${U.join(", ")} workflow${U.length === 1 && !U[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), z = N(() => {
      var ee, Q;
      const U = [], M = n.status.comparison;
      return (ee = M.missing_nodes) != null && ee.length && U.push(`${M.missing_nodes.length} missing node${M.missing_nodes.length === 1 ? "" : "s"}`), (Q = M.extra_nodes) != null && Q.length && U.push(`${M.extra_nodes.length} untracked node${M.extra_nodes.length === 1 ? "" : "s"}`), U.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${U.join(" and ")}.`;
    }), A = N(() => {
      var ee, Q;
      const U = [], M = n.status.comparison;
      return (ee = M.extra_nodes) != null && ee.length && (M.extra_nodes.slice(0, 3).forEach((he) => {
        U.push(`Untracked: ${he}`);
      }), M.extra_nodes.length > 3 && U.push(`...and ${M.extra_nodes.length - 3} more untracked`)), (Q = M.missing_nodes) != null && Q.length && (M.missing_nodes.slice(0, 3).forEach((he) => {
        U.push(`Missing: ${he}`);
      }), M.missing_nodes.length > 3 && U.push(`...and ${M.missing_nodes.length - 3} more missing`)), U;
    });
    return (U, M) => (a(), r(j, null, [
      x(Pt, null, {
        header: h(() => [
          x(Rt, { title: "STATUS" })
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
              x(ce, {
                variant: "primary",
                size: "sm",
                onClick: M[0] || (M[0] = (ee) => U.$emit("start-setup"))
              }, {
                default: h(() => [...M[13] || (M[13] = [
                  b(" Start Setup ", -1)
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
              x(ce, {
                variant: "primary",
                size: "sm",
                onClick: M[1] || (M[1] = (ee) => U.$emit("view-environments"))
              }, {
                default: h(() => [...M[14] || (M[14] = [
                  b(" View Environments ", -1)
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
              x(ce, {
                variant: "primary",
                size: "sm",
                onClick: M[2] || (M[2] = (ee) => U.$emit("create-environment"))
              }, {
                default: h(() => [...M[15] || (M[15] = [
                  b(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: M[4] || (M[4] = (ee) => i.value = !0),
            onMouseleave: M[5] || (M[5] = (ee) => i.value = !1)
          }, [
            t("div", Qm, [
              x(Ut, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...M[16] || (M[16] = [
                  b(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              x(Ku, { name: "fade" }, {
                default: h(() => [
                  i.value ? (a(), D(ce, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: h(() => [...M[17] || (M[17] = [
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
                x(ds, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: R.value
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
                  count: Y.value,
                  label: Y.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                V.value ? (a(), D(ds, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                I.value && !S.value && !V.value ? (a(), D(ds, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                I.value ? y("", !0) : (a(), D(ds, {
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
                  M[19] || (M[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", Xm, [
                    t("span", Zm, f(Z.value), 1),
                    x(ce, {
                      variant: "primary",
                      size: "sm",
                      onClick: M[3] || (M[3] = (ee) => U.$emit("commit-changes"))
                    }, {
                      default: h(() => [...M[18] || (M[18] = [
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
          e.status.is_detached_head ? (a(), D(Qt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              x(ce, {
                variant: "primary",
                size: "sm",
                onClick: M[6] || (M[6] = (ee) => U.$emit("create-branch"))
              }, {
                default: h(() => [...M[20] || (M[20] = [
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
              default: h(() => [...M[21] || (M[21] = [
                b(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            le.value ? (a(), r(j, { key: 0 }, [
              E.value.length > 0 ? (a(), D(Qt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: E.value.map((ee) => `${ee.name} — ${ee.issue_summary}`)
              }, {
                actions: h(() => [
                  x(ce, {
                    variant: "primary",
                    size: "sm",
                    onClick: M[7] || (M[7] = (ee) => U.$emit("view-workflows"))
                  }, {
                    default: h(() => [...M[22] || (M[22] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              T.value.length > 0 ? (a(), D(Qt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${T.value.length} workflow${T.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: T.value.map((ee) => `${ee.name} — ${ee.models_needing_path_sync_count} model path${ee.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  x(ce, {
                    variant: "primary",
                    size: "sm",
                    onClick: M[8] || (M[8] = (ee) => U.$emit("view-workflows"))
                  }, {
                    default: h(() => [...M[23] || (M[23] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !O.value ? (a(), D(Qt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  x(ce, {
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
                  x(ce, {
                    variant: "secondary",
                    size: "sm",
                    onClick: M[9] || (M[9] = (ee) => U.$emit("view-workflows"))
                  }, {
                    default: h(() => [...M[24] || (M[24] = [
                      b(" See Workflows ", -1)
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
                items: A.value
              }, {
                actions: h(() => [
                  x(ce, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: h(() => [...M[25] || (M[25] = [
                      b(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  x(ce, {
                    variant: "primary",
                    size: "sm",
                    onClick: M[10] || (M[10] = (ee) => U.$emit("view-nodes"))
                  }, {
                    default: h(() => [...M[26] || (M[26] = [
                      b(" See Nodes ", -1)
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
                  x(ce, {
                    variant: "primary",
                    size: "sm",
                    onClick: M[11] || (M[11] = (ee) => U.$emit("view-nodes"))
                  }, {
                    default: h(() => [...M[27] || (M[27] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : q.value ? (a(), r("span", tv, "No issues")) : (a(), D(ns, {
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
        onClose: M[12] || (M[12] = (ee) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), ov = /* @__PURE__ */ pe(sv, [["__scopeId", "data-v-55fcd77f"]]), nv = ["type", "value", "placeholder", "disabled"], av = /* @__PURE__ */ de({
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
      class: Se(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = Ht((m) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Ht((m) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (m) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (m) => u.$emit("blur"))
    }, null, 42, nv));
  }
}), Un = /* @__PURE__ */ pe(av, [["__scopeId", "data-v-0380d08f"]]), lv = { class: "branch-create-form" }, iv = { class: "form-actions" }, rv = /* @__PURE__ */ de({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, n = k(""), l = N(() => {
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
      x(Un, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => n.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: i,
        onEscape: c
      }, null, 8, ["modelValue"]),
      t("div", iv, [
        x(ce, {
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
        x(ce, {
          variant: "secondary",
          size: "sm",
          onClick: c
        }, {
          default: h(() => [...d[2] || (d[2] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), cv = /* @__PURE__ */ pe(rv, [["__scopeId", "data-v-7c500394"]]), uv = { class: "branch-list-item__indicator" }, dv = { class: "branch-list-item__name" }, fv = {
  key: 0,
  class: "branch-list-item__actions"
}, mv = {
  key: 0,
  class: "branch-list-item__current-label"
}, vv = /* @__PURE__ */ de({
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
      t("span", uv, f(e.isCurrent ? "●" : "○"), 1),
      t("span", dv, f(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (a(), r("div", fv, [
        He(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), r("span", mv, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), pv = /* @__PURE__ */ pe(vv, [["__scopeId", "data-v-c6581a24"]]), gv = {
  key: 2,
  class: "branch-list"
}, hv = /* @__PURE__ */ de({
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
        x(Rt, { title: "BRANCHES" }, {
          actions: h(() => [
            n.value ? y("", !0) : (a(), D(ce, {
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
              d.is_current ? y("", !0) : (a(), D(ce, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (m) => c.$emit("delete", d.name)
              }, {
                default: h(() => [...u[2] || (u[2] = [
                  b(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              d.is_current ? y("", !0) : (a(), D(ce, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (m) => c.$emit("switch", d.name)
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
}), yv = /* @__PURE__ */ pe(hv, [["__scopeId", "data-v-86784ddd"]]), wv = { class: "commit-list" }, _v = /* @__PURE__ */ de({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (a(), r("div", wv, [
      He(s.$slots, "default", {}, void 0)
    ]));
  }
}), kv = /* @__PURE__ */ pe(_v, [["__scopeId", "data-v-8c5ee761"]]), bv = { class: "commit-hash" }, $v = /* @__PURE__ */ de({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = N(() => s.hash.slice(0, s.length));
    return (n, l) => (a(), r("span", bv, f(o.value), 1));
  }
}), br = /* @__PURE__ */ pe($v, [["__scopeId", "data-v-7c333cc6"]]), Cv = { class: "commit-message" }, xv = { class: "commit-date" }, Sv = /* @__PURE__ */ de({
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
      x(br, { hash: e.hash }, null, 8, ["hash"]),
      t("span", Cv, f(e.message), 1),
      t("span", xv, f(e.relativeDate), 1),
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
}), Iv = /* @__PURE__ */ pe(Sv, [["__scopeId", "data-v-dd7c621b"]]), Ev = /* @__PURE__ */ de({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (s, o) => (a(), D(Pt, null, {
      header: h(() => [
        x(Rt, { title: "HISTORY" })
      ]),
      content: h(() => [
        e.commits.length === 0 ? (a(), D(ns, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), D(kv, { key: 1 }, {
          default: h(() => [
            (a(!0), r(j, null, ge(e.commits, (n) => (a(), D(Iv, {
              key: n.hash,
              hash: n.short_hash || n.hash,
              message: n.message,
              "relative-date": n.date_relative || n.relative_date,
              onClick: (l) => s.$emit("select", n)
            }, {
              actions: h(() => [
                x(ce, {
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
}), Tv = /* @__PURE__ */ pe(Ev, [["__scopeId", "data-v-981c3c64"]]), MP = Vs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const DP = [
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
], LP = {
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
], OP = [
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
  async function o(F, be) {
    var Ot;
    if (!((Ot = window.app) != null && Ot.api))
      throw new Error("ComfyUI API not available");
    const Ae = await window.app.api.fetchApi(F, be);
    if (!Ae.ok) {
      const cs = await Ae.json().catch(() => ({}));
      throw new Error(cs.error || cs.message || `Request failed: ${Ae.status}`);
    }
    const rt = await Ae.text();
    if (rt)
      return JSON.parse(rt);
  }
  async function n(F = !1) {
    return o(F ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(F, be = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: F, allow_issues: be })
    });
  }
  async function i(F = 10, be = 0) {
    return o(`/v2/comfygit/log?limit=${F}&offset=${be}`);
  }
  async function c(F) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: F })
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
  async function m(F) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: F, force: !0 })
    });
  }
  async function v() {
    return o("/v2/comfygit/branches");
  }
  async function g(F) {
    return o(`/v2/comfygit/commit/${F}`);
  }
  async function w(F, be = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: F, force: be })
    });
  }
  async function p(F, be = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: F, start_point: be })
    });
  }
  async function _(F, be = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: F, force: be })
    });
  }
  async function C(F, be = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(F)}`, {
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
        const F = await n();
        return [{
          name: F.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + F.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: F.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: F.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function P(F, be) {
    const Ae = { target_env: F };
    return be && (Ae.workspace_path = be), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ae)
    });
  }
  async function R() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function I(F) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(F)
    });
  }
  async function S() {
    return o("/v2/workspace/environments/create_status");
  }
  async function q(F = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${F}`);
  }
  async function Y(F) {
    return o(`/v2/workspace/environments/${F}`, {
      method: "DELETE"
    });
  }
  async function V(F = !1) {
    try {
      return o(F ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const be = await n(F), Ae = [];
      return be.workflows.new.forEach((rt) => {
        Ae.push({ name: rt, status: "new", missing_nodes: 0, missing_models: 0, path: rt });
      }), be.workflows.modified.forEach((rt) => {
        Ae.push({ name: rt, status: "modified", missing_nodes: 0, missing_models: 0, path: rt });
      }), be.workflows.synced.forEach((rt) => {
        Ae.push({ name: rt, status: "synced", missing_nodes: 0, missing_models: 0, path: rt });
      }), Ae;
    }
  }
  async function E(F) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(F)}/details`);
  }
  async function T(F) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(F)}/resolve`, {
      method: "POST"
    });
  }
  async function O(F, be, Ae) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(F)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: be, install_models: Ae })
    });
  }
  async function le(F, be, Ae) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(F)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: be, importance: Ae })
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
  async function A(F) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(F)}`);
  }
  async function U(F) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: F })
    });
  }
  async function M(F, be) {
    return o(`/v2/workspace/models/${F}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: be })
    });
  }
  async function ee(F, be) {
    return o(`/v2/workspace/models/${F}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: be })
    });
  }
  async function Q(F) {
    return o(`/v2/workspace/models/${F}`, {
      method: "DELETE"
    });
  }
  async function he(F) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(F)
    });
  }
  async function _e() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Re() {
    return o("/v2/workspace/models/directory");
  }
  async function Ne(F) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: F })
    });
  }
  async function Ue(F) {
    const be = new URLSearchParams({ url: F });
    return o(`/v2/workspace/huggingface/repo-info?${be}`);
  }
  async function qe() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function ze(F, be = 10) {
    const Ae = new URLSearchParams({ query: F, limit: String(be) });
    return o(`/v2/workspace/huggingface/search?${Ae}`);
  }
  async function Te(F) {
    try {
      const be = F ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(F)}` : "/v2/comfygit/config";
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
  async function Ee(F, be) {
    const Ae = be ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(be)}` : "/v2/comfygit/config";
    return o(Ae, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(F)
    });
  }
  async function H(F, be) {
    try {
      const Ae = new URLSearchParams();
      return F && Ae.append("level", F), be && Ae.append("lines", be.toString()), o(`/v2/comfygit/debug/logs?${Ae}`);
    } catch {
      return [];
    }
  }
  async function K(F, be) {
    try {
      const Ae = new URLSearchParams();
      return F && Ae.append("level", F), be && Ae.append("lines", be.toString()), o(`/v2/workspace/debug/logs?${Ae}`);
    } catch {
      return [];
    }
  }
  async function ie() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function ye() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function L(F, be) {
    try {
      const Ae = new URLSearchParams();
      return F && Ae.append("level", F), be && Ae.append("lines", be.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Ae}`);
    } catch {
      return [];
    }
  }
  async function B() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function se(F) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: F })
    });
  }
  async function ne() {
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
  async function fe(F) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(F)}/track-dev`, {
      method: "POST"
    });
  }
  async function me(F) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(F)}/install`, {
      method: "POST"
    });
  }
  async function Ce(F) {
    var Ot, cs, Io, Eo;
    const be = $r(), Ae = ((cs = (Ot = window.app) == null ? void 0 : Ot.api) == null ? void 0 : cs.clientId) ?? ((Eo = (Io = window.app) == null ? void 0 : Io.api) == null ? void 0 : Eo.initialClientId) ?? "comfygit-panel", rt = {
      kind: "install",
      params: {
        id: F.id,
        version: F.version || F.selected_version || "latest",
        selected_version: F.selected_version || "latest",
        repository: F.repository || "",
        mode: F.mode || "remote",
        channel: F.channel || "default"
      },
      ui_id: be,
      client_id: Ae
    };
    return await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rt)
    }), await o("/v2/manager/queue/start"), { ui_id: be };
  }
  async function xe(F) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(F)}/update`, {
      method: "POST"
    });
  }
  async function re(F) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(F)}`, {
      method: "DELETE"
    });
  }
  async function ve() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Le(F, be) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: F, url: be })
    });
  }
  async function Ie(F) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(F)}`, {
      method: "DELETE"
    });
  }
  async function oe(F, be, Ae) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(F)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: be, push_url: Ae })
    });
  }
  async function X(F, be) {
    const Ae = {};
    return be && (Ae["X-Git-Auth-Token"] = be), o(`/v2/comfygit/remotes/${encodeURIComponent(F)}/fetch`, {
      method: "POST",
      headers: Ae
    });
  }
  async function Me(F) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(F)}/status`);
    } catch {
      return null;
    }
  }
  async function ke(F = "skip", be = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: F,
        remove_extra_nodes: be
      })
    });
  }
  async function we(F, be) {
    const Ae = be ? `/v2/comfygit/remotes/${encodeURIComponent(F)}/pull-preview?branch=${encodeURIComponent(be)}` : `/v2/comfygit/remotes/${encodeURIComponent(F)}/pull-preview`;
    return o(Ae);
  }
  async function G(F, be = {}) {
    const Ae = { "Content-Type": "application/json" };
    return be.authToken && (Ae["X-Git-Auth-Token"] = be.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(F)}/pull`, {
      method: "POST",
      headers: Ae,
      body: JSON.stringify({
        model_strategy: be.modelStrategy || "skip",
        force: be.force || !1,
        resolutions: be.resolutions
      })
    });
  }
  async function W(F, be) {
    const Ae = be ? `/v2/comfygit/remotes/${encodeURIComponent(F)}/push-preview?branch=${encodeURIComponent(be)}` : `/v2/comfygit/remotes/${encodeURIComponent(F)}/push-preview`;
    return o(Ae);
  }
  async function ue(F, be = {}) {
    const Ae = { "Content-Type": "application/json" };
    return be.authToken && (Ae["X-Git-Auth-Token"] = be.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(F)}/push`, {
      method: "POST",
      headers: Ae,
      body: JSON.stringify({ force: be.force || !1 })
    });
  }
  async function Be(F, be) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(F)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: be })
    });
  }
  async function Xe(F) {
    const be = {
      success: 0,
      failed: []
    };
    for (const Ae of F)
      try {
        await T(Ae), be.success++;
      } catch (rt) {
        be.failed.push({
          name: Ae,
          error: rt instanceof Error ? rt.message : "Unknown error"
        });
      }
    return be;
  }
  async function vt(F) {
    var rt;
    const be = new FormData();
    if (be.append("file", F), !((rt = window.app) != null && rt.api))
      throw new Error("ComfyUI API not available");
    const Ae = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: be
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ae.ok) {
      const Ot = await Ae.json().catch(() => ({}));
      throw new Error(Ot.error || `Preview failed: ${Ae.status}`);
    }
    return Ae.json();
  }
  async function at(F) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(F)}`
    );
  }
  async function ut(F, be, Ae, rt) {
    var Io;
    const Ot = new FormData();
    if (Ot.append("file", F), Ot.append("name", be), Ot.append("model_strategy", Ae), Ot.append("torch_backend", rt), !((Io = window.app) != null && Io.api))
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
  async function Ft(F) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: F })
    });
  }
  async function Yt(F, be, Ae, rt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: F,
        name: be,
        model_strategy: Ae,
        torch_backend: rt
      })
    });
  }
  async function Ws() {
    return o("/v2/setup/status");
  }
  async function Ms(F) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(F)
    });
  }
  async function no() {
    return o("/v2/setup/initialize_status");
  }
  async function Co(F) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(F)
    });
  }
  async function xo() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function So() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function $e(F, be) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: F, save_key: be })
    });
  }
  async function te() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function je(F) {
    const be = F ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(F)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(be);
  }
  async function gt(F) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(F)
    });
  }
  async function Jt() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function ys(F) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(F)}`, {
      method: "DELETE"
    });
  }
  async function ws(F) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(F)}/stop`, {
      method: "POST"
    });
  }
  async function ls(F) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(F)}/start`, {
      method: "POST"
    });
  }
  async function Oe(F) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(F)}/status`);
  }
  async function is(F) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: F })
    });
  }
  async function ae(F = !1) {
    return o(F ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function J() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function De() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function Ge(F) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(F)
    });
  }
  async function ot(F) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(F)}`, {
      method: "DELETE"
    });
  }
  async function mt(F) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(F)
    });
  }
  async function Dt() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function rs(F) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(F)}/info`);
  }
  async function Gs(F) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(F)}/instances`);
  }
  async function js(F, be) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(F)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(be)
    });
  }
  async function ln(F, be) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(F)}/instances/${encodeURIComponent(be)}/start`, {
      method: "POST"
    });
  }
  async function rn(F, be) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(F)}/instances/${encodeURIComponent(be)}/stop`, {
      method: "POST"
    });
  }
  async function cn(F, be) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(F)}/instances/${encodeURIComponent(be)}`, {
      method: "DELETE"
    });
  }
  async function un(F) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: F })
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
    getEnvironments: $,
    switchEnvironment: P,
    getSwitchProgress: R,
    createEnvironment: I,
    getCreateProgress: S,
    getComfyUIReleases: q,
    deleteEnvironment: Y,
    // Workflow Management
    getWorkflows: V,
    getWorkflowDetails: E,
    resolveWorkflow: T,
    installWorkflowDeps: O,
    setModelImportance: le,
    // Model Management
    getEnvironmentModels: Z,
    getWorkspaceModels: z,
    getModelDetails: A,
    openFileLocation: U,
    addModelSource: M,
    removeModelSource: ee,
    deleteModel: Q,
    downloadModel: he,
    scanWorkspaceModels: _e,
    getModelsDirectory: Re,
    setModelsDirectory: Ne,
    getHuggingFaceRepoInfo: Ue,
    getModelsSubdirectories: qe,
    searchHuggingFaceRepos: ze,
    // Settings
    getConfig: Te,
    updateConfig: Ee,
    // Debug/Logs
    getEnvironmentLogs: H,
    getWorkspaceLogs: K,
    getEnvironmentLogPath: ie,
    getWorkspaceLogPath: ye,
    getOrchestratorLogs: L,
    getOrchestratorLogPath: B,
    openFile: se,
    // Node Management
    getNodes: ne,
    trackNodeAsDev: fe,
    installNode: me,
    queueNodeInstall: Ce,
    updateNode: xe,
    uninstallNode: re,
    // Git Remotes
    getRemotes: ve,
    addRemote: Le,
    removeRemote: Ie,
    updateRemoteUrl: oe,
    fetchRemote: X,
    getRemoteSyncStatus: Me,
    // Push/Pull
    getPullPreview: we,
    pullFromRemote: G,
    getPushPreview: W,
    pushToRemote: ue,
    validateMerge: Be,
    // Environment Sync
    syncEnvironmentManually: ke,
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
    getNetworkVolumes: te,
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
    getCustomWorkers: De,
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
}, Nv = /* @__PURE__ */ de({
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
    }), (c, u) => (a(), D(Ct, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Se(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = it(() => {
          }, ["stop"]))
        }, [
          t("div", Mv, [
            He(c.$slots, "header", {}, () => [
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
            e.loading ? (a(), r("div", Ov, "Loading...")) : e.error ? (a(), r("div", Av, f(e.error), 1)) : He(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (a(), r("div", Uv, [
            He(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), ft = /* @__PURE__ */ pe(Nv, [["__scopeId", "data-v-8dab1081"]]), zv = ["type", "disabled"], Fv = {
  key: 0,
  class: "spinner"
}, Bv = /* @__PURE__ */ de({
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
      e.loading ? (a(), r("span", Fv)) : y("", !0),
      He(s.$slots, "default", {}, void 0)
    ], 10, zv));
  }
}), Pe = /* @__PURE__ */ pe(Bv, [["__scopeId", "data-v-f3452606"]]), Vv = {
  key: 0,
  class: "base-title-count"
}, Wv = /* @__PURE__ */ de({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (a(), D(Qa(`h${e.level}`), {
      class: Se(["base-title", e.variant])
    }, {
      default: h(() => [
        He(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), r("span", Vv, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Go = /* @__PURE__ */ pe(Wv, [["__scopeId", "data-v-5a01561d"]]), Gv = ["value", "disabled"], jv = {
  key: 0,
  value: "",
  disabled: ""
}, Hv = ["value"], Kv = {
  key: 0,
  class: "base-select-error"
}, qv = /* @__PURE__ */ de({
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
        e.placeholder ? (a(), r("option", jv, f(e.placeholder), 1)) : y("", !0),
        (a(!0), r(j, null, ge(e.options, (i) => (a(), r("option", {
          key: s(i),
          value: s(i)
        }, f(o(i)), 9, Hv))), 128))
      ], 42, Gv),
      e.error ? (a(), r("span", Kv, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Cr = /* @__PURE__ */ pe(qv, [["__scopeId", "data-v-7436d745"]]), Yv = { class: "popover-header" }, Jv = { class: "popover-title" }, Qv = { class: "popover-content" }, Xv = {
  key: 0,
  class: "popover-actions"
}, Zv = /* @__PURE__ */ de({
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
          t("div", Qv, [
            He(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (a(), r("div", Xv, [
            He(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), as = /* @__PURE__ */ pe(Zv, [["__scopeId", "data-v-42815ace"]]), ep = { class: "detail-section" }, tp = {
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
}, _p = /* @__PURE__ */ de({
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
    function $(E) {
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
    function R(E) {
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
    async function V() {
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
    return Qe(S), (E, T) => (a(), r(j, null, [
      x(ft, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: d.value,
        error: m.value || void 0,
        onClose: T[4] || (T[4] = (O) => n("close"))
      }, {
        body: h(() => [
          u.value ? (a(), r(j, { key: 0 }, [
            t("section", ep, [
              x(Go, { variant: "section" }, {
                default: h(() => [
                  b("MODELS USED (" + f(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (a(), r("div", tp, " No models used in this workflow ")) : y("", !0),
              (a(!0), r(j, null, ge(u.value.models, (O) => {
                var le;
                return a(), r("div", {
                  key: O.hash || O.filename,
                  class: "model-card"
                }, [
                  t("div", sp, [
                    T[6] || (T[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", op, f(O.filename), 1)
                  ]),
                  t("div", np, [
                    t("div", ap, [
                      T[7] || (T[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Se(["value", C(O.status)])
                      }, f($(O.status)), 3)
                    ]),
                    t("div", lp, [
                      t("span", ip, [
                        T[8] || (T[8] = b(" Importance: ", -1)),
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
                    O.loaded_by && O.loaded_by.length > 0 ? (a(), r("div", rp, [
                      T[9] || (T[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", cp, [
                        (a(!0), r(j, null, ge(P(O), (Z, z) => (a(), r("div", {
                          key: `${Z.node_id}-${z}`,
                          class: "node-reference"
                        }, f(Z.node_type) + " (Node #" + f(Z.node_id) + ") ", 1))), 128)),
                        O.loaded_by.length > 3 ? (a(), r("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (Z) => I(O.hash || O.filename)
                        }, f(R(O.hash || O.filename) ? "▼ Show less" : `▶ View all (${O.loaded_by.length})`), 9, up)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    O.size_mb ? (a(), r("div", dp, [
                      T[10] || (T[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", fp, f(O.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    O.has_category_mismatch ? (a(), r("div", mp, [
                      T[13] || (T[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", vp, [
                        T[11] || (T[11] = b(" In ", -1)),
                        t("code", null, f(O.actual_category) + "/", 1),
                        T[12] || (T[12] = b(" but loader needs ", -1)),
                        t("code", null, f((le = O.expected_categories) == null ? void 0 : le[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  O.status !== "available" ? (a(), r("div", pp, [
                    O.status === "downloadable" ? (a(), D(Pe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: T[1] || (T[1] = (Z) => n("resolve"))
                    }, {
                      default: h(() => [...T[14] || (T[14] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    })) : O.status === "category_mismatch" && O.file_path ? (a(), D(Pe, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (Z) => Y(O.file_path)
                    }, {
                      default: h(() => [...T[15] || (T[15] = [
                        b(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : O.status !== "path_mismatch" ? (a(), D(Pe, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: T[2] || (T[2] = (Z) => n("resolve"))
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
              u.value.nodes.length === 0 ? (a(), r("div", hp, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), r(j, null, ge(u.value.nodes, (O) => (a(), r("div", {
                key: O.name,
                class: "node-item"
              }, [
                t("span", {
                  class: Se(["node-status", O.status === "installed" ? "installed" : "missing"])
                }, f(O.status === "installed" ? "✓" : "✕"), 3),
                t("span", yp, f(O.name), 1),
                O.version ? (a(), r("span", wp, "v" + f(O.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          x(Pe, {
            variant: "secondary",
            onClick: T[3] || (T[3] = (O) => n("close"))
          }, {
            default: h(() => [...T[17] || (T[17] = [
              b(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (a(), D(Pe, {
            key: 0,
            variant: "primary",
            onClick: V
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
}), kp = /* @__PURE__ */ pe(_p, [["__scopeId", "data-v-668728e6"]]), Ye = Vs({
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
  function e($) {
    for (const P of $) {
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
  async function s($) {
    const P = ma($);
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
        const R = Ye.items.findIndex((I) => I.id === $);
        R >= 0 && Ye.items.splice(R, 1);
      }
    }
  }
  function o($) {
    const P = ma($);
    !P || P.status !== "failed" || (P.status = "queued", P.error = void 0, P.progress = 0, P.downloaded = 0, Ye.status === "idle" && uo());
  }
  function n($) {
    const P = ma($);
    !P || P.status !== "paused" || (P.status = "queued", Ye.status === "idle" && uo());
  }
  function l() {
    const $ = Ye.items.filter((P) => P.status === "paused");
    for (const P of $)
      P.status = "queued";
    Ye.status === "idle" && uo();
  }
  function i($) {
    const P = Ye.items.findIndex((R) => R.id === $);
    P >= 0 && ["completed", "failed", "paused"].includes(Ye.items[P].status) && Ye.items.splice(P, 1);
  }
  function c() {
    Ye.items = Ye.items.filter(($) => $.status !== "completed");
  }
  function u() {
    Ye.items = Ye.items.filter(($) => $.status !== "failed");
  }
  const d = N(
    () => Ye.items.find(($) => $.status === "downloading")
  ), m = N(
    () => Ye.items.filter(($) => $.status === "queued")
  ), v = N(
    () => Ye.items.filter(($) => $.status === "completed")
  ), g = N(
    () => Ye.items.filter(($) => $.status === "failed")
  ), w = N(
    () => Ye.items.filter(($) => $.status === "paused")
  ), p = N(() => Ye.items.length > 0), _ = N(
    () => Ye.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), C = N(
    () => Ye.items.some(($) => $.status === "paused")
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
    loadPendingDownloads: $p
  };
}
function Sr() {
  const e = k(null), s = k(null), o = k([]), n = k([]), l = k(!1), i = k(null);
  async function c(R, I) {
    var q;
    if (!((q = window.app) != null && q.api))
      throw new Error("ComfyUI API not available");
    const S = await window.app.api.fetchApi(R, I);
    if (!S.ok) {
      const Y = await S.json().catch(() => ({})), V = Y.error || Y.message || `Request failed: ${S.status}`;
      throw new Error(V);
    }
    return S.json();
  }
  async function u(R) {
    l.value = !0, i.value = null;
    try {
      let I;
      return co() || (I = await c(
        `/v2/comfygit/workflow/${R}/analyze`,
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
  async function d(R, I, S, q) {
    l.value = !0, i.value = null;
    try {
      let Y;
      if (!co()) {
        const V = Object.fromEntries(I), E = Object.fromEntries(S), T = q ? Array.from(q) : [];
        Y = await c(
          `/v2/comfygit/workflow/${R}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: V,
              model_choices: E,
              skipped_packages: T
            })
          }
        );
      }
      return s.value = Y, Y;
    } catch (Y) {
      const V = Y instanceof Error ? Y.message : "Unknown error occurred";
      throw i.value = V, Y;
    } finally {
      l.value = !1;
    }
  }
  async function m(R, I = 10) {
    l.value = !0, i.value = null;
    try {
      let S;
      return co() || (S = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: R, limit: I })
        }
      )), o.value = S.results, S.results;
    } catch (S) {
      const q = S instanceof Error ? S.message : "Unknown error occurred";
      throw i.value = q, S;
    } finally {
      l.value = !1;
    }
  }
  async function v(R, I = 10) {
    l.value = !0, i.value = null;
    try {
      let S;
      return co() || (S = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: R, limit: I })
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
  async function p(R) {
    g.phase = "installing", g.nodesInstalled = [], g.installError = void 0, g.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return co(), await _(R);
    } catch (I) {
      const S = I instanceof Error ? I.message : "Failed to install nodes";
      throw g.installError = S, I;
    }
  }
  async function _(R) {
    var S;
    const I = await c(
      `/v2/comfygit/workflow/${R}/install`,
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
        const V = g.nodesToInstall[Y], E = q.get(V);
        g.nodeInstallProgress.completedNodes.push({
          node_id: V,
          success: !E,
          error: E
        });
      }
    }
    return g.nodesInstalled = I.nodes_installed, g.needsRestart = I.nodes_installed.length > 0, I.failed && I.failed.length > 0 && (g.installError = `${I.failed.length} package(s) failed to install`), I;
  }
  async function C(R, I, S) {
    w(), g.phase = "resolving", i.value = null;
    const q = Object.fromEntries(I), Y = Object.fromEntries(S);
    try {
      const V = await fetch(`/v2/comfygit/workflow/${R}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: q,
          model_choices: Y
        })
      });
      if (!V.ok)
        throw new Error(`Request failed: ${V.status}`);
      if (!V.body)
        throw new Error("No response body");
      const E = V.body.getReader(), T = new TextDecoder();
      let O = "";
      for (; ; ) {
        const { done: le, value: Z } = await E.read();
        if (le) break;
        O += T.decode(Z, { stream: !0 });
        const z = O.split(`

`);
        O = z.pop() || "";
        for (const A of z) {
          if (!A.trim()) continue;
          const U = A.split(`
`);
          let M = "", ee = "";
          for (const Q of U)
            Q.startsWith("event: ") ? M = Q.slice(7) : Q.startsWith("data: ") && (ee = Q.slice(6));
          if (ee)
            try {
              const Q = JSON.parse(ee);
              $(M, Q);
            } catch (Q) {
              console.warn("Failed to parse SSE event:", Q);
            }
        }
      }
    } catch (V) {
      const E = V instanceof Error ? V.message : "Unknown error occurred";
      throw i.value = E, g.error = E, g.phase = "error", V;
    }
  }
  function $(R, I) {
    switch (R) {
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
  function P(R, I) {
    const { addToQueue: S } = bo(), q = I.filter((Y) => Y.url && Y.target_path).map((Y) => ({
      workflow: R,
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
const Cp = { class: "resolution-stepper" }, xp = { class: "stepper-header" }, Sp = ["onClick"], Ip = {
  key: 0,
  class: "step-icon"
}, Ep = {
  key: 1,
  class: "step-number"
}, Tp = { class: "step-label" }, Pp = {
  key: 0,
  class: "step-connector"
}, Rp = { class: "stepper-content" }, Mp = /* @__PURE__ */ de({
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
        (a(!0), r(j, null, ge(e.steps, (g, w) => (a(), r("div", {
          key: g.id,
          class: Se(["step", {
            active: e.currentStep === g.id,
            completed: l(g.id),
            "in-progress": i(g.id),
            disabled: u(g.id)
          }]),
          onClick: (p) => d(g.id)
        }, [
          t("div", {
            class: Se(["step-indicator", c(g.id)])
          }, [
            l(g.id) ? (a(), r("span", Ip, "✓")) : (a(), r("span", Ep, f(w + 1), 1))
          ], 2),
          t("div", Tp, f(g.label), 1),
          w < e.steps.length - 1 ? (a(), r("div", Pp)) : y("", !0)
        ], 10, Sp))), 128))
      ]),
      t("div", Rp, [
        He(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Dp = /* @__PURE__ */ pe(Mp, [["__scopeId", "data-v-2a7b3af8"]]), Lp = /* @__PURE__ */ de({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = N(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), n = N(() => `confidence-${o.value}`), l = N(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (i, c) => (a(), r("span", {
      class: Se(["confidence-badge", n.value, e.size])
    }, f(l.value), 3));
  }
}), Nn = /* @__PURE__ */ pe(Lp, [["__scopeId", "data-v-17ec4b80"]]), Op = { class: "node-info" }, Ap = { class: "node-info-text" }, Up = { class: "item-body" }, Np = {
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
}, Qp = {
  key: 0,
  class: "searching-state"
}, Xp = { class: "options-list" }, Zp = ["onClick"], eg = ["name", "value"], tg = { class: "option-content" }, sg = { class: "option-header" }, og = { class: "option-package-id" }, ng = {
  key: 0,
  class: "option-description"
}, ag = { class: "option-meta" }, lg = {
  key: 0,
  class: "installed-badge"
}, ig = {
  key: 2,
  class: "unresolved-message"
}, rg = { class: "action-buttons" }, cg = /* @__PURE__ */ de({
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
    const i = N(() => !!o.choice);
    N(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), N(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.package_id;
    });
    const c = N(() => {
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
      t("div", Op, [
        t("span", Ap, [
          m[7] || (m[7] = b("Node type: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Se(["status-badge", c.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Up, [
        i.value ? (a(), r("div", Np, [
          x(Pe, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", zp, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          t("div", Fp, [
            (a(!0), r(j, null, ge(e.options, (v, g) => (a(), r("label", {
              key: v.package_id,
              class: Se(["option-card", { selected: e.selectedOptionIndex === g }]),
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
                  x(Nn, {
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
            x(Pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                b(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            x(Pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            x(Pe, {
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
        ])) : (a(), r("div", Jp, [
          e.isSearching ? (a(), r("div", Qp, [...m[13] || (m[13] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), r(j, { key: 1 }, [
            m[14] || (m[14] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", Xp, [
              (a(!0), r(j, null, ge(e.searchResults.slice(0, 5), (v, g) => (a(), r("label", {
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
                    x(Nn, {
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
            x(Pe, {
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
            x(Pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[16] || (m[16] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            x(Pe, {
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
}), ug = /* @__PURE__ */ pe(cg, [["__scopeId", "data-v-c2997d1d"]]), dg = { class: "item-navigator" }, fg = { class: "nav-item-info" }, mg = ["title"], vg = { class: "nav-controls" }, pg = { class: "nav-arrows" }, gg = ["disabled"], hg = ["disabled"], yg = { class: "nav-position" }, wg = /* @__PURE__ */ de({
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
}), Ir = /* @__PURE__ */ pe(wg, [["__scopeId", "data-v-74af7920"]]), _g = ["type", "value", "placeholder", "disabled"], kg = {
  key: 0,
  class: "base-input-error"
}, bg = /* @__PURE__ */ de({
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
          o[1] || (o[1] = Ht((n) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = Ht((n) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, _g),
      e.error ? (a(), r("span", kg, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Tt = /* @__PURE__ */ pe(bg, [["__scopeId", "data-v-9ba02cdc"]]), $g = { class: "node-resolution-step" }, Cg = {
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
}, Jg = { class: "node-manual-entry-modal" }, Qg = { class: "node-modal-body" }, Xg = { class: "node-modal-actions" }, Zg = /* @__PURE__ */ de({
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
    const $ = N(() => o.nodes[i.value]), P = N(() => o.nodes.filter((Te) => o.nodeChoices.has(Te.node_type)).length), R = N(() => $.value ? w.value.get($.value.node_type) || [] : []), I = N(() => $.value ? p.value.has($.value.node_type) : !1);
    yt($, async (Te) => {
      var Ee;
      Te && ((Ee = Te.options) != null && Ee.length || w.value.has(Te.node_type) || p.value.has(Te.node_type) || o.nodeChoices.has(Te.node_type) || await S(Te.node_type));
    }, { immediate: !0 });
    async function S(Te) {
      p.value.add(Te);
      try {
        const Ee = await l(Te, 5);
        w.value.set(Te, Ee);
      } catch {
        w.value.set(Te, []);
      } finally {
        p.value.delete(Te);
      }
    }
    const q = N(() => o.autoResolvedPackages.filter((Te) => !o.skippedPackages.has(Te.package_id)).length);
    function Y(Te) {
      return o.skippedPackages.has(Te);
    }
    function V(Te) {
      n("package-skip", Te);
    }
    const E = N(() => {
      var Ee;
      if (!$.value) return "not-found";
      const Te = o.nodeChoices.get($.value.node_type);
      if (Te)
        switch (Te.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (Ee = $.value.options) != null && Ee.length ? "ambiguous" : "not-found";
    }), T = N(() => {
      var Ee;
      if (!$.value) return;
      const Te = o.nodeChoices.get($.value.node_type);
      if (Te)
        switch (Te.action) {
          case "install":
            return Te.package_id ? `→ ${Te.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (Ee = $.value.options) != null && Ee.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function O(Te) {
      Te >= 0 && Te < o.nodes.length && (i.value = Te);
    }
    function le() {
      var Te;
      for (let Ee = i.value + 1; Ee < o.nodes.length; Ee++) {
        const H = o.nodes[Ee];
        if (!((Te = o.nodeChoices) != null && Te.has(H.node_type))) {
          O(Ee);
          return;
        }
      }
    }
    function Z() {
      $.value && (n("mark-optional", $.value.node_type), _t(() => le()));
    }
    function z() {
      $.value && (n("skip", $.value.node_type), _t(() => le()));
    }
    function A(Te) {
      $.value && (n("option-selected", $.value.node_type, Te), _t(() => le()));
    }
    function U() {
      $.value && n("clear-choice", $.value.node_type);
    }
    function M() {
      $.value && (d.value = $.value.node_type, v.value = R.value, c.value = !0, Ne(d.value));
    }
    function ee() {
      m.value = "", u.value = !0;
    }
    function Q() {
      c.value = !1, d.value = "", v.value = [];
    }
    function he() {
      u.value = !1, m.value = "";
    }
    let _e = null;
    function Re() {
      _e && clearTimeout(_e), _e = setTimeout(() => {
        Ne(d.value);
      }, 300);
    }
    async function Ne(Te) {
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
    function Ue(Te) {
      $.value && (n("manual-entry", $.value.node_type, Te.package_id), Q(), _t(() => le()));
    }
    function qe(Te) {
      $.value && (n("manual-entry", $.value.node_type, Te.package_id), _t(() => le()));
    }
    function ze() {
      !$.value || !m.value.trim() || (n("manual-entry", $.value.node_type, m.value.trim()), he(), _t(() => le()));
    }
    return (Te, Ee) => {
      var H, K;
      return a(), r("div", $g, [
        e.autoResolvedPackages.length > 0 ? (a(), r("div", Cg, [
          t("div", xg, [
            Ee[6] || (Ee[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", Sg, f(q.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", Ig, [
            (a(!0), r(j, null, ge(e.autoResolvedPackages, (ie) => (a(), r("div", {
              key: ie.package_id,
              class: "resolved-package-item"
            }, [
              t("div", Eg, [
                t("code", Tg, f(ie.package_id), 1),
                t("span", Pg, f(ie.node_types_count) + " node type" + f(ie.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", Rg, [
                Y(ie.package_id) ? (a(), r("span", Dg, " SKIPPED ")) : (a(), r("span", Mg, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (ye) => V(ie.package_id)
                }, f(Y(ie.package_id) ? "Include" : "Skip"), 9, Lg)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), r("div", Og)) : y("", !0),
        e.nodes.length > 0 ? (a(), r(j, { key: 2 }, [
          t("div", Ag, [
            Ee[7] || (Ee[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", Ug, f(P.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          $.value ? (a(), D(Ir, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": i.value,
            "total-items": e.nodes.length,
            onPrev: Ee[0] || (Ee[0] = (ie) => O(i.value - 1)),
            onNext: Ee[1] || (Ee[1] = (ie) => O(i.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          $.value ? (a(), r("div", Ng, [
            x(ug, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((H = $.value.options) != null && H.length),
              options: $.value.options,
              choice: (K = e.nodeChoices) == null ? void 0 : K.get($.value.node_type),
              status: E.value,
              "status-label": T.value,
              "search-results": R.value,
              "is-searching": I.value,
              onMarkOptional: Z,
              onSkip: z,
              onManualEntry: ee,
              onSearch: M,
              onOptionSelected: A,
              onClearChoice: U,
              onSearchResultSelected: qe
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), r("div", zg, [...Ee[8] || (Ee[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), D(Ct, { to: "body" }, [
          c.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: Ee[4] || (Ee[4] = it((ie) => _.value = !0, ["self"])),
            onMouseup: it(C, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: Ee[3] || (Ee[3] = (ie) => _.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                Ee[9] || (Ee[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: Q
                }, "✕")
              ]),
              t("div", Fg, [
                x(Tt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": Ee[2] || (Ee[2] = (ie) => d.value = ie),
                  placeholder: "Search by node type, package name...",
                  onInput: Re
                }, null, 8, ["modelValue"]),
                t("div", Bg, [
                  v.value.length > 0 ? (a(), r("div", Vg, [
                    (a(!0), r(j, null, ge(v.value, (ie) => (a(), r("div", {
                      key: ie.package_id,
                      class: "node-search-result-item",
                      onClick: (ye) => Ue(ie)
                    }, [
                      t("div", Gg, [
                        t("code", jg, f(ie.package_id), 1),
                        ie.match_confidence ? (a(), D(Nn, {
                          key: 0,
                          confidence: ie.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      ie.description ? (a(), r("div", Hg, f(ie.description), 1)) : y("", !0)
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
            onClick: it(he, ["self"])
          }, [
            t("div", Jg, [
              t("div", { class: "node-modal-header" }, [
                Ee[10] || (Ee[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: he
                }, "✕")
              ]),
              t("div", Qg, [
                x(Tt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": Ee[5] || (Ee[5] = (ie) => m.value = ie),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", Xg, [
                  x(Pe, {
                    variant: "secondary",
                    onClick: he
                  }, {
                    default: h(() => [...Ee[11] || (Ee[11] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  x(Pe, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: ze
                  }, {
                    default: h(() => [...Ee[12] || (Ee[12] = [
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
}), eh = /* @__PURE__ */ pe(Zg, [["__scopeId", "data-v-6d7f8125"]]), th = { class: "node-info" }, sh = { class: "node-info-text" }, oh = { class: "item-body" }, nh = {
  key: 0,
  class: "resolved-state"
}, ah = {
  key: 1,
  class: "multiple-options"
}, lh = { class: "options-list" }, ih = ["onClick"], rh = ["name", "value", "checked", "onChange"], ch = { class: "option-content" }, uh = { class: "option-header" }, dh = { class: "option-filename" }, fh = { class: "option-meta" }, mh = { class: "option-size" }, vh = { class: "option-category" }, ph = { class: "option-path" }, gh = { class: "action-buttons" }, hh = {
  key: 2,
  class: "unresolved"
}, yh = { class: "action-buttons" }, wh = /* @__PURE__ */ de({
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
    const o = e, n = s, l = N(() => !!o.choice);
    N(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), N(() => {
      var d, m;
      return ((m = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const i = N(() => {
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
      t("div", th, [
        t("span", sh, [
          m[7] || (m[7] = b("Used by: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Se(["status-badge", i.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", oh, [
        l.value ? (a(), r("div", nh, [
          x(Pe, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", ah, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", lh, [
            (a(!0), r(j, null, ge(e.options, (v, g) => (a(), r("label", {
              key: v.model.hash,
              class: Se(["option-card", { selected: e.selectedOptionIndex === g }]),
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
                  x(Nn, {
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
            x(Pe, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            x(Pe, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            x(Pe, {
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
        ])) : (a(), r("div", hh, [
          m[16] || (m[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", yh, [
            x(Pe, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: h(() => [...m[13] || (m[13] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            x(Pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[14] || (m[14] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            x(Pe, {
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
}), _h = /* @__PURE__ */ pe(wh, [["__scopeId", "data-v-8a82fefa"]]), kh = { class: "model-resolution-step" }, bh = { class: "step-header" }, $h = { class: "step-info" }, Ch = { class: "step-title" }, xh = { class: "step-description" }, Sh = { class: "stat-badge" }, Ih = {
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
}, Bh = { class: "model-download-url-modal" }, Vh = { class: "model-modal-body" }, Wh = { class: "model-input-group" }, Gh = { class: "model-input-group" }, jh = { class: "model-modal-actions" }, Hh = /* @__PURE__ */ de({
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
      var he;
      return Q && ((he = o[Q]) == null ? void 0 : he[0]) || null;
    }
    const l = e, i = s, c = k(0), u = k(!1), d = k(!1), m = k(""), v = k(""), g = k(""), w = k([]), p = k(!1), _ = N(() => l.models[c.value]), C = N(() => l.models.some((Q) => Q.is_download_intent)), $ = N(() => l.models.filter(
      (Q) => l.modelChoices.has(Q.filename) || Q.is_download_intent
    ).length), P = N(() => {
      var he;
      if (!_.value) return "";
      const Q = n((he = _.value.reference) == null ? void 0 : he.node_type);
      return Q ? `${Q}/${_.value.filename}` : "";
    }), R = N(() => {
      var he;
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
      return _.value.is_download_intent ? "download" : (he = _.value.options) != null && he.length ? "ambiguous" : "not-found";
    }), I = N(() => {
      var he, _e;
      if (!_.value) return;
      const Q = l.modelChoices.get(_.value.filename);
      if (Q)
        switch (Q.action) {
          case "select":
            return (he = Q.selected_model) != null && he.filename ? `→ ${Q.selected_model.filename}` : "Selected";
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
    function S(Q) {
      Q >= 0 && Q < l.models.length && (c.value = Q);
    }
    function q() {
      var Q;
      for (let he = c.value + 1; he < l.models.length; he++) {
        const _e = l.models[he];
        if (!_e.is_download_intent && !((Q = l.modelChoices) != null && Q.has(_e.filename))) {
          S(he);
          return;
        }
      }
    }
    function Y() {
      _.value && (i("mark-optional", _.value.filename), _t(() => q()));
    }
    function V() {
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
    function z() {
      d.value = !1, v.value = "", g.value = "";
    }
    function A() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function U(Q) {
      _.value && (Z(), _t(() => q()));
    }
    function M() {
      !_.value || !v.value.trim() || (i("download-url", _.value.filename, v.value.trim(), g.value.trim() || void 0), z(), _t(() => q()));
    }
    function ee(Q) {
      if (!Q) return "Unknown";
      const he = Q / (1024 * 1024 * 1024);
      return he >= 1 ? `${he.toFixed(2)} GB` : `${(Q / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (Q, he) => {
      var _e, Re, Ne;
      return a(), r("div", kh, [
        t("div", bh, [
          t("div", $h, [
            t("h3", Ch, f(C.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", xh, f(C.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", Sh, f($.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), D(Ir, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: he[0] || (he[0] = (Ue) => S(c.value - 1)),
          onNext: he[1] || (he[1] = (Ue) => S(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), r("div", Ih, [
          x(_h, {
            filename: _.value.filename,
            "node-type": ((_e = _.value.reference) == null ? void 0 : _e.node_type) || "Unknown",
            "has-multiple-options": !!((Re = _.value.options) != null && Re.length),
            options: _.value.options,
            choice: (Ne = e.modelChoices) == null ? void 0 : Ne.get(_.value.filename),
            status: R.value,
            "status-label": I.value,
            onMarkOptional: Y,
            onSkip: V,
            onDownloadUrl: le,
            onSearch: O,
            onOptionSelected: E,
            onClearChoice: T
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), r("div", Eh, [...he[5] || (he[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (a(), D(Ct, { to: "body" }, [
          u.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: it(Z, ["self"])
          }, [
            t("div", Th, [
              t("div", { class: "model-modal-header" }, [
                he[6] || (he[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: Z
                }, "✕")
              ]),
              t("div", Ph, [
                x(Tt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": he[2] || (he[2] = (Ue) => m.value = Ue),
                  placeholder: "Search by filename, category...",
                  onInput: A
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), r("div", Rh, [
                  (a(!0), r(j, null, ge(w.value, (Ue) => (a(), r("div", {
                    key: Ue.hash,
                    class: "model-search-result-item",
                    onClick: (qe) => U()
                  }, [
                    t("div", Dh, [
                      t("code", Lh, f(Ue.filename), 1)
                    ]),
                    t("div", Oh, [
                      t("span", Ah, f(Ue.category), 1),
                      t("span", Uh, f(ee(Ue.size)), 1)
                    ]),
                    Ue.relative_path ? (a(), r("div", Nh, f(Ue.relative_path), 1)) : y("", !0)
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
            onClick: it(z, ["self"])
          }, [
            t("div", Bh, [
              t("div", { class: "model-modal-header" }, [
                he[7] || (he[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: z
                }, "✕")
              ]),
              t("div", Vh, [
                t("div", Wh, [
                  he[8] || (he[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  x(Tt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": he[3] || (he[3] = (Ue) => v.value = Ue),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", Gh, [
                  he[9] || (he[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  x(Tt, {
                    modelValue: g.value,
                    "onUpdate:modelValue": he[4] || (he[4] = (Ue) => g.value = Ue),
                    placeholder: P.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", jh, [
                  x(Pe, {
                    variant: "secondary",
                    onClick: z
                  }, {
                    default: h(() => [...he[10] || (he[10] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  x(Pe, {
                    variant: "primary",
                    disabled: !v.value.trim() || !g.value.trim(),
                    onClick: M
                  }, {
                    default: h(() => [...he[11] || (he[11] = [
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
}), Kh = /* @__PURE__ */ pe(Hh, [["__scopeId", "data-v-5c700bfa"]]), qh = { class: "applying-step" }, Yh = {
  key: 0,
  class: "phase-content"
}, Jh = {
  key: 1,
  class: "phase-content"
}, Qh = { class: "phase-description" }, Xh = { class: "overall-progress" }, Zh = { class: "progress-bar" }, ey = { class: "progress-label" }, ty = { class: "install-list" }, sy = { class: "install-icon" }, oy = { key: 0 }, ny = {
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
}, by = { class: "error-message" }, $y = /* @__PURE__ */ de({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const s = e, o = N(() => {
      var m, v;
      const u = ((m = s.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || s.progress.nodesToInstall.length;
      if (!u) return 0;
      const d = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(d / u * 100);
    }), n = N(() => {
      var u;
      return ((u = s.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((d) => !d.success)) || [];
    }), l = N(() => n.value.length > 0);
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
          t("p", Qh, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", Xh, [
            t("div", Zh, [
              t("div", {
                class: "progress-fill",
                style: qt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", ey, f(((g = e.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", ty, [
            (a(!0), r(j, null, ge(e.progress.nodesToInstall, (p, _) => (a(), r("div", {
              key: p,
              class: Se(["install-item", i(p, _)])
            }, [
              t("span", sy, [
                i(p, _) === "pending" ? (a(), r("span", oy, "○")) : i(p, _) === "installing" ? (a(), r("span", ny, "◌")) : i(p, _) === "complete" ? (a(), r("span", ay, "✓")) : i(p, _) === "failed" ? (a(), r("span", ly, "✗")) : y("", !0)
              ]),
              t("code", null, f(p), 1),
              c(p) ? (a(), r("span", iy, f(c(p)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), r("div", ry, [
          t("div", cy, [
            t("span", {
              class: Se(["phase-icon", l.value ? "warning" : "success"])
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
              (a(!0), r(j, null, ge(n.value, (p) => (a(), r("div", {
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
}), Cy = /* @__PURE__ */ pe($y, [["__scopeId", "data-v-5efaae58"]]), xy = {
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
}, Qy = { class: "stat-count" }, Xy = {
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
}, Y1 = { class: "section-title" }, J1 = { class: "review-items" }, Q1 = { class: "item-name" }, X1 = { class: "item-choice" }, Z1 = {
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
}, i0 = /* @__PURE__ */ de({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, n = s, { analyzeWorkflow: l, applyResolution: i, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: m } = Sr(), { loadPendingDownloads: v } = bo(), { openFileLocation: g } = tt(), w = k(null), p = k(!1), _ = k(!1), C = k(null), $ = k("analysis"), P = k([]), R = k(/* @__PURE__ */ new Map()), I = k(/* @__PURE__ */ new Map()), S = k(/* @__PURE__ */ new Set()), q = N(() => {
      const G = [
        { id: "analysis", label: "Analysis" }
      ];
      return (V.value || O.value) && G.push({ id: "nodes", label: "Nodes" }), E.value && G.push({ id: "models", label: "Models" }), G.push({ id: "review", label: "Review" }), $.value === "applying" && G.push({ id: "applying", label: "Applying" }), G;
    }), Y = N(() => w.value ? w.value.stats.needs_user_input : !1), V = N(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), E = N(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), T = N(() => w.value ? w.value.stats.download_intents > 0 : !1), O = N(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), le = N(() => w.value ? w.value.nodes.resolved.length : 0), Z = N(() => w.value ? w.value.models.resolved.filter((G) => G.has_category_mismatch) : []), z = N(() => Z.value.length > 0), A = N(() => V.value || O.value ? "nodes" : E.value ? "models" : "review"), U = N(() => {
      if (!w.value) return [];
      const G = w.value.nodes.resolved.filter((ue) => !ue.is_installed), W = /* @__PURE__ */ new Set();
      return G.filter((ue) => W.has(ue.package.package_id) ? !1 : (W.add(ue.package.package_id), !0));
    }), M = N(() => {
      if (!w.value) return [];
      const G = w.value.nodes.resolved.filter((ue) => !ue.is_installed), W = /* @__PURE__ */ new Map();
      for (const ue of G) {
        const Be = W.get(ue.package.package_id);
        Be ? Be.node_types_count++ : W.set(ue.package.package_id, {
          package_id: ue.package.package_id,
          title: ue.package.title,
          node_types_count: 1
        });
      }
      return Array.from(W.values());
    }), ee = N(() => U.value.filter((G) => !S.value.has(G.package.package_id))), Q = N(() => w.value ? w.value.models.resolved.filter(
      (G) => G.match_type === "download_intent" || G.match_type === "property_download_intent"
    ).map((G) => ({
      filename: G.reference.widget_value,
      reference: G.reference,
      is_download_intent: !0,
      resolved_model: G.model,
      download_source: G.download_source,
      target_path: G.target_path
    })) : []), he = N(() => {
      if (!w.value) return [];
      const G = w.value.nodes.unresolved.map((ue) => ({
        node_type: ue.reference.node_type,
        reason: ue.reason,
        is_unresolved: !0,
        options: void 0
      })), W = w.value.nodes.ambiguous.map((ue) => ({
        node_type: ue.reference.node_type,
        has_multiple_options: !0,
        options: ue.options.map((Be) => ({
          package_id: Be.package.package_id,
          title: Be.package.title,
          match_confidence: Be.match_confidence,
          match_type: Be.match_type,
          is_installed: Be.is_installed
        }))
      }));
      return [...G, ...W];
    }), _e = N(() => {
      if (!w.value) return [];
      const G = w.value.models.unresolved.map((ue) => ({
        filename: ue.reference.widget_value,
        reference: ue.reference,
        reason: ue.reason,
        is_unresolved: !0,
        options: void 0
      })), W = w.value.models.ambiguous.map((ue) => ({
        filename: ue.reference.widget_value,
        reference: ue.reference,
        has_multiple_options: !0,
        options: ue.options.map((Be) => ({
          model: Be.model,
          match_confidence: Be.match_confidence,
          match_type: Be.match_type,
          has_download_source: Be.has_download_source
        }))
      }));
      return [...G, ...W];
    }), Re = N(() => {
      const G = _e.value, W = Q.value.map((ue) => ({
        filename: ue.filename,
        reference: ue.reference,
        is_download_intent: !0,
        resolved_model: ue.resolved_model,
        download_source: ue.download_source,
        target_path: ue.target_path,
        options: void 0
      }));
      return [...G, ...W];
    }), Ne = N(() => Q.value.filter((G) => {
      const W = I.value.get(G.filename);
      return W ? W.action === "download" : !0;
    }).map((G) => ({
      filename: G.filename,
      url: G.download_source,
      target_path: G.target_path
    })));
    function Ue(G, W = 50) {
      return G.length <= W ? G : G.slice(0, W - 3) + "...";
    }
    const qe = N(() => {
      let G = ee.value.length;
      for (const W of R.value.values())
        W.action === "install" && G++;
      for (const W of I.value.values())
        W.action === "select" && G++;
      return G;
    }), ze = N(() => {
      let G = 0;
      for (const W of I.value.values())
        W.action === "download" && G++;
      for (const W of Q.value)
        I.value.get(W.filename) || G++;
      return G;
    }), Te = N(() => {
      let G = 0;
      for (const W of R.value.values())
        W.action === "optional" && G++;
      for (const W of I.value.values())
        W.action === "optional" && G++;
      return G;
    }), Ee = N(() => {
      let G = S.value.size;
      for (const W of R.value.values())
        W.action === "skip" && G++;
      for (const W of I.value.values())
        W.action === "skip" && G++;
      for (const W of he.value)
        R.value.has(W.node_type) || G++;
      for (const W of _e.value)
        I.value.has(W.filename) || G++;
      return G;
    }), H = N(() => {
      const G = {};
      if (G.analysis = { resolved: 1, total: 1 }, V.value) {
        const W = he.value.length, ue = he.value.filter(
          (Be) => R.value.has(Be.node_type)
        ).length;
        G.nodes = { resolved: ue, total: W };
      }
      if (E.value) {
        const W = Re.value.length, ue = Re.value.filter(
          (Be) => I.value.has(Be.filename) || Be.is_download_intent
        ).length;
        G.models = { resolved: ue, total: W };
      }
      if (G.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const W = d.totalFiles || 1, ue = d.completedFiles.length;
        G.applying = { resolved: ue, total: W };
      }
      return G;
    });
    function K(G) {
      $.value = G;
    }
    function ie() {
      const G = q.value.findIndex((W) => W.id === $.value);
      G > 0 && ($.value = q.value[G - 1].id);
    }
    function ye() {
      const G = q.value.findIndex((W) => W.id === $.value);
      G < q.value.length - 1 && ($.value = q.value[G + 1].id);
    }
    async function L() {
      p.value = !0, C.value = null;
      try {
        w.value = await l(o.workflowName);
      } catch (G) {
        C.value = G instanceof Error ? G.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function B() {
      P.value.includes("analysis") || P.value.push("analysis"), V.value || O.value ? $.value = "nodes" : E.value ? $.value = "models" : $.value = "review";
    }
    function se(G) {
      R.value.set(G, { action: "optional" });
    }
    function ne(G) {
      R.value.set(G, { action: "skip" });
    }
    function fe(G, W) {
      var Be;
      const ue = he.value.find((Xe) => Xe.node_type === G);
      (Be = ue == null ? void 0 : ue.options) != null && Be[W] && R.value.set(G, {
        action: "install",
        package_id: ue.options[W].package_id
      });
    }
    function me(G, W) {
      R.value.set(G, {
        action: "install",
        package_id: W
      });
    }
    function Ce(G) {
      R.value.delete(G);
    }
    function xe(G) {
      S.value.has(G) ? S.value.delete(G) : S.value.add(G);
    }
    function re(G) {
      I.value.set(G, { action: "optional" });
    }
    function ve(G) {
      I.value.set(G, { action: "skip" });
    }
    function Le(G, W) {
      var Be;
      const ue = _e.value.find((Xe) => Xe.filename === G);
      (Be = ue == null ? void 0 : ue.options) != null && Be[W] && I.value.set(G, {
        action: "select",
        selected_model: ue.options[W].model
      });
    }
    function Ie(G, W, ue) {
      I.value.set(G, {
        action: "download",
        url: W,
        target_path: ue
      });
    }
    function oe(G) {
      I.value.delete(G);
    }
    async function X(G) {
      try {
        await g(G);
      } catch (W) {
        C.value = W instanceof Error ? W.message : "Failed to open file location";
      }
    }
    async function Me() {
      var G;
      _.value = !0, C.value = null, m(), d.phase = "resolving", $.value = "applying";
      try {
        const W = await i(o.workflowName, R.value, I.value, S.value);
        W.models_to_download && W.models_to_download.length > 0 && u(o.workflowName, W.models_to_download);
        const ue = [
          ...W.nodes_to_install || [],
          ...ee.value.map((Xe) => Xe.package.package_id)
        ];
        d.nodesToInstall = [...new Set(ue)], d.nodesToInstall.length > 0 && await c(o.workflowName), d.phase = "complete", await v();
        const Be = d.installError || ((G = d.nodeInstallProgress) == null ? void 0 : G.completedNodes.some((Xe) => !Xe.success));
        !d.needsRestart && !Be && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (W) {
        C.value = W instanceof Error ? W.message : "Failed to apply resolution", d.error = C.value, d.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function ke() {
      n("refresh"), n("restart"), n("close");
    }
    async function we() {
      var W;
      const G = ((W = d.nodeInstallProgress) == null ? void 0 : W.completedNodes.filter((ue) => !ue.success).map((ue) => ue.node_id)) || [];
      if (G.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: G.length
        }, d.nodesToInstall = G, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(o.workflowName), d.phase = "complete";
        } catch (ue) {
          d.error = ue instanceof Error ? ue.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return Qe(L), (G, W) => (a(), D(ft, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: C.value || void 0,
      "fixed-height": !0,
      onClose: W[1] || (W[1] = (ue) => n("close"))
    }, {
      body: h(() => [
        p.value && !w.value ? (a(), r("div", xy, [...W[2] || (W[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (a(), r("div", Sy, [
          x(Dp, {
            steps: q.value,
            "current-step": $.value,
            "completed-steps": P.value,
            "step-stats": H.value,
            onStepChange: K
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (a(), r("div", Iy, [
            t("div", Ey, [
              t("div", Ty, [
                W[3] || (W[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", Py, " Found " + f(w.value.stats.total_nodes) + " nodes and " + f(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", Ry, [
                t("div", My, [
                  W[12] || (W[12] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", Dy, [
                    le.value > 0 ? (a(), r("div", Ly, [
                      W[4] || (W[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Oy, f(le.value), 1),
                      W[5] || (W[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (a(), r("div", Ay, [
                      W[6] || (W[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Uy, f(w.value.stats.packages_needing_installation), 1),
                      W[7] || (W[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (a(), r("div", Ny, [
                      W[8] || (W[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", zy, f(w.value.nodes.ambiguous.length), 1),
                      W[9] || (W[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (a(), r("div", Fy, [
                      W[10] || (W[10] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", By, f(w.value.nodes.unresolved.length), 1),
                      W[11] || (W[11] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", Vy, [
                  W[23] || (W[23] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", Wy, [
                    t("div", Gy, [
                      W[13] || (W[13] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", jy, f(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      W[14] || (W[14] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (a(), r("div", Hy, [
                      W[15] || (W[15] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Ky, f(w.value.stats.download_intents), 1),
                      W[16] || (W[16] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    z.value ? (a(), r("div", qy, [
                      W[17] || (W[17] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", Yy, f(Z.value.length), 1),
                      W[18] || (W[18] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (a(), r("div", Jy, [
                      W[19] || (W[19] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", Qy, f(w.value.models.ambiguous.length), 1),
                      W[20] || (W[20] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (a(), r("div", Xy, [
                      W[21] || (W[21] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", Zy, f(w.value.models.unresolved.length), 1),
                      W[22] || (W[22] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              Y.value ? (a(), r("div", e1, [
                W[24] || (W[24] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", t1, f(he.value.length + _e.value.length) + " items need your input", 1)
              ])) : O.value ? (a(), r("div", s1, [
                W[25] || (W[25] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", o1, f(w.value.stats.packages_needing_installation) + " package" + f(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(w.value.stats.nodes_needing_installation) + " node type" + f(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(T.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : T.value ? (a(), r("div", n1, [
                W[26] || (W[26] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", a1, f(w.value.stats.download_intents) + " model" + f(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : z.value ? (a(), r("div", l1, [
                W[27] || (W[27] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", i1, f(Z.value.length) + " model" + f(Z.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), r("div", r1, [...W[28] || (W[28] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              z.value ? (a(), r("div", c1, [
                W[31] || (W[31] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", u1, [
                  (a(!0), r(j, null, ge(Z.value, (ue) => {
                    var Be, Xe;
                    return a(), r("div", {
                      key: ue.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", d1, f(ue.actual_category) + "/" + f((Be = ue.model) == null ? void 0 : Be.filename), 1),
                      W[30] || (W[30] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", f1, f((Xe = ue.expected_categories) == null ? void 0 : Xe[0]) + "/", 1),
                      ue.file_path ? (a(), D(Pe, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (vt) => X(ue.file_path)
                      }, {
                        default: h(() => [...W[29] || (W[29] = [
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
          $.value === "nodes" ? (a(), D(eh, {
            key: 1,
            nodes: he.value,
            "node-choices": R.value,
            "auto-resolved-packages": M.value,
            "skipped-packages": S.value,
            onMarkOptional: se,
            onSkip: ne,
            onOptionSelected: fe,
            onManualEntry: me,
            onClearChoice: Ce,
            onPackageSkip: xe
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          $.value === "models" ? (a(), D(Kh, {
            key: 2,
            models: Re.value,
            "model-choices": I.value,
            onMarkOptional: re,
            onSkip: ve,
            onOptionSelected: Le,
            onDownloadUrl: Ie,
            onClearChoice: oe
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          $.value === "review" ? (a(), r("div", m1, [
            t("div", v1, [
              W[37] || (W[37] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", p1, [
                t("div", g1, [
                  t("span", h1, f(qe.value), 1),
                  W[32] || (W[32] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", y1, [
                  t("span", w1, f(ze.value), 1),
                  W[33] || (W[33] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", _1, [
                  t("span", k1, f(Te.value), 1),
                  W[34] || (W[34] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", b1, [
                  t("span", $1, f(Ee.value), 1),
                  W[35] || (W[35] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              M.value.length > 0 ? (a(), r("div", C1, [
                t("h4", x1, "Node Packages (" + f(M.value.length) + ")", 1),
                t("div", S1, [
                  (a(!0), r(j, null, ge(M.value, (ue) => (a(), r("div", {
                    key: ue.package_id,
                    class: "review-item"
                  }, [
                    t("code", I1, f(ue.package_id), 1),
                    t("div", E1, [
                      S.value.has(ue.package_id) ? (a(), r("span", P1, "Skipped")) : (a(), r("span", T1, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              he.value.length > 0 ? (a(), r("div", R1, [
                t("h4", M1, "Node Choices (" + f(he.value.length) + ")", 1),
                t("div", D1, [
                  (a(!0), r(j, null, ge(he.value, (ue) => {
                    var Be, Xe, vt, at;
                    return a(), r("div", {
                      key: ue.node_type,
                      class: "review-item"
                    }, [
                      t("code", L1, f(ue.node_type), 1),
                      t("div", O1, [
                        R.value.has(ue.node_type) ? (a(), r(j, { key: 0 }, [
                          ((Be = R.value.get(ue.node_type)) == null ? void 0 : Be.action) === "install" ? (a(), r("span", A1, f((Xe = R.value.get(ue.node_type)) == null ? void 0 : Xe.package_id), 1)) : ((vt = R.value.get(ue.node_type)) == null ? void 0 : vt.action) === "optional" ? (a(), r("span", U1, " Optional ")) : ((at = R.value.get(ue.node_type)) == null ? void 0 : at.action) === "skip" ? (a(), r("span", N1, " Skip ")) : y("", !0)
                        ], 64)) : (a(), r("span", z1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Ne.value.length > 0 ? (a(), r("div", F1, [
                t("h4", B1, "Models to Download (" + f(Ne.value.length) + ")", 1),
                t("div", V1, [
                  (a(!0), r(j, null, ge(Ne.value, (ue) => (a(), r("div", {
                    key: ue.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", W1, [
                      t("code", G1, f(ue.filename), 1),
                      t("div", j1, [
                        t("span", H1, "→ " + f(ue.target_path), 1),
                        ue.url ? (a(), r("span", {
                          key: 0,
                          class: "download-url",
                          title: ue.url
                        }, f(Ue(ue.url)), 9, K1)) : y("", !0)
                      ])
                    ]),
                    W[36] || (W[36] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Re.value.length > 0 ? (a(), r("div", q1, [
                t("h4", Y1, "Models (" + f(Re.value.length) + ")", 1),
                t("div", J1, [
                  (a(!0), r(j, null, ge(Re.value, (ue) => {
                    var Be, Xe, vt, at, ut, Mt, Ft;
                    return a(), r("div", {
                      key: ue.filename,
                      class: "review-item"
                    }, [
                      t("code", Q1, f(ue.filename), 1),
                      t("div", X1, [
                        I.value.has(ue.filename) ? (a(), r(j, { key: 0 }, [
                          ((Be = I.value.get(ue.filename)) == null ? void 0 : Be.action) === "select" ? (a(), r("span", Z1, f((vt = (Xe = I.value.get(ue.filename)) == null ? void 0 : Xe.selected_model) == null ? void 0 : vt.filename), 1)) : ((at = I.value.get(ue.filename)) == null ? void 0 : at.action) === "download" ? (a(), r("span", e0, " Download ")) : ((ut = I.value.get(ue.filename)) == null ? void 0 : ut.action) === "optional" ? (a(), r("span", t0, " Optional ")) : ((Mt = I.value.get(ue.filename)) == null ? void 0 : Mt.action) === "skip" ? (a(), r("span", s0, " Skip ")) : ((Ft = I.value.get(ue.filename)) == null ? void 0 : Ft.action) === "cancel_download" ? (a(), r("span", o0, " Cancel Download ")) : y("", !0)
                        ], 64)) : ue.is_download_intent ? (a(), r("span", n0, " Pending Download ")) : (a(), r("span", a0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              U.value.length === 0 && he.value.length === 0 && Re.value.length === 0 ? (a(), r("div", l0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          $.value === "applying" ? (a(), D(Cy, {
            key: 4,
            progress: Ve(d),
            onRestart: ke,
            onRetryFailed: we
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        $.value !== "analysis" && $.value !== "applying" ? (a(), D(Pe, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: ie
        }, {
          default: h(() => [...W[38] || (W[38] = [
            b(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        W[41] || (W[41] = t("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || Ve(d).phase === "complete" || Ve(d).phase === "error" ? (a(), D(Pe, {
          key: 1,
          variant: "secondary",
          onClick: W[0] || (W[0] = (ue) => n("close"))
        }, {
          default: h(() => [
            b(f(Ve(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "analysis" ? (a(), D(Pe, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: B
        }, {
          default: h(() => [
            b(f(A.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        $.value === "nodes" ? (a(), D(Pe, {
          key: 3,
          variant: "primary",
          onClick: ye
        }, {
          default: h(() => [
            b(f(E.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "models" ? (a(), D(Pe, {
          key: 4,
          variant: "primary",
          onClick: ye
        }, {
          default: h(() => [...W[39] || (W[39] = [
            b(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        $.value === "review" ? (a(), D(Pe, {
          key: 5,
          variant: "primary",
          disabled: _.value,
          loading: _.value,
          onClick: Me
        }, {
          default: h(() => [...W[40] || (W[40] = [
            b(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), r0 = /* @__PURE__ */ pe(i0, [["__scopeId", "data-v-40d8d5a8"]]), c0 = { class: "search-input-wrapper" }, u0 = ["value", "placeholder"], d0 = /* @__PURE__ */ de({
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
}), f0 = /* @__PURE__ */ pe(d0, [["__scopeId", "data-v-266f857a"]]), m0 = { class: "search-bar" }, v0 = /* @__PURE__ */ de({
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
}), $o = /* @__PURE__ */ pe(v0, [["__scopeId", "data-v-3d51bbfd"]]), p0 = { class: "section-group" }, g0 = {
  key: 0,
  class: "section-content"
}, h0 = /* @__PURE__ */ de({
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
    return (c, u) => (a(), r("section", p0, [
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
      !e.collapsible || l.value ? (a(), r("div", g0, [
        He(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), lt = /* @__PURE__ */ pe(h0, [["__scopeId", "data-v-c48e33ed"]]), y0 = { class: "item-header" }, w0 = {
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
}, x0 = /* @__PURE__ */ de({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, n = N(() => o.status ? `status-${o.status}` : "");
    return (l, i) => (a(), r("div", {
      class: Se(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: i[0] || (i[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      t("div", y0, [
        l.$slots.icon ? (a(), r("span", w0, [
          He(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", _0, [
          l.$slots.title ? (a(), r("div", k0, [
            He(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), r("div", b0, [
            He(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), r("div", $0, [
        He(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), r("div", C0, [
        He(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Et = /* @__PURE__ */ pe(x0, [["__scopeId", "data-v-cc435e0e"]]), S0 = { class: "loading-state" }, I0 = { class: "loading-message" }, E0 = /* @__PURE__ */ de({
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
}), Ps = /* @__PURE__ */ pe(E0, [["__scopeId", "data-v-ad8436c9"]]), T0 = { class: "error-state" }, P0 = { class: "error-message" }, R0 = /* @__PURE__ */ de({
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
      e.retry ? (a(), D(ce, {
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
}), Rs = /* @__PURE__ */ pe(R0, [["__scopeId", "data-v-5397be48"]]), M0 = /* @__PURE__ */ de({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getWorkflows: l } = tt(), i = k([]), c = k(!1), u = k(null), d = k(""), m = k(!0), v = k(!1), g = k(!1), w = k(!1), p = k(null), _ = N(
      () => i.value.filter((M) => M.status === "broken")
    ), C = N(
      () => i.value.filter((M) => M.status === "new")
    ), $ = N(
      () => i.value.filter((M) => M.status === "modified")
    ), P = N(
      () => i.value.filter((M) => M.status === "synced")
    ), R = N(() => {
      if (!d.value.trim()) return i.value;
      const M = d.value.toLowerCase();
      return i.value.filter((ee) => ee.name.toLowerCase().includes(M));
    }), I = N(
      () => _.value.filter(
        (M) => !d.value.trim() || M.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), S = N(
      () => C.value.filter(
        (M) => !d.value.trim() || M.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), q = N(
      () => $.value.filter(
        (M) => !d.value.trim() || M.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), Y = N(
      () => P.value.filter(
        (M) => !d.value.trim() || M.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), V = N(
      () => v.value ? Y.value : Y.value.slice(0, 5)
    );
    async function E(M = !1) {
      c.value = !0, u.value = null;
      try {
        i.value = await l(M);
      } catch (ee) {
        u.value = ee instanceof Error ? ee.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    s({ loadWorkflows: E });
    function T(M) {
      p.value = M, g.value = !0;
    }
    function O(M) {
      p.value = M, w.value = !0;
    }
    function le() {
      n("refresh");
    }
    async function Z() {
      w.value = !1, await E(!0);
    }
    async function z() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function A(M) {
      const ee = [];
      return M.missing_nodes > 0 && ee.push(`${M.missing_nodes} missing node${M.missing_nodes > 1 ? "s" : ""}`), M.missing_models > 0 && ee.push(`${M.missing_models} missing model${M.missing_models > 1 ? "s" : ""}`), M.models_with_category_mismatch && M.models_with_category_mismatch > 0 && ee.push(`${M.models_with_category_mismatch} model${M.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), M.pending_downloads && M.pending_downloads > 0 && ee.push(`${M.pending_downloads} pending download${M.pending_downloads > 1 ? "s" : ""}`), ee.length > 0 ? ee.join(", ") : "Has issues";
    }
    function U(M) {
      const ee = M.sync_state === "new" ? "New" : M.sync_state === "modified" ? "Modified" : M.sync_state === "synced" ? "Synced" : M.sync_state;
      return M.has_path_sync_issues && M.models_needing_path_sync && M.models_needing_path_sync > 0 ? `${M.models_needing_path_sync} model path${M.models_needing_path_sync > 1 ? "s" : ""} need${M.models_needing_path_sync === 1 ? "s" : ""} sync` : ee || "Unknown";
    }
    return Qe(E), (M, ee) => (a(), r(j, null, [
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
          c.value ? (a(), D(Ps, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (a(), D(Rs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            I.value.length ? (a(), D(lt, {
              key: 0,
              title: "BROKEN",
              count: I.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, ge(I.value, (Q) => (a(), D(Et, {
                  key: Q.name,
                  status: "broken"
                }, {
                  icon: h(() => [...ee[7] || (ee[7] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(Q.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(A(Q)), 1)
                  ]),
                  actions: h(() => [
                    x(ce, {
                      variant: "primary",
                      size: "sm",
                      onClick: (he) => O(Q.name)
                    }, {
                      default: h(() => [...ee[8] || (ee[8] = [
                        b(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (he) => T(Q.name)
                    }, {
                      default: h(() => [...ee[9] || (ee[9] = [
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
            S.value.length ? (a(), D(lt, {
              key: 1,
              title: "NEW",
              count: S.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, ge(S.value, (Q) => (a(), D(Et, {
                  key: Q.name,
                  status: Q.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    b(f(Q.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    b(f(Q.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(U(Q)), 1)
                  ]),
                  actions: h(() => [
                    x(ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (he) => T(Q.name)
                    }, {
                      default: h(() => [...ee[10] || (ee[10] = [
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
            q.value.length ? (a(), D(lt, {
              key: 2,
              title: "MODIFIED",
              count: q.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, ge(q.value, (Q) => (a(), D(Et, {
                  key: Q.name,
                  status: Q.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...ee[11] || (ee[11] = [
                    b("⚡", -1)
                  ])]),
                  title: h(() => [
                    b(f(Q.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(U(Q)), 1)
                  ]),
                  actions: h(() => [
                    x(ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (he) => T(Q.name)
                    }, {
                      default: h(() => [...ee[12] || (ee[12] = [
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
            Y.value.length ? (a(), D(lt, {
              key: 3,
              title: "SYNCED",
              count: Y.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: ee[2] || (ee[2] = (Q) => m.value = Q)
            }, {
              default: h(() => [
                (a(!0), r(j, null, ge(V.value, (Q) => (a(), D(Et, {
                  key: Q.name,
                  status: Q.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    b(f(Q.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    b(f(Q.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(U(Q)), 1)
                  ]),
                  actions: h(() => [
                    x(ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (he) => T(Q.name)
                    }, {
                      default: h(() => [...ee[13] || (ee[13] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && Y.value.length > 5 ? (a(), D(ce, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: ee[1] || (ee[1] = (Q) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    b(" View all " + f(Y.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            R.value.length ? y("", !0) : (a(), D(ns, {
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
        onClose: ee[3] || (ee[3] = (Q) => g.value = !1),
        onResolve: ee[4] || (ee[4] = (Q) => O(p.value)),
        onRefresh: ee[5] || (ee[5] = (Q) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (a(), D(r0, {
        key: 1,
        "workflow-name": p.value,
        onClose: Z,
        onInstall: le,
        onRefresh: ee[6] || (ee[6] = (Q) => n("refresh")),
        onRestart: z
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), D0 = /* @__PURE__ */ pe(M0, [["__scopeId", "data-v-fa3f076e"]]), L0 = /* @__PURE__ */ de({
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
}), an = /* @__PURE__ */ pe(L0, [["__scopeId", "data-v-ccb7816e"]]), O0 = {
  key: 0,
  class: "model-details"
}, A0 = { class: "detail-section" }, U0 = { class: "detail-row" }, N0 = { class: "detail-value mono" }, z0 = { class: "detail-row" }, F0 = { class: "detail-value mono" }, B0 = { class: "detail-row" }, V0 = { class: "detail-value mono" }, W0 = { class: "detail-row" }, G0 = { class: "detail-value" }, j0 = { class: "detail-row" }, H0 = { class: "detail-value" }, K0 = { class: "detail-row" }, q0 = { class: "detail-value" }, Y0 = { class: "detail-section" }, J0 = { class: "section-header" }, Q0 = {
  key: 0,
  class: "locations-list"
}, X0 = { class: "location-path mono" }, Z0 = {
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
}, mw = /* @__PURE__ */ de({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: i, openFileLocation: c } = tt(), u = k(null), d = k(!0), m = k(null), v = k(""), g = k(!1), w = k(null), p = k(null), _ = k(null), C = k(null);
    let $ = null;
    function P(E, T = "success", O = 2e3) {
      $ && clearTimeout($), C.value = { message: E, type: T }, $ = setTimeout(() => {
        C.value = null;
      }, O);
    }
    function R(E) {
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
          await l(u.value.hash, v.value.trim()), _.value = "Source added successfully!", v.value = "", await V();
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
          await i(u.value.hash, E), P("Source removed"), await V();
        } catch (T) {
          p.value = T instanceof Error ? T.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function V() {
      d.value = !0, m.value = null;
      try {
        u.value = await n(o.identifier);
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return Qe(V), (E, T) => {
      var O;
      return a(), r(j, null, [
        x(ft, {
          title: `Model Details: ${((O = u.value) == null ? void 0 : O.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          onClose: T[5] || (T[5] = (le) => E.$emit("close"))
        }, {
          body: h(() => {
            var le, Z, z, A;
            return [
              u.value ? (a(), r("div", O0, [
                t("section", A0, [
                  t("div", U0, [
                    T[6] || (T[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", N0, f(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[0] || (T[0] = (U) => I(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", z0, [
                    T[7] || (T[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", F0, f(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[1] || (T[1] = (U) => I(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", B0, [
                    T[8] || (T[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", V0, f(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[2] || (T[2] = (U) => I(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", W0, [
                    T[9] || (T[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", G0, f(R(u.value.size)), 1)
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
                  t("h4", J0, "Locations (" + f(((le = u.value.locations) == null ? void 0 : le.length) || 0) + ")", 1),
                  (Z = u.value.locations) != null && Z.length ? (a(), r("div", Q0, [
                    (a(!0), r(j, null, ge(u.value.locations, (U, M) => (a(), r("div", {
                      key: M,
                      class: "location-item"
                    }, [
                      t("span", X0, f(U.path), 1),
                      U.modified ? (a(), r("span", Z0, "Modified: " + f(U.modified), 1)) : y("", !0),
                      U.path ? (a(), r("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (ee) => S(U.path)
                      }, " Open File Location ", 8, ew)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), r("div", tw, "No locations found"))
                ]),
                t("section", sw, [
                  t("h4", ow, "Download Sources (" + f(((z = u.value.sources) == null ? void 0 : z.length) || 0) + ")", 1),
                  (A = u.value.sources) != null && A.length ? (a(), r("div", nw, [
                    (a(!0), r(j, null, ge(u.value.sources, (U, M) => (a(), r("div", {
                      key: M,
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
                        onClick: (ee) => Y(U.url)
                      }, f(w.value === U.url ? "..." : "×"), 9, iw)
                    ]))), 128))
                  ])) : (a(), r("div", rw, " No download sources configured ")),
                  t("div", cw, [
                    Ke(t("input", {
                      "onUpdate:modelValue": T[3] || (T[3] = (U) => v.value = U),
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
                    }, f(g.value ? "Adding..." : "Add Source"), 9, uw)
                  ]),
                  p.value ? (a(), r("p", dw, f(p.value), 1)) : y("", !0),
                  _.value ? (a(), r("p", fw, f(_.value), 1)) : y("", !0)
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
        (a(), D(Ct, { to: "body" }, [
          C.value ? (a(), r("div", {
            key: 0,
            class: Se(["toast", C.value.type])
          }, f(C.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), ol = /* @__PURE__ */ pe(mw, [["__scopeId", "data-v-f15cbb56"]]), vw = /* @__PURE__ */ de({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: n, getStatus: l } = tt(), i = k([]), c = k([]), u = k("production"), d = k(!1), m = k(null), v = k(""), g = k(!1), w = k(null);
    function p() {
      g.value = !1, o("navigate", "model-index");
    }
    const _ = N(
      () => i.value.reduce((V, E) => V + (E.size || 0), 0)
    ), C = N(() => {
      if (!v.value.trim()) return i.value;
      const V = v.value.toLowerCase();
      return i.value.filter((E) => E.filename.toLowerCase().includes(V));
    }), $ = N(() => {
      if (!v.value.trim()) return c.value;
      const V = v.value.toLowerCase();
      return c.value.filter((E) => E.filename.toLowerCase().includes(V));
    }), P = N(() => {
      const V = {};
      for (const T of C.value) {
        const O = T.type || "other";
        V[O] || (V[O] = []), V[O].push(T);
      }
      const E = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(V).sort(([T], [O]) => {
        const le = E.indexOf(T), Z = E.indexOf(O);
        return le >= 0 && Z >= 0 ? le - Z : le >= 0 ? -1 : Z >= 0 ? 1 : T.localeCompare(O);
      }).map(([T, O]) => ({ type: T, models: O }));
    });
    function R(V) {
      if (!V) return "Unknown";
      const E = V / (1024 * 1024);
      return E >= 1024 ? `${(E / 1024).toFixed(1)} GB` : `${E.toFixed(0)} MB`;
    }
    function I(V) {
      w.value = V.hash || V.filename;
    }
    function S(V) {
      o("navigate", "model-index");
    }
    function q(V) {
      alert(`Download functionality not yet implemented for ${V}`);
    }
    async function Y() {
      d.value = !0, m.value = null;
      try {
        const V = await n();
        i.value = V, c.value = [];
        const E = await l();
        u.value = E.environment || "production";
      } catch (V) {
        m.value = V instanceof Error ? V.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return Qe(Y), (V, E) => (a(), r(j, null, [
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
          d.value ? (a(), D(Ps, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (a(), D(Rs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: Y
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            i.value.length ? (a(), D(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(i.value.length) + " models • " + f(R(_.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(j, null, ge(P.value, (T) => (a(), D(lt, {
              key: T.type,
              title: T.type.toUpperCase(),
              count: T.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(j, null, ge(T.models, (O) => (a(), D(Et, {
                  key: O.hash || O.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...E[4] || (E[4] = [
                    b("📦", -1)
                  ])]),
                  title: h(() => [
                    b(f(O.filename), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(R(O.size)), 1)
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
                    x(ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => I(O)
                    }, {
                      default: h(() => [...E[5] || (E[5] = [
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
            $.value.length ? (a(), D(lt, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, ge($.value, (T) => (a(), D(Et, {
                  key: T.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...E[6] || (E[6] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(T.filename), 1)
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
                    x(ce, {
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => q(T.filename)
                    }, {
                      default: h(() => [...E[8] || (E[8] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => S(T.filename)
                    }, {
                      default: h(() => [...E[9] || (E[9] = [
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
            !C.value.length && !$.value.length ? (a(), D(ns, {
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
            E[10] || (E[10] = b(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + f(u.value) + '"', 1),
            E[11] || (E[11] = b(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          x(ce, {
            variant: "primary",
            onClick: p
          }, {
            default: h(() => [...E[12] || (E[12] = [
              b(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), D(ol, {
        key: 0,
        identifier: w.value,
        onClose: E[3] || (E[3] = (T) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), pw = /* @__PURE__ */ pe(vw, [["__scopeId", "data-v-cb4f12b3"]]);
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
}, zw = { class: "summary-bar" }, Fw = { class: "summary-count" }, Bw = { class: "summary-size" }, Vw = { class: "action-bar" }, Ww = /* @__PURE__ */ de({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: i } = tt(), c = k([]), u = k(/* @__PURE__ */ new Set()), d = k(!1), m = k(null), v = k(""), g = k(!0), w = k(""), p = k(""), _ = k(""), C = k([]), $ = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, P = N(() => {
      let A = c.value;
      if (o.initialPath) {
        const U = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        A = A.filter((M) => M.path.startsWith(U) || M.path === o.initialPath);
      }
      if (g.value && (A = A.filter((U) => U.is_model_file)), v.value.trim()) {
        const U = v.value.toLowerCase();
        A = A.filter((M) => M.path.toLowerCase().includes(U));
      }
      return A;
    }), R = N(() => {
      const A = C.value.map((U) => ({
        label: U,
        value: U
      }));
      return A.push({ label: "Custom path...", value: "__custom__" }), A;
    }), I = N(() => w.value === "__custom__" ? _.value.trim().length > 0 : w.value.length > 0), S = N(() => {
      let A = 0;
      for (const U of u.value) {
        const M = c.value.find((ee) => ee.path === U);
        M && (A += M.size);
      }
      return A;
    });
    function q(A) {
      if (A === 0) return "0 B";
      const U = 1024 * 1024 * 1024, M = 1024 * 1024, ee = 1024;
      return A >= U ? `${(A / U).toFixed(2)} GB` : A >= M ? `${(A / M).toFixed(1)} MB` : A >= ee ? `${(A / ee).toFixed(0)} KB` : `${A} B`;
    }
    function Y(A) {
      const U = A.match($);
      return U ? `${U[1]}${U[4]}` : null;
    }
    function V(A) {
      const U = new Set(u.value), M = U.has(A.path), ee = A.shard_group || Y(A.path);
      if (ee) {
        const Q = c.value.filter((he) => (he.shard_group || Y(he.path)) === ee);
        M ? Q.forEach((he) => U.delete(he.path)) : Q.forEach((he) => U.add(he.path));
      } else
        M ? U.delete(A.path) : U.add(A.path);
      u.value = U;
    }
    function E() {
      const A = new Set(u.value);
      for (const U of P.value)
        U.is_model_file && A.add(U.path);
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
      const A = O(), U = [];
      for (const M of u.value) {
        const ee = c.value.find((Q) => Q.path === M);
        ee && U.push({
          url: ww(o.repoId, o.revision, ee.path),
          destination: A,
          filename: ee.path.split("/").pop() || ee.path
        });
      }
      n("queue", U);
    }
    async function Z() {
      if (o.repoId) {
        d.value = !0, m.value = null;
        try {
          const A = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, U = await l(A);
          if (c.value = U.files, o.preselectedFile) {
            const M = c.value.find((ee) => ee.path === o.preselectedFile);
            M && V(M);
          }
        } catch (A) {
          m.value = A instanceof Error ? A.message : "Failed to load repository";
        } finally {
          d.value = !1;
        }
      }
    }
    async function z() {
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
      Z(), z();
    }), (A, U) => (a(), r("div", _w, [
      t("div", kw, [
        t("button", {
          class: "back-btn",
          onClick: U[0] || (U[0] = (M) => A.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", bw, [
          t("span", $w, f(e.repoId), 1),
          e.revision ? (a(), r("span", Cw, f(e.revision), 1)) : y("", !0)
        ])
      ]),
      d.value ? (a(), r("div", xw, " Loading repository files... ")) : m.value ? (a(), r("div", Sw, f(m.value), 1)) : (a(), r(j, { key: 2 }, [
        t("div", Iw, [
          x(Tt, {
            modelValue: v.value,
            "onUpdate:modelValue": U[1] || (U[1] = (M) => v.value = M),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", Ew, [
            t("button", {
              class: Se(["toggle-btn", { active: g.value }]),
              onClick: U[2] || (U[2] = (M) => g.value = !g.value)
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
        t("div", Tw, [
          P.value.length === 0 ? (a(), r("div", Pw, f(c.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (a(), r("div", Rw, [
            (a(!0), r(j, null, ge(P.value, (M) => (a(), r("div", {
              key: M.path,
              class: Se(["file-item", { selected: u.value.has(M.path) }]),
              onClick: (ee) => V(M)
            }, [
              t("input", {
                type: "checkbox",
                checked: u.value.has(M.path),
                class: "file-checkbox",
                onClick: U[3] || (U[3] = it(() => {
                }, ["stop"])),
                onChange: (ee) => V(M)
              }, null, 40, Dw),
              t("span", Lw, f(M.path), 1),
              t("span", Ow, f(q(M.size)), 1)
            ], 10, Mw))), 128))
          ]))
        ]),
        t("div", Aw, [
          U[7] || (U[7] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", Uw, [
            x(Cr, {
              modelValue: w.value,
              "onUpdate:modelValue": U[4] || (U[4] = (M) => w.value = M),
              options: R.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            w.value !== "__custom__" ? (a(), r("span", Nw, "/")) : y("", !0),
            w.value !== "__custom__" ? (a(), D(Tt, {
              key: 1,
              modelValue: p.value,
              "onUpdate:modelValue": U[5] || (U[5] = (M) => p.value = M),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : y("", !0)
          ]),
          w.value === "__custom__" ? (a(), D(Tt, {
            key: 0,
            modelValue: _.value,
            "onUpdate:modelValue": U[6] || (U[6] = (M) => _.value = M),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : y("", !0)
        ]),
        t("div", zw, [
          t("span", Fw, f(u.value.size) + " file(s) selected", 1),
          t("span", Bw, f(q(S.value)), 1)
        ]),
        t("div", Vw, [
          x(Pe, {
            variant: "primary",
            disabled: u.value.size === 0 || !I.value,
            onClick: le
          }, {
            default: h(() => [...U[8] || (U[8] = [
              b(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), Gw = /* @__PURE__ */ pe(Ww, [["__scopeId", "data-v-c7d5e841"]]), jw = { class: "huggingface-tab" }, Hw = {
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
}, Qw = {
  key: 2,
  class: "results-list"
}, Xw = ["onClick"], Zw = { class: "repo-header" }, e_ = { class: "repo-id" }, t_ = { class: "repo-stats" }, s_ = {
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
}, r_ = /* @__PURE__ */ de({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: s } = tt(), o = k("search"), n = k(""), l = k([]), i = k(!1), c = k(null), u = k(!1), d = k(null), m = k("main"), v = k(), g = k();
    function w($) {
      return $ >= 1e6 ? `${($ / 1e6).toFixed(1)}M` : $ >= 1e3 ? `${($ / 1e3).toFixed(1)}K` : String($);
    }
    async function p() {
      const $ = n.value.trim();
      if (!$) return;
      c.value = null;
      const P = hw($);
      if (P.kind === "file" && P.repoId && P.path) {
        d.value = P.repoId, m.value = P.revision || "main";
        const R = P.path.split("/");
        R.length > 1 ? v.value = R.slice(0, -1).join("/") : v.value = void 0, g.value = P.path, o.value = "browse";
        return;
      }
      if (P.kind === "repo" && P.repoId) {
        d.value = P.repoId, m.value = P.revision || "main", v.value = P.path, g.value = void 0, o.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test($) && !$.includes("://")) {
        d.value = $, m.value = "main", v.value = void 0, g.value = void 0, o.value = "browse";
        return;
      }
      i.value = !0;
      try {
        const R = await s($);
        l.value = R.results, u.value = !0;
      } catch (R) {
        c.value = R instanceof Error ? R.message : "Search failed";
      } finally {
        i.value = !1;
      }
    }
    function _($) {
      d.value = $, m.value = "main", v.value = void 0, g.value = void 0, o.value = "browse";
    }
    function C() {
      o.value = "search", d.value = null, v.value = void 0, g.value = void 0;
    }
    return ($, P) => (a(), r("div", jw, [
      o.value === "search" ? (a(), r("div", Hw, [
        t("div", Kw, [
          x(Tt, {
            modelValue: n.value,
            "onUpdate:modelValue": P[0] || (P[0] = (R) => n.value = R),
            placeholder: "Search repos, paste URL, or enter user/repo...",
            onKeydown: Ht(p, ["enter"])
          }, null, 8, ["modelValue"]),
          x(Pe, {
            variant: "primary",
            onClick: p,
            loading: i.value
          }, {
            default: h(() => [...P[2] || (P[2] = [
              b(" Search ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ])) : y("", !0),
      o.value === "search" ? (a(), r("div", qw, [
        i.value ? (a(), r("div", Yw, " Searching HuggingFace... ")) : c.value ? (a(), r("div", Jw, f(c.value), 1)) : l.value.length > 0 ? (a(), r("div", Qw, [
          (a(!0), r(j, null, ge(l.value, (R) => (a(), r("div", {
            key: R.repo_id,
            class: "repo-card",
            onClick: (I) => _(R.repo_id)
          }, [
            t("div", Zw, [
              t("span", e_, f(R.repo_id), 1),
              t("div", t_, [
                t("span", s_, [
                  P[3] || (P[3] = t("span", { class: "stat-icon" }, "↓", -1)),
                  b(" " + f(w(R.downloads)), 1)
                ]),
                t("span", o_, [
                  P[4] || (P[4] = t("span", { class: "stat-icon" }, "★", -1)),
                  b(" " + f(w(R.likes)), 1)
                ])
              ])
            ]),
            R.description ? (a(), r("p", n_, f(R.description), 1)) : y("", !0),
            R.tags.length > 0 ? (a(), r("div", a_, [
              (a(!0), r(j, null, ge(R.tags.slice(0, 5), (I) => (a(), r("span", {
                key: I,
                class: "tag"
              }, f(I), 1))), 128))
            ])) : y("", !0)
          ], 8, Xw))), 128))
        ])) : u.value ? (a(), r("div", l_, " No repositories found ")) : (a(), r("div", i_, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (a(), D(Gw, {
        key: 2,
        "repo-id": d.value,
        revision: m.value,
        "initial-path": v.value,
        "preselected-file": g.value,
        onBack: C,
        onQueue: P[1] || (P[1] = (R) => $.$emit("queue", R))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"]))
    ]));
  }
}), c_ = /* @__PURE__ */ pe(r_, [["__scopeId", "data-v-88ed2d62"]]), u_ = { class: "civitai-tab" }, d_ = /* @__PURE__ */ de({
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
}), f_ = /* @__PURE__ */ pe(d_, [["__scopeId", "data-v-44948051"]]), m_ = { class: "direct-url-tab" }, v_ = { class: "input-group" }, p_ = { class: "input-group" }, g_ = {
  key: 0,
  class: "error"
}, h_ = { class: "actions" }, y_ = /* @__PURE__ */ de({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: s }) {
    const o = s, n = k(""), l = k(""), i = N(() => {
      const d = l.value.trim();
      if (!d) return null;
      const m = d.replace(/\\/g, "/").split("/").pop() || "";
      return m.includes(".") && !m.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), c = N(() => n.value.trim() !== "" && l.value.trim() !== "" && !i.value), u = () => {
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
        x(Tt, {
          modelValue: n.value,
          "onUpdate:modelValue": m[0] || (m[0] = (v) => n.value = v),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      t("div", p_, [
        m[3] || (m[3] = t("label", null, "Target Path (relative to models directory)", -1)),
        x(Tt, {
          modelValue: l.value,
          "onUpdate:modelValue": m[1] || (m[1] = (v) => l.value = v),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        i.value ? (a(), r("p", g_, f(i.value), 1)) : y("", !0)
      ]),
      m[5] || (m[5] = t("p", { class: "note" }, "Model will be queued for background download.", -1)),
      t("div", h_, [
        x(Pe, {
          variant: "primary",
          disabled: !c.value,
          onClick: u
        }, {
          default: h(() => [...m[4] || (m[4] = [
            b(" Queue Download ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), w_ = /* @__PURE__ */ pe(y_, [["__scopeId", "data-v-01def7aa"]]), __ = { class: "download-modal" }, k_ = { class: "tab-bar" }, b_ = ["onClick"], $_ = { class: "tab-content" }, C_ = /* @__PURE__ */ de({
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
        t("div", __, [
          t("div", k_, [
            (a(), r(j, null, ge(l, (g) => t("button", {
              key: g.id,
              class: Se(["tab-btn", { active: i.value === g.id }]),
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
        x(Pe, {
          variant: "secondary",
          onClick: d
        }, {
          default: h(() => [...v[0] || (v[0] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), x_ = /* @__PURE__ */ pe(C_, [["__scopeId", "data-v-90a9f401"]]), S_ = {
  key: 0,
  class: "indexing-progress"
}, I_ = { class: "progress-info" }, E_ = { class: "progress-label" }, T_ = { class: "progress-count" }, P_ = { class: "progress-bar" }, R_ = { class: "modal-content" }, M_ = { class: "modal-header" }, D_ = { class: "modal-body" }, L_ = { class: "input-group" }, O_ = { class: "current-path" }, A_ = { class: "input-group" }, U_ = { class: "modal-footer" }, N_ = /* @__PURE__ */ de({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: i
    } = tt(), c = s, u = k([]), d = k(!1), m = k(!1), v = k(null), g = k(""), w = k(!1), p = k(null), _ = k(!1), C = k(null), $ = k(""), P = k(!1), R = k(!1), I = k(null), S = N(
      () => u.value.reduce((z, A) => z + (A.size || 0), 0)
    ), q = N(() => {
      if (!g.value.trim()) return u.value;
      const z = g.value.toLowerCase();
      return u.value.filter((A) => {
        const U = A, M = A.sha256 || U.sha256_hash || "";
        return A.filename.toLowerCase().includes(z) || M.toLowerCase().includes(z);
      });
    }), Y = N(() => {
      const z = {};
      for (const U of q.value) {
        const M = U.type || "other";
        z[M] || (z[M] = []), z[M].push(U);
      }
      const A = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(z).sort(([U], [M]) => {
        const ee = A.indexOf(U), Q = A.indexOf(M);
        return ee >= 0 && Q >= 0 ? ee - Q : ee >= 0 ? -1 : Q >= 0 ? 1 : U.localeCompare(M);
      }).map(([U, M]) => ({ type: U, models: M }));
    });
    function V(z) {
      if (!z) return "Unknown";
      const A = 1024 * 1024 * 1024, U = 1024 * 1024;
      return z >= A ? `${(z / A).toFixed(1)} GB` : z >= U ? `${(z / U).toFixed(0)} MB` : `${(z / 1024).toFixed(0)} KB`;
    }
    function E(z) {
      p.value = z.hash || z.filename;
    }
    async function T() {
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
    async function O() {
      if ($.value.trim()) {
        P.value = !0, v.value = null;
        try {
          const z = await i($.value.trim());
          C.value = z.path, _.value = !1, $.value = "", await le(), console.log(`Directory changed: ${z.models_indexed} models indexed`), c("refresh");
        } catch (z) {
          v.value = z instanceof Error ? z.message : "Failed to change directory";
        } finally {
          P.value = !1;
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
    }), (z, A) => (a(), r(j, null, [
      x(Pt, null, {
        header: h(() => [
          x(Rt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: A[2] || (A[2] = (U) => w.value = !0)
          }, {
            actions: h(() => [
              x(ce, {
                variant: "primary",
                size: "sm",
                disabled: m.value,
                onClick: T
              }, {
                default: h(() => [
                  b(f(m.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              x(ce, {
                variant: "primary",
                size: "sm",
                onClick: A[0] || (A[0] = (U) => _.value = !0)
              }, {
                default: h(() => [...A[11] || (A[11] = [
                  b(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              x(ce, {
                variant: "primary",
                size: "sm",
                onClick: A[1] || (A[1] = (U) => R.value = !0)
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
                  b(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          I.value ? (a(), r("div", S_, [
            t("div", I_, [
              t("span", E_, f(I.value.message), 1),
              t("span", T_, f(I.value.current) + "/" + f(I.value.total), 1)
            ]),
            t("div", P_, [
              t("div", {
                class: "progress-fill",
                style: qt({ width: `${I.value.current / I.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          x($o, {
            modelValue: g.value,
            "onUpdate:modelValue": A[3] || (A[3] = (U) => g.value = U),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || I.value ? (a(), D(Ps, {
            key: 0,
            message: I.value ? "Indexing models..." : "Loading workspace models..."
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
                b(" Total: " + f(u.value.length) + " models • " + f(V(S.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(j, null, ge(Y.value, (U) => (a(), D(lt, {
              key: U.type,
              title: U.type.toUpperCase(),
              count: U.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (a(!0), r(j, null, ge(U.models, (M) => (a(), D(Et, {
                  key: M.sha256 || M.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...A[13] || (A[13] = [
                    b("📦", -1)
                  ])]),
                  title: h(() => [
                    b(f(M.filename), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(V(M.size)), 1)
                  ]),
                  details: h(() => [
                    x(dt, {
                      label: "Hash:",
                      value: M.hash ? M.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ee) => E(M)
                    }, {
                      default: h(() => [...A[14] || (A[14] = [
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
            q.value.length ? y("", !0) : (a(), D(ns, {
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
        onClose: A[4] || (A[4] = (U) => w.value = !1)
      }, {
        content: h(() => [...A[15] || (A[15] = [
          t("p", null, [
            b(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            b(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), D(ol, {
        key: 0,
        identifier: p.value,
        onClose: A[5] || (A[5] = (U) => p.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (a(), D(Ct, { to: "body" }, [
        _.value ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: A[9] || (A[9] = it((U) => _.value = !1, ["self"]))
        }, [
          t("div", R_, [
            t("div", M_, [
              A[16] || (A[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: A[6] || (A[6] = (U) => _.value = !1)
              }, "✕")
            ]),
            t("div", D_, [
              t("div", L_, [
                A[17] || (A[17] = t("label", null, "Current Directory", -1)),
                t("code", O_, f(C.value || "Not set"), 1)
              ]),
              t("div", A_, [
                A[18] || (A[18] = t("label", null, "New Directory Path", -1)),
                x(Tt, {
                  modelValue: $.value,
                  "onUpdate:modelValue": A[7] || (A[7] = (U) => $.value = U),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              A[19] || (A[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", U_, [
              x(Pe, {
                variant: "secondary",
                onClick: A[8] || (A[8] = (U) => _.value = !1)
              }, {
                default: h(() => [...A[20] || (A[20] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              x(Pe, {
                variant: "primary",
                disabled: !$.value.trim() || P.value,
                loading: P.value,
                onClick: O
              }, {
                default: h(() => [
                  b(f(P.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      x(x_, {
        show: R.value,
        onClose: A[10] || (A[10] = (U) => R.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), z_ = /* @__PURE__ */ pe(N_, [["__scopeId", "data-v-3705114c"]]), F_ = { class: "node-details" }, B_ = { class: "status-row" }, V_ = {
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
}, Q_ = { class: "value mono small" }, X_ = { class: "detail-row" }, Z_ = {
  key: 0,
  class: "value"
}, ek = {
  key: 1,
  class: "workflow-list"
}, tk = /* @__PURE__ */ de({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = N(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), i = N(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = N(() => ({
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
        t("div", F_, [
          t("div", B_, [
            d[2] || (d[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Se(["status-badge", l.value])
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
            ], 8, Y_)
          ])) : y("", !0),
          e.node.download_url ? (a(), r("div", J_, [
            d[8] || (d[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", Q_, f(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", X_, [
            d[9] || (d[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), r("span", Z_, " Not used in any workflows ")) : (a(), r("div", ek, [
              (a(!0), r(j, null, ge(e.node.used_in_workflows, (m) => (a(), r("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        x(Pe, {
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
}), sk = /* @__PURE__ */ pe(tk, [["__scopeId", "data-v-b342f626"]]), ok = { class: "dialog-message" }, nk = {
  key: 0,
  class: "dialog-details"
}, ak = {
  key: 1,
  class: "dialog-warning"
}, lk = /* @__PURE__ */ de({
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
        t("p", ok, f(e.message), 1),
        e.details && e.details.length ? (a(), r("div", nk, [
          (a(!0), r(j, null, ge(e.details, (n, l) => (a(), r("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), r("p", ak, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          b(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        x(Pe, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => s.$emit("cancel"))
        }, {
          default: h(() => [
            b(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), D(Pe, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => s.$emit("secondary"))
        }, {
          default: h(() => [
            b(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        x(Pe, {
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
}), nl = /* @__PURE__ */ pe(lk, [["__scopeId", "data-v-3670b9f5"]]), ik = { class: "mismatch-warning" }, rk = { class: "version-mismatch" }, ck = { class: "version-actual" }, uk = { class: "version-expected" }, dk = { key: 0 }, fk = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, mk = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, vk = /* @__PURE__ */ de({
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
    }), m = k(!1), v = k(null), g = k(""), w = k(!1), p = k(null), _ = k(null), C = N(() => {
      if (!g.value.trim()) return d.value.nodes;
      const Z = g.value.toLowerCase();
      return d.value.nodes.filter(
        (z) => {
          var A, U;
          return z.name.toLowerCase().includes(Z) || ((A = z.description) == null ? void 0 : A.toLowerCase().includes(Z)) || ((U = z.repository) == null ? void 0 : U.toLowerCase().includes(Z));
        }
      );
    }), $ = N(
      () => C.value.filter((Z) => Z.installed && Z.tracked)
    ), P = N(
      () => C.value.filter((Z) => !Z.installed && Z.tracked)
    ), R = N(
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
    const S = N(() => o.versionMismatches.length > 0);
    function q(Z) {
      return !Z.used_in_workflows || Z.used_in_workflows.length === 0 ? "Not used in any workflows" : Z.used_in_workflows.length === 1 ? Z.used_in_workflows[0] : `${Z.used_in_workflows.length} workflows`;
    }
    function Y(Z) {
      p.value = Z;
    }
    function V() {
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
      x(Pt, null, {
        header: h(() => [
          x(Rt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (A) => w.value = !0)
          }, {
            actions: h(() => [
              x(ce, {
                variant: "primary",
                size: "sm",
                onClick: V
              }, {
                default: h(() => [...z[7] || (z[7] = [
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
            "onUpdate:modelValue": z[1] || (z[1] = (A) => g.value = A),
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
                b(f(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (a(), r(j, { key: 0 }, [
                  b(" • " + f(d.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                d.value.untracked_count ? (a(), r(j, { key: 1 }, [
                  b(" • " + f(d.value.untracked_count) + " untracked", 1)
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
                  z[8] || (z[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), r(j, null, ge(e.versionMismatches, (A) => (a(), D(Et, {
                  key: A.name,
                  status: "warning"
                }, {
                  icon: h(() => [...z[9] || (z[9] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(A.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", rk, [
                      t("span", ck, f(A.actual), 1),
                      z[10] || (z[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", uk, f(A.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    x(ce, {
                      variant: "warning",
                      size: "sm",
                      onClick: z[2] || (z[2] = (U) => n("repair-environment"))
                    }, {
                      default: h(() => [...z[11] || (z[11] = [
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
            R.value.length ? (a(), D(lt, {
              key: 2,
              title: "UNTRACKED",
              count: R.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(j, null, ge(R.value, (A) => (a(), D(Et, {
                  key: A.name,
                  status: "warning"
                }, {
                  icon: h(() => [...z[12] || (z[12] = [
                    b("?", -1)
                  ])]),
                  title: h(() => [
                    b(f(A.name), 1)
                  ]),
                  subtitle: h(() => [...z[13] || (z[13] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    x(dt, {
                      label: "Used by:",
                      value: q(A)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => Y(A)
                    }, {
                      default: h(() => [...z[14] || (z[14] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(ce, {
                      variant: "primary",
                      size: "sm",
                      onClick: (U) => E(A.name)
                    }, {
                      default: h(() => [...z[15] || (z[15] = [
                        b(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(ce, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (U) => T(A.name)
                    }, {
                      default: h(() => [...z[16] || (z[16] = [
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
            $.value.length ? (a(), D(lt, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(j, null, ge($.value, (A) => (a(), D(Et, {
                  key: A.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    b(f(A.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    b(f(A.name), 1)
                  ]),
                  subtitle: h(() => [
                    A.version ? (a(), r("span", dk, f(A.source === "development" ? "" : "v") + f(A.version), 1)) : (a(), r("span", fk, "version unknown")),
                    t("span", mk, " • " + f(I(A.source)), 1)
                  ]),
                  details: h(() => [
                    x(dt, {
                      label: "Used by:",
                      value: q(A)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => Y(A)
                    }, {
                      default: h(() => [...z[17] || (z[17] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: V
                    }, {
                      default: h(() => [...z[18] || (z[18] = [
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
            P.value.length ? (a(), D(lt, {
              key: 4,
              title: "MISSING",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(j, null, ge(P.value, (A) => (a(), D(Et, {
                  key: A.name,
                  status: "missing"
                }, {
                  icon: h(() => [...z[19] || (z[19] = [
                    b("!", -1)
                  ])]),
                  title: h(() => [
                    b(f(A.name), 1)
                  ]),
                  subtitle: h(() => [...z[20] || (z[20] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    x(dt, {
                      label: "Required by:",
                      value: q(A)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => Y(A)
                    }, {
                      default: h(() => [...z[21] || (z[21] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(ce, {
                      variant: "primary",
                      size: "sm",
                      onClick: (U) => O(A.name)
                    }, {
                      default: h(() => [...z[22] || (z[22] = [
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
            !$.value.length && !P.value.length && !R.value.length ? (a(), D(ns, {
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
        onClose: z[4] || (z[4] = (A) => w.value = !1)
      }, {
        content: h(() => [...z[23] || (z[23] = [
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
          x(ce, {
            variant: "primary",
            onClick: z[3] || (z[3] = (A) => w.value = !1)
          }, {
            default: h(() => [...z[24] || (z[24] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), D(sk, {
        key: 0,
        node: p.value,
        onClose: z[5] || (z[5] = (A) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      _.value ? (a(), D(nl, {
        key: 1,
        title: _.value.title,
        message: _.value.message,
        warning: _.value.warning,
        "confirm-label": _.value.confirmLabel,
        destructive: _.value.destructive,
        onConfirm: _.value.onConfirm,
        onCancel: z[6] || (z[6] = (A) => _.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), pk = /* @__PURE__ */ pe(vk, [["__scopeId", "data-v-1555a802"]]);
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
}, kk = /* @__PURE__ */ de({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = k(!1), n = N(() => {
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
        class: Se(["copy-btn", { copied: o.value }]),
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
}), bk = /* @__PURE__ */ pe(kk, [["__scopeId", "data-v-7768a58d"]]), $k = { class: "remote-title" }, Ck = {
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
}, Rk = /* @__PURE__ */ de({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = N(() => s.fetchingRemote === s.remote.name), n = N(() => s.remote.is_default), l = N(() => s.syncStatus && s.syncStatus.behind > 0), i = N(() => s.syncStatus && s.syncStatus.ahead > 0), c = N(() => s.remote.push_url !== s.remote.fetch_url), u = N(() => {
      const m = s.remote.fetch_url, v = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), d = N(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, v) => (a(), D(Et, {
      status: n.value ? "synced" : void 0
    }, so({
      icon: h(() => [
        b(f(n.value ? "🔗" : "🌐"), 1)
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
        x(ce, {
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
        x(ce, {
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
        x(ce, {
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
        x(ce, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (g) => m.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            b(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? y("", !0) : (a(), D(ce, {
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
          e.remote.push_url !== e.remote.fetch_url ? (a(), D(dt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              x(bk, {
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
}), Mk = /* @__PURE__ */ pe(Rk, [["__scopeId", "data-v-8310f3a8"]]), Dk = ["for"], Lk = {
  key: 0,
  class: "base-form-field-required"
}, Ok = { class: "base-form-field-input" }, Ak = {
  key: 1,
  class: "base-form-field-error"
}, Uk = {
  key: 2,
  class: "base-form-field-hint"
}, Nk = /* @__PURE__ */ de({
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
    const s = e, o = N(() => s.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (n, l) => (a(), r("div", {
      class: Se(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), r("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        b(f(e.label) + " ", 1),
        e.required ? (a(), r("span", Lk, "*")) : y("", !0)
      ], 8, Dk)) : y("", !0),
      t("div", Ok, [
        He(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), r("span", Ak, f(e.error), 1)) : e.hint ? (a(), r("span", Uk, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), va = /* @__PURE__ */ pe(Nk, [["__scopeId", "data-v-9a1cf296"]]), zk = { class: "remote-form" }, Fk = { class: "form-header" }, Bk = { class: "form-body" }, Vk = {
  key: 0,
  class: "form-error"
}, Wk = { class: "form-actions" }, Gk = /* @__PURE__ */ de({
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
    const u = N(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
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
        x(Ut, null, {
          default: h(() => [
            b(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", Bk, [
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
        c.value ? (a(), r("div", Vk, f(c.value), 1)) : y("", !0)
      ]),
      t("div", Wk, [
        x(ce, {
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
        x(ce, {
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
}), jk = /* @__PURE__ */ pe(Gk, [["__scopeId", "data-v-56021b18"]]), Hk = { class: "conflict-summary-box" }, Kk = { class: "summary-header" }, qk = { class: "summary-text" }, Yk = { key: 0 }, Jk = {
  key: 1,
  class: "all-resolved"
}, Qk = { class: "summary-progress" }, Xk = { class: "progress-bar" }, Zk = { class: "progress-text" }, eb = /* @__PURE__ */ de({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const s = e, o = N(
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
      t("div", Qk, [
        t("div", Xk, [
          t("div", {
            class: "progress-fill",
            style: qt({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", Zk, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), tb = /* @__PURE__ */ pe(eb, [["__scopeId", "data-v-4e9e6cc9"]]), sb = { class: "modal-header" }, ob = { class: "modal-title" }, nb = { class: "modal-body" }, ab = {
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
}, Sb = { class: "modal-actions" }, Xl = "comfygit.pullModelStrategy", Ib = /* @__PURE__ */ de({
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
    yt(l, ($) => {
      localStorage.setItem(Xl, $);
    });
    const i = N(() => {
      var $;
      return (($ = o.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = N(() => {
      if (!o.preview) return 0;
      const $ = o.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), u = N(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = N(() => {
      var $;
      return c.value > 0 || u.value > 0 || ((($ = o.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), m = N(() => o.preview && Er(o.preview) ? o.preview : null), v = N(() => {
      var $;
      return (($ = m.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), g = N(() => {
      var $;
      return (($ = o.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), w = N(
      () => v.value > 0 && g.value === v.value
    ), p = N(() => !(!o.preview || o.preview.has_uncommitted_changes || m.value && !w.value));
    function _($) {
      if (!m.value) return !1;
      const P = $.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((R) => R.name === P);
    }
    function C($) {
      const P = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: $, resolutions: P });
    }
    return ($, P) => {
      var R, I;
      return a(), D(Ct, { to: "body" }, [
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
            t("div", sb, [
              t("h3", ob, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: P[0] || (P[0] = (S) => $.$emit("close"))
              }, "✕")
            ]),
            t("div", nb, [
              e.error ? (a(), r("div", ab, [
                P[13] || (P[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  P[12] || (P[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, f(e.error), 1),
                  i.value ? (a(), r("p", lb, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), r("div", ib, [...P[14] || (P[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (R = e.preview) != null && R.has_uncommitted_changes ? (a(), r(j, { key: 2 }, [
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
              ], 64)) : e.preview ? (a(), r(j, { key: 3 }, [
                t("div", rb, [
                  P[17] || (P[17] = t("span", { class: "icon" }, "📥", -1)),
                  b(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                d.value ? (a(), r("div", cb, [
                  P[21] || (P[21] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (a(), r("details", ub, [
                    t("summary", null, [
                      P[18] || (P[18] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", db, f(c.value) + " changes", 1)
                    ]),
                    t("div", fb, [
                      (a(!0), r(j, null, ge(e.preview.changes.workflows.added, (S) => (a(), r("div", {
                        key: "a-" + S,
                        class: "change-item add"
                      }, " + " + f(S), 1))), 128)),
                      (a(!0), r(j, null, ge(e.preview.changes.workflows.modified, (S) => (a(), r("div", {
                        key: "m-" + S,
                        class: "change-item modify"
                      }, [
                        b(" ~ " + f(S) + " ", 1),
                        _(S) ? (a(), r("span", mb, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), r(j, null, ge(e.preview.changes.workflows.deleted, (S) => (a(), r("div", {
                        key: "d-" + S,
                        class: "change-item delete"
                      }, " - " + f(S), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (a(), r("details", vb, [
                    t("summary", null, [
                      P[19] || (P[19] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", pb, f(u.value) + " to install", 1)
                    ]),
                    t("div", gb, [
                      (a(!0), r(j, null, ge(e.preview.changes.nodes.to_install, (S) => (a(), r("div", {
                        key: S,
                        class: "change-item add"
                      }, " + " + f(S), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), r("details", hb, [
                    t("summary", null, [
                      P[20] || (P[20] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", yb, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", wb, [
                      (a(!0), r(j, null, ge(e.preview.changes.models.referenced, (S) => (a(), r("div", {
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
                  P[26] || (P[26] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", kb, [
                    t("label", bb, [
                      Ke(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[1] || (P[1] = (S) => l.value = S),
                        value: "all"
                      }, null, 512), [
                        [Zt, l.value]
                      ]),
                      P[22] || (P[22] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", $b, [
                      Ke(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[2] || (P[2] = (S) => l.value = S),
                        value: "required"
                      }, null, 512), [
                        [Zt, l.value]
                      ]),
                      P[23] || (P[23] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", Cb, [
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
                e.preview.commits_behind === 0 ? (a(), r("div", xb, [
                  P[28] || (P[28] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", Sb, [
              x(ce, {
                variant: "secondary",
                onClick: P[4] || (P[4] = (S) => $.$emit("close"))
              }, {
                default: h(() => [...P[29] || (P[29] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), r(j, { key: 0 }, [
                x(ce, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: P[5] || (P[5] = (S) => C(!1))
                }, {
                  default: h(() => [...P[30] || (P[30] = [
                    b(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                x(ce, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: P[6] || (P[6] = (S) => C(!0))
                }, {
                  default: h(() => [...P[31] || (P[31] = [
                    b(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (I = e.preview) != null && I.has_uncommitted_changes ? (a(), D(ce, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: P[7] || (P[7] = (S) => C(!0))
              }, {
                default: h(() => [...P[32] || (P[32] = [
                  b(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), r(j, { key: 2 }, [
                m.value && !w.value ? (a(), D(ce, {
                  key: 0,
                  variant: "primary",
                  onClick: P[8] || (P[8] = (S) => n("openConflictResolution"))
                }, {
                  default: h(() => [
                    b(" Resolve Conflicts (" + f(g.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), D(ce, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !p.value,
                  onClick: P[9] || (P[9] = (S) => C(!1))
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
}), Eb = /* @__PURE__ */ pe(Ib, [["__scopeId", "data-v-300c7b2f"]]), Tb = { class: "modal-header" }, Pb = { class: "modal-title" }, Rb = { class: "modal-body" }, Mb = {
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
}, Qb = { class: "modal-actions" }, Xb = /* @__PURE__ */ de({
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
                b(" Loading preview... ", -1)
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
                    (a(!0), r(j, null, ge(e.preview.commits, (v) => (a(), r("div", {
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
                    (a(!0), r(j, null, ge(e.preview.commits, (v) => (a(), r("div", {
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
                  b(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", Qb, [
              x(ce, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (v) => i.$emit("close"))
              }, {
                default: h(() => [...c[18] || (c[18] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = e.preview) != null && m.remote_has_new_commits ? (a(), r(j, { key: 0 }, [
                x(ce, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (v) => i.$emit("pull-first"))
                }, {
                  default: h(() => [...c[19] || (c[19] = [
                    b(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                x(ce, {
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
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), D(ce, {
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
}), Zb = /* @__PURE__ */ pe(Xb, [["__scopeId", "data-v-ae86b6a7"]]), e2 = { class: "resolution-choice-group" }, t2 = ["disabled"], s2 = ["disabled"], o2 = /* @__PURE__ */ de({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("div", e2, [
      t("button", {
        class: Se(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, t2),
      t("button", {
        class: Se(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, s2)
    ]));
  }
}), n2 = /* @__PURE__ */ pe(o2, [["__scopeId", "data-v-985715ed"]]), a2 = { class: "conflict-header" }, l2 = { class: "conflict-info" }, i2 = { class: "workflow-name" }, r2 = { class: "conflict-description" }, c2 = {
  key: 0,
  class: "resolved-badge"
}, u2 = { class: "resolved-text" }, d2 = { class: "conflict-hashes" }, f2 = { class: "hash-item" }, m2 = { class: "hash-item" }, v2 = { class: "conflict-actions" }, p2 = /* @__PURE__ */ de({
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
    const i = N(() => l.value !== null), c = N(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = N(() => {
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
        class: Se(["conflict-item", { resolved: i.value }])
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
            m[3] || (m[3] = b("Your: ", -1)),
            t("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", m2, [
            m[4] || (m[4] = b("Theirs: ", -1)),
            t("code", null, f(((g = e.conflict.target_hash) == null ? void 0 : g.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", v2, [
          x(n2, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), g2 = /* @__PURE__ */ pe(p2, [["__scopeId", "data-v-506d3bbf"]]), h2 = { class: "resolution-content" }, y2 = {
  key: 0,
  class: "error-box"
}, w2 = { class: "resolution-header" }, _2 = { class: "header-stats" }, k2 = { class: "stat" }, b2 = { class: "stat-value" }, $2 = { class: "stat resolved" }, C2 = { class: "stat-value" }, x2 = {
  key: 0,
  class: "stat pending"
}, S2 = { class: "stat-value" }, I2 = { class: "conflicts-list" }, E2 = {
  key: 1,
  class: "all-resolved-message"
}, T2 = /* @__PURE__ */ de({
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
    const o = e, n = s, l = N(() => o.resolutions.size), i = N(() => o.workflowConflicts.length - l.value), c = N(() => l.value === o.workflowConflicts.length), u = N(
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
            (a(!0), r(j, null, ge(e.workflowConflicts, (_) => (a(), D(g2, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (C) => m(_.name, C)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (a(), r("div", E2, [
            p[6] || (p[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + f(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        x(Pe, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...p[7] || (p[7] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = t("div", { class: "footer-spacer" }, null, -1)),
        x(Pe, {
          variant: "primary",
          disabled: !c.value || e.validating,
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
}), P2 = /* @__PURE__ */ pe(T2, [["__scopeId", "data-v-c58d150d"]]), R2 = { class: "node-conflict-item" }, M2 = { class: "node-header" }, D2 = { class: "node-name" }, L2 = { class: "node-id" }, O2 = { class: "version-comparison" }, A2 = { class: "version yours" }, U2 = { class: "version theirs" }, N2 = { class: "chosen-version" }, z2 = { class: "chosen" }, F2 = { class: "chosen-reason" }, B2 = { class: "affected-workflows" }, V2 = { class: "wf-source" }, W2 = { class: "wf-version" }, G2 = /* @__PURE__ */ de({
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
          (a(!0), r(j, null, ge(e.conflict.affected_workflows, (n) => (a(), r("li", {
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
}), j2 = /* @__PURE__ */ pe(G2, [["__scopeId", "data-v-8b626725"]]), H2 = { class: "validation-content" }, K2 = {
  key: 0,
  class: "compatible-message"
}, q2 = { class: "conflicts-list" }, Y2 = {
  key: 2,
  class: "warnings-section"
}, J2 = /* @__PURE__ */ de({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = N(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (i, c) => (a(), D(ft, {
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
              (a(!0), r(j, null, ge(e.validation.node_conflicts, (u) => (a(), D(j2, {
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
              (a(!0), r(j, null, ge(e.validation.warnings, (u, d) => (a(), r("li", { key: d }, f(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        x(Pe, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => n("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        x(Pe, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => n("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            b(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        x(Pe, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => n("proceed"))
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
}), Q2 = /* @__PURE__ */ pe(J2, [["__scopeId", "data-v-fefd26ed"]]), X2 = { key: 0 }, Z2 = /* @__PURE__ */ de({
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
    } = tt(), _ = k([]), C = k(null), $ = k({}), P = k(!1), R = k(null), I = k(""), S = k(!1), q = k(null), Y = k(!1), V = k("add"), E = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), T = N(() => {
      if (!I.value.trim()) return _.value;
      const we = I.value.toLowerCase();
      return _.value.filter(
        (G) => G.name.toLowerCase().includes(we) || G.fetch_url.toLowerCase().includes(we) || G.push_url.toLowerCase().includes(we)
      );
    });
    async function O() {
      P.value = !0, R.value = null;
      try {
        const we = await n();
        _.value = we.remotes, C.value = we.current_branch_tracking || null, await Promise.all(
          we.remotes.map(async (G) => {
            const W = await d(G.name);
            W && ($.value[G.name] = W);
          })
        );
      } catch (we) {
        R.value = we instanceof Error ? we.message : "Failed to load remotes";
      } finally {
        P.value = !1;
      }
    }
    function le() {
      V.value = "add", E.value = { name: "", fetchUrl: "", pushUrl: "" }, Y.value = !0;
    }
    function Z(we) {
      const G = _.value.find((W) => W.name === we);
      G && (V.value = "edit", E.value = {
        name: G.name,
        fetchUrl: G.fetch_url,
        pushUrl: G.push_url
      }, Y.value = !0);
    }
    async function z(we) {
      try {
        V.value === "add" ? await l(we.name, we.fetchUrl) : await c(we.name, we.fetchUrl, we.pushUrl || void 0), Y.value = !1, await O();
      } catch (G) {
        R.value = G instanceof Error ? G.message : "Operation failed";
      }
    }
    function A() {
      Y.value = !1, E.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function U(we) {
      q.value = we;
      try {
        await u(we);
        const G = await d(we);
        G && ($.value[we] = G), o("toast", `✓ Fetched from ${we}`, "success");
      } catch (G) {
        o("toast", G instanceof Error ? G.message : "Fetch failed", "error");
      } finally {
        q.value = null;
      }
    }
    async function M(we) {
      if (confirm(`Remove remote "${we}"?`))
        try {
          await i(we), await O();
        } catch (G) {
          R.value = G instanceof Error ? G.message : "Failed to remove remote";
        }
    }
    function ee() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const Q = k("idle"), he = N(() => Q.value === "pull_preview"), _e = N(
      () => Q.value === "resolving" || Q.value === "validating"
    ), Re = N(
      () => Q.value === "validation_review" || Q.value === "executing"
    ), Ne = k(!1), Ue = k(null), qe = k(!1), ze = k(null), Te = k(!1), Ee = k(null), H = k(null), K = k(/* @__PURE__ */ new Map()), ie = k(null), ye = k(null), L = N(() => Ee.value && Er(Ee.value) ? Ee.value : null);
    async function B(we) {
      ze.value = we, Q.value = "pull_preview", Te.value = !0, Ee.value = null, H.value = null;
      try {
        Ee.value = await m(we);
      } catch (G) {
        H.value = G instanceof Error ? G.message : "Failed to load pull preview";
      } finally {
        Te.value = !1;
      }
    }
    function se() {
      Q.value = "idle", Ee.value = null, H.value = null, ze.value = null;
    }
    async function ne(we) {
      if (!ze.value) return;
      Q.value = "executing", H.value = null;
      const G = ze.value;
      try {
        const W = await v(G, we);
        if (W.rolled_back) {
          H.value = `Pull failed and was rolled back: ${W.error || "Unknown error"}`, Q.value = "pull_preview";
          return;
        }
        Ie(), Q.value = "idle", o("toast", `✓ Pulled from ${G}`, "success"), await O();
      } catch (W) {
        H.value = W instanceof Error ? W.message : "Pull failed", Q.value = "pull_preview";
      }
    }
    function fe() {
      L.value && (Q.value = "resolving", ye.value = null);
    }
    function me(we, G) {
      K.value.set(we, { name: we, resolution: G });
    }
    function Ce() {
      Q.value = "pull_preview";
    }
    async function xe() {
      Q.value = "validating", ye.value = null;
      try {
        const we = Array.from(K.value.values());
        ie.value = await p(ze.value, we), Q.value = "validation_review";
      } catch (we) {
        ye.value = we instanceof Error ? we.message : "Validation failed", Q.value = "resolving";
      }
    }
    async function re() {
      Q.value = "executing";
      const we = ze.value;
      try {
        const G = Array.from(K.value.values()), W = await v(we, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: G
        });
        if (W.rolled_back) {
          H.value = `Pull failed and was rolled back: ${W.error || "Unknown error"}`, Q.value = "pull_preview";
          return;
        }
        Ie(), Q.value = "idle", o("toast", `✓ Pulled from ${we}`, "success"), await O();
      } catch (G) {
        H.value = G instanceof Error ? G.message : "Pull failed", Q.value = "validation_review";
      }
    }
    function ve() {
      Q.value = "resolving";
    }
    function Le() {
      Ie(), Q.value = "idle";
    }
    function Ie() {
      K.value.clear(), ie.value = null, ye.value = null, H.value = null, Ee.value = null, ze.value = null;
    }
    async function oe(we) {
      ze.value = we, Ne.value = !0, Te.value = !0, Ue.value = null;
      try {
        Ue.value = await g(we);
      } catch (G) {
        R.value = G instanceof Error ? G.message : "Failed to load push preview";
      } finally {
        Te.value = !1;
      }
    }
    function X() {
      Ne.value = !1, Ue.value = null, ze.value = null;
    }
    async function Me(we) {
      if (!ze.value) return;
      qe.value = !0;
      const G = ze.value;
      try {
        await w(G, we), X(), o("toast", `✓ Pushed to ${G}`, "success"), await O();
      } catch (W) {
        o("toast", W instanceof Error ? W.message : "Push failed", "error");
      } finally {
        qe.value = !1;
      }
    }
    function ke() {
      const we = ze.value;
      X(), we && B(we);
    }
    return Qe(O), (we, G) => (a(), r(j, null, [
      x(Pt, null, {
        header: h(() => [
          x(Rt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: G[0] || (G[0] = (W) => S.value = !0)
          }, {
            actions: h(() => [
              Y.value ? y("", !0) : (a(), D(ce, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: le
              }, {
                default: h(() => [...G[3] || (G[3] = [
                  b(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          Y.value ? y("", !0) : (a(), D($o, {
            key: 0,
            modelValue: I.value,
            "onUpdate:modelValue": G[1] || (G[1] = (W) => I.value = W),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: h(() => [
          P.value ? (a(), D(Ps, {
            key: 0,
            message: "Loading remotes..."
          })) : R.value ? (a(), D(Rs, {
            key: 1,
            message: R.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            Y.value ? (a(), D(jk, {
              key: 0,
              mode: V.value,
              "remote-name": E.value.name,
              "fetch-url": E.value.fetchUrl,
              "push-url": E.value.pushUrl,
              onSubmit: z,
              onCancel: A
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            _.value.length && !Y.value ? (a(), D(an, {
              key: 1,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                C.value ? (a(), r("span", X2, " • Tracking: " + f(C.value.remote) + "/" + f(C.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            T.value.length && !Y.value ? (a(), D(lt, {
              key: 2,
              title: "REMOTES",
              count: T.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, ge(T.value, (W) => (a(), D(Mk, {
                  key: W.name,
                  remote: W,
                  "sync-status": $.value[W.name],
                  "fetching-remote": q.value,
                  onFetch: U,
                  onEdit: Z,
                  onRemove: M,
                  onPull: B,
                  onPush: oe
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !T.value.length && !Y.value ? (a(), D(ns, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                x(ce, {
                  variant: "primary",
                  onClick: le
                }, {
                  default: h(() => [...G[4] || (G[4] = [
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
        show: S.value,
        title: "About Git Remotes",
        onClose: G[2] || (G[2] = (W) => S.value = !1)
      }, {
        content: h(() => [...G[5] || (G[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            b(" The "),
            t("strong", null, '"origin"'),
            b(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          x(ce, {
            variant: "link",
            onClick: ee
          }, {
            default: h(() => [...G[6] || (G[6] = [
              b(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      x(Eb, {
        show: he.value,
        "remote-name": ze.value || "",
        preview: Ee.value,
        loading: Te.value,
        pulling: Q.value === "executing",
        error: H.value,
        "conflict-resolutions": K.value,
        onClose: se,
        onPull: ne,
        onOpenConflictResolution: fe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      x(Zb, {
        show: Ne.value,
        "remote-name": ze.value || "",
        preview: Ue.value,
        loading: Te.value,
        pushing: qe.value,
        onClose: X,
        onPush: Me,
        onPullFirst: ke
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      _e.value && L.value ? (a(), D(P2, {
        key: 0,
        "workflow-conflicts": L.value.workflow_conflicts,
        resolutions: K.value,
        "operation-type": "pull",
        validating: Q.value === "validating",
        error: ye.value,
        onClose: Ce,
        onResolve: me,
        onApply: xe
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      Re.value && ie.value ? (a(), D(Q2, {
        key: 1,
        validation: ie.value,
        "operation-type": "pull",
        executing: Q.value === "executing",
        onProceed: re,
        onGoBack: ve,
        onCancel: Le
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), e$ = /* @__PURE__ */ pe(Z2, [["__scopeId", "data-v-9ae3b76d"]]), t$ = { class: "setting-info" }, s$ = { class: "setting-label" }, o$ = {
  key: 0,
  class: "required-marker"
}, n$ = {
  key: 0,
  class: "setting-description"
}, a$ = { class: "setting-control" }, l$ = /* @__PURE__ */ de({
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
      t("div", t$, [
        t("div", s$, [
          b(f(e.label) + " ", 1),
          e.required ? (a(), r("span", o$, "*")) : y("", !0)
        ]),
        e.description ? (a(), r("div", n$, f(e.description), 1)) : y("", !0)
      ]),
      t("div", a$, [
        He(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), yn = /* @__PURE__ */ pe(l$, [["__scopeId", "data-v-cb5d236c"]]), i$ = { class: "toggle" }, r$ = ["checked", "disabled"], c$ = /* @__PURE__ */ de({
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
}), Zl = /* @__PURE__ */ pe(c$, [["__scopeId", "data-v-71c0f550"]]), u$ = { class: "workspace-settings-content" }, d$ = { class: "settings-section" }, f$ = { class: "path-setting" }, m$ = { class: "path-value" }, v$ = { class: "path-setting" }, p$ = { class: "path-value" }, g$ = { class: "settings-section" }, h$ = { class: "settings-section" }, y$ = { class: "settings-section" }, w$ = /* @__PURE__ */ de({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = o, { getConfig: i, updateConfig: c } = tt(), u = k(!1), d = k(null), m = k(null), v = k(null), g = k(null), w = k(""), p = k(""), _ = k(!1), C = k(!0);
    function $(E) {
      return E.join(" ");
    }
    function P(E) {
      return E.trim() ? E.trim().split(/\s+/) : [];
    }
    const R = N(() => {
      if (!g.value) return !1;
      const E = w.value !== (g.value.civitai_api_key || ""), T = p.value !== $(g.value.comfyui_extra_args || []);
      return E || T;
    });
    async function I() {
      u.value = !0, d.value = null;
      try {
        v.value = await i(n.workspacePath || void 0), g.value = { ...v.value }, w.value = v.value.civitai_api_key || "", p.value = $(v.value.comfyui_extra_args || []);
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
        w.value !== (((E = g.value) == null ? void 0 : E.civitai_api_key) || "") && (O.civitai_api_key = w.value || null), p.value !== $(((T = g.value) == null ? void 0 : T.comfyui_extra_args) || []) && (O.comfyui_extra_args = P(p.value)), await c(O, n.workspacePath || void 0), await I(), m.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (O) {
        const le = O instanceof Error ? O.message : "Failed to save settings";
        m.value = { type: "error", message: le }, l("error", le);
      }
    }
    function q() {
      g.value && (w.value = g.value.civitai_api_key || "", p.value = $(g.value.comfyui_extra_args || []), m.value = null);
    }
    function Y(E) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(E)), console.log("[ComfyGit] Auto-refresh setting saved:", E);
    }
    function V(E) {
      E ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", E ? "enabled" : "disabled");
    }
    return s({
      saveSettings: S,
      resetSettings: q,
      hasChanges: R,
      loadSettings: I
    }), Qe(I), (E, T) => (a(), r("div", u$, [
      u.value ? (a(), D(Ps, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (a(), D(Rs, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: I
      }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
        x(lt, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var O, le;
            return [
              t("div", d$, [
                t("div", f$, [
                  T[4] || (T[4] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  T[5] || (T[5] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", m$, f(((O = v.value) == null ? void 0 : O.workspace_path) || "Loading..."), 1)
                ]),
                t("div", v$, [
                  T[6] || (T[6] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  T[7] || (T[7] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", p$, f(((le = v.value) == null ? void 0 : le.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        x(lt, { title: "API CREDENTIALS" }, {
          default: h(() => [
            t("div", g$, [
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
            t("div", h$, [
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
          default: h(() => [
            t("div", y$, [
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
                      V
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
}), Tr = /* @__PURE__ */ pe(w$, [["__scopeId", "data-v-f28917ec"]]), _$ = /* @__PURE__ */ de({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), D(Pt, null, {
      header: h(() => [
        x(Rt, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var i, c;
            return [
              x(ce, {
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
              (c = s.value) != null && c.hasChanges ? (a(), D(ce, {
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
}), k$ = { class: "base-tabs" }, b$ = ["disabled", "onClick"], $$ = {
  key: 0,
  class: "base-tabs__badge"
}, C$ = /* @__PURE__ */ de({
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
      (a(!0), r(j, null, ge(e.tabs, (u) => (a(), r("button", {
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
        u.badge ? (a(), r("span", $$, f(u.badge), 1)) : y("", !0)
      ], 10, b$))), 128))
    ]));
  }
}), Pr = /* @__PURE__ */ pe(C$, [["__scopeId", "data-v-ad5e6cad"]]), x$ = { class: "log-viewer-wrapper" }, S$ = ["disabled", "title"], I$ = /* @__PURE__ */ de({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const s = e, o = k(null), n = k("idle"), l = N(() => s.logs.map((m) => ({
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
        (a(!0), r(j, null, ge(l.value, (g, w) => (a(), r("div", {
          key: w,
          class: Se(`log-line log-level-${g.level.toLowerCase()}`)
        }, f(g.text), 3))), 128))
      ], 544)
    ]));
  }
}), Rr = /* @__PURE__ */ pe(I$, [["__scopeId", "data-v-c0cc6d21"]]), E$ = /* @__PURE__ */ de({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: n,
      getOrchestratorLogPath: l,
      openFile: i
    } = tt(), c = k("workspace"), u = k([]), d = k(!1), m = k(null), v = k(!1), g = k(null), w = k(null), p = k(!1), _ = N(() => c.value === "workspace" ? g.value : w.value);
    async function C() {
      d.value = !0, m.value = null;
      try {
        c.value === "workspace" ? u.value = await s(void 0, 500) : u.value = await n(void 0, 500);
      } catch (R) {
        m.value = R instanceof Error ? R.message : `Failed to load ${c.value} logs`;
      } finally {
        d.value = !1;
      }
    }
    async function $() {
      try {
        const [R, I] = await Promise.all([
          o(),
          l()
        ]);
        R.exists && (g.value = R.path), I.exists && (w.value = I.path);
      } catch {
      }
    }
    async function P() {
      if (_.value) {
        p.value = !0;
        try {
          await i(_.value);
        } catch (R) {
          console.error("Failed to open log file:", R);
        } finally {
          p.value = !1;
        }
      }
    }
    return yt(c, () => {
      C();
    }), Qe(() => {
      C(), $();
    }), (R, I) => (a(), r(j, null, [
      x(Pt, null, {
        header: h(() => [
          x(Rt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (S) => v.value = !0)
          }, {
            actions: h(() => [
              x(ce, {
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
              x(ce, {
                variant: "secondary",
                size: "sm",
                onClick: C,
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
            modelValue: c.value,
            "onUpdate:modelValue": I[1] || (I[1] = (S) => c.value = S),
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
            }, null, 8, ["message"])) : (a(), D(Rr, {
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
          x(ce, {
            variant: "primary",
            onClick: I[2] || (I[2] = (S) => v.value = !1)
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
}), T$ = /* @__PURE__ */ de({
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
    }), (C, $) => (a(), r(j, null, [
      x(Pt, null, {
        header: h(() => [
          x(Rt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (P) => d.value = !0)
          }, {
            actions: h(() => [
              x(ce, {
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
              x(ce, {
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
          x(ce, {
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
}), P$ = { class: "env-title" }, R$ = {
  key: 0,
  class: "current-badge"
}, M$ = {
  key: 0,
  class: "branch-info"
}, D$ = /* @__PURE__ */ de({
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
        b(f(e.isCurrent ? "🌍" : "○"), 1)
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
          b(" " + f(e.currentBranch), 1)
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
}), L$ = /* @__PURE__ */ pe(D$, [["__scopeId", "data-v-9231917a"]]), O$ = { class: "env-details" }, A$ = { class: "status-row" }, U$ = {
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
}, Q$ = { class: "value" }, X$ = { class: "footer-actions" }, Z$ = /* @__PURE__ */ de({
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
        t("div", O$, [
          t("div", A$, [
            i[3] || (i[3] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Se(["status-badge", e.environment.is_current ? "current" : "inactive"])
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
            t("span", Q$, f(n(e.environment.last_used)), 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", X$, [
          e.canDelete ? (a(), D(Pe, {
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
          x(Pe, {
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
}), eC = /* @__PURE__ */ pe(Z$, [["__scopeId", "data-v-59855453"]]), Mr = [
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
], Lr = "auto", tC = { class: "progress-bar" }, sC = /* @__PURE__ */ de({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = N(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (n, l) => (a(), r("div", tC, [
      t("div", {
        class: Se(["progress-fill", e.variant]),
        style: qt({ width: o.value })
      }, null, 6)
    ]));
  }
}), ea = /* @__PURE__ */ pe(sC, [["__scopeId", "data-v-1beb0512"]]), oC = { class: "task-progress" }, nC = { class: "progress-info" }, aC = { class: "progress-percentage" }, lC = { class: "progress-message" }, iC = {
  key: 0,
  class: "progress-steps"
}, rC = { class: "step-icon" }, cC = { class: "step-label" }, uC = /* @__PURE__ */ de({
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
      x(ea, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", nC, [
        t("span", aC, f(e.progress) + "%", 1),
        t("span", lC, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), r("div", iC, [
        (a(!0), r(j, null, ge(e.steps, (c) => (a(), r("div", {
          key: c.id,
          class: Se(["step", o(c.id)])
        }, [
          t("span", rC, f(n(c.id)), 1),
          t("span", cC, f(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), zn = /* @__PURE__ */ pe(uC, [["__scopeId", "data-v-9d1de66c"]]), dC = {
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
}, EC = 10, TC = /* @__PURE__ */ de({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: i } = tt(), c = k(""), u = k(Dr), d = k("latest"), m = k(Lr), v = k(!1), g = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = k(!1), p = k(!1), _ = k({
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
    ], R = k(null);
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
      C || ($ = 0, C = window.setInterval(async () => {
        try {
          const T = await i();
          $ = 0, _.value = {
            progress: T.progress ?? 0,
            message: T.message,
            phase: T.phase,
            error: T.error
          }, T.state === "complete" ? (Y(), o("created", T.environment_name || c.value.trim(), v.value)) : T.state === "error" ? (Y(), _.value.error = T.error || T.message) : T.state === "idle" && p.value && (Y(), _.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= EC && (Y(), _.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function Y() {
      C && (clearInterval(C), C = null);
    }
    function V() {
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
      await _t(), (T = R.value) == null || T.focus(), E();
    }), oo(() => {
      Y();
    }), (T, O) => (a(), D(ft, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !p.value,
      onClose: I
    }, {
      body: h(() => [
        p.value ? (a(), r("div", bC, [
          t("p", $C, [
            O[11] || (O[11] = b(" Creating environment ", -1)),
            t("strong", null, f(c.value), 1),
            O[12] || (O[12] = b("... ", -1))
          ]),
          x(zn, {
            progress: _.value.progress,
            message: _.value.message,
            "current-phase": _.value.phase,
            variant: _.value.error ? "error" : "default",
            "show-steps": !0,
            steps: P
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          _.value.error ? y("", !0) : (a(), r("p", CC, " This may take several minutes. Please wait... ")),
          _.value.error ? (a(), r("div", xC, [
            t("p", SC, f(_.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), r("div", dC, [
          t("div", fC, [
            O[6] || (O[6] = t("label", { class: "form-label" }, "Name", -1)),
            Ke(t("input", {
              ref_key: "nameInput",
              ref: R,
              "onUpdate:modelValue": O[0] || (O[0] = (le) => c.value = le),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Ht(S, ["enter"])
            }, null, 544), [
              [zt, c.value]
            ])
          ]),
          t("div", mC, [
            O[7] || (O[7] = t("label", { class: "form-label" }, "Python Version", -1)),
            Ke(t("select", {
              "onUpdate:modelValue": O[1] || (O[1] = (le) => u.value = le),
              class: "form-select"
            }, [
              (a(!0), r(j, null, ge(Ve(Mr), (le) => (a(), r("option", {
                key: le,
                value: le
              }, f(le), 9, vC))), 128))
            ], 512), [
              [hs, u.value]
            ])
          ]),
          t("div", pC, [
            O[8] || (O[8] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ke(t("select", {
              "onUpdate:modelValue": O[2] || (O[2] = (le) => d.value = le),
              class: "form-select",
              disabled: w.value
            }, [
              (a(!0), r(j, null, ge(g.value, (le) => (a(), r("option", {
                key: le.tag_name,
                value: le.tag_name
              }, f(le.name), 9, hC))), 128))
            ], 8, gC), [
              [hs, d.value]
            ])
          ]),
          t("div", yC, [
            O[9] || (O[9] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ke(t("select", {
              "onUpdate:modelValue": O[3] || (O[3] = (le) => m.value = le),
              class: "form-select"
            }, [
              (a(!0), r(j, null, ge(Ve(al), (le) => (a(), r("option", {
                key: le,
                value: le
              }, f(le) + f(le === "auto" ? " (detect GPU)" : ""), 9, wC))), 128))
            ], 512), [
              [hs, m.value]
            ])
          ]),
          t("div", _C, [
            t("label", kC, [
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
        p.value ? (a(), r(j, { key: 1 }, [
          _.value.error ? (a(), D(Pe, {
            key: 0,
            variant: "secondary",
            onClick: V
          }, {
            default: h(() => [...O[15] || (O[15] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), r("span", IC, " Creating environment... "))
        ], 64)) : (a(), r(j, { key: 0 }, [
          x(Pe, {
            variant: "primary",
            disabled: !c.value.trim(),
            onClick: S
          }, {
            default: h(() => [...O[13] || (O[13] = [
              b(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          x(Pe, {
            variant: "secondary",
            onClick: O[5] || (O[5] = (le) => o("close"))
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
}), PC = /* @__PURE__ */ pe(TC, [["__scopeId", "data-v-f37eaa42"]]), RC = /* @__PURE__ */ de({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getEnvironments: l } = tt(), i = k([]), c = k(!1), u = k(null), d = k(""), m = k(!1), v = k(!1), g = k(null), w = N(() => {
      if (!d.value.trim()) return i.value;
      const R = d.value.toLowerCase();
      return i.value.filter(
        (I) => {
          var S;
          return I.name.toLowerCase().includes(R) || ((S = I.current_branch) == null ? void 0 : S.toLowerCase().includes(R));
        }
      );
    });
    function p(R, I) {
      v.value = !1, n("created", R, I);
    }
    function _() {
      v.value = !0;
    }
    function C(R) {
      g.value = R;
    }
    function $(R) {
      g.value = null, n("delete", R);
    }
    async function P() {
      c.value = !0, u.value = null;
      try {
        i.value = await l();
      } catch (R) {
        u.value = R instanceof Error ? R.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return Qe(P), s({
      loadEnvironments: P,
      openCreateModal: _
    }), (R, I) => (a(), r(j, null, [
      x(Pt, null, {
        header: h(() => [
          x(Rt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (S) => m.value = !0)
          }, {
            actions: h(() => [
              x(ce, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: h(() => [...I[6] || (I[6] = [
                  b(" Create ", -1)
                ])]),
                _: 1
              }),
              x(ce, {
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
          x($o, {
            modelValue: d.value,
            "onUpdate:modelValue": I[1] || (I[1] = (S) => d.value = S),
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
            onRetry: P
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            w.value.length ? (a(), D(lt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, ge(w.value, (S) => (a(), D(L$, {
                  key: S.name,
                  "environment-name": S.name,
                  "is-current": S.is_current,
                  "current-branch": S.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    S.is_current ? y("", !0) : (a(), D(ce, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => R.$emit("switch", S.name)
                    }, {
                      default: h(() => [...I[8] || (I[8] = [
                        b(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    x(ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => C(S)
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
            w.value.length ? y("", !0) : (a(), D(ns, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, so({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  x(ce, {
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
      x(as, {
        show: m.value,
        title: "About Environments",
        onClose: I[3] || (I[3] = (S) => m.value = !1)
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
          x(ce, {
            variant: "secondary",
            onClick: I[2] || (I[2] = (S) => m.value = !1)
          }, {
            default: h(() => [...I[12] || (I[12] = [
              b(" Got it ", -1)
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
        onClose: I[4] || (I[4] = (S) => g.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : y("", !0),
      v.value ? (a(), D(PC, {
        key: 1,
        onClose: I[5] || (I[5] = (S) => v.value = !1),
        onCreated: p
      })) : y("", !0)
    ], 64));
  }
}), MC = /* @__PURE__ */ pe(RC, [["__scopeId", "data-v-f95999f4"]]), DC = { class: "file-path" }, LC = { class: "file-path-text" }, OC = ["title"], AC = /* @__PURE__ */ de({
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
}), UC = /* @__PURE__ */ pe(AC, [["__scopeId", "data-v-f0982173"]]), NC = { class: "export-blocked" }, zC = { class: "issues-list" }, FC = { class: "issue-message" }, BC = {
  key: 0,
  class: "issue-details"
}, VC = ["onClick"], WC = { class: "issue-fix" }, GC = /* @__PURE__ */ de({
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
            (a(!0), r(j, null, ge(e.issues, (c, u) => (a(), r("div", {
              key: u,
              class: "issue-item"
            }, [
              t("div", FC, f(c.message), 1),
              c.details.length ? (a(), r("div", BC, [
                (a(!0), r(j, null, ge(n(u), (d, m) => (a(), r("div", {
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
                  b(" Commit your workflow changes before exporting. ")
                ], 64)) : c.type === "uncommitted_git_changes" ? (a(), r(j, { key: 1 }, [
                  b(" Commit your changes before exporting. ")
                ], 64)) : c.type === "unresolved_issues" ? (a(), r(j, { key: 2 }, [
                  b(" Resolve all workflow issues before exporting. ")
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: h(() => [
        x(Pe, {
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
}), Or = /* @__PURE__ */ pe(GC, [["__scopeId", "data-v-b52f5e32"]]), jC = { class: "export-warnings" }, HC = {
  key: 0,
  class: "success-header"
}, KC = { class: "warning-header" }, qC = { class: "warning-summary" }, YC = { class: "warning-title" }, JC = { class: "models-section" }, QC = { class: "models-list" }, XC = { class: "model-info" }, ZC = { class: "model-filename" }, ex = { class: "model-workflows" }, tx = ["onClick"], sx = /* @__PURE__ */ de({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = k(!1), i = k(null), c = N(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function u() {
      i.value = null, n("revalidate");
    }
    return (d, m) => (a(), r(j, null, [
      x(ft, {
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
                t("div", QC, [
                  (a(!0), r(j, null, ge(c.value, (v) => (a(), r("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", XC, [
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
          x(Pe, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (v) => d.$emit("cancel"))
          }, {
            default: h(() => [...m[7] || (m[7] = [
              b(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          x(Pe, {
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
      i.value ? (a(), D(ol, {
        key: 0,
        identifier: i.value,
        onClose: u
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Ar = /* @__PURE__ */ pe(sx, [["__scopeId", "data-v-b698d882"]]), ox = { class: "export-card" }, nx = { class: "export-path-row" }, ax = { class: "export-actions" }, lx = {
  key: 1,
  class: "export-warning"
}, ix = /* @__PURE__ */ de({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = tt(), n = k(""), l = k(!1), i = k(!1), c = k(!1), u = k(null), d = k(!1), m = k(null), v = k(!1), g = k(!1), w = N(() => l.value ? "Validating..." : i.value ? "Exporting..." : "Export Environment");
    async function p() {
      l.value = !0, u.value = null;
      try {
        const I = await s();
        m.value = I, I.can_export ? I.warnings.models_without_sources.length > 0 ? g.value = !0 : await $() : v.value = !0;
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
      g.value = !1, await $();
    }
    async function C() {
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
    async function R() {
      var I;
      if ((I = u.value) != null && I.path) {
        c.value = !0;
        try {
          const S = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!S.ok)
            throw new Error(`Download failed: ${S.statusText}`);
          const q = await S.blob(), Y = URL.createObjectURL(q), V = u.value.path.split("/").pop() || "environment-export.tar.gz", E = document.createElement("a");
          E.href = Y, E.download = V, document.body.appendChild(E), E.click(), document.body.removeChild(E), URL.revokeObjectURL(Y);
        } catch (S) {
          console.error("Failed to download:", S), alert(`Download failed: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          c.value = !1;
        }
      }
    }
    return (I, S) => (a(), r(j, null, [
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
              t("div", ox, [
                S[7] || (S[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", nx, [
                  x(Un, {
                    modelValue: n.value,
                    "onUpdate:modelValue": S[1] || (S[1] = (q) => n.value = q),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", ax, [
                  x(ce, {
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
                      b(" " + f(w.value), 1)
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
                        x(UC, {
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
                    x(ce, {
                      variant: "primary",
                      size: "sm",
                      loading: c.value,
                      onClick: R
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
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    x(ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: P
                    }, {
                      default: h(() => [...S[10] || (S[10] = [
                        b(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    x(ce, {
                      variant: "ghost",
                      size: "sm",
                      onClick: S[2] || (S[2] = (q) => u.value = null)
                    }, {
                      default: h(() => [...S[11] || (S[11] = [
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
        onClose: S[3] || (S[3] = (q) => d.value = !1)
      }, {
        content: h(() => [...S[12] || (S[12] = [
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
      v.value && m.value ? (a(), D(Or, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: S[4] || (S[4] = (q) => v.value = !1)
      }, null, 8, ["issues"])) : y("", !0),
      g.value && m.value ? (a(), D(Ar, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: _,
        onCancel: S[5] || (S[5] = (q) => g.value = !1),
        onRevalidate: C
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), rx = /* @__PURE__ */ pe(ix, [["__scopeId", "data-v-f4d120f2"]]), cx = { class: "file-input-wrapper" }, ux = ["accept", "multiple", "disabled"], dx = /* @__PURE__ */ de({
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
      x(ce, {
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
            b(" " + f(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), fx = /* @__PURE__ */ pe(dx, [["__scopeId", "data-v-cd192091"]]), mx = {
  key: 0,
  class: "drop-zone-empty"
}, vx = { class: "drop-zone-text" }, px = { class: "drop-zone-primary" }, gx = { class: "drop-zone-secondary" }, hx = { class: "drop-zone-actions" }, yx = {
  key: 1,
  class: "drop-zone-file"
}, wx = { class: "file-info" }, _x = { class: "file-details" }, kx = { class: "file-name" }, bx = { class: "file-size" }, $x = /* @__PURE__ */ de({
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
    const o = s, n = k(!1), l = k(null), i = k(0), c = N(() => l.value !== null), u = N(() => {
      var $;
      return (($ = l.value) == null ? void 0 : $.name) || "";
    }), d = N(() => {
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
      var R;
      $.stopPropagation(), i.value = 0, n.value = !1;
      const P = (R = $.dataTransfer) == null ? void 0 : R.files;
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
      onDragleave: it(g, ["prevent"]),
      onDrop: it(w, ["prevent"])
    }, [
      c.value ? (a(), r("div", yx, [
        t("div", wx, [
          P[1] || (P[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", _x, [
            t("div", kx, f(u.value), 1),
            t("div", bx, f(d.value), 1)
          ])
        ]),
        x(ce, {
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
      ])) : (a(), r("div", mx, [
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
        t("div", vx, [
          t("p", px, f(e.primaryText), 1),
          t("p", gx, f(e.secondaryText), 1)
        ]),
        t("div", hx, [
          x(fx, {
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
}), Cx = /* @__PURE__ */ pe($x, [["__scopeId", "data-v-0f79cb86"]]), xx = { class: "import-preview" }, Sx = { class: "preview-header" }, Ix = {
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
}, Jx = { class: "item-name" }, Qx = {
  key: 0,
  class: "item-more"
}, Xx = {
  key: 0,
  class: "preview-section"
}, Zx = { class: "git-info" }, e3 = /* @__PURE__ */ de({
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
    const s = e, o = N(() => s.workflows.length), n = N(() => s.models.length), l = N(() => s.nodes.length);
    function i(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (a(), r("div", xx, [
      t("div", Sx, [
        x(Ut, null, {
          default: h(() => [...u[0] || (u[0] = [
            b("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), r("span", Ix, [
          u[1] || (u[1] = b(" From: ", -1)),
          x(Ma, null, {
            default: h(() => [
              b(f(e.sourceEnvironment), 1)
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
            (a(!0), r(j, null, ge(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
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
            (a(!0), r(j, null, ge(e.models.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
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
            (a(!0), r(j, null, ge(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", Jx, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), r("div", Qx, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), r("div", Xx, [
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
                x(Ma, null, {
                  default: h(() => [
                    b(f(e.gitBranch), 1)
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
                x(br, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), t3 = /* @__PURE__ */ pe(e3, [["__scopeId", "data-v-182fe113"]]), s3 = { class: "import-config" }, o3 = { class: "config-container" }, n3 = { class: "config-field" }, a3 = { class: "input-wrapper" }, l3 = ["value"], i3 = {
  key: 0,
  class: "validating-indicator"
}, r3 = {
  key: 1,
  class: "valid-indicator"
}, c3 = {
  key: 0,
  class: "field-error"
}, u3 = { class: "config-field" }, d3 = { class: "strategy-options" }, f3 = ["value", "checked", "onChange"], m3 = { class: "strategy-content" }, v3 = { class: "strategy-label" }, p3 = { class: "strategy-description" }, g3 = { class: "config-field switch-field" }, h3 = { class: "switch-label" }, y3 = ["checked"], w3 = { class: "advanced-section" }, _3 = { class: "advanced-content" }, k3 = { class: "config-field" }, b3 = ["value"], $3 = ["value"], C3 = /* @__PURE__ */ de({
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
    return (v, g) => (a(), r("div", s3, [
      x(Ut, null, {
        default: h(() => [...g[2] || (g[2] = [
          b("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", o3, [
        t("div", n3, [
          x(Sn, { required: "" }, {
            default: h(() => [...g[3] || (g[3] = [
              b("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", a3, [
            t("input", {
              type: "text",
              class: Se(["name-input", { error: e.nameError || e.name.length === 0, valid: i.value }]),
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
          x(Sn, null, {
            default: h(() => [...g[5] || (g[5] = [
              b("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", d3, [
            (a(), r(j, null, ge(c, (w) => t("label", {
              key: w.value,
              class: Se(["strategy-option", { active: e.modelStrategy === w.value }])
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
              x(Sn, null, {
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
                (a(!0), r(j, null, ge(Ve(al), (w) => (a(), r("option", {
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
}), x3 = /* @__PURE__ */ pe(C3, [["__scopeId", "data-v-89ea06a1"]]), S3 = { class: "import-flow" }, I3 = {
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
}, Y3 = { class: "complete-message" }, J3 = { class: "complete-title" }, Q3 = { class: "complete-details" }, X3 = { class: "complete-actions" }, Z3 = /* @__PURE__ */ de({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var qe, ze, Te, Ee;
    const n = e, l = o, { previewTarballImport: i, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: m, getImportProgress: v } = tt();
    let g = null;
    const w = k(null), p = k(n.resumeImport ?? !1), _ = k(!1), C = k(!1), $ = k(""), P = k(!1), R = k(null), I = k(""), S = k(null), q = k(!1), Y = k(null), V = k(null), E = k({
      name: ((qe = n.initialProgress) == null ? void 0 : qe.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), T = k(null), O = k({
      message: ((ze = n.initialProgress) == null ? void 0 : ze.message) ?? "Preparing import...",
      phase: ((Te = n.initialProgress) == null ? void 0 : Te.phase) ?? "",
      progress: ((Ee = n.initialProgress) == null ? void 0 : Ee.progress) ?? 0,
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
    ], Z = N(() => {
      if (!V.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const H = V.value;
      return {
        sourceEnvironment: H.comfyui_version ? `ComfyUI ${H.comfyui_version}` : "Unknown",
        workflows: H.workflows.map((K) => K.name),
        models: H.models.map((K) => ({
          filename: K.filename,
          size: 0,
          type: K.relative_path.split("/")[0] || "model"
        })),
        nodes: H.nodes.map((K) => K.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), z = N(() => !P.value && !R.value && V.value && E.value.name.length > 0 && !T.value && (w.value || S.value));
    async function A(H) {
      w.value = H, P.value = !0, R.value = null, V.value = null;
      try {
        const K = await i(H);
        V.value = K;
      } catch (K) {
        R.value = K instanceof Error ? K.message : "Failed to analyze file", console.error("Preview error:", K);
      } finally {
        P.value = !1;
      }
    }
    function U() {
      w.value = null, S.value = null, I.value = "", Y.value = null, _.value = !1, C.value = !1, $.value = "", V.value = null, R.value = null, E.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, T.value = null, l("source-cleared");
    }
    function M() {
      Ne(), U(), p.value = !1, P.value = !1, q.value = !1, O.value = {
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
          const H = await c(I.value.trim());
          S.value = I.value.trim(), V.value = H;
        } catch (H) {
          Y.value = H instanceof Error ? H.message : "Failed to analyze repository";
        } finally {
          q.value = !1;
        }
      }
    }
    function Q(H) {
      try {
        const K = new URL(H);
        return K.host + K.pathname.replace(/\.git$/, "");
      } catch {
        return H;
      }
    }
    async function he(H) {
      if (!H) {
        T.value = "Environment name is required";
        return;
      }
      try {
        const K = await u(H);
        T.value = K.valid ? null : K.error || "Invalid name";
      } catch {
        T.value = "Failed to validate name";
      }
    }
    async function _e() {
      if (E.value.name && !(!w.value && !S.value)) {
        p.value = !0, _.value = !1, O.value = { message: `Creating environment '${E.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let H;
          if (w.value)
            H = await d(
              w.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else if (S.value)
            H = await m(
              S.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          H.status === "started" ? Re() : (C.value = !1, $.value = H.message, p.value = !1, _.value = !0);
        } catch (H) {
          C.value = !1, $.value = H instanceof Error ? H.message : "Unknown error occurred during import", p.value = !1, _.value = !0;
        }
      }
    }
    async function Re() {
      if (g) return;
      const H = async () => {
        try {
          const ie = await v();
          return O.value = {
            message: ie.message,
            phase: ie.phase || "",
            progress: ie.progress ?? (ie.state === "importing" ? 50 : 0),
            error: ie.error || null
          }, ie.state === "complete" ? (Ne(), C.value = !0, $.value = `Environment '${ie.environment_name}' created successfully`, p.value = !1, _.value = !0, ie.environment_name && l("import-complete", ie.environment_name, E.value.switchAfterImport), !1) : ie.state === "error" ? (Ne(), C.value = !1, $.value = ie.error || ie.message, p.value = !1, _.value = !0, !1) : !0;
        } catch (ie) {
          return console.error("Failed to poll import progress:", ie), !0;
        }
      };
      await H() && (g = setInterval(async () => {
        await H() || Ne();
      }, 2e3));
    }
    function Ne() {
      g && (clearInterval(g), g = null);
    }
    function Ue(H) {
      return H < 1024 ? `${H} B` : H < 1024 * 1024 ? `${(H / 1024).toFixed(1)} KB` : H < 1024 * 1024 * 1024 ? `${(H / (1024 * 1024)).toFixed(1)} MB` : `${(H / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Qe(async () => {
      try {
        const H = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", H.state, H), H.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", H.environment_name), p.value = !0, E.value.name = H.environment_name || E.value.name || "", O.value = {
          progress: H.progress ?? 0,
          message: H.message || "Importing...",
          phase: H.phase || "",
          error: null
        }, Re());
      } catch (H) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", H);
      }
    }), s({
      handleReset: M,
      isImporting: p,
      canImport: z
    }), (H, K) => {
      var ie;
      return a(), r("div", S3, [
        !w.value && !S.value && !p.value ? (a(), r("div", I3, [
          x(Cx, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: A
          }),
          K[7] || (K[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", E3, [
            K[5] || (K[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", T3, [
              Ke(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": K[0] || (K[0] = (ye) => I.value = ye),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Ht(ee, ["enter"]),
                disabled: q.value
              }, null, 40, P3), [
                [zt, I.value]
              ]),
              x(ce, {
                variant: "primary",
                size: "sm",
                disabled: !I.value.trim() || q.value,
                onClick: ee
              }, {
                default: h(() => [
                  b(f(q.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            Y.value ? (a(), r("div", R3, f(Y.value), 1)) : y("", !0),
            K[6] || (K[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || S.value) && !p.value && !_.value ? (a(), r("div", M3, [
          t("div", D3, [
            w.value ? (a(), r("div", L3, [
              K[8] || (K[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", O3, [
                t("div", A3, f(w.value.name), 1),
                t("div", U3, f(Ue(w.value.size)), 1)
              ])
            ])) : S.value ? (a(), r("div", N3, [
              K[10] || (K[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", z3, [
                t("div", F3, f(Q(S.value)), 1),
                K[9] || (K[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            x(ce, {
              variant: "ghost",
              size: "sm",
              onClick: U
            }, {
              default: h(() => [...K[11] || (K[11] = [
                b(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          P.value ? (a(), r("div", B3, [...K[12] || (K[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : R.value ? (a(), D(Qt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [R.value]
          }, null, 8, ["details"])) : V.value ? (a(), D(t3, {
            key: 2,
            "source-environment": Z.value.sourceEnvironment,
            workflows: Z.value.workflows,
            models: Z.value.models,
            nodes: Z.value.nodes,
            "git-branch": Z.value.gitBranch,
            "git-commit": Z.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          V.value ? (a(), D(x3, {
            key: 3,
            name: E.value.name,
            "onUpdate:name": K[1] || (K[1] = (ye) => E.value.name = ye),
            "model-strategy": E.value.modelStrategy,
            "onUpdate:modelStrategy": K[2] || (K[2] = (ye) => E.value.modelStrategy = ye),
            "torch-backend": E.value.torchBackend,
            "onUpdate:torchBackend": K[3] || (K[3] = (ye) => E.value.torchBackend = ye),
            "switch-after-import": E.value.switchAfterImport,
            "onUpdate:switchAfterImport": K[4] || (K[4] = (ye) => E.value.switchAfterImport = ye),
            "name-error": T.value,
            onValidateName: he
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          E.value.modelStrategy === "skip" && ((ie = V.value) != null && ie.models_needing_download) ? (a(), D(Qt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${V.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", V3, [
            x(ce, {
              variant: "secondary",
              size: "md",
              onClick: U
            }, {
              default: h(() => [...K[13] || (K[13] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(ce, {
              variant: "primary",
              size: "md",
              disabled: !z.value,
              onClick: _e
            }, {
              default: h(() => [...K[14] || (K[14] = [
                b(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (a(), r("div", W3, [
          t("p", G3, [
            K[15] || (K[15] = b(" Importing environment ", -1)),
            t("strong", null, f(E.value.name), 1),
            K[16] || (K[16] = b("... ", -1))
          ]),
          x(zn, {
            progress: O.value.progress,
            message: O.value.message,
            "current-phase": O.value.phase,
            variant: O.value.error ? "error" : "default",
            "show-steps": !0,
            steps: le
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          O.value.error ? y("", !0) : (a(), r("p", j3, " This may take several minutes. Please wait... ")),
          O.value.error ? (a(), r("div", H3, [
            t("p", K3, f(O.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), r("div", q3, [
          t("div", {
            class: Se(["complete-icon", C.value ? "success" : "error"])
          }, f(C.value ? "✓" : "✕"), 3),
          t("div", Y3, [
            t("div", J3, f(C.value ? "Import Successful" : "Import Failed"), 1),
            t("div", Q3, f($.value), 1)
          ]),
          t("div", X3, [
            x(ce, {
              variant: "primary",
              size: "md",
              onClick: M
            }, {
              default: h(() => [...K[17] || (K[17] = [
                b(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Ur = /* @__PURE__ */ pe(Z3, [["__scopeId", "data-v-72cbc04e"]]), e5 = /* @__PURE__ */ de({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, n = k(!1);
    function l(i, c) {
      c && o("import-complete-switch", i);
    }
    return (i, c) => (a(), r(j, null, [
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
}), t5 = /* @__PURE__ */ pe(e5, [["__scopeId", "data-v-e13bfe76"]]), wn = co(), s5 = 5e3, lo = k([]), pa = k(!1), ga = k(null);
let Ro = null;
async function _n(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function Nr(e) {
  const s = N(
    () => lo.value.filter((p) => p.status === "running")
  ), o = N(
    () => lo.value.filter((p) => p.status === "deploying")
  ), n = N(
    () => lo.value.filter((p) => p.status === "stopped")
  ), l = N(
    () => s.value.length + o.value.length
  ), i = N(() => {
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
      if (!wn) {
        const _ = u(p, "start"), C = await _n(_, { method: "POST" });
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
      if (!wn) {
        const _ = u(p, "terminate"), C = await _n(_, { method: "DELETE" });
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
}, v5 = { class: "progress-message" }, p5 = { class: "instance-actions" }, g5 = /* @__PURE__ */ de({
  __name: "InstanceCard",
  props: {
    instance: {},
    isLoading: { type: Boolean }
  },
  emits: ["stop", "start", "terminate"],
  setup(e) {
    const s = e, o = N(() => s.instance.provider === "custom" && s.instance.worker_name ? s.instance.worker_name : {
      runpod: "RunPod",
      vast: "Vast.ai",
      custom: "Custom"
    }[s.instance.provider] || s.instance.provider), n = N(() => ({
      deploying: "Deploying",
      starting: "Starting",
      running: "Running",
      stopped: "Stopped",
      error: "Error",
      terminated: "Terminated"
    })[s.instance.status] || s.instance.status), l = N(() => `status-${s.instance.status}`);
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
      t("div", o5, [
        t("span", n5, f(o.value), 1),
        t("span", a5, f(e.instance.name), 1),
        t("span", {
          class: Se(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (a(), r("span", l5)) : y("", !0),
          b(" " + f(n.value), 1)
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
        e.instance.status === "running" && e.instance.comfyui_url ? (a(), D(ce, {
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
        e.instance.console_url && e.instance.provider !== "custom" ? (a(), D(ce, {
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
        e.instance.status === "running" ? (a(), D(ce, {
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
        e.instance.status === "stopped" ? (a(), D(ce, {
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
        x(ce, {
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
}), h5 = /* @__PURE__ */ pe(g5, [["__scopeId", "data-v-746c3894"]]), y5 = { class: "instances-tab" }, w5 = { class: "instances-header" }, _5 = {
  key: 0,
  class: "loading-state"
}, k5 = {
  key: 1,
  class: "empty-state"
}, b5 = {
  key: 2,
  class: "instances-list"
}, $5 = /* @__PURE__ */ de({
  __name: "InstancesTab",
  props: {
    instances: {},
    isLoading: { type: Boolean },
    actionLoadingId: {}
  },
  emits: ["refresh", "stop", "start", "terminate"],
  setup(e) {
    const s = e, o = N(() => {
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
        x(Ut, null, {
          default: h(() => [...l[4] || (l[4] = [
            b("Active Instances", -1)
          ])]),
          _: 1
        }),
        x(ce, {
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
      e.isLoading && e.instances.length === 0 ? (a(), r("div", _5, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        b(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (a(), r("div", k5, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (a(), r("div", b5, [
        (a(!0), r(j, null, ge(o.value, (i) => (a(), D(h5, {
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
}), C5 = /* @__PURE__ */ pe($5, [["__scopeId", "data-v-ba614fc3"]]), x5 = { class: "remote-header" }, S5 = { class: "remote-info" }, I5 = { class: "remote-icon" }, E5 = { class: "remote-name" }, T5 = {
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
}, A5 = { class: "remote-actions" }, U5 = /* @__PURE__ */ de({
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
    const s = e, o = N(() => s.remote.is_default), n = N(() => {
      const i = s.remote.fetch_url, c = i.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return c ? `https://${c[1]}/${c[2]}` : i.startsWith("https://") || i.startsWith("http://") ? i.replace(/\.git$/, "") : null;
    }), l = N(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (i, c) => (a(), r("div", {
      class: Se(["deploy-remote-card", { selected: e.isSelected }])
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
        x(ce, {
          variant: "secondary",
          size: "xs",
          loading: e.isFetching,
          onClick: c[1] || (c[1] = (u) => i.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...c[4] || (c[4] = [
            b(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        e.syncStatus && e.syncStatus.ahead > 0 ? (a(), D(ce, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: e.isPushing,
          onClick: c[2] || (c[2] = (u) => i.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            b(" Push ↑" + f(e.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : y("", !0),
        x(ce, {
          variant: e.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: c[3] || (c[3] = (u) => i.$emit("select", e.remote.name))
        }, {
          default: h(() => [
            b(f(e.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), zr = /* @__PURE__ */ pe(U5, [["__scopeId", "data-v-d687d161"]]), N5 = { class: "runpod-tab" }, z5 = { class: "api-key-card" }, F5 = { class: "api-key-row" }, B5 = { class: "api-key-input-wrapper" }, V5 = ["type", "disabled"], W5 = ["title"], G5 = { class: "status-icon" }, j5 = { class: "status-text" }, H5 = {
  key: 0,
  class: "credit-balance"
}, K5 = { class: "config-card" }, q5 = { class: "config-row" }, Y5 = ["disabled"], J5 = {
  key: 0,
  value: ""
}, Q5 = {
  key: 1,
  value: "",
  disabled: ""
}, X5 = ["value", "disabled"], Z5 = { class: "config-row" }, eS = {
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
}, FS = { class: "summary-sub-label" }, BS = { class: "summary-row" }, VS = { class: "summary-value" }, WS = { class: "summary-row" }, GS = { class: "summary-value" }, jS = { class: "deployment-summary" }, HS = { class: "summary-columns" }, KS = { class: "summary-column" }, qS = { class: "pricing-row" }, YS = { class: "pricing-value" }, JS = { class: "pricing-row" }, QS = { class: "pricing-value" }, XS = { class: "pricing-row" }, ZS = { class: "pricing-value" }, e8 = { class: "pricing-row total" }, t8 = { class: "pricing-value" }, s8 = { class: "summary-column" }, o8 = { class: "spec-row" }, n8 = { class: "spec-row" }, a8 = {
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
}, y8 = { class: "console-link" }, w8 = ["href"], _8 = /* @__PURE__ */ de({
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
      getDataCenters: $
    } = tt(), P = k(!1), R = k(""), I = k(!1), S = k(!1), q = k(null), Y = k(null), V = k(""), E = k(""), T = k(""), O = k("SECURE"), le = k("ON_DEMAND"), Z = k("my-comfyui-deploy"), z = k([]), A = k({}), U = k(!1), M = k(null), ee = k(null), Q = k(null), he = k([]), _e = k(!1), Re = k([]), Ne = k(!1), Ue = k([]), qe = k(!1), ze = k(null), Te = k(!1), Ee = k(!1), H = k(null), K = k(!1), ie = k(null), ye = k(null), L = k(null), B = k(!1), se = k(null), ne = k(!1), fe = k(!1), me = N(() => Re.value.find(($e) => $e.id === E.value) || null), Ce = N(() => V.value ? Re.value.filter(($e) => $e.data_center_id === V.value) : Re.value), xe = N(() => Ue.value.filter(($e) => $e.available)), re = N(() => M.value && A.value[M.value] || null), ve = N(() => {
      if (!M.value) return null;
      const $e = z.value.find((te) => te.name === M.value);
      return ($e == null ? void 0 : $e.fetch_url) || null;
    }), Le = N(() => I.value && E.value && T.value && ve.value && !Ee.value && !B.value), Ie = ($e) => {
      const te = Ue.value.find((gt) => gt.id === T.value);
      if (!te) return "0.00";
      if ($e === "SECURE") return (te.securePrice ?? 0).toFixed(2);
      if ($e === "COMMUNITY") return (te.communityPrice ?? 0).toFixed(2);
      const je = O.value === "SECURE";
      return $e === "ON_DEMAND" ? je ? (te.securePrice ?? 0).toFixed(2) : (te.communityPrice ?? 0).toFixed(2) : je ? (te.secureSpotPrice ?? 0).toFixed(2) : (te.communitySpotPrice ?? 0).toFixed(2);
    }, oe = N(() => {
      const $e = Ue.value.find((ls) => ls.id === T.value), te = Re.value.find((ls) => ls.id === E.value);
      if (!$e) return null;
      const je = O.value === "SECURE", gt = le.value === "SPOT";
      let Jt;
      gt ? Jt = je ? $e.secureSpotPrice ?? 0 : $e.communitySpotPrice ?? 0 : Jt = je ? $e.securePrice ?? 0 : $e.communityPrice ?? 0;
      const ys = te ? te.size_gb * 14e-5 : 0, ws = 4e-3;
      return {
        gpu: Jt,
        volume: ys,
        container: ws,
        total: Jt + ys + ws
      };
    });
    async function X() {
      await Be(), await Promise.all([vt(), Me()]);
    }
    async function Me() {
      U.value = !0;
      try {
        const $e = await w();
        z.value = $e.remotes, await Promise.all(
          $e.remotes.map(async (je) => {
            const gt = await p(je.name);
            gt && (A.value[je.name] = gt);
          })
        );
        const te = $e.remotes.find((je) => je.is_default);
        te ? M.value = te.name : $e.remotes.length > 0 && (M.value = $e.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        U.value = !1;
      }
    }
    async function ke($e) {
      ee.value = $e;
      try {
        await _($e);
        const te = await p($e);
        te && (A.value[$e] = te), o("toast", `Fetched from ${$e}`, "success");
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
        const te = await p($e);
        te && (A.value[$e] = te), o("toast", `Pushed to ${$e}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        Q.value = null;
      }
    }
    function G($e) {
      M.value = $e;
    }
    async function W() {
      if (R.value) {
        S.value = !0, q.value = null;
        try {
          const $e = await l(R.value, !0);
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
    async function ue() {
      try {
        await v(), R.value = "", I.value = !1, q.value = null, Y.value = null, he.value = [], V.value = "", Re.value = [], E.value = "", Ue.value = [], T.value = "", ze.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function Be() {
      Ne.value = !0, _e.value = !0;
      try {
        const $e = await i();
        Re.value = $e.volumes;
        const te = /* @__PURE__ */ new Map();
        for (const je of $e.volumes)
          je.data_center_id && !te.has(je.data_center_id) && te.set(je.data_center_id, {
            id: je.data_center_id,
            name: je.data_center_name || je.data_center_id,
            available: !0
          });
        if ($e.volumes.length === 0) {
          const je = await $();
          he.value = je.data_centers;
        } else
          he.value = Array.from(te.values());
        if (Re.value.length > 0) {
          const je = Re.value[0];
          E.value = je.id, je.data_center_id && (V.value = je.data_center_id, await Xe(je.data_center_id));
        } else he.value.length > 0 && (V.value = he.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        Ne.value = !1, _e.value = !1;
      }
    }
    async function Xe($e) {
      qe.value = !0;
      try {
        const te = await c($e);
        Ue.value = te.gpu_types;
        const je = Ue.value.find((gt) => gt.available);
        je ? T.value = je.id : T.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        qe.value = !1;
      }
    }
    yt(V, async ($e) => {
      if (!$e || Ne.value) return;
      const te = Re.value.find((je) => je.id === E.value);
      te && te.data_center_id !== $e && (E.value = ""), await Xe($e);
    }), yt(E, async ($e) => {
      if (!$e) {
        Ue.value = [], T.value = "";
        return;
      }
      if (Ne.value) return;
      const te = Re.value.find((je) => je.id === $e);
      te && te.data_center_id !== V.value ? V.value = te.data_center_id : te && await Xe(te.data_center_id);
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
      if (!(!T.value || !E.value)) {
        B.value = !0, H.value = null;
        try {
          const $e = await g();
          se.value = $e, $e.can_export ? $e.warnings.models_without_sources.length > 0 ? fe.value = !0 : await Ft() : ne.value = !0;
        } catch ($e) {
          H.value = {
            status: "error",
            message: $e instanceof Error ? $e.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          B.value = !1;
        }
      }
    }
    async function ut() {
      fe.value = !1, await Ft();
    }
    async function Mt() {
      try {
        const $e = await g();
        se.value = $e;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function Ft() {
      Ee.value = !0;
      try {
        let $e;
        if (le.value === "SPOT") {
          const je = Ue.value.find((gt) => gt.id === T.value);
          je && ($e = O.value === "SECURE" ? je.secureSpotPrice : je.communitySpotPrice);
        }
        const te = await u({
          gpu_type_id: T.value,
          pod_name: Z.value || "my-comfyui-deploy",
          network_volume_id: E.value,
          cloud_type: O.value,
          pricing_type: le.value,
          spot_bid: $e,
          import_source: ve.value
        });
        H.value = te, te.status === "success" && te.pod_id ? (ie.value = te.pod_id, K.value = !0, Yt(te.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", te.message, "error");
      } catch ($e) {
        H.value = {
          status: "error",
          message: $e instanceof Error ? $e.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        Ee.value = !1;
      }
    }
    function Yt($e) {
      Ms($e), L.value = window.setInterval(() => Ms($e), 3e3);
    }
    function Ws() {
      L.value && (clearInterval(L.value), L.value = null);
    }
    async function Ms($e) {
      try {
        const te = await d($e);
        ye.value = te, (te.phase === "READY" || te.phase === "ERROR" || te.phase === "STOPPED") && (Ws(), te.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (te) {
        console.error("Failed to poll deployment status:", te);
      }
    }
    function no() {
      K.value = !1, Ws(), ie.value = null, ye.value = null;
    }
    function Co() {
      var $e;
      ($e = ye.value) != null && $e.comfyui_url && window.open(ye.value.comfyui_url, "_blank", "noopener,noreferrer");
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
        $e.has_key && $e.key_preview && (R.value = `****${$e.key_preview}`, $e.valid ? (I.value = !0, Y.value = $e.credit_balance ?? null, q.value = { type: "success", message: "Connected to RunPod" }, await X()) : $e.error && (q.value = { type: "error", message: $e.error }));
      } catch {
      }
    }), oo(() => {
      Ws();
    }), ($e, te) => {
      var je, gt, Jt, ys, ws, ls;
      return a(), r(j, null, [
        t("div", N5, [
          x(lt, { title: "RUNPOD API KEY" }, {
            default: h(() => [
              t("div", z5, [
                t("div", F5, [
                  t("div", B5, [
                    Ke(t("input", {
                      "onUpdate:modelValue": te[0] || (te[0] = (Oe) => R.value = Oe),
                      type: P.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: I.value
                    }, null, 8, V5), [
                      [Xn, R.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: te[1] || (te[1] = (Oe) => P.value = !P.value),
                      title: P.value ? "Hide key" : "Show key"
                    }, f(P.value ? "👁" : "👁‍🗨"), 9, W5)
                  ]),
                  I.value ? y("", !0) : (a(), D(ce, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: S.value,
                    disabled: !R.value || S.value,
                    onClick: W
                  }, {
                    default: h(() => [...te[16] || (te[16] = [
                      b(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  I.value ? (a(), D(ce, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: ue
                  }, {
                    default: h(() => [...te[17] || (te[17] = [
                      b(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                q.value ? (a(), r("div", {
                  key: 0,
                  class: Se(["connection-status", q.value.type])
                }, [
                  t("span", G5, f(q.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", j5, f(q.value.message), 1),
                  Y.value !== null ? (a(), r("span", H5, " $" + f(Y.value.toFixed(2)) + " credit ", 1)) : y("", !0)
                ], 2)) : y("", !0),
                te[18] || (te[18] = t("div", { class: "api-key-help" }, [
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
          I.value ? (a(), D(lt, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: h(() => [
              t("div", K5, [
                t("div", q5, [
                  te[19] || (te[19] = t("label", { class: "config-label" }, "Region", -1)),
                  Ke(t("select", {
                    "onUpdate:modelValue": te[2] || (te[2] = (Oe) => V.value = Oe),
                    class: "config-select",
                    disabled: _e.value
                  }, [
                    _e.value ? (a(), r("option", J5, "Loading...")) : V.value ? y("", !0) : (a(), r("option", Q5, "Select a region")),
                    (a(!0), r(j, null, ge(he.value, (Oe) => (a(), r("option", {
                      key: Oe.id,
                      value: Oe.id,
                      disabled: !Oe.available
                    }, f(Oe.id) + " (" + f(Oe.name) + ")" + f(Oe.available ? "" : " [Unavailable]"), 9, X5))), 128))
                  ], 8, Y5), [
                    [hs, V.value]
                  ])
                ]),
                t("div", Z5, [
                  te[24] || (te[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  Ne.value ? (a(), r("div", eS, "Loading volumes...")) : Ce.value.length === 0 ? (a(), r(j, { key: 1 }, [
                    t("div", tS, [
                      te[20] || (te[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", sS, "No volumes in " + f(V.value || "this region"), 1)
                    ]),
                    te[21] || (te[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    te[22] || (te[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (a(), r(j, { key: 2 }, [
                    Ke(t("select", {
                      "onUpdate:modelValue": te[3] || (te[3] = (Oe) => E.value = Oe),
                      class: "config-select"
                    }, [
                      (a(!0), r(j, null, ge(Ce.value, (Oe) => (a(), r("option", {
                        key: Oe.id,
                        value: Oe.id
                      }, f(Oe.name) + " (" + f(Oe.size_gb) + "GB) ", 9, oS))), 128))
                    ], 512), [
                      [hs, E.value]
                    ]),
                    te[23] || (te[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", nS, [
                  te[25] || (te[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  Ke(t("select", {
                    "onUpdate:modelValue": te[4] || (te[4] = (Oe) => T.value = Oe),
                    class: "config-select",
                    disabled: qe.value || !E.value
                  }, [
                    E.value ? qe.value ? (a(), r("option", iS, "Loading GPUs...")) : xe.value.length === 0 ? (a(), r("option", rS, "No GPUs available in this region")) : y("", !0) : (a(), r("option", lS, "Select a volume first")),
                    (a(!0), r(j, null, ge(xe.value, (Oe) => (a(), r("option", {
                      key: Oe.id,
                      value: Oe.id
                    }, f(Oe.displayName) + " (" + f(Oe.memoryInGb) + "GB) - $" + f(O.value === "SECURE" ? (Oe.securePrice ?? 0).toFixed(2) : (Oe.communityPrice ?? 0).toFixed(2)) + "/hr " + f(Oe.stockStatus ? `[${Oe.stockStatus}]` : ""), 9, cS))), 128))
                  ], 8, aS), [
                    [hs, T.value]
                  ])
                ]),
                t("div", uS, [
                  te[26] || (te[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", dS, [
                    t("label", fS, [
                      Ke(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": te[5] || (te[5] = (Oe) => O.value = Oe),
                        value: "SECURE"
                      }, null, 512), [
                        [Zt, O.value]
                      ]),
                      t("span", mS, "Secure ($" + f(Ie("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", vS, [
                      Ke(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": te[6] || (te[6] = (Oe) => O.value = Oe),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [Zt, O.value]
                      ]),
                      t("span", pS, "Community ($" + f(Ie("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", gS, [
                  te[27] || (te[27] = t("label", { class: "config-label" }, [
                    b(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", hS, [
                    t("label", yS, [
                      Ke(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": te[7] || (te[7] = (Oe) => le.value = Oe),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Zt, le.value]
                      ]),
                      t("span", wS, "On-Demand ($" + f(Ie("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", _S, [
                      Ke(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": te[8] || (te[8] = (Oe) => le.value = Oe),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [Zt, le.value]
                      ]),
                      t("span", kS, "Spot ($" + f(Ie("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", bS, [
                  te[28] || (te[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  Ke(t("input", {
                    "onUpdate:modelValue": te[9] || (te[9] = (Oe) => Z.value = Oe),
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
          I.value ? (a(), D(lt, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: h(() => [
              U.value ? (a(), r("div", $S, "Loading remotes...")) : z.value.length === 0 ? (a(), r("div", CS, [
                te[30] || (te[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                x(ce, {
                  variant: "primary",
                  size: "xs",
                  onClick: te[10] || (te[10] = (Oe) => o("navigate", "remotes"))
                }, {
                  default: h(() => [...te[29] || (te[29] = [
                    b(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (a(), r(j, { key: 2 }, [
                t("div", xS, [
                  (a(!0), r(j, null, ge(z.value, (Oe) => (a(), D(zr, {
                    key: Oe.name,
                    remote: Oe,
                    "sync-status": A.value[Oe.name],
                    "is-selected": M.value === Oe.name,
                    "is-fetching": ee.value === Oe.name,
                    "is-pushing": Q.value === Oe.name,
                    onFetch: ke,
                    onPush: we,
                    onSelect: G
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                re.value && re.value.ahead > 0 ? (a(), r("div", SS, [
                  te[31] || (te[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", IS, [
                    t("strong", null, f(re.value.ahead) + " unpushed commit" + f(re.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + f(M.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  x(ce, {
                    variant: "primary",
                    size: "xs",
                    loading: Q.value === M.value,
                    onClick: te[11] || (te[11] = (Oe) => M.value && we(M.value))
                  }, {
                    default: h(() => [
                      b(" Push to " + f(M.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", ES, [
                  x(ce, {
                    variant: "link",
                    size: "xs",
                    onClick: te[12] || (te[12] = (Oe) => o("navigate", "remotes"))
                  }, {
                    default: h(() => [...te[32] || (te[32] = [
                      b(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : y("", !0),
          I.value ? (a(), D(lt, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: h(() => [
              t("div", TS, [
                Te.value ? (a(), r("div", PS, "Loading environment summary...")) : ze.value ? (a(), r(j, { key: 1 }, [
                  t("div", RS, [
                    te[33] || (te[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", MS, f(ze.value.comfyui_version), 1)
                  ]),
                  t("div", DS, [
                    te[34] || (te[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", LS, f(ze.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", OS, [
                    te[35] || (te[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", AS, f(ze.value.model_count) + " models", 1)
                  ]),
                  ze.value.models_with_sources > 0 ? (a(), r("div", US, [
                    t("span", NS, "└─ " + f(ze.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  ze.value.models_without_sources > 0 ? (a(), r("div", zS, [
                    t("span", FS, "└─ " + f(ze.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", BS, [
                    te[36] || (te[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", VS, f(ze.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", WS, [
                    te[37] || (te[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", GS, "~" + f(ze.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          I.value && oe.value ? (a(), D(lt, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: h(() => {
              var Oe, is;
              return [
                t("div", jS, [
                  t("div", HS, [
                    t("div", KS, [
                      te[42] || (te[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", qS, [
                        te[38] || (te[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", YS, "$" + f(oe.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", JS, [
                        te[39] || (te[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", QS, "$" + f(oe.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", XS, [
                        te[40] || (te[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", ZS, "$" + f(oe.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      te[43] || (te[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", e8, [
                        te[41] || (te[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", t8, "~$" + f(oe.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", s8, [
                      te[45] || (te[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", o8, [
                        t("span", null, f(((Oe = Ue.value.find((ae) => ae.id === T.value)) == null ? void 0 : Oe.displayName) || "GPU") + " (" + f(((is = Ue.value.find((ae) => ae.id === T.value)) == null ? void 0 : is.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", n8, [
                        t("span", null, "Region: " + f(V.value), 1)
                      ]),
                      me.value ? (a(), r("div", a8, [
                        t("span", null, "Volume: " + f(me.value.name), 1)
                      ])) : y("", !0),
                      le.value === "SPOT" ? (a(), r("div", l8, [...te[44] || (te[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          I.value ? (a(), r("div", i8, [
            x(ce, {
              variant: "primary",
              size: "md",
              loading: B.value || Ee.value,
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
                b(" " + f(B.value ? "Validating..." : Ee.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          H.value ? (a(), D(lt, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: h(() => [
              x(Et, {
                status: H.value.status === "success" ? "synced" : "broken"
              }, so({
                icon: h(() => [
                  b(f(H.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  b(f(H.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: h(() => [
                  b(f(H.value.message), 1)
                ]),
                actions: h(() => [
                  x(ce, {
                    variant: "ghost",
                    size: "xs",
                    onClick: te[13] || (te[13] = (Oe) => H.value = null)
                  }, {
                    default: h(() => [...te[47] || (te[47] = [
                      b(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                H.value.pod_id ? {
                  name: "details",
                  fn: h(() => [
                    x(dt, {
                      label: "Pod ID:",
                      value: H.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : y("", !0)
        ]),
        K.value ? (a(), D(ft, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((je = ye.value) == null ? void 0 : je.phase) === "READY" || ((gt = ye.value) == null ? void 0 : gt.phase) === "ERROR" || ((Jt = ye.value) == null ? void 0 : Jt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: no
        }, so({
          body: h(() => {
            var Oe, is, ae, J, De, Ge, ot, mt, Dt, rs, Gs, js;
            return [
              t("div", r8, [
                t("div", c8, [
                  t("div", {
                    class: Se(["phase-icon", (is = (Oe = ye.value) == null ? void 0 : Oe.phase) == null ? void 0 : is.toLowerCase()])
                  }, [
                    ((ae = ye.value) == null ? void 0 : ae.phase) === "READY" ? (a(), r("span", u8, "✓")) : ((J = ye.value) == null ? void 0 : J.phase) === "ERROR" ? (a(), r("span", d8, "✕")) : ((De = ye.value) == null ? void 0 : De.phase) === "STOPPED" ? (a(), r("span", f8, "○")) : (a(), r("span", m8, "⟳"))
                  ], 2),
                  t("div", v8, [
                    t("div", p8, f(xo((Ge = ye.value) == null ? void 0 : Ge.phase)), 1),
                    t("div", g8, f(((ot = ye.value) == null ? void 0 : ot.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                x(ea, {
                  progress: So((mt = ye.value) == null ? void 0 : mt.phase),
                  variant: ((Dt = ye.value) == null ? void 0 : Dt.phase) === "ERROR" ? "error" : ((rs = ye.value) == null ? void 0 : rs.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Gs = ye.value) == null ? void 0 : Gs.phase) === "READY" ? (a(), r("div", h8, [
                  x(ce, {
                    variant: "primary",
                    size: "md",
                    onClick: Co
                  }, {
                    default: h(() => [...te[48] || (te[48] = [
                      b(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                t("div", y8, [
                  (js = ye.value) != null && js.console_url ? (a(), r("a", {
                    key: 0,
                    href: ye.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, w8)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((ys = ye.value) == null ? void 0 : ys.phase) === "READY" || ((ws = ye.value) == null ? void 0 : ws.phase) === "ERROR" || ((ls = ye.value) == null ? void 0 : ls.phase) === "STOPPED" ? {
            name: "footer",
            fn: h(() => [
              x(ce, {
                variant: "ghost",
                size: "xs",
                onClick: no
              }, {
                default: h(() => [...te[49] || (te[49] = [
                  b(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : y("", !0),
        ne.value && se.value ? (a(), D(Or, {
          key: 1,
          issues: se.value.blocking_issues,
          onClose: te[14] || (te[14] = (Oe) => ne.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        fe.value && se.value ? (a(), D(Ar, {
          key: 2,
          models: se.value.warnings.models_without_sources,
          onConfirm: ut,
          onCancel: te[15] || (te[15] = (Oe) => fe.value = !1),
          onRevalidate: Mt
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), k8 = /* @__PURE__ */ pe(_8, [["__scopeId", "data-v-522cd4d9"]]), b8 = { class: "worker-header" }, $8 = { class: "worker-status" }, C8 = { class: "worker-name" }, x8 = { class: "worker-actions" }, S8 = { class: "worker-details" }, I8 = { class: "detail-item" }, E8 = { class: "detail-value" }, T8 = {
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
}, U8 = /* @__PURE__ */ de({
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
      t("div", b8, [
        t("div", $8, [
          t("span", {
            class: Se(["status-dot", e.worker.status])
          }, null, 2),
          t("span", C8, f(e.worker.name), 1)
        ]),
        t("div", x8, [
          e.worker.status === "online" ? (a(), D(ce, {
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
          x(ce, {
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
          b(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (a(), r("span", L8, [
          b(" • " + f(e.worker.instance_count) + " instance" + f(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (a(), r("span", O8, "(" + f(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (a(), r("div", A8, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), N8 = /* @__PURE__ */ pe(U8, [["__scopeId", "data-v-b1be7134"]]), z8 = { class: "add-worker-content" }, F8 = { class: "manual-form" }, B8 = { class: "form-row" }, V8 = { class: "form-row-inline" }, W8 = { class: "form-field flex-2" }, G8 = { class: "form-field flex-1" }, j8 = { class: "form-row" }, H8 = { class: "api-key-wrapper" }, K8 = ["type"], q8 = { class: "result-icon" }, Y8 = { class: "result-content" }, J8 = { class: "result-message" }, Q8 = {
  key: 0,
  class: "result-detail"
}, X8 = { class: "modal-actions" }, Z8 = /* @__PURE__ */ de({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = tt(), l = Vs({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), i = k(!1), c = k(!1), u = k(!1), d = k(null), m = N(() => l.host && l.port && l.apiKey), v = N(() => l.name && l.host && l.port && l.apiKey);
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
        t("div", z8, [
          t("div", F8, [
            t("div", B8, [
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
            t("div", V8, [
              t("div", W8, [
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
              t("div", G8, [
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
            t("div", j8, [
              _[9] || (_[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", H8, [
                Ke(t("input", {
                  "onUpdate:modelValue": _[3] || (_[3] = (C) => l.apiKey = C),
                  type: i.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, K8), [
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
                b(" Run "),
                t("code", null, "cg-deploy worker setup"),
                b(" on the worker to get the key ")
              ], -1))
            ]),
            d.value ? (a(), r("div", {
              key: 0,
              class: Se(["test-result", d.value.type])
            }, [
              t("span", q8, f(d.value.type === "success" ? "✓" : "✕"), 1),
              t("div", Y8, [
                t("span", J8, f(d.value.message), 1),
                d.value.gpu_info ? (a(), r("span", Q8, "GPU: " + f(d.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        t("div", X8, [
          x(ce, {
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
          x(ce, {
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
}), e4 = /* @__PURE__ */ pe(Z8, [["__scopeId", "data-v-07a00732"]]), t4 = { class: "discovered-content" }, s4 = {
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
}, c4 = { class: "selected-worker" }, u4 = { class: "selected-name" }, d4 = { class: "selected-address" }, f4 = { class: "form-row" }, m4 = { class: "api-key-wrapper" }, v4 = ["type"], p4 = { class: "result-icon" }, g4 = { class: "result-message" }, h4 = { class: "modal-actions" }, y4 = /* @__PURE__ */ de({
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
    return (w, p) => (a(), D(ft, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (_) => w.$emit("close"))
    }, {
      body: h(() => [
        t("div", t4, [
          e.workers.length > 0 ? (a(), r("div", s4, [
            (a(!0), r(j, null, ge(e.workers, (_) => (a(), r("div", {
              key: `${_.host}:${_.port}`,
              class: "worker-item"
            }, [
              t("div", o4, [
                t("span", n4, f(_.name), 1),
                t("span", a4, f(_.host) + ":" + f(_.port), 1),
                _.gpu_info ? (a(), r("span", l4, f(_.gpu_info), 1)) : y("", !0)
              ]),
              x(ce, {
                variant: "primary",
                size: "xs",
                onClick: (C) => v(_)
              }, {
                default: h(() => [...p[4] || (p[4] = [
                  b(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128))
          ])) : (a(), r("div", i4, [...p[5] || (p[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              b("Make sure workers are running with "),
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
                Ke(t("input", {
                  ref_key: "apiKeyInput",
                  ref: d,
                  "onUpdate:modelValue": p[0] || (p[0] = (_) => i.value = _),
                  type: c.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: Ht(g, ["enter"])
                }, null, 40, v4), [
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
                b(" Run "),
                t("code", null, "cg-deploy worker setup"),
                b(" on the worker to get the key ")
              ], -1))
            ]),
            m.value ? (a(), r("div", {
              key: 0,
              class: Se(["test-result", m.value.type])
            }, [
              t("span", p4, f(m.value.type === "success" ? "✓" : "✕"), 1),
              t("span", g4, f(m.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", h4, [
          l.value ? (a(), D(ce, {
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
          l.value ? (a(), D(ce, {
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
}), w4 = /* @__PURE__ */ pe(y4, [["__scopeId", "data-v-5a3e40a4"]]), _4 = { class: "deploy-content" }, k4 = { class: "section" }, b4 = {
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
}, L4 = { class: "warning-content" }, O4 = { class: "modal-actions" }, A4 = /* @__PURE__ */ de({
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
    } = tt(), v = k([]), g = k({}), w = k(!1), p = k(null), _ = k(null), C = k(null), $ = k(o.worker.mode || "native"), P = k(""), R = k(null), I = k(!1), S = N(() => p.value && g.value[p.value] || null), q = N(() => {
      if (!p.value) return null;
      const z = v.value.find((A) => A.name === p.value);
      return (z == null ? void 0 : z.fetch_url) || null;
    }), Y = N(() => q.value && !I.value);
    async function V() {
      w.value = !0;
      try {
        const z = await l();
        v.value = z.remotes, await Promise.all(
          z.remotes.map(async (U) => {
            const M = await i(U.name);
            M && (g.value[U.name] = M);
          })
        );
        const A = z.remotes.find((U) => U.is_default);
        A ? p.value = A.name : z.remotes.length > 0 && (p.value = z.remotes[0].name);
      } catch {
        n("toast", "Failed to load remotes", "error");
      } finally {
        w.value = !1;
      }
    }
    async function E() {
      try {
        R.value = await d();
      } catch {
      }
    }
    async function T(z) {
      _.value = z;
      try {
        await c(z);
        const A = await i(z);
        A && (g.value[z] = A), n("toast", `Fetched from ${z}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        _.value = null;
      }
    }
    async function O(z) {
      C.value = z;
      try {
        await u(z, { force: !1 });
        const A = await i(z);
        A && (g.value[z] = A), n("toast", `Pushed to ${z}`, "success");
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
      if (q.value) {
        I.value = !0;
        try {
          const z = await m(o.worker.name, {
            import_source: q.value,
            mode: $.value,
            name: P.value || void 0
          });
          z.id ? (n("toast", `Deployment started: ${z.name || z.id}`, "success"), n("deployed")) : z.status === "error" ? n("toast", z.message || "Deployment failed", "error") : n("toast", "Unexpected response from worker", "error");
        } catch (z) {
          n("toast", z instanceof Error ? z.message : "Deployment failed", "error");
        } finally {
          I.value = !1;
        }
      }
    }
    return Qe(() => {
      V(), E();
    }), (z, A) => (a(), D(ft, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: A[5] || (A[5] = (U) => z.$emit("close"))
    }, {
      body: h(() => [
        t("div", _4, [
          t("div", k4, [
            A[7] || (A[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            w.value ? (a(), r("div", b4, "Loading remotes...")) : v.value.length === 0 ? (a(), r("div", $4, [...A[6] || (A[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (a(), r("div", C4, [
              (a(!0), r(j, null, ge(v.value, (U) => (a(), D(zr, {
                key: U.name,
                remote: U,
                "sync-status": g.value[U.name],
                "is-selected": p.value === U.name,
                "is-fetching": _.value === U.name,
                "is-pushing": C.value === U.name,
                onFetch: T,
                onPush: O,
                onSelect: le
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", x4, [
            A[10] || (A[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", S4, [
              t("label", I4, [
                Ke(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": A[0] || (A[0] = (U) => $.value = U),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, E4), [
                  [Zt, $.value]
                ]),
                A[8] || (A[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", T4, [
                Ke(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": A[1] || (A[1] = (U) => $.value = U),
                  value: "native"
                }, null, 512), [
                  [Zt, $.value]
                ]),
                A[9] || (A[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", P4, [
            A[11] || (A[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            Ke(t("input", {
              "onUpdate:modelValue": A[2] || (A[2] = (U) => P.value = U),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [zt, P.value]
            ])
          ]),
          R.value ? (a(), r("div", R4, [
            A[12] || (A[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", M4, " ComfyUI: " + f(R.value.comfyui_version) + " • " + f(R.value.node_count) + " nodes • " + f(R.value.model_count) + " models • " + f(R.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          S.value && S.value.ahead > 0 ? (a(), r("div", D4, [
            A[14] || (A[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", L4, [
              t("strong", null, f(S.value.ahead) + " unpushed commit" + f(S.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + f(p.value) + "' before deploying to include your latest changes.", 1)
            ]),
            x(ce, {
              variant: "primary",
              size: "xs",
              loading: C.value === p.value,
              onClick: A[3] || (A[3] = (U) => p.value && O(p.value))
            }, {
              default: h(() => [...A[13] || (A[13] = [
                b(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", O4, [
          x(ce, {
            variant: "ghost",
            size: "sm",
            onClick: A[4] || (A[4] = (U) => z.$emit("close"))
          }, {
            default: h(() => [...A[15] || (A[15] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          x(ce, {
            variant: "primary",
            size: "sm",
            loading: I.value,
            disabled: !Y.value || I.value,
            onClick: Z
          }, {
            default: h(() => [...A[16] || (A[16] = [
              b(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), U4 = /* @__PURE__ */ pe(A4, [["__scopeId", "data-v-c12720d3"]]), N4 = { class: "custom-tab" }, z4 = { class: "section-header" }, F4 = { class: "section-actions" }, B4 = { class: "workers-content" }, V4 = {
  key: 0,
  class: "loading-state"
}, W4 = {
  key: 1,
  class: "empty-state"
}, G4 = {
  key: 2,
  class: "workers-list"
}, j4 = { class: "scan-icon" }, H4 = { class: "scan-message" }, K4 = /* @__PURE__ */ de({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: n,
      addCustomWorker: l,
      removeCustomWorker: i,
      scanForWorkers: c
    } = tt(), u = k([]), d = k([]), m = k(!1), v = k(!1), g = k(null), w = k(!1), p = k(!1), _ = k(null), C = k(null);
    async function $() {
      m.value = !0;
      try {
        const V = await n();
        u.value = V.workers;
      } catch (V) {
        o("toast", V instanceof Error ? V.message : "Failed to load workers", "error");
      } finally {
        m.value = !1;
      }
    }
    async function P() {
      v.value = !0, C.value = null;
      try {
        const V = await c(), E = V.discovered.filter(
          (T) => !u.value.some((O) => O.host === T.host && O.port === T.port)
        );
        d.value = E, E.length > 0 ? p.value = !0 : V.discovered.length > 0 ? C.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : C.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (V) {
        o("toast", V instanceof Error ? V.message : "Network scan failed", "error");
      } finally {
        v.value = !1;
      }
    }
    async function R(V) {
      try {
        await l(V), o("toast", `Worker '${V.name}' added`, "success"), w.value = !1, await $();
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to add worker", "error");
      }
    }
    async function I(V) {
      try {
        await l(V), o("toast", `Worker '${V.name}' added`, "success"), p.value = !1, await $();
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to add worker", "error");
      }
    }
    async function S(V) {
      g.value = V;
      try {
        await i(V), o("toast", `Worker '${V}' removed`, "success"), await $();
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to remove worker", "error");
      } finally {
        g.value = null;
      }
    }
    function q(V) {
      _.value = V;
    }
    function Y() {
      _.value = null, o("deployed");
    }
    return Qe(() => {
      $();
    }), (V, E) => (a(), r("div", N4, [
      t("div", z4, [
        E[8] || (E[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", F4, [
          x(ce, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: P
          }, {
            default: h(() => [...E[6] || (E[6] = [
              b(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          x(ce, {
            variant: "secondary",
            size: "xs",
            onClick: E[0] || (E[0] = (T) => w.value = !0)
          }, {
            default: h(() => [...E[7] || (E[7] = [
              b(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("div", B4, [
        m.value && u.value.length === 0 ? (a(), r("div", V4, [...E[9] || (E[9] = [
          t("span", { class: "spinner" }, null, -1),
          b(" Loading workers... ", -1)
        ])])) : u.value.length === 0 ? (a(), r("div", W4, [...E[10] || (E[10] = [
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
        ])])) : (a(), r("div", G4, [
          (a(!0), r(j, null, ge(u.value, (T) => (a(), D(N8, {
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
        class: Se(["scan-result", C.value.type])
      }, [
        t("span", j4, f(C.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", H4, f(C.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: E[1] || (E[1] = (T) => C.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (a(), D(w4, {
        key: 1,
        workers: d.value,
        onClose: E[2] || (E[2] = (T) => p.value = !1),
        onAdd: I
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (a(), D(e4, {
        key: 2,
        onClose: E[3] || (E[3] = (T) => w.value = !1),
        onAdd: R
      })) : y("", !0),
      _.value ? (a(), D(U4, {
        key: 3,
        worker: _.value,
        onClose: E[4] || (E[4] = (T) => _.value = null),
        onToast: E[5] || (E[5] = (T, O) => o("toast", T, O)),
        onDeployed: Y
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), q4 = /* @__PURE__ */ pe(K4, [["__scopeId", "data-v-1637dead"]]), ha = "ComfyGit.Deploy.GitHubPAT";
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
const Q4 = { class: "settings-content" }, X4 = { class: "settings-section" }, Z4 = {
  key: 0,
  class: "ssh-warning"
}, e6 = { class: "form-row" }, t6 = { class: "token-wrapper" }, s6 = ["type"], o6 = { class: "result-icon" }, n6 = { class: "result-message" }, a6 = { class: "token-actions" }, l6 = /* @__PURE__ */ de({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: n, setToken: l, clearToken: i, hasToken: c } = J4(), { getRemotes: u, testGitAuth: d } = tt(), m = k(""), v = k(!1), g = k(!1), w = k(null), p = k(!1), _ = N(() => c());
    Qe(async () => {
      var I;
      const R = n();
      R && (m.value = R);
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
          const R = await d(m.value);
          w.value = {
            type: R.status === "success" ? "success" : "error",
            message: R.message
          };
        } catch (R) {
          w.value = {
            type: "error",
            message: R instanceof Error ? R.message : "Connection test failed"
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
    return (R, I) => (a(), D(ft, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: I[2] || (I[2] = (S) => R.$emit("close"))
    }, {
      body: h(() => [
        t("div", Q4, [
          t("div", X4, [
            I[8] || (I[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            I[9] || (I[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (a(), r("div", Z4, [...I[3] || (I[3] = [
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
            t("div", e6, [
              I[4] || (I[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", t6, [
                Ke(t("input", {
                  "onUpdate:modelValue": I[0] || (I[0] = (S) => m.value = S),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, s6), [
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
              class: Se(["test-result", w.value.type])
            }, [
              t("span", o6, f(w.value.type === "success" ? "✓" : "✕"), 1),
              t("span", n6, f(w.value.message), 1)
            ], 2)) : y("", !0),
            t("div", a6, [
              x(ce, {
                variant: "ghost",
                size: "sm",
                loading: g.value,
                disabled: !m.value || g.value,
                onClick: C
              }, {
                default: h(() => [...I[6] || (I[6] = [
                  b(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              _.value ? (a(), D(ce, {
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
        x(ce, {
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
}), i6 = /* @__PURE__ */ pe(l6, [["__scopeId", "data-v-b21588ad"]]), r6 = /* @__PURE__ */ de({
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
    } = Nr(), w = k(!1), p = k(!1), _ = k("instances"), C = k(null), $ = k(null), P = N(() => [
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
    async function R(V) {
      C.value = V.id;
      try {
        await u(V), o("toast", "Instance stopped", "success");
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to stop instance", "error");
      } finally {
        C.value = null;
      }
    }
    async function I(V) {
      C.value = V.id;
      try {
        await d(V), o("toast", "Instance starting...", "success");
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to start instance", "error");
      } finally {
        C.value = null;
      }
    }
    function S(V) {
      $.value = V;
    }
    async function q() {
      const V = $.value;
      if (V) {
        $.value = null, C.value = V.id;
        try {
          await m(V), o("toast", "Instance terminated", "success");
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
    }), (V, E) => (a(), r(j, null, [
      x(Pt, null, {
        header: h(() => [
          x(Rt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: E[1] || (E[1] = (T) => w.value = !0)
          }, {
            actions: h(() => [
              x(ce, {
                variant: "ghost",
                size: "xs",
                onClick: E[0] || (E[0] = (T) => p.value = !0)
              }, {
                default: h(() => [...E[10] || (E[10] = [
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
            "onUpdate:modelValue": E[2] || (E[2] = (T) => _.value = T),
            tabs: P.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: h(() => [
          _.value === "instances" ? (a(), D(C5, {
            key: 0,
            instances: Ve(n),
            "is-loading": Ve(l),
            "action-loading-id": C.value,
            onRefresh: Ve(c),
            onStop: R,
            onStart: I,
            onTerminate: S
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          _.value === "runpod" ? (a(), D(k8, {
            key: 1,
            onToast: E[3] || (E[3] = (T, O) => o("toast", T, O)),
            onNavigate: E[4] || (E[4] = (T) => o("navigate", T)),
            onDeployed: Y
          })) : y("", !0),
          _.value === "custom" ? (a(), D(q4, {
            key: 2,
            onToast: E[5] || (E[5] = (T, O) => o("toast", T, O)),
            onDeployed: Y
          })) : y("", !0)
        ]),
        _: 1
      }),
      $.value ? (a(), D(nl, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${$.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: q,
        onCancel: E[6] || (E[6] = (T) => $.value = null)
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
      p.value ? (a(), D(i6, {
        key: 1,
        onClose: E[8] || (E[8] = (T) => p.value = !1),
        onSaved: E[9] || (E[9] = (T) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), c6 = /* @__PURE__ */ pe(r6, [["__scopeId", "data-v-d4e32a10"]]), u6 = { class: "header-info" }, d6 = { class: "commit-hash" }, f6 = {
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
}, x6 = { class: "change-item" }, S6 = /* @__PURE__ */ de({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = tt(), n = k(null), l = k(!0), i = N(() => {
      if (!n.value) return !1;
      const u = n.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = N(() => {
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
          t("div", u6, [
            d[4] || (d[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", d6, f(((m = n.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (g = n.value) == null ? void 0 : g.refs) != null && w.length ? (a(), r("span", f6, [
              (a(!0), r(j, null, ge(n.value.refs, (p) => (a(), r("span", {
                key: p,
                class: "ref-badge"
              }, f(p), 1))), 128))
            ])) : y("", !0)
          ]),
          x(Pe, {
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
              x(Go, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  b("WORKFLOWS", -1)
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
            c.value ? (a(), r("div", b6, [
              x(Go, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  b("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(j, null, ge(n.value.changes.nodes.added, (g) => (a(), r("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g.name), 1),
                g.version ? (a(), r("span", $6, "(" + f(g.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), r(j, null, ge(n.value.changes.nodes.removed, (g) => (a(), r("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), r("div", C6, [
              x(Go, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  b("MODELS", -1)
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
        x(Pe, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (m) => u.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            b(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        x(Pe, {
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
}), I6 = /* @__PURE__ */ pe(S6, [["__scopeId", "data-v-d256ff6d"]]), E6 = { class: "base-textarea-wrapper" }, T6 = ["value", "rows", "placeholder", "disabled", "maxlength"], P6 = {
  key: 0,
  class: "base-textarea-count"
}, R6 = /* @__PURE__ */ de({
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
}), ei = /* @__PURE__ */ pe(R6, [["__scopeId", "data-v-c6d16c93"]]), M6 = ["checked", "disabled"], D6 = { class: "base-checkbox-box" }, L6 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, O6 = {
  key: 0,
  class: "base-checkbox-label"
}, A6 = /* @__PURE__ */ de({
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
        He(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Da = /* @__PURE__ */ pe(A6, [["__scopeId", "data-v-bf17c831"]]), U6 = { class: "popover-header" }, N6 = { class: "popover-body" }, z6 = {
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
}, Y6 = { class: "error-header" }, J6 = { class: "error-title" }, Q6 = { class: "issues-list" }, X6 = { class: "workflow-state" }, Z6 = { class: "message-section" }, eI = { class: "popover-footer" }, tI = {
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
}, vI = { class: "error-header" }, pI = { class: "error-title" }, gI = { class: "issues-list" }, hI = { class: "workflow-state" }, yI = { class: "message-section" }, wI = { class: "popover-footer" }, _I = /* @__PURE__ */ de({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, n = s, { commit: l } = tt(), i = k(""), c = k(!1), u = k(!1), d = N(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), m = N(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, C = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || C.nodes_added.length > 0 || C.nodes_removed.length > 0;
    }), v = N(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((C) => C.has_issues) : [];
    }), g = N(() => v.value.length > 0), w = N(() => g.value && !u.value);
    async function p() {
      var _, C, $, P;
      if (!(g.value && !u.value) && !(!d.value || !i.value.trim() || c.value)) {
        c.value = !0;
        try {
          const R = await l(i.value.trim(), u.value);
          if (R.status === "success") {
            const I = `Committed: ${((_ = R.summary) == null ? void 0 : _.new) || 0} new, ${((C = R.summary) == null ? void 0 : C.modified) || 0} modified, ${(($ = R.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            n("committed", { success: !0, message: I });
          } else if (R.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (R.status === "blocked") {
            const I = ((P = R.issues) == null ? void 0 : P.map((S) => `${S.name}: ${S.issue}`).join("; ")) || "Unknown issues";
            n("committed", { success: !1, message: `Commit blocked - ${I}. Enable "Allow issues" to force.` });
          } else
            n("committed", { success: !1, message: R.message || "Commit failed" });
        } catch (R) {
          n("committed", { success: !1, message: R instanceof Error ? R.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (_, C) => e.asModal ? (a(), D(Ct, {
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
          t("div", U6, [
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
          t("div", N6, [
            e.status && d.value ? (a(), r("div", z6, [
              e.status.workflows.new.length ? (a(), r("div", F6, [
                C[12] || (C[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), r("div", B6, [
                C[13] || (C[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), r("div", V6, [
                C[14] || (C[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), r("div", W6, [
                C[15] || (C[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), r("div", G6, [
                C[16] || (C[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (a(), r("div", j6, [...C[17] || (C[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), r("div", H6, " No changes to commit ")) : (a(), r("div", K6, " Loading... ")),
            g.value ? (a(), r("div", q6, [
              t("div", Y6, [
                C[18] || (C[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", J6, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", Q6, [
                (a(!0), r(j, null, ge(v.value, ($) => (a(), r("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  t("strong", null, f($.name), 1),
                  t("span", X6, "(" + f($.sync_state) + ")", 1),
                  b(": " + f($.issue_summary), 1)
                ]))), 128))
              ]),
              x(Da, {
                modelValue: u.value,
                "onUpdate:modelValue": C[1] || (C[1] = ($) => u.value = $),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...C[19] || (C[19] = [
                  b(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            t("div", Z6, [
              x(ei, {
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
          t("div", eI, [
            x(Pe, {
              variant: "secondary",
              onClick: C[3] || (C[3] = ($) => n("close"))
            }, {
              default: h(() => [...C[20] || (C[20] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(Pe, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !i.value.trim() || c.value || w.value,
              loading: c.value,
              onClick: p
            }, {
              default: h(() => [
                b(f(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (a(), r("div", tI, [
      t("div", sI, [
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
      t("div", oI, [
        e.status && d.value ? (a(), r("div", nI, [
          e.status.workflows.new.length ? (a(), r("div", aI, [
            C[23] || (C[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), r("div", lI, [
            C[24] || (C[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), r("div", iI, [
            C[25] || (C[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), r("div", rI, [
            C[26] || (C[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), r("div", cI, [
            C[27] || (C[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (a(), r("div", uI, [...C[28] || (C[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), r("div", dI, " No changes to commit ")) : (a(), r("div", fI, " Loading... ")),
        g.value ? (a(), r("div", mI, [
          t("div", vI, [
            C[29] || (C[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", pI, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", gI, [
            (a(!0), r(j, null, ge(v.value, ($) => (a(), r("div", {
              key: $.name,
              class: "issue-item"
            }, [
              t("strong", null, f($.name), 1),
              t("span", hI, "(" + f($.sync_state) + ")", 1),
              b(": " + f($.issue_summary), 1)
            ]))), 128))
          ]),
          x(Da, {
            modelValue: u.value,
            "onUpdate:modelValue": C[7] || (C[7] = ($) => u.value = $),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...C[30] || (C[30] = [
              b(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        t("div", yI, [
          x(ei, {
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
      t("div", wI, [
        x(Pe, {
          variant: "secondary",
          onClick: C[9] || (C[9] = ($) => n("close"))
        }, {
          default: h(() => [...C[31] || (C[31] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        x(Pe, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !i.value.trim() || c.value || w.value,
          loading: c.value,
          onClick: p
        }, {
          default: h(() => [
            b(f(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Br = /* @__PURE__ */ pe(_I, [["__scopeId", "data-v-5f897631"]]), kI = { class: "modal-header" }, bI = { class: "modal-body" }, $I = { class: "switch-message" }, CI = { class: "switch-details" }, xI = { class: "modal-actions" }, SI = /* @__PURE__ */ de({
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
            t("p", CI, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", xI, [
            x(ce, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(ce, {
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
}), II = /* @__PURE__ */ pe(SI, [["__scopeId", "data-v-e9c5253e"]]), EI = {
  key: 0,
  class: "modal-overlay"
}, TI = { class: "modal-content" }, PI = { class: "modal-body" }, RI = { class: "progress-info" }, MI = { class: "progress-percentage" }, DI = { class: "progress-state" }, LI = { class: "switch-steps" }, OI = { class: "step-icon" }, AI = { class: "step-label" }, UI = /* @__PURE__ */ de({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const s = e, o = N(() => {
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
    }), n = N(() => s.state === "complete" ? "success" : s.state === "critical_failure" || s.state === "rolled_back" ? "error" : "default"), l = N(() => {
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
            x(ea, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            t("div", RI, [
              t("div", MI, f(e.progress) + "%", 1),
              t("div", DI, f(o.value), 1)
            ]),
            t("div", LI, [
              (a(!0), r(j, null, ge(l.value, (u) => (a(), r("div", {
                key: u.state,
                class: Se(["switch-step", u.status])
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
}), NI = /* @__PURE__ */ pe(UI, [["__scopeId", "data-v-768a5078"]]), zI = { class: "modal-header" }, FI = { class: "modal-body" }, BI = {
  key: 0,
  class: "node-section"
}, VI = { class: "node-list" }, WI = {
  key: 1,
  class: "node-section"
}, GI = { class: "node-list" }, jI = { class: "modal-actions" }, HI = /* @__PURE__ */ de({
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
                (a(!0), r(j, null, ge(e.mismatchDetails.missing_nodes, (n) => (a(), r("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), r("div", WI, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", GI, [
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
          t("div", jI, [
            x(ce, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(ce, {
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
}), KI = /* @__PURE__ */ pe(HI, [["__scopeId", "data-v-7cad7518"]]), qI = [
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
], YI = "v0.0.17", JI = "Akatz", QI = { class: "social-buttons" }, XI = ["title", "aria-label", "onClick"], ZI = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, eE = ["d"], tE = ["title", "aria-label", "onClick"], sE = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, oE = ["d"], nE = /* @__PURE__ */ de({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), r("div", QI, [
      (a(!0), r(j, null, ge(Ve(qI), (l) => (a(), r(j, {
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
          (a(), r("svg", ZI, [
            t("path", {
              d: l.iconPath
            }, null, 8, eE)
          ]))
        ], 8, XI)) : (a(), r("button", {
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
}), Vr = /* @__PURE__ */ pe(nE, [["__scopeId", "data-v-4f846342"]]), aE = { class: "footer-info" }, lE = { class: "version" }, iE = { class: "made-by" }, rE = /* @__PURE__ */ de({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (a(), r("div", aE, [
      t("span", lE, f(Ve(YI)), 1),
      t("span", iE, [
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
        b(" by " + f(Ve(JI)), 1)
      ])
    ]));
  }
}), Wr = /* @__PURE__ */ pe(rE, [["__scopeId", "data-v-8bc3db0a"]]), cE = /* @__PURE__ */ de({
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
          x(Pe, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: n
          }, {
            default: h(() => [...c[2] || (c[2] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          x(Pe, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (d) => i.$emit("close"))
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
}), uE = /* @__PURE__ */ pe(cE, [["__scopeId", "data-v-fac00ae7"]]), dE = { class: "header-actions" }, fE = {
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
}, KE = { class: "wizard-footer" }, qE = { class: "wizard-footer-actions" }, io = 10, YE = 600 * 1e3, ti = 1800 * 1e3, JE = /* @__PURE__ */ de({
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
    } = tt(), g = k(o.initialStep || 1), w = k(null), p = k("landing"), _ = k(!1), C = k(!1), $ = k(!1), P = k(!1), R = k(null), I = k(o.initialStep === 2), S = k(o.defaultPath), q = k(!!o.detectedModelsDir), Y = k(o.detectedModelsDir || ""), V = k(null), E = k(null), T = k(null), O = k(null), le = k("my-new-env"), Z = k(Dr), z = k("latest"), A = k(Lr), U = k(!0), M = k(null), ee = k(null), Q = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), he = k(!1), _e = k(!1), Re = k(!1), Ne = k({ progress: 0, message: "" }), Ue = k({ progress: 0, message: "" }), qe = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ze = k(0), Te = k(null), Ee = k(0), H = k(null), K = N(() => {
      var ke, we;
      const oe = (ke = S.value) == null ? void 0 : ke.trim(), X = !V.value, Me = !q.value || !E.value && ((we = Y.value) == null ? void 0 : we.trim());
      return oe && X && Me;
    }), ie = N(() => {
      var oe;
      return (oe = le.value) == null ? void 0 : oe.trim();
    }), ye = N(() => !!(g.value === 2 || ee.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), L = N(() => ee.value || o.workspacePath || null);
    async function B() {
      var oe;
      if (V.value = null, !!((oe = S.value) != null && oe.trim()))
        try {
          const X = await c({ path: S.value, type: "workspace" });
          X.valid || (V.value = X.error || "Invalid path");
        } catch (X) {
          V.value = X instanceof Error ? X.message : "Validation failed";
        }
    }
    async function se() {
      var oe;
      if (E.value = null, T.value = null, O.value = null, !!((oe = Y.value) != null && oe.trim()))
        try {
          const X = await c({ path: Y.value, type: "models" });
          if (X.valid)
            O.value = X.model_count ?? null;
          else if (E.value = X.error || "Invalid path", X.suggestion) {
            T.value = X.suggestion, Y.value = X.suggestion, E.value = null;
            const Me = await c({ path: X.suggestion, type: "models" });
            Me.valid && (O.value = Me.model_count ?? null);
          }
        } catch (X) {
          E.value = X instanceof Error ? X.message : "Validation failed";
        }
    }
    async function ne() {
      var oe, X, Me, ke, we;
      if (V.value = null, E.value = null, await B(), (oe = V.value) != null && oe.includes("already exists")) {
        V.value = null, ee.value = ((X = S.value) == null ? void 0 : X.trim()) || o.defaultPath, g.value = 2, me();
        return;
      }
      if (!V.value && !(q.value && ((Me = Y.value) != null && Me.trim()) && (await se(), E.value))) {
        _e.value = !0;
        try {
          await l({
            workspace_path: ((ke = S.value) == null ? void 0 : ke.trim()) || o.defaultPath,
            models_directory: q.value && ((we = Y.value) == null ? void 0 : we.trim()) || null
          }), ze.value = 0, Te.value = Date.now();
          const G = setInterval(async () => {
            var W;
            if (Te.value && Date.now() - Te.value > YE) {
              clearInterval(G), _e.value = !1, V.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const ue = await i();
              if (ze.value = 0, ue.state === "idle" && _e.value) {
                clearInterval(G), _e.value = !1, V.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Ne.value = { progress: ue.progress, message: ue.message }, ue.state === "complete" ? (clearInterval(G), _e.value = !1, ee.value = ((W = S.value) == null ? void 0 : W.trim()) || o.defaultPath, g.value = 2, me()) : ue.state === "error" && (clearInterval(G), _e.value = !1, V.value = ue.error || "Workspace creation failed");
            } catch (ue) {
              ze.value++, console.warn(`Polling failure ${ze.value}/${io}:`, ue), ze.value >= io && (clearInterval(G), _e.value = !1, V.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (G) {
          _e.value = !1, V.value = G instanceof Error ? G.message : "Failed to create workspace";
        }
      }
    }
    async function fe() {
      Re.value = !0, M.value = null;
      try {
        const oe = {
          name: le.value.trim() || "my-new-env",
          python_version: Z.value,
          comfyui_version: z.value,
          torch_backend: A.value,
          switch_after: U.value,
          workspace_path: ee.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(oe)).status === "started") {
          Ee.value = 0, H.value = Date.now();
          const Me = setInterval(async () => {
            if (H.value && Date.now() - H.value > ti) {
              clearInterval(Me), Re.value = !1, M.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const ke = await d();
              if (Ee.value = 0, ke.state === "idle" && Re.value) {
                clearInterval(Me), Re.value = !1, M.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Ue.value = {
                progress: ke.progress ?? 0,
                message: ke.message,
                phase: ke.phase
              }, ke.state === "complete") {
                clearInterval(Me), Re.value = !1;
                const we = ke.environment_name || oe.name;
                U.value ? n("complete", we, ee.value) : (p.value = "landing", n("environment-created-no-switch", we));
              } else ke.state === "error" && (clearInterval(Me), Re.value = !1, M.value = ke.error || "Environment creation failed");
            } catch (ke) {
              Ee.value++, console.warn(`Polling failure ${Ee.value}/${io}:`, ke), Ee.value >= io && (clearInterval(Me), Re.value = !1, M.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (oe) {
        Re.value = !1, M.value = oe instanceof Error ? oe.message : "Unknown error";
      }
    }
    async function me() {
      he.value = !0;
      try {
        Q.value = await v();
      } catch (oe) {
        console.error("Failed to load ComfyUI releases:", oe);
      } finally {
        he.value = !1;
      }
    }
    function Ce() {
      w.value && n("switch-environment", w.value, ee.value);
    }
    function xe() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : g.value === 2 && o.setupState === "no_workspace" && (g.value = 1);
    }
    function re(oe, X) {
      C.value = !1, X ? n("complete", oe, ee.value) : (n("environment-created-no-switch", oe), p.value = "landing");
    }
    function ve() {
    }
    Qe(async () => {
      if (o.detectedModelsDir && (Y.value = o.detectedModelsDir), o.workspacePath && (ee.value = o.workspacePath), g.value === 2) {
        me();
        const oe = setTimeout(() => {
          I.value = !1;
        }, 3e3);
        await Le(), clearTimeout(oe), I.value = !1;
      }
    });
    async function Le() {
      try {
        const oe = await d();
        if (console.log("[ComfyGit] Create progress check:", oe.state, oe), oe.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", oe.environment_name), p.value = "create", Re.value = !0, le.value = oe.environment_name || "my-new-env", Ue.value = {
            progress: oe.progress ?? 0,
            message: oe.message,
            phase: oe.phase
          }, Ie();
          return;
        }
      } catch (oe) {
        console.log("[ComfyGit] Create progress check failed:", oe);
      }
      try {
        const oe = await m();
        console.log("[ComfyGit] Import progress check:", oe.state, oe), oe.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", oe.environment_name), R.value = {
          message: oe.message || "Importing...",
          phase: oe.phase || "",
          progress: oe.progress ?? 0,
          environmentName: oe.environment_name || ""
        }, P.value = !0, p.value = "import", C.value = !0);
      } catch (oe) {
        console.log("[ComfyGit] Import progress check failed:", oe);
      }
    }
    async function Ie() {
      Ee.value = 0, H.value = Date.now();
      let oe = null;
      const X = async () => {
        if (H.value && Date.now() - H.value > ti)
          return oe && clearInterval(oe), Re.value = !1, M.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const ke = await d();
          if (Ee.value = 0, ke.state === "idle" && Re.value)
            return oe && clearInterval(oe), Re.value = !1, M.value = "Environment creation was interrupted. Please try again.", !1;
          if (Ue.value = {
            progress: ke.progress ?? 0,
            message: ke.message,
            phase: ke.phase
          }, ke.state === "complete") {
            oe && clearInterval(oe), Re.value = !1;
            const we = ke.environment_name || le.value;
            return n("complete", we, ee.value), !1;
          } else if (ke.state === "error")
            return oe && clearInterval(oe), Re.value = !1, M.value = ke.error || "Environment creation failed", !1;
          return !0;
        } catch (ke) {
          return Ee.value++, console.warn(`Polling failure ${Ee.value}/${io}:`, ke), Ee.value >= io ? (oe && clearInterval(oe), Re.value = !1, M.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await X() && (oe = setInterval(async () => {
        !await X() && oe && clearInterval(oe);
      }, 2e3));
    }
    return (oe, X) => (a(), r(j, null, [
      x(ft, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: X[15] || (X[15] = (Me) => oe.$emit("close"))
      }, {
        header: h(() => [
          X[20] || (X[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", dE, [
            x(Vr),
            X[19] || (X[19] = t("span", { class: "header-divider" }, null, -1)),
            ye.value ? (a(), r("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: X[0] || (X[0] = (Me) => _.value = !0)
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
              onClick: X[1] || (X[1] = (Me) => oe.$emit("close")),
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
          var Me;
          return [
            g.value === 1 ? (a(), r("div", fE, [
              X[24] || (X[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", mE, [
                X[21] || (X[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                Ke(t("input", {
                  "onUpdate:modelValue": X[2] || (X[2] = (ke) => S.value = ke),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, vE), [
                  [zt, S.value]
                ]),
                V.value ? (a(), r("p", pE, f(V.value), 1)) : y("", !0)
              ]),
              t("div", gE, [
                t("label", hE, [
                  Ke(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": X[3] || (X[3] = (ke) => q.value = ke)
                  }, null, 512), [
                    [en, q.value]
                  ]),
                  X[22] || (X[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              q.value ? (a(), r("div", yE, [
                X[23] || (X[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                Ke(t("input", {
                  "onUpdate:modelValue": X[4] || (X[4] = (ke) => Y.value = ke),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, wE), [
                  [zt, Y.value]
                ]),
                e.detectedModelsDir && !Y.value ? (a(), r("p", _E, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                T.value ? (a(), r("p", kE, " Did you mean: " + f(T.value), 1)) : y("", !0),
                E.value ? (a(), r("p", bE, f(E.value), 1)) : y("", !0),
                O.value !== null && !E.value ? (a(), r("p", $E, " Found " + f(O.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              _e.value ? (a(), D(zn, {
                key: 1,
                progress: Ne.value.progress,
                message: Ne.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            g.value === 2 ? (a(), r("div", CE, [
              I.value ? (a(), r("div", xE, [...X[25] || (X[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), r(j, { key: 1 }, [
                !o.cliInstalled && !$.value ? (a(), r("div", SE, [
                  t("div", IE, [
                    X[27] || (X[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    X[28] || (X[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: X[5] || (X[5] = (ke) => $.value = !0),
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
                p.value === "landing" ? (a(), r("div", EE, [
                  X[34] || (X[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: X[6] || (X[6] = (ke) => p.value = "create")
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
                    onClick: X[7] || (X[7] = (ke) => {
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
                  (Me = o.existingEnvironments) != null && Me.length ? (a(), r(j, { key: 0 }, [
                    X[33] || (X[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", TE, [
                      (a(!0), r(j, null, ge(o.existingEnvironments, (ke) => (a(), r("label", {
                        key: ke,
                        class: Se(["env-option", { selected: w.value === ke }])
                      }, [
                        Ke(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: ke,
                          "onUpdate:modelValue": X[8] || (X[8] = (we) => w.value = we)
                        }, null, 8, PE), [
                          [Zt, w.value]
                        ]),
                        t("span", RE, f(ke), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (a(), r("div", ME, [
                  Re.value ? (a(), r("div", GE, [
                    t("p", jE, [
                      X[41] || (X[41] = b(" Creating environment ", -1)),
                      t("strong", null, f(le.value), 1),
                      X[42] || (X[42] = b("... ", -1))
                    ]),
                    x(zn, {
                      progress: Ue.value.progress,
                      message: Ue.value.message,
                      "current-phase": Ue.value.phase,
                      "show-steps": !0,
                      steps: qe
                    }, null, 8, ["progress", "message", "current-phase"]),
                    X[43] || (X[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), r(j, { key: 0 }, [
                    X[40] || (X[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", DE, [
                      X[35] || (X[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      Ke(t("input", {
                        "onUpdate:modelValue": X[9] || (X[9] = (ke) => le.value = ke),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [zt, le.value]
                      ])
                    ]),
                    t("div", LE, [
                      X[36] || (X[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      Ke(t("select", {
                        "onUpdate:modelValue": X[10] || (X[10] = (ke) => Z.value = ke),
                        class: "form-select"
                      }, [
                        (a(!0), r(j, null, ge(Ve(Mr), (ke) => (a(), r("option", {
                          key: ke,
                          value: ke
                        }, f(ke), 9, OE))), 128))
                      ], 512), [
                        [hs, Z.value]
                      ])
                    ]),
                    t("div", AE, [
                      X[37] || (X[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Ke(t("select", {
                        "onUpdate:modelValue": X[11] || (X[11] = (ke) => z.value = ke),
                        class: "form-select",
                        disabled: he.value
                      }, [
                        (a(!0), r(j, null, ge(Q.value, (ke) => (a(), r("option", {
                          key: ke.tag_name,
                          value: ke.tag_name
                        }, f(ke.name), 9, NE))), 128))
                      ], 8, UE), [
                        [hs, z.value]
                      ])
                    ]),
                    t("div", zE, [
                      X[38] || (X[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Ke(t("select", {
                        "onUpdate:modelValue": X[12] || (X[12] = (ke) => A.value = ke),
                        class: "form-select"
                      }, [
                        (a(!0), r(j, null, ge(Ve(al), (ke) => (a(), r("option", {
                          key: ke,
                          value: ke
                        }, f(ke) + f(ke === "auto" ? " (detect GPU)" : ""), 9, FE))), 128))
                      ], 512), [
                        [hs, A.value]
                      ])
                    ]),
                    t("div", BE, [
                      t("label", VE, [
                        Ke(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": X[13] || (X[13] = (ke) => U.value = ke)
                        }, null, 512), [
                          [en, U.value]
                        ]),
                        X[39] || (X[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    M.value ? (a(), r("div", WE, f(M.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (a(), r("div", HE, [
                  x(Ur, {
                    "workspace-path": ee.value,
                    "resume-import": P.value,
                    "initial-progress": R.value ?? void 0,
                    onImportComplete: re,
                    onImportStarted: X[14] || (X[14] = (ke) => C.value = !0),
                    onSourceCleared: ve
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          t("div", KE, [
            x(Wr),
            t("div", qE, [
              g.value === 1 ? (a(), D(Pe, {
                key: 0,
                variant: "primary",
                disabled: !K.value || _e.value,
                onClick: ne
              }, {
                default: h(() => [
                  b(f(_e.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : g.value === 2 ? (a(), r(j, { key: 1 }, [
                !Re.value && !C.value && (p.value !== "landing" || o.setupState === "no_workspace" && !ee.value) ? (a(), D(Pe, {
                  key: 0,
                  variant: "secondary",
                  onClick: xe
                }, {
                  default: h(() => [...X[44] || (X[44] = [
                    b(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (a(), D(Pe, {
                  key: 1,
                  variant: "primary",
                  disabled: !ie.value || Re.value,
                  onClick: fe
                }, {
                  default: h(() => [
                    b(f(Re.value ? "Creating..." : U.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                p.value === "landing" && w.value ? (a(), D(Pe, {
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
      _.value ? (a(), D(uE, {
        key: 0,
        "workspace-path": L.value,
        onClose: X[16] || (X[16] = (Me) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), QE = /* @__PURE__ */ pe(JE, [["__scopeId", "data-v-9a9aadc0"]]), XE = { class: "comfygit-panel" }, ZE = { class: "panel-header" }, eT = { class: "header-left" }, tT = {
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
}, IT = { class: "env-stats" }, ET = ["onClick"], TT = { class: "toast-container" }, PT = { class: "toast-message" }, RT = /* @__PURE__ */ de({
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
      repairWorkflowModels: $,
      getSetupStatus: P
    } = tt(), R = Rv(), { liveInstanceCount: I } = Nr({ autoStart: !0 }), S = k(null), q = k([]), Y = k([]), V = k([]), E = N(() => V.value.find((ae) => ae.is_current)), T = k(null), O = k(!1), le = k(1), Z = N(() => {
      var ae;
      return ((ae = T.value) == null ? void 0 : ae.state) || "managed";
    }), z = k(!1), A = k(null), U = k(null), M = k(!1), ee = k(null), Q = k(null), he = k(null), _e = k(!1), Re = k(!1), Ne = k(""), Ue = k(null), qe = k({ state: "idle", progress: 0, message: "" });
    let ze = null, Te = null;
    const Ee = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, H = o.initialView ? Ee[o.initialView] : null, K = k((H == null ? void 0 : H.view) ?? "status"), ie = k((H == null ? void 0 : H.section) ?? "this-env");
    function ye(ae, J) {
      K.value = ae, ie.value = J;
    }
    function L(ae) {
      const De = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[ae];
      De && ye(De.view, De.section);
    }
    function B() {
      ye("branches", "this-env");
    }
    function se() {
      n("close"), setTimeout(() => {
        var J;
        const ae = document.querySelectorAll("button.comfyui-button");
        for (const De of ae)
          if (((J = De.textContent) == null ? void 0 : J.trim()) === "Manager") {
            De.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ne = k(null), fe = k(!1), me = k(!1), Ce = k([]);
    let xe = 0;
    function re(ae, J = "info", De = 3e3) {
      const Ge = ++xe;
      return Ce.value.push({ id: Ge, message: ae, type: J }), De > 0 && setTimeout(() => {
        Ce.value = Ce.value.filter((ot) => ot.id !== Ge);
      }, De), Ge;
    }
    function ve(ae) {
      Ce.value = Ce.value.filter((J) => J.id !== ae);
    }
    function Le(ae, J) {
      re(ae, J);
    }
    const Ie = N(() => {
      if (!S.value) return "neutral";
      const ae = S.value.workflows, J = ae.new.length > 0 || ae.modified.length > 0 || ae.deleted.length > 0 || S.value.has_changes;
      return S.value.comparison.is_synced ? J ? "warning" : "success" : "error";
    });
    N(() => S.value ? Ie.value === "success" ? "All synced" : Ie.value === "warning" ? "Uncommitted changes" : Ie.value === "error" ? "Not synced" : "" : "");
    async function oe() {
      z.value = !0, A.value = null;
      try {
        const [ae, J, De, Ge] = await Promise.all([
          l(!0),
          i(),
          c(),
          g()
        ]);
        S.value = ae, q.value = J.commits, Y.value = De.branches, V.value = Ge, n("statusUpdate", ae), ee.value && await ee.value.loadWorkflows(!0);
      } catch (ae) {
        A.value = ae instanceof Error ? ae.message : "Failed to load status", S.value = null, q.value = [], Y.value = [];
      } finally {
        z.value = !1;
      }
    }
    function X(ae) {
      U.value = ae;
    }
    async function Me(ae) {
      var De;
      U.value = null;
      const J = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      ne.value = {
        title: J ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: J ? "You have uncommitted changes that will be lost." : `Checkout commit ${ae.short_hash || ((De = ae.hash) == null ? void 0 : De.slice(0, 7))}?`,
        details: J ? is() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: J ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: J,
        onConfirm: async () => {
          var mt;
          ne.value = null, ue();
          const Ge = re(`Checking out ${ae.short_hash || ((mt = ae.hash) == null ? void 0 : mt.slice(0, 7))}...`, "info", 0), ot = await u(ae.hash, J);
          ve(Ge), ot.status === "success" ? re("Restarting ComfyUI...", "success") : re(ot.message || "Checkout failed", "error");
        }
      };
    }
    async function ke(ae) {
      const J = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      ne.value = {
        title: J ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: J ? "You have uncommitted changes." : `Switch to branch "${ae}"?`,
        details: J ? is() : void 0,
        warning: J ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: J ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ne.value = null, ue();
          const De = re(`Switching to ${ae}...`, "info", 0), Ge = await m(ae, J);
          ve(De), Ge.status === "success" ? re("Restarting ComfyUI...", "success") : re(Ge.message || "Branch switch failed", "error");
        }
      };
    }
    async function we(ae) {
      const J = re(`Creating branch ${ae}...`, "info", 0), De = await d(ae);
      ve(J), De.status === "success" ? (re(`Branch "${ae}" created`, "success"), await oe()) : re(De.message || "Failed to create branch", "error");
    }
    async function G(ae, J = !1) {
      const De = async (Ge) => {
        var mt;
        const ot = re(`Deleting branch ${ae}...`, "info", 0);
        try {
          const Dt = await v(ae, Ge);
          ve(ot), Dt.status === "success" ? (re(`Branch "${ae}" deleted`, "success"), await oe()) : (mt = Dt.message) != null && mt.includes("not fully merged") ? ne.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ae}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ne.value = null, await De(!0);
            }
          } : re(Dt.message || "Failed to delete branch", "error");
        } catch (Dt) {
          ve(ot);
          const rs = Dt instanceof Error ? Dt.message : "Failed to delete branch";
          rs.includes("not fully merged") ? ne.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ae}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ne.value = null, await De(!0);
            }
          } : re(rs, "error");
        }
      };
      ne.value = {
        title: "Delete Branch",
        message: `Delete branch "${ae}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ne.value = null, await De(J);
        }
      };
    }
    async function W(ae) {
      U.value = null;
      const J = prompt("Enter branch name:");
      if (J) {
        const De = re(`Creating branch ${J}...`, "info", 0), Ge = await d(J, ae.hash);
        ve(De), Ge.status === "success" ? (re(`Branch "${J}" created from ${ae.short_hash}`, "success"), await oe()) : re(Ge.message || "Failed to create branch", "error");
      }
    }
    function ue() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Be() {
      ne.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ae;
          ne.value = null, ue(), re("Restarting environment...", "info");
          try {
            (ae = window.app) != null && ae.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Xe() {
      ne.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ae;
          ne.value = null, re("Stopping environment...", "info");
          try {
            (ae = window.app) != null && ae.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function vt(ae, J) {
      M.value = !1, Ne.value = ae, Ue.value = J || null, _e.value = !0;
    }
    async function at() {
      _e.value = !1, Re.value = !0, ue(), qe.value = {
        progress: 10,
        state: ut(10),
        message: Mt(10)
      };
      try {
        await w(Ne.value, Ue.value || void 0), Ft(), Ws();
      } catch (ae) {
        Yt(), Re.value = !1, re(`Failed to initiate switch: ${ae instanceof Error ? ae.message : "Unknown error"}`, "error"), qe.value = { state: "idle", progress: 0, message: "" }, Ue.value = null;
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
      if (Te) return;
      let ae = 10;
      const J = 60, De = 5e3, Ge = 100, ot = (J - ae) / (De / Ge);
      Te = window.setInterval(() => {
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
      Te && (clearInterval(Te), Te = null);
    }
    function Ws() {
      ze || (ze = window.setInterval(async () => {
        try {
          let ae = await R.getStatus();
          if ((!ae || ae.state === "idle") && (ae = await p()), !ae)
            return;
          const J = ae.progress || 0;
          J >= 60 && Yt();
          const De = Math.max(J, qe.value.progress), Ge = ae.state && ae.state !== "idle" && ae.state !== "unknown", ot = Ge ? ae.state : ut(De), mt = Ge && ae.message || Mt(De);
          qe.value = {
            state: ot,
            progress: De,
            message: mt
          }, ae.state === "complete" ? (Yt(), Ms(), Re.value = !1, re(`✓ Switched to ${Ne.value}`, "success"), await oe(), Ne.value = "") : ae.state === "rolled_back" ? (Yt(), Ms(), Re.value = !1, re("Switch failed, restored previous environment", "warning"), Ne.value = "") : ae.state === "critical_failure" && (Yt(), Ms(), Re.value = !1, re(`Critical error during switch: ${ae.message}`, "error"), Ne.value = "");
        } catch (ae) {
          console.error("Failed to poll switch progress:", ae);
        }
      }, 1e3));
    }
    function Ms() {
      Yt(), ze && (clearInterval(ze), ze = null);
    }
    function no() {
      var ae;
      _e.value = !1, Ne.value = "", (ae = T.value) != null && ae.state && T.value.state !== "managed" && (le.value = T.value.state === "no_workspace" ? 1 : 2, O.value = !0);
    }
    async function Co(ae) {
      fe.value = !1, await oe(), re(ae.message, ae.success ? "success" : "error");
    }
    async function xo() {
      me.value = !1;
      const ae = re("Syncing environment...", "info", 0);
      try {
        const J = await C("skip", !0);
        if (ve(ae), J.status === "success") {
          const De = [];
          J.nodes_installed.length && De.push(`${J.nodes_installed.length} installed`), J.nodes_removed.length && De.push(`${J.nodes_removed.length} removed`);
          const Ge = De.length ? `: ${De.join(", ")}` : "";
          re(`✓ Environment synced${Ge}`, "success"), await oe();
        } else {
          const De = J.errors.length ? J.errors.join("; ") : J.message;
          re(`Sync failed: ${De}`, "error");
        }
      } catch (J) {
        ve(ae), re(`Sync error: ${J instanceof Error ? J.message : "Unknown error"}`, "error");
      }
    }
    async function So(ae) {
      var J;
      try {
        const De = await $(ae);
        De.failed.length === 0 ? re(`✓ Repaired ${De.success} workflow${De.success === 1 ? "" : "s"}`, "success") : re(`Repaired ${De.success}, failed: ${De.failed.length}`, "warning"), await oe();
      } catch (De) {
        re(`Repair failed: ${De instanceof Error ? De.message : "Unknown error"}`, "error");
      } finally {
        (J = he.value) == null || J.resetRepairingState();
      }
    }
    async function $e() {
      var J, De;
      const ae = re("Repairing environment...", "info", 0);
      try {
        const Ge = await C("skip", !0);
        if (ve(ae), Ge.status === "success") {
          const ot = [];
          Ge.nodes_installed.length && ot.push(`${Ge.nodes_installed.length} installed`), Ge.nodes_removed.length && ot.push(`${Ge.nodes_removed.length} removed`);
          const mt = ot.length ? `: ${ot.join(", ")}` : "";
          re(`✓ Environment repaired${mt}`, "success"), (J = he.value) == null || J.closeDetailModal(), await oe();
        } else {
          const ot = Ge.errors.length ? Ge.errors.join(", ") : Ge.message || "Unknown error";
          re(`Repair failed: ${ot}`, "error");
        }
      } catch (Ge) {
        ve(ae), re(`Repair error: ${Ge instanceof Error ? Ge.message : "Unknown error"}`, "error");
      } finally {
        (De = he.value) == null || De.resetRepairingEnvironmentState();
      }
    }
    async function te(ae, J) {
      re(`Environment '${ae}' created`, "success"), await oe(), Q.value && await Q.value.loadEnvironments(), J && await vt(ae);
    }
    async function je(ae) {
      var J;
      if (((J = E.value) == null ? void 0 : J.name) === ae) {
        re("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      ne.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ae}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          ne.value = null;
          try {
            const De = await _(ae);
            De.status === "success" ? (re(`Environment "${ae}" deleted`, "success"), await oe(), Q.value && await Q.value.loadEnvironments()) : re(De.message || "Failed to delete environment", "error");
          } catch (De) {
            re(`Error deleting environment: ${De instanceof Error ? De.message : "Unknown error"}`, "error");
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
      ye("environments", "all-envs"), setTimeout(() => {
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
      var De, Ge, ot, mt, Dt, rs, Gs, js, ln, rn, cn, un;
      return a(), r("div", XE, [
        t("div", ZE, [
          t("div", eT, [
            J[31] || (J[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            S.value ? (a(), r("div", tT)) : y("", !0)
          ]),
          t("div", sT, [
            x(Vr),
            J[34] || (J[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Se(["icon-btn", { spinning: z.value }]),
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
              onClick: J[0] || (J[0] = (F) => n("close")),
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
        t("div", oT, [
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
            onClick: J[1] || (J[1] = (F) => ye("environments", "all-envs"))
          }, [
            S.value ? (a(), r("div", nT, [
              t("span", null, f(((De = E.value) == null ? void 0 : De.name) || ((Ge = S.value) == null ? void 0 : Ge.environment) || "Loading..."), 1),
              t("span", aT, "(" + f(S.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            J[36] || (J[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", lT, [
          t("div", iT, [
            t("div", rT, [
              t("div", cT, [
                J[37] || (J[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Se(["sidebar-item", { active: K.value === "status" && ie.value === "this-env" }]),
                  onClick: J[2] || (J[2] = (F) => ye("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: K.value === "workflows" }]),
                  onClick: J[3] || (J[3] = (F) => ye("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: K.value === "models-env" }]),
                  onClick: J[4] || (J[4] = (F) => ye("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: K.value === "branches" }]),
                  onClick: J[5] || (J[5] = (F) => ye("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: K.value === "history" }]),
                  onClick: J[6] || (J[6] = (F) => ye("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: K.value === "nodes" }]),
                  onClick: J[7] || (J[7] = (F) => ye("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: K.value === "debug-env" }]),
                  onClick: J[8] || (J[8] = (F) => ye("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              J[41] || (J[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", uT, [
                J[38] || (J[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Se(["sidebar-item", { active: K.value === "environments" }]),
                  onClick: J[9] || (J[9] = (F) => ye("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: K.value === "model-index" }]),
                  onClick: J[10] || (J[10] = (F) => ye("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: K.value === "settings" }]),
                  onClick: J[11] || (J[11] = (F) => ye("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: K.value === "debug-workspace" }]),
                  onClick: J[12] || (J[12] = (F) => ye("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              J[42] || (J[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", dT, [
                J[40] || (J[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Se(["sidebar-item", { active: K.value === "deploy" }]),
                  onClick: J[13] || (J[13] = (F) => ye("deploy", "sharing"))
                }, [
                  J[39] || (J[39] = b(" DEPLOY ", -1)),
                  Ve(I) > 0 ? (a(), r("span", fT, f(Ve(I)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Se(["sidebar-item", { active: K.value === "export" }]),
                  onClick: J[14] || (J[14] = (F) => ye("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: K.value === "import" }]),
                  onClick: J[15] || (J[15] = (F) => ye("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: K.value === "remotes" }]),
                  onClick: J[16] || (J[16] = (F) => ye("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", mT, [
              x(Wr)
            ])
          ]),
          t("div", vT, [
            A.value ? (a(), r("div", pT, f(A.value), 1)) : !S.value && K.value === "status" ? (a(), r("div", gT, " Loading status... ")) : (a(), r(j, { key: 2 }, [
              K.value === "status" ? (a(), D(ov, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: he,
                status: S.value,
                "setup-state": Z.value,
                onSwitchBranch: B,
                onCommitChanges: J[17] || (J[17] = (F) => fe.value = !0),
                onSyncEnvironment: J[18] || (J[18] = (F) => me.value = !0),
                onViewWorkflows: J[19] || (J[19] = (F) => ye("workflows", "this-env")),
                onViewHistory: J[20] || (J[20] = (F) => ye("history", "this-env")),
                onViewDebug: J[21] || (J[21] = (F) => ye("debug-env", "this-env")),
                onViewNodes: J[22] || (J[22] = (F) => ye("nodes", "this-env")),
                onRepairMissingModels: So,
                onRepairEnvironment: $e,
                onStartSetup: J[23] || (J[23] = (F) => O.value = !0),
                onViewEnvironments: J[24] || (J[24] = (F) => ye("environments", "all-envs")),
                onCreateEnvironment: Oe
              }, null, 8, ["status", "setup-state"])) : K.value === "workflows" ? (a(), D(D0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: ee,
                onRefresh: oe
              }, null, 512)) : K.value === "models-env" ? (a(), D(pw, {
                key: 2,
                onNavigate: L
              })) : K.value === "branches" ? (a(), D(yv, {
                key: 3,
                branches: Y.value,
                current: ((ot = S.value) == null ? void 0 : ot.branch) || null,
                onSwitch: ke,
                onCreate: we,
                onDelete: G
              }, null, 8, ["branches", "current"])) : K.value === "history" ? (a(), D(Tv, {
                key: 4,
                commits: q.value,
                onSelect: X,
                onCheckout: Me
              }, null, 8, ["commits"])) : K.value === "nodes" ? (a(), D(pk, {
                key: 5,
                "version-mismatches": ((Dt = (mt = S.value) == null ? void 0 : mt.comparison) == null ? void 0 : Dt.version_mismatches) || [],
                onOpenNodeManager: se,
                onRepairEnvironment: $e,
                onToast: Le
              }, null, 8, ["version-mismatches"])) : K.value === "debug-env" ? (a(), D(T$, { key: 6 })) : K.value === "environments" ? (a(), D(MC, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: Q,
                onSwitch: vt,
                onCreated: te,
                onDelete: je
              }, null, 512)) : K.value === "model-index" ? (a(), D(z_, {
                key: 8,
                onRefresh: oe
              })) : K.value === "settings" ? (a(), D(_$, { key: 9 })) : K.value === "debug-workspace" ? (a(), D(E$, { key: 10 })) : K.value === "deploy" ? (a(), D(c6, {
                key: 11,
                onToast: Le,
                onNavigate: L
              })) : K.value === "export" ? (a(), D(rx, { key: 12 })) : K.value === "import" ? (a(), D(t5, {
                key: 13,
                onImportCompleteSwitch: ws
              })) : K.value === "remotes" ? (a(), D(e$, {
                key: 14,
                onToast: Le
              })) : y("", !0)
            ], 64))
          ])
        ]),
        U.value ? (a(), D(I6, {
          key: 0,
          commit: U.value,
          onClose: J[25] || (J[25] = (F) => U.value = null),
          onCheckout: Me,
          onCreateBranch: W
        }, null, 8, ["commit"])) : y("", !0),
        ne.value ? (a(), D(nl, {
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
          onCancel: J[26] || (J[26] = (F) => ne.value = null),
          onSecondary: ne.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        x(II, {
          show: _e.value,
          "from-environment": ((rs = E.value) == null ? void 0 : rs.name) || "unknown",
          "to-environment": Ne.value,
          onConfirm: at,
          onClose: no
        }, null, 8, ["show", "from-environment", "to-environment"]),
        fe.value && S.value ? (a(), D(Br, {
          key: 2,
          status: S.value,
          "as-modal": !0,
          onClose: J[27] || (J[27] = (F) => fe.value = !1),
          onCommitted: Co
        }, null, 8, ["status"])) : y("", !0),
        me.value && S.value ? (a(), D(KI, {
          key: 3,
          show: me.value,
          "mismatch-details": {
            missing_nodes: S.value.comparison.missing_nodes,
            extra_nodes: S.value.comparison.extra_nodes
          },
          onConfirm: xo,
          onClose: J[28] || (J[28] = (F) => me.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        x(NI, {
          show: Re.value,
          state: qe.value.state,
          progress: qe.value.progress,
          message: qe.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        M.value ? (a(), r("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: J[30] || (J[30] = it((F) => M.value = !1, ["self"]))
        }, [
          t("div", hT, [
            t("div", yT, [
              J[44] || (J[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: J[29] || (J[29] = (F) => M.value = !1)
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
            t("div", wT, [
              J[45] || (J[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", _T, [
                (a(!0), r(j, null, ge(V.value, (F) => (a(), r("div", {
                  key: F.name,
                  class: Se(["env-item", { current: F.is_current }])
                }, [
                  t("div", kT, [
                    t("div", bT, [
                      t("span", $T, f(F.is_current ? "●" : "○"), 1),
                      t("span", CT, f(F.name), 1),
                      F.current_branch ? (a(), r("span", xT, "(" + f(F.current_branch) + ")", 1)) : y("", !0),
                      F.is_current ? (a(), r("span", ST, "CURRENT")) : y("", !0)
                    ]),
                    t("div", IT, f(F.workflow_count) + " workflows • " + f(F.node_count) + " nodes ", 1)
                  ]),
                  F.is_current ? y("", !0) : (a(), r("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (be) => vt(F.name)
                  }, " SWITCH ", 8, ET))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        O.value ? (a(), D(QE, {
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
        t("div", TT, [
          x(md, { name: "toast" }, {
            default: h(() => [
              (a(!0), r(j, null, ge(Ce.value, (F) => (a(), r("div", {
                key: F.id,
                class: Se(["toast", F.type])
              }, [
                t("span", PT, f(F.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), MT = /* @__PURE__ */ pe(RT, [["__scopeId", "data-v-037b3ee3"]]), DT = { class: "item-header" }, LT = { class: "item-info" }, OT = { class: "filename" }, AT = { class: "metadata" }, UT = { class: "size" }, NT = {
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
}, QT = /* @__PURE__ */ de({
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
        b(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), r("span", JT, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Mo = /* @__PURE__ */ pe(QT, [["__scopeId", "data-v-2110df65"]]), XT = { class: "queue-title" }, ZT = { class: "count" }, e7 = { class: "queue-actions" }, t7 = { class: "action-label" }, s7 = {
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
}, b7 = { class: "section-header" }, $7 = { class: "section-label failed" }, C7 = { class: "items-list" }, x7 = /* @__PURE__ */ de({
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
    let $ = null;
    yt(
      () => ({
        active: d.value,
        failed: i.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (S, q) => {
        $ && (clearTimeout($), $ = null);
        const Y = S.active === 0 && S.failed === 0 && S.paused === 0 && S.completed > 0, V = q && (q.active > 0 || q.paused > 0);
        Y && V && ($ = setTimeout(() => {
          _(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const P = N(() => {
      var Y;
      if (s.items.length === 0) return 0;
      const S = l.value.length, q = ((Y = o.value) == null ? void 0 : Y.progress) || 0;
      return Math.round((S + q / 100) / s.items.length * 100);
    });
    function R(S) {
      m(S);
    }
    function I(S) {
      return S === 0 ? "" : `${(S / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (S, q) => (a(), D(Ct, { to: "body" }, [
      Ve(u) ? (a(), r("div", {
        key: 0,
        class: Se(["model-download-queue", { minimized: !C.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: q[0] || (q[0] = (Y) => C.value = !C.value)
        }, [
          t("div", XT, [
            q[4] || (q[4] = t("span", { class: "icon" }, "↓", -1)),
            q[5] || (q[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", ZT, "(" + f(Ve(d)) + "/" + f(Ve(s).items.length) + ")", 1)
          ]),
          t("div", e7, [
            t("span", t7, f(C.value ? "minimize" : "expand"), 1)
          ])
        ]),
        C.value ? (a(), r("div", i7, [
          Ve(o) ? (a(), r("div", r7, [
            q[6] || (q[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            x(Mo, {
              item: Ve(o),
              onCancel: q[1] || (q[1] = (Y) => R(Ve(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          Ve(c).length > 0 ? (a(), r("div", c7, [
            t("div", u7, [
              t("span", d7, "Paused (" + f(Ve(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: q[2] || (q[2] = //@ts-ignore
                (...Y) => Ve(w) && Ve(w)(...Y))
              }, "Resume All")
            ]),
            t("div", f7, [
              (a(!0), r(j, null, ge(Ve(c), (Y) => (a(), D(Mo, {
                key: Y.id,
                item: Y,
                onResume: (V) => Ve(g)(Y.id),
                onRemove: (V) => Ve(p)(Y.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Ve(n).length > 0 ? (a(), r("div", m7, [
            t("div", v7, [
              t("span", p7, "Queued (" + f(Ve(n).length) + ")", 1)
            ]),
            t("div", g7, [
              (a(!0), r(j, null, ge(Ve(n), (Y) => (a(), D(Mo, {
                key: Y.id,
                item: Y,
                onCancel: (V) => R(Y.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          Ve(l).length > 0 ? (a(), r("div", h7, [
            t("div", y7, [
              t("span", w7, "Completed (" + f(Ve(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: q[3] || (q[3] = //@ts-ignore
                (...Y) => Ve(_) && Ve(_)(...Y))
              }, "Clear")
            ]),
            t("div", _7, [
              (a(!0), r(j, null, ge(Ve(l).slice(0, 3), (Y) => (a(), D(Mo, {
                key: Y.id,
                item: Y,
                onRemove: (V) => Ve(p)(Y.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Ve(i).length > 0 ? (a(), r("div", k7, [
            t("div", b7, [
              t("span", $7, "Failed (" + f(Ve(i).length) + ")", 1)
            ]),
            t("div", C7, [
              (a(!0), r(j, null, ge(Ve(i), (Y) => (a(), D(Mo, {
                key: Y.id,
                item: Y,
                onRetry: (V) => Ve(v)(Y.id),
                onRemove: (V) => Ve(p)(Y.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), r("div", s7, [
          t("div", o7, [
            t("div", {
              class: "progress-fill",
              style: qt({ width: `${P.value}%` })
            }, null, 4)
          ]),
          Ve(o) ? (a(), r("div", n7, [
            t("span", a7, f(Ve(o).filename), 1),
            t("span", l7, f(I(Ve(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), S7 = /* @__PURE__ */ pe(x7, [["__scopeId", "data-v-60751cfa"]]), I7 = { class: "detail-header" }, E7 = { class: "item-count" }, T7 = { class: "resource-list" }, P7 = { class: "item-info" }, R7 = { class: "item-name" }, M7 = {
  key: 0,
  class: "item-subtitle"
}, D7 = {
  key: 0,
  class: "installing-badge"
}, L7 = ["title"], O7 = {
  key: 2,
  class: "installed-badge"
}, A7 = {
  key: 3,
  class: "queued-badge"
}, U7 = {
  key: 1,
  class: "no-action"
}, N7 = /* @__PURE__ */ de({
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
    const o = e, n = s, l = N(() => o.itemType === "model" ? "Download" : "Install"), i = N(() => o.items.filter((p) => p.canAction)), c = N(() => i.value.length > 0 && i.value.every(
      (p) => {
        var _, C;
        return o.queuedItems.has(p.id) || ((_ = o.installedItems) == null ? void 0 : _.has(p.id)) || ((C = o.failedItems) == null ? void 0 : C.has(p.id));
      }
    )), u = N(() => c.value ? "All Queued" : o.itemType === "model" ? "Download All" : "Install All");
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
        t("div", I7, [
          t("span", E7, f(e.items.length) + " " + f(e.items.length === 1 ? "item" : "items"), 1),
          i.value.length > 1 ? (a(), D(Pe, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: c.value,
            onClick: _[0] || (_[0] = (C) => n("bulk-action"))
          }, {
            default: h(() => [
              b(f(u.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        t("div", T7, [
          (a(!0), r(j, null, ge(e.items, (C) => (a(), r("div", {
            key: C.id,
            class: "resource-item"
          }, [
            t("div", P7, [
              t("span", R7, f(C.name), 1),
              C.subtitle ? (a(), r("span", M7, f(C.subtitle), 1)) : y("", !0)
            ]),
            C.canAction ? (a(), r(j, { key: 0 }, [
              m(C) ? (a(), r("span", D7, "Installing...")) : g(C) ? (a(), r("span", {
                key: 1,
                class: "failed-badge",
                title: w(C)
              }, "Failed ⚠", 8, L7)) : v(C) ? (a(), r("span", O7, "Installed")) : d(C) ? (a(), r("span", A7, "Queued")) : (a(), D(Pe, {
                key: 4,
                size: "sm",
                variant: "secondary",
                onClick: ($) => n("action", C)
              }, {
                default: h(() => [
                  b(f(l.value), 1)
                ]),
                _: 1
              }, 8, ["onClick"]))
            ], 64)) : (a(), r("span", U7, f(C.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        x(Pe, {
          variant: "secondary",
          onClick: _[1] || (_[1] = (C) => n("close"))
        }, {
          default: h(() => [..._[3] || (_[3] = [
            b("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), z7 = /* @__PURE__ */ pe(N7, [["__scopeId", "data-v-fac0fef0"]]), F7 = {
  key: 0,
  class: "loading-state"
}, B7 = {
  key: 1,
  class: "analysis-results"
}, V7 = {
  key: 0,
  class: "section"
}, W7 = { class: "section-header" }, G7 = { class: "section-title" }, j7 = { class: "section-actions" }, H7 = { class: "item-list" }, K7 = { class: "package-info" }, q7 = { class: "package-name" }, Y7 = { class: "node-count" }, J7 = {
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
}, iP = { class: "section-header" }, rP = { class: "section-title" }, cP = { class: "section-actions" }, uP = { class: "item-list" }, dP = { class: "model-info" }, fP = { class: "model-name" }, mP = {
  key: 1,
  class: "queued-badge"
}, vP = {
  key: 1,
  class: "no-url"
}, pP = { class: "dont-show-again" }, gP = /* @__PURE__ */ de({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = k(!1), o = k(null), n = k(null), l = k(!1), i = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Map()), d = k(/* @__PURE__ */ new Set()), m = k(!1), v = k(null), g = k(0), w = k(null), p = k(/* @__PURE__ */ new Set()), _ = k(/* @__PURE__ */ new Map()), { addToQueue: C } = bo(), { queueNodeInstall: $ } = tt(), P = N(() => R.value.length > 0 || S.value.length > 0 || q.value.length > 0), R = N(() => {
      var ie, ye;
      if (!((ie = n.value) != null && ie.nodes)) return [];
      const H = /* @__PURE__ */ new Map(), K = (n.value.nodes.resolved || []).filter((L) => {
        var B;
        return !L.is_installed && ((B = L.package) == null ? void 0 : B.package_id);
      });
      for (const L of K) {
        const B = L.package.package_id;
        H.has(B) || H.set(B, {
          package_id: B,
          title: L.package.title || B,
          node_count: 0,
          node_types: [],
          repository: L.package.repository || null,
          latest_version: L.package.latest_version || null
        });
        const se = H.get(B);
        se.node_count++, se.node_types.push(((ye = L.reference) == null ? void 0 : ye.node_type) || L.node_type);
      }
      return Array.from(H.values());
    }), I = N(() => R.value.reduce((H, K) => H + K.node_count, 0)), S = N(() => {
      var H;
      return (H = n.value) != null && H.nodes ? (n.value.nodes.unresolved || []).map((K) => {
        var ie;
        return {
          node_type: ((ie = K.reference) == null ? void 0 : ie.node_type) || K.node_type
        };
      }) : [];
    }), q = N(() => {
      var ie;
      if (!((ie = n.value) != null && ie.models)) return [];
      const H = (n.value.models.resolved || []).filter(
        (ye) => ye.match_type === "download_intent" || ye.match_type === "property_download_intent" || ye.match_type === "not_found"
      ).map((ye) => {
        var L, B, se, ne;
        return {
          filename: ((B = (L = ye.reference) == null ? void 0 : L.widget_value) == null ? void 0 : B.split("/").pop()) || ((se = ye.reference) == null ? void 0 : se.widget_value) || ye.widget_value,
          widget_value: ((ne = ye.reference) == null ? void 0 : ne.widget_value) || ye.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: ye.download_source || null,
          targetPath: ye.target_path || null,
          canDownload: !!(ye.download_source && ye.target_path)
        };
      }), K = (n.value.models.unresolved || []).map((ye) => {
        var L, B, se, ne;
        return {
          filename: ((B = (L = ye.reference) == null ? void 0 : L.widget_value) == null ? void 0 : B.split("/").pop()) || ((se = ye.reference) == null ? void 0 : se.widget_value) || ye.widget_value,
          widget_value: ((ne = ye.reference) == null ? void 0 : ne.widget_value) || ye.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      });
      return [...H, ...K];
    }), Y = N(() => q.value.filter((H) => H.canDownload)), V = N(() => R.value.length > 0 && R.value.every(
      (H) => i.value.has(H.package_id) || c.value.has(H.package_id) || u.value.has(H.package_id)
    )), E = N(() => Y.value.length > 0 && Y.value.every((H) => d.value.has(H.url))), T = N(() => R.value.length > 0 || Y.value.length > 0), O = N(() => {
      const H = R.value.length === 0 || V.value, K = Y.value.length === 0 || E.value;
      return H && K;
    }), le = N(() => w.value === "models" ? `Missing Models (${q.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${I.value})` : ""), Z = N(() => w.value === "models" ? q.value.map((H) => ({
      id: H.url || H.widget_value,
      name: H.filename,
      canAction: H.canDownload,
      actionDisabledReason: H.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? R.value.map((H) => ({
      id: H.package_id,
      name: H.title,
      subtitle: `(${H.node_count} ${H.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : []);
    function z(H) {
      if (w.value === "models") {
        const K = q.value.find((ie) => ie.url === H.id || ie.widget_value === H.id);
        K && M(K);
      } else if (w.value === "packages") {
        const K = R.value.find((ie) => ie.package_id === H.id);
        K && U(K);
      }
    }
    function A() {
      w.value === "models" ? Q() : w.value === "packages" && ee();
    }
    async function U(H) {
      const K = H.package_id;
      if (!(i.value.has(K) || c.value.has(K) || u.value.has(K))) {
        v.value = K;
        try {
          const { ui_id: ie } = await $({
            id: K,
            version: H.latest_version || "latest",
            selected_version: H.latest_version || "latest",
            repository: H.repository || void 0,
            mode: "remote",
            channel: "default"
          });
          _.value.set(ie, K), c.value.add(K);
        } catch (ie) {
          console.error("[ComfyGit] Failed to queue package install:", ie), u.value.set(K, "Failed to queue install request");
        } finally {
          v.value = null;
        }
      }
    }
    function M(H) {
      !H.url || !H.targetPath || d.value.has(H.url) || (C([{
        workflow: "unsaved",
        filename: H.filename,
        url: H.url,
        targetPath: H.targetPath
      }]), d.value.add(H.url));
    }
    async function ee() {
      for (const H of R.value)
        !i.value.has(H.package_id) && !c.value.has(H.package_id) && !u.value.has(H.package_id) && await U(H);
    }
    function Q() {
      const H = Y.value.filter(
        (K) => !d.value.has(K.url)
      );
      if (H.length !== 0) {
        C(H.map((K) => ({
          workflow: "unsaved",
          filename: K.filename,
          url: K.url,
          targetPath: K.targetPath
        })));
        for (const K of H)
          d.value.add(K.url);
      }
    }
    function he() {
      ee(), Q();
    }
    function _e() {
      m.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Re(H) {
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const K = H == null ? void 0 : H.id;
      if (K && p.value.has(K)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${K} this session`);
        return;
      }
      try {
        const ie = await fetch("/v2/comfygit/workflow/is-saved", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: H })
        });
        if (ie.ok) {
          const ye = await ie.json();
          if (ye.is_saved) {
            console.log(`[ComfyGit] Workflow matches saved file: ${ye.filename}, skipping popup`), K && p.value.add(K);
            return;
          }
        }
      } catch (ie) {
        console.warn("[ComfyGit] Failed to check if workflow is saved:", ie);
      }
      s.value = !0, o.value = null, i.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), m.value = !1, g.value = 0;
      try {
        const ie = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: H, name: "unsaved" })
        });
        if (!ie.ok) {
          const ye = await ie.json();
          throw new Error(ye.error || "Failed to analyze workflow");
        }
        n.value = await ie.json(), P.value && (l.value = !0, K && p.value.add(K));
      } catch (ie) {
        console.error("[ComfyGit] Failed to analyze workflow:", ie);
      } finally {
        s.value = !1;
      }
    }
    function Ne() {
      l.value = !1, n.value = null;
    }
    function Ue(H) {
      const { workflow: K } = H.detail;
      K && Re(K);
    }
    function qe(H) {
      var ye;
      const K = (ye = H.detail) == null ? void 0 : ye.ui_id, ie = _.value.get(K);
      ie && (v.value = ie, console.log("[ComfyGit] Installing package:", ie));
    }
    function ze(H) {
      var L, B, se, ne, fe, me, Ce;
      const K = (L = H.detail) == null ? void 0 : L.ui_id, ie = _.value.get(K), ye = (se = (B = H.detail) == null ? void 0 : B.status) == null ? void 0 : se.status_str;
      if (ie) {
        if (_.value.delete(K), c.value.delete(ie), v.value === ie && (v.value = null), ye === "success")
          i.value.add(ie), g.value++, console.log("[ComfyGit] Package installed successfully:", ie);
        else {
          const xe = ((me = (fe = (ne = H.detail) == null ? void 0 : ne.status) == null ? void 0 : fe.messages) == null ? void 0 : me[0]) || ((Ce = H.detail) == null ? void 0 : Ce.result) || "Unknown error";
          u.value.set(ie, xe), console.error("[ComfyGit] Package install failed:", ie, xe);
        }
        _.value.size === 0 && g.value > 0 && window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: g.value }
        }));
      }
    }
    function Te() {
      var H;
      return (H = window.app) == null ? void 0 : H.api;
    }
    function Ee(H) {
      const { change_type: K } = H.detail;
      (K === "created" || K === "modified") && l.value && (l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return Qe(() => {
      window.addEventListener("comfygit:workflow-loaded", Ue);
      const H = Te();
      H && (H.addEventListener("cm-task-started", qe), H.addEventListener("cm-task-completed", ze), H.addEventListener("comfygit:workflow-changed", Ee));
    }), oo(() => {
      window.removeEventListener("comfygit:workflow-loaded", Ue);
      const H = Te();
      H && (H.removeEventListener("cm-task-started", qe), H.removeEventListener("cm-task-completed", ze), H.removeEventListener("comfygit:workflow-changed", Ee));
    }), (H, K) => (a(), r(j, null, [
      l.value ? (a(), D(ft, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: Ne
      }, {
        body: h(() => [
          s.value ? (a(), r("div", F7, [...K[4] || (K[4] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : n.value && P.value ? (a(), r("div", B7, [
            R.value.length > 0 ? (a(), r("div", V7, [
              t("div", W7, [
                t("span", G7, "Missing Custom Nodes (" + f(I.value) + ")", 1),
                t("div", j7, [
                  R.value.length > 5 ? (a(), D(Pe, {
                    key: 0,
                    size: "sm",
                    variant: "ghost",
                    onClick: K[0] || (K[0] = (ie) => w.value = "packages")
                  }, {
                    default: h(() => [...K[5] || (K[5] = [
                      b(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0),
                  R.value.length > 1 ? (a(), D(Pe, {
                    key: 1,
                    size: "sm",
                    variant: "secondary",
                    disabled: V.value,
                    onClick: ee
                  }, {
                    default: h(() => [
                      b(f(V.value ? "All Queued" : "Install All"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])) : y("", !0)
                ])
              ]),
              t("div", H7, [
                (a(!0), r(j, null, ge(R.value.slice(0, 5), (ie) => (a(), r("div", {
                  key: ie.package_id,
                  class: "package-item"
                }, [
                  t("div", K7, [
                    t("span", q7, f(ie.title), 1),
                    t("span", Y7, "(" + f(ie.node_count) + " " + f(ie.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !i.value.has(ie.package_id) && !c.value.has(ie.package_id) && !u.value.has(ie.package_id) ? (a(), D(Pe, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: v.value === ie.package_id,
                    onClick: (ye) => U(ie)
                  }, {
                    default: h(() => [
                      b(f(v.value === ie.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : v.value === ie.package_id ? (a(), r("span", J7, "Installing...")) : c.value.has(ie.package_id) ? (a(), r("span", Q7, "Queued")) : u.value.has(ie.package_id) ? (a(), r("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(ie.package_id)
                  }, "Failed ⚠", 8, X7)) : (a(), r("span", Z7, "Installed"))
                ]))), 128))
              ])
            ])) : y("", !0),
            S.value.length > 0 ? (a(), r("div", eP, [
              t("div", tP, [
                t("span", sP, "Unknown Nodes (" + f(S.value.length) + ")", 1)
              ]),
              t("div", oP, [
                (a(!0), r(j, null, ge(S.value.slice(0, 5), (ie) => (a(), r("div", {
                  key: ie.node_type,
                  class: "item"
                }, [
                  t("code", nP, f(ie.node_type), 1),
                  K[6] || (K[6] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                S.value.length > 5 ? (a(), r("div", aP, " ...and " + f(S.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            q.value.length > 0 ? (a(), r("div", lP, [
              t("div", iP, [
                t("span", rP, "Missing Models (" + f(q.value.length) + ")", 1),
                t("div", cP, [
                  q.value.length > 5 ? (a(), D(Pe, {
                    key: 0,
                    size: "sm",
                    variant: "ghost",
                    onClick: K[1] || (K[1] = (ie) => w.value = "models")
                  }, {
                    default: h(() => [...K[7] || (K[7] = [
                      b(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0),
                  Y.value.length > 1 ? (a(), D(Pe, {
                    key: 1,
                    size: "sm",
                    variant: "secondary",
                    disabled: E.value,
                    onClick: Q
                  }, {
                    default: h(() => [
                      b(f(E.value ? "All Queued" : "Download All"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])) : y("", !0)
                ])
              ]),
              t("div", uP, [
                (a(!0), r(j, null, ge(q.value.slice(0, 5), (ie) => (a(), r("div", {
                  key: ie.widget_value,
                  class: "model-item"
                }, [
                  t("div", dP, [
                    t("span", fP, f(ie.filename), 1)
                  ]),
                  ie.canDownload ? (a(), r(j, { key: 0 }, [
                    d.value.has(ie.url) ? (a(), r("span", mP, "Queued")) : (a(), D(Pe, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (ye) => M(ie)
                    }, {
                      default: h(() => [...K[8] || (K[8] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (a(), r("span", vP, "Manual download required"))
                ]))), 128))
              ])
            ])) : y("", !0),
            t("div", pP, [
              x(Da, {
                modelValue: m.value,
                "onUpdate:modelValue": [
                  K[2] || (K[2] = (ie) => m.value = ie),
                  _e
                ]
              }, {
                default: h(() => [...K[9] || (K[9] = [
                  b(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : y("", !0)
        ]),
        footer: h(() => [
          x(Pe, {
            variant: "secondary",
            onClick: Ne
          }, {
            default: h(() => [...K[10] || (K[10] = [
              b("Dismiss", -1)
            ])]),
            _: 1
          }),
          T.value ? (a(), D(Pe, {
            key: 0,
            variant: "primary",
            disabled: O.value,
            onClick: he
          }, {
            default: h(() => [
              b(f(O.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      w.value ? (a(), D(z7, {
        key: 1,
        title: le.value,
        items: Z.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : c.value,
        "installed-items": w.value === "packages" ? i.value : void 0,
        "failed-items": w.value === "packages" ? u.value : void 0,
        "installing-item": w.value === "packages" ? v.value : void 0,
        onClose: K[3] || (K[3] = (ie) => w.value = null),
        onAction: z,
        onBulkAction: A
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), hP = /* @__PURE__ */ pe(gP, [["__scopeId", "data-v-9b014453"]]), yP = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', wP = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', _P = {
  comfy: yP,
  phosphor: wP
}, ll = "comfy", Gr = "comfygit-theme";
let Ys = null, jr = ll;
function kP() {
  try {
    const e = localStorage.getItem(Gr);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return ll;
}
function Hr(e = ll) {
  Ys && Ys.remove(), Ys = document.createElement("style"), Ys.id = "comfygit-theme-styles", Ys.setAttribute("data-theme", e), Ys.textContent = _P[e], document.head.appendChild(Ys), document.body.setAttribute("data-comfygit-theme", e), jr = e;
  try {
    localStorage.setItem(Gr, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function bP() {
  return jr;
}
function $P(e) {
  Hr(e);
}
function CP(e) {
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
const xP = kP();
Hr(xP);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), $P(e);
  },
  getTheme: () => {
    const e = bP();
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
function SP() {
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
    render: () => nn(MT, {
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
function IP(e) {
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
        Oo(), EP(l.success, l.message), In().then(Ho);
      }
    })
  }), jo.mount(At), document.body.appendChild(At);
}
function Oo() {
  jo && (jo.unmount(), jo = null), At && (At.remove(), At = null);
}
function EP(e, s) {
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
function TP() {
  Do || (Do = document.createElement("div"), Do.className = "comfygit-download-queue-root", si = Zn({
    render: () => nn(S7)
  }), si.mount(Do), document.body.appendChild(Do), console.log("[ComfyGit] Model download queue mounted"));
}
function PP() {
  Lo || (Lo = document.createElement("div"), Lo.className = "comfygit-missing-resources-root", oi = Zn({
    render: () => nn(hP)
  }), oi.mount(Lo), document.body.appendChild(Lo), console.log("[ComfyGit] Missing resources popup mounted"));
}
let Wt = null;
function Ho() {
  if (!Wt) return;
  const e = Wt.querySelector(".commit-indicator");
  e && (e.style.display = SP() ? "block" : "none");
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = ya, Wt = document.createElement("button"), Wt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Wt.innerHTML = 'Commit <span class="commit-indicator"></span>', Wt.title = "Quick Commit", Wt.onclick = () => IP(Wt), e.appendChild(s), e.appendChild(Wt), (i = (l = Vt.menu) == null ? void 0 : l.settingsGroup) != null && i.element && (Vt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), TP(), PP(), window.addEventListener("comfygit:open-panel", ((c) => {
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
        const $ = document.createElement("div");
        $.textContent = "Node installation failed", $.style.cssText = "font-weight: 600; color: #e53935;", C.appendChild($);
        const P = document.createElement("div");
        P.textContent = "Dependency conflict detected", P.style.cssText = "font-size: 12px; opacity: 0.8;", C.appendChild(P), p.appendChild(C);
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
          p.remove(), ya("debug-env");
        }, p.appendChild(R);
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
        const $ = document.createElement("div");
        $.textContent = "To apply changes, please restart ComfyUI", $.style.cssText = "font-weight: 500; color: #fff;", C.appendChild($);
        const P = document.createElement("div");
        P.textContent = `${g} node package${g > 1 ? "s" : ""} ready to install`, P.style.cssText = "font-size: 12px; opacity: 0.7;", C.appendChild(P), p.appendChild(C);
        const R = document.createElement("button");
        R.textContent = "Apply Changes", R.style.cssText = `
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
        `, R.onmouseover = () => R.style.background = "rgba(255,255,255,0.1)", R.onmouseout = () => R.style.background = "transparent", R.onclick = async () => {
          R.disabled = !0, R.textContent = "Restarting...", R.style.opacity = "0.7", $.textContent = "Restarting...", P.textContent = "Applying changes, please wait...";
          try {
            const S = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Vt.refreshComboInNodes && (await Vt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", $.textContent = "Nodes Installed", $.style.color = "#4caf50", P.textContent = `${g} package${g > 1 ? "s" : ""} installed successfully!`, p.style.borderColor = "#4caf50", R.style.display = "none", setTimeout(() => {
                  p.remove();
                }, 3e3);
              } catch (q) {
                console.error("[ComfyGit] Failed to refresh nodes:", q), _.textContent = "✅", $.textContent = "Restart Complete", $.style.color = "#4caf50", P.textContent = "Refresh the page to load new nodes.", p.style.borderColor = "#4caf50", R.style.display = "none";
              }
            };
            n.addEventListener("reconnected", S, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (S) {
            console.error("[ComfyGit] Failed to restart:", S), $.textContent = "Restart Failed", $.style.color = "#e53935", P.textContent = "Could not restart server. Try again.", p.style.borderColor = "#e53935", R.textContent = "Try Again", R.disabled = !1, R.style.opacity = "1";
          }
        }, p.appendChild(R);
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
        const w = CP(g.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (g) => {
        const w = g, { count: p = 1 } = w.detail || {};
        m(p);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
