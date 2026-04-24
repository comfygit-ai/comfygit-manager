var yc = Object.defineProperty;
var wc = (e, t, o) => t in e ? yc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var gn = (e, t, o) => wc(e, typeof t != "symbol" ? t + "" : t, o);
import { app as Zt } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function sl(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) t[o] = 1;
  return (o) => o in t;
}
const gt = {}, ho = [], bs = () => {
}, Ei = () => !1, qn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ol = (e) => e.startsWith("onUpdate:"), Mt = Object.assign, nl = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, _c = Object.prototype.hasOwnProperty, dt = (e, t) => _c.call(e, t), Ze = Array.isArray, yo = (e) => cn(e) === "[object Map]", To = (e) => cn(e) === "[object Set]", Tl = (e) => cn(e) === "[object Date]", tt = (e) => typeof e == "function", bt = (e) => typeof e == "string", fs = (e) => typeof e == "symbol", mt = (e) => e !== null && typeof e == "object", Ti = (e) => (mt(e) || tt(e)) && tt(e.then) && tt(e.catch), Mi = Object.prototype.toString, cn = (e) => Mi.call(e), kc = (e) => cn(e).slice(8, -1), Pi = (e) => cn(e) === "[object Object]", al = (e) => bt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Go = /* @__PURE__ */ sl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Kn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((o) => t[o] || (t[o] = e(o)));
}, bc = /-\w/g, as = Kn(
  (e) => e.replace(bc, (t) => t.slice(1).toUpperCase())
), $c = /\B([A-Z])/g, qs = Kn(
  (e) => e.replace($c, "-$1").toLowerCase()
), Jn = Kn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Sa = Kn(
  (e) => e ? `on${Jn(e)}` : ""
), Gs = (e, t) => !Object.is(e, t), xn = (e, ...t) => {
  for (let o = 0; o < e.length; o++)
    e[o](...t);
}, Ri = (e, t, o, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, Qn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Cc = (e) => {
  const t = bt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ml;
const Yn = () => Ml || (Ml = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Wt(e) {
  if (Ze(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = bt(n) ? Ec(n) : Wt(n);
      if (l)
        for (const r in l)
          t[r] = l[r];
    }
    return t;
  } else if (bt(e) || mt(e))
    return e;
}
const xc = /;(?![^(]*\))/g, Sc = /:([^]+)/, Ic = /\/\*[^]*?\*\//g;
function Ec(e) {
  const t = {};
  return e.replace(Ic, "").split(xc).forEach((o) => {
    if (o) {
      const n = o.split(Sc);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Ue(e) {
  let t = "";
  if (bt(e))
    t = e;
  else if (Ze(e))
    for (let o = 0; o < e.length; o++) {
      const n = Ue(e[o]);
      n && (t += n + " ");
    }
  else if (mt(e))
    for (const o in e)
      e[o] && (t += o + " ");
  return t.trim();
}
const Tc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Mc = /* @__PURE__ */ sl(Tc);
function Li(e) {
  return !!e || e === "";
}
function Pc(e, t) {
  if (e.length !== t.length) return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++)
    o = no(e[n], t[n]);
  return o;
}
function no(e, t) {
  if (e === t) return !0;
  let o = Tl(e), n = Tl(t);
  if (o || n)
    return o && n ? e.getTime() === t.getTime() : !1;
  if (o = fs(e), n = fs(t), o || n)
    return e === t;
  if (o = Ze(e), n = Ze(t), o || n)
    return o && n ? Pc(e, t) : !1;
  if (o = mt(e), n = mt(t), o || n) {
    if (!o || !n)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(t).length;
    if (l !== r)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (u && !d || !u && d || !no(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ll(e, t) {
  return e.findIndex((o) => no(o, t));
}
const Ni = (e) => !!(e && e.__v_isRef === !0), f = (e) => bt(e) ? e : e == null ? "" : Ze(e) || mt(e) && (e.toString === Mi || !tt(e.toString)) ? Ni(e) ? f(e.value) : JSON.stringify(e, Di, 2) : String(e), Di = (e, t) => Ni(t) ? Di(e, t.value) : yo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [n, l], r) => (o[Ia(n, r) + " =>"] = l, o),
    {}
  )
} : To(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => Ia(o))
} : fs(t) ? Ia(t) : mt(t) && !Ze(t) && !Pi(t) ? String(t) : t, Ia = (e, t = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    fs(e) ? `Symbol(${(o = e.description) != null ? o : t})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Qt;
class Rc {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Qt, !t && Qt && (this.index = (Qt.scopes || (Qt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, o;
      if (this.scopes)
        for (t = 0, o = this.scopes.length; t < o; t++)
          this.scopes[t].pause();
      for (t = 0, o = this.effects.length; t < o; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, o;
      if (this.scopes)
        for (t = 0, o = this.scopes.length; t < o; t++)
          this.scopes[t].resume();
      for (t = 0, o = this.effects.length; t < o; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const o = Qt;
      try {
        return Qt = this, t();
      } finally {
        Qt = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Qt, Qt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Qt = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
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
      if (!this.detached && this.parent && !t) {
        const l = this.parent.scopes.pop();
        l && l !== this && (this.parent.scopes[this.index] = l, l.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Lc() {
  return Qt;
}
let ht;
const Ea = /* @__PURE__ */ new WeakSet();
class Oi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Qt && Qt.active && Qt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ea.has(this) && (Ea.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ui(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Pl(this), zi(this);
    const t = ht, o = us;
    ht = this, us = !0;
    try {
      return this.fn();
    } finally {
      Vi(this), ht = t, us = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        cl(t);
      this.deps = this.depsTail = void 0, Pl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ea.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Va(this) && this.run();
  }
  get dirty() {
    return Va(this);
  }
}
let Ai = 0, jo, Ho;
function Ui(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ho, Ho = e;
    return;
  }
  e.next = jo, jo = e;
}
function il() {
  Ai++;
}
function rl() {
  if (--Ai > 0)
    return;
  if (Ho) {
    let t = Ho;
    for (Ho = void 0; t; ) {
      const o = t.next;
      t.next = void 0, t.flags &= -9, t = o;
    }
  }
  let e;
  for (; jo; ) {
    let t = jo;
    for (jo = void 0; t; ) {
      const o = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = o;
    }
  }
  if (e) throw e;
}
function zi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Vi(e) {
  let t, o = e.depsTail, n = o;
  for (; n; ) {
    const l = n.prevDep;
    n.version === -1 ? (n === o && (o = l), cl(n), Nc(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
  }
  e.deps = t, e.depsTail = o;
}
function Va(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Fi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Fi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === en) || (e.globalVersion = en, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Va(e))))
    return;
  e.flags |= 2;
  const t = e.dep, o = ht, n = us;
  ht = e, us = !0;
  try {
    zi(e);
    const l = e.fn(e._value);
    (t.version === 0 || Gs(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    ht = o, us = n, Vi(e), e.flags &= -3;
  }
}
function cl(e, t = !1) {
  const { dep: o, prevSub: n, nextSub: l } = e;
  if (n && (n.nextSub = l, e.prevSub = void 0), l && (l.prevSub = n, e.nextSub = void 0), o.subs === e && (o.subs = n, !n && o.computed)) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep)
      cl(r, !0);
  }
  !t && !--o.sc && o.map && o.map.delete(o.key);
}
function Nc(e) {
  const { prevDep: t, nextDep: o } = e;
  t && (t.nextDep = o, e.prevDep = void 0), o && (o.prevDep = t, e.nextDep = void 0);
}
let us = !0;
const Bi = [];
function Ns() {
  Bi.push(us), us = !1;
}
function Ds() {
  const e = Bi.pop();
  us = e === void 0 ? !0 : e;
}
function Pl(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const o = ht;
    ht = void 0;
    try {
      t();
    } finally {
      ht = o;
    }
  }
}
let en = 0;
class Dc {
  constructor(t, o) {
    this.sub = t, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ul {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ht || !us || ht === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== ht)
      o = this.activeLink = new Dc(ht, this), ht.deps ? (o.prevDep = ht.depsTail, ht.depsTail.nextDep = o, ht.depsTail = o) : ht.deps = ht.depsTail = o, Wi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const n = o.nextDep;
      n.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = n), o.prevDep = ht.depsTail, o.nextDep = void 0, ht.depsTail.nextDep = o, ht.depsTail = o, ht.deps === o && (ht.deps = n);
    }
    return o;
  }
  trigger(t) {
    this.version++, en++, this.notify(t);
  }
  notify(t) {
    il();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      rl();
    }
  }
}
function Wi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Wi(n);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const Fa = /* @__PURE__ */ new WeakMap(), to = Symbol(
  ""
), Ba = Symbol(
  ""
), tn = Symbol(
  ""
);
function zt(e, t, o) {
  if (us && ht) {
    let n = Fa.get(e);
    n || Fa.set(e, n = /* @__PURE__ */ new Map());
    let l = n.get(o);
    l || (n.set(o, l = new ul()), l.map = n, l.key = o), l.track();
  }
}
function Ps(e, t, o, n, l, r) {
  const c = Fa.get(e);
  if (!c) {
    en++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (il(), t === "clear")
    c.forEach(u);
  else {
    const d = Ze(e), v = d && al(o);
    if (d && o === "length") {
      const m = Number(n);
      c.forEach((p, w) => {
        (w === "length" || w === tn || !fs(w) && w >= m) && u(p);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), v && u(c.get(tn)), t) {
        case "add":
          d ? v && u(c.get("length")) : (u(c.get(to)), yo(e) && u(c.get(Ba)));
          break;
        case "delete":
          d || (u(c.get(to)), yo(e) && u(c.get(Ba)));
          break;
        case "set":
          yo(e) && u(c.get(to));
          break;
      }
  }
  rl();
}
function uo(e) {
  const t = it(e);
  return t === e ? t : (zt(t, "iterate", tn), os(e) ? t : t.map(ms));
}
function Xn(e) {
  return zt(e = it(e), "iterate", tn), e;
}
function Fs(e, t) {
  return Os(e) ? so(e) ? So(ms(t)) : So(t) : ms(t);
}
const Oc = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ta(this, Symbol.iterator, (e) => Fs(this, e));
  },
  concat(...e) {
    return uo(this).concat(
      ...e.map((t) => Ze(t) ? uo(t) : t)
    );
  },
  entries() {
    return Ta(this, "entries", (e) => (e[1] = Fs(this, e[1]), e));
  },
  every(e, t) {
    return Is(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Is(
      this,
      "filter",
      e,
      t,
      (o) => o.map((n) => Fs(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Is(
      this,
      "find",
      e,
      t,
      (o) => Fs(this, o),
      arguments
    );
  },
  findIndex(e, t) {
    return Is(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Is(
      this,
      "findLast",
      e,
      t,
      (o) => Fs(this, o),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Is(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Is(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ma(this, "includes", e);
  },
  indexOf(...e) {
    return Ma(this, "indexOf", e);
  },
  join(e) {
    return uo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ma(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Is(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return No(this, "pop");
  },
  push(...e) {
    return No(this, "push", e);
  },
  reduce(e, ...t) {
    return Rl(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Rl(this, "reduceRight", e, t);
  },
  shift() {
    return No(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Is(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return No(this, "splice", e);
  },
  toReversed() {
    return uo(this).toReversed();
  },
  toSorted(e) {
    return uo(this).toSorted(e);
  },
  toSpliced(...e) {
    return uo(this).toSpliced(...e);
  },
  unshift(...e) {
    return No(this, "unshift", e);
  },
  values() {
    return Ta(this, "values", (e) => Fs(this, e));
  }
};
function Ta(e, t, o) {
  const n = Xn(e), l = n[t]();
  return n !== e && !os(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const Ac = Array.prototype;
function Is(e, t, o, n, l, r) {
  const c = Xn(e), u = c !== e && !os(e), d = c[t];
  if (d !== Ac[t]) {
    const p = d.apply(e, r);
    return u ? ms(p) : p;
  }
  let v = o;
  c !== e && (u ? v = function(p, w) {
    return o.call(this, Fs(e, p), w, e);
  } : o.length > 2 && (v = function(p, w) {
    return o.call(this, p, w, e);
  }));
  const m = d.call(c, v, n);
  return u && l ? l(m) : m;
}
function Rl(e, t, o, n) {
  const l = Xn(e);
  let r = o;
  return l !== e && (os(e) ? o.length > 3 && (r = function(c, u, d) {
    return o.call(this, c, u, d, e);
  }) : r = function(c, u, d) {
    return o.call(this, c, Fs(e, u), d, e);
  }), l[t](r, ...n);
}
function Ma(e, t, o) {
  const n = it(e);
  zt(n, "iterate", tn);
  const l = n[t](...o);
  return (l === -1 || l === !1) && ml(o[0]) ? (o[0] = it(o[0]), n[t](...o)) : l;
}
function No(e, t, o = []) {
  Ns(), il();
  const n = it(e)[t].apply(e, o);
  return rl(), Ds(), n;
}
const Uc = /* @__PURE__ */ sl("__proto__,__v_isRef,__isVue"), Gi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(fs)
);
function zc(e) {
  fs(e) || (e = String(e));
  const t = it(this);
  return zt(t, "has", e), t.hasOwnProperty(e);
}
class ji {
  constructor(t = !1, o = !1) {
    this._isReadonly = t, this._isShallow = o;
  }
  get(t, o, n) {
    if (o === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, r = this._isShallow;
    if (o === "__v_isReactive")
      return !l;
    if (o === "__v_isReadonly")
      return l;
    if (o === "__v_isShallow")
      return r;
    if (o === "__v_raw")
      return n === (l ? r ? Jc : Ji : r ? Ki : qi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const c = Ze(t);
    if (!l) {
      let d;
      if (c && (d = Oc[o]))
        return d;
      if (o === "hasOwnProperty")
        return zc;
    }
    const u = Reflect.get(
      t,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Gt(t) ? t : n
    );
    if ((fs(o) ? Gi.has(o) : Uc(o)) || (l || zt(t, "get", o), r))
      return u;
    if (Gt(u)) {
      const d = c && al(o) ? u : u.value;
      return l && mt(d) ? Nn(d) : d;
    }
    return mt(u) ? l ? Nn(u) : io(u) : u;
  }
}
class Hi extends ji {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, n, l) {
    let r = t[o];
    const c = Ze(t) && al(o);
    if (!this._isShallow) {
      const v = Os(r);
      if (!os(n) && !Os(n) && (r = it(r), n = it(n)), !c && Gt(r) && !Gt(n))
        return v || (r.value = n), !0;
    }
    const u = c ? Number(o) < t.length : dt(t, o), d = Reflect.set(
      t,
      o,
      n,
      Gt(t) ? t : l
    );
    return t === it(l) && (u ? Gs(n, r) && Ps(t, "set", o, n) : Ps(t, "add", o, n)), d;
  }
  deleteProperty(t, o) {
    const n = dt(t, o);
    t[o];
    const l = Reflect.deleteProperty(t, o);
    return l && n && Ps(t, "delete", o, void 0), l;
  }
  has(t, o) {
    const n = Reflect.has(t, o);
    return (!fs(o) || !Gi.has(o)) && zt(t, "has", o), n;
  }
  ownKeys(t) {
    return zt(
      t,
      "iterate",
      Ze(t) ? "length" : to
    ), Reflect.ownKeys(t);
  }
}
class Vc extends ji {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, o) {
    return !0;
  }
  deleteProperty(t, o) {
    return !0;
  }
}
const Fc = /* @__PURE__ */ new Hi(), Bc = /* @__PURE__ */ new Vc(), Wc = /* @__PURE__ */ new Hi(!0);
const Wa = (e) => e, hn = (e) => Reflect.getPrototypeOf(e);
function Gc(e, t, o) {
  return function(...n) {
    const l = this.__v_raw, r = it(l), c = yo(r), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, v = l[e](...n), m = o ? Wa : t ? So : ms;
    return !t && zt(
      r,
      "iterate",
      d ? Ba : to
    ), {
      // iterator protocol
      next() {
        const { value: p, done: w } = v.next();
        return w ? { value: p, done: w } : {
          value: u ? [m(p[0]), m(p[1])] : m(p),
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
function yn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function jc(e, t) {
  const o = {
    get(l) {
      const r = this.__v_raw, c = it(r), u = it(l);
      e || (Gs(l, u) && zt(c, "get", l), zt(c, "get", u));
      const { has: d } = hn(c), v = t ? Wa : e ? So : ms;
      if (d.call(c, l))
        return v(r.get(l));
      if (d.call(c, u))
        return v(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && zt(it(l), "iterate", to), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = it(r), u = it(l);
      return e || (Gs(l, u) && zt(c, "has", l), zt(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, d = it(u), v = t ? Wa : e ? So : ms;
      return !e && zt(d, "iterate", to), u.forEach((m, p) => l.call(r, v(m), v(p), c));
    }
  };
  return Mt(
    o,
    e ? {
      add: yn("add"),
      set: yn("set"),
      delete: yn("delete"),
      clear: yn("clear")
    } : {
      add(l) {
        !t && !os(l) && !Os(l) && (l = it(l));
        const r = it(this);
        return hn(r).has.call(r, l) || (r.add(l), Ps(r, "add", l, l)), this;
      },
      set(l, r) {
        !t && !os(r) && !Os(r) && (r = it(r));
        const c = it(this), { has: u, get: d } = hn(c);
        let v = u.call(c, l);
        v || (l = it(l), v = u.call(c, l));
        const m = d.call(c, l);
        return c.set(l, r), v ? Gs(r, m) && Ps(c, "set", l, r) : Ps(c, "add", l, r), this;
      },
      delete(l) {
        const r = it(this), { has: c, get: u } = hn(r);
        let d = c.call(r, l);
        d || (l = it(l), d = c.call(r, l)), u && u.call(r, l);
        const v = r.delete(l);
        return d && Ps(r, "delete", l, void 0), v;
      },
      clear() {
        const l = it(this), r = l.size !== 0, c = l.clear();
        return r && Ps(
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
    o[l] = Gc(l, e, t);
  }), o;
}
function dl(e, t) {
  const o = jc(e, t);
  return (n, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    dt(o, l) && l in n ? o : n,
    l,
    r
  );
}
const Hc = {
  get: /* @__PURE__ */ dl(!1, !1)
}, qc = {
  get: /* @__PURE__ */ dl(!1, !0)
}, Kc = {
  get: /* @__PURE__ */ dl(!0, !1)
};
const qi = /* @__PURE__ */ new WeakMap(), Ki = /* @__PURE__ */ new WeakMap(), Ji = /* @__PURE__ */ new WeakMap(), Jc = /* @__PURE__ */ new WeakMap();
function Qc(e) {
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
function Yc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Qc(kc(e));
}
function io(e) {
  return Os(e) ? e : fl(
    e,
    !1,
    Fc,
    Hc,
    qi
  );
}
function Xc(e) {
  return fl(
    e,
    !1,
    Wc,
    qc,
    Ki
  );
}
function Nn(e) {
  return fl(
    e,
    !0,
    Bc,
    Kc,
    Ji
  );
}
function fl(e, t, o, n, l) {
  if (!mt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Yc(e);
  if (r === 0)
    return e;
  const c = l.get(e);
  if (c)
    return c;
  const u = new Proxy(
    e,
    r === 2 ? n : o
  );
  return l.set(e, u), u;
}
function so(e) {
  return Os(e) ? so(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Os(e) {
  return !!(e && e.__v_isReadonly);
}
function os(e) {
  return !!(e && e.__v_isShallow);
}
function ml(e) {
  return e ? !!e.__v_raw : !1;
}
function it(e) {
  const t = e && e.__v_raw;
  return t ? it(t) : e;
}
function Zc(e) {
  return !dt(e, "__v_skip") && Object.isExtensible(e) && Ri(e, "__v_skip", !0), e;
}
const ms = (e) => mt(e) ? io(e) : e, So = (e) => mt(e) ? Nn(e) : e;
function Gt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function $(e) {
  return eu(e, !1);
}
function eu(e, t) {
  return Gt(e) ? e : new tu(e, t);
}
class tu {
  constructor(t, o) {
    this.dep = new ul(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? t : it(t), this._value = o ? t : ms(t), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const o = this._rawValue, n = this.__v_isShallow || os(t) || Os(t);
    t = n ? t : it(t), Gs(t, o) && (this._rawValue = t, this._value = n ? t : ms(t), this.dep.trigger());
  }
}
function st(e) {
  return Gt(e) ? e.value : e;
}
const su = {
  get: (e, t, o) => t === "__v_raw" ? e : st(Reflect.get(e, t, o)),
  set: (e, t, o, n) => {
    const l = e[t];
    return Gt(l) && !Gt(o) ? (l.value = o, !0) : Reflect.set(e, t, o, n);
  }
};
function Qi(e) {
  return so(e) ? e : new Proxy(e, su);
}
class ou {
  constructor(t, o, n) {
    this.fn = t, this.setter = o, this._value = void 0, this.dep = new ul(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = en - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ht !== this)
      return Ui(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Fi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function nu(e, t, o = !1) {
  let n, l;
  return tt(e) ? n = e : (n = e.get, l = e.set), new ou(n, l, o);
}
const wn = {}, Dn = /* @__PURE__ */ new WeakMap();
let Zs;
function au(e, t = !1, o = Zs) {
  if (o) {
    let n = Dn.get(o);
    n || Dn.set(o, n = []), n.push(e);
  }
}
function lu(e, t, o = gt) {
  const { immediate: n, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = o, v = (I) => l ? I : os(I) || l === !1 || l === 0 ? Rs(I, 1) : Rs(I);
  let m, p, w, y, _ = !1, x = !1;
  if (Gt(e) ? (p = () => e.value, _ = os(e)) : so(e) ? (p = () => v(e), _ = !0) : Ze(e) ? (x = !0, _ = e.some((I) => so(I) || os(I)), p = () => e.map((I) => {
    if (Gt(I))
      return I.value;
    if (so(I))
      return v(I);
    if (tt(I))
      return d ? d(I, 2) : I();
  })) : tt(e) ? t ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      Ns();
      try {
        w();
      } finally {
        Ds();
      }
    }
    const I = Zs;
    Zs = m;
    try {
      return d ? d(e, 3, [y]) : e(y);
    } finally {
      Zs = I;
    }
  } : p = bs, t && l) {
    const I = p, L = l === !0 ? 1 / 0 : l;
    p = () => Rs(I(), L);
  }
  const b = Lc(), S = () => {
    m.stop(), b && b.active && nl(b.effects, m);
  };
  if (r && t) {
    const I = t;
    t = (...L) => {
      I(...L), S();
    };
  }
  let O = x ? new Array(e.length).fill(wn) : wn;
  const T = (I) => {
    if (!(!(m.flags & 1) || !m.dirty && !I))
      if (t) {
        const L = m.run();
        if (l || _ || (x ? L.some((A, Q) => Gs(A, O[Q])) : Gs(L, O))) {
          w && w();
          const A = Zs;
          Zs = m;
          try {
            const Q = [
              L,
              // pass undefined as the old value when it's changed for the first time
              O === wn ? void 0 : x && O[0] === wn ? [] : O,
              y
            ];
            O = L, d ? d(t, 3, Q) : (
              // @ts-expect-error
              t(...Q)
            );
          } finally {
            Zs = A;
          }
        }
      } else
        m.run();
  };
  return u && u(T), m = new Oi(p), m.scheduler = c ? () => c(T, !1) : T, y = (I) => au(I, !1, m), w = m.onStop = () => {
    const I = Dn.get(m);
    if (I) {
      if (d)
        d(I, 4);
      else
        for (const L of I) L();
      Dn.delete(m);
    }
  }, t ? n ? T(!0) : O = m.run() : c ? c(T.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function Rs(e, t = 1 / 0, o) {
  if (t <= 0 || !mt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= t))
    return e;
  if (o.set(e, t), t--, Gt(e))
    Rs(e.value, t, o);
  else if (Ze(e))
    for (let n = 0; n < e.length; n++)
      Rs(e[n], t, o);
  else if (To(e) || yo(e))
    e.forEach((n) => {
      Rs(n, t, o);
    });
  else if (Pi(e)) {
    for (const n in e)
      Rs(e[n], t, o);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Rs(e[n], t, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function un(e, t, o, n) {
  try {
    return n ? e(...n) : e();
  } catch (l) {
    Zn(l, t, o);
  }
}
function vs(e, t, o, n) {
  if (tt(e)) {
    const l = un(e, t, o, n);
    return l && Ti(l) && l.catch((r) => {
      Zn(r, t, o);
    }), l;
  }
  if (Ze(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(vs(e[r], t, o, n));
    return l;
  }
}
function Zn(e, t, o, n = !0) {
  const l = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = t && t.appContext.config || gt;
  if (t) {
    let u = t.parent;
    const d = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; u; ) {
      const m = u.ec;
      if (m) {
        for (let p = 0; p < m.length; p++)
          if (m[p](e, d, v) === !1)
            return;
      }
      u = u.parent;
    }
    if (r) {
      Ns(), un(r, null, 10, [
        e,
        d,
        v
      ]), Ds();
      return;
    }
  }
  iu(e, o, l, n, c);
}
function iu(e, t, o, n = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const Jt = [];
let ws = -1;
const wo = [];
let Bs = null, vo = 0;
const Yi = /* @__PURE__ */ Promise.resolve();
let On = null;
function Pt(e) {
  const t = On || Yi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ru(e) {
  let t = ws + 1, o = Jt.length;
  for (; t < o; ) {
    const n = t + o >>> 1, l = Jt[n], r = sn(l);
    r < e || r === e && l.flags & 2 ? t = n + 1 : o = n;
  }
  return t;
}
function vl(e) {
  if (!(e.flags & 1)) {
    const t = sn(e), o = Jt[Jt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= sn(o) ? Jt.push(e) : Jt.splice(ru(t), 0, e), e.flags |= 1, Xi();
  }
}
function Xi() {
  On || (On = Yi.then(er));
}
function cu(e) {
  Ze(e) ? wo.push(...e) : Bs && e.id === -1 ? Bs.splice(vo + 1, 0, e) : e.flags & 1 || (wo.push(e), e.flags |= 1), Xi();
}
function Ll(e, t, o = ws + 1) {
  for (; o < Jt.length; o++) {
    const n = Jt[o];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Jt.splice(o, 1), o--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Zi(e) {
  if (wo.length) {
    const t = [...new Set(wo)].sort(
      (o, n) => sn(o) - sn(n)
    );
    if (wo.length = 0, Bs) {
      Bs.push(...t);
      return;
    }
    for (Bs = t, vo = 0; vo < Bs.length; vo++) {
      const o = Bs[vo];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Bs = null, vo = 0;
  }
}
const sn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function er(e) {
  try {
    for (ws = 0; ws < Jt.length; ws++) {
      const t = Jt[ws];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), un(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ws < Jt.length; ws++) {
      const t = Jt[ws];
      t && (t.flags &= -2);
    }
    ws = -1, Jt.length = 0, Zi(), On = null, (Jt.length || wo.length) && er();
  }
}
let Nt = null, tr = null;
function An(e) {
  const t = Nt;
  return Nt = e, tr = e && e.type.__scopeId || null, t;
}
function g(e, t = Nt, o) {
  if (!t || e._n)
    return e;
  const n = (...l) => {
    n._d && Vn(-1);
    const r = An(t);
    let c;
    try {
      c = e(...l);
    } finally {
      An(r), n._d && Vn(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Tt(e, t) {
  if (Nt === null)
    return e;
  const o = aa(Nt), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [r, c, u, d = gt] = t[l];
    r && (tt(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Rs(c), n.push({
      dir: r,
      instance: o,
      value: c,
      oldValue: void 0,
      arg: u,
      modifiers: d
    }));
  }
  return e;
}
function Js(e, t, o, n) {
  const l = e.dirs, r = t && t.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    r && (u.oldValue = r[c].value);
    let d = u.dir[n];
    d && (Ns(), vs(d, o, 8, [
      e.el,
      u,
      e,
      t
    ]), Ds());
  }
}
const sr = Symbol("_vte"), or = (e) => e.__isTeleport, qo = (e) => e && (e.disabled || e.disabled === ""), Nl = (e) => e && (e.defer || e.defer === ""), Dl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Ol = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ga = (e, t) => {
  const o = e && e.to;
  return bt(o) ? t ? t(o) : null : o;
}, nr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, o, n, l, r, c, u, d, v) {
    const {
      mc: m,
      pc: p,
      pbc: w,
      o: { insert: y, querySelector: _, createText: x, createComment: b }
    } = v, S = qo(t.props);
    let { shapeFlag: O, children: T, dynamicChildren: I } = t;
    if (e == null) {
      const L = t.el = x(""), A = t.anchor = x("");
      y(L, o, n), y(A, o, n);
      const Q = (B, Y) => {
        O & 16 && m(
          T,
          B,
          Y,
          l,
          r,
          c,
          u,
          d
        );
      }, P = () => {
        const B = t.target = Ga(t.props, _), Y = ar(B, t, x, y);
        B && (c !== "svg" && Dl(B) ? c = "svg" : c !== "mathml" && Ol(B) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(B), S || (Q(B, Y), Sn(t, !1)));
      };
      S && (Q(o, A), Sn(t, !0)), Nl(t.props) ? (t.el.__isMounted = !1, qt(() => {
        P(), delete t.el.__isMounted;
      }, r)) : P();
    } else {
      if (Nl(t.props) && e.el.__isMounted === !1) {
        qt(() => {
          nr.process(
            e,
            t,
            o,
            n,
            l,
            r,
            c,
            u,
            d,
            v
          );
        }, r);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const L = t.anchor = e.anchor, A = t.target = e.target, Q = t.targetAnchor = e.targetAnchor, P = qo(e.props), B = P ? o : A, Y = P ? L : Q;
      if (c === "svg" || Dl(A) ? c = "svg" : (c === "mathml" || Ol(A)) && (c = "mathml"), I ? (w(
        e.dynamicChildren,
        I,
        B,
        l,
        r,
        c,
        u
      ), wl(e, t, !0)) : d || p(
        e,
        t,
        B,
        Y,
        l,
        r,
        c,
        u,
        !1
      ), S)
        P ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : _n(
          t,
          o,
          L,
          v,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const ee = t.target = Ga(
          t.props,
          _
        );
        ee && _n(
          t,
          ee,
          null,
          v,
          0
        );
      } else P && _n(
        t,
        A,
        Q,
        v,
        1
      );
      Sn(t, S);
    }
  },
  remove(e, t, o, { um: n, o: { remove: l } }, r) {
    const {
      shapeFlag: c,
      children: u,
      anchor: d,
      targetStart: v,
      targetAnchor: m,
      target: p,
      props: w
    } = e;
    if (p && (l(v), l(m)), r && l(d), c & 16) {
      const y = r || !qo(w);
      for (let _ = 0; _ < u.length; _++) {
        const x = u[_];
        n(
          x,
          t,
          o,
          y,
          !!x.dynamicChildren
        );
      }
    }
  },
  move: _n,
  hydrate: uu
};
function _n(e, t, o, { o: { insert: n }, m: l }, r = 2) {
  r === 0 && n(e.targetAnchor, t, o);
  const { el: c, anchor: u, shapeFlag: d, children: v, props: m } = e, p = r === 2;
  if (p && n(c, t, o), (!p || qo(m)) && d & 16)
    for (let w = 0; w < v.length; w++)
      l(
        v[w],
        t,
        o,
        2
      );
  p && n(u, t, o);
}
function uu(e, t, o, n, l, r, {
  o: { nextSibling: c, parentNode: u, querySelector: d, insert: v, createText: m }
}, p) {
  function w(x, b, S, O) {
    b.anchor = p(
      c(x),
      b,
      u(x),
      o,
      n,
      l,
      r
    ), b.targetStart = S, b.targetAnchor = O;
  }
  const y = t.target = Ga(
    t.props,
    d
  ), _ = qo(t.props);
  if (y) {
    const x = y._lpa || y.firstChild;
    if (t.shapeFlag & 16)
      if (_)
        w(
          e,
          t,
          x,
          x && c(x)
        );
      else {
        t.anchor = c(e);
        let b = x;
        for (; b; ) {
          if (b && b.nodeType === 8) {
            if (b.data === "teleport start anchor")
              t.targetStart = b;
            else if (b.data === "teleport anchor") {
              t.targetAnchor = b, y._lpa = t.targetAnchor && c(t.targetAnchor);
              break;
            }
          }
          b = c(b);
        }
        t.targetAnchor || ar(y, t, m, v), p(
          x && c(x),
          t,
          y,
          o,
          n,
          l,
          r
        );
      }
    Sn(t, _);
  } else _ && t.shapeFlag & 16 && w(e, t, e, c(e));
  return t.anchor && c(t.anchor);
}
const Dt = nr;
function Sn(e, t) {
  const o = e.ctx;
  if (o && o.ut) {
    let n, l;
    for (t ? (n = e.el, l = e.anchor) : (n = e.targetStart, l = e.targetAnchor); n && n !== l; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", o.uid), n = n.nextSibling;
    o.ut();
  }
}
function ar(e, t, o, n) {
  const l = t.targetStart = o(""), r = t.targetAnchor = o("");
  return l[sr] = r, e && (n(l, e), n(r, e)), r;
}
const Ts = Symbol("_leaveCb"), kn = Symbol("_enterCb");
function lr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return rt(() => {
    e.isMounted = !0;
  }), sa(() => {
    e.isUnmounting = !0;
  }), e;
}
const ts = [Function, Array], ir = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ts,
  onEnter: ts,
  onAfterEnter: ts,
  onEnterCancelled: ts,
  // leave
  onBeforeLeave: ts,
  onLeave: ts,
  onAfterLeave: ts,
  onLeaveCancelled: ts,
  // appear
  onBeforeAppear: ts,
  onAppear: ts,
  onAfterAppear: ts,
  onAppearCancelled: ts
}, rr = (e) => {
  const t = e.subTree;
  return t.component ? rr(t.component) : t;
}, du = {
  name: "BaseTransition",
  props: ir,
  setup(e, { slots: t }) {
    const o = kl(), n = lr();
    return () => {
      const l = t.default && pl(t.default(), !0);
      if (!l || !l.length)
        return;
      const r = cr(l), c = it(e), { mode: u } = c;
      if (n.isLeaving)
        return Pa(r);
      const d = Al(r);
      if (!d)
        return Pa(r);
      let v = on(
        d,
        c,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (p) => v = p
      );
      d.type !== Ft && ao(d, v);
      let m = o.subTree && Al(o.subTree);
      if (m && m.type !== Ft && !eo(m, d) && rr(o).type !== Ft) {
        let p = on(
          m,
          c,
          n,
          o
        );
        if (ao(m, p), u === "out-in" && d.type !== Ft)
          return n.isLeaving = !0, p.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete p.afterLeave, m = void 0;
          }, Pa(r);
        u === "in-out" && d.type !== Ft ? p.delayLeave = (w, y, _) => {
          const x = ur(
            n,
            m
          );
          x[String(m.key)] = m, w[Ts] = () => {
            y(), w[Ts] = void 0, delete v.delayedLeave, m = void 0;
          }, v.delayedLeave = () => {
            _(), delete v.delayedLeave, m = void 0;
          };
        } : m = void 0;
      } else m && (m = void 0);
      return r;
    };
  }
};
function cr(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== Ft) {
        t = o;
        break;
      }
  }
  return t;
}
const fu = du;
function ur(e, t) {
  const { leavingVNodes: o } = e;
  let n = o.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), o.set(t.type, n)), n;
}
function on(e, t, o, n, l) {
  const {
    appear: r,
    mode: c,
    persisted: u = !1,
    onBeforeEnter: d,
    onEnter: v,
    onAfterEnter: m,
    onEnterCancelled: p,
    onBeforeLeave: w,
    onLeave: y,
    onAfterLeave: _,
    onLeaveCancelled: x,
    onBeforeAppear: b,
    onAppear: S,
    onAfterAppear: O,
    onAppearCancelled: T
  } = t, I = String(e.key), L = ur(o, e), A = (B, Y) => {
    B && vs(
      B,
      n,
      9,
      Y
    );
  }, Q = (B, Y) => {
    const ee = Y[1];
    A(B, Y), Ze(B) ? B.every((ce) => ce.length <= 1) && ee() : B.length <= 1 && ee();
  }, P = {
    mode: c,
    persisted: u,
    beforeEnter(B) {
      let Y = d;
      if (!o.isMounted)
        if (r)
          Y = b || d;
        else
          return;
      B[Ts] && B[Ts](
        !0
        /* cancelled */
      );
      const ee = L[I];
      ee && eo(e, ee) && ee.el[Ts] && ee.el[Ts](), A(Y, [B]);
    },
    enter(B) {
      let Y = v, ee = m, ce = p;
      if (!o.isMounted)
        if (r)
          Y = S || v, ee = O || m, ce = T || p;
        else
          return;
      let he = !1;
      const te = B[kn] = (K) => {
        he || (he = !0, K ? A(ce, [B]) : A(ee, [B]), P.delayedLeave && P.delayedLeave(), B[kn] = void 0);
      };
      Y ? Q(Y, [B, te]) : te();
    },
    leave(B, Y) {
      const ee = String(e.key);
      if (B[kn] && B[kn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return Y();
      A(w, [B]);
      let ce = !1;
      const he = B[Ts] = (te) => {
        ce || (ce = !0, Y(), te ? A(x, [B]) : A(_, [B]), B[Ts] = void 0, L[ee] === e && delete L[ee]);
      };
      L[ee] = e, y ? Q(y, [B, he]) : he();
    },
    clone(B) {
      const Y = on(
        B,
        t,
        o,
        n,
        l
      );
      return l && l(Y), Y;
    }
  };
  return P;
}
function Pa(e) {
  if (ea(e))
    return e = js(e), e.children = null, e;
}
function Al(e) {
  if (!ea(e))
    return or(e.type) && e.children ? cr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: o } = e;
  if (o) {
    if (t & 16)
      return o[0];
    if (t & 32 && tt(o.default))
      return o.default();
  }
}
function ao(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ao(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function pl(e, t = !1, o) {
  let n = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : r);
    c.type === G ? (c.patchFlag & 128 && l++, n = n.concat(
      pl(c.children, t, u)
    )) : (t || c.type !== Ft) && n.push(u != null ? js(c, { key: u }) : c);
  }
  if (l > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function $e(e, t) {
  return tt(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Mt({ name: e.name }, t, { setup: e })
  ) : e;
}
function dr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Un = /* @__PURE__ */ new WeakMap();
function Ko(e, t, o, n, l = !1) {
  if (Ze(e)) {
    e.forEach(
      (_, x) => Ko(
        _,
        t && (Ze(t) ? t[x] : t),
        o,
        n,
        l
      )
    );
    return;
  }
  if (_o(n) && !l) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Ko(e, t, o, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? aa(n.component) : n.el, c = l ? null : r, { i: u, r: d } = e, v = t && t.r, m = u.refs === gt ? u.refs = {} : u.refs, p = u.setupState, w = it(p), y = p === gt ? Ei : (_) => dt(w, _);
  if (v != null && v !== d) {
    if (Ul(t), bt(v))
      m[v] = null, y(v) && (p[v] = null);
    else if (Gt(v)) {
      v.value = null;
      const _ = t;
      _.k && (m[_.k] = null);
    }
  }
  if (tt(d))
    un(d, u, 12, [c, m]);
  else {
    const _ = bt(d), x = Gt(d);
    if (_ || x) {
      const b = () => {
        if (e.f) {
          const S = _ ? y(d) ? p[d] : m[d] : d.value;
          if (l)
            Ze(S) && nl(S, r);
          else if (Ze(S))
            S.includes(r) || S.push(r);
          else if (_)
            m[d] = [r], y(d) && (p[d] = m[d]);
          else {
            const O = [r];
            d.value = O, e.k && (m[e.k] = O);
          }
        } else _ ? (m[d] = c, y(d) && (p[d] = c)) : x && (d.value = c, e.k && (m[e.k] = c));
      };
      if (c) {
        const S = () => {
          b(), Un.delete(e);
        };
        S.id = -1, Un.set(e, S), qt(S, o);
      } else
        Ul(e), b();
    }
  }
}
function Ul(e) {
  const t = Un.get(e);
  t && (t.flags |= 8, Un.delete(e));
}
Yn().requestIdleCallback;
Yn().cancelIdleCallback;
const _o = (e) => !!e.type.__asyncLoader, ea = (e) => e.type.__isKeepAlive;
function mu(e, t) {
  fr(e, "a", t);
}
function vu(e, t) {
  fr(e, "da", t);
}
function fr(e, t, o = Bt) {
  const n = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (ta(t, n, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      ea(l.parent.vnode) && pu(n, t, o, l), l = l.parent;
  }
}
function pu(e, t, o, n) {
  const l = ta(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Mo(() => {
    nl(n[t], l);
  }, o);
}
function ta(e, t, o = Bt, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = t.__weh || (t.__weh = (...c) => {
      Ns();
      const u = dn(o), d = vs(t, o, e, c);
      return u(), Ds(), d;
    });
    return n ? l.unshift(r) : l.push(r), r;
  }
}
const As = (e) => (t, o = Bt) => {
  (!ln || e === "sp") && ta(e, (...n) => t(...n), o);
}, gu = As("bm"), rt = As("m"), hu = As(
  "bu"
), mr = As("u"), sa = As(
  "bum"
), Mo = As("um"), yu = As(
  "sp"
), wu = As("rtg"), _u = As("rtc");
function ku(e, t = Bt) {
  ta("ec", e, t);
}
const bu = "components", vr = Symbol.for("v-ndc");
function gl(e) {
  return bt(e) ? $u(bu, e, !1) || e : e || vr;
}
function $u(e, t, o = !0, n = !1) {
  const l = Nt || Bt;
  if (l) {
    const r = l.type;
    {
      const u = dd(
        r,
        !1
      );
      if (u && (u === t || u === as(t) || u === Jn(as(t))))
        return r;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      zl(l[e] || r[e], t) || // global registration
      zl(l.appContext[e], t)
    );
    return !c && n ? r : c;
  }
}
function zl(e, t) {
  return e && (e[t] || e[as(t)] || e[Jn(as(t))]);
}
function ye(e, t, o, n) {
  let l;
  const r = o, c = Ze(e);
  if (c || bt(e)) {
    const u = c && so(e);
    let d = !1, v = !1;
    u && (d = !os(e), v = Os(e), e = Xn(e)), l = new Array(e.length);
    for (let m = 0, p = e.length; m < p; m++)
      l[m] = t(
        d ? v ? So(ms(e[m])) : ms(e[m]) : e[m],
        m,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = t(u + 1, u, void 0, r);
  } else if (mt(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (u, d) => t(u, d, void 0, r)
      );
    else {
      const u = Object.keys(e);
      l = new Array(u.length);
      for (let d = 0, v = u.length; d < v; d++) {
        const m = u[d];
        l[d] = t(e[m], m, d, r);
      }
    }
  else
    l = [];
  return l;
}
function Yt(e, t) {
  for (let o = 0; o < t.length; o++) {
    const n = t[o];
    if (Ze(n))
      for (let l = 0; l < n.length; l++)
        e[n[l].name] = n[l].fn;
    else n && (e[n.name] = n.key ? (...l) => {
      const r = n.fn(...l);
      return r && (r.key = n.key), r;
    } : n.fn);
  }
  return e;
}
function ot(e, t, o = {}, n, l) {
  if (Nt.ce || Nt.parent && _o(Nt.parent) && Nt.parent.ce) {
    const v = Object.keys(o).length > 0;
    return t !== "default" && (o.name = t), a(), R(
      G,
      null,
      [k("slot", o, n && n())],
      v ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), a();
  const c = r && pr(r(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = R(
    G,
    {
      key: (u && !fs(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!c && n ? "_fb" : "")
    },
    c || (n ? n() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function pr(e) {
  return e.some((t) => an(t) ? !(t.type === Ft || t.type === G && !pr(t.children)) : !0) ? e : null;
}
const ja = (e) => e ? Nr(e) ? aa(e) : ja(e.parent) : null, Jo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Mt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ja(e.parent),
    $root: (e) => ja(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => hr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      vl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Pt.bind(e.proxy)),
    $watch: (e) => Du.bind(e)
  })
), Ra = (e, t) => e !== gt && !e.__isScriptSetup && dt(e, t), Cu = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: o, setupState: n, data: l, props: r, accessCache: c, type: u, appContext: d } = e;
    if (t[0] !== "$") {
      const w = c[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return n[t];
          case 2:
            return l[t];
          case 4:
            return o[t];
          case 3:
            return r[t];
        }
      else {
        if (Ra(n, t))
          return c[t] = 1, n[t];
        if (l !== gt && dt(l, t))
          return c[t] = 2, l[t];
        if (dt(r, t))
          return c[t] = 3, r[t];
        if (o !== gt && dt(o, t))
          return c[t] = 4, o[t];
        Ha && (c[t] = 0);
      }
    }
    const v = Jo[t];
    let m, p;
    if (v)
      return t === "$attrs" && zt(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (m = u.__cssModules) && (m = m[t])
    )
      return m;
    if (o !== gt && dt(o, t))
      return c[t] = 4, o[t];
    if (
      // global properties
      p = d.config.globalProperties, dt(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, o) {
    const { data: n, setupState: l, ctx: r } = e;
    return Ra(l, t) ? (l[t] = o, !0) : n !== gt && dt(n, t) ? (n[t] = o, !0) : dt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: n, appContext: l, props: r, type: c }
  }, u) {
    let d;
    return !!(o[u] || e !== gt && u[0] !== "$" && dt(e, u) || Ra(t, u) || dt(r, u) || dt(n, u) || dt(Jo, u) || dt(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, t, o) {
    return o.get != null ? e._.accessCache[t] = 0 : dt(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o);
  }
};
function Vl(e) {
  return Ze(e) ? e.reduce(
    (t, o) => (t[o] = null, t),
    {}
  ) : e;
}
let Ha = !0;
function xu(e) {
  const t = hr(e), o = e.proxy, n = e.ctx;
  Ha = !1, t.beforeCreate && Fl(t.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: r,
    methods: c,
    watch: u,
    provide: d,
    inject: v,
    // lifecycle
    created: m,
    beforeMount: p,
    mounted: w,
    beforeUpdate: y,
    updated: _,
    activated: x,
    deactivated: b,
    beforeDestroy: S,
    beforeUnmount: O,
    destroyed: T,
    unmounted: I,
    render: L,
    renderTracked: A,
    renderTriggered: Q,
    errorCaptured: P,
    serverPrefetch: B,
    // public API
    expose: Y,
    inheritAttrs: ee,
    // assets
    components: ce,
    directives: he,
    filters: te
  } = t;
  if (v && Su(v, n, null), c)
    for (const De in c) {
      const oe = c[De];
      tt(oe) && (n[De] = oe.bind(o));
    }
  if (l) {
    const De = l.call(o, o);
    mt(De) && (e.data = io(De));
  }
  if (Ha = !0, r)
    for (const De in r) {
      const oe = r[De], ge = tt(oe) ? oe.bind(o, o) : tt(oe.get) ? oe.get.bind(o, o) : bs, U = !tt(oe) && tt(oe.set) ? oe.set.bind(o) : bs, me = N({
        get: ge,
        set: U
      });
      Object.defineProperty(n, De, {
        enumerable: !0,
        configurable: !0,
        get: () => me.value,
        set: (Re) => me.value = Re
      });
    }
  if (u)
    for (const De in u)
      gr(u[De], n, o, De);
  if (d) {
    const De = tt(d) ? d.call(o) : d;
    Reflect.ownKeys(De).forEach((oe) => {
      Ru(oe, De[oe]);
    });
  }
  m && Fl(m, e, "c");
  function ie(De, oe) {
    Ze(oe) ? oe.forEach((ge) => De(ge.bind(o))) : oe && De(oe.bind(o));
  }
  if (ie(gu, p), ie(rt, w), ie(hu, y), ie(mr, _), ie(mu, x), ie(vu, b), ie(ku, P), ie(_u, A), ie(wu, Q), ie(sa, O), ie(Mo, I), ie(yu, B), Ze(Y))
    if (Y.length) {
      const De = e.exposed || (e.exposed = {});
      Y.forEach((oe) => {
        Object.defineProperty(De, oe, {
          get: () => o[oe],
          set: (ge) => o[oe] = ge,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  L && e.render === bs && (e.render = L), ee != null && (e.inheritAttrs = ee), ce && (e.components = ce), he && (e.directives = he), B && dr(e);
}
function Su(e, t, o = bs) {
  Ze(e) && (e = qa(e));
  for (const n in e) {
    const l = e[n];
    let r;
    mt(l) ? "default" in l ? r = In(
      l.from || n,
      l.default,
      !0
    ) : r = In(l.from || n) : r = In(l), Gt(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : t[n] = r;
  }
}
function Fl(e, t, o) {
  vs(
    Ze(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function gr(e, t, o, n) {
  let l = n.includes(".") ? _r(o, n) : () => o[n];
  if (bt(e)) {
    const r = t[e];
    tt(r) && kt(l, r);
  } else if (tt(e))
    kt(l, e.bind(o));
  else if (mt(e))
    if (Ze(e))
      e.forEach((r) => gr(r, t, o, n));
    else {
      const r = tt(e.handler) ? e.handler.bind(o) : t[e.handler];
      tt(r) && kt(l, r, e);
    }
}
function hr(e) {
  const t = e.type, { mixins: o, extends: n } = t, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(t);
  let d;
  return u ? d = u : !l.length && !o && !n ? d = t : (d = {}, l.length && l.forEach(
    (v) => zn(d, v, c, !0)
  ), zn(d, t, c)), mt(t) && r.set(t, d), d;
}
function zn(e, t, o, n = !1) {
  const { mixins: l, extends: r } = t;
  r && zn(e, r, o, !0), l && l.forEach(
    (c) => zn(e, c, o, !0)
  );
  for (const c in t)
    if (!(n && c === "expose")) {
      const u = Iu[c] || o && o[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const Iu = {
  data: Bl,
  props: Wl,
  emits: Wl,
  // objects
  methods: Bo,
  computed: Bo,
  // lifecycle
  beforeCreate: Ht,
  created: Ht,
  beforeMount: Ht,
  mounted: Ht,
  beforeUpdate: Ht,
  updated: Ht,
  beforeDestroy: Ht,
  beforeUnmount: Ht,
  destroyed: Ht,
  unmounted: Ht,
  activated: Ht,
  deactivated: Ht,
  errorCaptured: Ht,
  serverPrefetch: Ht,
  // assets
  components: Bo,
  directives: Bo,
  // watch
  watch: Tu,
  // provide / inject
  provide: Bl,
  inject: Eu
};
function Bl(e, t) {
  return t ? e ? function() {
    return Mt(
      tt(e) ? e.call(this, this) : e,
      tt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Eu(e, t) {
  return Bo(qa(e), qa(t));
}
function qa(e) {
  if (Ze(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++)
      t[e[o]] = e[o];
    return t;
  }
  return e;
}
function Ht(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Bo(e, t) {
  return e ? Mt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Wl(e, t) {
  return e ? Ze(e) && Ze(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Mt(
    /* @__PURE__ */ Object.create(null),
    Vl(e),
    Vl(t ?? {})
  ) : t;
}
function Tu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = Mt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    o[n] = Ht(e[n], t[n]);
  return o;
}
function yr() {
  return {
    app: null,
    config: {
      isNativeTag: Ei,
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
let Mu = 0;
function Pu(e, t) {
  return function(n, l = null) {
    tt(n) || (n = Mt({}, n)), l != null && !mt(l) && (l = null);
    const r = yr(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const v = r.app = {
      _uid: Mu++,
      _component: n,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: md,
      get config() {
        return r.config;
      },
      set config(m) {
      },
      use(m, ...p) {
        return c.has(m) || (m && tt(m.install) ? (c.add(m), m.install(v, ...p)) : tt(m) && (c.add(m), m(v, ...p))), v;
      },
      mixin(m) {
        return r.mixins.includes(m) || r.mixins.push(m), v;
      },
      component(m, p) {
        return p ? (r.components[m] = p, v) : r.components[m];
      },
      directive(m, p) {
        return p ? (r.directives[m] = p, v) : r.directives[m];
      },
      mount(m, p, w) {
        if (!d) {
          const y = v._ceVNode || k(n, l);
          return y.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(y, m, w), d = !0, v._container = m, m.__vue_app__ = v, aa(y.component);
        }
      },
      onUnmount(m) {
        u.push(m);
      },
      unmount() {
        d && (vs(
          u,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(m, p) {
        return r.provides[m] = p, v;
      },
      runWithContext(m) {
        const p = ko;
        ko = v;
        try {
          return m();
        } finally {
          ko = p;
        }
      }
    };
    return v;
  };
}
let ko = null;
function Ru(e, t) {
  if (Bt) {
    let o = Bt.provides;
    const n = Bt.parent && Bt.parent.provides;
    n === o && (o = Bt.provides = Object.create(n)), o[e] = t;
  }
}
function In(e, t, o = !1) {
  const n = kl();
  if (n || ko) {
    let l = ko ? ko._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && tt(t) ? t.call(n && n.proxy) : t;
  }
}
const Lu = Symbol.for("v-scx"), Nu = () => In(Lu);
function kt(e, t, o) {
  return wr(e, t, o);
}
function wr(e, t, o = gt) {
  const { immediate: n, deep: l, flush: r, once: c } = o, u = Mt({}, o), d = t && n || !t && r !== "post";
  let v;
  if (ln) {
    if (r === "sync") {
      const y = Nu();
      v = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!d) {
      const y = () => {
      };
      return y.stop = bs, y.resume = bs, y.pause = bs, y;
    }
  }
  const m = Bt;
  u.call = (y, _, x) => vs(y, m, _, x);
  let p = !1;
  r === "post" ? u.scheduler = (y) => {
    qt(y, m && m.suspense);
  } : r !== "sync" && (p = !0, u.scheduler = (y, _) => {
    _ ? y() : vl(y);
  }), u.augmentJob = (y) => {
    t && (y.flags |= 4), p && (y.flags |= 2, m && (y.id = m.uid, y.i = m));
  };
  const w = lu(e, t, u);
  return ln && (v ? v.push(w) : d && w()), w;
}
function Du(e, t, o) {
  const n = this.proxy, l = bt(e) ? e.includes(".") ? _r(n, e) : () => n[e] : e.bind(n, n);
  let r;
  tt(t) ? r = t : (r = t.handler, o = t);
  const c = dn(this), u = wr(l, r.bind(n), o);
  return c(), u;
}
function _r(e, t) {
  const o = t.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < o.length && n; l++)
      n = n[o[l]];
    return n;
  };
}
const Ou = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${as(t)}Modifiers`] || e[`${qs(t)}Modifiers`];
function Au(e, t, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || gt;
  let l = o;
  const r = t.startsWith("update:"), c = r && Ou(n, t.slice(7));
  c && (c.trim && (l = o.map((m) => bt(m) ? m.trim() : m)), c.number && (l = o.map(Qn)));
  let u, d = n[u = Sa(t)] || // also try camelCase event handler (#2249)
  n[u = Sa(as(t))];
  !d && r && (d = n[u = Sa(qs(t))]), d && vs(
    d,
    e,
    6,
    l
  );
  const v = n[u + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, vs(
      v,
      e,
      6,
      l
    );
  }
}
const Uu = /* @__PURE__ */ new WeakMap();
function kr(e, t, o = !1) {
  const n = o ? Uu : t.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let c = {}, u = !1;
  if (!tt(e)) {
    const d = (v) => {
      const m = kr(v, t, !0);
      m && (u = !0, Mt(c, m));
    };
    !o && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (mt(e) && n.set(e, null), null) : (Ze(r) ? r.forEach((d) => c[d] = null) : Mt(c, r), mt(e) && n.set(e, c), c);
}
function oa(e, t) {
  return !e || !qn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), dt(e, t[0].toLowerCase() + t.slice(1)) || dt(e, qs(t)) || dt(e, t));
}
function Gl(e) {
  const {
    type: t,
    vnode: o,
    proxy: n,
    withProxy: l,
    propsOptions: [r],
    slots: c,
    attrs: u,
    emit: d,
    render: v,
    renderCache: m,
    props: p,
    data: w,
    setupState: y,
    ctx: _,
    inheritAttrs: x
  } = e, b = An(e);
  let S, O;
  try {
    if (o.shapeFlag & 4) {
      const I = l || n, L = I;
      S = ks(
        v.call(
          L,
          I,
          m,
          p,
          y,
          w,
          _
        )
      ), O = u;
    } else {
      const I = t;
      S = ks(
        I.length > 1 ? I(
          p,
          { attrs: u, slots: c, emit: d }
        ) : I(
          p,
          null
        )
      ), O = t.props ? u : zu(u);
    }
  } catch (I) {
    Qo.length = 0, Zn(I, e, 1), S = k(Ft);
  }
  let T = S;
  if (O && x !== !1) {
    const I = Object.keys(O), { shapeFlag: L } = T;
    I.length && L & 7 && (r && I.some(ol) && (O = Vu(
      O,
      r
    )), T = js(T, O, !1, !0));
  }
  return o.dirs && (T = js(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(o.dirs) : o.dirs), o.transition && ao(T, o.transition), S = T, An(b), S;
}
const zu = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || qn(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, Vu = (e, t) => {
  const o = {};
  for (const n in e)
    (!ol(n) || !(n.slice(9) in t)) && (o[n] = e[n]);
  return o;
};
function Fu(e, t, o) {
  const { props: n, children: l, component: r } = e, { props: c, children: u, patchFlag: d } = t, v = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return n ? jl(n, c, v) : !!c;
    if (d & 8) {
      const m = t.dynamicProps;
      for (let p = 0; p < m.length; p++) {
        const w = m[p];
        if (c[w] !== n[w] && !oa(v, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : n === c ? !1 : n ? c ? jl(n, c, v) : !0 : !!c;
  return !1;
}
function jl(e, t, o) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < n.length; l++) {
    const r = n[l];
    if (t[r] !== e[r] && !oa(o, r))
      return !0;
  }
  return !1;
}
function Bu({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const br = {}, $r = () => Object.create(br), Cr = (e) => Object.getPrototypeOf(e) === br;
function Wu(e, t, o, n = !1) {
  const l = {}, r = $r();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), xr(e, t, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = n ? l : Xc(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function Gu(e, t, o, n) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: c }
  } = e, u = it(l), [d] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const m = e.vnode.dynamicProps;
      for (let p = 0; p < m.length; p++) {
        let w = m[p];
        if (oa(e.emitsOptions, w))
          continue;
        const y = t[w];
        if (d)
          if (dt(r, w))
            y !== r[w] && (r[w] = y, v = !0);
          else {
            const _ = as(w);
            l[_] = Ka(
              d,
              u,
              _,
              y,
              e,
              !1
            );
          }
        else
          y !== r[w] && (r[w] = y, v = !0);
      }
    }
  } else {
    xr(e, t, l, r) && (v = !0);
    let m;
    for (const p in u)
      (!t || // for camelCase
      !dt(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((m = qs(p)) === p || !dt(t, m))) && (d ? o && // for camelCase
      (o[p] !== void 0 || // for kebab-case
      o[m] !== void 0) && (l[p] = Ka(
        d,
        u,
        p,
        void 0,
        e,
        !0
      )) : delete l[p]);
    if (r !== u)
      for (const p in r)
        (!t || !dt(t, p)) && (delete r[p], v = !0);
  }
  v && Ps(e.attrs, "set", "");
}
function xr(e, t, o, n) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (Go(d))
        continue;
      const v = t[d];
      let m;
      l && dt(l, m = as(d)) ? !r || !r.includes(m) ? o[m] = v : (u || (u = {}))[m] = v : oa(e.emitsOptions, d) || (!(d in n) || v !== n[d]) && (n[d] = v, c = !0);
    }
  if (r) {
    const d = it(o), v = u || gt;
    for (let m = 0; m < r.length; m++) {
      const p = r[m];
      o[p] = Ka(
        l,
        d,
        p,
        v[p],
        e,
        !dt(v, p)
      );
    }
  }
  return c;
}
function Ka(e, t, o, n, l, r) {
  const c = e[o];
  if (c != null) {
    const u = dt(c, "default");
    if (u && n === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && tt(d)) {
        const { propsDefaults: v } = l;
        if (o in v)
          n = v[o];
        else {
          const m = dn(l);
          n = v[o] = d.call(
            null,
            t
          ), m();
        }
      } else
        n = d;
      l.ce && l.ce._setProp(o, n);
    }
    c[
      0
      /* shouldCast */
    ] && (r && !u ? n = !1 : c[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === qs(o)) && (n = !0));
  }
  return n;
}
const ju = /* @__PURE__ */ new WeakMap();
function Sr(e, t, o = !1) {
  const n = o ? ju : t.propsCache, l = n.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let d = !1;
  if (!tt(e)) {
    const m = (p) => {
      d = !0;
      const [w, y] = Sr(p, t, !0);
      Mt(c, w), y && u.push(...y);
    };
    !o && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  if (!r && !d)
    return mt(e) && n.set(e, ho), ho;
  if (Ze(r))
    for (let m = 0; m < r.length; m++) {
      const p = as(r[m]);
      Hl(p) && (c[p] = gt);
    }
  else if (r)
    for (const m in r) {
      const p = as(m);
      if (Hl(p)) {
        const w = r[m], y = c[p] = Ze(w) || tt(w) ? { type: w } : Mt({}, w), _ = y.type;
        let x = !1, b = !0;
        if (Ze(_))
          for (let S = 0; S < _.length; ++S) {
            const O = _[S], T = tt(O) && O.name;
            if (T === "Boolean") {
              x = !0;
              break;
            } else T === "String" && (b = !1);
          }
        else
          x = tt(_) && _.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = x, y[
          1
          /* shouldCastTrue */
        ] = b, (x || dt(y, "default")) && u.push(p);
      }
    }
  const v = [c, u];
  return mt(e) && n.set(e, v), v;
}
function Hl(e) {
  return e[0] !== "$" && !Go(e);
}
const hl = (e) => e === "_" || e === "_ctx" || e === "$stable", yl = (e) => Ze(e) ? e.map(ks) : [ks(e)], Hu = (e, t, o) => {
  if (t._n)
    return t;
  const n = g((...l) => yl(t(...l)), o);
  return n._c = !1, n;
}, Ir = (e, t, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (hl(l)) continue;
    const r = e[l];
    if (tt(r))
      t[l] = Hu(l, r, n);
    else if (r != null) {
      const c = yl(r);
      t[l] = () => c;
    }
  }
}, Er = (e, t) => {
  const o = yl(t);
  e.slots.default = () => o;
}, Tr = (e, t, o) => {
  for (const n in t)
    (o || !hl(n)) && (e[n] = t[n]);
}, qu = (e, t, o) => {
  const n = e.slots = $r();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (Tr(n, t, o), o && Ri(n, "_", l, !0)) : Ir(t, n);
  } else t && Er(e, t);
}, Ku = (e, t, o) => {
  const { vnode: n, slots: l } = e;
  let r = !0, c = gt;
  if (n.shapeFlag & 32) {
    const u = t._;
    u ? o && u === 1 ? r = !1 : Tr(l, t, o) : (r = !t.$stable, Ir(t, l)), c = t;
  } else t && (Er(e, t), c = { default: 1 });
  if (r)
    for (const u in l)
      !hl(u) && c[u] == null && delete l[u];
}, qt = Zu;
function Ju(e) {
  return Qu(e);
}
function Qu(e, t) {
  const o = Yn();
  o.__VUE__ = !0;
  const {
    insert: n,
    remove: l,
    patchProp: r,
    createElement: c,
    createText: u,
    createComment: d,
    setText: v,
    setElementText: m,
    parentNode: p,
    nextSibling: w,
    setScopeId: y = bs,
    insertStaticContent: _
  } = e, x = (D, q, ue, Ee = null, _e = null, ke = null, Ne = void 0, Oe = null, Me = !!q.dynamicChildren) => {
    if (D === q)
      return;
    D && !eo(D, q) && (Ee = E(D), Re(D, _e, ke, !0), D = null), q.patchFlag === -2 && (Me = !1, q.dynamicChildren = null);
    const { type: xe, ref: je, shapeFlag: ze } = q;
    switch (xe) {
      case na:
        b(D, q, ue, Ee);
        break;
      case Ft:
        S(D, q, ue, Ee);
        break;
      case Na:
        D == null && O(q, ue, Ee, Ne);
        break;
      case G:
        ce(
          D,
          q,
          ue,
          Ee,
          _e,
          ke,
          Ne,
          Oe,
          Me
        );
        break;
      default:
        ze & 1 ? L(
          D,
          q,
          ue,
          Ee,
          _e,
          ke,
          Ne,
          Oe,
          Me
        ) : ze & 6 ? he(
          D,
          q,
          ue,
          Ee,
          _e,
          ke,
          Ne,
          Oe,
          Me
        ) : (ze & 64 || ze & 128) && xe.process(
          D,
          q,
          ue,
          Ee,
          _e,
          ke,
          Ne,
          Oe,
          Me,
          Ve
        );
    }
    je != null && _e ? Ko(je, D && D.ref, ke, q || D, !q) : je == null && D && D.ref != null && Ko(D.ref, null, ke, D, !0);
  }, b = (D, q, ue, Ee) => {
    if (D == null)
      n(
        q.el = u(q.children),
        ue,
        Ee
      );
    else {
      const _e = q.el = D.el;
      q.children !== D.children && v(_e, q.children);
    }
  }, S = (D, q, ue, Ee) => {
    D == null ? n(
      q.el = d(q.children || ""),
      ue,
      Ee
    ) : q.el = D.el;
  }, O = (D, q, ue, Ee) => {
    [D.el, D.anchor] = _(
      D.children,
      q,
      ue,
      Ee,
      D.el,
      D.anchor
    );
  }, T = ({ el: D, anchor: q }, ue, Ee) => {
    let _e;
    for (; D && D !== q; )
      _e = w(D), n(D, ue, Ee), D = _e;
    n(q, ue, Ee);
  }, I = ({ el: D, anchor: q }) => {
    let ue;
    for (; D && D !== q; )
      ue = w(D), l(D), D = ue;
    l(q);
  }, L = (D, q, ue, Ee, _e, ke, Ne, Oe, Me) => {
    if (q.type === "svg" ? Ne = "svg" : q.type === "math" && (Ne = "mathml"), D == null)
      A(
        q,
        ue,
        Ee,
        _e,
        ke,
        Ne,
        Oe,
        Me
      );
    else {
      const xe = D.el && D.el._isVueCE ? D.el : null;
      try {
        xe && xe._beginPatch(), B(
          D,
          q,
          _e,
          ke,
          Ne,
          Oe,
          Me
        );
      } finally {
        xe && xe._endPatch();
      }
    }
  }, A = (D, q, ue, Ee, _e, ke, Ne, Oe) => {
    let Me, xe;
    const { props: je, shapeFlag: ze, transition: pe, dirs: J } = D;
    if (Me = D.el = c(
      D.type,
      ke,
      je && je.is,
      je
    ), ze & 8 ? m(Me, D.children) : ze & 16 && P(
      D.children,
      Me,
      null,
      Ee,
      _e,
      La(D, ke),
      Ne,
      Oe
    ), J && Js(D, null, Ee, "created"), Q(Me, D, D.scopeId, Ne, Ee), je) {
      for (const be in je)
        be !== "value" && !Go(be) && r(Me, be, null, je[be], ke, Ee);
      "value" in je && r(Me, "value", null, je.value, ke), (xe = je.onVnodeBeforeMount) && gs(xe, Ee, D);
    }
    J && Js(D, null, Ee, "beforeMount");
    const We = Yu(_e, pe);
    We && pe.beforeEnter(Me), n(Me, q, ue), ((xe = je && je.onVnodeMounted) || We || J) && qt(() => {
      xe && gs(xe, Ee, D), We && pe.enter(Me), J && Js(D, null, Ee, "mounted");
    }, _e);
  }, Q = (D, q, ue, Ee, _e) => {
    if (ue && y(D, ue), Ee)
      for (let ke = 0; ke < Ee.length; ke++)
        y(D, Ee[ke]);
    if (_e) {
      let ke = _e.subTree;
      if (q === ke || Pr(ke.type) && (ke.ssContent === q || ke.ssFallback === q)) {
        const Ne = _e.vnode;
        Q(
          D,
          Ne,
          Ne.scopeId,
          Ne.slotScopeIds,
          _e.parent
        );
      }
    }
  }, P = (D, q, ue, Ee, _e, ke, Ne, Oe, Me = 0) => {
    for (let xe = Me; xe < D.length; xe++) {
      const je = D[xe] = Oe ? Ws(D[xe]) : ks(D[xe]);
      x(
        null,
        je,
        q,
        ue,
        Ee,
        _e,
        ke,
        Ne,
        Oe
      );
    }
  }, B = (D, q, ue, Ee, _e, ke, Ne) => {
    const Oe = q.el = D.el;
    let { patchFlag: Me, dynamicChildren: xe, dirs: je } = q;
    Me |= D.patchFlag & 16;
    const ze = D.props || gt, pe = q.props || gt;
    let J;
    if (ue && Qs(ue, !1), (J = pe.onVnodeBeforeUpdate) && gs(J, ue, q, D), je && Js(q, D, ue, "beforeUpdate"), ue && Qs(ue, !0), (ze.innerHTML && pe.innerHTML == null || ze.textContent && pe.textContent == null) && m(Oe, ""), xe ? Y(
      D.dynamicChildren,
      xe,
      Oe,
      ue,
      Ee,
      La(q, _e),
      ke
    ) : Ne || oe(
      D,
      q,
      Oe,
      null,
      ue,
      Ee,
      La(q, _e),
      ke,
      !1
    ), Me > 0) {
      if (Me & 16)
        ee(Oe, ze, pe, ue, _e);
      else if (Me & 2 && ze.class !== pe.class && r(Oe, "class", null, pe.class, _e), Me & 4 && r(Oe, "style", ze.style, pe.style, _e), Me & 8) {
        const We = q.dynamicProps;
        for (let be = 0; be < We.length; be++) {
          const Qe = We[be], Ae = ze[Qe], Pe = pe[Qe];
          (Pe !== Ae || Qe === "value") && r(Oe, Qe, Ae, Pe, _e, ue);
        }
      }
      Me & 1 && D.children !== q.children && m(Oe, q.children);
    } else !Ne && xe == null && ee(Oe, ze, pe, ue, _e);
    ((J = pe.onVnodeUpdated) || je) && qt(() => {
      J && gs(J, ue, q, D), je && Js(q, D, ue, "updated");
    }, Ee);
  }, Y = (D, q, ue, Ee, _e, ke, Ne) => {
    for (let Oe = 0; Oe < q.length; Oe++) {
      const Me = D[Oe], xe = q[Oe], je = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Me.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Me.type === G || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !eo(Me, xe) || // - In the case of a component, it could contain anything.
        Me.shapeFlag & 198) ? p(Me.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ue
        )
      );
      x(
        Me,
        xe,
        je,
        null,
        Ee,
        _e,
        ke,
        Ne,
        !0
      );
    }
  }, ee = (D, q, ue, Ee, _e) => {
    if (q !== ue) {
      if (q !== gt)
        for (const ke in q)
          !Go(ke) && !(ke in ue) && r(
            D,
            ke,
            q[ke],
            null,
            _e,
            Ee
          );
      for (const ke in ue) {
        if (Go(ke)) continue;
        const Ne = ue[ke], Oe = q[ke];
        Ne !== Oe && ke !== "value" && r(D, ke, Oe, Ne, _e, Ee);
      }
      "value" in ue && r(D, "value", q.value, ue.value, _e);
    }
  }, ce = (D, q, ue, Ee, _e, ke, Ne, Oe, Me) => {
    const xe = q.el = D ? D.el : u(""), je = q.anchor = D ? D.anchor : u("");
    let { patchFlag: ze, dynamicChildren: pe, slotScopeIds: J } = q;
    J && (Oe = Oe ? Oe.concat(J) : J), D == null ? (n(xe, ue, Ee), n(je, ue, Ee), P(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      q.children || [],
      ue,
      je,
      _e,
      ke,
      Ne,
      Oe,
      Me
    )) : ze > 0 && ze & 64 && pe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    D.dynamicChildren ? (Y(
      D.dynamicChildren,
      pe,
      ue,
      _e,
      ke,
      Ne,
      Oe
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (q.key != null || _e && q === _e.subTree) && wl(
      D,
      q,
      !0
      /* shallow */
    )) : oe(
      D,
      q,
      ue,
      je,
      _e,
      ke,
      Ne,
      Oe,
      Me
    );
  }, he = (D, q, ue, Ee, _e, ke, Ne, Oe, Me) => {
    q.slotScopeIds = Oe, D == null ? q.shapeFlag & 512 ? _e.ctx.activate(
      q,
      ue,
      Ee,
      Ne,
      Me
    ) : te(
      q,
      ue,
      Ee,
      _e,
      ke,
      Ne,
      Me
    ) : K(D, q, Me);
  }, te = (D, q, ue, Ee, _e, ke, Ne) => {
    const Oe = D.component = ld(
      D,
      Ee,
      _e
    );
    if (ea(D) && (Oe.ctx.renderer = Ve), id(Oe, !1, Ne), Oe.asyncDep) {
      if (_e && _e.registerDep(Oe, ie, Ne), !D.el) {
        const Me = Oe.subTree = k(Ft);
        S(null, Me, q, ue), D.placeholder = Me.el;
      }
    } else
      ie(
        Oe,
        D,
        q,
        ue,
        _e,
        ke,
        Ne
      );
  }, K = (D, q, ue) => {
    const Ee = q.component = D.component;
    if (Fu(D, q, ue))
      if (Ee.asyncDep && !Ee.asyncResolved) {
        De(Ee, q, ue);
        return;
      } else
        Ee.next = q, Ee.update();
    else
      q.el = D.el, Ee.vnode = q;
  }, ie = (D, q, ue, Ee, _e, ke, Ne) => {
    const Oe = () => {
      if (D.isMounted) {
        let { next: ze, bu: pe, u: J, parent: We, vnode: be } = D;
        {
          const de = Mr(D);
          if (de) {
            ze && (ze.el = be.el, De(D, ze, Ne)), de.asyncDep.then(() => {
              D.isUnmounted || Oe();
            });
            return;
          }
        }
        let Qe = ze, Ae;
        Qs(D, !1), ze ? (ze.el = be.el, De(D, ze, Ne)) : ze = be, pe && xn(pe), (Ae = ze.props && ze.props.onVnodeBeforeUpdate) && gs(Ae, We, ze, be), Qs(D, !0);
        const Pe = Gl(D), W = D.subTree;
        D.subTree = Pe, x(
          W,
          Pe,
          // parent may have changed if it's in a teleport
          p(W.el),
          // anchor may have changed if it's in a fragment
          E(W),
          D,
          _e,
          ke
        ), ze.el = Pe.el, Qe === null && Bu(D, Pe.el), J && qt(J, _e), (Ae = ze.props && ze.props.onVnodeUpdated) && qt(
          () => gs(Ae, We, ze, be),
          _e
        );
      } else {
        let ze;
        const { el: pe, props: J } = q, { bm: We, m: be, parent: Qe, root: Ae, type: Pe } = D, W = _o(q);
        Qs(D, !1), We && xn(We), !W && (ze = J && J.onVnodeBeforeMount) && gs(ze, Qe, q), Qs(D, !0);
        {
          Ae.ce && // @ts-expect-error _def is private
          Ae.ce._def.shadowRoot !== !1 && Ae.ce._injectChildStyle(Pe);
          const de = D.subTree = Gl(D);
          x(
            null,
            de,
            ue,
            Ee,
            D,
            _e,
            ke
          ), q.el = de.el;
        }
        if (be && qt(be, _e), !W && (ze = J && J.onVnodeMounted)) {
          const de = q;
          qt(
            () => gs(ze, Qe, de),
            _e
          );
        }
        (q.shapeFlag & 256 || Qe && _o(Qe.vnode) && Qe.vnode.shapeFlag & 256) && D.a && qt(D.a, _e), D.isMounted = !0, q = ue = Ee = null;
      }
    };
    D.scope.on();
    const Me = D.effect = new Oi(Oe);
    D.scope.off();
    const xe = D.update = Me.run.bind(Me), je = D.job = Me.runIfDirty.bind(Me);
    je.i = D, je.id = D.uid, Me.scheduler = () => vl(je), Qs(D, !0), xe();
  }, De = (D, q, ue) => {
    q.component = D;
    const Ee = D.vnode.props;
    D.vnode = q, D.next = null, Gu(D, q.props, Ee, ue), Ku(D, q.children, ue), Ns(), Ll(D), Ds();
  }, oe = (D, q, ue, Ee, _e, ke, Ne, Oe, Me = !1) => {
    const xe = D && D.children, je = D ? D.shapeFlag : 0, ze = q.children, { patchFlag: pe, shapeFlag: J } = q;
    if (pe > 0) {
      if (pe & 128) {
        U(
          xe,
          ze,
          ue,
          Ee,
          _e,
          ke,
          Ne,
          Oe,
          Me
        );
        return;
      } else if (pe & 256) {
        ge(
          xe,
          ze,
          ue,
          Ee,
          _e,
          ke,
          Ne,
          Oe,
          Me
        );
        return;
      }
    }
    J & 8 ? (je & 16 && X(xe, _e, ke), ze !== xe && m(ue, ze)) : je & 16 ? J & 16 ? U(
      xe,
      ze,
      ue,
      Ee,
      _e,
      ke,
      Ne,
      Oe,
      Me
    ) : X(xe, _e, ke, !0) : (je & 8 && m(ue, ""), J & 16 && P(
      ze,
      ue,
      Ee,
      _e,
      ke,
      Ne,
      Oe,
      Me
    ));
  }, ge = (D, q, ue, Ee, _e, ke, Ne, Oe, Me) => {
    D = D || ho, q = q || ho;
    const xe = D.length, je = q.length, ze = Math.min(xe, je);
    let pe;
    for (pe = 0; pe < ze; pe++) {
      const J = q[pe] = Me ? Ws(q[pe]) : ks(q[pe]);
      x(
        D[pe],
        J,
        ue,
        null,
        _e,
        ke,
        Ne,
        Oe,
        Me
      );
    }
    xe > je ? X(
      D,
      _e,
      ke,
      !0,
      !1,
      ze
    ) : P(
      q,
      ue,
      Ee,
      _e,
      ke,
      Ne,
      Oe,
      Me,
      ze
    );
  }, U = (D, q, ue, Ee, _e, ke, Ne, Oe, Me) => {
    let xe = 0;
    const je = q.length;
    let ze = D.length - 1, pe = je - 1;
    for (; xe <= ze && xe <= pe; ) {
      const J = D[xe], We = q[xe] = Me ? Ws(q[xe]) : ks(q[xe]);
      if (eo(J, We))
        x(
          J,
          We,
          ue,
          null,
          _e,
          ke,
          Ne,
          Oe,
          Me
        );
      else
        break;
      xe++;
    }
    for (; xe <= ze && xe <= pe; ) {
      const J = D[ze], We = q[pe] = Me ? Ws(q[pe]) : ks(q[pe]);
      if (eo(J, We))
        x(
          J,
          We,
          ue,
          null,
          _e,
          ke,
          Ne,
          Oe,
          Me
        );
      else
        break;
      ze--, pe--;
    }
    if (xe > ze) {
      if (xe <= pe) {
        const J = pe + 1, We = J < je ? q[J].el : Ee;
        for (; xe <= pe; )
          x(
            null,
            q[xe] = Me ? Ws(q[xe]) : ks(q[xe]),
            ue,
            We,
            _e,
            ke,
            Ne,
            Oe,
            Me
          ), xe++;
      }
    } else if (xe > pe)
      for (; xe <= ze; )
        Re(D[xe], _e, ke, !0), xe++;
    else {
      const J = xe, We = xe, be = /* @__PURE__ */ new Map();
      for (xe = We; xe <= pe; xe++) {
        const F = q[xe] = Me ? Ws(q[xe]) : ks(q[xe]);
        F.key != null && be.set(F.key, xe);
      }
      let Qe, Ae = 0;
      const Pe = pe - We + 1;
      let W = !1, de = 0;
      const ae = new Array(Pe);
      for (xe = 0; xe < Pe; xe++) ae[xe] = 0;
      for (xe = J; xe <= ze; xe++) {
        const F = D[xe];
        if (Ae >= Pe) {
          Re(F, _e, ke, !0);
          continue;
        }
        let V;
        if (F.key != null)
          V = be.get(F.key);
        else
          for (Qe = We; Qe <= pe; Qe++)
            if (ae[Qe - We] === 0 && eo(F, q[Qe])) {
              V = Qe;
              break;
            }
        V === void 0 ? Re(F, _e, ke, !0) : (ae[V - We] = xe + 1, V >= de ? de = V : W = !0, x(
          F,
          q[V],
          ue,
          null,
          _e,
          ke,
          Ne,
          Oe,
          Me
        ), Ae++);
      }
      const Ke = W ? Xu(ae) : ho;
      for (Qe = Ke.length - 1, xe = Pe - 1; xe >= 0; xe--) {
        const F = We + xe, V = q[F], se = q[F + 1], ve = F + 1 < je ? (
          // #13559, fallback to el placeholder for unresolved async component
          se.el || se.placeholder
        ) : Ee;
        ae[xe] === 0 ? x(
          null,
          V,
          ue,
          ve,
          _e,
          ke,
          Ne,
          Oe,
          Me
        ) : W && (Qe < 0 || xe !== Ke[Qe] ? me(V, ue, ve, 2) : Qe--);
      }
    }
  }, me = (D, q, ue, Ee, _e = null) => {
    const { el: ke, type: Ne, transition: Oe, children: Me, shapeFlag: xe } = D;
    if (xe & 6) {
      me(D.component.subTree, q, ue, Ee);
      return;
    }
    if (xe & 128) {
      D.suspense.move(q, ue, Ee);
      return;
    }
    if (xe & 64) {
      Ne.move(D, q, ue, Ve);
      return;
    }
    if (Ne === G) {
      n(ke, q, ue);
      for (let ze = 0; ze < Me.length; ze++)
        me(Me[ze], q, ue, Ee);
      n(D.anchor, q, ue);
      return;
    }
    if (Ne === Na) {
      T(D, q, ue);
      return;
    }
    if (Ee !== 2 && xe & 1 && Oe)
      if (Ee === 0)
        Oe.beforeEnter(ke), n(ke, q, ue), qt(() => Oe.enter(ke), _e);
      else {
        const { leave: ze, delayLeave: pe, afterLeave: J } = Oe, We = () => {
          D.ctx.isUnmounted ? l(ke) : n(ke, q, ue);
        }, be = () => {
          ke._isLeaving && ke[Ts](
            !0
            /* cancelled */
          ), ze(ke, () => {
            We(), J && J();
          });
        };
        pe ? pe(ke, We, be) : be();
      }
    else
      n(ke, q, ue);
  }, Re = (D, q, ue, Ee = !1, _e = !1) => {
    const {
      type: ke,
      props: Ne,
      ref: Oe,
      children: Me,
      dynamicChildren: xe,
      shapeFlag: je,
      patchFlag: ze,
      dirs: pe,
      cacheIndex: J
    } = D;
    if (ze === -2 && (_e = !1), Oe != null && (Ns(), Ko(Oe, null, ue, D, !0), Ds()), J != null && (q.renderCache[J] = void 0), je & 256) {
      q.ctx.deactivate(D);
      return;
    }
    const We = je & 1 && pe, be = !_o(D);
    let Qe;
    if (be && (Qe = Ne && Ne.onVnodeBeforeUnmount) && gs(Qe, q, D), je & 6)
      H(D.component, ue, Ee);
    else {
      if (je & 128) {
        D.suspense.unmount(ue, Ee);
        return;
      }
      We && Js(D, null, q, "beforeUnmount"), je & 64 ? D.type.remove(
        D,
        q,
        ue,
        Ve,
        Ee
      ) : xe && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !xe.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ke !== G || ze > 0 && ze & 64) ? X(
        xe,
        q,
        ue,
        !1,
        !0
      ) : (ke === G && ze & 384 || !_e && je & 16) && X(Me, q, ue), Ee && Be(D);
    }
    (be && (Qe = Ne && Ne.onVnodeUnmounted) || We) && qt(() => {
      Qe && gs(Qe, q, D), We && Js(D, null, q, "unmounted");
    }, ue);
  }, Be = (D) => {
    const { type: q, el: ue, anchor: Ee, transition: _e } = D;
    if (q === G) {
      Se(ue, Ee);
      return;
    }
    if (q === Na) {
      I(D);
      return;
    }
    const ke = () => {
      l(ue), _e && !_e.persisted && _e.afterLeave && _e.afterLeave();
    };
    if (D.shapeFlag & 1 && _e && !_e.persisted) {
      const { leave: Ne, delayLeave: Oe } = _e, Me = () => Ne(ue, ke);
      Oe ? Oe(D.el, ke, Me) : Me();
    } else
      ke();
  }, Se = (D, q) => {
    let ue;
    for (; D !== q; )
      ue = w(D), l(D), D = ue;
    l(q);
  }, H = (D, q, ue) => {
    const { bum: Ee, scope: _e, job: ke, subTree: Ne, um: Oe, m: Me, a: xe } = D;
    ql(Me), ql(xe), Ee && xn(Ee), _e.stop(), ke && (ke.flags |= 8, Re(Ne, D, q, ue)), Oe && qt(Oe, q), qt(() => {
      D.isUnmounted = !0;
    }, q);
  }, X = (D, q, ue, Ee = !1, _e = !1, ke = 0) => {
    for (let Ne = ke; Ne < D.length; Ne++)
      Re(D[Ne], q, ue, Ee, _e);
  }, E = (D) => {
    if (D.shapeFlag & 6)
      return E(D.component.subTree);
    if (D.shapeFlag & 128)
      return D.suspense.next();
    const q = w(D.anchor || D.el), ue = q && q[sr];
    return ue ? w(ue) : q;
  };
  let M = !1;
  const ne = (D, q, ue) => {
    D == null ? q._vnode && Re(q._vnode, null, null, !0) : x(
      q._vnode || null,
      D,
      q,
      null,
      null,
      null,
      ue
    ), q._vnode = D, M || (M = !0, Ll(), Zi(), M = !1);
  }, Ve = {
    p: x,
    um: Re,
    m: me,
    r: Be,
    mt: te,
    mc: P,
    pc: oe,
    pbc: Y,
    n: E,
    o: e
  };
  return {
    render: ne,
    hydrate: void 0,
    createApp: Pu(ne)
  };
}
function La({ type: e, props: t }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
}
function Qs({ effect: e, job: t }, o) {
  o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Yu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function wl(e, t, o = !1) {
  const n = e.children, l = t.children;
  if (Ze(n) && Ze(l))
    for (let r = 0; r < n.length; r++) {
      const c = n[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = Ws(l[r]), u.el = c.el), !o && u.patchFlag !== -2 && wl(c, u)), u.type === na && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === Ft && !u.el && (u.el = c.el);
    }
}
function Xu(e) {
  const t = e.slice(), o = [0];
  let n, l, r, c, u;
  const d = e.length;
  for (n = 0; n < d; n++) {
    const v = e[n];
    if (v !== 0) {
      if (l = o[o.length - 1], e[l] < v) {
        t[n] = l, o.push(n);
        continue;
      }
      for (r = 0, c = o.length - 1; r < c; )
        u = r + c >> 1, e[o[u]] < v ? r = u + 1 : c = u;
      v < e[o[r]] && (r > 0 && (t[n] = o[r - 1]), o[r] = n);
    }
  }
  for (r = o.length, c = o[r - 1]; r-- > 0; )
    o[r] = c, c = t[c];
  return o;
}
function Mr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Mr(t);
}
function ql(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Pr = (e) => e.__isSuspense;
function Zu(e, t) {
  t && t.pendingBranch ? Ze(e) ? t.effects.push(...e) : t.effects.push(e) : cu(e);
}
const G = Symbol.for("v-fgt"), na = Symbol.for("v-txt"), Ft = Symbol.for("v-cmt"), Na = Symbol.for("v-stc"), Qo = [];
let es = null;
function a(e = !1) {
  Qo.push(es = e ? null : []);
}
function ed() {
  Qo.pop(), es = Qo[Qo.length - 1] || null;
}
let nn = 1;
function Vn(e, t = !1) {
  nn += e, e < 0 && es && t && (es.hasOnce = !0);
}
function Rr(e) {
  return e.dynamicChildren = nn > 0 ? es || ho : null, ed(), nn > 0 && es && es.push(e), e;
}
function i(e, t, o, n, l, r) {
  return Rr(
    s(
      e,
      t,
      o,
      n,
      l,
      r,
      !0
    )
  );
}
function R(e, t, o, n, l) {
  return Rr(
    k(
      e,
      t,
      o,
      n,
      l,
      !0
    )
  );
}
function an(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function eo(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Lr = ({ key: e }) => e ?? null, En = ({
  ref: e,
  ref_key: t,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? bt(e) || Gt(e) || tt(e) ? { i: Nt, r: e, k: t, f: !!o } : e : null);
function s(e, t = null, o = null, n = 0, l = null, r = e === G ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Lr(t),
    ref: t && En(t),
    scopeId: tr,
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
    shapeFlag: r,
    patchFlag: n,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: Nt
  };
  return u ? (_l(d, o), r & 128 && e.normalize(d)) : o && (d.shapeFlag |= bt(o) ? 8 : 16), nn > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  es && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && es.push(d), d;
}
const k = td;
function td(e, t = null, o = null, n = 0, l = null, r = !1) {
  if ((!e || e === vr) && (e = Ft), an(e)) {
    const u = js(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && _l(u, o), nn > 0 && !r && es && (u.shapeFlag & 6 ? es[es.indexOf(e)] = u : es.push(u)), u.patchFlag = -2, u;
  }
  if (fd(e) && (e = e.__vccOpts), t) {
    t = sd(t);
    let { class: u, style: d } = t;
    u && !bt(u) && (t.class = Ue(u)), mt(d) && (ml(d) && !Ze(d) && (d = Mt({}, d)), t.style = Wt(d));
  }
  const c = bt(e) ? 1 : Pr(e) ? 128 : or(e) ? 64 : mt(e) ? 4 : tt(e) ? 2 : 0;
  return s(
    e,
    t,
    o,
    n,
    l,
    c,
    r,
    !0
  );
}
function sd(e) {
  return e ? ml(e) || Cr(e) ? Mt({}, e) : e : null;
}
function js(e, t, o = !1, n = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: d } = e, v = t ? od(l || {}, t) : l, m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Lr(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Ze(r) ? r.concat(En(t)) : [r, En(t)] : En(t)
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
    patchFlag: t && e.type !== G ? c === -1 ? 16 : c | 16 : c,
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
    ssContent: e.ssContent && js(e.ssContent),
    ssFallback: e.ssFallback && js(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && n && ao(
    m,
    d.clone(m)
  ), m;
}
function C(e = " ", t = 0) {
  return k(na, null, e, t);
}
function h(e = "", t = !1) {
  return t ? (a(), R(Ft, null, e)) : k(Ft, null, e);
}
function ks(e) {
  return e == null || typeof e == "boolean" ? k(Ft) : Ze(e) ? k(
    G,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : an(e) ? Ws(e) : k(na, null, String(e));
}
function Ws(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : js(e);
}
function _l(e, t) {
  let o = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (Ze(t))
    o = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const l = t.default;
      l && (l._c && (l._d = !1), _l(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = t._;
      !l && !Cr(t) ? t._ctx = Nt : l === 3 && Nt && (Nt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else tt(t) ? (t = { default: t, _ctx: Nt }, o = 32) : (t = String(t), n & 64 ? (o = 16, t = [C(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function od(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        t.class !== n.class && (t.class = Ue([t.class, n.class]));
      else if (l === "style")
        t.style = Wt([t.style, n.style]);
      else if (qn(l)) {
        const r = t[l], c = n[l];
        c && r !== c && !(Ze(r) && r.includes(c)) && (t[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (t[l] = n[l]);
  }
  return t;
}
function gs(e, t, o, n = null) {
  vs(e, t, 7, [
    o,
    n
  ]);
}
const nd = yr();
let ad = 0;
function ld(e, t, o) {
  const n = e.type, l = (t ? t.appContext : e.appContext) || nd, r = {
    uid: ad++,
    vnode: e,
    type: n,
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
    scope: new Rc(
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
    propsOptions: Sr(n, l),
    emitsOptions: kr(n, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: gt,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: gt,
    data: gt,
    props: gt,
    attrs: gt,
    slots: gt,
    refs: gt,
    setupState: gt,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Au.bind(null, r), e.ce && e.ce(r), r;
}
let Bt = null;
const kl = () => Bt || Nt;
let Fn, Ja;
{
  const e = Yn(), t = (o, n) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(n), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  Fn = t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Bt = o
  ), Ja = t(
    "__VUE_SSR_SETTERS__",
    (o) => ln = o
  );
}
const dn = (e) => {
  const t = Bt;
  return Fn(e), e.scope.on(), () => {
    e.scope.off(), Fn(t);
  };
}, Kl = () => {
  Bt && Bt.scope.off(), Fn(null);
};
function Nr(e) {
  return e.vnode.shapeFlag & 4;
}
let ln = !1;
function id(e, t = !1, o = !1) {
  t && Ja(t);
  const { props: n, children: l } = e.vnode, r = Nr(e);
  Wu(e, n, r, t), qu(e, l, o || t);
  const c = r ? rd(e, t) : void 0;
  return t && Ja(!1), c;
}
function rd(e, t) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Cu);
  const { setup: n } = o;
  if (n) {
    Ns();
    const l = e.setupContext = n.length > 1 ? ud(e) : null, r = dn(e), c = un(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = Ti(c);
    if (Ds(), r(), (u || e.sp) && !_o(e) && dr(e), u) {
      if (c.then(Kl, Kl), t)
        return c.then((d) => {
          Jl(e, d);
        }).catch((d) => {
          Zn(d, e, 0);
        });
      e.asyncDep = c;
    } else
      Jl(e, c);
  } else
    Dr(e);
}
function Jl(e, t, o) {
  tt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : mt(t) && (e.setupState = Qi(t)), Dr(e);
}
function Dr(e, t, o) {
  const n = e.type;
  e.render || (e.render = n.render || bs);
  {
    const l = dn(e);
    Ns();
    try {
      xu(e);
    } finally {
      Ds(), l();
    }
  }
}
const cd = {
  get(e, t) {
    return zt(e, "get", ""), e[t];
  }
};
function ud(e) {
  const t = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, cd),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function aa(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Qi(Zc(e.exposed)), {
    get(t, o) {
      if (o in t)
        return t[o];
      if (o in Jo)
        return Jo[o](e);
    },
    has(t, o) {
      return o in t || o in Jo;
    }
  })) : e.proxy;
}
function dd(e, t = !0) {
  return tt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function fd(e) {
  return tt(e) && "__vccOpts" in e;
}
const N = (e, t) => nu(e, t, ln);
function Po(e, t, o) {
  try {
    Vn(-1);
    const n = arguments.length;
    return n === 2 ? mt(t) && !Ze(t) ? an(t) ? k(e, null, [t]) : k(e, t) : k(e, null, t) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && an(o) && (o = [o]), k(e, t, o));
  } finally {
    Vn(1);
  }
}
const md = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Qa;
const Ql = typeof window < "u" && window.trustedTypes;
if (Ql)
  try {
    Qa = /* @__PURE__ */ Ql.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Or = Qa ? (e) => Qa.createHTML(e) : (e) => e, vd = "http://www.w3.org/2000/svg", pd = "http://www.w3.org/1998/Math/MathML", Es = typeof document < "u" ? document : null, Yl = Es && /* @__PURE__ */ Es.createElement("template"), gd = {
  insert: (e, t, o) => {
    t.insertBefore(e, o || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, o, n) => {
    const l = t === "svg" ? Es.createElementNS(vd, e) : t === "mathml" ? Es.createElementNS(pd, e) : o ? Es.createElement(e, { is: o }) : Es.createElement(e);
    return e === "select" && n && n.multiple != null && l.setAttribute("multiple", n.multiple), l;
  },
  createText: (e) => Es.createTextNode(e),
  createComment: (e) => Es.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Es.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, o, n, l, r) {
    const c = o ? o.previousSibling : t.lastChild;
    if (l && (l === r || l.nextSibling))
      for (; t.insertBefore(l.cloneNode(!0), o), !(l === r || !(l = l.nextSibling)); )
        ;
    else {
      Yl.innerHTML = Or(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Yl.content;
      if (n === "svg" || n === "mathml") {
        const d = u.firstChild;
        for (; d.firstChild; )
          u.appendChild(d.firstChild);
        u.removeChild(d);
      }
      t.insertBefore(u, o);
    }
    return [
      // first
      c ? c.nextSibling : t.firstChild,
      // last
      o ? o.previousSibling : t.lastChild
    ];
  }
}, zs = "transition", Do = "animation", Io = Symbol("_vtc"), Ar = {
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
}, Ur = /* @__PURE__ */ Mt(
  {},
  ir,
  Ar
), hd = (e) => (e.displayName = "Transition", e.props = Ur, e), yd = /* @__PURE__ */ hd(
  (e, { slots: t }) => Po(fu, zr(e), t)
), Ys = (e, t = []) => {
  Ze(e) ? e.forEach((o) => o(...t)) : e && e(...t);
}, Xl = (e) => e ? Ze(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function zr(e) {
  const t = {};
  for (const ce in e)
    ce in Ar || (t[ce] = e[ce]);
  if (e.css === !1)
    return t;
  const {
    name: o = "v",
    type: n,
    duration: l,
    enterFromClass: r = `${o}-enter-from`,
    enterActiveClass: c = `${o}-enter-active`,
    enterToClass: u = `${o}-enter-to`,
    appearFromClass: d = r,
    appearActiveClass: v = c,
    appearToClass: m = u,
    leaveFromClass: p = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: y = `${o}-leave-to`
  } = e, _ = wd(l), x = _ && _[0], b = _ && _[1], {
    onBeforeEnter: S,
    onEnter: O,
    onEnterCancelled: T,
    onLeave: I,
    onLeaveCancelled: L,
    onBeforeAppear: A = S,
    onAppear: Q = O,
    onAppearCancelled: P = T
  } = t, B = (ce, he, te, K) => {
    ce._enterCancelled = K, Vs(ce, he ? m : u), Vs(ce, he ? v : c), te && te();
  }, Y = (ce, he) => {
    ce._isLeaving = !1, Vs(ce, p), Vs(ce, y), Vs(ce, w), he && he();
  }, ee = (ce) => (he, te) => {
    const K = ce ? Q : O, ie = () => B(he, ce, te);
    Ys(K, [he, ie]), Zl(() => {
      Vs(he, ce ? d : r), ys(he, ce ? m : u), Xl(K) || ei(he, n, x, ie);
    });
  };
  return Mt(t, {
    onBeforeEnter(ce) {
      Ys(S, [ce]), ys(ce, r), ys(ce, c);
    },
    onBeforeAppear(ce) {
      Ys(A, [ce]), ys(ce, d), ys(ce, v);
    },
    onEnter: ee(!1),
    onAppear: ee(!0),
    onLeave(ce, he) {
      ce._isLeaving = !0;
      const te = () => Y(ce, he);
      ys(ce, p), ce._enterCancelled ? (ys(ce, w), Ya(ce)) : (Ya(ce), ys(ce, w)), Zl(() => {
        ce._isLeaving && (Vs(ce, p), ys(ce, y), Xl(I) || ei(ce, n, b, te));
      }), Ys(I, [ce, te]);
    },
    onEnterCancelled(ce) {
      B(ce, !1, void 0, !0), Ys(T, [ce]);
    },
    onAppearCancelled(ce) {
      B(ce, !0, void 0, !0), Ys(P, [ce]);
    },
    onLeaveCancelled(ce) {
      Y(ce), Ys(L, [ce]);
    }
  });
}
function wd(e) {
  if (e == null)
    return null;
  if (mt(e))
    return [Da(e.enter), Da(e.leave)];
  {
    const t = Da(e);
    return [t, t];
  }
}
function Da(e) {
  return Cc(e);
}
function ys(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Io] || (e[Io] = /* @__PURE__ */ new Set())).add(t);
}
function Vs(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const o = e[Io];
  o && (o.delete(t), o.size || (e[Io] = void 0));
}
function Zl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let _d = 0;
function ei(e, t, o, n) {
  const l = e._endId = ++_d, r = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: c, timeout: u, propCount: d } = Vr(e, t);
  if (!c)
    return n();
  const v = c + "end";
  let m = 0;
  const p = () => {
    e.removeEventListener(v, w), r();
  }, w = (y) => {
    y.target === e && ++m >= d && p();
  };
  setTimeout(() => {
    m < d && p();
  }, u + 1), e.addEventListener(v, w);
}
function Vr(e, t) {
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${zs}Delay`), r = n(`${zs}Duration`), c = ti(l, r), u = n(`${Do}Delay`), d = n(`${Do}Duration`), v = ti(u, d);
  let m = null, p = 0, w = 0;
  t === zs ? c > 0 && (m = zs, p = c, w = r.length) : t === Do ? v > 0 && (m = Do, p = v, w = d.length) : (p = Math.max(c, v), m = p > 0 ? c > v ? zs : Do : null, w = m ? m === zs ? r.length : d.length : 0);
  const y = m === zs && /\b(?:transform|all)(?:,|$)/.test(
    n(`${zs}Property`).toString()
  );
  return {
    type: m,
    timeout: p,
    propCount: w,
    hasTransform: y
  };
}
function ti(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((o, n) => si(o) + si(e[n])));
}
function si(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ya(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function kd(e, t, o) {
  const n = e[Io];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const oi = Symbol("_vod"), bd = Symbol("_vsh"), $d = Symbol(""), Cd = /(?:^|;)\s*display\s*:/;
function xd(e, t, o) {
  const n = e.style, l = bt(o);
  let r = !1;
  if (o && !l) {
    if (t)
      if (bt(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          o[u] == null && Tn(n, u, "");
        }
      else
        for (const c in t)
          o[c] == null && Tn(n, c, "");
    for (const c in o)
      c === "display" && (r = !0), Tn(n, c, o[c]);
  } else if (l) {
    if (t !== o) {
      const c = n[$d];
      c && (o += ";" + c), n.cssText = o, r = Cd.test(o);
    }
  } else t && e.removeAttribute("style");
  oi in e && (e[oi] = r ? n.display : "", e[bd] && (n.display = "none"));
}
const ni = /\s*!important$/;
function Tn(e, t, o) {
  if (Ze(o))
    o.forEach((n) => Tn(e, t, n));
  else if (o == null && (o = ""), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const n = Sd(e, t);
    ni.test(o) ? e.setProperty(
      qs(n),
      o.replace(ni, ""),
      "important"
    ) : e[n] = o;
  }
}
const ai = ["Webkit", "Moz", "ms"], Oa = {};
function Sd(e, t) {
  const o = Oa[t];
  if (o)
    return o;
  let n = as(t);
  if (n !== "filter" && n in e)
    return Oa[t] = n;
  n = Jn(n);
  for (let l = 0; l < ai.length; l++) {
    const r = ai[l] + n;
    if (r in e)
      return Oa[t] = r;
  }
  return t;
}
const li = "http://www.w3.org/1999/xlink";
function ii(e, t, o, n, l, r = Mc(t)) {
  n && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(li, t.slice(6, t.length)) : e.setAttributeNS(li, t, o) : o == null || r && !Li(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : fs(o) ? String(o) : o
  );
}
function ri(e, t, o, n, l) {
  if (t === "innerHTML" || t === "textContent") {
    o != null && (e[t] = t === "innerHTML" ? Or(o) : o);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const u = r === "OPTION" ? e.getAttribute("value") || "" : e.value, d = o == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(o);
    (u !== d || !("_value" in e)) && (e.value = d), o == null && e.removeAttribute(t), e._value = o;
    return;
  }
  let c = !1;
  if (o === "" || o == null) {
    const u = typeof e[t];
    u === "boolean" ? o = Li(o) : o == null && u === "string" ? (o = "", c = !0) : u === "number" && (o = 0, c = !0);
  }
  try {
    e[t] = o;
  } catch {
  }
  c && e.removeAttribute(l || t);
}
function Ls(e, t, o, n) {
  e.addEventListener(t, o, n);
}
function Id(e, t, o, n) {
  e.removeEventListener(t, o, n);
}
const ci = Symbol("_vei");
function Ed(e, t, o, n, l = null) {
  const r = e[ci] || (e[ci] = {}), c = r[t];
  if (n && c)
    c.value = n;
  else {
    const [u, d] = Td(t);
    if (n) {
      const v = r[t] = Rd(
        n,
        l
      );
      Ls(e, u, v, d);
    } else c && (Id(e, u, c, d), r[t] = void 0);
  }
}
const ui = /(?:Once|Passive|Capture)$/;
function Td(e) {
  let t;
  if (ui.test(e)) {
    t = {};
    let n;
    for (; n = e.match(ui); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : qs(e.slice(2)), t];
}
let Aa = 0;
const Md = /* @__PURE__ */ Promise.resolve(), Pd = () => Aa || (Md.then(() => Aa = 0), Aa = Date.now());
function Rd(e, t) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    vs(
      Ld(n, o.value),
      t,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = Pd(), o;
}
function Ld(e, t) {
  if (Ze(t)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, t.map(
      (n) => (l) => !l._stopped && n && n(l)
    );
  } else
    return t;
}
const di = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Nd = (e, t, o, n, l, r) => {
  const c = l === "svg";
  t === "class" ? kd(e, n, c) : t === "style" ? xd(e, o, n) : qn(t) ? ol(t) || Ed(e, t, o, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Dd(e, t, n, c)) ? (ri(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ii(e, t, n, c, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !bt(n)) ? ri(e, as(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), ii(e, t, n, c));
};
function Dd(e, t, o, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && di(t) && tt(o));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return di(t) && bt(o) ? !1 : t in e;
}
const Fr = /* @__PURE__ */ new WeakMap(), Br = /* @__PURE__ */ new WeakMap(), Bn = Symbol("_moveCb"), fi = Symbol("_enterCb"), Od = (e) => (delete e.props.mode, e), Ad = /* @__PURE__ */ Od({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Mt({}, Ur, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const o = kl(), n = lr();
    let l, r;
    return mr(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!Bd(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(zd), l.forEach(Vd);
      const u = l.filter(Fd);
      Ya(o.vnode.el), u.forEach((d) => {
        const v = d.el, m = v.style;
        ys(v, c), m.transform = m.webkitTransform = m.transitionDuration = "";
        const p = v[Bn] = (w) => {
          w && w.target !== v || (!w || w.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", p), v[Bn] = null, Vs(v, c));
        };
        v.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const c = it(e), u = zr(c);
      let d = c.tag || G;
      if (l = [], r)
        for (let v = 0; v < r.length; v++) {
          const m = r[v];
          m.el && m.el instanceof Element && (l.push(m), ao(
            m,
            on(
              m,
              u,
              n,
              o
            )
          ), Fr.set(m, {
            left: m.el.offsetLeft,
            top: m.el.offsetTop
          }));
        }
      r = t.default ? pl(t.default()) : [];
      for (let v = 0; v < r.length; v++) {
        const m = r[v];
        m.key != null && ao(
          m,
          on(m, u, n, o)
        );
      }
      return k(d, null, r);
    };
  }
}), Ud = Ad;
function zd(e) {
  const t = e.el;
  t[Bn] && t[Bn](), t[fi] && t[fi]();
}
function Vd(e) {
  Br.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function Fd(e) {
  const t = Fr.get(e), o = Br.get(e), n = t.left - o.left, l = t.top - o.top;
  if (n || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${n}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function Bd(e, t, o) {
  const n = e.cloneNode(), l = e[Io];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && n.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && n.classList.add(u)), n.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(n);
  const { hasTransform: c } = Vr(n);
  return r.removeChild(n), c;
}
const Hs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ze(t) ? (o) => xn(t, o) : t;
};
function Wd(e) {
  e.target.composing = !0;
}
function mi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ns = Symbol("_assign");
function vi(e, t, o) {
  return t && (e = e.trim()), o && (e = Qn(e)), e;
}
const bo = {
  created(e, { modifiers: { lazy: t, trim: o, number: n } }, l) {
    e[ns] = Hs(l);
    const r = n || l.props && l.props.type === "number";
    Ls(e, t ? "change" : "input", (c) => {
      c.target.composing || e[ns](vi(e.value, o, r));
    }), (o || r) && Ls(e, "change", () => {
      e.value = vi(e.value, o, r);
    }), t || (Ls(e, "compositionstart", Wd), Ls(e, "compositionend", mi), Ls(e, "change", mi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: o, modifiers: { lazy: n, trim: l, number: r } }, c) {
    if (e[ns] = Hs(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? Qn(e.value) : e.value, d = t ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (n && t === o || l && e.value.trim() === d) || (e.value = d));
  }
}, Wn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, o) {
    e[ns] = Hs(o), Ls(e, "change", () => {
      const n = e._modelValue, l = Eo(e), r = e.checked, c = e[ns];
      if (Ze(n)) {
        const u = ll(n, l), d = u !== -1;
        if (r && !d)
          c(n.concat(l));
        else if (!r && d) {
          const v = [...n];
          v.splice(u, 1), c(v);
        }
      } else if (To(n)) {
        const u = new Set(n);
        r ? u.add(l) : u.delete(l), c(u);
      } else
        c(Wr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: pi,
  beforeUpdate(e, t, o) {
    e[ns] = Hs(o), pi(e, t, o);
  }
};
function pi(e, { value: t, oldValue: o }, n) {
  e._modelValue = t;
  let l;
  if (Ze(t))
    l = ll(t, n.props.value) > -1;
  else if (To(t))
    l = t.has(n.props.value);
  else {
    if (t === o) return;
    l = no(t, Wr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Mn = {
  created(e, { value: t }, o) {
    e.checked = no(t, o.props.value), e[ns] = Hs(o), Ls(e, "change", () => {
      e[ns](Eo(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: o }, n) {
    e[ns] = Hs(n), t !== o && (e.checked = no(t, n.props.value));
  }
}, $o = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: o } }, n) {
    const l = To(t);
    Ls(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? Qn(Eo(c)) : Eo(c)
      );
      e[ns](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Pt(() => {
        e._assigning = !1;
      });
    }), e[ns] = Hs(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    gi(e, t);
  },
  beforeUpdate(e, t, o) {
    e[ns] = Hs(o);
  },
  updated(e, { value: t }) {
    e._assigning || gi(e, t);
  }
};
function gi(e, t) {
  const o = e.multiple, n = Ze(t);
  if (!(o && !n && !To(t))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = Eo(c);
      if (o)
        if (n) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = t.some((v) => String(v) === String(u)) : c.selected = ll(t, u) > -1;
        } else
          c.selected = t.has(u);
      else if (no(Eo(c), t)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Eo(e) {
  return "_value" in e ? e._value : e.value;
}
function Wr(e, t) {
  const o = t ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : t;
}
const Gd = ["ctrl", "shift", "alt", "meta"], jd = {
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
  exact: (e, t) => Gd.some((o) => e[`${o}Key`] && !t.includes(o))
}, ft = (e, t) => {
  const o = e._withMods || (e._withMods = {}), n = t.join(".");
  return o[n] || (o[n] = ((l, ...r) => {
    for (let c = 0; c < t.length; c++) {
      const u = jd[t[c]];
      if (u && u(l, t)) return;
    }
    return e(l, ...r);
  }));
}, Hd = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ds = (e, t) => {
  const o = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return o[n] || (o[n] = ((l) => {
    if (!("key" in l))
      return;
    const r = qs(l.key);
    if (t.some(
      (c) => c === r || Hd[c] === r
    ))
      return e(l);
  }));
}, qd = /* @__PURE__ */ Mt({ patchProp: Nd }, gd);
let hi;
function Kd() {
  return hi || (hi = Ju(qd));
}
const fn = ((...e) => {
  const t = Kd().createApp(...e), { mount: o } = t;
  return t.mount = (n) => {
    const l = Qd(n);
    if (!l) return;
    const r = t._component;
    !tt(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, Jd(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, t;
});
function Jd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Qd(e) {
  return bt(e) ? document.querySelector(e) : e;
}
const Yd = { class: "panel-layout" }, Xd = {
  key: 0,
  class: "panel-layout-header"
}, Zd = {
  key: 1,
  class: "panel-layout-search"
}, ef = { class: "panel-layout-content" }, tf = {
  key: 2,
  class: "panel-layout-footer"
}, sf = /* @__PURE__ */ $e({
  __name: "PanelLayout",
  setup(e) {
    return (t, o) => (a(), i("div", Yd, [
      t.$slots.header ? (a(), i("div", Xd, [
        ot(t.$slots, "header", {}, void 0)
      ])) : h("", !0),
      t.$slots.search ? (a(), i("div", Zd, [
        ot(t.$slots, "search", {}, void 0)
      ])) : h("", !0),
      s("div", ef, [
        ot(t.$slots, "content", {}, void 0)
      ]),
      t.$slots.footer ? (a(), i("div", tf, [
        ot(t.$slots, "footer", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), Ce = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of t)
    o[n] = l;
  return o;
}, Ot = /* @__PURE__ */ Ce(sf, [["__scopeId", "data-v-21565df9"]]), of = {
  key: 0,
  class: "panel-title-prefix"
}, nf = {
  key: 1,
  class: "panel-title-prefix-theme"
}, af = /* @__PURE__ */ $e({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (t, o) => (a(), R(gl(`h${e.level}`), {
      class: Ue(["panel-title", e.variant])
    }, {
      default: g(() => [
        e.showPrefix ? (a(), i("span", of, f(e.prefix), 1)) : (a(), i("span", nf)),
        ot(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), lf = /* @__PURE__ */ Ce(af, [["__scopeId", "data-v-c3875efc"]]), rf = ["title"], cf = ["width", "height"], uf = /* @__PURE__ */ $e({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (a(), i("button", {
      class: "info-button",
      title: e.title,
      onClick: o[0] || (o[0] = (n) => t.$emit("click"))
    }, [
      (a(), i("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...o[1] || (o[1] = [
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
      ])], 8, cf))
    ], 8, rf));
  }
}), Gr = /* @__PURE__ */ Ce(uf, [["__scopeId", "data-v-6fc7f16d"]]), df = { class: "header-left" }, ff = {
  key: 0,
  class: "header-actions"
}, mf = /* @__PURE__ */ $e({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (t, o) => (a(), i("div", {
      class: Ue(["panel-header", { stacked: e.stacked }])
    }, [
      s("div", df, [
        k(lf, { "show-prefix": e.showPrefix }, {
          default: g(() => [
            C(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), R(Gr, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => t.$emit("info-click"))
        })) : h("", !0)
      ]),
      t.$slots.actions ? (a(), i("div", ff, [
        ot(t.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), At = /* @__PURE__ */ Ce(mf, [["__scopeId", "data-v-55a62cd6"]]), vf = {
  key: 0,
  class: "section-title-count"
}, pf = {
  key: 1,
  class: "section-title-icon"
}, gf = /* @__PURE__ */ $e({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (a(), R(gl(`h${e.level}`), {
      class: Ue(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && t.$emit("click"))
    }, {
      default: g(() => [
        ot(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), i("span", vf, "(" + f(e.count) + ")", 1)) : h("", !0),
        e.clickable ? (a(), i("span", pf, f(e.expanded ? "▼" : "▸"), 1)) : h("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ss = /* @__PURE__ */ Ce(gf, [["__scopeId", "data-v-559361eb"]]), hf = { class: "status-grid" }, yf = { class: "status-grid__columns" }, wf = { class: "status-grid__column" }, _f = { class: "status-grid__title" }, kf = { class: "status-grid__column status-grid__column--right" }, bf = { class: "status-grid__title" }, $f = {
  key: 0,
  class: "status-grid__footer"
}, Cf = /* @__PURE__ */ $e({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (t, o) => (a(), i("div", hf, [
      s("div", yf, [
        s("div", wf, [
          s("h4", _f, f(e.leftTitle), 1),
          ot(t.$slots, "left", {}, void 0)
        ]),
        s("div", kf, [
          s("h4", bf, f(e.rightTitle), 1),
          ot(t.$slots, "right", {}, void 0)
        ])
      ]),
      t.$slots.footer ? (a(), i("div", $f, [
        ot(t.$slots, "footer", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), xf = /* @__PURE__ */ Ce(Cf, [["__scopeId", "data-v-73b7ba3f"]]), Sf = {
  key: 0,
  class: "status-item__icon"
}, If = {
  key: 1,
  class: "status-item__count"
}, Ef = { class: "status-item__label" }, Tf = /* @__PURE__ */ $e({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = N(() => `status-item--${t.variant}`);
    return (n, l) => (a(), i("div", {
      class: Ue(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), i("span", Sf, f(e.icon), 1)) : h("", !0),
      e.count !== void 0 ? (a(), i("span", If, f(e.count), 1)) : h("", !0),
      s("span", Ef, f(e.label), 1)
    ], 2));
  }
}), hs = /* @__PURE__ */ Ce(Tf, [["__scopeId", "data-v-6f929183"]]), Mf = { class: "issue-card__header" }, Pf = { class: "issue-card__icon" }, Rf = { class: "issue-card__title" }, Lf = {
  key: 0,
  class: "issue-card__content"
}, Nf = {
  key: 0,
  class: "issue-card__description"
}, Df = {
  key: 1,
  class: "issue-card__items"
}, Of = {
  key: 2,
  class: "issue-card__actions"
}, Af = /* @__PURE__ */ $e({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const t = e, o = N(() => `issue-card--${t.severity}`);
    return (n, l) => (a(), i("div", {
      class: Ue(["issue-card", o.value])
    }, [
      s("div", Mf, [
        s("span", Pf, f(e.icon), 1),
        s("h4", Rf, f(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), i("div", Lf, [
        e.description ? (a(), i("p", Nf, f(e.description), 1)) : h("", !0),
        ot(n.$slots, "default", {}, void 0)
      ])) : h("", !0),
      e.items && e.items.length ? (a(), i("div", Df, [
        (a(!0), i(G, null, ye(e.items, (r, c) => (a(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = s("span", { class: "issue-card__bullet" }, "•", -1)),
          s("span", null, f(r), 1)
        ]))), 128))
      ])) : h("", !0),
      n.$slots.actions ? (a(), i("div", Of, [
        ot(n.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), cs = /* @__PURE__ */ Ce(Af, [["__scopeId", "data-v-df6aa348"]]), Uf = ["type", "disabled"], zf = {
  key: 0,
  class: "spinner"
}, Vf = /* @__PURE__ */ $e({
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
    return (t, o) => (a(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Ue(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => t.$emit("click", n))
    }, [
      e.loading ? (a(), i("span", zf)) : h("", !0),
      e.loading ? h("", !0) : ot(t.$slots, "default", { key: 1 }, void 0)
    ], 10, Uf));
  }
}), Ie = /* @__PURE__ */ Ce(Vf, [["__scopeId", "data-v-772abe47"]]), Ff = { class: "empty-state" }, Bf = {
  key: 0,
  class: "empty-icon"
}, Wf = { class: "empty-message" }, Gf = /* @__PURE__ */ $e({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, o) => (a(), i("div", Ff, [
      e.icon ? (a(), i("div", Bf, f(e.icon), 1)) : h("", !0),
      s("p", Wf, f(e.message), 1),
      e.actionLabel ? (a(), R(Ie, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => t.$emit("action"))
      }, {
        default: g(() => [
          C(f(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : h("", !0)
    ]));
  }
}), ls = /* @__PURE__ */ Ce(Gf, [["__scopeId", "data-v-4466284f"]]), jf = /* @__PURE__ */ $e({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (t, o) => (a(), i("span", {
      class: Ue(["detail-label"]),
      style: Wt({ minWidth: e.minWidth })
    }, [
      ot(t.$slots, "default", {}, void 0)
    ], 4));
  }
}), Pn = /* @__PURE__ */ Ce(jf, [["__scopeId", "data-v-75e9eeb8"]]), Hf = /* @__PURE__ */ $e({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (a(), i("span", {
      class: Ue(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      ot(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), Xa = /* @__PURE__ */ Ce(Hf, [["__scopeId", "data-v-2f186e4c"]]), qf = { class: "detail-row" }, Kf = /* @__PURE__ */ $e({
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
    return (t, o) => (a(), i("div", qf, [
      k(Pn, { "min-width": e.labelMinWidth }, {
        default: g(() => [
          C(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), R(Xa, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: g(() => [
          C(f(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ot(t.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), _t = /* @__PURE__ */ Ce(Kf, [["__scopeId", "data-v-ef15664a"]]), Jf = { class: "modal-header" }, Qf = { class: "modal-body" }, Yf = { class: "status-section" }, Xf = {
  key: 0,
  class: "status-section"
}, Zf = { class: "section-header-row" }, em = {
  key: 0,
  class: "workflow-group"
}, tm = { class: "workflow-group-header" }, sm = { class: "workflow-group-title" }, om = { class: "workflow-list" }, nm = { class: "workflow-name" }, am = { class: "workflow-issue" }, lm = {
  key: 1,
  class: "workflow-group"
}, im = { class: "workflow-group-header" }, rm = { class: "workflow-group-title" }, cm = { class: "workflow-list" }, um = { class: "workflow-name" }, dm = { class: "workflow-issue" }, fm = {
  key: 2,
  class: "workflow-group"
}, mm = { class: "workflow-group-header" }, vm = { class: "workflow-group-title" }, pm = { class: "workflow-list" }, gm = { class: "workflow-name" }, hm = {
  key: 3,
  class: "workflow-group"
}, ym = { class: "workflow-group-header" }, wm = { class: "workflow-group-title" }, _m = { class: "workflow-list" }, km = { class: "workflow-name" }, bm = {
  key: 4,
  class: "workflow-group"
}, $m = { class: "workflow-group-header" }, Cm = { class: "workflow-group-title" }, xm = { class: "workflow-list" }, Sm = { class: "workflow-name" }, Im = {
  key: 5,
  class: "workflow-group"
}, Em = { class: "workflow-group-title" }, Tm = { class: "expand-icon" }, Mm = {
  key: 0,
  class: "workflow-list"
}, Pm = { class: "workflow-name" }, Rm = {
  key: 1,
  class: "status-section"
}, Lm = {
  key: 0,
  class: "change-group"
}, Nm = { class: "change-group-header" }, Dm = { class: "change-group-title" }, Om = { class: "change-list" }, Am = { class: "node-name" }, Um = {
  key: 0,
  class: "dev-badge"
}, zm = {
  key: 1,
  class: "change-group"
}, Vm = { class: "change-group-header" }, Fm = { class: "change-group-title" }, Bm = { class: "change-list" }, Wm = { class: "node-name" }, Gm = {
  key: 0,
  class: "dev-badge"
}, jm = {
  key: 2,
  class: "change-group"
}, Hm = { class: "change-list" }, qm = { class: "change-item" }, Km = { class: "node-name" }, Jm = {
  key: 3,
  class: "change-group"
}, Qm = {
  key: 2,
  class: "status-section"
}, Ym = { class: "section-header-row" }, Xm = {
  key: 0,
  class: "drift-item"
}, Zm = { class: "drift-list" }, ev = {
  key: 0,
  class: "drift-list-more"
}, tv = {
  key: 1,
  class: "drift-item"
}, sv = { class: "drift-list" }, ov = {
  key: 0,
  class: "drift-list-more"
}, nv = {
  key: 2,
  class: "drift-item"
}, av = { class: "drift-list" }, lv = { class: "version-actual" }, iv = { class: "version-expected" }, rv = {
  key: 0,
  class: "drift-list-more"
}, cv = {
  key: 3,
  class: "drift-item"
}, uv = { class: "repair-action" }, dv = {
  key: 3,
  class: "status-section"
}, fv = { class: "info-box" }, mv = { class: "drift-list" }, vv = {
  key: 0,
  class: "drift-list-more"
}, pv = {
  key: 4,
  class: "status-section"
}, gv = { class: "warning-box" }, hv = {
  key: 5,
  class: "empty-state-inline"
}, yv = { class: "modal-actions" }, wv = /* @__PURE__ */ $e({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const t = e, o = $(!1);
    rt(() => {
      console.log("StatusDetailModal mounted, initial show value:", t.show);
    }), kt(() => t.show, (w, y) => {
      console.log("StatusDetailModal show prop changed from", y, "to", w);
    }, { immediate: !0 });
    const n = N(() => {
      var w, y, _;
      return ((_ = (y = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : y.analyzed) == null ? void 0 : _.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), l = N(() => {
      var w, y, _;
      return ((_ = (y = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : y.analyzed) == null ? void 0 : _.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), r = N(() => {
      var w, y, _;
      return ((_ = (y = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : y.synced) == null ? void 0 : _.filter((x) => {
        var S, O, T;
        const b = (T = (O = (S = t.status) == null ? void 0 : S.workflows) == null ? void 0 : O.analyzed) == null ? void 0 : T.find((I) => I.name === x);
        return !b || b.status !== "broken";
      })) || [];
    }), c = N(() => {
      var w, y, _, x, b;
      return (w = t.status) != null && w.workflows ? (((y = t.status.workflows.new) == null ? void 0 : y.length) ?? 0) > 0 || (((_ = t.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((x = t.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || (((b = t.status.workflows.synced) == null ? void 0 : b.length) ?? 0) > 0 : !1;
    }), u = N(() => {
      var y, _, x;
      const w = (y = t.status) == null ? void 0 : y.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((x = w.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = N(() => {
      var w, y, _, x, b, S;
      return !c.value && !u.value && ((y = (w = t.status) == null ? void 0 : w.comparison) == null ? void 0 : y.is_synced) && (((_ = t.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((S = (b = (x = t.status) == null ? void 0 : x.comparison) == null ? void 0 : b.disabled_nodes) == null ? void 0 : S.length) ?? 0) === 0;
    }), v = N(() => {
      var y, _;
      const w = (_ = (y = t.status) == null ? void 0 : y.git_changes) == null ? void 0 : _.workflow_changes;
      return w ? typeof w == "number" ? w : Object.keys(w).length : 0;
    });
    function m(w) {
      return typeof w == "string" ? w : w.name;
    }
    function p(w) {
      return typeof w == "object" && w.is_development === !0;
    }
    return (w, y) => {
      var _, x, b, S, O, T, I, L, A, Q, P, B, Y, ee, ce, he, te, K, ie, De, oe, ge;
      return a(), R(Dt, { to: "body" }, [
        e.show ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: y[7] || (y[7] = (U) => w.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: y[6] || (y[6] = ft(() => {
            }, ["stop"]))
          }, [
            s("div", Jf, [
              y[8] || (y[8] = s("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              s("button", {
                class: "modal-close",
                onClick: y[0] || (y[0] = (U) => w.$emit("close"))
              }, "✕")
            ]),
            s("div", Qf, [
              s("div", Yf, [
                k(ss, { level: "4" }, {
                  default: g(() => [...y[9] || (y[9] = [
                    C("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                k(_t, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (a(), i("div", Xf, [
                s("div", Zf, [
                  k(ss, { level: "4" }, {
                    default: g(() => [...y[10] || (y[10] = [
                      C("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: y[1] || (y[1] = (U) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                n.value.length ? (a(), i("div", em, [
                  s("div", tm, [
                    y[11] || (y[11] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", sm, "BROKEN (COMMITTED) (" + f(n.value.length) + ")", 1)
                  ]),
                  s("div", om, [
                    (a(!0), i(G, null, ye(n.value, (U) => (a(), i("div", {
                      key: U.name,
                      class: "workflow-item"
                    }, [
                      s("span", nm, f(U.name), 1),
                      s("span", am, f(U.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                l.value.length ? (a(), i("div", lm, [
                  s("div", im, [
                    y[12] || (y[12] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", rm, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  s("div", cm, [
                    (a(!0), i(G, null, ye(l.value, (U) => (a(), i("div", {
                      key: U.name,
                      class: "workflow-item"
                    }, [
                      s("span", um, f(U.name), 1),
                      s("span", dm, f(U.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (x = (_ = e.status.workflows) == null ? void 0 : _.new) != null && x.length ? (a(), i("div", fm, [
                  s("div", mm, [
                    y[13] || (y[13] = s("span", { class: "workflow-status-icon new" }, "●", -1)),
                    s("span", vm, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  s("div", pm, [
                    (a(!0), i(G, null, ye(e.status.workflows.new, (U) => (a(), i("div", {
                      key: U,
                      class: "workflow-item"
                    }, [
                      s("span", gm, f(U), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (S = (b = e.status.workflows) == null ? void 0 : b.modified) != null && S.length ? (a(), i("div", hm, [
                  s("div", ym, [
                    y[14] || (y[14] = s("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    s("span", wm, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  s("div", _m, [
                    (a(!0), i(G, null, ye(e.status.workflows.modified, (U) => (a(), i("div", {
                      key: U,
                      class: "workflow-item"
                    }, [
                      s("span", km, f(U), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (T = (O = e.status.workflows) == null ? void 0 : O.deleted) != null && T.length ? (a(), i("div", bm, [
                  s("div", $m, [
                    y[15] || (y[15] = s("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    s("span", Cm, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  s("div", xm, [
                    (a(!0), i(G, null, ye(e.status.workflows.deleted, (U) => (a(), i("div", {
                      key: U,
                      class: "workflow-item"
                    }, [
                      s("span", Sm, f(U), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                r.value.length ? (a(), i("div", Im, [
                  s("div", {
                    class: "workflow-group-header clickable",
                    onClick: y[2] || (y[2] = (U) => o.value = !o.value)
                  }, [
                    y[16] || (y[16] = s("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    s("span", Em, "SYNCED (" + f(r.value.length) + ")", 1),
                    s("span", Tm, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), i("div", Mm, [
                    (a(!0), i(G, null, ye(r.value, (U) => (a(), i("div", {
                      key: U,
                      class: "workflow-item"
                    }, [
                      s("span", Pm, f(U), 1)
                    ]))), 128))
                  ])) : h("", !0)
                ])) : h("", !0)
              ])) : h("", !0),
              u.value ? (a(), i("div", Rm, [
                k(ss, { level: "4" }, {
                  default: g(() => [...y[17] || (y[17] = [
                    C("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (L = (I = e.status.git_changes) == null ? void 0 : I.nodes_added) != null && L.length ? (a(), i("div", Lm, [
                  s("div", Nm, [
                    y[18] || (y[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", Dm, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", Om, [
                    (a(!0), i(G, null, ye(e.status.git_changes.nodes_added, (U) => (a(), i("div", {
                      key: m(U),
                      class: "change-item"
                    }, [
                      s("span", Am, f(m(U)), 1),
                      p(U) ? (a(), i("span", Um, "dev")) : h("", !0)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (Q = (A = e.status.git_changes) == null ? void 0 : A.nodes_removed) != null && Q.length ? (a(), i("div", zm, [
                  s("div", Vm, [
                    y[19] || (y[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", Fm, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", Bm, [
                    (a(!0), i(G, null, ye(e.status.git_changes.nodes_removed, (U) => (a(), i("div", {
                      key: m(U),
                      class: "change-item"
                    }, [
                      s("span", Wm, f(m(U)), 1),
                      p(U) ? (a(), i("span", Gm, "dev")) : h("", !0)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (P = e.status.git_changes) != null && P.workflow_changes ? (a(), i("div", jm, [
                  y[20] || (y[20] = s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  s("div", Hm, [
                    s("div", qm, [
                      s("span", Km, f(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : h("", !0),
                (B = e.status.git_changes) != null && B.has_other_changes ? (a(), i("div", Jm, [...y[21] || (y[21] = [
                  s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  s("div", { class: "change-list" }, [
                    s("div", { class: "change-item" }, [
                      s("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : h("", !0)
              ])) : h("", !0),
              (Y = e.status.comparison) != null && Y.is_synced ? h("", !0) : (a(), i("div", Qm, [
                s("div", Ym, [
                  k(ss, { level: "4" }, {
                    default: g(() => [...y[22] || (y[22] = [
                      C("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: y[3] || (y[3] = (U) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                y[26] || (y[26] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("span", null, "Environment needs repair")
                ], -1)),
                (ce = (ee = e.status.comparison) == null ? void 0 : ee.missing_nodes) != null && ce.length ? (a(), i("div", Xm, [
                  k(_t, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", Zm, [
                    (a(!0), i(G, null, ye(e.status.comparison.missing_nodes.slice(0, 10), (U) => (a(), i("div", {
                      key: U,
                      class: "drift-list-item"
                    }, " - " + f(U), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), i("div", ev, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                (te = (he = e.status.comparison) == null ? void 0 : he.extra_nodes) != null && te.length ? (a(), i("div", tv, [
                  k(_t, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", sv, [
                    (a(!0), i(G, null, ye(e.status.comparison.extra_nodes.slice(0, 10), (U) => (a(), i("div", {
                      key: U,
                      class: "drift-list-item"
                    }, " - " + f(U), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), i("div", ov, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                (ie = (K = e.status.comparison) == null ? void 0 : K.version_mismatches) != null && ie.length ? (a(), i("div", nv, [
                  k(_t, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", av, [
                    (a(!0), i(G, null, ye(e.status.comparison.version_mismatches.slice(0, 10), (U) => (a(), i("div", {
                      key: U.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      C(f(U.name) + ": ", 1),
                      s("span", lv, f(U.actual), 1),
                      y[23] || (y[23] = C(" → ", -1)),
                      s("span", iv, f(U.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), i("div", rv, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                ((De = e.status.comparison) == null ? void 0 : De.packages_in_sync) === !1 ? (a(), i("div", cv, [
                  k(_t, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : h("", !0),
                s("div", uv, [
                  k(Ie, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: y[4] || (y[4] = (U) => w.$emit("repair"))
                  }, {
                    default: g(() => [...y[24] || (y[24] = [
                      C(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  y[25] || (y[25] = s("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ge = (oe = e.status.comparison) == null ? void 0 : oe.disabled_nodes) != null && ge.length ? (a(), i("div", dv, [
                k(ss, { level: "4" }, {
                  default: g(() => [...y[27] || (y[27] = [
                    C("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                s("div", fv, [
                  y[28] || (y[28] = s("span", { class: "info-icon" }, "ℹ", -1)),
                  s("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                s("div", mv, [
                  (a(!0), i(G, null, ye(e.status.comparison.disabled_nodes.slice(0, 10), (U) => (a(), i("div", {
                    key: U,
                    class: "drift-list-item"
                  }, " • " + f(U), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), i("div", vv, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : h("", !0)
                ])
              ])) : h("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), i("div", pv, [
                k(ss, { level: "4" }, {
                  default: g(() => [...y[29] || (y[29] = [
                    C("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                s("div", gv, [
                  y[30] || (y[30] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, f(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                y[31] || (y[31] = s("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : h("", !0),
              d.value ? (a(), i("div", hv, [...y[32] || (y[32] = [
                s("div", { class: "empty-icon" }, "✅", -1),
                s("div", { class: "empty-message" }, [
                  s("strong", null, "Environment is clean!"),
                  s("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : h("", !0)
            ]),
            s("div", yv, [
              k(Ie, {
                variant: "secondary",
                onClick: y[5] || (y[5] = (U) => w.$emit("close"))
              }, {
                default: g(() => [...y[33] || (y[33] = [
                  C(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : h("", !0)
      ]);
    };
  }
}), _v = /* @__PURE__ */ Ce(wv, [["__scopeId", "data-v-e2b37122"]]), kv = { class: "health-section-header" }, bv = { class: "suggestions-content" }, $v = { class: "suggestions-text" }, Cv = { style: { "margin-top": "var(--cg-space-3)" } }, xv = {
  key: 1,
  class: "no-issues-text"
}, Sv = /* @__PURE__ */ $e({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: t, emit: o }) {
    const n = e, l = $(!1), r = $(!1);
    function c() {
      l.value = !0;
    }
    function u() {
      l.value = !1, v("view-workflows");
    }
    function d() {
      l.value = !1, v("view-nodes");
    }
    const v = o, m = $(!1), p = $(!1);
    function w() {
      p.value = !0, v("repair-environment");
    }
    function y() {
      p.value = !1;
    }
    function _() {
      l.value = !1;
    }
    const x = N(() => {
      const Se = n.status.workflows.analyzed || [], H = Se.filter(
        (X) => X.unresolved_models_count > 0 || X.ambiguous_models_count > 0
      );
      return H.length === 0 && n.status.missing_models_count > 0 ? Se.filter((X) => X.sync_state === "synced") : H;
    });
    function b() {
      const Se = x.value;
      Se.length !== 0 && (m.value = !0, v("repair-missing-models", Se.map((H) => H.name)));
    }
    function S() {
      m.value = !1;
    }
    t({ resetRepairingState: S, resetRepairingEnvironmentState: y, closeDetailModal: _ });
    const O = N(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), T = N(() => n.status.has_changes), I = N(() => {
      const Se = n.status.git_changes;
      return Se.nodes_added.length > 0 || Se.nodes_removed.length > 0 || Se.workflow_changes;
    }), L = N(() => n.status.has_changes || O.value), A = N(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), Q = N(() => n.status.git_changes.has_other_changes), P = N(() => {
      var Se;
      return ((Se = n.status.workflows.analyzed) == null ? void 0 : Se.filter((H) => H.status === "broken")) || [];
    }), B = N(() => {
      var Se;
      return ((Se = n.status.workflows.analyzed) == null ? void 0 : Se.filter(
        (H) => H.has_path_sync_issues && !H.has_issues
      )) || [];
    }), Y = N(() => P.value.length > 0);
    function ee(Se) {
      const H = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const X of H) {
        const E = Se.match(X);
        if (E != null && E[1])
          return E[1];
      }
      return null;
    }
    function ce(Se) {
      const H = Se.map(ee).filter((X) => !!X);
      return [...new Set(H)];
    }
    function he(Se) {
      if (Se.length === 0) return "";
      if (Se.length === 1) return ` (>= ${Se[0]})`;
      const H = Se.slice(0, 2).map((E) => `>= ${E}`).join(", "), X = Se.length > 2;
      return ` (${H}${X ? ", ..." : ""})`;
    }
    function te(Se) {
      return Se.replace(/uninstallable node mappings?/gi, (H) => H.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function K(Se) {
      const H = te(Se.issue_summary || "Has issues"), X = /(?:>=|v?\d+\.\d+)/i.test(H), E = ce(Se.version_gated_guidance || []);
      return (Se.nodes_version_gated_count || 0) > 0 && E.length > 0 && !X ? `${Se.name} — ${H} (needs ComfyUI ${E.map((M) => `>= ${M}`).join(", ")})` : `${Se.name} — ${H}`;
    }
    const ie = N(() => P.value.reduce(
      (Se, H) => Se + (H.nodes_version_gated_count || 0),
      0
    )), De = N(() => {
      const Se = P.value.flatMap(
        (H) => ce(H.version_gated_guidance || [])
      );
      return [...new Set(Se)];
    }), oe = N(() => P.value.reduce(
      (Se, H) => Se + (H.nodes_uninstallable_count || 0),
      0
    )), ge = N(() => {
      const Se = [];
      return ie.value > 0 && Se.push(
        `${ie.value} require newer ComfyUI${he(De.value)}`
      ), oe.value > 0 && Se.push(`${oe.value} need community packages`), Se.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${Se.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), U = N(() => Y.value || B.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), me = N(() => {
      const Se = [];
      return n.status.workflows.new.length > 0 && Se.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && Se.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && Se.push(`${n.status.workflows.deleted.length} deleted`), Se.length > 0 ? `${Se.join(", ")} workflow${Se.length === 1 && !Se[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Re = N(() => {
      var X, E;
      const Se = [], H = n.status.comparison;
      return (X = H.missing_nodes) != null && X.length && Se.push(`${H.missing_nodes.length} missing node${H.missing_nodes.length === 1 ? "" : "s"}`), (E = H.extra_nodes) != null && E.length && Se.push(`${H.extra_nodes.length} untracked node${H.extra_nodes.length === 1 ? "" : "s"}`), Se.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Se.join(" and ")}.`;
    }), Be = N(() => {
      var X, E;
      const Se = [], H = n.status.comparison;
      return (X = H.extra_nodes) != null && X.length && (H.extra_nodes.slice(0, 3).forEach((M) => {
        Se.push(`Untracked: ${M}`);
      }), H.extra_nodes.length > 3 && Se.push(`...and ${H.extra_nodes.length - 3} more untracked`)), (E = H.missing_nodes) != null && E.length && (H.missing_nodes.slice(0, 3).forEach((M) => {
        Se.push(`Missing: ${M}`);
      }), H.missing_nodes.length > 3 && Se.push(`...and ${H.missing_nodes.length - 3} more missing`)), Se;
    });
    return (Se, H) => (a(), i(G, null, [
      k(Ot, null, {
        header: g(() => [
          k(At, { title: "STATUS" })
        ]),
        content: g(() => [
          n.setupState === "no_workspace" ? (a(), R(cs, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: g(() => [
              k(Ie, {
                variant: "primary",
                size: "sm",
                onClick: H[0] || (H[0] = (X) => Se.$emit("start-setup"))
              }, {
                default: g(() => [...H[13] || (H[13] = [
                  C(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (a(), R(cs, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: g(() => [
              k(Ie, {
                variant: "primary",
                size: "sm",
                onClick: H[1] || (H[1] = (X) => Se.$emit("view-environments"))
              }, {
                default: g(() => [...H[14] || (H[14] = [
                  C(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (a(), R(cs, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: g(() => [
              k(Ie, {
                variant: "primary",
                size: "sm",
                onClick: H[2] || (H[2] = (X) => Se.$emit("create-environment"))
              }, {
                default: g(() => [...H[15] || (H[15] = [
                  C(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : h("", !0),
          s("div", {
            class: "health-section-wrapper",
            onMouseenter: H[4] || (H[4] = (X) => r.value = !0),
            onMouseleave: H[5] || (H[5] = (X) => r.value = !1)
          }, [
            s("div", kv, [
              k(ss, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: g(() => [...H[16] || (H[16] = [
                  C(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              k(yd, { name: "fade" }, {
                default: g(() => [
                  r.value ? (a(), R(Ie, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: g(() => [...H[17] || (H[17] = [
                      C(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : h("", !0)
                ]),
                _: 1
              })
            ]),
            k(xf, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Yt({
              left: g(() => [
                e.status.workflows.new.length ? (a(), R(hs, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : h("", !0),
                e.status.workflows.modified.length ? (a(), R(hs, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : h("", !0),
                e.status.workflows.deleted.length ? (a(), R(hs, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : h("", !0),
                k(hs, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: O.value
                }, null, 8, ["count", "separator"])
              ]),
              right: g(() => [
                e.status.git_changes.nodes_added.length ? (a(), R(hs, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : h("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), R(hs, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : h("", !0),
                e.status.git_changes.workflow_changes ? (a(), R(hs, {
                  key: 2,
                  icon: "●",
                  count: A.value,
                  label: A.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : h("", !0),
                Q.value ? (a(), R(hs, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : h("", !0),
                T.value && !I.value && !Q.value ? (a(), R(hs, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : h("", !0),
                T.value ? h("", !0) : (a(), R(hs, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              L.value ? {
                name: "footer",
                fn: g(() => [
                  H[19] || (H[19] = s("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  s("div", bv, [
                    s("span", $v, f(me.value), 1),
                    k(Ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: H[3] || (H[3] = (X) => Se.$emit("commit-changes"))
                    }, {
                      default: g(() => [...H[18] || (H[18] = [
                        C(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          e.status.is_detached_head ? (a(), R(cs, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: g(() => [
              k(Ie, {
                variant: "primary",
                size: "sm",
                onClick: H[6] || (H[6] = (X) => Se.$emit("create-branch"))
              }, {
                default: g(() => [...H[20] || (H[20] = [
                  C(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : h("", !0),
          s("div", Cv, [
            k(ss, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: g(() => [...H[21] || (H[21] = [
                C(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            U.value ? (a(), i(G, { key: 0 }, [
              P.value.length > 0 ? (a(), R(cs, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${P.value.length} workflow${P.value.length === 1 ? "" : "s"} can't run`,
                description: ge.value,
                items: P.value.map(K)
              }, {
                actions: g(() => [
                  k(Ie, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[7] || (H[7] = (X) => Se.$emit("view-workflows"))
                  }, {
                    default: g(() => [...H[22] || (H[22] = [
                      C(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : h("", !0),
              B.value.length > 0 ? (a(), R(cs, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${B.value.length} workflow${B.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: B.value.map((X) => `${X.name} — ${X.models_needing_path_sync_count} model path${X.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: g(() => [
                  k(Ie, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[8] || (H[8] = (X) => Se.$emit("view-workflows"))
                  }, {
                    default: g(() => [...H[23] || (H[23] = [
                      C(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : h("", !0),
              e.status.missing_models_count > 0 && !Y.value ? (a(), R(cs, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: g(() => [
                  k(Ie, {
                    variant: "primary",
                    size: "sm",
                    disabled: m.value,
                    onClick: b
                  }, {
                    default: g(() => [
                      C(f(m.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  k(Ie, {
                    variant: "secondary",
                    size: "sm",
                    onClick: H[9] || (H[9] = (X) => Se.$emit("view-workflows"))
                  }, {
                    default: g(() => [...H[24] || (H[24] = [
                      C(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : h("", !0),
              e.status.comparison.is_synced ? h("", !0) : (a(), R(cs, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Re.value,
                items: Be.value
              }, {
                actions: g(() => [
                  k(Ie, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: g(() => [...H[25] || (H[25] = [
                      C(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  k(Ie, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[10] || (H[10] = (X) => Se.$emit("view-nodes"))
                  }, {
                    default: g(() => [...H[26] || (H[26] = [
                      C(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (a(), R(cs, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: g(() => [
                  k(Ie, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[11] || (H[11] = (X) => Se.$emit("view-nodes"))
                  }, {
                    default: g(() => [...H[27] || (H[27] = [
                      C(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : h("", !0)
            ], 64)) : L.value ? (a(), i("span", xv, "No issues")) : (a(), R(ls, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      k(_v, {
        show: l.value,
        status: e.status,
        "is-repairing": p.value,
        onClose: H[12] || (H[12] = (X) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Iv = /* @__PURE__ */ Ce(Sv, [["__scopeId", "data-v-df52ba90"]]), XM = io({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const ZM = [
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
], eP = {
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
}, Ev = [
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
], tP = [
  ...Ev,
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
function Oo() {
  return !1;
}
class jr extends Error {
  constructor(o, n, l, r) {
    super(o);
    gn(this, "status");
    gn(this, "data");
    gn(this, "endpoint");
    this.name = "ComfyGitApiError", this.status = n, this.data = l, this.endpoint = r;
  }
}
function Tv() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function vt() {
  const e = $(!1), t = $(null);
  async function o(j, we) {
    var Rt;
    if (!((Rt = window.app) != null && Rt.api))
      throw new Error("ComfyUI API not available");
    const Fe = await window.app.api.fetchApi(j, we), ut = await Fe.text();
    if (!Fe.ok) {
      let jt = {};
      if (ut)
        try {
          const et = JSON.parse(ut);
          et && typeof et == "object" && (jt = et);
        } catch {
          jt = { error: ut };
        }
      const ps = jt.error || jt.message || jt.detail || Fe.statusText || `Request failed: ${Fe.status}`;
      throw new jr(String(ps), Fe.status, jt, j);
    }
    if (ut)
      return JSON.parse(ut);
  }
  async function n(j) {
    return o(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(j)}`);
  }
  async function l(j, we, Fe) {
    return o("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: j, email: we, password: Fe })
    });
  }
  async function r(j, we, Fe) {
    return o("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: j, email: we, password: Fe })
    });
  }
  async function c(j, we) {
    return o(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(j)}`, {
      headers: { Authorization: `Bearer ${we}` }
    });
  }
  async function u(j, we) {
    return o("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: j, refresh_token: we || null })
    });
  }
  async function d(j, we) {
    return o(`/v2/comfygit/cloud/environments?cloud_url=${encodeURIComponent(j)}`, {
      headers: { Authorization: `Bearer ${we}` }
    });
  }
  async function v(j, we, Fe) {
    return o(
      `/v2/comfygit/cloud/environments/${encodeURIComponent(we)}/revisions?cloud_url=${encodeURIComponent(j)}`,
      {
        headers: { Authorization: `Bearer ${Fe}` }
      }
    );
  }
  async function m(j, we, Fe, ut) {
    return o("/v2/comfygit/cloud/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${we}`
      },
      body: JSON.stringify({
        cloud_url: j,
        source_message: Fe || null,
        cloud_environment_id: ut || null
      })
    });
  }
  async function p(j = !1) {
    return o(j ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(j, we = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: j, allow_issues: we })
    });
  }
  async function y(j = 10, we = 0) {
    return o(`/v2/comfygit/log?limit=${j}&offset=${we}`);
  }
  async function _(j, we = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(j)}&limit=${we}`);
  }
  async function x(j) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: j })
    });
  }
  async function b() {
    return o("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function S() {
    return o("/v2/comfygit/deploy/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function O(j) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: j, force: !0 })
    });
  }
  async function T(j) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(j)}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function I(j, we) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(j)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: we, force: !0 })
    });
  }
  async function L() {
    return o("/v2/comfygit/branches");
  }
  async function A(j) {
    return o(`/v2/comfygit/commit/${j}`);
  }
  async function Q(j, we = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: j, force: we })
    });
  }
  async function P(j, we = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: j, start_point: we })
    });
  }
  async function B(j, we = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: j, force: we })
    });
  }
  async function Y(j, we = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(j)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: we })
    });
  }
  async function ee() {
    try {
      return await o("/v2/comfygit/environments");
    } catch {
      try {
        const j = await p();
        return {
          environments: [{
            name: j.environment,
            is_current: !0,
            path: "~/comfygit/environments/" + j.environment,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            workflow_count: j.workflows.total,
            node_count: 0,
            model_count: 0,
            current_branch: j.branch
          }],
          current: j.environment,
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
  async function ce() {
    return (await ee()).environments;
  }
  async function he(j) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(j)}`);
    } catch {
      return null;
    }
  }
  async function te(j, we) {
    const Fe = { target_env: j };
    return we && (Fe.workspace_path = we), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Fe)
    });
  }
  async function K() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function ie(j) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(j)
    });
  }
  async function De() {
    return o("/v2/workspace/environments/create_status");
  }
  async function oe(j = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${j}`);
  }
  async function ge(j) {
    return o(`/v2/workspace/environments/${j}`, {
      method: "DELETE"
    });
  }
  async function U(j = !1) {
    try {
      return o(j ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const we = await p(j), Fe = [];
      return we.workflows.new.forEach((ut) => {
        Fe.push({
          name: ut,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ut
        });
      }), we.workflows.modified.forEach((ut) => {
        Fe.push({
          name: ut,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ut
        });
      }), we.workflows.synced.forEach((ut) => {
        Fe.push({
          name: ut,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ut
        });
      }), Fe;
    }
  }
  async function me(j) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(j)}/details`);
  }
  async function Re(j) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(j)}/contract`);
  }
  async function Be(j, we) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(j)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(we)
    });
  }
  async function Se(j) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(j)}/contract`, {
      method: "DELETE"
    });
  }
  async function H(j) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(j)}/resolve`, {
      method: "POST"
    });
  }
  async function X(j, we, Fe) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(j)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: we, install_models: Fe })
    });
  }
  async function E(j, we, Fe) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(j)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: we, importance: Fe })
    });
  }
  async function M() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function ne() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function Ve(j) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(j)}`);
  }
  async function Ye(j) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: j })
    });
  }
  async function D(j, we) {
    return o(`/v2/workspace/models/${j}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: we })
    });
  }
  async function q(j, we) {
    return o(`/v2/workspace/models/${j}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: we })
    });
  }
  async function ue(j) {
    return o(`/v2/workspace/models/${j}`, {
      method: "DELETE"
    });
  }
  async function Ee(j) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(j)
    });
  }
  async function _e() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function ke() {
    return o("/v2/workspace/models/directory");
  }
  async function Ne(j) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: j })
    });
  }
  async function Oe(j) {
    const we = new URLSearchParams({ url: j });
    return o(`/v2/workspace/huggingface/repo-info?${we}`);
  }
  async function Me() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function xe(j, we = 10) {
    const Fe = new URLSearchParams({ query: j, limit: String(we) });
    return o(`/v2/workspace/huggingface/search?${Fe}`);
  }
  async function je(j) {
    try {
      const we = j ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(j)}` : "/v2/comfygit/config";
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
  async function ze(j, we) {
    const Fe = we ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(we)}` : "/v2/comfygit/config";
    return o(Fe, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(j)
    });
  }
  async function pe(j, we) {
    try {
      const Fe = new URLSearchParams();
      return j && Fe.append("level", j), we && Fe.append("lines", we.toString()), o(`/v2/comfygit/debug/logs?${Fe}`);
    } catch {
      return [];
    }
  }
  async function J(j, we) {
    try {
      const Fe = new URLSearchParams();
      return j && Fe.append("level", j), we && Fe.append("lines", we.toString()), o(`/v2/workspace/debug/logs?${Fe}`);
    } catch {
      return [];
    }
  }
  async function We() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function be() {
    return o("/v2/comfygit/debug/manifest");
  }
  async function Qe() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function Ae(j, we) {
    try {
      const Fe = new URLSearchParams();
      return j && Fe.append("level", j), we && Fe.append("lines", we.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Fe}`);
    } catch {
      return [];
    }
  }
  async function Pe() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function W(j) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: j })
    });
  }
  async function de() {
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
  async function ae(j) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(j)}/track-dev`, {
      method: "POST"
    });
  }
  async function Ke(j) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(j)}/install`, {
      method: "POST"
    });
  }
  async function F(j, we) {
    var ps, et, xa, El;
    const Fe = Tv(), ut = ((et = (ps = window.app) == null ? void 0 : ps.api) == null ? void 0 : et.clientId) ?? ((El = (xa = window.app) == null ? void 0 : xa.api) == null ? void 0 : El.initialClientId) ?? "comfygit-panel", Rt = {
      id: j.id,
      version: j.version || j.selected_version || "latest",
      selected_version: j.selected_version || "latest",
      mode: j.mode || "remote",
      channel: j.channel || "default"
    };
    return j.install_source && (Rt.install_source = j.install_source), j.install_source === "git" && j.repository && (Rt.repository = j.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Rt,
        ui_id: Fe,
        client_id: ut
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", Fe, "for package:", j.id), we != null && we.beforeQueueStart && await we.beforeQueueStart(Fe), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: Fe };
  }
  async function V(j) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(j)}/update`, {
      method: "POST"
    });
  }
  async function se(j) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(j)}`, {
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
  async function Te(j, we) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: j, url: we })
    });
  }
  async function Je(j) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(j)}`, {
      method: "DELETE"
    });
  }
  async function He(j, we, Fe) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(j)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: we, push_url: Fe })
    });
  }
  async function nt(j, we) {
    const Fe = {};
    return we && (Fe["X-Git-Auth-Token"] = we), o(`/v2/comfygit/remotes/${encodeURIComponent(j)}/fetch`, {
      method: "POST",
      headers: Fe
    });
  }
  async function yt(j) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(j)}/status`);
    } catch {
      return null;
    }
  }
  async function St(j = "skip", we = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: j,
        remove_extra_nodes: we
      })
    });
  }
  async function re(j, we) {
    const Fe = we ? `/v2/comfygit/remotes/${encodeURIComponent(j)}/pull-preview?branch=${encodeURIComponent(we)}` : `/v2/comfygit/remotes/${encodeURIComponent(j)}/pull-preview`;
    return o(Fe);
  }
  async function z(j, we = {}) {
    const Fe = { "Content-Type": "application/json" };
    return we.authToken && (Fe["X-Git-Auth-Token"] = we.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(j)}/pull`, {
      method: "POST",
      headers: Fe,
      body: JSON.stringify({
        model_strategy: we.modelStrategy || "skip",
        force: we.force || !1,
        resolutions: we.resolutions
      })
    });
  }
  async function fe(j, we) {
    const Fe = we ? `/v2/comfygit/remotes/${encodeURIComponent(j)}/push-preview?branch=${encodeURIComponent(we)}` : `/v2/comfygit/remotes/${encodeURIComponent(j)}/push-preview`;
    return o(Fe);
  }
  async function qe(j, we = {}) {
    const Fe = { "Content-Type": "application/json" };
    return we.authToken && (Fe["X-Git-Auth-Token"] = we.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(j)}/push`, {
      method: "POST",
      headers: Fe,
      body: JSON.stringify({ force: we.force || !1 })
    });
  }
  async function ct(j, we) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(j)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: we })
    });
  }
  async function It(j) {
    const we = {
      success: 0,
      failed: []
    };
    for (const Fe of j)
      try {
        await H(Fe), we.success++;
      } catch (ut) {
        we.failed.push({
          name: Fe,
          error: ut instanceof Error ? ut.message : "Unknown error"
        });
      }
    return we;
  }
  async function at(j) {
    var ut;
    const we = new FormData();
    if (we.append("file", j), !((ut = window.app) != null && ut.api))
      throw new Error("ComfyUI API not available");
    const Fe = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: we
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Fe.ok) {
      const Rt = await Fe.json().catch(() => ({}));
      throw new Error(Rt.error || `Preview failed: ${Fe.status}`);
    }
    return Fe.json();
  }
  async function $t(j) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(j)}`
    );
  }
  async function Ut(j, we, Fe, ut) {
    var ps;
    const Rt = new FormData();
    if (Rt.append("file", j), Rt.append("name", we), Rt.append("model_strategy", Fe), Rt.append("torch_backend", ut), !((ps = window.app) != null && ps.api))
      throw new Error("ComfyUI API not available");
    const jt = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Rt
    });
    if (!jt.ok) {
      const et = await jt.json().catch(() => ({}));
      throw new Error(et.message || et.error || `Import failed: ${jt.status}`);
    }
    return jt.json();
  }
  async function xs() {
    return o("/v2/workspace/import/status");
  }
  async function la(j) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: j })
    });
  }
  async function Us(j, we, Fe, ut) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: j,
        name: we,
        model_strategy: Fe,
        torch_backend: ut
      })
    });
  }
  async function ia() {
    return o("/v2/setup/status");
  }
  async function ro() {
    return o("/v2/comfygit/update-check");
  }
  async function co() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function ra(j) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(j)
    });
  }
  async function Ss() {
    return o("/v2/setup/initialize_status");
  }
  async function ca(j) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(j)
    });
  }
  async function Lo() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function ua() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function da(j, we) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: j, save_key: we })
    });
  }
  async function fa() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function ma(j) {
    const we = j ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(j)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(we);
  }
  async function vn(j) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(j)
    });
  }
  async function va() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function pa(j) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(j)}`, {
      method: "DELETE"
    });
  }
  async function ga(j) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(j)}/stop`, {
      method: "POST"
    });
  }
  async function ha(j) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(j)}/start`, {
      method: "POST"
    });
  }
  async function ya(j) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(j)}/status`);
  }
  async function wa(j) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: j })
    });
  }
  async function _a(j = !1) {
    return o(j ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function ka() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function ba() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function $a(j) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(j)
    });
  }
  async function Ca(j) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(j)}`, {
      method: "DELETE"
    });
  }
  async function pn(j) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(j)
    });
  }
  async function le() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function Z(j) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(j)}/info`);
  }
  async function Ge(j) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(j)}/instances`);
  }
  async function Xe(j, we) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(j)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(we)
    });
  }
  async function pt(j, we) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(j)}/instances/${encodeURIComponent(we)}/start`, {
      method: "POST"
    });
  }
  async function Et(j, we) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(j)}/instances/${encodeURIComponent(we)}/stop`, {
      method: "POST"
    });
  }
  async function rs(j, we) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(j)}/instances/${encodeURIComponent(we)}`, {
      method: "DELETE"
    });
  }
  async function Ks(j) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: j })
    });
  }
  return {
    isLoading: e,
    error: t,
    getStatus: p,
    commit: w,
    getHistory: y,
    getBranchHistory: _,
    exportEnv: x,
    validateExport: b,
    validateDeploy: S,
    exportEnvWithForce: O,
    validateEnvironmentExport: T,
    exportEnvironmentWithForce: I,
    // Git Operations
    getBranches: L,
    getCommitDetail: A,
    checkout: Q,
    createBranch: P,
    switchBranch: B,
    deleteBranch: Y,
    // Environment Management
    listEnvironments: ee,
    getEnvironments: ce,
    getEnvironmentDetails: he,
    switchEnvironment: te,
    getSwitchProgress: K,
    createEnvironment: ie,
    getCreateProgress: De,
    getComfyUIReleases: oe,
    deleteEnvironment: ge,
    // Workflow Management
    getWorkflows: U,
    getWorkflowDetails: me,
    getWorkflowContract: Re,
    saveWorkflowContract: Be,
    deleteWorkflowContract: Se,
    resolveWorkflow: H,
    installWorkflowDeps: X,
    setModelImportance: E,
    // Model Management
    getEnvironmentModels: M,
    getWorkspaceModels: ne,
    getModelDetails: Ve,
    openFileLocation: Ye,
    addModelSource: D,
    removeModelSource: q,
    deleteModel: ue,
    downloadModel: Ee,
    scanWorkspaceModels: _e,
    getModelsDirectory: ke,
    setModelsDirectory: Ne,
    getHuggingFaceRepoInfo: Oe,
    getModelsSubdirectories: Me,
    searchHuggingFaceRepos: xe,
    // Settings
    getConfig: je,
    updateConfig: ze,
    // Cloud Auth
    getCloudAuthConfig: n,
    loginToCloud: l,
    signupToCloud: r,
    getCloudMe: c,
    logoutFromCloud: u,
    getCloudEnvironments: d,
    getCloudEnvironmentRevisions: v,
    publishCurrentEnvironmentToCloud: m,
    // Debug/Logs
    getEnvironmentLogs: pe,
    getEnvironmentManifest: be,
    getWorkspaceLogs: J,
    getEnvironmentLogPath: We,
    getWorkspaceLogPath: Qe,
    getOrchestratorLogs: Ae,
    getOrchestratorLogPath: Pe,
    openFile: W,
    // Node Management
    getNodes: de,
    trackNodeAsDev: ae,
    installNode: Ke,
    queueNodeInstall: F,
    updateNode: V,
    uninstallNode: se,
    // Git Remotes
    getRemotes: ve,
    addRemote: Te,
    removeRemote: Je,
    updateRemoteUrl: He,
    fetchRemote: nt,
    getRemoteSyncStatus: yt,
    // Push/Pull
    getPullPreview: re,
    pullFromRemote: z,
    getPushPreview: fe,
    pushToRemote: qe,
    validateMerge: ct,
    // Environment Sync
    syncEnvironmentManually: St,
    // Workflow Repair
    repairWorkflowModels: It,
    // Import Operations
    previewTarballImport: at,
    previewGitImport: la,
    validateEnvironmentName: $t,
    executeImport: Ut,
    executeGitImport: Us,
    getImportProgress: xs,
    // First-Time Setup
    getSetupStatus: ia,
    // Manager Update Notice
    getUpdateCheck: ro,
    updateManager: co,
    initializeWorkspace: ra,
    getInitializeProgress: Ss,
    validatePath: ca,
    // Deploy Operations
    getDeploySummary: Lo,
    getDataCenters: ua,
    testRunPodConnection: da,
    getNetworkVolumes: fa,
    getRunPodGpuTypes: ma,
    deployToRunPod: vn,
    getRunPodPods: va,
    terminateRunPodPod: pa,
    stopRunPodPod: ga,
    startRunPodPod: ha,
    getDeploymentStatus: ya,
    exportDeployPackage: wa,
    getStoredRunPodKey: _a,
    clearRunPodKey: ka,
    // Custom Worker Operations
    getCustomWorkers: ba,
    addCustomWorker: $a,
    removeCustomWorker: Ca,
    testWorkerConnection: pn,
    scanForWorkers: le,
    getWorkerSystemInfo: Z,
    getWorkerInstances: Ge,
    deployToWorker: Xe,
    startWorkerInstance: pt,
    stopWorkerInstance: Et,
    terminateWorkerInstance: rs,
    // Git Authentication
    testGitAuth: Ks
  };
}
async function bn(e, t) {
  var n;
  if (!((n = window.app) != null && n.api))
    throw new Error("ComfyUI API not available");
  const o = await window.app.api.fetchApi(e, t);
  if (!o.ok) {
    const l = await o.json().catch(() => ({}));
    throw new Error(l.error || l.message || `Request failed: ${o.status}`);
  }
  return o.json();
}
function Mv() {
  async function e() {
    try {
      return await bn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function t() {
    try {
      return await bn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await bn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function n() {
    await bn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: t,
    restart: o,
    kill: n
  };
}
const Pv = { class: "base-modal-header" }, Rv = {
  key: 0,
  class: "base-modal-title"
}, Lv = { class: "base-modal-body" }, Nv = {
  key: 0,
  class: "base-modal-loading"
}, Dv = {
  key: 1,
  class: "base-modal-error"
}, Ov = {
  key: 0,
  class: "base-modal-footer"
}, Av = /* @__PURE__ */ $e({
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
  setup(e, { emit: t }) {
    const o = e, n = t;
    function l() {
      o.closeOnOverlayClick && n("close");
    }
    function r(c) {
      c.key === "Escape" && o.showCloseButton && n("close");
    }
    return rt(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), Mo(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, u) => (a(), R(Dt, { to: "body" }, [
      s("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        s("div", {
          class: Ue(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = ft(() => {
          }, ["stop"]))
        }, [
          s("div", Pv, [
            ot(c.$slots, "header", {}, () => [
              e.title ? (a(), i("h3", Rv, f(e.title), 1)) : h("", !0)
            ]),
            e.showCloseButton ? (a(), i("button", {
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
            ])])) : h("", !0)
          ]),
          s("div", Lv, [
            e.loading ? (a(), i("div", Nv, "Loading...")) : e.error ? (a(), i("div", Dv, f(e.error), 1)) : ot(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (a(), i("div", Ov, [
            ot(c.$slots, "footer", {}, void 0)
          ])) : h("", !0)
        ], 2)
      ])
    ]));
  }
}), xt = /* @__PURE__ */ Ce(Av, [["__scopeId", "data-v-8dab1081"]]), Uv = ["type", "disabled"], zv = {
  key: 0,
  class: "spinner"
}, Vv = /* @__PURE__ */ $e({
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
    return (t, o) => (a(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Ue(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => t.$emit("click", n))
    }, [
      e.loading ? (a(), i("span", zv)) : h("", !0),
      ot(t.$slots, "default", {}, void 0)
    ], 10, Uv));
  }
}), Le = /* @__PURE__ */ Ce(Vv, [["__scopeId", "data-v-f3452606"]]), Fv = {
  key: 0,
  class: "base-title-count"
}, Bv = /* @__PURE__ */ $e({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (t, o) => (a(), R(gl(`h${e.level}`), {
      class: Ue(["base-title", e.variant])
    }, {
      default: g(() => [
        ot(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), i("span", Fv, "(" + f(e.count) + ")", 1)) : h("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), oo = /* @__PURE__ */ Ce(Bv, [["__scopeId", "data-v-5a01561d"]]), Wv = ["value", "disabled"], Gv = {
  key: 0,
  value: "",
  disabled: ""
}, jv = ["value"], Hv = {
  key: 0,
  class: "base-select-error"
}, qv = /* @__PURE__ */ $e({
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
    function t(n) {
      return typeof n == "string" ? n : n.value;
    }
    function o(n) {
      return typeof n == "string" ? n : n.label;
    }
    return (n, l) => (a(), i("div", {
      class: Ue(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Ue(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => n.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (a(), i("option", Gv, f(e.placeholder), 1)) : h("", !0),
        (a(!0), i(G, null, ye(e.options, (r) => (a(), i("option", {
          key: t(r),
          value: t(r)
        }, f(o(r)), 9, jv))), 128))
      ], 42, Wv),
      e.error ? (a(), i("span", Hv, f(e.error), 1)) : h("", !0)
    ], 2));
  }
}), Rn = /* @__PURE__ */ Ce(qv, [["__scopeId", "data-v-4996bfe0"]]), Kv = { class: "popover-header" }, Jv = { class: "popover-title" }, Qv = { class: "popover-content" }, Yv = {
  key: 0,
  class: "popover-actions"
}, Xv = /* @__PURE__ */ $e({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (t, o) => (a(), R(Dt, { to: "body" }, [
      e.show ? (a(), i("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (n) => t.$emit("close"))
      }, [
        s("div", {
          class: "popover",
          style: Wt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = ft(() => {
          }, ["stop"]))
        }, [
          s("div", Kv, [
            s("h4", Jv, f(e.title), 1),
            s("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", Qv, [
            ot(t.$slots, "content", {}, void 0)
          ]),
          t.$slots.actions ? (a(), i("div", Yv, [
            ot(t.$slots, "actions", {}, void 0)
          ])) : h("", !0)
        ], 4)
      ])) : h("", !0)
    ]));
  }
}), is = /* @__PURE__ */ Ce(Xv, [["__scopeId", "data-v-42815ace"]]), Zv = { class: "detail-section" }, ep = {
  key: 0,
  class: "empty-message"
}, tp = { class: "model-header" }, sp = { class: "model-name" }, op = { class: "model-details" }, np = { class: "model-row" }, ap = { class: "model-row" }, lp = { class: "label" }, ip = {
  key: 0,
  class: "model-row model-row-nodes"
}, rp = { class: "node-list" }, cp = ["onClick"], up = {
  key: 1,
  class: "model-row"
}, dp = { class: "value" }, fp = {
  key: 2,
  class: "model-row"
}, mp = { class: "value error" }, vp = {
  key: 0,
  class: "model-actions"
}, pp = { class: "detail-section" }, gp = {
  key: 0,
  class: "empty-message"
}, hp = { class: "node-content" }, yp = { class: "node-main" }, wp = { class: "node-name" }, _p = { class: "node-badge" }, kp = {
  key: 0,
  class: "node-version"
}, bp = ["onClick"], $p = {
  key: 2,
  class: "node-install-queued"
}, Cp = {
  key: 0,
  class: "node-guidance"
}, xp = /* @__PURE__ */ $e({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c, queueNodeInstall: u } = vt(), d = $(null), v = $(!1), m = $(null), p = $(!1), w = $({}), y = $(!1), _ = $(/* @__PURE__ */ new Set()), x = $(/* @__PURE__ */ new Set()), b = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function S(te) {
      switch (te) {
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
    function O(te) {
      switch (te) {
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
    function T(te) {
      switch (te) {
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
    function I(te) {
      switch (te) {
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
    function L(te) {
      switch (te) {
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
    function A(te) {
      if (!te.loaded_by || te.loaded_by.length === 0) return [];
      const K = te.hash || te.filename;
      return _.value.has(K) ? te.loaded_by : te.loaded_by.slice(0, 3);
    }
    function Q(te) {
      return _.value.has(te);
    }
    function P(te) {
      _.value.has(te) ? _.value.delete(te) : _.value.add(te), _.value = new Set(_.value);
    }
    async function B() {
      v.value = !0, m.value = null;
      try {
        d.value = await l(o.workflowName);
      } catch (te) {
        m.value = te instanceof Error ? te.message : "Failed to load workflow details";
      } finally {
        v.value = !1;
      }
    }
    function Y(te, K) {
      w.value[te] = K, p.value = !0;
    }
    async function ee(te) {
      try {
        await c(te);
      } catch (K) {
        m.value = K instanceof Error ? K.message : "Failed to open file location";
      }
    }
    async function ce(te) {
      if (te.package_id)
        try {
          const K = te.latest_version || "latest";
          await u({
            id: te.package_id,
            version: K,
            selected_version: K,
            mode: "remote",
            channel: "default"
          }), x.value.add(te.package_id);
        } catch (K) {
          m.value = K instanceof Error ? K.message : "Failed to queue node install";
        }
    }
    async function he() {
      if (!p.value) {
        n("close");
        return;
      }
      v.value = !0, m.value = null;
      try {
        for (const [te, K] of Object.entries(w.value))
          await r(o.workflowName, te, K);
        n("refresh"), n("close");
      } catch (te) {
        m.value = te instanceof Error ? te.message : "Failed to save changes";
      } finally {
        v.value = !1;
      }
    }
    return rt(B), (te, K) => (a(), i(G, null, [
      k(xt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: v.value,
        error: m.value || void 0,
        onClose: K[4] || (K[4] = (ie) => n("close"))
      }, {
        body: g(() => [
          d.value ? (a(), i(G, { key: 0 }, [
            s("section", Zv, [
              k(oo, { variant: "section" }, {
                default: g(() => [
                  C("MODELS USED (" + f(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (a(), i("div", ep, " No models used in this workflow ")) : h("", !0),
              (a(!0), i(G, null, ye(d.value.models, (ie) => {
                var De;
                return a(), i("div", {
                  key: ie.hash || ie.filename,
                  class: "model-card"
                }, [
                  s("div", tp, [
                    K[6] || (K[6] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", sp, f(ie.filename), 1)
                  ]),
                  s("div", op, [
                    s("div", np, [
                      K[7] || (K[7] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: Ue(["value", S(ie.status)])
                      }, f(O(ie.status)), 3)
                    ]),
                    s("div", ap, [
                      s("span", lp, [
                        K[8] || (K[8] = C(" Importance: ", -1)),
                        k(Gr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: K[0] || (K[0] = (oe) => y.value = !0)
                        })
                      ]),
                      k(Rn, {
                        "model-value": w.value[ie.filename] || ie.importance,
                        options: b,
                        "onUpdate:modelValue": (oe) => Y(ie.filename, oe)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    ie.loaded_by && ie.loaded_by.length > 0 ? (a(), i("div", ip, [
                      K[9] || (K[9] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", rp, [
                        (a(!0), i(G, null, ye(A(ie), (oe, ge) => (a(), i("div", {
                          key: `${oe.node_id}-${ge}`,
                          class: "node-reference"
                        }, f(oe.node_type) + " (Node #" + f(oe.node_id) + ") ", 1))), 128)),
                        ie.loaded_by.length > 3 ? (a(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (oe) => P(ie.hash || ie.filename)
                        }, f(Q(ie.hash || ie.filename) ? "▼ Show less" : `▶ View all (${ie.loaded_by.length})`), 9, cp)) : h("", !0)
                      ])
                    ])) : h("", !0),
                    ie.size_mb ? (a(), i("div", up, [
                      K[10] || (K[10] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", dp, f(ie.size_mb) + " MB", 1)
                    ])) : h("", !0),
                    ie.has_category_mismatch ? (a(), i("div", fp, [
                      K[13] || (K[13] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", mp, [
                        K[11] || (K[11] = C(" In ", -1)),
                        s("code", null, f(ie.actual_category) + "/", 1),
                        K[12] || (K[12] = C(" but loader needs ", -1)),
                        s("code", null, f((De = ie.expected_categories) == null ? void 0 : De[0]) + "/", 1)
                      ])
                    ])) : h("", !0)
                  ]),
                  ie.status !== "available" ? (a(), i("div", vp, [
                    ie.status === "downloadable" ? (a(), R(Le, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: K[1] || (K[1] = (oe) => n("resolve"))
                    }, {
                      default: g(() => [...K[14] || (K[14] = [
                        C(" Download ", -1)
                      ])]),
                      _: 1
                    })) : ie.status === "category_mismatch" && ie.file_path ? (a(), R(Le, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => ee(ie.file_path)
                    }, {
                      default: g(() => [...K[15] || (K[15] = [
                        C(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : ie.status !== "path_mismatch" ? (a(), R(Le, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: K[2] || (K[2] = (oe) => n("resolve"))
                    }, {
                      default: g(() => [...K[16] || (K[16] = [
                        C(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : h("", !0)
                  ])) : h("", !0)
                ]);
              }), 128))
            ]),
            s("section", pp, [
              k(oo, { variant: "section" }, {
                default: g(() => [
                  C("NODES USED (" + f(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (a(), i("div", gp, " No custom nodes used in this workflow ")) : h("", !0),
              (a(!0), i(G, null, ye(d.value.nodes, (ie, De) => (a(), i("div", {
                key: `${ie.name}-${ie.status}-${De}`,
                class: "node-item"
              }, [
                s("span", {
                  class: Ue(["node-status", T(ie.status)])
                }, f(I(ie.status)), 3),
                s("div", hp, [
                  s("div", yp, [
                    s("span", wp, f(ie.name), 1),
                    s("span", _p, f(L(ie.status)), 1),
                    ie.version ? (a(), i("span", kp, "v" + f(ie.version), 1)) : h("", !0),
                    ie.status === "uninstallable" && ie.package_id && !x.value.has(ie.package_id) ? (a(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (oe) => ce(ie)
                    }, " Install ", 8, bp)) : ie.status === "uninstallable" && ie.package_id && x.value.has(ie.package_id) ? (a(), i("span", $p, " Queued ")) : h("", !0)
                  ]),
                  ie.guidance ? (a(), i("div", Cp, f(ie.guidance), 1)) : h("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : h("", !0)
        ]),
        footer: g(() => [
          k(Le, {
            variant: "secondary",
            onClick: K[3] || (K[3] = (ie) => n("close"))
          }, {
            default: g(() => [...K[17] || (K[17] = [
              C(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (a(), R(Le, {
            key: 0,
            variant: "primary",
            onClick: he
          }, {
            default: g(() => [...K[18] || (K[18] = [
              C(" Save Changes ", -1)
            ])]),
            _: 1
          })) : h("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      k(is, {
        show: y.value,
        title: "Model Importance Levels",
        onClose: K[5] || (K[5] = (ie) => y.value = !1)
      }, {
        content: g(() => [...K[19] || (K[19] = [
          s("ul", { class: "importance-info-list" }, [
            s("li", null, [
              s("strong", null, "Required"),
              C(" — Must have for workflow to run")
            ]),
            s("li", null, [
              s("strong", null, "Flexible"),
              C(" — Workflow adapts if missing")
            ]),
            s("li", null, [
              s("strong", null, "Optional"),
              C(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Sp = /* @__PURE__ */ Ce(xp, [["__scopeId", "data-v-543076d9"]]), lt = io({
  items: [],
  status: "idle"
});
let _s = null;
function Hr() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Ua(e) {
  return lt.items.find((t) => t.id === e);
}
async function po() {
  if (lt.status === "downloading") return;
  const e = lt.items.find((t) => t.status === "queued");
  if (!e) {
    lt.status = "idle";
    return;
  }
  lt.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Ip(e), e.status = "completed", e.progress = 100;
  } catch (t) {
    e.status = "failed", e.error = t instanceof Error ? t.message : "Download failed", e.retries++;
  } finally {
    lt.status = "idle", po();
  }
}
async function Ip(e) {
  return new Promise((t, o) => {
    _s && (_s.close(), _s = null);
    const n = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${n}`);
    _s = l;
    let r = Date.now(), c = 0, u = Date.now(), d = !1;
    const v = 2e3, m = window.setInterval(() => {
      d || Date.now() - u > v && (e.speed = 0, e.eta = 0);
    }, 250), p = () => {
      window.clearInterval(m);
    };
    l.onmessage = (w) => {
      try {
        const y = JSON.parse(w.data);
        switch (y.type) {
          case "progress":
            e.downloaded = y.downloaded || 0, e.size = y.total || e.size, u = Date.now();
            const _ = u, x = (_ - r) / 1e3, b = e.downloaded - c;
            if (b > 0 && x > 0)
              if (e.speed = b / x, r = _, c = e.downloaded, e.speed > 0 && e.size > 0) {
                const S = e.size - e.downloaded;
                e.eta = S / e.speed;
              } else
                e.eta = 0;
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            d = !0, p(), l.close(), _s = null, t();
            break;
          case "error":
            d = !0, p(), l.close(), _s = null, o(new Error(y.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      p(), l.close(), _s = null, d || o(new Error("Connection lost"));
    };
  });
}
async function Ep() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const t = await e.json();
    if (!t.pending_downloads || t.pending_downloads.length === 0) return;
    for (const o of t.pending_downloads) {
      if (lt.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const n = {
        id: Hr(),
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
      lt.items.push(n);
    }
    console.log(`[ComfyGit] Loaded ${t.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function Ro() {
  function e(b) {
    for (const S of b) {
      if (lt.items.some(
        (I) => I.url === S.url && I.targetPath === S.targetPath && ["queued", "downloading", "paused", "completed"].includes(I.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${S.filename}`);
        continue;
      }
      const T = {
        id: Hr(),
        workflow: S.workflow,
        filename: S.filename,
        url: S.url,
        targetPath: S.targetPath,
        size: S.size || 0,
        type: S.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      lt.items.push(T);
    }
    lt.status === "idle" && po();
  }
  async function t(b) {
    const S = Ua(b);
    if (S) {
      if (S.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(S.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        _s && (_s.close(), _s = null), S.status = "failed", S.error = "Cancelled by user", lt.status = "idle", po();
      } else if (S.status === "queued") {
        const O = lt.items.findIndex((T) => T.id === b);
        O >= 0 && lt.items.splice(O, 1);
      }
    }
  }
  function o(b) {
    const S = Ua(b);
    !S || S.status !== "failed" || (S.status = "queued", S.error = void 0, S.progress = 0, S.downloaded = 0, lt.status === "idle" && po());
  }
  function n(b) {
    const S = Ua(b);
    !S || S.status !== "paused" || (S.status = "queued", lt.status === "idle" && po());
  }
  function l() {
    const b = lt.items.filter((S) => S.status === "paused");
    for (const S of b)
      S.status = "queued";
    lt.status === "idle" && po();
  }
  function r(b) {
    const S = lt.items.findIndex((O) => O.id === b);
    S >= 0 && ["completed", "failed", "paused"].includes(lt.items[S].status) && lt.items.splice(S, 1);
  }
  function c() {
    lt.items = lt.items.filter((b) => b.status !== "completed");
  }
  function u() {
    lt.items = lt.items.filter((b) => b.status !== "failed");
  }
  const d = N(
    () => lt.items.find((b) => b.status === "downloading")
  ), v = N(
    () => lt.items.filter((b) => b.status === "queued")
  ), m = N(
    () => lt.items.filter((b) => b.status === "completed")
  ), p = N(
    () => lt.items.filter((b) => b.status === "failed")
  ), w = N(
    () => lt.items.filter((b) => b.status === "paused")
  ), y = N(() => lt.items.length > 0), _ = N(
    () => lt.items.filter((b) => b.status === "queued" || b.status === "downloading").length
  ), x = N(
    () => lt.items.some((b) => b.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Nn(lt),
    // Computed
    currentDownload: d,
    queuedItems: v,
    completedItems: m,
    failedItems: p,
    pausedItems: w,
    hasItems: y,
    activeCount: _,
    hasPaused: x,
    // Actions
    addToQueue: e,
    cancelDownload: t,
    retryDownload: o,
    resumeDownload: n,
    resumeAllPaused: l,
    removeItem: r,
    clearCompleted: c,
    clearFailed: u,
    loadPendingDownloads: Ep
  };
}
function qr() {
  const e = $(null), t = $(null), o = $([]), n = $([]), l = $(!1), r = $(null);
  async function c(O, T) {
    var L;
    if (!((L = window.app) != null && L.api))
      throw new Error("ComfyUI API not available");
    const I = await window.app.api.fetchApi(O, T);
    if (!I.ok) {
      const A = await I.json().catch(() => ({})), Q = A.error || A.message || `Request failed: ${I.status}`;
      throw new Error(Q);
    }
    return I.json();
  }
  async function u(O) {
    l.value = !0, r.value = null;
    try {
      let T;
      return Oo() || (T = await c(
        `/v2/comfygit/workflow/${O}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), T.nodes.version_gated = T.nodes.version_gated || [], T.nodes.uninstallable = T.nodes.uninstallable || [], T.node_guidance = T.node_guidance || {}, T.package_aliases = T.package_aliases || {}, e.value = T, T;
    } catch (T) {
      const I = T instanceof Error ? T.message : "Unknown error occurred";
      throw r.value = I, T;
    } finally {
      l.value = !1;
    }
  }
  async function d(O, T, I, L) {
    l.value = !0, r.value = null;
    try {
      let A;
      if (!Oo()) {
        const Q = Object.fromEntries(T), P = Object.fromEntries(I), B = L ? Array.from(L) : [];
        A = await c(
          `/v2/comfygit/workflow/${O}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: Q,
              model_choices: P,
              skipped_packages: B
            })
          }
        );
      }
      return t.value = A, A;
    } catch (A) {
      const Q = A instanceof Error ? A.message : "Unknown error occurred";
      throw r.value = Q, A;
    } finally {
      l.value = !1;
    }
  }
  async function v(O, T = 10) {
    l.value = !0, r.value = null;
    try {
      let I;
      return Oo() || (I = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: O, limit: T })
        }
      )), o.value = I.results, I.results;
    } catch (I) {
      const L = I instanceof Error ? I.message : "Unknown error occurred";
      throw r.value = L, I;
    } finally {
      l.value = !1;
    }
  }
  async function m(O, T = 10) {
    l.value = !0, r.value = null;
    try {
      let I;
      return Oo() || (I = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: O, limit: T })
        }
      )), n.value = I.results, I.results;
    } catch (I) {
      const L = I instanceof Error ? I.message : "Unknown error occurred";
      throw r.value = L, I;
    } finally {
      l.value = !1;
    }
  }
  const p = io({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function w() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.nodesInstalled = [], p.installError = void 0, p.needsRestart = void 0, p.error = void 0, p.nodeInstallProgress = void 0;
  }
  async function y(O) {
    p.phase = "installing", p.nodesInstalled = [], p.installError = void 0, p.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Oo(), await _(O);
    } catch (T) {
      const I = T instanceof Error ? T.message : "Failed to install nodes";
      throw p.installError = I, T;
    }
  }
  async function _(O) {
    var I;
    const T = await c(
      `/v2/comfygit/workflow/${O}/install`,
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
      const L = new Map(((I = T.failed) == null ? void 0 : I.map((A) => [A.node_id, A.error])) || []);
      for (let A = 0; A < p.nodesToInstall.length; A++) {
        const Q = p.nodesToInstall[A], P = L.get(Q);
        p.nodeInstallProgress.completedNodes.push({
          node_id: Q,
          success: !P,
          error: P
        });
      }
    }
    return p.nodesInstalled = T.nodes_installed, p.needsRestart = T.nodes_installed.length > 0, T.failed && T.failed.length > 0 && (p.installError = `${T.failed.length} package(s) failed to install`), T;
  }
  async function x(O, T, I) {
    w(), p.phase = "resolving", r.value = null;
    const L = Object.fromEntries(T), A = Object.fromEntries(I);
    try {
      const Q = await fetch(`/v2/comfygit/workflow/${O}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: L,
          model_choices: A
        })
      });
      if (!Q.ok)
        throw new Error(`Request failed: ${Q.status}`);
      if (!Q.body)
        throw new Error("No response body");
      const P = Q.body.getReader(), B = new TextDecoder();
      let Y = "";
      for (; ; ) {
        const { done: ee, value: ce } = await P.read();
        if (ee) break;
        Y += B.decode(ce, { stream: !0 });
        const he = Y.split(`

`);
        Y = he.pop() || "";
        for (const te of he) {
          if (!te.trim()) continue;
          const K = te.split(`
`);
          let ie = "", De = "";
          for (const oe of K)
            oe.startsWith("event: ") ? ie = oe.slice(7) : oe.startsWith("data: ") && (De = oe.slice(6));
          if (De)
            try {
              const oe = JSON.parse(De);
              b(ie, oe);
            } catch (oe) {
              console.warn("Failed to parse SSE event:", oe);
            }
        }
      }
    } catch (Q) {
      const P = Q instanceof Error ? Q.message : "Unknown error occurred";
      throw r.value = P, p.error = P, p.phase = "error", Q;
    }
  }
  function b(O, T) {
    switch (O) {
      case "batch_start":
        p.phase = "downloading", p.totalFiles = T.total;
        break;
      case "file_start":
        p.currentFile = T.filename, p.currentFileIndex = T.index, p.bytesDownloaded = 0, p.bytesTotal = void 0;
        break;
      case "file_progress":
        p.bytesDownloaded = T.downloaded, p.bytesTotal = T.total;
        break;
      case "file_complete":
        p.completedFiles.push({
          filename: T.filename,
          success: T.success,
          error: T.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        p.nodesToInstall = T.nodes_to_install || [], T.download_results && (p.completedFiles = T.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = T.message, p.phase = "error", r.value = T.message;
        break;
    }
  }
  function S(O, T) {
    const { addToQueue: I } = Ro(), L = T.filter((A) => A.url && A.target_path).map((A) => ({
      workflow: O,
      filename: A.filename,
      url: A.url,
      targetPath: A.target_path,
      size: A.size || 0,
      type: "model"
    }));
    return L.length > 0 && I(L), L.length;
  }
  return {
    // State
    result: e,
    appliedResult: t,
    searchResults: o,
    modelSearchResults: n,
    isLoading: l,
    error: r,
    progress: p,
    // Methods
    analyzeWorkflow: u,
    applyResolution: d,
    applyResolutionWithProgress: x,
    installNodes: y,
    searchNodes: v,
    searchModels: m,
    resetProgress: w,
    queueModelDownloads: S
  };
}
const Tp = { class: "resolution-stepper" }, Mp = { class: "stepper-header" }, Pp = ["onClick"], Rp = {
  key: 0,
  class: "step-icon"
}, Lp = {
  key: 1,
  class: "step-number"
}, Np = { class: "step-label" }, Dp = {
  key: 0,
  class: "step-connector"
}, Op = { class: "stepper-content" }, Ap = /* @__PURE__ */ $e({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    function l(v) {
      var m;
      if ((m = o.stepStats) != null && m[v]) {
        const p = o.stepStats[v];
        return p.total > 0 && p.resolved === p.total;
      }
      return o.completedSteps.includes(v);
    }
    function r(v) {
      var m;
      if ((m = o.stepStats) != null && m[v]) {
        const p = o.stepStats[v];
        return p.resolved > 0 && p.resolved < p.total;
      }
      return !1;
    }
    function c(v) {
      return l(v) ? "state-complete" : r(v) ? "state-partial" : "state-pending";
    }
    function u(v) {
      return !1;
    }
    function d(v) {
      n("step-change", v);
    }
    return (v, m) => (a(), i("div", Tp, [
      s("div", Mp, [
        (a(!0), i(G, null, ye(e.steps, (p, w) => (a(), i("div", {
          key: p.id,
          class: Ue(["step", {
            active: e.currentStep === p.id,
            completed: l(p.id),
            "in-progress": r(p.id),
            disabled: u(p.id)
          }]),
          onClick: (y) => d(p.id)
        }, [
          s("div", {
            class: Ue(["step-indicator", c(p.id)])
          }, [
            l(p.id) ? (a(), i("span", Rp, "✓")) : (a(), i("span", Lp, f(w + 1), 1))
          ], 2),
          s("div", Np, f(p.label), 1),
          w < e.steps.length - 1 ? (a(), i("div", Dp)) : h("", !0)
        ], 10, Pp))), 128))
      ]),
      s("div", Op, [
        ot(v.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Up = /* @__PURE__ */ Ce(Ap, [["__scopeId", "data-v-2a7b3af8"]]), zp = /* @__PURE__ */ $e({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = N(() => t.confidence >= 0.9 ? "high" : t.confidence >= 0.7 ? "medium" : "low"), n = N(() => `confidence-${o.value}`), l = N(() => t.showPercentage ? `${Math.round(t.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, c) => (a(), i("span", {
      class: Ue(["confidence-badge", n.value, e.size])
    }, f(l.value), 3));
  }
}), Gn = /* @__PURE__ */ Ce(zp, [["__scopeId", "data-v-17ec4b80"]]), Vp = { class: "node-info" }, Fp = { class: "node-info-text" }, Bp = { class: "item-body" }, Wp = {
  key: 0,
  class: "resolved-state"
}, Gp = {
  key: 1,
  class: "multiple-options"
}, jp = {
  key: 0,
  class: "installed-packs-section"
}, Hp = { class: "installed-packs-list" }, qp = ["onClick"], Kp = { class: "installed-pack-name" }, Jp = { class: "installed-pack-source" }, Qp = { class: "options-list" }, Yp = ["onClick"], Xp = ["name", "value", "checked", "onChange"], Zp = { class: "option-content" }, eg = { class: "option-header" }, tg = { class: "option-package-id" }, sg = {
  key: 0,
  class: "option-title"
}, og = { class: "option-meta" }, ng = {
  key: 0,
  class: "installed-badge"
}, ag = { class: "action-buttons" }, lg = {
  key: 2,
  class: "unresolved"
}, ig = {
  key: 0,
  class: "installed-packs-section"
}, rg = { class: "installed-packs-list" }, cg = ["onClick"], ug = { class: "installed-pack-name" }, dg = { class: "installed-pack-source" }, fg = {
  key: 1,
  class: "searching-state"
}, mg = { class: "options-list" }, vg = ["onClick"], pg = ["name", "value"], gg = { class: "option-content" }, hg = { class: "option-header" }, yg = { class: "option-package-id" }, wg = {
  key: 0,
  class: "option-description"
}, _g = { class: "option-meta" }, kg = {
  key: 0,
  class: "installed-badge"
}, bg = {
  key: 3,
  class: "unresolved-message"
}, $g = { class: "action-buttons" }, Cg = /* @__PURE__ */ $e({
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
    isSearching: { type: Boolean },
    installedNodePacks: {}
  },
  emits: ["mark-optional", "skip", "manual-entry", "search", "option-selected", "clear-choice", "search-result-selected", "installed-pack-selected"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    function l(m, p = 80) {
      return m.length <= p ? m : m.slice(0, p - 3) + "...";
    }
    const r = N(() => !!o.choice);
    N(() => {
      var m;
      return (m = o.choice) == null ? void 0 : m.action;
    }), N(() => {
      var m;
      return (m = o.choice) == null ? void 0 : m.package_id;
    });
    const c = N(() => o.installedNodePacks || []), u = N(() => {
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
    function d(m) {
      n("option-selected", m);
    }
    function v(m) {
      switch (m) {
        case "development":
          return "dev";
        case "git":
          return "git";
        case "registry":
          return "registry";
        default:
          return m || "unknown";
      }
    }
    return (m, p) => (a(), i("div", {
      class: Ue(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: r.value }])
    }, [
      s("div", Vp, [
        s("span", Fp, [
          p[7] || (p[7] = C("Node type: ", -1)),
          s("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), i("span", {
          key: 0,
          class: Ue(["status-badge", u.value])
        }, f(e.statusLabel), 3)) : h("", !0)
      ]),
      s("div", Bp, [
        r.value ? (a(), i("div", Wp, [
          k(Le, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (w) => n("clear-choice"))
          }, {
            default: g(() => [...p[8] || (p[8] = [
              C(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), i("div", Gp, [
          c.value.length > 0 ? (a(), i("div", jp, [
            p[9] || (p[9] = s("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            s("div", Hp, [
              (a(!0), i(G, null, ye(c.value, (w) => (a(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (y) => n("installed-pack-selected", w.package_id)
              }, [
                s("span", Kp, f(w.package_id), 1),
                s("span", Jp, f(v(w.source)), 1)
              ], 8, qp))), 128))
            ])
          ])) : h("", !0),
          p[13] || (p[13] = s("p", { class: "options-prompt" }, "Potential matches:", -1)),
          s("div", Qp, [
            (a(!0), i(G, null, ye(e.options, (w, y) => (a(), i("label", {
              key: w.package_id,
              class: Ue(["option-card", { selected: e.selectedOptionIndex === y }]),
              onClick: (_) => d(y)
            }, [
              s("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: y,
                checked: e.selectedOptionIndex === y,
                onChange: (_) => d(y)
              }, null, 40, Xp),
              s("div", Zp, [
                s("div", eg, [
                  s("span", tg, f(w.package_id), 1),
                  k(Gn, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                w.title && w.title !== w.package_id ? (a(), i("div", sg, f(w.title), 1)) : h("", !0),
                s("div", og, [
                  w.is_installed ? (a(), i("span", ng, "Already Installed")) : h("", !0)
                ])
              ])
            ], 10, Yp))), 128))
          ]),
          s("div", ag, [
            k(Le, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (w) => n("search"))
            }, {
              default: g(() => [...p[10] || (p[10] = [
                C(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            k(Le, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (w) => n("manual-entry"))
            }, {
              default: g(() => [...p[11] || (p[11] = [
                C(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(Le, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (w) => n("mark-optional"))
            }, {
              default: g(() => [...p[12] || (p[12] = [
                C(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), i("div", lg, [
          c.value.length > 0 ? (a(), i("div", ig, [
            p[14] || (p[14] = s("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            s("div", rg, [
              (a(!0), i(G, null, ye(c.value, (w) => (a(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (y) => n("installed-pack-selected", w.package_id)
              }, [
                s("span", ug, f(w.package_id), 1),
                s("span", dg, f(v(w.source)), 1)
              ], 8, cg))), 128))
            ])
          ])) : h("", !0),
          e.isSearching ? (a(), i("div", fg, [...p[15] || (p[15] = [
            s("span", { class: "searching-spinner" }, null, -1),
            s("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), i(G, { key: 2 }, [
            p[16] || (p[16] = s("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            s("div", mg, [
              (a(!0), i(G, null, ye(e.searchResults.slice(0, 5), (w, y) => (a(), i("label", {
                key: w.package_id,
                class: "option-card",
                onClick: (_) => n("search-result-selected", w)
              }, [
                s("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: y
                }, null, 8, pg),
                s("div", gg, [
                  s("div", hg, [
                    s("span", yg, f(w.package_id), 1),
                    k(Gn, {
                      confidence: w.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  w.description ? (a(), i("div", wg, f(l(w.description)), 1)) : h("", !0),
                  s("div", _g, [
                    w.is_installed ? (a(), i("span", kg, "Already Installed")) : h("", !0)
                  ])
                ])
              ], 8, vg))), 128))
            ])
          ], 64)) : (a(), i("div", bg, [...p[17] || (p[17] = [
            s("span", { class: "warning-icon" }, "⚠", -1),
            s("span", null, "No matching package found in registry", -1)
          ])])),
          s("div", $g, [
            k(Le, {
              variant: "secondary",
              size: "sm",
              onClick: p[4] || (p[4] = (w) => n("search"))
            }, {
              default: g(() => {
                var w;
                return [
                  C(f((w = e.searchResults) != null && w.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            k(Le, {
              variant: "secondary",
              size: "sm",
              onClick: p[5] || (p[5] = (w) => n("manual-entry"))
            }, {
              default: g(() => [...p[18] || (p[18] = [
                C(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(Le, {
              variant: "secondary",
              size: "sm",
              onClick: p[6] || (p[6] = (w) => n("mark-optional"))
            }, {
              default: g(() => [...p[19] || (p[19] = [
                C(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), xg = /* @__PURE__ */ Ce(Cg, [["__scopeId", "data-v-fb0bbf03"]]), Sg = { class: "item-navigator" }, Ig = { class: "nav-item-info" }, Eg = ["title"], Tg = { class: "nav-controls" }, Mg = { class: "nav-arrows" }, Pg = ["disabled"], Rg = ["disabled"], Lg = { class: "nav-position" }, Ng = /* @__PURE__ */ $e({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: t }) {
    const o = t;
    return (n, l) => (a(), i("div", Sg, [
      s("div", Ig, [
        s("code", {
          class: "item-name",
          title: e.itemName
        }, f(e.itemName), 9, Eg)
      ]),
      s("div", Tg, [
        s("div", Mg, [
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, Pg),
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, Rg)
        ]),
        s("span", Lg, f(e.currentIndex + 1) + "/" + f(e.totalItems), 1)
      ])
    ]));
  }
}), Kr = /* @__PURE__ */ Ce(Ng, [["__scopeId", "data-v-74af7920"]]), Dg = ["type", "value", "placeholder", "disabled"], Og = {
  key: 0,
  class: "base-input-error"
}, Ag = /* @__PURE__ */ $e({
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
    return (t, o) => (a(), i("div", {
      class: Ue(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Ue(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.value)),
        onKeyup: [
          o[1] || (o[1] = ds((n) => t.$emit("enter"), ["enter"])),
          o[2] || (o[2] = ds((n) => t.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Dg),
      e.error ? (a(), i("span", Og, f(e.error), 1)) : h("", !0)
    ], 2));
  }
}), wt = /* @__PURE__ */ Ce(Ag, [["__scopeId", "data-v-9ba02cdc"]]), Ug = { class: "node-resolution-step" }, zg = {
  key: 0,
  class: "auto-resolved-section"
}, Vg = { class: "section-header" }, Fg = { class: "stat-badge" }, Bg = { class: "resolved-packages-list" }, Wg = { class: "package-info" }, Gg = { class: "package-id" }, jg = { class: "node-count" }, Hg = { class: "package-actions" }, qg = {
  key: 0,
  class: "status-badge install"
}, Kg = {
  key: 1,
  class: "status-badge skip"
}, Jg = ["onClick"], Qg = {
  key: 1,
  class: "section-divider"
}, Yg = { class: "step-header" }, Xg = { class: "stat-badge" }, Zg = {
  key: 1,
  class: "step-body"
}, eh = {
  key: 3,
  class: "empty-state"
}, th = { class: "node-modal-body" }, sh = { class: "node-search-results-container" }, oh = {
  key: 0,
  class: "node-search-results"
}, nh = ["onClick"], ah = { class: "node-result-header" }, lh = { class: "node-result-package-id" }, ih = {
  key: 0,
  class: "node-result-description"
}, rh = {
  key: 1,
  class: "node-empty-state"
}, ch = {
  key: 2,
  class: "node-empty-state"
}, uh = {
  key: 3,
  class: "node-empty-state"
}, dh = { class: "node-manual-entry-modal" }, fh = { class: "node-modal-body" }, mh = { class: "node-modal-actions" }, vh = /* @__PURE__ */ $e({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {},
    installedNodePacks: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: t }) {
    const o = e, n = t, { searchNodes: l } = qr(), r = $(0), c = $(!1), u = $(!1), d = $(""), v = $(""), m = $([]), p = $(!1), w = $(/* @__PURE__ */ new Map()), y = $(/* @__PURE__ */ new Set()), _ = $(!1);
    function x() {
      _.value && ge(), _.value = !1;
    }
    const b = N(() => o.nodes[r.value]), S = N(() => o.nodes.filter((E) => o.nodeChoices.has(E.node_type)).length), O = N(() => b.value ? w.value.get(b.value.node_type) || [] : []), T = N(() => b.value ? y.value.has(b.value.node_type) : !1);
    kt(b, async (E) => {
      var M;
      E && ((M = E.options) != null && M.length || w.value.has(E.node_type) || y.value.has(E.node_type) || o.nodeChoices.has(E.node_type) || await I(E.node_type));
    }, { immediate: !0 });
    async function I(E) {
      y.value.add(E);
      try {
        const M = await l(E, 5);
        w.value.set(E, M);
      } catch {
        w.value.set(E, []);
      } finally {
        y.value.delete(E);
      }
    }
    const L = N(() => o.autoResolvedPackages.filter((E) => !o.skippedPackages.has(E.package_id)).length);
    function A(E) {
      return o.skippedPackages.has(E);
    }
    function Q(E) {
      n("package-skip", E);
    }
    const P = N(() => {
      var M;
      if (!b.value) return "not-found";
      const E = o.nodeChoices.get(b.value.node_type);
      if (E)
        switch (E.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (M = b.value.options) != null && M.length ? "ambiguous" : "not-found";
    }), B = N(() => {
      var M;
      if (!b.value) return;
      const E = o.nodeChoices.get(b.value.node_type);
      if (E)
        switch (E.action) {
          case "install":
            return E.package_id ? `→ ${E.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (M = b.value.options) != null && M.length ? `${b.value.options.length} matches` : "Not Found";
    });
    function Y(E) {
      E >= 0 && E < o.nodes.length && (r.value = E);
    }
    function ee() {
      var E;
      for (let M = r.value + 1; M < o.nodes.length; M++) {
        const ne = o.nodes[M];
        if (!((E = o.nodeChoices) != null && E.has(ne.node_type))) {
          Y(M);
          return;
        }
      }
    }
    function ce() {
      b.value && (n("mark-optional", b.value.node_type), Pt(() => ee()));
    }
    function he() {
      b.value && (n("skip", b.value.node_type), Pt(() => ee()));
    }
    function te(E) {
      b.value && (n("option-selected", b.value.node_type, E), Pt(() => ee()));
    }
    function K() {
      b.value && n("clear-choice", b.value.node_type);
    }
    function ie() {
      b.value && (d.value = b.value.node_type, m.value = O.value, c.value = !0, Be(d.value));
    }
    function De() {
      v.value = "", u.value = !0;
    }
    function oe(E) {
      b.value && (n("manual-entry", b.value.node_type, E), Pt(() => ee()));
    }
    function ge() {
      c.value = !1, d.value = "", m.value = [];
    }
    function U() {
      u.value = !1, v.value = "";
    }
    let me = null;
    function Re() {
      me && clearTimeout(me), me = setTimeout(() => {
        Be(d.value);
      }, 300);
    }
    async function Be(E) {
      if (!E.trim()) {
        m.value = [];
        return;
      }
      p.value = !0;
      try {
        m.value = await l(E, 10);
      } catch {
        m.value = [];
      } finally {
        p.value = !1;
      }
    }
    function Se(E) {
      b.value && (n("manual-entry", b.value.node_type, E.package_id), ge(), Pt(() => ee()));
    }
    function H(E) {
      b.value && (n("manual-entry", b.value.node_type, E.package_id), Pt(() => ee()));
    }
    function X() {
      !b.value || !v.value.trim() || (n("manual-entry", b.value.node_type, v.value.trim()), U(), Pt(() => ee()));
    }
    return (E, M) => {
      var ne, Ve;
      return a(), i("div", Ug, [
        e.autoResolvedPackages.length > 0 ? (a(), i("div", zg, [
          s("div", Vg, [
            M[6] || (M[6] = s("div", { class: "section-info" }, [
              s("h4", { class: "section-title" }, "Packages to Install"),
              s("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            s("span", Fg, f(L.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          s("div", Bg, [
            (a(!0), i(G, null, ye(e.autoResolvedPackages, (Ye) => (a(), i("div", {
              key: Ye.package_id,
              class: "resolved-package-item"
            }, [
              s("div", Wg, [
                s("code", Gg, f(Ye.package_id), 1),
                s("span", jg, f(Ye.node_types_count) + " node type" + f(Ye.node_types_count > 1 ? "s" : ""), 1)
              ]),
              s("div", Hg, [
                A(Ye.package_id) ? (a(), i("span", Kg, " SKIPPED ")) : (a(), i("span", qg, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (D) => Q(Ye.package_id)
                }, f(A(Ye.package_id) ? "Include" : "Skip"), 9, Jg)
              ])
            ]))), 128))
          ])
        ])) : h("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), i("div", Qg)) : h("", !0),
        e.nodes.length > 0 ? (a(), i(G, { key: 2 }, [
          s("div", Yg, [
            M[7] || (M[7] = s("div", { class: "step-info" }, [
              s("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              s("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            s("span", Xg, f(S.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          b.value ? (a(), R(Kr, {
            key: 0,
            "item-name": b.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: M[0] || (M[0] = (Ye) => Y(r.value - 1)),
            onNext: M[1] || (M[1] = (Ye) => Y(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : h("", !0),
          b.value ? (a(), i("div", Zg, [
            k(xg, {
              "node-type": b.value.node_type,
              "has-multiple-options": !!((ne = b.value.options) != null && ne.length),
              options: b.value.options,
              choice: (Ve = e.nodeChoices) == null ? void 0 : Ve.get(b.value.node_type),
              status: P.value,
              "status-label": B.value,
              "search-results": O.value,
              "is-searching": T.value,
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: ce,
              onSkip: he,
              onManualEntry: De,
              onSearch: ie,
              onOptionSelected: te,
              onClearChoice: K,
              onSearchResultSelected: H,
              onInstalledPackSelected: oe
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching", "installed-node-packs"])
          ])) : h("", !0)
        ], 64)) : h("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), i("div", eh, [...M[8] || (M[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : h("", !0),
        (a(), R(Dt, { to: "body" }, [
          c.value ? (a(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: M[4] || (M[4] = ft((Ye) => _.value = !0, ["self"])),
            onMouseup: ft(x, ["self"])
          }, [
            s("div", {
              class: "node-search-modal",
              onMousedown: M[3] || (M[3] = (Ye) => _.value = !1)
            }, [
              s("div", { class: "node-modal-header" }, [
                M[9] || (M[9] = s("h4", null, "Search Node Packages", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: ge
                }, "✕")
              ]),
              s("div", th, [
                k(wt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": M[2] || (M[2] = (Ye) => d.value = Ye),
                  placeholder: "Search by node type, package name...",
                  onInput: Re
                }, null, 8, ["modelValue"]),
                s("div", sh, [
                  m.value.length > 0 ? (a(), i("div", oh, [
                    (a(!0), i(G, null, ye(m.value, (Ye) => (a(), i("div", {
                      key: Ye.package_id,
                      class: "node-search-result-item",
                      onClick: (D) => Se(Ye)
                    }, [
                      s("div", ah, [
                        s("code", lh, f(Ye.package_id), 1),
                        Ye.match_confidence ? (a(), R(Gn, {
                          key: 0,
                          confidence: Ye.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : h("", !0)
                      ]),
                      Ye.description ? (a(), i("div", ih, f(Ye.description), 1)) : h("", !0)
                    ], 8, nh))), 128))
                  ])) : p.value ? (a(), i("div", rh, "Searching...")) : d.value ? (a(), i("div", ch, 'No packages found matching "' + f(d.value) + '"', 1)) : (a(), i("div", uh, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : h("", !0)
        ])),
        (a(), R(Dt, { to: "body" }, [
          u.value ? (a(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ft(U, ["self"])
          }, [
            s("div", dh, [
              s("div", { class: "node-modal-header" }, [
                M[10] || (M[10] = s("h4", null, "Enter Package Manually", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: U
                }, "✕")
              ]),
              s("div", fh, [
                k(wt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": M[5] || (M[5] = (Ye) => v.value = Ye),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", mh, [
                  k(Le, {
                    variant: "secondary",
                    onClick: U
                  }, {
                    default: g(() => [...M[11] || (M[11] = [
                      C("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(Le, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: X
                  }, {
                    default: g(() => [...M[12] || (M[12] = [
                      C(" Add Package ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : h("", !0)
        ]))
      ]);
    };
  }
}), ph = /* @__PURE__ */ Ce(vh, [["__scopeId", "data-v-94c6a438"]]), gh = { class: "node-info" }, hh = { class: "node-info-text" }, yh = { class: "item-body" }, wh = {
  key: 0,
  class: "resolved-state"
}, _h = {
  key: 1,
  class: "multiple-options"
}, kh = { class: "options-list" }, bh = ["onClick"], $h = ["name", "value", "checked", "onChange"], Ch = { class: "option-content" }, xh = { class: "option-header" }, Sh = { class: "option-filename" }, Ih = { class: "option-meta" }, Eh = { class: "option-size" }, Th = { class: "option-category" }, Mh = { class: "option-path" }, Ph = { class: "action-buttons" }, Rh = {
  key: 2,
  class: "unresolved"
}, Lh = { class: "action-buttons" }, Nh = /* @__PURE__ */ $e({
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
    const o = e, n = t, l = N(() => !!o.choice);
    N(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), N(() => {
      var d, v;
      return ((v = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const r = N(() => {
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
      const v = d / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, v) => (a(), i("div", {
      class: Ue(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      s("div", gh, [
        s("span", hh, [
          v[7] || (v[7] = C("Used by: ", -1)),
          s("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), i("span", {
          key: 0,
          class: Ue(["status-badge", r.value])
        }, f(e.statusLabel), 3)) : h("", !0)
      ]),
      s("div", yh, [
        l.value ? (a(), i("div", wh, [
          k(Le, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (m) => n("clear-choice"))
          }, {
            default: g(() => [...v[8] || (v[8] = [
              C(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), i("div", _h, [
          v[12] || (v[12] = s("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          s("div", kh, [
            (a(!0), i(G, null, ye(e.options, (m, p) => (a(), i("label", {
              key: m.model.hash,
              class: Ue(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (w) => c(p)
            }, [
              s("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (w) => c(p)
              }, null, 40, $h),
              s("div", Ch, [
                s("div", xh, [
                  s("span", Sh, f(m.model.filename), 1),
                  k(Gn, {
                    confidence: m.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                s("div", Ih, [
                  s("span", Eh, f(u(m.model.size)), 1),
                  s("span", Th, f(m.model.category), 1)
                ]),
                s("div", Mh, f(m.model.relative_path), 1)
              ])
            ], 10, bh))), 128))
          ]),
          s("div", Ph, [
            k(Le, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (m) => n("search"))
            }, {
              default: g(() => [...v[9] || (v[9] = [
                C(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(Le, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (m) => n("download-url"))
            }, {
              default: g(() => [...v[10] || (v[10] = [
                C(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(Le, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (m) => n("mark-optional"))
            }, {
              default: g(() => [...v[11] || (v[11] = [
                C(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), i("div", Rh, [
          v[16] || (v[16] = s("div", { class: "unresolved-message" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "Model not found in workspace")
          ], -1)),
          s("div", Lh, [
            k(Le, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (m) => n("search"))
            }, {
              default: g(() => [...v[13] || (v[13] = [
                C(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(Le, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (m) => n("download-url"))
            }, {
              default: g(() => [...v[14] || (v[14] = [
                C(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(Le, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (m) => n("mark-optional"))
            }, {
              default: g(() => [...v[15] || (v[15] = [
                C(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Dh = /* @__PURE__ */ Ce(Nh, [["__scopeId", "data-v-8a82fefa"]]), Oh = { class: "model-resolution-step" }, Ah = { class: "step-header" }, Uh = { class: "step-info" }, zh = { class: "step-title" }, Vh = { class: "step-description" }, Fh = { class: "stat-badge" }, Bh = {
  key: 1,
  class: "step-body"
}, Wh = {
  key: 2,
  class: "empty-state"
}, Gh = { class: "model-search-modal" }, jh = { class: "model-modal-body" }, Hh = {
  key: 0,
  class: "model-search-results"
}, qh = ["onClick"], Kh = { class: "model-result-header" }, Jh = { class: "model-result-filename" }, Qh = { class: "model-result-meta" }, Yh = { class: "model-result-category" }, Xh = { class: "model-result-size" }, Zh = {
  key: 0,
  class: "model-result-path"
}, ey = {
  key: 1,
  class: "model-no-results"
}, ty = {
  key: 2,
  class: "model-searching"
}, sy = { class: "model-download-url-modal" }, oy = { class: "model-modal-body" }, ny = { class: "model-input-group" }, ay = { class: "model-input-group" }, ly = { class: "model-modal-actions" }, iy = /* @__PURE__ */ $e({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(e, { emit: t }) {
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
    function n(oe) {
      var ge;
      return oe && ((ge = o[oe]) == null ? void 0 : ge[0]) || null;
    }
    const l = e, r = t, c = $(0), u = $(!1), d = $(!1), v = $(""), m = $(""), p = $(""), w = $([]), y = $(!1), _ = N(() => l.models[c.value]), x = N(() => l.models.some((oe) => oe.is_download_intent)), b = N(() => l.models.filter(
      (oe) => l.modelChoices.has(oe.filename) || oe.is_download_intent
    ).length), S = N(() => {
      var ge;
      if (!_.value) return "";
      const oe = n((ge = _.value.reference) == null ? void 0 : ge.node_type);
      return oe ? `${oe}/${_.value.filename}` : "";
    }), O = N(() => {
      var ge;
      if (!_.value) return "not-found";
      const oe = l.modelChoices.get(_.value.filename);
      if (oe)
        switch (oe.action) {
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
      return _.value.is_download_intent ? "download" : (ge = _.value.options) != null && ge.length ? "ambiguous" : "not-found";
    }), T = N(() => {
      var ge, U;
      if (!_.value) return;
      const oe = l.modelChoices.get(_.value.filename);
      if (oe)
        switch (oe.action) {
          case "select":
            return (ge = oe.selected_model) != null && ge.filename ? `→ ${oe.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (U = _.value.options) != null && U.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function I(oe) {
      oe >= 0 && oe < l.models.length && (c.value = oe);
    }
    function L() {
      var oe;
      for (let ge = c.value + 1; ge < l.models.length; ge++) {
        const U = l.models[ge];
        if (!U.is_download_intent && !((oe = l.modelChoices) != null && oe.has(U.filename))) {
          I(ge);
          return;
        }
      }
    }
    function A() {
      _.value && (r("mark-optional", _.value.filename), Pt(() => L()));
    }
    function Q() {
      _.value && (r("skip", _.value.filename), Pt(() => L()));
    }
    function P(oe) {
      _.value && (r("option-selected", _.value.filename, oe), Pt(() => L()));
    }
    function B() {
      _.value && r("clear-choice", _.value.filename);
    }
    function Y() {
      _.value && (v.value = _.value.filename, u.value = !0);
    }
    function ee() {
      _.value && (m.value = _.value.download_source || "", p.value = _.value.target_path || S.value, d.value = !0);
    }
    function ce() {
      u.value = !1, v.value = "", w.value = [];
    }
    function he() {
      d.value = !1, m.value = "", p.value = "";
    }
    function te() {
      y.value = !0, setTimeout(() => {
        y.value = !1;
      }, 300);
    }
    function K(oe) {
      _.value && (ce(), Pt(() => L()));
    }
    function ie() {
      !_.value || !m.value.trim() || (r("download-url", _.value.filename, m.value.trim(), p.value.trim() || void 0), he(), Pt(() => L()));
    }
    function De(oe) {
      if (!oe) return "Unknown";
      const ge = oe / (1024 * 1024 * 1024);
      return ge >= 1 ? `${ge.toFixed(2)} GB` : `${(oe / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (oe, ge) => {
      var U, me, Re;
      return a(), i("div", Oh, [
        s("div", Ah, [
          s("div", Uh, [
            s("h3", zh, f(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            s("p", Vh, f(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          s("span", Fh, f(b.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), R(Kr, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: ge[0] || (ge[0] = (Be) => I(c.value - 1)),
          onNext: ge[1] || (ge[1] = (Be) => I(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : h("", !0),
        _.value ? (a(), i("div", Bh, [
          k(Dh, {
            filename: _.value.filename,
            "node-type": ((U = _.value.reference) == null ? void 0 : U.node_type) || "Unknown",
            "has-multiple-options": !!((me = _.value.options) != null && me.length),
            options: _.value.options,
            choice: (Re = e.modelChoices) == null ? void 0 : Re.get(_.value.filename),
            status: O.value,
            "status-label": T.value,
            onMarkOptional: A,
            onSkip: Q,
            onDownloadUrl: ee,
            onSearch: Y,
            onOptionSelected: P,
            onClearChoice: B
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), i("div", Wh, [...ge[5] || (ge[5] = [
          s("p", null, "No models need resolution.", -1)
        ])])),
        (a(), R(Dt, { to: "body" }, [
          u.value ? (a(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ft(ce, ["self"])
          }, [
            s("div", Gh, [
              s("div", { class: "model-modal-header" }, [
                ge[6] || (ge[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: ce
                }, "✕")
              ]),
              s("div", jh, [
                k(wt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": ge[2] || (ge[2] = (Be) => v.value = Be),
                  placeholder: "Search by filename, category...",
                  onInput: te
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), i("div", Hh, [
                  (a(!0), i(G, null, ye(w.value, (Be) => (a(), i("div", {
                    key: Be.hash,
                    class: "model-search-result-item",
                    onClick: (Se) => K()
                  }, [
                    s("div", Kh, [
                      s("code", Jh, f(Be.filename), 1)
                    ]),
                    s("div", Qh, [
                      s("span", Yh, f(Be.category), 1),
                      s("span", Xh, f(De(Be.size)), 1)
                    ]),
                    Be.relative_path ? (a(), i("div", Zh, f(Be.relative_path), 1)) : h("", !0)
                  ], 8, qh))), 128))
                ])) : v.value && !y.value ? (a(), i("div", ey, ' No models found matching "' + f(v.value) + '" ', 1)) : h("", !0),
                y.value ? (a(), i("div", ty, "Searching...")) : h("", !0)
              ])
            ])
          ])) : h("", !0)
        ])),
        (a(), R(Dt, { to: "body" }, [
          d.value ? (a(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ft(he, ["self"])
          }, [
            s("div", sy, [
              s("div", { class: "model-modal-header" }, [
                ge[7] || (ge[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: he
                }, "✕")
              ]),
              s("div", oy, [
                s("div", ny, [
                  ge[8] || (ge[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  k(wt, {
                    modelValue: m.value,
                    "onUpdate:modelValue": ge[3] || (ge[3] = (Be) => m.value = Be),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", ay, [
                  ge[9] || (ge[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  k(wt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": ge[4] || (ge[4] = (Be) => p.value = Be),
                    placeholder: S.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", ly, [
                  k(Le, {
                    variant: "secondary",
                    onClick: he
                  }, {
                    default: g(() => [...ge[10] || (ge[10] = [
                      C("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(Le, {
                    variant: "primary",
                    disabled: !m.value.trim() || !p.value.trim(),
                    onClick: ie
                  }, {
                    default: g(() => [...ge[11] || (ge[11] = [
                      C(" Queue Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : h("", !0)
        ]))
      ]);
    };
  }
}), ry = /* @__PURE__ */ Ce(iy, [["__scopeId", "data-v-5c700bfa"]]), cy = { class: "applying-step" }, uy = {
  key: 0,
  class: "phase-content"
}, dy = {
  key: 1,
  class: "phase-content"
}, fy = { class: "phase-description" }, my = { class: "overall-progress" }, vy = { class: "progress-bar" }, py = { class: "progress-label" }, gy = { class: "install-list" }, hy = { class: "install-icon" }, yy = { key: 0 }, wy = {
  key: 1,
  class: "spinner"
}, _y = { key: 2 }, ky = { key: 3 }, by = {
  key: 0,
  class: "install-error"
}, $y = {
  key: 2,
  class: "phase-content"
}, Cy = { class: "phase-header" }, xy = { class: "phase-title" }, Sy = { class: "completion-summary" }, Iy = {
  key: 0,
  class: "summary-item success"
}, Ey = { class: "summary-text" }, Ty = {
  key: 1,
  class: "summary-item error"
}, My = { class: "summary-text" }, Py = {
  key: 2,
  class: "failed-list"
}, Ry = { class: "failed-node-id" }, Ly = { class: "failed-error" }, Ny = {
  key: 4,
  class: "summary-item success"
}, Dy = {
  key: 5,
  class: "restart-prompt"
}, Oy = {
  key: 3,
  class: "phase-content error"
}, Ay = { class: "error-message" }, Uy = /* @__PURE__ */ $e({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const t = e, o = N(() => {
      var v, m;
      const u = ((v = t.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || t.progress.nodesToInstall.length;
      if (!u) return 0;
      const d = ((m = t.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.length) ?? 0;
      return Math.round(d / u * 100);
    }), n = N(() => {
      var u;
      return ((u = t.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((d) => !d.success)) || [];
    }), l = N(() => n.value.length > 0);
    function r(u, d) {
      var m, p;
      const v = (m = t.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.find((w) => w.node_id === u);
      return v ? v.success ? "complete" : "failed" : ((p = t.progress.nodeInstallProgress) == null ? void 0 : p.currentIndex) === d ? "installing" : "pending";
    }
    function c(u) {
      var d, v;
      return (v = (d = t.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((m) => m.node_id === u)) == null ? void 0 : v.error;
    }
    return (u, d) => {
      var v, m, p, w;
      return a(), i("div", cy, [
        e.progress.phase === "resolving" ? (a(), i("div", uy, [...d[2] || (d[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), i("div", dy, [
          d[3] || (d[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", fy, " Installing " + f((((v = e.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + f(((m = e.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", my, [
            s("div", vy, [
              s("div", {
                class: "progress-fill",
                style: Wt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            s("span", py, f(((p = e.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", gy, [
            (a(!0), i(G, null, ye(e.progress.nodesToInstall, (y, _) => (a(), i("div", {
              key: y,
              class: Ue(["install-item", r(y, _)])
            }, [
              s("span", hy, [
                r(y, _) === "pending" ? (a(), i("span", yy, "○")) : r(y, _) === "installing" ? (a(), i("span", wy, "◌")) : r(y, _) === "complete" ? (a(), i("span", _y, "✓")) : r(y, _) === "failed" ? (a(), i("span", ky, "✗")) : h("", !0)
              ]),
              s("code", null, f(y), 1),
              c(y) ? (a(), i("span", by, f(c(y)), 1)) : h("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), i("div", $y, [
          s("div", Cy, [
            s("span", {
              class: Ue(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            s("h3", xy, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          s("div", Sy, [
            e.progress.nodesInstalled.length > 0 ? (a(), i("div", Iy, [
              d[4] || (d[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", Ey, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : h("", !0),
            n.value.length > 0 ? (a(), i("div", Ty, [
              d[5] || (d[5] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", My, f(n.value.length) + " package" + f(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : h("", !0),
            n.value.length > 0 ? (a(), i("div", Py, [
              (a(!0), i(G, null, ye(n.value, (y) => (a(), i("div", {
                key: y.node_id,
                class: "failed-item"
              }, [
                s("code", Ry, f(y.node_id), 1),
                s("span", Ly, f(y.error), 1)
              ]))), 128))
            ])) : h("", !0),
            n.value.length > 0 ? (a(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (y) => u.$emit("retry-failed"))
            }, " Retry Failed (" + f(n.value.length) + ") ", 1)) : h("", !0),
            l.value ? h("", !0) : (a(), i("div", Ny, [...d[6] || (d[6] = [
              s("span", { class: "summary-icon" }, "✓", -1),
              s("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = s("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), i("div", Dy, [
              d[7] || (d[7] = s("div", { class: "restart-warning" }, [
                s("span", { class: "warning-icon" }, "⚠"),
                s("div", { class: "warning-content" }, [
                  s("strong", null, "Restart Required"),
                  s("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              s("button", {
                class: "restart-button",
                onClick: d[1] || (d[1] = (y) => u.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : h("", !0)
          ])
        ])) : e.progress.phase === "error" ? (a(), i("div", Oy, [
          d[9] || (d[9] = s("div", { class: "phase-header" }, [
            s("span", { class: "phase-icon error" }, "✗"),
            s("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          s("p", Ay, f(e.progress.error), 1)
        ])) : h("", !0)
      ]);
    };
  }
}), zy = /* @__PURE__ */ Ce(Uy, [["__scopeId", "data-v-5efaae58"]]), Vy = {
  key: 0,
  class: "loading-state"
}, Fy = {
  key: 1,
  class: "wizard-content"
}, By = {
  key: 0,
  class: "step-content"
}, Wy = { class: "analysis-summary" }, Gy = { class: "analysis-header" }, jy = { class: "summary-description" }, Hy = { class: "stats-grid" }, qy = { class: "stat-card" }, Ky = { class: "stat-items" }, Jy = {
  key: 0,
  class: "stat-item success"
}, Qy = { class: "stat-count" }, Yy = {
  key: 1,
  class: "stat-item info"
}, Xy = { class: "stat-count" }, Zy = {
  key: 2,
  class: "stat-item warning"
}, e1 = { class: "stat-count" }, t1 = {
  key: 3,
  class: "stat-item warning"
}, s1 = { class: "stat-count" }, o1 = {
  key: 4,
  class: "stat-item warning"
}, n1 = { class: "stat-count" }, a1 = {
  key: 5,
  class: "stat-item error"
}, l1 = { class: "stat-count" }, i1 = { class: "stat-card" }, r1 = { class: "stat-items" }, c1 = { class: "stat-item success" }, u1 = { class: "stat-count" }, d1 = {
  key: 0,
  class: "stat-item info"
}, f1 = { class: "stat-count" }, m1 = {
  key: 1,
  class: "stat-item warning"
}, v1 = { class: "stat-count" }, p1 = {
  key: 2,
  class: "stat-item warning"
}, g1 = { class: "stat-count" }, h1 = {
  key: 3,
  class: "stat-item error"
}, y1 = { class: "stat-count" }, w1 = {
  key: 0,
  class: "status-message warning"
}, _1 = { class: "status-text" }, k1 = {
  key: 1,
  class: "status-message warning"
}, b1 = { class: "status-text" }, $1 = {
  key: 2,
  class: "status-message info"
}, C1 = { class: "status-text" }, x1 = {
  key: 3,
  class: "status-message info"
}, S1 = { class: "status-text" }, I1 = {
  key: 4,
  class: "status-message info"
}, E1 = { class: "status-text" }, T1 = {
  key: 5,
  class: "status-message warning"
}, M1 = { class: "status-text" }, P1 = {
  key: 6,
  class: "status-message success"
}, R1 = {
  key: 7,
  class: "category-mismatch-section"
}, L1 = { class: "mismatch-list" }, N1 = { class: "mismatch-path" }, D1 = { class: "mismatch-target" }, O1 = {
  key: 8,
  class: "category-mismatch-section"
}, A1 = { class: "mismatch-list" }, U1 = { class: "mismatch-path" }, z1 = { class: "status-text" }, V1 = {
  key: 1,
  class: "step-content node-step-content"
}, F1 = {
  key: 0,
  class: "community-node-section"
}, B1 = { class: "community-node-header" }, W1 = { class: "community-node-title" }, G1 = { class: "community-node-list" }, j1 = { class: "community-node-info" }, H1 = { class: "community-node-heading" }, q1 = { class: "item-name" }, K1 = { class: "community-node-package" }, J1 = { class: "community-node-meta" }, Q1 = { class: "community-node-guidance" }, Y1 = { key: 0 }, X1 = { class: "community-choice-status" }, Z1 = { class: "community-node-actions" }, e0 = {
  key: 3,
  class: "step-content"
}, t0 = { class: "review-summary" }, s0 = { class: "review-stats" }, o0 = { class: "review-stat" }, n0 = { class: "stat-value" }, a0 = { class: "review-stat" }, l0 = { class: "stat-value" }, i0 = { class: "review-stat" }, r0 = { class: "stat-value" }, c0 = { class: "review-stat" }, u0 = { class: "stat-value" }, d0 = {
  key: 0,
  class: "review-section"
}, f0 = { class: "section-title" }, m0 = { class: "review-items" }, v0 = { class: "item-name" }, p0 = { class: "item-choice" }, g0 = {
  key: 0,
  class: "choice-badge install"
}, h0 = {
  key: 1,
  class: "choice-badge skip"
}, y0 = {
  key: 1,
  class: "review-section"
}, w0 = { class: "section-title" }, _0 = { class: "review-items" }, k0 = { class: "item-name" }, b0 = { class: "item-choice" }, $0 = {
  key: 0,
  class: "choice-badge install"
}, C0 = {
  key: 1,
  class: "choice-badge optional"
}, x0 = {
  key: 2,
  class: "choice-badge skip"
}, S0 = {
  key: 2,
  class: "review-section"
}, I0 = { class: "section-title" }, E0 = { class: "review-items" }, T0 = { class: "item-name" }, M0 = { class: "item-choice" }, P0 = {
  key: 0,
  class: "choice-badge install"
}, R0 = {
  key: 1,
  class: "choice-badge optional"
}, L0 = {
  key: 2,
  class: "choice-badge skip"
}, N0 = {
  key: 1,
  class: "choice-badge pending"
}, D0 = {
  key: 3,
  class: "review-section"
}, O0 = { class: "section-title" }, A0 = { class: "review-items download-details" }, U0 = { class: "download-info" }, z0 = { class: "item-name" }, V0 = { class: "download-meta" }, F0 = { class: "download-path" }, B0 = ["title"], W0 = {
  key: 4,
  class: "review-section"
}, G0 = { class: "section-title" }, j0 = { class: "review-items" }, H0 = { class: "item-name" }, q0 = { class: "item-choice" }, K0 = {
  key: 0,
  class: "choice-badge install"
}, J0 = {
  key: 1,
  class: "choice-badge download"
}, Q0 = {
  key: 2,
  class: "choice-badge optional"
}, Y0 = {
  key: 3,
  class: "choice-badge skip"
}, X0 = {
  key: 4,
  class: "choice-badge skip"
}, Z0 = {
  key: 1,
  class: "choice-badge download"
}, ew = {
  key: 2,
  class: "choice-badge pending"
}, tw = {
  key: 5,
  class: "no-choices"
}, sw = /* @__PURE__ */ $e({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const o = e, n = t, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: v } = qr(), { loadPendingDownloads: m } = Ro(), { openFileLocation: p, queueNodeInstall: w, getNodes: y } = vt(), _ = $(null), x = $([]), b = $(!1), S = $(!1), O = $(null), T = $("analysis"), I = $([]), L = $(/* @__PURE__ */ new Map()), A = $(/* @__PURE__ */ new Map()), Q = $(/* @__PURE__ */ new Set()), P = N(() => {
      const re = [
        { id: "analysis", label: "Analysis" }
      ];
      return (te.value || De.value || oe.value) && re.push({ id: "nodes", label: "Nodes" }), K.value && re.push({ id: "models", label: "Models" }), re.push({ id: "review", label: "Review" }), T.value === "applying" && re.push({ id: "applying", label: "Applying" }), re;
    }), B = N(() => _.value ? _.value.stats.needs_user_input : !1), Y = N(() => _.value ? _.value.nodes.version_gated || [] : []), ee = N(() => _.value ? _.value.nodes.uninstallable || [] : []), ce = N(() => ee.value.filter((re) => {
      var z;
      return !!((z = re.package) != null && z.package_id);
    })), he = N(() => Y.value.length > 0), te = N(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), K = N(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), ie = N(() => _.value ? _.value.stats.download_intents > 0 : !1), De = N(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), oe = N(() => ce.value.length > 0), ge = N(() => _.value ? _.value.nodes.resolved.length : 0), U = N(() => _.value ? _.value.models.resolved.filter((re) => re.has_category_mismatch) : []), me = N(() => U.value.length > 0), Re = N(() => te.value || De.value || oe.value ? "nodes" : K.value ? "models" : "review"), Be = N(() => {
      if (!_.value) return [];
      const re = _.value.nodes.resolved.filter((fe) => !fe.is_installed), z = /* @__PURE__ */ new Set();
      return re.filter((fe) => z.has(fe.package.package_id) ? !1 : (z.add(fe.package.package_id), !0));
    }), Se = N(() => {
      if (!_.value) return [];
      const re = _.value.nodes.resolved.filter((fe) => !fe.is_installed), z = /* @__PURE__ */ new Map();
      for (const fe of re) {
        const qe = z.get(fe.package.package_id);
        qe ? qe.node_types_count++ : z.set(fe.package.package_id, {
          package_id: fe.package.package_id,
          title: fe.package.title,
          node_types_count: 1
        });
      }
      return Array.from(z.values());
    }), H = N(() => Be.value.filter((re) => !Q.value.has(re.package.package_id))), X = N(() => _.value ? _.value.models.resolved.filter(
      (re) => re.match_type === "download_intent" || re.match_type === "property_download_intent"
    ).map((re) => ({
      filename: re.reference.widget_value,
      reference: re.reference,
      is_download_intent: !0,
      resolved_model: re.model,
      download_source: re.download_source,
      target_path: re.target_path
    })) : []), E = N(() => {
      if (!_.value) return [];
      const re = _.value.nodes.unresolved.map((fe) => ({
        node_type: fe.reference.node_type,
        reason: fe.reason,
        is_unresolved: !0,
        options: void 0
      })), z = _.value.nodes.ambiguous.map((fe) => ({
        node_type: fe.reference.node_type,
        has_multiple_options: !0,
        options: fe.options.map((qe) => ({
          package_id: qe.package.package_id,
          title: qe.package.title,
          match_confidence: qe.match_confidence,
          match_type: qe.match_type,
          is_installed: qe.is_installed
        }))
      }));
      return [...re, ...z];
    }), M = N(() => {
      if (!_.value) return [];
      const re = _.value.models.unresolved.map((fe) => ({
        filename: fe.reference.widget_value,
        reference: fe.reference,
        reason: fe.reason,
        is_unresolved: !0,
        options: void 0
      })), z = _.value.models.ambiguous.map((fe) => ({
        filename: fe.reference.widget_value,
        reference: fe.reference,
        has_multiple_options: !0,
        options: fe.options.map((qe) => ({
          model: qe.model,
          match_confidence: qe.match_confidence,
          match_type: qe.match_type,
          has_download_source: qe.has_download_source
        }))
      }));
      return [...re, ...z];
    }), ne = N(() => {
      const re = M.value, z = X.value.map((fe) => ({
        filename: fe.filename,
        reference: fe.reference,
        is_download_intent: !0,
        resolved_model: fe.resolved_model,
        download_source: fe.download_source,
        target_path: fe.target_path,
        options: void 0
      }));
      return [...re, ...z];
    }), Ve = N(() => X.value.filter((re) => {
      const z = A.value.get(re.filename);
      return z ? z.action === "download" : !0;
    }).map((re) => ({
      filename: re.filename,
      url: re.download_source,
      target_path: re.target_path
    })));
    function Ye(re, z = 50) {
      return re.length <= z ? re : re.slice(0, z - 3) + "...";
    }
    const D = N(() => {
      let re = H.value.length;
      for (const z of L.value.values())
        z.action === "install" && re++;
      for (const z of A.value.values())
        z.action === "select" && re++;
      return re;
    }), q = N(() => {
      let re = 0;
      for (const z of A.value.values())
        z.action === "download" && re++;
      for (const z of X.value)
        A.value.get(z.filename) || re++;
      return re;
    }), ue = N(() => {
      let re = 0;
      for (const z of L.value.values())
        z.action === "optional" && re++;
      for (const z of A.value.values())
        z.action === "optional" && re++;
      return re;
    }), Ee = N(() => {
      let re = Q.value.size;
      for (const z of L.value.values())
        z.action === "skip" && re++;
      for (const z of A.value.values())
        z.action === "skip" && re++;
      for (const z of E.value)
        L.value.has(z.node_type) || re++;
      for (const z of M.value)
        A.value.has(z.filename) || re++;
      return re;
    }), _e = N(() => {
      const re = {};
      if (re.analysis = { resolved: 1, total: 1 }, te.value || oe.value) {
        const z = E.value.length, fe = ce.value.length, qe = E.value.filter(
          ($t) => L.value.has($t.node_type)
        ).length, ct = ce.value.filter(
          ($t) => L.value.has($t.reference.node_type)
        ).length, It = z + fe, at = qe + ct;
        re.nodes = { resolved: at, total: It };
      }
      if (K.value) {
        const z = ne.value.length, fe = ne.value.filter(
          (qe) => A.value.has(qe.filename) || qe.is_download_intent
        ).length;
        re.models = { resolved: fe, total: z };
      }
      if (re.review = { resolved: 1, total: 1 }, T.value === "applying") {
        const z = d.totalFiles || 1, fe = d.completedFiles.length;
        re.applying = { resolved: fe, total: z };
      }
      return re;
    });
    function ke(re) {
      T.value = re;
    }
    function Ne() {
      const re = P.value.findIndex((z) => z.id === T.value);
      re > 0 && (T.value = P.value[re - 1].id);
    }
    function Oe() {
      const re = P.value.findIndex((z) => z.id === T.value);
      re < P.value.length - 1 && (T.value = P.value[re + 1].id);
    }
    function Me() {
      for (const re of ce.value) {
        const z = re.reference.node_type;
        L.value.has(z) || de(re, "registry");
      }
    }
    function xe(re) {
      switch (re) {
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
    function je(re) {
      return re.filter((z) => z.installed && z.tracked).filter((z) => z.name !== "comfygit-manager").map((z) => ({
        package_id: z.registry_id || z.name,
        source: z.source
      })).filter((z, fe, qe) => qe.findIndex((ct) => ct.package_id === z.package_id) === fe).sort((z, fe) => {
        const qe = xe(z.source) - xe(fe.source);
        return qe !== 0 ? qe : z.package_id.localeCompare(fe.package_id);
      });
    }
    async function ze() {
      b.value = !0, O.value = null;
      try {
        const [re, z] = await Promise.all([
          l(o.workflowName),
          y()
        ]);
        _.value = re, x.value = je(z.nodes), Me();
      } catch (re) {
        O.value = re instanceof Error ? re.message : "Failed to analyze workflow";
      } finally {
        b.value = !1;
      }
    }
    function pe() {
      I.value.includes("analysis") || I.value.push("analysis"), te.value || De.value || oe.value ? T.value = "nodes" : K.value ? T.value = "models" : T.value = "review";
    }
    function J(re) {
      L.value.set(re, { action: "optional" });
    }
    function We(re) {
      L.value.set(re, { action: "skip" });
    }
    function be(re, z) {
      var qe;
      const fe = E.value.find((ct) => ct.node_type === re);
      (qe = fe == null ? void 0 : fe.options) != null && qe[z] && L.value.set(re, {
        action: "install",
        package_id: fe.options[z].package_id
      });
    }
    function Qe(re, z) {
      L.value.set(re, {
        action: "install",
        package_id: z
      });
    }
    function Ae(re) {
      L.value.delete(re);
    }
    function Pe(re) {
      return L.value.get(re);
    }
    function W(re) {
      const z = Pe(re);
      return z ? z.action === "optional" ? "Marked optional" : z.action === "skip" ? "Skipped" : z.action === "install" ? z.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function de(re, z) {
      var ct;
      const fe = (ct = re.package) == null ? void 0 : ct.package_id;
      if (!fe) return;
      const qe = {
        action: "install",
        package_id: fe,
        version: re.package.latest_version || null,
        install_source: z
      };
      z === "git" && re.package.repository && (qe.repository = re.package.repository), L.value.set(re.reference.node_type, qe);
    }
    function ae(re) {
      L.value.set(re, { action: "optional" });
    }
    function Ke(re) {
      L.value.set(re, { action: "skip" });
    }
    function F(re) {
      Q.value.has(re) ? Q.value.delete(re) : Q.value.add(re);
    }
    function V(re) {
      A.value.set(re, { action: "optional" });
    }
    function se(re) {
      A.value.set(re, { action: "skip" });
    }
    function ve(re, z) {
      var qe;
      const fe = M.value.find((ct) => ct.filename === re);
      (qe = fe == null ? void 0 : fe.options) != null && qe[z] && A.value.set(re, {
        action: "select",
        selected_model: fe.options[z].model
      });
    }
    function Te(re, z, fe) {
      A.value.set(re, {
        action: "download",
        url: z,
        target_path: fe
      });
    }
    function Je(re) {
      A.value.delete(re);
    }
    async function He(re) {
      try {
        await p(re);
      } catch (z) {
        O.value = z instanceof Error ? z.message : "Failed to open file location";
      }
    }
    async function nt() {
      var re;
      S.value = !0, O.value = null, v(), d.phase = "resolving", T.value = "applying";
      try {
        const z = await r(o.workflowName, L.value, A.value, Q.value);
        z.models_to_download && z.models_to_download.length > 0 && u(o.workflowName, z.models_to_download);
        const fe = ce.value.map((at) => {
          const $t = Pe(at.reference.node_type);
          if (($t == null ? void 0 : $t.action) !== "install" || $t.install_source !== "git")
            return null;
          const Ut = $t.repository || at.package.repository, xs = $t.package_id || at.package.package_id;
          return !Ut || !xs ? null : {
            id: xs,
            repository: Ut,
            selectedVersion: $t.version || at.package.latest_version || "latest"
          };
        }).filter((at) => !!at), qe = new Set(fe.map((at) => at.id)), ct = [
          ...z.nodes_to_install || [],
          ...H.value.map((at) => at.package.package_id)
        ];
        d.nodesToInstall = [...new Set(ct)].filter((at) => !qe.has(at)), d.nodesToInstall.length > 0 && await c(o.workflowName);
        for (const at of fe)
          await w({
            id: at.id,
            version: at.selectedVersion,
            selected_version: at.selectedVersion,
            repository: at.repository,
            install_source: "git",
            mode: "remote",
            channel: "default"
          }), d.needsRestart = !0;
        d.phase = "complete", await m();
        const It = d.installError || ((re = d.nodeInstallProgress) == null ? void 0 : re.completedNodes.some((at) => !at.success));
        !d.needsRestart && !It && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (z) {
        O.value = z instanceof Error ? z.message : "Failed to apply resolution", d.error = O.value, d.phase = "error";
      } finally {
        S.value = !1;
      }
    }
    function yt() {
      n("refresh"), n("restart"), n("close");
    }
    async function St() {
      var z;
      const re = ((z = d.nodeInstallProgress) == null ? void 0 : z.completedNodes.filter((fe) => !fe.success).map((fe) => fe.node_id)) || [];
      if (re.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: re.length
        }, d.nodesToInstall = re, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(o.workflowName), d.phase = "complete";
        } catch (fe) {
          d.error = fe instanceof Error ? fe.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return rt(ze), (re, z) => (a(), R(xt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: b.value,
      error: O.value || void 0,
      "fixed-height": !0,
      onClose: z[1] || (z[1] = (fe) => n("close"))
    }, {
      body: g(() => [
        b.value && !_.value ? (a(), i("div", Vy, [...z[2] || (z[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (a(), i("div", Fy, [
          k(Up, {
            steps: P.value,
            "current-step": T.value,
            "completed-steps": I.value,
            "step-stats": _e.value,
            onStepChange: ke
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          T.value === "analysis" ? (a(), i("div", By, [
            s("div", Wy, [
              s("div", Gy, [
                z[3] || (z[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", jy, " Found " + f(_.value.stats.total_nodes) + " nodes and " + f(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", Hy, [
                s("div", qy, [
                  z[16] || (z[16] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", Ky, [
                    ge.value > 0 ? (a(), i("div", Jy, [
                      z[4] || (z[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", Qy, f(ge.value), 1),
                      z[5] || (z[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : h("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (a(), i("div", Yy, [
                      z[6] || (z[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", Xy, f(_.value.stats.packages_needing_installation), 1),
                      z[7] || (z[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : h("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (a(), i("div", Zy, [
                      z[8] || (z[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", e1, f(_.value.nodes.ambiguous.length), 1),
                      z[9] || (z[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : h("", !0),
                    Y.value.length > 0 ? (a(), i("div", t1, [
                      z[10] || (z[10] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", s1, f(Y.value.length), 1),
                      z[11] || (z[11] = s("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : h("", !0),
                    ee.value.length > 0 ? (a(), i("div", o1, [
                      z[12] || (z[12] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", n1, f(ee.value.length), 1),
                      z[13] || (z[13] = s("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : h("", !0),
                    _.value.nodes.unresolved.length > 0 ? (a(), i("div", a1, [
                      z[14] || (z[14] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", l1, f(_.value.nodes.unresolved.length), 1),
                      z[15] || (z[15] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : h("", !0)
                  ])
                ]),
                s("div", i1, [
                  z[27] || (z[27] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", r1, [
                    s("div", c1, [
                      z[17] || (z[17] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", u1, f(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      z[18] || (z[18] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (a(), i("div", d1, [
                      z[19] || (z[19] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", f1, f(_.value.stats.download_intents), 1),
                      z[20] || (z[20] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : h("", !0),
                    me.value ? (a(), i("div", m1, [
                      z[21] || (z[21] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", v1, f(U.value.length), 1),
                      z[22] || (z[22] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : h("", !0),
                    _.value.models.ambiguous.length > 0 ? (a(), i("div", p1, [
                      z[23] || (z[23] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", g1, f(_.value.models.ambiguous.length), 1),
                      z[24] || (z[24] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : h("", !0),
                    _.value.models.unresolved.length > 0 ? (a(), i("div", h1, [
                      z[25] || (z[25] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", y1, f(_.value.models.unresolved.length), 1),
                      z[26] || (z[26] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : h("", !0)
                  ])
                ])
              ]),
              B.value ? (a(), i("div", w1, [
                z[28] || (z[28] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", _1, f(E.value.length + M.value.length) + " items need your input", 1)
              ])) : he.value ? (a(), i("div", k1, [
                z[29] || (z[29] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", b1, f(Y.value.length) + " node type" + f(Y.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : ee.value.length > 0 ? (a(), i("div", $1, [
                z[30] || (z[30] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", C1, f(ee.value.length) + " community-mapped node type" + f(ee.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : De.value ? (a(), i("div", x1, [
                z[31] || (z[31] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", S1, f(_.value.stats.packages_needing_installation) + " package" + f(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(_.value.stats.nodes_needing_installation) + " node type" + f(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(ie.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : ie.value ? (a(), i("div", I1, [
                z[32] || (z[32] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", E1, f(_.value.stats.download_intents) + " model" + f(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : me.value ? (a(), i("div", T1, [
                z[33] || (z[33] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", M1, f(U.value.length) + " model" + f(U.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), i("div", P1, [...z[34] || (z[34] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              me.value ? (a(), i("div", R1, [
                z[37] || (z[37] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", L1, [
                  (a(!0), i(G, null, ye(U.value, (fe) => {
                    var qe, ct;
                    return a(), i("div", {
                      key: fe.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", N1, f(fe.actual_category) + "/" + f((qe = fe.model) == null ? void 0 : qe.filename), 1),
                      z[36] || (z[36] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", D1, f((ct = fe.expected_categories) == null ? void 0 : ct[0]) + "/", 1),
                      fe.file_path ? (a(), R(Le, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (It) => He(fe.file_path)
                      }, {
                        default: g(() => [...z[35] || (z[35] = [
                          C(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0)
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              he.value ? (a(), i("div", O1, [
                z[38] || (z[38] = s("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                s("div", A1, [
                  (a(!0), i(G, null, ye(Y.value, (fe) => {
                    var qe;
                    return a(), i("div", {
                      key: `vg-${fe.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      s("code", U1, f(fe.reference.node_type), 1),
                      s("span", z1, f(fe.guidance || ((qe = _.value.node_guidance) == null ? void 0 : qe[fe.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : h("", !0)
            ])
          ])) : h("", !0),
          T.value === "nodes" ? (a(), i("div", V1, [
            k(ph, {
              nodes: E.value,
              "node-choices": L.value,
              "auto-resolved-packages": Se.value,
              "skipped-packages": Q.value,
              "installed-node-packs": x.value,
              onMarkOptional: J,
              onSkip: We,
              onOptionSelected: be,
              onManualEntry: Qe,
              onClearChoice: Ae,
              onPackageSkip: F
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            ce.value.length > 0 ? (a(), i("div", F1, [
              s("div", B1, [
                s("h4", W1, "Community-Mapped Packages (" + f(ce.value.length) + ")", 1),
                z[39] || (z[39] = s("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              s("div", G1, [
                (a(!0), i(G, null, ye(ce.value, (fe) => (a(), i("div", {
                  key: `community-${fe.reference.node_type}-${fe.package.package_id}`,
                  class: "community-node-item"
                }, [
                  s("div", j1, [
                    s("div", H1, [
                      s("code", q1, f(fe.reference.node_type), 1),
                      s("span", K1, f(fe.package.title || fe.package.package_id), 1)
                    ]),
                    s("div", J1, f(fe.package.package_id), 1),
                    s("div", Q1, [
                      z[40] || (z[40] = C(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      fe.guidance ? (a(), i("span", Y1, f(fe.guidance), 1)) : h("", !0)
                    ]),
                    s("div", X1, f(W(fe.reference.node_type)), 1)
                  ]),
                  s("div", Z1, [
                    k(Le, {
                      size: "sm",
                      variant: "secondary",
                      disabled: !fe.package.package_id,
                      onClick: (qe) => de(fe, "registry")
                    }, {
                      default: g(() => [...z[41] || (z[41] = [
                        C(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    fe.package.repository ? (a(), R(Le, {
                      key: 0,
                      size: "sm",
                      variant: "ghost",
                      disabled: !fe.package.package_id,
                      onClick: (qe) => de(fe, "git")
                    }, {
                      default: g(() => [...z[42] || (z[42] = [
                        C(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : h("", !0),
                    k(Le, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (qe) => ae(fe.reference.node_type)
                    }, {
                      default: g(() => [...z[43] || (z[43] = [
                        C(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Le, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (qe) => Ke(fe.reference.node_type)
                    }, {
                      default: g(() => [...z[44] || (z[44] = [
                        C(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : h("", !0)
          ])) : h("", !0),
          T.value === "models" ? (a(), R(ry, {
            key: 2,
            models: ne.value,
            "model-choices": A.value,
            onMarkOptional: V,
            onSkip: se,
            onOptionSelected: ve,
            onDownloadUrl: Te,
            onClearChoice: Je
          }, null, 8, ["models", "model-choices"])) : h("", !0),
          T.value === "review" ? (a(), i("div", e0, [
            s("div", t0, [
              z[50] || (z[50] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", s0, [
                s("div", o0, [
                  s("span", n0, f(D.value), 1),
                  z[45] || (z[45] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", a0, [
                  s("span", l0, f(q.value), 1),
                  z[46] || (z[46] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", i0, [
                  s("span", r0, f(ue.value), 1),
                  z[47] || (z[47] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", c0, [
                  s("span", u0, f(Ee.value), 1),
                  z[48] || (z[48] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              Se.value.length > 0 ? (a(), i("div", d0, [
                s("h4", f0, "Node Packages (" + f(Se.value.length) + ")", 1),
                s("div", m0, [
                  (a(!0), i(G, null, ye(Se.value, (fe) => (a(), i("div", {
                    key: fe.package_id,
                    class: "review-item"
                  }, [
                    s("code", v0, f(fe.package_id), 1),
                    s("div", p0, [
                      Q.value.has(fe.package_id) ? (a(), i("span", h0, "Skipped")) : (a(), i("span", g0, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : h("", !0),
              ce.value.length > 0 ? (a(), i("div", y0, [
                s("h4", w0, "Community-Mapped Packages (" + f(ce.value.length) + ")", 1),
                s("div", _0, [
                  (a(!0), i(G, null, ye(ce.value, (fe) => {
                    var qe, ct, It;
                    return a(), i("div", {
                      key: `review-community-${fe.reference.node_type}-${fe.package.package_id}`,
                      class: "review-item"
                    }, [
                      s("code", k0, f(fe.reference.node_type), 1),
                      s("div", b0, [
                        ((qe = Pe(fe.reference.node_type)) == null ? void 0 : qe.action) === "install" ? (a(), i("span", $0, f(((ct = Pe(fe.reference.node_type)) == null ? void 0 : ct.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((It = Pe(fe.reference.node_type)) == null ? void 0 : It.action) === "optional" ? (a(), i("span", C0, " Optional ")) : (a(), i("span", x0, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              E.value.length > 0 ? (a(), i("div", S0, [
                s("h4", I0, "Node Choices (" + f(E.value.length) + ")", 1),
                s("div", E0, [
                  (a(!0), i(G, null, ye(E.value, (fe) => {
                    var qe, ct, It, at;
                    return a(), i("div", {
                      key: fe.node_type,
                      class: "review-item"
                    }, [
                      s("code", T0, f(fe.node_type), 1),
                      s("div", M0, [
                        L.value.has(fe.node_type) ? (a(), i(G, { key: 0 }, [
                          ((qe = L.value.get(fe.node_type)) == null ? void 0 : qe.action) === "install" ? (a(), i("span", P0, f((ct = L.value.get(fe.node_type)) == null ? void 0 : ct.package_id), 1)) : ((It = L.value.get(fe.node_type)) == null ? void 0 : It.action) === "optional" ? (a(), i("span", R0, " Optional ")) : ((at = L.value.get(fe.node_type)) == null ? void 0 : at.action) === "skip" ? (a(), i("span", L0, " Skip ")) : h("", !0)
                        ], 64)) : (a(), i("span", N0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              Ve.value.length > 0 ? (a(), i("div", D0, [
                s("h4", O0, "Models to Download (" + f(Ve.value.length) + ")", 1),
                s("div", A0, [
                  (a(!0), i(G, null, ye(Ve.value, (fe) => (a(), i("div", {
                    key: fe.filename,
                    class: "review-item download-item"
                  }, [
                    s("div", U0, [
                      s("code", z0, f(fe.filename), 1),
                      s("div", V0, [
                        s("span", F0, "→ " + f(fe.target_path), 1),
                        fe.url ? (a(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: fe.url
                        }, f(Ye(fe.url)), 9, B0)) : h("", !0)
                      ])
                    ]),
                    z[49] || (z[49] = s("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : h("", !0),
              ne.value.length > 0 ? (a(), i("div", W0, [
                s("h4", G0, "Models (" + f(ne.value.length) + ")", 1),
                s("div", j0, [
                  (a(!0), i(G, null, ye(ne.value, (fe) => {
                    var qe, ct, It, at, $t, Ut, xs;
                    return a(), i("div", {
                      key: fe.filename,
                      class: "review-item"
                    }, [
                      s("code", H0, f(fe.filename), 1),
                      s("div", q0, [
                        A.value.has(fe.filename) ? (a(), i(G, { key: 0 }, [
                          ((qe = A.value.get(fe.filename)) == null ? void 0 : qe.action) === "select" ? (a(), i("span", K0, f((It = (ct = A.value.get(fe.filename)) == null ? void 0 : ct.selected_model) == null ? void 0 : It.filename), 1)) : ((at = A.value.get(fe.filename)) == null ? void 0 : at.action) === "download" ? (a(), i("span", J0, " Download ")) : (($t = A.value.get(fe.filename)) == null ? void 0 : $t.action) === "optional" ? (a(), i("span", Q0, " Optional ")) : ((Ut = A.value.get(fe.filename)) == null ? void 0 : Ut.action) === "skip" ? (a(), i("span", Y0, " Skip ")) : ((xs = A.value.get(fe.filename)) == null ? void 0 : xs.action) === "cancel_download" ? (a(), i("span", X0, " Cancel Download ")) : h("", !0)
                        ], 64)) : fe.is_download_intent ? (a(), i("span", Z0, " Pending Download ")) : (a(), i("span", ew, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              Be.value.length === 0 && ce.value.length === 0 && E.value.length === 0 && ne.value.length === 0 ? (a(), i("div", tw, " No dependencies need resolution. ")) : h("", !0)
            ])
          ])) : h("", !0),
          T.value === "applying" ? (a(), R(zy, {
            key: 4,
            progress: st(d),
            onRestart: yt,
            onRetryFailed: St
          }, null, 8, ["progress"])) : h("", !0)
        ])) : h("", !0)
      ]),
      footer: g(() => [
        T.value !== "analysis" && T.value !== "applying" ? (a(), R(Le, {
          key: 0,
          variant: "secondary",
          disabled: S.value,
          onClick: Ne
        }, {
          default: g(() => [...z[51] || (z[51] = [
            C(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : h("", !0),
        z[54] || (z[54] = s("div", { class: "footer-spacer" }, null, -1)),
        T.value !== "applying" || st(d).phase === "complete" || st(d).phase === "error" ? (a(), R(Le, {
          key: 1,
          variant: "secondary",
          onClick: z[0] || (z[0] = (fe) => n("close"))
        }, {
          default: g(() => [
            C(f(st(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : h("", !0),
        T.value === "analysis" ? (a(), R(Le, {
          key: 2,
          variant: "primary",
          disabled: b.value,
          onClick: pe
        }, {
          default: g(() => [
            C(f(Re.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : h("", !0),
        T.value === "nodes" ? (a(), R(Le, {
          key: 3,
          variant: "primary",
          onClick: Oe
        }, {
          default: g(() => [
            C(f(K.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : h("", !0),
        T.value === "models" ? (a(), R(Le, {
          key: 4,
          variant: "primary",
          onClick: Oe
        }, {
          default: g(() => [...z[52] || (z[52] = [
            C(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : h("", !0),
        T.value === "review" ? (a(), R(Le, {
          key: 5,
          variant: "primary",
          disabled: S.value,
          loading: S.value,
          onClick: nt
        }, {
          default: g(() => [...z[53] || (z[53] = [
            C(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : h("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), ow = /* @__PURE__ */ Ce(sw, [["__scopeId", "data-v-49848358"]]), nw = { class: "search-input-wrapper" }, aw = ["value", "placeholder"], lw = /* @__PURE__ */ $e({
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
    const o = e, n = t, l = $(null);
    let r;
    function c(d) {
      const v = d.target.value;
      o.debounce > 0 ? (clearTimeout(r), r = window.setTimeout(() => {
        n("update:modelValue", v);
      }, o.debounce)) : n("update:modelValue", v);
    }
    function u() {
      var d;
      n("update:modelValue", ""), n("clear"), (d = l.value) == null || d.focus();
    }
    return rt(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, v) => (a(), i("div", nw, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: ds(u, ["escape"])
      }, null, 40, aw),
      e.clearable && e.modelValue ? (a(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : h("", !0)
    ]));
  }
}), iw = /* @__PURE__ */ Ce(lw, [["__scopeId", "data-v-266f857a"]]), rw = { class: "search-bar" }, cw = /* @__PURE__ */ $e({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, o) => (a(), i("div", rw, [
      k(iw, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => t.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), lo = /* @__PURE__ */ Ce(cw, [["__scopeId", "data-v-3d51bbfd"]]), uw = { class: "section-group" }, dw = {
  key: 0,
  class: "section-content"
}, fw = /* @__PURE__ */ $e({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = $(o.initiallyExpanded);
    function r() {
      o.collapsible && (l.value = !l.value, n("toggle", l.value));
    }
    return (c, u) => (a(), i("section", uw, [
      k(ss, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: g(() => [
          C(f(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (a(), i("div", dw, [
        ot(c.$slots, "default", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), Ct = /* @__PURE__ */ Ce(fw, [["__scopeId", "data-v-c48e33ed"]]), mw = { class: "item-header" }, vw = {
  key: 0,
  class: "item-icon"
}, pw = { class: "item-info" }, gw = {
  key: 0,
  class: "item-title"
}, hw = {
  key: 1,
  class: "item-subtitle"
}, yw = {
  key: 0,
  class: "item-details"
}, ww = {
  key: 1,
  class: "item-actions"
}, _w = /* @__PURE__ */ $e({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, n = N(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (a(), i("div", {
      class: Ue(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      s("div", mw, [
        l.$slots.icon ? (a(), i("span", vw, [
          ot(l.$slots, "icon", {}, void 0)
        ])) : h("", !0),
        s("div", pw, [
          l.$slots.title ? (a(), i("div", gw, [
            ot(l.$slots, "title", {}, void 0)
          ])) : h("", !0),
          l.$slots.subtitle ? (a(), i("div", hw, [
            ot(l.$slots, "subtitle", {}, void 0)
          ])) : h("", !0)
        ])
      ]),
      l.$slots.details ? (a(), i("div", yw, [
        ot(l.$slots, "details", {}, void 0)
      ])) : h("", !0),
      l.$slots.actions ? (a(), i("div", ww, [
        ot(l.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Vt = /* @__PURE__ */ Ce(_w, [["__scopeId", "data-v-cc435e0e"]]), kw = { class: "loading-state" }, bw = { class: "loading-message" }, $w = /* @__PURE__ */ $e({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, o) => (a(), i("div", kw, [
      o[0] || (o[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", bw, f(e.message), 1)
    ]));
  }
}), $s = /* @__PURE__ */ Ce($w, [["__scopeId", "data-v-ad8436c9"]]), Cw = { class: "error-state" }, xw = { class: "error-message" }, Sw = /* @__PURE__ */ $e({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (t, o) => (a(), i("div", Cw, [
      o[2] || (o[2] = s("span", { class: "error-icon" }, "⚠", -1)),
      s("p", xw, f(e.message), 1),
      e.retry ? (a(), R(Ie, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => t.$emit("retry"))
      }, {
        default: g(() => [...o[1] || (o[1] = [
          C(" Retry ", -1)
        ])]),
        _: 1
      })) : h("", !0)
    ]));
  }
}), Cs = /* @__PURE__ */ Ce(Sw, [["__scopeId", "data-v-5397be48"]]), Iw = /* @__PURE__ */ $e({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: o }) {
    const n = o, { getWorkflows: l } = vt(), r = $([]), c = $(!1), u = $(null), d = $(""), v = $(!0), m = $(!1), p = $(!1), w = $(!1), y = $(null), _ = N(
      () => r.value.filter((U) => U.status === "broken")
    ), x = N(
      () => r.value.filter((U) => U.status === "new")
    ), b = N(
      () => r.value.filter((U) => U.status === "modified")
    ), S = N(
      () => r.value.filter((U) => U.status === "synced")
    ), O = N(() => {
      if (!d.value.trim()) return r.value;
      const U = d.value.toLowerCase();
      return r.value.filter((me) => me.name.toLowerCase().includes(U));
    }), T = N(
      () => _.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), I = N(
      () => x.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), L = N(
      () => b.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), A = N(
      () => S.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), Q = N(
      () => m.value ? A.value : A.value.slice(0, 5)
    );
    async function P(U = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(U);
      } catch (me) {
        u.value = me instanceof Error ? me.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    t({ loadWorkflows: P });
    function B(U) {
      y.value = U, p.value = !0;
    }
    function Y(U) {
      y.value = U, w.value = !0;
    }
    function ee(U) {
      y.value = U, window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: U }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel"));
    }
    function ce(U) {
      var Be;
      const Re = (Be = U.detail) == null ? void 0 : Be.workflowName;
      Re && ee(Re);
    }
    function he() {
      n("refresh");
    }
    async function te() {
      w.value = !1, await P(!0);
    }
    async function K() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ie(U) {
      return U.replace(/uninstallable node mappings?/gi, (me) => me.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function De(U) {
      if (U.issue_summary && U.issue_summary.trim().length > 0)
        return ie(U.issue_summary);
      const me = [];
      return U.version_gated_count && U.version_gated_count > 0 && me.push(`${U.version_gated_count} node${U.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), U.uninstallable_count && U.uninstallable_count > 0 && me.push(`${U.uninstallable_count} node${U.uninstallable_count > 1 ? "s" : ""} need community packages`), U.missing_nodes > 0 && me.push(`${U.missing_nodes} missing node${U.missing_nodes > 1 ? "s" : ""}`), U.missing_models > 0 && me.push(`${U.missing_models} missing model${U.missing_models > 1 ? "s" : ""}`), U.models_with_category_mismatch && U.models_with_category_mismatch > 0 && me.push(`${U.models_with_category_mismatch} model${U.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), U.pending_downloads && U.pending_downloads > 0 && me.push(`${U.pending_downloads} pending download${U.pending_downloads > 1 ? "s" : ""}`), me.length > 0 ? me.join(", ") : "Has issues";
    }
    function oe(U) {
      const me = U.sync_state === "new" ? "New" : U.sync_state === "modified" ? "Modified" : U.sync_state === "synced" ? "Synced" : U.sync_state, Re = ge(U);
      return U.has_path_sync_issues && U.models_needing_path_sync && U.models_needing_path_sync > 0 ? `${U.models_needing_path_sync} model path${U.models_needing_path_sync > 1 ? "s" : ""} need${U.models_needing_path_sync === 1 ? "s" : ""} sync · ${Re}` : `${me || "Unknown"} · ${Re}`;
    }
    function ge(U) {
      const me = U.contract_summary;
      return !me || !me.has_contract ? "No contract" : me.status === "incomplete" ? `${me.input_count} in / ${me.output_count} out · incomplete` : `${me.input_count} in / ${me.output_count} out`;
    }
    return rt(() => {
      P(), window.addEventListener("comfygit:open-workflow-contract", ce);
    }), sa(() => {
      window.removeEventListener("comfygit:open-workflow-contract", ce);
    }), (U, me) => (a(), i(G, null, [
      k(Ot, null, {
        header: g(() => [
          k(At, { title: "WORKFLOWS" })
        ]),
        search: g(() => [
          k(lo, {
            modelValue: d.value,
            "onUpdate:modelValue": me[0] || (me[0] = (Re) => d.value = Re),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          c.value ? (a(), R($s, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (a(), R(Cs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (a(), i(G, { key: 2 }, [
            T.value.length ? (a(), R(Ct, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: g(() => [
                (a(!0), i(G, null, ye(T.value, (Re) => (a(), R(Vt, {
                  key: Re.name,
                  status: "broken"
                }, {
                  icon: g(() => [...me[7] || (me[7] = [
                    C("⚠", -1)
                  ])]),
                  title: g(() => [
                    C(f(Re.name), 1)
                  ]),
                  subtitle: g(() => [
                    C(f(De(Re)), 1)
                  ]),
                  actions: g(() => [
                    k(Ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Be) => Y(Re.name)
                    }, {
                      default: g(() => [...me[8] || (me[8] = [
                        C(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Be) => ee(Re.name)
                    }, {
                      default: g(() => [...me[9] || (me[9] = [
                        C(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Be) => B(Re.name)
                    }, {
                      default: g(() => [...me[10] || (me[10] = [
                        C(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            I.value.length ? (a(), R(Ct, {
              key: 1,
              title: "NEW",
              count: I.value.length
            }, {
              default: g(() => [
                (a(!0), i(G, null, ye(I.value, (Re) => (a(), R(Vt, {
                  key: Re.name,
                  status: Re.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: g(() => [
                    C(f(Re.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: g(() => [
                    C(f(Re.name), 1)
                  ]),
                  subtitle: g(() => [
                    C(f(oe(Re)), 1)
                  ]),
                  actions: g(() => [
                    k(Ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Be) => ee(Re.name)
                    }, {
                      default: g(() => [...me[11] || (me[11] = [
                        C(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Be) => B(Re.name)
                    }, {
                      default: g(() => [...me[12] || (me[12] = [
                        C(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            L.value.length ? (a(), R(Ct, {
              key: 2,
              title: "MODIFIED",
              count: L.value.length
            }, {
              default: g(() => [
                (a(!0), i(G, null, ye(L.value, (Re) => (a(), R(Vt, {
                  key: Re.name,
                  status: Re.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: g(() => [...me[13] || (me[13] = [
                    C("⚡", -1)
                  ])]),
                  title: g(() => [
                    C(f(Re.name), 1)
                  ]),
                  subtitle: g(() => [
                    C(f(oe(Re)), 1)
                  ]),
                  actions: g(() => [
                    k(Ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Be) => ee(Re.name)
                    }, {
                      default: g(() => [...me[14] || (me[14] = [
                        C(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Be) => B(Re.name)
                    }, {
                      default: g(() => [...me[15] || (me[15] = [
                        C(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            A.value.length ? (a(), R(Ct, {
              key: 3,
              title: "SYNCED",
              count: A.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: me[2] || (me[2] = (Re) => v.value = Re)
            }, {
              default: g(() => [
                (a(!0), i(G, null, ye(Q.value, (Re) => (a(), R(Vt, {
                  key: Re.name,
                  status: Re.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: g(() => [
                    C(f(Re.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: g(() => [
                    C(f(Re.name), 1)
                  ]),
                  subtitle: g(() => [
                    C(f(oe(Re)), 1)
                  ]),
                  actions: g(() => [
                    k(Ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Be) => ee(Re.name)
                    }, {
                      default: g(() => [...me[16] || (me[16] = [
                        C(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Be) => B(Re.name)
                    }, {
                      default: g(() => [...me[17] || (me[17] = [
                        C(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !m.value && A.value.length > 5 ? (a(), R(Ie, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: me[1] || (me[1] = (Re) => m.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: g(() => [
                    C(" View all " + f(A.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : h("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : h("", !0),
            O.value.length ? h("", !0) : (a(), R(ls, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && y.value ? (a(), R(Sp, {
        key: 0,
        "workflow-name": y.value,
        onClose: me[3] || (me[3] = (Re) => p.value = !1),
        onResolve: me[4] || (me[4] = (Re) => Y(y.value)),
        onRefresh: me[5] || (me[5] = (Re) => n("refresh"))
      }, null, 8, ["workflow-name"])) : h("", !0),
      w.value && y.value ? (a(), R(ow, {
        key: 1,
        "workflow-name": y.value,
        onClose: te,
        onInstall: he,
        onRefresh: me[6] || (me[6] = (Re) => n("refresh")),
        onRestart: K
      }, null, 8, ["workflow-name"])) : h("", !0)
    ], 64));
  }
}), Ew = /* @__PURE__ */ Ce(Iw, [["__scopeId", "data-v-28ee54dd"]]), Tw = /* @__PURE__ */ $e({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (t, o) => (a(), i("div", {
      class: Ue(["summary-bar", e.variant])
    }, [
      ot(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), mn = /* @__PURE__ */ Ce(Tw, [["__scopeId", "data-v-ccb7816e"]]), Mw = {
  key: 0,
  class: "model-details"
}, Pw = { class: "detail-section" }, Rw = { class: "detail-row" }, Lw = { class: "detail-value mono" }, Nw = { class: "detail-row" }, Dw = { class: "detail-value mono" }, Ow = { class: "detail-row" }, Aw = { class: "detail-value mono" }, Uw = { class: "detail-row" }, zw = { class: "detail-value" }, Vw = { class: "detail-row" }, Fw = { class: "detail-value" }, Bw = { class: "detail-row" }, Ww = { class: "detail-value" }, Gw = { class: "detail-section" }, jw = { class: "section-header" }, Hw = {
  key: 0,
  class: "locations-list"
}, qw = { class: "location-path mono" }, Kw = {
  key: 0,
  class: "location-modified"
}, Jw = ["onClick"], Qw = {
  key: 1,
  class: "empty-state"
}, Yw = { class: "detail-section" }, Xw = { class: "section-header" }, Zw = {
  key: 0,
  class: "sources-list"
}, e_ = { class: "source-type" }, t_ = ["href"], s_ = ["disabled", "onClick"], o_ = {
  key: 1,
  class: "empty-state"
}, n_ = { class: "add-source-form" }, a_ = ["disabled"], l_ = {
  key: 2,
  class: "source-error"
}, i_ = {
  key: 3,
  class: "source-success"
}, r_ = /* @__PURE__ */ $e({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: r, openFileLocation: c } = vt(), u = $(null), d = $(!0), v = $(null), m = $(""), p = $(!1), w = $(null), y = $(null), _ = $(null), x = $(null);
    let b = null;
    function S(P, B = "success", Y = 2e3) {
      b && clearTimeout(b), x.value = { message: P, type: B }, b = setTimeout(() => {
        x.value = null;
      }, Y);
    }
    function O(P) {
      if (!P) return "Unknown";
      const B = 1024 * 1024 * 1024, Y = 1024 * 1024;
      return P >= B ? `${(P / B).toFixed(1)} GB` : P >= Y ? `${(P / Y).toFixed(0)} MB` : `${(P / 1024).toFixed(0)} KB`;
    }
    function T(P) {
      navigator.clipboard.writeText(P), S("Copied to clipboard!");
    }
    async function I(P) {
      try {
        await c(P), S("Opening file location...");
      } catch {
        S("Failed to open location", "error");
      }
    }
    async function L() {
      if (!(!m.value.trim() || !u.value)) {
        p.value = !0, y.value = null, _.value = null;
        try {
          await l(u.value.hash, m.value.trim()), _.value = "Source added successfully!", m.value = "", await Q();
        } catch (P) {
          y.value = P instanceof Error ? P.message : "Failed to add source";
        } finally {
          p.value = !1;
        }
      }
    }
    async function A(P) {
      if (u.value) {
        w.value = P, y.value = null, _.value = null;
        try {
          await r(u.value.hash, P), S("Source removed"), await Q();
        } catch (B) {
          y.value = B instanceof Error ? B.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function Q() {
      d.value = !0, v.value = null;
      try {
        u.value = await n(o.identifier);
      } catch (P) {
        v.value = P instanceof Error ? P.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return rt(Q), (P, B) => {
      var Y;
      return a(), i(G, null, [
        k(xt, {
          title: `Model Details: ${((Y = u.value) == null ? void 0 : Y.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          onClose: B[5] || (B[5] = (ee) => P.$emit("close"))
        }, {
          body: g(() => {
            var ee, ce, he, te;
            return [
              u.value ? (a(), i("div", Mw, [
                s("section", Pw, [
                  s("div", Rw, [
                    B[6] || (B[6] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", Lw, f(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: B[0] || (B[0] = (K) => T(u.value.hash))
                    }, "Copy")) : h("", !0)
                  ]),
                  s("div", Nw, [
                    B[7] || (B[7] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", Dw, f(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: B[1] || (B[1] = (K) => T(u.value.blake3))
                    }, "Copy")) : h("", !0)
                  ]),
                  s("div", Ow, [
                    B[8] || (B[8] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", Aw, f(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: B[2] || (B[2] = (K) => T(u.value.sha256))
                    }, "Copy")) : h("", !0)
                  ]),
                  s("div", Uw, [
                    B[9] || (B[9] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", zw, f(O(u.value.size)), 1)
                  ]),
                  s("div", Vw, [
                    B[10] || (B[10] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", Fw, f(u.value.category), 1)
                  ]),
                  s("div", Bw, [
                    B[11] || (B[11] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", Ww, f(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", Gw, [
                  s("h4", jw, "Locations (" + f(((ee = u.value.locations) == null ? void 0 : ee.length) || 0) + ")", 1),
                  (ce = u.value.locations) != null && ce.length ? (a(), i("div", Hw, [
                    (a(!0), i(G, null, ye(u.value.locations, (K, ie) => (a(), i("div", {
                      key: ie,
                      class: "location-item"
                    }, [
                      s("span", qw, f(K.path), 1),
                      K.modified ? (a(), i("span", Kw, "Modified: " + f(K.modified), 1)) : h("", !0),
                      K.path ? (a(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (De) => I(K.path)
                      }, " Open File Location ", 8, Jw)) : h("", !0)
                    ]))), 128))
                  ])) : (a(), i("div", Qw, "No locations found"))
                ]),
                s("section", Yw, [
                  s("h4", Xw, "Download Sources (" + f(((he = u.value.sources) == null ? void 0 : he.length) || 0) + ")", 1),
                  (te = u.value.sources) != null && te.length ? (a(), i("div", Zw, [
                    (a(!0), i(G, null, ye(u.value.sources, (K, ie) => (a(), i("div", {
                      key: ie,
                      class: "source-item"
                    }, [
                      s("span", e_, f(K.type) + ":", 1),
                      s("a", {
                        href: K.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(K.url), 9, t_),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: w.value === K.url,
                        onClick: (De) => A(K.url)
                      }, f(w.value === K.url ? "..." : "×"), 9, s_)
                    ]))), 128))
                  ])) : (a(), i("div", o_, " No download sources configured ")),
                  s("div", n_, [
                    Tt(s("input", {
                      "onUpdate:modelValue": B[3] || (B[3] = (K) => m.value = K),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [bo, m.value]
                    ]),
                    s("button", {
                      class: "add-source-btn",
                      disabled: !m.value.trim() || p.value,
                      onClick: L
                    }, f(p.value ? "Adding..." : "Add Source"), 9, a_)
                  ]),
                  y.value ? (a(), i("p", l_, f(y.value), 1)) : h("", !0),
                  _.value ? (a(), i("p", i_, f(_.value), 1)) : h("", !0)
                ])
              ])) : h("", !0)
            ];
          }),
          footer: g(() => [
            s("button", {
              class: "btn-secondary",
              onClick: B[4] || (B[4] = (ee) => P.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (a(), R(Dt, { to: "body" }, [
          x.value ? (a(), i("div", {
            key: 0,
            class: Ue(["toast", x.value.type])
          }, f(x.value.message), 3)) : h("", !0)
        ]))
      ], 64);
    };
  }
}), bl = /* @__PURE__ */ Ce(r_, [["__scopeId", "data-v-f15cbb56"]]), c_ = ["disabled"], u_ = { class: "dropdown-value" }, d_ = ["onClick"], f_ = {
  key: 0,
  class: "dropdown-error"
}, m_ = /* @__PURE__ */ $e({
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
    const o = e, n = t, l = $(!1), r = $(null), c = $(null), u = $({});
    function d(S) {
      return typeof S == "string" ? S : S.value;
    }
    function v(S) {
      return typeof S == "string" ? S : S.label;
    }
    const m = N(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const S = o.options.find((O) => d(O) === o.modelValue);
      return S ? v(S) : String(o.modelValue);
    });
    function p() {
      o.disabled || (l.value = !l.value);
    }
    function w() {
      l.value = !1;
    }
    function y(S) {
      n("update:modelValue", d(S)), w();
    }
    function _() {
      if (!r.value) return;
      const S = r.value.getBoundingClientRect(), O = window.innerHeight, T = O - S.bottom, I = S.top, L = Math.min(300, o.options.length * 36 + 8), A = T < L && I > T;
      u.value = {
        position: "fixed",
        left: `${S.left}px`,
        width: `${S.width}px`,
        maxHeight: "300px",
        ...A ? { bottom: `${O - S.top + 4}px` } : { top: `${S.bottom + 4}px` }
      };
    }
    kt(l, async (S) => {
      S && (await Pt(), _());
    });
    function x() {
      l.value && _();
    }
    function b(S) {
      S.key === "Escape" && l.value && w();
    }
    return rt(() => {
      window.addEventListener("scroll", x, !0), window.addEventListener("keydown", b);
    }), Mo(() => {
      window.removeEventListener("scroll", x, !0), window.removeEventListener("keydown", b);
    }), (S, O) => (a(), i("div", {
      class: "base-dropdown",
      ref_key: "dropdownRef",
      ref: r
    }, [
      s("button", {
        type: "button",
        class: Ue(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: p
      }, [
        s("span", u_, f(m.value), 1),
        O[0] || (O[0] = s("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, c_),
      (a(), R(Dt, { to: "body" }, [
        l.value ? (a(), i("div", {
          key: 0,
          class: "dropdown-overlay",
          onClick: w
        })) : h("", !0),
        l.value ? (a(), i("div", {
          key: 1,
          ref_key: "menuRef",
          ref: c,
          class: "dropdown-menu",
          style: Wt(u.value)
        }, [
          (a(!0), i(G, null, ye(e.options, (T) => (a(), i("div", {
            key: d(T),
            class: Ue(["dropdown-option", { selected: d(T) === e.modelValue }]),
            onClick: (I) => y(T)
          }, f(v(T)), 11, d_))), 128))
        ], 4)) : h("", !0)
      ])),
      e.error ? (a(), i("span", f_, f(e.error), 1)) : h("", !0)
    ], 512));
  }
}), v_ = /* @__PURE__ */ Ce(m_, [["__scopeId", "data-v-857e085b"]]);
function p_(e) {
  const t = e.toLowerCase();
  return t === "huggingface.co" || t.endsWith(".huggingface.co") || t === "hf.co";
}
function g_(e) {
  const t = e.trim();
  if (!t) return { kind: "unknown" };
  let o;
  try {
    o = new URL(t);
  } catch {
    return { kind: "unknown" };
  }
  if (!p_(o.hostname)) return { kind: "unknown" };
  const n = o.pathname.replace(/^\/+/, "").split("/").filter(Boolean);
  if (n[0] === "datasets" || n[0] === "spaces") return { kind: "unknown" };
  if (n.length < 2) return { kind: "unknown" };
  const l = `${n[0]}/${n[1]}`, r = n.slice(2);
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
function h_(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function y_(e, t, o) {
  const [n, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(n)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(t)}/${h_(o)}`;
}
const w_ = { class: "hf-file-browser" }, __ = { class: "browser-header" }, k_ = { class: "repo-info" }, b_ = { class: "repo-id" }, $_ = {
  key: 0,
  class: "revision-pill"
}, C_ = {
  key: 0,
  class: "loading-state"
}, x_ = {
  key: 1,
  class: "error-state"
}, S_ = { class: "toolbar" }, I_ = { class: "toolbar-actions" }, E_ = { class: "file-list-container" }, T_ = {
  key: 0,
  class: "file-list-header"
}, M_ = ["checked", "indeterminate"], P_ = { class: "sort-indicator" }, R_ = { class: "sort-indicator" }, L_ = {
  key: 1,
  class: "empty-state"
}, N_ = {
  key: 2,
  class: "file-list"
}, D_ = ["onClick"], O_ = ["checked", "onChange"], A_ = { class: "file-path" }, U_ = { class: "file-size" }, z_ = { class: "destination-section" }, V_ = { class: "destination-row" }, F_ = {
  key: 0,
  class: "path-separator"
}, B_ = { class: "action-bar" }, W_ = { class: "summary-info" }, G_ = { class: "summary-count" }, j_ = { class: "summary-size" }, H_ = /* @__PURE__ */ $e({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: r } = vt(), c = $([]), u = $(/* @__PURE__ */ new Set()), d = $(!1), v = $(null), m = $(""), p = $(!1), w = $("name"), y = $(!0), _ = $(""), x = $(""), b = $(""), S = $([]), O = $(!1);
    let T = !1;
    const I = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, L = N(() => {
      let H = c.value;
      if (o.initialPath) {
        const X = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        H = H.filter((E) => E.path.startsWith(X) || E.path === o.initialPath);
      }
      if (p.value && (H = H.filter((X) => X.is_model_file)), m.value.trim()) {
        const X = m.value.toLowerCase();
        H = H.filter((E) => E.path.toLowerCase().includes(X));
      }
      return H;
    }), A = N(() => {
      const H = [...L.value];
      return H.sort((X, E) => {
        let M;
        return w.value === "name" ? M = X.path.localeCompare(E.path) : M = X.size - E.size, y.value ? M : -M;
      }), H;
    }), Q = N(() => L.value.length === 0 ? !1 : L.value.every((H) => u.value.has(H.path))), P = N(() => L.value.some((H) => u.value.has(H.path))), B = N(() => {
      const H = S.value.map((X) => ({
        label: X,
        value: X
      }));
      return H.push({ label: "Custom path...", value: "__custom__" }), H;
    }), Y = N(() => _.value === "__custom__" ? b.value.trim().length > 0 : _.value.length > 0), ee = N(() => {
      let H = 0;
      for (const X of u.value) {
        const E = c.value.find((M) => M.path === X);
        E && (H += E.size);
      }
      return H;
    });
    function ce(H) {
      if (H === 0) return "0 B";
      const X = 1024 * 1024 * 1024, E = 1024 * 1024, M = 1024;
      return H >= X ? `${(H / X).toFixed(2)} GB` : H >= E ? `${(H / E).toFixed(1)} MB` : H >= M ? `${(H / M).toFixed(0)} KB` : `${H} B`;
    }
    function he(H) {
      const X = H.match(I);
      return X ? `${X[1]}${X[4]}` : null;
    }
    function te(H) {
      const X = new Set(u.value), E = X.has(H.path), M = H.shard_group || he(H.path);
      if (M) {
        const ne = c.value.filter((Ve) => (Ve.shard_group || he(Ve.path)) === M);
        E ? ne.forEach((Ve) => X.delete(Ve.path)) : ne.forEach((Ve) => X.add(Ve.path));
      } else
        E ? X.delete(H.path) : X.add(H.path);
      u.value = X;
    }
    function K() {
      const H = new Set(u.value);
      for (const X of L.value)
        X.is_model_file && H.add(X.path);
      u.value = H;
    }
    function ie() {
      u.value = /* @__PURE__ */ new Set();
    }
    function De() {
      if (Q.value) {
        const H = new Set(u.value);
        for (const X of L.value)
          H.delete(X.path);
        u.value = H;
      } else {
        const H = new Set(u.value);
        for (const X of L.value)
          H.add(X.path);
        u.value = H;
      }
    }
    function oe(H) {
      w.value === H ? y.value = !y.value : (w.value = H, y.value = !0);
    }
    function ge(H) {
      const X = H.split("/");
      return X.length >= 2 ? X[X.length - 2] : null;
    }
    function U() {
      if (O.value || u.value.size === 0) return;
      const H = /* @__PURE__ */ new Set();
      for (const M of u.value) {
        const ne = ge(M);
        ne && H.add(ne.toLowerCase());
      }
      if (H.size !== 1) return;
      const X = [...H][0], E = S.value.find(
        (M) => M.toLowerCase() === X
      );
      E && E !== _.value && (T = !0, _.value = E, Pt(() => {
        T = !1;
      }));
    }
    function me() {
      return _.value === "__custom__" ? b.value.trim() : x.value.trim() ? `${_.value}/${x.value.trim()}` : _.value;
    }
    function Re() {
      if (u.value.size === 0 || !Y.value) return;
      const H = me(), X = [];
      for (const E of u.value) {
        const M = c.value.find((ne) => ne.path === E);
        M && X.push({
          url: y_(o.repoId, o.revision, M.path),
          destination: H,
          filename: M.path.split("/").pop() || M.path
        });
      }
      n("queue", X);
    }
    async function Be() {
      if (o.repoId) {
        d.value = !0, v.value = null;
        try {
          const H = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, X = await l(H);
          if (c.value = X.files, o.preselectedFile) {
            const E = c.value.find((M) => M.path === o.preselectedFile);
            E && te(E);
          }
        } catch (H) {
          v.value = H instanceof Error ? H.message : "Failed to load repository";
        } finally {
          d.value = !1;
        }
      }
    }
    async function Se() {
      try {
        const H = await r();
        S.value = H.directories, H.directories.length > 0 && !_.value && (_.value = H.directories[0]);
      } catch {
        S.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], _.value || (_.value = "checkpoints");
      }
    }
    return kt(() => [o.repoId, o.revision], () => {
      o.repoId && Be();
    }, { immediate: !1 }), kt(() => o.repoId, () => {
      O.value = !1;
    }), kt(u, () => {
      U();
    }, { deep: !0 }), kt(S, () => {
      S.value.length > 0 && u.value.size > 0 && U();
    }), kt(_, (H, X) => {
      T || X === "" || (O.value = !0);
    }), rt(() => {
      Be(), Se();
    }), (H, X) => (a(), i("div", w_, [
      s("div", __, [
        s("button", {
          class: "back-btn",
          onClick: X[0] || (X[0] = (E) => H.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        s("div", k_, [
          s("span", b_, f(e.repoId), 1),
          e.revision ? (a(), i("span", $_, f(e.revision), 1)) : h("", !0)
        ])
      ]),
      d.value ? (a(), i("div", C_, " Loading repository files... ")) : v.value ? (a(), i("div", x_, f(v.value), 1)) : (a(), i(G, { key: 2 }, [
        s("div", S_, [
          k(wt, {
            modelValue: m.value,
            "onUpdate:modelValue": X[1] || (X[1] = (E) => m.value = E),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          s("div", I_, [
            s("button", {
              class: Ue(["toggle-btn", { active: p.value }]),
              onClick: X[2] || (X[2] = (E) => p.value = !p.value)
            }, f(p.value ? "Models Only" : "All Files"), 3),
            s("button", {
              class: "action-btn",
              onClick: K
            }, "Auto-Select Models"),
            s("button", {
              class: "action-btn",
              onClick: ie
            }, "Clear")
          ])
        ]),
        s("div", E_, [
          L.value.length > 0 ? (a(), i("div", T_, [
            s("input", {
              type: "checkbox",
              checked: Q.value,
              indeterminate: P.value && !Q.value,
              class: "file-checkbox",
              onChange: De
            }, null, 40, M_),
            s("span", {
              class: "header-name",
              onClick: X[3] || (X[3] = (E) => oe("name"))
            }, [
              X[9] || (X[9] = C(" Name ", -1)),
              s("span", P_, f(w.value === "name" ? y.value ? "▲" : "▼" : ""), 1)
            ]),
            s("span", {
              class: "header-size",
              onClick: X[4] || (X[4] = (E) => oe("size"))
            }, [
              X[10] || (X[10] = C(" Size ", -1)),
              s("span", R_, f(w.value === "size" ? y.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : h("", !0),
          L.value.length === 0 ? (a(), i("div", L_, f(c.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (a(), i("div", N_, [
            (a(!0), i(G, null, ye(A.value, (E) => (a(), i("div", {
              key: E.path,
              class: Ue(["file-item", { selected: u.value.has(E.path) }]),
              onClick: (M) => te(E)
            }, [
              s("input", {
                type: "checkbox",
                checked: u.value.has(E.path),
                class: "file-checkbox",
                onClick: X[5] || (X[5] = ft(() => {
                }, ["stop"])),
                onChange: (M) => te(E)
              }, null, 40, O_),
              s("span", A_, f(E.path), 1),
              s("span", U_, f(ce(E.size)), 1)
            ], 10, D_))), 128))
          ]))
        ]),
        s("div", z_, [
          X[11] || (X[11] = s("h4", { class: "section-label" }, "Download Destination", -1)),
          s("div", V_, [
            k(v_, {
              modelValue: _.value,
              "onUpdate:modelValue": X[6] || (X[6] = (E) => _.value = E),
              options: B.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            _.value !== "__custom__" ? (a(), i("span", F_, "/")) : h("", !0),
            _.value !== "__custom__" ? (a(), R(wt, {
              key: 1,
              modelValue: x.value,
              "onUpdate:modelValue": X[7] || (X[7] = (E) => x.value = E),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : h("", !0)
          ]),
          _.value === "__custom__" ? (a(), R(wt, {
            key: 0,
            modelValue: b.value,
            "onUpdate:modelValue": X[8] || (X[8] = (E) => b.value = E),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : h("", !0)
        ]),
        s("div", B_, [
          s("div", W_, [
            s("span", G_, f(u.value.size) + " file(s) selected", 1),
            s("span", j_, f(ce(ee.value)), 1)
          ]),
          k(Le, {
            variant: "primary",
            disabled: u.value.size === 0 || !Y.value,
            onClick: Re
          }, {
            default: g(() => [...X[12] || (X[12] = [
              C(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), q_ = /* @__PURE__ */ Ce(H_, [["__scopeId", "data-v-183acebc"]]), K_ = { class: "token-config-modal" }, J_ = { class: "provider-info" }, Q_ = { class: "provider-icon" }, Y_ = { class: "provider-name" }, X_ = {
  key: 0,
  class: "current-token"
}, Z_ = { class: "mask" }, ek = { class: "token-input-section" }, tk = { class: "input-label" }, sk = { class: "help-text" }, ok = ["href"], nk = { class: "modal-actions" }, ak = /* @__PURE__ */ $e({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: t }) {
    const o = e, n = t, { updateConfig: l } = vt(), r = $(""), c = $(!1), u = $(!1), d = N(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), v = N(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), m = N(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), p = N(
      () => o.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), w = N(
      () => o.provider === "huggingface" ? "Get your HuggingFace token →" : "Get your CivitAI API key →"
    );
    async function y() {
      if (r.value.trim()) {
        c.value = !0;
        try {
          const x = o.provider === "huggingface" ? { huggingface_token: r.value.trim() } : { civitai_api_key: r.value.trim() };
          await l(x), r.value = "", n("saved"), n("close");
        } catch (x) {
          console.error("Failed to save token:", x);
        } finally {
          c.value = !1;
        }
      }
    }
    async function _() {
      u.value = !0;
      try {
        const x = o.provider === "huggingface" ? { huggingface_token: null } : { civitai_api_key: null };
        await l(x), n("cleared"), n("close");
      } catch (x) {
        console.error("Failed to clear token:", x);
      } finally {
        u.value = !1;
      }
    }
    return (x, b) => (a(), R(xt, {
      title: "Configure API Token",
      onClose: b[2] || (b[2] = (S) => x.$emit("close"))
    }, {
      body: g(() => [
        s("div", K_, [
          s("div", J_, [
            s("span", Q_, f(v.value), 1),
            s("span", Y_, f(d.value), 1)
          ]),
          e.currentTokenMask ? (a(), i("div", X_, [
            b[4] || (b[4] = s("span", { class: "label" }, "Current token:", -1)),
            s("span", Z_, f(e.currentTokenMask), 1),
            k(Le, {
              variant: "danger",
              size: "sm",
              onClick: _,
              loading: u.value
            }, {
              default: g(() => [...b[3] || (b[3] = [
                C(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : h("", !0),
          s("div", ek, [
            s("label", tk, f(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            k(wt, {
              modelValue: r.value,
              "onUpdate:modelValue": b[0] || (b[0] = (S) => r.value = S),
              type: "password",
              placeholder: m.value
            }, null, 8, ["modelValue", "placeholder"]),
            s("div", sk, [
              s("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, f(w.value), 9, ok)
            ])
          ])
        ])
      ]),
      footer: g(() => [
        s("div", nk, [
          k(Le, {
            variant: "secondary",
            onClick: b[1] || (b[1] = (S) => x.$emit("close"))
          }, {
            default: g(() => [...b[5] || (b[5] = [
              C(" Cancel ", -1)
            ])]),
            _: 1
          }),
          k(Le, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: c.value,
            onClick: y
          }, {
            default: g(() => [...b[6] || (b[6] = [
              C(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }));
  }
}), lk = /* @__PURE__ */ Ce(ak, [["__scopeId", "data-v-0687d0ce"]]), ik = { class: "huggingface-tab" }, rk = {
  key: 0,
  class: "search-section"
}, ck = { class: "search-header" }, uk = { class: "search-bar" }, dk = {
  key: 1,
  class: "search-results"
}, fk = {
  key: 0,
  class: "loading-state"
}, mk = {
  key: 1,
  class: "error-state"
}, vk = {
  key: 2,
  class: "results-list"
}, pk = ["onClick"], gk = { class: "repo-header" }, hk = { class: "repo-id" }, yk = { class: "repo-stats" }, wk = {
  class: "stat",
  title: "Downloads"
}, _k = {
  class: "stat",
  title: "Likes"
}, kk = {
  key: 0,
  class: "repo-desc"
}, bk = {
  key: 1,
  class: "repo-tags"
}, $k = {
  key: 3,
  class: "empty-state"
}, Ck = {
  key: 4,
  class: "hint-state"
}, xk = /* @__PURE__ */ $e({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: t, getConfig: o } = vt(), n = $("search"), l = $(""), r = $([]), c = $(!1), u = $(null), d = $(!1), v = $(null), m = $("main"), p = $(), w = $(), y = $(!1), _ = $(null), x = N(() => {
      if (!u.value) return !1;
      const Q = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || Q.includes("authentication") || Q.includes("unauthorized");
    });
    function b(Q) {
      return Q >= 1e6 ? `${(Q / 1e6).toFixed(1)}M` : Q >= 1e3 ? `${(Q / 1e3).toFixed(1)}K` : String(Q);
    }
    async function S() {
      const Q = l.value.trim();
      if (!Q) return;
      u.value = null;
      const P = g_(Q);
      if (P.kind === "file" && P.repoId && P.path) {
        v.value = P.repoId, m.value = P.revision || "main";
        const B = P.path.split("/");
        B.length > 1 ? p.value = B.slice(0, -1).join("/") : p.value = void 0, w.value = P.path, n.value = "browse";
        return;
      }
      if (P.kind === "repo" && P.repoId) {
        v.value = P.repoId, m.value = P.revision || "main", p.value = P.path, w.value = void 0, n.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(Q) && !Q.includes("://")) {
        v.value = Q, m.value = "main", p.value = void 0, w.value = void 0, n.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const B = await t(Q);
        r.value = B.results, d.value = !0;
      } catch (B) {
        u.value = B instanceof Error ? B.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function O(Q) {
      v.value = Q, m.value = "main", p.value = void 0, w.value = void 0, n.value = "browse";
    }
    function T() {
      n.value = "search", v.value = null, p.value = void 0, w.value = void 0;
    }
    async function I() {
      try {
        const Q = await o();
        _.value = Q.huggingface_token || null;
      } catch (Q) {
        console.error("Failed to load config:", Q);
      }
    }
    function L() {
      I(), x.value && l.value && S();
    }
    function A() {
      _.value = null;
    }
    return rt(I), (Q, P) => (a(), i("div", ik, [
      n.value === "search" ? (a(), i("div", rk, [
        s("div", ck, [
          s("div", uk, [
            k(wt, {
              modelValue: l.value,
              "onUpdate:modelValue": P[0] || (P[0] = (B) => l.value = B),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: ds(S, ["enter"])
            }, null, 8, ["modelValue"]),
            k(Le, {
              variant: "primary",
              onClick: S,
              loading: c.value
            }, {
              default: g(() => [...P[5] || (P[5] = [
                C(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          k(Le, {
            variant: "secondary",
            size: "sm",
            onClick: P[1] || (P[1] = (B) => y.value = !0)
          }, {
            default: g(() => [
              C(f(_.value ? `Token: ${_.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : h("", !0),
      n.value === "search" ? (a(), i("div", dk, [
        c.value ? (a(), i("div", fk, " Searching HuggingFace... ")) : u.value ? (a(), i("div", mk, [
          s("p", null, f(u.value), 1),
          x.value ? (a(), R(Le, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: P[2] || (P[2] = (B) => y.value = !0)
          }, {
            default: g(() => [...P[6] || (P[6] = [
              C(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : h("", !0)
        ])) : r.value.length > 0 ? (a(), i("div", vk, [
          (a(!0), i(G, null, ye(r.value, (B) => (a(), i("div", {
            key: B.repo_id,
            class: "repo-card",
            onClick: (Y) => O(B.repo_id)
          }, [
            s("div", gk, [
              s("span", hk, f(B.repo_id), 1),
              s("div", yk, [
                s("span", wk, [
                  P[7] || (P[7] = s("span", { class: "stat-icon" }, "↓", -1)),
                  C(" " + f(b(B.downloads)), 1)
                ]),
                s("span", _k, [
                  P[8] || (P[8] = s("span", { class: "stat-icon" }, "★", -1)),
                  C(" " + f(b(B.likes)), 1)
                ])
              ])
            ]),
            B.description ? (a(), i("p", kk, f(B.description), 1)) : h("", !0),
            B.tags.length > 0 ? (a(), i("div", bk, [
              (a(!0), i(G, null, ye(B.tags.slice(0, 5), (Y) => (a(), i("span", {
                key: Y,
                class: "tag"
              }, f(Y), 1))), 128))
            ])) : h("", !0)
          ], 8, pk))), 128))
        ])) : d.value ? (a(), i("div", $k, " No repositories found ")) : (a(), i("div", Ck, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (a(), R(q_, {
        key: 2,
        "repo-id": v.value,
        revision: m.value,
        "initial-path": p.value,
        "preselected-file": w.value,
        onBack: T,
        onQueue: P[3] || (P[3] = (B) => Q.$emit("queue", B))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      y.value ? (a(), R(lk, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": _.value,
        onClose: P[4] || (P[4] = (B) => y.value = !1),
        onSaved: L,
        onCleared: A
      }, null, 8, ["current-token-mask"])) : h("", !0)
    ]));
  }
}), Sk = /* @__PURE__ */ Ce(xk, [["__scopeId", "data-v-e13209bf"]]), Ik = { class: "civitai-tab" }, Ek = /* @__PURE__ */ $e({
  __name: "CivitaiTab",
  setup(e) {
    return (t, o) => (a(), i("div", Ik, [...o[0] || (o[0] = [
      s("div", { class: "placeholder" }, [
        s("div", { class: "icon" }, "🎨"),
        s("h3", null, "Civitai Integration"),
        s("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), Tk = /* @__PURE__ */ Ce(Ek, [["__scopeId", "data-v-44948051"]]), Mk = { class: "direct-url-tab" }, Pk = { class: "input-group" }, Rk = { class: "input-group" }, Lk = {
  key: 0,
  class: "error"
}, Nk = { class: "actions" }, Dk = /* @__PURE__ */ $e({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: t }) {
    const o = t, n = $(""), l = $(""), r = N(() => {
      const d = l.value.trim();
      if (!d) return null;
      const v = d.replace(/\\/g, "/").split("/").pop() || "";
      return v.includes(".") && !v.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), c = N(() => n.value.trim() !== "" && l.value.trim() !== "" && !r.value), u = () => {
      if (!c.value) return;
      const d = l.value.replace(/\\/g, "/").split("/").pop() || "";
      o("queue", [{
        url: n.value.trim(),
        targetPath: l.value.trim(),
        filename: d
      }]), n.value = "", l.value = "";
    };
    return (d, v) => (a(), i("div", Mk, [
      s("div", Pk, [
        v[2] || (v[2] = s("label", null, "Download URL", -1)),
        k(wt, {
          modelValue: n.value,
          "onUpdate:modelValue": v[0] || (v[0] = (m) => n.value = m),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      s("div", Rk, [
        v[3] || (v[3] = s("label", null, "Target Path (relative to models directory)", -1)),
        k(wt, {
          modelValue: l.value,
          "onUpdate:modelValue": v[1] || (v[1] = (m) => l.value = m),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        r.value ? (a(), i("p", Lk, f(r.value), 1)) : h("", !0)
      ]),
      v[5] || (v[5] = s("p", { class: "note" }, "Model will be queued for background download.", -1)),
      s("div", Nk, [
        k(Le, {
          variant: "primary",
          disabled: !c.value,
          onClick: u
        }, {
          default: g(() => [...v[4] || (v[4] = [
            C(" Queue Download ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), Ok = /* @__PURE__ */ Ce(Dk, [["__scopeId", "data-v-01def7aa"]]), Ak = { class: "download-modal" }, Uk = { class: "tab-bar" }, zk = ["onClick"], Vk = { class: "tab-content" }, Fk = /* @__PURE__ */ $e({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = t, { addToQueue: n } = Ro(), l = [
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], r = $("huggingface");
    function c(v) {
      n(v.map((m) => ({
        workflow: "__manual__",
        filename: m.filename,
        url: m.url,
        targetPath: m.destination ? `${m.destination}/${m.filename}` : m.filename
      }))), o("close");
    }
    function u(v) {
      n(v.map((m) => ({
        workflow: "__manual__",
        filename: m.filename,
        url: m.url,
        targetPath: m.targetPath
      }))), o("close");
    }
    function d() {
      o("close");
    }
    return (v, m) => e.show ? (a(), R(xt, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: d
    }, {
      body: g(() => [
        s("div", Ak, [
          s("div", Uk, [
            (a(), i(G, null, ye(l, (p) => s("button", {
              key: p.id,
              class: Ue(["tab-btn", { active: r.value === p.id }]),
              onClick: (w) => r.value = p.id
            }, f(p.icon) + " " + f(p.label), 11, zk)), 64))
          ]),
          s("div", Vk, [
            r.value === "huggingface" ? (a(), R(Sk, {
              key: 0,
              onQueue: c
            })) : r.value === "civitai" ? (a(), R(Tk, { key: 1 })) : r.value === "direct" ? (a(), R(Ok, {
              key: 2,
              onQueue: u
            })) : h("", !0)
          ])
        ])
      ]),
      footer: g(() => [
        k(Le, {
          variant: "secondary",
          onClick: d
        }, {
          default: g(() => [...m[0] || (m[0] = [
            C(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : h("", !0);
  }
}), Jr = /* @__PURE__ */ Ce(Fk, [["__scopeId", "data-v-90a9f401"]]), Bk = /* @__PURE__ */ $e({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const o = t, { getEnvironmentModels: n, getStatus: l } = vt(), r = $([]), c = $([]), u = $("production"), d = $(!1), v = $(null), m = $(""), p = $(!1), w = $(null), y = $(!1);
    function _() {
      p.value = !1, o("navigate", "model-index");
    }
    const x = N(
      () => r.value.reduce((P, B) => P + (B.size || 0), 0)
    ), b = N(() => {
      if (!m.value.trim()) return r.value;
      const P = m.value.toLowerCase();
      return r.value.filter((B) => B.filename.toLowerCase().includes(P));
    }), S = N(() => {
      if (!m.value.trim()) return c.value;
      const P = m.value.toLowerCase();
      return c.value.filter((B) => B.filename.toLowerCase().includes(P));
    }), O = N(() => {
      const P = {};
      for (const Y of b.value) {
        const ee = Y.type || "other";
        P[ee] || (P[ee] = []), P[ee].push(Y);
      }
      const B = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(P).sort(([Y], [ee]) => {
        const ce = B.indexOf(Y), he = B.indexOf(ee);
        return ce >= 0 && he >= 0 ? ce - he : ce >= 0 ? -1 : he >= 0 ? 1 : Y.localeCompare(ee);
      }).map(([Y, ee]) => ({ type: Y, models: ee }));
    });
    function T(P) {
      if (!P) return "Unknown";
      const B = P / (1024 * 1024);
      return B >= 1024 ? `${(B / 1024).toFixed(1)} GB` : `${B.toFixed(0)} MB`;
    }
    function I(P) {
      w.value = P.hash || P.filename;
    }
    function L(P) {
      o("navigate", "model-index");
    }
    function A(P) {
      alert(`Download functionality not yet implemented for ${P}`);
    }
    async function Q() {
      d.value = !0, v.value = null;
      try {
        const P = await n();
        r.value = P, c.value = [];
        const B = await l();
        u.value = B.environment || "production";
      } catch (P) {
        v.value = P instanceof Error ? P.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return rt(Q), (P, B) => (a(), i(G, null, [
      k(Ot, null, {
        header: g(() => [
          k(At, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: B[1] || (B[1] = (Y) => p.value = !0)
          }, {
            actions: g(() => [
              k(Ie, {
                variant: "primary",
                size: "sm",
                onClick: B[0] || (B[0] = (Y) => y.value = !0)
              }, {
                default: g(() => [...B[6] || (B[6] = [
                  s("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    s("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  C(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          k(lo, {
            modelValue: m.value,
            "onUpdate:modelValue": B[2] || (B[2] = (Y) => m.value = Y),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value ? (a(), R($s, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (a(), R(Cs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: Q
          }, null, 8, ["message"])) : (a(), i(G, { key: 2 }, [
            r.value.length ? (a(), R(mn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                C(" Total: " + f(r.value.length) + " models • " + f(T(x.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : h("", !0),
            (a(!0), i(G, null, ye(O.value, (Y) => (a(), R(Ct, {
              key: Y.type,
              title: Y.type.toUpperCase(),
              count: Y.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), i(G, null, ye(Y.models, (ee) => (a(), R(Vt, {
                  key: ee.hash || ee.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...B[7] || (B[7] = [
                    C("📦", -1)
                  ])]),
                  title: g(() => [
                    C(f(ee.filename), 1)
                  ]),
                  subtitle: g(() => [
                    C(f(T(ee.size)), 1)
                  ]),
                  details: g(() => [
                    k(_t, {
                      label: "Used by:",
                      value: (ee.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    k(_t, {
                      label: "Path:",
                      value: ee.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ce) => I(ee)
                    }, {
                      default: g(() => [...B[8] || (B[8] = [
                        C(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            S.value.length ? (a(), R(Ct, {
              key: 1,
              title: "MISSING",
              count: S.value.length
            }, {
              default: g(() => [
                (a(!0), i(G, null, ye(S.value, (Y) => (a(), R(Vt, {
                  key: Y.filename,
                  status: "broken"
                }, {
                  icon: g(() => [...B[9] || (B[9] = [
                    C("⚠", -1)
                  ])]),
                  title: g(() => [
                    C(f(Y.filename), 1)
                  ]),
                  subtitle: g(() => [...B[10] || (B[10] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: g(() => {
                    var ee;
                    return [
                      k(_t, {
                        label: "Required by:",
                        value: ((ee = Y.workflow_names) == null ? void 0 : ee.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: g(() => [
                    k(Ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ee) => A(Y.filename)
                    }, {
                      default: g(() => [...B[11] || (B[11] = [
                        C(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ee) => L(Y.filename)
                    }, {
                      default: g(() => [...B[12] || (B[12] = [
                        C(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            !b.value.length && !S.value.length ? (a(), R(ls, {
              key: 2,
              icon: "📭",
              message: m.value ? `No models match '${m.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(is, {
        show: p.value,
        title: "About Environment Models",
        onClose: B[3] || (B[3] = (Y) => p.value = !1)
      }, {
        content: g(() => [
          s("p", null, [
            B[13] || (B[13] = C(" These are models currently used by workflows in ", -1)),
            s("strong", null, '"' + f(u.value) + '"', 1),
            B[14] || (B[14] = C(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: g(() => [
          k(Ie, {
            variant: "primary",
            onClick: _
          }, {
            default: g(() => [...B[15] || (B[15] = [
              C(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), R(bl, {
        key: 0,
        identifier: w.value,
        onClose: B[4] || (B[4] = (Y) => w.value = null)
      }, null, 8, ["identifier"])) : h("", !0),
      k(Jr, {
        show: y.value,
        onClose: B[5] || (B[5] = (Y) => y.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), Wk = /* @__PURE__ */ Ce(Bk, [["__scopeId", "data-v-af3ca736"]]), Gk = {
  key: 0,
  class: "indexing-progress"
}, jk = { class: "progress-info" }, Hk = { class: "progress-label" }, qk = { class: "progress-count" }, Kk = { class: "progress-bar" }, Jk = { class: "modal-content" }, Qk = { class: "modal-header" }, Yk = { class: "modal-body" }, Xk = { class: "input-group" }, Zk = { class: "current-path" }, eb = { class: "input-group" }, tb = { class: "modal-footer" }, sb = /* @__PURE__ */ $e({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = vt(), c = t, u = $([]), d = $(!1), v = $(!1), m = $(null), p = $(""), w = $(!1), y = $(null), _ = $(!1), x = $(null), b = $(""), S = $(!1), O = $(!1), T = $(null), I = N(
      () => u.value.reduce((he, te) => he + (te.size || 0), 0)
    ), L = N(() => {
      if (!p.value.trim()) return u.value;
      const he = p.value.toLowerCase();
      return u.value.filter((te) => {
        const K = te, ie = te.sha256 || K.sha256_hash || "";
        return te.filename.toLowerCase().includes(he) || ie.toLowerCase().includes(he);
      });
    }), A = N(() => {
      const he = {};
      for (const K of L.value) {
        const ie = K.type || "other";
        he[ie] || (he[ie] = []), he[ie].push(K);
      }
      const te = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(he).sort(([K], [ie]) => {
        const De = te.indexOf(K), oe = te.indexOf(ie);
        return De >= 0 && oe >= 0 ? De - oe : De >= 0 ? -1 : oe >= 0 ? 1 : K.localeCompare(ie);
      }).map(([K, ie]) => ({ type: K, models: ie }));
    });
    function Q(he) {
      if (!he) return "Unknown";
      const te = 1024 * 1024 * 1024, K = 1024 * 1024;
      return he >= te ? `${(he / te).toFixed(1)} GB` : he >= K ? `${(he / K).toFixed(0)} MB` : `${(he / 1024).toFixed(0)} KB`;
    }
    function P(he) {
      y.value = he.hash || he.filename;
    }
    async function B() {
      v.value = !0, m.value = null;
      try {
        const he = await n();
        await ee(), he.changes > 0 && console.log(`Scan complete: ${he.changes} changes detected`);
      } catch (he) {
        m.value = he instanceof Error ? he.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function Y() {
      if (b.value.trim()) {
        S.value = !0, m.value = null;
        try {
          const he = await r(b.value.trim());
          x.value = he.path, _.value = !1, b.value = "", await ee(), console.log(`Directory changed: ${he.models_indexed} models indexed`), c("refresh");
        } catch (he) {
          m.value = he instanceof Error ? he.message : "Failed to change directory";
        } finally {
          S.value = !1;
        }
      }
    }
    async function ee() {
      d.value = !0, m.value = null;
      try {
        u.value = await o();
      } catch (he) {
        m.value = he instanceof Error ? he.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function ce() {
      try {
        const he = await l();
        x.value = he.path;
      } catch {
      }
    }
    return rt(() => {
      ee(), ce();
    }), (he, te) => (a(), i(G, null, [
      k(Ot, null, {
        header: g(() => [
          k(At, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: te[2] || (te[2] = (K) => w.value = !0)
          }, {
            actions: g(() => [
              k(Ie, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: B
              }, {
                default: g(() => [
                  C(f(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(Ie, {
                variant: "primary",
                size: "sm",
                onClick: te[0] || (te[0] = (K) => _.value = !0)
              }, {
                default: g(() => [...te[11] || (te[11] = [
                  C(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              k(Ie, {
                variant: "primary",
                size: "sm",
                onClick: te[1] || (te[1] = (K) => O.value = !0)
              }, {
                default: g(() => [...te[12] || (te[12] = [
                  s("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    s("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  C(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          T.value ? (a(), i("div", Gk, [
            s("div", jk, [
              s("span", Hk, f(T.value.message), 1),
              s("span", qk, f(T.value.current) + "/" + f(T.value.total), 1)
            ]),
            s("div", Kk, [
              s("div", {
                class: "progress-fill",
                style: Wt({ width: `${T.value.current / T.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : h("", !0),
          k(lo, {
            modelValue: p.value,
            "onUpdate:modelValue": te[3] || (te[3] = (K) => p.value = K),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value || T.value ? (a(), R($s, {
            key: 0,
            message: T.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : m.value ? (a(), R(Cs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: ee
          }, null, 8, ["message"])) : (a(), i(G, { key: 2 }, [
            u.value.length ? (a(), R(mn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                C(" Total: " + f(u.value.length) + " models • " + f(Q(I.value)), 1)
              ]),
              _: 1
            })) : h("", !0),
            (a(!0), i(G, null, ye(A.value, (K) => (a(), R(Ct, {
              key: K.type,
              title: K.type.toUpperCase(),
              count: K.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: g(() => [
                (a(!0), i(G, null, ye(K.models, (ie) => (a(), R(Vt, {
                  key: ie.sha256 || ie.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...te[13] || (te[13] = [
                    C("📦", -1)
                  ])]),
                  title: g(() => [
                    C(f(ie.filename), 1)
                  ]),
                  subtitle: g(() => [
                    C(f(Q(ie.size)), 1)
                  ]),
                  details: g(() => [
                    k(_t, {
                      label: "Hash:",
                      value: ie.hash ? ie.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (De) => P(ie)
                    }, {
                      default: g(() => [...te[14] || (te[14] = [
                        C(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            L.value.length ? h("", !0) : (a(), R(ls, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k(is, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: te[4] || (te[4] = (K) => w.value = !1)
      }, {
        content: g(() => [...te[15] || (te[15] = [
          s("p", null, [
            C(" Content-addressable model storage shared across "),
            s("strong", null, "all environments"),
            C(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      y.value ? (a(), R(bl, {
        key: 0,
        identifier: y.value,
        onClose: te[5] || (te[5] = (K) => y.value = null)
      }, null, 8, ["identifier"])) : h("", !0),
      (a(), R(Dt, { to: "body" }, [
        _.value ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: te[9] || (te[9] = ft((K) => _.value = !1, ["self"]))
        }, [
          s("div", Jk, [
            s("div", Qk, [
              te[16] || (te[16] = s("h3", null, "Change Models Directory", -1)),
              s("button", {
                class: "modal-close",
                onClick: te[6] || (te[6] = (K) => _.value = !1)
              }, "✕")
            ]),
            s("div", Yk, [
              s("div", Xk, [
                te[17] || (te[17] = s("label", null, "Current Directory", -1)),
                s("code", Zk, f(x.value || "Not set"), 1)
              ]),
              s("div", eb, [
                te[18] || (te[18] = s("label", null, "New Directory Path", -1)),
                k(wt, {
                  modelValue: b.value,
                  "onUpdate:modelValue": te[7] || (te[7] = (K) => b.value = K),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              te[19] || (te[19] = s("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            s("div", tb, [
              k(Le, {
                variant: "secondary",
                onClick: te[8] || (te[8] = (K) => _.value = !1)
              }, {
                default: g(() => [...te[20] || (te[20] = [
                  C(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(Le, {
                variant: "primary",
                disabled: !b.value.trim() || S.value,
                loading: S.value,
                onClick: Y
              }, {
                default: g(() => [
                  C(f(S.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : h("", !0)
      ])),
      k(Jr, {
        show: O.value,
        onClose: te[10] || (te[10] = (K) => O.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), ob = /* @__PURE__ */ Ce(sb, [["__scopeId", "data-v-3705114c"]]), nb = { class: "node-details" }, ab = { class: "status-row" }, lb = {
  key: 0,
  class: "detail-row"
}, ib = { class: "value" }, rb = { class: "detail-row" }, cb = { class: "value" }, ub = {
  key: 1,
  class: "detail-row"
}, db = { class: "value mono" }, fb = {
  key: 2,
  class: "detail-row"
}, mb = ["href"], vb = {
  key: 3,
  class: "detail-row"
}, pb = { class: "value mono small" }, gb = { class: "detail-row" }, hb = {
  key: 0,
  class: "value"
}, yb = {
  key: 1,
  class: "workflow-list"
}, wb = /* @__PURE__ */ $e({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = N(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = N(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = N(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, d) => (a(), R(xt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (v) => n("close"))
    }, {
      body: g(() => [
        s("div", nb, [
          s("div", ab, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Ue(["status-badge", l.value])
            }, f(r.value), 3)
          ]),
          e.node.version ? (a(), i("div", lb, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", ib, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : h("", !0),
          s("div", rb, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", cb, f(c.value), 1)
          ]),
          e.node.registry_id ? (a(), i("div", ub, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", db, f(e.node.registry_id), 1)
          ])) : h("", !0),
          e.node.repository ? (a(), i("div", fb, [
            d[7] || (d[7] = s("span", { class: "label" }, "Repository:", -1)),
            s("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              C(f(e.node.repository) + " ", 1),
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
            ], 8, mb)
          ])) : h("", !0),
          e.node.download_url ? (a(), i("div", vb, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", pb, f(e.node.download_url), 1)
          ])) : h("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", gb, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), i("span", hb, " Not used in any workflows ")) : (a(), i("div", yb, [
              (a(!0), i(G, null, ye(e.node.used_in_workflows, (v) => (a(), i("span", {
                key: v,
                class: "workflow-tag"
              }, f(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: g(() => [
        k(Le, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (v) => n("close"))
        }, {
          default: g(() => [...d[11] || (d[11] = [
            C(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), _b = /* @__PURE__ */ Ce(wb, [["__scopeId", "data-v-b342f626"]]), kb = { class: "dialog-message" }, bb = {
  key: 0,
  class: "dialog-details"
}, $b = {
  key: 1,
  class: "dialog-warning"
}, Cb = /* @__PURE__ */ $e({
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
    return (t, o) => (a(), R(xt, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => t.$emit("cancel"))
    }, {
      body: g(() => [
        s("p", kb, f(e.message), 1),
        e.details && e.details.length ? (a(), i("div", bb, [
          (a(!0), i(G, null, ye(e.details, (n, l) => (a(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : h("", !0),
        e.warning ? (a(), i("p", $b, [
          o[4] || (o[4] = s("span", { class: "warning-icon" }, "⚠", -1)),
          C(" " + f(e.warning), 1)
        ])) : h("", !0)
      ]),
      footer: g(() => [
        k(Le, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => t.$emit("cancel"))
        }, {
          default: g(() => [
            C(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), R(Le, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => t.$emit("secondary"))
        }, {
          default: g(() => [
            C(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : h("", !0),
        k(Le, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
        }, {
          default: g(() => [
            C(f(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), $l = /* @__PURE__ */ Ce(Cb, [["__scopeId", "data-v-3670b9f5"]]), xb = { class: "mismatch-warning" }, Sb = { class: "version-mismatch" }, Ib = { class: "version-actual" }, Eb = { class: "version-expected" }, Tb = { style: { color: "var(--cg-color-warning)" } }, Mb = { style: { color: "var(--cg-color-warning)" } }, Pb = {
  key: 0,
  class: "community-status-badge"
}, Rb = { key: 0 }, Lb = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Nb = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Db = /* @__PURE__ */ $e({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getNodes: l, trackNodeAsDev: r, installNode: c, uninstallNode: u, queueNodeInstall: d } = vt(), v = $({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), m = $(!1), p = $(null), w = $(""), y = $(!1), _ = $(null), x = $(/* @__PURE__ */ new Set()), b = $(null), S = N(() => {
      if (!w.value.trim()) return v.value.nodes;
      const E = w.value.toLowerCase();
      return v.value.nodes.filter(
        (M) => {
          var ne, Ve;
          return M.name.toLowerCase().includes(E) || ((ne = M.description) == null ? void 0 : ne.toLowerCase().includes(E)) || ((Ve = M.repository) == null ? void 0 : Ve.toLowerCase().includes(E));
        }
      );
    }), O = N(
      () => S.value.filter((E) => E.installed && E.tracked)
    ), T = N(
      () => S.value.filter((E) => !E.installed && E.tracked && !E.issue_type)
    ), I = N(
      () => S.value.filter((E) => E.installed && !E.tracked)
    ), L = N(
      () => S.value.filter((E) => E.issue_type === "version_gated")
    ), A = N(
      () => S.value.filter((E) => E.issue_type === "uninstallable")
    ), Q = N(() => L.value.length), P = N(() => A.value.length);
    function B(E) {
      return E.registry_id || E.name;
    }
    function Y(E) {
      return x.value.has(B(E));
    }
    async function ee(E, M) {
      const ne = E.registry_id;
      if (!ne) {
        n("toast", `Node "${E.name}" has no package id for install`, "warning");
        return;
      }
      if (M === "git" && !E.repository) {
        n("toast", `Node "${E.name}" has no repository URL for git install`, "warning");
        return;
      }
      const Ve = {
        id: ne,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      M === "git" && E.repository && (Ve.repository = E.repository, Ve.install_source = "git"), await d(Ve), x.value.add(B(E)), n("toast", `✓ Queued install for "${E.name}"`, "success");
    }
    function ce(E) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[E] || E;
    }
    const he = N(() => o.versionMismatches.length > 0);
    function te(E) {
      return !E.used_in_workflows || E.used_in_workflows.length === 0 ? "Not used in any workflows" : E.used_in_workflows.length === 1 ? E.used_in_workflows[0] : `${E.used_in_workflows.length} workflows`;
    }
    function K(E) {
      return E.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function ie(E) {
      return E.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function De(E) {
      return E.registry_id ? `Community-mapped package: ${E.registry_id}` : "Community-mapped package";
    }
    function oe(E) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function ge(E) {
      _.value = E;
    }
    function U() {
      n("open-node-manager");
    }
    function me(E) {
      b.value = {
        title: "Track as Development Node",
        message: `Track "${E}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          b.value = null;
          try {
            m.value = !0;
            const M = await r(E);
            M.status === "success" ? (n("toast", `✓ Node "${E}" tracked as development`, "success"), await X()) : n("toast", `Failed to track node: ${M.message || "Unknown error"}`, "error");
          } catch (M) {
            n("toast", `Error tracking node: ${M instanceof Error ? M.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function Re(E) {
      b.value = {
        title: "Remove Untracked Node",
        message: `Remove "${E}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          b.value = null;
          try {
            m.value = !0;
            const M = await u(E);
            M.status === "success" ? (n("toast", `✓ Node "${E}" removed`, "success"), await X()) : n("toast", `Failed to remove node: ${M.message || "Unknown error"}`, "error");
          } catch (M) {
            n("toast", `Error removing node: ${M instanceof Error ? M.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function Be(E) {
      b.value = {
        title: "Install Missing Node",
        message: `Install "${E}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          b.value = null;
          try {
            m.value = !0;
            const M = await c(E);
            M.status === "success" ? (n("toast", `✓ Node "${E}" installed`, "success"), await X()) : n("toast", `Failed to install node: ${M.message || "Unknown error"}`, "error");
          } catch (M) {
            n("toast", `Error installing node: ${M instanceof Error ? M.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function Se(E) {
      b.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${E.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          b.value = null;
          try {
            m.value = !0, await ee(E, "registry");
          } catch (M) {
            n("toast", `Error queueing install: ${M instanceof Error ? M.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function H(E) {
      b.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${E.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          b.value = null;
          try {
            m.value = !0, await ee(E, "git");
          } catch (M) {
            n("toast", `Error queueing git install: ${M instanceof Error ? M.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    async function X() {
      m.value = !0, p.value = null;
      try {
        v.value = await l();
      } catch (E) {
        p.value = E instanceof Error ? E.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return rt(X), (E, M) => (a(), i(G, null, [
      k(Ot, null, {
        header: g(() => [
          k(At, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (ne) => y.value = !0)
          }, {
            actions: g(() => [
              k(Ie, {
                variant: "primary",
                size: "sm",
                onClick: U
              }, {
                default: g(() => [...M[7] || (M[7] = [
                  C(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          k(lo, {
            modelValue: w.value,
            "onUpdate:modelValue": M[1] || (M[1] = (ne) => w.value = ne),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          m.value ? (a(), R($s, {
            key: 0,
            message: "Loading nodes..."
          })) : p.value ? (a(), R(Cs, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: X
          }, null, 8, ["message"])) : (a(), i(G, { key: 2 }, [
            v.value.total_count ? (a(), R(mn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                C(f(v.value.installed_count) + " installed ", 1),
                v.value.missing_count ? (a(), i(G, { key: 0 }, [
                  C(" • " + f(v.value.missing_count) + " missing", 1)
                ], 64)) : h("", !0),
                Q.value ? (a(), i(G, { key: 1 }, [
                  C(" • " + f(Q.value) + " blocked", 1)
                ], 64)) : h("", !0),
                P.value ? (a(), i(G, { key: 2 }, [
                  C(" • " + f(P.value) + " community-mapped", 1)
                ], 64)) : h("", !0),
                v.value.untracked_count ? (a(), i(G, { key: 3 }, [
                  C(" • " + f(v.value.untracked_count) + " untracked", 1)
                ], 64)) : h("", !0)
              ]),
              _: 1
            })) : h("", !0),
            he.value ? (a(), R(Ct, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                s("div", xb, [
                  M[8] || (M[8] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), i(G, null, ye(e.versionMismatches, (ne) => (a(), R(Vt, {
                  key: ne.name,
                  status: "warning"
                }, {
                  icon: g(() => [...M[9] || (M[9] = [
                    C("⚠", -1)
                  ])]),
                  title: g(() => [
                    C(f(ne.name), 1)
                  ]),
                  subtitle: g(() => [
                    s("span", Sb, [
                      s("span", Ib, f(ne.actual), 1),
                      M[10] || (M[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", Eb, f(ne.expected), 1)
                    ])
                  ]),
                  actions: g(() => [
                    k(Ie, {
                      variant: "warning",
                      size: "sm",
                      onClick: M[2] || (M[2] = (Ve) => n("repair-environment"))
                    }, {
                      default: g(() => [...M[11] || (M[11] = [
                        C(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            L.value.length ? (a(), R(Ct, {
              key: 2,
              title: "BLOCKED",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), i(G, null, ye(L.value, (ne) => (a(), R(Vt, {
                  key: `blocked-${ne.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...M[12] || (M[12] = [
                    C("⛔", -1)
                  ])]),
                  title: g(() => [
                    C(f(ne.name), 1)
                  ]),
                  subtitle: g(() => [
                    s("span", Tb, f(K(ne)), 1)
                  ]),
                  details: g(() => [
                    k(_t, {
                      label: "Guidance:",
                      value: ne.issue_guidance || ie(ne)
                    }, null, 8, ["value"]),
                    k(_t, {
                      label: "Used by:",
                      value: te(ne)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => ge(ne)
                    }, {
                      default: g(() => [...M[13] || (M[13] = [
                        C(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            A.value.length ? (a(), R(Ct, {
              key: 3,
              title: "COMMUNITY-MAPPED",
              count: A.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), i(G, null, ye(A.value, (ne) => (a(), R(Vt, {
                  key: `community-${ne.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...M[14] || (M[14] = [
                    C("⚠", -1)
                  ])]),
                  title: g(() => [
                    C(f(ne.name), 1)
                  ]),
                  subtitle: g(() => [
                    s("span", Mb, f(De(ne)), 1)
                  ]),
                  details: g(() => [
                    k(_t, {
                      label: "Guidance:",
                      value: ne.issue_guidance || oe(ne)
                    }, null, 8, ["value"]),
                    k(_t, {
                      label: "Used by:",
                      value: te(ne)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => ge(ne)
                    }, {
                      default: g(() => [...M[15] || (M[15] = [
                        C(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    Y(ne) ? (a(), i("span", Pb, "Queued")) : (a(), i(G, { key: 1 }, [
                      ne.registry_id ? (a(), R(Ie, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (Ve) => Se(ne)
                      }, {
                        default: g(() => [...M[16] || (M[16] = [
                          C(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0),
                      ne.repository ? (a(), R(Ie, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (Ve) => H(ne)
                      }, {
                        default: g(() => [...M[17] || (M[17] = [
                          C(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            I.value.length ? (a(), R(Ct, {
              key: 4,
              title: "UNTRACKED",
              count: I.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), i(G, null, ye(I.value, (ne) => (a(), R(Vt, {
                  key: ne.name,
                  status: "warning"
                }, {
                  icon: g(() => [...M[18] || (M[18] = [
                    C("?", -1)
                  ])]),
                  title: g(() => [
                    C(f(ne.name), 1)
                  ]),
                  subtitle: g(() => [...M[19] || (M[19] = [
                    s("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: g(() => [
                    k(_t, {
                      label: "Used by:",
                      value: te(ne)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => ge(ne)
                    }, {
                      default: g(() => [...M[20] || (M[20] = [
                        C(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Ve) => me(ne.name)
                    }, {
                      default: g(() => [...M[21] || (M[21] = [
                        C(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ie, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Ve) => Re(ne.name)
                    }, {
                      default: g(() => [...M[22] || (M[22] = [
                        C(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            O.value.length ? (a(), R(Ct, {
              key: 5,
              title: "INSTALLED",
              count: O.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), i(G, null, ye(O.value, (ne) => (a(), R(Vt, {
                  key: ne.name,
                  status: "synced"
                }, {
                  icon: g(() => [
                    C(f(ne.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: g(() => [
                    C(f(ne.name), 1)
                  ]),
                  subtitle: g(() => [
                    ne.version ? (a(), i("span", Rb, f(ne.source === "development" ? "" : "v") + f(ne.version), 1)) : (a(), i("span", Lb, "version unknown")),
                    s("span", Nb, " • " + f(ce(ne.source)), 1)
                  ]),
                  details: g(() => [
                    k(_t, {
                      label: "Used by:",
                      value: te(ne)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => ge(ne)
                    }, {
                      default: g(() => [...M[23] || (M[23] = [
                        C(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: U
                    }, {
                      default: g(() => [...M[24] || (M[24] = [
                        C(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            T.value.length ? (a(), R(Ct, {
              key: 6,
              title: "MISSING",
              count: T.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), i(G, null, ye(T.value, (ne) => (a(), R(Vt, {
                  key: ne.name,
                  status: "missing"
                }, {
                  icon: g(() => [...M[25] || (M[25] = [
                    C("!", -1)
                  ])]),
                  title: g(() => [
                    C(f(ne.name), 1)
                  ]),
                  subtitle: g(() => [...M[26] || (M[26] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: g(() => [
                    k(_t, {
                      label: "Required by:",
                      value: te(ne)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => ge(ne)
                    }, {
                      default: g(() => [...M[27] || (M[27] = [
                        C(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Ve) => Be(ne.name)
                    }, {
                      default: g(() => [...M[28] || (M[28] = [
                        C(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            !O.value.length && !T.value.length && !L.value.length && !A.value.length && !I.value.length ? (a(), R(ls, {
              key: 7,
              icon: "📭",
              message: w.value ? `No nodes match '${w.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(is, {
        show: y.value,
        title: "About Custom Nodes",
        onClose: M[4] || (M[4] = (ne) => y.value = !1)
      }, {
        content: g(() => [...M[29] || (M[29] = [
          s("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Installed:"),
            C(" Tracked nodes available in this environment"),
            s("br"),
            s("strong", null, "Missing:"),
            C(" Tracked nodes that need to be installed"),
            s("br"),
            s("strong", null, "Blocked:"),
            C(" Node types that require newer ComfyUI"),
            s("br"),
            s("strong", null, "Community-Mapped:"),
            C(" Actionable package mappings from community metadata"),
            s("br"),
            s("strong", null, "Untracked:"),
            C(" Nodes on filesystem but not in manifest ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: g(() => [
          k(Ie, {
            variant: "primary",
            onClick: M[3] || (M[3] = (ne) => y.value = !1)
          }, {
            default: g(() => [...M[30] || (M[30] = [
              C(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (a(), R(_b, {
        key: 0,
        node: _.value,
        onClose: M[5] || (M[5] = (ne) => _.value = null)
      }, null, 8, ["node"])) : h("", !0),
      b.value ? (a(), R($l, {
        key: 1,
        title: b.value.title,
        message: b.value.message,
        warning: b.value.warning,
        "confirm-label": b.value.confirmLabel,
        destructive: b.value.destructive,
        onConfirm: b.value.onConfirm,
        onCancel: M[6] || (M[6] = (ne) => b.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : h("", !0)
    ], 64));
  }
}), Ob = /* @__PURE__ */ Ce(Db, [["__scopeId", "data-v-3ef68ac4"]]), Ab = { class: "setting-info" }, Ub = { class: "setting-label" }, zb = {
  key: 0,
  class: "required-marker"
}, Vb = {
  key: 0,
  class: "setting-description"
}, Fb = { class: "setting-control" }, Bb = /* @__PURE__ */ $e({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (a(), i("div", {
      class: Ue(["setting-row", { disabled: e.disabled, stacked: e.stacked }])
    }, [
      s("div", Ab, [
        s("div", Ub, [
          C(f(e.label) + " ", 1),
          e.required ? (a(), i("span", zb, "*")) : h("", !0)
        ]),
        e.description ? (a(), i("div", Vb, f(e.description), 1)) : h("", !0)
      ]),
      s("div", Fb, [
        ot(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), fo = /* @__PURE__ */ Ce(Bb, [["__scopeId", "data-v-3e106b1c"]]), Wb = ["type", "value", "placeholder", "disabled"], Gb = /* @__PURE__ */ $e({
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
  setup(e, { expose: t, emit: o }) {
    const n = e, l = o, r = $(null);
    function c(u) {
      const d = u.target.value;
      l("update:modelValue", d);
    }
    return rt(() => {
      n.autoFocus && r.value && r.value.focus();
    }), t({
      focus: () => {
        var u;
        return (u = r.value) == null ? void 0 : u.focus();
      },
      blur: () => {
        var u;
        return (u = r.value) == null ? void 0 : u.blur();
      }
    }), (u, d) => (a(), i("input", {
      ref_key: "inputRef",
      ref: r,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: Ue(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = ds((v) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = ds((v) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => u.$emit("blur"))
    }, null, 42, Wb));
  }
}), go = /* @__PURE__ */ Ce(Gb, [["__scopeId", "data-v-0380d08f"]]), jb = { class: "toggle" }, Hb = ["checked", "disabled"], qb = /* @__PURE__ */ $e({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), i("label", jb, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, Hb),
      o[1] || (o[1] = s("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), yi = /* @__PURE__ */ Ce(qb, [["__scopeId", "data-v-71c0f550"]]), za = "ComfyGit.Deploy.GitHubPAT";
function Qr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function Kb(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function Jb() {
  function e() {
    try {
      return localStorage.getItem(za);
    } catch {
      return null;
    }
  }
  function t(l) {
    try {
      localStorage.setItem(za, l);
    } catch (r) {
      console.error("[useGitAuth] Failed to save token:", r);
    }
  }
  function o() {
    try {
      localStorage.removeItem(za);
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
    setToken: t,
    clearToken: o,
    hasToken: n,
    isRemoteSsh: Qr,
    isRemoteHttps: Kb
  };
}
const Qb = { class: "workspace-settings-content" }, Yb = { class: "settings-section" }, Xb = { class: "path-setting" }, Zb = { class: "path-value" }, e2 = { class: "path-setting" }, t2 = { class: "path-value" }, s2 = { class: "settings-section" }, o2 = { class: "token-setting" }, n2 = {
  key: 0,
  class: "token-warning"
}, a2 = { class: "token-actions" }, l2 = { class: "settings-section" }, i2 = { class: "settings-section" }, r2 = /* @__PURE__ */ $e({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: o }) {
    const n = e, l = o, { getConfig: r, updateConfig: c, getRemotes: u, testGitAuth: d } = vt(), { getToken: v, setToken: m, clearToken: p, hasToken: w } = Jb(), y = $(!1), _ = $(null), x = $(null), b = $(null), S = $(null), O = $(""), T = $(""), I = $(""), L = $(""), A = $(!1), Q = $(!1), P = $(!1), B = $(""), Y = $(!1), ee = $(!1), ce = $(null), he = $(!1), te = $(!0);
    function K(X) {
      return X.join(" ");
    }
    function ie(X) {
      return X.trim() ? X.trim().split(/\s+/) : [];
    }
    const De = N(() => {
      if (!S.value) return !1;
      const X = A.value, E = Q.value, M = P.value, ne = L.value !== K(S.value.comfyui_extra_args || []);
      return X || E || M || ne;
    }), oe = N(() => w());
    async function ge() {
      var X;
      y.value = !0, _.value = null;
      try {
        b.value = await r(n.workspacePath || void 0), S.value = { ...b.value }, O.value = b.value.civitai_api_key || "", T.value = b.value.huggingface_token || "", L.value = K(b.value.comfyui_extra_args || []), I.value = v() || "", B.value = I.value, A.value = !1, Q.value = !1, P.value = !1, ce.value = null;
        const E = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        he.value = E !== "false", te.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const ne = (X = (await u()).remotes) == null ? void 0 : X.find((Ve) => Ve.name === "origin");
          Y.value = !!(ne && Qr(ne.url));
        } catch {
          Y.value = !1;
        }
      } catch (E) {
        _.value = E instanceof Error ? E.message : "Failed to load settings";
      } finally {
        y.value = !1;
      }
    }
    async function U() {
      var X;
      x.value = null;
      try {
        const E = {};
        A.value && (E.civitai_api_key = O.value || null), Q.value && (E.huggingface_token = T.value || null), L.value !== K(((X = S.value) == null ? void 0 : X.comfyui_extra_args) || []) && (E.comfyui_extra_args = ie(L.value)), await c(E, n.workspacePath || void 0), P.value && (I.value ? m(I.value) : p()), await ge(), x.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          x.value = null;
        }, 3e3);
      } catch (E) {
        const M = E instanceof Error ? E.message : "Failed to save settings";
        x.value = { type: "error", message: M }, l("error", M);
      }
    }
    function me() {
      S.value && (O.value = S.value.civitai_api_key || "", T.value = S.value.huggingface_token || "", L.value = K(S.value.comfyui_extra_args || []), I.value = B.value, A.value = !1, Q.value = !1, P.value = !1, ce.value = null, x.value = null);
    }
    async function Re() {
      if (I.value) {
        ee.value = !0, ce.value = null;
        try {
          const X = await d(I.value);
          ce.value = {
            type: X.status === "success" ? "success" : "error",
            message: X.message
          };
        } catch (X) {
          ce.value = {
            type: "error",
            message: X instanceof Error ? X.message : "Connection test failed"
          };
        } finally {
          ee.value = !1;
        }
      }
    }
    function Be() {
      I.value = "", P.value = !0, ce.value = null;
    }
    function Se(X) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(X)), console.log("[ComfyGit] Auto-refresh setting saved:", X);
    }
    function H(X) {
      X ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", X ? "enabled" : "disabled");
    }
    return t({
      saveSettings: U,
      resetSettings: me,
      hasChanges: De,
      loadSettings: ge
    }), rt(ge), (X, E) => (a(), i("div", Qb, [
      y.value ? (a(), R($s, {
        key: 0,
        message: "Loading workspace settings..."
      })) : _.value ? (a(), R(Cs, {
        key: 1,
        message: _.value,
        retry: !0,
        onRetry: ge
      }, null, 8, ["message"])) : (a(), i(G, { key: 2 }, [
        k(Ct, { title: "WORKSPACE PATHS" }, {
          default: g(() => {
            var M, ne;
            return [
              s("div", Yb, [
                s("div", Xb, [
                  E[9] || (E[9] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  E[10] || (E[10] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", Zb, f(((M = b.value) == null ? void 0 : M.workspace_path) || "Loading..."), 1)
                ]),
                s("div", e2, [
                  E[11] || (E[11] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  E[12] || (E[12] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", t2, f(((ne = b.value) == null ? void 0 : ne.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        k(Ct, { title: "API CREDENTIALS" }, {
          default: g(() => [
            s("div", s2, [
              k(fo, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: g(() => [
                  k(go, {
                    modelValue: O.value,
                    "onUpdate:modelValue": E[0] || (E[0] = (M) => O.value = M),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: E[1] || (E[1] = (M) => A.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              k(fo, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: g(() => [
                  k(go, {
                    modelValue: T.value,
                    "onUpdate:modelValue": E[2] || (E[2] = (M) => T.value = M),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: E[3] || (E[3] = (M) => Q.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              k(fo, {
                label: "GitHub Personal Access Token",
                description: "Client-side token used for private Git remote access during deploy and remote operations",
                stacked: ""
              }, {
                default: g(() => [
                  s("div", o2, [
                    k(go, {
                      modelValue: I.value,
                      "onUpdate:modelValue": E[4] || (E[4] = (M) => I.value = M),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: E[5] || (E[5] = (M) => P.value = !0)
                    }, null, 8, ["modelValue"]),
                    Y.value ? (a(), i("div", n2, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : h("", !0),
                    E[15] || (E[15] = s("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    s("div", a2, [
                      k(Ie, {
                        variant: "ghost",
                        size: "xs",
                        loading: ee.value,
                        disabled: !I.value || ee.value,
                        onClick: Re
                      }, {
                        default: g(() => [...E[13] || (E[13] = [
                          C(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      oe.value ? (a(), R(Ie, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: Be
                      }, {
                        default: g(() => [...E[14] || (E[14] = [
                          C(" Clear ", -1)
                        ])]),
                        _: 1
                      })) : h("", !0)
                    ]),
                    ce.value ? (a(), i("div", {
                      key: 1,
                      class: Ue(["token-test-result", ce.value.type])
                    }, f(ce.value.message), 3)) : h("", !0)
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        k(Ct, { title: "COMFYUI SETTINGS" }, {
          default: g(() => [
            s("div", l2, [
              k(fo, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: g(() => [
                  k(go, {
                    modelValue: L.value,
                    "onUpdate:modelValue": E[6] || (E[6] = (M) => L.value = M),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              E[16] || (E[16] = s("div", { class: "setting-hint" }, [
                C(" Common flags: "),
                s("code", null, "--lowvram"),
                C(", "),
                s("code", null, "--highvram"),
                C(", "),
                s("code", null, "--listen 0.0.0.0"),
                C(", "),
                s("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        k(Ct, { title: "UI SETTINGS" }, {
          default: g(() => [
            s("div", i2, [
              k(fo, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: g(() => [
                  k(yi, {
                    modelValue: he.value,
                    "onUpdate:modelValue": [
                      E[7] || (E[7] = (M) => he.value = M),
                      Se
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              k(fo, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: g(() => [
                  k(yi, {
                    modelValue: te.value,
                    "onUpdate:modelValue": [
                      E[8] || (E[8] = (M) => te.value = M),
                      H
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        x.value ? (a(), R(mn, {
          key: 0,
          variant: (x.value.type === "success", "compact")
        }, {
          default: g(() => [
            s("span", {
              style: Wt({ color: x.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, f(x.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : h("", !0)
      ], 64))
    ]));
  }
}), Yr = /* @__PURE__ */ Ce(r2, [["__scopeId", "data-v-f1bdc574"]]), c2 = /* @__PURE__ */ $e({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const t = $(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), R(Ot, null, {
      header: g(() => [
        k(At, { title: "WORKSPACE SETTINGS" }, {
          actions: g(() => {
            var r, c;
            return [
              k(Ie, {
                variant: "primary",
                size: "sm",
                disabled: !((r = t.value) != null && r.hasChanges),
                onClick: l[0] || (l[0] = (u) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: g(() => [...l[2] || (l[2] = [
                  C(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (c = t.value) != null && c.hasChanges ? (a(), R(Ie, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (u) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: g(() => [...l[3] || (l[3] = [
                  C(" Reset ", -1)
                ])]),
                _: 1
              })) : h("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: g(() => [
        k(Yr, {
          ref_key: "contentRef",
          ref: t,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), u2 = { class: "env-title" }, d2 = {
  key: 0,
  class: "current-badge"
}, f2 = {
  key: 0,
  class: "branch-info"
}, m2 = /* @__PURE__ */ $e({
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
    return (t, o) => (a(), R(Vt, {
      status: e.isCurrent ? "synced" : void 0
    }, Yt({
      icon: g(() => [
        C(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: g(() => [
        s("div", u2, [
          s("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), i("span", d2, "CURRENT")) : h("", !0)
        ])
      ]),
      subtitle: g(() => [
        e.currentBranch ? (a(), i("span", f2, [
          o[0] || (o[0] = s("span", { class: "branch-icon" }, "⎇", -1)),
          C(" " + f(e.currentBranch), 1)
        ])) : h("", !0)
      ]),
      actions: g(() => [
        ot(t.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: g(() => [
          k(_t, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          k(_t, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          k(_t, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (a(), R(_t, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : h("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), v2 = /* @__PURE__ */ Ce(m2, [["__scopeId", "data-v-9231917a"]]), p2 = { class: "env-details" }, g2 = { class: "status-row" }, h2 = {
  key: 0,
  class: "detail-row"
}, y2 = { class: "value mono" }, w2 = {
  key: 1,
  class: "detail-row"
}, _2 = { class: "value mono small" }, k2 = { class: "collapsible-section" }, b2 = { class: "value" }, $2 = {
  key: 0,
  class: "collapsible-body"
}, C2 = { class: "item-list" }, x2 = { class: "item-name" }, S2 = { class: "item-name" }, I2 = { class: "item-name" }, E2 = { class: "item-name" }, T2 = {
  key: 0,
  class: "empty-list"
}, M2 = { class: "collapsible-section" }, P2 = { class: "value" }, R2 = {
  key: 0,
  class: "collapsible-body"
}, L2 = { class: "item-list" }, N2 = { class: "item-name" }, D2 = {
  key: 0,
  class: "item-meta"
}, O2 = {
  key: 0,
  class: "empty-list"
}, A2 = { class: "collapsible-section" }, U2 = { class: "value" }, z2 = {
  key: 0,
  class: "missing-count"
}, V2 = {
  key: 0,
  class: "collapsible-body"
}, F2 = { class: "item-list" }, B2 = { class: "model-row" }, W2 = { class: "item-name" }, G2 = { class: "model-meta" }, j2 = { class: "item-meta" }, H2 = {
  key: 0,
  class: "item-meta"
}, q2 = {
  key: 0,
  class: "empty-list"
}, K2 = {
  key: 2,
  class: "section-divider"
}, J2 = {
  key: 3,
  class: "detail-row"
}, Q2 = { class: "value" }, Y2 = { class: "footer-actions" }, X2 = /* @__PURE__ */ $e({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete", "export"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = $(/* @__PURE__ */ new Set());
    function r(d) {
      l.value.has(d) ? l.value.delete(d) : l.value.add(d), l.value = new Set(l.value);
    }
    const c = N(() => {
      var v;
      if (!((v = o.detail) != null && v.workflows)) return !0;
      const d = o.detail.workflows;
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
    return (d, v) => (a(), R(xt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[6] || (v[6] = (m) => n("close"))
    }, {
      body: g(() => {
        var m, p, w, y, _, x, b, S, O, T, I, L, A, Q;
        return [
          s("div", p2, [
            s("div", g2, [
              v[7] || (v[7] = s("span", { class: "label" }, "Status:", -1)),
              s("span", {
                class: Ue(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (a(), i("div", h2, [
              v[8] || (v[8] = s("span", { class: "label" }, "Branch:", -1)),
              s("span", y2, f(e.environment.current_branch), 1)
            ])) : h("", !0),
            e.environment.path ? (a(), i("div", w2, [
              v[9] || (v[9] = s("span", { class: "label" }, "Path:", -1)),
              s("span", _2, f(e.environment.path), 1)
            ])) : h("", !0),
            v[18] || (v[18] = s("div", { class: "section-divider" }, null, -1)),
            s("div", k2, [
              s("div", {
                class: "collapsible-header",
                onClick: v[0] || (v[0] = (P) => r("workflows"))
              }, [
                v[10] || (v[10] = s("span", { class: "label" }, "Workflows:", -1)),
                s("span", b2, f(((m = e.detail) == null ? void 0 : m.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (a(), i("span", {
                  key: 0,
                  class: Ue(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (a(), i("div", $2, [
                s("div", C2, [
                  (a(!0), i(G, null, ye(e.detail.workflows.synced, (P) => (a(), i("div", {
                    key: "synced-" + P,
                    class: "list-item"
                  }, [
                    s("span", x2, f(P), 1),
                    v[11] || (v[11] = s("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (a(!0), i(G, null, ye(e.detail.workflows.new, (P) => (a(), i("div", {
                    key: "new-" + P,
                    class: "list-item"
                  }, [
                    s("span", S2, f(P), 1),
                    v[12] || (v[12] = s("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (a(!0), i(G, null, ye(e.detail.workflows.modified, (P) => (a(), i("div", {
                    key: "mod-" + P,
                    class: "list-item"
                  }, [
                    s("span", I2, f(P), 1),
                    v[13] || (v[13] = s("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (a(!0), i(G, null, ye(e.detail.workflows.deleted, (P) => (a(), i("div", {
                    key: "del-" + P,
                    class: "list-item"
                  }, [
                    s("span", E2, f(P), 1),
                    v[14] || (v[14] = s("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (a(), i("div", T2, "No workflows")) : h("", !0)
                ])
              ])) : h("", !0)
            ]),
            s("div", M2, [
              s("div", {
                class: "collapsible-header",
                onClick: v[1] || (v[1] = (P) => r("nodes"))
              }, [
                v[15] || (v[15] = s("span", { class: "label" }, "Nodes:", -1)),
                s("span", P2, f(((y = e.detail) == null ? void 0 : y.node_count) ?? e.environment.node_count), 1),
                (_ = e.detail) != null && _.nodes ? (a(), i("span", {
                  key: 0,
                  class: Ue(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (x = e.detail) != null && x.nodes && l.value.has("nodes") ? (a(), i("div", R2, [
                s("div", L2, [
                  (a(!0), i(G, null, ye(e.detail.nodes, (P) => (a(), i("div", {
                    key: P.name,
                    class: "list-item"
                  }, [
                    s("span", N2, f(P.name), 1),
                    P.version ? (a(), i("span", D2, f(P.version), 1)) : h("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? h("", !0) : (a(), i("div", O2, "No nodes"))
                ])
              ])) : h("", !0)
            ]),
            s("div", A2, [
              s("div", {
                class: "collapsible-header",
                onClick: v[2] || (v[2] = (P) => r("models"))
              }, [
                v[16] || (v[16] = s("span", { class: "label" }, "Models:", -1)),
                s("span", U2, [
                  C(f(((b = e.detail) == null ? void 0 : b.model_count) ?? e.environment.model_count) + " ", 1),
                  (O = (S = e.detail) == null ? void 0 : S.models) != null && O.missing.length ? (a(), i("span", z2, "(" + f(e.detail.models.missing.length) + " missing)", 1)) : h("", !0)
                ]),
                (T = e.detail) != null && T.models ? (a(), i("span", {
                  key: 0,
                  class: Ue(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (I = e.detail) != null && I.models && l.value.has("models") ? (a(), i("div", V2, [
                s("div", F2, [
                  (a(!0), i(G, null, ye(e.detail.models.missing, (P) => (a(), i("div", {
                    key: P.filename,
                    class: "list-item model-item"
                  }, [
                    s("div", B2, [
                      s("span", W2, f(P.filename), 1),
                      s("span", {
                        class: Ue(["criticality-badge", P.criticality])
                      }, f(P.criticality), 3)
                    ]),
                    s("div", G2, [
                      s("span", j2, f(P.category), 1),
                      P.workflow_names.length ? (a(), i("span", H2, " used by: " + f(P.workflow_names.join(", ")), 1)) : h("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? h("", !0) : (a(), i("div", q2, "No missing models"))
                ])
              ])) : h("", !0)
            ]),
            (L = e.detail) != null && L.created_at || e.environment.created_at ? (a(), i("div", K2)) : h("", !0),
            (A = e.detail) != null && A.created_at || e.environment.created_at ? (a(), i("div", J2, [
              v[17] || (v[17] = s("span", { class: "label" }, "Created:", -1)),
              s("span", Q2, f(u(((Q = e.detail) == null ? void 0 : Q.created_at) ?? e.environment.created_at)), 1)
            ])) : h("", !0)
          ])
        ];
      }),
      footer: g(() => [
        s("div", Y2, [
          k(Le, {
            variant: "secondary",
            size: "sm",
            onClick: v[3] || (v[3] = (m) => n("export", e.environment.name))
          }, {
            default: g(() => [...v[19] || (v[19] = [
              C(" Export ", -1)
            ])]),
            _: 1
          }),
          e.canDelete ? (a(), R(Le, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[4] || (v[4] = (m) => n("delete", e.environment.name))
          }, {
            default: g(() => [...v[20] || (v[20] = [
              C(" Delete ", -1)
            ])]),
            _: 1
          })) : h("", !0),
          v[22] || (v[22] = s("div", { class: "footer-spacer" }, null, -1)),
          k(Le, {
            variant: "secondary",
            size: "sm",
            onClick: v[5] || (v[5] = (m) => n("close"))
          }, {
            default: g(() => [...v[21] || (v[21] = [
              C(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Z2 = /* @__PURE__ */ Ce(X2, [["__scopeId", "data-v-750671f5"]]), Xr = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Zr = "3.12", Cl = [
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
], ec = "auto", e$ = { class: "progress-bar" }, t$ = /* @__PURE__ */ $e({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, o = N(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (n, l) => (a(), i("div", e$, [
      s("div", {
        class: Ue(["progress-fill", e.variant]),
        style: Wt({ width: o.value })
      }, null, 6)
    ]));
  }
}), tc = /* @__PURE__ */ Ce(t$, [["__scopeId", "data-v-1beb0512"]]), s$ = { class: "task-progress" }, o$ = { class: "progress-info" }, n$ = { class: "progress-percentage" }, a$ = { class: "progress-message" }, l$ = {
  key: 0,
  class: "progress-steps"
}, i$ = { class: "step-icon" }, r$ = { class: "step-label" }, c$ = /* @__PURE__ */ $e({
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
    function o(l) {
      const r = t.steps.find((c) => c.id === l);
      return r ? t.progress >= r.progressThreshold ? "completed" : t.currentPhase === l ? "active" : "pending" : "pending";
    }
    function n(l) {
      const r = o(l);
      return r === "completed" ? "✓" : r === "active" ? "⟳" : "○";
    }
    return (l, r) => (a(), i("div", s$, [
      k(tc, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", o$, [
        s("span", n$, f(e.progress) + "%", 1),
        s("span", a$, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), i("div", l$, [
        (a(!0), i(G, null, ye(e.steps, (c) => (a(), i("div", {
          key: c.id,
          class: Ue(["step", o(c.id)])
        }, [
          s("span", i$, f(n(c.id)), 1),
          s("span", r$, f(c.label), 1)
        ], 2))), 128))
      ])) : h("", !0)
    ]));
  }
}), jn = /* @__PURE__ */ Ce(c$, [["__scopeId", "data-v-9d1de66c"]]), u$ = {
  key: 0,
  class: "create-env-form"
}, d$ = { class: "form-field" }, f$ = { class: "input-wrapper" }, m$ = {
  key: 0,
  class: "validating-indicator"
}, v$ = {
  key: 1,
  class: "valid-indicator"
}, p$ = {
  key: 0,
  class: "field-error"
}, g$ = { class: "form-field" }, h$ = ["value"], y$ = { class: "form-field" }, w$ = ["disabled"], _$ = ["value"], k$ = { class: "form-field" }, b$ = ["value"], $$ = { class: "form-field form-field--checkbox" }, C$ = { class: "form-checkbox" }, x$ = {
  key: 1,
  class: "create-env-progress"
}, S$ = { class: "creating-intro" }, I$ = {
  key: 0,
  class: "progress-warning"
}, E$ = {
  key: 1,
  class: "create-error"
}, T$ = { class: "error-message" }, M$ = {
  key: 1,
  class: "footer-status"
}, P$ = 10, R$ = /* @__PURE__ */ $e({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const o = t, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = vt(), u = $(""), d = $(Zr), v = $("latest"), m = $(ec), p = $(!1), w = $(null), y = $(!1), _ = $(!1);
    let x = null, b = 0;
    const S = N(() => !!u.value.trim() && _.value && !w.value && !y.value && !I.value), O = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), T = $(!1), I = $(!1), L = $({
      progress: 0,
      message: ""
    });
    let A = null, Q = 0;
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
    ], B = $(null);
    kt(u, (oe) => {
      _.value = !1, x && (clearTimeout(x), x = null);
      const ge = oe.trim();
      if (!ge) {
        w.value = null, y.value = !1;
        return;
      }
      y.value = !0, x = setTimeout(() => {
        Y(ge);
      }, 400);
    });
    async function Y(oe, ge = !1) {
      const U = oe.trim();
      if (!U)
        return _.value = !1, y.value = !1, w.value = ge ? "Environment name is required" : null, !1;
      const me = ++b;
      y.value = !0;
      try {
        const Re = await c(U);
        return me !== b ? !1 : (w.value = Re.valid ? null : Re.error || "Invalid name", _.value = !!Re.valid, !!Re.valid);
      } catch {
        return me !== b || (w.value = "Failed to validate name", _.value = !1), !1;
      } finally {
        me === b && (y.value = !1);
      }
    }
    async function ee() {
      x && (clearTimeout(x), x = null), await Y(u.value, !0);
    }
    function ce() {
      I.value || o("close");
    }
    async function he() {
      const oe = u.value.trim();
      if (!oe) {
        w.value = "Environment name is required";
        return;
      }
      if (x && (clearTimeout(x), x = null), !!await Y(oe, !0)) {
        I.value = !0, L.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const U = {
            name: oe,
            python_version: d.value,
            comfyui_version: v.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, me = await l(U);
          me.status === "started" ? te() : me.status === "error" && (L.value = {
            progress: 0,
            message: me.message || "Failed to start creation",
            error: me.message
          });
        } catch (U) {
          L.value = {
            progress: 0,
            message: U instanceof Error ? U.message : "Unknown error",
            error: U instanceof Error ? U.message : "Unknown error"
          };
        }
      }
    }
    function te() {
      A || (Q = 0, A = window.setInterval(async () => {
        try {
          const oe = await r();
          Q = 0, L.value = {
            progress: oe.progress ?? 0,
            message: oe.message,
            phase: oe.phase,
            error: oe.error
          }, oe.state === "complete" ? (K(), o("created", oe.environment_name || u.value.trim(), p.value)) : oe.state === "error" ? (K(), L.value.error = oe.error || oe.message) : oe.state === "idle" && I.value && (K(), L.value.error = "Creation was interrupted. Please try again.");
        } catch {
          Q++, Q >= P$ && (K(), L.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function K() {
      A && (clearInterval(A), A = null);
    }
    function ie() {
      I.value = !1, L.value = { progress: 0, message: "" }, o("close");
    }
    async function De() {
      T.value = !0;
      try {
        O.value = await n();
      } catch (oe) {
        console.error("Failed to load ComfyUI releases:", oe);
      } finally {
        T.value = !1;
      }
    }
    return rt(async () => {
      var oe;
      await Pt(), (oe = B.value) == null || oe.focus(), De();
    }), Mo(() => {
      K(), x && (clearTimeout(x), x = null);
    }), (oe, ge) => (a(), R(xt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !I.value,
      onClose: ce
    }, {
      body: g(() => [
        I.value ? (a(), i("div", x$, [
          s("p", S$, [
            ge[12] || (ge[12] = C(" Creating environment ", -1)),
            s("strong", null, f(u.value), 1),
            ge[13] || (ge[13] = C("... ", -1))
          ]),
          k(jn, {
            progress: L.value.progress,
            message: L.value.message,
            "current-phase": L.value.phase,
            variant: L.value.error ? "error" : "default",
            "show-steps": !0,
            steps: P
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          L.value.error ? h("", !0) : (a(), i("p", I$, " This may take several minutes. Please wait... ")),
          L.value.error ? (a(), i("div", E$, [
            s("p", T$, f(L.value.error), 1)
          ])) : h("", !0)
        ])) : (a(), i("div", u$, [
          s("div", d$, [
            ge[6] || (ge[6] = s("label", { class: "form-label" }, "Name", -1)),
            s("div", f$, [
              Tt(s("input", {
                ref_key: "nameInput",
                ref: B,
                "onUpdate:modelValue": ge[0] || (ge[0] = (U) => u.value = U),
                type: "text",
                class: Ue(["form-input", { error: !!w.value, valid: _.value }]),
                placeholder: "my-environment",
                onKeyup: ds(he, ["enter"]),
                onBlur: ee
              }, null, 34), [
                [bo, u.value]
              ]),
              y.value ? (a(), i("span", m$, "...")) : _.value ? (a(), i("span", v$, "✓")) : h("", !0)
            ]),
            w.value ? (a(), i("div", p$, f(w.value), 1)) : h("", !0),
            ge[7] || (ge[7] = s("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          s("div", g$, [
            ge[8] || (ge[8] = s("label", { class: "form-label" }, "Python Version", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": ge[1] || (ge[1] = (U) => d.value = U),
              class: "form-select"
            }, [
              (a(!0), i(G, null, ye(st(Xr), (U) => (a(), i("option", {
                key: U,
                value: U
              }, f(U), 9, h$))), 128))
            ], 512), [
              [$o, d.value]
            ])
          ]),
          s("div", y$, [
            ge[9] || (ge[9] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": ge[2] || (ge[2] = (U) => v.value = U),
              class: "form-select",
              disabled: T.value
            }, [
              (a(!0), i(G, null, ye(O.value, (U) => (a(), i("option", {
                key: U.tag_name,
                value: U.tag_name
              }, f(U.name), 9, _$))), 128))
            ], 8, w$), [
              [$o, v.value]
            ])
          ]),
          s("div", k$, [
            ge[10] || (ge[10] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": ge[3] || (ge[3] = (U) => m.value = U),
              class: "form-select"
            }, [
              (a(!0), i(G, null, ye(st(Cl), (U) => (a(), i("option", {
                key: U,
                value: U
              }, f(U) + f(U === "auto" ? " (detect GPU)" : ""), 9, b$))), 128))
            ], 512), [
              [$o, m.value]
            ])
          ]),
          s("div", $$, [
            s("label", C$, [
              Tt(s("input", {
                type: "checkbox",
                "onUpdate:modelValue": ge[4] || (ge[4] = (U) => p.value = U)
              }, null, 512), [
                [Wn, p.value]
              ]),
              ge[11] || (ge[11] = s("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: g(() => [
        I.value ? (a(), i(G, { key: 1 }, [
          L.value.error ? (a(), R(Le, {
            key: 0,
            variant: "secondary",
            onClick: ie
          }, {
            default: g(() => [...ge[16] || (ge[16] = [
              C(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), i("span", M$, " Creating environment... "))
        ], 64)) : (a(), i(G, { key: 0 }, [
          k(Le, {
            variant: "primary",
            disabled: !S.value,
            onClick: he
          }, {
            default: g(() => [...ge[14] || (ge[14] = [
              C(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(Le, {
            variant: "secondary",
            onClick: ge[5] || (ge[5] = (U) => o("close"))
          }, {
            default: g(() => [...ge[15] || (ge[15] = [
              C(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), L$ = /* @__PURE__ */ Ce(R$, [["__scopeId", "data-v-3faa3d9b"]]), N$ = /* @__PURE__ */ $e({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: t, emit: o }) {
    const n = o, { getEnvironments: l, getEnvironmentDetails: r } = vt(), c = $([]), u = $(!1), d = $(null), v = $(""), m = $(!1), p = $(!1), w = $(null), y = $(null), _ = N(() => {
      if (!v.value.trim()) return c.value;
      const L = v.value.toLowerCase();
      return c.value.filter(
        (A) => {
          var Q;
          return A.name.toLowerCase().includes(L) || ((Q = A.current_branch) == null ? void 0 : Q.toLowerCase().includes(L));
        }
      );
    });
    function x(L, A) {
      p.value = !1, n("created", L, A);
    }
    function b() {
      p.value = !0;
    }
    async function S(L) {
      w.value = L, y.value = null;
      const A = await r(L.name);
      A && (y.value = A);
    }
    function O(L) {
      w.value = null, y.value = null, n("delete", L);
    }
    function T(L) {
      w.value = null, y.value = null, n("export", L);
    }
    async function I() {
      u.value = !0, d.value = null;
      try {
        c.value = await l();
      } catch (L) {
        d.value = L instanceof Error ? L.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return rt(I), t({
      loadEnvironments: I,
      openCreateModal: b
    }), (L, A) => (a(), i(G, null, [
      k(Ot, null, {
        header: g(() => [
          k(At, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: A[1] || (A[1] = (Q) => m.value = !0)
          }, {
            actions: g(() => [
              e.canCreate ? (a(), R(Ie, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: b
              }, {
                default: g(() => [...A[7] || (A[7] = [
                  C(" Create ", -1)
                ])]),
                _: 1
              })) : h("", !0),
              k(Ie, {
                variant: "secondary",
                size: "sm",
                onClick: A[0] || (A[0] = (Q) => L.$emit("import"))
              }, {
                default: g(() => [...A[8] || (A[8] = [
                  C(" Import ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          k(lo, {
            modelValue: v.value,
            "onUpdate:modelValue": A[2] || (A[2] = (Q) => v.value = Q),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          u.value ? (a(), R($s, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (a(), R(Cs, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (a(), i(G, { key: 2 }, [
            _.value.length ? (a(), R(Ct, {
              key: 0,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: g(() => [
                (a(!0), i(G, null, ye(_.value, (Q) => (a(), R(v2, {
                  key: Q.name,
                  "environment-name": Q.name,
                  "is-current": Q.is_current,
                  "current-branch": Q.current_branch,
                  "show-last-used": !1
                }, {
                  actions: g(() => [
                    !Q.is_current && e.canSwitch ? (a(), R(Ie, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (P) => L.$emit("switch", Q.name)
                    }, {
                      default: g(() => [...A[9] || (A[9] = [
                        C(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : h("", !0),
                    k(Ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (P) => S(Q)
                    }, {
                      default: g(() => [...A[10] || (A[10] = [
                        C(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (P) => L.$emit("export", Q.name)
                    }, {
                      default: g(() => [...A[11] || (A[11] = [
                        C(" Export ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            _.value.length ? h("", !0) : (a(), R(ls, {
              key: 1,
              icon: "🌍",
              message: v.value ? `No environments match '${v.value}'` : "No environments found. Create one to get started!"
            }, Yt({ _: 2 }, [
              v.value ? void 0 : {
                name: "actions",
                fn: g(() => [
                  e.canCreate ? (a(), R(Ie, {
                    key: 0,
                    variant: "primary",
                    onClick: b
                  }, {
                    default: g(() => [...A[12] || (A[12] = [
                      C(" Create Environment ", -1)
                    ])]),
                    _: 1
                  })) : h("", !0)
                ]),
                key: "0"
              }
            ]), 1032, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k(is, {
        show: m.value,
        title: "About Environments",
        onClose: A[4] || (A[4] = (Q) => m.value = !1)
      }, {
        content: g(() => [...A[13] || (A[13] = [
          s("p", null, [
            s("strong", null, "Environments"),
            C(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
        actions: g(() => [
          k(Ie, {
            variant: "secondary",
            onClick: A[3] || (A[3] = (Q) => m.value = !1)
          }, {
            default: g(() => [...A[14] || (A[14] = [
              C(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), R(Z2, {
        key: 0,
        environment: w.value,
        detail: y.value,
        "can-delete": e.canDelete && c.value.length > 1,
        onClose: A[5] || (A[5] = (Q) => {
          w.value = null, y.value = null;
        }),
        onDelete: O,
        onExport: T
      }, null, 8, ["environment", "detail", "can-delete"])) : h("", !0),
      p.value ? (a(), R(L$, {
        key: 1,
        onClose: A[6] || (A[6] = (Q) => p.value = !1),
        onCreated: x
      })) : h("", !0)
    ], 64));
  }
}), D$ = /* @__PURE__ */ Ce(N$, [["__scopeId", "data-v-01d95db8"]]), O$ = { class: "file-path" }, A$ = { class: "file-path-text" }, U$ = ["title"], z$ = /* @__PURE__ */ $e({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = $(!1);
    async function n() {
      try {
        await navigator.clipboard.writeText(t.path), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, r) => (a(), i("div", O$, [
      r[0] || (r[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", A$, f(e.path), 1),
      e.copyable ? (a(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, f(o.value ? "✓" : "📋"), 9, U$)) : h("", !0)
    ]));
  }
}), V$ = /* @__PURE__ */ Ce(z$, [["__scopeId", "data-v-f0982173"]]), F$ = { class: "base-textarea-wrapper" }, B$ = ["value", "rows", "placeholder", "disabled", "maxlength"], W$ = {
  key: 0,
  class: "base-textarea-count"
}, G$ = /* @__PURE__ */ $e({
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
    const o = e, n = t;
    function l(r) {
      r.shiftKey || r.ctrlKey || r.metaKey || o.submitOnEnter && (r.preventDefault(), n("submit"));
    }
    return (r, c) => (a(), i("div", F$, [
      s("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = ds(ft((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = ds(ft((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          ds(l, ["enter"])
        ]
      }, null, 40, B$),
      e.showCharCount && e.maxLength ? (a(), i("div", W$, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : h("", !0)
    ]));
  }
}), Co = /* @__PURE__ */ Ce(G$, [["__scopeId", "data-v-c6d16c93"]]), j$ = ["checked", "disabled"], H$ = { class: "base-checkbox-box" }, q$ = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, K$ = {
  key: 0,
  class: "base-checkbox-label"
}, J$ = /* @__PURE__ */ $e({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), i("label", {
      class: Ue(["base-checkbox", { disabled: e.disabled }])
    }, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.checked))
      }, null, 40, j$),
      s("span", H$, [
        e.modelValue ? (a(), i("svg", q$, [...o[1] || (o[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : h("", !0)
      ]),
      t.$slots.default ? (a(), i("span", K$, [
        ot(t.$slots, "default", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Hn = /* @__PURE__ */ Ce(J$, [["__scopeId", "data-v-bf17c831"]]), Q$ = { class: "export-blocked" }, Y$ = { class: "error-header" }, X$ = { class: "error-summary" }, Z$ = { class: "error-title" }, eC = { class: "error-description" }, tC = { class: "issues-list" }, sC = { class: "issue-message" }, oC = {
  key: 0,
  class: "issue-details"
}, nC = ["onClick"], aC = { class: "issue-fix" }, lC = {
  key: 0,
  class: "commit-section"
}, iC = {
  key: 0,
  class: "issues-warning"
}, rC = {
  key: 1,
  class: "commit-error"
}, cC = /* @__PURE__ */ $e({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { commit: l } = vt(), r = $(""), c = $(!1), u = $(!1), d = $(""), v = io({}), m = N(() => o.mode === "publish" ? "Publish" : "Export"), p = N(
      () => o.issues.some((S) => S.type === "uncommitted_workflows" || S.type === "uncommitted_git_changes")
    ), w = N(
      () => o.issues.some((S) => S.type === "unresolved_issues")
    ), y = N(
      () => w.value && !u.value
    ), _ = N(
      () => p.value && r.value.trim() !== "" && !c.value && !y.value
    );
    function x(S) {
      const O = o.issues[S];
      return v[S] || O.details.length <= 3 ? O.details : O.details.slice(0, 3);
    }
    async function b() {
      var S;
      if (_.value) {
        c.value = !0, d.value = "";
        try {
          const O = await l(r.value.trim(), u.value);
          if (O.status === "success")
            n("committed");
          else if (O.status === "blocked") {
            const T = ((S = O.issues) == null ? void 0 : S.map((I) => `${I.name}: ${I.issue}`).join("; ")) || "Unknown issues";
            d.value = `Commit blocked: ${T}`;
          } else
            d.value = O.message || "Commit failed";
        } catch (O) {
          d.value = O instanceof Error ? O.message : "Commit failed";
        } finally {
          c.value = !1;
        }
      }
    }
    return (S, O) => (a(), R(xt, {
      title: p.value ? `Commit & ${m.value}` : `Cannot ${m.value}`,
      size: "md",
      onClose: O[4] || (O[4] = (T) => S.$emit("close"))
    }, {
      body: g(() => [
        s("div", Q$, [
          s("div", Y$, [
            O[5] || (O[5] = s("span", { class: "error-icon" }, [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ], -1)),
            s("div", X$, [
              s("h3", Z$, f(m.value) + " blocked", 1),
              s("p", eC, f(p.value ? `Commit your changes to proceed with ${m.value.toLowerCase()}.` : `The following issues must be resolved before ${m.value.toLowerCase()}.`), 1)
            ])
          ]),
          s("div", tC, [
            (a(!0), i(G, null, ye(e.issues, (T, I) => (a(), i("div", {
              key: I,
              class: "issue-item"
            }, [
              s("div", sC, f(T.message), 1),
              T.details.length ? (a(), i("div", oC, [
                (a(!0), i(G, null, ye(x(I), (L, A) => (a(), i("div", {
                  key: A,
                  class: "issue-detail"
                }, f(L), 1))), 128)),
                T.details.length > 3 && !v[I] ? (a(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (L) => v[I] = !0
                }, " +" + f(T.details.length - 3) + " more ", 9, nC)) : h("", !0)
              ])) : h("", !0),
              s("div", aC, [
                T.type === "uncommitted_workflows" ? (a(), i(G, { key: 0 }, [
                  C(" Commit your workflow changes before " + f(m.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : T.type === "uncommitted_git_changes" ? (a(), i(G, { key: 1 }, [
                  C(" Commit your changes before " + f(m.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : T.type === "unresolved_issues" ? (a(), i(G, { key: 2 }, [
                  C(" Resolve all workflow issues before " + f(m.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : h("", !0)
              ])
            ]))), 128))
          ]),
          p.value ? (a(), i("div", lC, [
            w.value ? (a(), i("div", iC, [
              O[7] || (O[7] = s("div", { class: "warning-header" }, [
                s("span", { class: "warning-icon-badge" }, "!"),
                s("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              k(Hn, {
                modelValue: u.value,
                "onUpdate:modelValue": O[0] || (O[0] = (T) => u.value = T),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...O[6] || (O[6] = [
                  C(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : h("", !0),
            k(Co, {
              modelValue: r.value,
              "onUpdate:modelValue": O[1] || (O[1] = (T) => r.value = T),
              placeholder: "Describe your changes...",
              disabled: c.value || y.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: b,
              onCtrlEnter: b
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (a(), i("div", rC, f(d.value), 1)) : h("", !0)
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        p.value ? (a(), i(G, { key: 0 }, [
          k(Le, {
            variant: "secondary",
            onClick: O[2] || (O[2] = (T) => S.$emit("close"))
          }, {
            default: g(() => [...O[8] || (O[8] = [
              C(" Cancel ", -1)
            ])]),
            _: 1
          }),
          k(Le, {
            variant: u.value ? "danger" : "primary",
            disabled: !_.value,
            loading: c.value,
            onClick: b
          }, {
            default: g(() => [
              C(f(c.value ? "Committing..." : u.value ? `Force Commit & ${m.value}` : `Commit & ${m.value}`), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (a(), R(Le, {
          key: 1,
          variant: "primary",
          onClick: O[3] || (O[3] = (T) => S.$emit("close"))
        }, {
          default: g(() => [...O[9] || (O[9] = [
            C(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), uC = /* @__PURE__ */ Ce(cC, [["__scopeId", "data-v-a8990107"]]), dC = { class: "export-warnings" }, fC = {
  key: 0,
  class: "success-header"
}, mC = { class: "success-summary" }, vC = { class: "success-description" }, pC = { class: "warning-header" }, gC = { class: "warning-summary" }, hC = { class: "warning-title" }, yC = { class: "warning-description" }, wC = { class: "models-section" }, _C = { class: "models-list" }, kC = { class: "model-info" }, bC = { class: "model-filename" }, $C = { class: "model-workflows" }, CC = ["onClick"], xC = /* @__PURE__ */ $e({
  __name: "ExportWarningsModal",
  props: {
    models: {},
    mode: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = $(!1), r = $(null), c = N(() => o.mode || "export"), u = N(() => c.value === "publish" ? "Publish" : "Export"), d = N(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function v() {
      r.value = null, n("revalidate");
    }
    return (m, p) => (a(), i(G, null, [
      k(xt, {
        title: c.value === "publish" ? "Publish Warnings" : "Export Warnings",
        size: "md",
        onClose: p[3] || (p[3] = (w) => m.$emit("cancel"))
      }, {
        body: g(() => [
          s("div", dC, [
            e.models.length === 0 ? (a(), i("div", fC, [
              p[5] || (p[5] = s("span", { class: "success-icon" }, [
                s("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" })
                ])
              ], -1)),
              s("div", mC, [
                p[4] || (p[4] = s("h3", { class: "success-title" }, "All models have source URLs", -1)),
                s("p", vC, " Your environment is ready to " + f(c.value) + ". Recipients will be able to download all models automatically. ", 1)
              ])
            ])) : (a(), i(G, { key: 1 }, [
              s("div", pC, [
                p[6] || (p[6] = s("span", { class: "warning-icon" }, [
                  s("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    s("path", { d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z" }),
                    s("path", { d: "M8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" })
                  ])
                ], -1)),
                s("div", gC, [
                  s("h3", hC, f(e.models.length) + " model" + f(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  s("p", yC, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or ` + f(c.value) + " anyway. ", 1)
                ])
              ]),
              s("div", wC, [
                s("div", _C, [
                  (a(!0), i(G, null, ye(d.value, (w) => (a(), i("div", {
                    key: w.hash,
                    class: "model-item"
                  }, [
                    s("div", kC, [
                      s("div", bC, f(w.filename), 1),
                      s("div", $C, " Used by: " + f(w.workflows.join(", ")), 1)
                    ]),
                    s("button", {
                      class: "add-source-btn",
                      onClick: (y) => r.value = w.hash
                    }, " Add Source ", 8, CC)
                  ]))), 128))
                ]),
                e.models.length > 3 && !l.value ? (a(), i("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: p[0] || (p[0] = (w) => l.value = !0)
                }, " Show " + f(e.models.length - 3) + " more model" + f(e.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : h("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: g(() => [
          k(Le, {
            variant: "secondary",
            onClick: p[1] || (p[1] = (w) => m.$emit("cancel"))
          }, {
            default: g(() => [
              C(" Cancel " + f(c.value === "publish" ? "Publish" : "Export"), 1)
            ]),
            _: 1
          }),
          k(Le, {
            variant: "primary",
            onClick: p[2] || (p[2] = (w) => m.$emit("confirm"))
          }, {
            default: g(() => [
              C(f(e.models.length === 0 ? u.value : `${u.value} Anyway`), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["title"]),
      r.value ? (a(), R(bl, {
        key: 0,
        identifier: r.value,
        onClose: v
      }, null, 8, ["identifier"])) : h("", !0)
    ], 64));
  }
}), SC = /* @__PURE__ */ Ce(xC, [["__scopeId", "data-v-9b6d5fce"]]), IC = { class: "export-card" }, EC = { class: "export-path-row" }, TC = { class: "export-actions" }, MC = {
  key: 1,
  class: "export-warning"
}, PC = /* @__PURE__ */ $e({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  setup(e) {
    const t = e, { validateExport: o, exportEnvWithForce: n, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = vt(), c = $(""), u = $(!1), d = $(!1), v = $(!1), m = $(null), p = $(!1), w = $(null), y = $(!1), _ = $(!1), x = N(() => {
      var Y;
      return ((Y = t.environmentName) == null ? void 0 : Y.trim()) || null;
    }), b = N(() => x.value ? `EXPORT ENVIRONMENT: ${x.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), S = N(() => x.value ? `Environment '${x.value}' has been exported` : "Your environment has been exported"), O = N(() => u.value ? "Validating..." : d.value ? "Exporting..." : "Export Environment");
    async function T() {
      u.value = !0, m.value = null;
      try {
        const Y = x.value ? await l(x.value) : await o();
        w.value = Y, Y.can_export ? Y.warnings.models_without_sources.length > 0 ? _.value = !0 : await Q() : y.value = !0;
      } catch (Y) {
        m.value = {
          status: "error",
          message: Y instanceof Error ? Y.message : "Validation failed"
        };
      } finally {
        u.value = !1;
      }
    }
    async function I() {
      _.value = !1, await Q();
    }
    async function L() {
      y.value = !1, u.value = !0;
      try {
        const Y = x.value ? await l(x.value) : await o();
        w.value = Y, Y.can_export ? Y.warnings.models_without_sources.length > 0 ? _.value = !0 : await Q() : y.value = !0;
      } catch (Y) {
        m.value = {
          status: "error",
          message: Y instanceof Error ? Y.message : "Re-validation failed"
        };
      } finally {
        u.value = !1;
      }
    }
    async function A() {
      try {
        const Y = x.value ? await l(x.value) : await o();
        w.value = Y;
      } catch (Y) {
        console.error("Re-validation failed:", Y);
      }
    }
    async function Q() {
      d.value = !0;
      try {
        const Y = x.value ? await r(x.value, c.value || void 0) : await n(c.value || void 0);
        m.value = Y;
      } catch (Y) {
        m.value = {
          status: "error",
          message: Y instanceof Error ? Y.message : "Export failed"
        };
      } finally {
        d.value = !1;
      }
    }
    async function P() {
      var Y;
      if ((Y = m.value) != null && Y.path)
        try {
          await navigator.clipboard.writeText(m.value.path);
        } catch (ee) {
          console.error("Failed to copy path:", ee);
        }
    }
    async function B() {
      var Y;
      if ((Y = m.value) != null && Y.path) {
        v.value = !0;
        try {
          const ee = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(m.value.path)}`);
          if (!ee.ok)
            throw new Error(`Download failed: ${ee.statusText}`);
          const ce = await ee.blob(), he = URL.createObjectURL(ce), te = m.value.path.split("/").pop() || "environment-export.tar.gz", K = document.createElement("a");
          K.href = he, K.download = te, document.body.appendChild(K), K.click(), document.body.removeChild(K), URL.revokeObjectURL(he);
        } catch (ee) {
          console.error("Failed to download:", ee), alert(`Download failed: ${ee instanceof Error ? ee.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
      }
    }
    return (Y, ee) => (a(), i(G, null, [
      k(Ot, null, Yt({
        content: g(() => [
          k(Ct, { title: "EXPORT OPTIONS" }, {
            default: g(() => [
              s("div", IC, [
                ee[7] || (ee[7] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", EC, [
                  k(go, {
                    modelValue: c.value,
                    "onUpdate:modelValue": ee[1] || (ee[1] = (ce) => c.value = ce),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                s("div", TC, [
                  k(Ie, {
                    variant: "primary",
                    size: "md",
                    loading: u.value || d.value,
                    disabled: u.value || d.value,
                    onClick: T
                  }, {
                    default: g(() => [
                      ee[6] || (ee[6] = s("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        s("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        s("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      C(" " + f(O.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          m.value ? (a(), R(Ct, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: g(() => [
              k(Vt, {
                status: m.value.status === "success" ? "synced" : "broken"
              }, Yt({
                icon: g(() => [
                  C(f(m.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: g(() => [
                  C(f(m.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: g(() => [
                  C(f(m.value.status === "success" ? S.value : m.value.message), 1)
                ]),
                _: 2
              }, [
                m.value.status === "success" ? {
                  name: "details",
                  fn: g(() => [
                    k(_t, { label: "Saved to:" }, {
                      default: g(() => [
                        k(V$, {
                          path: m.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    m.value.models_without_sources !== void 0 ? (a(), R(_t, {
                      key: 0,
                      label: "Models without sources:",
                      value: m.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : h("", !0),
                    m.value.models_without_sources && m.value.models_without_sources > 0 ? (a(), i("div", MC, [...ee[8] || (ee[8] = [
                      s("span", { class: "warning-icon" }, "!", -1),
                      s("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : h("", !0)
                  ]),
                  key: "0"
                } : void 0,
                m.value.status === "success" ? {
                  name: "actions",
                  fn: g(() => [
                    k(Ie, {
                      variant: "primary",
                      size: "sm",
                      loading: v.value,
                      onClick: B
                    }, {
                      default: g(() => [...ee[9] || (ee[9] = [
                        s("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          s("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        C(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    k(Ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: P
                    }, {
                      default: g(() => [...ee[10] || (ee[10] = [
                        C(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    k(Ie, {
                      variant: "ghost",
                      size: "sm",
                      onClick: ee[2] || (ee[2] = (ce) => m.value = null)
                    }, {
                      default: g(() => [...ee[11] || (ee[11] = [
                        C(" Dismiss ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : h("", !0)
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: g(() => [
            k(At, {
              title: b.value,
              "show-info": !0,
              onInfoClick: ee[0] || (ee[0] = (ce) => p.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      k(is, {
        show: p.value,
        title: "What Gets Exported",
        onClose: ee[3] || (ee[3] = (ce) => p.value = !1)
      }, {
        content: g(() => [...ee[12] || (ee[12] = [
          s("div", { class: "export-info" }, [
            s("div", { class: "info-section" }, [
              s("strong", null, "Included in Export:"),
              s("ul", null, [
                s("li", null, [
                  s("strong", null, "Workflows"),
                  C(" — All workflows in this environment")
                ]),
                s("li", null, [
                  s("strong", null, "Custom Nodes"),
                  C(" — Node definitions and dependencies")
                ]),
                s("li", null, [
                  s("strong", null, "Models"),
                  C(" — References and source URLs (not the files)")
                ]),
                s("li", null, [
                  s("strong", null, "Configuration"),
                  C(" — Environment settings and metadata")
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
              C(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      y.value && w.value ? (a(), R(uC, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: ee[4] || (ee[4] = (ce) => y.value = !1),
        onCommitted: L
      }, null, 8, ["issues"])) : h("", !0),
      _.value && w.value ? (a(), R(SC, {
        key: 1,
        models: w.value.warnings.models_without_sources,
        onConfirm: I,
        onCancel: ee[5] || (ee[5] = (ce) => _.value = !1),
        onRevalidate: A
      }, null, 8, ["models"])) : h("", !0)
    ], 64));
  }
}), RC = /* @__PURE__ */ Ce(PC, [["__scopeId", "data-v-253214a4"]]), LC = { class: "file-input-wrapper" }, NC = ["accept", "multiple", "disabled"], DC = /* @__PURE__ */ $e({
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
  setup(e, { expose: t, emit: o }) {
    const n = o, l = $(null);
    function r() {
      var u;
      (u = l.value) == null || u.click();
    }
    function c(u) {
      const d = u.target;
      d.files && d.files.length > 0 && (n("change", d.files), d.value = "");
    }
    return t({
      triggerInput: r
    }), (u, d) => (a(), i("div", LC, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, NC),
      k(Ie, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: g(() => [
          ot(u.$slots, "default", {}, () => [
            d[0] || (d[0] = s("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              s("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              s("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            C(" " + f(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), OC = /* @__PURE__ */ Ce(DC, [["__scopeId", "data-v-cd192091"]]), AC = {
  key: 0,
  class: "drop-zone-empty"
}, UC = { class: "drop-zone-text" }, zC = { class: "drop-zone-primary" }, VC = { class: "drop-zone-secondary" }, FC = { class: "drop-zone-actions" }, BC = {
  key: 1,
  class: "drop-zone-file"
}, WC = { class: "file-info" }, GC = { class: "file-details" }, jC = { class: "file-name" }, HC = { class: "file-size" }, qC = /* @__PURE__ */ $e({
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
    const o = t, n = $(!1), l = $(null), r = $(0), c = N(() => l.value !== null), u = N(() => {
      var b;
      return ((b = l.value) == null ? void 0 : b.name) || "";
    }), d = N(() => {
      if (!l.value) return "";
      const b = l.value.size;
      return b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB` : b < 1024 * 1024 * 1024 ? `${(b / (1024 * 1024)).toFixed(1)} MB` : `${(b / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(b) {
      var S;
      b.stopPropagation(), r.value++, (S = b.dataTransfer) != null && S.types.includes("Files") && (n.value = !0);
    }
    function m(b) {
      b.stopPropagation(), b.dataTransfer && (b.dataTransfer.dropEffect = "copy");
    }
    function p(b) {
      b.stopPropagation(), r.value--, r.value === 0 && (n.value = !1);
    }
    function w(b) {
      var O;
      b.stopPropagation(), r.value = 0, n.value = !1;
      const S = (O = b.dataTransfer) == null ? void 0 : O.files;
      S && S.length > 0 && _(S[0]);
    }
    function y(b) {
      b.length > 0 && _(b[0]);
    }
    function _(b) {
      l.value = b, o("fileSelected", b);
    }
    function x() {
      l.value = null, o("clear");
    }
    return (b, S) => (a(), i("div", {
      class: Ue(["file-drop-zone", { "drop-active": n.value, "has-file": c.value }]),
      onDragenter: ft(v, ["prevent"]),
      onDragover: ft(m, ["prevent"]),
      onDragleave: ft(p, ["prevent"]),
      onDrop: ft(w, ["prevent"])
    }, [
      c.value ? (a(), i("div", BC, [
        s("div", WC, [
          S[1] || (S[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", GC, [
            s("div", jC, f(u.value), 1),
            s("div", HC, f(d.value), 1)
          ])
        ]),
        k(Ie, {
          variant: "ghost",
          size: "xs",
          onClick: x,
          title: "Remove file"
        }, {
          default: g(() => [...S[2] || (S[2] = [
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
      ])) : (a(), i("div", AC, [
        S[0] || (S[0] = s("div", { class: "drop-zone-icon" }, [
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
        s("div", UC, [
          s("p", zC, f(e.primaryText), 1),
          s("p", VC, f(e.secondaryText), 1)
        ]),
        s("div", FC, [
          k(OC, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: y
          }, {
            default: g(() => [
              C(f(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), KC = /* @__PURE__ */ Ce(qC, [["__scopeId", "data-v-0f79cb86"]]), JC = { class: "commit-hash" }, QC = /* @__PURE__ */ $e({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, o = N(() => t.hash.slice(0, t.length));
    return (n, l) => (a(), i("span", JC, f(o.value), 1));
  }
}), sc = /* @__PURE__ */ Ce(QC, [["__scopeId", "data-v-7c333cc6"]]), YC = { class: "import-preview" }, XC = { class: "preview-header" }, ZC = {
  key: 0,
  class: "source-env"
}, ex = { class: "preview-content" }, tx = { class: "preview-section" }, sx = { class: "section-header" }, ox = { class: "section-info" }, nx = { class: "section-count" }, ax = {
  key: 0,
  class: "item-list"
}, lx = { class: "item-name" }, ix = {
  key: 0,
  class: "item-more"
}, rx = { class: "preview-section" }, cx = { class: "section-header" }, ux = { class: "section-info" }, dx = { class: "section-count" }, fx = {
  key: 0,
  class: "item-list"
}, mx = { class: "item-details" }, vx = { class: "item-name" }, px = { class: "item-meta" }, gx = {
  key: 0,
  class: "item-more"
}, hx = { class: "preview-section" }, yx = { class: "section-header" }, wx = { class: "section-info" }, _x = { class: "section-count" }, kx = {
  key: 0,
  class: "item-list"
}, bx = { class: "item-name" }, $x = {
  key: 0,
  class: "item-more"
}, Cx = {
  key: 0,
  class: "preview-section"
}, xx = { class: "git-info" }, Sx = /* @__PURE__ */ $e({
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
    const t = e, o = N(() => t.workflows.length), n = N(() => t.models.length), l = N(() => t.nodes.length);
    function r(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (a(), i("div", YC, [
      s("div", XC, [
        k(ss, null, {
          default: g(() => [...u[0] || (u[0] = [
            C("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), i("span", ZC, [
          u[1] || (u[1] = C(" From: ", -1)),
          k(Xa, null, {
            default: g(() => [
              C(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : h("", !0)
      ]),
      s("div", ex, [
        s("div", tx, [
          s("div", sx, [
            u[3] || (u[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", ox, [
              u[2] || (u[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", nx, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), i("div", ax, [
            (a(!0), i(G, null, ye(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", lx, f(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), i("div", ix, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        s("div", rx, [
          s("div", cx, [
            u[6] || (u[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", ux, [
              u[5] || (u[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", dx, f(n.value) + " file" + f(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), i("div", fx, [
            (a(!0), i(G, null, ye(e.models.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", mx, [
                s("span", vx, f(d.filename), 1),
                s("span", px, f(r(d.size)) + " • " + f(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), i("div", gx, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        s("div", hx, [
          s("div", yx, [
            u[9] || (u[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", wx, [
              u[8] || (u[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", _x, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), i("div", kx, [
            (a(!0), i(G, null, ye(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", bx, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), i("div", $x, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), i("div", Cx, [
          u[11] || (u[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", xx, [
            e.gitBranch ? (a(), R(_t, {
              key: 0,
              label: "Branch"
            }, {
              default: g(() => [
                k(Xa, null, {
                  default: g(() => [
                    C(f(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : h("", !0),
            e.gitCommit ? (a(), R(_t, {
              key: 1,
              label: "Commit"
            }, {
              default: g(() => [
                k(sc, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : h("", !0)
          ])
        ])) : h("", !0)
      ])
    ]));
  }
}), Ix = /* @__PURE__ */ Ce(Sx, [["__scopeId", "data-v-182fe113"]]), Ex = { class: "import-config" }, Tx = { class: "config-container" }, Mx = { class: "config-field" }, Px = { class: "input-wrapper" }, Rx = ["value"], Lx = {
  key: 0,
  class: "validating-indicator"
}, Nx = {
  key: 1,
  class: "valid-indicator"
}, Dx = {
  key: 0,
  class: "field-error"
}, Ox = { class: "config-field" }, Ax = { class: "strategy-options" }, Ux = ["value", "checked", "onChange"], zx = { class: "strategy-content" }, Vx = { class: "strategy-label" }, Fx = { class: "strategy-description" }, Bx = { class: "config-field switch-field" }, Wx = { class: "switch-label" }, Gx = ["checked"], jx = { class: "advanced-section" }, Hx = { class: "advanced-content" }, qx = { class: "config-field" }, Kx = ["value"], Jx = ["value"], Qx = /* @__PURE__ */ $e({
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
    const o = e, n = t, l = $(!1), r = $(!1);
    kt(() => o.nameError, (m) => {
      l.value = !1, r.value = !m && o.name.length > 0;
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
    function d(m) {
      const p = m.target.value;
      n("update:name", p), r.value = !1, u && clearTimeout(u), p.length > 0 ? (l.value = !0, u = setTimeout(() => {
        n("validate-name", p);
      }, 400)) : l.value = !1;
    }
    function v() {
      o.name.length > 0 && n("validate-name", o.name);
    }
    return (m, p) => (a(), i("div", Ex, [
      k(ss, null, {
        default: g(() => [...p[2] || (p[2] = [
          C("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", Tx, [
        s("div", Mx, [
          k(Pn, { required: "" }, {
            default: g(() => [...p[3] || (p[3] = [
              C("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", Px, [
            s("input", {
              type: "text",
              class: Ue(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, Rx),
            l.value ? (a(), i("span", Lx, "...")) : r.value ? (a(), i("span", Nx, "✓")) : h("", !0)
          ]),
          e.nameError ? (a(), i("div", Dx, f(e.nameError), 1)) : h("", !0),
          p[4] || (p[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", Ox, [
          k(Pn, null, {
            default: g(() => [...p[5] || (p[5] = [
              C("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", Ax, [
            (a(), i(G, null, ye(c, (w) => s("label", {
              key: w.value,
              class: Ue(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              s("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (y) => n("update:modelStrategy", w.value)
              }, null, 40, Ux),
              s("div", zx, [
                s("span", Vx, f(w.label), 1),
                s("span", Fx, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", Bx, [
          s("label", Wx, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, Gx),
            p[6] || (p[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", jx, [
          p[8] || (p[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", Hx, [
            s("div", qx, [
              k(Pn, null, {
                default: g(() => [...p[7] || (p[7] = [
                  C("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              s("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: p[1] || (p[1] = (w) => n("update:torchBackend", w.target.value))
              }, [
                (a(!0), i(G, null, ye(st(Cl), (w) => (a(), i("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, Jx))), 128))
              ], 40, Kx)
            ])
          ])
        ])
      ])
    ]));
  }
}), Yx = /* @__PURE__ */ Ce(Qx, [["__scopeId", "data-v-89ea06a1"]]), Xx = { class: "import-flow" }, Zx = {
  key: 0,
  class: "import-empty"
}, e3 = { class: "git-import-section" }, t3 = { class: "git-url-input-row" }, s3 = ["disabled"], o3 = {
  key: 0,
  class: "git-error"
}, n3 = {
  key: 1,
  class: "import-configure"
}, a3 = { class: "selected-file-bar" }, l3 = {
  key: 0,
  class: "file-bar-content"
}, i3 = { class: "file-bar-info" }, r3 = { class: "file-bar-name" }, c3 = { class: "file-bar-size" }, u3 = {
  key: 1,
  class: "file-bar-content"
}, d3 = { class: "file-bar-info" }, f3 = { class: "file-bar-name" }, m3 = {
  key: 0,
  class: "preview-loading"
}, v3 = { class: "import-actions" }, p3 = {
  key: 2,
  class: "import-progress"
}, g3 = { class: "creating-intro" }, h3 = {
  key: 0,
  class: "progress-warning"
}, y3 = {
  key: 1,
  class: "import-error"
}, w3 = { class: "error-message" }, _3 = {
  key: 3,
  class: "import-complete"
}, k3 = { class: "complete-message" }, b3 = { class: "complete-title" }, $3 = { class: "complete-details" }, C3 = { class: "complete-actions" }, x3 = /* @__PURE__ */ $e({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: t, emit: o }) {
    var Se, H, X, E;
    const n = e, l = o, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: v, getImportProgress: m } = vt();
    let p = null;
    const w = $(null), y = $(n.resumeImport ?? !1), _ = $(!1), x = $(!1), b = $(""), S = $(!1), O = $(null), T = $(""), I = $(null), L = $(!1), A = $(null), Q = $(null), P = $({
      name: ((Se = n.initialProgress) == null ? void 0 : Se.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), B = $(null), Y = $({
      message: ((H = n.initialProgress) == null ? void 0 : H.message) ?? "Preparing import...",
      phase: ((X = n.initialProgress) == null ? void 0 : X.phase) ?? "",
      progress: ((E = n.initialProgress) == null ? void 0 : E.progress) ?? 0,
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
    ], ce = N(() => {
      if (!Q.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const M = Q.value;
      return {
        sourceEnvironment: M.comfyui_version ? `ComfyUI ${M.comfyui_version}` : "Unknown",
        workflows: M.workflows.map((ne) => ne.name),
        models: M.models.map((ne) => ({
          filename: ne.filename,
          size: 0,
          type: ne.relative_path.split("/")[0] || "model"
        })),
        nodes: M.nodes.map((ne) => ne.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), he = N(() => !S.value && !O.value && Q.value && P.value.name.length > 0 && !B.value && (w.value || I.value));
    async function te(M) {
      w.value = M, S.value = !0, O.value = null, Q.value = null;
      try {
        const ne = await r(M);
        Q.value = ne;
      } catch (ne) {
        O.value = ne instanceof Error ? ne.message : "Failed to analyze file", console.error("Preview error:", ne);
      } finally {
        S.value = !1;
      }
    }
    function K() {
      w.value = null, I.value = null, T.value = "", A.value = null, _.value = !1, x.value = !1, b.value = "", Q.value = null, O.value = null, P.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, B.value = null, l("source-cleared");
    }
    function ie() {
      Re(), K(), y.value = !1, S.value = !1, L.value = !1, Y.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function De() {
      if (T.value.trim()) {
        L.value = !0, A.value = null;
        try {
          const M = await c(T.value.trim());
          I.value = T.value.trim(), Q.value = M;
        } catch (M) {
          A.value = M instanceof Error ? M.message : "Failed to analyze repository";
        } finally {
          L.value = !1;
        }
      }
    }
    function oe(M) {
      try {
        const ne = new URL(M);
        return ne.host + ne.pathname.replace(/\.git$/, "");
      } catch {
        return M;
      }
    }
    async function ge(M) {
      if (!M) {
        B.value = "Environment name is required";
        return;
      }
      try {
        const ne = await u(M);
        B.value = ne.valid ? null : ne.error || "Invalid name";
      } catch {
        B.value = "Failed to validate name";
      }
    }
    async function U() {
      if (P.value.name && !(!w.value && !I.value)) {
        y.value = !0, _.value = !1, Y.value = { message: `Creating environment '${P.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let M;
          if (w.value)
            M = await d(
              w.value,
              P.value.name,
              P.value.modelStrategy,
              P.value.torchBackend
            );
          else if (I.value)
            M = await v(
              I.value,
              P.value.name,
              P.value.modelStrategy,
              P.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          M.status === "started" ? me() : (x.value = !1, b.value = M.message, y.value = !1, _.value = !0);
        } catch (M) {
          x.value = !1, b.value = M instanceof Error ? M.message : "Unknown error occurred during import", y.value = !1, _.value = !0;
        }
      }
    }
    async function me() {
      if (p) return;
      const M = async () => {
        try {
          const Ve = await m();
          return Y.value = {
            message: Ve.message,
            phase: Ve.phase || "",
            progress: Ve.progress ?? (Ve.state === "importing" ? 50 : 0),
            error: Ve.error || null
          }, Ve.state === "complete" ? (Re(), x.value = !0, b.value = `Environment '${Ve.environment_name}' created successfully`, y.value = !1, _.value = !0, Ve.environment_name && l("import-complete", Ve.environment_name, P.value.switchAfterImport), !1) : Ve.state === "error" ? (Re(), x.value = !1, b.value = Ve.error || Ve.message, y.value = !1, _.value = !0, !1) : !0;
        } catch (Ve) {
          return console.error("Failed to poll import progress:", Ve), !0;
        }
      };
      await M() && (p = setInterval(async () => {
        await M() || Re();
      }, 2e3));
    }
    function Re() {
      p && (clearInterval(p), p = null);
    }
    function Be(M) {
      return M < 1024 ? `${M} B` : M < 1024 * 1024 ? `${(M / 1024).toFixed(1)} KB` : M < 1024 * 1024 * 1024 ? `${(M / (1024 * 1024)).toFixed(1)} MB` : `${(M / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return rt(async () => {
      try {
        const M = await m();
        console.log("[ComfyGit ImportFlow] Import progress check:", M.state, M), M.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", M.environment_name), y.value = !0, P.value.name = M.environment_name || P.value.name || "", Y.value = {
          progress: M.progress ?? 0,
          message: M.message || "Importing...",
          phase: M.phase || "",
          error: null
        }, me());
      } catch (M) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", M);
      }
    }), t({
      handleReset: ie,
      isImporting: y,
      canImport: he
    }), (M, ne) => {
      var Ve;
      return a(), i("div", Xx, [
        !w.value && !I.value && !y.value ? (a(), i("div", Zx, [
          k(KC, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: te
          }),
          ne[7] || (ne[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", e3, [
            ne[5] || (ne[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", t3, [
              Tt(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ne[0] || (ne[0] = (Ye) => T.value = Ye),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: ds(De, ["enter"]),
                disabled: L.value
              }, null, 40, s3), [
                [bo, T.value]
              ]),
              k(Ie, {
                variant: "primary",
                size: "sm",
                disabled: !T.value.trim() || L.value,
                onClick: De
              }, {
                default: g(() => [
                  C(f(L.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            A.value ? (a(), i("div", o3, f(A.value), 1)) : h("", !0),
            ne[6] || (ne[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || I.value) && !y.value && !_.value ? (a(), i("div", n3, [
          s("div", a3, [
            w.value ? (a(), i("div", l3, [
              ne[8] || (ne[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", i3, [
                s("div", r3, f(w.value.name), 1),
                s("div", c3, f(Be(w.value.size)), 1)
              ])
            ])) : I.value ? (a(), i("div", u3, [
              ne[10] || (ne[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", d3, [
                s("div", f3, f(oe(I.value)), 1),
                ne[9] || (ne[9] = s("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : h("", !0),
            k(Ie, {
              variant: "ghost",
              size: "sm",
              onClick: K
            }, {
              default: g(() => [...ne[11] || (ne[11] = [
                C(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          S.value ? (a(), i("div", m3, [...ne[12] || (ne[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : O.value ? (a(), R(cs, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [O.value]
          }, null, 8, ["details"])) : Q.value ? (a(), R(Ix, {
            key: 2,
            "source-environment": ce.value.sourceEnvironment,
            workflows: ce.value.workflows,
            models: ce.value.models,
            nodes: ce.value.nodes,
            "git-branch": ce.value.gitBranch,
            "git-commit": ce.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : h("", !0),
          Q.value ? (a(), R(Yx, {
            key: 3,
            name: P.value.name,
            "onUpdate:name": ne[1] || (ne[1] = (Ye) => P.value.name = Ye),
            "model-strategy": P.value.modelStrategy,
            "onUpdate:modelStrategy": ne[2] || (ne[2] = (Ye) => P.value.modelStrategy = Ye),
            "torch-backend": P.value.torchBackend,
            "onUpdate:torchBackend": ne[3] || (ne[3] = (Ye) => P.value.torchBackend = Ye),
            "switch-after-import": P.value.switchAfterImport,
            "onUpdate:switchAfterImport": ne[4] || (ne[4] = (Ye) => P.value.switchAfterImport = Ye),
            "name-error": B.value,
            onValidateName: ge
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : h("", !0),
          P.value.modelStrategy === "skip" && ((Ve = Q.value) != null && Ve.models_needing_download) ? (a(), R(cs, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${Q.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : h("", !0),
          s("div", v3, [
            k(Ie, {
              variant: "secondary",
              size: "md",
              onClick: K
            }, {
              default: g(() => [...ne[13] || (ne[13] = [
                C(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(Ie, {
              variant: "primary",
              size: "md",
              disabled: !he.value,
              onClick: U
            }, {
              default: g(() => [...ne[14] || (ne[14] = [
                C(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : y.value ? (a(), i("div", p3, [
          s("p", g3, [
            ne[15] || (ne[15] = C(" Importing environment ", -1)),
            s("strong", null, f(P.value.name), 1),
            ne[16] || (ne[16] = C("... ", -1))
          ]),
          k(jn, {
            progress: Y.value.progress,
            message: Y.value.message,
            "current-phase": Y.value.phase,
            variant: Y.value.error ? "error" : "default",
            "show-steps": !0,
            steps: ee
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          Y.value.error ? h("", !0) : (a(), i("p", h3, " This may take several minutes. Please wait... ")),
          Y.value.error ? (a(), i("div", y3, [
            s("p", w3, f(Y.value.error), 1)
          ])) : h("", !0)
        ])) : _.value ? (a(), i("div", _3, [
          s("div", {
            class: Ue(["complete-icon", x.value ? "success" : "error"])
          }, f(x.value ? "✓" : "✕"), 3),
          s("div", k3, [
            s("div", b3, f(x.value ? "Import Successful" : "Import Failed"), 1),
            s("div", $3, f(b.value), 1)
          ]),
          s("div", C3, [
            k(Ie, {
              variant: "primary",
              size: "md",
              onClick: ie
            }, {
              default: g(() => [...ne[17] || (ne[17] = [
                C(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : h("", !0)
      ]);
    };
  }
}), oc = /* @__PURE__ */ Ce(x3, [["__scopeId", "data-v-72cbc04e"]]), S3 = /* @__PURE__ */ $e({
  __name: "ImportSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["import-complete-switch"],
  setup(e, { emit: t }) {
    const o = t, n = $(!1);
    function l(r, c) {
      c && o("import-complete-switch", r);
    }
    return (r, c) => (a(), i(G, null, [
      k(Ot, null, Yt({
        content: g(() => [
          k(oc, { onImportComplete: l })
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: g(() => [
            k(At, {
              title: "IMPORT ENVIRONMENT",
              "show-info": !0,
              onInfoClick: c[0] || (c[0] = (u) => n.value = !0)
            })
          ]),
          key: "0"
        }
      ]), 1024),
      k(is, {
        show: n.value,
        title: "How Import Works",
        onClose: c[1] || (c[1] = (u) => n.value = !1)
      }, {
        content: g(() => [...c[2] || (c[2] = [
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
}), I3 = /* @__PURE__ */ Ce(S3, [["__scopeId", "data-v-41b1f298"]]), E3 = { class: "base-tabs" }, T3 = ["disabled", "onClick"], M3 = {
  key: 0,
  class: "base-tabs__badge"
}, P3 = /* @__PURE__ */ $e({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    function l(r) {
      var c;
      (c = o.tabs.find((u) => u.id === r)) != null && c.disabled || n("update:modelValue", r);
    }
    return (r, c) => (a(), i("div", E3, [
      (a(!0), i(G, null, ye(e.tabs, (u) => (a(), i("button", {
        key: u.id,
        class: Ue([
          "base-tabs__tab",
          {
            active: e.modelValue === u.id,
            disabled: u.disabled
          }
        ]),
        disabled: u.disabled,
        onClick: (d) => l(u.id)
      }, [
        C(f(u.label) + " ", 1),
        u.badge ? (a(), i("span", M3, f(u.badge), 1)) : h("", !0)
      ], 10, T3))), 128))
    ]));
  }
}), xl = /* @__PURE__ */ Ce(P3, [["__scopeId", "data-v-ad5e6cad"]]), R3 = { class: "commit-list" }, L3 = /* @__PURE__ */ $e({
  __name: "CommitList",
  setup(e) {
    return (t, o) => (a(), i("div", R3, [
      ot(t.$slots, "default", {}, void 0)
    ]));
  }
}), nc = /* @__PURE__ */ Ce(L3, [["__scopeId", "data-v-8c5ee761"]]), N3 = { class: "commit-message" }, D3 = { class: "commit-date" }, O3 = /* @__PURE__ */ $e({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    function l() {
      o.clickable && n("click");
    }
    return (r, c) => (a(), i("div", {
      class: Ue(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      k(sc, { hash: e.hash }, null, 8, ["hash"]),
      s("span", N3, f(e.message), 1),
      s("span", D3, f(e.relativeDate), 1),
      r.$slots.actions ? (a(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = ft(() => {
        }, ["stop"]))
      }, [
        ot(r.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), ac = /* @__PURE__ */ Ce(O3, [["__scopeId", "data-v-dd7c621b"]]), A3 = /* @__PURE__ */ $e({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const t = e, o = N(() => `HISTORY (${t.currentRef || "detached"})`);
    return (n, l) => (a(), R(Ot, null, Yt({
      content: g(() => [
        e.commits.length === 0 ? (a(), R(ls, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), R(nc, { key: 1 }, {
          default: g(() => [
            (a(!0), i(G, null, ye(e.commits, (r) => (a(), R(ac, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => n.$emit("select", r)
            }, {
              actions: g(() => [
                k(Ie, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (c) => n.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: g(() => [...l[0] || (l[0] = [
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
        fn: g(() => [
          k(At, { title: o.value }, null, 8, ["title"])
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), U3 = /* @__PURE__ */ Ce(A3, [["__scopeId", "data-v-fa4bf3a1"]]), z3 = { class: "branch-create-form" }, V3 = { class: "form-actions" }, F3 = /* @__PURE__ */ $e({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: t }) {
    const o = t, n = $(""), l = N(() => {
      const u = n.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function r() {
      l.value && (o("create", n.value.trim()), n.value = "");
    }
    function c() {
      n.value = "", o("cancel");
    }
    return (u, d) => (a(), i("div", z3, [
      k(go, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => n.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      s("div", V3, [
        k(Ie, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: r
        }, {
          default: g(() => [...d[1] || (d[1] = [
            C(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        k(Ie, {
          variant: "secondary",
          size: "sm",
          onClick: c
        }, {
          default: g(() => [...d[2] || (d[2] = [
            C(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), B3 = /* @__PURE__ */ Ce(F3, [["__scopeId", "data-v-7c500394"]]), W3 = { class: "branch-list-item__indicator" }, G3 = { class: "branch-list-item__name" }, j3 = {
  key: 0,
  class: "branch-list-item__actions"
}, H3 = {
  key: 0,
  class: "branch-list-item__current-label"
}, q3 = /* @__PURE__ */ $e({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (a(), i("div", {
      class: Ue(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && t.$emit("click"))
    }, [
      s("span", W3, f(e.isCurrent ? "●" : "○"), 1),
      s("span", G3, f(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (a(), i("div", j3, [
        ot(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), i("span", H3, " current ")) : h("", !0)
      ])) : h("", !0)
    ], 2));
  }
}), K3 = /* @__PURE__ */ Ce(q3, [["__scopeId", "data-v-c6581a24"]]), J3 = { class: "header-info" }, Q3 = { class: "branch-name" }, Y3 = {
  key: 0,
  class: "current-badge"
}, X3 = { class: "branch-meta" }, Z3 = { key: 0 }, e5 = {
  key: 0,
  class: "meta-note"
}, t5 = {
  key: 0,
  class: "loading"
}, s5 = {
  key: 1,
  class: "empty-state"
}, o5 = /* @__PURE__ */ $e({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const t = e, { getBranchHistory: o } = vt(), n = $([]), l = $(!1), r = $(!0);
    return rt(async () => {
      try {
        const c = await o(t.branchName, 50);
        n.value = c.commits, l.value = c.has_more;
      } finally {
        r.value = !1;
      }
    }), (c, u) => (a(), R(xt, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (d) => c.$emit("close"))
    }, {
      header: g(() => [
        s("div", J3, [
          u[4] || (u[4] = s("h3", { class: "header-title" }, "BRANCH", -1)),
          s("span", Q3, f(e.branchName), 1),
          e.isCurrent ? (a(), i("span", Y3, "CURRENT")) : h("", !0)
        ]),
        k(Le, {
          variant: "ghost",
          size: "sm",
          onClick: u[0] || (u[0] = (d) => c.$emit("close"))
        }, {
          default: g(() => [...u[5] || (u[5] = [
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
      body: g(() => [
        s("div", X3, [
          r.value ? (a(), i("span", Z3, "Loading...")) : (a(), i(G, { key: 1 }, [
            s("span", null, f(n.value.length) + " commits", 1),
            l.value ? (a(), i("span", e5, "(showing first " + f(n.value.length) + ")", 1)) : h("", !0)
          ], 64))
        ]),
        r.value ? (a(), i("div", t5, "Loading commit history...")) : n.value.length === 0 ? (a(), i("div", s5, " No commits found on this branch ")) : (a(), R(nc, {
          key: 2,
          class: "branch-commits"
        }, {
          default: g(() => [
            (a(!0), i(G, null, ye(n.value, (d) => (a(), R(ac, {
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
      footer: g(() => [
        e.isCurrent ? h("", !0) : (a(), R(Ie, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: u[1] || (u[1] = (d) => c.$emit("delete", e.branchName))
        }, {
          default: g(() => [...u[6] || (u[6] = [
            C(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        u[8] || (u[8] = s("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? h("", !0) : (a(), R(Le, {
          key: 1,
          variant: "primary",
          onClick: u[2] || (u[2] = (d) => c.$emit("switch", e.branchName))
        }, {
          default: g(() => [...u[7] || (u[7] = [
            C(" Switch to Branch ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
}), n5 = /* @__PURE__ */ Ce(o5, [["__scopeId", "data-v-2e5437cc"]]), a5 = {
  key: 2,
  class: "branch-list"
}, l5 = /* @__PURE__ */ $e({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {},
    embedded: { type: Boolean }
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: t }) {
    const o = t, n = $(!1), l = $(null);
    function r(m) {
      o("create", m), c();
    }
    function c() {
      n.value = !1;
    }
    function u(m) {
      l.value = m;
    }
    function d(m) {
      l.value = null, o("delete", m);
    }
    function v(m) {
      l.value = null, o("switch", m);
    }
    return (m, p) => (a(), R(Ot, null, Yt({
      content: g(() => [
        n.value ? (a(), R(B3, {
          key: 0,
          onCreate: r,
          onCancel: c
        })) : h("", !0),
        e.branches.length === 0 ? (a(), R(ls, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), i("div", a5, [
          (a(!0), i(G, null, ye(e.branches, (w) => (a(), R(K3, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (y) => u(w)
          }, {
            actions: g(() => [
              w.is_current ? h("", !0) : (a(), R(Ie, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: ft((y) => o("switch", w.name), ["stop"])
              }, {
                default: g(() => [...p[3] || (p[3] = [
                  C(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current", "onClick"]))), 128))
        ])),
        l.value ? (a(), R(n5, {
          key: 3,
          "branch-name": l.value.name,
          "is-current": l.value.is_current,
          onClose: p[1] || (p[1] = (w) => l.value = null),
          onDelete: d,
          onSwitch: v
        }, null, 8, ["branch-name", "is-current"])) : h("", !0)
      ]),
      _: 2
    }, [
      e.embedded ? void 0 : {
        name: "header",
        fn: g(() => [
          k(At, { title: "BRANCHES" }, {
            actions: g(() => [
              n.value ? h("", !0) : (a(), R(Ie, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: p[0] || (p[0] = (w) => n.value = !0)
              }, {
                default: g(() => [...p[2] || (p[2] = [
                  C(" + Create Branch ", -1)
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
}), i5 = /* @__PURE__ */ Ce(l5, [["__scopeId", "data-v-a3de96cc"]]);
function lc(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const r5 = { class: "remote-url-display" }, c5 = ["title"], u5 = ["title"], d5 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, f5 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, m5 = /* @__PURE__ */ $e({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const t = e, o = $(!1), n = N(() => {
      if (t.url.length <= t.maxLength)
        return t.url;
      const r = t.url.slice(0, Math.floor(t.maxLength * 0.6)), c = t.url.slice(-Math.floor(t.maxLength * 0.3));
      return `${r}...${c}`;
    });
    async function l() {
      try {
        await navigator.clipboard.writeText(t.url), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (r) {
        console.error("Failed to copy URL:", r);
      }
    }
    return (r, c) => (a(), i("div", r5, [
      s("span", {
        class: "url-text",
        title: e.url
      }, f(n.value), 9, c5),
      s("button", {
        class: Ue(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), i("svg", f5, [...c[1] || (c[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), i("svg", d5, [...c[0] || (c[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, u5)
    ]));
  }
}), v5 = /* @__PURE__ */ Ce(m5, [["__scopeId", "data-v-7768a58d"]]), p5 = { class: "remote-title" }, g5 = {
  key: 0,
  class: "default-badge"
}, h5 = {
  key: 1,
  class: "sync-badge"
}, y5 = {
  key: 0,
  class: "ahead"
}, w5 = {
  key: 1,
  class: "behind"
}, _5 = {
  key: 1,
  class: "synced"
}, k5 = ["href"], b5 = {
  key: 1,
  class: "remote-url-text"
}, $5 = /* @__PURE__ */ $e({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const t = e, o = N(() => t.fetchingRemote === t.remote.name), n = N(() => t.remote.is_default), l = N(() => t.syncStatus && t.syncStatus.behind > 0), r = N(() => t.syncStatus && t.syncStatus.ahead > 0), c = N(() => t.remote.push_url !== t.remote.fetch_url), u = N(() => {
      const v = t.remote.fetch_url, m = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return m ? `https://${m[1]}/${m[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), d = N(() => t.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, m) => (a(), R(Vt, {
      status: n.value ? "synced" : void 0
    }, Yt({
      icon: g(() => [
        C(f(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: g(() => [
        s("div", p5, [
          s("span", null, f(e.remote.name), 1),
          n.value ? (a(), i("span", g5, "DEFAULT")) : h("", !0),
          e.syncStatus ? (a(), i("span", h5, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), i(G, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), i("span", y5, "↑" + f(e.syncStatus.ahead), 1)) : h("", !0),
              e.syncStatus.behind > 0 ? (a(), i("span", w5, "↓" + f(e.syncStatus.behind), 1)) : h("", !0)
            ], 64)) : (a(), i("span", _5, "✓ synced"))
          ])) : h("", !0)
        ])
      ]),
      subtitle: g(() => [
        u.value ? (a(), i("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: m[0] || (m[0] = ft(() => {
          }, ["stop"]))
        }, f(d.value), 9, k5)) : (a(), i("span", b5, f(d.value), 1))
      ]),
      actions: g(() => [
        k(Ie, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: m[1] || (m[1] = (p) => v.$emit("fetch", e.remote.name))
        }, {
          default: g(() => [...m[6] || (m[6] = [
            C(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        k(Ie, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: m[2] || (m[2] = (p) => v.$emit("pull", e.remote.name))
        }, {
          default: g(() => [
            C(" Pull" + f(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(Ie, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: m[3] || (m[3] = (p) => v.$emit("push", e.remote.name))
        }, {
          default: g(() => [
            C(" Push" + f(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(Ie, {
          variant: "secondary",
          size: "xs",
          onClick: m[4] || (m[4] = (p) => v.$emit("edit", e.remote.name))
        }, {
          default: g(() => [...m[7] || (m[7] = [
            C(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? h("", !0) : (a(), R(Ie, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: m[5] || (m[5] = (p) => v.$emit("remove", e.remote.name))
        }, {
          default: g(() => [...m[8] || (m[8] = [
            C(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      c.value ? {
        name: "details",
        fn: g(() => [
          e.remote.push_url !== e.remote.fetch_url ? (a(), R(_t, {
            key: 0,
            label: "Push URL:"
          }, {
            default: g(() => [
              k(v5, {
                url: e.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : h("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), C5 = /* @__PURE__ */ Ce($5, [["__scopeId", "data-v-8310f3a8"]]), x5 = ["for"], S5 = {
  key: 0,
  class: "base-form-field-required"
}, I5 = { class: "base-form-field-input" }, E5 = {
  key: 1,
  class: "base-form-field-error"
}, T5 = {
  key: 2,
  class: "base-form-field-hint"
}, M5 = /* @__PURE__ */ $e({
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
    const t = e, o = N(() => t.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (n, l) => (a(), i("div", {
      class: Ue(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        C(f(e.label) + " ", 1),
        e.required ? (a(), i("span", S5, "*")) : h("", !0)
      ], 8, x5)) : h("", !0),
      s("div", I5, [
        ot(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), i("span", E5, f(e.error), 1)) : e.hint ? (a(), i("span", T5, f(e.hint), 1)) : h("", !0)
    ], 2));
  }
}), Lt = /* @__PURE__ */ Ce(M5, [["__scopeId", "data-v-9a1cf296"]]), P5 = { class: "remote-form" }, R5 = { class: "form-header" }, L5 = { class: "form-body" }, N5 = {
  key: 0,
  class: "form-error"
}, D5 = { class: "form-actions" }, O5 = /* @__PURE__ */ $e({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = $({
      name: o.remoteName,
      fetchUrl: o.fetchUrl,
      pushUrl: o.pushUrl
    }), r = $(!1), c = $(null);
    kt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = N(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!u.value || r.value)) {
        c.value = null, r.value = !0;
        try {
          n("submit", l.value);
        } catch (v) {
          c.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          r.value = !1;
        }
      }
    }
    return (v, m) => (a(), i("div", P5, [
      s("div", R5, [
        k(ss, null, {
          default: g(() => [
            C(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", L5, [
        k(Lt, {
          label: "Remote Name",
          required: ""
        }, {
          default: g(() => [
            k(wt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": m[0] || (m[0] = (p) => l.value.name = p),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        k(Lt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: g(() => [
            k(wt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": m[1] || (m[1] = (p) => l.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        k(Lt, { label: "Push URL (optional)" }, {
          default: g(() => [
            k(wt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": m[2] || (m[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (a(), i("div", N5, f(c.value), 1)) : h("", !0)
      ]),
      s("div", D5, [
        k(Ie, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: r.value,
          onClick: d
        }, {
          default: g(() => [
            C(f(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        k(Ie, {
          variant: "ghost",
          size: "md",
          onClick: m[3] || (m[3] = (p) => v.$emit("cancel"))
        }, {
          default: g(() => [...m[4] || (m[4] = [
            C(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), A5 = /* @__PURE__ */ Ce(O5, [["__scopeId", "data-v-56021b18"]]), U5 = { class: "conflict-summary-box" }, z5 = { class: "summary-header" }, V5 = { class: "summary-text" }, F5 = { key: 0 }, B5 = {
  key: 1,
  class: "all-resolved"
}, W5 = { class: "summary-progress" }, G5 = { class: "progress-bar" }, j5 = { class: "progress-text" }, H5 = /* @__PURE__ */ $e({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const t = e, o = N(
      () => t.conflictCount > 0 ? t.resolvedCount / t.conflictCount * 100 : 0
    );
    return (n, l) => (a(), i("div", U5, [
      s("div", z5, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", V5, [
          s("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), i("p", F5, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (a(), i("p", B5, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      s("div", W5, [
        s("div", G5, [
          s("div", {
            class: "progress-fill",
            style: Wt({ width: o.value + "%" })
          }, null, 4)
        ]),
        s("span", j5, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), q5 = /* @__PURE__ */ Ce(H5, [["__scopeId", "data-v-4e9e6cc9"]]), K5 = { class: "modal-header" }, J5 = { class: "modal-title" }, Q5 = { class: "modal-body" }, Y5 = {
  key: 0,
  class: "error-box"
}, X5 = {
  key: 0,
  class: "error-hint"
}, Z5 = {
  key: 1,
  class: "loading-state"
}, e8 = { class: "commit-summary" }, t8 = {
  key: 0,
  class: "commits-section"
}, s8 = { class: "commit-list" }, o8 = { class: "commit-hash" }, n8 = { class: "commit-message" }, a8 = { class: "commit-date" }, l8 = {
  key: 1,
  class: "changes-section"
}, i8 = {
  key: 0,
  class: "change-group",
  open: ""
}, r8 = { class: "change-count" }, c8 = { class: "change-list" }, u8 = {
  key: 0,
  class: "conflict-badge"
}, d8 = {
  key: 1,
  class: "change-group"
}, f8 = { class: "change-count" }, m8 = { class: "change-list" }, v8 = {
  key: 2,
  class: "change-group"
}, p8 = { class: "change-count" }, g8 = { class: "change-list" }, h8 = {
  key: 3,
  class: "strategy-section"
}, y8 = { class: "radio-group" }, w8 = { class: "radio-option" }, _8 = { class: "radio-option" }, k8 = { class: "radio-option" }, b8 = {
  key: 4,
  class: "up-to-date"
}, $8 = { class: "modal-actions" }, wi = "comfygit.pullModelStrategy", C8 = /* @__PURE__ */ $e({
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
    const o = e, n = t, l = $(localStorage.getItem(wi) || "skip");
    kt(l, (b) => {
      localStorage.setItem(wi, b);
    });
    const r = N(() => {
      var b;
      return ((b = o.error) == null ? void 0 : b.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = N(() => {
      if (!o.preview) return 0;
      const b = o.preview.changes.workflows;
      return b.added.length + b.modified.length + b.deleted.length;
    }), u = N(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = N(() => {
      var b;
      return c.value > 0 || u.value > 0 || (((b = o.preview) == null ? void 0 : b.changes.models.count) || 0) > 0;
    }), v = N(() => o.preview && lc(o.preview) ? o.preview : null), m = N(() => {
      var b;
      return ((b = v.value) == null ? void 0 : b.workflow_conflicts.length) ?? 0;
    }), p = N(() => {
      var b;
      return ((b = o.conflictResolutions) == null ? void 0 : b.size) ?? 0;
    }), w = N(
      () => m.value > 0 && p.value === m.value
    ), y = N(() => !(!o.preview || o.preview.has_uncommitted_changes || v.value && !w.value));
    function _(b) {
      if (!v.value) return !1;
      const S = b.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((O) => O.name === S);
    }
    function x(b) {
      const S = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: b, resolutions: S });
    }
    return (b, S) => {
      var O, T;
      return a(), R(Dt, { to: "body" }, [
        e.show ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[11] || (S[11] = (I) => b.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: S[10] || (S[10] = ft(() => {
            }, ["stop"]))
          }, [
            s("div", K5, [
              s("h3", J5, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: S[0] || (S[0] = (I) => b.$emit("close"))
              }, "✕")
            ]),
            s("div", Q5, [
              e.error ? (a(), i("div", Y5, [
                S[13] || (S[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  S[12] || (S[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, f(e.error), 1),
                  r.value ? (a(), i("p", X5, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : h("", !0)
                ])
              ])) : e.loading ? (a(), i("div", Z5, [...S[14] || (S[14] = [
                s("span", { class: "spinner" }, "⟳", -1),
                C(" Loading preview... ", -1)
              ])])) : (O = e.preview) != null && O.has_uncommitted_changes ? (a(), i(G, { key: 2 }, [
                S[15] || (S[15] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                S[16] || (S[16] = s("div", { class: "options-section" }, [
                  s("p", null, [
                    s("strong", null, "Options:")
                  ]),
                  s("ul", null, [
                    s("li", null, "Commit your changes first (recommended)"),
                    s("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (a(), i(G, { key: 3 }, [
                s("div", e8, [
                  S[17] || (S[17] = s("span", { class: "icon" }, "📥", -1)),
                  C(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (a(), i("div", t8, [
                  S[18] || (S[18] = s("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  s("div", s8, [
                    (a(!0), i(G, null, ye(e.preview.commits, (I) => (a(), i("div", {
                      key: I.hash,
                      class: "commit-item"
                    }, [
                      s("span", o8, f(I.short_hash || I.hash.slice(0, 7)), 1),
                      s("span", n8, f(I.message), 1),
                      s("span", a8, f(I.date_relative || I.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                d.value ? (a(), i("div", l8, [
                  S[22] || (S[22] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (a(), i("details", i8, [
                    s("summary", null, [
                      S[19] || (S[19] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", r8, f(c.value) + " changes", 1)
                    ]),
                    s("div", c8, [
                      (a(!0), i(G, null, ye(e.preview.changes.workflows.added, (I) => (a(), i("div", {
                        key: "a-" + I,
                        class: "change-item add"
                      }, " + " + f(I), 1))), 128)),
                      (a(!0), i(G, null, ye(e.preview.changes.workflows.modified, (I) => (a(), i("div", {
                        key: "m-" + I,
                        class: "change-item modify"
                      }, [
                        C(" ~ " + f(I) + " ", 1),
                        _(I) ? (a(), i("span", u8, "CONFLICT")) : h("", !0)
                      ]))), 128)),
                      (a(!0), i(G, null, ye(e.preview.changes.workflows.deleted, (I) => (a(), i("div", {
                        key: "d-" + I,
                        class: "change-item delete"
                      }, " - " + f(I), 1))), 128))
                    ])
                  ])) : h("", !0),
                  u.value > 0 ? (a(), i("details", d8, [
                    s("summary", null, [
                      S[20] || (S[20] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", f8, f(u.value) + " to install", 1)
                    ]),
                    s("div", m8, [
                      (a(!0), i(G, null, ye(e.preview.changes.nodes.to_install, (I) => (a(), i("div", {
                        key: I,
                        class: "change-item add"
                      }, " + " + f(I), 1))), 128))
                    ])
                  ])) : h("", !0),
                  e.preview.changes.models.count > 0 ? (a(), i("details", v8, [
                    s("summary", null, [
                      S[21] || (S[21] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", p8, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", g8, [
                      (a(!0), i(G, null, ye(e.preview.changes.models.referenced, (I) => (a(), i("div", {
                        key: I,
                        class: "change-item"
                      }, f(I), 1))), 128))
                    ])
                  ])) : h("", !0)
                ])) : h("", !0),
                v.value ? (a(), R(q5, {
                  key: 2,
                  "conflict-count": m.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : h("", !0),
                e.preview.changes.models.count > 0 ? (a(), i("div", h8, [
                  S[27] || (S[27] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", y8, [
                    s("label", w8, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[1] || (S[1] = (I) => l.value = I),
                        value: "all"
                      }, null, 512), [
                        [Mn, l.value]
                      ]),
                      S[23] || (S[23] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", _8, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[2] || (S[2] = (I) => l.value = I),
                        value: "required"
                      }, null, 512), [
                        [Mn, l.value]
                      ]),
                      S[24] || (S[24] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", k8, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[3] || (S[3] = (I) => l.value = I),
                        value: "skip"
                      }, null, 512), [
                        [Mn, l.value]
                      ]),
                      S[25] || (S[25] = s("span", null, "Skip model downloads", -1)),
                      S[26] || (S[26] = s("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  S[28] || (S[28] = s("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : h("", !0),
                e.preview.commits_behind === 0 ? (a(), i("div", b8, [
                  S[29] || (S[29] = s("span", { class: "icon" }, "✓", -1)),
                  C(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : h("", !0)
              ], 64)) : h("", !0)
            ]),
            s("div", $8, [
              k(Ie, {
                variant: "secondary",
                onClick: S[4] || (S[4] = (I) => b.$emit("close"))
              }, {
                default: g(() => [...S[30] || (S[30] = [
                  C(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), i(G, { key: 0 }, [
                k(Ie, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: S[5] || (S[5] = (I) => x(!1))
                }, {
                  default: g(() => [...S[31] || (S[31] = [
                    C(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                k(Ie, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: S[6] || (S[6] = (I) => x(!0))
                }, {
                  default: g(() => [...S[32] || (S[32] = [
                    C(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (T = e.preview) != null && T.has_uncommitted_changes ? (a(), R(Ie, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: S[7] || (S[7] = (I) => x(!0))
              }, {
                default: g(() => [...S[33] || (S[33] = [
                  C(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), i(G, { key: 2 }, [
                v.value && !w.value ? (a(), R(Ie, {
                  key: 0,
                  variant: "primary",
                  onClick: S[8] || (S[8] = (I) => n("openConflictResolution"))
                }, {
                  default: g(() => [
                    C(" Resolve Conflicts (" + f(p.value) + "/" + f(m.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), R(Ie, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !y.value,
                  onClick: S[9] || (S[9] = (I) => x(!1))
                }, {
                  default: g(() => [...S[34] || (S[34] = [
                    C(" Pull Changes ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "disabled"]))
              ], 64)) : h("", !0)
            ])
          ])
        ])) : h("", !0)
      ]);
    };
  }
}), x8 = /* @__PURE__ */ Ce(C8, [["__scopeId", "data-v-1d633bba"]]), S8 = { class: "modal-header" }, I8 = { class: "modal-title" }, E8 = { class: "modal-body" }, T8 = {
  key: 0,
  class: "error-box"
}, M8 = {
  key: 1,
  class: "loading-state"
}, P8 = {
  key: 2,
  class: "warning-box"
}, R8 = {
  key: 0,
  class: "commits-section"
}, L8 = { class: "commit-list" }, N8 = { class: "commit-hash" }, D8 = { class: "commit-message" }, O8 = { class: "commit-date" }, A8 = { class: "force-option" }, U8 = { class: "checkbox-option" }, z8 = { class: "commit-summary" }, V8 = { key: 0 }, F8 = { key: 1 }, B8 = {
  key: 0,
  class: "info-box"
}, W8 = {
  key: 1,
  class: "commits-section"
}, G8 = { class: "commit-list" }, j8 = { class: "commit-hash" }, H8 = { class: "commit-message" }, q8 = { class: "commit-date" }, K8 = {
  key: 2,
  class: "up-to-date"
}, J8 = { class: "modal-actions" }, Q8 = /* @__PURE__ */ $e({
  __name: "PushModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pushing: { type: Boolean },
    error: {}
  },
  emits: ["close", "push", "pull-first"],
  setup(e, { emit: t }) {
    const o = t, n = $(!1);
    function l(r) {
      o("push", { force: r });
    }
    return (r, c) => {
      var u, d, v;
      return a(), R(Dt, { to: "body" }, [
        e.show ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: c[7] || (c[7] = (m) => r.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: c[6] || (c[6] = ft(() => {
            }, ["stop"]))
          }, [
            s("div", S8, [
              s("h3", I8, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: c[0] || (c[0] = (m) => r.$emit("close"))
              }, "✕")
            ]),
            s("div", E8, [
              e.error ? (a(), i("div", T8, [
                c[9] || (c[9] = s("span", { class: "error-icon" }, "!", -1)),
                s("div", null, [
                  c[8] || (c[8] = s("strong", null, "Push failed", -1)),
                  s("p", null, f(e.error), 1)
                ])
              ])) : h("", !0),
              e.loading ? (a(), i("div", M8, [...c[10] || (c[10] = [
                s("span", { class: "spinner" }, "⟳", -1),
                C(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (a(), i("div", P8, [...c[11] || (c[11] = [
                s("span", { class: "warning-icon" }, "⚠", -1),
                s("div", null, [
                  s("strong", null, "UNCOMMITTED CHANGES"),
                  s("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = e.preview) != null && d.remote_has_new_commits ? (a(), i(G, { key: 3 }, [
                c[15] || (c[15] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("div", null, [
                    s("strong", null, "REMOTE HAS NEW COMMITS"),
                    s("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (a(), i("div", R8, [
                  c[12] || (c[12] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  s("div", L8, [
                    (a(!0), i(G, null, ye(e.preview.commits, (m) => (a(), i("div", {
                      key: m.hash,
                      class: "commit-item"
                    }, [
                      s("span", N8, f(m.short_hash || m.hash.slice(0, 7)), 1),
                      s("span", D8, f(m.message), 1),
                      s("span", O8, f(m.date_relative || m.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                s("div", A8, [
                  s("label", U8, [
                    Tt(s("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": c[1] || (c[1] = (m) => n.value = m)
                    }, null, 512), [
                      [Wn, n.value]
                    ]),
                    c[13] || (c[13] = s("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  c[14] || (c[14] = s("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (a(), i(G, { key: 4 }, [
                s("div", z8, [
                  c[16] || (c[16] = s("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (a(), i("span", V8, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), i("span", F8, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (a(), i("div", B8, [...c[17] || (c[17] = [
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
                ])])) : h("", !0),
                e.preview.commits_ahead > 0 ? (a(), i("div", W8, [
                  c[18] || (c[18] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  s("div", G8, [
                    (a(!0), i(G, null, ye(e.preview.commits, (m) => (a(), i("div", {
                      key: m.hash,
                      class: "commit-item"
                    }, [
                      s("span", j8, f(m.short_hash || m.hash.slice(0, 7)), 1),
                      s("span", H8, f(m.message), 1),
                      s("span", q8, f(m.date_relative || m.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (a(), i("div", K8, [
                  c[19] || (c[19] = s("span", { class: "icon" }, "✓", -1)),
                  C(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : h("", !0)
            ]),
            s("div", J8, [
              k(Ie, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (m) => r.$emit("close"))
              }, {
                default: g(() => [...c[20] || (c[20] = [
                  C(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (v = e.preview) != null && v.remote_has_new_commits ? (a(), i(G, { key: 0 }, [
                k(Ie, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (m) => r.$emit("pull-first"))
                }, {
                  default: g(() => [...c[21] || (c[21] = [
                    C(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                k(Ie, {
                  variant: "destructive",
                  disabled: !n.value,
                  loading: e.pushing,
                  onClick: c[4] || (c[4] = (m) => l(!0))
                }, {
                  default: g(() => [...c[22] || (c[22] = [
                    C(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), R(Ie, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: c[5] || (c[5] = (m) => l(!1))
              }, {
                default: g(() => [...c[23] || (c[23] = [
                  C(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : h("", !0)
            ])
          ])
        ])) : h("", !0)
      ]);
    };
  }
}), Y8 = /* @__PURE__ */ Ce(Q8, [["__scopeId", "data-v-621a386e"]]), X8 = { class: "resolution-choice-group" }, Z8 = ["disabled"], eS = ["disabled"], tS = /* @__PURE__ */ $e({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), i("div", X8, [
      s("button", {
        class: Ue(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Z8),
      s("button", {
        class: Ue(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, eS)
    ]));
  }
}), sS = /* @__PURE__ */ Ce(tS, [["__scopeId", "data-v-985715ed"]]), oS = { class: "conflict-header" }, nS = { class: "conflict-info" }, aS = { class: "workflow-name" }, lS = { class: "conflict-description" }, iS = {
  key: 0,
  class: "resolved-badge"
}, rS = { class: "resolved-text" }, cS = { class: "conflict-hashes" }, uS = { class: "hash-item" }, dS = { class: "hash-item" }, fS = { class: "conflict-actions" }, mS = /* @__PURE__ */ $e({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = $(o.resolution);
    kt(() => o.resolution, (d) => {
      l.value = d;
    }), kt(l, (d) => {
      d && n("resolve", d);
    });
    const r = N(() => l.value !== null), c = N(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = N(() => {
      switch (l.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (d, v) => {
      var m, p;
      return a(), i("div", {
        class: Ue(["conflict-item", { resolved: r.value }])
      }, [
        s("div", oS, [
          v[2] || (v[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", nS, [
            s("code", aS, f(e.conflict.name) + ".json", 1),
            s("div", lS, f(c.value), 1)
          ]),
          r.value ? (a(), i("div", iS, [
            v[1] || (v[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", rS, f(u.value), 1)
          ])) : h("", !0)
        ]),
        s("div", cS, [
          s("span", uS, [
            v[3] || (v[3] = C("Your: ", -1)),
            s("code", null, f(((m = e.conflict.base_hash) == null ? void 0 : m.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", dS, [
            v[4] || (v[4] = C("Theirs: ", -1)),
            s("code", null, f(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", fS, [
          k(sS, {
            modelValue: l.value,
            "onUpdate:modelValue": v[0] || (v[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), vS = /* @__PURE__ */ Ce(mS, [["__scopeId", "data-v-506d3bbf"]]), pS = { class: "resolution-content" }, gS = {
  key: 0,
  class: "error-box"
}, hS = { class: "resolution-header" }, yS = { class: "header-stats" }, wS = { class: "stat" }, _S = { class: "stat-value" }, kS = { class: "stat resolved" }, bS = { class: "stat-value" }, $S = {
  key: 0,
  class: "stat pending"
}, CS = { class: "stat-value" }, xS = { class: "conflicts-list" }, SS = {
  key: 1,
  class: "all-resolved-message"
}, IS = /* @__PURE__ */ $e({
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
    const o = e, n = t, l = N(() => o.resolutions.size), r = N(() => o.workflowConflicts.length - l.value), c = N(() => l.value === o.workflowConflicts.length), u = N(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(w) {
      const y = o.resolutions.get(w);
      return (y == null ? void 0 : y.resolution) ?? null;
    }
    function v(w, y) {
      n("resolve", w, y);
    }
    function m() {
      n("close");
    }
    function p() {
      n("apply");
    }
    return (w, y) => (a(), R(xt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: m
    }, {
      body: g(() => [
        s("div", pS, [
          e.error ? (a(), i("div", gS, [
            y[1] || (y[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              y[0] || (y[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, f(e.error), 1)
            ])
          ])) : h("", !0),
          s("div", hS, [
            s("div", yS, [
              s("div", wS, [
                s("span", _S, f(e.workflowConflicts.length), 1),
                y[2] || (y[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", kS, [
                s("span", bS, f(l.value), 1),
                y[3] || (y[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (a(), i("div", $S, [
                s("span", CS, f(r.value), 1),
                y[4] || (y[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : h("", !0)
            ]),
            y[5] || (y[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", xS, [
            (a(!0), i(G, null, ye(e.workflowConflicts, (_) => (a(), R(vS, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (x) => v(_.name, x)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (a(), i("div", SS, [
            y[6] || (y[6] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", null, 'All conflicts resolved! Click "' + f(u.value) + '" to continue.', 1)
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        k(Le, {
          variant: "secondary",
          onClick: m
        }, {
          default: g(() => [...y[7] || (y[7] = [
            C(" Cancel ", -1)
          ])]),
          _: 1
        }),
        y[8] || (y[8] = s("div", { class: "footer-spacer" }, null, -1)),
        k(Le, {
          variant: "primary",
          disabled: !c.value || e.validating,
          loading: e.validating,
          onClick: p
        }, {
          default: g(() => [
            C(f(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), ES = /* @__PURE__ */ Ce(IS, [["__scopeId", "data-v-c58d150d"]]), TS = { class: "node-conflict-item" }, MS = { class: "node-header" }, PS = { class: "node-name" }, RS = { class: "node-id" }, LS = { class: "version-comparison" }, NS = { class: "version yours" }, DS = { class: "version theirs" }, OS = { class: "chosen-version" }, AS = { class: "chosen" }, US = { class: "chosen-reason" }, zS = { class: "affected-workflows" }, VS = { class: "wf-source" }, FS = { class: "wf-version" }, BS = /* @__PURE__ */ $e({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, o) => (a(), i("div", TS, [
      s("div", MS, [
        s("code", PS, f(e.conflict.node_name), 1),
        s("span", RS, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      s("div", LS, [
        s("div", NS, [
          o[0] || (o[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", DS, [
          o[1] || (o[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      s("div", OS, [
        o[3] || (o[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", AS, f(e.conflict.chosen_version), 1),
        s("span", US, f(e.conflict.chosen_reason), 1)
      ]),
      s("details", zS, [
        s("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (a(!0), i(G, null, ye(e.conflict.affected_workflows, (n) => (a(), i("li", {
            key: n.name
          }, [
            s("code", null, f(n.name), 1),
            s("span", VS, "(" + f(n.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", FS, "needs v" + f(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), WS = /* @__PURE__ */ Ce(BS, [["__scopeId", "data-v-8b626725"]]), GS = { class: "validation-content" }, jS = {
  key: 0,
  class: "compatible-message"
}, HS = { class: "conflicts-list" }, qS = {
  key: 2,
  class: "warnings-section"
}, KS = /* @__PURE__ */ $e({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = N(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (a(), R(xt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => n("cancel"))
    }, {
      body: g(() => [
        s("div", GS, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), i("div", jS, [
            c[5] || (c[5] = s("span", { class: "icon" }, "✓", -1)),
            s("div", null, [
              c[4] || (c[4] = s("strong", null, "All clear!", -1)),
              s("p", null, "Your workflow choices are compatible. Ready to " + f(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (a(), i(G, { key: 1 }, [
            c[6] || (c[6] = s("div", { class: "warning-header" }, [
              s("span", { class: "icon" }, "⚠"),
              s("div", null, [
                s("strong", null, "Node Version Differences"),
                s("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            s("div", HS, [
              (a(!0), i(G, null, ye(e.validation.node_conflicts, (u) => (a(), R(WS, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : h("", !0),
          e.validation.warnings.length > 0 ? (a(), i("div", qS, [
            c[8] || (c[8] = s("h4", null, "Warnings", -1)),
            s("ul", null, [
              (a(!0), i(G, null, ye(e.validation.warnings, (u, d) => (a(), i("li", { key: d }, f(u), 1))), 128))
            ])
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        k(Le, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => n("cancel"))
        }, {
          default: g(() => [...c[9] || (c[9] = [
            C(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = s("div", { class: "footer-spacer" }, null, -1)),
        k(Le, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => n("goBack"))
        }, {
          default: g(() => [...c[10] || (c[10] = [
            C(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        k(Le, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => n("proceed"))
        }, {
          default: g(() => [
            C(f(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), JS = /* @__PURE__ */ Ce(KS, [["__scopeId", "data-v-fefd26ed"]]), QS = {
  key: 0,
  class: "embedded-toolbar"
}, YS = { class: "embedded-toolbar-search" }, XS = { key: 0 }, ZS = /* @__PURE__ */ $e({
  __name: "RemotesSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["toast"],
  setup(e, { emit: t }) {
    const o = t, {
      getRemotes: n,
      addRemote: l,
      removeRemote: r,
      updateRemoteUrl: c,
      fetchRemote: u,
      getRemoteSyncStatus: d,
      getPullPreview: v,
      pullFromRemote: m,
      getPushPreview: p,
      pushToRemote: w,
      validateMerge: y
    } = vt(), _ = $([]), x = $(null), b = $({}), S = $(!1), O = $(null), T = $(""), I = $(!1), L = $(null), A = $(!1), Q = $("add"), P = $({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), B = N(() => {
      if (!T.value.trim()) return _.value;
      const Ae = T.value.toLowerCase();
      return _.value.filter(
        (Pe) => Pe.name.toLowerCase().includes(Ae) || Pe.fetch_url.toLowerCase().includes(Ae) || Pe.push_url.toLowerCase().includes(Ae)
      );
    });
    async function Y() {
      S.value = !0, O.value = null;
      try {
        const Ae = await n();
        _.value = Ae.remotes, x.value = Ae.current_branch_tracking || null, await Promise.all(
          Ae.remotes.map(async (Pe) => {
            const W = await d(Pe.name);
            W && (b.value[Pe.name] = W);
          })
        );
      } catch (Ae) {
        O.value = Ae instanceof Error ? Ae.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function ee() {
      Q.value = "add", P.value = { name: "", fetchUrl: "", pushUrl: "" }, A.value = !0;
    }
    function ce(Ae) {
      const Pe = _.value.find((W) => W.name === Ae);
      Pe && (Q.value = "edit", P.value = {
        name: Pe.name,
        fetchUrl: Pe.fetch_url,
        pushUrl: Pe.push_url
      }, A.value = !0);
    }
    async function he(Ae) {
      try {
        Q.value === "add" ? await l(Ae.name, Ae.fetchUrl) : await c(Ae.name, Ae.fetchUrl, Ae.pushUrl || void 0), A.value = !1, await Y();
      } catch (Pe) {
        O.value = Pe instanceof Error ? Pe.message : "Operation failed";
      }
    }
    function te() {
      A.value = !1, P.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function K(Ae) {
      L.value = Ae;
      try {
        await u(Ae);
        const Pe = await d(Ae);
        Pe && (b.value[Ae] = Pe), o("toast", `✓ Fetched from ${Ae}`, "success");
      } catch (Pe) {
        o("toast", Pe instanceof Error ? Pe.message : "Fetch failed", "error");
      } finally {
        L.value = null;
      }
    }
    async function ie(Ae) {
      if (confirm(`Remove remote "${Ae}"?`))
        try {
          await r(Ae), await Y();
        } catch (Pe) {
          O.value = Pe instanceof Error ? Pe.message : "Failed to remove remote";
        }
    }
    function De() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const oe = $("idle"), ge = N(() => oe.value === "pull_preview"), U = N(
      () => oe.value === "resolving" || oe.value === "validating"
    ), me = N(
      () => oe.value === "validation_review" || oe.value === "executing"
    ), Re = $(!1), Be = $(null), Se = $(!1), H = $(null), X = $(null), E = $(!1), M = $(null), ne = $(null), Ve = $(/* @__PURE__ */ new Map()), Ye = $(null), D = $(null), q = N(() => M.value && lc(M.value) ? M.value : null);
    async function ue(Ae) {
      X.value = Ae, oe.value = "pull_preview", E.value = !0, M.value = null, ne.value = null;
      try {
        M.value = await v(Ae);
      } catch (Pe) {
        ne.value = Pe instanceof Error ? Pe.message : "Failed to load pull preview";
      } finally {
        E.value = !1;
      }
    }
    function Ee() {
      oe.value = "idle", M.value = null, ne.value = null, X.value = null;
    }
    async function _e(Ae) {
      if (!X.value) return;
      oe.value = "executing", ne.value = null;
      const Pe = X.value;
      try {
        const W = await m(Pe, Ae);
        if (W.rolled_back) {
          ne.value = `Pull failed and was rolled back: ${W.error || "Unknown error"}`, oe.value = "pull_preview";
          return;
        }
        pe(), oe.value = "idle", o("toast", `✓ Pulled from ${Pe}`, "success"), await Y();
      } catch (W) {
        ne.value = W instanceof Error ? W.message : "Pull failed", oe.value = "pull_preview";
      }
    }
    function ke() {
      q.value && (oe.value = "resolving", D.value = null);
    }
    function Ne(Ae, Pe) {
      Ve.value.set(Ae, { name: Ae, resolution: Pe });
    }
    function Oe() {
      oe.value = "pull_preview";
    }
    async function Me() {
      oe.value = "validating", D.value = null;
      try {
        const Ae = Array.from(Ve.value.values());
        Ye.value = await y(X.value, Ae), oe.value = "validation_review";
      } catch (Ae) {
        D.value = Ae instanceof Error ? Ae.message : "Validation failed", oe.value = "resolving";
      }
    }
    async function xe() {
      oe.value = "executing";
      const Ae = X.value;
      try {
        const Pe = Array.from(Ve.value.values()), W = await m(Ae, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Pe
        });
        if (W.rolled_back) {
          ne.value = `Pull failed and was rolled back: ${W.error || "Unknown error"}`, oe.value = "pull_preview";
          return;
        }
        pe(), oe.value = "idle", o("toast", `✓ Pulled from ${Ae}`, "success"), await Y();
      } catch (Pe) {
        ne.value = Pe instanceof Error ? Pe.message : "Pull failed", oe.value = "validation_review";
      }
    }
    function je() {
      oe.value = "resolving";
    }
    function ze() {
      pe(), oe.value = "idle";
    }
    function pe() {
      Ve.value.clear(), Ye.value = null, D.value = null, ne.value = null, M.value = null, X.value = null;
    }
    async function J(Ae) {
      X.value = Ae, Re.value = !0, E.value = !0, Be.value = null, H.value = null;
      try {
        Be.value = await p(Ae);
      } catch (Pe) {
        H.value = Pe instanceof Error ? Pe.message : "Failed to load push preview";
      } finally {
        E.value = !1;
      }
    }
    function We() {
      Re.value = !1, Be.value = null, H.value = null, X.value = null;
    }
    async function be(Ae) {
      var W;
      if (!X.value) return;
      Se.value = !0;
      const Pe = X.value;
      H.value = null;
      try {
        await w(Pe, Ae), We(), o("toast", `✓ Pushed to ${Pe}`, "success"), await Y();
      } catch (de) {
        const ae = de instanceof Error ? de.message : "Push failed";
        H.value = ae, de instanceof jr && de.status === 409 && ((W = de.data) != null && W.needs_force) && Be.value ? Be.value = {
          ...Be.value,
          remote_has_new_commits: !0,
          needs_force: !0,
          can_push: !0,
          block_reason: null
        } : o("toast", ae, "error");
      } finally {
        Se.value = !1;
      }
    }
    function Qe() {
      const Ae = X.value;
      We(), Ae && ue(Ae);
    }
    return rt(Y), (Ae, Pe) => (a(), i(G, null, [
      k(Ot, null, Yt({
        content: g(() => [
          S.value ? (a(), R($s, {
            key: 0,
            message: "Loading remotes..."
          })) : O.value ? (a(), R(Cs, {
            key: 1,
            message: O.value,
            retry: !0,
            onRetry: Y
          }, null, 8, ["message"])) : (a(), i(G, { key: 2 }, [
            e.embedded && !A.value ? (a(), i("div", QS, [
              s("div", YS, [
                k(lo, {
                  modelValue: T.value,
                  "onUpdate:modelValue": Pe[2] || (Pe[2] = (W) => T.value = W),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              k(Ie, {
                variant: "primary",
                size: "sm",
                onClick: ee
              }, {
                default: g(() => [...Pe[5] || (Pe[5] = [
                  C(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : h("", !0),
            A.value ? (a(), R(A5, {
              key: 1,
              mode: Q.value,
              "remote-name": P.value.name,
              "fetch-url": P.value.fetchUrl,
              "push-url": P.value.pushUrl,
              onSubmit: he,
              onCancel: te
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : h("", !0),
            _.value.length && !A.value ? (a(), R(mn, {
              key: 2,
              variant: "compact"
            }, {
              default: g(() => [
                C(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                x.value ? (a(), i("span", XS, " • Tracking: " + f(x.value.remote) + "/" + f(x.value.branch), 1)) : h("", !0)
              ]),
              _: 1
            })) : h("", !0),
            B.value.length && !A.value ? (a(), R(Ct, {
              key: 3,
              title: "REMOTES",
              count: B.value.length
            }, {
              default: g(() => [
                (a(!0), i(G, null, ye(B.value, (W) => (a(), R(C5, {
                  key: W.name,
                  remote: W,
                  "sync-status": b.value[W.name],
                  "fetching-remote": L.value,
                  onFetch: K,
                  onEdit: ce,
                  onRemove: ie,
                  onPull: ue,
                  onPush: J
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            !B.value.length && !A.value ? (a(), R(ls, {
              key: 4,
              icon: "🌐",
              message: T.value ? `No remotes match '${T.value}'` : "No remotes configured."
            }, {
              actions: g(() => [
                k(Ie, {
                  variant: "primary",
                  onClick: ee
                }, {
                  default: g(() => [...Pe[6] || (Pe[6] = [
                    C(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: g(() => [
            k(At, {
              title: "GIT REMOTES",
              "show-info": !0,
              onInfoClick: Pe[0] || (Pe[0] = (W) => I.value = !0)
            }, {
              actions: g(() => [
                A.value ? h("", !0) : (a(), R(Ie, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: ee
                }, {
                  default: g(() => [...Pe[4] || (Pe[4] = [
                    C(" + Add Remote ", -1)
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
          fn: g(() => [
            A.value ? h("", !0) : (a(), R(lo, {
              key: 0,
              modelValue: T.value,
              "onUpdate:modelValue": Pe[1] || (Pe[1] = (W) => T.value = W),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      k(is, {
        show: I.value,
        title: "About Git Remotes",
        onClose: Pe[3] || (Pe[3] = (W) => I.value = !1)
      }, {
        content: g(() => [...Pe[7] || (Pe[7] = [
          s("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          s("p", null, [
            C(" The "),
            s("strong", null, '"origin"'),
            C(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: g(() => [
          k(Ie, {
            variant: "link",
            onClick: De
          }, {
            default: g(() => [...Pe[8] || (Pe[8] = [
              C(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k(x8, {
        show: ge.value,
        "remote-name": X.value || "",
        preview: M.value,
        loading: E.value,
        pulling: oe.value === "executing",
        error: ne.value,
        "conflict-resolutions": Ve.value,
        onClose: Ee,
        onPull: _e,
        onOpenConflictResolution: ke
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      k(Y8, {
        show: Re.value,
        "remote-name": X.value || "",
        preview: Be.value,
        loading: E.value,
        pushing: Se.value,
        error: H.value,
        onClose: We,
        onPush: be,
        onPullFirst: Qe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      U.value && q.value ? (a(), R(ES, {
        key: 0,
        "workflow-conflicts": q.value.workflow_conflicts,
        resolutions: Ve.value,
        "operation-type": "pull",
        validating: oe.value === "validating",
        error: D.value,
        onClose: Oe,
        onResolve: Ne,
        onApply: Me
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : h("", !0),
      me.value && Ye.value ? (a(), R(JS, {
        key: 1,
        validation: Ye.value,
        "operation-type": "pull",
        executing: oe.value === "executing",
        onProceed: xe,
        onGoBack: je,
        onCancel: ze
      }, null, 8, ["validation", "executing"])) : h("", !0)
    ], 64));
  }
}), e4 = /* @__PURE__ */ Ce(ZS, [["__scopeId", "data-v-e03090a2"]]), t4 = /* @__PURE__ */ $e({
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
    const o = e, n = t, l = [
      { id: "history", label: "History" },
      { id: "branches", label: "Branches" },
      { id: "remotes", label: "Remotes" }
    ], r = $(o.initialTab ?? "history");
    return kt(() => o.initialTab, (c) => {
      c && (r.value = c);
    }), (c, u) => (a(), R(Ot, null, {
      header: g(() => [
        k(At, { title: "VERSION CONTROL" })
      ]),
      search: g(() => [
        k(xl, {
          modelValue: r.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => r.value = d),
          tabs: l
        }, null, 8, ["modelValue"])
      ]),
      content: g(() => [
        r.value === "history" ? (a(), R(U3, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: u[1] || (u[1] = (d) => n("select", d)),
          onCheckout: u[2] || (u[2] = (d) => n("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (a(), R(i5, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: u[3] || (u[3] = (d) => n("switch", d)),
          onCreate: u[4] || (u[4] = (d) => n("create", d)),
          onDelete: u[5] || (u[5] = (d) => n("delete", d))
        }, null, 8, ["branches", "current"])) : (a(), R(e4, {
          key: 2,
          embedded: "",
          onToast: u[6] || (u[6] = (d, v) => n("toast", d, v))
        }))
      ]),
      _: 1
    }));
  }
});
async function ic(e) {
  var o;
  if (typeof navigator < "u" && ((o = navigator.clipboard) != null && o.writeText)) {
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
const s4 = { class: "text-viewer-wrapper" }, o4 = ["disabled", "title"], n4 = { class: "text-content" }, a4 = /* @__PURE__ */ $e({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const t = e, o = $(null), n = $("idle");
    async function l() {
      if (t.content)
        try {
          await ic(t.content), n.value = "copied", setTimeout(() => {
            n.value = "idle";
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
    return (u, d) => (a(), i("div", s4, [
      s("div", {
        ref_key: "textOutputElement",
        ref: o,
        class: "text-output",
        tabindex: "0",
        onKeydown: r,
        onCopy: c
      }, [
        s("button", {
          class: "copy-overlay-btn",
          onClick: l,
          disabled: n.value !== "idle",
          title: n.value === "copied" ? "Copied!" : "Copy text"
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, o4),
        s("pre", n4, f(e.content), 1)
      ], 544)
    ]));
  }
}), l4 = /* @__PURE__ */ Ce(a4, [["__scopeId", "data-v-85a537ba"]]), i4 = {
  key: 1,
  class: "manifest-viewer-shell"
}, r4 = { class: "manifest-path" }, c4 = /* @__PURE__ */ $e({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: t } = vt(), o = $(!1), n = $(null), l = $(!1), r = $({
      path: "",
      exists: !1,
      content: ""
    });
    async function c() {
      o.value = !0, n.value = null;
      try {
        r.value = await t();
      } catch (u) {
        n.value = u instanceof Error ? u.message : "Failed to load manifest";
      } finally {
        o.value = !1;
      }
    }
    return rt(c), (u, d) => (a(), i(G, null, [
      k(Ot, null, Yt({
        content: g(() => [
          o.value ? (a(), R($s, {
            key: 0,
            message: "Loading manifest..."
          })) : n.value ? (a(), R(Cs, {
            key: 1,
            message: n.value,
            retry: !0,
            onRetry: c
          }, null, 8, ["message"])) : (a(), i(G, { key: 2 }, [
            !r.value.exists || !r.value.content ? (a(), R(ls, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (a(), i("div", i4, [
              k(l4, {
                content: r.value.content
              }, null, 8, ["content"])
            ]))
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: g(() => [
            k(At, {
              title: "MANIFEST (PYPROJECT.TOML)",
              "show-info": !0,
              onInfoClick: d[0] || (d[0] = (v) => l.value = !0)
            }, {
              actions: g(() => [
                k(Ie, {
                  variant: "secondary",
                  size: "sm",
                  onClick: c,
                  disabled: o.value
                }, {
                  default: g(() => [
                    C(f(o.value ? "Loading..." : "Refresh"), 1)
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
      k(is, {
        show: l.value,
        title: "About Manifest View",
        onClose: d[2] || (d[2] = (v) => l.value = !1)
      }, {
        content: g(() => [
          d[3] || (d[3] = s("p", null, [
            C(" This view shows the live "),
            s("strong", null, "pyproject.toml"),
            C(" from the current environment's "),
            s("strong", null, ".cec"),
            C(" directory. ")
          ], -1)),
          d[4] || (d[4] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " It is read-only and intended for quick inspection and debugging without leaving the ComfyGit panel. ", -1)),
          d[5] || (d[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Path: ", -1)),
          s("div", r4, [
            s("code", null, f(r.value.path || "unknown"), 1)
          ]),
          d[6] || (d[6] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, null, -1))
        ]),
        actions: g(() => [
          k(Ie, {
            variant: "primary",
            onClick: d[1] || (d[1] = (v) => l.value = !1)
          }, {
            default: g(() => [...d[7] || (d[7] = [
              C(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), u4 = /* @__PURE__ */ Ce(c4, [["__scopeId", "data-v-814a8fdd"]]), d4 = { class: "log-viewer-wrapper" }, f4 = ["disabled", "title"], m4 = /* @__PURE__ */ $e({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const t = e, o = $(null), n = $("idle"), l = N(() => t.logs.map((v) => ({
      text: t.rawFormat || !v.timestamp ? v.message : `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function r() {
      var m;
      await Pt();
      const v = (m = o.value) == null ? void 0 : m.closest(".panel-layout-content");
      v && (v.scrollTop = v.scrollHeight);
    }
    rt(r), kt(() => t.logs, r);
    async function c() {
      if (l.value.length === 0) return;
      const v = l.value.map((m) => m.text).join(`
`);
      try {
        await ic(v), n.value = "copied", setTimeout(() => {
          n.value = "idle";
        }, 2e3);
      } catch (m) {
        console.error("Failed to copy logs:", m);
      }
    }
    function u(v) {
      (v.ctrlKey || v.metaKey) && v.key === "c" && v.stopPropagation();
    }
    function d(v) {
      v.stopPropagation();
    }
    return (v, m) => (a(), i("div", d4, [
      s("div", {
        ref_key: "logOutputElement",
        ref: o,
        class: "log-output",
        onKeydown: u,
        onCopy: d,
        tabindex: "0"
      }, [
        s("button", {
          class: "copy-overlay-btn",
          onClick: c,
          disabled: n.value !== "idle",
          title: n.value === "copied" ? "Copied!" : "Copy all logs"
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, f4),
        (a(!0), i(G, null, ye(l.value, (p, w) => (a(), i("div", {
          key: w,
          class: Ue(`log-line log-level-${p.level.toLowerCase()}`)
        }, f(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), rc = /* @__PURE__ */ Ce(m4, [["__scopeId", "data-v-5aaf1b88"]]), v4 = /* @__PURE__ */ $e({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: t, getStatus: o, getEnvironmentLogPath: n, openFile: l } = vt(), r = $([]), c = $(!1), u = $(null), d = $(!1), v = $("production"), m = $(null), p = $(!1);
    async function w() {
      c.value = !0, u.value = null;
      try {
        r.value = await t(void 0, 500);
        try {
          const x = await o();
          v.value = x.environment || "production";
        } catch {
        }
      } catch (x) {
        u.value = x instanceof Error ? x.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
      }
    }
    async function y() {
      try {
        const x = await n();
        x.exists && (m.value = x.path);
      } catch {
      }
    }
    async function _() {
      if (m.value) {
        p.value = !0;
        try {
          await l(m.value);
        } catch (x) {
          console.error("Failed to open log file:", x);
        } finally {
          p.value = !1;
        }
      }
    }
    return rt(() => {
      w(), y();
    }), (x, b) => (a(), i(G, null, [
      k(Ot, null, Yt({
        content: g(() => [
          c.value ? (a(), R($s, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (a(), R(Cs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), i(G, { key: 2 }, [
            r.value.length === 0 ? (a(), R(ls, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), R(rc, {
              key: 1,
              logs: r.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: g(() => [
            k(At, {
              title: "DEBUG (ENVIRONMENT LOGS)",
              "show-info": !0,
              onInfoClick: b[0] || (b[0] = (S) => d.value = !0)
            }, {
              actions: g(() => [
                k(Ie, {
                  variant: "secondary",
                  size: "sm",
                  onClick: _,
                  disabled: !m.value || p.value,
                  title: "Open log file in default editor"
                }, {
                  default: g(() => [
                    C(f(p.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                k(Ie, {
                  variant: "secondary",
                  size: "sm",
                  onClick: w,
                  disabled: c.value
                }, {
                  default: g(() => [
                    C(f(c.value ? "Loading..." : "Refresh"), 1)
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
      k(is, {
        show: d.value,
        title: "About Environment Logs",
        onClose: b[2] || (b[2] = (S) => d.value = !1)
      }, {
        content: g(() => [
          s("p", null, [
            b[3] || (b[3] = C(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            s("strong", null, f(v.value), 1),
            b[4] || (b[4] = C(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          b[5] || (b[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            C(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            C(" Potential issues or important notices"),
            s("br"),
            s("strong", null, "INFO:"),
            C(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            C(" Detailed debugging information ")
          ], -1))
        ]),
        actions: g(() => [
          k(Ie, {
            variant: "primary",
            onClick: b[1] || (b[1] = (S) => d.value = !1)
          }, {
            default: g(() => [...b[6] || (b[6] = [
              C(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), _i = /* @__PURE__ */ $e({
  __name: "WorkspaceDebugSection",
  props: {
    embedded: { type: Boolean },
    initialTab: {}
  },
  setup(e) {
    const {
      getWorkspaceLogs: t,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: n,
      getOrchestratorLogPath: l,
      openFile: r
    } = vt(), c = e, u = $(c.initialTab ?? "workspace"), d = $([]), v = $(!1), m = $(null), p = $(!1), w = $(null), y = $(null), _ = $(!1), x = N(() => u.value === "workspace" ? w.value : y.value);
    async function b() {
      v.value = !0, m.value = null;
      try {
        u.value === "workspace" ? d.value = await t(void 0, 500) : d.value = await n(void 0, 500);
      } catch (T) {
        m.value = T instanceof Error ? T.message : `Failed to load ${u.value} logs`;
      } finally {
        v.value = !1;
      }
    }
    async function S() {
      try {
        const [T, I] = await Promise.all([
          o(),
          l()
        ]);
        T.exists && (w.value = T.path), I.exists && (y.value = I.path);
      } catch {
      }
    }
    async function O() {
      if (x.value) {
        _.value = !0;
        try {
          await r(x.value);
        } catch (T) {
          console.error("Failed to open log file:", T);
        } finally {
          _.value = !1;
        }
      }
    }
    return kt(u, () => {
      b();
    }), kt(() => c.initialTab, (T) => {
      T && (u.value = T);
    }), rt(() => {
      b(), S();
    }), (T, I) => (a(), i(G, null, [
      k(Ot, null, Yt({
        content: g(() => [
          v.value ? (a(), R($s, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : m.value ? (a(), R(Cs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (a(), i(G, { key: 2 }, [
            d.value.length === 0 ? (a(), R(ls, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (a(), R(rc, {
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
          fn: g(() => [
            k(At, {
              title: "DEBUG (LOGS)",
              "show-info": !0,
              onInfoClick: I[0] || (I[0] = (L) => p.value = !0)
            }, {
              actions: g(() => [
                k(Ie, {
                  variant: "secondary",
                  size: "sm",
                  onClick: O,
                  disabled: !x.value || _.value,
                  title: "Open log file in default editor"
                }, {
                  default: g(() => [
                    C(f(_.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                k(Ie, {
                  variant: "secondary",
                  size: "sm",
                  onClick: b,
                  disabled: v.value
                }, {
                  default: g(() => [
                    C(f(v.value ? "Loading..." : "Refresh"), 1)
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
          fn: g(() => [
            k(xl, {
              modelValue: u.value,
              "onUpdate:modelValue": I[1] || (I[1] = (L) => u.value = L),
              tabs: [
                { id: "workspace", label: "Workspace" },
                { id: "orchestrator", label: "Orchestrator" }
              ]
            }, null, 8, ["modelValue"])
          ]),
          key: "1"
        }
      ]), 1024),
      k(is, {
        show: p.value,
        title: "About Logs",
        onClose: I[3] || (I[3] = (L) => p.value = !1)
      }, {
        content: g(() => [...I[4] || (I[4] = [
          s("p", null, [
            s("strong", null, "Workspace Logs:"),
            C(" System-level events for the entire ComfyGit workspace, including operations that affect multiple environments. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Orchestrator Logs:"),
            C(" Process management events including ComfyUI startup, restarts, environment switches, and any errors during handoff. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            C(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            C(" Potential issues or deprecated features"),
            s("br"),
            s("strong", null, "INFO:"),
            C(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            C(" Detailed debugging information ")
          ], -1)
        ])]),
        actions: g(() => [
          k(Ie, {
            variant: "primary",
            onClick: I[2] || (I[2] = (L) => p.value = !1)
          }, {
            default: g(() => [...I[5] || (I[5] = [
              C(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), p4 = /* @__PURE__ */ $e({
  __name: "DiagnosticsSection",
  props: {
    initialTab: {}
  },
  setup(e) {
    const t = e, o = [
      { id: "env", label: "Environment" },
      { id: "workspace", label: "Workspace" },
      { id: "orchestrator", label: "Orchestrator" }
    ], n = $(t.initialTab ?? "manifest"), l = $(
      t.initialTab && t.initialTab !== "manifest" ? t.initialTab : "env"
    ), r = $(!1), c = N(() => n.value === "manifest" ? "MANIFEST" : "LOGGING"), u = N(() => n.value === "manifest" ? "About Manifest" : "About Logging");
    return kt(() => t.initialTab, (d) => {
      d && (n.value = d, d !== "manifest" && (l.value = d));
    }), kt(l, (d) => {
      n.value !== "manifest" && (n.value = d);
    }), (d, v) => (a(), i(G, null, [
      k(Ot, null, Yt({
        header: g(() => [
          k(At, {
            title: c.value,
            "show-info": !0,
            onInfoClick: v[0] || (v[0] = (m) => r.value = !0)
          }, null, 8, ["title"])
        ]),
        content: g(() => [
          n.value === "manifest" ? (a(), R(u4, {
            key: 0,
            embedded: ""
          })) : l.value === "env" ? (a(), R(v4, {
            key: 1,
            embedded: ""
          })) : l.value === "workspace" ? (a(), R(_i, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (a(), R(_i, {
            key: 3,
            embedded: "",
            "initial-tab": "orchestrator"
          }))
        ]),
        _: 2
      }, [
        n.value !== "manifest" ? {
          name: "search",
          fn: g(() => [
            k(xl, {
              modelValue: l.value,
              "onUpdate:modelValue": v[1] || (v[1] = (m) => l.value = m),
              tabs: o
            }, null, 8, ["modelValue"])
          ]),
          key: "0"
        } : void 0
      ]), 1024),
      k(is, {
        show: r.value,
        title: u.value,
        "max-width": "520px",
        onClose: v[3] || (v[3] = (m) => r.value = !1)
      }, {
        content: g(() => [
          n.value === "manifest" ? (a(), i(G, { key: 0 }, [
            v[4] || (v[4] = s("p", null, [
              s("strong", null, "Manifest"),
              C(" shows the live "),
              s("strong", null, "pyproject.toml"),
              C(" from the current environment's "),
              s("strong", null, ".cec"),
              C(" directory. ")
            ], -1)),
            v[5] || (v[5] = s("p", null, " Use it to inspect the environment state ComfyGit is tracking, including workflows, models, nodes, and workflow execution contracts. ", -1)),
            v[6] || (v[6] = s("p", null, " The manifest is read-only here. Change environment state through the manager actions or CLI, then commit the resulting manifest changes. ", -1))
          ], 64)) : (a(), i(G, { key: 1 }, [
            v[7] || (v[7] = s("p", null, [
              s("strong", null, "Logging"),
              C(" groups read-only logs for the current environment, workspace, and orchestrator. ")
            ], -1)),
            v[8] || (v[8] = s("p", null, [
              s("strong", null, "Environment"),
              C(" logs help debug workflow execution, model resolution, node installation, and other environment-local behavior. ")
            ], -1)),
            v[9] || (v[9] = s("p", null, [
              s("strong", null, "Workspace"),
              C(" logs show workspace-wide events that affect more than one environment. ")
            ], -1)),
            v[10] || (v[10] = s("p", null, [
              s("strong", null, "Orchestrator"),
              C(" logs show supervisor and handoff behavior for environment creation, switching, restarts, and process management. ")
            ], -1))
          ], 64))
        ]),
        actions: g(() => [
          k(Ie, {
            variant: "primary",
            size: "sm",
            onClick: v[2] || (v[2] = (m) => r.value = !1)
          }, {
            default: g(() => [...v[11] || (v[11] = [
              C(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show", "title"])
    ], 64));
  }
}), g4 = { class: "header-info" }, h4 = { class: "commit-hash" }, y4 = {
  key: 0,
  class: "commit-refs"
}, w4 = { class: "commit-message" }, _4 = { class: "commit-date" }, k4 = {
  key: 0,
  class: "loading"
}, b4 = {
  key: 1,
  class: "changes-section"
}, $4 = { class: "stats-row" }, C4 = { class: "stat" }, x4 = { class: "stat insertions" }, S4 = { class: "stat deletions" }, I4 = {
  key: 0,
  class: "change-group"
}, E4 = {
  key: 1,
  class: "change-group"
}, T4 = {
  key: 0,
  class: "version"
}, M4 = {
  key: 2,
  class: "change-group"
}, P4 = { class: "change-item" }, R4 = /* @__PURE__ */ $e({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const t = e, { getCommitDetail: o } = vt(), n = $(null), l = $(!0), r = N(() => {
      if (!n.value) return !1;
      const u = n.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = N(() => {
      if (!n.value) return !1;
      const u = n.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return rt(async () => {
      try {
        n.value = await o(t.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (a(), R(xt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => u.$emit("close"))
    }, {
      header: g(() => {
        var v, m, p, w;
        return [
          s("div", g4, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", h4, f(((v = n.value) == null ? void 0 : v.short_hash) || e.commit.short_hash || ((m = e.commit.hash) == null ? void 0 : m.slice(0, 7))), 1),
            (w = (p = n.value) == null ? void 0 : p.refs) != null && w.length ? (a(), i("span", y4, [
              (a(!0), i(G, null, ye(n.value.refs, (y) => (a(), i("span", {
                key: y,
                class: "ref-badge"
              }, f(y), 1))), 128))
            ])) : h("", !0)
          ]),
          k(Le, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (y) => u.$emit("close"))
          }, {
            default: g(() => [...d[5] || (d[5] = [
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
      body: g(() => {
        var v, m;
        return [
          s("div", w4, f(((v = n.value) == null ? void 0 : v.message) || e.commit.message), 1),
          s("div", _4, f(((m = n.value) == null ? void 0 : m.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), i("div", k4, "Loading details...")) : n.value ? (a(), i("div", b4, [
            s("div", $4, [
              s("span", C4, f(n.value.stats.files_changed) + " files", 1),
              s("span", x4, "+" + f(n.value.stats.insertions), 1),
              s("span", S4, "-" + f(n.value.stats.deletions), 1)
            ]),
            r.value ? (a(), i("div", I4, [
              k(oo, { variant: "section" }, {
                default: g(() => [...d[6] || (d[6] = [
                  C("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), i(G, null, ye(n.value.changes.workflows.added, (p) => (a(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                d[7] || (d[7] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, f(p), 1)
              ]))), 128)),
              (a(!0), i(G, null, ye(n.value.changes.workflows.modified, (p) => (a(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = s("span", { class: "change-icon" }, "~", -1)),
                s("span", null, f(p), 1)
              ]))), 128)),
              (a(!0), i(G, null, ye(n.value.changes.workflows.deleted, (p) => (a(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, f(p), 1)
              ]))), 128))
            ])) : h("", !0),
            c.value ? (a(), i("div", E4, [
              k(oo, { variant: "section" }, {
                default: g(() => [...d[10] || (d[10] = [
                  C("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), i(G, null, ye(n.value.changes.nodes.added, (p) => (a(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, f(p.name), 1),
                p.version ? (a(), i("span", T4, "(" + f(p.version) + ")", 1)) : h("", !0)
              ]))), 128)),
              (a(!0), i(G, null, ye(n.value.changes.nodes.removed, (p) => (a(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, f(p.name), 1)
              ]))), 128))
            ])) : h("", !0),
            n.value.changes.models.resolved > 0 ? (a(), i("div", M4, [
              k(oo, { variant: "section" }, {
                default: g(() => [...d[13] || (d[13] = [
                  C("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", P4, [
                d[14] || (d[14] = s("span", { class: "change-icon" }, "●", -1)),
                s("span", null, f(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : h("", !0)
          ])) : h("", !0)
        ];
      }),
      footer: g(() => [
        k(Le, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (v) => u.$emit("createBranch", e.commit))
        }, {
          default: g(() => [...d[15] || (d[15] = [
            C(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        k(Le, {
          variant: "primary",
          onClick: d[2] || (d[2] = (v) => u.$emit("checkout", e.commit))
        }, {
          default: g(() => [...d[16] || (d[16] = [
            C(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), L4 = /* @__PURE__ */ Ce(R4, [["__scopeId", "data-v-d256ff6d"]]), N4 = { class: "popover-header" }, D4 = { class: "popover-body" }, O4 = {
  key: 0,
  class: "changes-summary"
}, A4 = {
  key: 0,
  class: "change-item"
}, U4 = {
  key: 1,
  class: "change-item"
}, z4 = {
  key: 2,
  class: "change-item"
}, V4 = {
  key: 3,
  class: "change-item"
}, F4 = {
  key: 4,
  class: "change-item"
}, B4 = {
  key: 5,
  class: "change-item"
}, W4 = {
  key: 1,
  class: "no-changes"
}, G4 = {
  key: 2,
  class: "loading"
}, j4 = {
  key: 3,
  class: "issues-error"
}, H4 = { class: "error-header" }, q4 = { class: "error-title" }, K4 = { class: "issues-list" }, J4 = { class: "workflow-state" }, Q4 = { class: "message-section" }, Y4 = { class: "popover-footer" }, X4 = {
  key: 1,
  class: "commit-popover"
}, Z4 = { class: "popover-header" }, eI = { class: "popover-body" }, tI = {
  key: 0,
  class: "changes-summary"
}, sI = {
  key: 0,
  class: "change-item"
}, oI = {
  key: 1,
  class: "change-item"
}, nI = {
  key: 2,
  class: "change-item"
}, aI = {
  key: 3,
  class: "change-item"
}, lI = {
  key: 4,
  class: "change-item"
}, iI = {
  key: 5,
  class: "change-item"
}, rI = {
  key: 1,
  class: "no-changes"
}, cI = {
  key: 2,
  class: "loading"
}, uI = {
  key: 3,
  class: "issues-error"
}, dI = { class: "error-header" }, fI = { class: "error-title" }, mI = { class: "issues-list" }, vI = { class: "workflow-state" }, pI = { class: "message-section" }, gI = { class: "popover-footer" }, hI = /* @__PURE__ */ $e({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { commit: l } = vt(), r = $(""), c = $(!1), u = $(!1), d = N(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), v = N(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, x = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || x.nodes_added.length > 0 || x.nodes_removed.length > 0;
    }), m = N(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((x) => x.has_issues) : [];
    }), p = N(() => m.value.length > 0), w = N(() => p.value && !u.value);
    async function y() {
      var _, x, b, S;
      if (!(p.value && !u.value) && !(!d.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const O = await l(r.value.trim(), u.value);
          if (O.status === "success") {
            const T = `Committed: ${((_ = O.summary) == null ? void 0 : _.new) || 0} new, ${((x = O.summary) == null ? void 0 : x.modified) || 0} modified, ${((b = O.summary) == null ? void 0 : b.deleted) || 0} deleted`;
            n("committed", { success: !0, message: T });
          } else if (O.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (O.status === "blocked") {
            const T = ((S = O.issues) == null ? void 0 : S.map((I) => `${I.name}: ${I.issue}`).join("; ")) || "Unknown issues";
            n("committed", { success: !1, message: `Commit blocked - ${T}. Enable "Allow issues" to force.` });
          } else
            n("committed", { success: !1, message: O.message || "Commit failed" });
        } catch (O) {
          n("committed", { success: !1, message: O instanceof Error ? O.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (_, x) => e.asModal ? (a(), R(Dt, {
      key: 0,
      to: "body"
    }, [
      s("div", {
        class: "modal-overlay",
        onClick: x[5] || (x[5] = (b) => n("close"))
      }, [
        s("div", {
          class: "commit-popover modal",
          onClick: x[4] || (x[4] = ft(() => {
          }, ["stop"]))
        }, [
          s("div", N4, [
            x[11] || (x[11] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            s("button", {
              class: "close-btn",
              onClick: x[0] || (x[0] = (b) => n("close"))
            }, [...x[10] || (x[10] = [
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
          s("div", D4, [
            e.status && d.value ? (a(), i("div", O4, [
              e.status.workflows.new.length ? (a(), i("div", A4, [
                x[12] || (x[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : h("", !0),
              e.status.workflows.modified.length ? (a(), i("div", U4, [
                x[13] || (x[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : h("", !0),
              e.status.workflows.deleted.length ? (a(), i("div", z4, [
                x[14] || (x[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : h("", !0),
              e.status.git_changes.nodes_added.length ? (a(), i("div", V4, [
                x[15] || (x[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : h("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), i("div", F4, [
                x[16] || (x[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : h("", !0),
              v.value ? h("", !0) : (a(), i("div", B4, [...x[17] || (x[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), i("div", W4, " No changes to commit ")) : (a(), i("div", G4, " Loading... ")),
            p.value ? (a(), i("div", j4, [
              s("div", H4, [
                x[18] || (x[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", q4, f(m.value.length) + " workflow(s) have issues", 1)
              ]),
              s("div", K4, [
                (a(!0), i(G, null, ye(m.value, (b) => (a(), i("div", {
                  key: b.name,
                  class: "issue-item"
                }, [
                  s("strong", null, f(b.name), 1),
                  s("span", J4, "(" + f(b.sync_state) + ")", 1),
                  C(": " + f(b.issue_summary), 1)
                ]))), 128))
              ]),
              k(Hn, {
                modelValue: u.value,
                "onUpdate:modelValue": x[1] || (x[1] = (b) => u.value = b),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...x[19] || (x[19] = [
                  C(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : h("", !0),
            s("div", Q4, [
              k(Co, {
                modelValue: r.value,
                "onUpdate:modelValue": x[2] || (x[2] = (b) => r.value = b),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: y,
                onSubmit: y
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          s("div", Y4, [
            k(Le, {
              variant: "secondary",
              onClick: x[3] || (x[3] = (b) => n("close"))
            }, {
              default: g(() => [...x[20] || (x[20] = [
                C(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(Le, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !r.value.trim() || c.value || w.value,
              loading: c.value,
              onClick: y
            }, {
              default: g(() => [
                C(f(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (a(), i("div", X4, [
      s("div", Z4, [
        x[22] || (x[22] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        s("button", {
          class: "close-btn",
          onClick: x[6] || (x[6] = (b) => n("close"))
        }, [...x[21] || (x[21] = [
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
      s("div", eI, [
        e.status && d.value ? (a(), i("div", tI, [
          e.status.workflows.new.length ? (a(), i("div", sI, [
            x[23] || (x[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : h("", !0),
          e.status.workflows.modified.length ? (a(), i("div", oI, [
            x[24] || (x[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : h("", !0),
          e.status.workflows.deleted.length ? (a(), i("div", nI, [
            x[25] || (x[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : h("", !0),
          e.status.git_changes.nodes_added.length ? (a(), i("div", aI, [
            x[26] || (x[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : h("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), i("div", lI, [
            x[27] || (x[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : h("", !0),
          v.value ? h("", !0) : (a(), i("div", iI, [...x[28] || (x[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), i("div", rI, " No changes to commit ")) : (a(), i("div", cI, " Loading... ")),
        p.value ? (a(), i("div", uI, [
          s("div", dI, [
            x[29] || (x[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", fI, f(m.value.length) + " workflow(s) have issues", 1)
          ]),
          s("div", mI, [
            (a(!0), i(G, null, ye(m.value, (b) => (a(), i("div", {
              key: b.name,
              class: "issue-item"
            }, [
              s("strong", null, f(b.name), 1),
              s("span", vI, "(" + f(b.sync_state) + ")", 1),
              C(": " + f(b.issue_summary), 1)
            ]))), 128))
          ]),
          k(Hn, {
            modelValue: u.value,
            "onUpdate:modelValue": x[7] || (x[7] = (b) => u.value = b),
            class: "allow-issues-toggle"
          }, {
            default: g(() => [...x[30] || (x[30] = [
              C(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : h("", !0),
        s("div", pI, [
          k(Co, {
            modelValue: r.value,
            "onUpdate:modelValue": x[8] || (x[8] = (b) => r.value = b),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: y,
            onSubmit: y
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      s("div", gI, [
        k(Le, {
          variant: "secondary",
          onClick: x[9] || (x[9] = (b) => n("close"))
        }, {
          default: g(() => [...x[31] || (x[31] = [
            C(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k(Le, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !r.value.trim() || c.value || w.value,
          loading: c.value,
          onClick: y
        }, {
          default: g(() => [
            C(f(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), cc = /* @__PURE__ */ Ce(hI, [["__scopeId", "data-v-5f897631"]]), yI = { class: "modal-header" }, wI = { class: "modal-body" }, _I = { class: "switch-message" }, kI = { class: "switch-details" }, bI = { class: "modal-actions" }, $I = /* @__PURE__ */ $e({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => (a(), R(Dt, { to: "body" }, [
      e.show ? (a(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => t.$emit("close"))
      }, [
        s("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = ft(() => {
          }, ["stop"]))
        }, [
          s("div", yI, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", wI, [
            s("p", _I, [
              o[6] || (o[6] = C(" Switch from ", -1)),
              s("strong", null, f(e.fromEnvironment), 1),
              o[7] || (o[7] = C(" to ", -1)),
              s("strong", null, f(e.toEnvironment), 1),
              o[8] || (o[8] = C("? ", -1))
            ]),
            o[9] || (o[9] = s("div", { class: "warning-box" }, [
              s("span", { class: "warning-icon" }, "⚠"),
              s("span", null, "This will restart ComfyUI")
            ], -1)),
            s("p", kI, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = s("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          s("div", bI, [
            k(Ie, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => t.$emit("close"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                C(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(Ie, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
            }, {
              default: g(() => [...o[12] || (o[12] = [
                C(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : h("", !0)
    ]));
  }
}), CI = /* @__PURE__ */ Ce($I, [["__scopeId", "data-v-e9c5253e"]]), xI = {
  key: 0,
  class: "modal-overlay"
}, SI = { class: "modal-content" }, II = { class: "modal-body" }, EI = { class: "progress-info" }, TI = { class: "progress-percentage" }, MI = { class: "progress-state" }, PI = { class: "switch-steps" }, RI = { class: "step-icon" }, LI = { class: "step-label" }, NI = /* @__PURE__ */ $e({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const t = e, o = N(() => {
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
    }), n = N(() => t.state === "complete" ? "success" : t.state === "critical_failure" || t.state === "rolled_back" ? "error" : "default"), l = N(() => {
      const r = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], c = r.findIndex((u) => u.state === t.state);
      return r.map((u, d) => {
        let v = "pending", m = "○";
        return d < c ? (v = "completed", m = "✓") : d === c && (v = "active", m = "⟳"), {
          ...u,
          status: v,
          icon: m
        };
      });
    });
    return (r, c) => (a(), R(Dt, { to: "body" }, [
      e.show ? (a(), i("div", xI, [
        s("div", SI, [
          c[1] || (c[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", II, [
            k(tc, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            s("div", EI, [
              s("div", TI, f(e.progress) + "%", 1),
              s("div", MI, f(o.value), 1)
            ]),
            s("div", PI, [
              (a(!0), i(G, null, ye(l.value, (u) => (a(), i("div", {
                key: u.state,
                class: Ue(["switch-step", u.status])
              }, [
                s("span", RI, f(u.icon), 1),
                s("span", LI, f(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : h("", !0)
    ]));
  }
}), DI = /* @__PURE__ */ Ce(NI, [["__scopeId", "data-v-768a5078"]]), OI = { class: "modal-header" }, AI = { class: "modal-body" }, UI = {
  key: 0,
  class: "node-section"
}, zI = { class: "node-list" }, VI = {
  key: 1,
  class: "node-section"
}, FI = { class: "node-list" }, BI = { class: "modal-actions" }, WI = /* @__PURE__ */ $e({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => (a(), R(Dt, { to: "body" }, [
      e.show ? (a(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => t.$emit("close"))
      }, [
        s("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = ft(() => {
          }, ["stop"]))
        }, [
          s("div", OI, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", AI, [
            o[8] || (o[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), i("div", UI, [
              o[6] || (o[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", zI, [
                (a(!0), i(G, null, ye(e.mismatchDetails.missing_nodes, (n) => (a(), i("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + f(n), 1))), 128))
              ])
            ])) : h("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), i("div", VI, [
              o[7] || (o[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", FI, [
                (a(!0), i(G, null, ye(e.mismatchDetails.extra_nodes, (n) => (a(), i("div", {
                  key: n,
                  class: "node-item remove"
                }, " - " + f(n), 1))), 128))
              ])
            ])) : h("", !0),
            o[9] || (o[9] = s("div", { class: "warning-box" }, [
              s("span", { class: "warning-icon" }, "⚠"),
              s("span", null, "This may take several minutes")
            ], -1))
          ]),
          s("div", BI, [
            k(Ie, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => t.$emit("close"))
            }, {
              default: g(() => [...o[10] || (o[10] = [
                C(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(Ie, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                C(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : h("", !0)
    ]));
  }
}), GI = /* @__PURE__ */ Ce(WI, [["__scopeId", "data-v-7cad7518"]]), jI = [
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
], $n = "v0.0.24", HI = "Akatz", qI = { class: "social-buttons" }, KI = ["title", "aria-label", "onClick"], JI = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, QI = ["d"], YI = ["title", "aria-label", "onClick"], XI = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, ZI = ["d"], e6 = /* @__PURE__ */ $e({
  __name: "SocialButtons",
  setup(e) {
    function t(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), i("div", qI, [
      (a(!0), i(G, null, ye(st(jI), (l) => (a(), i(G, {
        key: l.id
      }, [
        l.label ? (a(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          C(f(l.label) + " ", 1),
          (a(), i("svg", JI, [
            s("path", {
              d: l.iconPath
            }, null, 8, QI)
          ]))
        ], 8, KI)) : (a(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          (a(), i("svg", XI, [
            s("path", {
              d: l.iconPath
            }, null, 8, ZI)
          ]))
        ], 8, YI))
      ], 64))), 128))
    ]));
  }
}), uc = /* @__PURE__ */ Ce(e6, [["__scopeId", "data-v-4f846342"]]), t6 = { class: "footer-info" }, s6 = ["title"], o6 = {
  key: 0,
  class: "dev-badge"
}, n6 = { class: "made-by" }, a6 = /* @__PURE__ */ $e({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: t } = vt(), o = $(null), n = $(null), l = $(null), r = N(() => o.value === "development"), c = N(() => {
      var d;
      if (!r.value) return $n;
      const u = [n.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return u ? `${$n} (${u})` : `${$n} (development)`;
    });
    return rt(async () => {
      try {
        const u = await t();
        o.value = u.manager_source ?? null, n.value = u.manager_branch ?? null, l.value = u.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (u, d) => (a(), i("div", t6, [
      s("span", {
        class: "version",
        title: c.value
      }, [
        C(f(st($n)) + " ", 1),
        r.value ? (a(), i("span", o6, "dev")) : h("", !0)
      ], 8, s6),
      s("span", n6, [
        d[0] || (d[0] = C(" made with ", -1)),
        d[1] || (d[1] = s("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          s("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        C(" by " + f(st(HI)), 1)
      ])
    ]));
  }
}), dc = /* @__PURE__ */ Ce(a6, [["__scopeId", "data-v-4fa265b3"]]), l6 = /* @__PURE__ */ $e({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = $(null);
    async function n() {
      var r;
      await ((r = o.value) == null ? void 0 : r.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (r, c) => (a(), R(xt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => r.$emit("close"))
    }, {
      body: g(() => [
        k(Yr, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: g(() => {
        var u;
        return [
          k(Le, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: n
          }, {
            default: g(() => [...c[2] || (c[2] = [
              C(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(Le, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (d) => r.$emit("close"))
          }, {
            default: g(() => [...c[3] || (c[3] = [
              C(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), i6 = /* @__PURE__ */ Ce(l6, [["__scopeId", "data-v-fac00ae7"]]), r6 = { class: "header-actions" }, c6 = {
  key: 0,
  class: "wizard-step"
}, u6 = { class: "form-field" }, d6 = ["placeholder"], f6 = {
  key: 0,
  class: "form-error"
}, m6 = { class: "form-field form-field--checkbox" }, v6 = { class: "form-checkbox" }, p6 = {
  key: 0,
  class: "form-field"
}, g6 = ["placeholder"], h6 = {
  key: 0,
  class: "form-info"
}, y6 = {
  key: 1,
  class: "form-suggestion"
}, w6 = {
  key: 2,
  class: "form-error"
}, _6 = {
  key: 3,
  class: "form-info"
}, k6 = {
  key: 1,
  class: "wizard-step"
}, b6 = {
  key: 0,
  class: "progress-check-loading"
}, $6 = {
  key: 0,
  class: "cli-warning"
}, C6 = { class: "cli-warning-header" }, x6 = {
  key: 1,
  class: "env-landing"
}, S6 = { class: "env-list" }, I6 = ["value"], E6 = { class: "env-name" }, T6 = {
  key: 2,
  class: "env-create"
}, M6 = { class: "form-field" }, P6 = { class: "form-field" }, R6 = ["value"], L6 = { class: "form-field" }, N6 = ["disabled"], D6 = ["value"], O6 = { class: "form-field" }, A6 = ["value"], U6 = { class: "form-field form-field--checkbox" }, z6 = { class: "form-checkbox" }, V6 = {
  key: 0,
  class: "form-error"
}, F6 = {
  key: 1,
  class: "env-creating"
}, B6 = { class: "creating-intro" }, W6 = {
  key: 3,
  class: "env-import"
}, G6 = { class: "wizard-footer" }, j6 = { class: "wizard-footer-actions" }, mo = 10, H6 = 600 * 1e3, ki = 1800 * 1e3, q6 = /* @__PURE__ */ $e({
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
    const o = e, n = t, {
      initializeWorkspace: l,
      getInitializeProgress: r,
      validatePath: c,
      createEnvironment: u,
      getCreateProgress: d,
      getImportProgress: v,
      getComfyUIReleases: m
    } = vt(), p = $(o.initialStep || 1), w = $(null), y = $("landing"), _ = $(!1), x = $(!1), b = $(!1), S = $(!1), O = $(null), T = $(o.initialStep === 2), I = $(o.defaultPath), L = $(!!o.detectedModelsDir), A = $(o.detectedModelsDir || ""), Q = $(null), P = $(null), B = $(null), Y = $(null), ee = $("my-new-env"), ce = $(Zr), he = $("latest"), te = $(ec), K = $(!0), ie = $(null), De = $(null), oe = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), ge = $(!1), U = $(!1), me = $(!1), Re = $({ progress: 0, message: "" }), Be = $({ progress: 0, message: "" }), Se = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], H = $(0), X = $(null), E = $(0), M = $(null), ne = N(() => {
      var be, Qe;
      const pe = (be = I.value) == null ? void 0 : be.trim(), J = !Q.value, We = !L.value || !P.value && ((Qe = A.value) == null ? void 0 : Qe.trim());
      return pe && J && We;
    }), Ve = N(() => {
      var pe;
      return (pe = ee.value) == null ? void 0 : pe.trim();
    }), Ye = N(() => !!(p.value === 2 || De.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), D = N(() => De.value || o.workspacePath || null);
    async function q() {
      var pe;
      if (Q.value = null, !!((pe = I.value) != null && pe.trim()))
        try {
          const J = await c({ path: I.value, type: "workspace" });
          J.valid || (Q.value = J.error || "Invalid path");
        } catch (J) {
          Q.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function ue() {
      var pe;
      if (P.value = null, B.value = null, Y.value = null, !!((pe = A.value) != null && pe.trim()))
        try {
          const J = await c({ path: A.value, type: "models" });
          if (J.valid)
            Y.value = J.model_count ?? null;
          else if (P.value = J.error || "Invalid path", J.suggestion) {
            B.value = J.suggestion, A.value = J.suggestion, P.value = null;
            const We = await c({ path: J.suggestion, type: "models" });
            We.valid && (Y.value = We.model_count ?? null);
          }
        } catch (J) {
          P.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function Ee() {
      var pe, J, We, be, Qe;
      if (Q.value = null, P.value = null, await q(), (pe = Q.value) != null && pe.includes("already exists")) {
        Q.value = null, De.value = ((J = I.value) == null ? void 0 : J.trim()) || o.defaultPath, p.value = 2, ke();
        return;
      }
      if (!Q.value && !(L.value && ((We = A.value) != null && We.trim()) && (await ue(), P.value))) {
        U.value = !0;
        try {
          await l({
            workspace_path: ((be = I.value) == null ? void 0 : be.trim()) || o.defaultPath,
            models_directory: L.value && ((Qe = A.value) == null ? void 0 : Qe.trim()) || null
          }), H.value = 0, X.value = Date.now();
          const Ae = setInterval(async () => {
            var Pe;
            if (X.value && Date.now() - X.value > H6) {
              clearInterval(Ae), U.value = !1, Q.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const W = await r();
              if (H.value = 0, W.state === "idle" && U.value) {
                clearInterval(Ae), U.value = !1, Q.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Re.value = { progress: W.progress, message: W.message }, W.state === "complete" ? (clearInterval(Ae), U.value = !1, De.value = ((Pe = I.value) == null ? void 0 : Pe.trim()) || o.defaultPath, p.value = 2, ke()) : W.state === "error" && (clearInterval(Ae), U.value = !1, Q.value = W.error || "Workspace creation failed");
            } catch (W) {
              H.value++, console.warn(`Polling failure ${H.value}/${mo}:`, W), H.value >= mo && (clearInterval(Ae), U.value = !1, Q.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Ae) {
          U.value = !1, Q.value = Ae instanceof Error ? Ae.message : "Failed to create workspace";
        }
      }
    }
    async function _e() {
      me.value = !0, ie.value = null;
      try {
        const pe = {
          name: ee.value.trim() || "my-new-env",
          python_version: ce.value,
          comfyui_version: he.value,
          torch_backend: te.value,
          switch_after: K.value,
          workspace_path: De.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(pe)).status === "started") {
          E.value = 0, M.value = Date.now();
          const We = setInterval(async () => {
            if (M.value && Date.now() - M.value > ki) {
              clearInterval(We), me.value = !1, ie.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const be = await d();
              if (E.value = 0, be.state === "idle" && me.value) {
                clearInterval(We), me.value = !1, ie.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Be.value = {
                progress: be.progress ?? 0,
                message: be.message,
                phase: be.phase
              }, be.state === "complete") {
                clearInterval(We), me.value = !1;
                const Qe = be.environment_name || pe.name;
                K.value ? n("complete", Qe, De.value) : (y.value = "landing", n("environment-created-no-switch", Qe));
              } else be.state === "error" && (clearInterval(We), me.value = !1, ie.value = be.error || "Environment creation failed");
            } catch (be) {
              E.value++, console.warn(`Polling failure ${E.value}/${mo}:`, be), E.value >= mo && (clearInterval(We), me.value = !1, ie.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (pe) {
        me.value = !1, ie.value = pe instanceof Error ? pe.message : "Unknown error";
      }
    }
    async function ke() {
      ge.value = !0;
      try {
        oe.value = await m();
      } catch (pe) {
        console.error("Failed to load ComfyUI releases:", pe);
      } finally {
        ge.value = !1;
      }
    }
    function Ne() {
      w.value && n("switch-environment", w.value, De.value);
    }
    function Oe() {
      y.value === "create" || y.value === "import" ? y.value = "landing" : p.value === 2 && o.setupState === "no_workspace" && (p.value = 1);
    }
    function Me(pe, J) {
      x.value = !1, J ? n("complete", pe, De.value) : (n("environment-created-no-switch", pe), y.value = "landing");
    }
    function xe() {
    }
    rt(async () => {
      if (o.detectedModelsDir && (A.value = o.detectedModelsDir), o.workspacePath && (De.value = o.workspacePath), p.value === 2) {
        ke();
        const pe = setTimeout(() => {
          T.value = !1;
        }, 3e3);
        await je(), clearTimeout(pe), T.value = !1;
      }
    });
    async function je() {
      try {
        const pe = await d();
        if (console.log("[ComfyGit] Create progress check:", pe.state, pe), pe.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", pe.environment_name), y.value = "create", me.value = !0, ee.value = pe.environment_name || "my-new-env", Be.value = {
            progress: pe.progress ?? 0,
            message: pe.message,
            phase: pe.phase
          }, ze();
          return;
        }
      } catch (pe) {
        console.log("[ComfyGit] Create progress check failed:", pe);
      }
      try {
        const pe = await v();
        console.log("[ComfyGit] Import progress check:", pe.state, pe), pe.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", pe.environment_name), O.value = {
          message: pe.message || "Importing...",
          phase: pe.phase || "",
          progress: pe.progress ?? 0,
          environmentName: pe.environment_name || ""
        }, S.value = !0, y.value = "import", x.value = !0);
      } catch (pe) {
        console.log("[ComfyGit] Import progress check failed:", pe);
      }
    }
    async function ze() {
      E.value = 0, M.value = Date.now();
      let pe = null;
      const J = async () => {
        if (M.value && Date.now() - M.value > ki)
          return pe && clearInterval(pe), me.value = !1, ie.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const be = await d();
          if (E.value = 0, be.state === "idle" && me.value)
            return pe && clearInterval(pe), me.value = !1, ie.value = "Environment creation was interrupted. Please try again.", !1;
          if (Be.value = {
            progress: be.progress ?? 0,
            message: be.message,
            phase: be.phase
          }, be.state === "complete") {
            pe && clearInterval(pe), me.value = !1;
            const Qe = be.environment_name || ee.value;
            return n("complete", Qe, De.value), !1;
          } else if (be.state === "error")
            return pe && clearInterval(pe), me.value = !1, ie.value = be.error || "Environment creation failed", !1;
          return !0;
        } catch (be) {
          return E.value++, console.warn(`Polling failure ${E.value}/${mo}:`, be), E.value >= mo ? (pe && clearInterval(pe), me.value = !1, ie.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await J() && (pe = setInterval(async () => {
        !await J() && pe && clearInterval(pe);
      }, 2e3));
    }
    return (pe, J) => (a(), i(G, null, [
      k(xt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: J[15] || (J[15] = (We) => pe.$emit("close"))
      }, {
        header: g(() => [
          J[20] || (J[20] = s("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          s("div", r6, [
            k(uc),
            J[19] || (J[19] = s("span", { class: "header-divider" }, null, -1)),
            Ye.value ? (a(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: J[0] || (J[0] = (We) => _.value = !0)
            }, [...J[17] || (J[17] = [
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
            ])])) : h("", !0),
            s("button", {
              class: "icon-btn",
              onClick: J[1] || (J[1] = (We) => pe.$emit("close")),
              title: "Close"
            }, [...J[18] || (J[18] = [
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
        body: g(() => {
          var We;
          return [
            p.value === 1 ? (a(), i("div", c6, [
              J[24] || (J[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", u6, [
                J[21] || (J[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                Tt(s("input", {
                  "onUpdate:modelValue": J[2] || (J[2] = (be) => I.value = be),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, d6), [
                  [bo, I.value]
                ]),
                Q.value ? (a(), i("p", f6, f(Q.value), 1)) : h("", !0)
              ]),
              s("div", m6, [
                s("label", v6, [
                  Tt(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": J[3] || (J[3] = (be) => L.value = be)
                  }, null, 512), [
                    [Wn, L.value]
                  ]),
                  J[22] || (J[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              L.value ? (a(), i("div", p6, [
                J[23] || (J[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                Tt(s("input", {
                  "onUpdate:modelValue": J[4] || (J[4] = (be) => A.value = be),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, g6), [
                  [bo, A.value]
                ]),
                e.detectedModelsDir && !A.value ? (a(), i("p", h6, " Detected: " + f(e.detectedModelsDir), 1)) : h("", !0),
                B.value ? (a(), i("p", y6, " Did you mean: " + f(B.value), 1)) : h("", !0),
                P.value ? (a(), i("p", w6, f(P.value), 1)) : h("", !0),
                Y.value !== null && !P.value ? (a(), i("p", _6, " Found " + f(Y.value) + " model files ", 1)) : h("", !0)
              ])) : h("", !0),
              U.value ? (a(), R(jn, {
                key: 1,
                progress: Re.value.progress,
                message: Re.value.message
              }, null, 8, ["progress", "message"])) : h("", !0)
            ])) : h("", !0),
            p.value === 2 ? (a(), i("div", k6, [
              T.value ? (a(), i("div", b6, [...J[25] || (J[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), i(G, { key: 1 }, [
                !o.cliInstalled && !b.value ? (a(), i("div", $6, [
                  s("div", C6, [
                    J[27] || (J[27] = s("span", { class: "cli-warning-icon" }, "!", -1)),
                    J[28] || (J[28] = s("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    s("button", {
                      class: "cli-warning-close",
                      onClick: J[5] || (J[5] = (be) => b.value = !0),
                      title: "Dismiss"
                    }, [...J[26] || (J[26] = [
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
                  J[29] || (J[29] = s("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  J[30] || (J[30] = s("div", { class: "cli-warning-commands" }, [
                    s("code", null, "pipx install comfygit"),
                    s("span", { class: "cli-warning-or" }, "or"),
                    s("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : h("", !0),
                y.value === "landing" ? (a(), i("div", x6, [
                  J[34] || (J[34] = s("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  s("button", {
                    class: "landing-option",
                    onClick: J[6] || (J[6] = (be) => y.value = "create")
                  }, [...J[31] || (J[31] = [
                    s("span", { class: "option-icon" }, "➕", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Create New Environment"),
                      s("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  s("button", {
                    class: "landing-option",
                    onClick: J[7] || (J[7] = (be) => {
                      S.value = !1, y.value = "import";
                    })
                  }, [...J[32] || (J[32] = [
                    s("span", { class: "option-icon" }, "📦", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Import Environment"),
                      s("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (We = o.existingEnvironments) != null && We.length ? (a(), i(G, { key: 0 }, [
                    J[33] || (J[33] = s("div", { class: "landing-divider" }, [
                      s("span", null, "or switch to existing")
                    ], -1)),
                    s("div", S6, [
                      (a(!0), i(G, null, ye(o.existingEnvironments, (be) => (a(), i("label", {
                        key: be,
                        class: Ue(["env-option", { selected: w.value === be }])
                      }, [
                        Tt(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: be,
                          "onUpdate:modelValue": J[8] || (J[8] = (Qe) => w.value = Qe)
                        }, null, 8, I6), [
                          [Mn, w.value]
                        ]),
                        s("span", E6, f(be), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : h("", !0)
                ])) : y.value === "create" ? (a(), i("div", T6, [
                  me.value ? (a(), i("div", F6, [
                    s("p", B6, [
                      J[41] || (J[41] = C(" Creating environment ", -1)),
                      s("strong", null, f(ee.value), 1),
                      J[42] || (J[42] = C("... ", -1))
                    ]),
                    k(jn, {
                      progress: Be.value.progress,
                      message: Be.value.message,
                      "current-phase": Be.value.phase,
                      "show-steps": !0,
                      steps: Se
                    }, null, 8, ["progress", "message", "current-phase"]),
                    J[43] || (J[43] = s("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), i(G, { key: 0 }, [
                    J[40] || (J[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", M6, [
                      J[35] || (J[35] = s("label", { class: "form-label" }, "Environment Name", -1)),
                      Tt(s("input", {
                        "onUpdate:modelValue": J[9] || (J[9] = (be) => ee.value = be),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [bo, ee.value]
                      ])
                    ]),
                    s("div", P6, [
                      J[36] || (J[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": J[10] || (J[10] = (be) => ce.value = be),
                        class: "form-select"
                      }, [
                        (a(!0), i(G, null, ye(st(Xr), (be) => (a(), i("option", {
                          key: be,
                          value: be
                        }, f(be), 9, R6))), 128))
                      ], 512), [
                        [$o, ce.value]
                      ])
                    ]),
                    s("div", L6, [
                      J[37] || (J[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": J[11] || (J[11] = (be) => he.value = be),
                        class: "form-select",
                        disabled: ge.value
                      }, [
                        (a(!0), i(G, null, ye(oe.value, (be) => (a(), i("option", {
                          key: be.tag_name,
                          value: be.tag_name
                        }, f(be.name), 9, D6))), 128))
                      ], 8, N6), [
                        [$o, he.value]
                      ])
                    ]),
                    s("div", O6, [
                      J[38] || (J[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": J[12] || (J[12] = (be) => te.value = be),
                        class: "form-select"
                      }, [
                        (a(!0), i(G, null, ye(st(Cl), (be) => (a(), i("option", {
                          key: be,
                          value: be
                        }, f(be) + f(be === "auto" ? " (detect GPU)" : ""), 9, A6))), 128))
                      ], 512), [
                        [$o, te.value]
                      ])
                    ]),
                    s("div", U6, [
                      s("label", z6, [
                        Tt(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": J[13] || (J[13] = (be) => K.value = be)
                        }, null, 512), [
                          [Wn, K.value]
                        ]),
                        J[39] || (J[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    ie.value ? (a(), i("div", V6, f(ie.value), 1)) : h("", !0)
                  ], 64))
                ])) : y.value === "import" ? (a(), i("div", W6, [
                  k(oc, {
                    "workspace-path": De.value,
                    "resume-import": S.value,
                    "initial-progress": O.value ?? void 0,
                    onImportComplete: Me,
                    onImportStarted: J[14] || (J[14] = (be) => x.value = !0),
                    onSourceCleared: xe
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : h("", !0)
              ], 64))
            ])) : h("", !0)
          ];
        }),
        footer: g(() => [
          s("div", G6, [
            k(dc),
            s("div", j6, [
              p.value === 1 ? (a(), R(Le, {
                key: 0,
                variant: "primary",
                disabled: !ne.value || U.value,
                onClick: Ee
              }, {
                default: g(() => [
                  C(f(U.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (a(), i(G, { key: 1 }, [
                !me.value && !x.value && (y.value !== "landing" || o.setupState === "no_workspace" && !De.value) ? (a(), R(Le, {
                  key: 0,
                  variant: "secondary",
                  onClick: Oe
                }, {
                  default: g(() => [...J[44] || (J[44] = [
                    C(" Back ", -1)
                  ])]),
                  _: 1
                })) : h("", !0),
                y.value === "create" ? (a(), R(Le, {
                  key: 1,
                  variant: "primary",
                  disabled: !Ve.value || me.value,
                  onClick: _e
                }, {
                  default: g(() => [
                    C(f(me.value ? "Creating..." : K.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0),
                y.value === "landing" && w.value ? (a(), R(Le, {
                  key: 2,
                  variant: "primary",
                  onClick: Ne
                }, {
                  default: g(() => [
                    C(" Switch to " + f(w.value), 1)
                  ]),
                  _: 1
                })) : h("", !0)
              ], 64)) : h("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      _.value ? (a(), R(i6, {
        key: 0,
        "workspace-path": D.value,
        onClose: J[16] || (J[16] = (We) => _.value = !1)
      }, null, 8, ["workspace-path"])) : h("", !0)
    ], 64));
  }
}), K6 = /* @__PURE__ */ Ce(q6, [["__scopeId", "data-v-9a9aadc0"]]), J6 = { class: "update-banner" }, Q6 = { class: "update-banner__left" }, Y6 = { class: "update-banner__title" }, X6 = {
  key: 0,
  class: "update-banner__summary"
}, Z6 = { class: "update-banner__actions" }, eE = ["disabled"], tE = ["disabled"], sE = ["disabled"], oE = /* @__PURE__ */ $e({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: t }) {
    const o = t;
    return (n, l) => (a(), i("div", J6, [
      s("div", Q6, [
        s("div", Y6, " ComfyGit Manager v" + f(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (a(), i("div", X6, f(e.info.changelog_summary), 1)) : h("", !0)
      ]),
      s("div", Z6, [
        s("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, f(e.updating ? "Updating…" : "Update"), 9, eE),
        e.info.release_url ? (a(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, tE)) : h("", !0),
        s("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, sE)
      ])
    ]));
  }
}), nE = /* @__PURE__ */ Ce(oE, [["__scopeId", "data-v-49562c5c"]]), fc = "ComfyGit.UpdateNotice.DismissedVersion";
function aE() {
  try {
    return localStorage.getItem(fc);
  } catch {
    return null;
  }
}
function lE(e) {
  try {
    localStorage.setItem(fc, e);
  } catch {
  }
}
function iE(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : aE() !== e.latest_version;
}
const rE = { class: "comfygit-panel" }, cE = { class: "panel-header" }, uE = { class: "header-left" }, dE = {
  key: 0,
  class: "header-info"
}, fE = { class: "header-actions" }, mE = { class: "env-switcher" }, vE = { class: "env-switcher-header" }, pE = { class: "env-control-buttons" }, gE = {
  key: 0,
  class: "header-info"
}, hE = { class: "branch-name" }, yE = { class: "panel-main" }, wE = { class: "sidebar" }, _E = { class: "sidebar-content" }, kE = { class: "sidebar-section" }, bE = { class: "sidebar-section" }, $E = { class: "sidebar-section" }, CE = { class: "sidebar-footer" }, xE = { class: "content-area" }, SE = {
  key: 0,
  class: "error-message"
}, IE = {
  key: 1,
  class: "loading"
}, EE = { class: "dialog-content env-selector-dialog" }, TE = { class: "dialog-header" }, ME = { class: "dialog-body" }, PE = { class: "env-list" }, RE = { class: "env-info" }, LE = { class: "env-name-row" }, NE = { class: "env-indicator" }, DE = { class: "env-name" }, OE = {
  key: 0,
  class: "env-branch"
}, AE = {
  key: 1,
  class: "current-label"
}, UE = { class: "env-stats" }, zE = ["onClick"], VE = { class: "toast-container" }, FE = { class: "toast-message" }, bi = "ComfyGit.LastView", $i = "ComfyGit.LastSection", BE = /* @__PURE__ */ $e({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(e, { emit: t }) {
    const o = e, n = t, {
      getStatus: l,
      getHistory: r,
      getBranches: c,
      checkout: u,
      createBranch: d,
      switchBranch: v,
      deleteBranch: m,
      getEnvironments: p,
      switchEnvironment: w,
      getSwitchProgress: y,
      deleteEnvironment: _,
      syncEnvironmentManually: x,
      repairWorkflowModels: b,
      getSetupStatus: S,
      getUpdateCheck: O,
      updateManager: T
    } = vt(), I = Mv(), L = $(null), A = $([]), Q = $([]), P = $([]), B = N(() => P.value.find((le) => le.is_current)), Y = $(null), ee = $(!1), ce = $(!1), he = $("history"), te = $("manifest"), K = $(null), ie = $(!1), De = $(1), oe = N(() => {
      var le;
      return ((le = K.value) == null ? void 0 : le.state) || "managed";
    }), ge = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, U = N(() => {
      var le, Z;
      return ((Z = (le = K.value) == null ? void 0 : le.runtime_context) == null ? void 0 : Z.capabilities) || ge;
    }), me = $(!1), Re = $(null), Be = $(null), Se = $(!1), H = $(null), X = $(!1), E = $(!1), M = N(() => !X.value && iE(H.value)), ne = $(null), Ve = $(null), Ye = $(null), D = $(!1), q = $(!1), ue = $(""), Ee = $(null), _e = $({ state: "idle", progress: 0, message: "" });
    let ke = null, Ne = null;
    const Oe = {
      manifest: { view: "diagnostics", section: "diagnostics" },
      "debug-env": { view: "diagnostics", section: "diagnostics" },
      "debug-workspace": { view: "diagnostics", section: "diagnostics" },
      "debug-orchestrator": { view: "diagnostics", section: "diagnostics" },
      history: { view: "version-control", section: "version-control" },
      branches: { view: "version-control", section: "version-control" },
      remotes: { view: "version-control", section: "version-control" },
      status: { view: "status", section: "this-env" }
    }, Me = o.initialView ? Oe[o.initialView] : null, xe = [
      "status",
      "workflows",
      "models-env",
      "nodes",
      "version-control",
      "environments",
      "model-index",
      "settings",
      "diagnostics"
    ], je = ["this-env", "version-control", "workspace", "diagnostics"];
    function ze() {
      try {
        const le = sessionStorage.getItem(bi), Z = sessionStorage.getItem($i), Ge = le === "branches" || le === "history" || le === "remotes" ? "version-control" : le === "manifest" || le === "debug-env" || le === "debug-workspace" ? "diagnostics" : le, Xe = Z === "all-envs" ? "workspace" : Z === "sharing" ? "version-control" : Z;
        if (le && Z && xe.includes(Ge) && je.includes(Xe))
          return { view: Ge, section: Xe };
      } catch {
      }
      return null;
    }
    const pe = ze(), J = $((Me == null ? void 0 : Me.view) ?? (pe == null ? void 0 : pe.view) ?? "status"), We = $((Me == null ? void 0 : Me.section) ?? (pe == null ? void 0 : pe.section) ?? "this-env");
    function be(le, Z) {
      J.value = le, We.value = Z;
      try {
        sessionStorage.setItem(bi, le), sessionStorage.setItem($i, Z);
      } catch {
      }
    }
    function Qe(le) {
      const Ge = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" }
      }[le];
      Ge && be(Ge.view, Ge.section);
    }
    function Ae(le) {
      he.value = le, be("version-control", "version-control");
    }
    function Pe(le) {
      te.value = le, be("diagnostics", "diagnostics");
    }
    function W() {
      Ae("branches");
    }
    function de() {
      n("close"), setTimeout(() => {
        var Z;
        const le = document.querySelectorAll("button.comfyui-button");
        for (const Ge of le)
          if (((Z = Ge.textContent) == null ? void 0 : Z.trim()) === "Manager") {
            Ge.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ae = $(null), Ke = $(!1), F = $(!1), V = $([]);
    let se = 0;
    function ve(le, Z = "info", Ge = 3e3) {
      const Xe = ++se;
      return V.value.push({ id: Xe, message: le, type: Z }), Ge > 0 && setTimeout(() => {
        V.value = V.value.filter((pt) => pt.id !== Xe);
      }, Ge), Xe;
    }
    function Te(le) {
      V.value = V.value.filter((Z) => Z.id !== le);
    }
    function Je(le, Z) {
      ve(le, Z);
    }
    async function He() {
      H.value = null, X.value = !1;
      try {
        H.value = await O();
      } catch {
      }
    }
    function nt() {
      var Z;
      const le = (Z = H.value) == null ? void 0 : Z.release_url;
      if (le)
        try {
          window.open(le, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function yt() {
      var Z;
      const le = (Z = H.value) == null ? void 0 : Z.latest_version;
      le && lE(le), X.value = !0;
    }
    async function St() {
      var Z, Ge;
      if (E.value) return;
      E.value = !0;
      const le = ve("Updating comfygit-manager...", "info", 0);
      try {
        const Xe = await T();
        if (Te(le), Xe.status !== "success") {
          if (ve(Xe.message || "Update failed", "error"), Xe.manual_instructions) {
            const pt = Xe.manual_instructions.split(`
`).map((Et) => Et.trim()).filter(Boolean);
            ae.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: pt,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                ae.value = null;
              }
            };
          }
          return;
        }
        if (ve(Xe.message || "Update complete", "success"), yt(), Xe.restart_required) {
          Ut();
          try {
            await ((Ge = (Z = window.app) == null ? void 0 : Z.api) == null ? void 0 : Ge.fetchApi("/v2/manager/reboot"));
          } catch {
          }
        }
      } catch (Xe) {
        Te(le);
        const pt = Xe instanceof Error ? Xe.message : "Update failed";
        ve(pt, "error");
      } finally {
        E.value = !1;
      }
    }
    const re = N(() => {
      if (!L.value) return "neutral";
      const le = L.value.workflows, Z = le.new.length > 0 || le.modified.length > 0 || le.deleted.length > 0 || L.value.has_changes;
      return L.value.comparison.is_synced ? Z ? "warning" : "success" : "error";
    });
    N(() => L.value ? re.value === "success" ? "All synced" : re.value === "warning" ? "Uncommitted changes" : re.value === "error" ? "Not synced" : "" : "");
    async function z() {
      me.value = !0, Re.value = null;
      try {
        const [le, Z, Ge, Xe] = await Promise.all([
          l(!0),
          r(),
          c(),
          p()
        ]);
        L.value = le, A.value = Z.commits, Q.value = Ge.branches, P.value = Xe, n("statusUpdate", le), ne.value && await ne.value.loadWorkflows(!0);
      } catch (le) {
        Re.value = le instanceof Error ? le.message : "Failed to load status", L.value = null, A.value = [], Q.value = [];
      } finally {
        me.value = !1;
      }
    }
    function fe(le) {
      Be.value = le;
    }
    async function qe(le) {
      var Ge;
      Be.value = null;
      const Z = L.value && (L.value.workflows.new.length > 0 || L.value.workflows.modified.length > 0 || L.value.workflows.deleted.length > 0 || L.value.has_changes);
      ae.value = {
        title: Z ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: Z ? "You have uncommitted changes that will be lost." : `Checkout commit ${le.short_hash || ((Ge = le.hash) == null ? void 0 : Ge.slice(0, 7))}?`,
        details: Z ? pn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: Z ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: Z,
        onConfirm: async () => {
          var Et;
          ae.value = null, Ut();
          const Xe = ve(`Checking out ${le.short_hash || ((Et = le.hash) == null ? void 0 : Et.slice(0, 7))}...`, "info", 0), pt = await u(le.hash, Z);
          Te(Xe), pt.status === "success" ? ve("Restarting ComfyUI...", "success") : ve(pt.message || "Checkout failed", "error");
        }
      };
    }
    async function ct(le) {
      const Z = L.value && (L.value.workflows.new.length > 0 || L.value.workflows.modified.length > 0 || L.value.workflows.deleted.length > 0 || L.value.has_changes);
      ae.value = {
        title: Z ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: Z ? "You have uncommitted changes." : `Switch to branch "${le}"?`,
        details: Z ? pn() : void 0,
        warning: Z ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: Z ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ae.value = null, Ut();
          const Ge = ve(`Switching to ${le}...`, "info", 0), Xe = await v(le, Z);
          Te(Ge), Xe.status === "success" ? ve("Restarting ComfyUI...", "success") : ve(Xe.message || "Branch switch failed", "error");
        }
      };
    }
    async function It(le) {
      const Z = ve(`Creating branch ${le}...`, "info", 0), Ge = await d(le);
      Te(Z), Ge.status === "success" ? (ve(`Branch "${le}" created`, "success"), await z()) : ve(Ge.message || "Failed to create branch", "error");
    }
    async function at(le, Z = !1) {
      const Ge = async (Xe) => {
        var Et;
        const pt = ve(`Deleting branch ${le}...`, "info", 0);
        try {
          const rs = await m(le, Xe);
          Te(pt), rs.status === "success" ? (ve(`Branch "${le}" deleted`, "success"), await z()) : (Et = rs.message) != null && Et.includes("not fully merged") ? ae.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${le}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ae.value = null, await Ge(!0);
            }
          } : ve(rs.message || "Failed to delete branch", "error");
        } catch (rs) {
          Te(pt);
          const Ks = rs instanceof Error ? rs.message : "Failed to delete branch";
          Ks.includes("not fully merged") ? ae.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${le}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ae.value = null, await Ge(!0);
            }
          } : ve(Ks, "error");
        }
      };
      ae.value = {
        title: "Delete Branch",
        message: `Delete branch "${le}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ae.value = null, await Ge(Z);
        }
      };
    }
    async function $t(le) {
      Be.value = null;
      const Z = prompt("Enter branch name:");
      if (Z) {
        const Ge = ve(`Creating branch ${Z}...`, "info", 0), Xe = await d(Z, le.hash);
        Te(Ge), Xe.status === "success" ? (ve(`Branch "${Z}" created from ${le.short_hash}`, "success"), await z()) : ve(Xe.message || "Failed to create branch", "error");
      }
    }
    function Ut() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function xs() {
      if (!U.value.can_restart_current) {
        ve("Restart is not available in this runtime context.", "warning");
        return;
      }
      ae.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var le;
          ae.value = null, Ut(), ve("Restarting environment...", "info");
          try {
            (le = window.app) != null && le.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function la() {
      if (!U.value.can_stop_current) {
        ve("Stop is not available in this runtime context.", "warning");
        return;
      }
      ae.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var le;
          ae.value = null, ve("Stopping environment...", "info");
          try {
            (le = window.app) != null && le.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Us(le, Z) {
      if (!U.value.can_switch_environment) {
        ve("Environment switching is not available in this runtime context.", "warning");
        return;
      }
      Se.value = !1, ue.value = le, Ee.value = Z || null, D.value = !0;
    }
    async function ia() {
      D.value = !1, q.value = !0, Ut(), _e.value = {
        progress: 10,
        state: ro(10),
        message: co(10)
      };
      try {
        await w(ue.value, Ee.value || void 0), ra(), ca();
      } catch (le) {
        Ss(), q.value = !1, ve(`Failed to initiate switch: ${le instanceof Error ? le.message : "Unknown error"}`, "error"), _e.value = { state: "idle", progress: 0, message: "" }, Ee.value = null;
      }
    }
    function ro(le) {
      return le >= 100 ? "complete" : le >= 80 ? "validating" : le >= 60 ? "starting" : le >= 30 ? "syncing" : "preparing";
    }
    function co(le) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[ro(le)] || "";
    }
    function ra() {
      if (Ne) return;
      let le = 10;
      const Z = 60, Ge = 5e3, Xe = 100, pt = (Z - le) / (Ge / Xe);
      Ne = window.setInterval(() => {
        if (le += pt, le >= Z && (le = Z, Ss()), _e.value.progress < Z) {
          const Et = Math.floor(le);
          _e.value = {
            progress: Et,
            state: ro(Et),
            message: co(Et)
          };
        }
      }, Xe);
    }
    function Ss() {
      Ne && (clearInterval(Ne), Ne = null);
    }
    function ca() {
      ke || (ke = window.setInterval(async () => {
        try {
          let le = await I.getStatus();
          if ((!le || le.state === "idle") && (le = await y()), !le)
            return;
          const Z = le.progress || 0;
          Z >= 60 && Ss();
          const Ge = Math.max(Z, _e.value.progress), Xe = le.state && le.state !== "idle" && le.state !== "unknown", pt = Xe ? le.state : ro(Ge), Et = Xe && le.message || co(Ge);
          _e.value = {
            state: pt,
            progress: Ge,
            message: Et
          }, le.state === "complete" ? (Ss(), Lo(), q.value = !1, ve(`✓ Switched to ${ue.value}`, "success"), await z(), ue.value = "") : le.state === "rolled_back" ? (Ss(), Lo(), q.value = !1, ve("Switch failed, restored previous environment", "warning"), ue.value = "") : le.state === "critical_failure" && (Ss(), Lo(), q.value = !1, ve(`Critical error during switch: ${le.message}`, "error"), ue.value = "");
        } catch (le) {
          console.error("Failed to poll switch progress:", le);
        }
      }, 1e3));
    }
    function Lo() {
      Ss(), ke && (clearInterval(ke), ke = null);
    }
    function ua() {
      var le;
      D.value = !1, ue.value = "", (le = K.value) != null && le.state && K.value.state !== "managed" && (De.value = K.value.state === "no_workspace" ? 1 : 2, ie.value = !0);
    }
    async function da(le) {
      Ke.value = !1, await z(), ve(le.message, le.success ? "success" : "error");
    }
    async function fa() {
      F.value = !1;
      const le = ve("Syncing environment...", "info", 0);
      try {
        const Z = await x("skip", !0);
        if (Te(le), Z.status === "success") {
          const Ge = [];
          Z.nodes_installed.length && Ge.push(`${Z.nodes_installed.length} installed`), Z.nodes_removed.length && Ge.push(`${Z.nodes_removed.length} removed`);
          const Xe = Ge.length ? `: ${Ge.join(", ")}` : "";
          ve(`✓ Environment synced${Xe}`, "success"), await z();
        } else {
          const Ge = Z.errors.length ? Z.errors.join("; ") : Z.message;
          ve(`Sync failed: ${Ge}`, "error");
        }
      } catch (Z) {
        Te(le), ve(`Sync error: ${Z instanceof Error ? Z.message : "Unknown error"}`, "error");
      }
    }
    async function ma(le) {
      var Z;
      try {
        const Ge = await b(le);
        Ge.failed.length === 0 ? ve(`✓ Repaired ${Ge.success} workflow${Ge.success === 1 ? "" : "s"}`, "success") : ve(`Repaired ${Ge.success}, failed: ${Ge.failed.length}`, "warning"), await z();
      } catch (Ge) {
        ve(`Repair failed: ${Ge instanceof Error ? Ge.message : "Unknown error"}`, "error");
      } finally {
        (Z = Ye.value) == null || Z.resetRepairingState();
      }
    }
    async function vn() {
      var Z, Ge;
      const le = ve("Repairing environment...", "info", 0);
      try {
        const Xe = await x("skip", !0);
        if (Te(le), Xe.status === "success") {
          const pt = [];
          Xe.nodes_installed.length && pt.push(`${Xe.nodes_installed.length} installed`), Xe.nodes_removed.length && pt.push(`${Xe.nodes_removed.length} removed`);
          const Et = pt.length ? `: ${pt.join(", ")}` : "";
          ve(`✓ Environment repaired${Et}`, "success"), (Z = Ye.value) == null || Z.closeDetailModal(), await z();
        } else {
          const pt = Xe.errors.length ? Xe.errors.join(", ") : Xe.message || "Unknown error";
          ve(`Repair failed: ${pt}`, "error");
        }
      } catch (Xe) {
        Te(le), ve(`Repair error: ${Xe instanceof Error ? Xe.message : "Unknown error"}`, "error");
      } finally {
        (Ge = Ye.value) == null || Ge.resetRepairingEnvironmentState();
      }
    }
    async function va(le, Z) {
      ve(`Environment '${le}' created`, "success"), await z(), Ve.value && await Ve.value.loadEnvironments(), Z && U.value.can_switch_environment && await Us(le);
    }
    async function pa(le) {
      var Z;
      if (!U.value.can_delete_environment) {
        ve("Environment deletion is not available in this runtime context.", "warning");
        return;
      }
      if (((Z = B.value) == null ? void 0 : Z.name) === le) {
        ve("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      ae.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${le}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          ae.value = null;
          try {
            const Ge = await _(le);
            Ge.status === "success" ? (ve(`Environment "${le}" deleted`, "success"), await z(), Ve.value && await Ve.value.loadEnvironments()) : ve(Ge.message || "Failed to delete environment", "error");
          } catch (Ge) {
            ve(`Error deleting environment: ${Ge instanceof Error ? Ge.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ga(le, Z) {
      ie.value = !1;
      try {
        K.value = await S();
      } catch {
      }
      U.value.can_switch_environment && await Us(le, Z);
    }
    function ha() {
      ie.value = !1, n("close");
    }
    async function ya(le, Z) {
      await Us(le, Z);
    }
    async function wa(le) {
      ee.value = !1, await z(), await Us(le);
    }
    function _a() {
      Y.value = null, ee.value = !0;
    }
    function ka(le) {
      Y.value = le, ce.value = !0;
    }
    function ba() {
      ce.value = !1, Y.value = null;
    }
    async function $a(le) {
      K.value = await S(), console.log(`Environment '${le}' created. Available for switching.`);
    }
    function Ca() {
      if (!U.value.can_create_environment) {
        ve("Environment creation is not available in this runtime context.", "warning");
        return;
      }
      be("environments", "workspace"), setTimeout(() => {
        var le;
        (le = Ve.value) == null || le.openCreateModal();
      }, 100);
    }
    function pn() {
      if (!L.value) return [];
      const le = [], Z = L.value.workflows;
      return Z.new.length && le.push(`${Z.new.length} new workflow(s)`), Z.modified.length && le.push(`${Z.modified.length} modified workflow(s)`), Z.deleted.length && le.push(`${Z.deleted.length} deleted workflow(s)`), le;
    }
    return rt(async () => {
      try {
        if (K.value = await S(), K.value.state === "no_workspace" && U.value.can_initialize_workspace) {
          ie.value = !0, De.value = 1;
          return;
        }
        if (K.value.state === "empty_workspace" && U.value.can_create_environment) {
          ie.value = !0, De.value = 2;
          return;
        }
        if (K.value.state === "unmanaged" && U.value.can_switch_environment) {
          ie.value = !0, De.value = 2;
          return;
        }
      } catch (le) {
        console.warn("Setup status check failed, proceeding normally:", le);
      }
      await Promise.all([
        z(),
        He()
      ]);
    }), (le, Z) => {
      var Ge, Xe, pt, Et, rs, Ks, j, we, Fe, ut, Rt, jt, ps;
      return a(), i("div", rE, [
        s("div", cE, [
          s("div", uE, [
            Z[27] || (Z[27] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            L.value ? (a(), i("div", dE)) : h("", !0)
          ]),
          s("div", fE, [
            k(uc),
            Z[30] || (Z[30] = s("span", { class: "header-divider" }, null, -1)),
            s("button", {
              class: Ue(["icon-btn", { spinning: me.value }]),
              onClick: z,
              title: "Refresh"
            }, [...Z[28] || (Z[28] = [
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
              onClick: Z[0] || (Z[0] = (et) => n("close")),
              title: "Close"
            }, [...Z[29] || (Z[29] = [
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
        M.value && H.value ? (a(), R(nE, {
          key: 0,
          info: H.value,
          updating: E.value,
          onUpdate: St,
          onDismiss: yt,
          onReleaseNotes: nt
        }, null, 8, ["info", "updating"])) : h("", !0),
        s("div", mE, [
          s("div", vE, [
            Z[31] || (Z[31] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", pE, [
              U.value.can_restart_current ? (a(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: xs
              }, " Restart ")) : h("", !0),
              U.value.can_stop_current ? (a(), i("button", {
                key: 1,
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: la
              }, " Stop ")) : h("", !0)
            ])
          ]),
          s("button", {
            class: "env-switcher-btn",
            onClick: Z[1] || (Z[1] = (et) => be("environments", "workspace"))
          }, [
            L.value ? (a(), i("div", gE, [
              s("span", null, f(((Ge = B.value) == null ? void 0 : Ge.name) || ((Xe = L.value) == null ? void 0 : Xe.environment) || "Loading..."), 1),
              s("span", hE, "(" + f(L.value.branch || "detached") + ")", 1)
            ])) : h("", !0),
            Z[32] || (Z[32] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", yE, [
          s("div", wE, [
            s("div", _E, [
              s("div", kE, [
                Z[33] || (Z[33] = s("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                s("button", {
                  class: Ue(["sidebar-item", { active: J.value === "status" && We.value === "this-env" }]),
                  onClick: Z[2] || (Z[2] = (et) => be("status", "this-env"))
                }, " STATUS ", 2),
                s("button", {
                  class: Ue(["sidebar-item", { active: J.value === "workflows" }]),
                  onClick: Z[3] || (Z[3] = (et) => be("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                s("button", {
                  class: Ue(["sidebar-item", { active: J.value === "models-env" }]),
                  onClick: Z[4] || (Z[4] = (et) => be("models-env", "this-env"))
                }, " MODELS ", 2),
                s("button", {
                  class: Ue(["sidebar-item", { active: J.value === "nodes" }]),
                  onClick: Z[5] || (Z[5] = (et) => be("nodes", "this-env"))
                }, " NODES ", 2),
                s("button", {
                  class: Ue(["sidebar-item", { active: J.value === "version-control" }]),
                  onClick: Z[6] || (Z[6] = (et) => Ae("history"))
                }, " VERSION CONTROL ", 2)
              ]),
              Z[36] || (Z[36] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", bE, [
                Z[34] || (Z[34] = s("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                s("button", {
                  class: Ue(["sidebar-item", { active: J.value === "environments" }]),
                  onClick: Z[7] || (Z[7] = (et) => be("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                s("button", {
                  class: Ue(["sidebar-item", { active: J.value === "model-index" }]),
                  onClick: Z[8] || (Z[8] = (et) => be("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                s("button", {
                  class: Ue(["sidebar-item", { active: J.value === "settings" }]),
                  onClick: Z[9] || (Z[9] = (et) => be("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              Z[37] || (Z[37] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", $E, [
                Z[35] || (Z[35] = s("div", { class: "sidebar-section-title" }, "DIAGNOSTICS", -1)),
                s("button", {
                  class: Ue(["sidebar-item", { active: J.value === "diagnostics" && te.value === "manifest" }]),
                  onClick: Z[10] || (Z[10] = (et) => Pe("manifest"))
                }, " MANIFEST ", 2),
                s("button", {
                  class: Ue(["sidebar-item", { active: J.value === "diagnostics" && te.value !== "manifest" }]),
                  onClick: Z[11] || (Z[11] = (et) => Pe("env"))
                }, " LOGGING ", 2)
              ])
            ]),
            s("div", CE, [
              k(dc)
            ])
          ]),
          s("div", xE, [
            Re.value ? (a(), i("div", SE, f(Re.value), 1)) : !L.value && J.value === "status" ? (a(), i("div", IE, " Loading status... ")) : (a(), i(G, { key: 2 }, [
              J.value === "status" ? (a(), R(Iv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: Ye,
                status: L.value,
                "setup-state": oe.value,
                onSwitchBranch: W,
                onCommitChanges: Z[12] || (Z[12] = (et) => Ke.value = !0),
                onSyncEnvironment: Z[13] || (Z[13] = (et) => F.value = !0),
                onViewWorkflows: Z[14] || (Z[14] = (et) => be("workflows", "this-env")),
                onViewHistory: Z[15] || (Z[15] = (et) => Ae("history")),
                onViewDebug: Z[16] || (Z[16] = (et) => Pe("env")),
                onViewNodes: Z[17] || (Z[17] = (et) => be("nodes", "this-env")),
                onRepairMissingModels: ma,
                onRepairEnvironment: vn,
                onStartSetup: Z[18] || (Z[18] = (et) => ie.value = !0),
                onViewEnvironments: Z[19] || (Z[19] = (et) => be("environments", "workspace")),
                onCreateEnvironment: Ca
              }, null, 8, ["status", "setup-state"])) : J.value === "workflows" ? (a(), R(Ew, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: ne,
                onRefresh: z
              }, null, 512)) : J.value === "models-env" ? (a(), R(Wk, {
                key: 2,
                onNavigate: Qe
              })) : J.value === "version-control" ? (a(), R(t4, {
                key: 3,
                commits: A.value,
                "current-ref": (pt = L.value) == null ? void 0 : pt.branch,
                branches: Q.value,
                current: ((Et = L.value) == null ? void 0 : Et.branch) || null,
                "initial-tab": he.value,
                onSelect: fe,
                onCheckout: qe,
                onSwitch: ct,
                onCreate: It,
                onDelete: at,
                onToast: Je
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : J.value === "nodes" ? (a(), R(Ob, {
                key: 4,
                "version-mismatches": ((Ks = (rs = L.value) == null ? void 0 : rs.comparison) == null ? void 0 : Ks.version_mismatches) || [],
                onOpenNodeManager: de,
                onRepairEnvironment: vn,
                onToast: Je
              }, null, 8, ["version-mismatches"])) : J.value === "diagnostics" ? (a(), R(p4, {
                key: 5,
                "initial-tab": te.value
              }, null, 8, ["initial-tab"])) : J.value === "environments" ? (a(), R(D$, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: Ve,
                "can-create": U.value.can_create_environment,
                "can-switch": U.value.can_switch_environment,
                "can-delete": U.value.can_delete_environment,
                onSwitch: Us,
                onCreated: va,
                onDelete: pa,
                onImport: _a,
                onExport: ka
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : J.value === "model-index" ? (a(), R(ob, {
                key: 7,
                onRefresh: z
              })) : J.value === "settings" ? (a(), R(c2, { key: 8 })) : h("", !0)
            ], 64))
          ])
        ]),
        Be.value ? (a(), R(L4, {
          key: 1,
          commit: Be.value,
          onClose: Z[20] || (Z[20] = (et) => Be.value = null),
          onCheckout: qe,
          onCreateBranch: $t
        }, null, 8, ["commit"])) : h("", !0),
        ae.value ? (a(), R($l, {
          key: 2,
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
          onCancel: Z[21] || (Z[21] = (et) => ae.value = null),
          onSecondary: ae.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : h("", !0),
        ee.value ? (a(), R(xt, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: Z[22] || (Z[22] = (et) => ee.value = !1)
        }, {
          body: g(() => [
            k(I3, {
              embedded: "",
              onImportCompleteSwitch: wa
            })
          ]),
          _: 1
        })) : h("", !0),
        ce.value ? (a(), R(xt, {
          key: 4,
          title: Y.value ? `EXPORT ENVIRONMENT: ${Y.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "lg",
          "fixed-height": "",
          onClose: ba
        }, {
          body: g(() => [
            k(RC, {
              embedded: "",
              "environment-name": Y.value
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : h("", !0),
        k(CI, {
          show: D.value,
          "from-environment": ((j = B.value) == null ? void 0 : j.name) || "unknown",
          "to-environment": ue.value,
          onConfirm: ia,
          onClose: ua
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Ke.value && L.value ? (a(), R(cc, {
          key: 5,
          status: L.value,
          "as-modal": !0,
          onClose: Z[23] || (Z[23] = (et) => Ke.value = !1),
          onCommitted: da
        }, null, 8, ["status"])) : h("", !0),
        F.value && L.value ? (a(), R(GI, {
          key: 6,
          show: F.value,
          "mismatch-details": {
            missing_nodes: L.value.comparison.missing_nodes,
            extra_nodes: L.value.comparison.extra_nodes
          },
          onConfirm: fa,
          onClose: Z[24] || (Z[24] = (et) => F.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : h("", !0),
        k(DI, {
          show: q.value,
          state: _e.value.state,
          progress: _e.value.progress,
          message: _e.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        Se.value ? (a(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: Z[26] || (Z[26] = ft((et) => Se.value = !1, ["self"]))
        }, [
          s("div", EE, [
            s("div", TE, [
              Z[39] || (Z[39] = s("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              s("button", {
                class: "icon-btn",
                onClick: Z[25] || (Z[25] = (et) => Se.value = !1)
              }, [...Z[38] || (Z[38] = [
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
            s("div", ME, [
              Z[40] || (Z[40] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", PE, [
                (a(!0), i(G, null, ye(P.value, (et) => (a(), i("div", {
                  key: et.name,
                  class: Ue(["env-item", { current: et.is_current }])
                }, [
                  s("div", RE, [
                    s("div", LE, [
                      s("span", NE, f(et.is_current ? "●" : "○"), 1),
                      s("span", DE, f(et.name), 1),
                      et.current_branch ? (a(), i("span", OE, "(" + f(et.current_branch) + ")", 1)) : h("", !0),
                      et.is_current ? (a(), i("span", AE, "CURRENT")) : h("", !0)
                    ]),
                    s("div", UE, f(et.workflow_count) + " workflows • " + f(et.node_count) + " nodes ", 1)
                  ]),
                  !et.is_current && U.value.can_switch_environment ? (a(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (xa) => Us(et.name)
                  }, " SWITCH ", 8, zE)) : h("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : h("", !0),
        ie.value ? (a(), R(K6, {
          key: 8,
          "default-path": ((we = K.value) == null ? void 0 : we.default_path) || "~/comfygit",
          "detected-models-dir": ((Fe = K.value) == null ? void 0 : Fe.detected_models_dir) || null,
          "initial-step": De.value,
          "existing-environments": ((ut = K.value) == null ? void 0 : ut.environments) || [],
          "cli-installed": ((Rt = K.value) == null ? void 0 : Rt.cli_installed) ?? !0,
          "setup-state": ((jt = K.value) == null ? void 0 : jt.state) || "no_workspace",
          "workspace-path": ((ps = K.value) == null ? void 0 : ps.workspace_path) || null,
          onComplete: ga,
          onClose: ha,
          onSwitchEnvironment: ya,
          onEnvironmentCreatedNoSwitch: $a
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : h("", !0),
        s("div", VE, [
          k(Ud, { name: "toast" }, {
            default: g(() => [
              (a(!0), i(G, null, ye(V.value, (et) => (a(), i("div", {
                key: et.id,
                class: Ue(["toast", et.type])
              }, [
                s("span", FE, f(et.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), WE = /* @__PURE__ */ Ce(BE, [["__scopeId", "data-v-b64af5ce"]]), GE = { class: "item-header" }, jE = { class: "item-info" }, HE = { class: "filename" }, qE = { class: "metadata" }, KE = { class: "size" }, JE = {
  key: 0,
  class: "type"
}, QE = { class: "item-actions" }, YE = {
  key: 0,
  class: "progress-section"
}, XE = { class: "progress-bar" }, ZE = { class: "progress-stats" }, eT = { class: "downloaded" }, tT = { class: "speed" }, sT = {
  key: 0,
  class: "eta"
}, oT = {
  key: 1,
  class: "status-msg paused"
}, nT = {
  key: 2,
  class: "status-msg queued"
}, aT = {
  key: 3,
  class: "status-msg completed"
}, lT = {
  key: 4,
  class: "status-msg failed"
}, iT = {
  key: 0,
  class: "retries"
}, rT = /* @__PURE__ */ $e({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: t }) {
    const o = t;
    function n(c) {
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
    return (c, u) => (a(), i("div", {
      class: Ue(["download-item", `status-${e.item.status}`])
    }, [
      s("div", GE, [
        s("div", jE, [
          s("div", HE, f(e.item.filename), 1),
          s("div", qE, [
            s("span", KE, f(n(e.item.size)), 1),
            e.item.type ? (a(), i("span", JE, f(e.item.type), 1)) : h("", !0)
          ])
        ]),
        s("div", QE, [
          e.item.status === "queued" || e.item.status === "downloading" ? (a(), i("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (d) => o("cancel")),
            title: "Cancel"
          }, " × ")) : h("", !0),
          e.item.status === "paused" ? (a(), i("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (d) => o("resume")),
            title: "Resume"
          }, " ▶ ")) : h("", !0),
          e.item.status === "failed" ? (a(), i("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (d) => o("retry")),
            title: "Retry"
          }, " ↻ ")) : h("", !0),
          e.item.status === "completed" || e.item.status === "failed" || e.item.status === "paused" ? (a(), i("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (d) => o("remove")),
            title: "Remove"
          }, " × ")) : h("", !0)
        ])
      ]),
      e.item.status === "downloading" ? (a(), i("div", YE, [
        s("div", XE, [
          s("div", {
            class: "progress-fill",
            style: Wt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", ZE, [
          s("span", eT, f(n(e.item.downloaded)) + " / " + f(n(e.item.size)), 1),
          s("span", tT, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), i("span", sT, f(r(e.item.eta)), 1)) : h("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), i("div", oT, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), i("div", nT, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), i("div", aT, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), i("div", lT, [
        C(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), i("span", iT, "(" + f(e.item.retries) + " retries)", 1)) : h("", !0)
      ])) : h("", !0)
    ], 2));
  }
}), Ao = /* @__PURE__ */ Ce(rT, [["__scopeId", "data-v-2110df65"]]), cT = { class: "queue-title" }, uT = { class: "count" }, dT = { class: "queue-actions" }, fT = { class: "action-label" }, mT = {
  key: 0,
  class: "overall-progress"
}, vT = { class: "progress-bar" }, pT = {
  key: 0,
  class: "current-mini"
}, gT = { class: "filename" }, hT = { class: "speed" }, yT = {
  key: 1,
  class: "queue-content"
}, wT = {
  key: 0,
  class: "section"
}, _T = {
  key: 1,
  class: "section"
}, kT = { class: "section-header" }, bT = { class: "section-label paused" }, $T = { class: "items-list" }, CT = {
  key: 2,
  class: "section"
}, xT = { class: "section-header" }, ST = { class: "section-label" }, IT = { class: "items-list" }, ET = {
  key: 3,
  class: "section"
}, TT = { class: "section-header" }, MT = { class: "section-label" }, PT = { class: "items-list" }, RT = {
  key: 4,
  class: "section"
}, LT = { class: "section-header" }, NT = { class: "section-label failed" }, DT = { class: "items-list" }, OT = /* @__PURE__ */ $e({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: t,
      currentDownload: o,
      queuedItems: n,
      completedItems: l,
      failedItems: r,
      pausedItems: c,
      hasItems: u,
      activeCount: d,
      cancelDownload: v,
      retryDownload: m,
      resumeDownload: p,
      resumeAllPaused: w,
      removeItem: y,
      clearCompleted: _
    } = Ro(), x = $(!1);
    let b = null;
    kt(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (I, L) => {
        b && (clearTimeout(b), b = null);
        const A = I.active === 0 && I.failed === 0 && I.paused === 0 && I.completed > 0, Q = L && (L.active > 0 || L.paused > 0);
        A && Q && (b = setTimeout(() => {
          _(), b = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const S = N(() => {
      var A;
      if (t.items.length === 0) return 0;
      const I = l.value.length, L = ((A = o.value) == null ? void 0 : A.progress) || 0;
      return Math.round((I + L / 100) / t.items.length * 100);
    });
    function O(I) {
      v(I);
    }
    function T(I) {
      return I === 0 ? "..." : `${(I / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (I, L) => (a(), R(Dt, { to: "body" }, [
      st(u) ? (a(), i("div", {
        key: 0,
        class: Ue(["model-download-queue", { minimized: !x.value }])
      }, [
        s("div", {
          class: "queue-header",
          onClick: L[0] || (L[0] = (A) => x.value = !x.value)
        }, [
          s("div", cT, [
            L[4] || (L[4] = s("span", { class: "icon" }, "↓", -1)),
            L[5] || (L[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", uT, "(" + f(st(d)) + "/" + f(st(t).items.length) + ")", 1)
          ]),
          s("div", dT, [
            s("span", fT, f(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (a(), i("div", yT, [
          st(o) ? (a(), i("div", wT, [
            L[6] || (L[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            k(Ao, {
              item: st(o),
              onCancel: L[1] || (L[1] = (A) => O(st(o).id))
            }, null, 8, ["item"])
          ])) : h("", !0),
          st(c).length > 0 ? (a(), i("div", _T, [
            s("div", kT, [
              s("span", bT, "Paused (" + f(st(c).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: L[2] || (L[2] = //@ts-ignore
                (...A) => st(w) && st(w)(...A))
              }, "Resume All")
            ]),
            s("div", $T, [
              (a(!0), i(G, null, ye(st(c), (A) => (a(), R(Ao, {
                key: A.id,
                item: A,
                onResume: (Q) => st(p)(A.id),
                onRemove: (Q) => st(y)(A.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : h("", !0),
          st(n).length > 0 ? (a(), i("div", CT, [
            s("div", xT, [
              s("span", ST, "Queued (" + f(st(n).length) + ")", 1)
            ]),
            s("div", IT, [
              (a(!0), i(G, null, ye(st(n), (A) => (a(), R(Ao, {
                key: A.id,
                item: A,
                onCancel: (Q) => O(A.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : h("", !0),
          st(l).length > 0 ? (a(), i("div", ET, [
            s("div", TT, [
              s("span", MT, "Completed (" + f(st(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: L[3] || (L[3] = //@ts-ignore
                (...A) => st(_) && st(_)(...A))
              }, "Clear")
            ]),
            s("div", PT, [
              (a(!0), i(G, null, ye(st(l).slice(0, 3), (A) => (a(), R(Ao, {
                key: A.id,
                item: A,
                onRemove: (Q) => st(y)(A.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : h("", !0),
          st(r).length > 0 ? (a(), i("div", RT, [
            s("div", LT, [
              s("span", NT, "Failed (" + f(st(r).length) + ")", 1)
            ]),
            s("div", DT, [
              (a(!0), i(G, null, ye(st(r), (A) => (a(), R(Ao, {
                key: A.id,
                item: A,
                onRetry: (Q) => st(m)(A.id),
                onRemove: (Q) => st(y)(A.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : h("", !0)
        ])) : (a(), i("div", mT, [
          s("div", vT, [
            s("div", {
              class: "progress-fill",
              style: Wt({ width: `${S.value}%` })
            }, null, 4)
          ]),
          st(o) ? (a(), i("div", pT, [
            s("span", gT, f(st(o).filename), 1),
            s("span", hT, f(T(st(o).speed)), 1)
          ])) : h("", !0)
        ]))
      ], 2)) : h("", !0)
    ]));
  }
}), AT = /* @__PURE__ */ Ce(OT, [["__scopeId", "data-v-3a3c9607"]]), UT = { class: "detail-header" }, zT = { class: "item-count" }, VT = { class: "resource-list" }, FT = { class: "item-info" }, BT = { class: "item-name" }, WT = {
  key: 0,
  class: "item-subtitle"
}, GT = {
  key: 0,
  class: "installing-badge"
}, jT = ["title"], HT = {
  key: 2,
  class: "installed-badge"
}, qT = {
  key: 3,
  class: "queued-badge"
}, KT = {
  key: 4,
  class: "action-buttons"
}, JT = {
  key: 1,
  class: "no-action"
}, QT = /* @__PURE__ */ $e({
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
    const o = e, n = t, l = N(() => o.items.filter((y) => y.canAction)), r = N(() => l.value.length > 0 && l.value.every(
      (y) => {
        var _, x;
        return o.queuedItems.has(y.id) || ((_ = o.installedItems) == null ? void 0 : _.has(y.id)) || ((x = o.failedItems) == null ? void 0 : x.has(y.id));
      }
    )), c = N(() => r.value ? "All Queued" : o.itemType === "models" ? "Download All" : "Install All");
    function u(y) {
      return o.queuedItems.has(y.id);
    }
    function d(y) {
      return o.installingItem === y.id;
    }
    function v(y) {
      var _;
      return ((_ = o.installedItems) == null ? void 0 : _.has(y.id)) ?? !1;
    }
    function m(y) {
      var _;
      return ((_ = o.failedItems) == null ? void 0 : _.has(y.id)) ?? !1;
    }
    function p(y) {
      var _;
      return ((_ = o.failedItems) == null ? void 0 : _.get(y.id)) || "Unknown error";
    }
    function w(y) {
      return y.actions && y.actions.length > 0 ? y.actions : [{
        key: "default",
        label: o.itemType === "models" ? "Download" : "Install",
        variant: "secondary"
      }];
    }
    return (y, _) => (a(), R(xt, {
      title: e.title,
      size: "md",
      onClose: _[2] || (_[2] = (x) => n("close"))
    }, {
      body: g(() => [
        s("div", UT, [
          s("span", zT, f(e.items.length) + " " + f(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (a(), R(Le, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: _[0] || (_[0] = (x) => n("bulk-action"))
          }, {
            default: g(() => [
              C(f(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : h("", !0)
        ]),
        s("div", VT, [
          (a(!0), i(G, null, ye(e.items, (x) => (a(), i("div", {
            key: x.id,
            class: "resource-item"
          }, [
            s("div", FT, [
              s("span", BT, f(x.name), 1),
              x.subtitle ? (a(), i("span", WT, f(x.subtitle), 1)) : h("", !0)
            ]),
            x.canAction ? (a(), i(G, { key: 0 }, [
              d(x) ? (a(), i("span", GT, "Installing...")) : m(x) ? (a(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(x)
              }, "Failed ⚠", 8, jT)) : v(x) ? (a(), i("span", HT, "Installed")) : u(x) ? (a(), i("span", qT, "Queued")) : (a(), i("div", KT, [
                (a(!0), i(G, null, ye(w(x), (b) => (a(), R(Le, {
                  key: `${x.id}-${b.key}`,
                  size: "sm",
                  variant: b.variant || "secondary",
                  onClick: (S) => n("action", x, b.key)
                }, {
                  default: g(() => [
                    C(f(b.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (a(), i("span", JT, f(x.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: g(() => [
        k(Le, {
          variant: "secondary",
          onClick: _[1] || (_[1] = (x) => n("close"))
        }, {
          default: g(() => [..._[3] || (_[3] = [
            C("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), YT = /* @__PURE__ */ Ce(QT, [["__scopeId", "data-v-ec7e9202"]]), XT = {
  key: 0,
  class: "loading-state"
}, ZT = {
  key: 1,
  class: "analysis-results"
}, e7 = {
  key: 0,
  class: "section"
}, t7 = { class: "section-header" }, s7 = { class: "section-title" }, o7 = { class: "item-list" }, n7 = { class: "package-info" }, a7 = { class: "package-name" }, l7 = { class: "node-count" }, i7 = {
  key: 1,
  class: "installing-badge"
}, r7 = {
  key: 2,
  class: "queued-badge"
}, c7 = ["title"], u7 = {
  key: 4,
  class: "installed-badge"
}, d7 = {
  key: 1,
  class: "section"
}, f7 = { class: "section-header" }, m7 = { class: "section-title" }, v7 = { class: "item-list" }, p7 = { class: "node-type" }, g7 = {
  key: 0,
  class: "overflow-note"
}, h7 = {
  key: 2,
  class: "section"
}, y7 = { class: "section-header" }, w7 = { class: "section-title" }, _7 = { class: "item-list" }, k7 = { class: "node-type" }, b7 = { class: "not-found" }, $7 = {
  key: 0,
  class: "overflow-note"
}, C7 = {
  key: 3,
  class: "section"
}, x7 = { class: "section-header" }, S7 = { class: "section-title" }, I7 = { class: "item-list" }, E7 = { class: "package-info community-info" }, T7 = { class: "community-title-row" }, M7 = { class: "package-name" }, P7 = { class: "node-count" }, R7 = { class: "community-mapping-note" }, L7 = { key: 0 }, N7 = {
  key: 0,
  class: "community-actions"
}, D7 = {
  key: 1,
  class: "installing-badge"
}, O7 = {
  key: 2,
  class: "queued-badge"
}, A7 = ["title"], U7 = {
  key: 4,
  class: "installed-badge"
}, z7 = ["title"], V7 = {
  key: 1,
  class: "no-url"
}, F7 = {
  key: 4,
  class: "section"
}, B7 = { class: "section-header" }, W7 = { class: "section-title" }, G7 = { class: "item-list" }, j7 = { class: "model-info" }, H7 = { class: "model-name" }, q7 = {
  key: 1,
  class: "queued-badge"
}, K7 = {
  key: 1,
  class: "no-url"
}, J7 = { class: "dont-show-again" }, Q7 = 3e4, Y7 = /* @__PURE__ */ $e({
  __name: "MissingResourcesPopup",
  setup(e) {
    const t = $(!1), o = $(null), n = $(null), l = $(!1), r = $(/* @__PURE__ */ new Set()), c = $(/* @__PURE__ */ new Set()), u = $(/* @__PURE__ */ new Map()), d = $(/* @__PURE__ */ new Set()), v = $(!1), m = $(null), p = $(0), w = $(null), y = $(/* @__PURE__ */ new Set()), _ = $(/* @__PURE__ */ new Map()), x = $(/* @__PURE__ */ new Map()), { addToQueue: b } = Ro(), { queueNodeInstall: S } = vt(), O = N(() => {
      var W;
      return ((W = n.value) == null ? void 0 : W.package_aliases) || {};
    });
    function T(W) {
      if (!W) return null;
      const de = O.value;
      let ae = W;
      const Ke = /* @__PURE__ */ new Set();
      for (; de[ae] && !Ke.has(ae); )
        Ke.add(ae), ae = de[ae];
      return ae;
    }
    function I(W, de) {
      return W instanceof Error && W.message ? W.message : typeof W == "string" && W.trim().length > 0 ? W : de;
    }
    function L(W) {
      for (const [de, ae] of _.value.entries())
        ae === W && _.value.delete(de);
    }
    function A(W) {
      if (!x.value.has(W)) return;
      const de = x.value.get(W);
      clearTimeout(de), x.value.delete(W);
    }
    function Q() {
      for (const W of x.value.values())
        clearTimeout(W);
      x.value = /* @__PURE__ */ new Map();
    }
    function P(W) {
      A(W);
      const de = setTimeout(() => {
        if (x.value.delete(W), !c.value.has(W)) return;
        L(W), c.value.delete(W), m.value === W && (m.value = null), u.value.set(W, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", W);
      }, Q7);
      x.value.set(W, de);
    }
    function B(W) {
      const de = `Cannot install "${W.title}" - package_id is missing`;
      u.value.set(W.item_id, de), o.value = de, console.warn("[ComfyGit] Community install requested without package_id:", W);
    }
    const Y = N(() => ee.value.length > 0 || he.value.length > 0 || te.value.length > 0 || K.value.length > 0 || U.value.length > 0), ee = N(() => {
      var ae, Ke;
      if (!((ae = n.value) != null && ae.nodes)) return [];
      const W = /* @__PURE__ */ new Map(), de = (n.value.nodes.resolved || []).filter((F) => {
        var V;
        return !F.is_installed && ((V = F.package) == null ? void 0 : V.package_id);
      });
      for (const F of de) {
        const V = T(F.package.package_id);
        if (!V) continue;
        W.has(V) || W.set(V, {
          package_id: V,
          title: F.package.title || V,
          node_count: 0,
          node_types: [],
          repository: F.package.repository || null,
          latest_version: F.package.latest_version || null
        });
        const se = W.get(V);
        se.node_count++, se.node_types.push(((Ke = F.reference) == null ? void 0 : Ke.node_type) || F.node_type);
      }
      return Array.from(W.values());
    }), ce = N(() => ee.value.reduce((W, de) => W + de.node_count, 0)), he = N(() => {
      var W;
      return (W = n.value) != null && W.nodes ? (n.value.nodes.unresolved || []).map((de) => {
        var ae;
        return {
          node_type: ((ae = de.reference) == null ? void 0 : ae.node_type) || de.node_type
        };
      }) : [];
    }), te = N(() => {
      var de;
      if (!((de = n.value) != null && de.nodes)) return [];
      const W = n.value.node_guidance || {};
      return (n.value.nodes.version_gated || []).map((ae) => {
        var F;
        const Ke = ((F = ae.reference) == null ? void 0 : F.node_type) || ae.node_type;
        return {
          node_type: Ke,
          guidance: ae.guidance || W[Ke] || null
        };
      });
    }), K = N(() => {
      var ae, Ke, F, V, se, ve, Te, Je;
      if (!((ae = n.value) != null && ae.nodes)) return [];
      const W = n.value.node_guidance || {}, de = /* @__PURE__ */ new Map();
      for (const He of n.value.nodes.uninstallable || []) {
        const nt = ((Ke = He.reference) == null ? void 0 : Ke.node_type) || He.node_type, yt = T(((F = He.package) == null ? void 0 : F.package_id) || null), St = yt || `node:${nt}`;
        de.has(St) || de.set(St, {
          item_id: St,
          node_type: nt,
          title: ((V = He.package) == null ? void 0 : V.title) || yt || nt,
          node_count: 0,
          package_id: yt,
          repository: ((se = He.package) == null ? void 0 : se.repository) || null,
          latest_version: ((ve = He.package) == null ? void 0 : ve.latest_version) || null,
          guidance: He.guidance || W[nt] || null
        });
        const re = de.get(St);
        re.node_count++, re.guidance || (re.guidance = He.guidance || W[nt] || null), !re.repository && ((Te = He.package) != null && Te.repository) && (re.repository = He.package.repository), !re.latest_version && ((Je = He.package) != null && Je.latest_version) && (re.latest_version = He.package.latest_version);
      }
      return Array.from(de.values());
    }), ie = N(() => K.value.filter((W) => !!W.package_id)), De = N(() => K.value.length >= 5 ? K.value.slice(0, 4) : K.value), oe = N(() => ie.value.length > 0 && ie.value.every((W) => {
      const de = W.package_id;
      return r.value.has(de) || c.value.has(de) || u.value.has(de);
    }));
    function ge(W) {
      const de = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return W.repository && de.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), de;
    }
    const U = N(() => {
      var F;
      if (!((F = n.value) != null && F.models)) return [];
      const W = (n.value.models.resolved || []).filter(
        (V) => V.match_type === "download_intent" || V.match_type === "property_download_intent" || V.match_type === "not_found"
      ).map((V) => {
        var se, ve, Te, Je;
        return {
          filename: ((ve = (se = V.reference) == null ? void 0 : se.widget_value) == null ? void 0 : ve.split("/").pop()) || ((Te = V.reference) == null ? void 0 : Te.widget_value) || V.widget_value,
          widget_value: ((Je = V.reference) == null ? void 0 : Je.widget_value) || V.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: V.download_source || null,
          targetPath: V.target_path || null,
          canDownload: !!(V.download_source && V.target_path)
        };
      }), de = (n.value.models.unresolved || []).map((V) => {
        var se, ve, Te, Je;
        return {
          filename: ((ve = (se = V.reference) == null ? void 0 : se.widget_value) == null ? void 0 : ve.split("/").pop()) || ((Te = V.reference) == null ? void 0 : Te.widget_value) || V.widget_value,
          widget_value: ((Je = V.reference) == null ? void 0 : Je.widget_value) || V.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), ae = /* @__PURE__ */ new Map(), Ke = [];
      for (const V of W) {
        if (!V.url) {
          Ke.push(V);
          continue;
        }
        const se = `${V.filename}::${V.url}`, ve = ae.get(se);
        if (!ve) {
          ae.set(se, V);
          continue;
        }
        !ve.targetPath && V.targetPath && (ve.targetPath = V.targetPath), !ve.canDownload && V.canDownload && (ve.canDownload = V.canDownload);
      }
      return [...ae.values(), ...Ke, ...de];
    }), me = N(() => U.value.filter((W) => W.canDownload)), Re = N(() => ee.value.length >= 5 ? ee.value.slice(0, 4) : ee.value), Be = N(() => U.value.length >= 5 ? U.value.slice(0, 4) : U.value), Se = N(() => ee.value.length > 0 && ee.value.every(
      (W) => r.value.has(W.package_id) || c.value.has(W.package_id) || u.value.has(W.package_id)
    )), H = N(() => me.value.length > 0 && me.value.every((W) => d.value.has(W.url))), X = N(() => ee.value.length > 0 || ie.value.length > 0 || me.value.length > 0), E = N(() => {
      const W = (ee.value.length === 0 || Se.value) && (ie.value.length === 0 || oe.value), de = me.value.length === 0 || H.value;
      return W && de;
    }), M = N(() => w.value === "models" ? `Missing Models (${U.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${ce.value})` : w.value === "community" ? `Community-Mapped Packages (${K.value.length})` : ""), ne = N(() => w.value === "models" ? U.value.map((W) => ({
      id: W.url || W.widget_value,
      name: W.filename,
      canAction: W.canDownload,
      actionDisabledReason: W.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? ee.value.map((W) => ({
      id: W.package_id,
      name: W.title,
      subtitle: `(${W.node_count} ${W.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : w.value === "community" ? K.value.map((W) => ({
      id: W.package_id || W.item_id,
      name: W.title,
      subtitle: `(${W.node_count} ${W.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!W.package_id,
      actionDisabledReason: W.package_id ? void 0 : "Manual setup required",
      actions: W.package_id ? ge(W) : []
    })) : []);
    function Ve(W, de) {
      if (w.value === "models") {
        const ae = U.value.find((Ke) => Ke.url === W.id || Ke.widget_value === W.id);
        ae && Ee(ae);
      } else if (w.value === "packages") {
        const ae = ee.value.find((Ke) => Ke.package_id === W.id);
        ae && D(ae);
      } else if (w.value === "community") {
        const ae = K.value.find((F) => (F.package_id || F.item_id) === W.id);
        if (!ae) return;
        if (!ae.package_id) {
          B({ item_id: ae.item_id, title: ae.title });
          return;
        }
        q(ae, de === "install_git" ? "git" : "registry");
      }
    }
    function Ye() {
      w.value === "models" ? Ne() : w.value === "packages" ? _e() : w.value === "community" && ke();
    }
    async function D(W) {
      return ue(W.package_id, W.latest_version, "registry");
    }
    async function q(W, de) {
      return W.package_id ? ue(W.package_id, W.latest_version, de, W.repository) : (B({ item_id: W.item_id, title: W.title }), !1);
    }
    async function ue(W, de, ae, Ke) {
      const F = T(W) || W, V = de || "latest";
      if (r.value.has(F) || c.value.has(F) || u.value.has(F))
        return !0;
      Ae(), m.value = F;
      let se = null;
      try {
        const ve = {
          id: F,
          version: V,
          selected_version: V,
          mode: "remote",
          channel: "default"
        };
        ae === "git" && Ke && (ve.repository = Ke, ve.install_source = "git");
        const { ui_id: Te } = await S(ve, {
          beforeQueueStart: (Je) => {
            se = Je, _.value.set(Je, F), c.value.add(F), P(F), console.log("[ComfyGit] Registered pending install:", {
              ui_id: Je,
              packageId: F,
              pendingInstalls: Array.from(_.value.entries())
            });
          }
        });
        return se || (se = Te, _.value.set(Te, F), c.value.add(F), P(F), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: Te,
          packageId: F,
          pendingInstalls: Array.from(_.value.entries())
        })), !0;
      } catch (ve) {
        const Te = I(ve, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", ve), se && _.value.delete(se), L(F), A(F), c.value.delete(F), u.value.set(F, Te), !1;
      } finally {
        m.value = null;
      }
    }
    function Ee(W) {
      !W.url || !W.targetPath || d.value.has(W.url) || (b([{
        workflow: "unsaved",
        filename: W.filename,
        url: W.url,
        targetPath: W.targetPath
      }]), d.value.add(W.url));
    }
    async function _e() {
      const W = { attempted: 0, failed: 0 };
      for (const de of ee.value)
        !r.value.has(de.package_id) && !c.value.has(de.package_id) && !u.value.has(de.package_id) && (W.attempted++, await D(de) || W.failed++);
      return W;
    }
    async function ke() {
      const W = { attempted: 0, failed: 0 };
      for (const de of ie.value) {
        const ae = de.package_id;
        !r.value.has(ae) && !c.value.has(ae) && !u.value.has(ae) && (W.attempted++, await q(de, "registry") || W.failed++);
      }
      return W;
    }
    function Ne() {
      const W = me.value.filter(
        (de) => !d.value.has(de.url)
      );
      if (W.length === 0) return 0;
      b(W.map((de) => ({
        workflow: "unsaved",
        filename: de.filename,
        url: de.url,
        targetPath: de.targetPath
      })));
      for (const de of W)
        d.value.add(de.url);
      return W.length;
    }
    async function Oe() {
      const W = await _e(), de = await ke();
      Ne();
      const ae = W.attempted + de.attempted, Ke = W.failed + de.failed;
      if (ae > 0 && Ke > 0) {
        const F = ae - Ke;
        o.value = `${F} of ${ae} installs queued, ${Ke} failed`;
      }
    }
    function Me() {
      v.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function xe(W) {
      var F, V;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const de = W == null ? void 0 : W.id;
      if (de && y.value.has(de)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${de} this session`);
        return;
      }
      const ae = window.app, Ke = (F = ae == null ? void 0 : ae.extensionManager) == null ? void 0 : F.workflow;
      if (Ke) {
        let Te = !1;
        for (let Je = 0; Je < 20; Je++) {
          const He = Ke.activeWorkflow;
          if (!He) {
            await new Promise((St) => setTimeout(St, 50));
            continue;
          }
          const nt = (V = He.activeState) == null ? void 0 : V.id;
          if (!(de && nt === de)) {
            Je < 19 && await new Promise((St) => setTimeout(St, 50));
            continue;
          }
          if (Te = !0, He.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${He.filename}`), de && y.value.add(de);
            return;
          }
          break;
        }
        Te || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      t.value = !0, o.value = null, Q(), r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), v.value = !1, p.value = 0;
      try {
        const se = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: W, name: "unsaved" })
        });
        if (!se.ok) {
          const ve = await se.json();
          throw new Error(ve.error || "Failed to analyze workflow");
        }
        n.value = await se.json(), Y.value && (l.value = !0, de && y.value.add(de));
      } catch (se) {
        console.error("[ComfyGit] Failed to analyze workflow:", se);
      } finally {
        t.value = !1;
      }
    }
    function je() {
      Q(), l.value = !1, n.value = null;
    }
    function ze(W) {
      const { workflow: de } = W.detail;
      de && xe(de);
    }
    function pe(W) {
      var Ke;
      const de = (Ke = W.detail) == null ? void 0 : Ke.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: de,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: W.detail
      });
      const ae = _.value.get(de);
      ae ? (A(ae), m.value = ae, console.log("[ComfyGit] Installing package:", ae)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", de);
    }
    function J(W) {
      var F, V, se, ve, Te, Je, He;
      const de = (F = W.detail) == null ? void 0 : F.ui_id, ae = (se = (V = W.detail) == null ? void 0 : V.status) == null ? void 0 : se.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: de,
        status: ae,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: W.detail
      });
      const Ke = _.value.get(de);
      if (Ke) {
        if (A(Ke), _.value.delete(de), c.value.delete(Ke), m.value === Ke && (m.value = null), ae === "success")
          r.value.add(Ke), p.value++, console.log("[ComfyGit] Package installed successfully:", Ke);
        else {
          const nt = ((Je = (Te = (ve = W.detail) == null ? void 0 : ve.status) == null ? void 0 : Te.messages) == null ? void 0 : Je[0]) || ((He = W.detail) == null ? void 0 : He.result) || "Unknown error";
          u.value.set(Ke, nt), console.error("[ComfyGit] Package install failed:", Ke, nt);
        }
        _.value.size === 0 && p.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", p.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: p.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", de);
    }
    let We = null;
    function be() {
      var W;
      return We || (We = (W = window.app) == null ? void 0 : W.api), We;
    }
    let Qe = !1;
    function Ae() {
      if (Qe) return !0;
      const W = be();
      return W ? (W.addEventListener("cm-task-started", pe), W.addEventListener("cm-task-completed", J), W.addEventListener("comfygit:workflow-changed", Pe), Qe = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function Pe(W) {
      const { change_type: de } = W.detail;
      (de === "created" || de === "modified") && l.value && (Q(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return rt(() => {
      window.addEventListener("comfygit:workflow-loaded", ze);
    }), Mo(() => {
      if (Q(), window.removeEventListener("comfygit:workflow-loaded", ze), Qe) {
        const W = be();
        W && (W.removeEventListener("cm-task-started", pe), W.removeEventListener("cm-task-completed", J), W.removeEventListener("comfygit:workflow-changed", Pe)), Qe = !1;
      }
    }), (W, de) => (a(), i(G, null, [
      l.value ? (a(), R(xt, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: t.value,
        error: o.value || void 0,
        onClose: je
      }, {
        body: g(() => [
          t.value ? (a(), i("div", XT, [...de[5] || (de[5] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("span", null, "Analyzing workflow...", -1)
          ])])) : n.value && Y.value ? (a(), i("div", ZT, [
            ee.value.length > 0 ? (a(), i("div", e7, [
              s("div", t7, [
                s("span", s7, "Missing Custom Nodes (" + f(ce.value) + ")", 1),
                ee.value.length > 1 ? (a(), R(Le, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: Se.value,
                  onClick: _e
                }, {
                  default: g(() => [
                    C(f(Se.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              s("div", o7, [
                (a(!0), i(G, null, ye(Re.value, (ae) => (a(), i("div", {
                  key: ae.package_id,
                  class: "package-item"
                }, [
                  s("div", n7, [
                    s("span", a7, f(ae.title), 1),
                    s("span", l7, "(" + f(ae.node_count) + " " + f(ae.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(ae.package_id) && !c.value.has(ae.package_id) && !u.value.has(ae.package_id) ? (a(), R(Le, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: m.value === ae.package_id,
                    onClick: (Ke) => D(ae)
                  }, {
                    default: g(() => [
                      C(f(m.value === ae.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : m.value === ae.package_id ? (a(), i("span", i7, "Installing...")) : c.value.has(ae.package_id) ? (a(), i("span", r7, "Queued")) : u.value.has(ae.package_id) ? (a(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(ae.package_id)
                  }, "Failed ⚠", 8, c7)) : (a(), i("span", u7, "Installed"))
                ]))), 128)),
                ee.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: de[0] || (de[0] = (ae) => w.value = "packages")
                }, [
                  s("span", null, "Show all " + f(ee.value.length) + " packages...", 1),
                  de[6] || (de[6] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            he.value.length > 0 ? (a(), i("div", d7, [
              s("div", f7, [
                s("span", m7, "Unknown Nodes (" + f(he.value.length) + ")", 1)
              ]),
              s("div", v7, [
                (a(!0), i(G, null, ye(he.value.slice(0, 5), (ae) => (a(), i("div", {
                  key: ae.node_type,
                  class: "item"
                }, [
                  s("code", p7, f(ae.node_type), 1),
                  de[7] || (de[7] = s("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                he.value.length > 5 ? (a(), i("div", g7, " ...and " + f(he.value.length - 5) + " more ", 1)) : h("", !0)
              ])
            ])) : h("", !0),
            te.value.length > 0 ? (a(), i("div", h7, [
              s("div", y7, [
                s("span", w7, "Requires Newer ComfyUI (" + f(te.value.length) + ")", 1)
              ]),
              s("div", _7, [
                (a(!0), i(G, null, ye(te.value.slice(0, 5), (ae) => (a(), i("div", {
                  key: `vg-${ae.node_type}`,
                  class: "item"
                }, [
                  s("code", k7, f(ae.node_type), 1),
                  s("span", b7, f(ae.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                te.value.length > 5 ? (a(), i("div", $7, " ...and " + f(te.value.length - 5) + " more ", 1)) : h("", !0)
              ])
            ])) : h("", !0),
            K.value.length > 0 ? (a(), i("div", C7, [
              s("div", x7, [
                s("span", S7, "Community-Mapped Packages (" + f(K.value.length) + ")", 1),
                ie.value.length > 1 ? (a(), R(Le, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: oe.value,
                  onClick: ke
                }, {
                  default: g(() => [
                    C(f(oe.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              s("div", I7, [
                (a(!0), i(G, null, ye(De.value, (ae) => (a(), i("div", {
                  key: `community-${ae.item_id}`,
                  class: "package-item"
                }, [
                  s("div", E7, [
                    s("div", T7, [
                      s("span", M7, f(ae.title), 1),
                      s("span", P7, "(" + f(ae.node_count) + " " + f(ae.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    s("div", R7, [
                      de[8] || (de[8] = C(" Found via community mapping — registry metadata may be incomplete", -1)),
                      ae.guidance ? (a(), i("span", L7, ". " + f(ae.guidance), 1)) : h("", !0)
                    ])
                  ]),
                  ae.package_id ? (a(), i(G, { key: 0 }, [
                    !r.value.has(ae.package_id) && !c.value.has(ae.package_id) && !u.value.has(ae.package_id) ? (a(), i("div", N7, [
                      k(Le, {
                        size: "sm",
                        variant: "secondary",
                        disabled: m.value === ae.package_id,
                        onClick: (Ke) => q(ae, "registry")
                      }, {
                        default: g(() => [
                          C(f(m.value === ae.package_id ? "Queueing..." : "Install"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]),
                      ae.repository ? (a(), R(Le, {
                        key: 0,
                        size: "sm",
                        variant: "ghost",
                        disabled: m.value === ae.package_id,
                        onClick: (Ke) => q(ae, "git")
                      }, {
                        default: g(() => [...de[9] || (de[9] = [
                          C(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : h("", !0)
                    ])) : m.value === ae.package_id ? (a(), i("span", D7, "Installing...")) : c.value.has(ae.package_id) ? (a(), i("span", O7, "Queued")) : u.value.has(ae.package_id) ? (a(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get(ae.package_id)
                    }, "Failed ⚠", 8, A7)) : (a(), i("span", U7, "Installed"))
                  ], 64)) : (a(), i(G, { key: 1 }, [
                    u.value.has(ae.item_id) ? (a(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: u.value.get(ae.item_id)
                    }, "Failed ⚠", 8, z7)) : (a(), i("span", V7, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                K.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: de[1] || (de[1] = (ae) => w.value = "community")
                }, [
                  s("span", null, "Show all " + f(K.value.length) + " packages...", 1),
                  de[10] || (de[10] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            U.value.length > 0 ? (a(), i("div", F7, [
              s("div", B7, [
                s("span", W7, "Missing Models (" + f(U.value.length) + ")", 1),
                me.value.length > 1 ? (a(), R(Le, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: H.value,
                  onClick: Ne
                }, {
                  default: g(() => [
                    C(f(H.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              s("div", G7, [
                (a(!0), i(G, null, ye(Be.value, (ae) => (a(), i("div", {
                  key: ae.widget_value,
                  class: "model-item"
                }, [
                  s("div", j7, [
                    s("span", H7, f(ae.filename), 1)
                  ]),
                  ae.canDownload ? (a(), i(G, { key: 0 }, [
                    d.value.has(ae.url) ? (a(), i("span", q7, "Queued")) : (a(), R(Le, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ke) => Ee(ae)
                    }, {
                      default: g(() => [...de[11] || (de[11] = [
                        C(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (a(), i("span", K7, "Manual download required"))
                ]))), 128)),
                U.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: de[2] || (de[2] = (ae) => w.value = "models")
                }, [
                  s("span", null, "Show all " + f(U.value.length) + " models...", 1),
                  de[12] || (de[12] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            s("div", J7, [
              k(Hn, {
                modelValue: v.value,
                "onUpdate:modelValue": [
                  de[3] || (de[3] = (ae) => v.value = ae),
                  Me
                ]
              }, {
                default: g(() => [...de[13] || (de[13] = [
                  C(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : h("", !0)
        ]),
        footer: g(() => [
          k(Le, {
            variant: "secondary",
            onClick: je
          }, {
            default: g(() => [...de[14] || (de[14] = [
              C("Dismiss", -1)
            ])]),
            _: 1
          }),
          X.value ? (a(), R(Le, {
            key: 0,
            variant: "primary",
            disabled: E.value,
            onClick: Oe
          }, {
            default: g(() => [
              C(f(E.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : h("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : h("", !0),
      w.value ? (a(), R(YT, {
        key: 1,
        title: M.value,
        items: ne.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : c.value,
        "installed-items": w.value === "models" ? void 0 : r.value,
        "failed-items": w.value === "models" ? void 0 : u.value,
        "installing-item": w.value === "models" ? void 0 : m.value,
        onClose: de[4] || (de[4] = (ae) => w.value = null),
        onAction: Ve,
        onBulkAction: Ye
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : h("", !0)
    ], 64));
  }
}), X7 = /* @__PURE__ */ Ce(Y7, [["__scopeId", "data-v-dfb55c3f"]]), Z7 = {
  key: 0,
  class: "io-mapping-root"
}, eM = { class: "io-mapping-visual-layer" }, tM = { class: "io-mapping-header" }, sM = { class: "io-mapping-header-main" }, oM = { class: "io-mapping-subtitle" }, nM = {
  key: 0,
  class: "io-mapping-hover-summary"
}, aM = { class: "io-mapping-header-actions" }, lM = { class: "io-mapping-sidebar" }, iM = { class: "io-mapping-sidebar-scroll" }, rM = {
  key: 0,
  class: "io-state-block"
}, cM = {
  key: 1,
  class: "io-state-block io-state-error"
}, uM = { class: "contract-meta-section" }, dM = { class: "contract-meta-toggle-icon" }, fM = {
  key: 0,
  class: "contract-meta-body"
}, mM = { class: "contract-summary" }, vM = { class: "summary-pill" }, pM = { class: "summary-pill" }, gM = { class: "summary-pill" }, hM = { class: "mapping-section" }, yM = { class: "section-header" }, wM = {
  key: 0,
  class: "empty-message"
}, _M = ["onClick"], kM = { class: "item-card-title" }, bM = { class: "item-card-meta" }, $M = { class: "item-card-summary" }, CM = { key: 0 }, xM = { class: "mapping-section" }, SM = { class: "section-header" }, IM = {
  key: 0,
  class: "empty-message"
}, EM = ["onClick"], TM = { class: "item-card-title" }, MM = { class: "item-card-meta" }, PM = { class: "item-card-summary" }, RM = { class: "io-mapping-footer" }, LM = { class: "io-mapping-footer-left" }, NM = { class: "io-mapping-footer-right" }, DM = /* @__PURE__ */ $e({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const t = e, { getWorkflowContract: o, saveWorkflowContract: n, deleteWorkflowContract: l } = vt(), r = $(!1), c = $(""), u = $(!1), d = $(!1), v = $(!1), m = $(null), p = $(null), w = $(null), y = $(!1), _ = $(!1), x = $(null), b = $(null), S = $(0), O = $(null), T = $(null);
    let I = null;
    const L = [
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
    ], Q = N(() => {
      var F;
      return ((F = p.value) == null ? void 0 : F.contract_summary.has_contract) === !0;
    }), P = N(() => {
      if (!w.value)
        return { inputs: [], outputs: [] };
      const F = w.value.default_contract || "default";
      return w.value.contracts[F] || (w.value.contracts[F] = { inputs: [], outputs: [] }), w.value.contracts[F];
    }), B = N(() => {
      var V;
      const F = ((V = p.value) == null ? void 0 : V.contract_summary.status) ?? "none";
      return F === "valid" ? "Valid Contract" : F === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function Y(F) {
      return F ? JSON.parse(JSON.stringify(F)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function ee(F) {
      return F === "integer" || F === "number";
    }
    function ce(F) {
      return F === "enum";
    }
    function he(F) {
      return F == null ? "" : String(F);
    }
    function te(F) {
      const V = F.trim();
      if (!V) return;
      const se = Number(V);
      return Number.isFinite(se) ? se : void 0;
    }
    function K(F) {
      return (F || []).join(`
`);
    }
    function ie(F) {
      return F.split(/[\n,]/).map((V) => V.trim()).filter(Boolean);
    }
    function De(F) {
      return typeof F == "string" ? F.length > 24 ? `${F.slice(0, 24)}...` : F : String(F);
    }
    function oe(F) {
      return F == null ? "" : String(F);
    }
    function ge(F) {
      var se;
      const V = (se = F == null ? void 0 : F.options) == null ? void 0 : se.values;
      return Array.isArray(V) ? V.map((ve) => String(ve)).filter(Boolean) : [];
    }
    function U(F, V) {
      var Te;
      const se = (Te = F == null ? void 0 : F.options) == null ? void 0 : Te[V];
      if (se == null || se === "") return;
      const ve = Number(se);
      return Number.isFinite(ve) ? ve : void 0;
    }
    function me(F, V) {
      return F.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || V;
    }
    function Re(F) {
      if (!w.value) return;
      const V = F.trim() || "default";
      w.value.default_contract = V, w.value.contracts[V] || (w.value.contracts[V] = { inputs: [], outputs: [] });
    }
    function Be(F) {
      const V = String(F ?? "").toLowerCase();
      return V.includes("image") ? "image" : V.includes("video") ? "video" : V.includes("audio") ? "audio" : V.includes("int") ? "integer" : V.includes("float") || V.includes("double") || V.includes("number") ? "number" : V.includes("bool") ? "boolean" : V.includes("combo") || V.includes("enum") ? "enum" : V.includes("string") || V.includes("text") ? "string" : "file";
    }
    function Se(F) {
      P.value.inputs.splice(F, 1), x.value === F && (x.value = null);
    }
    function H(F) {
      P.value.outputs.splice(F, 1), b.value === F && (b.value = null);
    }
    function X(F) {
      x.value = x.value === F ? null : F, x.value != null && (b.value = null);
    }
    function E(F) {
      b.value = b.value === F ? null : F, b.value != null && (x.value = null);
    }
    function M(F) {
      const V = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(F)) : String(F);
      return document.querySelector(`[data-node-id="${V}"]`);
    }
    function ne(F) {
      return F instanceof Element ? !!F.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function Ve(F) {
      var ve, Te, Je, He, nt, yt;
      if (!(F instanceof Element)) return null;
      const V = F.closest("[data-node-id]"), se = V == null ? void 0 : V.getAttribute("data-node-id");
      return se ? ((Je = (Te = (ve = t.comfyApp) == null ? void 0 : ve.graph) == null ? void 0 : Te.getNodeById) == null ? void 0 : Je.call(Te, se)) ?? ((yt = (nt = (He = t.comfyApp) == null ? void 0 : He.rootGraph) == null ? void 0 : nt.getNodeById) == null ? void 0 : yt.call(nt, se)) ?? null : null;
    }
    function Ye(F, V) {
      if (V == null || V < 0) return null;
      const se = M(F);
      return se ? se.querySelectorAll('[data-testid="node-widget"]')[V] ?? null : null;
    }
    function D(F) {
      return !F || F.width <= 0 || F.height <= 0 ? null : {
        left: `${F.left}px`,
        top: `${F.top}px`,
        width: `${F.width}px`,
        height: `${F.height}px`
      };
    }
    function q(F) {
      const V = M((F == null ? void 0 : F.id) ?? "");
      if (V) return V.getBoundingClientRect();
      const se = t.comfyApp;
      if (!F || typeof (se == null ? void 0 : se.canvasPosToClientPos) != "function") return null;
      const Te = se.canvasPosToClientPos([F.pos[0], F.pos[1] - 32]), Je = se.canvasPosToClientPos([F.pos[0] + F.size[0], F.pos[1] + F.size[1]]);
      return !Te || !Je ? null : new DOMRect(Te[0], Te[1], Je[0] - Te[0], Je[1] - Te[1]);
    }
    function ue(F) {
      var nt, yt, St, re, z, fe, qe;
      const V = Ye(F.node_id, F.widget_idx);
      if (V) return V.getBoundingClientRect();
      const se = ((St = (yt = (nt = t.comfyApp) == null ? void 0 : nt.graph) == null ? void 0 : yt.getNodeById) == null ? void 0 : St.call(yt, String(F.node_id))) ?? ((fe = (z = (re = t.comfyApp) == null ? void 0 : re.rootGraph) == null ? void 0 : z.getNodeById) == null ? void 0 : fe.call(z, String(F.node_id)));
      if (!se || typeof F.widget_idx != "number" || !Array.isArray(se.widgets)) return null;
      const ve = se.widgets[F.widget_idx];
      if (!ve || typeof ((qe = t.comfyApp) == null ? void 0 : qe.canvasPosToClientPos) != "function") return q(se);
      const Te = 10, Je = t.comfyApp.canvasPosToClientPos([se.pos[0] + Te, se.pos[1] + (ve.y ?? 0)]), He = t.comfyApp.canvasPosToClientPos([se.pos[0] + se.size[0] - Te, se.pos[1] + (ve.y ?? 0) + (ve.computedHeight ?? 24)]);
      return !Je || !He ? q(se) : new DOMRect(Je[0], Je[1], He[0] - Je[0], He[1] - Je[1]);
    }
    function Ee(F) {
      var se, ve, Te, Je, He, nt;
      const V = ((Te = (ve = (se = t.comfyApp) == null ? void 0 : se.graph) == null ? void 0 : ve.getNodeById) == null ? void 0 : Te.call(ve, String(F.node_id))) ?? ((nt = (He = (Je = t.comfyApp) == null ? void 0 : Je.rootGraph) == null ? void 0 : He.getNodeById) == null ? void 0 : nt.call(He, String(F.node_id)));
      return q(V);
    }
    const _e = N(() => (S.value, P.value.inputs.map((F, V) => {
      const se = D(ue(F));
      return se ? {
        key: `input-${V}-${F.node_id}-${F.widget_idx ?? "na"}`,
        style: se,
        active: x.value === V
      } : null;
    }).filter((F) => !!F))), ke = N(() => (S.value, P.value.outputs.map((F, V) => {
      const se = D(Ee(F));
      return se ? {
        key: `output-${V}-${F.node_id}-${F.selector ?? "primary"}`,
        style: se,
        active: b.value === V
      } : null;
    }).filter((F) => !!F)));
    function Ne(F) {
      var St, re, z, fe, qe, ct, It, at, $t, Ut;
      if (ne(F.target)) return null;
      const V = (St = t.comfyApp) == null ? void 0 : St.canvas;
      if (!V) return null;
      const se = (re = V.convertEventToCanvasOffset) == null ? void 0 : re.call(V, F);
      if (!se || se.length < 2) return null;
      const [ve, Te] = se, Je = V.graph || ((z = t.comfyApp) == null ? void 0 : z.graph) || ((fe = t.comfyApp) == null ? void 0 : fe.rootGraph), He = ((qe = Je == null ? void 0 : Je.getNodeOnPos) == null ? void 0 : qe.call(Je, ve, Te, V.visible_nodes)) || ((ct = V.getNodeOnPos) == null ? void 0 : ct.call(V, ve, Te)) || Ve(F.target);
      if (!He) return null;
      const nt = (It = He.getWidgetOnPos) == null ? void 0 : It.call(He, ve, Te, !0);
      if (nt)
        return { kind: "input", node: He, widget: nt, canvasX: ve, canvasY: Te };
      const yt = ((at = He.getOutputOnPos) == null ? void 0 : at.call(He, [ve, Te])) || ((Ut = ($t = He.constructor) == null ? void 0 : $t.nodeData) != null && Ut.output_node ? { name: He.title || He.type || "output", type: "image" } : null);
      return yt ? { kind: "output", node: He, output: yt, canvasX: ve, canvasY: Te } : null;
    }
    function Oe(F, V) {
      var nt;
      const se = Array.isArray(F.widgets) ? F.widgets.indexOf(V) : -1, ve = P.value.inputs.findIndex(
        (yt) => String(yt.node_id) === String(F.id) && yt.widget_idx === se
      );
      if (ve >= 0) {
        x.value = ve;
        return;
      }
      const Te = typeof ((nt = V == null ? void 0 : V.options) == null ? void 0 : nt.property) == "string" ? V.options.property : void 0, Je = (V == null ? void 0 : V.name) || Te || "input", He = {
        name: me(String(Je), `input_${P.value.inputs.length + 1}`),
        display_name: String((V == null ? void 0 : V.name) || Te || `Input ${P.value.inputs.length + 1}`),
        type: Be(V == null ? void 0 : V.type),
        node_id: String(F.id),
        widget_idx: se >= 0 ? se : void 0,
        field_key: Te,
        required: !0,
        default: (V == null ? void 0 : V.value) ?? ""
      };
      ee(He.type) && (He.min = U(V, "min"), He.max = U(V, "max")), ce(He.type) && (He.enum_values = ge(V)), P.value.inputs.push(He), x.value = P.value.inputs.length - 1, b.value = null;
    }
    function Me(F, V) {
      const se = Array.isArray(F.outputs) ? F.outputs.indexOf(V) : -1, ve = se >= 0 ? `slot:${se}` : "primary", Te = P.value.outputs.findIndex(
        (He) => String(He.node_id) === String(F.id) && (He.selector || "primary") === ve
      );
      if (Te >= 0) {
        b.value = Te;
        return;
      }
      const Je = {
        name: me(String((V == null ? void 0 : V.name) || "output"), `output_${P.value.outputs.length + 1}`),
        display_name: String((V == null ? void 0 : V.name) || `Output ${P.value.outputs.length + 1}`),
        type: Be(V == null ? void 0 : V.type),
        node_id: String(F.id),
        selector: ve
      };
      P.value.outputs.push(Je), b.value = P.value.outputs.length - 1, x.value = null;
    }
    function xe(F) {
      var ve, Te, Je;
      if (!r.value) {
        O.value = null, T.value = null;
        return;
      }
      const V = Ne(F);
      if (!V) {
        O.value = null, T.value = null;
        return;
      }
      if (V.kind === "input") {
        const He = Array.isArray(V.node.widgets) ? V.node.widgets.indexOf(V.widget) : -1, nt = D(((ve = Ye(V.node.id, He)) == null ? void 0 : ve.getBoundingClientRect()) ?? ue({
          node_id: String(V.node.id),
          widget_idx: He >= 0 ? He : void 0
        }));
        if (!nt) {
          O.value = null, T.value = null;
          return;
        }
        O.value = {
          kind: "input",
          label: `${((Te = V.widget) == null ? void 0 : Te.name) || "widget"} · Node ${V.node.id}`
        }, T.value = { kind: "input", style: nt };
        return;
      }
      const se = D(q(V.node));
      if (!se) {
        O.value = null, T.value = null;
        return;
      }
      O.value = {
        kind: "output",
        label: `${((Je = V.output) == null ? void 0 : Je.name) || V.node.title || V.node.type || "output"} · Node ${V.node.id}`
      }, T.value = { kind: "output", style: se };
    }
    function je(F) {
      var ve, Te, Je;
      if (!r.value || !w.value || F.button !== 0) return;
      const V = Ne(F);
      if (!V) return;
      const se = (ve = t.comfyApp) == null ? void 0 : ve.canvas;
      if (se) {
        if (V.kind === "input") {
          F.preventDefault(), F.stopImmediatePropagation(), F.stopPropagation(), Array.isArray(se.graph_mouse) && (se.graph_mouse[0] = V.canvasX, se.graph_mouse[1] = V.canvasY), (Te = se.selectNode) == null || Te.call(se, V.node, !1), Oe(V.node, V.widget);
          return;
        }
        F.preventDefault(), F.stopImmediatePropagation(), F.stopPropagation(), Array.isArray(se.graph_mouse) && (se.graph_mouse[0] = V.canvasX, se.graph_mouse[1] = V.canvasY), (Je = se.selectNode) == null || Je.call(se, V.node, !1), Me(V.node, V.output);
      }
    }
    function ze() {
      document.addEventListener("pointerdown", je, !0), document.addEventListener("pointermove", xe, !0);
    }
    function pe() {
      document.removeEventListener("pointerdown", je, !0), document.removeEventListener("pointermove", xe, !0);
    }
    async function J() {
      if (c.value) {
        u.value = !0, m.value = null;
        try {
          p.value = await o(c.value), w.value = Y(p.value.execution_contract);
        } catch (F) {
          m.value = F instanceof Error ? F.message : "Failed to load workflow contract";
        } finally {
          u.value = !1;
        }
      }
    }
    async function We() {
      if (!(!w.value || !c.value)) {
        d.value = !0, m.value = null;
        try {
          p.value = await n(c.value, w.value), w.value = Y(p.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Pe({ reopenPanel: !0 });
        } catch (F) {
          m.value = F instanceof Error ? F.message : "Failed to save workflow contract";
        } finally {
          d.value = !1;
        }
      }
    }
    async function be() {
      _.value = !0;
    }
    async function Qe() {
      if (c.value) {
        _.value = !1, v.value = !0, m.value = null;
        try {
          await l(c.value), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Pe({ reopenPanel: !0 });
        } catch (F) {
          m.value = F instanceof Error ? F.message : "Failed to delete workflow contract";
        } finally {
          v.value = !1;
        }
      }
    }
    function Ae() {
      window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      }));
    }
    function Pe(F) {
      r.value = !1, O.value = null, T.value = null, _.value = !1, F != null && F.reopenPanel && Ae();
    }
    async function W(F) {
      var ve, Te;
      const se = (Te = (ve = F.detail) == null ? void 0 : ve.workflowName) == null ? void 0 : Te.trim();
      se && (c.value = se, x.value = null, b.value = null, y.value = !1, r.value = !0, await J());
    }
    function de(F) {
      if (F.key === "Escape" && r.value) {
        if (_.value) {
          _.value = !1;
          return;
        }
        Pe({ reopenPanel: !0 });
      }
    }
    function ae() {
      if (I != null) return;
      const F = () => {
        if (S.value += 1, !r.value) {
          I = null;
          return;
        }
        I = window.requestAnimationFrame(F);
      };
      I = window.requestAnimationFrame(F);
    }
    function Ke() {
      I != null && (window.cancelAnimationFrame(I), I = null);
    }
    return kt(r, (F) => {
      F ? (ze(), ae()) : (pe(), Ke());
    }), rt(() => {
      window.addEventListener("comfygit:open-io-mapping", W), window.addEventListener("keydown", de);
    }), sa(() => {
      pe(), Ke(), window.removeEventListener("comfygit:open-io-mapping", W), window.removeEventListener("keydown", de);
    }), (F, V) => r.value ? (a(), i("div", Z7, [
      s("div", eM, [
        (a(!0), i(G, null, ye(_e.value, (se) => (a(), i("div", {
          key: se.key,
          class: Ue(["io-highlight", "io-highlight-input", { active: se.active }]),
          style: Wt(se.style)
        }, null, 6))), 128)),
        (a(!0), i(G, null, ye(ke.value, (se) => (a(), i("div", {
          key: se.key,
          class: Ue(["io-highlight", "io-highlight-output", { active: se.active }]),
          style: Wt(se.style)
        }, null, 6))), 128)),
        T.value ? (a(), i("div", {
          key: 0,
          class: Ue(["io-highlight", T.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Wt(T.value.style)
        }, null, 6)) : h("", !0)
      ]),
      s("div", tM, [
        s("div", sM, [
          V[8] || (V[8] = s("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          s("div", oM, f(c.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          O.value ? (a(), i("div", nM, " Hovering " + f(O.value.kind) + ": " + f(O.value.label), 1)) : h("", !0)
        ]),
        s("div", aM, [
          k(Le, {
            size: "sm",
            variant: "secondary",
            onClick: V[0] || (V[0] = (se) => Pe({ reopenPanel: !0 }))
          }, {
            default: g(() => [...V[9] || (V[9] = [
              C(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      s("aside", lM, [
        s("div", iM, [
          u.value ? (a(), i("div", rM, " Loading workflow contract... ")) : m.value ? (a(), i("div", cM, f(m.value), 1)) : w.value ? (a(), i(G, { key: 2 }, [
            s("section", uM, [
              s("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: V[1] || (V[1] = (se) => y.value = !y.value)
              }, [
                V[10] || (V[10] = s("span", null, "Contract Details", -1)),
                s("span", dM, f(y.value ? "▾" : "▸"), 1)
              ]),
              y.value ? (a(), i("div", fM, [
                k(Lt, { label: "Default Contract" }, {
                  default: g(() => [
                    k(wt, {
                      "model-value": w.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": Re
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                k(Lt, { label: "Display Name" }, {
                  default: g(() => [
                    k(wt, {
                      modelValue: P.value.display_name,
                      "onUpdate:modelValue": V[2] || (V[2] = (se) => P.value.display_name = se),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                k(Lt, { label: "Description" }, {
                  default: g(() => [
                    k(Co, {
                      modelValue: P.value.description,
                      "onUpdate:modelValue": V[3] || (V[3] = (se) => P.value.description = se),
                      rows: 2,
                      placeholder: "Optional description for this contract"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])) : h("", !0)
            ]),
            s("section", mM, [
              s("span", vM, f(B.value), 1),
              s("span", pM, f(P.value.inputs.length) + " input" + f(P.value.inputs.length === 1 ? "" : "s"), 1),
              s("span", gM, f(P.value.outputs.length) + " output" + f(P.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            s("section", hM, [
              s("div", yM, [
                k(oo, { variant: "section" }, {
                  default: g(() => [...V[11] || (V[11] = [
                    C("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              P.value.inputs.length ? h("", !0) : (a(), i("div", wM, " No inputs configured. ")),
              (a(!0), i(G, null, ye(P.value.inputs, (se, ve) => (a(), i("div", {
                key: `input-${ve}`,
                class: Ue(["item-card", { selected: x.value === ve }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Te) => X(ve)
                }, [
                  s("div", null, [
                    s("div", kM, f(se.name || `Input ${ve + 1}`), 1),
                    s("div", bM, [
                      C(" Node " + f(se.node_id || "?"), 1),
                      se.widget_idx !== void 0 ? (a(), i(G, { key: 0 }, [
                        C(" · Widget " + f(se.widget_idx), 1)
                      ], 64)) : h("", !0)
                    ]),
                    s("div", $M, [
                      s("span", null, f(se.type || "string"), 1),
                      s("span", null, f(se.required ? "required" : "optional"), 1),
                      se.default !== void 0 && se.default !== "" ? (a(), i("span", CM, "default " + f(De(se.default)), 1)) : h("", !0)
                    ])
                  ]),
                  k(Le, {
                    size: "sm",
                    variant: "ghost",
                    onClick: ft((Te) => Se(ve), ["stop"])
                  }, {
                    default: g(() => [...V[12] || (V[12] = [
                      C(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, _M),
                x.value === ve ? (a(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: V[4] || (V[4] = ft(() => {
                  }, ["stop"]))
                }, [
                  k(Lt, { label: "Name" }, {
                    default: g(() => [
                      k(wt, {
                        modelValue: se.name,
                        "onUpdate:modelValue": (Te) => se.name = Te,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Lt, { label: "Display Name" }, {
                    default: g(() => [
                      k(wt, {
                        modelValue: se.display_name,
                        "onUpdate:modelValue": (Te) => se.display_name = Te,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Lt, { label: "Type" }, {
                    default: g(() => [
                      k(Rn, {
                        "model-value": se.type,
                        options: L,
                        "full-width": "",
                        "onUpdate:modelValue": (Te) => se.type = Te
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Lt, { label: "Required" }, {
                    default: g(() => [
                      k(Rn, {
                        "model-value": se.required ? "true" : "false",
                        options: A,
                        "full-width": "",
                        "onUpdate:modelValue": (Te) => se.required = Te === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Lt, {
                    class: Ue({ "item-grid-full": se.type === "string" || se.type === "enum" }),
                    label: "Default"
                  }, {
                    default: g(() => [
                      se.type === "string" ? (a(), R(Co, {
                        key: 0,
                        "model-value": oe(se.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (Te) => se.default = Te
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (a(), R(wt, {
                        key: 1,
                        modelValue: se.default,
                        "onUpdate:modelValue": (Te) => se.default = Te,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  ee(se.type) ? (a(), R(Lt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: g(() => [
                      k(wt, {
                        "model-value": he(se.min),
                        "full-width": "",
                        "onUpdate:modelValue": (Te) => se.min = te(Te)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  ee(se.type) ? (a(), R(Lt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: g(() => [
                      k(wt, {
                        "model-value": he(se.max),
                        "full-width": "",
                        "onUpdate:modelValue": (Te) => se.max = te(Te)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  ce(se.type) ? (a(), R(Lt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: g(() => [
                      k(Co, {
                        "model-value": K(se.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (Te) => se.enum_values = ie(Te)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0)
                ])) : h("", !0)
              ], 2))), 128))
            ]),
            s("section", xM, [
              s("div", SM, [
                k(oo, { variant: "section" }, {
                  default: g(() => [...V[13] || (V[13] = [
                    C("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              P.value.outputs.length ? h("", !0) : (a(), i("div", IM, " No outputs configured. ")),
              (a(!0), i(G, null, ye(P.value.outputs, (se, ve) => (a(), i("div", {
                key: `output-${ve}`,
                class: Ue(["item-card", { selected: b.value === ve }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Te) => E(ve)
                }, [
                  s("div", null, [
                    s("div", TM, f(se.name || `Output ${ve + 1}`), 1),
                    s("div", MM, [
                      C(" Node " + f(se.node_id || "?"), 1),
                      se.selector ? (a(), i(G, { key: 0 }, [
                        C(" · " + f(se.selector), 1)
                      ], 64)) : h("", !0)
                    ]),
                    s("div", PM, [
                      s("span", null, f(se.type || "file"), 1)
                    ])
                  ]),
                  k(Le, {
                    size: "sm",
                    variant: "ghost",
                    onClick: ft((Te) => H(ve), ["stop"])
                  }, {
                    default: g(() => [...V[14] || (V[14] = [
                      C(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, EM),
                b.value === ve ? (a(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: V[5] || (V[5] = ft(() => {
                  }, ["stop"]))
                }, [
                  k(Lt, { label: "Name" }, {
                    default: g(() => [
                      k(wt, {
                        modelValue: se.name,
                        "onUpdate:modelValue": (Te) => se.name = Te,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Lt, { label: "Display Name" }, {
                    default: g(() => [
                      k(wt, {
                        modelValue: se.display_name,
                        "onUpdate:modelValue": (Te) => se.display_name = Te,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Lt, { label: "Type" }, {
                    default: g(() => [
                      k(Rn, {
                        "model-value": se.type,
                        options: L,
                        "full-width": "",
                        "onUpdate:modelValue": (Te) => se.type = Te
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : h("", !0)
              ], 2))), 128))
            ])
          ], 64)) : h("", !0)
        ]),
        s("div", RM, [
          s("div", LM, [
            k(Le, {
              variant: "secondary",
              onClick: V[6] || (V[6] = (se) => Pe({ reopenPanel: !0 }))
            }, {
              default: g(() => [...V[15] || (V[15] = [
                C(" Cancel ", -1)
              ])]),
              _: 1
            })
          ]),
          s("div", NM, [
            k(Le, {
              variant: "danger",
              disabled: !Q.value,
              loading: v.value,
              onClick: be
            }, {
              default: g(() => [...V[16] || (V[16] = [
                C(" Delete ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            k(Le, {
              variant: "primary",
              loading: d.value,
              onClick: We
            }, {
              default: g(() => [...V[17] || (V[17] = [
                C(" Save ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]),
      _.value ? (a(), R($l, {
        key: 0,
        title: "Delete Workflow Contract",
        message: `Delete the contract for ${c.value}?`,
        warning: "This removes the saved input/output contract for this workflow. The workflow itself will not be deleted.",
        "confirm-label": "Delete",
        "cancel-label": "Cancel",
        destructive: !0,
        onConfirm: Qe,
        onCancel: V[7] || (V[7] = (se) => _.value = !1)
      }, null, 8, ["message"])) : h("", !0)
    ])) : h("", !0);
  }
}), OM = /* @__PURE__ */ Ce(DM, [["__scopeId", "data-v-13515b27"]]), AM = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', UM = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', zM = {
  comfy: AM,
  phosphor: UM
}, Sl = "comfy", mc = "comfygit-theme";
let Xs = null, vc = Sl;
function VM() {
  try {
    const e = localStorage.getItem(mc);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Sl;
}
function pc(e = Sl) {
  Xs && Xs.remove(), Xs = document.createElement("style"), Xs.id = "comfygit-theme-styles", Xs.setAttribute("data-theme", e), Xs.textContent = zM[e], document.head.appendChild(Xs), document.body.setAttribute("data-comfygit-theme", e), vc = e;
  try {
    localStorage.setItem(mc, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function FM() {
  return vc;
}
function BM(e) {
  pc(e);
}
function WM(e) {
  var r;
  const { ui_id: t, state: o } = e || {}, n = (o == null ? void 0 : o.history) || {};
  if (!t)
    return null;
  const l = n[t];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Il = document.createElement("link");
Il.rel = "stylesheet";
Il.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Il);
const GM = VM();
pc(GM);
sessionStorage.removeItem("ComfyGit.LastView");
sessionStorage.removeItem("ComfyGit.LastSection");
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), BM(e);
  },
  getTheme: () => {
    const e = FM();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Ms = null, Yo = null, Xt = null, Xo = null, Uo = null, Ci = null, zo = null, xi = null, Vo = null, Si = null;
const xo = $(null);
let rn = "no_workspace", gc = !1;
async function Ln() {
  var e;
  if (!((e = Zt) != null && e.api)) return null;
  try {
    const t = await Zt.api.fetchApi("/v2/comfygit/status");
    t.ok && (xo.value = await t.json());
  } catch {
  }
}
async function Za() {
  var e;
  if ((e = Zt) != null && e.api)
    try {
      const t = await Zt.api.fetchApi("/v2/setup/status");
      if (t.ok) {
        const o = await t.json();
        rn = o.state, gc = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function el() {
  var t;
  if (rn === "managed" || !gc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((t = o.textContent) == null ? void 0 : t.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function jM() {
  if (!xo.value) return !1;
  const e = xo.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || xo.value.has_changes;
}
function Cn(e) {
  Wo(), Ms = document.createElement("div"), Ms.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ms.appendChild(t), Ms.addEventListener("click", (n) => {
    n.target === Ms && Wo();
  });
  const o = (n) => {
    n.key === "Escape" && (Wo(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), Yo = fn({
    render: () => Po(WE, {
      initialView: e,
      onClose: Wo,
      onStatusUpdate: async (n) => {
        xo.value = n, Zo(), await Za(), tl(), el();
      }
    })
  }), Yo.mount(t), document.body.appendChild(Ms);
}
function Wo() {
  Yo && (Yo.unmount(), Yo = null), Ms && (Ms.remove(), Ms = null);
}
function Ii(e) {
  Fo(), Xt = document.createElement("div"), Xt.className = "comfygit-commit-popover-container";
  const t = e.getBoundingClientRect();
  Xt.style.position = "fixed", Xt.style.top = `${t.bottom + 8}px`, Xt.style.right = `${window.innerWidth - t.right}px`, Xt.style.zIndex = "10001";
  const o = (l) => {
    Xt && !Xt.contains(l.target) && l.target !== e && (Fo(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const n = (l) => {
    l.key === "Escape" && (Fo(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), Xo = fn({
    render: () => Po(cc, {
      status: xo.value,
      onClose: Fo,
      onCommitted: (l) => {
        Fo(), HM(l.success, l.message), Ln().then(Zo);
      }
    })
  }), Xo.mount(Xt), document.body.appendChild(Xt);
}
function Fo() {
  Xo && (Xo.unmount(), Xo = null), Xt && (Xt.remove(), Xt = null);
}
function HM(e, t) {
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
  const r = document.createElement("span");
  r.textContent = t, o.appendChild(r), document.body.appendChild(o), setTimeout(() => {
    o.style.opacity = "0", o.style.transition = "opacity 0.2s ease", setTimeout(() => o.remove(), 200);
  }, 3e3);
}
function qM() {
  Uo || (Uo = document.createElement("div"), Uo.className = "comfygit-download-queue-root", Ci = fn({
    render: () => Po(AT)
  }), Ci.mount(Uo), document.body.appendChild(Uo), console.log("[ComfyGit] Model download queue mounted"));
}
function KM() {
  zo || (zo = document.createElement("div"), zo.className = "comfygit-missing-resources-root", xi = fn({
    render: () => Po(X7)
  }), xi.mount(zo), document.body.appendChild(zo), console.log("[ComfyGit] Missing resources popup mounted"));
}
function JM() {
  Vo || (Vo = document.createElement("div"), Vo.className = "comfygit-io-mapping-root", Si = fn({
    render: () => Po(OM, {
      comfyApp: Zt
    })
  }), Si.mount(Vo), document.body.appendChild(Vo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let Kt = null;
function Zo() {
  if (!Kt) return;
  const e = Kt.querySelector(".commit-indicator");
  e && (e.style.display = jM() ? "block" : "none");
}
function tl() {
  if (!Kt) return;
  const e = rn !== "managed";
  Kt.disabled = e, Kt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const hc = document.createElement("style");
hc.textContent = `
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
document.head.appendChild(hc);
Zt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => Cn()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        Kt && !Kt.disabled && Ii(Kt);
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
    if (rn === "managed")
      try {
        await Promise.all([
          Zt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
          Zt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
        ]);
      } catch (o) {
        console.warn("[ComfyGit] Failed to disable built-in warnings:", o);
      }
    window.__comfygit_pending_workflow = e;
  },
  async afterConfigureGraph(e) {
    if (rn !== "managed") return;
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
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = Cn, Kt = document.createElement("button"), Kt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Kt.innerHTML = 'Commit <span class="commit-indicator"></span>', Kt.title = "Quick Commit", Kt.onclick = () => Ii(Kt), e.appendChild(t), e.appendChild(Kt), (r = (l = Zt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Zt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), qM(), KM(), JM(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      Cn(u);
    })), window.addEventListener("comfygit:close-panel", (() => {
      Wo();
    }));
    const { loadPendingDownloads: o } = Ro();
    o(), await Promise.all([Ln(), Za()]), Zo(), tl(), el(), setTimeout(el, 100), setInterval(async () => {
      await Promise.all([Ln(), Za()]), Zo(), tl();
    }, 3e4);
    const n = Zt.api;
    if (n) {
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
        const y = document.createElement("button");
        y.textContent = "Refresh", y.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, y.onmouseover = () => y.style.background = "var(--comfy-input-bg)", y.onmouseout = () => y.style.background = "var(--comfy-menu-bg)", y.onclick = () => c(), p.appendChild(y);
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
        `, _.onmouseover = () => _.style.opacity = "1", _.onmouseout = () => _.style.opacity = "0.6", _.onclick = () => p.remove(), p.appendChild(_), document.body.appendChild(p), console.log("[ComfyGit] Refresh notification displayed");
      }, d = function(p) {
        const w = document.getElementById("comfygit-error-toast");
        w && w.remove();
        const y = document.createElement("div");
        y.id = "comfygit-error-toast", y.style.cssText = `
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
        _.textContent = "⚠️", _.style.fontSize = "20px", y.appendChild(_);
        const x = document.createElement("div");
        x.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const b = document.createElement("div");
        b.textContent = "Node installation failed", b.style.cssText = "font-weight: 600; color: #e53935;", x.appendChild(b);
        const S = document.createElement("div");
        S.textContent = "Dependency conflict detected", S.style.cssText = "font-size: 12px; opacity: 0.8;", x.appendChild(S), y.appendChild(x);
        const O = document.createElement("button");
        O.textContent = "View Logs", O.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, O.onmouseover = () => O.style.background = "#c62828", O.onmouseout = () => O.style.background = "#e53935", O.onclick = () => {
          y.remove(), Cn("debug-env");
        }, y.appendChild(O);
        const T = document.createElement("button");
        T.textContent = "×", T.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, T.onmouseover = () => T.style.opacity = "1", T.onmouseout = () => T.style.opacity = "0.6", T.onclick = () => y.remove(), y.appendChild(T), document.body.appendChild(y), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && y.remove();
        }, 1e4);
      }, v = function(p) {
        const w = document.getElementById("comfygit-restart-toast");
        w && w.remove();
        const y = document.createElement("div");
        y.id = "comfygit-restart-toast", y.style.cssText = `
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
        _.textContent = "✅", _.style.fontSize = "20px", y.appendChild(_);
        const x = document.createElement("div");
        x.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const b = document.createElement("div");
        b.textContent = "To apply changes, please restart ComfyUI", b.style.cssText = "font-weight: 500; color: #fff;", x.appendChild(b);
        const S = document.createElement("div");
        S.textContent = `${p} node package${p > 1 ? "s" : ""} ready to install`, S.style.cssText = "font-size: 12px; opacity: 0.7;", x.appendChild(S), y.appendChild(x);
        const O = document.createElement("button");
        O.textContent = "Apply Changes", O.style.cssText = `
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
        `, O.onmouseover = () => O.style.background = "rgba(255,255,255,0.1)", O.onmouseout = () => O.style.background = "transparent", O.onclick = async () => {
          O.disabled = !0, O.textContent = "Restarting...", O.style.opacity = "0.7", b.textContent = "Restarting...", S.textContent = "Applying changes, please wait...";
          try {
            const I = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Zt.refreshComboInNodes && (await Zt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", b.textContent = "Nodes Installed", b.style.color = "#4caf50", S.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, y.style.borderColor = "#4caf50", O.style.display = "none", setTimeout(() => {
                  y.remove();
                }, 3e3);
              } catch (L) {
                console.error("[ComfyGit] Failed to refresh nodes:", L), _.textContent = "✅", b.textContent = "Restart Complete", b.style.color = "#4caf50", S.textContent = "Refresh the page to load new nodes.", y.style.borderColor = "#4caf50", O.style.display = "none";
              }
            };
            n.addEventListener("reconnected", I, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (I) {
            console.error("[ComfyGit] Failed to restart:", I), b.textContent = "Restart Failed", b.style.color = "#e53935", S.textContent = "Could not restart server. Try again.", y.style.borderColor = "#e53935", O.textContent = "Try Again", O.disabled = !1, O.style.opacity = "1";
          }
        }, y.appendChild(O);
        const T = document.createElement("button");
        T.textContent = "×", T.title = "Dismiss (restart later)", T.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, T.onmouseover = () => T.style.opacity = "1", T.onmouseout = () => T.style.opacity = "0.6", T.onclick = () => y.remove(), y.appendChild(T), document.body.appendChild(y), console.log(`[ComfyGit] Restart required notification displayed (${p} packages installed)`);
      };
      n.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: w, workflow_name: y } = p.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${y}`), await Ln(), Zo();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let m = !1;
      n.addEventListener("status", async (p) => {
        const w = p.detail != null;
        w && !m && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), m = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (p) => {
        const w = WM(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: y = 1 } = w.detail || {};
        v(y);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
