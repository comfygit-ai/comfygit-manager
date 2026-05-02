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
  const { immediate: a, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = n, f = (M) => l ? M : hs(M) || l === !1 || l === 0 ? js(M, 1) : js(M);
  let v, p, w, g, k = !1, C = !1;
  if (es(e) ? (p = () => e.value, k = hs(e)) : wn(e) ? (p = () => f(e), k = !0) : st(e) ? (C = !0, k = e.some((M) => wn(M) || hs(M)), p = () => e.map((M) => {
    if (es(M))
      return M.value;
    if (wn(M))
      return f(M);
    if (ot(M))
      return d ? d(M, 2) : M();
  })) : ot(e) ? t ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      Ks();
      try {
        w();
      } finally {
        Js();
      }
    }
    const M = gn;
    gn = v;
    try {
      return d ? d(e, 3, [g]) : e(g);
    } finally {
      gn = M;
    }
  } : p = As, t && l) {
    const M = p, D = l === !0 ? 1 / 0 : l;
    p = () => js(M(), D);
  }
  const S = au(), $ = () => {
    v.stop(), S && S.active && ml(S.effects, v);
  };
  if (r && t) {
    const M = t;
    t = (...D) => {
      M(...D), $();
    };
  }
  let I = C ? new Array(e.length).fill(Ao) : Ao;
  const E = (M) => {
    if (!(!(v.flags & 1) || !v.dirty && !M))
      if (t) {
        const D = v.run();
        if (l || k || (C ? D.some((O, F) => ln(O, I[F])) : ln(D, I))) {
          w && w();
          const O = gn;
          gn = v;
          try {
            const F = [
              D,
              // pass undefined as the old value when it's changed for the first time
              I === Ao ? void 0 : C && I[0] === Ao ? [] : I,
              g
            ];
            I = D, d ? d(t, 3, F) : (
              // @ts-expect-error
              t(...F)
            );
          } finally {
            gn = O;
          }
        }
      } else
        v.run();
  };
  return u && u(E), v = new Zi(p), v.scheduler = c ? () => c(E, !1) : E, g = (M) => Pu(M, !1, v), w = v.onStop = () => {
    const M = Zo.get(v);
    if (M) {
      if (d)
        d(M, 4);
      else
        for (const D of M) D();
      Zo.delete(v);
    }
  }, t ? a ? E(!0) : I = v.run() : c ? c(E.bind(null, !0), !0) : v.run(), $.pause = v.pause.bind(v), $.resume = v.resume.bind(v), $.stop = $, $;
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
      o: { insert: g, querySelector: k, createText: C, createComment: S }
    } = f, $ = mo(t.props);
    let { shapeFlag: I, children: E, dynamicChildren: M } = t;
    if (e == null) {
      const D = t.el = C(""), O = t.anchor = C("");
      g(D, n, a), g(O, n, a);
      const F = (q, ce) => {
        I & 16 && v(
          E,
          q,
          ce,
          l,
          r,
          c,
          u,
          d
        );
      }, N = () => {
        const q = t.target = Ya(t.props, k), ce = br(q, t, C, g);
        q && (c !== "svg" && Kl(q) ? c = "svg" : c !== "mathml" && Jl(q) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(q), $ || (F(q, ce), Go(t, !1)));
      };
      $ && (F(n, O), Go(t, !0)), ql(t.props) ? (t.el.__isMounted = !1, ss(() => {
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
      const D = t.anchor = e.anchor, O = t.target = e.target, F = t.targetAnchor = e.targetAnchor, N = mo(e.props), q = N ? n : O, ce = N ? D : F;
      if (c === "svg" || Kl(O) ? c = "svg" : (c === "mathml" || Jl(O)) && (c = "mathml"), M ? (w(
        e.dynamicChildren,
        M,
        q,
        l,
        r,
        c,
        u
      ), Il(e, t, !0)) : d || p(
        e,
        t,
        q,
        ce,
        l,
        r,
        c,
        u,
        !1
      ), $)
        N ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : zo(
          t,
          n,
          D,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const de = t.target = Ya(
          t.props,
          k
        );
        de && zo(
          t,
          de,
          null,
          f,
          0
        );
      } else N && zo(
        t,
        O,
        F,
        f,
        1
      );
      Go(t, $);
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
        const C = u[k];
        a(
          C,
          t,
          n,
          g,
          !!C.dynamicChildren
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
  function w(C, S, $, I) {
    S.anchor = p(
      c(C),
      S,
      u(C),
      n,
      a,
      l,
      r
    ), S.targetStart = $, S.targetAnchor = I;
  }
  const g = t.target = Ya(
    t.props,
    d
  ), k = mo(t.props);
  if (g) {
    const C = g._lpa || g.firstChild;
    if (t.shapeFlag & 16)
      if (k)
        w(
          e,
          t,
          C,
          C && c(C)
        );
      else {
        t.anchor = c(e);
        let S = C;
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
          C && c(C),
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
          const C = Ir(
            a,
            v
          );
          C[String(v.key)] = v, w[Ws] = () => {
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
    onLeaveCancelled: C,
    onBeforeAppear: S,
    onAppear: $,
    onAfterAppear: I,
    onAppearCancelled: E
  } = t, M = String(e.key), D = Ir(n, e), O = (q, ce) => {
    q && Is(
      q,
      a,
      9,
      ce
    );
  }, F = (q, ce) => {
    const de = ce[1];
    O(q, ce), st(q) ? q.every((Q) => Q.length <= 1) && de() : q.length <= 1 && de();
  }, N = {
    mode: c,
    persisted: u,
    beforeEnter(q) {
      let ce = d;
      if (!n.isMounted)
        if (r)
          ce = S || d;
        else
          return;
      q[Ws] && q[Ws](
        !0
        /* cancelled */
      );
      const de = D[M];
      de && hn(e, de) && de.el[Ws] && de.el[Ws](), O(ce, [q]);
    },
    enter(q) {
      let ce = f, de = v, Q = p;
      if (!n.isMounted)
        if (r)
          ce = $ || f, de = I || v, Q = E || p;
        else
          return;
      let te = !1;
      const W = q[Fo] = (A) => {
        te || (te = !0, A ? O(Q, [q]) : O(de, [q]), N.delayedLeave && N.delayedLeave(), q[Fo] = void 0);
      };
      ce ? F(ce, [q, W]) : W();
    },
    leave(q, ce) {
      const de = String(e.key);
      if (q[Fo] && q[Fo](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return ce();
      O(w, [q]);
      let Q = !1;
      const te = q[Ws] = (W) => {
        Q || (Q = !0, ce(), W ? O(C, [q]) : O(k, [q]), q[Ws] = void 0, D[de] === e && delete D[de]);
      };
      D[de] = e, g ? F(g, [q, te]) : te();
    },
    clone(q) {
      const ce = bo(
        q,
        t,
        n,
        a,
        l
      );
      return l && l(ce), ce;
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
      (k, C) => fo(
        k,
        t && (st(t) ? t[C] : t),
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
    const k = Dt(d), C = es(d);
    if (k || C) {
      const S = () => {
        if (e.f) {
          const $ = k ? g(d) ? p[d] : v[d] : d.value;
          if (l)
            st($) && ml($, r);
          else if (st($))
            $.includes(r) || $.push(r);
          else if (k)
            v[d] = [r], g(d) && (p[d] = v[d]);
          else {
            const I = [r];
            d.value = I, e.k && (v[e.k] = I);
          }
        } else k ? (v[d] = c, g(d) && (p[d] = c)) : C && (d.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const $ = () => {
          S(), sa.delete(e);
        };
        $.id = -1, sa.set(e, $), ss($, n);
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
    activated: C,
    deactivated: S,
    beforeDestroy: $,
    beforeUnmount: I,
    destroyed: E,
    unmounted: M,
    render: D,
    renderTracked: O,
    renderTriggered: F,
    errorCaptured: N,
    serverPrefetch: q,
    // public API
    expose: ce,
    inheritAttrs: de,
    // assets
    components: Q,
    directives: te,
    filters: W
  } = t;
  if (f && Xu(f, a, null), c)
    for (const ve in c) {
      const se = c[ve];
      ot(se) && (a[ve] = se.bind(n));
    }
  if (l) {
    const ve = l.call(n, n);
    Ct(ve) && (e.data = Cn(ve));
  }
  if (Za = !0, r)
    for (const ve in r) {
      const se = r[ve], fe = ot(se) ? se.bind(n, n) : ot(se.get) ? se.get.bind(n, n) : As, ne = !ot(se) && ot(se.set) ? se.set.bind(n) : As, K = P({
        get: fe,
        set: ne
      });
      Object.defineProperty(a, ve, {
        enumerable: !0,
        configurable: !0,
        get: () => K.value,
        set: (oe) => K.value = oe
      });
    }
  if (u)
    for (const ve in u)
      Dr(u[ve], a, n, ve);
  if (d) {
    const ve = ot(d) ? d.call(n) : d;
    Reflect.ownKeys(ve).forEach((se) => {
      od(se, ve[se]);
    });
  }
  v && ei(v, e, "c");
  function V(ve, se) {
    st(se) ? se.forEach((fe) => ve(fe.bind(n))) : se && ve(se.bind(n));
  }
  if (V(Bu, p), V(ut, w), V(Wu, g), V(Mr, k), V(zu, C), V(Fu, S), V(qu, N), V(Hu, O), V(ju, F), V(To, I), V(Gn, M), V(Gu, q), st(ce))
    if (ce.length) {
      const ve = e.exposed || (e.exposed = {});
      ce.forEach((se) => {
        Object.defineProperty(ve, se, {
          get: () => n[se],
          set: (fe) => n[se] = fe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  D && e.render === As && (e.render = D), de != null && (e.inheritAttrs = de), Q && (e.components = Q), te && (e.directives = te), q && Er(e);
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
  u.call = (g, k, C) => Is(g, v, k, C);
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
    inheritAttrs: C
  } = e, S = ta(e);
  let $, I;
  try {
    if (n.shapeFlag & 4) {
      const M = l || a, D = M;
      $ = Us(
        f.call(
          D,
          M,
          v,
          p,
          g,
          w,
          k
        )
      ), I = u;
    } else {
      const M = t;
      $ = Us(
        M.length > 1 ? M(
          p,
          { attrs: u, slots: c, emit: d }
        ) : M(
          p,
          null
        )
      ), I = t.props ? u : dd(u);
    }
  } catch (M) {
    po.length = 0, ga(M, e, 1), $ = b(Xt);
  }
  let E = $;
  if (I && C !== !1) {
    const M = Object.keys(I), { shapeFlag: D } = E;
    M.length && D & 7 && (r && M.some(dl) && (I = md(
      I,
      r
    )), E = rn(E, I, !1, !0));
  }
  return n.dirs && (E = rn(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && bn(E, n.transition), $ = E, ta(S), $;
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
        let C = !1, S = !0;
        if (st(k))
          for (let $ = 0; $ < k.length; ++$) {
            const I = k[$], E = ot(I) && I.name;
            if (E === "Boolean") {
              C = !0;
              break;
            } else E === "String" && (S = !1);
          }
        else
          C = ot(k) && k.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = C, g[
          1
          /* shouldCastTrue */
        ] = S, (C || _t(g, "default")) && u.push(p);
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
  } = e, C = (T, U, ie, Ie = null, Ce = null, be = null, ee = void 0, j = null, he = !!U.dynamicChildren) => {
    if (T === U)
      return;
    T && !hn(T, U) && (Ie = Le(T), oe(T, Ce, be, !0), T = null), U.patchFlag === -2 && (he = !1, U.dynamicChildren = null);
    const { type: _e, ref: Ke, shapeFlag: We } = U;
    switch (_e) {
      case _a:
        S(T, U, ie, Ie);
        break;
      case Xt:
        $(T, U, ie, Ie);
        break;
      case Va:
        T == null && I(U, ie, Ie, ee);
        break;
      case B:
        Q(
          T,
          U,
          ie,
          Ie,
          Ce,
          be,
          ee,
          j,
          he
        );
        break;
      default:
        We & 1 ? D(
          T,
          U,
          ie,
          Ie,
          Ce,
          be,
          ee,
          j,
          he
        ) : We & 6 ? te(
          T,
          U,
          ie,
          Ie,
          Ce,
          be,
          ee,
          j,
          he
        ) : (We & 64 || We & 128) && _e.process(
          T,
          U,
          ie,
          Ie,
          Ce,
          be,
          ee,
          j,
          he,
          ge
        );
    }
    Ke != null && Ce ? fo(Ke, T && T.ref, be, U || T, !U) : Ke == null && T && T.ref != null && fo(T.ref, null, be, T, !0);
  }, S = (T, U, ie, Ie) => {
    if (T == null)
      a(
        U.el = u(U.children),
        ie,
        Ie
      );
    else {
      const Ce = U.el = T.el;
      U.children !== T.children && f(Ce, U.children);
    }
  }, $ = (T, U, ie, Ie) => {
    T == null ? a(
      U.el = d(U.children || ""),
      ie,
      Ie
    ) : U.el = T.el;
  }, I = (T, U, ie, Ie) => {
    [T.el, T.anchor] = k(
      T.children,
      U,
      ie,
      Ie,
      T.el,
      T.anchor
    );
  }, E = ({ el: T, anchor: U }, ie, Ie) => {
    let Ce;
    for (; T && T !== U; )
      Ce = w(T), a(T, ie, Ie), T = Ce;
    a(U, ie, Ie);
  }, M = ({ el: T, anchor: U }) => {
    let ie;
    for (; T && T !== U; )
      ie = w(T), l(T), T = ie;
    l(U);
  }, D = (T, U, ie, Ie, Ce, be, ee, j, he) => {
    if (U.type === "svg" ? ee = "svg" : U.type === "math" && (ee = "mathml"), T == null)
      O(
        U,
        ie,
        Ie,
        Ce,
        be,
        ee,
        j,
        he
      );
    else {
      const _e = T.el && T.el._isVueCE ? T.el : null;
      try {
        _e && _e._beginPatch(), q(
          T,
          U,
          Ce,
          be,
          ee,
          j,
          he
        );
      } finally {
        _e && _e._endPatch();
      }
    }
  }, O = (T, U, ie, Ie, Ce, be, ee, j) => {
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
      j
    ), Z && mn(T, null, Ie, "created"), F(he, T, T.scopeId, ee, Ie), Ke) {
      for (const Ne in Ke)
        Ne !== "value" && !ro(Ne) && r(he, Ne, null, Ke[Ne], be, Ie);
      "value" in Ke && r(he, "value", null, Ke.value, be), (_e = Ke.onVnodeBeforeMount) && Ms(_e, Ie, T);
    }
    Z && mn(T, null, Ie, "beforeMount");
    const Ve = $d(Ce, xe);
    Ve && xe.beforeEnter(he), a(he, U, ie), ((_e = Ke && Ke.onVnodeMounted) || Ve || Z) && ss(() => {
      _e && Ms(_e, Ie, T), Ve && xe.enter(he), Z && mn(T, null, Ie, "mounted");
    }, Ce);
  }, F = (T, U, ie, Ie, Ce) => {
    if (ie && g(T, ie), Ie)
      for (let be = 0; be < Ie.length; be++)
        g(T, Ie[be]);
    if (Ce) {
      let be = Ce.subTree;
      if (U === be || Kr(be.type) && (be.ssContent === U || be.ssFallback === U)) {
        const ee = Ce.vnode;
        F(
          T,
          ee,
          ee.scopeId,
          ee.slotScopeIds,
          Ce.parent
        );
      }
    }
  }, N = (T, U, ie, Ie, Ce, be, ee, j, he = 0) => {
    for (let _e = he; _e < T.length; _e++) {
      const Ke = T[_e] = j ? an(T[_e]) : Us(T[_e]);
      C(
        null,
        Ke,
        U,
        ie,
        Ie,
        Ce,
        be,
        ee,
        j
      );
    }
  }, q = (T, U, ie, Ie, Ce, be, ee) => {
    const j = U.el = T.el;
    let { patchFlag: he, dynamicChildren: _e, dirs: Ke } = U;
    he |= T.patchFlag & 16;
    const We = T.props || St, xe = U.props || St;
    let Z;
    if (ie && fn(ie, !1), (Z = xe.onVnodeBeforeUpdate) && Ms(Z, ie, U, T), Ke && mn(U, T, ie, "beforeUpdate"), ie && fn(ie, !0), (We.innerHTML && xe.innerHTML == null || We.textContent && xe.textContent == null) && v(j, ""), _e ? ce(
      T.dynamicChildren,
      _e,
      j,
      ie,
      Ie,
      Fa(U, Ce),
      be
    ) : ee || se(
      T,
      U,
      j,
      null,
      ie,
      Ie,
      Fa(U, Ce),
      be,
      !1
    ), he > 0) {
      if (he & 16)
        de(j, We, xe, ie, Ce);
      else if (he & 2 && We.class !== xe.class && r(j, "class", null, xe.class, Ce), he & 4 && r(j, "style", We.style, xe.style, Ce), he & 8) {
        const Ve = U.dynamicProps;
        for (let Ne = 0; Ne < Ve.length; Ne++) {
          const Qe = Ve[Ne], Fe = We[Qe], Ae = xe[Qe];
          (Ae !== Fe || Qe === "value") && r(j, Qe, Fe, Ae, Ce, ie);
        }
      }
      he & 1 && T.children !== U.children && v(j, U.children);
    } else !ee && _e == null && de(j, We, xe, ie, Ce);
    ((Z = xe.onVnodeUpdated) || Ke) && ss(() => {
      Z && Ms(Z, ie, U, T), Ke && mn(U, T, ie, "updated");
    }, Ie);
  }, ce = (T, U, ie, Ie, Ce, be, ee) => {
    for (let j = 0; j < U.length; j++) {
      const he = T[j], _e = U[j], Ke = (
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
          ie
        )
      );
      C(
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
  }, de = (T, U, ie, Ie, Ce) => {
    if (U !== ie) {
      if (U !== St)
        for (const be in U)
          !ro(be) && !(be in ie) && r(
            T,
            be,
            U[be],
            null,
            Ce,
            Ie
          );
      for (const be in ie) {
        if (ro(be)) continue;
        const ee = ie[be], j = U[be];
        ee !== j && be !== "value" && r(T, be, j, ee, Ce, Ie);
      }
      "value" in ie && r(T, "value", U.value, ie.value, Ce);
    }
  }, Q = (T, U, ie, Ie, Ce, be, ee, j, he) => {
    const _e = U.el = T ? T.el : u(""), Ke = U.anchor = T ? T.anchor : u("");
    let { patchFlag: We, dynamicChildren: xe, slotScopeIds: Z } = U;
    Z && (j = j ? j.concat(Z) : Z), T == null ? (a(_e, ie, Ie), a(Ke, ie, Ie), N(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      U.children || [],
      ie,
      Ke,
      Ce,
      be,
      ee,
      j,
      he
    )) : We > 0 && We & 64 && xe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    T.dynamicChildren ? (ce(
      T.dynamicChildren,
      xe,
      ie,
      Ce,
      be,
      ee,
      j
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (U.key != null || Ce && U === Ce.subTree) && Il(
      T,
      U,
      !0
      /* shallow */
    )) : se(
      T,
      U,
      ie,
      Ke,
      Ce,
      be,
      ee,
      j,
      he
    );
  }, te = (T, U, ie, Ie, Ce, be, ee, j, he) => {
    U.slotScopeIds = j, T == null ? U.shapeFlag & 512 ? Ce.ctx.activate(
      U,
      ie,
      Ie,
      ee,
      he
    ) : W(
      U,
      ie,
      Ie,
      Ce,
      be,
      ee,
      he
    ) : A(T, U, he);
  }, W = (T, U, ie, Ie, Ce, be, ee) => {
    const j = T.component = Rd(
      T,
      Ie,
      Ce
    );
    if (ha(T) && (j.ctx.renderer = ge), Dd(j, !1, ee), j.asyncDep) {
      if (Ce && Ce.registerDep(j, V, ee), !T.el) {
        const he = j.subTree = b(Xt);
        $(null, he, U, ie), T.placeholder = he.el;
      }
    } else
      V(
        j,
        T,
        U,
        ie,
        Ce,
        be,
        ee
      );
  }, A = (T, U, ie) => {
    const Ie = U.component = T.component;
    if (fd(T, U, ie))
      if (Ie.asyncDep && !Ie.asyncResolved) {
        ve(Ie, U, ie);
        return;
      } else
        Ie.next = U, Ie.update();
    else
      U.el = T.el, Ie.vnode = U;
  }, V = (T, U, ie, Ie, Ce, be, ee) => {
    const j = () => {
      if (T.isMounted) {
        let { next: We, bu: xe, u: Z, parent: Ve, vnode: Ne } = T;
        {
          const kt = qr(T);
          if (kt) {
            We && (We.el = Ne.el, ve(T, We, ee)), kt.asyncDep.then(() => {
              T.isUnmounted || j();
            });
            return;
          }
        }
        let Qe = We, Fe;
        fn(T, !1), We ? (We.el = Ne.el, ve(T, We, ee)) : We = Ne, xe && Wo(xe), (Fe = We.props && We.props.onVnodeBeforeUpdate) && Ms(Fe, Ve, We, Ne), fn(T, !0);
        const Ae = ni(T), Xe = T.subTree;
        T.subTree = Ae, C(
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
        const { el: xe, props: Z } = U, { bm: Ve, m: Ne, parent: Qe, root: Fe, type: Ae } = T, Xe = Ln(U);
        fn(T, !1), Ve && Wo(Ve), !Xe && (We = Z && Z.onVnodeBeforeMount) && Ms(We, Qe, U), fn(T, !0);
        {
          Fe.ce && // @ts-expect-error _def is private
          Fe.ce._def.shadowRoot !== !1 && Fe.ce._injectChildStyle(Ae);
          const kt = T.subTree = ni(T);
          C(
            null,
            kt,
            ie,
            Ie,
            T,
            Ce,
            be
          ), U.el = kt.el;
        }
        if (Ne && ss(Ne, Ce), !Xe && (We = Z && Z.onVnodeMounted)) {
          const kt = U;
          ss(
            () => Ms(We, Qe, kt),
            Ce
          );
        }
        (U.shapeFlag & 256 || Qe && Ln(Qe.vnode) && Qe.vnode.shapeFlag & 256) && T.a && ss(T.a, Ce), T.isMounted = !0, U = ie = Ie = null;
      }
    };
    T.scope.on();
    const he = T.effect = new Zi(j);
    T.scope.off();
    const _e = T.update = he.run.bind(he), Ke = T.job = he.runIfDirty.bind(he);
    Ke.i = T, Ke.id = T.uid, he.scheduler = () => bl(Ke), fn(T, !0), _e();
  }, ve = (T, U, ie) => {
    U.component = T;
    const Ie = T.vnode.props;
    T.vnode = U, T.next = null, gd(T, U.props, Ie, ie), _d(T, U.children, ie), Ks(), Hl(T), Js();
  }, se = (T, U, ie, Ie, Ce, be, ee, j, he = !1) => {
    const _e = T && T.children, Ke = T ? T.shapeFlag : 0, We = U.children, { patchFlag: xe, shapeFlag: Z } = U;
    if (xe > 0) {
      if (xe & 128) {
        ne(
          _e,
          We,
          ie,
          Ie,
          Ce,
          be,
          ee,
          j,
          he
        );
        return;
      } else if (xe & 256) {
        fe(
          _e,
          We,
          ie,
          Ie,
          Ce,
          be,
          ee,
          j,
          he
        );
        return;
      }
    }
    Z & 8 ? (Ke & 16 && ze(_e, Ce, be), We !== _e && v(ie, We)) : Ke & 16 ? Z & 16 ? ne(
      _e,
      We,
      ie,
      Ie,
      Ce,
      be,
      ee,
      j,
      he
    ) : ze(_e, Ce, be, !0) : (Ke & 8 && v(ie, ""), Z & 16 && N(
      We,
      ie,
      Ie,
      Ce,
      be,
      ee,
      j,
      he
    ));
  }, fe = (T, U, ie, Ie, Ce, be, ee, j, he) => {
    T = T || Rn, U = U || Rn;
    const _e = T.length, Ke = U.length, We = Math.min(_e, Ke);
    let xe;
    for (xe = 0; xe < We; xe++) {
      const Z = U[xe] = he ? an(U[xe]) : Us(U[xe]);
      C(
        T[xe],
        Z,
        ie,
        null,
        Ce,
        be,
        ee,
        j,
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
      U,
      ie,
      Ie,
      Ce,
      be,
      ee,
      j,
      he,
      We
    );
  }, ne = (T, U, ie, Ie, Ce, be, ee, j, he) => {
    let _e = 0;
    const Ke = U.length;
    let We = T.length - 1, xe = Ke - 1;
    for (; _e <= We && _e <= xe; ) {
      const Z = T[_e], Ve = U[_e] = he ? an(U[_e]) : Us(U[_e]);
      if (hn(Z, Ve))
        C(
          Z,
          Ve,
          ie,
          null,
          Ce,
          be,
          ee,
          j,
          he
        );
      else
        break;
      _e++;
    }
    for (; _e <= We && _e <= xe; ) {
      const Z = T[We], Ve = U[xe] = he ? an(U[xe]) : Us(U[xe]);
      if (hn(Z, Ve))
        C(
          Z,
          Ve,
          ie,
          null,
          Ce,
          be,
          ee,
          j,
          he
        );
      else
        break;
      We--, xe--;
    }
    if (_e > We) {
      if (_e <= xe) {
        const Z = xe + 1, Ve = Z < Ke ? U[Z].el : Ie;
        for (; _e <= xe; )
          C(
            null,
            U[_e] = he ? an(U[_e]) : Us(U[_e]),
            ie,
            Ve,
            Ce,
            be,
            ee,
            j,
            he
          ), _e++;
      }
    } else if (_e > xe)
      for (; _e <= We; )
        oe(T[_e], Ce, be, !0), _e++;
    else {
      const Z = _e, Ve = _e, Ne = /* @__PURE__ */ new Map();
      for (_e = Ve; _e <= xe; _e++) {
        const X = U[_e] = he ? an(U[_e]) : Us(U[_e]);
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
          oe(X, Ce, be, !0);
          continue;
        }
        let G;
        if (X.key != null)
          G = Ne.get(X.key);
        else
          for (Qe = Ve; Qe <= xe; Qe++)
            if (Lt[Qe - Ve] === 0 && hn(X, U[Qe])) {
              G = Qe;
              break;
            }
        G === void 0 ? oe(X, Ce, be, !0) : (Lt[G - Ve] = _e + 1, G >= kt ? kt = G : Xe = !0, C(
          X,
          U[G],
          ie,
          null,
          Ce,
          be,
          ee,
          j,
          he
        ), Fe++);
      }
      const Kt = Xe ? Cd(Lt) : Rn;
      for (Qe = Kt.length - 1, _e = Ae - 1; _e >= 0; _e--) {
        const X = Ve + _e, G = U[X], me = U[X + 1], Je = X + 1 < Ke ? (
          // #13559, fallback to el placeholder for unresolved async component
          me.el || me.placeholder
        ) : Ie;
        Lt[_e] === 0 ? C(
          null,
          G,
          ie,
          Je,
          Ce,
          be,
          ee,
          j,
          he
        ) : Xe && (Qe < 0 || _e !== Kt[Qe] ? K(G, ie, Je, 2) : Qe--);
      }
    }
  }, K = (T, U, ie, Ie, Ce = null) => {
    const { el: be, type: ee, transition: j, children: he, shapeFlag: _e } = T;
    if (_e & 6) {
      K(T.component.subTree, U, ie, Ie);
      return;
    }
    if (_e & 128) {
      T.suspense.move(U, ie, Ie);
      return;
    }
    if (_e & 64) {
      ee.move(T, U, ie, ge);
      return;
    }
    if (ee === B) {
      a(be, U, ie);
      for (let We = 0; We < he.length; We++)
        K(he[We], U, ie, Ie);
      a(T.anchor, U, ie);
      return;
    }
    if (ee === Va) {
      E(T, U, ie);
      return;
    }
    if (Ie !== 2 && _e & 1 && j)
      if (Ie === 0)
        j.beforeEnter(be), a(be, U, ie), ss(() => j.enter(be), Ce);
      else {
        const { leave: We, delayLeave: xe, afterLeave: Z } = j, Ve = () => {
          T.ctx.isUnmounted ? l(be) : a(be, U, ie);
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
      a(be, U, ie);
  }, oe = (T, U, ie, Ie = !1, Ce = !1) => {
    const {
      type: be,
      props: ee,
      ref: j,
      children: he,
      dynamicChildren: _e,
      shapeFlag: Ke,
      patchFlag: We,
      dirs: xe,
      cacheIndex: Z
    } = T;
    if (We === -2 && (Ce = !1), j != null && (Ks(), fo(j, null, ie, T, !0), Js()), Z != null && (U.renderCache[Z] = void 0), Ke & 256) {
      U.ctx.deactivate(T);
      return;
    }
    const Ve = Ke & 1 && xe, Ne = !Ln(T);
    let Qe;
    if (Ne && (Qe = ee && ee.onVnodeBeforeUnmount) && Ms(Qe, U, T), Ke & 6)
      pe(T.component, ie, Ie);
    else {
      if (Ke & 128) {
        T.suspense.unmount(ie, Ie);
        return;
      }
      Ve && mn(T, null, U, "beforeUnmount"), Ke & 64 ? T.type.remove(
        T,
        U,
        ie,
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
        U,
        ie,
        !1,
        !0
      ) : (be === B && We & 384 || !Ce && Ke & 16) && ze(he, U, ie), Ie && ae(T);
    }
    (Ne && (Qe = ee && ee.onVnodeUnmounted) || Ve) && ss(() => {
      Qe && Ms(Qe, U, T), Ve && mn(T, null, U, "unmounted");
    }, ie);
  }, ae = (T) => {
    const { type: U, el: ie, anchor: Ie, transition: Ce } = T;
    if (U === B) {
      Me(ie, Ie);
      return;
    }
    if (U === Va) {
      M(T);
      return;
    }
    const be = () => {
      l(ie), Ce && !Ce.persisted && Ce.afterLeave && Ce.afterLeave();
    };
    if (T.shapeFlag & 1 && Ce && !Ce.persisted) {
      const { leave: ee, delayLeave: j } = Ce, he = () => ee(ie, be);
      j ? j(T.el, be, he) : he();
    } else
      be();
  }, Me = (T, U) => {
    let ie;
    for (; T !== U; )
      ie = w(T), l(T), T = ie;
    l(U);
  }, pe = (T, U, ie) => {
    const { bum: Ie, scope: Ce, job: be, subTree: ee, um: j, m: he, a: _e } = T;
    li(he), li(_e), Ie && Wo(Ie), Ce.stop(), be && (be.flags |= 8, oe(ee, T, U, ie)), j && ss(j, U), ss(() => {
      T.isUnmounted = !0;
    }, U);
  }, ze = (T, U, ie, Ie = !1, Ce = !1, be = 0) => {
    for (let ee = be; ee < T.length; ee++)
      oe(T[ee], U, ie, Ie, Ce);
  }, Le = (T) => {
    if (T.shapeFlag & 6)
      return Le(T.component.subTree);
    if (T.shapeFlag & 128)
      return T.suspense.next();
    const U = w(T.anchor || T.el), ie = U && U[wr];
    return ie ? w(ie) : U;
  };
  let ke = !1;
  const De = (T, U, ie) => {
    T == null ? U._vnode && oe(U._vnode, null, null, !0) : C(
      U._vnode || null,
      T,
      U,
      null,
      null,
      null,
      ie
    ), U._vnode = T, ke || (ke = !0, Hl(), gr(), ke = !1);
  }, ge = {
    p: C,
    um: oe,
    m: K,
    r: ae,
    mt: W,
    mc: N,
    pc: se,
    pbc: ce,
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
const P = (e, t) => Mu(e, t, xo);
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
  } = e, k = jd(l), C = k && k[0], S = k && k[1], {
    onBeforeEnter: $,
    onEnter: I,
    onEnterCancelled: E,
    onLeave: M,
    onLeaveCancelled: D,
    onBeforeAppear: O = $,
    onAppear: F = I,
    onAppearCancelled: N = E
  } = t, q = (Q, te, W, A) => {
    Q._enterCancelled = A, sn(Q, te ? v : u), sn(Q, te ? f : c), W && W();
  }, ce = (Q, te) => {
    Q._isLeaving = !1, sn(Q, p), sn(Q, g), sn(Q, w), te && te();
  }, de = (Q) => (te, W) => {
    const A = Q ? F : I, V = () => q(te, Q, W);
    vn(A, [te, V]), mi(() => {
      sn(te, Q ? d : r), Rs(te, Q ? v : u), di(A) || fi(te, a, C, V);
    });
  };
  return At(t, {
    onBeforeEnter(Q) {
      vn($, [Q]), Rs(Q, r), Rs(Q, c);
    },
    onBeforeAppear(Q) {
      vn(O, [Q]), Rs(Q, d), Rs(Q, f);
    },
    onEnter: de(!1),
    onAppear: de(!0),
    onLeave(Q, te) {
      Q._isLeaving = !0;
      const W = () => ce(Q, te);
      Rs(Q, p), Q._enterCancelled ? (Rs(Q, w), ol(Q)) : (ol(Q), Rs(Q, w)), mi(() => {
        Q._isLeaving && (sn(Q, p), Rs(Q, g), di(M) || fi(Q, a, S, W));
      }), vn(M, [Q, W]);
    },
    onEnterCancelled(Q) {
      q(Q, !1, void 0, !0), vn(E, [Q]);
    },
    onAppearCancelled(Q) {
      q(Q, !0, void 0, !0), vn(N, [Q]);
    },
    onLeaveCancelled(Q) {
      ce(Q), vn(D, [Q]);
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
const ED = Cn({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const TD = [
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
], MD = {
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
], PD = [
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
  async function C(z) {
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
  async function $() {
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
  async function M(z, Se) {
    return n(`/v2/comfygit/environment_export/${encodeURIComponent(z)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Se, force: !0 })
    });
  }
  async function D() {
    return n("/v2/comfygit/branches");
  }
  async function O(z) {
    return n(`/v2/comfygit/commit/${z}`);
  }
  async function F(z, Se = !1) {
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
  async function q(z, Se = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: z, force: Se })
    });
  }
  async function ce(z, Se = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(z)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: Se })
    });
  }
  async function de() {
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
    return (await de()).environments;
  }
  async function te(z) {
    try {
      return await n(`/v2/comfygit/environments/${encodeURIComponent(z)}`);
    } catch {
      return null;
    }
  }
  async function W(z, Se) {
    const je = { target_env: z };
    return Se && (je.workspace_path = Se), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(je)
    });
  }
  async function A() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function V(z) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function ve() {
    return n("/v2/workspace/environments/create_status");
  }
  async function se(z = 100) {
    return n(`/v2/workspace/comfyui_releases?limit=${z}`);
  }
  async function fe(z) {
    return n(`/v2/workspace/environments/${z}`, {
      method: "DELETE"
    });
  }
  async function ne(z = !1) {
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
  async function K(z) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/details`);
  }
  async function oe(z) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/contract`);
  }
  async function ae(z, Se) {
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
  async function U() {
    return n("/v2/workspace/models/workflow-source-candidates");
  }
  async function ie(z) {
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
  async function j() {
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
  async function me(z) {
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
  async function J(z, Se, je) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(z)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: Se, push_url: je })
    });
  }
  async function ue(z, Se) {
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
  async function L(z) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(z)}`
    );
  }
  async function le(z, Se, je, wt) {
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
  async function re(z) {
    return n("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function H(z) {
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
    exportEnv: C,
    validateExport: S,
    validateDeploy: $,
    exportEnvWithForce: I,
    validateEnvironmentExport: E,
    exportEnvironmentWithForce: M,
    // Git Operations
    getBranches: D,
    getCommitDetail: O,
    checkout: F,
    createBranch: N,
    switchBranch: q,
    deleteBranch: ce,
    // Environment Management
    listEnvironments: de,
    getEnvironments: Q,
    getEnvironmentDetails: te,
    switchEnvironment: W,
    getSwitchProgress: A,
    createEnvironment: V,
    getCreateProgress: ve,
    getComfyUIReleases: se,
    deleteEnvironment: fe,
    // Workflow Management
    getWorkflows: ne,
    getWorkflowDetails: K,
    getWorkflowContract: oe,
    saveWorkflowContract: ae,
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
    getWorkflowSourceCandidates: U,
    openFileLocation: ie,
    addModelSource: Ie,
    removeModelSource: Ce,
    deleteModel: be,
    downloadModel: ee,
    scanWorkspaceModels: j,
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
    installNode: me,
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
    updateRemoteUrl: J,
    fetchRemote: ue,
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
    validateEnvironmentName: L,
    executeImport: le,
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
    addCustomWorker: re,
    removeCustomWorker: H,
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
    const t = e, n = P(() => `status-item--${t.variant}`);
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
    const t = e, n = P(() => `issue-card--${t.severity}`);
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
    const a = P(() => {
      var w, g, k;
      return ((k = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : k.filter(
        (C) => C.status === "broken" && C.sync_state === "synced"
      )) || [];
    }), l = P(() => {
      var w, g, k;
      return ((k = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : k.filter(
        (C) => C.status === "broken" && C.sync_state !== "synced"
      )) || [];
    }), r = P(() => {
      var w, g, k;
      return ((k = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.synced) == null ? void 0 : k.filter((C) => {
        var $, I, E;
        const S = (E = (I = ($ = t.status) == null ? void 0 : $.workflows) == null ? void 0 : I.analyzed) == null ? void 0 : E.find((M) => M.name === C);
        return !S || S.status !== "broken";
      })) || [];
    }), c = P(() => {
      var w, g, k, C, S;
      return (w = t.status) != null && w.workflows ? (((g = t.status.workflows.new) == null ? void 0 : g.length) ?? 0) > 0 || (((k = t.status.workflows.modified) == null ? void 0 : k.length) ?? 0) > 0 || (((C = t.status.workflows.deleted) == null ? void 0 : C.length) ?? 0) > 0 || (((S = t.status.workflows.synced) == null ? void 0 : S.length) ?? 0) > 0 : !1;
    }), u = P(() => {
      var g, k, C;
      const w = (g = t.status) == null ? void 0 : g.git_changes;
      return w ? (((k = w.nodes_added) == null ? void 0 : k.length) ?? 0) > 0 || (((C = w.nodes_removed) == null ? void 0 : C.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = P(() => {
      var w, g, k, C, S, $;
      return !c.value && !u.value && ((g = (w = t.status) == null ? void 0 : w.comparison) == null ? void 0 : g.is_synced) && (((k = t.status) == null ? void 0 : k.missing_models_count) ?? 0) === 0 && ((($ = (S = (C = t.status) == null ? void 0 : C.comparison) == null ? void 0 : S.disabled_nodes) == null ? void 0 : $.length) ?? 0) === 0;
    }), f = P(() => {
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
      var k, C, S, $, I, E, M, D, O, F, N, q, ce, de, Q, te, W, A, V, ve, se, fe;
      return o(), R(as, { to: "body" }, [
        e.show ? (o(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: g[7] || (g[7] = (ne) => w.$emit("close"))
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
                onClick: g[0] || (g[0] = (ne) => w.$emit("close"))
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
                    onClick: g[1] || (g[1] = (ne) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (o(), i("div", Sf, [
                  s("div", If, [
                    g[11] || (g[11] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", Ef, "BROKEN (COMMITTED) (" + m(a.value.length) + ")", 1)
                  ]),
                  s("div", Tf, [
                    (o(!0), i(B, null, ye(a.value, (ne) => (o(), i("div", {
                      key: ne.name,
                      class: "workflow-item"
                    }, [
                      s("span", Mf, m(ne.name), 1),
                      s("span", Pf, m(ne.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (o(), i("div", Rf, [
                  s("div", Df, [
                    g[12] || (g[12] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", Nf, "BROKEN (UNCOMMITTED) (" + m(l.value.length) + ")", 1)
                  ]),
                  s("div", Lf, [
                    (o(!0), i(B, null, ye(l.value, (ne) => (o(), i("div", {
                      key: ne.name,
                      class: "workflow-item"
                    }, [
                      s("span", Uf, m(ne.name), 1),
                      s("span", Of, m(ne.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (C = (k = e.status.workflows) == null ? void 0 : k.new) != null && C.length ? (o(), i("div", Af, [
                  s("div", zf, [
                    g[13] || (g[13] = s("span", { class: "workflow-status-icon new" }, "●", -1)),
                    s("span", Ff, "NEW (" + m(e.status.workflows.new.length) + ")", 1)
                  ]),
                  s("div", Vf, [
                    (o(!0), i(B, null, ye(e.status.workflows.new, (ne) => (o(), i("div", {
                      key: ne,
                      class: "workflow-item"
                    }, [
                      s("span", Bf, m(ne), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                ($ = (S = e.status.workflows) == null ? void 0 : S.modified) != null && $.length ? (o(), i("div", Wf, [
                  s("div", Gf, [
                    g[14] || (g[14] = s("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    s("span", jf, "MODIFIED (" + m(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  s("div", Hf, [
                    (o(!0), i(B, null, ye(e.status.workflows.modified, (ne) => (o(), i("div", {
                      key: ne,
                      class: "workflow-item"
                    }, [
                      s("span", qf, m(ne), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (E = (I = e.status.workflows) == null ? void 0 : I.deleted) != null && E.length ? (o(), i("div", Kf, [
                  s("div", Jf, [
                    g[15] || (g[15] = s("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    s("span", Qf, "DELETED (" + m(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  s("div", Yf, [
                    (o(!0), i(B, null, ye(e.status.workflows.deleted, (ne) => (o(), i("div", {
                      key: ne,
                      class: "workflow-item"
                    }, [
                      s("span", Xf, m(ne), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (o(), i("div", Zf, [
                  s("div", {
                    class: "workflow-group-header clickable",
                    onClick: g[2] || (g[2] = (ne) => n.value = !n.value)
                  }, [
                    g[16] || (g[16] = s("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    s("span", ev, "SYNCED (" + m(r.value.length) + ")", 1),
                    s("span", tv, m(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), i("div", sv, [
                    (o(!0), i(B, null, ye(r.value, (ne) => (o(), i("div", {
                      key: ne,
                      class: "workflow-item"
                    }, [
                      s("span", nv, m(ne), 1)
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
                (D = (M = e.status.git_changes) == null ? void 0 : M.nodes_added) != null && D.length ? (o(), i("div", av, [
                  s("div", lv, [
                    g[18] || (g[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", iv, "NODES ADDED (" + m(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", rv, [
                    (o(!0), i(B, null, ye(e.status.git_changes.nodes_added, (ne) => (o(), i("div", {
                      key: v(ne),
                      class: "change-item"
                    }, [
                      s("span", cv, m(v(ne)), 1),
                      p(ne) ? (o(), i("span", uv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (F = (O = e.status.git_changes) == null ? void 0 : O.nodes_removed) != null && F.length ? (o(), i("div", dv, [
                  s("div", mv, [
                    g[19] || (g[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", fv, "NODES REMOVED (" + m(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", vv, [
                    (o(!0), i(B, null, ye(e.status.git_changes.nodes_removed, (ne) => (o(), i("div", {
                      key: v(ne),
                      class: "change-item"
                    }, [
                      s("span", pv, m(v(ne)), 1),
                      p(ne) ? (o(), i("span", gv, "dev")) : y("", !0)
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
                (q = e.status.git_changes) != null && q.has_other_changes ? (o(), i("div", kv, [...g[21] || (g[21] = [
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
              (ce = e.status.comparison) != null && ce.is_synced ? y("", !0) : (o(), i("div", bv, [
                s("div", $v, [
                  b(gs, { level: "4" }, {
                    default: h(() => [...g[22] || (g[22] = [
                      x("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[3] || (g[3] = (ne) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                g[26] || (g[26] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("span", null, "Environment needs repair")
                ], -1)),
                (Q = (de = e.status.comparison) == null ? void 0 : de.missing_nodes) != null && Q.length ? (o(), i("div", Cv, [
                  b(Tt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", xv, [
                    (o(!0), i(B, null, ye(e.status.comparison.missing_nodes.slice(0, 10), (ne) => (o(), i("div", {
                      key: ne,
                      class: "drift-list-item"
                    }, " - " + m(ne), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (o(), i("div", Sv, " ... and " + m(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (W = (te = e.status.comparison) == null ? void 0 : te.extra_nodes) != null && W.length ? (o(), i("div", Iv, [
                  b(Tt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", Ev, [
                    (o(!0), i(B, null, ye(e.status.comparison.extra_nodes.slice(0, 10), (ne) => (o(), i("div", {
                      key: ne,
                      class: "drift-list-item"
                    }, " - " + m(ne), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (o(), i("div", Tv, " ... and " + m(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (V = (A = e.status.comparison) == null ? void 0 : A.version_mismatches) != null && V.length ? (o(), i("div", Mv, [
                  b(Tt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", Pv, [
                    (o(!0), i(B, null, ye(e.status.comparison.version_mismatches.slice(0, 10), (ne) => (o(), i("div", {
                      key: ne.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      x(m(ne.name) + ": ", 1),
                      s("span", Rv, m(ne.actual), 1),
                      g[23] || (g[23] = x(" → ", -1)),
                      s("span", Dv, m(ne.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (o(), i("div", Nv, " ... and " + m(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((ve = e.status.comparison) == null ? void 0 : ve.packages_in_sync) === !1 ? (o(), i("div", Lv, [
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
                    onClick: g[4] || (g[4] = (ne) => w.$emit("repair"))
                  }, {
                    default: h(() => [...g[24] || (g[24] = [
                      x(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  g[25] || (g[25] = s("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (fe = (se = e.status.comparison) == null ? void 0 : se.disabled_nodes) != null && fe.length ? (o(), i("div", Ov, [
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
                  (o(!0), i(B, null, ye(e.status.comparison.disabled_nodes.slice(0, 10), (ne) => (o(), i("div", {
                    key: ne,
                    class: "drift-list-item"
                  }, " • " + m(ne), 1))), 128)),
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
                onClick: g[5] || (g[5] = (ne) => w.$emit("close"))
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
    function d($) {
      return typeof $ == "string" ? $ : $.value;
    }
    function f($) {
      return typeof $ == "string" ? $ : $.label;
    }
    const v = P(() => {
      if (!n.modelValue && n.placeholder)
        return n.placeholder;
      const $ = n.options.find((I) => d(I) === n.modelValue);
      return $ ? f($) : String(n.modelValue);
    });
    function p() {
      n.disabled || (l.value = !l.value);
    }
    function w() {
      l.value = !1;
    }
    function g($) {
      a("update:modelValue", d($)), w();
    }
    function k() {
      if (!r.value) return;
      const $ = r.value.getBoundingClientRect(), I = window.innerHeight, E = I - $.bottom, M = $.top, D = Math.min(300, n.options.length * 36 + 8), O = E < D && M > E;
      u.value = {
        position: "fixed",
        left: `${$.left}px`,
        width: `${$.width}px`,
        maxHeight: "300px",
        ...O ? { bottom: `${I - $.top + 4}px` } : { top: `${$.bottom + 4}px` }
      };
    }
    $t(l, async ($) => {
      $ && (await Gt(), k());
    });
    function C() {
      l.value && k();
    }
    function S($) {
      $.key === "Escape" && l.value && w();
    }
    return ut(() => {
      window.addEventListener("scroll", C, !0), window.addEventListener("keydown", S);
    }), Gn(() => {
      window.removeEventListener("scroll", C, !0), window.removeEventListener("keydown", S);
    }), ($, I) => (o(), i("div", {
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
            onClick: (M) => g(E)
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
    const p = P(() => {
      const C = d.value.map((S) => ({
        label: S,
        value: S
      }));
      return C.push({ label: "Custom path...", value: "__custom__" }), C;
    }), w = P(() => r.value === "__custom__" ? u.value.trim() : r.value ? c.value.trim() ? `${r.value}/${c.value.trim()}` : r.value : "");
    function g() {
      if (f.value || !n.suggestedDirectory) return;
      const C = d.value.find(
        (S) => {
          var $;
          return S.toLowerCase() === (($ = n.suggestedDirectory) == null ? void 0 : $.toLowerCase());
        }
      );
      C && C !== r.value && (v = !0, r.value = C, Gt(() => {
        v = !1;
      }));
    }
    async function k() {
      try {
        const C = await l();
        d.value = C.directories, C.directories.length > 0 && !r.value && (r.value = C.directories[0]);
      } catch {
        d.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], r.value || (r.value = "checkpoints");
      }
    }
    return $t(w, (C) => {
      a("update:modelValue", C);
    }, { immediate: !0 }), $t(() => n.suggestedDirectory, g), $t(d, g), $t(r, (C, S) => {
      v || S === "" || (f.value = !0);
    }), ut(k), (C, S) => (o(), i("div", mp, [
      s("h4", fp, m(e.label), 1),
      s("div", vp, [
        b(dp, {
          modelValue: r.value,
          "onUpdate:modelValue": S[0] || (S[0] = ($) => r.value = $),
          options: p.value,
          placeholder: "Select directory...",
          class: "dest-select"
        }, null, 8, ["modelValue", "options"]),
        r.value !== "__custom__" ? (o(), i("span", pp, "/")) : y("", !0),
        r.value !== "__custom__" ? (o(), R(Rt, {
          key: 1,
          modelValue: c.value,
          "onUpdate:modelValue": S[1] || (S[1] = ($) => c.value = $),
          placeholder: "subfolder (optional)",
          class: "dest-subfolder"
        }, null, 8, ["modelValue"])) : y("", !0)
      ]),
      r.value === "__custom__" ? (o(), R(Rt, {
        key: 0,
        modelValue: u.value,
        "onUpdate:modelValue": S[2] || (S[2] = ($) => u.value = $),
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
    const n = e, a = t, { getHuggingFaceRepoInfo: l } = mt(), r = _([]), c = _(/* @__PURE__ */ new Set()), u = _(!1), d = _(null), f = _(""), v = _(!1), p = _("name"), w = _(!0), g = _(""), k = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, C = P(() => {
      let ae = r.value;
      if (n.initialPath) {
        const Me = n.initialPath.endsWith("/") ? n.initialPath : `${n.initialPath}/`;
        ae = ae.filter((pe) => pe.path.startsWith(Me) || pe.path === n.initialPath);
      }
      if (v.value && (ae = ae.filter((Me) => Me.is_model_file)), f.value.trim()) {
        const Me = f.value.toLowerCase();
        ae = ae.filter((pe) => pe.path.toLowerCase().includes(Me));
      }
      return ae;
    }), S = P(() => {
      const ae = [...C.value];
      return ae.sort((Me, pe) => {
        let ze;
        return p.value === "name" ? ze = Me.path.localeCompare(pe.path) : ze = Me.size - pe.size, w.value ? ze : -ze;
      }), ae;
    }), $ = P(() => C.value.length === 0 ? !1 : C.value.every((ae) => c.value.has(ae.path))), I = P(() => C.value.some((ae) => c.value.has(ae.path))), E = P(() => g.value.trim().length > 0), M = P(() => {
      let ae = 0;
      for (const Me of c.value) {
        const pe = r.value.find((ze) => ze.path === Me);
        pe && (ae += pe.size);
      }
      return ae;
    }), D = P(() => {
      if (c.value.size === 0) return null;
      const ae = /* @__PURE__ */ new Set();
      for (const Me of c.value) {
        const pe = ve(Me);
        pe && ae.add(pe.toLowerCase());
      }
      return ae.size !== 1 ? null : [...ae][0];
    }), O = P(() => n.mode || "download"), F = P(() => n.actionLabel || (O.value === "source" ? "Use as Source" : "Queue Download")), N = P(() => O.value === "source" ? c.value.size === 1 ? "1 file selected" : `${c.value.size} files selected` : `${c.value.size} file(s) selected`), q = P(() => O.value === "source" ? c.value.size !== 1 : c.value.size === 0 || !E.value);
    function ce(ae) {
      if (ae === 0) return "0 B";
      const Me = 1024 * 1024 * 1024, pe = 1024 * 1024, ze = 1024;
      return ae >= Me ? `${(ae / Me).toFixed(2)} GB` : ae >= pe ? `${(ae / pe).toFixed(1)} MB` : ae >= ze ? `${(ae / ze).toFixed(0)} KB` : `${ae} B`;
    }
    function de(ae) {
      const Me = ae.match(k);
      return Me ? `${Me[1]}${Me[4]}` : null;
    }
    function Q(ae) {
      if (O.value === "source") {
        c.value = c.value.has(ae.path) ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([ae.path]);
        return;
      }
      const Me = new Set(c.value), pe = Me.has(ae.path), ze = ae.shard_group || de(ae.path);
      if (ze) {
        const Le = r.value.filter((ke) => (ke.shard_group || de(ke.path)) === ze);
        pe ? Le.forEach((ke) => Me.delete(ke.path)) : Le.forEach((ke) => Me.add(ke.path));
      } else
        pe ? Me.delete(ae.path) : Me.add(ae.path);
      c.value = Me;
    }
    function te() {
      const ae = new Set(c.value);
      for (const Me of C.value)
        Me.is_model_file && ae.add(Me.path);
      c.value = ae;
    }
    function W() {
      c.value = /* @__PURE__ */ new Set();
    }
    function A() {
      if ($.value) {
        const ae = new Set(c.value);
        for (const Me of C.value)
          ae.delete(Me.path);
        c.value = ae;
      } else {
        const ae = new Set(c.value);
        for (const Me of C.value)
          ae.add(Me.path);
        c.value = ae;
      }
    }
    function V(ae) {
      p.value === ae ? w.value = !w.value : (p.value = ae, w.value = !0);
    }
    function ve(ae) {
      const Me = ae.split("/");
      return Me.length >= 2 ? Me[Me.length - 2] : null;
    }
    function se() {
      return g.value.trim();
    }
    function fe() {
      if (c.value.size === 0 || !E.value) return;
      const ae = se(), Me = [];
      for (const pe of c.value) {
        const ze = r.value.find((Le) => Le.path === pe);
        ze && Me.push({
          url: Pi(n.repoId, n.revision, ze.path),
          destination: ae,
          filename: ze.path.split("/").pop() || ze.path
        });
      }
      a("queue", Me);
    }
    function ne() {
      if (c.value.size !== 1) return;
      const [ae] = c.value;
      a("selectSource", Pi(n.repoId, n.revision, ae));
    }
    function K() {
      if (O.value === "source") {
        ne();
        return;
      }
      fe();
    }
    async function oe() {
      if (n.repoId) {
        u.value = !0, d.value = null;
        try {
          const ae = `https://huggingface.co/${n.repoId}/tree/${n.revision || "main"}`, Me = await l(ae);
          if (r.value = Me.files, n.preselectedFile) {
            const pe = r.value.find((ze) => ze.path === n.preselectedFile);
            pe && Q(pe);
          }
        } catch (ae) {
          d.value = ae instanceof Error ? ae.message : "Failed to load repository";
        } finally {
          u.value = !1;
        }
      }
    }
    return $t(() => [n.repoId, n.revision], () => {
      n.repoId && oe();
    }, { immediate: !1 }), ut(() => {
      oe();
    }), (ae, Me) => (o(), i("div", _p, [
      s("div", kp, [
        s("button", {
          class: "back-btn",
          onClick: Me[0] || (Me[0] = (pe) => ae.$emit("back")),
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
            O.value === "download" ? (o(), i("button", {
              key: 0,
              class: "action-btn",
              onClick: te
            }, "Auto-Select Models")) : y("", !0),
            s("button", {
              class: "action-btn",
              onClick: W
            }, "Clear")
          ])
        ]),
        s("div", Tp, [
          C.value.length > 0 ? (o(), i("div", Mp, [
            O.value === "download" ? (o(), i("input", {
              key: 0,
              type: "checkbox",
              checked: $.value,
              indeterminate: I.value && !$.value,
              class: "file-checkbox",
              onChange: A
            }, null, 40, Pp)) : (o(), i("span", Rp)),
            s("span", {
              class: "header-name",
              onClick: Me[3] || (Me[3] = (pe) => V("name"))
            }, [
              Me[7] || (Me[7] = x(" Name ", -1)),
              s("span", Dp, m(p.value === "name" ? w.value ? "▲" : "▼" : ""), 1)
            ]),
            s("span", {
              class: "header-size",
              onClick: Me[4] || (Me[4] = (pe) => V("size"))
            }, [
              Me[8] || (Me[8] = x(" Size ", -1)),
              s("span", Np, m(p.value === "size" ? w.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          C.value.length === 0 ? (o(), i("div", Lp, m(r.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (o(), i("div", Up, [
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
              s("span", Fp, m(ce(pe.size)), 1)
            ], 10, Op))), 128))
          ]))
        ]),
        O.value === "download" ? (o(), R(rc, {
          key: 0,
          modelValue: g.value,
          "onUpdate:modelValue": Me[6] || (Me[6] = (pe) => g.value = pe),
          "suggested-directory": D.value
        }, null, 8, ["modelValue", "suggested-directory"])) : y("", !0),
        s("div", Vp, [
          s("div", Bp, [
            s("span", Wp, m(N.value), 1),
            s("span", Gp, m(ce(M.value)), 1)
          ]),
          b(Ue, {
            variant: "primary",
            disabled: q.value,
            onClick: K
          }, {
            default: h(() => [
              x(m(F.value), 1)
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
    const n = e, a = t, { updateConfig: l } = mt(), r = _(""), c = _(!1), u = _(!1), d = P(
      () => n.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), f = P(
      () => n.provider === "huggingface" ? "🤗" : "🎨"
    ), v = P(
      () => n.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), p = P(
      () => n.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), w = P(
      () => n.provider === "huggingface" ? "Get your HuggingFace token →" : "Get your CivitAI API key →"
    );
    async function g() {
      if (r.value.trim()) {
        c.value = !0;
        try {
          const C = n.provider === "huggingface" ? { huggingface_token: r.value.trim() } : { civitai_api_key: r.value.trim() };
          await l(C), r.value = "", a("saved"), a("close");
        } catch (C) {
          console.error("Failed to save token:", C);
        } finally {
          c.value = !1;
        }
      }
    }
    async function k() {
      u.value = !0;
      try {
        const C = n.provider === "huggingface" ? { huggingface_token: null } : { civitai_api_key: null };
        await l(C), a("cleared"), a("close");
      } catch (C) {
        console.error("Failed to clear token:", C);
      } finally {
        u.value = !1;
      }
    }
    return (C, S) => (o(), R(Mt, {
      title: "Configure API Token",
      "overlay-z-index": e.overlayZIndex,
      onClose: S[2] || (S[2] = ($) => C.$emit("close"))
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
              "onUpdate:modelValue": S[0] || (S[0] = ($) => r.value = $),
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
            onClick: S[1] || (S[1] = ($) => C.$emit("close"))
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
    const { searchHuggingFaceRepos: t, getConfig: n } = mt(), a = _("search"), l = _(""), r = _([]), c = _(!1), u = _(null), d = _(!1), f = _(null), v = _("main"), p = _(), w = _(), g = _(!1), k = _(null), C = P(() => {
      if (!u.value) return !1;
      const F = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || F.includes("authentication") || F.includes("unauthorized");
    });
    function S(F) {
      return F >= 1e6 ? `${(F / 1e6).toFixed(1)}M` : F >= 1e3 ? `${(F / 1e3).toFixed(1)}K` : String(F);
    }
    async function $() {
      const F = l.value.trim();
      if (!F) return;
      u.value = null;
      const N = yp(F);
      if (N.kind === "file" && N.repoId && N.path) {
        f.value = N.repoId, v.value = N.revision || "main";
        const q = N.path.split("/");
        q.length > 1 ? p.value = q.slice(0, -1).join("/") : p.value = void 0, w.value = N.path, a.value = "browse";
        return;
      }
      if (N.kind === "repo" && N.repoId) {
        f.value = N.repoId, v.value = N.revision || "main", p.value = N.path, w.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(F) && !F.includes("://")) {
        f.value = F, v.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const q = await t(F);
        r.value = q.results, d.value = !0;
      } catch (q) {
        u.value = q instanceof Error ? q.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function I(F) {
      f.value = F, v.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
    }
    function E() {
      a.value = "search", f.value = null, p.value = void 0, w.value = void 0;
    }
    async function M() {
      try {
        const F = await n();
        k.value = F.huggingface_token || null;
      } catch (F) {
        console.error("Failed to load config:", F);
      }
    }
    function D() {
      M(), C.value && l.value && $();
    }
    function O() {
      k.value = null;
    }
    return ut(M), (F, N) => (o(), i("div", lg, [
      a.value === "search" ? (o(), i("div", ig, [
        s("div", rg, [
          s("div", cg, [
            b(Rt, {
              modelValue: l.value,
              "onUpdate:modelValue": N[0] || (N[0] = (q) => l.value = q),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: Cs($, ["enter"])
            }, null, 8, ["modelValue"]),
            b(Ue, {
              variant: "primary",
              onClick: $,
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
            onClick: N[1] || (N[1] = (q) => g.value = !0)
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
          C.value ? (o(), R(Ue, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: N[2] || (N[2] = (q) => g.value = !0)
          }, {
            default: h(() => [...N[7] || (N[7] = [
              x(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (o(), i("div", fg, [
          (o(!0), i(B, null, ye(r.value, (q) => (o(), i("div", {
            key: q.repo_id,
            class: "repo-card",
            onClick: (ce) => I(q.repo_id)
          }, [
            s("div", pg, [
              s("span", gg, m(q.repo_id), 1),
              s("div", hg, [
                s("span", yg, [
                  N[8] || (N[8] = s("span", { class: "stat-icon" }, "↓", -1)),
                  x(" " + m(S(q.downloads)), 1)
                ]),
                s("span", wg, [
                  N[9] || (N[9] = s("span", { class: "stat-icon" }, "★", -1)),
                  x(" " + m(S(q.likes)), 1)
                ])
              ])
            ]),
            q.description ? (o(), i("p", _g, m(q.description), 1)) : y("", !0),
            q.tags.length > 0 ? (o(), i("div", kg, [
              (o(!0), i(B, null, ye(q.tags.slice(0, 5), (ce) => (o(), i("span", {
                key: ce,
                class: "tag"
              }, m(ce), 1))), 128))
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
        onQueue: N[3] || (N[3] = (q) => F.$emit("queue", q)),
        onSelectSource: N[4] || (N[4] = (q) => F.$emit("selectSource", q))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file", "mode", "action-label"])),
      g.value ? (o(), R(ag, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": k.value,
        "overlay-z-index": e.overlayZIndex + 2,
        onClose: N[5] || (N[5] = (q) => g.value = !1),
        onSaved: D,
        onCleared: O
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
    const n = e, a = t, l = P(() => n.modelValue.trim()), r = P(() => {
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
    }), c = P(() => !!l.value && !r.value && !n.disabled);
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
    ], u = _("workflow"), d = _([]), f = _(!1), v = _(null), p = _(""), w = _(!1), g = _(null), k = P(() => d.value.filter((I) => I.source === "workflow")), C = P(() => !!(n.model.hash && (!n.model.blake3 || !n.model.sha256)));
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
    async function $() {
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
          C.value ? (o(), R(Ue, {
            key: 3,
            class: "compute-hashes-btn",
            variant: "secondary",
            size: "sm",
            loading: w.value,
            onClick: $
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
        (o(), i(B, null, ye(c, (M) => s("button", {
          key: M.id,
          class: Be(["tab-btn", { active: u.value === M.id }]),
          onClick: (D) => u.value = M.id
        }, m(M.label), 11, nh)), 64))
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
          (o(!0), i(B, null, ye(k.value, (M) => (o(), R(uc, {
            key: `${M.workflow}:${M.url}`,
            candidate: M,
            "action-label": e.actionLabel,
            loading: e.loadingUrl === M.url,
            onSelect: E[0] || (E[0] = (D) => a("selectSource", D))
          }, null, 8, ["candidate", "action-label", "loading"]))), 128))
        ])) : (o(), i("div", ch, " No likely workflow links found. Try direct URL for now. "))
      ])) : u.value === "huggingface" ? (o(), i("section", uh, [
        b(cc, {
          "mode-kind": "source",
          "action-label": e.actionLabel,
          "overlay-z-index": e.overlayZIndex,
          onSelectSource: E[1] || (E[1] = (M) => a("selectSource", M))
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
          "onUpdate:modelValue": E[2] || (E[2] = (M) => p.value = M),
          label: "",
          placeholder: e.directPlaceholder,
          "action-label": e.actionLabel,
          loading: e.loadingUrl === p.value.trim(),
          onSubmit: E[3] || (E[3] = (M) => a("selectSource", M))
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
    const n = e, a = t, { getModelDetails: l, updateNodeCriticality: r } = mt(), c = _(null), u = _(null), d = _(null), f = _(null), v = P(() => n.warnings.models_without_sources), p = P(() => n.warnings.nodes_without_provenance);
    async function w(S) {
      u.value = S, f.value = null;
      try {
        c.value = await l(S);
      } catch ($) {
        f.value = $ instanceof Error ? $.message : `Failed to load ${S}`;
      } finally {
        u.value = null;
      }
    }
    async function g(S) {
      d.value = S, f.value = null;
      try {
        const $ = await r(S, "optional");
        if ($.status !== "success") {
          f.value = $.message || `Failed to update ${S}`;
          return;
        }
        a("revalidate");
      } catch ($) {
        f.value = $ instanceof Error ? $.message : `Failed to update ${S}`;
      } finally {
        d.value = null;
      }
    }
    function k() {
      c.value = null, a("revalidate");
    }
    function C() {
      a("revalidate");
    }
    return (S, $) => (o(), i(B, null, [
      b(Mt, {
        size: "lg",
        "overlay-z-index": 10007,
        onClose: $[1] || ($[1] = (I) => a("close"))
      }, {
        header: h(() => [...$[3] || ($[3] = [
          s("div", { class: "readiness-heading" }, [
            s("h3", { class: "readiness-title" }, "Review Reproducibility Issues"),
            s("p", { class: "readiness-subtitle" }, " Add missing source details where possible. Required development nodes can also be marked optional when they should stay local but not be part of portable builds. ")
          ], -1)
        ])]),
        body: h(() => [
          s("div", hh, [
            v.value.length ? (o(), i("section", yh, [
              s("div", wh, [
                $[4] || ($[4] = s("h4", null, "Models Missing Source URLs", -1)),
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
                $[5] || ($[5] = s("h4", null, "Custom Nodes Missing Portable Provenance", -1)),
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
            onClick: $[0] || ($[0] = (I) => a("close"))
          }, " Done ")
        ]),
        _: 1
      }),
      c.value ? (o(), R(mc, {
        key: 0,
        model: c.value,
        "overlay-z-index": 10008,
        onClose: $[2] || ($[2] = (I) => c.value = null),
        onSaved: k,
        onHashesComputed: C
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
    const k = n, C = _(!1), S = _(!1);
    function $() {
      S.value = !0, k("repair-environment");
    }
    function I() {
      S.value = !1;
    }
    function E() {
      l.value = !1;
    }
    const M = P(() => {
      const ee = a.status.workflows.analyzed || [], j = ee.filter(
        (he) => he.unresolved_models_count > 0 || he.ambiguous_models_count > 0
      );
      return j.length === 0 && a.status.missing_models_count > 0 ? ee.filter((he) => he.sync_state === "synced") : j;
    });
    function D() {
      const ee = M.value;
      ee.length !== 0 && (C.value = !0, k("repair-missing-models", ee.map((j) => j.name)));
    }
    function O() {
      C.value = !1;
    }
    t({ resetRepairingState: O, resetRepairingEnvironmentState: I, closeDetailModal: E });
    const F = P(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), N = P(() => a.status.has_changes), q = P(() => {
      const ee = a.status.git_changes;
      return ee.nodes_added.length > 0 || ee.nodes_removed.length > 0 || ee.workflow_changes;
    }), ce = P(() => a.status.has_changes || F.value), de = P(() => {
      var ee;
      return ((ee = u.value) == null ? void 0 : ee.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), Q = P(
      () => de.value.models_without_sources.length
    ), te = P(
      () => de.value.nodes_without_provenance.length
    ), W = P(
      () => Q.value + te.value
    ), A = P(
      () => W.value > 0
    ), V = P(() => {
      const ee = [];
      if (Q.value > 0 && ee.push(`${Q.value} model${Q.value === 1 ? "" : "s"} missing download source`), te.value > 0) {
        const j = de.value.nodes_without_provenance.filter((_e) => _e.criticality === "optional").length, he = te.value - j;
        he > 0 && ee.push(`${he} required node${he === 1 ? "" : "s"} missing portable source`), j > 0 && ee.push(`${j} optional node${j === 1 ? "" : "s"} missing portable source`);
      }
      return ee;
    });
    async function ve() {
      f.value = !0, d.value = null;
      try {
        u.value = await v();
      } catch (ee) {
        d.value = ee instanceof Error ? ee.message : "Failed to check readiness";
      } finally {
        f.value = !1;
      }
    }
    async function se() {
      await ve();
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
        a.setupState === "managed" && ve();
      },
      { immediate: !0 }
    );
    const fe = P(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), ne = P(() => a.status.git_changes.has_other_changes), K = P(() => {
      var ee;
      return ((ee = a.status.workflows.analyzed) == null ? void 0 : ee.filter((j) => j.status === "broken")) || [];
    }), oe = P(() => {
      var ee;
      return ((ee = a.status.workflows.analyzed) == null ? void 0 : ee.filter(
        (j) => j.has_path_sync_issues && !j.has_issues
      )) || [];
    }), ae = P(() => K.value.length > 0);
    function Me(ee) {
      const j = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const he of j) {
        const _e = ee.match(he);
        if (_e != null && _e[1])
          return _e[1];
      }
      return null;
    }
    function pe(ee) {
      const j = ee.map(Me).filter((he) => !!he);
      return [...new Set(j)];
    }
    function ze(ee) {
      if (ee.length === 0) return "";
      if (ee.length === 1) return ` (>= ${ee[0]})`;
      const j = ee.slice(0, 2).map((_e) => `>= ${_e}`).join(", "), he = ee.length > 2;
      return ` (${j}${he ? ", ..." : ""})`;
    }
    function Le(ee) {
      return ee.replace(/uninstallable node mappings?/gi, (j) => j.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function ke(ee) {
      const j = Le(ee.issue_summary || "Has issues"), he = /(?:>=|v?\d+\.\d+)/i.test(j), _e = pe(ee.version_gated_guidance || []);
      return (ee.nodes_version_gated_count || 0) > 0 && _e.length > 0 && !he ? `${ee.name} — ${j} (needs ComfyUI ${_e.map((Ke) => `>= ${Ke}`).join(", ")})` : `${ee.name} — ${j}`;
    }
    const De = P(() => K.value.reduce(
      (ee, j) => ee + (j.nodes_version_gated_count || 0),
      0
    )), ge = P(() => {
      const ee = K.value.flatMap(
        (j) => pe(j.version_gated_guidance || [])
      );
      return [...new Set(ee)];
    }), we = P(() => K.value.reduce(
      (ee, j) => ee + (j.nodes_uninstallable_count || 0),
      0
    )), T = P(() => {
      const ee = [];
      return De.value > 0 && ee.push(
        `${De.value} require newer ComfyUI${ze(ge.value)}`
      ), we.value > 0 && ee.push(`${we.value} need community packages`), ee.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${ee.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), U = P(() => ae.value || oe.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), ie = P(() => U.value || A.value || !!d.value), Ie = P(() => {
      const ee = [];
      return a.status.workflows.new.length > 0 && ee.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && ee.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && ee.push(`${a.status.workflows.deleted.length} deleted`), ee.length > 0 ? `${ee.join(", ")} workflow${ee.length === 1 && !ee[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Ce = P(() => {
      var he, _e;
      const ee = [], j = a.status.comparison;
      return (he = j.missing_nodes) != null && he.length && ee.push(`${j.missing_nodes.length} missing node${j.missing_nodes.length === 1 ? "" : "s"}`), (_e = j.extra_nodes) != null && _e.length && ee.push(`${j.extra_nodes.length} untracked node${j.extra_nodes.length === 1 ? "" : "s"}`), ee.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${ee.join(" and ")}.`;
    }), be = P(() => {
      var he, _e;
      const ee = [], j = a.status.comparison;
      return (he = j.extra_nodes) != null && he.length && (j.extra_nodes.slice(0, 3).forEach((Ke) => {
        ee.push(`Untracked: ${Ke}`);
      }), j.extra_nodes.length > 3 && ee.push(`...and ${j.extra_nodes.length - 3} more untracked`)), (_e = j.missing_nodes) != null && _e.length && (j.missing_nodes.slice(0, 3).forEach((Ke) => {
        ee.push(`Missing: ${Ke}`);
      }), j.missing_nodes.length > 3 && ee.push(`...and ${j.missing_nodes.length - 3} more missing`)), ee;
    });
    return (ee, j) => (o(), i(B, null, [
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
                onClick: j[0] || (j[0] = (he) => ee.$emit("start-setup"))
              }, {
                default: h(() => [...j[15] || (j[15] = [
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
                onClick: j[1] || (j[1] = (he) => ee.$emit("view-environments"))
              }, {
                default: h(() => [...j[16] || (j[16] = [
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
                onClick: j[2] || (j[2] = (he) => ee.$emit("create-environment"))
              }, {
                default: h(() => [...j[17] || (j[17] = [
                  x(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", {
            class: "health-section-wrapper",
            onMouseenter: j[4] || (j[4] = (he) => r.value = !0),
            onMouseleave: j[5] || (j[5] = (he) => r.value = !1)
          }, [
            s("div", Fh, [
              b(gs, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...j[18] || (j[18] = [
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
                    default: h(() => [...j[19] || (j[19] = [
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
                  separator: F.value
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
                  count: fe.value,
                  label: fe.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                ne.value ? (o(), R(Ps, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                N.value && !q.value && !ne.value ? (o(), R(Ps, {
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
              ce.value ? {
                name: "footer",
                fn: h(() => [
                  j[21] || (j[21] = s("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  s("div", Vh, [
                    s("span", Bh, m(Ie.value), 1),
                    b(Pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: j[3] || (j[3] = (he) => ee.$emit("commit-changes"))
                    }, {
                      default: h(() => [...j[20] || (j[20] = [
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
                onClick: j[6] || (j[6] = (he) => ee.$emit("create-branch"))
              }, {
                default: h(() => [...j[22] || (j[22] = [
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
              default: h(() => [...j[23] || (j[23] = [
                x(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ie.value ? (o(), i(B, { key: 0 }, [
              K.value.length > 0 ? (o(), R(us, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${K.value.length} workflow${K.value.length === 1 ? "" : "s"} can't run`,
                description: T.value,
                items: K.value.map(ke)
              }, {
                actions: h(() => [
                  b(Pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: j[7] || (j[7] = (he) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...j[24] || (j[24] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : y("", !0),
              oe.value.length > 0 ? (o(), R(us, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${oe.value.length} workflow${oe.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: oe.value.map((he) => `${he.name} — ${he.models_needing_path_sync_count} model path${he.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  b(Pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: j[8] || (j[8] = (he) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...j[25] || (j[25] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !ae.value ? (o(), R(us, {
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
                    disabled: C.value,
                    onClick: D
                  }, {
                    default: h(() => [
                      x(m(C.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  b(Pe, {
                    variant: "secondary",
                    size: "sm",
                    onClick: j[9] || (j[9] = (he) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...j[26] || (j[26] = [
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
                    default: h(() => [...j[27] || (j[27] = [
                      x(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  b(Pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: j[10] || (j[10] = (he) => ee.$emit("view-nodes"))
                  }, {
                    default: h(() => [...j[28] || (j[28] = [
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
                    onClick: j[11] || (j[11] = (he) => ee.$emit("view-nodes"))
                  }, {
                    default: h(() => [...j[29] || (j[29] = [
                      x(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0),
              A.value ? (o(), R(us, {
                key: 5,
                severity: "warning",
                icon: "!",
                title: "Environment reproducibility needs attention",
                description: "Some dependencies are missing source details needed to rebuild this environment elsewhere.",
                items: V.value
              }, {
                actions: h(() => [
                  b(Pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: j[12] || (j[12] = (he) => c.value = !0)
                  }, {
                    default: h(() => [...j[30] || (j[30] = [
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
                    onClick: ve
                  }, {
                    default: h(() => [...j[31] || (j[31] = [
                      x(" Retry ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }, 8, ["description"])) : y("", !0)
            ], 64)) : ce.value ? (o(), i("span", Gh, "No issues")) : (o(), i("span", jh, "No runtime issues detected"))
          ])
        ]),
        _: 1
      }),
      b(Hv, {
        show: l.value,
        status: e.status,
        "is-repairing": S.value,
        onClose: j[13] || (j[13] = (he) => l.value = !1),
        onNavigateWorkflows: w,
        onNavigateNodes: g,
        onRepair: $
      }, null, 8, ["show", "status", "is-repairing"]),
      c.value && u.value ? (o(), R(Ml, {
        key: 0,
        warnings: u.value.warnings,
        onClose: j[14] || (j[14] = (he) => c.value = !1),
        onRevalidate: se
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
    const n = e, a = t, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c, queueNodeInstall: u } = mt(), d = _(null), f = _(!1), v = _(null), p = _(!1), w = _({}), g = _(!1), k = _(/* @__PURE__ */ new Set()), C = _(/* @__PURE__ */ new Set()), S = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function $(W) {
      switch (W) {
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
    function I(W) {
      switch (W) {
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
    function E(W) {
      switch (W) {
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
    function M(W) {
      switch (W) {
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
    function D(W) {
      switch (W) {
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
    function O(W) {
      if (!W.loaded_by || W.loaded_by.length === 0) return [];
      const A = W.hash || W.filename;
      return k.value.has(A) ? W.loaded_by : W.loaded_by.slice(0, 3);
    }
    function F(W) {
      return k.value.has(W);
    }
    function N(W) {
      k.value.has(W) ? k.value.delete(W) : k.value.add(W), k.value = new Set(k.value);
    }
    async function q() {
      f.value = !0, v.value = null;
      try {
        d.value = await l(n.workflowName);
      } catch (W) {
        v.value = W instanceof Error ? W.message : "Failed to load workflow details";
      } finally {
        f.value = !1;
      }
    }
    function ce(W, A) {
      w.value[W] = A, p.value = !0;
    }
    async function de(W) {
      try {
        await c(W);
      } catch (A) {
        v.value = A instanceof Error ? A.message : "Failed to open file location";
      }
    }
    async function Q(W) {
      if (W.package_id)
        try {
          const A = W.latest_version || "latest";
          await u({
            id: W.package_id,
            version: A,
            selected_version: A,
            mode: "remote",
            channel: "default"
          }), C.value.add(W.package_id);
        } catch (A) {
          v.value = A instanceof Error ? A.message : "Failed to queue node install";
        }
    }
    async function te() {
      if (!p.value) {
        a("close");
        return;
      }
      f.value = !0, v.value = null;
      try {
        for (const [W, A] of Object.entries(w.value))
          await r(n.workflowName, W, A);
        a("refresh"), a("close");
      } catch (W) {
        v.value = W instanceof Error ? W.message : "Failed to save changes";
      } finally {
        f.value = !1;
      }
    }
    return ut(q), (W, A) => (o(), i(B, null, [
      b(Mt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: f.value,
        error: v.value || void 0,
        onClose: A[5] || (A[5] = (V) => a("close"))
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
              (o(!0), i(B, null, ye(d.value.models, (V) => {
                var ve;
                return o(), i("div", {
                  key: V.hash || V.filename,
                  class: "model-card"
                }, [
                  s("div", cy, [
                    A[7] || (A[7] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", uy, m(V.filename), 1)
                  ]),
                  s("div", dy, [
                    s("div", my, [
                      A[8] || (A[8] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: Be(["value", $(V.status)])
                      }, m(I(V.status)), 3)
                    ]),
                    s("div", fy, [
                      s("span", vy, [
                        A[9] || (A[9] = x(" Importance: ", -1)),
                        b(ic, {
                          size: 14,
                          title: "About importance levels",
                          onClick: A[0] || (A[0] = (se) => g.value = !0)
                        })
                      ]),
                      b(Qo, {
                        "model-value": w.value[V.filename] || V.importance,
                        options: S,
                        "onUpdate:modelValue": (se) => ce(V.filename, se)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    V.loaded_by && V.loaded_by.length > 0 ? (o(), i("div", py, [
                      A[10] || (A[10] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", gy, [
                        (o(!0), i(B, null, ye(O(V), (se, fe) => (o(), i("div", {
                          key: `${se.node_id}-${fe}`,
                          class: "node-reference"
                        }, m(se.node_type) + " (Node #" + m(se.node_id) + ") ", 1))), 128)),
                        V.loaded_by.length > 3 ? (o(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (se) => N(V.hash || V.filename)
                        }, m(F(V.hash || V.filename) ? "▼ Show less" : `▶ View all (${V.loaded_by.length})`), 9, hy)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    V.size_mb ? (o(), i("div", yy, [
                      A[11] || (A[11] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", wy, m(V.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    V.has_category_mismatch ? (o(), i("div", _y, [
                      A[14] || (A[14] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", ky, [
                        A[12] || (A[12] = x(" In ", -1)),
                        s("code", null, m(V.actual_category) + "/", 1),
                        A[13] || (A[13] = x(" but loader needs ", -1)),
                        s("code", null, m((ve = V.expected_categories) == null ? void 0 : ve[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  V.status !== "available" ? (o(), i("div", by, [
                    V.status === "downloadable" ? (o(), R(Ue, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: A[1] || (A[1] = (se) => a("resolve"))
                    }, {
                      default: h(() => [...A[15] || (A[15] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    })) : V.status === "category_mismatch" && V.file_path ? (o(), R(Ue, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => de(V.file_path)
                    }, {
                      default: h(() => [...A[16] || (A[16] = [
                        x(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : V.status !== "path_mismatch" ? (o(), R(Ue, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: A[2] || (A[2] = (se) => a("resolve"))
                    }, {
                      default: h(() => [...A[17] || (A[17] = [
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
              (o(!0), i(B, null, ye(d.value.nodes, (V, ve) => (o(), i("div", {
                key: `${V.name}-${V.status}-${ve}`,
                class: "node-item"
              }, [
                s("span", {
                  class: Be(["node-status", E(V.status)])
                }, m(M(V.status)), 3),
                s("div", xy, [
                  s("div", Sy, [
                    s("span", Iy, m(V.name), 1),
                    s("span", Ey, m(D(V.status)), 1),
                    V.version ? (o(), i("span", Ty, "v" + m(V.version), 1)) : y("", !0),
                    V.status === "uninstallable" && V.package_id && !C.value.has(V.package_id) ? (o(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (se) => Q(V)
                    }, " Install ", 8, My)) : V.status === "uninstallable" && V.package_id && C.value.has(V.package_id) ? (o(), i("span", Py, " Queued ")) : y("", !0)
                  ]),
                  V.guidance ? (o(), i("div", Ry, m(V.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          s("div", Dy, [
            b(Ue, {
              variant: "secondary",
              onClick: A[3] || (A[3] = (V) => a("resolve"))
            }, {
              default: h(() => [...A[18] || (A[18] = [
                x(" Review Resolution ", -1)
              ])]),
              _: 1
            }),
            s("div", Ny, [
              b(Ue, {
                variant: "secondary",
                onClick: A[4] || (A[4] = (V) => a("close"))
              }, {
                default: h(() => [...A[19] || (A[19] = [
                  x(" Close ", -1)
                ])]),
                _: 1
              }),
              p.value ? (o(), R(Ue, {
                key: 0,
                variant: "primary",
                onClick: te
              }, {
                default: h(() => [...A[20] || (A[20] = [
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
        onClose: A[6] || (A[6] = (V) => g.value = !1)
      }, {
        content: h(() => [...A[21] || (A[21] = [
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
            const k = u, C = (k - r) / 1e3, S = e.downloaded - c;
            if (S > 0 && C > 0)
              if (e.speed = S / C, r = k, c = e.downloaded, e.speed > 0 && e.size > 0) {
                const $ = e.size - e.downloaded;
                e.eta = $ / e.speed;
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
    for (const $ of S) {
      if (vt.items.some(
        (M) => M.url === $.url && M.targetPath === $.targetPath && ["queued", "downloading", "paused", "completed"].includes(M.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${$.filename}`);
        continue;
      }
      const E = {
        id: fc(),
        workflow: $.workflow,
        filename: $.filename,
        url: $.url,
        targetPath: $.targetPath,
        size: $.size || 0,
        type: $.type || "model",
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
    const $ = ja(S);
    if ($) {
      if ($.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent($.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Ls && (Ls.close(), Ls = null), $.status = "failed", $.error = "Cancelled by user", vt.status = "idle", Tn();
      } else if ($.status === "queued") {
        const I = vt.items.findIndex((E) => E.id === S);
        I >= 0 && vt.items.splice(I, 1);
      }
    }
  }
  function n(S) {
    const $ = ja(S);
    !$ || $.status !== "failed" || ($.status = "queued", $.error = void 0, $.progress = 0, $.downloaded = 0, vt.status === "idle" && Tn());
  }
  function a(S) {
    const $ = ja(S);
    !$ || $.status !== "paused" || ($.status = "queued", vt.status === "idle" && Tn());
  }
  function l() {
    const S = vt.items.filter(($) => $.status === "paused");
    for (const $ of S)
      $.status = "queued";
    vt.status === "idle" && Tn();
  }
  function r(S) {
    const $ = vt.items.findIndex((I) => I.id === S);
    $ >= 0 && ["completed", "failed", "paused"].includes(vt.items[$].status) && vt.items.splice($, 1);
  }
  function c() {
    vt.items = vt.items.filter((S) => S.status !== "completed");
  }
  function u() {
    vt.items = vt.items.filter((S) => S.status !== "failed");
  }
  const d = P(
    () => vt.items.find((S) => S.status === "downloading")
  ), f = P(
    () => vt.items.filter((S) => S.status === "queued")
  ), v = P(
    () => vt.items.filter((S) => S.status === "completed")
  ), p = P(
    () => vt.items.filter((S) => S.status === "failed")
  ), w = P(
    () => vt.items.filter((S) => S.status === "paused")
  ), g = P(() => vt.items.length > 0), k = P(
    () => vt.items.filter((S) => S.status === "queued" || S.status === "downloading").length
  ), C = P(
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
    hasPaused: C,
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
    const M = await qs(I, E);
    if (!M.ok) {
      const D = await M.json().catch(() => ({})), O = D.error || D.message || `Request failed: ${M.status}`;
      throw new Error(O);
    }
    return M.json();
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
      const M = E instanceof Error ? E.message : "Unknown error occurred";
      throw r.value = M, E;
    } finally {
      l.value = !1;
    }
  }
  async function d(I, E, M, D) {
    l.value = !0, r.value = null;
    try {
      let O;
      if (!Xn()) {
        const F = Object.fromEntries(E), N = Object.fromEntries(M), q = D ? Array.from(D) : [];
        O = await c(
          `/v2/comfygit/workflow/${I}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: F,
              model_choices: N,
              skipped_packages: q
            })
          }
        );
      }
      return t.value = O, O;
    } catch (O) {
      const F = O instanceof Error ? O.message : "Unknown error occurred";
      throw r.value = F, O;
    } finally {
      l.value = !1;
    }
  }
  async function f(I, E = 10) {
    l.value = !0, r.value = null;
    try {
      let M;
      return Xn() || (M = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: I, limit: E })
        }
      )), n.value = M.results, M.results;
    } catch (M) {
      const D = M instanceof Error ? M.message : "Unknown error occurred";
      throw r.value = D, M;
    } finally {
      l.value = !1;
    }
  }
  async function v(I, E = 10) {
    l.value = !0, r.value = null;
    try {
      let M;
      return Xn() || (M = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: I, limit: E })
        }
      )), a.value = M.results, M.results;
    } catch (M) {
      const D = M instanceof Error ? M.message : "Unknown error occurred";
      throw r.value = D, M;
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
    nodesMapped: []
  });
  function w() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.nodesInstalled = [], p.nodesMarkedOptional = [], p.nodesMapped = [], p.dependencyReviews = [], p.installError = void 0, p.needsRestart = void 0, p.error = void 0, p.nodeInstallProgress = void 0;
  }
  async function g(I) {
    p.phase = "installing", p.nodesInstalled = [], p.installError = void 0, p.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Xn(), await k(I);
    } catch (E) {
      const M = E instanceof Error ? E.message : "Failed to install nodes";
      throw p.installError = M, E;
    }
  }
  async function k(I) {
    var D, O, F;
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
      const N = new Map(((D = E.failed) == null ? void 0 : D.map((ce) => [ce.node_id, ce.error])) || []), q = new Map((E.dependency_review_required || []).map((ce) => [ce.node_id, ce]));
      for (let ce = 0; ce < p.nodesToInstall.length; ce++) {
        const de = p.nodesToInstall[ce], Q = N.get(de), te = q.get(de);
        p.nodeInstallProgress.completedNodes.push({
          node_id: de,
          success: !Q && !te,
          error: Q || (te == null ? void 0 : te.error),
          dependency_review: te == null ? void 0 : te.dependency_review
        });
      }
    }
    p.nodesInstalled = E.nodes_installed, p.dependencyReviews = E.dependency_review_required || [], p.needsRestart = E.nodes_installed.length > 0;
    const M = (((O = E.failed) == null ? void 0 : O.length) || 0) + (((F = E.dependency_review_required) == null ? void 0 : F.length) || 0);
    return M > 0 && (p.installError = `${M} package(s) need attention`), E;
  }
  async function C(I, E, M) {
    w(), p.phase = "resolving", r.value = null;
    const D = Object.fromEntries(E), O = Object.fromEntries(M);
    try {
      const F = await fetch(`/v2/comfygit/workflow/${I}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: D,
          model_choices: O
        })
      });
      if (!F.ok)
        throw new Error(`Request failed: ${F.status}`);
      if (!F.body)
        throw new Error("No response body");
      const N = F.body.getReader(), q = new TextDecoder();
      let ce = "";
      for (; ; ) {
        const { done: de, value: Q } = await N.read();
        if (de) break;
        ce += q.decode(Q, { stream: !0 });
        const te = ce.split(`

`);
        ce = te.pop() || "";
        for (const W of te) {
          if (!W.trim()) continue;
          const A = W.split(`
`);
          let V = "", ve = "";
          for (const se of A)
            se.startsWith("event: ") ? V = se.slice(7) : se.startsWith("data: ") && (ve = se.slice(6));
          if (ve)
            try {
              const se = JSON.parse(ve);
              S(V, se);
            } catch (se) {
              console.warn("Failed to parse SSE event:", se);
            }
        }
      }
    } catch (F) {
      const N = F instanceof Error ? F.message : "Unknown error occurred";
      throw r.value = N, p.error = N, p.phase = "error", F;
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
        p.nodesToInstall = E.nodes_to_install || [], p.nodesMarkedOptional = E.nodes_marked_optional || [], p.nodesMapped = E.nodes_mapped || [], E.download_results && (p.completedFiles = E.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = E.message, p.phase = "error", r.value = E.message;
        break;
    }
  }
  function $(I, E) {
    const { addToQueue: M } = qn(), D = E.filter((O) => O.url && O.target_path).map((O) => ({
      workflow: I,
      filename: O.filename,
      url: O.url,
      targetPath: O.target_path,
      size: O.size || 0,
      type: "model"
    }));
    return D.length > 0 && M(D), D.length;
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
    applyResolutionWithProgress: C,
    installNodes: g,
    searchNodes: f,
    searchModels: v,
    resetProgress: w,
    queueModelDownloads: $
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
    const n = e, a = t, l = P(() => !!n.choice), r = P(() => {
      var v;
      return (v = n.choice) == null ? void 0 : v.action;
    }), c = P(() => {
      var v;
      return (v = n.choice) == null ? void 0 : v.package_id;
    }), u = P(() => n.installedNodePacks || []), d = P(() => {
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
      w.value && de(), w.value = !1;
    }
    const k = P(() => n.nodes[r.value]), C = P(() => n.nodes.filter((K) => n.nodeChoices.has(K.node_type)).length), S = P(() => n.autoResolvedPackages.filter((K) => !n.skippedPackages.has(K.package_id)).length);
    function $(K) {
      return n.skippedPackages.has(K);
    }
    function I(K) {
      a("package-skip", K);
    }
    function E(K) {
      K >= 0 && K < n.nodes.length && (r.value = K);
    }
    function M() {
      var K;
      for (let oe = r.value + 1; oe < n.nodes.length; oe++) {
        const ae = n.nodes[oe];
        if (!((K = n.nodeChoices) != null && K.has(ae.node_type))) {
          E(oe);
          return;
        }
      }
    }
    function D() {
      k.value && (a("mark-optional", k.value.node_type), Gt(() => M()));
    }
    function O() {
      k.value && (a("skip", k.value.node_type), Gt(() => M()));
    }
    function F() {
      k.value && a("clear-choice", k.value.node_type);
    }
    function N() {
      k.value && (d.value = k.value.node_type, v.value = [], c.value = !0, A(d.value));
    }
    function q() {
      f.value = "", u.value = !0;
    }
    function ce(K) {
      k.value && (a("installed-pack-selected", k.value.node_type, K), Gt(() => M()));
    }
    function de() {
      c.value = !1, d.value = "", v.value = [];
    }
    function Q() {
      u.value = !1, f.value = "";
    }
    let te = null;
    function W() {
      te && clearTimeout(te), te = setTimeout(() => {
        A(d.value);
      }, 300);
    }
    async function A(K) {
      if (!K.trim()) {
        v.value = [];
        return;
      }
      p.value = !0;
      try {
        v.value = await l(K, 10);
      } catch {
        v.value = [];
      } finally {
        p.value = !1;
      }
    }
    function V(K) {
      k.value && (a("manual-entry", k.value.node_type, K.package_id, {
        install_source: "registry",
        version: K.registry_version || null
      }), de(), Gt(() => M()));
    }
    function ve(K) {
      !k.value || !K.repository || (a("manual-entry", k.value.node_type, K.package_id, {
        install_source: "git",
        repository: K.repository
      }), de(), Gt(() => M()));
    }
    function se(K) {
      return !!K.github_stars || !!K.downloads;
    }
    function fe(K) {
      return K ? Intl.NumberFormat("en", {
        notation: "compact",
        maximumFractionDigits: K >= 1e3 ? 1 : 0
      }).format(K) : "";
    }
    function ne() {
      !k.value || !f.value.trim() || (a("manual-entry", k.value.node_type, f.value.trim()), Q(), Gt(() => M()));
    }
    return (K, oe) => {
      var ae, Me;
      return o(), i("div", g1, [
        e.autoResolvedPackages.length > 0 ? (o(), i("div", h1, [
          s("div", y1, [
            oe[6] || (oe[6] = s("div", { class: "section-info" }, [
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
                $(pe.package_id) ? (o(), i("span", S1, " SKIPPED ")) : (o(), i("span", x1, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (ze) => I(pe.package_id)
                }, m($(pe.package_id) ? "Include" : "Skip"), 9, I1)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (o(), i("div", E1)) : y("", !0),
        e.nodes.length > 0 ? (o(), i(B, { key: 2 }, [
          s("div", T1, [
            oe[7] || (oe[7] = s("div", { class: "step-info" }, [
              s("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              s("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            s("span", M1, m(C.value) + "/" + m(e.nodes.length) + " resolved", 1)
          ]),
          k.value ? (o(), R(pc, {
            key: 0,
            "item-name": k.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: oe[0] || (oe[0] = (pe) => E(r.value - 1)),
            onNext: oe[1] || (oe[1] = (pe) => E(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          k.value ? (o(), i("div", P1, [
            b(l1, {
              "node-type": k.value.node_type,
              "has-multiple-options": !!((ae = k.value.options) != null && ae.length),
              choice: (Me = e.nodeChoices) == null ? void 0 : Me.get(k.value.node_type),
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: D,
              onSkip: O,
              onManualEntry: q,
              onSearch: N,
              onClearChoice: F,
              onInstalledPackSelected: ce
            }, null, 8, ["node-type", "has-multiple-options", "choice", "installed-node-packs"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (o(), i("div", R1, [...oe[8] || (oe[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (o(), R(as, { to: "body" }, [
          c.value ? (o(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: oe[4] || (oe[4] = bt((pe) => w.value = !0, ["self"])),
            onMouseup: bt(g, ["self"])
          }, [
            s("div", {
              class: "node-search-modal",
              onMousedown: oe[3] || (oe[3] = (pe) => w.value = !1)
            }, [
              s("div", { class: "node-modal-header" }, [
                oe[9] || (oe[9] = s("h4", null, "Search Node Registry", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: de
                }, "✕")
              ]),
              s("div", D1, [
                b(Rt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": oe[2] || (oe[2] = (pe) => d.value = pe),
                  placeholder: "Search registry by node type or package name...",
                  onInput: W
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
                        se(pe) ? (o(), i("div", F1, [
                          pe.github_stars ? (o(), i("span", V1, " ★ " + m(fe(pe.github_stars)), 1)) : y("", !0),
                          pe.downloads ? (o(), i("span", B1, " ↓ " + m(fe(pe.downloads)), 1)) : y("", !0)
                        ])) : y("", !0)
                      ]),
                      pe.description ? (o(), i("div", W1, m(pe.description), 1)) : y("", !0),
                      s("div", G1, [
                        pe.can_install_registry ? (o(), i("button", {
                          key: 0,
                          type: "button",
                          class: "node-result-action",
                          onClick: (ze) => V(pe)
                        }, " Install from Registry ", 8, j1)) : y("", !0),
                        pe.can_install_git ? (o(), i("button", {
                          key: 1,
                          type: "button",
                          class: "node-result-action secondary",
                          onClick: (ze) => ve(pe)
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
                oe[10] || (oe[10] = s("h4", null, "Enter Package Manually", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: Q
                }, "✕")
              ]),
              s("div", Y1, [
                b(Rt, {
                  modelValue: f.value,
                  "onUpdate:modelValue": oe[5] || (oe[5] = (pe) => f.value = pe),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", X1, [
                  b(Ue, {
                    variant: "secondary",
                    onClick: Q
                  }, {
                    default: h(() => [...oe[11] || (oe[11] = [
                      x("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(Ue, {
                    variant: "primary",
                    disabled: !f.value.trim(),
                    onClick: ne
                  }, {
                    default: h(() => [...oe[12] || (oe[12] = [
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
    const t = e, n = P(() => t.confidence >= 0.9 ? "high" : t.confidence >= 0.7 ? "medium" : "low"), a = P(() => `confidence-${n.value}`), l = P(() => t.showPercentage ? `${Math.round(t.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
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
    const n = e, a = t, l = P(() => !!n.choice);
    P(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), P(() => {
      var d, f;
      return ((f = (d = n.choice) == null ? void 0 : d.selected_model) == null ? void 0 : f.filename) || "selected";
    });
    const r = P(() => {
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
    function a(se) {
      var fe;
      return se && ((fe = n[se]) == null ? void 0 : fe[0]) || null;
    }
    const l = e, r = t, c = _(0), u = _(!1), d = _(!1), f = _(""), v = _(""), p = _(""), w = _([]), g = _(!1), k = P(() => l.models[c.value]), C = P(() => l.models.some((se) => se.is_download_intent)), S = P(() => l.models.filter(
      (se) => l.modelChoices.has(se.filename) || se.is_download_intent
    ).length), $ = P(() => {
      var fe;
      if (!k.value) return "";
      const se = a((fe = k.value.reference) == null ? void 0 : fe.node_type);
      return se ? `${se}/${k.value.filename}` : "";
    }), I = P(() => {
      var fe;
      if (!k.value) return "not-found";
      const se = l.modelChoices.get(k.value.filename);
      if (se)
        switch (se.action) {
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
      return k.value.is_download_intent ? "download" : (fe = k.value.options) != null && fe.length ? "ambiguous" : "not-found";
    }), E = P(() => {
      var fe, ne;
      if (!k.value) return;
      const se = l.modelChoices.get(k.value.filename);
      if (se)
        switch (se.action) {
          case "select":
            return (fe = se.selected_model) != null && fe.filename ? `→ ${se.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return k.value.is_download_intent ? "Pending Download" : (ne = k.value.options) != null && ne.length ? `${k.value.options.length} matches` : "Not Found";
    });
    function M(se) {
      se >= 0 && se < l.models.length && (c.value = se);
    }
    function D() {
      var se;
      for (let fe = c.value + 1; fe < l.models.length; fe++) {
        const ne = l.models[fe];
        if (!ne.is_download_intent && !((se = l.modelChoices) != null && se.has(ne.filename))) {
          M(fe);
          return;
        }
      }
    }
    function O() {
      k.value && (r("mark-optional", k.value.filename), Gt(() => D()));
    }
    function F() {
      k.value && (r("skip", k.value.filename), Gt(() => D()));
    }
    function N(se) {
      k.value && (r("option-selected", k.value.filename, se), Gt(() => D()));
    }
    function q() {
      k.value && r("clear-choice", k.value.filename);
    }
    function ce() {
      k.value && (f.value = k.value.filename, u.value = !0);
    }
    function de() {
      k.value && (v.value = k.value.download_source || "", p.value = k.value.target_path || $.value, d.value = !0);
    }
    function Q() {
      u.value = !1, f.value = "", w.value = [];
    }
    function te() {
      d.value = !1, v.value = "", p.value = "";
    }
    function W() {
      g.value = !0, setTimeout(() => {
        g.value = !1;
      }, 300);
    }
    function A(se) {
      k.value && (Q(), Gt(() => D()));
    }
    function V() {
      !k.value || !v.value.trim() || (r("download-url", k.value.filename, v.value.trim(), p.value.trim() || void 0), te(), Gt(() => D()));
    }
    function ve(se) {
      if (!se) return "Unknown";
      const fe = se / (1024 * 1024 * 1024);
      return fe >= 1 ? `${fe.toFixed(2)} GB` : `${(se / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (se, fe) => {
      var ne, K, oe;
      return o(), i("div", $w, [
        s("div", Cw, [
          s("div", xw, [
            s("h3", Sw, m(C.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            s("p", Iw, m(C.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          s("span", Ew, m(S.value) + "/" + m(e.models.length) + " resolved", 1)
        ]),
        k.value ? (o(), R(pc, {
          key: 0,
          "item-name": k.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: fe[0] || (fe[0] = (ae) => M(c.value - 1)),
          onNext: fe[1] || (fe[1] = (ae) => M(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        k.value ? (o(), i("div", Tw, [
          b(bw, {
            filename: k.value.filename,
            "node-type": ((ne = k.value.reference) == null ? void 0 : ne.node_type) || "Unknown",
            "has-multiple-options": !!((K = k.value.options) != null && K.length),
            options: k.value.options,
            choice: (oe = e.modelChoices) == null ? void 0 : oe.get(k.value.filename),
            status: I.value,
            "status-label": E.value,
            onMarkOptional: O,
            onSkip: F,
            onDownloadUrl: de,
            onSearch: ce,
            onOptionSelected: N,
            onClearChoice: q
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), i("div", Mw, [...fe[5] || (fe[5] = [
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
                fe[6] || (fe[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: Q
                }, "✕")
              ]),
              s("div", Rw, [
                b(Rt, {
                  modelValue: f.value,
                  "onUpdate:modelValue": fe[2] || (fe[2] = (ae) => f.value = ae),
                  placeholder: "Search by filename, category...",
                  onInput: W
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (o(), i("div", Dw, [
                  (o(!0), i(B, null, ye(w.value, (ae) => (o(), i("div", {
                    key: ae.hash,
                    class: "model-search-result-item",
                    onClick: (Me) => A()
                  }, [
                    s("div", Lw, [
                      s("code", Uw, m(ae.filename), 1)
                    ]),
                    s("div", Ow, [
                      s("span", Aw, m(ae.category), 1),
                      s("span", zw, m(ve(ae.size)), 1)
                    ]),
                    ae.relative_path ? (o(), i("div", Fw, m(ae.relative_path), 1)) : y("", !0)
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
            onClick: bt(te, ["self"])
          }, [
            s("div", Ww, [
              s("div", { class: "model-modal-header" }, [
                fe[7] || (fe[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: te
                }, "✕")
              ]),
              s("div", Gw, [
                s("div", jw, [
                  fe[8] || (fe[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  b(Rt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": fe[3] || (fe[3] = (ae) => v.value = ae),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", Hw, [
                  fe[9] || (fe[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  b(Rt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": fe[4] || (fe[4] = (ae) => p.value = ae),
                    placeholder: $.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", qw, [
                  b(Ue, {
                    variant: "secondary",
                    onClick: te
                  }, {
                    default: h(() => [...fe[10] || (fe[10] = [
                      x("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(Ue, {
                    variant: "primary",
                    disabled: !v.value.trim() || !p.value.trim(),
                    onClick: V
                  }, {
                    default: h(() => [...fe[11] || (fe[11] = [
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
    }, r = P(() => {
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
  class: "summary-item error"
}, V0 = { class: "summary-text" }, B0 = {
  key: 5,
  class: "summary-item warning"
}, W0 = { class: "summary-text" }, G0 = {
  key: 6,
  class: "failed-list"
}, j0 = { class: "failed-node-id" }, H0 = { class: "failed-error" }, q0 = {
  key: 7,
  class: "failed-list dependency-review-list"
}, K0 = { class: "failed-node-id" }, J0 = ["onClick"], Q0 = {
  key: 9,
  class: "summary-item success"
}, Y0 = { class: "summary-text" }, X0 = {
  key: 10,
  class: "summary-note"
}, Z0 = {
  key: 11,
  class: "restart-prompt"
}, e_ = {
  key: 3,
  class: "phase-content error"
}, t_ = { class: "error-message" }, s_ = /* @__PURE__ */ Ee({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const t = e, {
      previewNodeDependencyChanges: n,
      applyReviewedNodeDependencyChanges: a
    } = mt(), l = _(/* @__PURE__ */ new Set()), r = P(() => {
      var A, V;
      const te = ((A = t.progress.nodeInstallProgress) == null ? void 0 : A.totalNodes) || t.progress.nodesToInstall.length;
      if (!te) return 0;
      const W = ((V = t.progress.nodeInstallProgress) == null ? void 0 : V.completedNodes.length) ?? 0;
      return Math.round(W / te * 100);
    }), c = P(() => {
      var te;
      return ((te = t.progress.nodeInstallProgress) == null ? void 0 : te.completedNodes.filter((W) => !W.success && !W.dependency_review)) || [];
    });
    function u(te) {
      var W;
      return ((W = te.dependency_review) == null ? void 0 : W.identifier) || te.node_id;
    }
    const d = P(() => {
      var te;
      return ((te = t.progress.nodeInstallProgress) == null ? void 0 : te.completedNodes.filter((W) => W.dependency_review && !l.value.has(u(W)))) || [];
    }), f = P(() => l.value.size), v = P(() => t.progress.needsRestart || f.value > 0), p = P(() => c.value.length > 0 || d.value.length > 0), w = P(() => t.progress.nodesInstalled.length), g = P(() => {
      var te;
      return ((te = t.progress.nodesMarkedOptional) == null ? void 0 : te.length) || 0;
    }), k = P(() => {
      var te;
      return ((te = t.progress.nodesMapped) == null ? void 0 : te.length) || 0;
    }), C = P(() => t.progress.completedFiles.length > 0), S = P(() => w.value > 0 || g.value > 0 || k.value > 0 || C.value || v.value || f.value > 0), $ = P(() => S.value ? "Workflow dependencies resolved" : "No changes applied");
    function I(te, W) {
      var V, ve;
      const A = (V = t.progress.nodeInstallProgress) == null ? void 0 : V.completedNodes.find((se) => se.node_id === te);
      return A ? A.success ? "complete" : "failed" : ((ve = t.progress.nodeInstallProgress) == null ? void 0 : ve.currentIndex) === W ? "installing" : "pending";
    }
    function E(te) {
      var W, A;
      return (A = (W = t.progress.nodeInstallProgress) == null ? void 0 : W.completedNodes.find((V) => V.node_id === te)) == null ? void 0 : A.error;
    }
    const M = _(!1), D = _(!1), O = _(!1), F = _(null), N = _(null), q = _(null);
    async function ce(te) {
      var A;
      const W = u(te);
      q.value = W, M.value = !0, D.value = !0, O.value = !1, F.value = null, N.value = null;
      try {
        if ((A = te.dependency_review) != null && A.preview) {
          N.value = te.dependency_review.preview;
          return;
        }
        const V = await n({ id: W });
        N.value = V.preview, V.preview.success || (F.value = V.preview.error || "Unable to generate dependency preview");
      } catch (V) {
        F.value = V instanceof Error ? V.message : "Unable to generate dependency preview";
      } finally {
        D.value = !1;
      }
    }
    async function de() {
      const te = q.value, W = N.value;
      if (!(!te || !W || O.value)) {
        O.value = !0, F.value = null;
        try {
          const A = await a({
            id: te,
            accepted_preview: {
              baseline_fingerprint: W.baseline_fingerprint,
              diff_fingerprint: W.diff_fingerprint,
              proposed_fingerprint: W.proposed_fingerprint
            }
          });
          if (A.status !== "success")
            throw new Error(A.error || A.message || "Unable to apply dependency changes");
          l.value = /* @__PURE__ */ new Set([
            ...l.value,
            te
          ]), Q();
        } catch (A) {
          F.value = A instanceof Error ? A.message : "Unable to apply dependency changes";
        } finally {
          O.value = !1;
        }
      }
    }
    function Q() {
      M.value = !1, D.value = !1, O.value = !1, F.value = null, N.value = null, q.value = null;
    }
    return (te, W) => {
      var A, V, ve, se, fe;
      return o(), i("div", v0, [
        e.progress.phase === "resolving" ? (o(), i("div", p0, [...W[2] || (W[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (o(), i("div", g0, [
          W[3] || (W[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", h0, " Installing " + m((((A = e.progress.nodeInstallProgress) == null ? void 0 : A.currentIndex) ?? 0) + 1) + " of " + m(((V = e.progress.nodeInstallProgress) == null ? void 0 : V.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", y0, [
            s("div", w0, [
              s("div", {
                class: "progress-fill",
                style: zt({ width: `${r.value}%` })
              }, null, 4)
            ]),
            s("span", _0, m(((ve = e.progress.nodeInstallProgress) == null ? void 0 : ve.completedNodes.length) ?? 0) + " / " + m(((se = e.progress.nodeInstallProgress) == null ? void 0 : se.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", k0, [
            (o(!0), i(B, null, ye(e.progress.nodesToInstall, (ne, K) => (o(), i("div", {
              key: ne,
              class: Be(["install-item", I(ne, K)])
            }, [
              s("span", b0, [
                I(ne, K) === "pending" ? (o(), i("span", $0, "○")) : I(ne, K) === "installing" ? (o(), i("span", C0, "◌")) : I(ne, K) === "complete" ? (o(), i("span", x0, "✓")) : I(ne, K) === "failed" ? (o(), i("span", S0, "✗")) : y("", !0)
              ]),
              s("code", null, m(ne), 1),
              E(ne) ? (o(), i("span", I0, m(E(ne)), 1)) : y("", !0)
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
              W[4] || (W[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", D0, m(e.progress.nodesInstalled.length) + " node package" + m(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            f.value > 0 ? (o(), i("div", N0, [
              W[5] || (W[5] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", L0, m(f.value) + " reviewed package" + m(f.value > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            g.value > 0 ? (o(), i("div", U0, [
              W[6] || (W[6] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", O0, m(g.value) + " node type" + m(g.value > 1 ? "s" : "") + " marked optional", 1)
            ])) : y("", !0),
            k.value > 0 ? (o(), i("div", A0, [
              W[7] || (W[7] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", z0, m(k.value) + " node mapping" + m(k.value > 1 ? "s" : "") + " changed", 1)
            ])) : y("", !0),
            c.value.length > 0 ? (o(), i("div", F0, [
              W[8] || (W[8] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", V0, m(c.value.length) + " package" + m(c.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            d.value.length > 0 ? (o(), i("div", B0, [
              W[9] || (W[9] = s("span", { class: "summary-icon" }, "⚠", -1)),
              s("span", W0, m(d.value.length) + " package" + m(d.value.length > 1 ? "s" : "") + " need dependency review", 1)
            ])) : y("", !0),
            c.value.length > 0 ? (o(), i("div", G0, [
              (o(!0), i(B, null, ye(c.value, (ne) => (o(), i("div", {
                key: ne.node_id,
                class: "failed-item"
              }, [
                s("code", j0, m(ne.node_id), 1),
                s("span", H0, m(ne.error), 1)
              ]))), 128))
            ])) : y("", !0),
            d.value.length > 0 ? (o(), i("div", q0, [
              (o(!0), i(B, null, ye(d.value, (ne) => (o(), i("div", {
                key: ne.node_id,
                class: "failed-item dependency-review-item"
              }, [
                s("code", K0, m(ne.node_id), 1),
                W[10] || (W[10] = s("span", { class: "failed-error" }, "Dependency changes require review before install.", -1)),
                s("button", {
                  class: "review-button",
                  onClick: (K) => ce(ne)
                }, " View Changes ", 8, J0)
              ]))), 128))
            ])) : y("", !0),
            c.value.length > 0 ? (o(), i("button", {
              key: 8,
              class: "retry-button",
              onClick: W[0] || (W[0] = (ne) => te.$emit("retry-failed"))
            }, " Retry Failed (" + m(c.value.length) + ") ", 1)) : y("", !0),
            p.value ? y("", !0) : (o(), i("div", Q0, [
              W[11] || (W[11] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", Y0, m($.value), 1)
            ])),
            C.value ? (o(), i("p", X0, "Model downloads will continue in the background.")) : y("", !0),
            v.value ? (o(), i("div", Z0, [
              W[12] || (W[12] = s("div", { class: "restart-warning" }, [
                s("span", { class: "warning-icon" }, "⚠"),
                s("div", { class: "warning-content" }, [
                  s("strong", null, "Restart Required"),
                  s("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              s("button", {
                class: "restart-button",
                onClick: W[1] || (W[1] = (ne) => te.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : y("", !0)
          ])
        ])) : e.progress.phase === "error" ? (o(), i("div", e_, [
          W[13] || (W[13] = s("div", { class: "phase-header" }, [
            s("span", { class: "phase-icon error" }, "✗"),
            s("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          s("p", t_, m(e.progress.error), 1)
        ])) : y("", !0),
        M.value ? (o(), R(gc, {
          key: 4,
          loading: D.value,
          error: F.value,
          preview: N.value,
          "can-apply": !!(q.value && ((fe = N.value) != null && fe.success)),
          applying: O.value,
          onClose: Q,
          onApply: de
        }, null, 8, ["loading", "error", "preview", "can-apply", "applying"])) : y("", !0)
      ]);
    };
  }
}), n_ = /* @__PURE__ */ Te(s_, [["__scopeId", "data-v-e24547af"]]), o_ = {
  key: 0,
  class: "loading-state"
}, a_ = {
  key: 1,
  class: "wizard-content"
}, l_ = {
  key: 0,
  class: "step-content"
}, i_ = { class: "analysis-summary" }, r_ = { class: "analysis-header" }, c_ = { class: "summary-description" }, u_ = { class: "stats-grid" }, d_ = { class: "stat-card" }, m_ = { class: "stat-items" }, f_ = {
  key: 0,
  class: "stat-item success"
}, v_ = { class: "stat-count" }, p_ = {
  key: 1,
  class: "stat-item info"
}, g_ = { class: "stat-count" }, h_ = {
  key: 2,
  class: "stat-item warning"
}, y_ = { class: "stat-count" }, w_ = {
  key: 3,
  class: "stat-item warning"
}, __ = { class: "stat-count" }, k_ = {
  key: 4,
  class: "stat-item warning"
}, b_ = { class: "stat-count" }, $_ = {
  key: 5,
  class: "stat-item error"
}, C_ = { class: "stat-count" }, x_ = { class: "stat-card" }, S_ = { class: "stat-items" }, I_ = { class: "stat-item success" }, E_ = { class: "stat-count" }, T_ = {
  key: 0,
  class: "stat-item info"
}, M_ = { class: "stat-count" }, P_ = {
  key: 1,
  class: "stat-item warning"
}, R_ = { class: "stat-count" }, D_ = {
  key: 2,
  class: "stat-item warning"
}, N_ = { class: "stat-count" }, L_ = {
  key: 3,
  class: "stat-item error"
}, U_ = { class: "stat-count" }, O_ = {
  key: 0,
  class: "status-message warning"
}, A_ = { class: "status-text" }, z_ = {
  key: 1,
  class: "status-message warning"
}, F_ = { class: "status-text" }, V_ = {
  key: 2,
  class: "status-message info"
}, B_ = { class: "status-text" }, W_ = {
  key: 3,
  class: "status-message info"
}, G_ = { class: "status-text" }, j_ = {
  key: 4,
  class: "status-message info"
}, H_ = { class: "status-text" }, q_ = {
  key: 5,
  class: "status-message warning"
}, K_ = { class: "status-text" }, J_ = {
  key: 6,
  class: "status-message success"
}, Q_ = {
  key: 7,
  class: "category-mismatch-section"
}, Y_ = { class: "mismatch-list" }, X_ = { class: "mismatch-path" }, Z_ = { class: "mismatch-target" }, ek = {
  key: 8,
  class: "category-mismatch-section"
}, tk = { class: "mismatch-list" }, sk = { class: "mismatch-path" }, nk = { class: "status-text" }, ok = {
  key: 1,
  class: "step-content node-step-content"
}, ak = {
  key: 2,
  class: "step-content package-step-content"
}, lk = { class: "package-step-header" }, ik = { class: "stat-badge" }, rk = {
  key: 0,
  class: "package-section"
}, ck = { class: "package-section-header" }, uk = { class: "package-section-title" }, dk = { class: "stat-badge" }, mk = { class: "package-list" }, fk = { class: "package-info" }, vk = { class: "item-name" }, pk = { class: "package-meta" }, gk = { class: "package-actions" }, hk = {
  key: 0,
  class: "choice-badge install"
}, yk = {
  key: 1,
  class: "choice-badge skip"
}, wk = {
  key: 1,
  class: "community-node-section"
}, _k = { class: "community-node-header" }, kk = { class: "community-node-title" }, bk = { class: "community-node-list" }, $k = { class: "community-node-info" }, Ck = { class: "community-node-heading" }, xk = { class: "item-name" }, Sk = { class: "community-node-package" }, Ik = { class: "community-node-meta" }, Ek = { class: "community-node-guidance" }, Tk = { key: 0 }, Mk = {
  key: 0,
  class: "community-node-selection"
}, Pk = { class: "community-selected-label" }, Rk = {
  key: 1,
  class: "community-node-actions"
}, Dk = {
  key: 4,
  class: "step-content"
}, Nk = { class: "review-summary" }, Lk = { class: "review-stats" }, Uk = { class: "review-stat" }, Ok = { class: "stat-value" }, Ak = { class: "review-stat" }, zk = { class: "stat-value" }, Fk = { class: "review-stat" }, Vk = { class: "stat-value" }, Bk = { class: "review-stat" }, Wk = { class: "stat-value" }, Gk = {
  key: 0,
  class: "review-section"
}, jk = { class: "section-title" }, Hk = { class: "review-items" }, qk = { class: "item-name" }, Kk = { class: "item-choice" }, Jk = {
  key: 0,
  class: "choice-badge install"
}, Qk = {
  key: 1,
  class: "choice-badge skip"
}, Yk = {
  key: 1,
  class: "review-section"
}, Xk = { class: "section-title" }, Zk = { class: "review-items" }, eb = { class: "item-name" }, tb = { class: "item-choice" }, sb = {
  key: 0,
  class: "choice-badge install"
}, nb = {
  key: 1,
  class: "choice-badge optional"
}, ob = {
  key: 2,
  class: "choice-badge skip"
}, ab = {
  key: 2,
  class: "review-section"
}, lb = { class: "section-title" }, ib = { class: "review-items" }, rb = { class: "item-name" }, cb = { class: "item-choice" }, ub = {
  key: 0,
  class: "choice-badge install"
}, db = {
  key: 1,
  class: "choice-badge mapped"
}, mb = {
  key: 2,
  class: "choice-badge optional"
}, fb = {
  key: 3,
  class: "choice-badge skip"
}, vb = {
  key: 1,
  class: "choice-badge pending"
}, pb = {
  key: 3,
  class: "review-section"
}, gb = { class: "section-title" }, hb = { class: "review-items download-details" }, yb = { class: "download-info" }, wb = { class: "item-name" }, _b = { class: "download-meta" }, kb = { class: "download-path" }, bb = ["title"], $b = {
  key: 4,
  class: "review-section"
}, Cb = { class: "section-title" }, xb = { class: "review-items" }, Sb = { class: "item-name" }, Ib = { class: "item-choice" }, Eb = {
  key: 0,
  class: "choice-badge install"
}, Tb = {
  key: 1,
  class: "choice-badge download"
}, Mb = {
  key: 2,
  class: "choice-badge optional"
}, Pb = {
  key: 3,
  class: "choice-badge skip"
}, Rb = {
  key: 4,
  class: "choice-badge skip"
}, Db = {
  key: 1,
  class: "choice-badge download"
}, Nb = {
  key: 2,
  class: "choice-badge pending"
}, Lb = {
  key: 5,
  class: "no-choices"
}, Ub = /* @__PURE__ */ Ee({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const n = e, a = t, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: f } = vc(), { loadPendingDownloads: v } = qn(), { openFileLocation: p, queueNodeInstall: w, getNodes: g } = mt(), k = _(null), C = _([]), S = _(!1), $ = _(!1), I = _(null), E = _("analysis"), M = _([]), D = _(/* @__PURE__ */ new Map()), O = _(/* @__PURE__ */ new Map()), F = _(/* @__PURE__ */ new Set()), N = P(() => {
      const Y = [
        { id: "analysis", label: "Analysis" }
      ];
      return ve.value && Y.push({ id: "nodes", label: "Nodes" }), oe.value && Y.push({ id: "packages", label: "Packages" }), se.value && Y.push({ id: "models", label: "Models" }), Y.push({ id: "review", label: "Review" }), E.value === "applying" && Y.push({ id: "applying", label: "Applying" }), Y;
    });
    P(() => k.value ? k.value.stats.needs_user_input : !1);
    const q = P(() => A.value.filter(
      (Y) => !D.value.has(Y.reference.node_type)
    ).length), ce = P(() => ie.value.filter(
      (L) => !D.value.has(L.node_type)
    ).length + Ce.value.length + q.value), de = P(() => k.value ? k.value.nodes.unresolved.filter(
      (Y) => !D.value.has(Y.reference.node_type)
    ).length : 0), Q = P(() => k.value ? k.value.nodes.ambiguous.filter(
      (Y) => !D.value.has(Y.reference.node_type)
    ).length : 0), te = P(() => k.value ? k.value.nodes.version_gated || [] : []), W = P(() => k.value ? k.value.nodes.uninstallable || [] : []), A = P(() => W.value.filter((Y) => {
      var L;
      return !!((L = Y.package) != null && L.package_id);
    })), V = P(() => te.value.length > 0), ve = P(() => k.value ? k.value.nodes.unresolved.length > 0 || k.value.nodes.ambiguous.length > 0 || Ie.value.length > 0 : !1), se = P(() => k.value ? k.value.models.unresolved.length > 0 || k.value.models.ambiguous.length > 0 : !1), fe = P(() => k.value ? k.value.stats.download_intents > 0 : !1), ne = P(() => k.value ? k.value.stats.nodes_needing_installation > 0 : !1), K = P(() => A.value.length > 0), oe = P(() => ne.value || K.value), ae = P(() => k.value ? k.value.nodes.resolved.length : 0), Me = P(() => k.value ? k.value.models.resolved.filter((Y) => Y.has_category_mismatch) : []), pe = P(() => Me.value.length > 0), ze = P(() => ve.value ? "nodes" : oe.value ? "packages" : se.value ? "models" : "review"), Le = P(() => {
      if (!k.value) return [];
      const Y = k.value.nodes.resolved.filter((le) => !le.is_installed), L = /* @__PURE__ */ new Set();
      return Y.filter((le) => L.has(le.package.package_id) ? !1 : (L.add(le.package.package_id), !0));
    }), ke = P(() => {
      if (!k.value) return [];
      const Y = k.value.nodes.resolved.filter((le) => !le.is_installed), L = /* @__PURE__ */ new Map();
      for (const le of Y) {
        const He = L.get(le.package.package_id);
        He ? He.node_types_count++ : L.set(le.package.package_id, {
          package_id: le.package.package_id,
          title: le.package.title,
          node_types_count: 1
        });
      }
      return Array.from(L.values());
    }), De = P(() => ke.value.filter((Y) => !F.value.has(Y.package_id)).length), ge = P(() => ke.value.length + A.value.length), we = P(() => {
      const Y = A.value.filter(
        (L) => D.value.has(L.reference.node_type)
      ).length;
      return ke.value.length + Y;
    }), T = P(() => Le.value.filter((Y) => !F.value.has(Y.package.package_id))), U = P(() => k.value ? k.value.models.resolved.filter(
      (Y) => Y.match_type === "download_intent" || Y.match_type === "property_download_intent"
    ).map((Y) => ({
      filename: Y.reference.widget_value,
      reference: Y.reference,
      is_download_intent: !0,
      resolved_model: Y.model,
      download_source: Y.download_source,
      target_path: Y.target_path
    })) : []), ie = P(() => {
      if (!k.value) return [];
      const Y = Ie.value.map((He) => ({
        node_type: He.reference.node_type,
        reason: "saved_mapping",
        is_unresolved: !1,
        options: void 0
      })), L = k.value.nodes.unresolved.map((He) => ({
        node_type: He.reference.node_type,
        reason: He.reason,
        is_unresolved: !0,
        options: void 0
      })), le = k.value.nodes.ambiguous.map((He) => ({
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
      return [...Y, ...L, ...le];
    }), Ie = P(() => k.value ? k.value.nodes.resolved.filter(
      (Y) => {
        var L;
        return ((L = Y.saved_choice) == null ? void 0 : L.action) === "map-installed";
      }
    ) : []), Ce = P(() => {
      if (!k.value) return [];
      const Y = k.value.models.unresolved.map((le) => ({
        filename: le.reference.widget_value,
        reference: le.reference,
        reason: le.reason,
        is_unresolved: !0,
        options: void 0
      })), L = k.value.models.ambiguous.map((le) => ({
        filename: le.reference.widget_value,
        reference: le.reference,
        has_multiple_options: !0,
        options: le.options.map((He) => ({
          model: He.model,
          match_confidence: He.match_confidence,
          match_type: He.match_type,
          has_download_source: He.has_download_source
        }))
      }));
      return [...Y, ...L];
    }), be = P(() => {
      const Y = Ce.value, L = U.value.map((le) => ({
        filename: le.filename,
        reference: le.reference,
        is_download_intent: !0,
        resolved_model: le.resolved_model,
        download_source: le.download_source,
        target_path: le.target_path,
        options: void 0
      }));
      return [...Y, ...L];
    }), ee = P(() => U.value.filter((Y) => {
      const L = O.value.get(Y.filename);
      return L ? L.action === "download" : !0;
    }).map((Y) => ({
      filename: Y.filename,
      url: Y.download_source,
      target_path: Y.target_path
    })));
    function j(Y, L = 50) {
      return Y.length <= L ? Y : Y.slice(0, L - 3) + "...";
    }
    const he = P(() => {
      let Y = T.value.length;
      for (const L of D.value.values())
        L.action === "install" && Y++;
      for (const L of O.value.values())
        L.action === "select" && Y++;
      return Y;
    }), _e = P(() => {
      let Y = 0;
      for (const L of O.value.values())
        L.action === "download" && Y++;
      for (const L of U.value)
        O.value.get(L.filename) || Y++;
      return Y;
    }), Ke = P(() => {
      let Y = 0;
      for (const L of D.value.values())
        L.action === "optional" && Y++;
      for (const L of O.value.values())
        L.action === "optional" && Y++;
      return Y;
    }), We = P(() => {
      let Y = F.value.size;
      for (const L of D.value.values())
        L.action === "skip" && Y++;
      for (const L of O.value.values())
        L.action === "skip" && Y++;
      for (const L of ie.value)
        D.value.has(L.node_type) || Y++;
      for (const L of Ce.value)
        O.value.has(L.filename) || Y++;
      return Y;
    }), xe = P(() => {
      const Y = {};
      if (Y.analysis = { resolved: 1, total: 1 }, ve.value) {
        const L = ie.value.length, le = ie.value.filter(
          (He) => D.value.has(He.node_type)
        ).length;
        Y.nodes = { resolved: le, total: L };
      }
      if (oe.value && (Y.packages = {
        resolved: we.value,
        total: ge.value || 1
      }), se.value) {
        const L = be.value.length, le = be.value.filter(
          (He) => O.value.has(He.filename) || He.is_download_intent
        ).length;
        Y.models = { resolved: le, total: L };
      }
      if (Y.review = { resolved: 1, total: 1 }, E.value === "applying") {
        const L = d.totalFiles || 1, le = d.completedFiles.length;
        Y.applying = { resolved: le, total: L };
      }
      return Y;
    });
    function Z(Y) {
      E.value = Y;
    }
    function Ve() {
      const Y = N.value.findIndex((L) => L.id === E.value);
      Y > 0 && (E.value = N.value[Y - 1].id);
    }
    function Ne() {
      const Y = N.value.findIndex((L) => L.id === E.value);
      Y < N.value.length - 1 && (E.value = N.value[Y + 1].id);
    }
    function Qe() {
      const Y = N.value.findIndex((le) => le.id === E.value), L = N.value[Y + 1];
      return (L == null ? void 0 : L.label) || "Review";
    }
    function Fe(Y) {
      var L;
      return !!((L = Y.package) != null && L.latest_version);
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
      return Y.filter((L) => L.installed && L.tracked).filter((L) => L.name !== "comfygit-manager").map((L) => ({
        package_id: L.registry_id || L.name,
        source: L.source
      })).filter((L, le, He) => He.findIndex((tt) => tt.package_id === L.package_id) === le).sort((L, le) => {
        const He = Ae(L.source) - Ae(le.source);
        return He !== 0 ? He : L.package_id.localeCompare(le.package_id);
      });
    }
    async function kt() {
      S.value = !0, I.value = null;
      try {
        const [Y, L] = await Promise.all([
          l(n.workflowName),
          g()
        ]);
        k.value = Y, C.value = Xe(L.nodes), Lt(Y);
      } catch (Y) {
        I.value = Y instanceof Error ? Y.message : "Failed to analyze workflow";
      } finally {
        S.value = !1;
      }
    }
    function Lt(Y) {
      D.value.clear();
      for (const L of Y.nodes.unresolved)
        L.saved_choice && D.value.set(L.reference.node_type, L.saved_choice);
      for (const L of Y.nodes.resolved)
        L.saved_choice && D.value.set(L.reference.node_type, L.saved_choice);
      for (const L of Y.nodes.ambiguous)
        L.saved_choice && D.value.set(L.reference.node_type, L.saved_choice);
      for (const L of Y.nodes.uninstallable)
        L.saved_choice && D.value.set(L.reference.node_type, L.saved_choice);
    }
    function Kt() {
      M.value.includes("analysis") || M.value.push("analysis"), ve.value ? E.value = "nodes" : oe.value ? E.value = "packages" : se.value ? E.value = "models" : E.value = "review";
    }
    function X(Y) {
      D.value.set(Y, { action: "optional" });
    }
    function G(Y) {
      D.value.set(Y, { action: "skip" });
    }
    function me(Y, L) {
      var He;
      const le = ie.value.find((tt) => tt.node_type === Y);
      (He = le == null ? void 0 : le.options) != null && He[L] && D.value.set(Y, {
        action: "install",
        package_id: le.options[L].package_id
      });
    }
    function Je(Y, L, le = {}) {
      D.value.set(Y, {
        action: "install",
        package_id: L,
        install_source: le.install_source,
        repository: le.repository,
        version: le.version
      });
    }
    function Ge(Y, L) {
      D.value.set(Y, {
        action: "map-installed",
        package_id: L
      });
    }
    function it(Y) {
      D.value.delete(Y);
    }
    function Oe(Y) {
      return D.value.get(Y);
    }
    function rt(Y) {
      const L = Oe(Y);
      return L ? L.action === "optional" ? "Will be marked optional" : L.action === "skip" ? "Will be skipped" : L.action === "install" ? L.install_source === "git" ? "Will install via Git" : "Will install from Registry" : "Undecided" : "Undecided";
    }
    function Pt(Y, L) {
      var tt;
      const le = (tt = Y.package) == null ? void 0 : tt.package_id;
      if (!le) return;
      const He = {
        action: "install",
        package_id: le,
        version: Y.package.latest_version || null,
        install_source: L
      };
      L === "git" && Y.package.repository && (He.repository = Y.package.repository), D.value.set(Y.reference.node_type, He);
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
    function J(Y) {
      F.value.has(Y) ? F.value.delete(Y) : F.value.add(Y);
    }
    function ue(Y) {
      O.value.set(Y, { action: "optional" });
    }
    function Re(Y) {
      O.value.set(Y, { action: "skip" });
    }
    function $e(Y, L) {
      var He;
      const le = Ce.value.find((tt) => tt.filename === Y);
      (He = le == null ? void 0 : le.options) != null && He[L] && O.value.set(Y, {
        action: "select",
        selected_model: le.options[L].model
      });
    }
    function qe(Y, L, le) {
      O.value.set(Y, {
        action: "download",
        url: L,
        target_path: le
      });
    }
    function Ze(Y) {
      O.value.delete(Y);
    }
    async function lt(Y) {
      try {
        await p(Y);
      } catch (L) {
        I.value = L instanceof Error ? L.message : "Failed to open file location";
      }
    }
    async function ft() {
      var Y, L, le, He;
      $.value = !0, I.value = null, f(), d.phase = "resolving", E.value = "applying";
      try {
        const tt = await r(n.workflowName, D.value, O.value, F.value);
        tt.models_to_download && tt.models_to_download.length > 0 && u(n.workflowName, tt.models_to_download), d.nodesMarkedOptional = tt.nodes_marked_optional || [], d.nodesMapped = tt.nodes_mapped || [];
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
          const dt = ((Y = d.nodeInstallProgress) == null ? void 0 : Y.completedNodes) || [], Xs = ((L = d.nodeInstallProgress) == null ? void 0 : L.totalNodes) || d.nodesToInstall.length;
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
              if (((le = fs.status) == null ? void 0 : le.status_str) === "dependency_review_required") {
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
        $.value = !1;
      }
    }
    function It() {
      a("refresh"), a("restart"), a("close");
    }
    async function ht() {
      var L;
      const Y = ((L = d.nodeInstallProgress) == null ? void 0 : L.completedNodes.filter((le) => !le.success).map((le) => le.node_id)) || [];
      if (Y.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: Y.length
        }, d.nodesToInstall = Y, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(n.workflowName), d.phase = "complete";
        } catch (le) {
          d.error = le instanceof Error ? le.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return ut(kt), (Y, L) => (o(), R(Mt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: S.value,
      error: I.value || void 0,
      "fixed-height": !0,
      onClose: L[1] || (L[1] = (le) => a("close"))
    }, {
      body: h(() => [
        S.value && !k.value ? (o(), i("div", o_, [...L[2] || (L[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : k.value ? (o(), i("div", a_, [
          b(Ky, {
            steps: N.value,
            "current-step": E.value,
            "completed-steps": M.value,
            "step-stats": xe.value,
            onStepChange: Z
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          E.value === "analysis" ? (o(), i("div", l_, [
            s("div", i_, [
              s("div", r_, [
                L[3] || (L[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", c_, " Found " + m(k.value.stats.total_nodes) + " nodes and " + m(k.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", u_, [
                s("div", d_, [
                  L[16] || (L[16] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", m_, [
                    ae.value > 0 ? (o(), i("div", f_, [
                      L[4] || (L[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", v_, m(ae.value), 1),
                      L[5] || (L[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    k.value.stats.packages_needing_installation > 0 ? (o(), i("div", p_, [
                      L[6] || (L[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", g_, m(k.value.stats.packages_needing_installation), 1),
                      L[7] || (L[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    Q.value > 0 ? (o(), i("div", h_, [
                      L[8] || (L[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", y_, m(Q.value), 1),
                      L[9] || (L[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    te.value.length > 0 ? (o(), i("div", w_, [
                      L[10] || (L[10] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", __, m(te.value.length), 1),
                      L[11] || (L[11] = s("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    q.value > 0 ? (o(), i("div", k_, [
                      L[12] || (L[12] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", b_, m(q.value), 1),
                      L[13] || (L[13] = s("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    de.value > 0 ? (o(), i("div", $_, [
                      L[14] || (L[14] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", C_, m(de.value), 1),
                      L[15] || (L[15] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                s("div", x_, [
                  L[27] || (L[27] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", S_, [
                    s("div", I_, [
                      L[17] || (L[17] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", E_, m(k.value.models.resolved.length - k.value.stats.download_intents - k.value.stats.models_with_category_mismatch), 1),
                      L[18] || (L[18] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    k.value.stats.download_intents > 0 ? (o(), i("div", T_, [
                      L[19] || (L[19] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", M_, m(k.value.stats.download_intents), 1),
                      L[20] || (L[20] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    pe.value ? (o(), i("div", P_, [
                      L[21] || (L[21] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", R_, m(Me.value.length), 1),
                      L[22] || (L[22] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    k.value.models.ambiguous.length > 0 ? (o(), i("div", D_, [
                      L[23] || (L[23] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", N_, m(k.value.models.ambiguous.length), 1),
                      L[24] || (L[24] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    k.value.models.unresolved.length > 0 ? (o(), i("div", L_, [
                      L[25] || (L[25] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", U_, m(k.value.models.unresolved.length), 1),
                      L[26] || (L[26] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              ce.value > 0 ? (o(), i("div", O_, [
                L[28] || (L[28] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", A_, m(ce.value) + " item" + m(ce.value === 1 ? "" : "s") + " need your input", 1)
              ])) : V.value ? (o(), i("div", z_, [
                L[29] || (L[29] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", F_, m(te.value.length) + " node type" + m(te.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : q.value > 0 ? (o(), i("div", V_, [
                L[30] || (L[30] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", B_, m(q.value) + " community-mapped node type" + m(q.value > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : ne.value ? (o(), i("div", W_, [
                L[31] || (L[31] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", G_, m(k.value.stats.packages_needing_installation) + " package" + m(k.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + m(k.value.stats.nodes_needing_installation) + " node type" + m(k.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + m(fe.value ? `, ${k.value.stats.download_intents} model${k.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : fe.value ? (o(), i("div", j_, [
                L[32] || (L[32] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", H_, m(k.value.stats.download_intents) + " model" + m(k.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : pe.value ? (o(), i("div", q_, [
                L[33] || (L[33] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", K_, m(Me.value.length) + " model" + m(Me.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (o(), i("div", J_, [...L[34] || (L[34] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              pe.value ? (o(), i("div", Q_, [
                L[37] || (L[37] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", Y_, [
                  (o(!0), i(B, null, ye(Me.value, (le) => {
                    var He, tt;
                    return o(), i("div", {
                      key: le.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", X_, m(le.actual_category) + "/" + m((He = le.model) == null ? void 0 : He.filename), 1),
                      L[36] || (L[36] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", Z_, m((tt = le.expected_categories) == null ? void 0 : tt[0]) + "/", 1),
                      le.file_path ? (o(), R(Ue, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (yt) => lt(le.file_path)
                      }, {
                        default: h(() => [...L[35] || (L[35] = [
                          x(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              V.value ? (o(), i("div", ek, [
                L[38] || (L[38] = s("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                s("div", tk, [
                  (o(!0), i(B, null, ye(te.value, (le) => {
                    var He;
                    return o(), i("div", {
                      key: `vg-${le.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      s("code", sk, m(le.reference.node_type), 1),
                      s("span", nk, m(le.guidance || ((He = k.value.node_guidance) == null ? void 0 : He[le.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          E.value === "nodes" ? (o(), i("div", ok, [
            b(ew, {
              nodes: ie.value,
              "node-choices": D.value,
              "auto-resolved-packages": [],
              "skipped-packages": F.value,
              "installed-node-packs": C.value,
              onMarkOptional: X,
              onSkip: G,
              onOptionSelected: me,
              onManualEntry: Je,
              onInstalledPackSelected: Ge,
              onClearChoice: it,
              onPackageSkip: J
            }, null, 8, ["nodes", "node-choices", "skipped-packages", "installed-node-packs"])
          ])) : y("", !0),
          E.value === "packages" ? (o(), i("div", ak, [
            s("div", lk, [
              L[39] || (L[39] = s("div", null, [
                s("h3", { class: "summary-title" }, "Review Node Packages"),
                s("p", { class: "summary-description" }, " Choose which package-level installs should run. These decisions are separate from mapping unresolved node names. ")
              ], -1)),
              s("span", ik, m(we.value) + "/" + m(ge.value) + " decided", 1)
            ]),
            ke.value.length > 0 ? (o(), i("div", rk, [
              s("div", ck, [
                s("div", null, [
                  s("h4", uk, "Resolved Packages (" + m(ke.value.length) + ")", 1),
                  L[40] || (L[40] = s("p", { class: "package-section-description" }, " These packages were matched automatically. Skip any package you do not want installed. ", -1))
                ]),
                s("span", dk, m(De.value) + "/" + m(ke.value.length) + " to install", 1)
              ]),
              s("div", mk, [
                (o(!0), i(B, null, ye(ke.value, (le) => (o(), i("div", {
                  key: le.package_id,
                  class: "package-item"
                }, [
                  s("div", fk, [
                    s("code", vk, m(le.package_id), 1),
                    s("span", pk, m(le.node_types_count) + " node type" + m(le.node_types_count > 1 ? "s" : ""), 1)
                  ]),
                  s("div", gk, [
                    F.value.has(le.package_id) ? (o(), i("span", yk, "Skipped")) : (o(), i("span", hk, "Will Install")),
                    b(Ue, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (He) => J(le.package_id)
                    }, {
                      default: h(() => [
                        x(m(F.value.has(le.package_id) ? "Include" : "Skip"), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : y("", !0),
            A.value.length > 0 ? (o(), i("div", wk, [
              s("div", _k, [
                s("h4", kk, "Community-Mapped Packages (" + m(A.value.length) + ")", 1),
                L[41] || (L[41] = s("p", { class: "community-node-description" }, " These mappings came from community metadata. Use a registry install only when a package version exists; otherwise install from Git or skip. ", -1))
              ]),
              s("div", bk, [
                (o(!0), i(B, null, ye(A.value, (le) => (o(), i("div", {
                  key: `community-${le.reference.node_type}-${le.package.package_id}`,
                  class: "community-node-item"
                }, [
                  s("div", $k, [
                    s("div", Ck, [
                      s("code", xk, m(le.reference.node_type), 1),
                      s("span", Sk, m(le.package.title || le.package.package_id), 1)
                    ]),
                    s("div", Ik, m(le.package.package_id), 1),
                    s("div", Ek, [
                      L[42] || (L[42] = x(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      le.guidance ? (o(), i("span", Tk, m(le.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  Oe(le.reference.node_type) ? (o(), i("div", Mk, [
                    s("div", Pk, m(rt(le.reference.node_type)), 1),
                    b(Ue, {
                      class: "change-selection-button",
                      size: "sm",
                      variant: "ghost",
                      onClick: (He) => Ft(le.reference.node_type)
                    }, {
                      default: h(() => [...L[43] || (L[43] = [
                        x(" Change Selection ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])) : (o(), i("div", Rk, [
                    Fe(le) ? (o(), R(Ue, {
                      key: 0,
                      class: "community-choice-button install-choice",
                      size: "sm",
                      variant: "secondary",
                      disabled: !le.package.package_id,
                      onClick: (He) => Pt(le, "registry")
                    }, {
                      default: h(() => [...L[44] || (L[44] = [
                        x(" Install from Registry ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    le.package.repository ? (o(), R(Ue, {
                      key: 1,
                      class: "community-choice-button install-choice",
                      size: "sm",
                      variant: "secondary",
                      disabled: !le.package.package_id,
                      onClick: (He) => Pt(le, "git")
                    }, {
                      default: h(() => [...L[45] || (L[45] = [
                        x(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    b(Ue, {
                      class: "community-choice-button",
                      size: "sm",
                      variant: "secondary",
                      onClick: (He) => Jt(le.reference.node_type)
                    }, {
                      default: h(() => [...L[46] || (L[46] = [
                        x(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Ue, {
                      class: "community-choice-button",
                      size: "sm",
                      variant: "secondary",
                      onClick: (He) => cs(le.reference.node_type)
                    }, {
                      default: h(() => [...L[47] || (L[47] = [
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
            "model-choices": O.value,
            onMarkOptional: ue,
            onSkip: Re,
            onOptionSelected: $e,
            onDownloadUrl: qe,
            onClearChoice: Ze
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          E.value === "review" ? (o(), i("div", Dk, [
            s("div", Nk, [
              L[53] || (L[53] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", Lk, [
                s("div", Uk, [
                  s("span", Ok, m(he.value), 1),
                  L[48] || (L[48] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", Ak, [
                  s("span", zk, m(_e.value), 1),
                  L[49] || (L[49] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", Fk, [
                  s("span", Vk, m(Ke.value), 1),
                  L[50] || (L[50] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", Bk, [
                  s("span", Wk, m(We.value), 1),
                  L[51] || (L[51] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              ke.value.length > 0 ? (o(), i("div", Gk, [
                s("h4", jk, "Node Packages (" + m(ke.value.length) + ")", 1),
                s("div", Hk, [
                  (o(!0), i(B, null, ye(ke.value, (le) => (o(), i("div", {
                    key: le.package_id,
                    class: "review-item"
                  }, [
                    s("code", qk, m(le.package_id), 1),
                    s("div", Kk, [
                      F.value.has(le.package_id) ? (o(), i("span", Qk, "Skipped")) : (o(), i("span", Jk, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              A.value.length > 0 ? (o(), i("div", Yk, [
                s("h4", Xk, "Community-Mapped Packages (" + m(A.value.length) + ")", 1),
                s("div", Zk, [
                  (o(!0), i(B, null, ye(A.value, (le) => {
                    var He, tt, yt;
                    return o(), i("div", {
                      key: `review-community-${le.reference.node_type}-${le.package.package_id}`,
                      class: "review-item"
                    }, [
                      s("code", eb, m(le.reference.node_type), 1),
                      s("div", tb, [
                        ((He = Oe(le.reference.node_type)) == null ? void 0 : He.action) === "install" ? (o(), i("span", sb, m(((tt = Oe(le.reference.node_type)) == null ? void 0 : tt.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((yt = Oe(le.reference.node_type)) == null ? void 0 : yt.action) === "optional" ? (o(), i("span", nb, " Optional ")) : (o(), i("span", ob, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ie.value.length > 0 ? (o(), i("div", ab, [
                s("h4", lb, "Node Choices (" + m(ie.value.length) + ")", 1),
                s("div", ib, [
                  (o(!0), i(B, null, ye(ie.value, (le) => {
                    var He, tt, yt, ks, Vt, bs;
                    return o(), i("div", {
                      key: le.node_type,
                      class: "review-item"
                    }, [
                      s("code", rb, m(le.node_type), 1),
                      s("div", cb, [
                        D.value.has(le.node_type) ? (o(), i(B, { key: 0 }, [
                          ((He = D.value.get(le.node_type)) == null ? void 0 : He.action) === "install" ? (o(), i("span", ub, m((tt = D.value.get(le.node_type)) == null ? void 0 : tt.package_id), 1)) : ((yt = D.value.get(le.node_type)) == null ? void 0 : yt.action) === "map-installed" ? (o(), i("span", db, " Mapped to " + m((ks = D.value.get(le.node_type)) == null ? void 0 : ks.package_id), 1)) : ((Vt = D.value.get(le.node_type)) == null ? void 0 : Vt.action) === "optional" ? (o(), i("span", mb, " Optional ")) : ((bs = D.value.get(le.node_type)) == null ? void 0 : bs.action) === "skip" ? (o(), i("span", fb, " Skip ")) : y("", !0)
                        ], 64)) : (o(), i("span", vb, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ee.value.length > 0 ? (o(), i("div", pb, [
                s("h4", gb, "Models to Download (" + m(ee.value.length) + ")", 1),
                s("div", hb, [
                  (o(!0), i(B, null, ye(ee.value, (le) => (o(), i("div", {
                    key: le.filename,
                    class: "review-item download-item"
                  }, [
                    s("div", yb, [
                      s("code", wb, m(le.filename), 1),
                      s("div", _b, [
                        s("span", kb, "→ " + m(le.target_path), 1),
                        le.url ? (o(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: le.url
                        }, m(j(le.url)), 9, bb)) : y("", !0)
                      ])
                    ]),
                    L[52] || (L[52] = s("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              be.value.length > 0 ? (o(), i("div", $b, [
                s("h4", Cb, "Models (" + m(be.value.length) + ")", 1),
                s("div", xb, [
                  (o(!0), i(B, null, ye(be.value, (le) => {
                    var He, tt, yt, ks, Vt, bs, dt;
                    return o(), i("div", {
                      key: le.filename,
                      class: "review-item"
                    }, [
                      s("code", Sb, m(le.filename), 1),
                      s("div", Ib, [
                        O.value.has(le.filename) ? (o(), i(B, { key: 0 }, [
                          ((He = O.value.get(le.filename)) == null ? void 0 : He.action) === "select" ? (o(), i("span", Eb, m((yt = (tt = O.value.get(le.filename)) == null ? void 0 : tt.selected_model) == null ? void 0 : yt.filename), 1)) : ((ks = O.value.get(le.filename)) == null ? void 0 : ks.action) === "download" ? (o(), i("span", Tb, " Download ")) : ((Vt = O.value.get(le.filename)) == null ? void 0 : Vt.action) === "optional" ? (o(), i("span", Mb, " Optional ")) : ((bs = O.value.get(le.filename)) == null ? void 0 : bs.action) === "skip" ? (o(), i("span", Pb, " Skip ")) : ((dt = O.value.get(le.filename)) == null ? void 0 : dt.action) === "cancel_download" ? (o(), i("span", Rb, " Cancel Download ")) : y("", !0)
                        ], 64)) : le.is_download_intent ? (o(), i("span", Db, " Pending Download ")) : (o(), i("span", Nb, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Le.value.length === 0 && A.value.length === 0 && ie.value.length === 0 && be.value.length === 0 ? (o(), i("div", Lb, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          E.value === "applying" ? (o(), R(n_, {
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
          disabled: $.value,
          onClick: Ve
        }, {
          default: h(() => [...L[54] || (L[54] = [
            x(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        L[56] || (L[56] = s("div", { class: "footer-spacer" }, null, -1)),
        E.value !== "applying" || at(d).phase === "complete" || at(d).phase === "error" ? (o(), R(Ue, {
          key: 1,
          variant: "secondary",
          onClick: L[0] || (L[0] = (le) => a("close"))
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
          disabled: $.value,
          loading: $.value,
          onClick: ft
        }, {
          default: h(() => [...L[55] || (L[55] = [
            x(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Ob = /* @__PURE__ */ Te(Ub, [["__scopeId", "data-v-9d716697"]]), Ab = { class: "search-input-wrapper" }, zb = ["value", "placeholder"], Fb = /* @__PURE__ */ Ee({
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
    }), (d, f) => (o(), i("div", Ab, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: Cs(u, ["escape"])
      }, null, 40, zb),
      e.clearable && e.modelValue ? (o(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), Vb = /* @__PURE__ */ Te(Fb, [["__scopeId", "data-v-266f857a"]]), Bb = { class: "search-bar" }, Wb = /* @__PURE__ */ Ee({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, n) => (o(), i("div", Bb, [
      b(Vb, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (a) => t.$emit("update:modelValue", a)),
        onClear: n[1] || (n[1] = (a) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), $n = /* @__PURE__ */ Te(Wb, [["__scopeId", "data-v-3d51bbfd"]]), Gb = { class: "section-group" }, jb = {
  key: 0,
  class: "section-content"
}, Hb = /* @__PURE__ */ Ee({
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
    return (c, u) => (o(), i("section", Gb, [
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
      !e.collapsible || l.value ? (o(), i("div", jb, [
        ct(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Nt = /* @__PURE__ */ Te(Hb, [["__scopeId", "data-v-c48e33ed"]]), qb = { class: "item-header" }, Kb = {
  key: 0,
  class: "item-icon"
}, Jb = { class: "item-info" }, Qb = {
  key: 0,
  class: "item-title"
}, Yb = {
  key: 1,
  class: "item-subtitle"
}, Xb = {
  key: 0,
  class: "item-details"
}, Zb = {
  key: 1,
  class: "item-actions"
}, e2 = /* @__PURE__ */ Ee({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, a = P(() => n.status ? `status-${n.status}` : "");
    return (l, r) => (o(), i("div", {
      class: Be(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      s("div", qb, [
        l.$slots.icon ? (o(), i("span", Kb, [
          ct(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        s("div", Jb, [
          l.$slots.title ? (o(), i("div", Qb, [
            ct(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (o(), i("div", Yb, [
            ct(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (o(), i("div", Xb, [
        ct(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (o(), i("div", Zb, [
        ct(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Yt = /* @__PURE__ */ Te(e2, [["__scopeId", "data-v-cc435e0e"]]), t2 = { class: "empty-state" }, s2 = {
  key: 0,
  class: "empty-icon"
}, n2 = { class: "empty-message" }, o2 = /* @__PURE__ */ Ee({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, n) => (o(), i("div", t2, [
      e.icon ? (o(), i("div", s2, m(e.icon), 1)) : y("", !0),
      s("p", n2, m(e.message), 1),
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
}), Es = /* @__PURE__ */ Te(o2, [["__scopeId", "data-v-4466284f"]]), a2 = { class: "loading-state" }, l2 = { class: "loading-message" }, i2 = /* @__PURE__ */ Ee({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, n) => (o(), i("div", a2, [
      n[0] || (n[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", l2, m(e.message), 1)
    ]));
  }
}), zs = /* @__PURE__ */ Te(i2, [["__scopeId", "data-v-ad8436c9"]]), r2 = { class: "error-state" }, c2 = { class: "error-message" }, u2 = /* @__PURE__ */ Ee({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (t, n) => (o(), i("div", r2, [
      n[2] || (n[2] = s("span", { class: "error-icon" }, "⚠", -1)),
      s("p", c2, m(e.message), 1),
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
}), Fs = /* @__PURE__ */ Te(u2, [["__scopeId", "data-v-5397be48"]]);
function d2(e) {
  return e.toLowerCase().endsWith(".json") ? e : `${e}.json`;
}
function Ri(e) {
  return Array.from(new Set(e.filter(Boolean)));
}
function m2(e) {
  const t = e.trim(), n = d2(t);
  return t.startsWith("workflows/") ? Ri([n, t]) : Ri([
    `workflows/${n}`,
    n,
    t
  ]);
}
function f2(e) {
  return e.trim().replace(/^workflows\//, "").replace(/\.json$/i, "");
}
async function v2(e) {
  const t = m2(e), n = [];
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
async function p2(e) {
  const t = window.app;
  if (typeof t.loadGraphData != "function")
    throw new Error("ComfyUI loadGraphData is not available");
  const n = await v2(e);
  await t.loadGraphData(
    n,
    !0,
    !0,
    f2(e),
    {
      showMissingModelsDialog: !0,
      showMissingNodesDialog: !0
    }
  ), await new Promise((a) => requestAnimationFrame(a));
}
const g2 = /* @__PURE__ */ Ee({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: n }) {
    const a = n, { getWorkflows: l } = mt(), r = _([]), c = _(!1), u = _(null), d = _(""), f = _(!0), v = _(!1), p = _(!1), w = _(!1), g = _(null), k = P(
      () => r.value.filter((K) => K.status === "broken")
    ), C = P(
      () => r.value.filter((K) => K.status === "new")
    ), S = P(
      () => r.value.filter((K) => K.status === "modified")
    ), $ = P(
      () => r.value.filter((K) => K.status === "synced")
    ), I = P(() => {
      if (!d.value.trim()) return r.value;
      const K = d.value.toLowerCase();
      return r.value.filter((oe) => oe.name.toLowerCase().includes(K));
    }), E = P(
      () => k.value.filter(
        (K) => !d.value.trim() || K.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), M = P(
      () => C.value.filter(
        (K) => !d.value.trim() || K.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), D = P(
      () => S.value.filter(
        (K) => !d.value.trim() || K.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), O = P(
      () => $.value.filter(
        (K) => !d.value.trim() || K.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), F = P(
      () => v.value ? O.value : O.value.slice(0, 5)
    );
    async function N(K = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(K);
      } catch (oe) {
        u.value = oe instanceof Error ? oe.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    t({ loadWorkflows: N });
    function q(K) {
      g.value = K, p.value = !0;
    }
    function ce(K) {
      g.value = K, p.value = !1, w.value = !0;
    }
    async function de(K) {
      g.value = K;
      try {
        await p2(K);
      } catch (oe) {
        console.error("[ComfyGit] Failed to activate workflow for contract mapping:", oe), u.value = oe instanceof Error ? oe.message : "Failed to open workflow for contract mapping";
        return;
      }
      window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: K }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel"));
    }
    function Q(K) {
      var Me;
      const ae = (Me = K.detail) == null ? void 0 : Me.workflowName;
      ae && de(ae);
    }
    function te() {
    }
    function W() {
      a("refresh", { refreshWorkflows: !1 });
    }
    async function A() {
      w.value = !1, await N(!0);
    }
    async function V() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ve(K) {
      return K.replace(/uninstallable node mappings?/gi, (oe) => oe.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function se(K) {
      if (K.issue_summary && K.issue_summary.trim().length > 0)
        return ve(K.issue_summary);
      const oe = [];
      return K.version_gated_count && K.version_gated_count > 0 && oe.push(`${K.version_gated_count} node${K.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), K.uninstallable_count && K.uninstallable_count > 0 && oe.push(`${K.uninstallable_count} node${K.uninstallable_count > 1 ? "s" : ""} need community packages`), K.missing_nodes > 0 && oe.push(`${K.missing_nodes} missing node${K.missing_nodes > 1 ? "s" : ""}`), K.missing_models > 0 && oe.push(`${K.missing_models} missing model${K.missing_models > 1 ? "s" : ""}`), K.models_with_category_mismatch && K.models_with_category_mismatch > 0 && oe.push(`${K.models_with_category_mismatch} model${K.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), K.pending_downloads && K.pending_downloads > 0 && oe.push(`${K.pending_downloads} pending download${K.pending_downloads > 1 ? "s" : ""}`), oe.length > 0 ? oe.join(", ") : "Has issues";
    }
    function fe(K) {
      const oe = K.sync_state === "new" ? "New" : K.sync_state === "modified" ? "Modified" : K.sync_state === "synced" ? "Synced" : K.sync_state, ae = ne(K);
      return K.has_path_sync_issues && K.models_needing_path_sync && K.models_needing_path_sync > 0 ? `${K.models_needing_path_sync} model path${K.models_needing_path_sync > 1 ? "s" : ""} need${K.models_needing_path_sync === 1 ? "s" : ""} sync · ${ae}` : `${oe || "Unknown"} · ${ae}`;
    }
    function ne(K) {
      const oe = K.contract_summary;
      return !oe || !oe.has_contract ? "No contract" : oe.status === "incomplete" ? `${oe.input_count} in / ${oe.output_count} out · incomplete` : `${oe.input_count} in / ${oe.output_count} out`;
    }
    return ut(() => {
      N(), window.addEventListener("comfygit:open-workflow-contract", Q);
    }), To(() => {
      window.removeEventListener("comfygit:open-workflow-contract", Q);
    }), (K, oe) => (o(), i(B, null, [
      b(Ht, null, {
        header: h(() => [
          b(qt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          b($n, {
            modelValue: d.value,
            "onUpdate:modelValue": oe[0] || (oe[0] = (ae) => d.value = ae),
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
                (o(!0), i(B, null, ye(E.value, (ae) => (o(), R(Yt, {
                  key: ae.name,
                  status: "broken"
                }, {
                  icon: h(() => [...oe[6] || (oe[6] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(ae.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(se(ae)), 1)
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Me) => ce(ae.name)
                    }, {
                      default: h(() => [...oe[7] || (oe[7] = [
                        x(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => q(ae.name)
                    }, {
                      default: h(() => [...oe[8] || (oe[8] = [
                        x(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => de(ae.name)
                    }, {
                      default: h(() => [...oe[9] || (oe[9] = [
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
            M.value.length ? (o(), R(Nt, {
              key: 1,
              title: "NEW",
              count: M.value.length
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye(M.value, (ae) => (o(), R(Yt, {
                  key: ae.name,
                  status: ae.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    x(m(ae.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    x(m(ae.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(fe(ae)), 1)
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => q(ae.name)
                    }, {
                      default: h(() => [...oe[10] || (oe[10] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => de(ae.name)
                    }, {
                      default: h(() => [...oe[11] || (oe[11] = [
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
                (o(!0), i(B, null, ye(D.value, (ae) => (o(), R(Yt, {
                  key: ae.name,
                  status: ae.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...oe[12] || (oe[12] = [
                    x("⚡", -1)
                  ])]),
                  title: h(() => [
                    x(m(ae.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(fe(ae)), 1)
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => q(ae.name)
                    }, {
                      default: h(() => [...oe[13] || (oe[13] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => de(ae.name)
                    }, {
                      default: h(() => [...oe[14] || (oe[14] = [
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
            O.value.length ? (o(), R(Nt, {
              key: 3,
              title: "SYNCED",
              count: O.value.length,
              collapsible: !0,
              "initially-expanded": f.value,
              onToggle: oe[2] || (oe[2] = (ae) => f.value = ae)
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye(F.value, (ae) => (o(), R(Yt, {
                  key: ae.name,
                  status: ae.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    x(m(ae.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    x(m(ae.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(fe(ae)), 1)
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => q(ae.name)
                    }, {
                      default: h(() => [...oe[15] || (oe[15] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => de(ae.name)
                    }, {
                      default: h(() => [...oe[16] || (oe[16] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && O.value.length > 5 ? (o(), R(Pe, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: oe[1] || (oe[1] = (ae) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    x(" View all " + m(O.value.length) + " → ", 1)
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
        onClose: oe[3] || (oe[3] = (ae) => p.value = !1),
        onResolve: oe[4] || (oe[4] = (ae) => ce(g.value)),
        onRefresh: oe[5] || (oe[5] = (ae) => a("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && g.value ? (o(), R(Ob, {
        key: 1,
        "workflow-name": g.value,
        onClose: A,
        onInstall: te,
        onRefresh: W,
        onRestart: V
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), h2 = /* @__PURE__ */ Te(g2, [["__scopeId", "data-v-7bf48b3a"]]), y2 = /* @__PURE__ */ Ee({
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
}), Pl = /* @__PURE__ */ Te(y2, [["__scopeId", "data-v-ccb7816e"]]);
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
const w2 = {
  key: 0,
  class: "model-details"
}, _2 = { class: "detail-section" }, k2 = { class: "detail-row" }, b2 = { class: "detail-value mono" }, $2 = { class: "detail-row" }, C2 = { class: "detail-value mono" }, x2 = { class: "detail-row" }, S2 = { class: "detail-value mono" }, I2 = {
  key: 0,
  class: "detail-row"
}, E2 = { class: "detail-value" }, T2 = ["disabled"], M2 = {
  key: 1,
  class: "detail-row"
}, P2 = { class: "detail-value hash-error" }, R2 = { class: "detail-row" }, D2 = { class: "detail-value" }, N2 = { class: "detail-row" }, L2 = { class: "detail-value" }, U2 = { class: "detail-row" }, O2 = { class: "detail-value" }, A2 = { class: "detail-section" }, z2 = { class: "section-header" }, F2 = {
  key: 0,
  class: "locations-list"
}, V2 = { class: "location-path mono" }, B2 = {
  key: 0,
  class: "location-modified"
}, W2 = ["onClick"], G2 = {
  key: 1,
  class: "empty-state"
}, j2 = { class: "detail-section" }, H2 = { class: "section-header-row" }, q2 = { class: "section-header" }, K2 = {
  key: 0,
  class: "sources-list"
}, J2 = { class: "source-type" }, Q2 = ["href"], Y2 = ["disabled", "onClick"], X2 = {
  key: 1,
  class: "empty-state"
}, Z2 = {
  key: 2,
  class: "source-error"
}, e$ = {
  key: 3,
  class: "source-success"
}, t$ = /* @__PURE__ */ Ee({
  __name: "ModelDetailModal",
  props: {
    identifier: {},
    overlayZIndex: {}
  },
  emits: ["close", "sourceSaved"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getModelDetails: l, removeModelSource: r, computeModelHashes: c } = mt(), u = _(null), d = _(!0), f = _(null), v = _(null), p = _(null), w = _(null), g = _(!1), k = _(!1), C = _(null), S = P(() => {
      var de;
      return !!((de = u.value) != null && de.hash && (!u.value.blake3 || !u.value.sha256));
    }), $ = _(null);
    let I = null;
    function E(de, Q = "success", te = 2e3) {
      I && clearTimeout(I), $.value = { message: de, type: Q }, I = setTimeout(() => {
        $.value = null;
      }, te);
    }
    function M(de) {
      if (!de) return "Unknown";
      const Q = 1024 * 1024 * 1024, te = 1024 * 1024;
      return de >= Q ? `${(de / Q).toFixed(1)} GB` : de >= te ? `${(de / te).toFixed(0)} MB` : `${(de / 1024).toFixed(0)} KB`;
    }
    async function D(de) {
      try {
        await Rl(de), E("Copied to clipboard!");
      } catch (Q) {
        console.error("Failed to copy:", Q), E("Failed to copy to clipboard", "error");
      }
    }
    async function O(de) {
      if (u.value) {
        v.value = de, p.value = null, w.value = null;
        try {
          await r(u.value.hash, de), E("Source removed"), await ce();
        } catch (Q) {
          p.value = Q instanceof Error ? Q.message : "Failed to remove source";
        } finally {
          v.value = null;
        }
      }
    }
    async function F() {
      w.value = "Source added successfully!", g.value = !1, await ce(), a("sourceSaved");
    }
    async function N() {
      await ce();
    }
    async function q() {
      var de;
      if ((de = u.value) != null && de.hash) {
        k.value = !0, C.value = null;
        try {
          u.value = await c(u.value.hash), E("Hashes computed successfully!");
        } catch (Q) {
          C.value = Q instanceof Error ? Q.message : "Failed to compute hashes";
        } finally {
          k.value = !1;
        }
      }
    }
    async function ce() {
      d.value = !0, f.value = null;
      try {
        u.value = await l(n.identifier);
      } catch (de) {
        f.value = de instanceof Error ? de.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return ut(ce), (de, Q) => {
      var te;
      return o(), i(B, null, [
        b(Mt, {
          title: `Model Details: ${((te = u.value) == null ? void 0 : te.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: f.value,
          "overlay-z-index": e.overlayZIndex,
          onClose: Q[5] || (Q[5] = (W) => de.$emit("close"))
        }, {
          body: h(() => {
            var W, A, V, ve;
            return [
              u.value ? (o(), i("div", w2, [
                s("section", _2, [
                  s("div", k2, [
                    Q[7] || (Q[7] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", b2, m(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (o(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Q[0] || (Q[0] = (se) => D(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", $2, [
                    Q[8] || (Q[8] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", C2, m(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (o(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Q[1] || (Q[1] = (se) => D(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", x2, [
                    Q[9] || (Q[9] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", S2, m(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (o(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Q[2] || (Q[2] = (se) => D(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  S.value ? (o(), i("div", I2, [
                    Q[10] || (Q[10] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", E2, [
                      s("button", {
                        class: "compute-hashes-btn",
                        disabled: k.value,
                        onClick: q
                      }, m(k.value ? "Computing hashes..." : "Compute Full Hashes"), 9, T2)
                    ])
                  ])) : y("", !0),
                  C.value ? (o(), i("div", M2, [
                    Q[11] || (Q[11] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", P2, m(C.value), 1)
                  ])) : y("", !0),
                  s("div", R2, [
                    Q[12] || (Q[12] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", D2, m(M(u.value.size)), 1)
                  ]),
                  s("div", N2, [
                    Q[13] || (Q[13] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", L2, m(u.value.category), 1)
                  ]),
                  s("div", U2, [
                    Q[14] || (Q[14] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", O2, m(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", A2, [
                  s("h4", z2, "Locations (" + m(((W = u.value.locations) == null ? void 0 : W.length) || 0) + ")", 1),
                  (A = u.value.locations) != null && A.length ? (o(), i("div", F2, [
                    (o(!0), i(B, null, ye(u.value.locations, (se, fe) => (o(), i("div", {
                      key: fe,
                      class: "location-item"
                    }, [
                      s("span", V2, m(se.path), 1),
                      se.modified ? (o(), i("span", B2, "Modified: " + m(se.modified), 1)) : y("", !0),
                      se.path ? (o(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (ne) => D(se.path)
                      }, " Copy File Path ", 8, W2)) : y("", !0)
                    ]))), 128))
                  ])) : (o(), i("div", G2, "No locations found"))
                ]),
                s("section", j2, [
                  s("div", H2, [
                    s("h4", q2, "Download Sources (" + m(((V = u.value.sources) == null ? void 0 : V.length) || 0) + ")", 1),
                    s("button", {
                      class: "find-source-btn",
                      onClick: Q[3] || (Q[3] = (se) => g.value = !0)
                    }, " Find Source ")
                  ]),
                  (ve = u.value.sources) != null && ve.length ? (o(), i("div", K2, [
                    (o(!0), i(B, null, ye(u.value.sources, (se, fe) => (o(), i("div", {
                      key: fe,
                      class: "source-item"
                    }, [
                      s("span", J2, m(se.type) + ":", 1),
                      s("a", {
                        href: se.url,
                        target: "_blank",
                        class: "source-url"
                      }, m(se.url), 9, Q2),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: v.value === se.url,
                        onClick: (ne) => O(se.url)
                      }, m(v.value === se.url ? "..." : "×"), 9, Y2)
                    ]))), 128))
                  ])) : (o(), i("div", X2, " No download sources configured ")),
                  p.value ? (o(), i("p", Z2, m(p.value), 1)) : y("", !0),
                  w.value ? (o(), i("p", e$, m(w.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            s("button", {
              class: "btn-secondary",
              onClick: Q[4] || (Q[4] = (W) => de.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error", "overlay-z-index"]),
        (o(), R(as, { to: "body" }, [
          $.value ? (o(), i("div", {
            key: 0,
            class: Be(["toast", $.value.type])
          }, m($.value.message), 3)) : y("", !0)
        ])),
        u.value && g.value ? (o(), R(mc, {
          key: 0,
          model: u.value,
          "overlay-z-index": (e.overlayZIndex || 10003) + 2,
          onClose: Q[6] || (Q[6] = (W) => g.value = !1),
          onSaved: F,
          onHashesComputed: N
        }, null, 8, ["model", "overlay-z-index"])) : y("", !0)
      ], 64);
    };
  }
}), hc = /* @__PURE__ */ Te(t$, [["__scopeId", "data-v-cd808fbc"]]), s$ = { class: "workflow-links-tab" }, n$ = { class: "section-header-row" }, o$ = {
  key: 0,
  class: "state-message"
}, a$ = {
  key: 1,
  class: "error-message"
}, l$ = {
  key: 2,
  class: "candidate-list"
}, i$ = {
  key: 3,
  class: "state-message"
}, r$ = /* @__PURE__ */ Ee({
  __name: "WorkflowLinksTab",
  emits: ["selectUrl"],
  setup(e, { emit: t }) {
    const n = t, { getWorkflowSourceCandidates: a } = mt(), l = _([]), r = _(!1), c = _(null), u = P(() => l.value.filter((f) => f.source === "workflow"));
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
    return ut(d), (f, v) => (o(), i("div", s$, [
      s("div", n$, [
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
      r.value ? (o(), i("div", o$, "Scanning workflows...")) : c.value ? (o(), i("div", a$, m(c.value), 1)) : u.value.length ? (o(), i("div", l$, [
        (o(!0), i(B, null, ye(u.value, (p) => (o(), R(uc, {
          key: `${p.workflow}:${p.url}`,
          candidate: p,
          "action-label": "Use URL",
          onSelect: v[0] || (v[0] = (w) => n("selectUrl", w))
        }, null, 8, ["candidate"]))), 128))
      ])) : (o(), i("div", i$, " No likely workflow links found. Try Hugging Face or Direct URL. "))
    ]));
  }
}), c$ = /* @__PURE__ */ Te(r$, [["__scopeId", "data-v-1aac54cc"]]), u$ = { class: "civitai-tab" }, d$ = /* @__PURE__ */ Ee({
  __name: "CivitaiTab",
  setup(e) {
    return (t, n) => (o(), i("div", u$, [...n[0] || (n[0] = [
      s("div", { class: "placeholder" }, [
        s("div", { class: "icon" }, "🎨"),
        s("h3", null, "Civitai Integration"),
        s("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), m$ = /* @__PURE__ */ Te(d$, [["__scopeId", "data-v-44948051"]]), f$ = { class: "direct-url-tab" }, v$ = {
  key: 0,
  class: "error"
}, p$ = /* @__PURE__ */ Ee({
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
    const c = P(() => {
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
    return (f, v) => (o(), i("div", f$, [
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
          l.value.trim() && !c.value ? (o(), i("p", v$, " Could not infer a filename from this URL. ")) : y("", !0),
          v[2] || (v[2] = s("p", { class: "note" }, "Model will be queued for background download.", -1))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled"])
    ]));
  }
}), g$ = /* @__PURE__ */ Te(p$, [["__scopeId", "data-v-a6d21f27"]]), h$ = { class: "download-modal" }, y$ = { class: "tab-bar" }, w$ = ["onClick"], _$ = { class: "tab-content" }, k$ = /* @__PURE__ */ Ee({
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
        s("div", h$, [
          s("div", y$, [
            (o(), i(B, null, ye(l, (g) => s("button", {
              key: g.id,
              class: Be(["tab-btn", { active: r.value === g.id }]),
              onClick: (k) => r.value = g.id
            }, m(g.icon) + " " + m(g.label), 11, w$)), 64))
          ]),
          s("div", _$, [
            r.value === "workflow" ? (o(), R(c$, {
              key: 0,
              onSelectUrl: f
            })) : r.value === "huggingface" ? (o(), R(cc, {
              key: 1,
              onQueue: u
            })) : r.value === "civitai" ? (o(), R(m$, { key: 2 })) : r.value === "direct" ? (o(), R(g$, {
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
}), yc = /* @__PURE__ */ Te(k$, [["__scopeId", "data-v-de2e4fac"]]), b$ = /* @__PURE__ */ Ee({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const n = t, { getEnvironmentModels: a, getStatus: l } = mt(), r = _([]), c = _([]), u = _("production"), d = _(!1), f = _(null), v = _(""), p = _(!1), w = _(null), g = _(!1);
    function k() {
      p.value = !1, n("navigate", "model-index");
    }
    const C = P(
      () => r.value.reduce((N, q) => N + (q.size || 0), 0)
    ), S = P(() => {
      if (!v.value.trim()) return r.value;
      const N = v.value.toLowerCase();
      return r.value.filter((q) => q.filename.toLowerCase().includes(N));
    }), $ = P(() => {
      if (!v.value.trim()) return c.value;
      const N = v.value.toLowerCase();
      return c.value.filter((q) => q.filename.toLowerCase().includes(N));
    }), I = P(() => {
      const N = {};
      for (const ce of S.value) {
        const de = ce.type || "other";
        N[de] || (N[de] = []), N[de].push(ce);
      }
      const q = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(N).sort(([ce], [de]) => {
        const Q = q.indexOf(ce), te = q.indexOf(de);
        return Q >= 0 && te >= 0 ? Q - te : Q >= 0 ? -1 : te >= 0 ? 1 : ce.localeCompare(de);
      }).map(([ce, de]) => ({ type: ce, models: de }));
    });
    function E(N) {
      if (!N) return "Unknown";
      const q = N / (1024 * 1024);
      return q >= 1024 ? `${(q / 1024).toFixed(1)} GB` : `${q.toFixed(0)} MB`;
    }
    function M(N) {
      w.value = N.hash || N.filename;
    }
    function D(N) {
      n("navigate", "model-index");
    }
    function O(N) {
      alert(`Download functionality not yet implemented for ${N}`);
    }
    async function F() {
      d.value = !0, f.value = null;
      try {
        const N = await a();
        r.value = N, c.value = [];
        const q = await l();
        u.value = q.environment || "production";
      } catch (N) {
        f.value = N instanceof Error ? N.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return ut(F), (N, q) => (o(), i(B, null, [
      b(Ht, null, {
        header: h(() => [
          b(qt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: q[1] || (q[1] = (ce) => p.value = !0)
          }, {
            actions: h(() => [
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: q[0] || (q[0] = (ce) => g.value = !0)
              }, {
                default: h(() => [...q[6] || (q[6] = [
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
            "onUpdate:modelValue": q[2] || (q[2] = (ce) => v.value = ce),
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
            onRetry: F
          }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
            r.value.length ? (o(), R(Pl, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                x(" Total: " + m(r.value.length) + " models • " + m(E(C.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (o(!0), i(B, null, ye(I.value, (ce) => (o(), R(Nt, {
              key: ce.type,
              title: ce.type.toUpperCase(),
              count: ce.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye(ce.models, (de) => (o(), R(Yt, {
                  key: de.hash || de.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...q[7] || (q[7] = [
                    x("📦", -1)
                  ])]),
                  title: h(() => [
                    x(m(de.filename), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(E(de.size)), 1)
                  ]),
                  details: h(() => [
                    b(Tt, {
                      label: "Used by:",
                      value: (de.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    b(Tt, {
                      label: "Path:",
                      value: de.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => M(de)
                    }, {
                      default: h(() => [...q[8] || (q[8] = [
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
            $.value.length ? (o(), R(Nt, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye($.value, (ce) => (o(), R(Yt, {
                  key: ce.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...q[9] || (q[9] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(ce.filename), 1)
                  ]),
                  subtitle: h(() => [...q[10] || (q[10] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var de;
                    return [
                      b(Tt, {
                        label: "Required by:",
                        value: ((de = ce.workflow_names) == null ? void 0 : de.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    b(Pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (de) => O(ce.filename)
                    }, {
                      default: h(() => [...q[11] || (q[11] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (de) => D(ce.filename)
                    }, {
                      default: h(() => [...q[12] || (q[12] = [
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
            !S.value.length && !$.value.length ? (o(), R(Es, {
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
        onClose: q[3] || (q[3] = (ce) => p.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            q[13] || (q[13] = x(" These are models currently used by workflows in ", -1)),
            s("strong", null, '"' + m(u.value) + '"', 1),
            q[14] || (q[14] = x(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          b(Pe, {
            variant: "primary",
            onClick: k
          }, {
            default: h(() => [...q[15] || (q[15] = [
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
        onClose: q[4] || (q[4] = (ce) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      b(yc, {
        show: g.value,
        onClose: q[5] || (q[5] = (ce) => g.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), $$ = /* @__PURE__ */ Te(b$, [["__scopeId", "data-v-af3ca736"]]), C$ = {
  key: 0,
  class: "indexing-progress"
}, x$ = { class: "progress-info" }, S$ = { class: "progress-label" }, I$ = { class: "progress-count" }, E$ = { class: "progress-bar" }, T$ = { class: "directory-modal-body" }, M$ = { class: "input-group" }, P$ = { class: "current-path" }, R$ = { class: "input-group" }, D$ = /* @__PURE__ */ Ee({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = mt(), c = t, u = _([]), d = _(!1), f = _(!1), v = _(null), p = _(""), w = _(!1), g = _(null), k = _(!1), C = _(null), S = _(""), $ = _(!1), I = _(!1), E = _(null), M = P(
      () => u.value.reduce((te, W) => te + (W.size || 0), 0)
    ), D = P(() => {
      if (!p.value.trim()) return u.value;
      const te = p.value.toLowerCase();
      return u.value.filter((W) => {
        const A = W, V = W.sha256 || A.sha256_hash || "";
        return W.filename.toLowerCase().includes(te) || V.toLowerCase().includes(te);
      });
    }), O = P(() => {
      const te = {};
      for (const A of D.value) {
        const V = A.type || "other";
        te[V] || (te[V] = []), te[V].push(A);
      }
      const W = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(te).sort(([A], [V]) => {
        const ve = W.indexOf(A), se = W.indexOf(V);
        return ve >= 0 && se >= 0 ? ve - se : ve >= 0 ? -1 : se >= 0 ? 1 : A.localeCompare(V);
      }).map(([A, V]) => ({ type: A, models: V }));
    });
    function F(te) {
      if (!te) return "Unknown";
      const W = 1024 * 1024 * 1024, A = 1024 * 1024;
      return te >= W ? `${(te / W).toFixed(1)} GB` : te >= A ? `${(te / A).toFixed(0)} MB` : `${(te / 1024).toFixed(0)} KB`;
    }
    function N(te) {
      g.value = te.hash || te.filename;
    }
    async function q() {
      f.value = !0, v.value = null;
      try {
        const te = await a();
        await de(), te.changes > 0 && console.log(`Scan complete: ${te.changes} changes detected`);
      } catch (te) {
        v.value = te instanceof Error ? te.message : "Failed to scan models";
      } finally {
        f.value = !1;
      }
    }
    async function ce() {
      if (S.value.trim()) {
        $.value = !0, v.value = null;
        try {
          const te = await r(S.value.trim());
          C.value = te.path, k.value = !1, S.value = "", await de(), console.log(`Directory changed: ${te.models_indexed} models indexed`), c("refresh");
        } catch (te) {
          v.value = te instanceof Error ? te.message : "Failed to change directory";
        } finally {
          $.value = !1;
        }
      }
    }
    async function de() {
      d.value = !0, v.value = null;
      try {
        u.value = await n();
      } catch (te) {
        v.value = te instanceof Error ? te.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function Q() {
      try {
        const te = await l();
        C.value = te.path;
      } catch {
      }
    }
    return ut(() => {
      de(), Q();
    }), (te, W) => (o(), i(B, null, [
      b(Ht, null, {
        header: h(() => [
          b(qt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: W[2] || (W[2] = (A) => w.value = !0)
          }, {
            actions: h(() => [
              b(Pe, {
                variant: "primary",
                size: "sm",
                disabled: f.value,
                onClick: q
              }, {
                default: h(() => [
                  x(m(f.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: W[0] || (W[0] = (A) => k.value = !0)
              }, {
                default: h(() => [...W[10] || (W[10] = [
                  x(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: W[1] || (W[1] = (A) => I.value = !0)
              }, {
                default: h(() => [...W[11] || (W[11] = [
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
          E.value ? (o(), i("div", C$, [
            s("div", x$, [
              s("span", S$, m(E.value.message), 1),
              s("span", I$, m(E.value.current) + "/" + m(E.value.total), 1)
            ]),
            s("div", E$, [
              s("div", {
                class: "progress-fill",
                style: zt({ width: `${E.value.current / E.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          b($n, {
            modelValue: p.value,
            "onUpdate:modelValue": W[3] || (W[3] = (A) => p.value = A),
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
            onRetry: de
          }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
            u.value.length ? (o(), R(Pl, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                x(" Total: " + m(u.value.length) + " models • " + m(F(M.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (o(!0), i(B, null, ye(O.value, (A) => (o(), R(Nt, {
              key: A.type,
              title: A.type.toUpperCase(),
              count: A.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye(A.models, (V) => (o(), R(Yt, {
                  key: V.sha256 || V.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...W[12] || (W[12] = [
                    x("📦", -1)
                  ])]),
                  title: h(() => [
                    x(m(V.filename), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(F(V.size)), 1)
                  ]),
                  details: h(() => [
                    b(Tt, {
                      label: "Hash:",
                      value: V.hash ? V.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ve) => N(V)
                    }, {
                      default: h(() => [...W[13] || (W[13] = [
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
        onClose: W[4] || (W[4] = (A) => w.value = !1)
      }, {
        content: h(() => [...W[14] || (W[14] = [
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
        onClose: W[5] || (W[5] = (A) => g.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      k.value ? (o(), R(Mt, {
        key: 1,
        title: "Change Models Directory",
        size: "md",
        "overlay-z-index": 10010,
        onClose: W[8] || (W[8] = (A) => k.value = !1)
      }, {
        body: h(() => [
          s("div", T$, [
            s("div", M$, [
              W[15] || (W[15] = s("label", null, "Current Directory", -1)),
              s("code", P$, m(C.value || "Not set"), 1)
            ]),
            s("div", R$, [
              W[16] || (W[16] = s("label", null, "New Directory Path", -1)),
              b(Rt, {
                modelValue: S.value,
                "onUpdate:modelValue": W[6] || (W[6] = (A) => S.value = A),
                placeholder: "/path/to/models"
              }, null, 8, ["modelValue"])
            ]),
            W[17] || (W[17] = s("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
          ])
        ]),
        footer: h(() => [
          b(Ue, {
            variant: "secondary",
            onClick: W[7] || (W[7] = (A) => k.value = !1)
          }, {
            default: h(() => [...W[18] || (W[18] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Ue, {
            variant: "primary",
            disabled: !S.value.trim() || $.value,
            loading: $.value,
            onClick: ce
          }, {
            default: h(() => [
              x(m($.value ? "Indexing..." : "Change Directory"), 1)
            ]),
            _: 1
          }, 8, ["disabled", "loading"])
        ]),
        _: 1
      })) : y("", !0),
      b(yc, {
        show: I.value,
        onClose: W[9] || (W[9] = (A) => I.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), N$ = /* @__PURE__ */ Te(D$, [["__scopeId", "data-v-9fca048b"]]), L$ = { class: "node-details" }, U$ = { class: "status-row" }, O$ = {
  key: 0,
  class: "detail-row"
}, A$ = { class: "value" }, z$ = { class: "detail-row" }, F$ = { class: "value" }, V$ = {
  key: 1,
  class: "detail-row"
}, B$ = { class: "value mono" }, W$ = {
  key: 2,
  class: "detail-row"
}, G$ = ["href"], j$ = {
  key: 3,
  class: "detail-row"
}, H$ = { class: "value mono small" }, q$ = { class: "detail-row" }, K$ = {
  key: 0,
  class: "value"
}, J$ = {
  key: 1,
  class: "workflow-list"
}, Q$ = /* @__PURE__ */ Ee({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = P(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = P(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = P(() => ({
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
        s("div", L$, [
          s("div", U$, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Be(["status-badge", l.value])
            }, m(r.value), 3)
          ]),
          e.node.version ? (o(), i("div", O$, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", A$, m(e.node.source === "development" ? "" : "v") + m(e.node.version), 1)
          ])) : y("", !0),
          s("div", z$, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", F$, m(c.value), 1)
          ]),
          e.node.registry_id ? (o(), i("div", V$, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", B$, m(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (o(), i("div", W$, [
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
            ], 8, G$)
          ])) : y("", !0),
          e.node.download_url ? (o(), i("div", j$, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", H$, m(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", q$, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (o(), i("span", K$, " Not used in any workflows ")) : (o(), i("div", J$, [
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
}), Y$ = /* @__PURE__ */ Te(Q$, [["__scopeId", "data-v-b342f626"]]), X$ = { class: "dialog-message" }, Z$ = {
  key: 0,
  class: "dialog-details"
}, eC = {
  key: 1,
  class: "dialog-warning"
}, tC = /* @__PURE__ */ Ee({
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
        s("p", X$, m(e.message), 1),
        e.details && e.details.length ? (o(), i("div", Z$, [
          (o(!0), i(B, null, ye(e.details, (a, l) => (o(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + m(a), 1))), 128))
        ])) : y("", !0),
        e.warning ? (o(), i("p", eC, [
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
}), Dl = /* @__PURE__ */ Te(tC, [["__scopeId", "data-v-3670b9f5"]]), sC = { class: "mismatch-warning" }, nC = { class: "version-mismatch" }, oC = { class: "version-actual" }, aC = { class: "version-expected" }, lC = { style: { color: "var(--cg-color-warning)" } }, iC = { style: { color: "var(--cg-color-warning)" } }, rC = {
  key: 0,
  class: "community-status-badge"
}, cC = { key: 0 }, uC = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, dC = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, mC = { class: "criticality-control" }, fC = ["value", "disabled", "onChange"], vC = /* @__PURE__ */ Ee({
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
    }), p = _(!1), w = _(null), g = _(""), k = _(!1), C = _(null), S = _(/* @__PURE__ */ new Set()), $ = _(/* @__PURE__ */ new Set()), I = _(null), E = P(() => {
      if (!g.value.trim()) return v.value.nodes;
      const ge = g.value.toLowerCase();
      return v.value.nodes.filter(
        (we) => {
          var T, U;
          return we.name.toLowerCase().includes(ge) || ((T = we.description) == null ? void 0 : T.toLowerCase().includes(ge)) || ((U = we.repository) == null ? void 0 : U.toLowerCase().includes(ge));
        }
      );
    }), M = P(
      () => E.value.filter((ge) => ge.installed && ge.tracked)
    ), D = P(
      () => E.value.filter((ge) => !ge.installed && ge.tracked && !ge.issue_type)
    ), O = P(
      () => E.value.filter((ge) => ge.installed && !ge.tracked)
    ), F = P(
      () => E.value.filter((ge) => ge.issue_type === "version_gated")
    ), N = P(
      () => E.value.filter((ge) => ge.issue_type === "uninstallable")
    );
    function q(ge) {
      return ge.registry_id || ge.name;
    }
    function ce(ge) {
      return S.value.has(q(ge));
    }
    async function de(ge, we) {
      const T = ge.registry_id;
      if (!T) {
        a("toast", `Node "${ge.name}" has no package id for install`, "warning");
        return;
      }
      if (we === "git" && !ge.repository) {
        a("toast", `Node "${ge.name}" has no repository URL for git install`, "warning");
        return;
      }
      const U = {
        id: T,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      we === "git" && ge.repository && (U.repository = ge.repository, U.install_source = "git"), await d(U), S.value.add(q(ge)), a("toast", `✓ Queued install for "${ge.name}"`, "success");
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
    const te = P(() => n.versionMismatches.length > 0);
    function W(ge) {
      return !ge.used_in_workflows || ge.used_in_workflows.length === 0 ? "Not used in any workflows" : ge.used_in_workflows.length === 1 ? ge.used_in_workflows[0] : `${ge.used_in_workflows.length} workflows`;
    }
    function A(ge) {
      return ge.criticality === "optional" ? "optional" : "required";
    }
    function V(ge) {
      return $.value.has(ge.name);
    }
    async function ve(ge, we) {
      const T = we.target, U = A(ge), ie = T.value;
      if (ie !== U) {
        $.value = new Set($.value).add(ge.name), ge.criticality = ie;
        try {
          const Ie = await f(ge.name, ie);
          if (Ie.status !== "success") {
            ge.criticality = U, a("toast", Ie.message || `Failed to update "${ge.name}" criticality`, "error");
            return;
          }
          a("toast", `Marked "${ge.name}" as ${ie}`, "success");
        } catch (Ie) {
          ge.criticality = U, T.value = U, a("toast", `Error updating criticality: ${Ie instanceof Error ? Ie.message : "Unknown error"}`, "error");
        } finally {
          const Ie = new Set($.value);
          Ie.delete(ge.name), $.value = Ie;
        }
      }
    }
    function se(ge) {
      return ge.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function fe(ge) {
      return ge.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function ne(ge) {
      return ge.registry_id ? `Community-mapped package: ${ge.registry_id}` : "Community-mapped package";
    }
    function K(ge) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function oe(ge) {
      C.value = ge;
    }
    function ae() {
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
            p.value = !0, await de(ge, "registry");
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
            p.value = !0, await de(ge, "git");
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
                onClick: ae
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
            te.value ? (o(), R(Nt, {
              key: 0,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                s("div", sC, [
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
                    s("span", nC, [
                      s("span", oC, m(T.actual), 1),
                      we[10] || (we[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", aC, m(T.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "warning",
                      size: "sm",
                      onClick: we[2] || (we[2] = (U) => a("repair-environment"))
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
            F.value.length ? (o(), R(Nt, {
              key: 1,
              title: "BLOCKED",
              count: F.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye(F.value, (T) => (o(), R(Yt, {
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
                    s("span", lC, m(se(T)), 1)
                  ]),
                  details: h(() => [
                    b(Tt, {
                      label: "Guidance:",
                      value: T.issue_guidance || fe(T)
                    }, null, 8, ["value"]),
                    b(Tt, {
                      label: "Used by:",
                      value: W(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => oe(T)
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
                    s("span", iC, m(ne(T)), 1)
                  ]),
                  details: h(() => [
                    b(Tt, {
                      label: "Guidance:",
                      value: T.issue_guidance || K(T)
                    }, null, 8, ["value"]),
                    b(Tt, {
                      label: "Used by:",
                      value: W(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => oe(T)
                    }, {
                      default: h(() => [...we[15] || (we[15] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    ce(T) ? (o(), i("span", rC, "Queued")) : (o(), i(B, { key: 1 }, [
                      T.registry_id ? (o(), R(Pe, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (U) => Le(T)
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
                        onClick: (U) => ke(T)
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
            O.value.length ? (o(), R(Nt, {
              key: 3,
              title: "UNTRACKED",
              count: O.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye(O.value, (T) => (o(), R(Yt, {
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
                      value: W(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => oe(T)
                    }, {
                      default: h(() => [...we[20] || (we[20] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (U) => Me(T.name)
                    }, {
                      default: h(() => [...we[21] || (we[21] = [
                        x(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (U) => pe(T.name)
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
            M.value.length ? (o(), R(Nt, {
              key: 4,
              title: "INSTALLED",
              count: M.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye(M.value, (T) => (o(), R(Yt, {
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
                    T.version ? (o(), i("span", cC, m(T.source === "development" ? "" : "v") + m(T.version), 1)) : (o(), i("span", uC, "version unknown")),
                    s("span", dC, " • " + m(Q(T.source)), 1)
                  ]),
                  details: h(() => [
                    b(Tt, {
                      label: "Used by:",
                      value: W(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => oe(T)
                    }, {
                      default: h(() => [...we[23] || (we[23] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    s("label", mC, [
                      we[25] || (we[25] = s("span", null, "Readiness", -1)),
                      s("select", {
                        class: "criticality-select",
                        value: A(T),
                        disabled: V(T),
                        onChange: (U) => ve(T, U)
                      }, [...we[24] || (we[24] = [
                        s("option", { value: "required" }, "Required", -1),
                        s("option", { value: "optional" }, "Optional", -1)
                      ])], 40, fC)
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
                      value: W(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => oe(T)
                    }, {
                      default: h(() => [...we[28] || (we[28] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (U) => ze(T.name)
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
            !M.value.length && !D.value.length && !F.value.length && !N.value.length && !O.value.length ? (o(), R(Es, {
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
      C.value ? (o(), R(Y$, {
        key: 0,
        node: C.value,
        onClose: we[5] || (we[5] = (T) => C.value = null)
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
}), pC = /* @__PURE__ */ Te(vC, [["__scopeId", "data-v-edfa1c86"]]), gC = { class: "setting-info" }, hC = { class: "setting-label" }, yC = {
  key: 0,
  class: "required-marker"
}, wC = {
  key: 0,
  class: "setting-description"
}, _C = { class: "setting-control" }, kC = /* @__PURE__ */ Ee({
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
      s("div", gC, [
        s("div", hC, [
          x(m(e.label) + " ", 1),
          e.required ? (o(), i("span", yC, "*")) : y("", !0)
        ]),
        e.description ? (o(), i("div", wC, m(e.description), 1)) : y("", !0)
      ]),
      s("div", _C, [
        ct(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), Sn = /* @__PURE__ */ Te(kC, [["__scopeId", "data-v-3e106b1c"]]), bC = ["type", "value", "placeholder", "disabled"], $C = /* @__PURE__ */ Ee({
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
    }, null, 42, bC));
  }
}), Mn = /* @__PURE__ */ Te($C, [["__scopeId", "data-v-0380d08f"]]), CC = { class: "toggle" }, xC = ["checked", "disabled"], SC = /* @__PURE__ */ Ee({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (o(), i("label", CC, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: n[0] || (n[0] = (a) => t.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, xC),
      n[1] || (n[1] = s("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Di = /* @__PURE__ */ Te(SC, [["__scopeId", "data-v-71c0f550"]]), Ha = "ComfyGit.Deploy.GitHubPAT";
function wc(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function IC(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function EC() {
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
    isRemoteHttps: IC
  };
}
const TC = { class: "workspace-settings-content" }, MC = { class: "settings-section" }, PC = { class: "path-setting" }, RC = { class: "path-value" }, DC = { class: "path-setting" }, NC = { class: "path-value" }, LC = { class: "settings-section" }, UC = { class: "token-setting" }, OC = {
  key: 0,
  class: "token-warning"
}, AC = { class: "token-actions" }, zC = { class: "settings-section" }, FC = { class: "settings-section" }, VC = /* @__PURE__ */ Ee({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: n }) {
    const a = e, l = n, { getConfig: r, updateConfig: c, getRemotes: u, testGitAuth: d } = mt(), { getToken: f, setToken: v, clearToken: p, hasToken: w } = EC(), g = _(!1), k = _(null), C = _(null), S = _(null), $ = _(null), I = _(""), E = _(""), M = _(""), D = _(""), O = _(!1), F = _(!1), N = _(!1), q = _(""), ce = _(!1), de = _(!1), Q = _(null), te = _(!1), W = _(!0);
    function A(ze) {
      return ze.join(" ");
    }
    function V(ze) {
      return ze.trim() ? ze.trim().split(/\s+/) : [];
    }
    const ve = P(() => {
      if (!$.value) return !1;
      const ze = O.value, Le = F.value, ke = N.value, De = D.value !== A($.value.comfyui_extra_args || []);
      return ze || Le || ke || De;
    }), se = P(() => w());
    async function fe() {
      var ze;
      g.value = !0, k.value = null;
      try {
        S.value = await r(a.workspacePath || void 0), $.value = { ...S.value }, I.value = S.value.civitai_api_key || "", E.value = S.value.huggingface_token || "", D.value = A(S.value.comfyui_extra_args || []), M.value = f() || "", q.value = M.value, O.value = !1, F.value = !1, N.value = !1, Q.value = null;
        const Le = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        te.value = Le !== "false", W.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const De = (ze = (await u()).remotes) == null ? void 0 : ze.find((ge) => ge.name === "origin");
          ce.value = !!(De && wc(De.url));
        } catch {
          ce.value = !1;
        }
      } catch (Le) {
        k.value = Le instanceof Error ? Le.message : "Failed to load settings";
      } finally {
        g.value = !1;
      }
    }
    async function ne() {
      var ze;
      C.value = null;
      try {
        const Le = {};
        O.value && (Le.civitai_api_key = I.value || null), F.value && (Le.huggingface_token = E.value || null), D.value !== A(((ze = $.value) == null ? void 0 : ze.comfyui_extra_args) || []) && (Le.comfyui_extra_args = V(D.value)), await c(Le, a.workspacePath || void 0), N.value && (M.value ? v(M.value) : p()), await fe(), C.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          C.value = null;
        }, 3e3);
      } catch (Le) {
        const ke = Le instanceof Error ? Le.message : "Failed to save settings";
        C.value = { type: "error", message: ke }, l("error", ke);
      }
    }
    function K() {
      $.value && (I.value = $.value.civitai_api_key || "", E.value = $.value.huggingface_token || "", D.value = A($.value.comfyui_extra_args || []), M.value = q.value, O.value = !1, F.value = !1, N.value = !1, Q.value = null, C.value = null);
    }
    async function oe() {
      if (M.value) {
        de.value = !0, Q.value = null;
        try {
          const ze = await d(M.value);
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
          de.value = !1;
        }
      }
    }
    function ae() {
      M.value = "", N.value = !0, Q.value = null;
    }
    function Me(ze) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(ze)), console.log("[ComfyGit] Auto-refresh setting saved:", ze);
    }
    function pe(ze) {
      ze ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", ze ? "enabled" : "disabled");
    }
    return t({
      saveSettings: ne,
      resetSettings: K,
      hasChanges: ve,
      loadSettings: fe
    }), ut(fe), (ze, Le) => (o(), i("div", TC, [
      g.value ? (o(), R(zs, {
        key: 0,
        message: "Loading workspace settings..."
      })) : k.value ? (o(), R(Fs, {
        key: 1,
        message: k.value,
        retry: !0,
        onRetry: fe
      }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
        b(Nt, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var ke, De;
            return [
              s("div", MC, [
                s("div", PC, [
                  Le[9] || (Le[9] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  Le[10] || (Le[10] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", RC, m(((ke = S.value) == null ? void 0 : ke.workspace_path) || "Loading..."), 1)
                ]),
                s("div", DC, [
                  Le[11] || (Le[11] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  Le[12] || (Le[12] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", NC, m(((De = S.value) == null ? void 0 : De.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        b(Nt, { title: "API CREDENTIALS" }, {
          default: h(() => [
            s("div", LC, [
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
                    onInput: Le[1] || (Le[1] = (ke) => O.value = !0)
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
                    onInput: Le[3] || (Le[3] = (ke) => F.value = !0)
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
                  s("div", UC, [
                    b(Mn, {
                      modelValue: M.value,
                      "onUpdate:modelValue": Le[4] || (Le[4] = (ke) => M.value = ke),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: Le[5] || (Le[5] = (ke) => N.value = !0)
                    }, null, 8, ["modelValue"]),
                    ce.value ? (o(), i("div", OC, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : y("", !0),
                    Le[15] || (Le[15] = s("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    s("div", AC, [
                      b(Pe, {
                        variant: "ghost",
                        size: "xs",
                        loading: de.value,
                        disabled: !M.value || de.value,
                        onClick: oe
                      }, {
                        default: h(() => [...Le[13] || (Le[13] = [
                          x(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      se.value ? (o(), R(Pe, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: ae
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
            s("div", zC, [
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
            s("div", FC, [
              b(Sn, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  b(Di, {
                    modelValue: te.value,
                    "onUpdate:modelValue": [
                      Le[7] || (Le[7] = (ke) => te.value = ke),
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
                    modelValue: W.value,
                    "onUpdate:modelValue": [
                      Le[8] || (Le[8] = (ke) => W.value = ke),
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
        C.value ? (o(), R(Pl, {
          key: 0,
          variant: (C.value.type === "success", "compact")
        }, {
          default: h(() => [
            s("span", {
              style: zt({ color: C.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, m(C.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), _c = /* @__PURE__ */ Te(VC, [["__scopeId", "data-v-f1bdc574"]]), BC = /* @__PURE__ */ Ee({
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
}), WC = { class: "env-title" }, GC = {
  key: 0,
  class: "current-badge"
}, jC = {
  key: 0,
  class: "branch-info"
}, HC = /* @__PURE__ */ Ee({
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
        s("div", WC, [
          s("span", null, m(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (o(), i("span", GC, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (o(), i("span", jC, [
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
}), qC = /* @__PURE__ */ Te(HC, [["__scopeId", "data-v-9231917a"]]), KC = { class: "env-details" }, JC = { class: "status-row" }, QC = {
  key: 0,
  class: "detail-row"
}, YC = { class: "value mono" }, XC = {
  key: 1,
  class: "detail-row"
}, ZC = { class: "value mono small" }, ex = { class: "collapsible-section" }, tx = { class: "value" }, sx = {
  key: 0,
  class: "collapsible-body"
}, nx = { class: "item-list" }, ox = { class: "item-name" }, ax = { class: "item-name" }, lx = { class: "item-name" }, ix = { class: "item-name" }, rx = {
  key: 0,
  class: "empty-list"
}, cx = { class: "collapsible-section" }, ux = { class: "value" }, dx = {
  key: 0,
  class: "collapsible-body"
}, mx = { class: "item-list" }, fx = { class: "item-name" }, vx = {
  key: 0,
  class: "item-meta"
}, px = {
  key: 0,
  class: "empty-list"
}, gx = { class: "collapsible-section" }, hx = { class: "value" }, yx = {
  key: 0,
  class: "missing-count"
}, wx = {
  key: 0,
  class: "collapsible-body"
}, _x = { class: "item-list" }, kx = { class: "model-row" }, bx = { class: "item-name" }, $x = { class: "model-meta" }, Cx = { class: "item-meta" }, xx = {
  key: 0,
  class: "item-meta"
}, Sx = {
  key: 0,
  class: "empty-list"
}, Ix = {
  key: 2,
  class: "section-divider"
}, Ex = {
  key: 3,
  class: "detail-row"
}, Tx = { class: "value" }, Mx = { class: "footer-actions" }, Px = /* @__PURE__ */ Ee({
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
    const c = P(() => {
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
        var v, p, w, g, k, C, S, $, I, E, M, D, O, F;
        return [
          s("div", KC, [
            s("div", JC, [
              f[7] || (f[7] = s("span", { class: "label" }, "Status:", -1)),
              s("span", {
                class: Be(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, m(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (o(), i("div", QC, [
              f[8] || (f[8] = s("span", { class: "label" }, "Branch:", -1)),
              s("span", YC, m(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (o(), i("div", XC, [
              f[9] || (f[9] = s("span", { class: "label" }, "Path:", -1)),
              s("span", ZC, m(e.environment.path), 1)
            ])) : y("", !0),
            f[18] || (f[18] = s("div", { class: "section-divider" }, null, -1)),
            s("div", ex, [
              s("div", {
                class: "collapsible-header",
                onClick: f[0] || (f[0] = (N) => r("workflows"))
              }, [
                f[10] || (f[10] = s("span", { class: "label" }, "Workflows:", -1)),
                s("span", tx, m(((v = e.detail) == null ? void 0 : v.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (o(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (o(), i("div", sx, [
                s("div", nx, [
                  (o(!0), i(B, null, ye(e.detail.workflows.synced, (N) => (o(), i("div", {
                    key: "synced-" + N,
                    class: "list-item"
                  }, [
                    s("span", ox, m(N), 1),
                    f[11] || (f[11] = s("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (o(!0), i(B, null, ye(e.detail.workflows.new, (N) => (o(), i("div", {
                    key: "new-" + N,
                    class: "list-item"
                  }, [
                    s("span", ax, m(N), 1),
                    f[12] || (f[12] = s("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (o(!0), i(B, null, ye(e.detail.workflows.modified, (N) => (o(), i("div", {
                    key: "mod-" + N,
                    class: "list-item"
                  }, [
                    s("span", lx, m(N), 1),
                    f[13] || (f[13] = s("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (o(!0), i(B, null, ye(e.detail.workflows.deleted, (N) => (o(), i("div", {
                    key: "del-" + N,
                    class: "list-item"
                  }, [
                    s("span", ix, m(N), 1),
                    f[14] || (f[14] = s("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (o(), i("div", rx, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            s("div", cx, [
              s("div", {
                class: "collapsible-header",
                onClick: f[1] || (f[1] = (N) => r("nodes"))
              }, [
                f[15] || (f[15] = s("span", { class: "label" }, "Nodes:", -1)),
                s("span", ux, m(((g = e.detail) == null ? void 0 : g.node_count) ?? e.environment.node_count), 1),
                (k = e.detail) != null && k.nodes ? (o(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (C = e.detail) != null && C.nodes && l.value.has("nodes") ? (o(), i("div", dx, [
                s("div", mx, [
                  (o(!0), i(B, null, ye(e.detail.nodes, (N) => (o(), i("div", {
                    key: N.name,
                    class: "list-item"
                  }, [
                    s("span", fx, m(N.name), 1),
                    N.version ? (o(), i("span", vx, m(N.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (o(), i("div", px, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            s("div", gx, [
              s("div", {
                class: "collapsible-header",
                onClick: f[2] || (f[2] = (N) => r("models"))
              }, [
                f[16] || (f[16] = s("span", { class: "label" }, "Models:", -1)),
                s("span", hx, [
                  x(m(((S = e.detail) == null ? void 0 : S.model_count) ?? e.environment.model_count) + " ", 1),
                  (I = ($ = e.detail) == null ? void 0 : $.models) != null && I.missing.length ? (o(), i("span", yx, "(" + m(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (E = e.detail) != null && E.models ? (o(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (M = e.detail) != null && M.models && l.value.has("models") ? (o(), i("div", wx, [
                s("div", _x, [
                  (o(!0), i(B, null, ye(e.detail.models.missing, (N) => (o(), i("div", {
                    key: N.filename,
                    class: "list-item model-item"
                  }, [
                    s("div", kx, [
                      s("span", bx, m(N.filename), 1),
                      s("span", {
                        class: Be(["criticality-badge", N.criticality])
                      }, m(N.criticality), 3)
                    ]),
                    s("div", $x, [
                      s("span", Cx, m(N.category), 1),
                      N.workflow_names.length ? (o(), i("span", xx, " used by: " + m(N.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (o(), i("div", Sx, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (D = e.detail) != null && D.created_at || e.environment.created_at ? (o(), i("div", Ix)) : y("", !0),
            (O = e.detail) != null && O.created_at || e.environment.created_at ? (o(), i("div", Ex, [
              f[17] || (f[17] = s("span", { class: "label" }, "Created:", -1)),
              s("span", Tx, m(u(((F = e.detail) == null ? void 0 : F.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        s("div", Mx, [
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
}), Rx = /* @__PURE__ */ Te(Px, [["__scopeId", "data-v-750671f5"]]), kc = [
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
], $c = "auto", Dx = { class: "progress-bar" }, Nx = /* @__PURE__ */ Ee({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, n = P(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (a, l) => (o(), i("div", Dx, [
      s("div", {
        class: Be(["progress-fill", e.variant]),
        style: zt({ width: n.value })
      }, null, 6)
    ]));
  }
}), Cc = /* @__PURE__ */ Te(Nx, [["__scopeId", "data-v-1beb0512"]]), Lx = { class: "task-progress" }, Ux = { class: "progress-info" }, Ox = { class: "progress-percentage" }, Ax = { class: "progress-message" }, zx = {
  key: 0,
  class: "progress-steps"
}, Fx = { class: "step-icon" }, Vx = { class: "step-label" }, Bx = /* @__PURE__ */ Ee({
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
    return (l, r) => (o(), i("div", Lx, [
      b(Cc, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", Ux, [
        s("span", Ox, m(e.progress) + "%", 1),
        s("span", Ax, m(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (o(), i("div", zx, [
        (o(!0), i(B, null, ye(e.steps, (c) => (o(), i("div", {
          key: c.id,
          class: Be(["step", n(c.id)])
        }, [
          s("span", Fx, m(a(c.id)), 1),
          s("span", Vx, m(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), ra = /* @__PURE__ */ Te(Bx, [["__scopeId", "data-v-9d1de66c"]]), Wx = {
  key: 0,
  class: "create-env-form"
}, Gx = { class: "form-field" }, jx = { class: "input-wrapper" }, Hx = {
  key: 0,
  class: "validating-indicator"
}, qx = {
  key: 1,
  class: "valid-indicator"
}, Kx = {
  key: 0,
  class: "field-error"
}, Jx = { class: "form-field" }, Qx = ["value"], Yx = { class: "form-field" }, Xx = ["disabled"], Zx = ["value"], e3 = { class: "form-field" }, t3 = ["value"], s3 = { class: "form-field form-field--checkbox" }, n3 = { class: "form-checkbox" }, o3 = {
  key: 1,
  class: "create-env-progress"
}, a3 = { class: "creating-intro" }, l3 = {
  key: 0,
  class: "progress-warning"
}, i3 = {
  key: 1,
  class: "create-error"
}, r3 = { class: "error-message" }, c3 = {
  key: 1,
  class: "footer-status"
}, u3 = 10, d3 = /* @__PURE__ */ Ee({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const n = t, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = mt(), u = _(""), d = _(bc), f = _("latest"), v = _($c), p = _(!1), w = _(null), g = _(!1), k = _(!1);
    let C = null, S = 0;
    const $ = P(() => !!u.value.trim() && k.value && !w.value && !g.value && !M.value), I = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), E = _(!1), M = _(!1), D = _({
      progress: 0,
      message: ""
    });
    let O = null, F = 0;
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
    ], q = _(null);
    $t(u, (se) => {
      k.value = !1, C && (clearTimeout(C), C = null);
      const fe = se.trim();
      if (!fe) {
        w.value = null, g.value = !1;
        return;
      }
      g.value = !0, C = setTimeout(() => {
        ce(fe);
      }, 400);
    });
    async function ce(se, fe = !1) {
      const ne = se.trim();
      if (!ne)
        return k.value = !1, g.value = !1, w.value = fe ? "Environment name is required" : null, !1;
      const K = ++S;
      g.value = !0;
      try {
        const oe = await c(ne);
        return K !== S ? !1 : (w.value = oe.valid ? null : oe.error || "Invalid name", k.value = !!oe.valid, !!oe.valid);
      } catch {
        return K !== S || (w.value = "Failed to validate name", k.value = !1), !1;
      } finally {
        K === S && (g.value = !1);
      }
    }
    async function de() {
      C && (clearTimeout(C), C = null), await ce(u.value, !0);
    }
    function Q() {
      M.value || n("close");
    }
    async function te() {
      const se = u.value.trim();
      if (!se) {
        w.value = "Environment name is required";
        return;
      }
      if (C && (clearTimeout(C), C = null), !!await ce(se, !0)) {
        M.value = !0, D.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const ne = {
            name: se,
            python_version: d.value,
            comfyui_version: f.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, K = await l(ne);
          K.status === "started" ? W() : K.status === "error" && (D.value = {
            progress: 0,
            message: K.message || "Failed to start creation",
            error: K.message
          });
        } catch (ne) {
          D.value = {
            progress: 0,
            message: ne instanceof Error ? ne.message : "Unknown error",
            error: ne instanceof Error ? ne.message : "Unknown error"
          };
        }
      }
    }
    function W() {
      O || (F = 0, O = window.setInterval(async () => {
        try {
          const se = await r();
          F = 0, D.value = {
            progress: se.progress ?? 0,
            message: se.message,
            phase: se.phase,
            error: se.error
          }, se.state === "complete" ? (A(), n("created", se.environment_name || u.value.trim(), p.value)) : se.state === "error" ? (A(), D.value.error = se.error || se.message) : se.state === "idle" && M.value && (A(), D.value.error = "Creation was interrupted. Please try again.");
        } catch {
          F++, F >= u3 && (A(), D.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function A() {
      O && (clearInterval(O), O = null);
    }
    function V() {
      M.value = !1, D.value = { progress: 0, message: "" }, n("close");
    }
    async function ve() {
      E.value = !0;
      try {
        I.value = await a();
      } catch (se) {
        console.error("Failed to load ComfyUI releases:", se);
      } finally {
        E.value = !1;
      }
    }
    return ut(async () => {
      var se;
      await Gt(), (se = q.value) == null || se.focus(), ve();
    }), Gn(() => {
      A(), C && (clearTimeout(C), C = null);
    }), (se, fe) => (o(), R(Mt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !M.value,
      onClose: Q
    }, {
      body: h(() => [
        M.value ? (o(), i("div", o3, [
          s("p", a3, [
            fe[12] || (fe[12] = x(" Creating environment ", -1)),
            s("strong", null, m(u.value), 1),
            fe[13] || (fe[13] = x("... ", -1))
          ]),
          b(ra, {
            progress: D.value.progress,
            message: D.value.message,
            "current-phase": D.value.phase,
            variant: D.value.error ? "error" : "default",
            "show-steps": !0,
            steps: N
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          D.value.error ? y("", !0) : (o(), i("p", l3, " This may take several minutes. Please wait... ")),
          D.value.error ? (o(), i("div", i3, [
            s("p", r3, m(D.value.error), 1)
          ])) : y("", !0)
        ])) : (o(), i("div", Wx, [
          s("div", Gx, [
            fe[6] || (fe[6] = s("label", { class: "form-label" }, "Name", -1)),
            s("div", jx, [
              Ot(s("input", {
                ref_key: "nameInput",
                ref: q,
                "onUpdate:modelValue": fe[0] || (fe[0] = (ne) => u.value = ne),
                type: "text",
                class: Be(["form-input", { error: !!w.value, valid: k.value }]),
                placeholder: "my-environment",
                onKeyup: Cs(te, ["enter"]),
                onBlur: de
              }, null, 34), [
                [go, u.value]
              ]),
              g.value ? (o(), i("span", Hx, "...")) : k.value ? (o(), i("span", qx, "✓")) : y("", !0)
            ]),
            w.value ? (o(), i("div", Kx, m(w.value), 1)) : y("", !0),
            fe[7] || (fe[7] = s("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          s("div", Jx, [
            fe[8] || (fe[8] = s("label", { class: "form-label" }, "Python Version", -1)),
            Ot(s("select", {
              "onUpdate:modelValue": fe[1] || (fe[1] = (ne) => d.value = ne),
              class: "form-select"
            }, [
              (o(!0), i(B, null, ye(at(kc), (ne) => (o(), i("option", {
                key: ne,
                value: ne
              }, m(ne), 9, Qx))), 128))
            ], 512), [
              [On, d.value]
            ])
          ]),
          s("div", Yx, [
            fe[9] || (fe[9] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ot(s("select", {
              "onUpdate:modelValue": fe[2] || (fe[2] = (ne) => f.value = ne),
              class: "form-select",
              disabled: E.value
            }, [
              (o(!0), i(B, null, ye(I.value, (ne) => (o(), i("option", {
                key: ne.tag_name,
                value: ne.tag_name
              }, m(ne.name), 9, Zx))), 128))
            ], 8, Xx), [
              [On, f.value]
            ])
          ]),
          s("div", e3, [
            fe[10] || (fe[10] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ot(s("select", {
              "onUpdate:modelValue": fe[3] || (fe[3] = (ne) => v.value = ne),
              class: "form-select"
            }, [
              (o(!0), i(B, null, ye(at(Nl), (ne) => (o(), i("option", {
                key: ne,
                value: ne
              }, m(ne) + m(ne === "auto" ? " (detect GPU)" : ""), 9, t3))), 128))
            ], 512), [
              [On, v.value]
            ])
          ]),
          s("div", s3, [
            s("label", n3, [
              Ot(s("input", {
                type: "checkbox",
                "onUpdate:modelValue": fe[4] || (fe[4] = (ne) => p.value = ne)
              }, null, 512), [
                [ia, p.value]
              ]),
              fe[11] || (fe[11] = s("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        M.value ? (o(), i(B, { key: 1 }, [
          D.value.error ? (o(), R(Ue, {
            key: 0,
            variant: "secondary",
            onClick: V
          }, {
            default: h(() => [...fe[16] || (fe[16] = [
              x(" Close ", -1)
            ])]),
            _: 1
          })) : (o(), i("span", c3, " Creating environment... "))
        ], 64)) : (o(), i(B, { key: 0 }, [
          b(Ue, {
            variant: "primary",
            disabled: !$.value,
            onClick: te
          }, {
            default: h(() => [...fe[14] || (fe[14] = [
              x(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(Ue, {
            variant: "secondary",
            onClick: fe[5] || (fe[5] = (ne) => n("close"))
          }, {
            default: h(() => [...fe[15] || (fe[15] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), m3 = /* @__PURE__ */ Te(d3, [["__scopeId", "data-v-3faa3d9b"]]), f3 = /* @__PURE__ */ Ee({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: t, emit: n }) {
    const a = n, { getEnvironments: l, getEnvironmentDetails: r } = mt(), c = _([]), u = _(!1), d = _(null), f = _(""), v = _(!1), p = _(!1), w = _(null), g = _(null), k = P(() => [...c.value].sort((O, F) => O.is_current !== F.is_current ? O.is_current ? -1 : 1 : O.name.localeCompare(F.name))), C = P(() => {
      if (!f.value.trim()) return k.value;
      const O = f.value.toLowerCase();
      return k.value.filter(
        (F) => {
          var N;
          return F.name.toLowerCase().includes(O) || ((N = F.current_branch) == null ? void 0 : N.toLowerCase().includes(O));
        }
      );
    });
    function S(O, F) {
      p.value = !1, a("created", O, F);
    }
    function $() {
      p.value = !0;
    }
    async function I(O) {
      w.value = O, g.value = null;
      const F = await r(O.name);
      F && (g.value = F);
    }
    function E(O) {
      w.value = null, g.value = null, a("delete", O);
    }
    function M(O) {
      w.value = null, g.value = null, a("export", O);
    }
    async function D() {
      u.value = !0, d.value = null;
      try {
        c.value = await l();
      } catch (O) {
        d.value = O instanceof Error ? O.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return ut(D), t({
      loadEnvironments: D,
      openCreateModal: $
    }), (O, F) => (o(), i(B, null, [
      b(Ht, null, {
        header: h(() => [
          b(qt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: F[1] || (F[1] = (N) => v.value = !0)
          }, {
            actions: h(() => [
              e.canCreate ? (o(), R(Pe, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: $
              }, {
                default: h(() => [...F[7] || (F[7] = [
                  x(" Create ", -1)
                ])]),
                _: 1
              })) : y("", !0),
              b(Pe, {
                variant: "secondary",
                size: "sm",
                onClick: F[0] || (F[0] = (N) => O.$emit("import"))
              }, {
                default: h(() => [...F[8] || (F[8] = [
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
            "onUpdate:modelValue": F[2] || (F[2] = (N) => f.value = N),
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
            C.value.length ? (o(), R(Nt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: C.value.length
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye(C.value, (N) => (o(), R(qC, {
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
                      onClick: (q) => O.$emit("switch", N.name)
                    }, {
                      default: h(() => [...F[9] || (F[9] = [
                        x(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : y("", !0),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => I(N)
                    }, {
                      default: h(() => [...F[10] || (F[10] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => O.$emit("export", N.name)
                    }, {
                      default: h(() => [...F[11] || (F[11] = [
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
            C.value.length ? y("", !0) : (o(), R(Es, {
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
                    onClick: $
                  }, {
                    default: h(() => [...F[12] || (F[12] = [
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
        onClose: F[4] || (F[4] = (N) => v.value = !1)
      }, {
        content: h(() => [...F[13] || (F[13] = [
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
            onClick: F[3] || (F[3] = (N) => v.value = !1)
          }, {
            default: h(() => [...F[14] || (F[14] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (o(), R(Rx, {
        key: 0,
        environment: w.value,
        detail: g.value,
        "can-delete": e.canDelete && c.value.length > 1,
        onClose: F[5] || (F[5] = (N) => {
          w.value = null, g.value = null;
        }),
        onDelete: E,
        onExport: M
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      p.value ? (o(), R(m3, {
        key: 1,
        onClose: F[6] || (F[6] = (N) => p.value = !1),
        onCreated: S
      })) : y("", !0)
    ], 64));
  }
}), v3 = /* @__PURE__ */ Te(f3, [["__scopeId", "data-v-01163d8c"]]), p3 = { class: "file-path" }, g3 = { class: "file-path-text" }, h3 = ["title"], y3 = /* @__PURE__ */ Ee({
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
    return (l, r) => (o(), i("div", p3, [
      r[0] || (r[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", g3, m(e.path), 1),
      e.copyable ? (o(), i("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: a
      }, m(n.value ? "✓" : "📋"), 9, h3)) : y("", !0)
    ]));
  }
}), w3 = /* @__PURE__ */ Te(y3, [["__scopeId", "data-v-f0982173"]]), _3 = { class: "base-textarea-wrapper" }, k3 = ["value", "rows", "placeholder", "disabled", "maxlength"], b3 = {
  key: 0,
  class: "base-textarea-count"
}, $3 = /* @__PURE__ */ Ee({
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
    return (r, c) => (o(), i("div", _3, [
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
      }, null, 40, k3),
      e.showCharCount && e.maxLength ? (o(), i("div", b3, m(e.modelValue.length) + " / " + m(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), An = /* @__PURE__ */ Te($3, [["__scopeId", "data-v-c6d16c93"]]), C3 = ["checked", "disabled"], x3 = { class: "base-checkbox-box" }, S3 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, I3 = {
  key: 0,
  class: "base-checkbox-label"
}, E3 = /* @__PURE__ */ Ee({
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
      }, null, 40, C3),
      s("span", x3, [
        e.modelValue ? (o(), i("svg", S3, [...n[1] || (n[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      t.$slots.default ? (o(), i("span", I3, [
        ct(t.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), ca = /* @__PURE__ */ Te(E3, [["__scopeId", "data-v-bf17c831"]]), T3 = { class: "export-blocked" }, M3 = { class: "error-header" }, P3 = { class: "error-summary" }, R3 = { class: "error-title" }, D3 = { class: "error-description" }, N3 = { class: "issues-list" }, L3 = { class: "issue-message" }, U3 = {
  key: 0,
  class: "issue-details"
}, O3 = ["onClick"], A3 = { class: "issue-fix" }, z3 = {
  key: 0,
  class: "commit-section"
}, F3 = {
  key: 0,
  class: "issues-warning"
}, V3 = {
  key: 1,
  class: "commit-error"
}, B3 = /* @__PURE__ */ Ee({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { commit: l } = mt(), r = _(""), c = _(!1), u = _(!1), d = _(""), f = Cn({}), v = P(() => n.mode === "publish" ? "Publish" : "Export"), p = P(
      () => n.issues.some(($) => $.type === "uncommitted_workflows" || $.type === "uncommitted_git_changes")
    ), w = P(
      () => n.issues.some(($) => $.type === "unresolved_issues")
    ), g = P(
      () => w.value && !u.value
    ), k = P(
      () => p.value && r.value.trim() !== "" && !c.value && !g.value
    );
    function C($) {
      const I = n.issues[$];
      return f[$] || I.details.length <= 3 ? I.details : I.details.slice(0, 3);
    }
    async function S() {
      var $;
      if (k.value) {
        c.value = !0, d.value = "";
        try {
          const I = await l(r.value.trim(), u.value);
          if (I.status === "success")
            a("committed");
          else if (I.status === "blocked") {
            const E = (($ = I.issues) == null ? void 0 : $.map((M) => `${M.name}: ${M.issue}`).join("; ")) || "Unknown issues";
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
    return ($, I) => (o(), R(Mt, {
      title: p.value ? `Commit & ${v.value}` : `Cannot ${v.value}`,
      size: "md",
      onClose: I[4] || (I[4] = (E) => $.$emit("close"))
    }, {
      body: h(() => [
        s("div", T3, [
          s("div", M3, [
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
            s("div", P3, [
              s("h3", R3, m(v.value) + " blocked", 1),
              s("p", D3, m(p.value ? `Commit your changes to proceed with ${v.value.toLowerCase()}.` : `The following issues must be resolved before ${v.value.toLowerCase()}.`), 1)
            ])
          ]),
          s("div", N3, [
            (o(!0), i(B, null, ye(e.issues, (E, M) => (o(), i("div", {
              key: M,
              class: "issue-item"
            }, [
              s("div", L3, m(E.message), 1),
              E.details.length ? (o(), i("div", U3, [
                (o(!0), i(B, null, ye(C(M), (D, O) => (o(), i("div", {
                  key: O,
                  class: "issue-detail"
                }, m(D), 1))), 128)),
                E.details.length > 3 && !f[M] ? (o(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (D) => f[M] = !0
                }, " +" + m(E.details.length - 3) + " more ", 9, O3)) : y("", !0)
              ])) : y("", !0),
              s("div", A3, [
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
          p.value ? (o(), i("div", z3, [
            w.value ? (o(), i("div", F3, [
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
            d.value ? (o(), i("div", V3, m(d.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        p.value ? (o(), i(B, { key: 0 }, [
          b(Ue, {
            variant: "secondary",
            onClick: I[2] || (I[2] = (E) => $.$emit("close"))
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
          onClick: I[3] || (I[3] = (E) => $.$emit("close"))
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
}), W3 = /* @__PURE__ */ Te(B3, [["__scopeId", "data-v-a8990107"]]), G3 = { class: "repro-warning" }, j3 = { class: "repro-warning-content" }, H3 = {
  key: 0,
  class: "warning-group"
}, q3 = { class: "warning-list" }, K3 = { key: 0 }, J3 = {
  key: 1,
  class: "warning-group"
}, Q3 = { class: "warning-list" }, Y3 = { key: 0 }, X3 = /* @__PURE__ */ Ee({
  __name: "ReproducibilityWarningBanner",
  props: {
    warnings: {},
    message: { default: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly. Review the missing details, or continue anyway." },
    maxItemsPerGroup: { default: 2 }
  },
  emits: ["review"],
  setup(e) {
    const t = e, n = P(() => t.warnings.models_without_sources || []), a = P(() => t.warnings.nodes_without_provenance || []), l = P(() => n.value.length), r = P(() => a.value.length), c = P(() => l.value + r.value), u = P(
      () => n.value.slice(0, t.maxItemsPerGroup)
    ), d = P(
      () => a.value.slice(0, t.maxItemsPerGroup)
    ), f = P(
      () => Math.max(0, l.value - u.value.length)
    ), v = P(
      () => Math.max(0, r.value - d.value.length)
    );
    return (p, w) => (o(), i("div", G3, [
      w[3] || (w[3] = s("span", { class: "repro-warning-icon" }, "!", -1)),
      s("div", j3, [
        s("strong", null, m(c.value) + " reproducibility warning" + m(c.value !== 1 ? "s" : ""), 1),
        s("p", null, m(e.message), 1),
        l.value ? (o(), i("div", H3, [
          w[1] || (w[1] = s("div", { class: "warning-group-label" }, " Models ", -1)),
          s("ul", q3, [
            (o(!0), i(B, null, ye(u.value, (g) => (o(), i("li", {
              key: g.hash || g.filename
            }, m(g.filename), 1))), 128)),
            f.value ? (o(), i("li", K3, "+" + m(f.value) + " more model" + m(f.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        r.value ? (o(), i("div", J3, [
          w[2] || (w[2] = s("div", { class: "warning-group-label" }, " Nodes ", -1)),
          s("ul", Q3, [
            (o(!0), i(B, null, ye(d.value, (g) => (o(), i("li", {
              key: g.name
            }, m(g.name) + " (" + m(g.criticality) + ") ", 1))), 128)),
            v.value ? (o(), i("li", Y3, "+" + m(v.value) + " more node" + m(v.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        s("button", {
          class: "review-issues-btn",
          onClick: w[0] || (w[0] = (g) => p.$emit("review"))
        }, " Review Issues ")
      ])
    ]));
  }
}), il = /* @__PURE__ */ Te(X3, [["__scopeId", "data-v-11be310d"]]), Z3 = { class: "export-card" }, eS = { class: "export-path-row" }, tS = {
  key: 1,
  class: "export-warning"
}, sS = { class: "export-footer-actions" }, nS = /* @__PURE__ */ Ee({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  emits: ["close"],
  setup(e) {
    const t = e, { validateExport: n, exportEnvWithForce: a, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = mt(), c = _(""), u = _(!1), d = _(!1), f = _(!1), v = _(null), p = _(!1), w = _(null), g = _(!1), k = _(!1), C = P(() => {
      var A;
      return ((A = t.environmentName) == null ? void 0 : A.trim()) || null;
    }), S = P(() => C.value ? `EXPORT ENVIRONMENT: ${C.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), $ = P(() => C.value ? `Environment '${C.value}' has been exported` : "Your environment has been exported"), I = P(() => u.value ? "Validating..." : d.value ? "Exporting..." : F.value ? "Export Anyway" : "Export Environment"), E = P(() => {
      var A;
      return ((A = w.value) == null ? void 0 : A.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), M = P(
      () => E.value.models_without_sources.length
    ), D = P(
      () => {
        var A;
        return ((A = E.value.nodes_without_provenance) == null ? void 0 : A.length) || 0;
      }
    ), O = P(
      () => M.value + D.value
    ), F = P(
      () => {
        var A;
        return !!((A = w.value) != null && A.can_export) && O.value > 0;
      }
    );
    async function N() {
      u.value = !0;
      try {
        const A = C.value ? await l(C.value) : await n();
        return w.value = A, A;
      } catch (A) {
        return v.value = {
          status: "error",
          message: A instanceof Error ? A.message : "Validation failed"
        }, null;
      } finally {
        u.value = !1;
      }
    }
    async function q() {
      v.value = null;
      const A = await N();
      if (A) {
        if (!A.can_export) {
          g.value = !0;
          return;
        }
        await Q();
      }
    }
    async function ce() {
      g.value = !1;
      const A = await N();
      if (A) {
        if (!A.can_export) {
          g.value = !0;
          return;
        }
        await Q();
      }
    }
    async function de() {
      await N();
    }
    async function Q() {
      d.value = !0;
      try {
        const A = C.value ? await r(C.value, c.value || void 0) : await a(c.value || void 0);
        v.value = A;
      } catch (A) {
        v.value = {
          status: "error",
          message: A instanceof Error ? A.message : "Export failed"
        };
      } finally {
        d.value = !1;
      }
    }
    async function te() {
      var A;
      if ((A = v.value) != null && A.path)
        try {
          await navigator.clipboard.writeText(v.value.path);
        } catch (V) {
          console.error("Failed to copy path:", V);
        }
    }
    async function W() {
      var A;
      if ((A = v.value) != null && A.path) {
        f.value = !0;
        try {
          const V = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(v.value.path)}`);
          if (!V.ok)
            throw new Error(`Download failed: ${V.statusText}`);
          const ve = await V.blob(), se = URL.createObjectURL(ve), fe = v.value.path.split("/").pop() || "environment-export.tar.gz", ne = document.createElement("a");
          ne.href = se, ne.download = fe, document.body.appendChild(ne), ne.click(), document.body.removeChild(ne), URL.revokeObjectURL(se);
        } catch (V) {
          console.error("Failed to download:", V), alert(`Download failed: ${V instanceof Error ? V.message : "Unknown error"}`);
        } finally {
          f.value = !1;
        }
      }
    }
    return ut(() => {
      N();
    }), (A, V) => (o(), i(B, null, [
      b(Ht, null, rs({
        content: h(() => [
          F.value ? (o(), R(il, {
            key: 0,
            class: "export-readiness-warning",
            warnings: E.value,
            message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
            onReview: V[1] || (V[1] = (ve) => k.value = !0)
          }, null, 8, ["warnings"])) : y("", !0),
          b(Nt, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              s("div", Z3, [
                V[8] || (V[8] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", eS, [
                  b(Mn, {
                    modelValue: c.value,
                    "onUpdate:modelValue": V[2] || (V[2] = (ve) => c.value = ve),
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
                  x(m(v.value.status === "success" ? $.value : v.value.message), 1)
                ]),
                _: 2
              }, [
                v.value.status === "success" ? {
                  name: "details",
                  fn: h(() => [
                    b(Tt, { label: "Saved to:" }, {
                      default: h(() => [
                        b(w3, {
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
                    v.value.models_without_sources && v.value.models_without_sources > 0 ? (o(), i("div", tS, [...V[9] || (V[9] = [
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
                      onClick: W
                    }, {
                      default: h(() => [...V[10] || (V[10] = [
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
                      onClick: te
                    }, {
                      default: h(() => [...V[11] || (V[11] = [
                        x(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    b(Pe, {
                      variant: "ghost",
                      size: "sm",
                      onClick: V[3] || (V[3] = (ve) => v.value = null)
                    }, {
                      default: h(() => [...V[12] || (V[12] = [
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
          s("div", sS, [
            e.embedded ? (o(), R(Pe, {
              key: 0,
              variant: "secondary",
              size: "md",
              disabled: d.value,
              onClick: V[4] || (V[4] = (ve) => A.$emit("close"))
            }, {
              default: h(() => [...V[13] || (V[13] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : y("", !0),
            b(Pe, {
              variant: "primary",
              size: "md",
              loading: u.value || d.value,
              disabled: u.value || d.value,
              onClick: q
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
              onInfoClick: V[0] || (V[0] = (ve) => p.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      b(_s, {
        show: p.value,
        title: "What Gets Exported",
        onClose: V[5] || (V[5] = (ve) => p.value = !1)
      }, {
        content: h(() => [...V[14] || (V[14] = [
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
      g.value && w.value ? (o(), R(W3, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: V[6] || (V[6] = (ve) => g.value = !1),
        onCommitted: ce
      }, null, 8, ["issues"])) : y("", !0),
      k.value && w.value ? (o(), R(Ml, {
        key: 1,
        warnings: w.value.warnings,
        onClose: V[7] || (V[7] = (ve) => k.value = !1),
        onRevalidate: de
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), oS = /* @__PURE__ */ Te(nS, [["__scopeId", "data-v-6cf814a2"]]), aS = { class: "file-input-wrapper" }, lS = ["accept", "multiple", "disabled"], iS = /* @__PURE__ */ Ee({
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
    }), (u, d) => (o(), i("div", aS, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, lS),
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
}), rS = /* @__PURE__ */ Te(iS, [["__scopeId", "data-v-cd192091"]]), cS = {
  key: 0,
  class: "drop-zone-empty"
}, uS = { class: "drop-zone-text" }, dS = { class: "drop-zone-primary" }, mS = { class: "drop-zone-secondary" }, fS = { class: "drop-zone-actions" }, vS = {
  key: 1,
  class: "drop-zone-file"
}, pS = { class: "file-info" }, gS = { class: "file-details" }, hS = { class: "file-name" }, yS = { class: "file-size" }, wS = /* @__PURE__ */ Ee({
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
    const n = t, a = _(!1), l = _(null), r = _(0), c = P(() => l.value !== null), u = P(() => {
      var S;
      return ((S = l.value) == null ? void 0 : S.name) || "";
    }), d = P(() => {
      if (!l.value) return "";
      const S = l.value.size;
      return S < 1024 ? `${S} B` : S < 1024 * 1024 ? `${(S / 1024).toFixed(1)} KB` : S < 1024 * 1024 * 1024 ? `${(S / (1024 * 1024)).toFixed(1)} MB` : `${(S / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function f(S) {
      var $;
      S.stopPropagation(), r.value++, ($ = S.dataTransfer) != null && $.types.includes("Files") && (a.value = !0);
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
      const $ = (I = S.dataTransfer) == null ? void 0 : I.files;
      $ && $.length > 0 && k($[0]);
    }
    function g(S) {
      S.length > 0 && k(S[0]);
    }
    function k(S) {
      l.value = S, n("fileSelected", S);
    }
    function C() {
      l.value = null, n("clear");
    }
    return (S, $) => (o(), i("div", {
      class: Be(["file-drop-zone", { "drop-active": a.value, "has-file": c.value }]),
      onDragenter: bt(f, ["prevent"]),
      onDragover: bt(v, ["prevent"]),
      onDragleave: bt(p, ["prevent"]),
      onDrop: bt(w, ["prevent"])
    }, [
      c.value ? (o(), i("div", vS, [
        s("div", pS, [
          $[1] || ($[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", gS, [
            s("div", hS, m(u.value), 1),
            s("div", yS, m(d.value), 1)
          ])
        ]),
        b(Pe, {
          variant: "ghost",
          size: "xs",
          onClick: C,
          title: "Remove file"
        }, {
          default: h(() => [...$[2] || ($[2] = [
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
      ])) : (o(), i("div", cS, [
        $[0] || ($[0] = s("div", { class: "drop-zone-icon" }, [
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
        s("div", uS, [
          s("p", dS, m(e.primaryText), 1),
          s("p", mS, m(e.secondaryText), 1)
        ]),
        s("div", fS, [
          b(rS, {
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
}), _S = /* @__PURE__ */ Te(wS, [["__scopeId", "data-v-0f79cb86"]]), kS = { class: "commit-hash" }, bS = /* @__PURE__ */ Ee({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, n = P(() => t.hash.slice(0, t.length));
    return (a, l) => (o(), i("span", kS, m(n.value), 1));
  }
}), xc = /* @__PURE__ */ Te(bS, [["__scopeId", "data-v-7c333cc6"]]), $S = { class: "import-preview" }, CS = { class: "preview-header" }, xS = {
  key: 0,
  class: "source-env"
}, SS = { class: "preview-content" }, IS = { class: "preview-section" }, ES = { class: "section-header" }, TS = { class: "section-info" }, MS = { class: "section-count" }, PS = {
  key: 0,
  class: "item-list"
}, RS = { class: "item-name" }, DS = {
  key: 0,
  class: "item-more"
}, NS = { class: "preview-section" }, LS = { class: "section-header" }, US = { class: "section-info" }, OS = { class: "section-count" }, AS = {
  key: 0,
  class: "item-list"
}, zS = { class: "item-details" }, FS = { class: "item-name" }, VS = { class: "item-meta" }, BS = {
  key: 0,
  class: "item-more"
}, WS = { class: "preview-section" }, GS = { class: "section-header" }, jS = { class: "section-info" }, HS = { class: "section-count" }, qS = {
  key: 0,
  class: "item-list"
}, KS = { class: "item-name" }, JS = {
  key: 0,
  class: "item-more"
}, QS = {
  key: 0,
  class: "preview-section"
}, YS = { class: "git-info" }, XS = /* @__PURE__ */ Ee({
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
    const t = e, n = P(() => t.workflows.length), a = P(() => t.models.length), l = P(() => t.nodes.length);
    function r(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (o(), i("div", $S, [
      s("div", CS, [
        b(gs, null, {
          default: h(() => [...u[0] || (u[0] = [
            x("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (o(), i("span", xS, [
          u[1] || (u[1] = x(" From: ", -1)),
          b(ll, null, {
            default: h(() => [
              x(m(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      s("div", SS, [
        s("div", IS, [
          s("div", ES, [
            u[3] || (u[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", TS, [
              u[2] || (u[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", MS, m(n.value) + " file" + m(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (o(), i("div", PS, [
            (o(!0), i(B, null, ye(e.workflows.slice(0, e.maxPreviewItems), (d) => (o(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", RS, m(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (o(), i("div", DS, " +" + m(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", NS, [
          s("div", LS, [
            u[6] || (u[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", US, [
              u[5] || (u[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", OS, m(a.value) + " file" + m(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (o(), i("div", AS, [
            (o(!0), i(B, null, ye(e.models.slice(0, e.maxPreviewItems), (d) => (o(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", zS, [
                s("span", FS, m(d.filename), 1),
                s("span", VS, m(r(d.size)) + " • " + m(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (o(), i("div", BS, " +" + m(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", WS, [
          s("div", GS, [
            u[9] || (u[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", jS, [
              u[8] || (u[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", HS, m(l.value) + " node" + m(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (o(), i("div", qS, [
            (o(!0), i(B, null, ye(e.nodes.slice(0, e.maxPreviewItems), (d) => (o(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", KS, m(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (o(), i("div", JS, " +" + m(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (o(), i("div", QS, [
          u[11] || (u[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", YS, [
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
}), ZS = /* @__PURE__ */ Te(XS, [["__scopeId", "data-v-182fe113"]]), e5 = { class: "import-config" }, t5 = { class: "config-container" }, s5 = { class: "config-field" }, n5 = { class: "input-wrapper" }, o5 = ["value"], a5 = {
  key: 0,
  class: "validating-indicator"
}, l5 = {
  key: 1,
  class: "valid-indicator"
}, i5 = {
  key: 0,
  class: "field-error"
}, r5 = { class: "config-field" }, c5 = { class: "strategy-options" }, u5 = ["value", "checked", "onChange"], d5 = { class: "strategy-content" }, m5 = { class: "strategy-label" }, f5 = { class: "strategy-description" }, v5 = { class: "config-field switch-field" }, p5 = { class: "switch-label" }, g5 = ["checked"], h5 = { class: "advanced-section" }, y5 = { class: "advanced-content" }, w5 = { class: "config-field" }, _5 = ["value"], k5 = ["value"], b5 = /* @__PURE__ */ Ee({
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
    return (v, p) => (o(), i("div", e5, [
      b(gs, null, {
        default: h(() => [...p[2] || (p[2] = [
          x("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", t5, [
        s("div", s5, [
          b(Jo, { required: "" }, {
            default: h(() => [...p[3] || (p[3] = [
              x("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", n5, [
            s("input", {
              type: "text",
              class: Be(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: f
            }, null, 42, o5),
            l.value ? (o(), i("span", a5, "...")) : r.value ? (o(), i("span", l5, "✓")) : y("", !0)
          ]),
          e.nameError ? (o(), i("div", i5, m(e.nameError), 1)) : y("", !0),
          p[4] || (p[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", r5, [
          b(Jo, null, {
            default: h(() => [...p[5] || (p[5] = [
              x("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", c5, [
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
              }, null, 40, u5),
              s("div", d5, [
                s("span", m5, m(w.label), 1),
                s("span", f5, m(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", v5, [
          s("label", p5, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => a("update:switchAfterImport", w.target.checked))
            }, null, 40, g5),
            p[6] || (p[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", h5, [
          p[8] || (p[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", y5, [
            s("div", w5, [
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
                }, m(w) + m(w === "auto" ? " (detect GPU)" : ""), 9, k5))), 128))
              ], 40, _5)
            ])
          ])
        ])
      ])
    ]));
  }
}), $5 = /* @__PURE__ */ Te(b5, [["__scopeId", "data-v-89ea06a1"]]), C5 = { class: "import-flow" }, x5 = {
  key: 0,
  class: "import-empty"
}, S5 = { class: "git-import-section" }, I5 = { class: "git-url-input-row" }, E5 = ["disabled"], T5 = {
  key: 0,
  class: "git-error"
}, M5 = {
  key: 1,
  class: "import-configure"
}, P5 = { class: "selected-file-bar" }, R5 = {
  key: 0,
  class: "file-bar-content"
}, D5 = { class: "file-bar-info" }, N5 = { class: "file-bar-name" }, L5 = { class: "file-bar-size" }, U5 = {
  key: 1,
  class: "file-bar-content"
}, O5 = { class: "file-bar-info" }, A5 = { class: "file-bar-name" }, z5 = {
  key: 0,
  class: "preview-loading"
}, F5 = { class: "import-actions" }, V5 = {
  key: 2,
  class: "import-progress"
}, B5 = { class: "creating-intro" }, W5 = {
  key: 0,
  class: "progress-warning"
}, G5 = {
  key: 1,
  class: "import-error"
}, j5 = { class: "error-message" }, H5 = {
  key: 3,
  class: "import-complete"
}, q5 = { class: "complete-message" }, K5 = { class: "complete-title" }, J5 = { class: "complete-details" }, Q5 = { class: "complete-actions" }, Y5 = /* @__PURE__ */ Ee({
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
    const w = _(null), g = _(a.resumeImport ?? !1), k = _(!1), C = _(!1), S = _(""), $ = _(!1), I = _(null), E = _(""), M = _(null), D = _(!1), O = _(null), F = _(null), N = _({
      name: ((Me = a.initialProgress) == null ? void 0 : Me.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), q = _(null), ce = _({
      message: ((pe = a.initialProgress) == null ? void 0 : pe.message) ?? "Preparing import...",
      phase: ((ze = a.initialProgress) == null ? void 0 : ze.phase) ?? "",
      progress: ((Le = a.initialProgress) == null ? void 0 : Le.progress) ?? 0,
      error: null
    }), de = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Q = P(() => {
      if (!F.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const ke = F.value;
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
    }), te = P(() => !$.value && !I.value && F.value && N.value.name.length > 0 && !q.value && (w.value || M.value));
    async function W(ke) {
      w.value = ke, $.value = !0, I.value = null, F.value = null;
      try {
        const De = await r(ke);
        F.value = De;
      } catch (De) {
        I.value = De instanceof Error ? De.message : "Failed to analyze file", console.error("Preview error:", De);
      } finally {
        $.value = !1;
      }
    }
    function A() {
      w.value = null, M.value = null, E.value = "", O.value = null, k.value = !1, C.value = !1, S.value = "", F.value = null, I.value = null, N.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, q.value = null, l("source-cleared");
    }
    function V() {
      oe(), A(), g.value = !1, $.value = !1, D.value = !1, ce.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function ve() {
      if (E.value.trim()) {
        D.value = !0, O.value = null;
        try {
          const ke = await c(E.value.trim());
          M.value = E.value.trim(), F.value = ke;
        } catch (ke) {
          O.value = ke instanceof Error ? ke.message : "Failed to analyze repository";
        } finally {
          D.value = !1;
        }
      }
    }
    function se(ke) {
      try {
        const De = new URL(ke);
        return De.host + De.pathname.replace(/\.git$/, "");
      } catch {
        return ke;
      }
    }
    async function fe(ke) {
      if (!ke) {
        q.value = "Environment name is required";
        return;
      }
      try {
        const De = await u(ke);
        q.value = De.valid ? null : De.error || "Invalid name";
      } catch {
        q.value = "Failed to validate name";
      }
    }
    async function ne() {
      if (N.value.name && !(!w.value && !M.value)) {
        g.value = !0, k.value = !1, ce.value = { message: `Creating environment '${N.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let ke;
          if (w.value)
            ke = await d(
              w.value,
              N.value.name,
              N.value.modelStrategy,
              N.value.torchBackend
            );
          else if (M.value)
            ke = await f(
              M.value,
              N.value.name,
              N.value.modelStrategy,
              N.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ke.status === "started" ? K() : (C.value = !1, S.value = ke.message, g.value = !1, k.value = !0);
        } catch (ke) {
          C.value = !1, S.value = ke instanceof Error ? ke.message : "Unknown error occurred during import", g.value = !1, k.value = !0;
        }
      }
    }
    async function K() {
      if (p) return;
      const ke = async () => {
        try {
          const ge = await v();
          return ce.value = {
            message: ge.message,
            phase: ge.phase || "",
            progress: ge.progress ?? (ge.state === "importing" ? 50 : 0),
            error: ge.error || null
          }, ge.state === "complete" ? (oe(), C.value = !0, S.value = `Environment '${ge.environment_name}' created successfully`, g.value = !1, k.value = !0, ge.environment_name && l("import-complete", ge.environment_name, N.value.switchAfterImport), !1) : ge.state === "error" ? (oe(), C.value = !1, S.value = ge.error || ge.message, g.value = !1, k.value = !0, !1) : !0;
        } catch (ge) {
          return console.error("Failed to poll import progress:", ge), !0;
        }
      };
      await ke() && (p = setInterval(async () => {
        await ke() || oe();
      }, 2e3));
    }
    function oe() {
      p && (clearInterval(p), p = null);
    }
    function ae(ke) {
      return ke < 1024 ? `${ke} B` : ke < 1024 * 1024 ? `${(ke / 1024).toFixed(1)} KB` : ke < 1024 * 1024 * 1024 ? `${(ke / (1024 * 1024)).toFixed(1)} MB` : `${(ke / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return ut(async () => {
      try {
        const ke = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", ke.state, ke), ke.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", ke.environment_name), g.value = !0, N.value.name = ke.environment_name || N.value.name || "", ce.value = {
          progress: ke.progress ?? 0,
          message: ke.message || "Importing...",
          phase: ke.phase || "",
          error: null
        }, K());
      } catch (ke) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", ke);
      }
    }), t({
      handleReset: V,
      isImporting: g,
      canImport: te
    }), (ke, De) => {
      var ge;
      return o(), i("div", C5, [
        !w.value && !M.value && !g.value ? (o(), i("div", x5, [
          b(_S, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: W
          }),
          De[7] || (De[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", S5, [
            De[5] || (De[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", I5, [
              Ot(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": De[0] || (De[0] = (we) => E.value = we),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Cs(ve, ["enter"]),
                disabled: D.value
              }, null, 40, E5), [
                [go, E.value]
              ]),
              b(Pe, {
                variant: "primary",
                size: "sm",
                disabled: !E.value.trim() || D.value,
                onClick: ve
              }, {
                default: h(() => [
                  x(m(D.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            O.value ? (o(), i("div", T5, m(O.value), 1)) : y("", !0),
            De[6] || (De[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || M.value) && !g.value && !k.value ? (o(), i("div", M5, [
          s("div", P5, [
            w.value ? (o(), i("div", R5, [
              De[8] || (De[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", D5, [
                s("div", N5, m(w.value.name), 1),
                s("div", L5, m(ae(w.value.size)), 1)
              ])
            ])) : M.value ? (o(), i("div", U5, [
              De[10] || (De[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", O5, [
                s("div", A5, m(se(M.value)), 1),
                De[9] || (De[9] = s("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            b(Pe, {
              variant: "ghost",
              size: "sm",
              onClick: A
            }, {
              default: h(() => [...De[11] || (De[11] = [
                x(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          $.value ? (o(), i("div", z5, [...De[12] || (De[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : I.value ? (o(), R(us, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [I.value]
          }, null, 8, ["details"])) : F.value ? (o(), R(ZS, {
            key: 2,
            "source-environment": Q.value.sourceEnvironment,
            workflows: Q.value.workflows,
            models: Q.value.models,
            nodes: Q.value.nodes,
            "git-branch": Q.value.gitBranch,
            "git-commit": Q.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          F.value ? (o(), R($5, {
            key: 3,
            name: N.value.name,
            "onUpdate:name": De[1] || (De[1] = (we) => N.value.name = we),
            "model-strategy": N.value.modelStrategy,
            "onUpdate:modelStrategy": De[2] || (De[2] = (we) => N.value.modelStrategy = we),
            "torch-backend": N.value.torchBackend,
            "onUpdate:torchBackend": De[3] || (De[3] = (we) => N.value.torchBackend = we),
            "switch-after-import": N.value.switchAfterImport,
            "onUpdate:switchAfterImport": De[4] || (De[4] = (we) => N.value.switchAfterImport = we),
            "name-error": q.value,
            onValidateName: fe
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          N.value.modelStrategy === "skip" && ((ge = F.value) != null && ge.models_needing_download) ? (o(), R(us, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${F.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          s("div", F5, [
            b(Pe, {
              variant: "secondary",
              size: "md",
              onClick: A
            }, {
              default: h(() => [...De[13] || (De[13] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Pe, {
              variant: "primary",
              size: "md",
              disabled: !te.value,
              onClick: ne
            }, {
              default: h(() => [...De[14] || (De[14] = [
                x(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : g.value ? (o(), i("div", V5, [
          s("p", B5, [
            De[15] || (De[15] = x(" Importing environment ", -1)),
            s("strong", null, m(N.value.name), 1),
            De[16] || (De[16] = x("... ", -1))
          ]),
          b(ra, {
            progress: ce.value.progress,
            message: ce.value.message,
            "current-phase": ce.value.phase,
            variant: ce.value.error ? "error" : "default",
            "show-steps": !0,
            steps: de
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          ce.value.error ? y("", !0) : (o(), i("p", W5, " This may take several minutes. Please wait... ")),
          ce.value.error ? (o(), i("div", G5, [
            s("p", j5, m(ce.value.error), 1)
          ])) : y("", !0)
        ])) : k.value ? (o(), i("div", H5, [
          s("div", {
            class: Be(["complete-icon", C.value ? "success" : "error"])
          }, m(C.value ? "✓" : "✕"), 3),
          s("div", q5, [
            s("div", K5, m(C.value ? "Import Successful" : "Import Failed"), 1),
            s("div", J5, m(S.value), 1)
          ]),
          s("div", Q5, [
            b(Pe, {
              variant: "primary",
              size: "md",
              onClick: V
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
}), Sc = /* @__PURE__ */ Te(Y5, [["__scopeId", "data-v-72cbc04e"]]), X5 = /* @__PURE__ */ Ee({
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
}), Z5 = /* @__PURE__ */ Te(X5, [["__scopeId", "data-v-41b1f298"]]), e8 = { class: "base-tabs" }, t8 = ["disabled", "onClick"], s8 = {
  key: 0,
  class: "base-tabs__badge"
}, n8 = /* @__PURE__ */ Ee({
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
    return (r, c) => (o(), i("div", e8, [
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
        u.badge ? (o(), i("span", s8, m(u.badge), 1)) : y("", !0)
      ], 10, t8))), 128))
    ]));
  }
}), Ll = /* @__PURE__ */ Te(n8, [["__scopeId", "data-v-ad5e6cad"]]), o8 = { class: "commit-list" }, a8 = /* @__PURE__ */ Ee({
  __name: "CommitList",
  setup(e) {
    return (t, n) => (o(), i("div", o8, [
      ct(t.$slots, "default", {}, void 0)
    ]));
  }
}), Ic = /* @__PURE__ */ Te(a8, [["__scopeId", "data-v-8c5ee761"]]), l8 = { class: "commit-message" }, i8 = { class: "commit-date" }, r8 = /* @__PURE__ */ Ee({
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
      s("span", l8, m(e.message), 1),
      s("span", i8, m(e.relativeDate), 1),
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
}), Ec = /* @__PURE__ */ Te(r8, [["__scopeId", "data-v-dd7c621b"]]), c8 = /* @__PURE__ */ Ee({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const t = e, n = P(() => `HISTORY (${t.currentRef || "detached"})`);
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
}), u8 = /* @__PURE__ */ Te(c8, [["__scopeId", "data-v-fa4bf3a1"]]), d8 = { class: "branch-create-form" }, m8 = { class: "form-actions" }, f8 = /* @__PURE__ */ Ee({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: t }) {
    const n = t, a = _(""), l = P(() => {
      const u = a.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function r() {
      l.value && (n("create", a.value.trim()), a.value = "");
    }
    function c() {
      a.value = "", n("cancel");
    }
    return (u, d) => (o(), i("div", d8, [
      b(Mn, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (f) => a.value = f),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      s("div", m8, [
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
}), v8 = /* @__PURE__ */ Te(f8, [["__scopeId", "data-v-7c500394"]]), p8 = { class: "branch-list-item__indicator" }, g8 = { class: "branch-list-item__name" }, h8 = {
  key: 0,
  class: "branch-list-item__actions"
}, y8 = {
  key: 0,
  class: "branch-list-item__current-label"
}, w8 = /* @__PURE__ */ Ee({
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
      s("span", p8, m(e.isCurrent ? "●" : "○"), 1),
      s("span", g8, m(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (o(), i("div", h8, [
        ct(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (o(), i("span", y8, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), _8 = /* @__PURE__ */ Te(w8, [["__scopeId", "data-v-c6581a24"]]), k8 = { class: "header-info" }, b8 = { class: "branch-name" }, $8 = {
  key: 0,
  class: "current-badge"
}, C8 = { class: "branch-meta" }, x8 = { key: 0 }, S8 = {
  key: 0,
  class: "meta-note"
}, I8 = {
  key: 0,
  class: "loading"
}, E8 = {
  key: 1,
  class: "empty-state"
}, T8 = /* @__PURE__ */ Ee({
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
        s("div", k8, [
          u[4] || (u[4] = s("h3", { class: "header-title" }, "BRANCH", -1)),
          s("span", b8, m(e.branchName), 1),
          e.isCurrent ? (o(), i("span", $8, "CURRENT")) : y("", !0)
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
        s("div", C8, [
          r.value ? (o(), i("span", x8, "Loading...")) : (o(), i(B, { key: 1 }, [
            s("span", null, m(a.value.length) + " commits", 1),
            l.value ? (o(), i("span", S8, "(showing first " + m(a.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (o(), i("div", I8, "Loading commit history...")) : a.value.length === 0 ? (o(), i("div", E8, " No commits found on this branch ")) : (o(), R(Ic, {
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
}), M8 = /* @__PURE__ */ Te(T8, [["__scopeId", "data-v-2e5437cc"]]), P8 = {
  key: 0,
  class: "branch-toolbar"
}, R8 = {
  key: 3,
  class: "branch-list"
}, D8 = /* @__PURE__ */ Ee({
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
        e.embedded && !a.value ? (o(), i("div", P8, [
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
        a.value ? (o(), R(v8, {
          key: 1,
          onCreate: r,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (o(), R(Es, {
          key: 2,
          icon: "○",
          message: "No branches found"
        })) : (o(), i("div", R8, [
          (o(!0), i(B, null, ye(e.branches, (w) => (o(), R(_8, {
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
        l.value ? (o(), R(M8, {
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
}), N8 = /* @__PURE__ */ Te(D8, [["__scopeId", "data-v-98858eb2"]]);
function Tc(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const L8 = { class: "remote-url-display" }, U8 = ["title"], O8 = ["title"], A8 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, z8 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, F8 = /* @__PURE__ */ Ee({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const t = e, n = _(!1), a = P(() => {
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
    return (r, c) => (o(), i("div", L8, [
      s("span", {
        class: "url-text",
        title: e.url
      }, m(a.value), 9, U8),
      s("button", {
        class: Be(["copy-btn", { copied: n.value }]),
        onClick: l,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), i("svg", z8, [...c[1] || (c[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), i("svg", A8, [...c[0] || (c[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, O8)
    ]));
  }
}), V8 = /* @__PURE__ */ Te(F8, [["__scopeId", "data-v-7768a58d"]]), B8 = { class: "remote-title" }, W8 = {
  key: 0,
  class: "default-badge"
}, G8 = {
  key: 1,
  class: "sync-badge"
}, j8 = {
  key: 0,
  class: "ahead"
}, H8 = {
  key: 1,
  class: "behind"
}, q8 = {
  key: 1,
  class: "synced"
}, K8 = ["href"], J8 = {
  key: 1,
  class: "remote-url-text"
}, Q8 = /* @__PURE__ */ Ee({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const t = e, n = P(() => t.fetchingRemote === t.remote.name), a = P(() => t.remote.is_default), l = P(() => t.syncStatus && t.syncStatus.behind > 0), r = P(() => t.syncStatus && t.syncStatus.ahead > 0), c = P(() => t.remote.push_url !== t.remote.fetch_url), u = P(() => {
      const f = t.remote.fetch_url, v = f.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : f.startsWith("https://") || f.startsWith("http://") ? f.replace(/\.git$/, "") : null;
    }), d = P(() => t.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (f, v) => (o(), R(Yt, {
      status: a.value ? "synced" : void 0
    }, rs({
      icon: h(() => [
        x(m(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        s("div", B8, [
          s("span", null, m(e.remote.name), 1),
          a.value ? (o(), i("span", W8, "DEFAULT")) : y("", !0),
          e.syncStatus ? (o(), i("span", G8, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (o(), i(B, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (o(), i("span", j8, "↑" + m(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (o(), i("span", H8, "↓" + m(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (o(), i("span", q8, "✓ synced"))
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
        }, m(d.value), 9, K8)) : (o(), i("span", J8, m(d.value), 1))
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
              b(V8, {
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
}), Y8 = /* @__PURE__ */ Te(Q8, [["__scopeId", "data-v-8310f3a8"]]), X8 = ["for"], Z8 = {
  key: 0,
  class: "base-form-field-required"
}, e4 = { class: "base-form-field-input" }, t4 = {
  key: 1,
  class: "base-form-field-error"
}, s4 = {
  key: 2,
  class: "base-form-field-hint"
}, n4 = /* @__PURE__ */ Ee({
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
    const t = e, n = P(() => t.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (a, l) => (o(), i("div", {
      class: Be(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (o(), i("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        x(m(e.label) + " ", 1),
        e.required ? (o(), i("span", Z8, "*")) : y("", !0)
      ], 8, X8)) : y("", !0),
      s("div", e4, [
        ct(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (o(), i("span", t4, m(e.error), 1)) : e.hint ? (o(), i("span", s4, m(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), Wt = /* @__PURE__ */ Te(n4, [["__scopeId", "data-v-9a1cf296"]]), o4 = { class: "remote-form" }, a4 = { class: "form-header" }, l4 = { class: "form-body" }, i4 = {
  key: 0,
  class: "form-error"
}, r4 = { class: "form-actions" }, c4 = /* @__PURE__ */ Ee({
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
    const u = P(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
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
    return (f, v) => (o(), i("div", o4, [
      s("div", a4, [
        b(gs, null, {
          default: h(() => [
            x(m(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", l4, [
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
        c.value ? (o(), i("div", i4, m(c.value), 1)) : y("", !0)
      ]),
      s("div", r4, [
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
}), u4 = /* @__PURE__ */ Te(c4, [["__scopeId", "data-v-56021b18"]]), d4 = { class: "conflict-summary-box" }, m4 = { class: "summary-header" }, f4 = { class: "summary-text" }, v4 = { key: 0 }, p4 = {
  key: 1,
  class: "all-resolved"
}, g4 = { class: "summary-progress" }, h4 = { class: "progress-bar" }, y4 = { class: "progress-text" }, w4 = /* @__PURE__ */ Ee({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const t = e, n = P(
      () => t.conflictCount > 0 ? t.resolvedCount / t.conflictCount * 100 : 0
    );
    return (a, l) => (o(), i("div", d4, [
      s("div", m4, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", f4, [
          s("strong", null, m(e.conflictCount) + " conflict" + m(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (o(), i("p", v4, " Resolve all conflicts before " + m(e.operationType) + "ing ", 1)) : (o(), i("p", p4, " All conflicts resolved - ready to " + m(e.operationType), 1))
        ])
      ]),
      s("div", g4, [
        s("div", h4, [
          s("div", {
            class: "progress-fill",
            style: zt({ width: n.value + "%" })
          }, null, 4)
        ]),
        s("span", y4, m(e.resolvedCount) + " / " + m(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), _4 = /* @__PURE__ */ Te(w4, [["__scopeId", "data-v-4e9e6cc9"]]), k4 = { class: "modal-header" }, b4 = { class: "modal-title" }, $4 = { class: "modal-body" }, C4 = {
  key: 0,
  class: "error-box"
}, x4 = {
  key: 0,
  class: "error-hint"
}, S4 = {
  key: 1,
  class: "loading-state"
}, I4 = { class: "commit-summary" }, E4 = {
  key: 0,
  class: "commits-section"
}, T4 = { class: "commit-list" }, M4 = { class: "commit-hash" }, P4 = { class: "commit-message" }, R4 = { class: "commit-date" }, D4 = {
  key: 1,
  class: "changes-section"
}, N4 = {
  key: 0,
  class: "change-group",
  open: ""
}, L4 = { class: "change-count" }, U4 = { class: "change-list" }, O4 = {
  key: 0,
  class: "conflict-badge"
}, A4 = {
  key: 1,
  class: "change-group"
}, z4 = { class: "change-count" }, F4 = { class: "change-list" }, V4 = {
  key: 2,
  class: "change-group"
}, B4 = { class: "change-count" }, W4 = { class: "change-list" }, G4 = {
  key: 3,
  class: "strategy-section"
}, j4 = { class: "radio-group" }, H4 = { class: "radio-option" }, q4 = { class: "radio-option" }, K4 = { class: "radio-option" }, J4 = {
  key: 4,
  class: "up-to-date"
}, Q4 = { class: "modal-actions" }, Ni = "comfygit.pullModelStrategy", Y4 = /* @__PURE__ */ Ee({
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
    const r = P(() => {
      var S;
      return ((S = n.error) == null ? void 0 : S.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = P(() => {
      if (!n.preview) return 0;
      const S = n.preview.changes.workflows;
      return S.added.length + S.modified.length + S.deleted.length;
    }), u = P(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), d = P(() => {
      var S;
      return c.value > 0 || u.value > 0 || (((S = n.preview) == null ? void 0 : S.changes.models.count) || 0) > 0;
    }), f = P(() => n.preview && Tc(n.preview) ? n.preview : null), v = P(() => {
      var S;
      return ((S = f.value) == null ? void 0 : S.workflow_conflicts.length) ?? 0;
    }), p = P(() => {
      var S;
      return ((S = n.conflictResolutions) == null ? void 0 : S.size) ?? 0;
    }), w = P(
      () => v.value > 0 && p.value === v.value
    ), g = P(() => !(!n.preview || n.preview.has_uncommitted_changes || f.value && !w.value));
    function k(S) {
      if (!f.value) return !1;
      const $ = S.replace(/\.json$/, "");
      return f.value.workflow_conflicts.some((I) => I.name === $);
    }
    function C(S) {
      const $ = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: S, resolutions: $ });
    }
    return (S, $) => {
      var I, E;
      return o(), R(as, { to: "body" }, [
        e.show ? (o(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: $[11] || ($[11] = (M) => S.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: $[10] || ($[10] = bt(() => {
            }, ["stop"]))
          }, [
            s("div", k4, [
              s("h3", b4, "PULL FROM " + m(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: $[0] || ($[0] = (M) => S.$emit("close"))
              }, "✕")
            ]),
            s("div", $4, [
              e.error ? (o(), i("div", C4, [
                $[13] || ($[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  $[12] || ($[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, m(e.error), 1),
                  r.value ? (o(), i("p", x4, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (o(), i("div", S4, [...$[14] || ($[14] = [
                s("span", { class: "spinner" }, "⟳", -1),
                x(" Loading preview... ", -1)
              ])])) : (I = e.preview) != null && I.has_uncommitted_changes ? (o(), i(B, { key: 2 }, [
                $[15] || ($[15] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                $[16] || ($[16] = s("div", { class: "options-section" }, [
                  s("p", null, [
                    s("strong", null, "Options:")
                  ]),
                  s("ul", null, [
                    s("li", null, "Commit your changes first (recommended)"),
                    s("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (o(), i(B, { key: 3 }, [
                s("div", I4, [
                  $[17] || ($[17] = s("span", { class: "icon" }, "📥", -1)),
                  x(" " + m(e.preview.commits_behind) + " commit" + m(e.preview.commits_behind !== 1 ? "s" : "") + " from " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (o(), i("div", E4, [
                  $[18] || ($[18] = s("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  s("div", T4, [
                    (o(!0), i(B, null, ye(e.preview.commits, (M) => (o(), i("div", {
                      key: M.hash,
                      class: "commit-item"
                    }, [
                      s("span", M4, m(M.short_hash || M.hash.slice(0, 7)), 1),
                      s("span", P4, m(M.message), 1),
                      s("span", R4, m(M.date_relative || M.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                d.value ? (o(), i("div", D4, [
                  $[22] || ($[22] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (o(), i("details", N4, [
                    s("summary", null, [
                      $[19] || ($[19] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", L4, m(c.value) + " changes", 1)
                    ]),
                    s("div", U4, [
                      (o(!0), i(B, null, ye(e.preview.changes.workflows.added, (M) => (o(), i("div", {
                        key: "a-" + M,
                        class: "change-item add"
                      }, " + " + m(M), 1))), 128)),
                      (o(!0), i(B, null, ye(e.preview.changes.workflows.modified, (M) => (o(), i("div", {
                        key: "m-" + M,
                        class: "change-item modify"
                      }, [
                        x(" ~ " + m(M) + " ", 1),
                        k(M) ? (o(), i("span", O4, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (o(!0), i(B, null, ye(e.preview.changes.workflows.deleted, (M) => (o(), i("div", {
                        key: "d-" + M,
                        class: "change-item delete"
                      }, " - " + m(M), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (o(), i("details", A4, [
                    s("summary", null, [
                      $[20] || ($[20] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", z4, m(u.value) + " to install", 1)
                    ]),
                    s("div", F4, [
                      (o(!0), i(B, null, ye(e.preview.changes.nodes.to_install, (M) => (o(), i("div", {
                        key: M,
                        class: "change-item add"
                      }, " + " + m(M), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (o(), i("details", V4, [
                    s("summary", null, [
                      $[21] || ($[21] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", B4, m(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", W4, [
                      (o(!0), i(B, null, ye(e.preview.changes.models.referenced, (M) => (o(), i("div", {
                        key: M,
                        class: "change-item"
                      }, m(M), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                f.value ? (o(), R(_4, {
                  key: 2,
                  "conflict-count": v.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (o(), i("div", G4, [
                  $[27] || ($[27] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", j4, [
                    s("label", H4, [
                      Ot(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": $[1] || ($[1] = (M) => l.value = M),
                        value: "all"
                      }, null, 512), [
                        [Ko, l.value]
                      ]),
                      $[23] || ($[23] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", q4, [
                      Ot(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": $[2] || ($[2] = (M) => l.value = M),
                        value: "required"
                      }, null, 512), [
                        [Ko, l.value]
                      ]),
                      $[24] || ($[24] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", K4, [
                      Ot(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": $[3] || ($[3] = (M) => l.value = M),
                        value: "skip"
                      }, null, 512), [
                        [Ko, l.value]
                      ]),
                      $[25] || ($[25] = s("span", null, "Skip model downloads", -1)),
                      $[26] || ($[26] = s("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  $[28] || ($[28] = s("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (o(), i("div", J4, [
                  $[29] || ($[29] = s("span", { class: "icon" }, "✓", -1)),
                  x(" Already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            s("div", Q4, [
              b(Pe, {
                variant: "secondary",
                onClick: $[4] || ($[4] = (M) => S.$emit("close"))
              }, {
                default: h(() => [...$[30] || ($[30] = [
                  x(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (o(), i(B, { key: 0 }, [
                b(Pe, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: $[5] || ($[5] = (M) => C(!1))
                }, {
                  default: h(() => [...$[31] || ($[31] = [
                    x(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                b(Pe, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: $[6] || ($[6] = (M) => C(!0))
                }, {
                  default: h(() => [...$[32] || ($[32] = [
                    x(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (E = e.preview) != null && E.has_uncommitted_changes ? (o(), R(Pe, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: $[7] || ($[7] = (M) => C(!0))
              }, {
                default: h(() => [...$[33] || ($[33] = [
                  x(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (o(), i(B, { key: 2 }, [
                f.value && !w.value ? (o(), R(Pe, {
                  key: 0,
                  variant: "primary",
                  onClick: $[8] || ($[8] = (M) => a("openConflictResolution"))
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
                  onClick: $[9] || ($[9] = (M) => C(!1))
                }, {
                  default: h(() => [...$[34] || ($[34] = [
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
}), X4 = /* @__PURE__ */ Te(Y4, [["__scopeId", "data-v-1d633bba"]]), Z4 = { class: "modal-header" }, eI = { class: "modal-title" }, tI = { class: "modal-body" }, sI = {
  key: 0,
  class: "error-box"
}, nI = {
  key: 1,
  class: "loading-state"
}, oI = {
  key: 2,
  class: "warning-box"
}, aI = {
  key: 1,
  class: "commits-section"
}, lI = { class: "commit-list" }, iI = { class: "commit-hash" }, rI = { class: "commit-message" }, cI = { class: "commit-date" }, uI = { class: "force-option" }, dI = { class: "checkbox-option" }, mI = { class: "commit-summary" }, fI = { key: 0 }, vI = { key: 1 }, pI = {
  key: 0,
  class: "info-box"
}, gI = {
  key: 2,
  class: "commits-section"
}, hI = { class: "commit-list" }, yI = { class: "commit-hash" }, wI = { class: "commit-message" }, _I = { class: "commit-date" }, kI = {
  key: 3,
  class: "up-to-date"
}, bI = { class: "modal-actions" }, $I = /* @__PURE__ */ Ee({
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
    const n = e, a = t, l = _(!1), r = _(!1), c = P(() => {
      var w;
      return ((w = n.preview) == null ? void 0 : w.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), u = P(
      () => c.value.models_without_sources.length
    ), d = P(
      () => c.value.nodes_without_provenance.length
    ), f = P(
      () => u.value + d.value
    ), v = P(() => f.value > 0);
    function p(w) {
      a("push", { force: w });
    }
    return (w, g) => {
      var k, C, S, $;
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
              s("div", Z4, [
                s("h3", eI, "PUSH TO " + m(e.remoteName.toUpperCase()), 1),
                s("button", {
                  class: "modal-close",
                  onClick: g[0] || (g[0] = (I) => w.$emit("close"))
                }, "✕")
              ]),
              s("div", tI, [
                e.error ? (o(), i("div", sI, [
                  g[13] || (g[13] = s("span", { class: "error-icon" }, "!", -1)),
                  s("div", null, [
                    g[12] || (g[12] = s("strong", null, "Push failed", -1)),
                    s("p", null, m(e.error), 1)
                  ])
                ])) : y("", !0),
                e.loading ? (o(), i("div", nI, [...g[14] || (g[14] = [
                  s("span", { class: "spinner" }, "⟳", -1),
                  x(" Loading preview... ", -1)
                ])])) : (k = e.preview) != null && k.has_uncommitted_changes ? (o(), i("div", oI, [...g[15] || (g[15] = [
                  s("span", { class: "warning-icon" }, "!", -1),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "Commit your changes before pushing.")
                  ], -1)
                ])])) : (C = e.preview) != null && C.remote_has_new_commits ? (o(), i(B, { key: 3 }, [
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
                  e.preview.commits_ahead > 0 ? (o(), i("div", aI, [
                    g[16] || (g[16] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", lI, [
                      (o(!0), i(B, null, ye(e.preview.commits, (I) => (o(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", iI, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", rI, m(I.message), 1),
                        s("span", cI, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : y("", !0),
                  s("div", uI, [
                    s("label", dI, [
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
                  s("div", mI, [
                    g[20] || (g[20] = s("span", { class: "icon" }, "📤", -1)),
                    e.preview.is_first_push ? (o(), i("span", fI, " Creating " + m(e.preview.remote) + "/" + m(e.preview.branch) + " with " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (o(), i("span", vI, " Pushing " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + m(e.preview.remote) + "/" + m(e.preview.branch), 1))
                  ]),
                  e.preview.is_first_push ? (o(), i("div", pI, [...g[21] || (g[21] = [
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
                  e.preview.commits_ahead > 0 ? (o(), i("div", gI, [
                    g[22] || (g[22] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", hI, [
                      (o(!0), i(B, null, ye(e.preview.commits, (I) => (o(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", yI, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", wI, m(I.message), 1),
                        s("span", _I, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : (o(), i("div", kI, [
                    g[23] || (g[23] = s("span", { class: "icon" }, "✓", -1)),
                    x(" Nothing to push - already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                  ]))
                ], 64)) : y("", !0)
              ]),
              s("div", bI, [
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
        r.value && (($ = e.preview) != null && $.warnings) ? (o(), R(Ml, {
          key: 0,
          warnings: e.preview.warnings,
          onClose: g[10] || (g[10] = (I) => r.value = !1),
          onRevalidate: g[11] || (g[11] = (I) => w.$emit("revalidate"))
        }, null, 8, ["warnings"])) : y("", !0)
      ], 64);
    };
  }
}), CI = /* @__PURE__ */ Te($I, [["__scopeId", "data-v-7748bf33"]]), xI = { class: "resolution-choice-group" }, SI = ["disabled"], II = ["disabled"], EI = /* @__PURE__ */ Ee({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (o(), i("div", xI, [
      s("button", {
        class: Be(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (a) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...n[2] || (n[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, SI),
      s("button", {
        class: Be(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (a) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...n[3] || (n[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, II)
    ]));
  }
}), TI = /* @__PURE__ */ Te(EI, [["__scopeId", "data-v-985715ed"]]), MI = { class: "conflict-header" }, PI = { class: "conflict-info" }, RI = { class: "workflow-name" }, DI = { class: "conflict-description" }, NI = {
  key: 0,
  class: "resolved-badge"
}, LI = { class: "resolved-text" }, UI = { class: "conflict-hashes" }, OI = { class: "hash-item" }, AI = { class: "hash-item" }, zI = { class: "conflict-actions" }, FI = /* @__PURE__ */ Ee({
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
    const r = P(() => l.value !== null), c = P(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = P(() => {
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
        s("div", MI, [
          f[2] || (f[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", PI, [
            s("code", RI, m(e.conflict.name) + ".json", 1),
            s("div", DI, m(c.value), 1)
          ]),
          r.value ? (o(), i("div", NI, [
            f[1] || (f[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", LI, m(u.value), 1)
          ])) : y("", !0)
        ]),
        s("div", UI, [
          s("span", OI, [
            f[3] || (f[3] = x("Your: ", -1)),
            s("code", null, m(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", AI, [
            f[4] || (f[4] = x("Theirs: ", -1)),
            s("code", null, m(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", zI, [
          b(TI, {
            modelValue: l.value,
            "onUpdate:modelValue": f[0] || (f[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), VI = /* @__PURE__ */ Te(FI, [["__scopeId", "data-v-506d3bbf"]]), BI = { class: "resolution-content" }, WI = {
  key: 0,
  class: "error-box"
}, GI = { class: "resolution-header" }, jI = { class: "header-stats" }, HI = { class: "stat" }, qI = { class: "stat-value" }, KI = { class: "stat resolved" }, JI = { class: "stat-value" }, QI = {
  key: 0,
  class: "stat pending"
}, YI = { class: "stat-value" }, XI = { class: "conflicts-list" }, ZI = {
  key: 1,
  class: "all-resolved-message"
}, e6 = /* @__PURE__ */ Ee({
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
    const n = e, a = t, l = P(() => n.resolutions.size), r = P(() => n.workflowConflicts.length - l.value), c = P(() => l.value === n.workflowConflicts.length), u = P(
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
        s("div", BI, [
          e.error ? (o(), i("div", WI, [
            g[1] || (g[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              g[0] || (g[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, m(e.error), 1)
            ])
          ])) : y("", !0),
          s("div", GI, [
            s("div", jI, [
              s("div", HI, [
                s("span", qI, m(e.workflowConflicts.length), 1),
                g[2] || (g[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", KI, [
                s("span", JI, m(l.value), 1),
                g[3] || (g[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (o(), i("div", QI, [
                s("span", YI, m(r.value), 1),
                g[4] || (g[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            g[5] || (g[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", XI, [
            (o(!0), i(B, null, ye(e.workflowConflicts, (k) => (o(), R(VI, {
              key: k.name,
              conflict: k,
              resolution: d(k.name),
              onResolve: (C) => f(k.name, C)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (o(), i("div", ZI, [
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
}), t6 = /* @__PURE__ */ Te(e6, [["__scopeId", "data-v-c58d150d"]]), s6 = { class: "node-conflict-item" }, n6 = { class: "node-header" }, o6 = { class: "node-name" }, a6 = { class: "node-id" }, l6 = { class: "version-comparison" }, i6 = { class: "version yours" }, r6 = { class: "version theirs" }, c6 = { class: "chosen-version" }, u6 = { class: "chosen" }, d6 = { class: "chosen-reason" }, m6 = { class: "affected-workflows" }, f6 = { class: "wf-source" }, v6 = { class: "wf-version" }, p6 = /* @__PURE__ */ Ee({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, n) => (o(), i("div", s6, [
      s("div", n6, [
        s("code", o6, m(e.conflict.node_name), 1),
        s("span", a6, "(" + m(e.conflict.node_id) + ")", 1)
      ]),
      s("div", l6, [
        s("div", i6, [
          n[0] || (n[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, m(e.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", r6, [
          n[1] || (n[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, m(e.conflict.target_version), 1)
        ])
      ]),
      s("div", c6, [
        n[3] || (n[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", u6, m(e.conflict.chosen_version), 1),
        s("span", d6, m(e.conflict.chosen_reason), 1)
      ]),
      s("details", m6, [
        s("summary", null, " Affected workflows (" + m(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (o(!0), i(B, null, ye(e.conflict.affected_workflows, (a) => (o(), i("li", {
            key: a.name
          }, [
            s("code", null, m(a.name), 1),
            s("span", f6, "(" + m(a.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", v6, "needs v" + m(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), g6 = /* @__PURE__ */ Te(p6, [["__scopeId", "data-v-8b626725"]]), h6 = { class: "validation-content" }, y6 = {
  key: 0,
  class: "compatible-message"
}, w6 = { class: "conflicts-list" }, _6 = {
  key: 2,
  class: "warnings-section"
}, k6 = /* @__PURE__ */ Ee({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = P(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (o(), R(Mt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => a("cancel"))
    }, {
      body: h(() => [
        s("div", h6, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (o(), i("div", y6, [
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
            s("div", w6, [
              (o(!0), i(B, null, ye(e.validation.node_conflicts, (u) => (o(), R(g6, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (o(), i("div", _6, [
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
}), b6 = /* @__PURE__ */ Te(k6, [["__scopeId", "data-v-fefd26ed"]]), $6 = {
  key: 0,
  class: "embedded-toolbar"
}, C6 = { class: "embedded-toolbar-search" }, x6 = /* @__PURE__ */ Ee({
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
    } = mt(), k = _([]), C = _({}), S = _(!1), $ = _(null), I = _(""), E = _(!1), M = _(null), D = _(!1), O = _("add"), F = _({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), N = P(() => {
      if (!I.value.trim()) return k.value;
      const Fe = I.value.toLowerCase();
      return k.value.filter(
        (Ae) => Ae.name.toLowerCase().includes(Fe) || Ae.fetch_url.toLowerCase().includes(Fe) || Ae.push_url.toLowerCase().includes(Fe)
      );
    });
    async function q() {
      S.value = !0, $.value = null;
      try {
        const Fe = await a();
        k.value = Fe.remotes, await Promise.all(
          Fe.remotes.map(async (Ae) => {
            const Xe = await d(Ae.name);
            Xe && (C.value[Ae.name] = Xe);
          })
        );
      } catch (Fe) {
        $.value = Fe instanceof Error ? Fe.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function ce() {
      O.value = "add", F.value = { name: "", fetchUrl: "", pushUrl: "" }, D.value = !0;
    }
    function de(Fe) {
      const Ae = k.value.find((Xe) => Xe.name === Fe);
      Ae && (O.value = "edit", F.value = {
        name: Ae.name,
        fetchUrl: Ae.fetch_url,
        pushUrl: Ae.push_url
      }, D.value = !0);
    }
    async function Q(Fe) {
      try {
        O.value === "add" ? await l(Fe.name, Fe.fetchUrl) : await c(Fe.name, Fe.fetchUrl, Fe.pushUrl || void 0), D.value = !1, await q();
      } catch (Ae) {
        $.value = Ae instanceof Error ? Ae.message : "Operation failed";
      }
    }
    function te() {
      D.value = !1, F.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function W(Fe) {
      M.value = Fe;
      try {
        await u(Fe);
        const Ae = await d(Fe);
        Ae && (C.value[Fe] = Ae), n("toast", `✓ Fetched from ${Fe}`, "success");
      } catch (Ae) {
        n("toast", Ae instanceof Error ? Ae.message : "Fetch failed", "error");
      } finally {
        M.value = null;
      }
    }
    async function A(Fe) {
      if (confirm(`Remove remote "${Fe}"?`))
        try {
          await r(Fe), await q();
        } catch (Ae) {
          $.value = Ae instanceof Error ? Ae.message : "Failed to remove remote";
        }
    }
    function V() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const ve = _("idle"), se = P(() => ve.value === "pull_preview"), fe = P(
      () => ve.value === "resolving" || ve.value === "validating"
    ), ne = P(
      () => ve.value === "validation_review" || ve.value === "executing"
    ), K = _(!1), oe = _(null), ae = _(!1), Me = _(null), pe = _(null), ze = _(!1), Le = _(null), ke = _(null), De = _(/* @__PURE__ */ new Map()), ge = _(null), we = _(null), T = P(() => Le.value && Tc(Le.value) ? Le.value : null);
    async function U(Fe) {
      pe.value = Fe, ve.value = "pull_preview", ze.value = !0, Le.value = null, ke.value = null;
      try {
        Le.value = await f(Fe);
      } catch (Ae) {
        ke.value = Ae instanceof Error ? Ae.message : "Failed to load pull preview";
      } finally {
        ze.value = !1;
      }
    }
    function ie() {
      ve.value = "idle", Le.value = null, ke.value = null, pe.value = null;
    }
    async function Ie(Fe) {
      if (!pe.value) return;
      ve.value = "executing", ke.value = null;
      const Ae = pe.value;
      try {
        const Xe = await v(Ae, Fe);
        if (Xe.rolled_back) {
          ke.value = `Pull failed and was rolled back: ${Xe.error || "Unknown error"}`, ve.value = "pull_preview";
          return;
        }
        We(), ve.value = "idle", n("toast", `✓ Pulled from ${Ae}`, "success"), await q();
      } catch (Xe) {
        ke.value = Xe instanceof Error ? Xe.message : "Pull failed", ve.value = "pull_preview";
      }
    }
    function Ce() {
      T.value && (ve.value = "resolving", we.value = null);
    }
    function be(Fe, Ae) {
      De.value.set(Fe, { name: Fe, resolution: Ae });
    }
    function ee() {
      ve.value = "pull_preview";
    }
    async function j() {
      ve.value = "validating", we.value = null;
      try {
        const Fe = Array.from(De.value.values());
        ge.value = await g(pe.value, Fe), ve.value = "validation_review";
      } catch (Fe) {
        we.value = Fe instanceof Error ? Fe.message : "Validation failed", ve.value = "resolving";
      }
    }
    async function he() {
      ve.value = "executing";
      const Fe = pe.value;
      try {
        const Ae = Array.from(De.value.values()), Xe = await v(Fe, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Ae
        });
        if (Xe.rolled_back) {
          ke.value = `Pull failed and was rolled back: ${Xe.error || "Unknown error"}`, ve.value = "pull_preview";
          return;
        }
        We(), ve.value = "idle", n("toast", `✓ Pulled from ${Fe}`, "success"), await q();
      } catch (Ae) {
        ke.value = Ae instanceof Error ? Ae.message : "Pull failed", ve.value = "validation_review";
      }
    }
    function _e() {
      ve.value = "resolving";
    }
    function Ke() {
      We(), ve.value = "idle";
    }
    function We() {
      De.value.clear(), ge.value = null, we.value = null, ke.value = null, Le.value = null, pe.value = null;
    }
    async function xe(Fe) {
      pe.value = Fe, K.value = !0, ze.value = !0, oe.value = null, Me.value = null;
      try {
        oe.value = await p(Fe);
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
          oe.value = await p(pe.value);
        } catch (Fe) {
          Me.value = Fe instanceof Error ? Fe.message : "Failed to refresh push preview";
        } finally {
          ze.value = !1;
        }
      }
    }
    function Ve() {
      K.value = !1, oe.value = null, Me.value = null, pe.value = null;
    }
    async function Ne(Fe) {
      var Xe;
      if (!pe.value) return;
      ae.value = !0;
      const Ae = pe.value;
      Me.value = null;
      try {
        await w(Ae, Fe), Ve(), n("toast", `✓ Pushed to ${Ae}`, "success"), await q();
      } catch (kt) {
        const Lt = kt instanceof Error ? kt.message : "Push failed";
        Me.value = Lt, kt instanceof al && kt.status === 409 && ((Xe = kt.data) != null && Xe.needs_force) && oe.value ? oe.value = {
          ...oe.value,
          remote_has_new_commits: !0,
          needs_force: !0,
          can_push: !0,
          block_reason: null
        } : n("toast", Lt, "error");
      } finally {
        ae.value = !1;
      }
    }
    function Qe() {
      const Fe = pe.value;
      Ve(), Fe && U(Fe);
    }
    return ut(q), (Fe, Ae) => (o(), i(B, null, [
      b(Ht, null, rs({
        content: h(() => [
          S.value ? (o(), R(zs, {
            key: 0,
            message: "Loading remotes..."
          })) : $.value ? (o(), R(Fs, {
            key: 1,
            message: $.value,
            retry: !0,
            onRetry: q
          }, null, 8, ["message"])) : (o(), i(B, { key: 2 }, [
            e.embedded && !D.value ? (o(), i("div", $6, [
              s("div", C6, [
                b($n, {
                  modelValue: I.value,
                  "onUpdate:modelValue": Ae[2] || (Ae[2] = (Xe) => I.value = Xe),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: ce
              }, {
                default: h(() => [...Ae[5] || (Ae[5] = [
                  x(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : y("", !0),
            D.value ? (o(), R(u4, {
              key: 1,
              mode: O.value,
              "remote-name": F.value.name,
              "fetch-url": F.value.fetchUrl,
              "push-url": F.value.pushUrl,
              onSubmit: Q,
              onCancel: te
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            N.value.length && !D.value ? (o(), R(Nt, {
              key: 2,
              title: "REMOTES",
              count: N.value.length
            }, {
              default: h(() => [
                (o(!0), i(B, null, ye(N.value, (Xe) => (o(), R(Y8, {
                  key: Xe.name,
                  remote: Xe,
                  "sync-status": C.value[Xe.name],
                  "fetching-remote": M.value,
                  onFetch: W,
                  onEdit: de,
                  onRemove: A,
                  onPull: U,
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
                  onClick: ce
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
                  onClick: ce
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
            onClick: V
          }, {
            default: h(() => [...Ae[8] || (Ae[8] = [
              x(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b(X4, {
        show: se.value,
        "remote-name": pe.value || "",
        preview: Le.value,
        loading: ze.value,
        pulling: ve.value === "executing",
        error: ke.value,
        "conflict-resolutions": De.value,
        onClose: ie,
        onPull: Ie,
        onOpenConflictResolution: Ce
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      b(CI, {
        show: K.value,
        "remote-name": pe.value || "",
        preview: oe.value,
        loading: ze.value,
        pushing: ae.value,
        error: Me.value,
        onClose: Ve,
        onPush: Ne,
        onPullFirst: Qe,
        onRevalidate: Z
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      fe.value && T.value ? (o(), R(t6, {
        key: 0,
        "workflow-conflicts": T.value.workflow_conflicts,
        resolutions: De.value,
        "operation-type": "pull",
        validating: ve.value === "validating",
        error: we.value,
        onClose: ee,
        onResolve: be,
        onApply: j
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      ne.value && ge.value ? (o(), R(b6, {
        key: 1,
        validation: ge.value,
        "operation-type": "pull",
        executing: ve.value === "executing",
        onProceed: he,
        onGoBack: _e,
        onCancel: Ke
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), S6 = /* @__PURE__ */ Te(x6, [["__scopeId", "data-v-a6651a66"]]), I6 = /* @__PURE__ */ Ee({
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
        r.value === "history" ? (o(), R(u8, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: u[1] || (u[1] = (d) => a("select", d)),
          onCheckout: u[2] || (u[2] = (d) => a("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (o(), R(N8, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: u[3] || (u[3] = (d) => a("switch", d)),
          onCreate: u[4] || (u[4] = (d) => a("create", d)),
          onDelete: u[5] || (u[5] = (d) => a("delete", d))
        }, null, 8, ["branches", "current"])) : (o(), R(S6, {
          key: 2,
          embedded: "",
          onToast: u[6] || (u[6] = (d, f) => a("toast", d, f))
        }))
      ]),
      _: 1
    }));
  }
}), E6 = { class: "text-viewer-wrapper" }, T6 = ["disabled", "title"], M6 = { class: "text-content" }, P6 = /* @__PURE__ */ Ee({
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
    return (u, d) => (o(), i("div", E6, [
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
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, T6),
        s("pre", M6, m(e.content), 1)
      ], 544)
    ]));
  }
}), R6 = /* @__PURE__ */ Te(P6, [["__scopeId", "data-v-85a537ba"]]), D6 = {
  key: 1,
  class: "manifest-viewer-shell"
}, N6 = { class: "manifest-path" }, L6 = /* @__PURE__ */ Ee({
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
            })) : (o(), i("div", D6, [
              b(R6, {
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
          s("div", N6, [
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
}), U6 = /* @__PURE__ */ Te(L6, [["__scopeId", "data-v-814a8fdd"]]), O6 = { class: "log-viewer-wrapper" }, A6 = ["disabled", "title"], z6 = /* @__PURE__ */ Ee({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const t = e, n = _(null), a = _("idle"), l = P(() => t.logs.map((f) => ({
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
    return (f, v) => (o(), i("div", O6, [
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
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, A6),
        (o(!0), i(B, null, ye(l.value, (p, w) => (o(), i("div", {
          key: w,
          class: Be(`log-line log-level-${p.level.toLowerCase()}`)
        }, m(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), Mc = /* @__PURE__ */ Te(z6, [["__scopeId", "data-v-5aaf1b88"]]), F6 = /* @__PURE__ */ Ee({
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
          const C = await n();
          f.value = C.environment || "production";
        } catch {
        }
      } catch (C) {
        u.value = C instanceof Error ? C.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
      }
    }
    async function g() {
      try {
        const C = await a();
        C.exists && (v.value = C.path);
      } catch {
      }
    }
    async function k() {
      if (v.value) {
        p.value = !0;
        try {
          await l(v.value);
        } catch (C) {
          console.error("Failed to open log file:", C);
        } finally {
          p.value = !1;
        }
      }
    }
    return ut(() => {
      w(), g();
    }), (C, S) => (o(), i(B, null, [
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
              onInfoClick: S[0] || (S[0] = ($) => d.value = !0)
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
        onClose: S[2] || (S[2] = ($) => d.value = !1)
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
            onClick: S[1] || (S[1] = ($) => d.value = !1)
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
    } = mt(), c = e, u = _(c.initialTab ?? "workspace"), d = _([]), f = _(!1), v = _(null), p = _(!1), w = _(null), g = _(null), k = _(!1), C = P(() => u.value === "workspace" ? w.value : g.value);
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
    async function $() {
      try {
        const [E, M] = await Promise.all([
          n(),
          l()
        ]);
        E.exists && (w.value = E.path), M.exists && (g.value = M.path);
      } catch {
      }
    }
    async function I() {
      if (C.value) {
        k.value = !0;
        try {
          await r(C.value);
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
      S(), $();
    }), (E, M) => (o(), i(B, null, [
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
              onInfoClick: M[0] || (M[0] = (D) => p.value = !0)
            }, {
              actions: h(() => [
                b(Pe, {
                  variant: "secondary",
                  size: "sm",
                  onClick: I,
                  disabled: !C.value || k.value,
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
              "onUpdate:modelValue": M[1] || (M[1] = (D) => u.value = D),
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
        onClose: M[3] || (M[3] = (D) => p.value = !1)
      }, {
        content: h(() => [...M[4] || (M[4] = [
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
            onClick: M[2] || (M[2] = (D) => p.value = !1)
          }, {
            default: h(() => [...M[5] || (M[5] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), V6 = /* @__PURE__ */ Ee({
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
    ), r = _(!1), c = P(() => a.value === "manifest" ? "MANIFEST" : "LOGGING"), u = P(() => a.value === "manifest" ? "About Manifest" : "About Logging");
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
          a.value === "manifest" ? (o(), R(U6, {
            key: 0,
            embedded: ""
          })) : l.value === "env" ? (o(), R(F6, {
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
}), B6 = { class: "header-info" }, W6 = { class: "commit-hash" }, G6 = {
  key: 0,
  class: "commit-refs"
}, j6 = { class: "commit-message" }, H6 = { class: "commit-date" }, q6 = {
  key: 0,
  class: "loading"
}, K6 = {
  key: 1,
  class: "changes-section"
}, J6 = { class: "stats-row" }, Q6 = { class: "stat" }, Y6 = { class: "stat insertions" }, X6 = { class: "stat deletions" }, Z6 = {
  key: 0,
  class: "change-group"
}, eE = {
  key: 1,
  class: "change-group"
}, tE = {
  key: 0,
  class: "version"
}, sE = {
  key: 2,
  class: "change-group"
}, nE = { class: "change-item" }, oE = /* @__PURE__ */ Ee({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const t = e, { getCommitDetail: n } = mt(), a = _(null), l = _(!0), r = P(() => {
      if (!a.value) return !1;
      const u = a.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = P(() => {
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
          s("div", B6, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", W6, m(((f = a.value) == null ? void 0 : f.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (p = a.value) == null ? void 0 : p.refs) != null && w.length ? (o(), i("span", G6, [
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
          s("div", j6, m(((f = a.value) == null ? void 0 : f.message) || e.commit.message), 1),
          s("div", H6, m(((v = a.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (o(), i("div", q6, "Loading details...")) : a.value ? (o(), i("div", K6, [
            s("div", J6, [
              s("span", Q6, m(a.value.stats.files_changed) + " files", 1),
              s("span", Y6, "+" + m(a.value.stats.insertions), 1),
              s("span", X6, "-" + m(a.value.stats.deletions), 1)
            ]),
            r.value ? (o(), i("div", Z6, [
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
            c.value ? (o(), i("div", eE, [
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
                p.version ? (o(), i("span", tE, "(" + m(p.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (o(!0), i(B, null, ye(a.value.changes.nodes.removed, (p) => (o(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p.name), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.changes.models.resolved > 0 ? (o(), i("div", sE, [
              b(_n, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  x("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", nE, [
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
}), aE = /* @__PURE__ */ Te(oE, [["__scopeId", "data-v-d256ff6d"]]), lE = { class: "popover-header" }, iE = { class: "popover-body" }, rE = {
  key: 0,
  class: "changes-summary"
}, cE = {
  key: 0,
  class: "change-item"
}, uE = {
  key: 1,
  class: "change-item"
}, dE = {
  key: 2,
  class: "change-item"
}, mE = {
  key: 3,
  class: "change-item"
}, fE = {
  key: 4,
  class: "change-item"
}, vE = {
  key: 5,
  class: "change-item"
}, pE = {
  key: 1,
  class: "no-changes"
}, gE = {
  key: 2,
  class: "loading"
}, hE = {
  key: 3,
  class: "issues-error"
}, yE = { class: "error-header" }, wE = { class: "error-title" }, _E = { class: "issues-list" }, kE = { class: "workflow-state" }, bE = { class: "message-section" }, $E = { class: "popover-footer" }, CE = {
  key: 1,
  class: "commit-popover"
}, xE = { class: "popover-header" }, SE = { class: "popover-body" }, IE = {
  key: 0,
  class: "changes-summary"
}, EE = {
  key: 0,
  class: "change-item"
}, TE = {
  key: 1,
  class: "change-item"
}, ME = {
  key: 2,
  class: "change-item"
}, PE = {
  key: 3,
  class: "change-item"
}, RE = {
  key: 4,
  class: "change-item"
}, DE = {
  key: 5,
  class: "change-item"
}, NE = {
  key: 1,
  class: "no-changes"
}, LE = {
  key: 2,
  class: "loading"
}, UE = {
  key: 3,
  class: "issues-error"
}, OE = { class: "error-header" }, AE = { class: "error-title" }, zE = { class: "issues-list" }, FE = { class: "workflow-state" }, VE = { class: "message-section" }, BE = { class: "popover-footer" }, WE = /* @__PURE__ */ Ee({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { commit: l } = mt(), r = _(""), c = _(!1), u = _(!1), d = P(() => {
      if (!n.status) return !1;
      const k = n.status.workflows;
      return k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || n.status.has_changes;
    }), f = P(() => {
      if (!n.status) return !1;
      const k = n.status.workflows, C = n.status.git_changes;
      return k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || C.nodes_added.length > 0 || C.nodes_removed.length > 0;
    }), v = P(() => {
      var k;
      return (k = n.status) != null && k.workflows.analyzed ? n.status.workflows.analyzed.filter((C) => C.has_issues) : [];
    }), p = P(() => v.value.length > 0), w = P(() => p.value && !u.value);
    async function g() {
      var k, C, S, $;
      if (!(p.value && !u.value) && !(!d.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const I = await l(r.value.trim(), u.value);
          if (I.status === "success") {
            const E = `Committed: ${((k = I.summary) == null ? void 0 : k.new) || 0} new, ${((C = I.summary) == null ? void 0 : C.modified) || 0} modified, ${((S = I.summary) == null ? void 0 : S.deleted) || 0} deleted`;
            a("committed", { success: !0, message: E });
          } else if (I.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (I.status === "blocked") {
            const E = (($ = I.issues) == null ? void 0 : $.map((M) => `${M.name}: ${M.issue}`).join("; ")) || "Unknown issues";
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
    return (k, C) => e.asModal ? (o(), R(as, {
      key: 0,
      to: "body"
    }, [
      s("div", {
        class: "modal-overlay",
        onClick: C[5] || (C[5] = (S) => a("close"))
      }, [
        s("div", {
          class: "commit-popover modal",
          onClick: C[4] || (C[4] = bt(() => {
          }, ["stop"]))
        }, [
          s("div", lE, [
            C[11] || (C[11] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            s("button", {
              class: "close-btn",
              onClick: C[0] || (C[0] = (S) => a("close"))
            }, [...C[10] || (C[10] = [
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
          s("div", iE, [
            e.status && d.value ? (o(), i("div", rE, [
              e.status.workflows.new.length ? (o(), i("div", cE, [
                C[12] || (C[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (o(), i("div", uE, [
                C[13] || (C[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (o(), i("div", dE, [
                C[14] || (C[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (o(), i("div", mE, [
                C[15] || (C[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (o(), i("div", fE, [
                C[16] || (C[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              f.value ? y("", !0) : (o(), i("div", vE, [...C[17] || (C[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (o(), i("div", pE, " No changes to commit ")) : (o(), i("div", gE, " Loading... ")),
            p.value ? (o(), i("div", hE, [
              s("div", yE, [
                C[18] || (C[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", wE, m(v.value.length) + " workflow(s) have issues", 1)
              ]),
              s("div", _E, [
                (o(!0), i(B, null, ye(v.value, (S) => (o(), i("div", {
                  key: S.name,
                  class: "issue-item"
                }, [
                  s("strong", null, m(S.name), 1),
                  s("span", kE, "(" + m(S.sync_state) + ")", 1),
                  x(": " + m(S.issue_summary), 1)
                ]))), 128))
              ]),
              b(ca, {
                modelValue: u.value,
                "onUpdate:modelValue": C[1] || (C[1] = (S) => u.value = S),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...C[19] || (C[19] = [
                  x(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            s("div", bE, [
              b(An, {
                modelValue: r.value,
                "onUpdate:modelValue": C[2] || (C[2] = (S) => r.value = S),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: g,
                onSubmit: g
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          s("div", $E, [
            b(Ue, {
              variant: "secondary",
              onClick: C[3] || (C[3] = (S) => a("close"))
            }, {
              default: h(() => [...C[20] || (C[20] = [
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
    ])) : (o(), i("div", CE, [
      s("div", xE, [
        C[22] || (C[22] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        s("button", {
          class: "close-btn",
          onClick: C[6] || (C[6] = (S) => a("close"))
        }, [...C[21] || (C[21] = [
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
      s("div", SE, [
        e.status && d.value ? (o(), i("div", IE, [
          e.status.workflows.new.length ? (o(), i("div", EE, [
            C[23] || (C[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (o(), i("div", TE, [
            C[24] || (C[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (o(), i("div", ME, [
            C[25] || (C[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (o(), i("div", PE, [
            C[26] || (C[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (o(), i("div", RE, [
            C[27] || (C[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          f.value ? y("", !0) : (o(), i("div", DE, [...C[28] || (C[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (o(), i("div", NE, " No changes to commit ")) : (o(), i("div", LE, " Loading... ")),
        p.value ? (o(), i("div", UE, [
          s("div", OE, [
            C[29] || (C[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", AE, m(v.value.length) + " workflow(s) have issues", 1)
          ]),
          s("div", zE, [
            (o(!0), i(B, null, ye(v.value, (S) => (o(), i("div", {
              key: S.name,
              class: "issue-item"
            }, [
              s("strong", null, m(S.name), 1),
              s("span", FE, "(" + m(S.sync_state) + ")", 1),
              x(": " + m(S.issue_summary), 1)
            ]))), 128))
          ]),
          b(ca, {
            modelValue: u.value,
            "onUpdate:modelValue": C[7] || (C[7] = (S) => u.value = S),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...C[30] || (C[30] = [
              x(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        s("div", VE, [
          b(An, {
            modelValue: r.value,
            "onUpdate:modelValue": C[8] || (C[8] = (S) => r.value = S),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: g,
            onSubmit: g
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      s("div", BE, [
        b(Ue, {
          variant: "secondary",
          onClick: C[9] || (C[9] = (S) => a("close"))
        }, {
          default: h(() => [...C[31] || (C[31] = [
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
}), Pc = /* @__PURE__ */ Te(WE, [["__scopeId", "data-v-5f897631"]]), GE = { class: "switch-body" }, jE = { class: "switch-message" }, HE = { class: "switch-details" }, qE = /* @__PURE__ */ Ee({
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
        s("div", GE, [
          s("p", jE, [
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
          s("p", HE, ' Your current work will be preserved. You can switch back to "' + m(e.fromEnvironment) + '" anytime. ', 1),
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
}), KE = /* @__PURE__ */ Te(qE, [["__scopeId", "data-v-f6d223e6"]]), JE = {
  key: 0,
  class: "modal-overlay"
}, QE = { class: "modal-content" }, YE = { class: "modal-body" }, XE = { class: "progress-info" }, ZE = { class: "progress-percentage" }, eT = { class: "progress-state" }, tT = { class: "switch-steps" }, sT = { class: "step-icon" }, nT = { class: "step-label" }, oT = /* @__PURE__ */ Ee({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const t = e, n = P(() => {
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
    }), a = P(() => t.state === "complete" ? "success" : t.state === "critical_failure" || t.state === "rolled_back" ? "error" : "default"), l = P(() => {
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
      e.show ? (o(), i("div", JE, [
        s("div", QE, [
          c[1] || (c[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", YE, [
            b(Cc, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            s("div", XE, [
              s("div", ZE, m(e.progress) + "%", 1),
              s("div", eT, m(n.value), 1)
            ]),
            s("div", tT, [
              (o(!0), i(B, null, ye(l.value, (u) => (o(), i("div", {
                key: u.state,
                class: Be(["switch-step", u.status])
              }, [
                s("span", sT, m(u.icon), 1),
                s("span", nT, m(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), aT = /* @__PURE__ */ Te(oT, [["__scopeId", "data-v-768a5078"]]), lT = { class: "modal-header" }, iT = { class: "modal-body" }, rT = {
  key: 0,
  class: "node-section"
}, cT = { class: "node-list" }, uT = {
  key: 1,
  class: "node-section"
}, dT = { class: "node-list" }, mT = { class: "modal-actions" }, fT = /* @__PURE__ */ Ee({
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
          s("div", lT, [
            n[5] || (n[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", iT, [
            n[8] || (n[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (o(), i("div", rT, [
              n[6] || (n[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", cT, [
                (o(!0), i(B, null, ye(e.mismatchDetails.missing_nodes, (a) => (o(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + m(a), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (o(), i("div", uT, [
              n[7] || (n[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", dT, [
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
          s("div", mT, [
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
}), vT = /* @__PURE__ */ Te(fT, [["__scopeId", "data-v-7cad7518"]]), pT = [
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
], Bo = "v0.0.24", gT = "Akatz", hT = { class: "social-buttons" }, yT = ["title", "aria-label", "onClick"], wT = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, _T = ["d"], kT = ["title", "aria-label", "onClick"], bT = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, $T = ["d"], CT = /* @__PURE__ */ Ee({
  __name: "SocialButtons",
  setup(e) {
    function t(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, a) => (o(), i("div", hT, [
      (o(!0), i(B, null, ye(at(pT), (l) => (o(), i(B, {
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
          (o(), i("svg", wT, [
            s("path", {
              d: l.iconPath
            }, null, 8, _T)
          ]))
        ], 8, yT)) : (o(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          (o(), i("svg", bT, [
            s("path", {
              d: l.iconPath
            }, null, 8, $T)
          ]))
        ], 8, kT))
      ], 64))), 128))
    ]));
  }
}), Rc = /* @__PURE__ */ Te(CT, [["__scopeId", "data-v-4f846342"]]), xT = { class: "footer-info" }, ST = ["title"], IT = {
  key: 0,
  class: "dev-badge"
}, ET = { class: "made-by" }, TT = /* @__PURE__ */ Ee({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: t } = mt(), n = _(null), a = _(null), l = _(null), r = P(() => n.value === "development"), c = P(() => {
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
    }), (u, d) => (o(), i("div", xT, [
      s("span", {
        class: "version",
        title: c.value
      }, [
        x(m(at(Bo)) + " ", 1),
        r.value ? (o(), i("span", IT, "dev")) : y("", !0)
      ], 8, ST),
      s("span", ET, [
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
        x(" by " + m(at(gT)), 1)
      ])
    ]));
  }
}), Dc = /* @__PURE__ */ Te(TT, [["__scopeId", "data-v-4fa265b3"]]), MT = /* @__PURE__ */ Ee({
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
}), PT = /* @__PURE__ */ Te(MT, [["__scopeId", "data-v-fac00ae7"]]), RT = { class: "header-actions" }, DT = {
  key: 0,
  class: "wizard-step"
}, NT = { class: "form-field" }, LT = ["placeholder"], UT = {
  key: 0,
  class: "form-error"
}, OT = { class: "form-field form-field--checkbox" }, AT = { class: "form-checkbox" }, zT = {
  key: 0,
  class: "form-field"
}, FT = ["placeholder"], VT = {
  key: 0,
  class: "form-info"
}, BT = {
  key: 1,
  class: "form-suggestion"
}, WT = {
  key: 2,
  class: "form-error"
}, GT = {
  key: 3,
  class: "form-info"
}, jT = {
  key: 1,
  class: "wizard-step"
}, HT = {
  key: 0,
  class: "progress-check-loading"
}, qT = {
  key: 0,
  class: "cli-warning"
}, KT = { class: "cli-warning-header" }, JT = {
  key: 1,
  class: "env-landing"
}, QT = { class: "env-list" }, YT = ["value"], XT = { class: "env-name" }, ZT = {
  key: 2,
  class: "env-create"
}, eM = { class: "form-field" }, tM = { class: "form-field" }, sM = ["value"], nM = { class: "form-field" }, oM = ["disabled"], aM = ["value"], lM = { class: "form-field" }, iM = ["value"], rM = { class: "form-field form-field--checkbox" }, cM = { class: "form-checkbox" }, uM = {
  key: 0,
  class: "form-error"
}, dM = {
  key: 1,
  class: "env-creating"
}, mM = { class: "creating-intro" }, fM = {
  key: 3,
  class: "env-import"
}, vM = { class: "wizard-footer" }, pM = { class: "wizard-footer-actions" }, In = 10, gM = 600 * 1e3, Ui = 1800 * 1e3, hM = /* @__PURE__ */ Ee({
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
    } = mt(), p = _(n.initialStep || 1), w = _(null), g = _("landing"), k = _(!1), C = _(!1), S = _(!1), $ = _(!1), I = _(null), E = _(n.initialStep === 2), M = _(n.defaultPath), D = _(!!n.detectedModelsDir), O = _(n.detectedModelsDir || ""), F = _(null), N = _(null), q = _(null), ce = _(null), de = _("my-new-env"), Q = _(bc), te = _("latest"), W = _($c), A = _(!0), V = _(null), ve = _(null), se = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), fe = _(!1), ne = _(!1), K = _(!1), oe = _({ progress: 0, message: "" }), ae = _({ progress: 0, message: "" }), Me = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], pe = _(0), ze = _(null), Le = _(0), ke = _(null), De = P(() => {
      var Ne, Qe;
      const xe = (Ne = M.value) == null ? void 0 : Ne.trim(), Z = !F.value, Ve = !D.value || !N.value && ((Qe = O.value) == null ? void 0 : Qe.trim());
      return xe && Z && Ve;
    }), ge = P(() => {
      var xe;
      return (xe = de.value) == null ? void 0 : xe.trim();
    }), we = P(() => !!(p.value === 2 || ve.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), T = P(() => ve.value || n.workspacePath || null);
    async function U() {
      var xe;
      if (F.value = null, !!((xe = M.value) != null && xe.trim()))
        try {
          const Z = await c({ path: M.value, type: "workspace" });
          Z.valid || (F.value = Z.error || "Invalid path");
        } catch (Z) {
          F.value = Z instanceof Error ? Z.message : "Validation failed";
        }
    }
    async function ie() {
      var xe;
      if (N.value = null, q.value = null, ce.value = null, !!((xe = O.value) != null && xe.trim()))
        try {
          const Z = await c({ path: O.value, type: "models" });
          if (Z.valid)
            ce.value = Z.model_count ?? null;
          else if (N.value = Z.error || "Invalid path", Z.suggestion) {
            q.value = Z.suggestion, O.value = Z.suggestion, N.value = null;
            const Ve = await c({ path: Z.suggestion, type: "models" });
            Ve.valid && (ce.value = Ve.model_count ?? null);
          }
        } catch (Z) {
          N.value = Z instanceof Error ? Z.message : "Validation failed";
        }
    }
    async function Ie() {
      var xe, Z, Ve, Ne, Qe;
      if (F.value = null, N.value = null, await U(), (xe = F.value) != null && xe.includes("already exists")) {
        F.value = null, ve.value = ((Z = M.value) == null ? void 0 : Z.trim()) || n.defaultPath, p.value = 2, be();
        return;
      }
      if (!F.value && !(D.value && ((Ve = O.value) != null && Ve.trim()) && (await ie(), N.value))) {
        ne.value = !0;
        try {
          await l({
            workspace_path: ((Ne = M.value) == null ? void 0 : Ne.trim()) || n.defaultPath,
            models_directory: D.value && ((Qe = O.value) == null ? void 0 : Qe.trim()) || null
          }), pe.value = 0, ze.value = Date.now();
          const Fe = setInterval(async () => {
            var Ae;
            if (ze.value && Date.now() - ze.value > gM) {
              clearInterval(Fe), ne.value = !1, F.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Xe = await r();
              if (pe.value = 0, Xe.state === "idle" && ne.value) {
                clearInterval(Fe), ne.value = !1, F.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              oe.value = { progress: Xe.progress, message: Xe.message }, Xe.state === "complete" ? (clearInterval(Fe), ne.value = !1, ve.value = ((Ae = M.value) == null ? void 0 : Ae.trim()) || n.defaultPath, p.value = 2, be()) : Xe.state === "error" && (clearInterval(Fe), ne.value = !1, F.value = Xe.error || "Workspace creation failed");
            } catch (Xe) {
              pe.value++, console.warn(`Polling failure ${pe.value}/${In}:`, Xe), pe.value >= In && (clearInterval(Fe), ne.value = !1, F.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Fe) {
          ne.value = !1, F.value = Fe instanceof Error ? Fe.message : "Failed to create workspace";
        }
      }
    }
    async function Ce() {
      K.value = !0, V.value = null;
      try {
        const xe = {
          name: de.value.trim() || "my-new-env",
          python_version: Q.value,
          comfyui_version: te.value,
          torch_backend: W.value,
          switch_after: A.value,
          workspace_path: ve.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(xe)).status === "started") {
          Le.value = 0, ke.value = Date.now();
          const Ve = setInterval(async () => {
            if (ke.value && Date.now() - ke.value > Ui) {
              clearInterval(Ve), K.value = !1, V.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Ne = await d();
              if (Le.value = 0, Ne.state === "idle" && K.value) {
                clearInterval(Ve), K.value = !1, V.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (ae.value = {
                progress: Ne.progress ?? 0,
                message: Ne.message,
                phase: Ne.phase
              }, Ne.state === "complete") {
                clearInterval(Ve), K.value = !1;
                const Qe = Ne.environment_name || xe.name;
                A.value ? a("complete", Qe, ve.value) : (g.value = "landing", a("environment-created-no-switch", Qe));
              } else Ne.state === "error" && (clearInterval(Ve), K.value = !1, V.value = Ne.error || "Environment creation failed");
            } catch (Ne) {
              Le.value++, console.warn(`Polling failure ${Le.value}/${In}:`, Ne), Le.value >= In && (clearInterval(Ve), K.value = !1, V.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (xe) {
        K.value = !1, V.value = xe instanceof Error ? xe.message : "Unknown error";
      }
    }
    async function be() {
      fe.value = !0;
      try {
        se.value = await v();
      } catch (xe) {
        console.error("Failed to load ComfyUI releases:", xe);
      } finally {
        fe.value = !1;
      }
    }
    function ee() {
      w.value && a("switch-environment", w.value, ve.value);
    }
    function j() {
      g.value === "create" || g.value === "import" ? g.value = "landing" : p.value === 2 && n.setupState === "no_workspace" && (p.value = 1);
    }
    function he(xe, Z) {
      C.value = !1, Z ? a("complete", xe, ve.value) : (a("environment-created-no-switch", xe), g.value = "landing");
    }
    function _e() {
    }
    ut(async () => {
      if (n.detectedModelsDir && (O.value = n.detectedModelsDir), n.workspacePath && (ve.value = n.workspacePath), p.value === 2) {
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
          console.log("[ComfyGit] Resuming in-progress environment creation:", xe.environment_name), g.value = "create", K.value = !0, de.value = xe.environment_name || "my-new-env", ae.value = {
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
        }, $.value = !0, g.value = "import", C.value = !0);
      } catch (xe) {
        console.log("[ComfyGit] Import progress check failed:", xe);
      }
    }
    async function We() {
      Le.value = 0, ke.value = Date.now();
      let xe = null;
      const Z = async () => {
        if (ke.value && Date.now() - ke.value > Ui)
          return xe && clearInterval(xe), K.value = !1, V.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Ne = await d();
          if (Le.value = 0, Ne.state === "idle" && K.value)
            return xe && clearInterval(xe), K.value = !1, V.value = "Environment creation was interrupted. Please try again.", !1;
          if (ae.value = {
            progress: Ne.progress ?? 0,
            message: Ne.message,
            phase: Ne.phase
          }, Ne.state === "complete") {
            xe && clearInterval(xe), K.value = !1;
            const Qe = Ne.environment_name || de.value;
            return a("complete", Qe, ve.value), !1;
          } else if (Ne.state === "error")
            return xe && clearInterval(xe), K.value = !1, V.value = Ne.error || "Environment creation failed", !1;
          return !0;
        } catch (Ne) {
          return Le.value++, console.warn(`Polling failure ${Le.value}/${In}:`, Ne), Le.value >= In ? (xe && clearInterval(xe), K.value = !1, V.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
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
          s("div", RT, [
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
            p.value === 1 ? (o(), i("div", DT, [
              Z[24] || (Z[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", NT, [
                Z[21] || (Z[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                Ot(s("input", {
                  "onUpdate:modelValue": Z[2] || (Z[2] = (Ne) => M.value = Ne),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, LT), [
                  [go, M.value]
                ]),
                F.value ? (o(), i("p", UT, m(F.value), 1)) : y("", !0)
              ]),
              s("div", OT, [
                s("label", AT, [
                  Ot(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": Z[3] || (Z[3] = (Ne) => D.value = Ne)
                  }, null, 512), [
                    [ia, D.value]
                  ]),
                  Z[22] || (Z[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              D.value ? (o(), i("div", zT, [
                Z[23] || (Z[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                Ot(s("input", {
                  "onUpdate:modelValue": Z[4] || (Z[4] = (Ne) => O.value = Ne),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, FT), [
                  [go, O.value]
                ]),
                e.detectedModelsDir && !O.value ? (o(), i("p", VT, " Detected: " + m(e.detectedModelsDir), 1)) : y("", !0),
                q.value ? (o(), i("p", BT, " Did you mean: " + m(q.value), 1)) : y("", !0),
                N.value ? (o(), i("p", WT, m(N.value), 1)) : y("", !0),
                ce.value !== null && !N.value ? (o(), i("p", GT, " Found " + m(ce.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              ne.value ? (o(), R(ra, {
                key: 1,
                progress: oe.value.progress,
                message: oe.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            p.value === 2 ? (o(), i("div", jT, [
              E.value ? (o(), i("div", HT, [...Z[25] || (Z[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (o(), i(B, { key: 1 }, [
                !n.cliInstalled && !S.value ? (o(), i("div", qT, [
                  s("div", KT, [
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
                g.value === "landing" ? (o(), i("div", JT, [
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
                      $.value = !1, g.value = "import";
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
                    s("div", QT, [
                      (o(!0), i(B, null, ye(n.existingEnvironments, (Ne) => (o(), i("label", {
                        key: Ne,
                        class: Be(["env-option", { selected: w.value === Ne }])
                      }, [
                        Ot(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: Ne,
                          "onUpdate:modelValue": Z[8] || (Z[8] = (Qe) => w.value = Qe)
                        }, null, 8, YT), [
                          [Ko, w.value]
                        ]),
                        s("span", XT, m(Ne), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : g.value === "create" ? (o(), i("div", ZT, [
                  K.value ? (o(), i("div", dM, [
                    s("p", mM, [
                      Z[41] || (Z[41] = x(" Creating environment ", -1)),
                      s("strong", null, m(de.value), 1),
                      Z[42] || (Z[42] = x("... ", -1))
                    ]),
                    b(ra, {
                      progress: ae.value.progress,
                      message: ae.value.message,
                      "current-phase": ae.value.phase,
                      "show-steps": !0,
                      steps: Me
                    }, null, 8, ["progress", "message", "current-phase"]),
                    Z[43] || (Z[43] = s("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (o(), i(B, { key: 0 }, [
                    Z[40] || (Z[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", eM, [
                      Z[35] || (Z[35] = s("label", { class: "form-label" }, "Environment Name", -1)),
                      Ot(s("input", {
                        "onUpdate:modelValue": Z[9] || (Z[9] = (Ne) => de.value = Ne),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [go, de.value]
                      ])
                    ]),
                    s("div", tM, [
                      Z[36] || (Z[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      Ot(s("select", {
                        "onUpdate:modelValue": Z[10] || (Z[10] = (Ne) => Q.value = Ne),
                        class: "form-select"
                      }, [
                        (o(!0), i(B, null, ye(at(kc), (Ne) => (o(), i("option", {
                          key: Ne,
                          value: Ne
                        }, m(Ne), 9, sM))), 128))
                      ], 512), [
                        [On, Q.value]
                      ])
                    ]),
                    s("div", nM, [
                      Z[37] || (Z[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Ot(s("select", {
                        "onUpdate:modelValue": Z[11] || (Z[11] = (Ne) => te.value = Ne),
                        class: "form-select",
                        disabled: fe.value
                      }, [
                        (o(!0), i(B, null, ye(se.value, (Ne) => (o(), i("option", {
                          key: Ne.tag_name,
                          value: Ne.tag_name
                        }, m(Ne.name), 9, aM))), 128))
                      ], 8, oM), [
                        [On, te.value]
                      ])
                    ]),
                    s("div", lM, [
                      Z[38] || (Z[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Ot(s("select", {
                        "onUpdate:modelValue": Z[12] || (Z[12] = (Ne) => W.value = Ne),
                        class: "form-select"
                      }, [
                        (o(!0), i(B, null, ye(at(Nl), (Ne) => (o(), i("option", {
                          key: Ne,
                          value: Ne
                        }, m(Ne) + m(Ne === "auto" ? " (detect GPU)" : ""), 9, iM))), 128))
                      ], 512), [
                        [On, W.value]
                      ])
                    ]),
                    s("div", rM, [
                      s("label", cM, [
                        Ot(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": Z[13] || (Z[13] = (Ne) => A.value = Ne)
                        }, null, 512), [
                          [ia, A.value]
                        ]),
                        Z[39] || (Z[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    V.value ? (o(), i("div", uM, m(V.value), 1)) : y("", !0)
                  ], 64))
                ])) : g.value === "import" ? (o(), i("div", fM, [
                  b(Sc, {
                    "workspace-path": ve.value,
                    "resume-import": $.value,
                    "initial-progress": I.value ?? void 0,
                    onImportComplete: he,
                    onImportStarted: Z[14] || (Z[14] = (Ne) => C.value = !0),
                    onSourceCleared: _e
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          s("div", vM, [
            b(Dc),
            s("div", pM, [
              p.value === 1 ? (o(), R(Ue, {
                key: 0,
                variant: "primary",
                disabled: !De.value || ne.value,
                onClick: Ie
              }, {
                default: h(() => [
                  x(m(ne.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (o(), i(B, { key: 1 }, [
                !K.value && !C.value && (g.value !== "landing" || n.setupState === "no_workspace" && !ve.value) ? (o(), R(Ue, {
                  key: 0,
                  variant: "secondary",
                  onClick: j
                }, {
                  default: h(() => [...Z[44] || (Z[44] = [
                    x(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                g.value === "create" ? (o(), R(Ue, {
                  key: 1,
                  variant: "primary",
                  disabled: !ge.value || K.value,
                  onClick: Ce
                }, {
                  default: h(() => [
                    x(m(K.value ? "Creating..." : A.value ? "Create & Switch" : "Create Environment"), 1)
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
      k.value ? (o(), R(PT, {
        key: 0,
        "workspace-path": T.value,
        onClose: Z[16] || (Z[16] = (Ve) => k.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), yM = /* @__PURE__ */ Te(hM, [["__scopeId", "data-v-9a9aadc0"]]), wM = { class: "update-banner" }, _M = { class: "update-banner__left" }, kM = { class: "update-banner__title" }, bM = {
  key: 0,
  class: "update-banner__summary"
}, $M = { class: "update-banner__actions" }, CM = ["disabled"], xM = ["disabled"], SM = ["disabled"], IM = /* @__PURE__ */ Ee({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: t }) {
    const n = t;
    return (a, l) => (o(), i("div", wM, [
      s("div", _M, [
        s("div", kM, " ComfyGit Manager v" + m(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (o(), i("div", bM, m(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      s("div", $M, [
        s("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => n("update"))
        }, m(e.updating ? "Updating…" : "Update"), 9, CM),
        e.info.release_url ? (o(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => n("release-notes"))
        }, " Release notes ", 8, xM)) : y("", !0),
        s("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => n("dismiss"))
        }, " Dismiss ", 8, SM)
      ])
    ]));
  }
}), EM = /* @__PURE__ */ Te(IM, [["__scopeId", "data-v-49562c5c"]]), Nc = "ComfyGit.UpdateNotice.DismissedVersion";
function TM() {
  try {
    return localStorage.getItem(Nc);
  } catch {
    return null;
  }
}
function MM(e) {
  try {
    localStorage.setItem(Nc, e);
  } catch {
  }
}
function PM(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : TM() !== e.latest_version;
}
const RM = { class: "comfygit-panel" }, DM = { class: "panel-header" }, NM = { class: "header-left" }, LM = {
  key: 0,
  class: "header-info"
}, UM = { class: "header-actions" }, OM = { class: "env-switcher" }, AM = { class: "env-switcher-header" }, zM = { class: "env-control-buttons" }, FM = {
  key: 0,
  class: "header-info"
}, VM = { class: "branch-name" }, BM = { class: "panel-main" }, WM = { class: "sidebar" }, GM = { class: "sidebar-content" }, jM = { class: "sidebar-section" }, HM = { class: "sidebar-section" }, qM = { class: "sidebar-section" }, KM = { class: "sidebar-footer" }, JM = { class: "content-area" }, QM = {
  key: 0,
  class: "error-message"
}, YM = {
  key: 1,
  class: "loading"
}, XM = { class: "dialog-content env-selector-dialog" }, ZM = { class: "dialog-header" }, eP = { class: "dialog-body" }, tP = { class: "env-list" }, sP = { class: "env-info" }, nP = { class: "env-name-row" }, oP = { class: "env-indicator" }, aP = { class: "env-name" }, lP = {
  key: 0,
  class: "env-branch"
}, iP = {
  key: 1,
  class: "current-label"
}, rP = { class: "env-stats" }, cP = ["onClick"], uP = { class: "toast-container" }, dP = { class: "toast-message" }, Oi = "ComfyGit.LastView", Ai = "ComfyGit.LastSection", mP = /* @__PURE__ */ Ee({
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
      syncEnvironmentManually: C,
      repairWorkflowModels: S,
      getSetupStatus: $,
      getUpdateCheck: I,
      updateManager: E
    } = mt(), M = Kh(), D = _(null), O = _([]), F = _([]), N = _([]), q = P(() => N.value.find((re) => re.is_current)), ce = _(null), de = _(!1), Q = _(!1), te = _("remotes");
    function W(re) {
      return re ? {
        manifest: "manifest",
        "debug-env": "env",
        "debug-workspace": "workspace",
        "debug-orchestrator": "orchestrator"
      }[re] ?? "manifest" : "manifest";
    }
    const A = _(W(n.initialView)), V = _(null), ve = _(!1), se = _(1), fe = P(() => {
      var re;
      return ((re = V.value) == null ? void 0 : re.state) || "managed";
    }), ne = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, K = P(() => {
      var re, H;
      return ((H = (re = V.value) == null ? void 0 : re.runtime_context) == null ? void 0 : H.capabilities) || ne;
    }), oe = _(!1), ae = _(null), Me = _(null), pe = _(!1), ze = _(null), Le = _(!1), ke = _(!1), De = P(() => !Le.value && PM(ze.value)), ge = _(null), we = _(null), T = _(null), U = _(!1), ie = _(!1), Ie = _(""), Ce = _(null), be = _({ state: "idle", progress: 0, message: "" });
    let ee = null, j = null;
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
        const re = sessionStorage.getItem(Oi), H = sessionStorage.getItem(Ai), Ye = re === "branches" || re === "history" || re === "remotes" ? "version-control" : re === "manifest" || re === "debug-env" || re === "debug-workspace" ? "diagnostics" : re, nt = H === "all-envs" ? "workspace" : H === "sharing" ? "version-control" : H;
        if (re && H && Ke.includes(Ye) && We.includes(nt))
          return { view: Ye, section: nt };
      } catch {
      }
      return null;
    }
    const Z = xe(), Ve = _((_e == null ? void 0 : _e.view) ?? (Z == null ? void 0 : Z.view) ?? "status"), Ne = _((_e == null ? void 0 : _e.section) ?? (Z == null ? void 0 : Z.section) ?? "this-env");
    function Qe(re, H) {
      Ve.value = re, Ne.value = H;
      try {
        sessionStorage.setItem(Oi, re), sessionStorage.setItem(Ai, H);
      } catch {
      }
    }
    function Fe(re) {
      const Ye = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" }
      }[re];
      Ye && Qe(Ye.view, Ye.section);
    }
    function Ae(re) {
      te.value = re, Qe("version-control", "version-control");
    }
    function Xe(re) {
      A.value = re, Qe("diagnostics", "diagnostics");
    }
    function kt() {
      Ae("branches");
    }
    function Lt() {
      a("close"), setTimeout(async () => {
        await Kt("Comfy.OpenManagerDialog") || await Kt("Comfy.Manager.CustomNodesManager.ShowCustomNodesMenu") || X(["Extensions", "Manage extensions"]) || X(["Manager"]) || console.warn("[ComfyGit] Extensions manager entrypoint not found");
      }, 100);
    }
    async function Kt(re) {
      var nt, gt;
      const H = window.app, Ye = [
        (nt = H == null ? void 0 : H.extensionManager) == null ? void 0 : nt.command,
        (gt = H == null ? void 0 : H.extensionManager) == null ? void 0 : gt.commands,
        H == null ? void 0 : H.command,
        H == null ? void 0 : H.commands
      ];
      for (const xt of Ye)
        if (typeof (xt == null ? void 0 : xt.execute) == "function")
          try {
            return await xt.execute(re), !0;
          } catch (Bt) {
            console.debug(`[ComfyGit] Command ${re} did not open Extensions manager`, Bt);
          }
      return !1;
    }
    function X(re) {
      var nt, gt, xt;
      const H = re.map((Bt) => Bt.toLowerCase()), Ye = document.querySelectorAll('button, [role="button"]');
      for (const Bt of Ye) {
        const vs = Bt;
        if ([
          (nt = vs.textContent) == null ? void 0 : nt.trim(),
          (gt = vs.getAttribute("title")) == null ? void 0 : gt.trim(),
          (xt = vs.getAttribute("aria-label")) == null ? void 0 : xt.trim()
        ].filter(Boolean).map((Zs) => Zs.toLowerCase()).some((Zs) => H.includes(Zs)))
          return vs.click(), !0;
      }
      return !1;
    }
    const G = _(null), me = _(!1), Je = _(!1), Ge = _([]);
    let it = 0;
    function Oe(re, H = "info", Ye = 3e3) {
      const nt = ++it;
      return Ge.value.push({ id: nt, message: re, type: H }), Ye > 0 && setTimeout(() => {
        Ge.value = Ge.value.filter((gt) => gt.id !== nt);
      }, Ye), nt;
    }
    function rt(re) {
      Ge.value = Ge.value.filter((H) => H.id !== re);
    }
    function Pt(re, H) {
      Oe(re, H);
    }
    async function Jt() {
      ze.value = null, Le.value = !1;
      try {
        ze.value = await I();
      } catch {
      }
    }
    function cs() {
      var H;
      const re = (H = ze.value) == null ? void 0 : H.release_url;
      if (re)
        try {
          window.open(re, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function Ft() {
      var H;
      const re = (H = ze.value) == null ? void 0 : H.latest_version;
      re && MM(re), Le.value = !0;
    }
    async function J() {
      if (ke.value) return;
      ke.value = !0;
      const re = Oe("Updating comfygit-manager...", "info", 0);
      try {
        const H = await E();
        if (rt(re), H.status !== "success") {
          if (Oe(H.message || "Update failed", "error"), H.manual_instructions) {
            const Ye = H.manual_instructions.split(`
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
        if (Oe(H.message || "Update complete", "success"), Ft(), H.restart_required) {
          ht();
          try {
            await qs("/v2/manager/reboot");
          } catch {
          }
        }
      } catch (H) {
        rt(re);
        const Ye = H instanceof Error ? H.message : "Update failed";
        Oe(Ye, "error");
      } finally {
        ke.value = !1;
      }
    }
    const ue = P(() => {
      if (!D.value) return "neutral";
      const re = D.value.workflows, H = re.new.length > 0 || re.modified.length > 0 || re.deleted.length > 0 || D.value.has_changes;
      return D.value.comparison.is_synced ? H ? "warning" : "success" : "error";
    });
    P(() => D.value ? ue.value === "success" ? "All synced" : ue.value === "warning" ? "Uncommitted changes" : ue.value === "error" ? "Not synced" : "" : "");
    async function Re(re = {}) {
      oe.value = !0, ae.value = null;
      try {
        const [H, Ye, nt, gt] = await Promise.all([
          l(!0),
          r(),
          c(),
          p()
        ]);
        D.value = H, O.value = Ye.commits, F.value = nt.branches, N.value = gt, a("statusUpdate", H), (re.refreshWorkflows ?? !0) && ge.value && await ge.value.loadWorkflows(!0);
      } catch (H) {
        ae.value = H instanceof Error ? H.message : "Failed to load status", D.value = null, O.value = [], F.value = [];
      } finally {
        oe.value = !1;
      }
    }
    function $e(re) {
      Me.value = re;
    }
    async function qe(re) {
      var Ye;
      Me.value = null;
      const H = D.value && (D.value.workflows.new.length > 0 || D.value.workflows.modified.length > 0 || D.value.workflows.deleted.length > 0 || D.value.has_changes);
      G.value = {
        title: H ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: H ? "You have uncommitted changes that will be lost." : `Checkout commit ${re.short_hash || ((Ye = re.hash) == null ? void 0 : Ye.slice(0, 7))}?`,
        details: H ? Do() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: H ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: H,
        onConfirm: async () => {
          var xt;
          G.value = null, ht();
          const nt = Oe(`Checking out ${re.short_hash || ((xt = re.hash) == null ? void 0 : xt.slice(0, 7))}...`, "info", 0), gt = await u(re.hash, H);
          rt(nt), gt.status === "success" ? Oe("Restarting ComfyUI...", "success") : Oe(gt.message || "Checkout failed", "error");
        }
      };
    }
    async function Ze(re) {
      const H = D.value && (D.value.workflows.new.length > 0 || D.value.workflows.modified.length > 0 || D.value.workflows.deleted.length > 0 || D.value.has_changes);
      G.value = {
        title: H ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: H ? "You have uncommitted changes." : `Switch to branch "${re}"?`,
        details: H ? Do() : void 0,
        warning: H ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: H ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          G.value = null, ht();
          const Ye = Oe(`Switching to ${re}...`, "info", 0), nt = await f(re, H);
          rt(Ye), nt.status === "success" ? Oe("Restarting ComfyUI...", "success") : Oe(nt.message || "Branch switch failed", "error");
        }
      };
    }
    async function lt(re) {
      const H = Oe(`Creating branch ${re}...`, "info", 0), Ye = await d(re);
      rt(H), Ye.status === "success" ? (Oe(`Branch "${re}" created`, "success"), await Re()) : Oe(Ye.message || "Failed to create branch", "error");
    }
    async function ft(re, H = !1) {
      const Ye = async (nt) => {
        var xt;
        const gt = Oe(`Deleting branch ${re}...`, "info", 0);
        try {
          const Bt = await v(re, nt);
          rt(gt), Bt.status === "success" ? (Oe(`Branch "${re}" deleted`, "success"), await Re()) : (xt = Bt.message) != null && xt.includes("not fully merged") ? G.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${re}" has commits that haven't been merged.`,
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
            message: `The branch "${re}" has commits that haven't been merged.`,
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
        message: `Delete branch "${re}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          G.value = null, await Ye(H);
        }
      };
    }
    async function It(re) {
      Me.value = null;
      const H = prompt("Enter branch name:");
      if (H) {
        const Ye = Oe(`Creating branch ${H}...`, "info", 0), nt = await d(H, re.hash);
        rt(Ye), nt.status === "success" ? (Oe(`Branch "${H}" created from ${re.short_hash}`, "success"), await Re()) : Oe(nt.message || "Failed to create branch", "error");
      }
    }
    function ht() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Y() {
      if (!K.value.can_restart_current) {
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
    async function L() {
      if (!K.value.can_stop_current) {
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
    async function le(re, H) {
      if (!K.value.can_switch_environment) {
        Oe("Environment switching is not available in this runtime context.", "warning");
        return;
      }
      pe.value = !1, Ie.value = re, Ce.value = H || null, U.value = !0;
    }
    async function He() {
      U.value = !1, ie.value = !0, ht(), be.value = {
        progress: 10,
        state: tt(10),
        message: yt(10)
      };
      try {
        await w(Ie.value, Ce.value || void 0), ks(), bs();
      } catch (re) {
        Vt(), ie.value = !1, Oe(`Failed to initiate switch: ${re instanceof Error ? re.message : "Unknown error"}`, "error"), be.value = { state: "idle", progress: 0, message: "" }, Ce.value = null;
      }
    }
    function tt(re) {
      return re >= 100 ? "complete" : re >= 80 ? "validating" : re >= 60 ? "starting" : re >= 30 ? "syncing" : "preparing";
    }
    function yt(re) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[tt(re)] || "";
    }
    function ks() {
      if (j) return;
      let re = 10;
      const H = 60, Ye = 5e3, nt = 100, gt = (H - re) / (Ye / nt);
      j = window.setInterval(() => {
        if (re += gt, re >= H && (re = H, Vt()), be.value.progress < H) {
          const xt = Math.floor(re);
          be.value = {
            progress: xt,
            state: tt(xt),
            message: yt(xt)
          };
        }
      }, nt);
    }
    function Vt() {
      j && (clearInterval(j), j = null);
    }
    function bs() {
      ee || (ee = window.setInterval(async () => {
        try {
          let re = await M.getStatus();
          if ((!re || re.state === "idle") && (re = await g()), !re)
            return;
          const H = re.progress || 0;
          H >= 60 && Vt();
          const Ye = Math.max(H, be.value.progress), nt = re.state && re.state !== "idle" && re.state !== "unknown", gt = nt ? re.state : tt(Ye), xt = nt && re.message || yt(Ye);
          be.value = {
            state: gt,
            progress: Ye,
            message: xt
          }, re.state === "complete" ? (Vt(), dt(), ie.value = !1, Oe(`✓ Switched to ${Ie.value}`, "success"), await Re(), Ie.value = "") : re.state === "rolled_back" ? (Vt(), dt(), ie.value = !1, Oe("Switch failed, restored previous environment", "warning"), Ie.value = "") : re.state === "critical_failure" && (Vt(), dt(), ie.value = !1, Oe(`Critical error during switch: ${re.message}`, "error"), Ie.value = "");
        } catch (re) {
          console.error("Failed to poll switch progress:", re);
        }
      }, 1e3));
    }
    function dt() {
      Vt(), ee && (clearInterval(ee), ee = null);
    }
    function Xs() {
      var re;
      U.value = !1, Ie.value = "", (re = V.value) != null && re.state && V.value.state !== "managed" && (se.value = V.value.state === "no_workspace" ? 1 : 2, ve.value = !0);
    }
    async function Ut(re) {
      me.value = !1, await Re(), Oe(re.message, re.success ? "success" : "error");
    }
    async function Kn() {
      Je.value = !1;
      const re = Oe("Syncing environment...", "info", 0);
      try {
        const H = await C("skip", !0);
        if (rt(re), H.status === "success") {
          const Ye = [];
          H.nodes_installed.length && Ye.push(`${H.nodes_installed.length} installed`), H.nodes_removed.length && Ye.push(`${H.nodes_removed.length} removed`);
          const nt = Ye.length ? `: ${Ye.join(", ")}` : "";
          Oe(`✓ Environment synced${nt}`, "success"), await Re();
        } else {
          const Ye = H.errors.length ? H.errors.join("; ") : H.message;
          Oe(`Sync failed: ${Ye}`, "error");
        }
      } catch (H) {
        rt(re), Oe(`Sync error: ${H instanceof Error ? H.message : "Unknown error"}`, "error");
      }
    }
    async function fs(re) {
      var H;
      try {
        const Ye = await S(re);
        Ye.failed.length === 0 ? Oe(`✓ Repaired ${Ye.success} workflow${Ye.success === 1 ? "" : "s"}`, "success") : Oe(`Repaired ${Ye.success}, failed: ${Ye.failed.length}`, "warning"), await Re();
      } catch (Ye) {
        Oe(`Repair failed: ${Ye instanceof Error ? Ye.message : "Unknown error"}`, "error");
      } finally {
        (H = T.value) == null || H.resetRepairingState();
      }
    }
    async function dn() {
      var H, Ye;
      const re = Oe("Repairing environment...", "info", 0);
      try {
        const nt = await C("skip", !0);
        if (rt(re), nt.status === "success") {
          const gt = [];
          nt.nodes_installed.length && gt.push(`${nt.nodes_installed.length} installed`), nt.nodes_removed.length && gt.push(`${nt.nodes_removed.length} removed`);
          const xt = gt.length ? `: ${gt.join(", ")}` : "";
          Oe(`✓ Environment repaired${xt}`, "success"), (H = T.value) == null || H.closeDetailModal(), await Re();
        } else {
          const gt = nt.errors.length ? nt.errors.join(", ") : nt.message || "Unknown error";
          Oe(`Repair failed: ${gt}`, "error");
        }
      } catch (nt) {
        rt(re), Oe(`Repair error: ${nt instanceof Error ? nt.message : "Unknown error"}`, "error");
      } finally {
        (Ye = T.value) == null || Ye.resetRepairingEnvironmentState();
      }
    }
    async function $a(re, H) {
      Oe(`Environment '${re}' created`, "success"), await Re(), we.value && await we.value.loadEnvironments(), H && K.value.can_switch_environment && await le(re);
    }
    async function Ca(re) {
      var H;
      if (!K.value.can_delete_environment) {
        Oe("Environment deletion is not available in this runtime context.", "warning");
        return;
      }
      if (((H = q.value) == null ? void 0 : H.name) === re) {
        Oe("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      G.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${re}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          G.value = null;
          try {
            const Ye = await k(re);
            Ye.status === "success" ? (Oe(`Environment "${re}" deleted`, "success"), await Re(), we.value && await we.value.loadEnvironments()) : Oe(Ye.message || "Failed to delete environment", "error");
          } catch (Ye) {
            Oe(`Error deleting environment: ${Ye instanceof Error ? Ye.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function xa(re, H) {
      ve.value = !1;
      try {
        V.value = await $();
      } catch {
      }
      K.value.can_switch_environment && await le(re, H);
    }
    function Sa() {
      ve.value = !1, a("close");
    }
    async function Ia(re, H) {
      await le(re, H);
    }
    async function Ea(re) {
      de.value = !1, await Re(), await le(re);
    }
    function Ta() {
      ce.value = null, de.value = !0;
    }
    function Ma(re) {
      ce.value = re, Q.value = !0;
    }
    function Ro() {
      Q.value = !1, ce.value = null;
    }
    async function Pa(re) {
      V.value = await $(), console.log(`Environment '${re}' created. Available for switching.`);
    }
    function Ra() {
      if (!K.value.can_create_environment) {
        Oe("Environment creation is not available in this runtime context.", "warning");
        return;
      }
      Qe("environments", "workspace"), setTimeout(() => {
        var re;
        (re = we.value) == null || re.openCreateModal();
      }, 100);
    }
    function Do() {
      if (!D.value) return [];
      const re = [], H = D.value.workflows;
      return H.new.length && re.push(`${H.new.length} new workflow(s)`), H.modified.length && re.push(`${H.modified.length} modified workflow(s)`), H.deleted.length && re.push(`${H.deleted.length} deleted workflow(s)`), re;
    }
    return ut(async () => {
      try {
        if (V.value = await $(), V.value.state === "no_workspace" && K.value.can_initialize_workspace) {
          ve.value = !0, se.value = 1;
          return;
        }
        if (V.value.state === "empty_workspace" && K.value.can_create_environment) {
          ve.value = !0, se.value = 2;
          return;
        }
        if (V.value.state === "unmanaged" && K.value.can_switch_environment) {
          ve.value = !0, se.value = 2;
          return;
        }
      } catch (re) {
        console.warn("Setup status check failed, proceeding normally:", re);
      }
      await Promise.all([
        Re({ refreshWorkflows: !1 }),
        Jt()
      ]);
    }), (re, H) => {
      var Ye, nt, gt, xt, Bt, vs, Jn, Zs, No, z, Se, je, wt;
      return o(), i("div", RM, [
        s("div", DM, [
          s("div", NM, [
            H[27] || (H[27] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            D.value ? (o(), i("div", LM)) : y("", !0)
          ]),
          s("div", UM, [
            b(Rc),
            H[30] || (H[30] = s("span", { class: "header-divider" }, null, -1)),
            s("button", {
              class: Be(["icon-btn", { spinning: oe.value }]),
              onClick: Re,
              title: "Refresh"
            }, [...H[28] || (H[28] = [
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
              onClick: H[0] || (H[0] = (et) => a("close")),
              title: "Close"
            }, [...H[29] || (H[29] = [
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
        De.value && ze.value ? (o(), R(EM, {
          key: 0,
          info: ze.value,
          updating: ke.value,
          onUpdate: J,
          onDismiss: Ft,
          onReleaseNotes: cs
        }, null, 8, ["info", "updating"])) : y("", !0),
        s("div", OM, [
          s("div", AM, [
            H[31] || (H[31] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", zM, [
              K.value.can_restart_current ? (o(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Y
              }, " Restart ")) : y("", !0),
              K.value.can_stop_current ? (o(), i("button", {
                key: 1,
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: L
              }, " Stop ")) : y("", !0)
            ])
          ]),
          s("button", {
            class: "env-switcher-btn",
            onClick: H[1] || (H[1] = (et) => Qe("environments", "workspace"))
          }, [
            D.value ? (o(), i("div", FM, [
              s("span", null, m(((Ye = q.value) == null ? void 0 : Ye.name) || ((nt = D.value) == null ? void 0 : nt.environment) || "Loading..."), 1),
              s("span", VM, "(" + m(D.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            H[32] || (H[32] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", BM, [
          s("div", WM, [
            s("div", GM, [
              s("div", jM, [
                H[33] || (H[33] = s("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: Ve.value === "status" && Ne.value === "this-env" }]),
                  onClick: H[2] || (H[2] = (et) => Qe("status", "this-env"))
                }, " STATUS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Ve.value === "workflows" }]),
                  onClick: H[3] || (H[3] = (et) => Qe("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Ve.value === "models-env" }]),
                  onClick: H[4] || (H[4] = (et) => Qe("models-env", "this-env"))
                }, " MODELS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Ve.value === "nodes" }]),
                  onClick: H[5] || (H[5] = (et) => Qe("nodes", "this-env"))
                }, " NODES ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Ve.value === "version-control" }]),
                  onClick: H[6] || (H[6] = (et) => Ae("remotes"))
                }, " VERSION CONTROL ", 2)
              ]),
              H[36] || (H[36] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", HM, [
                H[34] || (H[34] = s("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: Ve.value === "environments" }]),
                  onClick: H[7] || (H[7] = (et) => Qe("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Ve.value === "model-index" }]),
                  onClick: H[8] || (H[8] = (et) => Qe("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Ve.value === "settings" }]),
                  onClick: H[9] || (H[9] = (et) => Qe("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              H[37] || (H[37] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", qM, [
                H[35] || (H[35] = s("div", { class: "sidebar-section-title" }, "DIAGNOSTICS", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: Ve.value === "diagnostics" && A.value === "manifest" }]),
                  onClick: H[10] || (H[10] = (et) => Xe("manifest"))
                }, " MANIFEST ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Ve.value === "diagnostics" && A.value !== "manifest" }]),
                  onClick: H[11] || (H[11] = (et) => Xe("env"))
                }, " LOGGING ", 2)
              ])
            ]),
            s("div", KM, [
              b(Dc)
            ])
          ]),
          s("div", JM, [
            ae.value ? (o(), i("div", QM, m(ae.value), 1)) : !D.value && Ve.value === "status" ? (o(), i("div", YM, " Loading status... ")) : (o(), i(B, { key: 2 }, [
              Ve.value === "status" ? (o(), R(qh, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: T,
                status: D.value,
                "setup-state": fe.value,
                onSwitchBranch: kt,
                onCommitChanges: H[12] || (H[12] = (et) => me.value = !0),
                onSyncEnvironment: H[13] || (H[13] = (et) => Je.value = !0),
                onViewWorkflows: H[14] || (H[14] = (et) => Qe("workflows", "this-env")),
                onViewHistory: H[15] || (H[15] = (et) => Ae("history")),
                onViewDebug: H[16] || (H[16] = (et) => Xe("env")),
                onViewNodes: H[17] || (H[17] = (et) => Qe("nodes", "this-env")),
                onRepairMissingModels: fs,
                onRepairEnvironment: dn,
                onStartSetup: H[18] || (H[18] = (et) => ve.value = !0),
                onViewEnvironments: H[19] || (H[19] = (et) => Qe("environments", "workspace")),
                onCreateEnvironment: Ra
              }, null, 8, ["status", "setup-state"])) : Ve.value === "workflows" ? (o(), R(h2, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: ge,
                onRefresh: Re
              }, null, 512)) : Ve.value === "models-env" ? (o(), R($$, {
                key: 2,
                onNavigate: Fe
              })) : Ve.value === "version-control" ? (o(), R(I6, {
                key: 3,
                commits: O.value,
                "current-ref": (gt = D.value) == null ? void 0 : gt.branch,
                branches: F.value,
                current: ((xt = D.value) == null ? void 0 : xt.branch) || null,
                "initial-tab": te.value,
                onSelect: $e,
                onCheckout: qe,
                onSwitch: Ze,
                onCreate: lt,
                onDelete: ft,
                onToast: Pt
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : Ve.value === "nodes" ? (o(), R(pC, {
                key: 4,
                "version-mismatches": ((vs = (Bt = D.value) == null ? void 0 : Bt.comparison) == null ? void 0 : vs.version_mismatches) || [],
                onOpenNodeManager: Lt,
                onRepairEnvironment: dn,
                onToast: Pt
              }, null, 8, ["version-mismatches"])) : Ve.value === "diagnostics" ? (o(), R(V6, {
                key: 5,
                "initial-tab": A.value
              }, null, 8, ["initial-tab"])) : Ve.value === "environments" ? (o(), R(v3, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: we,
                "can-create": K.value.can_create_environment,
                "can-switch": K.value.can_switch_environment,
                "can-delete": K.value.can_delete_environment,
                onSwitch: le,
                onCreated: $a,
                onDelete: Ca,
                onImport: Ta,
                onExport: Ma
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : Ve.value === "model-index" ? (o(), R(N$, {
                key: 7,
                onRefresh: Re
              })) : Ve.value === "settings" ? (o(), R(BC, { key: 8 })) : y("", !0)
            ], 64))
          ])
        ]),
        Me.value ? (o(), R(aE, {
          key: 1,
          commit: Me.value,
          onClose: H[20] || (H[20] = (et) => Me.value = null),
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
          onCancel: H[21] || (H[21] = (et) => G.value = null),
          onSecondary: G.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        de.value ? (o(), R(Mt, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: H[22] || (H[22] = (et) => de.value = !1)
        }, {
          body: h(() => [
            b(Z5, {
              embedded: "",
              onImportCompleteSwitch: Ea
            })
          ]),
          _: 1
        })) : y("", !0),
        Q.value ? (o(), R(Mt, {
          key: 4,
          title: ce.value ? `EXPORT ENVIRONMENT: ${ce.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "md",
          onClose: Ro
        }, {
          body: h(() => [
            b(oS, {
              embedded: "",
              "environment-name": ce.value,
              onClose: Ro
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : y("", !0),
        b(KE, {
          show: U.value,
          "from-environment": ((Jn = q.value) == null ? void 0 : Jn.name) || "unknown",
          "to-environment": Ie.value,
          onConfirm: He,
          onClose: Xs
        }, null, 8, ["show", "from-environment", "to-environment"]),
        me.value && D.value ? (o(), R(Pc, {
          key: 5,
          status: D.value,
          "as-modal": !0,
          onClose: H[23] || (H[23] = (et) => me.value = !1),
          onCommitted: Ut
        }, null, 8, ["status"])) : y("", !0),
        Je.value && D.value ? (o(), R(vT, {
          key: 6,
          show: Je.value,
          "mismatch-details": {
            missing_nodes: D.value.comparison.missing_nodes,
            extra_nodes: D.value.comparison.extra_nodes
          },
          onConfirm: Kn,
          onClose: H[24] || (H[24] = (et) => Je.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        b(aT, {
          show: ie.value,
          state: be.value.state,
          progress: be.value.progress,
          message: be.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        pe.value ? (o(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: H[26] || (H[26] = bt((et) => pe.value = !1, ["self"]))
        }, [
          s("div", XM, [
            s("div", ZM, [
              H[39] || (H[39] = s("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              s("button", {
                class: "icon-btn",
                onClick: H[25] || (H[25] = (et) => pe.value = !1)
              }, [...H[38] || (H[38] = [
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
            s("div", eP, [
              H[40] || (H[40] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", tP, [
                (o(!0), i(B, null, ye(N.value, (et) => (o(), i("div", {
                  key: et.name,
                  class: Be(["env-item", { current: et.is_current }])
                }, [
                  s("div", sP, [
                    s("div", nP, [
                      s("span", oP, m(et.is_current ? "●" : "○"), 1),
                      s("span", aP, m(et.name), 1),
                      et.current_branch ? (o(), i("span", lP, "(" + m(et.current_branch) + ")", 1)) : y("", !0),
                      et.is_current ? (o(), i("span", iP, "CURRENT")) : y("", !0)
                    ]),
                    s("div", rP, m(et.workflow_count) + " workflows • " + m(et.node_count) + " nodes ", 1)
                  ]),
                  !et.is_current && K.value.can_switch_environment ? (o(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (en) => le(et.name)
                  }, " SWITCH ", 8, cP)) : y("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        ve.value ? (o(), R(yM, {
          key: 8,
          "default-path": ((Zs = V.value) == null ? void 0 : Zs.default_path) || "~/comfygit",
          "detected-models-dir": ((No = V.value) == null ? void 0 : No.detected_models_dir) || null,
          "initial-step": se.value,
          "existing-environments": ((z = V.value) == null ? void 0 : z.environments) || [],
          "cli-installed": ((Se = V.value) == null ? void 0 : Se.cli_installed) ?? !0,
          "setup-state": ((je = V.value) == null ? void 0 : je.state) || "no_workspace",
          "workspace-path": ((wt = V.value) == null ? void 0 : wt.workspace_path) || null,
          onComplete: xa,
          onClose: Sa,
          onSwitchEnvironment: Ia,
          onEnvironmentCreatedNoSwitch: Pa
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        s("div", uP, [
          b(um, { name: "toast" }, {
            default: h(() => [
              (o(!0), i(B, null, ye(Ge.value, (et) => (o(), i("div", {
                key: et.id,
                class: Be(["toast", et.type])
              }, [
                s("span", dP, m(et.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), fP = /* @__PURE__ */ Te(mP, [["__scopeId", "data-v-93abae9b"]]), vP = { class: "item-header" }, pP = { class: "item-info" }, gP = { class: "filename" }, hP = { class: "metadata" }, yP = { class: "size" }, wP = {
  key: 0,
  class: "type"
}, _P = { class: "item-actions" }, kP = {
  key: 0,
  class: "progress-section"
}, bP = { class: "progress-bar" }, $P = { class: "progress-stats" }, CP = { class: "downloaded" }, xP = { class: "speed" }, SP = {
  key: 0,
  class: "eta"
}, IP = {
  key: 1,
  class: "status-msg paused"
}, EP = {
  key: 2,
  class: "status-msg queued"
}, TP = {
  key: 3,
  class: "status-msg completed"
}, MP = {
  key: 4,
  class: "status-msg failed"
}, PP = {
  key: 0,
  class: "retries"
}, RP = /* @__PURE__ */ Ee({
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
      s("div", vP, [
        s("div", pP, [
          s("div", gP, m(e.item.filename), 1),
          s("div", hP, [
            s("span", yP, m(a(e.item.size)), 1),
            e.item.type ? (o(), i("span", wP, m(e.item.type), 1)) : y("", !0)
          ])
        ]),
        s("div", _P, [
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
      e.item.status === "downloading" ? (o(), i("div", kP, [
        s("div", bP, [
          s("div", {
            class: "progress-fill",
            style: zt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", $P, [
          s("span", CP, m(a(e.item.downloaded)) + " / " + m(a(e.item.size)), 1),
          s("span", xP, m(l(e.item.speed)), 1),
          e.item.eta > 0 ? (o(), i("span", SP, m(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (o(), i("div", IP, " Paused - click Resume to download ")) : e.item.status === "queued" ? (o(), i("div", EP, " Waiting in queue... ")) : e.item.status === "completed" ? (o(), i("div", TP, " ✓ Downloaded ")) : e.item.status === "failed" ? (o(), i("div", MP, [
        x(" ✗ " + m(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (o(), i("span", PP, "(" + m(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Zn = /* @__PURE__ */ Te(RP, [["__scopeId", "data-v-2110df65"]]), DP = { class: "queue-title" }, NP = { class: "count" }, LP = { class: "queue-actions" }, UP = { class: "action-label" }, OP = {
  key: 0,
  class: "overall-progress"
}, AP = { class: "progress-bar" }, zP = {
  key: 0,
  class: "current-mini"
}, FP = { class: "filename" }, VP = { class: "speed" }, BP = {
  key: 1,
  class: "queue-content"
}, WP = {
  key: 0,
  class: "section"
}, GP = {
  key: 1,
  class: "section"
}, jP = { class: "section-header" }, HP = { class: "section-label paused" }, qP = { class: "items-list" }, KP = {
  key: 2,
  class: "section"
}, JP = { class: "section-header" }, QP = { class: "section-label" }, YP = { class: "items-list" }, XP = {
  key: 3,
  class: "section"
}, ZP = { class: "section-header" }, eR = { class: "section-label" }, tR = { class: "items-list" }, sR = {
  key: 4,
  class: "section"
}, nR = { class: "section-header" }, oR = { class: "section-label failed" }, aR = { class: "items-list" }, lR = /* @__PURE__ */ Ee({
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
    } = qn(), C = _(!1);
    let S = null;
    $t(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (M, D) => {
        S && (clearTimeout(S), S = null);
        const O = M.active === 0 && M.failed === 0 && M.paused === 0 && M.completed > 0, F = D && (D.active > 0 || D.paused > 0);
        O && F && (S = setTimeout(() => {
          k(), S = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const $ = P(() => {
      var O;
      if (t.items.length === 0) return 0;
      const M = l.value.length, D = ((O = n.value) == null ? void 0 : O.progress) || 0;
      return Math.round((M + D / 100) / t.items.length * 100);
    });
    function I(M) {
      f(M);
    }
    function E(M) {
      return M === 0 ? "..." : `${(M / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (M, D) => (o(), R(as, { to: "body" }, [
      at(u) ? (o(), i("div", {
        key: 0,
        class: Be(["model-download-queue", { minimized: !C.value }])
      }, [
        s("div", {
          class: "queue-header",
          onClick: D[0] || (D[0] = (O) => C.value = !C.value)
        }, [
          s("div", DP, [
            D[4] || (D[4] = s("span", { class: "icon" }, "↓", -1)),
            D[5] || (D[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", NP, "(" + m(at(d)) + "/" + m(at(t).items.length) + ")", 1)
          ]),
          s("div", LP, [
            s("span", UP, m(C.value ? "minimize" : "expand"), 1)
          ])
        ]),
        C.value ? (o(), i("div", BP, [
          at(n) ? (o(), i("div", WP, [
            D[6] || (D[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            b(Zn, {
              item: at(n),
              onCancel: D[1] || (D[1] = (O) => I(at(n).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          at(c).length > 0 ? (o(), i("div", GP, [
            s("div", jP, [
              s("span", HP, "Paused (" + m(at(c).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: D[2] || (D[2] = //@ts-ignore
                (...O) => at(w) && at(w)(...O))
              }, "Resume All")
            ]),
            s("div", qP, [
              (o(!0), i(B, null, ye(at(c), (O) => (o(), R(Zn, {
                key: O.id,
                item: O,
                onResume: (F) => at(p)(O.id),
                onRemove: (F) => at(g)(O.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          at(a).length > 0 ? (o(), i("div", KP, [
            s("div", JP, [
              s("span", QP, "Queued (" + m(at(a).length) + ")", 1)
            ]),
            s("div", YP, [
              (o(!0), i(B, null, ye(at(a), (O) => (o(), R(Zn, {
                key: O.id,
                item: O,
                onCancel: (F) => I(O.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          at(l).length > 0 ? (o(), i("div", XP, [
            s("div", ZP, [
              s("span", eR, "Completed (" + m(at(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: D[3] || (D[3] = //@ts-ignore
                (...O) => at(k) && at(k)(...O))
              }, "Clear")
            ]),
            s("div", tR, [
              (o(!0), i(B, null, ye(at(l).slice(0, 3), (O) => (o(), R(Zn, {
                key: O.id,
                item: O,
                onRemove: (F) => at(g)(O.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          at(r).length > 0 ? (o(), i("div", sR, [
            s("div", nR, [
              s("span", oR, "Failed (" + m(at(r).length) + ")", 1)
            ]),
            s("div", aR, [
              (o(!0), i(B, null, ye(at(r), (O) => (o(), R(Zn, {
                key: O.id,
                item: O,
                onRetry: (F) => at(v)(O.id),
                onRemove: (F) => at(g)(O.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (o(), i("div", OP, [
          s("div", AP, [
            s("div", {
              class: "progress-fill",
              style: zt({ width: `${$.value}%` })
            }, null, 4)
          ]),
          at(n) ? (o(), i("div", zP, [
            s("span", FP, m(at(n).filename), 1),
            s("span", VP, m(E(at(n).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), iR = /* @__PURE__ */ Te(lR, [["__scopeId", "data-v-3a3c9607"]]), rR = { class: "detail-header" }, cR = { class: "item-count" }, uR = { class: "resource-list" }, dR = { class: "item-info" }, mR = { class: "item-name" }, fR = {
  key: 0,
  class: "item-subtitle"
}, vR = {
  key: 0,
  class: "installing-badge"
}, pR = ["title"], gR = {
  key: 2,
  class: "installed-badge"
}, hR = {
  key: 3,
  class: "queued-badge"
}, yR = {
  key: 4,
  class: "action-buttons"
}, wR = {
  key: 1,
  class: "no-action"
}, _R = /* @__PURE__ */ Ee({
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
    const n = e, a = t, l = P(() => n.items.filter((g) => g.canAction)), r = P(() => l.value.length > 0 && l.value.every(
      (g) => {
        var k, C;
        return n.queuedItems.has(g.id) || ((k = n.installedItems) == null ? void 0 : k.has(g.id)) || ((C = n.failedItems) == null ? void 0 : C.has(g.id));
      }
    )), c = P(() => r.value ? "All Queued" : n.itemType === "models" ? "Download All" : "Install All");
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
      onClose: k[2] || (k[2] = (C) => a("close"))
    }, {
      body: h(() => [
        s("div", rR, [
          s("span", cR, m(e.items.length) + " " + m(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (o(), R(Ue, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: k[0] || (k[0] = (C) => a("bulk-action"))
          }, {
            default: h(() => [
              x(m(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        s("div", uR, [
          (o(!0), i(B, null, ye(e.items, (C) => (o(), i("div", {
            key: C.id,
            class: "resource-item"
          }, [
            s("div", dR, [
              s("span", mR, m(C.name), 1),
              C.subtitle ? (o(), i("span", fR, m(C.subtitle), 1)) : y("", !0)
            ]),
            C.canAction ? (o(), i(B, { key: 0 }, [
              d(C) ? (o(), i("span", vR, "Installing...")) : v(C) ? (o(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(C)
              }, "Failed ⚠", 8, pR)) : f(C) ? (o(), i("span", gR, "Installed")) : u(C) ? (o(), i("span", hR, "Queued")) : (o(), i("div", yR, [
                (o(!0), i(B, null, ye(w(C), (S) => (o(), R(Ue, {
                  key: `${C.id}-${S.key}`,
                  size: "sm",
                  variant: S.variant || "secondary",
                  onClick: ($) => a("action", C, S.key)
                }, {
                  default: h(() => [
                    x(m(S.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (o(), i("span", wR, m(C.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        b(Ue, {
          variant: "secondary",
          onClick: k[1] || (k[1] = (C) => a("close"))
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
}), kR = /* @__PURE__ */ Te(_R, [["__scopeId", "data-v-ec7e9202"]]), bR = {
  key: 0,
  class: "loading-state"
}, $R = {
  key: 1,
  class: "analysis-results"
}, CR = {
  key: 0,
  class: "section"
}, xR = { class: "section-header" }, SR = { class: "section-title" }, IR = { class: "item-list" }, ER = { class: "package-info" }, TR = { class: "package-name" }, MR = { class: "node-count" }, PR = {
  key: 1,
  class: "installing-badge"
}, RR = {
  key: 2,
  class: "queued-badge"
}, DR = ["title"], NR = {
  key: 5,
  class: "installed-badge"
}, LR = {
  key: 1,
  class: "section"
}, UR = { class: "section-header" }, OR = { class: "section-title" }, AR = { class: "item-list" }, zR = { class: "node-type" }, FR = {
  key: 0,
  class: "overflow-note"
}, VR = {
  key: 2,
  class: "section"
}, BR = { class: "section-header" }, WR = { class: "section-title" }, GR = { class: "item-list" }, jR = { class: "node-type" }, HR = { class: "not-found" }, qR = {
  key: 0,
  class: "overflow-note"
}, KR = {
  key: 3,
  class: "section"
}, JR = { class: "section-header" }, QR = { class: "section-title" }, YR = { class: "item-list" }, XR = { class: "package-info community-info" }, ZR = { class: "community-title-row" }, e7 = { class: "package-name" }, t7 = { class: "node-count" }, s7 = { class: "community-mapping-note" }, n7 = { key: 0 }, o7 = {
  key: 0,
  class: "community-actions"
}, a7 = {
  key: 1,
  class: "installing-badge"
}, l7 = {
  key: 2,
  class: "queued-badge"
}, i7 = ["title"], r7 = {
  key: 5,
  class: "installed-badge"
}, c7 = ["title"], u7 = {
  key: 1,
  class: "no-url"
}, d7 = {
  key: 4,
  class: "section"
}, m7 = { class: "section-header" }, f7 = { class: "section-title" }, v7 = { class: "item-list" }, p7 = { class: "model-info" }, g7 = { class: "model-name" }, h7 = {
  key: 1,
  class: "queued-badge"
}, y7 = {
  key: 1,
  class: "no-url"
}, w7 = { class: "dont-show-again" }, _7 = 3e4, k7 = /* @__PURE__ */ Ee({
  __name: "MissingResourcesPopup",
  setup(e) {
    const t = _(!1), n = _(null), a = _(null), l = _(!1), r = _(/* @__PURE__ */ new Set()), c = _(/* @__PURE__ */ new Set()), u = _(/* @__PURE__ */ new Map()), d = _(/* @__PURE__ */ new Map()), f = _(/* @__PURE__ */ new Set()), v = _(!1), p = _(null), w = _(0), g = _(null), k = _(!1), C = _(!1), S = _(!1), $ = _(null), I = _(null), E = _(null), M = _(/* @__PURE__ */ new Set()), D = _(/* @__PURE__ */ new Map()), O = _(/* @__PURE__ */ new Map()), { addToQueue: F } = qn(), {
      queueNodeInstall: N,
      previewNodeDependencyChanges: q,
      applyReviewedNodeDependencyChanges: ce
    } = mt(), de = P(() => {
      var J;
      return ((J = a.value) == null ? void 0 : J.package_aliases) || {};
    });
    function Q(J) {
      if (!J) return null;
      const ue = de.value;
      let Re = J;
      const $e = /* @__PURE__ */ new Set();
      for (; ue[Re] && !$e.has(Re); )
        $e.add(Re), Re = ue[Re];
      return Re;
    }
    function te(J, ue) {
      return J instanceof Error && J.message ? J.message : typeof J == "string" && J.trim().length > 0 ? J : ue;
    }
    function W(J) {
      for (const [ue, Re] of D.value.entries())
        Re === J && D.value.delete(ue);
    }
    function A(J, ue, Re) {
      var $e, qe;
      u.value.delete(J), c.value.delete(J), d.value.set(J, ue), console.warn("[ComfyGit] Package requires dependency review:", {
        packageId: J,
        reason: (($e = Re == null ? void 0 : Re.dependency_review) == null ? void 0 : $e.reason) || ((qe = Re == null ? void 0 : Re.messages) == null ? void 0 : qe[0])
      });
    }
    async function V(J) {
      const ue = d.value.get(J);
      if (!(!ue || Me.value)) {
        k.value = !0, C.value = !0, S.value = !1, $.value = null, I.value = null, E.value = J;
        try {
          const Re = await q(ue);
          I.value = Re.preview, Re.preview.success || ($.value = Re.preview.error || "Unable to generate dependency preview");
        } catch (Re) {
          $.value = te(Re, "Unable to generate dependency preview");
        } finally {
          C.value = !1;
        }
      }
    }
    async function ve() {
      const J = E.value, ue = I.value, Re = J ? d.value.get(J) : null;
      if (!(!J || !ue || !Re || S.value)) {
        S.value = !0, $.value = null;
        try {
          const $e = await ce({
            ...Re,
            accepted_preview: {
              baseline_fingerprint: ue.baseline_fingerprint,
              diff_fingerprint: ue.diff_fingerprint,
              proposed_fingerprint: ue.proposed_fingerprint
            }
          });
          if ($e.status !== "success")
            throw new Error($e.error || $e.message || "Unable to apply dependency changes");
          d.value.delete(J), u.value.delete(J), c.value.delete(J), r.value.add(J), w.value++, window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
            detail: { count: 1 }
          })), se();
        } catch ($e) {
          $.value = te($e, "Unable to apply dependency changes");
        } finally {
          S.value = !1;
        }
      }
    }
    function se() {
      k.value = !1, C.value = !1, S.value = !1, $.value = null, I.value = null, E.value = null;
    }
    function fe(J) {
      if (!O.value.has(J)) return;
      const ue = O.value.get(J);
      clearTimeout(ue), O.value.delete(J);
    }
    function ne() {
      for (const J of O.value.values())
        clearTimeout(J);
      O.value = /* @__PURE__ */ new Map();
    }
    function K(J) {
      fe(J);
      const ue = setTimeout(() => {
        if (O.value.delete(J), !c.value.has(J)) return;
        W(J), c.value.delete(J), p.value === J && (p.value = null), u.value.set(J, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", J);
      }, _7);
      O.value.set(J, ue);
    }
    function oe(J) {
      const ue = `Cannot install "${J.title}" - package_id is missing`;
      u.value.set(J.item_id, ue), n.value = ue, console.warn("[ComfyGit] Community install requested without package_id:", J);
    }
    const ae = P(() => pe.value.length > 0 || Le.value.length > 0 || ke.value.length > 0 || De.value.length > 0 || Ce.value.length > 0), Me = P(() => D.value.size > 0 || c.value.size > 0 || !!p.value), pe = P(() => {
      var Re, $e;
      if (!((Re = a.value) != null && Re.nodes)) return [];
      const J = /* @__PURE__ */ new Map(), ue = (a.value.nodes.resolved || []).filter((qe) => {
        var Ze;
        return !qe.is_installed && ((Ze = qe.package) == null ? void 0 : Ze.package_id);
      });
      for (const qe of ue) {
        const Ze = Q(qe.package.package_id);
        if (!Ze) continue;
        J.has(Ze) || J.set(Ze, {
          package_id: Ze,
          title: qe.package.title || Ze,
          node_count: 0,
          node_types: [],
          repository: qe.package.repository || null,
          latest_version: qe.package.latest_version || null
        });
        const lt = J.get(Ze);
        lt.node_count++, lt.node_types.push((($e = qe.reference) == null ? void 0 : $e.node_type) || qe.node_type);
      }
      return Array.from(J.values());
    }), ze = P(() => pe.value.reduce((J, ue) => J + ue.node_count, 0)), Le = P(() => {
      var J;
      return (J = a.value) != null && J.nodes ? (a.value.nodes.unresolved || []).map((ue) => {
        var Re;
        return {
          node_type: ((Re = ue.reference) == null ? void 0 : Re.node_type) || ue.node_type
        };
      }) : [];
    }), ke = P(() => {
      var ue;
      if (!((ue = a.value) != null && ue.nodes)) return [];
      const J = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((Re) => {
        var qe;
        const $e = ((qe = Re.reference) == null ? void 0 : qe.node_type) || Re.node_type;
        return {
          node_type: $e,
          guidance: Re.guidance || J[$e] || null
        };
      });
    }), De = P(() => {
      var Re, $e, qe, Ze, lt, ft, It, ht;
      if (!((Re = a.value) != null && Re.nodes)) return [];
      const J = a.value.node_guidance || {}, ue = /* @__PURE__ */ new Map();
      for (const Y of a.value.nodes.uninstallable || []) {
        const L = (($e = Y.reference) == null ? void 0 : $e.node_type) || Y.node_type, le = Q(((qe = Y.package) == null ? void 0 : qe.package_id) || null), He = le || `node:${L}`;
        ue.has(He) || ue.set(He, {
          item_id: He,
          node_type: L,
          title: ((Ze = Y.package) == null ? void 0 : Ze.title) || le || L,
          node_count: 0,
          package_id: le,
          repository: ((lt = Y.package) == null ? void 0 : lt.repository) || null,
          latest_version: ((ft = Y.package) == null ? void 0 : ft.latest_version) || null,
          guidance: Y.guidance || J[L] || null
        });
        const tt = ue.get(He);
        tt.node_count++, tt.guidance || (tt.guidance = Y.guidance || J[L] || null), !tt.repository && ((It = Y.package) != null && It.repository) && (tt.repository = Y.package.repository), !tt.latest_version && ((ht = Y.package) != null && ht.latest_version) && (tt.latest_version = Y.package.latest_version);
      }
      return Array.from(ue.values());
    }), ge = P(() => De.value.filter((J) => !!Ie(J))), we = P(() => De.value.length >= 5 ? De.value.slice(0, 4) : De.value), T = P(() => ge.value.length > 0 && ge.value.every((J) => {
      const ue = J.package_id;
      return r.value.has(ue) || c.value.has(ue) || u.value.has(ue) || d.value.has(ue);
    }));
    function U(J) {
      const ue = [];
      return ie(J) && ue.push({ key: "install_registry", label: "Install from Registry", variant: "secondary" }), J.repository && ue.push({
        key: "install_git",
        label: "Install via Git",
        variant: ie(J) ? "ghost" : "secondary"
      }), ue;
    }
    function ie(J) {
      return !!J.latest_version;
    }
    function Ie(J) {
      return J.package_id ? ie(J) ? "registry" : J.repository ? "git" : null : null;
    }
    const Ce = P(() => {
      var qe;
      if (!((qe = a.value) != null && qe.models)) return [];
      const J = (a.value.models.resolved || []).filter(
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
      }), ue = (a.value.models.unresolved || []).map((Ze) => {
        var lt, ft, It, ht;
        return {
          filename: ((ft = (lt = Ze.reference) == null ? void 0 : lt.widget_value) == null ? void 0 : ft.split("/").pop()) || ((It = Ze.reference) == null ? void 0 : It.widget_value) || Ze.widget_value,
          widget_value: ((ht = Ze.reference) == null ? void 0 : ht.widget_value) || Ze.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), Re = /* @__PURE__ */ new Map(), $e = [];
      for (const Ze of J) {
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
      return [...Re.values(), ...$e, ...ue];
    }), be = P(() => Ce.value.filter((J) => J.canDownload)), ee = P(() => pe.value.length >= 5 ? pe.value.slice(0, 4) : pe.value), j = P(() => Ce.value.length >= 5 ? Ce.value.slice(0, 4) : Ce.value), he = P(() => pe.value.length > 0 && pe.value.every(
      (J) => r.value.has(J.package_id) || c.value.has(J.package_id) || u.value.has(J.package_id) || d.value.has(J.package_id)
    )), _e = P(() => be.value.length > 0 && be.value.every((J) => f.value.has(J.url))), Ke = P(() => pe.value.length > 0 || ge.value.length > 0 || be.value.length > 0), We = P(() => {
      const J = (pe.value.length === 0 || he.value) && (ge.value.length === 0 || T.value), ue = be.value.length === 0 || _e.value;
      return J && ue;
    }), xe = P(() => g.value === "models" ? `Missing Models (${Ce.value.length})` : g.value === "packages" ? `Missing Custom Nodes (${ze.value})` : g.value === "community" ? `Community-Mapped Packages (${De.value.length})` : ""), Z = P(() => g.value === "models" ? Ce.value.map((J) => ({
      id: J.url || J.widget_value,
      name: J.filename,
      canAction: J.canDownload,
      actionDisabledReason: J.canDownload ? void 0 : "Manual download required"
    })) : g.value === "packages" ? pe.value.map((J) => ({
      id: J.package_id,
      name: J.title,
      subtitle: `(${J.node_count} ${J.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : g.value === "community" ? De.value.map((J) => ({
      id: J.package_id || J.item_id,
      name: J.title,
      subtitle: `(${J.node_count} ${J.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!Ie(J),
      actionDisabledReason: Ie(J) ? void 0 : "Manual setup required",
      actions: U(J)
    })) : []);
    function Ve(J, ue) {
      if (g.value === "models") {
        const Re = Ce.value.find(($e) => $e.url === J.id || $e.widget_value === J.id);
        Re && Xe(Re);
      } else if (g.value === "packages") {
        const Re = pe.value.find(($e) => $e.package_id === J.id);
        Re && Qe(Re);
      } else if (g.value === "community") {
        const Re = De.value.find((qe) => (qe.package_id || qe.item_id) === J.id);
        if (!Re) return;
        if (!Re.package_id) {
          oe({ item_id: Re.item_id, title: Re.title });
          return;
        }
        const $e = ue === "install_git" ? "git" : "registry";
        if ($e === "registry" && !ie(Re)) {
          oe({ item_id: Re.item_id, title: Re.title });
          return;
        }
        Fe(Re, $e);
      }
    }
    function Ne() {
      g.value === "models" ? Kt() : g.value === "packages" ? kt() : g.value === "community" && Lt();
    }
    async function Qe(J) {
      return Ae(J.package_id, J.latest_version, "registry");
    }
    async function Fe(J, ue) {
      return J.package_id ? ue === "registry" && !ie(J) ? (u.value.set(J.package_id, "No installable registry version is available. Use Git install if a repository is available."), !1) : ue === "git" && !J.repository ? (u.value.set(J.package_id, "No Git repository is available for this community mapping."), !1) : Ae(J.package_id, J.latest_version, ue, J.repository) : (oe({ item_id: J.item_id, title: J.title }), !1);
    }
    async function Ae(J, ue, Re, $e) {
      const qe = Q(J) || J, Ze = ue || "latest";
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
            lt = Y, D.value.set(Y, qe), c.value.add(qe), K(qe), console.log("[ComfyGit] Registered pending install:", {
              ui_id: Y,
              packageId: qe,
              pendingInstalls: Array.from(D.value.entries())
            });
          }
        });
        return (ht == null ? void 0 : ht.status_str) === "dependency_review_required" ? (lt && D.value.delete(lt), W(qe), fe(qe), p.value === qe && (p.value = null), A(qe, ft, ht), !1) : (lt || (lt = It, D.value.set(It, qe), c.value.add(qe), K(qe), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: It,
          packageId: qe,
          pendingInstalls: Array.from(D.value.entries())
        })), !0);
      } catch (ft) {
        const It = te(ft, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", ft), lt && D.value.delete(lt), W(qe), fe(qe), c.value.delete(qe), d.value.delete(qe), u.value.set(qe, It), !1;
      } finally {
        p.value = null;
      }
    }
    function Xe(J) {
      !J.url || !J.targetPath || f.value.has(J.url) || (F([{
        workflow: "unsaved",
        filename: J.filename,
        url: J.url,
        targetPath: J.targetPath
      }]), f.value.add(J.url));
    }
    async function kt() {
      const J = { attempted: 0, failed: 0 };
      for (const ue of pe.value)
        !r.value.has(ue.package_id) && !c.value.has(ue.package_id) && !u.value.has(ue.package_id) && !d.value.has(ue.package_id) && (J.attempted++, await Qe(ue) || J.failed++);
      return J;
    }
    async function Lt() {
      const J = { attempted: 0, failed: 0 };
      for (const ue of ge.value) {
        const Re = ue.package_id;
        if (!r.value.has(Re) && !c.value.has(Re) && !u.value.has(Re) && !d.value.has(Re)) {
          J.attempted++;
          const $e = Ie(ue);
          ($e ? await Fe(ue, $e) : !1) || J.failed++;
        }
      }
      return J;
    }
    function Kt() {
      const J = be.value.filter(
        (ue) => !f.value.has(ue.url)
      );
      if (J.length === 0) return 0;
      F(J.map((ue) => ({
        workflow: "unsaved",
        filename: ue.filename,
        url: ue.url,
        targetPath: ue.targetPath
      })));
      for (const ue of J)
        f.value.add(ue.url);
      return J.length;
    }
    async function X() {
      const J = await kt(), ue = await Lt();
      Kt();
      const Re = J.attempted + ue.attempted, $e = J.failed + ue.failed;
      if (Re > 0 && $e > 0) {
        const qe = Re - $e;
        n.value = `${qe} of ${Re} installs queued, ${$e} failed`;
      }
    }
    function G() {
      v.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function me(J) {
      var qe, Ze;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const ue = J == null ? void 0 : J.id;
      if (ue && M.value.has(ue)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${ue} this session`);
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
          const L = (Ze = Y.activeState) == null ? void 0 : Ze.id;
          if (!(ue && L === ue)) {
            ht < 19 && await new Promise((He) => setTimeout(He, 50));
            continue;
          }
          if (It = !0, Y.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${Y.filename}`), ue && M.value.add(ue);
            return;
          }
          break;
        }
        It || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      t.value = !0, n.value = null, ne(), r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Map(), f.value = /* @__PURE__ */ new Set(), D.value = /* @__PURE__ */ new Map(), v.value = !1, w.value = 0;
      try {
        const lt = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: J, name: "unsaved" })
        });
        if (!lt.ok) {
          const ft = await lt.json();
          throw new Error(ft.error || "Failed to analyze workflow");
        }
        a.value = await lt.json(), ae.value && (l.value = !0, ue && M.value.add(ue));
      } catch (lt) {
        console.error("[ComfyGit] Failed to analyze workflow:", lt);
      } finally {
        t.value = !1;
      }
    }
    function Je() {
      ne(), l.value = !1, a.value = null;
    }
    function Ge(J) {
      const { workflow: ue } = J.detail;
      ue && me(ue);
    }
    function it(J) {
      var $e;
      const ue = ($e = J.detail) == null ? void 0 : $e.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: ue,
        pendingInstalls: Array.from(D.value.entries()),
        eventDetail: J.detail
      });
      const Re = D.value.get(ue);
      Re ? (fe(Re), p.value = Re, console.log("[ComfyGit] Installing package:", Re)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", ue);
    }
    function Oe(J) {
      var qe, Ze, lt, ft, It, ht, Y, L, le, He, tt;
      const ue = (qe = J.detail) == null ? void 0 : qe.ui_id, Re = (lt = (Ze = J.detail) == null ? void 0 : Ze.status) == null ? void 0 : lt.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: ue,
        status: Re,
        pendingInstalls: Array.from(D.value.entries()),
        eventDetail: J.detail
      });
      const $e = D.value.get(ue);
      if ($e) {
        if (fe($e), D.value.delete(ue), c.value.delete($e), p.value === $e && (p.value = null), Re === "success")
          r.value.add($e), w.value++, console.log("[ComfyGit] Package installed successfully:", $e);
        else if (Re === "dependency_review_required") {
          const yt = ((It = (ft = J.detail) == null ? void 0 : ft.task) == null ? void 0 : It.params) || ((ht = J.detail) == null ? void 0 : ht.params);
          yt != null && yt.id ? A($e, yt, (Y = J.detail) == null ? void 0 : Y.status) : u.value.set($e, "Dependency review required");
        } else {
          const yt = ((He = (le = (L = J.detail) == null ? void 0 : L.status) == null ? void 0 : le.messages) == null ? void 0 : He[0]) || ((tt = J.detail) == null ? void 0 : tt.result) || "Unknown error";
          u.value.set($e, yt), console.error("[ComfyGit] Package install failed:", $e, yt);
        }
        D.value.size === 0 && w.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", w.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: w.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", ue);
    }
    let rt = null;
    function Pt() {
      return rt || (rt = Hn()), rt;
    }
    let Jt = !1;
    function cs() {
      if (Jt) return !0;
      const J = Pt();
      return J ? (J.addEventListener("cm-task-started", it), J.addEventListener("cm-task-completed", Oe), J.addEventListener("comfygit:workflow-changed", Ft), Jt = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function Ft(J) {
      const { change_type: ue } = J.detail;
      (ue === "created" || ue === "modified") && l.value && (ne(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return ut(() => {
      window.addEventListener("comfygit:workflow-loaded", Ge);
    }), Gn(() => {
      if (ne(), window.removeEventListener("comfygit:workflow-loaded", Ge), Jt) {
        const J = Pt();
        J && (J.removeEventListener("cm-task-started", it), J.removeEventListener("cm-task-completed", Oe), J.removeEventListener("comfygit:workflow-changed", Ft)), Jt = !1;
      }
    }), (J, ue) => {
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
            t.value ? (o(), i("div", bR, [...ue[5] || (ue[5] = [
              s("div", { class: "loading-spinner" }, null, -1),
              s("span", null, "Analyzing workflow...", -1)
            ])])) : a.value && ae.value ? (o(), i("div", $R, [
              pe.value.length > 0 ? (o(), i("div", CR, [
                s("div", xR, [
                  s("span", SR, "Missing Custom Nodes (" + m(ze.value) + ")", 1),
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
                s("div", IR, [
                  (o(!0), i(B, null, ye(ee.value, ($e) => (o(), i("div", {
                    key: $e.package_id,
                    class: "package-item"
                  }, [
                    s("div", ER, [
                      s("span", TR, m($e.title), 1),
                      s("span", MR, "(" + m($e.node_count) + " " + m($e.node_count === 1 ? "node" : "nodes") + ")", 1)
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
                    }, 1032, ["disabled", "onClick"])) : p.value === $e.package_id ? (o(), i("span", PR, "Installing...")) : c.value.has($e.package_id) ? (o(), i("span", RR, "Queued")) : u.value.has($e.package_id) ? (o(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get($e.package_id)
                    }, "Failed ⚠", 8, DR)) : d.value.has($e.package_id) ? (o(), R(Ue, {
                      key: 4,
                      size: "sm",
                      variant: "secondary",
                      disabled: Me.value,
                      onClick: (qe) => V($e.package_id)
                    }, {
                      default: h(() => [...ue[6] || (ue[6] = [
                        x(" Needs Review ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : (o(), i("span", NR, "Installed"))
                  ]))), 128)),
                  pe.value.length >= 5 ? (o(), i("div", {
                    key: 0,
                    class: "show-all-row",
                    onClick: ue[0] || (ue[0] = ($e) => g.value = "packages")
                  }, [
                    s("span", null, "Show all " + m(pe.value.length) + " packages...", 1),
                    ue[7] || (ue[7] = s("span", { class: "show-all-arrow" }, "→", -1))
                  ])) : y("", !0)
                ])
              ])) : y("", !0),
              Le.value.length > 0 ? (o(), i("div", LR, [
                s("div", UR, [
                  s("span", OR, "Unknown Nodes (" + m(Le.value.length) + ")", 1)
                ]),
                s("div", AR, [
                  (o(!0), i(B, null, ye(Le.value.slice(0, 5), ($e) => (o(), i("div", {
                    key: $e.node_type,
                    class: "item"
                  }, [
                    s("code", zR, m($e.node_type), 1),
                    ue[8] || (ue[8] = s("span", { class: "not-found" }, "Not found in registry", -1))
                  ]))), 128)),
                  Le.value.length > 5 ? (o(), i("div", FR, " ...and " + m(Le.value.length - 5) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              ke.value.length > 0 ? (o(), i("div", VR, [
                s("div", BR, [
                  s("span", WR, "Requires Newer ComfyUI (" + m(ke.value.length) + ")", 1)
                ]),
                s("div", GR, [
                  (o(!0), i(B, null, ye(ke.value.slice(0, 5), ($e) => (o(), i("div", {
                    key: `vg-${$e.node_type}`,
                    class: "item"
                  }, [
                    s("code", jR, m($e.node_type), 1),
                    s("span", HR, m($e.guidance || "Requires a newer ComfyUI version"), 1)
                  ]))), 128)),
                  ke.value.length > 5 ? (o(), i("div", qR, " ...and " + m(ke.value.length - 5) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              De.value.length > 0 ? (o(), i("div", KR, [
                s("div", JR, [
                  s("span", QR, "Community-Mapped Packages (" + m(De.value.length) + ")", 1),
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
                s("div", YR, [
                  (o(!0), i(B, null, ye(we.value, ($e) => (o(), i("div", {
                    key: `community-${$e.item_id}`,
                    class: "package-item"
                  }, [
                    s("div", XR, [
                      s("div", ZR, [
                        s("span", e7, m($e.title), 1),
                        s("span", t7, "(" + m($e.node_count) + " " + m($e.node_count === 1 ? "node" : "nodes") + ")", 1)
                      ]),
                      s("div", s7, [
                        ue[9] || (ue[9] = x(" Found via community mapping — registry metadata may be incomplete", -1)),
                        $e.guidance ? (o(), i("span", n7, ". " + m($e.guidance), 1)) : y("", !0)
                      ])
                    ]),
                    $e.package_id ? (o(), i(B, { key: 0 }, [
                      !r.value.has($e.package_id) && !c.value.has($e.package_id) && !u.value.has($e.package_id) && !d.value.has($e.package_id) ? (o(), i("div", o7, [
                        ie($e) ? (o(), R(Ue, {
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
                          variant: ie($e) ? "ghost" : "secondary",
                          disabled: p.value === $e.package_id,
                          onClick: (qe) => Fe($e, "git")
                        }, {
                          default: h(() => [...ue[10] || (ue[10] = [
                            x(" Install via Git ", -1)
                          ])]),
                          _: 1
                        }, 8, ["variant", "disabled", "onClick"])) : y("", !0)
                      ])) : p.value === $e.package_id ? (o(), i("span", a7, "Installing...")) : c.value.has($e.package_id) ? (o(), i("span", l7, "Queued")) : u.value.has($e.package_id) ? (o(), i("span", {
                        key: 3,
                        class: "failed-badge",
                        title: u.value.get($e.package_id)
                      }, "Failed ⚠", 8, i7)) : d.value.has($e.package_id) ? (o(), R(Ue, {
                        key: 4,
                        size: "sm",
                        variant: "secondary",
                        disabled: Me.value,
                        onClick: (qe) => V($e.package_id)
                      }, {
                        default: h(() => [...ue[11] || (ue[11] = [
                          x(" Needs Review ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : (o(), i("span", r7, "Installed"))
                    ], 64)) : (o(), i(B, { key: 1 }, [
                      u.value.has($e.item_id) ? (o(), i("span", {
                        key: 0,
                        class: "failed-badge",
                        title: u.value.get($e.item_id)
                      }, "Failed ⚠", 8, c7)) : (o(), i("span", u7, "Manual setup required"))
                    ], 64))
                  ]))), 128)),
                  De.value.length >= 5 ? (o(), i("div", {
                    key: 0,
                    class: "show-all-row",
                    onClick: ue[1] || (ue[1] = ($e) => g.value = "community")
                  }, [
                    s("span", null, "Show all " + m(De.value.length) + " packages...", 1),
                    ue[12] || (ue[12] = s("span", { class: "show-all-arrow" }, "→", -1))
                  ])) : y("", !0)
                ])
              ])) : y("", !0),
              Ce.value.length > 0 ? (o(), i("div", d7, [
                s("div", m7, [
                  s("span", f7, "Missing Models (" + m(Ce.value.length) + ")", 1),
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
                s("div", v7, [
                  (o(!0), i(B, null, ye(j.value, ($e) => (o(), i("div", {
                    key: $e.widget_value,
                    class: "model-item"
                  }, [
                    s("div", p7, [
                      s("span", g7, m($e.filename), 1)
                    ]),
                    $e.canDownload ? (o(), i(B, { key: 0 }, [
                      f.value.has($e.url) ? (o(), i("span", h7, "Queued")) : (o(), R(Ue, {
                        key: 0,
                        size: "sm",
                        variant: "secondary",
                        onClick: (qe) => Xe($e)
                      }, {
                        default: h(() => [...ue[13] || (ue[13] = [
                          x(" Download ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"]))
                    ], 64)) : (o(), i("span", y7, "Manual download required"))
                  ]))), 128)),
                  Ce.value.length >= 5 ? (o(), i("div", {
                    key: 0,
                    class: "show-all-row",
                    onClick: ue[2] || (ue[2] = ($e) => g.value = "models")
                  }, [
                    s("span", null, "Show all " + m(Ce.value.length) + " models...", 1),
                    ue[14] || (ue[14] = s("span", { class: "show-all-arrow" }, "→", -1))
                  ])) : y("", !0)
                ])
              ])) : y("", !0),
              s("div", w7, [
                b(ca, {
                  modelValue: v.value,
                  "onUpdate:modelValue": [
                    ue[3] || (ue[3] = ($e) => v.value = $e),
                    G
                  ]
                }, {
                  default: h(() => [...ue[15] || (ue[15] = [
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
              default: h(() => [...ue[16] || (ue[16] = [
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
        g.value ? (o(), R(kR, {
          key: 1,
          title: xe.value,
          items: Z.value,
          "item-type": g.value,
          "queued-items": g.value === "models" ? f.value : c.value,
          "installed-items": g.value === "models" ? void 0 : r.value,
          "failed-items": g.value === "models" ? void 0 : u.value,
          "installing-item": g.value === "models" ? void 0 : p.value,
          onClose: ue[4] || (ue[4] = ($e) => g.value = null),
          onAction: Ve,
          onBulkAction: Ne
        }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0),
        k.value ? (o(), R(gc, {
          key: 2,
          loading: C.value,
          error: $.value,
          preview: I.value,
          "can-apply": !!(E.value && ((Re = I.value) != null && Re.success)),
          applying: S.value,
          onClose: se,
          onApply: ve
        }, null, 8, ["loading", "error", "preview", "can-apply", "applying"])) : y("", !0)
      ], 64);
    };
  }
}), b7 = /* @__PURE__ */ Te(k7, [["__scopeId", "data-v-9f1fbedc"]]), $7 = {
  key: 0,
  class: "io-mapping-root"
}, C7 = { class: "io-mapping-visual-layer" }, x7 = { class: "io-mapping-header" }, S7 = { class: "io-mapping-header-main" }, I7 = { class: "io-mapping-subtitle" }, E7 = {
  key: 0,
  class: "io-mapping-hover-summary"
}, T7 = { class: "io-mapping-header-actions" }, M7 = { class: "io-mapping-sidebar" }, P7 = { class: "io-mapping-sidebar-scroll" }, R7 = {
  key: 0,
  class: "io-state-block"
}, D7 = {
  key: 1,
  class: "io-state-block io-state-error"
}, N7 = { class: "contract-meta-section" }, L7 = { class: "contract-meta-toggle-icon" }, U7 = {
  key: 0,
  class: "contract-meta-body"
}, O7 = { class: "contract-summary" }, A7 = { class: "summary-pill" }, z7 = { class: "summary-pill" }, F7 = { class: "summary-pill" }, V7 = { class: "mapping-section" }, B7 = { class: "section-header" }, W7 = {
  key: 0,
  class: "empty-message"
}, G7 = ["onClick"], j7 = { class: "item-card-title" }, H7 = { class: "item-card-meta" }, q7 = { class: "item-card-summary" }, K7 = { key: 0 }, J7 = { class: "mapping-section" }, Q7 = { class: "section-header" }, Y7 = {
  key: 0,
  class: "empty-message"
}, X7 = ["onClick"], Z7 = { class: "item-card-title" }, eD = { class: "item-card-meta" }, tD = { class: "item-card-summary" }, sD = { class: "io-mapping-footer" }, nD = { class: "io-mapping-footer-left" }, oD = { class: "io-mapping-footer-right" }, aD = /* @__PURE__ */ Ee({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const t = e, { getWorkflowContract: n, saveWorkflowContract: a, deleteWorkflowContract: l } = mt(), r = _(!1), c = _(""), u = _(!1), d = _(!1), f = _(!1), v = _(null), p = _(null), w = _(null), g = _(!1), k = _(!1), C = _(null), S = _(null), $ = _(0), I = _(null), E = _(null);
    let M = null;
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
    ], O = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], F = P(() => {
      var X;
      return ((X = p.value) == null ? void 0 : X.contract_summary.has_contract) === !0;
    }), N = P(() => {
      if (!w.value)
        return { inputs: [], outputs: [] };
      const X = w.value.default_contract || "default";
      return w.value.contracts[X] || (w.value.contracts[X] = { inputs: [], outputs: [] }), w.value.contracts[X];
    }), q = P(() => {
      var G;
      const X = ((G = p.value) == null ? void 0 : G.contract_summary.status) ?? "none";
      return X === "valid" ? "Valid Contract" : X === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function ce(X) {
      return X ? JSON.parse(JSON.stringify(X)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function de(X) {
      return X === "integer" || X === "number";
    }
    function Q(X) {
      return X === "enum";
    }
    function te(X) {
      return X == null ? "" : String(X);
    }
    function W(X) {
      const G = X.trim();
      if (!G) return;
      const me = Number(G);
      return Number.isFinite(me) ? me : void 0;
    }
    function A(X) {
      return (X || []).join(`
`);
    }
    function V(X) {
      return X.split(/[\n,]/).map((G) => G.trim()).filter(Boolean);
    }
    function ve(X) {
      return typeof X == "string" ? X.length > 24 ? `${X.slice(0, 24)}...` : X : String(X);
    }
    function se(X) {
      return X == null ? "" : String(X);
    }
    function fe(X) {
      var me;
      const G = (me = X == null ? void 0 : X.options) == null ? void 0 : me.values;
      return Array.isArray(G) ? G.map((Je) => String(Je)).filter(Boolean) : [];
    }
    function ne(X, G) {
      var Ge;
      const me = (Ge = X == null ? void 0 : X.options) == null ? void 0 : Ge[G];
      if (me == null || me === "") return;
      const Je = Number(me);
      return Number.isFinite(Je) ? Je : void 0;
    }
    function K(X, G) {
      return X.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || G;
    }
    function oe(X) {
      if (!w.value) return;
      const G = X.trim() || "default";
      w.value.default_contract = G, w.value.contracts[G] || (w.value.contracts[G] = { inputs: [], outputs: [] });
    }
    function ae(X) {
      const G = String(X ?? "").toLowerCase();
      return G.includes("image") ? "image" : G.includes("video") ? "video" : G.includes("audio") ? "audio" : G.includes("int") ? "integer" : G.includes("float") || G.includes("double") || G.includes("number") ? "number" : G.includes("bool") ? "boolean" : G.includes("combo") || G.includes("enum") ? "enum" : G.includes("string") || G.includes("text") ? "string" : "file";
    }
    function Me(X) {
      N.value.inputs.splice(X, 1), C.value === X && (C.value = null);
    }
    function pe(X) {
      N.value.outputs.splice(X, 1), S.value === X && (S.value = null);
    }
    function ze(X) {
      C.value = C.value === X ? null : X, C.value != null && (S.value = null);
    }
    function Le(X) {
      S.value = S.value === X ? null : X, S.value != null && (C.value = null);
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
      const G = X.closest("[data-node-id]"), me = G == null ? void 0 : G.getAttribute("data-node-id");
      return me ? ((it = (Ge = (Je = t.comfyApp) == null ? void 0 : Je.graph) == null ? void 0 : Ge.getNodeById) == null ? void 0 : it.call(Ge, me)) ?? ((Pt = (rt = (Oe = t.comfyApp) == null ? void 0 : Oe.rootGraph) == null ? void 0 : rt.getNodeById) == null ? void 0 : Pt.call(rt, me)) ?? null : null;
    }
    function we(X, G) {
      if (G == null || G < 0) return null;
      const me = ke(X);
      return me ? me.querySelectorAll('[data-testid="node-widget"]')[G] ?? null : null;
    }
    function T(X) {
      return !X || X.width <= 0 || X.height <= 0 ? null : {
        left: `${X.left}px`,
        top: `${X.top}px`,
        width: `${X.width}px`,
        height: `${X.height}px`
      };
    }
    function U(X) {
      const G = ke((X == null ? void 0 : X.id) ?? "");
      if (G) return G.getBoundingClientRect();
      const me = t.comfyApp;
      if (!X || typeof (me == null ? void 0 : me.canvasPosToClientPos) != "function") return null;
      const Ge = me.canvasPosToClientPos([X.pos[0], X.pos[1] - 32]), it = me.canvasPosToClientPos([X.pos[0] + X.size[0], X.pos[1] + X.size[1]]);
      return !Ge || !it ? null : new DOMRect(Ge[0], Ge[1], it[0] - Ge[0], it[1] - Ge[1]);
    }
    function ie(X) {
      var rt, Pt, Jt, cs, Ft, J, ue;
      const G = we(X.node_id, X.widget_idx);
      if (G) return G.getBoundingClientRect();
      const me = ((Jt = (Pt = (rt = t.comfyApp) == null ? void 0 : rt.graph) == null ? void 0 : Pt.getNodeById) == null ? void 0 : Jt.call(Pt, String(X.node_id))) ?? ((J = (Ft = (cs = t.comfyApp) == null ? void 0 : cs.rootGraph) == null ? void 0 : Ft.getNodeById) == null ? void 0 : J.call(Ft, String(X.node_id)));
      if (!me || typeof X.widget_idx != "number" || !Array.isArray(me.widgets)) return null;
      const Je = me.widgets[X.widget_idx];
      if (!Je || typeof ((ue = t.comfyApp) == null ? void 0 : ue.canvasPosToClientPos) != "function") return U(me);
      const Ge = 10, it = t.comfyApp.canvasPosToClientPos([me.pos[0] + Ge, me.pos[1] + (Je.y ?? 0)]), Oe = t.comfyApp.canvasPosToClientPos([me.pos[0] + me.size[0] - Ge, me.pos[1] + (Je.y ?? 0) + (Je.computedHeight ?? 24)]);
      return !it || !Oe ? U(me) : new DOMRect(it[0], it[1], Oe[0] - it[0], Oe[1] - it[1]);
    }
    function Ie(X) {
      var me, Je, Ge, it, Oe, rt;
      const G = ((Ge = (Je = (me = t.comfyApp) == null ? void 0 : me.graph) == null ? void 0 : Je.getNodeById) == null ? void 0 : Ge.call(Je, String(X.node_id))) ?? ((rt = (Oe = (it = t.comfyApp) == null ? void 0 : it.rootGraph) == null ? void 0 : Oe.getNodeById) == null ? void 0 : rt.call(Oe, String(X.node_id)));
      return U(G);
    }
    const Ce = P(() => ($.value, N.value.inputs.map((X, G) => {
      const me = T(ie(X));
      return me ? {
        key: `input-${G}-${X.node_id}-${X.widget_idx ?? "na"}`,
        style: me,
        active: C.value === G
      } : null;
    }).filter((X) => !!X))), be = P(() => ($.value, N.value.outputs.map((X, G) => {
      const me = T(Ie(X));
      return me ? {
        key: `output-${G}-${X.node_id}-${X.selector ?? "primary"}`,
        style: me,
        active: S.value === G
      } : null;
    }).filter((X) => !!X)));
    function ee(X) {
      var Jt, cs, Ft, J, ue, Re, $e, qe, Ze, lt;
      if (De(X.target)) return null;
      const G = (Jt = t.comfyApp) == null ? void 0 : Jt.canvas;
      if (!G) return null;
      const me = (cs = G.convertEventToCanvasOffset) == null ? void 0 : cs.call(G, X);
      if (!me || me.length < 2) return null;
      const [Je, Ge] = me, it = G.graph || ((Ft = t.comfyApp) == null ? void 0 : Ft.graph) || ((J = t.comfyApp) == null ? void 0 : J.rootGraph), Oe = ((ue = it == null ? void 0 : it.getNodeOnPos) == null ? void 0 : ue.call(it, Je, Ge, G.visible_nodes)) || ((Re = G.getNodeOnPos) == null ? void 0 : Re.call(G, Je, Ge)) || ge(X.target);
      if (!Oe) return null;
      const rt = ($e = Oe.getWidgetOnPos) == null ? void 0 : $e.call(Oe, Je, Ge, !0);
      if (rt)
        return { kind: "input", node: Oe, widget: rt, canvasX: Je, canvasY: Ge };
      const Pt = ((qe = Oe.getOutputOnPos) == null ? void 0 : qe.call(Oe, [Je, Ge])) || ((lt = (Ze = Oe.constructor) == null ? void 0 : Ze.nodeData) != null && lt.output_node ? { name: Oe.title || Oe.type || "output", type: "image" } : null);
      return Pt ? { kind: "output", node: Oe, output: Pt, canvasX: Je, canvasY: Ge } : null;
    }
    function j(X, G) {
      var rt;
      const me = Array.isArray(X.widgets) ? X.widgets.indexOf(G) : -1, Je = N.value.inputs.findIndex(
        (Pt) => String(Pt.node_id) === String(X.id) && Pt.widget_idx === me
      );
      if (Je >= 0) {
        C.value = Je;
        return;
      }
      const Ge = typeof ((rt = G == null ? void 0 : G.options) == null ? void 0 : rt.property) == "string" ? G.options.property : void 0, it = (G == null ? void 0 : G.name) || Ge || "input", Oe = {
        name: K(String(it), `input_${N.value.inputs.length + 1}`),
        display_name: String((G == null ? void 0 : G.name) || Ge || `Input ${N.value.inputs.length + 1}`),
        type: ae(G == null ? void 0 : G.type),
        node_id: String(X.id),
        widget_idx: me >= 0 ? me : void 0,
        field_key: Ge,
        required: !0,
        default: (G == null ? void 0 : G.value) ?? ""
      };
      de(Oe.type) && (Oe.min = ne(G, "min"), Oe.max = ne(G, "max")), Q(Oe.type) && (Oe.enum_values = fe(G)), N.value.inputs.push(Oe), C.value = N.value.inputs.length - 1, S.value = null;
    }
    function he(X, G) {
      const me = Array.isArray(X.outputs) ? X.outputs.indexOf(G) : -1, Je = me >= 0 ? `slot:${me}` : "primary", Ge = N.value.outputs.findIndex(
        (Oe) => String(Oe.node_id) === String(X.id) && (Oe.selector || "primary") === Je
      );
      if (Ge >= 0) {
        S.value = Ge;
        return;
      }
      const it = {
        name: K(String((G == null ? void 0 : G.name) || "output"), `output_${N.value.outputs.length + 1}`),
        display_name: String((G == null ? void 0 : G.name) || `Output ${N.value.outputs.length + 1}`),
        type: ae(G == null ? void 0 : G.type),
        node_id: String(X.id),
        selector: Je
      };
      N.value.outputs.push(it), S.value = N.value.outputs.length - 1, C.value = null;
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
        const Oe = Array.isArray(G.node.widgets) ? G.node.widgets.indexOf(G.widget) : -1, rt = T(((Je = we(G.node.id, Oe)) == null ? void 0 : Je.getBoundingClientRect()) ?? ie({
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
      const me = T(U(G.node));
      if (!me) {
        I.value = null, E.value = null;
        return;
      }
      I.value = {
        kind: "output",
        label: `${((it = G.output) == null ? void 0 : it.name) || G.node.title || G.node.type || "output"} · Node ${G.node.id}`
      }, E.value = { kind: "output", style: me };
    }
    function Ke(X) {
      var Je, Ge, it;
      if (!r.value || !w.value || X.button !== 0) return;
      const G = ee(X);
      if (!G) return;
      const me = (Je = t.comfyApp) == null ? void 0 : Je.canvas;
      if (me) {
        if (G.kind === "input") {
          X.preventDefault(), X.stopImmediatePropagation(), X.stopPropagation(), Array.isArray(me.graph_mouse) && (me.graph_mouse[0] = G.canvasX, me.graph_mouse[1] = G.canvasY), (Ge = me.selectNode) == null || Ge.call(me, G.node, !1), j(G.node, G.widget);
          return;
        }
        X.preventDefault(), X.stopImmediatePropagation(), X.stopPropagation(), Array.isArray(me.graph_mouse) && (me.graph_mouse[0] = G.canvasX, me.graph_mouse[1] = G.canvasY), (it = me.selectNode) == null || it.call(me, G.node, !1), he(G.node, G.output);
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
          p.value = await n(c.value), w.value = ce(p.value.execution_contract);
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
          p.value = await a(c.value, w.value), w.value = ce(p.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
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
      const me = (Ge = (Je = X.detail) == null ? void 0 : Je.workflowName) == null ? void 0 : Ge.trim();
      me && (c.value = me, C.value = null, S.value = null, g.value = !1, r.value = !0, await Z());
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
      if (M != null) return;
      const X = () => {
        if ($.value += 1, !r.value) {
          M = null;
          return;
        }
        M = window.requestAnimationFrame(X);
      };
      M = window.requestAnimationFrame(X);
    }
    function Kt() {
      M != null && (window.cancelAnimationFrame(M), M = null);
    }
    return $t(r, (X) => {
      X ? (We(), Lt()) : (xe(), Kt());
    }), ut(() => {
      window.addEventListener("comfygit:open-io-mapping", Xe), window.addEventListener("keydown", kt);
    }), To(() => {
      xe(), Kt(), window.removeEventListener("comfygit:open-io-mapping", Xe), window.removeEventListener("keydown", kt);
    }), (X, G) => r.value ? (o(), i("div", $7, [
      s("div", C7, [
        (o(!0), i(B, null, ye(Ce.value, (me) => (o(), i("div", {
          key: me.key,
          class: Be(["io-highlight", "io-highlight-input", { active: me.active }]),
          style: zt(me.style)
        }, null, 6))), 128)),
        (o(!0), i(B, null, ye(be.value, (me) => (o(), i("div", {
          key: me.key,
          class: Be(["io-highlight", "io-highlight-output", { active: me.active }]),
          style: zt(me.style)
        }, null, 6))), 128)),
        E.value ? (o(), i("div", {
          key: 0,
          class: Be(["io-highlight", E.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: zt(E.value.style)
        }, null, 6)) : y("", !0)
      ]),
      s("div", x7, [
        s("div", S7, [
          G[8] || (G[8] = s("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          s("div", I7, m(c.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          I.value ? (o(), i("div", E7, " Hovering " + m(I.value.kind) + ": " + m(I.value.label), 1)) : y("", !0)
        ]),
        s("div", T7, [
          b(Ue, {
            size: "sm",
            variant: "secondary",
            onClick: G[0] || (G[0] = (me) => Ae({ reopenPanel: !0 }))
          }, {
            default: h(() => [...G[9] || (G[9] = [
              x(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      s("aside", M7, [
        s("div", P7, [
          u.value ? (o(), i("div", R7, " Loading workflow contract... ")) : v.value ? (o(), i("div", D7, m(v.value), 1)) : w.value ? (o(), i(B, { key: 2 }, [
            s("section", N7, [
              s("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: G[1] || (G[1] = (me) => g.value = !g.value)
              }, [
                G[10] || (G[10] = s("span", null, "Contract Details", -1)),
                s("span", L7, m(g.value ? "▾" : "▸"), 1)
              ]),
              g.value ? (o(), i("div", U7, [
                b(Wt, { label: "Default Contract" }, {
                  default: h(() => [
                    b(Rt, {
                      "model-value": w.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": oe
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                b(Wt, { label: "Display Name" }, {
                  default: h(() => [
                    b(Rt, {
                      modelValue: N.value.display_name,
                      "onUpdate:modelValue": G[2] || (G[2] = (me) => N.value.display_name = me),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                b(Wt, { label: "Description" }, {
                  default: h(() => [
                    b(An, {
                      modelValue: N.value.description,
                      "onUpdate:modelValue": G[3] || (G[3] = (me) => N.value.description = me),
                      rows: 2,
                      placeholder: "Optional description for this contract"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])) : y("", !0)
            ]),
            s("section", O7, [
              s("span", A7, m(q.value), 1),
              s("span", z7, m(N.value.inputs.length) + " input" + m(N.value.inputs.length === 1 ? "" : "s"), 1),
              s("span", F7, m(N.value.outputs.length) + " output" + m(N.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            s("section", V7, [
              s("div", B7, [
                b(_n, { variant: "section" }, {
                  default: h(() => [...G[11] || (G[11] = [
                    x("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              N.value.inputs.length ? y("", !0) : (o(), i("div", W7, " No inputs configured. ")),
              (o(!0), i(B, null, ye(N.value.inputs, (me, Je) => (o(), i("div", {
                key: `input-${Je}`,
                class: Be(["item-card", { selected: C.value === Je }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Ge) => ze(Je)
                }, [
                  s("div", null, [
                    s("div", j7, m(me.name || `Input ${Je + 1}`), 1),
                    s("div", H7, [
                      x(" Node " + m(me.node_id || "?"), 1),
                      me.widget_idx !== void 0 ? (o(), i(B, { key: 0 }, [
                        x(" · Widget " + m(me.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", q7, [
                      s("span", null, m(me.type || "string"), 1),
                      s("span", null, m(me.required ? "required" : "optional"), 1),
                      me.default !== void 0 && me.default !== "" ? (o(), i("span", K7, "default " + m(ve(me.default)), 1)) : y("", !0)
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
                ], 8, G7),
                C.value === Je ? (o(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: G[4] || (G[4] = bt(() => {
                  }, ["stop"]))
                }, [
                  b(Wt, { label: "Name" }, {
                    default: h(() => [
                      b(Rt, {
                        modelValue: me.name,
                        "onUpdate:modelValue": (Ge) => me.name = Ge,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Wt, { label: "Display Name" }, {
                    default: h(() => [
                      b(Rt, {
                        modelValue: me.display_name,
                        "onUpdate:modelValue": (Ge) => me.display_name = Ge,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Wt, { label: "Type" }, {
                    default: h(() => [
                      b(Qo, {
                        "model-value": me.type,
                        options: D,
                        "full-width": "",
                        "onUpdate:modelValue": (Ge) => me.type = Ge
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Wt, { label: "Required" }, {
                    default: h(() => [
                      b(Qo, {
                        "model-value": me.required ? "true" : "false",
                        options: O,
                        "full-width": "",
                        "onUpdate:modelValue": (Ge) => me.required = Ge === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Wt, {
                    class: Be({ "item-grid-full": me.type === "string" || me.type === "enum" }),
                    label: "Default"
                  }, {
                    default: h(() => [
                      me.type === "string" ? (o(), R(An, {
                        key: 0,
                        "model-value": se(me.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (Ge) => me.default = Ge
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (o(), R(Rt, {
                        key: 1,
                        modelValue: me.default,
                        "onUpdate:modelValue": (Ge) => me.default = Ge,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  de(me.type) ? (o(), R(Wt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: h(() => [
                      b(Rt, {
                        "model-value": te(me.min),
                        "full-width": "",
                        "onUpdate:modelValue": (Ge) => me.min = W(Ge)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  de(me.type) ? (o(), R(Wt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: h(() => [
                      b(Rt, {
                        "model-value": te(me.max),
                        "full-width": "",
                        "onUpdate:modelValue": (Ge) => me.max = W(Ge)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  Q(me.type) ? (o(), R(Wt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: h(() => [
                      b(An, {
                        "model-value": A(me.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (Ge) => me.enum_values = V(Ge)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0)
                ])) : y("", !0)
              ], 2))), 128))
            ]),
            s("section", J7, [
              s("div", Q7, [
                b(_n, { variant: "section" }, {
                  default: h(() => [...G[13] || (G[13] = [
                    x("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              N.value.outputs.length ? y("", !0) : (o(), i("div", Y7, " No outputs configured. ")),
              (o(!0), i(B, null, ye(N.value.outputs, (me, Je) => (o(), i("div", {
                key: `output-${Je}`,
                class: Be(["item-card", { selected: S.value === Je }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Ge) => Le(Je)
                }, [
                  s("div", null, [
                    s("div", Z7, m(me.name || `Output ${Je + 1}`), 1),
                    s("div", eD, [
                      x(" Node " + m(me.node_id || "?"), 1),
                      me.selector ? (o(), i(B, { key: 0 }, [
                        x(" · " + m(me.selector), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", tD, [
                      s("span", null, m(me.type || "file"), 1)
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
                ], 8, X7),
                S.value === Je ? (o(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: G[5] || (G[5] = bt(() => {
                  }, ["stop"]))
                }, [
                  b(Wt, { label: "Name" }, {
                    default: h(() => [
                      b(Rt, {
                        modelValue: me.name,
                        "onUpdate:modelValue": (Ge) => me.name = Ge,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Wt, { label: "Display Name" }, {
                    default: h(() => [
                      b(Rt, {
                        modelValue: me.display_name,
                        "onUpdate:modelValue": (Ge) => me.display_name = Ge,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Wt, { label: "Type" }, {
                    default: h(() => [
                      b(Qo, {
                        "model-value": me.type,
                        options: D,
                        "full-width": "",
                        "onUpdate:modelValue": (Ge) => me.type = Ge
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : y("", !0)
              ], 2))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        s("div", sD, [
          s("div", nD, [
            b(Ue, {
              variant: "secondary",
              onClick: G[6] || (G[6] = (me) => Ae({ reopenPanel: !0 }))
            }, {
              default: h(() => [...G[15] || (G[15] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            })
          ]),
          s("div", oD, [
            b(Ue, {
              variant: "danger",
              disabled: !F.value,
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
        onCancel: G[7] || (G[7] = (me) => k.value = !1)
      }, null, 8, ["message"])) : y("", !0)
    ])) : y("", !0);
  }
}), lD = /* @__PURE__ */ Te(aD, [["__scopeId", "data-v-13515b27"]]), iD = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', rD = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', cD = {
  comfy: iD,
  phosphor: rD
}, Ul = "comfy", Lc = "comfygit-theme";
let pn = null, Uc = Ul;
function uD() {
  try {
    const e = localStorage.getItem(Lc);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Ul;
}
function Oc(e = Ul) {
  pn && pn.remove(), pn = document.createElement("style"), pn.id = "comfygit-theme-styles", pn.setAttribute("data-theme", e), pn.textContent = cD[e], document.head.appendChild(pn), document.body.setAttribute("data-comfygit-theme", e), Uc = e;
  try {
    localStorage.setItem(Lc, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function dD() {
  return Uc;
}
function mD(e) {
  Oc(e);
}
function fD(e) {
  var r;
  const { ui_id: t, state: n } = e || {}, a = (n == null ? void 0 : n.history) || {};
  if (!t)
    return null;
  const l = a[t];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const zi = "ComfyGit.DevAutoReload", Ac = "ComfyGit.DevAutoReload.PanelOpen";
function vD() {
  const e = new URLSearchParams(window.location.search).get("comfygitDevReload");
  return e === null ? null : e;
}
function ba() {
  const e = vD();
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
function pD() {
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
async function gD(e) {
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
const hD = "./comfygit-panel.css", yD = "./comfygit-panel.js", Fc = new URL(hD, import.meta.url).href, wD = new URL(yD, import.meta.url).href, Ol = document.createElement("link");
Ol.rel = "stylesheet";
Ol.href = Fc;
document.head.appendChild(Ol);
const _D = uD();
Oc(_D);
ba() || (sessionStorage.removeItem("ComfyGit.LastView"), sessionStorage.removeItem("ComfyGit.LastSection"));
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), mD(e);
  },
  getTheme: () => {
    const e = dD();
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
async function lo() {
  const e = Hn();
  if (!e) return null;
  try {
    const t = await e.fetchApi("/v2/comfygit/status");
    t.ok && (zn.value = await t.json());
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
function kD() {
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
    render: () => jn(fP, {
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
        oo(), bD(l.success, l.message), lo().then(Pn);
      }
    })
  }), yo.mount(ds), document.body.appendChild(ds);
}
function oo() {
  yo && (yo.unmount(), yo = null), ds && (ds.remove(), ds = null);
}
function bD(e, t) {
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
function $D() {
  eo || (eo = document.createElement("div"), eo.className = "comfygit-download-queue-root", Vi = Po({
    render: () => jn(iR)
  }), Vi.mount(eo), document.body.appendChild(eo), console.log("[ComfyGit] Model download queue mounted"));
}
function CD() {
  to || (to = document.createElement("div"), to.className = "comfygit-missing-resources-root", Bi = Po({
    render: () => jn(b7)
  }), Bi.mount(to), document.body.appendChild(to), console.log("[ComfyGit] Missing resources popup mounted"));
}
function xD() {
  so || (so = document.createElement("div"), so.className = "comfygit-io-mapping-root", Wi = Po({
    render: () => jn(lD, {
      comfyApp: Ns
    })
  }), Wi.mount(so), document.body.appendChild(so), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let ns = null;
function Pn() {
  if (!ns) return;
  const e = ns.querySelector(".commit-indicator");
  e && (e.style.display = kD() ? "block" : "none");
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
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = () => no(), ns = document.createElement("button"), ns.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ns.innerHTML = 'Commit <span class="commit-indicator"></span>', ns.title = "Quick Commit", ns.onclick = () => Gi(ns), e.appendChild(t), e.appendChild(ns), (r = (l = Ns.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Ns.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), $D(), CD(), xD(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      no(u);
    })), window.addEventListener("comfygit:close-panel", (() => {
      io();
    })), window.addEventListener("comfygit:status-refresh", (async () => {
      await lo(), Pn(), Yo();
    }));
    const { loadPendingDownloads: n } = qn();
    n(), await Promise.all([lo(), rl()]), Pn(), Yo(), cl(), pD() && setTimeout(() => {
      Os || no();
    }, 100), gD([
      { name: "panel script", url: wD },
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
        const C = document.createElement("div");
        C.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const S = document.createElement("div");
        S.textContent = "Node installation failed", S.style.cssText = "font-weight: 600; color: #e53935;", C.appendChild(S);
        const $ = document.createElement("div");
        $.textContent = "Dependency conflict detected", $.style.cssText = "font-size: 12px; opacity: 0.8;", C.appendChild($), g.appendChild(C);
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
        const C = document.createElement("div");
        C.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const S = document.createElement("div");
        S.textContent = "To apply changes, please restart ComfyUI", S.style.cssText = "font-weight: 500; color: #fff;", C.appendChild(S);
        const $ = document.createElement("div");
        $.textContent = `${p} node package${p > 1 ? "s" : ""} ready to install`, $.style.cssText = "font-size: 12px; opacity: 0.7;", C.appendChild($), g.appendChild(C);
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
          I.disabled = !0, I.textContent = "Restarting...", I.style.opacity = "0.7", S.textContent = "Restarting...", $.textContent = "Applying changes, please wait...";
          try {
            const M = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Ns.refreshComboInNodes && (await Ns.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), k.textContent = "✅", S.textContent = "Nodes Installed", S.style.color = "#4caf50", $.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, g.style.borderColor = "#4caf50", I.style.display = "none", setTimeout(() => {
                  g.remove();
                }, 3e3);
              } catch (D) {
                console.error("[ComfyGit] Failed to refresh nodes:", D), k.textContent = "✅", S.textContent = "Restart Complete", S.style.color = "#4caf50", $.textContent = "Refresh the page to load new nodes.", g.style.borderColor = "#4caf50", I.style.display = "none";
              }
            };
            a.addEventListener("reconnected", M, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (M) {
            console.error("[ComfyGit] Failed to restart:", M), S.textContent = "Restart Failed", S.style.color = "#e53935", $.textContent = "Could not restart server. Try again.", g.style.borderColor = "#e53935", I.textContent = "Try Again", I.disabled = !1, I.style.opacity = "1";
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
        const w = fD(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: g = 1 } = w.detail || {};
        f(g);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
