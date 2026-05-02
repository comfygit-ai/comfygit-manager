var Gc = Object.defineProperty;
var jc = (e, t, n) => t in e ? Gc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Lo = (e, t, n) => jc(e, typeof t != "symbol" ? t + "" : t, n);
import { app as Ns } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function ul(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const St = {}, Rn = [], As = () => {
}, ji = () => !1, ua = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), dl = (e) => e.startsWith("onUpdate:"), At = Object.assign, ml = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Hc = Object.prototype.hasOwnProperty, _t = (e, t) => Hc.call(e, t), st = Array.isArray, Dn = (e) => Io(e) === "[object Map]", Wn = (e) => Io(e) === "[object Set]", Bl = (e) => Io(e) === "[object Date]", ot = (e) => typeof e == "function", Dt = (e) => typeof e == "string", xs = (e) => typeof e == "symbol", Ct = (e) => e !== null && typeof e == "object", Hi = (e) => (Ct(e) || ot(e)) && ot(e.then) && ot(e.catch), qi = Object.prototype.toString, Io = (e) => qi.call(e), qc = (e) => Io(e).slice(8, -1), Ki = (e) => Io(e) === "[object Object]", fl = (e) => Dt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ro = /* @__PURE__ */ ul(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), da = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Kc = /-\w/g, ws = da(
  (e) => e.replace(Kc, (t) => t.slice(1).toUpperCase())
), Jc = /\B([A-Z])/g, un = da(
  (e) => e.replace(Jc, "-$1").toLowerCase()
), ma = da((e) => e.charAt(0).toUpperCase() + e.slice(1)), Da = da(
  (e) => e ? `on${ma(e)}` : ""
), ln = (e, t) => !Object.is(e, t), Wo = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Ji = (e, t, n, a = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: n
  });
}, fa = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Qc = (e) => {
  const t = Dt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Wl;
const va = () => Wl || (Wl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function zt(e) {
  if (st(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const a = e[n], l = Dt(a) ? eu(a) : zt(a);
      if (l)
        for (const r in l)
          t[r] = l[r];
    }
    return t;
  } else if (Dt(e) || Ct(e))
    return e;
}
const Yc = /;(?![^(]*\))/g, Xc = /:([^]+)/, Zc = /\/\*[^]*?\*\//g;
function eu(e) {
  const t = {};
  return e.replace(Zc, "").split(Yc).forEach((n) => {
    if (n) {
      const a = n.split(Xc);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function Be(e) {
  let t = "";
  if (Dt(e))
    t = e;
  else if (st(e))
    for (let n = 0; n < e.length; n++) {
      const a = Be(e[n]);
      a && (t += a + " ");
    }
  else if (Ct(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const tu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", su = /* @__PURE__ */ ul(tu);
function Qi(e) {
  return !!e || e === "";
}
function nu(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let a = 0; n && a < e.length; a++)
    n = kn(e[a], t[a]);
  return n;
}
function kn(e, t) {
  if (e === t) return !0;
  let n = Bl(e), a = Bl(t);
  if (n || a)
    return n && a ? e.getTime() === t.getTime() : !1;
  if (n = xs(e), a = xs(t), n || a)
    return e === t;
  if (n = st(e), a = st(t), n || a)
    return n && a ? nu(e, t) : !1;
  if (n = Ct(e), a = Ct(t), n || a) {
    if (!n || !a)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(t).length;
    if (l !== r)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (u && !d || !u && d || !kn(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function vl(e, t) {
  return e.findIndex((n) => kn(n, t));
}
const Yi = (e) => !!(e && e.__v_isRef === !0), m = (e) => Dt(e) ? e : e == null ? "" : st(e) || Ct(e) && (e.toString === qi || !ot(e.toString)) ? Yi(e) ? m(e.value) : JSON.stringify(e, Xi, 2) : String(e), Xi = (e, t) => Yi(t) ? Xi(e, t.value) : Dn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [a, l], r) => (n[Na(a, r) + " =>"] = l, n),
    {}
  )
} : Wn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Na(n))
} : xs(t) ? Na(t) : Ct(t) && !st(t) && !Ki(t) ? String(t) : t, Na = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    xs(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let is;
class ou {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = is, !t && is && (this.index = (is.scopes || (is.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = is;
      try {
        return is = this, t();
      } finally {
        is = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = is, is = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (is = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, a;
      for (n = 0, a = this.effects.length; n < a; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, a = this.cleanups.length; n < a; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, a = this.scopes.length; n < a; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const l = this.parent.scopes.pop();
        l && l !== this && (this.parent.scopes[this.index] = l, l.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function au() {
  return is;
}
let Et;
const La = /* @__PURE__ */ new WeakSet();
class Zi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, is && is.active && is.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, La.has(this) && (La.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || tr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Gl(this), sr(this);
    const t = Et, n = $s;
    Et = this, $s = !0;
    try {
      return this.fn();
    } finally {
      nr(this), Et = t, $s = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        hl(t);
      this.deps = this.depsTail = void 0, Gl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? La.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    qa(this) && this.run();
  }
  get dirty() {
    return qa(this);
  }
}
let er = 0, co, uo;
function tr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = uo, uo = e;
    return;
  }
  e.next = co, co = e;
}
function pl() {
  er++;
}
function gl() {
  if (--er > 0)
    return;
  if (uo) {
    let t = uo;
    for (uo = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; co; ) {
    let t = co;
    for (co = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (a) {
          e || (e = a);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function sr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function nr(e) {
  let t, n = e.depsTail, a = n;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === n && (n = l), hl(a), lu(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = t, e.depsTail = n;
}
function qa(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (or(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function or(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === wo) || (e.globalVersion = wo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !qa(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Et, a = $s;
  Et = e, $s = !0;
  try {
    sr(e);
    const l = e.fn(e._value);
    (t.version === 0 || ln(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    Et = n, $s = a, nr(e), e.flags &= -3;
  }
}
function hl(e, t = !1) {
  const { dep: n, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), n.subs === e && (n.subs = a, !a && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      hl(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function lu(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let $s = !0;
const ar = [];
function Ks() {
  ar.push($s), $s = !1;
}
function Js() {
  const e = ar.pop();
  $s = e === void 0 ? !0 : e;
}
function Gl(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Et;
    Et = void 0;
    try {
      t();
    } finally {
      Et = n;
    }
  }
}
let wo = 0;
class iu {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class yl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Et || !$s || Et === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Et)
      n = this.activeLink = new iu(Et, this), Et.deps ? (n.prevDep = Et.depsTail, Et.depsTail.nextDep = n, Et.depsTail = n) : Et.deps = Et.depsTail = n, lr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const a = n.nextDep;
      a.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = a), n.prevDep = Et.depsTail, n.nextDep = void 0, Et.depsTail.nextDep = n, Et.depsTail = n, Et.deps === n && (Et.deps = a);
    }
    return n;
  }
  trigger(t) {
    this.version++, wo++, this.notify(t);
  }
  notify(t) {
    pl();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      gl();
    }
  }
}
function lr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep)
        lr(a);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ka = /* @__PURE__ */ new WeakMap(), yn = Symbol(
  ""
), Ja = Symbol(
  ""
), _o = Symbol(
  ""
);
function Qt(e, t, n) {
  if ($s && Et) {
    let a = Ka.get(e);
    a || Ka.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(n);
    l || (a.set(n, l = new yl()), l.map = a, l.key = n), l.track();
  }
}
function Gs(e, t, n, a, l, r) {
  const c = Ka.get(e);
  if (!c) {
    wo++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (pl(), t === "clear")
    c.forEach(u);
  else {
    const d = st(e), f = d && fl(n);
    if (d && n === "length") {
      const v = Number(a);
      c.forEach((p, w) => {
        (w === "length" || w === _o || !xs(w) && w >= v) && u(p);
      });
    } else
      switch ((n !== void 0 || c.has(void 0)) && u(c.get(n)), f && u(c.get(_o)), t) {
        case "add":
          d ? f && u(c.get("length")) : (u(c.get(yn)), Dn(e) && u(c.get(Ja)));
          break;
        case "delete":
          d || (u(c.get(yn)), Dn(e) && u(c.get(Ja)));
          break;
        case "set":
          Dn(e) && u(c.get(yn));
          break;
      }
  }
  gl();
}
function xn(e) {
  const t = pt(e);
  return t === e ? t : (Qt(t, "iterate", _o), hs(e) ? t : t.map(Ss));
}
function pa(e) {
  return Qt(e = pt(e), "iterate", _o), e;
}
function nn(e, t) {
  return Qs(e) ? wn(e) ? Fn(Ss(t)) : Fn(t) : Ss(t);
}
const ru = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ua(this, Symbol.iterator, (e) => nn(this, e));
  },
  concat(...e) {
    return xn(this).concat(
      ...e.map((t) => st(t) ? xn(t) : t)
    );
  },
  entries() {
    return Ua(this, "entries", (e) => (e[1] = nn(this, e[1]), e));
  },
  every(e, t) {
    return Vs(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Vs(
      this,
      "filter",
      e,
      t,
      (n) => n.map((a) => nn(this, a)),
      arguments
    );
  },
  find(e, t) {
    return Vs(
      this,
      "find",
      e,
      t,
      (n) => nn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Vs(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Vs(
      this,
      "findLast",
      e,
      t,
      (n) => nn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Vs(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Vs(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Oa(this, "includes", e);
  },
  indexOf(...e) {
    return Oa(this, "indexOf", e);
  },
  join(e) {
    return xn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Oa(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Vs(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Qn(this, "pop");
  },
  push(...e) {
    return Qn(this, "push", e);
  },
  reduce(e, ...t) {
    return jl(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return jl(this, "reduceRight", e, t);
  },
  shift() {
    return Qn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Vs(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Qn(this, "splice", e);
  },
  toReversed() {
    return xn(this).toReversed();
  },
  toSorted(e) {
    return xn(this).toSorted(e);
  },
  toSpliced(...e) {
    return xn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Qn(this, "unshift", e);
  },
  values() {
    return Ua(this, "values", (e) => nn(this, e));
  }
};
function Ua(e, t, n) {
  const a = pa(e), l = a[t]();
  return a !== e && !hs(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = n(r.value)), r;
  }), l;
}
const cu = Array.prototype;
function Vs(e, t, n, a, l, r) {
  const c = pa(e), u = c !== e && !hs(e), d = c[t];
  if (d !== cu[t]) {
    const p = d.apply(e, r);
    return u ? Ss(p) : p;
  }
  let f = n;
  c !== e && (u ? f = function(p, w) {
    return n.call(this, nn(e, p), w, e);
  } : n.length > 2 && (f = function(p, w) {
    return n.call(this, p, w, e);
  }));
  const v = d.call(c, f, a);
  return u && l ? l(v) : v;
}
function jl(e, t, n, a) {
  const l = pa(e);
  let r = n;
  return l !== e && (hs(e) ? n.length > 3 && (r = function(c, u, d) {
    return n.call(this, c, u, d, e);
  }) : r = function(c, u, d) {
    return n.call(this, c, nn(e, u), d, e);
  }), l[t](r, ...a);
}
function Oa(e, t, n) {
  const a = pt(e);
  Qt(a, "iterate", _o);
  const l = a[t](...n);
  return (l === -1 || l === !1) && kl(n[0]) ? (n[0] = pt(n[0]), a[t](...n)) : l;
}
function Qn(e, t, n = []) {
  Ks(), pl();
  const a = pt(e)[t].apply(e, n);
  return gl(), Js(), a;
}
const uu = /* @__PURE__ */ ul("__proto__,__v_isRef,__isVue"), ir = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(xs)
);
function du(e) {
  xs(e) || (e = String(e));
  const t = pt(this);
  return Qt(t, "has", e), t.hasOwnProperty(e);
}
class rr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, a) {
    if (n === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !l;
    if (n === "__v_isReadonly")
      return l;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return a === (l ? r ? ku : mr : r ? dr : ur).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const c = st(t);
    if (!l) {
      let d;
      if (c && (d = ru[n]))
        return d;
      if (n === "hasOwnProperty")
        return du;
    }
    const u = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      es(t) ? t : a
    );
    if ((xs(n) ? ir.has(n) : uu(n)) || (l || Qt(t, "get", n), r))
      return u;
    if (es(u)) {
      const d = c && fl(n) ? u : u.value;
      return l && Ct(d) ? Xo(d) : d;
    }
    return Ct(u) ? l ? Xo(u) : Cn(u) : u;
  }
}
class cr extends rr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, a, l) {
    let r = t[n];
    const c = st(t) && fl(n);
    if (!this._isShallow) {
      const f = Qs(r);
      if (!hs(a) && !Qs(a) && (r = pt(r), a = pt(a)), !c && es(r) && !es(a))
        return f || (r.value = a), !0;
    }
    const u = c ? Number(n) < t.length : _t(t, n), d = Reflect.set(
      t,
      n,
      a,
      es(t) ? t : l
    );
    return t === pt(l) && (u ? ln(a, r) && Gs(t, "set", n, a) : Gs(t, "add", n, a)), d;
  }
  deleteProperty(t, n) {
    const a = _t(t, n);
    t[n];
    const l = Reflect.deleteProperty(t, n);
    return l && a && Gs(t, "delete", n, void 0), l;
  }
  has(t, n) {
    const a = Reflect.has(t, n);
    return (!xs(n) || !ir.has(n)) && Qt(t, "has", n), a;
  }
  ownKeys(t) {
    return Qt(
      t,
      "iterate",
      st(t) ? "length" : yn
    ), Reflect.ownKeys(t);
  }
}
class mu extends rr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const fu = /* @__PURE__ */ new cr(), vu = /* @__PURE__ */ new mu(), pu = /* @__PURE__ */ new cr(!0);
const Qa = (e) => e, Uo = (e) => Reflect.getPrototypeOf(e);
function gu(e, t, n) {
  return function(...a) {
    const l = this.__v_raw, r = pt(l), c = Dn(r), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, f = l[e](...a), v = n ? Qa : t ? Fn : Ss;
    return !t && Qt(
      r,
      "iterate",
      d ? Ja : yn
    ), {
      // iterator protocol
      next() {
        const { value: p, done: w } = f.next();
        return w ? { value: p, done: w } : {
          value: u ? [v(p[0]), v(p[1])] : v(p),
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
function Oo(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function hu(e, t) {
  const n = {
    get(l) {
      const r = this.__v_raw, c = pt(r), u = pt(l);
      e || (ln(l, u) && Qt(c, "get", l), Qt(c, "get", u));
      const { has: d } = Uo(c), f = t ? Qa : e ? Fn : Ss;
      if (d.call(c, l))
        return f(r.get(l));
      if (d.call(c, u))
        return f(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && Qt(pt(l), "iterate", yn), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = pt(r), u = pt(l);
      return e || (ln(l, u) && Qt(c, "has", l), Qt(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, d = pt(u), f = t ? Qa : e ? Fn : Ss;
      return !e && Qt(d, "iterate", yn), u.forEach((v, p) => l.call(r, f(v), f(p), c));
    }
  };
  return At(
    n,
    e ? {
      add: Oo("add"),
      set: Oo("set"),
      delete: Oo("delete"),
      clear: Oo("clear")
    } : {
      add(l) {
        !t && !hs(l) && !Qs(l) && (l = pt(l));
        const r = pt(this);
        return Uo(r).has.call(r, l) || (r.add(l), Gs(r, "add", l, l)), this;
      },
      set(l, r) {
        !t && !hs(r) && !Qs(r) && (r = pt(r));
        const c = pt(this), { has: u, get: d } = Uo(c);
        let f = u.call(c, l);
        f || (l = pt(l), f = u.call(c, l));
        const v = d.call(c, l);
        return c.set(l, r), f ? ln(r, v) && Gs(c, "set", l, r) : Gs(c, "add", l, r), this;
      },
      delete(l) {
        const r = pt(this), { has: c, get: u } = Uo(r);
        let d = c.call(r, l);
        d || (l = pt(l), d = c.call(r, l)), u && u.call(r, l);
        const f = r.delete(l);
        return d && Gs(r, "delete", l, void 0), f;
      },
      clear() {
        const l = pt(this), r = l.size !== 0, c = l.clear();
        return r && Gs(
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
    n[l] = gu(l, e, t);
  }), n;
}
function wl(e, t) {
  const n = hu(e, t);
  return (a, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    _t(n, l) && l in a ? n : a,
    l,
    r
  );
}
const yu = {
  get: /* @__PURE__ */ wl(!1, !1)
}, wu = {
  get: /* @__PURE__ */ wl(!1, !0)
}, _u = {
  get: /* @__PURE__ */ wl(!0, !1)
};
const ur = /* @__PURE__ */ new WeakMap(), dr = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), ku = /* @__PURE__ */ new WeakMap();
function bu(e) {
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
function $u(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : bu(qc(e));
}
function Cn(e) {
  return Qs(e) ? e : _l(
    e,
    !1,
    fu,
    yu,
    ur
  );
}
function Cu(e) {
  return _l(
    e,
    !1,
    pu,
    wu,
    dr
  );
}
function Xo(e) {
  return _l(
    e,
    !0,
    vu,
    _u,
    mr
  );
}
function _l(e, t, n, a, l) {
  if (!Ct(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = $u(e);
  if (r === 0)
    return e;
  const c = l.get(e);
  if (c)
    return c;
  const u = new Proxy(
    e,
    r === 2 ? a : n
  );
  return l.set(e, u), u;
}
function wn(e) {
  return Qs(e) ? wn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Qs(e) {
  return !!(e && e.__v_isReadonly);
}
function hs(e) {
  return !!(e && e.__v_isShallow);
}
function kl(e) {
  return e ? !!e.__v_raw : !1;
}
function pt(e) {
  const t = e && e.__v_raw;
  return t ? pt(t) : e;
}
function xu(e) {
  return !_t(e, "__v_skip") && Object.isExtensible(e) && Ji(e, "__v_skip", !0), e;
}
const Ss = (e) => Ct(e) ? Cn(e) : e, Fn = (e) => Ct(e) ? Xo(e) : e;
function es(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function _(e) {
  return Su(e, !1);
}
function Su(e, t) {
  return es(e) ? e : new Iu(e, t);
}
class Iu {
  constructor(t, n) {
    this.dep = new yl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : pt(t), this._value = n ? t : Ss(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, a = this.__v_isShallow || hs(t) || Qs(t);
    t = a ? t : pt(t), ln(t, n) && (this._rawValue = t, this._value = a ? t : Ss(t), this.dep.trigger());
  }
}
function at(e) {
  return es(e) ? e.value : e;
}
const Eu = {
  get: (e, t, n) => t === "__v_raw" ? e : at(Reflect.get(e, t, n)),
  set: (e, t, n, a) => {
    const l = e[t];
    return es(l) && !es(n) ? (l.value = n, !0) : Reflect.set(e, t, n, a);
  }
};
function fr(e) {
  return wn(e) ? e : new Proxy(e, Eu);
}
class Tu {
  constructor(t, n, a) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new yl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = wo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Et !== this)
      return tr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return or(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Mu(e, t, n = !1) {
  let a, l;
  return ot(e) ? a = e : (a = e.get, l = e.set), new Tu(a, l, n);
}
const Ao = {}, Zo = /* @__PURE__ */ new WeakMap();
let gn;
function Pu(e, t = !1, n = gn) {
  if (n) {
    let a = Zo.get(n);
    a || Zo.set(n, a = []), a.push(e);
  }
}
function Ru(e, t, n = St) {
  const { immediate: a, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = n, f = (P) => l ? P : hs(P) || l === !1 || l === 0 ? js(P, 1) : js(P);
  let v, p, w, g, k = !1, $ = !1;
  if (es(e) ? (p = () => e.value, k = hs(e)) : wn(e) ? (p = () => f(e), k = !0) : st(e) ? ($ = !0, k = e.some((P) => wn(P) || hs(P)), p = () => e.map((P) => {
    if (es(P))
      return P.value;
    if (wn(P))
      return f(P);
    if (ot(P))
      return d ? d(P, 2) : P();
  })) : ot(e) ? t ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      Ks();
      try {
        w();
      } finally {
        Js();
      }
    }
    const P = gn;
    gn = v;
    try {
      return d ? d(e, 3, [g]) : e(g);
    } finally {
      gn = P;
    }
  } : p = As, t && l) {
    const P = p, D = l === !0 ? 1 / 0 : l;
    p = () => js(P(), D);
  }
  const S = au(), C = () => {
    v.stop(), S && S.active && ml(S.effects, v);
  };
  if (r && t) {
    const P = t;
    t = (...D) => {
      P(...D), C();
    };
  }
  let I = $ ? new Array(e.length).fill(Ao) : Ao;
  const E = (P) => {
    if (!(!(v.flags & 1) || !v.dirty && !P))
      if (t) {
        const D = v.run();
        if (l || k || ($ ? D.some((A, V) => ln(A, I[V])) : ln(D, I))) {
          w && w();
          const A = gn;
          gn = v;
          try {
            const V = [
              D,
              // pass undefined as the old value when it's changed for the first time
              I === Ao ? void 0 : $ && I[0] === Ao ? [] : I,
              g
            ];
            I = D, d ? d(t, 3, V) : (
              // @ts-expect-error
              t(...V)
            );
          } finally {
            gn = A;
          }
        }
      } else
        v.run();
  };
  return u && u(E), v = new Zi(p), v.scheduler = c ? () => c(E, !1) : E, g = (P) => Pu(P, !1, v), w = v.onStop = () => {
    const P = Zo.get(v);
    if (P) {
      if (d)
        d(P, 4);
      else
        for (const D of P) D();
      Zo.delete(v);
    }
  }, t ? a ? E(!0) : I = v.run() : c ? c(E.bind(null, !0), !0) : v.run(), C.pause = v.pause.bind(v), C.resume = v.resume.bind(v), C.stop = C, C;
}
function js(e, t = 1 / 0, n) {
  if (t <= 0 || !Ct(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, es(e))
    js(e.value, t, n);
  else if (st(e))
    for (let a = 0; a < e.length; a++)
      js(e[a], t, n);
  else if (Wn(e) || Dn(e))
    e.forEach((a) => {
      js(a, t, n);
    });
  else if (Ki(e)) {
    for (const a in e)
      js(e[a], t, n);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && js(e[a], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Eo(e, t, n, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    ga(l, t, n);
  }
}
function Is(e, t, n, a) {
  if (ot(e)) {
    const l = Eo(e, t, n, a);
    return l && Hi(l) && l.catch((r) => {
      ga(r, t, n);
    }), l;
  }
  if (st(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(Is(e[r], t, n, a));
    return l;
  }
}
function ga(e, t, n, a = !0) {
  const l = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = t && t.appContext.config || St;
  if (t) {
    let u = t.parent;
    const d = t.proxy, f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; u; ) {
      const v = u.ec;
      if (v) {
        for (let p = 0; p < v.length; p++)
          if (v[p](e, d, f) === !1)
            return;
      }
      u = u.parent;
    }
    if (r) {
      Ks(), Eo(r, null, 10, [
        e,
        d,
        f
      ]), Js();
      return;
    }
  }
  Du(e, n, l, a, c);
}
function Du(e, t, n, a = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const os = [];
let Ds = -1;
const Nn = [];
let on = null, En = 0;
const vr = /* @__PURE__ */ Promise.resolve();
let ea = null;
function Gt(e) {
  const t = ea || vr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Nu(e) {
  let t = Ds + 1, n = os.length;
  for (; t < n; ) {
    const a = t + n >>> 1, l = os[a], r = ko(l);
    r < e || r === e && l.flags & 2 ? t = a + 1 : n = a;
  }
  return t;
}
function bl(e) {
  if (!(e.flags & 1)) {
    const t = ko(e), n = os[os.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ko(n) ? os.push(e) : os.splice(Nu(t), 0, e), e.flags |= 1, pr();
  }
}
function pr() {
  ea || (ea = vr.then(hr));
}
function Lu(e) {
  st(e) ? Nn.push(...e) : on && e.id === -1 ? on.splice(En + 1, 0, e) : e.flags & 1 || (Nn.push(e), e.flags |= 1), pr();
}
function Hl(e, t, n = Ds + 1) {
  for (; n < os.length; n++) {
    const a = os[n];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      os.splice(n, 1), n--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function gr(e) {
  if (Nn.length) {
    const t = [...new Set(Nn)].sort(
      (n, a) => ko(n) - ko(a)
    );
    if (Nn.length = 0, on) {
      on.push(...t);
      return;
    }
    for (on = t, En = 0; En < on.length; En++) {
      const n = on[En];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    on = null, En = 0;
  }
}
const ko = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function hr(e) {
  try {
    for (Ds = 0; Ds < os.length; Ds++) {
      const t = os[Ds];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Eo(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ds < os.length; Ds++) {
      const t = os[Ds];
      t && (t.flags &= -2);
    }
    Ds = -1, os.length = 0, gr(), ea = null, (os.length || Nn.length) && hr();
  }
}
let jt = null, yr = null;
function ta(e) {
  const t = jt;
  return jt = e, yr = e && e.type.__scopeId || null, t;
}
function h(e, t = jt, n) {
  if (!t || e._n)
    return e;
  const a = (...l) => {
    a._d && oa(-1);
    const r = ta(t);
    let c;
    try {
      c = e(...l);
    } finally {
      ta(r), a._d && oa(1);
    }
    return c;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function Ot(e, t) {
  if (jt === null)
    return e;
  const n = ka(jt), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [r, c, u, d = St] = t[l];
    r && (ot(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && js(c), a.push({
      dir: r,
      instance: n,
      value: c,
      oldValue: void 0,
      arg: u,
      modifiers: d
    }));
  }
  return e;
}
function mn(e, t, n, a) {
  const l = e.dirs, r = t && t.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    r && (u.oldValue = r[c].value);
    let d = u.dir[a];
    d && (Ks(), Is(d, n, 8, [
      e.el,
      u,
      e,
      t
    ]), Js());
  }
}
const wr = Symbol("_vte"), _r = (e) => e.__isTeleport, mo = (e) => e && (e.disabled || e.disabled === ""), ql = (e) => e && (e.defer || e.defer === ""), Kl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Jl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ya = (e, t) => {
  const n = e && e.to;
  return Dt(n) ? t ? t(n) : null : n;
}, kr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, a, l, r, c, u, d, f) {
    const {
      mc: v,
      pc: p,
      pbc: w,
      o: { insert: g, querySelector: k, createText: $, createComment: S }
    } = f, C = mo(t.props);
    let { shapeFlag: I, children: E, dynamicChildren: P } = t;
    if (e == null) {
      const D = t.el = $(""), A = t.anchor = $("");
      g(D, n, a), g(A, n, a);
      const V = (j, le) => {
        I & 16 && v(
          E,
          j,
          le,
          l,
          r,
          c,
          u,
          d
        );
      }, N = () => {
        const j = t.target = Ya(t.props, k), le = br(j, t, $, g);
        j && (c !== "svg" && Kl(j) ? c = "svg" : c !== "mathml" && Jl(j) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(j), C || (V(j, le), Go(t, !1)));
      };
      C && (V(n, A), Go(t, !0)), ql(t.props) ? (t.el.__isMounted = !1, ss(() => {
        N(), delete t.el.__isMounted;
      }, r)) : N();
    } else {
      if (ql(t.props) && e.el.__isMounted === !1) {
        ss(() => {
          kr.process(
            e,
            t,
            n,
            a,
            l,
            r,
            c,
            u,
            d,
            f
          );
        }, r);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const D = t.anchor = e.anchor, A = t.target = e.target, V = t.targetAnchor = e.targetAnchor, N = mo(e.props), j = N ? n : A, le = N ? D : V;
      if (c === "svg" || Kl(A) ? c = "svg" : (c === "mathml" || Jl(A)) && (c = "mathml"), P ? (w(
        e.dynamicChildren,
        P,
        j,
        l,
        r,
        c,
        u
      ), Il(e, t, !0)) : d || p(
        e,
        t,
        j,
        le,
        l,
        r,
        c,
        u,
        !1
      ), C)
        N ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : zo(
          t,
          n,
          D,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const ce = t.target = Ya(
          t.props,
          k
        );
        ce && zo(
          t,
          ce,
          null,
          f,
          0
        );
      } else N && zo(
        t,
        A,
        V,
        f,
        1
      );
      Go(t, C);
    }
  },
  remove(e, t, n, { um: a, o: { remove: l } }, r) {
    const {
      shapeFlag: c,
      children: u,
      anchor: d,
      targetStart: f,
      targetAnchor: v,
      target: p,
      props: w
    } = e;
    if (p && (l(f), l(v)), r && l(d), c & 16) {
      const g = r || !mo(w);
      for (let k = 0; k < u.length; k++) {
        const $ = u[k];
        a(
          $,
          t,
          n,
          g,
          !!$.dynamicChildren
        );
      }
    }
  },
  move: zo,
  hydrate: Uu
};
function zo(e, t, n, { o: { insert: a }, m: l }, r = 2) {
  r === 0 && a(e.targetAnchor, t, n);
  const { el: c, anchor: u, shapeFlag: d, children: f, props: v } = e, p = r === 2;
  if (p && a(c, t, n), (!p || mo(v)) && d & 16)
    for (let w = 0; w < f.length; w++)
      l(
        f[w],
        t,
        n,
        2
      );
  p && a(u, t, n);
}
function Uu(e, t, n, a, l, r, {
  o: { nextSibling: c, parentNode: u, querySelector: d, insert: f, createText: v }
}, p) {
  function w($, S, C, I) {
    S.anchor = p(
      c($),
      S,
      u($),
      n,
      a,
      l,
      r
    ), S.targetStart = C, S.targetAnchor = I;
  }
  const g = t.target = Ya(
    t.props,
    d
  ), k = mo(t.props);
  if (g) {
    const $ = g._lpa || g.firstChild;
    if (t.shapeFlag & 16)
      if (k)
        w(
          e,
          t,
          $,
          $ && c($)
        );
      else {
        t.anchor = c(e);
        let S = $;
        for (; S; ) {
          if (S && S.nodeType === 8) {
            if (S.data === "teleport start anchor")
              t.targetStart = S;
            else if (S.data === "teleport anchor") {
              t.targetAnchor = S, g._lpa = t.targetAnchor && c(t.targetAnchor);
              break;
            }
          }
          S = c(S);
        }
        t.targetAnchor || br(g, t, v, f), p(
          $ && c($),
          t,
          g,
          n,
          a,
          l,
          r
        );
      }
    Go(t, k);
  } else k && t.shapeFlag & 16 && w(e, t, e, c(e));
  return t.anchor && c(t.anchor);
}
const as = kr;
function Go(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let a, l;
    for (t ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", n.uid), a = a.nextSibling;
    n.ut();
  }
}
function br(e, t, n, a) {
  const l = t.targetStart = n(""), r = t.targetAnchor = n("");
  return l[wr] = r, e && (a(l, e), a(r, e)), r;
}
const Ws = Symbol("_leaveCb"), Fo = Symbol("_enterCb");
function $r() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ut(() => {
    e.isMounted = !0;
  }), To(() => {
    e.isUnmounting = !0;
  }), e;
}
const ps = [Function, Array], Cr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ps,
  onEnter: ps,
  onAfterEnter: ps,
  onEnterCancelled: ps,
  // leave
  onBeforeLeave: ps,
  onLeave: ps,
  onAfterLeave: ps,
  onLeaveCancelled: ps,
  // appear
  onBeforeAppear: ps,
  onAppear: ps,
  onAfterAppear: ps,
  onAppearCancelled: ps
}, xr = (e) => {
  const t = e.subTree;
  return t.component ? xr(t.component) : t;
}, Ou = {
  name: "BaseTransition",
  props: Cr,
  setup(e, { slots: t }) {
    const n = Tl(), a = $r();
    return () => {
      const l = t.default && $l(t.default(), !0);
      if (!l || !l.length)
        return;
      const r = Sr(l), c = pt(e), { mode: u } = c;
      if (a.isLeaving)
        return Aa(r);
      const d = Ql(r);
      if (!d)
        return Aa(r);
      let f = bo(
        d,
        c,
        a,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (p) => f = p
      );
      d.type !== Xt && bn(d, f);
      let v = n.subTree && Ql(n.subTree);
      if (v && v.type !== Xt && !hn(v, d) && xr(n).type !== Xt) {
        let p = bo(
          v,
          c,
          a,
          n
        );
        if (bn(v, p), u === "out-in" && d.type !== Xt)
          return a.isLeaving = !0, p.afterLeave = () => {
            a.isLeaving = !1, n.job.flags & 8 || n.update(), delete p.afterLeave, v = void 0;
          }, Aa(r);
        u === "in-out" && d.type !== Xt ? p.delayLeave = (w, g, k) => {
          const $ = Ir(
            a,
            v
          );
          $[String(v.key)] = v, w[Ws] = () => {
            g(), w[Ws] = void 0, delete f.delayedLeave, v = void 0;
          }, f.delayedLeave = () => {
            k(), delete f.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return r;
    };
  }
};
function Sr(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Xt) {
        t = n;
        break;
      }
  }
  return t;
}
const Au = Ou;
function Ir(e, t) {
  const { leavingVNodes: n } = e;
  let a = n.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), n.set(t.type, a)), a;
}
function bo(e, t, n, a, l) {
  const {
    appear: r,
    mode: c,
    persisted: u = !1,
    onBeforeEnter: d,
    onEnter: f,
    onAfterEnter: v,
    onEnterCancelled: p,
    onBeforeLeave: w,
    onLeave: g,
    onAfterLeave: k,
    onLeaveCancelled: $,
    onBeforeAppear: S,
    onAppear: C,
    onAfterAppear: I,
    onAppearCancelled: E
  } = t, P = String(e.key), D = Ir(n, e), A = (j, le) => {
    j && Is(
      j,
      a,
      9,
      le
    );
  }, V = (j, le) => {
    const ce = le[1];
    A(j, le), st(j) ? j.every((Q) => Q.length <= 1) && ce() : j.length <= 1 && ce();
  }, N = {
    mode: c,
    persisted: u,
    beforeEnter(j) {
      let le = d;
      if (!n.isMounted)
        if (r)
          le = S || d;
        else
          return;
      j[Ws] && j[Ws](
        !0
        /* cancelled */
      );
      const ce = D[P];
      ce && hn(e, ce) && ce.el[Ws] && ce.el[Ws](), A(le, [j]);
    },
    enter(j) {
      let le = f, ce = v, Q = p;
      if (!n.isMounted)
        if (r)
          le = C || f, ce = I || v, Q = E || p;
        else
          return;
      let ve = !1;
      const J = j[Fo] = (L) => {
        ve || (ve = !0, L ? A(Q, [j]) : A(ce, [j]), N.delayedLeave && N.delayedLeave(), j[Fo] = void 0);
      };
      le ? V(le, [j, J]) : J();
    },
    leave(j, le) {
      const ce = String(e.key);
      if (j[Fo] && j[Fo](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return le();
      A(w, [j]);
      let Q = !1;
      const ve = j[Ws] = (J) => {
        Q || (Q = !0, le(), J ? A($, [j]) : A(k, [j]), j[Ws] = void 0, D[ce] === e && delete D[ce]);
      };
      D[ce] = e, g ? V(g, [j, ve]) : ve();
    },
    clone(j) {
      const le = bo(
        j,
        t,
        n,
        a,
        l
      );
      return l && l(le), le;
    }
  };
  return N;
}
function Aa(e) {
  if (ha(e))
    return e = rn(e), e.children = null, e;
}
function Ql(e) {
  if (!ha(e))
    return _r(e.type) && e.children ? Sr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ot(n.default))
      return n.default();
  }
}
function bn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, bn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function $l(e, t = !1, n) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = n == null ? c.key : String(n) + String(c.key != null ? c.key : r);
    c.type === B ? (c.patchFlag & 128 && l++, a = a.concat(
      $l(c.children, t, u)
    )) : (t || c.type !== Xt) && a.push(u != null ? rn(c, { key: u }) : c);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function Ee(e, t) {
  return ot(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    At({ name: e.name }, t, { setup: e })
  ) : e;
}
function Er(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const sa = /* @__PURE__ */ new WeakMap();
function fo(e, t, n, a, l = !1) {
  if (st(e)) {
    e.forEach(
      (k, $) => fo(
        k,
        t && (st(t) ? t[$] : t),
        n,
        a,
        l
      )
    );
    return;
  }
  if (Ln(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && fo(e, t, n, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? ka(a.component) : a.el, c = l ? null : r, { i: u, r: d } = e, f = t && t.r, v = u.refs === St ? u.refs = {} : u.refs, p = u.setupState, w = pt(p), g = p === St ? ji : (k) => _t(w, k);
  if (f != null && f !== d) {
    if (Yl(t), Dt(f))
      v[f] = null, g(f) && (p[f] = null);
    else if (es(f)) {
      f.value = null;
      const k = t;
      k.k && (v[k.k] = null);
    }
  }
  if (ot(d))
    Eo(d, u, 12, [c, v]);
  else {
    const k = Dt(d), $ = es(d);
    if (k || $) {
      const S = () => {
        if (e.f) {
          const C = k ? g(d) ? p[d] : v[d] : d.value;
          if (l)
            st(C) && ml(C, r);
          else if (st(C))
            C.includes(r) || C.push(r);
          else if (k)
            v[d] = [r], g(d) && (p[d] = v[d]);
          else {
            const I = [r];
            d.value = I, e.k && (v[e.k] = I);
          }
        } else k ? (v[d] = c, g(d) && (p[d] = c)) : $ && (d.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const C = () => {
          S(), sa.delete(e);
        };
        C.id = -1, sa.set(e, C), ss(C, n);
      } else
        Yl(e), S();
    }
  }
}
function Yl(e) {
  const t = sa.get(e);
  t && (t.flags |= 8, sa.delete(e));
}
va().requestIdleCallback;
va().cancelIdleCallback;
const Ln = (e) => !!e.type.__asyncLoader, ha = (e) => e.type.__isKeepAlive;
function zu(e, t) {
  Tr(e, "a", t);
}
function Fu(e, t) {
  Tr(e, "da", t);
}
function Tr(e, t, n = Zt) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = n;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (ya(t, a, n), n) {
    let l = n.parent;
    for (; l && l.parent; )
      ha(l.parent.vnode) && Vu(a, t, n, l), l = l.parent;
  }
}
function Vu(e, t, n, a) {
  const l = ya(
    t,
    e,
    a,
    !0
    /* prepend */
  );
  Gn(() => {
    ml(a[t], l);
  }, n);
}
function ya(e, t, n = Zt, a = !1) {
  if (n) {
    const l = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...c) => {
      Ks();
      const u = Mo(n), d = Is(t, n, e, c);
      return u(), Js(), d;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const Ys = (e) => (t, n = Zt) => {
  (!xo || e === "sp") && ya(e, (...a) => t(...a), n);
}, Bu = Ys("bm"), ut = Ys("m"), Wu = Ys(
  "bu"
), Mr = Ys("u"), To = Ys(
  "bum"
), Gn = Ys("um"), Gu = Ys(
  "sp"
), ju = Ys("rtg"), Hu = Ys("rtc");
function qu(e, t = Zt) {
  ya("ec", e, t);
}
const Ku = "components", Pr = Symbol.for("v-ndc");
function Cl(e) {
  return Dt(e) ? Ju(Ku, e, !1) || e : e || Pr;
}
function Ju(e, t, n = !0, a = !1) {
  const l = jt || Zt;
  if (l) {
    const r = l.type;
    {
      const u = Od(
        r,
        !1
      );
      if (u && (u === t || u === ws(t) || u === ma(ws(t))))
        return r;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      Xl(l[e] || r[e], t) || // global registration
      Xl(l.appContext[e], t)
    );
    return !c && a ? r : c;
  }
}
function Xl(e, t) {
  return e && (e[t] || e[ws(t)] || e[ma(ws(t))]);
}
function ye(e, t, n, a) {
  let l;
  const r = n, c = st(e);
  if (c || Dt(e)) {
    const u = c && wn(e);
    let d = !1, f = !1;
    u && (d = !hs(e), f = Qs(e), e = pa(e)), l = new Array(e.length);
    for (let v = 0, p = e.length; v < p; v++)
      l[v] = t(
        d ? f ? Fn(Ss(e[v])) : Ss(e[v]) : e[v],
        v,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = t(u + 1, u, void 0, r);
  } else if (Ct(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (u, d) => t(u, d, void 0, r)
      );
    else {
      const u = Object.keys(e);
      l = new Array(u.length);
      for (let d = 0, f = u.length; d < f; d++) {
        const v = u[d];
        l[d] = t(e[v], v, d, r);
      }
    }
  else
    l = [];
  return l;
}
function rs(e, t) {
  for (let n = 0; n < t.length; n++) {
    const a = t[n];
    if (st(a))
      for (let l = 0; l < a.length; l++)
        e[a[l].name] = a[l].fn;
    else a && (e[a.name] = a.key ? (...l) => {
      const r = a.fn(...l);
      return r && (r.key = a.key), r;
    } : a.fn);
  }
  return e;
}
function ct(e, t, n = {}, a, l) {
  if (jt.ce || jt.parent && Ln(jt.parent) && jt.parent.ce) {
    const f = Object.keys(n).length > 0;
    return t !== "default" && (n.name = t), o(), R(
      B,
      null,
      [b("slot", n, a && a())],
      f ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), o();
  const c = r && Rr(r(n)), u = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = R(
    B,
    {
      key: (u && !xs(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!c && a ? "_fb" : "")
    },
    c || (a ? a() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function Rr(e) {
  return e.some((t) => Co(t) ? !(t.type === Xt || t.type === B && !Rr(t.children)) : !0) ? e : null;
}
const Xa = (e) => e ? Yr(e) ? ka(e) : Xa(e.parent) : null, vo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ At(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Xa(e.parent),
    $root: (e) => Xa(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Nr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      bl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Gt.bind(e.proxy)),
    $watch: (e) => id.bind(e)
  })
), za = (e, t) => e !== St && !e.__isScriptSetup && _t(e, t), Qu = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: a, data: l, props: r, accessCache: c, type: u, appContext: d } = e;
    if (t[0] !== "$") {
      const w = c[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return a[t];
          case 2:
            return l[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (za(a, t))
          return c[t] = 1, a[t];
        if (l !== St && _t(l, t))
          return c[t] = 2, l[t];
        if (_t(r, t))
          return c[t] = 3, r[t];
        if (n !== St && _t(n, t))
          return c[t] = 4, n[t];
        Za && (c[t] = 0);
      }
    }
    const f = vo[t];
    let v, p;
    if (f)
      return t === "$attrs" && Qt(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (v = u.__cssModules) && (v = v[t])
    )
      return v;
    if (n !== St && _t(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      p = d.config.globalProperties, _t(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: a, setupState: l, ctx: r } = e;
    return za(l, t) ? (l[t] = n, !0) : a !== St && _t(a, t) ? (a[t] = n, !0) : _t(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: a, appContext: l, props: r, type: c }
  }, u) {
    let d;
    return !!(n[u] || e !== St && u[0] !== "$" && _t(e, u) || za(t, u) || _t(r, u) || _t(a, u) || _t(vo, u) || _t(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : _t(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Zl(e) {
  return st(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Za = !0;
function Yu(e) {
  const t = Nr(e), n = e.proxy, a = e.ctx;
  Za = !1, t.beforeCreate && ei(t.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: r,
    methods: c,
    watch: u,
    provide: d,
    inject: f,
    // lifecycle
    created: v,
    beforeMount: p,
    mounted: w,
    beforeUpdate: g,
    updated: k,
    activated: $,
    deactivated: S,
    beforeDestroy: C,
    beforeUnmount: I,
    destroyed: E,
    unmounted: P,
    render: D,
    renderTracked: A,
    renderTriggered: V,
    errorCaptured: N,
    serverPrefetch: j,
    // public API
    expose: le,
    inheritAttrs: ce,
    // assets
    components: Q,
    directives: ve,
    filters: J
  } = t;
  if (f && Xu(f, a, null), c)
    for (const ue in c) {
      const te = c[ue];
      ot(te) && (a[ue] = te.bind(n));
    }
  if (l) {
    const ue = l.call(n, n);
    Ct(ue) && (e.data = Cn(ue));
  }
  if (Za = !0, r)
    for (const ue in r) {
      const te = r[ue], me = ot(te) ? te.bind(n, n) : ot(te.get) ? te.get.bind(n, n) : As, de = !ot(te) && ot(te.set) ? te.set.bind(n) : As, W = M({
        get: me,
        set: de
      });
      Object.defineProperty(a, ue, {
        enumerable: !0,
        configurable: !0,
        get: () => W.value,
        set: (se) => W.value = se
      });
    }
  if (u)
    for (const ue in u)
      Dr(u[ue], a, n, ue);
  if (d) {
    const ue = ot(d) ? d.call(n) : d;
    Reflect.ownKeys(ue).forEach((te) => {
      od(te, ue[te]);
    });
  }
  v && ei(v, e, "c");
  function F(ue, te) {
    st(te) ? te.forEach((me) => ue(me.bind(n))) : te && ue(te.bind(n));
  }
  if (F(Bu, p), F(ut, w), F(Wu, g), F(Mr, k), F(zu, $), F(Fu, S), F(qu, N), F(Hu, A), F(ju, V), F(To, I), F(Gn, P), F(Gu, j), st(le))
    if (le.length) {
      const ue = e.exposed || (e.exposed = {});
      le.forEach((te) => {
        Object.defineProperty(ue, te, {
          get: () => n[te],
          set: (me) => n[te] = me,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  D && e.render === As && (e.render = D), ce != null && (e.inheritAttrs = ce), Q && (e.components = Q), ve && (e.directives = ve), j && Er(e);
}
function Xu(e, t, n = As) {
  st(e) && (e = el(e));
  for (const a in e) {
    const l = e[a];
    let r;
    Ct(l) ? "default" in l ? r = jo(
      l.from || a,
      l.default,
      !0
    ) : r = jo(l.from || a) : r = jo(l), es(r) ? Object.defineProperty(t, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : t[a] = r;
  }
}
function ei(e, t, n) {
  Is(
    st(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Dr(e, t, n, a) {
  let l = a.includes(".") ? Or(n, a) : () => n[a];
  if (Dt(e)) {
    const r = t[e];
    ot(r) && $t(l, r);
  } else if (ot(e))
    $t(l, e.bind(n));
  else if (Ct(e))
    if (st(e))
      e.forEach((r) => Dr(r, t, n, a));
    else {
      const r = ot(e.handler) ? e.handler.bind(n) : t[e.handler];
      ot(r) && $t(l, r, e);
    }
}
function Nr(e) {
  const t = e.type, { mixins: n, extends: a } = t, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(t);
  let d;
  return u ? d = u : !l.length && !n && !a ? d = t : (d = {}, l.length && l.forEach(
    (f) => na(d, f, c, !0)
  ), na(d, t, c)), Ct(t) && r.set(t, d), d;
}
function na(e, t, n, a = !1) {
  const { mixins: l, extends: r } = t;
  r && na(e, r, n, !0), l && l.forEach(
    (c) => na(e, c, n, !0)
  );
  for (const c in t)
    if (!(a && c === "expose")) {
      const u = Zu[c] || n && n[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const Zu = {
  data: ti,
  props: si,
  emits: si,
  // objects
  methods: ao,
  computed: ao,
  // lifecycle
  beforeCreate: ts,
  created: ts,
  beforeMount: ts,
  mounted: ts,
  beforeUpdate: ts,
  updated: ts,
  beforeDestroy: ts,
  beforeUnmount: ts,
  destroyed: ts,
  unmounted: ts,
  activated: ts,
  deactivated: ts,
  errorCaptured: ts,
  serverPrefetch: ts,
  // assets
  components: ao,
  directives: ao,
  // watch
  watch: td,
  // provide / inject
  provide: ti,
  inject: ed
};
function ti(e, t) {
  return t ? e ? function() {
    return At(
      ot(e) ? e.call(this, this) : e,
      ot(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ed(e, t) {
  return ao(el(e), el(t));
}
function el(e) {
  if (st(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ts(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ao(e, t) {
  return e ? At(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function si(e, t) {
  return e ? st(e) && st(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : At(
    /* @__PURE__ */ Object.create(null),
    Zl(e),
    Zl(t ?? {})
  ) : t;
}
function td(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = At(/* @__PURE__ */ Object.create(null), e);
  for (const a in t)
    n[a] = ts(e[a], t[a]);
  return n;
}
function Lr() {
  return {
    app: null,
    config: {
      isNativeTag: ji,
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
let sd = 0;
function nd(e, t) {
  return function(a, l = null) {
    ot(a) || (a = At({}, a)), l != null && !Ct(l) && (l = null);
    const r = Lr(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const f = r.app = {
      _uid: sd++,
      _component: a,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: zd,
      get config() {
        return r.config;
      },
      set config(v) {
      },
      use(v, ...p) {
        return c.has(v) || (v && ot(v.install) ? (c.add(v), v.install(f, ...p)) : ot(v) && (c.add(v), v(f, ...p))), f;
      },
      mixin(v) {
        return r.mixins.includes(v) || r.mixins.push(v), f;
      },
      component(v, p) {
        return p ? (r.components[v] = p, f) : r.components[v];
      },
      directive(v, p) {
        return p ? (r.directives[v] = p, f) : r.directives[v];
      },
      mount(v, p, w) {
        if (!d) {
          const g = f._ceVNode || b(a, l);
          return g.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(g, v, w), d = !0, f._container = v, v.__vue_app__ = f, ka(g.component);
        }
      },
      onUnmount(v) {
        u.push(v);
      },
      unmount() {
        d && (Is(
          u,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(v, p) {
        return r.provides[v] = p, f;
      },
      runWithContext(v) {
        const p = Un;
        Un = f;
        try {
          return v();
        } finally {
          Un = p;
        }
      }
    };
    return f;
  };
}
let Un = null;
function od(e, t) {
  if (Zt) {
    let n = Zt.provides;
    const a = Zt.parent && Zt.parent.provides;
    a === n && (n = Zt.provides = Object.create(a)), n[e] = t;
  }
}
function jo(e, t, n = !1) {
  const a = Tl();
  if (a || Un) {
    let l = Un ? Un._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return n && ot(t) ? t.call(a && a.proxy) : t;
  }
}
const ad = Symbol.for("v-scx"), ld = () => jo(ad);
function $t(e, t, n) {
  return Ur(e, t, n);
}
function Ur(e, t, n = St) {
  const { immediate: a, deep: l, flush: r, once: c } = n, u = At({}, n), d = t && a || !t && r !== "post";
  let f;
  if (xo) {
    if (r === "sync") {
      const g = ld();
      f = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!d) {
      const g = () => {
      };
      return g.stop = As, g.resume = As, g.pause = As, g;
    }
  }
  const v = Zt;
  u.call = (g, k, $) => Is(g, v, k, $);
  let p = !1;
  r === "post" ? u.scheduler = (g) => {
    ss(g, v && v.suspense);
  } : r !== "sync" && (p = !0, u.scheduler = (g, k) => {
    k ? g() : bl(g);
  }), u.augmentJob = (g) => {
    t && (g.flags |= 4), p && (g.flags |= 2, v && (g.id = v.uid, g.i = v));
  };
  const w = Ru(e, t, u);
  return xo && (f ? f.push(w) : d && w()), w;
}
function id(e, t, n) {
  const a = this.proxy, l = Dt(e) ? e.includes(".") ? Or(a, e) : () => a[e] : e.bind(a, a);
  let r;
  ot(t) ? r = t : (r = t.handler, n = t);
  const c = Mo(this), u = Ur(l, r.bind(a), n);
  return c(), u;
}
function Or(e, t) {
  const n = t.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < n.length && a; l++)
      a = a[n[l]];
    return a;
  };
}
const rd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ws(t)}Modifiers`] || e[`${un(t)}Modifiers`];
function cd(e, t, ...n) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || St;
  let l = n;
  const r = t.startsWith("update:"), c = r && rd(a, t.slice(7));
  c && (c.trim && (l = n.map((v) => Dt(v) ? v.trim() : v)), c.number && (l = n.map(fa)));
  let u, d = a[u = Da(t)] || // also try camelCase event handler (#2249)
  a[u = Da(ws(t))];
  !d && r && (d = a[u = Da(un(t))]), d && Is(
    d,
    e,
    6,
    l
  );
  const f = a[u + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, Is(
      f,
      e,
      6,
      l
    );
  }
}
const ud = /* @__PURE__ */ new WeakMap();
function Ar(e, t, n = !1) {
  const a = n ? ud : t.emitsCache, l = a.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let c = {}, u = !1;
  if (!ot(e)) {
    const d = (f) => {
      const v = Ar(f, t, !0);
      v && (u = !0, At(c, v));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (Ct(e) && a.set(e, null), null) : (st(r) ? r.forEach((d) => c[d] = null) : At(c, r), Ct(e) && a.set(e, c), c);
}
function wa(e, t) {
  return !e || !ua(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), _t(e, t[0].toLowerCase() + t.slice(1)) || _t(e, un(t)) || _t(e, t));
}
function ni(e) {
  const {
    type: t,
    vnode: n,
    proxy: a,
    withProxy: l,
    propsOptions: [r],
    slots: c,
    attrs: u,
    emit: d,
    render: f,
    renderCache: v,
    props: p,
    data: w,
    setupState: g,
    ctx: k,
    inheritAttrs: $
  } = e, S = ta(e);
  let C, I;
  try {
    if (n.shapeFlag & 4) {
      const P = l || a, D = P;
      C = Us(
        f.call(
          D,
          P,
          v,
          p,
          g,
          w,
          k
        )
      ), I = u;
    } else {
      const P = t;
      C = Us(
        P.length > 1 ? P(
          p,
          { attrs: u, slots: c, emit: d }
        ) : P(
          p,
          null
        )
      ), I = t.props ? u : dd(u);
    }
  } catch (P) {
    po.length = 0, ga(P, e, 1), C = b(Xt);
  }
  let E = C;
  if (I && $ !== !1) {
    const P = Object.keys(I), { shapeFlag: D } = E;
    P.length && D & 7 && (r && P.some(dl) && (I = md(
      I,
      r
    )), E = rn(E, I, !1, !0));
  }
  return n.dirs && (E = rn(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && bn(E, n.transition), C = E, ta(S), C;
}
const dd = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ua(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, md = (e, t) => {
  const n = {};
  for (const a in e)
    (!dl(a) || !(a.slice(9) in t)) && (n[a] = e[a]);
  return n;
};
function fd(e, t, n) {
  const { props: a, children: l, component: r } = e, { props: c, children: u, patchFlag: d } = t, f = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return a ? oi(a, c, f) : !!c;
    if (d & 8) {
      const v = t.dynamicProps;
      for (let p = 0; p < v.length; p++) {
        const w = v[p];
        if (c[w] !== a[w] && !wa(f, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : a === c ? !1 : a ? c ? oi(a, c, f) : !0 : !!c;
  return !1;
}
function oi(e, t, n) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (t[r] !== e[r] && !wa(n, r))
      return !0;
  }
  return !1;
}
function vd({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const zr = {}, Fr = () => Object.create(zr), Vr = (e) => Object.getPrototypeOf(e) === zr;
function pd(e, t, n, a = !1) {
  const l = {}, r = Fr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Br(e, t, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  n ? e.props = a ? l : Cu(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function gd(e, t, n, a) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: c }
  } = e, u = pt(l), [d] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (a || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const v = e.vnode.dynamicProps;
      for (let p = 0; p < v.length; p++) {
        let w = v[p];
        if (wa(e.emitsOptions, w))
          continue;
        const g = t[w];
        if (d)
          if (_t(r, w))
            g !== r[w] && (r[w] = g, f = !0);
          else {
            const k = ws(w);
            l[k] = tl(
              d,
              u,
              k,
              g,
              e,
              !1
            );
          }
        else
          g !== r[w] && (r[w] = g, f = !0);
      }
    }
  } else {
    Br(e, t, l, r) && (f = !0);
    let v;
    for (const p in u)
      (!t || // for camelCase
      !_t(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = un(p)) === p || !_t(t, v))) && (d ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[v] !== void 0) && (l[p] = tl(
        d,
        u,
        p,
        void 0,
        e,
        !0
      )) : delete l[p]);
    if (r !== u)
      for (const p in r)
        (!t || !_t(t, p)) && (delete r[p], f = !0);
  }
  f && Gs(e.attrs, "set", "");
}
function Br(e, t, n, a) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (ro(d))
        continue;
      const f = t[d];
      let v;
      l && _t(l, v = ws(d)) ? !r || !r.includes(v) ? n[v] = f : (u || (u = {}))[v] = f : wa(e.emitsOptions, d) || (!(d in a) || f !== a[d]) && (a[d] = f, c = !0);
    }
  if (r) {
    const d = pt(n), f = u || St;
    for (let v = 0; v < r.length; v++) {
      const p = r[v];
      n[p] = tl(
        l,
        d,
        p,
        f[p],
        e,
        !_t(f, p)
      );
    }
  }
  return c;
}
function tl(e, t, n, a, l, r) {
  const c = e[n];
  if (c != null) {
    const u = _t(c, "default");
    if (u && a === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && ot(d)) {
        const { propsDefaults: f } = l;
        if (n in f)
          a = f[n];
        else {
          const v = Mo(l);
          a = f[n] = d.call(
            null,
            t
          ), v();
        }
      } else
        a = d;
      l.ce && l.ce._setProp(n, a);
    }
    c[
      0
      /* shouldCast */
    ] && (r && !u ? a = !1 : c[
      1
      /* shouldCastTrue */
    ] && (a === "" || a === un(n)) && (a = !0));
  }
  return a;
}
const hd = /* @__PURE__ */ new WeakMap();
function Wr(e, t, n = !1) {
  const a = n ? hd : t.propsCache, l = a.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let d = !1;
  if (!ot(e)) {
    const v = (p) => {
      d = !0;
      const [w, g] = Wr(p, t, !0);
      At(c, w), g && u.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !d)
    return Ct(e) && a.set(e, Rn), Rn;
  if (st(r))
    for (let v = 0; v < r.length; v++) {
      const p = ws(r[v]);
      ai(p) && (c[p] = St);
    }
  else if (r)
    for (const v in r) {
      const p = ws(v);
      if (ai(p)) {
        const w = r[v], g = c[p] = st(w) || ot(w) ? { type: w } : At({}, w), k = g.type;
        let $ = !1, S = !0;
        if (st(k))
          for (let C = 0; C < k.length; ++C) {
            const I = k[C], E = ot(I) && I.name;
            if (E === "Boolean") {
              $ = !0;
              break;
            } else E === "String" && (S = !1);
          }
        else
          $ = ot(k) && k.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = $, g[
          1
          /* shouldCastTrue */
        ] = S, ($ || _t(g, "default")) && u.push(p);
      }
    }
  const f = [c, u];
  return Ct(e) && a.set(e, f), f;
}
function ai(e) {
  return e[0] !== "$" && !ro(e);
}
const xl = (e) => e === "_" || e === "_ctx" || e === "$stable", Sl = (e) => st(e) ? e.map(Us) : [Us(e)], yd = (e, t, n) => {
  if (t._n)
    return t;
  const a = h((...l) => Sl(t(...l)), n);
  return a._c = !1, a;
}, Gr = (e, t, n) => {
  const a = e._ctx;
  for (const l in e) {
    if (xl(l)) continue;
    const r = e[l];
    if (ot(r))
      t[l] = yd(l, r, a);
    else if (r != null) {
      const c = Sl(r);
      t[l] = () => c;
    }
  }
}, jr = (e, t) => {
  const n = Sl(t);
  e.slots.default = () => n;
}, Hr = (e, t, n) => {
  for (const a in t)
    (n || !xl(a)) && (e[a] = t[a]);
}, wd = (e, t, n) => {
  const a = e.slots = Fr();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (Hr(a, t, n), n && Ji(a, "_", l, !0)) : Gr(t, a);
  } else t && jr(e, t);
}, _d = (e, t, n) => {
  const { vnode: a, slots: l } = e;
  let r = !0, c = St;
  if (a.shapeFlag & 32) {
    const u = t._;
    u ? n && u === 1 ? r = !1 : Hr(l, t, n) : (r = !t.$stable, Gr(t, l)), c = t;
  } else t && (jr(e, t), c = { default: 1 });
  if (r)
    for (const u in l)
      !xl(u) && c[u] == null && delete l[u];
}, ss = xd;
function kd(e) {
  return bd(e);
}
function bd(e, t) {
  const n = va();
  n.__VUE__ = !0;
  const {
    insert: a,
    remove: l,
    patchProp: r,
    createElement: c,
    createText: u,
    createComment: d,
    setText: f,
    setElementText: v,
    parentNode: p,
    nextSibling: w,
    setScopeId: g = As,
    insertStaticContent: k
  } = e, $ = (T, O, ae, Ie = null, Ce = null, be = null, ee = void 0, H = null, he = !!O.dynamicChildren) => {
    if (T === O)
      return;
    T && !hn(T, O) && (Ie = Le(T), se(T, Ce, be, !0), T = null), O.patchFlag === -2 && (he = !1, O.dynamicChildren = null);
    const { type: _e, ref: Ke, shapeFlag: We } = O;
    switch (_e) {
      case _a:
        S(T, O, ae, Ie);
        break;
      case Xt:
        C(T, O, ae, Ie);
        break;
      case Va:
        T == null && I(O, ae, Ie, ee);
        break;
      case B:
        Q(
          T,
          O,
          ae,
          Ie,
          Ce,
          be,
          ee,
          H,
          he
        );
        break;
      default:
        We & 1 ? D(
          T,
          O,
          ae,
          Ie,
          Ce,
          be,
          ee,
          H,
          he
        ) : We & 6 ? ve(
          T,
          O,
          ae,
          Ie,
          Ce,
          be,
          ee,
          H,
          he
        ) : (We & 64 || We & 128) && _e.process(
          T,
          O,
          ae,
          Ie,
          Ce,
          be,
          ee,
          H,
          he,
          ge
        );
    }
    Ke != null && Ce ? fo(Ke, T && T.ref, be, O || T, !O) : Ke == null && T && T.ref != null && fo(T.ref, null, be, T, !0);
  }, S = (T, O, ae, Ie) => {
    if (T == null)
      a(
        O.el = u(O.children),
        ae,
        Ie
      );
    else {
      const Ce = O.el = T.el;
      O.children !== T.children && f(Ce, O.children);
    }
  }, C = (T, O, ae, Ie) => {
    T == null ? a(
      O.el = d(O.children || ""),
      ae,
      Ie
    ) : O.el = T.el;
  }, I = (T, O, ae, Ie) => {
    [T.el, T.anchor] = k(
      T.children,
      O,
      ae,
      Ie,
      T.el,
      T.anchor
    );
  }, E = ({ el: T, anchor: O }, ae, Ie) => {
    let Ce;
    for (; T && T !== O; )
      Ce = w(T), a(T, ae, Ie), T = Ce;
    a(O, ae, Ie);
  }, P = ({ el: T, anchor: O }) => {
    let ae;
    for (; T && T !== O; )
      ae = w(T), l(T), T = ae;
    l(O);
  }, D = (T, O, ae, Ie, Ce, be, ee, H, he) => {
    if (O.type === "svg" ? ee = "svg" : O.type === "math" && (ee = "mathml"), T == null)
      A(
        O,
        ae,
        Ie,
        Ce,
        be,
        ee,
        H,
        he
      );
    else {
      const _e = T.el && T.el._isVueCE ? T.el : null;
      try {
        _e && _e._beginPatch(), j(
          T,
          O,
          Ce,
          be,
          ee,
          H,
          he
        );
      } finally {
        _e && _e._endPatch();
      }
    }
  }, A = (T, O, ae, Ie, Ce, be, ee, H) => {
    let he, _e;
    const { props: Ke, shapeFlag: We, transition: xe, dirs: Z } = T;
    if (he = T.el = c(
      T.type,
      be,
      Ke && Ke.is,
      Ke
    ), We & 8 ? v(he, T.children) : We & 16 && N(
      T.children,
      he,
      null,
      Ie,
      Ce,
      Fa(T, be),
      ee,
      H
    ), Z && mn(T, null, Ie, "created"), V(he, T, T.scopeId, ee, Ie), Ke) {
      for (const Ne in Ke)
        Ne !== "value" && !ro(Ne) && r(he, Ne, null, Ke[Ne], be, Ie);
      "value" in Ke && r(he, "value", null, Ke.value, be), (_e = Ke.onVnodeBeforeMount) && Ms(_e, Ie, T);
    }
    Z && mn(T, null, Ie, "beforeMount");
    const Ve = $d(Ce, xe);
    Ve && xe.beforeEnter(he), a(he, O, ae), ((_e = Ke && Ke.onVnodeMounted) || Ve || Z) && ss(() => {
      _e && Ms(_e, Ie, T), Ve && xe.enter(he), Z && mn(T, null, Ie, "mounted");
    }, Ce);
  }, V = (T, O, ae, Ie, Ce) => {
    if (ae && g(T, ae), Ie)
      for (let be = 0; be < Ie.length; be++)
        g(T, Ie[be]);
    if (Ce) {
      let be = Ce.subTree;
      if (O === be || Kr(be.type) && (be.ssContent === O || be.ssFallback === O)) {
        const ee = Ce.vnode;
        V(
          T,
          ee,
          ee.scopeId,
          ee.slotScopeIds,
          Ce.parent
        );
      }
    }
  }, N = (T, O, ae, Ie, Ce, be, ee, H, he = 0) => {
    for (let _e = he; _e < T.length; _e++) {
      const Ke = T[_e] = H ? an(T[_e]) : Us(T[_e]);
      $(
        null,
        Ke,
        O,
        ae,
        Ie,
        Ce,
        be,
        ee,
        H
      );
    }
  }, j = (T, O, ae, Ie, Ce, be, ee) => {
    const H = O.el = T.el;
    let { patchFlag: he, dynamicChildren: _e, dirs: Ke } = O;
    he |= T.patchFlag & 16;
    const We = T.props || St, xe = O.props || St;
    let Z;
    if (ae && fn(ae, !1), (Z = xe.onVnodeBeforeUpdate) && Ms(Z, ae, O, T), Ke && mn(O, T, ae, "beforeUpdate"), ae && fn(ae, !0), (We.innerHTML && xe.innerHTML == null || We.textContent && xe.textContent == null) && v(H, ""), _e ? le(
      T.dynamicChildren,
      _e,
      H,
      ae,
      Ie,
      Fa(O, Ce),
      be
    ) : ee || te(
      T,
      O,
      H,
      null,
      ae,
      Ie,
      Fa(O, Ce),
      be,
      !1
    ), he > 0) {
      if (he & 16)
        ce(H, We, xe, ae, Ce);
      else if (he & 2 && We.class !== xe.class && r(H, "class", null, xe.class, Ce), he & 4 && r(H, "style", We.style, xe.style, Ce), he & 8) {
        const Ve = O.dynamicProps;
        for (let Ne = 0; Ne < Ve.length; Ne++) {
          const Qe = Ve[Ne], Fe = We[Qe], Ae = xe[Qe];
          (Ae !== Fe || Qe === "value") && r(H, Qe, Fe, Ae, Ce, ae);
        }
      }
      he & 1 && T.children !== O.children && v(H, O.children);
    } else !ee && _e == null && ce(H, We, xe, ae, Ce);
    ((Z = xe.onVnodeUpdated) || Ke) && ss(() => {
      Z && Ms(Z, ae, O, T), Ke && mn(O, T, ae, "updated");
    }, Ie);
  }, le = (T, O, ae, Ie, Ce, be, ee) => {
    for (let H = 0; H < O.length; H++) {
      const he = T[H], _e = O[H], Ke = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        he.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (he.type === B || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !hn(he, _e) || // - In the case of a component, it could contain anything.
        he.shapeFlag & 198) ? p(he.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ae
        )
      );
      $(
        he,
        _e,
        Ke,
        null,
        Ie,
        Ce,
        be,
        ee,
        !0
      );
    }
  }, ce = (T, O, ae, Ie, Ce) => {
    if (O !== ae) {
      if (O !== St)
        for (const be in O)
          !ro(be) && !(be in ae) && r(
            T,
            be,
            O[be],
            null,
            Ce,
            Ie
          );
      for (const be in ae) {
        if (ro(be)) continue;
        const ee = ae[be], H = O[be];
        ee !== H && be !== "value" && r(T, be, H, ee, Ce, Ie);
      }
      "value" in ae && r(T, "value", O.value, ae.value, Ce);
    }
  }, Q = (T, O, ae, Ie, Ce, be, ee, H, he) => {
    const _e = O.el = T ? T.el : u(""), Ke = O.anchor = T ? T.anchor : u("");
    let { patchFlag: We, dynamicChildren: xe, slotScopeIds: Z } = O;
    Z && (H = H ? H.concat(Z) : Z), T == null ? (a(_e, ae, Ie), a(Ke, ae, Ie), N(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      O.children || [],
      ae,
      Ke,
      Ce,
      be,
      ee,
      H,
      he
    )) : We > 0 && We & 64 && xe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    T.dynamicChildren ? (le(
      T.dynamicChildren,
      xe,
      ae,
      Ce,
      be,
      ee,
      H
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (O.key != null || Ce && O === Ce.subTree) && Il(
      T,
      O,
      !0
      /* shallow */
    )) : te(
      T,
      O,
      ae,
      Ke,
      Ce,
      be,
      ee,
      H,
      he
    );
  }, ve = (T, O, ae, Ie, Ce, be, ee, H, he) => {
    O.slotScopeIds = H, T == null ? O.shapeFlag & 512 ? Ce.ctx.activate(
      O,
      ae,
      Ie,
      ee,
      he
    ) : J(
      O,
      ae,
      Ie,
      Ce,
      be,
      ee,
      he
    ) : L(T, O, he);
  }, J = (T, O, ae, Ie, Ce, be, ee) => {
    const H = T.component = Rd(
      T,
      Ie,
      Ce
    );
    if (ha(T) && (H.ctx.renderer = ge), Dd(H, !1, ee), H.asyncDep) {
      if (Ce && Ce.registerDep(H, F, ee), !T.el) {
        const he = H.subTree = b(Xt);
        C(null, he, O, ae), T.placeholder = he.el;
      }
    } else
      F(
        H,
        T,
        O,
        ae,
        Ce,
        be,
        ee
      );
  }, L = (T, O, ae) => {
    const Ie = O.component = T.component;
    if (fd(T, O, ae))
      if (Ie.asyncDep && !Ie.asyncResolved) {
        ue(Ie, O, ae);
        return;
      } else
        Ie.next = O, Ie.update();
    else
      O.el = T.el, Ie.vnode = O;
  }, F = (T, O, ae, Ie, Ce, be, ee) => {
    const H = () => {
      if (T.isMounted) {
        let { next: We, bu: xe, u: Z, parent: Ve, vnode: Ne } = T;
        {
          const kt = qr(T);
          if (kt) {
            We && (We.el = Ne.el, ue(T, We, ee)), kt.asyncDep.then(() => {
              T.isUnmounted || H();
            });
            return;
          }
        }
        let Qe = We, Fe;
        fn(T, !1), We ? (We.el = Ne.el, ue(T, We, ee)) : We = Ne, xe && Wo(xe), (Fe = We.props && We.props.onVnodeBeforeUpdate) && Ms(Fe, Ve, We, Ne), fn(T, !0);
        const Ae = ni(T), Xe = T.subTree;
        T.subTree = Ae, $(
          Xe,
          Ae,
          // parent may have changed if it's in a teleport
          p(Xe.el),
          // anchor may have changed if it's in a fragment
          Le(Xe),
          T,
          Ce,
          be
        ), We.el = Ae.el, Qe === null && vd(T, Ae.el), Z && ss(Z, Ce), (Fe = We.props && We.props.onVnodeUpdated) && ss(
          () => Ms(Fe, Ve, We, Ne),
          Ce
        );
      } else {
        let We;
        const { el: xe, props: Z } = O, { bm: Ve, m: Ne, parent: Qe, root: Fe, type: Ae } = T, Xe = Ln(O);
        fn(T, !1), Ve && Wo(Ve), !Xe && (We = Z && Z.onVnodeBeforeMount) && Ms(We, Qe, O), fn(T, !0);
        {
          Fe.ce && // @ts-expect-error _def is private
          Fe.ce._def.shadowRoot !== !1 && Fe.ce._injectChildStyle(Ae);
          const kt = T.subTree = ni(T);
          $(
            null,
            kt,
            ae,
            Ie,
            T,
            Ce,
            be
          ), O.el = kt.el;
        }
        if (Ne && ss(Ne, Ce), !Xe && (We = Z && Z.onVnodeMounted)) {
          const kt = O;
          ss(
            () => Ms(We, Qe, kt),
            Ce
          );
        }
        (O.shapeFlag & 256 || Qe && Ln(Qe.vnode) && Qe.vnode.shapeFlag & 256) && T.a && ss(T.a, Ce), T.isMounted = !0, O = ae = Ie = null;
      }
    };
    T.scope.on();
    const he = T.effect = new Zi(H);
    T.scope.off();
    const _e = T.update = he.run.bind(he), Ke = T.job = he.runIfDirty.bind(he);
    Ke.i = T, Ke.id = T.uid, he.scheduler = () => bl(Ke), fn(T, !0), _e();
  }, ue = (T, O, ae) => {
    O.component = T;
    const Ie = T.vnode.props;
    T.vnode = O, T.next = null, gd(T, O.props, Ie, ae), _d(T, O.children, ae), Ks(), Hl(T), Js();
  }, te = (T, O, ae, Ie, Ce, be, ee, H, he = !1) => {
    const _e = T && T.children, Ke = T ? T.shapeFlag : 0, We = O.children, { patchFlag: xe, shapeFlag: Z } = O;
    if (xe > 0) {
      if (xe & 128) {
        de(
          _e,
          We,
          ae,
          Ie,
          Ce,
          be,
          ee,
          H,
          he
        );
        return;
      } else if (xe & 256) {
        me(
          _e,
          We,
          ae,
          Ie,
          Ce,
          be,
          ee,
          H,
          he
        );
        return;
      }
    }
    Z & 8 ? (Ke & 16 && ze(_e, Ce, be), We !== _e && v(ae, We)) : Ke & 16 ? Z & 16 ? de(
      _e,
      We,
      ae,
      Ie,
      Ce,
      be,
      ee,
      H,
      he
    ) : ze(_e, Ce, be, !0) : (Ke & 8 && v(ae, ""), Z & 16 && N(
      We,
      ae,
      Ie,
      Ce,
      be,
      ee,
      H,
      he
    ));
  }, me = (T, O, ae, Ie, Ce, be, ee, H, he) => {
    T = T || Rn, O = O || Rn;
    const _e = T.length, Ke = O.length, We = Math.min(_e, Ke);
    let xe;
    for (xe = 0; xe < We; xe++) {
      const Z = O[xe] = he ? an(O[xe]) : Us(O[xe]);
      $(
        T[xe],
        Z,
        ae,
        null,
        Ce,
        be,
        ee,
        H,
        he
      );
    }
    _e > Ke ? ze(
      T,
      Ce,
      be,
      !0,
      !1,
      We
    ) : N(
      O,
      ae,
      Ie,
      Ce,
      be,
      ee,
      H,
      he,
      We
    );
  }, de = (T, O, ae, Ie, Ce, be, ee, H, he) => {
    let _e = 0;
    const Ke = O.length;
    let We = T.length - 1, xe = Ke - 1;
    for (; _e <= We && _e <= xe; ) {
      const Z = T[_e], Ve = O[_e] = he ? an(O[_e]) : Us(O[_e]);
      if (hn(Z, Ve))
        $(
          Z,
          Ve,
          ae,
          null,
          Ce,
          be,
          ee,
          H,
          he
        );
      else
        break;
      _e++;
    }
    for (; _e <= We && _e <= xe; ) {
      const Z = T[We], Ve = O[xe] = he ? an(O[xe]) : Us(O[xe]);
      if (hn(Z, Ve))
        $(
          Z,
          Ve,
          ae,
          null,
          Ce,
          be,
          ee,
          H,
          he
        );
      else
        break;
      We--, xe--;
    }
    if (_e > We) {
      if (_e <= xe) {
        const Z = xe + 1, Ve = Z < Ke ? O[Z].el : Ie;
        for (; _e <= xe; )
          $(
            null,
            O[_e] = he ? an(O[_e]) : Us(O[_e]),
            ae,
            Ve,
            Ce,
            be,
            ee,
            H,
            he
          ), _e++;
      }
    } else if (_e > xe)
      for (; _e <= We; )
        se(T[_e], Ce, be, !0), _e++;
    else {
      const Z = _e, Ve = _e, Ne = /* @__PURE__ */ new Map();
      for (_e = Ve; _e <= xe; _e++) {
        const X = O[_e] = he ? an(O[_e]) : Us(O[_e]);
        X.key != null && Ne.set(X.key, _e);
      }
      let Qe, Fe = 0;
      const Ae = xe - Ve + 1;
      let Xe = !1, kt = 0;
      const Lt = new Array(Ae);
      for (_e = 0; _e < Ae; _e++) Lt[_e] = 0;
      for (_e = Z; _e <= We; _e++) {
        const X = T[_e];
        if (Fe >= Ae) {
          se(X, Ce, be, !0);
          continue;
        }
        let G;
        if (X.key != null)
          G = Ne.get(X.key);
        else
          for (Qe = Ve; Qe <= xe; Qe++)
            if (Lt[Qe - Ve] === 0 && hn(X, O[Qe])) {
              G = Qe;
              break;
            }
        G === void 0 ? se(X, Ce, be, !0) : (Lt[G - Ve] = _e + 1, G >= kt ? kt = G : Xe = !0, $(
          X,
          O[G],
          ae,
          null,
          Ce,
          be,
          ee,
          H,
          he
        ), Fe++);
      }
      const Kt = Xe ? Cd(Lt) : Rn;
      for (Qe = Kt.length - 1, _e = Ae - 1; _e >= 0; _e--) {
        const X = Ve + _e, G = O[X], fe = O[X + 1], Je = X + 1 < Ke ? (
          // #13559, fallback to el placeholder for unresolved async component
          fe.el || fe.placeholder
        ) : Ie;
        Lt[_e] === 0 ? $(
          null,
          G,
          ae,
          Je,
          Ce,
          be,
          ee,
          H,
          he
        ) : Xe && (Qe < 0 || _e !== Kt[Qe] ? W(G, ae, Je, 2) : Qe--);
      }
    }
  }, W = (T, O, ae, Ie, Ce = null) => {
    const { el: be, type: ee, transition: H, children: he, shapeFlag: _e } = T;
    if (_e & 6) {
      W(T.component.subTree, O, ae, Ie);
      return;
    }
    if (_e & 128) {
      T.suspense.move(O, ae, Ie);
      return;
    }
    if (_e & 64) {
      ee.move(T, O, ae, ge);
      return;
    }
    if (ee === B) {
      a(be, O, ae);
      for (let We = 0; We < he.length; We++)
        W(he[We], O, ae, Ie);
      a(T.anchor, O, ae);
      return;
    }
    if (ee === Va) {
      E(T, O, ae);
      return;
    }
    if (Ie !== 2 && _e & 1 && H)
      if (Ie === 0)
        H.beforeEnter(be), a(be, O, ae), ss(() => H.enter(be), Ce);
      else {
        const { leave: We, delayLeave: xe, afterLeave: Z } = H, Ve = () => {
          T.ctx.isUnmounted ? l(be) : a(be, O, ae);
        }, Ne = () => {
          be._isLeaving && be[Ws](
            !0
            /* cancelled */
          ), We(be, () => {
            Ve(), Z && Z();
          });
        };
        xe ? xe(be, Ve, Ne) : Ne();
      }
    else
      a(be, O, ae);
  }, se = (T, O, ae, Ie = !1, Ce = !1) => {
    const {
      type: be,
      props: ee,
      ref: H,
      children: he,
      dynamicChildren: _e,
      shapeFlag: Ke,
      patchFlag: We,
      dirs: xe,
      cacheIndex: Z
    } = T;
    if (We === -2 && (Ce = !1), H != null && (Ks(), fo(H, null, ae, T, !0), Js()), Z != null && (O.renderCache[Z] = void 0), Ke & 256) {
      O.ctx.deactivate(T);
      return;
    }
    const Ve = Ke & 1 && xe, Ne = !Ln(T);
    let Qe;
    if (Ne && (Qe = ee && ee.onVnodeBeforeUnmount) && Ms(Qe, O, T), Ke & 6)
      pe(T.component, ae, Ie);
    else {
      if (Ke & 128) {
        T.suspense.unmount(ae, Ie);
        return;
      }
      Ve && mn(T, null, O, "beforeUnmount"), Ke & 64 ? T.type.remove(
        T,
        O,
        ae,
        ge,
        Ie
      ) : _e && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_e.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (be !== B || We > 0 && We & 64) ? ze(
        _e,
        O,
        ae,
        !1,
        !0
      ) : (be === B && We & 384 || !Ce && Ke & 16) && ze(he, O, ae), Ie && ne(T);
    }
    (Ne && (Qe = ee && ee.onVnodeUnmounted) || Ve) && ss(() => {
      Qe && Ms(Qe, O, T), Ve && mn(T, null, O, "unmounted");
    }, ae);
  }, ne = (T) => {
    const { type: O, el: ae, anchor: Ie, transition: Ce } = T;
    if (O === B) {
      Me(ae, Ie);
      return;
    }
    if (O === Va) {
      P(T);
      return;
    }
    const be = () => {
      l(ae), Ce && !Ce.persisted && Ce.afterLeave && Ce.afterLeave();
    };
    if (T.shapeFlag & 1 && Ce && !Ce.persisted) {
      const { leave: ee, delayLeave: H } = Ce, he = () => ee(ae, be);
      H ? H(T.el, be, he) : he();
    } else
      be();
  }, Me = (T, O) => {
    let ae;
    for (; T !== O; )
      ae = w(T), l(T), T = ae;
    l(O);
  }, pe = (T, O, ae) => {
    const { bum: Ie, scope: Ce, job: be, subTree: ee, um: H, m: he, a: _e } = T;
    li(he), li(_e), Ie && Wo(Ie), Ce.stop(), be && (be.flags |= 8, se(ee, T, O, ae)), H && ss(H, O), ss(() => {
      T.isUnmounted = !0;
    }, O);
  }, ze = (T, O, ae, Ie = !1, Ce = !1, be = 0) => {
    for (let ee = be; ee < T.length; ee++)
      se(T[ee], O, ae, Ie, Ce);
  }, Le = (T) => {
    if (T.shapeFlag & 6)
      return Le(T.component.subTree);
    if (T.shapeFlag & 128)
      return T.suspense.next();
    const O = w(T.anchor || T.el), ae = O && O[wr];
    return ae ? w(ae) : O;
  };
  let ke = !1;
  const De = (T, O, ae) => {
    T == null ? O._vnode && se(O._vnode, null, null, !0) : $(
      O._vnode || null,
      T,
      O,
      null,
      null,
      null,
      ae
    ), O._vnode = T, ke || (ke = !0, Hl(), gr(), ke = !1);
  }, ge = {
    p: $,
    um: se,
    m: W,
    r: ne,
    mt: J,
    mc: N,
    pc: te,
    pbc: le,
    n: Le,
    o: e
  };
  return {
    render: De,
    hydrate: void 0,
    createApp: nd(De)
  };
}
function Fa({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function fn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function $d(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Il(e, t, n = !1) {
  const a = e.children, l = t.children;
  if (st(a) && st(l))
    for (let r = 0; r < a.length; r++) {
      const c = a[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = an(l[r]), u.el = c.el), !n && u.patchFlag !== -2 && Il(c, u)), u.type === _a && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === Xt && !u.el && (u.el = c.el);
    }
}
function Cd(e) {
  const t = e.slice(), n = [0];
  let a, l, r, c, u;
  const d = e.length;
  for (a = 0; a < d; a++) {
    const f = e[a];
    if (f !== 0) {
      if (l = n[n.length - 1], e[l] < f) {
        t[a] = l, n.push(a);
        continue;
      }
      for (r = 0, c = n.length - 1; r < c; )
        u = r + c >> 1, e[n[u]] < f ? r = u + 1 : c = u;
      f < e[n[r]] && (r > 0 && (t[a] = n[r - 1]), n[r] = a);
    }
  }
  for (r = n.length, c = n[r - 1]; r-- > 0; )
    n[r] = c, c = t[c];
  return n;
}
function qr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : qr(t);
}
function li(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Kr = (e) => e.__isSuspense;
function xd(e, t) {
  t && t.pendingBranch ? st(e) ? t.effects.push(...e) : t.effects.push(e) : Lu(e);
}
const B = Symbol.for("v-fgt"), _a = Symbol.for("v-txt"), Xt = Symbol.for("v-cmt"), Va = Symbol.for("v-stc"), po = [];
let ms = null;
function o(e = !1) {
  po.push(ms = e ? null : []);
}
function Sd() {
  po.pop(), ms = po[po.length - 1] || null;
}
let $o = 1;
function oa(e, t = !1) {
  $o += e, e < 0 && ms && t && (ms.hasOnce = !0);
}
function Jr(e) {
  return e.dynamicChildren = $o > 0 ? ms || Rn : null, Sd(), $o > 0 && ms && ms.push(e), e;
}
function i(e, t, n, a, l, r) {
  return Jr(
    s(
      e,
      t,
      n,
      a,
      l,
      r,
      !0
    )
  );
}
function R(e, t, n, a, l) {
  return Jr(
    b(
      e,
      t,
      n,
      a,
      l,
      !0
    )
  );
}
function Co(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function hn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Qr = ({ key: e }) => e ?? null, Ho = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Dt(e) || es(e) || ot(e) ? { i: jt, r: e, k: t, f: !!n } : e : null);
function s(e, t = null, n = null, a = 0, l = null, r = e === B ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Qr(t),
    ref: t && Ho(t),
    scopeId: yr,
    slotScopeIds: null,
    children: n,
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
    shapeFlag: r,
    patchFlag: a,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: jt
  };
  return u ? (El(d, n), r & 128 && e.normalize(d)) : n && (d.shapeFlag |= Dt(n) ? 8 : 16), $o > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  ms && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && ms.push(d), d;
}
const b = Id;
function Id(e, t = null, n = null, a = 0, l = null, r = !1) {
  if ((!e || e === Pr) && (e = Xt), Co(e)) {
    const u = rn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && El(u, n), $o > 0 && !r && ms && (u.shapeFlag & 6 ? ms[ms.indexOf(e)] = u : ms.push(u)), u.patchFlag = -2, u;
  }
  if (Ad(e) && (e = e.__vccOpts), t) {
    t = Ed(t);
    let { class: u, style: d } = t;
    u && !Dt(u) && (t.class = Be(u)), Ct(d) && (kl(d) && !st(d) && (d = At({}, d)), t.style = zt(d));
  }
  const c = Dt(e) ? 1 : Kr(e) ? 128 : _r(e) ? 64 : Ct(e) ? 4 : ot(e) ? 2 : 0;
  return s(
    e,
    t,
    n,
    a,
    l,
    c,
    r,
    !0
  );
}
function Ed(e) {
  return e ? kl(e) || Vr(e) ? At({}, e) : e : null;
}
function rn(e, t, n = !1, a = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: d } = e, f = t ? Td(l || {}, t) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Qr(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? st(r) ? r.concat(Ho(t)) : [r, Ho(t)] : Ho(t)
    ) : r,
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
    patchFlag: t && e.type !== B ? c === -1 ? 16 : c | 16 : c,
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
    ssContent: e.ssContent && rn(e.ssContent),
    ssFallback: e.ssFallback && rn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && a && bn(
    v,
    d.clone(v)
  ), v;
}
function x(e = " ", t = 0) {
  return b(_a, null, e, t);
}
function y(e = "", t = !1) {
  return t ? (o(), R(Xt, null, e)) : b(Xt, null, e);
}
function Us(e) {
  return e == null || typeof e == "boolean" ? b(Xt) : st(e) ? b(
    B,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Co(e) ? an(e) : b(_a, null, String(e));
}
function an(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : rn(e);
}
function El(e, t) {
  let n = 0;
  const { shapeFlag: a } = e;
  if (t == null)
    t = null;
  else if (st(t))
    n = 16;
  else if (typeof t == "object")
    if (a & 65) {
      const l = t.default;
      l && (l._c && (l._d = !1), El(e, l()), l._c && (l._d = !0));
      return;
    } else {
      n = 32;
      const l = t._;
      !l && !Vr(t) ? t._ctx = jt : l === 3 && jt && (jt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ot(t) ? (t = { default: t, _ctx: jt }, n = 32) : (t = String(t), a & 64 ? (n = 16, t = [x(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Td(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (const l in a)
      if (l === "class")
        t.class !== a.class && (t.class = Be([t.class, a.class]));
      else if (l === "style")
        t.style = zt([t.style, a.style]);
      else if (ua(l)) {
        const r = t[l], c = a[l];
        c && r !== c && !(st(r) && r.includes(c)) && (t[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function Ms(e, t, n, a = null) {
  Is(e, t, 7, [
    n,
    a
  ]);
}
const Md = Lr();
let Pd = 0;
function Rd(e, t, n) {
  const a = e.type, l = (t ? t.appContext : e.appContext) || Md, r = {
    uid: Pd++,
    vnode: e,
    type: a,
    parent: t,
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
    scope: new ou(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(l.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Wr(a, l),
    emitsOptions: Ar(a, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: St,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: St,
    data: St,
    props: St,
    attrs: St,
    slots: St,
    refs: St,
    setupState: St,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = cd.bind(null, r), e.ce && e.ce(r), r;
}
let Zt = null;
const Tl = () => Zt || jt;
let aa, sl;
{
  const e = va(), t = (n, a) => {
    let l;
    return (l = e[n]) || (l = e[n] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  aa = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Zt = n
  ), sl = t(
    "__VUE_SSR_SETTERS__",
    (n) => xo = n
  );
}
const Mo = (e) => {
  const t = Zt;
  return aa(e), e.scope.on(), () => {
    e.scope.off(), aa(t);
  };
}, ii = () => {
  Zt && Zt.scope.off(), aa(null);
};
function Yr(e) {
  return e.vnode.shapeFlag & 4;
}
let xo = !1;
function Dd(e, t = !1, n = !1) {
  t && sl(t);
  const { props: a, children: l } = e.vnode, r = Yr(e);
  pd(e, a, r, t), wd(e, l, n || t);
  const c = r ? Nd(e, t) : void 0;
  return t && sl(!1), c;
}
function Nd(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Qu);
  const { setup: a } = n;
  if (a) {
    Ks();
    const l = e.setupContext = a.length > 1 ? Ud(e) : null, r = Mo(e), c = Eo(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = Hi(c);
    if (Js(), r(), (u || e.sp) && !Ln(e) && Er(e), u) {
      if (c.then(ii, ii), t)
        return c.then((d) => {
          ri(e, d);
        }).catch((d) => {
          ga(d, e, 0);
        });
      e.asyncDep = c;
    } else
      ri(e, c);
  } else
    Xr(e);
}
function ri(e, t, n) {
  ot(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ct(t) && (e.setupState = fr(t)), Xr(e);
}
function Xr(e, t, n) {
  const a = e.type;
  e.render || (e.render = a.render || As);
  {
    const l = Mo(e);
    Ks();
    try {
      Yu(e);
    } finally {
      Js(), l();
    }
  }
}
const Ld = {
  get(e, t) {
    return Qt(e, "get", ""), e[t];
  }
};
function Ud(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ld),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ka(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(fr(xu(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in vo)
        return vo[n](e);
    },
    has(t, n) {
      return n in t || n in vo;
    }
  })) : e.proxy;
}
function Od(e, t = !0) {
  return ot(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ad(e) {
  return ot(e) && "__vccOpts" in e;
}
const M = (e, t) => Mu(e, t, xo);
function jn(e, t, n) {
  try {
    oa(-1);
    const a = arguments.length;
    return a === 2 ? Ct(t) && !st(t) ? Co(t) ? b(e, null, [t]) : b(e, t) : b(e, null, t) : (a > 3 ? n = Array.prototype.slice.call(arguments, 2) : a === 3 && Co(n) && (n = [n]), b(e, t, n));
  } finally {
    oa(1);
  }
}
const zd = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let nl;
const ci = typeof window < "u" && window.trustedTypes;
if (ci)
  try {
    nl = /* @__PURE__ */ ci.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Zr = nl ? (e) => nl.createHTML(e) : (e) => e, Fd = "http://www.w3.org/2000/svg", Vd = "http://www.w3.org/1998/Math/MathML", Bs = typeof document < "u" ? document : null, ui = Bs && /* @__PURE__ */ Bs.createElement("template"), Bd = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, a) => {
    const l = t === "svg" ? Bs.createElementNS(Fd, e) : t === "mathml" ? Bs.createElementNS(Vd, e) : n ? Bs.createElement(e, { is: n }) : Bs.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
  },
  createText: (e) => Bs.createTextNode(e),
  createComment: (e) => Bs.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Bs.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, a, l, r) {
    const c = n ? n.previousSibling : t.lastChild;
    if (l && (l === r || l.nextSibling))
      for (; t.insertBefore(l.cloneNode(!0), n), !(l === r || !(l = l.nextSibling)); )
        ;
    else {
      ui.innerHTML = Zr(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const u = ui.content;
      if (a === "svg" || a === "mathml") {
        const d = u.firstChild;
        for (; d.firstChild; )
          u.appendChild(d.firstChild);
        u.removeChild(d);
      }
      t.insertBefore(u, n);
    }
    return [
      // first
      c ? c.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, tn = "transition", Yn = "animation", Vn = Symbol("_vtc"), ec = {
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
}, tc = /* @__PURE__ */ At(
  {},
  Cr,
  ec
), Wd = (e) => (e.displayName = "Transition", e.props = tc, e), Gd = /* @__PURE__ */ Wd(
  (e, { slots: t }) => jn(Au, sc(e), t)
), vn = (e, t = []) => {
  st(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, di = (e) => e ? st(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function sc(e) {
  const t = {};
  for (const Q in e)
    Q in ec || (t[Q] = e[Q]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: a,
    duration: l,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: c = `${n}-enter-active`,
    enterToClass: u = `${n}-enter-to`,
    appearFromClass: d = r,
    appearActiveClass: f = c,
    appearToClass: v = u,
    leaveFromClass: p = `${n}-leave-from`,
    leaveActiveClass: w = `${n}-leave-active`,
    leaveToClass: g = `${n}-leave-to`
  } = e, k = jd(l), $ = k && k[0], S = k && k[1], {
    onBeforeEnter: C,
    onEnter: I,
    onEnterCancelled: E,
    onLeave: P,
    onLeaveCancelled: D,
    onBeforeAppear: A = C,
    onAppear: V = I,
    onAppearCancelled: N = E
  } = t, j = (Q, ve, J, L) => {
    Q._enterCancelled = L, sn(Q, ve ? v : u), sn(Q, ve ? f : c), J && J();
  }, le = (Q, ve) => {
    Q._isLeaving = !1, sn(Q, p), sn(Q, g), sn(Q, w), ve && ve();
  }, ce = (Q) => (ve, J) => {
    const L = Q ? V : I, F = () => j(ve, Q, J);
    vn(L, [ve, F]), mi(() => {
      sn(ve, Q ? d : r), Rs(ve, Q ? v : u), di(L) || fi(ve, a, $, F);
    });
  };
  return At(t, {
    onBeforeEnter(Q) {
      vn(C, [Q]), Rs(Q, r), Rs(Q, c);
    },
    onBeforeAppear(Q) {
      vn(A, [Q]), Rs(Q, d), Rs(Q, f);
    },
    onEnter: ce(!1),
    onAppear: ce(!0),
    onLeave(Q, ve) {
      Q._isLeaving = !0;
      const J = () => le(Q, ve);
      Rs(Q, p), Q._enterCancelled ? (Rs(Q, w), ol(Q)) : (ol(Q), Rs(Q, w)), mi(() => {
        Q._isLeaving && (sn(Q, p), Rs(Q, g), di(P) || fi(Q, a, S, J));
      }), vn(P, [Q, J]);
    },
    onEnterCancelled(Q) {
      j(Q, !1, void 0, !0), vn(E, [Q]);
    },
    onAppearCancelled(Q) {
      j(Q, !0, void 0, !0), vn(N, [Q]);
    },
    onLeaveCancelled(Q) {
      le(Q), vn(D, [Q]);
    }
  });
}
function jd(e) {
  if (e == null)
    return null;
  if (Ct(e))
    return [Ba(e.enter), Ba(e.leave)];
  {
    const t = Ba(e);
    return [t, t];
  }
}
function Ba(e) {
  return Qc(e);
}
function Rs(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Vn] || (e[Vn] = /* @__PURE__ */ new Set())).add(t);
}
function sn(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const n = e[Vn];
  n && (n.delete(t), n.size || (e[Vn] = void 0));
}
function mi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Hd = 0;
function fi(e, t, n, a) {
  const l = e._endId = ++Hd, r = () => {
    l === e._endId && a();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: c, timeout: u, propCount: d } = nc(e, t);
  if (!c)
    return a();
  const f = c + "end";
  let v = 0;
  const p = () => {
    e.removeEventListener(f, w), r();
  }, w = (g) => {
    g.target === e && ++v >= d && p();
  };
  setTimeout(() => {
    v < d && p();
  }, u + 1), e.addEventListener(f, w);
}
function nc(e, t) {
  const n = window.getComputedStyle(e), a = (k) => (n[k] || "").split(", "), l = a(`${tn}Delay`), r = a(`${tn}Duration`), c = vi(l, r), u = a(`${Yn}Delay`), d = a(`${Yn}Duration`), f = vi(u, d);
  let v = null, p = 0, w = 0;
  t === tn ? c > 0 && (v = tn, p = c, w = r.length) : t === Yn ? f > 0 && (v = Yn, p = f, w = d.length) : (p = Math.max(c, f), v = p > 0 ? c > f ? tn : Yn : null, w = v ? v === tn ? r.length : d.length : 0);
  const g = v === tn && /\b(?:transform|all)(?:,|$)/.test(
    a(`${tn}Property`).toString()
  );
  return {
    type: v,
    timeout: p,
    propCount: w,
    hasTransform: g
  };
}
function vi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, a) => pi(n) + pi(e[a])));
}
function pi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ol(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function qd(e, t, n) {
  const a = e[Vn];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const gi = Symbol("_vod"), Kd = Symbol("_vsh"), Jd = Symbol(""), Qd = /(?:^|;)\s*display\s*:/;
function Yd(e, t, n) {
  const a = e.style, l = Dt(n);
  let r = !1;
  if (n && !l) {
    if (t)
      if (Dt(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          n[u] == null && qo(a, u, "");
        }
      else
        for (const c in t)
          n[c] == null && qo(a, c, "");
    for (const c in n)
      c === "display" && (r = !0), qo(a, c, n[c]);
  } else if (l) {
    if (t !== n) {
      const c = a[Jd];
      c && (n += ";" + c), a.cssText = n, r = Qd.test(n);
    }
  } else t && e.removeAttribute("style");
  gi in e && (e[gi] = r ? a.display : "", e[Kd] && (a.display = "none"));
}
const hi = /\s*!important$/;
function qo(e, t, n) {
  if (st(n))
    n.forEach((a) => qo(e, t, a));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const a = Xd(e, t);
    hi.test(n) ? e.setProperty(
      un(a),
      n.replace(hi, ""),
      "important"
    ) : e[a] = n;
  }
}
const yi = ["Webkit", "Moz", "ms"], Wa = {};
function Xd(e, t) {
  const n = Wa[t];
  if (n)
    return n;
  let a = ws(t);
  if (a !== "filter" && a in e)
    return Wa[t] = a;
  a = ma(a);
  for (let l = 0; l < yi.length; l++) {
    const r = yi[l] + a;
    if (r in e)
      return Wa[t] = r;
  }
  return t;
}
const wi = "http://www.w3.org/1999/xlink";
function _i(e, t, n, a, l, r = su(t)) {
  a && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(wi, t.slice(6, t.length)) : e.setAttributeNS(wi, t, n) : n == null || r && !Qi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : xs(n) ? String(n) : n
  );
}
function ki(e, t, n, a, l) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Zr(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const u = r === "OPTION" ? e.getAttribute("value") || "" : e.value, d = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (u !== d || !("_value" in e)) && (e.value = d), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = Qi(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(l || t);
}
function Hs(e, t, n, a) {
  e.addEventListener(t, n, a);
}
function Zd(e, t, n, a) {
  e.removeEventListener(t, n, a);
}
const bi = Symbol("_vei");
function em(e, t, n, a, l = null) {
  const r = e[bi] || (e[bi] = {}), c = r[t];
  if (a && c)
    c.value = a;
  else {
    const [u, d] = tm(t);
    if (a) {
      const f = r[t] = om(
        a,
        l
      );
      Hs(e, u, f, d);
    } else c && (Zd(e, u, c, d), r[t] = void 0);
  }
}
const $i = /(?:Once|Passive|Capture)$/;
function tm(e) {
  let t;
  if ($i.test(e)) {
    t = {};
    let a;
    for (; a = e.match($i); )
      e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : un(e.slice(2)), t];
}
let Ga = 0;
const sm = /* @__PURE__ */ Promise.resolve(), nm = () => Ga || (sm.then(() => Ga = 0), Ga = Date.now());
function om(e, t) {
  const n = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= n.attached)
      return;
    Is(
      am(a, n.value),
      t,
      5,
      [a]
    );
  };
  return n.value = e, n.attached = nm(), n;
}
function am(e, t) {
  if (st(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (a) => (l) => !l._stopped && a && a(l)
    );
  } else
    return t;
}
const Ci = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, lm = (e, t, n, a, l, r) => {
  const c = l === "svg";
  t === "class" ? qd(e, a, c) : t === "style" ? Yd(e, n, a) : ua(t) ? dl(t) || em(e, t, n, a, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : im(e, t, a, c)) ? (ki(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && _i(e, t, a, c, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Dt(a)) ? ki(e, ws(t), a, r, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), _i(e, t, a, c));
};
function im(e, t, n, a) {
  if (a)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ci(t) && ot(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return Ci(t) && Dt(n) ? !1 : t in e;
}
const oc = /* @__PURE__ */ new WeakMap(), ac = /* @__PURE__ */ new WeakMap(), la = Symbol("_moveCb"), xi = Symbol("_enterCb"), rm = (e) => (delete e.props.mode, e), cm = /* @__PURE__ */ rm({
  name: "TransitionGroup",
  props: /* @__PURE__ */ At({}, tc, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = Tl(), a = $r();
    let l, r;
    return Mr(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!vm(
        l[0].el,
        n.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(dm), l.forEach(mm);
      const u = l.filter(fm);
      ol(n.vnode.el), u.forEach((d) => {
        const f = d.el, v = f.style;
        Rs(f, c), v.transform = v.webkitTransform = v.transitionDuration = "";
        const p = f[la] = (w) => {
          w && w.target !== f || (!w || w.propertyName.endsWith("transform")) && (f.removeEventListener("transitionend", p), f[la] = null, sn(f, c));
        };
        f.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const c = pt(e), u = sc(c);
      let d = c.tag || B;
      if (l = [], r)
        for (let f = 0; f < r.length; f++) {
          const v = r[f];
          v.el && v.el instanceof Element && (l.push(v), bn(
            v,
            bo(
              v,
              u,
              a,
              n
            )
          ), oc.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      r = t.default ? $l(t.default()) : [];
      for (let f = 0; f < r.length; f++) {
        const v = r[f];
        v.key != null && bn(
          v,
          bo(v, u, a, n)
        );
      }
      return b(d, null, r);
    };
  }
}), um = cm;
function dm(e) {
  const t = e.el;
  t[la] && t[la](), t[xi] && t[xi]();
}
function mm(e) {
  ac.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function fm(e) {
  const t = oc.get(e), n = ac.get(e), a = t.left - n.left, l = t.top - n.top;
  if (a || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${a}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function vm(e, t, n) {
  const a = e.cloneNode(), l = e[Vn];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && a.classList.remove(d));
  }), n.split(/\s+/).forEach((u) => u && a.classList.add(u)), a.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(a);
  const { hasTransform: c } = nc(a);
  return r.removeChild(a), c;
}
const cn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return st(t) ? (n) => Wo(t, n) : t;
};
function pm(e) {
  e.target.composing = !0;
}
function Si(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ys = Symbol("_assign");
function Ii(e, t, n) {
  return t && (e = e.trim()), n && (e = fa(e)), e;
}
const go = {
  created(e, { modifiers: { lazy: t, trim: n, number: a } }, l) {
    e[ys] = cn(l);
    const r = a || l.props && l.props.type === "number";
    Hs(e, t ? "change" : "input", (c) => {
      c.target.composing || e[ys](Ii(e.value, n, r));
    }), (n || r) && Hs(e, "change", () => {
      e.value = Ii(e.value, n, r);
    }), t || (Hs(e, "compositionstart", pm), Hs(e, "compositionend", Si), Hs(e, "change", Si));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: a, trim: l, number: r } }, c) {
    if (e[ys] = cn(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? fa(e.value) : e.value, d = t ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (a && t === n || l && e.value.trim() === d) || (e.value = d));
  }
}, ia = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[ys] = cn(n), Hs(e, "change", () => {
      const a = e._modelValue, l = Bn(e), r = e.checked, c = e[ys];
      if (st(a)) {
        const u = vl(a, l), d = u !== -1;
        if (r && !d)
          c(a.concat(l));
        else if (!r && d) {
          const f = [...a];
          f.splice(u, 1), c(f);
        }
      } else if (Wn(a)) {
        const u = new Set(a);
        r ? u.add(l) : u.delete(l), c(u);
      } else
        c(lc(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Ei,
  beforeUpdate(e, t, n) {
    e[ys] = cn(n), Ei(e, t, n);
  }
};
function Ei(e, { value: t, oldValue: n }, a) {
  e._modelValue = t;
  let l;
  if (st(t))
    l = vl(t, a.props.value) > -1;
  else if (Wn(t))
    l = t.has(a.props.value);
  else {
    if (t === n) return;
    l = kn(t, lc(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Ko = {
  created(e, { value: t }, n) {
    e.checked = kn(t, n.props.value), e[ys] = cn(n), Hs(e, "change", () => {
      e[ys](Bn(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, a) {
    e[ys] = cn(a), t !== n && (e.checked = kn(t, a.props.value));
  }
}, On = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, a) {
    const l = Wn(t);
    Hs(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? fa(Bn(c)) : Bn(c)
      );
      e[ys](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Gt(() => {
        e._assigning = !1;
      });
    }), e[ys] = cn(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ti(e, t);
  },
  beforeUpdate(e, t, n) {
    e[ys] = cn(n);
  },
  updated(e, { value: t }) {
    e._assigning || Ti(e, t);
  }
};
function Ti(e, t) {
  const n = e.multiple, a = st(t);
  if (!(n && !a && !Wn(t))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = Bn(c);
      if (n)
        if (a) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = t.some((f) => String(f) === String(u)) : c.selected = vl(t, u) > -1;
        } else
          c.selected = t.has(u);
      else if (kn(Bn(c), t)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Bn(e) {
  return "_value" in e ? e._value : e.value;
}
function lc(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const gm = ["ctrl", "shift", "alt", "meta"], hm = {
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
  exact: (e, t) => gm.some((n) => e[`${n}Key`] && !t.includes(n))
}, bt = (e, t) => {
  const n = e._withMods || (e._withMods = {}), a = t.join(".");
  return n[a] || (n[a] = ((l, ...r) => {
    for (let c = 0; c < t.length; c++) {
      const u = hm[t[c]];
      if (u && u(l, t)) return;
    }
    return e(l, ...r);
  }));
}, ym = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Cs = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), a = t.join(".");
  return n[a] || (n[a] = ((l) => {
    if (!("key" in l))
      return;
    const r = un(l.key);
    if (t.some(
      (c) => c === r || ym[c] === r
    ))
      return e(l);
  }));
}, wm = /* @__PURE__ */ At({ patchProp: lm }, Bd);
let Mi;
function _m() {
  return Mi || (Mi = kd(wm));
}
const Po = ((...e) => {
  const t = _m().createApp(...e), { mount: n } = t;
  return t.mount = (a) => {
    const l = bm(a);
    if (!l) return;
    const r = t._component;
    !ot(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = n(l, !1, km(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, t;
});
function km(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function bm(e) {
  return Dt(e) ? document.querySelector(e) : e;
}
const MD = Cn({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const PD = [
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
  ...Array(12).fill(null).map((e, t) => ({
    name: `synced-workflow-${t + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + t,
    model_count: 1 + t % 3,
    sync_state: "synced"
  }))
], RD = {
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
}, $m = [
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
], DD = [
  ...$m,
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
function Xn() {
  return !1;
}
function Cm(e) {
  return !!(e && typeof e.fetchApi == "function");
}
function Hn() {
  var n, a, l;
  const e = window, t = [
    (n = e.app) == null ? void 0 : n.api,
    (l = (a = e.comfyAPI) == null ? void 0 : a.api) == null ? void 0 : l.api
  ];
  for (const r of t)
    if (Cm(r))
      return r;
  return null;
}
async function qs(e, t) {
  const n = Hn();
  if (!n)
    throw new Error("ComfyUI API not available");
  return n.fetchApi(e, t);
}
function xm(e = "comfygit-panel") {
  const t = Hn();
  return (t == null ? void 0 : t.clientId) ?? (t == null ? void 0 : t.initialClientId) ?? e;
}
class al extends Error {
  constructor(n, a, l, r) {
    super(n);
    Lo(this, "status");
    Lo(this, "data");
    Lo(this, "endpoint");
    this.name = "ComfyGitApiError", this.status = a, this.data = l, this.endpoint = r;
  }
}
function Sm() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function mt() {
  const e = _(!1), t = _(null);
  async function n(z, Se) {
    const je = await qs(z, Se), wt = await je.text();
    if (!je.ok) {
      let et = {};
      if (wt)
        try {
          const Ts = JSON.parse(wt);
          Ts && typeof Ts == "object" && (et = Ts);
        } catch {
          et = { error: wt };
        }
      const en = et.error || et.message || et.detail || je.statusText || `Request failed: ${je.status}`;
      throw new al(String(en), je.status, et, z);
    }
    if (wt)
      return JSON.parse(wt);
  }
  async function a(z) {
    return n(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(z)}`);
  }
  async function l(z, Se, je) {
    return n("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: z, email: Se, password: je })
    });
  }
  async function r(z, Se, je) {
    return n("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: z, email: Se, password: je })
    });
  }
  async function c(z, Se) {
    return n(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(z)}`, {
      headers: { Authorization: `Bearer ${Se}` }
    });
  }
  async function u(z, Se) {
    return n("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: z, refresh_token: Se || null })
    });
  }
  async function d(z, Se) {
    return n(`/v2/comfygit/cloud/environments?cloud_url=${encodeURIComponent(z)}`, {
      headers: { Authorization: `Bearer ${Se}` }
    });
  }
  async function f(z, Se, je) {
    return n(
      `/v2/comfygit/cloud/environments/${encodeURIComponent(Se)}/revisions?cloud_url=${encodeURIComponent(z)}`,
      {
        headers: { Authorization: `Bearer ${je}` }
      }
    );
  }
  async function v(z, Se, je, wt) {
    return n("/v2/comfygit/cloud/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Se}`
      },
      body: JSON.stringify({
        cloud_url: z,
        source_message: je || null,
        cloud_environment_id: wt || null
      })
    });
  }
  async function p(z = !1) {
    return n(z ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(z, Se = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: z, allow_issues: Se })
    });
  }
  async function g(z = 10, Se = 0) {
    return n(`/v2/comfygit/log?limit=${z}&offset=${Se}`);
  }
  async function k(z, Se = 50) {
    return n(`/v2/comfygit/log?branch=${encodeURIComponent(z)}&limit=${Se}`);
  }
  async function $(z) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: z })
    });
  }
  async function S() {
    return n("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function C() {
    return n("/v2/comfygit/deploy/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function I(z) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: z, force: !0 })
    });
  }
  async function E(z) {
    return n(`/v2/comfygit/environment_export/${encodeURIComponent(z)}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function P(z, Se) {
    return n(`/v2/comfygit/environment_export/${encodeURIComponent(z)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Se, force: !0 })
    });
  }
  async function D() {
    return n("/v2/comfygit/branches");
  }
  async function A(z) {
    return n(`/v2/comfygit/commit/${z}`);
  }
  async function V(z, Se = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: z, force: Se })
    });
  }
  async function N(z, Se = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: z, start_point: Se })
    });
  }
  async function j(z, Se = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: z, force: Se })
    });
  }
  async function le(z, Se = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(z)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: Se })
    });
  }
  async function ce() {
    try {
      return await n("/v2/comfygit/environments");
    } catch {
      try {
        const z = await p();
        return {
          environments: [{
            name: z.environment,
            is_current: !0,
            path: "~/comfygit/environments/" + z.environment,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            workflow_count: z.workflows.total,
            node_count: 0,
            model_count: 0,
            current_branch: z.branch
          }],
          current: z.environment,
          is_managed: !0,
          orchestrator_active: !1,
          orchestrator_environment: null,
          is_supervised: !1
        };
      } catch {
        return {
          environments: [],
          current: null,
          is_managed: !1,
          orchestrator_active: !1,
          orchestrator_environment: null,
          is_supervised: !1
        };
      }
    }
  }
  async function Q() {
    return (await ce()).environments;
  }
  async function ve(z) {
    try {
      return await n(`/v2/comfygit/environments/${encodeURIComponent(z)}`);
    } catch {
      return null;
    }
  }
  async function J(z, Se) {
    const je = { target_env: z };
    return Se && (je.workspace_path = Se), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(je)
    });
  }
  async function L() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function F(z) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function ue() {
    return n("/v2/workspace/environments/create_status");
  }
  async function te(z = 100) {
    return n(`/v2/workspace/comfyui_releases?limit=${z}`);
  }
  async function me(z) {
    return n(`/v2/workspace/environments/${z}`, {
      method: "DELETE"
    });
  }
  async function de(z = !1) {
    try {
      return n(z ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const Se = await p(z), je = [];
      return Se.workflows.new.forEach((wt) => {
        je.push({
          name: wt,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: wt
        });
      }), Se.workflows.modified.forEach((wt) => {
        je.push({
          name: wt,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: wt
        });
      }), Se.workflows.synced.forEach((wt) => {
        je.push({
          name: wt,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: wt
        });
      }), je;
    }
  }
  async function W(z) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/details`);
  }
  async function se(z) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/contract`);
  }
  async function ne(z, Se) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Se)
    });
  }
  async function Me(z) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/contract`, {
      method: "DELETE"
    });
  }
  async function pe(z) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/resolve`, {
      method: "POST"
    });
  }
  async function ze(z, Se, je) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: Se, install_models: je })
    });
  }
  async function Le(z, Se, je) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: Se, importance: je })
    });
  }
  async function ke() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function De() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function ge(z) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(z)}`);
  }
  async function we(z) {
    return n(`/v2/workspace/models/${encodeURIComponent(z)}/source-candidates`);
  }
  async function T(z) {
    return n(`/v2/workspace/models/${encodeURIComponent(z)}/hashes`, {
      method: "POST"
    });
  }
  async function O() {
    return n("/v2/workspace/models/workflow-source-candidates");
  }
  async function ae(z) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: z })
    });
  }
  async function Ie(z, Se) {
    return n(`/v2/workspace/models/${z}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Se })
    });
  }
  async function Ce(z, Se) {
    return n(`/v2/workspace/models/${z}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Se })
    });
  }
  async function be(z) {
    return n(`/v2/workspace/models/${z}`, {
      method: "DELETE"
    });
  }
  async function ee(z) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function H() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function he() {
    return n("/v2/workspace/models/directory");
  }
  async function _e(z) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: z })
    });
  }
  async function Ke(z) {
    const Se = new URLSearchParams({ url: z });
    return n(`/v2/workspace/huggingface/repo-info?${Se}`);
  }
  async function We() {
    return n("/v2/workspace/models/subdirectories");
  }
  async function xe(z, Se = 10) {
    const je = new URLSearchParams({ query: z, limit: String(Se) });
    return n(`/v2/workspace/huggingface/search?${je}`);
  }
  async function Z(z) {
    try {
      const Se = z ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(z)}` : "/v2/comfygit/config";
      return n(Se);
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
  async function Ve(z, Se) {
    const je = Se ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(Se)}` : "/v2/comfygit/config";
    return n(je, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function Ne(z, Se) {
    try {
      const je = new URLSearchParams();
      return z && je.append("level", z), Se && je.append("lines", Se.toString()), n(`/v2/comfygit/debug/logs?${je}`);
    } catch {
      return [];
    }
  }
  async function Qe(z, Se) {
    try {
      const je = new URLSearchParams();
      return z && je.append("level", z), Se && je.append("lines", Se.toString()), n(`/v2/workspace/debug/logs?${je}`);
    } catch {
      return [];
    }
  }
  async function Fe() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function Ae() {
    return n("/v2/comfygit/debug/manifest");
  }
  async function Xe() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function kt(z, Se) {
    try {
      const je = new URLSearchParams();
      return z && je.append("level", z), Se && je.append("lines", Se.toString()), n(`/v2/workspace/debug/orchestrator-logs?${je}`);
    } catch {
      return [];
    }
  }
  async function Lt() {
    return n("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function Kt(z) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: z })
    });
  }
  async function X() {
    try {
      return n("/v2/comfygit/nodes");
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
  async function G(z) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(z)}/track-dev`, {
      method: "POST"
    });
  }
  async function fe(z) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(z)}/install`, {
      method: "POST"
    });
  }
  async function Je(z, Se) {
    var Al, zl, Fl, Vl;
    const je = Sm(), wt = xm(), et = {
      id: z.id,
      version: z.version || z.selected_version || "latest",
      selected_version: z.selected_version || "latest",
      mode: z.mode || "remote",
      channel: z.channel || "default"
    };
    z.install_source && (et.install_source = z.install_source), z.install_source === "git" && z.repository && (et.repository = z.repository), await n("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: et,
        ui_id: je,
        client_id: wt
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", je, "for package:", z.id), Se != null && Se.beforeQueueStart && await Se.beforeQueueStart(je), await n("/v2/manager/queue/start", {
      method: "POST"
    });
    const Ts = await n("/v2/manager/queue/history"), ls = (Al = Ts == null ? void 0 : Ts.history) == null ? void 0 : Al[je];
    if ((ls == null ? void 0 : ls.result) === "error" || ((zl = ls == null ? void 0 : ls.status) == null ? void 0 : zl.status_str) === "error") {
      const Wc = ((Vl = (Fl = ls.status) == null ? void 0 : Fl.messages) == null ? void 0 : Vl[0]) || `Failed to install ${z.id}`;
      throw new al(Wc, 500, ls.status || {}, "/v2/manager/queue/start");
    }
    return {
      ui_id: je,
      result: ls == null ? void 0 : ls.result,
      status: ls == null ? void 0 : ls.status
    };
  }
  async function Ge(z) {
    return n("/v2/comfygit/nodes/dependency-preview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function it(z) {
    return n("/v2/comfygit/nodes/dependency-apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function Oe(z) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(z)}/update`, {
      method: "POST"
    });
  }
  async function rt(z, Se) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(z)}/criticality`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ criticality: Se })
    });
  }
  async function Pt(z) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function Jt() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function cs(z, Se) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: z, url: Se })
    });
  }
  async function Ft(z) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function K(z, Se, je) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(z)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: Se, push_url: je })
    });
  }
  async function re(z, Se) {
    const je = {};
    return Se && (je["X-Git-Auth-Token"] = Se), n(`/v2/comfygit/remotes/${encodeURIComponent(z)}/fetch`, {
      method: "POST",
      headers: je
    });
  }
  async function Re(z) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(z)}/status`);
    } catch {
      return null;
    }
  }
  async function $e(z = "skip", Se = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: z,
        remove_extra_nodes: Se
      })
    });
  }
  async function qe(z, Se) {
    const je = Se ? `/v2/comfygit/remotes/${encodeURIComponent(z)}/pull-preview?branch=${encodeURIComponent(Se)}` : `/v2/comfygit/remotes/${encodeURIComponent(z)}/pull-preview`;
    return n(je);
  }
  async function Ze(z, Se = {}) {
    const je = { "Content-Type": "application/json" };
    return Se.authToken && (je["X-Git-Auth-Token"] = Se.authToken), n(`/v2/comfygit/remotes/${encodeURIComponent(z)}/pull`, {
      method: "POST",
      headers: je,
      body: JSON.stringify({
        model_strategy: Se.modelStrategy || "skip",
        force: Se.force || !1,
        resolutions: Se.resolutions
      })
    });
  }
  async function lt(z, Se) {
    const je = Se ? `/v2/comfygit/remotes/${encodeURIComponent(z)}/push-preview?branch=${encodeURIComponent(Se)}` : `/v2/comfygit/remotes/${encodeURIComponent(z)}/push-preview`;
    return n(je);
  }
  async function ft(z, Se = {}) {
    const je = { "Content-Type": "application/json" };
    return Se.authToken && (je["X-Git-Auth-Token"] = Se.authToken), n(`/v2/comfygit/remotes/${encodeURIComponent(z)}/push`, {
      method: "POST",
      headers: je,
      body: JSON.stringify({ force: Se.force || !1 })
    });
  }
  async function It(z, Se) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(z)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: Se })
    });
  }
  async function ht(z) {
    const Se = {
      success: 0,
      failed: []
    };
    for (const je of z)
      try {
        await pe(je), Se.success++;
      } catch (wt) {
        Se.failed.push({
          name: je,
          error: wt instanceof Error ? wt.message : "Unknown error"
        });
      }
    return Se;
  }
  async function Y(z) {
    const Se = new FormData();
    Se.append("file", z);
    const je = await qs("/v2/workspace/import/preview", {
      method: "POST",
      body: Se
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!je.ok) {
      const wt = await je.json().catch(() => ({}));
      throw new Error(wt.error || `Preview failed: ${je.status}`);
    }
    return je.json();
  }
  async function U(z) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(z)}`
    );
  }
  async function oe(z, Se, je, wt) {
    const et = new FormData();
    et.append("file", z), et.append("name", Se), et.append("model_strategy", je), et.append("torch_backend", wt);
    const en = await qs("/v2/workspace/import", {
      method: "POST",
      body: et
    });
    if (!en.ok) {
      const Ts = await en.json().catch(() => ({}));
      throw new Error(Ts.message || Ts.error || `Import failed: ${en.status}`);
    }
    return en.json();
  }
  async function He() {
    return n("/v2/workspace/import/status");
  }
  async function tt(z) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: z })
    });
  }
  async function yt(z, Se, je, wt) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: z,
        name: Se,
        model_strategy: je,
        torch_backend: wt
      })
    });
  }
  async function ks() {
    return n("/v2/setup/status");
  }
  async function Vt() {
    return n("/v2/comfygit/update-check");
  }
  async function bs() {
    return n("/v2/comfygit/update", { method: "POST" });
  }
  async function dt(z) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function Xs() {
    return n("/v2/setup/initialize_status");
  }
  async function Ut(z) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function Kn() {
    return n("/v2/comfygit/deploy/summary");
  }
  async function fs() {
    return n("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function dn(z, Se) {
    return n("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: z, save_key: Se })
    });
  }
  async function $a() {
    return n("/v2/comfygit/deploy/runpod/volumes");
  }
  async function Ca(z) {
    const Se = z ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(z)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return n(Se);
  }
  async function xa(z) {
    return n("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function Sa() {
    return n("/v2/comfygit/deploy/runpod/pods");
  }
  async function Ia(z) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function Ea(z) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}/stop`, {
      method: "POST"
    });
  }
  async function Ta(z) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}/start`, {
      method: "POST"
    });
  }
  async function Ma(z) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}/status`);
  }
  async function Ro(z) {
    return n("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: z })
    });
  }
  async function Pa(z = !1) {
    return n(z ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function Ra() {
    return n("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Do() {
    return n("/v2/comfygit/deploy/custom/workers");
  }
  async function ie(z) {
    return n("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function q(z) {
    return n(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function Ye(z) {
    return n("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function nt() {
    return n("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function gt(z) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/info`);
  }
  async function xt(z) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances`);
  }
  async function Bt(z, Se) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Se)
    });
  }
  async function vs(z, Se) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances/${encodeURIComponent(Se)}/start`, {
      method: "POST"
    });
  }
  async function Jn(z, Se) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances/${encodeURIComponent(Se)}/stop`, {
      method: "POST"
    });
  }
  async function Zs(z, Se) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances/${encodeURIComponent(Se)}`, {
      method: "DELETE"
    });
  }
  async function No(z) {
    return n("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: z })
    });
  }
  return {
    isLoading: e,
    error: t,
    getStatus: p,
    commit: w,
    getHistory: g,
    getBranchHistory: k,
    exportEnv: $,
    validateExport: S,
    validateDeploy: C,
    exportEnvWithForce: I,
    validateEnvironmentExport: E,
    exportEnvironmentWithForce: P,
    // Git Operations
    getBranches: D,
    getCommitDetail: A,
    checkout: V,
    createBranch: N,
    switchBranch: j,
    deleteBranch: le,
    // Environment Management
    listEnvironments: ce,
    getEnvironments: Q,
    getEnvironmentDetails: ve,
    switchEnvironment: J,
    getSwitchProgress: L,
    createEnvironment: F,
    getCreateProgress: ue,
    getComfyUIReleases: te,
    deleteEnvironment: me,
    // Workflow Management
    getWorkflows: de,
    getWorkflowDetails: W,
    getWorkflowContract: se,
    saveWorkflowContract: ne,
    deleteWorkflowContract: Me,
    resolveWorkflow: pe,
    installWorkflowDeps: ze,
    setModelImportance: Le,
    // Model Management
    getEnvironmentModels: ke,
    getWorkspaceModels: De,
    getModelDetails: ge,
    getModelSourceCandidates: we,
    computeModelHashes: T,
    getWorkflowSourceCandidates: O,
    openFileLocation: ae,
    addModelSource: Ie,
    removeModelSource: Ce,
    deleteModel: be,
    downloadModel: ee,
    scanWorkspaceModels: H,
    getModelsDirectory: he,
    setModelsDirectory: _e,
    getHuggingFaceRepoInfo: Ke,
    getModelsSubdirectories: We,
    searchHuggingFaceRepos: xe,
    // Settings
    getConfig: Z,
    updateConfig: Ve,
    // Cloud Auth
    getCloudAuthConfig: a,
    loginToCloud: l,
    signupToCloud: r,
    getCloudMe: c,
    logoutFromCloud: u,
    getCloudEnvironments: d,
    getCloudEnvironmentRevisions: f,
    publishCurrentEnvironmentToCloud: v,
    // Debug/Logs
    getEnvironmentLogs: Ne,
    getEnvironmentManifest: Ae,
    getWorkspaceLogs: Qe,
    getEnvironmentLogPath: Fe,
    getWorkspaceLogPath: Xe,
    getOrchestratorLogs: kt,
    getOrchestratorLogPath: Lt,
    openFile: Kt,
    // Node Management
    getNodes: X,
    trackNodeAsDev: G,
    installNode: fe,
    queueNodeInstall: Je,
    previewNodeDependencyChanges: Ge,
    applyReviewedNodeDependencyChanges: it,
    updateNode: Oe,
    updateNodeCriticality: rt,
    uninstallNode: Pt,
    // Git Remotes
    getRemotes: Jt,
    addRemote: cs,
    removeRemote: Ft,
    updateRemoteUrl: K,
    fetchRemote: re,
    getRemoteSyncStatus: Re,
    // Push/Pull
    getPullPreview: qe,
    pullFromRemote: Ze,
    getPushPreview: lt,
    pushToRemote: ft,
    validateMerge: It,
    // Environment Sync
    syncEnvironmentManually: $e,
    // Workflow Repair
    repairWorkflowModels: ht,
    // Import Operations
    previewTarballImport: Y,
    previewGitImport: tt,
    validateEnvironmentName: U,
    executeImport: oe,
    executeGitImport: yt,
    getImportProgress: He,
    // First-Time Setup
    getSetupStatus: ks,
    // Manager Update Notice
    getUpdateCheck: Vt,
    updateManager: bs,
    initializeWorkspace: dt,
    getInitializeProgress: Xs,
    validatePath: Ut,
    // Deploy Operations
    getDeploySummary: Kn,
    getDataCenters: fs,
    testRunPodConnection: dn,
    getNetworkVolumes: $a,
    getRunPodGpuTypes: Ca,
    deployToRunPod: xa,
    getRunPodPods: Sa,
    terminateRunPodPod: Ia,
    stopRunPodPod: Ea,
    startRunPodPod: Ta,
    getDeploymentStatus: Ma,
    exportDeployPackage: Ro,
    getStoredRunPodKey: Pa,
    clearRunPodKey: Ra,
    // Custom Worker Operations
    getCustomWorkers: Do,
    addCustomWorker: ie,
    removeCustomWorker: q,
    testWorkerConnection: Ye,
    scanForWorkers: nt,
    getWorkerSystemInfo: gt,
    getWorkerInstances: xt,
    deployToWorker: Bt,
    startWorkerInstance: vs,
    stopWorkerInstance: Jn,
    terminateWorkerInstance: Zs,
    // Git Authentication
    testGitAuth: No
  };
}
const Im = { class: "panel-layout" }, Em = {
  key: 0,
  class: "panel-layout-header"
}, Tm = {
  key: 1,
  class: "panel-layout-search"
}, Mm = { class: "panel-layout-content" }, Pm = {
  key: 2,
  class: "panel-layout-footer"
}, Rm = /* @__PURE__ */ Ee({
  __name: "PanelLayout",
  setup(e) {
    return (t, n) => (o(), i("div", Im, [
      t.$slots.header ? (o(), i("div", Em, [
        ct(t.$slots, "header", {}, void 0)
      ])) : y("", !0),
      t.$slots.search ? (o(), i("div", Tm, [
        ct(t.$slots, "search", {}, void 0)
      ])) : y("", !0),
      s("div", Mm, [
        ct(t.$slots, "content", {}, void 0)
      ]),
      t.$slots.footer ? (o(), i("div", Pm, [
        ct(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Te = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t)
    n[a] = l;
  return n;
}, Ht = /* @__PURE__ */ Te(Rm, [["__scopeId", "data-v-21565df9"]]), Dm = {
  key: 0,
  class: "panel-title-prefix"
}, Nm = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Lm = /* @__PURE__ */ Ee({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (t, n) => (o(), R(Cl(`h${e.level}`), {
      class: Be(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (o(), i("span", Dm, m(e.prefix), 1)) : (o(), i("span", Nm)),
        ct(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Um = /* @__PURE__ */ Te(Lm, [["__scopeId", "data-v-c3875efc"]]), Om = ["title"], Am = ["width", "height"], zm = /* @__PURE__ */ Ee({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => (o(), i("button", {
      class: "info-button",
      title: e.title,
      onClick: n[0] || (n[0] = (a) => t.$emit("click"))
    }, [
      (o(), i("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...n[1] || (n[1] = [
        s("circle", {
          cx: "8",
          cy: "8",
          r: "7",
          stroke: "currentColor",
          "stroke-width": "1.5",
          fill: "none"
        }, null, -1),
        s("text", {
          x: "8",
          y: "11",
          "text-anchor": "middle",
          "font-size": "10",
          "font-weight": "bold",
          fill: "currentColor"
        }, "i", -1)
      ])], 8, Am))
    ], 8, Om));
  }
}), ic = /* @__PURE__ */ Te(zm, [["__scopeId", "data-v-6fc7f16d"]]), Fm = { class: "header-left" }, Vm = {
  key: 0,
  class: "header-actions"
}, Bm = /* @__PURE__ */ Ee({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (t, n) => (o(), i("div", {
      class: Be(["panel-header", { stacked: e.stacked }])
    }, [
      s("div", Fm, [
        b(Um, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            x(m(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (o(), R(ic, {
          key: 0,
          onClick: n[0] || (n[0] = (a) => t.$emit("info-click"))
        })) : y("", !0)
      ]),
      t.$slots.actions ? (o(), i("div", Vm, [
        ct(t.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), qt = /* @__PURE__ */ Te(Bm, [["__scopeId", "data-v-55a62cd6"]]), Wm = {
  key: 0,
  class: "section-title-count"
}, Gm = {
  key: 1,
  class: "section-title-icon"
}, jm = /* @__PURE__ */ Ee({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => (o(), R(Cl(`h${e.level}`), {
      class: Be(["section-title", { clickable: e.clickable }]),
      onClick: n[0] || (n[0] = (a) => e.clickable && t.$emit("click"))
    }, {
      default: h(() => [
        ct(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), i("span", Wm, "(" + m(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (o(), i("span", Gm, m(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), gs = /* @__PURE__ */ Te(jm, [["__scopeId", "data-v-559361eb"]]), Hm = { class: "status-grid" }, qm = { class: "status-grid__columns" }, Km = { class: "status-grid__column" }, Jm = { class: "status-grid__title" }, Qm = { class: "status-grid__column status-grid__column--right" }, Ym = { class: "status-grid__title" }, Xm = {
  key: 0,
  class: "status-grid__footer"
}, Zm = /* @__PURE__ */ Ee({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (t, n) => (o(), i("div", Hm, [
      s("div", qm, [
        s("div", Km, [
          s("h4", Jm, m(e.leftTitle), 1),
          ct(t.$slots, "left", {}, void 0)
        ]),
        s("div", Qm, [
          s("h4", Ym, m(e.rightTitle), 1),
          ct(t.$slots, "right", {}, void 0)
        ])
      ]),
      t.$slots.footer ? (o(), i("div", Xm, [
        ct(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), ef = /* @__PURE__ */ Te(Zm, [["__scopeId", "data-v-73b7ba3f"]]), tf = {
  key: 0,
  class: "status-item__icon"
}, sf = {
  key: 1,
  class: "status-item__count"
}, nf = { class: "status-item__label" }, of = /* @__PURE__ */ Ee({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = M(() => `status-item--${t.variant}`);
    return (a, l) => (o(), i("div", {
      class: Be(["status-item", n.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (o(), i("span", tf, m(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (o(), i("span", sf, m(e.count), 1)) : y("", !0),
      s("span", nf, m(e.label), 1)
    ], 2));
  }
}), Ps = /* @__PURE__ */ Te(of, [["__scopeId", "data-v-6f929183"]]), af = { class: "issue-card__header" }, lf = { class: "issue-card__icon" }, rf = { class: "issue-card__title" }, cf = {
  key: 0,
  class: "issue-card__content"
}, uf = {
  key: 0,
  class: "issue-card__description"
}, df = {
  key: 1,
  class: "issue-card__items"
}, mf = {
  key: 2,
  class: "issue-card__actions"
}, ff = /* @__PURE__ */ Ee({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const t = e, n = M(() => `issue-card--${t.severity}`);
    return (a, l) => (o(), i("div", {
      class: Be(["issue-card", n.value])
    }, [
      s("div", af, [
        s("span", lf, m(e.icon), 1),
        s("h4", rf, m(e.title), 1)
      ]),
      a.$slots.default || e.description ? (o(), i("div", cf, [
        e.description ? (o(), i("p", uf, m(e.description), 1)) : y("", !0),
        ct(a.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (o(), i("div", df, [
        (o(!0), i(B, null, ye(e.items, (r, c) => (o(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = s("span", { class: "issue-card__bullet" }, "•", -1)),
          s("span", null, m(r), 1)
        ]))), 128))
      ])) : y("", !0),
      a.$slots.actions ? (o(), i("div", mf, [
        ct(a.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), us = /* @__PURE__ */ Te(ff, [["__scopeId", "data-v-df6aa348"]]), vf = ["type", "disabled"], pf = {
  key: 0,
  class: "spinner"
}, gf = /* @__PURE__ */ Ee({
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
    return (t, n) => (o(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Be(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: n[0] || (n[0] = (a) => t.$emit("click", a))
    }, [
      e.loading ? (o(), i("span", pf)) : y("", !0),
      e.loading ? y("", !0) : ct(t.$slots, "default", { key: 1 }, void 0)
    ], 10, vf));
  }
}), Pe = /* @__PURE__ */ Te(gf, [["__scopeId", "data-v-772abe47"]]), hf = /* @__PURE__ */ Ee({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (t, n) => (o(), i("span", {
      class: Be(["detail-label"]),
      style: zt({ minWidth: e.minWidth })
    }, [
      ct(t.$slots, "default", {}, void 0)
    ], 4));
  }
}), Jo = /* @__PURE__ */ Te(hf, [["__scopeId", "data-v-75e9eeb8"]]), yf = /* @__PURE__ */ Ee({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, n) => (o(), i("span", {
      class: Be(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      ct(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), ll = /* @__PURE__ */ Te(yf, [["__scopeId", "data-v-2f186e4c"]]), wf = { class: "detail-row" }, _f = /* @__PURE__ */ Ee({
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
    return (t, n) => (o(), i("div", wf, [
      b(Jo, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          x(m(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (o(), R(ll, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: h(() => [
          x(m(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ct(t.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), Tt = /* @__PURE__ */ Te(_f, [["__scopeId", "data-v-ef15664a"]]), kf = { class: "modal-header" }, bf = { class: "modal-body" }, $f = { class: "status-section" }, Cf = {
  key: 0,
  class: "status-section"
}, xf = { class: "section-header-row" }, Sf = {
  key: 0,
  class: "workflow-group"
}, If = { class: "workflow-group-header" }, Ef = { class: "workflow-group-title" }, Tf = { class: "workflow-list" }, Mf = { class: "workflow-name" }, Pf = { class: "workflow-issue" }, Rf = {
  key: 1,
  class: "workflow-group"
}, Df = { class: "workflow-group-header" }, Nf = { class: "workflow-group-title" }, Lf = { class: "workflow-list" }, Uf = { class: "workflow-name" }, Of = { class: "workflow-issue" }, Af = {
  key: 2,
  class: "workflow-group"
}, zf = { class: "workflow-group-header" }, Ff = { class: "workflow-group-title" }, Vf = { class: "workflow-list" }, Bf = { class: "workflow-name" }, Wf = {
  key: 3,
  class: "workflow-group"
}, Gf = { class: "workflow-group-header" }, jf = { class: "workflow-group-title" }, Hf = { class: "workflow-list" }, qf = { class: "workflow-name" }, Kf = {
  key: 4,
  class: "workflow-group"
}, Jf = { class: "workflow-group-header" }, Qf = { class: "workflow-group-title" }, Yf = { class: "workflow-list" }, Xf = { class: "workflow-name" }, Zf = {
  key: 5,
  class: "workflow-group"
}, ev = { class: "workflow-group-title" }, tv = { class: "expand-icon" }, sv = {
  key: 0,
  class: "workflow-list"
}, nv = { class: "workflow-name" }, ov = {
  key: 1,
  class: "status-section"
}, av = {
  key: 0,
  class: "change-group"
}, lv = { class: "change-group-header" }, iv = { class: "change-group-title" }, rv = { class: "change-list" }, cv = { class: "node-name" }, uv = {
  key: 0,
  class: "dev-badge"
}, dv = {
  key: 1,
  class: "change-group"
}, mv = { class: "change-group-header" }, fv = { class: "change-group-title" }, vv = { class: "change-list" }, pv = { class: "node-name" }, gv = {
  key: 0,
  class: "dev-badge"
}, hv = {
  key: 2,
  class: "change-group"
}, yv = { class: "change-list" }, wv = { class: "change-item" }, _v = { class: "node-name" }, kv = {
  key: 3,
  class: "change-group"
}, bv = {
  key: 2,
  class: "status-section"
}, $v = { class: "section-header-row" }, Cv = {
  key: 0,
  class: "drift-item"
}, xv = { class: "drift-list" }, Sv = {
  key: 0,
  class: "drift-list-more"
}, Iv = {
  key: 1,
  class: "drift-item"
}, Ev = { class: "drift-list" }, Tv = {
  key: 0,
  class: "drift-list-more"
}, Mv = {
  key: 2,
  class: "drift-item"
}, Pv = { class: "drift-list" }, Rv = { class: "version-actual" }, Dv = { class: "version-expected" }, Nv = {
  key: 0,
  class: "drift-list-more"
}, Lv = {
  key: 3,
  class: "drift-item"
}, Uv = { class: "repair-action" }, Ov = {
  key: 3,
  class: "status-section"
}, Av = { class: "info-box" }, zv = { class: "drift-list" }, Fv = {
  key: 0,
  class: "drift-list-more"
}, Vv = {
  key: 4,
  class: "status-section"
}, Bv = { class: "warning-box" }, Wv = {
  key: 5,
  class: "empty-state-inline"
}, Gv = { class: "modal-actions" }, jv = /* @__PURE__ */ Ee({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const t = e, n = _(!1);
    ut(() => {
      console.log("StatusDetailModal mounted, initial show value:", t.show);
    }), $t(() => t.show, (w, g) => {
      console.log("StatusDetailModal show prop changed from", g, "to", w);
    }, { immediate: !0 });
    const a = M(() => {
      var w, g, k;
      return ((k = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : k.filter(
        ($) => $.status === "broken" && $.sync_state === "synced"
      )) || [];
    }), l = M(() => {
      var w, g, k;
      return ((k = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : k.filter(
        ($) => $.status === "broken" && $.sync_state !== "synced"
      )) || [];
    }), r = M(() => {
      var w, g, k;
      return ((k = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.synced) == null ? void 0 : k.filter(($) => {
        var C, I, E;
        const S = (E = (I = (C = t.status) == null ? void 0 : C.workflows) == null ? void 0 : I.analyzed) == null ? void 0 : E.find((P) => P.name === $);
        return !S || S.status !== "broken";
      })) || [];
    }), c = M(() => {
      var w, g, k, $, S;
      return (w = t.status) != null && w.workflows ? (((g = t.status.workflows.new) == null ? void 0 : g.length) ?? 0) > 0 || (((k = t.status.workflows.modified) == null ? void 0 : k.length) ?? 0) > 0 || ((($ = t.status.workflows.deleted) == null ? void 0 : $.length) ?? 0) > 0 || (((S = t.status.workflows.synced) == null ? void 0 : S.length) ?? 0) > 0 : !1;
    }), u = M(() => {
      var g, k, $;
      const w = (g = t.status) == null ? void 0 : g.git_changes;
      return w ? (((k = w.nodes_added) == null ? void 0 : k.length) ?? 0) > 0 || ((($ = w.nodes_removed) == null ? void 0 : $.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = M(() => {
      var w, g, k, $, S, C;
      return !c.value && !u.value && ((g = (w = t.status) == null ? void 0 : w.comparison) == null ? void 0 : g.is_synced) && (((k = t.status) == null ? void 0 : k.missing_models_count) ?? 0) === 0 && (((C = (S = ($ = t.status) == null ? void 0 : $.comparison) == null ? void 0 : S.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), f = M(() => {
      var g, k;
      const w = (k = (g = t.status) == null ? void 0 : g.git_changes) == null ? void 0 : k.workflow_changes;
      return w ? typeof w == "number" ? w : Object.keys(w).length : 0;
    });
    function v(w) {
      return typeof w == "string" ? w : w.name;
    }
    function p(w) {
      return typeof w == "object" && w.is_development === !0;
    }
    return (w, g) => {
      var k, $, S, C, I, E, P, D, A, V, N, j, le, ce, Q, ve, J, L, F, ue, te, me;
      return o(), R(as, { to: "body" }, [
        e.show ? (o(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: g[7] || (g[7] = (de) => w.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: g[6] || (g[6] = bt(() => {
            }, ["stop"]))
          }, [
            s("div", kf, [
              g[8] || (g[8] = s("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              s("button", {
                class: "modal-close",
                onClick: g[0] || (g[0] = (de) => w.$emit("close"))
              }, "✕")
            ]),
            s("div", bf, [
              s("div", $f, [
                b(gs, { level: "4" }, {
                  default: h(() => [...g[9] || (g[9] = [
                    x("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                b(Tt, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (o(), i("div", Cf, [
                s("div", xf, [
                  b(gs, { level: "4" }, {
                    default: h(() => [...g[10] || (g[10] = [
                      x("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[1] || (g[1] = (de) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (o(), i("div", Sf, [
                  s("div", If, [
                    g[11] || (g[11] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", Ef, "BROKEN (COMMITTED) (" + m(a.value.length) + ")", 1)
                  ]),
                  s("div", Tf, [
                    (o(!0), i(B, null, ye(a.value, (de) => (o(), i("div", {
                      key: de.name,
                      class: "workflow-item"
                    }, [
                      s("span", Mf, m(de.name), 1),
                      s("span", Pf, m(de.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (o(), i("div", Rf, [
                  s("div", Df, [
                    g[12] || (g[12] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", Nf, "BROKEN (UNCOMMITTED) (" + m(l.value.length) + ")", 1)
                  ]),
                  s("div", Lf, [
                    (o(!0), i(B, null, ye(l.value, (de) => (o(), i("div", {
                      key: de.name,
                      class: "workflow-item"
                    }, [
                      s("span", Uf, m(de.name), 1),
                      s("span", Of, m(de.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                ($ = (k = e.status.workflows) == null ? void 0 : k.new) != null && $.length ? (o(), i("div", Af, [
                  s("div", zf, [
                    g[13] || (g[13] = s("span", { class: "workflow-status-icon new" }, "●", -1)),
                    s("span", Ff, "NEW (" + m(e.status.workflows.new.length) + ")", 1)
                  ]),
                  s("div", Vf, [
                    (o(!0), i(B, null, ye(e.status.workflows.new, (de) => (o(), i("div", {
                      key: de,
                      class: "workflow-item"
                    }, [
                      s("span", Bf, m(de), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (C = (S = e.status.workflows) == null ? void 0 : S.modified) != null && C.length ? (o(), i("div", Wf, [
                  s("div", Gf, [
                    g[14] || (g[14] = s("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    s("span", jf, "MODIFIED (" + m(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  s("div", Hf, [
                    (o(!0), i(B, null, ye(e.status.workflows.modified, (de) => (o(), i("div", {
                      key: de,
                      class: "workflow-item"
                    }, [
                      s("span", qf, m(de), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (E = (I = e.status.workflows) == null ? void 0 : I.deleted) != null && E.length ? (o(), i("div", Kf, [
                  s("div", Jf, [
                    g[15] || (g[15] = s("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    s("span", Qf, "DELETED (" + m(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  s("div", Yf, [
                    (o(!0), i(B, null, ye(e.status.workflows.deleted, (de) => (o(), i("div", {
                      key: de,
                      class: "workflow-item"
                    }, [
                      s("span", Xf, m(de), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (o(), i("div", Zf, [
                  s("div", {
                    class: "workflow-group-header clickable",
                    onClick: g[2] || (g[2] = (de) => n.value = !n.value)
                  }, [
                    g[16] || (g[16] = s("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    s("span", ev, "SYNCED (" + m(r.value.length) + ")", 1),
                    s("span", tv, m(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), i("div", sv, [
                    (o(!0), i(B, null, ye(r.value, (de) => (o(), i("div", {
                      key: de,
                      class: "workflow-item"
                    }, [
                      s("span", nv, m(de), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (o(), i("div", ov, [
                b(gs, { level: "4" }, {
                  default: h(() => [...g[17] || (g[17] = [
                    x("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (D = (P = e.status.git_changes) == null ? void 0 : P.nodes_added) != null && D.length ? (o(), i("div", av, [
                  s("div", lv, [
                    g[18] || (g[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", iv, "NODES ADDED (" + m(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", rv, [
                    (o(!0), i(B, null, ye(e.status.git_changes.nodes_added, (de) => (o(), i("div", {
                      key: v(de),
                      class: "change-item"
                    }, [
                      s("span", cv, m(v(de)), 1),
                      p(de) ? (o(), i("span", uv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (V = (A = e.status.git_changes) == null ? void 0 : A.nodes_removed) != null && V.length ? (o(), i("div", dv, [
                  s("div", mv, [
                    g[19] || (g[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", fv, "NODES REMOVED (" + m(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", vv, [
                    (o(!0), i(B, null, ye(e.status.git_changes.nodes_removed, (de) => (o(), i("div", {
                      key: v(de),
                      class: "change-item"
                    }, [
                      s("span", pv, m(v(de)), 1),
                      p(de) ? (o(), i("span", gv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (N = e.status.git_changes) != null && N.workflow_changes ? (o(), i("div", hv, [
                  g[20] || (g[20] = s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  s("div", yv, [
                    s("div", wv, [
                      s("span", _v, m(f.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (j = e.status.git_changes) != null && j.has_other_changes ? (o(), i("div", kv, [...g[21] || (g[21] = [
                  s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  s("div", { class: "change-list" }, [
                    s("div", { class: "change-item" }, [
                      s("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : y("", !0)
              ])) : y("", !0),
              (le = e.status.comparison) != null && le.is_synced ? y("", !0) : (o(), i("div", bv, [
                s("div", $v, [
                  b(gs, { level: "4" }, {
                    default: h(() => [...g[22] || (g[22] = [
                      x("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[3] || (g[3] = (de) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                g[26] || (g[26] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("span", null, "Environment needs repair")
                ], -1)),
                (Q = (ce = e.status.comparison) == null ? void 0 : ce.missing_nodes) != null && Q.length ? (o(), i("div", Cv, [
                  b(Tt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", xv, [
                    (o(!0), i(B, null, ye(e.status.comparison.missing_nodes.slice(0, 10), (de) => (o(), i("div", {
                      key: de,
                      class: "drift-list-item"
                    }, " - " + m(de), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (o(), i("div", Sv, " ... and " + m(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (J = (ve = e.status.comparison) == null ? void 0 : ve.extra_nodes) != null && J.length ? (o(), i("div", Iv, [
                  b(Tt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", Ev, [
                    (o(!0), i(B, null, ye(e.status.comparison.extra_nodes.slice(0, 10), (de) => (o(), i("div", {
                      key: de,
                      class: "drift-list-item"
                    }, " - " + m(de), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (o(), i("div", Tv, " ... and " + m(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (F = (L = e.status.comparison) == null ? void 0 : L.version_mismatches) != null && F.length ? (o(), i("div", Mv, [
                  b(Tt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", Pv, [
                    (o(!0), i(B, null, ye(e.status.comparison.version_mismatches.slice(0, 10), (de) => (o(), i("div", {
                      key: de.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      x(m(de.name) + ": ", 1),
                      s("span", Rv, m(de.actual), 1),
                      g[23] || (g[23] = x(" → ", -1)),
                      s("span", Dv, m(de.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (o(), i("div", Nv, " ... and " + m(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((ue = e.status.comparison) == null ? void 0 : ue.packages_in_sync) === !1 ? (o(), i("div", Lv, [
                  b(Tt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                s("div", Uv, [
                  b(Pe, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: g[4] || (g[4] = (de) => w.$emit("repair"))
                  }, {
                    default: h(() => [...g[24] || (g[24] = [
                      x(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  g[25] || (g[25] = s("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (me = (te = e.status.comparison) == null ? void 0 : te.disabled_nodes) != null && me.length ? (o(), i("div", Ov, [
                b(gs, { level: "4" }, {
                  default: h(() => [...g[27] || (g[27] = [
                    x("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                s("div", Av, [
                  g[28] || (g[28] = s("span", { class: "info-icon" }, "ℹ", -1)),
                  s("span", null, m(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                s("div", zv, [
                  (o(!0), i(B, null, ye(e.status.comparison.disabled_nodes.slice(0, 10), (de) => (o(), i("div", {
                    key: de,
                    class: "drift-list-item"
                  }, " • " + m(de), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (o(), i("div", Fv, " ... and " + m(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (o(), i("div", Vv, [
                b(gs, { level: "4" }, {
                  default: h(() => [...g[29] || (g[29] = [
                    x("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                s("div", Bv, [
                  g[30] || (g[30] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                g[31] || (g[31] = s("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (o(), i("div", Wv, [...g[32] || (g[32] = [
                s("div", { class: "empty-icon" }, "✅", -1),
                s("div", { class: "empty-message" }, [
                  s("strong", null, "Environment is clean!"),
                  s("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            s("div", Gv, [
              b(Pe, {
                variant: "secondary",
                onClick: g[5] || (g[5] = (de) => w.$emit("close"))
              }, {
                default: h(() => [...g[33] || (g[33] = [
                  x(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Hv = /* @__PURE__ */ Te(jv, [["__scopeId", "data-v-e2b37122"]]), qv = { class: "base-modal-header" }, Kv = {
  key: 0,
  class: "base-modal-title"
}, Jv = { class: "base-modal-body" }, Qv = {
  key: 0,
  class: "base-modal-loading"
}, Yv = {
  key: 1,
  class: "base-modal-error"
}, Xv = {
  key: 0,
  class: "base-modal-footer"
}, Zv = /* @__PURE__ */ Ee({
  __name: "BaseModal",
  props: {
    title: {},
    size: { default: "md" },
    showCloseButton: { type: Boolean, default: !0 },
    closeOnOverlayClick: { type: Boolean, default: !0 },
    loading: { type: Boolean, default: !1 },
    error: {},
    fixedHeight: { type: Boolean, default: !1 },
    overlayZIndex: { default: 10003 }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, a = t;
    function l() {
      n.closeOnOverlayClick && a("close");
    }
    function r(c) {
      c.key === "Escape" && n.showCloseButton && a("close");
    }
    return ut(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), Gn(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, u) => (o(), R(as, { to: "body" }, [
      s("div", {
        class: "base-modal-overlay",
        style: zt({ zIndex: e.overlayZIndex }),
        onClick: l
      }, [
        s("div", {
          class: Be(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = bt(() => {
          }, ["stop"]))
        }, [
          s("div", qv, [
            ct(c.$slots, "header", {}, () => [
              e.title ? (o(), i("h3", Kv, m(e.title), 1)) : y("", !0)
            ]),
            e.showCloseButton ? (o(), i("button", {
              key: 0,
              class: "base-modal-close",
              onClick: u[0] || (u[0] = (d) => c.$emit("close"))
            }, [...u[2] || (u[2] = [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : y("", !0)
          ]),
          s("div", Jv, [
            e.loading ? (o(), i("div", Qv, "Loading...")) : e.error ? (o(), i("div", Yv, m(e.error), 1)) : ct(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (o(), i("div", Xv, [
            ct(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ], 4)
    ]));
  }
}), Mt = /* @__PURE__ */ Te(Zv, [["__scopeId", "data-v-06a4be14"]]), ep = ["type", "disabled"], tp = {
  key: 0,
  class: "spinner"
}, sp = /* @__PURE__ */ Ee({
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
    return (t, n) => (o(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Be(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: n[0] || (n[0] = (a) => t.$emit("click", a))
    }, [
      e.loading ? (o(), i("span", tp)) : y("", !0),
      ct(t.$slots, "default", {}, void 0)
    ], 10, ep));
  }
}), Ue = /* @__PURE__ */ Te(sp, [["__scopeId", "data-v-f3452606"]]), np = ["type", "value", "placeholder", "disabled"], op = {
  key: 0,
  class: "base-input-error"
}, ap = /* @__PURE__ */ Ee({
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
    return (t, n) => (o(), i("div", {
      class: Be(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Be(["base-input", { error: !!e.error }]),
        onInput: n[0] || (n[0] = (a) => t.$emit("update:modelValue", a.target.value)),
        onKeyup: [
          n[1] || (n[1] = Cs((a) => t.$emit("enter"), ["enter"])),
          n[2] || (n[2] = Cs((a) => t.$emit("escape"), ["escape"]))
        ]
      }, null, 42, np),
      e.error ? (o(), i("span", op, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Rt = /* @__PURE__ */ Te(ap, [["__scopeId", "data-v-9ba02cdc"]]), lp = ["disabled"], ip = { class: "dropdown-value" }, rp = ["onClick"], cp = {
  key: 0,
  class: "dropdown-error"
}, up = /* @__PURE__ */ Ee({
  __name: "BaseDropdown",
  props: {
    modelValue: {},
    options: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    error: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(!1), r = _(null), c = _(null), u = _({});
    function d(C) {
      return typeof C == "string" ? C : C.value;
    }
    function f(C) {
      return typeof C == "string" ? C : C.label;
    }
    const v = M(() => {
      if (!n.modelValue && n.placeholder)
        return n.placeholder;
      const C = n.options.find((I) => d(I) === n.modelValue);
      return C ? f(C) : String(n.modelValue);
    });
    function p() {
      n.disabled || (l.value = !l.value);
    }
    function w() {
      l.value = !1;
    }
    function g(C) {
      a("update:modelValue", d(C)), w();
    }
    function k() {
      if (!r.value) return;
      const C = r.value.getBoundingClientRect(), I = window.innerHeight, E = I - C.bottom, P = C.top, D = Math.min(300, n.options.length * 36 + 8), A = E < D && P > E;
      u.value = {
        position: "fixed",
        left: `${C.left}px`,
        width: `${C.width}px`,
        maxHeight: "300px",
        ...A ? { bottom: `${I - C.top + 4}px` } : { top: `${C.bottom + 4}px` }
      };
    }
    $t(l, async (C) => {
      C && (await Gt(), k());
    });
    function $() {
      l.value && k();
    }
    function S(C) {
      C.key === "Escape" && l.value && w();
    }
    return ut(() => {
      window.addEventListener("scroll", $, !0), window.addEventListener("keydown", S);
    }), Gn(() => {
      window.removeEventListener("scroll", $, !0), window.removeEventListener("keydown", S);
    }), (C, I) => (o(), i("div", {
      class: "base-dropdown",
      ref_key: "dropdownRef",
      ref: r
    }, [
      s("button", {
        type: "button",
        class: Be(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: p
      }, [
        s("span", ip, m(v.value), 1),
        I[0] || (I[0] = s("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, lp),
      (o(), R(as, { to: "body" }, [
        l.value ? (o(), i("div", {
          key: 0,
          class: "dropdown-overlay",
          onClick: w
        })) : y("", !0),
        l.value ? (o(), i("div", {
          key: 1,
          ref_key: "menuRef",
          ref: c,
          class: "dropdown-menu",
          style: zt(u.value)
        }, [
          (o(!0), i(B, null, ye(e.options, (E) => (o(), i("div", {
            key: d(E),
            class: Be(["dropdown-option", { selected: d(E) === e.modelValue }]),
            onClick: (P) => g(E)
          }, m(f(E)), 11, rp))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (o(), i("span", cp, m(e.error), 1)) : y("", !0)
    ], 512));
  }
}), dp = /* @__PURE__ */ Te(up, [["__scopeId", "data-v-857e085b"]]), mp = { class: "destination-section" }, fp = { class: "section-label" }, vp = { class: "destination-row" }, pp = {
  key: 0,
  class: "path-separator"
}, gp = /* @__PURE__ */ Ee({
  __name: "DownloadDestinationPicker",
  props: {
    modelValue: {},
    label: { default: "Download Destination" },
    suggestedDirectory: { default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getModelsSubdirectories: l } = mt(), r = _(""), c = _(""), u = _(""), d = _([]), f = _(!1);
    let v = !1;
    const p = M(() => {
      const $ = d.value.map((S) => ({
        label: S,
        value: S
      }));
      return $.push({ label: "Custom path...", value: "__custom__" }), $;
    }), w = M(() => r.value === "__custom__" ? u.value.trim() : r.value ? c.value.trim() ? `${r.value}/${c.value.trim()}` : r.value : "");
    function g() {
      if (f.value || !n.suggestedDirectory) return;
      const $ = d.value.find(
        (S) => {
          var C;
          return S.toLowerCase() === ((C = n.suggestedDirectory) == null ? void 0 : C.toLowerCase());
        }
      );
      $ && $ !== r.value && (v = !0, r.value = $, Gt(() => {
        v = !1;
      }));
    }
    async function k() {
      try {
        const $ = await l();
        d.value = $.directories, $.directories.length > 0 && !r.value && (r.value = $.directories[0]);
      } catch {
        d.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], r.value || (r.value = "checkpoints");
      }
    }
    return $t(w, ($) => {
      a("update:modelValue", $);
    }, { immediate: !0 }), $t(() => n.suggestedDirectory, g), $t(d, g), $t(r, ($, S) => {
      v || S === "" || (f.value = !0);
    }), ut(k), ($, S) => (o(), i("div", mp, [
      s("h4", fp, m(e.label), 1),
      s("div", vp, [
        b(dp, {
          modelValue: r.value,
          "onUpdate:modelValue": S[0] || (S[0] = (C) => r.value = C),
          options: p.value,
          placeholder: "Select directory...",
          class: "dest-select"
        }, null, 8, ["modelValue", "options"]),
        r.value !== "__custom__" ? (o(), i("span", pp, "/")) : y("", !0),
        r.value !== "__custom__" ? (o(), R(Rt, {
          key: 1,
          modelValue: c.value,
          "onUpdate:modelValue": S[1] || (S[1] = (C) => c.value = C),
          placeholder: "subfolder (optional)",
          class: "dest-subfolder"
        }, null, 8, ["modelValue"])) : y("", !0)
      ]),
      r.value === "__custom__" ? (o(), R(Rt, {
        key: 0,
        modelValue: u.value,
        "onUpdate:modelValue": S[2] || (S[2] = (C) => u.value = C),
        placeholder: "Enter directory relative to models folder...",
        class: "dest-custom",
        "full-width": ""
      }, null, 8, ["modelValue"])) : y("", !0)
    ]));
  }
}), rc = /* @__PURE__ */ Te(gp, [["__scopeId", "data-v-2fbc2b02"]]);
function hp(e) {
  const t = e.toLowerCase();
  return t === "huggingface.co" || t.endsWith(".huggingface.co") || t === "hf.co";
}
function yp(e) {
  const t = e.trim();
  if (!t) return { kind: "unknown" };
  let n;
  try {
    n = new URL(t);
  } catch {
    return { kind: "unknown" };
  }
  if (!hp(n.hostname)) return { kind: "unknown" };
  const a = n.pathname.replace(/^\/+/, "").split("/").filter(Boolean);
  if (a[0] === "datasets" || a[0] === "spaces") return { kind: "unknown" };
  if (a.length < 2) return { kind: "unknown" };
  const l = `${a[0]}/${a[1]}`, r = a.slice(2);
  if (r.length === 0)
    return { kind: "repo", repoId: l, revision: "main" };
  const c = r[0];
  if (c === "tree") {
    const u = r[1] || "main", d = r.slice(2).join("/");
    return { kind: "repo", repoId: l, revision: u, path: d || void 0 };
  }
  if (c === "resolve") {
    const u = r[1] || "main", d = r.slice(2).join("/");
    return d ? { kind: "file", repoId: l, revision: u, path: d } : { kind: "repo", repoId: l, revision: u };
  }
  if (c === "blob") {
    const u = r[1] || "main", d = r.slice(2).join("/");
    return d ? { kind: "file", repoId: l, revision: u, path: d } : { kind: "repo", repoId: l, revision: u };
  }
  return { kind: "repo", repoId: l, revision: "main" };
}
function wp(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function Pi(e, t, n) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(t)}/${wp(n)}`;
}
const _p = { class: "hf-file-browser" }, kp = { class: "browser-header" }, bp = { class: "repo-info" }, $p = { class: "repo-id" }, Cp = {
  key: 0,
  class: "revision-pill"
}, xp = {
  key: 0,
  class: "loading-state"
}, Sp = {
  key: 1,
  class: "error-state"
}, Ip = { class: "toolbar" }, Ep = { class: "toolbar-actions" }, Tp = { class: "file-list-container" }, Mp = {
  key: 0,
  class: "file-list-header"
}, Pp = ["checked", "indeterminate"], Rp = {
  key: 1,
  class: "file-checkbox-spacer"
}, Dp = { class: "sort-indicator" }, Np = { class: "sort-indicator" }, Lp = {
  key: 1,
  class: "empty-state"
}, Up = {
  key: 2,
  class: "file-list"
}, Op = ["onClick"], Ap = ["checked", "onChange"], zp = { class: "file-path" }, Fp = { class: "file-size" }, Vp = { class: "action-bar" }, Bp = { class: "summary-info" }, Wp = { class: "summary-count" }, Gp = { class: "summary-size" }, jp = /* @__PURE__ */ Ee({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {},
    mode: {},
    actionLabel: {}
  },
  emits: ["queue", "selectSource", "back"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getHuggingFaceRepoInfo: l } = mt(), r = _([]), c = _(/* @__PURE__ */ new Set()), u = _(!1), d = _(null), f = _(""), v = _(!1), p = _("name"), w = _(!0), g = _(""), k = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, $ = M(() => {
      let ne = r.value;
      if (n.initialPath) {
        const Me = n.initialPath.endsWith("/") ? n.initialPath : `${n.initialPath}/`;
        ne = ne.filter((pe) => pe.path.startsWith(Me) || pe.path === n.initialPath);
      }
      if (v.value && (ne = ne.filter((Me) => Me.is_model_file)), f.value.trim()) {
        const Me = f.value.toLowerCase();
        ne = ne.filter((pe) => pe.path.toLowerCase().includes(Me));
      }
      return ne;
    }), S = M(() => {
      const ne = [...$.value];
      return ne.sort((Me, pe) => {
        let ze;
        return p.value === "name" ? ze = Me.path.localeCompare(pe.path) : ze = Me.size - pe.size, w.value ? ze : -ze;
      }), ne;
    }), C = M(() => $.value.length === 0 ? !1 : $.value.every((ne) => c.value.has(ne.path))), I = M(() => $.value.some((ne) => c.value.has(ne.path))), E = M(() => g.value.trim().length > 0), P = M(() => {
      let ne = 0;
      for (const Me of c.value) {
        const pe = r.value.find((ze) => ze.path === Me);
        pe && (ne += pe.size);
      }
      return ne;
    }), D = M(() => {
      if (c.value.size === 0) return null;
      const ne = /* @__PURE__ */ new Set();
      for (const Me of c.value) {
        const pe = ue(Me);
        pe && ne.add(pe.toLowerCase());
      }
      return ne.size !== 1 ? null : [...ne][0];
    }), A = M(() => n.mode || "download"), V = M(() => n.actionLabel || (A.value === "source" ? "Use as Source" : "Queue Download")), N = M(() => A.value === "source" ? c.value.size === 1 ? "1 file selected" : `${c.value.size} files selected` : `${c.value.size} file(s) selected`), j = M(() => A.value === "source" ? c.value.size !== 1 : c.value.size === 0 || !E.value);
    function le(ne) {
      if (ne === 0) return "0 B";
      const Me = 1024 * 1024 * 1024, pe = 1024 * 1024, ze = 1024;
      return ne >= Me ? `${(ne / Me).toFixed(2)} GB` : ne >= pe ? `${(ne / pe).toFixed(1)} MB` : ne >= ze ? `${(ne / ze).toFixed(0)} KB` : `${ne} B`;
    }
    function ce(ne) {
      const Me = ne.match(k);
      return Me ? `${Me[1]}${Me[4]}` : null;
    }
    function Q(ne) {
      if (A.value === "source") {
        c.value = c.value.has(ne.path) ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([ne.path]);
        return;
      }
      const Me = new Set(c.value), pe = Me.has(ne.path), ze = ne.shard_group || ce(ne.path);
      if (ze) {
        const Le = r.value.filter((ke) => (ke.shard_group || ce(ke.path)) === ze);
        pe ? Le.forEach((ke) => Me.delete(ke.path)) : Le.forEach((ke) => Me.add(ke.path));
      } else
        pe ? Me.delete(ne.path) : Me.add(ne.path);
      c.value = Me;
    }
    function ve() {
      const ne = new Set(c.value);
      for (const Me of $.value)
        Me.is_model_file && ne.add(Me.path);
      c.value = ne;
    }
    function J() {
      c.value = /* @__PURE__ */ new Set();
    }
    function L() {
      if (C.value) {
        const ne = new Set(c.value);
        for (const Me of $.value)
          ne.delete(Me.path);
        c.value = ne;
      } else {
        const ne = new Set(c.value);
        for (const Me of $.value)
          ne.add(Me.path);
        c.value = ne;
      }
    }
    function F(ne) {
      p.value === ne ? w.value = !w.value : (p.value = ne, w.value = !0);
    }
    function ue(ne) {
      const Me = ne.split("/");
      return Me.length >= 2 ? Me[Me.length - 2] : null;
    }
    function te() {
      return g.value.trim();
    }
    function me() {
      if (c.value.size === 0 || !E.value) return;
      const ne = te(), Me = [];
      for (const pe of c.value) {
        const ze = r.value.find((Le) => Le.path === pe);
        ze && Me.push({
          url: Pi(n.repoId, n.revision, ze.path),
          destination: ne,
          filename: ze.path.split("/").pop() || ze.path
        });
      }
      a("queue", Me);
    }
    function de() {
      if (c.value.size !== 1) return;
      const [ne] = c.value;
      a("selectSource", Pi(n.repoId, n.revision, ne));
    }
    function W() {
      if (A.value === "source") {
        de();
        return;
      }
      me();
    }
    async function se() {
      if (n.repoId) {
        u.value = !0, d.value = null;
        try {
          const ne = `https://huggingface.co/${n.repoId}/tree/${n.revision || "main"}`, Me = await l(ne);
          if (r.value = Me.files, n.preselectedFile) {
            const pe = r.value.find((ze) => ze.path === n.preselectedFile);
            pe && Q(pe);
          }
        } catch (ne) {
          d.value = ne instanceof Error ? ne.message : "Failed to load repository";
        } finally {
          u.value = !1;
        }
      }
    }
    return $t(() => [n.repoId, n.revision], () => {
      n.repoId && se();
    }, { immediate: !1 }), ut(() => {
      se();
    }), (ne, Me) => (o(), i("div", _p, [
      s("div", kp, [
        s("button", {
          class: "back-btn",
          onClick: Me[0] || (Me[0] = (pe) => ne.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        s("div", bp, [
          s("span", $p, m(e.repoId), 1),
          e.revision ? (o(), i("span", Cp, m(e.revision), 1)) : y("", !0)
        ])
      ]),
      u.value ? (o(), i("div", xp, " Loading repository files... ")) : d.value ? (o(), i("div", Sp, m(d.value), 1)) : (o(), i(B, { key: 2 }, [
        s("div", Ip, [
          b(Rt, {
            modelValue: f.value,
            "onUpdate:modelValue": Me[1] || (Me[1] = (pe) => f.value = pe),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          s("div", Ep, [
            s("button", {
              class: Be(["toggle-btn", { active: v.value }]),
              onClick: Me[2] || (Me[2] = (pe) => v.value = !v.value)
            }, m(v.value ? "Models Only" : "All Files"), 3),
            A.value === "download" ? (o(), i("button", {
              key: 0,
              class: "action-btn",
              onClick: ve
            }, "Auto-Select Models")) : y("", !0),
            s("button", {
              class: "action-btn",
              onClick: J
            }, "Clear")
          ])
        ]),
        s("div", Tp, [
          $.value.length > 0 ? (o(), i("div", Mp, [
            A.value === "download" ? (o(), i("input", {
              key: 0,
              type: "checkbox",
              checked: C.value,
              indeterminate: I.value && !C.value,
              class: "file-checkbox",
              onChange: L
            }, null, 40, Pp)) : (o(), i("span", Rp)),
            s("span", {
              class: "header-name",
              onClick: Me[3] || (Me[3] = (pe) => F("name"))
            }, [
              Me[7] || (Me[7] = x(" Name ", -1)),
              s("span", Dp, m(p.value === "name" ? w.value ? "▲" : "▼" : ""), 1)
            ]),
            s("span", {
              class: "header-size",
              onClick: Me[4] || (Me[4] = (pe) => F("size"))
            }, [
              Me[8] || (Me[8] = x(" Size ", -1)),
              s("span", Np, m(p.value === "size" ? w.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          $.value.length === 0 ? (o(), i("div", Lp, m(r.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (o(), i("div", Up, [
            (o(!0), i(B, null, ye(S.value, (pe) => (o(), i("div", {
              key: pe.path,
              class: Be(["file-item", { selected: c.value.has(pe.path) }]),
              onClick: (ze) => Q(pe)
            }, [
              s("input", {
                type: "checkbox",
                checked: c.value.has(pe.path),
                class: "file-checkbox",
                onClick: Me[5] || (Me[5] = bt(() => {
                }, ["stop"])),
                onChange: (ze) => Q(pe)
              }, null, 40, Ap),
              s("span", zp, m(pe.path), 1),
              s("span", Fp, m(le(pe.size)), 1)
            ], 10, Op))), 128))
          ]))
        ]),
        A.value === "download" ? (o(), R(rc, {
          key: 0,
          modelValue: g.value,
          "onUpdate:modelValue": Me[6] || (Me[6] = (pe) => g.value = pe),
          "suggested-directory": D.value
        }, null, 8, ["modelValue", "suggested-directory"])) : y("", !0),
        s("div", Vp, [
          s("div", Bp, [
            s("span", Wp, m(N.value), 1),
            s("span", Gp, m(le(P.value)), 1)
          ]),
          b(Ue, {
            variant: "primary",
            disabled: j.value,
            onClick: W
          }, {
            default: h(() => [
              x(m(V.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), Hp = /* @__PURE__ */ Te(jp, [["__scopeId", "data-v-06caa551"]]), qp = { class: "token-config-modal" }, Kp = { class: "provider-info" }, Jp = { class: "provider-icon" }, Qp = { class: "provider-name" }, Yp = {
  key: 0,
  class: "current-token"
}, Xp = { class: "mask" }, Zp = { class: "token-input-section" }, eg = { class: "input-label" }, tg = { class: "help-text" }, sg = ["href"], ng = { class: "modal-actions" }, og = /* @__PURE__ */ Ee({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {},
    overlayZIndex: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: t }) {
    const n = e, a = t, { updateConfig: l } = mt(), r = _(""), c = _(!1), u = _(!1), d = M(
      () => n.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), f = M(
      () => n.provider === "huggingface" ? "🤗" : "🎨"
    ), v = M(
      () => n.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), p = M(
      () => n.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), w = M(
      () => n.provider === "huggingface" ? "Get your HuggingFace token →" : "Get your CivitAI API key →"
    );
    async function g() {
      if (r.value.trim()) {
        c.value = !0;
        try {
          const $ = n.provider === "huggingface" ? { huggingface_token: r.value.trim() } : { civitai_api_key: r.value.trim() };
          await l($), r.value = "", a("saved"), a("close");
        } catch ($) {
          console.error("Failed to save token:", $);
        } finally {
          c.value = !1;
        }
      }
    }
    async function k() {
      u.value = !0;
      try {
        const $ = n.provider === "huggingface" ? { huggingface_token: null } : { civitai_api_key: null };
        await l($), a("cleared"), a("close");
      } catch ($) {
        console.error("Failed to clear token:", $);
      } finally {
        u.value = !1;
      }
    }
    return ($, S) => (o(), R(Mt, {
      title: "Configure API Token",
      "overlay-z-index": e.overlayZIndex,
      onClose: S[2] || (S[2] = (C) => $.$emit("close"))
    }, {
      body: h(() => [
        s("div", qp, [
          s("div", Kp, [
            s("span", Jp, m(f.value), 1),
            s("span", Qp, m(d.value), 1)
          ]),
          e.currentTokenMask ? (o(), i("div", Yp, [
            S[4] || (S[4] = s("span", { class: "label" }, "Current token:", -1)),
            s("span", Xp, m(e.currentTokenMask), 1),
            b(Ue, {
              variant: "danger",
              size: "sm",
              onClick: k,
              loading: u.value
            }, {
              default: h(() => [...S[3] || (S[3] = [
                x(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0),
          s("div", Zp, [
            s("label", eg, m(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            b(Rt, {
              modelValue: r.value,
              "onUpdate:modelValue": S[0] || (S[0] = (C) => r.value = C),
              type: "password",
              placeholder: v.value
            }, null, 8, ["modelValue", "placeholder"]),
            s("div", tg, [
              s("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, m(w.value), 9, sg)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        s("div", ng, [
          b(Ue, {
            variant: "secondary",
            onClick: S[1] || (S[1] = (C) => $.$emit("close"))
          }, {
            default: h(() => [...S[5] || (S[5] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Ue, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: c.value,
            onClick: g
          }, {
            default: h(() => [...S[6] || (S[6] = [
              x(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }, 8, ["overlay-z-index"]));
  }
}), ag = /* @__PURE__ */ Te(og, [["__scopeId", "data-v-525ec64a"]]), lg = { class: "huggingface-tab" }, ig = {
  key: 0,
  class: "search-section"
}, rg = { class: "search-header" }, cg = { class: "search-bar" }, ug = {
  key: 1,
  class: "search-results"
}, dg = {
  key: 0,
  class: "loading-state"
}, mg = {
  key: 1,
  class: "error-state"
}, fg = {
  key: 2,
  class: "results-list"
}, vg = ["onClick"], pg = { class: "repo-header" }, gg = { class: "repo-id" }, hg = { class: "repo-stats" }, yg = {
  class: "stat",
  title: "Downloads"
}, wg = {
  class: "stat",
  title: "Likes"
}, _g = {
  key: 0,
  class: "repo-desc"
}, kg = {
  key: 1,
  class: "repo-tags"
}, bg = {
  key: 3,
  class: "empty-state"
}, $g = {
  key: 4,
  class: "hint-state"
}, Cg = /* @__PURE__ */ Ee({
  __name: "HuggingFaceTab",
  props: {
    modeKind: { default: "download" },
    actionLabel: { default: "Queue Download" },
    overlayZIndex: { default: 10003 }
  },
  emits: ["queue", "selectSource"],
  setup(e) {
    const { searchHuggingFaceRepos: t, getConfig: n } = mt(), a = _("search"), l = _(""), r = _([]), c = _(!1), u = _(null), d = _(!1), f = _(null), v = _("main"), p = _(), w = _(), g = _(!1), k = _(null), $ = M(() => {
      if (!u.value) return !1;
      const V = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || V.includes("authentication") || V.includes("unauthorized");
    });
    function S(V) {
      return V >= 1e6 ? `${(V / 1e6).toFixed(1)}M` : V >= 1e3 ? `${(V / 1e3).toFixed(1)}K` : String(V);
    }
    async function C() {
      const V = l.value.trim();
      if (!V) return;
      u.value = null;
      const N = yp(V);
      if (N.kind === "file" && N.repoId && N.path) {
        f.value = N.repoId, v.value = N.revision || "main";
        const j = N.path.split("/");
        j.length > 1 ? p.value = j.slice(0, -1).join("/") : p.value = void 0, w.value = N.path, a.value = "browse";
        return;
      }
      if (N.kind === "repo" && N.repoId) {
        f.value = N.repoId, v.value = N.revision || "main", p.value = N.path, w.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(V) && !V.includes("://")) {
        f.value = V, v.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const j = await t(V);
        r.value = j.results, d.value = !0;
      } catch (j) {
        u.value = j instanceof Error ? j.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function I(V) {
      f.value = V, v.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
    }
    function E() {
      a.value = "search", f.value = null, p.value = void 0, w.value = void 0;
    }
    async function P() {
      try {
        const V = await n();
        k.value = V.huggingface_token || null;
      } catch (V) {
        console.error("Failed to load config:", V);
      }
    }
    function D() {
      P(), $.value && l.value && C();
    }
    function A() {
      k.value = null;
    }
    return ut(P), (V, N) => (o(), i("div", lg, [
      a.value === "search" ? (o(), i("div", ig, [
        s("div", rg, [
          s("div", cg, [
            b(Rt, {
              modelValue: l.value,
              "onUpdate:modelValue": N[0] || (N[0] = (j) => l.value = j),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: Cs(C, ["enter"])
            }, null, 8, ["modelValue"]),
            b(Ue, {
              variant: "primary",
              onClick: C,
              loading: c.value
            }, {
              default: h(() => [...N[6] || (N[6] = [
                x(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          b(Ue, {
            variant: "secondary",
            size: "sm",
            onClick: N[1] || (N[1] = (j) => g.value = !0)
          }, {
            default: h(() => [
              x(m(k.value ? `Token: ${k.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : y("", !0),
      a.value === "search" ? (o(), i("div", ug, [
        c.value ? (o(), i("div", dg, " Searching HuggingFace... ")) : u.value ? (o(), i("div", mg, [
          s("p", null, m(u.value), 1),
          $.value ? (o(), R(Ue, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: N[2] || (N[2] = (j) => g.value = !0)
          }, {
            default: h(() => [...N[7] || (N[7] = [
              x(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (o(), i("div", fg, [
          (o(!0), i(B, null, ye(r.value, (j) => (o(), i("div", {
            key: j.repo_id,
            class: "repo-card",
            onClick: (le) => I(j.repo_id)
          }, [
            s("div", pg, [
              s("span", gg, m(j.repo_id), 1),
              s("div", hg, [
                s("span", yg, [
                  N[8] || (N[8] = s("span", { class: "stat-icon" }, "↓", -1)),
                  x(" " + m(S(j.downloads)), 1)
                ]),
                s("span", wg, [
                  N[9] || (N[9] = s("span", { class: "stat-icon" }, "★", -1)),
                  x(" " + m(S(j.likes)), 1)
                ])
              ])
            ]),
            j.description ? (o(), i("p", _g, m(j.description), 1)) : y("", !0),
            j.tags.length > 0 ? (o(), i("div", kg, [
              (o(!0), i(B, null, ye(j.tags.slice(0, 5), (le) => (o(), i("span", {
                key: le,
                class: "tag"
              }, m(le), 1))), 128))
            ])) : y("", !0)
          ], 8, vg))), 128))
        ])) : d.value ? (o(), i("div", bg, " No repositories found ")) : (o(), i("div", $g, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (o(), R(Hp, {
        key: 2,
        "repo-id": f.value,
        revision: v.value,
        "initial-path": p.value,
        "preselected-file": w.value,
        mode: e.modeKind,
        "action-label": e.actionLabel,
        onBack: E,
        onQueue: N[3] || (N[3] = (j) => V.$emit("queue", j)),
        onSelectSource: N[4] || (N[4] = (j) => V.$emit("selectSource", j))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file", "mode", "action-label"])),
      g.value ? (o(), R(ag, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": k.value,
        "overlay-z-index": e.overlayZIndex + 2,
        onClose: N[5] || (N[5] = (j) => g.value = !1),
        onSaved: D,
        onCleared: A
      }, null, 8, ["current-token-mask", "overlay-z-index"])) : y("", !0)
    ]));
  }
}), cc = /* @__PURE__ */ Te(Cg, [["__scopeId", "data-v-eccbf32d"]]), xg = { class: "candidate-card" }, Sg = { class: "candidate-main" }, Ig = { class: "candidate-url" }, Eg = { class: "candidate-meta" }, Tg = { class: "meta-chip" }, Mg = {
  key: 0,
  class: "meta-chip"
}, Pg = ["aria-expanded"], Rg = {
  key: 1,
  class: "meta-chip"
}, Dg = { class: "match-popover-reasons" }, Ng = { class: "candidate-footer" }, Lg = {
  key: 0,
  class: "candidate-context"
}, Ug = { key: 1 }, Og = /* @__PURE__ */ Ee({
  __name: "ModelSourceCandidateCard",
  props: {
    candidate: {},
    actionLabel: { default: "Use as Source" },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = t, a = _(!1), l = _(null);
    function r() {
      a.value = !1;
    }
    function c(v) {
      var w;
      const p = v.target;
      p instanceof Node && ((w = l.value) != null && w.contains(p) || r());
    }
    function u(v) {
      v.key === "Escape" && r();
    }
    $t(a, (v) => {
      v ? (document.addEventListener("pointerdown", c), document.addEventListener("keydown", u)) : (document.removeEventListener("pointerdown", c), document.removeEventListener("keydown", u));
    }), To(() => {
      document.removeEventListener("pointerdown", c), document.removeEventListener("keydown", u);
    });
    function d(v) {
      return v === "huggingface" ? "Hugging Face" : v === "civitai" ? "Civitai" : "Direct URL";
    }
    function f(v) {
      return v >= 75 ? "Strong" : v >= 45 ? "Possible" : "Weak";
    }
    return (v, p) => {
      var w, g;
      return o(), i("article", xg, [
        s("div", Sg, [
          s("div", Ig, m(e.candidate.url), 1),
          s("div", Eg, [
            s("span", Tg, [
              p[3] || (p[3] = s("span", { class: "chip-label" }, "Provider", -1)),
              s("span", null, m(d(e.candidate.source_type)), 1)
            ]),
            e.candidate.workflow ? (o(), i("span", Mg, [
              p[4] || (p[4] = s("span", { class: "chip-label" }, "Workflow", -1)),
              s("span", null, m(e.candidate.workflow), 1)
            ])) : y("", !0),
            e.candidate.confidence ? (o(), i("span", {
              key: 1,
              ref_key: "matchPopoverRoot",
              ref: l,
              class: "match-chip-wrap"
            }, [
              (w = e.candidate.reasons) != null && w.length ? (o(), i("button", {
                key: 0,
                class: "meta-chip meta-chip-button",
                type: "button",
                "aria-expanded": a.value,
                onClick: p[0] || (p[0] = bt((k) => a.value = !a.value, ["stop"]))
              }, [
                p[5] || (p[5] = s("span", { class: "chip-label" }, "Match", -1)),
                s("span", null, m(f(e.candidate.confidence)), 1)
              ], 8, Pg)) : (o(), i("span", Rg, [
                p[6] || (p[6] = s("span", { class: "chip-label" }, "Match", -1)),
                s("span", null, m(f(e.candidate.confidence)), 1)
              ])),
              a.value && ((g = e.candidate.reasons) != null && g.length) ? (o(), i("div", {
                key: 2,
                class: "match-popover",
                onClick: p[1] || (p[1] = bt(() => {
                }, ["stop"]))
              }, [
                p[7] || (p[7] = s("div", { class: "match-popover-title" }, "Matched by", -1)),
                s("div", Dg, [
                  (o(!0), i(B, null, ye(e.candidate.reasons, (k) => (o(), i("span", {
                    key: k,
                    class: "reason-chip"
                  }, m(k), 1))), 128))
                ])
              ])) : y("", !0)
            ], 512)) : y("", !0)
          ]),
          s("div", Ng, [
            e.candidate.context ? (o(), i("details", Lg, [
              p[8] || (p[8] = s("summary", null, "Workflow snippet", -1)),
              s("p", null, m(e.candidate.context), 1)
            ])) : (o(), i("div", Ug)),
            b(Ue, {
              variant: "primary",
              size: "sm",
              loading: e.loading,
              onClick: p[2] || (p[2] = (k) => n("select", e.candidate.url))
            }, {
              default: h(() => [
                x(m(e.actionLabel), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]);
    };
  }
}), uc = /* @__PURE__ */ Te(Og, [["__scopeId", "data-v-329b9068"]]), Ag = { class: "source-url-form" }, zg = { class: "input-group" }, Fg = { key: 0 }, Vg = {
  key: 1,
  class: "description"
}, Bg = { class: "actions" }, Wg = /* @__PURE__ */ Ee({
  __name: "SourceUrlActionForm",
  props: {
    modelValue: {},
    actionLabel: {},
    label: { default: "Download URL" },
    placeholder: { default: "https://huggingface.co/org/repo/resolve/main/model.safetensors" },
    description: { default: "" },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "submit"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = M(() => n.modelValue.trim()), r = M(() => {
      const d = l.value;
      if (!d) return null;
      try {
        const f = new URL(d);
        if (!["http:", "https:"].includes(f.protocol))
          return "Use an HTTP or HTTPS URL.";
      } catch {
        return "Enter a valid URL.";
      }
      return null;
    }), c = M(() => !!l.value && !r.value && !n.disabled);
    function u() {
      c.value && a("submit", l.value);
    }
    return (d, f) => (o(), i("div", Ag, [
      s("div", zg, [
        e.label ? (o(), i("label", Fg, m(e.label), 1)) : y("", !0),
        b(Rt, {
          "model-value": e.modelValue,
          placeholder: e.placeholder,
          error: r.value || void 0,
          "full-width": "",
          "onUpdate:modelValue": f[0] || (f[0] = (v) => a("update:modelValue", v)),
          onEnter: u
        }, null, 8, ["model-value", "placeholder", "error"]),
        e.description ? (o(), i("p", Vg, m(e.description), 1)) : y("", !0)
      ]),
      ct(d.$slots, "default", {}, void 0),
      s("div", Bg, [
        b(Ue, {
          variant: "primary",
          disabled: !c.value,
          loading: e.loading,
          onClick: u
        }, {
          default: h(() => [
            x(m(e.actionLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), dc = /* @__PURE__ */ Te(Wg, [["__scopeId", "data-v-e2610d45"]]), Gg = { class: "source-picker" }, jg = {
  key: 0,
  class: "model-summary"
}, Hg = { class: "model-heading" }, qg = { class: "summary-name" }, Kg = { class: "summary-meta" }, Jg = {
  key: 0,
  class: "hash-row"
}, Qg = { class: "hash-value" }, Yg = {
  key: 1,
  class: "hash-row"
}, Xg = { class: "hash-value" }, Zg = {
  key: 2,
  class: "hash-row"
}, eh = { class: "hash-value" }, th = {
  key: 4,
  class: "hash-error"
}, sh = { class: "tab-bar" }, nh = ["onClick"], oh = {
  key: 1,
  class: "tab-content"
}, ah = { class: "section-header-row" }, lh = {
  key: 0,
  class: "state-message"
}, ih = {
  key: 1,
  class: "error-message"
}, rh = {
  key: 2,
  class: "candidate-list"
}, ch = {
  key: 3,
  class: "state-message"
}, uh = {
  key: 2,
  class: "tab-content source-browser-content"
}, dh = {
  key: 3,
  class: "tab-content"
}, mh = { class: "section-header-row" }, fh = /* @__PURE__ */ Ee({
  __name: "ModelSourcePicker",
  props: {
    model: {},
    actionLabel: { default: "Use as Source" },
    loadingUrl: { default: null },
    overlayZIndex: { default: 10011 },
    showModelSummary: { type: Boolean, default: !0 },
    directDescription: { default: "Paste the download URL that another machine should use for this exact model file." },
    directPlaceholder: { default: "https://huggingface.co/org/repo/resolve/main/model.safetensors" }
  },
  emits: ["selectSource", "hashesComputed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getModelSourceCandidates: l, computeModelHashes: r } = mt(), c = [
      { id: "workflow", label: "Workflow Links" },
      { id: "huggingface", label: "Hugging Face" },
      { id: "direct", label: "Direct URL" }
    ], u = _("workflow"), d = _([]), f = _(!1), v = _(null), p = _(""), w = _(!1), g = _(null), k = M(() => d.value.filter((I) => I.source === "workflow")), $ = M(() => !!(n.model.hash && (!n.model.blake3 || !n.model.sha256)));
    async function S() {
      f.value = !0, v.value = null;
      try {
        const I = await l(n.model.hash);
        d.value = I.candidates;
      } catch (I) {
        v.value = I instanceof Error ? I.message : "Failed to scan workflows";
      } finally {
        f.value = !1;
      }
    }
    async function C() {
      if (n.model.hash) {
        w.value = !0, g.value = null;
        try {
          const I = await r(n.model.hash);
          a("hashesComputed", I);
        } catch (I) {
          g.value = I instanceof Error ? I.message : "Failed to compute hashes";
        } finally {
          w.value = !1;
        }
      }
    }
    return ut(S), (I, E) => (o(), i("div", Gg, [
      e.showModelSummary ? (o(), i("div", jg, [
        s("div", Hg, [
          E[4] || (E[4] = s("div", { class: "summary-label" }, "Local model", -1)),
          s("div", qg, m(e.model.filename), 1)
        ]),
        s("div", Kg, [
          e.model.hash ? (o(), i("div", Jg, [
            E[5] || (E[5] = s("span", { class: "hash-label" }, "quick hash", -1)),
            s("span", Qg, m(e.model.hash), 1)
          ])) : y("", !0),
          e.model.blake3 ? (o(), i("div", Yg, [
            E[6] || (E[6] = s("span", { class: "hash-label" }, "blake3", -1)),
            s("span", Xg, m(e.model.blake3), 1)
          ])) : y("", !0),
          e.model.sha256 ? (o(), i("div", Zg, [
            E[7] || (E[7] = s("span", { class: "hash-label" }, "sha256", -1)),
            s("span", eh, m(e.model.sha256), 1)
          ])) : y("", !0),
          $.value ? (o(), R(Ue, {
            key: 3,
            class: "compute-hashes-btn",
            variant: "secondary",
            size: "sm",
            loading: w.value,
            onClick: C
          }, {
            default: h(() => [...E[8] || (E[8] = [
              x(" Compute full hashes ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])) : y("", !0),
          g.value ? (o(), i("p", th, m(g.value), 1)) : y("", !0)
        ])
      ])) : y("", !0),
      s("div", sh, [
        (o(), i(B, null, ye(c, (P) => s("button", {
          key: P.id,
          class: Be(["tab-btn", { active: u.value === P.id }]),
          onClick: (D) => u.value = P.id
        }, m(P.label), 11, nh)), 64))
      ]),
      u.value === "workflow" ? (o(), i("section", oh, [
        s("div", ah, [
          E[10] || (E[10] = s("div", null, [
            s("h4", null, "Workflow Links"),
            s("p", null, "Candidate model links found in saved workflow notes or metadata.")
          ], -1)),
          b(Ue, {
            variant: "secondary",
            size: "sm",
            loading: f.value,
            onClick: S
          }, {
            default: h(() => [...E[9] || (E[9] = [
              x(" Scan ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ]),
        f.value ? (o(), i("div", lh, "Scanning workflows...")) : v.value ? (o(), i("div", ih, m(v.value), 1)) : k.value.length ? (o(), i("div", rh, [
          (o(!0), i(B, null, ye(k.value, (P) => (o(), R(uc, {
            key: `${P.workflow}:${P.url}`,
            candidate: P,
            "action-label": e.actionLabel,
            loading: e.loadingUrl === P.url,
            onSelect: E[0] || (E[0] = (D) => a("selectSource", D))
          }, null, 8, ["candidate", "action-label", "loading"]))), 128))
        ])) : (o(), i("div", ch, " No likely workflow links found. Try direct URL for now. "))
      ])) : u.value === "huggingface" ? (o(), i("section", uh, [
        b(cc, {
          "mode-kind": "source",
          "action-label": e.actionLabel,
          "overlay-z-index": e.overlayZIndex,
          onSelectSource: E[1] || (E[1] = (P) => a("selectSource", P))
        }, null, 8, ["action-label", "overlay-z-index"])
      ])) : u.value === "direct" ? (o(), i("section", dh, [
        s("div", mh, [
          s("div", null, [
            E[11] || (E[11] = s("h4", null, "Direct URL", -1)),
            s("p", null, m(e.directDescription), 1)
          ])
        ]),
        b(dc, {
          modelValue: p.value,
          "onUpdate:modelValue": E[2] || (E[2] = (P) => p.value = P),
          label: "",
          placeholder: e.directPlaceholder,
          "action-label": e.actionLabel,
          loading: e.loadingUrl === p.value.trim(),
          onSubmit: E[3] || (E[3] = (P) => a("selectSource", P))
        }, null, 8, ["modelValue", "placeholder", "action-label", "loading"])
      ])) : y("", !0)
    ]));
  }
}), vh = /* @__PURE__ */ Te(fh, [["__scopeId", "data-v-e9633660"]]), ph = {
  key: 0,
  class: "error-message"
}, gh = /* @__PURE__ */ Ee({
  __name: "ModelSourceModal",
  props: {
    model: {},
    overlayZIndex: { default: 10011 }
  },
  emits: ["close", "saved", "hashesComputed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { addModelSource: l } = mt(), r = _(n.model), c = _(null), u = _(null);
    $t(() => n.model, (v) => {
      r.value = v;
    });
    async function d(v) {
      if (!(!v || !n.model.hash)) {
        c.value = v, u.value = null;
        try {
          await l(n.model.hash, v), a("saved"), a("close");
        } catch (p) {
          u.value = p instanceof Error ? p.message : "Failed to save source";
        } finally {
          c.value = null;
        }
      }
    }
    function f(v) {
      r.value = v, a("hashesComputed");
    }
    return (v, p) => (o(), R(Mt, {
      title: `Find Source: ${e.model.filename}`,
      size: "lg",
      "fixed-height": "",
      "overlay-z-index": e.overlayZIndex,
      onClose: p[1] || (p[1] = (w) => a("close"))
    }, {
      body: h(() => [
        b(vh, {
          model: r.value,
          "loading-url": c.value,
          "overlay-z-index": e.overlayZIndex,
          "action-label": "Use as Source",
          onSelectSource: d,
          onHashesComputed: f
        }, null, 8, ["model", "loading-url", "overlay-z-index"]),
        u.value ? (o(), i("p", ph, m(u.value), 1)) : y("", !0)
      ]),
      footer: h(() => [
        b(Ue, {
          variant: "secondary",
          onClick: p[0] || (p[0] = (w) => a("close"))
        }, {
          default: h(() => [...p[2] || (p[2] = [
            x(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title", "overlay-z-index"]));
  }
}), mc = /* @__PURE__ */ Te(gh, [["__scopeId", "data-v-62104cdb"]]), hh = { class: "readiness-body" }, yh = {
  key: 0,
  class: "issue-section"
}, wh = { class: "section-heading" }, _h = { class: "issue-list" }, kh = { class: "issue-main" }, bh = { class: "issue-name" }, $h = { class: "issue-meta" }, Ch = { key: 0 }, xh = { key: 1 }, Sh = ["disabled", "onClick"], Ih = {
  key: 1,
  class: "issue-note"
}, Eh = {
  key: 1,
  class: "issue-section"
}, Th = { class: "section-heading" }, Mh = { class: "issue-list" }, Ph = { class: "issue-main" }, Rh = { class: "issue-name" }, Dh = { class: "issue-meta" }, Nh = { class: "issue-reason" }, Lh = ["disabled", "onClick"], Uh = {
  key: 1,
  class: "issue-note"
}, Oh = {
  key: 2,
  class: "empty-state"
}, Ah = {
  key: 3,
  class: "error-message"
}, zh = /* @__PURE__ */ Ee({
  __name: "ReadinessIssuesModal",
  props: {
    warnings: {}
  },
  emits: ["close", "revalidate"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getModelDetails: l, updateNodeCriticality: r } = mt(), c = _(null), u = _(null), d = _(null), f = _(null), v = M(() => n.warnings.models_without_sources), p = M(() => n.warnings.nodes_without_provenance);
    async function w(S) {
      u.value = S, f.value = null;
      try {
        c.value = await l(S);
      } catch (C) {
        f.value = C instanceof Error ? C.message : `Failed to load ${S}`;
      } finally {
        u.value = null;
      }
    }
    async function g(S) {
      d.value = S, f.value = null;
      try {
        const C = await r(S, "optional");
        if (C.status !== "success") {
          f.value = C.message || `Failed to update ${S}`;
          return;
        }
        a("revalidate");
      } catch (C) {
        f.value = C instanceof Error ? C.message : `Failed to update ${S}`;
      } finally {
        d.value = null;
      }
    }
    function k() {
      c.value = null, a("revalidate");
    }
    function $() {
      a("revalidate");
    }
    return (S, C) => (o(), i(B, null, [
      b(Mt, {
        size: "lg",
        "overlay-z-index": 10007,
        onClose: C[1] || (C[1] = (I) => a("close"))
      }, {
        header: h(() => [...C[3] || (C[3] = [
          s("div", { class: "readiness-heading" }, [
            s("h3", { class: "readiness-title" }, "Review Reproducibility Issues"),
            s("p", { class: "readiness-subtitle" }, " Add missing source details where possible. Required development nodes can also be marked optional when they should stay local but not be part of portable builds. ")
          ], -1)
        ])]),
        body: h(() => [
          s("div", hh, [
            v.value.length ? (o(), i("section", yh, [
              s("div", wh, [
                C[4] || (C[4] = s("h4", null, "Models Missing Source URLs", -1)),
                s("span", null, m(v.value.length), 1)
              ]),
              s("div", _h, [
                (o(!0), i(B, null, ye(v.value, (I) => (o(), i("article", {
                  key: I.hash || I.filename,
                  class: "issue-item"
                }, [
                  s("div", kh, [
                    s("div", bh, m(I.filename), 1),
                    s("div", $h, [
                      I.hash ? (o(), i("span", Ch, "hash " + m(I.hash), 1)) : y("", !0),
                      I.workflows.length ? (o(), i("span", xh, "used by " + m(I.workflows.join(", ")), 1)) : y("", !0),
                      s("span", null, m(I.criticality || "required"), 1)
                    ])
                  ]),
                  I.hash ? (o(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: u.value === I.hash,
                    onClick: (E) => w(I.hash)
                  }, m(u.value === I.hash ? "Loading..." : "Add Source"), 9, Sh)) : (o(), i("span", Ih, "Missing hash"))
                ]))), 128))
              ])
            ])) : y("", !0),
            p.value.length ? (o(), i("section", Eh, [
              s("div", Th, [
                C[5] || (C[5] = s("h4", null, "Custom Nodes Missing Portable Provenance", -1)),
                s("span", null, m(p.value.length), 1)
              ]),
              s("div", Mh, [
                (o(!0), i(B, null, ye(p.value, (I) => (o(), i("article", {
                  key: I.name,
                  class: "issue-item"
                }, [
                  s("div", Ph, [
                    s("div", Rh, m(I.name), 1),
                    s("div", Dh, [
                      s("span", null, m(I.source), 1),
                      s("span", null, m(I.criticality), 1)
                    ]),
                    s("p", Nh, m(I.reason), 1)
                  ]),
                  I.criticality === "required" ? (o(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: d.value === I.name,
                    onClick: (E) => g(I.name)
                  }, m(d.value === I.name ? "Saving..." : "Mark Optional"), 9, Lh)) : (o(), i("span", Uh, "Optional warning"))
                ]))), 128))
              ])
            ])) : y("", !0),
            !v.value.length && !p.value.length ? (o(), i("div", Oh, " No reproducibility issues remain. ")) : y("", !0),
            f.value ? (o(), i("div", Ah, m(f.value), 1)) : y("", !0)
          ])
        ]),
        footer: h(() => [
          s("button", {
            class: "primary-action",
            onClick: C[0] || (C[0] = (I) => a("close"))
          }, " Done ")
        ]),
        _: 1
      }),
      c.value ? (o(), R(mc, {
        key: 0,
        model: c.value,
        "overlay-z-index": 10008,
        onClose: C[2] || (C[2] = (I) => c.value = null),
        onSaved: k,
        onHashesComputed: $
      }, null, 8, ["model"])) : y("", !0)
    ], 64));
  }
}), Ml = /* @__PURE__ */ Te(zh, [["__scopeId", "data-v-03f88a10"]]), Fh = { class: "health-section-header" }, Vh = { class: "suggestions-content" }, Bh = { class: "suggestions-text" }, Wh = { style: { "margin-top": "var(--cg-space-3)" } }, Gh = {
  key: 1,
  class: "no-issues-text"
}, jh = {
  key: 2,
  class: "no-issues-text"
}, Hh = /* @__PURE__ */ Ee({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: t, emit: n }) {
    const a = e, l = _(!1), r = _(!1), c = _(!1), u = _(null), d = _(null), f = _(!1), { validateExport: v } = mt();
    function p() {
      l.value = !0;
    }
    function w() {
      l.value = !1, k("view-workflows");
    }
    function g() {
      l.value = !1, k("view-nodes");
    }
    const k = n, $ = _(!1), S = _(!1);
    function C() {
      S.value = !0, k("repair-environment");
    }
    function I() {
      S.value = !1;
    }
    function E() {
      l.value = !1;
    }
    const P = M(() => {
      const ee = a.status.workflows.analyzed || [], H = ee.filter(
        (he) => he.unresolved_models_count > 0 || he.ambiguous_models_count > 0
      );
      return H.length === 0 && a.status.missing_models_count > 0 ? ee.filter((he) => he.sync_state === "synced") : H;
    });
    function D() {
      const ee = P.value;
      ee.length !== 0 && ($.value = !0, k("repair-missing-models", ee.map((H) => H.name)));
    }
    function A() {
      $.value = !1;
    }
    t({ resetRepairingState: A, resetRepairingEnvironmentState: I, closeDetailModal: E });
    const V = M(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), N = M(() => a.status.has_changes), j = M(() => {
      const ee = a.status.git_changes;
      return ee.nodes_added.length > 0 || ee.nodes_removed.length > 0 || ee.workflow_changes;
    }), le = M(() => a.status.has_changes || V.value), ce = M(() => {
      var ee;
      return ((ee = u.value) == null ? void 0 : ee.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), Q = M(
      () => ce.value.models_without_sources.length
    ), ve = M(
      () => ce.value.nodes_without_provenance.length
    ), J = M(
      () => Q.value + ve.value
    ), L = M(
      () => J.value > 0
    ), F = M(() => {
      const ee = [];
      if (Q.value > 0 && ee.push(`${Q.value} model${Q.value === 1 ? "" : "s"} missing download source`), ve.value > 0) {
        const H = ce.value.nodes_without_provenance.filter((_e) => _e.criticality === "optional").length, he = ve.value - H;
        he > 0 && ee.push(`${he} required node${he === 1 ? "" : "s"} missing portable source`), H > 0 && ee.push(`${H} optional node${H === 1 ? "" : "s"} missing portable source`);
      }
      return ee;
    });
    async function ue() {
      f.value = !0, d.value = null;
      try {
        u.value = await v();
      } catch (ee) {
        d.value = ee instanceof Error ? ee.message : "Failed to check readiness";
      } finally {
        f.value = !1;
      }
    }
    async function te() {
      await ue();
    }
    $t(
      () => [
        a.setupState,
        a.status.has_changes,
        a.status.workflows.new.length,
        a.status.workflows.modified.length,
        a.status.workflows.deleted.length,
        a.status.missing_models_count,
        a.status.comparison.is_synced,
        a.status.has_legacy_manager
      ],
      () => {
        a.setupState === "managed" && ue();
      },
      { immediate: !0 }
    );
    const me = M(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), de = M(() => a.status.git_changes.has_other_changes), W = M(() => {
      var ee;
      return ((ee = a.status.workflows.analyzed) == null ? void 0 : ee.filter((H) => H.status === "broken")) || [];
    }), se = M(() => {
      var ee;
      return ((ee = a.status.workflows.analyzed) == null ? void 0 : ee.filter(
        (H) => H.has_path_sync_issues && !H.has_issues
      )) || [];
    }), ne = M(() => W.value.length > 0);
    function Me(ee) {
      const H = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const he of H) {
        const _e = ee.match(he);
        if (_e != null && _e[1])
          return _e[1];
      }
      return null;
    }
    function pe(ee) {
      const H = ee.map(Me).filter((he) => !!he);
      return [...new Set(H)];
    }
    function ze(ee) {
      if (ee.length === 0) return "";
      if (ee.length === 1) return ` (>= ${ee[0]})`;
      const H = ee.slice(0, 2).map((_e) => `>= ${_e}`).join(", "), he = ee.length > 2;
      return ` (${H}${he ? ", ..." : ""})`;
    }
    function Le(ee) {
      return ee.replace(/uninstallable node mappings?/gi, (H) => H.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function ke(ee) {
      const H = Le(ee.issue_summary || "Has issues"), he = /(?:>=|v?\d+\.\d+)/i.test(H), _e = pe(ee.version_gated_guidance || []);
      return (ee.nodes_version_gated_count || 0) > 0 && _e.length > 0 && !he ? `${ee.name} — ${H} (needs ComfyUI ${_e.map((Ke) => `>= ${Ke}`).join(", ")})` : `${ee.name} — ${H}`;
    }
    const De = M(() => W.value.reduce(
      (ee, H) => ee + (H.nodes_version_gated_count || 0),
      0
    )), ge = M(() => {
      const ee = W.value.flatMap(
        (H) => pe(H.version_gated_guidance || [])
      );
      return [...new Set(ee)];
    }), we = M(() => W.value.reduce(
      (ee, H) => ee + (H.nodes_uninstallable_count || 0),
      0
    )), T = M(() => {
      const ee = [];
      return De.value > 0 && ee.push(
        `${De.value} require newer ComfyUI${ze(ge.value)}`
      ), we.value > 0 && ee.push(`${we.value} need community packages`), ee.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${ee.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), O = M(() => ne.value || se.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), ae = M(() => O.value || L.value || !!d.value), Ie = M(() => {
      const ee = [];
      return a.status.workflows.new.length > 0 && ee.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && ee.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && ee.push(`${a.status.workflows.deleted.length} deleted`), ee.length > 0 ? `${ee.join(", ")} workflow${ee.length === 1 && !ee[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Ce = M(() => {
      var he, _e;
      const ee = [], H = a.status.comparison;
      return (he = H.missing_nodes) != null && he.length && ee.push(`${H.missing_nodes.length} missing node${H.missing_nodes.length === 1 ? "" : "s"}`), (_e = H.extra_nodes) != null && _e.length && ee.push(`${H.extra_nodes.length} untracked node${H.extra_nodes.length === 1 ? "" : "s"}`), ee.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${ee.join(" and ")}.`;
    }), be = M(() => {
      var he, _e;
      const ee = [], H = a.status.comparison;
      return (he = H.extra_nodes) != null && he.length && (H.extra_nodes.slice(0, 3).forEach((Ke) => {
        ee.push(`Untracked: ${Ke}`);
      }), H.extra_nodes.length > 3 && ee.push(`...and ${H.extra_nodes.length - 3} more untracked`)), (_e = H.missing_nodes) != null && _e.length && (H.missing_nodes.slice(0, 3).forEach((Ke) => {
        ee.push(`Missing: ${Ke}`);
      }), H.missing_nodes.length > 3 && ee.push(`...and ${H.missing_nodes.length - 3} more missing`)), ee;
    });
    return (ee, H) => (o(), i(B, null, [
      b(Ht, null, {
        header: h(() => [
          b(qt, { title: "STATUS" })
        ]),
        content: h(() => [
          a.setupState === "no_workspace" ? (o(), R(us, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: h(() => [
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: H[0] || (H[0] = (he) => ee.$emit("start-setup"))
              }, {
                default: h(() => [...H[15] || (H[15] = [
                  x(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (o(), R(us, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: h(() => [
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: H[1] || (H[1] = (he) => ee.$emit("view-environments"))
              }, {
                default: h(() => [...H[16] || (H[16] = [
                  x(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (o(), R(us, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: h(() => [
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: H[2] || (H[2] = (he) => ee.$emit("create-environment"))
              }, {
                default: h(() => [...H[17] || (H[17] = [
                  x(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", {
            class: "health-section-wrapper",
            onMouseenter: H[4] || (H[4] = (he) => r.value = !0),
            onMouseleave: H[5] || (H[5] = (he) => r.value = !1)
          }, [
            s("div", Fh, [
              b(gs, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...H[18] || (H[18] = [
                  x(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              b(Gd, { name: "fade" }, {
                default: h(() => [
                  r.value ? (o(), R(Pe, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: p
                  }, {
                    default: h(() => [...H[19] || (H[19] = [
                      x(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            b(ef, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, rs({
              left: h(() => [
                e.status.workflows.new.length ? (o(), R(Ps, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (o(), R(Ps, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (o(), R(Ps, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                b(Ps, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: V.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (o(), R(Ps, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (o(), R(Ps, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (o(), R(Ps, {
                  key: 2,
                  icon: "●",
                  count: me.value,
                  label: me.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                de.value ? (o(), R(Ps, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                N.value && !j.value && !de.value ? (o(), R(Ps, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                N.value ? y("", !0) : (o(), R(Ps, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              le.value ? {
                name: "footer",
                fn: h(() => [
                  H[21] || (H[21] = s("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  s("div", Vh, [
                    s("span", Bh, m(Ie.value), 1),
                    b(Pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: H[3] || (H[3] = (he) => ee.$emit("commit-changes"))
                    }, {
                      default: h(() => [...H[20] || (H[20] = [
                        x(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          e.status.is_detached_head ? (o(), R(us, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: H[6] || (H[6] = (he) => ee.$emit("create-branch"))
              }, {
                default: h(() => [...H[22] || (H[22] = [
                  x(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", Wh, [
            b(gs, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...H[23] || (H[23] = [
                x(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ae.value ? (o(), i(B, { key: 0 }, [
              W.value.length > 0 ? (o(), R(us, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${W.value.length} workflow${W.value.length === 1 ? "" : "s"} can't run`,
                description: T.value,
                items: W.value.map(ke)
              }, {
                actions: h(() => [
                  b(Pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[7] || (H[7] = (he) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...H[24] || (H[24] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : y("", !0),
              se.value.length > 0 ? (o(), R(us, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${se.value.length} workflow${se.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: se.value.map((he) => `${he.name} — ${he.models_needing_path_sync_count} model path${he.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  b(Pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[8] || (H[8] = (he) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...H[25] || (H[25] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !ne.value ? (o(), R(us, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  b(Pe, {
                    variant: "primary",
                    size: "sm",
                    disabled: $.value,
                    onClick: D
                  }, {
                    default: h(() => [
                      x(m($.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  b(Pe, {
                    variant: "secondary",
                    size: "sm",
                    onClick: H[9] || (H[9] = (he) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...H[26] || (H[26] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (o(), R(us, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Ce.value,
                items: be.value
              }, {
                actions: h(() => [
                  b(Pe, {
                    variant: "secondary",
                    size: "sm",
                    onClick: p
                  }, {
                    default: h(() => [...H[27] || (H[27] = [
                      x(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  b(Pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[10] || (H[10] = (he) => ee.$emit("view-nodes"))
                  }, {
                    default: h(() => [...H[28] || (H[28] = [
                      x(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (o(), R(us, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: h(() => [
                  b(Pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[11] || (H[11] = (he) => ee.$emit("view-nodes"))
                  }, {
                    default: h(() => [...H[29] || (H[29] = [
                      x(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0),
              L.value ? (o(), R(us, {
                key: 5,
                severity: "warning",
                icon: "!",
                title: "Environment reproducibility needs attention",
                description: "Some dependencies are missing source details needed to rebuild this environment elsewhere.",
                items: F.value
              }, {
                actions: h(() => [
                  b(Pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[12] || (H[12] = (he) => c.value = !0)
                  }, {
                    default: h(() => [...H[30] || (H[30] = [
                      x(" Review Issues ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["items"])) : d.value ? (o(), R(us, {
                key: 6,
                severity: "warning",
                icon: "!",
                title: "Environment reproducibility check failed",
                description: d.value
              }, {
                actions: h(() => [
                  b(Pe, {
                    variant: "secondary",
                    size: "sm",
                    loading: f.value,
                    onClick: ue
                  }, {
                    default: h(() => [...H[31] || (H[31] = [
                      x(" Retry ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }, 8, ["description"])) : y("", !0)
            ], 64)) : le.value ? (o(), i("span", Gh, "No issues")) : (o(), i("span", jh, "No runtime issues detected"))
          ])
        ]),
        _: 1
      }),
      b(Hv, {
        show: l.value,
        status: e.status,
        "is-repairing": S.value,
        onClose: H[13] || (H[13] = (he) => l.value = !1),
        onNavigateWorkflows: w,
        onNavigateNodes: g,
        onRepair: C
      }, null, 8, ["show", "status", "is-repairing"]),
      c.value && u.value ? (o(), R(Ml, {
        key: 0,
        warnings: u.value.warnings,
        onClose: H[14] || (H[14] = (he) => c.value = !1),
        onRevalidate: te
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), qh = /* @__PURE__ */ Te(Hh, [["__scopeId", "data-v-f6b165fd"]]);
async function Vo(e, t) {
  const n = await qs(e, t);
  if (!n.ok) {
    const a = await n.json().catch(() => ({}));
    throw new Error(a.error || a.message || `Request failed: ${n.status}`);
  }
  return n.json();
}
function Kh() {
  async function e() {
    try {
      return await Vo("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function t() {
    try {
      return await Vo("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function n() {
    await Vo("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function a() {
    await Vo("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: t,
    restart: n,
    kill: a
  };
}
const Jh = {
  key: 0,
  class: "base-title-count"
}, Qh = /* @__PURE__ */ Ee({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (t, n) => (o(), R(Cl(`h${e.level}`), {
      class: Be(["base-title", e.variant])
    }, {
      default: h(() => [
        ct(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), i("span", Jh, "(" + m(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), _n = /* @__PURE__ */ Te(Qh, [["__scopeId", "data-v-5a01561d"]]), Yh = ["value", "disabled"], Xh = {
  key: 0,
  value: "",
  disabled: ""
}, Zh = ["value"], ey = {
  key: 0,
  class: "base-select-error"
}, ty = /* @__PURE__ */ Ee({
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
    function t(a) {
      return typeof a == "string" ? a : a.value;
    }
    function n(a) {
      return typeof a == "string" ? a : a.label;
    }
    return (a, l) => (o(), i("div", {
      class: Be(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Be(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => a.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (o(), i("option", Xh, m(e.placeholder), 1)) : y("", !0),
        (o(!0), i(B, null, ye(e.options, (r) => (o(), i("option", {
          key: t(r),
          value: t(r)
        }, m(n(r)), 9, Zh))), 128))
      ], 42, Yh),
      e.error ? (o(), i("span", ey, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Qo = /* @__PURE__ */ Te(ty, [["__scopeId", "data-v-4996bfe0"]]), sy = { class: "popover-header" }, ny = { class: "popover-title" }, oy = { class: "popover-content" }, ay = {
  key: 0,
  class: "popover-actions"
}, ly = /* @__PURE__ */ Ee({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" },
    overlayZIndex: { default: 10004 }
  },
  emits: ["close"],
  setup(e) {
    return (t, n) => (o(), R(as, { to: "body" }, [
      e.show ? (o(), i("div", {
        key: 0,
        class: "popover-overlay",
        style: zt({ zIndex: e.overlayZIndex }),
        onClick: n[2] || (n[2] = (a) => t.$emit("close"))
      }, [
        s("div", {
          class: "popover",
          style: zt({ maxWidth: e.maxWidth }),
          onClick: n[1] || (n[1] = bt(() => {
          }, ["stop"]))
        }, [
          s("div", sy, [
            s("h4", ny, m(e.title), 1),
            s("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", oy, [
            ct(t.$slots, "content", {}, void 0)
          ]),
          t.$slots.actions ? (o(), i("div", ay, [
            ct(t.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ], 4)) : y("", !0)
    ]));
  }
}), _s = /* @__PURE__ */ Te(ly, [["__scopeId", "data-v-7c1f5547"]]), iy = { class: "detail-section" }, ry = {
  key: 0,
  class: "empty-message"
}, cy = { class: "model-header" }, uy = { class: "model-name" }, dy = { class: "model-details" }, my = { class: "model-row" }, fy = { class: "model-row" }, vy = { class: "label" }, py = {
  key: 0,
  class: "model-row model-row-nodes"
}, gy = { class: "node-list" }, hy = ["onClick"], yy = {
  key: 1,
  class: "model-row"
}, wy = { class: "value" }, _y = {
  key: 2,
  class: "model-row"
}, ky = { class: "value error" }, by = {
  key: 0,
  class: "model-actions"
}, $y = { class: "detail-section" }, Cy = {
  key: 0,
  class: "empty-message"
}, xy = { class: "node-content" }, Sy = { class: "node-main" }, Iy = { class: "node-name" }, Ey = { class: "node-badge" }, Ty = {
  key: 0,
  class: "node-version"
}, My = ["onClick"], Py = {
  key: 2,
  class: "node-install-queued"
}, Ry = {
  key: 0,
  class: "node-guidance"
}, Dy = { class: "details-footer" }, Ny = { class: "details-footer-actions" }, Ly = /* @__PURE__ */ Ee({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c, queueNodeInstall: u } = mt(), d = _(null), f = _(!1), v = _(null), p = _(!1), w = _({}), g = _(!1), k = _(/* @__PURE__ */ new Set()), $ = _(/* @__PURE__ */ new Set()), S = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function C(J) {
      switch (J) {
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
    function I(J) {
      switch (J) {
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
    function E(J) {
      switch (J) {
        case "installed":
          return "installed";
        case "version_gated":
          return "version-gated";
        case "uninstallable":
          return "community-mapped";
        case "missing":
        default:
          return "missing";
      }
    }
    function P(J) {
      switch (J) {
        case "installed":
          return "✓";
        case "version_gated":
          return "⚠";
        case "uninstallable":
          return "⚠";
        case "missing":
        default:
          return "✕";
      }
    }
    function D(J) {
      switch (J) {
        case "installed":
          return "Installed";
        case "version_gated":
          return "Needs newer ComfyUI";
        case "uninstallable":
          return "Community-Mapped";
        case "missing":
        default:
          return "Missing";
      }
    }
    function A(J) {
      if (!J.loaded_by || J.loaded_by.length === 0) return [];
      const L = J.hash || J.filename;
      return k.value.has(L) ? J.loaded_by : J.loaded_by.slice(0, 3);
    }
    function V(J) {
      return k.value.has(J);
    }
    function N(J) {
      k.value.has(J) ? k.value.delete(J) : k.value.add(J), k.value = new Set(k.value);
    }
    async function j() {
      f.value = !0, v.value = null;
      try {
        d.value = await l(n.workflowName);
      } catch (J) {
        v.value = J instanceof Error ? J.message : "Failed to load workflow details";
      } finally {
        f.value = !1;
      }
    }
    function le(J, L) {
      w.value[J] = L, p.value = !0;
    }
    async function ce(J) {
      try {
        await c(J);
      } catch (L) {
        v.value = L instanceof Error ? L.message : "Failed to open file location";
      }
    }
    async function Q(J) {
      if (J.package_id)
        try {
          const L = J.latest_version || "latest";
          await u({
            id: J.package_id,
            version: L,
            selected_version: L,
            mode: "remote",
            channel: "default"
          }), $.value.add(J.package_id);
        } catch (L) {
          v.value = L instanceof Error ? L.message : "Failed to queue node install";
        }
    }
    async function ve() {
      if (!p.value) {
        a("close");
        return;
      }
      f.value = !0, v.value = null;
      try {
        for (const [J, L] of Object.entries(w.value))
          await r(n.workflowName, J, L);
        a("refresh"), a("close");
      } catch (J) {
        v.value = J instanceof Error ? J.message : "Failed to save changes";
      } finally {
        f.value = !1;
      }
    }
    return ut(j), (J, L) => (o(), i(B, null, [
      b(Mt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: f.value,
        error: v.value || void 0,
        onClose: L[5] || (L[5] = (F) => a("close"))
      }, {
        body: h(() => [
          d.value ? (o(), i(B, { key: 0 }, [
            s("section", iy, [
              b(_n, { variant: "section" }, {
                default: h(() => [
                  x("MODELS USED (" + m(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (o(), i("div", ry, " No models used in this workflow ")) : y("", !0),
              (o(!0), i(B, null, ye(d.value.models, (F) => {
                var ue;
                return o(), i("div", {
                  key: F.hash || F.filename,
                  class: "model-card"
                }, [
                  s("div", cy, [
                    L[7] || (L[7] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", uy, m(F.filename), 1)
                  ]),
                  s("div", dy, [
                    s("div", my, [
                      L[8] || (L[8] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: Be(["value", C(F.status)])
                      }, m(I(F.status)), 3)
                    ]),
                    s("div", fy, [
                      s("span", vy, [
                        L[9] || (L[9] = x(" Importance: ", -1)),
                        b(ic, {
                          size: 14,
                          title: "About importance levels",
                          onClick: L[0] || (L[0] = (te) => g.value = !0)
                        })
                      ]),
                      b(Qo, {
                        "model-value": w.value[F.filename] || F.importance,
                        options: S,
                        "onUpdate:modelValue": (te) => le(F.filename, te)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    F.loaded_by && F.loaded_by.length > 0 ? (o(), i("div", py, [
                      L[10] || (L[10] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", gy, [
                        (o(!0), i(B, null, ye(A(F), (te, me) => (o(), i("div", {
                          key: `${te.node_id}-${me}`,
                          class: "node-reference"
                        }, m(te.node_type) + " (Node #" + m(te.node_id) + ") ", 1))), 128)),
                        F.loaded_by.length > 3 ? (o(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (te) => N(F.hash || F.filename)
                        }, m(V(F.hash || F.filename) ? "▼ Show less" : `▶ View all (${F.loaded_by.length})`), 9, hy)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    F.size_mb ? (o(), i("div", yy, [
                      L[11] || (L[11] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", wy, m(F.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    F.has_category_mismatch ? (o(), i("div", _y, [
                      L[14] || (L[14] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", ky, [
                        L[12] || (L[12] = x(" In ", -1)),
                        s("code", null, m(F.actual_category) + "/", 1),
                        L[13] || (L[13] = x(" but loader needs ", -1)),
                        s("code", null, m((ue = F.expected_categories) == null ? void 0 : ue[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  F.status !== "available" ? (o(), i("div", by, [
                    F.status === "downloadable" ? (o(), R(Ue, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: L[1] || (L[1] = (te) => a("resolve"))
                    }, {
                      default: h(() => [...L[15] || (L[15] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    })) : F.status === "category_mismatch" && F.file_path ? (o(), R(Ue, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => ce(F.file_path)
                    }, {
                      default: h(() => [...L[16] || (L[16] = [
                        x(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : F.status !== "path_mismatch" ? (o(), R(Ue, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: L[2] || (L[2] = (te) => a("resolve"))
                    }, {
                      default: h(() => [...L[17] || (L[17] = [
                        x(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            s("section", $y, [
              b(_n, { variant: "section" }, {
                default: h(() => [
                  x("NODES USED (" + m(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (o(), i("div", Cy, " No custom nodes used in this workflow ")) : y("", !0),
              (o(!0), i(B, null, ye(d.value.nodes, (F, ue) => (o(), i("div", {
                key: `${F.name}-${F.status}-${ue}`,
                class: "node-item"
              }, [
                s("span", {
                  class: Be(["node-status", E(F.status)])
                }, m(P(F.status)), 3),
                s("div", xy, [
                  s("div", Sy, [
                    s("span", Iy, m(F.name), 1),
                    s("span", Ey, m(D(F.status)), 1),
                    F.version ? (o(), i("span", Ty, "v" + m(F.version), 1)) : y("", !0),
                    F.status === "uninstallable" && F.package_id && !$.value.has(F.package_id) ? (o(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (te) => Q(F)
                    }, " Install ", 8, My)) : F.status === "uninstallable" && F.package_id && $.value.has(F.package_id) ? (o(), i("span", Py, " Queued ")) : y("", !0)
                  ]),
                  F.guidance ? (o(), i("div", Ry, m(F.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          s("div", Dy, [
            b(Ue, {
              variant: "secondary",
              onClick: L[3] || (L[3] = (F) => a("resolve"))
            }, {
              default: h(() => [...L[18] || (L[18] = [
                x(" Review Resolution ", -1)
              ])]),
              _: 1
            }),
            s("div", Ny, [
              b(Ue, {
                variant: "secondary",
                onClick: L[4] || (L[4] = (F) => a("close"))
              }, {
                default: h(() => [...L[19] || (L[19] = [
                  x(" Close ", -1)
                ])]),
                _: 1
              }),
              p.value ? (o(), R(Ue, {
                key: 0,
                variant: "primary",
                onClick: ve
              }, {
                default: h(() => [...L[20] || (L[20] = [
                  x(" Save Changes ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      b(_s, {
        show: g.value,
        title: "Model Importance Levels",
        onClose: L[6] || (L[6] = (F) => g.value = !1)
      }, {
        content: h(() => [...L[21] || (L[21] = [
          s("ul", { class: "importance-info-list" }, [
            s("li", null, [
              s("strong", null, "Required"),
              x(" — Must have for workflow to run")
            ]),
            s("li", null, [
              s("strong", null, "Flexible"),
              x(" — Workflow adapts if missing")
            ]),
            s("li", null, [
              s("strong", null, "Optional"),
              x(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Uy = /* @__PURE__ */ Te(Ly, [["__scopeId", "data-v-00cf34e6"]]), vt = Cn({
  items: [],
  status: "idle"
});
let Ls = null;
function fc() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function ja(e) {
  return vt.items.find((t) => t.id === e);
}
async function Tn() {
  if (vt.status === "downloading") return;
  const e = vt.items.find((t) => t.status === "queued");
  if (!e) {
    vt.status = "idle";
    return;
  }
  vt.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Oy(e), e.status = "completed", e.progress = 100;
  } catch (t) {
    e.status = "failed", e.error = t instanceof Error ? t.message : "Download failed", e.retries++;
  } finally {
    vt.status = "idle", Tn();
  }
}
async function Oy(e) {
  return new Promise((t, n) => {
    Ls && (Ls.close(), Ls = null);
    const a = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${a}`);
    Ls = l;
    let r = Date.now(), c = 0, u = Date.now(), d = !1;
    const f = 2e3, v = window.setInterval(() => {
      d || Date.now() - u > f && (e.speed = 0, e.eta = 0);
    }, 250), p = () => {
      window.clearInterval(v);
    };
    l.onmessage = (w) => {
      try {
        const g = JSON.parse(w.data);
        switch (g.type) {
          case "progress":
            e.downloaded = g.downloaded || 0, e.size = g.total || e.size, u = Date.now();
            const k = u, $ = (k - r) / 1e3, S = e.downloaded - c;
            if (S > 0 && $ > 0)
              if (e.speed = S / $, r = k, c = e.downloaded, e.speed > 0 && e.size > 0) {
                const C = e.size - e.downloaded;
                e.eta = C / e.speed;
              } else
                e.eta = 0;
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            d = !0, p(), l.close(), Ls = null, t();
            break;
          case "error":
            d = !0, p(), l.close(), Ls = null, n(new Error(g.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      p(), l.close(), Ls = null, d || n(new Error("Connection lost"));
    };
  });
}
async function Ay() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const t = await e.json();
    if (!t.pending_downloads || t.pending_downloads.length === 0) return;
    for (const n of t.pending_downloads) {
      if (vt.items.some((l) => l.url === n.url && l.filename === n.filename))
        continue;
      const a = {
        id: fc(),
        workflow: n.workflow,
        filename: n.filename,
        url: n.url,
        targetPath: n.target_path,
        size: n.size || 0,
        type: "model",
        status: "paused",
        // Start as paused so user can review
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      vt.items.push(a);
    }
    console.log(`[ComfyGit] Loaded ${t.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function qn() {
  function e(S) {
    for (const C of S) {
      if (vt.items.some(
        (P) => P.url === C.url && P.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(P.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const E = {
        id: fc(),
        workflow: C.workflow,
        filename: C.filename,
        url: C.url,
        targetPath: C.targetPath,
        size: C.size || 0,
        type: C.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      vt.items.push(E);
    }
    vt.status === "idle" && Tn();
  }
  async function t(S) {
    const C = ja(S);
    if (C) {
      if (C.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(C.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Ls && (Ls.close(), Ls = null), C.status = "failed", C.error = "Cancelled by user", vt.status = "idle", Tn();
      } else if (C.status === "queued") {
        const I = vt.items.findIndex((E) => E.id === S);
        I >= 0 && vt.items.splice(I, 1);
      }
    }
  }
  function n(S) {
    const C = ja(S);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, vt.status === "idle" && Tn());
  }
  function a(S) {
    const C = ja(S);
    !C || C.status !== "paused" || (C.status = "queued", vt.status === "idle" && Tn());
  }
  function l() {
    const S = vt.items.filter((C) => C.status === "paused");
    for (const C of S)
      C.status = "queued";
    vt.status === "idle" && Tn();
  }
  function r(S) {
    const C = vt.items.findIndex((I) => I.id === S);
    C >= 0 && ["completed", "failed", "paused"].includes(vt.items[C].status) && vt.items.splice(C, 1);
  }
  function c() {
    vt.items = vt.items.filter((S) => S.status !== "completed");
  }
  function u() {
    vt.items = vt.items.filter((S) => S.status !== "failed");
  }
  const d = M(
    () => vt.items.find((S) => S.status === "downloading")
  ), f = M(
    () => vt.items.filter((S) => S.status === "queued")
  ), v = M(
    () => vt.items.filter((S) => S.status === "completed")
  ), p = M(
    () => vt.items.filter((S) => S.status === "failed")
  ), w = M(
    () => vt.items.filter((S) => S.status === "paused")
  ), g = M(() => vt.items.length > 0), k = M(
    () => vt.items.filter((S) => S.status === "queued" || S.status === "downloading").length
  ), $ = M(
    () => vt.items.some((S) => S.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Xo(vt),
    // Computed
    currentDownload: d,
    queuedItems: f,
    completedItems: v,
    failedItems: p,
    pausedItems: w,
    hasItems: g,
    activeCount: k,
    hasPaused: $,
    // Actions
    addToQueue: e,
    cancelDownload: t,
    retryDownload: n,
    resumeDownload: a,
    resumeAllPaused: l,
    removeItem: r,
    clearCompleted: c,
    clearFailed: u,
    loadPendingDownloads: Ay
  };
}
function vc() {
  const e = _(null), t = _(null), n = _([]), a = _([]), l = _(!1), r = _(null);
  async function c(I, E) {
    const P = await qs(I, E);
    if (!P.ok) {
      const D = await P.json().catch(() => ({})), A = D.error || D.message || `Request failed: ${P.status}`;
      throw new Error(A);
    }
    return P.json();
  }
  async function u(I) {
    l.value = !0, r.value = null;
    try {
      let E;
      return Xn() || (E = await c(
        `/v2/comfygit/workflow/${I}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), E.nodes.version_gated = E.nodes.version_gated || [], E.nodes.uninstallable = E.nodes.uninstallable || [], E.node_guidance = E.node_guidance || {}, E.package_aliases = E.package_aliases || {}, e.value = E, E;
    } catch (E) {
      const P = E instanceof Error ? E.message : "Unknown error occurred";
      throw r.value = P, E;
    } finally {
      l.value = !1;
    }
  }
  async function d(I, E, P, D) {
    l.value = !0, r.value = null;
    try {
      let A;
      if (!Xn()) {
        const V = Object.fromEntries(E), N = Object.fromEntries(P), j = D ? Array.from(D) : [];
        A = await c(
          `/v2/comfygit/workflow/${I}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: V,
              model_choices: N,
              skipped_packages: j
            })
          }
        );
      }
      return t.value = A, A;
    } catch (A) {
      const V = A instanceof Error ? A.message : "Unknown error occurred";
      throw r.value = V, A;
    } finally {
      l.value = !1;
    }
  }
  async function f(I, E = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return Xn() || (P = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: I, limit: E })
        }
      )), n.value = P.results, P.results;
    } catch (P) {
      const D = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = D, P;
    } finally {
      l.value = !1;
    }
  }
  async function v(I, E = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return Xn() || (P = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: I, limit: E })
        }
      )), a.value = P.results, P.results;
    } catch (P) {
      const D = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = D, P;
    } finally {
      l.value = !1;
    }
  }
  const p = Cn({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: [],
    nodesMarkedOptional: [],
    nodesMapped: [],
    modelPathsSynced: 0
  });
  function w() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.nodesInstalled = [], p.nodesMarkedOptional = [], p.nodesMapped = [], p.modelPathsSynced = 0, p.dependencyReviews = [], p.installError = void 0, p.needsRestart = void 0, p.error = void 0, p.nodeInstallProgress = void 0;
  }
  async function g(I) {
    p.phase = "installing", p.nodesInstalled = [], p.installError = void 0, p.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Xn(), await k(I);
    } catch (E) {
      const P = E instanceof Error ? E.message : "Failed to install nodes";
      throw p.installError = P, E;
    }
  }
  async function k(I) {
    var D, A, V;
    const E = await c(
      `/v2/comfygit/workflow/${I}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: p.nodesToInstall
        })
      }
    );
    if (p.nodeInstallProgress) {
      p.nodeInstallProgress.totalNodes = p.nodesToInstall.length;
      const N = new Map(((D = E.failed) == null ? void 0 : D.map((le) => [le.node_id, le.error])) || []), j = new Map((E.dependency_review_required || []).map((le) => [le.node_id, le]));
      for (let le = 0; le < p.nodesToInstall.length; le++) {
        const ce = p.nodesToInstall[le], Q = N.get(ce), ve = j.get(ce);
        p.nodeInstallProgress.completedNodes.push({
          node_id: ce,
          success: !Q && !ve,
          error: Q || (ve == null ? void 0 : ve.error),
          dependency_review: ve == null ? void 0 : ve.dependency_review
        });
      }
    }
    p.nodesInstalled = E.nodes_installed, p.dependencyReviews = E.dependency_review_required || [], p.needsRestart = E.nodes_installed.length > 0;
    const P = (((A = E.failed) == null ? void 0 : A.length) || 0) + (((V = E.dependency_review_required) == null ? void 0 : V.length) || 0);
    return P > 0 && (p.installError = `${P} package(s) need attention`), E;
  }
  async function $(I, E, P) {
    w(), p.phase = "resolving", r.value = null;
    const D = Object.fromEntries(E), A = Object.fromEntries(P);
    try {
      const V = await fetch(`/v2/comfygit/workflow/${I}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: D,
          model_choices: A
        })
      });
      if (!V.ok)
        throw new Error(`Request failed: ${V.status}`);
      if (!V.body)
        throw new Error("No response body");
      const N = V.body.getReader(), j = new TextDecoder();
      let le = "";
      for (; ; ) {
        const { done: ce, value: Q } = await N.read();
        if (ce) break;
        le += j.decode(Q, { stream: !0 });
        const ve = le.split(`

`);
        le = ve.pop() || "";
        for (const J of ve) {
          if (!J.trim()) continue;
          const L = J.split(`
`);
          let F = "", ue = "";
          for (const te of L)
            te.startsWith("event: ") ? F = te.slice(7) : te.startsWith("data: ") && (ue = te.slice(6));
          if (ue)
            try {
              const te = JSON.parse(ue);
              S(F, te);
            } catch (te) {
              console.warn("Failed to parse SSE event:", te);
            }
        }
      }
    } catch (V) {
      const N = V instanceof Error ? V.message : "Unknown error occurred";
      throw r.value = N, p.error = N, p.phase = "error", V;
    }
  }
  function S(I, E) {
    switch (I) {
      case "batch_start":
        p.phase = "downloading", p.totalFiles = E.total;
        break;
      case "file_start":
        p.currentFile = E.filename, p.currentFileIndex = E.index, p.bytesDownloaded = 0, p.bytesTotal = void 0;
        break;
      case "file_progress":
        p.bytesDownloaded = E.downloaded, p.bytesTotal = E.total;
        break;
      case "file_complete":
        p.completedFiles.push({
          filename: E.filename,
          success: E.success,
          error: E.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        p.nodesToInstall = E.nodes_to_install || [], p.nodesMarkedOptional = E.nodes_marked_optional || [], p.nodesMapped = E.nodes_mapped || [], p.modelPathsSynced = E.model_paths_synced || 0, E.download_results && (p.completedFiles = E.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = E.message, p.phase = "error", r.value = E.message;
        break;
    }
  }
  function C(I, E) {
    const { addToQueue: P } = qn(), D = E.filter((A) => A.url && A.target_path).map((A) => ({
      workflow: I,
      filename: A.filename,
      url: A.url,
      targetPath: A.target_path,
      size: A.size || 0,
      type: "model"
    }));
    return D.length > 0 && P(D), D.length;
  }
  return {
    // State
    result: e,
    appliedResult: t,
    searchResults: n,
    modelSearchResults: a,
    isLoading: l,
    error: r,
    progress: p,
    // Methods
    analyzeWorkflow: u,
    applyResolution: d,
    applyResolutionWithProgress: $,
    installNodes: g,
    searchNodes: f,
    searchModels: v,
    resetProgress: w,
    queueModelDownloads: C
  };
}
const zy = { class: "resolution-stepper" }, Fy = { class: "stepper-header" }, Vy = ["onClick"], By = {
  key: 0,
  class: "step-icon"
}, Wy = {
  key: 1,
  class: "step-number"
}, Gy = { class: "step-label" }, jy = {
  key: 0,
  class: "step-connector"
}, Hy = { class: "stepper-content" }, qy = /* @__PURE__ */ Ee({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(e, { emit: t }) {
    const n = e, a = t;
    function l(f) {
      var v;
      if ((v = n.stepStats) != null && v[f]) {
        const p = n.stepStats[f];
        return p.total > 0 && p.resolved === p.total;
      }
      return n.completedSteps.includes(f);
    }
    function r(f) {
      var v;
      if ((v = n.stepStats) != null && v[f]) {
        const p = n.stepStats[f];
        return p.resolved > 0 && p.resolved < p.total;
      }
      return !1;
    }
    function c(f) {
      return l(f) ? "state-complete" : r(f) ? "state-partial" : "state-pending";
    }
    function u(f) {
      return !1;
    }
    function d(f) {
      a("step-change", f);
    }
    return (f, v) => (o(), i("div", zy, [
      s("div", Fy, [
        (o(!0), i(B, null, ye(e.steps, (p, w) => (o(), i("div", {
          key: p.id,
          class: Be(["step", {
            active: e.currentStep === p.id,
            completed: l(p.id),
            "in-progress": r(p.id),
            disabled: u(p.id)
          }]),
          onClick: (g) => d(p.id)
        }, [
          s("div", {
            class: Be(["step-indicator", c(p.id)])
          }, [
            l(p.id) ? (o(), i("span", By, "✓")) : (o(), i("span", Wy, m(w + 1), 1))
          ], 2),
          s("div", Gy, m(p.label), 1),
          w < e.steps.length - 1 ? (o(), i("div", jy)) : y("", !0)
        ], 10, Vy))), 128))
      ]),
      s("div", Hy, [
        ct(f.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Ky = /* @__PURE__ */ Te(qy, [["__scopeId", "data-v-2a7b3af8"]]), Jy = { class: "item-body" }, Qy = {
  key: 0,
  class: "resolved-state"
}, Yy = { class: "resolved-message" }, Xy = {
  key: 1,
  class: "unresolved"
}, Zy = {
  key: 0,
  class: "installed-packs-section"
}, e1 = { class: "installed-packs-list" }, t1 = ["onClick"], s1 = { class: "installed-pack-name" }, n1 = { class: "installed-pack-source" }, o1 = { class: "action-buttons" }, a1 = /* @__PURE__ */ Ee({
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
    choice: {},
    installedNodePacks: {}
  },
  emits: ["mark-optional", "skip", "manual-entry", "search", "clear-choice", "installed-pack-selected"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = M(() => !!n.choice), r = M(() => {
      var v;
      return (v = n.choice) == null ? void 0 : v.action;
    }), c = M(() => {
      var v;
      return (v = n.choice) == null ? void 0 : v.package_id;
    }), u = M(() => n.installedNodePacks || []), d = M(() => {
      var v, p;
      switch (r.value) {
        case "install":
          return ((v = n.choice) == null ? void 0 : v.install_source) === "git" ? c.value ? `Will install ${c.value} from GitHub` : "Will install from GitHub" : ((p = n.choice) == null ? void 0 : p.install_source) === "registry" ? c.value ? `Will install ${c.value} from Registry` : "Will install from Registry" : c.value ? `Will install ${c.value}` : "Will install selected package";
        case "map-installed":
          return c.value ? `Mapped to ${c.value}` : "Mapped to installed node pack";
        case "manual":
          return c.value ? `Will use ${c.value}` : "Will use manual package";
        case "optional":
          return "Marked optional";
        case "skip":
          return "Will be skipped";
        default:
          return "Decision saved";
      }
    });
    function f(v) {
      switch (v) {
        case "development":
          return "dev";
        case "git":
          return "git";
        case "registry":
          return "registry";
        default:
          return v || "unknown";
      }
    }
    return (v, p) => (o(), i("div", {
      class: Be(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: l.value }])
    }, [
      s("div", Jy, [
        l.value ? (o(), i("div", Qy, [
          s("span", Yy, m(d.value), 1),
          b(Ue, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (w) => a("clear-choice"))
          }, {
            default: h(() => [...p[4] || (p[4] = [
              x(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : (o(), i("div", Xy, [
          u.value.length > 0 ? (o(), i("div", Zy, [
            p[5] || (p[5] = s("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            s("div", e1, [
              (o(!0), i(B, null, ye(u.value, (w) => (o(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => a("installed-pack-selected", w.package_id)
              }, [
                s("span", s1, m(w.package_id), 1),
                s("span", n1, m(f(w.source)), 1)
              ], 8, t1))), 128))
            ])
          ])) : y("", !0),
          s("div", o1, [
            b(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (w) => a("search"))
            }, {
              default: h(() => [...p[6] || (p[6] = [
                x(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            b(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (w) => a("manual-entry"))
            }, {
              default: h(() => [...p[7] || (p[7] = [
                x(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (w) => a("mark-optional"))
            }, {
              default: h(() => [...p[8] || (p[8] = [
                x(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), l1 = /* @__PURE__ */ Te(a1, [["__scopeId", "data-v-4338b305"]]), i1 = { class: "item-navigator" }, r1 = { class: "nav-item-info" }, c1 = ["title"], u1 = { class: "nav-controls" }, d1 = { class: "nav-arrows" }, m1 = ["disabled"], f1 = ["disabled"], v1 = { class: "nav-position" }, p1 = /* @__PURE__ */ Ee({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: t }) {
    const n = t;
    return (a, l) => (o(), i("div", i1, [
      s("div", r1, [
        s("code", {
          class: "item-name",
          title: e.itemName
        }, m(e.itemName), 9, c1)
      ]),
      s("div", u1, [
        s("div", d1, [
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, m1),
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => n("next")),
            title: "Next item"
          }, " → ", 8, f1)
        ]),
        s("span", v1, m(e.currentIndex + 1) + "/" + m(e.totalItems), 1)
      ])
    ]));
  }
}), pc = /* @__PURE__ */ Te(p1, [["__scopeId", "data-v-74af7920"]]), g1 = { class: "node-resolution-step" }, h1 = {
  key: 0,
  class: "auto-resolved-section"
}, y1 = { class: "section-header" }, w1 = { class: "stat-badge" }, _1 = { class: "resolved-packages-list" }, k1 = { class: "package-info" }, b1 = { class: "package-id" }, $1 = { class: "node-count" }, C1 = { class: "package-actions" }, x1 = {
  key: 0,
  class: "status-badge install"
}, S1 = {
  key: 1,
  class: "status-badge skip"
}, I1 = ["onClick"], E1 = {
  key: 1,
  class: "section-divider"
}, T1 = { class: "step-header" }, M1 = { class: "stat-badge" }, P1 = {
  key: 1,
  class: "step-body"
}, R1 = {
  key: 3,
  class: "empty-state"
}, D1 = { class: "node-modal-body" }, N1 = { class: "node-search-results-container" }, L1 = {
  key: 0,
  class: "node-search-results"
}, U1 = { class: "node-result-header" }, O1 = { class: "node-result-title" }, A1 = { class: "node-result-package-id" }, z1 = {
  key: 0,
  class: "node-result-display-name"
}, F1 = {
  key: 0,
  class: "node-result-stats",
  "aria-label": "Package popularity"
}, V1 = {
  key: 0,
  class: "node-result-stat"
}, B1 = {
  key: 1,
  class: "node-result-stat"
}, W1 = {
  key: 0,
  class: "node-result-description"
}, G1 = { class: "node-result-actions" }, j1 = ["onClick"], H1 = ["onClick"], q1 = {
  key: 1,
  class: "node-empty-state"
}, K1 = {
  key: 2,
  class: "node-empty-state"
}, J1 = {
  key: 3,
  class: "node-empty-state"
}, Q1 = { class: "node-manual-entry-modal" }, Y1 = { class: "node-modal-body" }, X1 = { class: "node-modal-actions" }, Z1 = /* @__PURE__ */ Ee({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {},
    installedNodePacks: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "installed-pack-selected", "clear-choice", "package-skip"],
  setup(e, { emit: t }) {
    const n = e, a = t, { searchNodes: l } = vc(), r = _(0), c = _(!1), u = _(!1), d = _(""), f = _(""), v = _([]), p = _(!1), w = _(!1);
    function g() {
      w.value && ce(), w.value = !1;
    }
    const k = M(() => n.nodes[r.value]), $ = M(() => n.nodes.filter((W) => n.nodeChoices.has(W.node_type)).length), S = M(() => n.autoResolvedPackages.filter((W) => !n.skippedPackages.has(W.package_id)).length);
    function C(W) {
      return n.skippedPackages.has(W);
    }
    function I(W) {
      a("package-skip", W);
    }
    function E(W) {
      W >= 0 && W < n.nodes.length && (r.value = W);
    }
    function P() {
      var W;
      for (let se = r.value + 1; se < n.nodes.length; se++) {
        const ne = n.nodes[se];
        if (!((W = n.nodeChoices) != null && W.has(ne.node_type))) {
          E(se);
          return;
        }
      }
    }
    function D() {
      k.value && (a("mark-optional", k.value.node_type), Gt(() => P()));
    }
    function A() {
      k.value && (a("skip", k.value.node_type), Gt(() => P()));
    }
    function V() {
      k.value && a("clear-choice", k.value.node_type);
    }
    function N() {
      k.value && (d.value = k.value.node_type, v.value = [], c.value = !0, L(d.value));
    }
    function j() {
      f.value = "", u.value = !0;
    }
    function le(W) {
      k.value && (a("installed-pack-selected", k.value.node_type, W), Gt(() => P()));
    }
    function ce() {
      c.value = !1, d.value = "", v.value = [];
    }
    function Q() {
      u.value = !1, f.value = "";
    }
    let ve = null;
    function J() {
      ve && clearTimeout(ve), ve = setTimeout(() => {
        L(d.value);
      }, 300);
    }
    async function L(W) {
      if (!W.trim()) {
        v.value = [];
        return;
      }
      p.value = !0;
      try {
        v.value = await l(W, 10);
      } catch {
        v.value = [];
      } finally {
        p.value = !1;
      }
    }
    function F(W) {
      k.value && (a("manual-entry", k.value.node_type, W.package_id, {
        install_source: "registry",
        version: W.registry_version || null
      }), ce(), Gt(() => P()));
    }
    function ue(W) {
      !k.value || !W.repository || (a("manual-entry", k.value.node_type, W.package_id, {
        install_source: "git",
        repository: W.repository
      }), ce(), Gt(() => P()));
    }
    function te(W) {
      return !!W.github_stars || !!W.downloads;
    }
    function me(W) {
      return W ? Intl.NumberFormat("en", {
        notation: "compact",
        maximumFractionDigits: W >= 1e3 ? 1 : 0
      }).format(W) : "";
    }
    function de() {
      !k.value || !f.value.trim() || (a("manual-entry", k.value.node_type, f.value.trim()), Q(), Gt(() => P()));
    }
    return (W, se) => {
      var ne, Me;
      return o(), i("div", g1, [
        e.autoResolvedPackages.length > 0 ? (o(), i("div", h1, [
          s("div", y1, [
            se[6] || (se[6] = s("div", { class: "section-info" }, [
              s("h4", { class: "section-title" }, "Packages to Install"),
              s("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            s("span", w1, m(S.value) + "/" + m(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          s("div", _1, [
            (o(!0), i(B, null, ye(e.autoResolvedPackages, (pe) => (o(), i("div", {
              key: pe.package_id,
              class: "resolved-package-item"
            }, [
              s("div", k1, [
                s("code", b1, m(pe.package_id), 1),
                s("span", $1, m(pe.node_types_count) + " node type" + m(pe.node_types_count > 1 ? "s" : ""), 1)
              ]),
              s("div", C1, [
                C(pe.package_id) ? (o(), i("span", S1, " SKIPPED ")) : (o(), i("span", x1, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (ze) => I(pe.package_id)
                }, m(C(pe.package_id) ? "Include" : "Skip"), 9, I1)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (o(), i("div", E1)) : y("", !0),
        e.nodes.length > 0 ? (o(), i(B, { key: 2 }, [
          s("div", T1, [
            se[7] || (se[7] = s("div", { class: "step-info" }, [
              s("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              s("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            s("span", M1, m($.value) + "/" + m(e.nodes.length) + " resolved", 1)
          ]),
          k.value ? (o(), R(pc, {
            key: 0,
            "item-name": k.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: se[0] || (se[0] = (pe) => E(r.value - 1)),
            onNext: se[1] || (se[1] = (pe) => E(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          k.value ? (o(), i("div", P1, [
            b(l1, {
              "node-type": k.value.node_type,
              "has-multiple-options": !!((ne = k.value.options) != null && ne.length),
              choice: (Me = e.nodeChoices) == null ? void 0 : Me.get(k.value.node_type),
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: D,
              onSkip: A,
              onManualEntry: j,
              onSearch: N,
              onClearChoice: V,
              onInstalledPackSelected: le
            }, null, 8, ["node-type", "has-multiple-options", "choice", "installed-node-packs"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (o(), i("div", R1, [...se[8] || (se[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (o(), R(as, { to: "body" }, [
          c.value ? (o(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: se[4] || (se[4] = bt((pe) => w.value = !0, ["self"])),
            onMouseup: bt(g, ["self"])
          }, [
            s("div", {
              class: "node-search-modal",
              onMousedown: se[3] || (se[3] = (pe) => w.value = !1)
            }, [
              s("div", { class: "node-modal-header" }, [
                se[9] || (se[9] = s("h4", null, "Search Node Registry", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: ce
                }, "✕")
              ]),
              s("div", D1, [
                b(Rt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": se[2] || (se[2] = (pe) => d.value = pe),
                  placeholder: "Search registry by node type or package name...",
                  onInput: J
                }, null, 8, ["modelValue"]),
                s("div", N1, [
                  v.value.length > 0 ? (o(), i("div", L1, [
                    (o(!0), i(B, null, ye(v.value, (pe) => (o(), i("div", {
                      key: pe.package_id,
                      class: "node-search-result-item"
                    }, [
                      s("div", U1, [
                        s("div", O1, [
                          s("code", A1, m(pe.package_id), 1),
                          pe.display_name && pe.display_name !== pe.package_id ? (o(), i("span", z1, m(pe.display_name), 1)) : y("", !0)
                        ]),
                        te(pe) ? (o(), i("div", F1, [
                          pe.github_stars ? (o(), i("span", V1, " ★ " + m(me(pe.github_stars)), 1)) : y("", !0),
                          pe.downloads ? (o(), i("span", B1, " ↓ " + m(me(pe.downloads)), 1)) : y("", !0)
                        ])) : y("", !0)
                      ]),
                      pe.description ? (o(), i("div", W1, m(pe.description), 1)) : y("", !0),
                      s("div", G1, [
                        pe.can_install_registry ? (o(), i("button", {
                          key: 0,
                          type: "button",
                          class: "node-result-action",
                          onClick: (ze) => F(pe)
                        }, " Install from Registry ", 8, j1)) : y("", !0),
                        pe.can_install_git ? (o(), i("button", {
                          key: 1,
                          type: "button",
                          class: "node-result-action secondary",
                          onClick: (ze) => ue(pe)
                        }, " Install from GitHub ", 8, H1)) : y("", !0)
                      ])
                    ]))), 128))
                  ])) : p.value ? (o(), i("div", q1, "Searching...")) : d.value ? (o(), i("div", K1, 'No packages found matching "' + m(d.value) + '"', 1)) : (o(), i("div", J1, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (o(), R(as, { to: "body" }, [
          u.value ? (o(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: bt(Q, ["self"])
          }, [
            s("div", Q1, [
              s("div", { class: "node-modal-header" }, [
                se[10] || (se[10] = s("h4", null, "Enter Package Manually", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: Q
                }, "✕")
              ]),
              s("div", Y1, [
                b(Rt, {
                  modelValue: f.value,
                  "onUpdate:modelValue": se[5] || (se[5] = (pe) => f.value = pe),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", X1, [
                  b(Ue, {
                    variant: "secondary",
                    onClick: Q
                  }, {
                    default: h(() => [...se[11] || (se[11] = [
                      x("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(Ue, {
                    variant: "primary",
                    disabled: !f.value.trim(),
                    onClick: de
                  }, {
                    default: h(() => [...se[12] || (se[12] = [
                      x(" Add Package ", -1)
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
}), ew = /* @__PURE__ */ Te(Z1, [["__scopeId", "data-v-a85bb4b7"]]), tw = /* @__PURE__ */ Ee({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = M(() => t.confidence >= 0.9 ? "high" : t.confidence >= 0.7 ? "medium" : "low"), a = M(() => `confidence-${n.value}`), l = M(() => t.showPercentage ? `${Math.round(t.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (r, c) => (o(), i("span", {
      class: Be(["confidence-badge", a.value, e.size])
    }, m(l.value), 3));
  }
}), sw = /* @__PURE__ */ Te(tw, [["__scopeId", "data-v-17ec4b80"]]), nw = { class: "node-info" }, ow = { class: "node-info-text" }, aw = { class: "item-body" }, lw = {
  key: 0,
  class: "resolved-state"
}, iw = {
  key: 1,
  class: "multiple-options"
}, rw = { class: "options-list" }, cw = ["onClick"], uw = ["name", "value", "checked", "onChange"], dw = { class: "option-content" }, mw = { class: "option-header" }, fw = { class: "option-filename" }, vw = { class: "option-meta" }, pw = { class: "option-size" }, gw = { class: "option-category" }, hw = { class: "option-path" }, yw = { class: "action-buttons" }, ww = {
  key: 2,
  class: "unresolved"
}, _w = { class: "action-buttons" }, kw = /* @__PURE__ */ Ee({
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
  setup(e, { emit: t }) {
    const n = e, a = t, l = M(() => !!n.choice);
    M(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), M(() => {
      var d, f;
      return ((f = (d = n.choice) == null ? void 0 : d.selected_model) == null ? void 0 : f.filename) || "selected";
    });
    const r = M(() => {
      switch (n.status) {
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
      a("option-selected", d);
    }
    function u(d) {
      if (!d) return "Unknown";
      const f = d / (1024 * 1024 * 1024);
      return f >= 1 ? `${f.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, f) => (o(), i("div", {
      class: Be(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      s("div", nw, [
        s("span", ow, [
          f[7] || (f[7] = x("Used by: ", -1)),
          s("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (o(), i("span", {
          key: 0,
          class: Be(["status-badge", r.value])
        }, m(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", aw, [
        l.value ? (o(), i("div", lw, [
          b(Ue, {
            variant: "ghost",
            size: "sm",
            onClick: f[0] || (f[0] = (v) => a("clear-choice"))
          }, {
            default: h(() => [...f[8] || (f[8] = [
              x(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (o(), i("div", iw, [
          f[12] || (f[12] = s("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          s("div", rw, [
            (o(!0), i(B, null, ye(e.options, (v, p) => (o(), i("label", {
              key: v.model.hash,
              class: Be(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (w) => c(p)
            }, [
              s("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (w) => c(p)
              }, null, 40, uw),
              s("div", dw, [
                s("div", mw, [
                  s("span", fw, m(v.model.filename), 1),
                  b(sw, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                s("div", vw, [
                  s("span", pw, m(u(v.model.size)), 1),
                  s("span", gw, m(v.model.category), 1)
                ]),
                s("div", hw, m(v.model.relative_path), 1)
              ])
            ], 10, cw))), 128))
          ]),
          s("div", yw, [
            b(Ue, {
              variant: "ghost",
              size: "sm",
              onClick: f[1] || (f[1] = (v) => a("search"))
            }, {
              default: h(() => [...f[9] || (f[9] = [
                x(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(Ue, {
              variant: "ghost",
              size: "sm",
              onClick: f[2] || (f[2] = (v) => a("download-url"))
            }, {
              default: h(() => [...f[10] || (f[10] = [
                x(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: f[3] || (f[3] = (v) => a("mark-optional"))
            }, {
              default: h(() => [...f[11] || (f[11] = [
                x(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), i("div", ww, [
          f[16] || (f[16] = s("div", { class: "unresolved-message" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "Model not found in workspace")
          ], -1)),
          s("div", _w, [
            b(Ue, {
              variant: "primary",
              size: "sm",
              onClick: f[4] || (f[4] = (v) => a("search"))
            }, {
              default: h(() => [...f[13] || (f[13] = [
                x(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: f[5] || (f[5] = (v) => a("download-url"))
            }, {
              default: h(() => [...f[14] || (f[14] = [
                x(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: f[6] || (f[6] = (v) => a("mark-optional"))
            }, {
              default: h(() => [...f[15] || (f[15] = [
                x(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), bw = /* @__PURE__ */ Te(kw, [["__scopeId", "data-v-8a82fefa"]]), $w = { class: "model-resolution-step" }, Cw = { class: "step-header" }, xw = { class: "step-info" }, Sw = { class: "step-title" }, Iw = { class: "step-description" }, Ew = { class: "stat-badge" }, Tw = {
  key: 1,
  class: "step-body"
}, Mw = {
  key: 2,
  class: "empty-state"
}, Pw = { class: "model-search-modal" }, Rw = { class: "model-modal-body" }, Dw = {
  key: 0,
  class: "model-search-results"
}, Nw = ["onClick"], Lw = { class: "model-result-header" }, Uw = { class: "model-result-filename" }, Ow = { class: "model-result-meta" }, Aw = { class: "model-result-category" }, zw = { class: "model-result-size" }, Fw = {
  key: 0,
  class: "model-result-path"
}, Vw = {
  key: 1,
  class: "model-no-results"
}, Bw = {
  key: 2,
  class: "model-searching"
}, Ww = { class: "model-download-url-modal" }, Gw = { class: "model-modal-body" }, jw = { class: "model-input-group" }, Hw = { class: "model-input-group" }, qw = { class: "model-modal-actions" }, Kw = /* @__PURE__ */ Ee({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(e, { emit: t }) {
    const n = {
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
    function a(te) {
      var me;
      return te && ((me = n[te]) == null ? void 0 : me[0]) || null;
    }
    const l = e, r = t, c = _(0), u = _(!1), d = _(!1), f = _(""), v = _(""), p = _(""), w = _([]), g = _(!1), k = M(() => l.models[c.value]), $ = M(() => l.models.some((te) => te.is_download_intent)), S = M(() => l.models.filter(
      (te) => l.modelChoices.has(te.filename) || te.is_download_intent
    ).length), C = M(() => {
      var me;
      if (!k.value) return "";
      const te = a((me = k.value.reference) == null ? void 0 : me.node_type);
      return te ? `${te}/${k.value.filename}` : "";
    }), I = M(() => {
      var me;
      if (!k.value) return "not-found";
      const te = l.modelChoices.get(k.value.filename);
      if (te)
        switch (te.action) {
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
      return k.value.is_download_intent ? "download" : (me = k.value.options) != null && me.length ? "ambiguous" : "not-found";
    }), E = M(() => {
      var me, de;
      if (!k.value) return;
      const te = l.modelChoices.get(k.value.filename);
      if (te)
        switch (te.action) {
          case "select":
            return (me = te.selected_model) != null && me.filename ? `→ ${te.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return k.value.is_download_intent ? "Pending Download" : (de = k.value.options) != null && de.length ? `${k.value.options.length} matches` : "Not Found";
    });
    function P(te) {
      te >= 0 && te < l.models.length && (c.value = te);
    }
    function D() {
      var te;
      for (let me = c.value + 1; me < l.models.length; me++) {
        const de = l.models[me];
        if (!de.is_download_intent && !((te = l.modelChoices) != null && te.has(de.filename))) {
          P(me);
          return;
        }
      }
    }
    function A() {
      k.value && (r("mark-optional", k.value.filename), Gt(() => D()));
    }
    function V() {
      k.value && (r("skip", k.value.filename), Gt(() => D()));
    }
    function N(te) {
      k.value && (r("option-selected", k.value.filename, te), Gt(() => D()));
    }
    function j() {
      k.value && r("clear-choice", k.value.filename);
    }
    function le() {
      k.value && (f.value = k.value.filename, u.value = !0);
    }
    function ce() {
      k.value && (v.value = k.value.download_source || "", p.value = k.value.target_path || C.value, d.value = !0);
    }
    function Q() {
      u.value = !1, f.value = "", w.value = [];
    }
    function ve() {
      d.value = !1, v.value = "", p.value = "";
    }
    function J() {
      g.value = !0, setTimeout(() => {
        g.value = !1;
      }, 300);
    }
    function L(te) {
      k.value && (Q(), Gt(() => D()));
    }
    function F() {
      !k.value || !v.value.trim() || (r("download-url", k.value.filename, v.value.trim(), p.value.trim() || void 0), ve(), Gt(() => D()));
    }
    function ue(te) {
      if (!te) return "Unknown";
      const me = te / (1024 * 1024 * 1024);
      return me >= 1 ? `${me.toFixed(2)} GB` : `${(te / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (te, me) => {
      var de, W, se;
      return o(), i("div", $w, [
        s("div", Cw, [
          s("div", xw, [
            s("h3", Sw, m($.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            s("p", Iw, m($.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          s("span", Ew, m(S.value) + "/" + m(e.models.length) + " resolved", 1)
        ]),
        k.value ? (o(), R(pc, {
          key: 0,
          "item-name": k.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: me[0] || (me[0] = (ne) => P(c.value - 1)),
          onNext: me[1] || (me[1] = (ne) => P(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        k.value ? (o(), i("div", Tw, [
          b(bw, {
            filename: k.value.filename,
            "node-type": ((de = k.value.reference) == null ? void 0 : de.node_type) || "Unknown",
            "has-multiple-options": !!((W = k.value.options) != null && W.length),
            options: k.value.options,
            choice: (se = e.modelChoices) == null ? void 0 : se.get(k.value.filename),
            status: I.value,
            "status-label": E.value,
            onMarkOptional: A,
            onSkip: V,
            onDownloadUrl: ce,
            onSearch: le,
            onOptionSelected: N,
            onClearChoice: j
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), i("div", Mw, [...me[5] || (me[5] = [
          s("p", null, "No models need resolution.", -1)
        ])])),
        (o(), R(as, { to: "body" }, [
          u.value ? (o(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: bt(Q, ["self"])
          }, [
            s("div", Pw, [
              s("div", { class: "model-modal-header" }, [
                me[6] || (me[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: Q
                }, "✕")
              ]),
              s("div", Rw, [
                b(Rt, {
                  modelValue: f.value,
                  "onUpdate:modelValue": me[2] || (me[2] = (ne) => f.value = ne),
                  placeholder: "Search by filename, category...",
                  onInput: J
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (o(), i("div", Dw, [
                  (o(!0), i(B, null, ye(w.value, (ne) => (o(), i("div", {
                    key: ne.hash,
                    class: "model-search-result-item",
                    onClick: (Me) => L()
                  }, [
                    s("div", Lw, [
                      s("code", Uw, m(ne.filename), 1)
                    ]),
                    s("div", Ow, [
                      s("span", Aw, m(ne.category), 1),
                      s("span", zw, m(ue(ne.size)), 1)
                    ]),
                    ne.relative_path ? (o(), i("div", Fw, m(ne.relative_path), 1)) : y("", !0)
                  ], 8, Nw))), 128))
                ])) : f.value && !g.value ? (o(), i("div", Vw, ' No models found matching "' + m(f.value) + '" ', 1)) : y("", !0),
                g.value ? (o(), i("div", Bw, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (o(), R(as, { to: "body" }, [
          d.value ? (o(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: bt(ve, ["self"])
          }, [
            s("div", Ww, [
              s("div", { class: "model-modal-header" }, [
                me[7] || (me[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: ve
                }, "✕")
              ]),
              s("div", Gw, [
                s("div", jw, [
                  me[8] || (me[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  b(Rt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": me[3] || (me[3] = (ne) => v.value = ne),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", Hw, [
                  me[9] || (me[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  b(Rt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": me[4] || (me[4] = (ne) => p.value = ne),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", qw, [
                  b(Ue, {
                    variant: "secondary",
                    onClick: ve
                  }, {
                    default: h(() => [...me[10] || (me[10] = [
                      x("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(Ue, {
                    variant: "primary",
                    disabled: !v.value.trim() || !p.value.trim(),
                    onClick: F
                  }, {
                    default: h(() => [...me[11] || (me[11] = [
                      x(" Queue Download ", -1)
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
}), Jw = /* @__PURE__ */ Te(Kw, [["__scopeId", "data-v-5c700bfa"]]), Qw = {
  key: 0,
  class: "dependency-preview"
}, Yw = { class: "intro" }, Xw = { class: "summary-strip" }, Zw = { class: "summary-item" }, e0 = { class: "summary-item danger" }, t0 = { class: "summary-item" }, s0 = { class: "summary-item" }, n0 = { class: "summary-item" }, o0 = {
  key: 0,
  class: "requirements"
}, a0 = { class: "chips" }, l0 = { class: "changes" }, i0 = {
  key: 0,
  class: "empty-state"
}, r0 = {
  key: 1,
  class: "change-list"
}, c0 = { class: "package-name" }, u0 = { class: "change-kind" }, d0 = { class: "version current" }, m0 = { class: "version proposed" }, f0 = /* @__PURE__ */ Ee({
  __name: "DependencyReviewPreviewModal",
  props: {
    loading: { type: Boolean },
    error: {},
    preview: {},
    canApply: { type: Boolean },
    applying: { type: Boolean }
  },
  emits: ["close", "apply"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = {
      downgraded: 0,
      removed: 1,
      upgraded: 2,
      added: 3,
      changed: 4
    }, r = M(() => {
      var u;
      return [...((u = n.preview) == null ? void 0 : u.changes) || []].sort((d, f) => l[d.kind] - l[f.kind] || d.name.localeCompare(f.name));
    });
    function c(u) {
      return u === "downgraded" ? "Downgrade" : u === "upgraded" ? "Upgrade" : u === "added" ? "Add" : u === "removed" ? "Remove" : "Change";
    }
    return (u, d) => (o(), R(Mt, {
      title: "Dependency Review",
      size: "lg",
      loading: e.loading,
      error: e.error || void 0,
      onClose: d[2] || (d[2] = (f) => a("close"))
    }, {
      body: h(() => [
        e.preview ? (o(), i("div", Qw, [
          s("div", Yw, [
            s("h3", null, m(e.preview.node_name), 1),
            d[3] || (d[3] = s("p", null, " Installing this node package would change Python dependencies in the environment. Apply only if you accept these package changes in the current environment. ", -1))
          ]),
          s("div", Xw, [
            s("div", Zw, [
              s("strong", null, m(e.preview.summary.total), 1),
              d[4] || (d[4] = s("span", null, "Total", -1))
            ]),
            s("div", e0, [
              s("strong", null, m(e.preview.summary.downgraded), 1),
              d[5] || (d[5] = s("span", null, "Downgraded", -1))
            ]),
            s("div", t0, [
              s("strong", null, m(e.preview.summary.upgraded), 1),
              d[6] || (d[6] = s("span", null, "Upgraded", -1))
            ]),
            s("div", s0, [
              s("strong", null, m(e.preview.summary.added), 1),
              d[7] || (d[7] = s("span", null, "Added", -1))
            ]),
            s("div", n0, [
              s("strong", null, m(e.preview.summary.removed), 1),
              d[8] || (d[8] = s("span", null, "Removed", -1))
            ])
          ]),
          e.preview.requirements.length > 0 ? (o(), i("div", o0, [
            d[9] || (d[9] = s("div", { class: "section-title" }, "Node Requirements", -1)),
            s("div", a0, [
              (o(!0), i(B, null, ye(e.preview.requirements, (f) => (o(), i("code", {
                key: f,
                class: "chip"
              }, m(f), 1))), 128))
            ])
          ])) : y("", !0),
          s("div", l0, [
            d[11] || (d[11] = s("div", { class: "section-title" }, "Proposed Package Changes", -1)),
            e.preview.changes.length === 0 ? (o(), i("div", i0, " No package version changes found. ")) : (o(), i("div", r0, [
              (o(!0), i(B, null, ye(r.value, (f) => (o(), i("div", {
                key: `${f.name}-${f.kind}`,
                class: Be(["change-row", f.kind])
              }, [
                s("code", c0, m(f.name), 1),
                s("span", u0, m(c(f.kind)), 1),
                s("span", d0, m(f.current || "not installed"), 1),
                d[10] || (d[10] = s("span", { class: "arrow" }, "→", -1)),
                s("span", m0, m(f.proposed || "removed"), 1)
              ], 2))), 128))
            ]))
          ])
        ])) : y("", !0)
      ]),
      footer: h(() => {
        var f;
        return [
          b(Ue, {
            variant: "secondary",
            onClick: d[0] || (d[0] = (v) => a("close"))
          }, {
            default: h(() => [...d[12] || (d[12] = [
              x("Close", -1)
            ])]),
            _: 1
          }),
          e.canApply && ((f = e.preview) != null && f.success) ? (o(), R(Ue, {
            key: 0,
            variant: "primary",
            loading: e.applying,
            disabled: e.loading || e.applying,
            onClick: d[1] || (d[1] = (v) => a("apply"))
          }, {
            default: h(() => [...d[13] || (d[13] = [
              x(" Apply to Current Environment ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])) : y("", !0)
        ];
      }),
      _: 1
    }, 8, ["loading", "error"]));
  }
}), gc = /* @__PURE__ */ Te(f0, [["__scopeId", "data-v-28094338"]]), v0 = { class: "applying-step" }, p0 = {
  key: 0,
  class: "phase-content"
}, g0 = {
  key: 1,
  class: "phase-content"
}, h0 = { class: "phase-description" }, y0 = { class: "overall-progress" }, w0 = { class: "progress-bar" }, _0 = { class: "progress-label" }, k0 = { class: "install-list" }, b0 = { class: "install-icon" }, $0 = { key: 0 }, C0 = {
  key: 1,
  class: "spinner"
}, x0 = { key: 2 }, S0 = { key: 3 }, I0 = {
  key: 0,
  class: "install-error"
}, E0 = {
  key: 2,
  class: "phase-content"
}, T0 = { class: "phase-header" }, M0 = { class: "phase-title" }, P0 = { class: "completion-summary" }, R0 = {
  key: 0,
  class: "summary-item success"
}, D0 = { class: "summary-text" }, N0 = {
  key: 1,
  class: "summary-item success"
}, L0 = { class: "summary-text" }, U0 = {
  key: 2,
  class: "summary-item success"
}, O0 = { class: "summary-text" }, A0 = {
  key: 3,
  class: "summary-item success"
}, z0 = { class: "summary-text" }, F0 = {
  key: 4,
  class: "summary-item success"
}, V0 = { class: "summary-text" }, B0 = {
  key: 5,
  class: "summary-item error"
}, W0 = { class: "summary-text" }, G0 = {
  key: 6,
  class: "summary-item warning"
}, j0 = { class: "summary-text" }, H0 = {
  key: 7,
  class: "failed-list"
}, q0 = { class: "failed-node-id" }, K0 = { class: "failed-error" }, J0 = {
  key: 8,
  class: "failed-list dependency-review-list"
}, Q0 = { class: "failed-node-id" }, Y0 = ["onClick"], X0 = {
  key: 10,
  class: "summary-item success"
}, Z0 = { class: "summary-text" }, e_ = {
  key: 11,
  class: "summary-note"
}, t_ = {
  key: 12,
  class: "restart-prompt"
}, s_ = {
  key: 3,
  class: "phase-content error"
}, n_ = { class: "error-message" }, o_ = /* @__PURE__ */ Ee({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const t = e, {
      previewNodeDependencyChanges: n,
      applyReviewedNodeDependencyChanges: a
    } = mt(), l = _(/* @__PURE__ */ new Set()), r = M(() => {
      var F, ue;
      const J = ((F = t.progress.nodeInstallProgress) == null ? void 0 : F.totalNodes) || t.progress.nodesToInstall.length;
      if (!J) return 0;
      const L = ((ue = t.progress.nodeInstallProgress) == null ? void 0 : ue.completedNodes.length) ?? 0;
      return Math.round(L / J * 100);
    }), c = M(() => {
      var J;
      return ((J = t.progress.nodeInstallProgress) == null ? void 0 : J.completedNodes.filter((L) => !L.success && !L.dependency_review)) || [];
    });
    function u(J) {
      var L;
      return ((L = J.dependency_review) == null ? void 0 : L.identifier) || J.node_id;
    }
    const d = M(() => {
      var J;
      return ((J = t.progress.nodeInstallProgress) == null ? void 0 : J.completedNodes.filter((L) => L.dependency_review && !l.value.has(u(L)))) || [];
    }), f = M(() => l.value.size), v = M(() => t.progress.needsRestart || f.value > 0), p = M(() => c.value.length > 0 || d.value.length > 0), w = M(() => t.progress.nodesInstalled.length), g = M(() => {
      var J;
      return ((J = t.progress.nodesMarkedOptional) == null ? void 0 : J.length) || 0;
    }), k = M(() => {
      var J;
      return ((J = t.progress.nodesMapped) == null ? void 0 : J.length) || 0;
    }), $ = M(() => t.progress.modelPathsSynced || 0), S = M(() => t.progress.completedFiles.length > 0), C = M(() => w.value > 0 || g.value > 0 || k.value > 0 || $.value > 0 || S.value || v.value || f.value > 0), I = M(() => C.value ? "Workflow dependencies resolved" : "No changes applied");
    function E(J, L) {
      var ue, te;
      const F = (ue = t.progress.nodeInstallProgress) == null ? void 0 : ue.completedNodes.find((me) => me.node_id === J);
      return F ? F.success ? "complete" : "failed" : ((te = t.progress.nodeInstallProgress) == null ? void 0 : te.currentIndex) === L ? "installing" : "pending";
    }
    function P(J) {
      var L, F;
      return (F = (L = t.progress.nodeInstallProgress) == null ? void 0 : L.completedNodes.find((ue) => ue.node_id === J)) == null ? void 0 : F.error;
    }
    const D = _(!1), A = _(!1), V = _(!1), N = _(null), j = _(null), le = _(null);
    async function ce(J) {
      var F;
      const L = u(J);
      le.value = L, D.value = !0, A.value = !0, V.value = !1, N.value = null, j.value = null;
      try {
        if ((F = J.dependency_review) != null && F.preview) {
          j.value = J.dependency_review.preview;
          return;
        }
        const ue = await n({ id: L });
        j.value = ue.preview, ue.preview.success || (N.value = ue.preview.error || "Unable to generate dependency preview");
      } catch (ue) {
        N.value = ue instanceof Error ? ue.message : "Unable to generate dependency preview";
      } finally {
        A.value = !1;
      }
    }
    async function Q() {
      const J = le.value, L = j.value;
      if (!(!J || !L || V.value)) {
        V.value = !0, N.value = null;
        try {
          const F = await a({
            id: J,
            accepted_preview: {
              baseline_fingerprint: L.baseline_fingerprint,
              diff_fingerprint: L.diff_fingerprint,
              proposed_fingerprint: L.proposed_fingerprint
            }
          });
          if (F.status !== "success")
            throw new Error(F.error || F.message || "Unable to apply dependency changes");
          l.value = /* @__PURE__ */ new Set([
            ...l.value,
            J
          ]), ve();
        } catch (F) {
          N.value = F instanceof Error ? F.message : "Unable to apply dependency changes";
        } finally {
          V.value = !1;
        }
      }
    }
    function ve() {
      D.value = !1, A.value = !1, V.value = !1, N.value = null, j.value = null, le.value = null;
    }
    return (J, L) => {
      var F, ue, te, me, de;
      return o(), i("div", v0, [
        e.progress.phase === "resolving" ? (o(), i("div", p0, [...L[2] || (L[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (o(), i("div", g0, [
          L[3] || (L[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", h0, " Installing " + m((((F = e.progress.nodeInstallProgress) == null ? void 0 : F.currentIndex) ?? 0) + 1) + " of " + m(((ue = e.progress.nodeInstallProgress) == null ? void 0 : ue.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", y0, [
            s("div", w0, [
              s("div", {
                class: "progress-fill",
                style: zt({ width: `${r.value}%` })
              }, null, 4)
            ]),
            s("span", _0, m(((te = e.progress.nodeInstallProgress) == null ? void 0 : te.completedNodes.length) ?? 0) + " / " + m(((me = e.progress.nodeInstallProgress) == null ? void 0 : me.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", k0, [
            (o(!0), i(B, null, ye(e.progress.nodesToInstall, (W, se) => (o(), i("div", {
              key: W,
              class: Be(["install-item", E(W, se)])
            }, [
              s("span", b0, [
                E(W, se) === "pending" ? (o(), i("span", $0, "○")) : E(W, se) === "installing" ? (o(), i("span", C0, "◌")) : E(W, se) === "complete" ? (o(), i("span", x0, "✓")) : E(W, se) === "failed" ? (o(), i("span", S0, "✗")) : y("", !0)
              ]),
              s("code", null, m(W), 1),
              P(W) ? (o(), i("span", I0, m(P(W)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (o(), i("div", E0, [
          s("div", T0, [
            s("span", {
              class: Be(["phase-icon", p.value ? "warning" : "success"])
            }, m(p.value ? "⚠" : "✓"), 3),
            s("h3", M0, m(p.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          s("div", P0, [
            e.progress.nodesInstalled.length > 0 ? (o(), i("div", R0, [
              L[4] || (L[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", D0, m(e.progress.nodesInstalled.length) + " node package" + m(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            f.value > 0 ? (o(), i("div", N0, [
              L[5] || (L[5] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", L0, m(f.value) + " reviewed package" + m(f.value > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            g.value > 0 ? (o(), i("div", U0, [
              L[6] || (L[6] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", O0, m(g.value) + " node type" + m(g.value > 1 ? "s" : "") + " marked optional", 1)
            ])) : y("", !0),
            k.value > 0 ? (o(), i("div", A0, [
              L[7] || (L[7] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", z0, m(k.value) + " node mapping" + m(k.value > 1 ? "s" : "") + " changed", 1)
            ])) : y("", !0),
            $.value > 0 ? (o(), i("div", F0, [
              L[8] || (L[8] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", V0, m($.value) + " model path" + m($.value > 1 ? "s" : "") + " synced", 1)
            ])) : y("", !0),
            c.value.length > 0 ? (o(), i("div", B0, [
              L[9] || (L[9] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", W0, m(c.value.length) + " package" + m(c.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            d.value.length > 0 ? (o(), i("div", G0, [
              L[10] || (L[10] = s("span", { class: "summary-icon" }, "⚠", -1)),
              s("span", j0, m(d.value.length) + " package" + m(d.value.length > 1 ? "s" : "") + " need dependency review", 1)
            ])) : y("", !0),
            c.value.length > 0 ? (o(), i("div", H0, [
              (o(!0), i(B, null, ye(c.value, (W) => (o(), i("div", {
                key: W.node_id,
                class: "failed-item"
              }, [
                s("code", q0, m(W.node_id), 1),
                s("span", K0, m(W.error), 1)
              ]))), 128))
            ])) : y("", !0),
            d.value.length > 0 ? (o(), i("div", J0, [
              (o(!0), i(B, null, ye(d.value, (W) => (o(), i("div", {
                key: W.node_id,
                class: "failed-item dependency-review-item"
              }, [
                s("code", Q0, m(W.node_id), 1),
                L[11] || (L[11] = s("span", { class: "failed-error" }, "Dependency changes require review before install.", -1)),
                s("button", {
                  class: "review-button",
                  onClick: (se) => ce(W)
                }, " View Changes ", 8, Y0)
              ]))), 128))
            ])) : y("", !0),
            c.value.length > 0 ? (o(), i("button", {
              key: 9,
              class: "retry-button",
              onClick: L[0] || (L[0] = (W) => J.$emit("retry-failed"))
            }, " Retry Failed (" + m(c.value.length) + ") ", 1)) : y("", !0),
            p.value ? y("", !0) : (o(), i("div", X0, [
              L[12] || (L[12] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", Z0, m(I.value), 1)
            ])),
            S.value ? (o(), i("p", e_, "Model downloads will continue in the background.")) : y("", !0),
            v.value ? (o(), i("div", t_, [
              L[13] || (L[13] = s("div", { class: "restart-warning" }, [
                s("span", { class: "warning-icon" }, "⚠"),
                s("div", { class: "warning-content" }, [
                  s("strong", null, "Restart Required"),
                  s("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              s("button", {
                class: "restart-button",
                onClick: L[1] || (L[1] = (W) => J.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : y("", !0)
          ])
        ])) : e.progress.phase === "error" ? (o(), i("div", s_, [
          L[14] || (L[14] = s("div", { class: "phase-header" }, [
            s("span", { class: "phase-icon error" }, "✗"),
            s("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          s("p", n_, m(e.progress.error), 1)
        ])) : y("", !0),
        D.value ? (o(), R(gc, {
          key: 4,
          loading: A.value,
          error: N.value,
          preview: j.value,
          "can-apply": !!(le.value && ((de = j.value) != null && de.success)),
          applying: V.value,
          onClose: ve,
          onApply: Q
        }, null, 8, ["loading", "error", "preview", "can-apply", "applying"])) : y("", !0)
      ]);
    };
  }
}), a_ = /* @__PURE__ */ Te(o_, [["__scopeId", "data-v-0d61d037"]]), l_ = {
  key: 0,
  class: "loading-state"
}, i_ = {
  key: 1,
  class: "wizard-content"
}, r_ = {
  key: 0,
  class: "step-content"
}, c_ = { class: "analysis-summary" }, u_ = { class: "analysis-header" }, d_ = { class: "summary-description" }, m_ = { class: "stats-grid" }, f_ = { class: "stat-card" }, v_ = { class: "stat-items" }, p_ = {
  key: 0,
  class: "stat-item success"
}, g_ = { class: "stat-count" }, h_ = {
  key: 1,
  class: "stat-item info"
}, y_ = { class: "stat-count" }, w_ = {
  key: 2,
  class: "stat-item warning"
}, __ = { class: "stat-count" }, k_ = {
  key: 3,
  class: "stat-item warning"
}, b_ = { class: "stat-count" }, $_ = {
  key: 4,
  class: "stat-item warning"
}, C_ = { class: "stat-count" }, x_ = {
  key: 5,
  class: "stat-item error"
}, S_ = { class: "stat-count" }, I_ = { class: "stat-card" }, E_ = { class: "stat-items" }, T_ = { class: "stat-item success" }, M_ = { class: "stat-count" }, P_ = {
  key: 0,
  class: "stat-item info"
}, R_ = { class: "stat-count" }, D_ = {
  key: 1,
  class: "stat-item warning"
}, N_ = { class: "stat-count" }, L_ = {
  key: 2,
  class: "stat-item warning"
}, U_ = { class: "stat-count" }, O_ = {
  key: 3,
  class: "stat-item error"
}, A_ = { class: "stat-count" }, z_ = {
  key: 0,
  class: "status-message warning"
}, F_ = { class: "status-text" }, V_ = {
  key: 1,
  class: "status-message warning"
}, B_ = { class: "status-text" }, W_ = {
  key: 2,
  class: "status-message info"
}, G_ = { class: "status-text" }, j_ = {
  key: 3,
  class: "status-message info"
}, H_ = { class: "status-text" }, q_ = {
  key: 4,
  class: "status-message info"
}, K_ = { class: "status-text" }, J_ = {
  key: 5,
  class: "status-message warning"
}, Q_ = { class: "status-text" }, Y_ = {
  key: 6,
  class: "status-message success"
}, X_ = {
  key: 7,
  class: "category-mismatch-section"
}, Z_ = { class: "mismatch-list" }, ek = { class: "mismatch-path" }, tk = { class: "mismatch-target" }, sk = {
  key: 8,
  class: "category-mismatch-section"
}, nk = { class: "mismatch-list" }, ok = { class: "mismatch-path" }, ak = { class: "status-text" }, lk = {
  key: 1,
  class: "step-content node-step-content"
}, ik = {
  key: 2,
  class: "step-content package-step-content"
}, rk = { class: "package-step-header" }, ck = { class: "stat-badge" }, uk = {
  key: 0,
  class: "package-section"
}, dk = { class: "package-section-header" }, mk = { class: "package-section-title" }, fk = { class: "stat-badge" }, vk = { class: "package-list" }, pk = { class: "package-info" }, gk = { class: "item-name" }, hk = { class: "package-meta" }, yk = { class: "package-actions" }, wk = {
  key: 0,
  class: "choice-badge install"
}, _k = {
  key: 1,
  class: "choice-badge skip"
}, kk = {
  key: 1,
  class: "community-node-section"
}, bk = { class: "community-node-header" }, $k = { class: "community-node-title" }, Ck = { class: "community-node-list" }, xk = { class: "community-node-info" }, Sk = { class: "community-node-heading" }, Ik = { class: "item-name" }, Ek = { class: "community-node-package" }, Tk = { class: "community-node-meta" }, Mk = { class: "community-node-guidance" }, Pk = { key: 0 }, Rk = {
  key: 0,
  class: "community-node-selection"
}, Dk = { class: "community-selected-label" }, Nk = {
  key: 1,
  class: "community-node-actions"
}, Lk = {
  key: 4,
  class: "step-content"
}, Uk = { class: "review-summary" }, Ok = { class: "review-stats" }, Ak = { class: "review-stat" }, zk = { class: "stat-value" }, Fk = { class: "review-stat" }, Vk = { class: "stat-value" }, Bk = { class: "review-stat" }, Wk = { class: "stat-value" }, Gk = { class: "review-stat" }, jk = { class: "stat-value" }, Hk = {
  key: 0,
  class: "review-section"
}, qk = { class: "section-title" }, Kk = { class: "review-items" }, Jk = { class: "item-name" }, Qk = { class: "item-choice" }, Yk = {
  key: 0,
  class: "choice-badge install"
}, Xk = {
  key: 1,
  class: "choice-badge skip"
}, Zk = {
  key: 1,
  class: "review-section"
}, eb = { class: "section-title" }, tb = { class: "review-items" }, sb = { class: "item-name" }, nb = { class: "item-choice" }, ob = {
  key: 0,
  class: "choice-badge install"
}, ab = {
  key: 1,
  class: "choice-badge optional"
}, lb = {
  key: 2,
  class: "choice-badge skip"
}, ib = {
  key: 2,
  class: "review-section"
}, rb = { class: "section-title" }, cb = { class: "review-items" }, ub = { class: "item-name" }, db = { class: "item-choice" }, mb = {
  key: 0,
  class: "choice-badge install"
}, fb = {
  key: 1,
  class: "choice-badge mapped"
}, vb = {
  key: 2,
  class: "choice-badge optional"
}, pb = {
  key: 3,
  class: "choice-badge skip"
}, gb = {
  key: 1,
  class: "choice-badge pending"
}, hb = {
  key: 3,
  class: "review-section"
}, yb = { class: "section-title" }, wb = { class: "review-items download-details" }, _b = { class: "download-info" }, kb = { class: "item-name" }, bb = { class: "download-meta" }, $b = { class: "download-path" }, Cb = ["title"], xb = {
  key: 4,
  class: "review-section"
}, Sb = { class: "section-title" }, Ib = { class: "review-items" }, Eb = { class: "item-name" }, Tb = { class: "item-choice" }, Mb = {
  key: 0,
  class: "choice-badge install"
}, Pb = {
  key: 1,
  class: "choice-badge download"
}, Rb = {
  key: 2,
  class: "choice-badge optional"
}, Db = {
  key: 3,
  class: "choice-badge skip"
}, Nb = {
  key: 4,
  class: "choice-badge skip"
}, Lb = {
  key: 1,
  class: "choice-badge download"
}, Ub = {
  key: 2,
  class: "choice-badge pending"
}, Ob = {
  key: 5,
  class: "no-choices"
}, Ab = /* @__PURE__ */ Ee({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const n = e, a = t, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: f } = vc(), { loadPendingDownloads: v } = qn(), { openFileLocation: p, queueNodeInstall: w, getNodes: g } = mt(), k = _(null), $ = _([]), S = _(!1), C = _(!1), I = _(null), E = _("analysis"), P = _([]), D = _(/* @__PURE__ */ new Map()), A = _(/* @__PURE__ */ new Map()), V = _(/* @__PURE__ */ new Set()), N = M(() => {
      const Y = [
        { id: "analysis", label: "Analysis" }
      ];
      return ue.value && Y.push({ id: "nodes", label: "Nodes" }), se.value && Y.push({ id: "packages", label: "Packages" }), te.value && Y.push({ id: "models", label: "Models" }), Y.push({ id: "review", label: "Review" }), E.value === "applying" && Y.push({ id: "applying", label: "Applying" }), Y;
    });
    M(() => k.value ? k.value.stats.needs_user_input : !1);
    const j = M(() => L.value.filter(
      (Y) => !D.value.has(Y.reference.node_type)
    ).length), le = M(() => ae.value.filter(
      (U) => !D.value.has(U.node_type)
    ).length + Ce.value.length + j.value), ce = M(() => k.value ? k.value.nodes.unresolved.filter(
      (Y) => !D.value.has(Y.reference.node_type)
    ).length : 0), Q = M(() => k.value ? k.value.nodes.ambiguous.filter(
      (Y) => !D.value.has(Y.reference.node_type)
    ).length : 0), ve = M(() => k.value ? k.value.nodes.version_gated || [] : []), J = M(() => k.value ? k.value.nodes.uninstallable || [] : []), L = M(() => J.value.filter((Y) => {
      var U;
      return !!((U = Y.package) != null && U.package_id);
    })), F = M(() => ve.value.length > 0), ue = M(() => k.value ? k.value.nodes.unresolved.length > 0 || k.value.nodes.ambiguous.length > 0 || Ie.value.length > 0 : !1), te = M(() => k.value ? k.value.models.unresolved.length > 0 || k.value.models.ambiguous.length > 0 : !1), me = M(() => k.value ? k.value.stats.download_intents > 0 : !1), de = M(() => k.value ? k.value.stats.nodes_needing_installation > 0 : !1), W = M(() => L.value.length > 0), se = M(() => de.value || W.value), ne = M(() => k.value ? k.value.nodes.resolved.length : 0), Me = M(() => k.value ? k.value.models.resolved.filter((Y) => Y.has_category_mismatch) : []), pe = M(() => Me.value.length > 0), ze = M(() => ue.value ? "nodes" : se.value ? "packages" : te.value ? "models" : "review"), Le = M(() => {
      if (!k.value) return [];
      const Y = k.value.nodes.resolved.filter((oe) => !oe.is_installed), U = /* @__PURE__ */ new Set();
      return Y.filter((oe) => U.has(oe.package.package_id) ? !1 : (U.add(oe.package.package_id), !0));
    }), ke = M(() => {
      if (!k.value) return [];
      const Y = k.value.nodes.resolved.filter((oe) => !oe.is_installed), U = /* @__PURE__ */ new Map();
      for (const oe of Y) {
        const He = U.get(oe.package.package_id);
        He ? He.node_types_count++ : U.set(oe.package.package_id, {
          package_id: oe.package.package_id,
          title: oe.package.title,
          node_types_count: 1
        });
      }
      return Array.from(U.values());
    }), De = M(() => ke.value.filter((Y) => !V.value.has(Y.package_id)).length), ge = M(() => ke.value.length + L.value.length), we = M(() => {
      const Y = L.value.filter(
        (U) => D.value.has(U.reference.node_type)
      ).length;
      return ke.value.length + Y;
    }), T = M(() => Le.value.filter((Y) => !V.value.has(Y.package.package_id))), O = M(() => k.value ? k.value.models.resolved.filter(
      (Y) => Y.match_type === "download_intent" || Y.match_type === "property_download_intent"
    ).map((Y) => ({
      filename: Y.reference.widget_value,
      reference: Y.reference,
      is_download_intent: !0,
      resolved_model: Y.model,
      download_source: Y.download_source,
      target_path: Y.target_path
    })) : []), ae = M(() => {
      if (!k.value) return [];
      const Y = Ie.value.map((He) => ({
        node_type: He.reference.node_type,
        reason: "saved_mapping",
        is_unresolved: !1,
        options: void 0
      })), U = k.value.nodes.unresolved.map((He) => ({
        node_type: He.reference.node_type,
        reason: He.reason,
        is_unresolved: !0,
        options: void 0
      })), oe = k.value.nodes.ambiguous.map((He) => ({
        node_type: He.reference.node_type,
        has_multiple_options: !0,
        options: He.options.map((tt) => ({
          package_id: tt.package.package_id,
          title: tt.package.title,
          match_confidence: tt.match_confidence,
          match_type: tt.match_type,
          is_installed: tt.is_installed
        }))
      }));
      return [...Y, ...U, ...oe];
    }), Ie = M(() => k.value ? k.value.nodes.resolved.filter(
      (Y) => {
        var U;
        return ((U = Y.saved_choice) == null ? void 0 : U.action) === "map-installed";
      }
    ) : []), Ce = M(() => {
      if (!k.value) return [];
      const Y = k.value.models.unresolved.map((oe) => ({
        filename: oe.reference.widget_value,
        reference: oe.reference,
        reason: oe.reason,
        is_unresolved: !0,
        options: void 0
      })), U = k.value.models.ambiguous.map((oe) => ({
        filename: oe.reference.widget_value,
        reference: oe.reference,
        has_multiple_options: !0,
        options: oe.options.map((He) => ({
          model: He.model,
          match_confidence: He.match_confidence,
          match_type: He.match_type,
          has_download_source: He.has_download_source
        }))
      }));
      return [...Y, ...U];
    }), be = M(() => {
      const Y = Ce.value, U = O.value.map((oe) => ({
        filename: oe.filename,
        reference: oe.reference,
        is_download_intent: !0,
        resolved_model: oe.resolved_model,
        download_source: oe.download_source,
        target_path: oe.target_path,
        options: void 0
      }));
      return [...Y, ...U];
    }), ee = M(() => O.value.filter((Y) => {
      const U = A.value.get(Y.filename);
      return U ? U.action === "download" : !0;
    }).map((Y) => ({
      filename: Y.filename,
      url: Y.download_source,
      target_path: Y.target_path
    })));
    function H(Y, U = 50) {
      return Y.length <= U ? Y : Y.slice(0, U - 3) + "...";
    }
    const he = M(() => {
      let Y = T.value.length;
      for (const U of D.value.values())
        U.action === "install" && Y++;
      for (const U of A.value.values())
        U.action === "select" && Y++;
      return Y;
    }), _e = M(() => {
      let Y = 0;
      for (const U of A.value.values())
        U.action === "download" && Y++;
      for (const U of O.value)
        A.value.get(U.filename) || Y++;
      return Y;
    }), Ke = M(() => {
      let Y = 0;
      for (const U of D.value.values())
        U.action === "optional" && Y++;
      for (const U of A.value.values())
        U.action === "optional" && Y++;
      return Y;
    }), We = M(() => {
      let Y = V.value.size;
      for (const U of D.value.values())
        U.action === "skip" && Y++;
      for (const U of A.value.values())
        U.action === "skip" && Y++;
      for (const U of ae.value)
        D.value.has(U.node_type) || Y++;
      for (const U of Ce.value)
        A.value.has(U.filename) || Y++;
      return Y;
    }), xe = M(() => {
      const Y = {};
      if (Y.analysis = { resolved: 1, total: 1 }, ue.value) {
        const U = ae.value.length, oe = ae.value.filter(
          (He) => D.value.has(He.node_type)
        ).length;
        Y.nodes = { resolved: oe, total: U };
      }
      if (se.value && (Y.packages = {
        resolved: we.value,
        total: ge.value || 1
      }), te.value) {
        const U = be.value.length, oe = be.value.filter(
          (He) => A.value.has(He.filename) || He.is_download_intent
        ).length;
        Y.models = { resolved: oe, total: U };
      }
      if (Y.review = { resolved: 1, total: 1 }, E.value === "applying") {
        const U = d.totalFiles || 1, oe = d.completedFiles.length;
        Y.applying = { resolved: oe, total: U };
      }
      return Y;
    });
    function Z(Y) {
      E.value = Y;
    }
    function Ve() {
      const Y = N.value.findIndex((U) => U.id === E.value);
      Y > 0 && (E.value = N.value[Y - 1].id);
    }
    function Ne() {
      const Y = N.value.findIndex((U) => U.id === E.value);
      Y < N.value.length - 1 && (E.value = N.value[Y + 1].id);
    }
    function Qe() {
      const Y = N.value.findIndex((oe) => oe.id === E.value), U = N.value[Y + 1];
      return (U == null ? void 0 : U.label) || "Review";
    }
    function Fe(Y) {
      var U;
      return !!((U = Y.package) != null && U.latest_version);
    }
    function Ae(Y) {
      switch (Y) {
        case "development":
          return 0;
        case "git":
          return 1;
        case "registry":
          return 2;
        default:
          return 3;
      }
    }
    function Xe(Y) {
      return Y.filter((U) => U.installed && U.tracked).filter((U) => U.name !== "comfygit-manager").map((U) => ({
        package_id: U.registry_id || U.name,
        source: U.source
      })).filter((U, oe, He) => He.findIndex((tt) => tt.package_id === U.package_id) === oe).sort((U, oe) => {
        const He = Ae(U.source) - Ae(oe.source);
        return He !== 0 ? He : U.package_id.localeCompare(oe.package_id);
      });
    }
    async function kt() {
      S.value = !0, I.value = null;
      try {
        const [Y, U] = await Promise.all([
          l(n.workflowName),
          g()
        ]);
        k.value = Y, $.value = Xe(U.nodes), Lt(Y);
      } catch (Y) {
        I.value = Y instanceof Error ? Y.message : "Failed to analyze workflow";
      } finally {
        S.value = !1;
      }
    }
    function Lt(Y) {
      D.value.clear();
      for (const U of Y.nodes.unresolved)
        U.saved_choice && D.value.set(U.reference.node_type, U.saved_choice);
      for (const U of Y.nodes.resolved)
        U.saved_choice && D.value.set(U.reference.node_type, U.saved_choice);
      for (const U of Y.nodes.ambiguous)
        U.saved_choice && D.value.set(U.reference.node_type, U.saved_choice);
      for (const U of Y.nodes.uninstallable)
        U.saved_choice && D.value.set(U.reference.node_type, U.saved_choice);
    }
    function Kt() {
      P.value.includes("analysis") || P.value.push("analysis"), ue.value ? E.value = "nodes" : se.value ? E.value = "packages" : te.value ? E.value = "models" : E.value = "review";
    }
    function X(Y) {
      D.value.set(Y, { action: "optional" });
    }
    function G(Y) {
      D.value.set(Y, { action: "skip" });
    }
    function fe(Y, U) {
      var He;
      const oe = ae.value.find((tt) => tt.node_type === Y);
      (He = oe == null ? void 0 : oe.options) != null && He[U] && D.value.set(Y, {
        action: "install",
        package_id: oe.options[U].package_id
      });
    }
    function Je(Y, U, oe = {}) {
      D.value.set(Y, {
        action: "install",
        package_id: U,
        install_source: oe.install_source,
        repository: oe.repository,
        version: oe.version
      });
    }
    function Ge(Y, U) {
      D.value.set(Y, {
        action: "map-installed",
        package_id: U
      });
    }
    function it(Y) {
      D.value.delete(Y);
    }
    function Oe(Y) {
      return D.value.get(Y);
    }
    function rt(Y) {
      const U = Oe(Y);
      return U ? U.action === "optional" ? "Will be marked optional" : U.action === "skip" ? "Will be skipped" : U.action === "install" ? U.install_source === "git" ? "Will install via Git" : "Will install from Registry" : "Undecided" : "Undecided";
    }
    function Pt(Y, U) {
      var tt;
      const oe = (tt = Y.package) == null ? void 0 : tt.package_id;
      if (!oe) return;
      const He = {
        action: "install",
        package_id: oe,
        version: Y.package.latest_version || null,
        install_source: U
      };
      U === "git" && Y.package.repository && (He.repository = Y.package.repository), D.value.set(Y.reference.node_type, He);
    }
    function Jt(Y) {
      D.value.set(Y, { action: "optional" });
    }
    function cs(Y) {
      D.value.set(Y, { action: "skip" });
    }
    function Ft(Y) {
      D.value.delete(Y);
    }
    function K(Y) {
      V.value.has(Y) ? V.value.delete(Y) : V.value.add(Y);
    }
    function re(Y) {
      A.value.set(Y, { action: "optional" });
    }
    function Re(Y) {
      A.value.set(Y, { action: "skip" });
    }
    function $e(Y, U) {
      var He;
      const oe = Ce.value.find((tt) => tt.filename === Y);
      (He = oe == null ? void 0 : oe.options) != null && He[U] && A.value.set(Y, {
        action: "select",
        selected_model: oe.options[U].model
      });
    }
    function qe(Y, U, oe) {
      A.value.set(Y, {
        action: "download",
        url: U,
        target_path: oe
      });
    }
    function Ze(Y) {
      A.value.delete(Y);
    }
    async function lt(Y) {
      try {
        await p(Y);
      } catch (U) {
        I.value = U instanceof Error ? U.message : "Failed to open file location";
      }
    }
    async function ft() {
      var Y, U, oe, He;
      C.value = !0, I.value = null, f(), d.phase = "resolving", E.value = "applying";
      try {
        const tt = await r(n.workflowName, D.value, A.value, V.value);
        tt.models_to_download && tt.models_to_download.length > 0 && u(n.workflowName, tt.models_to_download), d.nodesMarkedOptional = tt.nodes_marked_optional || [], d.nodesMapped = tt.nodes_mapped || [], d.modelPathsSynced = tt.model_paths_synced || 0;
        const yt = Array.from(D.value.values()).map((dt) => {
          if ((dt == null ? void 0 : dt.action) !== "install" || dt.install_source !== "git")
            return null;
          const Xs = dt.repository, Ut = dt.package_id;
          return !Xs || !Ut ? null : {
            id: Ut,
            repository: Xs,
            selectedVersion: dt.version || "latest"
          };
        }).filter((dt) => !!dt), ks = new Set(yt.map((dt) => dt.id)), Vt = new Set(
          Array.from(D.value.values()).filter((dt) => (dt == null ? void 0 : dt.action) === "install" && !!dt.package_id).map((dt) => dt.package_id)
        ), bs = [
          ...tt.nodes_to_install || [],
          ...T.value.filter((dt) => !Vt.has(dt.package.package_id)).map((dt) => dt.package.package_id)
        ];
        if (d.nodesToInstall = [...new Set(bs)].filter((dt) => !ks.has(dt)), d.nodesToInstall.length > 0 && await c(n.workflowName), yt.length > 0) {
          d.phase = "installing";
          const dt = ((Y = d.nodeInstallProgress) == null ? void 0 : Y.completedNodes) || [], Xs = ((U = d.nodeInstallProgress) == null ? void 0 : U.totalNodes) || d.nodesToInstall.length;
          d.nodesToInstall = [
            ...d.nodesToInstall,
            ...yt.map((Ut) => Ut.id)
          ], d.nodeInstallProgress = {
            completedNodes: dt,
            totalNodes: Xs + yt.length
          };
          for (const Ut of yt) {
            const Kn = d.nodeInstallProgress.completedNodes.length;
            d.nodeInstallProgress.currentNode = Ut.id, d.nodeInstallProgress.currentIndex = Kn;
            try {
              const fs = await w({
                id: Ut.id,
                version: Ut.selectedVersion,
                selected_version: Ut.selectedVersion,
                repository: Ut.repository,
                install_source: "git",
                mode: "remote",
                channel: "default"
              });
              if (((oe = fs.status) == null ? void 0 : oe.status_str) === "dependency_review_required") {
                d.nodeInstallProgress.completedNodes.push({
                  node_id: Ut.id,
                  success: !1,
                  error: ((He = fs.status.messages) == null ? void 0 : He[0]) || "Dependency review required",
                  dependency_review: fs.status.dependency_review
                }), d.dependencyReviews = [
                  ...d.dependencyReviews || [],
                  ...fs.status.dependency_review ? [{ node_id: Ut.id, dependency_review: fs.status.dependency_review }] : []
                ];
                continue;
              }
              d.nodeInstallProgress.completedNodes.push({
                node_id: Ut.id,
                success: !0
              }), d.nodesInstalled = [.../* @__PURE__ */ new Set([...d.nodesInstalled, Ut.id])], d.needsRestart = !0;
            } catch (fs) {
              const dn = fs instanceof Error ? fs.message : `Failed to install ${Ut.id}`;
              d.nodeInstallProgress.completedNodes.push({
                node_id: Ut.id,
                success: !1,
                error: dn
              }), d.installError = dn;
            }
          }
        }
        d.phase = "complete", await v(), window.dispatchEvent(new CustomEvent("comfygit:status-refresh")), a("refresh"), a("install");
      } catch (tt) {
        I.value = tt instanceof Error ? tt.message : "Failed to apply resolution", d.error = I.value, d.phase = "error";
      } finally {
        C.value = !1;
      }
    }
    function It() {
      a("refresh"), a("restart"), a("close");
    }
    async function ht() {
      var U;
      const Y = ((U = d.nodeInstallProgress) == null ? void 0 : U.completedNodes.filter((oe) => !oe.success).map((oe) => oe.node_id)) || [];
      if (Y.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: Y.length
        }, d.nodesToInstall = Y, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(n.workflowName), d.phase = "complete";
        } catch (oe) {
          d.error = oe instanceof Error ? oe.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return ut(kt), (Y, U) => (o(), R(Mt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: S.value,
      error: I.value || void 0,
      "fixed-height": !0,
      onClose: U[1] || (U[1] = (oe) => a("close"))
    }, {
      body: h(() => [
        S.value && !k.value ? (o(), i("div", l_, [...U[2] || (U[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : k.value ? (o(), i("div", i_, [
          b(Ky, {
            steps: N.value,
            "current-step": E.value,
            "completed-steps": P.value,
            "step-stats": xe.value,
            onStepChange: Z
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          E.value === "analysis" ? (o(), i("div", r_, [
            s("div", c_, [
              s("div", u_, [
                U[3] || (U[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", d_, " Found " + m(k.value.stats.total_nodes) + " nodes and " + m(k.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", m_, [
                s("div", f_, [
                  U[16] || (U[16] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", v_, [
                    ne.value > 0 ? (o(), i("div", p_, [
                      U[4] || (U[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", g_, m(ne.value), 1),
                      U[5] || (U[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    k.value.stats.packages_needing_installation > 0 ? (o(), i("div", h_, [
                      U[6] || (U[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", y_, m(k.value.stats.packages_needing_installation), 1),
                      U[7] || (U[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    Q.value > 0 ? (o(), i("div", w_, [
                      U[8] || (U[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", __, m(Q.value), 1),
                      U[9] || (U[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    ve.value.length > 0 ? (o(), i("div", k_, [
                      U[10] || (U[10] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", b_, m(ve.value.length), 1),
                      U[11] || (U[11] = s("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    j.value > 0 ? (o(), i("div", $_, [
                      U[12] || (U[12] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", C_, m(j.value), 1),
                      U[13] || (U[13] = s("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    ce.value > 0 ? (o(), i("div", x_, [
                      U[14] || (U[14] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", S_, m(ce.value), 1),
                      U[15] || (U[15] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                s("div", I_, [
                  U[27] || (U[27] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", E_, [
                    s("div", T_, [
                      U[17] || (U[17] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", M_, m(k.value.models.resolved.length - k.value.stats.download_intents - k.value.stats.models_with_category_mismatch), 1),
                      U[18] || (U[18] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    k.value.stats.download_intents > 0 ? (o(), i("div", P_, [
                      U[19] || (U[19] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", R_, m(k.value.stats.download_intents), 1),
                      U[20] || (U[20] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    pe.value ? (o(), i("div", D_, [
                      U[21] || (U[21] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", N_, m(Me.value.length), 1),
                      U[22] || (U[22] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    k.value.models.ambiguous.length > 0 ? (o(), i("div", L_, [
                      U[23] || (U[23] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", U_, m(k.value.models.ambiguous.length), 1),
                      U[24] || (U[24] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    k.value.models.unresolved.length > 0 ? (o(), i("div", O_, [
                      U[25] || (U[25] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", A_, m(k.value.models.unresolved.length), 1),
                      U[26] || (U[26] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              le.value > 0 ? (o(), i("div", z_, [
                U[28] || (U[28] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", F_, m(le.value) + " item" + m(le.value === 1 ? "" : "s") + " need your input", 1)
              ])) : F.value ? (o(), i("div", V_, [
                U[29] || (U[29] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", B_, m(ve.value.length) + " node type" + m(ve.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : j.value > 0 ? (o(), i("div", W_, [
                U[30] || (U[30] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", G_, m(j.value) + " community-mapped node type" + m(j.value > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : de.value ? (o(), i("div", j_, [
                U[31] || (U[31] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", H_, m(k.value.stats.packages_needing_installation) + " package" + m(k.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + m(k.value.stats.nodes_needing_installation) + " node type" + m(k.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + m(me.value ? `, ${k.value.stats.download_intents} model${k.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : me.value ? (o(), i("div", q_, [
                U[32] || (U[32] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", K_, m(k.value.stats.download_intents) + " model" + m(k.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : pe.value ? (o(), i("div", J_, [
                U[33] || (U[33] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", Q_, m(Me.value.length) + " model" + m(Me.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (o(), i("div", Y_, [...U[34] || (U[34] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              pe.value ? (o(), i("div", X_, [
                U[37] || (U[37] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", Z_, [
                  (o(!0), i(B, null, ye(Me.value, (oe) => {
                    var He, tt;
                    return o(), i("div", {
                      key: oe.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", ek, m(oe.actual_category) + "/" + m((He = oe.model) == null ? void 0 : He.filename), 1),
                      U[36] || (U[36] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", tk, m((tt = oe.expected_categories) == null ? void 0 : tt[0]) + "/", 1),
                      oe.file_path ? (o(), R(Ue, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (yt) => lt(oe.file_path)
                      }, {
                        default: h(() => [...U[35] || (U[35] = [
                          x(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              F.value ? (o(), i("div", sk, [
                U[38] || (U[38] = s("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                s("div", nk, [
                  (o(!0), i(B, null, ye(ve.value, (oe) => {
                    var He;
                    return o(), i("div", {
                      key: `vg-${oe.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      s("code", ok, m(oe.reference.node_type), 1),
                      s("span", ak, m(oe.guidance || ((He = k.value.node_guidance) == null ? void 0 : He[oe.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          E.value === "nodes" ? (o(), i("div", lk, [
            b(ew, {
              nodes: ae.value,
              "node-choices": D.value,
              "auto-resolved-packages": [],
              "skipped-packages": V.value,
              "installed-node-packs": $.value,
              onMarkOptional: X,
              onSkip: G,
              onOptionSelected: fe,
              onManualEntry: Je,
              onInstalledPackSelected: Ge,
              onClearChoice: it,
              onPackageSkip: K
            }, null, 8, ["nodes", "node-choices", "skipped-packages", "installed-node-packs"])
          ])) : y("", !0),
          E.value === "packages" ? (o(), i("div", ik, [
            s("div", rk, [
              U[39] || (U[39] = s("div", null, [
                s("h3", { class: "summary-title" }, "Review Node Packages"),
                s("p", { class: "summary-description" }, " Choose which package-level installs should run. These decisions are separate from mapping unresolved node names. ")
              ], -1)),
              s("span", ck, m(we.value) + "/" + m(ge.value) + " decided", 1)
            ]),
            ke.value.length > 0 ? (o(), i("div", uk, [
              s("div", dk, [
                s("div", null, [
                  s("h4", mk, "Resolved Packages (" + m(ke.value.length) + ")", 1),
                  U[40] || (U[40] = s("p", { class: "package-section-description" }, " These packages were matched automatically. Skip any package you do not want installed. ", -1))
                ]),
                s("span", fk, m(De.value) + "/" + m(ke.value.length) + " to install", 1)
              ]),
              s("div", vk, [
                (o(!0), i(B, null, ye(ke.value, (oe) => (o(), i("div", {
                  key: oe.package_id,
                  class: "package-item"
                }, [
                  s("div", pk, [
                    s("code", gk, m(oe.package_id), 1),
                    s("span", hk, m(oe.node_types_count) + " node type" + m(oe.node_types_count > 1 ? "s" : ""), 1)
                  ]),
                  s("div", yk, [
                    V.value.has(oe.package_id) ? (o(), i("span", _k, "Skipped")) : (o(), i("span", wk, "Will Install")),
                    b(Ue, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (He) => K(oe.package_id)
                    }, {
                      default: h(() => [
                        x(m(V.value.has(oe.package_id) ? "Include" : "Skip"), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : y("", !0),
            L.value.length > 0 ? (o(), i("div", kk, [
              s("div", bk, [
                s("h4", $k, "Community-Mapped Packages (" + m(L.value.length) + ")", 1),
                U[41] || (U[41] = s("p", { class: "community-node-description" }, " These mappings came from community metadata. Use a registry install only when a package version exists; otherwise install from Git or skip. ", -1))
              ]),
              s("div", Ck, [
                (o(!0), i(B, null, ye(L.value, (oe) => (o(), i("div", {
                  key: `community-${oe.reference.node_type}-${oe.package.package_id}`,
                  class: "community-node-item"
                }, [
                  s("div", xk, [
                    s("div", Sk, [
                      s("code", Ik, m(oe.reference.node_type), 1),
                      s("span", Ek, m(oe.package.title || oe.package.package_id), 1)
                    ]),
                    s("div", Tk, m(oe.package.package_id), 1),
                    s("div", Mk, [
                      U[42] || (U[42] = x(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      oe.guidance ? (o(), i("span", Pk, m(oe.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  Oe(oe.reference.node_type) ? (o(), i("div", Rk, [
                    s("div", Dk, m(rt(oe.reference.node_type)), 1),
                    b(Ue, {
                      class: "change-selection-button",
                      size: "sm",
                      variant: "ghost",
                      onClick: (He) => Ft(oe.reference.node_type)
                    }, {
                      default: h(() => [...U[43] || (U[43] = [
                        x(" Change Selection ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])) : (o(), i("div", Nk, [
                    Fe(oe) ? (o(), R(Ue, {
                      key: 0,
                      class: "community-choice-button install-choice",
                      size: "sm",
                      variant: "secondary",
                      disabled: !oe.package.package_id,
                      onClick: (He) => Pt(oe, "registry")
                    }, {
                      default: h(() => [...U[44] || (U[44] = [
                        x(" Install from Registry ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    oe.package.repository ? (o(), R(Ue, {
                      key: 1,
                      class: "community-choice-button install-choice",
                      size: "sm",
                      variant: "secondary",
                      disabled: !oe.package.package_id,
                      onClick: (He) => Pt(oe, "git")
                    }, {
                      default: h(() => [...U[45] || (U[45] = [
                        x(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    b(Ue, {
                      class: "community-choice-button",
                      size: "sm",
                      variant: "secondary",
                      onClick: (He) => Jt(oe.reference.node_type)
                    }, {
                      default: h(() => [...U[46] || (U[46] = [
                        x(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Ue, {
                      class: "community-choice-button",
                      size: "sm",
                      variant: "secondary",
                      onClick: (He) => cs(oe.reference.node_type)
                    }, {
                      default: h(() => [...U[47] || (U[47] = [
                        x(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))
                ]))), 128))
              ])
            ])) : y("", !0)
          ])) : y("", !0),
          E.value === "models" ? (o(), R(Jw, {
            key: 3,
            models: be.value,
            "model-choices": A.value,
            onMarkOptional: re,
            onSkip: Re,
            onOptionSelected: $e,
            onDownloadUrl: qe,
            onClearChoice: Ze
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          E.value === "review" ? (o(), i("div", Lk, [
            s("div", Uk, [
              U[53] || (U[53] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", Ok, [
                s("div", Ak, [
                  s("span", zk, m(he.value), 1),
                  U[48] || (U[48] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", Fk, [
                  s("span", Vk, m(_e.value), 1),
                  U[49] || (U[49] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", Bk, [
                  s("span", Wk, m(Ke.value), 1),
                  U[50] || (U[50] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", Gk, [
                  s("span", jk, m(We.value), 1),
                  U[51] || (U[51] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              ke.value.length > 0 ? (o(), i("div", Hk, [
                s("h4", qk, "Node Packages (" + m(ke.value.length) + ")", 1),
                s("div", Kk, [
                  (o(!0), i(B, null, ye(ke.value, (oe) => (o(), i("div", {
                    key: oe.package_id,
                    class: "review-item"
                  }, [
                    s("code", Jk, m(oe.package_id), 1),
                    s("div", Qk, [
                      V.value.has(oe.package_id) ? (o(), i("span", Xk, "Skipped")) : (o(), i("span", Yk, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              L.value.length > 0 ? (o(), i("div", Zk, [
                s("h4", eb, "Community-Mapped Packages (" + m(L.value.length) + ")", 1),
                s("div", tb, [
                  (o(!0), i(B, null, ye(L.value, (oe) => {
                    var He, tt, yt;
                    return o(), i("div", {
                      key: `review-community-${oe.reference.node_type}-${oe.package.package_id}`,
                      class: "review-item"
                    }, [
                      s("code", sb, m(oe.reference.node_type), 1),
                      s("div", nb, [
                        ((He = Oe(oe.reference.node_type)) == null ? void 0 : He.action) === "install" ? (o(), i("span", ob, m(((tt = Oe(oe.reference.node_type)) == null ? void 0 : tt.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((yt = Oe(oe.reference.node_type)) == null ? void 0 : yt.action) === "optional" ? (o(), i("span", ab, " Optional ")) : (o(), i("span", lb, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ae.value.length > 0 ? (o(), i("div", ib, [
                s("h4", rb, "Node Choices (" + m(ae.value.length) + ")", 1),
                s("div", cb, [
                  (o(!0), i(B, null, ye(ae.value, (oe) => {
                    var He, tt, yt, ks, Vt, bs;
                    return o(), i("div", {
                      key: oe.node_type,
                      class: "review-item"
                    }, [
                      s("code", ub, m(oe.node_type), 1),
                      s("div", db, [
                        D.value.has(oe.node_type) ? (o(), i(B, { key: 0 }, [
                          ((He = D.value.get(oe.node_type)) == null ? void 0 : He.action) === "install" ? (o(), i("span", mb, m((tt = D.value.get(oe.node_type)) == null ? void 0 : tt.package_id), 1)) : ((yt = D.value.get(oe.node_type)) == null ? void 0 : yt.action) === "map-installed" ? (o(), i("span", fb, " Mapped to " + m((ks = D.value.get(oe.node_type)) == null ? void 0 : ks.package_id), 1)) : ((Vt = D.value.get(oe.node_type)) == null ? void 0 : Vt.action) === "optional" ? (o(), i("span", vb, " Optional ")) : ((bs = D.value.get(oe.node_type)) == null ? void 0 : bs.action) === "skip" ? (o(), i("span", pb, " Skip ")) : y("", !0)
                        ], 64)) : (o(), i("span", gb, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ee.value.length > 0 ? (o(), i("div", hb, [
                s("h4", yb, "Models to Download (" + m(ee.value.length) + ")", 1),
                s("div", wb, [
                  (o(!0), i(B, null, ye(ee.value, (oe) => (o(), i("div", {
                    key: oe.filename,
                    class: "review-item download-item"
                  }, [
                    s("div", _b, [
                      s("code", kb, m(oe.filename), 1),
                      s("div", bb, [
                        s("span", $b, "→ " + m(oe.target_path), 1),
                        oe.url ? (o(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: oe.url
                        }, m(H(oe.url)), 9, Cb)) : y("", !0)
                      ])
                    ]),
                    U[52] || (U[52] = s("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              be.value.length > 0 ? (o(), i("div", xb, [
                s("h4", Sb, "Models (" + m(be.value.length) + ")", 1),
                s("div", Ib, [
                  (o(!0), i(B, null, ye(be.value, (oe) => {
                    var He, tt, yt, ks, Vt, bs, dt;
                    return o(), i("div", {
                      key: oe.filename,
                      class: "review-item"
                    }, [
                      s("code", Eb, m(oe.filename), 1),
                      s("div", Tb, [
                        A.value.has(oe.filename) ? (o(), i(B, { key: 0 }, [
                          ((He = A.value.get(oe.filename)) == null ? void 0 : He.action) === "select" ? (o(), i("span", Mb, m((yt = (tt = A.value.get(oe.filename)) == null ? void 0 : tt.selected_model) == null ? void 0 : yt.filename), 1)) : ((ks = A.value.get(oe.filename)) == null ? void 0 : ks.action) === "download" ? (o(), i("span", Pb, " Download ")) : ((Vt = A.value.get(oe.filename)) == null ? void 0 : Vt.action) === "optional" ? (o(), i("span", Rb, " Optional ")) : ((bs = A.value.get(oe.filename)) == null ? void 0 : bs.action) === "skip" ? (o(), i("span", Db, " Skip ")) : ((dt = A.value.get(oe.filename)) == null ? void 0 : dt.action) === "cancel_download" ? (o(), i("span", Nb, " Cancel Download ")) : y("", !0)
                        ], 64)) : oe.is_download_intent ? (o(), i("span", Lb, " Pending Download ")) : (o(), i("span", Ub, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Le.value.length === 0 && L.value.length === 0 && ae.value.length === 0 && be.value.length === 0 ? (o(), i("div", Ob, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          E.value === "applying" ? (o(), R(a_, {
            key: 5,
            progress: at(d),
            onRestart: It,
            onRetryFailed: ht
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        E.value !== "analysis" && E.value !== "applying" ? (o(), R(Ue, {
          key: 0,
          variant: "secondary",
          disabled: C.value,
          onClick: Ve
        }, {
          default: h(() => [...U[54] || (U[54] = [
            x(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        U[56] || (U[56] = s("div", { class: "footer-spacer" }, null, -1)),
        E.value !== "applying" || at(d).phase === "complete" || at(d).phase === "error" ? (o(), R(Ue, {
          key: 1,
          variant: "secondary",
          onClick: U[0] || (U[0] = (oe) => a("close"))
        }, {
          default: h(() => [
            x(m(at(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        E.value === "analysis" ? (o(), R(Ue, {
          key: 2,
          variant: "primary",
          disabled: S.value,
          onClick: Kt
        }, {
          default: h(() => [
            x(m(ze.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        E.value === "nodes" || E.value === "packages" || E.value === "models" ? (o(), R(Ue, {
          key: 3,
          variant: "primary",
          onClick: Ne
        }, {
          default: h(() => [
            x(" Continue to " + m(Qe()) + " → ", 1)
          ]),
          _: 1
        })) : y("", !0),
        E.value === "review" ? (o(), R(Ue, {
          key: 4,
          variant: "primary",
          disabled: C.value,
          loading: C.value,
          onClick: ft
        }, {
          default: h(() => [...U[55] || (U[55] = [
            x(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), zb = /* @__PURE__ */ Te(Ab, [["__scopeId", "data-v-f198a009"]]), Fb = { class: "search-input-wrapper" }, Vb = ["value", "placeholder"], Bb = /* @__PURE__ */ Ee({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(null);
    let r;
    function c(d) {
      const f = d.target.value;
      n.debounce > 0 ? (clearTimeout(r), r = window.setTimeout(() => {
        a("update:modelValue", f);
      }, n.debounce)) : a("update:modelValue", f);
    }
    function u() {
      var d;
      a("update:modelValue", ""), a("clear"), (d = l.value) == null || d.focus();
    }
    return ut(() => {
      n.autoFocus && l.value && l.value.focus();
    }), (d, f) => (o(), i("div", Fb, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: Cs(u, ["escape"])
      }, null, 40, Vb),
      e.clearable && e.modelValue ? (o(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), Wb = /* @__PURE__ */ Te(Bb, [["__scopeId", "data-v-266f857a"]]), Gb = { class: "search-bar" }, jb = /* @__PURE__ */ Ee({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, n) => (o(), i("div", Gb, [
      b(Wb, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (a) => t.$emit("update:modelValue", a)),
        onClear: n[1] || (n[1] = (a) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), $n = /* @__PURE__ */ Te(jb, [["__scopeId", "data-v-3d51bbfd"]]), Hb = { class: "section-group" }, qb = {
  key: 0,
  class: "section-content"
}, Kb = /* @__PURE__ */ Ee({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(n.initiallyExpanded);
    function r() {
      n.collapsible && (l.value = !l.value, a("toggle", l.value));
    }
    return (c, u) => (o(), i("section", Hb, [
      b(gs, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: h(() => [
          x(m(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (o(), i("div", qb, [
        ct(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Nt = /* @__PURE__ */ Te(Kb, [["__scopeId", "data-v-c48e33ed"]]), Jb = { class: "item-header" }, Qb = {
  key: 0,
  class: "item-icon"
}, Yb = { class: "item-info" }, Xb = {
  key: 0,
  class: "item-title"
}, Zb = {
  key: 1,
  class: "item-subtitle"
}, e2 = {
  key: 0,
  class: "item-details"
}, t2 = {
  key: 1,
  class: "item-actions"
}, s2 = /* @__PURE__ */ Ee({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, a = M(() => n.status ? `status-${n.status}` : "");
    return (l, r) => (o(), i("div", {
      class: Be(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      s("div", Jb, [
        l.$slots.icon ? (o(), i("span", Qb, [
          ct(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        s("div", Yb, [
          l.$slots.title ? (o(), i("div", Xb, [
            ct(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (o(), i("div", Zb, [
            ct(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (o(), i("div", e2, [
        ct(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (o(), i("div", t2, [
        ct(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Yt = /* @__PURE__ */ Te(s2, [["__scopeId", "data-v-cc435e0e"]]), n2 = { class: "empty-state" }, o2 = {
  key: 0,
  class: "empty-icon"
}, a2 = { class: "empty-message" }, l2 = /* @__PURE__ */ Ee({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, n) => (o(), i("div", n2, [
      e.icon ? (o(), i("div", o2, m(e.icon), 1)) : y("", !0),
      s("p", a2, m(e.message), 1),
      e.actionLabel ? (o(), R(Pe, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (a) => t.$emit("action"))
      }, {
        default: h(() => [
          x(m(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), Es = /* @__PURE__ */ Te(l2, [["__scopeId", "data-v-4466284f"]]), i2 = { class: "loading-state" }, r2 = { class: "loading-message" }, c2 = /* @__PURE__ */ Ee({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, n) => (o(), i("div", i2, [
      n[0] || (n[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", r2, m(e.message), 1)
    ]));
  }
}), zs = /* @__PURE__ */ Te(c2, [["__scopeId", "data-v-ad8436c9"]]), u2 = { class: "error-state" }, d2 = { class: "error-message" }, m2 = /* @__PURE__ */ Ee({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (t, n) => (o(), i("div", u2, [
      n[2] || (n[2] = s("span", { class: "error-icon" }, "⚠", -1)),
      s("p", d2, m(e.message), 1),
      e.retry ? (o(), R(Pe, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (a) => t.$emit("retry"))
      }, {
        default: h(() => [...n[1] || (n[1] = [
          x(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Fs = /* @__PURE__ */ Te(m2, [["__scopeId", "data-v-5397be48"]]);
function f2(e) {
  return e.toLowerCase().endsWith(".json") ? e : `${e}.json`;
}
function Ri(e) {
  return Array.from(new Set(e.filter(Boolean)));
}
function v2(e) {
  const t = e.trim(), n = f2(t);
  return t.startsWith("workflows/") ? Ri([n, t]) : Ri([
    `workflows/${n}`,
    n,
    t
  ]);
}
function p2(e) {
  return e.trim().replace(/^workflows\//, "").replace(/\.json$/i, "");
}
async function g2(e) {
  const t = v2(e), n = [];
  for (const a of t)
    try {
      const l = await qs(`/userdata/${encodeURIComponent(a)}`);
      if (l.ok)
        return l.json();
      n.push(`${a}: ${l.status}`);
    } catch (l) {
      n.push(`${a}: ${l instanceof Error ? l.message : String(l)}`);
    }
  throw new Error(`Could not load saved workflow "${e}" (${n.join(", ")})`);
}
async function h2(e) {
  const t = window.app;
  if (typeof t.loadGraphData != "function")
    throw new Error("ComfyUI loadGraphData is not available");
  const n = await g2(e);
  await t.loadGraphData(
    n,
    !0,
    !0,
    p2(e),
    {
      showMissingModelsDialog: !0,
      showMissingNodesDialog: !0
    }
  ), await new Promise((a) => requestAnimationFrame(a));
}
const y2 = /* @__PURE__ */ Ee({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: n }) {
    const a = n, { getWorkflows: l } = mt(), r = _([]), c = _(!1), u = _(null), d = _(""), f = _(!0), v = _(!1), p = _(!1), w = _(!1), g = _(null), k = M(
      () => r.value.filter((W) => W.status === "broken")
    ), $ = M(
      () => r.value.filter((W) => W.status === "new")
    ), S = M(
      () => r.value.filter((W) => W.status === "modified")
    ), C = M(
      () => r.value.filter((W) => W.status === "synced")
    ), I = M(() => {
      if (!d.value.trim()) return r.value;
      const W = d.value.toLowerCase();
      return r.value.filter((se) => se.name.toLowerCase().includes(W));
    }), E = M(
      () => k.value.filter(
        (W) => !d.value.trim() || W.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), P = M(
      () => $.value.filter(
        (W) => !d.value.trim() || W.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), D = M(
      () => S.value.filter(
        (W) => !d.value.trim() || W.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), A = M(
      () => C.value.filter(
        (W) => !d.value.trim() || W.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), V = M(
      () => v.value ? A.value : A.value.slice(0, 5)
    );
    async function N(W = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(W);
      } catch (se) {
        u.value = se instanceof Error ? se.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    t({ loadWorkflows: N });
    function j(W) {
      g.value = W, p.value = !0;
    }
    function le(W) {
      g.value = W, p.value = !1, w.value = !0;
    }
    async function ce(W) {
      g.value = W;
      try {
        await h2(W);
      } catch (se) {
        console.error("[ComfyGit] Failed to activate workflow for contract mapping:", se), u.value = se instanceof Error ? se.message : "Failed to open workflow for contract mapping";
        return;
      }
      window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: W }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel"));
    }
    function Q(W) {
      var Me;
      const ne = (Me = W.detail) == null ? void 0 : Me.workflowName;
      ne && ce(ne);
    }
    function ve() {
    }
    function J() {
      a("refresh", { refreshWorkflows: !1 });
    }
    async function L() {
      w.value = !1, await N(!0);
    }
    async function F() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ue(W) {
      return W.replace(/uninstallable node mappings?/gi, (se) => se.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function te(W) {
      if (W.issue_summary && W.issue_summary.trim().length > 0)
        return ue(W.issue_summary);
      const se = [];
      return W.version_gated_count && W.version_gated_count > 0 && se.push(`${W.version_gated_count} node${W.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), W.uninstallable_count && W.uninstallable_count > 0 && se.push(`${W.uninstallable_count} node${W.uninstallable_count > 1 ? "s" : ""} need community packages`), W.missing_nodes > 0 && se.push(`${W.missing_nodes} missing node${W.missing_nodes > 1 ? "s" : ""}`), W.missing_models > 0 && se.push(`${W.missing_models} missing model${W.missing_models > 1 ? "s" : ""}`), W.models_with_category_mismatch && W.models_with_category_mismatch > 0 && se.push(`${W.models_with_category_mismatch} model${W.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), W.pending_downloads && W.pending_downloads > 0 && se.push(`${W.pending_downloads} pending download${W.pending_downloads > 1 ? "s" : ""}`), se.length > 0 ? se.join(", ") : "Has issues";
    }
    function me(W) {
      const se = W.sync_state === "new" ? "New" : W.sync_state === "modified" ? "Modified" : W.sync_state === "synced" ? "Synced" : W.sync_state, ne = de(W);
      return W.has_path_sync_issues && W.models_needing_path_sync && W.models_needing_path_sync > 0 ? `${W.models_needing_path_sync} model path${W.models_needing_path_sync > 1 ? "s" : ""} need${W.models_needing_path_sync === 1 ? "s" : ""} sync · ${ne}` : `${se || "Unknown"} · ${ne}`;
    }
    function de(W) {
      const se = W.contract_summary;
      return !se || !se.has_contract ? "No contract" : se.status === "incomplete" ? `${se.input_count} in / ${se.output_count} out · incomplete` : `${se.input_count} in / ${se.output_count} out`;
    }
    return ut(() => {
      N(), window.addEventListener("comfygit:open-workflow-contract", Q);
    }), To(() => {
      window.removeEventListener("comfygit:open-workflow-contract", Q);
    }), (W, se) => (o(), i(B, null, [
      b(Ht, null, {
        header: h(() => [
          b(qt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          b($n, {
            modelValue: d.value,
            "onUpdate:modelValue": se[0] || (se[0] = (ne) => d.value = ne),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (o(), R(zs, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (o(), R(Fs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: N
          }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
            E.value.length ? (o(), R(Nt, {
              key: 0,
              title: "BROKEN",
              count: E.value.length
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye(E.value, (ne) => (o(), R(Yt, {
                  key: ne.name,
                  status: "broken"
                }, {
                  icon: h(() => [...se[6] || (se[6] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(ne.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(te(ne)), 1)
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Me) => le(ne.name)
                    }, {
                      default: h(() => [...se[7] || (se[7] = [
                        x(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => j(ne.name)
                    }, {
                      default: h(() => [...se[8] || (se[8] = [
                        x(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => ce(ne.name)
                    }, {
                      default: h(() => [...se[9] || (se[9] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            P.value.length ? (o(), R(Nt, {
              key: 1,
              title: "NEW",
              count: P.value.length
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye(P.value, (ne) => (o(), R(Yt, {
                  key: ne.name,
                  status: ne.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    x(m(ne.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    x(m(ne.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(me(ne)), 1)
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => j(ne.name)
                    }, {
                      default: h(() => [...se[10] || (se[10] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => ce(ne.name)
                    }, {
                      default: h(() => [...se[11] || (se[11] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            D.value.length ? (o(), R(Nt, {
              key: 2,
              title: "MODIFIED",
              count: D.value.length
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye(D.value, (ne) => (o(), R(Yt, {
                  key: ne.name,
                  status: ne.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...se[12] || (se[12] = [
                    x("⚡", -1)
                  ])]),
                  title: h(() => [
                    x(m(ne.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(me(ne)), 1)
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => j(ne.name)
                    }, {
                      default: h(() => [...se[13] || (se[13] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => ce(ne.name)
                    }, {
                      default: h(() => [...se[14] || (se[14] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            A.value.length ? (o(), R(Nt, {
              key: 3,
              title: "SYNCED",
              count: A.value.length,
              collapsible: !0,
              "initially-expanded": f.value,
              onToggle: se[2] || (se[2] = (ne) => f.value = ne)
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye(V.value, (ne) => (o(), R(Yt, {
                  key: ne.name,
                  status: ne.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    x(m(ne.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    x(m(ne.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(me(ne)), 1)
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => j(ne.name)
                    }, {
                      default: h(() => [...se[15] || (se[15] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => ce(ne.name)
                    }, {
                      default: h(() => [...se[16] || (se[16] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && A.value.length > 5 ? (o(), R(Pe, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: se[1] || (se[1] = (ne) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    x(" View all " + m(A.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            I.value.length ? y("", !0) : (o(), R(Es, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && g.value ? (o(), R(Uy, {
        key: 0,
        "workflow-name": g.value,
        onClose: se[3] || (se[3] = (ne) => p.value = !1),
        onResolve: se[4] || (se[4] = (ne) => le(g.value)),
        onRefresh: se[5] || (se[5] = (ne) => a("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && g.value ? (o(), R(zb, {
        key: 1,
        "workflow-name": g.value,
        onClose: L,
        onInstall: ve,
        onRefresh: J,
        onRestart: F
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), w2 = /* @__PURE__ */ Te(y2, [["__scopeId", "data-v-7bf48b3a"]]), _2 = /* @__PURE__ */ Ee({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (t, n) => (o(), i("div", {
      class: Be(["summary-bar", e.variant])
    }, [
      ct(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), Pl = /* @__PURE__ */ Te(_2, [["__scopeId", "data-v-ccb7816e"]]);
async function Rl(e) {
  var n;
  if (typeof navigator < "u" && ((n = navigator.clipboard) != null && n.writeText)) {
    await navigator.clipboard.writeText(e);
    return;
  }
  if (typeof document > "u")
    throw new Error("Clipboard unavailable");
  const t = document.createElement("textarea");
  t.value = e, t.setAttribute("readonly", ""), t.style.position = "fixed", t.style.top = "-1000px", t.style.left = "-1000px", t.style.opacity = "0", document.body.appendChild(t);
  try {
    if (t.focus(), t.select(), t.setSelectionRange(0, t.value.length), !document.execCommand("copy"))
      throw new Error("execCommand copy failed");
  } finally {
    t.remove();
  }
}
const k2 = {
  key: 0,
  class: "model-details"
}, b2 = { class: "detail-section" }, $2 = { class: "detail-row" }, C2 = { class: "detail-value mono" }, x2 = { class: "detail-row" }, S2 = { class: "detail-value mono" }, I2 = { class: "detail-row" }, E2 = { class: "detail-value mono" }, T2 = {
  key: 0,
  class: "detail-row"
}, M2 = { class: "detail-value" }, P2 = ["disabled"], R2 = {
  key: 1,
  class: "detail-row"
}, D2 = { class: "detail-value hash-error" }, N2 = { class: "detail-row" }, L2 = { class: "detail-value" }, U2 = { class: "detail-row" }, O2 = { class: "detail-value" }, A2 = { class: "detail-row" }, z2 = { class: "detail-value" }, F2 = { class: "detail-section" }, V2 = { class: "section-header" }, B2 = {
  key: 0,
  class: "locations-list"
}, W2 = { class: "location-path mono" }, G2 = {
  key: 0,
  class: "location-modified"
}, j2 = ["onClick"], H2 = {
  key: 1,
  class: "empty-state"
}, q2 = { class: "detail-section" }, K2 = { class: "section-header-row" }, J2 = { class: "section-header" }, Q2 = {
  key: 0,
  class: "sources-list"
}, Y2 = { class: "source-type" }, X2 = ["href"], Z2 = ["disabled", "onClick"], e$ = {
  key: 1,
  class: "empty-state"
}, t$ = {
  key: 2,
  class: "source-error"
}, s$ = {
  key: 3,
  class: "source-success"
}, n$ = /* @__PURE__ */ Ee({
  __name: "ModelDetailModal",
  props: {
    identifier: {},
    overlayZIndex: {}
  },
  emits: ["close", "sourceSaved"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getModelDetails: l, removeModelSource: r, computeModelHashes: c } = mt(), u = _(null), d = _(!0), f = _(null), v = _(null), p = _(null), w = _(null), g = _(!1), k = _(!1), $ = _(null), S = M(() => {
      var ce;
      return !!((ce = u.value) != null && ce.hash && (!u.value.blake3 || !u.value.sha256));
    }), C = _(null);
    let I = null;
    function E(ce, Q = "success", ve = 2e3) {
      I && clearTimeout(I), C.value = { message: ce, type: Q }, I = setTimeout(() => {
        C.value = null;
      }, ve);
    }
    function P(ce) {
      if (!ce) return "Unknown";
      const Q = 1024 * 1024 * 1024, ve = 1024 * 1024;
      return ce >= Q ? `${(ce / Q).toFixed(1)} GB` : ce >= ve ? `${(ce / ve).toFixed(0)} MB` : `${(ce / 1024).toFixed(0)} KB`;
    }
    async function D(ce) {
      try {
        await Rl(ce), E("Copied to clipboard!");
      } catch (Q) {
        console.error("Failed to copy:", Q), E("Failed to copy to clipboard", "error");
      }
    }
    async function A(ce) {
      if (u.value) {
        v.value = ce, p.value = null, w.value = null;
        try {
          await r(u.value.hash, ce), E("Source removed"), await le();
        } catch (Q) {
          p.value = Q instanceof Error ? Q.message : "Failed to remove source";
        } finally {
          v.value = null;
        }
      }
    }
    async function V() {
      w.value = "Source added successfully!", g.value = !1, await le(), a("sourceSaved");
    }
    async function N() {
      await le();
    }
    async function j() {
      var ce;
      if ((ce = u.value) != null && ce.hash) {
        k.value = !0, $.value = null;
        try {
          u.value = await c(u.value.hash), E("Hashes computed successfully!");
        } catch (Q) {
          $.value = Q instanceof Error ? Q.message : "Failed to compute hashes";
        } finally {
          k.value = !1;
        }
      }
    }
    async function le() {
      d.value = !0, f.value = null;
      try {
        u.value = await l(n.identifier);
      } catch (ce) {
        f.value = ce instanceof Error ? ce.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return ut(le), (ce, Q) => {
      var ve;
      return o(), i(B, null, [
        b(Mt, {
          title: `Model Details: ${((ve = u.value) == null ? void 0 : ve.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: f.value,
          "overlay-z-index": e.overlayZIndex,
          onClose: Q[5] || (Q[5] = (J) => ce.$emit("close"))
        }, {
          body: h(() => {
            var J, L, F, ue;
            return [
              u.value ? (o(), i("div", k2, [
                s("section", b2, [
                  s("div", $2, [
                    Q[7] || (Q[7] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", C2, m(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (o(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Q[0] || (Q[0] = (te) => D(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", x2, [
                    Q[8] || (Q[8] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", S2, m(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (o(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Q[1] || (Q[1] = (te) => D(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", I2, [
                    Q[9] || (Q[9] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", E2, m(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (o(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Q[2] || (Q[2] = (te) => D(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  S.value ? (o(), i("div", T2, [
                    Q[10] || (Q[10] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", M2, [
                      s("button", {
                        class: "compute-hashes-btn",
                        disabled: k.value,
                        onClick: j
                      }, m(k.value ? "Computing hashes..." : "Compute Full Hashes"), 9, P2)
                    ])
                  ])) : y("", !0),
                  $.value ? (o(), i("div", R2, [
                    Q[11] || (Q[11] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", D2, m($.value), 1)
                  ])) : y("", !0),
                  s("div", N2, [
                    Q[12] || (Q[12] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", L2, m(P(u.value.size)), 1)
                  ]),
                  s("div", U2, [
                    Q[13] || (Q[13] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", O2, m(u.value.category), 1)
                  ]),
                  s("div", A2, [
                    Q[14] || (Q[14] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", z2, m(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", F2, [
                  s("h4", V2, "Locations (" + m(((J = u.value.locations) == null ? void 0 : J.length) || 0) + ")", 1),
                  (L = u.value.locations) != null && L.length ? (o(), i("div", B2, [
                    (o(!0), i(B, null, ye(u.value.locations, (te, me) => (o(), i("div", {
                      key: me,
                      class: "location-item"
                    }, [
                      s("span", W2, m(te.path), 1),
                      te.modified ? (o(), i("span", G2, "Modified: " + m(te.modified), 1)) : y("", !0),
                      te.path ? (o(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (de) => D(te.path)
                      }, " Copy File Path ", 8, j2)) : y("", !0)
                    ]))), 128))
                  ])) : (o(), i("div", H2, "No locations found"))
                ]),
                s("section", q2, [
                  s("div", K2, [
                    s("h4", J2, "Download Sources (" + m(((F = u.value.sources) == null ? void 0 : F.length) || 0) + ")", 1),
                    s("button", {
                      class: "find-source-btn",
                      onClick: Q[3] || (Q[3] = (te) => g.value = !0)
                    }, " Find Source ")
                  ]),
                  (ue = u.value.sources) != null && ue.length ? (o(), i("div", Q2, [
                    (o(!0), i(B, null, ye(u.value.sources, (te, me) => (o(), i("div", {
                      key: me,
                      class: "source-item"
                    }, [
                      s("span", Y2, m(te.type) + ":", 1),
                      s("a", {
                        href: te.url,
                        target: "_blank",
                        class: "source-url"
                      }, m(te.url), 9, X2),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: v.value === te.url,
                        onClick: (de) => A(te.url)
                      }, m(v.value === te.url ? "..." : "×"), 9, Z2)
                    ]))), 128))
                  ])) : (o(), i("div", e$, " No download sources configured ")),
                  p.value ? (o(), i("p", t$, m(p.value), 1)) : y("", !0),
                  w.value ? (o(), i("p", s$, m(w.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            s("button", {
              class: "btn-secondary",
              onClick: Q[4] || (Q[4] = (J) => ce.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error", "overlay-z-index"]),
        (o(), R(as, { to: "body" }, [
          C.value ? (o(), i("div", {
            key: 0,
            class: Be(["toast", C.value.type])
          }, m(C.value.message), 3)) : y("", !0)
        ])),
        u.value && g.value ? (o(), R(mc, {
          key: 0,
          model: u.value,
          "overlay-z-index": (e.overlayZIndex || 10003) + 2,
          onClose: Q[6] || (Q[6] = (J) => g.value = !1),
          onSaved: V,
          onHashesComputed: N
        }, null, 8, ["model", "overlay-z-index"])) : y("", !0)
      ], 64);
    };
  }
}), hc = /* @__PURE__ */ Te(n$, [["__scopeId", "data-v-cd808fbc"]]), o$ = { class: "workflow-links-tab" }, a$ = { class: "section-header-row" }, l$ = {
  key: 0,
  class: "state-message"
}, i$ = {
  key: 1,
  class: "error-message"
}, r$ = {
  key: 2,
  class: "candidate-list"
}, c$ = {
  key: 3,
  class: "state-message"
}, u$ = /* @__PURE__ */ Ee({
  __name: "WorkflowLinksTab",
  emits: ["selectUrl"],
  setup(e, { emit: t }) {
    const n = t, { getWorkflowSourceCandidates: a } = mt(), l = _([]), r = _(!1), c = _(null), u = M(() => l.value.filter((f) => f.source === "workflow"));
    async function d() {
      r.value = !0, c.value = null;
      try {
        const f = await a();
        l.value = f.candidates;
      } catch (f) {
        c.value = f instanceof Error ? f.message : "Failed to scan workflows";
      } finally {
        r.value = !1;
      }
    }
    return ut(d), (f, v) => (o(), i("div", o$, [
      s("div", a$, [
        v[2] || (v[2] = s("div", null, [
          s("h4", null, "Workflow Links"),
          s("p", null, "Model links found in saved workflow notes or metadata.")
        ], -1)),
        b(Ue, {
          variant: "secondary",
          size: "sm",
          loading: r.value,
          onClick: d
        }, {
          default: h(() => [...v[1] || (v[1] = [
            x(" Scan ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      r.value ? (o(), i("div", l$, "Scanning workflows...")) : c.value ? (o(), i("div", i$, m(c.value), 1)) : u.value.length ? (o(), i("div", r$, [
        (o(!0), i(B, null, ye(u.value, (p) => (o(), R(uc, {
          key: `${p.workflow}:${p.url}`,
          candidate: p,
          "action-label": "Use URL",
          onSelect: v[0] || (v[0] = (w) => n("selectUrl", w))
        }, null, 8, ["candidate"]))), 128))
      ])) : (o(), i("div", c$, " No likely workflow links found. Try Hugging Face or Direct URL. "))
    ]));
  }
}), d$ = /* @__PURE__ */ Te(u$, [["__scopeId", "data-v-1aac54cc"]]), m$ = { class: "civitai-tab" }, f$ = /* @__PURE__ */ Ee({
  __name: "CivitaiTab",
  setup(e) {
    return (t, n) => (o(), i("div", m$, [...n[0] || (n[0] = [
      s("div", { class: "placeholder" }, [
        s("div", { class: "icon" }, "🎨"),
        s("h3", null, "Civitai Integration"),
        s("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), v$ = /* @__PURE__ */ Te(f$, [["__scopeId", "data-v-44948051"]]), p$ = { class: "direct-url-tab" }, g$ = {
  key: 0,
  class: "error"
}, h$ = /* @__PURE__ */ Ee({
  __name: "DirectUrlTab",
  props: {
    initialUrl: {}
  },
  emits: ["queue"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(""), r = _("");
    $t(() => n.initialUrl, (f) => {
      f && f !== l.value && (l.value = f);
    }, { immediate: !0 });
    const c = M(() => {
      const f = l.value.trim();
      if (!f) return "";
      try {
        const v = new URL(f);
        return decodeURIComponent(v.pathname).replace(/\\/g, "/").split("/").filter(Boolean).pop() || "";
      } catch {
        return f.split("?", 1)[0].replace(/\\/g, "/").split("/").filter(Boolean).pop() || "";
      }
    }), u = (f) => {
      if (!r.value.trim() || !c.value) return;
      const v = d(r.value, c.value);
      a("queue", [{
        url: f,
        targetPath: v,
        filename: c.value
      }]), l.value = "";
    };
    function d(f, v) {
      return `${f.replace(/\/+$/, "")}/${v.replace(/^\/+/, "")}`;
    }
    return (f, v) => (o(), i("div", p$, [
      b(dc, {
        modelValue: l.value,
        "onUpdate:modelValue": v[1] || (v[1] = (p) => l.value = p),
        label: "Download URL",
        placeholder: "https://example.com/model.safetensors",
        "action-label": "Queue Download",
        disabled: !r.value.trim() || !c.value,
        onSubmit: u
      }, {
        default: h(() => [
          b(rc, {
            modelValue: r.value,
            "onUpdate:modelValue": v[0] || (v[0] = (p) => r.value = p)
          }, null, 8, ["modelValue"]),
          l.value.trim() && !c.value ? (o(), i("p", g$, " Could not infer a filename from this URL. ")) : y("", !0),
          v[2] || (v[2] = s("p", { class: "note" }, "Model will be queued for background download.", -1))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled"])
    ]));
  }
}), y$ = /* @__PURE__ */ Te(h$, [["__scopeId", "data-v-a6d21f27"]]), w$ = { class: "download-modal" }, _$ = { class: "tab-bar" }, k$ = ["onClick"], b$ = { class: "tab-content" }, $$ = /* @__PURE__ */ Ee({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = t, { addToQueue: a } = qn(), l = [
      { id: "workflow", label: "Workflow Links", icon: "🔎" },
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], r = _("workflow"), c = _("");
    function u(p) {
      a(p.map((w) => ({
        workflow: "__manual__",
        filename: w.filename,
        url: w.url,
        targetPath: w.destination ? `${w.destination}/${w.filename}` : w.filename
      }))), n("close");
    }
    function d(p) {
      a(p.map((w) => ({
        workflow: "__manual__",
        filename: w.filename,
        url: w.url,
        targetPath: w.targetPath
      }))), n("close");
    }
    function f(p) {
      c.value = p, r.value = "direct";
    }
    function v() {
      n("close");
    }
    return (p, w) => e.show ? (o(), R(Mt, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: v
    }, {
      body: h(() => [
        s("div", w$, [
          s("div", _$, [
            (o(), i(B, null, ye(l, (g) => s("button", {
              key: g.id,
              class: Be(["tab-btn", { active: r.value === g.id }]),
              onClick: (k) => r.value = g.id
            }, m(g.icon) + " " + m(g.label), 11, k$)), 64))
          ]),
          s("div", b$, [
            r.value === "workflow" ? (o(), R(d$, {
              key: 0,
              onSelectUrl: f
            })) : r.value === "huggingface" ? (o(), R(cc, {
              key: 1,
              onQueue: u
            })) : r.value === "civitai" ? (o(), R(v$, { key: 2 })) : r.value === "direct" ? (o(), R(y$, {
              key: 3,
              "initial-url": c.value,
              onQueue: d
            }, null, 8, ["initial-url"])) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        b(Ue, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...w[0] || (w[0] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), yc = /* @__PURE__ */ Te($$, [["__scopeId", "data-v-de2e4fac"]]), C$ = /* @__PURE__ */ Ee({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const n = t, { getEnvironmentModels: a, getStatus: l } = mt(), r = _([]), c = _([]), u = _("production"), d = _(!1), f = _(null), v = _(""), p = _(!1), w = _(null), g = _(!1);
    function k() {
      p.value = !1, n("navigate", "model-index");
    }
    const $ = M(
      () => r.value.reduce((N, j) => N + (j.size || 0), 0)
    ), S = M(() => {
      if (!v.value.trim()) return r.value;
      const N = v.value.toLowerCase();
      return r.value.filter((j) => j.filename.toLowerCase().includes(N));
    }), C = M(() => {
      if (!v.value.trim()) return c.value;
      const N = v.value.toLowerCase();
      return c.value.filter((j) => j.filename.toLowerCase().includes(N));
    }), I = M(() => {
      const N = {};
      for (const le of S.value) {
        const ce = le.type || "other";
        N[ce] || (N[ce] = []), N[ce].push(le);
      }
      const j = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(N).sort(([le], [ce]) => {
        const Q = j.indexOf(le), ve = j.indexOf(ce);
        return Q >= 0 && ve >= 0 ? Q - ve : Q >= 0 ? -1 : ve >= 0 ? 1 : le.localeCompare(ce);
      }).map(([le, ce]) => ({ type: le, models: ce }));
    });
    function E(N) {
      if (!N) return "Unknown";
      const j = N / (1024 * 1024);
      return j >= 1024 ? `${(j / 1024).toFixed(1)} GB` : `${j.toFixed(0)} MB`;
    }
    function P(N) {
      w.value = N.hash || N.filename;
    }
    function D(N) {
      n("navigate", "model-index");
    }
    function A(N) {
      alert(`Download functionality not yet implemented for ${N}`);
    }
    async function V() {
      d.value = !0, f.value = null;
      try {
        const N = await a();
        r.value = N, c.value = [];
        const j = await l();
        u.value = j.environment || "production";
      } catch (N) {
        f.value = N instanceof Error ? N.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return ut(V), (N, j) => (o(), i(B, null, [
      b(Ht, null, {
        header: h(() => [
          b(qt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: j[1] || (j[1] = (le) => p.value = !0)
          }, {
            actions: h(() => [
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: j[0] || (j[0] = (le) => g.value = !0)
              }, {
                default: h(() => [...j[6] || (j[6] = [
                  s("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    s("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  x(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          b($n, {
            modelValue: v.value,
            "onUpdate:modelValue": j[2] || (j[2] = (le) => v.value = le),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (o(), R(zs, {
            key: 0,
            message: "Loading environment models..."
          })) : f.value ? (o(), R(Fs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
            r.value.length ? (o(), R(Pl, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                x(" Total: " + m(r.value.length) + " models • " + m(E($.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (o(!0), i(B, null, ye(I.value, (le) => (o(), R(Nt, {
              key: le.type,
              title: le.type.toUpperCase(),
              count: le.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye(le.models, (ce) => (o(), R(Yt, {
                  key: ce.hash || ce.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...j[7] || (j[7] = [
                    x("📦", -1)
                  ])]),
                  title: h(() => [
                    x(m(ce.filename), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(E(ce.size)), 1)
                  ]),
                  details: h(() => [
                    b(Tt, {
                      label: "Used by:",
                      value: (ce.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    b(Tt, {
                      label: "Path:",
                      value: ce.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => P(ce)
                    }, {
                      default: h(() => [...j[8] || (j[8] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            C.value.length ? (o(), R(Nt, {
              key: 1,
              title: "MISSING",
              count: C.value.length
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye(C.value, (le) => (o(), R(Yt, {
                  key: le.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...j[9] || (j[9] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(le.filename), 1)
                  ]),
                  subtitle: h(() => [...j[10] || (j[10] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var ce;
                    return [
                      b(Tt, {
                        label: "Required by:",
                        value: ((ce = le.workflow_names) == null ? void 0 : ce.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    b(Pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ce) => A(le.filename)
                    }, {
                      default: h(() => [...j[11] || (j[11] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ce) => D(le.filename)
                    }, {
                      default: h(() => [...j[12] || (j[12] = [
                        x(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !S.value.length && !C.value.length ? (o(), R(Es, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(_s, {
        show: p.value,
        title: "About Environment Models",
        onClose: j[3] || (j[3] = (le) => p.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            j[13] || (j[13] = x(" These are models currently used by workflows in ", -1)),
            s("strong", null, '"' + m(u.value) + '"', 1),
            j[14] || (j[14] = x(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          b(Pe, {
            variant: "primary",
            onClick: k
          }, {
            default: h(() => [...j[15] || (j[15] = [
              x(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (o(), R(hc, {
        key: 0,
        identifier: w.value,
        onClose: j[4] || (j[4] = (le) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      b(yc, {
        show: g.value,
        onClose: j[5] || (j[5] = (le) => g.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), x$ = /* @__PURE__ */ Te(C$, [["__scopeId", "data-v-af3ca736"]]), S$ = {
  key: 0,
  class: "indexing-progress"
}, I$ = { class: "progress-info" }, E$ = { class: "progress-label" }, T$ = { class: "progress-count" }, M$ = { class: "progress-bar" }, P$ = { class: "directory-modal-body" }, R$ = { class: "input-group" }, D$ = { class: "current-path" }, N$ = { class: "input-group" }, L$ = /* @__PURE__ */ Ee({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = mt(), c = t, u = _([]), d = _(!1), f = _(!1), v = _(null), p = _(""), w = _(!1), g = _(null), k = _(!1), $ = _(null), S = _(""), C = _(!1), I = _(!1), E = _(null), P = M(
      () => u.value.reduce((ve, J) => ve + (J.size || 0), 0)
    ), D = M(() => {
      if (!p.value.trim()) return u.value;
      const ve = p.value.toLowerCase();
      return u.value.filter((J) => {
        const L = J, F = J.sha256 || L.sha256_hash || "";
        return J.filename.toLowerCase().includes(ve) || F.toLowerCase().includes(ve);
      });
    }), A = M(() => {
      const ve = {};
      for (const L of D.value) {
        const F = L.type || "other";
        ve[F] || (ve[F] = []), ve[F].push(L);
      }
      const J = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(ve).sort(([L], [F]) => {
        const ue = J.indexOf(L), te = J.indexOf(F);
        return ue >= 0 && te >= 0 ? ue - te : ue >= 0 ? -1 : te >= 0 ? 1 : L.localeCompare(F);
      }).map(([L, F]) => ({ type: L, models: F }));
    });
    function V(ve) {
      if (!ve) return "Unknown";
      const J = 1024 * 1024 * 1024, L = 1024 * 1024;
      return ve >= J ? `${(ve / J).toFixed(1)} GB` : ve >= L ? `${(ve / L).toFixed(0)} MB` : `${(ve / 1024).toFixed(0)} KB`;
    }
    function N(ve) {
      g.value = ve.hash || ve.filename;
    }
    async function j() {
      f.value = !0, v.value = null;
      try {
        const ve = await a();
        await ce(), ve.changes > 0 && console.log(`Scan complete: ${ve.changes} changes detected`);
      } catch (ve) {
        v.value = ve instanceof Error ? ve.message : "Failed to scan models";
      } finally {
        f.value = !1;
      }
    }
    async function le() {
      if (S.value.trim()) {
        C.value = !0, v.value = null;
        try {
          const ve = await r(S.value.trim());
          $.value = ve.path, k.value = !1, S.value = "", await ce(), console.log(`Directory changed: ${ve.models_indexed} models indexed`), c("refresh");
        } catch (ve) {
          v.value = ve instanceof Error ? ve.message : "Failed to change directory";
        } finally {
          C.value = !1;
        }
      }
    }
    async function ce() {
      d.value = !0, v.value = null;
      try {
        u.value = await n();
      } catch (ve) {
        v.value = ve instanceof Error ? ve.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function Q() {
      try {
        const ve = await l();
        $.value = ve.path;
      } catch {
      }
    }
    return ut(() => {
      ce(), Q();
    }), (ve, J) => (o(), i(B, null, [
      b(Ht, null, {
        header: h(() => [
          b(qt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: J[2] || (J[2] = (L) => w.value = !0)
          }, {
            actions: h(() => [
              b(Pe, {
                variant: "primary",
                size: "sm",
                disabled: f.value,
                onClick: j
              }, {
                default: h(() => [
                  x(m(f.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: J[0] || (J[0] = (L) => k.value = !0)
              }, {
                default: h(() => [...J[10] || (J[10] = [
                  x(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: J[1] || (J[1] = (L) => I.value = !0)
              }, {
                default: h(() => [...J[11] || (J[11] = [
                  s("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    s("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  x(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          E.value ? (o(), i("div", S$, [
            s("div", I$, [
              s("span", E$, m(E.value.message), 1),
              s("span", T$, m(E.value.current) + "/" + m(E.value.total), 1)
            ]),
            s("div", M$, [
              s("div", {
                class: "progress-fill",
                style: zt({ width: `${E.value.current / E.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          b($n, {
            modelValue: p.value,
            "onUpdate:modelValue": J[3] || (J[3] = (L) => p.value = L),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || E.value ? (o(), R(zs, {
            key: 0,
            message: E.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (o(), R(Fs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: ce
          }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
            u.value.length ? (o(), R(Pl, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                x(" Total: " + m(u.value.length) + " models • " + m(V(P.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (o(!0), i(B, null, ye(A.value, (L) => (o(), R(Nt, {
              key: L.type,
              title: L.type.toUpperCase(),
              count: L.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye(L.models, (F) => (o(), R(Yt, {
                  key: F.sha256 || F.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...J[12] || (J[12] = [
                    x("📦", -1)
                  ])]),
                  title: h(() => [
                    x(m(F.filename), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(V(F.size)), 1)
                  ]),
                  details: h(() => [
                    b(Tt, {
                      label: "Hash:",
                      value: F.hash ? F.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ue) => N(F)
                    }, {
                      default: h(() => [...J[13] || (J[13] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            D.value.length ? y("", !0) : (o(), R(Es, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b(_s, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: J[4] || (J[4] = (L) => w.value = !1)
      }, {
        content: h(() => [...J[14] || (J[14] = [
          s("p", null, [
            x(" Content-addressable model storage shared across "),
            s("strong", null, "all environments"),
            x(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value ? (o(), R(hc, {
        key: 0,
        identifier: g.value,
        onClose: J[5] || (J[5] = (L) => g.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      k.value ? (o(), R(Mt, {
        key: 1,
        title: "Change Models Directory",
        size: "md",
        "overlay-z-index": 10010,
        onClose: J[8] || (J[8] = (L) => k.value = !1)
      }, {
        body: h(() => [
          s("div", P$, [
            s("div", R$, [
              J[15] || (J[15] = s("label", null, "Current Directory", -1)),
              s("code", D$, m($.value || "Not set"), 1)
            ]),
            s("div", N$, [
              J[16] || (J[16] = s("label", null, "New Directory Path", -1)),
              b(Rt, {
                modelValue: S.value,
                "onUpdate:modelValue": J[6] || (J[6] = (L) => S.value = L),
                placeholder: "/path/to/models"
              }, null, 8, ["modelValue"])
            ]),
            J[17] || (J[17] = s("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
          ])
        ]),
        footer: h(() => [
          b(Ue, {
            variant: "secondary",
            onClick: J[7] || (J[7] = (L) => k.value = !1)
          }, {
            default: h(() => [...J[18] || (J[18] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Ue, {
            variant: "primary",
            disabled: !S.value.trim() || C.value,
            loading: C.value,
            onClick: le
          }, {
            default: h(() => [
              x(m(C.value ? "Indexing..." : "Change Directory"), 1)
            ]),
            _: 1
          }, 8, ["disabled", "loading"])
        ]),
        _: 1
      })) : y("", !0),
      b(yc, {
        show: I.value,
        onClose: J[9] || (J[9] = (L) => I.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), U$ = /* @__PURE__ */ Te(L$, [["__scopeId", "data-v-9fca048b"]]), O$ = { class: "node-details" }, A$ = { class: "status-row" }, z$ = {
  key: 0,
  class: "detail-row"
}, F$ = { class: "value" }, V$ = { class: "detail-row" }, B$ = { class: "value" }, W$ = {
  key: 1,
  class: "detail-row"
}, G$ = { class: "value mono" }, j$ = {
  key: 2,
  class: "detail-row"
}, H$ = ["href"], q$ = {
  key: 3,
  class: "detail-row"
}, K$ = { class: "value mono small" }, J$ = { class: "detail-row" }, Q$ = {
  key: 0,
  class: "value"
}, Y$ = {
  key: 1,
  class: "workflow-list"
}, X$ = /* @__PURE__ */ Ee({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = M(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = M(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = M(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (u, d) => (o(), R(Mt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (f) => a("close"))
    }, {
      body: h(() => [
        s("div", O$, [
          s("div", A$, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Be(["status-badge", l.value])
            }, m(r.value), 3)
          ]),
          e.node.version ? (o(), i("div", z$, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", F$, m(e.node.source === "development" ? "" : "v") + m(e.node.version), 1)
          ])) : y("", !0),
          s("div", V$, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", B$, m(c.value), 1)
          ]),
          e.node.registry_id ? (o(), i("div", W$, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", G$, m(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (o(), i("div", j$, [
            d[7] || (d[7] = s("span", { class: "label" }, "Repository:", -1)),
            s("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              x(m(e.node.repository) + " ", 1),
              d[6] || (d[6] = s("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                s("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, H$)
          ])) : y("", !0),
          e.node.download_url ? (o(), i("div", q$, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", K$, m(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", J$, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (o(), i("span", Q$, " Not used in any workflows ")) : (o(), i("div", Y$, [
              (o(!0), i(B, null, ye(e.node.used_in_workflows, (f) => (o(), i("span", {
                key: f,
                class: "workflow-tag"
              }, m(f), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        b(Ue, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (f) => a("close"))
        }, {
          default: h(() => [...d[11] || (d[11] = [
            x(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Z$ = /* @__PURE__ */ Te(X$, [["__scopeId", "data-v-b342f626"]]), eC = { class: "dialog-message" }, tC = {
  key: 0,
  class: "dialog-details"
}, sC = {
  key: 1,
  class: "dialog-warning"
}, nC = /* @__PURE__ */ Ee({
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
    return (t, n) => (o(), R(Mt, {
      title: e.title,
      size: "sm",
      onClose: n[3] || (n[3] = (a) => t.$emit("cancel"))
    }, {
      body: h(() => [
        s("p", eC, m(e.message), 1),
        e.details && e.details.length ? (o(), i("div", tC, [
          (o(!0), i(B, null, ye(e.details, (a, l) => (o(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + m(a), 1))), 128))
        ])) : y("", !0),
        e.warning ? (o(), i("p", sC, [
          n[4] || (n[4] = s("span", { class: "warning-icon" }, "⚠", -1)),
          x(" " + m(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        b(Ue, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (a) => t.$emit("cancel"))
        }, {
          default: h(() => [
            x(m(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (o(), R(Ue, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (a) => t.$emit("secondary"))
        }, {
          default: h(() => [
            x(m(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        b(Ue, {
          variant: e.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (a) => t.$emit("confirm"))
        }, {
          default: h(() => [
            x(m(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Dl = /* @__PURE__ */ Te(nC, [["__scopeId", "data-v-3670b9f5"]]), oC = { class: "mismatch-warning" }, aC = { class: "version-mismatch" }, lC = { class: "version-actual" }, iC = { class: "version-expected" }, rC = { style: { color: "var(--cg-color-warning)" } }, cC = { style: { color: "var(--cg-color-warning)" } }, uC = {
  key: 0,
  class: "community-status-badge"
}, dC = { key: 0 }, mC = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, fC = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, vC = { class: "criticality-control" }, pC = ["value", "disabled", "onChange"], gC = /* @__PURE__ */ Ee({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: t }) {
    const n = e, a = t, {
      getNodes: l,
      trackNodeAsDev: r,
      installNode: c,
      uninstallNode: u,
      queueNodeInstall: d,
      updateNodeCriticality: f
    } = mt(), v = _({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), p = _(!1), w = _(null), g = _(""), k = _(!1), $ = _(null), S = _(/* @__PURE__ */ new Set()), C = _(/* @__PURE__ */ new Set()), I = _(null), E = M(() => {
      if (!g.value.trim()) return v.value.nodes;
      const ge = g.value.toLowerCase();
      return v.value.nodes.filter(
        (we) => {
          var T, O;
          return we.name.toLowerCase().includes(ge) || ((T = we.description) == null ? void 0 : T.toLowerCase().includes(ge)) || ((O = we.repository) == null ? void 0 : O.toLowerCase().includes(ge));
        }
      );
    }), P = M(
      () => E.value.filter((ge) => ge.installed && ge.tracked)
    ), D = M(
      () => E.value.filter((ge) => !ge.installed && ge.tracked && !ge.issue_type)
    ), A = M(
      () => E.value.filter((ge) => ge.installed && !ge.tracked)
    ), V = M(
      () => E.value.filter((ge) => ge.issue_type === "version_gated")
    ), N = M(
      () => E.value.filter((ge) => ge.issue_type === "uninstallable")
    );
    function j(ge) {
      return ge.registry_id || ge.name;
    }
    function le(ge) {
      return S.value.has(j(ge));
    }
    async function ce(ge, we) {
      const T = ge.registry_id;
      if (!T) {
        a("toast", `Node "${ge.name}" has no package id for install`, "warning");
        return;
      }
      if (we === "git" && !ge.repository) {
        a("toast", `Node "${ge.name}" has no repository URL for git install`, "warning");
        return;
      }
      const O = {
        id: T,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      we === "git" && ge.repository && (O.repository = ge.repository, O.install_source = "git"), await d(O), S.value.add(j(ge)), a("toast", `✓ Queued install for "${ge.name}"`, "success");
    }
    function Q(ge) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[ge] || ge;
    }
    const ve = M(() => n.versionMismatches.length > 0);
    function J(ge) {
      return !ge.used_in_workflows || ge.used_in_workflows.length === 0 ? "Not used in any workflows" : ge.used_in_workflows.length === 1 ? ge.used_in_workflows[0] : `${ge.used_in_workflows.length} workflows`;
    }
    function L(ge) {
      return ge.criticality === "optional" ? "optional" : "required";
    }
    function F(ge) {
      return C.value.has(ge.name);
    }
    async function ue(ge, we) {
      const T = we.target, O = L(ge), ae = T.value;
      if (ae !== O) {
        C.value = new Set(C.value).add(ge.name), ge.criticality = ae;
        try {
          const Ie = await f(ge.name, ae);
          if (Ie.status !== "success") {
            ge.criticality = O, a("toast", Ie.message || `Failed to update "${ge.name}" criticality`, "error");
            return;
          }
          a("toast", `Marked "${ge.name}" as ${ae}`, "success");
        } catch (Ie) {
          ge.criticality = O, T.value = O, a("toast", `Error updating criticality: ${Ie instanceof Error ? Ie.message : "Unknown error"}`, "error");
        } finally {
          const Ie = new Set(C.value);
          Ie.delete(ge.name), C.value = Ie;
        }
      }
    }
    function te(ge) {
      return ge.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function me(ge) {
      return ge.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function de(ge) {
      return ge.registry_id ? `Community-mapped package: ${ge.registry_id}` : "Community-mapped package";
    }
    function W(ge) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function se(ge) {
      $.value = ge;
    }
    function ne() {
      a("open-node-manager");
    }
    function Me(ge) {
      I.value = {
        title: "Track as Development Node",
        message: `Track "${ge}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0;
            const we = await r(ge);
            we.status === "success" ? (a("toast", `✓ Node "${ge}" tracked as development`, "success"), await De()) : a("toast", `Failed to track node: ${we.message || "Unknown error"}`, "error");
          } catch (we) {
            a("toast", `Error tracking node: ${we instanceof Error ? we.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function pe(ge) {
      I.value = {
        title: "Remove Untracked Node",
        message: `Remove "${ge}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0;
            const we = await u(ge);
            we.status === "success" ? (a("toast", `✓ Node "${ge}" removed`, "success"), await De()) : a("toast", `Failed to remove node: ${we.message || "Unknown error"}`, "error");
          } catch (we) {
            a("toast", `Error removing node: ${we instanceof Error ? we.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function ze(ge) {
      I.value = {
        title: "Install Missing Node",
        message: `Install "${ge}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0;
            const we = await c(ge);
            we.status === "success" ? (a("toast", `✓ Node "${ge}" installed`, "success"), await De()) : a("toast", `Failed to install node: ${we.message || "Unknown error"}`, "error");
          } catch (we) {
            a("toast", `Error installing node: ${we instanceof Error ? we.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function Le(ge) {
      I.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${ge.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0, await ce(ge, "registry");
          } catch (we) {
            a("toast", `Error queueing install: ${we instanceof Error ? we.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function ke(ge) {
      I.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${ge.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0, await ce(ge, "git");
          } catch (we) {
            a("toast", `Error queueing git install: ${we instanceof Error ? we.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    async function De() {
      p.value = !0, w.value = null;
      try {
        v.value = await l();
      } catch (ge) {
        w.value = ge instanceof Error ? ge.message : "Failed to load nodes";
      } finally {
        p.value = !1;
      }
    }
    return ut(De), (ge, we) => (o(), i(B, null, [
      b(Ht, null, {
        header: h(() => [
          b(qt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: we[0] || (we[0] = (T) => k.value = !0)
          }, {
            actions: h(() => [
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: ne
              }, {
                default: h(() => [...we[7] || (we[7] = [
                  x(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          b($n, {
            modelValue: g.value,
            "onUpdate:modelValue": we[1] || (we[1] = (T) => g.value = T),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          p.value ? (o(), R(zs, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (o(), R(Fs, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: De
          }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
            ve.value ? (o(), R(Nt, {
              key: 0,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                s("div", oC, [
                  we[8] || (we[8] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (o(!0), i(B, null, ye(e.versionMismatches, (T) => (o(), R(Yt, {
                  key: T.name,
                  status: "warning"
                }, {
                  icon: h(() => [...we[9] || (we[9] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", aC, [
                      s("span", lC, m(T.actual), 1),
                      we[10] || (we[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", iC, m(T.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "warning",
                      size: "sm",
                      onClick: we[2] || (we[2] = (O) => a("repair-environment"))
                    }, {
                      default: h(() => [...we[11] || (we[11] = [
                        x(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            V.value.length ? (o(), R(Nt, {
              key: 1,
              title: "BLOCKED",
              count: V.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye(V.value, (T) => (o(), R(Yt, {
                  key: `blocked-${T.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...we[12] || (we[12] = [
                    x("⛔", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", rC, m(te(T)), 1)
                  ]),
                  details: h(() => [
                    b(Tt, {
                      label: "Guidance:",
                      value: T.issue_guidance || me(T)
                    }, null, 8, ["value"]),
                    b(Tt, {
                      label: "Used by:",
                      value: J(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (O) => se(T)
                    }, {
                      default: h(() => [...we[13] || (we[13] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            N.value.length ? (o(), R(Nt, {
              key: 2,
              title: "COMMUNITY-MAPPED",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye(N.value, (T) => (o(), R(Yt, {
                  key: `community-${T.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...we[14] || (we[14] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", cC, m(de(T)), 1)
                  ]),
                  details: h(() => [
                    b(Tt, {
                      label: "Guidance:",
                      value: T.issue_guidance || W(T)
                    }, null, 8, ["value"]),
                    b(Tt, {
                      label: "Used by:",
                      value: J(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (O) => se(T)
                    }, {
                      default: h(() => [...we[15] || (we[15] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    le(T) ? (o(), i("span", uC, "Queued")) : (o(), i(B, { key: 1 }, [
                      T.registry_id ? (o(), R(Pe, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (O) => Le(T)
                      }, {
                        default: h(() => [...we[16] || (we[16] = [
                          x(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0),
                      T.repository ? (o(), R(Pe, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (O) => ke(T)
                      }, {
                        default: h(() => [...we[17] || (we[17] = [
                          x(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            A.value.length ? (o(), R(Nt, {
              key: 3,
              title: "UNTRACKED",
              count: A.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye(A.value, (T) => (o(), R(Yt, {
                  key: T.name,
                  status: "warning"
                }, {
                  icon: h(() => [...we[18] || (we[18] = [
                    x("?", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [...we[19] || (we[19] = [
                    s("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    b(Tt, {
                      label: "Used by:",
                      value: J(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (O) => se(T)
                    }, {
                      default: h(() => [...we[20] || (we[20] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => Me(T.name)
                    }, {
                      default: h(() => [...we[21] || (we[21] = [
                        x(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (O) => pe(T.name)
                    }, {
                      default: h(() => [...we[22] || (we[22] = [
                        x(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            P.value.length ? (o(), R(Nt, {
              key: 4,
              title: "INSTALLED",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye(P.value, (T) => (o(), R(Yt, {
                  key: T.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    x(m(T.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [
                    T.version ? (o(), i("span", dC, m(T.source === "development" ? "" : "v") + m(T.version), 1)) : (o(), i("span", mC, "version unknown")),
                    s("span", fC, " • " + m(Q(T.source)), 1)
                  ]),
                  details: h(() => [
                    b(Tt, {
                      label: "Used by:",
                      value: J(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (O) => se(T)
                    }, {
                      default: h(() => [...we[23] || (we[23] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    s("label", vC, [
                      we[25] || (we[25] = s("span", null, "Readiness", -1)),
                      s("select", {
                        class: "criticality-select",
                        value: L(T),
                        disabled: F(T),
                        onChange: (O) => ue(T, O)
                      }, [...we[24] || (we[24] = [
                        s("option", { value: "required" }, "Required", -1),
                        s("option", { value: "optional" }, "Optional", -1)
                      ])], 40, pC)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            D.value.length ? (o(), R(Nt, {
              key: 5,
              title: "MISSING",
              count: D.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye(D.value, (T) => (o(), R(Yt, {
                  key: T.name,
                  status: "missing"
                }, {
                  icon: h(() => [...we[26] || (we[26] = [
                    x("!", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [...we[27] || (we[27] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    b(Tt, {
                      label: "Required by:",
                      value: J(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (O) => se(T)
                    }, {
                      default: h(() => [...we[28] || (we[28] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => ze(T.name)
                    }, {
                      default: h(() => [...we[29] || (we[29] = [
                        x(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !P.value.length && !D.value.length && !V.value.length && !N.value.length && !A.value.length ? (o(), R(Es, {
              key: 6,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(_s, {
        show: k.value,
        title: "About Custom Nodes",
        onClose: we[4] || (we[4] = (T) => k.value = !1)
      }, {
        content: h(() => [...we[30] || (we[30] = [
          s("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Installed:"),
            x(" Tracked nodes available in this environment"),
            s("br"),
            s("strong", null, "Missing:"),
            x(" Tracked nodes that need to be installed"),
            s("br"),
            s("strong", null, "Blocked:"),
            x(" Node types that require newer ComfyUI"),
            s("br"),
            s("strong", null, "Community-Mapped:"),
            x(" Actionable package mappings from community metadata"),
            s("br"),
            s("strong", null, "Untracked:"),
            x(" Nodes on filesystem but not in manifest ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: h(() => [
          b(Pe, {
            variant: "primary",
            onClick: we[3] || (we[3] = (T) => k.value = !1)
          }, {
            default: h(() => [...we[31] || (we[31] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      $.value ? (o(), R(Z$, {
        key: 0,
        node: $.value,
        onClose: we[5] || (we[5] = (T) => $.value = null)
      }, null, 8, ["node"])) : y("", !0),
      I.value ? (o(), R(Dl, {
        key: 1,
        title: I.value.title,
        message: I.value.message,
        warning: I.value.warning,
        "confirm-label": I.value.confirmLabel,
        destructive: I.value.destructive,
        onConfirm: I.value.onConfirm,
        onCancel: we[6] || (we[6] = (T) => I.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), hC = /* @__PURE__ */ Te(gC, [["__scopeId", "data-v-edfa1c86"]]), yC = { class: "setting-info" }, wC = { class: "setting-label" }, _C = {
  key: 0,
  class: "required-marker"
}, kC = {
  key: 0,
  class: "setting-description"
}, bC = { class: "setting-control" }, $C = /* @__PURE__ */ Ee({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, n) => (o(), i("div", {
      class: Be(["setting-row", { disabled: e.disabled, stacked: e.stacked }])
    }, [
      s("div", yC, [
        s("div", wC, [
          x(m(e.label) + " ", 1),
          e.required ? (o(), i("span", _C, "*")) : y("", !0)
        ]),
        e.description ? (o(), i("div", kC, m(e.description), 1)) : y("", !0)
      ]),
      s("div", bC, [
        ct(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), Sn = /* @__PURE__ */ Te($C, [["__scopeId", "data-v-3e106b1c"]]), CC = ["type", "value", "placeholder", "disabled"], xC = /* @__PURE__ */ Ee({
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
  setup(e, { expose: t, emit: n }) {
    const a = e, l = n, r = _(null);
    function c(u) {
      const d = u.target.value;
      l("update:modelValue", d);
    }
    return ut(() => {
      a.autoFocus && r.value && r.value.focus();
    }), t({
      focus: () => {
        var u;
        return (u = r.value) == null ? void 0 : u.focus();
      },
      blur: () => {
        var u;
        return (u = r.value) == null ? void 0 : u.blur();
      }
    }), (u, d) => (o(), i("input", {
      ref_key: "inputRef",
      ref: r,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: Be(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = Cs((f) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Cs((f) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (f) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (f) => u.$emit("blur"))
    }, null, 42, CC));
  }
}), Mn = /* @__PURE__ */ Te(xC, [["__scopeId", "data-v-0380d08f"]]), SC = { class: "toggle" }, IC = ["checked", "disabled"], EC = /* @__PURE__ */ Ee({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (o(), i("label", SC, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: n[0] || (n[0] = (a) => t.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, IC),
      n[1] || (n[1] = s("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Di = /* @__PURE__ */ Te(EC, [["__scopeId", "data-v-71c0f550"]]), Ha = "ComfyGit.Deploy.GitHubPAT";
function wc(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function TC(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function MC() {
  function e() {
    try {
      return localStorage.getItem(Ha);
    } catch {
      return null;
    }
  }
  function t(l) {
    try {
      localStorage.setItem(Ha, l);
    } catch (r) {
      console.error("[useGitAuth] Failed to save token:", r);
    }
  }
  function n() {
    try {
      localStorage.removeItem(Ha);
    } catch (l) {
      console.error("[useGitAuth] Failed to clear token:", l);
    }
  }
  function a() {
    const l = e();
    return l !== null && l.length > 0;
  }
  return {
    getToken: e,
    setToken: t,
    clearToken: n,
    hasToken: a,
    isRemoteSsh: wc,
    isRemoteHttps: TC
  };
}
const PC = { class: "workspace-settings-content" }, RC = { class: "settings-section" }, DC = { class: "path-setting" }, NC = { class: "path-value" }, LC = { class: "path-setting" }, UC = { class: "path-value" }, OC = { class: "settings-section" }, AC = { class: "token-setting" }, zC = {
  key: 0,
  class: "token-warning"
}, FC = { class: "token-actions" }, VC = { class: "settings-section" }, BC = { class: "settings-section" }, WC = /* @__PURE__ */ Ee({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: n }) {
    const a = e, l = n, { getConfig: r, updateConfig: c, getRemotes: u, testGitAuth: d } = mt(), { getToken: f, setToken: v, clearToken: p, hasToken: w } = MC(), g = _(!1), k = _(null), $ = _(null), S = _(null), C = _(null), I = _(""), E = _(""), P = _(""), D = _(""), A = _(!1), V = _(!1), N = _(!1), j = _(""), le = _(!1), ce = _(!1), Q = _(null), ve = _(!1), J = _(!0);
    function L(ze) {
      return ze.join(" ");
    }
    function F(ze) {
      return ze.trim() ? ze.trim().split(/\s+/) : [];
    }
    const ue = M(() => {
      if (!C.value) return !1;
      const ze = A.value, Le = V.value, ke = N.value, De = D.value !== L(C.value.comfyui_extra_args || []);
      return ze || Le || ke || De;
    }), te = M(() => w());
    async function me() {
      var ze;
      g.value = !0, k.value = null;
      try {
        S.value = await r(a.workspacePath || void 0), C.value = { ...S.value }, I.value = S.value.civitai_api_key || "", E.value = S.value.huggingface_token || "", D.value = L(S.value.comfyui_extra_args || []), P.value = f() || "", j.value = P.value, A.value = !1, V.value = !1, N.value = !1, Q.value = null;
        const Le = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        ve.value = Le !== "false", J.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const De = (ze = (await u()).remotes) == null ? void 0 : ze.find((ge) => ge.name === "origin");
          le.value = !!(De && wc(De.url));
        } catch {
          le.value = !1;
        }
      } catch (Le) {
        k.value = Le instanceof Error ? Le.message : "Failed to load settings";
      } finally {
        g.value = !1;
      }
    }
    async function de() {
      var ze;
      $.value = null;
      try {
        const Le = {};
        A.value && (Le.civitai_api_key = I.value || null), V.value && (Le.huggingface_token = E.value || null), D.value !== L(((ze = C.value) == null ? void 0 : ze.comfyui_extra_args) || []) && (Le.comfyui_extra_args = F(D.value)), await c(Le, a.workspacePath || void 0), N.value && (P.value ? v(P.value) : p()), await me(), $.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          $.value = null;
        }, 3e3);
      } catch (Le) {
        const ke = Le instanceof Error ? Le.message : "Failed to save settings";
        $.value = { type: "error", message: ke }, l("error", ke);
      }
    }
    function W() {
      C.value && (I.value = C.value.civitai_api_key || "", E.value = C.value.huggingface_token || "", D.value = L(C.value.comfyui_extra_args || []), P.value = j.value, A.value = !1, V.value = !1, N.value = !1, Q.value = null, $.value = null);
    }
    async function se() {
      if (P.value) {
        ce.value = !0, Q.value = null;
        try {
          const ze = await d(P.value);
          Q.value = {
            type: ze.status === "success" ? "success" : "error",
            message: ze.message
          };
        } catch (ze) {
          Q.value = {
            type: "error",
            message: ze instanceof Error ? ze.message : "Connection test failed"
          };
        } finally {
          ce.value = !1;
        }
      }
    }
    function ne() {
      P.value = "", N.value = !0, Q.value = null;
    }
    function Me(ze) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(ze)), console.log("[ComfyGit] Auto-refresh setting saved:", ze);
    }
    function pe(ze) {
      ze ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", ze ? "enabled" : "disabled");
    }
    return t({
      saveSettings: de,
      resetSettings: W,
      hasChanges: ue,
      loadSettings: me
    }), ut(me), (ze, Le) => (o(), i("div", PC, [
      g.value ? (o(), R(zs, {
        key: 0,
        message: "Loading workspace settings..."
      })) : k.value ? (o(), R(Fs, {
        key: 1,
        message: k.value,
        retry: !0,
        onRetry: me
      }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
        b(Nt, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var ke, De;
            return [
              s("div", RC, [
                s("div", DC, [
                  Le[9] || (Le[9] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  Le[10] || (Le[10] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", NC, m(((ke = S.value) == null ? void 0 : ke.workspace_path) || "Loading..."), 1)
                ]),
                s("div", LC, [
                  Le[11] || (Le[11] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  Le[12] || (Le[12] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", UC, m(((De = S.value) == null ? void 0 : De.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        b(Nt, { title: "API CREDENTIALS" }, {
          default: h(() => [
            s("div", OC, [
              b(Sn, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  b(Mn, {
                    modelValue: I.value,
                    "onUpdate:modelValue": Le[0] || (Le[0] = (ke) => I.value = ke),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: Le[1] || (Le[1] = (ke) => A.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(Sn, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: h(() => [
                  b(Mn, {
                    modelValue: E.value,
                    "onUpdate:modelValue": Le[2] || (Le[2] = (ke) => E.value = ke),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: Le[3] || (Le[3] = (ke) => V.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(Sn, {
                label: "GitHub Personal Access Token",
                description: "Client-side token used for private Git remote access during deploy and remote operations",
                stacked: ""
              }, {
                default: h(() => [
                  s("div", AC, [
                    b(Mn, {
                      modelValue: P.value,
                      "onUpdate:modelValue": Le[4] || (Le[4] = (ke) => P.value = ke),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: Le[5] || (Le[5] = (ke) => N.value = !0)
                    }, null, 8, ["modelValue"]),
                    le.value ? (o(), i("div", zC, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : y("", !0),
                    Le[15] || (Le[15] = s("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    s("div", FC, [
                      b(Pe, {
                        variant: "ghost",
                        size: "xs",
                        loading: ce.value,
                        disabled: !P.value || ce.value,
                        onClick: se
                      }, {
                        default: h(() => [...Le[13] || (Le[13] = [
                          x(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      te.value ? (o(), R(Pe, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: ne
                      }, {
                        default: h(() => [...Le[14] || (Le[14] = [
                          x(" Clear ", -1)
                        ])]),
                        _: 1
                      })) : y("", !0)
                    ]),
                    Q.value ? (o(), i("div", {
                      key: 1,
                      class: Be(["token-test-result", Q.value.type])
                    }, m(Q.value.message), 3)) : y("", !0)
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        b(Nt, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            s("div", VC, [
              b(Sn, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  b(Mn, {
                    modelValue: D.value,
                    "onUpdate:modelValue": Le[6] || (Le[6] = (ke) => D.value = ke),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              Le[16] || (Le[16] = s("div", { class: "setting-hint" }, [
                x(" Common flags: "),
                s("code", null, "--lowvram"),
                x(", "),
                s("code", null, "--highvram"),
                x(", "),
                s("code", null, "--listen 0.0.0.0"),
                x(", "),
                s("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        b(Nt, { title: "UI SETTINGS" }, {
          default: h(() => [
            s("div", BC, [
              b(Sn, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  b(Di, {
                    modelValue: ve.value,
                    "onUpdate:modelValue": [
                      Le[7] || (Le[7] = (ke) => ve.value = ke),
                      Me
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(Sn, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  b(Di, {
                    modelValue: J.value,
                    "onUpdate:modelValue": [
                      Le[8] || (Le[8] = (ke) => J.value = ke),
                      pe
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        $.value ? (o(), R(Pl, {
          key: 0,
          variant: ($.value.type === "success", "compact")
        }, {
          default: h(() => [
            s("span", {
              style: zt({ color: $.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, m($.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), _c = /* @__PURE__ */ Te(WC, [["__scopeId", "data-v-f1bdc574"]]), GC = /* @__PURE__ */ Ee({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const t = _(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (o(), R(Ht, null, {
      header: h(() => [
        b(qt, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var r, c;
            return [
              b(Pe, {
                variant: "primary",
                size: "sm",
                disabled: !((r = t.value) != null && r.hasChanges),
                onClick: l[0] || (l[0] = (u) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: h(() => [...l[2] || (l[2] = [
                  x(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (c = t.value) != null && c.hasChanges ? (o(), R(Pe, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (u) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: h(() => [...l[3] || (l[3] = [
                  x(" Reset ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: h(() => [
        b(_c, {
          ref_key: "contentRef",
          ref: t,
          onSaved: n
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), jC = { class: "env-title" }, HC = {
  key: 0,
  class: "current-badge"
}, qC = {
  key: 0,
  class: "branch-info"
}, KC = /* @__PURE__ */ Ee({
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
    return (t, n) => (o(), R(Yt, {
      status: e.isCurrent ? "synced" : void 0
    }, rs({
      icon: h(() => [
        x(m(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        s("div", jC, [
          s("span", null, m(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (o(), i("span", HC, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (o(), i("span", qC, [
          n[0] || (n[0] = s("span", { class: "branch-icon" }, "⎇", -1)),
          x(" " + m(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: h(() => [
        ct(t.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: h(() => [
          b(Tt, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          b(Tt, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          b(Tt, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (o(), R(Tt, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), JC = /* @__PURE__ */ Te(KC, [["__scopeId", "data-v-9231917a"]]), QC = { class: "env-details" }, YC = { class: "status-row" }, XC = {
  key: 0,
  class: "detail-row"
}, ZC = { class: "value mono" }, ex = {
  key: 1,
  class: "detail-row"
}, tx = { class: "value mono small" }, sx = { class: "collapsible-section" }, nx = { class: "value" }, ox = {
  key: 0,
  class: "collapsible-body"
}, ax = { class: "item-list" }, lx = { class: "item-name" }, ix = { class: "item-name" }, rx = { class: "item-name" }, cx = { class: "item-name" }, ux = {
  key: 0,
  class: "empty-list"
}, dx = { class: "collapsible-section" }, mx = { class: "value" }, fx = {
  key: 0,
  class: "collapsible-body"
}, vx = { class: "item-list" }, px = { class: "item-name" }, gx = {
  key: 0,
  class: "item-meta"
}, hx = {
  key: 0,
  class: "empty-list"
}, yx = { class: "collapsible-section" }, wx = { class: "value" }, _x = {
  key: 0,
  class: "missing-count"
}, kx = {
  key: 0,
  class: "collapsible-body"
}, bx = { class: "item-list" }, $x = { class: "model-row" }, Cx = { class: "item-name" }, xx = { class: "model-meta" }, Sx = { class: "item-meta" }, Ix = {
  key: 0,
  class: "item-meta"
}, Ex = {
  key: 0,
  class: "empty-list"
}, Tx = {
  key: 2,
  class: "section-divider"
}, Mx = {
  key: 3,
  class: "detail-row"
}, Px = { class: "value" }, Rx = { class: "footer-actions" }, Dx = /* @__PURE__ */ Ee({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete", "export"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(/* @__PURE__ */ new Set());
    function r(d) {
      l.value.has(d) ? l.value.delete(d) : l.value.add(d), l.value = new Set(l.value);
    }
    const c = M(() => {
      var f;
      if (!((f = n.detail) != null && f.workflows)) return !0;
      const d = n.detail.workflows;
      return !d.synced.length && !d.new.length && !d.modified.length && !d.deleted.length;
    });
    function u(d) {
      if (!d) return "Unknown";
      try {
        return new Date(d).toLocaleString(void 0, {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit"
        });
      } catch {
        return d;
      }
    }
    return (d, f) => (o(), R(Mt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: f[6] || (f[6] = (v) => a("close"))
    }, {
      body: h(() => {
        var v, p, w, g, k, $, S, C, I, E, P, D, A, V;
        return [
          s("div", QC, [
            s("div", YC, [
              f[7] || (f[7] = s("span", { class: "label" }, "Status:", -1)),
              s("span", {
                class: Be(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, m(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (o(), i("div", XC, [
              f[8] || (f[8] = s("span", { class: "label" }, "Branch:", -1)),
              s("span", ZC, m(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (o(), i("div", ex, [
              f[9] || (f[9] = s("span", { class: "label" }, "Path:", -1)),
              s("span", tx, m(e.environment.path), 1)
            ])) : y("", !0),
            f[18] || (f[18] = s("div", { class: "section-divider" }, null, -1)),
            s("div", sx, [
              s("div", {
                class: "collapsible-header",
                onClick: f[0] || (f[0] = (N) => r("workflows"))
              }, [
                f[10] || (f[10] = s("span", { class: "label" }, "Workflows:", -1)),
                s("span", nx, m(((v = e.detail) == null ? void 0 : v.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (o(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (o(), i("div", ox, [
                s("div", ax, [
                  (o(!0), i(B, null, ye(e.detail.workflows.synced, (N) => (o(), i("div", {
                    key: "synced-" + N,
                    class: "list-item"
                  }, [
                    s("span", lx, m(N), 1),
                    f[11] || (f[11] = s("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (o(!0), i(B, null, ye(e.detail.workflows.new, (N) => (o(), i("div", {
                    key: "new-" + N,
                    class: "list-item"
                  }, [
                    s("span", ix, m(N), 1),
                    f[12] || (f[12] = s("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (o(!0), i(B, null, ye(e.detail.workflows.modified, (N) => (o(), i("div", {
                    key: "mod-" + N,
                    class: "list-item"
                  }, [
                    s("span", rx, m(N), 1),
                    f[13] || (f[13] = s("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (o(!0), i(B, null, ye(e.detail.workflows.deleted, (N) => (o(), i("div", {
                    key: "del-" + N,
                    class: "list-item"
                  }, [
                    s("span", cx, m(N), 1),
                    f[14] || (f[14] = s("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (o(), i("div", ux, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            s("div", dx, [
              s("div", {
                class: "collapsible-header",
                onClick: f[1] || (f[1] = (N) => r("nodes"))
              }, [
                f[15] || (f[15] = s("span", { class: "label" }, "Nodes:", -1)),
                s("span", mx, m(((g = e.detail) == null ? void 0 : g.node_count) ?? e.environment.node_count), 1),
                (k = e.detail) != null && k.nodes ? (o(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              ($ = e.detail) != null && $.nodes && l.value.has("nodes") ? (o(), i("div", fx, [
                s("div", vx, [
                  (o(!0), i(B, null, ye(e.detail.nodes, (N) => (o(), i("div", {
                    key: N.name,
                    class: "list-item"
                  }, [
                    s("span", px, m(N.name), 1),
                    N.version ? (o(), i("span", gx, m(N.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (o(), i("div", hx, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            s("div", yx, [
              s("div", {
                class: "collapsible-header",
                onClick: f[2] || (f[2] = (N) => r("models"))
              }, [
                f[16] || (f[16] = s("span", { class: "label" }, "Models:", -1)),
                s("span", wx, [
                  x(m(((S = e.detail) == null ? void 0 : S.model_count) ?? e.environment.model_count) + " ", 1),
                  (I = (C = e.detail) == null ? void 0 : C.models) != null && I.missing.length ? (o(), i("span", _x, "(" + m(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (E = e.detail) != null && E.models ? (o(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (P = e.detail) != null && P.models && l.value.has("models") ? (o(), i("div", kx, [
                s("div", bx, [
                  (o(!0), i(B, null, ye(e.detail.models.missing, (N) => (o(), i("div", {
                    key: N.filename,
                    class: "list-item model-item"
                  }, [
                    s("div", $x, [
                      s("span", Cx, m(N.filename), 1),
                      s("span", {
                        class: Be(["criticality-badge", N.criticality])
                      }, m(N.criticality), 3)
                    ]),
                    s("div", xx, [
                      s("span", Sx, m(N.category), 1),
                      N.workflow_names.length ? (o(), i("span", Ix, " used by: " + m(N.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (o(), i("div", Ex, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (D = e.detail) != null && D.created_at || e.environment.created_at ? (o(), i("div", Tx)) : y("", !0),
            (A = e.detail) != null && A.created_at || e.environment.created_at ? (o(), i("div", Mx, [
              f[17] || (f[17] = s("span", { class: "label" }, "Created:", -1)),
              s("span", Px, m(u(((V = e.detail) == null ? void 0 : V.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        s("div", Rx, [
          b(Ue, {
            variant: "secondary",
            size: "sm",
            onClick: f[3] || (f[3] = (v) => a("export", e.environment.name))
          }, {
            default: h(() => [...f[19] || (f[19] = [
              x(" Export ", -1)
            ])]),
            _: 1
          }),
          e.canDelete ? (o(), R(Ue, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: f[4] || (f[4] = (v) => a("delete", e.environment.name))
          }, {
            default: h(() => [...f[20] || (f[20] = [
              x(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          f[22] || (f[22] = s("div", { class: "footer-spacer" }, null, -1)),
          b(Ue, {
            variant: "secondary",
            size: "sm",
            onClick: f[5] || (f[5] = (v) => a("close"))
          }, {
            default: h(() => [...f[21] || (f[21] = [
              x(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Nx = /* @__PURE__ */ Te(Dx, [["__scopeId", "data-v-750671f5"]]), kc = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], bc = "3.12", Nl = [
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
], $c = "auto", Lx = { class: "progress-bar" }, Ux = /* @__PURE__ */ Ee({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, n = M(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (a, l) => (o(), i("div", Lx, [
      s("div", {
        class: Be(["progress-fill", e.variant]),
        style: zt({ width: n.value })
      }, null, 6)
    ]));
  }
}), Cc = /* @__PURE__ */ Te(Ux, [["__scopeId", "data-v-1beb0512"]]), Ox = { class: "task-progress" }, Ax = { class: "progress-info" }, zx = { class: "progress-percentage" }, Fx = { class: "progress-message" }, Vx = {
  key: 0,
  class: "progress-steps"
}, Bx = { class: "step-icon" }, Wx = { class: "step-label" }, Gx = /* @__PURE__ */ Ee({
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
    const t = e;
    function n(l) {
      const r = t.steps.find((c) => c.id === l);
      return r ? t.progress >= r.progressThreshold ? "completed" : t.currentPhase === l ? "active" : "pending" : "pending";
    }
    function a(l) {
      const r = n(l);
      return r === "completed" ? "✓" : r === "active" ? "⟳" : "○";
    }
    return (l, r) => (o(), i("div", Ox, [
      b(Cc, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", Ax, [
        s("span", zx, m(e.progress) + "%", 1),
        s("span", Fx, m(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (o(), i("div", Vx, [
        (o(!0), i(B, null, ye(e.steps, (c) => (o(), i("div", {
          key: c.id,
          class: Be(["step", n(c.id)])
        }, [
          s("span", Bx, m(a(c.id)), 1),
          s("span", Wx, m(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), ra = /* @__PURE__ */ Te(Gx, [["__scopeId", "data-v-9d1de66c"]]), jx = {
  key: 0,
  class: "create-env-form"
}, Hx = { class: "form-field" }, qx = { class: "input-wrapper" }, Kx = {
  key: 0,
  class: "validating-indicator"
}, Jx = {
  key: 1,
  class: "valid-indicator"
}, Qx = {
  key: 0,
  class: "field-error"
}, Yx = { class: "form-field" }, Xx = ["value"], Zx = { class: "form-field" }, e3 = ["disabled"], t3 = ["value"], s3 = { class: "form-field" }, n3 = ["value"], o3 = { class: "form-field form-field--checkbox" }, a3 = { class: "form-checkbox" }, l3 = {
  key: 1,
  class: "create-env-progress"
}, i3 = { class: "creating-intro" }, r3 = {
  key: 0,
  class: "progress-warning"
}, c3 = {
  key: 1,
  class: "create-error"
}, u3 = { class: "error-message" }, d3 = {
  key: 1,
  class: "footer-status"
}, m3 = 10, f3 = /* @__PURE__ */ Ee({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const n = t, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = mt(), u = _(""), d = _(bc), f = _("latest"), v = _($c), p = _(!1), w = _(null), g = _(!1), k = _(!1);
    let $ = null, S = 0;
    const C = M(() => !!u.value.trim() && k.value && !w.value && !g.value && !P.value), I = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), E = _(!1), P = _(!1), D = _({
      progress: 0,
      message: ""
    });
    let A = null, V = 0;
    const N = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], j = _(null);
    $t(u, (te) => {
      k.value = !1, $ && (clearTimeout($), $ = null);
      const me = te.trim();
      if (!me) {
        w.value = null, g.value = !1;
        return;
      }
      g.value = !0, $ = setTimeout(() => {
        le(me);
      }, 400);
    });
    async function le(te, me = !1) {
      const de = te.trim();
      if (!de)
        return k.value = !1, g.value = !1, w.value = me ? "Environment name is required" : null, !1;
      const W = ++S;
      g.value = !0;
      try {
        const se = await c(de);
        return W !== S ? !1 : (w.value = se.valid ? null : se.error || "Invalid name", k.value = !!se.valid, !!se.valid);
      } catch {
        return W !== S || (w.value = "Failed to validate name", k.value = !1), !1;
      } finally {
        W === S && (g.value = !1);
      }
    }
    async function ce() {
      $ && (clearTimeout($), $ = null), await le(u.value, !0);
    }
    function Q() {
      P.value || n("close");
    }
    async function ve() {
      const te = u.value.trim();
      if (!te) {
        w.value = "Environment name is required";
        return;
      }
      if ($ && (clearTimeout($), $ = null), !!await le(te, !0)) {
        P.value = !0, D.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const de = {
            name: te,
            python_version: d.value,
            comfyui_version: f.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, W = await l(de);
          W.status === "started" ? J() : W.status === "error" && (D.value = {
            progress: 0,
            message: W.message || "Failed to start creation",
            error: W.message
          });
        } catch (de) {
          D.value = {
            progress: 0,
            message: de instanceof Error ? de.message : "Unknown error",
            error: de instanceof Error ? de.message : "Unknown error"
          };
        }
      }
    }
    function J() {
      A || (V = 0, A = window.setInterval(async () => {
        try {
          const te = await r();
          V = 0, D.value = {
            progress: te.progress ?? 0,
            message: te.message,
            phase: te.phase,
            error: te.error
          }, te.state === "complete" ? (L(), n("created", te.environment_name || u.value.trim(), p.value)) : te.state === "error" ? (L(), D.value.error = te.error || te.message) : te.state === "idle" && P.value && (L(), D.value.error = "Creation was interrupted. Please try again.");
        } catch {
          V++, V >= m3 && (L(), D.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function L() {
      A && (clearInterval(A), A = null);
    }
    function F() {
      P.value = !1, D.value = { progress: 0, message: "" }, n("close");
    }
    async function ue() {
      E.value = !0;
      try {
        I.value = await a();
      } catch (te) {
        console.error("Failed to load ComfyUI releases:", te);
      } finally {
        E.value = !1;
      }
    }
    return ut(async () => {
      var te;
      await Gt(), (te = j.value) == null || te.focus(), ue();
    }), Gn(() => {
      L(), $ && (clearTimeout($), $ = null);
    }), (te, me) => (o(), R(Mt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !P.value,
      onClose: Q
    }, {
      body: h(() => [
        P.value ? (o(), i("div", l3, [
          s("p", i3, [
            me[12] || (me[12] = x(" Creating environment ", -1)),
            s("strong", null, m(u.value), 1),
            me[13] || (me[13] = x("... ", -1))
          ]),
          b(ra, {
            progress: D.value.progress,
            message: D.value.message,
            "current-phase": D.value.phase,
            variant: D.value.error ? "error" : "default",
            "show-steps": !0,
            steps: N
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          D.value.error ? y("", !0) : (o(), i("p", r3, " This may take several minutes. Please wait... ")),
          D.value.error ? (o(), i("div", c3, [
            s("p", u3, m(D.value.error), 1)
          ])) : y("", !0)
        ])) : (o(), i("div", jx, [
          s("div", Hx, [
            me[6] || (me[6] = s("label", { class: "form-label" }, "Name", -1)),
            s("div", qx, [
              Ot(s("input", {
                ref_key: "nameInput",
                ref: j,
                "onUpdate:modelValue": me[0] || (me[0] = (de) => u.value = de),
                type: "text",
                class: Be(["form-input", { error: !!w.value, valid: k.value }]),
                placeholder: "my-environment",
                onKeyup: Cs(ve, ["enter"]),
                onBlur: ce
              }, null, 34), [
                [go, u.value]
              ]),
              g.value ? (o(), i("span", Kx, "...")) : k.value ? (o(), i("span", Jx, "✓")) : y("", !0)
            ]),
            w.value ? (o(), i("div", Qx, m(w.value), 1)) : y("", !0),
            me[7] || (me[7] = s("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          s("div", Yx, [
            me[8] || (me[8] = s("label", { class: "form-label" }, "Python Version", -1)),
            Ot(s("select", {
              "onUpdate:modelValue": me[1] || (me[1] = (de) => d.value = de),
              class: "form-select"
            }, [
              (o(!0), i(B, null, ye(at(kc), (de) => (o(), i("option", {
                key: de,
                value: de
              }, m(de), 9, Xx))), 128))
            ], 512), [
              [On, d.value]
            ])
          ]),
          s("div", Zx, [
            me[9] || (me[9] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ot(s("select", {
              "onUpdate:modelValue": me[2] || (me[2] = (de) => f.value = de),
              class: "form-select",
              disabled: E.value
            }, [
              (o(!0), i(B, null, ye(I.value, (de) => (o(), i("option", {
                key: de.tag_name,
                value: de.tag_name
              }, m(de.name), 9, t3))), 128))
            ], 8, e3), [
              [On, f.value]
            ])
          ]),
          s("div", s3, [
            me[10] || (me[10] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ot(s("select", {
              "onUpdate:modelValue": me[3] || (me[3] = (de) => v.value = de),
              class: "form-select"
            }, [
              (o(!0), i(B, null, ye(at(Nl), (de) => (o(), i("option", {
                key: de,
                value: de
              }, m(de) + m(de === "auto" ? " (detect GPU)" : ""), 9, n3))), 128))
            ], 512), [
              [On, v.value]
            ])
          ]),
          s("div", o3, [
            s("label", a3, [
              Ot(s("input", {
                type: "checkbox",
                "onUpdate:modelValue": me[4] || (me[4] = (de) => p.value = de)
              }, null, 512), [
                [ia, p.value]
              ]),
              me[11] || (me[11] = s("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        P.value ? (o(), i(B, { key: 1 }, [
          D.value.error ? (o(), R(Ue, {
            key: 0,
            variant: "secondary",
            onClick: F
          }, {
            default: h(() => [...me[16] || (me[16] = [
              x(" Close ", -1)
            ])]),
            _: 1
          })) : (o(), i("span", d3, " Creating environment... "))
        ], 64)) : (o(), i(B, { key: 0 }, [
          b(Ue, {
            variant: "primary",
            disabled: !C.value,
            onClick: ve
          }, {
            default: h(() => [...me[14] || (me[14] = [
              x(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(Ue, {
            variant: "secondary",
            onClick: me[5] || (me[5] = (de) => n("close"))
          }, {
            default: h(() => [...me[15] || (me[15] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), v3 = /* @__PURE__ */ Te(f3, [["__scopeId", "data-v-3faa3d9b"]]), p3 = /* @__PURE__ */ Ee({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: t, emit: n }) {
    const a = n, { getEnvironments: l, getEnvironmentDetails: r } = mt(), c = _([]), u = _(!1), d = _(null), f = _(""), v = _(!1), p = _(!1), w = _(null), g = _(null), k = M(() => [...c.value].sort((A, V) => A.is_current !== V.is_current ? A.is_current ? -1 : 1 : A.name.localeCompare(V.name))), $ = M(() => {
      if (!f.value.trim()) return k.value;
      const A = f.value.toLowerCase();
      return k.value.filter(
        (V) => {
          var N;
          return V.name.toLowerCase().includes(A) || ((N = V.current_branch) == null ? void 0 : N.toLowerCase().includes(A));
        }
      );
    });
    function S(A, V) {
      p.value = !1, a("created", A, V);
    }
    function C() {
      p.value = !0;
    }
    async function I(A) {
      w.value = A, g.value = null;
      const V = await r(A.name);
      V && (g.value = V);
    }
    function E(A) {
      w.value = null, g.value = null, a("delete", A);
    }
    function P(A) {
      w.value = null, g.value = null, a("export", A);
    }
    async function D() {
      u.value = !0, d.value = null;
      try {
        c.value = await l();
      } catch (A) {
        d.value = A instanceof Error ? A.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return ut(D), t({
      loadEnvironments: D,
      openCreateModal: C
    }), (A, V) => (o(), i(B, null, [
      b(Ht, null, {
        header: h(() => [
          b(qt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: V[1] || (V[1] = (N) => v.value = !0)
          }, {
            actions: h(() => [
              e.canCreate ? (o(), R(Pe, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: C
              }, {
                default: h(() => [...V[7] || (V[7] = [
                  x(" Create ", -1)
                ])]),
                _: 1
              })) : y("", !0),
              b(Pe, {
                variant: "secondary",
                size: "sm",
                onClick: V[0] || (V[0] = (N) => A.$emit("import"))
              }, {
                default: h(() => [...V[8] || (V[8] = [
                  x(" Import ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          b($n, {
            modelValue: f.value,
            "onUpdate:modelValue": V[2] || (V[2] = (N) => f.value = N),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (o(), R(zs, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (o(), R(Fs, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
            $.value.length ? (o(), R(Nt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: $.value.length
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye($.value, (N) => (o(), R(JC, {
                  key: N.name,
                  "environment-name": N.name,
                  "is-current": N.is_current,
                  "current-branch": N.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    !N.is_current && e.canSwitch ? (o(), R(Pe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (j) => A.$emit("switch", N.name)
                    }, {
                      default: h(() => [...V[9] || (V[9] = [
                        x(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : y("", !0),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (j) => I(N)
                    }, {
                      default: h(() => [...V[10] || (V[10] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (j) => A.$emit("export", N.name)
                    }, {
                      default: h(() => [...V[11] || (V[11] = [
                        x(" Export ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            $.value.length ? y("", !0) : (o(), R(Es, {
              key: 1,
              icon: "🌍",
              message: f.value ? `No environments match '${f.value}'` : "No environments found. Create one to get started!"
            }, rs({ _: 2 }, [
              f.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  e.canCreate ? (o(), R(Pe, {
                    key: 0,
                    variant: "primary",
                    onClick: C
                  }, {
                    default: h(() => [...V[12] || (V[12] = [
                      x(" Create Environment ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                key: "0"
              }
            ]), 1032, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b(_s, {
        show: v.value,
        title: "About Environments",
        onClose: V[4] || (V[4] = (N) => v.value = !1)
      }, {
        content: h(() => [...V[13] || (V[13] = [
          s("p", null, [
            s("strong", null, "Environments"),
            x(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Use cases:")
          ], -1),
          s("ul", { style: { "margin-top": "var(--cg-space-1)", "padding-left": "var(--cg-space-4)" } }, [
            s("li", null, "Separate production and development workflows"),
            s("li", null, "Test different node configurations"),
            s("li", null, "Experiment with new models safely"),
            s("li", null, "Maintain multiple project versions")
          ], -1)
        ])]),
        actions: h(() => [
          b(Pe, {
            variant: "secondary",
            onClick: V[3] || (V[3] = (N) => v.value = !1)
          }, {
            default: h(() => [...V[14] || (V[14] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (o(), R(Nx, {
        key: 0,
        environment: w.value,
        detail: g.value,
        "can-delete": e.canDelete && c.value.length > 1,
        onClose: V[5] || (V[5] = (N) => {
          w.value = null, g.value = null;
        }),
        onDelete: E,
        onExport: P
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      p.value ? (o(), R(v3, {
        key: 1,
        onClose: V[6] || (V[6] = (N) => p.value = !1),
        onCreated: S
      })) : y("", !0)
    ], 64));
  }
}), g3 = /* @__PURE__ */ Te(p3, [["__scopeId", "data-v-01163d8c"]]), h3 = { class: "file-path" }, y3 = { class: "file-path-text" }, w3 = ["title"], _3 = /* @__PURE__ */ Ee({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = _(!1);
    async function a() {
      try {
        await navigator.clipboard.writeText(t.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, r) => (o(), i("div", h3, [
      r[0] || (r[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", y3, m(e.path), 1),
      e.copyable ? (o(), i("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: a
      }, m(n.value ? "✓" : "📋"), 9, w3)) : y("", !0)
    ]));
  }
}), k3 = /* @__PURE__ */ Te(_3, [["__scopeId", "data-v-f0982173"]]), b3 = { class: "base-textarea-wrapper" }, $3 = ["value", "rows", "placeholder", "disabled", "maxlength"], C3 = {
  key: 0,
  class: "base-textarea-count"
}, x3 = /* @__PURE__ */ Ee({
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
  setup(e, { emit: t }) {
    const n = e, a = t;
    function l(r) {
      r.shiftKey || r.ctrlKey || r.metaKey || n.submitOnEnter && (r.preventDefault(), a("submit"));
    }
    return (r, c) => (o(), i("div", b3, [
      s("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = Cs(bt((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = Cs(bt((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Cs(l, ["enter"])
        ]
      }, null, 40, $3),
      e.showCharCount && e.maxLength ? (o(), i("div", C3, m(e.modelValue.length) + " / " + m(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), An = /* @__PURE__ */ Te(x3, [["__scopeId", "data-v-c6d16c93"]]), S3 = ["checked", "disabled"], I3 = { class: "base-checkbox-box" }, E3 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, T3 = {
  key: 0,
  class: "base-checkbox-label"
}, M3 = /* @__PURE__ */ Ee({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (o(), i("label", {
      class: Be(["base-checkbox", { disabled: e.disabled }])
    }, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (a) => t.$emit("update:modelValue", a.target.checked))
      }, null, 40, S3),
      s("span", I3, [
        e.modelValue ? (o(), i("svg", E3, [...n[1] || (n[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      t.$slots.default ? (o(), i("span", T3, [
        ct(t.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), ca = /* @__PURE__ */ Te(M3, [["__scopeId", "data-v-bf17c831"]]), P3 = { class: "export-blocked" }, R3 = { class: "error-header" }, D3 = { class: "error-summary" }, N3 = { class: "error-title" }, L3 = { class: "error-description" }, U3 = { class: "issues-list" }, O3 = { class: "issue-message" }, A3 = {
  key: 0,
  class: "issue-details"
}, z3 = ["onClick"], F3 = { class: "issue-fix" }, V3 = {
  key: 0,
  class: "commit-section"
}, B3 = {
  key: 0,
  class: "issues-warning"
}, W3 = {
  key: 1,
  class: "commit-error"
}, G3 = /* @__PURE__ */ Ee({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { commit: l } = mt(), r = _(""), c = _(!1), u = _(!1), d = _(""), f = Cn({}), v = M(() => n.mode === "publish" ? "Publish" : "Export"), p = M(
      () => n.issues.some((C) => C.type === "uncommitted_workflows" || C.type === "uncommitted_git_changes")
    ), w = M(
      () => n.issues.some((C) => C.type === "unresolved_issues")
    ), g = M(
      () => w.value && !u.value
    ), k = M(
      () => p.value && r.value.trim() !== "" && !c.value && !g.value
    );
    function $(C) {
      const I = n.issues[C];
      return f[C] || I.details.length <= 3 ? I.details : I.details.slice(0, 3);
    }
    async function S() {
      var C;
      if (k.value) {
        c.value = !0, d.value = "";
        try {
          const I = await l(r.value.trim(), u.value);
          if (I.status === "success")
            a("committed");
          else if (I.status === "blocked") {
            const E = ((C = I.issues) == null ? void 0 : C.map((P) => `${P.name}: ${P.issue}`).join("; ")) || "Unknown issues";
            d.value = `Commit blocked: ${E}`;
          } else
            d.value = I.message || "Commit failed";
        } catch (I) {
          d.value = I instanceof Error ? I.message : "Commit failed";
        } finally {
          c.value = !1;
        }
      }
    }
    return (C, I) => (o(), R(Mt, {
      title: p.value ? `Commit & ${v.value}` : `Cannot ${v.value}`,
      size: "md",
      onClose: I[4] || (I[4] = (E) => C.$emit("close"))
    }, {
      body: h(() => [
        s("div", P3, [
          s("div", R3, [
            I[5] || (I[5] = s("span", { class: "error-icon" }, [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ], -1)),
            s("div", D3, [
              s("h3", N3, m(v.value) + " blocked", 1),
              s("p", L3, m(p.value ? `Commit your changes to proceed with ${v.value.toLowerCase()}.` : `The following issues must be resolved before ${v.value.toLowerCase()}.`), 1)
            ])
          ]),
          s("div", U3, [
            (o(!0), i(B, null, ye(e.issues, (E, P) => (o(), i("div", {
              key: P,
              class: "issue-item"
            }, [
              s("div", O3, m(E.message), 1),
              E.details.length ? (o(), i("div", A3, [
                (o(!0), i(B, null, ye($(P), (D, A) => (o(), i("div", {
                  key: A,
                  class: "issue-detail"
                }, m(D), 1))), 128)),
                E.details.length > 3 && !f[P] ? (o(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (D) => f[P] = !0
                }, " +" + m(E.details.length - 3) + " more ", 9, z3)) : y("", !0)
              ])) : y("", !0),
              s("div", F3, [
                E.type === "uncommitted_workflows" ? (o(), i(B, { key: 0 }, [
                  x(" Commit your workflow changes before " + m(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : E.type === "uncommitted_git_changes" ? (o(), i(B, { key: 1 }, [
                  x(" Commit your changes before " + m(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : E.type === "unresolved_issues" ? (o(), i(B, { key: 2 }, [
                  x(" Resolve all workflow issues before " + m(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ]),
          p.value ? (o(), i("div", V3, [
            w.value ? (o(), i("div", B3, [
              I[7] || (I[7] = s("div", { class: "warning-header" }, [
                s("span", { class: "warning-icon-badge" }, "!"),
                s("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              b(ca, {
                modelValue: u.value,
                "onUpdate:modelValue": I[0] || (I[0] = (E) => u.value = E),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...I[6] || (I[6] = [
                  x(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            b(An, {
              modelValue: r.value,
              "onUpdate:modelValue": I[1] || (I[1] = (E) => r.value = E),
              placeholder: "Describe your changes...",
              disabled: c.value || g.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: S,
              onCtrlEnter: S
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (o(), i("div", W3, m(d.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        p.value ? (o(), i(B, { key: 0 }, [
          b(Ue, {
            variant: "secondary",
            onClick: I[2] || (I[2] = (E) => C.$emit("close"))
          }, {
            default: h(() => [...I[8] || (I[8] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Ue, {
            variant: u.value ? "danger" : "primary",
            disabled: !k.value,
            loading: c.value,
            onClick: S
          }, {
            default: h(() => [
              x(m(c.value ? "Committing..." : u.value ? `Force Commit & ${v.value}` : `Commit & ${v.value}`), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (o(), R(Ue, {
          key: 1,
          variant: "primary",
          onClick: I[3] || (I[3] = (E) => C.$emit("close"))
        }, {
          default: h(() => [...I[9] || (I[9] = [
            x(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), j3 = /* @__PURE__ */ Te(G3, [["__scopeId", "data-v-a8990107"]]), H3 = { class: "repro-warning" }, q3 = { class: "repro-warning-content" }, K3 = {
  key: 0,
  class: "warning-group"
}, J3 = { class: "warning-list" }, Q3 = { key: 0 }, Y3 = {
  key: 1,
  class: "warning-group"
}, X3 = { class: "warning-list" }, Z3 = { key: 0 }, eS = /* @__PURE__ */ Ee({
  __name: "ReproducibilityWarningBanner",
  props: {
    warnings: {},
    message: { default: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly. Review the missing details, or continue anyway." },
    maxItemsPerGroup: { default: 2 }
  },
  emits: ["review"],
  setup(e) {
    const t = e, n = M(() => t.warnings.models_without_sources || []), a = M(() => t.warnings.nodes_without_provenance || []), l = M(() => n.value.length), r = M(() => a.value.length), c = M(() => l.value + r.value), u = M(
      () => n.value.slice(0, t.maxItemsPerGroup)
    ), d = M(
      () => a.value.slice(0, t.maxItemsPerGroup)
    ), f = M(
      () => Math.max(0, l.value - u.value.length)
    ), v = M(
      () => Math.max(0, r.value - d.value.length)
    );
    return (p, w) => (o(), i("div", H3, [
      w[3] || (w[3] = s("span", { class: "repro-warning-icon" }, "!", -1)),
      s("div", q3, [
        s("strong", null, m(c.value) + " reproducibility warning" + m(c.value !== 1 ? "s" : ""), 1),
        s("p", null, m(e.message), 1),
        l.value ? (o(), i("div", K3, [
          w[1] || (w[1] = s("div", { class: "warning-group-label" }, " Models ", -1)),
          s("ul", J3, [
            (o(!0), i(B, null, ye(u.value, (g) => (o(), i("li", {
              key: g.hash || g.filename
            }, m(g.filename), 1))), 128)),
            f.value ? (o(), i("li", Q3, "+" + m(f.value) + " more model" + m(f.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        r.value ? (o(), i("div", Y3, [
          w[2] || (w[2] = s("div", { class: "warning-group-label" }, " Nodes ", -1)),
          s("ul", X3, [
            (o(!0), i(B, null, ye(d.value, (g) => (o(), i("li", {
              key: g.name
            }, m(g.name) + " (" + m(g.criticality) + ") ", 1))), 128)),
            v.value ? (o(), i("li", Z3, "+" + m(v.value) + " more node" + m(v.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        s("button", {
          class: "review-issues-btn",
          onClick: w[0] || (w[0] = (g) => p.$emit("review"))
        }, " Review Issues ")
      ])
    ]));
  }
}), il = /* @__PURE__ */ Te(eS, [["__scopeId", "data-v-11be310d"]]), tS = { class: "export-card" }, sS = { class: "export-path-row" }, nS = {
  key: 1,
  class: "export-warning"
}, oS = { class: "export-footer-actions" }, aS = /* @__PURE__ */ Ee({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  emits: ["close"],
  setup(e) {
    const t = e, { validateExport: n, exportEnvWithForce: a, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = mt(), c = _(""), u = _(!1), d = _(!1), f = _(!1), v = _(null), p = _(!1), w = _(null), g = _(!1), k = _(!1), $ = M(() => {
      var L;
      return ((L = t.environmentName) == null ? void 0 : L.trim()) || null;
    }), S = M(() => $.value ? `EXPORT ENVIRONMENT: ${$.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), C = M(() => $.value ? `Environment '${$.value}' has been exported` : "Your environment has been exported"), I = M(() => u.value ? "Validating..." : d.value ? "Exporting..." : V.value ? "Export Anyway" : "Export Environment"), E = M(() => {
      var L;
      return ((L = w.value) == null ? void 0 : L.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), P = M(
      () => E.value.models_without_sources.length
    ), D = M(
      () => {
        var L;
        return ((L = E.value.nodes_without_provenance) == null ? void 0 : L.length) || 0;
      }
    ), A = M(
      () => P.value + D.value
    ), V = M(
      () => {
        var L;
        return !!((L = w.value) != null && L.can_export) && A.value > 0;
      }
    );
    async function N() {
      u.value = !0;
      try {
        const L = $.value ? await l($.value) : await n();
        return w.value = L, L;
      } catch (L) {
        return v.value = {
          status: "error",
          message: L instanceof Error ? L.message : "Validation failed"
        }, null;
      } finally {
        u.value = !1;
      }
    }
    async function j() {
      v.value = null;
      const L = await N();
      if (L) {
        if (!L.can_export) {
          g.value = !0;
          return;
        }
        await Q();
      }
    }
    async function le() {
      g.value = !1;
      const L = await N();
      if (L) {
        if (!L.can_export) {
          g.value = !0;
          return;
        }
        await Q();
      }
    }
    async function ce() {
      await N();
    }
    async function Q() {
      d.value = !0;
      try {
        const L = $.value ? await r($.value, c.value || void 0) : await a(c.value || void 0);
        v.value = L;
      } catch (L) {
        v.value = {
          status: "error",
          message: L instanceof Error ? L.message : "Export failed"
        };
      } finally {
        d.value = !1;
      }
    }
    async function ve() {
      var L;
      if ((L = v.value) != null && L.path)
        try {
          await navigator.clipboard.writeText(v.value.path);
        } catch (F) {
          console.error("Failed to copy path:", F);
        }
    }
    async function J() {
      var L;
      if ((L = v.value) != null && L.path) {
        f.value = !0;
        try {
          const F = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(v.value.path)}`);
          if (!F.ok)
            throw new Error(`Download failed: ${F.statusText}`);
          const ue = await F.blob(), te = URL.createObjectURL(ue), me = v.value.path.split("/").pop() || "environment-export.tar.gz", de = document.createElement("a");
          de.href = te, de.download = me, document.body.appendChild(de), de.click(), document.body.removeChild(de), URL.revokeObjectURL(te);
        } catch (F) {
          console.error("Failed to download:", F), alert(`Download failed: ${F instanceof Error ? F.message : "Unknown error"}`);
        } finally {
          f.value = !1;
        }
      }
    }
    return ut(() => {
      N();
    }), (L, F) => (o(), i(B, null, [
      b(Ht, null, rs({
        content: h(() => [
          V.value ? (o(), R(il, {
            key: 0,
            class: "export-readiness-warning",
            warnings: E.value,
            message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
            onReview: F[1] || (F[1] = (ue) => k.value = !0)
          }, null, 8, ["warnings"])) : y("", !0),
          b(Nt, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              s("div", tS, [
                F[8] || (F[8] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", sS, [
                  b(Mn, {
                    modelValue: c.value,
                    "onUpdate:modelValue": F[2] || (F[2] = (ue) => c.value = ue),
                    placeholder: "/mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            _: 1
          }),
          v.value ? (o(), R(Nt, {
            key: 1,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              b(Yt, {
                status: v.value.status === "success" ? "synced" : "broken"
              }, rs({
                icon: h(() => [
                  x(m(v.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  x(m(v.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: h(() => [
                  x(m(v.value.status === "success" ? C.value : v.value.message), 1)
                ]),
                _: 2
              }, [
                v.value.status === "success" ? {
                  name: "details",
                  fn: h(() => [
                    b(Tt, { label: "Saved to:" }, {
                      default: h(() => [
                        b(k3, {
                          path: v.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    v.value.models_without_sources !== void 0 ? (o(), R(Tt, {
                      key: 0,
                      label: "Models without sources:",
                      value: v.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    v.value.models_without_sources && v.value.models_without_sources > 0 ? (o(), i("div", nS, [...F[9] || (F[9] = [
                      s("span", { class: "warning-icon" }, "!", -1),
                      s("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                v.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    b(Pe, {
                      variant: "primary",
                      size: "sm",
                      loading: f.value,
                      onClick: J
                    }, {
                      default: h(() => [...F[10] || (F[10] = [
                        s("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          s("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: ve
                    }, {
                      default: h(() => [...F[11] || (F[11] = [
                        x(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    b(Pe, {
                      variant: "ghost",
                      size: "sm",
                      onClick: F[3] || (F[3] = (ue) => v.value = null)
                    }, {
                      default: h(() => [...F[12] || (F[12] = [
                        x(" Dismiss ", -1)
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
        footer: h(() => [
          s("div", oS, [
            e.embedded ? (o(), R(Pe, {
              key: 0,
              variant: "secondary",
              size: "md",
              disabled: d.value,
              onClick: F[4] || (F[4] = (ue) => L.$emit("close"))
            }, {
              default: h(() => [...F[13] || (F[13] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : y("", !0),
            b(Pe, {
              variant: "primary",
              size: "md",
              loading: u.value || d.value,
              disabled: u.value || d.value,
              onClick: j
            }, {
              default: h(() => [
                x(m(I.value), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(qt, {
              title: S.value,
              "show-info": !0,
              onInfoClick: F[0] || (F[0] = (ue) => p.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      b(_s, {
        show: p.value,
        title: "What Gets Exported",
        onClose: F[5] || (F[5] = (ue) => p.value = !1)
      }, {
        content: h(() => [...F[14] || (F[14] = [
          s("div", { class: "export-info" }, [
            s("div", { class: "info-section" }, [
              s("strong", null, "Included in Export:"),
              s("ul", null, [
                s("li", null, [
                  s("strong", null, "Workflows"),
                  x(" — All workflows in this environment")
                ]),
                s("li", null, [
                  s("strong", null, "Custom Nodes"),
                  x(" — Node definitions and dependencies")
                ]),
                s("li", null, [
                  s("strong", null, "Models"),
                  x(" — References and source URLs (not the files)")
                ]),
                s("li", null, [
                  s("strong", null, "Configuration"),
                  x(" — Environment settings and metadata")
                ])
              ])
            ]),
            s("div", { class: "info-section" }, [
              s("strong", null, "Use Cases:"),
              s("ul", null, [
                s("li", null, "Share environments with collaborators"),
                s("li", null, "Back up your setup for safekeeping"),
                s("li", null, "Import into other ComfyGit workspaces")
              ])
            ]),
            s("p", { class: "info-note" }, [
              s("strong", null, "Note:"),
              x(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value && w.value ? (o(), R(j3, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: F[6] || (F[6] = (ue) => g.value = !1),
        onCommitted: le
      }, null, 8, ["issues"])) : y("", !0),
      k.value && w.value ? (o(), R(Ml, {
        key: 1,
        warnings: w.value.warnings,
        onClose: F[7] || (F[7] = (ue) => k.value = !1),
        onRevalidate: ce
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), lS = /* @__PURE__ */ Te(aS, [["__scopeId", "data-v-6cf814a2"]]), iS = { class: "file-input-wrapper" }, rS = ["accept", "multiple", "disabled"], cS = /* @__PURE__ */ Ee({
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
  setup(e, { expose: t, emit: n }) {
    const a = n, l = _(null);
    function r() {
      var u;
      (u = l.value) == null || u.click();
    }
    function c(u) {
      const d = u.target;
      d.files && d.files.length > 0 && (a("change", d.files), d.value = "");
    }
    return t({
      triggerInput: r
    }), (u, d) => (o(), i("div", iS, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, rS),
      b(Pe, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: h(() => [
          ct(u.$slots, "default", {}, () => [
            d[0] || (d[0] = s("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              s("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              s("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            x(" " + m(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), uS = /* @__PURE__ */ Te(cS, [["__scopeId", "data-v-cd192091"]]), dS = {
  key: 0,
  class: "drop-zone-empty"
}, mS = { class: "drop-zone-text" }, fS = { class: "drop-zone-primary" }, vS = { class: "drop-zone-secondary" }, pS = { class: "drop-zone-actions" }, gS = {
  key: 1,
  class: "drop-zone-file"
}, hS = { class: "file-info" }, yS = { class: "file-details" }, wS = { class: "file-name" }, _S = { class: "file-size" }, kS = /* @__PURE__ */ Ee({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(e, { emit: t }) {
    const n = t, a = _(!1), l = _(null), r = _(0), c = M(() => l.value !== null), u = M(() => {
      var S;
      return ((S = l.value) == null ? void 0 : S.name) || "";
    }), d = M(() => {
      if (!l.value) return "";
      const S = l.value.size;
      return S < 1024 ? `${S} B` : S < 1024 * 1024 ? `${(S / 1024).toFixed(1)} KB` : S < 1024 * 1024 * 1024 ? `${(S / (1024 * 1024)).toFixed(1)} MB` : `${(S / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function f(S) {
      var C;
      S.stopPropagation(), r.value++, (C = S.dataTransfer) != null && C.types.includes("Files") && (a.value = !0);
    }
    function v(S) {
      S.stopPropagation(), S.dataTransfer && (S.dataTransfer.dropEffect = "copy");
    }
    function p(S) {
      S.stopPropagation(), r.value--, r.value === 0 && (a.value = !1);
    }
    function w(S) {
      var I;
      S.stopPropagation(), r.value = 0, a.value = !1;
      const C = (I = S.dataTransfer) == null ? void 0 : I.files;
      C && C.length > 0 && k(C[0]);
    }
    function g(S) {
      S.length > 0 && k(S[0]);
    }
    function k(S) {
      l.value = S, n("fileSelected", S);
    }
    function $() {
      l.value = null, n("clear");
    }
    return (S, C) => (o(), i("div", {
      class: Be(["file-drop-zone", { "drop-active": a.value, "has-file": c.value }]),
      onDragenter: bt(f, ["prevent"]),
      onDragover: bt(v, ["prevent"]),
      onDragleave: bt(p, ["prevent"]),
      onDrop: bt(w, ["prevent"])
    }, [
      c.value ? (o(), i("div", gS, [
        s("div", hS, [
          C[1] || (C[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", yS, [
            s("div", wS, m(u.value), 1),
            s("div", _S, m(d.value), 1)
          ])
        ]),
        b(Pe, {
          variant: "ghost",
          size: "xs",
          onClick: $,
          title: "Remove file"
        }, {
          default: h(() => [...C[2] || (C[2] = [
            s("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
            ], -1)
          ])]),
          _: 1
        })
      ])) : (o(), i("div", dS, [
        C[0] || (C[0] = s("div", { class: "drop-zone-icon" }, [
          s("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            s("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
            s("path", { d: "M2 14h12v-2H2v2z" })
          ])
        ], -1)),
        s("div", mS, [
          s("p", fS, m(e.primaryText), 1),
          s("p", vS, m(e.secondaryText), 1)
        ]),
        s("div", pS, [
          b(uS, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: g
          }, {
            default: h(() => [
              x(m(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), bS = /* @__PURE__ */ Te(kS, [["__scopeId", "data-v-0f79cb86"]]), $S = { class: "commit-hash" }, CS = /* @__PURE__ */ Ee({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, n = M(() => t.hash.slice(0, t.length));
    return (a, l) => (o(), i("span", $S, m(n.value), 1));
  }
}), xc = /* @__PURE__ */ Te(CS, [["__scopeId", "data-v-7c333cc6"]]), xS = { class: "import-preview" }, SS = { class: "preview-header" }, IS = {
  key: 0,
  class: "source-env"
}, ES = { class: "preview-content" }, TS = { class: "preview-section" }, MS = { class: "section-header" }, PS = { class: "section-info" }, RS = { class: "section-count" }, DS = {
  key: 0,
  class: "item-list"
}, NS = { class: "item-name" }, LS = {
  key: 0,
  class: "item-more"
}, US = { class: "preview-section" }, OS = { class: "section-header" }, AS = { class: "section-info" }, zS = { class: "section-count" }, FS = {
  key: 0,
  class: "item-list"
}, VS = { class: "item-details" }, BS = { class: "item-name" }, WS = { class: "item-meta" }, GS = {
  key: 0,
  class: "item-more"
}, jS = { class: "preview-section" }, HS = { class: "section-header" }, qS = { class: "section-info" }, KS = { class: "section-count" }, JS = {
  key: 0,
  class: "item-list"
}, QS = { class: "item-name" }, YS = {
  key: 0,
  class: "item-more"
}, XS = {
  key: 0,
  class: "preview-section"
}, ZS = { class: "git-info" }, e8 = /* @__PURE__ */ Ee({
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
    const t = e, n = M(() => t.workflows.length), a = M(() => t.models.length), l = M(() => t.nodes.length);
    function r(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (o(), i("div", xS, [
      s("div", SS, [
        b(gs, null, {
          default: h(() => [...u[0] || (u[0] = [
            x("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (o(), i("span", IS, [
          u[1] || (u[1] = x(" From: ", -1)),
          b(ll, null, {
            default: h(() => [
              x(m(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      s("div", ES, [
        s("div", TS, [
          s("div", MS, [
            u[3] || (u[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", PS, [
              u[2] || (u[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", RS, m(n.value) + " file" + m(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (o(), i("div", DS, [
            (o(!0), i(B, null, ye(e.workflows.slice(0, e.maxPreviewItems), (d) => (o(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", NS, m(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (o(), i("div", LS, " +" + m(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", US, [
          s("div", OS, [
            u[6] || (u[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", AS, [
              u[5] || (u[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", zS, m(a.value) + " file" + m(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (o(), i("div", FS, [
            (o(!0), i(B, null, ye(e.models.slice(0, e.maxPreviewItems), (d) => (o(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", VS, [
                s("span", BS, m(d.filename), 1),
                s("span", WS, m(r(d.size)) + " • " + m(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (o(), i("div", GS, " +" + m(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", jS, [
          s("div", HS, [
            u[9] || (u[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", qS, [
              u[8] || (u[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", KS, m(l.value) + " node" + m(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (o(), i("div", JS, [
            (o(!0), i(B, null, ye(e.nodes.slice(0, e.maxPreviewItems), (d) => (o(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", QS, m(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (o(), i("div", YS, " +" + m(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (o(), i("div", XS, [
          u[11] || (u[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", ZS, [
            e.gitBranch ? (o(), R(Tt, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                b(ll, null, {
                  default: h(() => [
                    x(m(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (o(), R(Tt, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                b(xc, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), t8 = /* @__PURE__ */ Te(e8, [["__scopeId", "data-v-182fe113"]]), s8 = { class: "import-config" }, n8 = { class: "config-container" }, o8 = { class: "config-field" }, a8 = { class: "input-wrapper" }, l8 = ["value"], i8 = {
  key: 0,
  class: "validating-indicator"
}, r8 = {
  key: 1,
  class: "valid-indicator"
}, c8 = {
  key: 0,
  class: "field-error"
}, u8 = { class: "config-field" }, d8 = { class: "strategy-options" }, m8 = ["value", "checked", "onChange"], f8 = { class: "strategy-content" }, v8 = { class: "strategy-label" }, p8 = { class: "strategy-description" }, g8 = { class: "config-field switch-field" }, h8 = { class: "switch-label" }, y8 = ["checked"], w8 = { class: "advanced-section" }, _8 = { class: "advanced-content" }, k8 = { class: "config-field" }, b8 = ["value"], $8 = ["value"], C8 = /* @__PURE__ */ Ee({
  __name: "ImportConfigForm",
  props: {
    name: {},
    modelStrategy: {},
    torchBackend: {},
    switchAfterImport: { type: Boolean },
    nameError: {}
  },
  emits: ["update:name", "update:modelStrategy", "update:torchBackend", "update:switchAfterImport", "validate-name"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(!1), r = _(!1);
    $t(() => n.nameError, (v) => {
      l.value = !1, r.value = !v && n.name.length > 0;
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
      const p = v.target.value;
      a("update:name", p), r.value = !1, u && clearTimeout(u), p.length > 0 ? (l.value = !0, u = setTimeout(() => {
        a("validate-name", p);
      }, 400)) : l.value = !1;
    }
    function f() {
      n.name.length > 0 && a("validate-name", n.name);
    }
    return (v, p) => (o(), i("div", s8, [
      b(gs, null, {
        default: h(() => [...p[2] || (p[2] = [
          x("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", n8, [
        s("div", o8, [
          b(Jo, { required: "" }, {
            default: h(() => [...p[3] || (p[3] = [
              x("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", a8, [
            s("input", {
              type: "text",
              class: Be(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: f
            }, null, 42, l8),
            l.value ? (o(), i("span", i8, "...")) : r.value ? (o(), i("span", r8, "✓")) : y("", !0)
          ]),
          e.nameError ? (o(), i("div", c8, m(e.nameError), 1)) : y("", !0),
          p[4] || (p[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", u8, [
          b(Jo, null, {
            default: h(() => [...p[5] || (p[5] = [
              x("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", d8, [
            (o(), i(B, null, ye(c, (w) => s("label", {
              key: w.value,
              class: Be(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              s("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (g) => a("update:modelStrategy", w.value)
              }, null, 40, m8),
              s("div", f8, [
                s("span", v8, m(w.label), 1),
                s("span", p8, m(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", g8, [
          s("label", h8, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => a("update:switchAfterImport", w.target.checked))
            }, null, 40, y8),
            p[6] || (p[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", w8, [
          p[8] || (p[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", _8, [
            s("div", k8, [
              b(Jo, null, {
                default: h(() => [...p[7] || (p[7] = [
                  x("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              s("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: p[1] || (p[1] = (w) => a("update:torchBackend", w.target.value))
              }, [
                (o(!0), i(B, null, ye(at(Nl), (w) => (o(), i("option", {
                  key: w,
                  value: w
                }, m(w) + m(w === "auto" ? " (detect GPU)" : ""), 9, $8))), 128))
              ], 40, b8)
            ])
          ])
        ])
      ])
    ]));
  }
}), x8 = /* @__PURE__ */ Te(C8, [["__scopeId", "data-v-89ea06a1"]]), S8 = { class: "import-flow" }, I8 = {
  key: 0,
  class: "import-empty"
}, E8 = { class: "git-import-section" }, T8 = { class: "git-url-input-row" }, M8 = ["disabled"], P8 = {
  key: 0,
  class: "git-error"
}, R8 = {
  key: 1,
  class: "import-configure"
}, D8 = { class: "selected-file-bar" }, N8 = {
  key: 0,
  class: "file-bar-content"
}, L8 = { class: "file-bar-info" }, U8 = { class: "file-bar-name" }, O8 = { class: "file-bar-size" }, A8 = {
  key: 1,
  class: "file-bar-content"
}, z8 = { class: "file-bar-info" }, F8 = { class: "file-bar-name" }, V8 = {
  key: 0,
  class: "preview-loading"
}, B8 = { class: "import-actions" }, W8 = {
  key: 2,
  class: "import-progress"
}, G8 = { class: "creating-intro" }, j8 = {
  key: 0,
  class: "progress-warning"
}, H8 = {
  key: 1,
  class: "import-error"
}, q8 = { class: "error-message" }, K8 = {
  key: 3,
  class: "import-complete"
}, J8 = { class: "complete-message" }, Q8 = { class: "complete-title" }, Y8 = { class: "complete-details" }, X8 = { class: "complete-actions" }, Z8 = /* @__PURE__ */ Ee({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: t, emit: n }) {
    var Me, pe, ze, Le;
    const a = e, l = n, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: f, getImportProgress: v } = mt();
    let p = null;
    const w = _(null), g = _(a.resumeImport ?? !1), k = _(!1), $ = _(!1), S = _(""), C = _(!1), I = _(null), E = _(""), P = _(null), D = _(!1), A = _(null), V = _(null), N = _({
      name: ((Me = a.initialProgress) == null ? void 0 : Me.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), j = _(null), le = _({
      message: ((pe = a.initialProgress) == null ? void 0 : pe.message) ?? "Preparing import...",
      phase: ((ze = a.initialProgress) == null ? void 0 : ze.phase) ?? "",
      progress: ((Le = a.initialProgress) == null ? void 0 : Le.progress) ?? 0,
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
    ], Q = M(() => {
      if (!V.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const ke = V.value;
      return {
        sourceEnvironment: ke.comfyui_version ? `ComfyUI ${ke.comfyui_version}` : "Unknown",
        workflows: ke.workflows.map((De) => De.name),
        models: ke.models.map((De) => ({
          filename: De.filename,
          size: 0,
          type: De.relative_path.split("/")[0] || "model"
        })),
        nodes: ke.nodes.map((De) => De.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), ve = M(() => !C.value && !I.value && V.value && N.value.name.length > 0 && !j.value && (w.value || P.value));
    async function J(ke) {
      w.value = ke, C.value = !0, I.value = null, V.value = null;
      try {
        const De = await r(ke);
        V.value = De;
      } catch (De) {
        I.value = De instanceof Error ? De.message : "Failed to analyze file", console.error("Preview error:", De);
      } finally {
        C.value = !1;
      }
    }
    function L() {
      w.value = null, P.value = null, E.value = "", A.value = null, k.value = !1, $.value = !1, S.value = "", V.value = null, I.value = null, N.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, j.value = null, l("source-cleared");
    }
    function F() {
      se(), L(), g.value = !1, C.value = !1, D.value = !1, le.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function ue() {
      if (E.value.trim()) {
        D.value = !0, A.value = null;
        try {
          const ke = await c(E.value.trim());
          P.value = E.value.trim(), V.value = ke;
        } catch (ke) {
          A.value = ke instanceof Error ? ke.message : "Failed to analyze repository";
        } finally {
          D.value = !1;
        }
      }
    }
    function te(ke) {
      try {
        const De = new URL(ke);
        return De.host + De.pathname.replace(/\.git$/, "");
      } catch {
        return ke;
      }
    }
    async function me(ke) {
      if (!ke) {
        j.value = "Environment name is required";
        return;
      }
      try {
        const De = await u(ke);
        j.value = De.valid ? null : De.error || "Invalid name";
      } catch {
        j.value = "Failed to validate name";
      }
    }
    async function de() {
      if (N.value.name && !(!w.value && !P.value)) {
        g.value = !0, k.value = !1, le.value = { message: `Creating environment '${N.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let ke;
          if (w.value)
            ke = await d(
              w.value,
              N.value.name,
              N.value.modelStrategy,
              N.value.torchBackend
            );
          else if (P.value)
            ke = await f(
              P.value,
              N.value.name,
              N.value.modelStrategy,
              N.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ke.status === "started" ? W() : ($.value = !1, S.value = ke.message, g.value = !1, k.value = !0);
        } catch (ke) {
          $.value = !1, S.value = ke instanceof Error ? ke.message : "Unknown error occurred during import", g.value = !1, k.value = !0;
        }
      }
    }
    async function W() {
      if (p) return;
      const ke = async () => {
        try {
          const ge = await v();
          return le.value = {
            message: ge.message,
            phase: ge.phase || "",
            progress: ge.progress ?? (ge.state === "importing" ? 50 : 0),
            error: ge.error || null
          }, ge.state === "complete" ? (se(), $.value = !0, S.value = `Environment '${ge.environment_name}' created successfully`, g.value = !1, k.value = !0, ge.environment_name && l("import-complete", ge.environment_name, N.value.switchAfterImport), !1) : ge.state === "error" ? (se(), $.value = !1, S.value = ge.error || ge.message, g.value = !1, k.value = !0, !1) : !0;
        } catch (ge) {
          return console.error("Failed to poll import progress:", ge), !0;
        }
      };
      await ke() && (p = setInterval(async () => {
        await ke() || se();
      }, 2e3));
    }
    function se() {
      p && (clearInterval(p), p = null);
    }
    function ne(ke) {
      return ke < 1024 ? `${ke} B` : ke < 1024 * 1024 ? `${(ke / 1024).toFixed(1)} KB` : ke < 1024 * 1024 * 1024 ? `${(ke / (1024 * 1024)).toFixed(1)} MB` : `${(ke / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return ut(async () => {
      try {
        const ke = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", ke.state, ke), ke.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", ke.environment_name), g.value = !0, N.value.name = ke.environment_name || N.value.name || "", le.value = {
          progress: ke.progress ?? 0,
          message: ke.message || "Importing...",
          phase: ke.phase || "",
          error: null
        }, W());
      } catch (ke) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", ke);
      }
    }), t({
      handleReset: F,
      isImporting: g,
      canImport: ve
    }), (ke, De) => {
      var ge;
      return o(), i("div", S8, [
        !w.value && !P.value && !g.value ? (o(), i("div", I8, [
          b(bS, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: J
          }),
          De[7] || (De[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", E8, [
            De[5] || (De[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", T8, [
              Ot(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": De[0] || (De[0] = (we) => E.value = we),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Cs(ue, ["enter"]),
                disabled: D.value
              }, null, 40, M8), [
                [go, E.value]
              ]),
              b(Pe, {
                variant: "primary",
                size: "sm",
                disabled: !E.value.trim() || D.value,
                onClick: ue
              }, {
                default: h(() => [
                  x(m(D.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            A.value ? (o(), i("div", P8, m(A.value), 1)) : y("", !0),
            De[6] || (De[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || P.value) && !g.value && !k.value ? (o(), i("div", R8, [
          s("div", D8, [
            w.value ? (o(), i("div", N8, [
              De[8] || (De[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", L8, [
                s("div", U8, m(w.value.name), 1),
                s("div", O8, m(ne(w.value.size)), 1)
              ])
            ])) : P.value ? (o(), i("div", A8, [
              De[10] || (De[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", z8, [
                s("div", F8, m(te(P.value)), 1),
                De[9] || (De[9] = s("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            b(Pe, {
              variant: "ghost",
              size: "sm",
              onClick: L
            }, {
              default: h(() => [...De[11] || (De[11] = [
                x(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          C.value ? (o(), i("div", V8, [...De[12] || (De[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : I.value ? (o(), R(us, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [I.value]
          }, null, 8, ["details"])) : V.value ? (o(), R(t8, {
            key: 2,
            "source-environment": Q.value.sourceEnvironment,
            workflows: Q.value.workflows,
            models: Q.value.models,
            nodes: Q.value.nodes,
            "git-branch": Q.value.gitBranch,
            "git-commit": Q.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          V.value ? (o(), R(x8, {
            key: 3,
            name: N.value.name,
            "onUpdate:name": De[1] || (De[1] = (we) => N.value.name = we),
            "model-strategy": N.value.modelStrategy,
            "onUpdate:modelStrategy": De[2] || (De[2] = (we) => N.value.modelStrategy = we),
            "torch-backend": N.value.torchBackend,
            "onUpdate:torchBackend": De[3] || (De[3] = (we) => N.value.torchBackend = we),
            "switch-after-import": N.value.switchAfterImport,
            "onUpdate:switchAfterImport": De[4] || (De[4] = (we) => N.value.switchAfterImport = we),
            "name-error": j.value,
            onValidateName: me
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          N.value.modelStrategy === "skip" && ((ge = V.value) != null && ge.models_needing_download) ? (o(), R(us, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${V.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          s("div", B8, [
            b(Pe, {
              variant: "secondary",
              size: "md",
              onClick: L
            }, {
              default: h(() => [...De[13] || (De[13] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Pe, {
              variant: "primary",
              size: "md",
              disabled: !ve.value,
              onClick: de
            }, {
              default: h(() => [...De[14] || (De[14] = [
                x(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : g.value ? (o(), i("div", W8, [
          s("p", G8, [
            De[15] || (De[15] = x(" Importing environment ", -1)),
            s("strong", null, m(N.value.name), 1),
            De[16] || (De[16] = x("... ", -1))
          ]),
          b(ra, {
            progress: le.value.progress,
            message: le.value.message,
            "current-phase": le.value.phase,
            variant: le.value.error ? "error" : "default",
            "show-steps": !0,
            steps: ce
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          le.value.error ? y("", !0) : (o(), i("p", j8, " This may take several minutes. Please wait... ")),
          le.value.error ? (o(), i("div", H8, [
            s("p", q8, m(le.value.error), 1)
          ])) : y("", !0)
        ])) : k.value ? (o(), i("div", K8, [
          s("div", {
            class: Be(["complete-icon", $.value ? "success" : "error"])
          }, m($.value ? "✓" : "✕"), 3),
          s("div", J8, [
            s("div", Q8, m($.value ? "Import Successful" : "Import Failed"), 1),
            s("div", Y8, m(S.value), 1)
          ]),
          s("div", X8, [
            b(Pe, {
              variant: "primary",
              size: "md",
              onClick: F
            }, {
              default: h(() => [...De[17] || (De[17] = [
                x(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Sc = /* @__PURE__ */ Te(Z8, [["__scopeId", "data-v-72cbc04e"]]), e5 = /* @__PURE__ */ Ee({
  __name: "ImportSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["import-complete-switch"],
  setup(e, { emit: t }) {
    const n = t, a = _(!1);
    function l(r, c) {
      c && n("import-complete-switch", r);
    }
    return (r, c) => (o(), i(B, null, [
      b(Ht, null, rs({
        content: h(() => [
          b(Sc, { onImportComplete: l })
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(qt, {
              title: "IMPORT ENVIRONMENT",
              "show-info": !0,
              onInfoClick: c[0] || (c[0] = (u) => a.value = !0)
            })
          ]),
          key: "0"
        }
      ]), 1024),
      b(_s, {
        show: a.value,
        title: "How Import Works",
        onClose: c[1] || (c[1] = (u) => a.value = !1)
      }, {
        content: h(() => [...c[2] || (c[2] = [
          s("div", { class: "help-steps" }, [
            s("div", { class: "help-step" }, [
              s("span", { class: "step-number" }, "1"),
              s("div", { class: "step-content" }, [
                s("strong", null, "Creates a New Environment"),
                s("p", null, "Import does not modify your current environment - it creates a brand new one")
              ])
            ]),
            s("div", { class: "help-step" }, [
              s("span", { class: "step-number" }, "2"),
              s("div", { class: "step-content" }, [
                s("strong", null, "Preview Before Import"),
                s("p", null, "See what nodes, models, and workflows will be set up")
              ])
            ]),
            s("div", { class: "help-step" }, [
              s("span", { class: "step-number" }, "3"),
              s("div", { class: "step-content" }, [
                s("strong", null, "Choose Model Strategy"),
                s("p", null, "Download all models, only required ones, or skip for later")
              ])
            ]),
            s("div", { class: "help-step" }, [
              s("span", { class: "step-number" }, "4"),
              s("div", { class: "step-content" }, [
                s("strong", null, "Switch When Ready"),
                s("p", null, "After creation, switch to the new environment to start using it")
              ])
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), t5 = /* @__PURE__ */ Te(e5, [["__scopeId", "data-v-41b1f298"]]), s5 = { class: "base-tabs" }, n5 = ["disabled", "onClick"], o5 = {
  key: 0,
  class: "base-tabs__badge"
}, a5 = /* @__PURE__ */ Ee({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t;
    function l(r) {
      var c;
      (c = n.tabs.find((u) => u.id === r)) != null && c.disabled || a("update:modelValue", r);
    }
    return (r, c) => (o(), i("div", s5, [
      (o(!0), i(B, null, ye(e.tabs, (u) => (o(), i("button", {
        key: u.id,
        class: Be([
          "base-tabs__tab",
          {
            active: e.modelValue === u.id,
            disabled: u.disabled
          }
        ]),
        disabled: u.disabled,
        onClick: (d) => l(u.id)
      }, [
        x(m(u.label) + " ", 1),
        u.badge ? (o(), i("span", o5, m(u.badge), 1)) : y("", !0)
      ], 10, n5))), 128))
    ]));
  }
}), Ll = /* @__PURE__ */ Te(a5, [["__scopeId", "data-v-ad5e6cad"]]), l5 = { class: "commit-list" }, i5 = /* @__PURE__ */ Ee({
  __name: "CommitList",
  setup(e) {
    return (t, n) => (o(), i("div", l5, [
      ct(t.$slots, "default", {}, void 0)
    ]));
  }
}), Ic = /* @__PURE__ */ Te(i5, [["__scopeId", "data-v-8c5ee761"]]), r5 = { class: "commit-message" }, c5 = { class: "commit-date" }, u5 = /* @__PURE__ */ Ee({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, a = t;
    function l() {
      n.clickable && a("click");
    }
    return (r, c) => (o(), i("div", {
      class: Be(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      b(xc, { hash: e.hash }, null, 8, ["hash"]),
      s("span", r5, m(e.message), 1),
      s("span", c5, m(e.relativeDate), 1),
      r.$slots.actions ? (o(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = bt(() => {
        }, ["stop"]))
      }, [
        ct(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Ec = /* @__PURE__ */ Te(u5, [["__scopeId", "data-v-dd7c621b"]]), d5 = /* @__PURE__ */ Ee({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const t = e, n = M(() => `HISTORY (${t.currentRef || "detached"})`);
    return (a, l) => (o(), R(Ht, null, rs({
      content: h(() => [
        e.commits.length === 0 ? (o(), R(Es, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), R(Ic, { key: 1 }, {
          default: h(() => [
            (o(!0), i(B, null, ye(e.commits, (r) => (o(), R(Ec, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => a.$emit("select", r)
            }, {
              actions: h(() => [
                b(Pe, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (c) => a.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: h(() => [...l[0] || (l[0] = [
                    s("svg", {
                      width: "12",
                      height: "12",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
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
      _: 2
    }, [
      e.embedded ? void 0 : {
        name: "header",
        fn: h(() => [
          b(qt, { title: n.value }, null, 8, ["title"])
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), m5 = /* @__PURE__ */ Te(d5, [["__scopeId", "data-v-fa4bf3a1"]]), f5 = { class: "branch-create-form" }, v5 = { class: "form-actions" }, p5 = /* @__PURE__ */ Ee({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: t }) {
    const n = t, a = _(""), l = M(() => {
      const u = a.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function r() {
      l.value && (n("create", a.value.trim()), a.value = "");
    }
    function c() {
      a.value = "", n("cancel");
    }
    return (u, d) => (o(), i("div", f5, [
      b(Mn, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (f) => a.value = f),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      s("div", v5, [
        b(Pe, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: r
        }, {
          default: h(() => [...d[1] || (d[1] = [
            x(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        b(Pe, {
          variant: "secondary",
          size: "sm",
          onClick: c
        }, {
          default: h(() => [...d[2] || (d[2] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), g5 = /* @__PURE__ */ Te(p5, [["__scopeId", "data-v-7c500394"]]), h5 = { class: "branch-list-item__indicator" }, y5 = { class: "branch-list-item__name" }, w5 = {
  key: 0,
  class: "branch-list-item__actions"
}, _5 = {
  key: 0,
  class: "branch-list-item__current-label"
}, k5 = /* @__PURE__ */ Ee({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => (o(), i("div", {
      class: Be(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: n[0] || (n[0] = (a) => e.clickable && t.$emit("click"))
    }, [
      s("span", h5, m(e.isCurrent ? "●" : "○"), 1),
      s("span", y5, m(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (o(), i("div", w5, [
        ct(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (o(), i("span", _5, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), b5 = /* @__PURE__ */ Te(k5, [["__scopeId", "data-v-c6581a24"]]), $5 = { class: "header-info" }, C5 = { class: "branch-name" }, x5 = {
  key: 0,
  class: "current-badge"
}, S5 = { class: "branch-meta" }, I5 = { key: 0 }, E5 = {
  key: 0,
  class: "meta-note"
}, T5 = {
  key: 0,
  class: "loading"
}, M5 = {
  key: 1,
  class: "empty-state"
}, P5 = /* @__PURE__ */ Ee({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const t = e, { getBranchHistory: n } = mt(), a = _([]), l = _(!1), r = _(!0);
    return ut(async () => {
      try {
        const c = await n(t.branchName, 50);
        a.value = c.commits, l.value = c.has_more;
      } finally {
        r.value = !1;
      }
    }), (c, u) => (o(), R(Mt, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (d) => c.$emit("close"))
    }, {
      header: h(() => [
        s("div", $5, [
          u[4] || (u[4] = s("h3", { class: "header-title" }, "BRANCH", -1)),
          s("span", C5, m(e.branchName), 1),
          e.isCurrent ? (o(), i("span", x5, "CURRENT")) : y("", !0)
        ]),
        b(Ue, {
          variant: "ghost",
          size: "sm",
          onClick: u[0] || (u[0] = (d) => c.$emit("close"))
        }, {
          default: h(() => [...u[5] || (u[5] = [
            s("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
            ], -1)
          ])]),
          _: 1
        })
      ]),
      body: h(() => [
        s("div", S5, [
          r.value ? (o(), i("span", I5, "Loading...")) : (o(), i(B, { key: 1 }, [
            s("span", null, m(a.value.length) + " commits", 1),
            l.value ? (o(), i("span", E5, "(showing first " + m(a.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (o(), i("div", T5, "Loading commit history...")) : a.value.length === 0 ? (o(), i("div", M5, " No commits found on this branch ")) : (o(), R(Ic, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (o(!0), i(B, null, ye(a.value, (d) => (o(), R(Ec, {
              key: d.hash,
              hash: d.short_hash || d.hash.slice(0, 7),
              message: d.message,
              "relative-date": d.date_relative || d.relative_date || "",
              clickable: !1
            }, null, 8, ["hash", "message", "relative-date"]))), 128))
          ]),
          _: 1
        }))
      ]),
      footer: h(() => [
        e.isCurrent ? y("", !0) : (o(), R(Pe, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: u[1] || (u[1] = (d) => c.$emit("delete", e.branchName))
        }, {
          default: h(() => [...u[6] || (u[6] = [
            x(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        u[8] || (u[8] = s("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? y("", !0) : (o(), R(Ue, {
          key: 1,
          variant: "primary",
          onClick: u[2] || (u[2] = (d) => c.$emit("switch", e.branchName))
        }, {
          default: h(() => [...u[7] || (u[7] = [
            x(" Switch to Branch ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
}), R5 = /* @__PURE__ */ Te(P5, [["__scopeId", "data-v-2e5437cc"]]), D5 = {
  key: 0,
  class: "branch-toolbar"
}, N5 = {
  key: 3,
  class: "branch-list"
}, L5 = /* @__PURE__ */ Ee({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {},
    embedded: { type: Boolean }
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: t }) {
    const n = t, a = _(!1), l = _(null);
    function r(v) {
      n("create", v), c();
    }
    function c() {
      a.value = !1;
    }
    function u(v) {
      l.value = v;
    }
    function d(v) {
      l.value = null, n("delete", v);
    }
    function f(v) {
      l.value = null, n("switch", v);
    }
    return (v, p) => (o(), R(Ht, null, rs({
      content: h(() => [
        e.embedded && !a.value ? (o(), i("div", D5, [
          b(Pe, {
            variant: "primary",
            size: "sm",
            onClick: p[1] || (p[1] = (w) => a.value = !0)
          }, {
            default: h(() => [...p[4] || (p[4] = [
              x(" + Create Branch ", -1)
            ])]),
            _: 1
          })
        ])) : y("", !0),
        a.value ? (o(), R(g5, {
          key: 1,
          onCreate: r,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (o(), R(Es, {
          key: 2,
          icon: "○",
          message: "No branches found"
        })) : (o(), i("div", N5, [
          (o(!0), i(B, null, ye(e.branches, (w) => (o(), R(b5, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (g) => u(w)
          }, {
            actions: h(() => [
              w.is_current ? y("", !0) : (o(), R(Pe, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: bt((g) => n("switch", w.name), ["stop"])
              }, {
                default: h(() => [...p[5] || (p[5] = [
                  x(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current", "onClick"]))), 128))
        ])),
        l.value ? (o(), R(R5, {
          key: 4,
          "branch-name": l.value.name,
          "is-current": l.value.is_current,
          onClose: p[2] || (p[2] = (w) => l.value = null),
          onDelete: d,
          onSwitch: f
        }, null, 8, ["branch-name", "is-current"])) : y("", !0)
      ]),
      _: 2
    }, [
      e.embedded ? void 0 : {
        name: "header",
        fn: h(() => [
          b(qt, { title: "BRANCHES" }, {
            actions: h(() => [
              a.value ? y("", !0) : (o(), R(Pe, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: p[0] || (p[0] = (w) => a.value = !0)
              }, {
                default: h(() => [...p[3] || (p[3] = [
                  x(" + Create Branch ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), U5 = /* @__PURE__ */ Te(L5, [["__scopeId", "data-v-98858eb2"]]);
function Tc(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const O5 = { class: "remote-url-display" }, A5 = ["title"], z5 = ["title"], F5 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, V5 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, B5 = /* @__PURE__ */ Ee({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const t = e, n = _(!1), a = M(() => {
      if (t.url.length <= t.maxLength)
        return t.url;
      const r = t.url.slice(0, Math.floor(t.maxLength * 0.6)), c = t.url.slice(-Math.floor(t.maxLength * 0.3));
      return `${r}...${c}`;
    });
    async function l() {
      try {
        await navigator.clipboard.writeText(t.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (r) {
        console.error("Failed to copy URL:", r);
      }
    }
    return (r, c) => (o(), i("div", O5, [
      s("span", {
        class: "url-text",
        title: e.url
      }, m(a.value), 9, A5),
      s("button", {
        class: Be(["copy-btn", { copied: n.value }]),
        onClick: l,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), i("svg", V5, [...c[1] || (c[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), i("svg", F5, [...c[0] || (c[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, z5)
    ]));
  }
}), W5 = /* @__PURE__ */ Te(B5, [["__scopeId", "data-v-7768a58d"]]), G5 = { class: "remote-title" }, j5 = {
  key: 0,
  class: "default-badge"
}, H5 = {
  key: 1,
  class: "sync-badge"
}, q5 = {
  key: 0,
  class: "ahead"
}, K5 = {
  key: 1,
  class: "behind"
}, J5 = {
  key: 1,
  class: "synced"
}, Q5 = ["href"], Y5 = {
  key: 1,
  class: "remote-url-text"
}, X5 = /* @__PURE__ */ Ee({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const t = e, n = M(() => t.fetchingRemote === t.remote.name), a = M(() => t.remote.is_default), l = M(() => t.syncStatus && t.syncStatus.behind > 0), r = M(() => t.syncStatus && t.syncStatus.ahead > 0), c = M(() => t.remote.push_url !== t.remote.fetch_url), u = M(() => {
      const f = t.remote.fetch_url, v = f.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : f.startsWith("https://") || f.startsWith("http://") ? f.replace(/\.git$/, "") : null;
    }), d = M(() => t.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (f, v) => (o(), R(Yt, {
      status: a.value ? "synced" : void 0
    }, rs({
      icon: h(() => [
        x(m(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        s("div", G5, [
          s("span", null, m(e.remote.name), 1),
          a.value ? (o(), i("span", j5, "DEFAULT")) : y("", !0),
          e.syncStatus ? (o(), i("span", H5, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (o(), i(B, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (o(), i("span", q5, "↑" + m(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (o(), i("span", K5, "↓" + m(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (o(), i("span", J5, "✓ synced"))
          ])) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        u.value ? (o(), i("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: v[0] || (v[0] = bt(() => {
          }, ["stop"]))
        }, m(d.value), 9, Q5)) : (o(), i("span", Y5, m(d.value), 1))
      ]),
      actions: h(() => [
        b(Pe, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: v[1] || (v[1] = (p) => f.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...v[6] || (v[6] = [
            x(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        b(Pe, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[2] || (v[2] = (p) => f.$emit("pull", e.remote.name))
        }, {
          default: h(() => [
            x(" Pull" + m(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(Pe, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[3] || (v[3] = (p) => f.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            x(" Push" + m(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(Pe, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (p) => f.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            x(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? y("", !0) : (o(), R(Pe, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[5] || (v[5] = (p) => f.$emit("remove", e.remote.name))
        }, {
          default: h(() => [...v[8] || (v[8] = [
            x(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      c.value ? {
        name: "details",
        fn: h(() => [
          e.remote.push_url !== e.remote.fetch_url ? (o(), R(Tt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              b(W5, {
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
}), Z5 = /* @__PURE__ */ Te(X5, [["__scopeId", "data-v-8310f3a8"]]), e4 = ["for"], t4 = {
  key: 0,
  class: "base-form-field-required"
}, s4 = { class: "base-form-field-input" }, n4 = {
  key: 1,
  class: "base-form-field-error"
}, o4 = {
  key: 2,
  class: "base-form-field-hint"
}, a4 = /* @__PURE__ */ Ee({
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
    const t = e, n = M(() => t.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (a, l) => (o(), i("div", {
      class: Be(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (o(), i("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        x(m(e.label) + " ", 1),
        e.required ? (o(), i("span", t4, "*")) : y("", !0)
      ], 8, e4)) : y("", !0),
      s("div", s4, [
        ct(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (o(), i("span", n4, m(e.error), 1)) : e.hint ? (o(), i("span", o4, m(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), Wt = /* @__PURE__ */ Te(a4, [["__scopeId", "data-v-9a1cf296"]]), l4 = { class: "remote-form" }, i4 = { class: "form-header" }, r4 = { class: "form-body" }, c4 = {
  key: 0,
  class: "form-error"
}, u4 = { class: "form-actions" }, d4 = /* @__PURE__ */ Ee({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), r = _(!1), c = _(null);
    $t(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      l.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const u = M(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!u.value || r.value)) {
        c.value = null, r.value = !0;
        try {
          a("submit", l.value);
        } catch (f) {
          c.value = f instanceof Error ? f.message : "Failed to submit form";
        } finally {
          r.value = !1;
        }
      }
    }
    return (f, v) => (o(), i("div", l4, [
      s("div", i4, [
        b(gs, null, {
          default: h(() => [
            x(m(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", r4, [
        b(Wt, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            b(Rt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (p) => l.value.name = p),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        b(Wt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            b(Rt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (p) => l.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        b(Wt, { label: "Push URL (optional)" }, {
          default: h(() => [
            b(Rt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (o(), i("div", c4, m(c.value), 1)) : y("", !0)
      ]),
      s("div", u4, [
        b(Pe, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: r.value,
          onClick: d
        }, {
          default: h(() => [
            x(m(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        b(Pe, {
          variant: "ghost",
          size: "md",
          onClick: v[3] || (v[3] = (p) => f.$emit("cancel"))
        }, {
          default: h(() => [...v[4] || (v[4] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), m4 = /* @__PURE__ */ Te(d4, [["__scopeId", "data-v-56021b18"]]), f4 = { class: "conflict-summary-box" }, v4 = { class: "summary-header" }, p4 = { class: "summary-text" }, g4 = { key: 0 }, h4 = {
  key: 1,
  class: "all-resolved"
}, y4 = { class: "summary-progress" }, w4 = { class: "progress-bar" }, _4 = { class: "progress-text" }, k4 = /* @__PURE__ */ Ee({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const t = e, n = M(
      () => t.conflictCount > 0 ? t.resolvedCount / t.conflictCount * 100 : 0
    );
    return (a, l) => (o(), i("div", f4, [
      s("div", v4, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", p4, [
          s("strong", null, m(e.conflictCount) + " conflict" + m(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (o(), i("p", g4, " Resolve all conflicts before " + m(e.operationType) + "ing ", 1)) : (o(), i("p", h4, " All conflicts resolved - ready to " + m(e.operationType), 1))
        ])
      ]),
      s("div", y4, [
        s("div", w4, [
          s("div", {
            class: "progress-fill",
            style: zt({ width: n.value + "%" })
          }, null, 4)
        ]),
        s("span", _4, m(e.resolvedCount) + " / " + m(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), b4 = /* @__PURE__ */ Te(k4, [["__scopeId", "data-v-4e9e6cc9"]]), $4 = { class: "modal-header" }, C4 = { class: "modal-title" }, x4 = { class: "modal-body" }, S4 = {
  key: 0,
  class: "error-box"
}, I4 = {
  key: 0,
  class: "error-hint"
}, E4 = {
  key: 1,
  class: "loading-state"
}, T4 = { class: "commit-summary" }, M4 = {
  key: 0,
  class: "commits-section"
}, P4 = { class: "commit-list" }, R4 = { class: "commit-hash" }, D4 = { class: "commit-message" }, N4 = { class: "commit-date" }, L4 = {
  key: 1,
  class: "changes-section"
}, U4 = {
  key: 0,
  class: "change-group",
  open: ""
}, O4 = { class: "change-count" }, A4 = { class: "change-list" }, z4 = {
  key: 0,
  class: "conflict-badge"
}, F4 = {
  key: 1,
  class: "change-group"
}, V4 = { class: "change-count" }, B4 = { class: "change-list" }, W4 = {
  key: 2,
  class: "change-group"
}, G4 = { class: "change-count" }, j4 = { class: "change-list" }, H4 = {
  key: 3,
  class: "strategy-section"
}, q4 = { class: "radio-group" }, K4 = { class: "radio-option" }, J4 = { class: "radio-option" }, Q4 = { class: "radio-option" }, Y4 = {
  key: 4,
  class: "up-to-date"
}, X4 = { class: "modal-actions" }, Ni = "comfygit.pullModelStrategy", Z4 = /* @__PURE__ */ Ee({
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
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(localStorage.getItem(Ni) || "skip");
    $t(l, (S) => {
      localStorage.setItem(Ni, S);
    });
    const r = M(() => {
      var S;
      return ((S = n.error) == null ? void 0 : S.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = M(() => {
      if (!n.preview) return 0;
      const S = n.preview.changes.workflows;
      return S.added.length + S.modified.length + S.deleted.length;
    }), u = M(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), d = M(() => {
      var S;
      return c.value > 0 || u.value > 0 || (((S = n.preview) == null ? void 0 : S.changes.models.count) || 0) > 0;
    }), f = M(() => n.preview && Tc(n.preview) ? n.preview : null), v = M(() => {
      var S;
      return ((S = f.value) == null ? void 0 : S.workflow_conflicts.length) ?? 0;
    }), p = M(() => {
      var S;
      return ((S = n.conflictResolutions) == null ? void 0 : S.size) ?? 0;
    }), w = M(
      () => v.value > 0 && p.value === v.value
    ), g = M(() => !(!n.preview || n.preview.has_uncommitted_changes || f.value && !w.value));
    function k(S) {
      if (!f.value) return !1;
      const C = S.replace(/\.json$/, "");
      return f.value.workflow_conflicts.some((I) => I.name === C);
    }
    function $(S) {
      const C = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: S, resolutions: C });
    }
    return (S, C) => {
      var I, E;
      return o(), R(as, { to: "body" }, [
        e.show ? (o(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (P) => S.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = bt(() => {
            }, ["stop"]))
          }, [
            s("div", $4, [
              s("h3", C4, "PULL FROM " + m(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (P) => S.$emit("close"))
              }, "✕")
            ]),
            s("div", x4, [
              e.error ? (o(), i("div", S4, [
                C[13] || (C[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  C[12] || (C[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, m(e.error), 1),
                  r.value ? (o(), i("p", I4, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (o(), i("div", E4, [...C[14] || (C[14] = [
                s("span", { class: "spinner" }, "⟳", -1),
                x(" Loading preview... ", -1)
              ])])) : (I = e.preview) != null && I.has_uncommitted_changes ? (o(), i(B, { key: 2 }, [
                C[15] || (C[15] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                C[16] || (C[16] = s("div", { class: "options-section" }, [
                  s("p", null, [
                    s("strong", null, "Options:")
                  ]),
                  s("ul", null, [
                    s("li", null, "Commit your changes first (recommended)"),
                    s("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (o(), i(B, { key: 3 }, [
                s("div", T4, [
                  C[17] || (C[17] = s("span", { class: "icon" }, "📥", -1)),
                  x(" " + m(e.preview.commits_behind) + " commit" + m(e.preview.commits_behind !== 1 ? "s" : "") + " from " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (o(), i("div", M4, [
                  C[18] || (C[18] = s("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  s("div", P4, [
                    (o(!0), i(B, null, ye(e.preview.commits, (P) => (o(), i("div", {
                      key: P.hash,
                      class: "commit-item"
                    }, [
                      s("span", R4, m(P.short_hash || P.hash.slice(0, 7)), 1),
                      s("span", D4, m(P.message), 1),
                      s("span", N4, m(P.date_relative || P.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                d.value ? (o(), i("div", L4, [
                  C[22] || (C[22] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (o(), i("details", U4, [
                    s("summary", null, [
                      C[19] || (C[19] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", O4, m(c.value) + " changes", 1)
                    ]),
                    s("div", A4, [
                      (o(!0), i(B, null, ye(e.preview.changes.workflows.added, (P) => (o(), i("div", {
                        key: "a-" + P,
                        class: "change-item add"
                      }, " + " + m(P), 1))), 128)),
                      (o(!0), i(B, null, ye(e.preview.changes.workflows.modified, (P) => (o(), i("div", {
                        key: "m-" + P,
                        class: "change-item modify"
                      }, [
                        x(" ~ " + m(P) + " ", 1),
                        k(P) ? (o(), i("span", z4, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (o(!0), i(B, null, ye(e.preview.changes.workflows.deleted, (P) => (o(), i("div", {
                        key: "d-" + P,
                        class: "change-item delete"
                      }, " - " + m(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (o(), i("details", F4, [
                    s("summary", null, [
                      C[20] || (C[20] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", V4, m(u.value) + " to install", 1)
                    ]),
                    s("div", B4, [
                      (o(!0), i(B, null, ye(e.preview.changes.nodes.to_install, (P) => (o(), i("div", {
                        key: P,
                        class: "change-item add"
                      }, " + " + m(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (o(), i("details", W4, [
                    s("summary", null, [
                      C[21] || (C[21] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", G4, m(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", j4, [
                      (o(!0), i(B, null, ye(e.preview.changes.models.referenced, (P) => (o(), i("div", {
                        key: P,
                        class: "change-item"
                      }, m(P), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                f.value ? (o(), R(b4, {
                  key: 2,
                  "conflict-count": v.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (o(), i("div", H4, [
                  C[27] || (C[27] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", q4, [
                    s("label", K4, [
                      Ot(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (P) => l.value = P),
                        value: "all"
                      }, null, 512), [
                        [Ko, l.value]
                      ]),
                      C[23] || (C[23] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", J4, [
                      Ot(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (P) => l.value = P),
                        value: "required"
                      }, null, 512), [
                        [Ko, l.value]
                      ]),
                      C[24] || (C[24] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", Q4, [
                      Ot(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[3] || (C[3] = (P) => l.value = P),
                        value: "skip"
                      }, null, 512), [
                        [Ko, l.value]
                      ]),
                      C[25] || (C[25] = s("span", null, "Skip model downloads", -1)),
                      C[26] || (C[26] = s("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  C[28] || (C[28] = s("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (o(), i("div", Y4, [
                  C[29] || (C[29] = s("span", { class: "icon" }, "✓", -1)),
                  x(" Already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            s("div", X4, [
              b(Pe, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (P) => S.$emit("close"))
              }, {
                default: h(() => [...C[30] || (C[30] = [
                  x(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (o(), i(B, { key: 0 }, [
                b(Pe, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: C[5] || (C[5] = (P) => $(!1))
                }, {
                  default: h(() => [...C[31] || (C[31] = [
                    x(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                b(Pe, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: C[6] || (C[6] = (P) => $(!0))
                }, {
                  default: h(() => [...C[32] || (C[32] = [
                    x(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (E = e.preview) != null && E.has_uncommitted_changes ? (o(), R(Pe, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: C[7] || (C[7] = (P) => $(!0))
              }, {
                default: h(() => [...C[33] || (C[33] = [
                  x(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (o(), i(B, { key: 2 }, [
                f.value && !w.value ? (o(), R(Pe, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (P) => a("openConflictResolution"))
                }, {
                  default: h(() => [
                    x(" Resolve Conflicts (" + m(p.value) + "/" + m(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (o(), R(Pe, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !g.value,
                  onClick: C[9] || (C[9] = (P) => $(!1))
                }, {
                  default: h(() => [...C[34] || (C[34] = [
                    x(" Pull Changes ", -1)
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
}), eI = /* @__PURE__ */ Te(Z4, [["__scopeId", "data-v-1d633bba"]]), tI = { class: "modal-header" }, sI = { class: "modal-title" }, nI = { class: "modal-body" }, oI = {
  key: 0,
  class: "error-box"
}, aI = {
  key: 1,
  class: "loading-state"
}, lI = {
  key: 2,
  class: "warning-box"
}, iI = {
  key: 1,
  class: "commits-section"
}, rI = { class: "commit-list" }, cI = { class: "commit-hash" }, uI = { class: "commit-message" }, dI = { class: "commit-date" }, mI = { class: "force-option" }, fI = { class: "checkbox-option" }, vI = { class: "commit-summary" }, pI = { key: 0 }, gI = { key: 1 }, hI = {
  key: 0,
  class: "info-box"
}, yI = {
  key: 2,
  class: "commits-section"
}, wI = { class: "commit-list" }, _I = { class: "commit-hash" }, kI = { class: "commit-message" }, bI = { class: "commit-date" }, $I = {
  key: 3,
  class: "up-to-date"
}, CI = { class: "modal-actions" }, xI = /* @__PURE__ */ Ee({
  __name: "PushModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pushing: { type: Boolean },
    error: {}
  },
  emits: ["close", "push", "pull-first", "revalidate"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(!1), r = _(!1), c = M(() => {
      var w;
      return ((w = n.preview) == null ? void 0 : w.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), u = M(
      () => c.value.models_without_sources.length
    ), d = M(
      () => c.value.nodes_without_provenance.length
    ), f = M(
      () => u.value + d.value
    ), v = M(() => f.value > 0);
    function p(w) {
      a("push", { force: w });
    }
    return (w, g) => {
      var k, $, S, C;
      return o(), i(B, null, [
        (o(), R(as, { to: "body" }, [
          e.show ? (o(), i("div", {
            key: 0,
            class: "modal-overlay",
            onClick: g[9] || (g[9] = (I) => w.$emit("close"))
          }, [
            s("div", {
              class: "modal-content",
              onClick: g[8] || (g[8] = bt(() => {
              }, ["stop"]))
            }, [
              s("div", tI, [
                s("h3", sI, "PUSH TO " + m(e.remoteName.toUpperCase()), 1),
                s("button", {
                  class: "modal-close",
                  onClick: g[0] || (g[0] = (I) => w.$emit("close"))
                }, "✕")
              ]),
              s("div", nI, [
                e.error ? (o(), i("div", oI, [
                  g[13] || (g[13] = s("span", { class: "error-icon" }, "!", -1)),
                  s("div", null, [
                    g[12] || (g[12] = s("strong", null, "Push failed", -1)),
                    s("p", null, m(e.error), 1)
                  ])
                ])) : y("", !0),
                e.loading ? (o(), i("div", aI, [...g[14] || (g[14] = [
                  s("span", { class: "spinner" }, "⟳", -1),
                  x(" Loading preview... ", -1)
                ])])) : (k = e.preview) != null && k.has_uncommitted_changes ? (o(), i("div", lI, [...g[15] || (g[15] = [
                  s("span", { class: "warning-icon" }, "!", -1),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "Commit your changes before pushing.")
                  ], -1)
                ])])) : ($ = e.preview) != null && $.remote_has_new_commits ? (o(), i(B, { key: 3 }, [
                  g[19] || (g[19] = s("div", { class: "warning-box" }, [
                    s("span", { class: "warning-icon" }, "!"),
                    s("div", null, [
                      s("strong", null, "REMOTE HAS NEW COMMITS"),
                      s("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                    ])
                  ], -1)),
                  v.value ? (o(), R(il, {
                    key: 0,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[1] || (g[1] = (I) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (o(), i("div", iI, [
                    g[16] || (g[16] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", rI, [
                      (o(!0), i(B, null, ye(e.preview.commits, (I) => (o(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", cI, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", uI, m(I.message), 1),
                        s("span", dI, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : y("", !0),
                  s("div", mI, [
                    s("label", fI, [
                      Ot(s("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": g[2] || (g[2] = (I) => l.value = I)
                      }, null, 512), [
                        [ia, l.value]
                      ]),
                      g[17] || (g[17] = s("span", null, "Force push (overwrite remote)", -1))
                    ]),
                    g[18] || (g[18] = s("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                  ])
                ], 64)) : e.preview ? (o(), i(B, { key: 4 }, [
                  s("div", vI, [
                    g[20] || (g[20] = s("span", { class: "icon" }, "📤", -1)),
                    e.preview.is_first_push ? (o(), i("span", pI, " Creating " + m(e.preview.remote) + "/" + m(e.preview.branch) + " with " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (o(), i("span", gI, " Pushing " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + m(e.preview.remote) + "/" + m(e.preview.branch), 1))
                  ]),
                  e.preview.is_first_push ? (o(), i("div", hI, [...g[21] || (g[21] = [
                    s("svg", {
                      class: "info-icon",
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      s("circle", {
                        cx: "8",
                        cy: "8",
                        r: "7",
                        stroke: "currentColor",
                        "stroke-width": "1.5",
                        fill: "none"
                      }),
                      s("text", {
                        x: "8",
                        y: "11",
                        "text-anchor": "middle",
                        "font-size": "10",
                        "font-weight": "bold",
                        fill: "currentColor"
                      }, "i")
                    ], -1),
                    s("span", null, "This will create the remote branch for the first time.", -1)
                  ])])) : y("", !0),
                  v.value ? (o(), R(il, {
                    key: 1,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[3] || (g[3] = (I) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (o(), i("div", yI, [
                    g[22] || (g[22] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", wI, [
                      (o(!0), i(B, null, ye(e.preview.commits, (I) => (o(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", _I, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", kI, m(I.message), 1),
                        s("span", bI, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : (o(), i("div", $I, [
                    g[23] || (g[23] = s("span", { class: "icon" }, "✓", -1)),
                    x(" Nothing to push - already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                  ]))
                ], 64)) : y("", !0)
              ]),
              s("div", CI, [
                b(Pe, {
                  variant: "secondary",
                  onClick: g[4] || (g[4] = (I) => w.$emit("close"))
                }, {
                  default: h(() => [...g[24] || (g[24] = [
                    x(" Cancel ", -1)
                  ])]),
                  _: 1
                }),
                (S = e.preview) != null && S.remote_has_new_commits ? (o(), i(B, { key: 0 }, [
                  b(Pe, {
                    variant: "secondary",
                    onClick: g[5] || (g[5] = (I) => w.$emit("pull-first"))
                  }, {
                    default: h(() => [...g[25] || (g[25] = [
                      x(" Pull First ", -1)
                    ])]),
                    _: 1
                  }),
                  b(Pe, {
                    variant: "destructive",
                    disabled: !l.value,
                    loading: e.pushing,
                    onClick: g[6] || (g[6] = (I) => p(!0))
                  }, {
                    default: h(() => [
                      x(m(v.value ? "Force Push Anyway" : "Force Push"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
                ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (o(), R(Pe, {
                  key: 1,
                  variant: "primary",
                  loading: e.pushing,
                  onClick: g[7] || (g[7] = (I) => p(!1))
                }, {
                  default: h(() => [
                    x(m(v.value ? "Push Anyway" : "Push"), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        r.value && ((C = e.preview) != null && C.warnings) ? (o(), R(Ml, {
          key: 0,
          warnings: e.preview.warnings,
          onClose: g[10] || (g[10] = (I) => r.value = !1),
          onRevalidate: g[11] || (g[11] = (I) => w.$emit("revalidate"))
        }, null, 8, ["warnings"])) : y("", !0)
      ], 64);
    };
  }
}), SI = /* @__PURE__ */ Te(xI, [["__scopeId", "data-v-7748bf33"]]), II = { class: "resolution-choice-group" }, EI = ["disabled"], TI = ["disabled"], MI = /* @__PURE__ */ Ee({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (o(), i("div", II, [
      s("button", {
        class: Be(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (a) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...n[2] || (n[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, EI),
      s("button", {
        class: Be(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (a) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...n[3] || (n[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, TI)
    ]));
  }
}), PI = /* @__PURE__ */ Te(MI, [["__scopeId", "data-v-985715ed"]]), RI = { class: "conflict-header" }, DI = { class: "conflict-info" }, NI = { class: "workflow-name" }, LI = { class: "conflict-description" }, UI = {
  key: 0,
  class: "resolved-badge"
}, OI = { class: "resolved-text" }, AI = { class: "conflict-hashes" }, zI = { class: "hash-item" }, FI = { class: "hash-item" }, VI = { class: "conflict-actions" }, BI = /* @__PURE__ */ Ee({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(n.resolution);
    $t(() => n.resolution, (d) => {
      l.value = d;
    }), $t(l, (d) => {
      d && a("resolve", d);
    });
    const r = M(() => l.value !== null), c = M(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = M(() => {
      switch (l.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (d, f) => {
      var v, p;
      return o(), i("div", {
        class: Be(["conflict-item", { resolved: r.value }])
      }, [
        s("div", RI, [
          f[2] || (f[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", DI, [
            s("code", NI, m(e.conflict.name) + ".json", 1),
            s("div", LI, m(c.value), 1)
          ]),
          r.value ? (o(), i("div", UI, [
            f[1] || (f[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", OI, m(u.value), 1)
          ])) : y("", !0)
        ]),
        s("div", AI, [
          s("span", zI, [
            f[3] || (f[3] = x("Your: ", -1)),
            s("code", null, m(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", FI, [
            f[4] || (f[4] = x("Theirs: ", -1)),
            s("code", null, m(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", VI, [
          b(PI, {
            modelValue: l.value,
            "onUpdate:modelValue": f[0] || (f[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), WI = /* @__PURE__ */ Te(BI, [["__scopeId", "data-v-506d3bbf"]]), GI = { class: "resolution-content" }, jI = {
  key: 0,
  class: "error-box"
}, HI = { class: "resolution-header" }, qI = { class: "header-stats" }, KI = { class: "stat" }, JI = { class: "stat-value" }, QI = { class: "stat resolved" }, YI = { class: "stat-value" }, XI = {
  key: 0,
  class: "stat pending"
}, ZI = { class: "stat-value" }, e6 = { class: "conflicts-list" }, t6 = {
  key: 1,
  class: "all-resolved-message"
}, s6 = /* @__PURE__ */ Ee({
  __name: "WorkflowResolutionModal",
  props: {
    workflowConflicts: {},
    resolutions: {},
    operationType: {},
    validating: { type: Boolean },
    error: {}
  },
  emits: ["close", "resolve", "apply"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = M(() => n.resolutions.size), r = M(() => n.workflowConflicts.length - l.value), c = M(() => l.value === n.workflowConflicts.length), u = M(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(w) {
      const g = n.resolutions.get(w);
      return (g == null ? void 0 : g.resolution) ?? null;
    }
    function f(w, g) {
      a("resolve", w, g);
    }
    function v() {
      a("close");
    }
    function p() {
      a("apply");
    }
    return (w, g) => (o(), R(Mt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        s("div", GI, [
          e.error ? (o(), i("div", jI, [
            g[1] || (g[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              g[0] || (g[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, m(e.error), 1)
            ])
          ])) : y("", !0),
          s("div", HI, [
            s("div", qI, [
              s("div", KI, [
                s("span", JI, m(e.workflowConflicts.length), 1),
                g[2] || (g[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", QI, [
                s("span", YI, m(l.value), 1),
                g[3] || (g[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (o(), i("div", XI, [
                s("span", ZI, m(r.value), 1),
                g[4] || (g[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            g[5] || (g[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", e6, [
            (o(!0), i(B, null, ye(e.workflowConflicts, (k) => (o(), R(WI, {
              key: k.name,
              conflict: k,
              resolution: d(k.name),
              onResolve: ($) => f(k.name, $)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (o(), i("div", t6, [
            g[6] || (g[6] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", null, 'All conflicts resolved! Click "' + m(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        b(Ue, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...g[7] || (g[7] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g[8] || (g[8] = s("div", { class: "footer-spacer" }, null, -1)),
        b(Ue, {
          variant: "primary",
          disabled: !c.value || e.validating,
          loading: e.validating,
          onClick: p
        }, {
          default: h(() => [
            x(m(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), n6 = /* @__PURE__ */ Te(s6, [["__scopeId", "data-v-c58d150d"]]), o6 = { class: "node-conflict-item" }, a6 = { class: "node-header" }, l6 = { class: "node-name" }, i6 = { class: "node-id" }, r6 = { class: "version-comparison" }, c6 = { class: "version yours" }, u6 = { class: "version theirs" }, d6 = { class: "chosen-version" }, m6 = { class: "chosen" }, f6 = { class: "chosen-reason" }, v6 = { class: "affected-workflows" }, p6 = { class: "wf-source" }, g6 = { class: "wf-version" }, h6 = /* @__PURE__ */ Ee({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, n) => (o(), i("div", o6, [
      s("div", a6, [
        s("code", l6, m(e.conflict.node_name), 1),
        s("span", i6, "(" + m(e.conflict.node_id) + ")", 1)
      ]),
      s("div", r6, [
        s("div", c6, [
          n[0] || (n[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, m(e.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", u6, [
          n[1] || (n[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, m(e.conflict.target_version), 1)
        ])
      ]),
      s("div", d6, [
        n[3] || (n[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", m6, m(e.conflict.chosen_version), 1),
        s("span", f6, m(e.conflict.chosen_reason), 1)
      ]),
      s("details", v6, [
        s("summary", null, " Affected workflows (" + m(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (o(!0), i(B, null, ye(e.conflict.affected_workflows, (a) => (o(), i("li", {
            key: a.name
          }, [
            s("code", null, m(a.name), 1),
            s("span", p6, "(" + m(a.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", g6, "needs v" + m(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), y6 = /* @__PURE__ */ Te(h6, [["__scopeId", "data-v-8b626725"]]), w6 = { class: "validation-content" }, _6 = {
  key: 0,
  class: "compatible-message"
}, k6 = { class: "conflicts-list" }, b6 = {
  key: 2,
  class: "warnings-section"
}, $6 = /* @__PURE__ */ Ee({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = M(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (o(), R(Mt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => a("cancel"))
    }, {
      body: h(() => [
        s("div", w6, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (o(), i("div", _6, [
            c[5] || (c[5] = s("span", { class: "icon" }, "✓", -1)),
            s("div", null, [
              c[4] || (c[4] = s("strong", null, "All clear!", -1)),
              s("p", null, "Your workflow choices are compatible. Ready to " + m(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (o(), i(B, { key: 1 }, [
            c[6] || (c[6] = s("div", { class: "warning-header" }, [
              s("span", { class: "icon" }, "⚠"),
              s("div", null, [
                s("strong", null, "Node Version Differences"),
                s("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            s("div", k6, [
              (o(!0), i(B, null, ye(e.validation.node_conflicts, (u) => (o(), R(y6, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (o(), i("div", b6, [
            c[8] || (c[8] = s("h4", null, "Warnings", -1)),
            s("ul", null, [
              (o(!0), i(B, null, ye(e.validation.warnings, (u, d) => (o(), i("li", { key: d }, m(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        b(Ue, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => a("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = s("div", { class: "footer-spacer" }, null, -1)),
        b(Ue, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => a("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            x(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        b(Ue, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => a("proceed"))
        }, {
          default: h(() => [
            x(m(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), C6 = /* @__PURE__ */ Te($6, [["__scopeId", "data-v-fefd26ed"]]), x6 = {
  key: 0,
  class: "embedded-toolbar"
}, S6 = { class: "embedded-toolbar-search" }, I6 = /* @__PURE__ */ Ee({
  __name: "RemotesSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["toast"],
  setup(e, { emit: t }) {
    const n = t, {
      getRemotes: a,
      addRemote: l,
      removeRemote: r,
      updateRemoteUrl: c,
      fetchRemote: u,
      getRemoteSyncStatus: d,
      getPullPreview: f,
      pullFromRemote: v,
      getPushPreview: p,
      pushToRemote: w,
      validateMerge: g
    } = mt(), k = _([]), $ = _({}), S = _(!1), C = _(null), I = _(""), E = _(!1), P = _(null), D = _(!1), A = _("add"), V = _({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), N = M(() => {
      if (!I.value.trim()) return k.value;
      const Fe = I.value.toLowerCase();
      return k.value.filter(
        (Ae) => Ae.name.toLowerCase().includes(Fe) || Ae.fetch_url.toLowerCase().includes(Fe) || Ae.push_url.toLowerCase().includes(Fe)
      );
    });
    async function j() {
      S.value = !0, C.value = null;
      try {
        const Fe = await a();
        k.value = Fe.remotes, await Promise.all(
          Fe.remotes.map(async (Ae) => {
            const Xe = await d(Ae.name);
            Xe && ($.value[Ae.name] = Xe);
          })
        );
      } catch (Fe) {
        C.value = Fe instanceof Error ? Fe.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function le() {
      A.value = "add", V.value = { name: "", fetchUrl: "", pushUrl: "" }, D.value = !0;
    }
    function ce(Fe) {
      const Ae = k.value.find((Xe) => Xe.name === Fe);
      Ae && (A.value = "edit", V.value = {
        name: Ae.name,
        fetchUrl: Ae.fetch_url,
        pushUrl: Ae.push_url
      }, D.value = !0);
    }
    async function Q(Fe) {
      try {
        A.value === "add" ? await l(Fe.name, Fe.fetchUrl) : await c(Fe.name, Fe.fetchUrl, Fe.pushUrl || void 0), D.value = !1, await j();
      } catch (Ae) {
        C.value = Ae instanceof Error ? Ae.message : "Operation failed";
      }
    }
    function ve() {
      D.value = !1, V.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function J(Fe) {
      P.value = Fe;
      try {
        await u(Fe);
        const Ae = await d(Fe);
        Ae && ($.value[Fe] = Ae), n("toast", `✓ Fetched from ${Fe}`, "success");
      } catch (Ae) {
        n("toast", Ae instanceof Error ? Ae.message : "Fetch failed", "error");
      } finally {
        P.value = null;
      }
    }
    async function L(Fe) {
      if (confirm(`Remove remote "${Fe}"?`))
        try {
          await r(Fe), await j();
        } catch (Ae) {
          C.value = Ae instanceof Error ? Ae.message : "Failed to remove remote";
        }
    }
    function F() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const ue = _("idle"), te = M(() => ue.value === "pull_preview"), me = M(
      () => ue.value === "resolving" || ue.value === "validating"
    ), de = M(
      () => ue.value === "validation_review" || ue.value === "executing"
    ), W = _(!1), se = _(null), ne = _(!1), Me = _(null), pe = _(null), ze = _(!1), Le = _(null), ke = _(null), De = _(/* @__PURE__ */ new Map()), ge = _(null), we = _(null), T = M(() => Le.value && Tc(Le.value) ? Le.value : null);
    async function O(Fe) {
      pe.value = Fe, ue.value = "pull_preview", ze.value = !0, Le.value = null, ke.value = null;
      try {
        Le.value = await f(Fe);
      } catch (Ae) {
        ke.value = Ae instanceof Error ? Ae.message : "Failed to load pull preview";
      } finally {
        ze.value = !1;
      }
    }
    function ae() {
      ue.value = "idle", Le.value = null, ke.value = null, pe.value = null;
    }
    async function Ie(Fe) {
      if (!pe.value) return;
      ue.value = "executing", ke.value = null;
      const Ae = pe.value;
      try {
        const Xe = await v(Ae, Fe);
        if (Xe.rolled_back) {
          ke.value = `Pull failed and was rolled back: ${Xe.error || "Unknown error"}`, ue.value = "pull_preview";
          return;
        }
        We(), ue.value = "idle", n("toast", `✓ Pulled from ${Ae}`, "success"), await j();
      } catch (Xe) {
        ke.value = Xe instanceof Error ? Xe.message : "Pull failed", ue.value = "pull_preview";
      }
    }
    function Ce() {
      T.value && (ue.value = "resolving", we.value = null);
    }
    function be(Fe, Ae) {
      De.value.set(Fe, { name: Fe, resolution: Ae });
    }
    function ee() {
      ue.value = "pull_preview";
    }
    async function H() {
      ue.value = "validating", we.value = null;
      try {
        const Fe = Array.from(De.value.values());
        ge.value = await g(pe.value, Fe), ue.value = "validation_review";
      } catch (Fe) {
        we.value = Fe instanceof Error ? Fe.message : "Validation failed", ue.value = "resolving";
      }
    }
    async function he() {
      ue.value = "executing";
      const Fe = pe.value;
      try {
        const Ae = Array.from(De.value.values()), Xe = await v(Fe, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Ae
        });
        if (Xe.rolled_back) {
          ke.value = `Pull failed and was rolled back: ${Xe.error || "Unknown error"}`, ue.value = "pull_preview";
          return;
        }
        We(), ue.value = "idle", n("toast", `✓ Pulled from ${Fe}`, "success"), await j();
      } catch (Ae) {
        ke.value = Ae instanceof Error ? Ae.message : "Pull failed", ue.value = "validation_review";
      }
    }
    function _e() {
      ue.value = "resolving";
    }
    function Ke() {
      We(), ue.value = "idle";
    }
    function We() {
      De.value.clear(), ge.value = null, we.value = null, ke.value = null, Le.value = null, pe.value = null;
    }
    async function xe(Fe) {
      pe.value = Fe, W.value = !0, ze.value = !0, se.value = null, Me.value = null;
      try {
        se.value = await p(Fe);
      } catch (Ae) {
        Me.value = Ae instanceof Error ? Ae.message : "Failed to load push preview";
      } finally {
        ze.value = !1;
      }
    }
    async function Z() {
      if (pe.value) {
        ze.value = !0, Me.value = null;
        try {
          se.value = await p(pe.value);
        } catch (Fe) {
          Me.value = Fe instanceof Error ? Fe.message : "Failed to refresh push preview";
        } finally {
          ze.value = !1;
        }
      }
    }
    function Ve() {
      W.value = !1, se.value = null, Me.value = null, pe.value = null;
    }
    async function Ne(Fe) {
      var Xe;
      if (!pe.value) return;
      ne.value = !0;
      const Ae = pe.value;
      Me.value = null;
      try {
        await w(Ae, Fe), Ve(), n("toast", `✓ Pushed to ${Ae}`, "success"), await j();
      } catch (kt) {
        const Lt = kt instanceof Error ? kt.message : "Push failed";
        Me.value = Lt, kt instanceof al && kt.status === 409 && ((Xe = kt.data) != null && Xe.needs_force) && se.value ? se.value = {
          ...se.value,
          remote_has_new_commits: !0,
          needs_force: !0,
          can_push: !0,
          block_reason: null
        } : n("toast", Lt, "error");
      } finally {
        ne.value = !1;
      }
    }
    function Qe() {
      const Fe = pe.value;
      Ve(), Fe && O(Fe);
    }
    return ut(j), (Fe, Ae) => (o(), i(B, null, [
      b(Ht, null, rs({
        content: h(() => [
          S.value ? (o(), R(zs, {
            key: 0,
            message: "Loading remotes..."
          })) : C.value ? (o(), R(Fs, {
            key: 1,
            message: C.value,
            retry: !0,
            onRetry: j
          }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
            e.embedded && !D.value ? (o(), i("div", x6, [
              s("div", S6, [
                b($n, {
                  modelValue: I.value,
                  "onUpdate:modelValue": Ae[2] || (Ae[2] = (Xe) => I.value = Xe),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: le
              }, {
                default: h(() => [...Ae[5] || (Ae[5] = [
                  x(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : y("", !0),
            D.value ? (o(), R(m4, {
              key: 1,
              mode: A.value,
              "remote-name": V.value.name,
              "fetch-url": V.value.fetchUrl,
              "push-url": V.value.pushUrl,
              onSubmit: Q,
              onCancel: ve
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            N.value.length && !D.value ? (o(), R(Nt, {
              key: 2,
              title: "REMOTES",
              count: N.value.length
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye(N.value, (Xe) => (o(), R(Z5, {
                  key: Xe.name,
                  remote: Xe,
                  "sync-status": $.value[Xe.name],
                  "fetching-remote": P.value,
                  onFetch: J,
                  onEdit: ce,
                  onRemove: L,
                  onPull: O,
                  onPush: xe
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !N.value.length && !D.value ? (o(), R(Es, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                b(Pe, {
                  variant: "primary",
                  onClick: le
                }, {
                  default: h(() => [...Ae[6] || (Ae[6] = [
                    x(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(qt, {
              title: "GIT REMOTES",
              "show-info": !0,
              onInfoClick: Ae[0] || (Ae[0] = (Xe) => E.value = !0)
            }, {
              actions: h(() => [
                D.value ? y("", !0) : (o(), R(Pe, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: le
                }, {
                  default: h(() => [...Ae[4] || (Ae[4] = [
                    x(" + Add Remote ", -1)
                  ])]),
                  _: 1
                }))
              ]),
              _: 1
            })
          ]),
          key: "0"
        },
        e.embedded ? void 0 : {
          name: "search",
          fn: h(() => [
            D.value ? y("", !0) : (o(), R($n, {
              key: 0,
              modelValue: I.value,
              "onUpdate:modelValue": Ae[1] || (Ae[1] = (Xe) => I.value = Xe),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      b(_s, {
        show: E.value,
        title: "About Git Remotes",
        onClose: Ae[3] || (Ae[3] = (Xe) => E.value = !1)
      }, {
        content: h(() => [...Ae[7] || (Ae[7] = [
          s("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          s("p", null, [
            x(" The "),
            s("strong", null, '"origin"'),
            x(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          b(Pe, {
            variant: "link",
            onClick: F
          }, {
            default: h(() => [...Ae[8] || (Ae[8] = [
              x(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b(eI, {
        show: te.value,
        "remote-name": pe.value || "",
        preview: Le.value,
        loading: ze.value,
        pulling: ue.value === "executing",
        error: ke.value,
        "conflict-resolutions": De.value,
        onClose: ae,
        onPull: Ie,
        onOpenConflictResolution: Ce
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      b(SI, {
        show: W.value,
        "remote-name": pe.value || "",
        preview: se.value,
        loading: ze.value,
        pushing: ne.value,
        error: Me.value,
        onClose: Ve,
        onPush: Ne,
        onPullFirst: Qe,
        onRevalidate: Z
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      me.value && T.value ? (o(), R(n6, {
        key: 0,
        "workflow-conflicts": T.value.workflow_conflicts,
        resolutions: De.value,
        "operation-type": "pull",
        validating: ue.value === "validating",
        error: we.value,
        onClose: ee,
        onResolve: be,
        onApply: H
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      de.value && ge.value ? (o(), R(C6, {
        key: 1,
        validation: ge.value,
        "operation-type": "pull",
        executing: ue.value === "executing",
        onProceed: he,
        onGoBack: _e,
        onCancel: Ke
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), E6 = /* @__PURE__ */ Te(I6, [["__scopeId", "data-v-a6651a66"]]), T6 = /* @__PURE__ */ Ee({
  __name: "VersionControlSection",
  props: {
    commits: {},
    currentRef: {},
    branches: {},
    current: {},
    initialTab: {}
  },
  emits: ["select", "checkout", "switch", "create", "delete", "toast"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = [
      { id: "remotes", label: "Remotes" },
      { id: "history", label: "History" },
      { id: "branches", label: "Branches" }
    ], r = _(n.initialTab ?? "remotes");
    return $t(() => n.initialTab, (c) => {
      c && (r.value = c);
    }), (c, u) => (o(), R(Ht, null, {
      header: h(() => [
        b(qt, { title: "VERSION CONTROL" })
      ]),
      search: h(() => [
        b(Ll, {
          modelValue: r.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => r.value = d),
          tabs: l
        }, null, 8, ["modelValue"])
      ]),
      content: h(() => [
        r.value === "history" ? (o(), R(m5, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: u[1] || (u[1] = (d) => a("select", d)),
          onCheckout: u[2] || (u[2] = (d) => a("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (o(), R(U5, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: u[3] || (u[3] = (d) => a("switch", d)),
          onCreate: u[4] || (u[4] = (d) => a("create", d)),
          onDelete: u[5] || (u[5] = (d) => a("delete", d))
        }, null, 8, ["branches", "current"])) : (o(), R(E6, {
          key: 2,
          embedded: "",
          onToast: u[6] || (u[6] = (d, f) => a("toast", d, f))
        }))
      ]),
      _: 1
    }));
  }
}), M6 = { class: "text-viewer-wrapper" }, P6 = ["disabled", "title"], R6 = { class: "text-content" }, D6 = /* @__PURE__ */ Ee({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const t = e, n = _(null), a = _("idle");
    async function l() {
      if (t.content)
        try {
          await Rl(t.content), a.value = "copied", setTimeout(() => {
            a.value = "idle";
          }, 2e3);
        } catch (u) {
          console.error("Failed to copy text:", u);
        }
    }
    function r(u) {
      (u.ctrlKey || u.metaKey) && u.key === "c" && u.stopPropagation();
    }
    function c(u) {
      u.stopPropagation();
    }
    return (u, d) => (o(), i("div", M6, [
      s("div", {
        ref_key: "textOutputElement",
        ref: n,
        class: "text-output",
        tabindex: "0",
        onKeydown: r,
        onCopy: c
      }, [
        s("button", {
          class: "copy-overlay-btn",
          onClick: l,
          disabled: a.value !== "idle",
          title: a.value === "copied" ? "Copied!" : "Copy text"
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, P6),
        s("pre", R6, m(e.content), 1)
      ], 544)
    ]));
  }
}), N6 = /* @__PURE__ */ Te(D6, [["__scopeId", "data-v-85a537ba"]]), L6 = {
  key: 1,
  class: "manifest-viewer-shell"
}, U6 = { class: "manifest-path" }, O6 = /* @__PURE__ */ Ee({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: t } = mt(), n = _(!1), a = _(null), l = _(!1), r = _({
      path: "",
      exists: !1,
      content: ""
    });
    async function c() {
      n.value = !0, a.value = null;
      try {
        r.value = await t();
      } catch (u) {
        a.value = u instanceof Error ? u.message : "Failed to load manifest";
      } finally {
        n.value = !1;
      }
    }
    return ut(c), (u, d) => (o(), i(B, null, [
      b(Ht, null, rs({
        content: h(() => [
          n.value ? (o(), R(zs, {
            key: 0,
            message: "Loading manifest..."
          })) : a.value ? (o(), R(Fs, {
            key: 1,
            message: a.value,
            retry: !0,
            onRetry: c
          }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
            !r.value.exists || !r.value.content ? (o(), R(Es, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (o(), i("div", L6, [
              b(N6, {
                content: r.value.content
              }, null, 8, ["content"])
            ]))
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(qt, {
              title: "MANIFEST (PYPROJECT.TOML)",
              "show-info": !0,
              onInfoClick: d[0] || (d[0] = (f) => l.value = !0)
            }, {
              actions: h(() => [
                b(Pe, {
                  variant: "secondary",
                  size: "sm",
                  onClick: c,
                  disabled: n.value
                }, {
                  default: h(() => [
                    x(m(n.value ? "Loading..." : "Refresh"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          key: "0"
        }
      ]), 1024),
      b(_s, {
        show: l.value,
        title: "About Manifest View",
        onClose: d[2] || (d[2] = (f) => l.value = !1)
      }, {
        content: h(() => [
          d[3] || (d[3] = s("p", null, [
            x(" This view shows the live "),
            s("strong", null, "pyproject.toml"),
            x(" from the current environment's "),
            s("strong", null, ".cec"),
            x(" directory. ")
          ], -1)),
          d[4] || (d[4] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " It is read-only and intended for quick inspection and debugging without leaving the ComfyGit panel. ", -1)),
          d[5] || (d[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Path: ", -1)),
          s("div", U6, [
            s("code", null, m(r.value.path || "unknown"), 1)
          ]),
          d[6] || (d[6] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, null, -1))
        ]),
        actions: h(() => [
          b(Pe, {
            variant: "primary",
            onClick: d[1] || (d[1] = (f) => l.value = !1)
          }, {
            default: h(() => [...d[7] || (d[7] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), A6 = /* @__PURE__ */ Te(O6, [["__scopeId", "data-v-814a8fdd"]]), z6 = { class: "log-viewer-wrapper" }, F6 = ["disabled", "title"], V6 = /* @__PURE__ */ Ee({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const t = e, n = _(null), a = _("idle"), l = M(() => t.logs.map((f) => ({
      text: t.rawFormat || !f.timestamp ? f.message : `${f.timestamp} - ${f.name} - ${f.level} - ${f.func}:${f.line} - ${f.message}`,
      level: f.level
    })));
    async function r() {
      var v;
      await Gt();
      const f = (v = n.value) == null ? void 0 : v.closest(".panel-layout-content");
      f && (f.scrollTop = f.scrollHeight);
    }
    ut(r), $t(() => t.logs, r);
    async function c() {
      if (l.value.length === 0) return;
      const f = l.value.map((v) => v.text).join(`
`);
      try {
        await Rl(f), a.value = "copied", setTimeout(() => {
          a.value = "idle";
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy logs:", v);
      }
    }
    function u(f) {
      (f.ctrlKey || f.metaKey) && f.key === "c" && f.stopPropagation();
    }
    function d(f) {
      f.stopPropagation();
    }
    return (f, v) => (o(), i("div", z6, [
      s("div", {
        ref_key: "logOutputElement",
        ref: n,
        class: "log-output",
        onKeydown: u,
        onCopy: d,
        tabindex: "0"
      }, [
        s("button", {
          class: "copy-overlay-btn",
          onClick: c,
          disabled: a.value !== "idle",
          title: a.value === "copied" ? "Copied!" : "Copy all logs"
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, F6),
        (o(!0), i(B, null, ye(l.value, (p, w) => (o(), i("div", {
          key: w,
          class: Be(`log-line log-level-${p.level.toLowerCase()}`)
        }, m(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), Mc = /* @__PURE__ */ Te(V6, [["__scopeId", "data-v-5aaf1b88"]]), B6 = /* @__PURE__ */ Ee({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: t, getStatus: n, getEnvironmentLogPath: a, openFile: l } = mt(), r = _([]), c = _(!1), u = _(null), d = _(!1), f = _("production"), v = _(null), p = _(!1);
    async function w() {
      c.value = !0, u.value = null;
      try {
        r.value = await t(void 0, 500);
        try {
          const $ = await n();
          f.value = $.environment || "production";
        } catch {
        }
      } catch ($) {
        u.value = $ instanceof Error ? $.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
      }
    }
    async function g() {
      try {
        const $ = await a();
        $.exists && (v.value = $.path);
      } catch {
      }
    }
    async function k() {
      if (v.value) {
        p.value = !0;
        try {
          await l(v.value);
        } catch ($) {
          console.error("Failed to open log file:", $);
        } finally {
          p.value = !1;
        }
      }
    }
    return ut(() => {
      w(), g();
    }), ($, S) => (o(), i(B, null, [
      b(Ht, null, rs({
        content: h(() => [
          c.value ? (o(), R(zs, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (o(), R(Fs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
            r.value.length === 0 ? (o(), R(Es, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), R(Mc, {
              key: 1,
              logs: r.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(qt, {
              title: "DEBUG (ENVIRONMENT LOGS)",
              "show-info": !0,
              onInfoClick: S[0] || (S[0] = (C) => d.value = !0)
            }, {
              actions: h(() => [
                b(Pe, {
                  variant: "secondary",
                  size: "sm",
                  onClick: k,
                  disabled: !v.value || p.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    x(m(p.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                b(Pe, {
                  variant: "secondary",
                  size: "sm",
                  onClick: w,
                  disabled: c.value
                }, {
                  default: h(() => [
                    x(m(c.value ? "Loading..." : "Refresh"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          key: "0"
        }
      ]), 1024),
      b(_s, {
        show: d.value,
        title: "About Environment Logs",
        onClose: S[2] || (S[2] = (C) => d.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            S[3] || (S[3] = x(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            s("strong", null, m(f.value), 1),
            S[4] || (S[4] = x(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          S[5] || (S[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            x(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            x(" Potential issues or important notices"),
            s("br"),
            s("strong", null, "INFO:"),
            x(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            x(" Detailed debugging information ")
          ], -1))
        ]),
        actions: h(() => [
          b(Pe, {
            variant: "primary",
            onClick: S[1] || (S[1] = (C) => d.value = !1)
          }, {
            default: h(() => [...S[6] || (S[6] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Li = /* @__PURE__ */ Ee({
  __name: "WorkspaceDebugSection",
  props: {
    embedded: { type: Boolean },
    initialTab: {}
  },
  setup(e) {
    const {
      getWorkspaceLogs: t,
      getWorkspaceLogPath: n,
      getOrchestratorLogs: a,
      getOrchestratorLogPath: l,
      openFile: r
    } = mt(), c = e, u = _(c.initialTab ?? "workspace"), d = _([]), f = _(!1), v = _(null), p = _(!1), w = _(null), g = _(null), k = _(!1), $ = M(() => u.value === "workspace" ? w.value : g.value);
    async function S() {
      f.value = !0, v.value = null;
      try {
        u.value === "workspace" ? d.value = await t(void 0, 500) : d.value = await a(void 0, 500);
      } catch (E) {
        v.value = E instanceof Error ? E.message : `Failed to load ${u.value} logs`;
      } finally {
        f.value = !1;
      }
    }
    async function C() {
      try {
        const [E, P] = await Promise.all([
          n(),
          l()
        ]);
        E.exists && (w.value = E.path), P.exists && (g.value = P.path);
      } catch {
      }
    }
    async function I() {
      if ($.value) {
        k.value = !0;
        try {
          await r($.value);
        } catch (E) {
          console.error("Failed to open log file:", E);
        } finally {
          k.value = !1;
        }
      }
    }
    return $t(u, () => {
      S();
    }), $t(() => c.initialTab, (E) => {
      E && (u.value = E);
    }), ut(() => {
      S(), C();
    }), (E, P) => (o(), i(B, null, [
      b(Ht, null, rs({
        content: h(() => [
          f.value ? (o(), R(zs, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : v.value ? (o(), R(Fs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
            d.value.length === 0 ? (o(), R(Es, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (o(), R(Mc, {
              key: 1,
              logs: d.value,
              "raw-format": u.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(qt, {
              title: "DEBUG (LOGS)",
              "show-info": !0,
              onInfoClick: P[0] || (P[0] = (D) => p.value = !0)
            }, {
              actions: h(() => [
                b(Pe, {
                  variant: "secondary",
                  size: "sm",
                  onClick: I,
                  disabled: !$.value || k.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    x(m(k.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                b(Pe, {
                  variant: "secondary",
                  size: "sm",
                  onClick: S,
                  disabled: f.value
                }, {
                  default: h(() => [
                    x(m(f.value ? "Loading..." : "Refresh"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          key: "0"
        },
        e.embedded ? void 0 : {
          name: "search",
          fn: h(() => [
            b(Ll, {
              modelValue: u.value,
              "onUpdate:modelValue": P[1] || (P[1] = (D) => u.value = D),
              tabs: [
                { id: "workspace", label: "Workspace" },
                { id: "orchestrator", label: "Orchestrator" }
              ]
            }, null, 8, ["modelValue"])
          ]),
          key: "1"
        }
      ]), 1024),
      b(_s, {
        show: p.value,
        title: "About Logs",
        onClose: P[3] || (P[3] = (D) => p.value = !1)
      }, {
        content: h(() => [...P[4] || (P[4] = [
          s("p", null, [
            s("strong", null, "Workspace Logs:"),
            x(" System-level events for the entire ComfyGit workspace, including operations that affect multiple environments. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Orchestrator Logs:"),
            x(" Process management events including ComfyUI startup, restarts, environment switches, and any errors during handoff. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            x(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            x(" Potential issues or deprecated features"),
            s("br"),
            s("strong", null, "INFO:"),
            x(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            x(" Detailed debugging information ")
          ], -1)
        ])]),
        actions: h(() => [
          b(Pe, {
            variant: "primary",
            onClick: P[2] || (P[2] = (D) => p.value = !1)
          }, {
            default: h(() => [...P[5] || (P[5] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), W6 = /* @__PURE__ */ Ee({
  __name: "DiagnosticsSection",
  props: {
    initialTab: {}
  },
  setup(e) {
    const t = e, n = [
      { id: "env", label: "Environment" },
      { id: "workspace", label: "Workspace" },
      { id: "orchestrator", label: "Orchestrator" }
    ], a = _(t.initialTab ?? "manifest"), l = _(
      t.initialTab && t.initialTab !== "manifest" ? t.initialTab : "env"
    ), r = _(!1), c = M(() => a.value === "manifest" ? "MANIFEST" : "LOGGING"), u = M(() => a.value === "manifest" ? "About Manifest" : "About Logging");
    return $t(() => t.initialTab, (d) => {
      d && (a.value = d, d !== "manifest" && (l.value = d));
    }), $t(l, (d) => {
      a.value !== "manifest" && (a.value = d);
    }), (d, f) => (o(), i(B, null, [
      b(Ht, null, rs({
        header: h(() => [
          b(qt, {
            title: c.value,
            "show-info": !0,
            onInfoClick: f[0] || (f[0] = (v) => r.value = !0)
          }, null, 8, ["title"])
        ]),
        content: h(() => [
          a.value === "manifest" ? (o(), R(A6, {
            key: 0,
            embedded: ""
          })) : l.value === "env" ? (o(), R(B6, {
            key: 1,
            embedded: ""
          })) : l.value === "workspace" ? (o(), R(Li, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (o(), R(Li, {
            key: 3,
            embedded: "",
            "initial-tab": "orchestrator"
          }))
        ]),
        _: 2
      }, [
        a.value !== "manifest" ? {
          name: "search",
          fn: h(() => [
            b(Ll, {
              modelValue: l.value,
              "onUpdate:modelValue": f[1] || (f[1] = (v) => l.value = v),
              tabs: n
            }, null, 8, ["modelValue"])
          ]),
          key: "0"
        } : void 0
      ]), 1024),
      b(_s, {
        show: r.value,
        title: u.value,
        "max-width": "520px",
        onClose: f[3] || (f[3] = (v) => r.value = !1)
      }, {
        content: h(() => [
          a.value === "manifest" ? (o(), i(B, { key: 0 }, [
            f[4] || (f[4] = s("p", null, [
              s("strong", null, "Manifest"),
              x(" shows the live "),
              s("strong", null, "pyproject.toml"),
              x(" from the current environment's "),
              s("strong", null, ".cec"),
              x(" directory. ")
            ], -1)),
            f[5] || (f[5] = s("p", null, " Use it to inspect the environment state ComfyGit is tracking, including workflows, models, nodes, and workflow execution contracts. ", -1)),
            f[6] || (f[6] = s("p", null, " The manifest is read-only here. Change environment state through the manager actions or CLI, then commit the resulting manifest changes. ", -1))
          ], 64)) : (o(), i(B, { key: 1 }, [
            f[7] || (f[7] = s("p", null, [
              s("strong", null, "Logging"),
              x(" groups read-only logs for the current environment, workspace, and orchestrator. ")
            ], -1)),
            f[8] || (f[8] = s("p", null, [
              s("strong", null, "Environment"),
              x(" logs help debug workflow execution, model resolution, node installation, and other environment-local behavior. ")
            ], -1)),
            f[9] || (f[9] = s("p", null, [
              s("strong", null, "Workspace"),
              x(" logs show workspace-wide events that affect more than one environment. ")
            ], -1)),
            f[10] || (f[10] = s("p", null, [
              s("strong", null, "Orchestrator"),
              x(" logs show supervisor and handoff behavior for environment creation, switching, restarts, and process management. ")
            ], -1))
          ], 64))
        ]),
        actions: h(() => [
          b(Pe, {
            variant: "primary",
            size: "sm",
            onClick: f[2] || (f[2] = (v) => r.value = !1)
          }, {
            default: h(() => [...f[11] || (f[11] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show", "title"])
    ], 64));
  }
}), G6 = { class: "header-info" }, j6 = { class: "commit-hash" }, H6 = {
  key: 0,
  class: "commit-refs"
}, q6 = { class: "commit-message" }, K6 = { class: "commit-date" }, J6 = {
  key: 0,
  class: "loading"
}, Q6 = {
  key: 1,
  class: "changes-section"
}, Y6 = { class: "stats-row" }, X6 = { class: "stat" }, Z6 = { class: "stat insertions" }, eE = { class: "stat deletions" }, tE = {
  key: 0,
  class: "change-group"
}, sE = {
  key: 1,
  class: "change-group"
}, nE = {
  key: 0,
  class: "version"
}, oE = {
  key: 2,
  class: "change-group"
}, aE = { class: "change-item" }, lE = /* @__PURE__ */ Ee({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const t = e, { getCommitDetail: n } = mt(), a = _(null), l = _(!0), r = M(() => {
      if (!a.value) return !1;
      const u = a.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = M(() => {
      if (!a.value) return !1;
      const u = a.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return ut(async () => {
      try {
        a.value = await n(t.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (o(), R(Mt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (f) => u.$emit("close"))
    }, {
      header: h(() => {
        var f, v, p, w;
        return [
          s("div", G6, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", j6, m(((f = a.value) == null ? void 0 : f.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (p = a.value) == null ? void 0 : p.refs) != null && w.length ? (o(), i("span", H6, [
              (o(!0), i(B, null, ye(a.value.refs, (g) => (o(), i("span", {
                key: g,
                class: "ref-badge"
              }, m(g), 1))), 128))
            ])) : y("", !0)
          ]),
          b(Ue, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (g) => u.$emit("close"))
          }, {
            default: h(() => [...d[5] || (d[5] = [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])]),
            _: 1
          })
        ];
      }),
      body: h(() => {
        var f, v;
        return [
          s("div", q6, m(((f = a.value) == null ? void 0 : f.message) || e.commit.message), 1),
          s("div", K6, m(((v = a.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (o(), i("div", J6, "Loading details...")) : a.value ? (o(), i("div", Q6, [
            s("div", Y6, [
              s("span", X6, m(a.value.stats.files_changed) + " files", 1),
              s("span", Z6, "+" + m(a.value.stats.insertions), 1),
              s("span", eE, "-" + m(a.value.stats.deletions), 1)
            ]),
            r.value ? (o(), i("div", tE, [
              b(_n, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  x("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), i(B, null, ye(a.value.changes.workflows.added, (p) => (o(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                d[7] || (d[7] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (o(!0), i(B, null, ye(a.value.changes.workflows.modified, (p) => (o(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = s("span", { class: "change-icon" }, "~", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (o(!0), i(B, null, ye(a.value.changes.workflows.deleted, (p) => (o(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (o(), i("div", sE, [
              b(_n, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  x("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), i(B, null, ye(a.value.changes.nodes.added, (p) => (o(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p.name), 1),
                p.version ? (o(), i("span", nE, "(" + m(p.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (o(!0), i(B, null, ye(a.value.changes.nodes.removed, (p) => (o(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p.name), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.changes.models.resolved > 0 ? (o(), i("div", oE, [
              b(_n, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  x("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", aE, [
                d[14] || (d[14] = s("span", { class: "change-icon" }, "●", -1)),
                s("span", null, m(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        b(Ue, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (f) => u.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            x(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        b(Ue, {
          variant: "primary",
          onClick: d[2] || (d[2] = (f) => u.$emit("checkout", e.commit))
        }, {
          default: h(() => [...d[16] || (d[16] = [
            x(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), iE = /* @__PURE__ */ Te(lE, [["__scopeId", "data-v-d256ff6d"]]), rE = { class: "popover-header" }, cE = { class: "popover-body" }, uE = {
  key: 0,
  class: "changes-summary"
}, dE = {
  key: 0,
  class: "change-item"
}, mE = {
  key: 1,
  class: "change-item"
}, fE = {
  key: 2,
  class: "change-item"
}, vE = {
  key: 3,
  class: "change-item"
}, pE = {
  key: 4,
  class: "change-item"
}, gE = {
  key: 5,
  class: "change-item"
}, hE = {
  key: 1,
  class: "no-changes"
}, yE = {
  key: 2,
  class: "loading"
}, wE = {
  key: 3,
  class: "issues-error"
}, _E = { class: "error-header" }, kE = { class: "error-title" }, bE = { class: "issues-list" }, $E = { class: "workflow-state" }, CE = { class: "message-section" }, xE = { class: "popover-footer" }, SE = {
  key: 1,
  class: "commit-popover"
}, IE = { class: "popover-header" }, EE = { class: "popover-body" }, TE = {
  key: 0,
  class: "changes-summary"
}, ME = {
  key: 0,
  class: "change-item"
}, PE = {
  key: 1,
  class: "change-item"
}, RE = {
  key: 2,
  class: "change-item"
}, DE = {
  key: 3,
  class: "change-item"
}, NE = {
  key: 4,
  class: "change-item"
}, LE = {
  key: 5,
  class: "change-item"
}, UE = {
  key: 1,
  class: "no-changes"
}, OE = {
  key: 2,
  class: "loading"
}, AE = {
  key: 3,
  class: "issues-error"
}, zE = { class: "error-header" }, FE = { class: "error-title" }, VE = { class: "issues-list" }, BE = { class: "workflow-state" }, WE = { class: "message-section" }, GE = { class: "popover-footer" }, jE = /* @__PURE__ */ Ee({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { commit: l } = mt(), r = _(""), c = _(!1), u = _(!1), d = M(() => {
      if (!n.status) return !1;
      const k = n.status.workflows;
      return k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || n.status.has_changes;
    }), f = M(() => {
      if (!n.status) return !1;
      const k = n.status.workflows, $ = n.status.git_changes;
      return k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || $.nodes_added.length > 0 || $.nodes_removed.length > 0;
    }), v = M(() => {
      var k;
      return (k = n.status) != null && k.workflows.analyzed ? n.status.workflows.analyzed.filter(($) => $.has_issues) : [];
    }), p = M(() => v.value.length > 0), w = M(() => p.value && !u.value);
    async function g() {
      var k, $, S, C;
      if (!(p.value && !u.value) && !(!d.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const I = await l(r.value.trim(), u.value);
          if (I.status === "success") {
            const E = `Committed: ${((k = I.summary) == null ? void 0 : k.new) || 0} new, ${(($ = I.summary) == null ? void 0 : $.modified) || 0} modified, ${((S = I.summary) == null ? void 0 : S.deleted) || 0} deleted`;
            a("committed", { success: !0, message: E });
          } else if (I.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (I.status === "blocked") {
            const E = ((C = I.issues) == null ? void 0 : C.map((P) => `${P.name}: ${P.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${E}. Enable "Allow issues" to force.` });
          } else
            a("committed", { success: !1, message: I.message || "Commit failed" });
        } catch (I) {
          a("committed", { success: !1, message: I instanceof Error ? I.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (k, $) => e.asModal ? (o(), R(as, {
      key: 0,
      to: "body"
    }, [
      s("div", {
        class: "modal-overlay",
        onClick: $[5] || ($[5] = (S) => a("close"))
      }, [
        s("div", {
          class: "commit-popover modal",
          onClick: $[4] || ($[4] = bt(() => {
          }, ["stop"]))
        }, [
          s("div", rE, [
            $[11] || ($[11] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            s("button", {
              class: "close-btn",
              onClick: $[0] || ($[0] = (S) => a("close"))
            }, [...$[10] || ($[10] = [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ]),
          s("div", cE, [
            e.status && d.value ? (o(), i("div", uE, [
              e.status.workflows.new.length ? (o(), i("div", dE, [
                $[12] || ($[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (o(), i("div", mE, [
                $[13] || ($[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (o(), i("div", fE, [
                $[14] || ($[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (o(), i("div", vE, [
                $[15] || ($[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (o(), i("div", pE, [
                $[16] || ($[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              f.value ? y("", !0) : (o(), i("div", gE, [...$[17] || ($[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (o(), i("div", hE, " No changes to commit ")) : (o(), i("div", yE, " Loading... ")),
            p.value ? (o(), i("div", wE, [
              s("div", _E, [
                $[18] || ($[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", kE, m(v.value.length) + " workflow(s) have issues", 1)
              ]),
              s("div", bE, [
                (o(!0), i(B, null, ye(v.value, (S) => (o(), i("div", {
                  key: S.name,
                  class: "issue-item"
                }, [
                  s("strong", null, m(S.name), 1),
                  s("span", $E, "(" + m(S.sync_state) + ")", 1),
                  x(": " + m(S.issue_summary), 1)
                ]))), 128))
              ]),
              b(ca, {
                modelValue: u.value,
                "onUpdate:modelValue": $[1] || ($[1] = (S) => u.value = S),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...$[19] || ($[19] = [
                  x(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            s("div", CE, [
              b(An, {
                modelValue: r.value,
                "onUpdate:modelValue": $[2] || ($[2] = (S) => r.value = S),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: g,
                onSubmit: g
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          s("div", xE, [
            b(Ue, {
              variant: "secondary",
              onClick: $[3] || ($[3] = (S) => a("close"))
            }, {
              default: h(() => [...$[20] || ($[20] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Ue, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !r.value.trim() || c.value || w.value,
              loading: c.value,
              onClick: g
            }, {
              default: h(() => [
                x(m(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), i("div", SE, [
      s("div", IE, [
        $[22] || ($[22] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        s("button", {
          class: "close-btn",
          onClick: $[6] || ($[6] = (S) => a("close"))
        }, [...$[21] || ($[21] = [
          s("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
          ], -1)
        ])])
      ]),
      s("div", EE, [
        e.status && d.value ? (o(), i("div", TE, [
          e.status.workflows.new.length ? (o(), i("div", ME, [
            $[23] || ($[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (o(), i("div", PE, [
            $[24] || ($[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (o(), i("div", RE, [
            $[25] || ($[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (o(), i("div", DE, [
            $[26] || ($[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (o(), i("div", NE, [
            $[27] || ($[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          f.value ? y("", !0) : (o(), i("div", LE, [...$[28] || ($[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (o(), i("div", UE, " No changes to commit ")) : (o(), i("div", OE, " Loading... ")),
        p.value ? (o(), i("div", AE, [
          s("div", zE, [
            $[29] || ($[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", FE, m(v.value.length) + " workflow(s) have issues", 1)
          ]),
          s("div", VE, [
            (o(!0), i(B, null, ye(v.value, (S) => (o(), i("div", {
              key: S.name,
              class: "issue-item"
            }, [
              s("strong", null, m(S.name), 1),
              s("span", BE, "(" + m(S.sync_state) + ")", 1),
              x(": " + m(S.issue_summary), 1)
            ]))), 128))
          ]),
          b(ca, {
            modelValue: u.value,
            "onUpdate:modelValue": $[7] || ($[7] = (S) => u.value = S),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...$[30] || ($[30] = [
              x(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        s("div", WE, [
          b(An, {
            modelValue: r.value,
            "onUpdate:modelValue": $[8] || ($[8] = (S) => r.value = S),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: g,
            onSubmit: g
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      s("div", GE, [
        b(Ue, {
          variant: "secondary",
          onClick: $[9] || ($[9] = (S) => a("close"))
        }, {
          default: h(() => [...$[31] || ($[31] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(Ue, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !r.value.trim() || c.value || w.value,
          loading: c.value,
          onClick: g
        }, {
          default: h(() => [
            x(m(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Pc = /* @__PURE__ */ Te(jE, [["__scopeId", "data-v-5f897631"]]), HE = { class: "switch-body" }, qE = { class: "switch-message" }, KE = { class: "switch-details" }, JE = /* @__PURE__ */ Ee({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, n) => e.show ? (o(), R(Mt, {
      key: 0,
      title: "Confirm Environment Switch",
      size: "md",
      "overlay-z-index": 10005,
      onClose: n[2] || (n[2] = (a) => t.$emit("close"))
    }, {
      body: h(() => [
        s("div", HE, [
          s("p", qE, [
            n[3] || (n[3] = x(" Switch from ", -1)),
            s("strong", null, m(e.fromEnvironment), 1),
            n[4] || (n[4] = x(" to ", -1)),
            s("strong", null, m(e.toEnvironment), 1),
            n[5] || (n[5] = x("? ", -1))
          ]),
          n[6] || (n[6] = s("div", { class: "warning-box" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "This will restart ComfyUI")
          ], -1)),
          s("p", KE, ' Your current work will be preserved. You can switch back to "' + m(e.fromEnvironment) + '" anytime. ', 1),
          n[7] || (n[7] = s("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
        ])
      ]),
      footer: h(() => [
        b(Pe, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (a) => t.$emit("close"))
        }, {
          default: h(() => [...n[8] || (n[8] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(Pe, {
          variant: "primary",
          onClick: n[1] || (n[1] = (a) => t.$emit("confirm"))
        }, {
          default: h(() => [...n[9] || (n[9] = [
            x(" Switch ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), QE = /* @__PURE__ */ Te(JE, [["__scopeId", "data-v-f6d223e6"]]), YE = {
  key: 0,
  class: "modal-overlay"
}, XE = { class: "modal-content" }, ZE = { class: "modal-body" }, eT = { class: "progress-info" }, tT = { class: "progress-percentage" }, sT = { class: "progress-state" }, nT = { class: "switch-steps" }, oT = { class: "step-icon" }, aT = { class: "step-label" }, lT = /* @__PURE__ */ Ee({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const t = e, n = M(() => {
      const r = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return t.message || r[t.state] || t.state;
    }), a = M(() => t.state === "complete" ? "success" : t.state === "critical_failure" || t.state === "rolled_back" ? "error" : "default"), l = M(() => {
      const r = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], c = r.findIndex((u) => u.state === t.state);
      return r.map((u, d) => {
        let f = "pending", v = "○";
        return d < c ? (f = "completed", v = "✓") : d === c && (f = "active", v = "⟳"), {
          ...u,
          status: f,
          icon: v
        };
      });
    });
    return (r, c) => (o(), R(as, { to: "body" }, [
      e.show ? (o(), i("div", YE, [
        s("div", XE, [
          c[1] || (c[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", ZE, [
            b(Cc, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            s("div", eT, [
              s("div", tT, m(e.progress) + "%", 1),
              s("div", sT, m(n.value), 1)
            ]),
            s("div", nT, [
              (o(!0), i(B, null, ye(l.value, (u) => (o(), i("div", {
                key: u.state,
                class: Be(["switch-step", u.status])
              }, [
                s("span", oT, m(u.icon), 1),
                s("span", aT, m(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), iT = /* @__PURE__ */ Te(lT, [["__scopeId", "data-v-768a5078"]]), rT = { class: "modal-header" }, cT = { class: "modal-body" }, uT = {
  key: 0,
  class: "node-section"
}, dT = { class: "node-list" }, mT = {
  key: 1,
  class: "node-section"
}, fT = { class: "node-list" }, vT = { class: "modal-actions" }, pT = /* @__PURE__ */ Ee({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, n) => (o(), R(as, { to: "body" }, [
      e.show ? (o(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (a) => t.$emit("close"))
      }, [
        s("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = bt(() => {
          }, ["stop"]))
        }, [
          s("div", rT, [
            n[5] || (n[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", cT, [
            n[8] || (n[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (o(), i("div", uT, [
              n[6] || (n[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", dT, [
                (o(!0), i(B, null, ye(e.mismatchDetails.missing_nodes, (a) => (o(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + m(a), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (o(), i("div", mT, [
              n[7] || (n[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", fT, [
                (o(!0), i(B, null, ye(e.mismatchDetails.extra_nodes, (a) => (o(), i("div", {
                  key: a,
                  class: "node-item remove"
                }, " - " + m(a), 1))), 128))
              ])
            ])) : y("", !0),
            n[9] || (n[9] = s("div", { class: "warning-box" }, [
              s("span", { class: "warning-icon" }, "⚠"),
              s("span", null, "This may take several minutes")
            ], -1))
          ]),
          s("div", vT, [
            b(Pe, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (a) => t.$emit("close"))
            }, {
              default: h(() => [...n[10] || (n[10] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Pe, {
              variant: "primary",
              onClick: n[2] || (n[2] = (a) => t.$emit("confirm"))
            }, {
              default: h(() => [...n[11] || (n[11] = [
                x(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), gT = /* @__PURE__ */ Te(pT, [["__scopeId", "data-v-7cad7518"]]), hT = [
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
], Bo = "v0.0.24", yT = "Akatz", wT = { class: "social-buttons" }, _T = ["title", "aria-label", "onClick"], kT = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, bT = ["d"], $T = ["title", "aria-label", "onClick"], CT = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, xT = ["d"], ST = /* @__PURE__ */ Ee({
  __name: "SocialButtons",
  setup(e) {
    function t(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, a) => (o(), i("div", wT, [
      (o(!0), i(B, null, ye(at(hT), (l) => (o(), i(B, {
        key: l.id
      }, [
        l.label ? (o(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          x(m(l.label) + " ", 1),
          (o(), i("svg", kT, [
            s("path", {
              d: l.iconPath
            }, null, 8, bT)
          ]))
        ], 8, _T)) : (o(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          (o(), i("svg", CT, [
            s("path", {
              d: l.iconPath
            }, null, 8, xT)
          ]))
        ], 8, $T))
      ], 64))), 128))
    ]));
  }
}), Rc = /* @__PURE__ */ Te(ST, [["__scopeId", "data-v-4f846342"]]), IT = { class: "footer-info" }, ET = ["title"], TT = {
  key: 0,
  class: "dev-badge"
}, MT = { class: "made-by" }, PT = /* @__PURE__ */ Ee({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: t } = mt(), n = _(null), a = _(null), l = _(null), r = M(() => n.value === "development"), c = M(() => {
      var d;
      if (!r.value) return Bo;
      const u = [a.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return u ? `${Bo} (${u})` : `${Bo} (development)`;
    });
    return ut(async () => {
      try {
        const u = await t();
        n.value = u.manager_source ?? null, a.value = u.manager_branch ?? null, l.value = u.manager_commit ?? null;
      } catch {
        n.value = null;
      }
    }), (u, d) => (o(), i("div", IT, [
      s("span", {
        class: "version",
        title: c.value
      }, [
        x(m(at(Bo)) + " ", 1),
        r.value ? (o(), i("span", TT, "dev")) : y("", !0)
      ], 8, ET),
      s("span", MT, [
        d[0] || (d[0] = x(" made with ", -1)),
        d[1] || (d[1] = s("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          s("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        x(" by " + m(at(yT)), 1)
      ])
    ]));
  }
}), Dc = /* @__PURE__ */ Te(PT, [["__scopeId", "data-v-4fa265b3"]]), RT = /* @__PURE__ */ Ee({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = _(null);
    async function a() {
      var r;
      await ((r = n.value) == null ? void 0 : r.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (r, c) => (o(), R(Mt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => r.$emit("close"))
    }, {
      body: h(() => [
        b(_c, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var u;
        return [
          b(Ue, {
            variant: "primary",
            disabled: !((u = n.value) != null && u.hasChanges),
            onClick: a
          }, {
            default: h(() => [...c[2] || (c[2] = [
              x(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(Ue, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (d) => r.$emit("close"))
          }, {
            default: h(() => [...c[3] || (c[3] = [
              x(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), DT = /* @__PURE__ */ Te(RT, [["__scopeId", "data-v-fac00ae7"]]), NT = { class: "header-actions" }, LT = {
  key: 0,
  class: "wizard-step"
}, UT = { class: "form-field" }, OT = ["placeholder"], AT = {
  key: 0,
  class: "form-error"
}, zT = { class: "form-field form-field--checkbox" }, FT = { class: "form-checkbox" }, VT = {
  key: 0,
  class: "form-field"
}, BT = ["placeholder"], WT = {
  key: 0,
  class: "form-info"
}, GT = {
  key: 1,
  class: "form-suggestion"
}, jT = {
  key: 2,
  class: "form-error"
}, HT = {
  key: 3,
  class: "form-info"
}, qT = {
  key: 1,
  class: "wizard-step"
}, KT = {
  key: 0,
  class: "progress-check-loading"
}, JT = {
  key: 0,
  class: "cli-warning"
}, QT = { class: "cli-warning-header" }, YT = {
  key: 1,
  class: "env-landing"
}, XT = { class: "env-list" }, ZT = ["value"], eM = { class: "env-name" }, tM = {
  key: 2,
  class: "env-create"
}, sM = { class: "form-field" }, nM = { class: "form-field" }, oM = ["value"], aM = { class: "form-field" }, lM = ["disabled"], iM = ["value"], rM = { class: "form-field" }, cM = ["value"], uM = { class: "form-field form-field--checkbox" }, dM = { class: "form-checkbox" }, mM = {
  key: 0,
  class: "form-error"
}, fM = {
  key: 1,
  class: "env-creating"
}, vM = { class: "creating-intro" }, pM = {
  key: 3,
  class: "env-import"
}, gM = { class: "wizard-footer" }, hM = { class: "wizard-footer-actions" }, In = 10, yM = 600 * 1e3, Ui = 1800 * 1e3, wM = /* @__PURE__ */ Ee({
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
  setup(e, { emit: t }) {
    const n = e, a = t, {
      initializeWorkspace: l,
      getInitializeProgress: r,
      validatePath: c,
      createEnvironment: u,
      getCreateProgress: d,
      getImportProgress: f,
      getComfyUIReleases: v
    } = mt(), p = _(n.initialStep || 1), w = _(null), g = _("landing"), k = _(!1), $ = _(!1), S = _(!1), C = _(!1), I = _(null), E = _(n.initialStep === 2), P = _(n.defaultPath), D = _(!!n.detectedModelsDir), A = _(n.detectedModelsDir || ""), V = _(null), N = _(null), j = _(null), le = _(null), ce = _("my-new-env"), Q = _(bc), ve = _("latest"), J = _($c), L = _(!0), F = _(null), ue = _(null), te = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), me = _(!1), de = _(!1), W = _(!1), se = _({ progress: 0, message: "" }), ne = _({ progress: 0, message: "" }), Me = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], pe = _(0), ze = _(null), Le = _(0), ke = _(null), De = M(() => {
      var Ne, Qe;
      const xe = (Ne = P.value) == null ? void 0 : Ne.trim(), Z = !V.value, Ve = !D.value || !N.value && ((Qe = A.value) == null ? void 0 : Qe.trim());
      return xe && Z && Ve;
    }), ge = M(() => {
      var xe;
      return (xe = ce.value) == null ? void 0 : xe.trim();
    }), we = M(() => !!(p.value === 2 || ue.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), T = M(() => ue.value || n.workspacePath || null);
    async function O() {
      var xe;
      if (V.value = null, !!((xe = P.value) != null && xe.trim()))
        try {
          const Z = await c({ path: P.value, type: "workspace" });
          Z.valid || (V.value = Z.error || "Invalid path");
        } catch (Z) {
          V.value = Z instanceof Error ? Z.message : "Validation failed";
        }
    }
    async function ae() {
      var xe;
      if (N.value = null, j.value = null, le.value = null, !!((xe = A.value) != null && xe.trim()))
        try {
          const Z = await c({ path: A.value, type: "models" });
          if (Z.valid)
            le.value = Z.model_count ?? null;
          else if (N.value = Z.error || "Invalid path", Z.suggestion) {
            j.value = Z.suggestion, A.value = Z.suggestion, N.value = null;
            const Ve = await c({ path: Z.suggestion, type: "models" });
            Ve.valid && (le.value = Ve.model_count ?? null);
          }
        } catch (Z) {
          N.value = Z instanceof Error ? Z.message : "Validation failed";
        }
    }
    async function Ie() {
      var xe, Z, Ve, Ne, Qe;
      if (V.value = null, N.value = null, await O(), (xe = V.value) != null && xe.includes("already exists")) {
        V.value = null, ue.value = ((Z = P.value) == null ? void 0 : Z.trim()) || n.defaultPath, p.value = 2, be();
        return;
      }
      if (!V.value && !(D.value && ((Ve = A.value) != null && Ve.trim()) && (await ae(), N.value))) {
        de.value = !0;
        try {
          await l({
            workspace_path: ((Ne = P.value) == null ? void 0 : Ne.trim()) || n.defaultPath,
            models_directory: D.value && ((Qe = A.value) == null ? void 0 : Qe.trim()) || null
          }), pe.value = 0, ze.value = Date.now();
          const Fe = setInterval(async () => {
            var Ae;
            if (ze.value && Date.now() - ze.value > yM) {
              clearInterval(Fe), de.value = !1, V.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Xe = await r();
              if (pe.value = 0, Xe.state === "idle" && de.value) {
                clearInterval(Fe), de.value = !1, V.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              se.value = { progress: Xe.progress, message: Xe.message }, Xe.state === "complete" ? (clearInterval(Fe), de.value = !1, ue.value = ((Ae = P.value) == null ? void 0 : Ae.trim()) || n.defaultPath, p.value = 2, be()) : Xe.state === "error" && (clearInterval(Fe), de.value = !1, V.value = Xe.error || "Workspace creation failed");
            } catch (Xe) {
              pe.value++, console.warn(`Polling failure ${pe.value}/${In}:`, Xe), pe.value >= In && (clearInterval(Fe), de.value = !1, V.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Fe) {
          de.value = !1, V.value = Fe instanceof Error ? Fe.message : "Failed to create workspace";
        }
      }
    }
    async function Ce() {
      W.value = !0, F.value = null;
      try {
        const xe = {
          name: ce.value.trim() || "my-new-env",
          python_version: Q.value,
          comfyui_version: ve.value,
          torch_backend: J.value,
          switch_after: L.value,
          workspace_path: ue.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(xe)).status === "started") {
          Le.value = 0, ke.value = Date.now();
          const Ve = setInterval(async () => {
            if (ke.value && Date.now() - ke.value > Ui) {
              clearInterval(Ve), W.value = !1, F.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Ne = await d();
              if (Le.value = 0, Ne.state === "idle" && W.value) {
                clearInterval(Ve), W.value = !1, F.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (ne.value = {
                progress: Ne.progress ?? 0,
                message: Ne.message,
                phase: Ne.phase
              }, Ne.state === "complete") {
                clearInterval(Ve), W.value = !1;
                const Qe = Ne.environment_name || xe.name;
                L.value ? a("complete", Qe, ue.value) : (g.value = "landing", a("environment-created-no-switch", Qe));
              } else Ne.state === "error" && (clearInterval(Ve), W.value = !1, F.value = Ne.error || "Environment creation failed");
            } catch (Ne) {
              Le.value++, console.warn(`Polling failure ${Le.value}/${In}:`, Ne), Le.value >= In && (clearInterval(Ve), W.value = !1, F.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (xe) {
        W.value = !1, F.value = xe instanceof Error ? xe.message : "Unknown error";
      }
    }
    async function be() {
      me.value = !0;
      try {
        te.value = await v();
      } catch (xe) {
        console.error("Failed to load ComfyUI releases:", xe);
      } finally {
        me.value = !1;
      }
    }
    function ee() {
      w.value && a("switch-environment", w.value, ue.value);
    }
    function H() {
      g.value === "create" || g.value === "import" ? g.value = "landing" : p.value === 2 && n.setupState === "no_workspace" && (p.value = 1);
    }
    function he(xe, Z) {
      $.value = !1, Z ? a("complete", xe, ue.value) : (a("environment-created-no-switch", xe), g.value = "landing");
    }
    function _e() {
    }
    ut(async () => {
      if (n.detectedModelsDir && (A.value = n.detectedModelsDir), n.workspacePath && (ue.value = n.workspacePath), p.value === 2) {
        be();
        const xe = setTimeout(() => {
          E.value = !1;
        }, 3e3);
        await Ke(), clearTimeout(xe), E.value = !1;
      }
    });
    async function Ke() {
      try {
        const xe = await d();
        if (console.log("[ComfyGit] Create progress check:", xe.state, xe), xe.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", xe.environment_name), g.value = "create", W.value = !0, ce.value = xe.environment_name || "my-new-env", ne.value = {
            progress: xe.progress ?? 0,
            message: xe.message,
            phase: xe.phase
          }, We();
          return;
        }
      } catch (xe) {
        console.log("[ComfyGit] Create progress check failed:", xe);
      }
      try {
        const xe = await f();
        console.log("[ComfyGit] Import progress check:", xe.state, xe), xe.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", xe.environment_name), I.value = {
          message: xe.message || "Importing...",
          phase: xe.phase || "",
          progress: xe.progress ?? 0,
          environmentName: xe.environment_name || ""
        }, C.value = !0, g.value = "import", $.value = !0);
      } catch (xe) {
        console.log("[ComfyGit] Import progress check failed:", xe);
      }
    }
    async function We() {
      Le.value = 0, ke.value = Date.now();
      let xe = null;
      const Z = async () => {
        if (ke.value && Date.now() - ke.value > Ui)
          return xe && clearInterval(xe), W.value = !1, F.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Ne = await d();
          if (Le.value = 0, Ne.state === "idle" && W.value)
            return xe && clearInterval(xe), W.value = !1, F.value = "Environment creation was interrupted. Please try again.", !1;
          if (ne.value = {
            progress: Ne.progress ?? 0,
            message: Ne.message,
            phase: Ne.phase
          }, Ne.state === "complete") {
            xe && clearInterval(xe), W.value = !1;
            const Qe = Ne.environment_name || ce.value;
            return a("complete", Qe, ue.value), !1;
          } else if (Ne.state === "error")
            return xe && clearInterval(xe), W.value = !1, F.value = Ne.error || "Environment creation failed", !1;
          return !0;
        } catch (Ne) {
          return Le.value++, console.warn(`Polling failure ${Le.value}/${In}:`, Ne), Le.value >= In ? (xe && clearInterval(xe), W.value = !1, F.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await Z() && (xe = setInterval(async () => {
        !await Z() && xe && clearInterval(xe);
      }, 2e3));
    }
    return (xe, Z) => (o(), i(B, null, [
      b(Mt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: Z[15] || (Z[15] = (Ve) => xe.$emit("close"))
      }, {
        header: h(() => [
          Z[20] || (Z[20] = s("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          s("div", NT, [
            b(Rc),
            Z[19] || (Z[19] = s("span", { class: "header-divider" }, null, -1)),
            we.value ? (o(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: Z[0] || (Z[0] = (Ve) => k.value = !0)
            }, [...Z[17] || (Z[17] = [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                s("circle", {
                  cx: "12",
                  cy: "12",
                  r: "3"
                }),
                s("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" })
              ], -1)
            ])])) : y("", !0),
            s("button", {
              class: "icon-btn",
              onClick: Z[1] || (Z[1] = (Ve) => xe.$emit("close")),
              title: "Close"
            }, [...Z[18] || (Z[18] = [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ])
        ]),
        body: h(() => {
          var Ve;
          return [
            p.value === 1 ? (o(), i("div", LT, [
              Z[24] || (Z[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", UT, [
                Z[21] || (Z[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                Ot(s("input", {
                  "onUpdate:modelValue": Z[2] || (Z[2] = (Ne) => P.value = Ne),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, OT), [
                  [go, P.value]
                ]),
                V.value ? (o(), i("p", AT, m(V.value), 1)) : y("", !0)
              ]),
              s("div", zT, [
                s("label", FT, [
                  Ot(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": Z[3] || (Z[3] = (Ne) => D.value = Ne)
                  }, null, 512), [
                    [ia, D.value]
                  ]),
                  Z[22] || (Z[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              D.value ? (o(), i("div", VT, [
                Z[23] || (Z[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                Ot(s("input", {
                  "onUpdate:modelValue": Z[4] || (Z[4] = (Ne) => A.value = Ne),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, BT), [
                  [go, A.value]
                ]),
                e.detectedModelsDir && !A.value ? (o(), i("p", WT, " Detected: " + m(e.detectedModelsDir), 1)) : y("", !0),
                j.value ? (o(), i("p", GT, " Did you mean: " + m(j.value), 1)) : y("", !0),
                N.value ? (o(), i("p", jT, m(N.value), 1)) : y("", !0),
                le.value !== null && !N.value ? (o(), i("p", HT, " Found " + m(le.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              de.value ? (o(), R(ra, {
                key: 1,
                progress: se.value.progress,
                message: se.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            p.value === 2 ? (o(), i("div", qT, [
              E.value ? (o(), i("div", KT, [...Z[25] || (Z[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (o(), i(B, { key: 1 }, [
                !n.cliInstalled && !S.value ? (o(), i("div", JT, [
                  s("div", QT, [
                    Z[27] || (Z[27] = s("span", { class: "cli-warning-icon" }, "!", -1)),
                    Z[28] || (Z[28] = s("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    s("button", {
                      class: "cli-warning-close",
                      onClick: Z[5] || (Z[5] = (Ne) => S.value = !0),
                      title: "Dismiss"
                    }, [...Z[26] || (Z[26] = [
                      s("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                      ], -1)
                    ])])
                  ]),
                  Z[29] || (Z[29] = s("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  Z[30] || (Z[30] = s("div", { class: "cli-warning-commands" }, [
                    s("code", null, "pipx install comfygit"),
                    s("span", { class: "cli-warning-or" }, "or"),
                    s("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                g.value === "landing" ? (o(), i("div", YT, [
                  Z[34] || (Z[34] = s("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  s("button", {
                    class: "landing-option",
                    onClick: Z[6] || (Z[6] = (Ne) => g.value = "create")
                  }, [...Z[31] || (Z[31] = [
                    s("span", { class: "option-icon" }, "➕", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Create New Environment"),
                      s("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  s("button", {
                    class: "landing-option",
                    onClick: Z[7] || (Z[7] = (Ne) => {
                      C.value = !1, g.value = "import";
                    })
                  }, [...Z[32] || (Z[32] = [
                    s("span", { class: "option-icon" }, "📦", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Import Environment"),
                      s("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Ve = n.existingEnvironments) != null && Ve.length ? (o(), i(B, { key: 0 }, [
                    Z[33] || (Z[33] = s("div", { class: "landing-divider" }, [
                      s("span", null, "or switch to existing")
                    ], -1)),
                    s("div", XT, [
                      (o(!0), i(B, null, ye(n.existingEnvironments, (Ne) => (o(), i("label", {
                        key: Ne,
                        class: Be(["env-option", { selected: w.value === Ne }])
                      }, [
                        Ot(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: Ne,
                          "onUpdate:modelValue": Z[8] || (Z[8] = (Qe) => w.value = Qe)
                        }, null, 8, ZT), [
                          [Ko, w.value]
                        ]),
                        s("span", eM, m(Ne), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : g.value === "create" ? (o(), i("div", tM, [
                  W.value ? (o(), i("div", fM, [
                    s("p", vM, [
                      Z[41] || (Z[41] = x(" Creating environment ", -1)),
                      s("strong", null, m(ce.value), 1),
                      Z[42] || (Z[42] = x("... ", -1))
                    ]),
                    b(ra, {
                      progress: ne.value.progress,
                      message: ne.value.message,
                      "current-phase": ne.value.phase,
                      "show-steps": !0,
                      steps: Me
                    }, null, 8, ["progress", "message", "current-phase"]),
                    Z[43] || (Z[43] = s("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (o(), i(B, { key: 0 }, [
                    Z[40] || (Z[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", sM, [
                      Z[35] || (Z[35] = s("label", { class: "form-label" }, "Environment Name", -1)),
                      Ot(s("input", {
                        "onUpdate:modelValue": Z[9] || (Z[9] = (Ne) => ce.value = Ne),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [go, ce.value]
                      ])
                    ]),
                    s("div", nM, [
                      Z[36] || (Z[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      Ot(s("select", {
                        "onUpdate:modelValue": Z[10] || (Z[10] = (Ne) => Q.value = Ne),
                        class: "form-select"
                      }, [
                        (o(!0), i(B, null, ye(at(kc), (Ne) => (o(), i("option", {
                          key: Ne,
                          value: Ne
                        }, m(Ne), 9, oM))), 128))
                      ], 512), [
                        [On, Q.value]
                      ])
                    ]),
                    s("div", aM, [
                      Z[37] || (Z[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Ot(s("select", {
                        "onUpdate:modelValue": Z[11] || (Z[11] = (Ne) => ve.value = Ne),
                        class: "form-select",
                        disabled: me.value
                      }, [
                        (o(!0), i(B, null, ye(te.value, (Ne) => (o(), i("option", {
                          key: Ne.tag_name,
                          value: Ne.tag_name
                        }, m(Ne.name), 9, iM))), 128))
                      ], 8, lM), [
                        [On, ve.value]
                      ])
                    ]),
                    s("div", rM, [
                      Z[38] || (Z[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Ot(s("select", {
                        "onUpdate:modelValue": Z[12] || (Z[12] = (Ne) => J.value = Ne),
                        class: "form-select"
                      }, [
                        (o(!0), i(B, null, ye(at(Nl), (Ne) => (o(), i("option", {
                          key: Ne,
                          value: Ne
                        }, m(Ne) + m(Ne === "auto" ? " (detect GPU)" : ""), 9, cM))), 128))
                      ], 512), [
                        [On, J.value]
                      ])
                    ]),
                    s("div", uM, [
                      s("label", dM, [
                        Ot(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": Z[13] || (Z[13] = (Ne) => L.value = Ne)
                        }, null, 512), [
                          [ia, L.value]
                        ]),
                        Z[39] || (Z[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    F.value ? (o(), i("div", mM, m(F.value), 1)) : y("", !0)
                  ], 64))
                ])) : g.value === "import" ? (o(), i("div", pM, [
                  b(Sc, {
                    "workspace-path": ue.value,
                    "resume-import": C.value,
                    "initial-progress": I.value ?? void 0,
                    onImportComplete: he,
                    onImportStarted: Z[14] || (Z[14] = (Ne) => $.value = !0),
                    onSourceCleared: _e
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          s("div", gM, [
            b(Dc),
            s("div", hM, [
              p.value === 1 ? (o(), R(Ue, {
                key: 0,
                variant: "primary",
                disabled: !De.value || de.value,
                onClick: Ie
              }, {
                default: h(() => [
                  x(m(de.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (o(), i(B, { key: 1 }, [
                !W.value && !$.value && (g.value !== "landing" || n.setupState === "no_workspace" && !ue.value) ? (o(), R(Ue, {
                  key: 0,
                  variant: "secondary",
                  onClick: H
                }, {
                  default: h(() => [...Z[44] || (Z[44] = [
                    x(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                g.value === "create" ? (o(), R(Ue, {
                  key: 1,
                  variant: "primary",
                  disabled: !ge.value || W.value,
                  onClick: Ce
                }, {
                  default: h(() => [
                    x(m(W.value ? "Creating..." : L.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                g.value === "landing" && w.value ? (o(), R(Ue, {
                  key: 2,
                  variant: "primary",
                  onClick: ee
                }, {
                  default: h(() => [
                    x(" Switch to " + m(w.value), 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ], 64)) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      k.value ? (o(), R(DT, {
        key: 0,
        "workspace-path": T.value,
        onClose: Z[16] || (Z[16] = (Ve) => k.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), _M = /* @__PURE__ */ Te(wM, [["__scopeId", "data-v-9a9aadc0"]]), kM = { class: "update-banner" }, bM = { class: "update-banner__left" }, $M = { class: "update-banner__title" }, CM = {
  key: 0,
  class: "update-banner__summary"
}, xM = { class: "update-banner__actions" }, SM = ["disabled"], IM = ["disabled"], EM = ["disabled"], TM = /* @__PURE__ */ Ee({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: t }) {
    const n = t;
    return (a, l) => (o(), i("div", kM, [
      s("div", bM, [
        s("div", $M, " ComfyGit Manager v" + m(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (o(), i("div", CM, m(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      s("div", xM, [
        s("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => n("update"))
        }, m(e.updating ? "Updating…" : "Update"), 9, SM),
        e.info.release_url ? (o(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => n("release-notes"))
        }, " Release notes ", 8, IM)) : y("", !0),
        s("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => n("dismiss"))
        }, " Dismiss ", 8, EM)
      ])
    ]));
  }
}), MM = /* @__PURE__ */ Te(TM, [["__scopeId", "data-v-49562c5c"]]), Nc = "ComfyGit.UpdateNotice.DismissedVersion";
function PM() {
  try {
    return localStorage.getItem(Nc);
  } catch {
    return null;
  }
}
function RM(e) {
  try {
    localStorage.setItem(Nc, e);
  } catch {
  }
}
function DM(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : PM() !== e.latest_version;
}
const NM = { class: "comfygit-panel" }, LM = { class: "panel-header" }, UM = { class: "header-left" }, OM = {
  key: 0,
  class: "header-info"
}, AM = { class: "header-actions" }, zM = { class: "env-switcher" }, FM = { class: "env-switcher-header" }, VM = { class: "env-control-buttons" }, BM = {
  key: 0,
  class: "header-info"
}, WM = { class: "branch-name" }, GM = { class: "panel-main" }, jM = { class: "sidebar" }, HM = { class: "sidebar-content" }, qM = { class: "sidebar-section" }, KM = { class: "sidebar-section" }, JM = { class: "sidebar-section" }, QM = { class: "sidebar-footer" }, YM = { class: "content-area" }, XM = {
  key: 0,
  class: "error-message"
}, ZM = {
  key: 1,
  class: "loading"
}, eP = { class: "dialog-content env-selector-dialog" }, tP = { class: "dialog-header" }, sP = { class: "dialog-body" }, nP = { class: "env-list" }, oP = { class: "env-info" }, aP = { class: "env-name-row" }, lP = { class: "env-indicator" }, iP = { class: "env-name" }, rP = {
  key: 0,
  class: "env-branch"
}, cP = {
  key: 1,
  class: "current-label"
}, uP = { class: "env-stats" }, dP = ["onClick"], mP = { class: "toast-container" }, fP = { class: "toast-message" }, Oi = "ComfyGit.LastView", Ai = "ComfyGit.LastSection", vP = /* @__PURE__ */ Ee({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(e, { emit: t }) {
    const n = e, a = t, {
      getStatus: l,
      getHistory: r,
      getBranches: c,
      checkout: u,
      createBranch: d,
      switchBranch: f,
      deleteBranch: v,
      getEnvironments: p,
      switchEnvironment: w,
      getSwitchProgress: g,
      deleteEnvironment: k,
      syncEnvironmentManually: $,
      repairWorkflowModels: S,
      getSetupStatus: C,
      getUpdateCheck: I,
      updateManager: E
    } = mt(), P = Kh(), D = _(null), A = _([]), V = _([]), N = _([]), j = M(() => N.value.find((ie) => ie.is_current)), le = _(null), ce = _(!1), Q = _(!1), ve = _("remotes");
    function J(ie) {
      return ie ? {
        manifest: "manifest",
        "debug-env": "env",
        "debug-workspace": "workspace",
        "debug-orchestrator": "orchestrator"
      }[ie] ?? "manifest" : "manifest";
    }
    const L = _(J(n.initialView)), F = _(null), ue = _(!1), te = _(1), me = M(() => {
      var ie;
      return ((ie = F.value) == null ? void 0 : ie.state) || "managed";
    }), de = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, W = M(() => {
      var ie, q;
      return ((q = (ie = F.value) == null ? void 0 : ie.runtime_context) == null ? void 0 : q.capabilities) || de;
    }), se = _(!1), ne = _(null), Me = _(null), pe = _(!1), ze = _(null), Le = _(!1), ke = _(!1), De = M(() => !Le.value && DM(ze.value)), ge = _(null), we = _(null), T = _(null), O = _(!1), ae = _(!1), Ie = _(""), Ce = _(null), be = _({ state: "idle", progress: 0, message: "" });
    let ee = null, H = null;
    const he = {
      manifest: { view: "diagnostics", section: "diagnostics" },
      "debug-env": { view: "diagnostics", section: "diagnostics" },
      "debug-workspace": { view: "diagnostics", section: "diagnostics" },
      "debug-orchestrator": { view: "diagnostics", section: "diagnostics" },
      history: { view: "version-control", section: "version-control" },
      branches: { view: "version-control", section: "version-control" },
      remotes: { view: "version-control", section: "version-control" },
      status: { view: "status", section: "this-env" },
      workflows: { view: "workflows", section: "this-env" },
      nodes: { view: "nodes", section: "this-env" }
    }, _e = n.initialView ? he[n.initialView] : null, Ke = [
      "status",
      "workflows",
      "models-env",
      "nodes",
      "version-control",
      "environments",
      "model-index",
      "settings",
      "diagnostics"
    ], We = ["this-env", "version-control", "workspace", "diagnostics"];
    function xe() {
      try {
        const ie = sessionStorage.getItem(Oi), q = sessionStorage.getItem(Ai), Ye = ie === "branches" || ie === "history" || ie === "remotes" ? "version-control" : ie === "manifest" || ie === "debug-env" || ie === "debug-workspace" ? "diagnostics" : ie, nt = q === "all-envs" ? "workspace" : q === "sharing" ? "version-control" : q;
        if (ie && q && Ke.includes(Ye) && We.includes(nt))
          return { view: Ye, section: nt };
      } catch {
      }
      return null;
    }
    const Z = xe(), Ve = _((_e == null ? void 0 : _e.view) ?? (Z == null ? void 0 : Z.view) ?? "status"), Ne = _((_e == null ? void 0 : _e.section) ?? (Z == null ? void 0 : Z.section) ?? "this-env");
    function Qe(ie, q) {
      Ve.value = ie, Ne.value = q;
      try {
        sessionStorage.setItem(Oi, ie), sessionStorage.setItem(Ai, q);
      } catch {
      }
    }
    function Fe(ie) {
      const Ye = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" }
      }[ie];
      Ye && Qe(Ye.view, Ye.section);
    }
    function Ae(ie) {
      ve.value = ie, Qe("version-control", "version-control");
    }
    function Xe(ie) {
      L.value = ie, Qe("diagnostics", "diagnostics");
    }
    function kt() {
      Ae("branches");
    }
    function Lt() {
      a("close"), setTimeout(async () => {
        await Kt("Comfy.OpenManagerDialog") || await Kt("Comfy.Manager.CustomNodesManager.ShowCustomNodesMenu") || X(["Extensions", "Manage extensions"]) || X(["Manager"]) || console.warn("[ComfyGit] Extensions manager entrypoint not found");
      }, 100);
    }
    async function Kt(ie) {
      var nt, gt;
      const q = window.app, Ye = [
        (nt = q == null ? void 0 : q.extensionManager) == null ? void 0 : nt.command,
        (gt = q == null ? void 0 : q.extensionManager) == null ? void 0 : gt.commands,
        q == null ? void 0 : q.command,
        q == null ? void 0 : q.commands
      ];
      for (const xt of Ye)
        if (typeof (xt == null ? void 0 : xt.execute) == "function")
          try {
            return await xt.execute(ie), !0;
          } catch (Bt) {
            console.debug(`[ComfyGit] Command ${ie} did not open Extensions manager`, Bt);
          }
      return !1;
    }
    function X(ie) {
      var nt, gt, xt;
      const q = ie.map((Bt) => Bt.toLowerCase()), Ye = document.querySelectorAll('button, [role="button"]');
      for (const Bt of Ye) {
        const vs = Bt;
        if ([
          (nt = vs.textContent) == null ? void 0 : nt.trim(),
          (gt = vs.getAttribute("title")) == null ? void 0 : gt.trim(),
          (xt = vs.getAttribute("aria-label")) == null ? void 0 : xt.trim()
        ].filter(Boolean).map((Zs) => Zs.toLowerCase()).some((Zs) => q.includes(Zs)))
          return vs.click(), !0;
      }
      return !1;
    }
    const G = _(null), fe = _(!1), Je = _(!1), Ge = _([]);
    let it = 0;
    function Oe(ie, q = "info", Ye = 3e3) {
      const nt = ++it;
      return Ge.value.push({ id: nt, message: ie, type: q }), Ye > 0 && setTimeout(() => {
        Ge.value = Ge.value.filter((gt) => gt.id !== nt);
      }, Ye), nt;
    }
    function rt(ie) {
      Ge.value = Ge.value.filter((q) => q.id !== ie);
    }
    function Pt(ie, q) {
      Oe(ie, q);
    }
    async function Jt() {
      ze.value = null, Le.value = !1;
      try {
        ze.value = await I();
      } catch {
      }
    }
    function cs() {
      var q;
      const ie = (q = ze.value) == null ? void 0 : q.release_url;
      if (ie)
        try {
          window.open(ie, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function Ft() {
      var q;
      const ie = (q = ze.value) == null ? void 0 : q.latest_version;
      ie && RM(ie), Le.value = !0;
    }
    async function K() {
      if (ke.value) return;
      ke.value = !0;
      const ie = Oe("Updating comfygit-manager...", "info", 0);
      try {
        const q = await E();
        if (rt(ie), q.status !== "success") {
          if (Oe(q.message || "Update failed", "error"), q.manual_instructions) {
            const Ye = q.manual_instructions.split(`
`).map((nt) => nt.trim()).filter(Boolean);
            G.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: Ye,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                G.value = null;
              }
            };
          }
          return;
        }
        if (Oe(q.message || "Update complete", "success"), Ft(), q.restart_required) {
          ht();
          try {
            await qs("/v2/manager/reboot");
          } catch {
          }
        }
      } catch (q) {
        rt(ie);
        const Ye = q instanceof Error ? q.message : "Update failed";
        Oe(Ye, "error");
      } finally {
        ke.value = !1;
      }
    }
    const re = M(() => {
      if (!D.value) return "neutral";
      const ie = D.value.workflows, q = ie.new.length > 0 || ie.modified.length > 0 || ie.deleted.length > 0 || D.value.has_changes;
      return D.value.comparison.is_synced ? q ? "warning" : "success" : "error";
    });
    M(() => D.value ? re.value === "success" ? "All synced" : re.value === "warning" ? "Uncommitted changes" : re.value === "error" ? "Not synced" : "" : "");
    async function Re(ie = {}) {
      se.value = !0, ne.value = null;
      try {
        const [q, Ye, nt, gt] = await Promise.all([
          l(!0),
          r(),
          c(),
          p()
        ]);
        D.value = q, A.value = Ye.commits, V.value = nt.branches, N.value = gt, a("statusUpdate", q), (ie.refreshWorkflows ?? !0) && ge.value && await ge.value.loadWorkflows(!0);
      } catch (q) {
        ne.value = q instanceof Error ? q.message : "Failed to load status", D.value = null, A.value = [], V.value = [];
      } finally {
        se.value = !1;
      }
    }
    function $e(ie) {
      Me.value = ie;
    }
    async function qe(ie) {
      var Ye;
      Me.value = null;
      const q = D.value && (D.value.workflows.new.length > 0 || D.value.workflows.modified.length > 0 || D.value.workflows.deleted.length > 0 || D.value.has_changes);
      G.value = {
        title: q ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: q ? "You have uncommitted changes that will be lost." : `Checkout commit ${ie.short_hash || ((Ye = ie.hash) == null ? void 0 : Ye.slice(0, 7))}?`,
        details: q ? Do() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: q ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: q,
        onConfirm: async () => {
          var xt;
          G.value = null, ht();
          const nt = Oe(`Checking out ${ie.short_hash || ((xt = ie.hash) == null ? void 0 : xt.slice(0, 7))}...`, "info", 0), gt = await u(ie.hash, q);
          rt(nt), gt.status === "success" ? Oe("Restarting ComfyUI...", "success") : Oe(gt.message || "Checkout failed", "error");
        }
      };
    }
    async function Ze(ie) {
      const q = D.value && (D.value.workflows.new.length > 0 || D.value.workflows.modified.length > 0 || D.value.workflows.deleted.length > 0 || D.value.has_changes);
      G.value = {
        title: q ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: q ? "You have uncommitted changes." : `Switch to branch "${ie}"?`,
        details: q ? Do() : void 0,
        warning: q ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: q ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          G.value = null, ht();
          const Ye = Oe(`Switching to ${ie}...`, "info", 0), nt = await f(ie, q);
          rt(Ye), nt.status === "success" ? Oe("Restarting ComfyUI...", "success") : Oe(nt.message || "Branch switch failed", "error");
        }
      };
    }
    async function lt(ie) {
      const q = Oe(`Creating branch ${ie}...`, "info", 0), Ye = await d(ie);
      rt(q), Ye.status === "success" ? (Oe(`Branch "${ie}" created`, "success"), await Re()) : Oe(Ye.message || "Failed to create branch", "error");
    }
    async function ft(ie, q = !1) {
      const Ye = async (nt) => {
        var xt;
        const gt = Oe(`Deleting branch ${ie}...`, "info", 0);
        try {
          const Bt = await v(ie, nt);
          rt(gt), Bt.status === "success" ? (Oe(`Branch "${ie}" deleted`, "success"), await Re()) : (xt = Bt.message) != null && xt.includes("not fully merged") ? G.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ie}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              G.value = null, await Ye(!0);
            }
          } : Oe(Bt.message || "Failed to delete branch", "error");
        } catch (Bt) {
          rt(gt);
          const vs = Bt instanceof Error ? Bt.message : "Failed to delete branch";
          vs.includes("not fully merged") ? G.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ie}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              G.value = null, await Ye(!0);
            }
          } : Oe(vs, "error");
        }
      };
      G.value = {
        title: "Delete Branch",
        message: `Delete branch "${ie}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          G.value = null, await Ye(q);
        }
      };
    }
    async function It(ie) {
      Me.value = null;
      const q = prompt("Enter branch name:");
      if (q) {
        const Ye = Oe(`Creating branch ${q}...`, "info", 0), nt = await d(q, ie.hash);
        rt(Ye), nt.status === "success" ? (Oe(`Branch "${q}" created from ${ie.short_hash}`, "success"), await Re()) : Oe(nt.message || "Failed to create branch", "error");
      }
    }
    function ht() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Y() {
      if (!W.value.can_restart_current) {
        Oe("Restart is not available in this runtime context.", "warning");
        return;
      }
      G.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          G.value = null, ht(), Oe("Restarting environment...", "info");
          try {
            await qs("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function U() {
      if (!W.value.can_stop_current) {
        Oe("Stop is not available in this runtime context.", "warning");
        return;
      }
      G.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          G.value = null, Oe("Stopping environment...", "info");
          try {
            await qs("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function oe(ie, q) {
      if (!W.value.can_switch_environment) {
        Oe("Environment switching is not available in this runtime context.", "warning");
        return;
      }
      pe.value = !1, Ie.value = ie, Ce.value = q || null, O.value = !0;
    }
    async function He() {
      O.value = !1, ae.value = !0, ht(), be.value = {
        progress: 10,
        state: tt(10),
        message: yt(10)
      };
      try {
        await w(Ie.value, Ce.value || void 0), ks(), bs();
      } catch (ie) {
        Vt(), ae.value = !1, Oe(`Failed to initiate switch: ${ie instanceof Error ? ie.message : "Unknown error"}`, "error"), be.value = { state: "idle", progress: 0, message: "" }, Ce.value = null;
      }
    }
    function tt(ie) {
      return ie >= 100 ? "complete" : ie >= 80 ? "validating" : ie >= 60 ? "starting" : ie >= 30 ? "syncing" : "preparing";
    }
    function yt(ie) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[tt(ie)] || "";
    }
    function ks() {
      if (H) return;
      let ie = 10;
      const q = 60, Ye = 5e3, nt = 100, gt = (q - ie) / (Ye / nt);
      H = window.setInterval(() => {
        if (ie += gt, ie >= q && (ie = q, Vt()), be.value.progress < q) {
          const xt = Math.floor(ie);
          be.value = {
            progress: xt,
            state: tt(xt),
            message: yt(xt)
          };
        }
      }, nt);
    }
    function Vt() {
      H && (clearInterval(H), H = null);
    }
    function bs() {
      ee || (ee = window.setInterval(async () => {
        try {
          let ie = await P.getStatus();
          if ((!ie || ie.state === "idle") && (ie = await g()), !ie)
            return;
          const q = ie.progress || 0;
          q >= 60 && Vt();
          const Ye = Math.max(q, be.value.progress), nt = ie.state && ie.state !== "idle" && ie.state !== "unknown", gt = nt ? ie.state : tt(Ye), xt = nt && ie.message || yt(Ye);
          be.value = {
            state: gt,
            progress: Ye,
            message: xt
          }, ie.state === "complete" ? (Vt(), dt(), ae.value = !1, Oe(`✓ Switched to ${Ie.value}`, "success"), await Re(), Ie.value = "") : ie.state === "rolled_back" ? (Vt(), dt(), ae.value = !1, Oe("Switch failed, restored previous environment", "warning"), Ie.value = "") : ie.state === "critical_failure" && (Vt(), dt(), ae.value = !1, Oe(`Critical error during switch: ${ie.message}`, "error"), Ie.value = "");
        } catch (ie) {
          console.error("Failed to poll switch progress:", ie);
        }
      }, 1e3));
    }
    function dt() {
      Vt(), ee && (clearInterval(ee), ee = null);
    }
    function Xs() {
      var ie;
      O.value = !1, Ie.value = "", (ie = F.value) != null && ie.state && F.value.state !== "managed" && (te.value = F.value.state === "no_workspace" ? 1 : 2, ue.value = !0);
    }
    async function Ut(ie) {
      fe.value = !1, await Re(), Oe(ie.message, ie.success ? "success" : "error");
    }
    async function Kn() {
      Je.value = !1;
      const ie = Oe("Syncing environment...", "info", 0);
      try {
        const q = await $("skip", !0);
        if (rt(ie), q.status === "success") {
          const Ye = [];
          q.nodes_installed.length && Ye.push(`${q.nodes_installed.length} installed`), q.nodes_removed.length && Ye.push(`${q.nodes_removed.length} removed`);
          const nt = Ye.length ? `: ${Ye.join(", ")}` : "";
          Oe(`✓ Environment synced${nt}`, "success"), await Re();
        } else {
          const Ye = q.errors.length ? q.errors.join("; ") : q.message;
          Oe(`Sync failed: ${Ye}`, "error");
        }
      } catch (q) {
        rt(ie), Oe(`Sync error: ${q instanceof Error ? q.message : "Unknown error"}`, "error");
      }
    }
    async function fs(ie) {
      var q;
      try {
        const Ye = await S(ie);
        Ye.failed.length === 0 ? Oe(`✓ Repaired ${Ye.success} workflow${Ye.success === 1 ? "" : "s"}`, "success") : Oe(`Repaired ${Ye.success}, failed: ${Ye.failed.length}`, "warning"), await Re();
      } catch (Ye) {
        Oe(`Repair failed: ${Ye instanceof Error ? Ye.message : "Unknown error"}`, "error");
      } finally {
        (q = T.value) == null || q.resetRepairingState();
      }
    }
    async function dn() {
      var q, Ye;
      const ie = Oe("Repairing environment...", "info", 0);
      try {
        const nt = await $("skip", !0);
        if (rt(ie), nt.status === "success") {
          const gt = [];
          nt.nodes_installed.length && gt.push(`${nt.nodes_installed.length} installed`), nt.nodes_removed.length && gt.push(`${nt.nodes_removed.length} removed`);
          const xt = gt.length ? `: ${gt.join(", ")}` : "";
          Oe(`✓ Environment repaired${xt}`, "success"), (q = T.value) == null || q.closeDetailModal(), await Re();
        } else {
          const gt = nt.errors.length ? nt.errors.join(", ") : nt.message || "Unknown error";
          Oe(`Repair failed: ${gt}`, "error");
        }
      } catch (nt) {
        rt(ie), Oe(`Repair error: ${nt instanceof Error ? nt.message : "Unknown error"}`, "error");
      } finally {
        (Ye = T.value) == null || Ye.resetRepairingEnvironmentState();
      }
    }
    async function $a(ie, q) {
      Oe(`Environment '${ie}' created`, "success"), await Re(), we.value && await we.value.loadEnvironments(), q && W.value.can_switch_environment && await oe(ie);
    }
    async function Ca(ie) {
      var q;
      if (!W.value.can_delete_environment) {
        Oe("Environment deletion is not available in this runtime context.", "warning");
        return;
      }
      if (((q = j.value) == null ? void 0 : q.name) === ie) {
        Oe("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      G.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ie}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          G.value = null;
          try {
            const Ye = await k(ie);
            Ye.status === "success" ? (Oe(`Environment "${ie}" deleted`, "success"), await Re(), we.value && await we.value.loadEnvironments()) : Oe(Ye.message || "Failed to delete environment", "error");
          } catch (Ye) {
            Oe(`Error deleting environment: ${Ye instanceof Error ? Ye.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function xa(ie, q) {
      ue.value = !1;
      try {
        F.value = await C();
      } catch {
      }
      W.value.can_switch_environment && await oe(ie, q);
    }
    function Sa() {
      ue.value = !1, a("close");
    }
    async function Ia(ie, q) {
      await oe(ie, q);
    }
    async function Ea(ie) {
      ce.value = !1, await Re(), await oe(ie);
    }
    function Ta() {
      le.value = null, ce.value = !0;
    }
    function Ma(ie) {
      le.value = ie, Q.value = !0;
    }
    function Ro() {
      Q.value = !1, le.value = null;
    }
    async function Pa(ie) {
      F.value = await C(), console.log(`Environment '${ie}' created. Available for switching.`);
    }
    function Ra() {
      if (!W.value.can_create_environment) {
        Oe("Environment creation is not available in this runtime context.", "warning");
        return;
      }
      Qe("environments", "workspace"), setTimeout(() => {
        var ie;
        (ie = we.value) == null || ie.openCreateModal();
      }, 100);
    }
    function Do() {
      if (!D.value) return [];
      const ie = [], q = D.value.workflows;
      return q.new.length && ie.push(`${q.new.length} new workflow(s)`), q.modified.length && ie.push(`${q.modified.length} modified workflow(s)`), q.deleted.length && ie.push(`${q.deleted.length} deleted workflow(s)`), ie;
    }
    return ut(async () => {
      try {
        if (F.value = await C(), F.value.state === "no_workspace" && W.value.can_initialize_workspace) {
          ue.value = !0, te.value = 1;
          return;
        }
        if (F.value.state === "empty_workspace" && W.value.can_create_environment) {
          ue.value = !0, te.value = 2;
          return;
        }
        if (F.value.state === "unmanaged" && W.value.can_switch_environment) {
          ue.value = !0, te.value = 2;
          return;
        }
      } catch (ie) {
        console.warn("Setup status check failed, proceeding normally:", ie);
      }
      await Promise.all([
        Re({ refreshWorkflows: !1 }),
        Jt()
      ]);
    }), (ie, q) => {
      var Ye, nt, gt, xt, Bt, vs, Jn, Zs, No, z, Se, je, wt;
      return o(), i("div", NM, [
        s("div", LM, [
          s("div", UM, [
            q[27] || (q[27] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            D.value ? (o(), i("div", OM)) : y("", !0)
          ]),
          s("div", AM, [
            b(Rc),
            q[30] || (q[30] = s("span", { class: "header-divider" }, null, -1)),
            s("button", {
              class: Be(["icon-btn", { spinning: se.value }]),
              onClick: Re,
              title: "Refresh"
            }, [...q[28] || (q[28] = [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M13.65 2.35a8 8 0 1 0 1.4 9.65h-2.25a5.75 5.75 0 1 1-1-6.45L9.5 8H16V1.5l-2.35 2.35z" })
              ], -1)
            ])], 2),
            s("button", {
              class: "icon-btn",
              onClick: q[0] || (q[0] = (et) => a("close")),
              title: "Close"
            }, [...q[29] || (q[29] = [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ])
        ]),
        De.value && ze.value ? (o(), R(MM, {
          key: 0,
          info: ze.value,
          updating: ke.value,
          onUpdate: K,
          onDismiss: Ft,
          onReleaseNotes: cs
        }, null, 8, ["info", "updating"])) : y("", !0),
        s("div", zM, [
          s("div", FM, [
            q[31] || (q[31] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", VM, [
              W.value.can_restart_current ? (o(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Y
              }, " Restart ")) : y("", !0),
              W.value.can_stop_current ? (o(), i("button", {
                key: 1,
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: U
              }, " Stop ")) : y("", !0)
            ])
          ]),
          s("button", {
            class: "env-switcher-btn",
            onClick: q[1] || (q[1] = (et) => Qe("environments", "workspace"))
          }, [
            D.value ? (o(), i("div", BM, [
              s("span", null, m(((Ye = j.value) == null ? void 0 : Ye.name) || ((nt = D.value) == null ? void 0 : nt.environment) || "Loading..."), 1),
              s("span", WM, "(" + m(D.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            q[32] || (q[32] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", GM, [
          s("div", jM, [
            s("div", HM, [
              s("div", qM, [
                q[33] || (q[33] = s("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: Ve.value === "status" && Ne.value === "this-env" }]),
                  onClick: q[2] || (q[2] = (et) => Qe("status", "this-env"))
                }, " STATUS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Ve.value === "workflows" }]),
                  onClick: q[3] || (q[3] = (et) => Qe("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Ve.value === "models-env" }]),
                  onClick: q[4] || (q[4] = (et) => Qe("models-env", "this-env"))
                }, " MODELS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Ve.value === "nodes" }]),
                  onClick: q[5] || (q[5] = (et) => Qe("nodes", "this-env"))
                }, " NODES ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Ve.value === "version-control" }]),
                  onClick: q[6] || (q[6] = (et) => Ae("remotes"))
                }, " VERSION CONTROL ", 2)
              ]),
              q[36] || (q[36] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", KM, [
                q[34] || (q[34] = s("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: Ve.value === "environments" }]),
                  onClick: q[7] || (q[7] = (et) => Qe("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Ve.value === "model-index" }]),
                  onClick: q[8] || (q[8] = (et) => Qe("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Ve.value === "settings" }]),
                  onClick: q[9] || (q[9] = (et) => Qe("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              q[37] || (q[37] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", JM, [
                q[35] || (q[35] = s("div", { class: "sidebar-section-title" }, "DIAGNOSTICS", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: Ve.value === "diagnostics" && L.value === "manifest" }]),
                  onClick: q[10] || (q[10] = (et) => Xe("manifest"))
                }, " MANIFEST ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Ve.value === "diagnostics" && L.value !== "manifest" }]),
                  onClick: q[11] || (q[11] = (et) => Xe("env"))
                }, " LOGGING ", 2)
              ])
            ]),
            s("div", QM, [
              b(Dc)
            ])
          ]),
          s("div", YM, [
            ne.value ? (o(), i("div", XM, m(ne.value), 1)) : !D.value && Ve.value === "status" ? (o(), i("div", ZM, " Loading status... ")) : (o(), i(B, { key: 2 }, [
              Ve.value === "status" ? (o(), R(qh, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: T,
                status: D.value,
                "setup-state": me.value,
                onSwitchBranch: kt,
                onCommitChanges: q[12] || (q[12] = (et) => fe.value = !0),
                onSyncEnvironment: q[13] || (q[13] = (et) => Je.value = !0),
                onViewWorkflows: q[14] || (q[14] = (et) => Qe("workflows", "this-env")),
                onViewHistory: q[15] || (q[15] = (et) => Ae("history")),
                onViewDebug: q[16] || (q[16] = (et) => Xe("env")),
                onViewNodes: q[17] || (q[17] = (et) => Qe("nodes", "this-env")),
                onRepairMissingModels: fs,
                onRepairEnvironment: dn,
                onStartSetup: q[18] || (q[18] = (et) => ue.value = !0),
                onViewEnvironments: q[19] || (q[19] = (et) => Qe("environments", "workspace")),
                onCreateEnvironment: Ra
              }, null, 8, ["status", "setup-state"])) : Ve.value === "workflows" ? (o(), R(w2, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: ge,
                onRefresh: Re
              }, null, 512)) : Ve.value === "models-env" ? (o(), R(x$, {
                key: 2,
                onNavigate: Fe
              })) : Ve.value === "version-control" ? (o(), R(T6, {
                key: 3,
                commits: A.value,
                "current-ref": (gt = D.value) == null ? void 0 : gt.branch,
                branches: V.value,
                current: ((xt = D.value) == null ? void 0 : xt.branch) || null,
                "initial-tab": ve.value,
                onSelect: $e,
                onCheckout: qe,
                onSwitch: Ze,
                onCreate: lt,
                onDelete: ft,
                onToast: Pt
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : Ve.value === "nodes" ? (o(), R(hC, {
                key: 4,
                "version-mismatches": ((vs = (Bt = D.value) == null ? void 0 : Bt.comparison) == null ? void 0 : vs.version_mismatches) || [],
                onOpenNodeManager: Lt,
                onRepairEnvironment: dn,
                onToast: Pt
              }, null, 8, ["version-mismatches"])) : Ve.value === "diagnostics" ? (o(), R(W6, {
                key: 5,
                "initial-tab": L.value
              }, null, 8, ["initial-tab"])) : Ve.value === "environments" ? (o(), R(g3, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: we,
                "can-create": W.value.can_create_environment,
                "can-switch": W.value.can_switch_environment,
                "can-delete": W.value.can_delete_environment,
                onSwitch: oe,
                onCreated: $a,
                onDelete: Ca,
                onImport: Ta,
                onExport: Ma
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : Ve.value === "model-index" ? (o(), R(U$, {
                key: 7,
                onRefresh: Re
              })) : Ve.value === "settings" ? (o(), R(GC, { key: 8 })) : y("", !0)
            ], 64))
          ])
        ]),
        Me.value ? (o(), R(iE, {
          key: 1,
          commit: Me.value,
          onClose: q[20] || (q[20] = (et) => Me.value = null),
          onCheckout: qe,
          onCreateBranch: It
        }, null, 8, ["commit"])) : y("", !0),
        G.value ? (o(), R(Dl, {
          key: 2,
          title: G.value.title,
          message: G.value.message,
          details: G.value.details,
          warning: G.value.warning,
          confirmLabel: G.value.confirmLabel,
          cancelLabel: G.value.cancelLabel,
          secondaryLabel: G.value.secondaryLabel,
          secondaryAction: G.value.secondaryAction,
          destructive: G.value.destructive,
          onConfirm: G.value.onConfirm,
          onCancel: q[21] || (q[21] = (et) => G.value = null),
          onSecondary: G.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        ce.value ? (o(), R(Mt, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: q[22] || (q[22] = (et) => ce.value = !1)
        }, {
          body: h(() => [
            b(t5, {
              embedded: "",
              onImportCompleteSwitch: Ea
            })
          ]),
          _: 1
        })) : y("", !0),
        Q.value ? (o(), R(Mt, {
          key: 4,
          title: le.value ? `EXPORT ENVIRONMENT: ${le.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "md",
          onClose: Ro
        }, {
          body: h(() => [
            b(lS, {
              embedded: "",
              "environment-name": le.value,
              onClose: Ro
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : y("", !0),
        b(QE, {
          show: O.value,
          "from-environment": ((Jn = j.value) == null ? void 0 : Jn.name) || "unknown",
          "to-environment": Ie.value,
          onConfirm: He,
          onClose: Xs
        }, null, 8, ["show", "from-environment", "to-environment"]),
        fe.value && D.value ? (o(), R(Pc, {
          key: 5,
          status: D.value,
          "as-modal": !0,
          onClose: q[23] || (q[23] = (et) => fe.value = !1),
          onCommitted: Ut
        }, null, 8, ["status"])) : y("", !0),
        Je.value && D.value ? (o(), R(gT, {
          key: 6,
          show: Je.value,
          "mismatch-details": {
            missing_nodes: D.value.comparison.missing_nodes,
            extra_nodes: D.value.comparison.extra_nodes
          },
          onConfirm: Kn,
          onClose: q[24] || (q[24] = (et) => Je.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        b(iT, {
          show: ae.value,
          state: be.value.state,
          progress: be.value.progress,
          message: be.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        pe.value ? (o(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: q[26] || (q[26] = bt((et) => pe.value = !1, ["self"]))
        }, [
          s("div", eP, [
            s("div", tP, [
              q[39] || (q[39] = s("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              s("button", {
                class: "icon-btn",
                onClick: q[25] || (q[25] = (et) => pe.value = !1)
              }, [...q[38] || (q[38] = [
                s("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                ], -1)
              ])])
            ]),
            s("div", sP, [
              q[40] || (q[40] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", nP, [
                (o(!0), i(B, null, ye(N.value, (et) => (o(), i("div", {
                  key: et.name,
                  class: Be(["env-item", { current: et.is_current }])
                }, [
                  s("div", oP, [
                    s("div", aP, [
                      s("span", lP, m(et.is_current ? "●" : "○"), 1),
                      s("span", iP, m(et.name), 1),
                      et.current_branch ? (o(), i("span", rP, "(" + m(et.current_branch) + ")", 1)) : y("", !0),
                      et.is_current ? (o(), i("span", cP, "CURRENT")) : y("", !0)
                    ]),
                    s("div", uP, m(et.workflow_count) + " workflows • " + m(et.node_count) + " nodes ", 1)
                  ]),
                  !et.is_current && W.value.can_switch_environment ? (o(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (en) => oe(et.name)
                  }, " SWITCH ", 8, dP)) : y("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        ue.value ? (o(), R(_M, {
          key: 8,
          "default-path": ((Zs = F.value) == null ? void 0 : Zs.default_path) || "~/comfygit",
          "detected-models-dir": ((No = F.value) == null ? void 0 : No.detected_models_dir) || null,
          "initial-step": te.value,
          "existing-environments": ((z = F.value) == null ? void 0 : z.environments) || [],
          "cli-installed": ((Se = F.value) == null ? void 0 : Se.cli_installed) ?? !0,
          "setup-state": ((je = F.value) == null ? void 0 : je.state) || "no_workspace",
          "workspace-path": ((wt = F.value) == null ? void 0 : wt.workspace_path) || null,
          onComplete: xa,
          onClose: Sa,
          onSwitchEnvironment: Ia,
          onEnvironmentCreatedNoSwitch: Pa
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        s("div", mP, [
          b(um, { name: "toast" }, {
            default: h(() => [
              (o(!0), i(B, null, ye(Ge.value, (et) => (o(), i("div", {
                key: et.id,
                class: Be(["toast", et.type])
              }, [
                s("span", fP, m(et.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), pP = /* @__PURE__ */ Te(vP, [["__scopeId", "data-v-93abae9b"]]), gP = { class: "item-header" }, hP = { class: "item-info" }, yP = { class: "filename" }, wP = { class: "metadata" }, _P = { class: "size" }, kP = {
  key: 0,
  class: "type"
}, bP = { class: "item-actions" }, $P = {
  key: 0,
  class: "progress-section"
}, CP = { class: "progress-bar" }, xP = { class: "progress-stats" }, SP = { class: "downloaded" }, IP = { class: "speed" }, EP = {
  key: 0,
  class: "eta"
}, TP = {
  key: 1,
  class: "status-msg paused"
}, MP = {
  key: 2,
  class: "status-msg queued"
}, PP = {
  key: 3,
  class: "status-msg completed"
}, RP = {
  key: 4,
  class: "status-msg failed"
}, DP = {
  key: 0,
  class: "retries"
}, NP = /* @__PURE__ */ Ee({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: t }) {
    const n = t;
    function a(c) {
      if (c === 0) return "?";
      const u = c / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(c / (1024 * 1024)).toFixed(1)} MB`;
    }
    function l(c) {
      return c === 0 ? "-" : `${(c / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function r(c) {
      if (c < 60) return `${Math.round(c)}s`;
      const u = Math.floor(c / 60);
      return u < 60 ? `${u}m` : `${Math.floor(u / 60)}h ${u % 60}m`;
    }
    return (c, u) => (o(), i("div", {
      class: Be(["download-item", `status-${e.item.status}`])
    }, [
      s("div", gP, [
        s("div", hP, [
          s("div", yP, m(e.item.filename), 1),
          s("div", wP, [
            s("span", _P, m(a(e.item.size)), 1),
            e.item.type ? (o(), i("span", kP, m(e.item.type), 1)) : y("", !0)
          ])
        ]),
        s("div", bP, [
          e.item.status === "queued" || e.item.status === "downloading" ? (o(), i("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (d) => n("cancel")),
            title: "Cancel"
          }, " × ")) : y("", !0),
          e.item.status === "paused" ? (o(), i("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (d) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : y("", !0),
          e.item.status === "failed" ? (o(), i("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (d) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : y("", !0),
          e.item.status === "completed" || e.item.status === "failed" || e.item.status === "paused" ? (o(), i("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (d) => n("remove")),
            title: "Remove"
          }, " × ")) : y("", !0)
        ])
      ]),
      e.item.status === "downloading" ? (o(), i("div", $P, [
        s("div", CP, [
          s("div", {
            class: "progress-fill",
            style: zt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", xP, [
          s("span", SP, m(a(e.item.downloaded)) + " / " + m(a(e.item.size)), 1),
          s("span", IP, m(l(e.item.speed)), 1),
          e.item.eta > 0 ? (o(), i("span", EP, m(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (o(), i("div", TP, " Paused - click Resume to download ")) : e.item.status === "queued" ? (o(), i("div", MP, " Waiting in queue... ")) : e.item.status === "completed" ? (o(), i("div", PP, " ✓ Downloaded ")) : e.item.status === "failed" ? (o(), i("div", RP, [
        x(" ✗ " + m(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (o(), i("span", DP, "(" + m(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Zn = /* @__PURE__ */ Te(NP, [["__scopeId", "data-v-2110df65"]]), LP = { class: "queue-title" }, UP = { class: "count" }, OP = { class: "queue-actions" }, AP = { class: "action-label" }, zP = {
  key: 0,
  class: "overall-progress"
}, FP = { class: "progress-bar" }, VP = {
  key: 0,
  class: "current-mini"
}, BP = { class: "filename" }, WP = { class: "speed" }, GP = {
  key: 1,
  class: "queue-content"
}, jP = {
  key: 0,
  class: "section"
}, HP = {
  key: 1,
  class: "section"
}, qP = { class: "section-header" }, KP = { class: "section-label paused" }, JP = { class: "items-list" }, QP = {
  key: 2,
  class: "section"
}, YP = { class: "section-header" }, XP = { class: "section-label" }, ZP = { class: "items-list" }, eR = {
  key: 3,
  class: "section"
}, tR = { class: "section-header" }, sR = { class: "section-label" }, nR = { class: "items-list" }, oR = {
  key: 4,
  class: "section"
}, aR = { class: "section-header" }, lR = { class: "section-label failed" }, iR = { class: "items-list" }, rR = /* @__PURE__ */ Ee({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: t,
      currentDownload: n,
      queuedItems: a,
      completedItems: l,
      failedItems: r,
      pausedItems: c,
      hasItems: u,
      activeCount: d,
      cancelDownload: f,
      retryDownload: v,
      resumeDownload: p,
      resumeAllPaused: w,
      removeItem: g,
      clearCompleted: k
    } = qn(), $ = _(!1);
    let S = null;
    $t(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (P, D) => {
        S && (clearTimeout(S), S = null);
        const A = P.active === 0 && P.failed === 0 && P.paused === 0 && P.completed > 0, V = D && (D.active > 0 || D.paused > 0);
        A && V && (S = setTimeout(() => {
          k(), S = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = M(() => {
      var A;
      if (t.items.length === 0) return 0;
      const P = l.value.length, D = ((A = n.value) == null ? void 0 : A.progress) || 0;
      return Math.round((P + D / 100) / t.items.length * 100);
    });
    function I(P) {
      f(P);
    }
    function E(P) {
      return P === 0 ? "..." : `${(P / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (P, D) => (o(), R(as, { to: "body" }, [
      at(u) ? (o(), i("div", {
        key: 0,
        class: Be(["model-download-queue", { minimized: !$.value }])
      }, [
        s("div", {
          class: "queue-header",
          onClick: D[0] || (D[0] = (A) => $.value = !$.value)
        }, [
          s("div", LP, [
            D[4] || (D[4] = s("span", { class: "icon" }, "↓", -1)),
            D[5] || (D[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", UP, "(" + m(at(d)) + "/" + m(at(t).items.length) + ")", 1)
          ]),
          s("div", OP, [
            s("span", AP, m($.value ? "minimize" : "expand"), 1)
          ])
        ]),
        $.value ? (o(), i("div", GP, [
          at(n) ? (o(), i("div", jP, [
            D[6] || (D[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            b(Zn, {
              item: at(n),
              onCancel: D[1] || (D[1] = (A) => I(at(n).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          at(c).length > 0 ? (o(), i("div", HP, [
            s("div", qP, [
              s("span", KP, "Paused (" + m(at(c).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: D[2] || (D[2] = //@ts-ignore
                (...A) => at(w) && at(w)(...A))
              }, "Resume All")
            ]),
            s("div", JP, [
              (o(!0), i(B, null, ye(at(c), (A) => (o(), R(Zn, {
                key: A.id,
                item: A,
                onResume: (V) => at(p)(A.id),
                onRemove: (V) => at(g)(A.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          at(a).length > 0 ? (o(), i("div", QP, [
            s("div", YP, [
              s("span", XP, "Queued (" + m(at(a).length) + ")", 1)
            ]),
            s("div", ZP, [
              (o(!0), i(B, null, ye(at(a), (A) => (o(), R(Zn, {
                key: A.id,
                item: A,
                onCancel: (V) => I(A.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          at(l).length > 0 ? (o(), i("div", eR, [
            s("div", tR, [
              s("span", sR, "Completed (" + m(at(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: D[3] || (D[3] = //@ts-ignore
                (...A) => at(k) && at(k)(...A))
              }, "Clear")
            ]),
            s("div", nR, [
              (o(!0), i(B, null, ye(at(l).slice(0, 3), (A) => (o(), R(Zn, {
                key: A.id,
                item: A,
                onRemove: (V) => at(g)(A.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          at(r).length > 0 ? (o(), i("div", oR, [
            s("div", aR, [
              s("span", lR, "Failed (" + m(at(r).length) + ")", 1)
            ]),
            s("div", iR, [
              (o(!0), i(B, null, ye(at(r), (A) => (o(), R(Zn, {
                key: A.id,
                item: A,
                onRetry: (V) => at(v)(A.id),
                onRemove: (V) => at(g)(A.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (o(), i("div", zP, [
          s("div", FP, [
            s("div", {
              class: "progress-fill",
              style: zt({ width: `${C.value}%` })
            }, null, 4)
          ]),
          at(n) ? (o(), i("div", VP, [
            s("span", BP, m(at(n).filename), 1),
            s("span", WP, m(E(at(n).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), cR = /* @__PURE__ */ Te(rR, [["__scopeId", "data-v-3a3c9607"]]), uR = { class: "detail-header" }, dR = { class: "item-count" }, mR = { class: "resource-list" }, fR = { class: "item-info" }, vR = { class: "item-name" }, pR = {
  key: 0,
  class: "item-subtitle"
}, gR = {
  key: 0,
  class: "installing-badge"
}, hR = ["title"], yR = {
  key: 2,
  class: "installed-badge"
}, wR = {
  key: 3,
  class: "queued-badge"
}, _R = {
  key: 4,
  class: "action-buttons"
}, kR = {
  key: 1,
  class: "no-action"
}, bR = /* @__PURE__ */ Ee({
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
  setup(e, { emit: t }) {
    const n = e, a = t, l = M(() => n.items.filter((g) => g.canAction)), r = M(() => l.value.length > 0 && l.value.every(
      (g) => {
        var k, $;
        return n.queuedItems.has(g.id) || ((k = n.installedItems) == null ? void 0 : k.has(g.id)) || (($ = n.failedItems) == null ? void 0 : $.has(g.id));
      }
    )), c = M(() => r.value ? "All Queued" : n.itemType === "models" ? "Download All" : "Install All");
    function u(g) {
      return n.queuedItems.has(g.id);
    }
    function d(g) {
      return n.installingItem === g.id;
    }
    function f(g) {
      var k;
      return ((k = n.installedItems) == null ? void 0 : k.has(g.id)) ?? !1;
    }
    function v(g) {
      var k;
      return ((k = n.failedItems) == null ? void 0 : k.has(g.id)) ?? !1;
    }
    function p(g) {
      var k;
      return ((k = n.failedItems) == null ? void 0 : k.get(g.id)) || "Unknown error";
    }
    function w(g) {
      return g.actions && g.actions.length > 0 ? g.actions : [{
        key: "default",
        label: n.itemType === "models" ? "Download" : "Install",
        variant: "secondary"
      }];
    }
    return (g, k) => (o(), R(Mt, {
      title: e.title,
      size: "md",
      onClose: k[2] || (k[2] = ($) => a("close"))
    }, {
      body: h(() => [
        s("div", uR, [
          s("span", dR, m(e.items.length) + " " + m(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (o(), R(Ue, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: k[0] || (k[0] = ($) => a("bulk-action"))
          }, {
            default: h(() => [
              x(m(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        s("div", mR, [
          (o(!0), i(B, null, ye(e.items, ($) => (o(), i("div", {
            key: $.id,
            class: "resource-item"
          }, [
            s("div", fR, [
              s("span", vR, m($.name), 1),
              $.subtitle ? (o(), i("span", pR, m($.subtitle), 1)) : y("", !0)
            ]),
            $.canAction ? (o(), i(B, { key: 0 }, [
              d($) ? (o(), i("span", gR, "Installing...")) : v($) ? (o(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p($)
              }, "Failed ⚠", 8, hR)) : f($) ? (o(), i("span", yR, "Installed")) : u($) ? (o(), i("span", wR, "Queued")) : (o(), i("div", _R, [
                (o(!0), i(B, null, ye(w($), (S) => (o(), R(Ue, {
                  key: `${$.id}-${S.key}`,
                  size: "sm",
                  variant: S.variant || "secondary",
                  onClick: (C) => a("action", $, S.key)
                }, {
                  default: h(() => [
                    x(m(S.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (o(), i("span", kR, m($.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        b(Ue, {
          variant: "secondary",
          onClick: k[1] || (k[1] = ($) => a("close"))
        }, {
          default: h(() => [...k[3] || (k[3] = [
            x("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), $R = /* @__PURE__ */ Te(bR, [["__scopeId", "data-v-ec7e9202"]]), CR = {
  key: 0,
  class: "loading-state"
}, xR = {
  key: 1,
  class: "analysis-results"
}, SR = {
  key: 0,
  class: "section"
}, IR = { class: "section-header" }, ER = { class: "section-title" }, TR = { class: "item-list" }, MR = { class: "package-info" }, PR = { class: "package-name" }, RR = { class: "node-count" }, DR = {
  key: 1,
  class: "installing-badge"
}, NR = {
  key: 2,
  class: "queued-badge"
}, LR = ["title"], UR = {
  key: 5,
  class: "installed-badge"
}, OR = {
  key: 1,
  class: "section"
}, AR = { class: "section-header" }, zR = { class: "section-title" }, FR = { class: "item-list" }, VR = { class: "node-type" }, BR = {
  key: 0,
  class: "overflow-note"
}, WR = {
  key: 2,
  class: "section"
}, GR = { class: "section-header" }, jR = { class: "section-title" }, HR = { class: "item-list" }, qR = { class: "node-type" }, KR = { class: "not-found" }, JR = {
  key: 0,
  class: "overflow-note"
}, QR = {
  key: 3,
  class: "section"
}, YR = { class: "section-header" }, XR = { class: "section-title" }, ZR = { class: "item-list" }, e7 = { class: "package-info community-info" }, t7 = { class: "community-title-row" }, s7 = { class: "package-name" }, n7 = { class: "node-count" }, o7 = { class: "community-mapping-note" }, a7 = { key: 0 }, l7 = {
  key: 0,
  class: "community-actions"
}, i7 = {
  key: 1,
  class: "installing-badge"
}, r7 = {
  key: 2,
  class: "queued-badge"
}, c7 = ["title"], u7 = {
  key: 5,
  class: "installed-badge"
}, d7 = ["title"], m7 = {
  key: 1,
  class: "no-url"
}, f7 = {
  key: 4,
  class: "section"
}, v7 = { class: "section-header" }, p7 = { class: "section-title" }, g7 = { class: "item-list" }, h7 = { class: "model-info" }, y7 = { class: "model-name" }, w7 = {
  key: 1,
  class: "queued-badge"
}, _7 = {
  key: 1,
  class: "no-url"
}, k7 = { class: "dont-show-again" }, b7 = 3e4, $7 = /* @__PURE__ */ Ee({
  __name: "MissingResourcesPopup",
  setup(e) {
    const t = _(!1), n = _(null), a = _(null), l = _(!1), r = _(/* @__PURE__ */ new Set()), c = _(/* @__PURE__ */ new Set()), u = _(/* @__PURE__ */ new Map()), d = _(/* @__PURE__ */ new Map()), f = _(/* @__PURE__ */ new Set()), v = _(!1), p = _(null), w = _(0), g = _(null), k = _(!1), $ = _(!1), S = _(!1), C = _(null), I = _(null), E = _(null), P = _(/* @__PURE__ */ new Set()), D = _(/* @__PURE__ */ new Map()), A = _(/* @__PURE__ */ new Map()), { addToQueue: V } = qn(), {
      queueNodeInstall: N,
      previewNodeDependencyChanges: j,
      applyReviewedNodeDependencyChanges: le
    } = mt(), ce = M(() => {
      var K;
      return ((K = a.value) == null ? void 0 : K.package_aliases) || {};
    });
    function Q(K) {
      if (!K) return null;
      const re = ce.value;
      let Re = K;
      const $e = /* @__PURE__ */ new Set();
      for (; re[Re] && !$e.has(Re); )
        $e.add(Re), Re = re[Re];
      return Re;
    }
    function ve(K, re) {
      return K instanceof Error && K.message ? K.message : typeof K == "string" && K.trim().length > 0 ? K : re;
    }
    function J(K) {
      for (const [re, Re] of D.value.entries())
        Re === K && D.value.delete(re);
    }
    function L(K, re, Re) {
      var $e, qe;
      u.value.delete(K), c.value.delete(K), d.value.set(K, re), console.warn("[ComfyGit] Package requires dependency review:", {
        packageId: K,
        reason: (($e = Re == null ? void 0 : Re.dependency_review) == null ? void 0 : $e.reason) || ((qe = Re == null ? void 0 : Re.messages) == null ? void 0 : qe[0])
      });
    }
    async function F(K) {
      const re = d.value.get(K);
      if (!(!re || Me.value)) {
        k.value = !0, $.value = !0, S.value = !1, C.value = null, I.value = null, E.value = K;
        try {
          const Re = await j(re);
          I.value = Re.preview, Re.preview.success || (C.value = Re.preview.error || "Unable to generate dependency preview");
        } catch (Re) {
          C.value = ve(Re, "Unable to generate dependency preview");
        } finally {
          $.value = !1;
        }
      }
    }
    async function ue() {
      const K = E.value, re = I.value, Re = K ? d.value.get(K) : null;
      if (!(!K || !re || !Re || S.value)) {
        S.value = !0, C.value = null;
        try {
          const $e = await le({
            ...Re,
            accepted_preview: {
              baseline_fingerprint: re.baseline_fingerprint,
              diff_fingerprint: re.diff_fingerprint,
              proposed_fingerprint: re.proposed_fingerprint
            }
          });
          if ($e.status !== "success")
            throw new Error($e.error || $e.message || "Unable to apply dependency changes");
          d.value.delete(K), u.value.delete(K), c.value.delete(K), r.value.add(K), w.value++, window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
            detail: { count: 1 }
          })), te();
        } catch ($e) {
          C.value = ve($e, "Unable to apply dependency changes");
        } finally {
          S.value = !1;
        }
      }
    }
    function te() {
      k.value = !1, $.value = !1, S.value = !1, C.value = null, I.value = null, E.value = null;
    }
    function me(K) {
      if (!A.value.has(K)) return;
      const re = A.value.get(K);
      clearTimeout(re), A.value.delete(K);
    }
    function de() {
      for (const K of A.value.values())
        clearTimeout(K);
      A.value = /* @__PURE__ */ new Map();
    }
    function W(K) {
      me(K);
      const re = setTimeout(() => {
        if (A.value.delete(K), !c.value.has(K)) return;
        J(K), c.value.delete(K), p.value === K && (p.value = null), u.value.set(K, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", K);
      }, b7);
      A.value.set(K, re);
    }
    function se(K) {
      const re = `Cannot install "${K.title}" - package_id is missing`;
      u.value.set(K.item_id, re), n.value = re, console.warn("[ComfyGit] Community install requested without package_id:", K);
    }
    const ne = M(() => pe.value.length > 0 || Le.value.length > 0 || ke.value.length > 0 || De.value.length > 0 || Ce.value.length > 0), Me = M(() => D.value.size > 0 || c.value.size > 0 || !!p.value), pe = M(() => {
      var Re, $e;
      if (!((Re = a.value) != null && Re.nodes)) return [];
      const K = /* @__PURE__ */ new Map(), re = (a.value.nodes.resolved || []).filter((qe) => {
        var Ze;
        return !qe.is_installed && ((Ze = qe.package) == null ? void 0 : Ze.package_id);
      });
      for (const qe of re) {
        const Ze = Q(qe.package.package_id);
        if (!Ze) continue;
        K.has(Ze) || K.set(Ze, {
          package_id: Ze,
          title: qe.package.title || Ze,
          node_count: 0,
          node_types: [],
          repository: qe.package.repository || null,
          latest_version: qe.package.latest_version || null
        });
        const lt = K.get(Ze);
        lt.node_count++, lt.node_types.push((($e = qe.reference) == null ? void 0 : $e.node_type) || qe.node_type);
      }
      return Array.from(K.values());
    }), ze = M(() => pe.value.reduce((K, re) => K + re.node_count, 0)), Le = M(() => {
      var K;
      return (K = a.value) != null && K.nodes ? (a.value.nodes.unresolved || []).map((re) => {
        var Re;
        return {
          node_type: ((Re = re.reference) == null ? void 0 : Re.node_type) || re.node_type
        };
      }) : [];
    }), ke = M(() => {
      var re;
      if (!((re = a.value) != null && re.nodes)) return [];
      const K = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((Re) => {
        var qe;
        const $e = ((qe = Re.reference) == null ? void 0 : qe.node_type) || Re.node_type;
        return {
          node_type: $e,
          guidance: Re.guidance || K[$e] || null
        };
      });
    }), De = M(() => {
      var Re, $e, qe, Ze, lt, ft, It, ht;
      if (!((Re = a.value) != null && Re.nodes)) return [];
      const K = a.value.node_guidance || {}, re = /* @__PURE__ */ new Map();
      for (const Y of a.value.nodes.uninstallable || []) {
        const U = (($e = Y.reference) == null ? void 0 : $e.node_type) || Y.node_type, oe = Q(((qe = Y.package) == null ? void 0 : qe.package_id) || null), He = oe || `node:${U}`;
        re.has(He) || re.set(He, {
          item_id: He,
          node_type: U,
          title: ((Ze = Y.package) == null ? void 0 : Ze.title) || oe || U,
          node_count: 0,
          package_id: oe,
          repository: ((lt = Y.package) == null ? void 0 : lt.repository) || null,
          latest_version: ((ft = Y.package) == null ? void 0 : ft.latest_version) || null,
          guidance: Y.guidance || K[U] || null
        });
        const tt = re.get(He);
        tt.node_count++, tt.guidance || (tt.guidance = Y.guidance || K[U] || null), !tt.repository && ((It = Y.package) != null && It.repository) && (tt.repository = Y.package.repository), !tt.latest_version && ((ht = Y.package) != null && ht.latest_version) && (tt.latest_version = Y.package.latest_version);
      }
      return Array.from(re.values());
    }), ge = M(() => De.value.filter((K) => !!Ie(K))), we = M(() => De.value.length >= 5 ? De.value.slice(0, 4) : De.value), T = M(() => ge.value.length > 0 && ge.value.every((K) => {
      const re = K.package_id;
      return r.value.has(re) || c.value.has(re) || u.value.has(re) || d.value.has(re);
    }));
    function O(K) {
      const re = [];
      return ae(K) && re.push({ key: "install_registry", label: "Install from Registry", variant: "secondary" }), K.repository && re.push({
        key: "install_git",
        label: "Install via Git",
        variant: ae(K) ? "ghost" : "secondary"
      }), re;
    }
    function ae(K) {
      return !!K.latest_version;
    }
    function Ie(K) {
      return K.package_id ? ae(K) ? "registry" : K.repository ? "git" : null : null;
    }
    const Ce = M(() => {
      var qe;
      if (!((qe = a.value) != null && qe.models)) return [];
      const K = (a.value.models.resolved || []).filter(
        (Ze) => Ze.match_type === "download_intent" || Ze.match_type === "property_download_intent" || Ze.match_type === "not_found"
      ).map((Ze) => {
        var lt, ft, It, ht;
        return {
          filename: ((ft = (lt = Ze.reference) == null ? void 0 : lt.widget_value) == null ? void 0 : ft.split("/").pop()) || ((It = Ze.reference) == null ? void 0 : It.widget_value) || Ze.widget_value,
          widget_value: ((ht = Ze.reference) == null ? void 0 : ht.widget_value) || Ze.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: Ze.download_source || null,
          targetPath: Ze.target_path || null,
          canDownload: !!(Ze.download_source && Ze.target_path)
        };
      }), re = (a.value.models.unresolved || []).map((Ze) => {
        var lt, ft, It, ht;
        return {
          filename: ((ft = (lt = Ze.reference) == null ? void 0 : lt.widget_value) == null ? void 0 : ft.split("/").pop()) || ((It = Ze.reference) == null ? void 0 : It.widget_value) || Ze.widget_value,
          widget_value: ((ht = Ze.reference) == null ? void 0 : ht.widget_value) || Ze.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), Re = /* @__PURE__ */ new Map(), $e = [];
      for (const Ze of K) {
        if (!Ze.url) {
          $e.push(Ze);
          continue;
        }
        const lt = `${Ze.filename}::${Ze.url}`, ft = Re.get(lt);
        if (!ft) {
          Re.set(lt, Ze);
          continue;
        }
        !ft.targetPath && Ze.targetPath && (ft.targetPath = Ze.targetPath), !ft.canDownload && Ze.canDownload && (ft.canDownload = Ze.canDownload);
      }
      return [...Re.values(), ...$e, ...re];
    }), be = M(() => Ce.value.filter((K) => K.canDownload)), ee = M(() => pe.value.length >= 5 ? pe.value.slice(0, 4) : pe.value), H = M(() => Ce.value.length >= 5 ? Ce.value.slice(0, 4) : Ce.value), he = M(() => pe.value.length > 0 && pe.value.every(
      (K) => r.value.has(K.package_id) || c.value.has(K.package_id) || u.value.has(K.package_id) || d.value.has(K.package_id)
    )), _e = M(() => be.value.length > 0 && be.value.every((K) => f.value.has(K.url))), Ke = M(() => pe.value.length > 0 || ge.value.length > 0 || be.value.length > 0), We = M(() => {
      const K = (pe.value.length === 0 || he.value) && (ge.value.length === 0 || T.value), re = be.value.length === 0 || _e.value;
      return K && re;
    }), xe = M(() => g.value === "models" ? `Missing Models (${Ce.value.length})` : g.value === "packages" ? `Missing Custom Nodes (${ze.value})` : g.value === "community" ? `Community-Mapped Packages (${De.value.length})` : ""), Z = M(() => g.value === "models" ? Ce.value.map((K) => ({
      id: K.url || K.widget_value,
      name: K.filename,
      canAction: K.canDownload,
      actionDisabledReason: K.canDownload ? void 0 : "Manual download required"
    })) : g.value === "packages" ? pe.value.map((K) => ({
      id: K.package_id,
      name: K.title,
      subtitle: `(${K.node_count} ${K.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : g.value === "community" ? De.value.map((K) => ({
      id: K.package_id || K.item_id,
      name: K.title,
      subtitle: `(${K.node_count} ${K.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!Ie(K),
      actionDisabledReason: Ie(K) ? void 0 : "Manual setup required",
      actions: O(K)
    })) : []);
    function Ve(K, re) {
      if (g.value === "models") {
        const Re = Ce.value.find(($e) => $e.url === K.id || $e.widget_value === K.id);
        Re && Xe(Re);
      } else if (g.value === "packages") {
        const Re = pe.value.find(($e) => $e.package_id === K.id);
        Re && Qe(Re);
      } else if (g.value === "community") {
        const Re = De.value.find((qe) => (qe.package_id || qe.item_id) === K.id);
        if (!Re) return;
        if (!Re.package_id) {
          se({ item_id: Re.item_id, title: Re.title });
          return;
        }
        const $e = re === "install_git" ? "git" : "registry";
        if ($e === "registry" && !ae(Re)) {
          se({ item_id: Re.item_id, title: Re.title });
          return;
        }
        Fe(Re, $e);
      }
    }
    function Ne() {
      g.value === "models" ? Kt() : g.value === "packages" ? kt() : g.value === "community" && Lt();
    }
    async function Qe(K) {
      return Ae(K.package_id, K.latest_version, "registry");
    }
    async function Fe(K, re) {
      return K.package_id ? re === "registry" && !ae(K) ? (u.value.set(K.package_id, "No installable registry version is available. Use Git install if a repository is available."), !1) : re === "git" && !K.repository ? (u.value.set(K.package_id, "No Git repository is available for this community mapping."), !1) : Ae(K.package_id, K.latest_version, re, K.repository) : (se({ item_id: K.item_id, title: K.title }), !1);
    }
    async function Ae(K, re, Re, $e) {
      const qe = Q(K) || K, Ze = re || "latest";
      if (r.value.has(qe) || c.value.has(qe) || u.value.has(qe) || d.value.has(qe))
        return !0;
      cs(), p.value = qe;
      let lt = null;
      try {
        const ft = {
          id: qe,
          version: Ze,
          selected_version: Ze,
          mode: "remote",
          channel: "default"
        };
        Re === "git" && $e && (ft.repository = $e, ft.install_source = "git");
        const { ui_id: It, status: ht } = await N(ft, {
          beforeQueueStart: (Y) => {
            lt = Y, D.value.set(Y, qe), c.value.add(qe), W(qe), console.log("[ComfyGit] Registered pending install:", {
              ui_id: Y,
              packageId: qe,
              pendingInstalls: Array.from(D.value.entries())
            });
          }
        });
        return (ht == null ? void 0 : ht.status_str) === "dependency_review_required" ? (lt && D.value.delete(lt), J(qe), me(qe), p.value === qe && (p.value = null), L(qe, ft, ht), !1) : (lt || (lt = It, D.value.set(It, qe), c.value.add(qe), W(qe), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: It,
          packageId: qe,
          pendingInstalls: Array.from(D.value.entries())
        })), !0);
      } catch (ft) {
        const It = ve(ft, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", ft), lt && D.value.delete(lt), J(qe), me(qe), c.value.delete(qe), d.value.delete(qe), u.value.set(qe, It), !1;
      } finally {
        p.value = null;
      }
    }
    function Xe(K) {
      !K.url || !K.targetPath || f.value.has(K.url) || (V([{
        workflow: "unsaved",
        filename: K.filename,
        url: K.url,
        targetPath: K.targetPath
      }]), f.value.add(K.url));
    }
    async function kt() {
      const K = { attempted: 0, failed: 0 };
      for (const re of pe.value)
        !r.value.has(re.package_id) && !c.value.has(re.package_id) && !u.value.has(re.package_id) && !d.value.has(re.package_id) && (K.attempted++, await Qe(re) || K.failed++);
      return K;
    }
    async function Lt() {
      const K = { attempted: 0, failed: 0 };
      for (const re of ge.value) {
        const Re = re.package_id;
        if (!r.value.has(Re) && !c.value.has(Re) && !u.value.has(Re) && !d.value.has(Re)) {
          K.attempted++;
          const $e = Ie(re);
          ($e ? await Fe(re, $e) : !1) || K.failed++;
        }
      }
      return K;
    }
    function Kt() {
      const K = be.value.filter(
        (re) => !f.value.has(re.url)
      );
      if (K.length === 0) return 0;
      V(K.map((re) => ({
        workflow: "unsaved",
        filename: re.filename,
        url: re.url,
        targetPath: re.targetPath
      })));
      for (const re of K)
        f.value.add(re.url);
      return K.length;
    }
    async function X() {
      const K = await kt(), re = await Lt();
      Kt();
      const Re = K.attempted + re.attempted, $e = K.failed + re.failed;
      if (Re > 0 && $e > 0) {
        const qe = Re - $e;
        n.value = `${qe} of ${Re} installs queued, ${$e} failed`;
      }
    }
    function G() {
      v.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function fe(K) {
      var qe, Ze;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const re = K == null ? void 0 : K.id;
      if (re && P.value.has(re)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${re} this session`);
        return;
      }
      const Re = window.app, $e = (qe = Re == null ? void 0 : Re.extensionManager) == null ? void 0 : qe.workflow;
      if ($e) {
        let It = !1;
        for (let ht = 0; ht < 20; ht++) {
          const Y = $e.activeWorkflow;
          if (!Y) {
            await new Promise((He) => setTimeout(He, 50));
            continue;
          }
          const U = (Ze = Y.activeState) == null ? void 0 : Ze.id;
          if (!(re && U === re)) {
            ht < 19 && await new Promise((He) => setTimeout(He, 50));
            continue;
          }
          if (It = !0, Y.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${Y.filename}`), re && P.value.add(re);
            return;
          }
          break;
        }
        It || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      t.value = !0, n.value = null, de(), r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Map(), f.value = /* @__PURE__ */ new Set(), D.value = /* @__PURE__ */ new Map(), v.value = !1, w.value = 0;
      try {
        const lt = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: K, name: "unsaved" })
        });
        if (!lt.ok) {
          const ft = await lt.json();
          throw new Error(ft.error || "Failed to analyze workflow");
        }
        a.value = await lt.json(), ne.value && (l.value = !0, re && P.value.add(re));
      } catch (lt) {
        console.error("[ComfyGit] Failed to analyze workflow:", lt);
      } finally {
        t.value = !1;
      }
    }
    function Je() {
      de(), l.value = !1, a.value = null;
    }
    function Ge(K) {
      const { workflow: re } = K.detail;
      re && fe(re);
    }
    function it(K) {
      var $e;
      const re = ($e = K.detail) == null ? void 0 : $e.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: re,
        pendingInstalls: Array.from(D.value.entries()),
        eventDetail: K.detail
      });
      const Re = D.value.get(re);
      Re ? (me(Re), p.value = Re, console.log("[ComfyGit] Installing package:", Re)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", re);
    }
    function Oe(K) {
      var qe, Ze, lt, ft, It, ht, Y, U, oe, He, tt;
      const re = (qe = K.detail) == null ? void 0 : qe.ui_id, Re = (lt = (Ze = K.detail) == null ? void 0 : Ze.status) == null ? void 0 : lt.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: re,
        status: Re,
        pendingInstalls: Array.from(D.value.entries()),
        eventDetail: K.detail
      });
      const $e = D.value.get(re);
      if ($e) {
        if (me($e), D.value.delete(re), c.value.delete($e), p.value === $e && (p.value = null), Re === "success")
          r.value.add($e), w.value++, console.log("[ComfyGit] Package installed successfully:", $e);
        else if (Re === "dependency_review_required") {
          const yt = ((It = (ft = K.detail) == null ? void 0 : ft.task) == null ? void 0 : It.params) || ((ht = K.detail) == null ? void 0 : ht.params);
          yt != null && yt.id ? L($e, yt, (Y = K.detail) == null ? void 0 : Y.status) : u.value.set($e, "Dependency review required");
        } else {
          const yt = ((He = (oe = (U = K.detail) == null ? void 0 : U.status) == null ? void 0 : oe.messages) == null ? void 0 : He[0]) || ((tt = K.detail) == null ? void 0 : tt.result) || "Unknown error";
          u.value.set($e, yt), console.error("[ComfyGit] Package install failed:", $e, yt);
        }
        D.value.size === 0 && w.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", w.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: w.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", re);
    }
    let rt = null;
    function Pt() {
      return rt || (rt = Hn()), rt;
    }
    let Jt = !1;
    function cs() {
      if (Jt) return !0;
      const K = Pt();
      return K ? (K.addEventListener("cm-task-started", it), K.addEventListener("cm-task-completed", Oe), K.addEventListener("comfygit:workflow-changed", Ft), Jt = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function Ft(K) {
      const { change_type: re } = K.detail;
      (re === "created" || re === "modified") && l.value && (de(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return ut(() => {
      window.addEventListener("comfygit:workflow-loaded", Ge);
    }), Gn(() => {
      if (de(), window.removeEventListener("comfygit:workflow-loaded", Ge), Jt) {
        const K = Pt();
        K && (K.removeEventListener("cm-task-started", it), K.removeEventListener("cm-task-completed", Oe), K.removeEventListener("comfygit:workflow-changed", Ft)), Jt = !1;
      }
    }), (K, re) => {
      var Re;
      return o(), i(B, null, [
        l.value ? (o(), R(Mt, {
          key: 0,
          title: "Missing Dependencies",
          size: "md",
          loading: t.value,
          error: n.value || void 0,
          onClose: Je
        }, {
          body: h(() => [
            t.value ? (o(), i("div", CR, [...re[5] || (re[5] = [
              s("div", { class: "loading-spinner" }, null, -1),
              s("span", null, "Analyzing workflow...", -1)
            ])])) : a.value && ne.value ? (o(), i("div", xR, [
              pe.value.length > 0 ? (o(), i("div", SR, [
                s("div", IR, [
                  s("span", ER, "Missing Custom Nodes (" + m(ze.value) + ")", 1),
                  pe.value.length > 1 ? (o(), R(Ue, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: he.value,
                    onClick: kt
                  }, {
                    default: h(() => [
                      x(m(he.value ? "All Queued" : "Install All"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])) : y("", !0)
                ]),
                s("div", TR, [
                  (o(!0), i(B, null, ye(ee.value, ($e) => (o(), i("div", {
                    key: $e.package_id,
                    class: "package-item"
                  }, [
                    s("div", MR, [
                      s("span", PR, m($e.title), 1),
                      s("span", RR, "(" + m($e.node_count) + " " + m($e.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    !r.value.has($e.package_id) && !c.value.has($e.package_id) && !u.value.has($e.package_id) && !d.value.has($e.package_id) ? (o(), R(Ue, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      disabled: p.value === $e.package_id,
                      onClick: (qe) => Qe($e)
                    }, {
                      default: h(() => [
                        x(m(p.value === $e.package_id ? "Queueing..." : "Install"), 1)
                      ]),
                      _: 2
                    }, 1032, ["disabled", "onClick"])) : p.value === $e.package_id ? (o(), i("span", DR, "Installing...")) : c.value.has($e.package_id) ? (o(), i("span", NR, "Queued")) : u.value.has($e.package_id) ? (o(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get($e.package_id)
                    }, "Failed ⚠", 8, LR)) : d.value.has($e.package_id) ? (o(), R(Ue, {
                      key: 4,
                      size: "sm",
                      variant: "secondary",
                      disabled: Me.value,
                      onClick: (qe) => F($e.package_id)
                    }, {
                      default: h(() => [...re[6] || (re[6] = [
                        x(" Needs Review ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : (o(), i("span", UR, "Installed"))
                  ]))), 128)),
                  pe.value.length >= 5 ? (o(), i("div", {
                    key: 0,
                    class: "show-all-row",
                    onClick: re[0] || (re[0] = ($e) => g.value = "packages")
                  }, [
                    s("span", null, "Show all " + m(pe.value.length) + " packages...", 1),
                    re[7] || (re[7] = s("span", { class: "show-all-arrow" }, "→", -1))
                  ])) : y("", !0)
                ])
              ])) : y("", !0),
              Le.value.length > 0 ? (o(), i("div", OR, [
                s("div", AR, [
                  s("span", zR, "Unknown Nodes (" + m(Le.value.length) + ")", 1)
                ]),
                s("div", FR, [
                  (o(!0), i(B, null, ye(Le.value.slice(0, 5), ($e) => (o(), i("div", {
                    key: $e.node_type,
                    class: "item"
                  }, [
                    s("code", VR, m($e.node_type), 1),
                    re[8] || (re[8] = s("span", { class: "not-found" }, "Not found in registry", -1))
                  ]))), 128)),
                  Le.value.length > 5 ? (o(), i("div", BR, " ...and " + m(Le.value.length - 5) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              ke.value.length > 0 ? (o(), i("div", WR, [
                s("div", GR, [
                  s("span", jR, "Requires Newer ComfyUI (" + m(ke.value.length) + ")", 1)
                ]),
                s("div", HR, [
                  (o(!0), i(B, null, ye(ke.value.slice(0, 5), ($e) => (o(), i("div", {
                    key: `vg-${$e.node_type}`,
                    class: "item"
                  }, [
                    s("code", qR, m($e.node_type), 1),
                    s("span", KR, m($e.guidance || "Requires a newer ComfyUI version"), 1)
                  ]))), 128)),
                  ke.value.length > 5 ? (o(), i("div", JR, " ...and " + m(ke.value.length - 5) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              De.value.length > 0 ? (o(), i("div", QR, [
                s("div", YR, [
                  s("span", XR, "Community-Mapped Packages (" + m(De.value.length) + ")", 1),
                  ge.value.length > 1 ? (o(), R(Ue, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: T.value,
                    onClick: Lt
                  }, {
                    default: h(() => [
                      x(m(T.value ? "All Queued" : "Install All"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])) : y("", !0)
                ]),
                s("div", ZR, [
                  (o(!0), i(B, null, ye(we.value, ($e) => (o(), i("div", {
                    key: `community-${$e.item_id}`,
                    class: "package-item"
                  }, [
                    s("div", e7, [
                      s("div", t7, [
                        s("span", s7, m($e.title), 1),
                        s("span", n7, "(" + m($e.node_count) + " " + m($e.node_count === 1 ? "node" : "nodes") + ")", 1)
                      ]),
                      s("div", o7, [
                        re[9] || (re[9] = x(" Found via community mapping — registry metadata may be incomplete", -1)),
                        $e.guidance ? (o(), i("span", a7, ". " + m($e.guidance), 1)) : y("", !0)
                      ])
                    ]),
                    $e.package_id ? (o(), i(B, { key: 0 }, [
                      !r.value.has($e.package_id) && !c.value.has($e.package_id) && !u.value.has($e.package_id) && !d.value.has($e.package_id) ? (o(), i("div", l7, [
                        ae($e) ? (o(), R(Ue, {
                          key: 0,
                          size: "sm",
                          variant: "secondary",
                          disabled: p.value === $e.package_id,
                          onClick: (qe) => Fe($e, "registry")
                        }, {
                          default: h(() => [
                            x(m(p.value === $e.package_id ? "Queueing..." : "Install from Registry"), 1)
                          ]),
                          _: 2
                        }, 1032, ["disabled", "onClick"])) : y("", !0),
                        $e.repository ? (o(), R(Ue, {
                          key: 1,
                          size: "sm",
                          variant: ae($e) ? "ghost" : "secondary",
                          disabled: p.value === $e.package_id,
                          onClick: (qe) => Fe($e, "git")
                        }, {
                          default: h(() => [...re[10] || (re[10] = [
                            x(" Install via Git ", -1)
                          ])]),
                          _: 1
                        }, 8, ["variant", "disabled", "onClick"])) : y("", !0)
                      ])) : p.value === $e.package_id ? (o(), i("span", i7, "Installing...")) : c.value.has($e.package_id) ? (o(), i("span", r7, "Queued")) : u.value.has($e.package_id) ? (o(), i("span", {
                        key: 3,
                        class: "failed-badge",
                        title: u.value.get($e.package_id)
                      }, "Failed ⚠", 8, c7)) : d.value.has($e.package_id) ? (o(), R(Ue, {
                        key: 4,
                        size: "sm",
                        variant: "secondary",
                        disabled: Me.value,
                        onClick: (qe) => F($e.package_id)
                      }, {
                        default: h(() => [...re[11] || (re[11] = [
                          x(" Needs Review ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : (o(), i("span", u7, "Installed"))
                    ], 64)) : (o(), i(B, { key: 1 }, [
                      u.value.has($e.item_id) ? (o(), i("span", {
                        key: 0,
                        class: "failed-badge",
                        title: u.value.get($e.item_id)
                      }, "Failed ⚠", 8, d7)) : (o(), i("span", m7, "Manual setup required"))
                    ], 64))
                  ]))), 128)),
                  De.value.length >= 5 ? (o(), i("div", {
                    key: 0,
                    class: "show-all-row",
                    onClick: re[1] || (re[1] = ($e) => g.value = "community")
                  }, [
                    s("span", null, "Show all " + m(De.value.length) + " packages...", 1),
                    re[12] || (re[12] = s("span", { class: "show-all-arrow" }, "→", -1))
                  ])) : y("", !0)
                ])
              ])) : y("", !0),
              Ce.value.length > 0 ? (o(), i("div", f7, [
                s("div", v7, [
                  s("span", p7, "Missing Models (" + m(Ce.value.length) + ")", 1),
                  be.value.length > 1 ? (o(), R(Ue, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: _e.value,
                    onClick: Kt
                  }, {
                    default: h(() => [
                      x(m(_e.value ? "All Queued" : "Download All"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])) : y("", !0)
                ]),
                s("div", g7, [
                  (o(!0), i(B, null, ye(H.value, ($e) => (o(), i("div", {
                    key: $e.widget_value,
                    class: "model-item"
                  }, [
                    s("div", h7, [
                      s("span", y7, m($e.filename), 1)
                    ]),
                    $e.canDownload ? (o(), i(B, { key: 0 }, [
                      f.value.has($e.url) ? (o(), i("span", w7, "Queued")) : (o(), R(Ue, {
                        key: 0,
                        size: "sm",
                        variant: "secondary",
                        onClick: (qe) => Xe($e)
                      }, {
                        default: h(() => [...re[13] || (re[13] = [
                          x(" Download ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"]))
                    ], 64)) : (o(), i("span", _7, "Manual download required"))
                  ]))), 128)),
                  Ce.value.length >= 5 ? (o(), i("div", {
                    key: 0,
                    class: "show-all-row",
                    onClick: re[2] || (re[2] = ($e) => g.value = "models")
                  }, [
                    s("span", null, "Show all " + m(Ce.value.length) + " models...", 1),
                    re[14] || (re[14] = s("span", { class: "show-all-arrow" }, "→", -1))
                  ])) : y("", !0)
                ])
              ])) : y("", !0),
              s("div", k7, [
                b(ca, {
                  modelValue: v.value,
                  "onUpdate:modelValue": [
                    re[3] || (re[3] = ($e) => v.value = $e),
                    G
                  ]
                }, {
                  default: h(() => [...re[15] || (re[15] = [
                    x(" Don't show this popup ", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ])) : y("", !0)
          ]),
          footer: h(() => [
            b(Ue, {
              variant: "secondary",
              onClick: Je
            }, {
              default: h(() => [...re[16] || (re[16] = [
                x("Dismiss", -1)
              ])]),
              _: 1
            }),
            Ke.value ? (o(), R(Ue, {
              key: 0,
              variant: "primary",
              disabled: We.value,
              onClick: X
            }, {
              default: h(() => [
                x(m(We.value ? "All Done" : "Download All"), 1)
              ]),
              _: 1
            }, 8, ["disabled"])) : y("", !0)
          ]),
          _: 1
        }, 8, ["loading", "error"])) : y("", !0),
        g.value ? (o(), R($R, {
          key: 1,
          title: xe.value,
          items: Z.value,
          "item-type": g.value,
          "queued-items": g.value === "models" ? f.value : c.value,
          "installed-items": g.value === "models" ? void 0 : r.value,
          "failed-items": g.value === "models" ? void 0 : u.value,
          "installing-item": g.value === "models" ? void 0 : p.value,
          onClose: re[4] || (re[4] = ($e) => g.value = null),
          onAction: Ve,
          onBulkAction: Ne
        }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0),
        k.value ? (o(), R(gc, {
          key: 2,
          loading: $.value,
          error: C.value,
          preview: I.value,
          "can-apply": !!(E.value && ((Re = I.value) != null && Re.success)),
          applying: S.value,
          onClose: te,
          onApply: ue
        }, null, 8, ["loading", "error", "preview", "can-apply", "applying"])) : y("", !0)
      ], 64);
    };
  }
}), C7 = /* @__PURE__ */ Te($7, [["__scopeId", "data-v-9f1fbedc"]]), x7 = {
  key: 0,
  class: "io-mapping-root"
}, S7 = { class: "io-mapping-visual-layer" }, I7 = { class: "io-mapping-header" }, E7 = { class: "io-mapping-header-main" }, T7 = { class: "io-mapping-subtitle" }, M7 = {
  key: 0,
  class: "io-mapping-hover-summary"
}, P7 = { class: "io-mapping-header-actions" }, R7 = { class: "io-mapping-sidebar" }, D7 = { class: "io-mapping-sidebar-scroll" }, N7 = {
  key: 0,
  class: "io-state-block"
}, L7 = {
  key: 1,
  class: "io-state-block io-state-error"
}, U7 = { class: "contract-meta-section" }, O7 = { class: "contract-meta-toggle-icon" }, A7 = {
  key: 0,
  class: "contract-meta-body"
}, z7 = { class: "contract-summary" }, F7 = { class: "summary-pill" }, V7 = { class: "summary-pill" }, B7 = { class: "summary-pill" }, W7 = { class: "mapping-section" }, G7 = { class: "section-header" }, j7 = {
  key: 0,
  class: "empty-message"
}, H7 = ["onClick"], q7 = { class: "item-card-title" }, K7 = { class: "item-card-meta" }, J7 = { class: "item-card-summary" }, Q7 = { key: 0 }, Y7 = { class: "mapping-section" }, X7 = { class: "section-header" }, Z7 = {
  key: 0,
  class: "empty-message"
}, eD = ["onClick"], tD = { class: "item-card-title" }, sD = { class: "item-card-meta" }, nD = { class: "item-card-summary" }, oD = { class: "io-mapping-footer" }, aD = { class: "io-mapping-footer-left" }, lD = { class: "io-mapping-footer-right" }, iD = /* @__PURE__ */ Ee({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const t = e, { getWorkflowContract: n, saveWorkflowContract: a, deleteWorkflowContract: l } = mt(), r = _(!1), c = _(""), u = _(!1), d = _(!1), f = _(!1), v = _(null), p = _(null), w = _(null), g = _(!1), k = _(!1), $ = _(null), S = _(null), C = _(0), I = _(null), E = _(null);
    let P = null;
    const D = [
      "string",
      "integer",
      "number",
      "boolean",
      "enum",
      "image",
      "video",
      "audio",
      "file"
    ], A = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], V = M(() => {
      var X;
      return ((X = p.value) == null ? void 0 : X.contract_summary.has_contract) === !0;
    }), N = M(() => {
      if (!w.value)
        return { inputs: [], outputs: [] };
      const X = w.value.default_contract || "default";
      return w.value.contracts[X] || (w.value.contracts[X] = { inputs: [], outputs: [] }), w.value.contracts[X];
    }), j = M(() => {
      var G;
      const X = ((G = p.value) == null ? void 0 : G.contract_summary.status) ?? "none";
      return X === "valid" ? "Valid Contract" : X === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function le(X) {
      return X ? JSON.parse(JSON.stringify(X)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function ce(X) {
      return X === "integer" || X === "number";
    }
    function Q(X) {
      return X === "enum";
    }
    function ve(X) {
      return X == null ? "" : String(X);
    }
    function J(X) {
      const G = X.trim();
      if (!G) return;
      const fe = Number(G);
      return Number.isFinite(fe) ? fe : void 0;
    }
    function L(X) {
      return (X || []).join(`
`);
    }
    function F(X) {
      return X.split(/[\n,]/).map((G) => G.trim()).filter(Boolean);
    }
    function ue(X) {
      return typeof X == "string" ? X.length > 24 ? `${X.slice(0, 24)}...` : X : String(X);
    }
    function te(X) {
      return X == null ? "" : String(X);
    }
    function me(X) {
      var fe;
      const G = (fe = X == null ? void 0 : X.options) == null ? void 0 : fe.values;
      return Array.isArray(G) ? G.map((Je) => String(Je)).filter(Boolean) : [];
    }
    function de(X, G) {
      var Ge;
      const fe = (Ge = X == null ? void 0 : X.options) == null ? void 0 : Ge[G];
      if (fe == null || fe === "") return;
      const Je = Number(fe);
      return Number.isFinite(Je) ? Je : void 0;
    }
    function W(X, G) {
      return X.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || G;
    }
    function se(X) {
      if (!w.value) return;
      const G = X.trim() || "default";
      w.value.default_contract = G, w.value.contracts[G] || (w.value.contracts[G] = { inputs: [], outputs: [] });
    }
    function ne(X) {
      const G = String(X ?? "").toLowerCase();
      return G.includes("image") ? "image" : G.includes("video") ? "video" : G.includes("audio") ? "audio" : G.includes("int") ? "integer" : G.includes("float") || G.includes("double") || G.includes("number") ? "number" : G.includes("bool") ? "boolean" : G.includes("combo") || G.includes("enum") ? "enum" : G.includes("string") || G.includes("text") ? "string" : "file";
    }
    function Me(X) {
      N.value.inputs.splice(X, 1), $.value === X && ($.value = null);
    }
    function pe(X) {
      N.value.outputs.splice(X, 1), S.value === X && (S.value = null);
    }
    function ze(X) {
      $.value = $.value === X ? null : X, $.value != null && (S.value = null);
    }
    function Le(X) {
      S.value = S.value === X ? null : X, S.value != null && ($.value = null);
    }
    function ke(X) {
      const G = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(X)) : String(X);
      return document.querySelector(`[data-node-id="${G}"]`);
    }
    function De(X) {
      return X instanceof Element ? !!X.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function ge(X) {
      var Je, Ge, it, Oe, rt, Pt;
      if (!(X instanceof Element)) return null;
      const G = X.closest("[data-node-id]"), fe = G == null ? void 0 : G.getAttribute("data-node-id");
      return fe ? ((it = (Ge = (Je = t.comfyApp) == null ? void 0 : Je.graph) == null ? void 0 : Ge.getNodeById) == null ? void 0 : it.call(Ge, fe)) ?? ((Pt = (rt = (Oe = t.comfyApp) == null ? void 0 : Oe.rootGraph) == null ? void 0 : rt.getNodeById) == null ? void 0 : Pt.call(rt, fe)) ?? null : null;
    }
    function we(X, G) {
      if (G == null || G < 0) return null;
      const fe = ke(X);
      return fe ? fe.querySelectorAll('[data-testid="node-widget"]')[G] ?? null : null;
    }
    function T(X) {
      return !X || X.width <= 0 || X.height <= 0 ? null : {
        left: `${X.left}px`,
        top: `${X.top}px`,
        width: `${X.width}px`,
        height: `${X.height}px`
      };
    }
    function O(X) {
      const G = ke((X == null ? void 0 : X.id) ?? "");
      if (G) return G.getBoundingClientRect();
      const fe = t.comfyApp;
      if (!X || typeof (fe == null ? void 0 : fe.canvasPosToClientPos) != "function") return null;
      const Ge = fe.canvasPosToClientPos([X.pos[0], X.pos[1] - 32]), it = fe.canvasPosToClientPos([X.pos[0] + X.size[0], X.pos[1] + X.size[1]]);
      return !Ge || !it ? null : new DOMRect(Ge[0], Ge[1], it[0] - Ge[0], it[1] - Ge[1]);
    }
    function ae(X) {
      var rt, Pt, Jt, cs, Ft, K, re;
      const G = we(X.node_id, X.widget_idx);
      if (G) return G.getBoundingClientRect();
      const fe = ((Jt = (Pt = (rt = t.comfyApp) == null ? void 0 : rt.graph) == null ? void 0 : Pt.getNodeById) == null ? void 0 : Jt.call(Pt, String(X.node_id))) ?? ((K = (Ft = (cs = t.comfyApp) == null ? void 0 : cs.rootGraph) == null ? void 0 : Ft.getNodeById) == null ? void 0 : K.call(Ft, String(X.node_id)));
      if (!fe || typeof X.widget_idx != "number" || !Array.isArray(fe.widgets)) return null;
      const Je = fe.widgets[X.widget_idx];
      if (!Je || typeof ((re = t.comfyApp) == null ? void 0 : re.canvasPosToClientPos) != "function") return O(fe);
      const Ge = 10, it = t.comfyApp.canvasPosToClientPos([fe.pos[0] + Ge, fe.pos[1] + (Je.y ?? 0)]), Oe = t.comfyApp.canvasPosToClientPos([fe.pos[0] + fe.size[0] - Ge, fe.pos[1] + (Je.y ?? 0) + (Je.computedHeight ?? 24)]);
      return !it || !Oe ? O(fe) : new DOMRect(it[0], it[1], Oe[0] - it[0], Oe[1] - it[1]);
    }
    function Ie(X) {
      var fe, Je, Ge, it, Oe, rt;
      const G = ((Ge = (Je = (fe = t.comfyApp) == null ? void 0 : fe.graph) == null ? void 0 : Je.getNodeById) == null ? void 0 : Ge.call(Je, String(X.node_id))) ?? ((rt = (Oe = (it = t.comfyApp) == null ? void 0 : it.rootGraph) == null ? void 0 : Oe.getNodeById) == null ? void 0 : rt.call(Oe, String(X.node_id)));
      return O(G);
    }
    const Ce = M(() => (C.value, N.value.inputs.map((X, G) => {
      const fe = T(ae(X));
      return fe ? {
        key: `input-${G}-${X.node_id}-${X.widget_idx ?? "na"}`,
        style: fe,
        active: $.value === G
      } : null;
    }).filter((X) => !!X))), be = M(() => (C.value, N.value.outputs.map((X, G) => {
      const fe = T(Ie(X));
      return fe ? {
        key: `output-${G}-${X.node_id}-${X.selector ?? "primary"}`,
        style: fe,
        active: S.value === G
      } : null;
    }).filter((X) => !!X)));
    function ee(X) {
      var Jt, cs, Ft, K, re, Re, $e, qe, Ze, lt;
      if (De(X.target)) return null;
      const G = (Jt = t.comfyApp) == null ? void 0 : Jt.canvas;
      if (!G) return null;
      const fe = (cs = G.convertEventToCanvasOffset) == null ? void 0 : cs.call(G, X);
      if (!fe || fe.length < 2) return null;
      const [Je, Ge] = fe, it = G.graph || ((Ft = t.comfyApp) == null ? void 0 : Ft.graph) || ((K = t.comfyApp) == null ? void 0 : K.rootGraph), Oe = ((re = it == null ? void 0 : it.getNodeOnPos) == null ? void 0 : re.call(it, Je, Ge, G.visible_nodes)) || ((Re = G.getNodeOnPos) == null ? void 0 : Re.call(G, Je, Ge)) || ge(X.target);
      if (!Oe) return null;
      const rt = ($e = Oe.getWidgetOnPos) == null ? void 0 : $e.call(Oe, Je, Ge, !0);
      if (rt)
        return { kind: "input", node: Oe, widget: rt, canvasX: Je, canvasY: Ge };
      const Pt = ((qe = Oe.getOutputOnPos) == null ? void 0 : qe.call(Oe, [Je, Ge])) || ((lt = (Ze = Oe.constructor) == null ? void 0 : Ze.nodeData) != null && lt.output_node ? { name: Oe.title || Oe.type || "output", type: "image" } : null);
      return Pt ? { kind: "output", node: Oe, output: Pt, canvasX: Je, canvasY: Ge } : null;
    }
    function H(X, G) {
      var rt;
      const fe = Array.isArray(X.widgets) ? X.widgets.indexOf(G) : -1, Je = N.value.inputs.findIndex(
        (Pt) => String(Pt.node_id) === String(X.id) && Pt.widget_idx === fe
      );
      if (Je >= 0) {
        $.value = Je;
        return;
      }
      const Ge = typeof ((rt = G == null ? void 0 : G.options) == null ? void 0 : rt.property) == "string" ? G.options.property : void 0, it = (G == null ? void 0 : G.name) || Ge || "input", Oe = {
        name: W(String(it), `input_${N.value.inputs.length + 1}`),
        display_name: String((G == null ? void 0 : G.name) || Ge || `Input ${N.value.inputs.length + 1}`),
        type: ne(G == null ? void 0 : G.type),
        node_id: String(X.id),
        widget_idx: fe >= 0 ? fe : void 0,
        field_key: Ge,
        required: !0,
        default: (G == null ? void 0 : G.value) ?? ""
      };
      ce(Oe.type) && (Oe.min = de(G, "min"), Oe.max = de(G, "max")), Q(Oe.type) && (Oe.enum_values = me(G)), N.value.inputs.push(Oe), $.value = N.value.inputs.length - 1, S.value = null;
    }
    function he(X, G) {
      const fe = Array.isArray(X.outputs) ? X.outputs.indexOf(G) : -1, Je = fe >= 0 ? `slot:${fe}` : "primary", Ge = N.value.outputs.findIndex(
        (Oe) => String(Oe.node_id) === String(X.id) && (Oe.selector || "primary") === Je
      );
      if (Ge >= 0) {
        S.value = Ge;
        return;
      }
      const it = {
        name: W(String((G == null ? void 0 : G.name) || "output"), `output_${N.value.outputs.length + 1}`),
        display_name: String((G == null ? void 0 : G.name) || `Output ${N.value.outputs.length + 1}`),
        type: ne(G == null ? void 0 : G.type),
        node_id: String(X.id),
        selector: Je
      };
      N.value.outputs.push(it), S.value = N.value.outputs.length - 1, $.value = null;
    }
    function _e(X) {
      var Je, Ge, it;
      if (!r.value) {
        I.value = null, E.value = null;
        return;
      }
      const G = ee(X);
      if (!G) {
        I.value = null, E.value = null;
        return;
      }
      if (G.kind === "input") {
        const Oe = Array.isArray(G.node.widgets) ? G.node.widgets.indexOf(G.widget) : -1, rt = T(((Je = we(G.node.id, Oe)) == null ? void 0 : Je.getBoundingClientRect()) ?? ae({
          node_id: String(G.node.id),
          widget_idx: Oe >= 0 ? Oe : void 0
        }));
        if (!rt) {
          I.value = null, E.value = null;
          return;
        }
        I.value = {
          kind: "input",
          label: `${((Ge = G.widget) == null ? void 0 : Ge.name) || "widget"} · Node ${G.node.id}`
        }, E.value = { kind: "input", style: rt };
        return;
      }
      const fe = T(O(G.node));
      if (!fe) {
        I.value = null, E.value = null;
        return;
      }
      I.value = {
        kind: "output",
        label: `${((it = G.output) == null ? void 0 : it.name) || G.node.title || G.node.type || "output"} · Node ${G.node.id}`
      }, E.value = { kind: "output", style: fe };
    }
    function Ke(X) {
      var Je, Ge, it;
      if (!r.value || !w.value || X.button !== 0) return;
      const G = ee(X);
      if (!G) return;
      const fe = (Je = t.comfyApp) == null ? void 0 : Je.canvas;
      if (fe) {
        if (G.kind === "input") {
          X.preventDefault(), X.stopImmediatePropagation(), X.stopPropagation(), Array.isArray(fe.graph_mouse) && (fe.graph_mouse[0] = G.canvasX, fe.graph_mouse[1] = G.canvasY), (Ge = fe.selectNode) == null || Ge.call(fe, G.node, !1), H(G.node, G.widget);
          return;
        }
        X.preventDefault(), X.stopImmediatePropagation(), X.stopPropagation(), Array.isArray(fe.graph_mouse) && (fe.graph_mouse[0] = G.canvasX, fe.graph_mouse[1] = G.canvasY), (it = fe.selectNode) == null || it.call(fe, G.node, !1), he(G.node, G.output);
      }
    }
    function We() {
      document.addEventListener("pointerdown", Ke, !0), document.addEventListener("pointermove", _e, !0);
    }
    function xe() {
      document.removeEventListener("pointerdown", Ke, !0), document.removeEventListener("pointermove", _e, !0);
    }
    async function Z() {
      if (c.value) {
        u.value = !0, v.value = null;
        try {
          p.value = await n(c.value), w.value = le(p.value.execution_contract);
        } catch (X) {
          v.value = X instanceof Error ? X.message : "Failed to load workflow contract";
        } finally {
          u.value = !1;
        }
      }
    }
    async function Ve() {
      if (!(!w.value || !c.value)) {
        d.value = !0, v.value = null;
        try {
          p.value = await a(c.value, w.value), w.value = le(p.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Ae({ reopenPanel: !0 });
        } catch (X) {
          v.value = X instanceof Error ? X.message : "Failed to save workflow contract";
        } finally {
          d.value = !1;
        }
      }
    }
    async function Ne() {
      k.value = !0;
    }
    async function Qe() {
      if (c.value) {
        k.value = !1, f.value = !0, v.value = null;
        try {
          await l(c.value), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Ae({ reopenPanel: !0 });
        } catch (X) {
          v.value = X instanceof Error ? X.message : "Failed to delete workflow contract";
        } finally {
          f.value = !1;
        }
      }
    }
    function Fe() {
      window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      }));
    }
    function Ae(X) {
      r.value = !1, I.value = null, E.value = null, k.value = !1, X != null && X.reopenPanel && Fe();
    }
    async function Xe(X) {
      var Je, Ge;
      const fe = (Ge = (Je = X.detail) == null ? void 0 : Je.workflowName) == null ? void 0 : Ge.trim();
      fe && (c.value = fe, $.value = null, S.value = null, g.value = !1, r.value = !0, await Z());
    }
    function kt(X) {
      if (X.key === "Escape" && r.value) {
        if (k.value) {
          k.value = !1;
          return;
        }
        Ae({ reopenPanel: !0 });
      }
    }
    function Lt() {
      if (P != null) return;
      const X = () => {
        if (C.value += 1, !r.value) {
          P = null;
          return;
        }
        P = window.requestAnimationFrame(X);
      };
      P = window.requestAnimationFrame(X);
    }
    function Kt() {
      P != null && (window.cancelAnimationFrame(P), P = null);
    }
    return $t(r, (X) => {
      X ? (We(), Lt()) : (xe(), Kt());
    }), ut(() => {
      window.addEventListener("comfygit:open-io-mapping", Xe), window.addEventListener("keydown", kt);
    }), To(() => {
      xe(), Kt(), window.removeEventListener("comfygit:open-io-mapping", Xe), window.removeEventListener("keydown", kt);
    }), (X, G) => r.value ? (o(), i("div", x7, [
      s("div", S7, [
        (o(!0), i(B, null, ye(Ce.value, (fe) => (o(), i("div", {
          key: fe.key,
          class: Be(["io-highlight", "io-highlight-input", { active: fe.active }]),
          style: zt(fe.style)
        }, null, 6))), 128)),
        (o(!0), i(B, null, ye(be.value, (fe) => (o(), i("div", {
          key: fe.key,
          class: Be(["io-highlight", "io-highlight-output", { active: fe.active }]),
          style: zt(fe.style)
        }, null, 6))), 128)),
        E.value ? (o(), i("div", {
          key: 0,
          class: Be(["io-highlight", E.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: zt(E.value.style)
        }, null, 6)) : y("", !0)
      ]),
      s("div", I7, [
        s("div", E7, [
          G[8] || (G[8] = s("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          s("div", T7, m(c.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          I.value ? (o(), i("div", M7, " Hovering " + m(I.value.kind) + ": " + m(I.value.label), 1)) : y("", !0)
        ]),
        s("div", P7, [
          b(Ue, {
            size: "sm",
            variant: "secondary",
            onClick: G[0] || (G[0] = (fe) => Ae({ reopenPanel: !0 }))
          }, {
            default: h(() => [...G[9] || (G[9] = [
              x(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      s("aside", R7, [
        s("div", D7, [
          u.value ? (o(), i("div", N7, " Loading workflow contract... ")) : v.value ? (o(), i("div", L7, m(v.value), 1)) : w.value ? (o(), i(B, { key: 2 }, [
            s("section", U7, [
              s("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: G[1] || (G[1] = (fe) => g.value = !g.value)
              }, [
                G[10] || (G[10] = s("span", null, "Contract Details", -1)),
                s("span", O7, m(g.value ? "▾" : "▸"), 1)
              ]),
              g.value ? (o(), i("div", A7, [
                b(Wt, { label: "Default Contract" }, {
                  default: h(() => [
                    b(Rt, {
                      "model-value": w.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": se
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                b(Wt, { label: "Display Name" }, {
                  default: h(() => [
                    b(Rt, {
                      modelValue: N.value.display_name,
                      "onUpdate:modelValue": G[2] || (G[2] = (fe) => N.value.display_name = fe),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                b(Wt, { label: "Description" }, {
                  default: h(() => [
                    b(An, {
                      modelValue: N.value.description,
                      "onUpdate:modelValue": G[3] || (G[3] = (fe) => N.value.description = fe),
                      rows: 2,
                      placeholder: "Optional description for this contract"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])) : y("", !0)
            ]),
            s("section", z7, [
              s("span", F7, m(j.value), 1),
              s("span", V7, m(N.value.inputs.length) + " input" + m(N.value.inputs.length === 1 ? "" : "s"), 1),
              s("span", B7, m(N.value.outputs.length) + " output" + m(N.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            s("section", W7, [
              s("div", G7, [
                b(_n, { variant: "section" }, {
                  default: h(() => [...G[11] || (G[11] = [
                    x("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              N.value.inputs.length ? y("", !0) : (o(), i("div", j7, " No inputs configured. ")),
              (o(!0), i(B, null, ye(N.value.inputs, (fe, Je) => (o(), i("div", {
                key: `input-${Je}`,
                class: Be(["item-card", { selected: $.value === Je }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Ge) => ze(Je)
                }, [
                  s("div", null, [
                    s("div", q7, m(fe.name || `Input ${Je + 1}`), 1),
                    s("div", K7, [
                      x(" Node " + m(fe.node_id || "?"), 1),
                      fe.widget_idx !== void 0 ? (o(), i(B, { key: 0 }, [
                        x(" · Widget " + m(fe.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", J7, [
                      s("span", null, m(fe.type || "string"), 1),
                      s("span", null, m(fe.required ? "required" : "optional"), 1),
                      fe.default !== void 0 && fe.default !== "" ? (o(), i("span", Q7, "default " + m(ue(fe.default)), 1)) : y("", !0)
                    ])
                  ]),
                  b(Ue, {
                    size: "sm",
                    variant: "ghost",
                    onClick: bt((Ge) => Me(Je), ["stop"])
                  }, {
                    default: h(() => [...G[12] || (G[12] = [
                      x(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, H7),
                $.value === Je ? (o(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: G[4] || (G[4] = bt(() => {
                  }, ["stop"]))
                }, [
                  b(Wt, { label: "Name" }, {
                    default: h(() => [
                      b(Rt, {
                        modelValue: fe.name,
                        "onUpdate:modelValue": (Ge) => fe.name = Ge,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Wt, { label: "Display Name" }, {
                    default: h(() => [
                      b(Rt, {
                        modelValue: fe.display_name,
                        "onUpdate:modelValue": (Ge) => fe.display_name = Ge,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Wt, { label: "Type" }, {
                    default: h(() => [
                      b(Qo, {
                        "model-value": fe.type,
                        options: D,
                        "full-width": "",
                        "onUpdate:modelValue": (Ge) => fe.type = Ge
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Wt, { label: "Required" }, {
                    default: h(() => [
                      b(Qo, {
                        "model-value": fe.required ? "true" : "false",
                        options: A,
                        "full-width": "",
                        "onUpdate:modelValue": (Ge) => fe.required = Ge === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Wt, {
                    class: Be({ "item-grid-full": fe.type === "string" || fe.type === "enum" }),
                    label: "Default"
                  }, {
                    default: h(() => [
                      fe.type === "string" ? (o(), R(An, {
                        key: 0,
                        "model-value": te(fe.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (Ge) => fe.default = Ge
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (o(), R(Rt, {
                        key: 1,
                        modelValue: fe.default,
                        "onUpdate:modelValue": (Ge) => fe.default = Ge,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  ce(fe.type) ? (o(), R(Wt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: h(() => [
                      b(Rt, {
                        "model-value": ve(fe.min),
                        "full-width": "",
                        "onUpdate:modelValue": (Ge) => fe.min = J(Ge)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  ce(fe.type) ? (o(), R(Wt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: h(() => [
                      b(Rt, {
                        "model-value": ve(fe.max),
                        "full-width": "",
                        "onUpdate:modelValue": (Ge) => fe.max = J(Ge)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  Q(fe.type) ? (o(), R(Wt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: h(() => [
                      b(An, {
                        "model-value": L(fe.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (Ge) => fe.enum_values = F(Ge)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0)
                ])) : y("", !0)
              ], 2))), 128))
            ]),
            s("section", Y7, [
              s("div", X7, [
                b(_n, { variant: "section" }, {
                  default: h(() => [...G[13] || (G[13] = [
                    x("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              N.value.outputs.length ? y("", !0) : (o(), i("div", Z7, " No outputs configured. ")),
              (o(!0), i(B, null, ye(N.value.outputs, (fe, Je) => (o(), i("div", {
                key: `output-${Je}`,
                class: Be(["item-card", { selected: S.value === Je }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Ge) => Le(Je)
                }, [
                  s("div", null, [
                    s("div", tD, m(fe.name || `Output ${Je + 1}`), 1),
                    s("div", sD, [
                      x(" Node " + m(fe.node_id || "?"), 1),
                      fe.selector ? (o(), i(B, { key: 0 }, [
                        x(" · " + m(fe.selector), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", nD, [
                      s("span", null, m(fe.type || "file"), 1)
                    ])
                  ]),
                  b(Ue, {
                    size: "sm",
                    variant: "ghost",
                    onClick: bt((Ge) => pe(Je), ["stop"])
                  }, {
                    default: h(() => [...G[14] || (G[14] = [
                      x(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, eD),
                S.value === Je ? (o(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: G[5] || (G[5] = bt(() => {
                  }, ["stop"]))
                }, [
                  b(Wt, { label: "Name" }, {
                    default: h(() => [
                      b(Rt, {
                        modelValue: fe.name,
                        "onUpdate:modelValue": (Ge) => fe.name = Ge,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Wt, { label: "Display Name" }, {
                    default: h(() => [
                      b(Rt, {
                        modelValue: fe.display_name,
                        "onUpdate:modelValue": (Ge) => fe.display_name = Ge,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Wt, { label: "Type" }, {
                    default: h(() => [
                      b(Qo, {
                        "model-value": fe.type,
                        options: D,
                        "full-width": "",
                        "onUpdate:modelValue": (Ge) => fe.type = Ge
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : y("", !0)
              ], 2))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        s("div", oD, [
          s("div", aD, [
            b(Ue, {
              variant: "secondary",
              onClick: G[6] || (G[6] = (fe) => Ae({ reopenPanel: !0 }))
            }, {
              default: h(() => [...G[15] || (G[15] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            })
          ]),
          s("div", lD, [
            b(Ue, {
              variant: "danger",
              disabled: !V.value,
              loading: f.value,
              onClick: Ne
            }, {
              default: h(() => [...G[16] || (G[16] = [
                x(" Delete ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            b(Ue, {
              variant: "primary",
              loading: d.value,
              onClick: Ve
            }, {
              default: h(() => [...G[17] || (G[17] = [
                x(" Save ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]),
      k.value ? (o(), R(Dl, {
        key: 0,
        title: "Delete Workflow Contract",
        message: `Delete the contract for ${c.value}?`,
        warning: "This removes the saved input/output contract for this workflow. The workflow itself will not be deleted.",
        "confirm-label": "Delete",
        "cancel-label": "Cancel",
        destructive: !0,
        onConfirm: Qe,
        onCancel: G[7] || (G[7] = (fe) => k.value = !1)
      }, null, 8, ["message"])) : y("", !0)
    ])) : y("", !0);
  }
}), rD = /* @__PURE__ */ Te(iD, [["__scopeId", "data-v-13515b27"]]), cD = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', uD = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', dD = {
  comfy: cD,
  phosphor: uD
}, Ul = "comfy", Lc = "comfygit-theme";
let pn = null, Uc = Ul;
function mD() {
  try {
    const e = localStorage.getItem(Lc);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Ul;
}
function Oc(e = Ul) {
  pn && pn.remove(), pn = document.createElement("style"), pn.id = "comfygit-theme-styles", pn.setAttribute("data-theme", e), pn.textContent = dD[e], document.head.appendChild(pn), document.body.setAttribute("data-comfygit-theme", e), Uc = e;
  try {
    localStorage.setItem(Lc, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function fD() {
  return Uc;
}
function vD(e) {
  Oc(e);
}
function pD(e) {
  var r;
  const { ui_id: t, state: n } = e || {}, a = (n == null ? void 0 : n.history) || {};
  if (!t)
    return null;
  const l = a[t];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const zi = "ComfyGit.DevAutoReload", Ac = "ComfyGit.DevAutoReload.PanelOpen";
function gD() {
  const e = new URLSearchParams(window.location.search).get("comfygitDevReload");
  return e === null ? null : e;
}
function ba() {
  const e = gD();
  if (e !== null) {
    const t = e !== "0" && e !== "false";
    try {
      localStorage.setItem(zi, t ? "true" : "false");
    } catch {
    }
    return t;
  }
  try {
    return localStorage.getItem(zi) === "true";
  } catch {
    return !1;
  }
}
function zc(e) {
  if (ba())
    try {
      sessionStorage.setItem(Ac, e ? "true" : "false");
    } catch {
    }
}
function hD() {
  if (!ba()) return !1;
  try {
    return sessionStorage.getItem(Ac) === "true";
  } catch {
    return !1;
  }
}
async function Fi(e) {
  const t = await fetch(e, { cache: "no-store", method: "HEAD" });
  if (t.ok) {
    const u = t.headers, d = u.get("etag"), f = u.get("last-modified"), v = u.get("content-length");
    if (d || f)
      return [d, f, v].filter(Boolean).join(":");
  }
  const n = await fetch(e, { cache: "no-store", method: "GET" });
  if (!n.ok) return null;
  const a = n.headers, l = [
    a.get("etag"),
    a.get("last-modified"),
    a.get("content-length")
  ].filter(Boolean).join(":"), r = await n.text();
  let c = 0;
  for (let u = 0; u < r.length; u += 1)
    c = (c << 5) - c + r.charCodeAt(u) | 0;
  return `${l}:${r.length}:${c}`;
}
async function yD(e) {
  if (!ba()) return;
  const t = e.map((a) => ({
    ...a,
    signature: null
  }));
  for (const a of t)
    try {
      a.signature = await Fi(a.url);
    } catch (l) {
      console.warn(`[ComfyGit] Dev auto-reload could not read ${a.name}:`, l);
    }
  console.log("[ComfyGit] Dev auto-reload enabled");
  let n = !1;
  window.setInterval(async () => {
    if (!n)
      for (const a of t)
        try {
          const l = await Fi(a.url);
          if (a.signature && l && l !== a.signature) {
            n = !0, console.log(`[ComfyGit] ${a.name} changed, reloading page...`), window.setTimeout(() => window.location.reload(), 500);
            return;
          }
          l && (a.signature = l);
        } catch {
        }
  }, 1e3);
}
const wD = "./comfygit-panel.css", _D = "./comfygit-panel.js", Fc = new URL(wD, import.meta.url).href, kD = new URL(_D, import.meta.url).href, Ol = document.createElement("link");
Ol.rel = "stylesheet";
Ol.href = Fc;
document.head.appendChild(Ol);
const bD = mD();
Oc(bD);
ba() || (sessionStorage.removeItem("ComfyGit.LastView"), sessionStorage.removeItem("ComfyGit.LastSection"));
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), vD(e);
  },
  getTheme: () => {
    const e = fD();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
window.ComfyGitDev = {
  ...window.ComfyGitDev ?? {},
  async exportCurrentApiPrompt() {
    const e = Ns;
    if (typeof e.graphToPrompt != "function")
      throw new Error("ComfyUI graphToPrompt is not available");
    return e.graphToPrompt(e.rootGraph);
  },
  async exportApiPromptForWorkflow(e) {
    const t = Ns;
    if (typeof t.loadGraphData != "function")
      throw new Error("ComfyUI loadGraphData is not available");
    if (typeof t.graphToPrompt != "function")
      throw new Error("ComfyUI graphToPrompt is not available");
    return await t.loadGraphData(e, !0, !1, null, {
      deferWarnings: !0,
      skipAssetScans: !0,
      silentAssetErrors: !0
    }), await new Promise((n) => requestAnimationFrame(n)), t.graphToPrompt(t.rootGraph);
  }
};
let Os = null, ho = null, ds = null, yo = null, eo = null, Vi = null, to = null, Bi = null, so = null, Wi = null;
const zn = _(null);
let So = "no_workspace", Vc = !1;
async function lo(e = !1) {
  const t = Hn();
  if (!t) return null;
  try {
    const n = e ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status", a = await t.fetchApi(n);
    a.ok && (zn.value = await a.json());
  } catch {
  }
}
async function rl() {
  const e = Hn();
  if (e)
    try {
      const t = await e.fetchApi("/v2/setup/status");
      if (t.ok) {
        const n = await t.json();
        So = n.state, Vc = n.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function cl() {
  var t;
  if (So === "managed" || !Vc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const n of e)
    if (((t = n.textContent) == null ? void 0 : t.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
      n.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function $D() {
  if (!zn.value) return !1;
  const e = zn.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || zn.value.has_changes;
}
function no(e) {
  io(), zc(!0), Os = document.createElement("div"), Os.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Os.appendChild(t), Os.addEventListener("click", (a) => {
    a.target === Os && io();
  });
  const n = (a) => {
    a.key === "Escape" && (io(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), ho = Po({
    render: () => jn(pP, {
      initialView: e,
      onClose: io,
      onStatusUpdate: async (a) => {
        zn.value = a, Pn(), await rl(), Yo(), cl();
      }
    })
  }), ho.mount(t), document.body.appendChild(Os);
}
function io() {
  zc(!1), ho && (ho.unmount(), ho = null), Os && (Os.remove(), Os = null);
}
function Gi(e) {
  oo(), ds = document.createElement("div"), ds.className = "comfygit-commit-popover-container";
  const t = e.getBoundingClientRect();
  ds.style.position = "fixed", ds.style.top = `${t.bottom + 8}px`, ds.style.right = `${window.innerWidth - t.right}px`, ds.style.zIndex = "10001";
  const n = (l) => {
    ds && !ds.contains(l.target) && l.target !== e && (oo(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const a = (l) => {
    l.key === "Escape" && (oo(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), yo = Po({
    render: () => jn(Pc, {
      status: zn.value,
      onClose: oo,
      onCommitted: (l) => {
        oo(), CD(l.success, l.message), lo().then(Pn);
      }
    })
  }), yo.mount(ds), document.body.appendChild(ds);
}
function oo() {
  yo && (yo.unmount(), yo = null), ds && (ds.remove(), ds = null);
}
function CD(e, t) {
  const n = document.createElement("div"), a = e ? "#22c55e" : "#ef4444";
  n.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg-color, #1a1a1a);
    border: 1px solid ${a};
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
    color: ${a};
    font-weight: bold;
    font-size: 14px;
  `, n.appendChild(l);
  const r = document.createElement("span");
  r.textContent = t, n.appendChild(r), document.body.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", n.style.transition = "opacity 0.2s ease", setTimeout(() => n.remove(), 200);
  }, 3e3);
}
function xD() {
  eo || (eo = document.createElement("div"), eo.className = "comfygit-download-queue-root", Vi = Po({
    render: () => jn(cR)
  }), Vi.mount(eo), document.body.appendChild(eo), console.log("[ComfyGit] Model download queue mounted"));
}
function SD() {
  to || (to = document.createElement("div"), to.className = "comfygit-missing-resources-root", Bi = Po({
    render: () => jn(C7)
  }), Bi.mount(to), document.body.appendChild(to), console.log("[ComfyGit] Missing resources popup mounted"));
}
function ID() {
  so || (so = document.createElement("div"), so.className = "comfygit-io-mapping-root", Wi = Po({
    render: () => jn(rD, {
      comfyApp: Ns
    })
  }), Wi.mount(so), document.body.appendChild(so), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let ns = null;
function Pn() {
  if (!ns) return;
  const e = ns.querySelector(".commit-indicator");
  e && (e.style.display = $D() ? "block" : "none");
}
function Yo() {
  if (!ns) return;
  const e = So !== "managed";
  ns.disabled = e, ns.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Bc = document.createElement("style");
Bc.textContent = `
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
document.head.appendChild(Bc);
Ns.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => no()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        ns && !ns.disabled && Gi(ns);
      }
    }
  ],
  // Default keybindings (user can customize in Settings → Keyboard Shortcuts)
  keybindings: [
    {
      commandId: "ComfyGit.OpenPanel",
      combo: { key: "l", alt: !0, shift: !0 }
    },
    {
      commandId: "ComfyGit.QuickCommit",
      combo: { key: "k", alt: !0, shift: !0 }
    }
  ],
  // Hook into workflow loading to intercept missing resources
  async beforeConfigureGraph(e, t) {
    if (So === "managed")
      try {
        await Promise.all([
          Ns.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
          Ns.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
        ]);
      } catch (n) {
        console.warn("[ComfyGit] Failed to disable built-in warnings:", n);
      }
    window.__comfygit_pending_workflow = e;
  },
  async afterConfigureGraph(e) {
    if (So !== "managed") return;
    const t = window.__comfygit_pending_workflow;
    t && (delete window.__comfygit_pending_workflow, window.dispatchEvent(new CustomEvent("comfygit:workflow-loaded", {
      detail: { workflow: t }
    })));
  },
  async setup() {
    var l, r;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const t = document.createElement("button");
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = () => no(), ns = document.createElement("button"), ns.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ns.innerHTML = 'Commit <span class="commit-indicator"></span>', ns.title = "Quick Commit", ns.onclick = () => Gi(ns), e.appendChild(t), e.appendChild(ns), (r = (l = Ns.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Ns.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), xD(), SD(), ID(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      no(u);
    })), window.addEventListener("comfygit:close-panel", (() => {
      io();
    })), window.addEventListener("comfygit:status-refresh", (async () => {
      await lo(), Pn(), Yo();
    }));
    const { loadPendingDownloads: n } = qn();
    n(), await Promise.all([lo(), rl()]), Pn(), Yo(), cl(), hD() && setTimeout(() => {
      Os || no();
    }, 100), yD([
      { name: "panel script", url: kD },
      { name: "panel stylesheet", url: Fc }
    ]), setTimeout(cl, 100), setInterval(async () => {
      await Promise.all([lo(), rl()]), Pn(), Yo();
    }, 3e4);
    const a = Hn();
    if (a) {
      let c = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((p) => {
          (p.startsWith("workflow:") || p.startsWith("Comfy.OpenWorkflowsPaths:") || p.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(p);
        }), window.location.reload();
      }, u = function() {
        const p = document.createElement("div");
        p.style.cssText = `
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
        w.textContent = "Workflows updated - refresh required", p.appendChild(w);
        const g = document.createElement("button");
        g.textContent = "Refresh", g.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, g.onmouseover = () => g.style.background = "var(--comfy-input-bg)", g.onmouseout = () => g.style.background = "var(--comfy-menu-bg)", g.onclick = () => c(), p.appendChild(g);
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
        `, k.onmouseover = () => k.style.opacity = "1", k.onmouseout = () => k.style.opacity = "0.6", k.onclick = () => p.remove(), p.appendChild(k), document.body.appendChild(p), console.log("[ComfyGit] Refresh notification displayed");
      }, d = function(p) {
        const w = document.getElementById("comfygit-error-toast");
        w && w.remove();
        const g = document.createElement("div");
        g.id = "comfygit-error-toast", g.style.cssText = `
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
        k.textContent = "⚠️", k.style.fontSize = "20px", g.appendChild(k);
        const $ = document.createElement("div");
        $.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const S = document.createElement("div");
        S.textContent = "Node installation failed", S.style.cssText = "font-weight: 600; color: #e53935;", $.appendChild(S);
        const C = document.createElement("div");
        C.textContent = "Dependency conflict detected", C.style.cssText = "font-size: 12px; opacity: 0.8;", $.appendChild(C), g.appendChild($);
        const I = document.createElement("button");
        I.textContent = "View Logs", I.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, I.onmouseover = () => I.style.background = "#c62828", I.onmouseout = () => I.style.background = "#e53935", I.onclick = () => {
          g.remove(), no("debug-env");
        }, g.appendChild(I);
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
        `, E.onmouseover = () => E.style.opacity = "1", E.onmouseout = () => E.style.opacity = "0.6", E.onclick = () => g.remove(), g.appendChild(E), document.body.appendChild(g), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && g.remove();
        }, 1e4);
      }, f = function(p) {
        const w = document.getElementById("comfygit-restart-toast");
        w && w.remove();
        const g = document.createElement("div");
        g.id = "comfygit-restart-toast", g.style.cssText = `
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
        k.textContent = "✅", k.style.fontSize = "20px", g.appendChild(k);
        const $ = document.createElement("div");
        $.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const S = document.createElement("div");
        S.textContent = "To apply changes, please restart ComfyUI", S.style.cssText = "font-weight: 500; color: #fff;", $.appendChild(S);
        const C = document.createElement("div");
        C.textContent = `${p} node package${p > 1 ? "s" : ""} ready to install`, C.style.cssText = "font-size: 12px; opacity: 0.7;", $.appendChild(C), g.appendChild($);
        const I = document.createElement("button");
        I.textContent = "Apply Changes", I.style.cssText = `
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
        `, I.onmouseover = () => I.style.background = "rgba(255,255,255,0.1)", I.onmouseout = () => I.style.background = "transparent", I.onclick = async () => {
          I.disabled = !0, I.textContent = "Restarting...", I.style.opacity = "0.7", S.textContent = "Restarting...", C.textContent = "Applying changes, please wait...";
          try {
            const P = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Ns.refreshComboInNodes && (await Ns.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), k.textContent = "✅", S.textContent = "Nodes Installed", S.style.color = "#4caf50", C.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, g.style.borderColor = "#4caf50", I.style.display = "none", setTimeout(() => {
                  g.remove();
                }, 3e3);
              } catch (D) {
                console.error("[ComfyGit] Failed to refresh nodes:", D), k.textContent = "✅", S.textContent = "Restart Complete", S.style.color = "#4caf50", C.textContent = "Refresh the page to load new nodes.", g.style.borderColor = "#4caf50", I.style.display = "none";
              }
            };
            a.addEventListener("reconnected", P, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (P) {
            console.error("[ComfyGit] Failed to restart:", P), S.textContent = "Restart Failed", S.style.color = "#e53935", C.textContent = "Could not restart server. Try again.", g.style.borderColor = "#e53935", I.textContent = "Try Again", I.disabled = !1, I.style.opacity = "1";
          }
        }, g.appendChild(I);
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
        `, E.onmouseover = () => E.style.opacity = "1", E.onmouseout = () => E.style.opacity = "0.6", E.onclick = () => g.remove(), g.appendChild(E), document.body.appendChild(g), console.log(`[ComfyGit] Restart required notification displayed (${p} packages installed)`);
      };
      a.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: w, workflow_name: g } = p.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${g}`), await lo(), Pn();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      a.addEventListener("status", async (p) => {
        const w = p.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (p) => {
        const w = pD(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: g = 1 } = w.detail || {};
        f(g);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
