var Wc = Object.defineProperty;
var Gc = (e, t, n) => t in e ? Wc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var No = (e, t, n) => Gc(e, typeof t != "symbol" ? t + "" : t, n);
import { app as Ls } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function cl(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const It = {}, Rn = [], zs = () => {
}, Gi = () => !1, ca = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ul = (e) => e.startsWith("onUpdate:"), zt = Object.assign, dl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, jc = Object.prototype.hasOwnProperty, _t = (e, t) => jc.call(e, t), tt = Array.isArray, Dn = (e) => Io(e) === "[object Map]", Wn = (e) => Io(e) === "[object Set]", Vl = (e) => Io(e) === "[object Date]", ot = (e) => typeof e == "function", Rt = (e) => typeof e == "string", Is = (e) => typeof e == "symbol", Ct = (e) => e !== null && typeof e == "object", ji = (e) => (Ct(e) || ot(e)) && ot(e.then) && ot(e.catch), Hi = Object.prototype.toString, Io = (e) => Hi.call(e), Hc = (e) => Io(e).slice(8, -1), qi = (e) => Io(e) === "[object Object]", ml = (e) => Rt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ro = /* @__PURE__ */ cl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ua = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, qc = /-\w/g, _s = ua(
  (e) => e.replace(qc, (t) => t.slice(1).toUpperCase())
), Kc = /\B([A-Z])/g, un = ua(
  (e) => e.replace(Kc, "-$1").toLowerCase()
), da = ua((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ra = ua(
  (e) => e ? `on${da(e)}` : ""
), ln = (e, t) => !Object.is(e, t), Bo = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Ki = (e, t, n, a = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: n
  });
}, ma = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Jc = (e) => {
  const t = Rt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Bl;
const fa = () => Bl || (Bl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vt(e) {
  if (tt(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const a = e[n], l = Rt(a) ? Zc(a) : Vt(a);
      if (l)
        for (const r in l)
          t[r] = l[r];
    }
    return t;
  } else if (Rt(e) || Ct(e))
    return e;
}
const Qc = /;(?![^(]*\))/g, Yc = /:([^]+)/, Xc = /\/\*[^]*?\*\//g;
function Zc(e) {
  const t = {};
  return e.replace(Xc, "").split(Qc).forEach((n) => {
    if (n) {
      const a = n.split(Yc);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function Ve(e) {
  let t = "";
  if (Rt(e))
    t = e;
  else if (tt(e))
    for (let n = 0; n < e.length; n++) {
      const a = Ve(e[n]);
      a && (t += a + " ");
    }
  else if (Ct(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const eu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", tu = /* @__PURE__ */ cl(eu);
function Ji(e) {
  return !!e || e === "";
}
function su(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let a = 0; n && a < e.length; a++)
    n = kn(e[a], t[a]);
  return n;
}
function kn(e, t) {
  if (e === t) return !0;
  let n = Vl(e), a = Vl(t);
  if (n || a)
    return n && a ? e.getTime() === t.getTime() : !1;
  if (n = Is(e), a = Is(t), n || a)
    return e === t;
  if (n = tt(e), a = tt(t), n || a)
    return n && a ? su(e, t) : !1;
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
function fl(e, t) {
  return e.findIndex((n) => kn(n, t));
}
const Qi = (e) => !!(e && e.__v_isRef === !0), m = (e) => Rt(e) ? e : e == null ? "" : tt(e) || Ct(e) && (e.toString === Hi || !ot(e.toString)) ? Qi(e) ? m(e.value) : JSON.stringify(e, Yi, 2) : String(e), Yi = (e, t) => Qi(t) ? Yi(e, t.value) : Dn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [a, l], r) => (n[Da(a, r) + " =>"] = l, n),
    {}
  )
} : Wn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Da(n))
} : Is(t) ? Da(t) : Ct(t) && !tt(t) && !qi(t) ? String(t) : t, Da = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Is(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let rs;
class nu {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = rs, !t && rs && (this.index = (rs.scopes || (rs.scopes = [])).push(
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
      const n = rs;
      try {
        return rs = this, t();
      } finally {
        rs = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = rs, rs = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (rs = this.prevScope, this.prevScope = void 0);
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
function ou() {
  return rs;
}
let Et;
const Na = /* @__PURE__ */ new WeakSet();
class Xi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, rs && rs.active && rs.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Na.has(this) && (Na.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || er(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Wl(this), tr(this);
    const t = Et, n = xs;
    Et = this, xs = !0;
    try {
      return this.fn();
    } finally {
      sr(this), Et = t, xs = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        gl(t);
      this.deps = this.depsTail = void 0, Wl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Na.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ha(this) && this.run();
  }
  get dirty() {
    return Ha(this);
  }
}
let Zi = 0, co, uo;
function er(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = uo, uo = e;
    return;
  }
  e.next = co, co = e;
}
function vl() {
  Zi++;
}
function pl() {
  if (--Zi > 0)
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
function tr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function sr(e) {
  let t, n = e.depsTail, a = n;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === n && (n = l), gl(a), au(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = t, e.depsTail = n;
}
function Ha(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (nr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function nr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === wo) || (e.globalVersion = wo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ha(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Et, a = xs;
  Et = e, xs = !0;
  try {
    tr(e);
    const l = e.fn(e._value);
    (t.version === 0 || ln(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    Et = n, xs = a, sr(e), e.flags &= -3;
  }
}
function gl(e, t = !1) {
  const { dep: n, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), n.subs === e && (n.subs = a, !a && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      gl(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function au(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let xs = !0;
const or = [];
function Js() {
  or.push(xs), xs = !1;
}
function Qs() {
  const e = or.pop();
  xs = e === void 0 ? !0 : e;
}
function Wl(e) {
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
class lu {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class hl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Et || !xs || Et === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Et)
      n = this.activeLink = new lu(Et, this), Et.deps ? (n.prevDep = Et.depsTail, Et.depsTail.nextDep = n, Et.depsTail = n) : Et.deps = Et.depsTail = n, ar(n);
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
    vl();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      pl();
    }
  }
}
function ar(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep)
        ar(a);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const qa = /* @__PURE__ */ new WeakMap(), yn = Symbol(
  ""
), Ka = Symbol(
  ""
), _o = Symbol(
  ""
);
function Qt(e, t, n) {
  if (xs && Et) {
    let a = qa.get(e);
    a || qa.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(n);
    l || (a.set(n, l = new hl()), l.map = a, l.key = n), l.track();
  }
}
function js(e, t, n, a, l, r) {
  const c = qa.get(e);
  if (!c) {
    wo++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (vl(), t === "clear")
    c.forEach(u);
  else {
    const d = tt(e), f = d && ml(n);
    if (d && n === "length") {
      const v = Number(a);
      c.forEach((p, w) => {
        (w === "length" || w === _o || !Is(w) && w >= v) && u(p);
      });
    } else
      switch ((n !== void 0 || c.has(void 0)) && u(c.get(n)), f && u(c.get(_o)), t) {
        case "add":
          d ? f && u(c.get("length")) : (u(c.get(yn)), Dn(e) && u(c.get(Ka)));
          break;
        case "delete":
          d || (u(c.get(yn)), Dn(e) && u(c.get(Ka)));
          break;
        case "set":
          Dn(e) && u(c.get(yn));
          break;
      }
  }
  pl();
}
function xn(e) {
  const t = gt(e);
  return t === e ? t : (Qt(t, "iterate", _o), ys(e) ? t : t.map(Es));
}
function va(e) {
  return Qt(e = gt(e), "iterate", _o), e;
}
function nn(e, t) {
  return Ys(e) ? wn(e) ? Fn(Es(t)) : Fn(t) : Es(t);
}
const iu = {
  __proto__: null,
  [Symbol.iterator]() {
    return La(this, Symbol.iterator, (e) => nn(this, e));
  },
  concat(...e) {
    return xn(this).concat(
      ...e.map((t) => tt(t) ? xn(t) : t)
    );
  },
  entries() {
    return La(this, "entries", (e) => (e[1] = nn(this, e[1]), e));
  },
  every(e, t) {
    return Bs(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Bs(
      this,
      "filter",
      e,
      t,
      (n) => n.map((a) => nn(this, a)),
      arguments
    );
  },
  find(e, t) {
    return Bs(
      this,
      "find",
      e,
      t,
      (n) => nn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Bs(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Bs(
      this,
      "findLast",
      e,
      t,
      (n) => nn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Bs(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Bs(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ua(this, "includes", e);
  },
  indexOf(...e) {
    return Ua(this, "indexOf", e);
  },
  join(e) {
    return xn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ua(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Bs(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Qn(this, "pop");
  },
  push(...e) {
    return Qn(this, "push", e);
  },
  reduce(e, ...t) {
    return Gl(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Gl(this, "reduceRight", e, t);
  },
  shift() {
    return Qn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Bs(this, "some", e, t, void 0, arguments);
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
    return La(this, "values", (e) => nn(this, e));
  }
};
function La(e, t, n) {
  const a = va(e), l = a[t]();
  return a !== e && !ys(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = n(r.value)), r;
  }), l;
}
const ru = Array.prototype;
function Bs(e, t, n, a, l, r) {
  const c = va(e), u = c !== e && !ys(e), d = c[t];
  if (d !== ru[t]) {
    const p = d.apply(e, r);
    return u ? Es(p) : p;
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
function Gl(e, t, n, a) {
  const l = va(e);
  let r = n;
  return l !== e && (ys(e) ? n.length > 3 && (r = function(c, u, d) {
    return n.call(this, c, u, d, e);
  }) : r = function(c, u, d) {
    return n.call(this, c, nn(e, u), d, e);
  }), l[t](r, ...a);
}
function Ua(e, t, n) {
  const a = gt(e);
  Qt(a, "iterate", _o);
  const l = a[t](...n);
  return (l === -1 || l === !1) && _l(n[0]) ? (n[0] = gt(n[0]), a[t](...n)) : l;
}
function Qn(e, t, n = []) {
  Js(), vl();
  const a = gt(e)[t].apply(e, n);
  return pl(), Qs(), a;
}
const cu = /* @__PURE__ */ cl("__proto__,__v_isRef,__isVue"), lr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Is)
);
function uu(e) {
  Is(e) || (e = String(e));
  const t = gt(this);
  return Qt(t, "has", e), t.hasOwnProperty(e);
}
class ir {
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
      return a === (l ? r ? _u : dr : r ? ur : cr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const c = tt(t);
    if (!l) {
      let d;
      if (c && (d = iu[n]))
        return d;
      if (n === "hasOwnProperty")
        return uu;
    }
    const u = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      es(t) ? t : a
    );
    if ((Is(n) ? lr.has(n) : cu(n)) || (l || Qt(t, "get", n), r))
      return u;
    if (es(u)) {
      const d = c && ml(n) ? u : u.value;
      return l && Ct(d) ? Yo(d) : d;
    }
    return Ct(u) ? l ? Yo(u) : Cn(u) : u;
  }
}
class rr extends ir {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, a, l) {
    let r = t[n];
    const c = tt(t) && ml(n);
    if (!this._isShallow) {
      const f = Ys(r);
      if (!ys(a) && !Ys(a) && (r = gt(r), a = gt(a)), !c && es(r) && !es(a))
        return f || (r.value = a), !0;
    }
    const u = c ? Number(n) < t.length : _t(t, n), d = Reflect.set(
      t,
      n,
      a,
      es(t) ? t : l
    );
    return t === gt(l) && (u ? ln(a, r) && js(t, "set", n, a) : js(t, "add", n, a)), d;
  }
  deleteProperty(t, n) {
    const a = _t(t, n);
    t[n];
    const l = Reflect.deleteProperty(t, n);
    return l && a && js(t, "delete", n, void 0), l;
  }
  has(t, n) {
    const a = Reflect.has(t, n);
    return (!Is(n) || !lr.has(n)) && Qt(t, "has", n), a;
  }
  ownKeys(t) {
    return Qt(
      t,
      "iterate",
      tt(t) ? "length" : yn
    ), Reflect.ownKeys(t);
  }
}
class du extends ir {
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
const mu = /* @__PURE__ */ new rr(), fu = /* @__PURE__ */ new du(), vu = /* @__PURE__ */ new rr(!0);
const Ja = (e) => e, Lo = (e) => Reflect.getPrototypeOf(e);
function pu(e, t, n) {
  return function(...a) {
    const l = this.__v_raw, r = gt(l), c = Dn(r), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, f = l[e](...a), v = n ? Ja : t ? Fn : Es;
    return !t && Qt(
      r,
      "iterate",
      d ? Ka : yn
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
function Uo(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function gu(e, t) {
  const n = {
    get(l) {
      const r = this.__v_raw, c = gt(r), u = gt(l);
      e || (ln(l, u) && Qt(c, "get", l), Qt(c, "get", u));
      const { has: d } = Lo(c), f = t ? Ja : e ? Fn : Es;
      if (d.call(c, l))
        return f(r.get(l));
      if (d.call(c, u))
        return f(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && Qt(gt(l), "iterate", yn), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = gt(r), u = gt(l);
      return e || (ln(l, u) && Qt(c, "has", l), Qt(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, d = gt(u), f = t ? Ja : e ? Fn : Es;
      return !e && Qt(d, "iterate", yn), u.forEach((v, p) => l.call(r, f(v), f(p), c));
    }
  };
  return zt(
    n,
    e ? {
      add: Uo("add"),
      set: Uo("set"),
      delete: Uo("delete"),
      clear: Uo("clear")
    } : {
      add(l) {
        !t && !ys(l) && !Ys(l) && (l = gt(l));
        const r = gt(this);
        return Lo(r).has.call(r, l) || (r.add(l), js(r, "add", l, l)), this;
      },
      set(l, r) {
        !t && !ys(r) && !Ys(r) && (r = gt(r));
        const c = gt(this), { has: u, get: d } = Lo(c);
        let f = u.call(c, l);
        f || (l = gt(l), f = u.call(c, l));
        const v = d.call(c, l);
        return c.set(l, r), f ? ln(r, v) && js(c, "set", l, r) : js(c, "add", l, r), this;
      },
      delete(l) {
        const r = gt(this), { has: c, get: u } = Lo(r);
        let d = c.call(r, l);
        d || (l = gt(l), d = c.call(r, l)), u && u.call(r, l);
        const f = r.delete(l);
        return d && js(r, "delete", l, void 0), f;
      },
      clear() {
        const l = gt(this), r = l.size !== 0, c = l.clear();
        return r && js(
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
    n[l] = pu(l, e, t);
  }), n;
}
function yl(e, t) {
  const n = gu(e, t);
  return (a, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    _t(n, l) && l in a ? n : a,
    l,
    r
  );
}
const hu = {
  get: /* @__PURE__ */ yl(!1, !1)
}, yu = {
  get: /* @__PURE__ */ yl(!1, !0)
}, wu = {
  get: /* @__PURE__ */ yl(!0, !1)
};
const cr = /* @__PURE__ */ new WeakMap(), ur = /* @__PURE__ */ new WeakMap(), dr = /* @__PURE__ */ new WeakMap(), _u = /* @__PURE__ */ new WeakMap();
function ku(e) {
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
function bu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ku(Hc(e));
}
function Cn(e) {
  return Ys(e) ? e : wl(
    e,
    !1,
    mu,
    hu,
    cr
  );
}
function $u(e) {
  return wl(
    e,
    !1,
    vu,
    yu,
    ur
  );
}
function Yo(e) {
  return wl(
    e,
    !0,
    fu,
    wu,
    dr
  );
}
function wl(e, t, n, a, l) {
  if (!Ct(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = bu(e);
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
  return Ys(e) ? wn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ys(e) {
  return !!(e && e.__v_isReadonly);
}
function ys(e) {
  return !!(e && e.__v_isShallow);
}
function _l(e) {
  return e ? !!e.__v_raw : !1;
}
function gt(e) {
  const t = e && e.__v_raw;
  return t ? gt(t) : e;
}
function Cu(e) {
  return !_t(e, "__v_skip") && Object.isExtensible(e) && Ki(e, "__v_skip", !0), e;
}
const Es = (e) => Ct(e) ? Cn(e) : e, Fn = (e) => Ct(e) ? Yo(e) : e;
function es(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function _(e) {
  return xu(e, !1);
}
function xu(e, t) {
  return es(e) ? e : new Su(e, t);
}
class Su {
  constructor(t, n) {
    this.dep = new hl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : gt(t), this._value = n ? t : Es(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, a = this.__v_isShallow || ys(t) || Ys(t);
    t = a ? t : gt(t), ln(t, n) && (this._rawValue = t, this._value = a ? t : Es(t), this.dep.trigger());
  }
}
function lt(e) {
  return es(e) ? e.value : e;
}
const Iu = {
  get: (e, t, n) => t === "__v_raw" ? e : lt(Reflect.get(e, t, n)),
  set: (e, t, n, a) => {
    const l = e[t];
    return es(l) && !es(n) ? (l.value = n, !0) : Reflect.set(e, t, n, a);
  }
};
function mr(e) {
  return wn(e) ? e : new Proxy(e, Iu);
}
class Eu {
  constructor(t, n, a) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new hl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = wo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Et !== this)
      return er(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return nr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Tu(e, t, n = !1) {
  let a, l;
  return ot(e) ? a = e : (a = e.get, l = e.set), new Eu(a, l, n);
}
const Oo = {}, Xo = /* @__PURE__ */ new WeakMap();
let gn;
function Mu(e, t = !1, n = gn) {
  if (n) {
    let a = Xo.get(n);
    a || Xo.set(n, a = []), a.push(e);
  }
}
function Pu(e, t, n = It) {
  const { immediate: a, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = n, f = (M) => l ? M : ys(M) || l === !1 || l === 0 ? Hs(M, 1) : Hs(M);
  let v, p, w, g, k = !1, C = !1;
  if (es(e) ? (p = () => e.value, k = ys(e)) : wn(e) ? (p = () => f(e), k = !0) : tt(e) ? (C = !0, k = e.some((M) => wn(M) || ys(M)), p = () => e.map((M) => {
    if (es(M))
      return M.value;
    if (wn(M))
      return f(M);
    if (ot(M))
      return d ? d(M, 2) : M();
  })) : ot(e) ? t ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      Js();
      try {
        w();
      } finally {
        Qs();
      }
    }
    const M = gn;
    gn = v;
    try {
      return d ? d(e, 3, [g]) : e(g);
    } finally {
      gn = M;
    }
  } : p = zs, t && l) {
    const M = p, R = l === !0 ? 1 / 0 : l;
    p = () => Hs(M(), R);
  }
  const S = ou(), $ = () => {
    v.stop(), S && S.active && dl(S.effects, v);
  };
  if (r && t) {
    const M = t;
    t = (...R) => {
      M(...R), $();
    };
  }
  let I = C ? new Array(e.length).fill(Oo) : Oo;
  const E = (M) => {
    if (!(!(v.flags & 1) || !v.dirty && !M))
      if (t) {
        const R = v.run();
        if (l || k || (C ? R.some((L, A) => ln(L, I[A])) : ln(R, I))) {
          w && w();
          const L = gn;
          gn = v;
          try {
            const A = [
              R,
              // pass undefined as the old value when it's changed for the first time
              I === Oo ? void 0 : C && I[0] === Oo ? [] : I,
              g
            ];
            I = R, d ? d(t, 3, A) : (
              // @ts-expect-error
              t(...A)
            );
          } finally {
            gn = L;
          }
        }
      } else
        v.run();
  };
  return u && u(E), v = new Xi(p), v.scheduler = c ? () => c(E, !1) : E, g = (M) => Mu(M, !1, v), w = v.onStop = () => {
    const M = Xo.get(v);
    if (M) {
      if (d)
        d(M, 4);
      else
        for (const R of M) R();
      Xo.delete(v);
    }
  }, t ? a ? E(!0) : I = v.run() : c ? c(E.bind(null, !0), !0) : v.run(), $.pause = v.pause.bind(v), $.resume = v.resume.bind(v), $.stop = $, $;
}
function Hs(e, t = 1 / 0, n) {
  if (t <= 0 || !Ct(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, es(e))
    Hs(e.value, t, n);
  else if (tt(e))
    for (let a = 0; a < e.length; a++)
      Hs(e[a], t, n);
  else if (Wn(e) || Dn(e))
    e.forEach((a) => {
      Hs(a, t, n);
    });
  else if (qi(e)) {
    for (const a in e)
      Hs(e[a], t, n);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Hs(e[a], t, n);
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
    pa(l, t, n);
  }
}
function Ts(e, t, n, a) {
  if (ot(e)) {
    const l = Eo(e, t, n, a);
    return l && ji(l) && l.catch((r) => {
      pa(r, t, n);
    }), l;
  }
  if (tt(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(Ts(e[r], t, n, a));
    return l;
  }
}
function pa(e, t, n, a = !0) {
  const l = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = t && t.appContext.config || It;
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
      Js(), Eo(r, null, 10, [
        e,
        d,
        f
      ]), Qs();
      return;
    }
  }
  Ru(e, n, l, a, c);
}
function Ru(e, t, n, a = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const as = [];
let Ns = -1;
const Nn = [];
let on = null, En = 0;
const fr = /* @__PURE__ */ Promise.resolve();
let Zo = null;
function jt(e) {
  const t = Zo || fr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Du(e) {
  let t = Ns + 1, n = as.length;
  for (; t < n; ) {
    const a = t + n >>> 1, l = as[a], r = ko(l);
    r < e || r === e && l.flags & 2 ? t = a + 1 : n = a;
  }
  return t;
}
function kl(e) {
  if (!(e.flags & 1)) {
    const t = ko(e), n = as[as.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ko(n) ? as.push(e) : as.splice(Du(t), 0, e), e.flags |= 1, vr();
  }
}
function vr() {
  Zo || (Zo = fr.then(gr));
}
function Nu(e) {
  tt(e) ? Nn.push(...e) : on && e.id === -1 ? on.splice(En + 1, 0, e) : e.flags & 1 || (Nn.push(e), e.flags |= 1), vr();
}
function jl(e, t, n = Ns + 1) {
  for (; n < as.length; n++) {
    const a = as[n];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      as.splice(n, 1), n--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function pr(e) {
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
function gr(e) {
  try {
    for (Ns = 0; Ns < as.length; Ns++) {
      const t = as[Ns];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Eo(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ns < as.length; Ns++) {
      const t = as[Ns];
      t && (t.flags &= -2);
    }
    Ns = -1, as.length = 0, pr(), Zo = null, (as.length || Nn.length) && gr();
  }
}
let Ht = null, hr = null;
function ea(e) {
  const t = Ht;
  return Ht = e, hr = e && e.type.__scopeId || null, t;
}
function h(e, t = Ht, n) {
  if (!t || e._n)
    return e;
  const a = (...l) => {
    a._d && na(-1);
    const r = ea(t);
    let c;
    try {
      c = e(...l);
    } finally {
      ea(r), a._d && na(1);
    }
    return c;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function At(e, t) {
  if (Ht === null)
    return e;
  const n = _a(Ht), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [r, c, u, d = It] = t[l];
    r && (ot(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Hs(c), a.push({
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
    d && (Js(), Ts(d, n, 8, [
      e.el,
      u,
      e,
      t
    ]), Qs());
  }
}
const yr = Symbol("_vte"), wr = (e) => e.__isTeleport, mo = (e) => e && (e.disabled || e.disabled === ""), Hl = (e) => e && (e.defer || e.defer === ""), ql = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Kl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Qa = (e, t) => {
  const n = e && e.to;
  return Rt(n) ? t ? t(n) : null : n;
}, _r = {
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
      const R = t.el = C(""), L = t.anchor = C("");
      g(R, n, a), g(L, n, a);
      const A = (V, ae) => {
        I & 16 && v(
          E,
          V,
          ae,
          l,
          r,
          c,
          u,
          d
        );
      }, N = () => {
        const V = t.target = Qa(t.props, k), ae = kr(V, t, C, g);
        V && (c !== "svg" && ql(V) ? c = "svg" : c !== "mathml" && Kl(V) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(V), $ || (A(V, ae), Wo(t, !1)));
      };
      $ && (A(n, L), Wo(t, !0)), Hl(t.props) ? (t.el.__isMounted = !1, ns(() => {
        N(), delete t.el.__isMounted;
      }, r)) : N();
    } else {
      if (Hl(t.props) && e.el.__isMounted === !1) {
        ns(() => {
          _r.process(
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
      const R = t.anchor = e.anchor, L = t.target = e.target, A = t.targetAnchor = e.targetAnchor, N = mo(e.props), V = N ? n : L, ae = N ? R : A;
      if (c === "svg" || ql(L) ? c = "svg" : (c === "mathml" || Kl(L)) && (c = "mathml"), M ? (w(
        e.dynamicChildren,
        M,
        V,
        l,
        r,
        c,
        u
      ), Sl(e, t, !0)) : d || p(
        e,
        t,
        V,
        ae,
        l,
        r,
        c,
        u,
        !1
      ), $)
        N ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ao(
          t,
          n,
          R,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const ee = t.target = Qa(
          t.props,
          k
        );
        ee && Ao(
          t,
          ee,
          null,
          f,
          0
        );
      } else N && Ao(
        t,
        L,
        A,
        f,
        1
      );
      Wo(t, $);
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
  move: Ao,
  hydrate: Lu
};
function Ao(e, t, n, { o: { insert: a }, m: l }, r = 2) {
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
function Lu(e, t, n, a, l, r, {
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
  const g = t.target = Qa(
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
        t.targetAnchor || kr(g, t, v, f), p(
          C && c(C),
          t,
          g,
          n,
          a,
          l,
          r
        );
      }
    Wo(t, k);
  } else k && t.shapeFlag & 16 && w(e, t, e, c(e));
  return t.anchor && c(t.anchor);
}
const ls = _r;
function Wo(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let a, l;
    for (t ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", n.uid), a = a.nextSibling;
    n.ut();
  }
}
function kr(e, t, n, a) {
  const l = t.targetStart = n(""), r = t.targetAnchor = n("");
  return l[yr] = r, e && (a(l, e), a(r, e)), r;
}
const Gs = Symbol("_leaveCb"), zo = Symbol("_enterCb");
function br() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return dt(() => {
    e.isMounted = !0;
  }), To(() => {
    e.isUnmounting = !0;
  }), e;
}
const gs = [Function, Array], $r = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: gs,
  onEnter: gs,
  onAfterEnter: gs,
  onEnterCancelled: gs,
  // leave
  onBeforeLeave: gs,
  onLeave: gs,
  onAfterLeave: gs,
  onLeaveCancelled: gs,
  // appear
  onBeforeAppear: gs,
  onAppear: gs,
  onAfterAppear: gs,
  onAppearCancelled: gs
}, Cr = (e) => {
  const t = e.subTree;
  return t.component ? Cr(t.component) : t;
}, Uu = {
  name: "BaseTransition",
  props: $r,
  setup(e, { slots: t }) {
    const n = El(), a = br();
    return () => {
      const l = t.default && bl(t.default(), !0);
      if (!l || !l.length)
        return;
      const r = xr(l), c = gt(e), { mode: u } = c;
      if (a.isLeaving)
        return Oa(r);
      const d = Jl(r);
      if (!d)
        return Oa(r);
      let f = bo(
        d,
        c,
        a,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (p) => f = p
      );
      d.type !== Xt && bn(d, f);
      let v = n.subTree && Jl(n.subTree);
      if (v && v.type !== Xt && !hn(v, d) && Cr(n).type !== Xt) {
        let p = bo(
          v,
          c,
          a,
          n
        );
        if (bn(v, p), u === "out-in" && d.type !== Xt)
          return a.isLeaving = !0, p.afterLeave = () => {
            a.isLeaving = !1, n.job.flags & 8 || n.update(), delete p.afterLeave, v = void 0;
          }, Oa(r);
        u === "in-out" && d.type !== Xt ? p.delayLeave = (w, g, k) => {
          const C = Sr(
            a,
            v
          );
          C[String(v.key)] = v, w[Gs] = () => {
            g(), w[Gs] = void 0, delete f.delayedLeave, v = void 0;
          }, f.delayedLeave = () => {
            k(), delete f.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return r;
    };
  }
};
function xr(e) {
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
const Ou = Uu;
function Sr(e, t) {
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
  } = t, M = String(e.key), R = Sr(n, e), L = (V, ae) => {
    V && Ts(
      V,
      a,
      9,
      ae
    );
  }, A = (V, ae) => {
    const ee = ae[1];
    L(V, ae), tt(V) ? V.every((J) => J.length <= 1) && ee() : V.length <= 1 && ee();
  }, N = {
    mode: c,
    persisted: u,
    beforeEnter(V) {
      let ae = d;
      if (!n.isMounted)
        if (r)
          ae = S || d;
        else
          return;
      V[Gs] && V[Gs](
        !0
        /* cancelled */
      );
      const ee = R[M];
      ee && hn(e, ee) && ee.el[Gs] && ee.el[Gs](), L(ae, [V]);
    },
    enter(V) {
      let ae = f, ee = v, J = p;
      if (!n.isMounted)
        if (r)
          ae = $ || f, ee = I || v, J = E || p;
        else
          return;
      let fe = !1;
      const oe = V[zo] = (H) => {
        fe || (fe = !0, H ? L(J, [V]) : L(ee, [V]), N.delayedLeave && N.delayedLeave(), V[zo] = void 0);
      };
      ae ? A(ae, [V, oe]) : oe();
    },
    leave(V, ae) {
      const ee = String(e.key);
      if (V[zo] && V[zo](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return ae();
      L(w, [V]);
      let J = !1;
      const fe = V[Gs] = (oe) => {
        J || (J = !0, ae(), oe ? L(C, [V]) : L(k, [V]), V[Gs] = void 0, R[ee] === e && delete R[ee]);
      };
      R[ee] = e, g ? A(g, [V, fe]) : fe();
    },
    clone(V) {
      const ae = bo(
        V,
        t,
        n,
        a,
        l
      );
      return l && l(ae), ae;
    }
  };
  return N;
}
function Oa(e) {
  if (ga(e))
    return e = rn(e), e.children = null, e;
}
function Jl(e) {
  if (!ga(e))
    return wr(e.type) && e.children ? xr(e.children) : e;
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
function bl(e, t = !1, n) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = n == null ? c.key : String(n) + String(c.key != null ? c.key : r);
    c.type === F ? (c.patchFlag & 128 && l++, a = a.concat(
      bl(c.children, t, u)
    )) : (t || c.type !== Xt) && a.push(u != null ? rn(c, { key: u }) : c);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function Se(e, t) {
  return ot(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    zt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ir(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ta = /* @__PURE__ */ new WeakMap();
function fo(e, t, n, a, l = !1) {
  if (tt(e)) {
    e.forEach(
      (k, C) => fo(
        k,
        t && (tt(t) ? t[C] : t),
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
  const r = a.shapeFlag & 4 ? _a(a.component) : a.el, c = l ? null : r, { i: u, r: d } = e, f = t && t.r, v = u.refs === It ? u.refs = {} : u.refs, p = u.setupState, w = gt(p), g = p === It ? Gi : (k) => _t(w, k);
  if (f != null && f !== d) {
    if (Ql(t), Rt(f))
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
    const k = Rt(d), C = es(d);
    if (k || C) {
      const S = () => {
        if (e.f) {
          const $ = k ? g(d) ? p[d] : v[d] : d.value;
          if (l)
            tt($) && dl($, r);
          else if (tt($))
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
          S(), ta.delete(e);
        };
        $.id = -1, ta.set(e, $), ns($, n);
      } else
        Ql(e), S();
    }
  }
}
function Ql(e) {
  const t = ta.get(e);
  t && (t.flags |= 8, ta.delete(e));
}
fa().requestIdleCallback;
fa().cancelIdleCallback;
const Ln = (e) => !!e.type.__asyncLoader, ga = (e) => e.type.__isKeepAlive;
function Au(e, t) {
  Er(e, "a", t);
}
function zu(e, t) {
  Er(e, "da", t);
}
function Er(e, t, n = Zt) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = n;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (ha(t, a, n), n) {
    let l = n.parent;
    for (; l && l.parent; )
      ga(l.parent.vnode) && Fu(a, t, n, l), l = l.parent;
  }
}
function Fu(e, t, n, a) {
  const l = ha(
    t,
    e,
    a,
    !0
    /* prepend */
  );
  Gn(() => {
    dl(a[t], l);
  }, n);
}
function ha(e, t, n = Zt, a = !1) {
  if (n) {
    const l = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...c) => {
      Js();
      const u = Mo(n), d = Ts(t, n, e, c);
      return u(), Qs(), d;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const Xs = (e) => (t, n = Zt) => {
  (!xo || e === "sp") && ha(e, (...a) => t(...a), n);
}, Vu = Xs("bm"), dt = Xs("m"), Bu = Xs(
  "bu"
), Tr = Xs("u"), To = Xs(
  "bum"
), Gn = Xs("um"), Wu = Xs(
  "sp"
), Gu = Xs("rtg"), ju = Xs("rtc");
function Hu(e, t = Zt) {
  ha("ec", e, t);
}
const qu = "components", Mr = Symbol.for("v-ndc");
function $l(e) {
  return Rt(e) ? Ku(qu, e, !1) || e : e || Mr;
}
function Ku(e, t, n = !0, a = !1) {
  const l = Ht || Zt;
  if (l) {
    const r = l.type;
    {
      const u = Ud(
        r,
        !1
      );
      if (u && (u === t || u === _s(t) || u === da(_s(t))))
        return r;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      Yl(l[e] || r[e], t) || // global registration
      Yl(l.appContext[e], t)
    );
    return !c && a ? r : c;
  }
}
function Yl(e, t) {
  return e && (e[t] || e[_s(t)] || e[da(_s(t))]);
}
function he(e, t, n, a) {
  let l;
  const r = n, c = tt(e);
  if (c || Rt(e)) {
    const u = c && wn(e);
    let d = !1, f = !1;
    u && (d = !ys(e), f = Ys(e), e = va(e)), l = new Array(e.length);
    for (let v = 0, p = e.length; v < p; v++)
      l[v] = t(
        d ? f ? Fn(Es(e[v])) : Es(e[v]) : e[v],
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
function cs(e, t) {
  for (let n = 0; n < t.length; n++) {
    const a = t[n];
    if (tt(a))
      for (let l = 0; l < a.length; l++)
        e[a[l].name] = a[l].fn;
    else a && (e[a.name] = a.key ? (...l) => {
      const r = a.fn(...l);
      return r && (r.key = a.key), r;
    } : a.fn);
  }
  return e;
}
function rt(e, t, n = {}, a, l) {
  if (Ht.ce || Ht.parent && Ln(Ht.parent) && Ht.parent.ce) {
    const f = Object.keys(n).length > 0;
    return t !== "default" && (n.name = t), o(), D(
      F,
      null,
      [b("slot", n, a && a())],
      f ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), o();
  const c = r && Pr(r(n)), u = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = D(
    F,
    {
      key: (u && !Is(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!c && a ? "_fb" : "")
    },
    c || (a ? a() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function Pr(e) {
  return e.some((t) => Co(t) ? !(t.type === Xt || t.type === F && !Pr(t.children)) : !0) ? e : null;
}
const Ya = (e) => e ? Qr(e) ? _a(e) : Ya(e.parent) : null, vo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ zt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ya(e.parent),
    $root: (e) => Ya(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Dr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      kl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = jt.bind(e.proxy)),
    $watch: (e) => ld.bind(e)
  })
), Aa = (e, t) => e !== It && !e.__isScriptSetup && _t(e, t), Ju = {
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
        if (Aa(a, t))
          return c[t] = 1, a[t];
        if (l !== It && _t(l, t))
          return c[t] = 2, l[t];
        if (_t(r, t))
          return c[t] = 3, r[t];
        if (n !== It && _t(n, t))
          return c[t] = 4, n[t];
        Xa && (c[t] = 0);
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
    if (n !== It && _t(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      p = d.config.globalProperties, _t(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: a, setupState: l, ctx: r } = e;
    return Aa(l, t) ? (l[t] = n, !0) : a !== It && _t(a, t) ? (a[t] = n, !0) : _t(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: a, appContext: l, props: r, type: c }
  }, u) {
    let d;
    return !!(n[u] || e !== It && u[0] !== "$" && _t(e, u) || Aa(t, u) || _t(r, u) || _t(a, u) || _t(vo, u) || _t(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : _t(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Xl(e) {
  return tt(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Xa = !0;
function Qu(e) {
  const t = Dr(e), n = e.proxy, a = e.ctx;
  Xa = !1, t.beforeCreate && Zl(t.beforeCreate, e, "bc");
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
    render: R,
    renderTracked: L,
    renderTriggered: A,
    errorCaptured: N,
    serverPrefetch: V,
    // public API
    expose: ae,
    inheritAttrs: ee,
    // assets
    components: J,
    directives: fe,
    filters: oe
  } = t;
  if (f && Yu(f, a, null), c)
    for (const _e in c) {
      const se = c[_e];
      ot(se) && (a[_e] = se.bind(n));
    }
  if (l) {
    const _e = l.call(n, n);
    Ct(_e) && (e.data = Cn(_e));
  }
  if (Xa = !0, r)
    for (const _e in r) {
      const se = r[_e], ve = ot(se) ? se.bind(n, n) : ot(se.get) ? se.get.bind(n, n) : zs, de = !ot(se) && ot(se.set) ? se.set.bind(n) : zs, G = P({
        get: ve,
        set: de
      });
      Object.defineProperty(a, _e, {
        enumerable: !0,
        configurable: !0,
        get: () => G.value,
        set: (ne) => G.value = ne
      });
    }
  if (u)
    for (const _e in u)
      Rr(u[_e], a, n, _e);
  if (d) {
    const _e = ot(d) ? d.call(n) : d;
    Reflect.ownKeys(_e).forEach((se) => {
      nd(se, _e[se]);
    });
  }
  v && Zl(v, e, "c");
  function q(_e, se) {
    tt(se) ? se.forEach((ve) => _e(ve.bind(n))) : se && _e(se.bind(n));
  }
  if (q(Vu, p), q(dt, w), q(Bu, g), q(Tr, k), q(Au, C), q(zu, S), q(Hu, N), q(ju, L), q(Gu, A), q(To, I), q(Gn, M), q(Wu, V), tt(ae))
    if (ae.length) {
      const _e = e.exposed || (e.exposed = {});
      ae.forEach((se) => {
        Object.defineProperty(_e, se, {
          get: () => n[se],
          set: (ve) => n[se] = ve,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  R && e.render === zs && (e.render = R), ee != null && (e.inheritAttrs = ee), J && (e.components = J), fe && (e.directives = fe), V && Ir(e);
}
function Yu(e, t, n = zs) {
  tt(e) && (e = Za(e));
  for (const a in e) {
    const l = e[a];
    let r;
    Ct(l) ? "default" in l ? r = Go(
      l.from || a,
      l.default,
      !0
    ) : r = Go(l.from || a) : r = Go(l), es(r) ? Object.defineProperty(t, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : t[a] = r;
  }
}
function Zl(e, t, n) {
  Ts(
    tt(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Rr(e, t, n, a) {
  let l = a.includes(".") ? Ur(n, a) : () => n[a];
  if (Rt(e)) {
    const r = t[e];
    ot(r) && $t(l, r);
  } else if (ot(e))
    $t(l, e.bind(n));
  else if (Ct(e))
    if (tt(e))
      e.forEach((r) => Rr(r, t, n, a));
    else {
      const r = ot(e.handler) ? e.handler.bind(n) : t[e.handler];
      ot(r) && $t(l, r, e);
    }
}
function Dr(e) {
  const t = e.type, { mixins: n, extends: a } = t, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(t);
  let d;
  return u ? d = u : !l.length && !n && !a ? d = t : (d = {}, l.length && l.forEach(
    (f) => sa(d, f, c, !0)
  ), sa(d, t, c)), Ct(t) && r.set(t, d), d;
}
function sa(e, t, n, a = !1) {
  const { mixins: l, extends: r } = t;
  r && sa(e, r, n, !0), l && l.forEach(
    (c) => sa(e, c, n, !0)
  );
  for (const c in t)
    if (!(a && c === "expose")) {
      const u = Xu[c] || n && n[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const Xu = {
  data: ei,
  props: ti,
  emits: ti,
  // objects
  methods: ao,
  computed: ao,
  // lifecycle
  beforeCreate: ss,
  created: ss,
  beforeMount: ss,
  mounted: ss,
  beforeUpdate: ss,
  updated: ss,
  beforeDestroy: ss,
  beforeUnmount: ss,
  destroyed: ss,
  unmounted: ss,
  activated: ss,
  deactivated: ss,
  errorCaptured: ss,
  serverPrefetch: ss,
  // assets
  components: ao,
  directives: ao,
  // watch
  watch: ed,
  // provide / inject
  provide: ei,
  inject: Zu
};
function ei(e, t) {
  return t ? e ? function() {
    return zt(
      ot(e) ? e.call(this, this) : e,
      ot(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Zu(e, t) {
  return ao(Za(e), Za(t));
}
function Za(e) {
  if (tt(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ss(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ao(e, t) {
  return e ? zt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ti(e, t) {
  return e ? tt(e) && tt(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : zt(
    /* @__PURE__ */ Object.create(null),
    Xl(e),
    Xl(t ?? {})
  ) : t;
}
function ed(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = zt(/* @__PURE__ */ Object.create(null), e);
  for (const a in t)
    n[a] = ss(e[a], t[a]);
  return n;
}
function Nr() {
  return {
    app: null,
    config: {
      isNativeTag: Gi,
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
let td = 0;
function sd(e, t) {
  return function(a, l = null) {
    ot(a) || (a = zt({}, a)), l != null && !Ct(l) && (l = null);
    const r = Nr(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const f = r.app = {
      _uid: td++,
      _component: a,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: Ad,
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
          return g.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(g, v, w), d = !0, f._container = v, v.__vue_app__ = f, _a(g.component);
        }
      },
      onUnmount(v) {
        u.push(v);
      },
      unmount() {
        d && (Ts(
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
function nd(e, t) {
  if (Zt) {
    let n = Zt.provides;
    const a = Zt.parent && Zt.parent.provides;
    a === n && (n = Zt.provides = Object.create(a)), n[e] = t;
  }
}
function Go(e, t, n = !1) {
  const a = El();
  if (a || Un) {
    let l = Un ? Un._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return n && ot(t) ? t.call(a && a.proxy) : t;
  }
}
const od = Symbol.for("v-scx"), ad = () => Go(od);
function $t(e, t, n) {
  return Lr(e, t, n);
}
function Lr(e, t, n = It) {
  const { immediate: a, deep: l, flush: r, once: c } = n, u = zt({}, n), d = t && a || !t && r !== "post";
  let f;
  if (xo) {
    if (r === "sync") {
      const g = ad();
      f = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!d) {
      const g = () => {
      };
      return g.stop = zs, g.resume = zs, g.pause = zs, g;
    }
  }
  const v = Zt;
  u.call = (g, k, C) => Ts(g, v, k, C);
  let p = !1;
  r === "post" ? u.scheduler = (g) => {
    ns(g, v && v.suspense);
  } : r !== "sync" && (p = !0, u.scheduler = (g, k) => {
    k ? g() : kl(g);
  }), u.augmentJob = (g) => {
    t && (g.flags |= 4), p && (g.flags |= 2, v && (g.id = v.uid, g.i = v));
  };
  const w = Pu(e, t, u);
  return xo && (f ? f.push(w) : d && w()), w;
}
function ld(e, t, n) {
  const a = this.proxy, l = Rt(e) ? e.includes(".") ? Ur(a, e) : () => a[e] : e.bind(a, a);
  let r;
  ot(t) ? r = t : (r = t.handler, n = t);
  const c = Mo(this), u = Lr(l, r.bind(a), n);
  return c(), u;
}
function Ur(e, t) {
  const n = t.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < n.length && a; l++)
      a = a[n[l]];
    return a;
  };
}
const id = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_s(t)}Modifiers`] || e[`${un(t)}Modifiers`];
function rd(e, t, ...n) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || It;
  let l = n;
  const r = t.startsWith("update:"), c = r && id(a, t.slice(7));
  c && (c.trim && (l = n.map((v) => Rt(v) ? v.trim() : v)), c.number && (l = n.map(ma)));
  let u, d = a[u = Ra(t)] || // also try camelCase event handler (#2249)
  a[u = Ra(_s(t))];
  !d && r && (d = a[u = Ra(un(t))]), d && Ts(
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
    e.emitted[u] = !0, Ts(
      f,
      e,
      6,
      l
    );
  }
}
const cd = /* @__PURE__ */ new WeakMap();
function Or(e, t, n = !1) {
  const a = n ? cd : t.emitsCache, l = a.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let c = {}, u = !1;
  if (!ot(e)) {
    const d = (f) => {
      const v = Or(f, t, !0);
      v && (u = !0, zt(c, v));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (Ct(e) && a.set(e, null), null) : (tt(r) ? r.forEach((d) => c[d] = null) : zt(c, r), Ct(e) && a.set(e, c), c);
}
function ya(e, t) {
  return !e || !ca(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), _t(e, t[0].toLowerCase() + t.slice(1)) || _t(e, un(t)) || _t(e, t));
}
function si(e) {
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
  } = e, S = ea(e);
  let $, I;
  try {
    if (n.shapeFlag & 4) {
      const M = l || a, R = M;
      $ = Os(
        f.call(
          R,
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
      $ = Os(
        M.length > 1 ? M(
          p,
          { attrs: u, slots: c, emit: d }
        ) : M(
          p,
          null
        )
      ), I = t.props ? u : ud(u);
    }
  } catch (M) {
    po.length = 0, pa(M, e, 1), $ = b(Xt);
  }
  let E = $;
  if (I && C !== !1) {
    const M = Object.keys(I), { shapeFlag: R } = E;
    M.length && R & 7 && (r && M.some(ul) && (I = dd(
      I,
      r
    )), E = rn(E, I, !1, !0));
  }
  return n.dirs && (E = rn(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && bn(E, n.transition), $ = E, ea(S), $;
}
const ud = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ca(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, dd = (e, t) => {
  const n = {};
  for (const a in e)
    (!ul(a) || !(a.slice(9) in t)) && (n[a] = e[a]);
  return n;
};
function md(e, t, n) {
  const { props: a, children: l, component: r } = e, { props: c, children: u, patchFlag: d } = t, f = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return a ? ni(a, c, f) : !!c;
    if (d & 8) {
      const v = t.dynamicProps;
      for (let p = 0; p < v.length; p++) {
        const w = v[p];
        if (c[w] !== a[w] && !ya(f, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : a === c ? !1 : a ? c ? ni(a, c, f) : !0 : !!c;
  return !1;
}
function ni(e, t, n) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (t[r] !== e[r] && !ya(n, r))
      return !0;
  }
  return !1;
}
function fd({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Ar = {}, zr = () => Object.create(Ar), Fr = (e) => Object.getPrototypeOf(e) === Ar;
function vd(e, t, n, a = !1) {
  const l = {}, r = zr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Vr(e, t, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  n ? e.props = a ? l : $u(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function pd(e, t, n, a) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: c }
  } = e, u = gt(l), [d] = e.propsOptions;
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
        if (ya(e.emitsOptions, w))
          continue;
        const g = t[w];
        if (d)
          if (_t(r, w))
            g !== r[w] && (r[w] = g, f = !0);
          else {
            const k = _s(w);
            l[k] = el(
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
    Vr(e, t, l, r) && (f = !0);
    let v;
    for (const p in u)
      (!t || // for camelCase
      !_t(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = un(p)) === p || !_t(t, v))) && (d ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[v] !== void 0) && (l[p] = el(
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
  f && js(e.attrs, "set", "");
}
function Vr(e, t, n, a) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (ro(d))
        continue;
      const f = t[d];
      let v;
      l && _t(l, v = _s(d)) ? !r || !r.includes(v) ? n[v] = f : (u || (u = {}))[v] = f : ya(e.emitsOptions, d) || (!(d in a) || f !== a[d]) && (a[d] = f, c = !0);
    }
  if (r) {
    const d = gt(n), f = u || It;
    for (let v = 0; v < r.length; v++) {
      const p = r[v];
      n[p] = el(
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
function el(e, t, n, a, l, r) {
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
const gd = /* @__PURE__ */ new WeakMap();
function Br(e, t, n = !1) {
  const a = n ? gd : t.propsCache, l = a.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let d = !1;
  if (!ot(e)) {
    const v = (p) => {
      d = !0;
      const [w, g] = Br(p, t, !0);
      zt(c, w), g && u.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !d)
    return Ct(e) && a.set(e, Rn), Rn;
  if (tt(r))
    for (let v = 0; v < r.length; v++) {
      const p = _s(r[v]);
      oi(p) && (c[p] = It);
    }
  else if (r)
    for (const v in r) {
      const p = _s(v);
      if (oi(p)) {
        const w = r[v], g = c[p] = tt(w) || ot(w) ? { type: w } : zt({}, w), k = g.type;
        let C = !1, S = !0;
        if (tt(k))
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
function oi(e) {
  return e[0] !== "$" && !ro(e);
}
const Cl = (e) => e === "_" || e === "_ctx" || e === "$stable", xl = (e) => tt(e) ? e.map(Os) : [Os(e)], hd = (e, t, n) => {
  if (t._n)
    return t;
  const a = h((...l) => xl(t(...l)), n);
  return a._c = !1, a;
}, Wr = (e, t, n) => {
  const a = e._ctx;
  for (const l in e) {
    if (Cl(l)) continue;
    const r = e[l];
    if (ot(r))
      t[l] = hd(l, r, a);
    else if (r != null) {
      const c = xl(r);
      t[l] = () => c;
    }
  }
}, Gr = (e, t) => {
  const n = xl(t);
  e.slots.default = () => n;
}, jr = (e, t, n) => {
  for (const a in t)
    (n || !Cl(a)) && (e[a] = t[a]);
}, yd = (e, t, n) => {
  const a = e.slots = zr();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (jr(a, t, n), n && Ki(a, "_", l, !0)) : Wr(t, a);
  } else t && Gr(e, t);
}, wd = (e, t, n) => {
  const { vnode: a, slots: l } = e;
  let r = !0, c = It;
  if (a.shapeFlag & 32) {
    const u = t._;
    u ? n && u === 1 ? r = !1 : jr(l, t, n) : (r = !t.$stable, Wr(t, l)), c = t;
  } else t && (Gr(e, t), c = { default: 1 });
  if (r)
    for (const u in l)
      !Cl(u) && c[u] == null && delete l[u];
}, ns = Cd;
function _d(e) {
  return kd(e);
}
function kd(e, t) {
  const n = fa();
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
    setScopeId: g = zs,
    insertStaticContent: k
  } = e, C = (T, O, le, Ie = null, Me = null, Ce = null, X = void 0, W = null, ye = !!O.dynamicChildren) => {
    if (T === O)
      return;
    T && !hn(T, O) && (Ie = Ne(T), ne(T, Me, Ce, !0), T = null), O.patchFlag === -2 && (ye = !1, O.dynamicChildren = null);
    const { type: ke, ref: qe, shapeFlag: Be } = O;
    switch (ke) {
      case wa:
        S(T, O, le, Ie);
        break;
      case Xt:
        $(T, O, le, Ie);
        break;
      case Fa:
        T == null && I(O, le, Ie, X);
        break;
      case F:
        J(
          T,
          O,
          le,
          Ie,
          Me,
          Ce,
          X,
          W,
          ye
        );
        break;
      default:
        Be & 1 ? R(
          T,
          O,
          le,
          Ie,
          Me,
          Ce,
          X,
          W,
          ye
        ) : Be & 6 ? fe(
          T,
          O,
          le,
          Ie,
          Me,
          Ce,
          X,
          W,
          ye
        ) : (Be & 64 || Be & 128) && ke.process(
          T,
          O,
          le,
          Ie,
          Me,
          Ce,
          X,
          W,
          ye,
          pe
        );
    }
    qe != null && Me ? fo(qe, T && T.ref, Ce, O || T, !O) : qe == null && T && T.ref != null && fo(T.ref, null, Ce, T, !0);
  }, S = (T, O, le, Ie) => {
    if (T == null)
      a(
        O.el = u(O.children),
        le,
        Ie
      );
    else {
      const Me = O.el = T.el;
      O.children !== T.children && f(Me, O.children);
    }
  }, $ = (T, O, le, Ie) => {
    T == null ? a(
      O.el = d(O.children || ""),
      le,
      Ie
    ) : O.el = T.el;
  }, I = (T, O, le, Ie) => {
    [T.el, T.anchor] = k(
      T.children,
      O,
      le,
      Ie,
      T.el,
      T.anchor
    );
  }, E = ({ el: T, anchor: O }, le, Ie) => {
    let Me;
    for (; T && T !== O; )
      Me = w(T), a(T, le, Ie), T = Me;
    a(O, le, Ie);
  }, M = ({ el: T, anchor: O }) => {
    let le;
    for (; T && T !== O; )
      le = w(T), l(T), T = le;
    l(O);
  }, R = (T, O, le, Ie, Me, Ce, X, W, ye) => {
    if (O.type === "svg" ? X = "svg" : O.type === "math" && (X = "mathml"), T == null)
      L(
        O,
        le,
        Ie,
        Me,
        Ce,
        X,
        W,
        ye
      );
    else {
      const ke = T.el && T.el._isVueCE ? T.el : null;
      try {
        ke && ke._beginPatch(), V(
          T,
          O,
          Me,
          Ce,
          X,
          W,
          ye
        );
      } finally {
        ke && ke._endPatch();
      }
    }
  }, L = (T, O, le, Ie, Me, Ce, X, W) => {
    let ye, ke;
    const { props: qe, shapeFlag: Be, transition: be, dirs: Y } = T;
    if (ye = T.el = c(
      T.type,
      Ce,
      qe && qe.is,
      qe
    ), Be & 8 ? v(ye, T.children) : Be & 16 && N(
      T.children,
      ye,
      null,
      Ie,
      Me,
      za(T, Ce),
      X,
      W
    ), Y && mn(T, null, Ie, "created"), A(ye, T, T.scopeId, X, Ie), qe) {
      for (const Re in qe)
        Re !== "value" && !ro(Re) && r(ye, Re, null, qe[Re], Ce, Ie);
      "value" in qe && r(ye, "value", null, qe.value, Ce), (ke = qe.onVnodeBeforeMount) && Ps(ke, Ie, T);
    }
    Y && mn(T, null, Ie, "beforeMount");
    const ze = bd(Me, be);
    ze && be.beforeEnter(ye), a(ye, O, le), ((ke = qe && qe.onVnodeMounted) || ze || Y) && ns(() => {
      ke && Ps(ke, Ie, T), ze && be.enter(ye), Y && mn(T, null, Ie, "mounted");
    }, Me);
  }, A = (T, O, le, Ie, Me) => {
    if (le && g(T, le), Ie)
      for (let Ce = 0; Ce < Ie.length; Ce++)
        g(T, Ie[Ce]);
    if (Me) {
      let Ce = Me.subTree;
      if (O === Ce || qr(Ce.type) && (Ce.ssContent === O || Ce.ssFallback === O)) {
        const X = Me.vnode;
        A(
          T,
          X,
          X.scopeId,
          X.slotScopeIds,
          Me.parent
        );
      }
    }
  }, N = (T, O, le, Ie, Me, Ce, X, W, ye = 0) => {
    for (let ke = ye; ke < T.length; ke++) {
      const qe = T[ke] = W ? an(T[ke]) : Os(T[ke]);
      C(
        null,
        qe,
        O,
        le,
        Ie,
        Me,
        Ce,
        X,
        W
      );
    }
  }, V = (T, O, le, Ie, Me, Ce, X) => {
    const W = O.el = T.el;
    let { patchFlag: ye, dynamicChildren: ke, dirs: qe } = O;
    ye |= T.patchFlag & 16;
    const Be = T.props || It, be = O.props || It;
    let Y;
    if (le && fn(le, !1), (Y = be.onVnodeBeforeUpdate) && Ps(Y, le, O, T), qe && mn(O, T, le, "beforeUpdate"), le && fn(le, !0), (Be.innerHTML && be.innerHTML == null || Be.textContent && be.textContent == null) && v(W, ""), ke ? ae(
      T.dynamicChildren,
      ke,
      W,
      le,
      Ie,
      za(O, Me),
      Ce
    ) : X || se(
      T,
      O,
      W,
      null,
      le,
      Ie,
      za(O, Me),
      Ce,
      !1
    ), ye > 0) {
      if (ye & 16)
        ee(W, Be, be, le, Me);
      else if (ye & 2 && Be.class !== be.class && r(W, "class", null, be.class, Me), ye & 4 && r(W, "style", Be.style, be.style, Me), ye & 8) {
        const ze = O.dynamicProps;
        for (let Re = 0; Re < ze.length; Re++) {
          const Ke = ze[Re], Fe = Be[Ke], Le = be[Ke];
          (Le !== Fe || Ke === "value") && r(W, Ke, Fe, Le, Me, le);
        }
      }
      ye & 1 && T.children !== O.children && v(W, O.children);
    } else !X && ke == null && ee(W, Be, be, le, Me);
    ((Y = be.onVnodeUpdated) || qe) && ns(() => {
      Y && Ps(Y, le, O, T), qe && mn(O, T, le, "updated");
    }, Ie);
  }, ae = (T, O, le, Ie, Me, Ce, X) => {
    for (let W = 0; W < O.length; W++) {
      const ye = T[W], ke = O[W], qe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ye.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ye.type === F || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !hn(ye, ke) || // - In the case of a component, it could contain anything.
        ye.shapeFlag & 198) ? p(ye.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          le
        )
      );
      C(
        ye,
        ke,
        qe,
        null,
        Ie,
        Me,
        Ce,
        X,
        !0
      );
    }
  }, ee = (T, O, le, Ie, Me) => {
    if (O !== le) {
      if (O !== It)
        for (const Ce in O)
          !ro(Ce) && !(Ce in le) && r(
            T,
            Ce,
            O[Ce],
            null,
            Me,
            Ie
          );
      for (const Ce in le) {
        if (ro(Ce)) continue;
        const X = le[Ce], W = O[Ce];
        X !== W && Ce !== "value" && r(T, Ce, W, X, Me, Ie);
      }
      "value" in le && r(T, "value", O.value, le.value, Me);
    }
  }, J = (T, O, le, Ie, Me, Ce, X, W, ye) => {
    const ke = O.el = T ? T.el : u(""), qe = O.anchor = T ? T.anchor : u("");
    let { patchFlag: Be, dynamicChildren: be, slotScopeIds: Y } = O;
    Y && (W = W ? W.concat(Y) : Y), T == null ? (a(ke, le, Ie), a(qe, le, Ie), N(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      O.children || [],
      le,
      qe,
      Me,
      Ce,
      X,
      W,
      ye
    )) : Be > 0 && Be & 64 && be && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    T.dynamicChildren ? (ae(
      T.dynamicChildren,
      be,
      le,
      Me,
      Ce,
      X,
      W
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (O.key != null || Me && O === Me.subTree) && Sl(
      T,
      O,
      !0
      /* shallow */
    )) : se(
      T,
      O,
      le,
      qe,
      Me,
      Ce,
      X,
      W,
      ye
    );
  }, fe = (T, O, le, Ie, Me, Ce, X, W, ye) => {
    O.slotScopeIds = W, T == null ? O.shapeFlag & 512 ? Me.ctx.activate(
      O,
      le,
      Ie,
      X,
      ye
    ) : oe(
      O,
      le,
      Ie,
      Me,
      Ce,
      X,
      ye
    ) : H(T, O, ye);
  }, oe = (T, O, le, Ie, Me, Ce, X) => {
    const W = T.component = Pd(
      T,
      Ie,
      Me
    );
    if (ga(T) && (W.ctx.renderer = pe), Rd(W, !1, X), W.asyncDep) {
      if (Me && Me.registerDep(W, q, X), !T.el) {
        const ye = W.subTree = b(Xt);
        $(null, ye, O, le), T.placeholder = ye.el;
      }
    } else
      q(
        W,
        T,
        O,
        le,
        Me,
        Ce,
        X
      );
  }, H = (T, O, le) => {
    const Ie = O.component = T.component;
    if (md(T, O, le))
      if (Ie.asyncDep && !Ie.asyncResolved) {
        _e(Ie, O, le);
        return;
      } else
        Ie.next = O, Ie.update();
    else
      O.el = T.el, Ie.vnode = O;
  }, q = (T, O, le, Ie, Me, Ce, X) => {
    const W = () => {
      if (T.isMounted) {
        let { next: Be, bu: be, u: Y, parent: ze, vnode: Re } = T;
        {
          const xt = Hr(T);
          if (xt) {
            Be && (Be.el = Re.el, _e(T, Be, X)), xt.asyncDep.then(() => {
              T.isUnmounted || W();
            });
            return;
          }
        }
        let Ke = Be, Fe;
        fn(T, !1), Be ? (Be.el = Re.el, _e(T, Be, X)) : Be = Re, be && Bo(be), (Fe = Be.props && Be.props.onVnodeBeforeUpdate) && Ps(Fe, ze, Be, Re), fn(T, !0);
        const Le = si(T), Ze = T.subTree;
        T.subTree = Le, C(
          Ze,
          Le,
          // parent may have changed if it's in a teleport
          p(Ze.el),
          // anchor may have changed if it's in a fragment
          Ne(Ze),
          T,
          Me,
          Ce
        ), Be.el = Le.el, Ke === null && fd(T, Le.el), Y && ns(Y, Me), (Fe = Be.props && Be.props.onVnodeUpdated) && ns(
          () => Ps(Fe, ze, Be, Re),
          Me
        );
      } else {
        let Be;
        const { el: be, props: Y } = O, { bm: ze, m: Re, parent: Ke, root: Fe, type: Le } = T, Ze = Ln(O);
        fn(T, !1), ze && Bo(ze), !Ze && (Be = Y && Y.onVnodeBeforeMount) && Ps(Be, Ke, O), fn(T, !0);
        {
          Fe.ce && // @ts-expect-error _def is private
          Fe.ce._def.shadowRoot !== !1 && Fe.ce._injectChildStyle(Le);
          const xt = T.subTree = si(T);
          C(
            null,
            xt,
            le,
            Ie,
            T,
            Me,
            Ce
          ), O.el = xt.el;
        }
        if (Re && ns(Re, Me), !Ze && (Be = Y && Y.onVnodeMounted)) {
          const xt = O;
          ns(
            () => Ps(Be, Ke, xt),
            Me
          );
        }
        (O.shapeFlag & 256 || Ke && Ln(Ke.vnode) && Ke.vnode.shapeFlag & 256) && T.a && ns(T.a, Me), T.isMounted = !0, O = le = Ie = null;
      }
    };
    T.scope.on();
    const ye = T.effect = new Xi(W);
    T.scope.off();
    const ke = T.update = ye.run.bind(ye), qe = T.job = ye.runIfDirty.bind(ye);
    qe.i = T, qe.id = T.uid, ye.scheduler = () => kl(qe), fn(T, !0), ke();
  }, _e = (T, O, le) => {
    O.component = T;
    const Ie = T.vnode.props;
    T.vnode = O, T.next = null, pd(T, O.props, Ie, le), wd(T, O.children, le), Js(), jl(T), Qs();
  }, se = (T, O, le, Ie, Me, Ce, X, W, ye = !1) => {
    const ke = T && T.children, qe = T ? T.shapeFlag : 0, Be = O.children, { patchFlag: be, shapeFlag: Y } = O;
    if (be > 0) {
      if (be & 128) {
        de(
          ke,
          Be,
          le,
          Ie,
          Me,
          Ce,
          X,
          W,
          ye
        );
        return;
      } else if (be & 256) {
        ve(
          ke,
          Be,
          le,
          Ie,
          Me,
          Ce,
          X,
          W,
          ye
        );
        return;
      }
    }
    Y & 8 ? (qe & 16 && Oe(ke, Me, Ce), Be !== ke && v(le, Be)) : qe & 16 ? Y & 16 ? de(
      ke,
      Be,
      le,
      Ie,
      Me,
      Ce,
      X,
      W,
      ye
    ) : Oe(ke, Me, Ce, !0) : (qe & 8 && v(le, ""), Y & 16 && N(
      Be,
      le,
      Ie,
      Me,
      Ce,
      X,
      W,
      ye
    ));
  }, ve = (T, O, le, Ie, Me, Ce, X, W, ye) => {
    T = T || Rn, O = O || Rn;
    const ke = T.length, qe = O.length, Be = Math.min(ke, qe);
    let be;
    for (be = 0; be < Be; be++) {
      const Y = O[be] = ye ? an(O[be]) : Os(O[be]);
      C(
        T[be],
        Y,
        le,
        null,
        Me,
        Ce,
        X,
        W,
        ye
      );
    }
    ke > qe ? Oe(
      T,
      Me,
      Ce,
      !0,
      !1,
      Be
    ) : N(
      O,
      le,
      Ie,
      Me,
      Ce,
      X,
      W,
      ye,
      Be
    );
  }, de = (T, O, le, Ie, Me, Ce, X, W, ye) => {
    let ke = 0;
    const qe = O.length;
    let Be = T.length - 1, be = qe - 1;
    for (; ke <= Be && ke <= be; ) {
      const Y = T[ke], ze = O[ke] = ye ? an(O[ke]) : Os(O[ke]);
      if (hn(Y, ze))
        C(
          Y,
          ze,
          le,
          null,
          Me,
          Ce,
          X,
          W,
          ye
        );
      else
        break;
      ke++;
    }
    for (; ke <= Be && ke <= be; ) {
      const Y = T[Be], ze = O[be] = ye ? an(O[be]) : Os(O[be]);
      if (hn(Y, ze))
        C(
          Y,
          ze,
          le,
          null,
          Me,
          Ce,
          X,
          W,
          ye
        );
      else
        break;
      Be--, be--;
    }
    if (ke > Be) {
      if (ke <= be) {
        const Y = be + 1, ze = Y < qe ? O[Y].el : Ie;
        for (; ke <= be; )
          C(
            null,
            O[ke] = ye ? an(O[ke]) : Os(O[ke]),
            le,
            ze,
            Me,
            Ce,
            X,
            W,
            ye
          ), ke++;
      }
    } else if (ke > be)
      for (; ke <= Be; )
        ne(T[ke], Me, Ce, !0), ke++;
    else {
      const Y = ke, ze = ke, Re = /* @__PURE__ */ new Map();
      for (ke = ze; ke <= be; ke++) {
        const Q = O[ke] = ye ? an(O[ke]) : Os(O[ke]);
        Q.key != null && Re.set(Q.key, ke);
      }
      let Ke, Fe = 0;
      const Le = be - ze + 1;
      let Ze = !1, xt = 0;
      const Ft = new Array(Le);
      for (ke = 0; ke < Le; ke++) Ft[ke] = 0;
      for (ke = Y; ke <= Be; ke++) {
        const Q = T[ke];
        if (Fe >= Le) {
          ne(Q, Me, Ce, !0);
          continue;
        }
        let B;
        if (Q.key != null)
          B = Re.get(Q.key);
        else
          for (Ke = ze; Ke <= be; Ke++)
            if (Ft[Ke - ze] === 0 && hn(Q, O[Ke])) {
              B = Ke;
              break;
            }
        B === void 0 ? ne(Q, Me, Ce, !0) : (Ft[B - ze] = ke + 1, B >= xt ? xt = B : Ze = !0, C(
          Q,
          O[B],
          le,
          null,
          Me,
          Ce,
          X,
          W,
          ye
        ), Fe++);
      }
      const ts = Ze ? $d(Ft) : Rn;
      for (Ke = ts.length - 1, ke = Le - 1; ke >= 0; ke--) {
        const Q = ze + ke, B = O[Q], ue = O[Q + 1], He = Q + 1 < qe ? (
          // #13559, fallback to el placeholder for unresolved async component
          ue.el || ue.placeholder
        ) : Ie;
        Ft[ke] === 0 ? C(
          null,
          B,
          le,
          He,
          Me,
          Ce,
          X,
          W,
          ye
        ) : Ze && (Ke < 0 || ke !== ts[Ke] ? G(B, le, He, 2) : Ke--);
      }
    }
  }, G = (T, O, le, Ie, Me = null) => {
    const { el: Ce, type: X, transition: W, children: ye, shapeFlag: ke } = T;
    if (ke & 6) {
      G(T.component.subTree, O, le, Ie);
      return;
    }
    if (ke & 128) {
      T.suspense.move(O, le, Ie);
      return;
    }
    if (ke & 64) {
      X.move(T, O, le, pe);
      return;
    }
    if (X === F) {
      a(Ce, O, le);
      for (let Be = 0; Be < ye.length; Be++)
        G(ye[Be], O, le, Ie);
      a(T.anchor, O, le);
      return;
    }
    if (X === Fa) {
      E(T, O, le);
      return;
    }
    if (Ie !== 2 && ke & 1 && W)
      if (Ie === 0)
        W.beforeEnter(Ce), a(Ce, O, le), ns(() => W.enter(Ce), Me);
      else {
        const { leave: Be, delayLeave: be, afterLeave: Y } = W, ze = () => {
          T.ctx.isUnmounted ? l(Ce) : a(Ce, O, le);
        }, Re = () => {
          Ce._isLeaving && Ce[Gs](
            !0
            /* cancelled */
          ), Be(Ce, () => {
            ze(), Y && Y();
          });
        };
        be ? be(Ce, ze, Re) : Re();
      }
    else
      a(Ce, O, le);
  }, ne = (T, O, le, Ie = !1, Me = !1) => {
    const {
      type: Ce,
      props: X,
      ref: W,
      children: ye,
      dynamicChildren: ke,
      shapeFlag: qe,
      patchFlag: Be,
      dirs: be,
      cacheIndex: Y
    } = T;
    if (Be === -2 && (Me = !1), W != null && (Js(), fo(W, null, le, T, !0), Qs()), Y != null && (O.renderCache[Y] = void 0), qe & 256) {
      O.ctx.deactivate(T);
      return;
    }
    const ze = qe & 1 && be, Re = !Ln(T);
    let Ke;
    if (Re && (Ke = X && X.onVnodeBeforeUnmount) && Ps(Ke, O, T), qe & 6)
      we(T.component, le, Ie);
    else {
      if (qe & 128) {
        T.suspense.unmount(le, Ie);
        return;
      }
      ze && mn(T, null, O, "beforeUnmount"), qe & 64 ? T.type.remove(
        T,
        O,
        le,
        pe,
        Ie
      ) : ke && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ke.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Ce !== F || Be > 0 && Be & 64) ? Oe(
        ke,
        O,
        le,
        !1,
        !0
      ) : (Ce === F && Be & 384 || !Me && qe & 16) && Oe(ye, O, le), Ie && te(T);
    }
    (Re && (Ke = X && X.onVnodeUnmounted) || ze) && ns(() => {
      Ke && Ps(Ke, O, T), ze && mn(T, null, O, "unmounted");
    }, le);
  }, te = (T) => {
    const { type: O, el: le, anchor: Ie, transition: Me } = T;
    if (O === F) {
      Ee(le, Ie);
      return;
    }
    if (O === Fa) {
      M(T);
      return;
    }
    const Ce = () => {
      l(le), Me && !Me.persisted && Me.afterLeave && Me.afterLeave();
    };
    if (T.shapeFlag & 1 && Me && !Me.persisted) {
      const { leave: X, delayLeave: W } = Me, ye = () => X(le, Ce);
      W ? W(T.el, Ce, ye) : ye();
    } else
      Ce();
  }, Ee = (T, O) => {
    let le;
    for (; T !== O; )
      le = w(T), l(T), T = le;
    l(O);
  }, we = (T, O, le) => {
    const { bum: Ie, scope: Me, job: Ce, subTree: X, um: W, m: ye, a: ke } = T;
    ai(ye), ai(ke), Ie && Bo(Ie), Me.stop(), Ce && (Ce.flags |= 8, ne(X, T, O, le)), W && ns(W, O), ns(() => {
      T.isUnmounted = !0;
    }, O);
  }, Oe = (T, O, le, Ie = !1, Me = !1, Ce = 0) => {
    for (let X = Ce; X < T.length; X++)
      ne(T[X], O, le, Ie, Me);
  }, Ne = (T) => {
    if (T.shapeFlag & 6)
      return Ne(T.component.subTree);
    if (T.shapeFlag & 128)
      return T.suspense.next();
    const O = w(T.anchor || T.el), le = O && O[yr];
    return le ? w(le) : O;
  };
  let $e = !1;
  const Ae = (T, O, le) => {
    T == null ? O._vnode && ne(O._vnode, null, null, !0) : C(
      O._vnode || null,
      T,
      O,
      null,
      null,
      null,
      le
    ), O._vnode = T, $e || ($e = !0, jl(), pr(), $e = !1);
  }, pe = {
    p: C,
    um: ne,
    m: G,
    r: te,
    mt: oe,
    mc: N,
    pc: se,
    pbc: ae,
    n: Ne,
    o: e
  };
  return {
    render: Ae,
    hydrate: void 0,
    createApp: sd(Ae)
  };
}
function za({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function fn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function bd(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Sl(e, t, n = !1) {
  const a = e.children, l = t.children;
  if (tt(a) && tt(l))
    for (let r = 0; r < a.length; r++) {
      const c = a[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = an(l[r]), u.el = c.el), !n && u.patchFlag !== -2 && Sl(c, u)), u.type === wa && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === Xt && !u.el && (u.el = c.el);
    }
}
function $d(e) {
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
function Hr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Hr(t);
}
function ai(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const qr = (e) => e.__isSuspense;
function Cd(e, t) {
  t && t.pendingBranch ? tt(e) ? t.effects.push(...e) : t.effects.push(e) : Nu(e);
}
const F = Symbol.for("v-fgt"), wa = Symbol.for("v-txt"), Xt = Symbol.for("v-cmt"), Fa = Symbol.for("v-stc"), po = [];
let fs = null;
function o(e = !1) {
  po.push(fs = e ? null : []);
}
function xd() {
  po.pop(), fs = po[po.length - 1] || null;
}
let $o = 1;
function na(e, t = !1) {
  $o += e, e < 0 && fs && t && (fs.hasOnce = !0);
}
function Kr(e) {
  return e.dynamicChildren = $o > 0 ? fs || Rn : null, xd(), $o > 0 && fs && fs.push(e), e;
}
function i(e, t, n, a, l, r) {
  return Kr(
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
function D(e, t, n, a, l) {
  return Kr(
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
const Jr = ({ key: e }) => e ?? null, jo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Rt(e) || es(e) || ot(e) ? { i: Ht, r: e, k: t, f: !!n } : e : null);
function s(e, t = null, n = null, a = 0, l = null, r = e === F ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Jr(t),
    ref: t && jo(t),
    scopeId: hr,
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
    ctx: Ht
  };
  return u ? (Il(d, n), r & 128 && e.normalize(d)) : n && (d.shapeFlag |= Rt(n) ? 8 : 16), $o > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  fs && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && fs.push(d), d;
}
const b = Sd;
function Sd(e, t = null, n = null, a = 0, l = null, r = !1) {
  if ((!e || e === Mr) && (e = Xt), Co(e)) {
    const u = rn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Il(u, n), $o > 0 && !r && fs && (u.shapeFlag & 6 ? fs[fs.indexOf(e)] = u : fs.push(u)), u.patchFlag = -2, u;
  }
  if (Od(e) && (e = e.__vccOpts), t) {
    t = Id(t);
    let { class: u, style: d } = t;
    u && !Rt(u) && (t.class = Ve(u)), Ct(d) && (_l(d) && !tt(d) && (d = zt({}, d)), t.style = Vt(d));
  }
  const c = Rt(e) ? 1 : qr(e) ? 128 : wr(e) ? 64 : Ct(e) ? 4 : ot(e) ? 2 : 0;
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
function Id(e) {
  return e ? _l(e) || Fr(e) ? zt({}, e) : e : null;
}
function rn(e, t, n = !1, a = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: d } = e, f = t ? Ed(l || {}, t) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Jr(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? tt(r) ? r.concat(jo(t)) : [r, jo(t)] : jo(t)
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
    patchFlag: t && e.type !== F ? c === -1 ? 16 : c | 16 : c,
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
  return b(wa, null, e, t);
}
function y(e = "", t = !1) {
  return t ? (o(), D(Xt, null, e)) : b(Xt, null, e);
}
function Os(e) {
  return e == null || typeof e == "boolean" ? b(Xt) : tt(e) ? b(
    F,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Co(e) ? an(e) : b(wa, null, String(e));
}
function an(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : rn(e);
}
function Il(e, t) {
  let n = 0;
  const { shapeFlag: a } = e;
  if (t == null)
    t = null;
  else if (tt(t))
    n = 16;
  else if (typeof t == "object")
    if (a & 65) {
      const l = t.default;
      l && (l._c && (l._d = !1), Il(e, l()), l._c && (l._d = !0));
      return;
    } else {
      n = 32;
      const l = t._;
      !l && !Fr(t) ? t._ctx = Ht : l === 3 && Ht && (Ht.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ot(t) ? (t = { default: t, _ctx: Ht }, n = 32) : (t = String(t), a & 64 ? (n = 16, t = [x(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ed(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (const l in a)
      if (l === "class")
        t.class !== a.class && (t.class = Ve([t.class, a.class]));
      else if (l === "style")
        t.style = Vt([t.style, a.style]);
      else if (ca(l)) {
        const r = t[l], c = a[l];
        c && r !== c && !(tt(r) && r.includes(c)) && (t[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function Ps(e, t, n, a = null) {
  Ts(e, t, 7, [
    n,
    a
  ]);
}
const Td = Nr();
let Md = 0;
function Pd(e, t, n) {
  const a = e.type, l = (t ? t.appContext : e.appContext) || Td, r = {
    uid: Md++,
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
    scope: new nu(
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
    propsOptions: Br(a, l),
    emitsOptions: Or(a, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: It,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: It,
    data: It,
    props: It,
    attrs: It,
    slots: It,
    refs: It,
    setupState: It,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = rd.bind(null, r), e.ce && e.ce(r), r;
}
let Zt = null;
const El = () => Zt || Ht;
let oa, tl;
{
  const e = fa(), t = (n, a) => {
    let l;
    return (l = e[n]) || (l = e[n] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  oa = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Zt = n
  ), tl = t(
    "__VUE_SSR_SETTERS__",
    (n) => xo = n
  );
}
const Mo = (e) => {
  const t = Zt;
  return oa(e), e.scope.on(), () => {
    e.scope.off(), oa(t);
  };
}, li = () => {
  Zt && Zt.scope.off(), oa(null);
};
function Qr(e) {
  return e.vnode.shapeFlag & 4;
}
let xo = !1;
function Rd(e, t = !1, n = !1) {
  t && tl(t);
  const { props: a, children: l } = e.vnode, r = Qr(e);
  vd(e, a, r, t), yd(e, l, n || t);
  const c = r ? Dd(e, t) : void 0;
  return t && tl(!1), c;
}
function Dd(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ju);
  const { setup: a } = n;
  if (a) {
    Js();
    const l = e.setupContext = a.length > 1 ? Ld(e) : null, r = Mo(e), c = Eo(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = ji(c);
    if (Qs(), r(), (u || e.sp) && !Ln(e) && Ir(e), u) {
      if (c.then(li, li), t)
        return c.then((d) => {
          ii(e, d);
        }).catch((d) => {
          pa(d, e, 0);
        });
      e.asyncDep = c;
    } else
      ii(e, c);
  } else
    Yr(e);
}
function ii(e, t, n) {
  ot(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ct(t) && (e.setupState = mr(t)), Yr(e);
}
function Yr(e, t, n) {
  const a = e.type;
  e.render || (e.render = a.render || zs);
  {
    const l = Mo(e);
    Js();
    try {
      Qu(e);
    } finally {
      Qs(), l();
    }
  }
}
const Nd = {
  get(e, t) {
    return Qt(e, "get", ""), e[t];
  }
};
function Ld(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Nd),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function _a(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(mr(Cu(e.exposed)), {
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
function Ud(e, t = !0) {
  return ot(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Od(e) {
  return ot(e) && "__vccOpts" in e;
}
const P = (e, t) => Tu(e, t, xo);
function jn(e, t, n) {
  try {
    na(-1);
    const a = arguments.length;
    return a === 2 ? Ct(t) && !tt(t) ? Co(t) ? b(e, null, [t]) : b(e, t) : b(e, null, t) : (a > 3 ? n = Array.prototype.slice.call(arguments, 2) : a === 3 && Co(n) && (n = [n]), b(e, t, n));
  } finally {
    na(1);
  }
}
const Ad = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let sl;
const ri = typeof window < "u" && window.trustedTypes;
if (ri)
  try {
    sl = /* @__PURE__ */ ri.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Xr = sl ? (e) => sl.createHTML(e) : (e) => e, zd = "http://www.w3.org/2000/svg", Fd = "http://www.w3.org/1998/Math/MathML", Ws = typeof document < "u" ? document : null, ci = Ws && /* @__PURE__ */ Ws.createElement("template"), Vd = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, a) => {
    const l = t === "svg" ? Ws.createElementNS(zd, e) : t === "mathml" ? Ws.createElementNS(Fd, e) : n ? Ws.createElement(e, { is: n }) : Ws.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
  },
  createText: (e) => Ws.createTextNode(e),
  createComment: (e) => Ws.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ws.querySelector(e),
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
      ci.innerHTML = Xr(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const u = ci.content;
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
}, tn = "transition", Yn = "animation", Vn = Symbol("_vtc"), Zr = {
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
}, ec = /* @__PURE__ */ zt(
  {},
  $r,
  Zr
), Bd = (e) => (e.displayName = "Transition", e.props = ec, e), Wd = /* @__PURE__ */ Bd(
  (e, { slots: t }) => jn(Ou, tc(e), t)
), vn = (e, t = []) => {
  tt(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ui = (e) => e ? tt(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function tc(e) {
  const t = {};
  for (const J in e)
    J in Zr || (t[J] = e[J]);
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
  } = e, k = Gd(l), C = k && k[0], S = k && k[1], {
    onBeforeEnter: $,
    onEnter: I,
    onEnterCancelled: E,
    onLeave: M,
    onLeaveCancelled: R,
    onBeforeAppear: L = $,
    onAppear: A = I,
    onAppearCancelled: N = E
  } = t, V = (J, fe, oe, H) => {
    J._enterCancelled = H, sn(J, fe ? v : u), sn(J, fe ? f : c), oe && oe();
  }, ae = (J, fe) => {
    J._isLeaving = !1, sn(J, p), sn(J, g), sn(J, w), fe && fe();
  }, ee = (J) => (fe, oe) => {
    const H = J ? A : I, q = () => V(fe, J, oe);
    vn(H, [fe, q]), di(() => {
      sn(fe, J ? d : r), Ds(fe, J ? v : u), ui(H) || mi(fe, a, C, q);
    });
  };
  return zt(t, {
    onBeforeEnter(J) {
      vn($, [J]), Ds(J, r), Ds(J, c);
    },
    onBeforeAppear(J) {
      vn(L, [J]), Ds(J, d), Ds(J, f);
    },
    onEnter: ee(!1),
    onAppear: ee(!0),
    onLeave(J, fe) {
      J._isLeaving = !0;
      const oe = () => ae(J, fe);
      Ds(J, p), J._enterCancelled ? (Ds(J, w), nl(J)) : (nl(J), Ds(J, w)), di(() => {
        J._isLeaving && (sn(J, p), Ds(J, g), ui(M) || mi(J, a, S, oe));
      }), vn(M, [J, oe]);
    },
    onEnterCancelled(J) {
      V(J, !1, void 0, !0), vn(E, [J]);
    },
    onAppearCancelled(J) {
      V(J, !0, void 0, !0), vn(N, [J]);
    },
    onLeaveCancelled(J) {
      ae(J), vn(R, [J]);
    }
  });
}
function Gd(e) {
  if (e == null)
    return null;
  if (Ct(e))
    return [Va(e.enter), Va(e.leave)];
  {
    const t = Va(e);
    return [t, t];
  }
}
function Va(e) {
  return Jc(e);
}
function Ds(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Vn] || (e[Vn] = /* @__PURE__ */ new Set())).add(t);
}
function sn(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const n = e[Vn];
  n && (n.delete(t), n.size || (e[Vn] = void 0));
}
function di(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let jd = 0;
function mi(e, t, n, a) {
  const l = e._endId = ++jd, r = () => {
    l === e._endId && a();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: c, timeout: u, propCount: d } = sc(e, t);
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
function sc(e, t) {
  const n = window.getComputedStyle(e), a = (k) => (n[k] || "").split(", "), l = a(`${tn}Delay`), r = a(`${tn}Duration`), c = fi(l, r), u = a(`${Yn}Delay`), d = a(`${Yn}Duration`), f = fi(u, d);
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
function fi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, a) => vi(n) + vi(e[a])));
}
function vi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function nl(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Hd(e, t, n) {
  const a = e[Vn];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const pi = Symbol("_vod"), qd = Symbol("_vsh"), Kd = Symbol(""), Jd = /(?:^|;)\s*display\s*:/;
function Qd(e, t, n) {
  const a = e.style, l = Rt(n);
  let r = !1;
  if (n && !l) {
    if (t)
      if (Rt(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          n[u] == null && Ho(a, u, "");
        }
      else
        for (const c in t)
          n[c] == null && Ho(a, c, "");
    for (const c in n)
      c === "display" && (r = !0), Ho(a, c, n[c]);
  } else if (l) {
    if (t !== n) {
      const c = a[Kd];
      c && (n += ";" + c), a.cssText = n, r = Jd.test(n);
    }
  } else t && e.removeAttribute("style");
  pi in e && (e[pi] = r ? a.display : "", e[qd] && (a.display = "none"));
}
const gi = /\s*!important$/;
function Ho(e, t, n) {
  if (tt(n))
    n.forEach((a) => Ho(e, t, a));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const a = Yd(e, t);
    gi.test(n) ? e.setProperty(
      un(a),
      n.replace(gi, ""),
      "important"
    ) : e[a] = n;
  }
}
const hi = ["Webkit", "Moz", "ms"], Ba = {};
function Yd(e, t) {
  const n = Ba[t];
  if (n)
    return n;
  let a = _s(t);
  if (a !== "filter" && a in e)
    return Ba[t] = a;
  a = da(a);
  for (let l = 0; l < hi.length; l++) {
    const r = hi[l] + a;
    if (r in e)
      return Ba[t] = r;
  }
  return t;
}
const yi = "http://www.w3.org/1999/xlink";
function wi(e, t, n, a, l, r = tu(t)) {
  a && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(yi, t.slice(6, t.length)) : e.setAttributeNS(yi, t, n) : n == null || r && !Ji(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Is(n) ? String(n) : n
  );
}
function _i(e, t, n, a, l) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Xr(n) : n);
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
    u === "boolean" ? n = Ji(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(l || t);
}
function qs(e, t, n, a) {
  e.addEventListener(t, n, a);
}
function Xd(e, t, n, a) {
  e.removeEventListener(t, n, a);
}
const ki = Symbol("_vei");
function Zd(e, t, n, a, l = null) {
  const r = e[ki] || (e[ki] = {}), c = r[t];
  if (a && c)
    c.value = a;
  else {
    const [u, d] = em(t);
    if (a) {
      const f = r[t] = nm(
        a,
        l
      );
      qs(e, u, f, d);
    } else c && (Xd(e, u, c, d), r[t] = void 0);
  }
}
const bi = /(?:Once|Passive|Capture)$/;
function em(e) {
  let t;
  if (bi.test(e)) {
    t = {};
    let a;
    for (; a = e.match(bi); )
      e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : un(e.slice(2)), t];
}
let Wa = 0;
const tm = /* @__PURE__ */ Promise.resolve(), sm = () => Wa || (tm.then(() => Wa = 0), Wa = Date.now());
function nm(e, t) {
  const n = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= n.attached)
      return;
    Ts(
      om(a, n.value),
      t,
      5,
      [a]
    );
  };
  return n.value = e, n.attached = sm(), n;
}
function om(e, t) {
  if (tt(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (a) => (l) => !l._stopped && a && a(l)
    );
  } else
    return t;
}
const $i = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, am = (e, t, n, a, l, r) => {
  const c = l === "svg";
  t === "class" ? Hd(e, a, c) : t === "style" ? Qd(e, n, a) : ca(t) ? ul(t) || Zd(e, t, n, a, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : lm(e, t, a, c)) ? (_i(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && wi(e, t, a, c, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Rt(a)) ? _i(e, _s(t), a, r, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), wi(e, t, a, c));
};
function lm(e, t, n, a) {
  if (a)
    return !!(t === "innerHTML" || t === "textContent" || t in e && $i(t) && ot(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return $i(t) && Rt(n) ? !1 : t in e;
}
const nc = /* @__PURE__ */ new WeakMap(), oc = /* @__PURE__ */ new WeakMap(), aa = Symbol("_moveCb"), Ci = Symbol("_enterCb"), im = (e) => (delete e.props.mode, e), rm = /* @__PURE__ */ im({
  name: "TransitionGroup",
  props: /* @__PURE__ */ zt({}, ec, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = El(), a = br();
    let l, r;
    return Tr(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!fm(
        l[0].el,
        n.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(um), l.forEach(dm);
      const u = l.filter(mm);
      nl(n.vnode.el), u.forEach((d) => {
        const f = d.el, v = f.style;
        Ds(f, c), v.transform = v.webkitTransform = v.transitionDuration = "";
        const p = f[aa] = (w) => {
          w && w.target !== f || (!w || w.propertyName.endsWith("transform")) && (f.removeEventListener("transitionend", p), f[aa] = null, sn(f, c));
        };
        f.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const c = gt(e), u = tc(c);
      let d = c.tag || F;
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
          ), nc.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      r = t.default ? bl(t.default()) : [];
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
}), cm = rm;
function um(e) {
  const t = e.el;
  t[aa] && t[aa](), t[Ci] && t[Ci]();
}
function dm(e) {
  oc.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function mm(e) {
  const t = nc.get(e), n = oc.get(e), a = t.left - n.left, l = t.top - n.top;
  if (a || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${a}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function fm(e, t, n) {
  const a = e.cloneNode(), l = e[Vn];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && a.classList.remove(d));
  }), n.split(/\s+/).forEach((u) => u && a.classList.add(u)), a.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(a);
  const { hasTransform: c } = sc(a);
  return r.removeChild(a), c;
}
const cn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return tt(t) ? (n) => Bo(t, n) : t;
};
function vm(e) {
  e.target.composing = !0;
}
function xi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ws = Symbol("_assign");
function Si(e, t, n) {
  return t && (e = e.trim()), n && (e = ma(e)), e;
}
const go = {
  created(e, { modifiers: { lazy: t, trim: n, number: a } }, l) {
    e[ws] = cn(l);
    const r = a || l.props && l.props.type === "number";
    qs(e, t ? "change" : "input", (c) => {
      c.target.composing || e[ws](Si(e.value, n, r));
    }), (n || r) && qs(e, "change", () => {
      e.value = Si(e.value, n, r);
    }), t || (qs(e, "compositionstart", vm), qs(e, "compositionend", xi), qs(e, "change", xi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: a, trim: l, number: r } }, c) {
    if (e[ws] = cn(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? ma(e.value) : e.value, d = t ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (a && t === n || l && e.value.trim() === d) || (e.value = d));
  }
}, la = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[ws] = cn(n), qs(e, "change", () => {
      const a = e._modelValue, l = Bn(e), r = e.checked, c = e[ws];
      if (tt(a)) {
        const u = fl(a, l), d = u !== -1;
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
        c(ac(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Ii,
  beforeUpdate(e, t, n) {
    e[ws] = cn(n), Ii(e, t, n);
  }
};
function Ii(e, { value: t, oldValue: n }, a) {
  e._modelValue = t;
  let l;
  if (tt(t))
    l = fl(t, a.props.value) > -1;
  else if (Wn(t))
    l = t.has(a.props.value);
  else {
    if (t === n) return;
    l = kn(t, ac(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const qo = {
  created(e, { value: t }, n) {
    e.checked = kn(t, n.props.value), e[ws] = cn(n), qs(e, "change", () => {
      e[ws](Bn(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, a) {
    e[ws] = cn(a), t !== n && (e.checked = kn(t, a.props.value));
  }
}, On = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, a) {
    const l = Wn(t);
    qs(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? ma(Bn(c)) : Bn(c)
      );
      e[ws](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, jt(() => {
        e._assigning = !1;
      });
    }), e[ws] = cn(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ei(e, t);
  },
  beforeUpdate(e, t, n) {
    e[ws] = cn(n);
  },
  updated(e, { value: t }) {
    e._assigning || Ei(e, t);
  }
};
function Ei(e, t) {
  const n = e.multiple, a = tt(t);
  if (!(n && !a && !Wn(t))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = Bn(c);
      if (n)
        if (a) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = t.some((f) => String(f) === String(u)) : c.selected = fl(t, u) > -1;
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
function ac(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const pm = ["ctrl", "shift", "alt", "meta"], gm = {
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
  exact: (e, t) => pm.some((n) => e[`${n}Key`] && !t.includes(n))
}, bt = (e, t) => {
  const n = e._withMods || (e._withMods = {}), a = t.join(".");
  return n[a] || (n[a] = ((l, ...r) => {
    for (let c = 0; c < t.length; c++) {
      const u = gm[t[c]];
      if (u && u(l, t)) return;
    }
    return e(l, ...r);
  }));
}, hm = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ss = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), a = t.join(".");
  return n[a] || (n[a] = ((l) => {
    if (!("key" in l))
      return;
    const r = un(l.key);
    if (t.some(
      (c) => c === r || hm[c] === r
    ))
      return e(l);
  }));
}, ym = /* @__PURE__ */ zt({ patchProp: am }, Vd);
let Ti;
function wm() {
  return Ti || (Ti = _d(ym));
}
const Po = ((...e) => {
  const t = wm().createApp(...e), { mount: n } = t;
  return t.mount = (a) => {
    const l = km(a);
    if (!l) return;
    const r = t._component;
    !ot(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = n(l, !1, _m(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, t;
});
function _m(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function km(e) {
  return Rt(e) ? document.querySelector(e) : e;
}
const xD = Cn({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const SD = [
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
], ID = {
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
}, bm = [
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
], ED = [
  ...bm,
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
function $m(e) {
  return !!(e && typeof e.fetchApi == "function");
}
function Hn() {
  var n, a, l;
  const e = window, t = [
    (n = e.app) == null ? void 0 : n.api,
    (l = (a = e.comfyAPI) == null ? void 0 : a.api) == null ? void 0 : l.api
  ];
  for (const r of t)
    if ($m(r))
      return r;
  return null;
}
async function Ks(e, t) {
  const n = Hn();
  if (!n)
    throw new Error("ComfyUI API not available");
  return n.fetchApi(e, t);
}
function Cm(e = "comfygit-panel") {
  const t = Hn();
  return (t == null ? void 0 : t.clientId) ?? (t == null ? void 0 : t.initialClientId) ?? e;
}
class ol extends Error {
  constructor(n, a, l, r) {
    super(n);
    No(this, "status");
    No(this, "data");
    No(this, "endpoint");
    this.name = "ComfyGitApiError", this.status = a, this.data = l, this.endpoint = r;
  }
}
function xm() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function ft() {
  const e = _(!1), t = _(null);
  async function n(z, xe) {
    const Ge = await Ks(z, xe), wt = await Ge.text();
    if (!Ge.ok) {
      let Ot = {};
      if (wt)
        try {
          const Cs = JSON.parse(wt);
          Cs && typeof Cs == "object" && (Ot = Cs);
        } catch {
          Ot = { error: wt };
        }
      const nt = Ot.error || Ot.message || Ot.detail || Ge.statusText || `Request failed: ${Ge.status}`;
      throw new ol(String(nt), Ge.status, Ot, z);
    }
    if (wt)
      return JSON.parse(wt);
  }
  async function a(z) {
    return n(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(z)}`);
  }
  async function l(z, xe, Ge) {
    return n("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: z, email: xe, password: Ge })
    });
  }
  async function r(z, xe, Ge) {
    return n("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: z, email: xe, password: Ge })
    });
  }
  async function c(z, xe) {
    return n(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(z)}`, {
      headers: { Authorization: `Bearer ${xe}` }
    });
  }
  async function u(z, xe) {
    return n("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: z, refresh_token: xe || null })
    });
  }
  async function d(z, xe) {
    return n(`/v2/comfygit/cloud/environments?cloud_url=${encodeURIComponent(z)}`, {
      headers: { Authorization: `Bearer ${xe}` }
    });
  }
  async function f(z, xe, Ge) {
    return n(
      `/v2/comfygit/cloud/environments/${encodeURIComponent(xe)}/revisions?cloud_url=${encodeURIComponent(z)}`,
      {
        headers: { Authorization: `Bearer ${Ge}` }
      }
    );
  }
  async function v(z, xe, Ge, wt) {
    return n("/v2/comfygit/cloud/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${xe}`
      },
      body: JSON.stringify({
        cloud_url: z,
        source_message: Ge || null,
        cloud_environment_id: wt || null
      })
    });
  }
  async function p(z = !1) {
    return n(z ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(z, xe = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: z, allow_issues: xe })
    });
  }
  async function g(z = 10, xe = 0) {
    return n(`/v2/comfygit/log?limit=${z}&offset=${xe}`);
  }
  async function k(z, xe = 50) {
    return n(`/v2/comfygit/log?branch=${encodeURIComponent(z)}&limit=${xe}`);
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
  async function M(z, xe) {
    return n(`/v2/comfygit/environment_export/${encodeURIComponent(z)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: xe, force: !0 })
    });
  }
  async function R() {
    return n("/v2/comfygit/branches");
  }
  async function L(z) {
    return n(`/v2/comfygit/commit/${z}`);
  }
  async function A(z, xe = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: z, force: xe })
    });
  }
  async function N(z, xe = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: z, start_point: xe })
    });
  }
  async function V(z, xe = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: z, force: xe })
    });
  }
  async function ae(z, xe = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(z)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: xe })
    });
  }
  async function ee() {
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
  async function J() {
    return (await ee()).environments;
  }
  async function fe(z) {
    try {
      return await n(`/v2/comfygit/environments/${encodeURIComponent(z)}`);
    } catch {
      return null;
    }
  }
  async function oe(z, xe) {
    const Ge = { target_env: z };
    return xe && (Ge.workspace_path = xe), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ge)
    });
  }
  async function H() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function q(z) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function _e() {
    return n("/v2/workspace/environments/create_status");
  }
  async function se(z = 100) {
    return n(`/v2/workspace/comfyui_releases?limit=${z}`);
  }
  async function ve(z) {
    return n(`/v2/workspace/environments/${z}`, {
      method: "DELETE"
    });
  }
  async function de(z = !1) {
    try {
      return n(z ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const xe = await p(z), Ge = [];
      return xe.workflows.new.forEach((wt) => {
        Ge.push({
          name: wt,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: wt
        });
      }), xe.workflows.modified.forEach((wt) => {
        Ge.push({
          name: wt,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: wt
        });
      }), xe.workflows.synced.forEach((wt) => {
        Ge.push({
          name: wt,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: wt
        });
      }), Ge;
    }
  }
  async function G(z) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/details`);
  }
  async function ne(z) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/contract`);
  }
  async function te(z, xe) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(xe)
    });
  }
  async function Ee(z) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/contract`, {
      method: "DELETE"
    });
  }
  async function we(z) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/resolve`, {
      method: "POST"
    });
  }
  async function Oe(z, xe, Ge) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: xe, install_models: Ge })
    });
  }
  async function Ne(z, xe, Ge) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: xe, importance: Ge })
    });
  }
  async function $e() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function Ae() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function pe(z) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(z)}`);
  }
  async function ge(z) {
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
  async function le(z) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: z })
    });
  }
  async function Ie(z, xe) {
    return n(`/v2/workspace/models/${z}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: xe })
    });
  }
  async function Me(z, xe) {
    return n(`/v2/workspace/models/${z}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: xe })
    });
  }
  async function Ce(z) {
    return n(`/v2/workspace/models/${z}`, {
      method: "DELETE"
    });
  }
  async function X(z) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function W() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function ye() {
    return n("/v2/workspace/models/directory");
  }
  async function ke(z) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: z })
    });
  }
  async function qe(z) {
    const xe = new URLSearchParams({ url: z });
    return n(`/v2/workspace/huggingface/repo-info?${xe}`);
  }
  async function Be() {
    return n("/v2/workspace/models/subdirectories");
  }
  async function be(z, xe = 10) {
    const Ge = new URLSearchParams({ query: z, limit: String(xe) });
    return n(`/v2/workspace/huggingface/search?${Ge}`);
  }
  async function Y(z) {
    try {
      const xe = z ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(z)}` : "/v2/comfygit/config";
      return n(xe);
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
  async function ze(z, xe) {
    const Ge = xe ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(xe)}` : "/v2/comfygit/config";
    return n(Ge, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function Re(z, xe) {
    try {
      const Ge = new URLSearchParams();
      return z && Ge.append("level", z), xe && Ge.append("lines", xe.toString()), n(`/v2/comfygit/debug/logs?${Ge}`);
    } catch {
      return [];
    }
  }
  async function Ke(z, xe) {
    try {
      const Ge = new URLSearchParams();
      return z && Ge.append("level", z), xe && Ge.append("lines", xe.toString()), n(`/v2/workspace/debug/logs?${Ge}`);
    } catch {
      return [];
    }
  }
  async function Fe() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function Le() {
    return n("/v2/comfygit/debug/manifest");
  }
  async function Ze() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function xt(z, xe) {
    try {
      const Ge = new URLSearchParams();
      return z && Ge.append("level", z), xe && Ge.append("lines", xe.toString()), n(`/v2/workspace/debug/orchestrator-logs?${Ge}`);
    } catch {
      return [];
    }
  }
  async function Ft() {
    return n("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function ts(z) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: z })
    });
  }
  async function Q() {
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
  async function B(z) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(z)}/track-dev`, {
      method: "POST"
    });
  }
  async function ue(z) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(z)}/install`, {
      method: "POST"
    });
  }
  async function He(z, xe) {
    var Ol, Al, zl, Fl;
    const Ge = xm(), wt = Cm(), Ot = {
      id: z.id,
      version: z.version || z.selected_version || "latest",
      selected_version: z.selected_version || "latest",
      mode: z.mode || "remote",
      channel: z.channel || "default"
    };
    z.install_source && (Ot.install_source = z.install_source), z.install_source === "git" && z.repository && (Ot.repository = z.repository), await n("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Ot,
        ui_id: Ge,
        client_id: wt
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", Ge, "for package:", z.id), xe != null && xe.beforeQueueStart && await xe.beforeQueueStart(Ge), await n("/v2/manager/queue/start", {
      method: "POST"
    });
    const Cs = await n("/v2/manager/queue/history"), is = (Ol = Cs == null ? void 0 : Cs.history) == null ? void 0 : Ol[Ge];
    if ((is == null ? void 0 : is.result) === "error" || ((Al = is == null ? void 0 : is.status) == null ? void 0 : Al.status_str) === "error") {
      const Bc = ((Fl = (zl = is.status) == null ? void 0 : zl.messages) == null ? void 0 : Fl[0]) || `Failed to install ${z.id}`;
      throw new ol(Bc, 500, is.status || {}, "/v2/manager/queue/start");
    }
    return {
      ui_id: Ge,
      result: is == null ? void 0 : is.result,
      status: is == null ? void 0 : is.status
    };
  }
  async function We(z) {
    return n("/v2/comfygit/nodes/dependency-preview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function it(z) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(z)}/update`, {
      method: "POST"
    });
  }
  async function Ue(z, xe) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(z)}/criticality`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ criticality: xe })
    });
  }
  async function ct(z) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function K() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function me(z, xe) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: z, url: xe })
    });
  }
  async function ce(z) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function je(z, xe, Ge) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(z)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: xe, push_url: Ge })
    });
  }
  async function Je(z, xe) {
    const Ge = {};
    return xe && (Ge["X-Git-Auth-Token"] = xe), n(`/v2/comfygit/remotes/${encodeURIComponent(z)}/fetch`, {
      method: "POST",
      headers: Ge
    });
  }
  async function Ye(z) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(z)}/status`);
    } catch {
      return null;
    }
  }
  async function et(z = "skip", xe = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: z,
        remove_extra_nodes: xe
      })
    });
  }
  async function ut(z, xe) {
    const Ge = xe ? `/v2/comfygit/remotes/${encodeURIComponent(z)}/pull-preview?branch=${encodeURIComponent(xe)}` : `/v2/comfygit/remotes/${encodeURIComponent(z)}/pull-preview`;
    return n(Ge);
  }
  async function yt(z, xe = {}) {
    const Ge = { "Content-Type": "application/json" };
    return xe.authToken && (Ge["X-Git-Auth-Token"] = xe.authToken), n(`/v2/comfygit/remotes/${encodeURIComponent(z)}/pull`, {
      method: "POST",
      headers: Ge,
      body: JSON.stringify({
        model_strategy: xe.modelStrategy || "skip",
        force: xe.force || !1,
        resolutions: xe.resolutions
      })
    });
  }
  async function kt(z, xe) {
    const Ge = xe ? `/v2/comfygit/remotes/${encodeURIComponent(z)}/push-preview?branch=${encodeURIComponent(xe)}` : `/v2/comfygit/remotes/${encodeURIComponent(z)}/push-preview`;
    return n(Ge);
  }
  async function pt(z, xe = {}) {
    const Ge = { "Content-Type": "application/json" };
    return xe.authToken && (Ge["X-Git-Auth-Token"] = xe.authToken), n(`/v2/comfygit/remotes/${encodeURIComponent(z)}/push`, {
      method: "POST",
      headers: Ge,
      body: JSON.stringify({ force: xe.force || !1 })
    });
  }
  async function Jt(z, xe) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(z)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: xe })
    });
  }
  async function us(z) {
    const xe = {
      success: 0,
      failed: []
    };
    for (const Ge of z)
      try {
        await we(Ge), xe.success++;
      } catch (wt) {
        xe.failed.push({
          name: Ge,
          error: wt instanceof Error ? wt.message : "Unknown error"
        });
      }
    return xe;
  }
  async function Nt(z) {
    const xe = new FormData();
    xe.append("file", z);
    const Ge = await Ks("/v2/workspace/import/preview", {
      method: "POST",
      body: xe
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ge.ok) {
      const wt = await Ge.json().catch(() => ({}));
      throw new Error(wt.error || `Preview failed: ${Ge.status}`);
    }
    return Ge.json();
  }
  async function Z(z) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(z)}`
    );
  }
  async function U(z, xe, Ge, wt) {
    const Ot = new FormData();
    Ot.append("file", z), Ot.append("name", xe), Ot.append("model_strategy", Ge), Ot.append("torch_backend", wt);
    const nt = await Ks("/v2/workspace/import", {
      method: "POST",
      body: Ot
    });
    if (!nt.ok) {
      const Cs = await nt.json().catch(() => ({}));
      throw new Error(Cs.message || Cs.error || `Import failed: ${nt.status}`);
    }
    return nt.json();
  }
  async function ie() {
    return n("/v2/workspace/import/status");
  }
  async function Xe(z) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: z })
    });
  }
  async function at(z, xe, Ge, wt) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: z,
        name: xe,
        model_strategy: Ge,
        torch_backend: wt
      })
    });
  }
  async function Dt() {
    return n("/v2/setup/status");
  }
  async function bs() {
    return n("/v2/comfygit/update-check");
  }
  async function Bt() {
    return n("/v2/comfygit/update", { method: "POST" });
  }
  async function $s(z) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function mt() {
    return n("/v2/setup/initialize_status");
  }
  async function Zs(z) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function Ut() {
    return n("/v2/comfygit/deploy/summary");
  }
  async function Kn() {
    return n("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function vs(z, xe) {
    return n("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: z, save_key: xe })
    });
  }
  async function dn() {
    return n("/v2/comfygit/deploy/runpod/volumes");
  }
  async function ba(z) {
    const xe = z ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(z)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return n(xe);
  }
  async function $a(z) {
    return n("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function Ca() {
    return n("/v2/comfygit/deploy/runpod/pods");
  }
  async function xa(z) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function Sa(z) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}/stop`, {
      method: "POST"
    });
  }
  async function Ia(z) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}/start`, {
      method: "POST"
    });
  }
  async function Ea(z) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}/status`);
  }
  async function Ta(z) {
    return n("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: z })
    });
  }
  async function Ro(z = !1) {
    return n(z ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function Ma() {
    return n("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Pa() {
    return n("/v2/comfygit/deploy/custom/workers");
  }
  async function Do(z) {
    return n("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function re(z) {
    return n(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function j(z) {
    return n("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function Qe() {
    return n("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function st(z) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/info`);
  }
  async function ht(z) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances`);
  }
  async function St(z, xe) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(xe)
    });
  }
  async function Wt(z, xe) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances/${encodeURIComponent(xe)}/start`, {
      method: "POST"
    });
  }
  async function ps(z, xe) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances/${encodeURIComponent(xe)}/stop`, {
      method: "POST"
    });
  }
  async function Jn(z, xe) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances/${encodeURIComponent(xe)}`, {
      method: "DELETE"
    });
  }
  async function en(z) {
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
    getBranches: R,
    getCommitDetail: L,
    checkout: A,
    createBranch: N,
    switchBranch: V,
    deleteBranch: ae,
    // Environment Management
    listEnvironments: ee,
    getEnvironments: J,
    getEnvironmentDetails: fe,
    switchEnvironment: oe,
    getSwitchProgress: H,
    createEnvironment: q,
    getCreateProgress: _e,
    getComfyUIReleases: se,
    deleteEnvironment: ve,
    // Workflow Management
    getWorkflows: de,
    getWorkflowDetails: G,
    getWorkflowContract: ne,
    saveWorkflowContract: te,
    deleteWorkflowContract: Ee,
    resolveWorkflow: we,
    installWorkflowDeps: Oe,
    setModelImportance: Ne,
    // Model Management
    getEnvironmentModels: $e,
    getWorkspaceModels: Ae,
    getModelDetails: pe,
    getModelSourceCandidates: ge,
    computeModelHashes: T,
    getWorkflowSourceCandidates: O,
    openFileLocation: le,
    addModelSource: Ie,
    removeModelSource: Me,
    deleteModel: Ce,
    downloadModel: X,
    scanWorkspaceModels: W,
    getModelsDirectory: ye,
    setModelsDirectory: ke,
    getHuggingFaceRepoInfo: qe,
    getModelsSubdirectories: Be,
    searchHuggingFaceRepos: be,
    // Settings
    getConfig: Y,
    updateConfig: ze,
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
    getEnvironmentLogs: Re,
    getEnvironmentManifest: Le,
    getWorkspaceLogs: Ke,
    getEnvironmentLogPath: Fe,
    getWorkspaceLogPath: Ze,
    getOrchestratorLogs: xt,
    getOrchestratorLogPath: Ft,
    openFile: ts,
    // Node Management
    getNodes: Q,
    trackNodeAsDev: B,
    installNode: ue,
    queueNodeInstall: He,
    previewNodeDependencyChanges: We,
    updateNode: it,
    updateNodeCriticality: Ue,
    uninstallNode: ct,
    // Git Remotes
    getRemotes: K,
    addRemote: me,
    removeRemote: ce,
    updateRemoteUrl: je,
    fetchRemote: Je,
    getRemoteSyncStatus: Ye,
    // Push/Pull
    getPullPreview: ut,
    pullFromRemote: yt,
    getPushPreview: kt,
    pushToRemote: pt,
    validateMerge: Jt,
    // Environment Sync
    syncEnvironmentManually: et,
    // Workflow Repair
    repairWorkflowModels: us,
    // Import Operations
    previewTarballImport: Nt,
    previewGitImport: Xe,
    validateEnvironmentName: Z,
    executeImport: U,
    executeGitImport: at,
    getImportProgress: ie,
    // First-Time Setup
    getSetupStatus: Dt,
    // Manager Update Notice
    getUpdateCheck: bs,
    updateManager: Bt,
    initializeWorkspace: $s,
    getInitializeProgress: mt,
    validatePath: Zs,
    // Deploy Operations
    getDeploySummary: Ut,
    getDataCenters: Kn,
    testRunPodConnection: vs,
    getNetworkVolumes: dn,
    getRunPodGpuTypes: ba,
    deployToRunPod: $a,
    getRunPodPods: Ca,
    terminateRunPodPod: xa,
    stopRunPodPod: Sa,
    startRunPodPod: Ia,
    getDeploymentStatus: Ea,
    exportDeployPackage: Ta,
    getStoredRunPodKey: Ro,
    clearRunPodKey: Ma,
    // Custom Worker Operations
    getCustomWorkers: Pa,
    addCustomWorker: Do,
    removeCustomWorker: re,
    testWorkerConnection: j,
    scanForWorkers: Qe,
    getWorkerSystemInfo: st,
    getWorkerInstances: ht,
    deployToWorker: St,
    startWorkerInstance: Wt,
    stopWorkerInstance: ps,
    terminateWorkerInstance: Jn,
    // Git Authentication
    testGitAuth: en
  };
}
const Sm = { class: "panel-layout" }, Im = {
  key: 0,
  class: "panel-layout-header"
}, Em = {
  key: 1,
  class: "panel-layout-search"
}, Tm = { class: "panel-layout-content" }, Mm = {
  key: 2,
  class: "panel-layout-footer"
}, Pm = /* @__PURE__ */ Se({
  __name: "PanelLayout",
  setup(e) {
    return (t, n) => (o(), i("div", Sm, [
      t.$slots.header ? (o(), i("div", Im, [
        rt(t.$slots, "header", {}, void 0)
      ])) : y("", !0),
      t.$slots.search ? (o(), i("div", Em, [
        rt(t.$slots, "search", {}, void 0)
      ])) : y("", !0),
      s("div", Tm, [
        rt(t.$slots, "content", {}, void 0)
      ]),
      t.$slots.footer ? (o(), i("div", Mm, [
        rt(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Te = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t)
    n[a] = l;
  return n;
}, qt = /* @__PURE__ */ Te(Pm, [["__scopeId", "data-v-21565df9"]]), Rm = {
  key: 0,
  class: "panel-title-prefix"
}, Dm = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Nm = /* @__PURE__ */ Se({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (t, n) => (o(), D($l(`h${e.level}`), {
      class: Ve(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (o(), i("span", Rm, m(e.prefix), 1)) : (o(), i("span", Dm)),
        rt(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Lm = /* @__PURE__ */ Te(Nm, [["__scopeId", "data-v-c3875efc"]]), Um = ["title"], Om = ["width", "height"], Am = /* @__PURE__ */ Se({
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
      ])], 8, Om))
    ], 8, Um));
  }
}), lc = /* @__PURE__ */ Te(Am, [["__scopeId", "data-v-6fc7f16d"]]), zm = { class: "header-left" }, Fm = {
  key: 0,
  class: "header-actions"
}, Vm = /* @__PURE__ */ Se({
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
      class: Ve(["panel-header", { stacked: e.stacked }])
    }, [
      s("div", zm, [
        b(Lm, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            x(m(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (o(), D(lc, {
          key: 0,
          onClick: n[0] || (n[0] = (a) => t.$emit("info-click"))
        })) : y("", !0)
      ]),
      t.$slots.actions ? (o(), i("div", Fm, [
        rt(t.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Kt = /* @__PURE__ */ Te(Vm, [["__scopeId", "data-v-55a62cd6"]]), Bm = {
  key: 0,
  class: "section-title-count"
}, Wm = {
  key: 1,
  class: "section-title-icon"
}, Gm = /* @__PURE__ */ Se({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => (o(), D($l(`h${e.level}`), {
      class: Ve(["section-title", { clickable: e.clickable }]),
      onClick: n[0] || (n[0] = (a) => e.clickable && t.$emit("click"))
    }, {
      default: h(() => [
        rt(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), i("span", Bm, "(" + m(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (o(), i("span", Wm, m(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), hs = /* @__PURE__ */ Te(Gm, [["__scopeId", "data-v-559361eb"]]), jm = { class: "status-grid" }, Hm = { class: "status-grid__columns" }, qm = { class: "status-grid__column" }, Km = { class: "status-grid__title" }, Jm = { class: "status-grid__column status-grid__column--right" }, Qm = { class: "status-grid__title" }, Ym = {
  key: 0,
  class: "status-grid__footer"
}, Xm = /* @__PURE__ */ Se({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (t, n) => (o(), i("div", jm, [
      s("div", Hm, [
        s("div", qm, [
          s("h4", Km, m(e.leftTitle), 1),
          rt(t.$slots, "left", {}, void 0)
        ]),
        s("div", Jm, [
          s("h4", Qm, m(e.rightTitle), 1),
          rt(t.$slots, "right", {}, void 0)
        ])
      ]),
      t.$slots.footer ? (o(), i("div", Ym, [
        rt(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Zm = /* @__PURE__ */ Te(Xm, [["__scopeId", "data-v-73b7ba3f"]]), ef = {
  key: 0,
  class: "status-item__icon"
}, tf = {
  key: 1,
  class: "status-item__count"
}, sf = { class: "status-item__label" }, nf = /* @__PURE__ */ Se({
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
      class: Ve(["status-item", n.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (o(), i("span", ef, m(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (o(), i("span", tf, m(e.count), 1)) : y("", !0),
      s("span", sf, m(e.label), 1)
    ], 2));
  }
}), Rs = /* @__PURE__ */ Te(nf, [["__scopeId", "data-v-6f929183"]]), of = { class: "issue-card__header" }, af = { class: "issue-card__icon" }, lf = { class: "issue-card__title" }, rf = {
  key: 0,
  class: "issue-card__content"
}, cf = {
  key: 0,
  class: "issue-card__description"
}, uf = {
  key: 1,
  class: "issue-card__items"
}, df = {
  key: 2,
  class: "issue-card__actions"
}, mf = /* @__PURE__ */ Se({
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
      class: Ve(["issue-card", n.value])
    }, [
      s("div", of, [
        s("span", af, m(e.icon), 1),
        s("h4", lf, m(e.title), 1)
      ]),
      a.$slots.default || e.description ? (o(), i("div", rf, [
        e.description ? (o(), i("p", cf, m(e.description), 1)) : y("", !0),
        rt(a.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (o(), i("div", uf, [
        (o(!0), i(F, null, he(e.items, (r, c) => (o(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = s("span", { class: "issue-card__bullet" }, "•", -1)),
          s("span", null, m(r), 1)
        ]))), 128))
      ])) : y("", !0),
      a.$slots.actions ? (o(), i("div", df, [
        rt(a.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), ds = /* @__PURE__ */ Te(mf, [["__scopeId", "data-v-df6aa348"]]), ff = ["type", "disabled"], vf = {
  key: 0,
  class: "spinner"
}, pf = /* @__PURE__ */ Se({
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
      class: Ve(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: n[0] || (n[0] = (a) => t.$emit("click", a))
    }, [
      e.loading ? (o(), i("span", vf)) : y("", !0),
      e.loading ? y("", !0) : rt(t.$slots, "default", { key: 1 }, void 0)
    ], 10, ff));
  }
}), Pe = /* @__PURE__ */ Te(pf, [["__scopeId", "data-v-772abe47"]]), gf = /* @__PURE__ */ Se({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (t, n) => (o(), i("span", {
      class: Ve(["detail-label"]),
      style: Vt({ minWidth: e.minWidth })
    }, [
      rt(t.$slots, "default", {}, void 0)
    ], 4));
  }
}), Ko = /* @__PURE__ */ Te(gf, [["__scopeId", "data-v-75e9eeb8"]]), hf = /* @__PURE__ */ Se({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, n) => (o(), i("span", {
      class: Ve(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      rt(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), al = /* @__PURE__ */ Te(hf, [["__scopeId", "data-v-2f186e4c"]]), yf = { class: "detail-row" }, wf = /* @__PURE__ */ Se({
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
    return (t, n) => (o(), i("div", yf, [
      b(Ko, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          x(m(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (o(), D(al, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: h(() => [
          x(m(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : rt(t.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), Tt = /* @__PURE__ */ Te(wf, [["__scopeId", "data-v-ef15664a"]]), _f = { class: "modal-header" }, kf = { class: "modal-body" }, bf = { class: "status-section" }, $f = {
  key: 0,
  class: "status-section"
}, Cf = { class: "section-header-row" }, xf = {
  key: 0,
  class: "workflow-group"
}, Sf = { class: "workflow-group-header" }, If = { class: "workflow-group-title" }, Ef = { class: "workflow-list" }, Tf = { class: "workflow-name" }, Mf = { class: "workflow-issue" }, Pf = {
  key: 1,
  class: "workflow-group"
}, Rf = { class: "workflow-group-header" }, Df = { class: "workflow-group-title" }, Nf = { class: "workflow-list" }, Lf = { class: "workflow-name" }, Uf = { class: "workflow-issue" }, Of = {
  key: 2,
  class: "workflow-group"
}, Af = { class: "workflow-group-header" }, zf = { class: "workflow-group-title" }, Ff = { class: "workflow-list" }, Vf = { class: "workflow-name" }, Bf = {
  key: 3,
  class: "workflow-group"
}, Wf = { class: "workflow-group-header" }, Gf = { class: "workflow-group-title" }, jf = { class: "workflow-list" }, Hf = { class: "workflow-name" }, qf = {
  key: 4,
  class: "workflow-group"
}, Kf = { class: "workflow-group-header" }, Jf = { class: "workflow-group-title" }, Qf = { class: "workflow-list" }, Yf = { class: "workflow-name" }, Xf = {
  key: 5,
  class: "workflow-group"
}, Zf = { class: "workflow-group-title" }, ev = { class: "expand-icon" }, tv = {
  key: 0,
  class: "workflow-list"
}, sv = { class: "workflow-name" }, nv = {
  key: 1,
  class: "status-section"
}, ov = {
  key: 0,
  class: "change-group"
}, av = { class: "change-group-header" }, lv = { class: "change-group-title" }, iv = { class: "change-list" }, rv = { class: "node-name" }, cv = {
  key: 0,
  class: "dev-badge"
}, uv = {
  key: 1,
  class: "change-group"
}, dv = { class: "change-group-header" }, mv = { class: "change-group-title" }, fv = { class: "change-list" }, vv = { class: "node-name" }, pv = {
  key: 0,
  class: "dev-badge"
}, gv = {
  key: 2,
  class: "change-group"
}, hv = { class: "change-list" }, yv = { class: "change-item" }, wv = { class: "node-name" }, _v = {
  key: 3,
  class: "change-group"
}, kv = {
  key: 2,
  class: "status-section"
}, bv = { class: "section-header-row" }, $v = {
  key: 0,
  class: "drift-item"
}, Cv = { class: "drift-list" }, xv = {
  key: 0,
  class: "drift-list-more"
}, Sv = {
  key: 1,
  class: "drift-item"
}, Iv = { class: "drift-list" }, Ev = {
  key: 0,
  class: "drift-list-more"
}, Tv = {
  key: 2,
  class: "drift-item"
}, Mv = { class: "drift-list" }, Pv = { class: "version-actual" }, Rv = { class: "version-expected" }, Dv = {
  key: 0,
  class: "drift-list-more"
}, Nv = {
  key: 3,
  class: "drift-item"
}, Lv = { class: "repair-action" }, Uv = {
  key: 3,
  class: "status-section"
}, Ov = { class: "info-box" }, Av = { class: "drift-list" }, zv = {
  key: 0,
  class: "drift-list-more"
}, Fv = {
  key: 4,
  class: "status-section"
}, Vv = { class: "warning-box" }, Bv = {
  key: 5,
  class: "empty-state-inline"
}, Wv = { class: "modal-actions" }, Gv = /* @__PURE__ */ Se({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const t = e, n = _(!1);
    dt(() => {
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
      var k, C, S, $, I, E, M, R, L, A, N, V, ae, ee, J, fe, oe, H, q, _e, se, ve;
      return o(), D(ls, { to: "body" }, [
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
            s("div", _f, [
              g[8] || (g[8] = s("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              s("button", {
                class: "modal-close",
                onClick: g[0] || (g[0] = (de) => w.$emit("close"))
              }, "✕")
            ]),
            s("div", kf, [
              s("div", bf, [
                b(hs, { level: "4" }, {
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
              c.value ? (o(), i("div", $f, [
                s("div", Cf, [
                  b(hs, { level: "4" }, {
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
                a.value.length ? (o(), i("div", xf, [
                  s("div", Sf, [
                    g[11] || (g[11] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", If, "BROKEN (COMMITTED) (" + m(a.value.length) + ")", 1)
                  ]),
                  s("div", Ef, [
                    (o(!0), i(F, null, he(a.value, (de) => (o(), i("div", {
                      key: de.name,
                      class: "workflow-item"
                    }, [
                      s("span", Tf, m(de.name), 1),
                      s("span", Mf, m(de.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (o(), i("div", Pf, [
                  s("div", Rf, [
                    g[12] || (g[12] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", Df, "BROKEN (UNCOMMITTED) (" + m(l.value.length) + ")", 1)
                  ]),
                  s("div", Nf, [
                    (o(!0), i(F, null, he(l.value, (de) => (o(), i("div", {
                      key: de.name,
                      class: "workflow-item"
                    }, [
                      s("span", Lf, m(de.name), 1),
                      s("span", Uf, m(de.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (C = (k = e.status.workflows) == null ? void 0 : k.new) != null && C.length ? (o(), i("div", Of, [
                  s("div", Af, [
                    g[13] || (g[13] = s("span", { class: "workflow-status-icon new" }, "●", -1)),
                    s("span", zf, "NEW (" + m(e.status.workflows.new.length) + ")", 1)
                  ]),
                  s("div", Ff, [
                    (o(!0), i(F, null, he(e.status.workflows.new, (de) => (o(), i("div", {
                      key: de,
                      class: "workflow-item"
                    }, [
                      s("span", Vf, m(de), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                ($ = (S = e.status.workflows) == null ? void 0 : S.modified) != null && $.length ? (o(), i("div", Bf, [
                  s("div", Wf, [
                    g[14] || (g[14] = s("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    s("span", Gf, "MODIFIED (" + m(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  s("div", jf, [
                    (o(!0), i(F, null, he(e.status.workflows.modified, (de) => (o(), i("div", {
                      key: de,
                      class: "workflow-item"
                    }, [
                      s("span", Hf, m(de), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (E = (I = e.status.workflows) == null ? void 0 : I.deleted) != null && E.length ? (o(), i("div", qf, [
                  s("div", Kf, [
                    g[15] || (g[15] = s("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    s("span", Jf, "DELETED (" + m(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  s("div", Qf, [
                    (o(!0), i(F, null, he(e.status.workflows.deleted, (de) => (o(), i("div", {
                      key: de,
                      class: "workflow-item"
                    }, [
                      s("span", Yf, m(de), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (o(), i("div", Xf, [
                  s("div", {
                    class: "workflow-group-header clickable",
                    onClick: g[2] || (g[2] = (de) => n.value = !n.value)
                  }, [
                    g[16] || (g[16] = s("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    s("span", Zf, "SYNCED (" + m(r.value.length) + ")", 1),
                    s("span", ev, m(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), i("div", tv, [
                    (o(!0), i(F, null, he(r.value, (de) => (o(), i("div", {
                      key: de,
                      class: "workflow-item"
                    }, [
                      s("span", sv, m(de), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (o(), i("div", nv, [
                b(hs, { level: "4" }, {
                  default: h(() => [...g[17] || (g[17] = [
                    x("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (R = (M = e.status.git_changes) == null ? void 0 : M.nodes_added) != null && R.length ? (o(), i("div", ov, [
                  s("div", av, [
                    g[18] || (g[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", lv, "NODES ADDED (" + m(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", iv, [
                    (o(!0), i(F, null, he(e.status.git_changes.nodes_added, (de) => (o(), i("div", {
                      key: v(de),
                      class: "change-item"
                    }, [
                      s("span", rv, m(v(de)), 1),
                      p(de) ? (o(), i("span", cv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (A = (L = e.status.git_changes) == null ? void 0 : L.nodes_removed) != null && A.length ? (o(), i("div", uv, [
                  s("div", dv, [
                    g[19] || (g[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", mv, "NODES REMOVED (" + m(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", fv, [
                    (o(!0), i(F, null, he(e.status.git_changes.nodes_removed, (de) => (o(), i("div", {
                      key: v(de),
                      class: "change-item"
                    }, [
                      s("span", vv, m(v(de)), 1),
                      p(de) ? (o(), i("span", pv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (N = e.status.git_changes) != null && N.workflow_changes ? (o(), i("div", gv, [
                  g[20] || (g[20] = s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  s("div", hv, [
                    s("div", yv, [
                      s("span", wv, m(f.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (V = e.status.git_changes) != null && V.has_other_changes ? (o(), i("div", _v, [...g[21] || (g[21] = [
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
              (ae = e.status.comparison) != null && ae.is_synced ? y("", !0) : (o(), i("div", kv, [
                s("div", bv, [
                  b(hs, { level: "4" }, {
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
                (J = (ee = e.status.comparison) == null ? void 0 : ee.missing_nodes) != null && J.length ? (o(), i("div", $v, [
                  b(Tt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", Cv, [
                    (o(!0), i(F, null, he(e.status.comparison.missing_nodes.slice(0, 10), (de) => (o(), i("div", {
                      key: de,
                      class: "drift-list-item"
                    }, " - " + m(de), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (o(), i("div", xv, " ... and " + m(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (oe = (fe = e.status.comparison) == null ? void 0 : fe.extra_nodes) != null && oe.length ? (o(), i("div", Sv, [
                  b(Tt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", Iv, [
                    (o(!0), i(F, null, he(e.status.comparison.extra_nodes.slice(0, 10), (de) => (o(), i("div", {
                      key: de,
                      class: "drift-list-item"
                    }, " - " + m(de), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (o(), i("div", Ev, " ... and " + m(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (q = (H = e.status.comparison) == null ? void 0 : H.version_mismatches) != null && q.length ? (o(), i("div", Tv, [
                  b(Tt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", Mv, [
                    (o(!0), i(F, null, he(e.status.comparison.version_mismatches.slice(0, 10), (de) => (o(), i("div", {
                      key: de.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      x(m(de.name) + ": ", 1),
                      s("span", Pv, m(de.actual), 1),
                      g[23] || (g[23] = x(" → ", -1)),
                      s("span", Rv, m(de.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (o(), i("div", Dv, " ... and " + m(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((_e = e.status.comparison) == null ? void 0 : _e.packages_in_sync) === !1 ? (o(), i("div", Nv, [
                  b(Tt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                s("div", Lv, [
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
              (ve = (se = e.status.comparison) == null ? void 0 : se.disabled_nodes) != null && ve.length ? (o(), i("div", Uv, [
                b(hs, { level: "4" }, {
                  default: h(() => [...g[27] || (g[27] = [
                    x("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                s("div", Ov, [
                  g[28] || (g[28] = s("span", { class: "info-icon" }, "ℹ", -1)),
                  s("span", null, m(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                s("div", Av, [
                  (o(!0), i(F, null, he(e.status.comparison.disabled_nodes.slice(0, 10), (de) => (o(), i("div", {
                    key: de,
                    class: "drift-list-item"
                  }, " • " + m(de), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (o(), i("div", zv, " ... and " + m(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (o(), i("div", Fv, [
                b(hs, { level: "4" }, {
                  default: h(() => [...g[29] || (g[29] = [
                    x("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                s("div", Vv, [
                  g[30] || (g[30] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                g[31] || (g[31] = s("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (o(), i("div", Bv, [...g[32] || (g[32] = [
                s("div", { class: "empty-icon" }, "✅", -1),
                s("div", { class: "empty-message" }, [
                  s("strong", null, "Environment is clean!"),
                  s("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            s("div", Wv, [
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
}), jv = /* @__PURE__ */ Te(Gv, [["__scopeId", "data-v-e2b37122"]]), Hv = { class: "base-modal-header" }, qv = {
  key: 0,
  class: "base-modal-title"
}, Kv = { class: "base-modal-body" }, Jv = {
  key: 0,
  class: "base-modal-loading"
}, Qv = {
  key: 1,
  class: "base-modal-error"
}, Yv = {
  key: 0,
  class: "base-modal-footer"
}, Xv = /* @__PURE__ */ Se({
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
    return dt(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), Gn(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, u) => (o(), D(ls, { to: "body" }, [
      s("div", {
        class: "base-modal-overlay",
        style: Vt({ zIndex: e.overlayZIndex }),
        onClick: l
      }, [
        s("div", {
          class: Ve(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = bt(() => {
          }, ["stop"]))
        }, [
          s("div", Hv, [
            rt(c.$slots, "header", {}, () => [
              e.title ? (o(), i("h3", qv, m(e.title), 1)) : y("", !0)
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
          s("div", Kv, [
            e.loading ? (o(), i("div", Jv, "Loading...")) : e.error ? (o(), i("div", Qv, m(e.error), 1)) : rt(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (o(), i("div", Yv, [
            rt(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ], 4)
    ]));
  }
}), Mt = /* @__PURE__ */ Te(Xv, [["__scopeId", "data-v-06a4be14"]]), Zv = ["type", "disabled"], ep = {
  key: 0,
  class: "spinner"
}, tp = /* @__PURE__ */ Se({
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
      class: Ve(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: n[0] || (n[0] = (a) => t.$emit("click", a))
    }, [
      e.loading ? (o(), i("span", ep)) : y("", !0),
      rt(t.$slots, "default", {}, void 0)
    ], 10, Zv));
  }
}), De = /* @__PURE__ */ Te(tp, [["__scopeId", "data-v-f3452606"]]), sp = ["type", "value", "placeholder", "disabled"], np = {
  key: 0,
  class: "base-input-error"
}, op = /* @__PURE__ */ Se({
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
      class: Ve(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Ve(["base-input", { error: !!e.error }]),
        onInput: n[0] || (n[0] = (a) => t.$emit("update:modelValue", a.target.value)),
        onKeyup: [
          n[1] || (n[1] = Ss((a) => t.$emit("enter"), ["enter"])),
          n[2] || (n[2] = Ss((a) => t.$emit("escape"), ["escape"]))
        ]
      }, null, 42, sp),
      e.error ? (o(), i("span", np, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Pt = /* @__PURE__ */ Te(op, [["__scopeId", "data-v-9ba02cdc"]]), ap = ["disabled"], lp = { class: "dropdown-value" }, ip = ["onClick"], rp = {
  key: 0,
  class: "dropdown-error"
}, cp = /* @__PURE__ */ Se({
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
      const $ = r.value.getBoundingClientRect(), I = window.innerHeight, E = I - $.bottom, M = $.top, R = Math.min(300, n.options.length * 36 + 8), L = E < R && M > E;
      u.value = {
        position: "fixed",
        left: `${$.left}px`,
        width: `${$.width}px`,
        maxHeight: "300px",
        ...L ? { bottom: `${I - $.top + 4}px` } : { top: `${$.bottom + 4}px` }
      };
    }
    $t(l, async ($) => {
      $ && (await jt(), k());
    });
    function C() {
      l.value && k();
    }
    function S($) {
      $.key === "Escape" && l.value && w();
    }
    return dt(() => {
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
        class: Ve(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: p
      }, [
        s("span", lp, m(v.value), 1),
        I[0] || (I[0] = s("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, ap),
      (o(), D(ls, { to: "body" }, [
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
          style: Vt(u.value)
        }, [
          (o(!0), i(F, null, he(e.options, (E) => (o(), i("div", {
            key: d(E),
            class: Ve(["dropdown-option", { selected: d(E) === e.modelValue }]),
            onClick: (M) => g(E)
          }, m(f(E)), 11, ip))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (o(), i("span", rp, m(e.error), 1)) : y("", !0)
    ], 512));
  }
}), up = /* @__PURE__ */ Te(cp, [["__scopeId", "data-v-857e085b"]]), dp = { class: "destination-section" }, mp = { class: "section-label" }, fp = { class: "destination-row" }, vp = {
  key: 0,
  class: "path-separator"
}, pp = /* @__PURE__ */ Se({
  __name: "DownloadDestinationPicker",
  props: {
    modelValue: {},
    label: { default: "Download Destination" },
    suggestedDirectory: { default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getModelsSubdirectories: l } = ft(), r = _(""), c = _(""), u = _(""), d = _([]), f = _(!1);
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
      C && C !== r.value && (v = !0, r.value = C, jt(() => {
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
    }), dt(k), (C, S) => (o(), i("div", dp, [
      s("h4", mp, m(e.label), 1),
      s("div", fp, [
        b(up, {
          modelValue: r.value,
          "onUpdate:modelValue": S[0] || (S[0] = ($) => r.value = $),
          options: p.value,
          placeholder: "Select directory...",
          class: "dest-select"
        }, null, 8, ["modelValue", "options"]),
        r.value !== "__custom__" ? (o(), i("span", vp, "/")) : y("", !0),
        r.value !== "__custom__" ? (o(), D(Pt, {
          key: 1,
          modelValue: c.value,
          "onUpdate:modelValue": S[1] || (S[1] = ($) => c.value = $),
          placeholder: "subfolder (optional)",
          class: "dest-subfolder"
        }, null, 8, ["modelValue"])) : y("", !0)
      ]),
      r.value === "__custom__" ? (o(), D(Pt, {
        key: 0,
        modelValue: u.value,
        "onUpdate:modelValue": S[2] || (S[2] = ($) => u.value = $),
        placeholder: "Enter directory relative to models folder...",
        class: "dest-custom",
        "full-width": ""
      }, null, 8, ["modelValue"])) : y("", !0)
    ]));
  }
}), ic = /* @__PURE__ */ Te(pp, [["__scopeId", "data-v-2fbc2b02"]]);
function gp(e) {
  const t = e.toLowerCase();
  return t === "huggingface.co" || t.endsWith(".huggingface.co") || t === "hf.co";
}
function hp(e) {
  const t = e.trim();
  if (!t) return { kind: "unknown" };
  let n;
  try {
    n = new URL(t);
  } catch {
    return { kind: "unknown" };
  }
  if (!gp(n.hostname)) return { kind: "unknown" };
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
function yp(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function Mi(e, t, n) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(t)}/${yp(n)}`;
}
const wp = { class: "hf-file-browser" }, _p = { class: "browser-header" }, kp = { class: "repo-info" }, bp = { class: "repo-id" }, $p = {
  key: 0,
  class: "revision-pill"
}, Cp = {
  key: 0,
  class: "loading-state"
}, xp = {
  key: 1,
  class: "error-state"
}, Sp = { class: "toolbar" }, Ip = { class: "toolbar-actions" }, Ep = { class: "file-list-container" }, Tp = {
  key: 0,
  class: "file-list-header"
}, Mp = ["checked", "indeterminate"], Pp = {
  key: 1,
  class: "file-checkbox-spacer"
}, Rp = { class: "sort-indicator" }, Dp = { class: "sort-indicator" }, Np = {
  key: 1,
  class: "empty-state"
}, Lp = {
  key: 2,
  class: "file-list"
}, Up = ["onClick"], Op = ["checked", "onChange"], Ap = { class: "file-path" }, zp = { class: "file-size" }, Fp = { class: "action-bar" }, Vp = { class: "summary-info" }, Bp = { class: "summary-count" }, Wp = { class: "summary-size" }, Gp = /* @__PURE__ */ Se({
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
    const n = e, a = t, { getHuggingFaceRepoInfo: l } = ft(), r = _([]), c = _(/* @__PURE__ */ new Set()), u = _(!1), d = _(null), f = _(""), v = _(!1), p = _("name"), w = _(!0), g = _(""), k = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, C = P(() => {
      let te = r.value;
      if (n.initialPath) {
        const Ee = n.initialPath.endsWith("/") ? n.initialPath : `${n.initialPath}/`;
        te = te.filter((we) => we.path.startsWith(Ee) || we.path === n.initialPath);
      }
      if (v.value && (te = te.filter((Ee) => Ee.is_model_file)), f.value.trim()) {
        const Ee = f.value.toLowerCase();
        te = te.filter((we) => we.path.toLowerCase().includes(Ee));
      }
      return te;
    }), S = P(() => {
      const te = [...C.value];
      return te.sort((Ee, we) => {
        let Oe;
        return p.value === "name" ? Oe = Ee.path.localeCompare(we.path) : Oe = Ee.size - we.size, w.value ? Oe : -Oe;
      }), te;
    }), $ = P(() => C.value.length === 0 ? !1 : C.value.every((te) => c.value.has(te.path))), I = P(() => C.value.some((te) => c.value.has(te.path))), E = P(() => g.value.trim().length > 0), M = P(() => {
      let te = 0;
      for (const Ee of c.value) {
        const we = r.value.find((Oe) => Oe.path === Ee);
        we && (te += we.size);
      }
      return te;
    }), R = P(() => {
      if (c.value.size === 0) return null;
      const te = /* @__PURE__ */ new Set();
      for (const Ee of c.value) {
        const we = _e(Ee);
        we && te.add(we.toLowerCase());
      }
      return te.size !== 1 ? null : [...te][0];
    }), L = P(() => n.mode || "download"), A = P(() => n.actionLabel || (L.value === "source" ? "Use as Source" : "Queue Download")), N = P(() => L.value === "source" ? c.value.size === 1 ? "1 file selected" : `${c.value.size} files selected` : `${c.value.size} file(s) selected`), V = P(() => L.value === "source" ? c.value.size !== 1 : c.value.size === 0 || !E.value);
    function ae(te) {
      if (te === 0) return "0 B";
      const Ee = 1024 * 1024 * 1024, we = 1024 * 1024, Oe = 1024;
      return te >= Ee ? `${(te / Ee).toFixed(2)} GB` : te >= we ? `${(te / we).toFixed(1)} MB` : te >= Oe ? `${(te / Oe).toFixed(0)} KB` : `${te} B`;
    }
    function ee(te) {
      const Ee = te.match(k);
      return Ee ? `${Ee[1]}${Ee[4]}` : null;
    }
    function J(te) {
      if (L.value === "source") {
        c.value = c.value.has(te.path) ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([te.path]);
        return;
      }
      const Ee = new Set(c.value), we = Ee.has(te.path), Oe = te.shard_group || ee(te.path);
      if (Oe) {
        const Ne = r.value.filter(($e) => ($e.shard_group || ee($e.path)) === Oe);
        we ? Ne.forEach(($e) => Ee.delete($e.path)) : Ne.forEach(($e) => Ee.add($e.path));
      } else
        we ? Ee.delete(te.path) : Ee.add(te.path);
      c.value = Ee;
    }
    function fe() {
      const te = new Set(c.value);
      for (const Ee of C.value)
        Ee.is_model_file && te.add(Ee.path);
      c.value = te;
    }
    function oe() {
      c.value = /* @__PURE__ */ new Set();
    }
    function H() {
      if ($.value) {
        const te = new Set(c.value);
        for (const Ee of C.value)
          te.delete(Ee.path);
        c.value = te;
      } else {
        const te = new Set(c.value);
        for (const Ee of C.value)
          te.add(Ee.path);
        c.value = te;
      }
    }
    function q(te) {
      p.value === te ? w.value = !w.value : (p.value = te, w.value = !0);
    }
    function _e(te) {
      const Ee = te.split("/");
      return Ee.length >= 2 ? Ee[Ee.length - 2] : null;
    }
    function se() {
      return g.value.trim();
    }
    function ve() {
      if (c.value.size === 0 || !E.value) return;
      const te = se(), Ee = [];
      for (const we of c.value) {
        const Oe = r.value.find((Ne) => Ne.path === we);
        Oe && Ee.push({
          url: Mi(n.repoId, n.revision, Oe.path),
          destination: te,
          filename: Oe.path.split("/").pop() || Oe.path
        });
      }
      a("queue", Ee);
    }
    function de() {
      if (c.value.size !== 1) return;
      const [te] = c.value;
      a("selectSource", Mi(n.repoId, n.revision, te));
    }
    function G() {
      if (L.value === "source") {
        de();
        return;
      }
      ve();
    }
    async function ne() {
      if (n.repoId) {
        u.value = !0, d.value = null;
        try {
          const te = `https://huggingface.co/${n.repoId}/tree/${n.revision || "main"}`, Ee = await l(te);
          if (r.value = Ee.files, n.preselectedFile) {
            const we = r.value.find((Oe) => Oe.path === n.preselectedFile);
            we && J(we);
          }
        } catch (te) {
          d.value = te instanceof Error ? te.message : "Failed to load repository";
        } finally {
          u.value = !1;
        }
      }
    }
    return $t(() => [n.repoId, n.revision], () => {
      n.repoId && ne();
    }, { immediate: !1 }), dt(() => {
      ne();
    }), (te, Ee) => (o(), i("div", wp, [
      s("div", _p, [
        s("button", {
          class: "back-btn",
          onClick: Ee[0] || (Ee[0] = (we) => te.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        s("div", kp, [
          s("span", bp, m(e.repoId), 1),
          e.revision ? (o(), i("span", $p, m(e.revision), 1)) : y("", !0)
        ])
      ]),
      u.value ? (o(), i("div", Cp, " Loading repository files... ")) : d.value ? (o(), i("div", xp, m(d.value), 1)) : (o(), i(F, { key: 2 }, [
        s("div", Sp, [
          b(Pt, {
            modelValue: f.value,
            "onUpdate:modelValue": Ee[1] || (Ee[1] = (we) => f.value = we),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          s("div", Ip, [
            s("button", {
              class: Ve(["toggle-btn", { active: v.value }]),
              onClick: Ee[2] || (Ee[2] = (we) => v.value = !v.value)
            }, m(v.value ? "Models Only" : "All Files"), 3),
            L.value === "download" ? (o(), i("button", {
              key: 0,
              class: "action-btn",
              onClick: fe
            }, "Auto-Select Models")) : y("", !0),
            s("button", {
              class: "action-btn",
              onClick: oe
            }, "Clear")
          ])
        ]),
        s("div", Ep, [
          C.value.length > 0 ? (o(), i("div", Tp, [
            L.value === "download" ? (o(), i("input", {
              key: 0,
              type: "checkbox",
              checked: $.value,
              indeterminate: I.value && !$.value,
              class: "file-checkbox",
              onChange: H
            }, null, 40, Mp)) : (o(), i("span", Pp)),
            s("span", {
              class: "header-name",
              onClick: Ee[3] || (Ee[3] = (we) => q("name"))
            }, [
              Ee[7] || (Ee[7] = x(" Name ", -1)),
              s("span", Rp, m(p.value === "name" ? w.value ? "▲" : "▼" : ""), 1)
            ]),
            s("span", {
              class: "header-size",
              onClick: Ee[4] || (Ee[4] = (we) => q("size"))
            }, [
              Ee[8] || (Ee[8] = x(" Size ", -1)),
              s("span", Dp, m(p.value === "size" ? w.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          C.value.length === 0 ? (o(), i("div", Np, m(r.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (o(), i("div", Lp, [
            (o(!0), i(F, null, he(S.value, (we) => (o(), i("div", {
              key: we.path,
              class: Ve(["file-item", { selected: c.value.has(we.path) }]),
              onClick: (Oe) => J(we)
            }, [
              s("input", {
                type: "checkbox",
                checked: c.value.has(we.path),
                class: "file-checkbox",
                onClick: Ee[5] || (Ee[5] = bt(() => {
                }, ["stop"])),
                onChange: (Oe) => J(we)
              }, null, 40, Op),
              s("span", Ap, m(we.path), 1),
              s("span", zp, m(ae(we.size)), 1)
            ], 10, Up))), 128))
          ]))
        ]),
        L.value === "download" ? (o(), D(ic, {
          key: 0,
          modelValue: g.value,
          "onUpdate:modelValue": Ee[6] || (Ee[6] = (we) => g.value = we),
          "suggested-directory": R.value
        }, null, 8, ["modelValue", "suggested-directory"])) : y("", !0),
        s("div", Fp, [
          s("div", Vp, [
            s("span", Bp, m(N.value), 1),
            s("span", Wp, m(ae(M.value)), 1)
          ]),
          b(De, {
            variant: "primary",
            disabled: V.value,
            onClick: G
          }, {
            default: h(() => [
              x(m(A.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), jp = /* @__PURE__ */ Te(Gp, [["__scopeId", "data-v-06caa551"]]), Hp = { class: "token-config-modal" }, qp = { class: "provider-info" }, Kp = { class: "provider-icon" }, Jp = { class: "provider-name" }, Qp = {
  key: 0,
  class: "current-token"
}, Yp = { class: "mask" }, Xp = { class: "token-input-section" }, Zp = { class: "input-label" }, eg = { class: "help-text" }, tg = ["href"], sg = { class: "modal-actions" }, ng = /* @__PURE__ */ Se({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {},
    overlayZIndex: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: t }) {
    const n = e, a = t, { updateConfig: l } = ft(), r = _(""), c = _(!1), u = _(!1), d = P(
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
    return (C, S) => (o(), D(Mt, {
      title: "Configure API Token",
      "overlay-z-index": e.overlayZIndex,
      onClose: S[2] || (S[2] = ($) => C.$emit("close"))
    }, {
      body: h(() => [
        s("div", Hp, [
          s("div", qp, [
            s("span", Kp, m(f.value), 1),
            s("span", Jp, m(d.value), 1)
          ]),
          e.currentTokenMask ? (o(), i("div", Qp, [
            S[4] || (S[4] = s("span", { class: "label" }, "Current token:", -1)),
            s("span", Yp, m(e.currentTokenMask), 1),
            b(De, {
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
          s("div", Xp, [
            s("label", Zp, m(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            b(Pt, {
              modelValue: r.value,
              "onUpdate:modelValue": S[0] || (S[0] = ($) => r.value = $),
              type: "password",
              placeholder: v.value
            }, null, 8, ["modelValue", "placeholder"]),
            s("div", eg, [
              s("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, m(w.value), 9, tg)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        s("div", sg, [
          b(De, {
            variant: "secondary",
            onClick: S[1] || (S[1] = ($) => C.$emit("close"))
          }, {
            default: h(() => [...S[5] || (S[5] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(De, {
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
}), og = /* @__PURE__ */ Te(ng, [["__scopeId", "data-v-525ec64a"]]), ag = { class: "huggingface-tab" }, lg = {
  key: 0,
  class: "search-section"
}, ig = { class: "search-header" }, rg = { class: "search-bar" }, cg = {
  key: 1,
  class: "search-results"
}, ug = {
  key: 0,
  class: "loading-state"
}, dg = {
  key: 1,
  class: "error-state"
}, mg = {
  key: 2,
  class: "results-list"
}, fg = ["onClick"], vg = { class: "repo-header" }, pg = { class: "repo-id" }, gg = { class: "repo-stats" }, hg = {
  class: "stat",
  title: "Downloads"
}, yg = {
  class: "stat",
  title: "Likes"
}, wg = {
  key: 0,
  class: "repo-desc"
}, _g = {
  key: 1,
  class: "repo-tags"
}, kg = {
  key: 3,
  class: "empty-state"
}, bg = {
  key: 4,
  class: "hint-state"
}, $g = /* @__PURE__ */ Se({
  __name: "HuggingFaceTab",
  props: {
    modeKind: { default: "download" },
    actionLabel: { default: "Queue Download" },
    overlayZIndex: { default: 10003 }
  },
  emits: ["queue", "selectSource"],
  setup(e) {
    const { searchHuggingFaceRepos: t, getConfig: n } = ft(), a = _("search"), l = _(""), r = _([]), c = _(!1), u = _(null), d = _(!1), f = _(null), v = _("main"), p = _(), w = _(), g = _(!1), k = _(null), C = P(() => {
      if (!u.value) return !1;
      const A = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || A.includes("authentication") || A.includes("unauthorized");
    });
    function S(A) {
      return A >= 1e6 ? `${(A / 1e6).toFixed(1)}M` : A >= 1e3 ? `${(A / 1e3).toFixed(1)}K` : String(A);
    }
    async function $() {
      const A = l.value.trim();
      if (!A) return;
      u.value = null;
      const N = hp(A);
      if (N.kind === "file" && N.repoId && N.path) {
        f.value = N.repoId, v.value = N.revision || "main";
        const V = N.path.split("/");
        V.length > 1 ? p.value = V.slice(0, -1).join("/") : p.value = void 0, w.value = N.path, a.value = "browse";
        return;
      }
      if (N.kind === "repo" && N.repoId) {
        f.value = N.repoId, v.value = N.revision || "main", p.value = N.path, w.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(A) && !A.includes("://")) {
        f.value = A, v.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const V = await t(A);
        r.value = V.results, d.value = !0;
      } catch (V) {
        u.value = V instanceof Error ? V.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function I(A) {
      f.value = A, v.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
    }
    function E() {
      a.value = "search", f.value = null, p.value = void 0, w.value = void 0;
    }
    async function M() {
      try {
        const A = await n();
        k.value = A.huggingface_token || null;
      } catch (A) {
        console.error("Failed to load config:", A);
      }
    }
    function R() {
      M(), C.value && l.value && $();
    }
    function L() {
      k.value = null;
    }
    return dt(M), (A, N) => (o(), i("div", ag, [
      a.value === "search" ? (o(), i("div", lg, [
        s("div", ig, [
          s("div", rg, [
            b(Pt, {
              modelValue: l.value,
              "onUpdate:modelValue": N[0] || (N[0] = (V) => l.value = V),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: Ss($, ["enter"])
            }, null, 8, ["modelValue"]),
            b(De, {
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
          b(De, {
            variant: "secondary",
            size: "sm",
            onClick: N[1] || (N[1] = (V) => g.value = !0)
          }, {
            default: h(() => [
              x(m(k.value ? `Token: ${k.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : y("", !0),
      a.value === "search" ? (o(), i("div", cg, [
        c.value ? (o(), i("div", ug, " Searching HuggingFace... ")) : u.value ? (o(), i("div", dg, [
          s("p", null, m(u.value), 1),
          C.value ? (o(), D(De, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: N[2] || (N[2] = (V) => g.value = !0)
          }, {
            default: h(() => [...N[7] || (N[7] = [
              x(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (o(), i("div", mg, [
          (o(!0), i(F, null, he(r.value, (V) => (o(), i("div", {
            key: V.repo_id,
            class: "repo-card",
            onClick: (ae) => I(V.repo_id)
          }, [
            s("div", vg, [
              s("span", pg, m(V.repo_id), 1),
              s("div", gg, [
                s("span", hg, [
                  N[8] || (N[8] = s("span", { class: "stat-icon" }, "↓", -1)),
                  x(" " + m(S(V.downloads)), 1)
                ]),
                s("span", yg, [
                  N[9] || (N[9] = s("span", { class: "stat-icon" }, "★", -1)),
                  x(" " + m(S(V.likes)), 1)
                ])
              ])
            ]),
            V.description ? (o(), i("p", wg, m(V.description), 1)) : y("", !0),
            V.tags.length > 0 ? (o(), i("div", _g, [
              (o(!0), i(F, null, he(V.tags.slice(0, 5), (ae) => (o(), i("span", {
                key: ae,
                class: "tag"
              }, m(ae), 1))), 128))
            ])) : y("", !0)
          ], 8, fg))), 128))
        ])) : d.value ? (o(), i("div", kg, " No repositories found ")) : (o(), i("div", bg, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (o(), D(jp, {
        key: 2,
        "repo-id": f.value,
        revision: v.value,
        "initial-path": p.value,
        "preselected-file": w.value,
        mode: e.modeKind,
        "action-label": e.actionLabel,
        onBack: E,
        onQueue: N[3] || (N[3] = (V) => A.$emit("queue", V)),
        onSelectSource: N[4] || (N[4] = (V) => A.$emit("selectSource", V))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file", "mode", "action-label"])),
      g.value ? (o(), D(og, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": k.value,
        "overlay-z-index": e.overlayZIndex + 2,
        onClose: N[5] || (N[5] = (V) => g.value = !1),
        onSaved: R,
        onCleared: L
      }, null, 8, ["current-token-mask", "overlay-z-index"])) : y("", !0)
    ]));
  }
}), rc = /* @__PURE__ */ Te($g, [["__scopeId", "data-v-eccbf32d"]]), Cg = { class: "candidate-card" }, xg = { class: "candidate-main" }, Sg = { class: "candidate-url" }, Ig = { class: "candidate-meta" }, Eg = { class: "meta-chip" }, Tg = {
  key: 0,
  class: "meta-chip"
}, Mg = ["aria-expanded"], Pg = {
  key: 1,
  class: "meta-chip"
}, Rg = { class: "match-popover-reasons" }, Dg = { class: "candidate-footer" }, Ng = {
  key: 0,
  class: "candidate-context"
}, Lg = { key: 1 }, Ug = /* @__PURE__ */ Se({
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
      return o(), i("article", Cg, [
        s("div", xg, [
          s("div", Sg, m(e.candidate.url), 1),
          s("div", Ig, [
            s("span", Eg, [
              p[3] || (p[3] = s("span", { class: "chip-label" }, "Provider", -1)),
              s("span", null, m(d(e.candidate.source_type)), 1)
            ]),
            e.candidate.workflow ? (o(), i("span", Tg, [
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
              ], 8, Mg)) : (o(), i("span", Pg, [
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
                s("div", Rg, [
                  (o(!0), i(F, null, he(e.candidate.reasons, (k) => (o(), i("span", {
                    key: k,
                    class: "reason-chip"
                  }, m(k), 1))), 128))
                ])
              ])) : y("", !0)
            ], 512)) : y("", !0)
          ]),
          s("div", Dg, [
            e.candidate.context ? (o(), i("details", Ng, [
              p[8] || (p[8] = s("summary", null, "Workflow snippet", -1)),
              s("p", null, m(e.candidate.context), 1)
            ])) : (o(), i("div", Lg)),
            b(De, {
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
}), cc = /* @__PURE__ */ Te(Ug, [["__scopeId", "data-v-329b9068"]]), Og = { class: "source-url-form" }, Ag = { class: "input-group" }, zg = { key: 0 }, Fg = {
  key: 1,
  class: "description"
}, Vg = { class: "actions" }, Bg = /* @__PURE__ */ Se({
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
    return (d, f) => (o(), i("div", Og, [
      s("div", Ag, [
        e.label ? (o(), i("label", zg, m(e.label), 1)) : y("", !0),
        b(Pt, {
          "model-value": e.modelValue,
          placeholder: e.placeholder,
          error: r.value || void 0,
          "full-width": "",
          "onUpdate:modelValue": f[0] || (f[0] = (v) => a("update:modelValue", v)),
          onEnter: u
        }, null, 8, ["model-value", "placeholder", "error"]),
        e.description ? (o(), i("p", Fg, m(e.description), 1)) : y("", !0)
      ]),
      rt(d.$slots, "default", {}, void 0),
      s("div", Vg, [
        b(De, {
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
}), uc = /* @__PURE__ */ Te(Bg, [["__scopeId", "data-v-e2610d45"]]), Wg = { class: "source-picker" }, Gg = {
  key: 0,
  class: "model-summary"
}, jg = { class: "model-heading" }, Hg = { class: "summary-name" }, qg = { class: "summary-meta" }, Kg = {
  key: 0,
  class: "hash-row"
}, Jg = { class: "hash-value" }, Qg = {
  key: 1,
  class: "hash-row"
}, Yg = { class: "hash-value" }, Xg = {
  key: 2,
  class: "hash-row"
}, Zg = { class: "hash-value" }, eh = {
  key: 4,
  class: "hash-error"
}, th = { class: "tab-bar" }, sh = ["onClick"], nh = {
  key: 1,
  class: "tab-content"
}, oh = { class: "section-header-row" }, ah = {
  key: 0,
  class: "state-message"
}, lh = {
  key: 1,
  class: "error-message"
}, ih = {
  key: 2,
  class: "candidate-list"
}, rh = {
  key: 3,
  class: "state-message"
}, ch = {
  key: 2,
  class: "tab-content source-browser-content"
}, uh = {
  key: 3,
  class: "tab-content"
}, dh = { class: "section-header-row" }, mh = /* @__PURE__ */ Se({
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
    const n = e, a = t, { getModelSourceCandidates: l, computeModelHashes: r } = ft(), c = [
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
    return dt(S), (I, E) => (o(), i("div", Wg, [
      e.showModelSummary ? (o(), i("div", Gg, [
        s("div", jg, [
          E[4] || (E[4] = s("div", { class: "summary-label" }, "Local model", -1)),
          s("div", Hg, m(e.model.filename), 1)
        ]),
        s("div", qg, [
          e.model.hash ? (o(), i("div", Kg, [
            E[5] || (E[5] = s("span", { class: "hash-label" }, "quick hash", -1)),
            s("span", Jg, m(e.model.hash), 1)
          ])) : y("", !0),
          e.model.blake3 ? (o(), i("div", Qg, [
            E[6] || (E[6] = s("span", { class: "hash-label" }, "blake3", -1)),
            s("span", Yg, m(e.model.blake3), 1)
          ])) : y("", !0),
          e.model.sha256 ? (o(), i("div", Xg, [
            E[7] || (E[7] = s("span", { class: "hash-label" }, "sha256", -1)),
            s("span", Zg, m(e.model.sha256), 1)
          ])) : y("", !0),
          C.value ? (o(), D(De, {
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
          g.value ? (o(), i("p", eh, m(g.value), 1)) : y("", !0)
        ])
      ])) : y("", !0),
      s("div", th, [
        (o(), i(F, null, he(c, (M) => s("button", {
          key: M.id,
          class: Ve(["tab-btn", { active: u.value === M.id }]),
          onClick: (R) => u.value = M.id
        }, m(M.label), 11, sh)), 64))
      ]),
      u.value === "workflow" ? (o(), i("section", nh, [
        s("div", oh, [
          E[10] || (E[10] = s("div", null, [
            s("h4", null, "Workflow Links"),
            s("p", null, "Candidate model links found in saved workflow notes or metadata.")
          ], -1)),
          b(De, {
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
        f.value ? (o(), i("div", ah, "Scanning workflows...")) : v.value ? (o(), i("div", lh, m(v.value), 1)) : k.value.length ? (o(), i("div", ih, [
          (o(!0), i(F, null, he(k.value, (M) => (o(), D(cc, {
            key: `${M.workflow}:${M.url}`,
            candidate: M,
            "action-label": e.actionLabel,
            loading: e.loadingUrl === M.url,
            onSelect: E[0] || (E[0] = (R) => a("selectSource", R))
          }, null, 8, ["candidate", "action-label", "loading"]))), 128))
        ])) : (o(), i("div", rh, " No likely workflow links found. Try direct URL for now. "))
      ])) : u.value === "huggingface" ? (o(), i("section", ch, [
        b(rc, {
          "mode-kind": "source",
          "action-label": e.actionLabel,
          "overlay-z-index": e.overlayZIndex,
          onSelectSource: E[1] || (E[1] = (M) => a("selectSource", M))
        }, null, 8, ["action-label", "overlay-z-index"])
      ])) : u.value === "direct" ? (o(), i("section", uh, [
        s("div", dh, [
          s("div", null, [
            E[11] || (E[11] = s("h4", null, "Direct URL", -1)),
            s("p", null, m(e.directDescription), 1)
          ])
        ]),
        b(uc, {
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
}), fh = /* @__PURE__ */ Te(mh, [["__scopeId", "data-v-e9633660"]]), vh = {
  key: 0,
  class: "error-message"
}, ph = /* @__PURE__ */ Se({
  __name: "ModelSourceModal",
  props: {
    model: {},
    overlayZIndex: { default: 10011 }
  },
  emits: ["close", "saved", "hashesComputed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { addModelSource: l } = ft(), r = _(n.model), c = _(null), u = _(null);
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
    return (v, p) => (o(), D(Mt, {
      title: `Find Source: ${e.model.filename}`,
      size: "lg",
      "fixed-height": "",
      "overlay-z-index": e.overlayZIndex,
      onClose: p[1] || (p[1] = (w) => a("close"))
    }, {
      body: h(() => [
        b(fh, {
          model: r.value,
          "loading-url": c.value,
          "overlay-z-index": e.overlayZIndex,
          "action-label": "Use as Source",
          onSelectSource: d,
          onHashesComputed: f
        }, null, 8, ["model", "loading-url", "overlay-z-index"]),
        u.value ? (o(), i("p", vh, m(u.value), 1)) : y("", !0)
      ]),
      footer: h(() => [
        b(De, {
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
}), dc = /* @__PURE__ */ Te(ph, [["__scopeId", "data-v-62104cdb"]]), gh = { class: "readiness-body" }, hh = {
  key: 0,
  class: "issue-section"
}, yh = { class: "section-heading" }, wh = { class: "issue-list" }, _h = { class: "issue-main" }, kh = { class: "issue-name" }, bh = { class: "issue-meta" }, $h = { key: 0 }, Ch = { key: 1 }, xh = ["disabled", "onClick"], Sh = {
  key: 1,
  class: "issue-note"
}, Ih = {
  key: 1,
  class: "issue-section"
}, Eh = { class: "section-heading" }, Th = { class: "issue-list" }, Mh = { class: "issue-main" }, Ph = { class: "issue-name" }, Rh = { class: "issue-meta" }, Dh = { class: "issue-reason" }, Nh = ["disabled", "onClick"], Lh = {
  key: 1,
  class: "issue-note"
}, Uh = {
  key: 2,
  class: "empty-state"
}, Oh = {
  key: 3,
  class: "error-message"
}, Ah = /* @__PURE__ */ Se({
  __name: "ReadinessIssuesModal",
  props: {
    warnings: {}
  },
  emits: ["close", "revalidate"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getModelDetails: l, updateNodeCriticality: r } = ft(), c = _(null), u = _(null), d = _(null), f = _(null), v = P(() => n.warnings.models_without_sources), p = P(() => n.warnings.nodes_without_provenance);
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
    return (S, $) => (o(), i(F, null, [
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
          s("div", gh, [
            v.value.length ? (o(), i("section", hh, [
              s("div", yh, [
                $[4] || ($[4] = s("h4", null, "Models Missing Source URLs", -1)),
                s("span", null, m(v.value.length), 1)
              ]),
              s("div", wh, [
                (o(!0), i(F, null, he(v.value, (I) => (o(), i("article", {
                  key: I.hash || I.filename,
                  class: "issue-item"
                }, [
                  s("div", _h, [
                    s("div", kh, m(I.filename), 1),
                    s("div", bh, [
                      I.hash ? (o(), i("span", $h, "hash " + m(I.hash), 1)) : y("", !0),
                      I.workflows.length ? (o(), i("span", Ch, "used by " + m(I.workflows.join(", ")), 1)) : y("", !0),
                      s("span", null, m(I.criticality || "required"), 1)
                    ])
                  ]),
                  I.hash ? (o(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: u.value === I.hash,
                    onClick: (E) => w(I.hash)
                  }, m(u.value === I.hash ? "Loading..." : "Add Source"), 9, xh)) : (o(), i("span", Sh, "Missing hash"))
                ]))), 128))
              ])
            ])) : y("", !0),
            p.value.length ? (o(), i("section", Ih, [
              s("div", Eh, [
                $[5] || ($[5] = s("h4", null, "Custom Nodes Missing Portable Provenance", -1)),
                s("span", null, m(p.value.length), 1)
              ]),
              s("div", Th, [
                (o(!0), i(F, null, he(p.value, (I) => (o(), i("article", {
                  key: I.name,
                  class: "issue-item"
                }, [
                  s("div", Mh, [
                    s("div", Ph, m(I.name), 1),
                    s("div", Rh, [
                      s("span", null, m(I.source), 1),
                      s("span", null, m(I.criticality), 1)
                    ]),
                    s("p", Dh, m(I.reason), 1)
                  ]),
                  I.criticality === "required" ? (o(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: d.value === I.name,
                    onClick: (E) => g(I.name)
                  }, m(d.value === I.name ? "Saving..." : "Mark Optional"), 9, Nh)) : (o(), i("span", Lh, "Optional warning"))
                ]))), 128))
              ])
            ])) : y("", !0),
            !v.value.length && !p.value.length ? (o(), i("div", Uh, " No reproducibility issues remain. ")) : y("", !0),
            f.value ? (o(), i("div", Oh, m(f.value), 1)) : y("", !0)
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
      c.value ? (o(), D(dc, {
        key: 0,
        model: c.value,
        "overlay-z-index": 10008,
        onClose: $[2] || ($[2] = (I) => c.value = null),
        onSaved: k,
        onHashesComputed: C
      }, null, 8, ["model"])) : y("", !0)
    ], 64));
  }
}), Tl = /* @__PURE__ */ Te(Ah, [["__scopeId", "data-v-03f88a10"]]), zh = { class: "health-section-header" }, Fh = { class: "suggestions-content" }, Vh = { class: "suggestions-text" }, Bh = { style: { "margin-top": "var(--cg-space-3)" } }, Wh = {
  key: 1,
  class: "no-issues-text"
}, Gh = {
  key: 2,
  class: "no-issues-text"
}, jh = /* @__PURE__ */ Se({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: t, emit: n }) {
    const a = e, l = _(!1), r = _(!1), c = _(!1), u = _(null), d = _(null), f = _(!1), { validateExport: v } = ft();
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
      const X = a.status.workflows.analyzed || [], W = X.filter(
        (ye) => ye.unresolved_models_count > 0 || ye.ambiguous_models_count > 0
      );
      return W.length === 0 && a.status.missing_models_count > 0 ? X.filter((ye) => ye.sync_state === "synced") : W;
    });
    function R() {
      const X = M.value;
      X.length !== 0 && (C.value = !0, k("repair-missing-models", X.map((W) => W.name)));
    }
    function L() {
      C.value = !1;
    }
    t({ resetRepairingState: L, resetRepairingEnvironmentState: I, closeDetailModal: E });
    const A = P(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), N = P(() => a.status.has_changes), V = P(() => {
      const X = a.status.git_changes;
      return X.nodes_added.length > 0 || X.nodes_removed.length > 0 || X.workflow_changes;
    }), ae = P(() => a.status.has_changes || A.value), ee = P(() => {
      var X;
      return ((X = u.value) == null ? void 0 : X.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), J = P(
      () => ee.value.models_without_sources.length
    ), fe = P(
      () => ee.value.nodes_without_provenance.length
    ), oe = P(
      () => J.value + fe.value
    ), H = P(
      () => oe.value > 0
    ), q = P(() => {
      const X = [];
      if (J.value > 0 && X.push(`${J.value} model${J.value === 1 ? "" : "s"} missing download source`), fe.value > 0) {
        const W = ee.value.nodes_without_provenance.filter((ke) => ke.criticality === "optional").length, ye = fe.value - W;
        ye > 0 && X.push(`${ye} required node${ye === 1 ? "" : "s"} missing portable source`), W > 0 && X.push(`${W} optional node${W === 1 ? "" : "s"} missing portable source`);
      }
      return X;
    });
    async function _e() {
      f.value = !0, d.value = null;
      try {
        u.value = await v();
      } catch (X) {
        d.value = X instanceof Error ? X.message : "Failed to check readiness";
      } finally {
        f.value = !1;
      }
    }
    async function se() {
      await _e();
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
        a.setupState === "managed" && _e();
      },
      { immediate: !0 }
    );
    const ve = P(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), de = P(() => a.status.git_changes.has_other_changes), G = P(() => {
      var X;
      return ((X = a.status.workflows.analyzed) == null ? void 0 : X.filter((W) => W.status === "broken")) || [];
    }), ne = P(() => {
      var X;
      return ((X = a.status.workflows.analyzed) == null ? void 0 : X.filter(
        (W) => W.has_path_sync_issues && !W.has_issues
      )) || [];
    }), te = P(() => G.value.length > 0);
    function Ee(X) {
      const W = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const ye of W) {
        const ke = X.match(ye);
        if (ke != null && ke[1])
          return ke[1];
      }
      return null;
    }
    function we(X) {
      const W = X.map(Ee).filter((ye) => !!ye);
      return [...new Set(W)];
    }
    function Oe(X) {
      if (X.length === 0) return "";
      if (X.length === 1) return ` (>= ${X[0]})`;
      const W = X.slice(0, 2).map((ke) => `>= ${ke}`).join(", "), ye = X.length > 2;
      return ` (${W}${ye ? ", ..." : ""})`;
    }
    function Ne(X) {
      return X.replace(/uninstallable node mappings?/gi, (W) => W.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function $e(X) {
      const W = Ne(X.issue_summary || "Has issues"), ye = /(?:>=|v?\d+\.\d+)/i.test(W), ke = we(X.version_gated_guidance || []);
      return (X.nodes_version_gated_count || 0) > 0 && ke.length > 0 && !ye ? `${X.name} — ${W} (needs ComfyUI ${ke.map((qe) => `>= ${qe}`).join(", ")})` : `${X.name} — ${W}`;
    }
    const Ae = P(() => G.value.reduce(
      (X, W) => X + (W.nodes_version_gated_count || 0),
      0
    )), pe = P(() => {
      const X = G.value.flatMap(
        (W) => we(W.version_gated_guidance || [])
      );
      return [...new Set(X)];
    }), ge = P(() => G.value.reduce(
      (X, W) => X + (W.nodes_uninstallable_count || 0),
      0
    )), T = P(() => {
      const X = [];
      return Ae.value > 0 && X.push(
        `${Ae.value} require newer ComfyUI${Oe(pe.value)}`
      ), ge.value > 0 && X.push(`${ge.value} need community packages`), X.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${X.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), O = P(() => te.value || ne.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), le = P(() => O.value || H.value || !!d.value), Ie = P(() => {
      const X = [];
      return a.status.workflows.new.length > 0 && X.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && X.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && X.push(`${a.status.workflows.deleted.length} deleted`), X.length > 0 ? `${X.join(", ")} workflow${X.length === 1 && !X[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Me = P(() => {
      var ye, ke;
      const X = [], W = a.status.comparison;
      return (ye = W.missing_nodes) != null && ye.length && X.push(`${W.missing_nodes.length} missing node${W.missing_nodes.length === 1 ? "" : "s"}`), (ke = W.extra_nodes) != null && ke.length && X.push(`${W.extra_nodes.length} untracked node${W.extra_nodes.length === 1 ? "" : "s"}`), X.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${X.join(" and ")}.`;
    }), Ce = P(() => {
      var ye, ke;
      const X = [], W = a.status.comparison;
      return (ye = W.extra_nodes) != null && ye.length && (W.extra_nodes.slice(0, 3).forEach((qe) => {
        X.push(`Untracked: ${qe}`);
      }), W.extra_nodes.length > 3 && X.push(`...and ${W.extra_nodes.length - 3} more untracked`)), (ke = W.missing_nodes) != null && ke.length && (W.missing_nodes.slice(0, 3).forEach((qe) => {
        X.push(`Missing: ${qe}`);
      }), W.missing_nodes.length > 3 && X.push(`...and ${W.missing_nodes.length - 3} more missing`)), X;
    });
    return (X, W) => (o(), i(F, null, [
      b(qt, null, {
        header: h(() => [
          b(Kt, { title: "STATUS" })
        ]),
        content: h(() => [
          a.setupState === "no_workspace" ? (o(), D(ds, {
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
                onClick: W[0] || (W[0] = (ye) => X.$emit("start-setup"))
              }, {
                default: h(() => [...W[15] || (W[15] = [
                  x(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (o(), D(ds, {
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
                onClick: W[1] || (W[1] = (ye) => X.$emit("view-environments"))
              }, {
                default: h(() => [...W[16] || (W[16] = [
                  x(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (o(), D(ds, {
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
                onClick: W[2] || (W[2] = (ye) => X.$emit("create-environment"))
              }, {
                default: h(() => [...W[17] || (W[17] = [
                  x(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", {
            class: "health-section-wrapper",
            onMouseenter: W[4] || (W[4] = (ye) => r.value = !0),
            onMouseleave: W[5] || (W[5] = (ye) => r.value = !1)
          }, [
            s("div", zh, [
              b(hs, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...W[18] || (W[18] = [
                  x(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              b(Wd, { name: "fade" }, {
                default: h(() => [
                  r.value ? (o(), D(Pe, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: p
                  }, {
                    default: h(() => [...W[19] || (W[19] = [
                      x(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            b(Zm, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, cs({
              left: h(() => [
                e.status.workflows.new.length ? (o(), D(Rs, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (o(), D(Rs, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (o(), D(Rs, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                b(Rs, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: A.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (o(), D(Rs, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (o(), D(Rs, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (o(), D(Rs, {
                  key: 2,
                  icon: "●",
                  count: ve.value,
                  label: ve.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                de.value ? (o(), D(Rs, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                N.value && !V.value && !de.value ? (o(), D(Rs, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                N.value ? y("", !0) : (o(), D(Rs, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              ae.value ? {
                name: "footer",
                fn: h(() => [
                  W[21] || (W[21] = s("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  s("div", Fh, [
                    s("span", Vh, m(Ie.value), 1),
                    b(Pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: W[3] || (W[3] = (ye) => X.$emit("commit-changes"))
                    }, {
                      default: h(() => [...W[20] || (W[20] = [
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
          e.status.is_detached_head ? (o(), D(ds, {
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
                onClick: W[6] || (W[6] = (ye) => X.$emit("create-branch"))
              }, {
                default: h(() => [...W[22] || (W[22] = [
                  x(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", Bh, [
            b(hs, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...W[23] || (W[23] = [
                x(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            le.value ? (o(), i(F, { key: 0 }, [
              G.value.length > 0 ? (o(), D(ds, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${G.value.length} workflow${G.value.length === 1 ? "" : "s"} can't run`,
                description: T.value,
                items: G.value.map($e)
              }, {
                actions: h(() => [
                  b(Pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: W[7] || (W[7] = (ye) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...W[24] || (W[24] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : y("", !0),
              ne.value.length > 0 ? (o(), D(ds, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${ne.value.length} workflow${ne.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: ne.value.map((ye) => `${ye.name} — ${ye.models_needing_path_sync_count} model path${ye.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  b(Pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: W[8] || (W[8] = (ye) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...W[25] || (W[25] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !te.value ? (o(), D(ds, {
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
                    onClick: R
                  }, {
                    default: h(() => [
                      x(m(C.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  b(Pe, {
                    variant: "secondary",
                    size: "sm",
                    onClick: W[9] || (W[9] = (ye) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...W[26] || (W[26] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (o(), D(ds, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Me.value,
                items: Ce.value
              }, {
                actions: h(() => [
                  b(Pe, {
                    variant: "secondary",
                    size: "sm",
                    onClick: p
                  }, {
                    default: h(() => [...W[27] || (W[27] = [
                      x(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  b(Pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: W[10] || (W[10] = (ye) => X.$emit("view-nodes"))
                  }, {
                    default: h(() => [...W[28] || (W[28] = [
                      x(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (o(), D(ds, {
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
                    onClick: W[11] || (W[11] = (ye) => X.$emit("view-nodes"))
                  }, {
                    default: h(() => [...W[29] || (W[29] = [
                      x(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0),
              H.value ? (o(), D(ds, {
                key: 5,
                severity: "warning",
                icon: "!",
                title: "Environment reproducibility needs attention",
                description: "Some dependencies are missing source details needed to rebuild this environment elsewhere.",
                items: q.value
              }, {
                actions: h(() => [
                  b(Pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: W[12] || (W[12] = (ye) => c.value = !0)
                  }, {
                    default: h(() => [...W[30] || (W[30] = [
                      x(" Review Issues ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["items"])) : d.value ? (o(), D(ds, {
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
                    onClick: _e
                  }, {
                    default: h(() => [...W[31] || (W[31] = [
                      x(" Retry ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }, 8, ["description"])) : y("", !0)
            ], 64)) : ae.value ? (o(), i("span", Wh, "No issues")) : (o(), i("span", Gh, "No runtime issues detected"))
          ])
        ]),
        _: 1
      }),
      b(jv, {
        show: l.value,
        status: e.status,
        "is-repairing": S.value,
        onClose: W[13] || (W[13] = (ye) => l.value = !1),
        onNavigateWorkflows: w,
        onNavigateNodes: g,
        onRepair: $
      }, null, 8, ["show", "status", "is-repairing"]),
      c.value && u.value ? (o(), D(Tl, {
        key: 0,
        warnings: u.value.warnings,
        onClose: W[14] || (W[14] = (ye) => c.value = !1),
        onRevalidate: se
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), Hh = /* @__PURE__ */ Te(jh, [["__scopeId", "data-v-f6b165fd"]]);
async function Fo(e, t) {
  const n = await Ks(e, t);
  if (!n.ok) {
    const a = await n.json().catch(() => ({}));
    throw new Error(a.error || a.message || `Request failed: ${n.status}`);
  }
  return n.json();
}
function qh() {
  async function e() {
    try {
      return await Fo("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function t() {
    try {
      return await Fo("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function n() {
    await Fo("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function a() {
    await Fo("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: t,
    restart: n,
    kill: a
  };
}
const Kh = {
  key: 0,
  class: "base-title-count"
}, Jh = /* @__PURE__ */ Se({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (t, n) => (o(), D($l(`h${e.level}`), {
      class: Ve(["base-title", e.variant])
    }, {
      default: h(() => [
        rt(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), i("span", Kh, "(" + m(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), _n = /* @__PURE__ */ Te(Jh, [["__scopeId", "data-v-5a01561d"]]), Qh = ["value", "disabled"], Yh = {
  key: 0,
  value: "",
  disabled: ""
}, Xh = ["value"], Zh = {
  key: 0,
  class: "base-select-error"
}, ey = /* @__PURE__ */ Se({
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
      class: Ve(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Ve(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => a.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (o(), i("option", Yh, m(e.placeholder), 1)) : y("", !0),
        (o(!0), i(F, null, he(e.options, (r) => (o(), i("option", {
          key: t(r),
          value: t(r)
        }, m(n(r)), 9, Xh))), 128))
      ], 42, Qh),
      e.error ? (o(), i("span", Zh, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Jo = /* @__PURE__ */ Te(ey, [["__scopeId", "data-v-4996bfe0"]]), ty = { class: "popover-header" }, sy = { class: "popover-title" }, ny = { class: "popover-content" }, oy = {
  key: 0,
  class: "popover-actions"
}, ay = /* @__PURE__ */ Se({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" },
    overlayZIndex: { default: 10004 }
  },
  emits: ["close"],
  setup(e) {
    return (t, n) => (o(), D(ls, { to: "body" }, [
      e.show ? (o(), i("div", {
        key: 0,
        class: "popover-overlay",
        style: Vt({ zIndex: e.overlayZIndex }),
        onClick: n[2] || (n[2] = (a) => t.$emit("close"))
      }, [
        s("div", {
          class: "popover",
          style: Vt({ maxWidth: e.maxWidth }),
          onClick: n[1] || (n[1] = bt(() => {
          }, ["stop"]))
        }, [
          s("div", ty, [
            s("h4", sy, m(e.title), 1),
            s("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", ny, [
            rt(t.$slots, "content", {}, void 0)
          ]),
          t.$slots.actions ? (o(), i("div", oy, [
            rt(t.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ], 4)) : y("", !0)
    ]));
  }
}), ks = /* @__PURE__ */ Te(ay, [["__scopeId", "data-v-7c1f5547"]]), ly = { class: "detail-section" }, iy = {
  key: 0,
  class: "empty-message"
}, ry = { class: "model-header" }, cy = { class: "model-name" }, uy = { class: "model-details" }, dy = { class: "model-row" }, my = { class: "model-row" }, fy = { class: "label" }, vy = {
  key: 0,
  class: "model-row model-row-nodes"
}, py = { class: "node-list" }, gy = ["onClick"], hy = {
  key: 1,
  class: "model-row"
}, yy = { class: "value" }, wy = {
  key: 2,
  class: "model-row"
}, _y = { class: "value error" }, ky = {
  key: 0,
  class: "model-actions"
}, by = { class: "detail-section" }, $y = {
  key: 0,
  class: "empty-message"
}, Cy = { class: "node-content" }, xy = { class: "node-main" }, Sy = { class: "node-name" }, Iy = { class: "node-badge" }, Ey = {
  key: 0,
  class: "node-version"
}, Ty = ["onClick"], My = {
  key: 2,
  class: "node-install-queued"
}, Py = {
  key: 0,
  class: "node-guidance"
}, Ry = { class: "details-footer" }, Dy = { class: "details-footer-actions" }, Ny = /* @__PURE__ */ Se({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c, queueNodeInstall: u } = ft(), d = _(null), f = _(!1), v = _(null), p = _(!1), w = _({}), g = _(!1), k = _(/* @__PURE__ */ new Set()), C = _(/* @__PURE__ */ new Set()), S = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function $(oe) {
      switch (oe) {
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
    function I(oe) {
      switch (oe) {
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
    function E(oe) {
      switch (oe) {
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
    function M(oe) {
      switch (oe) {
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
    function R(oe) {
      switch (oe) {
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
    function L(oe) {
      if (!oe.loaded_by || oe.loaded_by.length === 0) return [];
      const H = oe.hash || oe.filename;
      return k.value.has(H) ? oe.loaded_by : oe.loaded_by.slice(0, 3);
    }
    function A(oe) {
      return k.value.has(oe);
    }
    function N(oe) {
      k.value.has(oe) ? k.value.delete(oe) : k.value.add(oe), k.value = new Set(k.value);
    }
    async function V() {
      f.value = !0, v.value = null;
      try {
        d.value = await l(n.workflowName);
      } catch (oe) {
        v.value = oe instanceof Error ? oe.message : "Failed to load workflow details";
      } finally {
        f.value = !1;
      }
    }
    function ae(oe, H) {
      w.value[oe] = H, p.value = !0;
    }
    async function ee(oe) {
      try {
        await c(oe);
      } catch (H) {
        v.value = H instanceof Error ? H.message : "Failed to open file location";
      }
    }
    async function J(oe) {
      if (oe.package_id)
        try {
          const H = oe.latest_version || "latest";
          await u({
            id: oe.package_id,
            version: H,
            selected_version: H,
            mode: "remote",
            channel: "default"
          }), C.value.add(oe.package_id);
        } catch (H) {
          v.value = H instanceof Error ? H.message : "Failed to queue node install";
        }
    }
    async function fe() {
      if (!p.value) {
        a("close");
        return;
      }
      f.value = !0, v.value = null;
      try {
        for (const [oe, H] of Object.entries(w.value))
          await r(n.workflowName, oe, H);
        a("refresh"), a("close");
      } catch (oe) {
        v.value = oe instanceof Error ? oe.message : "Failed to save changes";
      } finally {
        f.value = !1;
      }
    }
    return dt(V), (oe, H) => (o(), i(F, null, [
      b(Mt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: f.value,
        error: v.value || void 0,
        onClose: H[5] || (H[5] = (q) => a("close"))
      }, {
        body: h(() => [
          d.value ? (o(), i(F, { key: 0 }, [
            s("section", ly, [
              b(_n, { variant: "section" }, {
                default: h(() => [
                  x("MODELS USED (" + m(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (o(), i("div", iy, " No models used in this workflow ")) : y("", !0),
              (o(!0), i(F, null, he(d.value.models, (q) => {
                var _e;
                return o(), i("div", {
                  key: q.hash || q.filename,
                  class: "model-card"
                }, [
                  s("div", ry, [
                    H[7] || (H[7] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", cy, m(q.filename), 1)
                  ]),
                  s("div", uy, [
                    s("div", dy, [
                      H[8] || (H[8] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: Ve(["value", $(q.status)])
                      }, m(I(q.status)), 3)
                    ]),
                    s("div", my, [
                      s("span", fy, [
                        H[9] || (H[9] = x(" Importance: ", -1)),
                        b(lc, {
                          size: 14,
                          title: "About importance levels",
                          onClick: H[0] || (H[0] = (se) => g.value = !0)
                        })
                      ]),
                      b(Jo, {
                        "model-value": w.value[q.filename] || q.importance,
                        options: S,
                        "onUpdate:modelValue": (se) => ae(q.filename, se)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    q.loaded_by && q.loaded_by.length > 0 ? (o(), i("div", vy, [
                      H[10] || (H[10] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", py, [
                        (o(!0), i(F, null, he(L(q), (se, ve) => (o(), i("div", {
                          key: `${se.node_id}-${ve}`,
                          class: "node-reference"
                        }, m(se.node_type) + " (Node #" + m(se.node_id) + ") ", 1))), 128)),
                        q.loaded_by.length > 3 ? (o(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (se) => N(q.hash || q.filename)
                        }, m(A(q.hash || q.filename) ? "▼ Show less" : `▶ View all (${q.loaded_by.length})`), 9, gy)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    q.size_mb ? (o(), i("div", hy, [
                      H[11] || (H[11] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", yy, m(q.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    q.has_category_mismatch ? (o(), i("div", wy, [
                      H[14] || (H[14] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", _y, [
                        H[12] || (H[12] = x(" In ", -1)),
                        s("code", null, m(q.actual_category) + "/", 1),
                        H[13] || (H[13] = x(" but loader needs ", -1)),
                        s("code", null, m((_e = q.expected_categories) == null ? void 0 : _e[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  q.status !== "available" ? (o(), i("div", ky, [
                    q.status === "downloadable" ? (o(), D(De, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: H[1] || (H[1] = (se) => a("resolve"))
                    }, {
                      default: h(() => [...H[15] || (H[15] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    })) : q.status === "category_mismatch" && q.file_path ? (o(), D(De, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => ee(q.file_path)
                    }, {
                      default: h(() => [...H[16] || (H[16] = [
                        x(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : q.status !== "path_mismatch" ? (o(), D(De, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: H[2] || (H[2] = (se) => a("resolve"))
                    }, {
                      default: h(() => [...H[17] || (H[17] = [
                        x(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            s("section", by, [
              b(_n, { variant: "section" }, {
                default: h(() => [
                  x("NODES USED (" + m(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (o(), i("div", $y, " No custom nodes used in this workflow ")) : y("", !0),
              (o(!0), i(F, null, he(d.value.nodes, (q, _e) => (o(), i("div", {
                key: `${q.name}-${q.status}-${_e}`,
                class: "node-item"
              }, [
                s("span", {
                  class: Ve(["node-status", E(q.status)])
                }, m(M(q.status)), 3),
                s("div", Cy, [
                  s("div", xy, [
                    s("span", Sy, m(q.name), 1),
                    s("span", Iy, m(R(q.status)), 1),
                    q.version ? (o(), i("span", Ey, "v" + m(q.version), 1)) : y("", !0),
                    q.status === "uninstallable" && q.package_id && !C.value.has(q.package_id) ? (o(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (se) => J(q)
                    }, " Install ", 8, Ty)) : q.status === "uninstallable" && q.package_id && C.value.has(q.package_id) ? (o(), i("span", My, " Queued ")) : y("", !0)
                  ]),
                  q.guidance ? (o(), i("div", Py, m(q.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          s("div", Ry, [
            b(De, {
              variant: "secondary",
              onClick: H[3] || (H[3] = (q) => a("resolve"))
            }, {
              default: h(() => [...H[18] || (H[18] = [
                x(" Review Resolution ", -1)
              ])]),
              _: 1
            }),
            s("div", Dy, [
              b(De, {
                variant: "secondary",
                onClick: H[4] || (H[4] = (q) => a("close"))
              }, {
                default: h(() => [...H[19] || (H[19] = [
                  x(" Close ", -1)
                ])]),
                _: 1
              }),
              p.value ? (o(), D(De, {
                key: 0,
                variant: "primary",
                onClick: fe
              }, {
                default: h(() => [...H[20] || (H[20] = [
                  x(" Save Changes ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      b(ks, {
        show: g.value,
        title: "Model Importance Levels",
        onClose: H[6] || (H[6] = (q) => g.value = !1)
      }, {
        content: h(() => [...H[21] || (H[21] = [
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
}), Ly = /* @__PURE__ */ Te(Ny, [["__scopeId", "data-v-00cf34e6"]]), vt = Cn({
  items: [],
  status: "idle"
});
let Us = null;
function mc() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Ga(e) {
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
    await Uy(e), e.status = "completed", e.progress = 100;
  } catch (t) {
    e.status = "failed", e.error = t instanceof Error ? t.message : "Download failed", e.retries++;
  } finally {
    vt.status = "idle", Tn();
  }
}
async function Uy(e) {
  return new Promise((t, n) => {
    Us && (Us.close(), Us = null);
    const a = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${a}`);
    Us = l;
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
            d = !0, p(), l.close(), Us = null, t();
            break;
          case "error":
            d = !0, p(), l.close(), Us = null, n(new Error(g.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      p(), l.close(), Us = null, d || n(new Error("Connection lost"));
    };
  });
}
async function Oy() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const t = await e.json();
    if (!t.pending_downloads || t.pending_downloads.length === 0) return;
    for (const n of t.pending_downloads) {
      if (vt.items.some((l) => l.url === n.url && l.filename === n.filename))
        continue;
      const a = {
        id: mc(),
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
        id: mc(),
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
    const $ = Ga(S);
    if ($) {
      if ($.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent($.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Us && (Us.close(), Us = null), $.status = "failed", $.error = "Cancelled by user", vt.status = "idle", Tn();
      } else if ($.status === "queued") {
        const I = vt.items.findIndex((E) => E.id === S);
        I >= 0 && vt.items.splice(I, 1);
      }
    }
  }
  function n(S) {
    const $ = Ga(S);
    !$ || $.status !== "failed" || ($.status = "queued", $.error = void 0, $.progress = 0, $.downloaded = 0, vt.status === "idle" && Tn());
  }
  function a(S) {
    const $ = Ga(S);
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
    queue: Yo(vt),
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
    loadPendingDownloads: Oy
  };
}
function fc() {
  const e = _(null), t = _(null), n = _([]), a = _([]), l = _(!1), r = _(null);
  async function c(I, E) {
    const M = await Ks(I, E);
    if (!M.ok) {
      const R = await M.json().catch(() => ({})), L = R.error || R.message || `Request failed: ${M.status}`;
      throw new Error(L);
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
  async function d(I, E, M, R) {
    l.value = !0, r.value = null;
    try {
      let L;
      if (!Xn()) {
        const A = Object.fromEntries(E), N = Object.fromEntries(M), V = R ? Array.from(R) : [];
        L = await c(
          `/v2/comfygit/workflow/${I}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: A,
              model_choices: N,
              skipped_packages: V
            })
          }
        );
      }
      return t.value = L, L;
    } catch (L) {
      const A = L instanceof Error ? L.message : "Unknown error occurred";
      throw r.value = A, L;
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
      const R = M instanceof Error ? M.message : "Unknown error occurred";
      throw r.value = R, M;
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
      const R = M instanceof Error ? M.message : "Unknown error occurred";
      throw r.value = R, M;
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
    var R, L, A;
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
      const N = new Map(((R = E.failed) == null ? void 0 : R.map((ae) => [ae.node_id, ae.error])) || []), V = new Map((E.dependency_review_required || []).map((ae) => [ae.node_id, ae]));
      for (let ae = 0; ae < p.nodesToInstall.length; ae++) {
        const ee = p.nodesToInstall[ae], J = N.get(ee), fe = V.get(ee);
        p.nodeInstallProgress.completedNodes.push({
          node_id: ee,
          success: !J && !fe,
          error: J || (fe == null ? void 0 : fe.error),
          dependency_review: fe == null ? void 0 : fe.dependency_review
        });
      }
    }
    p.nodesInstalled = E.nodes_installed, p.dependencyReviews = E.dependency_review_required || [], p.needsRestart = E.nodes_installed.length > 0;
    const M = (((L = E.failed) == null ? void 0 : L.length) || 0) + (((A = E.dependency_review_required) == null ? void 0 : A.length) || 0);
    return M > 0 && (p.installError = `${M} package(s) need attention`), E;
  }
  async function C(I, E, M) {
    w(), p.phase = "resolving", r.value = null;
    const R = Object.fromEntries(E), L = Object.fromEntries(M);
    try {
      const A = await fetch(`/v2/comfygit/workflow/${I}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: R,
          model_choices: L
        })
      });
      if (!A.ok)
        throw new Error(`Request failed: ${A.status}`);
      if (!A.body)
        throw new Error("No response body");
      const N = A.body.getReader(), V = new TextDecoder();
      let ae = "";
      for (; ; ) {
        const { done: ee, value: J } = await N.read();
        if (ee) break;
        ae += V.decode(J, { stream: !0 });
        const fe = ae.split(`

`);
        ae = fe.pop() || "";
        for (const oe of fe) {
          if (!oe.trim()) continue;
          const H = oe.split(`
`);
          let q = "", _e = "";
          for (const se of H)
            se.startsWith("event: ") ? q = se.slice(7) : se.startsWith("data: ") && (_e = se.slice(6));
          if (_e)
            try {
              const se = JSON.parse(_e);
              S(q, se);
            } catch (se) {
              console.warn("Failed to parse SSE event:", se);
            }
        }
      }
    } catch (A) {
      const N = A instanceof Error ? A.message : "Unknown error occurred";
      throw r.value = N, p.error = N, p.phase = "error", A;
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
    const { addToQueue: M } = qn(), R = E.filter((L) => L.url && L.target_path).map((L) => ({
      workflow: I,
      filename: L.filename,
      url: L.url,
      targetPath: L.target_path,
      size: L.size || 0,
      type: "model"
    }));
    return R.length > 0 && M(R), R.length;
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
const Ay = { class: "resolution-stepper" }, zy = { class: "stepper-header" }, Fy = ["onClick"], Vy = {
  key: 0,
  class: "step-icon"
}, By = {
  key: 1,
  class: "step-number"
}, Wy = { class: "step-label" }, Gy = {
  key: 0,
  class: "step-connector"
}, jy = { class: "stepper-content" }, Hy = /* @__PURE__ */ Se({
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
    return (f, v) => (o(), i("div", Ay, [
      s("div", zy, [
        (o(!0), i(F, null, he(e.steps, (p, w) => (o(), i("div", {
          key: p.id,
          class: Ve(["step", {
            active: e.currentStep === p.id,
            completed: l(p.id),
            "in-progress": r(p.id),
            disabled: u(p.id)
          }]),
          onClick: (g) => d(p.id)
        }, [
          s("div", {
            class: Ve(["step-indicator", c(p.id)])
          }, [
            l(p.id) ? (o(), i("span", Vy, "✓")) : (o(), i("span", By, m(w + 1), 1))
          ], 2),
          s("div", Wy, m(p.label), 1),
          w < e.steps.length - 1 ? (o(), i("div", Gy)) : y("", !0)
        ], 10, Fy))), 128))
      ]),
      s("div", jy, [
        rt(f.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), qy = /* @__PURE__ */ Te(Hy, [["__scopeId", "data-v-2a7b3af8"]]), Ky = { class: "item-body" }, Jy = {
  key: 0,
  class: "resolved-state"
}, Qy = { class: "resolved-message" }, Yy = {
  key: 1,
  class: "unresolved"
}, Xy = {
  key: 0,
  class: "installed-packs-section"
}, Zy = { class: "installed-packs-list" }, e1 = ["onClick"], t1 = { class: "installed-pack-name" }, s1 = { class: "installed-pack-source" }, n1 = { class: "action-buttons" }, o1 = /* @__PURE__ */ Se({
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
      class: Ve(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: l.value }])
    }, [
      s("div", Ky, [
        l.value ? (o(), i("div", Jy, [
          s("span", Qy, m(d.value), 1),
          b(De, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (w) => a("clear-choice"))
          }, {
            default: h(() => [...p[4] || (p[4] = [
              x(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : (o(), i("div", Yy, [
          u.value.length > 0 ? (o(), i("div", Xy, [
            p[5] || (p[5] = s("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            s("div", Zy, [
              (o(!0), i(F, null, he(u.value, (w) => (o(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => a("installed-pack-selected", w.package_id)
              }, [
                s("span", t1, m(w.package_id), 1),
                s("span", s1, m(f(w.source)), 1)
              ], 8, e1))), 128))
            ])
          ])) : y("", !0),
          s("div", n1, [
            b(De, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (w) => a("search"))
            }, {
              default: h(() => [...p[6] || (p[6] = [
                x(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            b(De, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (w) => a("manual-entry"))
            }, {
              default: h(() => [...p[7] || (p[7] = [
                x(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(De, {
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
}), a1 = /* @__PURE__ */ Te(o1, [["__scopeId", "data-v-4338b305"]]), l1 = { class: "item-navigator" }, i1 = { class: "nav-item-info" }, r1 = ["title"], c1 = { class: "nav-controls" }, u1 = { class: "nav-arrows" }, d1 = ["disabled"], m1 = ["disabled"], f1 = { class: "nav-position" }, v1 = /* @__PURE__ */ Se({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: t }) {
    const n = t;
    return (a, l) => (o(), i("div", l1, [
      s("div", i1, [
        s("code", {
          class: "item-name",
          title: e.itemName
        }, m(e.itemName), 9, r1)
      ]),
      s("div", c1, [
        s("div", u1, [
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, d1),
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => n("next")),
            title: "Next item"
          }, " → ", 8, m1)
        ]),
        s("span", f1, m(e.currentIndex + 1) + "/" + m(e.totalItems), 1)
      ])
    ]));
  }
}), vc = /* @__PURE__ */ Te(v1, [["__scopeId", "data-v-74af7920"]]), p1 = { class: "node-resolution-step" }, g1 = {
  key: 0,
  class: "auto-resolved-section"
}, h1 = { class: "section-header" }, y1 = { class: "stat-badge" }, w1 = { class: "resolved-packages-list" }, _1 = { class: "package-info" }, k1 = { class: "package-id" }, b1 = { class: "node-count" }, $1 = { class: "package-actions" }, C1 = {
  key: 0,
  class: "status-badge install"
}, x1 = {
  key: 1,
  class: "status-badge skip"
}, S1 = ["onClick"], I1 = {
  key: 1,
  class: "section-divider"
}, E1 = { class: "step-header" }, T1 = { class: "stat-badge" }, M1 = {
  key: 1,
  class: "step-body"
}, P1 = {
  key: 3,
  class: "empty-state"
}, R1 = { class: "node-modal-body" }, D1 = { class: "node-search-results-container" }, N1 = {
  key: 0,
  class: "node-search-results"
}, L1 = { class: "node-result-header" }, U1 = { class: "node-result-title" }, O1 = { class: "node-result-package-id" }, A1 = {
  key: 0,
  class: "node-result-display-name"
}, z1 = {
  key: 0,
  class: "node-result-stats",
  "aria-label": "Package popularity"
}, F1 = {
  key: 0,
  class: "node-result-stat"
}, V1 = {
  key: 1,
  class: "node-result-stat"
}, B1 = {
  key: 0,
  class: "node-result-description"
}, W1 = { class: "node-result-actions" }, G1 = ["onClick"], j1 = ["onClick"], H1 = {
  key: 1,
  class: "node-empty-state"
}, q1 = {
  key: 2,
  class: "node-empty-state"
}, K1 = {
  key: 3,
  class: "node-empty-state"
}, J1 = { class: "node-manual-entry-modal" }, Q1 = { class: "node-modal-body" }, Y1 = { class: "node-modal-actions" }, X1 = /* @__PURE__ */ Se({
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
    const n = e, a = t, { searchNodes: l } = fc(), r = _(0), c = _(!1), u = _(!1), d = _(""), f = _(""), v = _([]), p = _(!1), w = _(!1);
    function g() {
      w.value && ee(), w.value = !1;
    }
    const k = P(() => n.nodes[r.value]), C = P(() => n.nodes.filter((G) => n.nodeChoices.has(G.node_type)).length), S = P(() => n.autoResolvedPackages.filter((G) => !n.skippedPackages.has(G.package_id)).length);
    function $(G) {
      return n.skippedPackages.has(G);
    }
    function I(G) {
      a("package-skip", G);
    }
    function E(G) {
      G >= 0 && G < n.nodes.length && (r.value = G);
    }
    function M() {
      var G;
      for (let ne = r.value + 1; ne < n.nodes.length; ne++) {
        const te = n.nodes[ne];
        if (!((G = n.nodeChoices) != null && G.has(te.node_type))) {
          E(ne);
          return;
        }
      }
    }
    function R() {
      k.value && (a("mark-optional", k.value.node_type), jt(() => M()));
    }
    function L() {
      k.value && (a("skip", k.value.node_type), jt(() => M()));
    }
    function A() {
      k.value && a("clear-choice", k.value.node_type);
    }
    function N() {
      k.value && (d.value = k.value.node_type, v.value = [], c.value = !0, H(d.value));
    }
    function V() {
      f.value = "", u.value = !0;
    }
    function ae(G) {
      k.value && (a("installed-pack-selected", k.value.node_type, G), jt(() => M()));
    }
    function ee() {
      c.value = !1, d.value = "", v.value = [];
    }
    function J() {
      u.value = !1, f.value = "";
    }
    let fe = null;
    function oe() {
      fe && clearTimeout(fe), fe = setTimeout(() => {
        H(d.value);
      }, 300);
    }
    async function H(G) {
      if (!G.trim()) {
        v.value = [];
        return;
      }
      p.value = !0;
      try {
        v.value = await l(G, 10);
      } catch {
        v.value = [];
      } finally {
        p.value = !1;
      }
    }
    function q(G) {
      k.value && (a("manual-entry", k.value.node_type, G.package_id, {
        install_source: "registry",
        version: G.registry_version || null
      }), ee(), jt(() => M()));
    }
    function _e(G) {
      !k.value || !G.repository || (a("manual-entry", k.value.node_type, G.package_id, {
        install_source: "git",
        repository: G.repository
      }), ee(), jt(() => M()));
    }
    function se(G) {
      return !!G.github_stars || !!G.downloads;
    }
    function ve(G) {
      return G ? Intl.NumberFormat("en", {
        notation: "compact",
        maximumFractionDigits: G >= 1e3 ? 1 : 0
      }).format(G) : "";
    }
    function de() {
      !k.value || !f.value.trim() || (a("manual-entry", k.value.node_type, f.value.trim()), J(), jt(() => M()));
    }
    return (G, ne) => {
      var te, Ee;
      return o(), i("div", p1, [
        e.autoResolvedPackages.length > 0 ? (o(), i("div", g1, [
          s("div", h1, [
            ne[6] || (ne[6] = s("div", { class: "section-info" }, [
              s("h4", { class: "section-title" }, "Packages to Install"),
              s("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            s("span", y1, m(S.value) + "/" + m(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          s("div", w1, [
            (o(!0), i(F, null, he(e.autoResolvedPackages, (we) => (o(), i("div", {
              key: we.package_id,
              class: "resolved-package-item"
            }, [
              s("div", _1, [
                s("code", k1, m(we.package_id), 1),
                s("span", b1, m(we.node_types_count) + " node type" + m(we.node_types_count > 1 ? "s" : ""), 1)
              ]),
              s("div", $1, [
                $(we.package_id) ? (o(), i("span", x1, " SKIPPED ")) : (o(), i("span", C1, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (Oe) => I(we.package_id)
                }, m($(we.package_id) ? "Include" : "Skip"), 9, S1)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (o(), i("div", I1)) : y("", !0),
        e.nodes.length > 0 ? (o(), i(F, { key: 2 }, [
          s("div", E1, [
            ne[7] || (ne[7] = s("div", { class: "step-info" }, [
              s("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              s("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            s("span", T1, m(C.value) + "/" + m(e.nodes.length) + " resolved", 1)
          ]),
          k.value ? (o(), D(vc, {
            key: 0,
            "item-name": k.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: ne[0] || (ne[0] = (we) => E(r.value - 1)),
            onNext: ne[1] || (ne[1] = (we) => E(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          k.value ? (o(), i("div", M1, [
            b(a1, {
              "node-type": k.value.node_type,
              "has-multiple-options": !!((te = k.value.options) != null && te.length),
              choice: (Ee = e.nodeChoices) == null ? void 0 : Ee.get(k.value.node_type),
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: R,
              onSkip: L,
              onManualEntry: V,
              onSearch: N,
              onClearChoice: A,
              onInstalledPackSelected: ae
            }, null, 8, ["node-type", "has-multiple-options", "choice", "installed-node-packs"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (o(), i("div", P1, [...ne[8] || (ne[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (o(), D(ls, { to: "body" }, [
          c.value ? (o(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ne[4] || (ne[4] = bt((we) => w.value = !0, ["self"])),
            onMouseup: bt(g, ["self"])
          }, [
            s("div", {
              class: "node-search-modal",
              onMousedown: ne[3] || (ne[3] = (we) => w.value = !1)
            }, [
              s("div", { class: "node-modal-header" }, [
                ne[9] || (ne[9] = s("h4", null, "Search Node Registry", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: ee
                }, "✕")
              ]),
              s("div", R1, [
                b(Pt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": ne[2] || (ne[2] = (we) => d.value = we),
                  placeholder: "Search registry by node type or package name...",
                  onInput: oe
                }, null, 8, ["modelValue"]),
                s("div", D1, [
                  v.value.length > 0 ? (o(), i("div", N1, [
                    (o(!0), i(F, null, he(v.value, (we) => (o(), i("div", {
                      key: we.package_id,
                      class: "node-search-result-item"
                    }, [
                      s("div", L1, [
                        s("div", U1, [
                          s("code", O1, m(we.package_id), 1),
                          we.display_name && we.display_name !== we.package_id ? (o(), i("span", A1, m(we.display_name), 1)) : y("", !0)
                        ]),
                        se(we) ? (o(), i("div", z1, [
                          we.github_stars ? (o(), i("span", F1, " ★ " + m(ve(we.github_stars)), 1)) : y("", !0),
                          we.downloads ? (o(), i("span", V1, " ↓ " + m(ve(we.downloads)), 1)) : y("", !0)
                        ])) : y("", !0)
                      ]),
                      we.description ? (o(), i("div", B1, m(we.description), 1)) : y("", !0),
                      s("div", W1, [
                        we.can_install_registry ? (o(), i("button", {
                          key: 0,
                          type: "button",
                          class: "node-result-action",
                          onClick: (Oe) => q(we)
                        }, " Install from Registry ", 8, G1)) : y("", !0),
                        we.can_install_git ? (o(), i("button", {
                          key: 1,
                          type: "button",
                          class: "node-result-action secondary",
                          onClick: (Oe) => _e(we)
                        }, " Install from GitHub ", 8, j1)) : y("", !0)
                      ])
                    ]))), 128))
                  ])) : p.value ? (o(), i("div", H1, "Searching...")) : d.value ? (o(), i("div", q1, 'No packages found matching "' + m(d.value) + '"', 1)) : (o(), i("div", K1, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (o(), D(ls, { to: "body" }, [
          u.value ? (o(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: bt(J, ["self"])
          }, [
            s("div", J1, [
              s("div", { class: "node-modal-header" }, [
                ne[10] || (ne[10] = s("h4", null, "Enter Package Manually", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: J
                }, "✕")
              ]),
              s("div", Q1, [
                b(Pt, {
                  modelValue: f.value,
                  "onUpdate:modelValue": ne[5] || (ne[5] = (we) => f.value = we),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", Y1, [
                  b(De, {
                    variant: "secondary",
                    onClick: J
                  }, {
                    default: h(() => [...ne[11] || (ne[11] = [
                      x("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(De, {
                    variant: "primary",
                    disabled: !f.value.trim(),
                    onClick: de
                  }, {
                    default: h(() => [...ne[12] || (ne[12] = [
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
}), Z1 = /* @__PURE__ */ Te(X1, [["__scopeId", "data-v-a85bb4b7"]]), ew = /* @__PURE__ */ Se({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = P(() => t.confidence >= 0.9 ? "high" : t.confidence >= 0.7 ? "medium" : "low"), a = P(() => `confidence-${n.value}`), l = P(() => t.showPercentage ? `${Math.round(t.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (r, c) => (o(), i("span", {
      class: Ve(["confidence-badge", a.value, e.size])
    }, m(l.value), 3));
  }
}), tw = /* @__PURE__ */ Te(ew, [["__scopeId", "data-v-17ec4b80"]]), sw = { class: "node-info" }, nw = { class: "node-info-text" }, ow = { class: "item-body" }, aw = {
  key: 0,
  class: "resolved-state"
}, lw = {
  key: 1,
  class: "multiple-options"
}, iw = { class: "options-list" }, rw = ["onClick"], cw = ["name", "value", "checked", "onChange"], uw = { class: "option-content" }, dw = { class: "option-header" }, mw = { class: "option-filename" }, fw = { class: "option-meta" }, vw = { class: "option-size" }, pw = { class: "option-category" }, gw = { class: "option-path" }, hw = { class: "action-buttons" }, yw = {
  key: 2,
  class: "unresolved"
}, ww = { class: "action-buttons" }, _w = /* @__PURE__ */ Se({
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
      class: Ve(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      s("div", sw, [
        s("span", nw, [
          f[7] || (f[7] = x("Used by: ", -1)),
          s("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (o(), i("span", {
          key: 0,
          class: Ve(["status-badge", r.value])
        }, m(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", ow, [
        l.value ? (o(), i("div", aw, [
          b(De, {
            variant: "ghost",
            size: "sm",
            onClick: f[0] || (f[0] = (v) => a("clear-choice"))
          }, {
            default: h(() => [...f[8] || (f[8] = [
              x(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (o(), i("div", lw, [
          f[12] || (f[12] = s("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          s("div", iw, [
            (o(!0), i(F, null, he(e.options, (v, p) => (o(), i("label", {
              key: v.model.hash,
              class: Ve(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (w) => c(p)
            }, [
              s("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (w) => c(p)
              }, null, 40, cw),
              s("div", uw, [
                s("div", dw, [
                  s("span", mw, m(v.model.filename), 1),
                  b(tw, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                s("div", fw, [
                  s("span", vw, m(u(v.model.size)), 1),
                  s("span", pw, m(v.model.category), 1)
                ]),
                s("div", gw, m(v.model.relative_path), 1)
              ])
            ], 10, rw))), 128))
          ]),
          s("div", hw, [
            b(De, {
              variant: "ghost",
              size: "sm",
              onClick: f[1] || (f[1] = (v) => a("search"))
            }, {
              default: h(() => [...f[9] || (f[9] = [
                x(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(De, {
              variant: "ghost",
              size: "sm",
              onClick: f[2] || (f[2] = (v) => a("download-url"))
            }, {
              default: h(() => [...f[10] || (f[10] = [
                x(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(De, {
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
        ])) : (o(), i("div", yw, [
          f[16] || (f[16] = s("div", { class: "unresolved-message" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "Model not found in workspace")
          ], -1)),
          s("div", ww, [
            b(De, {
              variant: "primary",
              size: "sm",
              onClick: f[4] || (f[4] = (v) => a("search"))
            }, {
              default: h(() => [...f[13] || (f[13] = [
                x(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(De, {
              variant: "secondary",
              size: "sm",
              onClick: f[5] || (f[5] = (v) => a("download-url"))
            }, {
              default: h(() => [...f[14] || (f[14] = [
                x(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(De, {
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
}), kw = /* @__PURE__ */ Te(_w, [["__scopeId", "data-v-8a82fefa"]]), bw = { class: "model-resolution-step" }, $w = { class: "step-header" }, Cw = { class: "step-info" }, xw = { class: "step-title" }, Sw = { class: "step-description" }, Iw = { class: "stat-badge" }, Ew = {
  key: 1,
  class: "step-body"
}, Tw = {
  key: 2,
  class: "empty-state"
}, Mw = { class: "model-search-modal" }, Pw = { class: "model-modal-body" }, Rw = {
  key: 0,
  class: "model-search-results"
}, Dw = ["onClick"], Nw = { class: "model-result-header" }, Lw = { class: "model-result-filename" }, Uw = { class: "model-result-meta" }, Ow = { class: "model-result-category" }, Aw = { class: "model-result-size" }, zw = {
  key: 0,
  class: "model-result-path"
}, Fw = {
  key: 1,
  class: "model-no-results"
}, Vw = {
  key: 2,
  class: "model-searching"
}, Bw = { class: "model-download-url-modal" }, Ww = { class: "model-modal-body" }, Gw = { class: "model-input-group" }, jw = { class: "model-input-group" }, Hw = { class: "model-modal-actions" }, qw = /* @__PURE__ */ Se({
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
      var ve;
      return se && ((ve = n[se]) == null ? void 0 : ve[0]) || null;
    }
    const l = e, r = t, c = _(0), u = _(!1), d = _(!1), f = _(""), v = _(""), p = _(""), w = _([]), g = _(!1), k = P(() => l.models[c.value]), C = P(() => l.models.some((se) => se.is_download_intent)), S = P(() => l.models.filter(
      (se) => l.modelChoices.has(se.filename) || se.is_download_intent
    ).length), $ = P(() => {
      var ve;
      if (!k.value) return "";
      const se = a((ve = k.value.reference) == null ? void 0 : ve.node_type);
      return se ? `${se}/${k.value.filename}` : "";
    }), I = P(() => {
      var ve;
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
      return k.value.is_download_intent ? "download" : (ve = k.value.options) != null && ve.length ? "ambiguous" : "not-found";
    }), E = P(() => {
      var ve, de;
      if (!k.value) return;
      const se = l.modelChoices.get(k.value.filename);
      if (se)
        switch (se.action) {
          case "select":
            return (ve = se.selected_model) != null && ve.filename ? `→ ${se.selected_model.filename}` : "Selected";
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
    function M(se) {
      se >= 0 && se < l.models.length && (c.value = se);
    }
    function R() {
      var se;
      for (let ve = c.value + 1; ve < l.models.length; ve++) {
        const de = l.models[ve];
        if (!de.is_download_intent && !((se = l.modelChoices) != null && se.has(de.filename))) {
          M(ve);
          return;
        }
      }
    }
    function L() {
      k.value && (r("mark-optional", k.value.filename), jt(() => R()));
    }
    function A() {
      k.value && (r("skip", k.value.filename), jt(() => R()));
    }
    function N(se) {
      k.value && (r("option-selected", k.value.filename, se), jt(() => R()));
    }
    function V() {
      k.value && r("clear-choice", k.value.filename);
    }
    function ae() {
      k.value && (f.value = k.value.filename, u.value = !0);
    }
    function ee() {
      k.value && (v.value = k.value.download_source || "", p.value = k.value.target_path || $.value, d.value = !0);
    }
    function J() {
      u.value = !1, f.value = "", w.value = [];
    }
    function fe() {
      d.value = !1, v.value = "", p.value = "";
    }
    function oe() {
      g.value = !0, setTimeout(() => {
        g.value = !1;
      }, 300);
    }
    function H(se) {
      k.value && (J(), jt(() => R()));
    }
    function q() {
      !k.value || !v.value.trim() || (r("download-url", k.value.filename, v.value.trim(), p.value.trim() || void 0), fe(), jt(() => R()));
    }
    function _e(se) {
      if (!se) return "Unknown";
      const ve = se / (1024 * 1024 * 1024);
      return ve >= 1 ? `${ve.toFixed(2)} GB` : `${(se / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (se, ve) => {
      var de, G, ne;
      return o(), i("div", bw, [
        s("div", $w, [
          s("div", Cw, [
            s("h3", xw, m(C.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            s("p", Sw, m(C.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          s("span", Iw, m(S.value) + "/" + m(e.models.length) + " resolved", 1)
        ]),
        k.value ? (o(), D(vc, {
          key: 0,
          "item-name": k.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: ve[0] || (ve[0] = (te) => M(c.value - 1)),
          onNext: ve[1] || (ve[1] = (te) => M(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        k.value ? (o(), i("div", Ew, [
          b(kw, {
            filename: k.value.filename,
            "node-type": ((de = k.value.reference) == null ? void 0 : de.node_type) || "Unknown",
            "has-multiple-options": !!((G = k.value.options) != null && G.length),
            options: k.value.options,
            choice: (ne = e.modelChoices) == null ? void 0 : ne.get(k.value.filename),
            status: I.value,
            "status-label": E.value,
            onMarkOptional: L,
            onSkip: A,
            onDownloadUrl: ee,
            onSearch: ae,
            onOptionSelected: N,
            onClearChoice: V
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), i("div", Tw, [...ve[5] || (ve[5] = [
          s("p", null, "No models need resolution.", -1)
        ])])),
        (o(), D(ls, { to: "body" }, [
          u.value ? (o(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: bt(J, ["self"])
          }, [
            s("div", Mw, [
              s("div", { class: "model-modal-header" }, [
                ve[6] || (ve[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: J
                }, "✕")
              ]),
              s("div", Pw, [
                b(Pt, {
                  modelValue: f.value,
                  "onUpdate:modelValue": ve[2] || (ve[2] = (te) => f.value = te),
                  placeholder: "Search by filename, category...",
                  onInput: oe
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (o(), i("div", Rw, [
                  (o(!0), i(F, null, he(w.value, (te) => (o(), i("div", {
                    key: te.hash,
                    class: "model-search-result-item",
                    onClick: (Ee) => H()
                  }, [
                    s("div", Nw, [
                      s("code", Lw, m(te.filename), 1)
                    ]),
                    s("div", Uw, [
                      s("span", Ow, m(te.category), 1),
                      s("span", Aw, m(_e(te.size)), 1)
                    ]),
                    te.relative_path ? (o(), i("div", zw, m(te.relative_path), 1)) : y("", !0)
                  ], 8, Dw))), 128))
                ])) : f.value && !g.value ? (o(), i("div", Fw, ' No models found matching "' + m(f.value) + '" ', 1)) : y("", !0),
                g.value ? (o(), i("div", Vw, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (o(), D(ls, { to: "body" }, [
          d.value ? (o(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: bt(fe, ["self"])
          }, [
            s("div", Bw, [
              s("div", { class: "model-modal-header" }, [
                ve[7] || (ve[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: fe
                }, "✕")
              ]),
              s("div", Ww, [
                s("div", Gw, [
                  ve[8] || (ve[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  b(Pt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": ve[3] || (ve[3] = (te) => v.value = te),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", jw, [
                  ve[9] || (ve[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  b(Pt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": ve[4] || (ve[4] = (te) => p.value = te),
                    placeholder: $.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", Hw, [
                  b(De, {
                    variant: "secondary",
                    onClick: fe
                  }, {
                    default: h(() => [...ve[10] || (ve[10] = [
                      x("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(De, {
                    variant: "primary",
                    disabled: !v.value.trim() || !p.value.trim(),
                    onClick: q
                  }, {
                    default: h(() => [...ve[11] || (ve[11] = [
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
}), Kw = /* @__PURE__ */ Te(qw, [["__scopeId", "data-v-5c700bfa"]]), Jw = {
  key: 0,
  class: "dependency-preview"
}, Qw = { class: "intro" }, Yw = { class: "summary-strip" }, Xw = { class: "summary-item" }, Zw = { class: "summary-item danger" }, e0 = { class: "summary-item" }, t0 = { class: "summary-item" }, s0 = { class: "summary-item" }, n0 = {
  key: 0,
  class: "requirements"
}, o0 = { class: "chips" }, a0 = { class: "changes" }, l0 = {
  key: 0,
  class: "empty-state"
}, i0 = {
  key: 1,
  class: "change-list"
}, r0 = { class: "package-name" }, c0 = { class: "change-kind" }, u0 = { class: "version current" }, d0 = { class: "version proposed" }, m0 = /* @__PURE__ */ Se({
  __name: "DependencyReviewPreviewModal",
  props: {
    loading: { type: Boolean },
    error: {},
    preview: {}
  },
  emits: ["close"],
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
    return (u, d) => (o(), D(Mt, {
      title: "Dependency Review",
      size: "lg",
      loading: e.loading,
      error: e.error || void 0,
      onClose: d[1] || (d[1] = (f) => a("close"))
    }, {
      body: h(() => [
        e.preview ? (o(), i("div", Jw, [
          s("div", Qw, [
            s("h3", null, m(e.preview.node_name), 1),
            d[2] || (d[2] = s("p", null, " Installing this node package would change Python dependencies in the environment. Review is informational for now; applying risky changes is not enabled yet. ", -1))
          ]),
          s("div", Yw, [
            s("div", Xw, [
              s("strong", null, m(e.preview.summary.total), 1),
              d[3] || (d[3] = s("span", null, "Total", -1))
            ]),
            s("div", Zw, [
              s("strong", null, m(e.preview.summary.downgraded), 1),
              d[4] || (d[4] = s("span", null, "Downgraded", -1))
            ]),
            s("div", e0, [
              s("strong", null, m(e.preview.summary.upgraded), 1),
              d[5] || (d[5] = s("span", null, "Upgraded", -1))
            ]),
            s("div", t0, [
              s("strong", null, m(e.preview.summary.added), 1),
              d[6] || (d[6] = s("span", null, "Added", -1))
            ]),
            s("div", s0, [
              s("strong", null, m(e.preview.summary.removed), 1),
              d[7] || (d[7] = s("span", null, "Removed", -1))
            ])
          ]),
          e.preview.requirements.length > 0 ? (o(), i("div", n0, [
            d[8] || (d[8] = s("div", { class: "section-title" }, "Node Requirements", -1)),
            s("div", o0, [
              (o(!0), i(F, null, he(e.preview.requirements, (f) => (o(), i("code", {
                key: f,
                class: "chip"
              }, m(f), 1))), 128))
            ])
          ])) : y("", !0),
          s("div", a0, [
            d[10] || (d[10] = s("div", { class: "section-title" }, "Proposed Package Changes", -1)),
            e.preview.changes.length === 0 ? (o(), i("div", l0, " No package version changes found. ")) : (o(), i("div", i0, [
              (o(!0), i(F, null, he(r.value, (f) => (o(), i("div", {
                key: `${f.name}-${f.kind}`,
                class: Ve(["change-row", f.kind])
              }, [
                s("code", r0, m(f.name), 1),
                s("span", c0, m(c(f.kind)), 1),
                s("span", u0, m(f.current || "not installed"), 1),
                d[9] || (d[9] = s("span", { class: "arrow" }, "→", -1)),
                s("span", d0, m(f.proposed || "removed"), 1)
              ], 2))), 128))
            ]))
          ])
        ])) : y("", !0)
      ]),
      footer: h(() => [
        b(De, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (f) => a("close"))
        }, {
          default: h(() => [...d[11] || (d[11] = [
            x("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["loading", "error"]));
  }
}), pc = /* @__PURE__ */ Te(m0, [["__scopeId", "data-v-c63d4ed6"]]), f0 = { class: "applying-step" }, v0 = {
  key: 0,
  class: "phase-content"
}, p0 = {
  key: 1,
  class: "phase-content"
}, g0 = { class: "phase-description" }, h0 = { class: "overall-progress" }, y0 = { class: "progress-bar" }, w0 = { class: "progress-label" }, _0 = { class: "install-list" }, k0 = { class: "install-icon" }, b0 = { key: 0 }, $0 = {
  key: 1,
  class: "spinner"
}, C0 = { key: 2 }, x0 = { key: 3 }, S0 = {
  key: 0,
  class: "install-error"
}, I0 = {
  key: 2,
  class: "phase-content"
}, E0 = { class: "phase-header" }, T0 = { class: "phase-title" }, M0 = { class: "completion-summary" }, P0 = {
  key: 0,
  class: "summary-item success"
}, R0 = { class: "summary-text" }, D0 = {
  key: 1,
  class: "summary-item success"
}, N0 = { class: "summary-text" }, L0 = {
  key: 2,
  class: "summary-item success"
}, U0 = { class: "summary-text" }, O0 = {
  key: 3,
  class: "summary-item error"
}, A0 = { class: "summary-text" }, z0 = {
  key: 4,
  class: "summary-item warning"
}, F0 = { class: "summary-text" }, V0 = {
  key: 5,
  class: "failed-list"
}, B0 = { class: "failed-node-id" }, W0 = { class: "failed-error" }, G0 = {
  key: 6,
  class: "failed-list dependency-review-list"
}, j0 = { class: "failed-node-id" }, H0 = ["onClick"], q0 = {
  key: 8,
  class: "summary-item success"
}, K0 = { class: "summary-text" }, J0 = {
  key: 9,
  class: "summary-note"
}, Q0 = {
  key: 10,
  class: "restart-prompt"
}, Y0 = {
  key: 3,
  class: "phase-content error"
}, X0 = { class: "error-message" }, Z0 = /* @__PURE__ */ Se({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const t = e, { previewNodeDependencyChanges: n } = ft(), a = P(() => {
      var A, N;
      const R = ((A = t.progress.nodeInstallProgress) == null ? void 0 : A.totalNodes) || t.progress.nodesToInstall.length;
      if (!R) return 0;
      const L = ((N = t.progress.nodeInstallProgress) == null ? void 0 : N.completedNodes.length) ?? 0;
      return Math.round(L / R * 100);
    }), l = P(() => {
      var R;
      return ((R = t.progress.nodeInstallProgress) == null ? void 0 : R.completedNodes.filter((L) => !L.success && !L.dependency_review)) || [];
    }), r = P(() => {
      var R;
      return ((R = t.progress.nodeInstallProgress) == null ? void 0 : R.completedNodes.filter((L) => L.dependency_review)) || [];
    }), c = P(() => l.value.length > 0 || r.value.length > 0), u = P(() => t.progress.nodesInstalled.length), d = P(() => {
      var R;
      return ((R = t.progress.nodesMarkedOptional) == null ? void 0 : R.length) || 0;
    }), f = P(() => {
      var R;
      return ((R = t.progress.nodesMapped) == null ? void 0 : R.length) || 0;
    }), v = P(() => t.progress.completedFiles.length > 0), p = P(() => u.value > 0 || d.value > 0 || f.value > 0 || v.value || !!t.progress.needsRestart), w = P(() => p.value ? "Workflow dependencies resolved" : "No changes applied");
    function g(R, L) {
      var N, V;
      const A = (N = t.progress.nodeInstallProgress) == null ? void 0 : N.completedNodes.find((ae) => ae.node_id === R);
      return A ? A.success ? "complete" : "failed" : ((V = t.progress.nodeInstallProgress) == null ? void 0 : V.currentIndex) === L ? "installing" : "pending";
    }
    function k(R) {
      var L, A;
      return (A = (L = t.progress.nodeInstallProgress) == null ? void 0 : L.completedNodes.find((N) => N.node_id === R)) == null ? void 0 : A.error;
    }
    const C = _(!1), S = _(!1), $ = _(null), I = _(null);
    async function E(R) {
      var A, N;
      const L = ((A = R.dependency_review) == null ? void 0 : A.identifier) || R.node_id;
      C.value = !0, S.value = !0, $.value = null, I.value = null;
      try {
        if ((N = R.dependency_review) != null && N.preview) {
          I.value = R.dependency_review.preview;
          return;
        }
        const V = await n({ id: L });
        I.value = V.preview, V.preview.success || ($.value = V.preview.error || "Unable to generate dependency preview");
      } catch (V) {
        $.value = V instanceof Error ? V.message : "Unable to generate dependency preview";
      } finally {
        S.value = !1;
      }
    }
    function M() {
      C.value = !1, S.value = !1, $.value = null, I.value = null;
    }
    return (R, L) => {
      var A, N, V, ae;
      return o(), i("div", f0, [
        e.progress.phase === "resolving" ? (o(), i("div", v0, [...L[2] || (L[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (o(), i("div", p0, [
          L[3] || (L[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", g0, " Installing " + m((((A = e.progress.nodeInstallProgress) == null ? void 0 : A.currentIndex) ?? 0) + 1) + " of " + m(((N = e.progress.nodeInstallProgress) == null ? void 0 : N.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", h0, [
            s("div", y0, [
              s("div", {
                class: "progress-fill",
                style: Vt({ width: `${a.value}%` })
              }, null, 4)
            ]),
            s("span", w0, m(((V = e.progress.nodeInstallProgress) == null ? void 0 : V.completedNodes.length) ?? 0) + " / " + m(((ae = e.progress.nodeInstallProgress) == null ? void 0 : ae.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", _0, [
            (o(!0), i(F, null, he(e.progress.nodesToInstall, (ee, J) => (o(), i("div", {
              key: ee,
              class: Ve(["install-item", g(ee, J)])
            }, [
              s("span", k0, [
                g(ee, J) === "pending" ? (o(), i("span", b0, "○")) : g(ee, J) === "installing" ? (o(), i("span", $0, "◌")) : g(ee, J) === "complete" ? (o(), i("span", C0, "✓")) : g(ee, J) === "failed" ? (o(), i("span", x0, "✗")) : y("", !0)
              ]),
              s("code", null, m(ee), 1),
              k(ee) ? (o(), i("span", S0, m(k(ee)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (o(), i("div", I0, [
          s("div", E0, [
            s("span", {
              class: Ve(["phase-icon", c.value ? "warning" : "success"])
            }, m(c.value ? "⚠" : "✓"), 3),
            s("h3", T0, m(c.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          s("div", M0, [
            e.progress.nodesInstalled.length > 0 ? (o(), i("div", P0, [
              L[4] || (L[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", R0, m(e.progress.nodesInstalled.length) + " node package" + m(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            d.value > 0 ? (o(), i("div", D0, [
              L[5] || (L[5] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", N0, m(d.value) + " node type" + m(d.value > 1 ? "s" : "") + " marked optional", 1)
            ])) : y("", !0),
            f.value > 0 ? (o(), i("div", L0, [
              L[6] || (L[6] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", U0, m(f.value) + " node mapping" + m(f.value > 1 ? "s" : "") + " changed", 1)
            ])) : y("", !0),
            l.value.length > 0 ? (o(), i("div", O0, [
              L[7] || (L[7] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", A0, m(l.value.length) + " package" + m(l.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            r.value.length > 0 ? (o(), i("div", z0, [
              L[8] || (L[8] = s("span", { class: "summary-icon" }, "⚠", -1)),
              s("span", F0, m(r.value.length) + " package" + m(r.value.length > 1 ? "s" : "") + " need dependency review", 1)
            ])) : y("", !0),
            l.value.length > 0 ? (o(), i("div", V0, [
              (o(!0), i(F, null, he(l.value, (ee) => (o(), i("div", {
                key: ee.node_id,
                class: "failed-item"
              }, [
                s("code", B0, m(ee.node_id), 1),
                s("span", W0, m(ee.error), 1)
              ]))), 128))
            ])) : y("", !0),
            r.value.length > 0 ? (o(), i("div", G0, [
              (o(!0), i(F, null, he(r.value, (ee) => (o(), i("div", {
                key: ee.node_id,
                class: "failed-item dependency-review-item"
              }, [
                s("code", j0, m(ee.node_id), 1),
                L[9] || (L[9] = s("span", { class: "failed-error" }, "Dependency changes require review before install.", -1)),
                s("button", {
                  class: "review-button",
                  onClick: (J) => E(ee)
                }, " View Changes ", 8, H0)
              ]))), 128))
            ])) : y("", !0),
            l.value.length > 0 ? (o(), i("button", {
              key: 7,
              class: "retry-button",
              onClick: L[0] || (L[0] = (ee) => R.$emit("retry-failed"))
            }, " Retry Failed (" + m(l.value.length) + ") ", 1)) : y("", !0),
            c.value ? y("", !0) : (o(), i("div", q0, [
              L[10] || (L[10] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", K0, m(w.value), 1)
            ])),
            v.value ? (o(), i("p", J0, "Model downloads will continue in the background.")) : y("", !0),
            e.progress.needsRestart ? (o(), i("div", Q0, [
              L[11] || (L[11] = s("div", { class: "restart-warning" }, [
                s("span", { class: "warning-icon" }, "⚠"),
                s("div", { class: "warning-content" }, [
                  s("strong", null, "Restart Required"),
                  s("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              s("button", {
                class: "restart-button",
                onClick: L[1] || (L[1] = (ee) => R.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : y("", !0)
          ])
        ])) : e.progress.phase === "error" ? (o(), i("div", Y0, [
          L[12] || (L[12] = s("div", { class: "phase-header" }, [
            s("span", { class: "phase-icon error" }, "✗"),
            s("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          s("p", X0, m(e.progress.error), 1)
        ])) : y("", !0),
        C.value ? (o(), D(pc, {
          key: 4,
          loading: S.value,
          error: $.value,
          preview: I.value,
          onClose: M
        }, null, 8, ["loading", "error", "preview"])) : y("", !0)
      ]);
    };
  }
}), e_ = /* @__PURE__ */ Te(Z0, [["__scopeId", "data-v-9c5b21c5"]]), t_ = {
  key: 0,
  class: "loading-state"
}, s_ = {
  key: 1,
  class: "wizard-content"
}, n_ = {
  key: 0,
  class: "step-content"
}, o_ = { class: "analysis-summary" }, a_ = { class: "analysis-header" }, l_ = { class: "summary-description" }, i_ = { class: "stats-grid" }, r_ = { class: "stat-card" }, c_ = { class: "stat-items" }, u_ = {
  key: 0,
  class: "stat-item success"
}, d_ = { class: "stat-count" }, m_ = {
  key: 1,
  class: "stat-item info"
}, f_ = { class: "stat-count" }, v_ = {
  key: 2,
  class: "stat-item warning"
}, p_ = { class: "stat-count" }, g_ = {
  key: 3,
  class: "stat-item warning"
}, h_ = { class: "stat-count" }, y_ = {
  key: 4,
  class: "stat-item warning"
}, w_ = { class: "stat-count" }, __ = {
  key: 5,
  class: "stat-item error"
}, k_ = { class: "stat-count" }, b_ = { class: "stat-card" }, $_ = { class: "stat-items" }, C_ = { class: "stat-item success" }, x_ = { class: "stat-count" }, S_ = {
  key: 0,
  class: "stat-item info"
}, I_ = { class: "stat-count" }, E_ = {
  key: 1,
  class: "stat-item warning"
}, T_ = { class: "stat-count" }, M_ = {
  key: 2,
  class: "stat-item warning"
}, P_ = { class: "stat-count" }, R_ = {
  key: 3,
  class: "stat-item error"
}, D_ = { class: "stat-count" }, N_ = {
  key: 0,
  class: "status-message warning"
}, L_ = { class: "status-text" }, U_ = {
  key: 1,
  class: "status-message warning"
}, O_ = { class: "status-text" }, A_ = {
  key: 2,
  class: "status-message info"
}, z_ = { class: "status-text" }, F_ = {
  key: 3,
  class: "status-message info"
}, V_ = { class: "status-text" }, B_ = {
  key: 4,
  class: "status-message info"
}, W_ = { class: "status-text" }, G_ = {
  key: 5,
  class: "status-message warning"
}, j_ = { class: "status-text" }, H_ = {
  key: 6,
  class: "status-message success"
}, q_ = {
  key: 7,
  class: "category-mismatch-section"
}, K_ = { class: "mismatch-list" }, J_ = { class: "mismatch-path" }, Q_ = { class: "mismatch-target" }, Y_ = {
  key: 8,
  class: "category-mismatch-section"
}, X_ = { class: "mismatch-list" }, Z_ = { class: "mismatch-path" }, ek = { class: "status-text" }, tk = {
  key: 1,
  class: "step-content node-step-content"
}, sk = {
  key: 2,
  class: "step-content package-step-content"
}, nk = { class: "package-step-header" }, ok = { class: "stat-badge" }, ak = {
  key: 0,
  class: "package-section"
}, lk = { class: "package-section-header" }, ik = { class: "package-section-title" }, rk = { class: "stat-badge" }, ck = { class: "package-list" }, uk = { class: "package-info" }, dk = { class: "item-name" }, mk = { class: "package-meta" }, fk = { class: "package-actions" }, vk = {
  key: 0,
  class: "choice-badge install"
}, pk = {
  key: 1,
  class: "choice-badge skip"
}, gk = {
  key: 1,
  class: "community-node-section"
}, hk = { class: "community-node-header" }, yk = { class: "community-node-title" }, wk = { class: "community-node-list" }, _k = { class: "community-node-info" }, kk = { class: "community-node-heading" }, bk = { class: "item-name" }, $k = { class: "community-node-package" }, Ck = { class: "community-node-meta" }, xk = { class: "community-node-guidance" }, Sk = { key: 0 }, Ik = {
  key: 0,
  class: "community-node-selection"
}, Ek = { class: "community-selected-label" }, Tk = {
  key: 1,
  class: "community-node-actions"
}, Mk = {
  key: 4,
  class: "step-content"
}, Pk = { class: "review-summary" }, Rk = { class: "review-stats" }, Dk = { class: "review-stat" }, Nk = { class: "stat-value" }, Lk = { class: "review-stat" }, Uk = { class: "stat-value" }, Ok = { class: "review-stat" }, Ak = { class: "stat-value" }, zk = { class: "review-stat" }, Fk = { class: "stat-value" }, Vk = {
  key: 0,
  class: "review-section"
}, Bk = { class: "section-title" }, Wk = { class: "review-items" }, Gk = { class: "item-name" }, jk = { class: "item-choice" }, Hk = {
  key: 0,
  class: "choice-badge install"
}, qk = {
  key: 1,
  class: "choice-badge skip"
}, Kk = {
  key: 1,
  class: "review-section"
}, Jk = { class: "section-title" }, Qk = { class: "review-items" }, Yk = { class: "item-name" }, Xk = { class: "item-choice" }, Zk = {
  key: 0,
  class: "choice-badge install"
}, eb = {
  key: 1,
  class: "choice-badge optional"
}, tb = {
  key: 2,
  class: "choice-badge skip"
}, sb = {
  key: 2,
  class: "review-section"
}, nb = { class: "section-title" }, ob = { class: "review-items" }, ab = { class: "item-name" }, lb = { class: "item-choice" }, ib = {
  key: 0,
  class: "choice-badge install"
}, rb = {
  key: 1,
  class: "choice-badge mapped"
}, cb = {
  key: 2,
  class: "choice-badge optional"
}, ub = {
  key: 3,
  class: "choice-badge skip"
}, db = {
  key: 1,
  class: "choice-badge pending"
}, mb = {
  key: 3,
  class: "review-section"
}, fb = { class: "section-title" }, vb = { class: "review-items download-details" }, pb = { class: "download-info" }, gb = { class: "item-name" }, hb = { class: "download-meta" }, yb = { class: "download-path" }, wb = ["title"], _b = {
  key: 4,
  class: "review-section"
}, kb = { class: "section-title" }, bb = { class: "review-items" }, $b = { class: "item-name" }, Cb = { class: "item-choice" }, xb = {
  key: 0,
  class: "choice-badge install"
}, Sb = {
  key: 1,
  class: "choice-badge download"
}, Ib = {
  key: 2,
  class: "choice-badge optional"
}, Eb = {
  key: 3,
  class: "choice-badge skip"
}, Tb = {
  key: 4,
  class: "choice-badge skip"
}, Mb = {
  key: 1,
  class: "choice-badge download"
}, Pb = {
  key: 2,
  class: "choice-badge pending"
}, Rb = {
  key: 5,
  class: "no-choices"
}, Db = /* @__PURE__ */ Se({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const n = e, a = t, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: f } = fc(), { loadPendingDownloads: v } = qn(), { openFileLocation: p, queueNodeInstall: w, getNodes: g } = ft(), k = _(null), C = _([]), S = _(!1), $ = _(!1), I = _(null), E = _("analysis"), M = _([]), R = _(/* @__PURE__ */ new Map()), L = _(/* @__PURE__ */ new Map()), A = _(/* @__PURE__ */ new Set()), N = P(() => {
      const Z = [
        { id: "analysis", label: "Analysis" }
      ];
      return _e.value && Z.push({ id: "nodes", label: "Nodes" }), ne.value && Z.push({ id: "packages", label: "Packages" }), se.value && Z.push({ id: "models", label: "Models" }), Z.push({ id: "review", label: "Review" }), E.value === "applying" && Z.push({ id: "applying", label: "Applying" }), Z;
    });
    P(() => k.value ? k.value.stats.needs_user_input : !1);
    const V = P(() => H.value.filter(
      (Z) => !R.value.has(Z.reference.node_type)
    ).length), ae = P(() => le.value.filter(
      (U) => !R.value.has(U.node_type)
    ).length + Me.value.length + V.value), ee = P(() => k.value ? k.value.nodes.unresolved.filter(
      (Z) => !R.value.has(Z.reference.node_type)
    ).length : 0), J = P(() => k.value ? k.value.nodes.ambiguous.filter(
      (Z) => !R.value.has(Z.reference.node_type)
    ).length : 0), fe = P(() => k.value ? k.value.nodes.version_gated || [] : []), oe = P(() => k.value ? k.value.nodes.uninstallable || [] : []), H = P(() => oe.value.filter((Z) => {
      var U;
      return !!((U = Z.package) != null && U.package_id);
    })), q = P(() => fe.value.length > 0), _e = P(() => k.value ? k.value.nodes.unresolved.length > 0 || k.value.nodes.ambiguous.length > 0 || Ie.value.length > 0 : !1), se = P(() => k.value ? k.value.models.unresolved.length > 0 || k.value.models.ambiguous.length > 0 : !1), ve = P(() => k.value ? k.value.stats.download_intents > 0 : !1), de = P(() => k.value ? k.value.stats.nodes_needing_installation > 0 : !1), G = P(() => H.value.length > 0), ne = P(() => de.value || G.value), te = P(() => k.value ? k.value.nodes.resolved.length : 0), Ee = P(() => k.value ? k.value.models.resolved.filter((Z) => Z.has_category_mismatch) : []), we = P(() => Ee.value.length > 0), Oe = P(() => _e.value ? "nodes" : ne.value ? "packages" : se.value ? "models" : "review"), Ne = P(() => {
      if (!k.value) return [];
      const Z = k.value.nodes.resolved.filter((ie) => !ie.is_installed), U = /* @__PURE__ */ new Set();
      return Z.filter((ie) => U.has(ie.package.package_id) ? !1 : (U.add(ie.package.package_id), !0));
    }), $e = P(() => {
      if (!k.value) return [];
      const Z = k.value.nodes.resolved.filter((ie) => !ie.is_installed), U = /* @__PURE__ */ new Map();
      for (const ie of Z) {
        const Xe = U.get(ie.package.package_id);
        Xe ? Xe.node_types_count++ : U.set(ie.package.package_id, {
          package_id: ie.package.package_id,
          title: ie.package.title,
          node_types_count: 1
        });
      }
      return Array.from(U.values());
    }), Ae = P(() => $e.value.filter((Z) => !A.value.has(Z.package_id)).length), pe = P(() => $e.value.length + H.value.length), ge = P(() => {
      const Z = H.value.filter(
        (U) => R.value.has(U.reference.node_type)
      ).length;
      return $e.value.length + Z;
    }), T = P(() => Ne.value.filter((Z) => !A.value.has(Z.package.package_id))), O = P(() => k.value ? k.value.models.resolved.filter(
      (Z) => Z.match_type === "download_intent" || Z.match_type === "property_download_intent"
    ).map((Z) => ({
      filename: Z.reference.widget_value,
      reference: Z.reference,
      is_download_intent: !0,
      resolved_model: Z.model,
      download_source: Z.download_source,
      target_path: Z.target_path
    })) : []), le = P(() => {
      if (!k.value) return [];
      const Z = Ie.value.map((Xe) => ({
        node_type: Xe.reference.node_type,
        reason: "saved_mapping",
        is_unresolved: !1,
        options: void 0
      })), U = k.value.nodes.unresolved.map((Xe) => ({
        node_type: Xe.reference.node_type,
        reason: Xe.reason,
        is_unresolved: !0,
        options: void 0
      })), ie = k.value.nodes.ambiguous.map((Xe) => ({
        node_type: Xe.reference.node_type,
        has_multiple_options: !0,
        options: Xe.options.map((at) => ({
          package_id: at.package.package_id,
          title: at.package.title,
          match_confidence: at.match_confidence,
          match_type: at.match_type,
          is_installed: at.is_installed
        }))
      }));
      return [...Z, ...U, ...ie];
    }), Ie = P(() => k.value ? k.value.nodes.resolved.filter(
      (Z) => {
        var U;
        return ((U = Z.saved_choice) == null ? void 0 : U.action) === "map-installed";
      }
    ) : []), Me = P(() => {
      if (!k.value) return [];
      const Z = k.value.models.unresolved.map((ie) => ({
        filename: ie.reference.widget_value,
        reference: ie.reference,
        reason: ie.reason,
        is_unresolved: !0,
        options: void 0
      })), U = k.value.models.ambiguous.map((ie) => ({
        filename: ie.reference.widget_value,
        reference: ie.reference,
        has_multiple_options: !0,
        options: ie.options.map((Xe) => ({
          model: Xe.model,
          match_confidence: Xe.match_confidence,
          match_type: Xe.match_type,
          has_download_source: Xe.has_download_source
        }))
      }));
      return [...Z, ...U];
    }), Ce = P(() => {
      const Z = Me.value, U = O.value.map((ie) => ({
        filename: ie.filename,
        reference: ie.reference,
        is_download_intent: !0,
        resolved_model: ie.resolved_model,
        download_source: ie.download_source,
        target_path: ie.target_path,
        options: void 0
      }));
      return [...Z, ...U];
    }), X = P(() => O.value.filter((Z) => {
      const U = L.value.get(Z.filename);
      return U ? U.action === "download" : !0;
    }).map((Z) => ({
      filename: Z.filename,
      url: Z.download_source,
      target_path: Z.target_path
    })));
    function W(Z, U = 50) {
      return Z.length <= U ? Z : Z.slice(0, U - 3) + "...";
    }
    const ye = P(() => {
      let Z = T.value.length;
      for (const U of R.value.values())
        U.action === "install" && Z++;
      for (const U of L.value.values())
        U.action === "select" && Z++;
      return Z;
    }), ke = P(() => {
      let Z = 0;
      for (const U of L.value.values())
        U.action === "download" && Z++;
      for (const U of O.value)
        L.value.get(U.filename) || Z++;
      return Z;
    }), qe = P(() => {
      let Z = 0;
      for (const U of R.value.values())
        U.action === "optional" && Z++;
      for (const U of L.value.values())
        U.action === "optional" && Z++;
      return Z;
    }), Be = P(() => {
      let Z = A.value.size;
      for (const U of R.value.values())
        U.action === "skip" && Z++;
      for (const U of L.value.values())
        U.action === "skip" && Z++;
      for (const U of le.value)
        R.value.has(U.node_type) || Z++;
      for (const U of Me.value)
        L.value.has(U.filename) || Z++;
      return Z;
    }), be = P(() => {
      const Z = {};
      if (Z.analysis = { resolved: 1, total: 1 }, _e.value) {
        const U = le.value.length, ie = le.value.filter(
          (Xe) => R.value.has(Xe.node_type)
        ).length;
        Z.nodes = { resolved: ie, total: U };
      }
      if (ne.value && (Z.packages = {
        resolved: ge.value,
        total: pe.value || 1
      }), se.value) {
        const U = Ce.value.length, ie = Ce.value.filter(
          (Xe) => L.value.has(Xe.filename) || Xe.is_download_intent
        ).length;
        Z.models = { resolved: ie, total: U };
      }
      if (Z.review = { resolved: 1, total: 1 }, E.value === "applying") {
        const U = d.totalFiles || 1, ie = d.completedFiles.length;
        Z.applying = { resolved: ie, total: U };
      }
      return Z;
    });
    function Y(Z) {
      E.value = Z;
    }
    function ze() {
      const Z = N.value.findIndex((U) => U.id === E.value);
      Z > 0 && (E.value = N.value[Z - 1].id);
    }
    function Re() {
      const Z = N.value.findIndex((U) => U.id === E.value);
      Z < N.value.length - 1 && (E.value = N.value[Z + 1].id);
    }
    function Ke() {
      const Z = N.value.findIndex((ie) => ie.id === E.value), U = N.value[Z + 1];
      return (U == null ? void 0 : U.label) || "Review";
    }
    function Fe(Z) {
      var U;
      return !!((U = Z.package) != null && U.latest_version);
    }
    function Le(Z) {
      switch (Z) {
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
    function Ze(Z) {
      return Z.filter((U) => U.installed && U.tracked).filter((U) => U.name !== "comfygit-manager").map((U) => ({
        package_id: U.registry_id || U.name,
        source: U.source
      })).filter((U, ie, Xe) => Xe.findIndex((at) => at.package_id === U.package_id) === ie).sort((U, ie) => {
        const Xe = Le(U.source) - Le(ie.source);
        return Xe !== 0 ? Xe : U.package_id.localeCompare(ie.package_id);
      });
    }
    async function xt() {
      S.value = !0, I.value = null;
      try {
        const [Z, U] = await Promise.all([
          l(n.workflowName),
          g()
        ]);
        k.value = Z, C.value = Ze(U.nodes), Ft(Z);
      } catch (Z) {
        I.value = Z instanceof Error ? Z.message : "Failed to analyze workflow";
      } finally {
        S.value = !1;
      }
    }
    function Ft(Z) {
      R.value.clear();
      for (const U of Z.nodes.unresolved)
        U.saved_choice && R.value.set(U.reference.node_type, U.saved_choice);
      for (const U of Z.nodes.resolved)
        U.saved_choice && R.value.set(U.reference.node_type, U.saved_choice);
      for (const U of Z.nodes.ambiguous)
        U.saved_choice && R.value.set(U.reference.node_type, U.saved_choice);
      for (const U of Z.nodes.uninstallable)
        U.saved_choice && R.value.set(U.reference.node_type, U.saved_choice);
    }
    function ts() {
      M.value.includes("analysis") || M.value.push("analysis"), _e.value ? E.value = "nodes" : ne.value ? E.value = "packages" : se.value ? E.value = "models" : E.value = "review";
    }
    function Q(Z) {
      R.value.set(Z, { action: "optional" });
    }
    function B(Z) {
      R.value.set(Z, { action: "skip" });
    }
    function ue(Z, U) {
      var Xe;
      const ie = le.value.find((at) => at.node_type === Z);
      (Xe = ie == null ? void 0 : ie.options) != null && Xe[U] && R.value.set(Z, {
        action: "install",
        package_id: ie.options[U].package_id
      });
    }
    function He(Z, U, ie = {}) {
      R.value.set(Z, {
        action: "install",
        package_id: U,
        install_source: ie.install_source,
        repository: ie.repository,
        version: ie.version
      });
    }
    function We(Z, U) {
      R.value.set(Z, {
        action: "map-installed",
        package_id: U
      });
    }
    function it(Z) {
      R.value.delete(Z);
    }
    function Ue(Z) {
      return R.value.get(Z);
    }
    function ct(Z) {
      const U = Ue(Z);
      return U ? U.action === "optional" ? "Will be marked optional" : U.action === "skip" ? "Will be skipped" : U.action === "install" ? U.install_source === "git" ? "Will install via Git" : "Will install from Registry" : "Undecided" : "Undecided";
    }
    function K(Z, U) {
      var at;
      const ie = (at = Z.package) == null ? void 0 : at.package_id;
      if (!ie) return;
      const Xe = {
        action: "install",
        package_id: ie,
        version: Z.package.latest_version || null,
        install_source: U
      };
      U === "git" && Z.package.repository && (Xe.repository = Z.package.repository), R.value.set(Z.reference.node_type, Xe);
    }
    function me(Z) {
      R.value.set(Z, { action: "optional" });
    }
    function ce(Z) {
      R.value.set(Z, { action: "skip" });
    }
    function je(Z) {
      R.value.delete(Z);
    }
    function Je(Z) {
      A.value.has(Z) ? A.value.delete(Z) : A.value.add(Z);
    }
    function Ye(Z) {
      L.value.set(Z, { action: "optional" });
    }
    function et(Z) {
      L.value.set(Z, { action: "skip" });
    }
    function ut(Z, U) {
      var Xe;
      const ie = Me.value.find((at) => at.filename === Z);
      (Xe = ie == null ? void 0 : ie.options) != null && Xe[U] && L.value.set(Z, {
        action: "select",
        selected_model: ie.options[U].model
      });
    }
    function yt(Z, U, ie) {
      L.value.set(Z, {
        action: "download",
        url: U,
        target_path: ie
      });
    }
    function kt(Z) {
      L.value.delete(Z);
    }
    async function pt(Z) {
      try {
        await p(Z);
      } catch (U) {
        I.value = U instanceof Error ? U.message : "Failed to open file location";
      }
    }
    async function Jt() {
      var Z, U, ie, Xe;
      $.value = !0, I.value = null, f(), d.phase = "resolving", E.value = "applying";
      try {
        const at = await r(n.workflowName, R.value, L.value, A.value);
        at.models_to_download && at.models_to_download.length > 0 && u(n.workflowName, at.models_to_download), d.nodesMarkedOptional = at.nodes_marked_optional || [], d.nodesMapped = at.nodes_mapped || [];
        const Dt = Array.from(R.value.values()).map((mt) => {
          if ((mt == null ? void 0 : mt.action) !== "install" || mt.install_source !== "git")
            return null;
          const Zs = mt.repository, Ut = mt.package_id;
          return !Zs || !Ut ? null : {
            id: Ut,
            repository: Zs,
            selectedVersion: mt.version || "latest"
          };
        }).filter((mt) => !!mt), bs = new Set(Dt.map((mt) => mt.id)), Bt = new Set(
          Array.from(R.value.values()).filter((mt) => (mt == null ? void 0 : mt.action) === "install" && !!mt.package_id).map((mt) => mt.package_id)
        ), $s = [
          ...at.nodes_to_install || [],
          ...T.value.filter((mt) => !Bt.has(mt.package.package_id)).map((mt) => mt.package.package_id)
        ];
        if (d.nodesToInstall = [...new Set($s)].filter((mt) => !bs.has(mt)), d.nodesToInstall.length > 0 && await c(n.workflowName), Dt.length > 0) {
          d.phase = "installing";
          const mt = ((Z = d.nodeInstallProgress) == null ? void 0 : Z.completedNodes) || [], Zs = ((U = d.nodeInstallProgress) == null ? void 0 : U.totalNodes) || d.nodesToInstall.length;
          d.nodesToInstall = [
            ...d.nodesToInstall,
            ...Dt.map((Ut) => Ut.id)
          ], d.nodeInstallProgress = {
            completedNodes: mt,
            totalNodes: Zs + Dt.length
          };
          for (const Ut of Dt) {
            const Kn = d.nodeInstallProgress.completedNodes.length;
            d.nodeInstallProgress.currentNode = Ut.id, d.nodeInstallProgress.currentIndex = Kn;
            try {
              const vs = await w({
                id: Ut.id,
                version: Ut.selectedVersion,
                selected_version: Ut.selectedVersion,
                repository: Ut.repository,
                install_source: "git",
                mode: "remote",
                channel: "default"
              });
              if (((ie = vs.status) == null ? void 0 : ie.status_str) === "dependency_review_required") {
                d.nodeInstallProgress.completedNodes.push({
                  node_id: Ut.id,
                  success: !1,
                  error: ((Xe = vs.status.messages) == null ? void 0 : Xe[0]) || "Dependency review required",
                  dependency_review: vs.status.dependency_review
                }), d.dependencyReviews = [
                  ...d.dependencyReviews || [],
                  ...vs.status.dependency_review ? [{ node_id: Ut.id, dependency_review: vs.status.dependency_review }] : []
                ];
                continue;
              }
              d.nodeInstallProgress.completedNodes.push({
                node_id: Ut.id,
                success: !0
              }), d.nodesInstalled = [.../* @__PURE__ */ new Set([...d.nodesInstalled, Ut.id])], d.needsRestart = !0;
            } catch (vs) {
              const dn = vs instanceof Error ? vs.message : `Failed to install ${Ut.id}`;
              d.nodeInstallProgress.completedNodes.push({
                node_id: Ut.id,
                success: !1,
                error: dn
              }), d.installError = dn;
            }
          }
        }
        d.phase = "complete", await v(), window.dispatchEvent(new CustomEvent("comfygit:status-refresh")), a("refresh"), a("install");
      } catch (at) {
        I.value = at instanceof Error ? at.message : "Failed to apply resolution", d.error = I.value, d.phase = "error";
      } finally {
        $.value = !1;
      }
    }
    function us() {
      a("refresh"), a("restart"), a("close");
    }
    async function Nt() {
      var U;
      const Z = ((U = d.nodeInstallProgress) == null ? void 0 : U.completedNodes.filter((ie) => !ie.success).map((ie) => ie.node_id)) || [];
      if (Z.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: Z.length
        }, d.nodesToInstall = Z, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(n.workflowName), d.phase = "complete";
        } catch (ie) {
          d.error = ie instanceof Error ? ie.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return dt(xt), (Z, U) => (o(), D(Mt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: S.value,
      error: I.value || void 0,
      "fixed-height": !0,
      onClose: U[1] || (U[1] = (ie) => a("close"))
    }, {
      body: h(() => [
        S.value && !k.value ? (o(), i("div", t_, [...U[2] || (U[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : k.value ? (o(), i("div", s_, [
          b(qy, {
            steps: N.value,
            "current-step": E.value,
            "completed-steps": M.value,
            "step-stats": be.value,
            onStepChange: Y
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          E.value === "analysis" ? (o(), i("div", n_, [
            s("div", o_, [
              s("div", a_, [
                U[3] || (U[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", l_, " Found " + m(k.value.stats.total_nodes) + " nodes and " + m(k.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", i_, [
                s("div", r_, [
                  U[16] || (U[16] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", c_, [
                    te.value > 0 ? (o(), i("div", u_, [
                      U[4] || (U[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", d_, m(te.value), 1),
                      U[5] || (U[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    k.value.stats.packages_needing_installation > 0 ? (o(), i("div", m_, [
                      U[6] || (U[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", f_, m(k.value.stats.packages_needing_installation), 1),
                      U[7] || (U[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    J.value > 0 ? (o(), i("div", v_, [
                      U[8] || (U[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", p_, m(J.value), 1),
                      U[9] || (U[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    fe.value.length > 0 ? (o(), i("div", g_, [
                      U[10] || (U[10] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", h_, m(fe.value.length), 1),
                      U[11] || (U[11] = s("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    V.value > 0 ? (o(), i("div", y_, [
                      U[12] || (U[12] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", w_, m(V.value), 1),
                      U[13] || (U[13] = s("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    ee.value > 0 ? (o(), i("div", __, [
                      U[14] || (U[14] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", k_, m(ee.value), 1),
                      U[15] || (U[15] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                s("div", b_, [
                  U[27] || (U[27] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", $_, [
                    s("div", C_, [
                      U[17] || (U[17] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", x_, m(k.value.models.resolved.length - k.value.stats.download_intents - k.value.stats.models_with_category_mismatch), 1),
                      U[18] || (U[18] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    k.value.stats.download_intents > 0 ? (o(), i("div", S_, [
                      U[19] || (U[19] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", I_, m(k.value.stats.download_intents), 1),
                      U[20] || (U[20] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    we.value ? (o(), i("div", E_, [
                      U[21] || (U[21] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", T_, m(Ee.value.length), 1),
                      U[22] || (U[22] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    k.value.models.ambiguous.length > 0 ? (o(), i("div", M_, [
                      U[23] || (U[23] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", P_, m(k.value.models.ambiguous.length), 1),
                      U[24] || (U[24] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    k.value.models.unresolved.length > 0 ? (o(), i("div", R_, [
                      U[25] || (U[25] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", D_, m(k.value.models.unresolved.length), 1),
                      U[26] || (U[26] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              ae.value > 0 ? (o(), i("div", N_, [
                U[28] || (U[28] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", L_, m(ae.value) + " item" + m(ae.value === 1 ? "" : "s") + " need your input", 1)
              ])) : q.value ? (o(), i("div", U_, [
                U[29] || (U[29] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", O_, m(fe.value.length) + " node type" + m(fe.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : V.value > 0 ? (o(), i("div", A_, [
                U[30] || (U[30] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", z_, m(V.value) + " community-mapped node type" + m(V.value > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : de.value ? (o(), i("div", F_, [
                U[31] || (U[31] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", V_, m(k.value.stats.packages_needing_installation) + " package" + m(k.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + m(k.value.stats.nodes_needing_installation) + " node type" + m(k.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + m(ve.value ? `, ${k.value.stats.download_intents} model${k.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : ve.value ? (o(), i("div", B_, [
                U[32] || (U[32] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", W_, m(k.value.stats.download_intents) + " model" + m(k.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : we.value ? (o(), i("div", G_, [
                U[33] || (U[33] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", j_, m(Ee.value.length) + " model" + m(Ee.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (o(), i("div", H_, [...U[34] || (U[34] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              we.value ? (o(), i("div", q_, [
                U[37] || (U[37] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", K_, [
                  (o(!0), i(F, null, he(Ee.value, (ie) => {
                    var Xe, at;
                    return o(), i("div", {
                      key: ie.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", J_, m(ie.actual_category) + "/" + m((Xe = ie.model) == null ? void 0 : Xe.filename), 1),
                      U[36] || (U[36] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", Q_, m((at = ie.expected_categories) == null ? void 0 : at[0]) + "/", 1),
                      ie.file_path ? (o(), D(De, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Dt) => pt(ie.file_path)
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
              q.value ? (o(), i("div", Y_, [
                U[38] || (U[38] = s("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                s("div", X_, [
                  (o(!0), i(F, null, he(fe.value, (ie) => {
                    var Xe;
                    return o(), i("div", {
                      key: `vg-${ie.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      s("code", Z_, m(ie.reference.node_type), 1),
                      s("span", ek, m(ie.guidance || ((Xe = k.value.node_guidance) == null ? void 0 : Xe[ie.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          E.value === "nodes" ? (o(), i("div", tk, [
            b(Z1, {
              nodes: le.value,
              "node-choices": R.value,
              "auto-resolved-packages": [],
              "skipped-packages": A.value,
              "installed-node-packs": C.value,
              onMarkOptional: Q,
              onSkip: B,
              onOptionSelected: ue,
              onManualEntry: He,
              onInstalledPackSelected: We,
              onClearChoice: it,
              onPackageSkip: Je
            }, null, 8, ["nodes", "node-choices", "skipped-packages", "installed-node-packs"])
          ])) : y("", !0),
          E.value === "packages" ? (o(), i("div", sk, [
            s("div", nk, [
              U[39] || (U[39] = s("div", null, [
                s("h3", { class: "summary-title" }, "Review Node Packages"),
                s("p", { class: "summary-description" }, " Choose which package-level installs should run. These decisions are separate from mapping unresolved node names. ")
              ], -1)),
              s("span", ok, m(ge.value) + "/" + m(pe.value) + " decided", 1)
            ]),
            $e.value.length > 0 ? (o(), i("div", ak, [
              s("div", lk, [
                s("div", null, [
                  s("h4", ik, "Resolved Packages (" + m($e.value.length) + ")", 1),
                  U[40] || (U[40] = s("p", { class: "package-section-description" }, " These packages were matched automatically. Skip any package you do not want installed. ", -1))
                ]),
                s("span", rk, m(Ae.value) + "/" + m($e.value.length) + " to install", 1)
              ]),
              s("div", ck, [
                (o(!0), i(F, null, he($e.value, (ie) => (o(), i("div", {
                  key: ie.package_id,
                  class: "package-item"
                }, [
                  s("div", uk, [
                    s("code", dk, m(ie.package_id), 1),
                    s("span", mk, m(ie.node_types_count) + " node type" + m(ie.node_types_count > 1 ? "s" : ""), 1)
                  ]),
                  s("div", fk, [
                    A.value.has(ie.package_id) ? (o(), i("span", pk, "Skipped")) : (o(), i("span", vk, "Will Install")),
                    b(De, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Xe) => Je(ie.package_id)
                    }, {
                      default: h(() => [
                        x(m(A.value.has(ie.package_id) ? "Include" : "Skip"), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : y("", !0),
            H.value.length > 0 ? (o(), i("div", gk, [
              s("div", hk, [
                s("h4", yk, "Community-Mapped Packages (" + m(H.value.length) + ")", 1),
                U[41] || (U[41] = s("p", { class: "community-node-description" }, " These mappings came from community metadata. Use a registry install only when a package version exists; otherwise install from Git or skip. ", -1))
              ]),
              s("div", wk, [
                (o(!0), i(F, null, he(H.value, (ie) => (o(), i("div", {
                  key: `community-${ie.reference.node_type}-${ie.package.package_id}`,
                  class: "community-node-item"
                }, [
                  s("div", _k, [
                    s("div", kk, [
                      s("code", bk, m(ie.reference.node_type), 1),
                      s("span", $k, m(ie.package.title || ie.package.package_id), 1)
                    ]),
                    s("div", Ck, m(ie.package.package_id), 1),
                    s("div", xk, [
                      U[42] || (U[42] = x(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      ie.guidance ? (o(), i("span", Sk, m(ie.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  Ue(ie.reference.node_type) ? (o(), i("div", Ik, [
                    s("div", Ek, m(ct(ie.reference.node_type)), 1),
                    b(De, {
                      class: "change-selection-button",
                      size: "sm",
                      variant: "ghost",
                      onClick: (Xe) => je(ie.reference.node_type)
                    }, {
                      default: h(() => [...U[43] || (U[43] = [
                        x(" Change Selection ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])) : (o(), i("div", Tk, [
                    Fe(ie) ? (o(), D(De, {
                      key: 0,
                      class: "community-choice-button install-choice",
                      size: "sm",
                      variant: "secondary",
                      disabled: !ie.package.package_id,
                      onClick: (Xe) => K(ie, "registry")
                    }, {
                      default: h(() => [...U[44] || (U[44] = [
                        x(" Install from Registry ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    ie.package.repository ? (o(), D(De, {
                      key: 1,
                      class: "community-choice-button install-choice",
                      size: "sm",
                      variant: "secondary",
                      disabled: !ie.package.package_id,
                      onClick: (Xe) => K(ie, "git")
                    }, {
                      default: h(() => [...U[45] || (U[45] = [
                        x(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    b(De, {
                      class: "community-choice-button",
                      size: "sm",
                      variant: "secondary",
                      onClick: (Xe) => me(ie.reference.node_type)
                    }, {
                      default: h(() => [...U[46] || (U[46] = [
                        x(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(De, {
                      class: "community-choice-button",
                      size: "sm",
                      variant: "secondary",
                      onClick: (Xe) => ce(ie.reference.node_type)
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
          E.value === "models" ? (o(), D(Kw, {
            key: 3,
            models: Ce.value,
            "model-choices": L.value,
            onMarkOptional: Ye,
            onSkip: et,
            onOptionSelected: ut,
            onDownloadUrl: yt,
            onClearChoice: kt
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          E.value === "review" ? (o(), i("div", Mk, [
            s("div", Pk, [
              U[53] || (U[53] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", Rk, [
                s("div", Dk, [
                  s("span", Nk, m(ye.value), 1),
                  U[48] || (U[48] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", Lk, [
                  s("span", Uk, m(ke.value), 1),
                  U[49] || (U[49] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", Ok, [
                  s("span", Ak, m(qe.value), 1),
                  U[50] || (U[50] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", zk, [
                  s("span", Fk, m(Be.value), 1),
                  U[51] || (U[51] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              $e.value.length > 0 ? (o(), i("div", Vk, [
                s("h4", Bk, "Node Packages (" + m($e.value.length) + ")", 1),
                s("div", Wk, [
                  (o(!0), i(F, null, he($e.value, (ie) => (o(), i("div", {
                    key: ie.package_id,
                    class: "review-item"
                  }, [
                    s("code", Gk, m(ie.package_id), 1),
                    s("div", jk, [
                      A.value.has(ie.package_id) ? (o(), i("span", qk, "Skipped")) : (o(), i("span", Hk, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              H.value.length > 0 ? (o(), i("div", Kk, [
                s("h4", Jk, "Community-Mapped Packages (" + m(H.value.length) + ")", 1),
                s("div", Qk, [
                  (o(!0), i(F, null, he(H.value, (ie) => {
                    var Xe, at, Dt;
                    return o(), i("div", {
                      key: `review-community-${ie.reference.node_type}-${ie.package.package_id}`,
                      class: "review-item"
                    }, [
                      s("code", Yk, m(ie.reference.node_type), 1),
                      s("div", Xk, [
                        ((Xe = Ue(ie.reference.node_type)) == null ? void 0 : Xe.action) === "install" ? (o(), i("span", Zk, m(((at = Ue(ie.reference.node_type)) == null ? void 0 : at.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((Dt = Ue(ie.reference.node_type)) == null ? void 0 : Dt.action) === "optional" ? (o(), i("span", eb, " Optional ")) : (o(), i("span", tb, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              le.value.length > 0 ? (o(), i("div", sb, [
                s("h4", nb, "Node Choices (" + m(le.value.length) + ")", 1),
                s("div", ob, [
                  (o(!0), i(F, null, he(le.value, (ie) => {
                    var Xe, at, Dt, bs, Bt, $s;
                    return o(), i("div", {
                      key: ie.node_type,
                      class: "review-item"
                    }, [
                      s("code", ab, m(ie.node_type), 1),
                      s("div", lb, [
                        R.value.has(ie.node_type) ? (o(), i(F, { key: 0 }, [
                          ((Xe = R.value.get(ie.node_type)) == null ? void 0 : Xe.action) === "install" ? (o(), i("span", ib, m((at = R.value.get(ie.node_type)) == null ? void 0 : at.package_id), 1)) : ((Dt = R.value.get(ie.node_type)) == null ? void 0 : Dt.action) === "map-installed" ? (o(), i("span", rb, " Mapped to " + m((bs = R.value.get(ie.node_type)) == null ? void 0 : bs.package_id), 1)) : ((Bt = R.value.get(ie.node_type)) == null ? void 0 : Bt.action) === "optional" ? (o(), i("span", cb, " Optional ")) : (($s = R.value.get(ie.node_type)) == null ? void 0 : $s.action) === "skip" ? (o(), i("span", ub, " Skip ")) : y("", !0)
                        ], 64)) : (o(), i("span", db, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              X.value.length > 0 ? (o(), i("div", mb, [
                s("h4", fb, "Models to Download (" + m(X.value.length) + ")", 1),
                s("div", vb, [
                  (o(!0), i(F, null, he(X.value, (ie) => (o(), i("div", {
                    key: ie.filename,
                    class: "review-item download-item"
                  }, [
                    s("div", pb, [
                      s("code", gb, m(ie.filename), 1),
                      s("div", hb, [
                        s("span", yb, "→ " + m(ie.target_path), 1),
                        ie.url ? (o(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: ie.url
                        }, m(W(ie.url)), 9, wb)) : y("", !0)
                      ])
                    ]),
                    U[52] || (U[52] = s("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Ce.value.length > 0 ? (o(), i("div", _b, [
                s("h4", kb, "Models (" + m(Ce.value.length) + ")", 1),
                s("div", bb, [
                  (o(!0), i(F, null, he(Ce.value, (ie) => {
                    var Xe, at, Dt, bs, Bt, $s, mt;
                    return o(), i("div", {
                      key: ie.filename,
                      class: "review-item"
                    }, [
                      s("code", $b, m(ie.filename), 1),
                      s("div", Cb, [
                        L.value.has(ie.filename) ? (o(), i(F, { key: 0 }, [
                          ((Xe = L.value.get(ie.filename)) == null ? void 0 : Xe.action) === "select" ? (o(), i("span", xb, m((Dt = (at = L.value.get(ie.filename)) == null ? void 0 : at.selected_model) == null ? void 0 : Dt.filename), 1)) : ((bs = L.value.get(ie.filename)) == null ? void 0 : bs.action) === "download" ? (o(), i("span", Sb, " Download ")) : ((Bt = L.value.get(ie.filename)) == null ? void 0 : Bt.action) === "optional" ? (o(), i("span", Ib, " Optional ")) : (($s = L.value.get(ie.filename)) == null ? void 0 : $s.action) === "skip" ? (o(), i("span", Eb, " Skip ")) : ((mt = L.value.get(ie.filename)) == null ? void 0 : mt.action) === "cancel_download" ? (o(), i("span", Tb, " Cancel Download ")) : y("", !0)
                        ], 64)) : ie.is_download_intent ? (o(), i("span", Mb, " Pending Download ")) : (o(), i("span", Pb, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Ne.value.length === 0 && H.value.length === 0 && le.value.length === 0 && Ce.value.length === 0 ? (o(), i("div", Rb, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          E.value === "applying" ? (o(), D(e_, {
            key: 5,
            progress: lt(d),
            onRestart: us,
            onRetryFailed: Nt
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        E.value !== "analysis" && E.value !== "applying" ? (o(), D(De, {
          key: 0,
          variant: "secondary",
          disabled: $.value,
          onClick: ze
        }, {
          default: h(() => [...U[54] || (U[54] = [
            x(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        U[56] || (U[56] = s("div", { class: "footer-spacer" }, null, -1)),
        E.value !== "applying" || lt(d).phase === "complete" || lt(d).phase === "error" ? (o(), D(De, {
          key: 1,
          variant: "secondary",
          onClick: U[0] || (U[0] = (ie) => a("close"))
        }, {
          default: h(() => [
            x(m(lt(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        E.value === "analysis" ? (o(), D(De, {
          key: 2,
          variant: "primary",
          disabled: S.value,
          onClick: ts
        }, {
          default: h(() => [
            x(m(Oe.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        E.value === "nodes" || E.value === "packages" || E.value === "models" ? (o(), D(De, {
          key: 3,
          variant: "primary",
          onClick: Re
        }, {
          default: h(() => [
            x(" Continue to " + m(Ke()) + " → ", 1)
          ]),
          _: 1
        })) : y("", !0),
        E.value === "review" ? (o(), D(De, {
          key: 4,
          variant: "primary",
          disabled: $.value,
          loading: $.value,
          onClick: Jt
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
}), Nb = /* @__PURE__ */ Te(Db, [["__scopeId", "data-v-9d716697"]]), Lb = { class: "search-input-wrapper" }, Ub = ["value", "placeholder"], Ob = /* @__PURE__ */ Se({
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
    return dt(() => {
      n.autoFocus && l.value && l.value.focus();
    }), (d, f) => (o(), i("div", Lb, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: Ss(u, ["escape"])
      }, null, 40, Ub),
      e.clearable && e.modelValue ? (o(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), Ab = /* @__PURE__ */ Te(Ob, [["__scopeId", "data-v-266f857a"]]), zb = { class: "search-bar" }, Fb = /* @__PURE__ */ Se({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, n) => (o(), i("div", zb, [
      b(Ab, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (a) => t.$emit("update:modelValue", a)),
        onClear: n[1] || (n[1] = (a) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), $n = /* @__PURE__ */ Te(Fb, [["__scopeId", "data-v-3d51bbfd"]]), Vb = { class: "section-group" }, Bb = {
  key: 0,
  class: "section-content"
}, Wb = /* @__PURE__ */ Se({
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
    return (c, u) => (o(), i("section", Vb, [
      b(hs, {
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
      !e.collapsible || l.value ? (o(), i("div", Bb, [
        rt(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Lt = /* @__PURE__ */ Te(Wb, [["__scopeId", "data-v-c48e33ed"]]), Gb = { class: "item-header" }, jb = {
  key: 0,
  class: "item-icon"
}, Hb = { class: "item-info" }, qb = {
  key: 0,
  class: "item-title"
}, Kb = {
  key: 1,
  class: "item-subtitle"
}, Jb = {
  key: 0,
  class: "item-details"
}, Qb = {
  key: 1,
  class: "item-actions"
}, Yb = /* @__PURE__ */ Se({
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
      class: Ve(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      s("div", Gb, [
        l.$slots.icon ? (o(), i("span", jb, [
          rt(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        s("div", Hb, [
          l.$slots.title ? (o(), i("div", qb, [
            rt(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (o(), i("div", Kb, [
            rt(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (o(), i("div", Jb, [
        rt(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (o(), i("div", Qb, [
        rt(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Yt = /* @__PURE__ */ Te(Yb, [["__scopeId", "data-v-cc435e0e"]]), Xb = { class: "empty-state" }, Zb = {
  key: 0,
  class: "empty-icon"
}, e2 = { class: "empty-message" }, t2 = /* @__PURE__ */ Se({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, n) => (o(), i("div", Xb, [
      e.icon ? (o(), i("div", Zb, m(e.icon), 1)) : y("", !0),
      s("p", e2, m(e.message), 1),
      e.actionLabel ? (o(), D(Pe, {
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
}), Ms = /* @__PURE__ */ Te(t2, [["__scopeId", "data-v-4466284f"]]), s2 = { class: "loading-state" }, n2 = { class: "loading-message" }, o2 = /* @__PURE__ */ Se({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, n) => (o(), i("div", s2, [
      n[0] || (n[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", n2, m(e.message), 1)
    ]));
  }
}), Fs = /* @__PURE__ */ Te(o2, [["__scopeId", "data-v-ad8436c9"]]), a2 = { class: "error-state" }, l2 = { class: "error-message" }, i2 = /* @__PURE__ */ Se({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (t, n) => (o(), i("div", a2, [
      n[2] || (n[2] = s("span", { class: "error-icon" }, "⚠", -1)),
      s("p", l2, m(e.message), 1),
      e.retry ? (o(), D(Pe, {
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
}), Vs = /* @__PURE__ */ Te(i2, [["__scopeId", "data-v-5397be48"]]);
function r2(e) {
  return e.toLowerCase().endsWith(".json") ? e : `${e}.json`;
}
function Pi(e) {
  return Array.from(new Set(e.filter(Boolean)));
}
function c2(e) {
  const t = e.trim(), n = r2(t);
  return t.startsWith("workflows/") ? Pi([n, t]) : Pi([
    `workflows/${n}`,
    n,
    t
  ]);
}
function u2(e) {
  return e.trim().replace(/^workflows\//, "").replace(/\.json$/i, "");
}
async function d2(e) {
  const t = c2(e), n = [];
  for (const a of t)
    try {
      const l = await Ks(`/userdata/${encodeURIComponent(a)}`);
      if (l.ok)
        return l.json();
      n.push(`${a}: ${l.status}`);
    } catch (l) {
      n.push(`${a}: ${l instanceof Error ? l.message : String(l)}`);
    }
  throw new Error(`Could not load saved workflow "${e}" (${n.join(", ")})`);
}
async function m2(e) {
  const t = window.app;
  if (typeof t.loadGraphData != "function")
    throw new Error("ComfyUI loadGraphData is not available");
  const n = await d2(e);
  await t.loadGraphData(
    n,
    !0,
    !0,
    u2(e),
    {
      showMissingModelsDialog: !0,
      showMissingNodesDialog: !0
    }
  ), await new Promise((a) => requestAnimationFrame(a));
}
const f2 = /* @__PURE__ */ Se({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: n }) {
    const a = n, { getWorkflows: l } = ft(), r = _([]), c = _(!1), u = _(null), d = _(""), f = _(!0), v = _(!1), p = _(!1), w = _(!1), g = _(null), k = P(
      () => r.value.filter((G) => G.status === "broken")
    ), C = P(
      () => r.value.filter((G) => G.status === "new")
    ), S = P(
      () => r.value.filter((G) => G.status === "modified")
    ), $ = P(
      () => r.value.filter((G) => G.status === "synced")
    ), I = P(() => {
      if (!d.value.trim()) return r.value;
      const G = d.value.toLowerCase();
      return r.value.filter((ne) => ne.name.toLowerCase().includes(G));
    }), E = P(
      () => k.value.filter(
        (G) => !d.value.trim() || G.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), M = P(
      () => C.value.filter(
        (G) => !d.value.trim() || G.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), R = P(
      () => S.value.filter(
        (G) => !d.value.trim() || G.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), L = P(
      () => $.value.filter(
        (G) => !d.value.trim() || G.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), A = P(
      () => v.value ? L.value : L.value.slice(0, 5)
    );
    async function N(G = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(G);
      } catch (ne) {
        u.value = ne instanceof Error ? ne.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    t({ loadWorkflows: N });
    function V(G) {
      g.value = G, p.value = !0;
    }
    function ae(G) {
      g.value = G, p.value = !1, w.value = !0;
    }
    async function ee(G) {
      g.value = G;
      try {
        await m2(G);
      } catch (ne) {
        console.error("[ComfyGit] Failed to activate workflow for contract mapping:", ne), u.value = ne instanceof Error ? ne.message : "Failed to open workflow for contract mapping";
        return;
      }
      window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: G }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel"));
    }
    function J(G) {
      var Ee;
      const te = (Ee = G.detail) == null ? void 0 : Ee.workflowName;
      te && ee(te);
    }
    function fe() {
    }
    function oe() {
      a("refresh", { refreshWorkflows: !1 });
    }
    async function H() {
      w.value = !1, await N(!0);
    }
    async function q() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function _e(G) {
      return G.replace(/uninstallable node mappings?/gi, (ne) => ne.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function se(G) {
      if (G.issue_summary && G.issue_summary.trim().length > 0)
        return _e(G.issue_summary);
      const ne = [];
      return G.version_gated_count && G.version_gated_count > 0 && ne.push(`${G.version_gated_count} node${G.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), G.uninstallable_count && G.uninstallable_count > 0 && ne.push(`${G.uninstallable_count} node${G.uninstallable_count > 1 ? "s" : ""} need community packages`), G.missing_nodes > 0 && ne.push(`${G.missing_nodes} missing node${G.missing_nodes > 1 ? "s" : ""}`), G.missing_models > 0 && ne.push(`${G.missing_models} missing model${G.missing_models > 1 ? "s" : ""}`), G.models_with_category_mismatch && G.models_with_category_mismatch > 0 && ne.push(`${G.models_with_category_mismatch} model${G.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), G.pending_downloads && G.pending_downloads > 0 && ne.push(`${G.pending_downloads} pending download${G.pending_downloads > 1 ? "s" : ""}`), ne.length > 0 ? ne.join(", ") : "Has issues";
    }
    function ve(G) {
      const ne = G.sync_state === "new" ? "New" : G.sync_state === "modified" ? "Modified" : G.sync_state === "synced" ? "Synced" : G.sync_state, te = de(G);
      return G.has_path_sync_issues && G.models_needing_path_sync && G.models_needing_path_sync > 0 ? `${G.models_needing_path_sync} model path${G.models_needing_path_sync > 1 ? "s" : ""} need${G.models_needing_path_sync === 1 ? "s" : ""} sync · ${te}` : `${ne || "Unknown"} · ${te}`;
    }
    function de(G) {
      const ne = G.contract_summary;
      return !ne || !ne.has_contract ? "No contract" : ne.status === "incomplete" ? `${ne.input_count} in / ${ne.output_count} out · incomplete` : `${ne.input_count} in / ${ne.output_count} out`;
    }
    return dt(() => {
      N(), window.addEventListener("comfygit:open-workflow-contract", J);
    }), To(() => {
      window.removeEventListener("comfygit:open-workflow-contract", J);
    }), (G, ne) => (o(), i(F, null, [
      b(qt, null, {
        header: h(() => [
          b(Kt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          b($n, {
            modelValue: d.value,
            "onUpdate:modelValue": ne[0] || (ne[0] = (te) => d.value = te),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (o(), D(Fs, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (o(), D(Vs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: N
          }, null, 8, ["message"])) : (o(), i(F, { key: 2 }, [
            E.value.length ? (o(), D(Lt, {
              key: 0,
              title: "BROKEN",
              count: E.value.length
            }, {
              default: h(() => [
                (o(!0), i(F, null, he(E.value, (te) => (o(), D(Yt, {
                  key: te.name,
                  status: "broken"
                }, {
                  icon: h(() => [...ne[6] || (ne[6] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(te.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(se(te)), 1)
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Ee) => ae(te.name)
                    }, {
                      default: h(() => [...ne[7] || (ne[7] = [
                        x(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ee) => V(te.name)
                    }, {
                      default: h(() => [...ne[8] || (ne[8] = [
                        x(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ee) => ee(te.name)
                    }, {
                      default: h(() => [...ne[9] || (ne[9] = [
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
            M.value.length ? (o(), D(Lt, {
              key: 1,
              title: "NEW",
              count: M.value.length
            }, {
              default: h(() => [
                (o(!0), i(F, null, he(M.value, (te) => (o(), D(Yt, {
                  key: te.name,
                  status: te.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    x(m(te.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    x(m(te.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(ve(te)), 1)
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ee) => V(te.name)
                    }, {
                      default: h(() => [...ne[10] || (ne[10] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ee) => ee(te.name)
                    }, {
                      default: h(() => [...ne[11] || (ne[11] = [
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
            R.value.length ? (o(), D(Lt, {
              key: 2,
              title: "MODIFIED",
              count: R.value.length
            }, {
              default: h(() => [
                (o(!0), i(F, null, he(R.value, (te) => (o(), D(Yt, {
                  key: te.name,
                  status: te.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...ne[12] || (ne[12] = [
                    x("⚡", -1)
                  ])]),
                  title: h(() => [
                    x(m(te.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(ve(te)), 1)
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ee) => V(te.name)
                    }, {
                      default: h(() => [...ne[13] || (ne[13] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ee) => ee(te.name)
                    }, {
                      default: h(() => [...ne[14] || (ne[14] = [
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
            L.value.length ? (o(), D(Lt, {
              key: 3,
              title: "SYNCED",
              count: L.value.length,
              collapsible: !0,
              "initially-expanded": f.value,
              onToggle: ne[2] || (ne[2] = (te) => f.value = te)
            }, {
              default: h(() => [
                (o(!0), i(F, null, he(A.value, (te) => (o(), D(Yt, {
                  key: te.name,
                  status: te.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    x(m(te.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    x(m(te.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(ve(te)), 1)
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ee) => V(te.name)
                    }, {
                      default: h(() => [...ne[15] || (ne[15] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ee) => ee(te.name)
                    }, {
                      default: h(() => [...ne[16] || (ne[16] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && L.value.length > 5 ? (o(), D(Pe, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: ne[1] || (ne[1] = (te) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    x(" View all " + m(L.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            I.value.length ? y("", !0) : (o(), D(Ms, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && g.value ? (o(), D(Ly, {
        key: 0,
        "workflow-name": g.value,
        onClose: ne[3] || (ne[3] = (te) => p.value = !1),
        onResolve: ne[4] || (ne[4] = (te) => ae(g.value)),
        onRefresh: ne[5] || (ne[5] = (te) => a("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && g.value ? (o(), D(Nb, {
        key: 1,
        "workflow-name": g.value,
        onClose: H,
        onInstall: fe,
        onRefresh: oe,
        onRestart: q
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), v2 = /* @__PURE__ */ Te(f2, [["__scopeId", "data-v-7bf48b3a"]]), p2 = /* @__PURE__ */ Se({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (t, n) => (o(), i("div", {
      class: Ve(["summary-bar", e.variant])
    }, [
      rt(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), Ml = /* @__PURE__ */ Te(p2, [["__scopeId", "data-v-ccb7816e"]]);
async function Pl(e) {
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
const g2 = {
  key: 0,
  class: "model-details"
}, h2 = { class: "detail-section" }, y2 = { class: "detail-row" }, w2 = { class: "detail-value mono" }, _2 = { class: "detail-row" }, k2 = { class: "detail-value mono" }, b2 = { class: "detail-row" }, $2 = { class: "detail-value mono" }, C2 = {
  key: 0,
  class: "detail-row"
}, x2 = { class: "detail-value" }, S2 = ["disabled"], I2 = {
  key: 1,
  class: "detail-row"
}, E2 = { class: "detail-value hash-error" }, T2 = { class: "detail-row" }, M2 = { class: "detail-value" }, P2 = { class: "detail-row" }, R2 = { class: "detail-value" }, D2 = { class: "detail-row" }, N2 = { class: "detail-value" }, L2 = { class: "detail-section" }, U2 = { class: "section-header" }, O2 = {
  key: 0,
  class: "locations-list"
}, A2 = { class: "location-path mono" }, z2 = {
  key: 0,
  class: "location-modified"
}, F2 = ["onClick"], V2 = {
  key: 1,
  class: "empty-state"
}, B2 = { class: "detail-section" }, W2 = { class: "section-header-row" }, G2 = { class: "section-header" }, j2 = {
  key: 0,
  class: "sources-list"
}, H2 = { class: "source-type" }, q2 = ["href"], K2 = ["disabled", "onClick"], J2 = {
  key: 1,
  class: "empty-state"
}, Q2 = {
  key: 2,
  class: "source-error"
}, Y2 = {
  key: 3,
  class: "source-success"
}, X2 = /* @__PURE__ */ Se({
  __name: "ModelDetailModal",
  props: {
    identifier: {},
    overlayZIndex: {}
  },
  emits: ["close", "sourceSaved"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getModelDetails: l, removeModelSource: r, computeModelHashes: c } = ft(), u = _(null), d = _(!0), f = _(null), v = _(null), p = _(null), w = _(null), g = _(!1), k = _(!1), C = _(null), S = P(() => {
      var ee;
      return !!((ee = u.value) != null && ee.hash && (!u.value.blake3 || !u.value.sha256));
    }), $ = _(null);
    let I = null;
    function E(ee, J = "success", fe = 2e3) {
      I && clearTimeout(I), $.value = { message: ee, type: J }, I = setTimeout(() => {
        $.value = null;
      }, fe);
    }
    function M(ee) {
      if (!ee) return "Unknown";
      const J = 1024 * 1024 * 1024, fe = 1024 * 1024;
      return ee >= J ? `${(ee / J).toFixed(1)} GB` : ee >= fe ? `${(ee / fe).toFixed(0)} MB` : `${(ee / 1024).toFixed(0)} KB`;
    }
    async function R(ee) {
      try {
        await Pl(ee), E("Copied to clipboard!");
      } catch (J) {
        console.error("Failed to copy:", J), E("Failed to copy to clipboard", "error");
      }
    }
    async function L(ee) {
      if (u.value) {
        v.value = ee, p.value = null, w.value = null;
        try {
          await r(u.value.hash, ee), E("Source removed"), await ae();
        } catch (J) {
          p.value = J instanceof Error ? J.message : "Failed to remove source";
        } finally {
          v.value = null;
        }
      }
    }
    async function A() {
      w.value = "Source added successfully!", g.value = !1, await ae(), a("sourceSaved");
    }
    async function N() {
      await ae();
    }
    async function V() {
      var ee;
      if ((ee = u.value) != null && ee.hash) {
        k.value = !0, C.value = null;
        try {
          u.value = await c(u.value.hash), E("Hashes computed successfully!");
        } catch (J) {
          C.value = J instanceof Error ? J.message : "Failed to compute hashes";
        } finally {
          k.value = !1;
        }
      }
    }
    async function ae() {
      d.value = !0, f.value = null;
      try {
        u.value = await l(n.identifier);
      } catch (ee) {
        f.value = ee instanceof Error ? ee.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return dt(ae), (ee, J) => {
      var fe;
      return o(), i(F, null, [
        b(Mt, {
          title: `Model Details: ${((fe = u.value) == null ? void 0 : fe.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: f.value,
          "overlay-z-index": e.overlayZIndex,
          onClose: J[5] || (J[5] = (oe) => ee.$emit("close"))
        }, {
          body: h(() => {
            var oe, H, q, _e;
            return [
              u.value ? (o(), i("div", g2, [
                s("section", h2, [
                  s("div", y2, [
                    J[7] || (J[7] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", w2, m(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (o(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: J[0] || (J[0] = (se) => R(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", _2, [
                    J[8] || (J[8] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", k2, m(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (o(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: J[1] || (J[1] = (se) => R(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", b2, [
                    J[9] || (J[9] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", $2, m(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (o(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: J[2] || (J[2] = (se) => R(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  S.value ? (o(), i("div", C2, [
                    J[10] || (J[10] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", x2, [
                      s("button", {
                        class: "compute-hashes-btn",
                        disabled: k.value,
                        onClick: V
                      }, m(k.value ? "Computing hashes..." : "Compute Full Hashes"), 9, S2)
                    ])
                  ])) : y("", !0),
                  C.value ? (o(), i("div", I2, [
                    J[11] || (J[11] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", E2, m(C.value), 1)
                  ])) : y("", !0),
                  s("div", T2, [
                    J[12] || (J[12] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", M2, m(M(u.value.size)), 1)
                  ]),
                  s("div", P2, [
                    J[13] || (J[13] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", R2, m(u.value.category), 1)
                  ]),
                  s("div", D2, [
                    J[14] || (J[14] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", N2, m(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", L2, [
                  s("h4", U2, "Locations (" + m(((oe = u.value.locations) == null ? void 0 : oe.length) || 0) + ")", 1),
                  (H = u.value.locations) != null && H.length ? (o(), i("div", O2, [
                    (o(!0), i(F, null, he(u.value.locations, (se, ve) => (o(), i("div", {
                      key: ve,
                      class: "location-item"
                    }, [
                      s("span", A2, m(se.path), 1),
                      se.modified ? (o(), i("span", z2, "Modified: " + m(se.modified), 1)) : y("", !0),
                      se.path ? (o(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (de) => R(se.path)
                      }, " Copy File Path ", 8, F2)) : y("", !0)
                    ]))), 128))
                  ])) : (o(), i("div", V2, "No locations found"))
                ]),
                s("section", B2, [
                  s("div", W2, [
                    s("h4", G2, "Download Sources (" + m(((q = u.value.sources) == null ? void 0 : q.length) || 0) + ")", 1),
                    s("button", {
                      class: "find-source-btn",
                      onClick: J[3] || (J[3] = (se) => g.value = !0)
                    }, " Find Source ")
                  ]),
                  (_e = u.value.sources) != null && _e.length ? (o(), i("div", j2, [
                    (o(!0), i(F, null, he(u.value.sources, (se, ve) => (o(), i("div", {
                      key: ve,
                      class: "source-item"
                    }, [
                      s("span", H2, m(se.type) + ":", 1),
                      s("a", {
                        href: se.url,
                        target: "_blank",
                        class: "source-url"
                      }, m(se.url), 9, q2),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: v.value === se.url,
                        onClick: (de) => L(se.url)
                      }, m(v.value === se.url ? "..." : "×"), 9, K2)
                    ]))), 128))
                  ])) : (o(), i("div", J2, " No download sources configured ")),
                  p.value ? (o(), i("p", Q2, m(p.value), 1)) : y("", !0),
                  w.value ? (o(), i("p", Y2, m(w.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            s("button", {
              class: "btn-secondary",
              onClick: J[4] || (J[4] = (oe) => ee.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error", "overlay-z-index"]),
        (o(), D(ls, { to: "body" }, [
          $.value ? (o(), i("div", {
            key: 0,
            class: Ve(["toast", $.value.type])
          }, m($.value.message), 3)) : y("", !0)
        ])),
        u.value && g.value ? (o(), D(dc, {
          key: 0,
          model: u.value,
          "overlay-z-index": (e.overlayZIndex || 10003) + 2,
          onClose: J[6] || (J[6] = (oe) => g.value = !1),
          onSaved: A,
          onHashesComputed: N
        }, null, 8, ["model", "overlay-z-index"])) : y("", !0)
      ], 64);
    };
  }
}), gc = /* @__PURE__ */ Te(X2, [["__scopeId", "data-v-cd808fbc"]]), Z2 = { class: "workflow-links-tab" }, e$ = { class: "section-header-row" }, t$ = {
  key: 0,
  class: "state-message"
}, s$ = {
  key: 1,
  class: "error-message"
}, n$ = {
  key: 2,
  class: "candidate-list"
}, o$ = {
  key: 3,
  class: "state-message"
}, a$ = /* @__PURE__ */ Se({
  __name: "WorkflowLinksTab",
  emits: ["selectUrl"],
  setup(e, { emit: t }) {
    const n = t, { getWorkflowSourceCandidates: a } = ft(), l = _([]), r = _(!1), c = _(null), u = P(() => l.value.filter((f) => f.source === "workflow"));
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
    return dt(d), (f, v) => (o(), i("div", Z2, [
      s("div", e$, [
        v[2] || (v[2] = s("div", null, [
          s("h4", null, "Workflow Links"),
          s("p", null, "Model links found in saved workflow notes or metadata.")
        ], -1)),
        b(De, {
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
      r.value ? (o(), i("div", t$, "Scanning workflows...")) : c.value ? (o(), i("div", s$, m(c.value), 1)) : u.value.length ? (o(), i("div", n$, [
        (o(!0), i(F, null, he(u.value, (p) => (o(), D(cc, {
          key: `${p.workflow}:${p.url}`,
          candidate: p,
          "action-label": "Use URL",
          onSelect: v[0] || (v[0] = (w) => n("selectUrl", w))
        }, null, 8, ["candidate"]))), 128))
      ])) : (o(), i("div", o$, " No likely workflow links found. Try Hugging Face or Direct URL. "))
    ]));
  }
}), l$ = /* @__PURE__ */ Te(a$, [["__scopeId", "data-v-1aac54cc"]]), i$ = { class: "civitai-tab" }, r$ = /* @__PURE__ */ Se({
  __name: "CivitaiTab",
  setup(e) {
    return (t, n) => (o(), i("div", i$, [...n[0] || (n[0] = [
      s("div", { class: "placeholder" }, [
        s("div", { class: "icon" }, "🎨"),
        s("h3", null, "Civitai Integration"),
        s("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), c$ = /* @__PURE__ */ Te(r$, [["__scopeId", "data-v-44948051"]]), u$ = { class: "direct-url-tab" }, d$ = {
  key: 0,
  class: "error"
}, m$ = /* @__PURE__ */ Se({
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
    return (f, v) => (o(), i("div", u$, [
      b(uc, {
        modelValue: l.value,
        "onUpdate:modelValue": v[1] || (v[1] = (p) => l.value = p),
        label: "Download URL",
        placeholder: "https://example.com/model.safetensors",
        "action-label": "Queue Download",
        disabled: !r.value.trim() || !c.value,
        onSubmit: u
      }, {
        default: h(() => [
          b(ic, {
            modelValue: r.value,
            "onUpdate:modelValue": v[0] || (v[0] = (p) => r.value = p)
          }, null, 8, ["modelValue"]),
          l.value.trim() && !c.value ? (o(), i("p", d$, " Could not infer a filename from this URL. ")) : y("", !0),
          v[2] || (v[2] = s("p", { class: "note" }, "Model will be queued for background download.", -1))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled"])
    ]));
  }
}), f$ = /* @__PURE__ */ Te(m$, [["__scopeId", "data-v-a6d21f27"]]), v$ = { class: "download-modal" }, p$ = { class: "tab-bar" }, g$ = ["onClick"], h$ = { class: "tab-content" }, y$ = /* @__PURE__ */ Se({
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
    return (p, w) => e.show ? (o(), D(Mt, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: v
    }, {
      body: h(() => [
        s("div", v$, [
          s("div", p$, [
            (o(), i(F, null, he(l, (g) => s("button", {
              key: g.id,
              class: Ve(["tab-btn", { active: r.value === g.id }]),
              onClick: (k) => r.value = g.id
            }, m(g.icon) + " " + m(g.label), 11, g$)), 64))
          ]),
          s("div", h$, [
            r.value === "workflow" ? (o(), D(l$, {
              key: 0,
              onSelectUrl: f
            })) : r.value === "huggingface" ? (o(), D(rc, {
              key: 1,
              onQueue: u
            })) : r.value === "civitai" ? (o(), D(c$, { key: 2 })) : r.value === "direct" ? (o(), D(f$, {
              key: 3,
              "initial-url": c.value,
              onQueue: d
            }, null, 8, ["initial-url"])) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        b(De, {
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
}), hc = /* @__PURE__ */ Te(y$, [["__scopeId", "data-v-de2e4fac"]]), w$ = /* @__PURE__ */ Se({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const n = t, { getEnvironmentModels: a, getStatus: l } = ft(), r = _([]), c = _([]), u = _("production"), d = _(!1), f = _(null), v = _(""), p = _(!1), w = _(null), g = _(!1);
    function k() {
      p.value = !1, n("navigate", "model-index");
    }
    const C = P(
      () => r.value.reduce((N, V) => N + (V.size || 0), 0)
    ), S = P(() => {
      if (!v.value.trim()) return r.value;
      const N = v.value.toLowerCase();
      return r.value.filter((V) => V.filename.toLowerCase().includes(N));
    }), $ = P(() => {
      if (!v.value.trim()) return c.value;
      const N = v.value.toLowerCase();
      return c.value.filter((V) => V.filename.toLowerCase().includes(N));
    }), I = P(() => {
      const N = {};
      for (const ae of S.value) {
        const ee = ae.type || "other";
        N[ee] || (N[ee] = []), N[ee].push(ae);
      }
      const V = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(N).sort(([ae], [ee]) => {
        const J = V.indexOf(ae), fe = V.indexOf(ee);
        return J >= 0 && fe >= 0 ? J - fe : J >= 0 ? -1 : fe >= 0 ? 1 : ae.localeCompare(ee);
      }).map(([ae, ee]) => ({ type: ae, models: ee }));
    });
    function E(N) {
      if (!N) return "Unknown";
      const V = N / (1024 * 1024);
      return V >= 1024 ? `${(V / 1024).toFixed(1)} GB` : `${V.toFixed(0)} MB`;
    }
    function M(N) {
      w.value = N.hash || N.filename;
    }
    function R(N) {
      n("navigate", "model-index");
    }
    function L(N) {
      alert(`Download functionality not yet implemented for ${N}`);
    }
    async function A() {
      d.value = !0, f.value = null;
      try {
        const N = await a();
        r.value = N, c.value = [];
        const V = await l();
        u.value = V.environment || "production";
      } catch (N) {
        f.value = N instanceof Error ? N.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return dt(A), (N, V) => (o(), i(F, null, [
      b(qt, null, {
        header: h(() => [
          b(Kt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: V[1] || (V[1] = (ae) => p.value = !0)
          }, {
            actions: h(() => [
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: V[0] || (V[0] = (ae) => g.value = !0)
              }, {
                default: h(() => [...V[6] || (V[6] = [
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
            "onUpdate:modelValue": V[2] || (V[2] = (ae) => v.value = ae),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (o(), D(Fs, {
            key: 0,
            message: "Loading environment models..."
          })) : f.value ? (o(), D(Vs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: A
          }, null, 8, ["message"])) : (o(), i(F, { key: 2 }, [
            r.value.length ? (o(), D(Ml, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                x(" Total: " + m(r.value.length) + " models • " + m(E(C.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (o(!0), i(F, null, he(I.value, (ae) => (o(), D(Lt, {
              key: ae.type,
              title: ae.type.toUpperCase(),
              count: ae.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(F, null, he(ae.models, (ee) => (o(), D(Yt, {
                  key: ee.hash || ee.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...V[7] || (V[7] = [
                    x("📦", -1)
                  ])]),
                  title: h(() => [
                    x(m(ee.filename), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(E(ee.size)), 1)
                  ]),
                  details: h(() => [
                    b(Tt, {
                      label: "Used by:",
                      value: (ee.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    b(Tt, {
                      label: "Path:",
                      value: ee.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => M(ee)
                    }, {
                      default: h(() => [...V[8] || (V[8] = [
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
            $.value.length ? (o(), D(Lt, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: h(() => [
                (o(!0), i(F, null, he($.value, (ae) => (o(), D(Yt, {
                  key: ae.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...V[9] || (V[9] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(ae.filename), 1)
                  ]),
                  subtitle: h(() => [...V[10] || (V[10] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var ee;
                    return [
                      b(Tt, {
                        label: "Required by:",
                        value: ((ee = ae.workflow_names) == null ? void 0 : ee.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    b(Pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ee) => L(ae.filename)
                    }, {
                      default: h(() => [...V[11] || (V[11] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ee) => R(ae.filename)
                    }, {
                      default: h(() => [...V[12] || (V[12] = [
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
            !S.value.length && !$.value.length ? (o(), D(Ms, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(ks, {
        show: p.value,
        title: "About Environment Models",
        onClose: V[3] || (V[3] = (ae) => p.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            V[13] || (V[13] = x(" These are models currently used by workflows in ", -1)),
            s("strong", null, '"' + m(u.value) + '"', 1),
            V[14] || (V[14] = x(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          b(Pe, {
            variant: "primary",
            onClick: k
          }, {
            default: h(() => [...V[15] || (V[15] = [
              x(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (o(), D(gc, {
        key: 0,
        identifier: w.value,
        onClose: V[4] || (V[4] = (ae) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      b(hc, {
        show: g.value,
        onClose: V[5] || (V[5] = (ae) => g.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), _$ = /* @__PURE__ */ Te(w$, [["__scopeId", "data-v-af3ca736"]]), k$ = {
  key: 0,
  class: "indexing-progress"
}, b$ = { class: "progress-info" }, $$ = { class: "progress-label" }, C$ = { class: "progress-count" }, x$ = { class: "progress-bar" }, S$ = { class: "directory-modal-body" }, I$ = { class: "input-group" }, E$ = { class: "current-path" }, T$ = { class: "input-group" }, M$ = /* @__PURE__ */ Se({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = ft(), c = t, u = _([]), d = _(!1), f = _(!1), v = _(null), p = _(""), w = _(!1), g = _(null), k = _(!1), C = _(null), S = _(""), $ = _(!1), I = _(!1), E = _(null), M = P(
      () => u.value.reduce((fe, oe) => fe + (oe.size || 0), 0)
    ), R = P(() => {
      if (!p.value.trim()) return u.value;
      const fe = p.value.toLowerCase();
      return u.value.filter((oe) => {
        const H = oe, q = oe.sha256 || H.sha256_hash || "";
        return oe.filename.toLowerCase().includes(fe) || q.toLowerCase().includes(fe);
      });
    }), L = P(() => {
      const fe = {};
      for (const H of R.value) {
        const q = H.type || "other";
        fe[q] || (fe[q] = []), fe[q].push(H);
      }
      const oe = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(fe).sort(([H], [q]) => {
        const _e = oe.indexOf(H), se = oe.indexOf(q);
        return _e >= 0 && se >= 0 ? _e - se : _e >= 0 ? -1 : se >= 0 ? 1 : H.localeCompare(q);
      }).map(([H, q]) => ({ type: H, models: q }));
    });
    function A(fe) {
      if (!fe) return "Unknown";
      const oe = 1024 * 1024 * 1024, H = 1024 * 1024;
      return fe >= oe ? `${(fe / oe).toFixed(1)} GB` : fe >= H ? `${(fe / H).toFixed(0)} MB` : `${(fe / 1024).toFixed(0)} KB`;
    }
    function N(fe) {
      g.value = fe.hash || fe.filename;
    }
    async function V() {
      f.value = !0, v.value = null;
      try {
        const fe = await a();
        await ee(), fe.changes > 0 && console.log(`Scan complete: ${fe.changes} changes detected`);
      } catch (fe) {
        v.value = fe instanceof Error ? fe.message : "Failed to scan models";
      } finally {
        f.value = !1;
      }
    }
    async function ae() {
      if (S.value.trim()) {
        $.value = !0, v.value = null;
        try {
          const fe = await r(S.value.trim());
          C.value = fe.path, k.value = !1, S.value = "", await ee(), console.log(`Directory changed: ${fe.models_indexed} models indexed`), c("refresh");
        } catch (fe) {
          v.value = fe instanceof Error ? fe.message : "Failed to change directory";
        } finally {
          $.value = !1;
        }
      }
    }
    async function ee() {
      d.value = !0, v.value = null;
      try {
        u.value = await n();
      } catch (fe) {
        v.value = fe instanceof Error ? fe.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function J() {
      try {
        const fe = await l();
        C.value = fe.path;
      } catch {
      }
    }
    return dt(() => {
      ee(), J();
    }), (fe, oe) => (o(), i(F, null, [
      b(qt, null, {
        header: h(() => [
          b(Kt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: oe[2] || (oe[2] = (H) => w.value = !0)
          }, {
            actions: h(() => [
              b(Pe, {
                variant: "primary",
                size: "sm",
                disabled: f.value,
                onClick: V
              }, {
                default: h(() => [
                  x(m(f.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: oe[0] || (oe[0] = (H) => k.value = !0)
              }, {
                default: h(() => [...oe[10] || (oe[10] = [
                  x(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: oe[1] || (oe[1] = (H) => I.value = !0)
              }, {
                default: h(() => [...oe[11] || (oe[11] = [
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
          E.value ? (o(), i("div", k$, [
            s("div", b$, [
              s("span", $$, m(E.value.message), 1),
              s("span", C$, m(E.value.current) + "/" + m(E.value.total), 1)
            ]),
            s("div", x$, [
              s("div", {
                class: "progress-fill",
                style: Vt({ width: `${E.value.current / E.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          b($n, {
            modelValue: p.value,
            "onUpdate:modelValue": oe[3] || (oe[3] = (H) => p.value = H),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || E.value ? (o(), D(Fs, {
            key: 0,
            message: E.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (o(), D(Vs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: ee
          }, null, 8, ["message"])) : (o(), i(F, { key: 2 }, [
            u.value.length ? (o(), D(Ml, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                x(" Total: " + m(u.value.length) + " models • " + m(A(M.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (o(!0), i(F, null, he(L.value, (H) => (o(), D(Lt, {
              key: H.type,
              title: H.type.toUpperCase(),
              count: H.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (o(!0), i(F, null, he(H.models, (q) => (o(), D(Yt, {
                  key: q.sha256 || q.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...oe[12] || (oe[12] = [
                    x("📦", -1)
                  ])]),
                  title: h(() => [
                    x(m(q.filename), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(A(q.size)), 1)
                  ]),
                  details: h(() => [
                    b(Tt, {
                      label: "Hash:",
                      value: q.hash ? q.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (_e) => N(q)
                    }, {
                      default: h(() => [...oe[13] || (oe[13] = [
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
            R.value.length ? y("", !0) : (o(), D(Ms, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b(ks, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: oe[4] || (oe[4] = (H) => w.value = !1)
      }, {
        content: h(() => [...oe[14] || (oe[14] = [
          s("p", null, [
            x(" Content-addressable model storage shared across "),
            s("strong", null, "all environments"),
            x(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value ? (o(), D(gc, {
        key: 0,
        identifier: g.value,
        onClose: oe[5] || (oe[5] = (H) => g.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      k.value ? (o(), D(Mt, {
        key: 1,
        title: "Change Models Directory",
        size: "md",
        "overlay-z-index": 10010,
        onClose: oe[8] || (oe[8] = (H) => k.value = !1)
      }, {
        body: h(() => [
          s("div", S$, [
            s("div", I$, [
              oe[15] || (oe[15] = s("label", null, "Current Directory", -1)),
              s("code", E$, m(C.value || "Not set"), 1)
            ]),
            s("div", T$, [
              oe[16] || (oe[16] = s("label", null, "New Directory Path", -1)),
              b(Pt, {
                modelValue: S.value,
                "onUpdate:modelValue": oe[6] || (oe[6] = (H) => S.value = H),
                placeholder: "/path/to/models"
              }, null, 8, ["modelValue"])
            ]),
            oe[17] || (oe[17] = s("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
          ])
        ]),
        footer: h(() => [
          b(De, {
            variant: "secondary",
            onClick: oe[7] || (oe[7] = (H) => k.value = !1)
          }, {
            default: h(() => [...oe[18] || (oe[18] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(De, {
            variant: "primary",
            disabled: !S.value.trim() || $.value,
            loading: $.value,
            onClick: ae
          }, {
            default: h(() => [
              x(m($.value ? "Indexing..." : "Change Directory"), 1)
            ]),
            _: 1
          }, 8, ["disabled", "loading"])
        ]),
        _: 1
      })) : y("", !0),
      b(hc, {
        show: I.value,
        onClose: oe[9] || (oe[9] = (H) => I.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), P$ = /* @__PURE__ */ Te(M$, [["__scopeId", "data-v-9fca048b"]]), R$ = { class: "node-details" }, D$ = { class: "status-row" }, N$ = {
  key: 0,
  class: "detail-row"
}, L$ = { class: "value" }, U$ = { class: "detail-row" }, O$ = { class: "value" }, A$ = {
  key: 1,
  class: "detail-row"
}, z$ = { class: "value mono" }, F$ = {
  key: 2,
  class: "detail-row"
}, V$ = ["href"], B$ = {
  key: 3,
  class: "detail-row"
}, W$ = { class: "value mono small" }, G$ = { class: "detail-row" }, j$ = {
  key: 0,
  class: "value"
}, H$ = {
  key: 1,
  class: "workflow-list"
}, q$ = /* @__PURE__ */ Se({
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
    return (u, d) => (o(), D(Mt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (f) => a("close"))
    }, {
      body: h(() => [
        s("div", R$, [
          s("div", D$, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Ve(["status-badge", l.value])
            }, m(r.value), 3)
          ]),
          e.node.version ? (o(), i("div", N$, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", L$, m(e.node.source === "development" ? "" : "v") + m(e.node.version), 1)
          ])) : y("", !0),
          s("div", U$, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", O$, m(c.value), 1)
          ]),
          e.node.registry_id ? (o(), i("div", A$, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", z$, m(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (o(), i("div", F$, [
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
            ], 8, V$)
          ])) : y("", !0),
          e.node.download_url ? (o(), i("div", B$, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", W$, m(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", G$, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (o(), i("span", j$, " Not used in any workflows ")) : (o(), i("div", H$, [
              (o(!0), i(F, null, he(e.node.used_in_workflows, (f) => (o(), i("span", {
                key: f,
                class: "workflow-tag"
              }, m(f), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        b(De, {
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
}), K$ = /* @__PURE__ */ Te(q$, [["__scopeId", "data-v-b342f626"]]), J$ = { class: "dialog-message" }, Q$ = {
  key: 0,
  class: "dialog-details"
}, Y$ = {
  key: 1,
  class: "dialog-warning"
}, X$ = /* @__PURE__ */ Se({
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
    return (t, n) => (o(), D(Mt, {
      title: e.title,
      size: "sm",
      onClose: n[3] || (n[3] = (a) => t.$emit("cancel"))
    }, {
      body: h(() => [
        s("p", J$, m(e.message), 1),
        e.details && e.details.length ? (o(), i("div", Q$, [
          (o(!0), i(F, null, he(e.details, (a, l) => (o(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + m(a), 1))), 128))
        ])) : y("", !0),
        e.warning ? (o(), i("p", Y$, [
          n[4] || (n[4] = s("span", { class: "warning-icon" }, "⚠", -1)),
          x(" " + m(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        b(De, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (a) => t.$emit("cancel"))
        }, {
          default: h(() => [
            x(m(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (o(), D(De, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (a) => t.$emit("secondary"))
        }, {
          default: h(() => [
            x(m(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        b(De, {
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
}), Rl = /* @__PURE__ */ Te(X$, [["__scopeId", "data-v-3670b9f5"]]), Z$ = { class: "mismatch-warning" }, eC = { class: "version-mismatch" }, tC = { class: "version-actual" }, sC = { class: "version-expected" }, nC = { style: { color: "var(--cg-color-warning)" } }, oC = { style: { color: "var(--cg-color-warning)" } }, aC = {
  key: 0,
  class: "community-status-badge"
}, lC = { key: 0 }, iC = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, rC = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, cC = { class: "criticality-control" }, uC = ["value", "disabled", "onChange"], dC = /* @__PURE__ */ Se({
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
    } = ft(), v = _({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), p = _(!1), w = _(null), g = _(""), k = _(!1), C = _(null), S = _(/* @__PURE__ */ new Set()), $ = _(/* @__PURE__ */ new Set()), I = _(null), E = P(() => {
      if (!g.value.trim()) return v.value.nodes;
      const pe = g.value.toLowerCase();
      return v.value.nodes.filter(
        (ge) => {
          var T, O;
          return ge.name.toLowerCase().includes(pe) || ((T = ge.description) == null ? void 0 : T.toLowerCase().includes(pe)) || ((O = ge.repository) == null ? void 0 : O.toLowerCase().includes(pe));
        }
      );
    }), M = P(
      () => E.value.filter((pe) => pe.installed && pe.tracked)
    ), R = P(
      () => E.value.filter((pe) => !pe.installed && pe.tracked && !pe.issue_type)
    ), L = P(
      () => E.value.filter((pe) => pe.installed && !pe.tracked)
    ), A = P(
      () => E.value.filter((pe) => pe.issue_type === "version_gated")
    ), N = P(
      () => E.value.filter((pe) => pe.issue_type === "uninstallable")
    );
    function V(pe) {
      return pe.registry_id || pe.name;
    }
    function ae(pe) {
      return S.value.has(V(pe));
    }
    async function ee(pe, ge) {
      const T = pe.registry_id;
      if (!T) {
        a("toast", `Node "${pe.name}" has no package id for install`, "warning");
        return;
      }
      if (ge === "git" && !pe.repository) {
        a("toast", `Node "${pe.name}" has no repository URL for git install`, "warning");
        return;
      }
      const O = {
        id: T,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      ge === "git" && pe.repository && (O.repository = pe.repository, O.install_source = "git"), await d(O), S.value.add(V(pe)), a("toast", `✓ Queued install for "${pe.name}"`, "success");
    }
    function J(pe) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[pe] || pe;
    }
    const fe = P(() => n.versionMismatches.length > 0);
    function oe(pe) {
      return !pe.used_in_workflows || pe.used_in_workflows.length === 0 ? "Not used in any workflows" : pe.used_in_workflows.length === 1 ? pe.used_in_workflows[0] : `${pe.used_in_workflows.length} workflows`;
    }
    function H(pe) {
      return pe.criticality === "optional" ? "optional" : "required";
    }
    function q(pe) {
      return $.value.has(pe.name);
    }
    async function _e(pe, ge) {
      const T = ge.target, O = H(pe), le = T.value;
      if (le !== O) {
        $.value = new Set($.value).add(pe.name), pe.criticality = le;
        try {
          const Ie = await f(pe.name, le);
          if (Ie.status !== "success") {
            pe.criticality = O, a("toast", Ie.message || `Failed to update "${pe.name}" criticality`, "error");
            return;
          }
          a("toast", `Marked "${pe.name}" as ${le}`, "success");
        } catch (Ie) {
          pe.criticality = O, T.value = O, a("toast", `Error updating criticality: ${Ie instanceof Error ? Ie.message : "Unknown error"}`, "error");
        } finally {
          const Ie = new Set($.value);
          Ie.delete(pe.name), $.value = Ie;
        }
      }
    }
    function se(pe) {
      return pe.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function ve(pe) {
      return pe.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function de(pe) {
      return pe.registry_id ? `Community-mapped package: ${pe.registry_id}` : "Community-mapped package";
    }
    function G(pe) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function ne(pe) {
      C.value = pe;
    }
    function te() {
      a("open-node-manager");
    }
    function Ee(pe) {
      I.value = {
        title: "Track as Development Node",
        message: `Track "${pe}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0;
            const ge = await r(pe);
            ge.status === "success" ? (a("toast", `✓ Node "${pe}" tracked as development`, "success"), await Ae()) : a("toast", `Failed to track node: ${ge.message || "Unknown error"}`, "error");
          } catch (ge) {
            a("toast", `Error tracking node: ${ge instanceof Error ? ge.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function we(pe) {
      I.value = {
        title: "Remove Untracked Node",
        message: `Remove "${pe}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0;
            const ge = await u(pe);
            ge.status === "success" ? (a("toast", `✓ Node "${pe}" removed`, "success"), await Ae()) : a("toast", `Failed to remove node: ${ge.message || "Unknown error"}`, "error");
          } catch (ge) {
            a("toast", `Error removing node: ${ge instanceof Error ? ge.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function Oe(pe) {
      I.value = {
        title: "Install Missing Node",
        message: `Install "${pe}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0;
            const ge = await c(pe);
            ge.status === "success" ? (a("toast", `✓ Node "${pe}" installed`, "success"), await Ae()) : a("toast", `Failed to install node: ${ge.message || "Unknown error"}`, "error");
          } catch (ge) {
            a("toast", `Error installing node: ${ge instanceof Error ? ge.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function Ne(pe) {
      I.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${pe.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0, await ee(pe, "registry");
          } catch (ge) {
            a("toast", `Error queueing install: ${ge instanceof Error ? ge.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function $e(pe) {
      I.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${pe.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0, await ee(pe, "git");
          } catch (ge) {
            a("toast", `Error queueing git install: ${ge instanceof Error ? ge.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    async function Ae() {
      p.value = !0, w.value = null;
      try {
        v.value = await l();
      } catch (pe) {
        w.value = pe instanceof Error ? pe.message : "Failed to load nodes";
      } finally {
        p.value = !1;
      }
    }
    return dt(Ae), (pe, ge) => (o(), i(F, null, [
      b(qt, null, {
        header: h(() => [
          b(Kt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: ge[0] || (ge[0] = (T) => k.value = !0)
          }, {
            actions: h(() => [
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: te
              }, {
                default: h(() => [...ge[7] || (ge[7] = [
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
            "onUpdate:modelValue": ge[1] || (ge[1] = (T) => g.value = T),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          p.value ? (o(), D(Fs, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (o(), D(Vs, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: Ae
          }, null, 8, ["message"])) : (o(), i(F, { key: 2 }, [
            fe.value ? (o(), D(Lt, {
              key: 0,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                s("div", Z$, [
                  ge[8] || (ge[8] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (o(!0), i(F, null, he(e.versionMismatches, (T) => (o(), D(Yt, {
                  key: T.name,
                  status: "warning"
                }, {
                  icon: h(() => [...ge[9] || (ge[9] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", eC, [
                      s("span", tC, m(T.actual), 1),
                      ge[10] || (ge[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", sC, m(T.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "warning",
                      size: "sm",
                      onClick: ge[2] || (ge[2] = (O) => a("repair-environment"))
                    }, {
                      default: h(() => [...ge[11] || (ge[11] = [
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
            A.value.length ? (o(), D(Lt, {
              key: 1,
              title: "BLOCKED",
              count: A.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(F, null, he(A.value, (T) => (o(), D(Yt, {
                  key: `blocked-${T.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...ge[12] || (ge[12] = [
                    x("⛔", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", nC, m(se(T)), 1)
                  ]),
                  details: h(() => [
                    b(Tt, {
                      label: "Guidance:",
                      value: T.issue_guidance || ve(T)
                    }, null, 8, ["value"]),
                    b(Tt, {
                      label: "Used by:",
                      value: oe(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (O) => ne(T)
                    }, {
                      default: h(() => [...ge[13] || (ge[13] = [
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
            N.value.length ? (o(), D(Lt, {
              key: 2,
              title: "COMMUNITY-MAPPED",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(F, null, he(N.value, (T) => (o(), D(Yt, {
                  key: `community-${T.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...ge[14] || (ge[14] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", oC, m(de(T)), 1)
                  ]),
                  details: h(() => [
                    b(Tt, {
                      label: "Guidance:",
                      value: T.issue_guidance || G(T)
                    }, null, 8, ["value"]),
                    b(Tt, {
                      label: "Used by:",
                      value: oe(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (O) => ne(T)
                    }, {
                      default: h(() => [...ge[15] || (ge[15] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    ae(T) ? (o(), i("span", aC, "Queued")) : (o(), i(F, { key: 1 }, [
                      T.registry_id ? (o(), D(Pe, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (O) => Ne(T)
                      }, {
                        default: h(() => [...ge[16] || (ge[16] = [
                          x(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0),
                      T.repository ? (o(), D(Pe, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (O) => $e(T)
                      }, {
                        default: h(() => [...ge[17] || (ge[17] = [
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
            L.value.length ? (o(), D(Lt, {
              key: 3,
              title: "UNTRACKED",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(F, null, he(L.value, (T) => (o(), D(Yt, {
                  key: T.name,
                  status: "warning"
                }, {
                  icon: h(() => [...ge[18] || (ge[18] = [
                    x("?", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [...ge[19] || (ge[19] = [
                    s("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    b(Tt, {
                      label: "Used by:",
                      value: oe(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (O) => ne(T)
                    }, {
                      default: h(() => [...ge[20] || (ge[20] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => Ee(T.name)
                    }, {
                      default: h(() => [...ge[21] || (ge[21] = [
                        x(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (O) => we(T.name)
                    }, {
                      default: h(() => [...ge[22] || (ge[22] = [
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
            M.value.length ? (o(), D(Lt, {
              key: 4,
              title: "INSTALLED",
              count: M.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(F, null, he(M.value, (T) => (o(), D(Yt, {
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
                    T.version ? (o(), i("span", lC, m(T.source === "development" ? "" : "v") + m(T.version), 1)) : (o(), i("span", iC, "version unknown")),
                    s("span", rC, " • " + m(J(T.source)), 1)
                  ]),
                  details: h(() => [
                    b(Tt, {
                      label: "Used by:",
                      value: oe(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (O) => ne(T)
                    }, {
                      default: h(() => [...ge[23] || (ge[23] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    s("label", cC, [
                      ge[25] || (ge[25] = s("span", null, "Readiness", -1)),
                      s("select", {
                        class: "criticality-select",
                        value: H(T),
                        disabled: q(T),
                        onChange: (O) => _e(T, O)
                      }, [...ge[24] || (ge[24] = [
                        s("option", { value: "required" }, "Required", -1),
                        s("option", { value: "optional" }, "Optional", -1)
                      ])], 40, uC)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            R.value.length ? (o(), D(Lt, {
              key: 5,
              title: "MISSING",
              count: R.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(F, null, he(R.value, (T) => (o(), D(Yt, {
                  key: T.name,
                  status: "missing"
                }, {
                  icon: h(() => [...ge[26] || (ge[26] = [
                    x("!", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [...ge[27] || (ge[27] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    b(Tt, {
                      label: "Required by:",
                      value: oe(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (O) => ne(T)
                    }, {
                      default: h(() => [...ge[28] || (ge[28] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => Oe(T.name)
                    }, {
                      default: h(() => [...ge[29] || (ge[29] = [
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
            !M.value.length && !R.value.length && !A.value.length && !N.value.length && !L.value.length ? (o(), D(Ms, {
              key: 6,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(ks, {
        show: k.value,
        title: "About Custom Nodes",
        onClose: ge[4] || (ge[4] = (T) => k.value = !1)
      }, {
        content: h(() => [...ge[30] || (ge[30] = [
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
            onClick: ge[3] || (ge[3] = (T) => k.value = !1)
          }, {
            default: h(() => [...ge[31] || (ge[31] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      C.value ? (o(), D(K$, {
        key: 0,
        node: C.value,
        onClose: ge[5] || (ge[5] = (T) => C.value = null)
      }, null, 8, ["node"])) : y("", !0),
      I.value ? (o(), D(Rl, {
        key: 1,
        title: I.value.title,
        message: I.value.message,
        warning: I.value.warning,
        "confirm-label": I.value.confirmLabel,
        destructive: I.value.destructive,
        onConfirm: I.value.onConfirm,
        onCancel: ge[6] || (ge[6] = (T) => I.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), mC = /* @__PURE__ */ Te(dC, [["__scopeId", "data-v-edfa1c86"]]), fC = { class: "setting-info" }, vC = { class: "setting-label" }, pC = {
  key: 0,
  class: "required-marker"
}, gC = {
  key: 0,
  class: "setting-description"
}, hC = { class: "setting-control" }, yC = /* @__PURE__ */ Se({
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
      class: Ve(["setting-row", { disabled: e.disabled, stacked: e.stacked }])
    }, [
      s("div", fC, [
        s("div", vC, [
          x(m(e.label) + " ", 1),
          e.required ? (o(), i("span", pC, "*")) : y("", !0)
        ]),
        e.description ? (o(), i("div", gC, m(e.description), 1)) : y("", !0)
      ]),
      s("div", hC, [
        rt(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), Sn = /* @__PURE__ */ Te(yC, [["__scopeId", "data-v-3e106b1c"]]), wC = ["type", "value", "placeholder", "disabled"], _C = /* @__PURE__ */ Se({
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
    return dt(() => {
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
      class: Ve(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = Ss((f) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Ss((f) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (f) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (f) => u.$emit("blur"))
    }, null, 42, wC));
  }
}), Mn = /* @__PURE__ */ Te(_C, [["__scopeId", "data-v-0380d08f"]]), kC = { class: "toggle" }, bC = ["checked", "disabled"], $C = /* @__PURE__ */ Se({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (o(), i("label", kC, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: n[0] || (n[0] = (a) => t.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, bC),
      n[1] || (n[1] = s("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Ri = /* @__PURE__ */ Te($C, [["__scopeId", "data-v-71c0f550"]]), ja = "ComfyGit.Deploy.GitHubPAT";
function yc(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function CC(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function xC() {
  function e() {
    try {
      return localStorage.getItem(ja);
    } catch {
      return null;
    }
  }
  function t(l) {
    try {
      localStorage.setItem(ja, l);
    } catch (r) {
      console.error("[useGitAuth] Failed to save token:", r);
    }
  }
  function n() {
    try {
      localStorage.removeItem(ja);
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
    isRemoteSsh: yc,
    isRemoteHttps: CC
  };
}
const SC = { class: "workspace-settings-content" }, IC = { class: "settings-section" }, EC = { class: "path-setting" }, TC = { class: "path-value" }, MC = { class: "path-setting" }, PC = { class: "path-value" }, RC = { class: "settings-section" }, DC = { class: "token-setting" }, NC = {
  key: 0,
  class: "token-warning"
}, LC = { class: "token-actions" }, UC = { class: "settings-section" }, OC = { class: "settings-section" }, AC = /* @__PURE__ */ Se({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: n }) {
    const a = e, l = n, { getConfig: r, updateConfig: c, getRemotes: u, testGitAuth: d } = ft(), { getToken: f, setToken: v, clearToken: p, hasToken: w } = xC(), g = _(!1), k = _(null), C = _(null), S = _(null), $ = _(null), I = _(""), E = _(""), M = _(""), R = _(""), L = _(!1), A = _(!1), N = _(!1), V = _(""), ae = _(!1), ee = _(!1), J = _(null), fe = _(!1), oe = _(!0);
    function H(Oe) {
      return Oe.join(" ");
    }
    function q(Oe) {
      return Oe.trim() ? Oe.trim().split(/\s+/) : [];
    }
    const _e = P(() => {
      if (!$.value) return !1;
      const Oe = L.value, Ne = A.value, $e = N.value, Ae = R.value !== H($.value.comfyui_extra_args || []);
      return Oe || Ne || $e || Ae;
    }), se = P(() => w());
    async function ve() {
      var Oe;
      g.value = !0, k.value = null;
      try {
        S.value = await r(a.workspacePath || void 0), $.value = { ...S.value }, I.value = S.value.civitai_api_key || "", E.value = S.value.huggingface_token || "", R.value = H(S.value.comfyui_extra_args || []), M.value = f() || "", V.value = M.value, L.value = !1, A.value = !1, N.value = !1, J.value = null;
        const Ne = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        fe.value = Ne !== "false", oe.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const Ae = (Oe = (await u()).remotes) == null ? void 0 : Oe.find((pe) => pe.name === "origin");
          ae.value = !!(Ae && yc(Ae.url));
        } catch {
          ae.value = !1;
        }
      } catch (Ne) {
        k.value = Ne instanceof Error ? Ne.message : "Failed to load settings";
      } finally {
        g.value = !1;
      }
    }
    async function de() {
      var Oe;
      C.value = null;
      try {
        const Ne = {};
        L.value && (Ne.civitai_api_key = I.value || null), A.value && (Ne.huggingface_token = E.value || null), R.value !== H(((Oe = $.value) == null ? void 0 : Oe.comfyui_extra_args) || []) && (Ne.comfyui_extra_args = q(R.value)), await c(Ne, a.workspacePath || void 0), N.value && (M.value ? v(M.value) : p()), await ve(), C.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          C.value = null;
        }, 3e3);
      } catch (Ne) {
        const $e = Ne instanceof Error ? Ne.message : "Failed to save settings";
        C.value = { type: "error", message: $e }, l("error", $e);
      }
    }
    function G() {
      $.value && (I.value = $.value.civitai_api_key || "", E.value = $.value.huggingface_token || "", R.value = H($.value.comfyui_extra_args || []), M.value = V.value, L.value = !1, A.value = !1, N.value = !1, J.value = null, C.value = null);
    }
    async function ne() {
      if (M.value) {
        ee.value = !0, J.value = null;
        try {
          const Oe = await d(M.value);
          J.value = {
            type: Oe.status === "success" ? "success" : "error",
            message: Oe.message
          };
        } catch (Oe) {
          J.value = {
            type: "error",
            message: Oe instanceof Error ? Oe.message : "Connection test failed"
          };
        } finally {
          ee.value = !1;
        }
      }
    }
    function te() {
      M.value = "", N.value = !0, J.value = null;
    }
    function Ee(Oe) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(Oe)), console.log("[ComfyGit] Auto-refresh setting saved:", Oe);
    }
    function we(Oe) {
      Oe ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", Oe ? "enabled" : "disabled");
    }
    return t({
      saveSettings: de,
      resetSettings: G,
      hasChanges: _e,
      loadSettings: ve
    }), dt(ve), (Oe, Ne) => (o(), i("div", SC, [
      g.value ? (o(), D(Fs, {
        key: 0,
        message: "Loading workspace settings..."
      })) : k.value ? (o(), D(Vs, {
        key: 1,
        message: k.value,
        retry: !0,
        onRetry: ve
      }, null, 8, ["message"])) : (o(), i(F, { key: 2 }, [
        b(Lt, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var $e, Ae;
            return [
              s("div", IC, [
                s("div", EC, [
                  Ne[9] || (Ne[9] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  Ne[10] || (Ne[10] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", TC, m((($e = S.value) == null ? void 0 : $e.workspace_path) || "Loading..."), 1)
                ]),
                s("div", MC, [
                  Ne[11] || (Ne[11] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  Ne[12] || (Ne[12] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", PC, m(((Ae = S.value) == null ? void 0 : Ae.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        b(Lt, { title: "API CREDENTIALS" }, {
          default: h(() => [
            s("div", RC, [
              b(Sn, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  b(Mn, {
                    modelValue: I.value,
                    "onUpdate:modelValue": Ne[0] || (Ne[0] = ($e) => I.value = $e),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: Ne[1] || (Ne[1] = ($e) => L.value = !0)
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
                    "onUpdate:modelValue": Ne[2] || (Ne[2] = ($e) => E.value = $e),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: Ne[3] || (Ne[3] = ($e) => A.value = !0)
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
                  s("div", DC, [
                    b(Mn, {
                      modelValue: M.value,
                      "onUpdate:modelValue": Ne[4] || (Ne[4] = ($e) => M.value = $e),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: Ne[5] || (Ne[5] = ($e) => N.value = !0)
                    }, null, 8, ["modelValue"]),
                    ae.value ? (o(), i("div", NC, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : y("", !0),
                    Ne[15] || (Ne[15] = s("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    s("div", LC, [
                      b(Pe, {
                        variant: "ghost",
                        size: "xs",
                        loading: ee.value,
                        disabled: !M.value || ee.value,
                        onClick: ne
                      }, {
                        default: h(() => [...Ne[13] || (Ne[13] = [
                          x(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      se.value ? (o(), D(Pe, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: te
                      }, {
                        default: h(() => [...Ne[14] || (Ne[14] = [
                          x(" Clear ", -1)
                        ])]),
                        _: 1
                      })) : y("", !0)
                    ]),
                    J.value ? (o(), i("div", {
                      key: 1,
                      class: Ve(["token-test-result", J.value.type])
                    }, m(J.value.message), 3)) : y("", !0)
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        b(Lt, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            s("div", UC, [
              b(Sn, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  b(Mn, {
                    modelValue: R.value,
                    "onUpdate:modelValue": Ne[6] || (Ne[6] = ($e) => R.value = $e),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              Ne[16] || (Ne[16] = s("div", { class: "setting-hint" }, [
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
        b(Lt, { title: "UI SETTINGS" }, {
          default: h(() => [
            s("div", OC, [
              b(Sn, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  b(Ri, {
                    modelValue: fe.value,
                    "onUpdate:modelValue": [
                      Ne[7] || (Ne[7] = ($e) => fe.value = $e),
                      Ee
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
                  b(Ri, {
                    modelValue: oe.value,
                    "onUpdate:modelValue": [
                      Ne[8] || (Ne[8] = ($e) => oe.value = $e),
                      we
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        C.value ? (o(), D(Ml, {
          key: 0,
          variant: (C.value.type === "success", "compact")
        }, {
          default: h(() => [
            s("span", {
              style: Vt({ color: C.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, m(C.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), wc = /* @__PURE__ */ Te(AC, [["__scopeId", "data-v-f1bdc574"]]), zC = /* @__PURE__ */ Se({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const t = _(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (o(), D(qt, null, {
      header: h(() => [
        b(Kt, { title: "WORKSPACE SETTINGS" }, {
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
              (c = t.value) != null && c.hasChanges ? (o(), D(Pe, {
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
        b(wc, {
          ref_key: "contentRef",
          ref: t,
          onSaved: n
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), FC = { class: "env-title" }, VC = {
  key: 0,
  class: "current-badge"
}, BC = {
  key: 0,
  class: "branch-info"
}, WC = /* @__PURE__ */ Se({
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
    return (t, n) => (o(), D(Yt, {
      status: e.isCurrent ? "synced" : void 0
    }, cs({
      icon: h(() => [
        x(m(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        s("div", FC, [
          s("span", null, m(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (o(), i("span", VC, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (o(), i("span", BC, [
          n[0] || (n[0] = s("span", { class: "branch-icon" }, "⎇", -1)),
          x(" " + m(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: h(() => [
        rt(t.$slots, "actions", {}, void 0, !0)
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
          e.lastUsed && e.showLastUsed ? (o(), D(Tt, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), GC = /* @__PURE__ */ Te(WC, [["__scopeId", "data-v-9231917a"]]), jC = { class: "env-details" }, HC = { class: "status-row" }, qC = {
  key: 0,
  class: "detail-row"
}, KC = { class: "value mono" }, JC = {
  key: 1,
  class: "detail-row"
}, QC = { class: "value mono small" }, YC = { class: "collapsible-section" }, XC = { class: "value" }, ZC = {
  key: 0,
  class: "collapsible-body"
}, ex = { class: "item-list" }, tx = { class: "item-name" }, sx = { class: "item-name" }, nx = { class: "item-name" }, ox = { class: "item-name" }, ax = {
  key: 0,
  class: "empty-list"
}, lx = { class: "collapsible-section" }, ix = { class: "value" }, rx = {
  key: 0,
  class: "collapsible-body"
}, cx = { class: "item-list" }, ux = { class: "item-name" }, dx = {
  key: 0,
  class: "item-meta"
}, mx = {
  key: 0,
  class: "empty-list"
}, fx = { class: "collapsible-section" }, vx = { class: "value" }, px = {
  key: 0,
  class: "missing-count"
}, gx = {
  key: 0,
  class: "collapsible-body"
}, hx = { class: "item-list" }, yx = { class: "model-row" }, wx = { class: "item-name" }, _x = { class: "model-meta" }, kx = { class: "item-meta" }, bx = {
  key: 0,
  class: "item-meta"
}, $x = {
  key: 0,
  class: "empty-list"
}, Cx = {
  key: 2,
  class: "section-divider"
}, xx = {
  key: 3,
  class: "detail-row"
}, Sx = { class: "value" }, Ix = { class: "footer-actions" }, Ex = /* @__PURE__ */ Se({
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
    return (d, f) => (o(), D(Mt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: f[6] || (f[6] = (v) => a("close"))
    }, {
      body: h(() => {
        var v, p, w, g, k, C, S, $, I, E, M, R, L, A;
        return [
          s("div", jC, [
            s("div", HC, [
              f[7] || (f[7] = s("span", { class: "label" }, "Status:", -1)),
              s("span", {
                class: Ve(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, m(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (o(), i("div", qC, [
              f[8] || (f[8] = s("span", { class: "label" }, "Branch:", -1)),
              s("span", KC, m(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (o(), i("div", JC, [
              f[9] || (f[9] = s("span", { class: "label" }, "Path:", -1)),
              s("span", QC, m(e.environment.path), 1)
            ])) : y("", !0),
            f[18] || (f[18] = s("div", { class: "section-divider" }, null, -1)),
            s("div", YC, [
              s("div", {
                class: "collapsible-header",
                onClick: f[0] || (f[0] = (N) => r("workflows"))
              }, [
                f[10] || (f[10] = s("span", { class: "label" }, "Workflows:", -1)),
                s("span", XC, m(((v = e.detail) == null ? void 0 : v.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (o(), i("span", {
                  key: 0,
                  class: Ve(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (o(), i("div", ZC, [
                s("div", ex, [
                  (o(!0), i(F, null, he(e.detail.workflows.synced, (N) => (o(), i("div", {
                    key: "synced-" + N,
                    class: "list-item"
                  }, [
                    s("span", tx, m(N), 1),
                    f[11] || (f[11] = s("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (o(!0), i(F, null, he(e.detail.workflows.new, (N) => (o(), i("div", {
                    key: "new-" + N,
                    class: "list-item"
                  }, [
                    s("span", sx, m(N), 1),
                    f[12] || (f[12] = s("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (o(!0), i(F, null, he(e.detail.workflows.modified, (N) => (o(), i("div", {
                    key: "mod-" + N,
                    class: "list-item"
                  }, [
                    s("span", nx, m(N), 1),
                    f[13] || (f[13] = s("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (o(!0), i(F, null, he(e.detail.workflows.deleted, (N) => (o(), i("div", {
                    key: "del-" + N,
                    class: "list-item"
                  }, [
                    s("span", ox, m(N), 1),
                    f[14] || (f[14] = s("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (o(), i("div", ax, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            s("div", lx, [
              s("div", {
                class: "collapsible-header",
                onClick: f[1] || (f[1] = (N) => r("nodes"))
              }, [
                f[15] || (f[15] = s("span", { class: "label" }, "Nodes:", -1)),
                s("span", ix, m(((g = e.detail) == null ? void 0 : g.node_count) ?? e.environment.node_count), 1),
                (k = e.detail) != null && k.nodes ? (o(), i("span", {
                  key: 0,
                  class: Ve(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (C = e.detail) != null && C.nodes && l.value.has("nodes") ? (o(), i("div", rx, [
                s("div", cx, [
                  (o(!0), i(F, null, he(e.detail.nodes, (N) => (o(), i("div", {
                    key: N.name,
                    class: "list-item"
                  }, [
                    s("span", ux, m(N.name), 1),
                    N.version ? (o(), i("span", dx, m(N.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (o(), i("div", mx, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            s("div", fx, [
              s("div", {
                class: "collapsible-header",
                onClick: f[2] || (f[2] = (N) => r("models"))
              }, [
                f[16] || (f[16] = s("span", { class: "label" }, "Models:", -1)),
                s("span", vx, [
                  x(m(((S = e.detail) == null ? void 0 : S.model_count) ?? e.environment.model_count) + " ", 1),
                  (I = ($ = e.detail) == null ? void 0 : $.models) != null && I.missing.length ? (o(), i("span", px, "(" + m(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (E = e.detail) != null && E.models ? (o(), i("span", {
                  key: 0,
                  class: Ve(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (M = e.detail) != null && M.models && l.value.has("models") ? (o(), i("div", gx, [
                s("div", hx, [
                  (o(!0), i(F, null, he(e.detail.models.missing, (N) => (o(), i("div", {
                    key: N.filename,
                    class: "list-item model-item"
                  }, [
                    s("div", yx, [
                      s("span", wx, m(N.filename), 1),
                      s("span", {
                        class: Ve(["criticality-badge", N.criticality])
                      }, m(N.criticality), 3)
                    ]),
                    s("div", _x, [
                      s("span", kx, m(N.category), 1),
                      N.workflow_names.length ? (o(), i("span", bx, " used by: " + m(N.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (o(), i("div", $x, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (R = e.detail) != null && R.created_at || e.environment.created_at ? (o(), i("div", Cx)) : y("", !0),
            (L = e.detail) != null && L.created_at || e.environment.created_at ? (o(), i("div", xx, [
              f[17] || (f[17] = s("span", { class: "label" }, "Created:", -1)),
              s("span", Sx, m(u(((A = e.detail) == null ? void 0 : A.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        s("div", Ix, [
          b(De, {
            variant: "secondary",
            size: "sm",
            onClick: f[3] || (f[3] = (v) => a("export", e.environment.name))
          }, {
            default: h(() => [...f[19] || (f[19] = [
              x(" Export ", -1)
            ])]),
            _: 1
          }),
          e.canDelete ? (o(), D(De, {
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
          b(De, {
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
}), Tx = /* @__PURE__ */ Te(Ex, [["__scopeId", "data-v-750671f5"]]), _c = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], kc = "3.12", Dl = [
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
], bc = "auto", Mx = { class: "progress-bar" }, Px = /* @__PURE__ */ Se({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, n = P(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (a, l) => (o(), i("div", Mx, [
      s("div", {
        class: Ve(["progress-fill", e.variant]),
        style: Vt({ width: n.value })
      }, null, 6)
    ]));
  }
}), $c = /* @__PURE__ */ Te(Px, [["__scopeId", "data-v-1beb0512"]]), Rx = { class: "task-progress" }, Dx = { class: "progress-info" }, Nx = { class: "progress-percentage" }, Lx = { class: "progress-message" }, Ux = {
  key: 0,
  class: "progress-steps"
}, Ox = { class: "step-icon" }, Ax = { class: "step-label" }, zx = /* @__PURE__ */ Se({
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
    return (l, r) => (o(), i("div", Rx, [
      b($c, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", Dx, [
        s("span", Nx, m(e.progress) + "%", 1),
        s("span", Lx, m(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (o(), i("div", Ux, [
        (o(!0), i(F, null, he(e.steps, (c) => (o(), i("div", {
          key: c.id,
          class: Ve(["step", n(c.id)])
        }, [
          s("span", Ox, m(a(c.id)), 1),
          s("span", Ax, m(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), ia = /* @__PURE__ */ Te(zx, [["__scopeId", "data-v-9d1de66c"]]), Fx = {
  key: 0,
  class: "create-env-form"
}, Vx = { class: "form-field" }, Bx = { class: "input-wrapper" }, Wx = {
  key: 0,
  class: "validating-indicator"
}, Gx = {
  key: 1,
  class: "valid-indicator"
}, jx = {
  key: 0,
  class: "field-error"
}, Hx = { class: "form-field" }, qx = ["value"], Kx = { class: "form-field" }, Jx = ["disabled"], Qx = ["value"], Yx = { class: "form-field" }, Xx = ["value"], Zx = { class: "form-field form-field--checkbox" }, e3 = { class: "form-checkbox" }, t3 = {
  key: 1,
  class: "create-env-progress"
}, s3 = { class: "creating-intro" }, n3 = {
  key: 0,
  class: "progress-warning"
}, o3 = {
  key: 1,
  class: "create-error"
}, a3 = { class: "error-message" }, l3 = {
  key: 1,
  class: "footer-status"
}, i3 = 10, r3 = /* @__PURE__ */ Se({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const n = t, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = ft(), u = _(""), d = _(kc), f = _("latest"), v = _(bc), p = _(!1), w = _(null), g = _(!1), k = _(!1);
    let C = null, S = 0;
    const $ = P(() => !!u.value.trim() && k.value && !w.value && !g.value && !M.value), I = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), E = _(!1), M = _(!1), R = _({
      progress: 0,
      message: ""
    });
    let L = null, A = 0;
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
    ], V = _(null);
    $t(u, (se) => {
      k.value = !1, C && (clearTimeout(C), C = null);
      const ve = se.trim();
      if (!ve) {
        w.value = null, g.value = !1;
        return;
      }
      g.value = !0, C = setTimeout(() => {
        ae(ve);
      }, 400);
    });
    async function ae(se, ve = !1) {
      const de = se.trim();
      if (!de)
        return k.value = !1, g.value = !1, w.value = ve ? "Environment name is required" : null, !1;
      const G = ++S;
      g.value = !0;
      try {
        const ne = await c(de);
        return G !== S ? !1 : (w.value = ne.valid ? null : ne.error || "Invalid name", k.value = !!ne.valid, !!ne.valid);
      } catch {
        return G !== S || (w.value = "Failed to validate name", k.value = !1), !1;
      } finally {
        G === S && (g.value = !1);
      }
    }
    async function ee() {
      C && (clearTimeout(C), C = null), await ae(u.value, !0);
    }
    function J() {
      M.value || n("close");
    }
    async function fe() {
      const se = u.value.trim();
      if (!se) {
        w.value = "Environment name is required";
        return;
      }
      if (C && (clearTimeout(C), C = null), !!await ae(se, !0)) {
        M.value = !0, R.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const de = {
            name: se,
            python_version: d.value,
            comfyui_version: f.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, G = await l(de);
          G.status === "started" ? oe() : G.status === "error" && (R.value = {
            progress: 0,
            message: G.message || "Failed to start creation",
            error: G.message
          });
        } catch (de) {
          R.value = {
            progress: 0,
            message: de instanceof Error ? de.message : "Unknown error",
            error: de instanceof Error ? de.message : "Unknown error"
          };
        }
      }
    }
    function oe() {
      L || (A = 0, L = window.setInterval(async () => {
        try {
          const se = await r();
          A = 0, R.value = {
            progress: se.progress ?? 0,
            message: se.message,
            phase: se.phase,
            error: se.error
          }, se.state === "complete" ? (H(), n("created", se.environment_name || u.value.trim(), p.value)) : se.state === "error" ? (H(), R.value.error = se.error || se.message) : se.state === "idle" && M.value && (H(), R.value.error = "Creation was interrupted. Please try again.");
        } catch {
          A++, A >= i3 && (H(), R.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function H() {
      L && (clearInterval(L), L = null);
    }
    function q() {
      M.value = !1, R.value = { progress: 0, message: "" }, n("close");
    }
    async function _e() {
      E.value = !0;
      try {
        I.value = await a();
      } catch (se) {
        console.error("Failed to load ComfyUI releases:", se);
      } finally {
        E.value = !1;
      }
    }
    return dt(async () => {
      var se;
      await jt(), (se = V.value) == null || se.focus(), _e();
    }), Gn(() => {
      H(), C && (clearTimeout(C), C = null);
    }), (se, ve) => (o(), D(Mt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !M.value,
      onClose: J
    }, {
      body: h(() => [
        M.value ? (o(), i("div", t3, [
          s("p", s3, [
            ve[12] || (ve[12] = x(" Creating environment ", -1)),
            s("strong", null, m(u.value), 1),
            ve[13] || (ve[13] = x("... ", -1))
          ]),
          b(ia, {
            progress: R.value.progress,
            message: R.value.message,
            "current-phase": R.value.phase,
            variant: R.value.error ? "error" : "default",
            "show-steps": !0,
            steps: N
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          R.value.error ? y("", !0) : (o(), i("p", n3, " This may take several minutes. Please wait... ")),
          R.value.error ? (o(), i("div", o3, [
            s("p", a3, m(R.value.error), 1)
          ])) : y("", !0)
        ])) : (o(), i("div", Fx, [
          s("div", Vx, [
            ve[6] || (ve[6] = s("label", { class: "form-label" }, "Name", -1)),
            s("div", Bx, [
              At(s("input", {
                ref_key: "nameInput",
                ref: V,
                "onUpdate:modelValue": ve[0] || (ve[0] = (de) => u.value = de),
                type: "text",
                class: Ve(["form-input", { error: !!w.value, valid: k.value }]),
                placeholder: "my-environment",
                onKeyup: Ss(fe, ["enter"]),
                onBlur: ee
              }, null, 34), [
                [go, u.value]
              ]),
              g.value ? (o(), i("span", Wx, "...")) : k.value ? (o(), i("span", Gx, "✓")) : y("", !0)
            ]),
            w.value ? (o(), i("div", jx, m(w.value), 1)) : y("", !0),
            ve[7] || (ve[7] = s("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          s("div", Hx, [
            ve[8] || (ve[8] = s("label", { class: "form-label" }, "Python Version", -1)),
            At(s("select", {
              "onUpdate:modelValue": ve[1] || (ve[1] = (de) => d.value = de),
              class: "form-select"
            }, [
              (o(!0), i(F, null, he(lt(_c), (de) => (o(), i("option", {
                key: de,
                value: de
              }, m(de), 9, qx))), 128))
            ], 512), [
              [On, d.value]
            ])
          ]),
          s("div", Kx, [
            ve[9] || (ve[9] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            At(s("select", {
              "onUpdate:modelValue": ve[2] || (ve[2] = (de) => f.value = de),
              class: "form-select",
              disabled: E.value
            }, [
              (o(!0), i(F, null, he(I.value, (de) => (o(), i("option", {
                key: de.tag_name,
                value: de.tag_name
              }, m(de.name), 9, Qx))), 128))
            ], 8, Jx), [
              [On, f.value]
            ])
          ]),
          s("div", Yx, [
            ve[10] || (ve[10] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            At(s("select", {
              "onUpdate:modelValue": ve[3] || (ve[3] = (de) => v.value = de),
              class: "form-select"
            }, [
              (o(!0), i(F, null, he(lt(Dl), (de) => (o(), i("option", {
                key: de,
                value: de
              }, m(de) + m(de === "auto" ? " (detect GPU)" : ""), 9, Xx))), 128))
            ], 512), [
              [On, v.value]
            ])
          ]),
          s("div", Zx, [
            s("label", e3, [
              At(s("input", {
                type: "checkbox",
                "onUpdate:modelValue": ve[4] || (ve[4] = (de) => p.value = de)
              }, null, 512), [
                [la, p.value]
              ]),
              ve[11] || (ve[11] = s("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        M.value ? (o(), i(F, { key: 1 }, [
          R.value.error ? (o(), D(De, {
            key: 0,
            variant: "secondary",
            onClick: q
          }, {
            default: h(() => [...ve[16] || (ve[16] = [
              x(" Close ", -1)
            ])]),
            _: 1
          })) : (o(), i("span", l3, " Creating environment... "))
        ], 64)) : (o(), i(F, { key: 0 }, [
          b(De, {
            variant: "primary",
            disabled: !$.value,
            onClick: fe
          }, {
            default: h(() => [...ve[14] || (ve[14] = [
              x(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(De, {
            variant: "secondary",
            onClick: ve[5] || (ve[5] = (de) => n("close"))
          }, {
            default: h(() => [...ve[15] || (ve[15] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), c3 = /* @__PURE__ */ Te(r3, [["__scopeId", "data-v-3faa3d9b"]]), u3 = /* @__PURE__ */ Se({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: t, emit: n }) {
    const a = n, { getEnvironments: l, getEnvironmentDetails: r } = ft(), c = _([]), u = _(!1), d = _(null), f = _(""), v = _(!1), p = _(!1), w = _(null), g = _(null), k = P(() => [...c.value].sort((L, A) => L.is_current !== A.is_current ? L.is_current ? -1 : 1 : L.name.localeCompare(A.name))), C = P(() => {
      if (!f.value.trim()) return k.value;
      const L = f.value.toLowerCase();
      return k.value.filter(
        (A) => {
          var N;
          return A.name.toLowerCase().includes(L) || ((N = A.current_branch) == null ? void 0 : N.toLowerCase().includes(L));
        }
      );
    });
    function S(L, A) {
      p.value = !1, a("created", L, A);
    }
    function $() {
      p.value = !0;
    }
    async function I(L) {
      w.value = L, g.value = null;
      const A = await r(L.name);
      A && (g.value = A);
    }
    function E(L) {
      w.value = null, g.value = null, a("delete", L);
    }
    function M(L) {
      w.value = null, g.value = null, a("export", L);
    }
    async function R() {
      u.value = !0, d.value = null;
      try {
        c.value = await l();
      } catch (L) {
        d.value = L instanceof Error ? L.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return dt(R), t({
      loadEnvironments: R,
      openCreateModal: $
    }), (L, A) => (o(), i(F, null, [
      b(qt, null, {
        header: h(() => [
          b(Kt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: A[1] || (A[1] = (N) => v.value = !0)
          }, {
            actions: h(() => [
              e.canCreate ? (o(), D(Pe, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: $
              }, {
                default: h(() => [...A[7] || (A[7] = [
                  x(" Create ", -1)
                ])]),
                _: 1
              })) : y("", !0),
              b(Pe, {
                variant: "secondary",
                size: "sm",
                onClick: A[0] || (A[0] = (N) => L.$emit("import"))
              }, {
                default: h(() => [...A[8] || (A[8] = [
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
            "onUpdate:modelValue": A[2] || (A[2] = (N) => f.value = N),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (o(), D(Fs, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (o(), D(Vs, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (o(), i(F, { key: 2 }, [
            C.value.length ? (o(), D(Lt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: C.value.length
            }, {
              default: h(() => [
                (o(!0), i(F, null, he(C.value, (N) => (o(), D(GC, {
                  key: N.name,
                  "environment-name": N.name,
                  "is-current": N.is_current,
                  "current-branch": N.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    !N.is_current && e.canSwitch ? (o(), D(Pe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => L.$emit("switch", N.name)
                    }, {
                      default: h(() => [...A[9] || (A[9] = [
                        x(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : y("", !0),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => I(N)
                    }, {
                      default: h(() => [...A[10] || (A[10] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => L.$emit("export", N.name)
                    }, {
                      default: h(() => [...A[11] || (A[11] = [
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
            C.value.length ? y("", !0) : (o(), D(Ms, {
              key: 1,
              icon: "🌍",
              message: f.value ? `No environments match '${f.value}'` : "No environments found. Create one to get started!"
            }, cs({ _: 2 }, [
              f.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  e.canCreate ? (o(), D(Pe, {
                    key: 0,
                    variant: "primary",
                    onClick: $
                  }, {
                    default: h(() => [...A[12] || (A[12] = [
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
      b(ks, {
        show: v.value,
        title: "About Environments",
        onClose: A[4] || (A[4] = (N) => v.value = !1)
      }, {
        content: h(() => [...A[13] || (A[13] = [
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
            onClick: A[3] || (A[3] = (N) => v.value = !1)
          }, {
            default: h(() => [...A[14] || (A[14] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (o(), D(Tx, {
        key: 0,
        environment: w.value,
        detail: g.value,
        "can-delete": e.canDelete && c.value.length > 1,
        onClose: A[5] || (A[5] = (N) => {
          w.value = null, g.value = null;
        }),
        onDelete: E,
        onExport: M
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      p.value ? (o(), D(c3, {
        key: 1,
        onClose: A[6] || (A[6] = (N) => p.value = !1),
        onCreated: S
      })) : y("", !0)
    ], 64));
  }
}), d3 = /* @__PURE__ */ Te(u3, [["__scopeId", "data-v-01163d8c"]]), m3 = { class: "file-path" }, f3 = { class: "file-path-text" }, v3 = ["title"], p3 = /* @__PURE__ */ Se({
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
    return (l, r) => (o(), i("div", m3, [
      r[0] || (r[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", f3, m(e.path), 1),
      e.copyable ? (o(), i("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: a
      }, m(n.value ? "✓" : "📋"), 9, v3)) : y("", !0)
    ]));
  }
}), g3 = /* @__PURE__ */ Te(p3, [["__scopeId", "data-v-f0982173"]]), h3 = { class: "base-textarea-wrapper" }, y3 = ["value", "rows", "placeholder", "disabled", "maxlength"], w3 = {
  key: 0,
  class: "base-textarea-count"
}, _3 = /* @__PURE__ */ Se({
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
    return (r, c) => (o(), i("div", h3, [
      s("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = Ss(bt((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = Ss(bt((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Ss(l, ["enter"])
        ]
      }, null, 40, y3),
      e.showCharCount && e.maxLength ? (o(), i("div", w3, m(e.modelValue.length) + " / " + m(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), An = /* @__PURE__ */ Te(_3, [["__scopeId", "data-v-c6d16c93"]]), k3 = ["checked", "disabled"], b3 = { class: "base-checkbox-box" }, $3 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, C3 = {
  key: 0,
  class: "base-checkbox-label"
}, x3 = /* @__PURE__ */ Se({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (o(), i("label", {
      class: Ve(["base-checkbox", { disabled: e.disabled }])
    }, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (a) => t.$emit("update:modelValue", a.target.checked))
      }, null, 40, k3),
      s("span", b3, [
        e.modelValue ? (o(), i("svg", $3, [...n[1] || (n[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      t.$slots.default ? (o(), i("span", C3, [
        rt(t.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), ra = /* @__PURE__ */ Te(x3, [["__scopeId", "data-v-bf17c831"]]), S3 = { class: "export-blocked" }, I3 = { class: "error-header" }, E3 = { class: "error-summary" }, T3 = { class: "error-title" }, M3 = { class: "error-description" }, P3 = { class: "issues-list" }, R3 = { class: "issue-message" }, D3 = {
  key: 0,
  class: "issue-details"
}, N3 = ["onClick"], L3 = { class: "issue-fix" }, U3 = {
  key: 0,
  class: "commit-section"
}, O3 = {
  key: 0,
  class: "issues-warning"
}, A3 = {
  key: 1,
  class: "commit-error"
}, z3 = /* @__PURE__ */ Se({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { commit: l } = ft(), r = _(""), c = _(!1), u = _(!1), d = _(""), f = Cn({}), v = P(() => n.mode === "publish" ? "Publish" : "Export"), p = P(
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
    return ($, I) => (o(), D(Mt, {
      title: p.value ? `Commit & ${v.value}` : `Cannot ${v.value}`,
      size: "md",
      onClose: I[4] || (I[4] = (E) => $.$emit("close"))
    }, {
      body: h(() => [
        s("div", S3, [
          s("div", I3, [
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
            s("div", E3, [
              s("h3", T3, m(v.value) + " blocked", 1),
              s("p", M3, m(p.value ? `Commit your changes to proceed with ${v.value.toLowerCase()}.` : `The following issues must be resolved before ${v.value.toLowerCase()}.`), 1)
            ])
          ]),
          s("div", P3, [
            (o(!0), i(F, null, he(e.issues, (E, M) => (o(), i("div", {
              key: M,
              class: "issue-item"
            }, [
              s("div", R3, m(E.message), 1),
              E.details.length ? (o(), i("div", D3, [
                (o(!0), i(F, null, he(C(M), (R, L) => (o(), i("div", {
                  key: L,
                  class: "issue-detail"
                }, m(R), 1))), 128)),
                E.details.length > 3 && !f[M] ? (o(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (R) => f[M] = !0
                }, " +" + m(E.details.length - 3) + " more ", 9, N3)) : y("", !0)
              ])) : y("", !0),
              s("div", L3, [
                E.type === "uncommitted_workflows" ? (o(), i(F, { key: 0 }, [
                  x(" Commit your workflow changes before " + m(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : E.type === "uncommitted_git_changes" ? (o(), i(F, { key: 1 }, [
                  x(" Commit your changes before " + m(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : E.type === "unresolved_issues" ? (o(), i(F, { key: 2 }, [
                  x(" Resolve all workflow issues before " + m(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ]),
          p.value ? (o(), i("div", U3, [
            w.value ? (o(), i("div", O3, [
              I[7] || (I[7] = s("div", { class: "warning-header" }, [
                s("span", { class: "warning-icon-badge" }, "!"),
                s("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              b(ra, {
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
            d.value ? (o(), i("div", A3, m(d.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        p.value ? (o(), i(F, { key: 0 }, [
          b(De, {
            variant: "secondary",
            onClick: I[2] || (I[2] = (E) => $.$emit("close"))
          }, {
            default: h(() => [...I[8] || (I[8] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(De, {
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
        ], 64)) : (o(), D(De, {
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
}), F3 = /* @__PURE__ */ Te(z3, [["__scopeId", "data-v-a8990107"]]), V3 = { class: "repro-warning" }, B3 = { class: "repro-warning-content" }, W3 = {
  key: 0,
  class: "warning-group"
}, G3 = { class: "warning-list" }, j3 = { key: 0 }, H3 = {
  key: 1,
  class: "warning-group"
}, q3 = { class: "warning-list" }, K3 = { key: 0 }, J3 = /* @__PURE__ */ Se({
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
    return (p, w) => (o(), i("div", V3, [
      w[3] || (w[3] = s("span", { class: "repro-warning-icon" }, "!", -1)),
      s("div", B3, [
        s("strong", null, m(c.value) + " reproducibility warning" + m(c.value !== 1 ? "s" : ""), 1),
        s("p", null, m(e.message), 1),
        l.value ? (o(), i("div", W3, [
          w[1] || (w[1] = s("div", { class: "warning-group-label" }, " Models ", -1)),
          s("ul", G3, [
            (o(!0), i(F, null, he(u.value, (g) => (o(), i("li", {
              key: g.hash || g.filename
            }, m(g.filename), 1))), 128)),
            f.value ? (o(), i("li", j3, "+" + m(f.value) + " more model" + m(f.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        r.value ? (o(), i("div", H3, [
          w[2] || (w[2] = s("div", { class: "warning-group-label" }, " Nodes ", -1)),
          s("ul", q3, [
            (o(!0), i(F, null, he(d.value, (g) => (o(), i("li", {
              key: g.name
            }, m(g.name) + " (" + m(g.criticality) + ") ", 1))), 128)),
            v.value ? (o(), i("li", K3, "+" + m(v.value) + " more node" + m(v.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        s("button", {
          class: "review-issues-btn",
          onClick: w[0] || (w[0] = (g) => p.$emit("review"))
        }, " Review Issues ")
      ])
    ]));
  }
}), ll = /* @__PURE__ */ Te(J3, [["__scopeId", "data-v-11be310d"]]), Q3 = { class: "export-card" }, Y3 = { class: "export-path-row" }, X3 = {
  key: 1,
  class: "export-warning"
}, Z3 = { class: "export-footer-actions" }, eS = /* @__PURE__ */ Se({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  emits: ["close"],
  setup(e) {
    const t = e, { validateExport: n, exportEnvWithForce: a, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = ft(), c = _(""), u = _(!1), d = _(!1), f = _(!1), v = _(null), p = _(!1), w = _(null), g = _(!1), k = _(!1), C = P(() => {
      var H;
      return ((H = t.environmentName) == null ? void 0 : H.trim()) || null;
    }), S = P(() => C.value ? `EXPORT ENVIRONMENT: ${C.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), $ = P(() => C.value ? `Environment '${C.value}' has been exported` : "Your environment has been exported"), I = P(() => u.value ? "Validating..." : d.value ? "Exporting..." : A.value ? "Export Anyway" : "Export Environment"), E = P(() => {
      var H;
      return ((H = w.value) == null ? void 0 : H.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), M = P(
      () => E.value.models_without_sources.length
    ), R = P(
      () => {
        var H;
        return ((H = E.value.nodes_without_provenance) == null ? void 0 : H.length) || 0;
      }
    ), L = P(
      () => M.value + R.value
    ), A = P(
      () => {
        var H;
        return !!((H = w.value) != null && H.can_export) && L.value > 0;
      }
    );
    async function N() {
      u.value = !0;
      try {
        const H = C.value ? await l(C.value) : await n();
        return w.value = H, H;
      } catch (H) {
        return v.value = {
          status: "error",
          message: H instanceof Error ? H.message : "Validation failed"
        }, null;
      } finally {
        u.value = !1;
      }
    }
    async function V() {
      v.value = null;
      const H = await N();
      if (H) {
        if (!H.can_export) {
          g.value = !0;
          return;
        }
        await J();
      }
    }
    async function ae() {
      g.value = !1;
      const H = await N();
      if (H) {
        if (!H.can_export) {
          g.value = !0;
          return;
        }
        await J();
      }
    }
    async function ee() {
      await N();
    }
    async function J() {
      d.value = !0;
      try {
        const H = C.value ? await r(C.value, c.value || void 0) : await a(c.value || void 0);
        v.value = H;
      } catch (H) {
        v.value = {
          status: "error",
          message: H instanceof Error ? H.message : "Export failed"
        };
      } finally {
        d.value = !1;
      }
    }
    async function fe() {
      var H;
      if ((H = v.value) != null && H.path)
        try {
          await navigator.clipboard.writeText(v.value.path);
        } catch (q) {
          console.error("Failed to copy path:", q);
        }
    }
    async function oe() {
      var H;
      if ((H = v.value) != null && H.path) {
        f.value = !0;
        try {
          const q = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(v.value.path)}`);
          if (!q.ok)
            throw new Error(`Download failed: ${q.statusText}`);
          const _e = await q.blob(), se = URL.createObjectURL(_e), ve = v.value.path.split("/").pop() || "environment-export.tar.gz", de = document.createElement("a");
          de.href = se, de.download = ve, document.body.appendChild(de), de.click(), document.body.removeChild(de), URL.revokeObjectURL(se);
        } catch (q) {
          console.error("Failed to download:", q), alert(`Download failed: ${q instanceof Error ? q.message : "Unknown error"}`);
        } finally {
          f.value = !1;
        }
      }
    }
    return dt(() => {
      N();
    }), (H, q) => (o(), i(F, null, [
      b(qt, null, cs({
        content: h(() => [
          A.value ? (o(), D(ll, {
            key: 0,
            class: "export-readiness-warning",
            warnings: E.value,
            message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
            onReview: q[1] || (q[1] = (_e) => k.value = !0)
          }, null, 8, ["warnings"])) : y("", !0),
          b(Lt, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              s("div", Q3, [
                q[8] || (q[8] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", Y3, [
                  b(Mn, {
                    modelValue: c.value,
                    "onUpdate:modelValue": q[2] || (q[2] = (_e) => c.value = _e),
                    placeholder: "/mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            _: 1
          }),
          v.value ? (o(), D(Lt, {
            key: 1,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              b(Yt, {
                status: v.value.status === "success" ? "synced" : "broken"
              }, cs({
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
                        b(g3, {
                          path: v.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    v.value.models_without_sources !== void 0 ? (o(), D(Tt, {
                      key: 0,
                      label: "Models without sources:",
                      value: v.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    v.value.models_without_sources && v.value.models_without_sources > 0 ? (o(), i("div", X3, [...q[9] || (q[9] = [
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
                      onClick: oe
                    }, {
                      default: h(() => [...q[10] || (q[10] = [
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
                      onClick: fe
                    }, {
                      default: h(() => [...q[11] || (q[11] = [
                        x(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    b(Pe, {
                      variant: "ghost",
                      size: "sm",
                      onClick: q[3] || (q[3] = (_e) => v.value = null)
                    }, {
                      default: h(() => [...q[12] || (q[12] = [
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
          s("div", Z3, [
            e.embedded ? (o(), D(Pe, {
              key: 0,
              variant: "secondary",
              size: "md",
              disabled: d.value,
              onClick: q[4] || (q[4] = (_e) => H.$emit("close"))
            }, {
              default: h(() => [...q[13] || (q[13] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : y("", !0),
            b(Pe, {
              variant: "primary",
              size: "md",
              loading: u.value || d.value,
              disabled: u.value || d.value,
              onClick: V
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
            b(Kt, {
              title: S.value,
              "show-info": !0,
              onInfoClick: q[0] || (q[0] = (_e) => p.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      b(ks, {
        show: p.value,
        title: "What Gets Exported",
        onClose: q[5] || (q[5] = (_e) => p.value = !1)
      }, {
        content: h(() => [...q[14] || (q[14] = [
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
      g.value && w.value ? (o(), D(F3, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: q[6] || (q[6] = (_e) => g.value = !1),
        onCommitted: ae
      }, null, 8, ["issues"])) : y("", !0),
      k.value && w.value ? (o(), D(Tl, {
        key: 1,
        warnings: w.value.warnings,
        onClose: q[7] || (q[7] = (_e) => k.value = !1),
        onRevalidate: ee
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), tS = /* @__PURE__ */ Te(eS, [["__scopeId", "data-v-6cf814a2"]]), sS = { class: "file-input-wrapper" }, nS = ["accept", "multiple", "disabled"], oS = /* @__PURE__ */ Se({
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
    }), (u, d) => (o(), i("div", sS, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, nS),
      b(Pe, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: h(() => [
          rt(u.$slots, "default", {}, () => [
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
}), aS = /* @__PURE__ */ Te(oS, [["__scopeId", "data-v-cd192091"]]), lS = {
  key: 0,
  class: "drop-zone-empty"
}, iS = { class: "drop-zone-text" }, rS = { class: "drop-zone-primary" }, cS = { class: "drop-zone-secondary" }, uS = { class: "drop-zone-actions" }, dS = {
  key: 1,
  class: "drop-zone-file"
}, mS = { class: "file-info" }, fS = { class: "file-details" }, vS = { class: "file-name" }, pS = { class: "file-size" }, gS = /* @__PURE__ */ Se({
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
      class: Ve(["file-drop-zone", { "drop-active": a.value, "has-file": c.value }]),
      onDragenter: bt(f, ["prevent"]),
      onDragover: bt(v, ["prevent"]),
      onDragleave: bt(p, ["prevent"]),
      onDrop: bt(w, ["prevent"])
    }, [
      c.value ? (o(), i("div", dS, [
        s("div", mS, [
          $[1] || ($[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", fS, [
            s("div", vS, m(u.value), 1),
            s("div", pS, m(d.value), 1)
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
      ])) : (o(), i("div", lS, [
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
        s("div", iS, [
          s("p", rS, m(e.primaryText), 1),
          s("p", cS, m(e.secondaryText), 1)
        ]),
        s("div", uS, [
          b(aS, {
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
}), hS = /* @__PURE__ */ Te(gS, [["__scopeId", "data-v-0f79cb86"]]), yS = { class: "commit-hash" }, wS = /* @__PURE__ */ Se({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, n = P(() => t.hash.slice(0, t.length));
    return (a, l) => (o(), i("span", yS, m(n.value), 1));
  }
}), Cc = /* @__PURE__ */ Te(wS, [["__scopeId", "data-v-7c333cc6"]]), _S = { class: "import-preview" }, kS = { class: "preview-header" }, bS = {
  key: 0,
  class: "source-env"
}, $S = { class: "preview-content" }, CS = { class: "preview-section" }, xS = { class: "section-header" }, SS = { class: "section-info" }, IS = { class: "section-count" }, ES = {
  key: 0,
  class: "item-list"
}, TS = { class: "item-name" }, MS = {
  key: 0,
  class: "item-more"
}, PS = { class: "preview-section" }, RS = { class: "section-header" }, DS = { class: "section-info" }, NS = { class: "section-count" }, LS = {
  key: 0,
  class: "item-list"
}, US = { class: "item-details" }, OS = { class: "item-name" }, AS = { class: "item-meta" }, zS = {
  key: 0,
  class: "item-more"
}, FS = { class: "preview-section" }, VS = { class: "section-header" }, BS = { class: "section-info" }, WS = { class: "section-count" }, GS = {
  key: 0,
  class: "item-list"
}, jS = { class: "item-name" }, HS = {
  key: 0,
  class: "item-more"
}, qS = {
  key: 0,
  class: "preview-section"
}, KS = { class: "git-info" }, JS = /* @__PURE__ */ Se({
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
    return (c, u) => (o(), i("div", _S, [
      s("div", kS, [
        b(hs, null, {
          default: h(() => [...u[0] || (u[0] = [
            x("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (o(), i("span", bS, [
          u[1] || (u[1] = x(" From: ", -1)),
          b(al, null, {
            default: h(() => [
              x(m(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      s("div", $S, [
        s("div", CS, [
          s("div", xS, [
            u[3] || (u[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", SS, [
              u[2] || (u[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", IS, m(n.value) + " file" + m(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (o(), i("div", ES, [
            (o(!0), i(F, null, he(e.workflows.slice(0, e.maxPreviewItems), (d) => (o(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", TS, m(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (o(), i("div", MS, " +" + m(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", PS, [
          s("div", RS, [
            u[6] || (u[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", DS, [
              u[5] || (u[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", NS, m(a.value) + " file" + m(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (o(), i("div", LS, [
            (o(!0), i(F, null, he(e.models.slice(0, e.maxPreviewItems), (d) => (o(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", US, [
                s("span", OS, m(d.filename), 1),
                s("span", AS, m(r(d.size)) + " • " + m(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (o(), i("div", zS, " +" + m(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", FS, [
          s("div", VS, [
            u[9] || (u[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", BS, [
              u[8] || (u[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", WS, m(l.value) + " node" + m(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (o(), i("div", GS, [
            (o(!0), i(F, null, he(e.nodes.slice(0, e.maxPreviewItems), (d) => (o(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", jS, m(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (o(), i("div", HS, " +" + m(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (o(), i("div", qS, [
          u[11] || (u[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", KS, [
            e.gitBranch ? (o(), D(Tt, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                b(al, null, {
                  default: h(() => [
                    x(m(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (o(), D(Tt, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                b(Cc, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), QS = /* @__PURE__ */ Te(JS, [["__scopeId", "data-v-182fe113"]]), YS = { class: "import-config" }, XS = { class: "config-container" }, ZS = { class: "config-field" }, e5 = { class: "input-wrapper" }, t5 = ["value"], s5 = {
  key: 0,
  class: "validating-indicator"
}, n5 = {
  key: 1,
  class: "valid-indicator"
}, o5 = {
  key: 0,
  class: "field-error"
}, a5 = { class: "config-field" }, l5 = { class: "strategy-options" }, i5 = ["value", "checked", "onChange"], r5 = { class: "strategy-content" }, c5 = { class: "strategy-label" }, u5 = { class: "strategy-description" }, d5 = { class: "config-field switch-field" }, m5 = { class: "switch-label" }, f5 = ["checked"], v5 = { class: "advanced-section" }, p5 = { class: "advanced-content" }, g5 = { class: "config-field" }, h5 = ["value"], y5 = ["value"], w5 = /* @__PURE__ */ Se({
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
    return (v, p) => (o(), i("div", YS, [
      b(hs, null, {
        default: h(() => [...p[2] || (p[2] = [
          x("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", XS, [
        s("div", ZS, [
          b(Ko, { required: "" }, {
            default: h(() => [...p[3] || (p[3] = [
              x("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", e5, [
            s("input", {
              type: "text",
              class: Ve(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: f
            }, null, 42, t5),
            l.value ? (o(), i("span", s5, "...")) : r.value ? (o(), i("span", n5, "✓")) : y("", !0)
          ]),
          e.nameError ? (o(), i("div", o5, m(e.nameError), 1)) : y("", !0),
          p[4] || (p[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", a5, [
          b(Ko, null, {
            default: h(() => [...p[5] || (p[5] = [
              x("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", l5, [
            (o(), i(F, null, he(c, (w) => s("label", {
              key: w.value,
              class: Ve(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              s("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (g) => a("update:modelStrategy", w.value)
              }, null, 40, i5),
              s("div", r5, [
                s("span", c5, m(w.label), 1),
                s("span", u5, m(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", d5, [
          s("label", m5, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => a("update:switchAfterImport", w.target.checked))
            }, null, 40, f5),
            p[6] || (p[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", v5, [
          p[8] || (p[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", p5, [
            s("div", g5, [
              b(Ko, null, {
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
                (o(!0), i(F, null, he(lt(Dl), (w) => (o(), i("option", {
                  key: w,
                  value: w
                }, m(w) + m(w === "auto" ? " (detect GPU)" : ""), 9, y5))), 128))
              ], 40, h5)
            ])
          ])
        ])
      ])
    ]));
  }
}), _5 = /* @__PURE__ */ Te(w5, [["__scopeId", "data-v-89ea06a1"]]), k5 = { class: "import-flow" }, b5 = {
  key: 0,
  class: "import-empty"
}, $5 = { class: "git-import-section" }, C5 = { class: "git-url-input-row" }, x5 = ["disabled"], S5 = {
  key: 0,
  class: "git-error"
}, I5 = {
  key: 1,
  class: "import-configure"
}, E5 = { class: "selected-file-bar" }, T5 = {
  key: 0,
  class: "file-bar-content"
}, M5 = { class: "file-bar-info" }, P5 = { class: "file-bar-name" }, R5 = { class: "file-bar-size" }, D5 = {
  key: 1,
  class: "file-bar-content"
}, N5 = { class: "file-bar-info" }, L5 = { class: "file-bar-name" }, U5 = {
  key: 0,
  class: "preview-loading"
}, O5 = { class: "import-actions" }, A5 = {
  key: 2,
  class: "import-progress"
}, z5 = { class: "creating-intro" }, F5 = {
  key: 0,
  class: "progress-warning"
}, V5 = {
  key: 1,
  class: "import-error"
}, B5 = { class: "error-message" }, W5 = {
  key: 3,
  class: "import-complete"
}, G5 = { class: "complete-message" }, j5 = { class: "complete-title" }, H5 = { class: "complete-details" }, q5 = { class: "complete-actions" }, K5 = /* @__PURE__ */ Se({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: t, emit: n }) {
    var Ee, we, Oe, Ne;
    const a = e, l = n, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: f, getImportProgress: v } = ft();
    let p = null;
    const w = _(null), g = _(a.resumeImport ?? !1), k = _(!1), C = _(!1), S = _(""), $ = _(!1), I = _(null), E = _(""), M = _(null), R = _(!1), L = _(null), A = _(null), N = _({
      name: ((Ee = a.initialProgress) == null ? void 0 : Ee.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), V = _(null), ae = _({
      message: ((we = a.initialProgress) == null ? void 0 : we.message) ?? "Preparing import...",
      phase: ((Oe = a.initialProgress) == null ? void 0 : Oe.phase) ?? "",
      progress: ((Ne = a.initialProgress) == null ? void 0 : Ne.progress) ?? 0,
      error: null
    }), ee = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], J = P(() => {
      if (!A.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const $e = A.value;
      return {
        sourceEnvironment: $e.comfyui_version ? `ComfyUI ${$e.comfyui_version}` : "Unknown",
        workflows: $e.workflows.map((Ae) => Ae.name),
        models: $e.models.map((Ae) => ({
          filename: Ae.filename,
          size: 0,
          type: Ae.relative_path.split("/")[0] || "model"
        })),
        nodes: $e.nodes.map((Ae) => Ae.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), fe = P(() => !$.value && !I.value && A.value && N.value.name.length > 0 && !V.value && (w.value || M.value));
    async function oe($e) {
      w.value = $e, $.value = !0, I.value = null, A.value = null;
      try {
        const Ae = await r($e);
        A.value = Ae;
      } catch (Ae) {
        I.value = Ae instanceof Error ? Ae.message : "Failed to analyze file", console.error("Preview error:", Ae);
      } finally {
        $.value = !1;
      }
    }
    function H() {
      w.value = null, M.value = null, E.value = "", L.value = null, k.value = !1, C.value = !1, S.value = "", A.value = null, I.value = null, N.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, V.value = null, l("source-cleared");
    }
    function q() {
      ne(), H(), g.value = !1, $.value = !1, R.value = !1, ae.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function _e() {
      if (E.value.trim()) {
        R.value = !0, L.value = null;
        try {
          const $e = await c(E.value.trim());
          M.value = E.value.trim(), A.value = $e;
        } catch ($e) {
          L.value = $e instanceof Error ? $e.message : "Failed to analyze repository";
        } finally {
          R.value = !1;
        }
      }
    }
    function se($e) {
      try {
        const Ae = new URL($e);
        return Ae.host + Ae.pathname.replace(/\.git$/, "");
      } catch {
        return $e;
      }
    }
    async function ve($e) {
      if (!$e) {
        V.value = "Environment name is required";
        return;
      }
      try {
        const Ae = await u($e);
        V.value = Ae.valid ? null : Ae.error || "Invalid name";
      } catch {
        V.value = "Failed to validate name";
      }
    }
    async function de() {
      if (N.value.name && !(!w.value && !M.value)) {
        g.value = !0, k.value = !1, ae.value = { message: `Creating environment '${N.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let $e;
          if (w.value)
            $e = await d(
              w.value,
              N.value.name,
              N.value.modelStrategy,
              N.value.torchBackend
            );
          else if (M.value)
            $e = await f(
              M.value,
              N.value.name,
              N.value.modelStrategy,
              N.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          $e.status === "started" ? G() : (C.value = !1, S.value = $e.message, g.value = !1, k.value = !0);
        } catch ($e) {
          C.value = !1, S.value = $e instanceof Error ? $e.message : "Unknown error occurred during import", g.value = !1, k.value = !0;
        }
      }
    }
    async function G() {
      if (p) return;
      const $e = async () => {
        try {
          const pe = await v();
          return ae.value = {
            message: pe.message,
            phase: pe.phase || "",
            progress: pe.progress ?? (pe.state === "importing" ? 50 : 0),
            error: pe.error || null
          }, pe.state === "complete" ? (ne(), C.value = !0, S.value = `Environment '${pe.environment_name}' created successfully`, g.value = !1, k.value = !0, pe.environment_name && l("import-complete", pe.environment_name, N.value.switchAfterImport), !1) : pe.state === "error" ? (ne(), C.value = !1, S.value = pe.error || pe.message, g.value = !1, k.value = !0, !1) : !0;
        } catch (pe) {
          return console.error("Failed to poll import progress:", pe), !0;
        }
      };
      await $e() && (p = setInterval(async () => {
        await $e() || ne();
      }, 2e3));
    }
    function ne() {
      p && (clearInterval(p), p = null);
    }
    function te($e) {
      return $e < 1024 ? `${$e} B` : $e < 1024 * 1024 ? `${($e / 1024).toFixed(1)} KB` : $e < 1024 * 1024 * 1024 ? `${($e / (1024 * 1024)).toFixed(1)} MB` : `${($e / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return dt(async () => {
      try {
        const $e = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", $e.state, $e), $e.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", $e.environment_name), g.value = !0, N.value.name = $e.environment_name || N.value.name || "", ae.value = {
          progress: $e.progress ?? 0,
          message: $e.message || "Importing...",
          phase: $e.phase || "",
          error: null
        }, G());
      } catch ($e) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", $e);
      }
    }), t({
      handleReset: q,
      isImporting: g,
      canImport: fe
    }), ($e, Ae) => {
      var pe;
      return o(), i("div", k5, [
        !w.value && !M.value && !g.value ? (o(), i("div", b5, [
          b(hS, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: oe
          }),
          Ae[7] || (Ae[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", $5, [
            Ae[5] || (Ae[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", C5, [
              At(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Ae[0] || (Ae[0] = (ge) => E.value = ge),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Ss(_e, ["enter"]),
                disabled: R.value
              }, null, 40, x5), [
                [go, E.value]
              ]),
              b(Pe, {
                variant: "primary",
                size: "sm",
                disabled: !E.value.trim() || R.value,
                onClick: _e
              }, {
                default: h(() => [
                  x(m(R.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            L.value ? (o(), i("div", S5, m(L.value), 1)) : y("", !0),
            Ae[6] || (Ae[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || M.value) && !g.value && !k.value ? (o(), i("div", I5, [
          s("div", E5, [
            w.value ? (o(), i("div", T5, [
              Ae[8] || (Ae[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", M5, [
                s("div", P5, m(w.value.name), 1),
                s("div", R5, m(te(w.value.size)), 1)
              ])
            ])) : M.value ? (o(), i("div", D5, [
              Ae[10] || (Ae[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", N5, [
                s("div", L5, m(se(M.value)), 1),
                Ae[9] || (Ae[9] = s("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            b(Pe, {
              variant: "ghost",
              size: "sm",
              onClick: H
            }, {
              default: h(() => [...Ae[11] || (Ae[11] = [
                x(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          $.value ? (o(), i("div", U5, [...Ae[12] || (Ae[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : I.value ? (o(), D(ds, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [I.value]
          }, null, 8, ["details"])) : A.value ? (o(), D(QS, {
            key: 2,
            "source-environment": J.value.sourceEnvironment,
            workflows: J.value.workflows,
            models: J.value.models,
            nodes: J.value.nodes,
            "git-branch": J.value.gitBranch,
            "git-commit": J.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          A.value ? (o(), D(_5, {
            key: 3,
            name: N.value.name,
            "onUpdate:name": Ae[1] || (Ae[1] = (ge) => N.value.name = ge),
            "model-strategy": N.value.modelStrategy,
            "onUpdate:modelStrategy": Ae[2] || (Ae[2] = (ge) => N.value.modelStrategy = ge),
            "torch-backend": N.value.torchBackend,
            "onUpdate:torchBackend": Ae[3] || (Ae[3] = (ge) => N.value.torchBackend = ge),
            "switch-after-import": N.value.switchAfterImport,
            "onUpdate:switchAfterImport": Ae[4] || (Ae[4] = (ge) => N.value.switchAfterImport = ge),
            "name-error": V.value,
            onValidateName: ve
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          N.value.modelStrategy === "skip" && ((pe = A.value) != null && pe.models_needing_download) ? (o(), D(ds, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${A.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          s("div", O5, [
            b(Pe, {
              variant: "secondary",
              size: "md",
              onClick: H
            }, {
              default: h(() => [...Ae[13] || (Ae[13] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Pe, {
              variant: "primary",
              size: "md",
              disabled: !fe.value,
              onClick: de
            }, {
              default: h(() => [...Ae[14] || (Ae[14] = [
                x(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : g.value ? (o(), i("div", A5, [
          s("p", z5, [
            Ae[15] || (Ae[15] = x(" Importing environment ", -1)),
            s("strong", null, m(N.value.name), 1),
            Ae[16] || (Ae[16] = x("... ", -1))
          ]),
          b(ia, {
            progress: ae.value.progress,
            message: ae.value.message,
            "current-phase": ae.value.phase,
            variant: ae.value.error ? "error" : "default",
            "show-steps": !0,
            steps: ee
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          ae.value.error ? y("", !0) : (o(), i("p", F5, " This may take several minutes. Please wait... ")),
          ae.value.error ? (o(), i("div", V5, [
            s("p", B5, m(ae.value.error), 1)
          ])) : y("", !0)
        ])) : k.value ? (o(), i("div", W5, [
          s("div", {
            class: Ve(["complete-icon", C.value ? "success" : "error"])
          }, m(C.value ? "✓" : "✕"), 3),
          s("div", G5, [
            s("div", j5, m(C.value ? "Import Successful" : "Import Failed"), 1),
            s("div", H5, m(S.value), 1)
          ]),
          s("div", q5, [
            b(Pe, {
              variant: "primary",
              size: "md",
              onClick: q
            }, {
              default: h(() => [...Ae[17] || (Ae[17] = [
                x(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), xc = /* @__PURE__ */ Te(K5, [["__scopeId", "data-v-72cbc04e"]]), J5 = /* @__PURE__ */ Se({
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
    return (r, c) => (o(), i(F, null, [
      b(qt, null, cs({
        content: h(() => [
          b(xc, { onImportComplete: l })
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(Kt, {
              title: "IMPORT ENVIRONMENT",
              "show-info": !0,
              onInfoClick: c[0] || (c[0] = (u) => a.value = !0)
            })
          ]),
          key: "0"
        }
      ]), 1024),
      b(ks, {
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
}), Q5 = /* @__PURE__ */ Te(J5, [["__scopeId", "data-v-41b1f298"]]), Y5 = { class: "base-tabs" }, X5 = ["disabled", "onClick"], Z5 = {
  key: 0,
  class: "base-tabs__badge"
}, e8 = /* @__PURE__ */ Se({
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
    return (r, c) => (o(), i("div", Y5, [
      (o(!0), i(F, null, he(e.tabs, (u) => (o(), i("button", {
        key: u.id,
        class: Ve([
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
        u.badge ? (o(), i("span", Z5, m(u.badge), 1)) : y("", !0)
      ], 10, X5))), 128))
    ]));
  }
}), Nl = /* @__PURE__ */ Te(e8, [["__scopeId", "data-v-ad5e6cad"]]), t8 = { class: "commit-list" }, s8 = /* @__PURE__ */ Se({
  __name: "CommitList",
  setup(e) {
    return (t, n) => (o(), i("div", t8, [
      rt(t.$slots, "default", {}, void 0)
    ]));
  }
}), Sc = /* @__PURE__ */ Te(s8, [["__scopeId", "data-v-8c5ee761"]]), n8 = { class: "commit-message" }, o8 = { class: "commit-date" }, a8 = /* @__PURE__ */ Se({
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
      class: Ve(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      b(Cc, { hash: e.hash }, null, 8, ["hash"]),
      s("span", n8, m(e.message), 1),
      s("span", o8, m(e.relativeDate), 1),
      r.$slots.actions ? (o(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = bt(() => {
        }, ["stop"]))
      }, [
        rt(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Ic = /* @__PURE__ */ Te(a8, [["__scopeId", "data-v-dd7c621b"]]), l8 = /* @__PURE__ */ Se({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const t = e, n = P(() => `HISTORY (${t.currentRef || "detached"})`);
    return (a, l) => (o(), D(qt, null, cs({
      content: h(() => [
        e.commits.length === 0 ? (o(), D(Ms, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), D(Sc, { key: 1 }, {
          default: h(() => [
            (o(!0), i(F, null, he(e.commits, (r) => (o(), D(Ic, {
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
          b(Kt, { title: n.value }, null, 8, ["title"])
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), i8 = /* @__PURE__ */ Te(l8, [["__scopeId", "data-v-fa4bf3a1"]]), r8 = { class: "branch-create-form" }, c8 = { class: "form-actions" }, u8 = /* @__PURE__ */ Se({
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
    return (u, d) => (o(), i("div", r8, [
      b(Mn, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (f) => a.value = f),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      s("div", c8, [
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
}), d8 = /* @__PURE__ */ Te(u8, [["__scopeId", "data-v-7c500394"]]), m8 = { class: "branch-list-item__indicator" }, f8 = { class: "branch-list-item__name" }, v8 = {
  key: 0,
  class: "branch-list-item__actions"
}, p8 = {
  key: 0,
  class: "branch-list-item__current-label"
}, g8 = /* @__PURE__ */ Se({
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
      class: Ve(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: n[0] || (n[0] = (a) => e.clickable && t.$emit("click"))
    }, [
      s("span", m8, m(e.isCurrent ? "●" : "○"), 1),
      s("span", f8, m(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (o(), i("div", v8, [
        rt(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (o(), i("span", p8, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), h8 = /* @__PURE__ */ Te(g8, [["__scopeId", "data-v-c6581a24"]]), y8 = { class: "header-info" }, w8 = { class: "branch-name" }, _8 = {
  key: 0,
  class: "current-badge"
}, k8 = { class: "branch-meta" }, b8 = { key: 0 }, $8 = {
  key: 0,
  class: "meta-note"
}, C8 = {
  key: 0,
  class: "loading"
}, x8 = {
  key: 1,
  class: "empty-state"
}, S8 = /* @__PURE__ */ Se({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const t = e, { getBranchHistory: n } = ft(), a = _([]), l = _(!1), r = _(!0);
    return dt(async () => {
      try {
        const c = await n(t.branchName, 50);
        a.value = c.commits, l.value = c.has_more;
      } finally {
        r.value = !1;
      }
    }), (c, u) => (o(), D(Mt, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (d) => c.$emit("close"))
    }, {
      header: h(() => [
        s("div", y8, [
          u[4] || (u[4] = s("h3", { class: "header-title" }, "BRANCH", -1)),
          s("span", w8, m(e.branchName), 1),
          e.isCurrent ? (o(), i("span", _8, "CURRENT")) : y("", !0)
        ]),
        b(De, {
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
        s("div", k8, [
          r.value ? (o(), i("span", b8, "Loading...")) : (o(), i(F, { key: 1 }, [
            s("span", null, m(a.value.length) + " commits", 1),
            l.value ? (o(), i("span", $8, "(showing first " + m(a.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (o(), i("div", C8, "Loading commit history...")) : a.value.length === 0 ? (o(), i("div", x8, " No commits found on this branch ")) : (o(), D(Sc, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (o(!0), i(F, null, he(a.value, (d) => (o(), D(Ic, {
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
        e.isCurrent ? y("", !0) : (o(), D(Pe, {
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
        e.isCurrent ? y("", !0) : (o(), D(De, {
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
}), I8 = /* @__PURE__ */ Te(S8, [["__scopeId", "data-v-2e5437cc"]]), E8 = {
  key: 0,
  class: "branch-toolbar"
}, T8 = {
  key: 3,
  class: "branch-list"
}, M8 = /* @__PURE__ */ Se({
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
    return (v, p) => (o(), D(qt, null, cs({
      content: h(() => [
        e.embedded && !a.value ? (o(), i("div", E8, [
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
        a.value ? (o(), D(d8, {
          key: 1,
          onCreate: r,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (o(), D(Ms, {
          key: 2,
          icon: "○",
          message: "No branches found"
        })) : (o(), i("div", T8, [
          (o(!0), i(F, null, he(e.branches, (w) => (o(), D(h8, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (g) => u(w)
          }, {
            actions: h(() => [
              w.is_current ? y("", !0) : (o(), D(Pe, {
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
        l.value ? (o(), D(I8, {
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
          b(Kt, { title: "BRANCHES" }, {
            actions: h(() => [
              a.value ? y("", !0) : (o(), D(Pe, {
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
}), P8 = /* @__PURE__ */ Te(M8, [["__scopeId", "data-v-98858eb2"]]);
function Ec(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const R8 = { class: "remote-url-display" }, D8 = ["title"], N8 = ["title"], L8 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, U8 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, O8 = /* @__PURE__ */ Se({
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
    return (r, c) => (o(), i("div", R8, [
      s("span", {
        class: "url-text",
        title: e.url
      }, m(a.value), 9, D8),
      s("button", {
        class: Ve(["copy-btn", { copied: n.value }]),
        onClick: l,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), i("svg", U8, [...c[1] || (c[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), i("svg", L8, [...c[0] || (c[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, N8)
    ]));
  }
}), A8 = /* @__PURE__ */ Te(O8, [["__scopeId", "data-v-7768a58d"]]), z8 = { class: "remote-title" }, F8 = {
  key: 0,
  class: "default-badge"
}, V8 = {
  key: 1,
  class: "sync-badge"
}, B8 = {
  key: 0,
  class: "ahead"
}, W8 = {
  key: 1,
  class: "behind"
}, G8 = {
  key: 1,
  class: "synced"
}, j8 = ["href"], H8 = {
  key: 1,
  class: "remote-url-text"
}, q8 = /* @__PURE__ */ Se({
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
    return (f, v) => (o(), D(Yt, {
      status: a.value ? "synced" : void 0
    }, cs({
      icon: h(() => [
        x(m(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        s("div", z8, [
          s("span", null, m(e.remote.name), 1),
          a.value ? (o(), i("span", F8, "DEFAULT")) : y("", !0),
          e.syncStatus ? (o(), i("span", V8, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (o(), i(F, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (o(), i("span", B8, "↑" + m(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (o(), i("span", W8, "↓" + m(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (o(), i("span", G8, "✓ synced"))
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
        }, m(d.value), 9, j8)) : (o(), i("span", H8, m(d.value), 1))
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
        a.value ? y("", !0) : (o(), D(Pe, {
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
          e.remote.push_url !== e.remote.fetch_url ? (o(), D(Tt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              b(A8, {
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
}), K8 = /* @__PURE__ */ Te(q8, [["__scopeId", "data-v-8310f3a8"]]), J8 = ["for"], Q8 = {
  key: 0,
  class: "base-form-field-required"
}, Y8 = { class: "base-form-field-input" }, X8 = {
  key: 1,
  class: "base-form-field-error"
}, Z8 = {
  key: 2,
  class: "base-form-field-hint"
}, e4 = /* @__PURE__ */ Se({
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
      class: Ve(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (o(), i("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        x(m(e.label) + " ", 1),
        e.required ? (o(), i("span", Q8, "*")) : y("", !0)
      ], 8, J8)) : y("", !0),
      s("div", Y8, [
        rt(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (o(), i("span", X8, m(e.error), 1)) : e.hint ? (o(), i("span", Z8, m(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), Gt = /* @__PURE__ */ Te(e4, [["__scopeId", "data-v-9a1cf296"]]), t4 = { class: "remote-form" }, s4 = { class: "form-header" }, n4 = { class: "form-body" }, o4 = {
  key: 0,
  class: "form-error"
}, a4 = { class: "form-actions" }, l4 = /* @__PURE__ */ Se({
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
    return (f, v) => (o(), i("div", t4, [
      s("div", s4, [
        b(hs, null, {
          default: h(() => [
            x(m(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", n4, [
        b(Gt, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            b(Pt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (p) => l.value.name = p),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        b(Gt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            b(Pt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (p) => l.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        b(Gt, { label: "Push URL (optional)" }, {
          default: h(() => [
            b(Pt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (o(), i("div", o4, m(c.value), 1)) : y("", !0)
      ]),
      s("div", a4, [
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
}), i4 = /* @__PURE__ */ Te(l4, [["__scopeId", "data-v-56021b18"]]), r4 = { class: "conflict-summary-box" }, c4 = { class: "summary-header" }, u4 = { class: "summary-text" }, d4 = { key: 0 }, m4 = {
  key: 1,
  class: "all-resolved"
}, f4 = { class: "summary-progress" }, v4 = { class: "progress-bar" }, p4 = { class: "progress-text" }, g4 = /* @__PURE__ */ Se({
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
    return (a, l) => (o(), i("div", r4, [
      s("div", c4, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", u4, [
          s("strong", null, m(e.conflictCount) + " conflict" + m(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (o(), i("p", d4, " Resolve all conflicts before " + m(e.operationType) + "ing ", 1)) : (o(), i("p", m4, " All conflicts resolved - ready to " + m(e.operationType), 1))
        ])
      ]),
      s("div", f4, [
        s("div", v4, [
          s("div", {
            class: "progress-fill",
            style: Vt({ width: n.value + "%" })
          }, null, 4)
        ]),
        s("span", p4, m(e.resolvedCount) + " / " + m(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), h4 = /* @__PURE__ */ Te(g4, [["__scopeId", "data-v-4e9e6cc9"]]), y4 = { class: "modal-header" }, w4 = { class: "modal-title" }, _4 = { class: "modal-body" }, k4 = {
  key: 0,
  class: "error-box"
}, b4 = {
  key: 0,
  class: "error-hint"
}, $4 = {
  key: 1,
  class: "loading-state"
}, C4 = { class: "commit-summary" }, x4 = {
  key: 0,
  class: "commits-section"
}, S4 = { class: "commit-list" }, I4 = { class: "commit-hash" }, E4 = { class: "commit-message" }, T4 = { class: "commit-date" }, M4 = {
  key: 1,
  class: "changes-section"
}, P4 = {
  key: 0,
  class: "change-group",
  open: ""
}, R4 = { class: "change-count" }, D4 = { class: "change-list" }, N4 = {
  key: 0,
  class: "conflict-badge"
}, L4 = {
  key: 1,
  class: "change-group"
}, U4 = { class: "change-count" }, O4 = { class: "change-list" }, A4 = {
  key: 2,
  class: "change-group"
}, z4 = { class: "change-count" }, F4 = { class: "change-list" }, V4 = {
  key: 3,
  class: "strategy-section"
}, B4 = { class: "radio-group" }, W4 = { class: "radio-option" }, G4 = { class: "radio-option" }, j4 = { class: "radio-option" }, H4 = {
  key: 4,
  class: "up-to-date"
}, q4 = { class: "modal-actions" }, Di = "comfygit.pullModelStrategy", K4 = /* @__PURE__ */ Se({
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
    const n = e, a = t, l = _(localStorage.getItem(Di) || "skip");
    $t(l, (S) => {
      localStorage.setItem(Di, S);
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
    }), f = P(() => n.preview && Ec(n.preview) ? n.preview : null), v = P(() => {
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
      return o(), D(ls, { to: "body" }, [
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
            s("div", y4, [
              s("h3", w4, "PULL FROM " + m(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: $[0] || ($[0] = (M) => S.$emit("close"))
              }, "✕")
            ]),
            s("div", _4, [
              e.error ? (o(), i("div", k4, [
                $[13] || ($[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  $[12] || ($[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, m(e.error), 1),
                  r.value ? (o(), i("p", b4, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (o(), i("div", $4, [...$[14] || ($[14] = [
                s("span", { class: "spinner" }, "⟳", -1),
                x(" Loading preview... ", -1)
              ])])) : (I = e.preview) != null && I.has_uncommitted_changes ? (o(), i(F, { key: 2 }, [
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
              ], 64)) : e.preview ? (o(), i(F, { key: 3 }, [
                s("div", C4, [
                  $[17] || ($[17] = s("span", { class: "icon" }, "📥", -1)),
                  x(" " + m(e.preview.commits_behind) + " commit" + m(e.preview.commits_behind !== 1 ? "s" : "") + " from " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (o(), i("div", x4, [
                  $[18] || ($[18] = s("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  s("div", S4, [
                    (o(!0), i(F, null, he(e.preview.commits, (M) => (o(), i("div", {
                      key: M.hash,
                      class: "commit-item"
                    }, [
                      s("span", I4, m(M.short_hash || M.hash.slice(0, 7)), 1),
                      s("span", E4, m(M.message), 1),
                      s("span", T4, m(M.date_relative || M.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                d.value ? (o(), i("div", M4, [
                  $[22] || ($[22] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (o(), i("details", P4, [
                    s("summary", null, [
                      $[19] || ($[19] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", R4, m(c.value) + " changes", 1)
                    ]),
                    s("div", D4, [
                      (o(!0), i(F, null, he(e.preview.changes.workflows.added, (M) => (o(), i("div", {
                        key: "a-" + M,
                        class: "change-item add"
                      }, " + " + m(M), 1))), 128)),
                      (o(!0), i(F, null, he(e.preview.changes.workflows.modified, (M) => (o(), i("div", {
                        key: "m-" + M,
                        class: "change-item modify"
                      }, [
                        x(" ~ " + m(M) + " ", 1),
                        k(M) ? (o(), i("span", N4, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (o(!0), i(F, null, he(e.preview.changes.workflows.deleted, (M) => (o(), i("div", {
                        key: "d-" + M,
                        class: "change-item delete"
                      }, " - " + m(M), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (o(), i("details", L4, [
                    s("summary", null, [
                      $[20] || ($[20] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", U4, m(u.value) + " to install", 1)
                    ]),
                    s("div", O4, [
                      (o(!0), i(F, null, he(e.preview.changes.nodes.to_install, (M) => (o(), i("div", {
                        key: M,
                        class: "change-item add"
                      }, " + " + m(M), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (o(), i("details", A4, [
                    s("summary", null, [
                      $[21] || ($[21] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", z4, m(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", F4, [
                      (o(!0), i(F, null, he(e.preview.changes.models.referenced, (M) => (o(), i("div", {
                        key: M,
                        class: "change-item"
                      }, m(M), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                f.value ? (o(), D(h4, {
                  key: 2,
                  "conflict-count": v.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (o(), i("div", V4, [
                  $[27] || ($[27] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", B4, [
                    s("label", W4, [
                      At(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": $[1] || ($[1] = (M) => l.value = M),
                        value: "all"
                      }, null, 512), [
                        [qo, l.value]
                      ]),
                      $[23] || ($[23] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", G4, [
                      At(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": $[2] || ($[2] = (M) => l.value = M),
                        value: "required"
                      }, null, 512), [
                        [qo, l.value]
                      ]),
                      $[24] || ($[24] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", j4, [
                      At(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": $[3] || ($[3] = (M) => l.value = M),
                        value: "skip"
                      }, null, 512), [
                        [qo, l.value]
                      ]),
                      $[25] || ($[25] = s("span", null, "Skip model downloads", -1)),
                      $[26] || ($[26] = s("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  $[28] || ($[28] = s("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (o(), i("div", H4, [
                  $[29] || ($[29] = s("span", { class: "icon" }, "✓", -1)),
                  x(" Already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            s("div", q4, [
              b(Pe, {
                variant: "secondary",
                onClick: $[4] || ($[4] = (M) => S.$emit("close"))
              }, {
                default: h(() => [...$[30] || ($[30] = [
                  x(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (o(), i(F, { key: 0 }, [
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
              ], 64)) : (E = e.preview) != null && E.has_uncommitted_changes ? (o(), D(Pe, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: $[7] || ($[7] = (M) => C(!0))
              }, {
                default: h(() => [...$[33] || ($[33] = [
                  x(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (o(), i(F, { key: 2 }, [
                f.value && !w.value ? (o(), D(Pe, {
                  key: 0,
                  variant: "primary",
                  onClick: $[8] || ($[8] = (M) => a("openConflictResolution"))
                }, {
                  default: h(() => [
                    x(" Resolve Conflicts (" + m(p.value) + "/" + m(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (o(), D(Pe, {
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
}), J4 = /* @__PURE__ */ Te(K4, [["__scopeId", "data-v-1d633bba"]]), Q4 = { class: "modal-header" }, Y4 = { class: "modal-title" }, X4 = { class: "modal-body" }, Z4 = {
  key: 0,
  class: "error-box"
}, eI = {
  key: 1,
  class: "loading-state"
}, tI = {
  key: 2,
  class: "warning-box"
}, sI = {
  key: 1,
  class: "commits-section"
}, nI = { class: "commit-list" }, oI = { class: "commit-hash" }, aI = { class: "commit-message" }, lI = { class: "commit-date" }, iI = { class: "force-option" }, rI = { class: "checkbox-option" }, cI = { class: "commit-summary" }, uI = { key: 0 }, dI = { key: 1 }, mI = {
  key: 0,
  class: "info-box"
}, fI = {
  key: 2,
  class: "commits-section"
}, vI = { class: "commit-list" }, pI = { class: "commit-hash" }, gI = { class: "commit-message" }, hI = { class: "commit-date" }, yI = {
  key: 3,
  class: "up-to-date"
}, wI = { class: "modal-actions" }, _I = /* @__PURE__ */ Se({
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
      return o(), i(F, null, [
        (o(), D(ls, { to: "body" }, [
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
              s("div", Q4, [
                s("h3", Y4, "PUSH TO " + m(e.remoteName.toUpperCase()), 1),
                s("button", {
                  class: "modal-close",
                  onClick: g[0] || (g[0] = (I) => w.$emit("close"))
                }, "✕")
              ]),
              s("div", X4, [
                e.error ? (o(), i("div", Z4, [
                  g[13] || (g[13] = s("span", { class: "error-icon" }, "!", -1)),
                  s("div", null, [
                    g[12] || (g[12] = s("strong", null, "Push failed", -1)),
                    s("p", null, m(e.error), 1)
                  ])
                ])) : y("", !0),
                e.loading ? (o(), i("div", eI, [...g[14] || (g[14] = [
                  s("span", { class: "spinner" }, "⟳", -1),
                  x(" Loading preview... ", -1)
                ])])) : (k = e.preview) != null && k.has_uncommitted_changes ? (o(), i("div", tI, [...g[15] || (g[15] = [
                  s("span", { class: "warning-icon" }, "!", -1),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "Commit your changes before pushing.")
                  ], -1)
                ])])) : (C = e.preview) != null && C.remote_has_new_commits ? (o(), i(F, { key: 3 }, [
                  g[19] || (g[19] = s("div", { class: "warning-box" }, [
                    s("span", { class: "warning-icon" }, "!"),
                    s("div", null, [
                      s("strong", null, "REMOTE HAS NEW COMMITS"),
                      s("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                    ])
                  ], -1)),
                  v.value ? (o(), D(ll, {
                    key: 0,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[1] || (g[1] = (I) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (o(), i("div", sI, [
                    g[16] || (g[16] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", nI, [
                      (o(!0), i(F, null, he(e.preview.commits, (I) => (o(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", oI, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", aI, m(I.message), 1),
                        s("span", lI, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : y("", !0),
                  s("div", iI, [
                    s("label", rI, [
                      At(s("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": g[2] || (g[2] = (I) => l.value = I)
                      }, null, 512), [
                        [la, l.value]
                      ]),
                      g[17] || (g[17] = s("span", null, "Force push (overwrite remote)", -1))
                    ]),
                    g[18] || (g[18] = s("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                  ])
                ], 64)) : e.preview ? (o(), i(F, { key: 4 }, [
                  s("div", cI, [
                    g[20] || (g[20] = s("span", { class: "icon" }, "📤", -1)),
                    e.preview.is_first_push ? (o(), i("span", uI, " Creating " + m(e.preview.remote) + "/" + m(e.preview.branch) + " with " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (o(), i("span", dI, " Pushing " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + m(e.preview.remote) + "/" + m(e.preview.branch), 1))
                  ]),
                  e.preview.is_first_push ? (o(), i("div", mI, [...g[21] || (g[21] = [
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
                  v.value ? (o(), D(ll, {
                    key: 1,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[3] || (g[3] = (I) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (o(), i("div", fI, [
                    g[22] || (g[22] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", vI, [
                      (o(!0), i(F, null, he(e.preview.commits, (I) => (o(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", pI, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", gI, m(I.message), 1),
                        s("span", hI, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : (o(), i("div", yI, [
                    g[23] || (g[23] = s("span", { class: "icon" }, "✓", -1)),
                    x(" Nothing to push - already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                  ]))
                ], 64)) : y("", !0)
              ]),
              s("div", wI, [
                b(Pe, {
                  variant: "secondary",
                  onClick: g[4] || (g[4] = (I) => w.$emit("close"))
                }, {
                  default: h(() => [...g[24] || (g[24] = [
                    x(" Cancel ", -1)
                  ])]),
                  _: 1
                }),
                (S = e.preview) != null && S.remote_has_new_commits ? (o(), i(F, { key: 0 }, [
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
                ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (o(), D(Pe, {
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
        r.value && (($ = e.preview) != null && $.warnings) ? (o(), D(Tl, {
          key: 0,
          warnings: e.preview.warnings,
          onClose: g[10] || (g[10] = (I) => r.value = !1),
          onRevalidate: g[11] || (g[11] = (I) => w.$emit("revalidate"))
        }, null, 8, ["warnings"])) : y("", !0)
      ], 64);
    };
  }
}), kI = /* @__PURE__ */ Te(_I, [["__scopeId", "data-v-7748bf33"]]), bI = { class: "resolution-choice-group" }, $I = ["disabled"], CI = ["disabled"], xI = /* @__PURE__ */ Se({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (o(), i("div", bI, [
      s("button", {
        class: Ve(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (a) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...n[2] || (n[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, $I),
      s("button", {
        class: Ve(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (a) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...n[3] || (n[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, CI)
    ]));
  }
}), SI = /* @__PURE__ */ Te(xI, [["__scopeId", "data-v-985715ed"]]), II = { class: "conflict-header" }, EI = { class: "conflict-info" }, TI = { class: "workflow-name" }, MI = { class: "conflict-description" }, PI = {
  key: 0,
  class: "resolved-badge"
}, RI = { class: "resolved-text" }, DI = { class: "conflict-hashes" }, NI = { class: "hash-item" }, LI = { class: "hash-item" }, UI = { class: "conflict-actions" }, OI = /* @__PURE__ */ Se({
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
        class: Ve(["conflict-item", { resolved: r.value }])
      }, [
        s("div", II, [
          f[2] || (f[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", EI, [
            s("code", TI, m(e.conflict.name) + ".json", 1),
            s("div", MI, m(c.value), 1)
          ]),
          r.value ? (o(), i("div", PI, [
            f[1] || (f[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", RI, m(u.value), 1)
          ])) : y("", !0)
        ]),
        s("div", DI, [
          s("span", NI, [
            f[3] || (f[3] = x("Your: ", -1)),
            s("code", null, m(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", LI, [
            f[4] || (f[4] = x("Theirs: ", -1)),
            s("code", null, m(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", UI, [
          b(SI, {
            modelValue: l.value,
            "onUpdate:modelValue": f[0] || (f[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), AI = /* @__PURE__ */ Te(OI, [["__scopeId", "data-v-506d3bbf"]]), zI = { class: "resolution-content" }, FI = {
  key: 0,
  class: "error-box"
}, VI = { class: "resolution-header" }, BI = { class: "header-stats" }, WI = { class: "stat" }, GI = { class: "stat-value" }, jI = { class: "stat resolved" }, HI = { class: "stat-value" }, qI = {
  key: 0,
  class: "stat pending"
}, KI = { class: "stat-value" }, JI = { class: "conflicts-list" }, QI = {
  key: 1,
  class: "all-resolved-message"
}, YI = /* @__PURE__ */ Se({
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
    return (w, g) => (o(), D(Mt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        s("div", zI, [
          e.error ? (o(), i("div", FI, [
            g[1] || (g[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              g[0] || (g[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, m(e.error), 1)
            ])
          ])) : y("", !0),
          s("div", VI, [
            s("div", BI, [
              s("div", WI, [
                s("span", GI, m(e.workflowConflicts.length), 1),
                g[2] || (g[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", jI, [
                s("span", HI, m(l.value), 1),
                g[3] || (g[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (o(), i("div", qI, [
                s("span", KI, m(r.value), 1),
                g[4] || (g[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            g[5] || (g[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", JI, [
            (o(!0), i(F, null, he(e.workflowConflicts, (k) => (o(), D(AI, {
              key: k.name,
              conflict: k,
              resolution: d(k.name),
              onResolve: (C) => f(k.name, C)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (o(), i("div", QI, [
            g[6] || (g[6] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", null, 'All conflicts resolved! Click "' + m(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        b(De, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...g[7] || (g[7] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g[8] || (g[8] = s("div", { class: "footer-spacer" }, null, -1)),
        b(De, {
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
}), XI = /* @__PURE__ */ Te(YI, [["__scopeId", "data-v-c58d150d"]]), ZI = { class: "node-conflict-item" }, e6 = { class: "node-header" }, t6 = { class: "node-name" }, s6 = { class: "node-id" }, n6 = { class: "version-comparison" }, o6 = { class: "version yours" }, a6 = { class: "version theirs" }, l6 = { class: "chosen-version" }, i6 = { class: "chosen" }, r6 = { class: "chosen-reason" }, c6 = { class: "affected-workflows" }, u6 = { class: "wf-source" }, d6 = { class: "wf-version" }, m6 = /* @__PURE__ */ Se({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, n) => (o(), i("div", ZI, [
      s("div", e6, [
        s("code", t6, m(e.conflict.node_name), 1),
        s("span", s6, "(" + m(e.conflict.node_id) + ")", 1)
      ]),
      s("div", n6, [
        s("div", o6, [
          n[0] || (n[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, m(e.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", a6, [
          n[1] || (n[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, m(e.conflict.target_version), 1)
        ])
      ]),
      s("div", l6, [
        n[3] || (n[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", i6, m(e.conflict.chosen_version), 1),
        s("span", r6, m(e.conflict.chosen_reason), 1)
      ]),
      s("details", c6, [
        s("summary", null, " Affected workflows (" + m(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (o(!0), i(F, null, he(e.conflict.affected_workflows, (a) => (o(), i("li", {
            key: a.name
          }, [
            s("code", null, m(a.name), 1),
            s("span", u6, "(" + m(a.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", d6, "needs v" + m(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), f6 = /* @__PURE__ */ Te(m6, [["__scopeId", "data-v-8b626725"]]), v6 = { class: "validation-content" }, p6 = {
  key: 0,
  class: "compatible-message"
}, g6 = { class: "conflicts-list" }, h6 = {
  key: 2,
  class: "warnings-section"
}, y6 = /* @__PURE__ */ Se({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = P(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (o(), D(Mt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => a("cancel"))
    }, {
      body: h(() => [
        s("div", v6, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (o(), i("div", p6, [
            c[5] || (c[5] = s("span", { class: "icon" }, "✓", -1)),
            s("div", null, [
              c[4] || (c[4] = s("strong", null, "All clear!", -1)),
              s("p", null, "Your workflow choices are compatible. Ready to " + m(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (o(), i(F, { key: 1 }, [
            c[6] || (c[6] = s("div", { class: "warning-header" }, [
              s("span", { class: "icon" }, "⚠"),
              s("div", null, [
                s("strong", null, "Node Version Differences"),
                s("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            s("div", g6, [
              (o(!0), i(F, null, he(e.validation.node_conflicts, (u) => (o(), D(f6, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (o(), i("div", h6, [
            c[8] || (c[8] = s("h4", null, "Warnings", -1)),
            s("ul", null, [
              (o(!0), i(F, null, he(e.validation.warnings, (u, d) => (o(), i("li", { key: d }, m(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        b(De, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => a("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = s("div", { class: "footer-spacer" }, null, -1)),
        b(De, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => a("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            x(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        b(De, {
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
}), w6 = /* @__PURE__ */ Te(y6, [["__scopeId", "data-v-fefd26ed"]]), _6 = {
  key: 0,
  class: "embedded-toolbar"
}, k6 = { class: "embedded-toolbar-search" }, b6 = /* @__PURE__ */ Se({
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
    } = ft(), k = _([]), C = _({}), S = _(!1), $ = _(null), I = _(""), E = _(!1), M = _(null), R = _(!1), L = _("add"), A = _({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), N = P(() => {
      if (!I.value.trim()) return k.value;
      const Fe = I.value.toLowerCase();
      return k.value.filter(
        (Le) => Le.name.toLowerCase().includes(Fe) || Le.fetch_url.toLowerCase().includes(Fe) || Le.push_url.toLowerCase().includes(Fe)
      );
    });
    async function V() {
      S.value = !0, $.value = null;
      try {
        const Fe = await a();
        k.value = Fe.remotes, await Promise.all(
          Fe.remotes.map(async (Le) => {
            const Ze = await d(Le.name);
            Ze && (C.value[Le.name] = Ze);
          })
        );
      } catch (Fe) {
        $.value = Fe instanceof Error ? Fe.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function ae() {
      L.value = "add", A.value = { name: "", fetchUrl: "", pushUrl: "" }, R.value = !0;
    }
    function ee(Fe) {
      const Le = k.value.find((Ze) => Ze.name === Fe);
      Le && (L.value = "edit", A.value = {
        name: Le.name,
        fetchUrl: Le.fetch_url,
        pushUrl: Le.push_url
      }, R.value = !0);
    }
    async function J(Fe) {
      try {
        L.value === "add" ? await l(Fe.name, Fe.fetchUrl) : await c(Fe.name, Fe.fetchUrl, Fe.pushUrl || void 0), R.value = !1, await V();
      } catch (Le) {
        $.value = Le instanceof Error ? Le.message : "Operation failed";
      }
    }
    function fe() {
      R.value = !1, A.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function oe(Fe) {
      M.value = Fe;
      try {
        await u(Fe);
        const Le = await d(Fe);
        Le && (C.value[Fe] = Le), n("toast", `✓ Fetched from ${Fe}`, "success");
      } catch (Le) {
        n("toast", Le instanceof Error ? Le.message : "Fetch failed", "error");
      } finally {
        M.value = null;
      }
    }
    async function H(Fe) {
      if (confirm(`Remove remote "${Fe}"?`))
        try {
          await r(Fe), await V();
        } catch (Le) {
          $.value = Le instanceof Error ? Le.message : "Failed to remove remote";
        }
    }
    function q() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const _e = _("idle"), se = P(() => _e.value === "pull_preview"), ve = P(
      () => _e.value === "resolving" || _e.value === "validating"
    ), de = P(
      () => _e.value === "validation_review" || _e.value === "executing"
    ), G = _(!1), ne = _(null), te = _(!1), Ee = _(null), we = _(null), Oe = _(!1), Ne = _(null), $e = _(null), Ae = _(/* @__PURE__ */ new Map()), pe = _(null), ge = _(null), T = P(() => Ne.value && Ec(Ne.value) ? Ne.value : null);
    async function O(Fe) {
      we.value = Fe, _e.value = "pull_preview", Oe.value = !0, Ne.value = null, $e.value = null;
      try {
        Ne.value = await f(Fe);
      } catch (Le) {
        $e.value = Le instanceof Error ? Le.message : "Failed to load pull preview";
      } finally {
        Oe.value = !1;
      }
    }
    function le() {
      _e.value = "idle", Ne.value = null, $e.value = null, we.value = null;
    }
    async function Ie(Fe) {
      if (!we.value) return;
      _e.value = "executing", $e.value = null;
      const Le = we.value;
      try {
        const Ze = await v(Le, Fe);
        if (Ze.rolled_back) {
          $e.value = `Pull failed and was rolled back: ${Ze.error || "Unknown error"}`, _e.value = "pull_preview";
          return;
        }
        Be(), _e.value = "idle", n("toast", `✓ Pulled from ${Le}`, "success"), await V();
      } catch (Ze) {
        $e.value = Ze instanceof Error ? Ze.message : "Pull failed", _e.value = "pull_preview";
      }
    }
    function Me() {
      T.value && (_e.value = "resolving", ge.value = null);
    }
    function Ce(Fe, Le) {
      Ae.value.set(Fe, { name: Fe, resolution: Le });
    }
    function X() {
      _e.value = "pull_preview";
    }
    async function W() {
      _e.value = "validating", ge.value = null;
      try {
        const Fe = Array.from(Ae.value.values());
        pe.value = await g(we.value, Fe), _e.value = "validation_review";
      } catch (Fe) {
        ge.value = Fe instanceof Error ? Fe.message : "Validation failed", _e.value = "resolving";
      }
    }
    async function ye() {
      _e.value = "executing";
      const Fe = we.value;
      try {
        const Le = Array.from(Ae.value.values()), Ze = await v(Fe, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Le
        });
        if (Ze.rolled_back) {
          $e.value = `Pull failed and was rolled back: ${Ze.error || "Unknown error"}`, _e.value = "pull_preview";
          return;
        }
        Be(), _e.value = "idle", n("toast", `✓ Pulled from ${Fe}`, "success"), await V();
      } catch (Le) {
        $e.value = Le instanceof Error ? Le.message : "Pull failed", _e.value = "validation_review";
      }
    }
    function ke() {
      _e.value = "resolving";
    }
    function qe() {
      Be(), _e.value = "idle";
    }
    function Be() {
      Ae.value.clear(), pe.value = null, ge.value = null, $e.value = null, Ne.value = null, we.value = null;
    }
    async function be(Fe) {
      we.value = Fe, G.value = !0, Oe.value = !0, ne.value = null, Ee.value = null;
      try {
        ne.value = await p(Fe);
      } catch (Le) {
        Ee.value = Le instanceof Error ? Le.message : "Failed to load push preview";
      } finally {
        Oe.value = !1;
      }
    }
    async function Y() {
      if (we.value) {
        Oe.value = !0, Ee.value = null;
        try {
          ne.value = await p(we.value);
        } catch (Fe) {
          Ee.value = Fe instanceof Error ? Fe.message : "Failed to refresh push preview";
        } finally {
          Oe.value = !1;
        }
      }
    }
    function ze() {
      G.value = !1, ne.value = null, Ee.value = null, we.value = null;
    }
    async function Re(Fe) {
      var Ze;
      if (!we.value) return;
      te.value = !0;
      const Le = we.value;
      Ee.value = null;
      try {
        await w(Le, Fe), ze(), n("toast", `✓ Pushed to ${Le}`, "success"), await V();
      } catch (xt) {
        const Ft = xt instanceof Error ? xt.message : "Push failed";
        Ee.value = Ft, xt instanceof ol && xt.status === 409 && ((Ze = xt.data) != null && Ze.needs_force) && ne.value ? ne.value = {
          ...ne.value,
          remote_has_new_commits: !0,
          needs_force: !0,
          can_push: !0,
          block_reason: null
        } : n("toast", Ft, "error");
      } finally {
        te.value = !1;
      }
    }
    function Ke() {
      const Fe = we.value;
      ze(), Fe && O(Fe);
    }
    return dt(V), (Fe, Le) => (o(), i(F, null, [
      b(qt, null, cs({
        content: h(() => [
          S.value ? (o(), D(Fs, {
            key: 0,
            message: "Loading remotes..."
          })) : $.value ? (o(), D(Vs, {
            key: 1,
            message: $.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (o(), i(F, { key: 2 }, [
            e.embedded && !R.value ? (o(), i("div", _6, [
              s("div", k6, [
                b($n, {
                  modelValue: I.value,
                  "onUpdate:modelValue": Le[2] || (Le[2] = (Ze) => I.value = Ze),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              b(Pe, {
                variant: "primary",
                size: "sm",
                onClick: ae
              }, {
                default: h(() => [...Le[5] || (Le[5] = [
                  x(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : y("", !0),
            R.value ? (o(), D(i4, {
              key: 1,
              mode: L.value,
              "remote-name": A.value.name,
              "fetch-url": A.value.fetchUrl,
              "push-url": A.value.pushUrl,
              onSubmit: J,
              onCancel: fe
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            N.value.length && !R.value ? (o(), D(Lt, {
              key: 2,
              title: "REMOTES",
              count: N.value.length
            }, {
              default: h(() => [
                (o(!0), i(F, null, he(N.value, (Ze) => (o(), D(K8, {
                  key: Ze.name,
                  remote: Ze,
                  "sync-status": C.value[Ze.name],
                  "fetching-remote": M.value,
                  onFetch: oe,
                  onEdit: ee,
                  onRemove: H,
                  onPull: O,
                  onPush: be
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !N.value.length && !R.value ? (o(), D(Ms, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                b(Pe, {
                  variant: "primary",
                  onClick: ae
                }, {
                  default: h(() => [...Le[6] || (Le[6] = [
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
            b(Kt, {
              title: "GIT REMOTES",
              "show-info": !0,
              onInfoClick: Le[0] || (Le[0] = (Ze) => E.value = !0)
            }, {
              actions: h(() => [
                R.value ? y("", !0) : (o(), D(Pe, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: ae
                }, {
                  default: h(() => [...Le[4] || (Le[4] = [
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
            R.value ? y("", !0) : (o(), D($n, {
              key: 0,
              modelValue: I.value,
              "onUpdate:modelValue": Le[1] || (Le[1] = (Ze) => I.value = Ze),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      b(ks, {
        show: E.value,
        title: "About Git Remotes",
        onClose: Le[3] || (Le[3] = (Ze) => E.value = !1)
      }, {
        content: h(() => [...Le[7] || (Le[7] = [
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
            onClick: q
          }, {
            default: h(() => [...Le[8] || (Le[8] = [
              x(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b(J4, {
        show: se.value,
        "remote-name": we.value || "",
        preview: Ne.value,
        loading: Oe.value,
        pulling: _e.value === "executing",
        error: $e.value,
        "conflict-resolutions": Ae.value,
        onClose: le,
        onPull: Ie,
        onOpenConflictResolution: Me
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      b(kI, {
        show: G.value,
        "remote-name": we.value || "",
        preview: ne.value,
        loading: Oe.value,
        pushing: te.value,
        error: Ee.value,
        onClose: ze,
        onPush: Re,
        onPullFirst: Ke,
        onRevalidate: Y
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      ve.value && T.value ? (o(), D(XI, {
        key: 0,
        "workflow-conflicts": T.value.workflow_conflicts,
        resolutions: Ae.value,
        "operation-type": "pull",
        validating: _e.value === "validating",
        error: ge.value,
        onClose: X,
        onResolve: Ce,
        onApply: W
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      de.value && pe.value ? (o(), D(w6, {
        key: 1,
        validation: pe.value,
        "operation-type": "pull",
        executing: _e.value === "executing",
        onProceed: ye,
        onGoBack: ke,
        onCancel: qe
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), $6 = /* @__PURE__ */ Te(b6, [["__scopeId", "data-v-a6651a66"]]), C6 = /* @__PURE__ */ Se({
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
    }), (c, u) => (o(), D(qt, null, {
      header: h(() => [
        b(Kt, { title: "VERSION CONTROL" })
      ]),
      search: h(() => [
        b(Nl, {
          modelValue: r.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => r.value = d),
          tabs: l
        }, null, 8, ["modelValue"])
      ]),
      content: h(() => [
        r.value === "history" ? (o(), D(i8, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: u[1] || (u[1] = (d) => a("select", d)),
          onCheckout: u[2] || (u[2] = (d) => a("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (o(), D(P8, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: u[3] || (u[3] = (d) => a("switch", d)),
          onCreate: u[4] || (u[4] = (d) => a("create", d)),
          onDelete: u[5] || (u[5] = (d) => a("delete", d))
        }, null, 8, ["branches", "current"])) : (o(), D($6, {
          key: 2,
          embedded: "",
          onToast: u[6] || (u[6] = (d, f) => a("toast", d, f))
        }))
      ]),
      _: 1
    }));
  }
}), x6 = { class: "text-viewer-wrapper" }, S6 = ["disabled", "title"], I6 = { class: "text-content" }, E6 = /* @__PURE__ */ Se({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const t = e, n = _(null), a = _("idle");
    async function l() {
      if (t.content)
        try {
          await Pl(t.content), a.value = "copied", setTimeout(() => {
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
    return (u, d) => (o(), i("div", x6, [
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
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, S6),
        s("pre", I6, m(e.content), 1)
      ], 544)
    ]));
  }
}), T6 = /* @__PURE__ */ Te(E6, [["__scopeId", "data-v-85a537ba"]]), M6 = {
  key: 1,
  class: "manifest-viewer-shell"
}, P6 = { class: "manifest-path" }, R6 = /* @__PURE__ */ Se({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: t } = ft(), n = _(!1), a = _(null), l = _(!1), r = _({
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
    return dt(c), (u, d) => (o(), i(F, null, [
      b(qt, null, cs({
        content: h(() => [
          n.value ? (o(), D(Fs, {
            key: 0,
            message: "Loading manifest..."
          })) : a.value ? (o(), D(Vs, {
            key: 1,
            message: a.value,
            retry: !0,
            onRetry: c
          }, null, 8, ["message"])) : (o(), i(F, { key: 2 }, [
            !r.value.exists || !r.value.content ? (o(), D(Ms, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (o(), i("div", M6, [
              b(T6, {
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
            b(Kt, {
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
      b(ks, {
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
          s("div", P6, [
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
}), D6 = /* @__PURE__ */ Te(R6, [["__scopeId", "data-v-814a8fdd"]]), N6 = { class: "log-viewer-wrapper" }, L6 = ["disabled", "title"], U6 = /* @__PURE__ */ Se({
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
      await jt();
      const f = (v = n.value) == null ? void 0 : v.closest(".panel-layout-content");
      f && (f.scrollTop = f.scrollHeight);
    }
    dt(r), $t(() => t.logs, r);
    async function c() {
      if (l.value.length === 0) return;
      const f = l.value.map((v) => v.text).join(`
`);
      try {
        await Pl(f), a.value = "copied", setTimeout(() => {
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
    return (f, v) => (o(), i("div", N6, [
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
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, L6),
        (o(!0), i(F, null, he(l.value, (p, w) => (o(), i("div", {
          key: w,
          class: Ve(`log-line log-level-${p.level.toLowerCase()}`)
        }, m(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), Tc = /* @__PURE__ */ Te(U6, [["__scopeId", "data-v-5aaf1b88"]]), O6 = /* @__PURE__ */ Se({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: t, getStatus: n, getEnvironmentLogPath: a, openFile: l } = ft(), r = _([]), c = _(!1), u = _(null), d = _(!1), f = _("production"), v = _(null), p = _(!1);
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
    return dt(() => {
      w(), g();
    }), (C, S) => (o(), i(F, null, [
      b(qt, null, cs({
        content: h(() => [
          c.value ? (o(), D(Fs, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (o(), D(Vs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (o(), i(F, { key: 2 }, [
            r.value.length === 0 ? (o(), D(Ms, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), D(Tc, {
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
            b(Kt, {
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
      b(ks, {
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
}), Ni = /* @__PURE__ */ Se({
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
    } = ft(), c = e, u = _(c.initialTab ?? "workspace"), d = _([]), f = _(!1), v = _(null), p = _(!1), w = _(null), g = _(null), k = _(!1), C = P(() => u.value === "workspace" ? w.value : g.value);
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
    }), dt(() => {
      S(), $();
    }), (E, M) => (o(), i(F, null, [
      b(qt, null, cs({
        content: h(() => [
          f.value ? (o(), D(Fs, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : v.value ? (o(), D(Vs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (o(), i(F, { key: 2 }, [
            d.value.length === 0 ? (o(), D(Ms, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (o(), D(Tc, {
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
            b(Kt, {
              title: "DEBUG (LOGS)",
              "show-info": !0,
              onInfoClick: M[0] || (M[0] = (R) => p.value = !0)
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
            b(Nl, {
              modelValue: u.value,
              "onUpdate:modelValue": M[1] || (M[1] = (R) => u.value = R),
              tabs: [
                { id: "workspace", label: "Workspace" },
                { id: "orchestrator", label: "Orchestrator" }
              ]
            }, null, 8, ["modelValue"])
          ]),
          key: "1"
        }
      ]), 1024),
      b(ks, {
        show: p.value,
        title: "About Logs",
        onClose: M[3] || (M[3] = (R) => p.value = !1)
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
            onClick: M[2] || (M[2] = (R) => p.value = !1)
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
}), A6 = /* @__PURE__ */ Se({
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
    }), (d, f) => (o(), i(F, null, [
      b(qt, null, cs({
        header: h(() => [
          b(Kt, {
            title: c.value,
            "show-info": !0,
            onInfoClick: f[0] || (f[0] = (v) => r.value = !0)
          }, null, 8, ["title"])
        ]),
        content: h(() => [
          a.value === "manifest" ? (o(), D(D6, {
            key: 0,
            embedded: ""
          })) : l.value === "env" ? (o(), D(O6, {
            key: 1,
            embedded: ""
          })) : l.value === "workspace" ? (o(), D(Ni, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (o(), D(Ni, {
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
            b(Nl, {
              modelValue: l.value,
              "onUpdate:modelValue": f[1] || (f[1] = (v) => l.value = v),
              tabs: n
            }, null, 8, ["modelValue"])
          ]),
          key: "0"
        } : void 0
      ]), 1024),
      b(ks, {
        show: r.value,
        title: u.value,
        "max-width": "520px",
        onClose: f[3] || (f[3] = (v) => r.value = !1)
      }, {
        content: h(() => [
          a.value === "manifest" ? (o(), i(F, { key: 0 }, [
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
          ], 64)) : (o(), i(F, { key: 1 }, [
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
}), z6 = { class: "header-info" }, F6 = { class: "commit-hash" }, V6 = {
  key: 0,
  class: "commit-refs"
}, B6 = { class: "commit-message" }, W6 = { class: "commit-date" }, G6 = {
  key: 0,
  class: "loading"
}, j6 = {
  key: 1,
  class: "changes-section"
}, H6 = { class: "stats-row" }, q6 = { class: "stat" }, K6 = { class: "stat insertions" }, J6 = { class: "stat deletions" }, Q6 = {
  key: 0,
  class: "change-group"
}, Y6 = {
  key: 1,
  class: "change-group"
}, X6 = {
  key: 0,
  class: "version"
}, Z6 = {
  key: 2,
  class: "change-group"
}, eE = { class: "change-item" }, tE = /* @__PURE__ */ Se({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const t = e, { getCommitDetail: n } = ft(), a = _(null), l = _(!0), r = P(() => {
      if (!a.value) return !1;
      const u = a.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = P(() => {
      if (!a.value) return !1;
      const u = a.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return dt(async () => {
      try {
        a.value = await n(t.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (o(), D(Mt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (f) => u.$emit("close"))
    }, {
      header: h(() => {
        var f, v, p, w;
        return [
          s("div", z6, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", F6, m(((f = a.value) == null ? void 0 : f.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (p = a.value) == null ? void 0 : p.refs) != null && w.length ? (o(), i("span", V6, [
              (o(!0), i(F, null, he(a.value.refs, (g) => (o(), i("span", {
                key: g,
                class: "ref-badge"
              }, m(g), 1))), 128))
            ])) : y("", !0)
          ]),
          b(De, {
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
          s("div", B6, m(((f = a.value) == null ? void 0 : f.message) || e.commit.message), 1),
          s("div", W6, m(((v = a.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (o(), i("div", G6, "Loading details...")) : a.value ? (o(), i("div", j6, [
            s("div", H6, [
              s("span", q6, m(a.value.stats.files_changed) + " files", 1),
              s("span", K6, "+" + m(a.value.stats.insertions), 1),
              s("span", J6, "-" + m(a.value.stats.deletions), 1)
            ]),
            r.value ? (o(), i("div", Q6, [
              b(_n, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  x("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), i(F, null, he(a.value.changes.workflows.added, (p) => (o(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                d[7] || (d[7] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (o(!0), i(F, null, he(a.value.changes.workflows.modified, (p) => (o(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = s("span", { class: "change-icon" }, "~", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (o(!0), i(F, null, he(a.value.changes.workflows.deleted, (p) => (o(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (o(), i("div", Y6, [
              b(_n, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  x("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), i(F, null, he(a.value.changes.nodes.added, (p) => (o(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p.name), 1),
                p.version ? (o(), i("span", X6, "(" + m(p.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (o(!0), i(F, null, he(a.value.changes.nodes.removed, (p) => (o(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p.name), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.changes.models.resolved > 0 ? (o(), i("div", Z6, [
              b(_n, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  x("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", eE, [
                d[14] || (d[14] = s("span", { class: "change-icon" }, "●", -1)),
                s("span", null, m(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        b(De, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (f) => u.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            x(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        b(De, {
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
}), sE = /* @__PURE__ */ Te(tE, [["__scopeId", "data-v-d256ff6d"]]), nE = { class: "popover-header" }, oE = { class: "popover-body" }, aE = {
  key: 0,
  class: "changes-summary"
}, lE = {
  key: 0,
  class: "change-item"
}, iE = {
  key: 1,
  class: "change-item"
}, rE = {
  key: 2,
  class: "change-item"
}, cE = {
  key: 3,
  class: "change-item"
}, uE = {
  key: 4,
  class: "change-item"
}, dE = {
  key: 5,
  class: "change-item"
}, mE = {
  key: 1,
  class: "no-changes"
}, fE = {
  key: 2,
  class: "loading"
}, vE = {
  key: 3,
  class: "issues-error"
}, pE = { class: "error-header" }, gE = { class: "error-title" }, hE = { class: "issues-list" }, yE = { class: "workflow-state" }, wE = { class: "message-section" }, _E = { class: "popover-footer" }, kE = {
  key: 1,
  class: "commit-popover"
}, bE = { class: "popover-header" }, $E = { class: "popover-body" }, CE = {
  key: 0,
  class: "changes-summary"
}, xE = {
  key: 0,
  class: "change-item"
}, SE = {
  key: 1,
  class: "change-item"
}, IE = {
  key: 2,
  class: "change-item"
}, EE = {
  key: 3,
  class: "change-item"
}, TE = {
  key: 4,
  class: "change-item"
}, ME = {
  key: 5,
  class: "change-item"
}, PE = {
  key: 1,
  class: "no-changes"
}, RE = {
  key: 2,
  class: "loading"
}, DE = {
  key: 3,
  class: "issues-error"
}, NE = { class: "error-header" }, LE = { class: "error-title" }, UE = { class: "issues-list" }, OE = { class: "workflow-state" }, AE = { class: "message-section" }, zE = { class: "popover-footer" }, FE = /* @__PURE__ */ Se({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { commit: l } = ft(), r = _(""), c = _(!1), u = _(!1), d = P(() => {
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
    return (k, C) => e.asModal ? (o(), D(ls, {
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
          s("div", nE, [
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
          s("div", oE, [
            e.status && d.value ? (o(), i("div", aE, [
              e.status.workflows.new.length ? (o(), i("div", lE, [
                C[12] || (C[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (o(), i("div", iE, [
                C[13] || (C[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (o(), i("div", rE, [
                C[14] || (C[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (o(), i("div", cE, [
                C[15] || (C[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (o(), i("div", uE, [
                C[16] || (C[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              f.value ? y("", !0) : (o(), i("div", dE, [...C[17] || (C[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (o(), i("div", mE, " No changes to commit ")) : (o(), i("div", fE, " Loading... ")),
            p.value ? (o(), i("div", vE, [
              s("div", pE, [
                C[18] || (C[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", gE, m(v.value.length) + " workflow(s) have issues", 1)
              ]),
              s("div", hE, [
                (o(!0), i(F, null, he(v.value, (S) => (o(), i("div", {
                  key: S.name,
                  class: "issue-item"
                }, [
                  s("strong", null, m(S.name), 1),
                  s("span", yE, "(" + m(S.sync_state) + ")", 1),
                  x(": " + m(S.issue_summary), 1)
                ]))), 128))
              ]),
              b(ra, {
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
            s("div", wE, [
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
          s("div", _E, [
            b(De, {
              variant: "secondary",
              onClick: C[3] || (C[3] = (S) => a("close"))
            }, {
              default: h(() => [...C[20] || (C[20] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(De, {
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
    ])) : (o(), i("div", kE, [
      s("div", bE, [
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
      s("div", $E, [
        e.status && d.value ? (o(), i("div", CE, [
          e.status.workflows.new.length ? (o(), i("div", xE, [
            C[23] || (C[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (o(), i("div", SE, [
            C[24] || (C[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (o(), i("div", IE, [
            C[25] || (C[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (o(), i("div", EE, [
            C[26] || (C[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (o(), i("div", TE, [
            C[27] || (C[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          f.value ? y("", !0) : (o(), i("div", ME, [...C[28] || (C[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (o(), i("div", PE, " No changes to commit ")) : (o(), i("div", RE, " Loading... ")),
        p.value ? (o(), i("div", DE, [
          s("div", NE, [
            C[29] || (C[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", LE, m(v.value.length) + " workflow(s) have issues", 1)
          ]),
          s("div", UE, [
            (o(!0), i(F, null, he(v.value, (S) => (o(), i("div", {
              key: S.name,
              class: "issue-item"
            }, [
              s("strong", null, m(S.name), 1),
              s("span", OE, "(" + m(S.sync_state) + ")", 1),
              x(": " + m(S.issue_summary), 1)
            ]))), 128))
          ]),
          b(ra, {
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
        s("div", AE, [
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
      s("div", zE, [
        b(De, {
          variant: "secondary",
          onClick: C[9] || (C[9] = (S) => a("close"))
        }, {
          default: h(() => [...C[31] || (C[31] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(De, {
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
}), Mc = /* @__PURE__ */ Te(FE, [["__scopeId", "data-v-5f897631"]]), VE = { class: "switch-body" }, BE = { class: "switch-message" }, WE = { class: "switch-details" }, GE = /* @__PURE__ */ Se({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, n) => e.show ? (o(), D(Mt, {
      key: 0,
      title: "Confirm Environment Switch",
      size: "md",
      "overlay-z-index": 10005,
      onClose: n[2] || (n[2] = (a) => t.$emit("close"))
    }, {
      body: h(() => [
        s("div", VE, [
          s("p", BE, [
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
          s("p", WE, ' Your current work will be preserved. You can switch back to "' + m(e.fromEnvironment) + '" anytime. ', 1),
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
}), jE = /* @__PURE__ */ Te(GE, [["__scopeId", "data-v-f6d223e6"]]), HE = {
  key: 0,
  class: "modal-overlay"
}, qE = { class: "modal-content" }, KE = { class: "modal-body" }, JE = { class: "progress-info" }, QE = { class: "progress-percentage" }, YE = { class: "progress-state" }, XE = { class: "switch-steps" }, ZE = { class: "step-icon" }, eT = { class: "step-label" }, tT = /* @__PURE__ */ Se({
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
    return (r, c) => (o(), D(ls, { to: "body" }, [
      e.show ? (o(), i("div", HE, [
        s("div", qE, [
          c[1] || (c[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", KE, [
            b($c, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            s("div", JE, [
              s("div", QE, m(e.progress) + "%", 1),
              s("div", YE, m(n.value), 1)
            ]),
            s("div", XE, [
              (o(!0), i(F, null, he(l.value, (u) => (o(), i("div", {
                key: u.state,
                class: Ve(["switch-step", u.status])
              }, [
                s("span", ZE, m(u.icon), 1),
                s("span", eT, m(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), sT = /* @__PURE__ */ Te(tT, [["__scopeId", "data-v-768a5078"]]), nT = { class: "modal-header" }, oT = { class: "modal-body" }, aT = {
  key: 0,
  class: "node-section"
}, lT = { class: "node-list" }, iT = {
  key: 1,
  class: "node-section"
}, rT = { class: "node-list" }, cT = { class: "modal-actions" }, uT = /* @__PURE__ */ Se({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, n) => (o(), D(ls, { to: "body" }, [
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
          s("div", nT, [
            n[5] || (n[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", oT, [
            n[8] || (n[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (o(), i("div", aT, [
              n[6] || (n[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", lT, [
                (o(!0), i(F, null, he(e.mismatchDetails.missing_nodes, (a) => (o(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + m(a), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (o(), i("div", iT, [
              n[7] || (n[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", rT, [
                (o(!0), i(F, null, he(e.mismatchDetails.extra_nodes, (a) => (o(), i("div", {
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
          s("div", cT, [
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
}), dT = /* @__PURE__ */ Te(uT, [["__scopeId", "data-v-7cad7518"]]), mT = [
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
], Vo = "v0.0.24", fT = "Akatz", vT = { class: "social-buttons" }, pT = ["title", "aria-label", "onClick"], gT = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, hT = ["d"], yT = ["title", "aria-label", "onClick"], wT = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, _T = ["d"], kT = /* @__PURE__ */ Se({
  __name: "SocialButtons",
  setup(e) {
    function t(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, a) => (o(), i("div", vT, [
      (o(!0), i(F, null, he(lt(mT), (l) => (o(), i(F, {
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
          (o(), i("svg", gT, [
            s("path", {
              d: l.iconPath
            }, null, 8, hT)
          ]))
        ], 8, pT)) : (o(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          (o(), i("svg", wT, [
            s("path", {
              d: l.iconPath
            }, null, 8, _T)
          ]))
        ], 8, yT))
      ], 64))), 128))
    ]));
  }
}), Pc = /* @__PURE__ */ Te(kT, [["__scopeId", "data-v-4f846342"]]), bT = { class: "footer-info" }, $T = ["title"], CT = {
  key: 0,
  class: "dev-badge"
}, xT = { class: "made-by" }, ST = /* @__PURE__ */ Se({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: t } = ft(), n = _(null), a = _(null), l = _(null), r = P(() => n.value === "development"), c = P(() => {
      var d;
      if (!r.value) return Vo;
      const u = [a.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return u ? `${Vo} (${u})` : `${Vo} (development)`;
    });
    return dt(async () => {
      try {
        const u = await t();
        n.value = u.manager_source ?? null, a.value = u.manager_branch ?? null, l.value = u.manager_commit ?? null;
      } catch {
        n.value = null;
      }
    }), (u, d) => (o(), i("div", bT, [
      s("span", {
        class: "version",
        title: c.value
      }, [
        x(m(lt(Vo)) + " ", 1),
        r.value ? (o(), i("span", CT, "dev")) : y("", !0)
      ], 8, $T),
      s("span", xT, [
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
        x(" by " + m(lt(fT)), 1)
      ])
    ]));
  }
}), Rc = /* @__PURE__ */ Te(ST, [["__scopeId", "data-v-4fa265b3"]]), IT = /* @__PURE__ */ Se({
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
    return (r, c) => (o(), D(Mt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => r.$emit("close"))
    }, {
      body: h(() => [
        b(wc, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var u;
        return [
          b(De, {
            variant: "primary",
            disabled: !((u = n.value) != null && u.hasChanges),
            onClick: a
          }, {
            default: h(() => [...c[2] || (c[2] = [
              x(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(De, {
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
}), ET = /* @__PURE__ */ Te(IT, [["__scopeId", "data-v-fac00ae7"]]), TT = { class: "header-actions" }, MT = {
  key: 0,
  class: "wizard-step"
}, PT = { class: "form-field" }, RT = ["placeholder"], DT = {
  key: 0,
  class: "form-error"
}, NT = { class: "form-field form-field--checkbox" }, LT = { class: "form-checkbox" }, UT = {
  key: 0,
  class: "form-field"
}, OT = ["placeholder"], AT = {
  key: 0,
  class: "form-info"
}, zT = {
  key: 1,
  class: "form-suggestion"
}, FT = {
  key: 2,
  class: "form-error"
}, VT = {
  key: 3,
  class: "form-info"
}, BT = {
  key: 1,
  class: "wizard-step"
}, WT = {
  key: 0,
  class: "progress-check-loading"
}, GT = {
  key: 0,
  class: "cli-warning"
}, jT = { class: "cli-warning-header" }, HT = {
  key: 1,
  class: "env-landing"
}, qT = { class: "env-list" }, KT = ["value"], JT = { class: "env-name" }, QT = {
  key: 2,
  class: "env-create"
}, YT = { class: "form-field" }, XT = { class: "form-field" }, ZT = ["value"], eM = { class: "form-field" }, tM = ["disabled"], sM = ["value"], nM = { class: "form-field" }, oM = ["value"], aM = { class: "form-field form-field--checkbox" }, lM = { class: "form-checkbox" }, iM = {
  key: 0,
  class: "form-error"
}, rM = {
  key: 1,
  class: "env-creating"
}, cM = { class: "creating-intro" }, uM = {
  key: 3,
  class: "env-import"
}, dM = { class: "wizard-footer" }, mM = { class: "wizard-footer-actions" }, In = 10, fM = 600 * 1e3, Li = 1800 * 1e3, vM = /* @__PURE__ */ Se({
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
    } = ft(), p = _(n.initialStep || 1), w = _(null), g = _("landing"), k = _(!1), C = _(!1), S = _(!1), $ = _(!1), I = _(null), E = _(n.initialStep === 2), M = _(n.defaultPath), R = _(!!n.detectedModelsDir), L = _(n.detectedModelsDir || ""), A = _(null), N = _(null), V = _(null), ae = _(null), ee = _("my-new-env"), J = _(kc), fe = _("latest"), oe = _(bc), H = _(!0), q = _(null), _e = _(null), se = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), ve = _(!1), de = _(!1), G = _(!1), ne = _({ progress: 0, message: "" }), te = _({ progress: 0, message: "" }), Ee = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], we = _(0), Oe = _(null), Ne = _(0), $e = _(null), Ae = P(() => {
      var Re, Ke;
      const be = (Re = M.value) == null ? void 0 : Re.trim(), Y = !A.value, ze = !R.value || !N.value && ((Ke = L.value) == null ? void 0 : Ke.trim());
      return be && Y && ze;
    }), pe = P(() => {
      var be;
      return (be = ee.value) == null ? void 0 : be.trim();
    }), ge = P(() => !!(p.value === 2 || _e.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), T = P(() => _e.value || n.workspacePath || null);
    async function O() {
      var be;
      if (A.value = null, !!((be = M.value) != null && be.trim()))
        try {
          const Y = await c({ path: M.value, type: "workspace" });
          Y.valid || (A.value = Y.error || "Invalid path");
        } catch (Y) {
          A.value = Y instanceof Error ? Y.message : "Validation failed";
        }
    }
    async function le() {
      var be;
      if (N.value = null, V.value = null, ae.value = null, !!((be = L.value) != null && be.trim()))
        try {
          const Y = await c({ path: L.value, type: "models" });
          if (Y.valid)
            ae.value = Y.model_count ?? null;
          else if (N.value = Y.error || "Invalid path", Y.suggestion) {
            V.value = Y.suggestion, L.value = Y.suggestion, N.value = null;
            const ze = await c({ path: Y.suggestion, type: "models" });
            ze.valid && (ae.value = ze.model_count ?? null);
          }
        } catch (Y) {
          N.value = Y instanceof Error ? Y.message : "Validation failed";
        }
    }
    async function Ie() {
      var be, Y, ze, Re, Ke;
      if (A.value = null, N.value = null, await O(), (be = A.value) != null && be.includes("already exists")) {
        A.value = null, _e.value = ((Y = M.value) == null ? void 0 : Y.trim()) || n.defaultPath, p.value = 2, Ce();
        return;
      }
      if (!A.value && !(R.value && ((ze = L.value) != null && ze.trim()) && (await le(), N.value))) {
        de.value = !0;
        try {
          await l({
            workspace_path: ((Re = M.value) == null ? void 0 : Re.trim()) || n.defaultPath,
            models_directory: R.value && ((Ke = L.value) == null ? void 0 : Ke.trim()) || null
          }), we.value = 0, Oe.value = Date.now();
          const Fe = setInterval(async () => {
            var Le;
            if (Oe.value && Date.now() - Oe.value > fM) {
              clearInterval(Fe), de.value = !1, A.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Ze = await r();
              if (we.value = 0, Ze.state === "idle" && de.value) {
                clearInterval(Fe), de.value = !1, A.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              ne.value = { progress: Ze.progress, message: Ze.message }, Ze.state === "complete" ? (clearInterval(Fe), de.value = !1, _e.value = ((Le = M.value) == null ? void 0 : Le.trim()) || n.defaultPath, p.value = 2, Ce()) : Ze.state === "error" && (clearInterval(Fe), de.value = !1, A.value = Ze.error || "Workspace creation failed");
            } catch (Ze) {
              we.value++, console.warn(`Polling failure ${we.value}/${In}:`, Ze), we.value >= In && (clearInterval(Fe), de.value = !1, A.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Fe) {
          de.value = !1, A.value = Fe instanceof Error ? Fe.message : "Failed to create workspace";
        }
      }
    }
    async function Me() {
      G.value = !0, q.value = null;
      try {
        const be = {
          name: ee.value.trim() || "my-new-env",
          python_version: J.value,
          comfyui_version: fe.value,
          torch_backend: oe.value,
          switch_after: H.value,
          workspace_path: _e.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(be)).status === "started") {
          Ne.value = 0, $e.value = Date.now();
          const ze = setInterval(async () => {
            if ($e.value && Date.now() - $e.value > Li) {
              clearInterval(ze), G.value = !1, q.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Re = await d();
              if (Ne.value = 0, Re.state === "idle" && G.value) {
                clearInterval(ze), G.value = !1, q.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (te.value = {
                progress: Re.progress ?? 0,
                message: Re.message,
                phase: Re.phase
              }, Re.state === "complete") {
                clearInterval(ze), G.value = !1;
                const Ke = Re.environment_name || be.name;
                H.value ? a("complete", Ke, _e.value) : (g.value = "landing", a("environment-created-no-switch", Ke));
              } else Re.state === "error" && (clearInterval(ze), G.value = !1, q.value = Re.error || "Environment creation failed");
            } catch (Re) {
              Ne.value++, console.warn(`Polling failure ${Ne.value}/${In}:`, Re), Ne.value >= In && (clearInterval(ze), G.value = !1, q.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (be) {
        G.value = !1, q.value = be instanceof Error ? be.message : "Unknown error";
      }
    }
    async function Ce() {
      ve.value = !0;
      try {
        se.value = await v();
      } catch (be) {
        console.error("Failed to load ComfyUI releases:", be);
      } finally {
        ve.value = !1;
      }
    }
    function X() {
      w.value && a("switch-environment", w.value, _e.value);
    }
    function W() {
      g.value === "create" || g.value === "import" ? g.value = "landing" : p.value === 2 && n.setupState === "no_workspace" && (p.value = 1);
    }
    function ye(be, Y) {
      C.value = !1, Y ? a("complete", be, _e.value) : (a("environment-created-no-switch", be), g.value = "landing");
    }
    function ke() {
    }
    dt(async () => {
      if (n.detectedModelsDir && (L.value = n.detectedModelsDir), n.workspacePath && (_e.value = n.workspacePath), p.value === 2) {
        Ce();
        const be = setTimeout(() => {
          E.value = !1;
        }, 3e3);
        await qe(), clearTimeout(be), E.value = !1;
      }
    });
    async function qe() {
      try {
        const be = await d();
        if (console.log("[ComfyGit] Create progress check:", be.state, be), be.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", be.environment_name), g.value = "create", G.value = !0, ee.value = be.environment_name || "my-new-env", te.value = {
            progress: be.progress ?? 0,
            message: be.message,
            phase: be.phase
          }, Be();
          return;
        }
      } catch (be) {
        console.log("[ComfyGit] Create progress check failed:", be);
      }
      try {
        const be = await f();
        console.log("[ComfyGit] Import progress check:", be.state, be), be.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", be.environment_name), I.value = {
          message: be.message || "Importing...",
          phase: be.phase || "",
          progress: be.progress ?? 0,
          environmentName: be.environment_name || ""
        }, $.value = !0, g.value = "import", C.value = !0);
      } catch (be) {
        console.log("[ComfyGit] Import progress check failed:", be);
      }
    }
    async function Be() {
      Ne.value = 0, $e.value = Date.now();
      let be = null;
      const Y = async () => {
        if ($e.value && Date.now() - $e.value > Li)
          return be && clearInterval(be), G.value = !1, q.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Re = await d();
          if (Ne.value = 0, Re.state === "idle" && G.value)
            return be && clearInterval(be), G.value = !1, q.value = "Environment creation was interrupted. Please try again.", !1;
          if (te.value = {
            progress: Re.progress ?? 0,
            message: Re.message,
            phase: Re.phase
          }, Re.state === "complete") {
            be && clearInterval(be), G.value = !1;
            const Ke = Re.environment_name || ee.value;
            return a("complete", Ke, _e.value), !1;
          } else if (Re.state === "error")
            return be && clearInterval(be), G.value = !1, q.value = Re.error || "Environment creation failed", !1;
          return !0;
        } catch (Re) {
          return Ne.value++, console.warn(`Polling failure ${Ne.value}/${In}:`, Re), Ne.value >= In ? (be && clearInterval(be), G.value = !1, q.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await Y() && (be = setInterval(async () => {
        !await Y() && be && clearInterval(be);
      }, 2e3));
    }
    return (be, Y) => (o(), i(F, null, [
      b(Mt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: Y[15] || (Y[15] = (ze) => be.$emit("close"))
      }, {
        header: h(() => [
          Y[20] || (Y[20] = s("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          s("div", TT, [
            b(Pc),
            Y[19] || (Y[19] = s("span", { class: "header-divider" }, null, -1)),
            ge.value ? (o(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: Y[0] || (Y[0] = (ze) => k.value = !0)
            }, [...Y[17] || (Y[17] = [
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
              onClick: Y[1] || (Y[1] = (ze) => be.$emit("close")),
              title: "Close"
            }, [...Y[18] || (Y[18] = [
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
          var ze;
          return [
            p.value === 1 ? (o(), i("div", MT, [
              Y[24] || (Y[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", PT, [
                Y[21] || (Y[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                At(s("input", {
                  "onUpdate:modelValue": Y[2] || (Y[2] = (Re) => M.value = Re),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, RT), [
                  [go, M.value]
                ]),
                A.value ? (o(), i("p", DT, m(A.value), 1)) : y("", !0)
              ]),
              s("div", NT, [
                s("label", LT, [
                  At(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": Y[3] || (Y[3] = (Re) => R.value = Re)
                  }, null, 512), [
                    [la, R.value]
                  ]),
                  Y[22] || (Y[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              R.value ? (o(), i("div", UT, [
                Y[23] || (Y[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                At(s("input", {
                  "onUpdate:modelValue": Y[4] || (Y[4] = (Re) => L.value = Re),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, OT), [
                  [go, L.value]
                ]),
                e.detectedModelsDir && !L.value ? (o(), i("p", AT, " Detected: " + m(e.detectedModelsDir), 1)) : y("", !0),
                V.value ? (o(), i("p", zT, " Did you mean: " + m(V.value), 1)) : y("", !0),
                N.value ? (o(), i("p", FT, m(N.value), 1)) : y("", !0),
                ae.value !== null && !N.value ? (o(), i("p", VT, " Found " + m(ae.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              de.value ? (o(), D(ia, {
                key: 1,
                progress: ne.value.progress,
                message: ne.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            p.value === 2 ? (o(), i("div", BT, [
              E.value ? (o(), i("div", WT, [...Y[25] || (Y[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (o(), i(F, { key: 1 }, [
                !n.cliInstalled && !S.value ? (o(), i("div", GT, [
                  s("div", jT, [
                    Y[27] || (Y[27] = s("span", { class: "cli-warning-icon" }, "!", -1)),
                    Y[28] || (Y[28] = s("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    s("button", {
                      class: "cli-warning-close",
                      onClick: Y[5] || (Y[5] = (Re) => S.value = !0),
                      title: "Dismiss"
                    }, [...Y[26] || (Y[26] = [
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
                  Y[29] || (Y[29] = s("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  Y[30] || (Y[30] = s("div", { class: "cli-warning-commands" }, [
                    s("code", null, "pipx install comfygit"),
                    s("span", { class: "cli-warning-or" }, "or"),
                    s("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                g.value === "landing" ? (o(), i("div", HT, [
                  Y[34] || (Y[34] = s("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  s("button", {
                    class: "landing-option",
                    onClick: Y[6] || (Y[6] = (Re) => g.value = "create")
                  }, [...Y[31] || (Y[31] = [
                    s("span", { class: "option-icon" }, "➕", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Create New Environment"),
                      s("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  s("button", {
                    class: "landing-option",
                    onClick: Y[7] || (Y[7] = (Re) => {
                      $.value = !1, g.value = "import";
                    })
                  }, [...Y[32] || (Y[32] = [
                    s("span", { class: "option-icon" }, "📦", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Import Environment"),
                      s("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (ze = n.existingEnvironments) != null && ze.length ? (o(), i(F, { key: 0 }, [
                    Y[33] || (Y[33] = s("div", { class: "landing-divider" }, [
                      s("span", null, "or switch to existing")
                    ], -1)),
                    s("div", qT, [
                      (o(!0), i(F, null, he(n.existingEnvironments, (Re) => (o(), i("label", {
                        key: Re,
                        class: Ve(["env-option", { selected: w.value === Re }])
                      }, [
                        At(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: Re,
                          "onUpdate:modelValue": Y[8] || (Y[8] = (Ke) => w.value = Ke)
                        }, null, 8, KT), [
                          [qo, w.value]
                        ]),
                        s("span", JT, m(Re), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : g.value === "create" ? (o(), i("div", QT, [
                  G.value ? (o(), i("div", rM, [
                    s("p", cM, [
                      Y[41] || (Y[41] = x(" Creating environment ", -1)),
                      s("strong", null, m(ee.value), 1),
                      Y[42] || (Y[42] = x("... ", -1))
                    ]),
                    b(ia, {
                      progress: te.value.progress,
                      message: te.value.message,
                      "current-phase": te.value.phase,
                      "show-steps": !0,
                      steps: Ee
                    }, null, 8, ["progress", "message", "current-phase"]),
                    Y[43] || (Y[43] = s("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (o(), i(F, { key: 0 }, [
                    Y[40] || (Y[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", YT, [
                      Y[35] || (Y[35] = s("label", { class: "form-label" }, "Environment Name", -1)),
                      At(s("input", {
                        "onUpdate:modelValue": Y[9] || (Y[9] = (Re) => ee.value = Re),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [go, ee.value]
                      ])
                    ]),
                    s("div", XT, [
                      Y[36] || (Y[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      At(s("select", {
                        "onUpdate:modelValue": Y[10] || (Y[10] = (Re) => J.value = Re),
                        class: "form-select"
                      }, [
                        (o(!0), i(F, null, he(lt(_c), (Re) => (o(), i("option", {
                          key: Re,
                          value: Re
                        }, m(Re), 9, ZT))), 128))
                      ], 512), [
                        [On, J.value]
                      ])
                    ]),
                    s("div", eM, [
                      Y[37] || (Y[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      At(s("select", {
                        "onUpdate:modelValue": Y[11] || (Y[11] = (Re) => fe.value = Re),
                        class: "form-select",
                        disabled: ve.value
                      }, [
                        (o(!0), i(F, null, he(se.value, (Re) => (o(), i("option", {
                          key: Re.tag_name,
                          value: Re.tag_name
                        }, m(Re.name), 9, sM))), 128))
                      ], 8, tM), [
                        [On, fe.value]
                      ])
                    ]),
                    s("div", nM, [
                      Y[38] || (Y[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      At(s("select", {
                        "onUpdate:modelValue": Y[12] || (Y[12] = (Re) => oe.value = Re),
                        class: "form-select"
                      }, [
                        (o(!0), i(F, null, he(lt(Dl), (Re) => (o(), i("option", {
                          key: Re,
                          value: Re
                        }, m(Re) + m(Re === "auto" ? " (detect GPU)" : ""), 9, oM))), 128))
                      ], 512), [
                        [On, oe.value]
                      ])
                    ]),
                    s("div", aM, [
                      s("label", lM, [
                        At(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": Y[13] || (Y[13] = (Re) => H.value = Re)
                        }, null, 512), [
                          [la, H.value]
                        ]),
                        Y[39] || (Y[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    q.value ? (o(), i("div", iM, m(q.value), 1)) : y("", !0)
                  ], 64))
                ])) : g.value === "import" ? (o(), i("div", uM, [
                  b(xc, {
                    "workspace-path": _e.value,
                    "resume-import": $.value,
                    "initial-progress": I.value ?? void 0,
                    onImportComplete: ye,
                    onImportStarted: Y[14] || (Y[14] = (Re) => C.value = !0),
                    onSourceCleared: ke
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          s("div", dM, [
            b(Rc),
            s("div", mM, [
              p.value === 1 ? (o(), D(De, {
                key: 0,
                variant: "primary",
                disabled: !Ae.value || de.value,
                onClick: Ie
              }, {
                default: h(() => [
                  x(m(de.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (o(), i(F, { key: 1 }, [
                !G.value && !C.value && (g.value !== "landing" || n.setupState === "no_workspace" && !_e.value) ? (o(), D(De, {
                  key: 0,
                  variant: "secondary",
                  onClick: W
                }, {
                  default: h(() => [...Y[44] || (Y[44] = [
                    x(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                g.value === "create" ? (o(), D(De, {
                  key: 1,
                  variant: "primary",
                  disabled: !pe.value || G.value,
                  onClick: Me
                }, {
                  default: h(() => [
                    x(m(G.value ? "Creating..." : H.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                g.value === "landing" && w.value ? (o(), D(De, {
                  key: 2,
                  variant: "primary",
                  onClick: X
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
      k.value ? (o(), D(ET, {
        key: 0,
        "workspace-path": T.value,
        onClose: Y[16] || (Y[16] = (ze) => k.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), pM = /* @__PURE__ */ Te(vM, [["__scopeId", "data-v-9a9aadc0"]]), gM = { class: "update-banner" }, hM = { class: "update-banner__left" }, yM = { class: "update-banner__title" }, wM = {
  key: 0,
  class: "update-banner__summary"
}, _M = { class: "update-banner__actions" }, kM = ["disabled"], bM = ["disabled"], $M = ["disabled"], CM = /* @__PURE__ */ Se({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: t }) {
    const n = t;
    return (a, l) => (o(), i("div", gM, [
      s("div", hM, [
        s("div", yM, " ComfyGit Manager v" + m(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (o(), i("div", wM, m(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      s("div", _M, [
        s("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => n("update"))
        }, m(e.updating ? "Updating…" : "Update"), 9, kM),
        e.info.release_url ? (o(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => n("release-notes"))
        }, " Release notes ", 8, bM)) : y("", !0),
        s("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => n("dismiss"))
        }, " Dismiss ", 8, $M)
      ])
    ]));
  }
}), xM = /* @__PURE__ */ Te(CM, [["__scopeId", "data-v-49562c5c"]]), Dc = "ComfyGit.UpdateNotice.DismissedVersion";
function SM() {
  try {
    return localStorage.getItem(Dc);
  } catch {
    return null;
  }
}
function IM(e) {
  try {
    localStorage.setItem(Dc, e);
  } catch {
  }
}
function EM(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : SM() !== e.latest_version;
}
const TM = { class: "comfygit-panel" }, MM = { class: "panel-header" }, PM = { class: "header-left" }, RM = {
  key: 0,
  class: "header-info"
}, DM = { class: "header-actions" }, NM = { class: "env-switcher" }, LM = { class: "env-switcher-header" }, UM = { class: "env-control-buttons" }, OM = {
  key: 0,
  class: "header-info"
}, AM = { class: "branch-name" }, zM = { class: "panel-main" }, FM = { class: "sidebar" }, VM = { class: "sidebar-content" }, BM = { class: "sidebar-section" }, WM = { class: "sidebar-section" }, GM = { class: "sidebar-section" }, jM = { class: "sidebar-footer" }, HM = { class: "content-area" }, qM = {
  key: 0,
  class: "error-message"
}, KM = {
  key: 1,
  class: "loading"
}, JM = { class: "dialog-content env-selector-dialog" }, QM = { class: "dialog-header" }, YM = { class: "dialog-body" }, XM = { class: "env-list" }, ZM = { class: "env-info" }, eP = { class: "env-name-row" }, tP = { class: "env-indicator" }, sP = { class: "env-name" }, nP = {
  key: 0,
  class: "env-branch"
}, oP = {
  key: 1,
  class: "current-label"
}, aP = { class: "env-stats" }, lP = ["onClick"], iP = { class: "toast-container" }, rP = { class: "toast-message" }, Ui = "ComfyGit.LastView", Oi = "ComfyGit.LastSection", cP = /* @__PURE__ */ Se({
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
    } = ft(), M = qh(), R = _(null), L = _([]), A = _([]), N = _([]), V = P(() => N.value.find((re) => re.is_current)), ae = _(null), ee = _(!1), J = _(!1), fe = _("remotes");
    function oe(re) {
      return re ? {
        manifest: "manifest",
        "debug-env": "env",
        "debug-workspace": "workspace",
        "debug-orchestrator": "orchestrator"
      }[re] ?? "manifest" : "manifest";
    }
    const H = _(oe(n.initialView)), q = _(null), _e = _(!1), se = _(1), ve = P(() => {
      var re;
      return ((re = q.value) == null ? void 0 : re.state) || "managed";
    }), de = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, G = P(() => {
      var re, j;
      return ((j = (re = q.value) == null ? void 0 : re.runtime_context) == null ? void 0 : j.capabilities) || de;
    }), ne = _(!1), te = _(null), Ee = _(null), we = _(!1), Oe = _(null), Ne = _(!1), $e = _(!1), Ae = P(() => !Ne.value && EM(Oe.value)), pe = _(null), ge = _(null), T = _(null), O = _(!1), le = _(!1), Ie = _(""), Me = _(null), Ce = _({ state: "idle", progress: 0, message: "" });
    let X = null, W = null;
    const ye = {
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
    }, ke = n.initialView ? ye[n.initialView] : null, qe = [
      "status",
      "workflows",
      "models-env",
      "nodes",
      "version-control",
      "environments",
      "model-index",
      "settings",
      "diagnostics"
    ], Be = ["this-env", "version-control", "workspace", "diagnostics"];
    function be() {
      try {
        const re = sessionStorage.getItem(Ui), j = sessionStorage.getItem(Oi), Qe = re === "branches" || re === "history" || re === "remotes" ? "version-control" : re === "manifest" || re === "debug-env" || re === "debug-workspace" ? "diagnostics" : re, st = j === "all-envs" ? "workspace" : j === "sharing" ? "version-control" : j;
        if (re && j && qe.includes(Qe) && Be.includes(st))
          return { view: Qe, section: st };
      } catch {
      }
      return null;
    }
    const Y = be(), ze = _((ke == null ? void 0 : ke.view) ?? (Y == null ? void 0 : Y.view) ?? "status"), Re = _((ke == null ? void 0 : ke.section) ?? (Y == null ? void 0 : Y.section) ?? "this-env");
    function Ke(re, j) {
      ze.value = re, Re.value = j;
      try {
        sessionStorage.setItem(Ui, re), sessionStorage.setItem(Oi, j);
      } catch {
      }
    }
    function Fe(re) {
      const Qe = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" }
      }[re];
      Qe && Ke(Qe.view, Qe.section);
    }
    function Le(re) {
      fe.value = re, Ke("version-control", "version-control");
    }
    function Ze(re) {
      H.value = re, Ke("diagnostics", "diagnostics");
    }
    function xt() {
      Le("branches");
    }
    function Ft() {
      a("close"), setTimeout(async () => {
        await ts("Comfy.OpenManagerDialog") || await ts("Comfy.Manager.CustomNodesManager.ShowCustomNodesMenu") || Q(["Extensions", "Manage extensions"]) || Q(["Manager"]) || console.warn("[ComfyGit] Extensions manager entrypoint not found");
      }, 100);
    }
    async function ts(re) {
      var st, ht;
      const j = window.app, Qe = [
        (st = j == null ? void 0 : j.extensionManager) == null ? void 0 : st.command,
        (ht = j == null ? void 0 : j.extensionManager) == null ? void 0 : ht.commands,
        j == null ? void 0 : j.command,
        j == null ? void 0 : j.commands
      ];
      for (const St of Qe)
        if (typeof (St == null ? void 0 : St.execute) == "function")
          try {
            return await St.execute(re), !0;
          } catch (Wt) {
            console.debug(`[ComfyGit] Command ${re} did not open Extensions manager`, Wt);
          }
      return !1;
    }
    function Q(re) {
      var st, ht, St;
      const j = re.map((Wt) => Wt.toLowerCase()), Qe = document.querySelectorAll('button, [role="button"]');
      for (const Wt of Qe) {
        const ps = Wt;
        if ([
          (st = ps.textContent) == null ? void 0 : st.trim(),
          (ht = ps.getAttribute("title")) == null ? void 0 : ht.trim(),
          (St = ps.getAttribute("aria-label")) == null ? void 0 : St.trim()
        ].filter(Boolean).map((en) => en.toLowerCase()).some((en) => j.includes(en)))
          return ps.click(), !0;
      }
      return !1;
    }
    const B = _(null), ue = _(!1), He = _(!1), We = _([]);
    let it = 0;
    function Ue(re, j = "info", Qe = 3e3) {
      const st = ++it;
      return We.value.push({ id: st, message: re, type: j }), Qe > 0 && setTimeout(() => {
        We.value = We.value.filter((ht) => ht.id !== st);
      }, Qe), st;
    }
    function ct(re) {
      We.value = We.value.filter((j) => j.id !== re);
    }
    function K(re, j) {
      Ue(re, j);
    }
    async function me() {
      Oe.value = null, Ne.value = !1;
      try {
        Oe.value = await I();
      } catch {
      }
    }
    function ce() {
      var j;
      const re = (j = Oe.value) == null ? void 0 : j.release_url;
      if (re)
        try {
          window.open(re, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function je() {
      var j;
      const re = (j = Oe.value) == null ? void 0 : j.latest_version;
      re && IM(re), Ne.value = !0;
    }
    async function Je() {
      if ($e.value) return;
      $e.value = !0;
      const re = Ue("Updating comfygit-manager...", "info", 0);
      try {
        const j = await E();
        if (ct(re), j.status !== "success") {
          if (Ue(j.message || "Update failed", "error"), j.manual_instructions) {
            const Qe = j.manual_instructions.split(`
`).map((st) => st.trim()).filter(Boolean);
            B.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: Qe,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                B.value = null;
              }
            };
          }
          return;
        }
        if (Ue(j.message || "Update complete", "success"), je(), j.restart_required) {
          Nt();
          try {
            await Ks("/v2/manager/reboot");
          } catch {
          }
        }
      } catch (j) {
        ct(re);
        const Qe = j instanceof Error ? j.message : "Update failed";
        Ue(Qe, "error");
      } finally {
        $e.value = !1;
      }
    }
    const Ye = P(() => {
      if (!R.value) return "neutral";
      const re = R.value.workflows, j = re.new.length > 0 || re.modified.length > 0 || re.deleted.length > 0 || R.value.has_changes;
      return R.value.comparison.is_synced ? j ? "warning" : "success" : "error";
    });
    P(() => R.value ? Ye.value === "success" ? "All synced" : Ye.value === "warning" ? "Uncommitted changes" : Ye.value === "error" ? "Not synced" : "" : "");
    async function et(re = {}) {
      ne.value = !0, te.value = null;
      try {
        const [j, Qe, st, ht] = await Promise.all([
          l(!0),
          r(),
          c(),
          p()
        ]);
        R.value = j, L.value = Qe.commits, A.value = st.branches, N.value = ht, a("statusUpdate", j), (re.refreshWorkflows ?? !0) && pe.value && await pe.value.loadWorkflows(!0);
      } catch (j) {
        te.value = j instanceof Error ? j.message : "Failed to load status", R.value = null, L.value = [], A.value = [];
      } finally {
        ne.value = !1;
      }
    }
    function ut(re) {
      Ee.value = re;
    }
    async function yt(re) {
      var Qe;
      Ee.value = null;
      const j = R.value && (R.value.workflows.new.length > 0 || R.value.workflows.modified.length > 0 || R.value.workflows.deleted.length > 0 || R.value.has_changes);
      B.value = {
        title: j ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: j ? "You have uncommitted changes that will be lost." : `Checkout commit ${re.short_hash || ((Qe = re.hash) == null ? void 0 : Qe.slice(0, 7))}?`,
        details: j ? Do() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: j ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: j,
        onConfirm: async () => {
          var St;
          B.value = null, Nt();
          const st = Ue(`Checking out ${re.short_hash || ((St = re.hash) == null ? void 0 : St.slice(0, 7))}...`, "info", 0), ht = await u(re.hash, j);
          ct(st), ht.status === "success" ? Ue("Restarting ComfyUI...", "success") : Ue(ht.message || "Checkout failed", "error");
        }
      };
    }
    async function kt(re) {
      const j = R.value && (R.value.workflows.new.length > 0 || R.value.workflows.modified.length > 0 || R.value.workflows.deleted.length > 0 || R.value.has_changes);
      B.value = {
        title: j ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: j ? "You have uncommitted changes." : `Switch to branch "${re}"?`,
        details: j ? Do() : void 0,
        warning: j ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: j ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          B.value = null, Nt();
          const Qe = Ue(`Switching to ${re}...`, "info", 0), st = await f(re, j);
          ct(Qe), st.status === "success" ? Ue("Restarting ComfyUI...", "success") : Ue(st.message || "Branch switch failed", "error");
        }
      };
    }
    async function pt(re) {
      const j = Ue(`Creating branch ${re}...`, "info", 0), Qe = await d(re);
      ct(j), Qe.status === "success" ? (Ue(`Branch "${re}" created`, "success"), await et()) : Ue(Qe.message || "Failed to create branch", "error");
    }
    async function Jt(re, j = !1) {
      const Qe = async (st) => {
        var St;
        const ht = Ue(`Deleting branch ${re}...`, "info", 0);
        try {
          const Wt = await v(re, st);
          ct(ht), Wt.status === "success" ? (Ue(`Branch "${re}" deleted`, "success"), await et()) : (St = Wt.message) != null && St.includes("not fully merged") ? B.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${re}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              B.value = null, await Qe(!0);
            }
          } : Ue(Wt.message || "Failed to delete branch", "error");
        } catch (Wt) {
          ct(ht);
          const ps = Wt instanceof Error ? Wt.message : "Failed to delete branch";
          ps.includes("not fully merged") ? B.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${re}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              B.value = null, await Qe(!0);
            }
          } : Ue(ps, "error");
        }
      };
      B.value = {
        title: "Delete Branch",
        message: `Delete branch "${re}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          B.value = null, await Qe(j);
        }
      };
    }
    async function us(re) {
      Ee.value = null;
      const j = prompt("Enter branch name:");
      if (j) {
        const Qe = Ue(`Creating branch ${j}...`, "info", 0), st = await d(j, re.hash);
        ct(Qe), st.status === "success" ? (Ue(`Branch "${j}" created from ${re.short_hash}`, "success"), await et()) : Ue(st.message || "Failed to create branch", "error");
      }
    }
    function Nt() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Z() {
      if (!G.value.can_restart_current) {
        Ue("Restart is not available in this runtime context.", "warning");
        return;
      }
      B.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          B.value = null, Nt(), Ue("Restarting environment...", "info");
          try {
            await Ks("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function U() {
      if (!G.value.can_stop_current) {
        Ue("Stop is not available in this runtime context.", "warning");
        return;
      }
      B.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          B.value = null, Ue("Stopping environment...", "info");
          try {
            await Ks("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function ie(re, j) {
      if (!G.value.can_switch_environment) {
        Ue("Environment switching is not available in this runtime context.", "warning");
        return;
      }
      we.value = !1, Ie.value = re, Me.value = j || null, O.value = !0;
    }
    async function Xe() {
      O.value = !1, le.value = !0, Nt(), Ce.value = {
        progress: 10,
        state: at(10),
        message: Dt(10)
      };
      try {
        await w(Ie.value, Me.value || void 0), bs(), $s();
      } catch (re) {
        Bt(), le.value = !1, Ue(`Failed to initiate switch: ${re instanceof Error ? re.message : "Unknown error"}`, "error"), Ce.value = { state: "idle", progress: 0, message: "" }, Me.value = null;
      }
    }
    function at(re) {
      return re >= 100 ? "complete" : re >= 80 ? "validating" : re >= 60 ? "starting" : re >= 30 ? "syncing" : "preparing";
    }
    function Dt(re) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[at(re)] || "";
    }
    function bs() {
      if (W) return;
      let re = 10;
      const j = 60, Qe = 5e3, st = 100, ht = (j - re) / (Qe / st);
      W = window.setInterval(() => {
        if (re += ht, re >= j && (re = j, Bt()), Ce.value.progress < j) {
          const St = Math.floor(re);
          Ce.value = {
            progress: St,
            state: at(St),
            message: Dt(St)
          };
        }
      }, st);
    }
    function Bt() {
      W && (clearInterval(W), W = null);
    }
    function $s() {
      X || (X = window.setInterval(async () => {
        try {
          let re = await M.getStatus();
          if ((!re || re.state === "idle") && (re = await g()), !re)
            return;
          const j = re.progress || 0;
          j >= 60 && Bt();
          const Qe = Math.max(j, Ce.value.progress), st = re.state && re.state !== "idle" && re.state !== "unknown", ht = st ? re.state : at(Qe), St = st && re.message || Dt(Qe);
          Ce.value = {
            state: ht,
            progress: Qe,
            message: St
          }, re.state === "complete" ? (Bt(), mt(), le.value = !1, Ue(`✓ Switched to ${Ie.value}`, "success"), await et(), Ie.value = "") : re.state === "rolled_back" ? (Bt(), mt(), le.value = !1, Ue("Switch failed, restored previous environment", "warning"), Ie.value = "") : re.state === "critical_failure" && (Bt(), mt(), le.value = !1, Ue(`Critical error during switch: ${re.message}`, "error"), Ie.value = "");
        } catch (re) {
          console.error("Failed to poll switch progress:", re);
        }
      }, 1e3));
    }
    function mt() {
      Bt(), X && (clearInterval(X), X = null);
    }
    function Zs() {
      var re;
      O.value = !1, Ie.value = "", (re = q.value) != null && re.state && q.value.state !== "managed" && (se.value = q.value.state === "no_workspace" ? 1 : 2, _e.value = !0);
    }
    async function Ut(re) {
      ue.value = !1, await et(), Ue(re.message, re.success ? "success" : "error");
    }
    async function Kn() {
      He.value = !1;
      const re = Ue("Syncing environment...", "info", 0);
      try {
        const j = await C("skip", !0);
        if (ct(re), j.status === "success") {
          const Qe = [];
          j.nodes_installed.length && Qe.push(`${j.nodes_installed.length} installed`), j.nodes_removed.length && Qe.push(`${j.nodes_removed.length} removed`);
          const st = Qe.length ? `: ${Qe.join(", ")}` : "";
          Ue(`✓ Environment synced${st}`, "success"), await et();
        } else {
          const Qe = j.errors.length ? j.errors.join("; ") : j.message;
          Ue(`Sync failed: ${Qe}`, "error");
        }
      } catch (j) {
        ct(re), Ue(`Sync error: ${j instanceof Error ? j.message : "Unknown error"}`, "error");
      }
    }
    async function vs(re) {
      var j;
      try {
        const Qe = await S(re);
        Qe.failed.length === 0 ? Ue(`✓ Repaired ${Qe.success} workflow${Qe.success === 1 ? "" : "s"}`, "success") : Ue(`Repaired ${Qe.success}, failed: ${Qe.failed.length}`, "warning"), await et();
      } catch (Qe) {
        Ue(`Repair failed: ${Qe instanceof Error ? Qe.message : "Unknown error"}`, "error");
      } finally {
        (j = T.value) == null || j.resetRepairingState();
      }
    }
    async function dn() {
      var j, Qe;
      const re = Ue("Repairing environment...", "info", 0);
      try {
        const st = await C("skip", !0);
        if (ct(re), st.status === "success") {
          const ht = [];
          st.nodes_installed.length && ht.push(`${st.nodes_installed.length} installed`), st.nodes_removed.length && ht.push(`${st.nodes_removed.length} removed`);
          const St = ht.length ? `: ${ht.join(", ")}` : "";
          Ue(`✓ Environment repaired${St}`, "success"), (j = T.value) == null || j.closeDetailModal(), await et();
        } else {
          const ht = st.errors.length ? st.errors.join(", ") : st.message || "Unknown error";
          Ue(`Repair failed: ${ht}`, "error");
        }
      } catch (st) {
        ct(re), Ue(`Repair error: ${st instanceof Error ? st.message : "Unknown error"}`, "error");
      } finally {
        (Qe = T.value) == null || Qe.resetRepairingEnvironmentState();
      }
    }
    async function ba(re, j) {
      Ue(`Environment '${re}' created`, "success"), await et(), ge.value && await ge.value.loadEnvironments(), j && G.value.can_switch_environment && await ie(re);
    }
    async function $a(re) {
      var j;
      if (!G.value.can_delete_environment) {
        Ue("Environment deletion is not available in this runtime context.", "warning");
        return;
      }
      if (((j = V.value) == null ? void 0 : j.name) === re) {
        Ue("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      B.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${re}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          B.value = null;
          try {
            const Qe = await k(re);
            Qe.status === "success" ? (Ue(`Environment "${re}" deleted`, "success"), await et(), ge.value && await ge.value.loadEnvironments()) : Ue(Qe.message || "Failed to delete environment", "error");
          } catch (Qe) {
            Ue(`Error deleting environment: ${Qe instanceof Error ? Qe.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function Ca(re, j) {
      _e.value = !1;
      try {
        q.value = await $();
      } catch {
      }
      G.value.can_switch_environment && await ie(re, j);
    }
    function xa() {
      _e.value = !1, a("close");
    }
    async function Sa(re, j) {
      await ie(re, j);
    }
    async function Ia(re) {
      ee.value = !1, await et(), await ie(re);
    }
    function Ea() {
      ae.value = null, ee.value = !0;
    }
    function Ta(re) {
      ae.value = re, J.value = !0;
    }
    function Ro() {
      J.value = !1, ae.value = null;
    }
    async function Ma(re) {
      q.value = await $(), console.log(`Environment '${re}' created. Available for switching.`);
    }
    function Pa() {
      if (!G.value.can_create_environment) {
        Ue("Environment creation is not available in this runtime context.", "warning");
        return;
      }
      Ke("environments", "workspace"), setTimeout(() => {
        var re;
        (re = ge.value) == null || re.openCreateModal();
      }, 100);
    }
    function Do() {
      if (!R.value) return [];
      const re = [], j = R.value.workflows;
      return j.new.length && re.push(`${j.new.length} new workflow(s)`), j.modified.length && re.push(`${j.modified.length} modified workflow(s)`), j.deleted.length && re.push(`${j.deleted.length} deleted workflow(s)`), re;
    }
    return dt(async () => {
      try {
        if (q.value = await $(), q.value.state === "no_workspace" && G.value.can_initialize_workspace) {
          _e.value = !0, se.value = 1;
          return;
        }
        if (q.value.state === "empty_workspace" && G.value.can_create_environment) {
          _e.value = !0, se.value = 2;
          return;
        }
        if (q.value.state === "unmanaged" && G.value.can_switch_environment) {
          _e.value = !0, se.value = 2;
          return;
        }
      } catch (re) {
        console.warn("Setup status check failed, proceeding normally:", re);
      }
      await Promise.all([
        et({ refreshWorkflows: !1 }),
        me()
      ]);
    }), (re, j) => {
      var Qe, st, ht, St, Wt, ps, Jn, en, z, xe, Ge, wt, Ot;
      return o(), i("div", TM, [
        s("div", MM, [
          s("div", PM, [
            j[27] || (j[27] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            R.value ? (o(), i("div", RM)) : y("", !0)
          ]),
          s("div", DM, [
            b(Pc),
            j[30] || (j[30] = s("span", { class: "header-divider" }, null, -1)),
            s("button", {
              class: Ve(["icon-btn", { spinning: ne.value }]),
              onClick: et,
              title: "Refresh"
            }, [...j[28] || (j[28] = [
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
              onClick: j[0] || (j[0] = (nt) => a("close")),
              title: "Close"
            }, [...j[29] || (j[29] = [
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
        Ae.value && Oe.value ? (o(), D(xM, {
          key: 0,
          info: Oe.value,
          updating: $e.value,
          onUpdate: Je,
          onDismiss: je,
          onReleaseNotes: ce
        }, null, 8, ["info", "updating"])) : y("", !0),
        s("div", NM, [
          s("div", LM, [
            j[31] || (j[31] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", UM, [
              G.value.can_restart_current ? (o(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Z
              }, " Restart ")) : y("", !0),
              G.value.can_stop_current ? (o(), i("button", {
                key: 1,
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: U
              }, " Stop ")) : y("", !0)
            ])
          ]),
          s("button", {
            class: "env-switcher-btn",
            onClick: j[1] || (j[1] = (nt) => Ke("environments", "workspace"))
          }, [
            R.value ? (o(), i("div", OM, [
              s("span", null, m(((Qe = V.value) == null ? void 0 : Qe.name) || ((st = R.value) == null ? void 0 : st.environment) || "Loading..."), 1),
              s("span", AM, "(" + m(R.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            j[32] || (j[32] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", zM, [
          s("div", FM, [
            s("div", VM, [
              s("div", BM, [
                j[33] || (j[33] = s("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                s("button", {
                  class: Ve(["sidebar-item", { active: ze.value === "status" && Re.value === "this-env" }]),
                  onClick: j[2] || (j[2] = (nt) => Ke("status", "this-env"))
                }, " STATUS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: ze.value === "workflows" }]),
                  onClick: j[3] || (j[3] = (nt) => Ke("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: ze.value === "models-env" }]),
                  onClick: j[4] || (j[4] = (nt) => Ke("models-env", "this-env"))
                }, " MODELS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: ze.value === "nodes" }]),
                  onClick: j[5] || (j[5] = (nt) => Ke("nodes", "this-env"))
                }, " NODES ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: ze.value === "version-control" }]),
                  onClick: j[6] || (j[6] = (nt) => Le("remotes"))
                }, " VERSION CONTROL ", 2)
              ]),
              j[36] || (j[36] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", WM, [
                j[34] || (j[34] = s("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                s("button", {
                  class: Ve(["sidebar-item", { active: ze.value === "environments" }]),
                  onClick: j[7] || (j[7] = (nt) => Ke("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: ze.value === "model-index" }]),
                  onClick: j[8] || (j[8] = (nt) => Ke("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: ze.value === "settings" }]),
                  onClick: j[9] || (j[9] = (nt) => Ke("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              j[37] || (j[37] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", GM, [
                j[35] || (j[35] = s("div", { class: "sidebar-section-title" }, "DIAGNOSTICS", -1)),
                s("button", {
                  class: Ve(["sidebar-item", { active: ze.value === "diagnostics" && H.value === "manifest" }]),
                  onClick: j[10] || (j[10] = (nt) => Ze("manifest"))
                }, " MANIFEST ", 2),
                s("button", {
                  class: Ve(["sidebar-item", { active: ze.value === "diagnostics" && H.value !== "manifest" }]),
                  onClick: j[11] || (j[11] = (nt) => Ze("env"))
                }, " LOGGING ", 2)
              ])
            ]),
            s("div", jM, [
              b(Rc)
            ])
          ]),
          s("div", HM, [
            te.value ? (o(), i("div", qM, m(te.value), 1)) : !R.value && ze.value === "status" ? (o(), i("div", KM, " Loading status... ")) : (o(), i(F, { key: 2 }, [
              ze.value === "status" ? (o(), D(Hh, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: T,
                status: R.value,
                "setup-state": ve.value,
                onSwitchBranch: xt,
                onCommitChanges: j[12] || (j[12] = (nt) => ue.value = !0),
                onSyncEnvironment: j[13] || (j[13] = (nt) => He.value = !0),
                onViewWorkflows: j[14] || (j[14] = (nt) => Ke("workflows", "this-env")),
                onViewHistory: j[15] || (j[15] = (nt) => Le("history")),
                onViewDebug: j[16] || (j[16] = (nt) => Ze("env")),
                onViewNodes: j[17] || (j[17] = (nt) => Ke("nodes", "this-env")),
                onRepairMissingModels: vs,
                onRepairEnvironment: dn,
                onStartSetup: j[18] || (j[18] = (nt) => _e.value = !0),
                onViewEnvironments: j[19] || (j[19] = (nt) => Ke("environments", "workspace")),
                onCreateEnvironment: Pa
              }, null, 8, ["status", "setup-state"])) : ze.value === "workflows" ? (o(), D(v2, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: pe,
                onRefresh: et
              }, null, 512)) : ze.value === "models-env" ? (o(), D(_$, {
                key: 2,
                onNavigate: Fe
              })) : ze.value === "version-control" ? (o(), D(C6, {
                key: 3,
                commits: L.value,
                "current-ref": (ht = R.value) == null ? void 0 : ht.branch,
                branches: A.value,
                current: ((St = R.value) == null ? void 0 : St.branch) || null,
                "initial-tab": fe.value,
                onSelect: ut,
                onCheckout: yt,
                onSwitch: kt,
                onCreate: pt,
                onDelete: Jt,
                onToast: K
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : ze.value === "nodes" ? (o(), D(mC, {
                key: 4,
                "version-mismatches": ((ps = (Wt = R.value) == null ? void 0 : Wt.comparison) == null ? void 0 : ps.version_mismatches) || [],
                onOpenNodeManager: Ft,
                onRepairEnvironment: dn,
                onToast: K
              }, null, 8, ["version-mismatches"])) : ze.value === "diagnostics" ? (o(), D(A6, {
                key: 5,
                "initial-tab": H.value
              }, null, 8, ["initial-tab"])) : ze.value === "environments" ? (o(), D(d3, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: ge,
                "can-create": G.value.can_create_environment,
                "can-switch": G.value.can_switch_environment,
                "can-delete": G.value.can_delete_environment,
                onSwitch: ie,
                onCreated: ba,
                onDelete: $a,
                onImport: Ea,
                onExport: Ta
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : ze.value === "model-index" ? (o(), D(P$, {
                key: 7,
                onRefresh: et
              })) : ze.value === "settings" ? (o(), D(zC, { key: 8 })) : y("", !0)
            ], 64))
          ])
        ]),
        Ee.value ? (o(), D(sE, {
          key: 1,
          commit: Ee.value,
          onClose: j[20] || (j[20] = (nt) => Ee.value = null),
          onCheckout: yt,
          onCreateBranch: us
        }, null, 8, ["commit"])) : y("", !0),
        B.value ? (o(), D(Rl, {
          key: 2,
          title: B.value.title,
          message: B.value.message,
          details: B.value.details,
          warning: B.value.warning,
          confirmLabel: B.value.confirmLabel,
          cancelLabel: B.value.cancelLabel,
          secondaryLabel: B.value.secondaryLabel,
          secondaryAction: B.value.secondaryAction,
          destructive: B.value.destructive,
          onConfirm: B.value.onConfirm,
          onCancel: j[21] || (j[21] = (nt) => B.value = null),
          onSecondary: B.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        ee.value ? (o(), D(Mt, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: j[22] || (j[22] = (nt) => ee.value = !1)
        }, {
          body: h(() => [
            b(Q5, {
              embedded: "",
              onImportCompleteSwitch: Ia
            })
          ]),
          _: 1
        })) : y("", !0),
        J.value ? (o(), D(Mt, {
          key: 4,
          title: ae.value ? `EXPORT ENVIRONMENT: ${ae.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "md",
          onClose: Ro
        }, {
          body: h(() => [
            b(tS, {
              embedded: "",
              "environment-name": ae.value,
              onClose: Ro
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : y("", !0),
        b(jE, {
          show: O.value,
          "from-environment": ((Jn = V.value) == null ? void 0 : Jn.name) || "unknown",
          "to-environment": Ie.value,
          onConfirm: Xe,
          onClose: Zs
        }, null, 8, ["show", "from-environment", "to-environment"]),
        ue.value && R.value ? (o(), D(Mc, {
          key: 5,
          status: R.value,
          "as-modal": !0,
          onClose: j[23] || (j[23] = (nt) => ue.value = !1),
          onCommitted: Ut
        }, null, 8, ["status"])) : y("", !0),
        He.value && R.value ? (o(), D(dT, {
          key: 6,
          show: He.value,
          "mismatch-details": {
            missing_nodes: R.value.comparison.missing_nodes,
            extra_nodes: R.value.comparison.extra_nodes
          },
          onConfirm: Kn,
          onClose: j[24] || (j[24] = (nt) => He.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        b(sT, {
          show: le.value,
          state: Ce.value.state,
          progress: Ce.value.progress,
          message: Ce.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        we.value ? (o(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: j[26] || (j[26] = bt((nt) => we.value = !1, ["self"]))
        }, [
          s("div", JM, [
            s("div", QM, [
              j[39] || (j[39] = s("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              s("button", {
                class: "icon-btn",
                onClick: j[25] || (j[25] = (nt) => we.value = !1)
              }, [...j[38] || (j[38] = [
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
            s("div", YM, [
              j[40] || (j[40] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", XM, [
                (o(!0), i(F, null, he(N.value, (nt) => (o(), i("div", {
                  key: nt.name,
                  class: Ve(["env-item", { current: nt.is_current }])
                }, [
                  s("div", ZM, [
                    s("div", eP, [
                      s("span", tP, m(nt.is_current ? "●" : "○"), 1),
                      s("span", sP, m(nt.name), 1),
                      nt.current_branch ? (o(), i("span", nP, "(" + m(nt.current_branch) + ")", 1)) : y("", !0),
                      nt.is_current ? (o(), i("span", oP, "CURRENT")) : y("", !0)
                    ]),
                    s("div", aP, m(nt.workflow_count) + " workflows • " + m(nt.node_count) + " nodes ", 1)
                  ]),
                  !nt.is_current && G.value.can_switch_environment ? (o(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Cs) => ie(nt.name)
                  }, " SWITCH ", 8, lP)) : y("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        _e.value ? (o(), D(pM, {
          key: 8,
          "default-path": ((en = q.value) == null ? void 0 : en.default_path) || "~/comfygit",
          "detected-models-dir": ((z = q.value) == null ? void 0 : z.detected_models_dir) || null,
          "initial-step": se.value,
          "existing-environments": ((xe = q.value) == null ? void 0 : xe.environments) || [],
          "cli-installed": ((Ge = q.value) == null ? void 0 : Ge.cli_installed) ?? !0,
          "setup-state": ((wt = q.value) == null ? void 0 : wt.state) || "no_workspace",
          "workspace-path": ((Ot = q.value) == null ? void 0 : Ot.workspace_path) || null,
          onComplete: Ca,
          onClose: xa,
          onSwitchEnvironment: Sa,
          onEnvironmentCreatedNoSwitch: Ma
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        s("div", iP, [
          b(cm, { name: "toast" }, {
            default: h(() => [
              (o(!0), i(F, null, he(We.value, (nt) => (o(), i("div", {
                key: nt.id,
                class: Ve(["toast", nt.type])
              }, [
                s("span", rP, m(nt.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), uP = /* @__PURE__ */ Te(cP, [["__scopeId", "data-v-93abae9b"]]), dP = { class: "item-header" }, mP = { class: "item-info" }, fP = { class: "filename" }, vP = { class: "metadata" }, pP = { class: "size" }, gP = {
  key: 0,
  class: "type"
}, hP = { class: "item-actions" }, yP = {
  key: 0,
  class: "progress-section"
}, wP = { class: "progress-bar" }, _P = { class: "progress-stats" }, kP = { class: "downloaded" }, bP = { class: "speed" }, $P = {
  key: 0,
  class: "eta"
}, CP = {
  key: 1,
  class: "status-msg paused"
}, xP = {
  key: 2,
  class: "status-msg queued"
}, SP = {
  key: 3,
  class: "status-msg completed"
}, IP = {
  key: 4,
  class: "status-msg failed"
}, EP = {
  key: 0,
  class: "retries"
}, TP = /* @__PURE__ */ Se({
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
      class: Ve(["download-item", `status-${e.item.status}`])
    }, [
      s("div", dP, [
        s("div", mP, [
          s("div", fP, m(e.item.filename), 1),
          s("div", vP, [
            s("span", pP, m(a(e.item.size)), 1),
            e.item.type ? (o(), i("span", gP, m(e.item.type), 1)) : y("", !0)
          ])
        ]),
        s("div", hP, [
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
      e.item.status === "downloading" ? (o(), i("div", yP, [
        s("div", wP, [
          s("div", {
            class: "progress-fill",
            style: Vt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", _P, [
          s("span", kP, m(a(e.item.downloaded)) + " / " + m(a(e.item.size)), 1),
          s("span", bP, m(l(e.item.speed)), 1),
          e.item.eta > 0 ? (o(), i("span", $P, m(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (o(), i("div", CP, " Paused - click Resume to download ")) : e.item.status === "queued" ? (o(), i("div", xP, " Waiting in queue... ")) : e.item.status === "completed" ? (o(), i("div", SP, " ✓ Downloaded ")) : e.item.status === "failed" ? (o(), i("div", IP, [
        x(" ✗ " + m(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (o(), i("span", EP, "(" + m(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Zn = /* @__PURE__ */ Te(TP, [["__scopeId", "data-v-2110df65"]]), MP = { class: "queue-title" }, PP = { class: "count" }, RP = { class: "queue-actions" }, DP = { class: "action-label" }, NP = {
  key: 0,
  class: "overall-progress"
}, LP = { class: "progress-bar" }, UP = {
  key: 0,
  class: "current-mini"
}, OP = { class: "filename" }, AP = { class: "speed" }, zP = {
  key: 1,
  class: "queue-content"
}, FP = {
  key: 0,
  class: "section"
}, VP = {
  key: 1,
  class: "section"
}, BP = { class: "section-header" }, WP = { class: "section-label paused" }, GP = { class: "items-list" }, jP = {
  key: 2,
  class: "section"
}, HP = { class: "section-header" }, qP = { class: "section-label" }, KP = { class: "items-list" }, JP = {
  key: 3,
  class: "section"
}, QP = { class: "section-header" }, YP = { class: "section-label" }, XP = { class: "items-list" }, ZP = {
  key: 4,
  class: "section"
}, eR = { class: "section-header" }, tR = { class: "section-label failed" }, sR = { class: "items-list" }, nR = /* @__PURE__ */ Se({
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
      (M, R) => {
        S && (clearTimeout(S), S = null);
        const L = M.active === 0 && M.failed === 0 && M.paused === 0 && M.completed > 0, A = R && (R.active > 0 || R.paused > 0);
        L && A && (S = setTimeout(() => {
          k(), S = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const $ = P(() => {
      var L;
      if (t.items.length === 0) return 0;
      const M = l.value.length, R = ((L = n.value) == null ? void 0 : L.progress) || 0;
      return Math.round((M + R / 100) / t.items.length * 100);
    });
    function I(M) {
      f(M);
    }
    function E(M) {
      return M === 0 ? "..." : `${(M / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (M, R) => (o(), D(ls, { to: "body" }, [
      lt(u) ? (o(), i("div", {
        key: 0,
        class: Ve(["model-download-queue", { minimized: !C.value }])
      }, [
        s("div", {
          class: "queue-header",
          onClick: R[0] || (R[0] = (L) => C.value = !C.value)
        }, [
          s("div", MP, [
            R[4] || (R[4] = s("span", { class: "icon" }, "↓", -1)),
            R[5] || (R[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", PP, "(" + m(lt(d)) + "/" + m(lt(t).items.length) + ")", 1)
          ]),
          s("div", RP, [
            s("span", DP, m(C.value ? "minimize" : "expand"), 1)
          ])
        ]),
        C.value ? (o(), i("div", zP, [
          lt(n) ? (o(), i("div", FP, [
            R[6] || (R[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            b(Zn, {
              item: lt(n),
              onCancel: R[1] || (R[1] = (L) => I(lt(n).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          lt(c).length > 0 ? (o(), i("div", VP, [
            s("div", BP, [
              s("span", WP, "Paused (" + m(lt(c).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: R[2] || (R[2] = //@ts-ignore
                (...L) => lt(w) && lt(w)(...L))
              }, "Resume All")
            ]),
            s("div", GP, [
              (o(!0), i(F, null, he(lt(c), (L) => (o(), D(Zn, {
                key: L.id,
                item: L,
                onResume: (A) => lt(p)(L.id),
                onRemove: (A) => lt(g)(L.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          lt(a).length > 0 ? (o(), i("div", jP, [
            s("div", HP, [
              s("span", qP, "Queued (" + m(lt(a).length) + ")", 1)
            ]),
            s("div", KP, [
              (o(!0), i(F, null, he(lt(a), (L) => (o(), D(Zn, {
                key: L.id,
                item: L,
                onCancel: (A) => I(L.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          lt(l).length > 0 ? (o(), i("div", JP, [
            s("div", QP, [
              s("span", YP, "Completed (" + m(lt(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: R[3] || (R[3] = //@ts-ignore
                (...L) => lt(k) && lt(k)(...L))
              }, "Clear")
            ]),
            s("div", XP, [
              (o(!0), i(F, null, he(lt(l).slice(0, 3), (L) => (o(), D(Zn, {
                key: L.id,
                item: L,
                onRemove: (A) => lt(g)(L.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          lt(r).length > 0 ? (o(), i("div", ZP, [
            s("div", eR, [
              s("span", tR, "Failed (" + m(lt(r).length) + ")", 1)
            ]),
            s("div", sR, [
              (o(!0), i(F, null, he(lt(r), (L) => (o(), D(Zn, {
                key: L.id,
                item: L,
                onRetry: (A) => lt(v)(L.id),
                onRemove: (A) => lt(g)(L.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (o(), i("div", NP, [
          s("div", LP, [
            s("div", {
              class: "progress-fill",
              style: Vt({ width: `${$.value}%` })
            }, null, 4)
          ]),
          lt(n) ? (o(), i("div", UP, [
            s("span", OP, m(lt(n).filename), 1),
            s("span", AP, m(E(lt(n).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), oR = /* @__PURE__ */ Te(nR, [["__scopeId", "data-v-3a3c9607"]]), aR = { class: "detail-header" }, lR = { class: "item-count" }, iR = { class: "resource-list" }, rR = { class: "item-info" }, cR = { class: "item-name" }, uR = {
  key: 0,
  class: "item-subtitle"
}, dR = {
  key: 0,
  class: "installing-badge"
}, mR = ["title"], fR = {
  key: 2,
  class: "installed-badge"
}, vR = {
  key: 3,
  class: "queued-badge"
}, pR = {
  key: 4,
  class: "action-buttons"
}, gR = {
  key: 1,
  class: "no-action"
}, hR = /* @__PURE__ */ Se({
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
    return (g, k) => (o(), D(Mt, {
      title: e.title,
      size: "md",
      onClose: k[2] || (k[2] = (C) => a("close"))
    }, {
      body: h(() => [
        s("div", aR, [
          s("span", lR, m(e.items.length) + " " + m(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (o(), D(De, {
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
        s("div", iR, [
          (o(!0), i(F, null, he(e.items, (C) => (o(), i("div", {
            key: C.id,
            class: "resource-item"
          }, [
            s("div", rR, [
              s("span", cR, m(C.name), 1),
              C.subtitle ? (o(), i("span", uR, m(C.subtitle), 1)) : y("", !0)
            ]),
            C.canAction ? (o(), i(F, { key: 0 }, [
              d(C) ? (o(), i("span", dR, "Installing...")) : v(C) ? (o(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(C)
              }, "Failed ⚠", 8, mR)) : f(C) ? (o(), i("span", fR, "Installed")) : u(C) ? (o(), i("span", vR, "Queued")) : (o(), i("div", pR, [
                (o(!0), i(F, null, he(w(C), (S) => (o(), D(De, {
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
            ], 64)) : (o(), i("span", gR, m(C.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        b(De, {
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
}), yR = /* @__PURE__ */ Te(hR, [["__scopeId", "data-v-ec7e9202"]]), wR = {
  key: 0,
  class: "loading-state"
}, _R = {
  key: 1,
  class: "analysis-results"
}, kR = {
  key: 0,
  class: "section"
}, bR = { class: "section-header" }, $R = { class: "section-title" }, CR = { class: "item-list" }, xR = { class: "package-info" }, SR = { class: "package-name" }, IR = { class: "node-count" }, ER = {
  key: 1,
  class: "installing-badge"
}, TR = {
  key: 2,
  class: "queued-badge"
}, MR = ["title"], PR = {
  key: 5,
  class: "installed-badge"
}, RR = {
  key: 1,
  class: "section"
}, DR = { class: "section-header" }, NR = { class: "section-title" }, LR = { class: "item-list" }, UR = { class: "node-type" }, OR = {
  key: 0,
  class: "overflow-note"
}, AR = {
  key: 2,
  class: "section"
}, zR = { class: "section-header" }, FR = { class: "section-title" }, VR = { class: "item-list" }, BR = { class: "node-type" }, WR = { class: "not-found" }, GR = {
  key: 0,
  class: "overflow-note"
}, jR = {
  key: 3,
  class: "section"
}, HR = { class: "section-header" }, qR = { class: "section-title" }, KR = { class: "item-list" }, JR = { class: "package-info community-info" }, QR = { class: "community-title-row" }, YR = { class: "package-name" }, XR = { class: "node-count" }, ZR = { class: "community-mapping-note" }, e7 = { key: 0 }, t7 = {
  key: 0,
  class: "community-actions"
}, s7 = {
  key: 1,
  class: "installing-badge"
}, n7 = {
  key: 2,
  class: "queued-badge"
}, o7 = ["title"], a7 = {
  key: 5,
  class: "installed-badge"
}, l7 = ["title"], i7 = {
  key: 1,
  class: "no-url"
}, r7 = {
  key: 4,
  class: "section"
}, c7 = { class: "section-header" }, u7 = { class: "section-title" }, d7 = { class: "item-list" }, m7 = { class: "model-info" }, f7 = { class: "model-name" }, v7 = {
  key: 1,
  class: "queued-badge"
}, p7 = {
  key: 1,
  class: "no-url"
}, g7 = { class: "dont-show-again" }, h7 = 3e4, y7 = /* @__PURE__ */ Se({
  __name: "MissingResourcesPopup",
  setup(e) {
    const t = _(!1), n = _(null), a = _(null), l = _(!1), r = _(/* @__PURE__ */ new Set()), c = _(/* @__PURE__ */ new Set()), u = _(/* @__PURE__ */ new Map()), d = _(/* @__PURE__ */ new Map()), f = _(/* @__PURE__ */ new Set()), v = _(!1), p = _(null), w = _(0), g = _(null), k = _(!1), C = _(!1), S = _(null), $ = _(null), I = _(/* @__PURE__ */ new Set()), E = _(/* @__PURE__ */ new Map()), M = _(/* @__PURE__ */ new Map()), { addToQueue: R } = qn(), { queueNodeInstall: L, previewNodeDependencyChanges: A } = ft(), N = P(() => {
      var K;
      return ((K = a.value) == null ? void 0 : K.package_aliases) || {};
    });
    function V(K) {
      if (!K) return null;
      const me = N.value;
      let ce = K;
      const je = /* @__PURE__ */ new Set();
      for (; me[ce] && !je.has(ce); )
        je.add(ce), ce = me[ce];
      return ce;
    }
    function ae(K, me) {
      return K instanceof Error && K.message ? K.message : typeof K == "string" && K.trim().length > 0 ? K : me;
    }
    function ee(K) {
      for (const [me, ce] of E.value.entries())
        ce === K && E.value.delete(me);
    }
    function J(K, me, ce) {
      var je, Je;
      u.value.delete(K), c.value.delete(K), d.value.set(K, me), console.warn("[ComfyGit] Package requires dependency review:", {
        packageId: K,
        reason: ((je = ce == null ? void 0 : ce.dependency_review) == null ? void 0 : je.reason) || ((Je = ce == null ? void 0 : ce.messages) == null ? void 0 : Je[0])
      });
    }
    async function fe(K) {
      const me = d.value.get(K);
      if (!(!me || de.value)) {
        k.value = !0, C.value = !0, S.value = null, $.value = null;
        try {
          const ce = await A(me);
          $.value = ce.preview, ce.preview.success || (S.value = ce.preview.error || "Unable to generate dependency preview");
        } catch (ce) {
          S.value = ae(ce, "Unable to generate dependency preview");
        } finally {
          C.value = !1;
        }
      }
    }
    function oe() {
      k.value = !1, C.value = !1, S.value = null, $.value = null;
    }
    function H(K) {
      if (!M.value.has(K)) return;
      const me = M.value.get(K);
      clearTimeout(me), M.value.delete(K);
    }
    function q() {
      for (const K of M.value.values())
        clearTimeout(K);
      M.value = /* @__PURE__ */ new Map();
    }
    function _e(K) {
      H(K);
      const me = setTimeout(() => {
        if (M.value.delete(K), !c.value.has(K)) return;
        ee(K), c.value.delete(K), p.value === K && (p.value = null), u.value.set(K, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", K);
      }, h7);
      M.value.set(K, me);
    }
    function se(K) {
      const me = `Cannot install "${K.title}" - package_id is missing`;
      u.value.set(K.item_id, me), n.value = me, console.warn("[ComfyGit] Community install requested without package_id:", K);
    }
    const ve = P(() => G.value.length > 0 || te.value.length > 0 || Ee.value.length > 0 || we.value.length > 0 || T.value.length > 0), de = P(() => E.value.size > 0 || c.value.size > 0 || !!p.value), G = P(() => {
      var ce, je;
      if (!((ce = a.value) != null && ce.nodes)) return [];
      const K = /* @__PURE__ */ new Map(), me = (a.value.nodes.resolved || []).filter((Je) => {
        var Ye;
        return !Je.is_installed && ((Ye = Je.package) == null ? void 0 : Ye.package_id);
      });
      for (const Je of me) {
        const Ye = V(Je.package.package_id);
        if (!Ye) continue;
        K.has(Ye) || K.set(Ye, {
          package_id: Ye,
          title: Je.package.title || Ye,
          node_count: 0,
          node_types: [],
          repository: Je.package.repository || null,
          latest_version: Je.package.latest_version || null
        });
        const et = K.get(Ye);
        et.node_count++, et.node_types.push(((je = Je.reference) == null ? void 0 : je.node_type) || Je.node_type);
      }
      return Array.from(K.values());
    }), ne = P(() => G.value.reduce((K, me) => K + me.node_count, 0)), te = P(() => {
      var K;
      return (K = a.value) != null && K.nodes ? (a.value.nodes.unresolved || []).map((me) => {
        var ce;
        return {
          node_type: ((ce = me.reference) == null ? void 0 : ce.node_type) || me.node_type
        };
      }) : [];
    }), Ee = P(() => {
      var me;
      if (!((me = a.value) != null && me.nodes)) return [];
      const K = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((ce) => {
        var Je;
        const je = ((Je = ce.reference) == null ? void 0 : Je.node_type) || ce.node_type;
        return {
          node_type: je,
          guidance: ce.guidance || K[je] || null
        };
      });
    }), we = P(() => {
      var ce, je, Je, Ye, et, ut, yt, kt;
      if (!((ce = a.value) != null && ce.nodes)) return [];
      const K = a.value.node_guidance || {}, me = /* @__PURE__ */ new Map();
      for (const pt of a.value.nodes.uninstallable || []) {
        const Jt = ((je = pt.reference) == null ? void 0 : je.node_type) || pt.node_type, us = V(((Je = pt.package) == null ? void 0 : Je.package_id) || null), Nt = us || `node:${Jt}`;
        me.has(Nt) || me.set(Nt, {
          item_id: Nt,
          node_type: Jt,
          title: ((Ye = pt.package) == null ? void 0 : Ye.title) || us || Jt,
          node_count: 0,
          package_id: us,
          repository: ((et = pt.package) == null ? void 0 : et.repository) || null,
          latest_version: ((ut = pt.package) == null ? void 0 : ut.latest_version) || null,
          guidance: pt.guidance || K[Jt] || null
        });
        const Z = me.get(Nt);
        Z.node_count++, Z.guidance || (Z.guidance = pt.guidance || K[Jt] || null), !Z.repository && ((yt = pt.package) != null && yt.repository) && (Z.repository = pt.package.repository), !Z.latest_version && ((kt = pt.package) != null && kt.latest_version) && (Z.latest_version = pt.package.latest_version);
      }
      return Array.from(me.values());
    }), Oe = P(() => we.value.filter((K) => !!ge(K))), Ne = P(() => we.value.length >= 5 ? we.value.slice(0, 4) : we.value), $e = P(() => Oe.value.length > 0 && Oe.value.every((K) => {
      const me = K.package_id;
      return r.value.has(me) || c.value.has(me) || u.value.has(me) || d.value.has(me);
    }));
    function Ae(K) {
      const me = [];
      return pe(K) && me.push({ key: "install_registry", label: "Install from Registry", variant: "secondary" }), K.repository && me.push({
        key: "install_git",
        label: "Install via Git",
        variant: pe(K) ? "ghost" : "secondary"
      }), me;
    }
    function pe(K) {
      return !!K.latest_version;
    }
    function ge(K) {
      return K.package_id ? pe(K) ? "registry" : K.repository ? "git" : null : null;
    }
    const T = P(() => {
      var Je;
      if (!((Je = a.value) != null && Je.models)) return [];
      const K = (a.value.models.resolved || []).filter(
        (Ye) => Ye.match_type === "download_intent" || Ye.match_type === "property_download_intent" || Ye.match_type === "not_found"
      ).map((Ye) => {
        var et, ut, yt, kt;
        return {
          filename: ((ut = (et = Ye.reference) == null ? void 0 : et.widget_value) == null ? void 0 : ut.split("/").pop()) || ((yt = Ye.reference) == null ? void 0 : yt.widget_value) || Ye.widget_value,
          widget_value: ((kt = Ye.reference) == null ? void 0 : kt.widget_value) || Ye.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: Ye.download_source || null,
          targetPath: Ye.target_path || null,
          canDownload: !!(Ye.download_source && Ye.target_path)
        };
      }), me = (a.value.models.unresolved || []).map((Ye) => {
        var et, ut, yt, kt;
        return {
          filename: ((ut = (et = Ye.reference) == null ? void 0 : et.widget_value) == null ? void 0 : ut.split("/").pop()) || ((yt = Ye.reference) == null ? void 0 : yt.widget_value) || Ye.widget_value,
          widget_value: ((kt = Ye.reference) == null ? void 0 : kt.widget_value) || Ye.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), ce = /* @__PURE__ */ new Map(), je = [];
      for (const Ye of K) {
        if (!Ye.url) {
          je.push(Ye);
          continue;
        }
        const et = `${Ye.filename}::${Ye.url}`, ut = ce.get(et);
        if (!ut) {
          ce.set(et, Ye);
          continue;
        }
        !ut.targetPath && Ye.targetPath && (ut.targetPath = Ye.targetPath), !ut.canDownload && Ye.canDownload && (ut.canDownload = Ye.canDownload);
      }
      return [...ce.values(), ...je, ...me];
    }), O = P(() => T.value.filter((K) => K.canDownload)), le = P(() => G.value.length >= 5 ? G.value.slice(0, 4) : G.value), Ie = P(() => T.value.length >= 5 ? T.value.slice(0, 4) : T.value), Me = P(() => G.value.length > 0 && G.value.every(
      (K) => r.value.has(K.package_id) || c.value.has(K.package_id) || u.value.has(K.package_id) || d.value.has(K.package_id)
    )), Ce = P(() => O.value.length > 0 && O.value.every((K) => f.value.has(K.url))), X = P(() => G.value.length > 0 || Oe.value.length > 0 || O.value.length > 0), W = P(() => {
      const K = (G.value.length === 0 || Me.value) && (Oe.value.length === 0 || $e.value), me = O.value.length === 0 || Ce.value;
      return K && me;
    }), ye = P(() => g.value === "models" ? `Missing Models (${T.value.length})` : g.value === "packages" ? `Missing Custom Nodes (${ne.value})` : g.value === "community" ? `Community-Mapped Packages (${we.value.length})` : ""), ke = P(() => g.value === "models" ? T.value.map((K) => ({
      id: K.url || K.widget_value,
      name: K.filename,
      canAction: K.canDownload,
      actionDisabledReason: K.canDownload ? void 0 : "Manual download required"
    })) : g.value === "packages" ? G.value.map((K) => ({
      id: K.package_id,
      name: K.title,
      subtitle: `(${K.node_count} ${K.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : g.value === "community" ? we.value.map((K) => ({
      id: K.package_id || K.item_id,
      name: K.title,
      subtitle: `(${K.node_count} ${K.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!ge(K),
      actionDisabledReason: ge(K) ? void 0 : "Manual setup required",
      actions: Ae(K)
    })) : []);
    function qe(K, me) {
      if (g.value === "models") {
        const ce = T.value.find((je) => je.url === K.id || je.widget_value === K.id);
        ce && Re(ce);
      } else if (g.value === "packages") {
        const ce = G.value.find((je) => je.package_id === K.id);
        ce && be(ce);
      } else if (g.value === "community") {
        const ce = we.value.find((Je) => (Je.package_id || Je.item_id) === K.id);
        if (!ce) return;
        if (!ce.package_id) {
          se({ item_id: ce.item_id, title: ce.title });
          return;
        }
        const je = me === "install_git" ? "git" : "registry";
        if (je === "registry" && !pe(ce)) {
          se({ item_id: ce.item_id, title: ce.title });
          return;
        }
        Y(ce, je);
      }
    }
    function Be() {
      g.value === "models" ? Le() : g.value === "packages" ? Ke() : g.value === "community" && Fe();
    }
    async function be(K) {
      return ze(K.package_id, K.latest_version, "registry");
    }
    async function Y(K, me) {
      return K.package_id ? me === "registry" && !pe(K) ? (u.value.set(K.package_id, "No installable registry version is available. Use Git install if a repository is available."), !1) : me === "git" && !K.repository ? (u.value.set(K.package_id, "No Git repository is available for this community mapping."), !1) : ze(K.package_id, K.latest_version, me, K.repository) : (se({ item_id: K.item_id, title: K.title }), !1);
    }
    async function ze(K, me, ce, je) {
      const Je = V(K) || K, Ye = me || "latest";
      if (r.value.has(Je) || c.value.has(Je) || u.value.has(Je) || d.value.has(Je))
        return !0;
      Ue(), p.value = Je;
      let et = null;
      try {
        const ut = {
          id: Je,
          version: Ye,
          selected_version: Ye,
          mode: "remote",
          channel: "default"
        };
        ce === "git" && je && (ut.repository = je, ut.install_source = "git");
        const { ui_id: yt, status: kt } = await L(ut, {
          beforeQueueStart: (pt) => {
            et = pt, E.value.set(pt, Je), c.value.add(Je), _e(Je), console.log("[ComfyGit] Registered pending install:", {
              ui_id: pt,
              packageId: Je,
              pendingInstalls: Array.from(E.value.entries())
            });
          }
        });
        return (kt == null ? void 0 : kt.status_str) === "dependency_review_required" ? (et && E.value.delete(et), ee(Je), H(Je), p.value === Je && (p.value = null), J(Je, ut, kt), !1) : (et || (et = yt, E.value.set(yt, Je), c.value.add(Je), _e(Je), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: yt,
          packageId: Je,
          pendingInstalls: Array.from(E.value.entries())
        })), !0);
      } catch (ut) {
        const yt = ae(ut, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", ut), et && E.value.delete(et), ee(Je), H(Je), c.value.delete(Je), d.value.delete(Je), u.value.set(Je, yt), !1;
      } finally {
        p.value = null;
      }
    }
    function Re(K) {
      !K.url || !K.targetPath || f.value.has(K.url) || (R([{
        workflow: "unsaved",
        filename: K.filename,
        url: K.url,
        targetPath: K.targetPath
      }]), f.value.add(K.url));
    }
    async function Ke() {
      const K = { attempted: 0, failed: 0 };
      for (const me of G.value)
        !r.value.has(me.package_id) && !c.value.has(me.package_id) && !u.value.has(me.package_id) && !d.value.has(me.package_id) && (K.attempted++, await be(me) || K.failed++);
      return K;
    }
    async function Fe() {
      const K = { attempted: 0, failed: 0 };
      for (const me of Oe.value) {
        const ce = me.package_id;
        if (!r.value.has(ce) && !c.value.has(ce) && !u.value.has(ce) && !d.value.has(ce)) {
          K.attempted++;
          const je = ge(me);
          (je ? await Y(me, je) : !1) || K.failed++;
        }
      }
      return K;
    }
    function Le() {
      const K = O.value.filter(
        (me) => !f.value.has(me.url)
      );
      if (K.length === 0) return 0;
      R(K.map((me) => ({
        workflow: "unsaved",
        filename: me.filename,
        url: me.url,
        targetPath: me.targetPath
      })));
      for (const me of K)
        f.value.add(me.url);
      return K.length;
    }
    async function Ze() {
      const K = await Ke(), me = await Fe();
      Le();
      const ce = K.attempted + me.attempted, je = K.failed + me.failed;
      if (ce > 0 && je > 0) {
        const Je = ce - je;
        n.value = `${Je} of ${ce} installs queued, ${je} failed`;
      }
    }
    function xt() {
      v.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Ft(K) {
      var Je, Ye;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const me = K == null ? void 0 : K.id;
      if (me && I.value.has(me)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${me} this session`);
        return;
      }
      const ce = window.app, je = (Je = ce == null ? void 0 : ce.extensionManager) == null ? void 0 : Je.workflow;
      if (je) {
        let yt = !1;
        for (let kt = 0; kt < 20; kt++) {
          const pt = je.activeWorkflow;
          if (!pt) {
            await new Promise((Nt) => setTimeout(Nt, 50));
            continue;
          }
          const Jt = (Ye = pt.activeState) == null ? void 0 : Ye.id;
          if (!(me && Jt === me)) {
            kt < 19 && await new Promise((Nt) => setTimeout(Nt, 50));
            continue;
          }
          if (yt = !0, pt.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${pt.filename}`), me && I.value.add(me);
            return;
          }
          break;
        }
        yt || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      t.value = !0, n.value = null, q(), r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Map(), f.value = /* @__PURE__ */ new Set(), E.value = /* @__PURE__ */ new Map(), v.value = !1, w.value = 0;
      try {
        const et = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: K, name: "unsaved" })
        });
        if (!et.ok) {
          const ut = await et.json();
          throw new Error(ut.error || "Failed to analyze workflow");
        }
        a.value = await et.json(), ve.value && (l.value = !0, me && I.value.add(me));
      } catch (et) {
        console.error("[ComfyGit] Failed to analyze workflow:", et);
      } finally {
        t.value = !1;
      }
    }
    function ts() {
      q(), l.value = !1, a.value = null;
    }
    function Q(K) {
      const { workflow: me } = K.detail;
      me && Ft(me);
    }
    function B(K) {
      var je;
      const me = (je = K.detail) == null ? void 0 : je.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: me,
        pendingInstalls: Array.from(E.value.entries()),
        eventDetail: K.detail
      });
      const ce = E.value.get(me);
      ce ? (H(ce), p.value = ce, console.log("[ComfyGit] Installing package:", ce)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", me);
    }
    function ue(K) {
      var Je, Ye, et, ut, yt, kt, pt, Jt, us, Nt, Z;
      const me = (Je = K.detail) == null ? void 0 : Je.ui_id, ce = (et = (Ye = K.detail) == null ? void 0 : Ye.status) == null ? void 0 : et.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: me,
        status: ce,
        pendingInstalls: Array.from(E.value.entries()),
        eventDetail: K.detail
      });
      const je = E.value.get(me);
      if (je) {
        if (H(je), E.value.delete(me), c.value.delete(je), p.value === je && (p.value = null), ce === "success")
          r.value.add(je), w.value++, console.log("[ComfyGit] Package installed successfully:", je);
        else if (ce === "dependency_review_required") {
          const U = ((yt = (ut = K.detail) == null ? void 0 : ut.task) == null ? void 0 : yt.params) || ((kt = K.detail) == null ? void 0 : kt.params);
          U != null && U.id ? J(je, U, (pt = K.detail) == null ? void 0 : pt.status) : u.value.set(je, "Dependency review required");
        } else {
          const U = ((Nt = (us = (Jt = K.detail) == null ? void 0 : Jt.status) == null ? void 0 : us.messages) == null ? void 0 : Nt[0]) || ((Z = K.detail) == null ? void 0 : Z.result) || "Unknown error";
          u.value.set(je, U), console.error("[ComfyGit] Package install failed:", je, U);
        }
        E.value.size === 0 && w.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", w.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: w.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", me);
    }
    let He = null;
    function We() {
      return He || (He = Hn()), He;
    }
    let it = !1;
    function Ue() {
      if (it) return !0;
      const K = We();
      return K ? (K.addEventListener("cm-task-started", B), K.addEventListener("cm-task-completed", ue), K.addEventListener("comfygit:workflow-changed", ct), it = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function ct(K) {
      const { change_type: me } = K.detail;
      (me === "created" || me === "modified") && l.value && (q(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return dt(() => {
      window.addEventListener("comfygit:workflow-loaded", Q);
    }), Gn(() => {
      if (q(), window.removeEventListener("comfygit:workflow-loaded", Q), it) {
        const K = We();
        K && (K.removeEventListener("cm-task-started", B), K.removeEventListener("cm-task-completed", ue), K.removeEventListener("comfygit:workflow-changed", ct)), it = !1;
      }
    }), (K, me) => (o(), i(F, null, [
      l.value ? (o(), D(Mt, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: t.value,
        error: n.value || void 0,
        onClose: ts
      }, {
        body: h(() => [
          t.value ? (o(), i("div", wR, [...me[5] || (me[5] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && ve.value ? (o(), i("div", _R, [
            G.value.length > 0 ? (o(), i("div", kR, [
              s("div", bR, [
                s("span", $R, "Missing Custom Nodes (" + m(ne.value) + ")", 1),
                G.value.length > 1 ? (o(), D(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: Me.value,
                  onClick: Ke
                }, {
                  default: h(() => [
                    x(m(Me.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", CR, [
                (o(!0), i(F, null, he(le.value, (ce) => (o(), i("div", {
                  key: ce.package_id,
                  class: "package-item"
                }, [
                  s("div", xR, [
                    s("span", SR, m(ce.title), 1),
                    s("span", IR, "(" + m(ce.node_count) + " " + m(ce.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(ce.package_id) && !c.value.has(ce.package_id) && !u.value.has(ce.package_id) && !d.value.has(ce.package_id) ? (o(), D(De, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: p.value === ce.package_id,
                    onClick: (je) => be(ce)
                  }, {
                    default: h(() => [
                      x(m(p.value === ce.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : p.value === ce.package_id ? (o(), i("span", ER, "Installing...")) : c.value.has(ce.package_id) ? (o(), i("span", TR, "Queued")) : u.value.has(ce.package_id) ? (o(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(ce.package_id)
                  }, "Failed ⚠", 8, MR)) : d.value.has(ce.package_id) ? (o(), D(De, {
                    key: 4,
                    size: "sm",
                    variant: "secondary",
                    disabled: de.value,
                    onClick: (je) => fe(ce.package_id)
                  }, {
                    default: h(() => [...me[6] || (me[6] = [
                      x(" Needs Review ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled", "onClick"])) : (o(), i("span", PR, "Installed"))
                ]))), 128)),
                G.value.length >= 5 ? (o(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: me[0] || (me[0] = (ce) => g.value = "packages")
                }, [
                  s("span", null, "Show all " + m(G.value.length) + " packages...", 1),
                  me[7] || (me[7] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            te.value.length > 0 ? (o(), i("div", RR, [
              s("div", DR, [
                s("span", NR, "Unknown Nodes (" + m(te.value.length) + ")", 1)
              ]),
              s("div", LR, [
                (o(!0), i(F, null, he(te.value.slice(0, 5), (ce) => (o(), i("div", {
                  key: ce.node_type,
                  class: "item"
                }, [
                  s("code", UR, m(ce.node_type), 1),
                  me[8] || (me[8] = s("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                te.value.length > 5 ? (o(), i("div", OR, " ...and " + m(te.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            Ee.value.length > 0 ? (o(), i("div", AR, [
              s("div", zR, [
                s("span", FR, "Requires Newer ComfyUI (" + m(Ee.value.length) + ")", 1)
              ]),
              s("div", VR, [
                (o(!0), i(F, null, he(Ee.value.slice(0, 5), (ce) => (o(), i("div", {
                  key: `vg-${ce.node_type}`,
                  class: "item"
                }, [
                  s("code", BR, m(ce.node_type), 1),
                  s("span", WR, m(ce.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                Ee.value.length > 5 ? (o(), i("div", GR, " ...and " + m(Ee.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            we.value.length > 0 ? (o(), i("div", jR, [
              s("div", HR, [
                s("span", qR, "Community-Mapped Packages (" + m(we.value.length) + ")", 1),
                Oe.value.length > 1 ? (o(), D(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: $e.value,
                  onClick: Fe
                }, {
                  default: h(() => [
                    x(m($e.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", KR, [
                (o(!0), i(F, null, he(Ne.value, (ce) => (o(), i("div", {
                  key: `community-${ce.item_id}`,
                  class: "package-item"
                }, [
                  s("div", JR, [
                    s("div", QR, [
                      s("span", YR, m(ce.title), 1),
                      s("span", XR, "(" + m(ce.node_count) + " " + m(ce.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    s("div", ZR, [
                      me[9] || (me[9] = x(" Found via community mapping — registry metadata may be incomplete", -1)),
                      ce.guidance ? (o(), i("span", e7, ". " + m(ce.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  ce.package_id ? (o(), i(F, { key: 0 }, [
                    !r.value.has(ce.package_id) && !c.value.has(ce.package_id) && !u.value.has(ce.package_id) && !d.value.has(ce.package_id) ? (o(), i("div", t7, [
                      pe(ce) ? (o(), D(De, {
                        key: 0,
                        size: "sm",
                        variant: "secondary",
                        disabled: p.value === ce.package_id,
                        onClick: (je) => Y(ce, "registry")
                      }, {
                        default: h(() => [
                          x(m(p.value === ce.package_id ? "Queueing..." : "Install from Registry"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"])) : y("", !0),
                      ce.repository ? (o(), D(De, {
                        key: 1,
                        size: "sm",
                        variant: pe(ce) ? "ghost" : "secondary",
                        disabled: p.value === ce.package_id,
                        onClick: (je) => Y(ce, "git")
                      }, {
                        default: h(() => [...me[10] || (me[10] = [
                          x(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["variant", "disabled", "onClick"])) : y("", !0)
                    ])) : p.value === ce.package_id ? (o(), i("span", s7, "Installing...")) : c.value.has(ce.package_id) ? (o(), i("span", n7, "Queued")) : u.value.has(ce.package_id) ? (o(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get(ce.package_id)
                    }, "Failed ⚠", 8, o7)) : d.value.has(ce.package_id) ? (o(), D(De, {
                      key: 4,
                      size: "sm",
                      variant: "secondary",
                      disabled: de.value,
                      onClick: (je) => fe(ce.package_id)
                    }, {
                      default: h(() => [...me[11] || (me[11] = [
                        x(" Needs Review ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : (o(), i("span", a7, "Installed"))
                  ], 64)) : (o(), i(F, { key: 1 }, [
                    u.value.has(ce.item_id) ? (o(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: u.value.get(ce.item_id)
                    }, "Failed ⚠", 8, l7)) : (o(), i("span", i7, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                we.value.length >= 5 ? (o(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: me[1] || (me[1] = (ce) => g.value = "community")
                }, [
                  s("span", null, "Show all " + m(we.value.length) + " packages...", 1),
                  me[12] || (me[12] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            T.value.length > 0 ? (o(), i("div", r7, [
              s("div", c7, [
                s("span", u7, "Missing Models (" + m(T.value.length) + ")", 1),
                O.value.length > 1 ? (o(), D(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: Ce.value,
                  onClick: Le
                }, {
                  default: h(() => [
                    x(m(Ce.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", d7, [
                (o(!0), i(F, null, he(Ie.value, (ce) => (o(), i("div", {
                  key: ce.widget_value,
                  class: "model-item"
                }, [
                  s("div", m7, [
                    s("span", f7, m(ce.filename), 1)
                  ]),
                  ce.canDownload ? (o(), i(F, { key: 0 }, [
                    f.value.has(ce.url) ? (o(), i("span", v7, "Queued")) : (o(), D(De, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (je) => Re(ce)
                    }, {
                      default: h(() => [...me[13] || (me[13] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (o(), i("span", p7, "Manual download required"))
                ]))), 128)),
                T.value.length >= 5 ? (o(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: me[2] || (me[2] = (ce) => g.value = "models")
                }, [
                  s("span", null, "Show all " + m(T.value.length) + " models...", 1),
                  me[14] || (me[14] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            s("div", g7, [
              b(ra, {
                modelValue: v.value,
                "onUpdate:modelValue": [
                  me[3] || (me[3] = (ce) => v.value = ce),
                  xt
                ]
              }, {
                default: h(() => [...me[15] || (me[15] = [
                  x(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : y("", !0)
        ]),
        footer: h(() => [
          b(De, {
            variant: "secondary",
            onClick: ts
          }, {
            default: h(() => [...me[16] || (me[16] = [
              x("Dismiss", -1)
            ])]),
            _: 1
          }),
          X.value ? (o(), D(De, {
            key: 0,
            variant: "primary",
            disabled: W.value,
            onClick: Ze
          }, {
            default: h(() => [
              x(m(W.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      g.value ? (o(), D(yR, {
        key: 1,
        title: ye.value,
        items: ke.value,
        "item-type": g.value,
        "queued-items": g.value === "models" ? f.value : c.value,
        "installed-items": g.value === "models" ? void 0 : r.value,
        "failed-items": g.value === "models" ? void 0 : u.value,
        "installing-item": g.value === "models" ? void 0 : p.value,
        onClose: me[4] || (me[4] = (ce) => g.value = null),
        onAction: qe,
        onBulkAction: Be
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0),
      k.value ? (o(), D(pc, {
        key: 2,
        loading: C.value,
        error: S.value,
        preview: $.value,
        onClose: oe
      }, null, 8, ["loading", "error", "preview"])) : y("", !0)
    ], 64));
  }
}), w7 = /* @__PURE__ */ Te(y7, [["__scopeId", "data-v-3ce26601"]]), _7 = {
  key: 0,
  class: "io-mapping-root"
}, k7 = { class: "io-mapping-visual-layer" }, b7 = { class: "io-mapping-header" }, $7 = { class: "io-mapping-header-main" }, C7 = { class: "io-mapping-subtitle" }, x7 = {
  key: 0,
  class: "io-mapping-hover-summary"
}, S7 = { class: "io-mapping-header-actions" }, I7 = { class: "io-mapping-sidebar" }, E7 = { class: "io-mapping-sidebar-scroll" }, T7 = {
  key: 0,
  class: "io-state-block"
}, M7 = {
  key: 1,
  class: "io-state-block io-state-error"
}, P7 = { class: "contract-meta-section" }, R7 = { class: "contract-meta-toggle-icon" }, D7 = {
  key: 0,
  class: "contract-meta-body"
}, N7 = { class: "contract-summary" }, L7 = { class: "summary-pill" }, U7 = { class: "summary-pill" }, O7 = { class: "summary-pill" }, A7 = { class: "mapping-section" }, z7 = { class: "section-header" }, F7 = {
  key: 0,
  class: "empty-message"
}, V7 = ["onClick"], B7 = { class: "item-card-title" }, W7 = { class: "item-card-meta" }, G7 = { class: "item-card-summary" }, j7 = { key: 0 }, H7 = { class: "mapping-section" }, q7 = { class: "section-header" }, K7 = {
  key: 0,
  class: "empty-message"
}, J7 = ["onClick"], Q7 = { class: "item-card-title" }, Y7 = { class: "item-card-meta" }, X7 = { class: "item-card-summary" }, Z7 = { class: "io-mapping-footer" }, eD = { class: "io-mapping-footer-left" }, tD = { class: "io-mapping-footer-right" }, sD = /* @__PURE__ */ Se({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const t = e, { getWorkflowContract: n, saveWorkflowContract: a, deleteWorkflowContract: l } = ft(), r = _(!1), c = _(""), u = _(!1), d = _(!1), f = _(!1), v = _(null), p = _(null), w = _(null), g = _(!1), k = _(!1), C = _(null), S = _(null), $ = _(0), I = _(null), E = _(null);
    let M = null;
    const R = [
      "string",
      "integer",
      "number",
      "boolean",
      "enum",
      "image",
      "video",
      "audio",
      "file"
    ], L = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], A = P(() => {
      var Q;
      return ((Q = p.value) == null ? void 0 : Q.contract_summary.has_contract) === !0;
    }), N = P(() => {
      if (!w.value)
        return { inputs: [], outputs: [] };
      const Q = w.value.default_contract || "default";
      return w.value.contracts[Q] || (w.value.contracts[Q] = { inputs: [], outputs: [] }), w.value.contracts[Q];
    }), V = P(() => {
      var B;
      const Q = ((B = p.value) == null ? void 0 : B.contract_summary.status) ?? "none";
      return Q === "valid" ? "Valid Contract" : Q === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function ae(Q) {
      return Q ? JSON.parse(JSON.stringify(Q)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function ee(Q) {
      return Q === "integer" || Q === "number";
    }
    function J(Q) {
      return Q === "enum";
    }
    function fe(Q) {
      return Q == null ? "" : String(Q);
    }
    function oe(Q) {
      const B = Q.trim();
      if (!B) return;
      const ue = Number(B);
      return Number.isFinite(ue) ? ue : void 0;
    }
    function H(Q) {
      return (Q || []).join(`
`);
    }
    function q(Q) {
      return Q.split(/[\n,]/).map((B) => B.trim()).filter(Boolean);
    }
    function _e(Q) {
      return typeof Q == "string" ? Q.length > 24 ? `${Q.slice(0, 24)}...` : Q : String(Q);
    }
    function se(Q) {
      return Q == null ? "" : String(Q);
    }
    function ve(Q) {
      var ue;
      const B = (ue = Q == null ? void 0 : Q.options) == null ? void 0 : ue.values;
      return Array.isArray(B) ? B.map((He) => String(He)).filter(Boolean) : [];
    }
    function de(Q, B) {
      var We;
      const ue = (We = Q == null ? void 0 : Q.options) == null ? void 0 : We[B];
      if (ue == null || ue === "") return;
      const He = Number(ue);
      return Number.isFinite(He) ? He : void 0;
    }
    function G(Q, B) {
      return Q.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || B;
    }
    function ne(Q) {
      if (!w.value) return;
      const B = Q.trim() || "default";
      w.value.default_contract = B, w.value.contracts[B] || (w.value.contracts[B] = { inputs: [], outputs: [] });
    }
    function te(Q) {
      const B = String(Q ?? "").toLowerCase();
      return B.includes("image") ? "image" : B.includes("video") ? "video" : B.includes("audio") ? "audio" : B.includes("int") ? "integer" : B.includes("float") || B.includes("double") || B.includes("number") ? "number" : B.includes("bool") ? "boolean" : B.includes("combo") || B.includes("enum") ? "enum" : B.includes("string") || B.includes("text") ? "string" : "file";
    }
    function Ee(Q) {
      N.value.inputs.splice(Q, 1), C.value === Q && (C.value = null);
    }
    function we(Q) {
      N.value.outputs.splice(Q, 1), S.value === Q && (S.value = null);
    }
    function Oe(Q) {
      C.value = C.value === Q ? null : Q, C.value != null && (S.value = null);
    }
    function Ne(Q) {
      S.value = S.value === Q ? null : Q, S.value != null && (C.value = null);
    }
    function $e(Q) {
      const B = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(Q)) : String(Q);
      return document.querySelector(`[data-node-id="${B}"]`);
    }
    function Ae(Q) {
      return Q instanceof Element ? !!Q.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function pe(Q) {
      var He, We, it, Ue, ct, K;
      if (!(Q instanceof Element)) return null;
      const B = Q.closest("[data-node-id]"), ue = B == null ? void 0 : B.getAttribute("data-node-id");
      return ue ? ((it = (We = (He = t.comfyApp) == null ? void 0 : He.graph) == null ? void 0 : We.getNodeById) == null ? void 0 : it.call(We, ue)) ?? ((K = (ct = (Ue = t.comfyApp) == null ? void 0 : Ue.rootGraph) == null ? void 0 : ct.getNodeById) == null ? void 0 : K.call(ct, ue)) ?? null : null;
    }
    function ge(Q, B) {
      if (B == null || B < 0) return null;
      const ue = $e(Q);
      return ue ? ue.querySelectorAll('[data-testid="node-widget"]')[B] ?? null : null;
    }
    function T(Q) {
      return !Q || Q.width <= 0 || Q.height <= 0 ? null : {
        left: `${Q.left}px`,
        top: `${Q.top}px`,
        width: `${Q.width}px`,
        height: `${Q.height}px`
      };
    }
    function O(Q) {
      const B = $e((Q == null ? void 0 : Q.id) ?? "");
      if (B) return B.getBoundingClientRect();
      const ue = t.comfyApp;
      if (!Q || typeof (ue == null ? void 0 : ue.canvasPosToClientPos) != "function") return null;
      const We = ue.canvasPosToClientPos([Q.pos[0], Q.pos[1] - 32]), it = ue.canvasPosToClientPos([Q.pos[0] + Q.size[0], Q.pos[1] + Q.size[1]]);
      return !We || !it ? null : new DOMRect(We[0], We[1], it[0] - We[0], it[1] - We[1]);
    }
    function le(Q) {
      var ct, K, me, ce, je, Je, Ye;
      const B = ge(Q.node_id, Q.widget_idx);
      if (B) return B.getBoundingClientRect();
      const ue = ((me = (K = (ct = t.comfyApp) == null ? void 0 : ct.graph) == null ? void 0 : K.getNodeById) == null ? void 0 : me.call(K, String(Q.node_id))) ?? ((Je = (je = (ce = t.comfyApp) == null ? void 0 : ce.rootGraph) == null ? void 0 : je.getNodeById) == null ? void 0 : Je.call(je, String(Q.node_id)));
      if (!ue || typeof Q.widget_idx != "number" || !Array.isArray(ue.widgets)) return null;
      const He = ue.widgets[Q.widget_idx];
      if (!He || typeof ((Ye = t.comfyApp) == null ? void 0 : Ye.canvasPosToClientPos) != "function") return O(ue);
      const We = 10, it = t.comfyApp.canvasPosToClientPos([ue.pos[0] + We, ue.pos[1] + (He.y ?? 0)]), Ue = t.comfyApp.canvasPosToClientPos([ue.pos[0] + ue.size[0] - We, ue.pos[1] + (He.y ?? 0) + (He.computedHeight ?? 24)]);
      return !it || !Ue ? O(ue) : new DOMRect(it[0], it[1], Ue[0] - it[0], Ue[1] - it[1]);
    }
    function Ie(Q) {
      var ue, He, We, it, Ue, ct;
      const B = ((We = (He = (ue = t.comfyApp) == null ? void 0 : ue.graph) == null ? void 0 : He.getNodeById) == null ? void 0 : We.call(He, String(Q.node_id))) ?? ((ct = (Ue = (it = t.comfyApp) == null ? void 0 : it.rootGraph) == null ? void 0 : Ue.getNodeById) == null ? void 0 : ct.call(Ue, String(Q.node_id)));
      return O(B);
    }
    const Me = P(() => ($.value, N.value.inputs.map((Q, B) => {
      const ue = T(le(Q));
      return ue ? {
        key: `input-${B}-${Q.node_id}-${Q.widget_idx ?? "na"}`,
        style: ue,
        active: C.value === B
      } : null;
    }).filter((Q) => !!Q))), Ce = P(() => ($.value, N.value.outputs.map((Q, B) => {
      const ue = T(Ie(Q));
      return ue ? {
        key: `output-${B}-${Q.node_id}-${Q.selector ?? "primary"}`,
        style: ue,
        active: S.value === B
      } : null;
    }).filter((Q) => !!Q)));
    function X(Q) {
      var me, ce, je, Je, Ye, et, ut, yt, kt, pt;
      if (Ae(Q.target)) return null;
      const B = (me = t.comfyApp) == null ? void 0 : me.canvas;
      if (!B) return null;
      const ue = (ce = B.convertEventToCanvasOffset) == null ? void 0 : ce.call(B, Q);
      if (!ue || ue.length < 2) return null;
      const [He, We] = ue, it = B.graph || ((je = t.comfyApp) == null ? void 0 : je.graph) || ((Je = t.comfyApp) == null ? void 0 : Je.rootGraph), Ue = ((Ye = it == null ? void 0 : it.getNodeOnPos) == null ? void 0 : Ye.call(it, He, We, B.visible_nodes)) || ((et = B.getNodeOnPos) == null ? void 0 : et.call(B, He, We)) || pe(Q.target);
      if (!Ue) return null;
      const ct = (ut = Ue.getWidgetOnPos) == null ? void 0 : ut.call(Ue, He, We, !0);
      if (ct)
        return { kind: "input", node: Ue, widget: ct, canvasX: He, canvasY: We };
      const K = ((yt = Ue.getOutputOnPos) == null ? void 0 : yt.call(Ue, [He, We])) || ((pt = (kt = Ue.constructor) == null ? void 0 : kt.nodeData) != null && pt.output_node ? { name: Ue.title || Ue.type || "output", type: "image" } : null);
      return K ? { kind: "output", node: Ue, output: K, canvasX: He, canvasY: We } : null;
    }
    function W(Q, B) {
      var ct;
      const ue = Array.isArray(Q.widgets) ? Q.widgets.indexOf(B) : -1, He = N.value.inputs.findIndex(
        (K) => String(K.node_id) === String(Q.id) && K.widget_idx === ue
      );
      if (He >= 0) {
        C.value = He;
        return;
      }
      const We = typeof ((ct = B == null ? void 0 : B.options) == null ? void 0 : ct.property) == "string" ? B.options.property : void 0, it = (B == null ? void 0 : B.name) || We || "input", Ue = {
        name: G(String(it), `input_${N.value.inputs.length + 1}`),
        display_name: String((B == null ? void 0 : B.name) || We || `Input ${N.value.inputs.length + 1}`),
        type: te(B == null ? void 0 : B.type),
        node_id: String(Q.id),
        widget_idx: ue >= 0 ? ue : void 0,
        field_key: We,
        required: !0,
        default: (B == null ? void 0 : B.value) ?? ""
      };
      ee(Ue.type) && (Ue.min = de(B, "min"), Ue.max = de(B, "max")), J(Ue.type) && (Ue.enum_values = ve(B)), N.value.inputs.push(Ue), C.value = N.value.inputs.length - 1, S.value = null;
    }
    function ye(Q, B) {
      const ue = Array.isArray(Q.outputs) ? Q.outputs.indexOf(B) : -1, He = ue >= 0 ? `slot:${ue}` : "primary", We = N.value.outputs.findIndex(
        (Ue) => String(Ue.node_id) === String(Q.id) && (Ue.selector || "primary") === He
      );
      if (We >= 0) {
        S.value = We;
        return;
      }
      const it = {
        name: G(String((B == null ? void 0 : B.name) || "output"), `output_${N.value.outputs.length + 1}`),
        display_name: String((B == null ? void 0 : B.name) || `Output ${N.value.outputs.length + 1}`),
        type: te(B == null ? void 0 : B.type),
        node_id: String(Q.id),
        selector: He
      };
      N.value.outputs.push(it), S.value = N.value.outputs.length - 1, C.value = null;
    }
    function ke(Q) {
      var He, We, it;
      if (!r.value) {
        I.value = null, E.value = null;
        return;
      }
      const B = X(Q);
      if (!B) {
        I.value = null, E.value = null;
        return;
      }
      if (B.kind === "input") {
        const Ue = Array.isArray(B.node.widgets) ? B.node.widgets.indexOf(B.widget) : -1, ct = T(((He = ge(B.node.id, Ue)) == null ? void 0 : He.getBoundingClientRect()) ?? le({
          node_id: String(B.node.id),
          widget_idx: Ue >= 0 ? Ue : void 0
        }));
        if (!ct) {
          I.value = null, E.value = null;
          return;
        }
        I.value = {
          kind: "input",
          label: `${((We = B.widget) == null ? void 0 : We.name) || "widget"} · Node ${B.node.id}`
        }, E.value = { kind: "input", style: ct };
        return;
      }
      const ue = T(O(B.node));
      if (!ue) {
        I.value = null, E.value = null;
        return;
      }
      I.value = {
        kind: "output",
        label: `${((it = B.output) == null ? void 0 : it.name) || B.node.title || B.node.type || "output"} · Node ${B.node.id}`
      }, E.value = { kind: "output", style: ue };
    }
    function qe(Q) {
      var He, We, it;
      if (!r.value || !w.value || Q.button !== 0) return;
      const B = X(Q);
      if (!B) return;
      const ue = (He = t.comfyApp) == null ? void 0 : He.canvas;
      if (ue) {
        if (B.kind === "input") {
          Q.preventDefault(), Q.stopImmediatePropagation(), Q.stopPropagation(), Array.isArray(ue.graph_mouse) && (ue.graph_mouse[0] = B.canvasX, ue.graph_mouse[1] = B.canvasY), (We = ue.selectNode) == null || We.call(ue, B.node, !1), W(B.node, B.widget);
          return;
        }
        Q.preventDefault(), Q.stopImmediatePropagation(), Q.stopPropagation(), Array.isArray(ue.graph_mouse) && (ue.graph_mouse[0] = B.canvasX, ue.graph_mouse[1] = B.canvasY), (it = ue.selectNode) == null || it.call(ue, B.node, !1), ye(B.node, B.output);
      }
    }
    function Be() {
      document.addEventListener("pointerdown", qe, !0), document.addEventListener("pointermove", ke, !0);
    }
    function be() {
      document.removeEventListener("pointerdown", qe, !0), document.removeEventListener("pointermove", ke, !0);
    }
    async function Y() {
      if (c.value) {
        u.value = !0, v.value = null;
        try {
          p.value = await n(c.value), w.value = ae(p.value.execution_contract);
        } catch (Q) {
          v.value = Q instanceof Error ? Q.message : "Failed to load workflow contract";
        } finally {
          u.value = !1;
        }
      }
    }
    async function ze() {
      if (!(!w.value || !c.value)) {
        d.value = !0, v.value = null;
        try {
          p.value = await a(c.value, w.value), w.value = ae(p.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Le({ reopenPanel: !0 });
        } catch (Q) {
          v.value = Q instanceof Error ? Q.message : "Failed to save workflow contract";
        } finally {
          d.value = !1;
        }
      }
    }
    async function Re() {
      k.value = !0;
    }
    async function Ke() {
      if (c.value) {
        k.value = !1, f.value = !0, v.value = null;
        try {
          await l(c.value), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Le({ reopenPanel: !0 });
        } catch (Q) {
          v.value = Q instanceof Error ? Q.message : "Failed to delete workflow contract";
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
    function Le(Q) {
      r.value = !1, I.value = null, E.value = null, k.value = !1, Q != null && Q.reopenPanel && Fe();
    }
    async function Ze(Q) {
      var He, We;
      const ue = (We = (He = Q.detail) == null ? void 0 : He.workflowName) == null ? void 0 : We.trim();
      ue && (c.value = ue, C.value = null, S.value = null, g.value = !1, r.value = !0, await Y());
    }
    function xt(Q) {
      if (Q.key === "Escape" && r.value) {
        if (k.value) {
          k.value = !1;
          return;
        }
        Le({ reopenPanel: !0 });
      }
    }
    function Ft() {
      if (M != null) return;
      const Q = () => {
        if ($.value += 1, !r.value) {
          M = null;
          return;
        }
        M = window.requestAnimationFrame(Q);
      };
      M = window.requestAnimationFrame(Q);
    }
    function ts() {
      M != null && (window.cancelAnimationFrame(M), M = null);
    }
    return $t(r, (Q) => {
      Q ? (Be(), Ft()) : (be(), ts());
    }), dt(() => {
      window.addEventListener("comfygit:open-io-mapping", Ze), window.addEventListener("keydown", xt);
    }), To(() => {
      be(), ts(), window.removeEventListener("comfygit:open-io-mapping", Ze), window.removeEventListener("keydown", xt);
    }), (Q, B) => r.value ? (o(), i("div", _7, [
      s("div", k7, [
        (o(!0), i(F, null, he(Me.value, (ue) => (o(), i("div", {
          key: ue.key,
          class: Ve(["io-highlight", "io-highlight-input", { active: ue.active }]),
          style: Vt(ue.style)
        }, null, 6))), 128)),
        (o(!0), i(F, null, he(Ce.value, (ue) => (o(), i("div", {
          key: ue.key,
          class: Ve(["io-highlight", "io-highlight-output", { active: ue.active }]),
          style: Vt(ue.style)
        }, null, 6))), 128)),
        E.value ? (o(), i("div", {
          key: 0,
          class: Ve(["io-highlight", E.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Vt(E.value.style)
        }, null, 6)) : y("", !0)
      ]),
      s("div", b7, [
        s("div", $7, [
          B[8] || (B[8] = s("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          s("div", C7, m(c.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          I.value ? (o(), i("div", x7, " Hovering " + m(I.value.kind) + ": " + m(I.value.label), 1)) : y("", !0)
        ]),
        s("div", S7, [
          b(De, {
            size: "sm",
            variant: "secondary",
            onClick: B[0] || (B[0] = (ue) => Le({ reopenPanel: !0 }))
          }, {
            default: h(() => [...B[9] || (B[9] = [
              x(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      s("aside", I7, [
        s("div", E7, [
          u.value ? (o(), i("div", T7, " Loading workflow contract... ")) : v.value ? (o(), i("div", M7, m(v.value), 1)) : w.value ? (o(), i(F, { key: 2 }, [
            s("section", P7, [
              s("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: B[1] || (B[1] = (ue) => g.value = !g.value)
              }, [
                B[10] || (B[10] = s("span", null, "Contract Details", -1)),
                s("span", R7, m(g.value ? "▾" : "▸"), 1)
              ]),
              g.value ? (o(), i("div", D7, [
                b(Gt, { label: "Default Contract" }, {
                  default: h(() => [
                    b(Pt, {
                      "model-value": w.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": ne
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                b(Gt, { label: "Display Name" }, {
                  default: h(() => [
                    b(Pt, {
                      modelValue: N.value.display_name,
                      "onUpdate:modelValue": B[2] || (B[2] = (ue) => N.value.display_name = ue),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                b(Gt, { label: "Description" }, {
                  default: h(() => [
                    b(An, {
                      modelValue: N.value.description,
                      "onUpdate:modelValue": B[3] || (B[3] = (ue) => N.value.description = ue),
                      rows: 2,
                      placeholder: "Optional description for this contract"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])) : y("", !0)
            ]),
            s("section", N7, [
              s("span", L7, m(V.value), 1),
              s("span", U7, m(N.value.inputs.length) + " input" + m(N.value.inputs.length === 1 ? "" : "s"), 1),
              s("span", O7, m(N.value.outputs.length) + " output" + m(N.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            s("section", A7, [
              s("div", z7, [
                b(_n, { variant: "section" }, {
                  default: h(() => [...B[11] || (B[11] = [
                    x("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              N.value.inputs.length ? y("", !0) : (o(), i("div", F7, " No inputs configured. ")),
              (o(!0), i(F, null, he(N.value.inputs, (ue, He) => (o(), i("div", {
                key: `input-${He}`,
                class: Ve(["item-card", { selected: C.value === He }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (We) => Oe(He)
                }, [
                  s("div", null, [
                    s("div", B7, m(ue.name || `Input ${He + 1}`), 1),
                    s("div", W7, [
                      x(" Node " + m(ue.node_id || "?"), 1),
                      ue.widget_idx !== void 0 ? (o(), i(F, { key: 0 }, [
                        x(" · Widget " + m(ue.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", G7, [
                      s("span", null, m(ue.type || "string"), 1),
                      s("span", null, m(ue.required ? "required" : "optional"), 1),
                      ue.default !== void 0 && ue.default !== "" ? (o(), i("span", j7, "default " + m(_e(ue.default)), 1)) : y("", !0)
                    ])
                  ]),
                  b(De, {
                    size: "sm",
                    variant: "ghost",
                    onClick: bt((We) => Ee(He), ["stop"])
                  }, {
                    default: h(() => [...B[12] || (B[12] = [
                      x(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, V7),
                C.value === He ? (o(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: B[4] || (B[4] = bt(() => {
                  }, ["stop"]))
                }, [
                  b(Gt, { label: "Name" }, {
                    default: h(() => [
                      b(Pt, {
                        modelValue: ue.name,
                        "onUpdate:modelValue": (We) => ue.name = We,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Gt, { label: "Display Name" }, {
                    default: h(() => [
                      b(Pt, {
                        modelValue: ue.display_name,
                        "onUpdate:modelValue": (We) => ue.display_name = We,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Gt, { label: "Type" }, {
                    default: h(() => [
                      b(Jo, {
                        "model-value": ue.type,
                        options: R,
                        "full-width": "",
                        "onUpdate:modelValue": (We) => ue.type = We
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Gt, { label: "Required" }, {
                    default: h(() => [
                      b(Jo, {
                        "model-value": ue.required ? "true" : "false",
                        options: L,
                        "full-width": "",
                        "onUpdate:modelValue": (We) => ue.required = We === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Gt, {
                    class: Ve({ "item-grid-full": ue.type === "string" || ue.type === "enum" }),
                    label: "Default"
                  }, {
                    default: h(() => [
                      ue.type === "string" ? (o(), D(An, {
                        key: 0,
                        "model-value": se(ue.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (We) => ue.default = We
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (o(), D(Pt, {
                        key: 1,
                        modelValue: ue.default,
                        "onUpdate:modelValue": (We) => ue.default = We,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  ee(ue.type) ? (o(), D(Gt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: h(() => [
                      b(Pt, {
                        "model-value": fe(ue.min),
                        "full-width": "",
                        "onUpdate:modelValue": (We) => ue.min = oe(We)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  ee(ue.type) ? (o(), D(Gt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: h(() => [
                      b(Pt, {
                        "model-value": fe(ue.max),
                        "full-width": "",
                        "onUpdate:modelValue": (We) => ue.max = oe(We)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  J(ue.type) ? (o(), D(Gt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: h(() => [
                      b(An, {
                        "model-value": H(ue.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (We) => ue.enum_values = q(We)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0)
                ])) : y("", !0)
              ], 2))), 128))
            ]),
            s("section", H7, [
              s("div", q7, [
                b(_n, { variant: "section" }, {
                  default: h(() => [...B[13] || (B[13] = [
                    x("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              N.value.outputs.length ? y("", !0) : (o(), i("div", K7, " No outputs configured. ")),
              (o(!0), i(F, null, he(N.value.outputs, (ue, He) => (o(), i("div", {
                key: `output-${He}`,
                class: Ve(["item-card", { selected: S.value === He }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (We) => Ne(He)
                }, [
                  s("div", null, [
                    s("div", Q7, m(ue.name || `Output ${He + 1}`), 1),
                    s("div", Y7, [
                      x(" Node " + m(ue.node_id || "?"), 1),
                      ue.selector ? (o(), i(F, { key: 0 }, [
                        x(" · " + m(ue.selector), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", X7, [
                      s("span", null, m(ue.type || "file"), 1)
                    ])
                  ]),
                  b(De, {
                    size: "sm",
                    variant: "ghost",
                    onClick: bt((We) => we(He), ["stop"])
                  }, {
                    default: h(() => [...B[14] || (B[14] = [
                      x(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, J7),
                S.value === He ? (o(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: B[5] || (B[5] = bt(() => {
                  }, ["stop"]))
                }, [
                  b(Gt, { label: "Name" }, {
                    default: h(() => [
                      b(Pt, {
                        modelValue: ue.name,
                        "onUpdate:modelValue": (We) => ue.name = We,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Gt, { label: "Display Name" }, {
                    default: h(() => [
                      b(Pt, {
                        modelValue: ue.display_name,
                        "onUpdate:modelValue": (We) => ue.display_name = We,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Gt, { label: "Type" }, {
                    default: h(() => [
                      b(Jo, {
                        "model-value": ue.type,
                        options: R,
                        "full-width": "",
                        "onUpdate:modelValue": (We) => ue.type = We
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : y("", !0)
              ], 2))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        s("div", Z7, [
          s("div", eD, [
            b(De, {
              variant: "secondary",
              onClick: B[6] || (B[6] = (ue) => Le({ reopenPanel: !0 }))
            }, {
              default: h(() => [...B[15] || (B[15] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            })
          ]),
          s("div", tD, [
            b(De, {
              variant: "danger",
              disabled: !A.value,
              loading: f.value,
              onClick: Re
            }, {
              default: h(() => [...B[16] || (B[16] = [
                x(" Delete ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            b(De, {
              variant: "primary",
              loading: d.value,
              onClick: ze
            }, {
              default: h(() => [...B[17] || (B[17] = [
                x(" Save ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]),
      k.value ? (o(), D(Rl, {
        key: 0,
        title: "Delete Workflow Contract",
        message: `Delete the contract for ${c.value}?`,
        warning: "This removes the saved input/output contract for this workflow. The workflow itself will not be deleted.",
        "confirm-label": "Delete",
        "cancel-label": "Cancel",
        destructive: !0,
        onConfirm: Ke,
        onCancel: B[7] || (B[7] = (ue) => k.value = !1)
      }, null, 8, ["message"])) : y("", !0)
    ])) : y("", !0);
  }
}), nD = /* @__PURE__ */ Te(sD, [["__scopeId", "data-v-13515b27"]]), oD = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', aD = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', lD = {
  comfy: oD,
  phosphor: aD
}, Ll = "comfy", Nc = "comfygit-theme";
let pn = null, Lc = Ll;
function iD() {
  try {
    const e = localStorage.getItem(Nc);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Ll;
}
function Uc(e = Ll) {
  pn && pn.remove(), pn = document.createElement("style"), pn.id = "comfygit-theme-styles", pn.setAttribute("data-theme", e), pn.textContent = lD[e], document.head.appendChild(pn), document.body.setAttribute("data-comfygit-theme", e), Lc = e;
  try {
    localStorage.setItem(Nc, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function rD() {
  return Lc;
}
function cD(e) {
  Uc(e);
}
function uD(e) {
  var r;
  const { ui_id: t, state: n } = e || {}, a = (n == null ? void 0 : n.history) || {};
  if (!t)
    return null;
  const l = a[t];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Ai = "ComfyGit.DevAutoReload", Oc = "ComfyGit.DevAutoReload.PanelOpen";
function dD() {
  const e = new URLSearchParams(window.location.search).get("comfygitDevReload");
  return e === null ? null : e;
}
function ka() {
  const e = dD();
  if (e !== null) {
    const t = e !== "0" && e !== "false";
    try {
      localStorage.setItem(Ai, t ? "true" : "false");
    } catch {
    }
    return t;
  }
  try {
    return localStorage.getItem(Ai) === "true";
  } catch {
    return !1;
  }
}
function Ac(e) {
  if (ka())
    try {
      sessionStorage.setItem(Oc, e ? "true" : "false");
    } catch {
    }
}
function mD() {
  if (!ka()) return !1;
  try {
    return sessionStorage.getItem(Oc) === "true";
  } catch {
    return !1;
  }
}
async function zi(e) {
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
async function fD(e) {
  if (!ka()) return;
  const t = e.map((a) => ({
    ...a,
    signature: null
  }));
  for (const a of t)
    try {
      a.signature = await zi(a.url);
    } catch (l) {
      console.warn(`[ComfyGit] Dev auto-reload could not read ${a.name}:`, l);
    }
  console.log("[ComfyGit] Dev auto-reload enabled");
  let n = !1;
  window.setInterval(async () => {
    if (!n)
      for (const a of t)
        try {
          const l = await zi(a.url);
          if (a.signature && l && l !== a.signature) {
            n = !0, console.log(`[ComfyGit] ${a.name} changed, reloading page...`), window.setTimeout(() => window.location.reload(), 500);
            return;
          }
          l && (a.signature = l);
        } catch {
        }
  }, 1e3);
}
const vD = "./comfygit-panel.css", pD = "./comfygit-panel.js", zc = new URL(vD, import.meta.url).href, gD = new URL(pD, import.meta.url).href, Ul = document.createElement("link");
Ul.rel = "stylesheet";
Ul.href = zc;
document.head.appendChild(Ul);
const hD = iD();
Uc(hD);
ka() || (sessionStorage.removeItem("ComfyGit.LastView"), sessionStorage.removeItem("ComfyGit.LastSection"));
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), cD(e);
  },
  getTheme: () => {
    const e = rD();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
window.ComfyGitDev = {
  ...window.ComfyGitDev ?? {},
  async exportCurrentApiPrompt() {
    const e = Ls;
    if (typeof e.graphToPrompt != "function")
      throw new Error("ComfyUI graphToPrompt is not available");
    return e.graphToPrompt(e.rootGraph);
  },
  async exportApiPromptForWorkflow(e) {
    const t = Ls;
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
let As = null, ho = null, ms = null, yo = null, eo = null, Fi = null, to = null, Vi = null, so = null, Bi = null;
const zn = _(null);
let So = "no_workspace", Fc = !1;
async function lo() {
  const e = Hn();
  if (!e) return null;
  try {
    const t = await e.fetchApi("/v2/comfygit/status");
    t.ok && (zn.value = await t.json());
  } catch {
  }
}
async function il() {
  const e = Hn();
  if (e)
    try {
      const t = await e.fetchApi("/v2/setup/status");
      if (t.ok) {
        const n = await t.json();
        So = n.state, Fc = n.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function rl() {
  var t;
  if (So === "managed" || !Fc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const n of e)
    if (((t = n.textContent) == null ? void 0 : t.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
      n.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function yD() {
  if (!zn.value) return !1;
  const e = zn.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || zn.value.has_changes;
}
function no(e) {
  io(), Ac(!0), As = document.createElement("div"), As.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", As.appendChild(t), As.addEventListener("click", (a) => {
    a.target === As && io();
  });
  const n = (a) => {
    a.key === "Escape" && (io(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), ho = Po({
    render: () => jn(uP, {
      initialView: e,
      onClose: io,
      onStatusUpdate: async (a) => {
        zn.value = a, Pn(), await il(), Qo(), rl();
      }
    })
  }), ho.mount(t), document.body.appendChild(As);
}
function io() {
  Ac(!1), ho && (ho.unmount(), ho = null), As && (As.remove(), As = null);
}
function Wi(e) {
  oo(), ms = document.createElement("div"), ms.className = "comfygit-commit-popover-container";
  const t = e.getBoundingClientRect();
  ms.style.position = "fixed", ms.style.top = `${t.bottom + 8}px`, ms.style.right = `${window.innerWidth - t.right}px`, ms.style.zIndex = "10001";
  const n = (l) => {
    ms && !ms.contains(l.target) && l.target !== e && (oo(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const a = (l) => {
    l.key === "Escape" && (oo(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), yo = Po({
    render: () => jn(Mc, {
      status: zn.value,
      onClose: oo,
      onCommitted: (l) => {
        oo(), wD(l.success, l.message), lo().then(Pn);
      }
    })
  }), yo.mount(ms), document.body.appendChild(ms);
}
function oo() {
  yo && (yo.unmount(), yo = null), ms && (ms.remove(), ms = null);
}
function wD(e, t) {
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
function _D() {
  eo || (eo = document.createElement("div"), eo.className = "comfygit-download-queue-root", Fi = Po({
    render: () => jn(oR)
  }), Fi.mount(eo), document.body.appendChild(eo), console.log("[ComfyGit] Model download queue mounted"));
}
function kD() {
  to || (to = document.createElement("div"), to.className = "comfygit-missing-resources-root", Vi = Po({
    render: () => jn(w7)
  }), Vi.mount(to), document.body.appendChild(to), console.log("[ComfyGit] Missing resources popup mounted"));
}
function bD() {
  so || (so = document.createElement("div"), so.className = "comfygit-io-mapping-root", Bi = Po({
    render: () => jn(nD, {
      comfyApp: Ls
    })
  }), Bi.mount(so), document.body.appendChild(so), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let os = null;
function Pn() {
  if (!os) return;
  const e = os.querySelector(".commit-indicator");
  e && (e.style.display = yD() ? "block" : "none");
}
function Qo() {
  if (!os) return;
  const e = So !== "managed";
  os.disabled = e, os.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Vc = document.createElement("style");
Vc.textContent = `
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
document.head.appendChild(Vc);
Ls.registerExtension({
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
        os && !os.disabled && Wi(os);
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
          Ls.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
          Ls.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
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
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = () => no(), os = document.createElement("button"), os.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", os.innerHTML = 'Commit <span class="commit-indicator"></span>', os.title = "Quick Commit", os.onclick = () => Wi(os), e.appendChild(t), e.appendChild(os), (r = (l = Ls.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Ls.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), _D(), kD(), bD(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      no(u);
    })), window.addEventListener("comfygit:close-panel", (() => {
      io();
    })), window.addEventListener("comfygit:status-refresh", (async () => {
      await lo(), Pn(), Qo();
    }));
    const { loadPendingDownloads: n } = qn();
    n(), await Promise.all([lo(), il()]), Pn(), Qo(), rl(), mD() && setTimeout(() => {
      As || no();
    }, 100), fD([
      { name: "panel script", url: gD },
      { name: "panel stylesheet", url: zc }
    ]), setTimeout(rl, 100), setInterval(async () => {
      await Promise.all([lo(), il()]), Pn(), Qo();
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
                Ls.refreshComboInNodes && (await Ls.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), k.textContent = "✅", S.textContent = "Nodes Installed", S.style.color = "#4caf50", $.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, g.style.borderColor = "#4caf50", I.style.display = "none", setTimeout(() => {
                  g.remove();
                }, 3e3);
              } catch (R) {
                console.error("[ComfyGit] Failed to refresh nodes:", R), k.textContent = "✅", S.textContent = "Restart Complete", S.style.color = "#4caf50", $.textContent = "Refresh the page to load new nodes.", g.style.borderColor = "#4caf50", I.style.display = "none";
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
        const w = uD(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: g = 1 } = w.detail || {};
        f(g);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
